# HealthMove

PWA con rutinas breves (10–20 min) de movimiento para personas con restricciones o dificultades de
movilidad ya identificadas. Las rutinas se generan con reglas explícitas sobre un catálogo
previamente definido. HealthMove no diagnostica ni sustituye a profesionales sanitarios.

Proyecto final de CS50x. Evoluciona de la maqueta MV10.

> Estado: en desarrollo. El README definitivo de CS50x se escribirá al final.

## Estructura

```
HealthMove/
├── docs/especificacion-v1.md   Decisiones funcionales (fuente de verdad)
├── public/                     PWA (copiada de MV10; pendiente de adaptar a local-first)
├── legacy/mv10-backend/        Backend de MV10 archivado (Express, PostgreSQL, JWT); no se usa en v1
└── .claude/skills/             Skills de apoyo al desarrollo
```

`public/app.js` todavía llama a la API de MV10 (`/api/...`), así que no funciona sin backend hasta
que se adapte.
