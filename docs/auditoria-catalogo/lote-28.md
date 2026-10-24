# Lote 28 · Primera auditoría con el protocolo 1.0: St George's, ACPRC, Berkshire Healthcare, Calderdale and Huddersfield y Sherwood Forest (8 ejercicios)

- Fecha: 2026-10-24
- Versión del protocolo: 1.0
- Catálogo: v0.3.0 (actualizado 2026-10-14), rama `desarrollo-v1`, commit `ba9f863`
- Identificador git del catálogo: no fiable, el catálogo tiene cambios sin confirmar (son los cambios de este lote, aplicados antes de cerrarlo).
- Huellas literales (tras aplicar los cambios): `separar-juntar-dedos` `e014ec6c46509c5e`, `dedos-hacia-pulgar` `9fc6ed233b9c8209`, `descanso-inclinado-sentado` `9a7bca5fbc92e990`, `descanso-apoyado-pared` `5b7e648478b42f7a`, `descanso-espalda-pared` `958afe600f881cd8`, `circulos-grandes-brazos-sentado` `e8876e38e79bf11c`, `abrazar-ambas-rodillas` `0b2a7acf35c93763`, `elevacion-pasiva-brazo-tumbado` `04a62be8e05f92d5`.
- **Cómo se hizo (P29):** evidencia de Claude (`evidencia/lote-28.md`); borrador de DeepSeek (consulta C29, un bloque); verificación de Claude. **Los apartados son el borrador de DeepSeek con las correcciones de Claude** listadas en «Revisión de DeepSeek».
- **Fuentes abiertas** (2026-10-24, `curl`, HTTP 200): cinco PDF; URL y hashes en la evidencia.
  - St George's University Hospitals NHS FT: `https://www.stgeorges.nhs.uk/wp-content/uploads/2021/09/RA-hand-exercises.pdf`
  - Association of Chartered Physiotherapists in Respiratory Care (copia de NHS Scotland): `https://rightdecisions.scot.nhs.uk/media/fibfur4q/acprc-managing-breathlessness.pdf`
  - Berkshire Healthcare NHS FT: `https://www.berkshirehealthcare.nhs.uk/media/qwqaccdd/bh1165n-low-back-pain-v1-feb-2026.pdf`
  - Calderdale and Huddersfield NHS FT: `https://plr.cht.nhs.uk/download/1113/Home%20Exercise%20Programme%20Beginners`
  - Sherwood Forest Hospitals NHS FT: `https://www.sfh-tr.nhs.uk/media/0romp4a3/pil202509-04-srme-shoulder-range-of-movement-exercises.pdf`
- **Ilustraciones de HealthMove** (R7.6): coinciden; la de `descanso-apoyado-pared` se corrige (DS-488).

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
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


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
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


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
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 238. descanso-apoyado-pared

### Identificación
- ID: `descanso-apoyado-pared`
- Nombre: Descansar apoyado en la pared
- Fuente: ACPRC, «How to Cope With Being Short Of Breath - Positions» (F2), «Standing leaning forward» (apartado 238)
- Población destinataria de la fuente (si la declara): «personas con problemas pulmonares que se quedan sin aire» (D, datos comunes de F2). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en la postura (la pared es una de las opciones de la fuente). C3 en `especifica_de` (DS-484). Nota de `brazo_sobre_hombro` reescrita en la forma de R2.4 (DS-487). Ilustración corregida (DS-488).

### Evidencia de la fuente
- Ubicación exacta: F2, «Standing leaning forward» (apartado 238).
- Pasos originales relevantes, resumidos con palabras propias: de pie, inclinarse hacia delante apoyando los codos en una pared, un alféizar, una barandilla o una encimera; también en un bastón, un paraguas largo, un carro o un andador con ruedas.
- Coincidencias (C1): de pie, inclinado hacia delante, los codos apoyados.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la pared como opción (subconjunto de la fuente). C2, la duración de 1 a 2 minutos (ya documentada). C3, `especifica_de` vacío (DS-484).
- Hechos, inferencias e incertidumbres: D (texto), la postura. D (dibujo de la fuente), los codos por debajo de los hombros sobre un respaldo. I, en la pared la altura del codo depende de cómo se apoye (DS-487).
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
- Ilustración: Claude la corrigió (`depie.mjs`): las manos, apoyadas en la pared a la altura de los hombros y los codos por debajo (DS-488).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente declara población (D); ver DS-484.
- `notas_etiquetado` actual: «[conservadora] brazo_sobre_hombro: el brazo llega a la altura del hombro, o no se dice hasta dónde sube, y no consta que no la pase (CN-1, P25). Se cerraría con: evidencia de la fuente de que el brazo no pasa de la altura del hombro.» No sigue la forma de R2.4 (DS-487).

### Incidencias
- `especifica_de` vacío con población declarada (DS-484).
- La nota `[conservadora]` de `brazo_sobre_hombro` no sigue la forma de R2.4 (DS-487).
- La ilustración subía las manos por encima de la cabeza; corregida (DS-488).

### Propuesta de cambios
- `fuente.especifica_de`: «problemas pulmonares» (R8.1; DS-484).
- `notas_etiquetado`: reescribir la nota de `brazo_sobre_hombro` en la forma de R2.4: «[conservadora] brazo_sobre_hombro: la fuente no dice hasta dónde suben los codos al apoyarse en la pared y no consta que el brazo no pase de la altura del hombro (CN-1, P25). Se cerraría con: una imagen de la fuente con los codos apoyados en la pared.» (DS-487).
- Ilustración: corregida por Claude (R7.6, R7.7; DS-488).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


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
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 240. circulos-grandes-brazos-sentado

### Identificación
- ID: `circulos-grandes-brazos-sentado`
- Nombre: Círculos grandes con los brazos
- Fuente: Calderdale and Huddersfield NHS FT, «Home Exercise Programme: Beginners» (F4), «Arm Circles», p. 6 (apartado 240)
- Población destinataria de la fuente (si la declara): «rehabilitación cardiaca» (D, datos comunes de F4). `especifica_de` actual: «rehabilitación cardiaca».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento. la nota sí consta en la fuente: el folleto dice «If you feel tired… slow down, do smaller movements or rest» en sus instrucciones generales (líneas 55, 80 y 223 del texto extraído), no en la página 6 (DS-489, rechazado tras comprobarlo).

### Evidencia de la fuente
- Ubicación exacta: F4, «Arm Circles», p. 6 (apartado 240).
- Pasos originales relevantes, resumidos con palabras propias: sentado en el tercio delantero de la silla; dibujar círculos hacia delante con un brazo y después con el otro, tan grandes como se pueda; 4 veces en cada sentido.
- Coincidencias (C1): sentado, círculos hacia delante, un brazo y después el otro, tan grandes como se pueda, 4 veces en cada sentido.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), el brazo estirado por encima de la cabeza. D (texto, instrucciones generales), el consejo de hacer movimientos más pequeños o descansar si cansa.
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
- `notas_etiquetado` actual: «Si cansa, la fuente propone círculos más pequeños o descansar.» Consta en las instrucciones generales del folleto (DS-489).

### Incidencias
- Ninguna: la nota sí consta en la fuente: el folleto dice «If you feel tired… slow down, do smaller movements or rest» en sus instrucciones generales (líneas 55, 80 y 223 del texto extraído), no en la página 6 (DS-489, rechazado tras comprobarlo).

### Propuesta de cambios
- Nada.
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 241. abrazar-ambas-rodillas

### Identificación
- ID: `abrazar-ambas-rodillas`
- Nombre: Abrazar las dos rodillas
- Fuente: Berkshire Healthcare NHS FT, «Low back pain» (F3), «2. Knee to chest stretch» (apartado 241)
- Población destinataria de la fuente (si la declara): «dolor lumbar» (D, datos comunes de F3). `especifica_de` actual: «dolor lumbar».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento. «Baja los pies despacio, de uno en uno» es de HealthMove; se documenta como adaptación (R6.3; DS-490). La frecuencia diaria de la fuente (dos veces) no se recoge, porque la dosis de HealthMove es por sesión.

### Evidencia de la fuente
- Ubicación exacta: F3, «2. Knee to chest stretch» (apartado 241).
- Pasos originales relevantes, resumidos con palabras propias: tumbado boca arriba; llevar con suavidad las dos rodillas hacia el pecho, sujetándolas por detrás de los muslos, hasta notar un estiramiento cómodo en la zona lumbar; mantener. «Repetitions: 1-20», dos veces al día (mañana y tarde).
- Coincidencias (C1): tumbado, las dos rodillas hacia el pecho, sujetas por detrás de los muslos, mantener.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, «Baja los pies despacio, de uno en uno» (adaptación añadida; DS-490). C3, ninguna.
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
- «Baja los pies despacio, de uno en uno» no estaba documentado (DS-490); Claude añadió la adaptación.
- La dosis no recoge las dos veces al día.

### Propuesta de cambios
- `adaptaciones`: añadida «La fuente no indica cómo bajar las piernas; aquí se baja un pie cada vez.» (R6.3; DS-490).
- `dosis`: sin cambio; la dosis de HealthMove es por sesión y no recoge la frecuencia diaria de ninguna fuente.
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


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
- `fuente.especifica_de`: «hombro» (R8.1; forma corta de los lotes anteriores; DS-484).
- `notas_etiquetado`: añadir «[conservadora] agarre: la fuente dice «hold or support» y no consta que la mano buena cierre la mano (Q2). Se cerraría con: una imagen o un vídeo de la fuente que muestre la mano.» (R2.4; DS-491).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## Revisión de DeepSeek

**Consulta C29** (un bloque, con «FIN DEL BORRADOR»). Análisis: `deepseek/analisis-claude/fase-28-lote28.md`.

**Aceptado:** DS-481 (la posición de las manos de 235, como adaptación), DS-482 (nota de 235), DS-484 (`especifica_de` «problemas pulmonares» en 237 a 239), DS-485 (nota de `flexion_amplia_cadera` en 237), DS-487 (nota de 238), DS-488 (ilustración de 238, corregida), DS-490 (instrucción de HealthMove de 241, documentada como adaptación), DS-491 (nota de `agarre` en 242).

**Corregido por Claude:**
- DS-484 en 242: «hombro», con la forma corta de los lotes anteriores.
- DS-489, rechazado: el consejo de la nota de 240 está en las instrucciones generales del folleto de Calderdale.
- DS-490: no se cambia la dosis de 241; HealthMove da la dosis por sesión.

## Resumen del lote

- **8 ejercicios auditados por primera vez con el protocolo 1.0.** Los 8 quedan LISTOS PARA APROBACIÓN DOCUMENTAL, con los cambios aplicados.
- **Etiquetas:** sin cambios de valor; notas conservadoras nuevas o reescritas en 235, 237, 238 y 242.
- **Adaptaciones nuevas (Q5, R6.3):** 235 (manos en los muslos) y 241 (bajar un pie cada vez).
- **`especifica_de` nuevo:** «problemas pulmonares» (237, 238, 239) y «hombro» (242).
- **Ilustración corregida:** 1.
