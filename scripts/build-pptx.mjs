/**
 * Monta o .pptx a partir dos PNGs e do texto gerados por export-slides.mjs.
 *
 * Cada slide entra como imagem full-bleed em um palco 13.333" x 7.5" — que é
 * exatamente 16:9, a mesma proporção do palco de 1920x1080 do deck. O desenho
 * chega ao PowerPoint pixel a pixel: cards, gráficos, órbitas e diagramas
 * ficam como foram projetados, sem nenhuma tentativa de redesenhar em formas
 * nativas (o que destruiria o layout).
 *
 * O texto não some: vai para as notas do apresentador (pesquisável pelo Find
 * do PowerPoint) e para o texto alternativo da imagem (leitores de tela).
 *
 *   node scripts/build-pptx.mjs [destino.pptx]
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const PptxGenJS = require('pptxgenjs');

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const slidesDir = path.join(rootDir, '.standalone-cache', 'slides');
const outPath =
  process.argv[2] ||
  path.join(os.homedir(), 'Downloads', 'Apresentação XVIII Congresso Dr. Charlington Cavalcante.pptx');

const TITLE = 'Desenvolvimento infanto-juvenil — aspectos cognitivos, emocionais e sociais';
const AUTHOR = 'Dr. Charlington Cavalcante';

function main() {
  const pngs = fs
    .readdirSync(slidesDir)
    .filter((f) => /^slide-\d+\.png$/.test(f))
    .sort();
  if (!pngs.length) {
    throw new Error(`Nenhum PNG em ${slidesDir} — rode node scripts/export-slides.mjs antes.`);
  }
  const texts = JSON.parse(fs.readFileSync(path.join(slidesDir, 'texto.json'), 'utf8'));

  const pres = new PptxGenJS();
  // Definir o layout ANTES de adicionar slides: o padrão é 10" x 5.625" e
  // qualquer coordenada além disso é gravada sem ser recortada — a forma
  // simplesmente não aparece.
  pres.defineLayout({ name: 'FHD16x9', width: 13.333, height: 7.5 });
  pres.layout = 'FHD16x9';
  pres.title = TITLE;
  pres.author = AUTHOR;
  pres.subject = 'XVIII Congresso Brasileiro de Cirurgia Crânio-Maxilo-Facial';
  pres.company = AUTHOR;

  pngs.forEach((file, i) => {
    const meta = texts[i] || { label: '', lines: [] };
    const label = meta.label || `Slide ${i + 1}`;
    const body = (meta.lines || []).join('\n');

    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };
    slide.addImage({
      path: path.join(slidesDir, file),
      x: 0,
      y: 0,
      w: 13.333,
      h: 7.5,
      altText: `${label}. ${(meta.lines || []).join('. ')}`.slice(0, 4000),
    });
    slide.addNotes(`${label}\n\n${body}`);
  });

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  return pres.writeFile({ fileName: outPath }).then(() => {
    const mb = (fs.statSync(outPath).size / 1024 / 1024).toFixed(2);
    console.log(`\n  ${pngs.length} slides → ${outPath}`);
    console.log(`  ${mb} MB\n`);
  });
}

main().catch((e) => {
  console.error('\n✗ Build do PPTX falhou:', e.message, '\n');
  process.exit(1);
});
