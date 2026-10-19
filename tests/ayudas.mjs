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
// Cada ejercicio falso es estructuralmente válido (pasa validacion.js): así un test solo falla por lo que quiere probar.
export function ejercicioFalso(id, { fases = ['principal'], posiciones = ['sentado'], recursos = [], si = [], estado = 'basado_en_fuente_publica', dur = 60, variante_de = null } = {}) {
  const exigencias = Object.fromEntries(catalogoReal.exigencias.map((k) => [k, si.includes(k)]));
  return {
    id, nombre: id, descripcion: `Ejercicio de prueba ${id}.`, fases, posiciones, recursos, exigencias,
    instrucciones: ['Paso de prueba.'], dosis: '5 veces.', duracion_estimada_seg: dur, variante_de,
    fuente: { organizacion: 'Prueba', titulo: 'Prueba', url: 'https://example.org/prueba', licencia: 'Prueba', consultado: '2026-10-17' },
    adaptaciones: [], notas_etiquetado: '',
    validacion: { estado, responsable: 'Prueba', etiquetado_por: 'Prueba', revisado_por: estado === 'borrador' ? null : 'Revisor de prueba', fecha_revision: estado === 'borrador' ? null : '2026-10-17' },
  };
}

// Catálogo de prueba con las colecciones del real (exigencias, posiciones, fases, recursos y estados) y los ejercicios dados.
export function catalogoFalso(ejercicios) {
  const { ejercicios: _, ...metadatos } = catalogoReal;
  return { ...metadatos, ejercicios };
}
