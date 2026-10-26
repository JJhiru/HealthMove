// CS50 AI citation: written with the help of Claude (Anthropic), an AI assistant. Requirements, design decisions and review: JJhiru.
// ============================================================
//  Genera public/data/ilustraciones.json a partir de las fichas
//  de pose de scripts/ilustraciones/*.mjs (una por ejercicio).
//  Uso: npm run ilustraciones   (o --comprobar para fallar si está desactualizado)
// ============================================================
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { SENTADO } from './ilustraciones/sentado.mjs';
import { DE_PIE_FICHAS } from './ilustraciones/depie.mjs';
import { TUMBADO } from './ilustraciones/tumbado.mjs';

const salida = fileURLToPath(new URL('../public/data/ilustraciones.json', import.meta.url));
const catalogo = JSON.parse(readFileSync(new URL('../public/data/catalogo.json', import.meta.url), 'utf8'));

export function fichas() {
  const todas = { ...SENTADO, ...DE_PIE_FICHAS, ...TUMBADO };
  const repetidas = Object.keys(SENTADO).filter((k) => k in DE_PIE_FICHAS || k in TUMBADO)
    .concat(Object.keys(DE_PIE_FICHAS).filter((k) => k in TUMBADO));
  if (repetidas.length) throw new Error(`Fichas repetidas: ${repetidas.join(', ')}`);
  // En el orden del catálogo, para que el JSON sea estable y fácil de revisar.
  const ordenadas = {};
  for (const e of catalogo.ejercicios) if (todas[e.id]) ordenadas[e.id] = todas[e.id];
  for (const k of Object.keys(todas)) if (!ordenadas[k]) ordenadas[k] = todas[k];
  return ordenadas;
}

export const jsonEsperado = () => `${JSON.stringify(fichas())}\n`;

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  if (process.argv.includes('--comprobar')) {
    if (readFileSync(salida, 'utf8') !== jsonEsperado()) { console.error('✗ ilustraciones.json desactualizado: ejecuta npm run ilustraciones'); process.exit(1); }
    console.log('✓ ilustraciones.json al día');
  } else {
    writeFileSync(salida, jsonEsperado());
    console.log(`✓ ${Object.keys(fichas()).length} ilustraciones escritas en public/data/ilustraciones.json`);
  }
}
