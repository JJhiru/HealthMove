// Herramientas de auditoría (scripts/auditoria.mjs y scripts/auditoria/informes.mjs):
// leen informes y registro sin modificarlos y detectan incumplimientos de estructura,
// trazabilidad e invariantes del protocolo.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, mkdtempSync, existsSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import {
  EXIGENCIAS, leerInforme, leerRegistro, leerProtocolo,
  comprobarInforme, comprobarRegistro, compararInformes, categoriaResultado, huella,
} from '../scripts/auditoria/informes.mjs';
import { ejecutarGit } from '../scripts/auditoria/entradas.mjs';

const ruta = (p) => fileURLToPath(new URL(`../${p}`, import.meta.url));
const catalogo = JSON.parse(readFileSync(ruta('public/data/catalogo.json'), 'utf8'));
const protocolo = leerProtocolo(readFileSync(ruta('docs/auditoria-catalogo/protocolo.md'), 'utf8'));
const ej = catalogo.ejercicios.find((e) => e.id === 'curl-biceps-sentado');

// Informe mínimo en formato del protocolo 1.0 para `curl-biceps-sentado`.
function informe({ filas = {}, decision = '**REQUIERE CORRECCIONES.**', cabecera = true, id = ej.id, quitar = [] } = {}) {
  const tabla = EXIGENCIAS.filter((x) => !quitar.includes(x)).map((x) => {
    const actual = String(ej.exigencias[x]);
    const [nivel, regla, resultado] = filas[x] ?? ['D · texto de la fuente', 'evidencia', actual.toUpperCase()];
    return `| ${x} | ${actual} | ${nivel} | ${regla} | ${resultado} | — |`;
  });
  return [
    '# Auditoría del catálogo — Lote 99', '',
    cabecera ? '- Fecha: 2026-10-18\n- Versión del protocolo: 1.0\n- Identificador git del catálogo: `72fda34f80d2e3222eabd5c0ce583c21c83d7699`' : '- Fecha: 2026-10-18',
    `- Fuente: ${ej.fuente.url}`, '',
    `## 1. ${id}`, '',
    '### Identificación', `- ID: \`${id}\``, '',
    '### Evidencia de la fuente', '- …', '',
    '### Auditoría de exigencias', '',
    '| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |',
    '|---|---|---|---|---|---|',
    ...tabla, '',
    '### Otros campos', '- …', '',
    '### Incidencias', '- …', '',
    '### Propuesta de cambios', '- …', '',
    '### Decisión pendiente del desarrollador', decision, '',
  ].join('\n');
}
const errores = (texto) => comprobarInforme(leerInforme(texto), catalogo, protocolo).filter((p) => p.nivel === 'error').map((p) => p.msg);

test('los informes y el registro reales no tienen errores', () => {
  const salida = execFileSync(process.execPath, [ruta('scripts/auditoria.mjs'), 'validar'], { encoding: 'utf8' });
  assert.match(salida, /✓ 0 error\(es\)/);
});

test('los informes de los lotes 1 a 5 se reconocen como anteriores al protocolo', () => {
  for (const f of readdirSync(ruta('docs/auditoria-catalogo')).filter((f) => /^lote-0[1-5]\.md$/.test(f))) {
    const inf = leerInforme(readFileSync(ruta(`docs/auditoria-catalogo/${f}`), 'utf8'));
    assert.equal(inf.formato, 'pre-protocolo', f);
    for (const e of inf.ejercicios) assert.equal(e.filas.length, 16, `${f} ${e.id}`);
  }
});

test('un informe completo en formato 1.0 es válido', () => {
  const inf = leerInforme(informe());
  assert.equal(inf.formato, 'protocolo-1');
  assert.deepEqual(errores(informe()), []);
});

test('detecta exigencias que faltan y apartados obligatorios ausentes', () => {
  assert.ok(errores(informe({ quitar: ['agarre'] })).some((m) => m.includes('falta la exigencia agarre')));
  assert.ok(errores(informe().replace('### Incidencias', '### Notas')).some((m) => m.includes('«Incidencias»')));
});

test('R2.2: FALSE exige evidencia D o una adaptación', () => {
  const sinEvidencia = { impacto: ['N · no se ve', 'evidencia', 'FALSE'] };
  assert.ok(errores(informe({ filas: sinEvidencia })).some((m) => m.includes('R2.2')));
  const indicio = { impacto: ['I · parece', 'adaptación', 'FALSE'] };
  assert.ok(!errores(informe({ filas: indicio })).some((m) => m.includes('R2.2')));
});

test('R2.1: la regla conservadora solo lleva a TRUE y N no se basa en la evidencia', () => {
  assert.ok(errores(informe({ filas: { impacto: ['D · x', 'conservadora', 'FALSE'] } })).some((m) => m.includes('R2.1')));
  assert.ok(errores(informe({ filas: { impacto: ['N · x', 'evidencia', 'TRUE'] } })).some((m) => m.includes('R2.1')));
  assert.deepEqual(errores(informe({ filas: { impacto: ['N · x', 'conservadora', 'TRUE'] } })), []);
});

test('rechaza niveles, reglas, valores y decisiones que no existen en el protocolo', () => {
  assert.ok(errores(informe({ filas: { impacto: ['contradictoria', 'evidencia', 'FALSE'] } })).some((m) => m.includes('D, I o N')));
  assert.ok(errores(informe({ filas: { impacto: ['D · x', 'intuición', 'FALSE'] } })).some((m) => m.includes('regla')));
  assert.ok(errores(informe({ filas: { impacto: ['D · x', 'evidencia', 'QUIZÁ'] } })).some((m) => m.includes('resultado propuesto')));
  assert.ok(errores(informe({ decision: '**APROBADO.**' })).some((m) => m.includes('decisión final')));
});

test('cambiar ambos_brazos o agarre solo avisa mientras Q1 o Q2 siguen abiertas', () => {
  const texto = informe({ filas: { agarre: ['D · x', 'evidencia', 'FALSE'] } });
  const avisos = (prot) => comprobarInforme(leerInforme(texto), catalogo, prot).filter((p) => p.nivel === 'aviso' && p.msg.includes('Q2')).length;
  const conQ2 = (resuelta) => ({ ...protocolo, cuestiones: protocolo.cuestiones.map((q) => (q.id === 'Q2' ? { ...q, resuelta } : q)) });
  assert.equal(avisos(conQ2(false)), 1);
  assert.equal(avisos(conQ2(true)), 0);
});

test('la cabecera 1.0 exige versión del protocolo e identificador del catálogo', () => {
  const e = errores(informe({ cabecera: false }));
  assert.ok(e.some((m) => m.includes('Versión del protocolo')));
  assert.ok(e.some((m) => m.includes('identificador git')));
  // Ni un número cualquiera junto a «protocolo» ni el hash del commit sustituyen a estos datos.
  const flojo = informe().replace('- Versión del protocolo: 1.0', '- Catálogo v0.3.0 auditado con el protocolo')
    .replace('- Identificador git del catálogo:', '- Commit:');
  const e2 = errores(flojo);
  assert.ok(e2.some((m) => m.includes('Versión del protocolo')));
  assert.ok(e2.some((m) => m.includes('identificador git')));
});

test('R7.7: no se propone para aprobación un ejercicio con ilustración discrepante', () => {
  // La lista real puede quedar vacía cuando se corrigen las ilustraciones: se prueba con una propia.
  const conDiscrepancia = { ...protocolo, ...leerProtocolo('  - Discrepancias conocidas: `banda-curl-sentado` (`sentado.mjs:33`).'), cuestiones: protocolo.cuestiones, version: protocolo.version };
  assert.deepEqual(conDiscrepancia.ilustracionesPendientes, ['banda-curl-sentado']);
  const original = catalogo.ejercicios.find((e) => e.id === 'banda-curl-sentado');
  const texto = informe({ decision: '**LISTO PARA APROBACIÓN DOCUMENTAL.**' })
    .replaceAll(ej.id, original.id);
  // Las etiquetas del ejemplo son las de curl-biceps-sentado: solo importa la regla R7.7.
  const msgs = (prot) => comprobarInforme(leerInforme(texto), catalogo, prot).filter((p) => p.nivel === 'error').map((p) => p.msg);
  assert.ok(msgs(conDiscrepancia).some((m) => m.includes('R7.7')));
  assert.ok(!msgs({ ...protocolo, ilustracionesPendientes: [] }).some((m) => m.includes('R7.7')));
});

test('un id inexistente o mal declarado es un error', () => {
  assert.ok(errores(informe({ id: 'no-existe' })).some((m) => m.includes('no existe en el catálogo')));
  assert.ok(errores(informe().replace(`- ID: \`${ej.id}\``, '- ID: `otro`')).some((m) => m.includes('no coincide')));
});

test('el registro debe coincidir con los informes y con el catálogo', () => {
  const informes = new Map([[99, leerInforme(informe())]]);
  const reg = (filas, n = filas.length) => leerRegistro(['## Ejercicios auditados', '| Lote | ID | Resultado | Decisión |', '|---|---|---|---|', ...filas, '## Pendientes', `- Auditados: ${n} de ${catalogo.ejercicios.length}.`].join('\n'));
  // El catálogo de prueba, entero en borrador: así lo que se comprueba no depende de los estados reales.
  const enBorrador = structuredClone(catalogo);
  for (const e of enBorrador.ejercicios) e.validacion = { ...e.validacion, estado: 'borrador', revisado_por: null, fecha_revision: null };
  const msgs = (r, cat = enBorrador) => comprobarRegistro(r, informes, cat).filter((p) => p.nivel === 'error').map((p) => p.msg);

  assert.deepEqual(msgs(reg([`| 99 | ${ej.id} | REQUIERE CORRECCIONES | pendiente |`])), []);
  assert.ok(msgs(reg([`| 99 | ${ej.id} | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |`])).some((m) => m.includes('el informe del lote')));
  assert.ok(msgs(reg([`| 98 | ${ej.id} | REQUIERE CORRECCIONES | pendiente |`])).some((m) => m.includes('lote 98')));
  assert.ok(msgs(reg([], 0)).some((m) => m.includes('no en registro.md')));
  assert.ok(msgs(reg([`| 99 | ${ej.id} | REQUIERE CORRECCIONES | pendiente |`], 5)).some((m) => m.includes('Auditados: 5')));

  // Ningún estado cambia sin decisión registrada (protocolo, principio 1).
  const aprobado = structuredClone(enBorrador);
  aprobado.ejercicios.find((e) => e.id === ej.id).validacion.estado = 'basado_en_fuente_publica';
  assert.ok(msgs(reg([`| 99 | ${ej.id} | REQUIERE CORRECCIONES | pendiente |`]), aprobado).some((m) => m.includes('sin decisión')));
});

test('el comparador informa de cambios de decisión, propuesta y evidencia', () => {
  const a = leerInforme(informe());
  const b = leerInforme(informe({ decision: '**PENDIENTE DE DECISIÓN** (Q1).', filas: { agarre: ['N · x', 'conservadora', 'TRUE'] } }));
  const cambios = compararInformes(a, b).map((c) => c.msg);
  assert.ok(cambios.includes('decisión: REQUIERE CORRECCIONES → PENDIENTE DE DECISIÓN'));
  assert.ok(cambios.some((m) => m.startsWith('agarre · evidencia: D → N')));
  assert.deepEqual(compararInformes(a, a), []);
  const sinFila = compararInformes(a, leerInforme(informe({ quitar: ['impacto'] }))).map((c) => c.msg);
  assert.ok(sinFila.includes('impacto: fila eliminada'));
});

test('validar lee exactamente el archivo indicado y comparar rechaza opciones de git', () => {
  const dir = mkdtempSync(join(tmpdir(), 'hm-auditoria-'));
  // Antes se leía docs/auditoria-catalogo/<nombre> en lugar de la ruta indicada.
  let salida = '';
  try {
    execFileSync(process.execPath, [ruta('scripts/auditoria.mjs'), 'validar', 'docs/revision-catalogo.md'], { encoding: 'utf8', stdio: 'pipe' });
  } catch (e) { salida = e.stdout + e.stderr; }
  assert.match(salida, /revision-catalogo\.md \(pre-protocolo, 0 ejercicios\)/);
  assert.match(salida, /no hay apartados de ejercicio/);

  const salida2 = join(dir, 'escrito');
  assert.throws(() => execFileSync(process.execPath, [ruta('scripts/auditoria.mjs'), 'comparar', `--output=${salida2}:x`, 'HEAD:README.md'], { stdio: 'pipe' }));
  assert.equal(existsSync(salida2), false);
  rmSync(dir, { recursive: true, force: true });
});

test('categorías de resultado y huella estable', () => {
  assert.equal(categoriaResultado('LISTO con la opción A de la decisión 4'), 'LISTO PARA APROBACIÓN DOCUMENTAL');
  assert.equal(categoriaResultado('**REQUIERE CORRECCIONES** (solo documentación).'), 'REQUIERE CORRECCIONES');
  assert.equal(categoriaResultado('APROBADO'), null);
  assert.equal(huella(ej), huella(structuredClone(ej)));
  assert.notEqual(huella(ej), huella({ ...ej, dosis: 'otra' }));
});

test('la skill, CLAUDE.md y el protocolo no divergen', () => {
  const skill = readFileSync(ruta('.claude/skills/auditar-catalogo-ejercicios/SKILL.md'), 'utf8');
  const claude = readFileSync(ruta('CLAUDE.md'), 'utf8');
  const citada = skill.match(/protocolo\.md`?\*\*\s*\(versión ([\d.]+)/)?.[1];
  assert.equal(citada, protocolo.version, 'la versión del protocolo citada en la skill (apartado 0) debe ser la vigente');
  const ordenes = [...(skill + claude).matchAll(/node scripts\/auditoria\.mjs (\w+)/g)].map((m) => m[1]);
  assert.ok(ordenes.length > 0);
  for (const o of ordenes) assert.ok(['estado', 'validar', 'comparar', 'cabecera'].includes(o), `orden desconocida: ${o}`);
});

test('el script no modifica archivos', () => {
  // ejecutarGit: un git status normal reescribiría el índice y estropearía el test de entorno, que corre en paralelo.
  const estadoGit = () => ejecutarGit(ruta(''), ['status', '--porcelain']);
  const antes = estadoGit();
  for (const orden of [['estado'], ['validar'], ['cabecera', ej.id]]) {
    execFileSync(process.execPath, [ruta('scripts/auditoria.mjs'), ...orden], { encoding: 'utf8' });
  }
  assert.equal(estadoGit(), antes);
});
