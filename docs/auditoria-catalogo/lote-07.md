# Lote 7 · Reauditoría con el protocolo 1.0: NHS, sentados, fuerza y flexibilidad (8 ejercicios)

- Fecha: 2026-10-21
- Versión del protocolo: 1.0
- Catálogo: v0.3.0 (actualizado 2026-10-14), rama `desarrollo-v1`, commit `11628133419394cdaa88c0baa3deeb49215f4a24`
- Identificador git del catálogo: `439899e30b84570c0ea123a4de1b8119e9c30746`
- Huellas literales: `marcha-sentado-sujetandose` `3320b0255bb6fc0f`, `estiramiento-tobillo-sentado` `6a8c4845b6423549`, `sentarse-levantarse` `b84326d55b635987`, `mini-sentadillas` `9ef8b07a9f8174b0`, `elevacion-talones-apoyo` `0286cdd7cbc18c3a`, `elevacion-lateral-pierna` `9ec77a54dc8102ec`, `extension-pierna-atras` `aaa1c38cd1113825`, `inclinacion-lateral-de-pie` `b0248aec673bb4f3`.
- **Por qué este lote:** son los «LISTO» de los lotes 1 y 5 (anteriores al protocolo) que no son de Leicester y cuya fuente es el NHS. Los informes antiguos no se tocan.
- **Fuentes abiertas** (2026-10-21, NHS, Open Government Licence v3.0):

| Página | URL | Revisada | SHA-256 del HTML (prefijo) |
|---|---|---|---|
| Sitting exercises | `https://www.nhs.uk/live-well/exercise/strength-and-flexibility-exercises/sitting-exercises/` | 18-01-2024 | `7265e44ef96915af` |
| Strength exercises | `https://www.nhs.uk/live-well/exercise/strength-and-flexibility-exercises/strength-exercises/` | 28-02-2024 | `b2a902df239f7360` |
| Flexibility exercises | `https://www.nhs.uk/live-well/exercise/strength-and-flexibility-exercises/flexibility-exercises/` | — | `68d930bb9ba14c2c` |

  - El HTML cambia en cada descarga (es dinámico), aunque el texto de los ejercicios sea el mismo. Por eso el hash de la página de fuerza no coincide con el de `evidencia-fuentes-q1-q2.md`. El texto citado sí coincide con el de ese documento.
  - Se revisaron el texto y las fotos A-B-C de cada ejercicio (`ankle-stretch` `e0163f35…`, `NHSC_hip-marching1` `2aede376…`, `mini-squats` `a09f443d…`, `calf-raises` `d2c0794a…`, `Sideways-leg-lift` `bcf88801…`, `Leg-extension` `8ba64e9c…`, `sideways-bend1` `0e4f0f24…`, y la de `Sit-to-stand` del plan de Q3).
  - **Población:** el NHS no declara ninguna (las páginas de flexibilidad y fuerza son generales; la de ejercicios sentados, también). `especifica_de` no se rellena (R8.1).
- **Ilustraciones de HealthMove** (R7.6): las 8 se dibujaron con `public/js/figura.js` y coinciden con las fotos. No hay discrepancias.
- **Decisiones aplicadas:** Q1 (P9), Q2 (P10) y Q3 (P14).
- **Convenciones:** como en el lote 6. «Estructural» es evidencia D de ausencia, porque las instrucciones describen el ejercicio entero.

## 47. marcha-sentado-sujetandose

### Identificación
- ID: `marcha-sentado-sujetandose`
- Nombre: Marcha en la silla, sujetándote a ella
- Fuente: NHS (Reino Unido), Sitting exercises, «Hip marching»
- Población destinataria de la fuente (si la declara): no la declara
- Estado inicial: `borrador`; lote 1, LISTO (anterior al protocolo); `ambos_brazos` corregido en P9
- Resultado documental: fiel

### Evidencia de la fuente
- Ubicación exacta: apartado «Hip marching», texto y fotos A y B.
- Pasos originales relevantes, resumidos con palabras propias: sentado erguido sin apoyarse en el respaldo, sujetándose a los lados de la silla; levantar una pierna con la rodilla doblada hasta donde resulte cómodo; bajar el pie con control; repetir con la otra; 5 por pierna.
- Coincidencias (C1): todo.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (foto B, frontal), las dos manos sujetan los lados del asiento. D (foto A), el muslo se eleva sobre el asiento y la rodilla queda en torno a 90°.
- Limitaciones de la verificación: ninguna.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | — |
| una_pierna | false | D: sentado; el peso está en el asiento | evidencia | FALSE | — |
| sentarse_levantarse | false | D: siempre sentado | evidencia | FALSE | — |
| impacto | false | D: «Place your foot down with control» | evidencia | FALSE | — |
| carga_externa | false | D: estructural | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: la fuente lo presenta para fuerza y flexibilidad | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D: manos en los lados del asiento | evidencia | FALSE | — |
| mano_detras | false | D: a los lados | evidencia | FALSE | — |
| ambos_brazos | true | D (foto B): las dos manos se sujetan para estabilizarse; cuenta por Q1 | conservadora | TRUE | Nota `[conservadora]` ya presente (P9) |
| agarre | true | D: «Hold on to the sides of the chair» | evidencia | TRUE | — |
| peso_en_manos | false | D: sentado; las manos sujetan, sin soportar el peso del cuerpo | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D (foto A): rodilla en torno a 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | true | D (foto A): el muslo se separa del asiento, más cerca del tronco que sentado | evidencia | TRUE | DS-146 |
| puntillas_talones | false | D: sentado | evidencia | FALSE | — |
| inclinacion_tronco | false | D: «Sit upright and do not lean on the back» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fases (`calentamiento`, `principal`), posición, recurso, dosis («5 elevaciones con cada pierna») y duración: coherentes. Base de `marcha-sentado-manos-cadera`.

### Incidencias
- Ninguna.

### Propuesta de cambios
- Ninguna.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL.

## 48. estiramiento-tobillo-sentado

### Identificación
- ID: `estiramiento-tobillo-sentado`
- Nombre: Estiramiento de tobillo con la pierna estirada
- Fuente: NHS (Reino Unido), Sitting exercises, «Ankle stretch»
- Población destinataria de la fuente (si la declara): no la declara
- Estado inicial: `borrador`; lote 1, LISTO (anterior al protocolo)
- Resultado documental: fiel; la nota conservadora pasa al formato de R2.4

### Evidencia de la fuente
- Ubicación exacta: apartado «Ankle stretch», texto y fotos A, B y C (solo muestran las piernas).
- Pasos originales relevantes, resumidos con palabras propias: sentado erguido, sujetándose al lado de la silla; estirar la pierna izquierda con el pie despegado del suelo; con la pierna estirada y elevada, llevar la punta del pie hacia delante y luego hacia uno; 2 series de 5 con cada pie.
- Coincidencias (C1): todo.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D, «hold on to the side», en singular. Las fotos no muestran las manos. I (foto A), el muslo de la pierna estirada parece algo elevado sobre el asiento.
- Limitaciones de la verificación: las fotos no muestran las manos ni la cadera completa.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | — |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: siempre sentado | evidencia | FALSE | — |
| impacto | false | D: estiramiento lento | evidencia | FALSE | — |
| carga_externa | false | D: estructural | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D: la mano va al lado del asiento | evidencia | FALSE | — |
| mano_detras | false | D: al lado | evidencia | FALSE | — |
| ambos_brazos | false | D: «hold on to the side», en singular: una mano | evidencia | FALSE | La otra queda libre |
| agarre | true | D: «hold on» | evidencia | TRUE | — |
| peso_en_manos | false | D: sentado, sin soportar peso | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D: la pierna que trabaja va estirada; la otra, sentada normal (fotos) | evidencia | FALSE | — |
| flexion_amplia_cadera | true | I (foto A): el muslo estirado se eleva algo sobre el asiento | conservadora | TRUE | La nota pasa al formato de R2.4 |
| puntillas_talones | false | D: sentado | evidencia | FALSE | — |
| inclinacion_tronco | false | D: «Sit upright» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición, recurso, dosis y duración: coherentes.

### Incidencias
- Ninguna.

### Propuesta de cambios
- `notas_etiquetado`: «Elevar la pierna estirada aumenta la flexión de cadera respecto a estar sentado: se marca por precaución.» pasa a «[conservadora] flexion_amplia_cadera: la pierna estirada y elevada sube algo el muslo. Se cerraría con: una imagen lateral de la cadera.»

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambio aplicado el 2026-10-21 (P18).

## 49. sentarse-levantarse

### Identificación
- ID: `sentarse-levantarse`
- Nombre: Sentarse y levantarse
- Fuente: NHS (Reino Unido), Strength exercises, «Sit-to-stand»
- Población destinataria de la fuente (si la declara): no la declara
- Estado inicial: `borrador`; lote 5, LISTO (anterior al protocolo); `inclinacion_tronco` corregido en P14 (Q3)
- Resultado documental: fiel

### Evidencia de la fuente
- Ubicación exacta: apartado «Sit-to-stand», texto y fotos A, B y C (calificadas en el plan de Q3, §6).
- Pasos originales relevantes, resumidos con palabras propias: sentado en el borde, pies al ancho de la cadera, inclinarse un poco hacia delante; levantarse despacio con las piernas, no con los brazos, mirando al frente; de pie, sentarse despacio usando las manos solo como guía si se puede; 5 veces, cuanto más despacio mejor.
- Coincidencias (C1): todo.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: I (foto A), los pies quedan algo por detrás de la vertical de la rodilla. D (foto B), el tronco se inclina más que «slightly».
- Limitaciones de la verificación: el ángulo de la rodilla es una estimación (R7.2).

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | true | D: de pie sin sujetarse a nada («using your legs, not arms») | evidencia | TRUE | — |
| una_pierna | false | D: los dos pies en el suelo | evidencia | FALSE | — |
| sentarse_levantarse | true | D: es el ejercicio | evidencia | TRUE | — |
| impacto | false | D: «slowly» | evidencia | FALSE | — |
| carga_externa | false | D: estructural | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: fuerza, despacio | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D: los brazos no se elevan | evidencia | FALSE | — |
| mano_detras | false | D: estructural | evidencia | FALSE | — |
| ambos_brazos | false | D: los brazos no se usan; las manos solo guían «if possible» | evidencia | FALSE | — |
| agarre | false | D: no se sujeta a nada | evidencia | FALSE | — |
| peso_en_manos | false | D: «not arms» | evidencia | FALSE | — |
| flexion_profunda_rodilla | true | I (foto A): con los pies algo atrasados, la rodilla pasa de 90° | evidencia | TRUE | — |
| flexion_amplia_cadera | false | D: la inclinación hacia delante parte de la postura sentada; el muslo no se acerca más al tronco que sentado (fotos) | evidencia | FALSE | — |
| puntillas_talones | false | D (fotos): pies planos | evidencia | FALSE | — |
| inclinacion_tronco | true | I: el texto («Lean slightly forwards», D) y la foto B (D, más que leve) se contradicen; juntos no determinan el valor | conservadora | TRUE | Q3 (P14) y R7.5, con su nota (DS-145) |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Posiciones `sentado,de_pie` (secuencia), fase `principal`, recurso, dosis y duración: coherentes. Base de dos variantes.

### Incidencias
- `inclinacion_tronco`: el texto y la foto son cada uno D, pero se contradicen. El conjunto es insuficiente (I) y P14 lo resolvió con R7.5 (conservadora).
- `equilibrio_sin_apoyo` (DS-154): las manos, como guía opcional al sentarse, no son un apoyo para mantenerse de pie. El `true` es el valor restrictivo.

### Propuesta de cambios
- Ninguna.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL.

## 50. mini-sentadillas

### Identificación
- ID: `mini-sentadillas`
- Nombre: Mini sentadillas con apoyo
- Fuente: NHS (Reino Unido), Strength exercises, «Mini-squats»
- Población destinataria de la fuente (si la declara): no la declara
- Estado inicial: `borrador`; lote 5, LISTO con la opción A de la antigua decisión 4 (anterior al protocolo); corregido en P9 y P10
- Resultado documental: fiel; la nota de la rodilla pasa al formato de R2.4

### Evidencia de la fuente
- Ubicación exacta: apartado «Mini-squats», texto y fotos A, B y C.
- Pasos originales relevantes, resumidos con palabras propias: manos apoyadas en el respaldo para la estabilidad, pies al ancho de la cadera; doblar las rodillas despacio hasta donde resulte cómodo, hacia delante, espalda recta; subir apretando los glúteos; 5 veces.
- Coincidencias (C1): todo (P10 ya trajo el verbo «apoya»).
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (foto B), la flexión de rodilla que se ve no llega a 90°. Pero «as far as is comfortable» no la limita (N para el máximo).
- Limitaciones de la verificación: la foto es un ejemplo, no el límite.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: apoyo en el respaldo | evidencia | FALSE | — |
| una_pierna | false | D: los dos pies en el suelo | evidencia | FALSE | — |
| sentarse_levantarse | false | D: siempre de pie | evidencia | FALSE | — |
| impacto | false | D: «Slowly», «Gently» | evidencia | FALSE | — |
| carga_externa | false | D: estructural | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: fuerza | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (fotos): manos en el respaldo, bajas | evidencia | FALSE | — |
| mano_detras | false | D: delante | evidencia | FALSE | — |
| ambos_brazos | true | D: «Rest your hands», apoyo bilateral (Q1) | conservadora | TRUE | Nota ya presente |
| agarre | true | I: «Rest your hands» describe un apoyo; ni el texto ni las fotos muestran si la mano se cierra en todo momento (Q2) | conservadora | TRUE | Nota ya presente (DS-151) |
| peso_en_manos | false | D: «for stability»; las manos no cargan el peso del cuerpo | evidencia | FALSE | — |
| flexion_profunda_rodilla | true | N: el texto no fija el máximo («as far as is comfortable») | conservadora | TRUE | La nota pasa al formato de R2.4 |
| flexion_amplia_cadera | false | D (foto B): espalda recta, muslo menos cerca del tronco que sentado | evidencia | FALSE | — |
| puntillas_talones | false | D (fotos): pies planos | evidencia | FALSE | — |
| inclinacion_tronco | false | D: «Keep your back straight at all times» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición, recurso, dosis y duración: coherentes.

### Incidencias
- Ninguna.

### Propuesta de cambios
- `notas_etiquetado`: «'Hasta donde te resulte cómodo' no limita la flexión: se marca flexion_profunda_rodilla por precaución.» pasa a «[conservadora] flexion_profunda_rodilla: «as far as is comfortable» no limita la flexión. Se cerraría con: una fuente que fije el límite.»

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambio aplicado el 2026-10-21 (P18).

## 51. elevacion-talones-apoyo

### Identificación
- ID: `elevacion-talones-apoyo`
- Nombre: Elevación de talones con apoyo
- Fuente: NHS (Reino Unido), Strength exercises, «Calf raises»
- Población destinataria de la fuente (si la declara): no la declara
- Estado inicial: `borrador`; lote 5, LISTO con la opción A de la antigua decisión 4 (anterior al protocolo); corregido en P9 y P10
- Resultado documental: fiel

### Evidencia de la fuente
- Ubicación exacta: apartado «Calf raises», texto y fotos A y B.
- Pasos originales relevantes, resumidos con palabras propias: manos apoyadas en el respaldo para la estabilidad; subir los dos talones hasta donde resulte cómodo, despacio y con control; 5 veces. Progresión: sin apoyo.
- Coincidencias (C1): todo.
- Diferencias (C3) y adaptaciones documentadas (C2): la progresión sin apoyo es la variante `elevacion-talones-sin-apoyo` del catálogo; no hace falta una adaptación.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (fotos), las yemas de los dedos se apoyan en el respaldo.
- Limitaciones de la verificación: ninguna.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: apoyo en el respaldo | evidencia | FALSE | — |
| una_pierna | false | D: «both heels» | evidencia | FALSE | — |
| sentarse_levantarse | false | D: siempre de pie | evidencia | FALSE | — |
| impacto | false | D: «slow and controlled» | evidencia | FALSE | — |
| carga_externa | false | D: estructural | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: fuerza | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (fotos): manos bajas | evidencia | FALSE | — |
| mano_detras | false | D: delante | evidencia | FALSE | — |
| ambos_brazos | true | D: «Rest your hands», apoyo bilateral (Q1) | conservadora | TRUE | Nota ya presente |
| agarre | true | I: las fotos muestran las yemas apoyadas en un instante; el texto («Rest your hands») no dice si la mano se cierra (Q2) | conservadora | TRUE | Nota ya presente (DS-151) |
| peso_en_manos | false | D: «for stability» | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D (fotos): rodillas rectas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, recto | evidencia | FALSE | — |
| puntillas_talones | true | D: «Lift both heels off the floor» | evidencia | TRUE | — |
| inclinacion_tronco | false | D (fotos): erguido | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, recurso y dosis: coherentes. Base de `elevacion-talones-sin-apoyo`.

### Incidencias
- Ninguna.

### Propuesta de cambios
- Ninguna.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL.

## 52. elevacion-lateral-pierna

### Identificación
- ID: `elevacion-lateral-pierna`
- Nombre: Elevación lateral de pierna
- Fuente: NHS (Reino Unido), Strength exercises, «Sideways leg lift»
- Población destinataria de la fuente (si la declara): no la declara
- Estado inicial: `borrador`; lote 5, LISTO con la opción A de la antigua decisión 4 (anterior al protocolo); corregido en P9 y P10
- Resultado documental: fiel

### Evidencia de la fuente
- Ubicación exacta: apartado «Sideways leg lift», texto y fotos A y B.
- Pasos originales relevantes, resumidos con palabras propias: manos apoyadas en el respaldo; levantar la pierna derecha hacia el lado hasta donde resulte cómodo, con la espalda y la cadera rectas y sin inclinarse; volver y hacerlo con la izquierda; 5 por pierna.
- Coincidencias (C1): todo.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (foto B), el peso queda sobre un pie.
- Limitaciones de la verificación: ninguna.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: apoyo en el respaldo | evidencia | FALSE | — |
| una_pierna | true | D: una pierna en el aire | evidencia | TRUE | — |
| sentarse_levantarse | false | D: siempre de pie | evidencia | FALSE | — |
| impacto | false | D: se vuelve a la posición inicial sin golpe | evidencia | FALSE | — |
| carga_externa | false | D: estructural | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: fuerza | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (fotos): manos bajas | evidencia | FALSE | — |
| mano_detras | false | D: delante | evidencia | FALSE | — |
| ambos_brazos | true | D: «Rest your hands», apoyo bilateral (Q1) | conservadora | TRUE | Nota ya presente |
| agarre | true | I: «Rest your hands» describe un apoyo; ni el texto ni las fotos muestran si la mano se cierra en todo momento (Q2) | conservadora | TRUE | Nota ya presente (DS-151) |
| peso_en_manos | false | D: «for stability» | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D (fotos A y B): las dos rodillas, la de apoyo y la que se eleva, quedan rectas | evidencia | FALSE | DS-152 |
| flexion_amplia_cadera | false | D: la pierna va hacia el lado, no hacia el tronco | evidencia | FALSE | — |
| puntillas_talones | false | D (fotos): pie de apoyo plano | evidencia | FALSE | — |
| inclinacion_tronco | false | D: «keeping your back and hips straight. Avoid tilting» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, recurso, dosis y duración: coherentes.

### Incidencias
- Ninguna.

### Propuesta de cambios
- Ninguna.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL.

## 53. extension-pierna-atras

### Identificación
- ID: `extension-pierna-atras`
- Nombre: Extensión de pierna hacia atrás
- Fuente: NHS (Reino Unido), Strength exercises, «Leg extension»
- Población destinataria de la fuente (si la declara): no la declara
- Estado inicial: `borrador`; lote 5, LISTO con la opción A de la antigua decisión 4 (anterior al protocolo); corregido en P9 y P10
- Resultado documental: fiel

### Evidencia de la fuente
- Ubicación exacta: apartado «Leg extension», texto y fotos A y B.
- Pasos originales relevantes, resumidos con palabras propias: manos apoyadas en el respaldo; de pie y erguido, llevar la pierna izquierda estirada hacia atrás sin arquear la espalda; mantener hasta 5 segundos; 5 veces con cada pierna.
- Coincidencias (C1): todo.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (foto B), el pie de la pierna que trabaja se despega del suelo.
- Limitaciones de la verificación: ninguna.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: apoyo en el respaldo | evidencia | FALSE | — |
| una_pierna | true | D (foto B): un pie en el aire | evidencia | TRUE | — |
| sentarse_levantarse | false | D: siempre de pie | evidencia | FALSE | — |
| impacto | false | D: lento, sostenido | evidencia | FALSE | — |
| carga_externa | false | D: estructural | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: fuerza | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (fotos): manos bajas | evidencia | FALSE | — |
| mano_detras | false | D: delante | evidencia | FALSE | — |
| ambos_brazos | true | D: «Rest your hands», apoyo bilateral (Q1) | conservadora | TRUE | Nota ya presente |
| agarre | true | I: «Rest your hands» describe un apoyo; ni el texto ni las fotos muestran si la mano se cierra en todo momento (Q2) | conservadora | TRUE | Nota ya presente (DS-151) |
| peso_en_manos | false | D: «for stability» | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D: la pierna que trabaja, «keeping it straight»; la de apoyo, recta en las fotos A y B | evidencia | FALSE | DS-152 |
| flexion_amplia_cadera | false | D: la pierna va hacia atrás | evidencia | FALSE | — |
| puntillas_talones | false | D (fotos): pie de apoyo plano | evidencia | FALSE | — |
| inclinacion_tronco | false | D: «Avoid arching your back» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, recurso, dosis y duración: coherentes.

### Incidencias
- Ninguna.

### Propuesta de cambios
- Ninguna.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL.

## 54. inclinacion-lateral-de-pie

### Identificación
- ID: `inclinacion-lateral-de-pie`
- Nombre: Inclinación lateral de pie
- Fuente: NHS (Reino Unido), Flexibility exercises, «Sideways bend»
- Población destinataria de la fuente (si la declara): no la declara
- Estado inicial: `borrador`; lote 5, LISTO (anterior al protocolo)
- Resultado documental: fiel

### Evidencia de la fuente
- Ubicación exacta: apartado «Sideways bend», texto y fotos A, B y C.
- Pasos originales relevantes, resumidos con palabras propias: de pie, erguido, pies al ancho de la cadera y brazos a los lados; deslizar el brazo izquierdo por el costado hacia abajo hasta donde resulte cómodo; se nota el estiramiento en la cadera contraria; repetir con el derecho; mantener 2 segundos, 3 por lado.
- Coincidencias (C1): todo.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (fotos B y C), el tronco se inclina claramente hacia el lado.
- Limitaciones de la verificación: ninguna.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | true | D: de pie, con los brazos a los lados y sin apoyo | evidencia | TRUE | — |
| una_pierna | false | D: los dos pies en el suelo | evidencia | FALSE | — |
| sentarse_levantarse | false | D: siempre de pie | evidencia | FALSE | — |
| impacto | false | D: estiramiento | evidencia | FALSE | — |
| carga_externa | false | D: estructural | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D: el brazo baja por el costado | evidencia | FALSE | — |
| mano_detras | false | D: al costado | evidencia | FALSE | — |
| ambos_brazos | false | D: un brazo cada vez; el otro reposa a un lado (§7.1, P9) | evidencia | FALSE | — |
| agarre | false | D: manos abiertas | evidencia | FALSE | — |
| peso_en_manos | false | D: sin apoyo | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D (fotos): rodillas rectas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: inclinación lateral | evidencia | FALSE | — |
| puntillas_talones | false | D (fotos): pies planos | evidencia | FALSE | — |
| inclinacion_tronco | true | D (fotos): inclinación lateral clara | evidencia | TRUE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, sin recursos, dosis y duración: coherentes.

### Incidencias
- Ninguna.

### Propuesta de cambios
- Ninguna.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL.

## Revisión de DeepSeek

**Consulta C5** (`deepseek/ejecuciones/20261021T004758Z-fase-04-lote07/`, DS-145 a DS-156; SHA-256 `94d2d62e…`). La revisó el primer borrador.

**Aceptados y corregidos:**
- **DS-148:** cinco nombres del apartado «Identificación» se habían escrito de memoria y no coincidían con el catálogo. Se copiaron del catálogo, y se comprobó con un script que los lotes 6 y 7 coinciden ahora con él.
- **DS-145:** `sentarse-levantarse`, `inclinacion_tronco`. El texto y la foto son D y se contradicen, así que el conjunto es I. La regla conservadora es coherente.
- **DS-151 y DS-156:** el `agarre` de los cuatro ejercicios con apoyo en el respaldo pasa de «D» a «I». El apoyo descrito no demuestra que no haya prensión, y Q2 mantiene `true`.
- **DS-146:** se cita la foto A en `flexion_amplia_cadera` de la marcha.
- **DS-152:** se evalúa también la rodilla de la pierna de apoyo.
- **DS-154:** se explica por qué la guía opcional de las manos no cambia `equilibrio_sin_apoyo`.

**No aceptados, con su motivo:**
- **DS-147:** «hold on to the side», en singular, y la instrucción no da ninguna función a la otra mano. Es evidencia D estructural.
- **DS-149 y DS-150:** las citas son literales de las páginas del NHS abiertas el 2026-10-21 (HTML con los hashes de la cabecera). DeepSeek no recibe esas páginas.
- **DS-153:** la instrucción 1 ya pone los brazos a los lados, así que el otro brazo queda en reposo.
- **DS-155:** es una limitación de DeepSeek, que no tiene el repositorio. No hace falta ninguna acción.

## Resumen del lote

- **8 ejercicios reauditados con el protocolo 1.0**, con las fuentes del NHS abiertas de nuevo (texto y fotos).
- **Resultado:** los 8 quedan LISTO PARA APROBACIÓN DOCUMENTAL.
- **Cambios:** dos notas conservadoras pasan al formato de R2.4 (`estiramiento-tobillo-sentado` y `mini-sentadillas`). Ninguna etiqueta cambia de valor.
- **Aprobar no es publicar** (especificación §7.6).
