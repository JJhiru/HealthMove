# Backend de MV10 (archivado)

Código del backend de MV10 conservado como referencia. **HealthMove v1 no lo usa**: la v1 es
local-first (ver `docs/especificacion-v1.md`, §9).

Se copió de `~/proyectos/MV10` (rama `master`, commit `2087ed3`) sin cambios. El `.env` original
**no** se copió.

| Archivo | Qué contiene |
|---|---|
| `src/server.js` | Servidor Express: API en `/api/*` y servidor del PWA |
| `src/db.js` | Conexión a PostgreSQL (`pg`) |
| `src/middleware/auth.js` | Verificación de tokens JWT (`requireAuth`) |
| `src/routes/auth.js` | Registro e inicio de sesión (bcrypt + JWT) |
| `src/routes/rutinas.js` | CRUD de rutinas y favoritos, con transacciones |
| `src/routes/ejercicios.js` | Catálogo de ejercicios |
| `schema.sql` | Esquema PostgreSQL (usuarios, ejercicios, rutinas, rutina_ejercicios, favoritos) |
| `scripts/init-db.js` | Aplica `schema.sql` |
| `scripts/seed-demo.js` | Datos demo de educación física (no válidos para HealthMove) |
| `README-MV10.md` | README original de MV10 |

Cuándo volver a usarlo: si una versión futura necesita cuentas, sincronización entre dispositivos
o un backend para la IA (las claves de API deben vivir en el servidor).
