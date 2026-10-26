// CS50 AI citation: written with the help of Claude (Anthropic), an AI assistant. Requirements, design decisions and review: JJhiru.
// ============================================================
//  Herramientas de solo lectura para la auditoría del catálogo.
//  Las reglas viven en docs/auditoria-catalogo/protocolo.md;
//  este script solo comprueba estructura, trazabilidad e
//  invariantes. No modifica ningún archivo.
//
//  Uso:
//    node scripts/auditoria.mjs estado
//        Resumen para empezar una sesión: versión del protocolo y
//        del catálogo, avance, cuestiones abiertas y validación.
//    node scripts/auditoria.mjs validar [lote-06.md …]
//        Comprueba los informes (todos si no se indica ninguno)
//        y registro.md. Sale con código 1 si hay errores.
//    node scripts/auditoria.mjs comparar <A> <B>
//        Diferencias entre dos versiones de un informe. A y B son
//        rutas o «<commit>:<ruta>» (por ejemplo HEAD:docs/…/lote-05.md).
//    node scripts/auditoria.mjs cabecera [id …]
//        Datos para la cabecera de un informe (protocolo, 10.2) y
//        la huella de cada ejercicio indicado.
// ============================================================
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, basename } from 'node:path';
import {
  leerInforme, leerRegistro, leerProtocolo,
  comprobarInforme, comprobarRegistro, compararInformes, huella,
} from './auditoria/informes.mjs';
import { leerEntrada, ejecutarGit } from './auditoria/entradas.mjs';

const RAIZ = fileURLToPath(new URL('..', import.meta.url));
const DOCS = join(RAIZ, 'docs/auditoria-catalogo');
const CATALOGO = 'public/data/catalogo.json';

// Solo con argumentos fijos: el texto del usuario pasa por leerEntrada.
const git = (...args) => {
  try { return ejecutarGit(RAIZ, args).trim(); }
  catch { return null; }
};
const leer = (ref) => leerEntrada(ref, RAIZ);

let catalogo, protocolo, registro, lotes, informes;
function cargar() {
  catalogo = JSON.parse(readFileSync(join(RAIZ, CATALOGO), 'utf8'));
  protocolo = leerProtocolo(readFileSync(join(DOCS, 'protocolo.md'), 'utf8'));
  registro = leerRegistro(readFileSync(join(DOCS, 'registro.md'), 'utf8'));
  lotes = readdirSync(DOCS).filter((f) => /^lote-\d+\.md$/.test(f)).sort();
  informes = new Map(lotes.map((f) => [Number(f.match(/\d+/)[0]), leerInforme(readFileSync(join(DOCS, f), 'utf8'))]));
}

function versionCatalogo() {
  const commit = git('rev-parse', 'HEAD');
  const sucio = git('status', '--porcelain', '--', CATALOGO);
  return {
    version: catalogo.version,
    actualizado: catalogo.actualizado,
    rama: git('rev-parse', '--abbrev-ref', 'HEAD'),
    commit,
    blob: commit ? git('rev-parse', `${commit}:${CATALOGO}`) : null,
    sinConfirmar: Boolean(sucio),
  };
}

function imprimir(problemas) {
  const errores = problemas.filter((p) => p.nivel === 'error');
  const avisos = problemas.filter((p) => p.nivel === 'aviso');
  for (const p of errores) console.error(`  ✗ ${p.id}: ${p.msg}`);
  for (const p of avisos) console.log(`  · ${p.id}: ${p.msg}`);
  return { errores: errores.length, avisos: avisos.length };
}

function validar(archivos) {
  // Sin argumentos, los informes de docs/auditoria-catalogo; con ellos, exactamente esos archivos.
  const elegidos = archivos.length
    ? archivos.map((a) => [a, leerInforme(leer(a))])
    : lotes.map((f) => [f, informes.get(Number(f.match(/\d+/)[0]))]);
  let errores = 0;
  let avisos = 0;
  for (const [f, inf] of elegidos) {
    console.log(`\n${basename(f)} (${inf.formato}, ${inf.ejercicios.length} ejercicios)`);
    const r = imprimir(comprobarInforme(inf, catalogo, protocolo));
    errores += r.errores; avisos += r.avisos;
  }
  console.log('\nregistro.md');
  const r = imprimir(comprobarRegistro(registro, informes, catalogo));
  errores += r.errores; avisos += r.avisos;
  console.log(`\n${errores ? '✗' : '✓'} ${errores} error(es), ${avisos} aviso(s). Comprobación de estructura y trazabilidad, no de la evidencia.`);
  return errores ? 1 : 0;
}

function estado() {
  const v = versionCatalogo();
  const porEstado = {};
  for (const e of catalogo.ejercicios) porEstado[e.validacion.estado] = (porEstado[e.validacion.estado] || 0) + 1;
  const porResultado = {};
  for (const f of registro.filas) porResultado[f.categoria ?? f.resultado] = (porResultado[f.categoria ?? f.resultado] || 0) + 1;
  const decididos = registro.filas.filter((f) => !/^pendiente/i.test(f.decision)).length;
  const formatos = [...informes].map(([n, i]) => `lote ${n}: ${i.formato}`).join(' · ');
  console.log(`Protocolo: versión ${protocolo.version} (docs/auditoria-catalogo/protocolo.md)`);
  console.log(`Catálogo: v${v.version} (${v.actualizado}), rama ${v.rama}, commit ${v.commit?.slice(0, 7)}, blob ${v.blob}${v.sinConfirmar ? ', CON CAMBIOS SIN CONFIRMAR' : ''}`);
  console.log('Estados del catálogo:', porEstado);
  console.log(`Auditados: ${registro.filas.length} de ${catalogo.ejercicios.length} (registro.md). Decisión del desarrollador tomada en ${decididos}.`);
  console.log('Resultados de la auditoría:', porResultado);
  console.log(`Informes: ${formatos}`);
  const abiertas = protocolo.cuestiones.filter((q) => !q.resuelta).map((q) => q.id);
  const resueltas = protocolo.cuestiones.filter((q) => q.resuelta).map((q) => q.id);
  console.log(`Cuestiones abiertas (protocolo, 13): ${abiertas.join(', ')}${resueltas.length ? ` · resueltas: ${resueltas.join(', ')}` : ''}`);
  console.log(`Ilustraciones con discrepancia pendiente (R7.7): ${protocolo.ilustracionesPendientes.join(', ')}`);
  const problemas = [...[...informes.values()].flatMap((i) => comprobarInforme(i, catalogo, protocolo)), ...comprobarRegistro(registro, informes, catalogo)];
  const e = problemas.filter((p) => p.nivel === 'error').length;
  console.log(`Validación: ${e} error(es), ${problemas.length - e} aviso(s). Detalle: node scripts/auditoria.mjs validar`);
  return 0;
}

function comparar(a, b) {
  if (!a || !b) { console.error('Uso: node scripts/auditoria.mjs comparar <A> <B>'); return 2; }
  const cambios = compararInformes(leerInforme(leer(a)), leerInforme(leer(b)));
  console.log(`${a} → ${b}: ${cambios.length} cambio(s)`);
  for (const c of cambios) console.log(`  ${c.id}: ${c.msg}`);
  return 0;
}

function cabecera(ids) {
  const v = versionCatalogo();
  console.log(`- Fecha: ${new Date().toISOString().slice(0, 10)}`);
  console.log(`- Versión del protocolo: ${protocolo.version}`);
  console.log(`- Catálogo: v${v.version} (actualizado ${v.actualizado}), rama \`${v.rama}\`, commit \`${v.commit}\``);
  console.log(v.sinConfirmar
    ? '- Identificador git del catálogo: no fiable, el catálogo tiene cambios sin confirmar'
    : `- Identificador git del catálogo: \`${v.blob}\``);
  const porId = new Map(catalogo.ejercicios.map((e) => [e.id, e]));
  for (const id of ids) {
    const e = porId.get(id);
    console.log(e ? `- Huella literal del objeto de \`${id}\` en el catálogo: \`${huella(e)}\`` : `- \`${id}\`: no existe en el catálogo`);
  }
  return 0;
}

const [orden, ...args] = process.argv.slice(2);
const acciones = { estado: () => estado(), validar: () => validar(args), comparar: () => comparar(args[0], args[1]), cabecera: () => cabecera(args) };
if (!acciones[orden]) {
  console.error('Uso: node scripts/auditoria.mjs estado | validar [lote-NN.md …] | comparar <A> <B> | cabecera [id …]');
  process.exit(2);
}
try {
  cargar();
  process.exit(acciones[orden]());
} catch (e) {
  console.error(`✗ ${e.message}`);
  process.exit(2);
}
