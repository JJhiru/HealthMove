// ============================================================
//  Motor de reglas (docs/especificacion-v1.md, §8).
//  1. Traduce el perfil a restricciones explícitas.
//  2. Filtra el catálogo: un ejercicio es compatible solo si cumple TODAS.
//  3. Compone una rutina por fases. Si no hay suficientes ejercicios,
//     lo dice; nunca relaja un filtro.
// ============================================================
import { POSICION, PREGUNTAS_POSICION, SECCIONES, opcionDe } from './opciones.js';
import { validarPerfil, necesitaPreguntasPosicion } from './perfil.js';

export const TRANSICION_SEG = 15;            // pausa entre ejercicios
export const REPARTO = { calentamiento: 0.2, principal: 0.6, calma: 0.2 };
export const MINIMOS = { calentamiento: 1, principal: 3, calma: 1 };
export const MAX_RONDAS_PRINCIPAL = 2;
export const TOLERANCIA_DURACION = 0.8;      // la rutina debe llegar al 80 % del tiempo elegido

// --- 1. Restricciones -------------------------------------------------

// Devuelve las posiciones permitidas y, por cada exigencia excluida, los textos que la motivan.
export function calcularRestricciones(perfil) {
  const posiciones = new Set(['sentado', 'de_pie', 'tumbado', 'suelo']);
  const exigencias = new Map(); // codigo -> [motivo, ...]
  const excluir = (codigos = [], motivo) => {
    for (const c of codigos) exigencias.set(c, [...(exigencias.get(c) || []), motivo]);
  };

  const pos = POSICION.find((o) => o.id === perfil.posicion);
  if (pos) {
    excluir(pos.excluyeExigencias, pos.texto);
    pos.excluyePosiciones.forEach((x) => posiciones.delete(x));
  }
  if (necesitaPreguntasPosicion(perfil)) {
    for (const q of PREGUNTAS_POSICION) if (perfil[q.id] !== true) posiciones.delete(q.siNoExcluye);
  }
  for (const s of SECCIONES) {
    for (const id of perfil.secciones[s.id].opciones) {
      const o = opcionDe(s.id, id);
      excluir(o.excluyeExigencias, o.texto);
      (o.excluyePosiciones || []).forEach((x) => posiciones.delete(x));
    }
  }
  return { posiciones, exigencias, recursos: new Set(perfil.recursos) };
}

// --- 2. Compatibilidad ------------------------------------------------

// Motivos por los que un ejercicio NO es compatible. Lista vacía = compatible.
export function motivosIncompatibilidad(ej, restr, { permitirBorrador = false } = {}) {
  const motivos = [];
  if (ej.validacion?.estado === 'borrador' && !permitirBorrador) motivos.push({ tipo: 'sin_revisar' });
  // Información insuficiente: alguna exigencia sin revisar no cuenta como "no la exige".
  if (Object.values(ej.exigencias || {}).some((v) => typeof v !== 'boolean')) motivos.push({ tipo: 'sin_revisar' });
  for (const p of ej.posiciones) if (!restr.posiciones.has(p)) motivos.push({ tipo: 'posicion', codigo: p });
  for (const [codigo, v] of Object.entries(ej.exigencias)) if (v === true && restr.exigencias.has(codigo)) motivos.push({ tipo: 'exigencia', codigo });
  for (const r of ej.recursos) if (!restr.recursos.has(r)) motivos.push({ tipo: 'recurso', codigo: r });
  return motivos;
}

export const esCompatible = (ej, restr, opciones) => motivosIncompatibilidad(ej, restr, opciones).length === 0;

// Una rutina guardada que usa ejercicios sin revisar solo vale mientras dure el modo desarrollo:
// al salir de él no se puede seguir viendo ni reproducir.
export function resultadoVigente(resultado, { permitirBorrador = false } = {}) {
  if (!resultado?.res) return false;
  return permitirBorrador || !(resultado.res.ok && resultado.res.rutina?.usaBorrador);
}

// --- 3. Generación ----------------------------------------------------

// Generador pseudoaleatorio con semilla (mulberry32): misma semilla, misma rutina.
export function crearAleatorio(semilla) {
  let a = semilla >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function barajar(lista, aleatorio) {
  const r = [...lista];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(aleatorio() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

const familia = (ej) => ej.variante_de || ej.id;

// Orden de posiciones dentro de una fase: agrupar evita ir y venir entre la silla y la cama.
export const ORDEN_POSICION = ['sentado', 'de_pie', 'tumbado', 'suelo'];
export const clavePosicion = (ej) => Math.max(...ej.posiciones.map((p) => ORDEN_POSICION.indexOf(p)));

export function generarRutina(catalogo, perfil, { semilla = 1, permitirBorrador = false } = {}) {
  const problemas = validarPerfil(perfil);
  if (problemas.length) return { ok: false, motivo: 'perfil_incompleto', problemas };

  const restr = calcularRestricciones(perfil);
  const opciones = { permitirBorrador };
  const compatibles = catalogo.ejercicios.filter((e) => esCompatible(e, restr, opciones));
  const explicacion = explicar(catalogo, restr, opciones);

  const aleatorio = crearAleatorio(semilla);
  const objetivoSeg = perfil.duracionMin * 60;
  const usadas = new Set(); // familias ya usadas: nunca un ejercicio y su variante juntos
  const porFase = {};

  // Calentamiento y calma primero, para que la parte principal no se quede con los ejercicios
  // que valen para varias fases.
  for (const fase of ['calentamiento', 'calma', 'principal']) {
    const presupuesto = objetivoSeg * REPARTO[fase];
    const pool = barajar(compatibles.filter((e) => e.fases.includes(fase) && !usadas.has(familia(e))), aleatorio);
    const elegidos = [];
    let tiempo = 0;
    for (const e of pool) {
      if (usadas.has(familia(e))) continue; // su base o una variante ya entró en esta misma fase
      const coste = e.duracion_estimada_seg + TRANSICION_SEG;
      if (elegidos.length >= MINIMOS[fase] && tiempo + coste > presupuesto) continue;
      elegidos.push(e);
      usadas.add(familia(e));
      tiempo += coste;
      if (tiempo >= presupuesto && elegidos.length >= MINIMOS[fase]) break;
    }
    porFase[fase] = elegidos;
  }

  const faltan = {};
  for (const fase of Object.keys(MINIMOS)) {
    if (porFase[fase].length < MINIMOS[fase]) faltan[fase] = MINIMOS[fase] - porFase[fase].length;
  }
  if (Object.keys(faltan).length) {
    return { ok: false, motivo: 'catalogo_insuficiente', faltan, limitantes: limitantes(catalogo, restr, opciones), explicacion };
  }

  for (const fase of Object.keys(porFase)) porFase[fase].sort((a, b) => clavePosicion(a) - clavePosicion(b));

  // Bloques: la parte principal puede repetirse en una segunda ronda para llenar el tiempo.
  const bloques = [];
  const anadir = (fase, e, ronda) => bloques.push({ fase, ejercicioId: e.id, ronda });
  porFase.calentamiento.forEach((e) => anadir('calentamiento', e, 1));
  porFase.principal.forEach((e) => anadir('principal', e, 1));
  const coste = (lista) => lista.reduce((t, e) => t + e.duracion_estimada_seg + TRANSICION_SEG, 0);
  let total = coste(porFase.calentamiento) + coste(porFase.principal) + coste(porFase.calma);
  for (let ronda = 2; ronda <= MAX_RONDAS_PRINCIPAL; ronda++) {
    for (const e of porFase.principal) {
      const c = e.duracion_estimada_seg + TRANSICION_SEG;
      if (total + c > objetivoSeg * 1.1) break;
      anadir('principal', e, ronda);
      total += c;
    }
  }
  porFase.calma.forEach((e) => anadir('calma', e, 1));

  if (total < objetivoSeg * TOLERANCIA_DURACION) {
    return {
      ok: false, motivo: 'duracion_insuficiente', duracionPosibleSeg: total,
      limitantes: limitantes(catalogo, restr, opciones), explicacion,
    };
  }

  return {
    ok: true,
    rutina: {
      duracionObjetivoMin: perfil.duracionMin,
      duracionEstimadaSeg: total,
      semilla,
      usaBorrador: bloques.some((b) => catalogo.ejercicios.find((e) => e.id === b.ejercicioId).validacion?.estado === 'borrador'),
      bloques,
    },
    explicacion,
  };
}

// Por cada restricción, cuántos ejercicios del catálogo excluye (solo informativo).
export function explicar(catalogo, restr, opciones) {
  const cuenta = new Map();
  let sinRevisar = 0;
  for (const e of catalogo.ejercicios) {
    const motivos = motivosIncompatibilidad(e, restr, opciones);
    if (motivos.some((m) => m.tipo === 'sin_revisar')) { sinRevisar++; continue; }
    for (const m of motivos) {
      const k = `${m.tipo}:${m.codigo}`;
      cuenta.set(k, (cuenta.get(k) || 0) + 1);
    }
  }
  const items = [...cuenta].map(([k, n]) => {
    const [tipo, codigo] = k.split(':');
    return { tipo, codigo, excluidos: n, motivos: tipo === 'exigencia' ? restr.exigencias.get(codigo) : [] };
  }).sort((a, b) => b.excluidos - a.excluidos);
  return { items, sinRevisar };
}

// Restricciones que más limitan: cuántos ejercicios más serían compatibles si esa sola no existiera.
// Sirve para informar, nunca para quitarla automáticamente.
export function limitantes(catalogo, restr, opciones) {
  const resultado = [];
  const probar = (tipo, codigo, sinElla) => {
    const extra = catalogo.ejercicios.filter((e) => !esCompatible(e, restr, opciones) && esCompatible(e, sinElla, opciones)).length;
    if (extra > 0) resultado.push({ tipo, codigo, ejerciciosExtra: extra, motivos: tipo === 'exigencia' ? restr.exigencias.get(codigo) : [] });
  };
  for (const codigo of restr.exigencias.keys()) {
    const ex = new Map(restr.exigencias); ex.delete(codigo);
    probar('exigencia', codigo, { ...restr, exigencias: ex });
  }
  for (const p of ['sentado', 'de_pie', 'tumbado', 'suelo']) {
    if (!restr.posiciones.has(p)) probar('posicion', p, { ...restr, posiciones: new Set([...restr.posiciones, p]) });
  }
  const todos = new Set(catalogo.ejercicios.flatMap((e) => e.recursos));
  for (const r of todos) {
    if (!restr.recursos.has(r)) probar('recurso', r, { ...restr, recursos: new Set([...restr.recursos, r]) });
  }
  return resultado.sort((a, b) => b.ejerciciosExtra - a.ejerciciosExtra).slice(0, 3);
}
