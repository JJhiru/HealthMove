# HealthMove — instrucciones del proyecto

PWA de rutinas breves de movimiento para personas con restricciones de movilidad (proyecto final CS50x). Ver `README.md`.

## Orden de autoridad

1. `docs/auditoria-catalogo/protocolo.md`: reglas de auditoría (versión vigente en su cabecera).
2. `docs/especificacion-v1.md`: definiciones de las 16 exigencias (§4) y reglas del catálogo (§7).
3. `docs/auditoria-catalogo/registro.md`: decisiones del desarrollador con fecha, avance, CN, propuestas retiradas y de variante.
4. `public/data/catalogo.json`: datos. Se lee siempre del archivo.
5. Informes `lote-*.md` y `consolidacion-lotes-1-5.md`: evidencia y propuestas. Los lotes 1 a 5 son anteriores al protocolo 1.0 y no aprueban nada.
6. `propuesta-protocolo-discrepancias.md` y `revision-critica-protocolo.md`: antecedentes. Si chocan con el protocolo, prevalece el protocolo.

La memoria de sesiones (memoria de Claude Code, Context Mode, gstack) solo sirve para orientarse. Nunca es una fuente: todo lo que recuerde se confirma en estos archivos antes de usarlo. Una propuesta no es una decisión hasta que `registro.md` la recoge como aprobada.

## Empezar una sesión

No hace falta reanudar conversaciones anteriores.

```bash
git rev-parse --abbrev-ref HEAD && git status --short   # rama y cambios sin confirmar
node scripts/auditoria.mjs estado                       # protocolo, catálogo, avance, Q abiertas, validación
```

Después, leer `registro.md` (secciones «Decisiones», «Pendientes» y «Casos no contemplados») y el apartado 13 del protocolo (cuestiones abiertas).

## Auditar ejercicios

- Skill: `auditar-catalogo-ejercicios` (`.claude/skills/auditar-catalogo-ejercicios/SKILL.md`). Aplica el protocolo a cada ejercicio.
- Cabecera del informe: `node scripts/auditoria.mjs cabecera <id> …`
- Antes de entregar un informe: `node scripts/auditoria.mjs validar` (sale con 1 si hay errores).
- Comparar versiones de un informe: `node scripts/auditoria.mjs comparar <commit>:docs/auditoria-catalogo/lote-NN.md docs/auditoria-catalogo/lote-NN.md`
- Validar el catálogo y la app: `npm test` (incluye `node scripts/validar-catalogo.mjs`).

El script solo comprueba estructura, trazabilidad e invariantes. No juzga la evidencia ni sustituye la decisión del desarrollador.

- **Detalle de las herramientas:** pruebas, limitaciones y archivos que se versionan juntos, en `docs/auditoria-catalogo/herramientas.md`.
- **Revisión asistida por IA (DeepSeek):** `node scripts/auditoria-ia.mjs revisar-ejercicio <id> [--informe <lote-NN.md>]`.
  - Sin `--ejecutar`, solo simula: no hay red y no hace falta la clave.
  - Su salida son sugerencias para revisar, nunca decisiones.
  - Detalle en `docs/auditoria-catalogo/revision-asistida-ia.md`.
  - No ejecutes `--ejecutar` sin que el desarrollador lo pida: consume su saldo.
- **Estado «Auditoría junto a DeepSeek»:** DeepSeek es el auditor principal y Claude, el coordinador técnico.
  - Para empezar o continuar, lee `docs/auditoria-catalogo/deepseek/ESTADO.md` y sigue la skill `auditoria-junto-a-deepseek`.
  - Dentro de ese estado, las llamadas de las fases previstas en `docs/auditoria-catalogo/deepseek/ESTADO.md` están autorizadas, con sus límites.
  - Las respuestas de DeepSeek se conservan literalmente y no se editan.
- **Trabajo preparado y pendiente de aprobación:**
  - `docs/auditoria-catalogo/propuestas-cierre-protocolo.md`: protocolo 1.1, huellas y texto de Q8(b).
  - `docs/auditoria-catalogo/plan-cambios-leicester.md`: plan para el catálogo.

## Reglas que no cambian

- La IA propone y el desarrollador decide. No se modifica el catálogo, ni se aprueban ejercicios, ni se cambian etiquetas o criterios sin aprobación expresa.
- No se inventan fuentes, citas, páginas, imágenes, instrucciones, variantes ni umbrales.
- Una auditoría documental no es una validación clínica. No se diagnostica ni se prescribe.
- No se relajan criterios para aumentar la disponibilidad.
- No se borran ni se sobrescriben informes anteriores: las revisiones se añaden como informes o apartados nuevos.
- Git: se trabaja en `desarrollo-v1`. No tocar `main`. Commits y merges solo cuando el desarrollador lo pida.

## Herramientas instaladas (comprobado el 2026-10-18)

| Herramienta | Uso en este proyecto | Cómo se invoca |
|---|---|---|
| Context Mode 1.0.169 (plugin de usuario) | Buscar en documentos y PDF grandes sin cargarlos enteros | Herramientas MCP `ctx_index` (por ejemplo, `path: docs/auditoria-catalogo`, `source: healthmove-auditoria`), `ctx_search` (con `source: "healthmove"`) y `ctx_execute_file`. Se vuelve a indexar al empezar cada sesión, porque la búsqueda por relevancia se limita a la sesión actual. Devuelve fragmentos con la ruta y el encabezado, sin número de línea, y puede mezclar informes antiguos con el protocolo: antes de citar uno, se comprueba en el original |
| gstack 1.91.126.0 (`~/.claude/skills/gstack`) | Revisión técnica de cambios de código y de herramientas | Skills `/review`, `/health`, `/investigate`. Diagnóstico: `~/.claude/skills/gstack/bin/gstack-doctor`. **`/usr/bin/gstack` es otra herramienta** (la traza de pila de GDB) |
| Claude Mem | No activo en este proyecto | Solo está instalado `claude-mem-cowork` 0.1.4, habilitado para otro proyecto y sin emparejar. Si se activara, enviaría a cmem.ai lo que hacen las herramientas. Activarlo requiere la decisión del desarrollador |

Las decisiones del protocolo no se guardan en los registros de decisiones de gstack (`gstack-decision-log`) ni en otra memoria: su único sitio es `registro.md`.
