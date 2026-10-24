# Lote 26 · Primera auditoría con el protocolo 1.0: University Hospitals Plymouth, NHS Grampian y North Cheshire and Mersey (11 ejercicios)

- Fecha: 2026-10-24
- Versión del protocolo: 1.0
- Catálogo: v0.3.0 (actualizado 2026-10-14), rama `desarrollo-v1`, commit `69987fd`
- Identificador git del catálogo: no fiable, el catálogo tiene cambios sin confirmar (son los cambios de este lote, aplicados antes de cerrarlo).
- Huellas literales (tras aplicar los cambios): `hombros-abajo-tumbado` `50cf4695b1821e7c`, `press-pecho-botella-tumbado` `d89bfc81802afe6f`, `elevacion-lateral-botella-tumbado` `a7ac652167de84f5`, `flexion-hombro-botella-tumbado` `f127f72b71822051`, `marcha-apertura-brazos-sentado` `37b1887435780854`, `toques-laterales-brazos-arriba-sentado` `c1a89e65b080b2d9`, `arrancar-cortacesped-sentado` `d9562071458706bc`, `estiramiento-isquios-pie` `342a962bcbc510b3`, `limpiaparabrisas-pie-sentado` `d4550e211c7ac459`, `deslizar-toalla-pared` `26b5b86026fa0a00`, `estiramiento-pecho-pared` `04b5b103b2a6ec91`.
- **Cómo se hizo (P29):** evidencia de Claude (`evidencia/lote-26.md`); borrador de DeepSeek (consulta C27, en dos bloques); verificación de Claude. **Los apartados son el borrador de DeepSeek con las correcciones de Claude** listadas en «Revisión de DeepSeek».
- **Fuentes abiertas** (2026-10-24, `curl`, HTTP 200): la página y el PDF de Plymouth, el folleto de NHS Grampian y dos hojas de North Cheshire and Mersey, todos con fotos; URL y hashes en la evidencia.
- **Ilustraciones de HealthMove** (R7.6): coinciden salvo dos, que Claude corrigió: `estiramiento-isquios-pie` (rodillas invertidas) y `estiramiento-pecho-pared` (el brazo, doblado y alto).

## 216. hombros-abajo-tumbado

### Identificación
- ID: `hombros-abajo-tumbado`
- Nombre: Llevar los hombros hacia abajo
- Fuente: University Hospitals Plymouth NHS Trust (Neurocirugía), «Your Bed Rest Exercises» (B-318, v3, marzo de 2018), «Scapular Setting» (F1, apartado 216)
- Población destinataria de la fuente (si la declara): «reposo en cama en la unidad de neurocirugía» (D, datos comunes de F1). `especifica_de` actual: «reposo en cama tras neurocirugía».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis (la fuente deja el tiempo y las repeticiones en blanco; HealthMove usa 5 s y 5 a 10 veces). La adaptación documentada solo cubre las repeticiones, no el tiempo (ver DS-467).

### Evidencia de la fuente
- Ubicación exacta: F1, «Scapular Setting» (apartado 216).
- Pasos originales relevantes, resumidos con palabras propias: los hombros relajados con los brazos a los lados; juntar los omóplatos llevando el hombro hacia la cama; llevar los dedos hacia los pies; mantener «……seconds» (el tiempo, en blanco). No da repeticiones.
- Coincidencias (C1): tumbado, brazos a los lados, juntar los omóplatos, llevar los dedos hacia los pies.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis (tiempo y repeticiones en blanco; HealthMove usa 5 s y 5 a 10 veces). La adaptación actual solo menciona las repeticiones. C3, ninguna.
- Hechos, inferencias e incertidumbres: D (texto), tumbado, brazos a los lados, juntar los omóplatos. N (imagen), sin foto.
- Limitaciones de la verificación: la evidencia no describe la ilustración de HealthMove; no puedo confirmar R7.6/R7.7.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos a los lados, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos a los lados, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos quedan a los lados y relajados; el movimiento es de los omóplatos, no de los brazos | evidencia | FALSE | Q1 (P9): los brazos no trabajan; no hay uso simultáneo ni alternancia |
| agarre | false | D (texto): las manos no sujetan nada | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): tumbado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): tumbado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `tumbado`, recurso `cama`, dosis «Mantén 5 segundos. De 5 a 10 veces.»: la dosis es una adaptación (C2); la adaptación documentada no menciona el tiempo (DS-467).
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «reposo en cama tras neurocirugía». Coincide con R8.1.
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- La adaptación de la dosis no cubre el tiempo en blanco de la fuente (DS-467).

### Propuesta de cambios
- `adaptaciones`: ampliar la nota para incluir el tiempo («La fuente deja el tiempo y las repeticiones en blanco…»), o añadir una frase equivalente (DS-467).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 217. press-pecho-botella-tumbado

### Identificación
- ID: `press-pecho-botella-tumbado`
- Nombre: Empujar botellas hacia el techo
- Fuente: University Hospitals Plymouth NHS Trust (Neurocirugía), «Your Bed Rest Exercises», «6. Shoulder Abduction A» (F1, apartado 217)
- Población destinataria de la fuente (si la declara): «reposo en cama en la unidad de neurocirugía» (D, datos comunes de F1). `especifica_de` actual: «reposo en cama tras neurocirugía».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis (peso y repeticiones en blanco; HealthMove usa 5 a 10). El número de brazos no es una diferencia: el texto habla de «weights» y «elbows» en plural y HealthMove usa una botella en cada mano (DS-468, matizado).

### Evidencia de la fuente
- Ubicación exacta: F1, «6. Shoulder Abduction A» (apartado 217).
- Pasos originales relevantes, resumidos con palabras propias: «Shoulders abducted and elbows flexed»; levantar los pesos por encima del pecho hasta estirar los codos y bajar despacio; peso y repeticiones en blanco.
- Coincidencias (C1): tumbado, codos doblados, empujar hacia el techo, estirar los codos, bajar despacio.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis. C3, ninguna: las fotos muestran un brazo, pero el texto es plural y HealthMove sigue el texto (DS-468, matizado).
- Hechos, inferencias e incertidumbres: D (texto), empujar los pesos hacia el techo. D (fotos), un brazo estirado hacia el techo con el puño cerrado; en la otra, el codo doblado con la mano junto al hombro. I (texto), el plural sugiere los dos brazos.
- Limitaciones de la verificación: la evidencia no describe la ilustración de HealthMove; no puedo confirmar R7.6/R7.7.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | true | D (texto): «weights»; se sostiene un peso | evidencia | TRUE | §4: se sostiene peso añadido |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y fotos): el brazo empuja hacia el techo desde el pecho; el codo queda por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y fotos): la mano va hacia el techo, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | true | D (HealthMove: «una botella en cada mano»; texto de la fuente en plural) | evidencia | TRUE | Se hace con los dos brazos a la vez (DS-468, matizado) |
| agarre | true | D (fotos): el puño cerrado sobre el peso | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): tumbado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): tumbado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `tumbado`, recursos `cama` y `peso_ligero`, dosis «De 5 a 10 veces.»: coherentes con la adaptación documentada.
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «reposo en cama tras neurocirugía». Coincide con R8.1.
- `notas_etiquetado` actual: «La fuente lo llama "shoulder abduction A", pero describe un empuje hacia el techo.» No hace falta nota de `ambos_brazos`, que no es conservadora (DS-468, matizado).

### Incidencias
- Ninguna en las etiquetas (DS-468, matizado por Claude).

### Propuesta de cambios
- Ninguna más.
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 218. elevacion-lateral-botella-tumbado

### Identificación
- ID: `elevacion-lateral-botella-tumbado`
- Nombre: Abrir el brazo de lado con botella en la cama
- Fuente: University Hospitals Plymouth NHS Trust (Neurocirugía), «Your Bed Rest Exercises», «7. Shoulder Abduction B» (F1, apartado 218)
- Población destinataria de la fuente (si la declara): «reposo en cama en la unidad de neurocirugía» (D, datos comunes de F1). `especifica_de` actual: «reposo en cama tras neurocirugía».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis y en el número de brazos: las fotos de la fuente abren los dos a la vez y HealthMove usa uno cada vez; el texto no lo dice, así que se documenta como adaptación (Q5; DS-469).

### Evidencia de la fuente
- Ubicación exacta: F1, «7. Shoulder Abduction B» (apartado 218).
- Pasos originales relevantes, resumidos con palabras propias: «Shoulder abduct with shoulders with elbow extended»; peso y repeticiones en blanco. No dice hasta dónde.
- Coincidencias (C1): tumbado, abrir el brazo de lado con el codo estirado.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis y un brazo cada vez (adaptación añadida; DS-469). C3, ninguna.
- Hechos, inferencias e incertidumbres: D (fotos), vista desde arriba, los dos brazos abiertos en cruz a la altura de los hombros, apoyados en la cama, con las manos cerradas. D (texto), el brazo se abre con el codo estirado.
- Limitaciones de la verificación: la evidencia no describe la ilustración de HealthMove; no puedo confirmar R7.6/R7.7.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | true | D (texto): se sostiene un peso | evidencia | TRUE | §4: se sostiene peso añadido |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (fotos): los brazos abiertos en cruz a la altura de los hombros; tumbado, la altura no se puede comparar y el brazo se separa del tronco | conservadora | TRUE | CN-1 (P25): tumbado, el brazo separado del tronco cuenta; nota ya anotada |
| mano_detras | false | D (texto y fotos): el brazo se abre de lado, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | false | D (fotos): los dos brazos se abren a la vez; HealthMove usa un brazo cada vez | evidencia | FALSE | Q1 (P9): las series con un brazo y después con el otro no cuentan; ver DS-469 |
| agarre | true | D (fotos): las manos cerradas sobre el peso | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): tumbado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): tumbado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `tumbado`, recursos `cama` y `peso_ligero`, dosis «De 5 a 10 veces con cada brazo.»: coherentes con la adaptación documentada.
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «reposo en cama tras neurocirugía». Coincide con R8.1.
- `notas_etiquetado` actual: «La fuente no dice hasta dónde se abre el brazo. [conservadora] brazo_sobre_hombro: …». Correcta como nota conservadora. No propongo cambiarla.

### Incidencias
- La diferencia de ejecución no constaba en `adaptaciones` (DS-469); Claude la añadió: «Las fotos de la fuente abren los dos brazos a la vez; aquí se hace con un brazo cada vez.» La nota cita ahora las fotos (brazos en cruz, a la altura de los hombros).

### Propuesta de cambios
- `adaptaciones`: añadida la diferencia de ejecución (Q5: solo la imagen la muestra; DS-469). `notas_etiquetado`: añade lo que muestran las fotos.
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 219. flexion-hombro-botella-tumbado

### Identificación
- ID: `flexion-hombro-botella-tumbado`
- Nombre: Subir el brazo con botella en la cama
- Fuente: University Hospitals Plymouth NHS Trust (Neurocirugía), «Your Bed Rest Exercises», «5. Shoulder Flexion» (F1, apartado 219)
- Población destinataria de la fuente (si la declara): «reposo en cama en la unidad de neurocirugía» (D, datos comunes de F1). `especifica_de` actual: «reposo en cama tras neurocirugía».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis.
- Variante de: `elevacion-brazos-tumbado` (contexto, no auditado).

### Evidencia de la fuente
- Ubicación exacta: F1, «5. Shoulder Flexion» (apartado 219).
- Pasos originales relevantes, resumidos con palabras propias: tumbado, el brazo junto al cuerpo; empezar con la mano hacia el suelo y terminar con la mano hacia la pared de detrás; peso y repeticiones en blanco.
- Coincidencias (C1): tumbado, el brazo junto al cuerpo, subir el brazo por encima de la cabeza, bajar.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis. C3, ninguna.
- Hechos, inferencias e incertidumbres: D (fotos), el brazo pasa de junto al cuerpo a por encima de la cabeza, con flechas.
- Limitaciones de la verificación: la evidencia no describe la ilustración de HealthMove; no puedo confirmar R7.6/R7.7.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | true | D (texto): se sostiene un peso | evidencia | TRUE | §4: se sostiene peso añadido |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (fotos): el brazo sube por encima de la cabeza | evidencia | TRUE | §4: codo o mano por encima del hombro |
| mano_detras | false | D (texto y fotos): la mano va hacia la pared de detrás, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | false | D (texto y fotos): un brazo cada vez | evidencia | FALSE | Q1 (P9): series con un brazo y después con el otro |
| agarre | true | D (fotos): la mano sujeta el peso | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): tumbado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): tumbado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `tumbado`, recursos `cama` y `peso_ligero`, dosis «De 5 a 10 veces con cada brazo.»: coherentes con la adaptación documentada.
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «reposo en cama tras neurocirugía». Coincide con R8.1.
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 220. marcha-apertura-brazos-sentado

### Identificación
- ID: `marcha-apertura-brazos-sentado`
- Nombre: Marchar abriendo los brazos
- Fuente: NHS Grampian (Fisioterapia), «Parkinson's disease: Seated exercises» (folleto 1968, diciembre de 2021), «Warm up exercise 1: Marching with opening arms» (F2, apartado 220)
- Población destinataria de la fuente (si la declara): «enfermedad de Parkinson» (D, datos comunes de F2). `especifica_de` actual: «párkinson».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis (la fuente da 1 minuto; HealthMove también). Sin diferencias.
- Variante de: `marcha-sentado-manos-cadera` (contexto, no auditado).

### Evidencia de la fuente
- Ubicación exacta: F2, «Warm up exercise 1: Marching with opening arms» (apartado 220).
- Pasos originales relevantes, resumidos con palabras propias: sentado erguido con los pies en el suelo; levantar las piernas por turnos como marchando; a la vez, abrir y cerrar los brazos; 1 minuto.
- Coincidencias (C1): sentado, levantar las piernas por turnos, abrir y cerrar los brazos, 1 minuto.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (fotos), de frente, sentada; inicio con los dos brazos estirados al frente a la altura del pecho; final con los dos brazos abiertos en cruz a la altura de los hombros.
- Limitaciones de la verificación: la evidencia no describe la ilustración de HealthMove; no puedo confirmar R7.6/R7.7.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: calentamiento de 1 minuto; la fuente no lo presenta como esfuerzo que agite | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (fotos): los brazos se abren a la altura de los hombros, sin pasar por encima | evidencia | FALSE | — |
| mano_detras | false | D (texto y fotos): los brazos van al frente y a los lados, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y fotos): los dos brazos se abren y cierran a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto y fotos): las manos no sujetan nada | evidencia | FALSE | — |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | true | D (texto): «levantar las piernas por turnos»; el muslo se acerca al tronco | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): «sentado erguido» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis «Durante 1 minuto.»: coherentes con F2.
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «párkinson». Coincide con R8.1.
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 221. toques-laterales-brazos-arriba-sentado

### Identificación
- ID: `toques-laterales-brazos-arriba-sentado`
- Nombre: Pie al lado y brazos arriba
- Fuente: NHS Grampian (Fisioterapia), «Parkinson's disease: Seated exercises», «Warm up exercise 2: Side taps with arms up» (F2, apartado 221)
- Población destinataria de la fuente (si la declara): «enfermedad de Parkinson» (D, datos comunes de F2). `especifica_de` actual: «párkinson».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento.

### Evidencia de la fuente
- Ubicación exacta: F2, «Warm up exercise 2: Side taps with arms up» (apartado 221).
- Pasos originales relevantes, resumidos con palabras propias: sentado erguido; llevar una pierna hacia el lado mientras se empujan los brazos hacia arriba; volver y bajar los brazos; alternar; 1 minuto.
- Coincidencias (C1): sentado, una pierna hacia el lado, los dos brazos hacia arriba, alternar, 1 minuto.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (foto), de frente, sentada, los dos brazos estirados por encima de la cabeza y una pierna estirada hacia el lado.
- Limitaciones de la verificación: la evidencia no describe la ilustración de HealthMove; no puedo confirmar R7.6/R7.7.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: calentamiento de 1 minuto; la fuente no lo presenta como esfuerzo que agite | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (foto): los dos brazos estirados por encima de la cabeza | evidencia | TRUE | §4: codo o mano por encima del hombro |
| mano_detras | false | D (texto y foto): los brazos van hacia arriba, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y foto): los dos brazos empujan hacia arriba a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto y foto): las manos no sujetan nada | evidencia | FALSE | — |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): la pierna se lleva hacia el lado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): «sentado erguido» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis «Durante 1 minuto.»: coherentes con F2.
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «párkinson». Coincide con R8.1.
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 222. arrancar-cortacesped-sentado

### Identificación
- ID: `arrancar-cortacesped-sentado`
- Nombre: Como si arrancaras un cortacésped
- Fuente: NHS Grampian (Fisioterapia), «Parkinson's disease: Seated exercises», «Main exercise 6: Start the lawnmower» (F2, apartado 222)
- Población destinataria de la fuente (si la declara): «enfermedad de Parkinson» (D, datos comunes de F2). `especifica_de` actual: «párkinson».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en el ritmo (la fuente pide «With speed and force»; HealthMove lo hace a ritmo moderado) y en la dosis.

### Evidencia de la fuente
- Ubicación exacta: F2, «Main exercise 6: Start the lawnmower» (apartado 222).
- Pasos originales relevantes, resumidos con palabras propias: sentado erguido; bajar un brazo cruzando el cuerpo; «With speed and force», tirar del brazo hacia arriba y cruzando el cuerpo, como si se arrancara un cortacésped; terminar con el brazo estirado y el tronco girado; volver despacio; repeticiones en blanco.
- Coincidencias (C1): sentado, bajar una mano cruzando el cuerpo, tirar hacia arriba y hacia fuera girando el tronco, volver despacio.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, el ritmo (la fuente pide velocidad y fuerza; HealthMove lo hace a ritmo moderado) y la dosis. C3, ninguna.
- Hechos, inferencias e incertidumbres: D (fotos), la mano baja hacia el pie contrario con el tronco inclinado y girado; después el brazo por encima de la cabeza y en diagonal, con el tronco girado. D (fotos), la mano no sujeta nada: es un gesto simulado.
- Limitaciones de la verificación: la evidencia no describe la ilustración de HealthMove; no puedo confirmar R7.6/R7.7.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento con control, sin fase en el aire | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda; el gesto es simulado | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local; la fuente no lo presenta como esfuerzo que agite | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (fotos): el brazo termina por encima de la cabeza | evidencia | TRUE | §4: codo o mano por encima del hombro |
| mano_detras | false | D (texto y fotos): la mano va al pie contrario y luego arriba, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): un brazo cada vez; la otra mano no trabaja | evidencia | FALSE | Q1 (P9): series con un brazo y después con el otro |
| agarre | true | D (texto): «como si cogieras la cuerda de arranque»; la mano se cierra aunque no haya objeto | evidencia | TRUE | §4: cerrar la mano, con o sin objeto, aunque sea en parte |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): la mano baja hacia el pie, pero el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (fotos): el tronco se inclina al bajar la mano; la evidencia no dice que pase de una inclinación leve | conservadora | TRUE | R2.1: ante la duda, `true` conservador con nota (ver DS-470) |
| rotacion_tronco | true | D (texto y fotos): el tronco gira al tirar del brazo | evidencia | TRUE | §4: girar los hombros respecto a la cadera |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis «De 5 a 10 veces con cada brazo.»: coherentes con la adaptación documentada.
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «párkinson». Coincide con R8.1.
- `notas_etiquetado` actual: vacío. Falta la nota `[conservadora]` de `inclinacion_tronco` (DS-470).

### Incidencias
- `inclinacion_tronco: false` con fotos que muestran el tronco inclinado al bajar la mano (DS-470).

### Propuesta de cambios
- `exigencias.inclinacion_tronco`: `false` → `true` conservador (R2.1; ver DS-470).
- `notas_etiquetado`: añadir la nota `[conservadora]` de `inclinacion_tronco` en la forma de R2.4 (DS-470).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 223. estiramiento-isquios-pie

### Identificación
- ID: `estiramiento-isquios-pie`
- Nombre: Estirar la parte de atrás del muslo de pie
- Fuente: NHS Grampian (Fisioterapia), «Parkinson's disease: Seated exercises», «Main exercise 10b: Stretch while standing» (F2, apartado 223)
- Población destinataria de la fuente (si la declara): «enfermedad de Parkinson» (D, datos comunes de F2). `especifica_de` actual: «párkinson».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C3 en el movimiento: HealthMove invierte qué rodilla se dobla (ver DS-471).

### Evidencia de la fuente
- Ubicación exacta: F2, «Main exercise 10b: Stretch while standing» (apartado 223).
- Pasos originales relevantes, resumidos con palabras propias: de pie, sujetándose al respaldo de una silla o a la encimera; un pie delante del otro; «Bend your front leg and keep your back leg straight»; inclinarse suavemente hacia delante hasta notar el estiramiento en la parte de atrás de la pierna; 20 s; dos veces con cada pierna.
- Coincidencias (C1): de pie, sujeto al respaldo, un pie delante del otro, inclinarse suavemente hacia delante, 20 s, dos veces con cada pierna.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, HealthMove dice «Dobla la rodilla de la pierna de atrás y deja recta la de delante», al revés que la fuente (ver DS-471). C2, ninguna.
- Hechos, inferencias e incertidumbres: D (texto), la rodilla de delante se dobla y la de atrás queda recta. D (foto), de pie, de perfil, una mano en el respaldo; la rodilla de delante doblada y la pierna de atrás estirada.
- Limitaciones de la verificación: la evidencia no describe la ilustración de HealthMove; Claude la corrigió (`depie.mjs`), pero no puedo confirmarlo.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto): «sujetándose al respaldo de una silla» | evidencia | FALSE | §4: se sujeta a algo |
| una_pierna | false | D (texto y foto): un pie delante del otro, con el peso repartido | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: estiramiento estático | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento estático | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y foto): la mano en el respaldo, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y foto): la mano en el respaldo, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | false | D (texto y foto): una mano en el respaldo; el otro brazo no trabaja | evidencia | FALSE | Q1 (P9): una mano se apoya y el otro brazo no trabaja; no hay uso simultáneo ni alternancia |
| agarre | true | D (texto): «sujetándose al respaldo» | evidencia | TRUE | §4: sujetarse a una silla es agarre |
| peso_en_manos | false | D: de pie; la mano se apoya, no soporta el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y foto): la rodilla de delante se dobla, sin que conste que pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie, con el pie entero apoyado | evidencia | FALSE | — |
| inclinacion_tronco | true | D (texto): «inclinarse suavemente hacia delante» | evidencia | TRUE | §4: inclinar la espalda hacia delante más allá de una inclinación leve; la fuente no da ángulo (Q3) |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `de_pie`, recurso `silla`, dosis «Mantén 20 segundos. 2 veces con cada pierna.»: coherentes con F2.
- Ilustración: la evidencia dice que Claude la corrigió (`depie.mjs`): la rodilla de delante doblada y la pierna de atrás estirada. No puedo confirmarlo.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «párkinson». Coincide con R8.1.
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- La instrucción de HealthMove invierte qué rodilla se dobla (DS-471).

### Propuesta de cambios
- `instrucciones`: corregida hacia la fuente («Dobla la rodilla de delante y deja recta la pierna de atrás.») (DS-471). Ilustración corregida por Claude (`depie.mjs`).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 224. limpiaparabrisas-pie-sentado

### Identificación
- ID: `limpiaparabrisas-pie-sentado`
- Nombre: Mover el pie como un limpiaparabrisas
- Fuente: North Cheshire and Mersey (MSK Physiotherapy OCATS), «Ankle Mobility Exercises», «Active Ankle Inversion & Eversion» (F3, apartado 224)
- Población destinataria de la fuente (si la declara): «rigidez de tobillo en rehabilitación, con instrucción previa del fisioterapeuta» (D, datos comunes de F3). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en `especifica_de` (la fuente declara población y el campo está vacío).

### Evidencia de la fuente
- Ubicación exacta: F3, «Active Ankle Inversion & Eversion» (apartado 224).
- Pasos originales relevantes, resumidos con palabras propias: sentado con el talón apoyado en el suelo; mover el pie de lado a lado como un limpiaparabrisas (hacia abajo y dentro, hacia arriba y fuera); procurar no mover la rodilla; 1 minuto, a menudo durante el día.
- Coincidencias (C1): sentado, el talón apoyado, mover el pie de lado a lado, no mover la rodilla, 1 minuto.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, `especifica_de` vacío y la fuente declara población (ver DS-472). C2, ninguna.
- Hechos, inferencias e incertidumbres: D (fotos), detalle del pie con el talón en el suelo y la pierna algo estirada; flechas de inversión y eversión.
- Limitaciones de la verificación: la evidencia no describe la ilustración de HealthMove; no puedo confirmar R7.6/R7.7.

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
| flexion_profunda_rodilla | false | D (texto y fotos): la pierna algo estirada, sin que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis «Durante 1 minuto.»: coherentes con F3.
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente declara población (D); ver DS-472.
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- `especifica_de` vacío con población declarada (DS-472).

### Propuesta de cambios
- `fuente.especifica_de`: «tobillo» (R8.1; con la forma corta de los lotes anteriores, como «hombro» o «cadera»; DS-472).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 225. deslizar-toalla-pared

### Identificación
- ID: `deslizar-toalla-pared`
- Nombre: Deslizar una toalla por la pared
- Fuente: North Cheshire and Mersey (OCATS), «Shoulder ROM Exercises», «Wall Slides with Towel or Equivalent Exercise» (F4, apartado 225)
- Población destinataria de la fuente (si la declara): «rigidez de hombro en rehabilitación, con instrucción previa del fisioterapeuta» (D, datos comunes de F4). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis (la fuente propone 5 minutos; HealthMove unos 2). C3 en `especifica_de`.

### Evidencia de la fuente
- Ubicación exacta: F4, «Wall Slides with Towel or Equivalent Exercise» (apartado 225).
- Pasos originales relevantes, resumidos con palabras propias: de cara a la pared «with a towel in your hand, held at shoulder height»; deslizar la toalla arriba y abajo, en diagonal, en círculos y dibujando el abecedario; unos 5 minutos, alrededor de 1 por movimiento; es normal notar algo de molestia al principio.
- Coincidencias (C1): de pie, de cara a la pared, la toalla bajo la mano, deslizar arriba y abajo, en diagonal y en círculos.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis (5 minutos; HealthMove unos 2). C3, `especifica_de` vacío (ver DS-472). C3 posible: la fuente dice «held» y la foto muestra la palma abierta (ver DS-473).
- Hechos, inferencias e incertidumbres: D (texto), la toalla en la mano a la altura del hombro. D (foto), la palma abierta apoyada sobre la toalla contra la pared, algo por encima de la cabeza; no se ve que los dedos la agarren.
- Limitaciones de la verificación: la evidencia no describe la ilustración de HealthMove; no puedo confirmar R7.6/R7.7.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto): de cara a la pared, con la mano en ella | evidencia | FALSE | §4: se apoya en algo |
| una_pierna | false | D: de pie, con el peso repartido | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y foto): la mano sube por encima de la cabeza | evidencia | TRUE | §4: codo o mano por encima del hombro |
| mano_detras | false | D (texto y foto): la mano va a la pared, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | false | D (texto y foto): una mano en la pared; el otro brazo no trabaja | evidencia | FALSE | Q1 (P9): una mano se apoya y el otro brazo no trabaja |
| agarre | true | D (texto): «held»; la foto muestra la palma abierta | conservadora | TRUE | Q2 (P10): el contacto sin prensión se marca conservador; ver DS-473 |
| peso_en_manos | false | D: de pie; la mano se apoya, no soporta el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: de pie, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie, con el pie entero apoyado | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `de_pie`, recursos `pared` y `toalla`, dosis «Alrededor de 1 minuto por movimiento.»: coherentes con la adaptación documentada.
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente declara población (D); ver DS-472.
- `notas_etiquetado` actual: «[conservadora] agarre: la fuente dice «held» (Q2). Se cerraría con: la imagen de la fuente.» La imagen ya está en la evidencia (palma abierta); ver DS-473.

### Incidencias
- `especifica_de` vacío con población declarada (DS-472).
- La nota de `agarre` remite a una imagen que la evidencia ya recoge (DS-473).

### Propuesta de cambios
- `fuente.especifica_de`: «hombro» (R8.1; forma corta de los lotes anteriores; DS-472).
- `notas_etiquetado`: actualizar la nota de `agarre` con la imagen de la fuente (DS-473).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 226. estiramiento-pecho-pared

### Identificación
- ID: `estiramiento-pecho-pared`
- Nombre: Estirar el pecho en la pared
- Fuente: North Cheshire and Mersey (OCATS), «Shoulder ROM Exercises», «Standing Pec Stretch Against Wall» (F4, apartado 226)
- Población destinataria de la fuente (si la declara): «rigidez de hombro en rehabilitación, con instrucción previa del fisioterapeuta» (D, datos comunes de F4). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis (la fuente propone 5 repeticiones y 3 series; HealthMove acorta). C3 en `especifica_de`.

### Evidencia de la fuente
- Ubicación exacta: F4, «Standing Pec Stretch Against Wall» (apartado 226).
- Pasos originales relevantes, resumidos con palabras propias: estirar el brazo con la mano contra el marco de una puerta o la pared, a la altura del pecho; girar el tronco alejándose del brazo hasta notar el estiramiento; 30 s; al soltar el aire, girar un poco más y mantener otros 30 s; 5 veces, 3 series.
- Coincidencias (C1): de pie, el brazo estirado con la mano en la pared, girar el tronco alejándose, 30 s, girar un poco más.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis. C3, `especifica_de` vacío (ver DS-472).
- Hechos, inferencias e incertidumbres: D (foto), de pie, de lado a la pared, el brazo estirado a la altura del hombro y la palma apoyada en la pared. I (texto), la palma se apoya, pero el peso del cuerpo no recae en ella.
- Limitaciones de la verificación: la evidencia no describe la ilustración de HealthMove; Claude la corrigió (`depie.mjs`), pero no puedo confirmarlo.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto): de pie, con la mano en la pared | evidencia | FALSE | §4: se apoya en algo |
| una_pierna | false | D: de pie, con el peso repartido | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: estiramiento estático | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento estático | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y foto): el brazo estirado a la altura del hombro, sin pasar por encima | evidencia | FALSE | — |
| mano_detras | false | D (texto y foto): la mano va a la pared, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | false | D (texto y foto): un brazo en la pared; el otro no trabaja | evidencia | FALSE | Q1 (P9): una mano se apoya y el otro brazo no trabaja |
| agarre | false | D (texto y foto): la palma se apoya en la pared, sin prensión ni objeto | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: de pie; la mano se apoya, no soporta el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: de pie, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie, con el pie entero apoyado | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): el tronco gira, no se inclina | evidencia | FALSE | — |
| rotacion_tronco | true | D (texto): «girar el tronco alejándose del brazo» | evidencia | TRUE | §4: girar los hombros respecto a la cadera |

### Otros campos
- Fase `calma`, posición `de_pie`, recurso `pared`, dosis «Mantén 30 segundos. 2 veces con cada brazo.»: coherentes con la adaptación documentada.
- Ilustración: la evidencia dice que Claude la corrigió (`depie.mjs`): el brazo estirado a la altura del hombro. No puedo confirmarlo.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente declara población (D); ver DS-472.
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- `especifica_de` vacío con población declarada (DS-472).

### Propuesta de cambios
- `fuente.especifica_de`: «hombro» (R8.1; forma corta de los lotes anteriores; DS-472). Ilustración corregida por Claude (`depie.mjs`): el brazo estirado a la altura del hombro (R7.6).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## Revisión de DeepSeek

**Consulta C27** (dos bloques, con «FIN DEL BORRADOR»). Análisis: `deepseek/analisis-claude/fase-26-lote26.md`.

**Aceptado:** DS-467 (el tiempo en blanco en la adaptación de 216), DS-470 (`inclinacion_tronco` conservadora en 222), DS-471 (instrucción de 223 corregida hacia la fuente), DS-473 (nota de `agarre` de 225 con la foto).

**Corregido por Claude:**
- DS-468: `ambos_brazos` de 217 no es conservador; HealthMove pide una botella en cada mano y el texto de la fuente habla en plural. No se añade nota.
- DS-469: la diferencia solo está en las fotos, así que por Q5 se documenta como adaptación (no queda PENDIENTE DE DECISIÓN). La adaptación queda para la aprobación del usuario, como las demás.
- DS-472: `especifica_de` con la forma corta de los lotes anteriores («tobillo», «hombro»), no «rigidez de…».

## Resumen del lote

- **11 ejercicios auditados por primera vez con el protocolo 1.0.** Los 11 quedan LISTOS PARA APROBACIÓN DOCUMENTAL, con los cambios aplicados.
- **Corrección hacia la fuente:** `estiramiento-isquios-pie` (qué rodilla se dobla), con su ilustración.
- **Cambio de etiqueta:** `arrancar-cortacesped-sentado`, `inclinacion_tronco` → `true` conservador.
- **Adaptaciones nuevas o ampliadas (Q5):** 216 (el tiempo en blanco) y 218 (un brazo cada vez).
- **`especifica_de` nuevo:** «tobillo» (224) y «hombro» (225 y 226).
- **Ilustraciones corregidas:** 2.
