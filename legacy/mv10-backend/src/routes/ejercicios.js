// ============================================================
//  Rutas de ejercicios:  /api/ejercicios
//    GET /  -> catálogo de ejercicios
// ============================================================
import { Router } from 'express';
import { query } from '../db.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { rows } = await query(
      `select id, nombre, descripcion, grupo_muscular, requiere_material, media_url
       from ejercicios
       order by nombre`
    );
    res.json(rows);
  } catch (e) {
    console.error('Error en GET /ejercicios:', e);
    res.status(500).json({ error: 'Error del servidor.' });
  }
});

export default router;
