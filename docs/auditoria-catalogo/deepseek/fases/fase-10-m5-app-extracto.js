// Extracto LITERAL de public/js/app.js, líneas 440 a 723 (vistaResumen, vistaRutina, vistaRutinaBloqueada,
// vistaRutinaVacia, vistaExplorar, vistaEjercicio y vistaSinRutina), rama desarrollo-v1 con los cambios de P28.
// SHA-256 de app.js: 6048c3f6a3965e52. El archivo completo (66 155 caracteres) supera el límite de 60 000 por bloque.
// El resto de app.js (navegación, perfil, reproductor, historial y ajustes) no trata la compatibilidad ni las exclusiones.
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

