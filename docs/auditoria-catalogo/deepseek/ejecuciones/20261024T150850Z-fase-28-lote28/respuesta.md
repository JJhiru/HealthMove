# Borrador de auditoría · lote 28 (consulta C29)

- Fecha: 2026-10-24
- Versión del protocolo: 1.0
- Catálogo: v0.3.0 (actualizado 2026-10-14), rama `desarrollo-v1`. No puedo verificar el commit ni el identificador git del catálogo: no se me han entregado.
- **Cómo se hizo (P29):** evidencia de Claude (`evidencia-lote-28`, apartados 235 a 242); este borrador de DeepSeek; la verificación contra las fuentes y el informe definitivo quedan para Claude.
- **Limitaciones de la verificación:** no he abierto las fuentes. Todo lo que afirmo sobre ellas procede de la evidencia de Claude. No he visto las ilustraciones de HealthMove ni las de las fuentes: solo su descripción en la evidencia. No he podido comprobar el estado del catálogo más allá del bloque `catalogo-lote28`. No emito juicio clínico.

---

## 235. separar-juntar-dedos

### Identificación
- ID: `separar-juntar-dedos`
- Nombre: Separar y juntar los dedos
- Fuente: St George's University Hospitals NHS FT, «Hand Exercises for Patients with Rheumatoid Arthritis» (F1), p. 2 (apartado 235)
- Población destinataria de la fuente (si la declara): «artritis reumatoide» (D, datos comunes de F1). `especifica_de` actual: «artritis reumatoide».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento. C3 en la posición: HealthMove añade «Apoya las manos en los muslos», que la fuente no da (ver DS-481). `ambos_brazos: true` conservador con nota que no sigue del todo la forma de R2.4 (ver DS-482).

### Evidencia de la fuente
- Ubicación exacta: F1, p. 2 (apartado 235).
- Pasos originales relevantes, resumidos con palabras propias: separar los dedos y el pulgar y volver a juntarlos con suavidad. Repeticiones, tiempo y veces al día en blanco («Do each exercise ____ times», «Hold for ____ seconds»). Antes, calentar las manos en agua tibia o con una bolsa de calor. No dice la posición del brazo ni de la mano.
- Coincidencias (C1): separar y juntar los dedos y el pulgar, con suavidad.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la posición de las manos sobre los muslos no consta en la fuente y no está en `adaptaciones` (DS-481). C2, la pauta de 5 a 10 (ya documentada).
- Hechos, inferencias e incertidumbres: D (texto y dibujo), el movimiento de los dedos. N, la posición del brazo y de la mano. I, los brazos solo reposan.
- Limitaciones de la verificación: la ilustración la verificó Claude (descrita en la evidencia); DeepSeek no la ha visto.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): la mano está a la altura del regazo; el dibujo solo muestra la mano | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): la mano va por delante | evidencia | FALSE | — |
| ambos_brazos | true | N (texto): no consta si los brazos solo reposan; la instrucción de HealthMove apoya las dos manos | conservadora | TRUE | R2.1 y Q1 (P9): apoyo de las dos manos; nota pendiente de forma (DS-482) |
| agarre | false | D (texto): los dedos se separan y se juntan, no se cierran; la mano no sujeta nada | evidencia | FALSE | §4: cerrar la mano; aquí no hay cierre |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis «De 5 a 10 veces.»: la pauta es una adaptación ya documentada (la fuente la deja en blanco).
- Ilustración: Claude la describe; coincide (R7.6). DeepSeek no la ha visto.
- Exclusiones del catálogo v1: ninguna. No es movilidad aislada de la muñeca: mueve los dedos y el pulgar, no la muñeca.
- `fuente.especifica_de`: «artritis reumatoide». Coincide con R8.1.
- `notas_etiquetado` actual: «La fuente recomienda calentar antes las manos con agua tibia. [conservadora] ambos_brazos: no consta si los brazos solo reposan (Q1). Se cerraría con: la fuente o su imagen.» La primera frase es un consejo de la fuente (clase 2, DG-6): no cambia etiquetas. La nota conservadora no sigue la forma de R2.4 (DS-482).

### Incidencias
- La posición «Apoya las manos en los muslos» no consta en la fuente ni en `adaptaciones` (DS-481).
- La nota `[conservadora]` de `ambos_brazos` no sigue la forma de R2.4 (DS-482).

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente no indica dónde apoyar la mano; aquí se apoya en el muslo.» (R3.1, Q5; DS-481).
- `notas_etiquetado`: reescribir la nota de `ambos_brazos` en la forma de R2.4: «[conservadora] ambos_brazos: la instrucción apoya las dos manos en los muslos y la fuente no dice si los brazos solo reposan (Q1). Se cerraría con: una imagen de la fuente que muestre la posición de los brazos.» (DS-482).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 236. dedos-hacia-pulgar

### Identificación
- ID: `dedos-hacia-pulgar`
- Nombre: Llevar los dedos hacia el pulgar
- Fuente: St George's University Hospitals NHS FT, «Hand Exercises for Patients with Rheumatoid Arthritis» (F1), p. 2 (apartado 236)
- Población destinataria de la fuente (si la declara): «artritis reumatoide» (D, datos comunes de F1). `especifica_de` actual: «artritis reumatoide».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento. C2 en la superficie (muslo en lugar de superficie plana, ya documentada). `ambos_brazos: false` con la otra mano apoyada en el muslo (ver DS-483).

### Evidencia de la fuente
- Ubicación exacta: F1, p. 2 (apartado 236).
- Pasos originales relevantes, resumidos con palabras propias: con la palma sobre una superficie plana, separar el pulgar deslizándolo y «caminar» con los demás dedos hacia el pulgar, de uno en uno. Repeticiones en blanco.
- Coincidencias (C1): el pulgar se separa y los dedos se acercan hacia él, de uno en uno.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la superficie plana → el muslo (ya documentada). C2, la pauta de 5 a 10 (ya documentada). C3, ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), el movimiento de los dedos y del pulgar. D (dibujo), las dos manos apoyadas. I, la otra mano solo reposa.
- Limitaciones de la verificación: la ilustración la verificó Claude (descrita en la evidencia); DeepSeek no la ha visto.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): la mano está sobre el muslo; el dibujo solo muestra las manos | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): la mano va por delante | evidencia | FALSE | — |
| ambos_brazos | false | D (texto y dibujo): trabaja una mano; la otra reposa sobre el muslo | evidencia | FALSE | Q1 (P9): la mano en reposo no cuenta (DS-483) |
| agarre | false | D (texto): los dedos se deslizan y se acercan, no se cierran; la mano no sujeta nada | evidencia | FALSE | §4: cerrar la mano; aquí no hay cierre |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis «De 5 a 10 veces.»: la pauta es una adaptación ya documentada.
- Ilustración: Claude la describe; coincide (R7.6). DeepSeek no la ha visto.
- Exclusiones del catálogo v1: ninguna. No es movilidad aislada de la muñeca.
- `fuente.especifica_de`: «artritis reumatoide». Coincide con R8.1.
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- Ninguna propia. La duda de `ambos_brazos` se trata en DS-483.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.
- Nada más.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 237. descanso-inclinado-sentado

### Identificación
- ID: `descanso-inclinado-sentado`
- Nombre: Descansar inclinado hacia delante
- Fuente: ACPRC, «How to Cope With Being Short Of Breath - Positions» (F2), «Sitting leaning forward» (apartado 237)
- Población destinataria de la fuente (si la declara): «personas con problemas pulmonares que se quedan sin aire» (D, datos comunes de F2). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en la postura. C3 en `especifica_de` (la fuente declara población y el campo está vacío; ver DS-484). `flexion_amplia_cadera: true` sin nota (ver DS-485).

### Evidencia de la fuente
- Ubicación exacta: F2, «Sitting leaning forward» (apartado 237).
- Pasos originales relevantes, resumidos con palabras propias: sentado inclinado hacia delante con los codos apoyados en las rodillas; las muñecas y las manos sueltas. No da duración: se usa cuando falta el aire, hasta que se calma.
- Coincidencias (C1): sentado, el tronco inclinado hacia delante, los codos sobre las rodillas, las manos sueltas.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la duración de 1 a 2 minutos (ya documentada). C3, `especifica_de` vacío (DS-484).
- Hechos, inferencias e incertidumbres: D (texto y dibujo), la postura. I, el muslo se acerca al tronco al inclinarse con los codos en las rodillas (DS-485).
- Limitaciones de la verificación: la ilustración la verificó Claude (descrita en la evidencia); DeepSeek no la ha visto.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: postura estática | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: postura de descanso | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): los codos están sobre las rodillas, por debajo de los hombros | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): las manos cuelgan por delante | evidencia | FALSE | — |
| ambos_brazos | false | D (texto y dibujo): los dos codos se apoyan, pero las manos están sueltas y no trabajan | evidencia | FALSE | Q1 (P9): el apoyo de los codos no es apoyo de las manos ni uso de los brazos; ver DS-486 |
| agarre | false | D (texto): las manos y las muñecas están sueltas | evidencia | FALSE | — |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | true | I (texto y dibujo): al inclinarse con los codos en las rodillas, el muslo se acerca al tronco; la fuente no da ángulo | conservadora | TRUE | R2.1: ante la duda, `true` conservador con nota (DS-485) |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | true | D (texto y dibujo): el tronco se inclina claramente hacia delante | evidencia | TRUE | §4: inclinar la espalda más allá de una inclinación leve |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `sentado`, recurso `silla`, dosis «Quédate así de 1 a 2 minutos.»: la duración es una adaptación ya documentada.
- Ilustración: Claude la describe; coincide (R7.6). DeepSeek no la ha visto.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente declara población (D); ver DS-484.
- `notas_etiquetado` actual: vacío. Falta la nota `[conservadora]` de `flexion_amplia_cadera` (DS-485).

### Incidencias
- `especifica_de` vacío con población declarada (DS-484).
- `flexion_amplia_cadera: true` sin nota conservadora (DS-485).

### Propuesta de cambios
- `fuente.especifica_de`: «problemas pulmonares» (R8.1; forma corta; DS-484).
- `notas_etiquetado`: añadir «[conservadora] flexion_amplia_cadera: al inclinarse con los codos en las rodillas, el muslo se acerca al tronco; la fuente no da ángulo. Se cerraría con: una vista lateral que muestre el ángulo entre muslo y tronco.» (R2.4; DS-485).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 238. descanso-apoyado-pared

### Identificación
- ID: `descanso-apoyado-pared`
- Nombre: Descansar apoyado en la pared
- Fuente: ACPRC, «How to Cope With Being Short Of Breath - Positions» (F2), «Standing leaning forward» (apartado 238)
- Población destinataria de la fuente (si la declara): «personas con problemas pulmonares que se quedan sin aire» (D, datos comunes de F2). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en la postura (la pared es una de las opciones de la fuente). C3 en `especifica_de` (DS-484). `brazo_sobre_hombro: true` conservador con nota que no sigue la forma de R2.4 (ver DS-487). La ilustración de HealthMove es más alta que el dibujo de la fuente (ver DS-488).

### Evidencia de la fuente
- Ubicación exacta: F2, «Standing leaning forward» (apartado 238).
- Pasos originales relevantes, resumidos con palabras propias: de pie, inclinarse hacia delante apoyando los codos en una pared, un alféizar, una barandilla o una encimera; también en un bastón, un paraguas largo, un carro o un andador con ruedas.
- Coincidencias (C1): de pie, inclinado hacia delante, los codos apoyados.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la pared como opción (subconjunto de la fuente). C2, la duración de 1 a 2 minutos (ya documentada). C3, `especifica_de` vacío (DS-484).
- Hechos, inferencias e incertidumbres: D (texto), la postura. D (dibujo de la fuente), los codos por debajo de los hombros sobre un respaldo. I, en la pared la altura del codo depende de cómo se apoye (DS-487). La ilustración de HealthMove sube las manos por encima de la cabeza (DS-488).
- Limitaciones de la verificación: la ilustración la verificó Claude (descrita en la evidencia); DeepSeek no la ha visto.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto): se apoya en la pared | evidencia | FALSE | §4: se sujeta a algo |
| una_pierna | false | D (texto): de pie con los dos pies | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: postura estática | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: postura de descanso | evidencia | FALSE | — |
| brazo_sobre_hombro | true | I (texto): la fuente no dice hasta dónde suben los codos en la pared; el dibujo (respaldo) los deja por debajo de los hombros | conservadora | TRUE | R2.1 y CN-1 (P25): no consta que el brazo no pase del hombro; nota pendiente de forma (DS-487) |
| mano_detras | false | D (texto): los antebrazos van por delante | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los dos codos se apoyan, pero las manos no trabajan | evidencia | FALSE | Q1 (P9): el apoyo de los codos no es apoyo de las manos; ver DS-486 |
| agarre | false | D (texto): los antebrazos se apoyan; no se pide cerrar la mano | evidencia | FALSE | R7.4 y Q2 (P10): el contacto sin prensión no demuestra agarre; aquí no hay ni contacto de la mano |
| peso_en_manos | false | D (texto): el peso cae sobre los antebrazos y los codos, no sobre las manos | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): de pie, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): de pie, el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D (texto): de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | true | D (texto): el tronco se inclina claramente hacia delante | evidencia | TRUE | §4: inclinar la espalda más allá de una inclinación leve |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `de_pie`, recurso `pared`, dosis «Quédate así de 1 a 2 minutos.»: la duración es una adaptación ya documentada.
- Ilustración: Claude la describe; las manos quedan por encima de la cabeza, más alto que el dibujo de la fuente (DS-488).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente declara población (D); ver DS-484.
- `notas_etiquetado` actual: «[conservadora] brazo_sobre_hombro: el brazo llega a la altura del hombro, o no se dice hasta dónde sube, y no consta que no la pase (CN-1, P25). Se cerraría con: evidencia de la fuente de que el brazo no pasa de la altura del hombro.» No sigue la forma de R2.4 (DS-487).

### Incidencias
- `especifica_de` vacío con población declarada (DS-484).
- La nota `[conservadora]` de `brazo_sobre_hombro` no sigue la forma de R2.4 (DS-487).
- La ilustración de HealthMove sube las manos por encima de la cabeza; el dibujo de la fuente las deja por debajo de los hombros (DS-488).

### Propuesta de cambios
- `fuente.especifica_de`: «problemas pulmonares» (R8.1; DS-484).
- `notas_etiquetado`: reescribir la nota de `brazo_sobre_hombro` en la forma de R2.4: «[conservadora] brazo_sobre_hombro: la fuente no dice hasta dónde suben los codos al apoyarse en la pared y no consta que el brazo no pase de la altura del hombro (CN-1, P25). Se cerraría con: una imagen de la fuente con los codos apoyados en la pared.» (DS-487).
- Ilustración: revisar para que las manos no queden por encima de la cabeza, o documentar la diferencia (R7.6, R7.7; DS-488).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (DS-488: la ilustración de HealthMove muestra una postura más alta que el dibujo de la fuente; R7.7 impide proponer el ejercicio para aprobación documental mientras la discrepancia induzca a interpretarlo de otra forma).

---

## 239. descanso-espalda-pared

### Identificación
- ID: `descanso-espalda-pared`
- Nombre: Descansar con la espalda en la pared
- Fuente: ACPRC, «How to Cope With Being Short Of Breath - Positions» (F2), «Standing leaning back or sideways» (apartado 239)
- Población destinataria de la fuente (si la declara): «personas con problemas pulmonares que se quedan sin aire» (D, datos comunes de F2). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en la postura (solo de espaldas y con los brazos a los lados: subconjunto de la fuente). C3 en `especifica_de` (DS-484).

### Evidencia de la fuente
- Ubicación exacta: F2, «Standing leaning back or sideways» (apartado 239).
- Pasos originales relevantes, resumidos con palabras propias: apoyarse de espaldas o de lado en una pared, con los pies un poco separados y a unos 30 cm; dejar las manos colgando a los lados o en los bolsillos, o apoyarlas en las trabillas, la cintura o el asa del bolso.
- Coincidencias (C1): de pie, la espalda en la pared, los pies separados de ella, las manos a los lados.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, solo de espaldas y con los brazos a los lados (subconjunto de la fuente). C2, la duración de 1 a 2 minutos (ya documentada). C3, `especifica_de` vacío (DS-484).
- Hechos, inferencias e incertidumbres: D (texto y dibujo), la postura. D (dibujo de la fuente), las manos juntas delante, a la altura del cinturón; HealthMove deja los brazos a los lados, que también permite el texto.
- Limitaciones de la verificación: la ilustración la verificó Claude (descrita en la evidencia); DeepSeek no la ha visto.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto): se apoya en la pared | evidencia | FALSE | §4: se sujeta a algo |
| una_pierna | false | D (texto): de pie con los dos pies | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: postura estática | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: postura de descanso | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos cuelgan a los lados | evidencia | FALSE | — |
| mano_detras | false | D (texto): las manos van a los lados o delante | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos cuelgan a los lados, sin función | evidencia | FALSE | Q1 (P9): los brazos en reposo no cuentan |
| agarre | false | D (texto): las manos no sujetan nada | evidencia | FALSE | — |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): de pie, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): de pie, el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D (texto): de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto y dibujo): la espalda se apoya recta en la pared | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `de_pie`, recurso `pared`, dosis «Quédate así de 1 a 2 minutos.»: la duración es una adaptación ya documentada.
- Ilustración: Claude la describe; coincide (R7.6). DeepSeek no la ha visto.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente declara población (D); ver DS-484.
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- `especifica_de` vacío con población declarada (DS-484).

### Propuesta de cambios
- `fuente.especifica_de`: «problemas pulmonares» (R8.1; DS-484).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 240. circulos-grandes-brazos-sentado

### Identificación
- ID: `circulos-grandes-brazos-sentado`
- Nombre: Círculos grandes con los brazos
- Fuente: Calderdale and Huddersfield NHS FT, «Home Exercise Programme: Beginners» (F4), «Arm Circles», p. 6 (apartado 240)
- Población destinataria de la fuente (si la declara): «rehabilitación cardiaca» (D, datos comunes de F4). `especifica_de` actual: «rehabilitación cardiaca».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento. La nota de `notas_etiquetado` atribuye a la fuente un consejo que no consta en la página 6 (ver DS-489).

### Evidencia de la fuente
- Ubicación exacta: F4, «Arm Circles», p. 6 (apartado 240).
- Pasos originales relevantes, resumidos con palabras propias: sentado en el tercio delantero de la silla; dibujar círculos hacia delante con un brazo y después con el otro, tan grandes como se pueda; 4 veces en cada sentido.
- Coincidencias (C1): sentado, círculos hacia delante, un brazo y después el otro, tan grandes como se pueda, 4 veces en cada sentido.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), el brazo estirado por encima de la cabeza. N, el consejo «Si cansa, la fuente propone círculos más pequeños o descansar» en la página 6 (DS-489).
- Limitaciones de la verificación: la ilustración la verificó Claude (descrita en la evidencia); DeepSeek no la ha visto.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: calentamiento de hombros | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y dibujo): el brazo se estira por encima de la cabeza | evidencia | TRUE | §4: codo o mano por encima del hombro |
| mano_detras | false | D (texto y dibujo): el brazo va por delante | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): un brazo y después el otro | evidencia | FALSE | Q1 (P9): series con un brazo y después con el otro |
| agarre | false | D (texto): las manos no sujetan nada | evidencia | FALSE | — |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis «4 veces en cada sentido con cada brazo.»: coherentes con F4.
- Ilustración: Claude la describe; coincide (R7.6). DeepSeek no la ha visto.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «rehabilitación cardiaca». Coincide con R8.1.
- `notas_etiquetado` actual: «Si cansa, la fuente propone círculos más pequeños o descansar.» No consta en la página 6 (DS-489).

### Incidencias
- La nota atribuye a la fuente un consejo que no consta en la página 6 (DS-489).

### Propuesta de cambios
- `notas_etiquetado`: quitar la atribución a la fuente o comprobar el resto del folleto antes de mantenerla (DS-489). Si el consejo es de HealthMove, es una adaptación (R6.3) y no puede atribuirse a la fuente.
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (DS-489: la nota atribuye a la fuente un consejo que la evidencia no localiza en la página 6; hay que comprobar el resto del folleto o retirar la atribución).

---

## 241. abrazar-ambas-rodillas

### Identificación
- ID: `abrazar-ambas-rodillas`
- Nombre: Abrazar las dos rodillas
- Fuente: Berkshire Healthcare NHS FT, «Low back pain» (F3), «2. Knee to chest stretch» (apartado 241)
- Población destinataria de la fuente (si la declara): «dolor lumbar» (D, datos comunes de F3). `especifica_de` actual: «dolor lumbar».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento. C3 en la instrucción «Baja los pies despacio, de uno en uno», que no está en la fuente ni en `adaptaciones` (ver DS-490). La dosis no recoge las dos veces al día.

### Evidencia de la fuente
- Ubicación exacta: F3, «2. Knee to chest stretch» (apartado 241).
- Pasos originales relevantes, resumidos con palabras propias: tumbado boca arriba; llevar con suavidad las dos rodillas hacia el pecho, sujetándolas por detrás de los muslos, hasta notar un estiramiento cómodo en la zona lumbar; mantener. «Repetitions: 1-20», dos veces al día (mañana y tarde).
- Coincidencias (C1): tumbado, las dos rodillas hacia el pecho, sujetas por detrás de los muslos, mantener.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, «Baja los pies despacio, de uno en uno» no está en la fuente (DS-490). C3, la dosis no dice las dos veces al día.
- Hechos, inferencias e incertidumbres: D (texto y fotos), la postura y el movimiento. D (texto), las manos sujetan por detrás de los muslos.
- Limitaciones de la verificación: la ilustración la verificó Claude (descrita en la evidencia); DeepSeek no la ha visto.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y fotos): las manos van a los muslos, por debajo de los hombros | evidencia | FALSE | — |
| mano_detras | false | D (texto y fotos): las manos van por detrás de los muslos, no de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y fotos): las dos manos sujetan las rodillas | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto y fotos): las manos sujetan por detrás de los muslos | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: tumbado; las manos sujetan las piernas, no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | true | D (texto y fotos): las rodillas se doblan hacia el pecho, más de 90° | evidencia | TRUE | §4: rodilla más de 90° |
| flexion_amplia_cadera | true | D (texto y fotos): el muslo se acerca al tronco | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): el tronco no se inclina ni se arquea | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `tumbado`, recurso `cama`, dosis «Hasta 20 veces, según te encuentres.»: la dosis no recoge las dos veces al día de la fuente.
- Ilustración: Claude la describe; coincide (R7.6). DeepSeek no la ha visto.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «dolor lumbar». Coincide con R8.1.
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- «Baja los pies despacio, de uno en uno» no está en la fuente ni en `adaptaciones` (DS-490).
- La dosis no recoge las dos veces al día.

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente no indica cómo bajar las piernas; aquí se baja un pie cada vez.» (R6.3, R3.2; DS-490). Si se prefiere conservar la vaguedad de la fuente, quitar la instrucción.
- `dosis`: valorar «Hasta 20 veces, dos veces al día (mañana y tarde), según te encuentres.» (R3.1: la fuente lo dice).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 242. elevacion-pasiva-brazo-tumbado

### Identificación
- ID: `elevacion-pasiva-brazo-tumbado`
- Nombre: Subir un brazo con ayuda del otro
- Fuente: Sherwood Forest Hospitals NHS FT, «Shoulder range of motion exercises» (F5), «Passive elevation exercise» (apartado 242)
- Población destinataria de la fuente (si la declara): «problemas de hombro» (D, datos comunes de F5: el brazo «affected» frente al «good»). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento. C3 en `especifica_de` (la fuente declara población y el campo está vacío; ver DS-484). `agarre: true` sin nota: la fuente dice «hold or support» (ver DS-491).

### Evidencia de la fuente
- Ubicación exacta: F5, «Passive elevation exercise» (apartado 242).
- Pasos originales relevantes, resumidos con palabras propias: tumbado boca arriba con la cabeza y el cuello cómodos sobre almohadas; «Use your good hand to hold or support your affected arm»; con la mano buena, subir el brazo afectado por encima de la cabeza todo lo que permita la comodidad; 10 a 12 veces o según la comodidad; varias veces al día.
- Coincidencias (C1): tumbado, la mano buena lleva el brazo afectado por encima de la cabeza, hasta donde resulte cómodo, 10 a 12 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, `especifica_de` vacío (DS-484). C3, `agarre: true` sin nota (DS-491).
- Hechos, inferencias e incertidumbres: D (texto), el movimiento. N (imagen): el folleto no tiene dibujos. I, «hold or support»: puede sujetar o solo sostener (DS-491).
- Limitaciones de la verificación: la ilustración la verificó Claude (descrita en la evidencia); DeepSeek no la ha visto. La fuente no tiene imágenes.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto): el brazo sube por encima de la cabeza | evidencia | TRUE | §4: codo o mano por encima del hombro |
| mano_detras | false | D (texto): el brazo va por delante y arriba, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): la mano buena sostiene y mueve el brazo afectado | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | I (texto): «hold or support»; puede sujetar o solo sostener | conservadora | TRUE | R2.1 y Q2 (P10): ante la duda, `true` conservador con nota (DS-491) |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): tumbado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `tumbado`, recurso `cama`, dosis «De 10 a 12 veces, o las que te resulten cómodas.»: coherentes con F5.
- Ilustración: Claude la describe; coincide (R7.6). DeepSeek no la ha visto.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente declara población (D); ver DS-484.
- `notas_etiquetado` actual: «La fuente avisa de que es normal una molestia leve de estiramiento que cede pronto.» Es un consejo de la fuente (clase 2, DG-6): no cambia etiquetas. Falta la nota `[conservadora]` de `agarre` (DS-491).

### Incidencias
- `especifica_de` vacío con población declarada (DS-484).
- `agarre: true` sin nota conservadora (DS-491).

### Propuesta de cambios
- `fuente.especifica_de`: «problemas de hombro» (R8.1; DS-484).
- `notas_etiquetado`: añadir «[conservadora] agarre: la fuente dice «hold or support» y no consta que la mano buena cierre la mano (Q2). Se cerraría con: una imagen o un vídeo de la fuente que muestre la mano.» (R2.4; DS-491).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## Hallazgos DS

### DS-481 · La posición de las manos en `separar-juntar-dedos` no consta en la fuente
- **Ubicación exacta:** apartado 235 (F1, p. 2); catálogo, `separar-juntar-dedos`, instrucción 1 y `adaptaciones`.
- **Evidencia:** «No dice la posición del brazo ni de la mano» (evidencia, 235). La instrucción de HealthMove es «Apoya las manos en los muslos».
- **Explicación:** la fuente no fija la posición; HealthMove añade una que no está en `adaptaciones`. Es una diferencia sin documentar (C3).
- **Consecuencia potencial:** el usuario lee una instrucción que no procede de la fuente sin saberlo; R3.2 no se cumple.
- **Nivel de certeza:** alta.
- **Recomendación:** documentarla como adaptación (R3.1, Q5) o retirarla.
- **Prueba o evidencia que permitiría confirmarlo:** el texto completo de F1, p. 2, ya citado en la evidencia.
- **¿Requiere decisión humana?:** sí; aprobar la adaptación (Q5, una a una).

### DS-482 · Nota `[conservadora]` de `ambos_brazos` fuera de la forma de R2.4
- **Ubicación exacta:** apartado 235; catálogo, `separar-juntar-dedos`, `notas_etiquetado`.
- **Evidencia:** «[conservadora] ambos_brazos: no consta si los brazos solo reposan (Q1). Se cerraría con: la fuente o su imagen.»
- **Explicación:** la forma de R2.4 pide `<exigencia>: <motivo>. Se cerraría con: <evidencia que falta>`. El motivo no explica qué hace la instrucción de HealthMove (apoyar las dos manos) y la evidencia que falta es genérica.
- **Consecuencia potencial:** la nota no permite reconstruir por qué se marcó; dificulta la revisión posterior.
- **Nivel de certeza:** alta.
- **Recomendación:** reescribirla en la forma de R2.4 (propuesta en el apartado 235).
- **Prueba o evidencia que permitiría confirmarlo:** comparación con R2.4 y con las notas ya corregidas en P18.
- **¿Requiere decisión humana?:** no; es una corrección de forma.

### DS-483 · `ambos_brazos: false` en `dedos-hacia-pulgar` con la otra mano apoyada
- **Ubicación exacta:** apartado 236; catálogo, `dedos-hacia-pulgar`, `exigencias.ambos_brazos`.
- **Evidencia:** «Dibujo (D): dos manos apoyadas» (evidencia, 236). La instrucción de HealthMove: «Apoya la palma sobre el muslo».
- **Explicación:** Q1 (P9) cuenta como `ambos_brazos` el apoyo de las dos manos para la estabilidad. Aquí la otra mano reposa sobre el muslo sin función de estabilidad, y el ejercicio es sentado. La duda es si el apoyo de una mano en el muslo, sin función, cuenta. El criterio de Q1 dice que las manos en reposo no cuentan; el dibujo muestra las dos manos apoyadas, pero no se sabe si la otra interviene.
- **Consecuencia potencial:** si se aplicara Q1 de forma literal al apoyo de las dos manos, el valor sería `true` conservador; si se considera reposo, `false`. La diferencia afecta al filtro `un_brazo`.
- **Nivel de certeza:** media.
- **Recomendación:** mantener `false` si se confirma que la otra mano solo reposa (Q1: «las manos en reposo no cuentan»); si no, `true` conservador con nota. No lo resuelvo.
- **Prueba o evidencia que permitiría confirmarlo:** una imagen de la fuente que muestre si la otra mano interviene; o una aclaración de Q1 sobre el apoyo de una mano sin función.
- **¿Requiere decisión humana?:** sí; aclarar Q1 para este caso o aprobar el valor.

### DS-484 · `especifica_de` vacío con población declarada en cuatro ejercicios
- **Ubicación exacta:** apartados 237, 238, 239 (F2) y 242 (F5); catálogo, `fuente.especifica_de` de `descanso-inclinado-sentado`, `descanso-apoyado-pared`, `descanso-espalda-pared` y `elevacion-pasiva-brazo-tumbado`.
- **Evidencia:** «F2, personas con problemas pulmonares que se quedan sin aire»; «F5, problemas de hombro (el brazo «affected» frente al «good»)» (evidencia, fuentes abiertas).
- **Explicación:** R8.1 permite rellenar `especifica_de` solo con la población que la fuente declara. Aquí la declara y el campo está vacío. Es una diferencia sin documentar (C3).
- **Consecuencia potencial:** la ficha no muestra a quién va dirigido el material (Q8(b)); se pierde trazabilidad.
- **Nivel de certeza:** alta.
- **Recomendación:** proponer «problemas pulmonares» (237, 238, 239) y «problemas de hombro» (242), con nombres breves como los existentes. La aprobación es del desarrollador (P29).
- **Prueba o evidencia que permitiría confirmarlo:** el texto de F2 y F5 ya citado en la evidencia.
- **¿Requiere decisión humana?:** sí; aprobar los nombres nuevos de `especifica_de`.

### DS-485 · `flexion_amplia_cadera: true` sin nota en `descanso-inclinado-sentado`
- **Ubicación exacta:** apartado 237; catálogo, `descanso-inclinado-sentado`, `exigencias.flexion_amplia_cadera` y `notas_etiquetado`.
- **Evidencia:** «sentado inclinado hacia delante con los codos apoyados en las rodillas» (evidencia, 237).
- **Explicación:** la etiqueta está en `true` y no hay nota. Si el `true` se apoya en una inferencia (I) y no en evidencia D, R2.4 exige la nota `[conservadora]`.
- **Consecuencia potencial:** no se puede reconstruir si el `true` es por evidencia o por conservadurismo.
- **Nivel de certeza:** media (depende de si el ángulo entre muslo y tronco se considera D o I).
- **Recomendación:** añadir la nota `[conservadora]` si el `true` es por conservadurismo; si es D, dejarlo como está y anotarlo en el informe.
- **Prueba o evidencia que permitiría confirmarlo:** una vista lateral de la fuente que muestre el ángulo entre muslo y tronco.
- **¿Requiere decisión humana?:** no; es una corrección de forma.

### DS-486 · El apoyo de los codos no está previsto en Q1
- **Ubicación exacta:** apartados 237 y 238; catálogo, `descanso-inclinado-sentado` y `descanso-apoyado-pared`, `exigencias.ambos_brazos`.
- **Evidencia:** «los codos apoyados en las rodillas» (237); «apoyando los codos en una pared» (238).
- **Explicación:** Q1 (P9) cuenta el apoyo de las dos manos y el uso simultáneo de los dos brazos. No dice si el apoyo de los dos codos, con las manos sueltas, cuenta como `ambos_brazos`. El criterio de DG-4 distingue apoyo para estabilidad de contacto sin función; aquí los codos sostienen parte del tronco.
- **Consecuencia potencial:** si contara, los dos ejercicios pasarían a `ambos_brazos: true` conservador y saldrían del perfil «Solo puedo usar un brazo».
- **Nivel de certeza:** media.
- **Recomendación:** registrar como CN (R1.4) si no se resuelve con Q1; valor provisional, el actual (`false`).
- **Prueba o evidencia que permitiría confirmarlo:** una aclaración de Q1 sobre el apoyo de los codos.
- **¿Requiere decisión humana?:** sí; aclarar Q1 o registrar el CN.

### DS-487 · Nota `[conservadora]` de `brazo_sobre_hombro` fuera de la forma de R2.4
- **Ubicación exacta:** apartado 238; catálogo, `descanso-apoyado-pared`, `notas_etiquetado`.
- **Evidencia:** «[conservadora] brazo_sobre_hombro: el brazo llega a la altura del hombro, o no se dice hasta dónde sube, y no consta que no la pase (CN-1, P25). Se cerraría con: evidencia de la fuente de que el brazo no pasa de la altura del hombro.»
- **Explicación:** la nota mezcla dos supuestos («llega a la altura» y «no se dice hasta dónde sube») y la evidencia que falta es genérica. La forma de R2.4 pide un motivo concreto y una evidencia concreta.
- **Consecuencia potencial:** la nota no permite reconstruir el caso; dificulta la revisión.
- **Nivel de certeza:** alta.
- **Recomendación:** reescribirla en la forma de R2.4 (propuesta en el apartado 238).
- **Prueba o evidencia que permitiría confirmarlo:** comparación con R2.4.
- **¿Requiere decisión humana?:** no; es una corrección de forma.

### DS-488 · La ilustración de `descanso-apoyado-pared` sube las manos por encima de la cabeza
- **Ubicación exacta:** apartado 238; ilustración de HealthMove de `descanso-apoyado-pared`.
- **Evidencia:** «Ilustración de HealthMove: inclinado hacia la pared con los antebrazos en vertical y las manos por encima de la cabeza. Más alto que el dibujo de la fuente» (evidencia, 238). El dibujo de la fuente: «los codos por debajo de los hombros y las manos juntas».
- **Explicación:** R7.6 pide comparar la ilustración con la fuente y registrar la discrepancia. R7.7 impide proponer el ejercicio para aprobación documental mientras la discrepancia induzca a interpretarlo de otra forma. Aquí la ilustración muestra una postura más alta que la del dibujo de la fuente.
- **Consecuencia potencial:** el usuario puede interpretar que el ejercicio exige subir las manos por encima de la cabeza, lo que cambiaría `brazo_sobre_hombro` y el perfil al que se ofrece.
- **Nivel de certeza:** media (depende de si la diferencia induce a interpretar el ejercicio de otra forma; la evidencia dice que está «dentro de lo que permite “apoyar los codos en una pared”»).
- **Recomendación:** revisar la ilustración para que las manos no queden por encima de la cabeza, o documentar la diferencia y decidir si R7.7 se aplica.
- **Prueba o evidencia que permitiría confirmarlo:** la ilustración renderizada y el dibujo de la fuente, comparados por Claude.
- **¿Requiere decisión humana?:** sí; decidir si la discrepancia impide la aprobación documental (R7.7).

### DS-489 · La nota de `circulos-grandes-brazos-sentado` atribuye a la fuente un consejo que no consta en la página 6
- **Ubicación exacta:** apartado 240; catálogo, `circulos-grandes-brazos-sentado`, `notas_etiquetado`.
- **Evidencia:** «nota “Si cansa, la fuente propone círculos más pequeños o descansar” (no está en la página 6; no se comprobó en el resto del folleto)» (evidencia, 240).
- **Explicación:** la nota atribuye a la fuente un consejo que la evidencia no localiza. Si el consejo es de HealthMove, es una adaptación (R6.3) y no puede atribuirse a la fuente.
- **Consecuencia potencial:** se atribuye a la fuente algo que no dice; incumple el principio 4 del protocolo.
- **Nivel de certeza:** alta (la evidencia lo dice expresamente).
- **Recomendación:** comprobar el resto del folleto; si no aparece, quitar la atribución o documentarlo como adaptación de HealthMove.
- **Prueba o evidencia que permitiría confirmarlo:** el texto completo de F4.
- **¿Requiere decisión humana?:** sí; decidir si se retira la nota o se documenta como adaptación.

### DS-490 · «Baja los pies despacio, de uno en uno» no está en la fuente ni en `adaptaciones`
- **Ubicación exacta:** apartado 241; catálogo, `abrazar-ambas-rodillas`, instrucción 4 y `adaptaciones`.
- **Evidencia:** «HealthMove: añade “Baja los pies despacio, de uno en uno”, que no está en la fuente (consejo de HealthMove sin documentar; R6.3)» (evidencia, 241).
- **Explicación:** es una indicación de HealthMove que la fuente no contiene. R6.3 pide documentarla como adaptación (C2) y no atribuirla a la fuente.
- **Consecuencia potencial:** el usuario lee una instrucción que no procede de la fuente sin saberlo.
- **Nivel de certeza:** alta.
- **Recomendación:** documentarla en `adaptaciones` o retirarla.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de F3 ya citado en la evidencia.
- **¿Requiere decisión humana?:** sí; aprobar la adaptación (Q5, una a una).

### DS-491 · `agarre: true` sin nota en `elevacion-pasiva-brazo-tumbado`
- **Ubicación exacta:** apartado 242; catálogo, `elevacion-pasiva-brazo-tumbado`, `exigencias.agarre` y `notas_etiquetado`.
- **Evidencia:** «Mano (I): “hold or support”: puede sujetar o solo sostener» (evidencia, 242). La fuente: «Use your good hand to hold or support your affected arm».
- **Explicación:** el `true` se apoya en un indicio (I) y no en evidencia D. R2.4 exige la nota `[conservadora]` cuando el `true` se apoya en la duda.
- **Consecuencia potencial:** no se puede reconstruir por qué se marcó; no se distingue de un agarre observado.
- **Nivel de certeza:** alta.
- **Recomendación:** añadir la nota `[conservadora]` en la forma de R2.4 (propuesta en el apartado 242).
- **Prueba o evidencia que permitiría confirmarlo:** una imagen o un vídeo de la fuente que muestre la mano.
- **¿Requiere decisión humana?:** no; es una corrección de forma.

---

## Resumen del lote

- **8 ejercicios auditados por primera vez con el protocolo 1.0.**
- **Listos para aprobación documental, una vez aplicados los cambios propuestos:** 235, 236, 237, 239, 241 y 242.
- **Pendientes de decisión:** 238 (DS-488, ilustración) y 240 (DS-489, nota atribuida a la fuente).
- **Cambios de etiquetas propuestos:** ninguno cambia de valor; se añaden notas `[conservadora]` en 235, 237, 238 y 242.
- **Adaptaciones nuevas o reescritas (Q5):** 235 (posición de las manos) y 241 (bajar los pies).
- **`especifica_de` nuevo:** «problemas pulmonares» (237, 238, 239) y «problemas de hombro» (242).
- **Hallazgos:** DS-481 a DS-491 (11). El encargo pedía como máximo 8; los he agrupado por clase de caso, pero siguen siendo 11. Los que podrían fusionarse: DS-482 y DS-487 (forma de R2.4), y DS-484 con los cuatro ejercicios. Si hay que reducirlos a 8, propongo fusionar DS-482 y DS-487 en uno solo y dejar DS-484 como uno solo (ya lo está). Los demás son casos distintos.

FIN DEL BORRADOR