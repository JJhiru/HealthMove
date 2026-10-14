// ============================================================
//  Rutas de autenticación:  /api/auth
//    POST /register  -> crea una cuenta (profesor)
//    POST /login     -> devuelve un token JWT
// ============================================================
import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { query } from '../db.js';

const router = Router();

// --- Registro ---
router.post('/register', async (req, res) => {
  const { email, password, nombre } = req.body || {};

  if (!email || !password || !nombre) {
    return res.status(400).json({ error: 'Faltan email, contraseña o nombre.' });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: 'La contraseña debe tener al menos 6 caracteres.' });
  }

  try {
    // Hasheamos la contraseña — jamás se guarda en texto plano.
    const hash = await bcrypt.hash(password, 10);

    const { rows } = await query(
      `insert into usuarios (email, password_hash, nombre)
       values ($1, $2, $3)
       returning id, email, nombre`,
      [email.toLowerCase().trim(), hash, nombre.trim()]
    );

    res.status(201).json(rows[0]);
  } catch (e) {
    // 23505 = violación de índice único (email ya existe)
    if (e.code === '23505') {
      return res.status(409).json({ error: 'Ese email ya está registrado.' });
    }
    console.error('Error en /register:', e);
    res.status(500).json({ error: 'Error del servidor.' });
  }
});

// --- Login ---
router.post('/login', async (req, res) => {
  const { email, password } = req.body || {};

  try {
    const { rows } = await query(
      'select * from usuarios where email = $1',
      [(email || '').toLowerCase().trim()]
    );
    const usuario = rows[0];

    // Mismo mensaje si el email no existe o la contraseña falla (no revelar cuál).
    const ok = usuario && (await bcrypt.compare(password || '', usuario.password_hash));
    if (!ok) {
      return res.status(401).json({ error: 'Email o contraseña incorrectos.' });
    }

    const token = jwt.sign(
      { sub: usuario.id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      token,
      usuario: { id: usuario.id, email: usuario.email, nombre: usuario.nombre },
    });
  } catch (e) {
    console.error('Error en /login:', e);
    res.status(500).json({ error: 'Error del servidor.' });
  }
});

export default router;
