/**
 * Reduz o peso da mídia antes de ela ser embutida no arquivo único.
 *
 * Os originais em `assets/` continuam intactos: tudo é gravado em
 * `.standalone-cache/media/`, reaproveitado entre builds enquanto a fonte não
 * mudar. O alvo de cada item vem do tamanho em que ele realmente aparece na
 * projeção (1920x1080), não do tamanho em que foi exportado.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cacheDir = path.join(rootDir, '.standalone-cache', 'media');

/**
 * `kind` decide o encoder; `out` a extensão final (e portanto o mime do data
 * URI). Vídeo sai sempre em H.264/AAC-less porque é o único codec que toca em
 * Safari, Chrome, Edge e Firefox sem nenhuma configuração do lado do cliente.
 */
const PLAN = [
  { src: 'assets/1.mp4', out: '1.mp4', kind: 'video', height: 960 },
  { src: 'assets/2.mp4', out: '2.mp4', kind: 'video', height: 960 },
  { src: 'assets/3.mp4', out: '3.mp4', kind: 'video', height: 960 },
  { src: 'assets/4.mp4', out: '4.mp4', kind: 'video', height: 640 },
  { src: 'assets/memoji.mp4', out: 'memoji.mp4', kind: 'copy' },
  // Os dois logos são VP9 com canal alfa (alpha_mode=1). H.264 não carrega
  // alfa, então a transparência é resolvida na origem: o vídeo é achatado
  // sobre branco. O resultado é idêntico na tela porque o <video> usa
  // mix-blend-mode:multiply sobre o fundo claro do deck.
  { src: 'assets/liquid-logo-branco.webm', out: 'liquid-logo-branco.mp4', kind: 'videoAlpha', size: 600, crf: 26 },
  { src: 'assets/liquid-logo-prata.webm', out: 'liquid-logo-prata.mp4', kind: 'videoAlpha', size: 600, crf: 26 },

  { src: 'assets/5.png', out: '5.webp', kind: 'image', width: 1600, quality: 78 },
  { src: 'assets/charlington-retrato.jpg', out: 'charlington-retrato.webp', kind: 'image', width: 1600, quality: 80 },
  { src: 'assets/image2.png', out: 'image2.png', kind: 'copy' },

  { src: 'assets/cards/behavior-action-3d.png', out: 'cards/behavior-action-3d.webp', kind: 'image', width: 720, quality: 80 },
  { src: 'assets/cards/biology-dna-neural-3d.png', out: 'cards/biology-dna-neural-3d.webp', kind: 'image', width: 720, quality: 80 },
  { src: 'assets/cards/brain-neural-3d.png', out: 'cards/brain-neural-3d.webp', kind: 'image', width: 720, quality: 80 },
  { src: 'assets/cards/dna-3d.png', out: 'cards/dna-3d.webp', kind: 'image', width: 720, quality: 80 },
  { src: 'assets/cards/environment-world-3d.png', out: 'cards/environment-world-3d.webp', kind: 'image', width: 720, quality: 80 },
  { src: 'assets/cards/experience-social-3d.png', out: 'cards/experience-social-3d.webp', kind: 'image', width: 720, quality: 80 },
  { src: 'assets/cards/memoji-10y.png', out: 'cards/memoji-10y.webp', kind: 'image', width: 720, quality: 80 },
  { src: 'assets/cards/memoji-16y.png', out: 'cards/memoji-16y.webp', kind: 'image', width: 720, quality: 80 },

  { src: 'assets/logos-conflitos/ache.png', out: 'logos-conflitos/ache.webp', kind: 'image', width: 360, quality: 85 },
  { src: 'assets/logos-conflitos/biolab.png', out: 'logos-conflitos/biolab.webp', kind: 'image', width: 360, quality: 85 },
  { src: 'assets/logos-conflitos/eurofarma.png', out: 'logos-conflitos/eurofarma.webp', kind: 'image', width: 360, quality: 85 },
  { src: 'assets/logos-conflitos/farmausa.png', out: 'logos-conflitos/farmausa.webp', kind: 'image', width: 360, quality: 85 },
  { src: 'assets/logos-conflitos/prati.png', out: 'logos-conflitos/prati.webp', kind: 'image', width: 360, quality: 85 },
  { src: 'assets/logos-conflitos/supera.png', out: 'logos-conflitos/supera.webp', kind: 'image', width: 360, quality: 85 },
];

function ffmpeg(args) {
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', ...args], { stdio: ['ignore', 'ignore', 'pipe'] });
}

function isFresh(srcPath, outPath) {
  if (!fs.existsSync(outPath)) return false;
  return fs.statSync(outPath).mtimeMs >= fs.statSync(srcPath).mtimeMs;
}

export function optimizeMedia({ log = console.log } = {}) {
  /** @type {Map<string, string>} caminho original -> arquivo otimizado */
  const result = new Map();
  let saved = 0;

  for (const item of PLAN) {
    const srcPath = path.join(rootDir, item.src);
    if (!fs.existsSync(srcPath)) {
      throw new Error(`Mídia ausente: ${item.src}`);
    }
    const outPath = path.join(cacheDir, item.out);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });

    if (!isFresh(srcPath, outPath)) {
      if (item.kind === 'copy') {
        fs.copyFileSync(srcPath, outPath);
      } else if (item.kind === 'video') {
        ffmpeg([
          '-i', srcPath,
          '-an',
          '-vf', `scale=-2:${item.height}:flags=lanczos`,
          '-c:v', 'libx264',
          '-profile:v', 'high',
          '-pix_fmt', 'yuv420p',
          '-crf', String(item.crf ?? 30),
          '-preset', 'slow',
          '-movflags', '+faststart',
          outPath,
        ]);
      } else if (item.kind === 'videoAlpha') {
        // `-c:v libvpx-vp9` explícito: o decoder padrão ignora o alfa do WebM
        // e entrega o vídeo inteiro preto.
        ffmpeg([
          '-c:v', 'libvpx-vp9',
          '-i', srcPath,
          '-f', 'lavfi',
          '-i', `color=c=white:s=${item.size}x${item.size}`,
          '-filter_complex',
          `[0:v]scale=${item.size}:${item.size}:flags=lanczos[fg];[1:v][fg]overlay=shortest=1,format=yuv420p[out]`,
          '-map', '[out]',
          '-an',
          '-c:v', 'libx264',
          '-profile:v', 'high',
          '-crf', String(item.crf ?? 28),
          '-preset', 'slow',
          '-movflags', '+faststart',
          outPath,
        ]);
      } else {
        // ffmpeg do Homebrew costuma vir sem libwebp; o Pillow cobre o caso.
        execFileSync('python3', [
          path.join(rootDir, 'scripts', 'resize-image.py'),
          srcPath,
          outPath,
          String(item.width),
          String(item.quality),
        ], { stdio: ['ignore', 'ignore', 'pipe'] });
      }
    }

    const before = fs.statSync(srcPath).size;
    const after = fs.statSync(outPath).size;
    saved += before - after;
    result.set(item.src, outPath);
    log(
      `  ${item.src.padEnd(44)} ${fmt(before).padStart(9)} -> ${fmt(after).padStart(9)}` +
      (before > after ? `  (-${Math.round((1 - after / before) * 100)}%)` : '')
    );
  }

  log(`  Total economizado na mídia: ${fmt(saved)}`);
  return result;
}

export function fmt(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  optimizeMedia();
}
