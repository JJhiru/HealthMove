// CS50 AI citation: written with the help of Claude (Anthropic), an AI assistant. Requirements, design decisions and review: JJhiru.
// ============================================================
//  Validación del catálogo (docs/especificacion-v1.md, §4 y §7).
//  Una sola fuente de reglas para scripts/validar-catalogo.mjs,
//  el motor y la app. Funciones puras: sin DOM ni almacenamiento.
//  Dos niveles:
//   - errores del catálogo: lo invalidan entero y no se usa nada;
//   - problemas de un ejercicio: solo ese ejercicio queda bloqueado.
//  Ante un dato desconocido, nunca se supone un valor permisivo.
// ============================================================
import { RECURSOS } from './opciones.js';

// Vocabulario que entiende el código. El catálogo debe usar exactamente estas claves.
export const EXIGENCIAS = [
  'equilibrio_sin_apoyo', 'una_pierna', 'sentarse_levantarse', 'impacto', 'carga_externa', 'esfuerzo_cardio',
  'brazo_sobre_hombro', 'mano_detras', 'ambos_brazos', 'agarre', 'peso_en_manos', 'flexion_profunda_rodilla',
  'flexion_amplia_cadera', 'puntillas_talones', 'inclinacion_tronco', 'rotacion_tronco',
];
export const POSICIONES = ['sentado', 'de_pie', 'tumbado', 'suelo'];
export const FASES = ['calentamiento', 'principal', 'calma'];
export const ESTADOS = ['borrador', 'basado_en_fuente_publica', 'revisado_por_profesional'];
// Solo estos estados se usan fuera del modo desarrollo (§7.5). Un estado desconocido nunca cuenta como aprobado.
export const ESTADOS_APROBADOS = ['basado_en_fuente_publica', 'revisado_por_profesional'];
const RECURSOS_IDS = RECURSOS.map((r) => r.id);

const esObjeto = (x) => x !== null && typeof x === 'object' && !Array.isArray(x);
const esTexto = (x) => typeof x === 'string' && x.trim() !== '';
// Fecha real del calendario gregoriano con el formato exacto AAAA-MM-DD (sin hora ni espacios).
// Sin Date: Date.UTC convierte los años 0-99 en 1900-1999.
const esFecha = (x) => {
  const m = typeof x === 'string' ? /^(\d{4})-(\d{2})-(\d{2})$/.exec(x) : null;
  if (!m) return false;
  const [anio, mes, dia] = m.slice(1).map(Number);
  const bisiesto = anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0);
  const dias = [31, bisiesto ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][mes - 1];
  return dias !== undefined && dia >= 1 && dia <= dias;
};
// Misma lista sin repeticiones, en cualquier orden.
const mismoConjunto = (lista, esperado) => Array.isArray(lista) && lista.length === esperado.length
  && new Set(lista).size === lista.length && esperado.every((x) => lista.includes(x));
const listaNoVaciaDe = (lista, validos) => Array.isArray(lista) && lista.length > 0 && lista.every((x) => validos.includes(x));

// Errores que invalidan el catálogo completo: sin ellos no se puede evaluar ningún ejercicio.
export function erroresCatalogo(cat) {
  if (!esObjeto(cat)) return ['el catálogo no es un objeto'];
  const errores = [];
  if (!Array.isArray(cat.ejercicios)) errores.push('falta la lista "ejercicios"');
  if (!mismoConjunto(cat.exigencias, EXIGENCIAS)) errores.push(`"exigencias" debe contener exactamente las ${EXIGENCIAS.length} reconocidas`);
  if (!mismoConjunto(cat.posiciones, POSICIONES)) errores.push('"posiciones" no coincide con las reconocidas');
  if (!mismoConjunto(cat.fases, FASES)) errores.push('"fases" no coincide con las reconocidas');
  if (!esObjeto(cat.recursos) || !mismoConjunto(Object.keys(cat.recursos), RECURSOS_IDS)) errores.push('"recursos" no coincide con los reconocidos');
  if (!mismoConjunto(cat.estados_validacion, ESTADOS)) errores.push('"estados_validacion" no coincide con los reconocidos');
  if (Array.isArray(cat.ejercicios)) {
    const vistos = new Set();
    for (const e of cat.ejercicios) {
      if (typeof e?.id !== 'string') continue;
      if (vistos.has(e.id)) errores.push(`${e.id}: id repetido`);
      vistos.add(e.id);
    }
  }
  return errores;
}

// Problemas de un ejercicio. Lista vacía = estructura válida (no dice nada de su estado ni de su compatibilidad).
// Con `ids` (ids del catálogo) también se comprueba que `variante_de` apunte a un ejercicio existente.
export function problemasEjercicio(ej, ids = null) {
  if (!esObjeto(ej)) return ['no es un objeto'];
  const p = [];
  if (typeof ej.id !== 'string' || !/^[a-z0-9-]+$/.test(ej.id)) p.push('id con caracteres no válidos');
  for (const campo of ['nombre', 'descripcion', 'dosis']) if (!esTexto(ej[campo])) p.push(`falta "${campo}"`);
  if (!Array.isArray(ej.instrucciones) || ej.instrucciones.length === 0 || !ej.instrucciones.every(esTexto)) p.push('sin instrucciones');
  if (!(Number.isInteger(ej.duracion_estimada_seg) && ej.duracion_estimada_seg > 0)) p.push('duración no válida');

  // Listas cerradas
  const fasesOk = listaNoVaciaDe(ej.fases, FASES);
  const posicionesOk = listaNoVaciaDe(ej.posiciones, POSICIONES);
  if (!fasesOk) p.push('fases no válidas');
  if (!posicionesOk) p.push('posiciones no válidas');
  if (!Array.isArray(ej.recursos) || !ej.recursos.every((r) => RECURSOS_IDS.includes(r))) p.push('recursos no válidos');

  // Las 16 exigencias revisadas una a una: todas presentes y booleanas, ninguna extra
  if (!esObjeto(ej.exigencias)) {
    p.push('sin exigencias');
  } else {
    for (const x of EXIGENCIAS) if (typeof ej.exigencias[x] !== 'boolean') p.push(`exigencia "${x}" sin revisar`);
    for (const x of Object.keys(ej.exigencias)) if (!EXIGENCIAS.includes(x)) p.push(`exigencia desconocida "${x}"`);
    // Exclusiones del catálogo v1
    if (ej.exigencias.impacto === true) p.push('v1 no admite ejercicios de impacto');
    // Coherencia posición/exigencias
    if (posicionesOk) {
      const dePie = ej.posiciones.includes('de_pie');
      for (const x of ['equilibrio_sin_apoyo', 'una_pierna', 'puntillas_talones']) {
        if (ej.exigencias[x] === true && !dePie) p.push(`"${x}" solo tiene sentido de pie`);
      }
      if (ej.exigencias.sentarse_levantarse === true && !(dePie && ej.posiciones.includes('sentado'))) {
        p.push('"sentarse_levantarse" exige las posiciones sentado y de_pie');
      }
    }
  }

  // Fuente y validación
  if (!esObjeto(ej.fuente) || typeof ej.fuente.url !== 'string' || !ej.fuente.url.startsWith('https://')) p.push('fuente sin URL https');
  if (!esObjeto(ej.fuente) || !esTexto(ej.fuente.organizacion) || !esTexto(ej.fuente.consultado)) p.push('fuente incompleta');
  if (!esObjeto(ej.validacion) || !ESTADOS.includes(ej.validacion.estado)) {
    p.push('estado de validación no válido');
  } else if (ej.validacion.estado !== 'borrador') {
    // Especificación §7.6: para salir de borrador, el autor rellena revisado_por y fecha_revision (AAAA-MM-DD, fecha real).
    if (!esTexto(ej.validacion.revisado_por)) p.push('un ejercicio fuera de borrador necesita "revisado_por"');
    if (!esTexto(ej.validacion.fecha_revision)) p.push('un ejercicio fuera de borrador necesita "fecha_revision"');
    else if (!esFecha(ej.validacion.fecha_revision)) p.push('"fecha_revision" debe ser una fecha real con formato AAAA-MM-DD');
  }

  // Variantes: deben apuntar a un ejercicio existente y distinto
  if (ej.variante_de != null) {
    if (typeof ej.variante_de !== 'string' || ej.variante_de === ej.id || (ids && !ids.has(ej.variante_de))) {
      p.push(`variante_de "${ej.variante_de}" no existe`);
    }
  }
  return p;
}

// ¿Se puede usar por su estado? Aprobado siempre; borrador solo en modo desarrollo; cualquier otro, nunca.
export const estadoUtilizable = (ej, { permitirBorrador = false } = {}) => {
  const estado = esObjeto(ej) && esObjeto(ej.validacion) ? ej.validacion.estado : undefined;
  return ESTADOS_APROBADOS.includes(estado) || (permitirBorrador && estado === 'borrador');
};

// Validación completa: errores del catálogo y, por id (o `#posición` si no tiene id), los problemas de cada ejercicio.
export function validarCatalogo(cat) {
  const errores = erroresCatalogo(cat);
  const porEjercicio = new Map();
  const lista = esObjeto(cat) && Array.isArray(cat.ejercicios) ? cat.ejercicios : [];
  const ids = new Set(lista.map((e) => e?.id).filter((id) => typeof id === 'string'));
  lista.forEach((e, i) => {
    const p = problemasEjercicio(e, ids);
    if (p.length) porEjercicio.set(typeof e?.id === 'string' ? e.id : `#${i}`, p);
  });
  return { valido: errores.length === 0, errores, porEjercicio };
}
