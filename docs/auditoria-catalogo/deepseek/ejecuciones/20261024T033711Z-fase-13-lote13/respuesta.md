# Borrador de auditoría · fase-13-lote13 (consulta C14)

> **Alcance y límites.** Audito los 9 ejercicios con el protocolo 1.0 a partir de la evidencia de Claude (`evidencia-lote-13`, apartados 94 a 102) y del catálogo (`catalogo-lote13`). No he abierto las fuentes originales: no afirmo nada sobre ellas que no esté en la evidencia. No emito juicios clínicos ni apruebo ejercicios. `elevar-pierna-lado-tumbado` y `rotacion-rodillas-tumbado` se usan solo como contexto.
>
> **Limitaciones de la verificación (comunes):**
> - La evidencia no incluye el texto literal completo de las fuentes, solo resúmenes y citas breves. Las citas de este borrador son las que aparecen en `evidencia-lote-13`.
> - No he podido comprobar las ilustraciones de HealthMove: la evidencia dice que coinciden, pero no las he visto.
> - No he podido comprobar el estado real de `notas_etiquetado` ni de `adaptaciones` más allá de lo que trae `catalogo-lote13`.
> - La evidencia no dice si las fuentes declaran población en los casos 94, 97, 100 y 101; lo señalo donde afecta.

---

## 1. puno-extension-codo-sentado

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
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 2. estiramiento-pecho-manos-lumbar

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
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos y resuelto DS-364.

---

## 3. estiramiento-pecho-manos-lumbar-pie

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
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos y resuelto DS-364.

---

## 4. abrir-pierna-brazo-pared

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
| esfuerzo_cardio | true | D (apartado): «Aerobic exercises», «moderately breathless», hasta 5 minutos | evidencia | TRUE | §4: pensado para subir claramente pulso o respiración |
| brazo_sobre_hombro | true | I (texto): «up to shoulder height»; no consta que no la pase | conservadora | TRUE | CN-1 (P25); nota ya en la forma de R2.4 |
| mano_detras | false | D (texto y dibujo): el brazo sube por el lado | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): un brazo se apoya y el otro se mueve; la alternancia es por series | evidencia | FALSE | Q1 (P9): series con un brazo y después con el otro; ver DS-367 |
| agarre | false | D (texto): «Hold onto a wall»; la mano se apoya, no se cierra | evidencia | FALSE | R7.4 / Q2 (P10); ver DS-364 |
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

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (DS-364, DS-366, DS-367). Si se resuelven como propongo, LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios.

---

## 5. suelo-pelvico-lentas

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
PENDIENTE DE DECISIÓN (DS-368). Si se resuelve como propongo, LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios.

---

## 6. suelo-pelvico-rapidas

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
- `adaptaciones`: sustituir «No se pudo leer completa la dosis de la fuente; se usa una pauta de 5 a 10. Compruébalo en el PDF.» por «La fuente pide 10 repeticiones; se usa una pauta de 5 a 10.» (o eliminar la adaptación y ajustar la dosis a 10, según decida el desarrollador; ver DS-369).
- `fuente.especifica_de`: «mujeres» (ver DS-368).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (DS-368, DS-369). Si se resuelven como propongo, LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios.

---

## 7. manos-entrelazadas-arriba-tumbado

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
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 8. circulos-pierna-lado-suelo

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
| agarre | false | D (texto): «la mano de arriba delante, en la colchoneta o el suelo»; no se pide cerrar la mano | evidencia | FALSE | R7.4 / Q2 (P10); ver DS-364 |
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

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (DS-364, DS-366, DS-367). Si se resuelven como propongo, LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios.

---

## 9. rodillas-lado-lado-suelo

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
| brazo_sobre_hombro | true | I (texto): «los brazos en cruz»; tumbado, la altura del hombro no se puede comparar y el brazo se separa del tronco | conservadora | TRUE | CN-1 (P25); nota ya en la forma de R2.4. Si se corrige la instrucción a «junto al cuerpo», ver DS-370 |
| mano_detras | false | D (texto y fotos): los brazos están junto al cuerpo o en cruz, no detrás | evidencia | FALSE | — |
| ambos_brazos | true | I (texto): «los brazos en cruz»; no consta si solo reposan | conservadora | TRUE | Q1 (P9); nota ya en la forma de R2.4. Si se corrige la instrucción, ver DS-370 |
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
- `instrucciones`: cambiar «los brazos en cruz» por «los brazos junto al cuerpo, algo separados» (aclaración hacia la fuente; ver DS-370).
- `adaptaciones`: añadir «La fuente permite hacerlo en la cama o en el suelo; aquí se hace en el suelo.»
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (DS-370). Si se resuelve como propongo, LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios.

---

## Hallazgos

### DS-364 · `agarre: false` con instrucciones que dicen «apoya las manos» o «la mano de delante apoyada»
- **Ubicación exacta:** `estiramiento-pecho-manos-lumbar` (instrucción 2), `estiramiento-pecho-manos-lumbar-pie` (instrucción 2), `abrir-pierna-brazo-pared` (instrucción 1), `circulos-pierna-lado-suelo` (instrucción 1). Evidencia: apartados 95, 97 y 101.
- **Evidencia:** «Place your hands on your lower back» (95); «Hold onto a wall for support if you need to» (97); «la mano de arriba delante, en la colchoneta o el suelo, "if you need extra support"» (101).
- **Explicación:** Q2 (P10) resuelta dice que el contacto o el apoyo sin evidencia de prensión no demuestra un agarre (R7.4), pero se marca `agarre: true` por el criterio conservador (R2.1), con su nota `[conservadora]`. En estos cuatro ejercicios la etiqueta actual es `false` y no hay D de que la mano no se cierre. La instrucción de HealthMove usa el verbo de la fuente («apoya», «pon»), como pide P10, pero eso no basta para un `false` (R2.2).
- **Consecuencia potencial:** cuatro ejercicios con `agarre: false` sin D; el filtro `cerrar_mano` los ofrece a perfiles a los que quizá no debería. Incoherencia con los 9 casos de P10.
- **Nivel de certeza:** alta.
- **Recomendación:** proponer `agarre: true` conservador con nota `[conservadora]` en los cuatro, o justificar con D por qué no aplica Q2. No lo aplico.
- **Prueba o evidencia que permitiría confirmarlo:** revisión de la instrucción de HealthMove y de la fuente por el desarrollador; si se confirma que la palma abierta es la ejecución, Q2 ya prevé el `true` conservador.
- **¿Requiere decisión humana?:** sí. Confirmar si Q2 se aplica a estos cuatro o si hay una razón documentada para el `false`.

### DS-365 · `fuente.especifica_de` con nombres que la evidencia no respalda literalmente
- **Ubicación exacta:** `estiramiento-pecho-manos-lumbar` y `-pie` (`especifica_de: "enfermedad pulmonar"`); `rodillas-lado-lado-suelo` (`especifica_de: "dolor de espalda"`). Evidencia: apartados 95 y 102.
- **Evidencia:** «Población (D): rehabilitación pulmonar (el folleto es de un programa de rehabilitación pulmonar; `especifica_de` actual: "enfermedad pulmonar")» (95); «Población (D): clínica del dolor, tras una infiltración en la espalda. `especifica_de` actual: "dolor de espalda"» (102).
- **Explicación:** R8.1 pide el nombre breve de la población que la fuente declara. La evidencia describe el contexto (rehabilitación pulmonar; clínica del dolor tras infiltración), pero no cita una frase de la fuente que diga «enfermedad pulmonar» o «dolor de espalda». El nombre actual puede ser una inferencia del auditor anterior, no una declaración de la fuente.
- **Consecuencia potencial:** `especifica_de` con una población inferida; R8.1 lo prohíbe. La interfaz lo muestra bajo «Material pensado para: …» (P17).
- **Nivel de certeza:** media.
- **Recomendación:** que Claude confirme en la fuente si hay una frase que declare la población; si no, dejar `especifica_de` vacío o usar un nombre que la fuente respalde literalmente.
- **Prueba o evidencia que permitiría confirmarlo:** cita literal de la fuente con la población declarada.
- **¿Requiere decisión humana?:** sí. Confirmar el nombre o vaciar el campo.

### DS-366 · Apoyo opcional en la fuente y obligatorio en HealthMove
- **Ubicación exacta:** `abrir-pierna-brazo-pared` (instrucción 1) y `circulos-pierna-lado-suelo` (instrucción 1). Evidencia: apartados 97 y 101.
- **Evidencia:** «"Hold onto a wall for support if you need to"» (97); «la mano de arriba delante, en la colchoneta o el suelo, "if you need extra support"» (101).
- **Explicación:** la fuente concede un rango (apoyo opcional); HealthMove lo hace obligatorio. R3.1 permite una ejecución dentro del rango de la fuente, pero la instrucción de HealthMove debe presentarse como una de las que permite la fuente, y la diferencia debe documentarse como adaptación (R3.2, Q5). Hoy `adaptaciones` está vacío en los dos.
- **Consecuencia potencial:** una diferencia con la fuente sin documentar (C3); el usuario no ve que la fuente lo hace opcional.
- **Nivel de certeza:** alta.
- **Recomendación:** añadir la adaptación con el texto propuesto en cada informe. No lo aplico.
- **Prueba o evidencia que permitiría confirmarlo:** la cita de la fuente ya está en la evidencia; basta con aprobar la adaptación (Q5, una a una).
- **¿Requiere decisión humana?:** sí. Aprobar la adaptación una a una (Q5).

### DS-367 · `ambos_brazos: false` con una mano apoyada y el otro brazo trabajando
- **Ubicación exacta:** `abrir-pierna-brazo-pared` (instrucción 1) y `circulos-pierna-lado-suelo` (instrucción 1). Evidencia: apartados 97 y 101.
- **Evidencia:** «una mano apoyada en la pared, el otro brazo extendido hacia el lado» (97); «la mano de arriba apoyada delante, la pierna de arriba recta y elevada» (101).
- **Explicación:** Q1 (P9) resuelta dice que cuentan como `ambos_brazos` «el uso simultáneo de los dos brazos (también una mano que se apoya mientras el otro brazo trabaja)». En `abrir-pierna-brazo-pared` una mano se apoya y el otro brazo se mueve: encaja en la definición. En `circulos-pierna-lado-suelo` la mano se apoya y el otro brazo no trabaja (la pierna es la que se mueve): no encaja. La etiqueta actual es `false` en los dos.
- **Consecuencia potencial:** `abrir-pierna-brazo-pared` con `ambos_brazos: false` sin D; el filtro `un_brazo` lo ofrece a perfiles a los que quizá no debería. `circulos-pierna-lado-suelo` parece correcto, pero conviene confirmarlo.
- **Nivel de certeza:** media (alta para `abrir-pierna-brazo-pared`; baja para `circulos-pierna-lado-suelo`).
- **Recomendación:** proponer `ambos_brazos: true` conservador en `abrir-pierna-brazo-pared`, con nota `[conservadora]`; confirmar que `circulos-pierna-lado-suelo` no entra en Q1.
- **Prueba o evidencia que permitiría confirmarlo:** revisión de la instrucción de HealthMove y de la fuente por el desarrollador.
- **¿Requiere decisión humana?:** sí. Confirmar la aplicación de Q1 a estos dos casos.

### DS-368 · Población de la fuente no reflejada y posición adaptada en los ejercicios de suelo pélvico
- **Ubicación exacta:** `suelo-pelvico-lentas` y `suelo-pelvico-rapidas`. Evidencia: apartado 98.
- **Evidencia:** «Población (D): el título es "Pelvic floor exercises for women"»; «Posición (D): los ejercicios se pueden hacer en cualquier posición; puede ser más fácil empezar "lying on your back with your knees bent up or sitting on the toilet"».
- **Explicación:** la fuente declara población («for women») y `especifica_de` está vacío. R8.1 permite rellenarlo. Además, la fuente permite cualquier posición y HealthMove solo tumbado: es una de las posiciones que permite la fuente (pasa R3.1) y debe documentarse como adaptación (R3.2, Q5). Hoy `adaptaciones` está vacío en `suelo-pelvico-lentas`.
- **Consecuencia potencial:** población no reflejada; diferencia de posición sin documentar (C3).
- **Nivel de certeza:** alta.
- **Recomendación:** proponer `especifica_de: "mujeres"` (nombre breve, R8.1) y la adaptación de la posición en `suelo-pelvico-lentas`. No lo aplico.
- **Prueba o evidencia que permitiría confirmarlo:** la cita de la fuente ya está en la evidencia; basta con aprobar el nombre y la adaptación.
- **¿Requiere decisión humana?:** sí. Aprobar el nombre de `especifica_de` y la adaptación (Q5).

### DS-369 · Adaptación de `suelo-pelvico-rapidas` que la evidencia contradice
- **Ubicación exacta:** `suelo-pelvico-rapidas`, campo `adaptaciones`. Evidencia: apartado 98.
- **Evidencia:** «Rápidas (D): apretar rápido, mantener **un segundo**, relajar y **descansar un segundo**; **"Repeat the contraction 10 times"**. (La dosis se lee completa: la adaptación actual de `suelo-pelvico-rapidas` dice que no se pudo leer.)»
- **Explicación:** la adaptación actual dice que no se pudo leer la dosis de la fuente; la evidencia dice que sí se lee. La adaptación es falsa y la dosis de HealthMove («De 5 a 10 veces») no coincide con la fuente («10 times»).
- **Consecuencia potencial:** el usuario ve una adaptación que atribuye a la fuente una laguna que no existe; la dosis no es la de la fuente.
- **Nivel de certeza:** alta.
- **Recomendación:** sustituir la adaptación por una que refleje la fuente, o ajustar la dosis a 10 y eliminar la adaptación. No lo aplico.
- **Prueba o evidencia que permitiría confirmarlo:** la cita de la fuente ya está en la evidencia.
- **¿Requiere decisión humana?:** sí. Elegir entre mantener la pauta de 5 a 10 (con adaptación) o ajustar a 10 (sin adaptación).

### DS-370 · `rodillas-lado-lado-suelo`: instrucción «los brazos en cruz» no respaldada por la fuente
- **Ubicación exacta:** `rodillas-lado-lado-suelo`, instrucción 1. Evidencia: apartado 102.
- **Evidencia:** «HealthMove dice "los brazos en cruz", que la fuente no dice ni muestra. La fuente admite suelo o cama (F4 dice "floor/bed"); HealthMove, suelo.» «Fotos (D): … los brazos estirados junto al cuerpo, algo separados, con las manos sobre la camilla. **No están en cruz.**»
- **Explicación:** la instrucción de HealthMove introduce una postura de brazos que la fuente no describe ni muestra. R4.2: si la instrucción de HealthMove dice algo distinto de la fuente, es un C3. Además, la posición de la fuente admite suelo o cama; HealthMove solo suelo, lo que es una de las posiciones que permite la fuente (pasa R3.1) y debe documentarse como adaptación.
- **Consecuencia potencial:** instrucción que se aparta de la fuente sin documentar; las etiquetas `brazo_sobre_hombro` y `ambos_brazos` (hoy `true` conservador) dependen de esa instrucción. Si se corrige a «junto al cuerpo», habría que reevaluar las dos.
- **Nivel de certeza:** alta.
- **Recomendación:** corregir la instrucción hacia la fuente («los brazos junto al cuerpo, algo separados») y reevaluar `brazo_sobre_hombro` y `ambos_brazos`; documentar la adaptación de la posición. No lo aplico.
- **Prueba o evidencia que permitiría confirmarlo:** la cita de la fuente ya está en la evidencia; la corrección de la instrucción es una aclaración hacia la fuente.
- **¿Requiere decisión humana?:** sí. Aprobar la corrección de la instrucción y la reevaluación de las dos etiquetas.

---

## Resumen del borrador

- **9 ejercicios auditados** con el protocolo 1.0 a partir de la evidencia de Claude.
- **Resultados propuestos:**
  - `puno-extension-codo-sentado` y `manos-entrelazadas-arriba-tumbado`: LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.
  - `estiramiento-pecho-manos-lumbar` y `-pie`: LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios y resuelto DS-364.
  - `abrir-pierna-brazo-pared`, `circulos-pierna-lado-suelo` y `rodillas-lado-lado-suelo`: PENDIENTE DE DECISIÓN (DS-364, DS-366, DS-367, DS-370).
  - `suelo-pelvico-lentas` y `suelo-pelvico-rapidas`: PENDIENTE DE DECISIÓN (DS-368, DS-369).
- **Cambios de etiquetas propuestos:** ninguno confirmado; los cuatro `agarre: false` y el `ambos_brazos: false` de `abrir-pierna-brazo-pared` quedan como hallazgos para que el desarrollador decida.
- **Adaptaciones nuevas para aprobar una a una (Q5):** `abrir-pierna-brazo-pared` (apoyo obligatorio), `circulos-pierna-lado-suelo` (apoyo obligatorio), `suelo-pelvico-lentas` (posición), `rodillas-lado-lado-suelo` (posición).
- **Nombres nuevos en `especifica_de`:** «mujeres» en los dos de suelo pélvico (DS-368); revisar «enfermedad pulmonar» y «dolor de espalda» (DS-365).
- **Hallazgos:** DS-364 a DS-370 (7).

FIN DEL BORRADOR