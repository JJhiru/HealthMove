# Borrador de auditoría · lote 27 (consulta C28)

**Nota previa.** El bloque `catalogo-lote27` contiene **10 ejercicios**, no 8: incluye `puente-tumbado` y `bascula-pelvica-tumbado`, que el encargo declara como contexto y no deben auditarse. Los 8 que audito son los que tienen número de evidencia (227 a 234). No audito los dos de contexto.

**Limitaciones de la verificación (comunes a los 8):**
- No he abierto las fuentes. Todo lo que afirmo sobre ellas procede de `evidencia-lote-27` (Claude). No puedo confirmar hashes, paginación ni el contenido literal de las fuentes.
- La evidencia **no describe la ilustración de HealthMove** de ninguno de los 8 ejercicios más allá de una frase de coincidencia. No puedo verificar R7.6/R7.7 con lo entregado; lo señalo en cada ficha.
- No he podido comprobar en código `motor.js`, `app.js` ni `validar-catalogo.mjs`; las referencias a ellos son las del protocolo y la especificación.
- No emito juicio clínico sobre ningún ejercicio.

---

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
- Limitaciones de la verificación: la evidencia solo dice que la ilustración de HealthMove «coincide con la variante sentada»; no la describe. No puedo confirmar R7.6/R7.7.

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
- Ilustración: la evidencia solo dice que coincide con la variante sentada; no la describe. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «esclerosis múltiple». Coincide con R8.1.
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- La posición sentada no consta en `adaptaciones` (DS-474).

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente lo describe a cuatro patas y ofrece la variante sentada como alternativa; aquí se hace sentado.» (R3.1, Q5; DS-474).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos (la adaptación de posición queda para la aprobación individual de Q5).

---

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
- Limitaciones de la verificación: la evidencia solo dice que la ilustración de HealthMove «coincide»; no la describe. No puedo confirmar R7.6/R7.7.

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
- Ilustración: la evidencia solo dice que coincide; no la describe. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «esclerosis múltiple». Coincide con R8.1.
- `notas_etiquetado` actual: «Las costillas del lado elevado se acercan: es una inclinación lateral.» No tiene la forma de R2.4 (DS-475).

### Incidencias
- La nota de `inclinacion_tronco` no sigue la forma `[conservadora] <exigencia>: <motivo>. Se cerraría con: <evidencia que falta>.` (DS-475).

### Propuesta de cambios
- `notas_etiquetado`: reescribir en la forma de R2.4: «[conservadora] inclinacion_tronco: las costillas del lado elevado se acercan y el tronco se curva ligeramente de lado; la fuente no da ángulo (Q3). Se cerraría con: una vista frontal que muestre que la curva no pasa de leve.» (DS-475).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

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
- Limitaciones de la verificación: la evidencia solo dice que la ilustración de HealthMove «coincide»; no la describe. No puedo confirmar R7.6/R7.7.

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
- Ilustración: la evidencia solo dice que coincide; no la describe. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
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
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

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
- Limitaciones de la verificación: la evidencia solo dice que la ilustración de HealthMove «coincide»; no la describe. No puedo confirmar R7.6/R7.7.

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
- Ilustración: la evidencia solo dice que coincide; no la describe. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
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
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

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
- Limitaciones de la verificación: la evidencia solo dice que la ilustración de HealthMove «coincide»; no la describe. No puedo confirmar R7.6/R7.7.

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
- Ilustración: la evidencia solo dice que coincide; no la describe. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente declara población (D); ver DS-478.
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- `especifica_de` vacío con población declarada (DS-478).

### Propuesta de cambios
- `fuente.especifica_de`: «estancia en el hospital» (R8.1; forma corta, coherente con «rehabilitación tras un ingreso hospitalario» de P20; DS-478).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

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
- Limitaciones de la verificación: la evidencia solo dice que la ilustración de HealthMove «coincide»; no la describe. No puedo confirmar R7.6/R7.7.

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
- Ilustración: la evidencia solo dice que coincide; no la describe. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
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
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos (la adaptación del material queda para la aprobación individual de Q5).

---

## 233. circulos-tobillo-sentado

### Identificación
- ID: `circulos-tobillo-sentado`
- Nombre: Círculos con los tobillos
- Fuente: Versus Arthritis, «Exercises you can do sitting down» (F4), «Ankle rotation» (apartado 233)
- Población destinataria de la fuente (si la declara): «personas con artritis o con dolor o rigidez en las articulaciones» (D, datos comunes de F4). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento. C3 en `especifica_de` (DS-478). **Posible exclusión del catálogo v1**: «movilidad aislada de la muñeca (giros o círculos)» está excluida; el tobillo no se menciona (ver DS-480).

### Evidencia de la fuente
- Ubicación exacta: F4, «Ankle rotation» (apartado 233).
- Pasos originales relevantes, resumidos con palabras propias: sentado, levantar un poco los pies del suelo y girar el tobillo en círculo; 10 veces en un sentido y otras 10 en el contrario.
- Coincidencias (C1): sentado, levantar un poco los pies, girar el tobillo en círculo, 10 veces en cada sentido.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, `especifica_de` vacío (DS-478). C2, ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), el pie con flechas en círculo.
- Limitaciones de la verificación: la evidencia solo dice que la ilustración de HealthMove «coincide»; no la describe. No puedo confirmar R7.6/R7.7.

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
- Ilustración: la evidencia solo dice que coincide; no la describe. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: **posible exclusión** por «movilidad aislada de la muñeca (giros o círculos)»; el tobillo no se menciona (DS-480).
- `fuente.especifica_de`: vacío. La fuente declara población (D); ver DS-478.
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- `especifica_de` vacío con población declarada (DS-478).
- Posible exclusión del catálogo v1 por analogía con la muñeca (DS-480).

### Propuesta de cambios
- `fuente.especifica_de`: «artritis» (R8.1; forma corta, coherente con «dolor lumbar»; DS-478).
- `fuente.consultado`: 2026-10-24.
- **No propongo retirar el ejercicio**: la exclusión de la muñeca no menciona el tobillo y la decisión es del desarrollador (DS-480).

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (DS-480: si la exclusión de «movilidad aislada de la muñeca» se extiende al tobillo). Si se resuelve que no, LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 234. separar-dedos-pies-sentado

### Identificación
- ID: `separar-dedos-pies-sentado`
- Nombre: Separar los dedos de los pies
- Fuente: Versus Arthritis, «Exercises you can do sitting down» (F4), «Toe spread» (apartado 234)
- Población destinataria de la fuente (si la declara): «personas con artritis o con dolor o rigidez en las articulaciones» (D, datos comunes de F4). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento. C3 en `especifica_de` (DS-478). **Posible exclusión del catálogo v1**: «movilidad aislada de la muñeca (giros o círculos)» está excluida; los dedos del pie no se mencionan (ver DS-480).

### Evidencia de la fuente
- Ubicación exacta: F4, «Toe spread» (apartado 234).
- Pasos originales relevantes, resumidos con palabras propias: con los pies en el suelo, separar los dedos todo lo posible; mantener 5 s; 10 veces.
- Coincidencias (C1): sentado, los pies en el suelo, separar los dedos, mantener 5 s, 10 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, `especifica_de` vacío (DS-478). C2, ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), el pie con los dedos separados.
- Limitaciones de la verificación: la evidencia solo dice que la ilustración de HealthMove «coincide»; no la describe. No puedo confirmar R7.6/R7.7.

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
- Ilustración: la evidencia solo dice que coincide; no la describe. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: **posible exclusión** por analogía con «movilidad aislada de la muñeca»; los dedos del pie no se mencionan (DS-480).
- `fuente.especifica_de`: vacío. La fuente declara población (D); ver DS-478.
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- `especifica_de` vacío con población declarada (DS-478).
- Posible exclusión del catálogo v1 por analogía con la muñeca (DS-480).

### Propuesta de cambios
- `fuente.especifica_de`: «artritis» (R8.1; DS-478).
- `fuente.consultado`: 2026-10-24.
- **No propongo retirar el ejercicio**: la exclusión de la muñeca no menciona los dedos del pie y la decisión es del desarrollador (DS-480).

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (DS-480: si la exclusión de «movilidad aislada de la muñeca» se extiende a los dedos del pie). Si se resuelve que no, LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## Hallazgos DS

### DS-474 · La posición sentada de `abdomen-sentado` no consta en `adaptaciones`
- **Ubicación exacta:** `catalogo-lote27`, `abdomen-sentado`, campo `adaptaciones` (vacío); `evidencia-lote-27`, apartado 227.
- **Evidencia:** «la posición principal es **a cuatro patas**»; «**«NB This exercise can also be done in a sitting position»**»; «La posición elegida no consta en `adaptaciones`.»
- **Explicación:** la fuente describe el ejercicio a cuatro patas y ofrece la variante sentada como alternativa. HealthMove solo tiene la versión sentada. Es una adaptación (C2) que no está documentada. R3.1 (Q5) permite presentarla como subconjunto de la fuente, pero R3.2 exige que esté documentada y su fundamento sea verificable.
- **Consecuencia potencial:** el usuario no ve en «Cambios respecto a la fuente» que la fuente lo describe a cuatro patas; la trazabilidad de la adaptación se pierde.
- **Nivel de certeza:** alta.
- **Recomendación:** añadir la adaptación con la cita de la fuente; presentarla para la aprobación individual de Q5.
- **Prueba o evidencia que permitiría confirmarlo:** la cita literal de la fuente en la evidencia (ya está) y la aprobación del desarrollador.
- **¿Requiere decisión humana?:** sí. Aprobar la adaptación (Q5, una a una).

### DS-475 · La nota de `inclinacion_tronco` de `desplazar-peso-sentado` no tiene la forma de R2.4
- **Ubicación exacta:** `catalogo-lote27`, `desplazar-peso-sentado`, `notas_etiquetado`; `evidencia-lote-27`, apartado 228.
- **Evidencia:** «`inclinacion_tronco: true` con la nota «Las costillas del lado elevado se acercan: es una inclinación lateral» (sin la forma de R2.4).»
- **Explicación:** R2.4 exige la forma `[conservadora] <exigencia>: <motivo>. Se cerraría con: <evidencia que falta>.`. La nota actual no lleva el prefijo ni el «Se cerraría con».
- **Consecuencia potencial:** la nota no se distingue de una nota de evidencia D; el validador (si comprueba el formato, como propone P28/M5) no la reconocería.
- **Nivel de certeza:** alta.
- **Recomendación:** reescribir la nota en la forma de R2.4.
- **Prueba o evidencia que permitiría confirmarlo:** la nota actual en el catálogo (ya está) y la regla R2.4.
- **¿Requiere decisión humana?:** no. Es una corrección de forma.

### DS-476 · `flexion_profunda_rodilla: false` sin evidencia D en `puente-suelo` y `bascula-pelvica-suelo`
- **Ubicación exacta:** `catalogo-lote27`, `puente-suelo` y `bascula-pelvica-suelo`, `exigencias.flexion_profunda_rodilla`; `evidencia-lote-27`, apartados 229 y 230.
- **Evidencia:** «**Rodillas (I):** dobladas, sin ángulo; en el dibujo, en torno a 90° (clase de CN-5).»; «**Rodillas (I):** como en 229 (clase de CN-5).»
- **Explicación:** R2.2 exige D para un `false`. La evidencia es I (dibujo sin ángulo). CN-5 (P29) aplica `true` conservador en esta clase desde el lote 24. El valor actual es `false` en los dos.
- **Consecuencia potencial:** un `false` sin D incumple R2.2; el ejercicio se ofrece a perfiles con restricción de rodilla sin la nota conservadora.
- **Nivel de certeza:** alta.
- **Recomendación:** `true` conservador con nota R2.4 en los dos.
- **Prueba o evidencia que permitiría confirmarlo:** una vista lateral que muestre la rodilla por debajo de 90° (cerraría el `false`); o la aplicación de CN-5.
- **¿Requiere decisión humana?:** no. Es la aplicación de R2.2 y CN-5.

### DS-477 · `inclinacion_tronco: true` sin nota conservadora en `bascula-pelvica-suelo`
- **Ubicación exacta:** `catalogo-lote27`, `bascula-pelvica-suelo`, `exigencias.inclinacion_tronco` y `notas_etiquetado`; `evidencia-lote-27`, apartado 230.
- **Evidencia:** «`inclinacion_tronco: true` sin nota.»; la nota de `bascula-pelvica-tumbado` (contexto) dice: «[conservadora] inclinacion_tronco: presionar la zona lumbar contra la camilla es un movimiento pequeño de la columna que §4 no define con claridad.»
- **Explicación:** el `true` se apoya en una duda (I), no en D. R2.4 exige la nota `[conservadora]`. La nota existe en la versión tumbada (contexto) pero no en la de suelo.
- **Consecuencia potencial:** el `true` no se distingue de uno con evidencia D; la incertidumbre se pierde.
- **Nivel de certeza:** alta.
- **Recomendación:** añadir la nota `[conservadora]` en la forma de R2.4.
- **Prueba o evidencia que permitiría confirmarlo:** la nota de la versión tumbada (ya está) y la regla R2.4.
- **¿Requiere decisión humana?:** no. Es una corrección de forma.

### DS-478 · `especifica_de` vacío en los 4 ejercicios de F3 y F4 con población declarada
- **Ubicación exacta:** `catalogo-lote27`, `alcance-cruzado-sentado`, `press-encima-cabeza-sentado`, `circulos-tobillo-sentado` y `separar-dedos-pies-sentado`, `fuente.especifica_de`; `evidencia-lote-27`, «Fuentes abiertas».
- **Evidencia:** «F3, pacientes durante una estancia en el hospital («Having a stay in hospital may leave you feeling somewhat weaker»), en el sillón y con el apoyo del equipo; `especifica_de` vacío. F4, personas con artritis o con dolor o rigidez en las articulaciones («chair-bases stretches for people with arthritis»); `especifica_de` vacío.»
- **Explicación:** R8.1 permite rellenar `especifica_de` solo con la población que la fuente declara. Aquí la declara (D) y el campo está vacío. Es un C3 en `especifica_de`.
- **Consecuencia potencial:** la ficha no muestra «Material pensado para: …» (P17) en estos 4; la trazabilidad de la población se pierde.
- **Nivel de certeza:** alta.
- **Recomendación:** rellenar con la forma corta de los lotes anteriores: «estancia en el hospital» (F3) y «artritis» (F4). Presentarlo para la aprobación del desarrollador (P29: los nombres nuevos de `especifica_de` no se aplican hasta la revisión final).
- **Prueba o evidencia que permitiría confirmarlo:** la cita de la fuente en la evidencia (ya está) y la aprobación del desarrollador.
- **¿Requiere decisión humana?:** sí. Aprobar los nombres nuevos de `especifica_de`.

### DS-479 · La adaptación del material de `press-encima-cabeza-sentado` no es un subconjunto de la fuente
- **Ubicación exacta:** `catalogo-lote27`, `press-encima-cabeza-sentado`, `adaptaciones`; `evidencia-lote-27`, apartado 232.
- **Evidencia:** «La fuente empieza con un cojín y propone cambiarlo por un peso pequeño; aquí se usa directamente la botella.»; «Progresión: más repeticiones o cambiar el cojín por un peso pequeño.»
- **Explicación:** R3.1 (Q5) admite como adaptación válida la ejecución que es una de las que permite la fuente. La botella sustituye al cojín y al «peso pequeño» de la progresión; no es un subconjunto literal, sino una sustitución de material. La adaptación está documentada (R3.2), pero su justificación R3.1 no es la misma que la de un subconjunto.
- **Consecuencia potencial:** si Q5 no se confirma como regla general, esta adaptación necesita una justificación individual; el material cambia la exigencia `carga_externa` (el cojín no es peso añadido; la botella sí).
- **Nivel de certeza:** media.
- **Recomendación:** revisar la redacción de la adaptación para que quede claro que la botella sustituye al cojín y al «peso pequeño» de la progresión; presentarla para la aprobación individual de Q5.
- **Prueba o evidencia que permitiría confirmarlo:** la cita de la fuente (ya está) y la aprobación del desarrollador.
- **¿Requiere decisión humana?:** sí. Aprobar la adaptación (Q5, una a una).

### DS-480 · Posible exclusión del catálogo v1 en `circulos-tobillo-sentado` y `separar-dedos-pies-sentado`
- **Ubicación exacta:** `especificacion`, §4, «Exclusiones del catálogo v1»; `catalogo-lote27`, `circulos-tobillo-sentado` y `separar-dedos-pies-sentado`; `evidencia-lote-27`, apartados 233 y 234.
- **Evidencia:** «Movimientos de cuello · arrodillarse o apoyar las rodillas en el suelo · desplazarse por el espacio · ejercicios de impacto (la exigencia `impacto` se mantiene para el futuro) · movilidad aislada de la muñeca (giros o círculos), porque ninguna exigencia la cubre · ejercicios que dependen de reposabrazos · ejercicios con material especial (pelotas de terapia, escalones).»
- **Explicación:** la exclusión menciona «movilidad aislada de la muñeca (giros o círculos)». `circulos-tobillo-sentado` es movilidad aislada del tobillo (círculos) y `separar-dedos-pies-sentado` es movilidad aislada de los dedos del pie. Ninguna de las dos está en la lista literal. La razón de la exclusión («porque ninguna exigencia la cubre») se aplica igual al tobillo y a los dedos del pie: ninguna de las 16 exigencias los cubre. Es un caso no contemplado (R1.4).
- **Consecuencia potencial:** si la exclusión se extiende por analogía, los dos ejercicios no deberían estar en el catálogo v1; si no, la lista es incompleta. En ambos casos, la decisión es del desarrollador.
- **Nivel de certeza:** media.
- **Recomendación:** registrar como CN (R1.4) y presentar al desarrollador la cuestión: ¿la exclusión de «movilidad aislada de la muñeca» se extiende al tobillo y a los dedos del pie? No propongo retirar los ejercicios.
- **Prueba o evidencia que permitiría confirmarlo:** la decisión del desarrollador sobre el alcance de la exclusión.
- **¿Requiere decisión humana?:** sí. Decidir si la exclusión se extiende.

---

## Resumen del lote

- **8 ejercicios auditados** (227 a 234). Los dos de contexto (`puente-tumbado`, `bascula-pelvica-tumbado`) no se auditan.
- **Cambios de etiqueta propuestos:** `flexion_profunda_rodilla` → `true` conservador en `puente-suelo` y `bascula-pelvica-suelo` (DS-476).
- **Notas conservadoras que faltan o no tienen la forma de R2.4:** `desplazar-peso-sentado` (DS-475), `bascula-pelvica-suelo` (DS-477).
- **Adaptaciones nuevas o revisadas (Q5):** `abdomen-sentado` (posición sentada; DS-474) y `press-encima-cabeza-sentado` (material; DS-479).
- **`especifica_de` nuevo:** «estancia en el hospital» (231 y 232) y «artritis» (233 y 234) (DS-478).
- **Pendiente de decisión:** `circulos-tobillo-sentado` y `separar-dedos-pies-sentado` por la posible exclusión del catálogo v1 (DS-480).
- **Ilustraciones:** la evidencia no las describe; no puedo confirmar R7.6/R7.7 en ninguno de los 8.

FIN DEL BORRADOR