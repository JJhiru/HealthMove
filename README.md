# HealthMove

PWA con rutinas breves (10–20 min) de movimiento para personas con restricciones o dificultades de
movilidad ya identificadas. Las rutinas se generan con reglas explícitas sobre un catálogo
previamente definido. HealthMove no diagnostica ni sustituye a profesionales sanitarios.

Proyecto final de CS50x. Evoluciona de la maqueta MV10.

> Estado: v1 funcional en desarrollo. El README definitivo de CS50x se escribirá al final.

## Cómo probarla

No necesita servidor propio ni base de datos: basta servir `public/` como archivos estáticos.

```bash
npm test          # valida el catálogo y ejecuta los tests (Node 18+)
npm run servir    # http://localhost:8000
```

Todos los ejercicios del catálogo están todavía **en borrador**, así que sin revisarlos la app
responderá con honestidad que no puede generar una rutina. Para probar con el catálogo sin revisar,
abre `http://localhost:8000/?desarrollo=1`. Aparecerá una franja de aviso. Se sale con "Salir" o
con `?desarrollo=0`.

Si cambias cualquier archivo de `public/`, ejecuta `npm run version-sw` para que el service worker
lo precachee y los usuarios reciban la versión nueva (un test lo comprueba). Si cambias una ficha de
pose en `scripts/ilustraciones/`, ejecuta antes `npm run ilustraciones`.

## Estructura

```
HealthMove/
├── docs/especificacion-v1.md     Decisiones funcionales (fuente de verdad)
├── docs/revision-catalogo.md     Cómo revisar el catálogo antes de usarlo
├── public/                       La PWA (todo lo que se publica)
│   ├── index.html, manifest.webmanifest, sw.js, icons/
│   ├── estilos.css               CSS propio por capas (tokens, base, estructura, componentes…)
│   ├── fuente/                   Atkinson Hyperlegible 400 y 700 (OFL)
│   ├── iconos.svg                Sprite de Bootstrap Icons (MIT), solo los iconos usados
│   ├── fotos/                    Fotos de ambiente en WebP (créditos en CREDITOS.md)
│   ├── data/catalogo.json        Catálogo de ejercicios (v0.3.0, 220, en borrador)
│   ├── data/ilustraciones.json   Una ficha de pose por ejercicio (generada)
│   └── js/
│       ├── opciones.js           Opciones del perfil y lo que excluye cada una
│       ├── perfil.js             Estados del perfil y validación (funciones puras)
│       ├── motor.js              Reglas de compatibilidad y generación de rutinas
│       ├── figura.js             Dibuja las ilustraciones (figura articulada en SVG)
│       ├── almacen.js            localStorage protegido
│       └── app.js                Interfaz: pantallas, reproductor, historial
├── scripts/
│   ├── validar-catalogo.mjs      Valida la estructura del catálogo
│   ├── version-sw.mjs            Recalcula la lista de precaché y la versión del service worker
│   ├── ilustraciones.mjs         Genera data/ilustraciones.json
│   └── ilustraciones/            Fichas de pose por posición (sentado, de pie, tumbado y suelo)
├── tests/                        node --test: motor, perfil, PWA e ilustraciones
├── CREDITOS.md                   Autoría y licencias de fuente, iconos y fotos
├── legacy/mv10-backend/          Backend de MV10 archivado (Express, PostgreSQL, JWT); no se usa en v1
└── .claude/skills/               Skills de apoyo al desarrollo
```

## Decisiones clave

- **Local-first:** el perfil y el historial se quedan en el dispositivo. No hay cuentas ni servidor.
- **Reglas, no IA:** un ejercicio es compatible solo si su posición está permitida, no exige nada
  que la persona haya indicado evitar y tiene los recursos necesarios. Si no hay suficientes
  ejercicios, la app lo dice; nunca relaja un filtro.
- **Falla en cerrado:** un ejercicio sin revisar o con alguna exigencia sin etiquetar no se usa.
- **Propiedad de seguridad comprobada:** un test genera 400 perfiles aleatorios y verifica que
  ninguna rutina contiene un ejercicio incompatible.

## Cómo se ha verificado el rediseño

En un navegador real (Chromium), a 390 px y 1280 px:

- **Sin conexión:** tras la primera visita, la app abre con fotos, ilustraciones y fuente, y genera
  rutinas.
- **Red lenta:** con 4 s de retraso por petición, la portada aparece en menos de 50 ms, porque se
  sirve desde la caché.
- **Actualización:** una versión nueva del service worker muestra «Hay una versión nueva» y borra la
  caché anterior.
- **Accesibilidad:** axe-core no encuentra ningún problema (WCAG 2.1 A y AA) en 11 pantallas en los
  dos tamaños, y el foco de teclado es visible en todos los controles.

## Uso de IA

Este proyecto se ha desarrollado con ayuda de Claude (Anthropic): análisis, catálogo en borrador,
motor, tests e interfaz. Los commits con `Co-Authored-By: Claude` lo indican. El etiquetado de los
ejercicios debe revisarlo el autor (ver `docs/revision-catalogo.md`).
