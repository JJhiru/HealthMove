# EF Rutinas 🏃

App de rutinas de educación física — rutinas rápidas (menos de 20 min) pensadas para clases de colegio en Ecuador. Backend en **Node + Express + PostgreSQL**, frontend **PWA** instalable y offline. Desplegable en **Railway**.

## Qué incluye

- **Login** de docentes (contraseñas hasheadas con bcrypt, tokens JWT).
- **Rutinas oficiales** (visibles para todos) y **rutinas personalizadas** por usuario.
- **Ejercicios** reutilizables y **favoritos**.
- **PWA** con cronómetro que avanza ejercicio por ejercicio, y funciona sin internet.

## Estructura

```
MV10/
├── schema.sql          Esquema de la base de datos (PostgreSQL)
├── package.json
├── .env.example        Plantilla de variables (copia a .env)
├── scripts/
│   └── init-db.js      Aplica schema.sql a la base de datos
├── src/
│   ├── server.js       Servidor Express (API + sirve el PWA)
│   ├── db.js           Conexión a PostgreSQL
│   ├── middleware/
│   │   └── auth.js     Protección de rutas con JWT
│   └── routes/
│       ├── auth.js         /api/auth  (register, login)
│       ├── rutinas.js      /api/rutinas
│       └── ejercicios.js   /api/ejercicios
└── public/             Frontend PWA (index.html, app.js, sw.js, ...)
```

## Correr en local

Requiere Node 18+ y un PostgreSQL corriendo.

```bash
npm install
cp .env.example .env      # y edita los valores (DATABASE_URL, JWT_SECRET)
npm run init-db           # crea las tablas (una sola vez)
npm run dev               # arranca en http://localhost:3000
```

## Desplegar en Railway

1. **Sube el repo a GitHub** (ya está listo).
2. En [railway.app](https://railway.app): **New Project → Deploy from GitHub repo** → elige `MV10`.
3. Añade la base de datos: **New → Database → PostgreSQL**. Railway crea la variable `DATABASE_URL`.
4. En el servicio de la app, pestaña **Variables**, agrega:
   - `DATABASE_URL` = `${{ Postgres.DATABASE_URL }}`  (referencia al plugin)
   - `JWT_SECRET` = una cadena larga y aleatoria
   - `PGSSL` = `true`
5. **Inicializa la base de datos** (una vez): copia la `DATABASE_URL` pública de Railway a tu `.env` local y corre `npm run init-db`, **o** pega el contenido de `schema.sql` en el editor de consultas del plugin Postgres de Railway.
6. Railway detecta Node y arranca con `npm start`. Tu app queda en la URL que te da Railway.

## Endpoints principales

| Método | Ruta | Descripción | Login |
|---|---|---|---|
| POST | `/api/auth/register` | Crear cuenta | — |
| POST | `/api/auth/login` | Iniciar sesión (devuelve token) | — |
| GET | `/api/rutinas` | Rutinas oficiales | — |
| GET | `/api/rutinas/:id` | Rutina + ejercicios en orden | — |
| GET | `/api/rutinas/mias` | Mis rutinas personalizadas | ✔ |
| POST | `/api/rutinas` | Crear rutina personalizada | ✔ |
| PUT | `/api/rutinas/:id` | Editar una rutina propia | ✔ |
| DELETE | `/api/rutinas/:id` | Borrar una rutina propia | ✔ |
| GET | `/api/rutinas/favoritas` | Mis favoritas | ✔ |
| POST/DELETE | `/api/rutinas/:id/favorito` | Guardar / quitar favorito | ✔ |
| GET | `/api/ejercicios` | Catálogo de ejercicios | — |

Las rutas con login esperan la cabecera `Authorization: Bearer <token>`.

## Seguridad

- El `.env` **nunca** se sube (está en `.gitignore`). Configura los secretos en Railway.
- Cambia `JWT_SECRET` por un valor propio, largo y aleatorio.
- Recomendación: el login es solo para **docentes**; no guardar datos personales de estudiantes menores.
