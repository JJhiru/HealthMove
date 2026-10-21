# Auditoría · fase-02-q3-sentarse (consulta C3)

**Alcance:** solo `plan-q3` y su contraste con `protocolo`, `especificacion`, `registro`, `evidencia-fuentes` §4 ter y `catalogo-de-pie`. No he visto la imagen del paso B del NHS ni los dibujos de Ealing: lo que digo sobre ellas se apoya en lo que declaran `plan-q3` §1 y `evidencia-fuentes` §4 ter, no en observación propia.

**Nota de método:** distingo en cada hallazgo entre regla aprobada, decisión confirmada, propuesta no aprobada y cuestión que requiere imagen o profesional. No elijo opción; digo cuál es más coherente con las reglas y por qué.

---

## 1. Qué reglas sostienen o contradicen cada opción

### Opción A (propuesta de Claude)

| Regla | Efecto sobre A |
|---|---|
| **R2.2(a)** — «`false` solo con evidencia D de que la exigencia no aparece en ningún momento del ejercicio» | Sostiene el `false` de `sentarse-levantarse-sin-manos` **solo si** el texto «Lean forwards slightly» es D de que la inclinación no supera «leve». Es la pieza más frágil de A (ver DS-110). |
| **R2.1** — «`true` puede proponerse con evidencia D o I, o con la regla `conservadora` cuando la evidencia es N o insuficiente» | No se opone a A: R2.1 no obliga a marcar cuando hay D de ausencia. Pero si el texto es I y no D, R2.1 empuja a `true` conservador, no a `false`. |
| **R2.4** — nota `[conservadora]` en `notas_etiquetado` | A no la necesita para `sentarse-levantarse-sin-manos` si el `false` se sostiene con D. Sí la necesitaría si se optara por `true` conservador. |
| **R7.5** — «Si la imagen no determina un requisito, se registra la incertidumbre y se aplica la regla conservadora de esa exigencia (R2.1)» | **Contradice parcialmente A** en `sentarse-levantarse-sin-manos`: si el dibujo no muestra la fase de inclinación, la imagen no determina el requisito y R7.5 manda registrar incertidumbre y aplicar R2.1. A lo resuelve con el texto como D; eso exige sostener que el texto basta como D (DS-110). |
| **R7.7** — «Mientras haya una discrepancia de ilustración que induzca a interpretar el ejercicio de otra forma, esa ilustración no se da por válida y el ejercicio no se propone para aprobación documental» | Sostiene la parte de A sobre `sentarse-levantarse`: registrar la discrepancia del paso B y no proponerlo. **Pero** R7.7 habla de «ilustración» y su lista de discrepancias conocidas son ilustraciones de HealthMove (`sentado.mjs`, `depie.mjs`), no fotos de la fuente. Aplicarla a una foto de la fuente es una extensión interpretativa (DS-112). |
| **R7.8** — «si la fuente no da un ángulo exacto, se conserva el término original de la fuente y no se inventa un umbral numérico» | Sostiene A en la medida en que «slightly» se conserva como término. **No dice** que «slightly» equivalga a «inclinación leve» a efectos de la fila 15: eso es un juicio de umbral que R7.8 no resuelve (DS-111). |
| **Especificación §4, fila 15** — «inclinar la espalda… más allá de una inclinación leve» | Es la definición que hay que aplicar. No da cifra. La correspondencia «slightly» = «leve» es una inferencia, no un hecho de la fuente. |

### Opción B (`true` conservador en la base por la foto B)

| Regla | Efecto sobre B |
|---|---|
| **R2.1** — `true` con evidencia D o I, o conservador si N o insuficiente | Sostiene B: la foto B es al menos I de que la inclinación supera «leve», y R2.1 permite `true` con I. |
| **R2.4** — nota `[conservadora]` | B la incluye correctamente para `sentarse-levantarse`. |
| **R7.5** — imagen que no determina → incertidumbre + R2.1 | Sostiene B en la base: la foto B determina (o al menos indica) más inclinación que el texto; la incertidumbre se resuelve con R2.1. |
| **R7.7** | **Contradice B** si se lee como A: si hay discrepancia texto/foto, R7.7 manda no proponer el ejercicio, no cambiar la etiqueta. B no aborda R7.7. |
| **R7.8** | **Contradice parcialmente B**: si la fuente no da ángulo, se conserva el término original («slightly»). B cambia la etiqueta por la imagen, no por el término. R7.8 no prohíbe mirar la imagen, pero tampoco la autoriza a prevalecer sobre el texto. |
| **Especificación §4, fila 15** | Igual que en A: la foto B podría mostrar «más allá de una inclinación leve», pero eso requiere juicio sobre la imagen que yo no puedo hacer. |

### Opción C (no cambiar nada)

| Regla | Efecto sobre C |
|---|---|
| **R2.6** — «Nada de cambios masivos sin revisión» | C es la opción que menos se arriesga a incumplir R2.6, pero no la exime de registrar la incoherencia. |
| **R7.8 / P5** | C mantiene dos etiquetas opuestas con el mismo término de fuente («slightly»), lo que P5 ya no explica. No es una violación formal de R7.8, pero deja sin resolver la consecuencia que P5 anticipó. |
| **R2.2(a)** | C no cambia `false`, así que no necesita D nueva. |
| **R2.4** | C deja `sentarse-levantarse-sin-manos` con `true` **sin** nota `[conservadora]`, lo que incumple R2.4 si ese `true` es conservador (DS-113). |

**Conclusión de la comparación:** ninguna opción es plenamente coherente con todas las reglas a la vez. A es la más coherente con R7.8/P5 y con R2.2(a) **si** se acepta que el texto es D; B es la más coherente con R2.1/R7.5 **si** se acepta que la foto B es I suficiente; C es la más conservadora pero deja un incumplimiento de R2.4. La elección depende de dos juicios que no puedo cerrar: si «slightly» es D de «no más allá de leve» (DS-110) y si la foto B es I o D de lo contrario (DS-111).

---

## 2. Preguntas concretas

### 2.1. ¿Basta «Lean forwards slightly» como evidencia D para un `false` (R2.2(a)) en `sentarse-levantarse-sin-manos`?

**No puedo confirmarlo con los documentos.** Ver DS-110.

- **Lo que dice R2.2(a):** `false` solo con «evidencia D de que la exigencia no aparece en ningún momento del ejercicio».
- **Lo que dice R7.8/P5:** «si la fuente no da un ángulo exacto, se conserva el término original y no se inventa un umbral numérico».
- **Lo que dice la especificación §4, fila 15:** la exigencia se marca si la inclinación va «más allá de una inclinación leve».

El texto «Lean forwards slightly» **no dice** «no más allá de leve»: dice «ligeramente». Para pasar de «ligeramente» a «no supera el umbral de leve» hace falta una equivalencia («slightly» = «leve») que ni R7.8 ni la fila 15 establecen. R7.8 manda **conservar el término**, no **interpretarlo como umbral**. Por tanto:

- Si «slightly» se lee como término cualitativo que **no** cruza el umbral, el texto es D de ausencia y A es correcta.
- Si «slightly» es solo el término de la fuente y el umbral sigue sin formalizar, el texto es **I** (indicio de inclinación, sin poder afirmar que no cruza el umbral), y R2.3 («la falta de evidencia no demuestra la ausencia») impide el `false`.

**Mi lectura:** el texto es I, no D, mientras no exista una regla que equipare «slightly» con «no más allá de leve». Eso no invalida A, pero la debilita: A necesitaría una justificación explícita de por qué «slightly» es D, y esa justificación no está en `plan-q3`. **Requiere decisión humana** (DS-110).

### 2.2. ¿Qué regla manda cuando el texto de `sentarse-levantarse` («Lean slightly forwards») choca con su foto (paso B)?

**No hay una sola regla que mande; hay varias que apuntan en direcciones distintas.** Ver DS-112.

- **R7.7** manda no dar por válida la ilustración y no proponer el ejercicio para aprobación documental. Es la regla más específica para «discrepancia de ilustración». Pero su redacción y su lista de discrepancias conocidas hablan de ilustraciones de HealthMove, no de fotos de la fuente. Aplicarla a la foto B es una extensión.
- **R7.5** manda registrar la incertidumbre y aplicar R2.1 (conservador). Eso empujaría a `true` conservador, no a mantener `false`.
- **R2.1** permite `true` con I o conservador. La foto B es al menos I.
- **R7.8** manda conservar el término original de la fuente. No dice qué hacer cuando la imagen contradice el término.
- **R2.2(a)** exige D para `false`. Si la foto B es D de que la inclinación supera «leve», el `false` actual no se sostiene.

**Lo que sí puedo afirmar:** el protocolo **no tiene una regla de prevalencia texto/imagen**. R7.7, R7.5 y R2.1 pueden invocarse a la vez y no dicen lo mismo. Eso es un caso no contemplado en el sentido de R1.4 (DS-112). La decisión de qué regla prevalece **requiere decisión humana** y, si se quiere cerrar el juicio sobre la foto, **revisión profesional o al menos una descripción verificable de la imagen** que yo no tengo.

---

## 3. ¿Alguna opción deja dos ejercicios de la misma familia con etiquetas incoherentes sin justificación?

**Sí: la opción C, y también la opción B en distinto grado.** Ver DS-114.

- **C** mantiene `sentarse-levantarse` en `false` y `sentarse-levantarse-sin-manos` en `true` con el mismo término de fuente («slightly») y la misma redacción de HealthMove («un poco»). `plan-q3` §1 lo reconoce como incoherencia y §2 C dice que «mantiene la incoherencia de §1, que P5 ya no explica». C no la justifica; solo la conserva.
- **B** mantiene la incoherencia de etiquetas (`false` en la base, `true` en la variante) pero la **justifica** por la foto B. La justificación es débil (depende de una imagen que no se describe con criterio D/I/N explícito), pero al menos la declara.
- **A** elimina la incoherencia de etiquetas (las dos `false`) y traslada la discrepancia a la ilustración de la base (R7.7). Es la única que deja las dos etiquetas alineadas con el texto.

**Matiz:** A no elimina toda incoherencia: deja `banda-sentarse-levantarse` en `true` con un texto que no dice «slightly». Eso es coherente con P5 (la fuente no dice «slightly»), pero conviene que el plan lo diga expresamente para que no parezca una excepción no justificada.

---

## 4. Errores de hecho en `plan-q3`

### DS-115 · El recuento de «Discrepancias conocidas» de R7.7 no cuadra con el protocolo

- **Ubicación:** `plan-q3` §5, paso 2: «añadir `sentarse-levantarse` a "Discrepancias conocidas" de R7.7 en el protocolo, que hoy lista tres ilustraciones».
- **Evidencia:** protocolo R7.7: «Discrepancias conocidas: `estiramiento-pecho-sentado` (`sentado.mjs:10`), `banda-curl-sentado` (`sentado.mjs:33`) y `equilibrio-una-pierna-pared` (`depie.mjs:18`)». Son tres, y son ilustraciones de HealthMove.
- **Problema:** el recuento («tres») es correcto, pero `plan-q3` no señala que las tres son **ilustraciones de HealthMove** y que `sentarse-levantarse` sería la primera **foto de fuente** en esa lista. Mezclar ambas categorías en R7.7 cambia el alcance de la regla sin decirlo.
- **Consecuencia:** si se aplica A sin aclarar esto, R7.7 pasa a cubrir dos tipos de discrepancia (ilustración propia y foto de fuente) con el mismo tratamiento, lo que puede no ser lo que el desarrollador aprobó.
- **Certeza:** alta (el texto de R7.7 es verificable).
- **Recomendación:** que el plan distinga expresamente «discrepancia de ilustración de HealthMove» de «discrepancia entre texto y foto de la fuente» antes de añadir el ejercicio a R7.7.
- **Prueba:** leer R7.7 y comprobar que las tres entradas son `.mjs` de ilustraciones.
- **¿Requiere decisión humana?:** sí (si se amplía R7.7 o se crea una regla aparte).

### DS-116 · La cita de la fuente de `sentarse-levantarse-sin-manos` no incluye el paso completo

- **Ubicación:** `plan-q3` §1, fila `sentarse-levantarse-sin-manos`: «"Lean forwards slightly"».
- **Evidencia:** `evidencia-fuentes` §4 ter cita «Lean forwards slightly» como texto de la fuente, pero también recoge en §4 quater: «with your hands on your thighs or folded across your chest». `plan-q3` no menciona esta segunda parte.
- **Problema:** la instrucción de HealthMove («con las manos cruzadas sobre el pecho») usa una de las dos opciones de la fuente. Eso es relevante para `ambos_brazos` y para la coherencia con la base, pero `plan-q3` no lo trata. No es un error de cita, pero sí una omisión que afecta a la lectura de la familia.
- **Consecuencia:** el plan puede dar la impresión de que la única diferencia entre base y variante es «slightly» vs «slightly», cuando también difieren en las manos.
- **Certeza:** media (la cita de §4 quater es de Claude, no verificada por mí en la fuente).
- **Recomendación:** que el plan mencione la diferencia de manos al comparar base y variante.
- **Prueba:** releer §4 quater y contrastar con la instrucción del catálogo.
- **¿Requiere decisión humana?:** no (es una mejora de redacción del plan).

### DS-117 · El impacto en disponibilidad no distingue «modo auditoría» de disponibilidad real en la tabla

- **Ubicación:** `plan-q3` §3, tabla.
- **Evidencia:** «Medido con `node scripts/disponibilidad.mjs --escenario <archivo>`, en modo auditoría (incluye borradores: **no es la disponibilidad real**)». La nota está, pero la tabla no la repite por fila.
- **Problema:** R9.2 exige que «cada medición declare sus condiciones». La nota está al pie, no en la tabla. Es un cumplimiento débil, no un incumplimiento.
- **Consecuencia:** riesgo de que la tabla se lea como disponibilidad real al citarla fuera de contexto.
- **Certeza:** media.
- **Recomendación:** que la cabecera de la tabla repita «modo auditoría, no disponibilidad real».
- **Prueba:** comparar con R9.2.
- **¿Requiere decisión humana?:** no.

### DS-118 · La opción A no dice qué pasa con la nota actual de `sentarse-levantarse`

- **Ubicación:** `plan-q3` §2 A, fila `sentarse-levantarse`: «Sin cambio de etiqueta. **Registrar la discrepancia de ilustración** del paso B (R7.7)».
- **Evidencia:** catálogo: `notas_etiquetado` de `sentarse-levantarse` = «… La inclinación es leve: no es inclinacion_tronco.»
- **Problema:** si se registra la discrepancia de la foto B, la nota actual («La inclinación es leve») queda en contradicción con la discrepancia registrada. A no dice si se mantiene, se matiza o se sustituye.
- **Consecuencia:** el catálogo quedaría con una nota que afirma «leve» y un registro de auditoría que dice que la foto muestra más inclinación, sin que se sepa cuál prevalece.
- **Certeza:** alta (la nota está en el catálogo).
- **Recomendación:** que A especifique el texto de la nota resultante.
- **Prueba:** leer `notas_etiquetado` del ejercicio en `catalogo-de-pie`.
- **¿Requiere decisión humana?:** sí (qué nota queda).

### DS-119 · La opción B no dice qué nota lleva `sentarse-levantarse-sin-manos` ni si cambia su etiqueta

- **Ubicación:** `plan-q3` §2 B, fila `sentarse-levantarse-sin-manos`: «Sin cambio de etiqueta; añadir la nota `[conservadora]` que hoy falta (R2.4)».
- **Evidencia:** catálogo: `notas_etiquetado` de `sentarse-levantarse-sin-manos` = `""` (vacío).
- **Problema:** B añade la nota pero no dice su texto ni el motivo exacto (¿conservador por qué? ¿por la falta de imagen de la fase de inclinación? ¿por la ambigüedad de «slightly»?). R2.4 exige la forma `[conservadora] <exigencia>: <motivo>. Se cerraría con: <evidencia que falta>.`
- **Consecuencia:** la nota podría quedar incompleta y no cumplir R2.4.
- **Certeza:** alta.
- **Recomendación:** que B redacte la nota completa con la forma de R2.4.
- **Prueba:** comparar con R2.4.
- **¿Requiere decisión humana?:** no (es redacción), pero sí si el motivo es discutible.

---

## 5. Lo que no se puede determinar sin la imagen o sin un profesional

### DS-120 · La foto B del NHS: ¿D o I de «más allá de leve»?

- **Ubicación:** `plan-q3` §1, fila `sentarse-levantarse`: «Paso B: inclinación del tronco claramente mayor que "leve" (foto, SHA-256 `ea8d8757…0f59`)».
- **Evidencia:** la descripción es de Claude; yo no veo la imagen. `evidencia-fuentes` §4 ter dice: «No se han examinado las imágenes».
- **Problema:** no puedo verificar si la foto B es D (muestra claramente más allá de leve) o I (sugiere más inclinación pero la perspectiva no lo confirma). Tampoco puedo verificar si la foto corresponde al paso B del texto o a otro momento.
- **Consecuencia:** la elección entre A y B depende de un juicio sobre la imagen que no puedo hacer. Si la foto es D, B gana fuerza; si es I, R7.5 manda conservador y B también gana, pero por otra vía; si la foto no es del paso B, B pierde su fundamento.
- **Certeza:** alta (no puedo verla).
- **Recomendación:** que el desarrollador o un revisor con acceso a la imagen califique la foto B como D o I con el criterio de DG-7 §6.1, y lo registre.
- **Prueba:** describir la foto B con el criterio D/I/N y adjuntar la imagen o su descripción verificable.
- **¿Requiere decisión humana?:** sí (calificación de la imagen).

### DS-121 · Los dibujos de Ealing: ¿confirman o no la fase de inclinación?

- **Ubicación:** `plan-q3` §1, fila `sentarse-levantarse-sin-manos`: «Dos dibujos (sentado erguido y de pie); **no muestran la fase de inclinación**».
- **Evidencia:** descripción de Claude; `evidencia-fuentes` §4 ter no describe los dibujos.
- **Problema:** si los dibujos no muestran la fase de inclinación, R7.5 manda registrar incertidumbre y aplicar R2.1. Eso empuja a `true` conservador, no a `false`. A lo resuelve con el texto como D; si el texto es I (DS-110), A no se sostiene.
- **Consecuencia:** la opción A depende de que el texto sea D; si no lo es, R7.5 manda `true` conservador con nota, que es lo que B ya hace para la base pero no para la variante.
- **Certeza:** alta (no veo los dibujos).
- **Recomendación:** que se califiquen los dibujos como D/I/N y se registre.
- **Prueba:** describir los dibujos con el criterio DG-7.
- **¿Requiere decisión humana?:** sí.

### DS-122 · ¿«Slightly» cruza o no el umbral de «leve»? Requiere criterio que el protocolo no tiene

- **Ubicación:** `plan-q3` §2 A y §4; protocolo R7.8; especificación §4 fila 15.
- **Evidencia:** R7.8: «si la fuente no da un ángulo exacto, se conserva el término original de la fuente y no se inventa un umbral numérico». Fila 15: «más allá de una inclinación leve».
- **Problema:** R7.8 prohíbe inventar umbral numérico, pero no dice cómo decidir si un término cualitativo («slightly», «un poco») cruza el umbral de «leve». Esa decisión es un juicio de umbral que el protocolo no formaliza. Podría requerir criterio profesional (fisioterapia) o una regla nueva aprobada.
- **Consecuencia:** sin ese criterio, ni A ni B pueden cerrarse con evidencia D; ambas dependen de una interpretación no formalizada.
- **Certeza:** alta (la laguna es verificable en R7.8 y en la fila 15).
- **Recomendación:** registrar como caso no contemplado (R1.4) o como cuestión abierta; no resolverlo en `plan-q3`.
- **Prueba:** comprobar que ni R7.8 ni la fila 15 definen «leve» cualitativamente.
- **¿Requiere decisión humana?:** sí (y posiblemente revisión profesional).

### DS-123 · La instrucción de HealthMove «Inclínate un poco hacia delante» y su relación con «slightly»

- **Ubicación:** `evidencia-fuentes` §4 ter, columna «Instrucción de HealthMove»: «Inclínate un poco hacia delante» para `sentarse-levantarse-sin-manos`; «el tronco un poco hacia delante» para `sentarse-levantarse`.
- **Evidencia:** las dos instrucciones usan «un poco», que es la traducción de «slightly». Ninguna de las dos fuentes da ángulo.
- **Problema:** si «un poco» es la traducción de «slightly», la instrucción de HealthMove no añade información sobre el umbral. Eso refuerza que el texto es I, no D, para decidir si cruza «leve».
- **Consecuencia:** la misma que DS-110/DS-122.
- **Certeza:** media (la equivalencia «un poco» = «slightly» es razonable pero no está declarada como decisión).
- **Recomendación:** que el plan declare si «un poco» se considera equivalente a «slightly» a efectos de R7.8.
- **Prueba:** comparar las instrucciones del catálogo con las citas de la fuente.
- **¿Requiere decisión humana?:** sí.

---

## Resumen de hallazgos

| Id | Tema | Certeza | Decisión humana |
|---|---|---|---|
| DS-109 | (reservado; no usado) | — | — |
| DS-110 | ¿«Lean forwards slightly» es D para `false`? | media | sí |
| DS-111 | ¿La foto B es D o I de «más allá de leve»? | alta (no verificable) | sí |
| DS-112 | No hay regla de prevalencia texto/imagen; R7.7, R7.5 y R2.1 chocan | alta | sí |
| DS-113 | `sentarse-levantarse-sin-manos` tiene `true` sin nota `[conservadora]` (R2.4) | alta | no (redacción) |
| DS-114 | C (y en parte B) dejan etiquetas incoherentes en la familia | alta | sí |
| DS-115 | R7.7 mezcla ilustraciones propias y foto de fuente sin decirlo | alta | sí |
| DS-116 | `plan-q3` omite la diferencia de manos entre base y variante | media | no |
| DS-117 | La tabla de disponibilidad no repite «modo auditoría» por fila | media | no |
| DS-118 | A no dice qué nota queda en `sentarse-levantarse` | alta | sí |
| DS-119 | B no redacta la nota `[conservadora]` de la variante | alta | no |
| DS-120 | No puedo calificar la foto B (D/I) | alta | sí |
| DS-121 | No puedo calificar los dibujos de Ealing (D/I) | alta | sí |
| DS-122 | «Slightly» vs umbral «leve»: laguna de criterio | alta | sí (posible profesional) |
| DS-123 | «Un poco» = «slightly»: equivalencia no declarada | media | sí |

**Nota final:** no he elegido opción. La más coherente con R7.8/P5 y con R2.2(a) es A **si** se acepta que el texto es D; la más coherente con R2.1/R7.5 es B **si** se acepta que la foto B es I suficiente. C es la más conservadora pero deja un incumplimiento de R2.4 y una incoherencia no justificada. La decisión requiere, como mínimo, calificar la foto B y los dibujos de Ealing (DS-120, DS-121) y resolver la laguna de «slightly» vs «leve» (DS-122).