# Plan de cambios · `inclinacion_tronco` en la familia `sentarse-levantarse` (Q3)

> **Propuesta de Claude, no aprobada.** No se ha modificado el catálogo. Cada cambio necesita la aprobación del desarrollador (R2.6) y, una vez aplicado, `validar-catalogo`, `version-sw` y `npm test`.
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
