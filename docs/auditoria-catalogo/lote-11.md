# Lote 11 · Primera auditoría con el protocolo 1.0: St Helens, NHS Forth Valley y NHS Fife (9 ejercicios)

- Fecha: 2026-10-24
- Versión del protocolo: 1.0
- Catálogo: v0.3.0 (actualizado 2026-10-14), rama `desarrollo-v1`, commit `c912d3fc9bcea84f1a9af12f1342a627a9127ade`
- Identificador git del catálogo: no fiable, el catálogo tiene cambios sin confirmar (son los cambios de este lote, aplicados antes de cerrarlo).
- Huellas literales (tras aplicar los cambios): `elevacion-pierna-recta-sentado` `60c1661f223239f9`, `apretar-gluteos-sentado` `035e5b16bd0bf529`, `de-pie-mano-preparada` `7c2607542de5962b`, `balanceo-brazos-sentado` `6cbb983a9999f12d`, `elevar-talones-sentado` `e6ae7faa16a52152`, `secarse-toalla-sentado` `c6c0b84f1ac638ed`, `paso-atras-apoyo` `0bee6742d7155c65`, `abrazar-rodilla-tumbado` `e7234932192003c1`, `gemelo-banda-suelo` `2b64c61cd86aec5a`.
- **Encargo:** P29 (`registro.md`): auditar el catálogo repartiendo el trabajo con DeepSeek; las aprobaciones, al final. **Cómo se hizo:** Claude abrió las fuentes y escribió la evidencia (`evidencia/lote-11.md`); DeepSeek redactó un borrador de los 9 ejercicios (consulta C12, `deepseek/ejecuciones/20261024T031637Z-fase-11-lote11` y sus dos continuaciones); Claude lo verificó contra las fuentes y escribió este informe. Las correcciones de Claude al borrador están en «Revisión de DeepSeek».
- **Por qué este lote:** St Helens y NHS Forth Valley eran las fuentes siguientes según el registro; se añaden las cuatro de NHS Fife.
- **Fuentes abiertas** (2026-10-24, descargadas con `curl`, HTTP 200; detalle y hashes completos en `evidencia/lote-11.md`):

| Fuente | URL | Datos | Revisado |
|---|---|---|---|
| F1 · Mersey and West Lancashire Teaching Hospitals (St Helens), «Chair based exercises», MWL2083 | `https://sthk.merseywestlancs.nhs.uk/media/.leaflets/66016bfe111f20.73905449.pdf` | PDF de 4 páginas, SHA-256 (prefijo) `f8f8fe2fcff2f9df` | Texto y fotos de las páginas 2 a 4 |
| F2 · St Helens Reablement Team, «Balance exercises (low level)», STHK1446 | `https://sthk.merseywestlancs.nhs.uk/leaflets/download/sthk-606eccc802c744.80446620` | PDF de 4 páginas, SHA-256 (prefijo) `d3e950136dc5ed36` | Texto y fotos de las páginas 2 y 3 |
| F3 · NHS Forth Valley, «Bed & Seated Exercises» | `https://nhsforthvalley.com/wp-content/uploads/2021/08/2Seated-Bed-Exercises.pdf` | PDF de 4 páginas, SHA-256 (prefijo) `d18e24d920faf5e3` | Texto y dibujos de las páginas 2 a 4 |
| F4 · NHS Fife, «Home GRASP Participant Manual» | `https://www.nhsfife.org/media/39645/home-grasp-version-1.pdf` | PDF de 56 páginas, SHA-256 (prefijo) `a12336373e504e9b` | Introducción y página 49, con sus tres fotos |
| F5 · NHS Fife, «Strength and Balance Retraining Exercise Programme» (lectura fácil) | `https://www.nhsfife.org/media/33404/easy-read-strength-and-balance.pdf` | PDF de 7 páginas, SHA-256 (prefijo) `822ff298da8af8c9` | Texto completo y página 6 |
| F6 · NHS Fife, «Back Pain Advice» | `https://www.nhsfife.org/media/33403/back-pain-advice-updated-21052020.pdf` | PDF de 5 páginas, SHA-256 (prefijo) `a39de9b6aabec7b0` | Texto completo y página 3 |
| F7 · NHS Fife, «Calf stretches» | `https://www.nhsfife.org/services/all-services/patient-advice/calf-stretches/` | HTML, SHA-256 (prefijo) `e6f8248f8d657e45` | Texto y la única foto (de otro estiramiento) |

- **Ilustraciones de HealthMove** (R7.6): renderizadas desde `ilustraciones.json`. Coinciden 8; la de `de-pie-mano-preparada` dejaba la mano casi sobre el respaldo y se corrige en este lote (DS-254).

## 70. elevacion-pierna-recta-sentado

### Identificación
- ID: `elevacion-pierna-recta-sentado`
- Nombre: Elevación de pierna estirada en la silla
- Fuente: Mersey and West Lancashire Teaching Hospitals NHS Trust (St Helens), «Chair based exercises», «Straight leg raise», p. 4 del PDF
- Población destinataria de la fuente (si la declara): no la declara
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una aclaración y tres `true` conservadores

### Evidencia de la fuente
- Ubicación exacta: F1, «Straight leg raise», p. 4 del PDF (impresa «Page 3»), texto y foto.
- Pasos originales relevantes, resumidos con palabras propias: sentado en una silla estable, estirar una pierna al frente con la rodilla «as straight as possible»; con la pierna recta, subirla y bajarla; repetir con la otra; 10 veces con cada pierna.
- Coincidencias (C1): sentado, pierna estirada, subir y bajar, cambio de pierna, 10 repeticiones.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la instrucción 3 de HealthMove («Sin doblar la rodilla») es más estricta que «as straight as possible»: se aclara hacia la fuente.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (foto), sentada en el borde de una camilla, las dos manos apoyadas en el borde del asiento, una pierna recta elevada. I (foto), el muslo de la pierna elevada se separa un poco del asiento. N, si las manos agarran el borde.
- Limitaciones de la verificación: una sola foto lateral.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado, el peso en el asiento | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado de principio a fin | evidencia | FALSE | — |
| impacto | false | D: elevación lenta | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: fuerza local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (foto): manos a la altura de la cadera | evidencia | FALSE | — |
| mano_detras | false | D (foto): manos a los lados | evidencia | FALSE | — |
| ambos_brazos | false | I (foto): las dos manos apoyadas en el borde; el texto no lo pide | conservadora | TRUE | Q1 (P9) y CN-3: el apoyo de las dos manos que solo aparece en la imagen |
| agarre | false | I (foto): manos en el borde sin prensión visible | conservadora | TRUE | Q2 (P10) y CN-3 |
| peso_en_manos | false | D: sentado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y foto): rodilla estirada | evidencia | FALSE | — |
| flexion_amplia_cadera | true | I (foto): el muslo se separa del asiento al elevar la pierna | conservadora | TRUE | R2.1; la nota pasa a la forma de R2.4 |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (foto): tronco erguido | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recurso `silla`: coherentes. La foto usa una camilla; el texto, «a safe and stable chair».
- Dosis «10 veces con cada pierna»: coincide.
- Ilustración: coincide. Exclusiones del catálogo v1: ninguna.

### Incidencias
- `ambos_brazos` y `agarre` son la clase de CN-3 (apoyo que solo aparece en la imagen, aplazado): `true` conservador como valor provisional.

### Propuesta de cambios
- `exigencias.ambos_brazos` y `exigencias.agarre`: `false` → `true` conservadores, con sus notas.
- `notas_etiquetado`: la nota de `flexion_amplia_cadera` pasa a la forma `[conservadora]`.
- Instrucción 3: «Sin doblar la rodilla, sube y baja la pierna.» → «Con la rodilla lo más recta posible, sube y baja la pierna.» (aclaración, «as straight as possible»).
- `fuente.consultado`: 2026-10-24.
- Impacto (modo auditoría): sale de `un_brazo` y `cerrar_mano`.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).

## 71. apretar-gluteos-sentado

### Identificación
- ID: `apretar-gluteos-sentado`
- Nombre: Apretar glúteos en la silla
- Fuente: Mersey and West Lancashire Teaching Hospitals NHS Trust (St Helens), «Chair based exercises», «Glute squeeze», p. 3 del PDF
- Población destinataria de la fuente (si la declara): no la declara
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel

### Evidencia de la fuente
- Ubicación exacta: F1, «Glute squeeze», p. 3 del PDF (impresa «Page 2»), texto y foto.
- Pasos originales relevantes, resumidos con palabras propias: sentado erguido («In an upright seated position»), apretar los glúteos, mantener 5 segundos y soltar; 10 veces.
- Coincidencias (C1): todo el ejercicio y la dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (foto), sillón con reposabrazos, antebrazos y manos descansando en ellos. El texto no los pide y el ejercicio no los usa.
- Limitaciones de la verificación: ninguna relevante.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado de principio a fin | evidencia | FALSE | — |
| impacto | false | D: contracción sin movimiento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: contracción estática | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (foto): antebrazos en los reposabrazos | evidencia | FALSE | — |
| mano_detras | false | D (foto): manos delante | evidencia | FALSE | — |
| ambos_brazos | false | D (foto): los brazos descansan; el texto no los usa | evidencia | FALSE | DG-4: reposo |
| agarre | false | D (foto): manos en reposo sobre los reposabrazos | evidencia | FALSE | DG-4: reposo, no apoyo |
| peso_en_manos | false | D: sentado | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (foto): sentado normal | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (foto): sentado normal | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): «upright seated position» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase, posición, recurso y dosis: coherentes.
- Ilustración: coincide. Exclusiones del catálogo v1: no depende de reposabrazos (DS-253).

### Incidencias
- Ninguna.

### Propuesta de cambios
- `notas_etiquetado`: «La foto de la fuente muestra un sillón con reposabrazos y los antebrazos descansando en ellos; el ejercicio no los usa ni depende de ellos.»
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).

## 72. de-pie-mano-preparada

### Identificación
- ID: `de-pie-mano-preparada`
- Nombre: De pie sin sujetarte, con la mano preparada
- Fuente: St Helens Reablement Team, «Balance exercises (low level)», «Standing unsupported feet apart, eyes open», p. 3
- Población destinataria de la fuente (si la declara): no la declara (objetivo: «improve your standing balance»)
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel; ilustración corregida

### Evidencia de la fuente
- Ubicación exacta: F2, p. 3, texto y foto.
- Pasos originales relevantes, resumidos con palabras propias: con la mano «Hovering… over a sturdy surface», separar los pies y estar de pie sin apoyo 1 minuto; alargar el tiempo cada vez si se puede.
- Coincidencias (C1): todo el ejercicio y la dosis. «Superficie firme» está en la instrucción de HealthMove; el recurso del modelo es la silla.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna. La versión con los ojos cerrados, que va a continuación en el folleto, no se incorpora.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (foto), de pie, pies separados, una mano justo encima de una mesa alta sin tocarla.
- Limitaciones de la verificación: ninguna relevante.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | true | D (texto): «stand unsupported» | evidencia | TRUE | — |
| una_pierna | false | D: pies separados | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie todo el tiempo | evidencia | FALSE | — |
| impacto | false | D: estático | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estático | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (foto): mano a la altura de la mesa | evidencia | FALSE | — |
| mano_detras | false | D (foto): manos delante y al lado | evidencia | FALSE | — |
| ambos_brazos | false | D (texto y foto): una sola mano preparada, sin apoyo | evidencia | FALSE | La mano preparada no es apoyo |
| agarre | false | D (texto): la mano no toca | evidencia | FALSE | — |
| peso_en_manos | false | D: la mano no toca | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D (foto): rodillas estiradas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie | evidencia | FALSE | — |
| puntillas_talones | false | D (foto): pies planos | evidencia | FALSE | — |
| inclinacion_tronco | false | D (foto): tronco erguido | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase, posición, recurso y dosis: coherentes.
- Ilustración: la mano quedaba casi sobre el borde del respaldo y podía leerse como apoyada (R7.6). Se corrige en `scripts/ilustraciones/depie.mjs` (brazo de 40° a 52°): la mano queda por encima del respaldo, sin tocarlo.
- Exclusiones del catálogo v1: ninguna.

### Incidencias
- Ninguna tras corregir la ilustración.

### Propuesta de cambios
- Ilustración corregida (aplicado). `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).

## 73. balanceo-brazos-sentado

### Identificación
- ID: `balanceo-brazos-sentado`
- Nombre: Balanceo de brazos en la silla
- Fuente: NHS Forth Valley, «Bed & Seated Exercises», «Arm Swings», p. 3
- Población destinataria de la fuente (si la declara): residencias («A resource for care homes»)
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con un `true` conservador ya anotado

### Evidencia de la fuente
- Ubicación exacta: F3, «Arm Swings», p. 3, texto y dibujo.
- Pasos originales relevantes, resumidos con palabras propias: sentarse erguido sin apoyar la espalda («Sit tall away from the back of the chair»), pies planos bajo las rodillas, codos doblados, balancear los brazos desde el hombro a un ritmo cómodo, 30 segundos.
- Coincidencias (C1): todo el ejercicio y la dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (dibujo), manos abiertas a la altura del pecho. N, la altura máxima del balanceo: el texto no la fija.
- Limitaciones de la verificación: un solo dibujo.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: balanceo | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: calentamiento suave | evidencia | FALSE | — |
| brazo_sobre_hombro | true | N: el texto no fija hasta dónde sube el brazo | conservadora | TRUE | CN-1 (P25); nota ya en la forma de R2.4 |
| mano_detras | false | D (dibujo): manos delante | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): «swing your arms» | evidencia | TRUE | Q1: uso simultáneo |
| agarre | false | D (dibujo): manos abiertas | evidencia | FALSE | — |
| peso_en_manos | false | D: sentado | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D (texto): pies bajo las rodillas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (dibujo): sentado normal | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): «Sit tall» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición, recurso y dosis: coherentes. Ilustración: coincide. Exclusiones: ninguna.

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.especifica_de`: «residencias» (R8.1: la fuente lo declara; DS-255). `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).

## 74. elevar-talones-sentado

### Identificación
- ID: `elevar-talones-sentado`
- Nombre: Elevar talones en la silla
- Fuente: NHS Forth Valley, «Bed & Seated Exercises», «Heel raises (seated)», p. 4
- Población destinataria de la fuente (si la declara): residencias («A resource for care homes»)
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel

### Evidencia de la fuente
- Ubicación exacta: F3, «Heel raises (seated)», p. 4, texto y dibujo.
- Pasos originales relevantes, resumidos con palabras propias: sentarse erguido sin apoyar la espalda («Sit tall away from the back of your chair»), levantar los talones con las puntas en el suelo, 10 veces.
- Coincidencias (C1): todo el ejercicio y la dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (dibujo), detalle de las piernas: talones arriba, puntas en el suelo.
- Limitaciones de la verificación: el dibujo no muestra el tronco ni los brazos; el texto no los usa.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: las puntas no se levantan | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: ejercicio local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| agarre | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| peso_en_manos | false | D: sentado | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D (dibujo): sentado normal | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (dibujo): sentado normal | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado, sin cargar el peso del cuerpo | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): «Sit tall» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición, recurso y dosis: coherentes. Ilustración: coincide. Exclusiones: ninguna.

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.especifica_de`: «residencias». `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).

## 75. secarse-toalla-sentado

### Identificación
- ID: `secarse-toalla-sentado`
- Nombre: Como si te secaras la espalda
- Fuente: NHS Fife, «Home GRASP Participant Manual», ejercicio 35 «Drying off», p. 49 del PDF
- Población destinataria de la fuente (si la declara): ictus («stroke-affected arm»)
- Estado inicial: `borrador`; sin auditar
- Resultado documental: dos aclaraciones, una adaptación y un `true` conservador

### Evidencia de la fuente
- Ubicación exacta: F4, ejercicio 35, p. 49 del PDF (impresa 48), texto y tres fotos.
- Pasos originales relevantes, resumidos con palabras propias: doblar la toalla a lo largo sobre la mesa; una mano en cada extremo; pasarla por encima de la cabeza hasta que toque el cuello («so it touches your neck»); moverla de un lado a otro «across your neck and your shoulders» 10 veces, como al secarse; repetir 5 veces.
- Coincidencias (C1): sentado, una mano en cada extremo, por encima de la cabeza, de un lado a otro, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, HealthMove decía «la parte alta de la espalda» y «sobre los hombros»: se aclara hacia la fuente («hasta que toque el cuello», «sobre el cuello y los hombros»). C3, la fuente empieza con la toalla sobre la mesa: es preparación (CN-2), pero se documenta.
- Adaptaciones que deben documentarse: «La fuente empieza con la toalla doblada sobre una mesa; aquí se sostiene desde el principio.»
- Hechos, inferencias e incertidumbres: D (fotos), las dos manos cerradas sobre la toalla; las manos a la altura de las orejas (por encima del hombro); la toalla por detrás de la cabeza y del cuello. I, si la mano pasa por detrás de la cabeza: las fotos la muestran a los lados.
- Limitaciones de la verificación: fotos frontales y de tres cuartos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: sin fase en el aire | evidencia | FALSE | — |
| carga_externa | false | D: la toalla no es un peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento suave | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y fotos): «over your head»; manos a la altura de las orejas | evidencia | TRUE | — |
| mano_detras | true | I (fotos): la toalla pasa por detrás de la cabeza y las manos quedan a los lados | conservadora | TRUE | R2.1; nota nueva en la forma de R2.4 |
| ambos_brazos | true | D (texto): «a hand on each end» | evidencia | TRUE | — |
| agarre | true | D (fotos): manos cerradas sobre la toalla | evidencia | TRUE | — |
| peso_en_manos | false | D: sentado | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D (fotos): sentado normal | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (fotos): sentado normal | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (fotos): tronco erguido | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición, recursos y dosis: coherentes. Ilustración: muestra la subida por encima de la cabeza; coincide. Exclusiones: ninguna.

### Incidencias
- `especifica_de` «ictus» correcto (R8.1).

### Propuesta de cambios
- Instrucción 2: «Pásala por encima de la cabeza hasta dejarla en la parte alta de la espalda.» → «Pásala por encima de la cabeza hasta que toque el cuello.» (aclaración).
- Instrucción 3: «sobre los hombros» → «sobre el cuello y los hombros» (aclaración).
- `adaptaciones`: la de la mesa (antes solo en `notas_etiquetado`).
- `notas_etiquetado`: `[conservadora]` de `mano_detras`. `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).

## 76. paso-atras-apoyo

### Identificación
- ID: `paso-atras-apoyo`
- Nombre: Paso atrás frente a la encimera
- Fuente: NHS Fife, Learning Disability Physiotherapy Service, «Strength and Balance Retraining Exercise Programme» (lectura fácil), «6. Step Backs», p. 6
- Población destinataria de la fuente (si la declara): discapacidad intelectual (servicio de fisioterapia de discapacidad intelectual; lectura fácil)
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una adaptación de apoyo y la nota corregida

### Evidencia de la fuente
- Ubicación exacta: F5, «6. Step Backs», p. 6, texto y foto.
- Pasos originales relevantes, resumidos con palabras propias: de pie frente a la encimera de la cocina, sujetarse con las dos manos («Hold on with both hands»), dar un paso atrás con un pie y volver, 10 veces, y con la otra pierna.
- Coincidencias (C1): todo el ejercicio y la dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, HealthMove admite también el respaldo de una silla firme.
- Adaptaciones que deben documentarse: «La fuente lo hace frente a la encimera de la cocina; aquí también vale el respaldo de una silla firme.» (adaptación nueva, para aprobar una a una, Q5).
- Hechos, inferencias e incertidumbres: D (foto), una mano visible en la encimera, una pierna atrás. La otra mano no se ve en la vista lateral; el texto pide las dos.
- Limitaciones de la verificación: vista lateral.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto): sujeto con las dos manos | evidencia | FALSE | — |
| una_pierna | true | D: al dar el paso, el peso cae en un pie | evidencia | TRUE | — |
| sentarse_levantarse | false | D: de pie todo el tiempo | evidencia | FALSE | — |
| impacto | false | D: paso controlado | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: fuerza y equilibrio | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (foto): mano a la altura de la encimera | evidencia | FALSE | — |
| mano_detras | false | D (foto): manos delante | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): «Hold on with both hands» | evidencia | TRUE | La nota deja de ser conservadora (DS-256) |
| agarre | true | D (texto): «Hold on» | evidencia | TRUE | — |
| peso_en_manos | false | D: sujetarse no es cargar el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (foto): rodillas casi rectas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (foto): de pie | evidencia | FALSE | — |
| puntillas_talones | false | D (foto): pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (foto): tronco erguido | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase, posición, recurso `silla` y dosis: coherentes. Ilustración: coincide. Exclusiones: ninguna.

### Incidencias
- Ninguna.

### Propuesta de cambios
- `notas_etiquetado`: «ambos_brazos y agarre: la fuente pide sujetarse con las dos manos («Hold on with both hands»).»
- `adaptaciones`: la de la encimera o la silla.
- `fuente.especifica_de`: «discapacidad intelectual» (R8.1; DS-255). `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).

## 77. abrazar-rodilla-tumbado

### Identificación
- ID: `abrazar-rodilla-tumbado`
- Nombre: Abrazar una rodilla en la cama
- Fuente: NHS Fife, Learning Disability Physiotherapy Service, «Back Pain Advice», «Exercise 2 · Knee Hug», p. 3
- Población destinataria de la fuente (si la declara): dolor de espalda
- Estado inicial: `borrador`; sin auditar
- Resultado documental: una aclaración y dos adaptaciones

### Evidencia de la fuente
- Ubicación exacta: F6, «Knee Hug», p. 3, texto y tres fotos.
- Pasos originales relevantes, resumidos con palabras propias: tumbado boca arriba, rodillas dobladas, pies en la cama; llevar una rodilla al pecho, pudiendo ayudarse con las manos («you can use your hands to help»); 5 segundos; bajar despacio; la otra; 5 veces; probar las dos rodillas a la vez si se puede.
- Coincidencias (C1): posición, movimiento, 5 segundos, 5 veces, cambio de pierna.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, las manos son opcionales en la fuente y HealthMove las pide (R3.1: es una de las ejecuciones que la fuente permite). C3, HealthMove añadía «Respira con calma», que la fuente no dice: se retira (aclaración). C3, se omite la versión con las dos rodillas.
- Adaptaciones que deben documentarse: «La fuente deja usar las manos como ayuda; aquí se abraza la rodilla con las manos.» y «Se omite la versión de la fuente con las dos rodillas a la vez.»
- Hechos, inferencias e incertidumbres: D (foto 2), una rodilla junto al pecho sujeta con las dos manos entrelazadas; rodilla muy doblada y muslo pegado al tronco.
- Limitaciones de la verificación: la foto 3 es en el suelo, sobre una colchoneta.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: estiramiento | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (foto 2): manos en la espinilla | evidencia | FALSE | — |
| mano_detras | false | D (foto 2): manos delante de la pierna | evidencia | FALSE | — |
| ambos_brazos | true | D (foto 2) e instrucción de HealthMove: las dos manos abrazan la rodilla | evidencia | TRUE | — |
| agarre | true | D (foto 2): manos entrelazadas | evidencia | TRUE | — |
| peso_en_manos | false | D: tumbado | evidencia | FALSE | — |
| flexion_profunda_rodilla | true | D (foto 2): rodilla muy doblada | evidencia | TRUE | — |
| flexion_amplia_cadera | true | D (foto 2): muslo pegado al tronco | evidencia | TRUE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `tumbado`, recurso `cama` y dosis: coherentes. `variante_de: rodilla-al-pecho-tumbado` (la versión sin manos, con su propia fuente): correcto. Ilustración: coincide con la foto 2. Exclusiones: ninguna.

### Incidencias
- El folleto avisa de parar si el dolor empeora. HealthMove no lo recoge en el ejercicio: es un consejo de clase 2 omitido, no añadido, así que R6.3 no pide documentarlo como adaptación (DG-6). Queda anotado aquí.

### Propuesta de cambios
- Instrucción 3: «Respira con calma, baja despacio y cambia de pierna.» → «Baja despacio y cambia de pierna.» (aclaración).
- `adaptaciones`: las dos de arriba. `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).

## 78. gemelo-banda-suelo

### Identificación
- ID: `gemelo-banda-suelo`
- Nombre: Estirar la pantorrilla con banda sentado en el suelo
- Fuente: NHS Fife Podiatry, «Calf stretches», tercer estiramiento
- Población destinataria de la fuente (si la declara): no la declara
- Estado inicial: `borrador`; sin auditar
- Resultado documental: dos adaptaciones y dos `true` conservadores

### Evidencia de la fuente
- Ubicación exacta: F7, tercer estiramiento (sin título), solo texto.
- Pasos originales relevantes, resumidos con palabras propias: sentado en el suelo o en la cama con la espalda recta contra la pared y las piernas estiradas; banda alrededor del pie; tirar suavemente hasta notar el estiramiento; sin doblar la rodilla («Do not allow your knee to bend»); 20 a 30 segundos; 3 a 5 veces con cada pierna.
- Coincidencias (C1): todo el ejercicio y la dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente permite la cama; HealthMove, solo el suelo. C3, HealthMove pide sujetar los dos extremos.
- Adaptaciones que deben documentarse: «La fuente permite hacerlo sentado en el suelo o en la cama; aquí se hace en el suelo, con la espalda en la pared.» y «La fuente no dice con cuántas manos se sujeta la banda; aquí se usan las dos.»
- Hechos, inferencias e incertidumbres: N, todo lo que el texto no dice: este ejercicio no tiene imagen (la única foto es de otro estiramiento). I, tirar de la banda exige sujetarla.
- Limitaciones de la verificación: sin imagen.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado en el suelo | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: estiramiento | evidencia | FALSE | — |
| carga_externa | false | D: la banda solo tira del pie | evidencia | FALSE | Nota existente |
| esfuerzo_cardio | false | D: estiramiento | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): las manos tiran hacia el pie, con las piernas estiradas en el suelo | evidencia | FALSE | — |
| mano_detras | false | D (texto): las manos delante | evidencia | FALSE | — |
| ambos_brazos | true | I: no dice con cuántas manos; HealthMove pide las dos | conservadora | TRUE | R2.1; nota en la forma de R2.4 |
| agarre | true | I: tirar de la banda exige sujetarla | conservadora | TRUE | R2.1; nota en la forma de R2.4 |
| peso_en_manos | false | D: sentado | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D (texto): rodilla estirada | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (texto): piernas estiradas, sentado con la espalda en la pared | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): «back straight against the wall» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `suelo`, recursos `banda` y `pared`, dosis: coherentes. Ilustración: coincide con el texto. Exclusiones: ninguna.

### Incidencias
- Ninguna.

### Propuesta de cambios
- `notas_etiquetado`: las dos `[conservadora]`. `adaptaciones`: las dos de arriba. `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).

## Revisión de DeepSeek

**Consulta C12** (`deepseek/ejecuciones/20261024T031637Z-fase-11-lote11` y sus continuaciones `…-bloque2` y `…-bloque3`; 0,075 USD como mucho). DeepSeek redactó el borrador de los 9 ejercicios en el bloque 1. Desde DS-264 la respuesta degeneró en «confirmaciones» y repeticiones (hasta DS-355) y se cortó al llegar al límite de 3 bloques: esas no se usan. Análisis: `deepseek/analisis-claude/fase-11-lote11.md`.

**Aceptado del borrador:** las tablas de 71, 73, 74, 76 y 78; las notas `[conservadora]` de 70 y 78 (DS-251, DS-252, DS-257); la nota de 76 (DS-256); las adaptaciones de 76, 77 y 78 (DS-259, DS-260, DS-262); la nota sobre los reposabrazos (DS-253); revisar la ilustración de 72 (DS-254); `especifica_de` de 73, 74 y 76 (DS-255).

**Corregido por Claude al verificar contra la fuente:**
- 70: DeepSeek trataba las manos en el borde como apoyo para `agarre` y como reposo para `ambos_brazos`. Se aplica el mismo criterio a las dos (CN-3, como en `cruce-piernas-isometrico`): `true` conservador.
- 72: la adaptación de recurso que proponía sobra (la instrucción ya dice «superficie firme»). La ilustración sí inducía un apoyo: corregida.
- 73 y 74: citaba «sit up straight»; la fuente dice «Sit tall».
- 75: proponía documentar como adaptación lo que es una aclaración hacia la fuente (el cuello); `mano_detras` es I, no D.
- 76: atribuía a F5 un objetivo («improve your standing balance») que es de F2.
- 77: no vio «Respira con calma», añadido por HealthMove; proponía como adaptación la omisión de un aviso de seguridad, que R6.3 no cubre.

## Resumen del lote

- **9 ejercicios auditados por primera vez con el protocolo 1.0.** Los 9 quedan LISTOS PARA APROBACIÓN DOCUMENTAL, con los cambios aplicados.
- **Cambios de etiquetas:** `elevacion-pierna-recta-sentado`, `ambos_brazos` y `agarre` → `true` conservadores (CN-3). Sale de `un_brazo` y `cerrar_mano` (modo auditoría). Ninguna otra etiqueta cambia.
- **Adaptaciones nuevas para aprobar una a una (Q5):** 75 (toalla desde el principio), 76 (silla además de encimera), 77 (manos; sin la versión de dos rodillas) y 78 (suelo; dos manos).
- **Nuevas poblaciones en `especifica_de`:** «residencias» y «discapacidad intelectual» (DS-255): el nombre lo confirma el desarrollador en la revisión final.
- **Ilustración corregida:** `de-pie-mano-preparada`.
