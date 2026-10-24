# Lote 27 · Primera auditoría con el protocolo 1.0: MS Trust, Moving Medicine y Versus Arthritis (8 ejercicios)

- Fecha: 2026-10-24
- Versión del protocolo: 1.0
- Catálogo: v0.3.0 (actualizado 2026-10-14), rama `desarrollo-v1`, commit `f215769`
- Identificador git del catálogo: no fiable, el catálogo tiene cambios sin confirmar (son los cambios de este lote, aplicados antes de cerrarlo).
- Huellas literales (tras aplicar los cambios): `abdomen-sentado` `721eca7d69d5f145`, `desplazar-peso-sentado` `7bc3bea739975f3f`, `puente-suelo` `0ad5c1b19f446608`, `bascula-pelvica-suelo` `bc0c2c315069f968`, `alcance-cruzado-sentado` `d3951e4f48a0bab0`, `press-encima-cabeza-sentado` `8c8eba542a34ae62`, `circulos-tobillo-sentado` `cbebed0927c21c89`, `separar-dedos-pies-sentado` `901c240138897bf8`.
- **Cómo se hizo (P29):** evidencia de Claude (`evidencia/lote-27.md`); borrador de DeepSeek (consulta C28, un bloque); verificación de Claude. **Los apartados son el borrador de DeepSeek con las correcciones de Claude** listadas en «Revisión de DeepSeek».
- **Fuentes abiertas** (2026-10-24, `curl`, HTTP 200): dos PDF de MS Trust, el de Moving Medicine y la página de Versus Arthritis con sus dibujos; URL y hashes en la evidencia.
- **Ilustraciones de HealthMove** (R7.6): las 8 coinciden (renderizadas y revisadas por Claude).

## 227. abdomen-sentado

### Identificación
- ID: `abdomen-sentado`
- Nombre: Activar el abdomen en la silla
- Fuente: MS Trust, «Exercises: posture» (F1), «Exercise 22: Core stability» (apartado 227)
- Población destinataria de la fuente (si la declara): «esclerosis múltiple» (D, datos comunes de F1). `especifica_de` actual: «esclerosis múltiple».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: **C3 en la posición**: la fuente describe el ejercicio **a cuatro patas** y ofrece la variante sentada como alternativa («NB This exercise can also be done in a sitting position»); HealthMove solo tiene la versión sentada y **no lo documenta en `adaptaciones`** (ver DS-474).

### Evidencia de la fuente
- Ubicación exacta: F1, «Exercise 22: Core stability» (apartado 227).
- Pasos originales relevantes, resumidos con palabras propias: a cuatro patas; soltar el abdomen y meterlo desde debajo del ombligo hacia arriba y hacia dentro; contar hasta 10 si se puede; 3 a 5 veces. La fuente añade: «NB This exercise can also be done in a sitting position», con la espalda apoyada en el respaldo, soltar el abdomen, meterlo desde debajo de la cintura, contar hasta 10 y seguir respirando.
- Coincidencias (C1): el movimiento abdominal (soltar y meter), la cuenta hasta 10, 3 a 5 veces, la respiración.
- Diferencias (C3) y adaptaciones documentadas (C2): **C3, la posición**: HealthMove solo ofrece la variante sentada y no lo declara en `adaptaciones`. C2, ninguna.
- Hechos, inferencias e incertidumbres: D (texto), la variante sentada existe en la fuente. D (dibujos), solo a cuatro patas; no hay dibujo sentado. I, la variante sentada es un subconjunto de la fuente (R3.1).
- Limitaciones de la verificación: la ilustración la verificó Claude (renderizada; descrita en la evidencia).

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no se usan | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no se usan | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no se usan | evidencia | FALSE | Q1 (P9): no hay uso de brazos |
| agarre | false | D (texto): las manos no sujetan nada | evidencia | FALSE | — |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación ni arqueo | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recurso `silla`, dosis «Mantén hasta 10 segundos. De 3 a 5 veces.»: coherentes con la variante sentada de F1.
- Ilustración: Claude la renderizó y la describe en la evidencia; coincide (R7.6). DeepSeek no podía verla.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «esclerosis múltiple». Coincide con R8.1.
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- La posición sentada no consta en `adaptaciones` (DS-474).

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente lo describe a cuatro patas y ofrece la variante sentada como alternativa; aquí se hace sentado.» (R3.1, Q5; DS-474).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 228. desplazar-peso-sentado

### Identificación
- ID: `desplazar-peso-sentado`
- Nombre: Pasar el peso de un glúteo a otro
- Fuente: MS Trust, «Exercises: posture» (F1), «Exercise 6: Cheek to cheek» (apartado 228)
- Población destinataria de la fuente (si la declara): «esclerosis múltiple» (D, datos comunes de F1). `especifica_de` actual: «esclerosis múltiple».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento. La nota de `inclinacion_tronco` no tiene la forma de R2.4 (ver DS-475).

### Evidencia de la fuente
- Ubicación exacta: F1, «Exercise 6: Cheek to cheek» (apartado 228).
- Pasos originales relevantes, resumidos con palabras propias: sentado en una superficie firme; pasar el peso de un isquion al otro levantando un glúteo, «manteniendo el tronco erguido»; en el lado que sube, las costillas se acercan; 3 a 5 veces a cada lado.
- Coincidencias (C1): sentado, pasar el peso de un glúteo a otro, el tronco erguido, 3 a 5 veces a cada lado.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujos), el tronco casi vertical con una ligera curva lateral. I, la curva lateral es una inclinación leve (Q3).
- Limitaciones de la verificación: la ilustración la verificó Claude (renderizada; descrita en la evidencia).

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no se usan | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no se usan | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no se usan | evidencia | FALSE | Q1 (P9): no hay uso de brazos |
| agarre | false | D (texto): las manos no sujetan nada | evidencia | FALSE | — |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | true | D (texto y dibujos): «las costillas se acercan» en el lado que sube; el tronco se curva ligeramente de lado | conservadora | TRUE | R2.1: la curva lateral es leve y la fuente no da ángulo (Q3); nota pendiente de forma R2.4 (DS-475) |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recurso `silla`, dosis «De 3 a 5 veces hacia cada lado.»: coherentes con F1.
- Ilustración: Claude la renderizó y la describe en la evidencia; coincide (R7.6). DeepSeek no podía verla.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «esclerosis múltiple». Coincide con R8.1.
- `notas_etiquetado` actual: «Las costillas del lado elevado se acercan: es una inclinación lateral.» No tiene la forma de R2.4 (DS-475).

### Incidencias
- La nota de `inclinacion_tronco` no sigue la forma `[conservadora] <exigencia>: <motivo>. Se cerraría con: <evidencia que falta>.` (DS-475).

### Propuesta de cambios
- `notas_etiquetado`: reescribir en la forma de R2.4: «[conservadora] inclinacion_tronco: las costillas del lado elevado se acercan y el tronco se curva ligeramente de lado; la fuente no da ángulo (Q3). Se cerraría con: una vista frontal que muestre que la curva no pasa de leve.» (DS-475).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 229. puente-suelo

### Identificación
- ID: `puente-suelo`
- Nombre: Puente en el suelo
- Fuente: MS Trust, «Exercises: core stability» (F2), «Exercise 3: Bridging» (apartado 229)
- Población destinataria de la fuente (si la declara): «esclerosis múltiple» (D, datos comunes de F2). `especifica_de` actual: «esclerosis múltiple».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento. `flexion_profunda_rodilla` en `false` sin D (ver DS-476). `variante_de: puente-tumbado` (contexto, no auditado).

### Evidencia de la fuente
- Ubicación exacta: F2, «Exercise 3: Bridging» (apartado 229).
- Pasos originales relevantes, resumidos con palabras propias: tumbado con las rodillas dobladas y los pies apoyados en el suelo o la cama, separados unos 30 cm; apretar los glúteos y subirlos formando un puente; mantener; bajar despacio; 3 a 5 veces; subir y bajar en línea recta.
- Coincidencias (C1): tumbado, rodillas dobladas, pies apoyados separados unos 30 cm, subir la pelvis, bajar despacio, 3 a 5 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna. La fuente permite suelo o cama; HealthMove tiene esta entrada como `suelo` y `puente-tumbado` como `tumbado` (especificación §3).
- Hechos, inferencias e incertidumbres: D (texto y dibujos), la posición y el movimiento. I (dibujos), la rodilla en torno a 90° (clase de CN-5).
- Limitaciones de la verificación: la ilustración la verificó Claude (renderizada; descrita en la evidencia).

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no se usan | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no se usan | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no se usan | evidencia | FALSE | Q1 (P9): no hay uso de brazos |
| agarre | false | D (texto): las manos no sujetan nada | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | I (dibujos): rodillas dobladas, en torno a 90°; la fuente no da ángulo | conservadora | TRUE | R2.2: un `false` necesita D; CN-5 (P29) aplica `true` conservador en esta clase (DS-476) |
| flexion_amplia_cadera | false | D (texto): el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): la pelvis sube en línea recta; no hay inclinación ni arqueo del tronco | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `suelo`, sin recursos, dosis «De 3 a 5 veces.»: coherentes con F2.
- Ilustración: Claude la renderizó y la describe en la evidencia; coincide (R7.6). DeepSeek no podía verla.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «esclerosis múltiple». Coincide con R8.1.
- `notas_etiquetado` actual: vacío. Falta la nota `[conservadora]` de `flexion_profunda_rodilla` (DS-476).

### Incidencias
- `flexion_profunda_rodilla: false` sin evidencia D (DS-476).

### Propuesta de cambios
- `exigencias.flexion_profunda_rodilla`: `false` → `true` conservador (R2.1, CN-5; DS-476).
- `notas_etiquetado`: añadir «[conservadora] flexion_profunda_rodilla: el dibujo de la fuente muestra la rodilla en torno a 90° y no consta que no los pase. Se cerraría con: una vista lateral que muestre la rodilla por debajo de 90°.» (R2.4; DS-476).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 230. bascula-pelvica-suelo

### Identificación
- ID: `bascula-pelvica-suelo`
- Nombre: Báscula pélvica en el suelo
- Fuente: MS Trust, «Exercises: core stability» (F2), «Exercise 4: Pelvic tilt lying» (apartado 230)
- Población destinataria de la fuente (si la declara): «esclerosis múltiple» (D, datos comunes de F2). `especifica_de` actual: «esclerosis múltiple».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento. `flexion_profunda_rodilla` en `false` sin D (DS-476). `inclinacion_tronco: true` sin nota (DS-477). `variante_de: bascula-pelvica-tumbado` (contexto, no auditado).

### Evidencia de la fuente
- Ubicación exacta: F2, «Exercise 4: Pelvic tilt lying» (apartado 230).
- Pasos originales relevantes, resumidos con palabras propias: la misma posición inicial que 229; apretar el abdomen para bascular la pelvis y apoyar la espalda en la cama o el suelo; soltar; 3 a 5 veces.
- Coincidencias (C1): tumbado, rodillas dobladas, pies apoyados, bascular la pelvis, apoyar la espalda, soltar, 3 a 5 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujos), la posición y el movimiento. I (dibujos), la rodilla en torno a 90° (clase de CN-5). I, la basculación es un movimiento pequeño de la columna (clase de CN-5 y de la nota de `bascula-pelvica-tumbado`).
- Limitaciones de la verificación: la ilustración la verificó Claude (renderizada; descrita en la evidencia).

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no se usan | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no se usan | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no se usan | evidencia | FALSE | Q1 (P9): no hay uso de brazos |
| agarre | false | D (texto): las manos no sujetan nada | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | I (dibujos): rodillas dobladas, en torno a 90°; la fuente no da ángulo | conservadora | TRUE | R2.2: un `false` necesita D; CN-5 (P29) aplica `true` conservador en esta clase (DS-476) |
| flexion_amplia_cadera | false | D (texto): el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | true | I (texto y dibujos): bascular la pelvis y apoyar la espalda es un movimiento pequeño de la columna; §4 no lo define con claridad | conservadora | TRUE | R2.1: ante la duda, `true` conservador con nota (DS-477) |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal` y `calma`, posición `suelo`, sin recursos, dosis «De 3 a 5 veces.»: coherentes con F2.
- Ilustración: Claude la renderizó y la describe en la evidencia; coincide (R7.6). DeepSeek no podía verla.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «esclerosis múltiple». Coincide con R8.1.
- `notas_etiquetado` actual: vacío. Falta la nota `[conservadora]` de `inclinacion_tronco` (DS-477) y la de `flexion_profunda_rodilla` (DS-476).

### Incidencias
- `flexion_profunda_rodilla: false` sin evidencia D (DS-476).
- `inclinacion_tronco: true` sin nota conservadora (DS-477).

### Propuesta de cambios
- `exigencias.flexion_profunda_rodilla`: `false` → `true` conservador (R2.1, CN-5; DS-476).
- `notas_etiquetado`: añadir «[conservadora] flexion_profunda_rodilla: …» (R2.4; DS-476) y «[conservadora] inclinacion_tronco: presionar la zona lumbar contra el suelo es un movimiento pequeño de la columna que §4 no define con claridad. Se cerraría con: un criterio sobre si la báscula pélvica cuenta como inclinación o arqueo.» (R2.4; DS-477).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 231. alcance-cruzado-sentado

### Identificación
- ID: `alcance-cruzado-sentado`
- Nombre: Alcance cruzado
- Fuente: Moving Medicine (Oxford University Hospitals, para Public Health England), «Chair-based Exercise Programme» (F3), «Reaching across», p. 13 (apartado 231)
- Población destinataria de la fuente (si la declara): «pacientes durante una estancia en el hospital» (D, datos comunes de F3). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento. C3 en `especifica_de` (la fuente declara población y el campo está vacío; ver DS-478). La adaptación sobre el reposabrazos es una omisión de una opción de la fuente (R3.1: subconjunto).

### Evidencia de la fuente
- Ubicación exacta: F3, «Reaching across», p. 13 (apartado 231).
- Pasos originales relevantes, resumidos con palabras propias: sentado erguido hacia el borde de la silla; llevar el brazo derecho cruzando el cuerpo y alargar unos centímetros más; volver y repetir con el otro brazo; 5 veces hacia cada lado. «Si hay inestabilidad, sujetarse al reposabrazos con la otra mano.» Objetivo: la flexibilidad de la parte alta de la espalda.
- Coincidencias (C1): sentado, el brazo cruza el cuerpo, alargar, alternar, 5 veces hacia cada lado.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la omisión del reposabrazos (ya documentada). C3, `especifica_de` vacío (DS-478).
- Hechos, inferencias e incertidumbres: D (texto y foto), el brazo estirado cruzando el cuerpo a la altura del hombro, el tronco girado. I, la otra mano no trabaja.
- Limitaciones de la verificación: la ilustración la verificó Claude (renderizada; descrita en la evidencia).

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y foto): el brazo cruza a la altura del hombro, sin pasar por encima | evidencia | FALSE | — |
| mano_detras | false | D (texto y foto): el brazo va por delante, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): un brazo cada vez; la otra mano no trabaja | evidencia | FALSE | Q1 (P9): series con un brazo y después con el otro |
| agarre | false | D (texto y foto): las manos no sujetan nada; la adaptación omite el reposabrazos | evidencia | FALSE | — |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto y foto): el tronco gira, no se inclina | evidencia | FALSE | — |
| rotacion_tronco | true | D (texto y foto): el tronco gira al llevar el brazo cruzando el cuerpo | evidencia | TRUE | §4: girar los hombros respecto a la cadera |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis «5 veces hacia cada lado.»: coherentes con F3.
- Ilustración: Claude la renderizó y la describe en la evidencia; coincide (R7.6). DeepSeek no podía verla.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente declara población (D); ver DS-478.
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- `especifica_de` vacío con población declarada (DS-478).

### Propuesta de cambios
- `fuente.especifica_de`: «estancia en el hospital» (R8.1; forma corta, coherente con «rehabilitación tras un ingreso hospitalario» de P20; DS-478).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 232. press-encima-cabeza-sentado

### Identificación
- ID: `press-encima-cabeza-sentado`
- Nombre: Empujar hacia arriba con botellas
- Fuente: Moving Medicine (Oxford University Hospitals, para Public Health England), «Chair-based Exercise Programme» (F3), «Pillow press», p. 11 (apartado 232)
- Población destinataria de la fuente (si la declara): «pacientes durante una estancia en el hospital» (D, datos comunes de F3). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento. C2 en el material (cojín → botella, ya documentada). C3 en `especifica_de` (DS-478). La adaptación del material es una sustitución, no un subconjunto (ver DS-479).

### Evidencia de la fuente
- Ubicación exacta: F3, «Pillow press», p. 11 (apartado 232).
- Pasos originales relevantes, resumidos con palabras propias: sujetar un cojín con las dos manos cerca del pecho; empujarlo hacia arriba hasta estirar los codos sin bloquearlos, lo más alto posible; 10 veces. Progresión: más repeticiones o cambiar el cojín por un peso pequeño.
- Coincidencias (C1): sentado, empujar hacia arriba, estirar los codos sin bloquearlos, 10 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, el material (cojín → botella; ya documentada). C3, `especifica_de` vacío (DS-478).
- Hechos, inferencias e incertidumbres: D (texto y fotos), el cojín sujeto con las dos manos junto al pecho y después por encima de la cabeza con los brazos estirados. I, la botella sustituye al cojín y al «peso pequeño» de la progresión.
- Limitaciones de la verificación: la ilustración la verificó Claude (renderizada; descrita en la evidencia).

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | true | D (texto): se sostiene un cojín y, en la progresión, un peso pequeño; HealthMove usa botellas | evidencia | TRUE | §4: se sostiene peso añadido |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y fotos): el cojín sube por encima de la cabeza con los brazos estirados | evidencia | TRUE | §4: codo o mano por encima del hombro |
| mano_detras | false | D (texto y fotos): las manos van al pecho y arriba, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y fotos): las dos manos sujetan el cojín y empujan a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto y fotos): las dos manos sujetan el cojín; HealthMove usa botellas | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recursos `silla` y `peso_ligero`, dosis «10 veces.»: coherentes con F3.
- Ilustración: Claude la renderizó y la describe en la evidencia; coincide (R7.6). DeepSeek no podía verla.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente declara población (D); ver DS-478.
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- `especifica_de` vacío con población declarada (DS-478).
- La adaptación del material sustituye el cojín por botellas; R3.1 no lo cubre como subconjunto (DS-479).

### Propuesta de cambios
- `fuente.especifica_de`: «estancia en el hospital» (R8.1; DS-478).
- `adaptaciones`: revisar la redacción para que quede claro que la botella sustituye al cojín y al «peso pequeño» de la progresión (DS-479).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 233. circulos-tobillo-sentado

### Identificación
- ID: `circulos-tobillo-sentado`
- Nombre: Círculos con los tobillos
- Fuente: Versus Arthritis, «Exercises you can do sitting down» (F4), «Ankle rotation» (apartado 233)
- Población destinataria de la fuente (si la declara): «personas con artritis o con dolor o rigidez en las articulaciones» (D, datos comunes de F4). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento. C3 en `especifica_de` (DS-478). El ejercicio no está excluido: la exclusión del catálogo v1 es solo de la muñeca y el catálogo tiene otros ejercicios del pie y del tobillo (DS-480, rechazado; como DS-463).

### Evidencia de la fuente
- Ubicación exacta: F4, «Ankle rotation» (apartado 233).
- Pasos originales relevantes, resumidos con palabras propias: sentado, levantar un poco los pies del suelo y girar el tobillo en círculo; 10 veces en un sentido y otras 10 en el contrario.
- Coincidencias (C1): sentado, levantar un poco los pies, girar el tobillo en círculo, 10 veces en cada sentido.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, `especifica_de` vacío (DS-478). C2, ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), el pie con flechas en círculo.
- Limitaciones de la verificación: la ilustración la verificó Claude (renderizada; descrita en la evidencia).

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no se usan | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no se usan | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no se usan | evidencia | FALSE | Q1 (P9): no hay uso de brazos |
| agarre | false | D (texto): las manos no sujetan nada | evidencia | FALSE | — |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis «10 veces en cada sentido.»: coherentes con F4.
- Ilustración: Claude la renderizó y la describe en la evidencia; coincide (R7.6). DeepSeek no podía verla.
- Exclusiones del catálogo v1: no está excluido: la exclusión del catálogo v1 es solo de la muñeca y el catálogo tiene otros ejercicios del pie y del tobillo (DS-480, rechazado; como DS-463).
- `fuente.especifica_de`: vacío. La fuente declara población (D); ver DS-478.
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- `especifica_de` vacío con población declarada (DS-478).
- Ninguna más.

### Propuesta de cambios
- `fuente.especifica_de`: «artritis» (R8.1; forma corta, coherente con «dolor lumbar»; DS-478).
- `fuente.consultado`: 2026-10-24.
- Nada más.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 234. separar-dedos-pies-sentado

### Identificación
- ID: `separar-dedos-pies-sentado`
- Nombre: Separar los dedos de los pies
- Fuente: Versus Arthritis, «Exercises you can do sitting down» (F4), «Toe spread» (apartado 234)
- Población destinataria de la fuente (si la declara): «personas con artritis o con dolor o rigidez en las articulaciones» (D, datos comunes de F4). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento. C3 en `especifica_de` (DS-478). El ejercicio no está excluido: la exclusión del catálogo v1 es solo de la muñeca y el catálogo tiene otros ejercicios del pie y del tobillo (DS-480, rechazado; como DS-463).

### Evidencia de la fuente
- Ubicación exacta: F4, «Toe spread» (apartado 234).
- Pasos originales relevantes, resumidos con palabras propias: con los pies en el suelo, separar los dedos todo lo posible; mantener 5 s; 10 veces.
- Coincidencias (C1): sentado, los pies en el suelo, separar los dedos, mantener 5 s, 10 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, `especifica_de` vacío (DS-478). C2, ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), el pie con los dedos separados.
- Limitaciones de la verificación: la ilustración la verificó Claude (renderizada; descrita en la evidencia).

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no se usan | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no se usan | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no se usan | evidencia | FALSE | Q1 (P9): no hay uso de brazos |
| agarre | false | D (texto): las manos no sujetan nada | evidencia | FALSE | — |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis «Mantén 5 segundos. 10 veces.»: coherentes con F4.
- Ilustración: Claude la renderizó y la describe en la evidencia; coincide (R7.6). DeepSeek no podía verla.
- Exclusiones del catálogo v1: no está excluido: la exclusión del catálogo v1 es solo de la muñeca y el catálogo tiene otros ejercicios del pie y del tobillo (DS-480, rechazado; como DS-463).
- `fuente.especifica_de`: vacío. La fuente declara población (D); ver DS-478.
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- `especifica_de` vacío con población declarada (DS-478).
- Ninguna más.

### Propuesta de cambios
- `fuente.especifica_de`: «artritis» (R8.1; DS-478).
- `fuente.consultado`: 2026-10-24.
- Nada más.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## Revisión de DeepSeek

**Consulta C28** (un bloque, con «FIN DEL BORRADOR»). Análisis: `deepseek/analisis-claude/fase-27-lote27.md`.

**Aceptado:** DS-474 (posición sentada de 227 como adaptación), DS-475 (nota de 228 en la forma de R2.4), DS-476 (`flexion_profunda_rodilla` conservadora en 229 y 230, CN-5), DS-477 (nota de `inclinacion_tronco` en 230), DS-478 (`especifica_de`: «estancia en el hospital» en 231 y 232, «artritis» en 233 y 234), DS-479 (redacción de la adaptación del material de 232).

**Corregido por Claude:**
- DS-480, rechazado: el tobillo y los dedos del pie no están excluidos del catálogo v1 (como DS-463 en el lote 25); 233 y 234 quedan listos.
- La afirmación de que la evidencia no describe las ilustraciones es inexacta: cada apartado de la evidencia las describe tras renderizarlas.

## Resumen del lote

- **8 ejercicios auditados por primera vez con el protocolo 1.0.** Los 8 quedan LISTOS PARA APROBACIÓN DOCUMENTAL, con los cambios aplicados.
- **Cambios de etiquetas:** `puente-suelo` y `bascula-pelvica-suelo`, `flexion_profunda_rodilla` → `true` conservador (CN-5).
- **Adaptaciones nuevas o reescritas (Q5):** 227 (sentado) y 232 (botella en cada mano).
- **`especifica_de` nuevo:** «estancia en el hospital» (231, 232) y «artritis» (233, 234).
