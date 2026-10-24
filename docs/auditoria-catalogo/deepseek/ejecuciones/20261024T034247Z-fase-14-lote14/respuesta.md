# Borrador de auditoría · lote 14 (consulta C15)

> **Preparado por DeepSeek** a partir de la evidencia de Claude (`evidencia-lote-14`) y del catálogo (`catalogo-lote14`). No he abierto las fuentes originales: todo lo que afirmo sobre ellas procede de la evidencia. No emito juicios clínicos. Los valores propuestos son propuestas; el desarrollador decide.

**Limitaciones de la verificación (comunes a los 7):**
- No he visto las figuras ni el PDF: dependo de las descripciones D/I/N de Claude. Cuando la evidencia no califica una imagen, lo digo.
- La evidencia no transcribe el paso completo de `circulos-rodilla-tumbado` («el resto del paso se corta en la extracción»). La auditoría de ese ejercicio se apoya en la figura y en lo transcrito.
- La evidencia no dice si la guía declara la población con la frase literal «dolor lumbar»; solo dice que es un complemento al tratamiento de la columna lumbar en fisioterapia. Ver DS-371.
- La evidencia señala que la posición inicial de casi todos los ejercicios incluye una instrucción de cuello («Barbilla hacia el pecho…») que HealthMove no recoge. Ver DS-372.
- No he podido comprobar en código si las notas `[conservadora]` actuales cumplen R2.4 ni si las ilustraciones inducen a otra interpretación (R7.7): la evidencia dice que las 7 coinciden.

---

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

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

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

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

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

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

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

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

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

### Decisión pendiente del desarrollador
REQUIERE REVISIÓN PROFESIONAL (ver DS-377). El resto de la auditoría documental está listo.

---

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

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (DS-378: la nota sobre la prótesis de cadera; DS-379: la ilustración sin el brazo).

---

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

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## Hallazgos

### DS-371 · `especifica_de` «dolor lumbar»: la evidencia no cita la población literal
- **Ubicación exacta:** evidencia-lote-14, «Datos comunes a toda la guía (D)»; catálogo, `fuente.especifica_de` de los 7.
- **Evidencia:** «complemento al tratamiento recibido en la Unidad de Fisioterapia del hospital para el cuidado de la columna lumbar»; «Su fisioterapeuta le indicará cuáles debe realizar… en función de su patología».
- **Explicación:** R8.1 exige que `especifica_de` recoja la población que la fuente declara, con un nombre breve. La evidencia describe el contexto (fisioterapia para la columna lumbar) pero no cita una frase de la fuente que diga «dolor lumbar». El nombre actual es una inferencia razonable, no una cita.
- **Consecuencia potencial:** si la fuente no declara «dolor lumbar» como población, el campo estaría rellenado por inferencia, contra R8.1.
- **Nivel de certeza:** media.
- **Recomendación:** que Claude confirme en la fuente si hay una frase que declare la población (título, cabecera o introducción) y la cite. Si no la hay, valorar si «dolor lumbar» se mantiene como nombre breve del contexto o se retira.
- **Prueba o evidencia que permitiría confirmarlo:** cita literal de la fuente con la población declarada.
- **¿Requiere decisión humana?:** sí, si la fuente no la declara: mantener o retirar el nombre.

### DS-372 · La instrucción de cuello de la fuente no se recoge ni se documenta
- **Ubicación exacta:** evidencia-lote-14, «Datos comunes a toda la guía (D)», apartado «Barbilla»; los 7 ejercicios del catálogo.
- **Evidencia:** «la posición inicial de casi todos los ejercicios incluye “Barbilla hacia el pecho sin levantar la cabeza (sacando papada)”. HealthMove no la recoge en ninguno de los 7 y no lo documenta».
- **Explicación:** la especificación §4 excluye los movimientos de cuello del catálogo v1. HealthMove omite esa parte de la posición inicial. No es una exigencia de las 16, pero es una diferencia con la fuente (C3) que no está en `adaptaciones` ni en `notas_etiquetado`. R3.1 (la ejecución de HealthMove debe ser una de las que permite la fuente) y §7.7 (cualquier cambio respecto a la fuente se anota en `adaptaciones`) apuntan a documentarla.
- **Consecuencia potencial:** el usuario ejecuta una postura distinta de la que pide la fuente sin saberlo; la trazabilidad de la diferencia se pierde.
- **Nivel de certeza:** alta (la diferencia existe; su tratamiento documental es lo que se discute).
- **Recomendación:** documentar en `adaptaciones` (o en `notas_etiquetado`, si se decide que no es una adaptación de ejecución) que la fuente pide una posición de barbilla que HealthMove no incluye por la exclusión de cuello. No propongo cambiar instrucciones.
- **Prueba o evidencia que permitiría confirmarlo:** decisión sobre si la omisión de una instrucción de cuello es una adaptación documentable o una exclusión del catálogo que no requiere nota.
- **¿Requiere decisión humana?:** sí: cómo se documenta la omisión.

### DS-373 · `brazo_sobre_hombro` en `circulos-rodilla-tumbado`: la mano en la rodilla con el codo doblado
- **Ubicación exacta:** catálogo, `circulos-rodilla-tumbado`, `exigencias.brazo_sobre_hombro`; evidencia, apartado 103.
- **Evidencia:** «Sujete la rodilla con ambas manos»; figura 8: «una rodilla sobre la cadera sujeta con las dos manos».
- **Explicación:** CN-1 (P25) manda la definición literal: cuenta la mano que pasa del hombro solo porque se dobla el codo. La evidencia no dice si la mano pasa del hombro; la figura muestra la mano en la rodilla, con el codo doblado. Con la rodilla a 90° sobre la cadera, la mano queda a la altura de la rodilla, que puede estar por debajo o a la altura del hombro. No consta que no la pase.
- **Consecuencia potencial:** si la mano pasa del hombro, el ejercicio debería excluirse para `brazo_arriba`; hoy no lo hace.
- **Nivel de certeza:** media.
- **Recomendación:** aplicar R2.1 y CN-1: `true` conservador con nota `[conservadora]`, salvo que la figura permita fijar con D que la mano queda por debajo del hombro.
- **Prueba o evidencia que permitiría confirmarlo:** descripción de la figura 8 con la altura de la mano respecto al hombro.
- **¿Requiere decisión humana?:** no para el `true` conservador (lo permite R2.1); sí si se quiere un `false` con D.

### DS-374 · Notas de etiquetado que no siguen la forma de R2.4
- **Ubicación exacta:** catálogo, `notas_etiquetado` de `circulos-rodilla-tumbado` («La rodilla queda a 90° sobre la cadera, no sobre el pecho.») y de `oblicuos-isometricos-tumbado` («Mantén la zona lumbar apoyada.»).
- **Evidencia:** R2.4: «`[conservadora] <exigencia>: <motivo>. Se cerraría con: <evidencia que falta>.`».
- **Explicación:** las notas actuales no son `[conservadora]` ni describen una incertidumbre con la evidencia que falta. En `circulos-rodilla-tumbado` la nota describe una aclaración de la fuente; en `oblicuos-isometricos-tumbado` es un consejo. Si se añaden `true` conservadores (DS-373, DS-376), sus notas deben seguir R2.4.
- **Consecuencia potencial:** las incertidumbres no quedan trazables en el formato que exige el protocolo.
- **Nivel de certeza:** alta (la forma no coincide); media sobre si deben convertirse.
- **Recomendación:** al añadir los `true` conservadores, escribir sus notas en la forma de R2.4. Las notas actuales que no son de incertidumbre pueden quedarse o moverse, según decida el desarrollador.
- **Prueba o evidencia que permitiría confirmarlo:** revisión de `notas_etiquetado` tras aplicar los cambios.
- **¿Requiere decisión humana?:** no para las notas nuevas; sí para el destino de las actuales.

### DS-375 · `agarre` con la mano abierta que empuja o se apoya: Q2 y el verbo de la fuente
- **Ubicación exacta:** catálogo, `agarre` de `abdominal-isometrico-muslos`, `oblicuos-isometricos-tumbado` y `cruzar-pierna-tumbado`; evidencia, apartados 105, 106 y 108.
- **Evidencia:** «Palmas de las manos sobre los muslos»; «una mano abierta empuja el muslo»; «la mano contraria empuja la rodilla».
- **Explicación:** Q2 (P10) marca `agarre: true` conservador cuando hay contacto o apoyo sin evidencia de prensión, y pide que la instrucción use el verbo de la fuente. En estos tres, la mano está abierta y empuja o se apoya; no hay prensión. La instrucción de HealthMove usa «pon las palmas» y «empuja con la mano», que son verbos de la fuente. La duda es si el contacto de una mano abierta que empuja entra en Q2 o si, al no ser un apoyo para estabilidad, queda fuera.
- **Consecuencia potencial:** si entra en Q2, faltan tres `true` conservadores; si no, el criterio de Q2 se está aplicando de forma desigual.
- **Nivel de certeza:** media.
- **Recomendación:** aclarar si Q2 cubre todo contacto de la mano abierta o solo el apoyo para estabilidad. Mientras tanto, aplicar R2.1 (`true` conservador) o mantener `false` con la justificación de que no es apoyo.
- **Prueba o evidencia que permitiría confirmarlo:** criterio del desarrollador sobre el alcance de Q2.
- **¿Requiere decisión humana?:** sí: alcance de Q2.

### DS-376 · `flexion_amplia_cadera` en `oblicuos-isometricos-tumbado`
- **Ubicación exacta:** catálogo, `oblicuos-isometricos-tumbado`, `exigencias.flexion_amplia_cadera`; evidencia, apartado 106.
- **Evidencia:** «la pierna elevada con la cadera y la rodilla a unos 90° (muslo vertical, pierna horizontal)»; «el muslo queda más o menos vertical; no consta que se acerque al tronco más que al estar sentado».
- **Explicación:** §4 marca `flexion_amplia_cadera` si el muslo está más cerca del tronco que al estar sentado. La evidencia califica la posición como I: el muslo vertical no permite saber si se acerca más que sentado. R2.3: un I no basta para `false`.
- **Consecuencia potencial:** el ejercicio se ofrece a perfiles con `cadera` excluida sin que conste que no la exige.
- **Nivel de certeza:** media.
- **Recomendación:** `true` conservador con nota `[conservadora]`, salvo que la figura permita fijar con D que el muslo no se acerca más que sentado.
- **Prueba o evidencia que permitiría confirmarlo:** descripción de la figura con el ángulo entre muslo y tronco.
- **¿Requiere decisión humana?:** no para el `true` conservador; sí si se quiere un `false` con D.

### DS-377 · `movilizacion-ciatico-tumbado`: la nota pide revisión sanitaria
- **Ubicación exacta:** catálogo, `movilizacion-ciatico-tumbado`, `notas_etiquetado`; evidencia, apartado 107.
- **Evidencia:** «Es una movilización del nervio ciático: conviene revisarla con criterio sanitario antes de usarla.»
- **Explicación:** la nota actual reconoce que el ejercicio requiere criterio sanitario. La auditoría documental no puede resolverlo: no soy profesional sanitario y la evidencia no aporta una valoración clínica. El protocolo §12.1 pide parar y preguntar cuando hay una cuestión de seguridad que no se resuelve con una etiqueta.
- **Consecuencia potencial:** aprobar el ejercicio documentalmente sin la revisión que su propia nota pide.
- **Nivel de certeza:** alta (la nota existe y pide revisión).
- **Recomendación:** mantener el ejercicio en `borrador` y marcar la decisión como REQUIERE REVISIÓN PROFESIONAL. No propongo cambiar la nota ni las etiquetas.
- **Prueba o evidencia que permitiría confirmarlo:** revisión por un profesional sanitario (fisioterapeuta) que valore la movilización nerviosa.
- **¿Requiere decisión humana?:** sí: si se aprueba sin esa revisión o se espera a ella.

### DS-378 · Nota de `cruzar-pierna-tumbado` añadida por HealthMove y no visible
- **Ubicación exacta:** catálogo, `cruzar-pierna-tumbado`, `notas_etiquetado`; evidencia, apartado 108.
- **Evidencia:** «No hacerlo tras una prótesis de cadera: cruzar la pierna está desaconsejado durante la recuperación.» La evidencia dice: «no está en la fuente: la ha añadido HealthMove, en una nota que la persona no ve».
- **Explicación:** es un consejo de seguridad (clase 2 o 3, DG-6) que HealthMove añade y que la fuente no contiene. R6.3 pide documentarlo como adaptación (C2) y no atribuirlo a la fuente. Además, `notas_etiquetado` no se muestra al usuario (Q7), así que el consejo no llega a quien lo necesita.
- **Consecuencia potencial:** un consejo de seguridad relevante queda oculto; y si se atribuye a la fuente, se le atribuye algo que no dice.
- **Nivel de certeza:** alta (la diferencia está documentada en la evidencia).
- **Recomendación:** decidir si el consejo se mantiene, se mueve a un campo visible o se retira. No propongo cambiar la nota sin decisión.
- **Prueba o evidencia que permitiría confirmarlo:** decisión del desarrollador y, si se muestra, revisión con `healthmove-safety-reviewer`.
- **¿Requiere decisión humana?:** sí.

### DS-379 · Ilustración de `cruzar-pierna-tumbado` sin el brazo que empuja
- **Ubicación exacta:** catálogo, `cruzar-pierna-tumbado`, ilustración; evidencia, apartado 108.
- **Evidencia:** «vista desde arriba, una pierna que cruza sobre la otra; no se dibuja el brazo que empuja la rodilla (los dos brazos quedan junto al cuerpo)».
- **Explicación:** R7.6 pide comparar la ilustración con la fuente y registrar la discrepancia. La instrucción de HealthMove pide empujar con el brazo contrario; la ilustración no lo muestra. R7.7 invalida la ilustración si induce a interpretar el ejercicio de otra forma. Aquí la ilustración omite un paso, no lo cambia, pero puede inducir a hacerlo sin el brazo.
- **Consecuencia potencial:** el usuario puede ejecutar el estiramiento sin el empuje del brazo, que es parte del movimiento de la fuente.
- **Nivel de certeza:** media (la omisión es D; si induce a otra interpretación es juicio).
- **Recomendación:** registrar la discrepancia y decidir si se corrige la ilustración antes de la aprobación documental (R7.7).
- **Prueba o evidencia que permitiría confirmarlo:** revisión de la ilustración y decisión sobre R7.7.
- **¿Requiere decisión humana?:** sí.

---

## Resumen del lote

- **7 ejercicios auditados por primera vez con el protocolo 1.0.**
- **Cambios de etiquetas propuestos:**
  - `circulos-rodilla-tumbado`: `brazo_sobre_hombro` → `true` conservador (DS-373);
  - `oblicuos-isometricos-tumbado`: `flexion_amplia_cadera` → `true` conservador (DS-376);
  - `abdominal-isometrico-muslos`, `oblicuos-isometricos-tumbado` y `cruzar-pierna-tumbado`: `agarre` pendiente de la decisión sobre Q2 (DS-375).
- **Adaptaciones nuevas para aprobar una a una (Q5):** ninguna.
- **Nombre de `especifica_de`:** «dolor lumbar» en los 7, pendiente de confirmar la cita de la fuente (DS-371).
- **Decisiones pendientes:** DS-372 (instrucción de cuello), DS-375 (alcance de Q2), DS-377 (revisión profesional de `movilizacion-ciatico-tumbado`), DS-378 (nota de prótesis de cadera), DS-379 (ilustración sin el brazo).

FIN DEL BORRADOR