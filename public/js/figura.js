// ============================================================
//  Ilustraciones de ejercicios: una figura articulada en SVG.
//  Misma figura, mismos colores y mismos apoyos en todo el catálogo.
//  La pose inicial va en gris translúcido; la final, en sólido; una
//  flecha naranja une ambas. Funciones puras: reciben una ficha de
//  pose (data/ilustraciones.json) y devuelven el SVG como texto.
// ============================================================

const ANCHO = 400;
const ALTO = 300;
const SUELO = 272;

// Proporciones de la figura (en unidades del lienzo).
const L = {
  cabeza: 15, cuello: 9, tronco: 76, brazo: 44, antebrazo: 40,
  muslo: 58, pierna: 54, pie: 22, hombros: 22, caderas: 11, grosor: 13,
};

const COLOR = {
  figura: '#12211E', lejos: '#5B6F68', fantasma: '#9AABA4', mover: '#E07B39',
  zona: '#F2C14E', mueble: '#C9D6D1', muebleOscuro: '#8FA39B', cama: '#E7F0F8', colchon: '#BFD3E6',
  banda: '#3B6EA8', botella: '#5FA8D3', toalla: '#E9B97A', suelo: '#AFC0B9', piel: '#12211E',
};

const rad = (g) => (g * Math.PI) / 180;
const r1 = (n) => Math.round(n * 10) / 10;
const suma = (a, b) => [a[0] + b[0], a[1] + b[1]];
const resta = (a, b) => [a[0] - b[0], a[1] - b[1]];
const por = (a, k) => [a[0] * k, a[1] * k];
const largo = (a) => Math.hypot(a[0], a[1]);
const unir = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];

// Vista de lado (mira a la derecha): 0° = hacia abajo, 90° = hacia delante, 180° = hacia arriba.
const haciaLado = (g, l) => [Math.sin(rad(g)) * l, Math.cos(rad(g)) * l];
// Vista de frente: 0° = abajo; positivo = hacia fuera del cuerpo. D queda a la izquierda del lienzo.
const haciaFrente = (g, l, lado) => [Math.sin(rad(g)) * l * (lado === 'D' ? -1 : 1), Math.cos(rad(g)) * l];

const POSE_PIE = {
  tronco: 0, brazoD: 4, codoD: 4, brazoI: -4, codoI: -4,
  caderaD: 0, rodillaD: 0, caderaI: 0, rodillaI: 0,
};

// --- Esqueleto ---------------------------------------------------

function esqueletoLado(p) {
  const P = [0, 0];
  const t = p.tronco ?? 0;
  const arriba = [Math.sin(rad(t)), -Math.cos(rad(t))];
  const S = suma(P, por(arriba, L.tronco));
  const N = suma(S, por(arriba, L.cuello));
  const H = suma(N, por(arriba, L.cabeza));
  const k = {};
  for (const lado of ['D', 'I']) {
    const brazo = p[`brazo${lado}`] ?? 4;
    const codo = p[`codo${lado}`] ?? brazo;
    const E = suma(S, haciaLado(brazo, L.brazo * (p[`corto${lado}`]?.brazo ?? 1)));
    const W = suma(E, haciaLado(codo, L.antebrazo * (p[`corto${lado}`]?.antebrazo ?? 1)));
    const cadera = p[`cadera${lado}`] ?? 0;
    const rodilla = p[`rodilla${lado}`] ?? cadera;
    const K = suma(P, haciaLado(cadera, L.muslo * (p[`corto${lado}`]?.muslo ?? 1)));
    const A = suma(K, haciaLado(rodilla, L.pierna * (p[`corto${lado}`]?.pierna ?? 1)));
    const pie = p[`pie${lado}`] ?? rodilla + 90;
    const T = suma(A, haciaLado(pie, L.pie));
    const Ta = suma(A, haciaLado(pie + 180, 5));
    Object.assign(k, { [`S${lado}`]: S, [`E${lado}`]: E, [`W${lado}`]: W, [`K${lado}`]: K, [`A${lado}`]: A, [`T${lado}`]: T, [`Ta${lado}`]: Ta, [`P${lado}`]: P });
  }
  return { vista: 'lado', P, S, N, H, mira: [Math.cos(rad(t)), Math.sin(rad(t))], ...k };
}

function esqueletoFrente(p) {
  const P = [0, 0];
  const t = p.tronco ?? 0; // inclinación lateral; positivo hacia la derecha del lienzo
  const arriba = [Math.sin(rad(t)), -Math.cos(rad(t))];
  const ancho = [Math.cos(rad(t)), Math.sin(rad(t))];
  const S = suma(P, por(arriba, L.tronco));
  const N = suma(S, por(arriba, L.cuello));
  const H = suma(N, por(arriba, L.cabeza));
  const k = {};
  const giro = Math.cos(rad(p.giro ?? 0));
  for (const lado of ['D', 'I']) {
    const s = lado === 'D' ? -1 : 1;
    const Sx = suma(S, por(ancho, s * L.hombros * giro));
    const Px = [s * L.caderas, 0];
    const brazo = p[`brazo${lado}`] ?? 6;
    const codo = p[`codo${lado}`] ?? brazo;
    const c = p[`corto${lado}`] || {};
    const E = suma(Sx, haciaFrente(brazo, L.brazo * (c.brazo ?? 1), lado));
    const W = suma(E, haciaFrente(codo, L.antebrazo * (c.antebrazo ?? 1), lado));
    const cadera = p[`cadera${lado}`] ?? 0;
    const rodilla = p[`rodilla${lado}`] ?? cadera;
    const K = suma(Px, haciaFrente(cadera, L.muslo * (c.muslo ?? 1), lado));
    const A = suma(K, haciaFrente(rodilla, L.pierna * (c.pierna ?? 1), lado));
    const T = suma(A, [s * 9, 2]);
    const Ta = suma(A, [-s * 3, 2]);
    Object.assign(k, { [`S${lado}`]: Sx, [`E${lado}`]: E, [`W${lado}`]: W, [`K${lado}`]: K, [`A${lado}`]: A, [`T${lado}`]: T, [`Ta${lado}`]: Ta, [`P${lado}`]: Px });
  }
  return { vista: 'frente', P, S, N, H, ...k };
}

// Cinemática inversa de dos segmentos: coloca la mano (o el pie) en un punto, doblando hacia `curva`.
function alcanzar(origen, destino, l1, l2, curva = 1) {
  const d = resta(destino, origen);
  const dist = Math.min(largo(d), l1 + l2 - 0.01);
  const base = Math.atan2(d[1], d[0]);
  const a = Math.acos(Math.max(-1, Math.min(1, (l1 * l1 + dist * dist - l2 * l2) / (2 * l1 * dist))));
  const ang = base - curva * a;
  const medio = [origen[0] + Math.cos(ang) * l1, origen[1] + Math.sin(ang) * l1];
  const fin = suma(origen, por(d, dist / largo(d)));
  return [medio, fin];
}

// --- Colocación en el lienzo -------------------------------------

const GIRO = { 'cama-planta': -90, 'suelo-planta': -90, pie: 0, silla: 0, 'suelo-sentado': 0, 'cama-arriba': -90, 'suelo-arriba': -90, 'boca-abajo': 90, 'cama-lado': -90, 'suelo-lado': -90 };
const CAMA_ARRIBA = 196;

function girar([x, y], g) {
  const c = Math.cos(rad(g));
  const s = Math.sin(rad(g));
  return [x * c - y * s, x * s + y * c];
}

function colocar(esq, base, x0, pose = {}) {
  const g = GIRO[base] ?? 0;
  const pts = {};
  for (const [k, v] of Object.entries(esq)) if (Array.isArray(v) && v.length === 2 && typeof v[0] === 'number' && k !== 'mira') pts[k] = girar(v, g);
  let dx = x0;
  let dy;
  if (base === 'pie') {
    const pies = ['AD', 'AI', 'TD', 'TI', 'TaD', 'TaI'].map((k) => pts[k][1]);
    dy = SUELO - 3 - Math.max(...pies);
  } else if (base === 'silla') {
    dy = SUELO - 5 - L.pierna;
  } else if (base === 'suelo-sentado') {
    dy = SUELO - 9;
  } else if (base === 'cama-arriba' || base === 'cama-lado') {
    dy = CAMA_ARRIBA - (base === 'cama-lado' ? L.caderas + 8 : 9) - (pose.ancla === 'hombros' ? pts.S[1] : 0);
  } else {
    dy = SUELO - (base === 'suelo-lado' ? L.caderas + 8 : 9) - (pose.ancla === 'hombros' ? pts.S[1] : 0);
  }
  if (base === 'cama-planta' || base === 'suelo-planta') dy = 150;
  if (pose.ancla === 'hombros') dx = x0 - pts.S[0] - 90;
  dx += pose.dx ?? 0;
  dy += pose.dy ?? 0;
  for (const k of Object.keys(pts)) pts[k] = [pts[k][0] + dx, pts[k][1] + dy];
  // De pie, «inclina» gira todo el cuerpo alrededor de los tobillos (p. ej., flexiones en la pared).
  if (base === 'pie' && pose.inclina) {
    const eje = unir(pts.AD, pts.AI, 0.5);
    for (const k of Object.keys(pts)) if (!/^(T|Ta)[DI]$/.test(k)) pts[k] = suma(eje, girar(resta(pts[k], eje), pose.inclina));
    for (const l of ['D', 'I']) { pts[`T${l}`] = suma(pts[`A${l}`], [L.pie, 2]); pts[`Ta${l}`] = suma(pts[`A${l}`], [-5, 2]); }
  }
  pts.giro = g;
  pts.vista = esq.vista;
  pts.mira = girar(esq.mira || [1, 0], g);
  return pts;
}

// --- Dibujo ------------------------------------------------------

const linea = (a, b, color, ancho, extra = '') =>
  `<line x1="${r1(a[0])}" y1="${r1(a[1])}" x2="${r1(b[0])}" y2="${r1(b[1])}" stroke="${color}" stroke-width="${ancho}" stroke-linecap="round" ${extra}/>`;
const trazo = (pts, color, ancho, extra = '') =>
  `<polyline points="${pts.map((p) => `${r1(p[0])},${r1(p[1])}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${ancho}" stroke-linecap="round" stroke-linejoin="round" ${extra}/>`;
const circulo = (c, r, relleno, extra = '') => `<circle cx="${r1(c[0])}" cy="${r1(c[1])}" r="${r}" fill="${relleno}" ${extra}/>`;

function brazo(pts, lado, color, ancho) {
  return trazo([pts[`S${lado}`], pts[`E${lado}`], pts[`W${lado}`]], color, ancho) + circulo(pts[`W${lado}`], ancho * 0.55, color);
}
function pierna(pts, lado, color, ancho) {
  const cadera = pts.vista === 'frente' ? pts[`P${lado}`] : pts.P;
  return trazo([cadera, pts[`K${lado}`], pts[`A${lado}`]], color, ancho) + trazo([pts[`Ta${lado}`], pts[`T${lado}`]], color, ancho * 0.7);
}
function tronco(pts, color, ancho) {
  if (pts.vista === 'frente') {
    const hombros = linea(pts.SD, pts.SI, color, ancho);
    const caderas = linea(pts.PD, pts.PI, color, ancho);
    return hombros + caderas + linea(unir(pts.PD, pts.PI, 0.5), unir(pts.SD, pts.SI, 0.5), color, ancho * 1.7) + linea(pts.S, pts.N, color, ancho * 0.7);
  }
  return linea(pts.P, pts.S, color, ancho * 1.5) + linea(pts.S, pts.N, color, ancho * 0.7);
}
function cabeza(pts, color, solido = true) {
  const nariz = pts.vista === 'lado' ? circulo(suma(pts.H, por(pts.mira, L.cabeza - 1)), 3.2, color) : '';
  return circulo(pts.H, L.cabeza, solido ? color : 'none', solido ? '' : `stroke="${color}" stroke-width="3"`) + (solido ? nariz : '');
}

function figura(pts, { fantasma = false, partes = null } = {}) {
  const c = fantasma ? COLOR.fantasma : COLOR.figura;
  const lejos = fantasma ? COLOR.fantasma : COLOR.lejos;
  const g = L.grosor;
  const quiere = (p) => !partes || partes.has(p);
  const ladoLejos = pts.vista === 'lado' ? 'I' : null;
  let s = '';
  // Lo lejano primero, lo cercano encima.
  if (pts.vista === 'lado') {
    if (quiere('piernaI')) s += pierna(pts, 'I', lejos, g * 0.9);
    if (quiere('brazoI')) s += brazo(pts, 'I', lejos, g * 0.8);
  }
  if (quiere('tronco')) s += tronco(pts, c, g) + cabeza(pts, c, !fantasma);
  for (const lado of ['D', 'I']) {
    if (lado === ladoLejos) continue;
    if (quiere(`pierna${lado}`)) s += pierna(pts, lado, c, g);
  }
  for (const lado of ['D', 'I']) {
    if (lado === ladoLejos) continue;
    if (quiere(`brazo${lado}`)) s += brazo(pts, lado, c, g * 0.85);
  }
  return `<g ${fantasma ? 'opacity="0.55"' : ''}>${s}</g>`;
}

// Qué partes cambian entre la pose inicial y la final.
function partesQueCambian(a, b) {
  const cambia = new Set();
  const dif = (k) => Math.abs((a[k] ?? 0) - (b[k] ?? 0)) > 0.5 || JSON.stringify(a[k]) !== JSON.stringify(b[k]);
  for (const lado of ['D', 'I']) {
    if (['brazo', 'codo', 'corto'].some((k) => dif(`${k}${lado}`))) cambia.add(`brazo${lado}`);
    if (['cadera', 'rodilla', 'pie', 'corto'].some((k) => dif(`${k}${lado}`))) cambia.add(`pierna${lado}`);
  }
  if (dif('tronco')) ['tronco', 'brazoD', 'brazoI'].forEach((p) => cambia.add(p));
  if (dif('mano') || dif('manoD') || dif('manoI')) { cambia.add('brazoD'); cambia.add('brazoI'); }
  return cambia;
}

const PUNTA = { brazoD: 'WD', brazoI: 'WI', piernaD: 'TD', piernaI: 'TI', tronco: 'H' };
const PIVOTE = { brazoD: 'SD', brazoI: 'SI', piernaD: 'P', piernaI: 'P', tronco: 'P' };

function flecha(desde, hasta, pivote) {
  const d = largo(resta(hasta, desde));
  if (d < 10) return '';
  const medio = unir(desde, hasta, 0.5);
  const fuera = resta(medio, pivote);
  const n = largo(fuera) || 1;
  const control = suma(medio, por(fuera, (0.28 * d) / n));
  // Se recorta un poco cada extremo para que la flecha no tape la mano o el pie.
  const a = unir(desde, control, 10 / d);
  const b = unir(hasta, control, 12 / d);
  return `<path d="M${r1(a[0])},${r1(a[1])} Q${r1(control[0])},${r1(control[1])} ${r1(b[0])},${r1(b[1])}" fill="none" stroke="${COLOR.mover}" stroke-width="4" stroke-linecap="round" marker-end="url(#punta)"/>`;
}

function flechaCircular(c, r = 16) {
  const a = [c[0] + r, c[1]];
  const b = [c[0], c[1] - r];
  return `<path d="M${r1(a[0])},${r1(a[1])} A${r},${r} 0 1 1 ${r1(b[0])},${r1(b[1])}" fill="none" stroke="${COLOR.mover}" stroke-width="3.5" stroke-linecap="round" marker-end="url(#punta)"/>`;
}

// --- Muebles y material ------------------------------------------

function silla(x, frente = 1) {
  // frente = 1: el asiento se extiende hacia la derecha y el respaldo queda a la izquierda.
  const asiento = SUELO - L.pierna + 1;
  const xr = x;
  const xf = x + frente * 64;
  const m = COLOR.muebleOscuro;
  return [
    linea([xr, asiento], [xf, asiento], m, 7),
    linea([xr, asiento - 70], [xr, SUELO], m, 6),
    linea([xf, asiento], [xf, SUELO], m, 6),
  ].join('');
}
const sillaFrente = (x) => {
  const a = SUELO - L.pierna + 1;
  const m = COLOR.muebleOscuro;
  return linea([x - 38, a], [x + 38, a], m, 7) + linea([x - 34, a], [x - 34, SUELO], m, 6) + linea([x + 34, a], [x + 34, SUELO], m, 6)
    + `<rect x="${x - 34}" y="${a - 84}" width="68" height="50" rx="6" fill="${COLOR.mueble}" opacity="0.7"/>`;
};
const pared = (x, lado = 1) => `<rect x="${lado > 0 ? x : x - 22}" y="20" width="22" height="${SUELO - 20}" fill="${COLOR.mueble}"/>` + linea([lado > 0 ? x : x, 20], [lado > 0 ? x : x, SUELO], COLOR.muebleOscuro, 2);
const cama = (x0 = 40, x1 = 360) =>
  `<rect x="${x0}" y="${CAMA_ARRIBA}" width="${x1 - x0}" height="24" rx="8" fill="${COLOR.colchon}"/>`
  + `<rect x="${x0}" y="${CAMA_ARRIBA + 24}" width="${x1 - x0}" height="12" fill="${COLOR.muebleOscuro}"/>`
  + linea([x0 + 8, CAMA_ARRIBA + 36], [x0 + 8, SUELO], COLOR.muebleOscuro, 7) + linea([x1 - 8, CAMA_ARRIBA + 36], [x1 - 8, SUELO], COLOR.muebleOscuro, 7);
const suelo = () => linea([16, SUELO], [ANCHO - 16, SUELO], COLOR.suelo, 3);
// Cama vista desde arriba: colchón con almohada a la izquierda.
const camaPlanta = () => `<rect x="30" y="78" width="340" height="150" rx="14" fill="${COLOR.colchon}"/><rect x="42" y="112" width="44" height="82" rx="14" fill="${COLOR.cama}"/>`;
const sueloPlanta = () => `<rect x="30" y="78" width="340" height="150" rx="14" fill="${COLOR.cama}" opacity="0.8"/>`;
// Respaldo de una silla visto de frente, delante de la figura.
const respaldoFrente = (x, y) => `<g opacity="0.85">${linea([x - 30, y], [x + 30, y], COLOR.muebleOscuro, 7)}${linea([x - 28, y], [x - 28, SUELO], COLOR.muebleOscuro, 5)}${linea([x + 28, y], [x + 28, SUELO], COLOR.muebleOscuro, 5)}${linea([x - 28, SUELO - L.pierna + 1], [x + 28, SUELO - L.pierna + 1], COLOR.muebleOscuro, 6)}</g>`;

function puntoNombrado(pts, nombre, extras) {
  const mapa = { manoD: 'WD', manoI: 'WI', pieD: 'TD', pieI: 'TI', tobilloD: 'AD', tobilloI: 'AI', rodillaD: 'KD', rodillaI: 'KI', codoD: 'ED', codoI: 'EI', hombroD: 'SD', hombroI: 'SI', cadera: 'P', cuello: 'N' };
  if (Array.isArray(nombre)) return nombre;
  if (mapa[nombre]) return pts[mapa[nombre]];
  return extras[nombre];
}

function material(pts, f, extras) {
  let s = '';
  for (const [a, b] of f.banda || []) {
    const p = puntoNombrado(pts, a, extras);
    const q = puntoNombrado(pts, b, extras);
    if (p && q && largo(resta(p, q)) < 8) s += `<ellipse cx="${r1(p[0] + 4)}" cy="${r1(p[1])}" rx="7" ry="13" fill="none" stroke="${COLOR.banda}" stroke-width="4"/>`;
    else if (p && q) s += linea(p, q, COLOR.banda, 4);
  }
  for (const m of f.botella || []) {
    const p = puntoNombrado(pts, m, extras);
    if (p) s += `<rect x="${r1(p[0] - 6)}" y="${r1(p[1] - 15)}" width="12" height="26" rx="4" fill="${COLOR.botella}" stroke="${COLOR.figura}" stroke-width="1.5"/>`;
  }
  for (const t of f.toalla || []) {
    if (Array.isArray(t)) {
      const p = puntoNombrado(pts, t[0], extras);
      const q = puntoNombrado(pts, t[1], extras);
      if (p && q) s += linea(p, q, COLOR.toalla, 9);
    } else {
      const p = puntoNombrado(pts, t, extras);
      if (p) s += circulo(p, 9, COLOR.toalla, `stroke="${COLOR.figura}" stroke-width="1"`);
    }
  }
  return s;
}

// Zona que trabaja: un halo amarillo sobre el segmento.
function zona(pts, nombres) {
  const seg = {
    muslo: ['P', 'KD'], musloI: ['P', 'KI'], pantorrilla: ['KD', 'AD'], brazo: ['SD', 'ED'], antebrazo: ['ED', 'WD'],
    tronco: ['P', 'S'], abdomen: ['P', 'S', 0.55], hombro: ['SD'], gluteo: ['P'], pecho: ['S', 'P', 0.35], pelvis: ['P'],
  };
  return (nombres || []).map((n) => {
    const z = seg[n];
    if (!z) return '';
    if (z.length === 1) return circulo(pts[z[0]] || pts.P, 15, COLOR.zona, 'opacity="0.55"');
    const a = pts[z[0]] || pts.P;
    const b = z[2] ? unir(pts[z[0]], pts[z[1]], z[2]) : pts[z[1]];
    return linea(a, b, COLOR.zona, 26, 'opacity="0.55"');
  }).join('');
}

function aire(pts, sentido) {
  const boca = suma(pts.H, por(pts.mira, L.cabeza + 6));
  const lejos = suma(boca, por(pts.mira, 30));
  const [a, b] = sentido === 'entra' ? [lejos, boca] : [boca, lejos];
  return `<path d="M${r1(a[0])},${r1(a[1])} L${r1(b[0])},${r1(b[1])}" stroke="${COLOR.banda}" stroke-width="3" stroke-dasharray="5 5" marker-end="url(#punta-aire)"/>`;
}

// --- Vistas de detalle: mano y pie --------------------------------

const DEDOS = { recta: [0, 0, 0], gancho: [0, 95, 80], puno: [90, 95, 80], nudillos: [85, 0, 0], abierta: [-10, 0, 0] };

function manoLado(cx, cy, estado, color) {
  // Palma vertical vista de lado; los dedos salen hacia arriba y se doblan hacia la derecha.
  const [a1, a2, a3] = DEDOS[estado] || DEDOS.recta;
  let s = `<rect x="${cx - 13}" y="${cy}" width="26" height="46" rx="10" fill="${color}"/>`;
  let p = [cx + 4, cy + 4];
  let ang = 180;
  const pts = [p];
  for (const [l, a] of [[24, a1], [16, a2], [13, a3]]) { ang -= a; p = suma(p, haciaLado(ang, l)); pts.push(p); }
  s += trazo(pts, color, 12);
  s += trazo([[cx + 10, cy + 22], suma([cx + 10, cy + 22], haciaLado(estado === 'puno' ? 60 : 140, 18))], color, 11);
  return s;
}

function manoPalma(cx, cy, estado, color) {
  // Palma de frente, dedos hacia arriba, pulgar a la izquierda.
  const base = [-18, -6, 6, 18];
  const largos = [30, 36, 34, 26];
  const abanico = estado === 'separada' || estado === 'abierta' ? 11 : 1.5;
  let s = `<rect x="${cx - 26}" y="${cy}" width="52" height="54" rx="16" fill="${color}"/>`;
  const opone = { 'pulgar-indice': 0, 'pulgar-menique': 3 }[estado];
  const raiz = [cx - 22, cy + 38];
  if (estado === 'puno') {
    // Puño: los dedos se doblan sobre la palma (solo asoman los nudillos) y el pulgar los cruza.
    base.forEach((x) => { s += circulo([cx + x, cy + 4], 7, color); });
    return s + linea(raiz, [cx + 8, cy + 18], '#F4F7F6', 16) + linea(raiz, [cx + 8, cy + 18], color, 11);
  }
  base.forEach((x, k) => {
    const pie = [cx + x, cy + 4];
    if (k === opone) {
      const punta = [cx + x * 0.5 - 6, cy - 4];
      s += linea(pie, punta, color, 10);
      return;
    }
    const g = 180 - (k - 1.5) * abanico;
    s += linea(pie, suma(pie, haciaFrente(g, largos[k], 'I')), color, 10);
  });
  const pulgar = opone !== undefined
    ? [cx + base[opone] * 0.5 - 8, cy - 2]
    : estado === 'cruza' ? [cx + 16, cy + 24]
      : estado === 'separada' || estado === 'abierta' ? [cx - 48, cy + 6] : [cx - 32, cy + 14];
  s += trazo([raiz, unir(raiz, pulgar, 0.5), pulgar], '#F4F7F6', 16) + trazo([raiz, unir(raiz, pulgar, 0.5), pulgar], color, 11);
  return s;
}

function pieDetalle(cx, cy, f, color) {
  // Pierna vertical, tobillo y pie de lado; `tobillo` positivo sube la punta.
  const A = [cx, cy];
  let s = linea([cx, cy - 90], A, color, 15);
  const ang = 90 + (f.tobillo ?? 0);
  const T = suma(A, haciaLado(180 - ang, 46));
  s += trazo([suma(A, [-8, 4]), A, T], color, 13);
  if (f.dedos === 'encogidos') s += trazo([T, suma(T, haciaLado(180 - ang + 70, 10))], color, 9);
  if (f.dedos === 'separados') s += [-6, 0, 6].map((d) => linea(T, suma(T, [10, d]), color, 4)).join('');
  return s;
}

function detalle(f) {
  const ini = f.ini || {};
  const fin = f.fin || {};
  let s = '';
  if (f.detalle === 'mano') {
    const dibujar = f.vistaMano === 'palma' ? manoPalma : manoLado;
    const grande = (x, y, contenido) => `<g transform="translate(${x} ${y}) scale(1.6) translate(${-x} ${-y})">${contenido}</g>`;
    s += grande(105, 130, dibujar(105, 110, ini.mano, COLOR.fantasma)) + grande(295, 130, dibujar(295, 110, fin.mano, COLOR.figura));
    s += `<path d="M172,150 L222,150" stroke="${COLOR.mover}" stroke-width="5" stroke-linecap="round" marker-end="url(#punta)"/>`;
  } else if (f.detalle === 'pie') {
    if (f.circulo) {
      s += pieDetalle(190, 170, fin, COLOR.figura) + flechaCircular([236, 166], 22);
    } else if (f.lados) {
      // Vista de frente del pie: la punta va hacia dentro y hacia fuera.
      s += linea([200, 60], [200, 170], COLOR.figura, 15);
      for (const [g, c] of [[-28, COLOR.fantasma], [28, COLOR.fantasma], [0, COLOR.figura]]) s += linea([200, 176], suma([200, 176], haciaFrente(180 - g, 0.01, 'I')), c, 0) + `<ellipse cx="${200 + g * 1.4}" cy="196" rx="18" ry="12" fill="${c}" transform="rotate(${g} 200 176)"/>`;
      s += `<path d="M150,230 Q200,256 250,230" fill="none" stroke="${COLOR.mover}" stroke-width="4" marker-end="url(#punta)"/><path d="M250,230 Q200,256 150,230" fill="none" stroke="${COLOR.mover}" stroke-width="4" marker-end="url(#punta)"/>`;
    } else {
      s += pieDetalle(170, 190, ini, COLOR.fantasma) + pieDetalle(170, 190, fin, COLOR.figura);
      const a = suma([170, 190], haciaLado(180 - (90 + (ini.tobillo ?? 0)), 52));
      const b = suma([170, 190], haciaLado(180 - (90 + (fin.tobillo ?? 0)), 52));
      s += flecha(a, b, [170, 190]);
    }
    // Material en las vistas de detalle del pie.
    if (f.banda) s += f.lados ? linea([182, 200], [60, 212], COLOR.banda, 5) : linea([200, 200], [330, 120], COLOR.banda, 5);
    if (f.toalla) s += `<rect x="120" y="232" width="200" height="14" rx="7" fill="${COLOR.toalla}"/>`;
    if (f.letras) s += `<text x="270" y="110" font-family="Atkinson Hyperlegible, sans-serif" font-size="34" font-weight="700" fill="${COLOR.mover}">A B C</text>`;
  }
  return s;
}

// --- Composición -------------------------------------------------

const DEFS = `<defs>
  <marker id="punta" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${COLOR.mover}"/></marker>
  <marker id="punta-aire" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${COLOR.banda}"/></marker>
</defs>`;

function poseCompleta(base, p) {
  const defecto = {
    silla: { caderaD: 90, rodillaD: 0, caderaI: 90, rodillaI: 0, brazoD: 8, codoD: 30, brazoI: 4, codoI: 26 },
    'suelo-sentado': { caderaD: 90, rodillaD: 90, caderaI: 90, rodillaI: 90, brazoD: 10, codoD: 30, brazoI: 6, codoI: 26 },
  }[base] || POSE_PIE;
  const frenteSilla = base === 'silla' && p.__vista === 'frente'
    ? { caderaD: 8, rodillaD: 0, caderaI: 8, rodillaI: 0, cortoD: { muslo: 0.18 }, cortoI: { muslo: 0.18 }, brazoD: 8, codoD: 8, brazoI: 8, codoI: 8 } : {};
  const { __vista, ...resto } = p;
  return { ...defecto, ...frenteSilla, ...resto };
}

// Ajusta brazos o piernas para que la mano o el pie toquen un punto (respaldo, pared, suelo…).
function aplicarAlcances(pts, f, pose, extras) {
  for (const [parte, objetivo] of Object.entries(pose.alcanza || {})) {
    const destino = puntoNombrado(pts, objetivo, extras);
    if (!destino) continue;
    const lado = parte.slice(-1);
    if (parte.startsWith('mano')) {
      let [E, W] = alcanzar(pts[`S${lado}`], destino, L.brazo, L.antebrazo, f.codoHacia ?? -1);
      if (pts.vista === 'frente') {
        // De frente, el codo siempre hacia fuera del cuerpo.
        const [E2, W2] = alcanzar(pts[`S${lado}`], destino, L.brazo, L.antebrazo, -(f.codoHacia ?? -1));
        if (Math.abs(E2[0] - pts.P[0]) > Math.abs(E[0] - pts.P[0])) [E, W] = [E2, W2];
      }
      pts[`E${lado}`] = E; pts[`W${lado}`] = W;
    } else if (parte.startsWith('pie')) {
      const origen = pts.vista === 'frente' ? pts[`P${lado}`] : pts.P;
      const [K, A] = alcanzar(origen, destino, L.muslo, L.pierna, f.rodillaHacia ?? 1);
      pts[`K${lado}`] = K; pts[`A${lado}`] = A;
      pts[`T${lado}`] = suma(A, [L.pie, 0]); pts[`Ta${lado}`] = suma(A, [-5, 0]);
    }
  }
}

function escena(f) {
  const base = f.base || 'pie';
  const vista = f.vista || 'lado';
  const x0 = f.x ?? (base === 'cama-planta' || base === 'suelo-planta' ? 210 : base === 'cama-arriba' || base === 'suelo-arriba' ? 230 : base === 'boca-abajo' ? 150 : base === 'cama-lado' || base === 'suelo-lado' ? 220 : base === 'silla' ? 180 : base === 'suelo-sentado' ? 130 : 180);
  const esq = vista === 'frente' ? esqueletoFrente : esqueletoLado;
  const pIni = poseCompleta(base, { __vista: vista, ...(f.ini || {}) });
  const pFin = poseCompleta(base, { __vista: vista, ...(f.ini || {}), ...(f.fin || {}) });
  const ini = colocar(esq(pIni), base, x0, pIni);
  const fin = colocar(esq(pFin), base, x0, pFin);

  // Puntos de apoyo con nombre: respaldo de la silla, pared…
  const asiento = SUELO - L.pierna + 1;
  const xr = (f.sillaX ?? x0 + 46);
  const extras = {
    respaldo: [xr, asiento - 70], asiento: [x0 + 30, asiento], suelo: [x0 + 40, SUELO],
    pared: [f.paredX ?? x0 + 92, ini.S[1] + 6], paredAlta: [f.paredX ?? x0 + 92, ini.S[1] - 50], paredBaja: [f.paredX ?? x0 + 92, ini.S[1] + 30],
    sueloD: [x0 + 46, SUELO - 4], sueloI: [x0 + 36, SUELO - 4], cama: [x0 + 60, CAMA_ARRIBA],
    entreRodillas: unir(fin.KD, fin.KI, 0.5), muslos: unir(fin.KD, fin.P, 0.5),
    respaldoAtras: [x0 - 30, ini.S[1] + 14], pataSilla: [x0 + 34, SUELO - 6],
    respaldoFD: [x0 - 20, SUELO - 118], respaldoFI: [x0 + 20, SUELO - 118],
    // Para la toalla enrollada debajo de una articulación (tumbado).
    bajoRodillaD: [ini.KD[0], ini.KD[1] + 13], bajoTobilloD: [ini.AD[0], ini.AD[1] + 11], bajoAntebrazoD: suma(unir(ini.ED, ini.WD, 0.5), [0, 11]),
    bajoEspalda: suma(unir(ini.P, ini.S, 0.7), [0, 12]),
    // Boca abajo: manos en el suelo bajo los hombros, o antebrazos apoyados por delante.
    sueloBajoHombro: [ini.S[0] + 4, SUELO - 5], sueloDelanteHombro: [ini.S[0] + 44, SUELO - 5],
  };
  aplicarAlcances(ini, f, pIni, extras);
  aplicarAlcances(fin, f, pFin, extras);
  // «fijar»: manos o pies que no se mueven entre el inicio y el final (pies en la cama en el puente…).
  for (const nombre of f.fijar || []) {
    const lado = nombre.slice(-1);
    if (nombre.startsWith('pie')) {
      const origen = fin.vista === 'frente' ? fin[`P${lado}`] : fin.P;
      const [K, A] = alcanzar(origen, ini[`A${lado}`], L.muslo, L.pierna, f.rodillaHacia ?? 1);
      fin[`K${lado}`] = K; fin[`A${lado}`] = A; fin[`T${lado}`] = ini[`T${lado}`]; fin[`Ta${lado}`] = ini[`Ta${lado}`];
    } else {
      const [E, W] = alcanzar(fin[`S${lado}`], ini[`W${lado}`], L.brazo, L.antebrazo, f.codoHacia ?? -1);
      fin[`E${lado}`] = E; fin[`W${lado}`] = W;
    }
  }
  // Tras ajustar, los puntos que dependen de la pose final se recalculan.
  extras.entreRodillas = unir(fin.KD, fin.KI, 0.5);

  let fondo = '';
  if (base === 'pie' || base === 'silla') fondo += suelo();
  if (base === 'suelo-sentado' || base === 'suelo-arriba' || base === 'boca-abajo' || base === 'suelo-lado') fondo += suelo();
  if (base === 'cama-arriba' || base === 'cama-lado') fondo += cama();
  if (base === 'cama-planta') fondo += camaPlanta();
  if (base === 'suelo-planta') fondo += sueloPlanta();
  for (const m of f.apoyos || []) {
    if (m === 'silla' && base === 'silla') fondo += vista === 'frente' ? sillaFrente(x0) : silla(x0 - 30, 1);
    if (m === 'silla-delante') fondo += silla(xr, 1);
    if (m === 'silla-lado' && vista === 'frente') fondo += sillaFrente(f.sillaX ?? x0 + 110);
    if (m === 'pared') fondo += pared(f.paredX ?? x0 + 92);
    if (m === 'pared-detras') fondo += pared(f.paredX ?? x0 - 30, -1);
    if (m === 'silla-detras') fondo += silla(x0 - 30, 1);
    // Vista de frente con la espalda contra la pared: la pared queda detrás, como fondo.
    if (m === 'pared-fondo') fondo += `<rect x="${x0 - 80}" y="24" width="160" height="${SUELO - 24}" rx="4" fill="${COLOR.mueble}" opacity="0.55"/>`;
  }
  const delante = (f.apoyos || []).includes('silla-frente') ? respaldoFrente(x0, SUELO - 118) : '';

  const cambian = partesQueCambian(pIni, pFin);
  const desplaza = largo(resta(ini.H, fin.H)) > 6;
  if (desplaza) ['tronco', 'brazoD', 'brazoI', 'piernaD', 'piernaI'].forEach((p) => cambian.add(p));
  if ((pIni.inclina ?? 0) !== (pFin.inclina ?? 0)) cambian.add('tronco');
  let s = fondo;
  s += zona(fin, f.zona);
  if (cambian.size) s += figura(ini, { fantasma: true, partes: cambian });
  s += material(fin, f, extras);
  s += figura(fin);
  s += delante;
  if (f.giro) {
    const y = fin.S[1] - 6;
    s += `<path d="M${r1(fin.S[0] - 34)},${r1(y + 8)} Q${r1(fin.S[0])},${r1(y - 26)} ${r1(fin.S[0] + 34)},${r1(y + 8)}" fill="none" stroke="${COLOR.mover}" stroke-width="4" stroke-linecap="round" marker-end="url(#punta)"/>`;
  }
  // Subir de puntillas: el cambio es pequeño, así que la flecha va junto a los talones.
  if ((f.flechas || []).includes('talones')) {
    const t = unir(fin.TaD, fin.TaI, 0.5);
    s += `<path d="M${r1(t[0] - 16)},${r1(t[1] + 2)} L${r1(t[0] - 16)},${r1(t[1] - 30)}" stroke="${COLOR.mover}" stroke-width="4" stroke-linecap="round" marker-end="url(#punta)"/>`;
  }
  const conFlecha = f.flechas ? new Set(f.flechas.filter((x) => PUNTA[x])) : cambian;
  for (const p of conFlecha) if (PUNTA[p] && (cambian.has(p) || f.flechas)) s += flecha(ini[PUNTA[p]], fin[PUNTA[p]], (p === 'tronco' && desplaza ? unir(fin.AD, fin.AI, 0.5) : fin[PIVOTE[p]]) || fin.P);
  for (const c of f.circulo || []) s += typeof c === 'object' ? flechaCircular(puntoNombrado(fin, c.en, extras), c.r) : flechaCircular(puntoNombrado(fin, c, extras));
  if (f.aire) s += aire(fin, f.aire);
  return s;
}

// Devuelve el SVG completo. `titulo` da el nombre accesible.
export function dibujar(ficha, titulo = '') {
  const cuerpo = ficha.detalle ? detalle(ficha) : escena(ficha);
  return `<svg class="ilustracion" viewBox="0 0 ${ANCHO} ${ALTO}" role="img" aria-label="${titulo ? `Ilustración: ${titulo.replace(/"/g, '')}. ` : ''}Posición inicial en gris, final en color.">${DEFS}${cuerpo}</svg>`;
}

export const _interno = { esqueletoLado, esqueletoFrente, alcanzar, partesQueCambian };
