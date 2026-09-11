import puppeteer from 'puppeteer-core';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUTPUT_PATH = '/Users/iagolima/Downloads/Apresentacao_XVIII_Congresso_Dr_Charlington.pdf';
const PORT = 8899;

function startStaticServer() {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webm': 'video/webm',
    '.mp4': 'video/mp4',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
    '.ttf': 'font/ttf'
  };

  const server = http.createServer((req, res) => {
    let reqPath = decodeURIComponent(req.url.split('?')[0]);
    if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

    let filePath = path.join(DIST_DIR, reqPath);

    if (!fs.existsSync(filePath)) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }

    if (fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });

  return new Promise((resolve) => {
    server.listen(PORT, '127.0.0.1', () => {
      resolve(server);
    });
  });
}

async function exportDeckToPdf() {
  console.log('🚀 Iniciando servidor estático local para o pacote dist...');
  const server = await startStaticServer();
  console.log(`✓ Servidor rodando em http://127.0.0.1:${PORT}`);

  console.log(`Conectando ao Chrome em: ${CHROME_PATH}`);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--window-size=1920,1080',
      '--force-device-scale-factor=2'
    ],
    defaultViewport: {
      width: 1920,
      height: 1080,
      deviceScaleFactor: 2
    }
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });

  console.log('Carregando apresentação...');
  await page.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: 'domcontentloaded', timeout: 30000 });

  // Aguardar fontes carregarem
  await page.evaluate(async () => {
    if (document.fonts) {
      await document.fonts.ready;
    }
    // Ativar flag global para garantir todos os conteúdos em evidência
    document.body.classList.add('export-all-active');
  });
  console.log('✓ Fontes carregadas e modo export-all-active habilitado.');

  // Injetar CSS para modo de captura limpo e com conteúdos em evidência
  await page.addStyleTag({
    content: `
      deck-stage::part(rail),
      .deck-stage-rail,
      .deck-stage-overlay,
      #deck-stage-rail,
      [data-deck-rail],
      .rail,
      aside {
        display: none !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
      deck-stage {
        --deck-rail-width: 0px !important;
      }
      /* Animações finalizadas com opacidade total */
      *, *::before, *::after {
        animation-duration: 0.001s !important;
        animation-delay: 0s !important;
        transition-duration: 0.001s !important;
      }
      [data-anim] {
        opacity: 1 !important;
        transform: none !important;
        animation: none !important;
        visibility: visible !important;
      }
    `
  });

  // Ocultar controles do shadow DOM do deck-stage
  await page.evaluate(() => {
    const stage = document.querySelector('deck-stage');
    if (stage && stage.shadowRoot) {
      const style = document.createElement('style');
      style.textContent = `
        .overlay, .rail, [part="overlay"], [part="rail"] {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
        }
      `;
      stage.shadowRoot.appendChild(style);
    }
  });

  const totalSlides = await page.evaluate(() => {
    const stage = document.querySelector('deck-stage');
    if (stage && stage._slides) return stage._slides.length;
    return document.querySelectorAll('section').length;
  });

  console.log(`Total de slides detectados: ${totalSlides}`);

  const pdfDoc = await PDFDocument.create();

  for (let i = 0; i < totalSlides; i++) {
    process.stdout.write(`Capturando slide ${i + 1}/${totalSlides}... `);

    await page.evaluate((slideIdx) => {
      const stage = document.querySelector('deck-stage');
      if (stage && typeof stage.goTo === 'function') {
        stage.goTo(slideIdx);
      } else if (stage && typeof stage._go === 'function') {
        stage._go(slideIdx, 'api');
      }

      // Sincronizar visibilidade
      if (typeof window.syncSlideVisibility === 'function') {
        window.syncSlideVisibility();
      }

      // Forçar visibilidade plena nos containers React do slide ativo
      const activeSlide = stage && stage._slides ? stage._slides[slideIdx] : null;
      if (activeSlide) {
        const motionNodes = activeSlide.querySelectorAll('[style*="opacity: 0"], [style*="opacity:0"]');
        motionNodes.forEach((el) => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
      }
    }, i);

    // Pausa para renderização de React, SVG e Framer Motion
    await new Promise((r) => setTimeout(r, 650));

    const screenshotBuffer = await page.screenshot({
      type: 'png',
      omitBackground: false
    });

    const image = await pdfDoc.embedPng(screenshotBuffer);
    const pdfPage = pdfDoc.addPage([1920, 1080]);
    pdfPage.drawImage(image, {
      x: 0,
      y: 0,
      width: 1920,
      height: 1080
    });

    console.log('✓ OK');
  }

  console.log('Compilando e gravando arquivo PDF final...');
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(OUTPUT_PATH, pdfBytes);

  const stats = fs.statSync(OUTPUT_PATH);
  const sizeMb = (stats.size / (1024 * 1024)).toFixed(2);

  console.log(`🎉 PDF gerado com sucesso!`);
  console.log(`📍 Local: ${OUTPUT_PATH}`);
  console.log(`📊 Tamanho: ${sizeMb} MB | ${totalSlides} páginas`);

  await browser.close();
  server.close();
}

exportDeckToPdf().catch((err) => {
  console.error('Erro na exportação:', err);
  process.exit(1);
});
