# Borrador de auditoría · fase-25-lote25 (consulta C26)

> **Nota de alcance.** Audito los 11 ejercicios de la evidencia (205 a 215) con el protocolo 1.0, la especificación y el registro. `abdomen-sentado` y `extension-lumbar-antebrazos` solo se usan como contexto. No emito juicios clínicos. Las citas entre «» son literales de la evidencia de Claude o del catálogo; no he abierto las fuentes originales.

---

## 205. abrazar-rodilla-sentado

### Identificación
- ID: `abrazar-rodilla-sentado`
- Nombre: Abrazar la rodilla sentado
- Fuente: British Heart Foundation, «Chair exercises: 10-minute mobility workout for older people», «8. Knee hug» (F1, apartado 205)
- Población destinataria de la fuente (si la declara): «para personas mayores y quien tenga dificultad para estar de pie o caminar» (D, datos comunes de F1). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en `especifica_de` (la fuente declara población y el campo está vacío).

### Evidencia de la fuente
- Ubicación exacta: F1, «8. Knee hug» (apartado 205).
- Pasos originales relevantes, resumidos con palabras propias: sentado con los pies al ancho de la cadera; sujetar una pierna por debajo del muslo; acercar la rodilla despacio hasta donde sea cómodo, con la espalda recta; bajar el pie; 8 a 10 veces con cada pierna. Progresión: sujetar la pierna por la espinilla.
- Coincidencias (C1): sentado, sujetar la pierna por debajo del muslo, acercar la rodilla, bajar el pie, cambio de pierna, 8 a 10 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, `especifica_de` vacío y la fuente declara población (ver DS-459). C2, ninguna.
- Hechos, inferencias e incertidumbres: D (texto), sentado, sujetar la pierna por debajo del muslo, acercar la rodilla. I (texto), «hold 1 leg under the thigh» no dice con cuántas manos. N (imagen), vídeo.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con una sola mano; la instrucción de HealthMove («Sujeta una pierna») tampoco lo fija.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): la mano sujeta la pierna por debajo del muslo, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto): la mano va por debajo del muslo, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | false | I (texto): «hold 1 leg under the thigh» no dice con cuántas manos; la instrucción de HealthMove tampoco | conservadora | TRUE | R2.1: ante la duda, `true` conservador con nota (ver DS-460) |
| agarre | true | D (texto): «hold 1 leg under the thigh»; la mano sujeta la pierna | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | true | D (texto): la rodilla se acerca al tronco hasta donde sea cómodo | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): «con la espalda recta» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis «De 8 a 10 veces con cada pierna»: coherentes con F1.
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente declara población (D); ver DS-459.
- `notas_etiquetado` actual: vacío. Falta la nota `[conservadora]` de `ambos_brazos` (DS-460).

### Incidencias
- `especifica_de` vacío con población declarada (DS-459).
- `ambos_brazos: false` con evidencia I sobre el número de manos (DS-460).

### Propuesta de cambios
- `exigencias.ambos_brazos`: `false` → `true` conservador (R2.1; ver DS-460).
- `notas_etiquetado`: añadir la nota `[conservadora]` de `ambos_brazos` en la forma de R2.4 (DS-460).
- `fuente.especifica_de`: «personas mayores» (R8.1; ver DS-459).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos (y resuelto DS-459).

---

## 206. circulos-cadera-sentado

### Identificación
- ID: `circulos-cadera-sentado`
- Nombre: Círculos con la rodilla levantada
- Fuente: British Heart Foundation, «Chair exercises: 10-minute mobility workout for older people», «9. Hip circles» (F1, apartado 206)
- Población destinataria de la fuente (si la declara): «para personas mayores y quien tenga dificultad para estar de pie o caminar» (D, datos comunes de F1). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en `especifica_de`.

### Evidencia de la fuente
- Ubicación exacta: F1, «9. Hip circles» (apartado 206).
- Pasos originales relevantes, resumidos con palabras propias: sentado con los pies al ancho de la cadera; levantar una pierna todo lo que sea cómodo; con la rodilla doblada, hacer círculos pequeños 10 a 12 veces; con la otra. Progresión: la pierna estirada o círculos más grandes.
- Coincidencias (C1): sentado, levantar una pierna con la rodilla doblada, círculos pequeños, 10 a 12 veces, cambio de pierna.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, `especifica_de` vacío (ver DS-459). C2, ninguna.
- Hechos, inferencias e incertidumbres: D (texto), sentado, levantar una pierna, círculos con la rodilla doblada. N (imagen), vídeo.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con una sola mano; el ejercicio no usa las manos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): las manos no se usan | evidencia | FALSE | — |
| mano_detras | false | D (texto): las manos no se usan | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): las manos no se usan | evidencia | FALSE | — |
| agarre | false | D (texto): las manos no se usan | evidencia | FALSE | — |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): la rodilla se dobla, sin que conste que pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | true | D (texto): «levanta una pierna todo lo que sea cómodo»; el muslo se acerca al tronco | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recurso `silla`, dosis «De 10 a 12 círculos con cada pierna»: coherentes con F1.
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente declara población (D); ver DS-459.
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- `especifica_de` vacío con población declarada (DS-459).

### Propuesta de cambios
- `fuente.especifica_de`: «personas mayores» (R8.1; ver DS-459).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos (y resuelto DS-459).

---

## 207. marcha-circulos-codos-sentado

### Identificación
- ID: `marcha-circulos-codos-sentado`
- Nombre: Marchar con círculos de codos
- Fuente: British Heart Foundation, «Warm-up exercises», ronda 4, «1. March with elbow circles» (F2, apartado 207)
- Población destinataria de la fuente (si la declara): no declara un grupo (D, datos comunes de F2). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la posición (la fuente permite sentado o de pie; HealthMove usa sentado).

### Evidencia de la fuente
- Ubicación exacta: F2, ronda 4, «1. March with elbow circles» (apartado 207).
- Pasos originales relevantes, resumidos con palabras propias: las manos sobre los hombros mientras se ruedan hacia atrás y se mueven los codos en círculo, levantando las piernas más si se puede; 16 a 20 veces con cada pierna. Sentado o de pie.
- Coincidencias (C1): sentado, manos sobre los hombros, círculos de codos hacia atrás, levantar las piernas por turnos, 16 a 20 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la fuente permite sentado o de pie; HealthMove usa sentado (no documentado en `adaptaciones`). C3, ninguna.
- Hechos, inferencias e incertidumbres: D (texto), manos sobre los hombros, círculos de codos, levantar las piernas. I (texto), con las manos en los hombros, los codos dibujan círculos y pueden pasar de la altura del hombro. N (imagen), vídeo.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con un solo brazo; HealthMove lo hace con los dos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | I (texto): los codos dibujan círculos y pueden pasar de la altura del hombro | conservadora | TRUE | R2.1: ante la duda, `true` conservador con nota (ya anotada) |
| mano_detras | false | D (texto): las manos están sobre los hombros, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): las dos manos sobre los hombros y los dos codos en círculo | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto): las manos se apoyan sobre los hombros, sin prensión ni objeto | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | true | D (texto): «levantando las piernas más si se puede»; el muslo se acerca al tronco | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis «De 16 a 20 veces con cada pierna»: coherentes con F2.
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente no declara un grupo (D); no propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: «[conservadora] brazo_sobre_hombro: los codos pueden pasar la altura del hombro en el círculo (CN-1, P25). Se cerraría con: evidencia de la fuente de la altura de los codos.» Es correcta como nota conservadora. No propongo cambiarla.

### Incidencias
- La posición sentada no consta en `adaptaciones` (C2 no documentado). Ver DS-461.

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente permite hacerlo sentado o de pie; aquí se hace sentado.» (C2; ver DS-461).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 208. rodilla-mano-contraria-sentado

### Identificación
- ID: `rodilla-mano-contraria-sentado`
- Nombre: Rodilla arriba y toque con la mano contraria
- Fuente: British Heart Foundation, «Warm-up exercises», ronda 2, «4. Knee raises with hand taps» (F2, apartado 208)
- Población destinataria de la fuente (si la declara): no declara un grupo (D, datos comunes de F2). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la posición (la fuente permite sentado o de pie; HealthMove usa sentado).

### Evidencia de la fuente
- Ubicación exacta: F2, ronda 2, «4. Knee raises with hand taps» (apartado 208).
- Pasos originales relevantes, resumidos con palabras propias: al levantar la rodilla derecha, tocar la parte de arriba del muslo con la mano izquierda; bajar y llevar la mano a un lado; con la otra; 16 a 20 veces por lado. Sentado o de pie.
- Coincidencias (C1): sentado, levantar una rodilla, tocarla con la mano contraria, alternar, 16 a 20 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la fuente permite sentado o de pie; HealthMove usa sentado (no documentado en `adaptaciones`). C3, ninguna.
- Hechos, inferencias e incertidumbres: D (texto), levantar la rodilla y tocarla con la mano contraria. I (texto), la mano cruza al muslo contrario y puede girar algo el tronco. N (imagen), vídeo.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con un solo brazo; HealthMove lo hace con los dos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): la mano toca el muslo, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto): la mano va al muslo, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): las dos manos se alternan sin pausa | evidencia | TRUE | Q1 (P9): alternancia continua de los dos brazos |
| agarre | false | D (texto): la mano toca el muslo, sin prensión ni objeto | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | true | D (texto): «al levantar la rodilla»; el muslo se acerca al tronco | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | true | I (texto): la mano cruza al muslo contrario y puede girar algo el tronco | conservadora | TRUE | R2.1: ante la duda, `true` conservador con nota (ver DS-462) |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis «De 16 a 20 veces por lado»: coherentes con F2.
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente no declara un grupo (D); no propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: «[conservadora] ambos_brazos: brazos alternos sin pausa (Q1). Se cerraría con: fuente con un brazo.» Es correcta como nota conservadora. Falta la nota `[conservadora]` de `rotacion_tronco` (DS-462).

### Incidencias
- La posición sentada no consta en `adaptaciones` (C2 no documentado). Ver DS-461.
- `rotacion_tronco: true` sin nota `[conservadora]` (DS-462).

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente permite hacerlo sentado o de pie; aquí se hace sentado.» (C2; ver DS-461).
- `notas_etiquetado`: añadir la nota `[conservadora]` de `rotacion_tronco` en la forma de R2.4 (DS-462).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 209. talones-flexion-codo-sentado

### Identificación
- ID: `talones-flexion-codo-sentado`
- Nombre: Talones y codos alternos
- Fuente: British Heart Foundation, «Warm-up exercises», ronda 2, «2. Foot pedals with alternating bicep curls» (F2, apartado 209)
- Población destinataria de la fuente (si la declara): no declara un grupo (D, datos comunes de F2). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la posición (la fuente permite sentado o de pie; HealthMove usa sentado).

### Evidencia de la fuente
- Ubicación exacta: F2, ronda 2, «2. Foot pedals with alternating bicep curls» (apartado 209).
- Pasos originales relevantes, resumidos con palabras propias: al levantar el talón derecho, doblar el codo izquierdo llevando la mano hacia el hombro; bajar los dos; con el otro lado; 16 a 20 veces por lado. Sentado o de pie.
- Coincidencias (C1): sentado, levantar un talón, doblar el codo contrario, alternar, 16 a 20 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la fuente permite sentado o de pie; HealthMove usa sentado (no documentado en `adaptaciones`). C3, ninguna.
- Hechos, inferencias e incertidumbres: D (texto), levantar el talón y doblar el codo contrario. I (texto), la mano llega hacia el hombro (CN-1). N (imagen), vídeo.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con un solo brazo; HealthMove lo hace con los dos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | I (texto): al doblar el codo, la mano puede pasar de la altura del hombro | conservadora | TRUE | R2.1: ante la duda, `true` conservador con nota (ya anotada) |
| mano_detras | false | D (texto): la mano va hacia el hombro, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): los dos brazos se alternan sin pausa | evidencia | TRUE | Q1 (P9): alternancia continua de los dos brazos |
| agarre | false | D (texto): la mano se dobla hacia el hombro, sin prensión ni objeto | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): el talón se levanta, pero el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D (texto): sentado; el talón se levanta, pero el peso no cae sobre la punta | evidencia | FALSE | §4: soportar el peso sobre las puntas o los talones; aquí no |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis «De 16 a 20 veces por lado»: coherentes con F2.
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente no declara un grupo (D); no propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: «[conservadora] ambos_brazos: brazos alternos sin pausa (Q1). Se cerraría con: fuente con un brazo. [conservadora] brazo_sobre_hombro: al doblar el codo, la mano puede pasar de la altura del hombro (CN-1, P25). Se cerraría con: evidencia de la fuente de que la mano no pasa del hombro.» Es correcta como nota conservadora. No propongo cambiarla.

### Incidencias
- La posición sentada no consta en `adaptaciones` (C2 no documentado). Ver DS-461.

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente permite hacerlo sentado o de pie; aquí se hace sentado.» (C2; ver DS-461).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 210. circulos-tobillo-tumbado

### Identificación
- ID: `circulos-tobillo-tumbado`
- Nombre: Círculos con los tobillos en la cama
- Fuente: Cambridge University Hospitals NHS FT, «Exercises for patients before and after a hip injury or operation» (doc. 34324 v5, 16-07-2024), segundo ejercicio (F3, apartado 210)
- Población destinataria de la fuente (si la declara): «antes y después de una lesión u operación de cadera» (D, datos comunes de F3). `especifica_de` actual: «lesión u operación de cadera».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en la posición (la fuente permite tumbado o sentado; HealthMove usa tumbado).

### Evidencia de la fuente
- Ubicación exacta: F3, segundo ejercicio (apartado 210).
- Pasos originales relevantes, resumidos con palabras propias: «Whilst lying or sitting with your back supported, now circle your ankles in each direction»; «Repeat x10». Ejercicio de circulación.
- Coincidencias (C1): tumbado, círculos con los tobillos en cada sentido, 10 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente permite tumbado o sentado; HealthMove usa tumbado (no documentado en `adaptaciones`). C2, ninguna.
- Hechos, inferencias e incertidumbres: D (texto), círculos con los tobillos. D (imagen), detalle de un pie con flechas en círculo. D (población), antes y después de una lesión u operación de cadera.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con una sola mano; el ejercicio no usa las manos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): las manos no se usan | evidencia | FALSE | — |
| mano_detras | false | D (texto): las manos no se usan | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): las manos no se usan | evidencia | FALSE | — |
| agarre | false | D (texto): las manos no se usan | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): las piernas estiradas, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): las piernas estiradas, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `tumbado`, recurso `cama`, dosis «10 veces en cada sentido»: coherentes con F3.
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: **movilidad aislada de la muñeca (giros o círculos), porque ninguna exigencia la cubre**. El ejercicio es movilidad aislada del tobillo, no de la muñeca; no cae en la exclusión literal. Ver DS-463.
- `fuente.especifica_de`: «lesión u operación de cadera». Coincide con R8.1.
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- La posición tumbada no consta en `adaptaciones` (C3 no documentado). Ver DS-461.
- La exclusión de «movilidad aislada de la muñeca» no cubre literalmente la movilidad aislada del tobillo; ver DS-463.

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente permite hacerlo tumbado o sentado; aquí se hace tumbado.» (C3; ver DS-461).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos (y resuelto DS-463).

---

## 211. abdomen-profundo-tumbado

### Identificación
- ID: `abdomen-profundo-tumbado`
- Nombre: Activar el abdomen tumbado
- Fuente: Cambridge University Hospitals NHS FT, «Back mobility exercises» (doc. 22383 v4), «5. Core muscle contraction» (F4, apartado 211)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis (la fuente deja las repeticiones en blanco; HealthMove usa 5 a 10).
- Variante de: `abdomen-sentado` (contexto, no auditado).

### Evidencia de la fuente
- Ubicación exacta: F4, «5. Core muscle contraction» (apartado 211).
- Pasos originales relevantes, resumidos con palabras propias: boca arriba con las piernas dobladas y los pies juntos; tensar suavemente el abdomen llevando la parte baja del vientre hacia arriba y hacia dentro y activando el suelo pélvico; respirar con normalidad; no arquear la espalda; mantener ___ s; ___ veces.
- Coincidencias (C1): boca arriba, piernas dobladas, tensar el abdomen, respirar con normalidad, no arquear la espalda.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis (la fuente deja las repeticiones en blanco; HealthMove usa 5 a 10; ya documentado en `adaptaciones`). C3, ninguna.
- Hechos, inferencias e incertidumbres: D (texto), boca arriba, piernas dobladas, tensar el abdomen. D (dibujo), tumbado, rodillas dobladas, una mano sobre el vientre. I (dibujo), las rodillas en torno a 90°; es la clase de CN-5.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con una sola mano; el ejercicio no usa las manos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): la mano sobre el vientre, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): la mano sobre el vientre, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | false | D (texto y dibujo): una sola mano sobre el vientre; el otro brazo no trabaja | evidencia | FALSE | Q1 (P9): una mano se apoya mientras el otro brazo no trabaja; no hay uso simultáneo ni alternancia |
| agarre | false | D (texto y dibujo): la mano se apoya sobre el vientre, sin prensión ni objeto | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | I (dibujo): las rodillas en torno a 90°; es la clase de CN-5 | conservadora | TRUE | R2.1: ante la duda, `true` conservador con nota (ver DS-464) |
| flexion_amplia_cadera | false | D (dibujo): las caderas dobladas, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): «no arquear la espalda» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `tumbado`, recurso `cama`, dosis «Mantén 5 segundos. De 5 a 10 veces.»: coherentes con la adaptación documentada.
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: vacío. Falta la nota `[conservadora]` de `flexion_profunda_rodilla` (DS-464).

### Incidencias
- `flexion_profunda_rodilla: false` con un dibujo que muestra las rodillas en torno a 90° (clase de CN-5). Ver DS-464.

### Propuesta de cambios
- `exigencias.flexion_profunda_rodilla`: `false` → `true` conservador (R2.1; ver DS-464).
- `notas_etiquetado`: añadir la nota `[conservadora]` de `flexion_profunda_rodilla` en la forma de R2.4 (DS-464).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos (y resuelto DS-464).

---

## 212. extension-lumbar-manos

### Identificación
- ID: `extension-lumbar-manos`
- Nombre: Elevar el pecho con las manos boca abajo
- Fuente: Cambridge University Hospitals NHS FT, «Back mobility exercises» (doc. 22383 v4), «2b. Lumbar spine extension» (F4, apartado 212)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis (la fuente deja las repeticiones en blanco; HealthMove usa 5 a 10).
- Variante de: `extension-lumbar-antebrazos` (contexto, no auditado).

### Evidencia de la fuente
- Ubicación exacta: F4, «2b. Lumbar spine extension» (apartado 212).
- Pasos originales relevantes, resumidos con palabras propias: boca abajo con las dos manos bajo los hombros; estirar los codos y subir la parte de arriba del tronco todo lo posible; la pelvis y las piernas relajadas; ___ veces.
- Coincidencias (C1): boca abajo, manos bajo los hombros, estirar los codos, subir el tronco, pelvis y piernas relajadas.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis (la fuente deja las repeticiones en blanco; HealthMove usa 5 a 10; ya documentado en `adaptaciones`). C3, ninguna.
- Hechos, inferencias e incertidumbres: D (texto), boca abajo, manos bajo los hombros, estirar los codos. D (dibujo), boca abajo, los brazos estirados, el tronco muy elevado y la espalda arqueada.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con una sola mano; HealthMove lo hace con las dos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): los brazos estirados bajo los hombros, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): las manos bajo los hombros, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): las dos manos bajo los hombros y los dos codos se estiran | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto y dibujo): las manos se apoyan en el suelo, sin prensión ni objeto | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | true | D (texto y dibujo): los brazos estirados soportan parte del peso del tronco | evidencia | TRUE | §4: manos o muñecas soportan parte del peso corporal |
| flexion_profunda_rodilla | false | D (texto y dibujo): las piernas relajadas y estiradas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto y dibujo): las piernas estiradas, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | true | D (texto y dibujo): «la espalda arqueada»; el tronco se eleva y la espalda se arquea hacia atrás | evidencia | TRUE | §4: arquear la espalda hacia atrás más allá de una inclinación leve |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `suelo`, recursos: vacío, coherente (no necesita silla ni pared).
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 213. abrir-codos-toalla-suelo

### Identificación
- ID: `abrir-codos-toalla-suelo`
- Nombre: Abrir los codos sobre una toalla enrollada
- Fuente: Cambridge University Hospitals NHS FT, «Thoracic spine exercises» (doc. 21670 v4), n.º 8 (F5, apartado 213)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis (la fuente deja las repeticiones en blanco; HealthMove usa 5 a 10).

### Evidencia de la fuente
- Ubicación exacta: F5, n.º 8 (apartado 213).
- Pasos originales relevantes, resumidos con palabras propias: boca arriba con una toalla enrollada a lo largo de la columna, entre los omóplatos; las manos detrás de la nuca, los codos hacia el techo; tomar aire y separar los codos hacia el suelo; ___ veces.
- Coincidencias (C1): boca arriba, toalla a lo largo de la columna, manos detrás de la nuca, codos hacia el techo, separar los codos hacia el suelo.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis (la fuente deja las repeticiones en blanco; HealthMove usa 5 a 10; ya documentado en `adaptaciones`). C3, ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), tumbado, las manos detrás de la cabeza, los codos que se abren; la toalla bajo la espalda.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con una sola mano; HealthMove lo hace con las dos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y dibujo): los codos hacia el techo y las manos detrás de la cabeza; el codo queda por encima del hombro | evidencia | TRUE | §4: codo o mano por encima del hombro |
| mano_detras | true | D (texto y dibujo): las manos detrás de la nuca | evidencia | TRUE | §4: mano detrás de la cabeza |
| ambos_brazos | true | D (texto): las dos manos detrás de la nuca y los dos codos se abren | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto y dibujo): las manos se apoyan detrás de la nuca, sin prensión ni objeto | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y dibujo): las piernas estiradas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto y dibujo): las piernas estiradas, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `suelo`, recurso `toalla`, dosis «De 5 a 10 veces»: coherentes con la adaptación documentada.
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 214. gluteo-pierna-cruzada-suelo

### Identificación
- ID: `gluteo-pierna-cruzada-suelo`
- Nombre: Estirar el glúteo sentado en el suelo
- Fuente: Cambridge University Hospitals NHS FT, «Stretches for the hip», «4. Piriformis stretch (crossed leg knee hug)» (F6, apartado 214)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis (la fuente no fija tiempos; HealthMove usa la pauta del NIA).

### Evidencia de la fuente
- Ubicación exacta: F6, «4. Piriformis stretch (crossed leg knee hug)» (apartado 214).
- Pasos originales relevantes, resumidos con palabras propias: sentado en el suelo con una pierna estirada y la otra cruzada por encima; llevar la rodilla hacia el hombro contrario hasta notar el estiramiento en el glúteo; mantener ___ s; ___ veces. (El n.º 3, «Gluts stretch (sitting twisted)», es parecido con las dos piernas dobladas y dice «Put your arm around the leg».)
- Coincidencias (C1): sentado en el suelo, una pierna estirada, la otra cruzada por encima, llevar la rodilla hacia el hombro contrario, cambio de pierna.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis (la fuente no fija tiempos; HealthMove usa la pauta del NIA; ya documentado en `adaptaciones`). C3, ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), sentado en el suelo, una pierna estirada, la otra cruzada por encima con la rodilla alta; un brazo abraza la rodilla y la lleva hacia el pecho; la otra mano, junto al cuerpo. D (dibujo), la rodilla cruzada, muy doblada; el muslo cerca del tronco.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con una sola mano; el dibujo muestra un brazo abrazando la rodilla y la otra mano junto al cuerpo.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado en el suelo | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado en el suelo; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado en el suelo | evidencia | FALSE | — |
| impacto | false | D: estiramiento estático | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): el brazo abraza la rodilla, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): el brazo abraza la rodilla, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y dibujo): un brazo abraza la rodilla y la otra mano acompaña; los dos brazos intervienen | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto y dibujo): el brazo abraza la rodilla; la mano sujeta | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: sentado en el suelo; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | true | D (dibujo): la rodilla cruzada, muy doblada | evidencia | TRUE | §4: rodilla más de 90° |
| flexion_amplia_cadera | true | D (texto y dibujo): la rodilla se lleva hacia el hombro contrario; el muslo se acerca al tronco | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: sentado en el suelo | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): «con la espalda recta» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `suelo`, recursos: vacío, coherente (no necesita silla ni pared).
- Ilustración: la evidencia dice que HealthMove lo dibuja sentado en el suelo, una pierna estirada; el cruce y el abrazo apenas se distinguen. La fuente muestra el cruce y el abrazo con claridad. R7.6: la ilustración de HealthMove no introduce un movimiento distinto, pero omite el cruce y el abrazo. Ver DS-465.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: «No hacerlo tras una prótesis de cadera: cruza la pierna. [conservadora] ambos_brazos: no consta si los brazos solo reposan (Q1). Se cerraría con: la fuente o su imagen.» La primera frase es de HealthMove, no de la fuente (la evidencia lo recoge). La nota conservadora de `ambos_brazos` ya no se sostiene: el dibujo muestra el brazo abrazando la rodilla (D). Ver DS-466.

### Incidencias
- La ilustración de HealthMove omite el cruce y el abrazo (DS-465).
- La nota de `ambos_brazos` atribuye a la fuente una duda que el dibujo resuelve (DS-466).

### Propuesta de cambios
- `notas_etiquetado`: sustituir la nota conservadora de `ambos_brazos` por una nota informativa que cite el dibujo (DS-466).
- Ilustración: revisar para que muestre el cruce y el abrazo (R7.6; ver DS-465).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos (y resuelto DS-465).

---

## 215. mariposa-suelo

### Identificación
- ID: `mariposa-suelo`
- Nombre: La mariposa
- Fuente: Cambridge University Hospitals NHS FT, «Stretches for the hip», «7b. Cross leg sit» (F6, apartado 215)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis (la fuente no fija tiempos; HealthMove usa la pauta del NIA).

### Evidencia de la fuente
- Ubicación exacta: F6, «7b. Cross leg sit» (apartado 215).
- Pasos originales relevantes, resumidos con palabras propias: sentado en el suelo con las plantas de los pies juntas; sujetar los pies y empujar hacia abajo con los codos; la espalda recta, sin dejar que la pelvis bascule hacia atrás; ___ s; ___ veces.
- Coincidencias (C1): sentado en el suelo, plantas juntas, sujetar los pies, empujar con los codos, espalda recta.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis (la fuente no fija tiempos; HealthMove usa la pauta del NIA; ya documentado en `adaptaciones`). C3, ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), sentado en el suelo, las plantas juntas, las manos sujetando los pies y los codos sobre las rodillas.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con una sola mano; HealthMove lo hace con las dos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado en el suelo | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado en el suelo; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado en el suelo | evidencia | FALSE | — |
| impacto | false | D: estiramiento estático | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): las manos sujetan los pies y los codos sobre las rodillas, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): las manos sujetan los pies, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y dibujo): las dos manos sujetan los pies y los dos codos empujan | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto y dibujo): las manos sujetan los pies | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: sentado en el suelo; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y dibujo): las rodillas abiertas, sin que conste que pasen de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto y dibujo): las rodillas abiertas, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado en el suelo | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): «la espalda recta» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `suelo`, recursos: vacío, coherente (no necesita silla ni pared).
- Ilustración: la evidencia dice que HealthMove lo dibuja de frente, sentado en el suelo con las rodillas abiertas. Coincide.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: «Arthritis UK avisa de que esta rotación de cadera puede no convenir tras una operación reciente de cadera.» La evidencia recoge que la nota cita a Arthritis UK, no a esta fuente. Es una nota informativa de HealthMove; no propongo cambiarla.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## Hallazgos DS

### DS-459 · `especifica_de` vacío en los dos ejercicios de la BHF «Chair exercises» (205 y 206)
- **Ubicación exacta:** catálogo, `abrazar-rodilla-sentado` y `circulos-cadera-sentado`, campo `fuente.especifica_de`; evidencia, datos comunes de F1.
- **Evidencia:** «**F1 (D):** para personas mayores y quien tenga dificultad para estar de pie o caminar («for older people»; «Exercise is for everyone, including those who have difficulty standing or walking»), sentado.»
- **Explicación:** la fuente declara población (D) y el campo está vacío. R8.1 permite rellenarlo con un nombre breve coherente con los existentes. La evidencia no da un nombre exacto; hay que elegir entre «personas mayores» y una fórmula que incluya la dificultad para estar de pie o caminar.
- **Consecuencia potencial:** la ficha no muestra la aclaración de procedencia (P17) en dos ejercicios que sí la tienen.
- **Nivel de certeza:** alta (la fuente declara población); media en el nombre concreto.
- **Recomendación:** rellenar con «personas mayores» (nombre breve, coherente con R8.1) y anotar en `notas_etiquetado` que la fuente también menciona a quien tiene dificultad para estar de pie o caminar.
- **Prueba o evidencia que permitiría confirmarlo:** decisión del desarrollador sobre el nombre; o una frase de la fuente que fije la población con una sola fórmula.
- **¿Requiere decisión humana?:** sí. Elegir el nombre de `especifica_de` (R8.1) y, si se quiere, si se añade la segunda condición.

### DS-460 · `ambos_brazos: false` en `abrazar-rodilla-sentado` con evidencia I sobre el número de manos
- **Ubicación exacta:** catálogo, `abrazar-rodilla-sentado`, `exigencias.ambos_brazos`; evidencia, apartado 205, «Manos (I)».
- **Evidencia:** «**Manos (I):** «hold 1 leg under the thigh» no dice con cuántas manos.» La instrucción de HealthMove dice «Sujeta una pierna por debajo del muslo».
- **Explicación:** R