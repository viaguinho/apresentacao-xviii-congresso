/**
 * Renderiza cada slide do deck em PNG 1920x1080 e extrai o texto de cada um.
 *
 * Dirige um Chrome headless pelo DevTools Protocol: abre o arquivo standalone
 * uma única vez, chama `deckStage.goTo(i)` para cada slide, espera a animação
 * de entrada terminar e captura a tela. Uma carga só para os 45 slides — o
 * arquivo tem 12 MB e recarregar por slide levaria minutos.
 *
 *   node scripts/export-slides.mjs [caminho-do-html]
 *
 * Saída: .standalone-cache/slides/slide-NN.png e .standalone-cache/slides/texto.json
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(rootDir, '.standalone-cache', 'slides');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9333;

const source =
  process.argv[2] ||
  path.join(os.homedir(), 'Downloads', 'Apresentação XVIII Congresso Dr. Charlington Cavalcante.html');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

class Cdp {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    ws.addEventListener('message', (e) => {
      const msg = JSON.parse(e.data);
      const slot = this.pending.get(msg.id);
      if (!slot) return;
      this.pending.delete(msg.id);
      msg.error ? slot.reject(new Error(msg.error.message)) : slot.resolve(msg.result);
    });
  }
  send(method, params = {}) {
    const id = ++this.id;
    this.ws.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
  }
  /** Avalia no contexto da página e devolve o valor já desempacotado. */
  async evaluate(expression) {
    const r = await this.send('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true,
    });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.text + ' :: ' + expression.slice(0, 80));
    return r.result.value;
  }
}

async function waitForTarget() {
  for (let i = 0; i < 60; i++) {
    try {
      const list = await fetch(`http://127.0.0.1:${PORT}/json/list`).then((r) => r.json());
      const page = list.find((t) => t.type === 'page' && t.webSocketDebuggerUrl);
      if (page) return page;
    } catch {}
    await sleep(500);
  }
  throw new Error('Chrome não respondeu na porta de debug');
}

async function main() {
  if (!fs.existsSync(source)) throw new Error(`Arquivo não encontrado: ${source}`);
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'deck-export-'));
  const chrome = spawn(
    CHROME,
    [
      '--headless=new',
      `--remote-debugging-port=${PORT}`,
      `--user-data-dir=${profile}`,
      '--window-size=1920,1080',
      '--force-device-scale-factor=1',
      '--hide-scrollbars',
      '--autoplay-policy=no-user-gesture-required',
      '--disable-gpu',
      '--no-first-run',
      '--no-default-browser-check',
      pathToFileURL(source).href,
    ],
    { stdio: 'ignore' },
  );

  try {
    const target = await waitForTarget();
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise((resolve, reject) => {
      ws.addEventListener('open', resolve, { once: true });
      ws.addEventListener('error', reject, { once: true });
    });
    const cdp = new Cdp(ws);
    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
      mobile: false,
    });

    // O arquivo tem 12 MB de data URI; o boot do deck leva alguns segundos.
    process.stdout.write('  aguardando o deck montar');
    let total = 0;
    for (let i = 0; i < 120; i++) {
      total = (await cdp.evaluate(`document.querySelectorAll('deck-stage section').length`)) || 0;
      const mounted = (await cdp.evaluate(`document.querySelectorAll('[data-mounted="true"]').length`)) || 0;
      if (total > 0 && mounted > 0) break;
      process.stdout.write('.');
      await sleep(1000);
    }
    if (!total) throw new Error('O deck não montou nenhuma section');
    console.log(`\n  ${total} slides detectados`);

    // Esconde a barra de navegação do deck: ela é chrome de apresentação ao
    // vivo, não conteúdo — no PowerPoint quem navega é o próprio PowerPoint.
    await cdp.evaluate(`
      (() => {
        const s = document.createElement('style');
        s.textContent = '.deck-overlay, .deck-rail, [class*="deck-overlay"], [class*="deck-rail"] { display: none !important; }';
        document.head.appendChild(s);
        return true;
      })()
    `);

    const texts = [];
    for (let i = 0; i < total; i++) {
      await cdp.evaluate(`document.querySelector('deck-stage').goTo(${i}), true`);
      await sleep(3200); // entrada das ilhas React + transição do deck

      const meta = await cdp.evaluate(`
        (() => {
          const s = document.querySelectorAll('deck-stage section')[${i}];
          if (!s) return null;
          const seen = new Set();
          const lines = [];
          s.querySelectorAll('h1,h2,h3,h4,h5,h6,p,li,span,div,td,th,text,tspan').forEach(el => {
            if (el.children.length) return;           // só folhas, evita duplicar
            const t = (el.textContent || '').replace(/\\s+/g, ' ').trim();
            if (!t || seen.has(t)) return;
            seen.add(t);
            lines.push(t);
          });
          return { label: s.getAttribute('data-screen-label') || '', lines };
        })()
      `);
      texts.push(meta || { label: '', lines: [] });

      const shot = await cdp.send('Page.captureScreenshot', { format: 'png', fromSurface: true });
      const file = path.join(outDir, `slide-${String(i + 1).padStart(2, '0')}.png`);
      fs.writeFileSync(file, Buffer.from(shot.data, 'base64'));
      const kb = (fs.statSync(file).size / 1024).toFixed(0);
      console.log(`  ${String(i + 1).padStart(2)} / ${total}  ${(meta?.label || '').padEnd(34)} ${kb.padStart(5)} KB`);
    }

    fs.writeFileSync(path.join(outDir, 'texto.json'), JSON.stringify(texts, null, 2), 'utf8');
    ws.close();
    console.log(`\n  PNGs e texto.json em ${outDir}`);
  } finally {
    chrome.kill('SIGKILL');
    fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  }
}

main().catch((e) => {
  console.error('\n✗ Export falhou:', e.message, '\n');
  process.exit(1);
});
