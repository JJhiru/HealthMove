// ============================================================
//  Rutas de rutinas:  /api/rutinas
//    GET  /            -> rutinas oficiales (públicas)
//    GET  /mias        -> rutinas personalizadas del usuario (login)
//    GET  /favoritas   -> rutinas que el usuario guardó (login)
//    GET  /:id         -> una rutina + sus ejercicios en orden
//    POST /            -> crear rutina personalizada (login)
//    PUT  /:id         -> editar una rutina propia (login)
//    DELETE /:id       -> borrar una rutina propia (login)
//    POST   /:id/favorito -> guardar en favoritos (login)
//    DELETE /:id/favorito -> quitar de favoritos (login)
// ============================================================
import { Router } from 'express';
import { pool, query } from '../db.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

// --- Rutinas oficiales (visibles para todos, sin login) ---
router.get('/', async (req, res) => {
  try {
    const { rows } = await query(
      `select id, nombre, descripcion, duracion_min, intensidad, material
       from rutinas
       where owner_id is null
       order by duracion_min`
    );
    res.json(rows);
  } catch (e) {
    console.error('Error en GET /rutinas:', e);
    res.status(500).json({ error: 'Error del servidor.' });
  }
});

// --- Mis rutinas personalizadas (requiere login) ---
router.get('/mias', requireAuth, async (req, res) => {
  try {
    const { rows } = await query(
      `select id, nombre, descripcion, duracion_min, intensidad, material
       from rutinas
       where owner_id = $1
       order by actualizado_en desc`,
      [req.user.sub]
    );
    res.json(rows);
  } catch (e) {
    console.error('Error en GET /rutinas/mias:', e);
    res.status(500).json({ error: 'Error del servidor.' });
  }
});

// --- Mis favoritas (requiere login) ---
router.get('/favoritas', requireAuth, async (req, res) => {
  try {
    const { rows } = await query(
      `select r.id, r.nombre, r.descripcion, r.duracion_min, r.intensidad, r.material
       from favoritos f
       join rutinas r on r.id = f.rutina_id
       where f.usuario_id = $1
       order by f.creado_en desc`,
      [req.user.sub]
    );
    res.json(rows);
  } catch (e) {
    console.error('Error en GET /rutinas/favoritas:', e);
    res.status(500).json({ error: 'Error del servidor.' });
  }
});

// --- Una rutina con sus ejercicios (lo que consume el cronómetro) ---
router.get('/:id', async (req, res) => {
  try {
    const { rows: rutina } = await query(
      'select id, nombre, descripcion, duracion_min, intensidad, material, owner_id from rutinas where id = $1',
      [req.params.id]
    );
    if (!rutina[0]) return res.status(404).json({ error: 'Rutina no encontrada.' });

    const { rows: ejercicios } = await query(
      `select re.posicion, re.ejercicio_id, e.nombre, re.series, re.trabajo_seg, re.reps, re.descanso_seg
       from rutina_ejercicios re
       join ejercicios e on e.id = re.ejercicio_id
       where re.rutina_id = $1
       order by re.posicion`,
      [req.params.id]
    );

    res.json({ ...rutina[0], ejercicios });
  } catch (e) {
    console.error('Error en GET /rutinas/:id:', e);
    res.status(500).json({ error: 'Error del servidor.' });
  }
});

// --- Crear rutina personalizada (requiere login) ---
// Body esperado:
// { nombre, descripcion?, duracion_min, intensidad?, material?,
//   ejercicios: [ { ejercicio_id, posicion, series, trabajo_seg?, reps?, descanso_seg? } ] }
router.post('/', requireAuth, async (req, res) => {
  const { nombre, descripcion, duracion_min, intensidad, material, ejercicios } = req.body || {};

  if (!nombre || !duracion_min || !Array.isArray(ejercicios) || ejercicios.length === 0) {
    return res.status(400).json({ error: 'Faltan nombre, duración o ejercicios.' });
  }

  // Usamos una transacción: o se guarda TODO, o nada.
  const client = await pool.connect();
  try {
    await client.query('begin');

    const { rows } = await client.query(
      `insert into rutinas (nombre, descripcion, duracion_min, intensidad, material, owner_id)
       values ($1, $2, $3, coalesce($4::intensidad, 'media'), coalesce($5::material_tipo, 'ninguno'), $6)
       returning id`,
      [nombre, descripcion || null, duracion_min, intensidad, material, req.user.sub]
    );
    const rutinaId = rows[0].id;

    await insertarEjercicios(client, rutinaId, ejercicios);

    await client.query('commit');
    res.status(201).json({ id: rutinaId });
  } catch (e) {
    await client.query('rollback');
    console.error('Error creando rutina:', e);
    res.status(500).json({ error: 'No se pudo crear la rutina.' });
  } finally {
    client.release();
  }
});

// --- Editar rutina propia (requiere login) ---
// Mismo body que al crear. Reemplaza los datos y la lista de ejercicios.
router.put('/:id', requireAuth, async (req, res) => {
  const { nombre, descripcion, duracion_min, intensidad, material, ejercicios } = req.body || {};

  if (!nombre || !duracion_min || !Array.isArray(ejercicios) || ejercicios.length === 0) {
    return res.status(400).json({ error: 'Faltan nombre, duración o ejercicios.' });
  }

  const client = await pool.connect();
  try {
    await client.query('begin');

    // Solo se puede editar si la rutina es del usuario (las oficiales no).
    const { rowCount } = await client.query(
      `update rutinas
       set nombre = $1, descripcion = $2, duracion_min = $3,
           intensidad = coalesce($4::intensidad, 'media'),
           material = coalesce($5::material_tipo, 'ninguno')
       where id = $6 and owner_id = $7`,
      [nombre, descripcion || null, duracion_min, intensidad, material, req.params.id, req.user.sub]
    );
    if (!rowCount) {
      await client.query('rollback');
      return res.status(404).json({ error: 'Rutina no encontrada o no es tuya.' });
    }

    await client.query('delete from rutina_ejercicios where rutina_id = $1', [req.params.id]);
    await insertarEjercicios(client, req.params.id, ejercicios);

    await client.query('commit');
    res.json({ id: req.params.id });
  } catch (e) {
    await client.query('rollback');
    console.error('Error editando rutina:', e);
    res.status(500).json({ error: 'No se pudo guardar la rutina.' });
  } finally {
    client.release();
  }
});

// --- Borrar rutina propia (requiere login) ---
// Sus ejercicios y favoritos se borran solos (on delete cascade).
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const { rowCount } = await query(
      'delete from rutinas where id = $1 and owner_id = $2',
      [req.params.id, req.user.sub]
    );
    if (!rowCount) return res.status(404).json({ error: 'Rutina no encontrada o no es tuya.' });
    res.json({ ok: true });
  } catch (e) {
    console.error('Error borrando rutina:', e);
    res.status(500).json({ error: 'No se pudo borrar la rutina.' });
  }
});

// --- Guardar en favoritos (requiere login) ---
router.post('/:id/favorito', requireAuth, async (req, res) => {
  try {
    await query(
      `insert into favoritos (usuario_id, rutina_id)
       values ($1, $2)
       on conflict do nothing`,
      [req.user.sub, req.params.id]
    );
    res.status(201).json({ ok: true });
  } catch (e) {
    console.error('Error añadiendo favorito:', e);
    res.status(500).json({ error: 'Error del servidor.' });
  }
});

// --- Quitar de favoritos (requiere login) ---
router.delete('/:id/favorito', requireAuth, async (req, res) => {
  try {
    await query(
      'delete from favoritos where usuario_id = $1 and rutina_id = $2',
      [req.user.sub, req.params.id]
    );
    res.json({ ok: true });
  } catch (e) {
    console.error('Error quitando favorito:', e);
    res.status(500).json({ error: 'Error del servidor.' });
  }
});

// Inserta la lista de ejercicios de una rutina (dentro de una transacción).
async function insertarEjercicios(client, rutinaId, ejercicios) {
  for (const ej of ejercicios) {
    await client.query(
      `insert into rutina_ejercicios
         (rutina_id, ejercicio_id, posicion, series, trabajo_seg, reps, descanso_seg)
       values ($1, $2, $3, coalesce($4,1), $5, $6, coalesce($7,0))`,
      [rutinaId, ej.ejercicio_id, ej.posicion, ej.series, ej.trabajo_seg || null, ej.reps || null, ej.descanso_seg]
    );
  }
}

export default router;
