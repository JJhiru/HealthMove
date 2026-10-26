// CS50 AI citation: written with the help of Claude (Anthropic), an AI assistant. Requirements, design decisions and review: JJhiru.
// Consistencia entre protocolo, skill, CLAUDE.md, registro, especificación y catálogo:
// todo lo que uno cita existe en el otro. Solo lee archivos.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { leerProtocolo, EXIGENCIAS } from '../scripts/auditoria/informes.mjs';

const ruta = (p) => fileURLToPath(new URL(`../${p}`, import.meta.url));
const leer = (p) => readFileSync(ruta(p), 'utf8');
const PROTOCOLO = leer('docs/auditoria-catalogo/protocolo.md');
const SKILL = leer('.claude/skills/auditar-catalogo-ejercicios/SKILL.md');
const CLAUDE = leer('CLAUDE.md');
const REGISTRO = leer('docs/auditoria-catalogo/registro.md');
const ESPEC = leer('docs/especificacion-v1.md');
const catalogo = JSON.parse(leer('public/data/catalogo.json'));
const protocolo = leerProtocolo(PROTOCOLO);

// Reglas definidas en el protocolo: «**R2.1.** …», «**R1.4. Un caso…**» o «| R3.1 |» en una tabla.
const REGLAS = new Set([...PROTOCOLO.matchAll(/\*\*(R\d+\.\d+)\.|\| (R\d+\.\d+) \|/g)].map((m) => m[1] || m[2]));
const citadas = (texto) => {
  const s = new Set(texto.match(/R\d+\.\d+/g) || []);
  for (const [, a, b, c] of texto.matchAll(/R(\d+)\.(\d+)-R\1\.(\d+)/g)) for (let i = Number(b); i <= Number(c); i++) s.add(`R${a}.${i}`);
  return s;
};

test('las reglas R… citadas en la skill y en CLAUDE.md existen en el protocolo', () => {
  assert.ok(REGLAS.size > 30, 'el patrón de reglas debe encontrar las definiciones');
  for (const [nombre, texto] of [['skill', SKILL], ['CLAUDE.md', CLAUDE]]) {
    for (const r of citadas(texto)) assert.ok(REGLAS.has(r), `${nombre} cita ${r}, que no existe en el protocolo`);
  }
  for (const r of citadas(PROTOCOLO)) assert.ok(REGLAS.has(r), `el protocolo cita ${r} sin definirla`);
});

test('las cuestiones Q… y las decisiones DG-… citadas existen en el protocolo', () => {
  const qs = new Set(protocolo.cuestiones.map((q) => q.id));
  for (const [nombre, texto] of [['skill', SKILL], ['CLAUDE.md', CLAUDE], ['registro', REGISTRO]]) {
    for (const q of new Set(texto.match(/\bQ\d+\b/g) || [])) assert.ok(qs.has(q), `${nombre} cita ${q}`);
  }
  const dg = new Set(PROTOCOLO.match(/DG-\d+/g));
  for (const d of new Set(REGISTRO.match(/DG-\d+/g) || [])) assert.ok(dg.has(d), `registro cita ${d}`);
  for (const d of new Set(SKILL.match(/DG-\d+/g) || [])) assert.ok(dg.has(d), `skill cita ${d}`);
});

test('una cuestión resuelta lo está también en el registro', () => {
  for (const q of protocolo.cuestiones.filter((x) => x.resuelta)) {
    const fila = PROTOCOLO.split('\n').find((l) => l.startsWith(`| **${q.id}** |`));
    const fecha = fila.match(/registro\.md`?, decisiones del (\d{4}-\d{2}-\d{2}), (P\d+)/);
    assert.ok(fecha, `${q.id} resuelta sin referencia a la decisión del registro`);
    assert.ok(REGISTRO.includes(`## Decisiones del desarrollador (${fecha[1]})`), `${q.id}: falta la sección del ${fecha[1]} en el registro`);
    assert.match(REGISTRO, new RegExp(`\\*\\*${fecha[2]} ·`), `${q.id}: falta ${fecha[2]} en el registro`);
  }
});

test('estado separa las cuestiones abiertas de las resueltas', () => {
  const salida = execFileSync(process.execPath, [ruta('scripts/auditoria.mjs'), 'estado'], { encoding: 'utf8' });
  const linea = salida.split('\n').find((l) => l.startsWith('Cuestiones abiertas'));
  const ids = (s = '') => s.match(/\bQ\d+\b/g) ?? [];
  const [abiertas, resueltas] = linea.split('· resueltas:').map(ids);
  assert.deepEqual(abiertas, protocolo.cuestiones.filter((q) => !q.resuelta).map((q) => q.id), linea);
  assert.deepEqual(resueltas ?? [], protocolo.cuestiones.filter((q) => q.resuelta).map((q) => q.id), linea);
  assert.ok((resueltas ?? []).includes('Q6'), 'Q6 está resuelta (P4)');
});

test('los archivos citados en protocolo, skill y CLAUDE.md existen', () => {
  const carpetas = ['', 'docs/', 'docs/auditoria-catalogo/'];
  for (const [nombre, texto] of [['protocolo', PROTOCOLO], ['skill', SKILL], ['CLAUDE.md', CLAUDE]]) {
    for (const [, p] of texto.matchAll(/`((?:docs|scripts|public|tests|\.claude)\/[\w./-]+?)(?::\d+(?:-\d+)?)?`/g)) {
      if (p.endsWith('/') || p.includes('*')) continue; // carpetas propuestas y patrones
      assert.ok(existsSync(ruta(p)), `${nombre} cita ${p}, que no existe`);
    }
    for (const [, f] of texto.matchAll(/`([\w-]+\.md)`/g)) {
      assert.ok(carpetas.some((c) => existsSync(ruta(c + f))), `${nombre} cita ${f}, que no existe`);
    }
  }
});

test('las 16 exigencias coinciden en la especificación, el catálogo y la skill', () => {
  const s4 = ESPEC.slice(ESPEC.indexOf('## 4.'), ESPEC.indexOf('## 5.'));
  const enEspec = new Set([...s4.matchAll(/`([a-z_]+)`/g)].map((m) => m[1]).filter((k) => EXIGENCIAS.includes(k)));
  assert.equal(EXIGENCIAS.length, 16);
  assert.deepEqual([...enEspec].sort(), [...EXIGENCIAS].sort(), 'la especificación §4 debe nombrar las 16');
  const s5 = SKILL.slice(SKILL.indexOf('## 5.'), SKILL.indexOf('## 6.'));
  const enSkill = [...s5.matchAll(/^- ([a-z_]+)$/gm)].map((m) => m[1]);
  assert.deepEqual([...enSkill].sort(), [...EXIGENCIAS].sort(), 'la skill §5 debe listar las 16');
});

test('los ejercicios citados en R7.7 existen en el catálogo', () => {
  const ids = new Set(catalogo.ejercicios.map((e) => e.id));
  // La lista puede estar vacía (lote 29: se corrigieron las tres); la línea debe existir.
  assert.ok(PROTOCOLO.includes('Discrepancias conocidas'));
  for (const id of protocolo.ilustracionesPendientes) assert.ok(ids.has(id), id);
});
