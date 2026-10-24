# Lote 29 · Reauditoría con el protocolo 1.0: los 11 ejercicios de los lotes 1 a 5 en REQUIERE CORRECCIONES (NHS y Age UK Devon)

- Fecha: 2026-10-24
- Versión del protocolo: 1.0
- Catálogo: v0.3.0 (actualizado 2026-10-14), rama `desarrollo-v1`, commit `fdc2c2a`
- Identificador git del catálogo: no fiable, el catálogo tiene cambios sin confirmar (son los cambios de este lote, aplicados antes de cerrarlo).
- Huellas literales (tras aplicar los cambios): `estiramiento-pecho-sentado` `e891bdc2cdfcd4ec`, `giro-tronco-sentado` `8fd5372d70266ff4`, `tobillos-punta-talon-sentado` `d96f86c0652b2c62`, `inclinacion-lateral-sentado` `6c02414f2a45deea`, `estiramiento-gemelo-sentado` `03bf8db55cc31335`, `abrir-cerrar-manos` `5b2da1e63cebcc88`, `banda-curl-sentado` `800c3ccabb3da397`, `elevacion-talones-sin-apoyo` `888dd87b47327f96`, `flexiones-pared` `3d137b974f1b7645`, `equilibrio-una-pierna-pared` `924fbb0b42616e89`, `estiramiento-gemelo-pared` `1ab08d74e8d73926`.
- **Cómo se hizo (P29):** evidencia de Claude (`evidencia/lote-29.md`); borrador de DeepSeek (consulta C30, en dos bloques); verificación de Claude. **Los apartados son el borrador de DeepSeek con las correcciones de Claude** listadas en «Revisión de DeepSeek». Sustituye, para estos 11, a los informes de los lotes 1, 2, 4 y 5.
- **Fuentes abiertas** (2026-10-24, `curl`, HTTP 200): cuatro páginas del NHS con sus fotos y el PDF de Age UK Devon; URL y hashes en la evidencia.
  - NHS (Reino Unido): `https://www.nhs.uk/live-well/exercise/strength-and-flexibility-exercises/sitting-exercises/`, `…/strength-exercises/`, `…/balance-exercises/`, `…/flexibility-exercises/`
  - Age UK Devon: `https://www.ageuk.org.uk/bp-assets/globalassets/devon/original-blocks/activities-and-events/a4-seated-vitality-at-home.pdf`
- **Ilustraciones de HealthMove** (R7.6, R7.7): Claude corrigió las tres discrepancias conocidas del protocolo (`estiramiento-pecho-sentado`, `banda-curl-sentado`, `equilibrio-una-pierna-pared`); las demás coinciden.

## 243. estiramiento-pecho-sentado

### Identificación
- ID: `estiramiento-pecho-sentado`
- Nombre: Estiramiento de pecho
- Fuente: NHS, «Sitting exercises» (F1), «Chest stretch» (apartado 243)
- Población destinataria de la fuente (si la declara): la evidencia no la declara. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar con el protocolo 1.0 (lote 1, REQUIERE CORRECCIONES)
- Resultado documental: C1 en el movimiento. `brazo_sobre_hombro` pasa a `false` con D: las fotos muestran las manos por debajo de los hombros, y R2.2 queda satisfecha (DS-492, corregido por Claude). `ambos_brazos: true` con D (los dos brazos abiertos a la vez).

### Evidencia de la fuente
- Ubicación exacta: F1, «Chest stretch» (apartado 243).
- Pasos originales relevantes, resumidos con palabras propias: sentado erguido sin apoyar la espalda; hombros atrás y abajo; «Extend your arms out to the side»; empujar el pecho hacia delante y arriba; 5 a 10 s; 5 veces.
- Coincidencias (C1): sentado, brazos extendidos a los lados, pecho adelante y arriba, 5 a 10 s, 5 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna tras el cambio de `brazo_sobre_hombro` (DS-492).
- Hechos, inferencias e incertidumbres: D (texto y fotos), los brazos abiertos a la altura de los hombros o por debajo. N, si en algún momento el brazo sube por encima del hombro.
- Limitaciones de la verificación: la ilustración de HealthMove la describe Claude; DeepSeek no la ha visto.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (fotos): las manos quedan por debajo de la altura de los hombros | evidencia | FALSE | R2.2: el `false` tiene evidencia directa en las fotos (DS-492, corregido por Claude) |
| mano_detras | false | D (texto y fotos): los brazos van a los lados y atrás, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y fotos): los dos brazos se extienden a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto): las manos no sujetan nada | evidencia | FALSE | — |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): el pecho se empuja hacia delante y arriba, sin inclinar la espalda más allá de lo leve | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `sentado`, recurso `silla`, dosis «Mantén de 5 a 10 segundos. Repite 5 veces.»: coherentes con F1.
- Ilustración: Claude la describe; DeepSeek no la ha visto. No consta discrepancia en la evidencia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no declara población; no propongo rellenarlo (R8.1).
- `notas_etiquetado`: la nota conservadora de `brazo_sobre_hombro` ya no procede (DS-492).

### Incidencias
- `brazo_sobre_hombro` conservador cuando las fotos dan evidencia directa del `false` (DS-492).

### Propuesta de cambios
- `exigencias.brazo_sobre_hombro`: `true` → `false` (D, fotos) y nota informativa que cita las fotos (DS-492, corregido por Claude). Ilustración corregida por Claude (`sentado.mjs`): los brazos se abren hacia abajo, como en las fotos.
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 244. giro-tronco-sentado

### Identificación
- ID: `giro-tronco-sentado`
- Nombre: Giro de tronco en la silla
- Fuente: NHS, «Sitting exercises» (F1), «Upper-body twist» (apartado 244)
- Población destinataria de la fuente (si la declara): la evidencia no la declara. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar con el protocolo 1.0 (lote 1, REQUIERE CORRECCIONES)
- Resultado documental: C1 en el movimiento. `ambos_brazos: true`, pero conservador: las manos se apoyan en los hombros contrarios, y Q1 excluye las manos en reposo; no está claro si los brazos cruzados lo son (matiz de Claude). La nota de `mano_detras` es correcta.

### Evidencia de la fuente
- Ubicación exacta: F1, «Upper-body twist» (apartado 244).
- Pasos originales relevantes, resumidos con palabras propias: sentado erguido con los pies en el suelo; cruzar los brazos y llevar las manos a los hombros; sin mover la cadera, girar la parte alta del cuerpo a la izquierda, 5 s; a la derecha; 5 veces a cada lado.
- Coincidencias (C1): sentado, brazos cruzados con las manos en el hombro contrario, giro sin mover la cadera, 5 s, 5 veces por lado.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (texto y fotos), las manos sobre el propio cuerpo y el giro del tronco. D (Q1/P9): las palmas sobre el propio cuerpo no cuentan como apoyo.
- Limitaciones de la verificación: la ilustración de HealthMove la describe Claude; DeepSeek no la ha visto.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movilidad local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y fotos): las manos quedan a la altura de los hombros contrarios, no por encima | evidencia | FALSE | — |
| mano_detras | false | D (texto y fotos): las manos van por delante, al hombro contrario | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y fotos): los brazos se cruzan y cada mano se apoya en el hombro contrario | conservadora | TRUE | Q1 (P9): no está claro si es reposo; nota `[conservadora]` añadida por Claude |
| agarre | false | D (texto): las manos descansan sobre el hombro, no sujetan | evidencia | FALSE | R7.4 y Q2 (P10): contacto sin prensión; aquí no se pide cerrar la mano |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | true | D (texto y fotos): el tronco gira sin mover la cadera | evidencia | TRUE | §4: girar los hombros respecto a la cadera |

### Otros campos
- Fase `calentamiento` y `calma`, posición `sentado`, recurso `silla`, dosis «5 veces hacia cada lado.»: coherentes con F1.
- Ilustración: Claude la describe; DeepSeek no la ha visto. No consta discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no declara población; no propongo rellenarlo.
- `notas_etiquetado` actual: «Las manos van a los hombros por delante: no es mano_detras.» Correcta; no propongo cambiarla.

### Incidencias
- Ninguna propia.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.
- Nada más.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 245. tobillos-punta-talon-sentado

### Identificación
- ID: `tobillos-punta-talon-sentado`
- Nombre: Punta y talón en la silla
- Fuente: Age UK Devon, «Seated Vitality at Home» (F5), «Ankle Activator», p. 5 (apartado 245)
- Población destinataria de la fuente (si la declara): la evidencia no la declara. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar con el protocolo 1.0 (lote 2, REQUIERE CORRECCIONES)
- Resultado documental: C1 en el movimiento. La instrucción 4 («Aumenta el recorrido poco a poco») sí está en la fuente (D). `flexion_profunda_rodilla: false` con D (fotos: la rodilla no pasa de 90°). La adaptación «apoyar las manos en los muslos» ya está documentada.

### Evidencia de la fuente
- Ubicación exacta: F5, «Ankle Activator», p. 5 (apartado 245).
- Pasos originales relevantes, resumidos con palabras propias: postura erguida; los pies en el suelo; sujetarse a la silla si hace falta; con el pie izquierdo, la punta donde estaba el talón y el talón donde estaba la punta, 4 veces; con el derecho, 4 veces; «Gradually increase range of movement».
- Coincidencias (C1): el movimiento de punta y talón, 4 veces por pie, y el aumento gradual del recorrido.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, «apoyar las manos en los muslos» en lugar de sujetarse a la silla (ya documentada). C3, ninguna.
- Hechos, inferencias e incertidumbres: D (texto y fotos), el movimiento y la rodilla sin pasar de 90°. D (texto), el aumento gradual del recorrido.
- Limitaciones de la verificación: la ilustración de HealthMove la describe Claude; DeepSeek no la ha visto.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y fotos): las manos en los muslos, por debajo de los hombros | evidencia | FALSE | — |
| mano_detras | false | D (texto y fotos): las manos van por delante | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): las manos reposan en los muslos; la fuente permite sujetarse a la silla, pero HealthMove lo sustituye por las manos en los muslos | evidencia | FALSE | Q1 (P9): las manos en reposo no cuentan |
| agarre | false | D (texto): las manos no sujetan nada | evidencia | FALSE | — |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (fotos): la rodilla no pasa de 90° | evidencia | FALSE | §4: rodilla más de 90° |
| flexion_amplia_cadera | false | D (texto): el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D (texto): sentado; el peso del cuerpo no cae sobre puntas o talones | evidencia | FALSE | §4: solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis «4 veces con cada pie.»: coherentes con F5.
- Ilustración: Claude la describe; DeepSeek no la ha visto. No consta discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no declara población; no propongo rellenarlo.
- `notas_etiquetado` actual: «Sentado no se soporta el peso del cuerpo sobre puntas o talones: no es puntillas_talones.» Correcta; no propongo cambiarla.

### Incidencias
- Ninguna propia.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.
- Nada más.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 246. inclinacion-lateral-sentado

### Identificación
- ID: `inclinacion-lateral-sentado`
- Nombre: Inclinación lateral deslizando la mano
- Fuente: Age UK Devon, «Seated Vitality at Home» (F5), «Side Stretch», p. 7 (apartado 246)
- Población destinataria de la fuente (si la declara): la evidencia no la declara. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar con el protocolo 1.0 (lote 2, REQUIERE CORRECCIONES)
- Resultado documental: C1 en el movimiento. C3 en la dosis: «1 o 2 veces hacia cada lado» añade una repetición que la fuente no da (ver DS-493). `variante_de: inclinacion-lateral-brazo-arriba` (contexto, no se audita).

### Evidencia de la fuente
- Ubicación exacta: F5, «Side Stretch», p. 7 (apartado 246).
- Pasos originales relevantes, resumidos con palabras propias: postura erguida; deslizar una mano por el lado de la silla hacia abajo todo lo posible; mantener la postura; no inclinarse hacia delante ni hacia atrás; hasta 10 s; volver; repetir hacia el otro lado. No da número de repeticiones: una vez por lado.
- Coincidencias (C1): sentado, inclinación lateral deslizando la mano, hasta 10 s, una vez por lado.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la dosis «1 o 2 veces» añade una repetición que la fuente no da (DS-493). C2, ninguna.
- Hechos, inferencias e incertidumbres: D (texto y foto), la inclinación lateral. D (texto), una vez por lado.
- Limitaciones de la verificación: la ilustración de HealthMove la describe Claude; DeepSeek no la ha visto.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y foto): la mano baja por el lado de la silla, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y foto): la mano va por el lado, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): trabaja un brazo; el otro reposa | evidencia | FALSE | Q1 (P9): la mano en reposo no cuenta |
| agarre | false | D (texto): la mano se desliza, no sujeta | evidencia | FALSE | — |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | true | D (texto y foto): el tronco se inclina de lado | evidencia | TRUE | §4: inclinar la espalda hacia un lado más allá de lo leve |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `sentado`, recurso `silla`, dosis «1 o 2 veces hacia cada lado, hasta 10 segundos.»: la segunda repetición no está en la fuente (DS-493).
- Ilustración: Claude la describe; DeepSeek no la ha visto. No consta discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no declara población; no propongo rellenarlo.
- `notas_etiquetado` actual: «Inclinación lateral del tronco; sin brazo por encima del hombro.» Correcta; no propongo cambiarla.

### Incidencias
- La dosis añade una repetición que la fuente no da (DS-493).

### Propuesta de cambios
- `dosis`: «1 vez hacia cada lado, hasta 10 segundos.» (R3.1, Q5; DS-493). Si el desarrollador prefiere conservar la vaguedad de la fuente, se deja «Hasta 10 segundos hacia cada lado» y la laguna va a `notas_etiquetado`.
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 247. estiramiento-gemelo-sentado

### Identificación
- ID: `estiramiento-gemelo-sentado`
- Nombre: Estiramiento de gemelo en la silla
- Fuente: Age UK Devon, «Seated Vitality at Home» (F5), «Calf Stretch», p. 8 (apartado 247)
- Población destinataria de la fuente (si la declara): la evidencia no la declara. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar con el protocolo 1.0 (lote 4, REQUIERE CORRECCIONES)
- Resultado documental: C1 en el movimiento. `ambos_brazos: false` con D (las palmas sobre la propia rodilla; Q1/P9). La nota actual coincide con la foto (D).

### Evidencia de la fuente
- Ubicación exacta: F5, «Calf Stretch», p. 8 (apartado 247).
- Pasos originales relevantes, resumidos con palabras propias: postura erguida; estirar una pierna; «Place hands on opposite knee»; llevar la punta del pie hacia arriba, poco a poco hacia la rodilla; hasta 10 s; soltar despacio; cambiar de pierna.
- Coincidencias (C1): sentado, una pierna estirada, las manos sobre la rodilla contraria, la punta hacia arriba, hasta 10 s, cambiar de pierna.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (texto y foto), las manos sobre la propia rodilla y el talón en el suelo. D (Q1/P9): las palmas sobre el propio cuerpo no cuentan como apoyo.
- Limitaciones de la verificación: la ilustración de HealthMove la describe Claude; DeepSeek no la ha visto.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y foto): las manos sobre la rodilla, por debajo de los hombros | evidencia | FALSE | — |
| mano_detras | false | D (texto y foto): las manos van por delante | evidencia | FALSE | — |
| ambos_brazos | false | D (texto y foto): las dos palmas se apoyan en la propia rodilla; no trabajan | evidencia | FALSE | Q1 (P9): las palmas sobre el propio cuerpo no cuentan |
| agarre | false | D (texto): las manos se apoyan, no sujetan | evidencia | FALSE | R7.4 y Q2 (P10): contacto sin prensión; aquí no se pide cerrar la mano |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto y foto): el tronco erguido | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `sentado`, recurso `silla`, dosis «Hasta 10 segundos con cada pierna.»: coherentes con F5.
- Ilustración: Claude la describe; DeepSeek no la ha visto. No consta discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no declara población; no propongo rellenarlo.
- `notas_etiquetado` actual: «El talón queda en el suelo y no se inclina el tronco.» Coincide con la foto (D); no propongo cambiarla.

### Incidencias
- Ninguna propia.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.
- Nada más.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 248. abrir-cerrar-manos

### Identificación
- ID: `abrir-cerrar-manos`
- Nombre: Abrir y cerrar las manos
- Fuente: Age UK Devon, «Seated Vitality at Home» (F5), «Hand and Finger Flexion and Extension», p. 9 (apartado 248)
- Población destinataria de la fuente (si la declara): la evidencia no la declara. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar con el protocolo 1.0 (lote 4, REQUIERE CORRECCIONES)
- Resultado documental: C1 en el movimiento. C3 en `brazo_sobre_hombro`: las fotos muestran las manos a la altura de la cara, por encima de los hombros, y la etiqueta es `false` (ver DS-494). `ambos_brazos: true` con D (los dos brazos a la vez).

### Evidencia de la fuente
- Ubicación exacta: F5, «Hand and Finger Flexion and Extension», p. 9 (apartado 248).
- Pasos originales relevantes, resumidos con palabras propias: postura erguida; «Extend the arms away from the body»; cerrar los dedos en un puño; abrir y estirar los dedos; hasta 8 veces.
- Coincidencias (C1): sentado, los dos brazos extendidos, puño y dedos abiertos, hasta 8 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, `brazo_sobre_hombro: false` cuando las fotos (D) muestran las manos por encima de los hombros (DS-494). C2, ninguna.
- Hechos, inferencias e incertidumbres: D (texto y fotos), los dos brazos a la vez y las manos por encima de los hombros. D (texto), el puño.
- Limitaciones de la verificación: la ilustración de HealthMove la describe Claude; DeepSeek no la ha visto.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (fotos): las manos quedan a la altura de la cara, por encima de los hombros | evidencia | TRUE | §4: codo o mano por encima del hombro (DS-494) |
| mano_detras | false | D (texto y fotos): los brazos van por delante | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y fotos): los dos brazos se extienden a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto): cerrar los dedos en un puño | evidencia | TRUE | §4: cerrar la mano, aunque sea sin objeto |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recurso `silla`, dosis «Hasta 8 veces.»: coherentes con F5.
- Ilustración: Claude la describe; DeepSeek no la ha visto. No consta discrepancia.
- Exclusiones del catálogo v1: ninguna. No es movilidad aislada de la muñeca: mueve los dedos y el puño.
- `fuente.especifica_de`: vacío. La evidencia no declara población; no propongo rellenarlo.
- `notas_etiquetado` actual: «Cerrar el puño, aunque sea sin objeto, se marca como agarre.» Correcta; no propongo cambiarla.

### Incidencias
- `brazo_sobre_hombro: false` contradice las fotos de la fuente (DS-494).

### Propuesta de cambios
- `exigencias.brazo_sobre_hombro`: `false` → `true` (D, §4; DS-494). Efecto en el motor: `brazo_arriba` deja de ofrecer este ejercicio.
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 249. banda-curl-sentado

### Identificación
- ID: `banda-curl-sentado`
- Nombre: Flexión de codos con banda elástica
- Fuente: Age UK Devon, «Seated Vitality at Home» (F5), «Arm Curl», p. 15 (apartado 249)
- Población destinataria de la fuente (si la declara): la evidencia no la declara. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar con el protocolo 1.0 (lote 4, REQUIERE CORRECCIONES)
- Resultado documental: C3 en la secuencia, corregida: falta el paso «bajar las manos hasta la altura de los codos antes de mantener» (DS-495), y Claude lo añadió. `brazo_sobre_hombro: true` conservador con nota (CN-1, P25).

### Evidencia de la fuente
- Ubicación exacta: F5, «Arm Curl», p. 15 (apartado 249).
- Pasos originales relevantes, resumidos con palabras propias: sentado alto; la banda bajo uno o los dos pies; sujetarla por los dos lados; «Draw the fists upwards towards shoulders then drop the hands to be in line with the elbows», con las muñecas alineadas; mantener hasta 5 s; relajar los brazos a los lados; hasta 4 veces.
- Coincidencias (C1): sentado, la banda bajo los pies, los puños hacia los hombros, mantener 5 s, hasta 4 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, falta el paso de bajar las manos hasta la altura de los codos antes de mantener (DS-495). C2, ninguna.
- Hechos, inferencias e incertidumbres: D (texto y fotos), la secuencia y los puños a la altura del pecho y los hombros. N, si la mano pasa del hombro.
- Limitaciones de la verificación: la ilustración la verificó Claude (renderizada).

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | true | D (texto): la banda ofrece resistencia | evidencia | TRUE | §4: resistencia añadida (incluye banda) |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | I (texto y fotos): los puños suben hasta la altura del pecho y los hombros; no consta que no pasen del hombro | conservadora | TRUE | R2.1 y CN-1 (P25): ante la duda, `true` conservador con nota |
| mano_detras | false | D (texto y fotos): los puños van por delante | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): la banda se sujeta por los dos lados y los dos brazos se doblan | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto): sujetar la banda por los dos lados | evidencia | TRUE | §4: cerrar la mano con objeto |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recurso `silla` y `banda`, dosis «Hasta 4 veces.»: coherentes con F5.
- Ilustración: era una discrepancia conocida de R7.7 (`sentado.mjs:33`); Claude la corrigió el 2026-10-24 y la renderizó: ya coincide con la fuente. Ahora muestra los dos brazos con la banda y el antebrazo horizontal.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no declara población; no propongo rellenarlo.
- `notas_etiquetado` actual: la nota de `brazo_sobre_hombro` sigue la forma de R2.4. Correcta; no propongo cambiarla.

### Incidencias
- Falta un paso de la secuencia (DS-495).
- La ilustración (R7.7), ya corregida.

### Propuesta de cambios
- `instrucciones`: añadir el paso de la fuente: «Baja las manos hasta la altura de los codos antes de mantener.» (R3.1, Q5; DS-495).
- `fuente.consultado`: 2026-10-24.
- `instrucciones`: paso de la fuente añadido por Claude (DS-495). Ilustración: corregida.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 250. elevacion-talones-sin-apoyo

### Identificación
- ID: `elevacion-talones-sin-apoyo`
- Nombre: Elevación de talones sin apoyo
- Fuente: NHS, «Strength exercises» (F2), «Calf raises» (variante) (apartado 250)
- Población destinataria de la fuente (si la declara): la evidencia no la declara. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar con el protocolo 1.0 (lote 5, REQUIERE CORRECCIONES)
- Resultado documental: C1 en el movimiento. C2 en la silla cerca y la contingencia «Si pierdes el equilibrio, sujétate a la silla»: son de HealthMove y no están en `adaptaciones` (ver DS-496). `equilibrio_sin_apoyo: true` con D (la fuente dice «without support»).

### Evidencia de la fuente
- Ubicación exacta: F2, «Calf raises» (apartado 250).
- Pasos originales relevantes, resumidos con palabras propias: con las manos en el respaldo de una silla, subir los dos talones todo lo cómodo, despacio y con control; 5 veces. «To make this more difficult, perform the exercise without support.»
- Coincidencias (C1): de pie, sin apoyo, subir los dos talones despacio, 5 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la silla cerca y la contingencia de sujetarse si se pierde el equilibrio son de HealthMove (R6.3; DS-496). C3, ninguna.
- Hechos, inferencias e incertidumbres: D (texto), la variante sin apoyo. D (texto), la silla cerca y la contingencia son de HealthMove.
- Limitaciones de la verificación: la ilustración de HealthMove la describe Claude; DeepSeek no la ha visto.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | true | D (texto): «without support» | evidencia | TRUE | §4: de pie sin sujetarse |
| una_pierna | false | D (texto): los dos talones suben a la vez | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos cuelgan a los lados | evidencia | FALSE | — |
| mano_detras | false | D (texto): las manos a los lados | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos cuelgan a los lados, sin función | evidencia | FALSE | Q1 (P9): los brazos en reposo no cuentan |
| agarre | false | D (texto): las manos no sujetan nada | evidencia | FALSE | — |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): de pie, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): de pie, el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | true | D (texto): subir los dos talones | evidencia | TRUE | §4: de pie, el peso sobre las puntas |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `de_pie`, recurso `silla`, dosis «5 veces.»: coherentes con F2.
- Ilustración: Claude la describe; DeepSeek no la ha visto. No consta discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no declara población; no propongo rellenarlo.
- `notas_etiquetado` actual: «Variante más difícil indicada por la fuente. La silla queda cerca como seguridad.» La segunda frase es un consejo de HealthMove (clase 2, DG-6); no cambia etiquetas. Falta la adaptación en `adaptaciones` (DS-496).

### Incidencias
- La silla cerca y la contingencia de HealthMove no están en `adaptaciones` (DS-496).

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente solo dice "without support"; la silla cerca y sujetarse si se pierde el equilibrio son de HealthMove.» (R6.3; DS-496).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 251. flexiones-pared

### Identificación
- ID: `flexiones-pared`
- Nombre: Flexiones contra la pared
- Fuente: NHS, «Strength exercises» (F2), «Wall press-up» (apartado 251)
- Población destinataria de la fuente (si la declara): la evidencia no la declara. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar con el protocolo 1.0 (lote 5, REQUIERE CORRECCIONES)
- Resultado documental: C1 en el movimiento. `ambos_brazos: true` y `peso_en_manos: true` con D (las dos palmas en la pared). El motivo antiguo ya está corregido.

### Evidencia de la fuente
- Ubicación exacta: F2, «Wall press-up» (apartado 251).
- Pasos originales relevantes, resumidos con palabras propias: a un brazo de la pared; las manos planas a la altura del pecho con los dedos hacia arriba; con la espalda recta, doblar los brazos con los codos junto al cuerpo; volver; 3 series de 5 a 10.
- Coincidencias (C1): de pie, las palmas en la pared a la altura del pecho, doblar los brazos, volver, 3 series de 5 a 10.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (texto y fotos), las dos palmas en la pared y el peso sobre las manos.
- Limitaciones de la verificación: la ilustración de HealthMove la describe Claude; DeepSeek no la ha visto.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto): se apoya en la pared | evidencia | FALSE | §4: se sujeta a algo |
| una_pierna | false | D (texto): de pie con los dos pies | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y fotos): las manos a la altura del pecho, por debajo de los hombros | evidencia | FALSE | — |
| mano_detras | false | D (texto y fotos): las manos van por delante | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y fotos): las dos palmas en la pared | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto): las palmas abiertas, sin cerrar la mano | evidencia | FALSE | R7.4 y Q2 (P10): contacto sin prensión; aquí la instrucción pide la palma abierta |
| peso_en_manos | true | D (texto y fotos): las manos soportan parte del peso corporal | evidencia | TRUE | §4: manos o muñecas soportan parte del peso |
| flexion_profunda_rodilla | false | D (texto): de pie, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): de pie, el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D (texto): de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): la espalda recta, sin inclinación más allá de lo leve | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `de_pie`, recurso `pared`, dosis «3 series de 5 a 10 repeticiones.»: coherentes con F2.
- Ilustración: Claude la describe; DeepSeek no la ha visto. No consta discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no declara población; no propongo rellenarlo.
- `notas_etiquetado` actual: «Palmas abiertas, sin agarre; las manos soportan parte del peso.» Correcta; no propongo cambiarla.

### Incidencias
- Ninguna propia.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.
- Nada más.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 252. equilibrio-una-pierna-pared

### Identificación
- ID: `equilibrio-una-pierna-pared`
- Nombre: Apoyo sobre una pierna frente a la pared
- Fuente: NHS, «Balance exercises» (F3), «One-leg stand» (apartado 252)
- Población destinataria de la fuente (si la declara): la evidencia no la declara. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar con el protocolo 1.0 (lote 5, REQUIERE CORRECCIONES)
- Resultado documental: C1 en el movimiento. C3 en la instrucción, corregida: Claude aclaró cómo se levanta la pierna según la foto (DS-497). `ambos_brazos` y `brazo_sobre_hombro` conservadores con nota.

### Evidencia de la fuente
- Ubicación exacta: F3, «One-leg stand» (apartado 252).
- Pasos originales relevantes, resumidos con palabras propias: de cara a la pared, con los brazos estirados y las yemas tocándola; levantar la pierna izquierda con la cadera nivelada y la rodilla de apoyo algo doblada; bajar el pie con suavidad; 5 a 10 s; 3 con cada pierna. El texto no dice cómo se levanta la pierna.
- Coincidencias (C1): de pie frente a la pared, las yemas en ella, una pierna levantada, 5 a 10 s, 3 por pierna.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la instrucción no dice cómo se levanta la pierna y la foto muestra la rodilla por delante hasta la altura de la cadera (DS-497). C2, ninguna.
- Hechos, inferencias e incertidumbres: D (texto y fotos), los brazos estirados a la altura de los hombros y la rodilla por delante hasta la cadera. I, el muslo horizontal es como al estar sentado, no más cerca del tronco.
- Limitaciones de la verificación: la ilustración la verificó Claude (renderizada).

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto): se apoya en la pared | evidencia | FALSE | §4: se sujeta a algo |
| una_pierna | true | D (texto): el peso cae sobre una pierna | evidencia | TRUE | §4: el peso sobre un solo pie |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (fotos): los brazos estirados al frente, a la altura de los hombros | conservadora | TRUE | R2.1 y CN-1 (P25): el brazo llega a la altura del hombro y no consta que no la pase; nota pendiente de forma (DS-497) |
| mano_detras | false | D (texto y fotos): los brazos van al frente | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y fotos): las dos manos tocan la pared | conservadora | TRUE | Q1 (P9): apoyo bilateral; nota pendiente de forma (DS-497) |
| agarre | false | D (texto): las yemas tocan la pared, sin cerrar la mano | evidencia | FALSE | R7.4 y Q2 (P10): contacto sin prensión; aquí la instrucción pide las yemas |
| peso_en_manos | false | D (texto): las yemas solo tocan la pared | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): la rodilla de apoyo algo doblada, sin pasar de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | I (fotos): la rodilla sube hasta la altura de la cadera, con el muslo en torno a la horizontal; está en el umbral de §4 («más cerca del tronco que al estar sentado») y no consta que no lo pase | conservadora | TRUE | R2.1 y R2.2: sin D para el `false` (corregido por Claude) |
| puntillas_talones | false | D (texto): de pie con el pie apoyado | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `de_pie`, recurso `pared`, dosis «3 veces con cada pierna, de 5 a 10 segundos.»: coherentes con F3.
- Ilustración: era una discrepancia conocida de R7.7 (`depie.mjs:18`); Claude la corrigió el 2026-10-24 y la renderizó: ya coincide con la fuente. Ahora la rodilla sube por delante.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no declara población; no propongo rellenarlo.
- `notas_etiquetado` actual: las notas de `ambos_brazos` y `brazo_sobre_hombro` no siguen del todo la forma de R2.4 (DS-497).

### Incidencias
- La instrucción no dice cómo se levanta la pierna (DS-497).
- Las notas conservadoras no siguen la forma de R2.4 (DS-497).
- La ilustración (R7.7), ya corregida.

### Propuesta de cambios
- `instrucciones`: aclarar cómo se levanta la pierna, según la foto: «Levanta la pierna izquierda por delante, con la rodilla doblada hasta la altura de la cadera y la cadera nivelada.» (R3.1, Q5; DS-497).
- `notas_etiquetado`: reescribir las dos notas en la forma de R2.4 (DS-497).
- `fuente.consultado`: 2026-10-24.
- Ilustración: corregida.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 253. estiramiento-gemelo-pared

### Identificación
- ID: `estiramiento-gemelo-pared`
- Nombre: Estiramiento de gemelo en la pared
- Fuente: NHS, «Flexibility exercises» (F4), «Calf stretch» (apartado 253)
- Población destinataria de la fuente (si la declara): la evidencia no la declara. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar con el protocolo 1.0 (lote 5, REQUIERE CORRECCIONES)
- Resultado documental: C1 en el movimiento. C3 en `peso_en_manos`: la foto muestra el cuerpo inclinado hacia la pared, con parte del peso en las manos, y la etiqueta es `false` (ver DS-498). `ambos_brazos` y `brazo_sobre_hombro` conservadores con nota.

### Evidencia de la fuente
- Ubicación exacta: F4, «Calf stretch» (apartado 253).
- Pasos originales relevantes, resumidos con palabras propias: las manos en la pared «for stability»; doblar la pierna derecha y llevar la izquierda atrás al menos un pie, recta; los dos pies planos; mantener la pierna de atrás estirada y el talón en el suelo; 3 por lado.
- Coincidencias (C1): de pie, las manos en la pared, una pierna atrás estirada, el talón en el suelo, 3 por lado.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, `peso_en_manos: false` cuando la foto (I) muestra parte del peso en las manos (DS-498). C2, ninguna.
- Hechos, inferencias e incertidumbres: D (texto y fotos), las dos manos en la pared a la altura de los hombros y el cuerpo inclinado hacia ella. I, las manos soportan algo de peso.
- Limitaciones de la verificación: la ilustración de HealthMove la describe Claude; DeepSeek no la ha visto.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto): se apoya en la pared | evidencia | FALSE | §4: se sujeta a algo |
| una_pierna | true | D (texto): al dar el paso atrás, el peso cae un momento sobre un pie | evidencia | TRUE | §4: el peso sobre un solo pie |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (fotos): las manos en la pared a la altura de los hombros | conservadora | TRUE | R2.1 y CN-1 (P25): el brazo llega a la altura del hombro y no consta que no la pase; nota pendiente de forma (DS-498) |
| mano_detras | false | D (texto y fotos): las manos van al frente | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y fotos): las dos manos en la pared | conservadora | TRUE | Q1 (P9): apoyo bilateral; nota pendiente de forma (DS-498) |
| agarre | false | D (texto): las manos se apoyan en la pared, sin cerrar la mano | evidencia | FALSE | R7.4 y Q2 (P10): contacto sin prensión; aquí la instrucción pide apoyar las manos |
| peso_en_manos | false | I (fotos): el cuerpo inclinado hacia la pared deja parte del peso en las manos | conservadora | TRUE | R2.1: ante la duda, `true` conservador con nota (DS-498) |
| flexion_profunda_rodilla | false | D (texto): la pierna de atrás estirada y la de delante doblada, sin pasar de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D (texto): los dos pies planos | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): el cuerpo inclinado hacia la pared, sin más allá de lo leve | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `de_pie`, recurso `pared`, dosis «3 veces con cada pierna.»: coherentes con F4.
- Ilustración: Claude la describe; DeepSeek no la ha visto. No consta discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no declara población; no propongo rellenarlo.
- `notas_etiquetado` actual: las notas de `ambos_brazos` y `brazo_sobre_hombro` no siguen del todo la forma de R2.4; falta la nota de `peso_en_manos` (DS-498).

### Incidencias
- `peso_en_manos: false` con un indicio de carga en las manos (DS-498).
- Las notas conservadoras no siguen la forma de R2.4 (DS-498).

### Propuesta de cambios
- `exigencias.peso_en_manos`: `false` → `true` conservador (R2.1; DS-498). Efecto en el motor: `peso_manos` deja de ofrecer este ejercicio.
- `notas_etiquetado`: añadir la nota de `peso_en_manos` y reescribir las de `ambos_brazos` y `brazo_sobre_hombro` en la forma de R2.4 (DS-498).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## Revisión de DeepSeek

**Consulta C30** (dos bloques, con «FIN DEL BORRADOR»). Análisis: `deepseek/analisis-claude/fase-29-lote29.md`.

**Aceptado:** DS-493 (dosis de 246: una vez por lado), DS-494 (`brazo_sobre_hombro` → `true` con D en 248), DS-495 (paso de la secuencia de 249), DS-496 (adaptación de seguridad de 250, R6.3), DS-497 (cómo se levanta la pierna en 252), DS-498 (`peso_en_manos` conservador en 253).

**Corregido por Claude:**
- DS-492: con las fotos como evidencia directa, `brazo_sobre_hombro` de 243 pasa a `false` (R2.2), no a una nota conservadora.
- 244: DeepSeek daba `ambos_brazos` como evidencia; Claude lo deja conservador con nota, porque las manos se apoyan en el propio cuerpo (Q1 excluye el reposo).
- 249 y 252 quedaban en REQUIERE CORRECCIONES por R7.7; Claude corrigió las ilustraciones y la secuencia o la instrucción, y quedan listos.

## Resumen del lote

- **11 ejercicios reauditados con el protocolo 1.0.** Los 11 quedan LISTOS PARA APROBACIÓN DOCUMENTAL, con los cambios aplicados.
- **Motivos antiguos:** resueltos todos. En 245, 247 y 251 ya no había nada que corregir (la instrucción estaba en la fuente, o las reglas Q1 y P9 lo resolvieron).
- **Cambios de etiquetas:** 243, `brazo_sobre_hombro` → `false` (D); 248, `brazo_sobre_hombro` → `true` (D); 252, `flexion_amplia_cadera` → `true` conservador; 253, `peso_en_manos` → `true` conservador.
- **Instrucciones o dosis corregidas hacia la fuente:** 246, 249 y 252. **Adaptación nueva (R6.3):** 250.
- **Ilustraciones corregidas:** 3; la lista de discrepancias conocidas de R7.7 queda vacía.
