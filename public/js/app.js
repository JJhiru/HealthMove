// ============================================================
//  HealthMove — interfaz.
//  Pantallas por hash (#inicio, #perfil/…, #resumen, #rutina…).
//  La lógica vive en perfil.js y motor.js; aquí solo se pinta
//  y se reacciona a lo que hace la persona.
// ============================================================
import {
  POSICION, PREGUNTAS_POSICION, SECCIONES, RECURSOS, DURACIONES,
  ETIQUETA_EXIGENCIA, ETIQUETA_POSICION, ETIQUETA_FASE, seccionPorId,
} from './opciones.js';
import * as P from './perfil.js';
import { generarRutina } from './motor.js';
import { leer, guardar, borrarTodo } from './almacen.js';

const app = document.getElementById('app');
const acciones = document.getElementById('acciones');

const estado = {
  catalogo: null,
  perfil: P.cargarPerfil(leer('perfil')),
  resultado: leer('resultado'),     // última generación: { res, semilla, fecha }
  historial: leer('historial', []),
  desarrollo: leer('desarrollo', false),
  zonas: leer('zonas', null),       // secciones elegidas en el triaje, en orden
  volverAResumen: false,
  deshacer: null,                   // { perfil, seccionId, mensaje }
  reproductor: null,
};

// --- Utilidades ---------------------------------------------------

const escapar = (txt) => String(txt ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const minutos = (seg) => Math.round(seg / 60);
const mmss = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
const ejercicio = (id) => estado.catalogo.ejercicios.find((e) => e.id === id);
const ir = (ruta) => { location.hash = ruta; };

function cambiarPerfil(nuevo) {
  estado.perfil = nuevo;
  guardar('perfil', nuevo);
}

function pintar(html, botones = '') {
  app.innerHTML = html;
  acciones.innerHTML = botones;
}

// Tras cambiar de pantalla, el foco va al título para que los lectores de pantalla lo anuncien.
function enfocarTitulo() {
  const h1 = app.querySelector('h1');
  if (h1) { h1.tabIndex = -1; h1.focus({ preventScroll: true }); }
  app.scrollTop = 0;
}

// Al repintar la misma pantalla (marcar una casilla), el foco vuelve al mismo control.
function repintarConservandoFoco(fn) {
  const id = document.activeElement?.id;
  fn();
  if (id) document.getElementById(id)?.focus({ preventScroll: true });
}

function casilla({ id, nombre, valor, texto, marcada, tipo = 'checkbox', clase = '', datos = '' }) {
  return `<label class="opcion ${clase}" for="${id}">
    <input type="${tipo}" id="${id}" name="${nombre}" value="${escapar(valor)}" ${marcada ? 'checked' : ''} ${datos}>
    <span>${escapar(texto)}</span>
  </label>`;
}

// --- Pantallas ----------------------------------------------------

function vistaAviso() {
  pintar(`
    <h1>Antes de empezar</h1>
    <p>HealthMove te propone rutinas breves de movimiento, de 10 a 20 minutos, elegidas con reglas fijas a partir de lo que tú indiques.</p>
    <div class="caja">
      <h2>Lo que HealthMove no hace</h2>
      <ul>
        <li>No diagnostica enfermedades ni lesiones.</li>
        <li>No sustituye a tu médico, fisioterapeuta u otro profesional.</li>
        <li>No decide qué tratamiento necesitas.</li>
        <li>No garantiza que un ejercicio sea seguro para ti: solo comprueba que es compatible con lo que indicaste.</li>
      </ul>
    </div>
    <div class="caja">
      <h2>No la uses si…</h2>
      <ul>
        <li>tienes un dolor nuevo, intenso o que no te han valorado;</li>
        <li>te han operado recientemente y no te han autorizado a hacer ejercicio;</li>
        <li>un profesional te ha pedido reposo.</li>
      </ul>
    </div>
    <div class="caja caja-aviso">
      <p><strong>Detén cualquier ejercicio</strong> si notas dolor en el pecho, falta de aire intensa, mareo, un dolor nuevo o que aumenta. Si es grave, llama al número de emergencias de tu país (911 en Ecuador, 112 en España).</p>
    </div>
    <p class="suave">Tus respuestas se guardan solo en este dispositivo.</p>
    ${casilla({ id: 'acepto', nombre: 'acepto', valor: 'si', texto: 'He leído y entiendo estos límites' })}
  `, `<button type="button" class="primario" data-accion="aceptar-aviso">Aceptar y continuar</button>`);
}

function vistaInicio() {
  if (!estado.perfil.avisoAceptado) return vistaAviso();
  const problemas = P.validarPerfil(estado.perfil);
  const empezado = estado.perfil.posicion !== null;
  const ultima = estado.historial.at(-1);
  pintar(`
    <h1>Hola</h1>
    ${problemas.length === 0
      ? `<p>Tu perfil está completo. Puedes generar una rutina de ${estado.perfil.duracionMin} minutos.</p>`
      : `<p>${empezado ? 'Tu perfil está a medias.' : 'Primero, cuéntanos qué movimientos te cuestan o tienes indicado evitar.'} Solo pasarás por las secciones que te afecten.</p>`}
    ${ultima ? `<p class="suave">Última rutina: ${new Date(ultima.fecha).toLocaleDateString('es')} · ${ultima.estado === 'completada' ? 'completada' : 'detenida'}.</p>` : ''}
    <ul class="lista-estado">
      <li><a href="#resumen">Revisar mi perfil</a></li>
      <li><a href="#historial">Historial</a></li>
      <li><a href="#acerca">Límites, fuentes y datos</a></li>
    </ul>
  `, problemas.length === 0
    ? `<button type="button" class="primario" data-accion="generar">Generar rutina</button>`
    : `<button type="button" class="primario" data-accion="ir" data-ruta="perfil/posicion">${empezado ? 'Continuar mi perfil' : 'Empezar mi perfil'}</button>`);
}

function vistaPosicion() {
  const p = estado.perfil;
  const preguntas = P.necesitaPreguntasPosicion(p) ? PREGUNTAS_POSICION.map((q) => `
    <fieldset>
      <legend>${escapar(q.texto)}</legend>
      <div class="si-no">
        ${casilla({ id: `${q.id}-si`, nombre: q.id, valor: 'si', texto: 'Sí', tipo: 'radio', marcada: p[q.id] === true, datos: `data-cambio="pregunta" data-pregunta="${q.id}"` })}
        ${casilla({ id: `${q.id}-no`, nombre: q.id, valor: 'no', texto: 'No', tipo: 'radio', marcada: p[q.id] === false, datos: `data-cambio="pregunta" data-pregunta="${q.id}"` })}
      </div>
    </fieldset>`).join('') : '';
  pintar(`
    <p class="progreso-pasos">Paso 1 de 4</p>
    <h1>¿Cómo puedes hacer ejercicio?</h1>
    <fieldset>
      <legend>Elige la opción que mejor te describe</legend>
      ${POSICION.map((o) => casilla({ id: `pos-${o.id}`, nombre: 'posicion', valor: o.id, texto: o.texto, tipo: 'radio', marcada: p.posicion === o.id, datos: 'data-cambio="posicion"' })).join('')}
    </fieldset>
    ${preguntas}
  `, `<button type="button" class="primario" data-accion="tras-posicion">Siguiente</button>`);
}

function vistaZonas() {
  const elegidas = estado.zonas || [];
  pintar(`
    <p class="progreso-pasos">Paso 2 de 4</p>
    <h1>¿Dónde tienes alguna dificultad o indicación?</h1>
    <p class="suave">Marca todas las que correspondan. Solo verás esas secciones.</p>
    <fieldset>
      <legend>Zonas y aspectos</legend>
      ${SECCIONES.map((s) => casilla({ id: `zona-${s.id}`, nombre: 'zonas', valor: s.id, texto: s.titulo, marcada: elegidas.includes(s.id), datos: 'data-cambio="zona"' })).join('')}
      ${casilla({ id: 'zona-ninguna', nombre: 'zonas', valor: 'ninguna', texto: 'Ninguna', clase: 'opcion-ninguna', marcada: estado.zonas?.length === 0, datos: 'data-cambio="zona"' })}
    </fieldset>
  `, `<button type="button" class="primario" data-accion="tras-zonas">Siguiente</button>`);
}

function vistaSeccion(id) {
  const s = seccionPorId(id);
  if (!s) return ir('resumen');
  const sec = estado.perfil.secciones[id];
  const zonas = estado.zonas || [];
  const n = zonas.indexOf(id);
  let grupo = null;
  const opciones = s.opciones.map((o) => {
    const titulo = o.grupo && o.grupo !== grupo ? `<p class="grupo-titulo">${escapar(o.grupo)}</p>` : '';
    grupo = o.grupo;
    return titulo + casilla({ id: `op-${o.id}`, nombre: 'opciones', valor: o.id, texto: o.texto, marcada: sec.opciones.includes(o.id), datos: `data-cambio="opcion" data-seccion="${id}"` });
  }).join('');
  const deshacer = estado.deshacer?.seccionId === id
    ? `<p class="caja" role="status">${escapar(estado.deshacer.mensaje)} <button type="button" class="enlace" data-accion="deshacer">Deshacer</button></p>` : '';
  const bloquea = sec.opciones.some((o) => s.opciones.find((x) => x.id === o)?.bloquea)
    ? `<div class="caja caja-aviso" role="alert"><p><strong>HealthMove no podrá generar una rutina.</strong> No puede respetar una indicación que no sabe representar. Consulta con tu profesional sanitario qué ejercicios puedes hacer.</p></div>` : '';
  pintar(`
    <p class="progreso-pasos">Paso 3 de 4${n >= 0 ? ` · sección ${n + 1} de ${zonas.length}` : ''}</p>
    <h1>${escapar(s.titulo)}</h1>
    ${s.aviso ? `<p>${escapar(s.aviso)}</p>` : '<p class="suave">Marca todo lo que te ocurra.</p>'}
    <fieldset>
      <legend class="suave pequeno">Puedes marcar varias</legend>
      ${opciones}
    </fieldset>
    ${casilla({ id: `ninguna-${id}`, nombre: 'ninguna', valor: 'si', texto: 'No tengo dificultades en esta sección', clase: 'opcion-ninguna', marcada: sec.estado === 'sin_dificultades', datos: `data-cambio="sin-dificultades" data-seccion="${id}"` })}
    ${deshacer}
    ${bloquea}
  `, `
    <button type="button" class="primario" data-accion="tras-seccion" data-seccion="${id}">${estado.volverAResumen ? 'Volver al resumen' : 'Siguiente'}</button>
    ${estado.volverAResumen ? '' : '<button type="button" data-accion="ir" data-ruta="perfil/recursos">No tengo más restricciones</button>'}
  `);
}

function vistaRecursos() {
  const p = estado.perfil;
  pintar(`
    <p class="progreso-pasos">Paso 4 de 4</p>
    <h1>¿Qué tienes a mano?</h1>
    <fieldset>
      <legend>Marca lo que tengas disponible ahora</legend>
      ${RECURSOS.map((r) => casilla({ id: `rec-${r.id}`, nombre: 'recursos', valor: r.id, texto: r.texto, marcada: p.recursos.includes(r.id), datos: 'data-cambio="recurso"' })).join('')}
    </fieldset>
    <fieldset>
      <legend>¿Cuánto tiempo tienes?</legend>
      <div class="si-no">
        ${DURACIONES.map((m) => casilla({ id: `dur-${m}`, nombre: 'duracion', valor: m, texto: `${m} min`, tipo: 'radio', marcada: p.duracionMin === m, datos: 'data-cambio="duracion"' })).join('')}
      </div>
    </fieldset>
  `, `<button type="button" class="primario" data-accion="ir" data-ruta="resumen">Ver resumen</button>`);
}

function textoEstado(id) {
  const e = P.estadoSeccion(estado.perfil, id);
  const s = seccionPorId(id);
  if (e === 'con_selecciones') return estado.perfil.secciones[id].opciones.map((o) => s.opciones.find((x) => x.id === o).texto).join('; ');
  if (e === 'sin_dificultades') return 'Sin dificultades';
  if (e === 'cubierta_por_declaracion') return 'No revisada: confirmaste que no tienes más';
  return '<span class="estado-falta">Sin responder</span>';
}

function vistaResumen() {
  estado.volverAResumen = true;
  const p = estado.perfil;
  const problemas = P.validarPerfil(p);
  const hayNoRevisadas = SECCIONES.some((s) => p.secciones[s.id].estado === 'no_revisada');
  const pos = POSICION.find((o) => o.id === p.posicion);
  const sn = (v) => (v === true ? 'sí' : v === false ? 'no' : '<span class="estado-falta">sin responder</span>');
  pintar(`
    <h1>Resumen de tu perfil</h1>
    <ul class="lista-estado">
      <li><span><strong>Posición</strong><br><span class="estado">${pos ? escapar(pos.texto) : '<span class="estado-falta">Sin responder</span>'}
        ${P.necesitaPreguntasPosicion(p) ? `<br>Tumbarte en la cama: ${sn(p.cama)} · Bajar al suelo: ${sn(p.suelo)}` : ''}</span></span>
        <a href="#perfil/posicion">Editar</a></li>
      ${SECCIONES.map((s) => `<li><span><strong>${escapar(s.titulo)}</strong><br><span class="estado">${textoEstado(s.id)}</span></span>
        <a href="#perfil/seccion/${s.id}">Editar</a></li>`).join('')}
      <li><span><strong>Recursos y tiempo</strong><br><span class="estado">${p.recursos.length ? p.recursos.map((r) => escapar(RECURSOS.find((x) => x.id === r).texto)).join('; ') : 'Ninguno'} · ${p.duracionMin ? `${p.duracionMin} min` : '<span class="estado-falta">sin duración</span>'}</span></span>
        <a href="#perfil/recursos">Editar</a></li>
    </ul>
    ${hayNoRevisadas ? `<div class="caja">
      <p>Hay secciones que no has revisado.</p>
      ${casilla({ id: 'declaracion', nombre: 'declaracion', valor: 'si', texto: 'Confirmo que no tengo restricciones ni dificultades además de las indicadas', marcada: p.declaracionGlobal, datos: 'data-cambio="declaracion"' })}
    </div>` : ''}
    ${problemas.length ? `<div class="caja caja-aviso" id="problemas" tabindex="-1"><p><strong>Para generar una rutina falta:</strong></p>
      <ul>${problemas.map((x) => `<li>${escapar(x.mensaje)}</li>`).join('')}</ul></div>` : ''}
  `, `<button type="button" class="primario" data-accion="generar">Generar rutina</button>`);
}

function explicacionHtml(explicacion) {
  const items = explicacion.items.filter((i) => i.tipo !== 'recurso' || i.excluidos > 0);
  if (!items.length) return '<p>Ningún ejercicio del catálogo se descartó por tus respuestas.</p>';
  const linea = (i) => {
    if (i.tipo === 'exigencia') return `exigen <strong>${escapar(ETIQUETA_EXIGENCIA[i.codigo])}</strong>, porque indicaste «${escapar(i.motivos.join('», «'))}»`;
    if (i.tipo === 'posicion') return `se hacen <strong>${escapar(ETIQUETA_POSICION[i.codigo])}</strong>, según tu respuesta sobre la posición`;
    return `necesitan <strong>${escapar(RECURSOS.find((r) => r.id === i.codigo)?.texto.toLowerCase() || i.codigo)}</strong>, que no marcaste`;
  };
  return `<p>Se descartaron los ejercicios que…</p><ul>${items.map((i) => `<li>${linea(i)} (${i.excluidos}).</li>`).join('')}</ul>`;
}

function vistaRutina() {
  const r = estado.resultado;
  if (!r || !estado.catalogo) return ir('inicio');
  const { res } = r;
  if (!res.ok) return vistaSinRutina(res);
  const fases = ['calentamiento', 'principal', 'calma'];
  let n = 0;
  pintar(`
    <h1>Tu rutina de ${res.rutina.duracionObjetivoMin} minutos</h1>
    <p class="suave">Unos ${minutos(res.rutina.duracionEstimadaSeg)} minutos, contando pausas breves. Compatible con lo que indicaste; no es una prescripción.</p>
    ${res.rutina.usaBorrador ? '<div class="caja caja-aviso"><p><strong>Contiene ejercicios sin revisar.</strong> Solo para desarrollo.</p></div>' : ''}
    ${fases.map((f) => {
      const bloques = res.rutina.bloques.filter((b) => b.fase === f);
      return `<h2>${ETIQUETA_FASE[f]}</h2><ol class="rutina" start="${n + 1}">${bloques.map((b) => {
        n++;
        const e = ejercicio(b.ejercicioId);
        return `<li>${escapar(e.nombre)}${b.ronda > 1 ? ' (segunda vuelta)' : ''}<span class="meta">${escapar(e.dosis)}</span></li>`;
      }).join('')}</ol>`;
    }).join('')}
    <details class="caja">
      <summary><strong>Por qué estos ejercicios</strong></summary>
      ${explicacionHtml(res.explicacion)}
    </details>
    <div class="caja caja-aviso"><p><strong>Detente</strong> si notas dolor en el pecho, falta de aire intensa, mareo o un dolor nuevo o que aumenta.</p></div>
  `, `
    <button type="button" class="primario" data-accion="empezar">Empezar</button>
    <button type="button" data-accion="otra">Otra combinación</button>
  `);
}

function vistaSinRutina(res) {
  if (res.motivo === 'perfil_incompleto') return ir('resumen');
  const lim = (res.limitantes || []).map((l) => {
    if (l.tipo === 'exigencia') return `<li>Evitar <strong>${escapar(ETIQUETA_EXIGENCIA[l.codigo])}</strong> (indicaste «${escapar(l.motivos.join('», «'))}»): sin esta restricción habría ${l.ejerciciosExtra} ejercicios más.</li>`;
    if (l.tipo === 'posicion') return `<li>No hacer ejercicios <strong>${escapar(ETIQUETA_POSICION[l.codigo])}</strong>: descarta ${l.ejerciciosExtra}.</li>`;
    return `<li>No tener <strong>${escapar(RECURSOS.find((r) => r.id === l.codigo)?.texto.toLowerCase())}</strong>: descarta ${l.ejerciciosExtra}.</li>`;
  }).join('');
  pintar(`
    <h1>No podemos generar una rutina adecuada</h1>
    <p>${res.motivo === 'duracion_insuficiente'
      ? `Con tus respuestas solo hay ejercicios para unos ${minutos(res.duracionPosibleSeg)} minutos. Prueba con una duración más corta.`
      : 'El catálogo actual no tiene suficientes ejercicios compatibles con lo que indicaste.'}</p>
    <p>HealthMove no va a ignorar ninguna de tus restricciones para conseguirlo.</p>
    ${lim ? `<h2>Lo que más limita</h2><ul>${lim}</ul><p class="suave">Es solo información: cambia tus respuestas únicamente si no eran correctas.</p>` : ''}
    ${estado.desarrollo ? '' : `<p class="suave">${res.explicacion?.sinRevisar ? `Hay ${res.explicacion.sinRevisar} ejercicios todavía sin revisar que no se usan.` : ''}</p>`}
  `, `
    <button type="button" class="primario" data-accion="ir" data-ruta="resumen">Revisar mi perfil</button>
    <button type="button" data-accion="ir" data-ruta="inicio">Volver al inicio</button>
  `);
}

// --- Reproductor --------------------------------------------------

function vistaReproductor() {
  const r = estado.resultado?.res;
  if (!r?.ok || !estado.catalogo) return ir('inicio');
  if (!estado.reproductor) estado.reproductor = { i: 0, restante: null, pausado: false, temporizador: null, bloqueo: null };
  const rep = estado.reproductor;
  const bloques = r.rutina.bloques;
  const b = bloques[rep.i];
  const e = ejercicio(b.ejercicioId);
  if (rep.restante === null) rep.restante = e.duracion_estimada_seg;
  const ultimo = rep.i === bloques.length - 1;

  pintar(`
    <section class="reproductor" aria-labelledby="titulo-ej">
      <p class="fase">${ETIQUETA_FASE[b.fase]} · ejercicio ${rep.i + 1} de ${bloques.length}${b.ronda > 1 ? ' · segunda vuelta' : ''}</p>
      <h1 id="titulo-ej">${escapar(e.nombre)}</h1>
      <div class="tiempo">
        <span class="tiempo-cifra" id="cifra" aria-hidden="true">${mmss(rep.restante)}</span>
        <span class="suave"> tiempo orientativo</span>
        <div class="barra" aria-hidden="true"><span id="barra" style="width:${100 - (rep.restante / e.duracion_estimada_seg) * 100}%"></span></div>
      </div>
      <p id="anuncio" class="suave" aria-live="polite"></p>
      <div class="si-no">
        <button type="button" data-accion="anterior" ${rep.i === 0 ? 'disabled' : ''}>Anterior</button>
        <button type="button" data-accion="pausa">${rep.pausado ? 'Reanudar' : 'Pausar'}</button>
        ${'speechSynthesis' in window ? '<button type="button" data-accion="leer">Leer en voz alta</button>' : ''}
      </div>
      <p class="dosis">${escapar(e.dosis)}</p>
      <ol>${e.instrucciones.map((t) => `<li>${escapar(t)}</li>`).join('')}</ol>
    </section>
  `, `
    <button type="button" class="peligro parar" data-accion="detener">Detener: tengo molestias</button>
    <button type="button" class="primario" data-accion="siguiente">${ultimo ? 'Terminar' : 'Siguiente'}</button>
  `);
  arrancarTemporizador(e);
  mantenerPantalla(true);
}

function arrancarTemporizador(e) {
  const rep = estado.reproductor;
  clearInterval(rep.temporizador);
  if (rep.pausado) return;
  rep.temporizador = setInterval(() => {
    if (rep.restante <= 0) return;
    rep.restante--;
    const cifra = document.getElementById('cifra');
    const barra = document.getElementById('barra');
    if (cifra) cifra.textContent = mmss(rep.restante);
    if (barra) barra.style.width = `${100 - (rep.restante / e.duracion_estimada_seg) * 100}%`;
    if (rep.restante === 0) {
      document.getElementById('anuncio').textContent = 'Tiempo cumplido. Pasa al siguiente cuando estés listo/a.';
      try { navigator.vibrate?.(200); } catch { /* sin vibración */ }
    }
  }, 1000);
}

async function mantenerPantalla(activar) {
  const rep = estado.reproductor;
  try {
    if (activar && !rep?.bloqueo && 'wakeLock' in navigator) rep.bloqueo = await navigator.wakeLock.request('screen');
    if (!activar && rep?.bloqueo) { await rep.bloqueo.release(); rep.bloqueo = null; }
  } catch { /* sin bloqueo de pantalla */ }
}

function pararReproductor() {
  if (!estado.reproductor) return;
  clearInterval(estado.reproductor.temporizador);
  mantenerPantalla(false);
  try { speechSynthesis.cancel(); } catch { /* nada */ }
  estado.reproductor = null;
}

function registrar(estadoRutina) {
  const r = estado.resultado.res.rutina;
  estado.historial = [...estado.historial, {
    fecha: new Date().toISOString(), duracionMin: r.duracionObjetivoMin, ejercicios: r.bloques.length,
    estado: estadoRutina, catalogo: estado.catalogo.version,
  }].slice(-100);
  guardar('historial', estado.historial);
}

function vistaFin() {
  pintar(`
    <h1>Rutina terminada</h1>
    <p>Bien hecho. Se ha guardado en tu historial, solo en este dispositivo.</p>
    <p class="suave">Si después notas un dolor nuevo o que aumenta, coméntalo con tu profesional sanitario.</p>
  `, `
    <button type="button" class="primario" data-accion="ir" data-ruta="inicio">Volver al inicio</button>
    <button type="button" data-accion="ir" data-ruta="historial">Ver historial</button>
  `);
}

function vistaDetenido() {
  pintar(`
    <h1>Has detenido la rutina</h1>
    <div class="caja caja-aviso">
      <p><strong>Si notas dolor en el pecho, falta de aire intensa, mareo fuerte o un dolor nuevo e intenso</strong>, busca atención médica ya: llama al número de emergencias de tu país (911 en Ecuador, 112 en España).</p>
    </div>
    <p>Si la molestia fue leve, descansa. Antes de volver a intentarlo, coméntalo con tu profesional sanitario, sobre todo si se repite.</p>
  `, `<button type="button" class="primario" data-accion="ir" data-ruta="inicio">Volver al inicio</button>`);
}

// --- Historial y ajustes ------------------------------------------

function vistaHistorial() {
  const h = [...estado.historial].reverse();
  pintar(`
    <h1>Historial</h1>
    ${h.length ? `<ul class="lista-estado">${h.map((x) => `<li><span>${new Date(x.fecha).toLocaleString('es', { dateStyle: 'medium', timeStyle: 'short' })}<br>
      <span class="estado">${x.duracionMin} min · ${x.ejercicios} ejercicios</span></span>
      <span class="estado">${x.estado === 'completada' ? 'Completada' : 'Detenida'}</span></li>`).join('')}</ul>`
      : '<p>Todavía no has hecho ninguna rutina. Cuando termines una, aparecerá aquí.</p>'}
  `, `<button type="button" data-accion="ir" data-ruta="inicio">Volver al inicio</button>`);
}

function vistaAcerca() {
  const fuentes = new Map();
  for (const e of estado.catalogo?.ejercicios || []) fuentes.set(e.fuente.url, e.fuente);
  const revisados = (estado.catalogo?.ejercicios || []).filter((e) => e.validacion.estado !== 'borrador').length;
  pintar(`
    <h1>Límites, fuentes y datos</h1>
    <h2>Cómo elige los ejercicios</h2>
    <p>Cada ejercicio del catálogo indica qué movimientos exige. HealthMove descarta todos los que exigen algo que indicaste que te cuesta o que debes evitar, y nunca relaja ese filtro.</p>
    <p>Las instrucciones están redactadas a partir de materiales públicos de organismos sanitarios y no han sido validadas por un profesional para tu caso. ${revisados} de ${estado.catalogo?.ejercicios.length ?? 0} ejercicios están revisados contra su fuente.</p>
    <h2>Fuentes</h2>
    <ul>${[...fuentes.values()].map((f) => `<li><a href="${escapar(f.url)}" rel="noopener">${escapar(f.titulo)}</a> · ${escapar(f.organizacion)}</li>`).join('')}</ul>
    <h2>Tus datos</h2>
    <p>Tu perfil y tu historial se guardan solo en este navegador. No se envían a ningún servidor. Si borras los datos del navegador, se pierden.</p>
  `, `
    <button type="button" class="peligro" data-accion="borrar-datos">Borrar mis datos</button>
    <button type="button" data-accion="ir" data-ruta="inicio">Volver al inicio</button>
  `);
}

// --- Navegación ---------------------------------------------------

function siguienteSeccion(actual) {
  const zonas = estado.zonas || [];
  const i = zonas.indexOf(actual);
  return i >= 0 && i < zonas.length - 1 ? `perfil/seccion/${zonas[i + 1]}` : 'perfil/recursos';
}

function router() {
  if (!(location.hash.slice(1) || '').startsWith('reproductor')) pararReproductor();
  const [ruta, arg] = (location.hash.slice(1) || 'inicio').split(/\/(?=[^/]+$)/);
  if (!estado.perfil.avisoAceptado && ruta !== 'acerca') { vistaAviso(); return enfocarTitulo(); }
  const vistas = {
    inicio: vistaInicio,
    'perfil/posicion': vistaPosicion,
    'perfil/zonas': vistaZonas,
    'perfil/seccion': () => vistaSeccion(arg),
    'perfil/recursos': vistaRecursos,
    resumen: vistaResumen,
    rutina: vistaRutina,
    reproductor: vistaReproductor,
    fin: vistaFin,
    detenido: vistaDetenido,
    historial: vistaHistorial,
    acerca: vistaAcerca,
  };
  const clave = vistas[ruta] ? ruta : vistas[`${ruta}/${arg}`] ? `${ruta}/${arg}` : 'inicio';
  vistas[clave]();
  enfocarTitulo();
}

function generar(nuevaSemilla = true) {
  const problemas = P.validarPerfil(estado.perfil);
  if (problemas.length) {
    if (location.hash !== '#resumen') return ir('resumen');
    return document.getElementById('problemas')?.focus();
  }
  const semilla = nuevaSemilla ? (Date.now() % 2147483647) : estado.resultado?.semilla ?? 1;
  const res = generarRutina(estado.catalogo, estado.perfil, { semilla, permitirBorrador: estado.desarrollo });
  estado.resultado = { res, semilla, fecha: new Date().toISOString() };
  guardar('resultado', estado.resultado);
  if (location.hash === '#rutina') router(); else ir('rutina');
}

// --- Eventos ------------------------------------------------------

document.addEventListener('click', (ev) => {
  const el = ev.target.closest('[data-accion]');
  if (!el) return;
  const rep = estado.reproductor;
  switch (el.dataset.accion) {
    case 'ir': ir(el.dataset.ruta); break;
    case 'aceptar-aviso':
      if (!document.getElementById('acepto')?.checked) {
        document.getElementById('acepto')?.focus();
        return;
      }
      cambiarPerfil(P.aceptarAviso(estado.perfil));
      ir('inicio'); router();
      break;
    case 'tras-posicion': {
      const p = estado.perfil;
      if (!p.posicion || (P.necesitaPreguntasPosicion(p) && (p.cama === null || p.suelo === null))) {
        app.querySelector('input:not(:checked)')?.focus();
        return;
      }
      ir(estado.volverAResumen ? 'resumen' : 'perfil/zonas');
      break;
    }
    case 'tras-zonas':
      if (estado.zonas === null) { document.getElementById('zona-movilidad')?.focus(); return; }
      ir(estado.zonas.length ? `perfil/seccion/${estado.zonas[0]}` : 'perfil/recursos');
      break;
    case 'tras-seccion': {
      const id = el.dataset.seccion;
      if (estado.perfil.secciones[id].estado === 'no_revisada') {
        // Una sección visitada necesita respuesta explícita: alguna opción o "sin dificultades".
        document.getElementById(`ninguna-${id}`)?.focus();
        return;
      }
      estado.deshacer = null;
      ir(estado.volverAResumen ? 'resumen' : siguienteSeccion(id));
      break;
    }
    case 'deshacer':
      if (estado.deshacer) { cambiarPerfil(estado.deshacer.perfil); estado.deshacer = null; repintarConservandoFoco(router); }
      break;
    case 'generar': generar(true); break;
    case 'otra': generar(true); break;
    case 'empezar': estado.reproductor = null; ir('reproductor'); break;
    case 'anterior': if (rep && rep.i > 0) { rep.i--; rep.restante = null; vistaReproductor(); enfocarTitulo(); } break;
    case 'siguiente': {
      if (!rep) return;
      if (rep.i >= estado.resultado.res.rutina.bloques.length - 1) { registrar('completada'); pararReproductor(); ir('fin'); return; }
      rep.i++; rep.restante = null; vistaReproductor(); enfocarTitulo();
      break;
    }
    case 'pausa': if (rep) { rep.pausado = !rep.pausado; repintarConservandoFoco(vistaReproductor); } break;
    case 'leer': {
      const e = ejercicio(estado.resultado.res.rutina.bloques[rep.i].ejercicioId);
      try {
        speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(`${e.nombre}. ${e.instrucciones.join(' ')} ${e.dosis}`);
        u.lang = 'es-ES';
        speechSynthesis.speak(u);
      } catch { /* sin síntesis de voz */ }
      break;
    }
    case 'detener': registrar('detenida'); pararReproductor(); ir('detenido'); break;
    case 'borrar-datos':
      if (confirm('¿Borrar tu perfil y tu historial de este dispositivo? No se puede deshacer.')) {
        borrarTodo();
        Object.assign(estado, { perfil: P.perfilVacio(), resultado: null, historial: [], zonas: null, desarrollo: false });
        actualizarFranjaDesarrollo();
        ir('inicio'); router();
      }
      break;
    case 'salir-desarrollo':
      estado.desarrollo = false; guardar('desarrollo', false); actualizarFranjaDesarrollo(); router();
      break;
    case 'recargar': location.reload(); break;
  }
});

app.addEventListener('change', (ev) => {
  const el = ev.target;
  const p = estado.perfil;
  switch (el.dataset.cambio) {
    case 'posicion': cambiarPerfil(P.elegirPosicion(p, el.value)); repintarConservandoFoco(vistaPosicion); break;
    case 'pregunta': cambiarPerfil(P.responderPregunta(p, el.dataset.pregunta, el.value === 'si')); break;
    case 'zona': {
      let zonas = estado.zonas || [];
      if (el.value === 'ninguna') zonas = el.checked ? [] : null;
      else {
        zonas = el.checked ? [...zonas, el.value] : zonas.filter((z) => z !== el.value);
        zonas = SECCIONES.map((s) => s.id).filter((id) => zonas.includes(id)); // orden de la especificación
      }
      estado.zonas = zonas;
      guardar('zonas', zonas);
      repintarConservandoFoco(vistaZonas);
      break;
    }
    case 'opcion': cambiarPerfil(P.alternarOpcion(p, el.dataset.seccion, el.value)); estado.deshacer = null; repintarConservandoFoco(() => vistaSeccion(el.dataset.seccion)); break;
    case 'sin-dificultades': {
      const id = el.dataset.seccion;
      if (el.checked) {
        const antes = p.secciones[id].opciones.length;
        estado.deshacer = antes ? { perfil: p, seccionId: id, mensaje: `Se desmarcaron ${antes === 1 ? '1 opción' : `${antes} opciones`} de esta sección.` } : null;
        cambiarPerfil(P.marcarSinDificultades(p, id));
      } else {
        cambiarPerfil({ ...p, secciones: { ...p.secciones, [id]: { estado: 'no_revisada', opciones: [] } }, declaracionGlobal: false });
      }
      repintarConservandoFoco(() => vistaSeccion(id));
      break;
    }
    case 'recurso': cambiarPerfil(P.alternarRecurso(p, el.value)); break;
    case 'duracion': cambiarPerfil(P.elegirDuracion(p, Number(el.value))); break;
    case 'declaracion':
      cambiarPerfil(el.checked ? P.confirmarDeclaracionGlobal(p) : { ...p, declaracionGlobal: false });
      repintarConservandoFoco(vistaResumen);
      break;
  }
});

// --- Arranque -----------------------------------------------------

function actualizarFranjaDesarrollo() {
  document.getElementById('aviso-desarrollo').hidden = !estado.desarrollo;
}

// Aviso de versión nueva: solo si el controlador cambia a otro distinto del que había.
if ('serviceWorker' in navigator) {
  const inicial = navigator.serviceWorker.controller?.scriptURL;
  let habia = Boolean(navigator.serviceWorker.controller);
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (habia || inicial) document.getElementById('aviso-version').hidden = false;
    habia = true;
  });
  navigator.serviceWorker.addEventListener('message', (ev) => {
    if (ev.data === 'contenido-actualizado') document.getElementById('aviso-version').hidden = false;
  });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') navigator.serviceWorker.getRegistration().then((r) => r?.update()).catch(() => {});
  });
}

async function arrancar() {
  const params = new URLSearchParams(location.search);
  if (params.has('desarrollo')) { estado.desarrollo = params.get('desarrollo') !== '0'; guardar('desarrollo', estado.desarrollo); }
  actualizarFranjaDesarrollo();
  try {
    const r = await fetch('data/catalogo.json');
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    estado.catalogo = await r.json();
  } catch (e) {
    pintar(`<h1>No se pudo cargar el catálogo</h1><p>Comprueba tu conexión y vuelve a abrir la app. (${escapar(e.message)})</p>`,
      '<button type="button" class="primario" data-accion="recargar">Reintentar</button>');
    return;
  }
  window.addEventListener('hashchange', router);
  router();
}

arrancar();
