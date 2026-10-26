// CS50 AI citation: written with the help of Claude (Anthropic), an AI assistant. Requirements, design decisions and review: JJhiru.
// ============================================================
//  Recalcula PRECACHE y VERSION en public/sw.js.
//  PRECACHE = todos los archivos de public/ (menos sw.js).
//  VERSION  = hash del contenido de esos archivos, así cualquier
//  cambio (también solo de HTML o del catálogo) llega a los usuarios.
//  Uso: node scripts/version-sw.mjs   (o --comprobar para fallar si está desactualizado)
// ============================================================
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const publico = fileURLToPath(new URL('../public/', import.meta.url));
const swRuta = join(publico, 'sw.js');

export function archivosPublicos(dir = publico) {
  return readdirSync(dir).flatMap((n) => {
    const ruta = join(dir, n);
    return statSync(ruta).isDirectory() ? archivosPublicos(ruta) : [relative(publico, ruta).split(sep).join('/')];
  }).filter((f) => f !== 'sw.js').sort();
}

export function calcular() {
  const archivos = archivosPublicos();
  const hash = createHash('sha256');
  for (const f of archivos) hash.update(f).update(readFileSync(join(publico, f)));
  return { archivos, version: `hm-${hash.digest('hex').slice(0, 12)}` };
}

export function swEsperado() {
  const { archivos, version } = calcular();
  const sw = readFileSync(swRuta, 'utf8');
  const lista = ["  './',", ...archivos.map((f) => `  '${f}',`)].join('\n');
  return sw
    .replace(/const VERSION = '[^']*';/, `const VERSION = '${version}';`)
    .replace(/const PRECACHE = \[[\s\S]*?\];/, `const PRECACHE = [\n${lista}\n];`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const esperado = swEsperado();
  const actual = readFileSync(swRuta, 'utf8');
  if (process.argv.includes('--comprobar')) {
    if (esperado !== actual) { console.error('✗ public/sw.js está desactualizado: ejecuta npm run version-sw'); process.exit(1); }
    console.log('✓ public/sw.js al día');
  } else {
    writeFileSync(swRuta, esperado);
    console.log('✓ public/sw.js actualizado:', esperado.match(/const VERSION = '([^']*)'/)[1]);
  }
}
