// ============================================================
//  Middleware de autenticación
//  Protege rutas que requieren estar logueado. Lee el token
//  "Authorization: Bearer <token>" y verifica que sea válido.
// ============================================================
import jwt from 'jsonwebtoken';

export function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ error: 'Necesitas iniciar sesión.' });
  }

  try {
    // req.user quedará disponible en las rutas: { sub: <id usuario>, email }
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: 'Sesión inválida o expirada.' });
  }
}
