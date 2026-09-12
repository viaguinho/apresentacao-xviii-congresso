import puppeteer from 'puppeteer';
import path from 'path';
import os from 'os';

(async () => {
  console.log('Iniciando o navegador headless...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });

  const page = await browser.newPage();
  
  // Aumentar o timeout e a janela
  await page.setViewport({ width: 1920, height: 1080 });

  const url = 'http://localhost:5173/?print=true';
  console.log(`Acessando a apresentação em modo de impressão: ${url}`);
  
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  } catch (e) {
    console.error('Erro ao acessar a URL. Verifique se o servidor Vite (npm run dev) está rodando em http://localhost:5173.');
    await browser.close();
    process.exit(1);
  }

  // Dar um tempo extra para garantir que todos os canvases e as fontes renderizem completamente
  console.log('Aguardando renderização dos componentes React e Framer Motion (espera extra de 5s)...');
  await new Promise(r => setTimeout(r, 5000));

  const homeDir = os.homedir();
  const pdfPath = path.join(homeDir, 'Downloads', 'Apresentacao_XVIII_Congresso.pdf');

  console.log(`Gerando PDF (A4 Paisagem) e salvando em: ${pdfPath}`);

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    landscape: true,
    printBackground: true, timeout: 0,
    margin: {
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    },
  });

  console.log('PDF gerado com sucesso!');
  await browser.close();
})();
