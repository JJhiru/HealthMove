# Lote 6 · Reauditoría con el protocolo 1.0: folleto de Leicester (11 ejercicios)

- Fecha: 2026-10-21
- Versión del protocolo: 1.0
- Catálogo: v0.3.0 (actualizado 2026-10-14), rama `desarrollo-v1`, commit `d179beb37be806f1cc972bdf0055704c05ed68ec`
- Identificador git del catálogo: `ea2420585e3860f73120b3c6860d613c36fa9529`
- Huellas literales (`node scripts/auditoria.mjs cabecera`): `marcha-sentado-manos-cadera` `7f1e22a504335ed2`, `inclinacion-lateral-brazo-arriba` `bb6bf85969d94fd6`, `estiramiento-isquiotibiales-sentado` `e13b63cc6b907ede`, `circulos-hombros-sentado` `87940de3e28f6be8`, `curl-biceps-sentado` `2bff685a4762118f`, `toalla-separar-sentado` `0f646ad588ab6308`, `boxeo-sentado` `9a01dd18c4ba04b8`, `boxeo-circulos-alto` `125b4a4d5d910594`, `boxeo-circulos-pecho` `54d4428992026c2d`, `arquear-espalda-sentado` `bd088c49399b63e2`, `movilidad-lumbar-sentado` `7d10c1af3f6ac598`.
- **Por qué este lote:** los 11 ejercicios se auditaron en los lotes 1 a 4, antes del protocolo 1.0, y el plan `plan-cambios-leicester.md` exige revisarlos con él antes de aplicarlo. Los informes antiguos no se tocan; este los sustituye en el registro.
- **Fuente abierta:** Specialist Mobility Centre, Leicester, «Seated Exercises – Information for Patients», publicado por la Chartered Society of Physiotherapy (csp.org.uk), `https://www.csp.org.uk/system/files/documents/2018-09/leicester_seated_exercise_booklet_0.pdf`.
  - Descargado el 2026-10-21. SHA-256 `f9e114cc95e655363a21afb2740712924b3fba7d96a7393b2b238111a54f8907`, idéntico al del plan del 2026-10-18. PDF de 5 páginas, modificado el 2018-09-13.
  - Revisado: el texto (`pdftotext -layout`) y las páginas 2 a 4 renderizadas, porque están a dos columnas (R7.9). Las fotos de los ejercicios 6 y 7 se ampliaron a 200 ppp.
  - **Licencia:** el PDF no indica ninguna. HealthMove usa instrucciones redactadas con palabras propias; las citas de este informe son breves.
  - **Población declarada** (introducción, página impresa 2, D): «designed to allow you to exercise … whilst you maybe using a wheelchair. They can all be done in sitting in either a wheelchair, normal chair or whilst sitting on the edge of the bed». Cubre los 11 ejercicios, todos del mismo folleto (P1, R8.1). La fuente no los limita a ese grupo (R8.3).
- **Ilustraciones de HealthMove** (R7.6): las 11 se dibujaron con `public/js/figura.js` y se compararon con las fotos. Solo `boxeo-circulos-alto` tenía una discrepancia (puños a la altura del hombro, y no de la nariz, casi igual que su variante). Se corrigió en `d179beb` (`scripts/ilustraciones/sentado.mjs`) antes de este informe.
- **Decisiones aplicadas:** Q1 (P9), Q2 (P10) y Q3 (P14), como decisiones tomadas. CN-1 (abajo) se abre en este lote.
- **Convenciones de la tabla:**
  - «Estructural» quiere decir que ninguna instrucción, ni de la fuente ni de HealthMove, usa esa parte del cuerpo para esa función. Es evidencia D de ausencia, porque las instrucciones describen el ejercicio entero (§4: posición inicial, movimiento y vuelta).
  - Todos son sentados: `equilibrio_sin_apoyo` y `puntillas_talones` se definen solo de pie, y `una_pierna` exige que el peso caiga sobre un pie.

## 36. marcha-sentado-manos-cadera

### Identificación
- ID: `marcha-sentado-manos-cadera`
- Nombre: Marcha en la silla, con las manos en la cadera
- Fuente: Leicester, ejercicio 1, «Chair Marching», página impresa 2
- Población destinataria de la fuente (si la declara): usuarios de silla de ruedas (introducción)
- Estado inicial: `borrador`; lote 1, LISTO (anterior al protocolo)
- Resultado documental: listo tras documentar dos adaptaciones

### Evidencia de la fuente
- Ubicación exacta: p. 2 impresa, ejercicio 1, texto y dos fotos.
- Pasos originales relevantes, resumidos con palabras propias: sentado erguido en una silla o en la cama, con las manos descansando en la cadera y sin apoyarse en el respaldo; marchar levantando un poco cada pierna; espalda alta, sin inclinarse a los lados ni hacia atrás; descansar tras 10 a 20 pasos y repetir. Progresión: añadir los brazos.
- Coincidencias (C1): postura, manos, secuencia y dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna documentada.
- Adaptaciones que deben documentarse: la fuente permite la cama (aquí, silla) y HealthMove omite la progresión con los brazos.
- Hechos, inferencias e incertidumbres: D, la pierna se levanta del asiento («lifting each leg slightly off the bed/chair»); I, «cada pie un poco del suelo» describe el mismo gesto visto desde el pie.
- Limitaciones de la verificación: ninguna relevante.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado (texto de la fuente y de HealthMove) | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso está en el asiento | evidencia | FALSE | — |
| sentarse_levantarse | false | D: se hace sentado de principio a fin | evidencia | FALSE | — |
| impacto | false | D: «lifting each leg slightly»; el pie baja sin golpe | evidencia | FALSE | — |
| carga_externa | false | D: estructural, sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: la fuente lo presenta para los músculos posturales («excellent exercise for your postural muscles») | evidencia | FALSE | No está pensado para subir el pulso |
| brazo_sobre_hombro | false | D: manos en la cadera | evidencia | FALSE | — |
| mano_detras | false | D: manos en la cadera, no detrás | evidencia | FALSE | — |
| ambos_brazos | false | D: las manos reposan en la cadera (§7.1, reposo; P9) | evidencia | FALSE | Sin función en la ejecución |
| agarre | false | D: «hands resting»; no se cierra la mano | evidencia | FALSE | — |
| peso_en_manos | false | D: las manos descansan; el peso está en el asiento | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D: foto, rodilla en torno a 90° con el pie bajo la rodilla | evidencia | FALSE | — |
| flexion_amplia_cadera | true | D: levantar la pierna del asiento acerca el muslo al tronco más que sentado | evidencia | TRUE | La nota actual dice «ante la duda»; hay evidencia D |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: «do not let yourself tilt side to side or lean backwards» | evidencia | FALSE | — |
| rotacion_tronco | false | D: espalda alta, sin giro | evidencia | FALSE | — |

### Otros campos
- Fases (`calentamiento`, `principal`), posición, recurso (`silla`), dosis y duración: coherentes.
- Variante de `marcha-sentado-sujetandose`: misma familia, sin cambio.
- Ilustración: muslo elevado y pie apenas despegado. Coincide con la fuente.

### Incidencias
- Ninguna de seguridad.
- La progresión con los brazos es opcional en la fuente («To make this more difficult»). Omitirla deja intacto el ejercicio base, que la fuente describe completo (R3.1; DS-137).

### Propuesta de cambios
- Instrucción 1: «las manos apoyadas en la cadera» pasa a «las manos descansando en la cadera», como «hands resting» de la fuente. «Apoyadas» podía leerse como soporte de peso (DS-144; R4.2).
- `notas_etiquetado`: «(ante la duda, se marca)» pasa a «(evidencia D de la fuente)», porque el `true` tiene evidencia D (DS-128). Se añade que la fuente deja las series en blanco (§5.1; DS-139).
- `adaptaciones`: añadir «La fuente también permite hacerlo sentado en la cama; aquí se hace en una silla.» y «Se omite la versión más difícil de la fuente, que añade el movimiento de los brazos.»
- `fuente.especifica_de`: «usuarios de silla de ruedas».
- Sin cambios de etiquetas ni impacto en la disponibilidad.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-21 (ver «Revisión de DeepSeek y aplicación»).

## 37. inclinacion-lateral-brazo-arriba

### Identificación
- ID: `inclinacion-lateral-brazo-arriba`
- Nombre: Inclinación lateral con brazo arriba
- Fuente: Leicester, ejercicio 2, «Side stretch», página impresa 3
- Población destinataria de la fuente (si la declara): usuarios de silla de ruedas (introducción). La mención de la amputación es el motivo del estiramiento, no una población (P1)
- Estado inicial: `borrador`; lote 2, REQUIERE CORRECCIONES (anterior al protocolo)
- Resultado documental: listo tras una aclaración y una adaptación

### Evidencia de la fuente
- Ubicación exacta: p. 3 impresa, ejercicio 2, texto y foto.
- Pasos originales relevantes, resumidos con palabras propias: sentado recto, cabeza y hombros al frente; brazo izquierdo por encima de la cabeza y mano derecha en la cadera o en el reposabrazos; inclinarse a la derecha estirándose desde la cintura, con los dos glúteos en el asiento; de 3 a 5 veces por lado.
- Coincidencias (C1): postura, brazo arriba, lados y dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): falta «estirarse hacia arriba desde la cintura» (aclaración); la fuente permite el reposabrazos (adaptación).
- Adaptaciones que deben documentarse: la mano solo en la cadera.
- Hechos, inferencias e incertidumbres: D, la foto muestra el brazo junto a la cabeza, no detrás.
- Limitaciones de la verificación: ninguna relevante.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | — |
| una_pierna | false | D: sentado, «both buttocks stay firmly on the seat» | evidencia | FALSE | — |
| sentarse_levantarse | false | D: siempre sentado | evidencia | FALSE | — |
| impacto | false | D: estiramiento lento | evidencia | FALSE | — |
| carga_externa | false | D: estructural, sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D: «Lift your left arm overhead» | evidencia | TRUE | — |
| mano_detras | false | D: foto, mano por encima de la cabeza, no detrás | evidencia | FALSE | — |
| ambos_brazos | false | D: un brazo ejecuta; la otra mano reposa en la cadera (§7.1; P9) | evidencia | FALSE | Con la cadera, la mano no apoya |
| agarre | false | D: mano abierta en la cadera y brazo arriba | evidencia | FALSE | — |
| peso_en_manos | false | D: en HealthMove la mano va a la cadera, no al reposabrazos | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D: foto, sentado normal | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado erguido; la inclinación es lateral | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | — |
| inclinacion_tronco | true | D: «Lean over carefully to the right» | evidencia | TRUE | Inclinación lateral |
| rotacion_tronco | false | D: «head and shoulders facing forward» | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición, recurso y dosis: coherentes. Ilustración: brazo arriba e inclinación lateral. Coincide con la fuente.

### Incidencias
- La consolidación del lote 2 proponía `ambos_brazos: true` con el criterio literal. DG-4 lo sustituye: la mano en la cadera reposa (plan de Q1, §4).

### Propuesta de cambios
- Instrucción 3: «Inclínate con cuidado hacia la derecha, estirándote hacia arriba desde la cintura y manteniendo los dos glúteos apoyados en el asiento.» (aclaración hacia la fuente, D).
- `adaptaciones`: «La fuente también permite apoyar la mano en el reposabrazos; aquí se apoya en la cadera.» No se vuelve al reposabrazos: habría que evaluar `agarre` y `peso_en_manos` (R3.5).
- `fuente.especifica_de`: «usuarios de silla de ruedas».

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-21 (ver «Revisión de DeepSeek y aplicación»).

## 38. estiramiento-isquiotibiales-sentado

### Identificación
- ID: `estiramiento-isquiotibiales-sentado`
- Nombre: Estiramiento de la parte trasera del muslo
- Fuente: Leicester, ejercicio 3, «Hamstring stretch», página impresa 3
- Población destinataria de la fuente (si la declara): usuarios de silla de ruedas (introducción). El paso está escrito para «la pierna que queda» tras una amputación
- Estado inicial: `borrador`; lote 2, REQUIERE CORRECCIONES (anterior al protocolo)
- Resultado documental: listo tras documentar la adaptación «con cada pierna» y aclarar la dosis

### Evidencia de la fuente
- Ubicación exacta: p. 3 impresa, ejercicio 3, texto y foto (persona en silla de ruedas con una sola pierna extendida).
- Pasos originales relevantes, resumidos con palabras propias: sentado recto, adelantarse un poco en el asiento; extender la pierna que queda sin bloquear la rodilla, con el talón en el suelo o en un taburete; inclinarse desde la cadera con la espalda recta; mantener de 10 a 15 (sin unidad) y repetir de 3 a 5 veces.
- Coincidencias (C1): postura, rodilla sin bloquear, inclinación desde la cadera con la espalda recta.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna documentada.
- Adaptaciones que deben documentarse:
  - **«con cada pierna»:** la fuente es para la pierna que queda tras una amputación (R8.1);
  - la unidad «segundos» rellena una laguna;
  - el talón solo en el suelo.
- Hechos, inferencias e incertidumbres: D, la dosis de la fuente es de 3 a 5 (HealthMove dice 3). En la versión con dos piernas, la fuente no dice dónde queda la otra: por eso se propone indicarlo (fila `flexion_profunda_rodilla`).
- Limitaciones de la verificación: la foto no puede mostrar la otra pierna.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | — |
| una_pierna | false | D: sentado; el peso está en el asiento | evidencia | FALSE | — |
| sentarse_levantarse | false | D: siempre sentado | evidencia | FALSE | — |
| impacto | false | D: estiramiento sostenido | evidencia | FALSE | — |
| carga_externa | false | D: estructural | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D: estructural, los brazos no intervienen | evidencia | FALSE | — |
| mano_detras | false | D: estructural | evidencia | FALSE | — |
| ambos_brazos | false | D: estructural | evidencia | FALSE | — |
| agarre | false | D: estructural | evidencia | FALSE | — |
| peso_en_manos | false | D: estructural | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D en la instrucción propuesta: la pierna que se estira va recta y la otra queda con el pie bajo la rodilla | adaptación | FALSE | Con dos piernas, la fuente no dice dónde va la otra; la instrucción propuesta lo dice (adaptación «con cada pierna») |
| flexion_amplia_cadera | true | D: «Lean forward from the hips» acerca el tronco al muslo | evidencia | TRUE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | — |
| inclinacion_tronco | true | D: inclinarse hacia delante desde la cadera | evidencia | TRUE | — |
| rotacion_tronco | false | D: espalda recta, hacia delante | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición, recurso y duración: coherentes. Ilustración: una pierna estirada y el tronco inclinado. Coincide con la fuente.

### Incidencias
- **Tabla de la versión adaptada (R3.3; DS-127, DS-142):** la tabla de arriba es la de la versión adaptada, con cada pierna, el otro pie bajo la rodilla y el talón en el suelo. Las tres adaptaciones se comprobaron una a una:
  - **El otro pie bajo la rodilla:** es la postura de referencia de unos 90° (`registro.md`, criterio operativo de la rodilla y decisión 2), no «más de 90°». `flexion_profunda_rodilla` sigue en `false`.
  - **El talón en el suelo y no en un taburete:** la pierna que se estira queda igual de recta o más; no aparece ninguna flexión nueva.
  - **Con cada pierna:** solo cambia qué pierna se estira; las otras 15 exigencias no varían.
  - Ninguna añade una exigencia (R3.5).
- **Fundamento del `false` (DS-126):** es una adaptación (R2.2(b)). Se aprobó con el plan de Leicester el 2026-10-21 (`registro.md`, P16) y se aplicó antes de cerrar este informe.

### Propuesta de cambios
- Instrucción 2: «Estira una pierna hacia delante sin bloquear la rodilla, con el talón en el suelo, y deja el otro pie apoyado bajo la rodilla.»
- `dosis`: «Mantén de 10 a 15 segundos. De 3 a 5 veces con cada pierna.» (aclaración hacia la fuente, D).
- `adaptaciones`:
  - «En la fuente, este estiramiento está escrito para la pierna que queda tras una amputación; aquí se hace con cada pierna, con el otro pie apoyado bajo la rodilla.»
  - «La fuente indica mantener la posición de 10 a 15 sin decir la unidad; aquí se entiende como segundos.»
  - «La fuente también permite apoyar el talón en un taburete o escalón bajo; aquí se apoya en el suelo.»
- `fuente.especifica_de`: «usuarios de silla de ruedas».

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-21 (ver «Revisión de DeepSeek y aplicación»).

## 39. circulos-hombros-sentado

### Identificación
- ID: `circulos-hombros-sentado`
- Nombre: Círculos de hombros hacia atrás
- Fuente: Leicester, ejercicio 4, «Shoulder circles backwards», página impresa 4
- Población destinataria de la fuente (si la declara): usuarios de silla de ruedas (introducción)
- Estado inicial: `borrador`; lote 2, LISTO (anterior al protocolo)
- Resultado documental: fiel; solo falta `especifica_de`

### Evidencia de la fuente
- Ubicación exacta: p. 4 impresa, ejercicio 4, texto y foto.
- Pasos originales relevantes, resumidos con palabras propias: sentado erguido sin apoyarse en el respaldo; manos y brazos relajados sobre los muslos; círculos lentos de hombros hacia atrás, 10 veces.
- Coincidencias (C1): todo.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna. Las series («___ sets») las rellena el profesional; HealthMove conserva la vaguedad (§5.1).
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: sin incertidumbres.
- Limitaciones de la verificación: ninguna.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | — |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: siempre sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: estructural | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movilidad lenta | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D: brazos relajados sobre los muslos | evidencia | FALSE | — |
| mano_detras | false | D: manos en los muslos | evidencia | FALSE | — |
| ambos_brazos | false | D: los brazos reposan (§7.1) | evidencia | FALSE | Se mueven los hombros, no los brazos |
| agarre | false | D: manos relajadas | evidencia | FALSE | — |
| peso_en_manos | false | D: relajadas, sin soportar peso | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D: foto, sentado normal | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado erguido | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | — |
| inclinacion_tronco | false | D: «Sit comfortably up tall» | evidencia | FALSE | — |
| rotacion_tronco | false | D: círculos simétricos, sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición, recurso, dosis («10 círculos») y duración: coherentes. Ilustración: coincide con la fuente.

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.especifica_de`: «usuarios de silla de ruedas».

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-21 (ver «Revisión de DeepSeek y aplicación»).

## 40. curl-biceps-sentado

### Identificación
- ID: `curl-biceps-sentado`
- Nombre: Flexión de codo con botella
- Fuente: Leicester, ejercicio 6, «Bicep curls», página impresa 5
- Población destinataria de la fuente (si la declara): usuarios de silla de ruedas (introducción)
- Estado inicial: `borrador`; lote 3, LISTO (anterior al protocolo)
- Resultado documental: listo tras una aclaración y un `true` conservador (CN-1)

### Evidencia de la fuente
- Ubicación exacta: p. 5 impresa, ejercicio 6, texto y dos fotos (ampliadas a 200 ppp).
- Pasos originales relevantes, resumidos con palabras propias: sentado; un peso ligero en una mano (puede ser una botella de bebida); pulgar hacia el techo; doblar el codo llevando el peso hacia el hombro; estirar hasta dejarlo en el regazo; codo pegado al costado; 10 veces por lado.
- Coincidencias (C1): secuencia, codo pegado y dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): «botella **llena**» no está en la fuente (aclaración).
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (foto 2), al final de la flexión la mano con la botella queda a la altura de la boca, por encima de la línea del hombro, con el codo abajo y pegado al cuerpo.
- Limitaciones de la verificación: ninguna.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | — |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: siempre sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | true | D: «Hold a light weight» | evidencia | TRUE | — |
| esfuerzo_cardio | false | D: fuerza de brazos, lento | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (foto 2): la mano llega por encima de la altura del hombro con el codo abajo; la definición de §4 dice «codo o mano» | evidencia | TRUE | Definición literal con evidencia D. El rótulo («subir el brazo») sugiere otra lectura: CN-1 (C4, DS-125) |
| mano_detras | false | D: la mano va hacia el hombro, por delante | evidencia | FALSE | — |
| ambos_brazos | false | D: un brazo cada vez, en series por lado (P9) | evidencia | FALSE | Se puede hacer con un solo brazo |
| agarre | true | D: sostener el peso | evidencia | TRUE | — |
| peso_en_manos | false | D: la mano sostiene un objeto, no peso corporal | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D: foto, sentado normal | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado erguido | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | — |
| inclinacion_tronco | false | D: «Sit comfortably» y erguido en la foto | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, recursos (`silla`, `peso_ligero`), dosis y duración: coherentes. Ilustración: botella y flexión de codo. Coincide con la fuente.

### Incidencias
- **CN-1 (nuevo, `registro.md`):** la mano por encima del hombro por flexión del codo, con el brazo abajo. Afecta también a `flexion-codo-tumbado` (`false`). `extension-codo-botella-sentado` ya está en `true`, por otro motivo.

### Propuesta de cambios
- Instrucción 1: «Siéntate cómodamente con una botella de bebida u otro peso ligero en una mano.» (aclaración hacia la fuente).
- `exigencias.brazo_sobre_hombro`: `false` → `true`, con la nota «brazo_sobre_hombro: la mano pasa del hombro al doblar el codo (foto de la fuente; CN-1).» No es conservadora: tiene evidencia D (DS-125).
- `fuente.especifica_de`: «usuarios de silla de ruedas».
- **Disponibilidad** (modo auditoría, con borradores; catálogo `ea242058`): `brazos: brazo_arriba` pierde este ejercicio. Medido después de aplicar, en `registro.md`.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-21 (ver «Revisión de DeepSeek y aplicación»). Si CN-1 se resuelve a favor del rótulo, `brazo_sobre_hombro` vuelve a revisarse.

## 41. toalla-separar-sentado

### Identificación
- ID: `toalla-separar-sentado`
- Nombre: Estirar la toalla
- Fuente: Leicester, ejercicio 7, «Arm exercise with a towel», página impresa 5
- Población destinataria de la fuente (si la declara): usuarios de silla de ruedas (introducción)
- Estado inicial: `borrador`; lote 3, REQUIERE CORRECCIONES (anterior al protocolo)
- Resultado documental: listo tras aclarar la dosis

### Evidencia de la fuente
- Ubicación exacta: p. 5 impresa, ejercicio 7, texto y foto (ampliada).
- Pasos originales relevantes, resumidos con palabras propias: sujetar una toalla con las dos manos; tirar con una hacia arriba y con la otra hacia abajo; mantener 5 segundos; brazos cerca del cuerpo; 10 veces; cambiar las manos; de 2 a 3 series.
- Coincidencias (C1): secuencia, 5 segundos, 10 repeticiones y cambio de manos.
- Diferencias (C3) y adaptaciones documentadas (C2): falta «2 - 3 sets as able».
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (foto), la mano de arriba queda a media altura del pecho, por debajo del hombro.
- Limitaciones de la verificación: ninguna.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | — |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: siempre sentado | evidencia | FALSE | — |
| impacto | false | D: isométrico | evidencia | FALSE | — |
| carga_externa | false | D: la resistencia es la de la propia persona («as if you are trying to pull the towel apart»); la toalla no añade carga | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: isométrico de brazos | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (foto): la mano de arriba queda por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D: por delante del cuerpo | evidencia | FALSE | — |
| ambos_brazos | true | D: «Hold a towel with both hands» | evidencia | TRUE | — |
| agarre | true | D: sujetar la toalla | evidencia | TRUE | — |
| peso_en_manos | false | D: no hay peso corporal en las manos | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D: foto, sentado normal | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado erguido | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | — |
| inclinacion_tronco | false | D: erguido («sit up tall», introducción) | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Recursos (`silla`, `toalla`), fase y duración: coherentes. Ilustración: toalla vertical delante del cuerpo. Coincide con la fuente.

### Incidencias
- Ninguna.

### Propuesta de cambios
- `dosis`: «10 veces con cada posición de manos. De 2 a 3 series, según puedas.» (aclaración hacia la fuente, D).
- `fuente.especifica_de`: «usuarios de silla de ruedas».

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-21 (ver «Revisión de DeepSeek y aplicación»).

## 42. boxeo-sentado

### Identificación
- ID: `boxeo-sentado`
- Nombre: Boxeo en la silla
- Fuente: Leicester, ejercicio 8, «Boxing», página impresa 6
- Población destinataria de la fuente (si la declara): usuarios de silla de ruedas (introducción)
- Estado inicial: `borrador`; lote 3, REQUIERE CORRECCIONES (anterior al protocolo); `ambos_brazos` ya corregido en P9
- Resultado documental: fiel; solo falta `especifica_de`

### Evidencia de la fuente
- Ubicación exacta: p. 6 impresa, ejercicio 8, texto y tres fotos.
- Pasos originales relevantes, resumidos con palabras propias: sentado erguido sin apoyarse; un puño en cada mano delante del pecho; estirar un brazo al frente sin abrir el puño; volver y alternar, despacio, como si boxeara; de 10 a 20 veces y descansar.
- Coincidencias (C1): todo.
- Diferencias (C3) y adaptaciones documentadas (C2): se omite el «HINT!» con pesos (C2, ya documentado).
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (fotos), los brazos se estiran a la altura del pecho.
- Limitaciones de la verificación: ninguna.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | — |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: siempre sentado | evidencia | FALSE | — |
| impacto | false | D: «slowly boxing»; sin golpe contra nada | evidencia | FALSE | — |
| carga_externa | false | D: sin pesos (C2) | adaptación | FALSE | La fuente sugiere pesos como progresión; HealthMove la omite, documentado |
| esfuerzo_cardio | false | D: «slowly» | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (fotos): a la altura del pecho | evidencia | FALSE | — |
| mano_detras | false | D: por delante | evidencia | FALSE | — |
| ambos_brazos | true | D: los dos brazos se alternan sin pausa (P9) | evidencia | TRUE | — |
| agarre | true | D: puños cerrados | evidencia | TRUE | — |
| peso_en_manos | false | D: sin apoyo | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D: foto, sentado normal | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: erguido | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | — |
| inclinacion_tronco | false | D: «Sit up tall» | evidencia | FALSE | — |
| rotacion_tronco | false | D: fotos, tronco al frente | evidencia | FALSE | — |

### Otros campos
- Fase, posición, recurso, dosis y duración: coherentes. Ilustración: un brazo estirado al frente. Coincide con la fuente.

### Incidencias
- La propuesta de un derivado para un solo brazo sigue retirada (`registro.md`, sin fuente, DG-5).

### Propuesta de cambios
- `fuente.especifica_de`: «usuarios de silla de ruedas».

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-21 (ver «Revisión de DeepSeek y aplicación»).

## 43. boxeo-circulos-alto

### Identificación
- ID: `boxeo-circulos-alto`
- Nombre: Círculos de puños a la altura de la nariz
- Fuente: Leicester, ejercicio 9, «Boxing Speedball», página impresa 6
- Población destinataria de la fuente (si la declara): usuarios de silla de ruedas (introducción)
- Estado inicial: `borrador`; lote 3, LISTO (anterior al protocolo)
- Resultado documental: listo tras aclarar la dosis; ilustración ya corregida

### Evidencia de la fuente
- Ubicación exacta: p. 6 impresa, ejercicio 9, texto y foto.
- Pasos originales relevantes, resumidos con palabras propias: sentado erguido; dos puños a la altura de la nariz; girarlos uno alrededor del otro hacia delante mientras se cuenta hasta 20 y después hacia atrás; descansar y repetir si se puede.
- Coincidencias (C1): instrucciones.
- Diferencias (C3) y adaptaciones documentadas (C2): la dosis «20 hacia delante y 20 hacia atrás» puede leerse como 20 círculos (la fuente cuenta tiempo), y falta «Repeat if able».
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: la foto muestra los puños algo más bajos que la nariz. El texto, D, manda.
- Limitaciones de la verificación: ninguna.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | — |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: siempre sentado | evidencia | FALSE | — |
| impacto | false | D: sin golpe | evidencia | FALSE | — |
| carga_externa | false | D: estructural | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: ritmo de conteo, sin indicación de intensidad | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D: «level with your nose» | evidencia | TRUE | — |
| mano_detras | false | D: por delante | evidencia | FALSE | — |
| ambos_brazos | true | D: los dos puños giran juntos | evidencia | TRUE | — |
| agarre | true | D: «Make two fists» | evidencia | TRUE | — |
| peso_en_manos | false | D: sin apoyo | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D: foto, sentado normal | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: erguido | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | — |
| inclinacion_tronco | false | D: «Make sure you keep sitting tall» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Ilustración: corregida antes de este informe (puños a la altura de la nariz). Variante: `boxeo-circulos-pecho`.

### Incidencias
- Ninguna pendiente.

### Propuesta de cambios
- `dosis`: «Mientras cuentas hasta 20 hacia delante y hasta 20 hacia atrás. Descansa y repite si puedes.» (aclaración hacia la fuente, D).
- `fuente.especifica_de`: «usuarios de silla de ruedas».

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-21 (ver «Revisión de DeepSeek y aplicación»).

## 44. boxeo-circulos-pecho

### Identificación
- ID: `boxeo-circulos-pecho`
- Nombre: Círculos de puños a la altura del pecho
- Fuente: Leicester, ejercicio 9, «HINT!», página impresa 6
- Población destinataria de la fuente (si la declara): usuarios de silla de ruedas (introducción)
- Estado inicial: `borrador`; lote 4, LISTO tras añadir `especifica_de` (anterior al protocolo)
- Resultado documental: listo tras aclarar la dosis

### Evidencia de la fuente
- Ubicación exacta: p. 6 impresa, «HINT!» del ejercicio 9.
- Pasos originales relevantes, resumidos con palabras propias: el mismo ejercicio, con las manos a la altura del pecho para hacerlo más fácil.
- Coincidencias (C1): altura del pecho e instrucciones.
- Diferencias (C3) y adaptaciones documentadas (C2): la misma dosis que la base.
- Adaptaciones que deben documentarse: ninguna. La condición «if your shoulders hurt» no se traslada al usuario: sería una indicación sobre síntomas (§8.4). Queda solo en `notas_etiquetado`.
- Hechos, inferencias e incertidumbres: la variante está descrita en la fuente (DG-5 se cumple).
- Limitaciones de la verificación: la fuente no tiene foto propia de la variante.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | — |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: siempre sentado | evidencia | FALSE | — |
| impacto | false | D: sin golpe | evidencia | FALSE | — |
| carga_externa | false | D: estructural | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: como la base | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D: «level with your chest» | evidencia | FALSE | Es lo que la distingue de la base |
| mano_detras | false | D: por delante | evidencia | FALSE | — |
| ambos_brazos | true | D: los dos puños giran juntos | evidencia | TRUE | — |
| agarre | true | D: puños | evidencia | TRUE | — |
| peso_en_manos | false | D: sin apoyo | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D: sentado normal (foto de la base) | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: erguido | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | — |
| inclinacion_tronco | false | D: «keep sitting tall» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- `variante_de`: `boxeo-circulos-alto`. Ilustración: puños a la altura del pecho, ahora claramente más bajos que en la base.

### Incidencias
- Ninguna.

### Propuesta de cambios
- `dosis`: la misma que en `boxeo-circulos-alto`.
- `fuente.especifica_de`: «usuarios de silla de ruedas».

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-21 (ver «Revisión de DeepSeek y aplicación»).

## 45. arquear-espalda-sentado

### Identificación
- ID: `arquear-espalda-sentado`
- Nombre: Estiramiento de espalda con escápulas
- Fuente: Leicester, ejercicio 10, «Back stretches», página impresa 7
- Población destinataria de la fuente (si la declara): usuarios de silla de ruedas (introducción)
- Estado inicial: `borrador`; lote 4, REQUIERE CORRECCIONES (anterior al protocolo); `ambos_brazos` ya corregido en P9
- Resultado documental: listo tras documentar la laguna de repeticiones

### Evidencia de la fuente
- Ubicación exacta: p. 7 impresa, ejercicio 10, texto y foto.
- Pasos originales relevantes, resumidos con palabras propias: sentado con el peso repartido; manos en la zona lumbar o en la cadera; sentarse lo más alto posible arqueando la espalda y juntando omóplatos y codos; mantener contando hasta 5. No da repeticiones.
- Coincidencias (C1): postura y secuencia.
- Diferencias (C3) y adaptaciones documentadas (C2): solo en la cadera (C2, documentado, para evitar `mano_detras`).
- Adaptaciones que deben documentarse: las 5 repeticiones rellenan una laguna.
- Hechos, inferencias e incertidumbres: D, se arquea la espalda y los codos van hacia atrás.
- Limitaciones de la verificación: ninguna.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | — |
| una_pierna | false | D: «weight evenly distributed on your sitbones» | evidencia | FALSE | — |
| sentarse_levantarse | false | D: siempre sentado | evidencia | FALSE | — |
| impacto | false | D: sostenido | evidencia | FALSE | — |
| carga_externa | false | D: estructural | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D: manos en la cadera | evidencia | FALSE | — |
| mano_detras | false | D: en HealthMove, solo en la cadera (adaptación documentada que evita la zona lumbar) | adaptación | FALSE | — |
| ambos_brazos | true | D: los dos codos se llevan hacia atrás (P9) | evidencia | TRUE | — |
| agarre | false | D: manos abiertas en la cadera | evidencia | FALSE | — |
| peso_en_manos | false | D: sin soportar peso | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D: foto, sentado normal | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: erguirse abre la cadera | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | — |
| inclinacion_tronco | true | D: «arching your back» | evidencia | TRUE | Arquear hacia atrás (§4) |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fases (`principal`, `calma`), posición, recurso y duración: coherentes. Ilustración: arco y codos atrás. Coincide con la fuente.

### Incidencias
- Ninguna.

- **Tabla de la versión adaptada (R3.3; DS-130):** manos solo en la cadera, no en la zona lumbar. Cambia únicamente `mano_detras` (a `false`). `agarre` y `peso_en_manos` siguen en `false`, porque las manos descansan abiertas igual que en la zona lumbar, y el resto no depende de las manos. No añade ninguna exigencia.
- **Por qué no se conserva la vaguedad de las repeticiones (DS-141):** `duracion_estimada_seg` (50 s) necesita un número para que el motor reparta el tiempo. El 5 sale del propio ejercicio, que mantiene contando hasta 5, y queda documentado como adaptación.

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente no indica cuántas veces repetirlo; aquí se proponen 5.»
- `notas_etiquetado`: añadir que la fuente deja las series en blanco (§5.1).
- `fuente.especifica_de`: «usuarios de silla de ruedas».

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-21 (ver «Revisión de DeepSeek y aplicación»).

## 46. movilidad-lumbar-sentado

### Identificación
- ID: `movilidad-lumbar-sentado`
- Nombre: Movilidad de la zona lumbar
- Fuente: Leicester, ejercicio 11, «Lower back mobility», página impresa 7
- Población destinataria de la fuente (si la declara): usuarios de silla de ruedas (introducción)
- Estado inicial: `borrador`; lote 4, LISTO tras añadir `especifica_de` (anterior al protocolo)
- Resultado documental: fiel; solo falta `especifica_de`

### Evidencia de la fuente
- Ubicación exacta: p. 7 impresa, ejercicio 11, texto y tres fotos.
- Pasos originales relevantes, resumidos con palabras propias: sentarse adelantado, sin respaldo; erguirse arqueando la zona lumbar; después hundirse todo lo posible aplanando la espalda; 5 veces, descansar y repetir si se puede.
- Coincidencias (C1): todo.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (fotos), las manos descansan en los muslos.
- Limitaciones de la verificación: ninguna.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | — |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: siempre sentado | evidencia | FALSE | — |
| impacto | false | D: lento | evidencia | FALSE | — |
| carga_externa | false | D: estructural | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movilidad | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (fotos): manos en los muslos | evidencia | FALSE | — |
| mano_detras | false | D (fotos) | evidencia | FALSE | — |
| ambos_brazos | false | D (fotos): las manos reposan (§7.1) | evidencia | FALSE | — |
| agarre | false | D (fotos): manos abiertas | evidencia | FALSE | — |
| peso_en_manos | false | D: descansan, sin soportar peso | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D (fotos): sentado normal | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (fotos): al hundirse, el tronco va hacia atrás; el muslo no se acerca más al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | — |
| inclinacion_tronco | true | D: arquear y redondear «as much as you can» | evidencia | TRUE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición, recurso, dosis y duración: coherentes. Ilustración: coincide con la fuente.

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.especifica_de`: «usuarios de silla de ruedas».

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-21 (ver «Revisión de DeepSeek y aplicación»).

## Revisión de DeepSeek y aplicación

**Consulta C4** (`deepseek/ejecuciones/20261021T003234Z-fase-03-leicester/`, DS-124 a DS-144; respuesta literal con SHA-256 `022174c9…`). La revisó el primer borrador de este informe. Cambios hechos por esa revisión:

| DS | Qué se corrigió |
|---|---|
| DS-124, DS-135 | El resultado «LISTO con la propuesta aplicada» era una previsión. Se aplicaron los cambios (`registro.md`, P16) y los resultados describen el estado actual |
| DS-125 | `curl-biceps-sentado`: la regla pasa de «conservadora» a «evidencia» (D con regla conservadora era contradictorio). CN-1 sigue abierto por el rótulo |
| DS-126, DS-127, DS-142 | `estiramiento-isquiotibiales-sentado`: tabla R3.3 explícita para las tres adaptaciones; el `false` se apoya en la adaptación aplicada |
| DS-128 | `marcha-sentado-manos-cadera`: la nota «ante la duda» pasa a «evidencia D» |
| DS-130, DS-141 | `arquear-espalda-sentado`: tabla R3.3 de las manos en la cadera y motivo de las 5 repeticiones |
| DS-137 | Motivo de omitir la progresión con brazos (R3.1) |
| DS-139 | Series en blanco de la fuente, anotadas en `notas_etiquetado` en los siete ejercicios que las tienen (§5.1) |
| DS-143 | Nota de `boxeo-circulos-pecho` reescrita: la condición sobre el dolor de hombros es de la fuente y no se traslada |
| DS-144 | «apoyadas» pasa a «descansando» (fidelidad a «resting») |

**No se aceptan, con su motivo:**

| DS | Motivo |
|---|---|
| DS-129 | «Pull up out of your waist» está en la fuente (D). Añadirlo es fidelidad, no un movimiento nuevo (protocolo 2.2) |
| DS-131, DS-138 | Las tablas de `boxeo-circulos-pecho` y de `inclinacion-lateral-brazo-arriba` evalúan cada exigencia por separado. `mano_detras` en la cadera ya está en `false` con D |
| DS-132 | La dosis nueva dice expresamente «mientras cuentas hasta 20»: es tiempo de conteo, no un número de círculos |
| DS-133 | «as able» va en la dosis de la fuente. «Según puedas» la traduce y no cambia ninguna etiqueta (DG-6) |
| DS-134 | Motivo: la fuente dice «a drinks bottle», sin «llena» (cita en el apartado del ejercicio) |
| DS-136 | `especifica_de` = «usuarios de silla de ruedas» es una decisión del desarrollador para este folleto (`registro.md`, decisión 3 del 2026-10-14, corregida el 2026-10-16) y se apoya en «designed to allow you to exercise… whilst you maybe using a wheelchair» (D). R8.3 recuerda que no limita el ejercicio a ese grupo |

**Aplicado al catálogo el 2026-10-21:**
- las propuestas de los 11 ejercicios;
- `fuente.consultado` pasa a 2026-10-21, la fecha de esta consulta de la fuente.

## Resumen del lote

- **11 ejercicios reauditados con el protocolo 1.0**, todos con su fuente abierta (texto e imágenes).
- **Resultado:** los 11 quedan LISTO PARA APROBACIÓN DOCUMENTAL, con los cambios aplicados.
- **Respecto al plan de 2026-10-18**, este informe añade:
  - la instrucción del otro pie en `estiramiento-isquiotibiales-sentado`;
  - el `true` de `brazo_sobre_hombro` en `curl-biceps-sentado` (CN-1);
  - «descansando» en `marcha-sentado-manos-cadera`;
  - las notas de series;
  - la corrección de la ilustración de `boxeo-circulos-alto`.
- **Nuevo:** CN-1.
- **Aprobar no es publicar.** Pasar a `basado_en_fuente_publica` requiere que el desarrollador revise cada ejercicio y rellene `revisado_por` y `fecha_revision` (especificación §7.6).
