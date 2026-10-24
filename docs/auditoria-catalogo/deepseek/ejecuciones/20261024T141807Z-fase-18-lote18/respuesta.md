# Borrador de auditoría · lote 18 (consulta C19)

> **Preparado por DeepSeek** a partir de `evidencia-lote-18` (Claude) y del bloque `catalogo-lote18`. No he abierto las fuentes: todo lo que afirmo sobre ellas procede de la evidencia de Claude. No emito juicios clínicos. Los valores propuestos son propuestas; el desarrollador decide.
>
> **Limitaciones de la verificación (comunes a los 8):**
> - No he visto las fotos ni el PDF: la calificación D/I/N de las imágenes es la de Claude y no la he podido contrastar.
> - No he podido comprobar las ilustraciones de HealthMove contra la fuente (R7.6/R7.7): la evidencia dice que coinciden las 8 y lo tomo como referencia, pero no lo verifico.
> - La evidencia no recoge el texto literal de la fuente, solo resúmenes con palabras propias y alguna cita breve. Las citas que aparecen entre «» son las que Claude ha puesto en la evidencia; no añado ninguna.
> - No he podido comprobar el estado de `notas_etiquetado` ni de `adaptaciones` más allá de lo que trae el bloque del catálogo.
> - La población de la fuente («personas mayores») es la que Claude deduce de la introducción del NIA; no la he leído.

---

## 135. flexion-tronco-delante-sentado

### Identificación
- ID: `flexion-tronco-delante-sentado`
- Nombre: Inclinarse hacia delante en la silla
- Fuente: National Institute on Aging (NIH), «Exercise & Physical Activity: Your Everyday Guide», «Back 1», p. 78 del PDF (impresa 76) (F1)
- Población destinataria de la fuente (si la declara): «personas mayores» (D: la introducción del NIA busca «improve the health and well-being of older adults»). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1) en el movimiento; C3 en el cuello (la fuente pide relajarlo y bajar la barbilla; HealthMove no lo recoge, por la exclusión del catálogo v1).

### Evidencia de la fuente
- Ubicación exacta: F1, «Back 1», p. 78 del PDF (impresa 76) (apartado 135).
- Pasos originales relevantes, resumidos con palabras propias: sentado al borde de una silla firme sin brazos, pies al ancho de los hombros; inclinarse despacio desde la cadera con la espalda y el cuello rectos; relajar un poco el cuello y bajar la barbilla; seguir inclinándose y deslizar las manos por las piernas hacia las espinillas; 10 a 30 s; volver despacio; 3 a 5 veces. Progresión: inclinarse más hasta tocar los talones.
- Coincidencias (C1): posición sentada, inclinación desde la cadera, manos por las piernas, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente pide relajar el cuello y bajar la barbilla; HealthMove no lo recoge. Es una omisión coherente con la exclusión del catálogo v1 («Movimientos de cuello»), pero no está documentada como adaptación.
- Adaptaciones que deben documentarse: la omisión del cuello y de la barbilla (ver DS-400).
- Hechos, inferencias e incertidumbres: D (texto y foto), sentado, tronco muy inclinado hacia delante, manos por las espinillas, cabeza baja. D (texto), la progresión «hasta tocar los talones» no está en HealthMove.
- Limitaciones de la verificación: la evidencia no dice si la foto muestra las manos cerradas o abiertas; dice «las manos bajando por las espinillas».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y foto): las manos bajan por las piernas, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y foto): las manos van delante, por las piernas | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): las dos manos deslizan por las piernas, pero no hay función de ejecución ni de apoyo; el movimiento es del tronco | evidencia | FALSE | DG-4 / Q1 (P9): manos que solo acompañan el movimiento, sin función de ejecución ni de apoyo |
| agarre | false | D (texto): las manos deslizan por las piernas; no se pide cerrar la mano | evidencia | FALSE | R7.4 / Q2 (P10): contacto con el propio cuerpo, no apoyo |
| peso_en_manos | false | D: sentado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado con los pies apoyados, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | true | D (texto y foto): inclinarse desde la cadera con el tronco muy inclinado acerca el muslo al tronco | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | true | D (texto y foto): el tronco se inclina hacia delante más allá de una inclinación leve | evidencia | TRUE | §4: inclinar la espalda hacia delante |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `sentado`, recurso `silla`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: la fuente pide relajar el cuello y bajar la barbilla; HealthMove no lo recoge. Coherente con la exclusión «Movimientos de cuello», pero no documentado como adaptación (DS-400).
- `fuente.especifica_de`: vacío. La evidencia recoge que la fuente se dirige a «personas mayores» (D). Propuesta: «personas mayores» (R8.1).

### Incidencias
- La omisión del cuello y de la barbilla no está documentada como adaptación (DS-400).
- La progresión «hasta tocar los talones» no está en HealthMove; no es una diferencia de exigencia, pero conviene anotarla.

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente pide relajar el cuello y bajar la barbilla; aquí no se recoge, porque el catálogo v1 no incluye movimientos de cuello.» (DS-400).
- `fuente.especifica_de`: «personas mayores» (R8.1).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos (adaptación del cuello y `especifica_de`).

---

## 136. estiramiento-espalda-alta-sentado

### Identificación
- ID: `estiramiento-espalda-alta-sentado`
- Nombre: Empujar las manos al frente
- Fuente: National Institute on Aging (NIH), «Exercise & Physical Activity: Your Everyday Guide», «Upper Back», p. 80 del PDF (impresa 78) (F1)
- Población destinataria de la fuente (si la declara): «personas mayores» (D). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C3 en la versión (HealthMove usa la progresión como versión de base) sin adaptación documentada (DS-401).

### Evidencia de la fuente
- Ubicación exacta: F1, «Upper Back», p. 80 del PDF (impresa 78) (apartado 136).
- Pasos originales relevantes, resumidos con palabras propias: sentado en una silla firme sin brazos; los brazos al frente a la altura de los hombros «with palms facing outward»; hombros relajados, el tronco quieto, alcanzar hacia delante con las manos; 10 a 30 s; 3 a 5 veces. **Progresión:** «cross your arms and interlace fingers».
- Coincidencias (C1): posición sentada, brazos al frente a la altura de los hombros, tronco quieto, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, HealthMove usa la **progresión** («entrelaza las manos al frente») como versión de base. La versión base de la fuente tiene las manos separadas con las palmas hacia fuera. No hay adaptación documentada (DS-401).
- Adaptaciones que deben documentarse: la sustitución de la versión base por la progresión (DS-401).
- Hechos, inferencias e incertidumbres: D (texto y fotos), sentada con los brazos estirados al frente a la altura de los hombros, las manos sin entrelazar; en un recuadro aparte, la progresión con los dedos entrelazados. D (texto), la versión base no tiene agarre.
- Limitaciones de la verificación: la evidencia no dice si la foto de la progresión muestra las palmas hacia fuera o hacia dentro.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: estiramiento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y foto): los brazos al frente a la altura de los hombros; la mano llega a la altura del hombro y no consta que no la pase | conservadora | TRUE | R2.1 / CN-1 (P25): `true` conservador con nota |
| mano_detras | false | D (texto y foto): las manos van al frente | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y foto): los dos brazos se estiran al frente a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto): «entrelaza las manos al frente» | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: sentado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado con los pies apoyados, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): el tronco quieto | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `sentado`, recurso `silla`, dosis: coherentes.
- Ilustración: coincide con las dos versiones (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. Propuesta: «personas mayores» (R8.1).

### Incidencias
- HealthMove usa la progresión como versión de base sin documentarlo (DS-401).
- La nota `[conservadora]` de `brazo_sobre_hombro` ya tiene la forma de R2.4; no la cambio.

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente describe esta versión como progresión; aquí se usa como versión de base.» (DS-401).
- `fuente.especifica_de`: «personas mayores» (R8.1).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos (adaptación de la progresión y `especifica_de`).

---

## 137. extension-codo-botella-sentado

### Identificación
- ID: `extension-codo-botella-sentado`
- Nombre: Estirar el codo por encima de la cabeza con botella
- Fuente: National Institute on Aging (NIH), «Exercise & Physical Activity: Your Everyday Guide», «Elbow Extension», p. 56 del PDF (impresa 54) (F1)
- Población destinataria de la fuente (si la declara): «personas mayores» (D). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1) en el movimiento; C2 en la posición (sentado, una de las dos que permite la fuente) y en el recurso (botella en lugar de pesa).

### Evidencia de la fuente
- Ubicación exacta: F1, «Elbow Extension», p. 56 del PDF (impresa 54) (apartado 137).
- Pasos originales relevantes, resumidos con palabras propias: de pie o sentado en una silla firme sin brazos; el peso en una mano, subir ese brazo hacia el techo y sujetarlo por debajo del codo con la otra mano; doblar el codo llevando el peso hacia el hombro, 1 s, y estirar sin bloquear el codo; 10 a 15 veces con cada brazo, y otras 10 a 15. Si es difícil sujetar pesas, usar muñequeras lastradas.
- Coincidencias (C1): el brazo sube hacia el techo, la otra mano sujeta por debajo del codo, doblar y estirar el codo, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, HealthMove lo hace sentado (una de las dos posiciones de la fuente) y con botella en lugar de pesa (recurso `peso_ligero`). Ninguna de las dos está documentada en `adaptaciones`.
- Adaptaciones que deben documentarse: la elección de la posición sentada y el uso de botella en lugar de pesa (ver DS-402).
- Hechos, inferencias e incertidumbres: D (texto y fotos), de pie, el brazo vertical por encima de la cabeza con la pesa; la otra mano sujeta el brazo por debajo del codo. D (texto), la fuente permite hacerlo sentado.
- Limitaciones de la verificación: la evidencia no dice si la foto muestra la mano cerrada sobre la pesa; dice «el peso en una mano».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado (HealthMove) / de pie o sentado (fuente) | evidencia | FALSE | Solo se define de pie; la versión de HealthMove es sentada |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | true | D (texto y foto): se sostiene una pesa (aquí, una botella) | evidencia | TRUE | §4: sostener peso o resistencia añadida |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y foto): el brazo sube hacia el techo, por encima de la cabeza | evidencia | TRUE | §4: codo o mano por encima de la altura del hombro |
| mano_detras | false | D (texto y foto): la mano que sujeta el codo está delante; la otra sube por delante | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y foto): un brazo sube y el otro sujeta el codo; los dos intervienen a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto): se sostiene una pesa (aquí, una botella) y la otra mano sujeta el codo | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado con los pies apoyados, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recursos `silla` y `peso_ligero`, dosis: coherentes con la versión de HealthMove.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. Propuesta: «personas mayores» (R8.1).

### Incidencias
- La elección de la posición sentada y el uso de botella en lugar de pesa no están documentados como adaptación (DS-402).

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente permite hacerlo de pie o sentado; aquí se hace sentado. Se usa una botella en lugar de una pesa.» (DS-402).
- `fuente.especifica_de`: «personas mayores» (R8.1).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos (adaptación de posición y recurso, y `especifica_de`).

---

## 138. estiramiento-cuadriceps-pie

### Identificación
- ID: `estiramiento-cuadriceps-pie`
- Nombre: Estirar la parte delantera del muslo
- Fuente: National Institute on Aging (NIH), «Exercise & Physical Activity: Your Everyday Guide», «Thigh, Standing», p. 87 del PDF (impresa 85) (F1)
- Población destinataria de la fuente (si la declara): «personas mayores» (D). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1) en el movimiento; `mano_detras: false` con la mano que coge el pie por detrás (clase de CN-4, aplazada).

### Evidencia de la fuente
- Ubicación exacta: F1, «Thigh, Standing», p. 87 del PDF (impresa 85) (apartado 138).
- Pasos originales relevantes, resumidos con palabras propias: de pie detrás de una silla firme; sujetarse a la silla con una mano «for balance»; doblar la pierna contraria hacia atrás y coger el pie con la mano de ese lado, con la rodilla apuntando al suelo; si no se llega, pasar una banda, cinturón o toalla por el pie y sujetar los extremos; tirar suavemente; 10 a 30 s; 3 a 5 veces con cada pierna.
- Coincidencias (C1): de pie detrás de la silla, una mano en el respaldo, la otra coge el pie por detrás, la rodilla doblada, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y foto), de pie detrás de la silla, una mano en el respaldo, la otra mano sujeta el pie por detrás; la rodilla muy doblada. D (texto), la mano coge el pie por detrás del cuerpo (clase de CN-4).
- Limitaciones de la verificación: la evidencia no dice si la mano que sujeta el pie está cerrada o abierta; dice «la otra mano sujeta el pie por detrás».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto y foto): una mano se sujeta a la silla «for balance» | evidencia | FALSE | §4: no exige estar sin apoyo; la fuente pide sujetarse |
| una_pierna | true | D (texto y foto): el peso cae sobre un solo pie mientras la otra pierna se dobla hacia atrás | evidencia | TRUE | §4: el peso cae sobre un solo pie |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: estiramiento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda (la toalla es opcional y no añade resistencia) | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y foto): la mano que sujeta el pie está por debajo del hombro; la otra está en el respaldo | evidencia | FALSE | — |
| mano_detras | false | D (texto y foto): la mano coge el pie por detrás del cuerpo, junto al glúteo, sin llegar a la espalda ni a la cabeza | conservadora | TRUE | CN-4 (aplazada): `true` conservador provisional (ver DS-403) |
| ambos_brazos | false | D (texto y foto): una mano se sujeta a la silla y la otra coge el pie; las dos intervienen a la vez | evidencia | TRUE | Q1 (P9): una mano se apoya mientras el otro brazo trabaja (ver DS-404) |
| agarre | true | D (texto): «sujétate con una mano» y «coge el pie con la mano de ese lado» | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: de pie; la mano en el respaldo no soporta el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | true | D (texto y foto): la rodilla muy doblada, con el talón hacia el glúteo | evidencia | TRUE | §4: rodilla más de 90° |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con el pie apoyado | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `de_pie`, recursos `silla` y `toalla`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. Propuesta: «personas mayores» (R8.1).

### Incidencias
- `mano_detras: false` con la mano que coge el pie por detrás: es la clase de CN-4, aplazada. Valor provisional `true` conservador (DS-403).
- `ambos_brazos: false` con una mano en el respaldo y la otra cogiendo el pie: Q1 (P9) dice que una mano que se apoya mientras el otro brazo trabaja cuenta como `ambos_brazos` (DS-404).

### Propuesta de cambios
- `exigencias.mano_detras`: `false` → `true` conservador, con nota `[conservadora]` (DS-403).
- `exigencias.ambos_brazos`: `false` → `true` (DS-404).
- `fuente.especifica_de`: «personas mayores» (R8.1).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (CN-4: `mano_detras` en la mano que coge el pie por detrás; DS-403). El resto de cambios, una vez resuelto CN-4, quedaría LISTO PARA APROBACIÓN DOCUMENTAL.

---

## 139. estiramiento-hombros-espalda-pared

### Identificación
- ID: `estiramiento-hombros-espalda-pared`
- Nombre: Brazos arriba y abajo con la espalda en la pared
- Fuente: National Institute on Aging (NIH), «Exercise & Physical Activity: Your Everyday Guide», «Shoulder», p. 74 del PDF (impresa 72) (F1)
- Población destinataria de la fuente (si la declara): «personas mayores» (D). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1).

### Evidencia de la fuente
- Ubicación exacta: F1, «Shoulder», p. 74 del PDF (impresa 72) (apartado 139).
- Pasos originales relevantes, resumidos con palabras propias: de pie con la espalda contra una pared, pies al ancho de los hombros y brazos a la altura de los hombros; doblar los codos para que los dedos apunten al techo y toquen la pared detrás; 10 a 30 s; después dejar que los brazos rueden hacia delante, con los codos doblados, hasta que apunten al suelo y toquen la pared; alternar; 3 a 5 veces.
- Coincidencias (C1): de pie contra la pared, brazos a la altura de los hombros, codos doblados, manos arriba y abajo, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y fotos), de pie contra la pared, los brazos en «candelabro» (codos a la altura de los hombros, manos arriba) y en la posición contraria (manos hacia abajo).
- Limitaciones de la verificación: la evidencia no dice si las manos están cerradas o abiertas; dice «los dedos apuntan al techo» y «los dedos apuntan al suelo».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto y foto): de pie con la espalda contra la pared; la pared no es un apoyo de las manos, pero el ejercicio no exige estar sin sujetarse | evidencia | FALSE | §4: no exige no sujetarse a nada; la espalda está en la pared |
| una_pierna | false | D: de pie con los dos pies | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: estiramiento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y foto): los brazos a la altura de los hombros y las manos arriba, con los dedos hacia el techo | evidencia | TRUE | §4: codo o mano por encima de la altura del hombro |
| mano_detras | false | D (texto y foto): las manos están delante o al lado, contra la pared | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y foto): los dos brazos se mueven a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto): los dedos apuntan al techo o al suelo; no se pide cerrar la mano | evidencia | FALSE | R7.4 / Q2 (P10): contacto sin prensión, pero la instrucción no pide sujetarse |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: de pie, sin doblar la rodilla | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `de_pie`, recurso `pared`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. Propuesta: «personas mayores» (R8.1).

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.especifica_de`: «personas mayores» (R8.1).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos (`especifica_de`).

---

## 140. subir-manos-pared

### Identificación
- ID: `subir-manos-pared`
- Nombre: Subir las manos por la pared
- Fuente: National Institute on Aging (NIH), «Exercise & Physical Activity: Your Everyday Guide», «Upper Body», p. 76 del PDF (impresa 74) (F1)
- Población destinataria de la fuente (si la declara): «personas mayores» (D). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1).

### Evidencia de la fuente
- Ubicación exacta: F1, «Upper Body», p. 76 del PDF (impresa 74) (apartado 140).
- Pasos originales relevantes, resumidos con palabras propias: de cara a la pared, algo más lejos que la longitud del brazo; inclinarse y apoyar las palmas en la pared a la altura de los hombros; con la espalda recta, subir las manos «walk your hands up» hasta tener los brazos por encima de la cabeza; mantener 10 a 30 s; bajar despacio; 3 a 5 veces.
- Coincidencias (C1): de cara a la pared, palmas apoyadas, manos que suben por encima de la cabeza, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y fotos), inclinada hacia la pared, las palmas apoyadas; en la segunda, los brazos estirados por encima de la cabeza contra la pared. I (manos): al inclinarse, las manos soportan parte del peso; están abiertas sobre la pared.
- Limitaciones de la verificación: la evidencia no dice cuánto peso soportan las manos; dice «al inclinarse, las manos soportan parte del peso».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto y foto): de pie, inclinada hacia la pared con las manos apoyadas | evidencia | FALSE | §4: no exige estar sin sujetarse; las manos están en la pared |
| una_pierna | false | D: de pie con los dos pies | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: estiramiento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y foto): los brazos suben por encima de la cabeza | evidencia | TRUE | §4: codo o mano por encima de la altura del hombro |
| mano_detras | false | D (texto y foto): las manos están delante, en la pared | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y foto): las dos manos suben a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto y foto): las palmas están abiertas sobre la pared; no se pide cerrar la mano | evidencia | FALSE | R7.4 / Q2 (P10): contacto sin prensión, pero la instrucción usa el verbo de la fuente («apoya las palmas») y la mano está abierta en la foto |
| peso_en_manos | true | I (texto y foto): al inclinarse hacia la pared, las manos soportan parte del peso | conservadora | TRUE | R2.1: ante la duda, `true` conservador con nota |
| flexion_profunda_rodilla | false | D: de pie, sin doblar la rodilla | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): la espalda recta | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `de_pie`, recurso `pared`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. Propuesta: «personas mayores» (R8.1).

### Incidencias
- La nota actual de `peso_en_manos` («Al inclinarte hacia la pared las manos soportan algo de peso») no tiene la forma de R2.4. Ver DS-405.

### Propuesta de cambios
- `notas_etiquetado`: reescribir la nota de `peso_en_manos` en la forma de R2.4 (DS-405).
- `fuente.especifica_de`: «personas mayores» (R8.1).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos (nota de `peso_en_manos` y `especifica_de`).

---

## 141. toalla-detras-espalda-sentado

### Identificación
- ID: `toalla-detras-espalda-sentado`
- Nombre: Estirar el hombro con una toalla detrás de la espalda
- Fuente: National Institute on Aging (NIH), «Exercise & Physical Activity: Your Everyday Guide», «Shoulder and Upper Arm», p. 75 del PDF (impresa 73) (F1)
- Población destinataria de la fuente (si la declara): «personas mayores» (D). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1) en el movimiento; C2 en la posición (sentado, adaptación documentada).

### Evidencia de la fuente
- Ubicación exacta: F1, «Shoulder and Upper Arm», p. 75 del PDF (impresa 73) (apartado 141).
- Pasos originales relevantes, resumidos con palabras propias: de pie, pies al ancho de los hombros; sujetar un extremo de una toalla con la mano derecha; subir y doblar el brazo derecho dejando caer la toalla por la espalda; con la mano izquierda, coger la toalla por detrás de la zona lumbar; tirar hacia abajo para estirar el hombro derecho; 3 a 5 veces; cambiar.
- Coincidencias (C1): una mano arriba, detrás de la cabeza, y la otra detrás de la cintura, sujetando la toalla; tirar hacia abajo; dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, HealthMove lo hace sentado. La adaptación actual dice «La fuente lo hace de pie; sentado no exige equilibrio.», que es coherente con la evidencia.
- Adaptaciones que deben documentarse: ninguna nueva.
- Hechos, inferencias e incertidumbres: D (texto y fotos), de pie, de espaldas: una mano arriba, detrás de la cabeza, y la otra detrás de la cintura, sujetando la toalla.
- Limitaciones de la verificación: la evidencia no dice si las manos están cerradas o abiertas; dice «sujetar un extremo de una toalla».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado (HealthMove) / de pie (fuente) | evidencia | FALSE | Solo se define de pie; la versión de HealthMove es sentada |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: estiramiento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y foto): una mano sube por encima de la cabeza | evidencia | TRUE | §4: codo o mano por encima de la altura del hombro |
| mano_detras | true | D (texto y foto): una mano detrás de la cabeza y la otra detrás de la espalda | evidencia | TRUE | §4: mano detrás de la espalda o de la cabeza |
| ambos_brazos | true | D (texto y foto): las dos manos sujetan la toalla a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto): «sujetar un extremo de una toalla» | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: sentado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado con los pies apoyados, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `sentado`, recursos `silla` y `toalla`, dosis: coherentes con la versión de HealthMove.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. Propuesta: «personas mayores» (R8.1).

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.especifica_de`: «personas mayores» (R8.1).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos (`especifica_de`).

---

## 142. cuadriceps-lado-suelo

### Identificación
- ID: `cuadriceps-lado-suelo`
- Nombre: Estirar el muslo tumbado de lado
- Fuente: National Institute on Aging (NIH), «Exercise & Physical Activity: Your Everyday Guide», «Thigh, Floor», p. 86 del PDF (impresa 84) (F1)
- Población destinataria de la fuente (si la declara): «personas mayores» (D). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1) en el movimiento; `mano_detras: false` con la mano que coge el pie por detrás (clase de CN-4, aplazada).

### Evidencia de la fuente
- Ubicación exacta: F1, «Thigh, Floor», p. 86 del PDF (impresa 84) (apartado 142).
- Pasos originales relevantes, resumidos con palabras propias: tumbado de lado con las piernas estiradas y las rodillas juntas; la cabeza apoyada en el brazo; doblar la rodilla de arriba, llevar la mano hacia atrás y coger el empeine; si no se llega, una banda, cinturón o toalla; tirar suavemente; 10 a 30 s; 3 a 5 veces con cada pierna. Remite a la versión de pie si cuesta bajar al suelo.
- Coincidencias (C1): tumbado de lado, la rodilla de arriba doblada, la mano coge el pie por detrás, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y foto), tumbada de lado en una colchoneta, la cabeza sobre el brazo de abajo, estirado por encima de la cabeza; la mano de arriba sujeta el pie por detrás. D (texto), la mano coge el pie por detrás (clase de CN-4).
- Limitaciones de la verificación: la evidencia no dice si la mano que sujeta el pie está cerrada o abierta; dice «la mano de arriba sujeta el pie por detrás».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: estiramiento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y foto): el brazo de abajo está estirado por encima de la cabeza, bajo la cabeza | conservadora | TRUE | CN-1 (P25): tumbado, el brazo se separa del tronco y la altura no se puede comparar; `true` conservador con nota |
| mano_detras | false | D (texto y foto): la mano coge el pie por detrás del cuerpo, junto al glúteo, sin llegar a la espalda ni a la cabeza | conservadora | TRUE | CN-4 (aplazada): `true` conservador provisional (ver DS-403) |
| ambos_brazos | false | D (texto y foto): un brazo está bajo la cabeza y la otra mano coge el pie; los dos intervienen a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos (ver DS-404) |
| agarre | true | D (texto): «coge el pie con la mano» | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | true | D (texto y foto): la rodilla de arriba muy doblada, con el pie hacia el glúteo | evidencia | TRUE | §4: rodilla más de 90° |
| flexion_amplia_cadera | false | D: tumbado de lado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `suelo`, recurso `toalla`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. Propuesta: «personas mayores» (R8.1).

### Incidencias
- `mano_detras: false` con la mano que coge el pie por detrás: es la clase de CN-4, aplazada. Valor provisional `true` conservador (DS-403).
- `ambos_brazos: false` con un brazo bajo la cabeza y la otra mano cogiendo el pie: Q1 (P9) dice que el uso simultáneo de los dos brazos cuenta como `ambos_brazos` (DS-404).

### Propuesta de cambios
- `exigencias.mano_detras`: `false` → `true` conservador, con nota `[conservadora]` (DS-403).
- `exigencias.ambos_brazos`: `false` → `true` (DS-404).
- `fuente.especifica_de`: «personas mayores» (R8.1).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (CN-4: `mano_detras` en la mano que coge el pie por detrás; DS-403). El resto de cambios, una vez resuelto CN-4, quedaría LISTO PARA APROBACIÓN DOCUMENTAL.

---

## Hallazgos DS

### DS-400 · La omisión del cuello en `flexion-tronco-delante-sentado` no está documentada como adaptación
- **Ubicación exacta:** apartado 135, «Evidencia de la fuente» y «Otros campos»; catálogo, `adaptaciones` de `flexion-tronco-delante-sentado` (vacío).
- **Evidencia:** «la fuente pide relajar el cuello y bajar la barbilla; HealthMove no lo recoge (exclusión del cuello)» (evidencia, 135).
- **Explicación:** la fuente pide un movimiento de cuello que HealthMove omite por la exclusión del catálogo v1 («Movimientos de cuello»). Es una diferencia con la fuente (C3) que no está documentada como adaptación (C2). R3.2 pide que toda diferencia con la fuente esté documentada y su fundamento sea verificable.
- **Consecuencia potencial:** el usuario no sabe que HealthMove omite una indicación de la fuente. Si alguien compara con la fuente, la diferencia no está explicada.
- **Nivel de certeza:** alta.
- **Recomendación:** añadir a `adaptaciones` una frase que explique la omisión, con el fundamento de la exclusión del catálogo v1.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente en la p. 78 del PDF, que la evidencia ya resume.
- **¿Requiere decisión humana?:** sí. El desarrollador decide si la omisión se documenta como adaptación o se deja como nota.

### DS-401 · `estiramiento-espalda-alta-sentado` usa la progresión como versión de base sin documentarlo
- **Ubicación exacta:** apartado 136, «Evidencia de la fuente» y «Otros campos»; catálogo, `adaptaciones` de `estiramiento-espalda-alta-sentado` (vacío).
- **Evidencia:** «**Progresión:** "cross your arms and interlace fingers"» y «HealthMove: "entrelaza las manos al frente": usa la **progresión** como versión de base» (evidencia, 136).
- **Explicación:** la fuente describe la versión base con las manos separadas y las palmas hacia fuera, y la progresión con los dedos entrelazados. HealthMove usa la progresión como versión de base. Es una diferencia con la fuente (C3) que no está documentada como adaptación (C2). Además, la versión base no tiene `agarre`; la progresión sí. La etiqueta `agarre: true` es correcta para la versión de HealthMove, pero el usuario no sabe que está haciendo la progresión.
- **Consecuencia potencial:** el usuario cree que hace la versión base de la fuente cuando hace la progresión. La etiqueta `agarre: true` no se explica.
- **Nivel de certeza:** alta.
- **Recomendación:** añadir a `adaptaciones` una frase que explique que la fuente describe esta versión como progresión y que aquí se usa como versión de base.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente en la p. 80 del PDF, que la evidencia ya resume.
- **¿Requiere decisión humana?:** sí. El desarrollador decide si se documenta como adaptación o se cambia la instrucción a la versión base.

### DS-402 · `extension-codo-botella-sentado`: la posición sentada y la botella no están documentadas como adaptación
- **Ubicación exacta:** apartado 137, «Evidencia de la fuente» y «Otros campos»; catálogo, `adaptaciones` de `extension-codo-botella-sentado` (vacío).
- **Evidencia:** «de pie o sentado en una silla firme sin brazos» y «HealthMove: sentado (una de las dos posiciones de la fuente); botella en lugar de pesa (recurso `peso_ligero`)» (evidencia, 137).
- **Explicación:** la fuente permite hacerlo de pie o sentado; HealthMove elige sentado. La fuente usa una pesa; HealthMove usa una botella. Las dos son diferencias con la fuente (C3) que no están documentadas como adaptación (C2). R3.2 pide que toda diferencia con la fuente esté documentada.
- **Consecuencia potencial:** el usuario no sabe que la fuente permite hacerlo de pie ni que usa una pesa. La elección de la botella no está explicada.
- **Nivel de certeza:** alta.
- **Recomendación:** añadir a `adaptaciones` una frase que explique la elección de la posición sentada y el uso de la botella.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente en la p. 56 del PDF, que la evidencia ya resume.
- **¿Requiere decisión humana?:** sí. El desarrollador decide si se documenta como adaptación.

### DS-403 · `mano_detras` en la mano que coge el pie por detrás (CN-4)
- **Ubicación exacta:** apartados 138 (`estiramiento-cuadriceps-pie`) y 142 (`cuadriceps-lado-suelo`), fila `mano_detras`; registro, CN-4.
- **Evidencia:** «la mano coge el pie por detrás del cuerpo: es la clase de CN-4 (aplazada, `true` conservador provisional)» (evidencia, 138) y «la mano de arriba sujeta el pie por detrás» (evidencia, 142).
- **Explicación:** la especificación §4 marca `mano_detras` con «mano detrás de la espalda o de la cabeza». Al coger el pie por detrás, la mano va hacia atrás, junto al glúteo, sin llegar a la espalda. CN-4 está pendiente y su valor provisional es `true` conservador. Los dos ejercicios tienen `mano_detras: false` en el catálogo. Aplicar CN-4 los cambiaría a `true` conservador.
- **Consecuencia potencial:** si se aplica CN-4, los dos ejercicios salen del perfil «Me cuesta llevar la mano a la espalda o detrás de la cabeza» (`mano_detras`). Si no se aplica, el perfil puede recibir un ejercicio que le pide llevar la mano hacia atrás.
- **Nivel de certeza:** alta (la clase de CN-4 está identificada en la evidencia).
- **Recomendación:** mantener el valor provisional de CN-4 (`true` conservador) y presentar los dos ejercicios como PENDIENTE DE DECISIÓN hasta que se resuelva CN-4.
- **Prueba o evidencia que permitiría confirmarlo:** la resolución de CN-4 en el registro.
- **¿Requiere decisión humana?:** sí. El desarrollador decide CN-4.

### DS-404 · `ambos_brazos` en `estiramiento-cuadriceps-pie` y `cuadriceps-lado-suelo`
- **Ubicación exacta:** apartados 138 y 142, fila `ambos_brazos`.
- **Evidencia:** «una mano se sujeta a la silla y la otra coge el pie; las dos intervienen a la vez» (evidencia, 138) y «un brazo está bajo la cabeza y la otra mano coge el pie; los dos intervienen a la vez» (evidencia, 142).
- **Explicación:** Q1 (P9) dice que cuentan como `ambos_brazos` «el apoyo de las dos manos, el uso simultáneo de los dos brazos (también una mano que se apoya mientras el otro brazo trabaja) y la alternancia continua de los dos brazos». En los dos ejercicios, una mano se apoya (en la silla o bajo la cabeza) mientras la otra trabaja. El catálogo tiene `ambos_brazos: false` en los dos. Aplicando Q1, debería ser `true`.
- **Consecuencia potencial:** si se aplica Q1, los dos ejercicios salen del perfil «Solo puedo usar un brazo» (`un_brazo`). Si no se aplica, el perfil puede recibir un ejercicio que le pide usar los dos brazos a la vez.
- **Nivel de certeza:** alta (la regla de Q1 es explícita).
- **Recomendación:** cambiar `ambos_brazos` a `true` en los dos ejercicios. Si el desarrollador considera que el apoyo de una mano no cuenta en estos casos, hay que precisar Q1.
- **Prueba o evidencia que permitiría confirmarlo:** la aplicación de Q1 al catálogo (`plan-cambios-q1-q2.md`) y la revisión de los dos ejercicios.
- **¿Requiere decisión humana?:** sí. El desarrollador decide si se aplica Q1 a estos dos ejercicios o si se precisa la regla.

### DS-405 · La nota de `peso_en_manos` en `subir-manos-pared` no tiene la forma de R2.4
- **Ubicación exacta:** apartado 140, «Incidencias»; catálogo, `notas_etiquetado` de `subir-manos-pared`.
- **Evidencia:** «Al inclinarte hacia la pared las manos soportan algo de peso.» (catálogo, `notas_etiquetado`).
- **Explicación:** R2.4 pide que un `true` conservador se anote en `notas_etiquetado` con la forma `[conservadora] <exigencia>: <motivo>. Se cerraría con: <evidencia que falta>.`. La nota actual no tiene esa forma. La etiqueta `peso_en_manos: true` se apoya en un I (las manos soportan parte del peso), así que es conservadora.
- **Consecuencia potencial:** la nota no se puede distinguir de una nota informativa. El validador (si comprueba el formato `[conservadora]`, como propone M5) la rechazaría.
- **Nivel de certeza:** alta.
- **Recomendación:** reescribir la nota en la forma de R2.4.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la nota en el catálogo y la regla R2.4.
- **¿Requiere decisión humana?:** no. Es una corrección de forma.

### DS-406 · `especifica_de` vacío en los 8 ejercicios, con la fuente dirigida a «personas mayores»
- **Ubicación exacta:** los 8 apartados, «Otros campos»; catálogo, `fuente.especifica_de` de los 8 (vacío).
- **Evidencia:** «el NIA busca "improve the health and well-being of older adults" (introducción): personas mayores» (evidencia, «Datos comunes»).
- **Explicación:** R8.1 dice que `fuente.especifica_de` solo se rellena con la población que la fuente declara. La evidencia recoge que la fuente se dirige a «personas mayores». Los 8 ejercicios tienen `especifica_de` vacío. La propuesta es rellenarlo con «personas mayores», un nombre breve coherente con los existentes.
- **Consecuencia potencial:** el usuario no ve en la ficha que el material está pensado para personas mayores. La aclaración de procedencia (P17) no aparece.
- **Nivel de certeza:** media (la población la deduce Claude de la introducción; no he leído la fuente).
- **Recomendación:** rellenar `especifica_de` con «personas mayores» en los 8, si el desarrollador confirma que la fuente lo declara.
- **Prueba o evidencia que permitiría confirmarlo:** la introducción del PDF del NIA, que la evidencia cita.
- **¿Requiere decisión humana?:** sí. El desarrollador decide si se rellena `especifica_de` y con qué nombre.

### DS-407 · `flexion_amplia_cadera` en `flexion-tronco-delante-sentado`: la nota actual no explica la etiqueta
- **Ubicación exacta:** apartado 135, fila `flexion_amplia_cadera`; catálogo, `notas_etiquetado` de `flexion-tronco-delante-sentado`.
- **Evidencia:** «Inclinarse desde la cadera acerca el muslo al tronco.» (catálogo, `notas_etiquetado`).
- **Explicación:** la etiqueta `flexion_amplia_cadera: true` se apoya en D (texto y foto): el tronco muy inclinado acerca el muslo al tronco. La nota actual lo dice, pero no cita la evidencia ni la regla. No es un `true` conservador, así que no necesita la forma de R2.4. La nota es correcta, pero podría ser más precisa.
- **Consecuencia potencial:** ninguna grave. La nota es informativa.
- **Nivel de certeza:** baja (no es un problema, es una mejora).
- **Recomendación:** ninguna. La nota es suficiente.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la nota y la evidencia.
- **¿Requiere decisión humana?:** no.

---

FIN DEL BORRADOR