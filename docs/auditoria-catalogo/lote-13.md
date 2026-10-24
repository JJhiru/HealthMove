# Lote 13 · Primera auditoría con el protocolo 1.0: Royal Berkshire (pulmonar y core), Royal Papworth y RUH Bath (9 ejercicios)

- Fecha: 2026-10-24
- Versión del protocolo: 1.0
- Catálogo: v0.3.0 (actualizado 2026-10-14), rama `desarrollo-v1`, commit `c16f646`
- Identificador git del catálogo: no fiable, el catálogo tiene cambios sin confirmar (son los cambios de este lote, aplicados antes de cerrarlo).
- Huellas literales (tras aplicar los cambios): `puno-extension-codo-sentado` `01beff3d5accca00`, `estiramiento-pecho-manos-lumbar` `f0f910e6c1ac96bc`, `estiramiento-pecho-manos-lumbar-pie` `a3b0011e8ae9e8e1`, `abrir-pierna-brazo-pared` `80d9792cbfb42cbb`, `suelo-pelvico-lentas` `778160df33e8b97b`, `suelo-pelvico-rapidas` `e8894af522cab9cc`, `manos-entrelazadas-arriba-tumbado` `fb883ac2d5315898`, `circulos-pierna-lado-suelo` `8be4eb5cab6da1ac`, `rodillas-lado-lado-suelo` `c8810d059d07f439`.
- **Cómo se hizo (P29):** evidencia de Claude (`evidencia/lote-13.md`); borrador de DeepSeek (consulta C14, `deepseek/ejecuciones/20261024T033711Z-fase-13-lote13`, completa en un bloque); verificación de Claude. **Los apartados son el borrador de DeepSeek con las correcciones de Claude** listadas en «Revisión de DeepSeek»; DeepSeek los había numerado del 1 al 9 y se han renumerado del 94 al 102. La columna «Etiqueta actual» conserva el valor de antes de aplicar.
- **Fuentes abiertas** (2026-10-24, `curl`, HTTP 200; hashes completos en la evidencia):

| Fuente | URL | Datos | Revisado |
|---|---|---|---|
| Royal Berkshire NHS FT, «Pulmonary Rehabilitation Exercise Booklet», marzo de 2025 | `https://www.royalberkshire.nhs.uk/media/m2yl2u1z/pulmonary-rehabilitation-exercises_mar25.pdf` | PDF de 21 páginas, SHA-256 (prefijo) `d2f86ee28d94b80f` | Páginas 1-3, 7-10 y 13 |
| Royal Berkshire NHS FT, «Core exercise programme», mayo de 2025 | `https://royalberkshire.nhs.uk/media/qfljlxzd/physio-core-exercise-programme-matplusgynae.pdf` | PDF de 4 páginas, SHA-256 (prefijo) `92c65bb8377823c9` | Páginas 1 y 2 |
| Royal Papworth Hospital NHS FT, «Pelvic floor exercises for women» | `https://royalpapworth.nhs.uk/download_file/1536/305` | PDF de 2 páginas, SHA-256 (prefijo) `131efa9cf64311be` | Texto completo |
| Royal United Hospitals Bath NHS FT, «Back Exercises» (ANA034) | `https://www.ruh.nhs.uk/patients/patient_information/ANA034_Back_exercises.pdf` | PDF de 9 páginas, SHA-256 (prefijo) `b37d892c03d8dc49` | Páginas 1-3 y 6, fotos de «Knee rolling» |
| Royal United Hospitals Bath NHS FT, «Bed Exercises» | `https://www.ruh.nhs.uk/patients/patient_information/Bed_Exercises.pdf` | PDF de 2 páginas, SHA-256 (prefijo) `d9d7d2ed32fef89f` | Texto y dibujos |
| Royal United Hospitals Bath NHS FT, «Chair Exercises» | `https://www.ruh.nhs.uk/patients/patient_information/chair_exercises.pdf` | PDF de 2 páginas, SHA-256 (prefijo) `24f1722fe1fb97c9` | Texto y dibujos |

- **Ilustraciones de HealthMove** (R7.6): coinciden las 9. En `abrir-pierna-brazo-pared` la mano de la pared queda más alta que en el dibujo de la fuente; no cambia ninguna etiqueta (`brazo_sobre_hombro` ya es `true`).

## 94. puno-extension-codo-sentado

### Identificación
- ID: `puno-extension-codo-sentado`
- Nombre: Puño y codo
- Fuente: Royal United Hospitals Bath NHS FT, «Chair Exercises», primer ejercicio de la p. 1 (F6)
- Población destinataria de la fuente (si la declara): la evidencia no la declara.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con un `true` conservador ya anotado

### Evidencia de la fuente
- Ubicación exacta: F6, primer ejercicio de la p. 1, texto y dibujo (apartado 94).
- Pasos originales relevantes, resumidos con palabras propias: doblar el codo junto a la cintura y cerrar el puño; estirar el codo y abrir la mano todo lo posible; «Repeat x on each side» (repeticiones en blanco). Cabecera: sentado con la espalda apoyada y los pies en el suelo.
- Coincidencias (C1): posición, movimiento, dosis por lado.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente deja las repeticiones en blanco; HealthMove usa «De 5 a 10 veces con cada brazo». Ya está en `adaptaciones`.
- Adaptaciones que deben documentarse: ninguna nueva.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), el codo se dobla al máximo y la mano se cierra a la altura del hombro. I, si la mano pasa del hombro: la evidencia dice que «no consta si la pasa».
- Limitaciones de la verificación: un solo dibujo.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | I (dibujo): la mano llega a la altura del hombro; no consta si la pasa | conservadora | TRUE | CN-1 (P25); nota ya en la forma de R2.4 |
| mano_detras | false | D (dibujo): la mano sube por delante | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): «Repeat x on each side»; series con un brazo y después con el otro | evidencia | FALSE | DG-4 / Q1 (P9) |
| agarre | true | D (texto): «cierra el puño» | evidencia | TRUE | §4: cerrar el puño |
| peso_en_manos | false | D: sentado | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: sentado | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: sentado con la espalda apoyada | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no declara población; no se rellena (R8.1).

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 95. estiramiento-pecho-manos-lumbar

### Identificación
- ID: `estiramiento-pecho-manos-lumbar`
- Nombre: Abrir el pecho con las manos en la espalda
- Fuente: Royal Berkshire NHS FT, «Pulmonary Rehabilitation Exercise Booklet», «Chest stretch», p. 13 (F1)
- Población destinataria de la fuente (si la declara): rehabilitación pulmonar; `especifica_de` actual «enfermedad pulmonar».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: adaptación ya aprobada (Q5, P28); etiquetas coherentes

### Evidencia de la fuente
- Ubicación exacta: F1, «Chest stretch», p. 13, texto y dibujo (apartado 95).
- Pasos originales relevantes, resumidos con palabras propias: «Stand upright»; «Place your hands on your lower back»; juntar los omóplatos con los codos doblados; 15 a 20 segundos.
- Coincidencias (C1): movimiento, manos en la parte baja de la espalda, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la fuente lo describe de pie; HealthMove lo hace sentado. Ya está en `adaptaciones` y aprobado en P28.
- Adaptaciones que deben documentarse: ninguna nueva.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), las dos manos en la parte baja de la espalda, codos doblados hacia atrás. N, si la mano pasa del hombro: la evidencia no lo dice.
- Limitaciones de la verificación: el dibujo es de pie; no hay dibujo de la versión sentada.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: estiramiento suave | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): las manos están en la parte baja de la espalda, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | true | D (texto): «Place your hands on your lower back» | evidencia | TRUE | §4: mano detrás de la espalda |
| ambos_brazos | true | D (texto): las dos manos en la espalda y los codos hacia atrás | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto): «Place your hands»; no se pide cerrar la mano | evidencia | FALSE | R7.4 / Q2 (P10): contacto sin prensión; ver DS-364 |
| peso_en_manos | false | D: sentado | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: sentado | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sacar el pecho y juntar los omóplatos; no se pide inclinar ni arquear | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `sentado`, recurso `silla`, dosis: coherentes.
- `variante_de`: null. La versión de pie (`estiramiento-pecho-manos-lumbar-pie`) apunta a esta; correcto.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «enfermedad pulmonar». La evidencia dice que el folleto es de rehabilitación pulmonar; el nombre es coherente con R8.1, pero la fuente no declara literalmente «enfermedad pulmonar» en la evidencia. Ver DS-365.

### Incidencias
- `agarre: false` con instrucción «Pon las manos»: ver DS-364.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 96. estiramiento-pecho-manos-lumbar-pie

### Identificación
- ID: `estiramiento-pecho-manos-lumbar-pie`
- Nombre: Abrir el pecho con las manos en la espalda de pie
- Fuente: Royal Berkshire NHS FT, «Pulmonary Rehabilitation Exercise Booklet», «Chest stretch», p. 13 (F1)
- Población destinataria de la fuente (si la declara): rehabilitación pulmonar; `especifica_de` actual «enfermedad pulmonar».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel a la fuente; `equilibrio_sin_apoyo` correcto

### Evidencia de la fuente
- Ubicación exacta: F1, «Chest stretch», p. 13, texto y dibujo (apartado 95).
- Pasos originales relevantes, resumidos con palabras propias: «Stand upright»; «Place your hands on your lower back»; juntar los omóplatos; 15 a 20 segundos.
- Coincidencias (C1): posición, movimiento, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), de pie, las dos manos en la parte baja de la espalda. D (texto), no se pide sujetarse a nada.
- Limitaciones de la verificación: un solo dibujo.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | true | D (texto): «Stand upright»; las dos manos están ocupadas en la espalda | evidencia | TRUE | §7, regla 4: con las dos manos ocupadas no hay forma de sujetarse |
| una_pierna | false | D: de pie con los dos pies | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: estiramiento suave | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): las manos están en la parte baja de la espalda | evidencia | FALSE | — |
| mano_detras | true | D (texto): «Place your hands on your lower back» | evidencia | TRUE | §4: mano detrás de la espalda |
| ambos_brazos | true | D (texto): las dos manos en la espalda y los codos hacia atrás | evidencia | TRUE | Q1 (P9) |
| agarre | false | D (texto): «Place your hands»; no se pide cerrar la mano | evidencia | FALSE | R7.4 / Q2 (P10); ver DS-364 |
| peso_en_manos | false | D: de pie; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: de pie con las piernas estiradas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies planos | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): sacar el pecho y juntar los omóplatos; no se pide inclinar ni arquear | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `de_pie`, recursos `[]`, dosis: coherentes.
- `variante_de: estiramiento-pecho-manos-lumbar`: correcto.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «enfermedad pulmonar» (ver DS-365).

### Incidencias
- `agarre: false` con instrucción «Pon las manos»: ver DS-364.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 97. abrir-pierna-brazo-pared

### Identificación
- ID: `abrir-pierna-brazo-pared`
- Nombre: Abrir pierna y brazo hacia el lado
- Fuente: Royal Berkshire NHS FT, «Pulmonary Rehabilitation Exercise Booklet», «Star Jacks», p. 9 (F1)
- Población destinataria de la fuente (si la declara): rehabilitación pulmonar; `especifica_de` actual «enfermedad pulmonar».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con dos `true` conservadores y una diferencia de apoyo opcional/obligatorio

### Evidencia de la fuente
- Ubicación exacta: F1, «Star Jacks», p. 9, texto y dibujo (apartado 97).
- Pasos originales relevantes, resumidos con palabras propias: de pie con los pies al ancho de la cadera; «Hold onto a wall for support if you need to»; deslizar el pie derecho hacia el lado mientras se sube el brazo derecho «up to shoulder height»; volver al centro y repetir con el otro lado; «Timed: Build up to 5 minutes». Apartado «Aerobic exercises»: «You should aim to feel moderately breathless».
- Coincidencias (C1): movimiento, dosis por tiempo.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente hace el apoyo opcional («if you need to»); HealthMove lo hace obligatorio («con una mano apoyada en la pared»). Es una de las ejecuciones que permite la fuente: pasa R3.1 y se documenta como adaptación. Ver DS-366.
- Adaptaciones que deben documentarse: la del apoyo obligatorio.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), una mano en la pared, el otro brazo a la altura del hombro, la pierna del mismo lado separada. I, si el brazo pasa del hombro: la evidencia dice que «no consta que no la pase». D (apartado), el ejercicio está en «Aerobic exercises» y pide «moderately breathless».
- Limitaciones de la verificación: un solo dibujo.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto): «Hold onto a wall for support» | evidencia | FALSE | Se sujeta a la pared |
| una_pierna | true | D (texto y dibujo): el pie se desliza hacia el lado; el peso cae sobre un pie | evidencia | TRUE | §4: peso sobre un solo pie |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D (texto): el pie se desliza, no salta | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D (apartado): «Aerobic exercises», «moderately breathless», hasta 5 minutos | evidencia | TRUE | §4: pensado para subir claramente pulso o respiración |
| brazo_sobre_hombro | true | I (texto): «up to shoulder height»; no consta que no la pase | conservadora | TRUE | CN-1 (P25); nota ya en la forma de R2.4 |
| mano_detras | false | D (texto y dibujo): el brazo sube por el lado | evidencia | FALSE | — |
| ambos_brazos | false | D (texto y dibujo): una mano se apoya en la pared mientras el otro brazo sube | conservadora | TRUE | Q1 (P9): una mano que se apoya mientras el otro brazo trabaja (DS-367) |
| agarre | false | I (texto): «Hold onto a wall»; apoyo sin prensión visible | conservadora | TRUE | Q2 (P10) y §7, regla 4 (DS-364) |
| peso_en_manos | false | D: la mano se apoya en la pared, no carga el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: piernas estiradas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie | evidencia | FALSE | — |
| puntillas_talones | false | D: pies planos | evidencia | FALSE | — |
| inclinacion_tronco | false | D: sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `de_pie`, recurso `pared`, dosis: coherentes.
- Ilustración: la mano de la pared está más alta que en el dibujo de la fuente (evidencia). Mismo movimiento; no induce a otra interpretación. R7.6: se registra, no se invalida.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «enfermedad pulmonar» (ver DS-365).

### Incidencias
- `agarre: false` con instrucción «apoyada en la pared»: ver DS-364.
- `ambos_brazos: false` con una mano apoyada y el otro brazo trabajando: ver DS-367.
- Apoyo opcional en la fuente y obligatorio en HealthMove: ver DS-366.

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente permite apoyarse en la pared solo si hace falta; aquí se apoya una mano siempre.»
- `fuente.consultado`: 2026-10-24.
- `exigencias.esfuerzo_cardio`: `false` → `true` (D: apartado «Aerobic exercises»); `ambos_brazos` y `agarre`: `false` → `true` conservadores, con sus notas.
- Impacto (modo auditoría): sale de `sin_esfuerzo`, `un_brazo` y `cerrar_mano`.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 98. suelo-pelvico-lentas

### Identificación
- ID: `suelo-pelvico-lentas`
- Nombre: Suelo pélvico: contracciones lentas
- Fuente: Royal Papworth Hospital NHS FT, «Pelvic floor exercises for women», «Slow contractions», p. 2 (F3)
- Población destinataria de la fuente (si la declara): mujeres («Pelvic floor exercises for women»).
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una diferencia de población y una de posición

### Evidencia de la fuente
- Ubicación exacta: F3, «Slow contractions», p. 2, texto (apartado 98).
- Pasos originales relevantes, resumidos con palabras propias: apretar todo lo posible, mantener 10 segundos, relajar y descansar 10 segundos; hasta 10 veces; al principio quizá solo 1 o 2 segundos. Posición: cualquier posición; puede ser más fácil «lying on your back with your knees bent up or sitting on the toilet».
- Coincidencias (C1): movimiento, dosis progresiva.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente permite cualquier posición; HealthMove solo tumbado. Es una de las posiciones que permite la fuente: pasa R3.1 y se documenta como adaptación. C3, la fuente es para mujeres; HealthMove no declara población. Ver DS-368.
- Adaptaciones que deben documentarse: la de la posición.
- Hechos, inferencias e incertidumbres: D (texto), contracción del suelo pélvico sin movimiento de brazos ni piernas. N, imágenes de los ejercicios: la evidencia dice que no hay.
- Limitaciones de la verificación: sin imágenes de los ejercicios.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: contracción estática | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: contracción estática | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| agarre | false | D (texto): las manos no intervienen | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): rodillas dobladas, sin que conste que pasen de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide con la posición que sugiere la fuente (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente declara población («for women»); R8.1 permite rellenarlo. Ver DS-368.

### Incidencias
- Población de la fuente no reflejada: ver DS-368.
- Posición: la fuente permite cualquier posición; HealthMove solo tumbado. Ver DS-368.

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente permite hacerlo en cualquier posición; aquí se hace tumbado.»
- `fuente.especifica_de`: «mujeres» (nombre breve, R8.1; ver DS-368).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 99. suelo-pelvico-rapidas

### Identificación
- ID: `suelo-pelvico-rapidas`
- Nombre: Suelo pélvico: contracciones rápidas
- Fuente: Royal Papworth Hospital NHS FT, «Pelvic floor exercises for women», «Fast contractions», p. 2 (F3)
- Población destinataria de la fuente (si la declara): mujeres.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una adaptación ya documentada que la evidencia contradice

### Evidencia de la fuente
- Ubicación exacta: F3, «Fast contractions», p. 2, texto (apartado 98).
- Pasos originales relevantes, resumidos con palabras propias: apretar rápido, mantener un segundo, relajar y descansar un segundo; «Repeat the contraction 10 times».
- Coincidencias (C1): movimiento.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la adaptación actual dice que no se pudo leer completa la dosis de la fuente; la evidencia dice que la dosis se lee completa («Repeat the contraction 10 times»). Ver DS-369.
- Adaptaciones que deben documentarse: ninguna nueva.
- Hechos, inferencias e incertidumbres: D (texto), contracción rápida de un segundo y descanso de un segundo, 10 veces. N, imágenes de los ejercicios.
- Limitaciones de la verificación: sin imágenes de los ejercicios.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: contracción estática | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: contracción estática | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| agarre | false | D (texto): las manos no intervienen | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): rodillas dobladas, sin que conste que pasen de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- `variante_de: suelo-pelvico-lentas`: correcto.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío (ver DS-368).

### Incidencias
- La adaptación actual dice que no se pudo leer la dosis; la evidencia dice que sí se lee. Ver DS-369.

### Propuesta de cambios
- Dosis: «De 5 a 10 veces.» → «10 veces.»; instrucciones 2 y 3: mantener un segundo y descansar un segundo, como la fuente; se retira la adaptación que decía que la dosis no se podía leer (DS-369). Se añade la de la posición, como en 98.
- `fuente.especifica_de`: «mujeres» (ver DS-368).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 100. manos-entrelazadas-arriba-tumbado

### Identificación
- ID: `manos-entrelazadas-arriba-tumbado`
- Nombre: Manos entrelazadas por encima de la cabeza
- Fuente: Royal United Hospitals Bath NHS FT, «Bed Exercises», primer ejercicio de la p. 1 (F5)
- Población destinataria de la fuente (si la declara): la evidencia no la declara; la cabecera dice «These exercises can be done either in lying or sitting up in bed».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una adaptación ya documentada

### Evidencia de la fuente
- Ubicación exacta: F5, primer ejercicio de la p. 1, texto y dibujo (apartado 100).
- Pasos originales relevantes, resumidos con palabras propias: entrelazar las manos con los codos estirados; subirlas por encima de la cabeza «as far above your head as comfortable»; mantener 5 segundos; «Repeat times» (en blanco).
- Coincidencias (C1): posición, movimiento, dosis de mantenimiento.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente deja las repeticiones en blanco; HealthMove usa «De 5 a 10 veces». Ya está en `adaptaciones`.
- Adaptaciones que deben documentarse: ninguna nueva.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), los brazos estirados por encima de la cabeza con las manos juntas. D (texto), «as far above your head as comfortable»: la fuente concede un rango.
- Limitaciones de la verificación: un solo dibujo.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movilidad de hombro | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y dibujo): «above your head» | evidencia | TRUE | — |
| mano_detras | false | D (dibujo): los brazos suben por delante y por encima, no por detrás | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): las manos entrelazadas y los dos brazos suben juntos | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto): «entrelaza las manos» | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: tumbado | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: tumbado con piernas estiradas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- `variante_de: elevacion-brazos-tumbado`: correcto (otra fuente, misma familia).
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no declara población; no se rellena (R8.1).

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 101. circulos-pierna-lado-suelo

### Identificación
- ID: `circulos-pierna-lado-suelo`
- Nombre: Círculos con la pierna, de lado
- Fuente: Royal Berkshire NHS FT, «Core exercise programme», n.º 3 «Side lying hip abduction», versión más difícil, p. 2 (F2)
- Población destinataria de la fuente (si la declara): el programa se presenta «for anyone wanting to improve their general core strength»; no declara un grupo.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una diferencia de apoyo opcional/obligatorio

### Evidencia de la fuente
- Ubicación exacta: F2, n.º 3, versión más difícil, p. 2, texto y fotos (apartado 101).
- Pasos originales relevantes, resumidos con palabras propias: tumbado de lado con la rodilla de abajo doblada; la mano de arriba delante, «if you need extra support»; subir la pierna de arriba y bajarla; versión más difícil: círculos pequeños, 10 en cada sentido, con la rodilla estirada y la cadera quieta.
- Coincidencias (C1): posición, movimiento, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente hace el apoyo de la mano opcional («if you need extra support»); HealthMove lo da por hecho («la mano de delante apoyada»). Es una de las ejecuciones que permite la fuente: pasa R3.1 y se documenta como adaptación. Ver DS-366.
- Adaptaciones que deben documentarse: la del apoyo obligatorio.
- Hechos, inferencias e incertidumbres: D (texto y fotos), tumbado de lado en el suelo, la mano de arriba apoyada delante, la pierna de arriba recta y elevada. N, si la mano se cierra: la evidencia no lo dice.
- Limitaciones de la verificación: las fotos son de la versión base, no de los círculos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: en el suelo | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado de lado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: en el suelo | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: fuerza local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y fotos): la mano de arriba está delante, a la altura del suelo | evidencia | FALSE | — |
| mano_detras | false | D (texto y fotos): la mano está delante | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): solo la mano de arriba se apoya; el otro brazo no interviene | evidencia | FALSE | Q1 (P9): una mano se apoya y el otro brazo no trabaja; ver DS-367 |
| agarre | false | I (texto y fotos): la mano de delante se apoya en el suelo, sin prensión visible | conservadora | TRUE | Q2 (P10) (DS-364) |
| peso_en_manos | false | D: la mano se apoya en el suelo, no carga el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): la rodilla de abajo doblada, sin que conste que pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado de lado | evidencia | FALSE | — |
| puntillas_talones | false | D: en el suelo | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: tumbado de lado | evidencia | FALSE | — |
| rotacion_tronco | false | D: la cadera se mantiene quieta | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `suelo`, recursos `[]`, dosis: coherentes.
- `variante_de: elevar-pierna-lado-tumbado`: correcto.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente no declara un grupo; no se rellena (R8.1).

### Incidencias
- `agarre: false` con instrucción «la mano de delante apoyada»: ver DS-364.
- `ambos_brazos: false` con una mano apoyada: ver DS-367.
- Apoyo opcional en la fuente y obligatorio en HealthMove: ver DS-366.

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente permite apoyar la mano de delante solo si hace falta; aquí se apoya siempre.»
- `fuente.consultado`: 2026-10-24.
- `exigencias.agarre`: `false` → `true` conservador, con su nota. Impacto (modo auditoría): sale de `cerrar_mano`.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 102. rodillas-lado-lado-suelo

### Identificación
- ID: `rodillas-lado-lado-suelo`
- Nombre: Llevar las rodillas de lado a lado en el suelo
- Fuente: Royal United Hospitals Bath NHS FT, «Back exercises (ANA034)», «Knee rolling», p. 3 (F4)
- Población destinataria de la fuente (si la declara): clínica del dolor, tras una infiltración en la espalda; `especifica_de` actual «dolor de espalda».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una diferencia de instrucción (brazos en cruz) y dos `true` conservadores

### Evidencia de la fuente
- Ubicación exacta: F4, «Knee rolling», p. 3, texto y fotos (apartado 102).
- Pasos originales relevantes, resumidos con palabras propias: tumbado boca arriba con las rodillas dobladas y los pies «on the floor»; hombros relajados y apoyados «on the floor/bed»; dejar caer las rodillas de lado a lado; «Repeat 5-10 times both ways».
- Coincidencias (C1): posición, movimiento, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, HealthMove dice «los brazos en cruz», que la fuente no dice ni muestra (las fotos los tienen junto al cuerpo). C3, la fuente admite suelo o cama; HealthMove, suelo. Ver DS-370.
- Adaptaciones que deben documentarse: la de los brazos (si se mantiene «en cruz») o la corrección hacia la fuente.
- Hechos, inferencias e incertidumbres: D (texto y fotos), las rodillas caen hacia un lado, los brazos junto al cuerpo con las manos sobre la camilla. D (texto), la fuente admite suelo o cama.
- Limitaciones de la verificación: las fotos son de una camilla, no de una colchoneta.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: en el suelo | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: en el suelo | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movilidad | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (fotos de la fuente e instrucción corregida): los brazos reposan junto al cuerpo | evidencia | FALSE | Se retira «en cruz», que la fuente no tiene (DS-370) |
| mano_detras | false | D (texto y fotos): los brazos están junto al cuerpo o en cruz, no detrás | evidencia | FALSE | — |
| ambos_brazos | true | D (fotos): los brazos reposan sobre la camilla | evidencia | FALSE | DG-4: reposo (DS-370) |
| agarre | false | D (fotos): las manos están sobre la camilla, abiertas | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y fotos): rodillas dobladas, sin que conste que pasen de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado | evidencia | FALSE | — |
| puntillas_talones | false | D: en el suelo | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en el suelo | evidencia | FALSE | — |
| rotacion_tronco | true | D (texto): las rodillas caen de lado a lado con los hombros apoyados | evidencia | TRUE | §4: girar los hombros respecto a la cadera; nota actual lo justifica |

### Otros campos
- Fase `calma`, posición `suelo`, recursos `[]`, dosis: coherentes.
- `variante_de: rotacion-rodillas-tumbado`: correcto.
- Ilustración: coincide con la fuente; no con la instrucción actual (evidencia). R7.7: la ilustración no induce a otra interpretación, pero la instrucción sí se aparta de la fuente. Ver DS-370.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «dolor de espalda». La fuente declara «clínica del dolor, tras una infiltración en la espalda»; el nombre actual es coherente con R8.1, pero la fuente es más específica. Ver DS-365.

### Incidencias
- Instrucción «los brazos en cruz» no respaldada por la fuente: ver DS-370.
- Posición: la fuente admite suelo o cama; HealthMove solo suelo. Ver DS-370.

### Propuesta de cambios
- Instrucción 1: «los brazos en cruz» → «los brazos junto al cuerpo» (aclaración hacia la fuente; DS-370).
- `exigencias.brazo_sobre_hombro` y `exigencias.ambos_brazos`: `true` → `false` (D); las notas `[conservadora]` se sustituyen. Impacto (modo auditoría): entra en `brazo_arriba` y `un_brazo`.
- `adaptaciones`: añadir «La fuente permite hacerlo en la cama o en el suelo; aquí se hace en el suelo.»
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## Revisión de DeepSeek

**Consulta C14** (`deepseek/ejecuciones/20261024T033711Z-fase-13-lote13`, completa en un bloque con «FIN DEL BORRADOR»; 0,037 USD como mucho). Análisis: `deepseek/analisis-claude/fase-13-lote13.md`.

**Aceptado:** `esfuerzo_cardio` de Star Jacks (D: apartado aeróbico); DS-364 en los dos apoyos en pared o suelo (97 y 101); DS-366 (apoyos opcionales hechos obligatorios, como adaptación); DS-367 en 97; DS-368 («mujeres» y la posición del suelo pélvico); DS-369 (la dosis de las rápidas se lee completa); DS-370 (se retira «en cruz»).

**Corregido por Claude:**
- Numeración: 1-9 → 94-102. En 97, la «etiqueta actual» de `esfuerzo_cardio` era `false`, no `true`.
- 97 y 101: el borrador dejaba `agarre` y `ambos_brazos` en `false` mientras sus propios DS-364 y DS-367 pedían `true`; se aplican los DS.
- 95 y 96: DS-364 **no** se aplica. Las manos en la propia espalda son reposo, no apoyo en una superficie (precedente de `marcha-sentado-manos-cadera`, lote 6).
- 99: se aplica la dosis de la fuente (10, con un segundo de mantener y uno de descanso) en lugar de la adaptación «5 a 10».
- 102: con la instrucción corregida, los brazos reposan: `brazo_sobre_hombro` y `ambos_brazos` pasan a `false` con D (el borrador los dejaba conservadores).
- DS-365, rechazado: «Pulmonary Rehabilitation Exercise Booklet» y «Pain Clinic · Back Exercises» declaran la población en el título.

## Resumen del lote

- **9 ejercicios auditados por primera vez con el protocolo 1.0.** Los 9 quedan LISTOS PARA APROBACIÓN DOCUMENTAL, con los cambios aplicados.
- **Cambios de etiquetas:**
  - `abrir-pierna-brazo-pared`: `esfuerzo_cardio` (D), `ambos_brazos` y `agarre` (conservadores) → `true`;
  - `circulos-pierna-lado-suelo`: `agarre` → `true` conservador;
  - `rodillas-lado-lado-suelo`: `brazo_sobre_hombro` y `ambos_brazos` → `false` (D).
- **Adaptaciones nuevas para aprobar una a una (Q5):** 97 y 101 (apoyo siempre), 98 y 99 (tumbado), 102 (suelo).
- **Nombre nuevo en `especifica_de`:** «mujeres» (suelo pélvico).
