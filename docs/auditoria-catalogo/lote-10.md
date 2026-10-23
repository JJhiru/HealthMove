# Lote 10 · Primera auditoría con el protocolo 1.0: Arthritis UK, ejercicios sentados de pies, cadera y rodilla (4 ejercicios)

- Fecha: 2026-10-22
- Versión del protocolo: 1.0
- Catálogo: v0.3.0 (actualizado 2026-10-14), rama `desarrollo-v1`, commit `fcb38be9aac0b69cf178e61b93c9ec143492222c`
- Identificador git del catálogo: `185ad76b7b6edbd7d30c1c24eac607af2deb2ef3` (antes de aplicar; después, el catálogo tiene cambios sin confirmar).
- Huellas literales: `recoger-toalla-dedos-pies` `4e998d60872bc98c`, `banda-tobillo-fuera-sentado` `7dc1b8b0c9b571e8`, `cuadriceps-estatico-sentado` `4338726a0762540c`, `cruce-piernas-isometrico` `1b83ec65c28231ee`.
- **Por qué este lote:** son los únicos ejercicios sin auditar que, con sus etiquetas actuales, son compatibles a la vez con «solo sentado», «un brazo», «cerrar la mano» y «brazo arriba», la combinación que hoy no genera rutina (C3 del informe de pendientes). Los 4 son de la misma organización. La disponibilidad no decide las etiquetas (principio 6): la auditoría propone **restar**, no sumar (ver «Resumen del lote»).
- **Encargo:** «continuar auditando» (`registro.md`, P22). **Aplicación (2026-10-22, P24):** con la autorización de P23 se aplicó todo lo de «Propuesta de cambios» que no depende de CN-2 ni de Q5. La columna «Etiqueta actual» conserva el valor de antes de aplicar.
- **Fuentes abiertas** (2026-10-22, descargadas con `curl`, HTTP 200):

| Fuente | URL | Datos | Revisado |
|---|---|---|---|
| Arthritis UK, «Exercises for the toes, feet and ankles» | `https://www.arthritis-uk.org/information-and-support/living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/exercises-for-healthy-joints/exercises-for-the-toes-feet-and-ankles/` | HTML, SHA-256 (prefijo) `659cc77a7d8393db` | Texto y las dos imágenes de los ejercicios («Towel pickup with toes exercise», «Seated ankle out stretch with resistance band») |
| Arthritis UK, «Exercises for the hips» | `https://www.arthritis-uk.org/information-and-support/living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/exercises-for-healthy-joints/exercises-for-the-hips/` | HTML, SHA-256 (prefijo) `cbe7ef7a52dff031` | Texto e imagen «Quadriceps exercise lying down» |
| Arthritis UK, «Exercises for the knees» | `https://www.arthritis-uk.org/information-and-support/living-with-arthritis/health-and-wellbeing/exercising-with-arthritis/exercises-for-healthy-joints/exercises-for-the-knees/` | HTML, SHA-256 (prefijo) `084c931a12448551` | Texto e imagen «Leg Cross Stretch» |

- **Fecha de revisión de las páginas:** ninguna de las tres declara una fecha de revisión en el HTML descargado. Por R10.2 (propuesto), solo queda la fecha de consulta.
- **Aviso de las páginas:** las tres muestran «this page has been automatically translated using AI technology». El texto descargado está en inglés; no se ha podido saber si ese inglés es el original o una traducción. Se registra como limitación, sin efecto en las etiquetas.
- **Licencia:** el catálogo dice «Todos los derechos reservados: instrucciones redactadas con palabras propias». No se ha verificado de nuevo. Las citas de este informe son breves (apartado 7 de la skill).
- **Población declarada (D):** cada página dice para qué problemas sirve: «helpful for problems and pain affecting the toes, feet and ankles»; «helpful for problems affecting the hips and hip pain»; «If you have problems affecting your knee or knees or if you have knee pain». Por R8.1, `especifica_de` se propone con un nombre breve como los existentes («rodilla», «cadera»): «pies y tobillos», «cadera» y «rodilla». Es una declaración de problema, no de diagnóstico.
- **Ilustraciones de HealthMove:** renderizadas con `public/js/figura.js` desde `public/data/ilustraciones.json` y comparadas con las imágenes de la fuente (R7.6).

## 66. recoger-toalla-dedos-pies

### Identificación
- ID: `recoger-toalla-dedos-pies`
- Nombre: Arrugar la toalla con los dedos de los pies
- Fuente: Arthritis UK (antes Versus Arthritis), «Exercises for the toes, feet and ankles», apartado «Towel pickup with toes exercise»
- Población destinataria de la fuente (si la declara): problemas y dolor de dedos, pies y tobillos
- Estado inicial: `borrador`; sin auditar
- Resultado documental: requiere aclaraciones, dos adaptaciones y un `true` conservador

### Evidencia de la fuente
- Ubicación exacta: página «Exercises for the toes, feet and ankles», apartado «Towel pickup with toes exercise», texto e imagen.
- Pasos originales relevantes, resumidos con palabras propias: sentado, con una toalla en el suelo delante; con el talón apoyado, levantar la toalla arrugándola entre los dedos; de 10 a 20 veces. Progresión: añadir un peso pequeño (una lata) sobre la toalla.
- Coincidencias (C1): sentado, toalla delante, talón apoyado, dosis de 10 a 20.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente dice «pick up the towel» (levantarla) y HealthMove dice «arruga la toalla… para acercarla». C3, «Estírala de nuevo» no está en la fuente y no dice cómo: si es con las manos, exige agacharse hasta el suelo. C3, la instrucción 1 no dice que hay que sentarse.
- Adaptaciones que deben documentarse: la fuente no dice si se hace con los dos pies («repite con el otro pie» llena esa laguna); se omite la progresión con peso.
- Hechos, inferencias e incertidumbres: D (imagen), sentado en una silla con el tronco erguido; **una mano sujeta el borde delantero del asiento**; la otra no se ve. D (imagen), el pie que trabaja queda bajo la rodilla o algo por delante. I, la mano en el asiento puede ser solo la postura del dibujo: el texto no la pide.
- Limitaciones de la verificación: la imagen es un dibujo, con una sola vista lateral.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado (texto e imagen) | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso está en el asiento | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado de principio a fin | evidencia | FALSE | — |
| impacto | false | D: el pie no se levanta del suelo («Keeping your heel on the ground») | evidencia | FALSE | — |
| carga_externa | false | D: sin peso; la progresión con la lata se omite | evidencia | FALSE | Si se incorporara la progresión, sería `true` |
| esfuerzo_cardio | false | D: ejercicio de fuerza del pie | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (imagen): la mano en el borde del asiento | evidencia | FALSE | — |
| mano_detras | false | D (imagen): mano al lado del cuerpo | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): el movimiento es del pie, sin función de los brazos; I (imagen): una sola mano en el asiento | evidencia | FALSE | Una mano que se apoya sin que el otro brazo trabaje no cuenta (Q1, P9) |
| agarre | false | I (imagen): una mano sujeta el borde del asiento; el texto no lo pide. No se sabe si forma parte de la ejecución | conservadora | TRUE | R7.5 y Q2 (P10): sin evidencia de que no se sujete, se marca |
| peso_en_manos | false | D: sentado; la mano sujeta, el peso está en el asiento | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D (imagen, vista lateral): el pie bajo la rodilla o algo por delante, en torno a 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (imagen): sentado normal, el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (imagen): tronco erguido durante el ejercicio | evidencia | FALSE | Siempre que se retire «Estírala de nuevo» o se diga que es con el pie; si no, ver CN-2 |
| rotacion_tronco | false | D (imagen): sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recursos `silla` y `toalla`: coherentes.
- Dosis «De 10 a 20 veces con cada pie»: el rango es de la fuente; «con cada pie» es la laguna que se documenta como adaptación.
- Ilustración (detalle del pie, dedos encogidos sobre la toalla): coherente con el gesto. No induce otro movimiento (R7.6).

### Incidencias
- **Poner la toalla en el suelo** es una preparación que puede exigir agacharse o usar las manos. Ninguna regla dice si las preparaciones cuentan: **CN-2** (nuevo, `registro.md`). Valor provisional: el actual.
- El `true` de `agarre` resta este ejercicio a «cerrar la mano». Se cerraría si el desarrollador decide que un apoyo que solo aparece en la imagen, y que el texto no pide, no cuenta. Eso sería un criterio nuevo (R1.4, paso 4), no una lectura de Q2.

### Propuesta de cambios
- Instrucción 1: «Pon una toalla en el suelo delante de ti.» → «Siéntate con una toalla en el suelo delante de ti.» (aclaración, «Sit down with a towel on the floor in front of you»).
- Instrucción 2: «arruga la toalla con los dedos del pie para acercarla» → «levanta la toalla arrugándola entre los dedos del pie» (aclaración, «pick up the towel by scrunching it»).
- Instrucción 3: «Estírala de nuevo y repite con el otro pie.» → «Suelta la toalla y repite. Después, cambia de pie.» (se retira un paso que la fuente no tiene).
- `exigencias.agarre`: `false` → `true`, con la nota «[conservadora] agarre: la imagen de la fuente muestra una mano sujetando el borde del asiento y el texto no lo pide. Se cerraría con: evidencia de que sujetarse no forma parte de la ejecución.»
- `adaptaciones`: añadir «La fuente no dice si se hace con los dos pies; aquí se hace con cada pie.» y «Se omite la versión más difícil de la fuente, que añade un peso pequeño sobre la toalla.»
- `fuente.especifica_de`: «pies y tobillos». `fuente.consultado`: 2026-10-22.
- Impacto (modo auditoría, ver «Resumen del lote»): sale de `cerrar_mano`.

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (CN-2: dejar la toalla en el suelo exige llegar al suelo). Cambios de «Propuesta de cambios» aplicados el 2026-10-22 (P24).

## 67. banda-tobillo-fuera-sentado

### Identificación
- ID: `banda-tobillo-fuera-sentado`
- Nombre: Girar el pie hacia fuera con banda
- Fuente: Arthritis UK (antes Versus Arthritis), «Exercises for the toes, feet and ankles», apartado «Seated ankle out stretch with resistance band»
- Población destinataria de la fuente (si la declara): problemas y dolor de dedos, pies y tobillos
- Estado inicial: `borrador`; sin auditar
- Resultado documental: pendiente de CN-2; aclaraciones y un `true` conservador

### Evidencia de la fuente
- Ubicación exacta: página «Exercises for the toes, feet and ankles», apartado «Seated ankle out stretch with resistance band», texto e imagen.
- Pasos originales relevantes, resumidos con palabras propias: hacer un lazo con la banda y sujetarlo con la pata de una mesa o silla o con el otro pie; meter un pie en el lazo; con el talón fijo en el suelo, girar los dedos hacia fuera contra la banda; volver despacio. Ir subiendo hasta 10 repeticiones, y hacer la serie 3 veces al día.
- Coincidencias (C1): anclaje con el otro pie o con la pata, talón fijo, giro hacia fuera, vuelta lenta.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, «3 series al día» → una serie (documentada). C3, HealthMove dice «átalo a la pata de la silla»; la fuente dice sujetarlo con la pata («hold it in place… with the leg of a table or chair»), no atarlo. C3, la dosis no recoge «Build up to» (ir subiendo hasta 10).
- Adaptaciones que deben documentarse: «con cada pie» (la fuente habla de un pie y no dice que se cambie); la progresión hasta 10, en la adaptación existente.
- Hechos, inferencias e incertidumbres: D (imagen, vista frontal), sentado en una silla, la banda rodea los dos pies y **el lazo está cerrado con un nudo**; las manos no intervienen. D (texto), «Make a loop out of a piece of elastic fitness band»: hacer el lazo exige atar la banda. I, meter el pie en el lazo exige llegar con las manos al pie, salvo que otra persona lo prepare.
- Limitaciones de la verificación: la imagen es frontal: no permite ver el ángulo de la rodilla (R7.2).

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado de principio a fin | evidencia | FALSE | — |
| impacto | false | D: «Keeping your heel fixed on the ground» | evidencia | FALSE | — |
| carga_externa | true | D: «against the resistance of the band» | evidencia | TRUE | La banda cuenta (§4) |
| esfuerzo_cardio | false | D: ejercicio de fuerza del tobillo | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (imagen y texto): los brazos no intervienen en la ejecución | evidencia | FALSE | — |
| mano_detras | false | D: los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D: durante la ejecución, sin función de los brazos. Atar el lazo exige las dos manos: CN-2 | evidencia | REQUIERE_ACLARACION | Depende de CN-2; valor provisional, el actual |
| agarre | false | D: durante la ejecución, las manos no sujetan nada. Atar el lazo y colocarlo exige cerrar la mano: CN-2 | evidencia | REQUIERE_ACLARACION | Depende de CN-2; valor provisional, el actual |
| peso_en_manos | false | D: sentado; las manos no apoyan | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | N: la imagen es frontal y el texto no dice dónde queda el pie | conservadora | TRUE | R2.1: falta la vista lateral |
| flexion_amplia_cadera | false | D (imagen): sentado normal durante la ejecución. Llegar al pie para colocar el lazo: CN-2 | evidencia | FALSE | La preparación va a CN-2 |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (imagen): tronco erguido durante la ejecución. Agacharse para colocar el lazo: CN-2 | evidencia | FALSE | La preparación va a CN-2 |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recursos `silla` y `banda`: coherentes.
- Ilustración (detalle del pie desde arriba, banda a un lado y flechas de giro): coherente con el gesto. La fuente ancla la banda con el otro pie; el dibujo no lo muestra, pero no induce otro movimiento (R7.6).

### Incidencias
- **CN-2 (nuevo):** hacer y colocar el lazo exige atar la banda con las dos manos y llegar hasta el pie. Si las preparaciones cuentan, `agarre`, `ambos_brazos` y quizá `inclinacion_tronco` y `flexion_amplia_cadera` pasarían a `true`, y el ejercicio saldría de «un brazo», «cerrar la mano» y «no inclinar la espalda».
- El `true` conservador de `flexion_profunda_rodilla` es por falta de vista lateral, no por evidencia de una rodilla muy doblada. Es la misma clase que el `true` conservador de `flexion-hombro-lado-tumbado` (lote 9). No abre otro CN.

### Propuesta de cambios
- Instrucción 1: «Pasa un lazo de la banda por el pie y sujeta el otro extremo con el otro pie o átalo a la pata de la silla.» → «Haz un lazo con la banda y sujétalo con el otro pie o con la pata de una mesa o silla. Mete un pie en el lazo.» (aclaración, «hold it in place»).
- `dosis`: «10 veces con cada pie.» → «Hasta 10 veces con cada pie.»
- `adaptaciones`: sustituir la actual por «La fuente propone ir subiendo hasta 10 repeticiones y hacer la serie 3 veces al día; aquí se hace una serie dentro de la rutina.» y añadir «La fuente describe el ejercicio con un pie; aquí se hace con cada pie.»
- `exigencias.flexion_profunda_rodilla`: `false` → `true`, con la nota «[conservadora] flexion_profunda_rodilla: la imagen de la fuente es frontal y no deja ver el ángulo de la rodilla. Se cerraría con: una vista lateral o un texto que diga dónde queda el pie.»
- `fuente.especifica_de`: «pies y tobillos». `fuente.consultado`: 2026-10-22.
- `agarre` y `ambos_brazos`: sin cambio hasta CN-2.
- Impacto (modo auditoría): sale de `rodilla` y `no_doblar_rodilla`.

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (CN-2: si la preparación del material cuenta para las exigencias). Aplicado el 2026-10-22 (P24) todo lo demás: instrucción 1, dosis, adaptaciones, `flexion_profunda_rodilla` conservadora, `especifica_de` y `consultado`.

## 68. cuadriceps-estatico-sentado

### Identificación
- ID: `cuadriceps-estatico-sentado`
- Nombre: Apretar el muslo sentado
- Fuente: Arthritis UK (antes Versus Arthritis), «Exercises for the hips», apartado «Quadriceps exercise»
- Población destinataria de la fuente (si la declara): problemas y dolor de cadera
- Estado inicial: `borrador`; sin auditar
- Resultado documental: depende de Q5 (si una silla es una de las posiciones sentadas que permite la fuente)

### Evidencia de la fuente
- Ubicación exacta: página «Exercises for the hips», apartado «Quadriceps exercise», texto e imagen («Quadriceps exercise lying down»).
- Pasos originales relevantes, resumidos con palabras propias: con la pierna recta, tirar de los dedos y del tobillo hacia uno mismo mientras se empuja la rodilla con fuerza contra el suelo; notar la tensión en la parte delantera del muslo; mantener 5 segundos y relajar. Añade que también puede hacerse sentado si resulta más cómodo («This exercise can be done from a sitting position as well»), sin decir cómo.
- Coincidencias (C1): pierna recta, dedos hacia uno mismo, tensión del muslo, 5 segundos.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, 10 repeticiones (la fuente no las da; documentada). C3, la fuente lo describe y lo dibuja **tumbado**, con la rodilla empujando contra el suelo; HealthMove lo hace **en una silla**, con el talón en el suelo, donde la rodilla no tiene una superficie contra la que empujar («empuja la parte de atrás de la rodilla hacia abajo»).
- Adaptaciones que deben documentarse: la posición en silla (si pasa R3.1) y el cambio de pierna.
- Hechos, inferencias e incertidumbres: D (imagen), tumbado boca arriba, las dos piernas estiradas, flecha hacia abajo en la rodilla y hacia el cuerpo en el pie. D (texto), «a sitting position» sin precisar. **I, en contra de la silla:** en la página de la rodilla, la misma organización describe un ejercicio parecido sentado («Quads exercise with roll»): «Sit on the floor, sofa or bed, with your legs stretched straight out in front of you». Es decir, cuando concreta, su «sentado» es con las piernas estiradas sobre una superficie.
- Limitaciones de la verificación: la fuente no describe la versión sentada de este ejercicio.

### Auditoría de exigencias

Etiquetas de la versión de HealthMove (en silla). Si el desarrollador decide que la silla no pasa R3.1, este ejercicio es una modificación (DG-5) y la tabla no vale.

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado de principio a fin | evidencia | FALSE | — |
| impacto | false | D: contracción sin movimiento | evidencia | FALSE | — |
| carga_externa | false | D: estructural, sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: contracción estática del muslo | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D: estructural, los brazos no intervienen; en la imagen, a los lados | evidencia | FALSE | — |
| mano_detras | false | D: estructural, los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D: estructural, los brazos no intervienen | evidencia | FALSE | — |
| agarre | false | D: estructural; en la imagen, manos abiertas a los lados | evidencia | FALSE | — |
| peso_en_manos | false | D: estructural, las manos no apoyan | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D: «keeping your leg straight» | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado con la pierna estirada y el talón en el suelo, el muslo no se acerca al tronco más que sentado | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: estructural, la contracción es de la pierna | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recurso `silla`: coherentes con la versión de HealthMove, no con la de la fuente (tumbado).
- Dosis «Mantén 5 segundos. 10 veces con cada pierna.»: el tiempo es de la fuente; las repeticiones, una adaptación documentada.
- Ilustración (sentado en una silla, pierna estirada con el talón en el suelo): fiel a las instrucciones de HealthMove; distinta de la imagen de la fuente (tumbado). Si la silla pasa R3.1, no es una discrepancia de R7.7.

### Incidencias
- **Q5 (abierta):** con la prueba de R3.1 tal como está escrita, «a sitting position» es un rango que da el texto y la silla cabría. Pero la misma organización, cuando concreta, se sienta con las piernas estiradas sobre el suelo, un sofá o una cama, y en una silla la rodilla no puede empujar contra nada. **Claude no lo decide.** Se añade al documento de adaptaciones de Q5 (`adaptaciones-q5-2026-10-22.md`).
- Si la silla no pasa, las opciones que respetan DG-5 son: (a) cambiar a la versión tumbada de la fuente (posición `tumbado`, recurso `cama`, con su tabla nueva); (b) no incorporar el ejercicio.

### Propuesta de cambios
- Si la silla pasa R3.1:
  - `adaptaciones`: sustituir por «La fuente lo describe tumbado, con la rodilla empujando contra el suelo, y dice que también puede hacerse sentado, sin precisar cómo; aquí se hace en una silla.» y «La fuente indica el tiempo, pero no las repeticiones ni el cambio de pierna; se usan 10 con cada pierna.»
  - Sin cambios de etiquetas.
- En los dos casos: `fuente.especifica_de` = «cadera»; `fuente.consultado` = 2026-10-22.

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (Q5: si una silla es una de las posiciones sentadas que permite la fuente). Aplicado el 2026-10-22 (P24): `especifica_de`, `consultado` y una nota con la duda de posición.

## 69. cruce-piernas-isometrico

### Identificación
- ID: `cruce-piernas-isometrico`
- Nombre: Empujar una pierna contra la otra
- Fuente: Arthritis UK (antes Versus Arthritis), «Exercises for the knees», apartado «Leg cross»
- Población destinataria de la fuente (si la declara): problemas y dolor de rodilla
- Estado inicial: `borrador`; sin auditar
- Resultado documental: depende de Q5; discrepancia de ilustración (R7.7) y dos `true` conservadores

### Evidencia de la fuente
- Ubicación exacta: página «Exercises for the knees», apartado «Leg cross», texto e imagen («Leg Cross Stretch»).
- Pasos originales relevantes, resumidos con palabras propias: sentado en el borde de una mesa, un asiento o una cama, con los tobillos cruzados; empujar la pierna de delante hacia atrás y la de atrás hacia delante hasta que se tensen los muslos; aguantar todo lo posible y relajar; descansar un minuto y repetir otras dos veces; cambiar de pierna.
- Coincidencias (C1): tobillos cruzados, empuje, tensión, 3 veces y cambio de cruce.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, el descanso libre en lugar de un minuto (documentada). C3, falta «en el borde» del asiento. C3, HealthMove añade «sin dolor», que la fuente no dice (un consejo de HealthMove: R6.3). C3, la postura de las piernas (abajo).
- Adaptaciones que deben documentarse: «sin dolor», si se mantiene; la postura de las piernas, si pasa R3.1.
- Hechos, inferencias e incertidumbres: D (imagen, vista lateral), **las dos piernas estiradas al frente, en el aire**, a la altura del asiento, y **las dos manos sujetando el borde** de la mesa. D (texto), el texto no dice nada de las piernas ni de las manos. I, sentado en el borde de un asiento normal, los pies podrían llegar al suelo, pero la fuente no lo muestra.
- Limitaciones de la verificación: una sola imagen.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado de principio a fin | evidencia | FALSE | — |
| impacto | false | D: contracción sin movimiento | evidencia | FALSE | — |
| carga_externa | false | D: la resistencia es la otra pierna, no un peso ni una banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: contracción estática | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (imagen): manos en el borde del asiento | evidencia | FALSE | — |
| mano_detras | false | D (imagen): manos a los lados | evidencia | FALSE | — |
| ambos_brazos | false | D (imagen): las dos manos se sujetan al borde; el texto no lo pide | conservadora | TRUE | Q1 (P9): el apoyo de las dos manos cuenta |
| agarre | false | D (imagen): las manos rodean el borde; el texto no lo pide | conservadora | TRUE | R7.5 y Q2 (P10) |
| peso_en_manos | false | D: sentado; las manos sujetan el borde, sin soportar el peso del cuerpo, que está en el asiento (como en el lote 7) | evidencia | FALSE | R7.3: el contacto no demuestra carga |
| flexion_profunda_rodilla | false | D (imagen): rodillas estiradas en la fuente; en la versión de HealthMove, el dibujo deja el pie por delante de la rodilla | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (imagen): el muslo queda como al estar sentado | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (imagen): tronco erguido | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recurso `silla`: coherentes. La fuente usa también mesa o cama; HealthMove solo silla (no es una exigencia).
- Dosis: «3 veces con cada cruce» coincide con «repeat another two times… Switch legs».
- **Ilustración:** sentado en una silla con los pies cerca del suelo y las rodillas dobladas. La fuente muestra las piernas estiradas en el aire. Induce otra postura (R7.6): **discrepancia de R7.7** mientras no se decida si la postura de HealthMove pasa R3.1.

### Incidencias
- **Q5 (abierta):** el texto no da la postura de las piernas, y la imagen las muestra estiradas. Con la prueba de R3.1 tal como está escrita («si el texto no da rango y la imagen lo muestra, la imagen fija el rango»), la versión de HealthMove con los pies abajo **no pasaría**. Q5 está pendiente; se añade a `adaptaciones-q5-2026-10-22.md`.
- Si se sigue la imagen, cambia la ilustración y la instrucción 1 («Siéntate en el borde del asiento con las piernas estiradas al frente y cruza los tobillos»). Las etiquetas de la tabla no cambian, porque ya se han evaluado con las dos posturas.
- Los dos `true` conservadores restan el ejercicio a «un brazo» y «cerrar la mano». Es la misma clase que el apoyo que solo aparece en la imagen del ejercicio 66.

### Propuesta de cambios
- `exigencias.ambos_brazos`: `false` → `true`, con la nota «[conservadora] ambos_brazos: la imagen de la fuente muestra las dos manos sujetando el borde del asiento y el texto no lo pide. Se cerraría con: evidencia de que sujetarse no forma parte de la ejecución.»
- `exigencias.agarre`: `false` → `true`, con la nota «[conservadora] agarre: la imagen de la fuente muestra las manos rodeando el borde del asiento. Se cerraría con: la misma evidencia que ambos_brazos.»
- Instrucción 1: «Siéntate y cruza los tobillos.» → «Siéntate en el borde del asiento y cruza los tobillos.» (aclaración, «Sit on the edge of»). Si se sigue la imagen, además «con las piernas estiradas al frente», y la ilustración cambia.
- Instrucción 3: «Aguanta todo lo que puedas sin dolor y relaja.» → mantener «sin dolor» y documentarlo, o quitarlo. Si se mantiene, `adaptaciones`: añadir «La fuente dice que se aguante todo lo posible; HealthMove añade que sea sin dolor.»
- `fuente.especifica_de`: «rodilla». `fuente.consultado`: 2026-10-22.
- Impacto (modo auditoría): sale de `un_brazo` y `cerrar_mano`.

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (Q5: postura de las piernas; con ella se resuelve la discrepancia de ilustración de R7.7). Aplicado el 2026-10-22 (P24): los dos `true` conservadores, «en el borde del asiento», la adaptación «sin dolor», `especifica_de` y `consultado`. La ilustración no se cambia hasta Q5.

## Revisión de DeepSeek

**Consulta C10** (`deepseek/ejecuciones/20261023T022202Z-fase-09-lote10/`, DS-223 a DS-240), hecha el 2026-10-22 tras aplicar P24. Ninguna etiqueta cambia. Análisis completo: `deepseek/analisis-claude/fase-09-lote10.md`.

- **DS-225 y DS-226, aceptados:** en el ejercicio 69 la imagen sí muestra el apoyo (D). Lo que no se sabe es si el ejercicio lo exige, y Q1 y Q2 no lo cubren: **CN-3**. El `true` conservador queda como valor provisional.
- **DS-231, aceptado:** CN-2 afecta a 23 ejercicios; con la opción (a) cambiarían 14, uno de ellos publicado.
- **DS-232 y DS-234, aceptados:** la opción (b) de CN-2 es un texto de interfaz (Q8); la ilustración del 69 se rehace después de Q5.
- El resto son aclaraciones de redacción o confirmaciones.

## Resumen del lote

- **4 ejercicios auditados por primera vez con el protocolo 1.0.** Ninguno queda listo sin una decisión o una corrección:
  - `recoger-toalla-dedos-pies`: PENDIENTE DE DECISIÓN (CN-2), con las aclaraciones, las dos adaptaciones y el `agarre` conservador ya aplicados;
  - `banda-tobillo-fuera-sentado`: PENDIENTE DE DECISIÓN (CN-2);
  - `cuadriceps-estatico-sentado`: PENDIENTE DE DECISIÓN (Q5);
  - `cruce-piernas-isometrico`: PENDIENTE DE DECISIÓN (Q5), con discrepancia de ilustración.
- **Nuevo: CN-2**, preparación del material (`registro.md`).
- **Dos clases que se repiten:**
  - el apoyo de las manos que **solo aparece en la imagen** (66 y 69). Se ha resuelto con las reglas existentes (R7.5, Q1, Q2) y da `true` conservador. Si el desarrollador quiere otro criterio, sería una regla nueva;
  - la **posición que la fuente no concreta o concreta solo en la imagen** (68 y 69): es Q5.
- **Disponibilidad** (`node scripts/disponibilidad.mjs --escenario`, modo auditoría con borradores, catálogo v0.3.0 en `fcb38be`, aplicando solo los 4 `true` propuestos y CN-2 sin resolver). **No es la disponibilidad real ni clínica:**
  - `cerrar_mano`: 143 → 141; `un_brazo`: 131 → 130; `rodilla` y `no_doblar_rodilla`: 198 → 197;
  - `solo_sentado` + `un_brazo` + `cerrar_mano` + `brazo_arriba`: 38 → 36 (parte principal 16 → 14).
  - En la app publicada, nada cambia hasta que el desarrollador apruebe alguno.
- **Conclusión sobre el hueco:** este lote **no** llena la combinación que hoy no genera rutina. Con la evidencia, dos de los cuatro necesitan las manos.
- **Aplicado (P24):** todo lo que no depende de CN-2 ni de Q5. Revisado con DeepSeek (C10, P27).
