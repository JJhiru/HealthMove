// ============================================================
//  Lectura y comprobación de los informes de auditoría
//  (docs/auditoria-catalogo/lote-*.md) y de registro.md.
//
//  Solo lee: no modifica el catálogo, los informes ni el registro.
//  Comprueba estructura, trazabilidad e invariantes del protocolo
//  (docs/auditoria-catalogo/protocolo.md). No juzga la evidencia:
//  eso es trabajo del auditor y del desarrollador.
// ============================================================
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

// Las 16 exigencias, tomadas del catálogo como hace scripts/validar-catalogo.mjs;
// public/js/validacion.js exige que sean las mismas.
export const EXIGENCIAS = JSON.parse(readFileSync(new URL('../../public/data/catalogo.json', import.meta.url), 'utf8')).exigencias;

// Apartados que la skill exige por ejercicio (skill, apartado 8).
export const APARTADOS = [
  'Identificación',
  'Evidencia de la fuente',
  'Auditoría de exigencias',
  'Otros campos',
  'Incidencias',
  'Propuesta de cambios',
  'Decisión pendiente del desarrollador',
];

// Resultados posibles de cada ejercicio (skill, apartado 8).
export const RESULTADOS = [
  'LISTO PARA APROBACIÓN DOCUMENTAL',
  'REQUIERE CORRECCIONES',
  'PENDIENTE_DE_FUENTE',
  'PENDIENTE DE DECISIÓN',
  'REQUIERE REVISIÓN PROFESIONAL',
  'NO INCORPORAR CON LA EVIDENCIA ACTUAL',
];

export const VALORES = ['TRUE', 'FALSE', 'REQUIERE_ACLARACION'];
export const NIVELES = ['D', 'I', 'N'];
export const REGLAS = ['evidencia', 'conservadora', 'adaptación'];

const limpiar = (s) => s.replace(/\*\*/g, '').replace(/`/g, '').trim();
const celdas = (fila) => fila.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());

// Primera palabra reconocible de un texto, entre las de una lista.
function prefijo(texto, lista) {
  const t = limpiar(texto).toUpperCase();
  return lista.find((v) => t.startsWith(v.toUpperCase())) ?? null;
}

// Categoría de un resultado escrito de forma libre («LISTO con la opción A…»).
export function categoriaResultado(texto) {
  const r = prefijo(texto, RESULTADOS);
  if (r) return r;
  return /^LISTO\b/i.test(limpiar(texto)) ? 'LISTO PARA APROBACIÓN DOCUMENTAL' : null;
}

// ------------------------------------------------------------
//  Informe de lote
// ------------------------------------------------------------

// Devuelve { cabecera, formato, ejercicios: [{ numero, id, apartados, idDeclarado, filas, decision, linea }] }.
// formato: 'protocolo-1' si la tabla de exigencias tiene la columna «Regla»; si no, 'pre-protocolo'.
export function leerInforme(texto) {
  const lineas = texto.split('\n');
  const bloques = [];
  lineas.forEach((l, i) => {
    if (/^## /.test(l)) bloques.push({ titulo: l.slice(3).trim(), inicio: i });
  });
  const cabecera = lineas.slice(0, bloques[0]?.inicio ?? lineas.length).join('\n');
  const ejercicios = [];
  bloques.forEach((b, k) => {
    const m = b.titulo.match(/^(\d+)\.\s+`?([a-z0-9-]+)`?\s*$/);
    if (!m) return;
    const cuerpo = lineas.slice(b.inicio + 1, bloques[k + 1]?.inicio ?? lineas.length);
    ejercicios.push(leerEjercicio(Number(m[1]), m[2], cuerpo, b.inicio + 1));
  });
  const conRegla = ejercicios.some((e) => e.columnas.some((c) => /^regla/i.test(limpiar(c))));
  return { cabecera, formato: conRegla ? 'protocolo-1' : 'pre-protocolo', ejercicios };
}

function leerEjercicio(numero, id, cuerpo, linea) {
  const apartados = {};
  let actual = null;
  for (const l of cuerpo) {
    const h = l.match(/^### (.+)/);
    if (h) { actual = h[1].trim(); apartados[actual] = []; continue; }
    if (actual) apartados[actual].push(l);
  }
  const ident = (apartados['Identificación'] || []).join('\n');
  const idDeclarado = ident.match(/-\s*ID:\s*`?([a-z0-9-]+)`?/)?.[1] ?? null;

  const tabla = (apartados['Auditoría de exigencias'] || []).filter((l) => l.trim().startsWith('|'));
  const columnas = tabla.length ? celdas(tabla[0]) : [];
  const col = (re) => columnas.findIndex((c) => re.test(limpiar(c)));
  const iEtiqueta = col(/^etiqueta actual/i);
  const iEvidencia = col(/^evidencia/i);
  const iRegla = col(/^regla/i);
  const iResultado = col(/^resultado/i);
  const filas = tabla.slice(1)
    .map(celdas)
    .filter((c) => EXIGENCIAS.includes(limpiar(c[0] ?? '')))
    .map((c) => ({
      exigencia: limpiar(c[0]),
      etiqueta: iEtiqueta >= 0 ? limpiar(c[iEtiqueta] ?? '').toLowerCase() : null,
      evidencia: iEvidencia >= 0 ? limpiar(c[iEvidencia] ?? '') : null,
      nivel: iEvidencia >= 0 ? (limpiar(c[iEvidencia] ?? '').match(/^([DIN])\b/)?.[1] ?? null) : null,
      regla: iRegla >= 0 ? (prefijo(c[iRegla] ?? '', REGLAS)) : null,
      reglaTexto: iRegla >= 0 ? limpiar(c[iRegla] ?? '') : null,
      resultado: iResultado >= 0 ? prefijo(c[iResultado] ?? '', VALORES) : null,
      resultadoTexto: iResultado >= 0 ? limpiar(c[iResultado] ?? '') : null,
    }));

  const decisionTexto = (apartados['Decisión pendiente del desarrollador'] || [])
    .map((l) => l.trim()).find((l) => l && l !== '---') ?? '';
  return {
    numero, id, linea, idDeclarado, columnas, filas,
    texto: cuerpo.join('\n'),
    apartados: Object.keys(apartados),
    decisionTexto,
    decision: categoriaResultado(decisionTexto),
  };
}

// ------------------------------------------------------------
//  registro.md y protocolo.md
// ------------------------------------------------------------

export function leerRegistro(texto) {
  const lineas = texto.split('\n');
  const inicio = lineas.findIndex((l) => /^## Ejercicios auditados/.test(l));
  const filas = [];
  if (inicio >= 0) {
    for (let i = inicio + 1; i < lineas.length && !/^## /.test(lineas[i]); i++) {
      const c = celdas(lineas[i]);
      if (!lineas[i].trim().startsWith('|') || !/^\d+$/.test(c[0])) continue;
      filas.push({ lote: Number(c[0]), id: limpiar(c[1]), resultado: c[2], categoria: categoriaResultado(c[2]), decision: limpiar(c[3] ?? ''), linea: i + 1 });
    }
  }
  const auditados = texto.match(/Auditados:\s*(\d+)\s+de\s+(\d+)/);
  return { filas, auditados: auditados ? { n: Number(auditados[1]), total: Number(auditados[2]) } : null };
}

export function leerProtocolo(texto) {
  const version = texto.match(/\*\*Versión:\*\*\s*([\d.]+)/)?.[1] ?? null;
  const r77 = texto.split('\n').find((l) => l.includes('Discrepancias conocidas')) ?? '';
  const ilustracionesPendientes = [...r77.matchAll(/`([a-z0-9-]+)`/g)].map((m) => m[1]).filter((s) => !s.endsWith('.mjs'));
  // Una cuestión está resuelta si su fila del apartado 13 lo dice («**Resuelta**»).
  const cuestiones = [...texto.matchAll(/^\| \*\*(Q\d+)\*\* \| (.+?) \|(.*)$/gm)]
    .map((m) => ({ id: m[1], texto: limpiar(m[2]), resuelta: /\*\*Resuelta\*\*/.test(m[3]) }));
  return { version, ilustracionesPendientes, cuestiones };
}

// ------------------------------------------------------------
//  Comprobaciones
// ------------------------------------------------------------

// Comprueba un informe frente al catálogo y al protocolo.
// Devuelve una lista de { nivel: 'error' | 'aviso', id, msg }.
// En los informes 'pre-protocolo' las reglas del protocolo 1.0 son avisos:
// el protocolo dice que se revisarán con él antes de aplicar cambios.
export function comprobarInforme(informe, catalogo, protocolo) {
  const out = [];
  const porId = new Map((catalogo.ejercicios || []).map((e) => [e.id, e]));
  const p1 = informe.formato === 'protocolo-1';
  const nivelProtocolo = p1 ? 'error' : 'aviso';
  const add = (nivel, id, msg) => out.push({ nivel, id, msg });

  if (!/Fecha:\s*\d{4}-\d{2}-\d{2}/.test(informe.cabecera)) add('error', '(cabecera)', 'falta «Fecha: AAAA-MM-DD»');
  if (p1) {
    // Formato de `node scripts/auditoria.mjs cabecera`.
    if (!/versión del protocolo:\s*\d+\.\d+/i.test(informe.cabecera)) add('error', '(cabecera)', 'falta «Versión del protocolo: <n>» (skill, apartado 8)');
    if (!/identificador git del catálogo:[^\n]*([0-9a-f]{40}|sin confirmar)/i.test(informe.cabecera)) {
      add('error', '(cabecera)', 'falta el identificador git del catálogo o la indicación de cambios sin confirmar (protocolo, 10.2)');
    }
  } else {
    add('aviso', '(cabecera)', 'informe anterior al protocolo 1.0: sin D/I/N ni regla por exigencia; hay que revisarlo con el protocolo antes de aplicar cambios');
  }
  if (!informe.ejercicios.length) add('error', '(informe)', 'no hay apartados de ejercicio («## <n>. <id>»)');

  const vistos = new Set();
  for (const e of informe.ejercicios) {
    const ej = porId.get(e.id);
    if (vistos.has(e.id)) add('error', e.id, 'aparece dos veces en el informe');
    vistos.add(e.id);
    if (!ej) { add('error', e.id, 'no existe en el catálogo'); continue; }
    if (e.idDeclarado !== e.id) add('error', e.id, `el ID de «Identificación» (${e.idDeclarado}) no coincide con el título`);
    for (const a of APARTADOS) if (!e.apartados.includes(a)) add('error', e.id, `falta el apartado «${a}»`);

    // Tabla completa: las 16 exigencias, una vez cada una, también las FALSE.
    const cuenta = new Map();
    for (const f of e.filas) cuenta.set(f.exigencia, (cuenta.get(f.exigencia) || 0) + 1);
    for (const x of EXIGENCIAS) {
      if (!cuenta.has(x)) add('error', e.id, `falta la exigencia ${x} en la tabla`);
      else if (cuenta.get(x) > 1) add('error', e.id, `la exigencia ${x} aparece ${cuenta.get(x)} veces`);
    }
    for (const f of e.filas) {
      const actual = String(ej.exigencias?.[f.exigencia]);
      if (f.etiqueta !== actual) add('aviso', e.id, `${f.exigencia}: el informe dice «${f.etiqueta}» y el catálogo actual «${actual}» (el informe puede estar desactualizado)`);
      if (!f.resultado) add('error', e.id, `${f.exigencia}: resultado propuesto «${f.resultadoTexto}» no es ${VALORES.join(', ')}`);
      if (!p1) continue;
      if (!f.nivel) add('error', e.id, `${f.exigencia}: la evidencia debe empezar por D, I o N (DG-7)`);
      if (!f.regla) add('error', e.id, `${f.exigencia}: regla «${f.reglaTexto}» no es ${REGLAS.join(', ')}`);
      // R2.2 y R2.3: FALSE solo con evidencia D o adaptación aprobada.
      if (f.resultado === 'FALSE' && !(f.nivel === 'D' || f.regla === 'adaptación')) {
        add('error', e.id, `${f.exigencia}: FALSE sin evidencia D ni adaptación (R2.2)`);
      }
      if (f.regla === 'conservadora' && f.resultado === 'FALSE') add('error', e.id, `${f.exigencia}: la regla conservadora solo lleva a TRUE (R2.1)`);
      if (f.regla === 'evidencia' && f.nivel === 'N') add('error', e.id, `${f.exigencia}: con evidencia N el valor no puede basarse en la evidencia (R2.1)`);
      // Mientras Q1 (ambos_brazos) o Q2 (agarre) sigan abiertas, no se proponen cambios de esa etiqueta.
      const cuestion = { ambos_brazos: 'Q1', agarre: 'Q2' }[f.exigencia];
      const abierta = cuestion && !protocolo.cuestiones?.find((q) => q.id === cuestion)?.resuelta;
      if (abierta && f.resultado && f.resultado !== 'REQUIERE_ACLARACION' && f.resultado.toLowerCase() !== actual) {
        add('aviso', e.id, `${f.exigencia}: propone cambiar la etiqueta; comprueba que no dependa de ${cuestion} (protocolo, apartado 13)`);
      }
    }

    if (!e.decision) add('error', e.id, `decisión final «${e.decisionTexto}» no es uno de los resultados de la skill`);
    // R7.7: con una discrepancia de ilustración pendiente no se propone la aprobación documental.
    if (e.decision === 'LISTO PARA APROBACIÓN DOCUMENTAL' && protocolo.ilustracionesPendientes.includes(e.id)) {
      add(nivelProtocolo, e.id, 'tiene una discrepancia de ilustración pendiente y no puede proponerse para aprobación documental (R7.7)');
    }
    // Fuente declarada (catálogo) frente a fuente consultada (informe).
    const f = ej.fuente || {};
    let host = '';
    try { host = new URL(f.url).host.replace(/^www\./, ''); } catch { /* url ausente o inválida */ }
    const org = (f.organizacion || '').split(/[,(]/)[0].trim();
    const texto = informe.cabecera + '\n' + e.texto;
    const citada = [f.url, host, org].some((s) => s && texto.includes(s));
    if (!citada) add('aviso', e.id, `el informe no cita la fuente que declara el catálogo (${f.organizacion || '?'}, ${f.url || 'sin url'})`);
  }
  return out;
}

// Comprueba registro.md frente a los informes y al catálogo.
export function comprobarRegistro(registro, informes, catalogo) {
  const out = [];
  const add = (nivel, id, msg) => out.push({ nivel, id, msg });
  const porId = new Map((catalogo.ejercicios || []).map((e) => [e.id, e]));
  const enInformes = new Map();
  for (const [lote, inf] of informes) for (const e of inf.ejercicios) enInformes.set(e.id, { lote, e });

  const vistos = new Set();
  for (const f of registro.filas) {
    if (vistos.has(f.id)) add('error', f.id, `registro.md:${f.linea}: aparece dos veces`);
    vistos.add(f.id);
    if (!porId.has(f.id)) add('error', f.id, `registro.md:${f.linea}: no existe en el catálogo`);
    const inf = enInformes.get(f.id);
    if (!inf) { add('error', f.id, `registro.md:${f.linea}: no aparece en ningún informe de lote`); continue; }
    if (inf.lote !== f.lote) add('error', f.id, `registro.md:${f.linea}: lote ${f.lote} en el registro y ${inf.lote} en los informes`);
    if (!f.categoria) add('error', f.id, `registro.md:${f.linea}: resultado «${f.resultado}» no reconocido`);
    else if (inf.e.decision && f.categoria !== inf.e.decision) {
      add('error', f.id, `registro.md:${f.linea}: resultado «${f.categoria}» y el informe del lote ${inf.lote} dice «${inf.e.decision}»`);
    }
  }
  for (const [id, { lote }] of enInformes) if (!vistos.has(id)) add('error', id, `está en el informe del lote ${lote} pero no en registro.md`);

  if (registro.auditados) {
    if (registro.auditados.n !== registro.filas.length) add('error', '(registro)', `«Auditados: ${registro.auditados.n}» y la tabla tiene ${registro.filas.length} filas`);
    if (registro.auditados.total !== porId.size) add('error', '(registro)', `«de ${registro.auditados.total}» y el catálogo tiene ${porId.size} ejercicios`);
  }
  // Principio 1: ningún estado cambia sin una decisión explícita registrada.
  for (const ej of porId.values()) {
    if (ej.validacion?.estado === 'borrador') continue;
    const f = registro.filas.find((r) => r.id === ej.id);
    if (!f || /^pendiente/i.test(f.decision)) add('error', ej.id, `estado «${ej.validacion?.estado}» sin decisión del desarrollador en registro.md`);
  }
  return out;
}

// ------------------------------------------------------------
//  Comparación de dos versiones de un informe
// ------------------------------------------------------------

export function compararInformes(a, b) {
  const cambios = [];
  const ma = new Map(a.ejercicios.map((e) => [e.id, e]));
  const mb = new Map(b.ejercicios.map((e) => [e.id, e]));
  if (a.formato !== b.formato) cambios.push({ id: '(informe)', msg: `formato ${a.formato} → ${b.formato}` });
  for (const id of ma.keys()) if (!mb.has(id)) cambios.push({ id, msg: 'retirado' });
  for (const [id, eb] of mb) {
    const ea = ma.get(id);
    if (!ea) { cambios.push({ id, msg: 'nuevo' }); continue; }
    if (ea.decision !== eb.decision) cambios.push({ id, msg: `decisión: ${ea.decision} → ${eb.decision}` });
    const fa = new Map(ea.filas.map((f) => [f.exigencia, f]));
    const fb = new Set(eb.filas.map((f) => f.exigencia));
    for (const x of fa.keys()) if (!fb.has(x)) cambios.push({ id, msg: `${x}: fila eliminada` });
    for (const f of eb.filas) {
      const o = fa.get(f.exigencia);
      if (!o) continue;
      for (const [campo, nombre] of [['etiqueta', 'etiqueta actual'], ['resultado', 'propuesta'], ['nivel', 'evidencia'], ['regla', 'regla']]) {
        if (o[campo] !== f[campo] && (o[campo] || f[campo])) cambios.push({ id, msg: `${f.exigencia} · ${nombre}: ${o[campo] ?? '—'} → ${f[campo] ?? '—'}` });
      }
    }
  }
  return cambios;
}

// Huella literal del objeto JSON de un ejercicio: sha256 de JSON.stringify, en el orden de
// claves y de listas del archivo, recortada a 16 hex. Cambia con cualquier campo del objeto,
// incluidos `validacion` y el orden; no incluye la evidencia del informe ni las decisiones
// de registro.md. No es una huella de compatibilidad ni de auditoría (tests/auditoria-huella.test.mjs).
export const huella = (ejercicio) => createHash('sha256').update(JSON.stringify(ejercicio)).digest('hex').slice(0, 16);
