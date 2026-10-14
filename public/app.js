// ============================================================
//  MV10 — Frontend PWA (SPA en JavaScript vanilla)
//  Fase 2: login/registro y sesión.
//  Fase 3: favoritos y creación de rutinas personalizadas.
// ============================================================

const app = document.getElementById('app');
const nav = document.getElementById('nav');

// ---------- Sesión (token + usuario, guardados en el navegador) ----------
let sesion = cargarSesion();
let favoritosIds = new Set();

function cargarSesion() {
  try { return JSON.parse(localStorage.getItem('ef_sesion')) || null; }
  catch { return null; }
}
function guardarSesion(s) {
  sesion = s;
  try {
    if (s) localStorage.setItem('ef_sesion', JSON.stringify(s));
    else localStorage.removeItem('ef_sesion');
  } catch {}
}

// ---------- Ayudante para llamar a la API ----------
async function api(path, { method = 'GET', body, auth = false } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  if (auth && sesion?.token) headers.Authorization = `Bearer ${sesion.token}`;
  const res = await fetch('/api' + path, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    if (res.status === 401 && auth) { guardarSesion(null); }
    throw new Error(data.error || 'Ocurrió un error.');
  }
  return data;
}

// ============================================================
//  Navegación / router simple
// ============================================================
let vistaActual = 'rutinas';

function ir(vista, arg) {
  vistaActual = vista;
  pintarNav();
  const rutas = {
    rutinas: () => vistaRutinas('oficiales'),
    favoritas: () => (sesion ? vistaRutinas('favoritas') : pedirLogin('favoritas')),
    crear: () => (sesion ? vistaCrear() : pedirLogin('crear')),
    editar: () => (sesion ? vistaCrear(arg) : pedirLogin('crear')),
    cuenta: () => vistaCuenta(),
    rutina: () => vistaRutina(arg),
  };
  (rutas[vista] || rutas.rutinas)();
}

function pintarNav() {
  const items = [
    { id: 'rutinas', label: 'Rutinas', icono: '🏃' },
    { id: 'favoritas', label: 'Favoritas', icono: '⭐' },
    { id: 'crear', label: 'Crear', icono: '＋' },
    { id: 'cuenta', label: sesion ? 'Cuenta' : 'Entrar', icono: '👤' },
  ];
  nav.innerHTML = items.map((it) => `
    <button class="nav-item ${vistaActual === it.id ? 'on' : ''}" data-ir="${it.id}">
      <span class="nav-ic">${it.icono}</span><span>${it.label}</span>
    </button>
  `).join('');
  nav.querySelectorAll('[data-ir]').forEach((b) =>
    b.addEventListener('click', () => ir(b.dataset.ir))
  );
}

// ============================================================
//  Vistas de rutinas
// ============================================================
async function vistaRutinas(fuente) {
  const titulos = { oficiales: 'Rutinas', favoritas: 'Mis favoritas', mias: 'Mis rutinas' };
  const endpoints = { oficiales: '/rutinas', favoritas: '/rutinas/favoritas', mias: '/rutinas/mias' };
  app.innerHTML = `<p class="cargando">Cargando…</p>`;

  try {
    const rutinas = await api(endpoints[fuente], { auth: fuente !== 'oficiales' });
    await refrescarFavoritos();

    app.innerHTML = `
      <h2 class="vista-titulo">${titulos[fuente]}</h2>
      ${sesion && fuente === 'oficiales' ? tabsFuente() : ''}
      ${rutinas.length ? `
        <ul class="lista">
          ${rutinas.map(cardRutina).join('')}
        </ul>` : `<p class="vacio">${vacioMsg(fuente)}</p>`}
    `;

    app.querySelectorAll('.card').forEach((el) =>
      el.addEventListener('click', () => ir('rutina', el.dataset.id))
    );
    app.querySelectorAll('[data-fuente]').forEach((b) =>
      b.addEventListener('click', () => vistaRutinas(b.dataset.fuente))
    );
  } catch (e) {
    app.innerHTML = `<p class="error">${escapar(e.message)}</p>`;
  }
}

function tabsFuente() {
  return `
    <div class="tabs">
      <button class="tab on" data-fuente="oficiales">Oficiales</button>
      <button class="tab" data-fuente="mias">Mías</button>
    </div>`;
}

function cardRutina(r) {
  return `
    <li class="card" data-id="${r.id}">
      <span class="pill">${r.duracion_min} min</span>
      <div class="card-nombre">${escapar(r.nombre)}</div>
      <div class="card-meta">${r.intensidad} · ${r.material}</div>
    </li>`;
}

function vacioMsg(fuente) {
  if (fuente === 'favoritas') return 'Aún no guardas favoritas — toca la ⭐ en una rutina.';
  if (fuente === 'mias') return 'Aún no creas rutinas — usa el botón Crear.';
  return 'Todavía no hay rutinas. Agrega algunas en la base de datos.';
}

// ---------- Detalle de una rutina ----------
async function vistaRutina(id) {
  app.innerHTML = `<p class="cargando">Cargando…</p>`;
  try {
    const r = await api(`/rutinas/${id}`);
    const esFav = favoritosIds.has(id);
    const esMia = sesion && r.owner_id === sesion.usuario.id;

    app.innerHTML = `
      <button class="volver" data-volver>← Volver</button>
      <div class="detalle-head">
        <div>
          <h2 class="detalle-titulo">${escapar(r.nombre)}</h2>
          <p class="detalle-meta">${r.duracion_min} min · ${r.intensidad} · ${r.material}</p>
        </div>
        ${sesion ? `<button class="fav ${esFav ? 'on' : ''}" data-fav title="Favorito">${esFav ? '★' : '☆'}</button>` : ''}
      </div>
      <ol class="ejercicios">
        ${r.ejercicios.map((e) => `
          <li>
            <b>${escapar(e.nombre)}</b>
            <span>${e.series} series · ${e.trabajo_seg ? e.trabajo_seg + 's' : e.reps + ' reps'}${e.descanso_seg ? ' · descanso ' + e.descanso_seg + 's' : ''}</span>
          </li>`).join('')}
      </ol>
      <button class="btn-primario" data-iniciar>▶ Iniciar rutina</button>
      ${esMia ? `
        <div class="acciones">
          <button class="btn-secundario" data-editar>✎ Editar</button>
          <button class="btn-salir" data-borrar>🗑 Borrar</button>
        </div>` : ''}
    `;

    app.querySelector('[data-volver]').addEventListener('click', () => ir('rutinas'));
    app.querySelector('[data-iniciar]').addEventListener('click', () => cronometro(r));
    const favBtn = app.querySelector('[data-fav]');
    if (favBtn) favBtn.addEventListener('click', () => alternarFavorito(id, favBtn));
    if (esMia) {
      app.querySelector('[data-editar]').addEventListener('click', () => ir('editar', id));
      app.querySelector('[data-borrar]').addEventListener('click', () => borrarRutina(r));
    }
  } catch (e) {
    app.innerHTML = `<p class="error">${escapar(e.message)}</p>`;
  }
}

async function borrarRutina(r) {
  if (!confirm(`¿Borrar la rutina "${r.nombre}"? No se puede deshacer.`)) return;
  try {
    await api(`/rutinas/${r.id}`, { method: 'DELETE', auth: true });
    vistaActual = 'rutinas';
    pintarNav();
    vistaRutinas('mias');
  } catch (e) {
    alert(e.message);
  }
}

// ============================================================
//  Favoritos
// ============================================================
async function refrescarFavoritos() {
  if (!sesion) { favoritosIds = new Set(); return; }
  try {
    const favs = await api('/rutinas/favoritas', { auth: true });
    favoritosIds = new Set(favs.map((f) => f.id));
  } catch { favoritosIds = new Set(); }
}

async function alternarFavorito(id, btn) {
  const esFav = favoritosIds.has(id);
  try {
    await api(`/rutinas/${id}/favorito`, { method: esFav ? 'DELETE' : 'POST', auth: true });
    if (esFav) { favoritosIds.delete(id); btn.classList.remove('on'); btn.textContent = '☆'; }
    else { favoritosIds.add(id); btn.classList.add('on'); btn.textContent = '★'; }
  } catch (e) {
    alert(e.message);
  }
}

// ============================================================
//  Cronómetro (avanza serie por serie)
// ============================================================
function cronometro(rutina) {
  const pasos = [];
  for (const e of rutina.ejercicios) {
    for (let s = 1; s <= e.series; s++) {
      pasos.push({ etiqueta: `${e.nombre} — serie ${s}/${e.series}`, seg: e.trabajo_seg || 30, tipo: 'trabajo' });
      if (e.descanso_seg) pasos.push({ etiqueta: 'Descanso', seg: e.descanso_seg, tipo: 'descanso' });
    }
  }
  let i = 0, restante = pasos[0].seg, timer = null;

  function pintar() {
    const p = pasos[i];
    app.innerHTML = `
      <div class="crono ${p.tipo}">
        <p class="crono-etiqueta">${escapar(p.etiqueta)}</p>
        <div class="crono-tiempo">${mmss(restante)}</div>
        <p class="crono-progreso">Paso ${i + 1} de ${pasos.length}</p>
        <button class="crono-salir" data-salir>Terminar</button>
      </div>`;
    app.querySelector('[data-salir]').addEventListener('click', () => { clearInterval(timer); vistaRutina(rutina.id); });
  }
  function tick() {
    restante--;
    if (restante < 0) {
      i++;
      if (i >= pasos.length) {
        clearInterval(timer);
        app.innerHTML = `
          <div class="crono fin">
            <div class="crono-tiempo">¡Listo! 🎉</div>
            <p class="crono-etiqueta">Rutina completada</p>
            <button class="btn-primario" data-fin>← Volver a rutinas</button>
          </div>`;
        app.querySelector('[data-fin]').addEventListener('click', () => ir('rutinas'));
        return;
      }
      restante = pasos[i].seg;
      try { navigator.vibrate?.(200); } catch {}
    }
    pintar();
  }
  pintar();
  timer = setInterval(tick, 1000);
}

// ============================================================
//  Cuenta: login / registro / logout
// ============================================================
function vistaCuenta() {
  if (sesion) {
    app.innerHTML = `
      <h2 class="vista-titulo">Mi cuenta</h2>
      <div class="tarjeta">
        <p class="dato"><span>Nombre</span><b>${escapar(sesion.usuario.nombre)}</b></p>
        <p class="dato"><span>Email</span><b>${escapar(sesion.usuario.email)}</b></p>
      </div>
      <button class="btn-secundario" data-mias>Ver mis rutinas</button>
      <button class="btn-salir" data-salir>Cerrar sesión</button>
    `;
    app.querySelector('[data-mias]').addEventListener('click', () => vistaRutinas('mias'));
    app.querySelector('[data-salir]').addEventListener('click', () => { guardarSesion(null); favoritosIds = new Set(); ir('rutinas'); });
    return;
  }
  vistaLogin();
}

function pedirLogin(destino) {
  vistaLogin(`Inicia sesión para acceder a ${destino === 'crear' ? 'crear rutinas' : 'tus favoritas'}.`);
}

function vistaLogin(aviso) {
  vistaActual = 'cuenta';
  pintarNav();
  app.innerHTML = `
    <div class="auth-shell">
      <section class="auth-card" aria-label="Iniciar sesión">
        <div class="auth-eyebrow">MV10 · Acceso</div>
        <h2 class="auth-title">Iniciar sesión</h2>
        <p class="auth-sub">Entra para guardar tus favoritas y crear rutinas.</p>
        ${aviso ? `<p class="aviso">${escapar(aviso)}</p>` : ''}
        <form class="form" id="form-login">
          <label>Email<input type="email" name="email" required autocomplete="email"></label>
          <label>Contraseña<input type="password" name="password" required autocomplete="current-password"></label>
          <p class="form-error" id="err"></p>
          <button class="btn-primario" type="submit">Entrar</button>
        </form>
        <p class="cambiar">¿No tienes cuenta? <button class="enlace" data-registro>Regístrate</button></p>
      </section>
    </div>
  `;
  app.querySelector('[data-registro]').addEventListener('click', vistaRegistro);
  app.querySelector('#form-login').addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const f = new FormData(ev.target);
    try {
      const data = await api('/auth/login', { method: 'POST', body: { email: f.get('email'), password: f.get('password') } });
      guardarSesion(data);
      await refrescarFavoritos();
      ir('rutinas');
    } catch (e) { document.getElementById('err').textContent = e.message; }
  });
}

function vistaRegistro() {
  vistaActual = 'cuenta';
  pintarNav();
  app.innerHTML = `
    <div class="auth-shell">
      <section class="auth-card" aria-label="Crear cuenta">
        <div class="auth-eyebrow">MV10 · Nueva cuenta</div>
        <h2 class="auth-title">Crear cuenta</h2>
        <p class="auth-sub">Para docentes. No registres datos de estudiantes menores.</p>
        <form class="form" id="form-reg">
          <label>Nombre<input type="text" name="nombre" required></label>
          <label>Email<input type="email" name="email" required autocomplete="email"></label>
          <label>Contraseña (mín. 6)<input type="password" name="password" required minlength="6" autocomplete="new-password"></label>
          <p class="form-error" id="err"></p>
          <button class="btn-primario" type="submit">Registrarme</button>
        </form>
        <p class="cambiar">¿Ya tienes cuenta? <button class="enlace" data-login>Inicia sesión</button></p>
      </section>
    </div>
  `;
  app.querySelector('[data-login]').addEventListener('click', () => vistaLogin());
  app.querySelector('#form-reg').addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const f = new FormData(ev.target);
    try {
      await api('/auth/register', { method: 'POST', body: { nombre: f.get('nombre'), email: f.get('email'), password: f.get('password') } });
      // Registro OK: iniciamos sesión automáticamente.
      const data = await api('/auth/login', { method: 'POST', body: { email: f.get('email'), password: f.get('password') } });
      guardarSesion(data);
      ir('rutinas');
    } catch (e) { document.getElementById('err').textContent = e.message; }
  });
}

// ============================================================
//  Crear / editar rutina personalizada
// ============================================================
let borradorEjercicios = [];

// Sin id: crear. Con id: editar esa rutina (debe ser del usuario).
async function vistaCrear(id) {
  app.innerHTML = `<p class="cargando">Cargando ejercicios…</p>`;
  let catalogo, rutina;
  try {
    [catalogo, rutina] = await Promise.all([api('/ejercicios'), id ? api(`/rutinas/${id}`) : null]);
  } catch (e) { app.innerHTML = `<p class="error">${escapar(e.message)}</p>`; return; }

  const r = rutina || { nombre: '', duracion_min: 15, intensidad: 'media', material: 'ninguno', ejercicios: [] };
  const opciones = (lista, actual) =>
    lista.map((v) => `<option ${v === actual ? 'selected' : ''}>${v}</option>`).join('');

  borradorEjercicios = r.ejercicios.map((e) => ({
    ejercicio_id: e.ejercicio_id, nombre: e.nombre, series: e.series,
    trabajo_seg: e.trabajo_seg || 30, descanso_seg: e.descanso_seg,
  }));
  app.innerHTML = `
    ${id ? `<button class="volver" data-volver>← Volver</button>` : ''}
    <h2 class="vista-titulo">${id ? 'Editar rutina' : 'Crear rutina'}</h2>
    <form class="form" id="form-crear">
      <label>Nombre<input type="text" name="nombre" required value="${escapar(r.nombre)}"></label>
      <div class="fila">
        <label>Duración (min)<input type="number" name="duracion_min" min="1" max="60" value="${r.duracion_min}" required></label>
        <label>Intensidad
          <select name="intensidad">${opciones(['suave', 'media', 'alta'], r.intensidad)}</select>
        </label>
      </div>
      <label>Material
        <select name="material">${opciones(['ninguno', 'basico', 'completo'], r.material)}</select>
      </label>

      <h3 class="sub">Ejercicios</h3>
      <div class="agregar">
        <select id="sel-ej">
          ${catalogo.map((e) => `<option value="${e.id}">${escapar(e.nombre)}</option>`).join('')}
        </select>
        <button type="button" class="btn-secundario" id="add-ej">Añadir</button>
      </div>
      <ul class="borrador" id="borrador"></ul>

      <p class="form-error" id="err"></p>
      <button class="btn-primario" type="submit">${id ? 'Guardar cambios' : 'Guardar rutina'}</button>
    </form>
  `;

  if (id) app.querySelector('[data-volver]').addEventListener('click', () => ir('rutina', id));

  const selEj = app.querySelector('#sel-ej');
  app.querySelector('#add-ej').addEventListener('click', () => {
    const opt = selEj.selectedOptions[0];
    borradorEjercicios.push({ ejercicio_id: opt.value, nombre: opt.textContent, series: 3, trabajo_seg: 30, descanso_seg: 10 });
    pintarBorrador();
  });

  app.querySelector('#form-crear').addEventListener('submit', async (ev) => {
    ev.preventDefault();
    if (!borradorEjercicios.length) { document.getElementById('err').textContent = 'Añade al menos un ejercicio.'; return; }
    const f = new FormData(ev.target);
    const payload = {
      nombre: f.get('nombre'),
      duracion_min: Number(f.get('duracion_min')),
      intensidad: f.get('intensidad'),
      material: f.get('material'),
      ejercicios: borradorEjercicios.map((e, idx) => ({
        ejercicio_id: e.ejercicio_id, posicion: idx + 1,
        series: e.series, trabajo_seg: e.trabajo_seg, descanso_seg: e.descanso_seg,
      })),
    };
    try {
      if (id) {
        await api(`/rutinas/${id}`, { method: 'PUT', body: payload, auth: true });
        ir('rutina', id);
      } else {
        await api('/rutinas', { method: 'POST', body: payload, auth: true });
        vistaRutinas('mias');
      }
    } catch (e) { document.getElementById('err').textContent = e.message; }
  });

  pintarBorrador();
}

function pintarBorrador() {
  const cont = document.getElementById('borrador');
  if (!cont) return;
  if (!borradorEjercicios.length) { cont.innerHTML = `<li class="borrador-vacio">Sin ejercicios aún.</li>`; return; }
  cont.innerHTML = borradorEjercicios.map((e, idx) => `
    <li class="borrador-item">
      <div class="bi-top"><b>${idx + 1}. ${escapar(e.nombre)}</b><button type="button" class="quitar" data-quitar="${idx}">✕</button></div>
      <div class="bi-campos">
        <label>Series<input type="number" min="1" value="${e.series}" data-campo="series" data-idx="${idx}"></label>
        <label>Trabajo (s)<input type="number" min="1" value="${e.trabajo_seg}" data-campo="trabajo_seg" data-idx="${idx}"></label>
        <label>Descanso (s)<input type="number" min="0" value="${e.descanso_seg}" data-campo="descanso_seg" data-idx="${idx}"></label>
      </div>
    </li>`).join('');

  cont.querySelectorAll('[data-quitar]').forEach((b) =>
    b.addEventListener('click', () => { borradorEjercicios.splice(Number(b.dataset.quitar), 1); pintarBorrador(); })
  );
  cont.querySelectorAll('[data-campo]').forEach((inp) =>
    inp.addEventListener('input', () => { borradorEjercicios[Number(inp.dataset.idx)][inp.dataset.campo] = Number(inp.value); })
  );
}

// ============================================================
//  Utilidades
// ============================================================
function mmss(s) {
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
}
function escapar(txt) {
  const d = document.createElement('div');
  d.textContent = txt ?? '';
  return d.innerHTML;
}

// ---------- Arranque ----------
(async function inicio() {
  if (sesion) await refrescarFavoritos();
  ir('rutinas');
})();
