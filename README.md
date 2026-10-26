# HealthMove

#### Video Demo: <URL_DEL_VIDEO>

#### Description:

HealthMove is a Progressive Web App (PWA) that builds short movement routines (10, 15 or 20 minutes) for people who already know they have some mobility restriction: someone who can only exercise sitting down, who cannot raise an arm above the shoulder, who has trouble closing a hand, or who should avoid kneeling or bending the knee deeply. Most exercise apps assume you can do any movement and leave it to you to skip what you cannot do. HealthMove does the opposite: you describe what you need to avoid, and it only offers exercises that do not require it.

HealthMove does not diagnose, prescribe or replace a health professional. It is a tool to keep moving within limits the user already knows, and every exercise comes from a public source (mostly NHS trusts and other public health organisations) that the app cites.

This is my final project for CS50x. It grew out of an earlier prototype of mine called MV10, which had an Express/PostgreSQL backend with accounts. For HealthMove I rebuilt it as a local-first app with no backend at all (the old backend is archived in `legacy/mv10-backend/` and is not used).

## How it works

1. **Profile.** The user answers a short questionnaire in six sections (mobility, arms, hands, legs, back and other indications), chooses which positions are possible (standing freely, standing with support, or sitting only), says whether they can use a bed or the floor, and ticks the equipment they have at home (chair, wall, bed, resistance band, light weight such as a water bottle, towel).
2. **Rules.** Each answer is translated into a set of *demands* to avoid. Every exercise in the catalog is labelled with the same 16 demands (for example `brazo_sobre_hombro`, "a hand goes above the shoulder"; `flexion_profunda_rodilla`, "the knee bends more than 90°"; `agarre`, "the hand has to grip"). An exercise is compatible only if its position is allowed, it requires none of the demands the user must avoid, and the user has the equipment it needs.
3. **Routine.** The rule engine picks compatible exercises to fill a warm-up, a main block and a cool-down for the chosen duration. If there are not enough compatible exercises, the app says so and explains why. It never relaxes a filter to "make it work".
4. **Guided session.** A player shows each exercise with its illustration, instructions, dosage and source, with a timer, and the finished routine is saved to a local history.

Everything stays on the device (`localStorage`). There are no accounts and no server, and after the first visit the app works completely offline.

## The exercise catalog and its audit

The catalog (`public/data/catalogo.json`) has 225 exercises. Each one records its source (organisation, title, URL, licence and the date it was consulted), the instructions in my own words, the dosage, the 16 demand labels, any adaptation made with respect to the source, and its review status.

The labels decide what a person with restrictions will be offered, so I treated them as safety data. I wrote an audit protocol (`docs/auditoria-catalogo/protocolo.md`) with rules such as: when in doubt, a demand is marked `true` (the "conservative" choice, which hides the exercise from people who must avoid it), and a demand can only be `false` with direct evidence from the source's text or images. Each exercise was checked against its original source in numbered batches (`docs/auditoria-catalogo/lote-NN.md`). An AI model (DeepSeek, through a small script I control) produced draft reviews, and Claude and I verified them against the sources. Every decision is recorded with its date in `docs/auditoria-catalogo/registro.md`.

Only exercises I approved are used by the app. At the time of writing, 213 of the 225 exercises are approved (`basado_en_fuente_publica`, reviewed by JJhiru); the rest stay as drafts, either pending a decision or because their source could not be downloaded. Drafts can be tried with `?desarrollo=1`, which shows a warning banner. This is a documentary audit against public sources, not a clinical validation, and the app says so.

## Files

**The app (`public/`)**

- `index.html`: the single page, with the app shell and the screens.
- `estilos.css`: my own layered CSS (tokens, base, layout and components), with no framework.
- `js/opciones.js`: the profile options and which demands each one excludes.
- `js/perfil.js`: the profile model (pure functions to answer, change and validate the questionnaire).
- `js/motor.js`: the rule engine. It computes the restrictions, filters the catalog, builds the routine, and checks a saved routine again when the profile or the catalog changes.
- `js/validacion.js`: validates the catalog and each exercise before the engine uses it (fail closed: an unlabelled or unreviewed exercise is never used).
- `js/figura.js`: draws every exercise illustration as SVG: an articulated figure in a start pose (faded) and an end pose (solid), with an arrow for the movement.
- `js/almacen.js`: a guarded wrapper around `localStorage`.
- `js/app.js`: the interface: screens, routine player, history and catalog browser.
- `sw.js` and `manifest.webmanifest`: the service worker (offline cache and update notice) and the PWA manifest.
- `data/catalogo.json` and `data/ilustraciones.json`: the catalog and one pose per exercise (generated).

**Scripts (`scripts/`)**

- `validar-catalogo.mjs`: checks the structure of the catalog.
- `ilustraciones.mjs` and `ilustraciones/*.mjs`: the poses (sitting, standing, lying) from which `ilustraciones.json` is generated.
- `version-sw.mjs`: recomputes the service worker's precache list and version.
- `auditoria.mjs` and `auditoria/*.mjs`: read-only tools for the audit (report headers, validation of reports against the catalog and the registry, status summary).
- `auditoria-ia.mjs` and `ia/*.mjs`: the DeepSeek client used for the draft reviews, with a local budget limit, simulation mode and verbatim storage of every answer.
- `disponibilidad.mjs`: measures how many exercises each restriction profile can still use.

**Tests (`tests/`)**: 210 tests with `node --test`, covering the engine, the profile, the PWA, the illustrations and the audit tools, plus browser tests in Chromium (`tests/navegador/`). The most important one generates 400 random profiles and checks that no routine ever contains an incompatible exercise.

**Documents (`docs/`)**: the functional specification (`especificacion-v1.md`), the audit protocol, the registry of my decisions, the batch reports, and a redesign proposal.

## Design decisions

- **Rules instead of AI at run time.** A language model could write a routine, but I could not guarantee that it would never suggest something the user had said to avoid. Explicit rules can be tested and explained ("this exercise was excluded because it raises the arm above the shoulder"). AI is only used offline, as an assistant during development and in the audit, never to decide what the user is shown.
- **Local-first, no backend.** MV10 had accounts and a database. For HealthMove, health-related data has no reason to leave the phone, and without a server there is nothing to secure, host or pay for. The cost is that there is no sync between devices, which I accepted.
- **Failing closed.** If an exercise is unreviewed or a label is missing, it is not used. If no safe routine exists, the user gets an honest explanation instead of a weaker routine.
- **Conservative labels.** When a source does not make clear whether an exercise needs, for example, both arms, it is marked as needing them. This makes fewer exercises available to people with more restrictions, but I preferred that to offering something unsafe. The `disponibilidad.mjs` tool measures that cost instead of guessing it.
- **Generated SVG illustrations.** Drawing 225 illustrations by hand was not realistic, and photos would not match my adapted instructions. A single articulated figure, described by joint angles, keeps every illustration consistent, small (2–4 KB) and correctable in one line.
- **Accessibility.** The Atkinson Hyperlegible font, large touch targets, visible keyboard focus, and no information carried by colour alone. axe-core reports no WCAG 2.1 A/AA issues on the main screens.

## How to run it

It only needs `public/` served as static files:

```bash
npm test          # validates the catalog and runs the tests (Node 18+)
npm run servir    # http://localhost:8000
```

After changing anything in `public/`, run `npm run version-sw` so the service worker precaches the new version (a test checks this). After changing a pose in `scripts/ilustraciones/`, run `npm run ilustraciones` first.

## Use of AI

I used AI tools as allowed for the CS50x final project:

- **Claude (Anthropic)** helped me write most of the code, the tests and the documents, and drafted the first version of the catalog labels. Every code file says so in its first line, and commits made with it carry `Co-Authored-By: Claude`.
- **DeepSeek** produced draft reviews during the catalog audit. Its answers are stored verbatim in `docs/auditoria-catalogo/deepseek/ejecuciones/`.

The project idea, the problem it addresses and the requirements are mine, and so are the decisions recorded with dates in `docs/auditoria-catalogo/registro.md`: the audit rules I accepted, the approval of every exercise, and the design choices above.

## Credits

Fonts, icons and photos are credited with their licences in `CREDITOS.md`. Exercise sources are cited in each exercise of the catalog and shown in the app.
