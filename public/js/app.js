// CS50 AI citation: written with the help of Claude (Anthropic), an AI assistant. Requirements, design decisions and review: JJhiru.
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
import { generarRutina, calcularRestricciones, motivosIncompatibilidad, comprobarRutina } from './motor.js';
import { validarCatalogo, estadoUtilizable } from './validacion.js';
import { dibujar } from './figura.js';
import { leer, leerTexto, guardar, borrarTodo } from './almacen.js';

const app = document.getElementById('app');
const acciones = document.getElementById('acciones');
const cabecera = document.getElementById('cabecera');

// Perfil guardado. Si no se puede cargar, su texto original exacto se copia en `hm_perfil_original`
// ANTES de que nada pueda sobrescribirlo. Si la copia falla, el perfil no se volverá a guardar
// (`protegido`) para no destruir el original. Aquí no se repara ni se reinterpreta ningún dato.
function cargarPerfilGuardado() {
  const texto = leerTexto('perfil');
  const { perfil, problema } = P.diagnosticarPerfil(texto);
  if (!problema) return { perfil, problema: null, protegido: false };
  let copias = [];
  const textoCopias = leerTexto('perfil_original');
  if (textoCopias !== null) {
    try { copias = JSON.parse(textoCopias); } catch { copias = null; }
    // Si las copias anteriores no se pueden leer, no se tocan: tampoco se sobrescribe el perfil.
    if (!Array.isArray(copias)) return { perfil, problema, protegido: true };
  }
  const nuevas = P.anadirCopiaPerfil(copias, texto, problema, new Date().toISOString());
  const copiado = nuevas === copias || guardar('perfil_original', nuevas);
  return { perfil, problema, protegido: !copiado };
}
const cargaPerfil = cargarPerfilGuardado();

const estado = {
  catalogo: null,
  ilustraciones: {},
  filtros: { posicion: 'todo', fase: 'todo', compatibles: true, cuantos: 24 },
  nombre: leer('nombre', null),     // null = aún no se ha preguntado; '' = prefiere no decirlo
  perfil: cargaPerfil.perfil,
  perfilNoCargado: cargaPerfil.problema, // null, o por qué no se pudo cargar el perfil guardado
  perfilProtegido: cargaPerfil.protegido, // true: no se guarda el perfil para no perder el original
  resultado: leer('resultado'),     // última generación: { res, semilla, fecha }
  historial: leer('historial', []),
  desarrollo: leer('desarrollo', false) === true,
  zonas: leer('zonas', null),       // secciones elegidas en el triaje, en orden
  volverAResumen: false,
  deshacer: null,                   // { perfil, seccionId, mensaje }
  reproductor: null,
  invalidos: new Set(),             // ids de ejercicios con datos inválidos: nunca se muestran ni se usan
  empezarConfirmado: false,         // la persona pulsó «Empezar» después de ver la rutina (y su aviso, si lo había)
};

const MAX_NOMBRE = 30;
// Aclaración bajo «Material pensado para: …» (registro de la auditoría, 2026-10-18, P2; Q8(b)).
const PROCEDENCIA = 'Este material se escribió para ese grupo de personas, pero no es exclusivo de él ni adecuado para todas las que lo forman. Puedes hacerlo aunque no formes parte de ese grupo si es compatible con las restricciones que has indicado en tu perfil; lo ves al principio de esta página. Que sea compatible no garantiza que sea seguro para ti.';

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
  if (!estado.perfilProtegido) guardar('perfil', nuevo);
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

// Aviso cuando el perfil guardado no se pudo cargar. Se muestra durante la sesión en la que se detectó.
function notaPerfilNoCargado() {
  if (!estado.perfilNoCargado) return '';
  const porque = { ilegible: 'sus datos están dañados', version: 'es de otra versión de HealthMove', estructura: 'algunos de sus datos no son válidos' }[estado.perfilNoCargado];
  const copia = estado.perfilProtegido
    ? 'No hemos podido guardar una copia de esos datos, así que, para no perderlos, no guardaremos en este dispositivo los cambios que hagas en tu perfil.'
    : 'Hemos guardado una copia exacta de esos datos en este dispositivo y no la borraremos.';
  return `<div class="nota nota-aviso" role="status"><p><strong>No hemos podido cargar el perfil que tenías guardado</strong>, porque ${porque}. ${copia} Para preparar rutinas tendrás que completar tu perfil de nuevo.</p></div>`;
}

function vistaAviso() {
  pintar(`
    <h1>${conNombre((n) => `${n}, antes de empezar`, 'Antes de empezar')}</h1>
    ${notaPerfilNoCargado()}
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
    ${notaPerfilNoCargado()}
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

    ${filaParaHoy()}

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

// Ejercicios compatibles para curiosear desde el inicio (cambian cada día, no en cada visita).
function filaParaHoy() {
  const restr = restriccionesPerfil();
  const dia = Math.floor(Date.now() / 864e5);
  const lista = estado.catalogo.ejercicios
    .filter((e) => visible(e) && incompatibilidades(e, restr).length === 0)
    .map((e, i) => [((i + 1) * 2654435761 + dia * 97) % 1000, e]).sort((a, b) => a[0] - b[0]).slice(0, 8).map(([, e]) => e);
  if (!lista.length) return '';
  return `<section aria-labelledby="t-hoy">
    <div class="seccion-cabecera"><h2 id="t-hoy">${restr ? 'Compatibles contigo' : 'Para empezar'}</h2><a href="#explorar">Ver todo</a></div>
    <ul class="riel">${lista.map(tarjetaEjercicio).join('')}</ul>
  </section>`;
}

// Solo se cuentan los ejercicios que la persona puede ver: los revisados, o también los borradores en modo desarrollo.
// Un ejercicio con datos inválidos no se ve nunca, ni siquiera en modo desarrollo.
const visible = (e) => !estado.invalidos.has(e.id) && estadoUtilizable(e, { permitirBorrador: estado.desarrollo });
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

// Dibujos de las tres posiciones del perfil (sin movimiento: solo la postura y el apoyo).
const FIGURA_POSICION = {
  de_pie_libre: { base: 'pie' },
  de_pie_apoyo: { base: 'pie', apoyos: ['silla-delante'], ini: { alcanza: { manoD: 'respaldo', manoI: 'respaldo' } } },
  solo_sentado: { base: 'silla', apoyos: ['silla'] },
};

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
      <div class="opciones-dibujo">${POSICION.map((o) => `<label class="opcion opcion-dibujo" for="pos-${o.id}">
        <span class="ilus" aria-hidden="true">${dibujar(FIGURA_POSICION[o.id])}</span>
        <span class="opcion-dibujo-texto"><input type="radio" id="pos-${o.id}" name="posicion" value="${o.id}" ${p.posicion === o.id ? 'checked' : ''} data-cambio="posicion"><span>${escapar(o.texto)}</span></span>
      </label>`).join('')}</div>
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
    ${notaPerfilNoCargado()}
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
  // Un intento de generar que no dio rutina se explica como siempre.
  if (r.res?.ok === false) return vistaSinRutina(r.res);
  // Antes de mostrar los ejercicios, se comprueba cada bloque con el perfil y el catálogo actuales.
  // Una rutina guardada mal formada, con borradores fuera del modo desarrollo o incompatible queda bloqueada, sin borrarla.
  const comprobacion = comprobarRutina(r, estado.catalogo, estado.perfil, { permitirBorrador: estado.desarrollo });
  if (comprobacion.estado === 'bloqueada') return vistaRutinaBloqueada(comprobacion);
  const { res } = r;
  let n = 0;
  // Línea de tiempo: el orden y las fases se leen de un vistazo.
  const fases = ['calentamiento', 'principal', 'calma'].map((f) => {
    const bloques = res.rutina.bloques.filter((b) => b.fase === f);
    if (!bloques.length) return '';
    const seg = bloques.reduce((t, b) => t + ejercicio(b.ejercicioId).duracion_estimada_seg, 0);
    return `<li class="fase">
      <h2 class="fase-titulo">${ETIQUETA_FASE[f]} <span>unos ${Math.max(1, minutos(seg))} min</span></h2>
      <ol class="rutina-pasos">${bloques.map((b) => {
        n++;
        const e = ejercicio(b.ejercicioId);
        return `<li><a class="paso-rutina" href="#ejercicio/${e.id}">
          <span class="paso-num" aria-hidden="true">${n}</span>
          ${ilustracion(e, 'ilus-mini')}
          <span class="paso-texto"><span class="paso-nombre">${escapar(e.nombre)}${b.ronda > 1 ? ' <span class="suave">(segunda vuelta)</span>' : ''}</span>
          <span class="paso-meta">${escapar(e.dosis)}</span></span>
          <span class="paso-tiempo">${mmss(e.duracion_estimada_seg)}</span>
        </a></li>`;
      }).join('')}</ol>
    </li>`;
  }).join('');
  pintar(`
    <h1>${conNombre((n) => `${n}, esta es tu rutina`, 'Tu rutina')}</h1>
    <ul class="pildoras rutina-resumen">
      <li class="pildora">${icono('clock')}Unos ${minutos(res.rutina.duracionEstimadaSeg)} min</li>
      <li class="pildora">${res.rutina.bloques.length} ejercicios</li>
      <li class="pildora">Pausas breves entre ellos</li>
    </ul>
    <p class="suave">Es compatible con lo que nos contaste, pero no es una prescripción.</p>
    ${comprobacion.aviso === 'sin_huella' ? '<div class="nota nota-aviso" role="status"><p><strong>No sabemos con qué perfil se preparó esta rutina.</strong> Hemos vuelto a comprobar cada ejercicio con tu perfil actual y todos son compatibles con lo que nos contaste. Si lo prefieres, genera otra.</p></div>' : ''}
    ${comprobacion.aviso === 'cambio' ? '<div class="nota nota-aviso" role="status"><p><strong>Tu perfil o el catálogo han cambiado desde que se preparó esta rutina.</strong> Hemos vuelto a comprobar cada ejercicio y todos siguen siendo compatibles con tu perfil actual. Si lo prefieres, genera otra.</p></div>' : ''}
    ${res.rutina.usaBorrador ? '<div class="nota nota-aviso"><p><strong>Incluye ejercicios sin revisar.</strong> Solo para desarrollo.</p></div>' : ''}
    <ol class="linea-tiempo">${fases}</ol>
    <details class="nota">
      <summary>Por qué estos ejercicios</summary>
      ${explicacionHtml(res.explicacion)}
    </details>
    <div class="nota nota-aviso"><p><strong>Para</strong> si notas dolor en el pecho, falta de aire intensa, mareo, o un dolor nuevo o que aumenta.</p></div>
  `, `
    <button type="button" class="primario" data-accion="empezar">${icono('play-fill')}Empezar</button>
    <button type="button" data-accion="otra">${icono('arrow-repeat')}Otra combinación</button>
  `, 'inicio', { ancho: 'lectura' });
}

// Rutina guardada que ya no se puede usar. No se arregla sola: se explica por qué y se ofrece generar otra.
function vistaRutinaBloqueada(comprobacion) {
  const nombre = (id) => (typeof id === 'string' && ejercicio(id)?.nombre) || 'Un ejercicio que ya no está en el catálogo';
  const linea = (m) => {
    if (m.tipo === 'no_existe') return `${escapar(nombre(m.ejercicioId))}.`;
    if (m.tipo === 'invalido') return `${escapar(nombre(m.ejercicioId))}: sus datos no son válidos.`;
    if (m.tipo === 'incompatible') return `${escapar(nombre(m.ejercicioId))}: ${escapar(m.motivos.map(textoMotivo).join('; '))}.`;
    if (m.tipo === 'fase') return `${escapar(nombre(m.ejercicioId))}: no corresponde a esa parte de la rutina.`;
    if (m.tipo === 'perfil_incompleto') return 'Tu perfil tiene datos pendientes o no válidos.';
    if (m.tipo === 'catalogo_invalido') return 'El catálogo de ejercicios no es válido.';
    return 'La rutina guardada no tiene un formato válido.';
  };
  const perfil = comprobacion.motivos.some((m) => m.tipo === 'perfil_incompleto');
  const conBorradores = comprobacion.motivos.some((m) => m.tipo === 'incompatible' && m.motivos.some((x) => x.tipo === 'sin_revisar'));
  pintar(`
    <h1>Esta rutina ya no se puede usar</h1>
    <div class="nota nota-aviso"><p><strong>Hemos vuelto a comprobar la rutina guardada y no coincide con tu perfil o con el catálogo actuales.</strong> No la cambiamos ni la borramos por nuestra cuenta: puedes generar otra.${conBorradores ? ' Se preparó en modo desarrollo con ejercicios que todavía no se han revisado contra su fuente.' : ''}</p>
      <ul>${comprobacion.motivos.map((m) => `<li>${linea(m)}</li>`).join('')}</ul></div>
  `, perfil
    ? '<button type="button" class="primario" data-accion="ir" data-ruta="resumen">Revisar mi perfil</button>'
    : `<button type="button" class="primario" data-accion="otra">${icono('arrow-repeat')}Generar otra rutina</button>`, 'inicio', { ancho: 'lectura' });
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

// --- Explorar y detalle ----------------------------------------------

const POSICIONES_EXPLORAR = [['todo', 'Todo'], ['sentado', 'En la silla'], ['de_pie', 'De pie'], ['tumbado', 'En la cama'], ['suelo', 'En el suelo']];
const FASES_EXPLORAR = [['todo', 'Todo'], ['calentamiento', 'Calentar'], ['principal', 'Fortalecer y mover'], ['calma', 'Estirar y calmar']];
const POSICION_CORTA_EJ = { sentado: 'En la silla', de_pie: 'De pie', tumbado: 'En la cama', suelo: 'En el suelo' };
const FASE_CORTA = { calentamiento: 'Calentar', principal: 'Fortalecer', calma: 'Estirar y calmar' };

const perfilListo = () => P.validarPerfil(estado.perfil).length === 0;
const restriccionesPerfil = () => (perfilListo() ? calcularRestricciones(estado.perfil) : null);
const incompatibilidades = (e, restr) => (restr ? motivosIncompatibilidad(e, restr, { permitirBorrador: true }) : []);

// Ilustración de un ejercicio. Si faltara su ficha, un recuadro neutro (nunca otra figura).
function ilustracion(e, clase = '') {
  const ficha = estado.ilustraciones[e.id];
  return `<div class="ilus ${clase}">${ficha ? dibujar(ficha, e.nombre) : `<span class="suave pequeno">Ilustración no disponible</span>`}</div>`;
}

function tarjetaEjercicio(e) {
  return `<li><a class="tarjeta-ej" href="#ejercicio/${e.id}">
    <span class="tarjeta-ej-ilus">${ilustracion(e)}<span class="insignia insignia-tiempo">${icono('clock')}${mmss(e.duracion_estimada_seg)}</span></span>
    <span class="tarjeta-ej-nombre">${escapar(e.nombre)}</span>
    <span class="tarjeta-ej-meta">${e.posiciones.map((p) => POSICION_CORTA_EJ[p]).join(' o ')} · ${e.fases.map((f) => FASE_CORTA[f]).join(', ')}</span>
    ${e.validacion.estado === 'borrador' ? '<span class="insignia insignia-borrador">Sin revisar</span>' : ''}
  </a></li>`;
}

function vistaExplorar(arg) {
  const f = estado.filtros;
  // Desde el inicio se llega con un filtro ya elegido: #explorar/sentado, #explorar/calma…
  if (arg && POSICIONES_EXPLORAR.some(([id]) => id === arg)) { f.posicion = arg; f.fase = 'todo'; }
  if (arg && FASES_EXPLORAR.some(([id]) => id === arg)) { f.fase = arg; f.posicion = 'todo'; }
  const visibles = estado.catalogo.ejercicios.filter(visible);
  if (!visibles.length) {
    pintar(`
      <h1>Explorar</h1>
      <div class="vacio">
        ${icono('shield-check')}
        <p><strong>El catálogo está en revisión.</strong></p>
        <p class="suave">Cada ejercicio se compara con su fuente sanitaria antes de mostrarse. Hay ${estado.catalogo.ejercicios.length} pendientes.</p>
        <a href="#acerca">Cómo revisamos el catálogo</a>
      </div>`);
    return;
  }
  const restr = restriccionesPerfil();
  const usarCompat = Boolean(restr) && f.compatibles;
  const lista = visibles.filter((e) => (f.posicion === 'todo' || e.posiciones.includes(f.posicion))
    && (f.fase === 'todo' || e.fases.includes(f.fase))
    && (!usarCompat || incompatibilidades(e, restr).length === 0));
  const chip = (grupo, [id, texto], actual) => `<button type="button" class="chip" data-accion="filtro" data-grupo="${grupo}" data-valor="${id}" aria-pressed="${actual === id}">${texto}</button>`;
  pintar(`
    <div class="explorar-cabecera">
      <h1>Explorar</h1>
      <p class="suave sin-margen">${visibles.length} ejercicios${estado.desarrollo ? ', incluidos los que están sin revisar' : ''}.</p>
    </div>
    <div class="filtros" role="group" aria-label="Filtros">
      ${restr ? `<label class="interruptor"><input type="checkbox" data-cambio="compatibles" ${f.compatibles ? 'checked' : ''}><span>Solo los compatibles con mi perfil</span></label>`
        : '<p class="suave pequeno sin-margen">Completa tu perfil para ver solo los ejercicios compatibles contigo.</p>'}
      <div class="chips" aria-label="Posición">${POSICIONES_EXPLORAR.map((o) => chip('posicion', o, f.posicion)).join('')}</div>
      <div class="chips" aria-label="Momento de la rutina">${FASES_EXPLORAR.map((o) => chip('fase', o, f.fase)).join('')}</div>
    </div>
    <p class="suave pequeno" role="status">${lista.length === 1 ? '1 ejercicio' : `${lista.length} ejercicios`}</p>
    ${lista.length ? `<ul class="rejilla-ej">${lista.slice(0, f.cuantos).map(tarjetaEjercicio).join('')}</ul>
      ${lista.length > f.cuantos ? `<div class="centrado mas"><button type="button" data-accion="mas-ejercicios">Ver más (${lista.length - f.cuantos})</button></div>` : ''}`
      : `<div class="vacio">${icono('compass')}<p><strong>Ningún ejercicio coincide con estos filtros.</strong></p>
        <button type="button" data-accion="limpiar-filtros">Quitar filtros</button></div>`}
  `);
}

function textoMotivo(m) {
  if (m.tipo === 'exigencia') return `exige ${ETIQUETA_EXIGENCIA[m.codigo]}`;
  if (m.tipo === 'posicion') return `se hace ${ETIQUETA_POSICION[m.codigo]}`;
  if (m.tipo === 'recurso') return `necesita ${RECURSOS.find((r) => r.id === m.codigo)?.texto.toLowerCase() || m.codigo}`;
  return 'está sin revisar';
}

function vistaEjercicio(id) {
  const e = ejercicio(id);
  if (!e) return ir('explorar');
  if (!visible(e)) {
    pintar(`<h1>${escapar(e.nombre)}</h1>
      <div class="vacio">${icono('shield-check')}<p><strong>Este ejercicio está pendiente de revisión.</strong></p>
      <p class="suave">No mostramos sus instrucciones hasta compararlas con la fuente sanitaria.</p></div>`, '', 'explorar', { ancho: 'lectura' });
    return;
  }
  const restr = restriccionesPerfil();
  const motivos = incompatibilidades(e, restr).filter((m) => m.tipo !== 'sin_revisar');
  const exige = Object.entries(e.exigencias).filter(([, v]) => v).map(([k]) => ETIQUETA_EXIGENCIA[k]);
  const variantes = [...(e.variante_de ? [ejercicio(e.variante_de)] : []), ...estado.catalogo.ejercicios.filter((x) => x.variante_de === e.id)].filter((x) => x && visible(x));
  const compat = !restr
    ? `<div class="nota nota-neutra nota-con-icono">${icono('info-circle-fill')}<p>Completa tu perfil para saber si encaja contigo.</p></div>`
    : motivos.length
      ? `<div class="nota nota-aviso nota-con-icono">${icono('exclamation-triangle-fill')}<p><strong>No es compatible con tu perfil:</strong> ${escapar(motivos.map(textoMotivo).join('; '))}.</p></div>`
      : `<div class="nota nota-exito nota-con-icono">${icono('check-circle-fill')}<p><strong>Compatible con tu perfil.</strong> No exige nada de lo que nos dijiste que evitas.</p></div>`;
  pintar(`
    <article class="detalle">
      <div class="detalle-ilus">
        ${ilustracion(e, 'ilus-grande')}
        <p class="leyenda"><span class="muestra-gris"></span>Inicio <span class="muestra-negra"></span>Final <span class="muestra-flecha"></span>Movimiento</p>
      </div>
      <div class="detalle-texto">
        ${e.validacion.estado === 'borrador' ? '<p><span class="insignia insignia-borrador">Sin revisar · solo en modo desarrollo</span></p>' : ''}
        <h1>${escapar(e.nombre)}</h1>
        <p class="detalle-desc">${escapar(e.descripcion)}</p>
        <ul class="pildoras">
          <li class="pildora">${icono('clock')}${mmss(e.duracion_estimada_seg)}</li>
          ${e.posiciones.map((p) => `<li class="pildora">${POSICION_CORTA_EJ[p]}</li>`).join('')}
          ${e.fases.map((f) => `<li class="pildora">${FASE_CORTA[f]}</li>`).join('')}
        </ul>
        ${compat}
        <h2>Cómo se hace</h2>
        <ol class="pasos-numerados">${e.instrucciones.map((t) => `<li>${escapar(t)}</li>`).join('')}</ol>
        <p class="dosis-detalle"><strong>Cuánto:</strong> ${escapar(e.dosis)}</p>
        <h2>Qué necesitas y qué exige</h2>
        <p><strong>Material:</strong> ${e.recursos.length ? escapar(e.recursos.map((r) => RECURSOS.find((x) => x.id === r)?.texto || r).join('. ')) : 'Nada en especial.'}</p>
        <p><strong>Exige:</strong> ${exige.length ? escapar(exige.join(', ')) : 'nada de la lista de restricciones de HealthMove'}.</p>
        ${variantes.length ? `<h2>Variantes</h2><ul class="filas">${variantes.map((v) => fila(`ejercicio/${v.id}`, escapar(v.nombre), v.id === e.variante_de ? 'Versión de partida' : 'Otra versión')).join('')}</ul>` : ''}
        <h2>Fuente</h2>
        <p><a href="${escapar(e.fuente.url)}" rel="noopener">${escapar(e.fuente.titulo)}${icono('box-arrow-up-right', 'ico-enlace')}</a><br>
          <span class="suave">${escapar(e.fuente.organizacion)}${e.fuente.especifica_de ? `. Material pensado para: ${escapar(e.fuente.especifica_de)}` : ''}.</span></p>
        ${e.fuente.especifica_de ? `<p class="suave" data-procedencia>${PROCEDENCIA}</p>` : ''}
        ${e.adaptaciones.length ? `<details class="nota nota-neutra"><summary>Cambios respecto a la fuente</summary><ul>${e.adaptaciones.map((a) => `<li>${escapar(a)}</li>`).join('')}</ul></details>` : ''}
        <div class="nota nota-aviso"><p><strong>Para</strong> si notas dolor en el pecho, falta de aire intensa, mareo, o un dolor nuevo o que aumenta.</p></div>
      </div>
    </article>
  `, '', 'explorar');
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
  // Al empezar, al reanudar y en cada paso: si algún bloque ya no vale, no se reproduce nada.
  const comprobacion = comprobarRutina(estado.resultado, estado.catalogo, estado.perfil, { permitirBorrador: estado.desarrollo });
  if (comprobacion.estado === 'bloqueada') { pararReproductor(); return ir('rutina'); }
  // Si algo cambió, la persona tiene que haber visto el aviso en la rutina antes de empezar.
  if (!estado.reproductor && comprobacion.estado === 'ok_con_aviso' && !estado.empezarConfirmado) return ir('rutina');
  if (!estado.reproductor) { estado.reproductor = { i: 0, restante: null, pausado: false, temporizador: null, bloqueo: null }; estado.empezarConfirmado = false; }
  const rep = estado.reproductor;
  const bloques = r.rutina.bloques;
  const b = bloques[rep.i];
  const e = ejercicio(b.ejercicioId);
  if (rep.restante === null) rep.restante = e.duracion_estimada_seg;
  const ultimo = rep.i === bloques.length - 1;

  const hecho = 100 - (rep.restante / e.duracion_estimada_seg) * 100;
  pintar(`
    <section class="reproductor" aria-labelledby="titulo-ej">
      <div class="pasos" aria-hidden="true">${bloques.map((_, k) => `<span class="${k <= rep.i ? 'hecho' : ''}"></span>`).join('')}</div>
      <p class="fase">${ETIQUETA_FASE[b.fase]} · Ejercicio ${rep.i + 1} de ${bloques.length}${b.ronda > 1 ? ' · segunda vuelta' : ''}</p>
      <div class="repro-cuerpo">
        <div class="repro-ilus">${ilustracion(e, 'ilus-grande')}</div>
        <div class="repro-texto">
          <h1 id="titulo-ej">${escapar(e.nombre)}</h1>
          <div class="tiempo">
            <span class="tiempo-cifra" id="cifra" aria-hidden="true">${mmss(rep.restante)}</span>
            <span class="suave pequeno">tiempo orientativo</span>
            <div class="barra" aria-hidden="true"><span id="barra" style="width:${hecho}%"></span></div>
          </div>
          <p id="anuncio" class="suave" aria-live="polite"></p>
          <div class="controles">
            <button type="button" class="boton-suave" data-accion="anterior" ${rep.i === 0 ? 'disabled' : ''}>${icono('skip-start-fill')}Anterior</button>
            <button type="button" class="boton-suave" data-accion="pausa">${rep.pausado ? `${icono('play-fill')}Reanudar` : `${icono('pause-fill')}Pausar`}</button>
            ${'speechSynthesis' in window ? `<button type="button" class="boton-suave" data-accion="leer">${icono('volume-up-fill')}Leer</button>` : ''}
          </div>
          <p class="dosis">${escapar(e.dosis)}</p>
          <ol class="pasos-numerados">${e.instrucciones.map((t) => `<li>${escapar(t)}</li>`).join('')}</ol>
        </div>
      </div>
    </section>
  `, `
    <button type="button" class="peligro parar" data-accion="detener">${icono('stop-circle')}Detener: tengo molestias</button>
    <button type="button" class="primario" data-accion="siguiente">${ultimo ? 'Terminar' : 'Siguiente'}</button>
  `, 'rutina', { modo: 'concentracion' });
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
  const validos = (estado.catalogo?.ejercicios || []).filter((e) => !estado.invalidos.has(e.id));
  for (const e of validos) fuentes.set(e.fuente.url, e.fuente);
  const total = estado.catalogo?.ejercicios.length ?? 0;
  const revisados = validos.filter((e) => estadoUtilizable(e)).length;
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
    ejercicio: () => vistaEjercicio(arg),
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
      // La primera vez se sigue directamente con el cuestionario; con un perfil ya empezado, a la portada.
      if (estado.perfil.posicion === null) ir('perfil/posicion');
      else if (location.hash === '#inicio') router(); else ir('inicio');
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
    case 'empezar': estado.reproductor = null; estado.empezarConfirmado = true; ir('reproductor'); break;
    case 'anterior': if (rep && rep.i > 0) { rep.i--; rep.restante = null; vistaReproductor(); enfocarTitulo(); } break;
    case 'siguiente': {
      if (!rep) return;
      if (rep.i >= estado.resultado.res.rutina.bloques.length - 1) { registrar('completada'); pararReproductor(); ir('fin'); return; }
      rep.i++; rep.restante = null; vistaReproductor(); enfocarTitulo();
      break;
    }
    case 'pausa': if (rep) { rep.pausado = !rep.pausado; repintarConservandoFoco(vistaReproductor); } break;
    case 'leer': {
      const e = rep && ejercicio(estado.resultado?.res?.rutina?.bloques?.[rep.i]?.ejercicioId);
      if (!e) break;
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
        Object.assign(estado, { nombre: null, perfil: P.perfilVacio(), resultado: null, historial: [], zonas: null, desarrollo: false, volverAResumen: false, perfilNoCargado: null, perfilProtegido: false });
        actualizarFranjaDesarrollo();
        if (location.hash === '#inicio') router(); else ir('inicio');
      }
      break;
    case 'salir-desarrollo':
      estado.desarrollo = false; guardar('desarrollo', false); actualizarFranjaDesarrollo();
      router(); // la rutina guardada se conserva; si tiene borradores, la vista de la rutina la muestra bloqueada
      break;
    case 'recargar': location.reload(); break;
    case 'filtro':
      estado.filtros[el.dataset.grupo] = el.dataset.valor;
      estado.filtros.cuantos = 24;
      if (location.hash === '#explorar') repintarConservandoFoco(() => vistaExplorar()); else ir('explorar');
      break;
    case 'mas-ejercicios': estado.filtros.cuantos += 24; repintarConservandoFoco(() => vistaExplorar()); break;
    case 'limpiar-filtros':
      Object.assign(estado.filtros, { posicion: 'todo', fase: 'todo', compatibles: false, cuantos: 24 });
      repintarConservandoFoco(() => vistaExplorar());
      break;
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
    case 'compatibles': estado.filtros.compatibles = el.checked; repintarConservandoFoco(() => vistaExplorar()); break;
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
    const [r, ri] = await Promise.all([fetch('data/catalogo.json'), fetch('data/ilustraciones.json').catch(() => null)]);
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const catalogo = await r.json();
    // Un catálogo con la estructura rota no se usa: no se muestra ni se genera nada con él.
    const validacion = validarCatalogo(catalogo);
    if (!validacion.valido) {
      console.error('Catálogo no válido:', validacion.errores);
      pintar(`<h1>No podemos usar los ejercicios</h1><p>Los datos de ejercicios descargados no son válidos, así que no los usaremos para preparar rutinas. Vuelve a abrir la app más tarde.</p>`,
        '<button type="button" class="primario" data-accion="recargar">Reintentar</button>');
      return;
    }
    // Un ejercicio con datos inválidos se aparta: no se ve ni entra en ninguna rutina.
    if (validacion.porEjercicio.size) console.warn('Ejercicios con datos inválidos:', Object.fromEntries(validacion.porEjercicio));
    estado.invalidos = new Set(validacion.porEjercicio.keys());
    estado.catalogo = catalogo;
    // Sin ilustraciones la app sigue funcionando: cada ejercicio muestra un recuadro neutro.
    if (ri?.ok) estado.ilustraciones = await ri.json().catch(() => ({}));
  } catch (e) {
    pintar(`<h1>No pudimos cargar los ejercicios</h1><p>Comprueba tu conexión y vuelve a abrir la app. (${escapar(e.message)})</p>`,
      '<button type="button" class="primario" data-accion="recargar">Reintentar</button>');
    return;
  }
  window.addEventListener('hashchange', router);
  router();
}

arrancar();
