# Lote 21 · Primera auditoría con el protocolo 1.0: Vivifrail, HSE, CSP y Parkinson's UK (8 ejercicios)

- Fecha: 2026-10-24
- Versión del protocolo: 1.0
- Catálogo: v0.3.0 (actualizado 2026-10-14), rama `desarrollo-v1`, commit `e87220a`
- Identificador git del catálogo: no fiable, el catálogo tiene cambios sin confirmar (son los cambios de este lote, aplicados antes de cerrarlo).
- Huellas literales (tras aplicar los cambios): `banda-aperturas-diagonal-sentado` `a0fd67a60ec20b9a`, `escurrir-toalla-sentado` `6fb2ce3dd83b1ce8`, `estiramiento-hombro-cruzado` `f7b8bb76d00257bd`, `estiramiento-hombro-cruzado-pie` `a30409b933849f1a`, `puntillas-talones-apoyo` `0648f083008fed38`, `elevacion-lateral-brazos-sentado` `b7b7ea7e6cf5dba8`, `elevar-puntas-pies-apoyo` `68368dae99056fbd`, `elevar-piernas-borde-silla` `39a69870bb200c3f`.
- **Cómo se hizo (P29):** evidencia de Claude (`evidencia/lote-21.md`); borrador de DeepSeek (consulta C22, en dos bloques); verificación de Claude. **Los apartados son el borrador de DeepSeek con las correcciones de Claude** listadas en «Revisión de DeepSeek». La columna «Etiqueta actual» conserva el valor de antes de aplicar.
- **Fuentes abiertas** (2026-10-24; detalle y hashes en la evidencia):

| Fuente | URL | Datos | Revisado |
|---|---|---|---|
| Programa Vivifrail, «Programa multicomponente de ejercicio físico para la prevención de la fragilidad y el riesgo de caídas» | `https://munideporte.com/imagenes/documentacion/ficheros/0134414D.pdf` | PDF de 68 páginas, SHA-256 (prefijo) `ba4646b5a8b40c77` | Páginas 49-53 y 57-61; dibujos de 51, 57 y 60 |
| HSE, «Sitting exercises» | `https://www.hse.ie/living-well/exercise/exercise-at-home/sitting-exercises/` | HTML, SHA-256 (prefijo) `a90d65d57f07b40c` | Texto |
| Chartered Society of Physiotherapy, «Staying strong as you age: Strength» | `https://www.csp.org.uk/public-patient/keeping-active-and-healthy/staying-healthy-you-age/staying-strong-you-age/strength` | **403 al script**; leído con la herramienta web (texto procesado) | Texto de «Toe raises»; imagen no vista |
| Parkinson's UK, «Staying active and exercise at home» | `https://www.edinburghparkinsons.org/wp-content/uploads/2020/06/PUK-Staying-active-and-exercise-at-home.pdf` | PDF de 8 páginas, SHA-256 (prefijo) `a19fce1049c42013` | Páginas 4 y 5 |

- **Ilustraciones de HealthMove** (R7.6): **corregida por Claude** la de `banda-aperturas-diagonal-sentado` (`sentado.mjs`): subía los dos brazos; en la fuente uno sube y el otro baja. Las otras 7 coinciden.

## 161. banda-aperturas-diagonal-sentado

### Identificación
- ID: `banda-aperturas-diagonal-sentado`
- Nombre: Abrir los brazos en diagonal con banda
- Fuente: Programa Vivifrail (Erasmus+, Universidad Pública de Navarra), «Programa de ejercicio físico multicomponente Vivifrail: guía práctica (copia de munideporte.com)», «5. Apertura de brazos en diagonal con una cinta elástica», p. 51 (F1)
- Población destinataria de la fuente (si la declara): «prevención de la fragilidad y caídas en mayores de 70 años» (D, datos comunes de F1). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en la instrucción (HealthMove dice «hacia arriba y hacia fuera» y la fuente dice «en diagonal» con un brazo arriba y otro abajo); C3 en la ilustración (ya corregida por Claude, según la evidencia).

### Evidencia de la fuente
- Ubicación exacta: F1, «5. Apertura de brazos en diagonal con una cinta elástica», p. 51 (apartado 161).
- Pasos originales relevantes, resumidos con palabras propias: en posición sentada; coger la cinta por los extremos y enrollarla para evitar lesiones; «A la altura de las rodillas, empiece a separar los brazos en diagonal realizando una extensión del codo». 1 serie de 10, descanso y otra de 10.
- Coincidencias (C1): sentado, banda, separar los brazos en diagonal, extensión del codo, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la instrucción de HealthMove dice «hacia arriba y hacia fuera» y la fuente dice «en diagonal»; el dibujo de la fuente muestra un brazo arriba y otro abajo. La ilustración de HealthMove ya se corrigió (evidencia). La instrucción sigue pendiente de aclarar hacia la fuente.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), sentada, un brazo estirado hacia arriba y fuera por encima de la cabeza, el otro hacia abajo y fuera, la banda en diagonal. D (texto), la mano de arriba pasa por encima del hombro.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con un solo brazo; HealthMove lo hace con los dos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | true | D (texto): «cinta elástica» | evidencia | TRUE | §4: incluye banda |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y dibujo): la mano de arriba pasa por encima del hombro | evidencia | TRUE | §4: codo o mano por encima del hombro |
| mano_detras | false | D (texto y dibujo): los brazos van al frente y a los lados, no detrás | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y dibujo): los dos brazos trabajan a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto): «coger la cinta por los extremos y enrollarla» | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recursos `silla` y `banda`, dosis: coherentes.
- Ilustración: la evidencia dice que Claude la corrigió (`sentado.mjs`); no la he visto. R7.6/R7.7: no puedo confirmar que ya no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia recoge que la fuente se dirige a «prevención de la fragilidad y caídas en mayores de 70 años» (D). Propuesta: «prevención de la fragilidad y caídas» (nombre breve; R8.1; ver DS-419).
- `notas_etiquetado` actual: «La fuente no dice hasta qué altura suben las manos; se marca brazo sobre el hombro por prudencia.» Es incorrecta: la fuente sí lo dice (el dibujo muestra un brazo por encima de la cabeza). Ver DS-420.

### Incidencias
- La instrucción 3 («Separa los brazos en diagonal hacia arriba y hacia fuera») no coincide con la fuente (un brazo arriba, otro abajo). Es un C3 que se resuelve como aclaración hacia la fuente (R3.1, Q5).
- La nota de `brazo_sobre_hombro` no describe el fundamento real (DS-420).

### Propuesta de cambios
- `instrucciones[2]`: «Separa los brazos en diagonal: uno sube hacia arriba y hacia fuera y el otro baja hacia la cadera contraria, estirando los codos.» (aclaración hacia la fuente; R3.1, Q5).
- `notas_etiquetado`: sustituir la nota de `brazo_sobre_hombro` por una que describa el fundamento real (el dibujo muestra un brazo por encima de la cabeza) (DS-420).
- `fuente.especifica_de`: «prevención de la fragilidad y caídas» (R8.1; ver DS-419).
- `fuente.consultado`: 2026-10-24.
- `fuente.especifica_de`: «personas mayores de 70» (la fuente declara «mayores de 70 años»; DS-419, con otro nombre).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 162. escurrir-toalla-sentado

### Identificación
- ID: `escurrir-toalla-sentado`
- Nombre: Escurrir la toalla
- Fuente: Programa Vivifrail (Erasmus+, Universidad Pública de Navarra), «3. Ejercicios de prensión en las manos», ejercicio B, p. 51 (F1)
- Población destinataria de la fuente (si la declara): «prevención de la fragilidad y caídas en mayores de 70 años» (D, datos comunes de F1). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en la posición (la fuente no dice «sentado» y el dibujo es de pie; HealthMove lo hace sentado y no lo documenta).

### Evidencia de la fuente
- Ubicación exacta: F1, «3. Ejercicios de prensión en las manos», ejercicio B, p. 51 (apartado 162).
- Pasos originales relevantes, resumidos con palabras propias: enrollar una toalla pequeña como un tubo; cogerla por los extremos y, con las dos manos, hacer el movimiento de escurrir una toalla empapada; apretar poco a poco, tan fuerte como se pueda. Empezar por el ejercicio A (pelota) y pasar al B cuando se hagan 20 apretones fáciles seguidos. 1 serie de 10, descanso y otra de 10.
- Coincidencias (C1): toalla, escurrir con las dos manos, apretar poco a poco, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente no dice «sentado»; el dibujo es de pie. HealthMove lo hace sentado y no lo documenta.
- Hechos, inferencias e incertidumbres: D (texto), escurrir la toalla con las dos manos. D (dibujo), la persona está de pie. N, la posición que permite la fuente.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo sentado; la posición de HealthMove es una elección que no consta en la fuente.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: la resistencia la pone la propia persona | evidencia | FALSE | §4: no hay peso ni resistencia añadida |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): las manos al frente, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): las manos al frente | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): «con las dos manos» | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto): «cogerla por los extremos» y apretar | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recursos `silla` y `toalla`, dosis: coherentes.
- Ilustración: la evidencia dice que HealthMove lo dibuja sentado con las manos al frente con la toalla. Coincide con la instrucción de HealthMove, no con el dibujo de la fuente (de pie). R7.6: la ilustración de HealthMove no introduce un movimiento distinto; solo la posición. No propongo cambiarla.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia recoge que la fuente se dirige a «prevención de la fragilidad y caídas en mayores de 70 años» (D). Propuesta: «prevención de la fragilidad y caídas» (R8.1; ver DS-419).
- `notas_etiquetado` actual: «La resistencia la pone la propia persona: no se marca carga externa.» Es correcta como nota informativa; no es una nota conservadora. No propongo cambiarla.

### Incidencias
- La posición sentada no consta en la fuente; es una adaptación no documentada (C3). Ver DS-421.

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente lo describe de pie; aquí se hace sentado.» (C3 documentado; R3.1, Q5).
- `fuente.especifica_de`: «prevención de la fragilidad y caídas» (R8.1; ver DS-419).
- `fuente.consultado`: 2026-10-24.
- `fuente.especifica_de`: «personas mayores de 70» (la fuente declara «mayores de 70 años»; DS-419, con otro nombre).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 163. estiramiento-hombro-cruzado

### Identificación
- ID: `estiramiento-hombro-cruzado`
- Nombre: Estirar la parte de atrás del hombro
- Fuente: Programa Vivifrail (Erasmus+, Universidad Pública de Navarra), «Flexibilidad, 2. Estiramiento de la parte posterior del hombro», p. 60 (F1)
- Población destinataria de la fuente (si la declara): «prevención de la fragilidad y caídas en mayores de 70 años» (D, datos comunes de F1). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1) en la versión sentada.

### Evidencia de la fuente
- Ubicación exacta: F1, «Flexibilidad, 2. Estiramiento de la parte posterior del hombro», p. 60 (apartado 163).
- Pasos originales relevantes, resumidos con palabras propias: poner la mano en el hombro contrario con el codo pegado al pecho; con la otra mano, empujar el codo hacia la mano contraria hasta notar tensión en la parte de atrás del hombro; 10-12 s; pausa de 5 s; «De pie o sentado»; 2-3 veces y después el otro hombro.
- Coincidencias (C1): mano en el hombro contrario, codo pegado al pecho, empujar el codo con la otra mano, 10-12 s, 2-3 veces por lado, «De pie o sentado».
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna. La fuente permite las dos posiciones; HealthMove tiene dos entradas (P23).
- Hechos, inferencias e incertidumbres: D (texto y dibujos), una persona de pie y otra en silla de ruedas haciendo el estiramiento. D (texto), «De pie o sentado».
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con un solo brazo; HealthMove lo hace con los dos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): la mano en el hombro contrario, por debajo del hombro; el codo pegado al pecho | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): las manos al frente, en el hombro y en el codo | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): una mano en el hombro y la otra empuja el codo | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto y dibujo): la mano apoyada en el hombro y en el codo, sin prensión | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `sentado`, recurso `silla`, dosis: coherentes.
- Ilustración: la evidencia dice que HealthMove lo dibuja sentado, una mano en el hombro contrario y la otra en el codo. Coincide con el texto.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia recoge que la fuente se dirige a «prevención de la fragilidad y caídas en mayores de 70 años» (D). Propuesta: «prevención de la fragilidad y caídas» (R8.1; ver DS-419).
- `notas_etiquetado` actual: «Posición: el 2026-10-22 se separó en dos entradas (C2, P23): esta, sentada, y estiramiento-hombro-cruzado-pie, de pie. La fuente indica «De pie o sentado» (evidencia-fuentes-q1-q2.md §3).» Es correcta como nota informativa; no es una nota conservadora. No propongo cambiarla.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.especifica_de`: «prevención de la fragilidad y caídas» (R8.1; ver DS-419).
- `fuente.consultado`: 2026-10-24.
- `fuente.especifica_de`: «personas mayores de 70» (la fuente declara «mayores de 70 años»; DS-419, con otro nombre).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 164. estiramiento-hombro-cruzado-pie

### Identificación
- ID: `estiramiento-hombro-cruzado-pie`
- Nombre: Estirar la parte de atrás del hombro de pie
- Fuente: Programa Vivifrail (Erasmus+, Universidad Pública de Navarra), «Flexibilidad, 2. Estiramiento de la parte posterior del hombro», p. 60 (F1)
- Población destinataria de la fuente (si la declara): «prevención de la fragilidad y caídas en mayores de 70 años» (D, datos comunes de F1). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1) en la versión de pie.
- Variante de: `estiramiento-hombro-cruzado` (contexto, auditado en 163).

### Evidencia de la fuente
- Ubicación exacta: F1, «Flexibilidad, 2. Estiramiento de la parte posterior del hombro», p. 60 (apartado 164).
- Pasos originales relevantes, resumidos con palabras propias: los mismos que en 163; la fuente dice «De pie o sentado».
- Coincidencias (C1): de pie, mano en el hombro contrario, codo pegado al pecho, empujar el codo con la otra mano, 10-12 s, 2-3 veces por lado.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna. La fuente permite las dos posiciones.
- Hechos, inferencias e incertidumbres: D (texto y dibujos), una persona de pie y otra en silla de ruedas haciendo el estiramiento. D (texto), «De pie o sentado».
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con un solo brazo; HealthMove lo hace con los dos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | true | D (texto y dibujo): de pie, con las dos manos ocupadas en el estiramiento | evidencia | TRUE | §4: de pie, exige no sujetarse a nada; las dos manos están ocupadas |
| una_pierna | false | D (texto y dibujo): los dos pies apoyados | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): la mano en el hombro contrario, por debajo del hombro; el codo pegado al pecho | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): las manos al frente, en el hombro y en el codo | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): una mano en el hombro y la otra empuja el codo | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto y dibujo): la mano apoyada en el hombro y en el codo, sin prensión | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y dibujo): de pie con las piernas rectas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `de_pie`, recursos: vacío, coherente (no necesita silla ni pared).
- Ilustración: la evidencia dice que HealthMove lo dibuja de pie, una mano en el hombro contrario y la otra en el codo. Coincide con el texto.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia recoge que la fuente se dirige a «prevención de la fragilidad y caídas en mayores de 70 años» (D). Propuesta: «prevención de la fragilidad y caídas» (R8.1; ver DS-419).
- `variante_de`: `estiramiento-hombro-cruzado` (contexto; auditado en 163).
- `notas_etiquetado` actual: «equilibrio_sin_apoyo: con las dos manos ocupadas no hay forma de sujetarse a nada (especificación §7, regla 4; C2, P23). Versión de pie separada de estiramiento-hombro-cruzado el 2026-10-22. La fuente indica «De pie o sentado» (evidencia-fuentes-q1-q2.md §3).» Es correcta como nota informativa; no es una nota conservadora. No propongo cambiarla.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.especifica_de`: «prevención de la fragilidad y caídas» (R8.1; ver DS-419).
- `fuente.consultado`: 2026-10-24.
- `fuente.especifica_de`: «personas mayores de 70» (la fuente declara «mayores de 70 años»; DS-419, con otro nombre).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 165. puntillas-talones-apoyo

### Identificación
- ID: `puntillas-talones-apoyo`
- Nombre: Aguantar de puntillas y de talones
- Fuente: Programa Vivifrail (Erasmus+, Universidad Pública de Navarra), «Equilibrio y marcha, 3. Equilibrio punta-talón», p. 57 (F1)
- Población destinataria de la fuente (si la declara): «prevención de la fragilidad y caídas en mayores de 70 años» (D, datos comunes de F1). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en el apoyo (la fuente lo hace opcional y no dice cuántas manos; HealthMove lo hace siempre con las dos manos).

### Evidencia de la fuente
- Ubicación exacta: F1, «Equilibrio y marcha, 3. Equilibrio punta-talón», p. 57 (apartado 165).
- Pasos originales relevantes, resumidos con palabras propias: de pie; mantener el equilibrio solo sobre las puntas de los pies unos segundos y después solo sobre los talones; «Si se siente más seguro, sitúese de pie apoyado en una mesa o barandilla». Contar hasta 10 de puntillas y hasta 10 de talones; descanso de 1 a 3 minutos; repetir la serie.
- Coincidencias (C1): de pie, puntillas y talones, contar hasta 10, repetir la serie.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la fuente hace el apoyo opcional y no dice cuántas manos; HealthMove lo hace siempre con las dos manos.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), de pie sin apoyo, de puntillas y de talones. D (texto), el apoyo es opcional.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con una sola mano; HealthMove lo hace con las dos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto): «apoyado en una mesa o barandilla» | evidencia | FALSE | §4: se sujeta |
| una_pierna | false | D (texto y dibujo): los dos pies apoyados | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): las manos en la mesa o barandilla, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): las manos al frente, en la mesa o barandilla | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): «apoyado en una mesa o barandilla»; HealthMove usa las dos manos | conservadora | TRUE | Q1 (P9): apoyo bilateral; la fuente no dice cuántas manos, `true` conservador con nota |
| agarre | true | D (texto): «apoyado en una mesa o barandilla» | conservadora | TRUE | Q2 (P10): apoyo sin prensión visible, `true` conservador con nota |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y dibujo): de pie con las piernas rectas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | true | D (texto): «solo sobre las puntas de los pies» y «solo sobre los talones» | evidencia | TRUE | §4: soportar el peso sobre las puntas o los talones |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `de_pie`, recurso `silla`, dosis: coherentes. La fuente usa una mesa o barandilla; HealthMove usa una silla. Es una adaptación de recurso, no de movimiento; no cambia exigencias.
- Ilustración: la evidencia dice que HealthMove lo dibuja de pie con la silla delante. Coincide con la instrucción de HealthMove.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia recoge que la fuente se dirige a «prevención de la fragilidad y caídas en mayores de 70 años» (D). Propuesta: «prevención de la fragilidad y caídas» (R8.1; ver DS-419).
- `notas_etiquetado` actual: «[conservadora] ambos_brazos: apoyo bilateral (Q1). Se cerraría con: fuente de que basta una mano.» Tiene la forma de R2.4. Falta la nota de `agarre` (Q2). Ver DS-422.

### Incidencias
- Falta la nota `[conservadora]` de `agarre` (Q2) (DS-422).

### Propuesta de cambios
- `notas_etiquetado`: añadir la nota `[conservadora]` de `agarre` en la forma de R2.4 (DS-422).
- `fuente.especifica_de`: «prevención de la fragilidad y caídas» (R8.1; ver DS-419).
- `fuente.consultado`: 2026-10-24.
- `fuente.especifica_de`: «personas mayores de 70» (la fuente declara «mayores de 70 años»; DS-419, con otro nombre).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 166. elevacion-lateral-brazos-sentado

### Identificación
- ID: `elevacion-lateral-brazos-sentado`
- Nombre: Subir los brazos por los lados
- Fuente: HSE (Irlanda), «Sitting exercises», «Arm raises» (F2)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en la nota de `ambos_brazos` (la nota dice «Puede hacerse con un solo brazo» y la fuente pide los dos brazos).

### Evidencia de la fuente
- Ubicación exacta: F2, «Arm raises» (apartado 166).
- Pasos originales relevantes, resumidos con palabras propias: sentado erguido, los brazos a los lados y las palmas hacia delante, hombros bajos y brazos rectos; al soltar el aire, «raise both arms out to the side and up as far as is comfortable»; al tomar aire, bajar; 5 veces.
- Coincidencias (C1): sentado, brazos a los lados, subir por los lados, 5 veces, respiración.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la nota de `ambos_brazos` dice «Puede hacerse con un solo brazo»; la fuente pide los dos brazos.
- Hechos, inferencias e incertidumbres: D (texto), los dos brazos a la vez; «as far as is comfortable» no fija la altura. N (imagen), la evidencia no revisó las imágenes.
- Limitaciones de la verificación: la evidencia no revisó las imágenes de F2; la altura de los brazos es N.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto): «raise both arms out to the side and up as far as is comfortable»; la altura no se fija | conservadora | TRUE | R2.1 / R7.8: ante la duda de la altura, `true` conservador con nota (ver DS-423) |
| mano_detras | false | D (texto): los brazos suben por los lados, no detrás | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): «raise both arms» | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto): las manos abiertas, sin prensión | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis: coherentes.
- Ilustración: la evidencia dice que HealthMove lo dibuja sentado, los brazos suben por los lados. Coincide con el texto.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: «Puede hacerse con un solo brazo.» Es incorrecta: la fuente pide los dos brazos. Ver DS-424.

### Incidencias
- La nota de `ambos_brazos` contradice la fuente (DS-424).
- `brazo_sobre_hombro: true` sin nota `[conservadora]` (DS-423).

### Propuesta de cambios
- `notas_etiquetado`: sustituir la nota de `ambos_brazos` por una que describa el fundamento real (la fuente pide los dos brazos) (DS-424).
- `notas_etiquetado`: añadir la nota `[conservadora]` de `brazo_sobre_hombro` en la forma de R2.4 (DS-423).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 167. elevar-puntas-pies-apoyo

### Identificación
- ID: `elevar-puntas-pies-apoyo`
- Nombre: Levantar las puntas de los pies con apoyo
- Fuente: Chartered Society of Physiotherapy, «Helping older people stay active at home», «Toe raises» (F3)
- Población destinataria de la fuente (si la declara): «designed especially for older people» (D, según la evidencia). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en la instrucción («sujétate con las dos manos» y «con las rodillas flojas» no están en la fuente); C3 en la nota (cita fuentes de Otago, no esta).

### Evidencia de la fuente
- Ubicación exacta: F3, «Toe raises» (apartado 167). **Texto procesado por la herramienta web de Claude; no verificado literalmente.**
- Pasos originales relevantes, resumidos con palabras propias: «Stand tall holding the same support» (el del ejercicio anterior: «the back of a sturdy kitchen type chair or kitchen sink»); «raise your toes – taking your weight on your heels»; «Don't stick your bottom out»; «Hold for three seconds, then lower with control»; «Repeat 10 times». No dice cuántas manos, ni nada de las rodillas, ni una progresión de manos.
- Coincidencias (C1): de pie con apoyo, levantar las puntas de los pies, peso sobre los talones, mantener 3 segundos, 10 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, «sujétate con las dos manos» y «con las rodillas flojas» no están en la fuente. La nota del catálogo cita las fuentes de Otago para la progresión de manos, no esta.
- Hechos, inferencias e incertidumbres: D (texto, según la herramienta), de pie con apoyo, levantar las puntas, peso sobre los talones, 3 segundos, 10 veces. N (imagen), no vista.
- Limitaciones de la verificación: **el texto de F3 es de segunda mano** (herramienta web que lo procesa con un modelo auxiliar). No puedo confirmar que las citas sean literales. La imagen es N. La población «designed especially for older people» es D según la evidencia, pero también de segunda mano.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto): «holding the same support» | evidencia | FALSE | §4: se sujeta |
| una_pierna | false | D (texto): los dos pies apoyados | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): las manos en el respaldo, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto): las manos al frente, en el respaldo | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): «holding the same support»; HealthMove usa las dos manos | conservadora | TRUE | Q1 (P9): apoyo bilateral; la fuente no dice cuántas manos, `true` conservador con nota |
| agarre | true | D (texto): «holding the same support» | conservadora | TRUE | Q2 (P10): apoyo sin prensión visible, `true` conservador con nota |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): de pie con las piernas rectas; la fuente no menciona las rodillas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | true | D (texto): «taking your weight on your heels» | evidencia | TRUE | §4: soportar el peso sobre los talones |
| inclinacion_tronco | false | D (texto): «Don't stick your bottom out»; sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `de_pie`, recurso `silla`, dosis: coherentes. La fuente usa una silla de cocina o el fregadero; HealthMove usa una silla. Es una adaptación de recurso, no de movimiento; no cambia exigencias.
- Ilustración: la evidencia dice que HealthMove lo dibuja de pie con la silla delante, las puntas suben. Coincide con la instrucción de HealthMove.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia recoge que la fuente se dirige a «designed especially for older people» (D, según la herramienta). Propuesta: «personas mayores» (nombre breve; R8.1; ver DS-419). **Requiere verificación en la fuente original** (la cita es de segunda mano).
- `notas_etiquetado` actual: «Las fuentes de Otago proponen pasar de dos manos a una y a ninguna; aquí se mantiene el apoyo. [conservadora] ambos_brazos: apoyo bilateral (Q1). Se cerraría con: fuente de que basta una mano.» La primera frase cita fuentes que no son esta (DS-425). La nota de `agarre` (Q2) falta (DS-422).

### Incidencias
- La nota cita fuentes de Otago, no esta (DS-425).
- Falta la nota `[conservadora]` de `agarre` (Q2) (DS-422).
- «Sujétate con las dos manos» y «con las rodillas flojas» no están en la fuente (C3). Ver DS-426.

### Propuesta de cambios
- `instrucciones[0]`: «Ponte detrás de una silla firme o junto a una encimera y sujétate.» (aclaración hacia la fuente; R3.1, Q5; ver DS-426).
- `instrucciones[1]`: quitar «con las rodillas flojas» (no está en la fuente; ver DS-426).
- `notas_etiquetado`: sustituir la primera frase por una que no atribuya a esta fuente la progresión de Otago (DS-425).
- `notas_etiquetado`: añadir la nota `[conservadora]` de `agarre` en la forma de R2.4 (DS-422).
- `fuente.especifica_de`: «personas mayores» (R8.1; ver DS-419; requiere verificación en la fuente original).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
PENDIENTE_DE_FUENTE. El texto se leyó con la herramienta web (la página devuelve 403 al script) y la imagen no se ha visto. Hace falta abrir la fuente original. Las aclaraciones de las instrucciones ya se han aplicado (P29).


## 168. elevar-piernas-borde-silla

### Identificación
- ID: `elevar-piernas-borde-silla`
- Nombre: Subir las dos piernas desde el borde
- Fuente: Parkinson's UK, «How to stay active and exercise at home» (copia de Edinburgh Parkinson's), «Leg raises», p. 5 (F4)
- Población destinataria de la fuente (si la declara): «párkinson» (D, según la evidencia). `especifica_de` actual: «párkinson».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en el recurso (la fuente usa un sofá; HealthMove usa una silla).

### Evidencia de la fuente
- Ubicación exacta: F4, «Leg raises», p. 5 (apartado 168).
- Pasos originales relevantes, resumidos con palabras propias: en el apartado «Sofa exercises» (cada ejercicio 30 segundos, descanso de un minuto entre ejercicios): sentado hacia la parte delantera del sofá; «Place your hands either side of you», los pies juntos en el suelo; levantar las piernas desde la rodilla todo lo posible, hasta que queden paralelas a la cadera; con una pierna si es más fácil; bajar hasta 5 cm del suelo y repetir; más fácil, dejando que los pies toquen el suelo.
- Coincidencias (C1): sentado, manos a los lados, levantar las piernas desde la rodilla, 30 segundos, opción de una pierna, opción de tocar el suelo.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la fuente usa un sofá; HealthMove usa una silla. Ya está documentado en `adaptaciones`.
- Hechos, inferencias e incertidumbres: D (texto y dibujos), sentado en el borde de un sofá, las manos apoyadas en el asiento a los lados de la cadera, el tronco algo inclinado hacia atrás; las piernas pasan de abajo a estiradas en horizontal; los muslos se separan poco del asiento.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con una sola mano; HealthMove lo hace con las dos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D (texto): «con una pierna si es más fácil»; el peso no cae sobre un pie | evidencia | FALSE | §4: el peso no cae sobre un solo pie |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): las manos a los lados de la cadera, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): las manos a los lados, no detrás | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): «Place your hands either side of you» | conservadora | TRUE | Q1 (P9): apoyo bilateral; `true` conservador con nota |
| agarre | false | D (texto y dibujo): las manos apoyadas en el asiento, sin prensión | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | true | D (texto y dibujo): las manos apoyadas en el asiento, el tronco algo inclinado hacia atrás | conservadora | TRUE | R7.3 / R2.1: las manos pueden soportar parte del peso; `true` conservador con nota |
| flexion_profunda_rodilla | false | D (texto y dibujo): sentado, las piernas se estiran; la rodilla no pasa de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | true | D (texto y dibujo): «hasta que queden paralelas a la cadera»; el muslo se acerca al tronco | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto y dibujo): el tronco algo inclinado hacia atrás con la espalda recta | evidencia | FALSE | §4 cubre inclinar hacia delante o a un lado y arquear; no reclinarse un poco (DS-427, rechazado) |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recurso `silla`, dosis: coherentes. La fuente usa un sofá; HealthMove usa una silla. Ya está documentado en `adaptaciones`.
- Ilustración: la evidencia dice que HealthMove lo dibuja sentado en la silla con las manos a los lados, las piernas suben. Coincide con el texto.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «párkinson». La evidencia recoge que la fuente se dirige a párkinson (D). Coincide con R8.1.
- `notas_etiquetado` actual: «Las manos apoyadas pueden soportar parte del peso: se marca peso en manos por prudencia. [conservadora] ambos_brazos: apoyo bilateral (Q1). Se cerraría con: fuente de que basta una mano.» La nota de `peso_en_manos` no tiene la forma de R2.4. Falta la nota de `inclinacion_tronco` (DS-427).

### Incidencias
- La nota de `peso_en_manos` no tiene la forma de R2.4.
- `inclinacion_tronco: true` sin nota `[conservadora]` (DS-427).

### Propuesta de cambios
- `notas_etiquetado`: la nota de `peso_en_manos` pasa a la forma de R2.4.
- `notas_etiquetado`: se explica por qué no es `inclinacion_tronco` (DS-427, rechazado).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## Revisión de DeepSeek

**Consulta C22** (dos bloques, con «FIN DEL BORRADOR»; unos 0,04 USD como mucho). Análisis: `deepseek/analisis-claude/fase-21-lote21.md`.

**Aceptado:** DS-420 a DS-426: la instrucción de 161 hacia la fuente, la posición de 162, las notas de 165 y 166, la nota falsa de 166 («Puede hacerse con un solo brazo») y las aclaraciones de 167. También que 167 quede PENDIENTE_DE_FUENTE.

**Corregido por Claude:**
- DS-419: la población de Vivifrail se llama «personas mayores de 70» (el grupo que declara la fuente), no «prevención de la fragilidad y caídas» (su objetivo).
- DS-427, rechazado: en 168 el tronco se reclina un poco con la espalda recta; §4 no lo cubre.

## Resumen del lote

- **8 ejercicios auditados por primera vez con el protocolo 1.0.** 7 LISTOS PARA APROBACIÓN DOCUMENTAL; `elevar-puntas-pies-apoyo`, PENDIENTE_DE_FUENTE (CSP, 403 al script; se suma a G8).
- **Ninguna etiqueta cambia de valor.**
- **Instrucciones corregidas hacia la fuente:** 161 (diagonal) y 167 (sin «dos manos» ni «rodillas flojas»).
- **Adaptación nueva (Q5):** 162 (sentado).
- **Nombres en `especifica_de`:** «personas mayores de 70» (nuevo) y «personas mayores».
- **Ilustración corregida:** 1.
