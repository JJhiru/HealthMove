// CS50 AI citation: written with the help of Claude (Anthropic), an AI assistant. Requirements, design decisions and review: JJhiru.
// ============================================================
//  Impacto en la disponibilidad (protocolo, apartado 9).
//  Herramienta de solo lectura: cuenta los ejercicios compatibles
//  por fase y por posición para un conjunto de perfiles, antes y,
//  si se da un escenario, después de unos cambios de etiquetas
//  aplicados EN MEMORIA. No escribe ningún archivo ni decide si un
//  cambio es correcto (R9.3, R9.4).
//
//  Uso:
//    node scripts/disponibilidad.mjs [--perfiles <archivo.json>]
//        [--escenario <archivo.json>] [--sin-borradores] [--json]
//
//  Perfiles por defecto: los de R9.1, sobre el perfil base que se
//  imprime: cada posición de POSICION, cada opción de opciones.js
//  sola, y la lista fija de combinaciones (registro.md, 2026-10-19,
//  P6). --perfiles añade otros.
//
//  --perfiles: [{ "nombre", "posicion", "opciones": [ids], "cama",
//               "suelo", "recursos": [ids] }]; lo que falte se toma
//               del perfil base.
//  --escenario: { "descripcion", "supuestos": [textos],
//               "cambios": [{ "id", "exigencias": { codigo: bool } }] }
// ============================================================
import { readFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { SECCIONES, POSICION, RECURSOS } from '../public/js/opciones.js';
import * as P from '../public/js/perfil.js';
import { calcularRestricciones, esCompatible } from '../public/js/motor.js';
import { EXIGENCIAS, POSICIONES, FASES } from '../public/js/validacion.js';
import { ejecutarGit } from './auditoria/entradas.mjs';

const RAIZ = fileURLToPath(new URL('..', import.meta.url));
const CATALOGO = 'public/data/catalogo.json';
const TAMANO_MAXIMO = 1024 * 1024;

export class EntradaInvalida extends Error {}
const rechazar = (msg) => { throw new EntradaInvalida(msg); };
const esObjeto = (x) => x !== null && typeof x === 'object' && !Array.isArray(x);

// Perfil base: la app lo aceptaría y no restringe nada. Cada perfil de R9.1 cambia una sola cosa sobre él.
export const BASE = Object.freeze({
  posicion: 'de_pie_libre', cama: true, suelo: true, opciones: [], recursos: RECURSOS.map((r) => r.id),
});

const seccionDe = (opcion) => SECCIONES.find((s) => s.opciones.some((o) => o.id === opcion))?.id;

// Construye el perfil con las funciones de perfil.js, igual que la app.
export function construirPerfil(def) {
  const d = { ...BASE, ...def };
  if (!POSICION.some((o) => o.id === d.posicion)) rechazar(`posición desconocida: ${JSON.stringify(d.posicion)}`);
  if (!Array.isArray(d.opciones) || !Array.isArray(d.recursos)) rechazar('"opciones" y "recursos" deben ser listas');
  // alternarOpcion y alternarRecurso conmutan: un id repetido se desmarcaría.
  if (new Set(d.opciones).size !== d.opciones.length || new Set(d.recursos).size !== d.recursos.length) rechazar('"opciones" y "recursos" no pueden repetir ids');
  let p = P.elegirPosicion(P.aceptarAviso(P.perfilVacio()), d.posicion);
  p = P.responderPregunta(P.responderPregunta(p, 'cama', d.cama === true), 'suelo', d.suelo === true);
  for (const s of SECCIONES) p = P.marcarSinDificultades(p, s.id);
  for (const op of d.opciones) {
    const s = seccionDe(op);
    if (!s) rechazar(`opción desconocida: ${JSON.stringify(op)}`);
    p = P.alternarOpcion(p, s, op);
  }
  for (const r of d.recursos) {
    if (!RECURSOS.some((x) => x.id === r)) rechazar(`recurso desconocido: ${JSON.stringify(r)}`);
    p = P.alternarRecurso(p, r);
  }
  return P.elegirDuracion(p, 15);
}

// Combinaciones fijas de R9.1 (registro.md, 2026-10-19, P6).
export const COMBINACIONES_R91 = Object.freeze([
  ['de_pie_apoyo', ['un_brazo']],
  ['de_pie_apoyo', ['cerrar_mano']],
  ['de_pie_apoyo', ['peso_manos']],
  ['de_pie_apoyo', ['equilibrio']],
  ['solo_sentado', ['un_brazo', 'cerrar_mano', 'brazo_arriba']],
  ['solo_sentado', ['un_brazo', 'cerrar_mano', 'peso_manos']],
]);

// Todos los perfiles de R9.1: cada posición, cada opción sola y las combinaciones fijas.
export function perfilesR91() {
  const porPosicion = POSICION.map((o) => ({ nombre: `posición: ${o.id}`, posicion: o.id }));
  const porOpcion = SECCIONES.flatMap((s) => s.opciones.map((o) => ({ nombre: `${s.id}: ${o.id}`, opciones: [o.id] })));
  const combinados = COMBINACIONES_R91.map(([posicion, opciones]) => ({ nombre: `${posicion} + ${opciones.join(' + ')}`, posicion, opciones }));
  return [...porPosicion, ...porOpcion, ...combinados];
}

// Aplica un escenario a una copia del catálogo. Rechaza ids, exigencias o valores que no existan.
export function aplicarEscenario(catalogo, escenario) {
  if (!esObjeto(escenario) || !Array.isArray(escenario.cambios)) rechazar('el escenario necesita una lista "cambios"');
  const copia = structuredClone(catalogo);
  const porId = new Map(copia.ejercicios.map((e) => [e.id, e]));
  for (const c of escenario.cambios) {
    const e = esObjeto(c) ? porId.get(c.id) : undefined;
    if (!e) rechazar(`el escenario cambia un ejercicio que no existe: ${JSON.stringify(c?.id)}`);
    if (!esObjeto(c.exigencias)) rechazar(`${c.id}: "exigencias" debe ser un objeto`);
    for (const [k, v] of Object.entries(c.exigencias)) {
      if (!EXIGENCIAS.includes(k)) rechazar(`${c.id}: exigencia desconocida ${JSON.stringify(k)}`);
      if (typeof v !== 'boolean') rechazar(`${c.id}.${k}: el valor debe ser true o false`);
      e.exigencias[k] = v;
    }
  }
  return copia;
}

// Ejercicios compatibles con un perfil, por fase y por posición, con sus ids.
export function medir(catalogo, def, { permitirBorrador = true } = {}) {
  const perfil = construirPerfil(def);
  const restr = calcularRestricciones(perfil);
  const compatibles = catalogo.ejercicios.filter((e) => esCompatible(e, restr, { permitirBorrador }));
  const contar = (campo, valores) => Object.fromEntries(valores.map((v) => [v, compatibles.filter((e) => e[campo].includes(v)).length]));
  return {
    nombre: def.nombre ?? '(sin nombre)',
    // Códigos de validarPerfil: si hay alguno, la app no generaría rutina con este perfil (p. ej. otra_indicacion).
    bloqueos: P.validarPerfil(P.confirmarDeclaracionGlobal(perfil)).map((x) => x.codigo),
    total: compatibles.length,
    porFase: contar('fases', FASES),
    porPosicion: contar('posiciones', POSICIONES),
    ids: compatibles.map((e) => e.id),
  };
}

export function analizar(catalogo, perfiles, { escenario = null, permitirBorrador = true } = {}) {
  const despues = escenario ? aplicarEscenario(catalogo, escenario) : null;
  return perfiles.map((def) => {
    const antes = medir(catalogo, def, { permitirBorrador });
    if (!despues) return { ...antes };
    const d = medir(despues, def, { permitirBorrador });
    return {
      ...antes,
      despues: { total: d.total, porFase: d.porFase, porPosicion: d.porPosicion },
      pierde: antes.ids.filter((i) => !d.ids.includes(i)),
      gana: d.ids.filter((i) => !antes.ids.includes(i)),
    };
  });
}

function leerJson(ruta, que) {
  let st;
  try { st = statSync(ruta); } catch { rechazar(`no se puede leer ${que}: ${JSON.stringify(ruta)}`); }
  if (!st.isFile() || st.size > TAMANO_MAXIMO) rechazar(`${que} debe ser un archivo JSON de menos de 1 MB`);
  try { return JSON.parse(readFileSync(ruta, 'utf8')); } catch { rechazar(`${que} no es JSON válido`); }
}

function versionCatalogo() {
  const git = (...a) => { try { return ejecutarGit(RAIZ, a).trim(); } catch { return null; } };
  const commit = git('rev-parse', 'HEAD');
  return {
    commit: commit?.slice(0, 7),
    blob: commit ? git('rev-parse', `${commit}:${CATALOGO}`) : null,
    sinConfirmar: Boolean(git('status', '--porcelain', '--', CATALOGO)),
  };
}

function main(args) {
  const opciones = { perfiles: null, escenario: null, permitirBorrador: true, json: false };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--perfiles' || a === '--escenario') {
      if (i + 1 >= args.length) rechazar(`${a} necesita un archivo`);
      opciones[a.slice(2)] = args[++i];
    } else if (a === '--sin-borradores') opciones.permitirBorrador = false;
    else if (a === '--json') opciones.json = true;
    else rechazar(`argumento desconocido: ${JSON.stringify(String(a).slice(0, 60))}`);
  }
  const catalogo = JSON.parse(readFileSync(join(RAIZ, CATALOGO), 'utf8'));
  const extra = opciones.perfiles ? leerJson(opciones.perfiles, '--perfiles') : [];
  if (!Array.isArray(extra) || !extra.every(esObjeto)) rechazar('--perfiles debe ser una lista de objetos');
  const escenario = opciones.escenario ? leerJson(opciones.escenario, '--escenario') : null;
  const resultados = analizar(catalogo, [...perfilesR91(), ...extra], { escenario, permitirBorrador: opciones.permitirBorrador });
  const condiciones = {
    // R9.2: condiciones de la medición.
    modo: opciones.permitirBorrador ? 'auditoría (incluye borradores): NO es la disponibilidad real' : 'solo ejercicios aprobados',
    catalogo: { version: catalogo.version, ...versionCatalogo() },
    perfilBase: BASE,
    perfiles: `R9.1 (registro.md, 2026-10-19, P6)${extra.length ? ` + ${extra.length} de --perfiles` : ''}`,
    escenario: escenario ? { descripcion: escenario.descripcion ?? '', supuestos: escenario.supuestos ?? [], cambios: escenario.cambios.length } : null,
  };
  if (opciones.json) return console.log(JSON.stringify({ condiciones, resultados }, null, 2));
  const c = condiciones;
  console.log(`Modo: ${c.modo}`);
  console.log(`Catálogo: v${c.catalogo.version}, commit ${c.catalogo.commit}, blob ${c.catalogo.blob}${c.catalogo.sinConfirmar ? ', CON CAMBIOS SIN CONFIRMAR' : ''}`);
  console.log(`Perfil base: ${JSON.stringify(BASE)}`);
  console.log(`Perfiles: ${c.perfiles}`);
  if (c.escenario) console.log(`Escenario: ${c.escenario.descripcion} · ${c.escenario.cambios} cambios · supuestos: ${c.escenario.supuestos.join(' | ') || '—'}`);
  const fila = (m) => `${m.total} (${FASES.map((f) => `${f.slice(0, 5)} ${m.porFase[f]}`).join(', ')}; de pie ${m.porPosicion.de_pie})`;
  for (const r of resultados) {
    const aviso = r.bloqueos.length ? ` [la app no genera: ${r.bloqueos.join(', ')}]` : '';
    console.log(`- ${r.nombre}: ${fila(r)}${r.despues ? ` → ${fila(r.despues)}; pierde ${r.pierde.length}, gana ${r.gana.length}` : ''}${aviso}`);
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  try { main(process.argv.slice(2)); } catch (e) {
    if (!(e instanceof EntradaInvalida)) throw e;
    console.error(`✗ ${e.message}`);
    process.exit(2);
  }
}
