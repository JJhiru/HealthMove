# Lote 14 · Primera auditoría con el protocolo 1.0: Hospital Clínico San Carlos, columna lumbar (7 ejercicios)

- Fecha: 2026-10-24
- Versión del protocolo: 1.0
- Catálogo: v0.3.0 (actualizado 2026-10-14), rama `desarrollo-v1`, commit `292b3f0`
- Identificador git del catálogo: no fiable, el catálogo tiene cambios sin confirmar (son los cambios de este lote, aplicados antes de cerrarlo).
- Huellas literales (tras aplicar los cambios): `circulos-rodilla-tumbado` `cd03a237c8a03532`, `control-abdominal-brazos-arriba` `7d02264cc06e68ad`, `abdominal-isometrico-muslos` `6b7132ee3b99f237`, `oblicuos-isometricos-tumbado` `c863a642d057ad6d`, `movilizacion-ciatico-tumbado` `c5cbf74fa9c525ef`, `cruzar-pierna-tumbado` `30b3afc2457fcd9a`, `autoelongacion-sentado` `d21599e1325dac9d`.
- **Cómo se hizo (P29):** evidencia de Claude (`evidencia/lote-14.md`); borrador de DeepSeek (consulta C15, `deepseek/ejecuciones/20261024T034247Z-fase-14-lote14`, completa en un bloque); verificación de Claude. **Los apartados son el borrador de DeepSeek con las correcciones de Claude** listadas en «Revisión de DeepSeek». La columna «Etiqueta actual» conserva el valor de antes de aplicar.
- **Fuente abierta** (2026-10-24, `curl`, HTTP 200):

| Fuente | URL | Datos | Revisado |
|---|---|---|---|
| Hospital Clínico San Carlos, Unidad de Fisioterapia, «Guía de ejercicios para el cuidado de la Columna Lumbar», DI-FISI-009-2020, noviembre de 2025 | `https://www.comunidad.madrid/hospital/clinicosancarlos/sites/clinicosancarlos/files/inline-files/DI-FISI-009-2020%20Guia%20Ejercicios%20Cuidado%20Columna%20Lumbar%20modificada%202025_2.pdf` | PDF de 32 páginas, SHA-256 (prefijo) `cf62262a8afe7b3f` | Texto completo; figuras de las páginas 11, 16, 21, 22 y 26-29 |

- **Población:** la guía es para el cuidado de la columna lumbar de los pacientes de su Unidad de Fisioterapia. `especifica_de` pasa de «dolor lumbar» (una inferencia) al título literal, «cuidado de la columna lumbar» (DS-371). El nombre se confirma en la revisión final.
- **Barbilla:** la posición inicial de 5 de los 7 ejercicios pide meter la barbilla. HealthMove no la incluye (exclusión del cuello, especificación §4) y ahora lo documenta como adaptación (DS-372).
- **Ilustraciones de HealthMove** (R7.6): coinciden las 7; la de `cruzar-pierna-tumbado` no dibujaba el brazo que empuja la rodilla y se corrige.

## 103. circulos-rodilla-tumbado

### Identificación
- ID: `circulos-rodilla-tumbado`
- Nombre: Círculos con la rodilla tumbado
- Fuente: Hospital Clínico San Carlos, «Guía de ejercicios para el cuidado de la columna lumbar», «Circunducción autopasiva de cadera», pp. 9-10, figura 8 (F1)
- Población destinataria de la fuente (si la declara): complemento al tratamiento de fisioterapia para el cuidado de la columna lumbar; `especifica_de` actual «dolor lumbar» (ver DS-371).
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una adaptación ya documentada y una nota que no está en la forma de R2.4

### Evidencia de la fuente
- Ubicación exacta: F1, «Circunducción autopasiva de cadera», pp. 9-10, figura 8 (apartado 103).
- Pasos originales relevantes, resumidos con palabras propias: boca arriba, piernas estiradas, brazos alineados, palmas al techo; flexionar una pierna hasta que la rodilla quede encima de la cadera, a 90°; «Sujete la rodilla con ambas manos»; si hay molestias, flexionar la otra pierna; activar suelo pélvico y transverso y hacer círculos.
- Coincidencias (C1): posición, movimiento, sujeción con las dos manos, alternativa de doblar la otra pierna.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la guía no da repeticiones; HealthMove usa «5 círculos en cada sentido con cada pierna». Ya está en `adaptaciones`.
- Adaptaciones que deben documentarse: ninguna nueva.
- Hechos, inferencias e incertidumbres: D (texto y figura), la rodilla sujeta con las dos manos y a 90° sobre la cadera. N, si la mano pasa del hombro: la evidencia no lo dice; la figura muestra la mano en la rodilla, con el codo doblado.
- Limitaciones de la verificación: el paso completo está cortado en la extracción; la figura es la única fuente del detalle del círculo.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | I (figura): la mano está en la rodilla, con el codo doblado; no consta que la mano pase del hombro | conservadora | TRUE | CN-1 (P25): ante la duda, `true` conservador con nota |
| mano_detras | false | D (figura): la mano sube por delante, a la rodilla | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): «Sujete la rodilla con ambas manos» | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto): «Sujete la rodilla» | evidencia | TRUE | §4: sujetar |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y figura): rodilla a 90°, no más | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): «rodilla sobre la cadera, no sobre el pecho» | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna. La instrucción de cuello de la fuente no se recoge (ver DS-372).
- `fuente.especifica_de`: «dolor lumbar» (ver DS-371).

### Incidencias
- `brazo_sobre_hombro: false` con la mano en la rodilla y el codo doblado: ver DS-373.
- Nota actual sin la forma de R2.4: ver DS-374.

### Propuesta de cambios
- `exigencias.brazo_sobre_hombro`: `false` → `true` conservador, con nota `[conservadora]` (R2.4).
- `notas_etiquetado`: pasar la nota actual a la forma de R2.4 (DS-374).
- `fuente.consultado`: 2026-10-24.
- `fuente.especifica_de`: «dolor lumbar» → «cuidado de la columna lumbar», el título literal de la guía (DS-371).
- `adaptaciones`: añadir «La guía pide además meter la barbilla («sacando papada»); HealthMove no incluye posiciones ni movimientos de cuello.» (DS-372).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 104. control-abdominal-brazos-arriba

### Identificación
- ID: `control-abdominal-brazos-arriba`
- Nombre: Subir los brazos sin despegar la espalda
- Fuente: Hospital Clínico San Carlos, «Guía de ejercicios para el cuidado de la columna lumbar», «Control costo-abdominal combinado con brazos», pp. 14-15, figuras 18 y 19 (F1)
- Población destinataria de la fuente (si la declara): complemento al tratamiento de fisioterapia para el cuidado de la columna lumbar; `especifica_de` actual «dolor lumbar» (ver DS-371).
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una adaptación ya documentada

### Evidencia de la fuente
- Ubicación exacta: F1, «Control costo-abdominal combinado con brazos», pp. 14-15, figuras 18 y 19 (apartado 104).
- Pasos originales relevantes, resumidos con palabras propias: boca arriba, piernas flexionadas con los pies apoyados, brazos alineados; al soltar el aire, «subir los brazos estirados sin despegar nada la espalda de la camilla»; cuando empiece a despegarse, mantener los brazos ahí y presionar contra la camilla; bajar los brazos cogiendo aire.
- Coincidencias (C1): posición, movimiento, límite del movimiento.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la guía no da repeticiones; HealthMove usa «De 5 a 10 veces». Ya está en `adaptaciones`.
- Adaptaciones que deben documentarse: ninguna nueva.
- Hechos, inferencias e incertidumbres: D (texto y figura 19), los dos brazos estirados suben por encima de la cabeza. D (texto), los brazos suben juntos.
- Limitaciones de la verificación: la figura 18 no se describe; solo la 19.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: control abdominal | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y figura 19): los brazos suben por encima de la cabeza | evidencia | TRUE | §4: mano por encima del hombro |
| mano_detras | false | D (figura 19): los brazos suben por delante y por encima, no por detrás | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): «subir los brazos estirados» | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto): no se pide cerrar la mano | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): rodillas dobladas con los pies apoyados, sin que conste que pasen de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna. La instrucción de cuello de la fuente no se recoge (ver DS-372).
- `fuente.especifica_de`: «dolor lumbar» (ver DS-371).

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.
- `fuente.especifica_de`: «dolor lumbar» → «cuidado de la columna lumbar», el título literal de la guía (DS-371).
- `adaptaciones`: añadir «La guía pide además meter la barbilla («sacando papada»); HealthMove no incluye posiciones ni movimientos de cuello.» (DS-372).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 105. abdominal-isometrico-muslos

### Identificación
- ID: `abdominal-isometrico-muslos`
- Nombre: Empujar los muslos contra las manos
- Fuente: Hospital Clínico San Carlos, «Guía de ejercicios para el cuidado de la columna lumbar», «Abdominales», pp. 19-20, figuras 27 y 28 (F1)
- Población destinataria de la fuente (si la declara): complemento al tratamiento de fisioterapia para el cuidado de la columna lumbar; `especifica_de` actual «dolor lumbar» (ver DS-371).
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una adaptación ya documentada

### Evidencia de la fuente
- Ubicación exacta: F1, «Abdominales», pp. 19-20, figuras 27 y 28 (apartado 105).
- Pasos originales relevantes, resumidos con palabras propias: boca arriba, piernas flexionadas con los pies apoyados, «Palmas de las manos sobre los muslos»; al soltar el aire, pronunciar una «F» mientras se empujan los muslos contra las manos.
- Coincidencias (C1): posición, movimiento, manos sobre los muslos.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la guía no da repeticiones; HealthMove usa «De 5 a 10 veces». Ya está en `adaptaciones`.
- Adaptaciones que deben documentarse: ninguna nueva.
- Hechos, inferencias e incertidumbres: D (texto y figuras), las dos manos abiertas sobre los muslos, la cabeza apoyada. D (texto), las dos manos empujan a la vez.
- Limitaciones de la verificación: la ilustración de HealthMove apenas distingue los brazos (evidencia).

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: contracción estática | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: contracción estática | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y figuras): las manos están sobre los muslos, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (figuras): las manos están delante, sobre los muslos | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): «Palmas de las manos sobre los muslos»; las dos manos empujan | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto y figuras): las palmas están abiertas sobre los muslos; no se pide cerrar la mano | evidencia | FALSE | R7.4 / Q2 (P10): contacto sin prensión; ver DS-375 |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): rodillas dobladas con los pies apoyados, sin que conste que pasen de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna. La instrucción de cuello de la fuente no se recoge (ver DS-372).
- `fuente.especifica_de`: «dolor lumbar» (ver DS-371).

### Incidencias
- `agarre: false` con las palmas sobre los muslos: ver DS-375.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.
- `fuente.especifica_de`: «dolor lumbar» → «cuidado de la columna lumbar», el título literal de la guía (DS-371).
- `adaptaciones`: añadir «La guía pide además meter la barbilla («sacando papada»); HealthMove no incluye posiciones ni movimientos de cuello.» (DS-372).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 106. oblicuos-isometricos-tumbado

### Identificación
- ID: `oblicuos-isometricos-tumbado`
- Nombre: Empujar el muslo con la mano
- Fuente: Hospital Clínico San Carlos, «Guía de ejercicios para el cuidado de la columna lumbar», «Oblicuos», pp. 20-21, figuras 29 a 31 (F1)
- Población destinataria de la fuente (si la declara): complemento al tratamiento de fisioterapia para el cuidado de la columna lumbar; `especifica_de` actual «dolor lumbar» (ver DS-371).
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una diferencia de dosis y una de brazos

### Evidencia de la fuente
- Ubicación exacta: F1, «Oblicuos», pp. 20-21, figuras 29 a 31 (apartado 106).
- Pasos originales relevantes, resumidos con palabras propias: boca arriba, una pierna flexionada con el pie apoyado y la otra elevada; brazos alineados; al soltar el aire, empujar con la mano sobre el muslo elevado: la mano contraria hacia la cara externa (10 repeticiones) y la del mismo lado hacia la cara interna (10 repeticiones); repetir con la otra pierna.
- Coincidencias (C1): posición, movimiento, dosis (10 por empuje).
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna documentada. La dosis de HealthMove («10 veces cada empuje con cada pierna») coincide con la fuente.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y figuras), una mano abierta empuja el muslo por fuera o por dentro. D (texto), primero una mano y después la otra, con la otra pierna después. I (figura), el muslo queda más o menos vertical; no consta que se acerque al tronco más que al estar sentado.
- Limitaciones de la verificación: la evidencia no describe la figura 29.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: contracción estática | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: contracción estática | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y figuras): la mano empuja el muslo elevado, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (figuras): la mano está delante, sobre el muslo | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): primero una mano y después la otra; series con un brazo y después con el otro | evidencia | FALSE | DG-4 / Q1 (P9) |
| agarre | false | D (texto y figuras): la mano está abierta y empuja; no se pide cerrar la mano | evidencia | FALSE | R7.4 / Q2 (P10); ver DS-375 |
| peso_en_manos | false | D: tumbado; la mano empuja el muslo, no carga el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): la pierna de apoyo doblada con el pie apoyado, sin que conste que pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | I (figura): el muslo elevado queda más o menos vertical; no consta que se acerque al tronco más que al estar sentado | conservadora | TRUE | R2.1: ante la duda, `true` conservador con nota |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna. La instrucción de cuello de la fuente no se recoge (ver DS-372).
- `fuente.especifica_de`: «dolor lumbar» (ver DS-371).

### Incidencias
- `flexion_amplia_cadera: false` con el muslo elevado: ver DS-376.
- `agarre: false` con la mano abierta empujando: ver DS-375.

### Propuesta de cambios
- `exigencias.flexion_amplia_cadera`: `false` → `true` conservador, con nota `[conservadora]` (R2.4).
- `fuente.consultado`: 2026-10-24.
- `fuente.especifica_de`: «dolor lumbar» → «cuidado de la columna lumbar», el título literal de la guía (DS-371).
- `adaptaciones`: añadir «La guía pide además meter la barbilla («sacando papada»); HealthMove no incluye posiciones ni movimientos de cuello.» (DS-372).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 107. movilizacion-ciatico-tumbado

### Identificación
- ID: `movilizacion-ciatico-tumbado`
- Nombre: Mover el tobillo con la pierna en alto
- Fuente: Hospital Clínico San Carlos, «Guía de ejercicios para el cuidado de la columna lumbar», «Movilización nervio ciático», pp. 25-26, figuras 39 a 41 (F1)
- Población destinataria de la fuente (si la declara): complemento al tratamiento de fisioterapia para el cuidado de la columna lumbar; `especifica_de` actual «dolor lumbar» (ver DS-371).
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una adaptación ya documentada y una nota que requiere revisión profesional

### Evidencia de la fuente
- Ubicación exacta: F1, «Movilización nervio ciático», pp. 25-26, figuras 39 a 41 (apartado 107).
- Pasos originales relevantes, resumidos con palabras propias: boca arriba; «Eleve y cruce una pierna sobre la otra realizando flexo-extensiones de tobillo de la pierna elevada con la rodilla estirada».
- Coincidencias (C1): posición, movimiento, pierna estirada y cruzada.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la guía no da repeticiones; HealthMove usa «De 5 a 10 veces con cada pierna». Ya está en `adaptaciones`.
- Adaptaciones que deben documentarse: ninguna nueva.
- Hechos, inferencias e incertidumbres: D (texto y figura 39), la pierna estirada y elevada en vertical, cruzada por encima de la otra. D (figura 39), la cadera queda a unos 90° o algo más.
- Limitaciones de la verificación: la ilustración de HealthMove es una vista lateral que no muestra el cruce (evidencia).

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movilización | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| agarre | false | D (texto): las manos no intervienen | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): «con la rodilla estirada» | evidencia | FALSE | — |
| flexion_amplia_cadera | true | D (figura 39): la pierna estirada queda en vertical o casi; la cadera, a unos 90° o algo más | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide (evidencia); no se ve el cruce en la vista lateral, pero no induce a otra interpretación.
- Exclusiones del catálogo v1: ninguna. La instrucción de cuello de la fuente no se recoge (ver DS-372).
- `fuente.especifica_de`: «dolor lumbar» (ver DS-371).

### Incidencias
- La nota actual pide revisión con criterio sanitario: ver DS-377.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.
- `fuente.especifica_de`: «dolor lumbar» → «cuidado de la columna lumbar», el título literal de la guía (DS-371).

### Decisión pendiente del desarrollador
REQUIERE REVISIÓN PROFESIONAL (ver DS-377). El resto de la auditoría documental está listo.


## 108. cruzar-pierna-tumbado

### Identificación
- ID: `cruzar-pierna-tumbado`
- Nombre: Cruzar una pierna sobre la otra
- Fuente: Hospital Clínico San Carlos, «Guía de ejercicios para el cuidado de la columna lumbar», «Cruzar pierna sobre otra», p. 27, figura 43 (F1)
- Población destinataria de la fuente (si la declara): complemento al tratamiento de fisioterapia para el cuidado de la columna lumbar; `especifica_de` actual «dolor lumbar» (ver DS-371).
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una nota añadida por HealthMove y una ilustración que no muestra el brazo

### Evidencia de la fuente
- Ubicación exacta: F1, «Cruzar pierna sobre otra», p. 27, figura 43 (apartado 108).
- Pasos originales relevantes, resumidos con palabras propias: boca arriba con las piernas estiradas; flexionar una pierna y cruzarla sobre la otra; «Empuje con el brazo contrario» y mantener 15 a 30 segundos; cambiar de pierna; si duele o cuesta, flexionar la pierna de apoyo.
- Coincidencias (C1): posición, movimiento, dosis de mantenimiento.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna documentada. La nota actual («No hacerlo tras una prótesis de cadera…») no está en la fuente: la ha añadido HealthMove (ver DS-378).
- Adaptaciones que deben documentarse: ninguna nueva.
- Hechos, inferencias e incertidumbres: D (texto y figura 43), una rodilla doblada cruzada por encima de la otra pierna, la mano contraria empuja la rodilla, el tronco gira algo. D (texto), el brazo contrario empuja.
- Limitaciones de la verificación: la ilustración de HealthMove no dibuja el brazo que empuja (evidencia).

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: estiramiento suave | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y figura 43): la mano empuja la rodilla cruzada, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (figura 43): la mano está delante, sobre la rodilla | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): «Empuje con el brazo contrario»; un solo brazo empuja | evidencia | FALSE | DG-4 / Q1 (P9) |
| agarre | false | D (texto y figura 43): la mano empuja la rodilla; no se pide cerrar la mano | evidencia | FALSE | R7.4 / Q2 (P10); ver DS-375 |
| peso_en_manos | false | D: tumbado; la mano empuja la rodilla, no carga el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): la pierna de apoyo estirada o doblada, sin que conste que pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | true | D (texto y figura 43): la rodilla doblada se cruza por encima de la otra pierna | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | true | D (texto y figura 43): el tronco gira algo al empujar la rodilla | evidencia | TRUE | §4: girar los hombros respecto a la cadera |

### Otros campos
- Fase `calma`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: no dibuja el brazo que empuja (evidencia). R7.7: no induce a interpretar el ejercicio de otra forma, pero la instrucción sí pide el brazo. Ver DS-379.
- Exclusiones del catálogo v1: ninguna. La instrucción de cuello de la fuente no se recoge (ver DS-372).
- `fuente.especifica_de`: «dolor lumbar» (ver DS-371).

### Incidencias
- Nota añadida por HealthMove que no está en la fuente: ver DS-378.
- Ilustración sin el brazo que empuja: ver DS-379.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.
- `notas_etiquetado`: la observación se marca como de HealthMove, no de la guía.
- Ilustración: se añade la mano contraria empujando la rodilla (`scripts/ilustraciones/tumbado.mjs`, DS-379).
- `fuente.especifica_de`: «dolor lumbar» → «cuidado de la columna lumbar», el título literal de la guía (DS-371).

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (DS-378): mostrar, mover o retirar la observación de HealthMove sobre la prótesis de cadera, que no viene de la guía. La ilustración se ha corregido (DS-379).


## 109. autoelongacion-sentado

### Identificación
- ID: `autoelongacion-sentado`
- Nombre: Crecer sentado
- Fuente: Hospital Clínico San Carlos, «Guía de ejercicios para el cuidado de la columna lumbar», «Autoelongación», p. 28, figuras 46 y 47 (F1)
- Población destinataria de la fuente (si la declara): complemento al tratamiento de fisioterapia para el cuidado de la columna lumbar; `especifica_de` actual «dolor lumbar» (ver DS-371).
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una adaptación ya documentada

### Evidencia de la fuente
- Ubicación exacta: F1, «Autoelongación», p. 28, figuras 46 y 47 (apartado 109).
- Pasos originales relevantes, resumidos con palabras propias: sentado en una silla, espalda recta sin apoyarla en el respaldo, pies apoyados; coger aire hacia las costillas; contraer suelo pélvico y transverso y crecer longitudinalmente; soltar el aire manteniendo la contracción; volver. Observación: hombros relajados, sin subirlos, sin sacar el pecho y sin arquear la espalda.
- Coincidencias (C1): posición, movimiento, observación de los hombros.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la guía no da repeticiones; HealthMove usa «De 5 a 10 veces». Ya está en `adaptaciones`.
- Adaptaciones que deben documentarse: ninguna nueva.
- Hechos, inferencias e incertidumbres: D (texto y figuras), sentado sin apoyar la espalda, flecha hacia arriba. D (texto), los hombros no se suben y la espalda no se arquea.
- Limitaciones de la verificación: la evidencia no describe la figura 46 con detalle.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: control postural | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no intervienen; los hombros se relajan | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| agarre | false | D (texto): las manos no intervienen | evidencia | FALSE | — |
| peso_en_manos | false | D: sentado | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: sentado con los pies apoyados | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): «sin arquear la espalda»; la espalda se mantiene recta | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna. La instrucción de cuello de la fuente no se recoge (ver DS-372).
- `fuente.especifica_de`: «dolor lumbar» (ver DS-371).

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.
- `fuente.especifica_de`: «dolor lumbar» → «cuidado de la columna lumbar», el título literal de la guía (DS-371).
- `adaptaciones`: añadir «La guía pide además meter la barbilla («sacando papada»); HealthMove no incluye posiciones ni movimientos de cuello.» (DS-372).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## Revisión de DeepSeek

**Consulta C15** (`deepseek/ejecuciones/20261024T034247Z-fase-14-lote14`, completa en un bloque con «FIN DEL BORRADOR»; 0,032 USD como mucho). Análisis: `deepseek/analisis-claude/fase-14-lote14.md`. (El bloque repite el título de cada hallazgo DS; es un defecto de forma de la respuesta, que se conserva literal.)

**Aceptado:** DS-372 (barbilla), DS-373 (`brazo_sobre_hombro` conservador en 103, CN-1), DS-374 (formato de las notas), DS-376 (`flexion_amplia_cadera` conservador en 106: el texto de «Oblicuos» no fija el ángulo, a diferencia del de 103), DS-377 (107 queda en REQUIERE REVISIÓN PROFESIONAL), DS-378 (decisión sobre la nota de 108) y DS-379 (ilustración de 108, corregida).

**Corregido o matizado por Claude:**
- DS-371: no se retira la población; se sustituye la inferencia por el título literal de la guía.
- DS-375, rechazado: las figuras muestran las palmas abiertas (D de que la mano no se cierra); el contacto con el propio cuerpo no es un apoyo (precedente del lote 6). El borrador ya dejaba `agarre` en `false`.
- 108: DeepSeek proponía decidir la ilustración; se ha corregido directamente.

## Resumen del lote

- **7 ejercicios auditados por primera vez con el protocolo 1.0.** 5 LISTOS PARA APROBACIÓN DOCUMENTAL; `movilizacion-ciatico-tumbado`, REQUIERE REVISIÓN PROFESIONAL; `cruzar-pierna-tumbado`, PENDIENTE DE DECISIÓN (DS-378).
- **Cambios de etiquetas:** `circulos-rodilla-tumbado`, `brazo_sobre_hombro` → `true` conservador; `oblicuos-isometricos-tumbado`, `flexion_amplia_cadera` → `true` conservador.
- **Adaptación nueva, en 5 ejercicios (Q5):** la omisión de la barbilla.
- **Nombre nuevo en `especifica_de`:** «cuidado de la columna lumbar», en los 7.
- **Ilustración corregida:** `cruzar-pierna-tumbado`.
