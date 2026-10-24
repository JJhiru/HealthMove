# Borrador de auditoría · fase-23-lote23 (consulta C24)

> **Alcance y límites.** Audito los 15 ejercicios del lote 23 con el protocolo 1.0, a partir de la evidencia de Claude (`evidencia-lote-23`, apartados 179-193) y del catálogo (`catalogo-lote23`). No he abierto las fuentes originales: todo lo que afirmo sobre ellas procede de la evidencia entregada. No emito juicios clínicos ni apruebo ejercicios. `abdomen-profundo-tumbado` y `elevacion-pierna-recta-tumbado` se usan solo como contexto (bases de `variante_de`).
>
> **Nota sobre el reparto.** El encargo dice «15 ejercicios» y la evidencia cubre 179-193 (15 apartados). El bloque `catalogo-lote23` trae 17 objetos: los 15 auditables más los 2 de contexto. Audito los 15 y no audito los 2 de contexto, como se pide.
>
> **Limitaciones de la verificación** (comunes a todo el lote):
> - No he visto las imágenes originales ni las ilustraciones de HealthMove: me baso en las descripciones de Claude, que califica D/I/N. Donde la evidencia no describe la ilustración de HealthMove, no puedo confirmar R7.6/R7.7.
> - La evidencia no recoge el SHA-256 completo ni el commit del catálogo; no puedo registrar la versión exacta (protocolo §10.2).
> - La evidencia no dice si las fuentes declaran población destinataria más allá de «problemas y dolor de la articulación del título» (D, datos comunes). No propongo rellenar `especifica_de` salvo donde la evidencia lo respalde (R8.1).
> - No he podido comprobar en código el estado real de `notas_etiquetado` ni de `adaptaciones` más allá de lo que trae el bloque del catálogo.

---

## 179. deslizamiento-tendones-dedos

### Identificación
- ID: `deslizamiento-tendones-dedos`
- Nombre: Tres formas de cerrar la mano
- Fuente: Arthritis UK (antes Versus Arthritis), «Exercises for the fingers, hands and wrists», «Finger tendon glide stretch» (F5, apartado 179)
- Población destinataria de la fuente (si la declara): la evidencia solo recoge que la página es «para problemas y dolor» de la articulación del título (D, datos comunes). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en la dosis (la adaptación actual atribuye a la fuente una pauta que la fuente no da).

### Evidencia de la fuente
- Ubicación exacta: F5, «Finger tendon glide stretch» (apartado 179).
- Pasos originales relevantes, resumidos con palabras propias: dedos estirados; puño en gancho y volver; puño completo y volver; puño recto («straight fist») y volver. La fuente **no da repeticiones**.
- Coincidencias (C1): las cuatro posiciones de la mano (estirada, gancho, puño completo, puño recto) y el retorno a estirado.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la adaptación actual dice «La fuente deja las repeticiones en blanco para que las fije el fisioterapeuta»; la evidencia califica esa frase de **inexacta** (la fuente no las deja en blanco: simplemente no las da). La pauta «De 5 a 10 veces cada secuencia» es una decisión de HealthMove (R3.1, §5.1).
- Hechos, inferencias e incertidumbres: D (texto y dibujo), las cuatro posiciones. N, repeticiones.
- Limitaciones de la verificación: la evidencia no describe la ilustración de HealthMove más allá de «mano estirada y mano en gancho»; no puedo confirmar R7.6/R7.7.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento de la mano | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): la mano se mueve a la altura del regazo, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D: la mano no va detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): se trabaja una mano cada vez; la otra no interviene | evidencia | FALSE | Q1 (P9): no hay uso simultáneo ni alternancia continua |
| agarre | true | D (texto y dibujo): puño en gancho, puño completo y puño recto | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis «De 5 a 10 veces cada secuencia»: la dosis es una decisión de HealthMove (la fuente no la da). Debe quedar documentada como adaptación, no como si la fuente la dejara en blanco.
- Ilustración: la evidencia describe «mano estirada y mano en gancho»; coincide con parte de la secuencia. No puedo confirmar R7.6/R7.7.
- Exclusiones del catálogo v1: ninguna. La movilidad de la mano no es «movilidad aislada de la muñeca» (giros o círculos): son posiciones de los dedos.
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: vacío. No propongo añadir nota conservadora: todas las etiquetas tienen evidencia D.

### Incidencias
- La adaptación actual atribuye a la fuente una frase que la fuente no dice (DS-436).

### Propuesta de cambios
- `adaptaciones`: sustituir «La fuente deja las repeticiones en blanco para que las fije el fisioterapeuta; se usa una pauta de 5 a 10.» por una redacción que no atribuya a la fuente lo que no dice, por ejemplo: «La fuente no indica repeticiones; se usa una pauta de 5 a 10.» (R3.1, §5.1; ver DS-436).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 180. estiramiento-pulgar

### Identificación
- ID: `estiramiento-pulgar`
- Nombre: Estirar el pulgar
- Fuente: Arthritis UK (antes Versus Arthritis), «Exercises for the fingers, hands and wrists», «Thumb stretch» (F5, apartado 180)
- Población destinataria de la fuente (si la declara): la evidencia solo recoge que la página es «para problemas y dolor» de la articulación del título (D, datos comunes). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en la dosis (misma adaptación inexacta que 179).

### Evidencia de la fuente
- Ubicación exacta: F5, «Thumb stretch» (apartado 180).
- Pasos originales relevantes, resumidos con palabras propias: mano al frente como si se dijera «alto», con el pulgar hacia fuera; llevar el pulgar cruzando la palma y volver. La fuente **no da repeticiones**.
- Coincidencias (C1): mano abierta con el pulgar fuera; pulgar cruzando la palma; vuelta.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la misma adaptación inexacta que en 179. La pauta «De 5 a 10 veces con cada mano» es una decisión de HealthMove.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), las dos posiciones. N, repeticiones.
- Limitaciones de la verificación: la evidencia describe la ilustración de HealthMove como coincidente; no puedo confirmar R7.6/R7.7 más allá de esa descripción.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento de la mano | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): la mano se mueve a la altura del regazo, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D: la mano no va detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): se trabaja una mano cada vez | evidencia | FALSE | Q1 (P9): no hay uso simultáneo ni alternancia continua |
| agarre | false | D (texto y dibujo): la mano está abierta y el pulgar cruza la palma sin cerrar la mano | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar ni cierre de la mano |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `sentado`, recurso `silla`, dosis «De 5 a 10 veces con cada mano»: la dosis es una decisión de HealthMove.
- Ilustración: la evidencia la describe como coincidente.
- Exclusiones del catálogo v1: ninguna. El movimiento del pulgar no es «movilidad aislada de la muñeca».
- `fuente.especifica_de`: vacío. No propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: vacío. No propongo nota conservadora.

### Incidencias
- La adaptación actual atribuye a la fuente una frase que la fuente no dice (DS-436).

### Propuesta de cambios
- `adaptaciones`: misma corrección que en 179 (DS-436).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 181. rotacion-cadera-fuera-sentado

### Identificación
- ID: `rotacion-cadera-fuera-sentado`
- Nombre: Abrir las rodillas sentado
- Fuente: Arthritis UK (antes Versus Arthritis), «Exercises for the hips», «External hip rotation (sitting)» (F3, apartado 181)
- Población destinataria de la fuente (si la declara): la evidencia solo recoge que la página es «para problemas y dolor» de la articulación del título (D, datos comunes). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: **C3 en la posición y en la ejecución**: la fuente describe dos versiones (sentado en el suelo en «mariposa», o tumbado boca arriba) y HealthMove hace una tercera (sentado en una silla). No es ninguna de las dos de la fuente.

### Evidencia de la fuente
- Ubicación exacta: F3, «External hip rotation (sitting)» (apartado 181).
- Pasos originales relevantes, resumidos con palabras propias: «Sit with your knees bent and feet together. Press your knees down towards the floor using your hands as needed.» Alternativa: tumbado boca arriba, separar las rodillas con los pies juntos. Hasta notar el estiramiento, unos 10 s; 5 a 10 veces. Aviso: puede no ser adecuado tras una operación reciente de cadera.
- Coincidencias (C1): rodillas dobladas, pies juntos, dejar caer las rodillas hacia fuera, ayuda con las manos, 10 s, 5 a 10 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la posición. La fuente hace la versión sentada **en el suelo** (dibujo D: «mariposa» con las plantas juntas) o **tumbado**. HealthMove la hace **sentado en una silla**. La adaptación actual está vacía: la diferencia no está documentada.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), las dos versiones de la fuente. D (catálogo), la versión de HealthMove. N, si la fuente permite la versión en silla.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo en una silla; la versión en silla es una elección de HealthMove.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: estiramiento estático | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): las manos empujan las rodillas hacia el suelo, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D: las manos van a las rodillas, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): «using your hands as needed»; las dos manos empujan las dos rodillas | conservadora | TRUE | Q1 (P9): uso simultáneo de los dos brazos; la instrucción de HealthMove dice «puedes ayudarte con las manos» (opcional), así que se marca conservador con nota |
| agarre | false | D (texto y dibujo): las manos empujan las rodillas, sin prensión ni objeto | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y dibujo): rodillas dobladas, sin que conste que pasen de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro de hombros respecto a la cadera | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `sentado`, recurso `silla`, dosis «Mantén unos 10 segundos. De 5 a 10 veces.»: coherentes con F3.
- Ilustración: la evidencia dice que la ilustración de HealthMove es «de frente, sentado en la silla; el movimiento apenas se ve». R7.6/R7.7: la ilustración no introduce un movimiento distinto, pero no muestra el movimiento con claridad. No puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. No propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: «La fuente avisa de que puede no ser adecuado tras una operación reciente de cadera.» Es correcta como nota informativa. Falta la nota `[conservadora]` de `ambos_brazos` (Q1).

### Incidencias
- La posición en silla no consta en la fuente; es una adaptación no documentada (C3). Ver DS-437.
- Falta la nota `[conservadora]` de `ambos_brazos` (Q1). Ver DS-438.

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente lo hace sentado en el suelo o tumbado; aquí se hace sentado en una silla.» (C3 documentado; R3.1, Q5; ver DS-437).
- `notas_etiquetado`: añadir la nota `[conservadora]` de `ambos_brazos` en la forma de R2.4 (DS-438).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (DS-437: la posición en silla no es ninguna de las dos versiones de la fuente; hay que decidir si se documenta como adaptación o se retira).

---

## 182. alfabeto-pie-sentado

### Identificación
- ID: `alfabeto-pie-sentado`
- Nombre: Escribir el abecedario con el pie
- Fuente: Arthritis UK (antes Versus Arthritis), «Exercises for the toes, feet and ankles», «Alphabet writing with big toe» (F4, apartado 182)
- Población destinataria de la fuente (si la declara): la evidencia solo recoge que la página es «para problemas y dolor» de la articulación del título (D, datos comunes). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en la dosis (la fuente pide el abecedario entero dos veces al día; HealthMove pide una vez con cada pie).

### Evidencia de la fuente
- Ubicación exacta: F4, «Alphabet writing with big toe» (apartado 182).
- Pasos originales relevantes, resumidos con palabras propias: sentado, escribir el abecedario en el aire con el dedo gordo, moviendo solo el tobillo; el abecedario entero dos veces al día.
- Coincidencias (C1): sentado, escribir el abecedario con el dedo gordo, moviendo solo el tobillo.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la dosis. La fuente pide el abecedario entero dos veces al día; HealthMove pide una vez con cada pie. La adaptación actual está vacía.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), el movimiento. D (texto), la dosis de la fuente.
- Limitaciones de la verificación: la evidencia describe la ilustración de HealthMove como coincidente.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento del tobillo | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D: las manos no se mueven | evidencia | FALSE | — |
| mano_detras | false | D: las manos no van detrás | evidencia | FALSE | — |
| ambos_brazos | false | D: las manos no intervienen | evidencia | FALSE | Q1 (P9): no hay uso de los brazos |
| agarre | false | D: las manos no sujetan nada | evidencia | FALSE | R7.4 |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado; el pie se mueve en el aire, sin cargar el peso | evidencia | FALSE | §4: soportar el peso sobre las puntas o los talones; aquí no |
| inclinacion_tronco | false | D: sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis «El abecedario una vez con cada pie»: la dosis es una decisión de HealthMove.
- Ilustración: la evidencia la describe como coincidente.
- Exclusiones del catálogo v1: ninguna. El movimiento del tobillo no es «movilidad aislada de la muñeca».
- `fuente.especifica_de`: vacío. No propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: vacío. No propongo nota conservadora.

### Incidencias
- La dosis de HealthMove no está documentada como adaptación (DS-439).

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente pide el abecedario entero dos veces al día; aquí se hace una vez con cada pie.» (C3 documentado; R3.1, Q5; ver DS-439).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 183. estiramiento-planta-pie-sentado

### Identificación
- ID: `estiramiento-planta-pie-sentado`
- Nombre: Estirar la planta del pie
- Fuente: Arthritis UK (antes Versus Arthritis), «Exercises for the toes, feet and ankles», «Sitting plantar fascia stretch» (F4, apartado 183)
- Población destinataria de la fuente (si la declara): la evidencia solo recoge que la página es «para problemas y dolor» de la articulación del título (D, datos comunes). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento y en la posición.

### Evidencia de la fuente
- Ubicación exacta: F4, «Sitting plantar fascia stretch» (apartado 183).
- Pasos originales relevantes, resumidos con palabras propias: sentado, cruzar un pie sobre la rodilla contraria; coger la base de los dedos y tirar hacia uno mismo hasta un estiramiento cómodo; 15-20 s; 3 veces.
- Coincidencias (C1): sentado, pie sobre la rodilla contraria, coger los dedos por la base, tirar hacia uno mismo, 15-20 s, 3 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), la posición y el movimiento.
- Limitaciones de la verificación: la evidencia describe la ilustración de HealthMove como coincidente.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: estiramiento estático | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): la mano coge los dedos del pie, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D: la mano va al pie, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): una mano coge los dedos del pie; la otra no interviene | evidencia | FALSE | Q1 (P9): no hay uso simultáneo ni alternancia continua |
| agarre | true | D (texto y dibujo): la mano coge los dedos del pie | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y dibujo): la rodilla del pie cruzado está doblada, sin que conste que pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | true | D (texto y dibujo): el pie se sube a la rodilla contraria; el muslo se acerca al tronco | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `sentado`, recurso `silla`, dosis «Mantén de 15 a 20 segundos. 3 veces con cada pie.»: coherentes con F4.
- Ilustración: la evidencia la describe como coincidente.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. No propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: «Subir el pie a la rodilla contraria acerca el muslo al tronco.» Es correcta como nota informativa; no es una nota conservadora. No propongo cambiarla.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 184. estiramiento-pie-toalla-sentado

### Identificación
- ID: `estiramiento-pie-toalla-sentado`
- Nombre: Estirar el pie con una toalla
- Fuente: Arthritis UK (antes Versus Arthritis), «Exercises for the toes, feet and ankles», «Achilles tendon and plantar fascia stretch» (F4, apartado 184)
- Población destinataria de la fuente (si la declara): la evidencia solo recoge que la página es «para problemas y dolor» de la articulación del título (D, datos comunes). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en la posición (la fuente no la indica en el texto y el dibujo es sentado en el suelo; HealthMove lo hace sentado en una silla).

### Evidencia de la fuente
- Ubicación exacta: F4, «Achilles tendon and plantar fascia stretch» (apartado 184).
- Pasos originales relevantes, resumidos con palabras propias: pasar una toalla alrededor de la planta (la parte delantera del pie) y tirar de los dedos hacia uno mismo, con la rodilla estirada; mantener 30 s; 3 veces con cada pie. El texto no dice la posición.
- Coincidencias (C1): toalla alrededor de la planta, tirar de los dedos hacia uno mismo, rodilla estirada, 30 s, 3 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la posición. El dibujo (D) es sentado **en el suelo** con las piernas estiradas; HealthMove lo hace sentado **en una silla** con una pierna estirada. La adaptación actual solo documenta la dosis («de 1 a 3»), no la posición.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), el movimiento y la posición del dibujo. N, si la fuente permite la posición en silla.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo en una silla; la versión en silla es una elección de HealthMove.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: estiramiento estático | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): las manos sujetan la toalla a la altura de la pierna, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D: las manos van a la toalla, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y dibujo): las dos manos sujetan los extremos de la toalla | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto y dibujo): las manos sujetan la toalla | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): la rodilla se estira | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado con la pierna estirada, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `sentado`, recursos `silla` y `toalla`, dosis «Mantén 30 segundos. De 1 a 3 veces con cada pie.»: la dosis está documentada como adaptación; la posición no.
- Ilustración: la evidencia describe la ilustración de HealthMove como sentado en la silla con la pierna estirada y la toalla del pie a las manos. Coincide con la versión de HealthMove, no con el dibujo de la fuente (que es en el suelo). R7.6: la ilustración no introduce un movimiento distinto, pero la posición difiere de la fuente.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. No propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: vacío. No propongo nota conservadora.

### Incidencias
- La posición en silla no consta en la fuente; es una adaptación no documentada (C3). Ver DS-437.

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente lo hace sentado en el suelo; aquí se hace sentado en una silla con una pierna estirada.» (C3 documentado; R3.1, Q5; ver DS-437).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 185. codos-atras-sentado

### Identificación
- ID: `codos-atras-sentado`
- Nombre: Codos hacia atrás
- Fuente: Arthritis UK (antes Versus Arthritis), «Exercises for the shoulders», «Arm lifts (standing)» (F6, apartado 185)
- Población destinataria de la fuente (si la declara): la evidencia solo recoge que la página es «para problemas y dolor» de la articulación del título (D, datos comunes). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la posición (la fuente lo hace de pie; HealthMove sentado, ya documentado en `adaptaciones`).

### Evidencia de la fuente
- Ubicación exacta: F6, «Arm lifts (standing)» (apartado 185).
- Pasos originales relevantes, resumidos con palabras propias: las manos detrás de la cabeza con los codos hacia los lados, llevándolos hacia atrás todo lo posible; 5 s; después las manos detrás de la espalda con los codos hacia fuera y hacia atrás; 5 s; cada movimiento 5 veces.
- Coincidencias (C1): manos detrás de la cabeza con los codos abiertos; manos detrás de la espalda con los codos hacia fuera; llevar los codos hacia atrás; 5 s; 5 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la posición. La fuente lo hace de pie; HealthMove sentado (ya documentado en `adaptaciones`).
- Hechos, inferencias e incertidumbres: D (texto y dibujo), el movimiento y la posición de la fuente. D (catálogo), la posición de HealthMove.
- Limitaciones de la verificación: la evidencia describe la ilustración de HealthMove como coincidente (sentado, manos detrás de la cabeza).

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y dibujo): las manos detrás de la cabeza con los codos abiertos; los codos quedan a la altura del hombro o por encima | evidencia | TRUE | §4: codo o mano por encima del hombro |
| mano_detras | true | D (texto y dibujo): las manos detrás de la cabeza y detrás de la espalda | evidencia | TRUE | §4: mano detrás de la espalda o de la cabeza |
| ambos_brazos | true | D (texto): las dos manos detrás de la cabeza y las dos detrás de la espalda | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto y dibujo): las manos se apoyan detrás de la cabeza y de la espalda, sin prensión ni objeto | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis «Mantén 5 segundos. 5 veces cada posición.»: coherentes con F6.
- Ilustración: la evidencia la describe como coincidente.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. No propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: vacío. No propongo nota conservadora.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 186. pendulo-hombro

### Identificación
- ID: `pendulo-hombro`
- Nombre: Péndulo de hombro
- Fuente: Arthritis UK (antes Versus Arthritis), «Exercises for the shoulders», «Shoulder circle» (F6, apartado 186)
- Población destinataria de la fuente (si la declara): la evidencia solo recoge que la página es «para problemas y dolor» de la articulación del título (D, datos comunes). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento y en la posición.

### Evidencia de la fuente
- Ubicación exacta: F6, «Shoulder circle» (apartado 186).
- Pasos originales relevantes, resumidos con palabras propias: de pie con una mano apoyada en una silla; dejar colgar el otro brazo y balancearlo suavemente hacia delante y atrás en círculo; unas 5 veces, 2 o 3 veces al día; buen calentamiento.
- Coincidencias (C1): de pie, una mano en la silla, el otro brazo colgando, balanceo suave hacia delante y atrás y en círculos, 5 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), de pie, inclinado hacia delante, una mano en el respaldo, el otro brazo colgando con una flecha circular.
- Limitaciones de la verificación: la evidencia describe la ilustración de HealthMove como coincidente.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto): una mano apoyada en una silla | evidencia | FALSE | §4: se sujeta |
| una_pierna | false | D (dibujo): los dos pies apoyados | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: balanceo suave | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): el brazo cuelga por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D: la mano apoya en el respaldo, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): una mano apoya en la silla y el otro brazo trabaja | conservadora | TRUE | Q1 (P9): una mano se apoya mientras el otro brazo trabaja; `true` conservador con nota |
| agarre | true | D (texto): «apoya una mano en el respaldo»; apoyo sin prensión visible | conservadora | TRUE | Q2 (P10): apoyo sin prensión visible, `true` conservador con nota |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (dibujo): de pie con las piernas rectas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | true | D (texto y dibujo): «Inclínate hacia delante»; el dibujo muestra la espalda inclinada hacia delante | evidencia | TRUE | §4: inclinar la espalda hacia delante más allá de una inclinación leve |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `de_pie`, recurso `silla`, dosis «Unos 5 balanceos en cada dirección»: coherentes con F6.
- Ilustración: la evidencia la describe como coincidente.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. No propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: «Deja que el brazo se mueva por su peso, sin usar la fuerza del hombro. [conservadora] agarre: apoyo sin prensión (Q2). Se cerraría con: revisión profesional. [conservadora] ambos_brazos: una mano apoya y el otro brazo trabaja (Q1). Se cerraría con: fuente sin apoyo.» Es correcta como nota conservadora en la forma de R2.4. No propongo cambiarla.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 187. cuadriceps-toalla-rodilla-tumbado

### Identificación
- ID: `cuadriceps-toalla-rodilla-tumbado`
- Nombre: Estirar la rodilla sobre una toalla
- Fuente: Arthritis UK (antes Versus Arthritis), «Exercises for the knees», «Quads exercise with roll» (F1, apartado 187)
- Población destinataria de la fuente (si la declara): la evidencia solo recoge que la página es «para problemas y dolor» de la articulación del título (D, datos comunes). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; **C3 en la posición**: la fuente lo hace sentado en el suelo, el sofá o la cama; HealthMove lo hace tumbado boca arriba en la cama.

### Evidencia de la fuente
- Ubicación exacta: F1, «Quads exercise with roll» (apartado 187).
- Pasos originales relevantes, resumidos con palabras propias: «Sit on the floor, sofa or bed, with your legs stretched straight out in front of you»; una toalla enrollada bajo una rodilla; empujar la toalla como estirando la rodilla; tirar de los dedos y del pie hacia uno mismo, de modo que el talón se despegue del suelo; 5 s y 5 s de descanso; 10 veces con cada pierna.
- Coincidencias (C1): toalla enrollada bajo la rodilla, empujar la rodilla contra la toalla, tirar de la punta del pie, despegar el talón, 5 s y 5 s de descanso, 10 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la posición. La fuente lo hace **sentado** en el suelo, el sofá o la cama; HealthMove lo hace **tumbado boca arriba** en la cama. La adaptación actual está vacía.
- Hechos, inferencias e incertidumbres: D (texto y dibujos), sentado en el suelo con las piernas estiradas, la toalla bajo la rodilla; en el segundo, el talón levantado. D (catálogo), tumbado. N, si la fuente permite hacerlo tumbado.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo tumbado; la versión tumbada es una elección de HealthMove.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): las manos tiran de los dedos del pie, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D: las manos van al pie, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): una mano tira de los dedos del pie; la otra no interviene | evidencia | FALSE | Q1 (P9): no hay uso simultáneo ni alternancia continua |
| agarre | false | D (texto): la mano tira de los dedos del pie; no hay objeto que sujetar | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y dibujos): la rodilla se estira; la otra queda recta | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado con las piernas estiradas, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `tumbado`, recursos `cama` y `toalla`, dosis «Mantén 5 segundos y descansa 5. 10 veces con cada pierna.»: coherentes con F1.
- Ilustración: la evidencia describe la ilustración de HealthMove como tumbado en la cama, la pierna con la toalla bajo la rodilla. Coincide con la versión de HealthMove, no con el dibujo de la fuente (que es sentado). R7.6: la ilustración no introduce un movimiento distinto, pero la posición difiere de la fuente.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. No propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: vacío. No propongo nota conservadora.

### Incidencias
- La posición tumbada no consta en la fuente; es una adaptación no documentada (C3). Ver DS-437.

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente lo hace sentado en el suelo, el sofá o la cama; aquí se hace tumbado boca arriba en la cama.» (C3 documentado; R3.1, Q5; ver DS-437).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (DS-437: la posición tumbada no es la de la fuente; hay que decidir si se documenta como adaptación o se retira).

---

## 188. rodilla-cama-toalla-tobillo

### Identificación
- ID: `rodilla-cama-toalla-tobillo`
- Nombre: Empujar la rodilla hacia la cama con una toalla bajo el tobillo
- Fuente: Arthritis UK (antes Versus Arthritis), «Exercises for the knees», «Muscle stretch» (F1, apartado 188)
- Población destinataria de la fuente (si la declara): la evidencia solo recoge que la página es «para problemas y dolor» de la articulación del título (D, datos comunes). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento y en la posición.

### Evidencia de la fuente
- Ubicación exacta: F1, «Muscle stretch» (apartado 188).
- Pasos originales relevantes, resumidos con palabras propias: boca arriba con una toalla enrollada bajo el tobillo; la otra rodilla doblada; con los músculos de la pierna estirada, empujar la parte de atrás de la rodilla con firmeza hacia la cama o el suelo; contar despacio hasta cinco; al menos 5 veces con cada pierna; al menos una vez al día tumbado.
- Coincidencias (C1): boca arriba, toalla bajo el tobillo, la otra rodilla doblada, empujar la rodilla hacia la cama, contar hasta 5, al menos 5 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), tumbado, una rodilla doblada, la toalla bajo el tobillo de la pierna estirada, flechas hacia abajo en la rodilla.
- Limitaciones de la verificación: la evidencia describe la ilustración de HealthMove como coincidente.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D: las manos no se mueven | evidencia | FALSE | — |
| mano_detras | false | D: las manos no van detrás | evidencia | FALSE | — |
| ambos_brazos | false | D: las manos no intervienen | evidencia | FALSE | Q1 (P9): no hay uso de los brazos |
| agarre | false | D: las manos no sujetan nada | evidencia | FALSE | R7.4 |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y dibujo): la rodilla de la pierna estirada se estira; la otra queda doblada, sin que conste que pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado con las piernas estiradas, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `tumbado`, recursos `cama` y `toalla`, dosis «Mantén mientras cuentas despacio hasta 5. Al menos 5 veces con cada pierna.»: coherentes con F1.
- Ilustración: la evidencia la describe como coincidente.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. No propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: vacío. No propongo nota conservadora.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 189. rodilla-doblada-boca-abajo

### Identificación
- ID: `rodilla-doblada-boca-abajo`
- Nombre: Levantar la rodilla doblada boca abajo
- Fuente: Arthritis UK (antes Versus Arthritis), «Exercises for the back», «Buttock tone» (F2, apartado 189)
- Población destinataria de la fuente (si la declara): la evidencia solo recoge que la página es «para problemas y dolor» de la articulación del título (D, datos comunes). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento y en la posición.

### Evidencia de la fuente
- Ubicación exacta: F2, «Buttock tone» (apartado 189).
- Pasos originales relevantes, resumidos con palabras propias: boca abajo, doblar una pierna hacia atrás; levantar la rodilla doblada un poco del suelo; mantener hasta 8 s; 5 veces cada lado.
- Coincidencias (C1): boca abajo, doblar una pierna, levantar la rodilla doblada, mantener hasta 8 s, 5 veces cada lado.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), boca abajo, la cabeza girada a un lado, una rodilla doblada a 90° con el muslo algo despegado.
- Limitaciones de la verificación: la evidencia describe la ilustración de HealthMove como coincidente.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: boca abajo | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: boca abajo; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: boca abajo | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D: los brazos no se mueven | evidencia | FALSE | — |
| mano_detras | false | D: las manos no van detrás | evidencia | FALSE | — |
| ambos_brazos | false | D: los brazos no intervienen | evidencia | FALSE | Q1 (P9): no hay uso de los brazos |
| agarre | false | D: las manos no sujetan nada | evidencia | FALSE | R7.4 |
| peso_en_manos | false | D: boca abajo; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | true | D (texto y dibujo): la rodilla se dobla a 90° | evidencia | TRUE | §4: rodilla más de 90° |
| flexion_amplia_cadera | false | D: boca abajo, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: boca abajo | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro de hombros respecto a la cadera | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `suelo`, recursos: vacío, dosis «Mantén hasta 8 segundos. 5 veces con cada pierna.»: coherentes con F2.
- Ilustración: la evidencia la describe como coincidente.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. No propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: vacío. No propongo nota conservadora.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 190. abdomen-boca-abajo

### Identificación
- ID: `abdomen-boca-abajo`
- Nombre: Activar el abdomen boca abajo
- Fuente: Arthritis UK (antes Versus Arthritis), «Exercises for the back», «Stomach tone» (F2, apartado 190)
- Población destinataria de la fuente (si la declara): la evidencia solo recoge que la página es «para problemas y dolor» de la articulación del título (D, datos comunes). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en la posición de la cabeza (la fuente pone la cabeza de lado; HealthMove no lo dice).
- Variante de: `abdomen-profundo-tumbado` (contexto, no auditado).

### Evidencia de la fuente
- Ubicación exacta: F2, «Stomach tone» (apartado 190).
- Pasos originales relevantes, resumidos con palabras propias: boca abajo con los brazos a los lados, «head on one side»; meter el abdomen, centrado en el ombligo; 5 s; 3 veces; subir hasta 10 s; también durante el día, caminando o de pie. Seguir respirando.
- Coincidencias (C1): boca abajo, brazos a los lados, meter el abdomen, 5 s, 3 veces, subir hasta 10 s, seguir respirando.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la posición de la cabeza. La fuente dice «head on one side»; HealthMove no lo dice. La exclusión del catálogo v1 sobre movimientos de cuello no se ve afectada (no es un movimiento de cuello), pero la instrucción omite una indicación de la fuente.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), boca abajo, los brazos junto al cuerpo, la cabeza girada a un lado.
- Limitaciones de la verificación: la evidencia describe la ilustración de HealthMove como coincidente.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: boca abajo | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: boca abajo; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: boca abajo | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): los brazos a los lados, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D: las manos a los lados, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | false | D: los brazos no intervienen | evidencia | FALSE | Q1 (P9): no hay uso de los brazos |
| agarre | false | D: las manos no sujetan nada | evidencia | FALSE | R7.4 |
| peso_en_manos | false | D: boca abajo; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: boca abajo con las piernas estiradas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: boca abajo, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: boca abajo | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro de hombros respecto a la cadera | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `suelo`, recursos: vacío, dosis «Mantén 5 segundos y ve subiendo hasta 10. 3 veces.»: coherentes con F2.
- Ilustración: la evidencia la describe como coincidente.
- Exclusiones del catálogo v1: ninguna. La posición de la cabeza de lado no es un «movimiento de cuello».
- `fuente.especifica_de`: vacío. No propongo rellenarlo (R8.1).
- `variante_de`: `abdomen-profundo-tumbado` (contexto; no auditado).
- `notas_etiquetado` actual: vacío. No propongo nota conservadora.

### Incidencias
- La instrucción de HealthMove omite la posición de la cabeza que la fuente indica (DS-440).

### Propuesta de cambios
- `instrucciones`: añadir la posición de la cabeza de la fuente («con la cabeza girada a un lado») o documentar la omisión como adaptación (DS-440).
-