// Utilidades compartidas por los tests.
import { readFileSync } from 'node:fs';
import { SECCIONES } from '../public/js/opciones.js';
import * as P from '../public/js/perfil.js';

export const catalogoReal = JSON.parse(readFileSync(new URL('../public/data/catalogo.json', import.meta.url), 'utf8'));

// Perfil completo y válido: de pie sin sujetarse, cama y suelo sí, sin dificultades, todos los recursos.
export function perfilCompleto(cambios = (p) => p) {
  let p = P.aceptarAviso(P.perfilVacio());
  p = P.elegirPosicion(p, 'de_pie_libre');
  p = P.responderPregunta(p, 'cama', true);
  p = P.responderPregunta(p, 'suelo', true);
  for (const s of SECCIONES) p = P.marcarSinDificultades(p, s.id);
  for (const r of ['silla', 'pared', 'cama', 'banda', 'peso_ligero', 'toalla']) p = P.alternarRecurso(p, r);
  p = P.elegirDuracion(p, 15);
  return cambios(p);
}

// Catálogo mínimo inventado para probar casos límite sin depender del real.
export function ejercicioFalso(id, { fases = ['principal'], posiciones = ['sentado'], recursos = [], si = [], estado = 'basado_en_fuente_publica', dur = 60, variante_de = null } = {}) {
  const exigencias = Object.fromEntries(catalogoReal.exigencias.map((k) => [k, si.includes(k)]));
  return { id, nombre: id, fases, posiciones, recursos, exigencias, duracion_estimada_seg: dur, variante_de, validacion: { estado } };
}
