// CS50 AI citation: written with the help of Claude (Anthropic), an AI assistant. Requirements, design decisions and review: JJhiru.
// ============================================================
//  Valida public/data/catalogo.json contra las reglas de
//  docs/especificacion-v1.md (§4 y §7).
//  Las reglas viven en public/js/validacion.js, las mismas que
//  usan el motor y la app.
//  Uso:  node scripts/validar-catalogo.mjs [ruta]
//  Sale con código 1 si encuentra errores.
// ============================================================
import { readFileSync } from 'node:fs';
import { validarCatalogo } from '../public/js/validacion.js';

const ruta = process.argv[2] || new URL('../public/data/catalogo.json', import.meta.url);
const cat = JSON.parse(readFileSync(ruta, 'utf8'));

const { errores: delCatalogo, porEjercicio } = validarCatalogo(cat);
const errores = [
  ...delCatalogo.map((m) => (m.includes(': ') ? m : `catálogo: ${m}`)),
  ...[...porEjercicio].flatMap(([id, problemas]) => problemas.map((m) => `${id}: ${m}`)),
];

const ejercicios = Array.isArray(cat?.ejercicios) ? cat.ejercicios : [];
const porEstado = {};
for (const e of ejercicios) porEstado[e?.validacion?.estado] = (porEstado[e?.validacion?.estado] || 0) + 1;

console.log(`Catálogo v${cat?.version}: ${ejercicios.length} ejercicios`);
console.log('Por estado de validación:', porEstado);

if (errores.length) {
  console.error(`\n✗ ${errores.length} error(es):`);
  for (const m of errores) console.error('  - ' + m);
  process.exit(1);
}
console.log('✓ Sin errores de estructura.');
