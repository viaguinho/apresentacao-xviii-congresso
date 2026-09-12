/**
 * Gera a apresentação como UM único arquivo .html, sem nenhuma dependência
 * externa: sem servidor, sem pasta de assets ao lado, sem internet.
 *
 * Pré-requisito: `npm run build` já rodou (precisa de dist/slide3-react.umd.js
 * e do CSS compilado). O caminho normal é `npm run build:standalone`.
 *
 * O que precisa acontecer para o arquivo abrir com duplo clique (file://):
 *
 *  1. CSS, fontes, scripts e mídia viram texto/base64 dentro do próprio HTML.
 *  2. O runtime do deck (support.js) busca `./deck-stage.js` via fetch(), que
 *     o navegador bloqueia em file://. Ele aceita um atalho oficial:
 *     `window.__resourceBlobs[url]` — registramos o Blob antes e o fetch nunca
 *     acontece.
 *  3. O mesmo runtime baixa React 18 UMD do unpkg. Definimos window.React e
 *     window.ReactDOM antes dele carregar, e o download é pulado.
 *  4. `window.__resources = {}` desarma o fetch(location.href) do boot.
 */
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { optimizeMedia, fmt } from './optimize-media.mjs';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cacheDir = path.join(rootDir, '.standalone-cache');
const OUT_NAME = 'Apresentação XVIII Congresso Dr. Charlington Cavalcante.html';
const outPath = process.argv[2] || path.join(os.homedir(), 'Downloads', OUT_NAME);

const DS_DIR = '_ds/charlington-cavalcante-design-system-db509cb6-5804-4432-85c3-e419bd522d06';
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

const MIME = {
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif',
};

const read = (p) => fs.readFileSync(path.join(rootDir, p), 'utf8');

/** Um `</script>` dentro do código quebraria a tag que o envolve. */
const safeInline = (js) => js.replace(/<\/script/gi, '<\\/script');

function dataUri(filePath) {
  const mime = MIME[path.extname(filePath).toLowerCase()];
  if (!mime) throw new Error(`Tipo não mapeado: ${filePath}`);
  return `data:${mime};base64,${fs.readFileSync(filePath).toString('base64')}`;
}

// ---------------------------------------------------------------- downloads

/** Arquivos remotos ficam em cache para o build não depender da rede sempre. */
async function fetchCached(url, binary = false) {
  const key = path.join(cacheDir, 'net', Buffer.from(url).toString('base64url').slice(0, 120));
  if (fs.existsSync(key)) return binary ? fs.readFileSync(key) : fs.readFileSync(key, 'utf8');
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status} em ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(key), { recursive: true });
  fs.writeFileSync(key, buf);
  return binary ? buf : buf.toString('utf8');
}

/**
 * Baixa um CSS de fonte e devolve o mesmo CSS com os .woff2 embutidos.
 * Subsets não-latinos (cirílico, grego, vietnamita) são descartados: o deck é
 * todo em português e cada subset extra são dezenas de KB a mais.
 */
async function inlineFontCss(url, label) {
  const css = await fetchCached(url);
  const blocks = [];
  const re = /(\/\*([^*]*)\*\/\s*)?@font-face\s*\{([^}]*)\}/g;
  let m;
  while ((m = re.exec(css)) !== null) {
    const subset = (m[2] || 'latin').trim();
    if (!/latin/i.test(subset)) continue;
    blocks.push(m[3]);
  }
  if (!blocks.length) throw new Error(`Nenhuma @font-face latina em ${url}`);

  const out = [];
  for (const body of blocks) {
    // Só woff2: é o formato mais leve e roda em todo navegador desde 2016.
    const woff2 = /url\(\s*['"]?([^'")]+\.woff2)['"]?\s*\)/i.exec(body);
    if (!woff2) continue;
    let fontUrl = woff2[1];
    if (fontUrl.startsWith('//')) fontUrl = 'https:' + fontUrl;
    const bytes = await fetchCached(fontUrl, true);
    const embedded = `url(data:font/woff2;base64,${bytes.toString('base64')}) format('woff2')`;
    const rebuilt = body.replace(/src\s*:[^;]+;/i, () => `src: ${embedded};`);
    out.push(`@font-face {${rebuilt}}`);
  }
  console.log(`  ${label.padEnd(12)} ${out.length} faces embutidas`);
  return out.join('\n');
}

// -------------------------------------------------------------------- build

async function main() {
  const bundlePath = path.join(rootDir, 'dist', 'slide3-react.umd.js');
  if (!fs.existsSync(bundlePath)) {
    throw new Error('dist/slide3-react.umd.js não existe — rode `npm run build` antes.');
  }

  console.log('\n[1/5] Otimizando mídia');
  const media = optimizeMedia();

  console.log('\n[2/5] Embutindo fontes');
  const fontCss = [
    await inlineFontCss(
      'https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700&display=swap',
      'Satoshi',
    ),
    await inlineFontCss(
      'https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap',
      'Urbanist',
    ),
    await inlineFontCss(
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap',
      'Inter',
    ),
  ].join('\n');

  console.log('\n[3/5] Montando o HTML');
  let html = read('index.html');

  // --- CSS: os <link> do <helmet> saem e viram um único <style> no <head>. ---
  const cssLinks = [
    `${DS_DIR}/tokens/fonts.css`,
    `${DS_DIR}/tokens/colors.css`,
    `${DS_DIR}/tokens/typography.css`,
    `${DS_DIR}/tokens/spacing.css`,
    `${DS_DIR}/tokens/shape.css`,
    `${DS_DIR}/tokens/effects.css`,
    `${DS_DIR}/tokens/motion.css`,
    `${DS_DIR}/tokens/base.css`,
  ];
  const cssParts = [fontCss];
  for (const href of cssLinks) {
    const tag = `<link rel="stylesheet" href="${href}">`;
    if (!html.includes(tag)) throw new Error(`<link> não encontrado: ${href}`);
    html = html.replace(tag + '\n', '');
    // O @import do Inter já foi resolvido acima; deixá-lo dispararia rede.
    cssParts.push(read(href).replace(/@import\s+url\([^)]*\);?/g, ''));
  }
  for (const [href, file] of [
    ['dist/apresentacao-xviii-congresso.css?v=50', 'dist/apresentacao-xviii-congresso.css'],
    ['src/styles/design-system-additions.css?v=50', 'src/styles/design-system-additions.css'],
  ]) {
    const tag = `<link rel="stylesheet" href="${href}">`;
    if (!html.includes(tag)) throw new Error(`<link> não encontrado: ${href}`);
    html = html.replace(tag + '\n', '');
    cssParts.push(read(file));
  }

  // Preconnect para fontes que não são mais baixadas.
  html = html
    .replace('<link rel="preconnect" href="https://fonts.googleapis.com">\n', '')
    .replace('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n', '')
    .replace(
      '<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700&display=swap">\n',
      '',
    )
    .replace(
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap">\n',
      '',
    );

  // --- Scripts do <helmet> ---
  const dsBundleTag = `<script src="${DS_DIR}/_ds_bundle.js"></script>`;
  if (!html.includes(dsBundleTag)) throw new Error('<script> do design system não encontrado');
  html = html.replace(dsBundleTag + '\n', '');

  // O entry TypeScript só existe no dev server.
  html = html.replace('<script type="module" src="/src/main.tsx"></script>\n', '');

  // O carregador condicional do bundle React é substituído pelo bundle inline.
  const loaderRe = /<script>\s*\n\s*if \(!location\.port \|\| location\.protocol === 'file:'\) \{[\s\S]*?<\/script>\n/;
  if (!loaderRe.test(html)) throw new Error('Carregador do bundle React não encontrado');
  html = html.replace(loaderRe, '');

  // --- Mídia: cada caminho vira data URI, do mais longo para o mais curto ---
  const paths = [...media.keys()].sort((a, b) => b.length - a.length);
  let mediaBytes = 0;
  const inlineMediaIn = (text) => {
    for (const rel of paths) {
      if (!text.includes(rel)) continue;
      text = text.split(rel).join(dataUri(media.get(rel)));
    }
    return text;
  };
  for (const rel of paths) mediaBytes += fs.statSync(media.get(rel)).size;

  html = inlineMediaIn(html);
  const reactBundle = inlineMediaIn(fs.readFileSync(bundlePath, 'utf8'));

  // --- Bootstrap: tudo que precisa existir ANTES do support.js rodar ---
  const react18 = await fetchCached('https://unpkg.com/react@18.3.1/umd/react.production.min.js');
  const reactDom18 = await fetchCached(
    'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js',
  );
  const deckStageB64 = fs.readFileSync(path.join(rootDir, 'deck-stage.js')).toString('base64');

  const bootstrap = `
<script>${safeInline(react18)}</script>
<script>${safeInline(reactDom18)}</script>
<script>
/* Arquivo único: nada aqui pode tocar a rede nem o disco. */
window.__resources = {};
(function () {
  var b64 = "${deckStageB64}";
  var bin = atob(b64);
  var bytes = new Uint8Array(bin.length);
  for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  window.__resourceBlobs = {
    "./deck-stage.js": new Blob([bytes], { type: "text/javascript" })
  };
})();
</script>
<style>
${cssParts.join('\n')}
</style>
<script>${safeInline(read('support.js'))}</script>
<script>${safeInline(read('slide16-flow.js'))}</script>
<script>${safeInline(read(`${DS_DIR}/_ds_bundle.js`))}</script>
`;

  for (const tag of ['<script src="./support.js"></script>', '<script src="./slide16-flow.js"></script>']) {
    if (!html.includes(tag)) throw new Error(`<script> não encontrado: ${tag}`);
    html = html.replace(tag + '\n', '');
  }
  html = html.replace('<meta name="viewport" content="width=device-width, initial-scale=1">', (m) => m + bootstrap);

  // O bundle React fecha o body, como o <script defer> fazia no original.
  // Função como replacement: em String.replace(str, str) sequências como `$'`
  // dentro do bundle seriam interpretadas e duplicariam o arquivo inteiro.
  html = html.replace('</body>', () => `<script>${safeInline(reactBundle)}</script>\n</body>`);

  html = html.replace(
    '<meta charset="utf-8">',
    () => '<meta charset="utf-8">\n<title>Desenvolvimento infanto-juvenil — Dr. Charlington Cavalcante</title>',
  );

  console.log('\n[4/5] Conferindo se sobrou alguma dependência externa');
  const leftovers = [
    [/(src|href)\s*=\s*["'](?!data:|#)(?:\.\/|\/)?(assets|dist|_ds|src)\//g, 'caminho local'],
    [/(src|href)\s*=\s*["']https?:\/\//g, 'URL remota'],
    [/["']assets\/[A-Za-z0-9._/-]+["']/g, 'asset em string JS'],
  ];
  let clean = true;
  for (const [re, label] of leftovers) {
    const hits = [...html.matchAll(re)].map((h) => h[0]);
    if (hits.length) {
      clean = false;
      console.log(`  ⚠ ${label}: ${[...new Set(hits)].slice(0, 5).join(', ')}`);
    }
  }
  if (clean) console.log('  Nenhuma. O arquivo é autossuficiente.');

  console.log('\n[5/5] Gravando');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html, 'utf8');
  console.log(`  ${outPath}`);
  console.log(`  ${fmt(Buffer.byteLength(html))} (mídia otimizada: ${fmt(mediaBytes)})\n`);
}

main().catch((err) => {
  console.error('\n✗ Build falhou:', err.message, '\n');
  process.exit(1);
});
