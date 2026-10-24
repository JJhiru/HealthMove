# Auditoría documental · lote 11 (consulta C12)

**Versión del protocolo:** 1.0 · **Fecha:** 2026-10-24 · **Auditor:** DeepSeek (borrador para revisión de Claude)
**Base:** bloque `evidencia-lote-11` (Claude) + bloque `catalogo-lote11` (10 ejercicios; `rodilla-al-pecho-tumbado` solo como contexto de `variante_de`, no auditado).
**Alcance:** 9 ejercicios (70 a 78). No apruebo, no cambio etiquetas, no emito juicios clínicos.

**Nota de método.** Donde la evidencia de Claude califica un hecho como D/I/N, lo acepto como dato de la fuente salvo que la propia evidencia se contradiga o no permita sostener la calificación; en ese caso lo señalo en «Limitaciones» o como hallazgo DS. No he abierto las fuentes: no afirmo nada sobre lo que dicen más allá de lo que la evidencia recoge.

---

## 70. elevacion-pierna-recta-sentado

### Identificación
- ID: `elevacion-pierna-recta-sentado`
- Nombre: Elevación de pierna estirada en la silla
- Fuente: Mersey and West Lancashire Teaching Hospitals NHS Trust (St Helens), «Chair based exercises», «Straight leg raise», p. 4 del PDF (impresa «Page 3»)
- Población destinataria de la fuente (si la declara): no la declara (equipo de cuidados críticos y cirugía)
- Estado inicial: `borrador`; sin auditar
- Resultado documental: requiere aclaraciones; un `true` conservador y una posible adaptación

### Evidencia de la fuente
- Ubicación exacta: F1, «Straight leg raise», p. 4 del PDF (impresa «Page 3»), texto y foto.
- Pasos originales relevantes, resumidos con palabras propias: sentado en una silla estable; estirar la pierna al frente con la rodilla lo más recta posible; con la pierna recta, subirla y bajarla; repetir con la otra pierna; 10 veces con cada pierna.
- Coincidencias (C1): sentado, pierna estirada, subir y bajar, cambio de pierna, 10 repeticiones.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna documentada. C3: HealthMove no dice «lo más recta posible» en la instrucción 3 («Sin doblar la rodilla»), lo que es más estricto que la fuente; no cambia etiquetas.
- Adaptaciones que deben documentarse: ninguna nueva obligatoria. La instrucción 3 puede alinearse con la fuente («sin doblar la rodilla más de lo posible»), pero es una aclaración, no una adaptación.
- Hechos, inferencias e incertidumbres: D (texto y foto), sentado, pierna estirada, elevación con flecha vertical. D (foto), manos apoyadas en el borde del asiento a los lados de la cadera. I (foto), el muslo de la pierna elevada se separa un poco del asiento. I (foto), las manos descansan; no se ve si agarran.
- Limitaciones de la verificación: una sola foto, vista lateral; no se ve la mano del lado oculto.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado (texto y foto) | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso está en el asiento | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado de principio a fin | evidencia | FALSE | — |
| impacto | false | D: movimiento lento, sin fase en el aire | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: ejercicio de fuerza local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (foto): manos a la altura de la cadera, codos por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (foto): manos al lado del cuerpo | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): el movimiento es de la pierna; I (foto): las dos manos descansan en el borde sin que el otro brazo trabaje | evidencia | FALSE | Manos en reposo no cuentan (Q1, P9) |
| agarre | false | I (foto): las manos descansan en el borde; no se ve prensión; el texto no las pide | conservadora | TRUE | R7.5 y Q2 (P10): sin evidencia de que no se sujete, se marca |
| peso_en_manos | false | D: sentado; las manos no soportan el peso del cuerpo | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): «as straight as possible»; D (foto): rodilla estirada | evidencia | FALSE | — |
| flexion_amplia_cadera | true | I (foto): el muslo de la pierna elevada se separa del asiento; el texto no lo dice | conservadora | TRUE | Se mantiene el `true` actual; la evidencia es I, no D. Ver DS-252 |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (foto): tronco erguido | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recurso `silla`: coherentes.
- Dosis «10 veces con cada pierna»: coincide con la fuente.
- Ilustración: coincide (pierna estirada que sube). No induce otro movimiento (R7.6).
- Exclusiones del catálogo v1 (§4, P28): ninguna aplica (no cuello, no rodillas en el suelo, no desplazamiento, no impacto, no movilidad aislada de muñeca, no reposabrazos, no material especial).

### Incidencias
- El `true` de `agarre` resta el ejercicio a «cerrar la mano». Es la misma clase que el apoyo que solo aparece en la imagen (CN-3, aplazado). Valor provisional: el actual.
- `flexion_amplia_cadera` está en `true` con evidencia I, no D. La nota actual no lleva el formato `[conservadora]` de R2.4. Ver DS-252.

### Propuesta de cambios
- `exigencias.agarre`: `false` → `true`, con la nota «[conservadora] agarre: la foto de la fuente muestra las manos descansando en el borde del asiento y el texto no las pide. Se cerraría con: evidencia de que sujetarse no forma parte de la ejecución.»
- `exigencias.flexion_amplia_cadera`: mantener `true`; añadir a `notas_etiquetado` la forma de R2.4: «[conservadora] flexion_amplia_cadera: la foto sugiere que el muslo se separa del asiento al elevar la pierna recta; el texto no lo dice. Se cerraría con: una vista lateral que muestre el ángulo del muslo respecto al tronco.»
- Instrucción 3: «Sin doblar la rodilla, sube y baja la pierna.» → «Con la rodilla lo más recta posible, sube y baja la pierna.» (aclaración, «as straight as possible»).
- `fuente.especifica_de`: no se rellena (la fuente no declara población, R8.1). `fuente.consultado`: 2026-10-24.
- Impacto (modo auditoría): sale de `cerrar_mano`.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos. El `agarre` conservador queda como valor provisional mientras CN-3 siga aplazado.

---

## 71. apretar-gluteos-sentado

### Identificación
- ID: `apretar-gluteos-sentado`
- Nombre: Apretar glúteos en la silla
- Fuente: Mersey and West Lancashire Teaching Hospitals NHS Trust (St Helens), «Chair based exercises», «Glute squeeze», p. 3 del PDF (impresa «Page 2»)
- Población destinataria de la fuente (si la declara): no la declara
- Estado inicial: `borrador`; sin auditar
- Resultado documental: requiere aclaraciones; sin cambios de etiquetas

### Evidencia de la fuente
- Ubicación exacta: F1, «Glute squeeze», p. 3 del PDF (impresa «Page 2»), texto y foto.
- Pasos originales relevantes, resumidos con palabras propias: sentado erguido; apretar los glúteos; mantener 5 segundos; soltar; 10 veces.
- Coincidencias (C1): sentado erguido, apretar glúteos, 5 segundos, 10 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna. La foto muestra un sillón con reposabrazos; HealthMove usa una silla sin reposabrazos. No es una diferencia de ejecución (los brazos no intervienen), pero conviene anotarlo.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y foto), sentado, sin movimiento. D (foto), antebrazos y manos sobre los reposabrazos. El texto no los pide.
- Limitaciones de la verificación: la foto muestra un sillón con reposabrazos, que el catálogo v1 excluye como dependencia; aquí no se depende de ellos (los brazos no intervienen), pero la ilustración de HealthMove no los muestra.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado de principio a fin | evidencia | FALSE | — |
| impacto | false | D: contracción sin movimiento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: contracción estática | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (foto): antebrazos sobre los reposabrazos, codos por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (foto): manos al frente, sobre los reposabrazos | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): el movimiento es de los glúteos; D (foto): los brazos descansan | evidencia | FALSE | Manos en reposo no cuentan (Q1, P9) |
| agarre | false | D (foto): las manos descansan sobre los reposabrazos; el texto no las pide; no se ve prensión | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay ni contacto con objeto que se sujete. Ver DS-253 |
| peso_en_manos | false | D: sentado; las manos no soportan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (foto): sentado normal, rodillas en torno a 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (foto): sentado normal, el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): «upright seated position» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recurso `silla`: coherentes.
- Dosis «Mantén 5 segundos. 10 veces.»: coincide con la fuente.
- Ilustración: coincide en lo que importa (sentado, sin movimiento). No induce otro movimiento (R7.6).
- Exclusiones del catálogo v1: ninguna aplica.

### Incidencias
- La foto de la fuente muestra un sillón con reposabrazos. El catálogo v1 excluye «ejercicios que dependen de reposabrazos»; aquí no se depende de ellos, pero conviene que la nota lo diga para que no se confunda con una dependencia. Ver DS-253.

### Propuesta de cambios
- `notas_etiquetado`: añadir «La foto de la fuente muestra un sillón con reposabrazos; el ejercicio no depende de ellos (los brazos no intervienen).»
- `fuente.especifica_de`: no se rellena (la fuente no declara población). `fuente.consultado`: 2026-10-24.
- Sin cambios de etiquetas.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 72. de-pie-mano-preparada

### Identificación
- ID: `de-pie-mano-preparada`
- Nombre: De pie sin sujetarte, con la mano preparada
- Fuente: Mersey and West Lancashire Teaching Hospitals NHS Trust (St Helens), «Balance exercises (low level)», «Standing unsupported feet apart, eyes open», p. 3 del PDF
- Población destinataria de la fuente (si la declara): no la declara
- Estado inicial: `borrador`; sin auditar
- Resultado documental: requiere aclaraciones; un `true` conservador y una posible adaptación de recurso

### Evidencia de la fuente
- Ubicación exacta: F2, «Standing unsupported feet apart, eyes open», p. 3 del PDF, texto y foto.
- Pasos originales relevantes, resumidos con palabras propias: con la mano «hovering… over a sturdy surface», separar los pies y estar de pie «unsupported for 1 minute»; aumentar el tiempo cada vez si se puede.
- Coincidencias (C1): de pie sin apoyo, pies separados, mano preparada sobre una superficie, 1 minuto, progresión de tiempo.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, HealthMove usa una silla; la fuente dice «a sturdy surface» (en la foto, una mesa alta). Es una adaptación de recurso, no de movimiento. C3, la fuente tiene al lado una versión con los ojos cerrados que HealthMove no incorpora (no es una diferencia, es una omisión).
- Adaptaciones que deben documentarse: «HealthMove usa una silla como superficie firme; la fuente dice “a sturdy surface” (en la foto, una mesa alta).»
- Hechos, inferencias e incertidumbres: D (texto), «unsupported»; D (foto), de pie, pies separados, una mano justo encima de una mesa alta sin tocarla. D (texto), «designed to improve your standing balance». I (ilustración de HealthMove), a 60 ppp no se distingue si la mano toca el respaldo.
- Limitaciones de la verificación: la ilustración de HealthMove no se ha podido resolver a más resolución en esta auditoría; la evidencia de Claude dice que a 60 ppp no se distingue.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | true | D (texto): «unsupported»; D (foto): la mano no toca la mesa | evidencia | TRUE | — |
| una_pierna | false | D (texto y foto): pies separados, peso en los dos pies | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie de principio a fin | evidencia | FALSE | — |
| impacto | false | D: sin fase en el aire | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: equilibrio estático | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (foto): la mano está a la altura de la mesa, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (foto): mano al frente | evidencia | FALSE | — |
| ambos_brazos | false | D (texto y foto): un brazo junto al cuerpo, el otro con la mano preparada; no hay apoyo bilateral ni alternancia | evidencia | FALSE | Q1 (P9): la mano preparada no es apoyo |
| agarre | false | D (texto): «hovering… over», sin tocar; no hay prensión | evidencia | FALSE | R7.4: no hay contacto |
| peso_en_manos | false | D: la mano no toca la superficie | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (foto): de pie, rodillas estiradas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin flexión de cadera | evidencia | FALSE | — |
| puntillas_talones | false | D (foto): pies planos | evidencia | FALSE | — |
| inclinacion_tronco | false | D (foto): tronco erguido | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `de_pie`, recurso `silla`: coherentes con la versión de HealthMove; la fuente usa «a sturdy surface» (mesa alta en la foto).
- Dosis «Durante 1 minuto. Alarga el tiempo poco a poco.»: coincide con la fuente.
- Ilustración: de pie junto a una silla, con la mano sobre el respaldo. A 60 ppp no se distingue si toca. Si la mano toca el respaldo en la ilustración, induce un apoyo que la fuente no tiene (R7.6/R7.7). Ver DS-254.
- Exclusiones del catálogo v1: ninguna aplica.

### Incidencias
- **R7.7 (posible):** si la ilustración de HealthMove muestra la mano tocando el respaldo, induce un apoyo que la fuente no tiene («hovering… over», sin tocar). La evidencia de Claude no lo determina a 60 ppp. Hace falta renderizar la ilustración a más resolución antes de dar por válida la ilustración. Ver DS-254.
- La adaptación de recurso (silla en lugar de mesa alta) debe documentarse; no cambia etiquetas.

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente dice “una superficie firme” (en la foto, una mesa alta); aquí se usa una silla.»
- `fuente.especifica_de`: no se rellena (la fuente no declara población). `fuente.consultado`: 2026-10-24.
- Sin cambios de etiquetas.
- Ilustración: verificar a más resolución que la mano no toca el respaldo; si toca, corregirla (R7.6/R7.7).

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (DS-254: la ilustración puede inducir un apoyo que la fuente no tiene). Una vez resuelta la ilustración y aplicados los cambios, LISTO PARA APROBACIÓN DOCUMENTAL.

---

## 73. balanceo-brazos-sentado

### Identificación
- ID: `balanceo-brazos-sentado`
- Nombre: Balanceo de brazos en la silla
- Fuente: NHS Forth Valley, «Bed & Seated Exercises», «Arm Swings», p. 3
- Población destinataria de la fuente (si la declara): «A resource for care homes» (residencias)
- Estado inicial: `borrador`; sin auditar
- Resultado documental: requiere aclaraciones; un `true` conservador ya anotado

### Evidencia de la fuente
- Ubicación exacta: F3, «Arm Swings», p. 3, texto y dibujo.
- Pasos originales relevantes, resumidos con palabras propias: sentarse erguido «away from the back of the chair»; pies planos «below your knees»; doblar los codos y balancear los brazos «from the shoulder»; ritmo cómodo; 30 segundos.
- Coincidencias (C1): sentado sin apoyar la espalda, pies bajo las rodillas, codos doblados, balanceo desde el hombro, 30 segundos.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna documentada. C3: la fuente da una guía de dosis general (empezar con 2 o 3 repeticiones y subir hasta 10 en un par de semanas); HealthMove usa 30 segundos, que es la dosis del ejercicio. No es una diferencia.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), sentado sin apoyar la espalda, codos doblados, balanceo. D (dibujo), las manos no llegan por encima del hombro; el texto no fija hasta dónde suben (N para la altura máxima). D (texto), «from the shoulder».
- Limitaciones de la verificación: un solo dibujo; el texto no fija la altura máxima del balanceo.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado de principio a fin | evidencia | FALSE | — |
| impacto | false | D: balanceo sin fase en el aire | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: balanceo suave de calentamiento | evidencia | FALSE | — |
| brazo_sobre_hombro | true | N (texto): no fija la altura máxima; D (dibujo): las manos no llegan por encima del hombro, pero el dibujo no fija el rango | conservadora | TRUE | R2.1 y CN-1 (P25): no consta que no la pase; se mantiene el `true` conservador |
| mano_detras | false | D (dibujo): manos al frente, a la altura del pecho | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): «balancear los brazos» (los dos); D (dibujo): los dos brazos se balancean | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (dibujo): manos abiertas, sin objeto | evidencia | FALSE | — |
| peso_en_manos | false | D: sentado; las manos no soportan peso | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D (texto): pies planos bajo las rodillas; D (dibujo): rodillas en torno a 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (dibujo): sentado normal, el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): «sit up straight»; D (dibujo): tronco erguido | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`: coherentes.
- Dosis «30 segundos»: coincide con la fuente.
- Ilustración: coincide (codo doblado, brazo balancea desde el hombro con la mano por debajo del hombro). No induce otro movimiento (R7.6).
- Exclusiones del catálogo v1: ninguna aplica.

### Incidencias
- El `true` conservador de `brazo_sobre_hombro` ya está anotado con la forma de R2.4. Correcto.
- `ambos_brazos` está en `true` con evidencia D (uso simultáneo de los dos brazos). Correcto.

### Propuesta de cambios
- `fuente.especifica_de`: «residencias» (la fuente declara «A resource for care homes»). R8.1: es una población declarada, no inferida. Ver DS-255.
- `fuente.consultado`: 2026-10-24.
- Sin cambios de etiquetas.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 74. elevar-talones-sentado

### Identificación
- ID: `elevar-talones-sentado`
- Nombre: Elevar talones en la silla
- Fuente: NHS Forth Valley, «Bed & Seated Exercises», «Heel raises (seated)», p. 4
- Población destinataria de la fuente (si la declara): «A resource for care homes» (residencias)
- Estado inicial: `borrador`; sin auditar
- Resultado documental: requiere aclaraciones; sin cambios de etiquetas

### Evidencia de la fuente
- Ubicación exacta: F3, «Heel raises (seated)», p. 4, texto y dibujo.
- Pasos originales relevantes, resumidos con palabras propias: sentarse erguido «away from the back of your chair»; levantar los talones; «Make sure your toes remain on the ground»; 10 veces.
- Coincidencias (C1): sentado sin apoyar la espalda, levantar talones, puntas en el suelo, 10 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), sentado, talones levantados, puntas en el suelo. D (dibujo), detalle de las piernas sentadas.
- Limitaciones de la verificación: el dibujo es un detalle de las piernas; no se ve el tronco ni los brazos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado de principio a fin | evidencia | FALSE | — |
| impacto | false | D: las puntas no se levantan del suelo | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: ejercicio local de pantorrilla | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no intervienen; el dibujo no los muestra | evidencia | FALSE | — |
| mano_detras | false | D: los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D: los brazos no intervienen | evidencia | FALSE | — |
| agarre | false | D: los brazos no intervienen | evidencia | FALSE | — |
| peso_en_manos | false | D: sentado; las manos no apoyan | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D (dibujo): sentado normal, rodillas en torno a 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (dibujo): sentado normal | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado; el peso del cuerpo está en el asiento, no sobre las puntas | evidencia | FALSE | La nota actual lo explica correctamente |
| inclinacion_tronco | false | D (texto): «sit up straight» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`: coherentes.
- Dosis «10 veces»: coincide con la fuente.
- Ilustración: coincide (sentado, talón que sube). No induce otro movimiento (R7.6).
- Exclusiones del catálogo v1: ninguna aplica.

### Incidencias
- Ninguna relevante. La nota actual sobre `puntillas_talones` es correcta: sentado no se carga el peso del cuerpo sobre las puntas.

### Propuesta de cambios
- `fuente.especifica_de`: «residencias» (la fuente declara «A resource for care homes»). R8.1. Ver DS-255.
- `fuente.consultado`: 2026-10-24.
- Sin cambios de etiquetas.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 75. secarse-toalla-sentado

### Identificación
- ID: `secarse-toalla-sentado`
- Nombre: Como si te secaras la espalda
- Fuente: NHS Fife, «Home GRASP Participant Manual», ejercicio 35 «Drying off», p. 49 del PDF (impresa 48)
- Población destinataria de la fuente (si la declara): personas que han tenido un ictus («stroke-affected arm», introducción)
- Estado inicial: `borrador`; sin auditar
- Resultado documental: requiere aclaraciones y adaptaciones documentadas; sin cambios de etiquetas

### Evidencia de la fuente
- Ubicación exacta: F4, ejercicio 35 «Drying off», p. 49 del PDF (impresa 48), texto y tres fotos.
- Pasos originales relevantes, resumidos con palabras propias: poner la toalla en la mesa y doblarla a lo largo; poner una mano en cada extremo y llevarla «over your head so it touches your neck»; moverla «back and forth across your neck and your shoulders 10 times, as if you are drying after a shower»; repetir 5 veces. Consejo: usar la mano afectada por el ictus todo lo posible.
- Coincidencias (C1): sentado, toalla doblada, una mano en cada extremo, pasar por encima de la cabeza, mover de un lado a otro, 10 veces, repetir 5 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente coge la toalla de la mesa (ya anotado en `notas_etiquetado`); HealthMove la sostiene desde el principio. C3, la fuente dice «touches your neck» y «across your neck and your shoulders»; HealthMove dice «hasta dejarla en la parte alta de la espalda» y «sobre los hombros». C3, la fuente incluye el consejo de usar la mano afectada; HealthMove no lo recoge (no es una diferencia de ejecución).
- Adaptaciones que deben documentarse: «La fuente coge la toalla de la mesa; aquí se sostiene desde el principio.» (ya en `notas_etiquetado`, pero no en `adaptaciones`, que es lo que ve el usuario). «La fuente dice “toca el cuello” y “sobre el cuello y los hombros”; aquí se dice “parte alta de la espalda” y “sobre los hombros”.»
- Hechos, inferencias e incertidumbres: D (fotos), sentado a una mesa, dos manos cerradas sujetando la toalla; la toalla por detrás de la cabeza y del cuello, las dos manos a los lados de la cabeza, a la altura de las orejas (D: la mano por encima del hombro); codos separados, más o menos a la altura de los hombros (I). D (texto), «over your head so it touches your neck».
- Limitaciones de la verificación: las fotos no muestran el movimiento por detrás del cuello; la ilustración de HealthMove no lo muestra tampoco.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado de principio a fin | evidencia | FALSE | — |
| impacto | false | D: sin fase en el aire | evidencia | FALSE | — |
| carga_externa | false | D: la toalla no es un peso ni una resistencia añadida | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento suave de hombros y espalda alta | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (fotos): las manos a la altura de las orejas, por encima del hombro | evidencia | TRUE | — |
| mano_detras | true | D (fotos): la toalla por detrás de la cabeza y del cuello, las manos a los lados de la cabeza | evidencia | TRUE | — |
| ambos_brazos | true | D (texto y fotos): una mano en cada extremo, las dos manos sujetan la toalla | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (fotos): las dos manos cerradas sujetando la toalla | evidencia | TRUE | — |
| peso_en_manos | false | D: sentado; las manos no soportan el peso del cuerpo | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (fotos): sentado normal, rodillas en torno a 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (fotos): sentado normal | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (fotos): tronco erguido | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `sentado`, recursos `silla` y `toalla`: coherentes.
- Dosis «10 veces. Puedes repetirlo hasta 5 veces.»: coincide con la fuente.
- Ilustración: de frente, sentado, la toalla por encima de la cabeza sujeta con las dos manos. Coincide con las fotos 1-2 (la subida); no muestra el movimiento por detrás del cuello. No induce otro movimiento (R7.6).
- Exclusiones del catálogo v1: ninguna aplica.

### Incidencias
- La diferencia «toca el cuello» / «parte alta de la espalda» es una C3 que debe documentarse como adaptación (R3.2). No cambia etiquetas.
- La diferencia «coge la toalla de la mesa» / «la sostiene desde el principio» ya está en `notas_etiquetado`, pero no en `adaptaciones`, que es lo que ve el usuario. Debe pasar a `adaptaciones` (R3.2).

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente coge la toalla de una mesa; aquí se sostiene desde el principio.» y «La fuente dice que la toalla toque el cuello y se mueva sobre el cuello y los hombros; aquí se dice “parte alta de la espalda” y “sobre los hombros”.»
- `fuente.especifica_de`: «ictus» (ya está; la fuente declara «stroke-affected arm»). Correcto.
- `fuente.consultado`: 2026-10-24.
- Sin cambios de etiquetas.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 76. paso-atras-apoyo

### Identificación
- ID: `paso-atras-apoyo`
- Nombre: Paso atrás frente a la encimera
- Fuente: NHS Fife, «Strength and Balance Retraining Exercise Programme» (lectura fácil), «6. Step Backs», p. 6
- Población destinataria de la fuente (si la declara): servicio de fisioterapia para personas con discapacidad intelectual; formato de lectura fácil
- Estado inicial: `borrador`; sin auditar
- Resultado documental: requiere aclaraciones; sin cambios de etiquetas

### Evidencia de la fuente
- Ubicación exacta: F5, «6. Step Backs», p. 6, texto y foto.
- Pasos originales relevantes, resumidos con palabras propias: de pie frente a la encimera de la cocina; «Hold on with both hands»; dar un paso atrás con un pie y volver; 10 veces; repetir con la otra pierna.
- Coincidencias (C1): de pie frente a una superficie, sujeción con las dos manos, paso atrás, vuelta, 10 veces, cambio de pierna.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, HealthMove permite «una encimera o el respaldo de una silla firme»; la fuente dice «kitchen worktop». Es una adaptación de recurso, no de movimiento.
- Adaptaciones que deben documentarse: «La fuente dice “encimera de la cocina”; aquí se permite también el respaldo de una silla firme.»
- Hechos, inferencias e incertidumbres: D (texto), «Hold on with both hands»; D (foto), una mano visible apoyada en la encimera, la otra no se ve (queda detrás del cuerpo en la vista lateral). D (foto), una pierna atrás con el pie en el suelo. D (texto), «designed to improve your standing balance» (objetivo declarado).
- Limitaciones de la verificación: la foto es una vista lateral; la otra mano no se ve.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto): «Hold on with both hands» | evidencia | FALSE | — |
| una_pierna | true | D (texto y foto): un pie atrás, el peso cae sobre un solo pie en algún momento | evidencia | TRUE | — |
| sentarse_levantarse | false | D: de pie de principio a fin | evidencia | FALSE | — |
| impacto | false | D: paso atrás sin fase en el aire | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: ejercicio de fuerza y equilibrio | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (foto): la mano visible está a la altura de la encimera, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (foto): mano al frente | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): «Hold on with both hands» | evidencia | TRUE | Q1 (P9): apoyo bilateral |
| agarre | true | D (texto): «Hold on»; D (foto): la mano se apoya en la encimera | evidencia | TRUE | — |
| peso_en_manos | false | D: las manos se sujetan, no soportan el peso del cuerpo | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (foto): de pie, rodillas estiradas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (foto): de pie, sin flexión de cadera | evidencia | FALSE | — |
| puntillas_talones | false | D (foto): pies planos | evidencia | FALSE | — |
| inclinacion_tronco | false | D (foto): tronco erguido | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `de_pie`, recurso `silla`: coherentes con la versión de HealthMove; la fuente usa «kitchen worktop».
- Dosis «10 veces con cada pierna»: coincide con la fuente.
- Ilustración: de pie frente al respaldo de una silla, una mano en el respaldo, una pierna atrás. Coincide. No induce otro movimiento (R7.6).
- Exclusiones del catálogo v1: ninguna aplica.

### Incidencias
- La nota actual de `ambos_brazos` («[conservadora] ambos_brazos: apoyo bilateral (Q1). Se cerraría con: fuente de que basta una mano.») ya no es correcta: la fuente dice «Hold on with both hands» (D), no es conservadora. Debe pasar a evidencia D. Ver DS-256.

### Propuesta de cambios
- `notas_etiquetado`: sustituir la nota de `ambos_brazos` por «ambos_brazos: la fuente pide sujetarse con las dos manos (“Hold on with both hands”).» (evidencia D, no conservadora).
- `adaptaciones`: añadir «La fuente dice “encimera de la cocina”; aquí se permite también el respaldo de una silla firme.»
- `fuente.especifica_de`: «discapacidad intelectual» (la fuente declara el servicio de fisioterapia para personas con discapacidad intelectual). R8.1. Ver DS-255.
- `fuente.consultado`: 2026-10-24.
- Sin cambios de etiquetas.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 77. abrazar-rodilla-tumbado

### Identificación
- ID: `abrazar-rodilla-tumbado`
- Nombre: Abrazar una rodilla en la cama
- Fuente: NHS Fife, «Back Pain Advice», «Exercise 2 · Knee Hug», p. 3
- Población destinataria de la fuente (si la declara): «Back Pain Advice» del servicio de fisioterapia de discapacidad intelectual
- Estado inicial: `borrador`; sin auditar
- Resultado documental: requiere aclaraciones y adaptaciones documentadas; sin cambios de etiquetas

### Evidencia de la fuente
- Ubicación exacta: F6, «Exercise 2 · Knee Hug», p. 3, texto y tres fotos.
- Pasos originales relevantes, resumidos con palabras propias: tumbado boca arriba, rodillas dobladas, pies en la cama; llevar una rodilla al pecho «- you can use your hands to help»; mantener 5 segundos; bajar despacio; lo mismo con la otra; repetir 5 veces; «Try BOTH knees together if you can». Aviso general: si los ejercicios empeoran el dolor o causan uno nuevo, parar y consultar al fisioterapeuta.
- Coincidencias (C1): tumbado boca arriba, rodillas dobladas, pies apoyados, una rodilla al pecho, 5 segundos, 5 veces, cambio de pierna.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente hace las manos opcionales («you can use your hands to help»); HealthMove pide abrazar la rodilla con las manos. C3, la fuente ofrece la versión con las dos rodillas; HealthMove la omite. C3, la fuente incluye un aviso general de parar si empeora el dolor; HealthMove no lo recoge (es un consejo de seguridad, clase 2/3, R6.3).
- Adaptaciones que deben documentarse: «La fuente dice que se pueden usar las manos para ayudar; aquí se abraza la rodilla con las manos.» «La fuente ofrece la versión con las dos rodillas; aquí se hace con una.» «La fuente incluye un aviso de parar si el dolor empeora; aquí no se recoge.» (este último es un consejo de seguridad, R6.3).
- Hechos, inferencias e incertidumbres: D (fotos), tumbado boca arriba, rodillas dobladas, pies apoyados; una rodilla junto al pecho, sujeta con las dos manos entrelazadas por delante de la espinilla; las dos rodillas al pecho, abrazadas, sobre una colchoneta en el suelo. D (texto), las manos son opcionales. D (foto 2), la rodilla queda muy doblada y el muslo pegado al tronco.
- Limitaciones de la verificación: la foto 3 (las dos rodillas) es sobre una colchoneta en el suelo, no en la cama; la versión de HealthMove es en la cama.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso está en la cama | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado de principio a fin | evidencia | FALSE | — |
| impacto | false | D: movimiento lento, sin fase en el aire | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento suave | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (foto 2): las manos a la altura de la espinilla, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (foto 2): manos al frente, por delante de la espinilla | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y foto 2): las dos manos entrelazadas sujetan la rodilla | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (foto 2): las dos manos entrelazadas | evidencia | TRUE | — |
| peso_en_manos | false | D: tumbado; las manos sujetan la rodilla, no soportan el peso del cuerpo | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | true | D (foto 2): la rodilla queda muy doblada, el muslo pegado al tronco | evidencia | TRUE | — |
| flexion_amplia_cadera | true | D (foto 2): el muslo pegado al tronco | evidencia | TRUE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (foto 2): tronco en la cama, sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `tumbado`, recurso `cama`: coherentes.
- Dosis «Mantén 5 segundos. 5 veces con cada pierna.»: coincide con la fuente.
- Ilustración: tumbado en la cama, una rodilla sube hacia el pecho y la mano llega a la rodilla. Coincide con la foto 2. No induce otro movimiento (R7.6).
- Exclusiones del catálogo v1: ninguna aplica.
- `variante_de`: `rodilla-al-pecho-tumbado` (Sant Joan d'Alacant, sin manos). Correcto: es una variante con fuente (DG-5, R5.6).

### Incidencias
- La diferencia «manos opcionales» / «abrazar con las manos» es una C3 que debe documentarse como adaptación (R3.2). No cambia etiquetas.
- La omisión de la versión con las dos rodillas y del aviso de seguridad debe documentarse (R6.3 para el aviso).

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente dice que se pueden usar las manos para ayudar; aquí se abraza la rodilla con las manos.» «La fuente ofrece la versión con las dos rodillas; aquí se hace con una.» «La fuente incluye un aviso de parar si el dolor empeora; aquí no se recoge.»
- `fuente.especifica_de`: «dolor de espalda» (ya está; la fuente declara «Back Pain Advice»). Correcto.
- `fuente.consultado`: 2026-10-24.
- Sin cambios de etiquetas.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 78. gemelo-banda-suelo

### Identificación
- ID: `gemelo-banda-suelo`
- Nombre: Estirar la pantorrilla con banda sentado en el suelo
- Fuente: NHS Fife, «Calf stretches», tercer estiramiento (sin título), HTML
- Población destinataria de la fuente (si la declara): podología; no declara grupo
- Estado inicial: `borrador`; sin auditar
- Resultado documental: requiere aclaraciones y adaptaciones documentadas; un `true` conservador y una posible adaptación de posición

### Evidencia de la fuente
- Ubicación exacta: F7, tercer estiramiento (sin título), texto; la única foto de la página corresponde al primer estiramiento.
- Pasos originales relevantes, resumidos con palabras propias: sentado en el suelo o en la cama, con la espalda recta apoyada en la pared y las piernas estiradas al frente; poner una banda alrededor del pie; tirar suavemente y notar el estiramiento en la pantorrilla; «Do not allow your knee to bend»; mantener «approximately 20- 30s seconds»; repetir 3-5 veces con cada pierna.
- Coincidencias (C1): sentado con la espalda en la pared, piernas estiradas, banda alrededor del pie, tirar suavemente, sin doblar la rodilla, 20-30 segundos, 3-5 veces, cambio de pierna.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente permite «floor or bed»; HealthMove solo el suelo (posición `suelo`, recurso `pared`). Es una adaptación de posición. C3, la fuente no dice si se sujeta la banda con una o con dos manos; HealthMove usa las dos manos (la ilustración muestra dos manos).
- Adaptaciones que deben documentarse: «La fuente permite hacerlo en el suelo o en la cama; aquí se hace en el suelo, con la espalda en la pared.» «La fuente no dice con cuántas manos se sujeta la banda; aquí se usan las dos.»
- Hechos, inferencias e incertidumbres: D (texto), sentado en el suelo o en la cama, espalda en la pared, piernas estiradas, banda alrededor del pie, tirar suavemente, sin doblar la rodilla, 20-30 segundos, 3-5 veces. I (texto), «pull the band» exige sujetar la banda; el texto no dice si con una o con dos manos. N (imagen), este ejercicio no tiene imagen.
- Limitaciones de la verificación: este ejercicio no tiene imagen en la fuente; todo lo que el texto no dice es N.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado en el suelo | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado; el peso está en el suelo | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado de principio a fin | evidencia | FALSE | — |
| impacto | false | D: estiramiento sin fase en el aire | evidencia | FALSE | — |
| carga_externa | false | D: la banda solo sirve para tirar del pie; no es una resistencia añadida al movimiento | evidencia | FALSE | La nota actual lo explica correctamente |
| esfuerzo_cardio | false | D: estiramiento suave | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos tiran de la banda a la altura del pie, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto): las manos al frente, a la altura del pie | evidencia | FALSE | — |
| ambos_brazos | true | I (texto): «pull the band» exige sujetar la banda; el texto no dice si con una o con dos manos; la ilustración de HealthMove muestra dos manos | conservadora | TRUE | R2.1: no consta que baste una mano; se mantiene el `true` conservador |
| agarre | true | I (texto): «pull the band» exige sujetar la banda; el texto no dice si con una o con dos manos | conservadora | TRUE | R2.1: no consta que no se cierre la mano; se mantiene el `true` conservador |
| peso_en_manos | false | D: sentado en el suelo; las manos tiran de la banda, no soportan el peso del cuerpo | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): «Do not allow your knee to bend» | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): piernas estiradas al frente; el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado en el suelo | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): «back straight against the wall» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `suelo`, recursos `banda` y `pared`: coherentes con la versión de HealthMove; la fuente permite también la cama.
- Dosis «Mantén de 20 a 30 segundos. De 3 a 5 veces con cada pierna.»: coincide con la fuente.
- Ilustración: sentado en el suelo con la espalda en la pared, piernas estiradas, banda del pie a las manos (dos manos). Coincide con el texto. No induce otro movimiento (R7.6).
- Exclusiones del catálogo v1: ninguna aplica.

### Incidencias
- `ambos_brazos` y `agarre` están en `true` con evidencia I, no D. Las notas actuales no llevan el formato `[conservadora]` de R2.4. Ver DS-257.
- La adaptación de posición (suelo en lugar de suelo o cama) debe documentarse (R3.2). No cambia etiquetas.

### Propuesta de cambios
- `exigencias.ambos_brazos`: mantener `true`; añadir a `notas_etiquetado` la forma de R2.4: «[conservadora] ambos_brazos: el texto dice “pull the band” y no dice con cuántas manos; la ilustración de HealthMove muestra dos. Se cerraría con: evidencia de la fuente de que basta una mano.»
- `exigencias.agarre`: mantener `true`; añadir a `notas_etiquetado` la forma de R2.4: «[conservadora] agarre: el texto dice “pull the band” y no dice si se cierra la mano. Se cerraría con: evidencia de la fuente de que no se cierra la mano.»
- `adaptaciones`: añadir «La fuente permite hacerlo en el suelo o en la cama; aquí se hace en el suelo, con la espalda en la pared.» y «La fuente no dice con cuántas manos se sujeta la banda; aquí se usan las dos.»
- `fuente.especifica_de`: no se rellena (la fuente no declara población). `fuente.consultado`: 2026-10-24.
- Impacto (modo auditoría): sin cambios de valor; las notas no afectan a la disponibilidad.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## Hallazgos DS-n

### DS-251 · La evidencia de Claude califica de D un hecho que solo sostiene como I en `elevacion-pierna-recta-sentado`
- **Ubicación exacta:** `evidencia-lote-11`, apartado 70, «Muslo»; `catalogo-lote11`, `elevacion-pierna-recta-sentado`, `exigencias.flexion_amplia_cadera` y `notas_etiquetado`.
- **Evidencia:** «Muslo: la pierna elevada recta separa el muslo del asiento (I por la foto: el muslo sube un poco respecto al asiento).» El catálogo tiene `flexion_amplia_cadera: true` con la nota «Subir la pierna estirada separa el muslo del asiento: flexion_amplia_cadera.», que no lleva el formato `[conservadora]` de R2.4.
- **Explicación:** la evidencia de Claude califica el hecho como I, no D. La nota del catálogo lo presenta como si fuera un hecho (D). R2.4 exige que un `true` conservador se anote con la forma `[conservadora] <exigencia>: <motivo>. Se cerraría con: <evidencia que falta>.`
- **Consecuencia potencial:** la nota no distingue un hecho de una inferencia (principio 3 del protocolo). Si en el futuro se busca evidencia para cerrar la etiqueta, la nota no dice qué falta.
- **Nivel de certeza:** alta.
- **Recomendación:** mantener `true` (R2.1) y reescribir la nota con la forma de R2.4 (ver propuesta del ejercicio 70).
- **Prueba o evidencia que permitiría confirmarlo:** una vista lateral de la fuente que muestre el ángulo del muslo respecto al tronco.
- **¿Requiere decisión humana?:** no (es una corrección de forma de la nota, no de valor).

### DS-252 · `flexion_amplia_cadera` en `elevacion-pierna-recta-sentado`: ¿D o I?
- **Ubicación exacta:** `evidencia-lote-11`, apartado 70; `catalogo-lote11`, `elevacion-pierna-recta-sentado`.
- **Evidencia:** «I por la foto: el muslo sube un poco respecto al asiento».
- **Explicación:** la definición de `flexion_amplia_cadera` (§4) es «muslo más cerca del tronco que al estar sentado». La foto muestra la pierna elevada con la rodilla recta; el muslo se separa del asiento, pero no consta que se acerque al tronco más que al estar sentado. La evidencia de Claude lo califica como I, no D. Con I, R2.1 permite `true` conservador, pero no `true` por evidencia.
- **Consecuencia potencial:** si se mantiene `true` sin la nota de R2.4, la etiqueta parece basada en evidencia D cuando no lo está. Si se propusiera `false`, R2.2 lo impediría (no hay D de ausencia).
- **Nivel de certeza:** media (depende de si la foto permite ver el ángulo del muslo respecto al tronco; la evidencia no lo detalla).
- **Recomendación:** mantener `true` conservador con la nota de R2.4 (ver propuesta del ejercicio 70). No proponer `false`.
- **Prueba o evidencia que permitiría confirmarlo:** una vista lateral de la fuente que muestre el ángulo del muslo respecto al tronco; o una descripción de la foto que precise si el muslo se acerca al tronco.
- **¿Requiere decisión humana?:** no (es una corrección de forma de la nota).

### DS-253 · La foto de `apretar-gluteos-sentado` muestra un sillón con reposabrazos, que el catálogo v1 excluye como dependencia
- **Ubicación exacta:** `evidencia-lote-11`, apartado 71; `especificacion` §4, «Exclusiones del catálogo v1»; `catalogo-lote11`, `apretar-gluteos-sentado`.
- **Evidencia:** «Foto (D): mujer sentada en un sillón con reposabrazos, espalda en el respaldo, antebrazos y manos apoyados sobre los reposabrazos.» La especificación §4 excluye «ejercicios que dependen de reposabrazos».
- **Explicación:** el ejercicio no depende de los reposabrazos (los brazos no intervienen; el movimiento es de los glúteos). Pero la foto de la fuente los muestra, y la ilustración de HealthMove no. No es una dependencia, pero conviene que la nota lo diga para que no se confunda con una exclusión del catálogo v1.
- **Consecuencia potencial:** un auditor posterior podría interpretar que el ejercicio depende de reposabrazos y proponer retirarlo. La nota evita esa confusión.
- **Nivel de certeza:** alta (la foto los muestra; el texto no los pide).
- **Recomendación:** añadir la nota propuesta en el ejercicio 71. No cambiar etiquetas.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente, que no menciona los reposabrazos.
- **¿Requiere decisión humana?:** no.

### DS-254 · La ilustración de `de-pie-mano-preparada` puede inducir un apoyo que la fuente no tiene (R7.7)
- **Ubicación exacta:** `evidencia-lote-11`, apartado 72, «Ilustración de HealthMove»; `protocolo` R7.6 y R7.7.
- **Evidencia:** «Ilustración de HealthMove: de pie junto a una silla, con la mano sobre el respaldo. A 60 ppp no se distingue si la mano toca o queda encima.» La fuente dice «Hovering… over a sturdy surface», sin tocar.
- **Explicación:** si la ilustración muestra la mano tocando el respaldo, induce un apoyo que la fuente no tiene. R7.7 dice que, mientras haya una discrepancia de ilustración que induzca a interpretar el ejercicio de otra forma, esa ilustración no se da por válida y el ejercicio no se propone para aprobación documental. La evidencia de Claude no lo determina a 60 ppp.
- **Consecuencia potencial:** si la mano toca, el ejercicio no puede proponerse para aprobación documental hasta corregir la ilustración. Si no toca, no hay discrepancia.
- **Nivel de certeza:** media (la evidencia no lo determina).
- **Recomendación:** renderizar la ilustración a más resolución antes de dar por válida la ilustración. Si la mano toca, corregirla (R7.6/R7.7).
- **Prueba o evidencia que permitiría confirmarlo:** una renderización de la ilustración a resolución suficiente para ver si la mano toca el respaldo.
- **¿Requiere decisión humana?:** sí (si la ilustración induce un apoyo, el desarrollador decide si se corrige la ilustración o se cambia el ejercicio).

### DS-255 · `fuente.especifica_de` en los ejercicios de NHS Forth Valley y NHS Fife: ¿qué población declarar?
- **Ubicación exacta:** `evidencia-lote-11`, apartados 73, 74 y 76; `protocolo` R8.1; `catalogo-lote11`, `balanceo-brazos-sentado`, `elevar-talones-sentado`, `paso-atras-apoyo`.
- **Evidencia:** F3 dice «A resource for care homes» (residencias); F5 dice «servicio de fisioterapia para personas con discapacidad intelectual; formato de lectura fácil».
- **Explicación:** R8.1 dice que `fuente.especifica_de` solo se rellena con la población que la fuente declara, con un nombre breve coherente con los valores existentes («párkinson», «amputación por debajo de la rodilla», «dolor lumbar»…). «Residencias» y «discapacidad intelectual» son poblaciones declaradas, pero no son exactamente el mismo tipo de nombre que los existentes. La decisión de qué nombre usar es del desarrollador.
- **Consecuencia potencial:** si se rellena con un nombre que no encaja con los existentes, la interfaz (Q8(b)) muestra un texto que puede confundir. Si no se rellena, se pierde una población declarada.
- **Nivel de certeza:** alta (la fuente declara la población; el nombre es una decisión).
- **Recomendación:** proponer «residencias» para F3 y «discapacidad intelectual» para F5, y que el desarrollador confirme el nombre. No cambiar etiquetas.
- **Prueba o evidencia que permitiría confirmarlo:** la lista de valores existentes de `especifica_de`