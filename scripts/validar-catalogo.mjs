// ============================================================
//  Valida public/data/catalogo.json contra las reglas de
//  docs/especificacion-v1.md (§4 y §7).
//  Uso:  node scripts/validar-catalogo.mjs [ruta]
//  Sale con código 1 si encuentra errores.
// ============================================================
import { readFileSync } from 'node:fs';

const ruta = process.argv[2] || new URL('../public/data/catalogo.json', import.meta.url);
const cat = JSON.parse(readFileSync(ruta, 'utf8'));

const errores = [];
const error = (id, msg) => errores.push(`${id}: ${msg}`);

const EXIGENCIAS = cat.exigencias;
const ids = new Set();

if (EXIGENCIAS.length !== 16) error('catálogo', `se esperaban 16 exigencias, hay ${EXIGENCIAS.length}`);

for (const e of cat.ejercicios) {
  const id = e.id || '(sin id)';

  if (!/^[a-z0-9-]+$/.test(id)) error(id, 'id con caracteres no válidos');
  if (ids.has(id)) error(id, 'id repetido');
  ids.add(id);

  for (const campo of ['nombre', 'descripcion', 'dosis']) {
    if (typeof e[campo] !== 'string' || !e[campo].trim()) error(id, `falta "${campo}"`);
  }
  if (!Array.isArray(e.instrucciones) || e.instrucciones.length === 0) error(id, 'sin instrucciones');
  if (!(Number.isInteger(e.duracion_estimada_seg) && e.duracion_estimada_seg > 0)) error(id, 'duración no válida');

  // Listas cerradas
  if (!e.fases?.length || e.fases.some((f) => !cat.fases.includes(f))) error(id, 'fases no válidas');
  if (!e.posiciones?.length || e.posiciones.some((p) => !cat.posiciones.includes(p))) error(id, 'posiciones no válidas');
  if (!Array.isArray(e.recursos) || e.recursos.some((r) => !(r in cat.recursos))) error(id, 'recursos no válidos');

  // Las 16 exigencias revisadas una a una: todas presentes y booleanas, ninguna extra
  const claves = Object.keys(e.exigencias || {});
  for (const x of EXIGENCIAS) {
    if (typeof e.exigencias?.[x] !== 'boolean') error(id, `exigencia "${x}" sin revisar`);
  }
  for (const x of claves) {
    if (!EXIGENCIAS.includes(x)) error(id, `exigencia desconocida "${x}"`);
  }

  // Exclusiones del catálogo v1
  if (e.exigencias?.impacto) error(id, 'v1 no admite ejercicios de impacto');

  // Coherencia posición/exigencias
  const dePie = e.posiciones?.includes('de_pie');
  for (const x of ['equilibrio_sin_apoyo', 'una_pierna', 'puntillas_talones']) {
    if (e.exigencias?.[x] && !dePie) error(id, `"${x}" solo tiene sentido de pie`);
  }
  if (e.exigencias?.sentarse_levantarse && !(dePie && e.posiciones.includes('sentado'))) {
    error(id, '"sentarse_levantarse" exige las posiciones sentado y de_pie');
  }

  // Fuente y validación
  if (!e.fuente?.url?.startsWith('https://')) error(id, 'fuente sin URL https');
  if (!e.fuente?.organizacion || !e.fuente?.consultado) error(id, 'fuente incompleta');
  if (!cat.estados_validacion.includes(e.validacion?.estado)) error(id, 'estado de validación no válido');
  if (e.validacion?.estado !== 'borrador' && !e.validacion?.revisado_por) {
    error(id, 'un ejercicio fuera de borrador necesita "revisado_por"');
  }
}

// Variantes: deben apuntar a un ejercicio existente y distinto
for (const e of cat.ejercicios) {
  if (e.variante_de != null && (!ids.has(e.variante_de) || e.variante_de === e.id)) {
    error(e.id, `variante_de "${e.variante_de}" no existe`);
  }
}

const porEstado = {};
for (const e of cat.ejercicios) porEstado[e.validacion?.estado] = (porEstado[e.validacion?.estado] || 0) + 1;

console.log(`Catálogo v${cat.version}: ${cat.ejercicios.length} ejercicios`);
console.log('Por estado de validación:', porEstado);

if (errores.length) {
  console.error(`\n✗ ${errores.length} error(es):`);
  for (const m of errores) console.error('  - ' + m);
  process.exit(1);
}
console.log('✓ Sin errores de estructura.');
