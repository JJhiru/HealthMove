// CS50 AI citation: written with the help of Claude (Anthropic), an AI assistant. Requirements, design decisions and review: JJhiru.
// ============================================================
//  Caso de uso: revisión documental asistida por IA de un ejercicio.
//
//  Prepara de forma explícita y determinista lo que se envía:
//    contexto  → apartados del protocolo, especificación §4 y las
//                decisiones del registro (igual para cada ejercicio);
//    entradas  → el objeto del ejercicio en el catálogo y, si se
//                indica, su apartado en un informe de lote.
//  Junta las comprobaciones deterministas que ya existen y escribe
//  el informe en docs/auditoria-catalogo/ia/ sin sobrescribir nada.
//  No toca el catálogo, el protocolo, el registro ni los informes.
// ============================================================
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { leerEntrada } from '../auditoria/entradas.mjs';
import { leerInforme, leerProtocolo, comprobarInforme } from '../auditoria/informes.mjs';
import { huellaTexto } from './revision.mjs';
import { usd } from './presupuesto.mjs';
import { TARIFAS } from './tarifas.mjs';

export const RUTA_INSTRUCCIONES = 'scripts/ia/instrucciones/revision-documental.md';
export const CARPETA_INFORMES = 'docs/auditoria-catalogo/ia';
const APARTADOS_PROTOCOLO = ['2', '3', '5', '6', '7', '8', '11', '13'];
const SECCIONES_REGISTRO = [/^## Decisiones del desarrollador \(/, /^## Decisiones generales aprobadas/];

// Apartados «## <n>.» de un markdown, cada uno hasta el siguiente «## ».
function apartados(texto, coincide) {
  const partes = texto.split(/\n(?=## )/);
  return partes.filter((p) => coincide(p.split('\n')[0]));
}

export function prepararRevisionEjercicio({ raiz, id, informe = null }) {
  const leer = (p) => readFileSync(join(raiz, p), 'utf8');
  const catalogo = JSON.parse(leer('public/data/catalogo.json'));
  const ej = catalogo.ejercicios.find((e) => e.id === id);
  if (!ej) throw new Error(`el ejercicio ${JSON.stringify(id)} no existe en el catálogo`);

  const instrucciones = leer(RUTA_INSTRUCCIONES);
  const version = instrucciones.match(/^version: (.+)$/m)?.[1] ?? 'desconocida';
  const textoProtocolo = leer('docs/auditoria-catalogo/protocolo.md');
  const protocolo = leerProtocolo(textoProtocolo);

  const contexto = [];
  for (const n of APARTADOS_PROTOCOLO) {
    const [a] = apartados(textoProtocolo, (t) => t.startsWith(`## ${n}. `));
    if (a) contexto.push({ id: `protocolo-${n}`, procedencia: `docs/auditoria-catalogo/protocolo.md#${n}`, texto: a.trim() });
  }
  const [espec4] = apartados(leer('docs/especificacion-v1.md'), (t) => t.startsWith('## 4. '));
  if (espec4) contexto.push({ id: 'especificacion-4', procedencia: 'docs/especificacion-v1.md#4', texto: espec4.trim() });
  apartados(leer('docs/auditoria-catalogo/registro.md'), (t) => SECCIONES_REGISTRO.some((r) => r.test(t))).forEach((a, i) => {
    contexto.push({ id: `registro-decisiones-${i + 1}`, procedencia: 'docs/auditoria-catalogo/registro.md#decisiones', texto: a.trim() });
  });

  const entradas = [{ id: `catalogo-${id}`, procedencia: `public/data/catalogo.json#${id}`, texto: JSON.stringify(ej, null, 2) }];
  const deterministas = {
    estado: ej.validacion?.estado ?? null,
    especificaDe: ej.fuente?.especifica_de ?? null,
    ilustracionPendiente: protocolo.ilustracionesPendientes.includes(id),
    informe: null,
  };
  if (informe) {
    const inf = leerInforme(leerEntrada(informe, raiz)); // misma validación de rutas que scripts/auditoria.mjs
    const apartado = inf.ejercicios.find((e) => e.id === id);
    if (!apartado) throw new Error(`el informe ${informe} no tiene un apartado para ${id}`);
    entradas.push({ id: `informe-${id}`, procedencia: `${informe}#${id}`, texto: `## ${apartado.numero}. ${id}\n${apartado.texto}`.trim() });
    deterministas.informe = {
      ruta: informe,
      formato: inf.formato,
      problemas: comprobarInforme(inf, catalogo, protocolo).filter((p) => p.id === id || p.id === '(cabecera)'),
    };
  }
  return { id, instrucciones, versionInstrucciones: version, huellaInstrucciones: huellaTexto(instrucciones), contexto, entradas, deterministas };
}

const celda = (s) => String(s).replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();

export function informeMarkdown({ prep, salida, fecha }) {
  const { resultado, meta } = salida;
  const d = prep.deterministas;
  const l = [];
  l.push(`# Revisión asistida por IA: \`${prep.id}\``, '');
  l.push('> **ANÁLISIS ASISTIDO POR IA. No es una decisión, una aprobación ni una validación clínica.**');
  l.push('> Lo que sigue son sugerencias de un modelo de lenguaje. Requieren revisión humana antes de usarse. El modelo no ha consultado las fuentes originales: solo los textos enviados.', '');
  l.push('## Datos de la ejecución', '');
  l.push(`- Fecha: ${fecha}`);
  l.push(`- Modelo: \`${meta.modelo}\` · id de la respuesta: \`${meta.id ?? 'no informado'}\``);
  l.push(`- Instrucciones: \`${RUTA_INSTRUCCIONES}\` (${prep.versionInstrucciones}, sha256 \`${prep.huellaInstrucciones.slice(0, 16)}\`)`);
  l.push(`- Uso informado por la API: ${meta.uso.aciertoCache} tokens de entrada en caché, ${meta.uso.falloCache} sin caché y ${meta.uso.salida} de salida (estimados antes de enviar: ${meta.tokensEntradaEstimados} de entrada)`);
  l.push(`- Coste: ${usd(meta.coste)} a tarifa punta, que es la cota superior (en horario valle, la mitad). Máximo autorizado: ${usd(meta.costeMaximo)}. Tarifas verificadas el ${TARIFAS.verificadas}`);
  l.push('- Bloques enviados:');
  for (const b of meta.bloques) l.push(`  - \`${b.id}\` ← \`${b.procedencia}\` (${b.caracteres} caracteres, sha256 \`${b.sha256.slice(0, 16)}\`)`);
  l.push('', '## Comprobado por herramientas deterministas', '');
  l.push(`- Estado en el catálogo: \`${d.estado}\``);
  l.push(`- \`fuente.especifica_de\`: ${d.especificaDe ? `«${d.especificaDe}»` : 'ausente'}`);
  l.push(`- Discrepancia de ilustración pendiente (R7.7): ${d.ilustracionPendiente ? 'sí' : 'no'}`);
  if (d.informe) {
    l.push(`- Informe \`${d.informe.ruta}\`: formato ${d.informe.formato}; ${d.informe.problemas.length ? 'problemas:' : 'sin problemas para este ejercicio'}`);
    for (const p of d.informe.problemas) l.push(`  - ${p.nivel}: ${p.msg}`);
  }
  l.push('- Cita verificada: la cita del modelo aparece literalmente, salvo los espacios, en el bloque que indica. Lo comprueba este script, no el modelo.');
  l.push('', '## Sugerencias del modelo (no verificadas salvo la cita)', '');
  l.push(`**Resumen del modelo:** ${resultado.resumen}`, '');
  if (!resultado.hallazgos.length) l.push('El modelo no ha devuelto hallazgos.');
  else {
    l.push('| # | Hallazgo | Criterio | Gravedad | Confianza | Cita verificada | Revisión humana |', '|---|---|---|---|---|---|---|');
    resultado.hallazgos.forEach((h, i) => l.push(`| ${i + 1} | ${celda(h.titulo)} | ${celda(h.criterio)} | ${h.gravedad} | ${h.confianza} | ${h.cita_verificada ? 'sí' : '**no**'} | ${h.revision_humana ? 'sí' : 'no (según el modelo)'} |`));
    resultado.hallazgos.forEach((h, i) => {
      l.push('', `### ${i + 1}. ${h.titulo}`, '');
      l.push(`- Evidencia (\`${h.evidencia.procedencia}\`, cita ${h.cita_verificada ? 'verificada' : '**no encontrada en el bloque: tratar como no fiable**'}): «${h.evidencia.cita}»`);
      l.push(`- Incertidumbre: ${h.incertidumbre || '—'}`);
      l.push(`- Recomendación del modelo: ${h.recomendacion}`);
    });
  }
  l.push('', '**Limitaciones señaladas por el modelo:**');
  for (const x of resultado.limitaciones) l.push(`- ${x}`);
  l.push('', '---', '', 'Siguiente paso: una persona revisa estos hallazgos con la skill `auditar-catalogo-ejercicios` y el protocolo. Ningún cambio del catálogo se aplica sin un plan aprobado (protocolo, principio 1).', '');
  return l.join('\n');
}

// Escribe solo en docs/auditoria-catalogo/ia/, sin sobrescribir, y nunca con la clave dentro.
export function guardarInforme(raiz, { id, fecha, contenido, clave }) {
  if (!/^[a-z0-9-]{1,80}$/.test(id)) throw new Error('id de ejercicio no válido para el nombre del archivo');
  if (clave && contenido.includes(clave)) throw new Error('el informe contiene la clave de la API; no se guarda');
  const sello = fecha.replace(/[-:]/g, '').replace(/\.\d+Z$/, 'Z');
  const carpeta = join(raiz, CARPETA_INFORMES);
  mkdirSync(carpeta, { recursive: true });
  const ruta = join(CARPETA_INFORMES, `${sello}-${id}.md`);
  writeFileSync(join(raiz, ruta), contenido, { flag: 'wx' });
  return ruta;
}
