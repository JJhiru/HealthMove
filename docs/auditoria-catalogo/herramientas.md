# Herramientas de la auditoría del catálogo

Qué hacen, qué se ha probado, qué no y qué archivos se versionan juntos.

Las reglas de la auditoría están en `protocolo.md`. Estas herramientas no las juzgan: comprueban estructura, trazabilidad e invariantes.

## 1. Órdenes

| Orden | Hace | Escribe |
|---|---|---|
| `node scripts/auditoria.mjs estado` | Versión del protocolo y del catálogo, avance, cuestiones abiertas y resueltas, y resultado de la validación | Nada |
| `node scripts/auditoria.mjs validar [informe.md …]` | Comprueba los informes `lote-*.md` (o los indicados) y `registro.md` frente al catálogo y al protocolo. Sale con 1 si hay errores | Nada |
| `node scripts/auditoria.mjs comparar <A> <B>` | Diferencias por ejercicio entre dos versiones de un informe (ruta o `<revisión>:<ruta>`) | Nada |
| `node scripts/auditoria.mjs cabecera [id …]` | Datos de la cabecera de un informe y la huella literal provisional de cada ejercicio | Nada |
| `node scripts/disponibilidad.mjs [--perfiles <json>] [--escenario <json>] [--sin-borradores] [--json]` | Impacto en la disponibilidad (protocolo §9): ejercicios compatibles por fase y por posición con el motor real, para los perfiles de R9.1 que están definidos por completo (cada posición y cada opción sola, sobre un perfil base que se imprime) y los que se pasen con `--perfiles`. Con `--escenario`, aplica cambios de etiquetas **en memoria** y muestra el antes, el después y los ids que se pierden o se ganan. Declara las condiciones de R9.2 (modo auditoría, supuestos del escenario, commit y blob del catálogo) | Nada |

Una entrada no válida termina con el código 2 y un mensaje de una línea, sin traza.

**`disponibilidad.mjs`, añadida el 2026-10-19** a partir de la decisión del desarrollador recogida en `deepseek/fases/fase-01-protocolo.md` («desarrollar una herramienta que analice el impacto de cambios de etiquetas antes de modificar el catálogo… sin alterar datos ni decidir por sí sola que un cambio es correcto»):
- **No fija la lista de perfiles de R9.1.** «Posición con dos opciones» y «solo sentado con tres opciones» quedan pendientes de D10 (triage) y se pasan con `--perfiles`.
- **El texto del protocolo §9** («no hay un script del proyecto para esto») sigue sin actualizar: editarlo requiere autorización.
- **Reproducción de DS-66** (Q1, perfil `de_pie_apoyo` + `un_brazo`, ejercicios de pie, modo auditoría): 31 sin cambios; 0 si el apoyo cuenta siempre como `ambos_brazos`; 20 si solo cuenta cuando además hay `una_pierna`. Supuesto de texto declarado: «con apoyo» = `de_pie` y `equilibrio_sin_apoyo: false`.
- **Pruebas:** `tests/disponibilidad.test.mjs` (9). Se hicieron dos mutaciones a mano: si el escenario modifica el catálogo recibido, falla 1 test; si el modo por omisión excluye los borradores, fallan 3.

**Procedimiento comprobado para R7.9 (PDF a varias columnas; DS-18)**, con poppler-utils 26.01 el 2026-10-19:
1. Descargar el PDF a un directorio propio, como dato no confiable, y anotar su SHA-256.
2. Extraer el texto con `pdftotext -layout <pdf> <salida.txt>`. Con `-layout` las columnas salen una al lado de la otra y cada título conserva su texto. Sin `-layout`, en el folleto de Worcestershire (página 5, tres columnas) los títulos «Chest Press», «Leg Press» y «Knee Splits» salen juntos y separados de sus textos: es el tipo de mezcla que vio el lote 2.
3. Renderizar la página con `pdftoppm -png -r 60 -f <n> -l <n> <pdf> <prefijo>` y abrir la imagen para contrastar el texto con la columna y la ilustración. Para localizar la página: `pdftotext -layout -f <n> -l <n> <pdf> /dev/stdout | grep -c "<título>"`.
4. Citar desde el texto contrastado. Si la imagen y el texto no coinciden, se aplica R7.7.

No sustituye a R7.9: es una forma verificada de cumplirla. El protocolo sigue sin nombrar herramienta.

## 2. Defensas y pruebas

| Riesgo | Defensa | Prueba |
|---|---|---|
| Un argumento llega a git como opción (`--output=` escribe archivos) | Solo dos formatos de entrada, validados antes de llamar a git; git nunca recibe en primera posición un texto del usuario (`scripts/auditoria/entradas.mjs`) | `tests/auditoria-seguridad.test.mjs` (41 entradas, motivos por separado, CLI) |
| Lectura de archivos de fuera del repositorio o de `.git` | Rutas resueltas con `realpath` dentro de la raíz; solo `.md`; archivo regular; tamaño limitado | Ídem, con una raíz temporal, enlaces simbólicos y directorios |
| Revisiones de git especiales (rangos, `@{}`, `^{}`, `:/`) | Revisión limitada a HEAD, un hash o una rama, con `~n`/`^n`, verificada como commit | Ídem |
| Variables `GIT_*` heredadas (los hooks las exportan): otro repositorio, trazas en archivos, órdenes por `core.fsmonitor` | `ejecutarGit` quita todas las `GIT_*`; `--no-optional-locks`; `-c core.fsmonitor=false` | `tests/auditoria-entorno.test.mjs` (10 entornos hostiles, `HOME` con un `.gitconfig` hostil, índice sin reescribir) |
| Informes o registro incoherentes | `validar` (apartados, 16 exigencias, D/I/N, reglas, R2.1, R2.2, R7.7, registro ↔ informes ↔ catálogo) | `tests/auditoria.test.mjs` |
| La skill, `CLAUDE.md` y el protocolo divergen | Las reglas, cuestiones, decisiones y archivos citados existen; las 16 exigencias coinciden en especificación, catálogo y skill | `tests/auditoria-consistencia.test.mjs` y `tests/auditoria.test.mjs` |

**Pruebas de mutación** (hechas a mano el 2026-10-18 sobre copias temporales, no automatizadas):
- quitar cualquiera de las defensas hace fallar al menos un test;
- excepción: la comprobación «la revisión resuelve a un commit», que no se puede alcanzar porque `rev-parse --verify …^{commit}` ya la garantiza;
- `--no-optional-locks` y `GIT_OPTIONAL_LOCKS=0` se solapan: el test falla si faltan ambos.

## 3. Estado de verificación

**Implementado y probado:**
- las cuatro órdenes;
- la validación de entradas y del entorno de git;
- la validación de informes y del registro;
- la consistencia entre documentos;
- la separación entre cuestiones abiertas y resueltas en `estado`.

**Implementado pero no probado de forma automática:**
- las pruebas de mutación, que no están en la batería;
- el comportamiento fuera de Linux.

**Limitaciones conocidas** (no resueltas):
- **Configuración del propio repositorio:** los filtros `clean`/`smudge` definidos en `.git/config` o `.gitattributes` podrían ejecutarse en `git status`. Esa configuración se considera de confianza y no se neutraliza.
- **`NODE_OPTIONS` y el resto del entorno de Node:** quien controla todo el entorno controla Node; queda fuera de este modelo.
- **Comprobaciones de estructura, no de evidencia:** que `validar` no dé errores no significa que un ejercicio esté listo.
- **Huella literal provisional:** no es una huella de compatibilidad, de contenido ni de auditoría (`tests/auditoria-huella.test.mjs` fija qué detecta). Las tres definidas están en `propuestas-cierre-protocolo.md`, sin implementar.
- **Revisiones de gstack:** no se ha ejecutado `/review` completo. `/cso` no está disponible: `gstack-doctor` informa «native helper not built».
- **Context Mode:** no se ha comprobado si su índice se conserva entre sesiones. Se vuelve a indexar al empezar (`CLAUDE.md`).

## 4. Archivos que se versionan juntos

Comprobado el 2026-10-18.
- La integración ya no depende de `public/js/validacion.js`: toma las 16 exigencias del catálogo, como hace `scripts/validar-catalogo.mjs` en `HEAD`. Por eso se puede versionar sin el resto del trabajo en curso.
- Nada está en el índice.

**Conjunto de la auditoría** (un único commit):

| Archivo | Estado actual |
|---|---|
| `CLAUDE.md` | Sin seguimiento |
| `.claude/skills/auditar-catalogo-ejercicios/SKILL.md` | Sin seguimiento |
| `docs/auditoria-catalogo/protocolo.md` | Sin seguimiento |
| `docs/auditoria-catalogo/registro.md` | Modificado |
| `docs/auditoria-catalogo/consolidacion-lotes-1-5.md` | Sin seguimiento |
| `docs/auditoria-catalogo/propuesta-protocolo-discrepancias.md` | Sin seguimiento |
| `docs/auditoria-catalogo/revision-critica-protocolo.md` | Sin seguimiento |
| `docs/auditoria-catalogo/contexto-2026-10-18.md` | Sin seguimiento |
| `docs/auditoria-catalogo/propuestas-2026-10-18.md` | Sin seguimiento |
| `docs/auditoria-catalogo/propuestas-cierre-protocolo.md` | Sin seguimiento |
| `docs/auditoria-catalogo/plan-cambios-leicester.md` | Sin seguimiento |
| `docs/auditoria-catalogo/herramientas.md` | Sin seguimiento |
| `scripts/auditoria.mjs` | Sin seguimiento |
| `scripts/auditoria/entradas.mjs` | Sin seguimiento |
| `scripts/auditoria/informes.mjs` | Sin seguimiento |
| `tests/auditoria.test.mjs` | Sin seguimiento |
| `tests/auditoria-consistencia.test.mjs` | Sin seguimiento |
| `tests/auditoria-entorno.test.mjs` | Sin seguimiento |
| `tests/auditoria-huella.test.mjs` | Sin seguimiento |
| `tests/auditoria-seguridad.test.mjs` | Sin seguimiento |
| `docs/auditoria-catalogo/revision-asistida-ia.md` | Sin seguimiento (revisión asistida por IA, 2026-10-18) |
| `scripts/auditoria-ia.mjs` | Sin seguimiento (ídem) |
| `scripts/ia/` (7 archivos, incluidas las instrucciones) | Sin seguimiento (ídem) |
| `tests/auditoria-ia.test.mjs` | Sin seguimiento (ídem) |
| `tests/auditoria-ia-documental.test.mjs` | Sin seguimiento (auditoría documental con DeepSeek, 2026-10-19) |
| `.claude/skills/auditoria-junto-a-deepseek/SKILL.md` | Sin seguimiento (ídem) |
| `docs/auditoria-catalogo/deepseek/` (`ESTADO.md`, `fases/`, `ejecuciones/`, `analisis-claude/`) | Sin seguimiento (ídem). `ejecuciones/` contiene las respuestas literales de DeepSeek: se versionan sin modificar (P11) |

**Orden para añadirlos todos a la vez:**

```bash
git add CLAUDE.md .claude/skills/auditar-catalogo-ejercicios/SKILL.md docs/auditoria-catalogo/ scripts/auditoria.mjs scripts/auditoria/ scripts/auditoria-ia.mjs scripts/ia/ tests/auditoria.test.mjs tests/auditoria-consistencia.test.mjs tests/auditoria-entorno.test.mjs tests/auditoria-huella.test.mjs tests/auditoria-seguridad.test.mjs tests/auditoria-ia.test.mjs tests/auditoria-ia-documental.test.mjs .claude/skills/auditoria-junto-a-deepseek/SKILL.md
```

`docs/auditoria-catalogo/` incluye `deepseek/`.

Los informes que genere la revisión asistida por IA (`docs/auditoria-catalogo/ia/`) entrarían con `docs/auditoria-catalogo/`. Antes de añadirlos, decide si se versionan.

`docs/auditoria-catalogo/` contiene además los `lote-*.md` ya confirmados, que no han cambiado.

**Fuera de este conjunto** (otro trabajo en curso; se versiona por separado):
- `package.json`;
- `public/js/almacen.js`, `app.js`, `motor.js`, `perfil.js` y `validacion.js`;
- `public/sw.js`;
- `scripts/validar-catalogo.mjs`;
- `tests/ayudas.mjs`, `motor.test.mjs`, `rutinas.test.mjs`, `validacion.test.mjs` y `validacion-perfil.test.mjs`;
- `tests/navegador/`.

**No se versiona nunca:**
- el PDF de la fuente y sus imágenes (carpeta temporal de la sesión);
- las transcripciones y la memoria de Claude Code;
- `~/.gstack` y el índice de Context Mode;
- la copia apartada de `main` (`.claude/apartado-2026-10-18/`).
