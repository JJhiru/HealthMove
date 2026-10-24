# Lote 20 · Primera auditoría con el protocolo 1.0: Otago (Later Life Training), Royal Wolverhampton y James Paget (9 ejercicios)

- Fecha: 2026-10-24
- Versión del protocolo: 1.0
- Catálogo: v0.3.0 (actualizado 2026-10-14), rama `desarrollo-v1`, commit `a965192`
- Identificador git del catálogo: no fiable, el catálogo tiene cambios sin confirmar (son los cambios de este lote, aplicados antes de cerrarlo).
- Huellas literales (tras aplicar los cambios): `brazos-arriba-manos-entrelazadas-sentado` `1b60b1ece6611b10`, `flexion-rodilla-pie-apoyo` `fcdc8dd564c89cea`, `tandem-apoyo` `877bf20bdc382764`, `circulos-cadera-pie` `551b03a348192c11`, `marcha-sitio-apoyo` `5ccbfbc9645784a7`, `arquear-espalda-pie` `b37d79c8df938164`, `giro-tronco-pie` `1ef94e3148093fb1`, `sentadilla-sin-apoyo` `b668b5c80d1e99ec`, `sentarse-levantarse-sin-manos` `da2f59bb26f0a28f`.
- **Cómo se hizo (P29):** evidencia de Claude (`evidencia/lote-20.md`); borrador de DeepSeek (consulta C21, en un bloque); verificación de Claude. **Los apartados son el borrador de DeepSeek con las correcciones de Claude** listadas en «Revisión de DeepSeek». La columna «Etiqueta actual» conserva el valor de antes de aplicar.
- **Fuentes abiertas** (2026-10-24, `curl`, HTTP 200; hashes completos en la evidencia):

| Fuente | URL | Datos | Revisado |
|---|---|---|---|
| Later Life Training, «Strength and Balance Exercise Booklet» (Otago; copia del Ealing Council) | `https://www.ealing.gov.uk/download/downloads/id/17772/strength_and_balance_exercise_booklet.pdf` | PDF de 47 páginas, SHA-256 (prefijo) `9e53985cb1091bad` | Páginas 2-3, 5, 8-9, 19-20, 23-24 y 33-34 |
| Royal Wolverhampton NHS Trust, «Stay Strong, Stay Steady» | `https://royalwolverhampton.nhs.uk/wp-content/uploads/2025/06/Stay-Strong-Stay-Steady.pdf` | PDF de 22 páginas, SHA-256 (prefijo) `96a56c1cdc93f065` | Páginas 1-2 y 16 |
| Royal Wolverhampton NHS Trust, «Cardiac Rehabilitation for Patients Post Cardiac Surgery» | `https://royalwolverhampton.nhs.uk/wp-content/uploads/2025/05/Cardiac_Rehabilitation_for_Patients_Post_Cardiac_Surgery.pdf` | PDF de 7 páginas, SHA-256 (prefijo) `9fdf9cae15e51a0b` | Páginas 1 y 3 |
| James Paget University Hospitals NHS FT, «Standing Balance Exercises» | `https://www.jpaget.nhs.uk/media/vkrhw50k/ph-49-standing-balance-exercises-v1-web.pdf` | PDF de 8 páginas, SHA-256 (prefijo) `1f46f03c0ed5b63c` | Páginas 1-2 y 6 |

- **Ilustraciones de HealthMove** (R7.6): **corregidas por Claude** en `scripts/ilustraciones/depie.mjs`: `marcha-sitio-apoyo` (el pie caía sobre el asiento) y `giro-tronco-pie` (dibujaba los brazos cruzados, mientras la instrucción pide apoyar una mano en la silla). Las otras 7 coinciden.

## 152. brazos-arriba-manos-entrelazadas-sentado

### Identificación
- ID: `brazos-arriba-manos-entrelazadas-sentado`
- Nombre: Brazos arriba con las manos entrelazadas
- Fuente: The Royal Wolverhampton NHS Trust (Rehabilitación cardiaca), «Cardiac Rehabilitation for Patients Post Cardiac Surgery», p. 3 (F3)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: «cirugía cardiaca».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en la posición (la fuente no dice si se hace sentado o de pie).

### Evidencia de la fuente
- Ubicación exacta: F3, p. 3, ejercicios de calentamiento (apartado 152).
- Pasos originales relevantes, resumidos con palabras propias: entrelazar los dedos delante del cuerpo («link your fingers») y estirar los brazos alejándolos del pecho; con los brazos rectos, subir las manos por encima de la cabeza; soltar los dedos, abrir los brazos hacia los lados y bajarlos. 5 veces.
- Coincidencias (C1): entrelazar los dedos, estirar al frente, subir por encima de la cabeza, soltar y abrir, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente no dice si se hace sentado o de pie; el ejercicio siguiente dice «Stand up straight». HealthMove lo hace sentado.
- Hechos, inferencias e incertidumbres: D (texto), entrelazar los dedos y subir las manos por encima de la cabeza. N (imagen), la fuente no trae dibujo de este ejercicio.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo sentado; la posición de HealthMove es una elección que no consta en la fuente.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto): «subir las manos por encima de la cabeza» | evidencia | TRUE | §4: codo o mano por encima del hombro |
| mano_detras | false | D (texto): las manos suben por delante y por encima de la cabeza, no detrás | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): los dos brazos suben a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto): «entrelazar los dedos» cierra la mano en parte | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis: coherentes.
- Ilustración: coincide con el texto (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «cirugía cardiaca». La evidencia no recoge que la fuente declare esa población; el título del documento sí lo sugiere. No propongo cambiarlo, pero lo señalo como verificación pendiente (ver DS-412).
- `notas_etiquetado` actual: «Entrelazar los dedos se marca como agarre por prudencia.» No tiene la forma de R2.4. Ver DS-413.

### Incidencias
- La nota de `agarre` no tiene la forma de R2.4 (DS-413).
- La posición sentada no consta en la fuente; es una adaptación no documentada (C3). Ver DS-414.

### Propuesta de cambios
- `notas_etiquetado`: la nota de `agarre` pasa a evidencia D: entrelazar los dedos cierra la mano en parte (DS-413, matizado; precedente DS-392).
- Sin adaptación de posición: la fuente no la fija y sentado es una de las posibles (DS-414, rechazado).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 153. flexion-rodilla-pie-apoyo

### Identificación
- ID: `flexion-rodilla-pie-apoyo`
- Nombre: Llevar el talón hacia el glúteo
- Fuente: The Royal Wolverhampton NHS Trust (Falls Prevention Service), «Stay Strong, Stay Steady», «Back of Knee Strengthening», p. 16 (F2)
- Población destinataria de la fuente (si la declara): «for patients who have been assessed and issued with these exercises» (D). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en `flexion_profunda_rodilla` (la fuente no fija el ángulo).

### Evidencia de la fuente
- Ubicación exacta: F2, «Back of Knee Strengthening», p. 16 (apartado 153).
- Pasos originales relevantes, resumidos con palabras propias: de pie de cara a la encimera o a una silla firme, sujetándose «with one or both hands»; doblar la rodilla despacio llevando el pie hacia el glúteo, con las rodillas juntas; mantener 5 segundos y bajar despacio; 5 a 10 veces con cada pierna.
- Coincidencias (C1): de pie con apoyo, doblar la rodilla hacia el glúteo, mantener 5 segundos, 5 a 10 veces, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente no fija el ángulo de la rodilla; HealthMove no lo marca.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), de pie con las dos manos en el respaldo, una pierna doblada hacia atrás. I (dibujo), el ángulo de la rodilla no se puede medir con precisión.
- Limitaciones de la verificación: la evidencia no dice si el dibujo permite medir el ángulo; se aplica R7.8.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto y dibujo): se sujeta a la silla o a la encimera | evidencia | FALSE | §4: se sujeta |
| una_pierna | true | D (texto y dibujo): el peso cae sobre un solo pie al doblar la otra rodilla | evidencia | TRUE | §4: peso sobre un solo pie |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): las manos en el respaldo, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): las manos al frente, en el respaldo | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y dibujo): las dos manos en el respaldo | evidencia | TRUE | Q1 (P9): apoyo bilateral |
| agarre | true | D (texto): «sujetándose» | evidencia | TRUE | §4: sujetarse a una silla |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | I (dibujo): la pierna se dobla hacia atrás, sin que se pueda medir el ángulo; la fuente no lo fija | conservadora | TRUE | R2.1 / R7.8: ante la duda del ángulo, `true` conservador con nota (ver DS-415) |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): «sin inclinarte hacia delante» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `de_pie`, recurso `silla`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia recoge que la fuente se dirige a pacientes valorados por el servicio de prevención de caídas (D). Propuesta: «prevención de caídas» (R8.1; ver DS-412).
- `notas_etiquetado` actual: «[conservadora] ambos_brazos: apoyo bilateral (Q1). Se cerraría con: fuente de que basta una mano.» Tiene la forma de R2.4.

### Incidencias
- `flexion_profunda_rodilla: false` con la duda del ángulo: R2.1 y R7.8 apuntan a `true` conservador (DS-415).

### Propuesta de cambios
- `exigencias.flexion_profunda_rodilla`: `false` → `true` conservador, con nota `[conservadora]` (DS-415).
- `fuente.especifica_de`: «riesgo de caídas» (pacientes del servicio de prevención de caídas; DS-412, con otro nombre).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 154. tandem-apoyo

### Identificación
- ID: `tandem-apoyo`
- Nombre: Un pie delante del otro, con apoyo
- Fuente: Later Life Training (programa Otago), copia del Ealing Council, «Heel Toe Stand Supported», p. 23 (F1)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1).

### Evidencia de la fuente
- Ubicación exacta: F1, «Heel Toe Stand Supported», p. 23 (apartado 154).
- Pasos originales relevantes, resumidos con palabras propias: de pie, de lado al apoyo; poner un pie justo delante del otro, en línea recta; mirar al frente y aguantar 10 segundos; separar los pies y cambiar el pie de delante.
- Coincidencias (C1): de pie con apoyo, pies en línea, aguantar 10 segundos, cambiar el pie de delante.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), de pie de lado junto a una silla, una mano en el respaldo, los pies en línea.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo sin apoyo; HealthMove lo hace siempre con apoyo.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto y dibujo): se sujeta a la silla | evidencia | FALSE | §4: se sujeta |
| una_pierna | false | D (texto y dibujo): los dos pies apoyados, uno delante del otro | evidencia | FALSE | §4: el peso no cae sobre un solo pie |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): la mano en el respaldo, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): la mano al frente, en el respaldo | evidencia | FALSE | — |
| ambos_brazos | false | D (texto y dibujo): una sola mano en el respaldo; la otra no interviene | evidencia | FALSE | Q1 (P9): una mano en apoyo, la otra en reposo; no hay trabajo simultáneo |
| agarre | true | D (texto): «sujétate con una mano» | evidencia | TRUE | §4: sujetarse a una silla |
| peso_en_manos | false | D: de pie; la mano no carga el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y dibujo): de pie con las piernas rectas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `de_pie`, recurso `silla`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicado el cambio de `consultado`.


## 155. circulos-cadera-pie

### Identificación
- ID: `circulos-cadera-pie`
- Nombre: Círculos de cadera de pie
- Fuente: James Paget University Hospitals NHS FT, «Standing Balance Exercises» (PH-49), «Exercise 6», p. 6 (F4)
- Población destinataria de la fuente (si la declara): «whilst in hospital and when you are discharged» (D). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1).

### Evidencia de la fuente
- Ubicación exacta: F4, «Exercise 6», p. 6 (apartado 155).
- Pasos originales relevantes, resumidos con palabras propias: de pie, sujetándose al aparador con las dos manos; círculos con la cadera hacia la izquierda y después hacia la derecha; 10 veces en cada sentido.
- Coincidencias (C1): de pie con las dos manos apoyadas, círculos de cadera, 10 veces en cada sentido.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (texto y fotos), de pie frente a un mueble, las dos manos apoyadas, flecha circular en la cadera.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con una sola mano; HealthMove lo hace con las dos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto y fotos): se sujeta al aparador | evidencia | FALSE | §4: se sujeta |
| una_pierna | false | D (texto y fotos): los dos pies apoyados | evidencia | FALSE | §4: el peso no cae sobre un solo pie |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y fotos): las manos en el aparador, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y fotos): las manos al frente, en el aparador | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y fotos): las dos manos apoyadas | evidencia | TRUE | Q1 (P9): apoyo bilateral |
| agarre | true | D (texto): «sujetándose» | evidencia | TRUE | §4: sujetarse a un mueble |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y fotos): de pie con las piernas rectas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `de_pie`, recurso `silla`, dosis: coherentes. La fuente usa un aparador; HealthMove usa una silla. Es una adaptación de recurso, no de movimiento; no cambia exigencias.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia recoge que la fuente se dirige a la recuperación durante el ingreso y tras el alta (D). Propuesta: «rehabilitación tras un ingreso hospitalario» (nombre ya existente en el catálogo; R8.1; ver DS-412).

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.especifica_de`: «rehabilitación tras un ingreso hospitalario» (R8.1; ver DS-412).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 156. marcha-sitio-apoyo

### Identificación
- ID: `marcha-sitio-apoyo`
- Nombre: Marchar en el sitio con apoyo
- Fuente: Later Life Training (programa Otago), copia del Ealing Council, «March», p. 5 (F1)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en el apoyo (la fuente lo hace opcional; HealthMove lo hace siempre).
- Variante de: `flexion-alterna-piernas-de-pie` (contexto, no auditado).

### Evidencia de la fuente
- Ubicación exacta: F1, «March», p. 5 (apartado 156).
- Pasos originales relevantes, resumidos con palabras propias: de pie, alto, «holding your support if needed»; marchar; si se siente estable, añadir el balanceo de uno o de los dos brazos; 1 a 2 minutos. Calentamiento.
- Coincidencias (C1): de pie, marchar, 1 a 2 minutos, calentamiento.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la fuente hace el apoyo opcional; HealthMove lo hace siempre. La nota actual lo recoge.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), de pie, una mano en el respaldo, marchando.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con las dos manos en el respaldo; HealthMove lo hace con una.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto y dibujo): se sujeta al respaldo | evidencia | FALSE | §4: se sujeta |
| una_pierna | true | D (texto): «marchar» implica que el peso cae sobre un pie | evidencia | TRUE | §4: incluye marchar de pie |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: marcha lenta | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: calentamiento suave | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): la mano en el respaldo, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): la mano al frente, en el respaldo | evidencia | FALSE | — |
| ambos_brazos | false | D (texto y dibujo): una sola mano en el respaldo; la otra no interviene | evidencia | FALSE | Q1 (P9): una mano en apoyo, la otra en reposo; no hay trabajo simultáneo |
| agarre | true | D (texto): «holding your support» | evidencia | TRUE | §4: sujetarse a una silla |
| peso_en_manos | false | D: de pie; la mano no carga el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y dibujo): la rodilla sube al marchar, sin que conste que pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | true | D (texto): «marchar» levanta la rodilla; el muslo se acerca al tronco | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): «sin inclinarte hacia delante ni hacia atrás» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `de_pie`, recurso `silla`, dosis: coherentes.
- Ilustración: la evidencia dice que Claude la corrigió (`depie.mjs`); no la he visto. R7.6/R7.7: no puedo confirmar que ya no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).
- `variante_de`: `flexion-alterna-piernas-de-pie` (contexto; no auditado).
- `notas_etiquetado` actual: «La fuente propone añadir el balanceo de brazos cuando te sientas seguro; aquí se mantiene el apoyo.» Es una adaptación documentada (C2), no una nota de etiqueta. No tiene la forma de R2.4 porque no es una nota conservadora; no propongo cambiarla.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicado el cambio de `consultado` y verificada la ilustración corregida (R7.7).


## 157. arquear-espalda-pie

### Identificación
- ID: `arquear-espalda-pie`
- Nombre: Arquear la espalda de pie
- Fuente: Later Life Training (programa Otago), copia del Ealing Council, «Back Extension», p. 8 (F1)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en `equilibrio_sin_apoyo` (la fuente no dice que se haga sin apoyo; el dibujo muestra una silla al lado sin sujetarse).

### Evidencia de la fuente
- Ubicación exacta: F1, «Back Extension», p. 8 (apartado 157).
- Pasos originales relevantes, resumidos con palabras propias: de pie, alto, con los pies al ancho de la cadera; «Place your hands onto your bottom»; arquear la espalda con suavidad; sin mirar al techo ni bloquear las rodillas; 5 veces.
- Coincidencias (C1): de pie, manos a los glúteos, arquear la espalda, 5 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente no dice que se haga sin apoyo; el dibujo muestra una silla al lado sin sujetarse.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), de pie de perfil, las dos manos en los glúteos, una silla al lado sin sujetarse.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite apoyarse en la silla; HealthMove no lo hace.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | true | D (dibujo): de pie sin sujetarse; las manos en los glúteos | evidencia | TRUE | §4: de pie, exige no sujetarse a nada |
| una_pierna | false | D (texto y dibujo): los dos pies apoyados | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): las manos en los glúteos, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | true | D (texto y dibujo): las manos van atrás, a los glúteos | conservadora | TRUE | CN-4 (pendiente): la mano va hacia atrás, junto al glúteo, sin llegar a la espalda; `true` conservador con nota (ver DS-416) |
| ambos_brazos | true | D (texto y dibujo): las dos manos van a los glúteos | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto y dibujo): las manos apoyadas en los glúteos, sin prensión | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): «sin bloquear las rodillas»; de pie con las piernas rectas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | true | D (texto): «arquear la espalda» | evidencia | TRUE | §4: arquear la espalda hacia atrás |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `de_pie`, recurso `silla`, dosis: coherentes. La silla está en el dibujo pero no se usa; el recurso `silla` no es necesario. No propongo quitarlo (no es una exigencia).
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: «[conservadora] ambos_brazos: apoyo bilateral (Q1). Se cerraría con: fuente de que basta una mano.» Es incorrecta: aquí no hay apoyo bilateral, las dos manos van a los glúteos. Ver DS-417.

### Incidencias
- La nota de `ambos_brazos` no describe el fundamento real (DS-417).
- `mano_detras: true` sin nota `[conservadora]` (DS-416).

### Propuesta de cambios
- `notas_etiquetado`: sustituir la nota de `ambos_brazos` por una que describa el fundamento real (las dos manos van a los glúteos) (DS-417).
- `notas_etiquetado`: añadir la nota `[conservadora]` de `mano_detras` en la forma de R2.4 (DS-416).
- `fuente.consultado`: 2026-10-24.
- `mano_detras`: `true` conservador como valor provisional de CN-4 (como en los lotes 15 y 18); no bloquea la aprobación documental.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 158. giro-tronco-pie

### Identificación
- ID: `giro-tronco-pie`
- Nombre: Giro de tronco de pie
- Fuente: Later Life Training (programa Otago), copia del Ealing Council, «Trunk Movements», p. 9 (F1)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en el cuello (la fuente gira «the head and shoulders»; HealthMove dice «los hombros»).

### Evidencia de la fuente
- Ubicación exacta: F1, «Trunk Movements», p. 9 (apartado 158).
- Pasos originales relevantes, resumidos con palabras propias: de pie, alto; «Fold the arms in front of the chest or place one hand on the chair»; estirar el tronco hacia arriba y girar despacio la cabeza y los hombros a la derecha, sin girar la cadera; volver y repetir al otro lado; 5 veces.
- Coincidencias (C1): de pie, giro de hombros, 5 veces hacia cada lado.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente gira «the head and shoulders»; HealthMove dice «los hombros» (la cabeza no; exclusión del cuello). Es una adaptación documentada.
- Hechos, inferencias e incertidumbres: D (texto y dibujos), de pie de frente junto a una silla, con una mano en la silla; y con los brazos cruzados.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con las dos manos en la silla; HealthMove lo hace con una.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto y dibujos): se apoya en la silla | evidencia | FALSE | §4: se sujeta |
| una_pierna | false | D (texto y dibujos): los dos pies apoyados | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujos): la mano en el respaldo o los brazos cruzados, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujos): la mano al frente, en el respaldo, o los brazos cruzados delante | evidencia | FALSE | — |
| ambos_brazos | false | D (texto y dibujos): una sola mano en el respaldo; la otra no interviene | evidencia | FALSE | Q1 (P9): una mano en apoyo, la otra en reposo; no hay trabajo simultáneo |
| agarre | true | D (texto): «apoya una mano en el respaldo» | conservadora | TRUE | Q2 (P10): apoyo sin prensión visible, `true` conservador con nota |
| peso_en_manos | false | D: de pie; la mano no carga el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y dibujos): de pie con las piernas rectas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | true | D (texto): «girar los hombros» | evidencia | TRUE | §4: girar los hombros respecto a la cadera |

### Otros campos
- Fase `calentamiento`, posición `de_pie`, recurso `silla`, dosis: coherentes.
- Ilustración: la evidencia dice que Claude la corrigió (`depie.mjs`); no la he visto. R7.6/R7.7: no puedo confirmar que ya no haya discrepancia.
- Exclusiones del catálogo v1: ninguna. La fuente gira la cabeza; HealthMove no. Es una adaptación documentada, no una exclusión del catálogo v1 (la exclusión es de movimientos de cuello como ejercicio, no de un giro de cabeza dentro de otro ejercicio).
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: «[conservadora] agarre: apoyo sin prensión (Q2). Se cerraría con: revisión profesional.» Tiene la forma de R2.4.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente gira la cabeza y los hombros; aquí solo se giran los hombros.» (C3 documentado).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 159. sentadilla-sin-apoyo

### Identificación
- ID: `sentadilla-sin-apoyo`
- Nombre: Sentadilla sin apoyo
- Fuente: Later Life Training (programa Otago), copia del Ealing Council, «Knee Bends No Support», p. 20 (F1)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en `flexion_profunda_rodilla` (la fuente no fija el ángulo).
- Variante de: `mini-sentadillas` (contexto, no auditado).

### Evidencia de la fuente
- Ubicación exacta: F1, «Knee Bends No Support», p. 20 (apartado 159).
- Pasos originales relevantes, resumidos con palabras propias: pies al ancho de la cadera, las puntas al frente; doblar las rodillas llevando el trasero hacia atrás como para sentarse; sin levantar los talones; sin que las rodillas vayan hacia dentro; volver; 10 veces. La página siguiente es la versión «Supported».
- Coincidencias (C1): de pie sin apoyo, doblar las rodillas, trasero hacia atrás, 10 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente no fija el ángulo de la rodilla; HealthMove lo marca.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), de pie sin apoyo, las rodillas dobladas y el tronco inclinado hacia delante.
- Limitaciones de la verificación: la evidencia no dice si el dibujo permite medir el ángulo; se aplica R7.8.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | true | D (texto y dibujo): de pie sin apoyo | evidencia | TRUE | §4: de pie, exige no sujetarse a nada |
| una_pierna | false | D (texto y dibujo): los dos pies apoyados | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): los brazos no intervienen | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D (texto y dibujo): los brazos no intervienen | evidencia | FALSE | — |
| agarre | false | D (texto y dibujo): las manos no intervienen | evidencia | FALSE | — |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | true | D (texto y dibujo): «doblar las rodillas llevando el trasero hacia atrás»; el dibujo muestra la rodilla doblada | evidencia | TRUE | §4: agacharse o ponerse en cuclillas |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D (texto): «sin levantar los talones» | evidencia | FALSE | — |
| inclinacion_tronco | true | D (texto y dibujo): el tronco se inclina hacia delante | evidencia | TRUE | §4: inclinar la espalda hacia delante |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `de_pie`, recurso `silla`, dosis: coherentes. La silla está detrás pero no se usa; el recurso `silla` no es necesario. No propongo quitarlo (no es una exigencia).
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: «Es la progresión sin apoyo; la fuente recomienda hacer antes la versión con apoyo.» Es una nota informativa, no una nota conservadora. No tiene la forma de R2.4 porque no es conservadora; no propongo cambiarla.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicado el cambio de `consultado`.


## 160. sentarse-levantarse-sin-manos

### Identificación
- ID: `sentarse-levantarse-sin-manos`
- Nombre: Sentarse y levantarse sin usar las manos
- Fuente: Later Life Training (programa Otago), copia del Ealing Council, «Sit To Stand No Hands», p. 34 (F1)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la posición de los brazos (la fuente permite dos opciones; HealthMove elige una).
- Variante de: `sentarse-levantarse` (contexto, no auditado).

### Evidencia de la fuente
- Ubicación exacta: F1, «Sit To Stand No Hands», p. 34 (apartado 160).
- Pasos originales relevantes, resumidos con palabras propias: sentado, alto, cerca del borde de la silla, con las manos sobre los muslos **o** cruzadas sobre el pecho; los pies algo atrás; inclinarse un poco hacia delante («Lean forwards slightly») y levantarse; retroceder hasta tocar la silla con las piernas y sentarse despacio; hasta 10 veces, despacio.
- Coincidencias (C1): sentado y de pie, inclinación hacia delante, levantarse y sentarse, hasta 10 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, HealthMove elige la opción de los brazos cruzados sobre el pecho.
- Hechos, inferencias e incertidumbres: D (texto y dibujos), sentado con los brazos cruzados sobre el pecho, y de pie.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con las manos sobre los muslos; HealthMove elige la otra opción.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | true | D (texto y dibujos): de pie sin apoyarse en nada; las manos cruzadas sobre el pecho | evidencia | TRUE | §4: de pie, exige no sujetarse a nada |
| una_pierna | false | D (texto y dibujos): los dos pies apoyados | evidencia | FALSE | — |
| sentarse_levantarse | true | D (texto): pasar de sentado a de pie y viceversa | evidencia | TRUE | §4: pide pasar de sentado a de pie o viceversa |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujos): los brazos cruzados sobre el pecho, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujos): los brazos cruzados delante | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y dibujos): los dos brazos cruzados sobre el pecho | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto y dibujos): las manos cruzadas sobre el pecho, sin prensión | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | true | D (texto): los pies algo atrás; al levantarse, la rodilla puede pasar de 90° | conservadora | TRUE | R2.1: ante la duda del ángulo, `true` conservador con nota (ver DS-418) |
| flexion_amplia_cadera | false | D: de pie y sentado, sin que el muslo se acerque al tronco más que al estar sentado | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | true | D (texto): «Lean forwards slightly» | conservadora | TRUE | Q3 (P5) / R2.1: la fuente dice «slightly» y sus dibujos no muestran la fase; `true` conservador con nota |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posiciones `sentado` y `de_pie`, recurso `silla`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).
- `variante_de`: `sentarse-levantarse` (contexto; no auditado).
- `notas_etiquetado` actual: «[conservadora] inclinacion_tronco: la fuente dice «slightly» y sus dibujos no muestran la fase; la foto del NHS de la base muestra más (Q3). Se cerraría con: una imagen de la transición.» Tiene la forma de R2.4.

### Incidencias
- `flexion_profunda_rodilla: true` sin nota `[conservadora]` (DS-418).

### Propuesta de cambios
- `notas_etiquetado`: añadir la nota `[conservadora]` de `flexion_profunda_rodilla` en la forma de R2.4 (DS-418).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## Revisión de DeepSeek

**Consulta C21** (en un bloque, con «FIN DEL BORRADOR»; 0,037 USD como mucho). Análisis: `deepseek/analisis-claude/fase-20-lote20.md`.

**Aceptado:** DS-413 (forma de las notas), DS-415 (`flexion_profunda_rodilla` conservador en 153), DS-416 (`mano_detras` y CN-4), DS-417 (nota de `ambos_brazos` en 157), DS-418 (nota de 160), la adaptación del cuello en 158 y la población de 155.

**Corregido por Claude:**
- 152: el `agarre` de entrelazar los dedos es D, no conservador; DS-414 rechazado (la fuente no fija la postura).
- 153: la población se llama «riesgo de caídas» (DS-412 proponía «prevención de caídas», que es el objetivo, no el grupo).
- 157: con el provisional de CN-4 no queda pendiente.
- 156 y 158: las ilustraciones ya estaban corregidas antes de la consulta (la evidencia lo dice).

## Resumen del lote

- **9 ejercicios auditados por primera vez con el protocolo 1.0.** Los 9 quedan LISTOS PARA APROBACIÓN DOCUMENTAL, con los cambios aplicados.
- **Cambios de etiquetas:** `flexion-rodilla-pie-apoyo`, `flexion_profunda_rodilla` → `true` conservador.
- **Adaptación nueva (Q5):** 158 (sin girar la cabeza).
- **Nombre nuevo en `especifica_de`:** «riesgo de caídas».
- **Ilustraciones corregidas:** 2.
