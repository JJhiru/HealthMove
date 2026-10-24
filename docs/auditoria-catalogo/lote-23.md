# Lote 23 · Primera auditoría con el protocolo 1.0: Arthritis UK (15 ejercicios)

- Fecha: 2026-10-24
- Versión del protocolo: 1.0
- Catálogo: v0.3.0 (actualizado 2026-10-14), rama `desarrollo-v1`, commit `b36d869`
- Identificador git del catálogo: no fiable, el catálogo tiene cambios sin confirmar (son los cambios de este lote, aplicados antes de cerrarlo).
- Huellas literales (tras aplicar los cambios): `deslizamiento-tendones-dedos` `5ade571775146966`, `estiramiento-pulgar` `2b031216c39f21ea`, `rotacion-cadera-fuera-sentado` `c42d44a07c73c51d`, `alfabeto-pie-sentado` `9430badd2b40b6bb`, `estiramiento-planta-pie-sentado` `7e0218abdbbeafc5`, `estiramiento-pie-toalla-sentado` `b37cfc54374cb87c`, `codos-atras-sentado` `2f91fc94bbff45a1`, `pendulo-hombro` `b633ebae7d08c18c`, `cuadriceps-toalla-rodilla-tumbado` `48bac685db660ee7`, `rodilla-cama-toalla-tobillo` `f69b523189304c89`, `rodilla-doblada-boca-abajo` `e62bd0ce10715826`, `abdomen-boca-abajo` `3ace2985fe9b7bcf`, `elevar-brazo-boca-abajo` `f3cc0b59f904a828`, `rodilla-deslizar-suelo` `459a6012385c5d11`, `elevacion-pierna-recta-suelo` `18e47cd6983d9117`.
- **Cómo se hizo (P29):** evidencia de Claude (`evidencia/lote-23.md`); borrador de DeepSeek (consulta C24, en dos bloques, con el registro enviado en dos partes); verificación de Claude. **Los apartados son el borrador de DeepSeek con las correcciones de Claude** listadas en «Revisión de DeepSeek». Une los lotes 23 y 24 del plan.
- **Fuentes abiertas** (2026-10-24, `curl`, HTTP 200): seis páginas de «Exercises for healthy joints» de Arthritis UK (rodillas, espalda, caderas, pies, manos y hombros); URL y hashes en la evidencia. Las de rodillas, caderas y pies no han cambiado desde el lote 10.
- **Ilustraciones de HealthMove** (R7.6): coinciden con la versión de HealthMove en los 15; en 181, 184 y 187 esa versión no es la posición de la fuente (ver los apartados).

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
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


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
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


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
PENDIENTE DE DECISIÓN (DS-437): la fuente lo hace sentado (suelo, sofá o cama) con las piernas estiradas, no tumbado. Opciones para la revisión final: documentarlo como adaptación o pasarlo a la posición de la fuente.


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
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


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
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


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
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


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
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


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
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


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
PENDIENTE DE DECISIÓN (DS-437): la fuente lo hace sentado (suelo, sofá o cama) con las piernas estiradas, no tumbado. Opciones para la revisión final: documentarlo como adaptación o pasarlo a la posición de la fuente.


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
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


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
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


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
- `adaptaciones`: se documenta la omisión de la cabeza girada (exclusión del cuello; DS-440).
-- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 191. elevar-brazo-boca-abajo

### Identificación
- ID: `elevar-brazo-boca-abajo`
- Nombre: Levantar un brazo boca abajo
- Fuente: Arthritis UK (antes Versus Arthritis), «Exercises for the back», «Arm raises» (F2, apartado 191)
- Población destinataria de la fuente (si la declara): la evidencia solo recoge que la página es «para problemas y dolor» de la articulación del título (D, datos comunes). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento y en la posición.

### Evidencia de la fuente
- Ubicación exacta: F2, «Arm raises» (apartado 191).
- Pasos originales relevantes, resumidos con palabras propias: boca abajo con la espalda neutra; tensar la parte baja del abdomen y levantar un brazo; mantener 5 s y relajar; 10 veces con cada brazo.
- Coincidencias (C1): boca abajo, tensar el abdomen, levantar un brazo, mantener 5 s, 10 veces con cada brazo.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), boca abajo, un brazo estirado hacia delante, por encima de la cabeza, despegado del suelo.
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
| brazo_sobre_hombro | true | D (texto y dibujo): el brazo se estira hacia delante, por encima de la cabeza, despegado del suelo | evidencia | TRUE | §4: codo o mano por encima del hombro; CN-1 (P25): tumbado, el brazo se separa del tronco y la altura no se puede comparar |
| mano_detras | false | D: el brazo va hacia delante, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): se levanta un brazo cada vez; el otro no interviene | evidencia | FALSE | Q1 (P9): no hay uso simultáneo ni alternancia continua |
| agarre | false | D: la mano no sujeta nada | evidencia | FALSE | R7.4 |
| peso_en_manos | false | D: boca abajo; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: boca abajo con las piernas estiradas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: boca abajo, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: boca abajo | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro de hombros respecto a la cadera | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `suelo`, recursos: vacío, dosis «Mantén 5 segundos. 10 veces con cada brazo.»: coherentes con F2.
- Ilustración: la evidencia la describe como coincidente.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. No propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: vacío. No propongo nota conservadora: `brazo_sobre_hombro` tiene evidencia D.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 192. rodilla-deslizar-suelo

### Identificación
- ID: `rodilla-deslizar-suelo`
- Nombre: Doblar y estirar la rodilla sentado en el suelo
- Fuente: Arthritis UK (antes Versus Arthritis), «Exercises for the knees», «Leg stretch» (F1, apartado 192)
- Población destinataria de la fuente (si la declara): la evidencia solo recoge que la página es «para problemas y dolor» de la articulación del título (D, datos comunes). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento y en la posición.

### Evidencia de la fuente
- Ubicación exacta: F1, «Leg stretch» (apartado 192).
- Pasos originales relevantes, resumidos con palabras propias: sentado en el suelo con las piernas estiradas al frente; doblar despacio una rodilla hacia el pecho deslizando el pie por el suelo hasta notar el estiramiento; 5 s; estirar la pierna todo lo posible; 5 s; 10 veces con cada pierna. Si no se puede bajar al suelo, en un sofá con una tabla o una bandeja para deslizar el pie.
- Coincidencias (C1): sentado en el suelo, piernas estiradas, doblar una rodilla hacia el pecho deslizando el pie, 5 s, estirar la pierna, 5 s, 10 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujos), sentada en el suelo con la espalda apoyada en la pared; una rodilla doblada con el pie cerca del glúteo, y estirada. D (dibujo), la rodilla muy doblada y el muslo cerca del tronco.
- Limitaciones de la verificación: la evidencia describe la ilustración de HealthMove como coincidente.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado en el suelo | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado en el suelo | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D: los brazos no se mueven | evidencia | FALSE | — |
| mano_detras | false | D: las manos no van detrás | evidencia | FALSE | — |
| ambos_brazos | false | D: los brazos no intervienen | evidencia | FALSE | Q1 (P9): no hay uso de los brazos |
| agarre | false | D: las manos no sujetan nada | evidencia | FALSE | R7.4 |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | true | D (texto y dibujo): la rodilla se dobla hacia el pecho, con el pie cerca del glúteo | evidencia | TRUE | §4: rodilla más de 90° |
| flexion_amplia_cadera | true | D (texto y dibujo): el muslo se acerca al tronco al doblar la rodilla hacia el pecho | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `suelo`, recursos: vacío, dosis «Mantén 5 segundos en cada posición. 10 veces con cada pierna.»: coherentes con F1.
- Ilustración: la evidencia la describe como coincidente.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. No propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: vacío. No propongo nota conservadora.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 193. elevacion-pierna-recta-suelo

### Identificación
- ID: `elevacion-pierna-recta-suelo`
- Nombre: Levantar la pierna estirada en el suelo
- Fuente: Arthritis UK (antes Versus Arthritis), «Exercises for the knees», «Straight-leg raise (lying)» (F1, apartado 193)
- Población destinataria de la fuente (si la declara): la evidencia solo recoge que la página es «para problemas y dolor» de la articulación del título (D, datos comunes). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en la posición (la fuente permite el suelo o la cama; HealthMove solo tiene la versión en el suelo).
- Variante de: `elevacion-pierna-recta-tumbado` (contexto, no auditado).

### Evidencia de la fuente
- Ubicación exacta: F1, «Straight-leg raise (lying)» (apartado 193).
- Pasos originales relevantes, resumidos con palabras propias: en el suelo o tumbado en la cama; doblar una rodilla; con la otra pierna recta, levantar el pie un poco del suelo o la cama; contar despacio hasta cinco y bajar; 5 veces con cada pierna, mañana y tarde.
- Coincidencias (C1): tumbado, una rodilla doblada, la otra pierna recta, levantar el pie un poco, contar hasta 5, bajar, 5 veces con cada pierna.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la posición. La fuente permite el suelo **o la cama**; HealthMove solo tiene la versión en el suelo (`elevacion-pierna-recta-suelo`). La versión en la cama existe como `elevacion-pierna-recta-tumbado`, pero su fuente es otra (Royal Berkshire, Stage 2, según la nota del catálogo). La adaptación actual está vacía.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), tumbado, una rodilla doblada, la otra pierna recta un poco elevada. D (texto), la fuente permite el suelo o la cama.
- Limitaciones de la verificación: la evidencia describe la ilustración de HealthMove como coincidente. La nota del catálogo cita otra fuente (Royal Berkshire, Stage 2); no he podido verificar esa cita en la evidencia de este lote.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D: los brazos no se mueven | evidencia | FALSE | — |
| mano_detras | false | D: las manos no van detrás | evidencia | FALSE | — |
| ambos_brazos | false | D: los brazos no intervienen | evidencia | FALSE | Q1 (P9): no hay uso de los brazos |
| agarre | false | D: las manos no sujetan nada | evidencia | FALSE | R7.4 |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y dibujo): la pierna que se levanta está recta; la otra queda doblada, sin que conste que pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado con la pierna recta, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `suelo`, recursos: vacío, dosis «5 veces con cada pierna.»: coherentes con F1.
- Ilustración: la evidencia la describe como coincidente.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. No propongo rellenarlo (R8.1).
- `variante_de`: `elevacion-pierna-recta-tumbado` (contexto; no auditado).
- `notas_etiquetado` actual: «No debe provocar dolor de espalda (Royal Berkshire, Stage 2).» Es correcta como nota informativa; no es una nota conservadora. No propongo cambiarla, pero la cita de otra fuente no está verificada en la evidencia de este lote.

### Incidencias
- La fuente permite el suelo o la cama; HealthMove solo tiene la versión en el suelo. La versión en la cama existe con otra fuente. Ver DS-441.

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente permite hacerlo en el suelo o en la cama; aquí se hace en el suelo.» (C3 documentado; R3.1, Q5; ver DS-441).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## Revisión de DeepSeek

**Consulta C24** (dos bloques, con «FIN DEL BORRADOR»). Análisis: `deepseek/analisis-claude/fase-23-lote23.md`.

**Aceptado:** DS-436 (adaptación inexacta de 179 y 180), DS-437 (posiciones distintas de la fuente en 181, 184 y 187), DS-438 (nota de 181), DS-439 (dosis de 182), DS-440 (cabeza en 190, documentada como adaptación) y DS-441 (posición de 193).

**Criterio de Claude en DS-437:** en 184 solo la imagen muestra el suelo (como en `cruce-piernas-isometrico`, aprobado en Q5): se documenta como adaptación. En 181 y 187 es el **texto** el que fija otra posición: quedan PENDIENTE DE DECISIÓN.

## Resumen del lote

- **15 ejercicios auditados por primera vez con el protocolo 1.0.** 13 LISTOS PARA APROBACIÓN DOCUMENTAL; `rotacion-cadera-fuera-sentado` y `cuadriceps-toalla-rodilla-tumbado`, PENDIENTE DE DECISIÓN (posición).
- **Ninguna etiqueta cambia de valor.**
- **Adaptaciones nuevas (Q5):** 182, 184, 190 y 193; corregidas: 179 y 180.
