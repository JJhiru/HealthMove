# Lote 15 · Primera auditoría con el protocolo 1.0: San Carlos (rodilla), Hospital General de Valencia y Ministerio de Sanidad (8 ejercicios)

- Fecha: 2026-10-24
- Versión del protocolo: 1.0
- Catálogo: v0.3.0 (actualizado 2026-10-14), rama `desarrollo-v1`, commit `d42c921`
- Identificador git del catálogo: no fiable, el catálogo tiene cambios sin confirmar (son los cambios de este lote, aplicados antes de cerrarlo).
- Huellas literales (tras aplicar los cambios): `elevar-rodilla-mantenida-sentado` `72dbd55f2167700e`, `flexion-alterna-piernas-de-pie` `da2aa05af3187622`, `toalla-entre-rodillas-sentado` `0b89b2e8e11b8ad8`, `estiramiento-soleo-pared` `c19d3e35905cb4da`, `estiramiento-lateral-muslo-pared` `2feab972dab84878`, `psoas-borde-cama` `81775030d98af952`, `extension-cadera-boca-abajo` `cb8587f3a4e68fd9`, `cuadriceps-boca-abajo-toalla` `a8be9df372a1bca6`.
- **Cómo se hizo (P29):** evidencia de Claude (`evidencia/lote-15.md`); borrador de DeepSeek (consulta C16, en un bloque); verificación de Claude. **Los apartados son el borrador de DeepSeek con las correcciones de Claude** listadas en «Revisión de DeepSeek». La columna «Etiqueta actual» conserva el valor de antes de aplicar.
- **Fuentes abiertas** (2026-10-24, `curl`, HTTP 200):

| Fuente | URL | Datos | Revisado |
|---|---|---|---|
| Hospital Clínico San Carlos, «Guía práctica: Ejercicios de Rodilla», DI-FISI-027-2025 | `https://www.comunidad.madrid/hospital/clinicosancarlos/sites/clinicosancarlos/files/inline-files/DI-FSI-027-2025.%20EjerciciosRodilla%20v1.pdf` | PDF de 18 páginas, SHA-256 (prefijo) `77ae432cff4acce4` | Texto completo; fotos de las páginas 7, 10, 14, 15 y 17 |
| Consorcio Hospital General Universitario de Valencia, «10 ejercicios para la rodilla» | `https://chguv.san.gva.es/documents/1324933/1356112/5.RODILLA.pdf/e68c6e67-e516-4365-9f8f-505613994f10` | PDF de 3 páginas, SHA-256 (prefijo) `764d4226e74b45e1` | Texto y dibujos de la página 1 |
| Ministerio de Sanidad y semFYC, «Prevenir las caídas es posible» | `https://estilosdevidasaludable.sanidad.gob.es/seguridad/pdf/Seguridad_Lesiones2.pdf` | PDF de 2 páginas, SHA-256 (prefijo) `5b39a3679bc1e098` | Texto y figuras |

- **Ilustraciones de HealthMove** (R7.6): coinciden 6. **Corregidas por Claude** en `scripts/ilustraciones/depie.mjs`: `flexion-alterna-piernas-de-pie` (el pie quedaba apoyado en el asiento, como si se subiera a la silla) y `estiramiento-lateral-muslo-pared` (la mano quedaba por encima del hombro).

## 110. elevar-rodilla-mantenida-sentado

### Identificación
- ID: `elevar-rodilla-mantenida-sentado`
- Nombre: Elevar la rodilla y mantener
- Fuente: Consorcio Hospital General Universitario de Valencia (Centro de Salud Fuensanta), «10 ejercicios para la rodilla», n.º 2 «Sentados, flexionar rodilla y cadera» (F2)
- Población destinataria de la fuente (si la declara): el folleto es de ejercicios para la rodilla; no declara un grupo más concreto. `especifica_de` actual: «rodilla».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una adaptación ya documentada cuya redacción es inexacta (ver DS-380)

### Evidencia de la fuente
- Ubicación exacta: F2, n.º 2 «Sentados, flexionar rodilla y cadera» (apartado 110).
- Pasos originales relevantes, resumidos con palabras propias: sentado recto en una silla; levantar la punta del pie con la rodilla doblada; elevar la rodilla y mantenerla en el aire 5 segundos; bajar despacio. No da repeticiones.
- Coincidencias (C1): posición, movimiento, tiempo de mantenimiento.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente no da repeticiones; HealthMove usa «De 2 a 10 veces» con la pauta de NHS Forth Valley. Ya está en `adaptaciones`, pero la redacción dice «La fuente no indica repeticiones; se usa la pauta general de NHS Forth Valley», que es correcta en el fondo. Ver DS-380 para el caso de 112, no de este.
- Adaptaciones que deben documentarse: ninguna nueva.
- Hechos, inferencias e incertidumbres: D (texto y dibujos), la rodilla sube por encima del asiento. I (dibujo 2), el muslo se acerca al tronco más que al estar sentado.
- Limitaciones de la verificación: la evidencia no describe el dibujo 1 con detalle; no consta si la mano se apoya en algún sitio.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| agarre | false | D (texto): las manos no intervienen | evidencia | FALSE | — |
| peso_en_manos | false | D: sentado | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): rodilla doblada con la punta del pie arriba, sin que conste que pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | true | I (dibujo 2): la rodilla sube por encima del asiento; el muslo se acerca al tronco más que al estar sentado | conservadora | TRUE | R2.1: ante la duda, `true` conservador con nota |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): «sentado recto» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recurso `silla`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «rodilla» (coherente con el título del folleto; ver DS-381 sobre el criterio de nombres).

### Incidencias
- `flexion_amplia_cadera: true` con evidencia I: falta la nota `[conservadora]` (R2.4). Ver DS-382.

### Propuesta de cambios
- `exigencias.flexion_amplia_cadera`: se mantiene `true`, pero se añade la nota `[conservadora]` (R2.4).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 111. flexion-alterna-piernas-de-pie

### Identificación
- ID: `flexion-alterna-piernas-de-pie`
- Nombre: Elevar una rodilla de pie con apoyo
- Fuente: Ministerio de Sanidad y semFYC, «Prevenir las caídas es posible» (2016), «Flexionar de forma alterna las piernas estando de pie» (F3)
- Población destinataria de la fuente (si la declara): el folleto es de prevención de caídas; no declara un grupo más concreto. `especifica_de` actual: no tiene.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una adaptación ya documentada (apoyo siempre) y una ilustración corregida

### Evidencia de la fuente
- Ubicación exacta: F3, «Flexionar de forma alterna las piernas estando de pie» (apartado 111).
- Pasos originales relevantes, resumidos con palabras propias: de pie, flexionar una pierna mientras la otra sigue en el suelo; mantener la pierna elevada «unos 5 segundos»; bajar y cambiar. «Si se siente más seguro, sitúese de pie apoyado al lado de una mesa, silla firme o barandilla». «Mantenga la posición contando hasta 10 para cada una de las piernas. Descanse de 1 a 3 minutos y repita».
- Coincidencias (C1): posición, movimiento, tiempo de mantenimiento.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente permite hacerlo sin apoyo; HealthMove lo hace siempre con apoyo. Ya está en `adaptaciones`.
- Adaptaciones que deben documentarse: ninguna nueva.
- Hechos, inferencias e incertidumbres: D (texto y figura), una pierna doblada con la rodilla hacia delante, sin apoyo en la figura. D (texto), el apoyo es opcional. I (texto), la dosis da dos tiempos (5 segundos y contar hasta 10); no queda claro si son el mismo tiempo.
- Limitaciones de la verificación: la evidencia no describe si la figura muestra la mano en algún sitio; el texto dice que el apoyo es opcional.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto): la fuente permite el apoyo; HealthMove lo hace siempre | evidencia | FALSE | §4: no exige no sujetarse |
| una_pierna | true | D (texto y figura): una pierna se eleva mientras la otra sigue en el suelo | evidencia | TRUE | §4: el peso cae sobre un solo pie |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): una mano se apoya; la otra no interviene | evidencia | FALSE | DG-4 / Q1 (P9): una mano en apoyo, la otra en reposo; no es uso simultáneo |
| agarre | true | I (texto): «apóyate en ella»; no consta prensión | conservadora | TRUE | Q2 (P10): contacto sin prensión, `true` conservador con nota |
| peso_en_manos | false | D: de pie; la mano se apoya, no carga el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): la pierna elevada se dobla con la rodilla hacia delante, sin que conste que pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | true | I (texto): «subir la rodilla»; el muslo se acerca al tronco como mínimo igual que sentado | conservadora | TRUE | R2.1: ante la duda, `true` conservador con nota |
| puntillas_talones | false | D: el pie de apoyo está plano | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): de pie, sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `de_pie`, recurso `silla`, dosis: coherentes.
- Ilustración: corregida por Claude (antes el pie de la pierna elevada quedaba apoyado sobre el asiento; ahora la rodilla sube y el pie queda en el aire). Coincide con la fuente (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: no tiene. La fuente no declara un grupo más concreto que «prevención de caídas»; ver DS-381.

### Incidencias
- `flexion_amplia_cadera: true` con evidencia I: falta la nota `[conservadora]` (R2.4). Ver DS-382.
- La nota actual de `agarre` ya está en la forma de R2.4; la de `flexion_amplia_cadera` no.

### Propuesta de cambios
- `exigencias.flexion_amplia_cadera`: se mantiene `true`, pero se añade la nota `[conservadora]` (R2.4).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 112. toalla-entre-rodillas-sentado

### Identificación
- ID: `toalla-entre-rodillas-sentado`
- Nombre: Apretar una toalla entre las rodillas
- Fuente: Hospital Clínico San Carlos, «Guía práctica de recomendaciones para pacientes: Ejercicios de Rodilla», «Add sentado», p. 6 (F1)
- Población destinataria de la fuente (si la declara): pacientes de rodilla de la Unidad de Fisioterapia; `especifica_de` actual: no tiene.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una adaptación cuya redacción es inexacta (ver DS-380)

### Evidencia de la fuente
- Ubicación exacta: F1, «Add sentado», p. 6 (apartado 112).
- Pasos originales relevantes, resumidos con palabras propias: sentado en silla, rodillas a 90°, plantas de los pies pegadas al suelo; pelota de tenis o toalla enrollada entre las rodillas; apretar las dos rodillas y mantener 3 a 5 segundos.
- Coincidencias (C1): posición, movimiento, tiempo de apriete.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente no da repeticiones; HealthMove usa «10 veces». Ya está en `adaptaciones`, pero la redacción dice «La fuente indica el tiempo de apriete pero no las repeticiones; se usan 10». **La evidencia dice que la regla general de F1 (p. 3) sí da repeticiones** («empezar con 5 repeticiones e ir subiendo hasta 3 veces más»). La adaptación es inexacta en el fondo: la fuente sí da una pauta de repeticiones, aunque sea general. Ver DS-380.
- Adaptaciones que deben documentarse: la redacción de la adaptación debe corregirse (DS-380).
- Hechos, inferencias e incertidumbres: D (texto y foto), las dos rodillas aprietan la toalla o la pelota; las manos sobre los muslos. D (texto), las rodillas a 90°.
- Limitaciones de la verificación: la evidencia no describe si la foto muestra las manos cerradas o abiertas; dice «manos sobre los muslos».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: contracción estática | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: contracción estática | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y foto): las manos están sobre los muslos, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (foto): las manos están delante, sobre los muslos | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): las manos no intervienen en el apriete | evidencia | FALSE | DG-4 / Q1 (P9): las manos reposan |
| agarre | false | D (texto y foto): las manos están sobre los muslos; no se pide cerrar la mano | evidencia | FALSE | R7.4 / Q2 (P10): contacto con el propio cuerpo, no apoyo |
| peso_en_manos | false | D: sentado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): rodillas a 90°, no más | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sentado recto | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recursos `silla` y `toalla`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: no tiene. La fuente es de pacientes de rodilla; ver DS-381.

### Incidencias
- La adaptación actual dice que la fuente no da repeticiones; la evidencia dice que la regla general de F1 sí las da. Ver DS-380.

### Propuesta de cambios
- `adaptaciones`: corregir la redacción para reflejar que la fuente da una pauta general de repeticiones (5, hasta 3 veces más) y que HealthMove usa 10 (DS-380).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 113. estiramiento-soleo-pared

### Identificación
- ID: `estiramiento-soleo-pared`
- Nombre: Estirar la pantorrilla con la rodilla doblada
- Fuente: Hospital Clínico San Carlos, «Guía práctica de recomendaciones para pacientes: Ejercicios de Rodilla», «Tríceps sural, b) sóleo», p. 14 (F1)
- Población destinataria de la fuente (si la declara): pacientes de rodilla de la Unidad de Fisioterapia; `especifica_de` actual: no tiene.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una adaptación ya documentada y una diferencia entre texto e imagen de la fuente (ver DS-383)

### Evidencia de la fuente
- Ubicación exacta: F1, «Tríceps sural, b) sóleo», p. 14 (apartado 113).
- Pasos originales relevantes, resumidos con palabras propias: de pie, la pierna a estirar retrasada y «ligeramente en flexión»; la otra delante con la rodilla doblada, como dando un paso largo; sin despegar el talón de detrás, llevar el peso a la pierna de delante. Regla general: 30 a 60 s, 5 veces.
- Coincidencias (C1): posición, movimiento, pierna retrasada con la rodilla algo doblada.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la guía propone 5 veces; HealthMove usa 2. Ya está en `adaptaciones`.
- Adaptaciones que deben documentarse: ninguna nueva.
- Hechos, inferencias e incertidumbres: D (texto), la pierna retrasada con la rodilla algo doblada. D (foto), las dos manos apoyadas en la pared. **El texto no menciona la pared ni las manos**; la foto sí. Ver DS-383.
- Limitaciones de la verificación: la evidencia no dice si la foto muestra las manos cerradas o abiertas; dice «las dos manos apoyadas en la pared».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (foto): las dos manos en la pared | evidencia | FALSE | §4: se sujeta a algo |
| una_pierna | false | D (texto): las dos piernas en el suelo, una delante y otra detrás | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: estiramiento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (foto): las manos están en la pared, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (foto): las manos están delante, en la pared | evidencia | FALSE | — |
| ambos_brazos | true | D (foto): las dos manos apoyadas en la pared | evidencia | TRUE | Q1 (P9): apoyo bilateral |
| agarre | false | I (foto): las manos se apoyan; no consta prensión | conservadora | TRUE | Q2 (P10): contacto sin prensión, `true` conservador con nota |
| peso_en_manos | false | D: de pie; las manos se apoyan, no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): la pierna de delante doblada, sin que conste que pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): paso largo, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D (texto): «sin despegar el talón de detrás» | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): de pie, sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `de_pie`, recurso `pared`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: no tiene. La fuente es de pacientes de rodilla; ver DS-381.
- `variante_de`: `estiramiento-gemelo-pared` (no auditado en este lote).

### Incidencias
- `agarre: false` con las manos apoyadas en la pared: falta la nota `[conservadora]` (R2.4). Ver DS-382.
- El texto de la fuente no menciona la pared ni las manos; la foto sí. La instrucción de HealthMove («Apoya las manos en la pared») es una adaptación que no está documentada. Ver DS-383.

### Propuesta de cambios
- `exigencias.agarre`: se mantiene `true`, pero se añade la nota `[conservadora]` (R2.4).
- Sin adaptación nueva: las manos en la pared salen en la foto de la fuente (D); se anota en `notas_etiquetado` (DS-383, matizado).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 114. estiramiento-lateral-muslo-pared

### Identificación
- ID: `estiramiento-lateral-muslo-pared`
- Nombre: Estirar el lateral del muslo en la pared
- Fuente: Hospital Clínico San Carlos, «Guía práctica de recomendaciones para pacientes: Ejercicios de Rodilla», «Tensor de la Fascia Lata», pp. 13-14 (F1)
- Población destinataria de la fuente (si la declara): pacientes de rodilla de la Unidad de Fisioterapia; `especifica_de` actual: no tiene.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una adaptación ya documentada y una ilustración corregida

### Evidencia de la fuente
- Ubicación exacta: F1, «Tensor de la Fascia Lata», pp. 13-14 (apartado 114).
- Pasos originales relevantes, resumidos con palabras propias: de pie, apoyado en una pared; llevar la pierna a estirar por detrás de la otra y poner los pies en paralelo; inclinarse dejando caer la cadera hacia la pared. Para más estiramiento, elevar e inclinar el brazo del lado que se estira, formando una «C» con el cuerpo.
- Coincidencias (C1): posición, movimiento, inclinación del tronco.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la guía propone 5 veces y subir el brazo para más intensidad; HealthMove usa 2 y sin subir el brazo. Ya está en `adaptaciones`.
- Adaptaciones que deben documentarse: ninguna nueva.
- Hechos, inferencias e incertidumbres: D (texto y fotos), una mano apoyada en la pared a la altura del hombro; la cadera cae hacia la pared y el tronco se inclina hacia el lado. D (foto 2), la versión con el brazo por encima de la cabeza.
- Limitaciones de la verificación: la evidencia no dice si la foto 1 muestra la mano cerrada o abierta; dice «una mano apoyada en la pared».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto y foto): una mano en la pared | evidencia | FALSE | §4: se sujeta a algo |
| una_pierna | false | D (texto): los pies en paralelo, las piernas cruzadas | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: estiramiento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (foto 1): la mano está en la pared a la altura del hombro, no por encima | evidencia | FALSE | — |
| mano_detras | false | D (foto 1): la mano está delante, en la pared | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): una mano se apoya; la otra no interviene | evidencia | FALSE | DG-4 / Q1 (P9): una mano en apoyo, la otra en reposo |
| agarre | false | I (foto 1): la mano se apoya; no consta prensión | conservadora | TRUE | Q2 (P10): contacto sin prensión, `true` conservador con nota |
| peso_en_manos | false | D: de pie; la mano se apoya, no carga el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): las piernas cruzadas, sin que consten dobladas más de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): las piernas cruzadas, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: los pies en el suelo | evidencia | FALSE | — |
| inclinacion_tronco | true | D (texto y fotos): la cadera cae hacia la pared y el tronco se inclina hacia el lado | evidencia | TRUE | §4: inclinar la espalda hacia un lado |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `de_pie`, recurso `pared`, dosis: coherentes.
- Ilustración: corregida por Claude (antes la mano en la pared quedaba a la altura de la cabeza, por encima del hombro, cuando `brazo_sobre_hombro` es `false`; ahora queda por debajo del hombro, como en la foto 1). Coincide con la fuente (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: no tiene. La fuente es de pacientes de rodilla; ver DS-381.

### Incidencias
- `agarre: false` con la mano apoyada en la pared: falta la nota `[conservadora]` (R2.4). Ver DS-382.

### Propuesta de cambios
- `exigencias.agarre`: se mantiene `true`, pero se añade la nota `[conservadora]` (R2.4).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 115. psoas-borde-cama

### Identificación
- ID: `psoas-borde-cama`
- Nombre: Estirar la cadera con la pierna fuera de la cama
- Fuente: Hospital Clínico San Carlos, «Guía práctica de recomendaciones para pacientes: Ejercicios de Rodilla», «Psoas», p. 16 (F1)
- Población destinataria de la fuente (si la declara): pacientes de rodilla de la Unidad de Fisioterapia; `especifica_de` actual: no tiene.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una adaptación ya documentada y una nota de HealthMove que no está en la fuente (ver DS-384)

### Evidencia de la fuente
- Ubicación exacta: F1, «Psoas», p. 16 (apartado 115).
- Pasos originales relevantes, resumidos con palabras propias: boca arriba, una pierna flexionada llevando la rodilla hacia el pecho; sacar por fuera de la cama la pierna a estirar y dejarla caer por su propio peso. El texto no dice si se sujeta la rodilla.
- Coincidencias (C1): posición, movimiento, pierna fuera de la cama.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la guía propone 5 veces; HealthMove usa 2. Ya está en `adaptaciones`.
- Adaptaciones que deben documentarse: ninguna nueva.
- Hechos, inferencias e incertidumbres: D (foto), una rodilla llevada al pecho sujeta con las manos; la otra pierna cuelga por fuera. D (foto), la rodilla de la pierna doblada queda muy flexionada y el muslo pegado al tronco. **El texto no dice si se sujeta la rodilla**; la foto sí. Ver DS-384.
- Limitaciones de la verificación: la evidencia no describe si la foto muestra las manos cerradas o abiertas; dice «sujeta con las manos».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: estiramiento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (foto): las manos sujetan la rodilla, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (foto): las manos están delante, en la rodilla | evidencia | FALSE | — |
| ambos_brazos | false | D (foto): las dos manos sujetan la rodilla | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (foto): las manos sujetan la rodilla | evidencia | TRUE | §4: sujetar |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | true | D (foto): la rodilla de la pierna doblada queda muy flexionada | evidencia | TRUE | §4: rodilla más de 90° |
| flexion_amplia_cadera | true | D (foto): el muslo queda pegado al tronco | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide (evidencia); las manos no se distinguen.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: no tiene. La fuente es de pacientes de rodilla; ver DS-381.
- Nota actual: «Riesgo de caer de la cama: el cuerpo debe quedar bien apoyado y solo la pierna fuera». **No está en la fuente**; la ha añadido HealthMove. Ver DS-384.

### Incidencias
- `ambos_brazos: false` con las dos manos sujetando la rodilla en la foto: la etiqueta actual es `false`, pero la foto muestra las dos manos. Ver DS-385.
- Nota de HealthMove que no está en la fuente: ver DS-384.

### Propuesta de cambios
- `exigencias.ambos_brazos`: `false` → `true` (D, foto) (DS-385).
- `notas_etiquetado`: marcar la observación como de HealthMove, no de la guía (DS-384).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 116. extension-cadera-boca-abajo

### Identificación
- ID: `extension-cadera-boca-abajo`
- Nombre: Levantar la pierna estirada boca abajo
- Fuente: Hospital Clínico San Carlos, «Guía práctica de recomendaciones para pacientes: Ejercicios de Rodilla», «Extensores de cadera tumbado», p. 9 (F1)
- Población destinataria de la fuente (si la declara): pacientes de rodilla de la Unidad de Fisioterapia; `especifica_de` actual: no tiene.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una adaptación ya documentada y una nota conservadora ya en la forma de R2.4

### Evidencia de la fuente
- Ubicación exacta: F1, «Extensores de cadera tumbado», p. 9 (apartado 116).
- Pasos originales relevantes, resumidos con palabras propias: boca abajo, con almohada o cojín bajo el ombligo, «Frente apoyada sobre las manos»; levantar toda la pierna sin doblarla; mantener 3 segundos y volver.
- Coincidencias (C1): posición, movimiento, tiempo de mantenimiento.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la guía usa una camilla; HealthMove usa el suelo. C3, la almohada se omite. Ya está en `adaptaciones`.
- Adaptaciones que deben documentarse: ninguna nueva.
- Hechos, inferencias e incertidumbres: D (texto y fotos), la frente sobre las manos, los codos doblados hacia los lados, una pierna estirada elevada. I (fotos), las manos quedan bajo la frente, a la altura de la cabeza; tumbado no se puede comparar bien con la altura del hombro (CN-1).
- Limitaciones de la verificación: la evidencia no describe si las fotos muestran las manos cerradas o abiertas; dice «manos bajo la frente».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | I (fotos): las manos quedan bajo la frente, a la altura de la cabeza; tumbado no se puede comparar bien con la altura del hombro | conservadora | TRUE | CN-1 (P25): ante la duda, `true` conservador con nota |
| mano_detras | false | D (fotos): las manos están delante, bajo la frente | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): las manos no intervienen en el movimiento | evidencia | FALSE | DG-4 / Q1 (P9): las manos reposan |
| agarre | false | D (texto y fotos): las manos están bajo la frente; no se pide cerrar la mano | evidencia | FALSE | R7.4 / Q2 (P10): contacto con el propio cuerpo, no apoyo |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): la pierna se levanta sin doblarla | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en el suelo | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `suelo`, recursos: ninguno, dosis: coherentes.
- Ilustración: coincide (evidencia); los brazos no se distinguen.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: no tiene. La fuente es de pacientes de rodilla; ver DS-381.

### Incidencias
- Ninguna de etiquetas. La nota de `brazo_sobre_hombro` ya está en la forma de R2.4.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 117. cuadriceps-boca-abajo-toalla

### Identificación
- ID: `cuadriceps-boca-abajo-toalla`
- Nombre: Estirar el muslo boca abajo con una toalla
- Fuente: Hospital Clínico San Carlos, «Guía práctica de recomendaciones para pacientes: Ejercicios de Rodilla», «Cuádriceps, a) tumbado», p. 13 (F1)
- Población destinataria de la fuente (si la declara): pacientes de rodilla de la Unidad de Fisioterapia; `especifica_de` actual: no tiene.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una adaptación ya documentada y una diferencia entre texto e imagen de la fuente (ver DS-386)

### Evidencia de la fuente
- Ubicación exacta: F1, «Cuádriceps, a) tumbado», p. 13 (apartado 117).
- Pasos originales relevantes, resumidos con palabras propias: boca abajo, llevar el talón al glúteo; con la mano del mismo lado, coger el pie o el tobillo; si no llega, usar una toalla. Regla general: 30 a 60 s, 5 veces.
- Coincidencias (C1): posición, movimiento, mano del mismo lado.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la guía propone 5 veces; HealthMove usa 2. Ya está en `adaptaciones`.
- Adaptaciones que deben documentarse: ninguna nueva.
- Hechos, inferencias e incertidumbres: D (texto y fotos), la mano del mismo lado sujeta el tobillo por detrás, con la rodilla muy doblada. I (fotos), la mano va hacia atrás, por detrás del cuerpo, hasta el pie.
- Limitaciones de la verificación: la evidencia no describe si las fotos muestran las manos cerradas o abiertas; dice «sujeta el tobillo».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: estiramiento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y fotos): la mano sujeta el tobillo, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y fotos): la mano va hacia atrás, por detrás del cuerpo, hasta el pie | conservadora | TRUE | R2.1: no está decidido si cuenta como «detrás de la espalda» (CN-4, nuevo) |
| ambos_brazos | false | D (texto): una mano sujeta; la otra no interviene | evidencia | FALSE | DG-4 / Q1 (P9): una mano trabaja, la otra en reposo |
| agarre | true | D (texto y fotos): la mano sujeta el tobillo | evidencia | TRUE | §4: sujetar |
| peso_en_manos | false | D: tumbado; la mano no carga el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | true | D (texto y fotos): la rodilla queda muy doblada | evidencia | TRUE | §4: rodilla más de 90° |
| flexion_amplia_cadera | false | D: tumbado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en el suelo | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `suelo`, recurso `toalla`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: no tiene. La fuente es de pacientes de rodilla; ver DS-381.

### Incidencias
- El texto de la fuente dice «coger el pie o el tobillo»; la instrucción de HealthMove dice «coge el pie o el tobillo con la mano de ese lado». Coincide. No hay incidencia de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.
- `exigencias.mano_detras`: `false` → `true` conservador (CN-4), con su nota. Impacto (modo auditoría): sale de `mano_espalda`.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## Revisión de DeepSeek

**Consulta C16** (en un bloque, con «FIN DEL BORRADOR»; 0,034 USD como mucho). Análisis: `deepseek/analisis-claude/fase-15-lote15.md`.

**Aceptado:** DS-380 (dosis de 112), DS-382 (notas `[conservadora]`), DS-384 (la nota de 115 es de HealthMove), DS-385 (`ambos_brazos` en 115, D por la foto); `agarre` conservador en 113 y 114 (Q2); `mano_detras` en 117.

**Corregido o matizado por Claude:**
- DS-383: las manos en la pared de 113 salen en la foto (D): no es una adaptación.
- DS-386, rechazado: la instrucción de 117 ya dice «Si no llegas, usa una toalla».
- 117: la «etiqueta actual» de `mano_detras` era `false`; el `true` se aplica como conservador y abre **CN-4** (la mano que va hacia atrás hasta el pie), no como D.
- DS-381 (criterio de nombres de población): sin cambios en este lote; se mantienen «rodilla» y los vacíos.
- 115: el borrador decía REQUIERE CORRECCIONES; con las correcciones aplicadas, queda listo.

## Resumen del lote

- **8 ejercicios auditados por primera vez con el protocolo 1.0.** Los 8 quedan LISTOS PARA APROBACIÓN DOCUMENTAL, con los cambios aplicados.
- **Cambios de etiquetas:** `agarre` → `true` conservador en `estiramiento-soleo-pared` y `estiramiento-lateral-muslo-pared`; `ambos_brazos` → `true` (D) en `psoas-borde-cama`; `mano_detras` → `true` conservador en `cuadriceps-boca-abajo-toalla` (CN-4).
- **Nuevo CN-4** (`registro.md`): si la mano que coge el pie por detrás cuenta como `mano_detras`.
- **Ilustraciones corregidas:** 2.
