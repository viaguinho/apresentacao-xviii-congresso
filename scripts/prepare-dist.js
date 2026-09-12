import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

console.log('📦 Preparing complete dist package for Vercel deployment...');

// 1. Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// 2. Also mirror dist files into dist/dist so relative paths "dist/..." from dist/index.html work flawlessly
const subDistDir = path.join(distDir, 'dist');
if (!fs.existsSync(subDistDir)) {
  fs.mkdirSync(subDistDir, { recursive: true });
}

const distFiles = ['slide3-react.umd.js', 'slide3-react.es.js', 'apresentacao-xviii-congresso.css'];
for (const f of distFiles) {
  const src = path.join(distDir, f);
  const dest = path.join(subDistDir, f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
}

// 3. Copy static root files to dist
const rootFilesToCopy = [
  'deck-stage.js',
  'support.js',
  'slide16-flow.js',
];

for (const file of rootFilesToCopy) {
  const src = path.join(rootDir, file);
  const dest = path.join(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✓ Copied ${file}`);
  }
}

// 4. Copy directories: assets, _ds, src/styles
const dirsToCopy = [
  { src: 'assets', dest: 'assets' },
  { src: '_ds', dest: '_ds' },
  { src: path.join('src', 'styles'), dest: path.join('src', 'styles') },
];

for (const { src, dest } of dirsToCopy) {
  const srcPath = path.join(rootDir, src);
  const destPath = path.join(distDir, dest);
  if (fs.existsSync(srcPath)) {
    fs.cpSync(srcPath, destPath, { recursive: true });
    console.log(`✓ Copied directory ${src} -> dist/${dest}`);
  }
}

// 5. Generate production-ready dist/index.html
const indexHtmlSrc = path.join(rootDir, 'index.html');
let htmlContent = fs.readFileSync(indexHtmlSrc, 'utf8');

// In production, remove raw TypeScript <script type="module" src="/src/main.tsx"></script>
// and ensure dist/slide3-react.umd.js loads reliably
htmlContent = htmlContent.replace(
  '<script type="module" src="/src/main.tsx"></script>',
  '<!-- Production mode: bundled React app -->'
);

// Make sure the script tag loader in production loads the bundle
htmlContent = htmlContent.replace(
  `if (!location.port || location.protocol === 'file:') {`,
  `if (true) {`
);

fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent, 'utf8');
console.log('✓ Generated dist/index.html for Vercel');

console.log('✨ Distribution folder ready with index.html and all assets!');
