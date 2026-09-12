/**
 * Servidor estático mínimo apontando para uma pasta que contém SOMENTE o
 * arquivo único. Serve para provar que ele é autossuficiente: qualquer
 * dependência esquecida aparece como 404 no painel de rede do navegador.
 *
 *   npm run build:standalone
 *   node scripts/serve-standalone.mjs   # http://localhost:5199
 */
import http from 'node:http';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(rootDir, '.standalone-cache', 'preview');
const source =
  process.argv[2] ||
  path.join(os.homedir(), 'Downloads', 'Apresentação XVIII Congresso Dr. Charlington Cavalcante.html');

fs.mkdirSync(dir, { recursive: true });
for (const stale of fs.readdirSync(dir)) fs.rmSync(path.join(dir, stale), { force: true });
fs.copyFileSync(source, path.join(dir, 'index.html'));

http
  .createServer((req, res) => {
    const url = decodeURIComponent(req.url.split('?')[0]);
    const file = path.join(dir, url === '/' ? 'index.html' : url);
    if (!file.startsWith(dir) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      console.log('404', url);
      res.writeHead(404);
      res.end('404');
      return;
    }
    console.log('200', url);
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.createReadStream(file).pipe(res);
  })
  .listen(5199, () => console.log(`servindo ${source}\nhttp://localhost:5199`));
