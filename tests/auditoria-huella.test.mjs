// Caracterización de la huella de scripts/auditoria/informes.mjs (`huella`).
// Es una huella LITERAL del objeto JSON del ejercicio en el catálogo: SHA-256 de
// JSON.stringify(ejercicio), en el orden de claves del archivo, recortada a 16 hex.
// No es una huella de compatibilidad ni de auditoría: estos tests fijan qué detecta y qué no.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { huella, leerInforme, leerRegistro } from '../scripts/auditoria/informes.mjs';

const ruta = (p) => fileURLToPath(new URL(`../${p}`, import.meta.url));
const catalogo = JSON.parse(readFileSync(ruta('public/data/catalogo.json'), 'utf8'));
const original = catalogo.ejercicios.find((e) => e.id === 'curl-biceps-sentado');
const copia = () => structuredClone(original);
const cambia = (f) => { const e = copia(); f(e); return huella(e) !== huella(original); };

test('formato: 16 caracteres hexadecimales (64 bits de SHA-256)', () => {
  assert.match(huella(original), /^[0-9a-f]{16}$/);
});

test('estable si no cambia ningún dato', () => {
  assert.equal(huella(copia()), huella(original));
  const releido = JSON.parse(readFileSync(ruta('public/data/catalogo.json'), 'utf8')).ejercicios.find((e) => e.id === original.id);
  assert.equal(huella(releido), huella(original));
});

test('cambia con una etiqueta, una instrucción, la dosis o la fuente declarada', () => {
  assert.ok(cambia((e) => { e.exigencias.agarre = !e.exigencias.agarre; }));
  assert.ok(cambia((e) => { e.instrucciones[0] += ' '; }));
  assert.ok(cambia((e) => { e.dosis = `${e.dosis} `; }));
  assert.ok(cambia((e) => { e.fuente.url += '#otra'; }));
  assert.ok(cambia((e) => { e.fuente.consultado = '2099-01-01'; }));
  assert.ok(cambia((e) => { e.notas_etiquetado = `${e.notas_etiquetado ?? ''} [conservadora] x`; }));
});

test('NO cambia con la evidencia del informe ni con la decisión del registro', () => {
  // La evidencia y la decisión no están en el objeto del catálogo: la huella no puede verlas.
  const informe = readFileSync(ruta('docs/auditoria-catalogo/lote-03.md'), 'utf8');
  const otraEvidencia = informe.replace('- Fuente: Leicester, ejercicio 6, «Bicep curls»', '- Fuente: Leicester, ejercicio 6, página 4, «Bicep curls»');
  const seccion = (t) => leerInforme(t).ejercicios.find((e) => e.id === original.id).texto;
  assert.notEqual(seccion(otraEvidencia), seccion(informe), 'el informe de prueba debe cambiar de verdad');
  const registro = readFileSync(ruta('docs/auditoria-catalogo/registro.md'), 'utf8')
    .replace('| 6 | curl-biceps-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |', '| 6 | curl-biceps-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado |');
  assert.equal(leerRegistro(registro).filas.find((f) => f.id === original.id).decision, 'aprobado');
  assert.equal(huella(copia()), huella(original));
});

test('SÍ cambia con datos de gestión (estado y revisión), aunque el contenido sea el mismo', () => {
  assert.ok(cambia((e) => { e.validacion.estado = 'basado_en_fuente_publica'; }));
  assert.ok(cambia((e) => { e.validacion.revisado_por = 'Autor'; }));
});

test('SÍ cambia con el orden de claves o de elementos aunque el significado no cambie', () => {
  // Orden de claves del ejercicio y de las exigencias: mismo contenido, otra huella.
  const invertido = Object.fromEntries(Object.entries(copia()).reverse());
  assert.deepEqual(invertido, original);
  assert.notEqual(huella(invertido), huella(original));
  assert.ok(cambia((e) => { e.exigencias = Object.fromEntries(Object.entries(e.exigencias).reverse()); }));
  // Orden de una lista que el motor trata como conjunto (fases, posiciones).
  const conDosFases = catalogo.ejercicios.find((e) => e.fases.length > 1);
  const otra = structuredClone(conDosFases);
  otra.fases.reverse();
  assert.notEqual(huella(otra), huella(conDosFases));
});
