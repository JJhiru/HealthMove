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
const cabecera = document.getElementById('cabecera');

const estado = {
  catalogo: null,
  nombre: leer('nombre', null),     // null = aún no se ha preguntado; '' = prefiere no decirlo
  perfil: P.cargarPerfil(leer('perfil')),
  resultado: leer('resultado'),     // última generación: { res, semilla, fecha }
  historial: leer('historial', []),
  desarrollo: leer('desarrollo', false),
  zonas: leer('zonas', null),       // secciones elegidas en el triaje, en orden
  volverAResumen: false,
  deshacer: null,                   // { perfil, seccionId, mensaje }
  reproductor: null,
};

const MAX_NOMBRE = 30;

// --- Utilidades ---------------------------------------------------

const escapar = (txt) => String(txt ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const minutos = (seg) => Math.round(seg / 60);
const mmss = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
const ejercicio = (id) => estado.catalogo.ejercicios.find((e) => e.id === id);
const ir = (ruta) => { location.hash = ruta; };
const fecha = (iso, opciones = { day: 'numeric', month: 'long' }) => new Date(iso).toLocaleDateString('es', opciones);

// Texto con el nombre si lo hay; si no, la alternativa sin nombre. El nombre siempre se escapa.
const conNombre = (con, sin) => (estado.nombre ? con(escapar(estado.nombre)) : sin);

function cambiarPerfil(nuevo) {
  estado.perfil = nuevo;
  guardar('perfil', nuevo);
}

// Iconos del sprite local (Bootstrap Icons, MIT). Siempre decorativos: el texto va al lado.
const icono = (nombre, clase = '') => `<svg class="ico ${clase}" aria-hidden="true"><use href="iconos.svg#i-${nombre}"/></svg>`;

// Cabecera: botón "Atrás" con destino explícito (no depende del historial del navegador).
function pintarCabecera(atras) {
  cabecera.innerHTML = `
    ${atras ? `<button type="button" class="atras" data-accion="ir" data-ruta="${atras}">${icono('arrow-left')}Atrás</button>` : ''}
    <a class="marca ${atras ? 'marca-derecha' : ''}" href="#inicio">
      <img src="icon.svg" alt="" width="32" height="32"><span>HealthMove</span>
    </a>`;
}

// ancho: 'normal' (rejillas y portada) o 'lectura' (formularios y textos largos).
// modo: 'concentracion' oculta la navegación (bienvenida y reproductor).
function pintar(html, botones = '', atras = null, { ancho = 'normal', modo = null } = {}) {
  pintarCabecera(atras);
  app.innerHTML = `<div class="hoja ${ancho === 'lectura' ? 'hoja-lectura' : ''}">${html}</div>`;
  acciones.className = `acciones ${ancho === 'lectura' ? 'acciones-lectura' : ''}`;
  acciones.innerHTML = botones.trim() ? `<div class="acciones-dentro">${botones}</div>` : '';
  if (modo) document.body.dataset.modo = modo; else delete document.body.dataset.modo;
}

// Marca en las dos barras de navegación el apartado al que pertenece la pantalla.
const APARTADO = {
  inicio: 'inicio', explorar: 'explorar', ejercicio: 'explorar',
  rutina: 'rutina', reproductor: 'rutina', fin: 'rutina', detenido: 'rutina',
  resumen: 'perfil', 'perfil/posicion': 'perfil', 'perfil/zonas': 'perfil', 'perfil/seccion': 'perfil', 'perfil/recursos': 'perfil',
  historial: 'historial', acerca: 'acerca', nombre: 'acerca',
};
function marcarNavegacion(clave) {
  const actual = APARTADO[clave];
  for (const a of document.querySelectorAll('[data-nav]')) {
    if (a.dataset.nav === actual) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  }
}

// Barra de progreso del perfil: es una secuencia real de 4 pasos.
function pasos(n, detalle = '') {
  return `<div class="pasos" aria-hidden="true">${[1, 2, 3, 4].map((i) => `<span class="${i <= n ? 'hecho' : ''}"></span>`).join('')}</div>
    <p class="paso-texto">Paso ${n} de 4${detalle}</p>`;
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
  const scroll = app.scrollTop;
  fn();
  app.scrollTop = scroll;
  if (id) document.getElementById(id)?.focus({ preventScroll: true });
}

function casilla({ id, nombre, valor, texto, marcada, tipo = 'checkbox', clase = '', datos = '' }) {
  return `<label class="opcion ${clase}" for="${id}">
    <input type="${tipo}" id="${id}" name="${nombre}" value="${escapar(valor)}" ${marcada ? 'checked' : ''} ${datos}>
    <span>${escapar(texto)}</span>
  </label>`;
}

const fila = (ruta, titulo, detalle = '') =>
  `<li><a href="#${ruta}"><span class="fila-titulo">${titulo}</span>${detalle ? `<span class="fila-detalle">${detalle}</span>` : ''}</a></li>`;

// --- Bienvenida y aviso -------------------------------------------

function vistaNombre() {
  const editando = estado.nombre !== null;
  pintar(`
    ${editando ? '' : foto('bici-adaptada-parque', 'Hombre mayor sonriente en una bicicleta adaptada en un parque', { clase: 'bienvenida-foto', prioridad: true })}
    <h1>${editando ? 'Tu nombre' : 'Te damos la bienvenida a HealthMove'}</h1>
    <p>${editando ? 'Lo usamos para dirigirnos a ti dentro de la app.' : 'Te ayudaremos a encontrar rutinas breves de movimiento que encajen con lo que puedes hacer.'}</p>
    <form id="form-nombre" novalidate>
      <label class="etiqueta" for="nombre">¿Cómo quieres que te llamemos?</label>
      <input class="campo-texto" id="nombre" name="nombre" type="text" autocomplete="given-name"
        maxlength="${MAX_NOMBRE}" value="${escapar(estado.nombre || '')}" enterkeyhint="done">
      <p class="suave pequeno">Es opcional. Solo se guarda en este dispositivo.</p>
    </form>
  `, `
    <button type="submit" form="form-nombre" class="primario">${editando ? 'Guardar' : 'Continuar'}</button>
    <button type="button" data-accion="sin-nombre">${editando ? 'Quitar mi nombre' : 'Prefiero no decirlo'}</button>
  `, editando ? 'acerca' : null, { ancho: 'lectura', modo: editando ? null : 'concentracion' });
}

function vistaAviso() {
  pintar(`
    <h1>${conNombre((n) => `${n}, antes de empezar`, 'Antes de empezar')}</h1>
    <p>HealthMove te propone rutinas de 10 a 20 minutos, elegidas con reglas fijas a partir de lo que tú nos cuentes.</p>
    <div class="nota">
      <h2>Lo que HealthMove no hace</h2>
      <ul>
        <li>No diagnostica enfermedades ni lesiones.</li>
        <li>No sustituye a tu médico, fisioterapeuta u otro profesional.</li>
        <li>No decide qué tratamiento necesitas.</li>
        <li>No garantiza que un ejercicio sea seguro para ti: solo comprueba que es compatible con lo que indicas.</li>
      </ul>
    </div>
    <div class="nota">
      <h2>Mejor no la uses si…</h2>
      <ul>
        <li>tienes un dolor nuevo, intenso o que nadie ha valorado;</li>
        <li>te han operado hace poco y no te han autorizado a hacer ejercicio;</li>
        <li>un profesional te ha pedido reposo.</li>
      </ul>
    </div>
    <div class="nota nota-aviso">
      <p><strong>Detén cualquier ejercicio</strong> si notas dolor en el pecho, falta de aire intensa, mareo, o un dolor nuevo o que aumenta. Si es grave, llama al número de emergencias de tu país (911 en Ecuador, 112 en España).</p>
    </div>
    ${casilla({ id: 'acepto', nombre: 'acepto', valor: 'si', texto: 'He leído y entiendo estos límites' })}
  `, `<button type="button" class="primario" data-accion="aceptar-aviso">Aceptar y continuar</button>`,
  estado.nombre === null ? null : 'nombre', { ancho: 'lectura', modo: 'concentracion' });
}

// --- Inicio --------------------------------------------------------

function vistaInicio() {
  const p = estado.perfil;
  const listo = P.validarPerfil(p).length === 0;
  const empezado = p.posicion !== null;
  const ultima = estado.historial.at(-1);
  const semana = estado.historial.filter((h) => h.estado === 'completada' && Date.now() - new Date(h.fecha) < 7 * 864e5).length;

  const linea = listo
    ? `Tu rutina de ${p.duracionMin} minutos está lista para prepararse con lo que nos contaste.`
    : empezado
      ? 'Te falta poco para terminar tu perfil. Retómalo donde lo dejaste.'
      : 'Cuéntanos qué movimientos te cuestan o tienes indicado evitar. Solo verás las preguntas que te afecten.';

  const botones = listo
    ? `<button type="button" class="primario boton-grande" data-accion="generar">${icono('play-fill')}Generar mi rutina</button>
       <a class="boton" href="#resumen">Revisar mi perfil</a>`
    : `<button type="button" class="primario boton-grande" data-accion="ir" data-ruta="perfil/posicion">${empezado ? 'Continuar mi perfil' : 'Empezar mi perfil'}</button>`;

  pintar(`
    <section class="portada" aria-labelledby="saludo">
      ${foto('portada-clase-sillas', 'Grupo de personas mayores haciendo ejercicio sentadas en sillas, con los brazos en alto', { clase: 'portada-foto', ancho: '(min-width: 62rem) 40vw, 100vw', prioridad: true })}
      <div class="portada-texto">
        <h1 class="saludo" id="saludo">${conNombre((n) => `Hola, ${n}`, 'Hola')}</h1>
        <p class="saludo-linea">${linea}</p>
        <div class="portada-botones">${botones}</div>
        ${ultima ? `<p class="portada-historial">${icono('clock-history')}<a href="#historial">${semana ? `${semana} ${semana === 1 ? 'rutina' : 'rutinas'} esta semana` : `Última rutina el ${fecha(ultima.fecha)}`}</a></p>` : ''}
      </div>
    </section>

    ${empezado ? `<section aria-labelledby="t-perfil">
      <div class="seccion-cabecera"><h2 id="t-perfil">Tu perfil hoy</h2><a href="#resumen">Cambiar</a></div>
      <ul class="pildoras">${pildorasPerfil(p)}</ul>
    </section>` : ''}

    <section aria-labelledby="t-posicion">
      <div class="seccion-cabecera"><h2 id="t-posicion">Explora por posición</h2><a href="#explorar">Ver todo</a></div>
      <ul class="mosaico">
        ${azulejo('explorar/sentado', 'En la silla', contarVisibles((e) => e.posiciones.includes('sentado')), 'silla-brazos-abiertos', 'Mujer sentada en una clase de ejercicio con los brazos abiertos')}
        ${azulejo('explorar/de_pie', 'De pie', contarVisibles((e) => e.posiciones.includes('de_pie')), 'de-pie-estiramiento-acompanado', 'Hombre mayor estirando los brazos de pie, acompañado por un profesional')}
        ${azulejo('explorar/tumbado', 'En la cama', contarVisibles((e) => e.posiciones.includes('tumbado')), 'cama-estiramiento', 'Mujer sentada en la cama estirando los brazos por la mañana')}
        ${azulejo('explorar/calma', 'Calma y respiración', contarVisibles((e) => e.fases.includes('calma')), 'calma-te', 'Mujer mayor sentada y relajada con una taza')}
      </ul>
    </section>

    <section class="editorial" aria-labelledby="t-como">
      ${foto('silla-ruedas-jardin', 'Mujer sonriente en silla de ruedas junto a un jardín', { clase: 'editorial-foto', ancho: '(min-width: 62rem) 30vw, 100vw' })}
      <div>
        <h2 id="t-como">Cómo elegimos tus ejercicios</h2>
        <ul class="puntos">
          <li>${icono('shield-check')}<span><strong>Reglas fijas.</strong> Dejamos fuera todo lo que nos dices que te cuesta o debes evitar, sin excepciones.</span></li>
          <li>${icono('journal-text')}<span><strong>Fuentes sanitarias.</strong> Las instrucciones salen de materiales de hospitales y organismos públicos, y citamos cada fuente.</span></li>
          <li>${icono('info-circle-fill')}<span><strong>No es una prescripción.</strong> Tu profesional sanitario tiene siempre la última palabra.</span></li>
        </ul>
        <a href="#acerca">Límites y fuentes</a>
      </div>
    </section>
  `);
}

// Solo se cuentan los ejercicios que la persona puede ver: los revisados, o todos en modo desarrollo.
const visible = (e) => estado.desarrollo || e.validacion.estado !== 'borrador';
const contarVisibles = (filtro) => estado.catalogo.ejercicios.filter((e) => visible(e) && filtro(e)).length;

const POSICION_CORTA = { de_pie_libre: 'De pie sin apoyo', de_pie_apoyo: 'De pie con apoyo', solo_sentado: 'Solo sentado/a' };

function pildorasPerfil(p) {
  const evitar = [...new Set(SECCIONES.flatMap((s) => p.secciones[s.id].opciones
    .flatMap((o) => s.opciones.find((x) => x.id === o)?.excluyeExigencias || [])))];
  const items = [];
  if (p.posicion) items.push(POSICION_CORTA[p.posicion]);
  for (const x of evitar.slice(0, 3)) items.push(`Sin ${ETIQUETA_EXIGENCIA[x]}`);
  if (evitar.length > 3) items.push(`y ${evitar.length - 3} más`);
  if (p.duracionMin) items.push(`${p.duracionMin} min`);
  if (p.recursos.length) items.push(`${p.recursos.length} ${p.recursos.length === 1 ? 'material' : 'materiales'} a mano`);
  return items.map((t) => `<li class="pildora">${escapar(t)}</li>`).join('');
}

function azulejo(ruta, titulo, n, imagen, alt) {
  return `<li><a class="azulejo" href="#${ruta}">
    ${foto(imagen, alt, { ancho: '(min-width: 62rem) 18vw, 50vw', rotulo: false })}
    <span class="azulejo-texto"><span class="azulejo-titulo">${titulo}</span><span class="azulejo-detalle">${n ? `${n} ejercicios` : 'En revisión'}</span></span>
  </a></li>`;
}

// Fotos reales de ambiente (créditos en CREDITOS.md). Nunca muestran cómo se hace un ejercicio:
// para eso están las ilustraciones. Por eso llevan el rótulo «Foto ilustrativa».
function foto(nombre, alt, { clase = '', ancho = '100vw', prioridad = false, rotulo = true } = {}) {
  return `<figure class="foto ${clase}">
    <img src="fotos/${nombre}-640.webp" srcset="fotos/${nombre}-640.webp 640w, fotos/${nombre}-1280.webp 1280w"
      sizes="${ancho}" alt="${escapar(alt)}" ${prioridad ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
    ${rotulo ? '<figcaption class="foto-rotulo">Foto ilustrativa</figcaption>' : ''}
  </figure>`;
}

// --- Perfil ---------------------------------------------------------

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
    ${pasos(1)}
    <h1>${conNombre((n) => `${n}, ¿cómo puedes hacer ejercicio?`, '¿Cómo puedes hacer ejercicio?')}</h1>
    <fieldset>
      <legend>Elige la opción que mejor te describe</legend>
      ${POSICION.map((o) => casilla({ id: `pos-${o.id}`, nombre: 'posicion', valor: o.id, texto: o.texto, tipo: 'radio', marcada: p.posicion === o.id, datos: 'data-cambio="posicion"' })).join('')}
    </fieldset>
    ${preguntas}
  `, `<button type="button" class="primario" data-accion="tras-posicion">${estado.volverAResumen ? 'Volver al resumen' : 'Siguiente'}</button>`,
  estado.volverAResumen ? 'resumen' : 'inicio', { ancho: 'lectura' });
}

function vistaZonas() {
  const elegidas = estado.zonas || [];
  pintar(`
    ${pasos(2)}
    <h1>¿Dónde tienes alguna dificultad o indicación?</h1>
    <p class="suave">Marca todas las que correspondan. Solo te preguntaremos por esas.</p>
    <fieldset>
      <legend class="suave pequeno">Puedes marcar varias</legend>
      ${SECCIONES.map((s) => casilla({ id: `zona-${s.id}`, nombre: 'zonas', valor: s.id, texto: s.titulo, marcada: elegidas.includes(s.id), datos: 'data-cambio="zona"' })).join('')}
      ${casilla({ id: 'zona-ninguna', nombre: 'zonas', valor: 'ninguna', texto: 'Ninguna', clase: 'opcion-ninguna', marcada: estado.zonas?.length === 0, datos: 'data-cambio="zona"' })}
    </fieldset>
  `, `<button type="button" class="primario" data-accion="tras-zonas">Siguiente</button>`, 'perfil/posicion', { ancho: 'lectura' });
}

function anteriorSeccion(id) {
  if (estado.volverAResumen) return 'resumen';
  const zonas = estado.zonas || [];
  const i = zonas.indexOf(id);
  return i > 0 ? `perfil/seccion/${zonas[i - 1]}` : 'perfil/zonas';
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
    ? `<p class="nota" role="status">${escapar(estado.deshacer.mensaje)} <button type="button" class="enlace" data-accion="deshacer">Deshacer</button></p>` : '';
  const bloquea = sec.opciones.some((o) => s.opciones.find((x) => x.id === o)?.bloquea)
    ? `<div class="nota nota-aviso" role="alert"><p><strong>No podremos generar una rutina.</strong> HealthMove no puede respetar una indicación que no sabe representar. Pregunta a tu profesional sanitario qué ejercicios puedes hacer.</p></div>` : '';
  pintar(`
    ${pasos(3, n >= 0 && zonas.length > 1 ? `, sección ${n + 1} de ${zonas.length}` : '')}
    <h1>${escapar(s.titulo)}</h1>
    <p class="suave">${s.aviso ? escapar(s.aviso) : 'Marca todo lo que te ocurra.'}</p>
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
  `, anteriorSeccion(id), { ancho: 'lectura' });
}

function vistaRecursos() {
  const p = estado.perfil;
  const zonas = estado.zonas || [];
  pintar(`
    ${pasos(4)}
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
  `, `<button type="button" class="primario" data-accion="ir" data-ruta="resumen">Ver resumen</button>`,
  estado.volverAResumen ? 'resumen' : zonas.length ? `perfil/seccion/${zonas.at(-1)}` : 'perfil/zonas', { ancho: 'lectura' });
}

function textoEstado(id) {
  const e = P.estadoSeccion(estado.perfil, id);
  const s = seccionPorId(id);
  if (e === 'con_selecciones') return estado.perfil.secciones[id].opciones.map((o) => escapar(s.opciones.find((x) => x.id === o).texto)).join('. ');
  if (e === 'sin_dificultades') return 'Sin dificultades';
  if (e === 'cubierta_por_declaracion') return 'No la revisaste; confirmaste que no tienes más';
  return '<span class="estado-falta">Sin revisar</span>';
}

function vistaResumen() {
  estado.volverAResumen = true;
  const p = estado.perfil;
  const problemas = P.validarPerfil(p);
  const hayNoRevisadas = SECCIONES.some((s) => p.secciones[s.id].estado === 'no_revisada');
  const pos = POSICION.find((o) => o.id === p.posicion);
  const sn = (v) => (v === true ? 'sí' : v === false ? 'no' : '<span class="estado-falta">sin responder</span>');
  const detallePos = pos
    ? `${escapar(pos.texto)}${P.necesitaPreguntasPosicion(p) ? `. Tumbarte en la cama: ${sn(p.cama)}. Bajar al suelo: ${sn(p.suelo)}.` : ''}`
    : '<span class="estado-falta">Sin responder</span>';
  const recursos = p.recursos.length ? p.recursos.map((r) => escapar(RECURSOS.find((x) => x.id === r).texto)).join('. ') : 'Nada en especial';
  pintar(`
    <h1>${conNombre((n) => `Esto es lo que sabemos, ${n}`, 'Resumen de tu perfil')}</h1>
    <p class="suave">Toca cualquier apartado para cambiarlo.</p>
    <ul class="filas">
      ${fila('perfil/posicion', 'Posición', detallePos)}
      ${SECCIONES.map((s) => fila(`perfil/seccion/${s.id}`, escapar(s.titulo), textoEstado(s.id))).join('')}
      ${fila('perfil/recursos', 'Recursos y tiempo', `${recursos}. ${p.duracionMin ? `${p.duracionMin} minutos.` : '<span class="estado-falta">Sin duración</span>'}`)}
    </ul>
    ${hayNoRevisadas ? `<div class="nota">
      <p>Hay apartados que no has revisado.</p>
      ${casilla({ id: 'declaracion', nombre: 'declaracion', valor: 'si', texto: 'Confirmo que no tengo restricciones ni dificultades además de las indicadas', marcada: p.declaracionGlobal, datos: 'data-cambio="declaracion"' })}
    </div>` : ''}
    ${problemas.length ? `<div class="nota nota-aviso" id="problemas" tabindex="-1"><p><strong>Para generar tu rutina falta:</strong></p>
      <ul>${problemas.map((x) => `<li>${escapar(x.mensaje)}</li>`).join('')}</ul></div>` : ''}
  `, `<button type="button" class="primario" data-accion="generar">Generar mi rutina</button>`, 'inicio', { ancho: 'lectura' });
}

// --- Rutina ---------------------------------------------------------

function explicacionHtml(explicacion) {
  const items = explicacion.items;
  if (!items.length) return '<p>Ningún ejercicio del catálogo se descartó por tus respuestas.</p>';
  const linea = (i) => {
    if (i.tipo === 'exigencia') return `exigen <strong>${escapar(ETIQUETA_EXIGENCIA[i.codigo])}</strong>, porque indicaste «${escapar(i.motivos.join('», «'))}»`;
    if (i.tipo === 'posicion') return `se hacen <strong>${escapar(ETIQUETA_POSICION[i.codigo])}</strong>, por tu respuesta sobre la posición`;
    return `necesitan <strong>${escapar(RECURSOS.find((r) => r.id === i.codigo)?.texto.toLowerCase() || i.codigo)}</strong>, que no marcaste`;
  };
  return `<p>Dejamos fuera los ejercicios que…</p><ul>${items.map((i) => `<li>${linea(i)} (${i.excluidos}).</li>`).join('')}</ul>`;
}

function vistaRutina() {
  const r = estado.resultado;
  if (!estado.catalogo) return ir('inicio');
  if (!r) return vistaRutinaVacia();
  const { res } = r;
  if (!res.ok) return vistaSinRutina(res);
  let n = 0;
  const fases = ['calentamiento', 'principal', 'calma'].map((f) => {
    const bloques = res.rutina.bloques.filter((b) => b.fase === f);
    const seg = bloques.reduce((t, b) => t + ejercicio(b.ejercicioId).duracion_estimada_seg, 0);
    return `<h2 class="fase-titulo">${ETIQUETA_FASE[f]} <span>unos ${Math.max(1, minutos(seg))} min</span></h2>
      <ol class="rutina" start="${n + 1}">${bloques.map((b) => {
        n++;
        const e = ejercicio(b.ejercicioId);
        return `<li>${escapar(e.nombre)}${b.ronda > 1 ? ' (segunda vuelta)' : ''}<span class="meta">${escapar(e.dosis)}</span></li>`;
      }).join('')}</ol>`;
  }).join('');
  pintar(`
    <h1>${conNombre((n) => `${n}, esta es tu rutina`, 'Tu rutina')}</h1>
    <p class="suave">Unos ${minutos(res.rutina.duracionEstimadaSeg)} minutos con pausas breves. Es compatible con lo que nos contaste, pero no es una prescripción.</p>
    ${res.rutina.usaBorrador ? '<div class="nota nota-aviso"><p><strong>Incluye ejercicios sin revisar.</strong> Solo para desarrollo.</p></div>' : ''}
    ${fases}
    <details class="nota">
      <summary>Por qué estos ejercicios</summary>
      ${explicacionHtml(res.explicacion)}
    </details>
    <div class="nota nota-aviso"><p><strong>Para</strong> si notas dolor en el pecho, falta de aire intensa, mareo, o un dolor nuevo o que aumenta.</p></div>
  `, `
    <button type="button" class="primario" data-accion="empezar">Empezar</button>
    <button type="button" data-accion="otra">Otra combinación</button>
  `, 'inicio');
}

function vistaRutinaVacia() {
  const listo = P.validarPerfil(estado.perfil).length === 0;
  pintar(`
    <h1>Mi rutina</h1>
    <div class="vacio">
      ${icono('list-check')}
      <p><strong>Todavía no has generado ninguna rutina.</strong></p>
      <p class="suave">${listo ? 'Prepararemos una con ejercicios compatibles con tu perfil.' : 'Primero termina tu perfil para que sepamos qué evitar.'}</p>
    </div>
  `, listo
    ? '<button type="button" class="primario" data-accion="generar">Generar mi rutina</button>'
    : '<button type="button" class="primario" data-accion="ir" data-ruta="perfil/posicion">Completar mi perfil</button>', null, { ancho: 'lectura' });
}

// Provisional: el catálogo visual llega en el paso 4 del rediseño.
function vistaExplorar() {
  pintar(`
    <h1>Explorar</h1>
    <div class="vacio">${icono('compass')}<p><strong>El catálogo visual está en construcción.</strong></p></div>
  `);
}

function vistaSinRutina(res) {
  if (res.motivo === 'perfil_incompleto') return ir('resumen');
  const lim = (res.limitantes || []).map((l) => {
    if (l.tipo === 'exigencia') return `<li>Evitar <strong>${escapar(ETIQUETA_EXIGENCIA[l.codigo])}</strong> (indicaste «${escapar(l.motivos.join('», «'))}»). Sin esa restricción habría ${l.ejerciciosExtra} ejercicios más.</li>`;
    if (l.tipo === 'posicion') return `<li>No hacer ejercicios <strong>${escapar(ETIQUETA_POSICION[l.codigo])}</strong> deja fuera ${l.ejerciciosExtra}.</li>`;
    return `<li>No tener <strong>${escapar(RECURSOS.find((r) => r.id === l.codigo)?.texto.toLowerCase())}</strong> deja fuera ${l.ejerciciosExtra}.</li>`;
  }).join('');
  pintar(`
    <h1>${conNombre((n) => `${n}, hoy no podemos prepararte una rutina adecuada`, 'Hoy no podemos prepararte una rutina adecuada')}</h1>
    <p>${res.motivo === 'duracion_insuficiente'
      ? `Con tus respuestas solo hay ejercicios para unos ${minutos(res.duracionPosibleSeg)} minutos. Prueba con una duración más corta.`
      : 'El catálogo todavía no tiene suficientes ejercicios compatibles con lo que nos contaste.'}</p>
    <p>No vamos a saltarnos ninguna de tus restricciones para conseguirlo.</p>
    ${lim ? `<h2>Lo que más limita</h2><ul>${lim}</ul><p class="suave">Es solo información: cambia tus respuestas únicamente si no eran correctas.</p>` : ''}
    ${!estado.desarrollo && res.explicacion?.sinRevisar ? `<p class="suave">Hay ${res.explicacion.sinRevisar} ejercicios pendientes de revisión que todavía no se usan.</p>` : ''}
  `, `
    <button type="button" class="primario" data-accion="ir" data-ruta="resumen">Revisar mi perfil</button>
    <button type="button" data-accion="ir" data-ruta="inicio">Volver al inicio</button>
  `, 'inicio', { ancho: 'lectura' });
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
      <div class="pasos" aria-hidden="true">${bloques.map((_, k) => `<span class="${k <= rep.i ? 'hecho' : ''}"></span>`).join('')}</div>
      <p class="fase">${ETIQUETA_FASE[b.fase]}. Ejercicio ${rep.i + 1} de ${bloques.length}${b.ronda > 1 ? ', segunda vuelta' : ''}.</p>
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
  `, 'rutina', { ancho: 'lectura', modo: 'concentracion' });
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
      document.getElementById('anuncio').textContent = 'Tiempo cumplido. Pasa al siguiente cuando quieras.';
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
  const completadas = estado.historial.filter((h) => h.estado === 'completada').length;
  pintar(`
    <h1 class="saludo">${conNombre((n) => `Bien hecho, ${n}`, 'Bien hecho')}</h1>
    <p class="saludo-linea">${completadas === 1 ? 'Has completado tu primera rutina.' : `Ya llevas ${completadas} rutinas completadas.`} La hemos guardado en tu historial, solo en este dispositivo.</p>
    <p class="suave">Si después notas un dolor nuevo o que aumenta, coméntalo con tu profesional sanitario.</p>
  `, `
    <button type="button" class="primario" data-accion="ir" data-ruta="inicio">Volver al inicio</button>
    <button type="button" data-accion="ir" data-ruta="historial">Ver historial</button>
  `, null, { ancho: 'lectura' });
}

function vistaDetenido() {
  pintar(`
    <h1>${conNombre((n) => `${n}, has detenido la rutina`, 'Has detenido la rutina')}</h1>
    <div class="nota nota-aviso">
      <p><strong>Si notas dolor en el pecho, falta de aire intensa, mareo fuerte o un dolor nuevo e intenso</strong>, busca atención médica ya: llama al número de emergencias de tu país (911 en Ecuador, 112 en España).</p>
    </div>
    <p>Si la molestia fue leve, descansa. Antes de volver a intentarlo, coméntalo con tu profesional sanitario, sobre todo si se repite.</p>
  `, `<button type="button" class="primario" data-accion="ir" data-ruta="inicio">Volver al inicio</button>`, null, { ancho: 'lectura' });
}

// --- Historial y ajustes ------------------------------------------

function vistaHistorial() {
  const h = [...estado.historial].reverse();
  pintar(`
    <h1>${conNombre((n) => `Tu historial, ${n}`, 'Historial')}</h1>
    ${h.length ? `<ul class="filas">${h.map((x) => `<li><span class="fila-estatica">
      <span class="fila-titulo">${fecha(x.fecha, { weekday: 'long', day: 'numeric', month: 'long' })}, ${new Date(x.fecha).toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' })}</span>
      <span class="fila-detalle">${x.estado === 'completada' ? 'Completada' : 'Detenida'}. ${x.duracionMin} minutos, ${x.ejercicios} ejercicios.</span></span></li>`).join('')}</ul>`
      : '<p>Todavía no has hecho ninguna rutina. Cuando termines una, aparecerá aquí.</p>'}
  `, `<button type="button" data-accion="ir" data-ruta="inicio">Volver al inicio</button>`, 'inicio', { ancho: 'lectura' });
}

function vistaAcerca() {
  const fuentes = new Map();
  for (const e of estado.catalogo?.ejercicios || []) fuentes.set(e.fuente.url, e.fuente);
  const total = estado.catalogo?.ejercicios.length ?? 0;
  const revisados = (estado.catalogo?.ejercicios || []).filter((e) => e.validacion.estado !== 'borrador').length;
  pintar(`
    <h1>Ajustes, límites y fuentes</h1>
    <ul class="filas">
      ${fila('nombre', 'Tu nombre', estado.nombre ? escapar(estado.nombre) : 'Sin nombre')}
      ${fila('resumen', 'Tu perfil de movilidad')}
    </ul>
    <h2>Cómo elegimos los ejercicios</h2>
    <p>Cada ejercicio del catálogo indica qué movimientos exige. Dejamos fuera todos los que piden algo que nos dijiste que te cuesta o que debes evitar, y nunca relajamos ese filtro.</p>
    <p>Las instrucciones se basan en materiales públicos de organismos sanitarios y no las ha validado un profesional para tu caso. Hay ${revisados} de ${total} ejercicios revisados contra su fuente.</p>
    <h2>Tus datos</h2>
    <p>Tu nombre, tu perfil y tu historial se guardan solo en este navegador. No se envían a ningún servidor. Si borras los datos del navegador, se pierden.</p>
    <h2>Fuentes</h2>
    <ul>${[...fuentes.values()].map((f) => `<li><a href="${escapar(f.url)}" rel="noopener">${escapar(f.titulo)}</a>, ${escapar(f.organizacion)}</li>`).join('')}</ul>
  `, `<button type="button" class="peligro" data-accion="borrar-datos">Borrar mis datos</button>`, 'inicio', { ancho: 'lectura' });
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

  // Primera vez: nombre (opcional) y después el aviso. "Límites y fuentes" se puede leer antes.
  if (estado.nombre === null && ruta !== 'acerca') { vistaNombre(); return enfocarTitulo(); }
  if (!estado.perfil.avisoAceptado && !['acerca', 'nombre'].includes(ruta)) { vistaAviso(); return enfocarTitulo(); }

  const vistas = {
    inicio: vistaInicio,
    nombre: vistaNombre,
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
    explorar: () => vistaExplorar(arg),
  };
  const clave = vistas[ruta] ? ruta : vistas[`${ruta}/${arg}`] ? `${ruta}/${arg}` : 'inicio';
  if (clave === 'inicio') estado.volverAResumen = false;
  vistas[clave]();
  marcarNavegacion(clave);
  enfocarTitulo();
}

function generar() {
  const problemas = P.validarPerfil(estado.perfil);
  if (problemas.length) {
    if (location.hash !== '#resumen') return ir('resumen');
    return document.getElementById('problemas')?.focus();
  }
  const semilla = Date.now() % 2147483647;
  const res = generarRutina(estado.catalogo, estado.perfil, { semilla, permitirBorrador: estado.desarrollo });
  estado.resultado = { res, semilla, fecha: new Date().toISOString() };
  guardar('resultado', estado.resultado);
  if (location.hash === '#rutina') router(); else ir('rutina');
}

function guardarNombre(valor) {
  estado.nombre = valor.trim().replace(/\s+/g, ' ').slice(0, MAX_NOMBRE);
  guardar('nombre', estado.nombre);
}

// --- Eventos ------------------------------------------------------

app.addEventListener('submit', (ev) => {
  if (ev.target.id !== 'form-nombre') return;
  ev.preventDefault();
  const primeraVez = estado.nombre === null;
  guardarNombre(document.getElementById('nombre').value);
  if (primeraVez) router(); else ir('acerca');
});

// El botón "Guardar/Continuar" está fuera del <form> (en la barra inferior): lo enlaza form="form-nombre".
acciones.addEventListener('click', (ev) => {
  const b = ev.target.closest('button[type="submit"][form="form-nombre"]');
  if (b) { ev.preventDefault(); document.getElementById('form-nombre')?.requestSubmit(); }
});

document.addEventListener('click', (ev) => {
  const el = ev.target.closest('[data-accion]');
  if (!el) return;
  const rep = estado.reproductor;
  switch (el.dataset.accion) {
    case 'ir':
      if (location.hash === `#${el.dataset.ruta}`) router(); else ir(el.dataset.ruta);
      break;
    case 'sin-nombre': {
      const primeraVez = estado.nombre === null;
      guardarNombre('');
      if (primeraVez) router(); else ir('acerca');
      break;
    }
    case 'aceptar-aviso':
      if (!document.getElementById('acepto')?.checked) { document.getElementById('acepto')?.focus(); return; }
      cambiarPerfil(P.aceptarAviso(estado.perfil));
      if (location.hash === '#inicio') router(); else ir('inicio');
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
    case 'generar':
    case 'otra':
      generar(); break;
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
      if (confirm('¿Borrar tu nombre, tu perfil y tu historial de este dispositivo? No se puede deshacer.')) {
        borrarTodo();
        Object.assign(estado, { nombre: null, perfil: P.perfilVacio(), resultado: null, historial: [], zonas: null, desarrollo: false, volverAResumen: false });
        actualizarFranjaDesarrollo();
        if (location.hash === '#inicio') router(); else ir('inicio');
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
        estado.deshacer = antes ? { perfil: p, seccionId: id, mensaje: `Desmarcamos ${antes === 1 ? '1 opción' : `${antes} opciones`} de esta sección.` } : null;
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

// Aviso de versión nueva: solo si ya había un service worker controlando la página.
if ('serviceWorker' in navigator) {
  let habia = Boolean(navigator.serviceWorker.controller);
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (habia) document.getElementById('aviso-version').hidden = false;
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
    pintar(`<h1>No pudimos cargar los ejercicios</h1><p>Comprueba tu conexión y vuelve a abrir la app. (${escapar(e.message)})</p>`,
      '<button type="button" class="primario" data-accion="recargar">Reintentar</button>');
    return;
  }
  window.addEventListener('hashchange', router);
  router();
}

arrancar();
