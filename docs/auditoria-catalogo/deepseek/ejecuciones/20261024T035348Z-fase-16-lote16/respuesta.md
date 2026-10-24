# Borrador de auditoría · lote 16 (consulta C17)

**Nota de alcance.** Audito los 8 ejercicios del lote (118 a 125) con la evidencia de Claude y el catálogo entregado. `deslizar-talon-tumbado` se usa solo como contexto de `variante_de` y no se audita. No he abierto las fuentes: todo lo que afirmo sobre ellas procede de `evidencia-lote-16`. No emito juicios clínicos.

**Limitaciones de la verificación**
- La evidencia no describe con detalle las ilustraciones de HealthMove de 118 a 125 más allá de una frase por ejercicio; no puedo comprobar R7.6/R7.7 con precisión, solo si la descripción encaja con la versión de HealthMove.
- La evidencia no dice si las fotos de la fuente muestran las manos cerradas o abiertas en 118, 119, 120, 121, 122 y 123; aplico Q2 (P10) como conservador donde hay contacto.
- La evidencia no fija la postura de las piernas en 118 (foto: rodillas dobladas) ni el ángulo exacto de la rodilla en 125; aplico R2.1 donde no consta.
- No consta que la fuente declare un grupo de población más concreto que «personas hospitalizadas»; no propongo `especifica_de` nuevo (ver DS-393).
- No he podido verificar el estado de `notas_etiquetado` de 118 a 125 más allá de lo que trae el catálogo entregado.

---

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

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

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

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

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

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

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

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

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

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

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

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

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

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

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

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## Hallazgos DS

### DS-387 · Adaptación inexacta en `respiracion-costal-sentado`
- **Ubicación exacta:** `catalogo-lote16`, ejercicio `respiracion-costal-sentado`, campo `adaptaciones`; `evidencia-lote-16`, apartado 118.
- **Evidencia:** la adaptación actual dice «La fuente no indica la postura; se propone sentado». La evidencia dice: «**Foto (D):** **tumbado boca arriba en la cama**, con las rodillas dobladas y las manos sobre las costillas» y «la parte del tríptico («en cama») fijan tumbado».
- **Explicación de la contradicción o del problema:** la adaptación afirma que la fuente no indica la postura, pero la evidencia muestra que sí la indica (tumbado). Es una adaptación C2 con fundamento inexacto (R3.2: «Está documentada y su fundamento es verificable»).
- **Consecuencia potencial:** el usuario lee en «Cambios respecto a la fuente» una afirmación falsa sobre la fuente; la trazabilidad de la adaptación queda comprometida.
- **Nivel de certeza:** alta.
- **Recomendación:** corregir la redacción de la adaptación para reflejar que la fuente muestra la posición tumbado y que HealthMove lo hace sentado. No propongo el texto exacto; debe redactarse para el usuario y revisarse con `healthmove-safety-reviewer` si menciona postura.
- **Prueba o evidencia que permitiría confirmarlo:** la foto de la fuente (D) y el título del tríptico («ejercicios en cama»).
- **¿Requiere decisión humana?:** sí. El desarrollador debe aprobar el texto de la adaptación corregida (Q5, una a una).

### DS-388 · Notas `[conservadora]` ausentes en `pedaleo-pies-cama`
- **Ubicación exacta:** `catalogo-lote16`, ejercicio `pedaleo-pies-cama`, `exigencias.flexion_profunda_rodilla` y `exigencias.flexion_amplia_cadera`; `evidencia-lote-16`, apartado 125.
- **Evidencia:** la evidencia dice «**Rodilla y cadera (I):** la rodilla doblada pasa de 90° en la foto; el muslo sube hacia el tronco sin que conste si más que sentado». El catálogo tiene `flexion_profunda_rodilla: true` y `flexion_amplia_cadera: true` con `notas_etiquetado: ""`.
- **Explicación de la contradicción o del problema:** R2.4 exige que todo `true` conservador tenga su nota `[conservadora]` en `notas_etiquetado`. Aquí los dos `true` se apoyan en evidencia I y no tienen nota.
- **Consecuencia potencial:** la incertidumbre no queda registrada; una auditoría posterior no sabría que el valor es conservador y no observado.
- **Nivel de certeza:** alta.
- **Recomendación:** añadir las dos notas `[conservadora]` con la forma de R2.4.
- **Prueba o evidencia que permitiría confirmarlo:** la foto de la fuente y el texto; la nota debe citar qué evidencia cerraría cada una.
- **¿Requiere decisión humana?:** no para añadir la nota (es una obligación de R2.4); sí si se propusiera cambiar el valor.

### DS-389 · `brazo_sobre_hombro` en `flexion-codo-tumbado`: ¿CN-1 o evidencia D?
- **Ubicación exacta:** `catalogo-lote16`, ejercicio `flexion-codo-tumbado`, `exigencias.brazo_sobre_hombro`; `evidencia-lote-16`, apartado 119.
- **Evidencia:** la evidencia dice «**Mano (I):** la mano llega al hombro; tumbado, la altura del hombro no se compara bien (CN-1)». La nota actual del catálogo dice «[conservadora] brazo_sobre_hombro: al doblar el codo, la mano puede pasar de la altura del hombro (CN-1, P25)».
- **Explicación de la contradicción o del problema:** la evidencia califica la observación como I, no D. La nota actual dice «puede pasar», que es coherente con I. No hay contradicción, pero conviene confirmar que la nota no se lea como si la fuente mostrara D que la mano pasa del hombro. La regla aplicada es conservadora (R2.1), no evidencia.
- **Consecuencia potencial:** si en una revisión posterior se interpretara como D, se perdería la incertidumbre.
- **Nivel de certeza:** media.
- **Recomendación:** mantener el valor y la nota; verificar que la nota no afirme que la fuente muestra D.
- **Prueba o evidencia que permitiría confirmarlo:** una vista lateral de la foto que permita comparar la mano con el hombro.
- **¿Requiere decisión humana?:** no.

### DS-390 · `brazo_sobre_hombro` en `respiracion-lado-brazo-adelante` y `apertura-pecho-lado`: la nota cita CN-1 pero la evidencia es I
- **Ubicación exacta:** `catalogo-lote16`, ejercicios `respiracion-lado-brazo-adelante` y `apertura-pecho-lado`, `exigencias.brazo_sobre_hombro`; `evidencia-lote-16`, apartados 120 y 121.
- **Evidencia:** la evidencia dice «el brazo de arriba estirado hacia delante, a la altura del hombro» (120) y «el brazo de arriba abierto hacia atrás» (121). Las notas actuales citan CN-1 (P25) y dicen «tumbado, la altura del hombro no se puede comparar».
- **Explicación de la contradicción o del problema:** CN-1 (P25) trata la mano que pasa del hombro al doblar el codo y el brazo que se separa del tronco tumbado. Aquí el brazo se separa del tronco (estirado hacia delante o hacia atrás), lo que encaja con la parte de CN-1 sobre tumbado. No hay contradicción, pero conviene confirmar que la nota no mezcla el supuesto del codo con el del brazo separado.
- **Consecuencia potencial:** la nota podría inducir a pensar que el caso es el del codo doblado, cuando es el del brazo separado del tronco.
- **Nivel de certeza:** media.
- **Recomendación:** revisar la redacción de las notas para que citen el supuesto correcto de CN-1 (brazo separado del tronco tumbado).
- **Prueba o evidencia que permitiría confirmarlo:** el texto de P25 en `registro.md` y la nota actual.
- **¿Requiere decisión humana?:** no.

### DS-391 · `mano_detras` en `apertura-pecho-lado`: ¿el brazo hacia atrás cuenta?
- **Ubicación exacta:** `catalogo-lote16`, ejercicio `apertura-pecho-lado`, `exigencias.mano_detras`; `evidencia-lote-16`, apartado 121.
- **Evidencia:** la evidencia dice «el brazo de arriba abierto hacia atrás; el pecho y los hombros giran hacia el techo». El catálogo tiene `mano_detras: false`.
- **Explicación de la contradicción o del problema:** §4 define `mano_detras` como «mano detrás de la espalda o de la cabeza». Aquí el brazo va hacia atrás abriendo el pecho, pero no consta que la mano quede detrás de la espalda ni de la cabeza. Es un caso análogo a CN-4 (la mano que va hacia atrás hasta el pie), pero con el brazo en el aire. No hay regla que resuelva si «hacia atrás» sin llegar a la espalda cuenta.
- **Consecuencia potencial:** si se decidiera que cuenta, `mano_detras` pasaría a `true` y el ejercicio saldría de `mano_espalda`.
- **Nivel de certeza:** media.
- **Recomendación:** registrar como caso equivalente a CN-4 o abrir un CN nuevo; no cambiar la etiqueta mientras CN-4 siga pendiente. Valor provisional: `false` (el actual).
- **Prueba o evidencia que permitiría confirmarlo:** una descripción más precisa de la posición final de la mano en la foto.
- **¿Requiere decisión humana?:** sí. El desarrollador debe decidir si el brazo hacia atrás sin llegar a la espalda cuenta como `mano_detras` (CN-4 o CN nuevo).

### DS-392 · `agarre` en `torax-manos-entrelazadas-tumbado`: ¿D o conservador?
- **Ubicación exacta:** `catalogo-lote16`, ejercicio `torax-manos-entrelazadas-tumbado`, `exigencias.agarre`; `evidencia-lote-16`, apartado 122.
- **Evidencia:** la evidencia dice «las manos entrelazadas» (D). El catálogo tiene `agarre: true` sin nota.
- **Explicación de la contradicción o del problema:** «entrelazar los dedos» es una forma de cerrar la mano (§4: «cerrar la mano, con o sin objeto, aunque sea en parte»). La evidencia es D, así que el `true` no necesita nota conservadora. No hay contradicción; lo señalo para que no se confunda con Q2 (contacto sin prensión).
- **Consecuencia potencial:** ninguna si se mantiene como D.
- **Nivel de certeza:** alta.
- **Recomendación:** mantener `true` con regla `evidencia`; no añadir nota.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente («entrelazar los dedos»).
- **¿Requiere decisión humana?:** no.

### DS-393 · `fuente.especifica_de` vacío en los 8 ejercicios
- **Ubicación exacta:** `catalogo-lote16`, los 8 ejercicios, campo `fuente.especifica_de`; `evidencia-lote-16`, «Datos comunes».
- **Evidencia:** la evidencia dice «**Población:** «personas hospitalizadas» (título); los ejercicios buscan prevenir «el deterioro funcional asociado a la enfermedad y al encamamiento». `especifica_de` actual: vacío».
- **Explicación de la contradicción o del problema:** R8.1 permite rellenar `especifica_de` solo con la población que la fuente declara. «Personas hospitalizadas» es una población declarada en el título. No propongo el valor porque el nombre breve debe ser coherente con los existentes («encamados», «rehabilitación tras un ingreso hospitalario»…) y esa elección es del desarrollador.
- **Consecuencia potencial:** si se rellena, la ficha mostrará «Material pensado para: …» (P17); si no, no se muestra. No afecta a la compatibilidad (R8.2).
- **Nivel de certeza:** media (la fuente declara la población; el nombre breve es una decisión).
- **Recomendación:** proponer un nombre breve al desarrollador (por ejemplo, «personas hospitalizadas» o «encamados», a decidir) y aplicarlo solo con su aprobación.
- **Prueba o evidencia que permitiría confirmarlo:** el título de la fuente y la lista de valores existentes de `especifica_de`.
- **¿Requiere decisión humana?:** sí. El desarrollador debe aprobar el nombre breve.

### DS-394 · `flexion_profunda_rodilla` en `respiracion-costal-sentado` y `agarrar-sabana-dedos-pies`: rodillas dobladas sin ángulo
- **Ubicación exacta:** `catalogo-lote16`, ejercicios `respiracion-costal-sentado` y `agarrar-sabana-dedos-pies`, `exigencias.flexion_profunda_rodilla`; `evidencia-lote-16`, apartados 118 y 124.
- **Evidencia:** en 118, la foto muestra «las rodillas dobladas»; en 124, el texto dice «Con las rodillas flexionadas». En ninguno consta que pasen de 90°.
- **Explicación de la contradicción o del problema:** §4 marca `flexion_profunda_rodilla` si la rodilla pasa de 90°. La evidencia no fija el ángulo. R2.1 permitiría `true` conservador, pero R2.2 exige D para `false`. La evidencia no da D de que no pase de 90°, así que el `false` actual no cumple R2.2 estrictamente.
- **Consecuencia potencial:** si se aplicara R2.2 al pie de la letra, habría que pasar a `true` conservador en los dos ejercicios, con impacto en `rodilla`.
- **Nivel de certeza:** media.
- **Recomendación:** revisar si la foto permite ver el ángulo; si no, aplicar R2.1 (`true` conservador con nota) o registrar como CN si se prefiere mantener `false` con la evidencia actual. No propongo el cambio sin decisión.
- **Prueba o evidencia que permitiría confirmarlo:** una vista lateral de la foto que muestre el ángulo entre muslo y pierna.
- **¿Requiere decisión humana?:** sí. El desarrollador debe decidir si se aplica R2.1 o se mantiene `false` con la evidencia actual.

---

FIN DEL BORRADOR