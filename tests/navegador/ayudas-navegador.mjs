// Utilidades para las pruebas de integración en un navegador real, sin dependencias:
//  - un servidor estático con node:http que sirve public/ (y permite sustituir el catálogo);
//  - un cliente mínimo del protocolo de depuración de Chrome (CDP) sobre el WebSocket de Node (≥ 22).
// El navegador se busca en HM_CHROME, en el PATH y en la caché de Playwright. Si no hay ninguno,
// `buscarNavegador()` devuelve null y las pruebas se omiten diciendo por qué (nunca se dan por pasadas).
import { createServer } from 'node:http';
import { spawn } from 'node:child_process';
import { readFile, mkdtemp, rm } from 'node:fs/promises';
import { existsSync, readdirSync } from 'node:fs';
import { tmpdir, homedir } from 'node:os';
import { join, extname, resolve, sep, delimiter } from 'node:path';
import { fileURLToPath } from 'node:url';

// Carpeta servida: public/ del proyecto, salvo que HM_PUBLICO indique otra (p. ej., para comprobar que
// las pruebas fallan con una versión anterior de la app).
const PUBLICO = resolve(process.env.HM_PUBLICO || fileURLToPath(new URL('../../public/', import.meta.url))) + sep;

export function buscarNavegador() {
  if (process.env.HM_CHROME) return existsSync(process.env.HM_CHROME) ? process.env.HM_CHROME : null;
  for (const dir of (process.env.PATH || '').split(delimiter)) {
    for (const nombre of ['chromium', 'chromium-browser', 'google-chrome', 'google-chrome-stable', 'chrome']) {
      const ruta = join(dir, nombre);
      if (existsSync(ruta)) return ruta;
    }
  }
  const cache = join(homedir(), '.cache', 'ms-playwright');
  if (existsSync(cache)) {
    const versiones = readdirSync(cache).filter((d) => d.startsWith('chromium-')).sort().reverse();
    for (const v of versiones) {
      const ruta = join(cache, v, 'chrome-linux64', 'chrome');
      if (existsSync(ruta)) return ruta;
    }
  }
  return null;
}

const TIPOS = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.webmanifest': 'application/manifest+json', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2', '.ico': 'image/x-icon',
};

// Servidor de public/. `servidor.catalogo` (texto) sustituye a data/catalogo.json mientras no sea null.
// `/__vacio` es una página en blanco del mismo origen, para preparar el almacenamiento sin arrancar la app.
export async function arrancarServidor() {
  const servidor = { catalogo: null };
  const http = createServer(async (req, res) => {
    const ruta = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (ruta === '/__vacio') { res.writeHead(200, { 'content-type': TIPOS['.html'] }); return res.end('<!doctype html><title>vacío</title>'); }
    if (ruta === '/data/catalogo.json' && servidor.catalogo !== null) { res.writeHead(200, { 'content-type': TIPOS['.json'] }); return res.end(servidor.catalogo); }
    const archivo = resolve(PUBLICO, '.' + (ruta.endsWith('/') ? ruta + 'index.html' : ruta));
    if (!archivo.startsWith(PUBLICO.endsWith(sep) ? PUBLICO : PUBLICO + sep)) { res.writeHead(403); return res.end(); }
    try {
      const cuerpo = await readFile(archivo);
      res.writeHead(200, { 'content-type': TIPOS[extname(archivo)] || 'application/octet-stream', 'cache-control': 'no-store' });
      res.end(cuerpo);
    } catch {
      res.writeHead(404); res.end();
    }
  });
  await new Promise((ok) => http.listen(0, '127.0.0.1', ok));
  servidor.url = `http://127.0.0.1:${http.address().port}/`;
  servidor.cerrar = () => new Promise((ok) => http.close(ok));
  return servidor;
}

// Navegador sin interfaz con un perfil temporal que se borra al cerrar.
export async function arrancarNavegador(ruta) {
  const datos = await mkdtemp(join(tmpdir(), 'hm-navegador-'));
  const proceso = spawn(ruta, [
    '--headless=new', '--no-first-run', '--no-default-browser-check', '--disable-gpu', '--disable-extensions',
    '--remote-debugging-port=0', `--user-data-dir=${datos}`, 'about:blank',
  ], { stdio: ['ignore', 'ignore', 'pipe'] });
  const ws = await new Promise((ok, mal) => {
    let salida = '';
    const tiempo = setTimeout(() => mal(new Error(`el navegador no arrancó: ${salida.slice(-300)}`)), 20000);
    proceso.stderr.on('data', (d) => {
      salida += d;
      const m = salida.match(/DevTools listening on (ws:\/\/\S+)/);
      if (m) { clearTimeout(tiempo); ok(m[1]); }
    });
    proceso.on('exit', (c) => { clearTimeout(tiempo); mal(new Error(`el navegador terminó (${c}): ${salida.slice(-300)}`)); });
  });
  const cdp = await conectar(ws);
  return {
    cdp,
    async cerrar() {
      try { await cdp.enviar('Browser.close'); } catch { /* ya cerrado */ }
      cdp.socket.close();
      await new Promise((ok) => { if (proceso.exitCode !== null) ok(); else { proceso.once('exit', ok); setTimeout(() => { proceso.kill('SIGKILL'); ok(); }, 5000); } });
      await rm(datos, { recursive: true, force: true });
    },
  };
}

async function conectar(url) {
  const socket = new WebSocket(url);
  await new Promise((ok, mal) => { socket.onopen = ok; socket.onerror = () => mal(new Error('no se pudo conectar con el navegador')); });
  let id = 0;
  const pendientes = new Map();
  const oyentes = new Set();
  socket.onmessage = (ev) => {
    const m = JSON.parse(ev.data);
    if (m.id && pendientes.has(m.id)) {
      const { ok, mal } = pendientes.get(m.id);
      pendientes.delete(m.id);
      if (m.error) mal(new Error(`${m.error.message} ${m.error.data || ''}`)); else ok(m.result);
    } else if (m.method) {
      for (const f of oyentes) f(m);
    }
  };
  return {
    socket,
    enviar(method, params = {}, sessionId) {
      const msg = { id: ++id, method, params, ...(sessionId ? { sessionId } : {}) };
      return new Promise((ok, mal) => { pendientes.set(msg.id, { ok, mal }); socket.send(JSON.stringify(msg)); });
    },
    escuchar(f) { oyentes.add(f); return () => oyentes.delete(f); },
  };
}

const esperar = (ms) => new Promise((ok) => setTimeout(ok, ms));

// Pestaña en un contexto aislado (almacenamiento propio), sin service worker para que cada carga use los archivos actuales.
export async function abrirPestana(nav, servidor) {
  const { cdp } = nav;
  const { browserContextId } = await cdp.enviar('Target.createBrowserContext');
  const { targetId } = await cdp.enviar('Target.createTarget', { url: 'about:blank', browserContextId });
  const { sessionId } = await cdp.enviar('Target.attachToTarget', { targetId, flatten: true });
  const errores = [];
  const quitar = cdp.escuchar((m) => {
    if (m.sessionId !== sessionId) return;
    if (m.method === 'Runtime.exceptionThrown') errores.push(m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text);
    if (m.method === 'Runtime.consoleAPICalled' && m.params.type === 'error') errores.push(m.params.args.map((a) => a.value ?? a.description).join(' '));
  });
  const enviar = (metodo, params) => cdp.enviar(metodo, params, sessionId);
  await enviar('Runtime.enable');
  await enviar('Page.enable');
  await enviar('Network.enable');
  await enviar('Network.setBypassServiceWorker', { bypass: true });

  const pestana = {
    errores,
    async evaluar(expresion) {
      const r = await enviar('Runtime.evaluate', { expression: expresion, returnByValue: true, awaitPromise: true });
      if (r.exceptionDetails) throw new Error(`error al evaluar «${expresion.slice(0, 80)}»: ${r.exceptionDetails.exception?.description || r.exceptionDetails.text}`);
      return r.result.value;
    },
    async hasta(expresion, { tiempo = 5000, mensaje } = {}) {
      const fin = Date.now() + tiempo;
      for (;;) {
        try { if (await pestana.evaluar(expresion)) return; } catch { /* la página aún no está lista */ }
        if (Date.now() > fin) throw new Error(`no se cumplió a tiempo: ${mensaje || expresion}`);
        await esperar(50);
      }
    },
    async ir(ruta) {
      await enviar('Page.navigate', { url: servidor.url + ruta });
      await pestana.hasta('document.readyState === "complete"');
    },
    // Abre (o vuelve a abrir) la app y espera a que pinte su primera pantalla.
    async abrirApp(ruta = '') {
      await pestana.ir(ruta);
      await pestana.hasta('document.querySelector("#app")?.children.length > 0', { mensaje: 'la app pinta algo' });
      await esperar(100);
    },
    // Recarga de verdad el documento (cerrar y volver a abrir la app), conservando el almacenamiento.
    async recargar() {
      await pestana.evaluar('window.__antes = true');
      await enviar('Page.reload', { ignoreCache: true });
      await pestana.hasta('!window.__antes && document.readyState === "complete" && document.querySelector("#app")?.children.length > 0', { mensaje: 'la app vuelve a pintarse tras recargar' });
      await esperar(100);
    },
    // Prepara el almacenamiento local antes de arrancar la app. Los valores de `textos` se guardan tal cual.
    async sembrar({ valores = {}, textos = {} } = {}) {
      await pestana.ir('__vacio');
      await pestana.evaluar(`(() => {
        localStorage.clear();
        for (const [k, v] of Object.entries(${JSON.stringify(valores)})) localStorage.setItem('hm_' + k, JSON.stringify(v));
        for (const [k, v] of Object.entries(${JSON.stringify(textos)})) localStorage.setItem('hm_' + k, v);
      })()`);
    },
    leerTexto: (clave) => pestana.evaluar(`localStorage.getItem(${JSON.stringify('hm_' + clave)})`),
    leer: async (clave) => JSON.parse(await pestana.leerTexto(clave)),
    texto: () => pestana.evaluar('document.querySelector("#app").innerText'),
    hash: () => pestana.evaluar('location.hash'),
    existe: (selector) => pestana.evaluar(`!!document.querySelector(${JSON.stringify(selector)})`),
    async pulsar(selector) {
      const ok = await pestana.evaluar(`(() => { const b = document.querySelector(${JSON.stringify(selector)}); if (!b || b.disabled) return false; b.click(); return true; })()`);
      if (!ok) throw new Error(`no se puede pulsar ${selector}`);
      await esperar(80);
    },
    async cerrar() {
      quitar();
      await cdp.enviar('Target.disposeBrowserContext', { browserContextId });
    },
  };
  return pestana;
}
