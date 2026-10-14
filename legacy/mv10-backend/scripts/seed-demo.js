// ============================================================
//  Carga datos demo: docentes, ejercicios, rutinas y favoritos.
//  Uso:  npm run seed
//  Se puede correr varias veces: no duplica usuarios (email),
//  ejercicios (nombre) ni rutinas (nombre + dueño). Todo va en
//  una transacción: o se guarda todo, o nada.
//  Las contraseñas de los docentes nuevos se generan al azar y
//  se imprimen UNA sola vez: guárdalas.
// ============================================================
import crypto from 'node:crypto';
import bcrypt from 'bcryptjs';
import { pool } from '../src/db.js';

const USUARIOS = [
  { key: 'ana', nombre: 'Ana Pérez', email: 'ana.perez@demo.ec' },
  { key: 'luis', nombre: 'Luis Torres', email: 'luis.torres@demo.ec' },
  { key: 'maria', nombre: 'María Andrade', email: 'maria.andrade@demo.ec' },
];

// [nombre, grupo, requiere_material, descripcion]
const EJERCICIOS = [
  ['Jumping jacks', 'cardio', false, 'Saltar abriendo piernas y brazos, y volver a cerrar.'],
  ['Sentadillas', 'piernas', false, 'Bajar la cadera como para sentarse, espalda recta, y subir.'],
  ['Trote en el sitio', 'cardio', false, 'Trotar sin desplazarse, braceando.'],
  ['Rodillas al pecho', 'cardio', false, 'Trote elevando las rodillas a la altura de la cadera.'],
  ['Burpees', 'cardio', false, 'Sentadilla, plancha, volver a sentadilla y salto.'],
  ['Escaladores', 'core', false, 'En plancha, llevar rodillas al pecho alternando rápido.'],
  ['Plancha', 'core', false, 'Apoyo en antebrazos y puntas de pie, cuerpo recto.'],
  ['Abdominales', 'core', false, 'Tumbado boca arriba, elevar el tronco hacia las rodillas.'],
  ['Superman', 'core', false, 'Boca abajo, elevar brazos y piernas a la vez.'],
  ['Zancadas', 'piernas', false, 'Paso largo al frente bajando la rodilla trasera, alternando.'],
  ['Sentadilla con salto', 'piernas', false, 'Sentadilla terminando en un salto vertical.'],
  ['Salto de rana', 'piernas', false, 'Desde cuclillas, saltar hacia adelante con los dos pies.'],
  ['Puente de glúteo', 'piernas', false, 'Boca arriba con rodillas flexionadas, elevar la cadera.'],
  ['Flexiones de brazos', 'brazos', false, 'Bajar el pecho al suelo y empujar (se puede con rodillas apoyadas).'],
  ['Salto a la cuerda', 'cardio', true, 'Saltar la cuerda a ritmo constante.'],
  ['Estiramiento de isquiotibiales', 'flexibilidad', false, 'Piernas estiradas, llevar las manos hacia los pies.'],
  ['Estiramiento de cuádriceps', 'flexibilidad', false, 'De pie, llevar el talón al glúteo sujetando el tobillo.'],
  ['Respiración profunda', 'flexibilidad', false, 'Inhalar 4 s, sostener 4 s, exhalar 6 s.'],
];

// ejercicios: [nombre, series, trabajo_seg, descanso_seg]
const RUTINAS = [
  // --- Oficiales (owner null) ---
  { owner: null, nombre: 'Calentamiento exprés', intensidad: 'suave', material: 'ninguno',
    descripcion: 'Para arrancar cualquier clase en 5 minutos.',
    ej: [['Trote en el sitio', 2, 45, 15], ['Jumping jacks', 2, 30, 15], ['Estiramiento de isquiotibiales', 2, 30, 10]] },
  { owner: null, nombre: 'Core firme', intensidad: 'media', material: 'ninguno',
    descripcion: 'Abdomen y zona lumbar, todo en el suelo.',
    ej: [['Plancha', 3, 30, 20], ['Abdominales', 3, 40, 20], ['Superman', 3, 30, 20], ['Escaladores', 3, 30, 20]] },
  { owner: null, nombre: 'HIIT 12 minutos', intensidad: 'alta', material: 'ninguno',
    descripcion: 'Intervalos intensos para cursos superiores.',
    ej: [['Burpees', 4, 30, 15], ['Sentadilla con salto', 4, 30, 15], ['Escaladores', 4, 30, 15], ['Rodillas al pecho', 4, 30, 15]] },
  { owner: null, nombre: 'Fuerza sin material', intensidad: 'media', material: 'ninguno',
    descripcion: 'Trabajo de fuerza con el propio peso.',
    ej: [['Flexiones de brazos', 3, 40, 20], ['Zancadas', 3, 45, 20], ['Sentadillas', 3, 45, 20], ['Puente de glúteo', 3, 45, 20], ['Plancha', 3, 40, 20]] },
  { owner: null, nombre: 'Cuerda y coordinación', intensidad: 'alta', material: 'basico',
    descripcion: 'Necesita una cuerda por estudiante o por pareja.',
    ej: [['Salto a la cuerda', 5, 45, 15], ['Salto de rana', 3, 30, 20], ['Jumping jacks', 3, 30, 20]] },
  { owner: null, nombre: 'Vuelta a la calma', intensidad: 'suave', material: 'ninguno',
    descripcion: 'Estiramientos y respiración para cerrar la clase.',
    ej: [['Estiramiento de isquiotibiales', 2, 40, 10], ['Estiramiento de cuádriceps', 2, 40, 10], ['Respiración profunda', 1, 60, 0]] },
  // --- Personalizadas ---
  { owner: 'ana', nombre: 'Juego activo 3ro EGB', intensidad: 'suave', material: 'ninguno',
    descripcion: 'Rutina lúdica para los más pequeños.',
    ej: [['Salto de rana', 3, 30, 20], ['Jumping jacks', 3, 30, 20], ['Trote en el sitio', 2, 60, 20]] },
  { owner: 'ana', nombre: 'Pre-partido de fútbol', intensidad: 'media', material: 'ninguno',
    descripcion: 'Activación antes del partido del recreo.',
    ej: [['Trote en el sitio', 2, 60, 15], ['Rodillas al pecho', 3, 30, 15], ['Zancadas', 3, 40, 15], ['Sentadilla con salto', 2, 30, 20]] },
  { owner: 'luis', nombre: 'Bachillerato full body', intensidad: 'alta', material: 'ninguno',
    descripcion: 'Circuito completo para 2do y 3ro de bachillerato.',
    ej: [['Burpees', 4, 40, 20], ['Flexiones de brazos', 4, 40, 20], ['Zancadas', 4, 45, 15], ['Plancha', 4, 45, 15], ['Escaladores', 3, 40, 20]] },
  { owner: 'maria', nombre: 'Core y postura', intensidad: 'suave', material: 'ninguno',
    descripcion: 'Fortalecer la espalda y mejorar la postura.',
    ej: [['Plancha', 3, 30, 20], ['Puente de glúteo', 3, 45, 15], ['Superman', 3, 30, 20], ['Respiración profunda', 2, 60, 0]] },
  { owner: 'maria', nombre: 'Circuito con cuerda', intensidad: 'media', material: 'basico',
    descripcion: 'Cuerda, piernas y abdomen.',
    ej: [['Salto a la cuerda', 4, 45, 15], ['Sentadillas', 3, 40, 20], ['Abdominales', 3, 40, 20]] },
];

const FAVORITOS = {
  ana: ['Calentamiento exprés', 'Circuito en el patio'],
  luis: ['HIIT 12 minutos', 'Fuerza sin material'],
  maria: ['Vuelta a la calma', 'Core firme'],
};

const c = await pool.connect();
const log = [];
try {
  await c.query('begin');

  // Usuarios
  const uid = {};
  for (const u of USUARIOS) {
    const ex = await c.query('select id from usuarios where email = $1', [u.email]);
    if (ex.rows[0]) { uid[u.key] = ex.rows[0].id; log.push(`usuario ya existía: ${u.email} (contraseña sin cambios)`); continue; }
    const pass = 'EF-' + crypto.randomBytes(6).toString('base64url');
    const hash = await bcrypt.hash(pass, 10);
    const { rows } = await c.query(
      'insert into usuarios (email, password_hash, nombre) values ($1,$2,$3) returning id', [u.email, hash, u.nombre]);
    uid[u.key] = rows[0].id;
    log.push(`usuario creado: ${u.nombre} | ${u.email} | ${pass}`);
  }

  // Ejercicios
  const eid = {};
  let nuevosEj = 0;
  for (const [nombre, grupo, mat, desc] of EJERCICIOS) {
    const ex = await c.query('select id from ejercicios where nombre = $1 limit 1', [nombre]);
    if (ex.rows[0]) { eid[nombre] = ex.rows[0].id; continue; }
    const { rows } = await c.query(
      'insert into ejercicios (nombre, descripcion, grupo_muscular, requiere_material) values ($1,$2,$3,$4) returning id',
      [nombre, desc, grupo, mat]);
    eid[nombre] = rows[0].id; nuevosEj++;
  }
  log.push(`ejercicios nuevos: ${nuevosEj}`);

  // Rutinas
  for (const r of RUTINAS) {
    const owner = r.owner ? uid[r.owner] : null;
    const ex = await c.query('select id from rutinas where nombre = $1 and owner_id is not distinct from $2', [r.nombre, owner]);
    if (ex.rows[0]) { log.push(`rutina ya existía: ${r.nombre}`); continue; }
    const seg = r.ej.reduce((t, [, s, w, d]) => t + s * (w + d), 0);
    const min = Math.ceil(seg / 60);
    const { rows } = await c.query(
      `insert into rutinas (nombre, descripcion, duracion_min, intensidad, material, owner_id)
       values ($1,$2,$3,$4,$5,$6) returning id`, [r.nombre, r.descripcion, min, r.intensidad, r.material, owner]);
    for (const [i, [n, s, w, d]] of r.ej.entries()) {
      await c.query(
        `insert into rutina_ejercicios (rutina_id, ejercicio_id, posicion, series, trabajo_seg, descanso_seg)
         values ($1,$2,$3,$4,$5,$6)`, [rows[0].id, eid[n], i + 1, s, w, d]);
    }
    log.push(`rutina creada: ${r.nombre} (${r.owner ?? 'oficial'}, ${min} min, ${r.ej.length} ejercicios)`);
  }

  // Favoritos
  for (const [k, nombres] of Object.entries(FAVORITOS)) {
    for (const n of nombres) {
      const r = await c.query('select id from rutinas where nombre = $1 and owner_id is null limit 1', [n]);
      if (!r.rows[0]) { log.push(`favorito omitido (no existe): ${n}`); continue; }
      await c.query('insert into favoritos (usuario_id, rutina_id) values ($1,$2) on conflict do nothing', [uid[k], r.rows[0].id]);
    }
  }
  log.push('favoritos asignados');

  await c.query('commit');
} catch (e) {
  await c.query('rollback');
  console.error('ROLLBACK:', e.message);
  process.exitCode = 1;
} finally {
  console.log(log.join('\n'));
  c.release();
  await pool.end();
}
