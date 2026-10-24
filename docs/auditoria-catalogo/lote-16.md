# Lote 16 · Primera auditoría con el protocolo 1.0: Hospital Universitario San Cecilio, ejercicios en cama (8 ejercicios)

- Fecha: 2026-10-24
- Versión del protocolo: 1.0
- Catálogo: v0.3.0 (actualizado 2026-10-14), rama `desarrollo-v1`, commit `7ef3ed3`
- Identificador git del catálogo: no fiable, el catálogo tiene cambios sin confirmar (son los cambios de este lote, aplicados antes de cerrarlo).
- Huellas literales (tras aplicar los cambios): `respiracion-costal-sentado` `1547a72ab717ca6e`, `flexion-codo-tumbado` `e125077b6c0b9129`, `respiracion-lado-brazo-adelante` `413027d90c2a9b3e`, `apertura-pecho-lado` `76b5bc3e4cc4d294`, `torax-manos-entrelazadas-tumbado` `49ffc591ead0da62`, `torax-codos-tumbado` `1ac73deddbe59f31`, `agarrar-sabana-dedos-pies` `dd2bd4b399c6b9ff`, `pedaleo-pies-cama` `7fc921d1fd2e46b6`.
- **Cómo se hizo (P29):** evidencia de Claude (`evidencia/lote-16.md`); borrador de DeepSeek (consulta C17, en un bloque); verificación de Claude. **Los apartados son el borrador de DeepSeek con las correcciones de Claude** listadas en «Revisión de DeepSeek». La columna «Etiqueta actual» conserva el valor de antes de aplicar.
- **Fuente abierta** (2026-10-24, `curl`, HTTP 200):

| Fuente | URL | Datos | Revisado |
|---|---|---|---|
| Hospital Universitario Clínico San Cecilio, «Guía de ejercicios para personas hospitalizadas. Parte 1: ejercicios en cama» | `https://www.husc.es/archivos/cms/medicina-fisica-y-rehabilitacion/archivos/publico/pacientes/Triptico%20Ejercicio%20Hospitalizados%20Cama.pdf` | PDF de 2 páginas (tríptico), SHA-256 (prefijo) `5c8a7714ce7f80f4` | Página 2 renderizada (texto y fotos) |

- **Población (D):** «personas hospitalizadas» (título). `especifica_de` estaba vacío y se rellena (DS-393).
- **Ilustraciones de HealthMove** (R7.6): coinciden las 8 (la de 118 con la versión sentada de HealthMove).

## 118. respiracion-costal-sentado

### Identificación
- ID: `respiracion-costal-sentado`
- Nombre: Respirar con las costillas
- Fuente: Hospital Universitario Clínico San Cecilio (Granada), «Guía de ejercicios para personas hospitalizadas. Parte 1: ejercicios en cama», «2. Respiración costal» (F1)
- Población destinataria de la fuente (si la declara): «personas hospitalizadas» (título). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C3 en la postura (la fuente muestra tumbado; HealthMove lo hace sentado) con adaptación documentada pero **inexacta** (DS-387).

### Evidencia de la fuente
- Ubicación exacta: F1, «2. Respiración costal» (apartado 118).
- Pasos originales relevantes, resumidos con palabras propias: manos sobre la parrilla costal; coger aire despacio por la nariz notando cómo aumenta el pecho; aguantar 2 o 3 segundos; soltar el aire por la boca suavemente, como si silbara; 3 a 5 veces y descansar.
- Coincidencias (C1): movimiento respiratorio, tiempo de mantenimiento, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente muestra la posición **tumbado boca arriba** (foto D) y el tríptico es «ejercicios en cama»; HealthMove lo hace sentado. La adaptación actual dice «La fuente no indica la postura; se propone sentado», que es inexacta (DS-387).
- Adaptaciones que deben documentarse: corregir la redacción de la adaptación existente (DS-387).
- Hechos, inferencias e incertidumbres: D (texto y foto), manos sobre las costillas, tumbado con rodillas dobladas. D (texto), dosis 3 a 5 veces.
- Limitaciones de la verificación: la evidencia no dice si la foto muestra las manos cerradas o abiertas; dice «manos sobre las costillas».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado (HealthMove) / tumbado (fuente) | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado / tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado / tumbado | evidencia | FALSE | — |
| impacto | false | D: respiración | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: respiración lenta | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y foto): las manos están sobre las costillas, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y foto): las manos están delante, sobre el pecho | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): las manos reposan sobre las costillas; no hay función de ejecución | evidencia | FALSE | DG-4 / Q1 (P9): manos en reposo |
| agarre | false | D (texto): las manos se apoyan sobre el propio cuerpo; no se pide cerrar la mano | evidencia | FALSE | R7.4 / Q2 (P10): contacto con el propio cuerpo, no apoyo |
| peso_en_manos | false | D: sentado / tumbado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): no se pide doblar la rodilla; en la foto, rodillas dobladas sin que conste que pasen de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado / tumbado | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado / tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `sentado`, recurso `silla`, dosis: coherentes con la versión de HealthMove.
- Ilustración: coincide con la versión de HealthMove (sentado), no con la fuente (tumbado). No es una discrepancia de R7.7 porque la ilustración representa la adaptación, no la fuente; se anota.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente declara «personas hospitalizadas»; ver DS-393.

### Incidencias
- La adaptación actual es inexacta: la fuente sí indica la postura (tumbado). Ver DS-387.

### Propuesta de cambios
- `adaptaciones`: corregir la redacción para reflejar que la fuente muestra la posición tumbado y que HealthMove lo hace sentado (DS-387).
- `fuente.consultado`: 2026-10-24.
- `fuente.especifica_de`: «personas hospitalizadas» (título de la guía; DS-393).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 119. flexion-codo-tumbado

### Identificación
- ID: `flexion-codo-tumbado`
- Nombre: Doblar y estirar los codos en la cama
- Fuente: Hospital Universitario Clínico San Cecilio (Granada), «Guía de ejercicios para personas hospitalizadas. Parte 1: ejercicios en cama», «2. Flexión y extensión de codos» (F1)
- Población destinataria de la fuente (si la declara): «personas hospitalizadas». `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel; `brazo_sobre_hombro: true` conservador ya documentado (CN-1).

### Evidencia de la fuente
- Ubicación exacta: F1, «2. Flexión y extensión de codos» (apartado 119).
- Pasos originales relevantes, resumidos con palabras propias: solo el título; dosis general 5 a 10 repeticiones. Las fotos muestran tumbado en la cama, el codo se dobla y la mano llega al hombro, y después se estira; en otras fotos, sentado en la cama haciendo lo mismo.
- Coincidencias (C1): movimiento de flexión y extensión del codo.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna nueva.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (fotos), el codo se dobla y la mano llega al hombro. I (fotos), tumbado, la altura del hombro no se compara bien (CN-1).
- Limitaciones de la verificación: la evidencia no dice si las fotos muestran las manos cerradas o abiertas; dice «la mano llega al hombro».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | I (fotos): la mano llega al hombro; tumbado no se puede comparar bien con la altura del hombro | conservadora | TRUE | CN-1 (P25): ante la duda, `true` conservador con nota |
| mano_detras | false | D (fotos): la mano va al hombro, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): «con cada brazo»; las series se hacen con un brazo y después con el otro | evidencia | FALSE | DG-4 / Q1 (P9): series alternas no cuentan |
| agarre | false | D (texto): no se pide cerrar la mano | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: tumbado, sin que se pida doblar la rodilla | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente declara «personas hospitalizadas»; ver DS-393.

### Incidencias
- Ninguna de etiquetas. La nota de `brazo_sobre_hombro` ya está en la forma de R2.4.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.
- `fuente.especifica_de`: «personas hospitalizadas» (título de la guía; DS-393).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 120. respiracion-lado-brazo-adelante

### Identificación
- ID: `respiracion-lado-brazo-adelante`
- Nombre: Respirar de lado llevando el brazo adelante
- Fuente: Hospital Universitario Clínico San Cecilio (Granada), «Guía de ejercicios para personas hospitalizadas. Parte 1: ejercicios en cama», «3. Respiración en decúbito lateral», «Brazo hacia delante» (F1)
- Población destinataria de la fuente (si la declara): «personas hospitalizadas». `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel; `brazo_sobre_hombro: true` conservador ya documentado (CN-1).

### Evidencia de la fuente
- Ubicación exacta: F1, «3. Respiración en decúbito lateral», «Brazo hacia delante» (apartado 120).
- Pasos originales relevantes, resumidos con palabras propias: de costado sobre el lado derecho con las piernas flexionadas; al coger aire por la nariz, adelantar el brazo de arriba estirándolo «como si quisiera tocar la pared de enfrente»; aguantar 2 o 3 segundos; volver soltando el aire como si silbara; 3 a 5 veces; después, del lado izquierdo.
- Coincidencias (C1): posición de lado, movimiento del brazo hacia delante, tiempo de mantenimiento, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna nueva.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y foto), el brazo de arriba estirado hacia delante, a la altura del hombro. I (fotos), tumbado de lado, la altura del hombro no se compara bien (CN-1).
- Limitaciones de la verificación: la evidencia no dice si la foto muestra la mano cerrada o abierta; dice «el brazo de arriba estirado hacia delante».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: respiración lenta | evidencia | FALSE | — |
| brazo_sobre_hombro | true | I (foto): el brazo de arriba estirado hacia delante, a la altura del hombro; tumbado no se puede comparar bien | conservadora | TRUE | CN-1 (P25): ante la duda, `true` conservador con nota |
| mano_detras | false | D (texto y foto): el brazo va hacia delante, no detrás | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): un brazo se mueve; el otro no interviene | evidencia | FALSE | DG-4 / Q1 (P9): un brazo trabaja, el otro en reposo |
| agarre | false | D (texto): no se pide cerrar la mano | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): «piernas flexionadas», sin que conste que pasen de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado de lado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente declara «personas hospitalizadas»; ver DS-393.

### Incidencias
- Ninguna de etiquetas. La nota de `brazo_sobre_hombro` ya está en la forma de R2.4.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.
- `fuente.especifica_de`: «personas hospitalizadas» (título de la guía; DS-393).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 121. apertura-pecho-lado

### Identificación
- ID: `apertura-pecho-lado`
- Nombre: Abrir el pecho de lado
- Fuente: Hospital Universitario Clínico San Cecilio (Granada), «Guía de ejercicios para personas hospitalizadas. Parte 1: ejercicios en cama», «3», «Brazo hacia atrás» (F1)
- Población destinataria de la fuente (si la declara): «personas hospitalizadas». `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel; `brazo_sobre_hombro: true` conservador ya documentado (CN-1); `rotacion_tronco: true` con nota.

### Evidencia de la fuente
- Ubicación exacta: F1, «3», «Brazo hacia atrás» (apartado 121).
- Pasos originales relevantes, resumidos con palabras propias: misma posición; al coger aire, elevar el brazo de arriba llevándolo hacia atrás, «abriendo bien el pecho»; aguantar 2 o 3 segundos; volver soltando el aire.
- Coincidencias (C1): posición de lado, movimiento del brazo hacia atrás, tiempo de mantenimiento.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna nueva.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y foto), el brazo de arriba abierto hacia atrás; el pecho y los hombros giran hacia el techo. I (fotos), tumbado de lado, la altura del hombro no se compara bien (CN-1).
- Limitaciones de la verificación: la evidencia no dice si la foto muestra la mano cerrada o abierta; dice «el brazo de arriba abierto hacia atrás».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: respiración lenta | evidencia | FALSE | — |
| brazo_sobre_hombro | true | I (foto): el brazo de arriba se eleva y va hacia atrás; tumbado no se puede comparar bien | conservadora | TRUE | CN-1 (P25): ante la duda, `true` conservador con nota |
| mano_detras | false | D (texto y foto): el brazo va hacia atrás abriendo el pecho, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): un brazo se mueve; el otro no interviene | evidencia | FALSE | DG-4 / Q1 (P9): un brazo trabaja, el otro en reposo |
| agarre | false | D (texto): no se pide cerrar la mano | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): «piernas flexionadas», sin que conste que pasen de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado de lado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | true | D (texto y foto): el pecho y los hombros giran hacia el techo | evidencia | TRUE | §4: girar los hombros respecto a la cadera |

### Otros campos
- Fase `calma`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente declara «personas hospitalizadas»; ver DS-393.

### Incidencias
- Ninguna de etiquetas. La nota de `brazo_sobre_hombro` ya está en la forma de R2.4.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.
- `notas_etiquetado`: el brazo abierto hacia atrás no es `mano_detras` (DS-391).
- `fuente.especifica_de`: «personas hospitalizadas» (título de la guía; DS-393).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 122. torax-manos-entrelazadas-tumbado

### Identificación
- ID: `torax-manos-entrelazadas-tumbado`
- Nombre: Brazos atrás al tomar aire
- Fuente: Hospital Universitario Clínico San Cecilio (Granada), «Guía de ejercicios para personas hospitalizadas. Parte 1: ejercicios en cama», «5. Movilizaciones torácicas» (F1)
- Población destinataria de la fuente (si la declara): «personas hospitalizadas». `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel; `brazo_sobre_hombro: true` conservador ya documentado (CN-1); `ambos_brazos: true` y `agarre: true` con evidencia D.

### Evidencia de la fuente
- Ubicación exacta: F1, «5. Movilizaciones torácicas» (apartado 122).
- Pasos originales relevantes, resumidos con palabras propias: entrelazar los dedos y llevar los brazos hacia atrás al coger aire por la nariz; aguantar 2 o 3 segundos «manteniendo el estiramiento»; bajarlos soltando el aire como si silbara.
- Coincidencias (C1): posición, movimiento de los brazos, tiempo de mantenimiento.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna nueva.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y fotos), las manos entrelazadas; los brazos estirados por encima de la cabeza. I (fotos), tumbado, la altura del hombro no se compara bien (CN-1).
- Limitaciones de la verificación: la evidencia no describe si las fotos muestran las manos cerradas o abiertas; dice «manos entrelazadas».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: respiración lenta | evidencia | FALSE | — |
| brazo_sobre_hombro | true | I (fotos): los brazos estirados por encima de la cabeza; tumbado no se puede comparar bien | conservadora | TRUE | CN-1 (P25): ante la duda, `true` conservador con nota |
| mano_detras | false | D (texto y fotos): las manos van por encima de la cabeza, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y fotos): las dos manos entrelazadas y los dos brazos se mueven a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto): «entrelazar los dedos» | evidencia | TRUE | §4: cerrar la mano |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: tumbado, sin que se pida doblar la rodilla | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente declara «personas hospitalizadas»; ver DS-393.

### Incidencias
- Ninguna de etiquetas. La nota de `brazo_sobre_hombro` ya está en la forma de R2.4.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.
- `fuente.especifica_de`: «personas hospitalizadas» (título de la guía; DS-393).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 123. torax-codos-tumbado

### Identificación
- ID: `torax-codos-tumbado`
- Nombre: Abrir y cerrar los codos al respirar
- Fuente: Hospital Universitario Clínico San Cecilio (Granada), «Guía de ejercicios para personas hospitalizadas. Parte 1: ejercicios en cama», «6. Movilizaciones torácicas con codos flexionados» (F1)
- Población destinataria de la fuente (si la declara): «personas hospitalizadas». `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel; `brazo_sobre_hombro: true` conservador ya documentado (CN-1); `mano_detras: true` y `ambos_brazos: true` con evidencia D.

### Evidencia de la fuente
- Ubicación exacta: F1, «6. Movilizaciones torácicas con codos flexionados» (apartado 123).
- Pasos originales relevantes, resumidos con palabras propias: «Con las manos debajo de la cabeza, junte los codos»; coger aire separando los codos y mantener 2 o 3 segundos; soltar el aire con los labios en posición de silbar mientras se juntan; 3 a 5 veces.
- Coincidencias (C1): posición, movimiento de los codos, tiempo de mantenimiento, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna nueva.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y fotos), las manos detrás de la cabeza; los codos juntos delante de la cara y después abiertos hacia los lados. I (fotos), tumbado, la altura del hombro no se compara bien (CN-1).
- Limitaciones de la verificación: la evidencia no dice si las fotos muestran las manos cerradas o abiertas; dice «manos detrás de la cabeza».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: respiración lenta | evidencia | FALSE | — |
| brazo_sobre_hombro | true | I (fotos): los codos se abren hacia los lados; tumbado no se puede comparar bien | conservadora | TRUE | CN-1 (P25): ante la duda, `true` conservador con nota |
| mano_detras | true | D (texto y fotos): «las manos debajo de la cabeza» | evidencia | TRUE | §4: mano detrás de la cabeza |
| ambos_brazos | true | D (texto y fotos): los dos codos se separan y se juntan a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto): no se pide cerrar la mano | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: tumbado, sin que se pida doblar la rodilla | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente declara «personas hospitalizadas»; ver DS-393.

### Incidencias
- Ninguna de etiquetas. La nota de `brazo_sobre_hombro` ya está en la forma de R2.4.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.
- `fuente.especifica_de`: «personas hospitalizadas» (título de la guía; DS-393).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 124. agarrar-sabana-dedos-pies

### Identificación
- ID: `agarrar-sabana-dedos-pies`
- Nombre: Agarrar la sábana con los dedos de los pies
- Fuente: Hospital Universitario Clínico San Cecilio (Granada), «Guía de ejercicios para personas hospitalizadas. Parte 1: ejercicios en cama», «4. Pies» (F1)
- Población destinataria de la fuente (si la declara): «personas hospitalizadas». `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel; `agarre: false` con evidencia D (el agarre es con los dedos de los pies, no con la mano).

### Evidencia de la fuente
- Ubicación exacta: F1, «4. Pies» (apartado 124).
- Pasos originales relevantes, resumidos con palabras propias: «Con las rodillas flexionadas intente agarrar la sabana con los dedos de los pies».
- Coincidencias (C1): movimiento de los dedos de los pies.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna nueva.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y foto), los dedos de los pies se encogen sobre la sábana; las manos no intervienen.
- Limitaciones de la verificación: la evidencia no describe la postura de las manos; el texto no las menciona.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| agarre | false | D (texto y foto): el agarre es con los dedos de los pies; las manos no intervienen | evidencia | FALSE | §4: `agarre` se refiere a la mano |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): «rodillas flexionadas», sin que conste que pasen de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente declara «personas hospitalizadas»; ver DS-393.

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.
- `flexion_profunda_rodilla`: valor actual, provisional (CN-5, nuevo; DS-394).
- `fuente.especifica_de`: «personas hospitalizadas» (título de la guía; DS-393).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 125. pedaleo-pies-cama

### Identificación
- ID: `pedaleo-pies-cama`
- Nombre: Pedalear deslizando los pies
- Fuente: Hospital Universitario Clínico San Cecilio (Granada), «Guía de ejercicios para personas hospitalizadas. Parte 1: ejercicios en cama», «5. Rodillas» (F1)
- Población destinataria de la fuente (si la declara): «personas hospitalizadas». `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel; `flexion_profunda_rodilla: true` y `flexion_amplia_cadera: true` con evidencia I (conservadora).

### Evidencia de la fuente
- Ubicación exacta: F1, «5. Rodillas» (apartado 125).
- Pasos originales relevantes, resumidos con palabras propias: flexionar una rodilla y estirar la contraria a la vez, arrastrando el pie por la cama «como si pedaleara»; cuando se pueda, con ambas rodillas a la vez.
- Coincidencias (C1): posición, movimiento alterno de las piernas.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna nueva.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y foto), una rodilla doblada con el pie apoyado cerca del glúteo y la otra pierna estirada. I (foto), la rodilla doblada pasa de 90°; el muslo sube hacia el tronco sin que conste si más que sentado.
- Limitaciones de la verificación: la evidencia no fija el ángulo exacto de la rodilla ni del muslo; aplico R2.1.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| agarre | false | D (texto): las manos no intervienen | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | true | I (foto): la rodilla doblada pasa de 90° | conservadora | TRUE | R2.1: ante la duda, `true` conservador con nota |
| flexion_amplia_cadera | true | I (foto): el muslo sube hacia el tronco sin que conste si más que sentado | conservadora | TRUE | R2.1: ante la duda, `true` conservador con nota |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente declara «personas hospitalizadas»; ver DS-393.
- `variante_de`: `deslizar-talon-tumbado` (no auditado en este lote).

### Incidencias
- `flexion_profunda_rodilla: true` y `flexion_amplia_cadera: true` con evidencia I: falta la nota `[conservadora]` (R2.4). Ver DS-388.

### Propuesta de cambios
- `exigencias.flexion_profunda_rodilla`: se mantiene `true`, pero se añade la nota `[conservadora]` (R2.4).
- `exigencias.flexion_amplia_cadera`: se mantiene `true`, pero se añade la nota `[conservadora]` (R2.4).
- `fuente.consultado`: 2026-10-24.
- `fuente.especifica_de`: «personas hospitalizadas» (título de la guía; DS-393).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## Revisión de DeepSeek

**Consulta C17** (en un bloque, con «FIN DEL BORRADOR»; 0,032 USD como mucho). Análisis: `deepseek/analisis-claude/fase-16-lote16.md`.

**Aceptado:** DS-387 (adaptación inexacta de 118), DS-388 (notas de 125), DS-392 (`agarre` D en 122: entrelazar los dedos), DS-393 (población); `brazo_sobre_hombro` conservador en 119-123 (CN-1; DS-389 y DS-390 piden solo precisar la nota).

**Corregido o matizado por Claude:**
- DS-391, rechazado: abrir el brazo hacia atrás en el aire no es llevar la mano a la espalda ni detrás de la cabeza; no es CN-4.
- DS-394: en 118 la versión de HealthMove es sentada (rodilla a 90° al sentarse, D); en 124 la duda es una clase que se repite y abre **CN-5**, con el valor actual como provisional.

## Resumen del lote

- **8 ejercicios auditados por primera vez con el protocolo 1.0.** Los 8 quedan LISTOS PARA APROBACIÓN DOCUMENTAL, con los cambios aplicados.
- **Ninguna etiqueta cambia de valor.** Notas a la forma de R2.4 en 125.
- **Adaptación nueva para aprobar (Q5):** 118, «La guía lo muestra tumbado en la cama; aquí se hace sentado» (antes decía que la fuente no indicaba la postura).
- **Nombre nuevo en `especifica_de`:** «personas hospitalizadas».
- **Nuevo CN-5** (`registro.md`): tumbado con las rodillas dobladas y los pies apoyados, sin ángulo.
