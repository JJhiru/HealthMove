# Plan de cambios · `inclinacion_tronco` en la familia `sentarse-levantarse` (Q3)

> **Aplicada la opción B el 2026-10-20** (§6; `registro.md`, P14). Las secciones 1 a 5 son la propuesta original y no se han editado.
>
> **Base normativa:** Q3, resuelta el 2026-10-19 (`registro.md`, P5; protocolo R7.8): «Si la fuente no proporciona un ángulo exacto, debe conservarse el término original y no inventarse un umbral numérico». La especificación §4 define `inclinacion_tronco` como inclinar la espalda «más allá de una inclinación leve».
>
> **Catálogo:** blob `72fda34f`. Evidencia literal y hashes de las fuentes: `deepseek/analisis-claude/evidencia-fuentes-q1-q2.md` §4 ter.

## 1. Situación actual

| Ejercicio | Fuente | Texto de la fuente | Imagen de la fuente (R7.x) | `inclinacion_tronco` | Nota actual |
|---|---|---|---|---|---|
| `sentarse-levantarse` | NHS Strength, «Sit-to-stand» | «Lean slightly forwards» (paso A) | **Paso B: inclinación del tronco claramente mayor que «leve»** (foto, SHA-256 `ea8d8757…0f59`) | `false` | «La inclinación es leve: no es inclinacion_tronco.» |
| `sentarse-levantarse-sin-manos` (variante) | Later Life Training (Ealing), «Sit To Stand No Hands», p. 34 | «Lean forwards slightly» | Dos dibujos (sentado erguido y de pie); **no muestran la fase de inclinación** | `true` | — |
| `banda-sentarse-levantarse` (variante) | Worcestershire, «Sit to Stand», p. 5 | «lean forwards and begin to stand up» (sin «slightly») | La figura se inclina claramente hacia delante | `true` | «Con las manos más cerca…» |

**Incoherencia:** las dos primeras fuentes usan el mismo término («slightly») y las etiquetas son opuestas. Con P5, el término de la fuente es el que vale, así que la diferencia no se sostiene en el texto.

## 2. Opciones

### A · «slightly» es inclinación leve en las dos (propuesta de Claude)

| Ejercicio | Cambio | Regla | Evidencia |
|---|---|---|---|
| `sentarse-levantarse-sin-manos` | `inclinacion_tronco`: `true` → `false`; nota: «La fuente dice "Lean forwards slightly": inclinación leve (Q3, P5).» | R2.2 (`false` con evidencia D) y P5 | D: texto literal; el dibujo no lo contradice |
| `sentarse-levantarse` | Sin cambio de etiqueta. **Registrar la discrepancia de ilustración** del paso B (R7.7): no se propone para aprobación documental hasta resolverla | R7.7 | D (texto) frente a la foto B |
| `banda-sentarse-levantarse` | Sin cambio | P5: la fuente no dice «slightly» | D: texto e imagen |

### B · `true` conservador en la base por la foto B

| Ejercicio | Cambio | Regla |
|---|---|---|
| `sentarse-levantarse` | `inclinacion_tronco`: `false` → `true`; nota con `[conservadora]` (R2.4): «la foto del paso B muestra más inclinación que el texto ("slightly")» | R2.1 y R2.4 |
| `sentarse-levantarse-sin-manos` | Sin cambio de etiqueta; añadir la nota `[conservadora]` que hoy falta (R2.4) | R2.4 |
| `banda-sentarse-levantarse` | Sin cambio | — |

### C · No cambiar nada

Mantiene la incoherencia de §1, que P5 ya no explica.

## 3. Impacto en la disponibilidad (R9.1)

Medido con `node scripts/disponibilidad.mjs --escenario <archivo>`, en modo auditoría (incluye borradores: **no es la disponibilidad real**), sobre el catálogo `72fda34f`. Solo cambian los perfiles que excluyen `inclinacion_tronco`; el resto de perfiles de R9.1 no varía.

| Perfil | Actual | A | B |
|---|---|---|---|
| `espalda: inclinar` | 197 (princ 94; de pie 40) | 198 (princ 95; de pie 41): gana `sentarse-levantarse-sin-manos` | 196 (princ 93; de pie 39): pierde `sentarse-levantarse` |
| `indicaciones: no_inclinar_espalda` | 197 | 198 | 196 |

R9.3: la disponibilidad informa, pero no decide. La elección depende de la evidencia.

## 4. Por qué Claude propone A

- **P5 manda conservar el término original.** Las dos fuentes dicen «slightly», y la especificación excluye la inclinación leve de `inclinacion_tronco`.
- **En la variante «sin manos»** nada contradice el texto: el dibujo no muestra la fase de inclinación. El `false` tiene evidencia D (R2.2).
- **En la base, la foto B sí contradice el texto.** Lo que el protocolo prevé para eso es R7.7 (la ilustración no se da por válida y el ejercicio no se propone para aprobación), no cambiar la etiqueta por una imagen que choca con el texto.

## 5. Para aplicarlo, si se aprueba

1. `public/data/catalogo.json`: el cambio de la opción elegida, con su nota en `notas_etiquetado`.
2. Si es A: añadir `sentarse-levantarse` a «Discrepancias conocidas» de R7.7 en el protocolo, que hoy lista tres ilustraciones.
3. `npm run version-sw`, `node scripts/validar-catalogo.mjs`, `npm test` y `node scripts/auditoria.mjs validar`.
4. Anotar la decisión en `registro.md`.

## 6. Decisión y aplicación (2026-10-20)

**Quién decide.** El desarrollador pidió seguir con este plan sin más consultas, salvo que hubiera algo crítico, y en Q1 y Q2 eligió dos veces el criterio conservador. Antes de aplicar, Claude consultó a DeepSeek (C3, `deepseek/ejecuciones/20261021T001620Z-fase-02-q3-sentarse/`, DS-109 a DS-123).
- DeepSeek no eligió ninguna opción.
- Según DeepSeek, la A es la más coherente si el texto de la fuente es evidencia D, y la B, si la foto B es evidencia suficiente en contra.
- Para decidir, había que calificar la foto B del NHS y los dibujos de Ealing (DS-120, DS-121).

**Calificación de las imágenes** (Claude, 2026-10-20, imágenes descargadas y examinadas):

| Imagen | SHA-256 | Calificación (DG-7) |
|---|---|---|
| NHS, «Sit-to-stand», fotos A-B-C (`STRENGTH_EXERCISES-_Sit-to-stand.width-1019.jpg`) | `df7a0a88…b3e9` (otra resolución que la del §1) | **D**: en la foto B, la transición, el tronco se inclina hacia delante claramente más que «slightly», en torno a 45° respecto a la vertical (estimación aproximada, R7.2; no es un umbral) |
| Ealing, p. 34, «Sit To Stand No Hands» (PDF `9e53985c…`) | — | **N** para la fase de inclinación: los dibujos muestran solo el inicio (sentado) y el final (de pie) |

**Opción aplicada: B.**
- En la base, la única imagen de la transición (D) contradice el texto («slightly»). Con R7.5 y R2.1, ante esa duda se marca la exigencia como conservadora.
- La variante describe el mismo movimiento de levantarse, y su fuente no muestra la transición (N). Mantenerla en `true` deja la familia coherente.
- DS-115 tenía razón: R7.7 trata de las ilustraciones de HealthMove, no de las fotos de la fuente. Con la B, no hace falta añadir nada a R7.7.

| Ejercicio | Cambio |
|---|---|
| `sentarse-levantarse` | `inclinacion_tronco`: `false` → `true`. La nota «La inclinación es leve: no es inclinacion_tronco.» se sustituye por «[conservadora] inclinacion_tronco: el texto dice «slightly», pero la foto B de la fuente muestra más (Q3). Se cerraría con: revisión profesional.» |
| `sentarse-levantarse-sin-manos` | Sin cambio de etiqueta (`true`). Nota nueva, la que exigía R2.4: «[conservadora] inclinacion_tronco: la fuente dice «slightly» y sus dibujos no muestran la fase; la foto del NHS de la base muestra más (Q3). Se cerraría con: una imagen de la transición.» |
| `banda-sentarse-levantarse` | Sin cambio |

**Disponibilidad**, medida después de aplicar. Es modo auditoría (no es la disponibilidad real), y solo cambian dos perfiles:
- `espalda: inclinar` y `indicaciones: no_inclinar_espalda`: de 197 a 196 (principal, de 94 a 93; de pie, de 40 a 39).

Las instrucciones de HealthMove no cambian: «el tronco un poco hacia delante» traduce «slightly» y conserva el término de la fuente (P5).
