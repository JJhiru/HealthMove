# Lote 9 · Primera auditoría con el protocolo 1.0: Royal Berkshire «Stage 1» y NHS «Breathing exercises for stress» (7 ejercicios)

- Fecha: 2026-10-21
- Versión del protocolo: 1.0
- Catálogo: v0.3.0 (actualizado 2026-10-14), rama `desarrollo-v1`, commit `b2b1aae1d9d0c428313b52bfccec3f82572c7042`
- Identificador git del catálogo: no fiable, el catálogo tiene cambios sin confirmar (son los cambios de este lote, aplicados antes de cerrarlo).
- Huellas literales (tras aplicar los cambios): `talon-al-suelo-sentado` `3a353fbb42b9db17`, `juntar-omoplatos-sentado` `f588ff5d56ebd4b4`, `elevacion-brazo-sentado` `d71ea4e43379262d`, `extension-codo-toalla-tumbado` `b95bb001f39aa89e`, `flexion-hombro-lado-tumbado` `5d15b3ae76784879`, `respiracion-abdominal-sentado` `201a3817cc7c5df5`, `respiracion-tranquila-tumbado` `ff483f69910516da`.
- **Por qué este lote:** son ejercicios nuevos, nunca auditados. Llenan los huecos del primer lote público: la parte principal sentada sin agarre y la calma sin inclinar la espalda. Royal Berkshire era una de las fuentes siguientes según el registro.
- **Fuente no disponible:** Royal Devon, «Seated exercise programme» (`royaldevon.nhs.uk`), devolvió **403 Access Denied** dos veces, también con cabeceras de navegador. Sus 3 ejercicios (`extension-rodilla-sentado`, `abduccion-cadera-sentado`, `remo-sin-material-sentado`) quedan sin auditar. Hace falta descargar el PDF a mano.
- **Fuentes abiertas** (2026-10-21):

| Fuente                                                               | URL                                                                                                      | Datos                                                                                                       | Revisado                                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Royal Berkshire NHS FT (Fisioterapia), «Stage 1 exercises»           | `https://royalberkshire.nhs.uk/media/vdxo0b3m/stage-1-exercises_mar23.pdf`                               | PDF de 7 páginas, marzo de 2023. SHA-256 `178da6fd4688cea0e8a77022b6573219109e83a33c34ae688c821ecb4e35cd7f` | Texto (`pdftotext -layout`) y páginas 3 a 6 renderizadas, con sus dibujos         |
| NHS, «Breathing exercises for stress»                                | `https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/` | HTML (prefijo SHA-256 `5010a2e1c8d0d64d`), revisado el 12-06-2026. Open Government Licence v3.0             | Texto; la página no tiene fotos del ejercicio                                     |
| NHS Forth Valley, «Seated & Bed Exercises» (fundamento de las dosis) | `https://nhsforthvalley.com/wp-content/uploads/2021/08/2Seated-Bed-Exercises.pdf`                        | SHA-256 (prefijo) `d18e24d920faf5e3`                                                                        | «To start with, try each exercise 2 or 3 times… working up to 10 repetitions» (D) |

- **Población declarada (Royal Berkshire, D):** «During and after a stay in hospital… helpful in your rehabilitation». `especifica_de` = «rehabilitación tras un ingreso hospitalario» (R8.1). El folleto añade: «Only complete the exercises that your physiotherapist has taught you». Es un consejo preventivo (DG-6, clase 2): no cambia ninguna etiqueta. Al usuario le llega con la aclaración de procedencia (P17).
- **Población (NHS, respiración):** técnica para el estrés y la ansiedad, para cualquier persona. No declara un grupo.
- **Ilustraciones de HealthMove** (R7.6): las 7 coinciden con la fuente.

## 59. talon-al-suelo-sentado

### Identificación
- ID: `talon-al-suelo-sentado`
- Nombre: Talón contra el suelo
- Fuente: Royal Berkshire NHS FT (Fisioterapia), «Stage 1 exercises», n.º 12, «Chair exercise: Heel digs», p. 6
- Población destinataria de la fuente (si la declara): rehabilitación durante o después de un ingreso hospitalario
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con dos adaptaciones de dosis documentadas

### Evidencia de la fuente
- Ubicación exacta: p. 6, n.º 12, texto y dibujo.
- Pasos originales relevantes, resumidos con palabras propias: sentado erguido sin apoyar la espalda; clavar un talón en el suelo e intentar arrastrarlo hacia la silla; no se trata de doblar la rodilla ni de mover el pie; se nota la parte trasera del muslo; mantener; repetir con cada lado. Tiempo y repeticiones en blanco.
- Coincidencias (C1): postura y gesto.
- Diferencias (C3) y adaptaciones documentadas (C2): repeticiones (pauta de Forth Valley, verificada) y 5 segundos (los demás ejercicios del folleto, D: n.º 3 y 9) (C2).
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (dibujo), el pie queda por delante de la vertical de la rodilla.
- Limitaciones de la verificación: ninguna.

### Auditoría de exigencias

| Exigencia                | Etiqueta actual | Evidencia (D/I/N) y fundamento                                                          | Regla     | Resultado propuesto | Motivo |
| ------------------------ | --------------- | --------------------------------------------------------------------------------------- | --------- | ------------------- | ------ |
| equilibrio_sin_apoyo     | false           | D: sentado                                                                              | evidencia | FALSE               | —      |
| una_pierna               | false           | D: sentado                                                                              | evidencia | FALSE               | —      |
| sentarse_levantarse      | false           | D: siempre sentado                                                                      | evidencia | FALSE               | —      |
| impacto                  | false           | D: isométrico, «not… move your foot»                                                    | evidencia | FALSE               | —      |
| carga_externa            | false           | D: estructural                                                                          | evidencia | FALSE               | —      |
| esfuerzo_cardio          | false           | D: isométrico                                                                           | evidencia | FALSE               | —      |
| brazo_sobre_hombro       | false           | D: estructural                                                                          | evidencia | FALSE               | —      |
| mano_detras              | false           | D: estructural                                                                          | evidencia | FALSE               | —      |
| ambos_brazos             | false           | D: estructural                                                                          | evidencia | FALSE               | —      |
| agarre                   | false           | D: estructural                                                                          | evidencia | FALSE               | —      |
| peso_en_manos            | false           | D: estructural                                                                          | evidencia | FALSE               | —      |
| flexion_profunda_rodilla | false           | D (dibujo): el pie queda por delante de la rodilla; «not to necessarily bend your knee» | evidencia | FALSE               | —      |
| flexion_amplia_cadera    | false           | D: sentado erguido                                                                      | evidencia | FALSE               | —      |
| puntillas_talones        | false           | D: sentado                                                                              | evidencia | FALSE               | —      |
| inclinacion_tronco       | false           | D: «maintain an upright posture»                                                        | evidencia | FALSE               | —      |
| rotacion_tronco          | false           | D: sin giro                                                                             | evidencia | FALSE               | —      |

### Otros campos
- Fase `principal`, posición, recurso, dosis y duración: coherentes.

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.especifica_de` = «rehabilitación tras un ingreso hospitalario»; `consultado` = 2026-10-21.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-21 (P20).

## 60. juntar-omoplatos-sentado

### Identificación
- ID: `juntar-omoplatos-sentado`
- Nombre: Juntar los omóplatos
- Fuente: Royal Berkshire NHS FT (Fisioterapia), «Stage 1 exercises», n.º 9, «Chair exercise: Shoulder blade squeeze», p. 5
- Población destinataria de la fuente (si la declara): rehabilitación durante o después de un ingreso hospitalario
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una adaptación de dosis documentada

### Evidencia de la fuente
- Ubicación exacta: p. 5, n.º 9, texto y dibujo (vista de espalda, antes y después).
- Pasos originales relevantes, resumidos con palabras propias: sentarse lo más alto posible, sin apoyar la espalda si se puede; juntar los omóplatos y mantener 5 segundos; relajar. Repeticiones en blanco.
- Coincidencias (C1): todo, salvo las repeticiones.
- Diferencias (C3) y adaptaciones documentadas (C2): repeticiones según la pauta de Forth Valley (C2).
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (dibujo), los brazos quedan relajados a los lados.
- Limitaciones de la verificación: ninguna.

### Auditoría de exigencias

| Exigencia                | Etiqueta actual | Evidencia (D/I/N) y fundamento                                | Regla     | Resultado propuesto | Motivo |
| ------------------------ | --------------- | ------------------------------------------------------------- | --------- | ------------------- | ------ |
| equilibrio_sin_apoyo     | false           | D: sentado                                                    | evidencia | FALSE               | —      |
| una_pierna               | false           | D: sentado                                                    | evidencia | FALSE               | —      |
| sentarse_levantarse      | false           | D: siempre sentado                                            | evidencia | FALSE               | —      |
| impacto                  | false           | D: isométrico                                                 | evidencia | FALSE               | —      |
| carga_externa            | false           | D: estructural                                                | evidencia | FALSE               | —      |
| esfuerzo_cardio          | false           | D: isométrico                                                 | evidencia | FALSE               | —      |
| brazo_sobre_hombro       | false           | D (dibujo): brazos abajo                                      | evidencia | FALSE               | —      |
| mano_detras              | false           | D (dibujo): manos a los lados                                 | evidencia | FALSE               | —      |
| ambos_brazos             | false           | D (dibujo): los brazos reposan; trabajan los omóplatos (§7.1) | evidencia | FALSE               | —      |
| agarre                   | false           | D (dibujo): manos abiertas                                    | evidencia | FALSE               | —      |
| peso_en_manos            | false           | D: estructural                                                | evidencia | FALSE               | —      |
| flexion_profunda_rodilla | false           | D: sentado normal                                             | evidencia | FALSE               | —      |
| flexion_amplia_cadera    | false           | D: erguido                                                    | evidencia | FALSE               | —      |
| puntillas_talones        | false           | D: sentado                                                    | evidencia | FALSE               | —      |
| inclinacion_tronco       | false           | D: «sit up as tall as you can»                                | evidencia | FALSE               | —      |
| rotacion_tronco          | false           | D: sin giro                                                   | evidencia | FALSE               | —      |

### Otros campos
- Fase `principal`, posición, recurso, dosis y duración: coherentes.

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.especifica_de` y `consultado`, como en el ejercicio 59.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-21 (P20).

## 61. elevacion-brazo-sentado

### Identificación
- ID: `elevacion-brazo-sentado`
- Nombre: Elevar el brazo hasta la oreja
- Fuente: Royal Berkshire NHS FT (Fisioterapia), «Stage 1 exercises», n.º 10, «Chair exercise: Shoulder flexion», p. 5
- Población destinataria de la fuente (si la declara): rehabilitación durante o después de un ingreso hospitalario
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una adaptación de dosis documentada

### Evidencia de la fuente
- Ubicación exacta: p. 5, n.º 10, texto y dibujo.
- Pasos originales relevantes, resumidos con palabras propias: sentado erguido, adelantado si se puede para separar la espalda del respaldo; con el brazo estirado, subirlo hacia el techo hasta junto a la oreja; sin subir el hombro ni arquear la espalda; bajarlo; repetir con cada lado.
- Coincidencias (C1): todo, salvo las repeticiones.
- Diferencias (C3) y adaptaciones documentadas (C2): repeticiones según la pauta de Forth Valley (C2).
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (dibujo), el brazo llega junto a la oreja.
- Limitaciones de la verificación: ninguna.

### Auditoría de exigencias

| Exigencia                | Etiqueta actual | Evidencia (D/I/N) y fundamento                                       | Regla     | Resultado propuesto | Motivo |
| ------------------------ | --------------- | -------------------------------------------------------------------- | --------- | ------------------- | ------ |
| equilibrio_sin_apoyo     | false           | D: sentado                                                           | evidencia | FALSE               | —      |
| una_pierna               | false           | D: sentado                                                           | evidencia | FALSE               | —      |
| sentarse_levantarse      | false           | D: siempre sentado                                                   | evidencia | FALSE               | —      |
| impacto                  | false           | D: «slowly»                                                          | evidencia | FALSE               | —      |
| carga_externa            | false           | D: estructural                                                       | evidencia | FALSE               | —      |
| esfuerzo_cardio          | false           | D: movilidad                                                         | evidencia | FALSE               | —      |
| brazo_sobre_hombro       | true            | D: «arm next to your ear»                                            | evidencia | TRUE                | —      |
| mano_detras              | false           | D (dibujo): el brazo sube por delante, sin pasar detrás de la cabeza | evidencia | FALSE               | —      |
| ambos_brazos             | false           | D: un brazo cada vez, en series por lado (P9); el otro reposa        | evidencia | FALSE               | —      |
| agarre                   | false           | D (dibujo): mano abierta                                             | evidencia | FALSE               | —      |
| peso_en_manos            | false           | D: estructural                                                       | evidencia | FALSE               | —      |
| flexion_profunda_rodilla | false           | D (dibujo): sentado normal                                           | evidencia | FALSE               | —      |
| flexion_amplia_cadera    | false           | D: erguido                                                           | evidencia | FALSE               | —      |
| puntillas_talones        | false           | D: sentado                                                           | evidencia | FALSE               | —      |
| inclinacion_tronco       | false           | D: «not arching your back»                                           | evidencia | FALSE               | —      |
| rotacion_tronco          | false           | D: sin giro                                                          | evidencia | FALSE               | —      |

### Otros campos
- Fases (`calentamiento`, `principal`), posición, recurso, dosis y duración: coherentes.

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.especifica_de` y `consultado`, como en el ejercicio 59.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-21 (P20).

## 62. extension-codo-toalla-tumbado

### Identificación
- ID: `extension-codo-toalla-tumbado`
- Nombre: Estirar el codo sobre una toalla
- Fuente: Royal Berkshire NHS FT (Fisioterapia), «Stage 1 exercises», n.º 7, «Bed exercise: Elbow extension», p. 4
- Población destinataria de la fuente (si la declara): rehabilitación durante o después de un ingreso hospitalario
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel; la dosis pasa a tener un fundamento verificable

### Evidencia de la fuente
- Ubicación exacta: p. 4, n.º 7, texto y dibujo.
- Pasos originales relevantes, resumidos con palabras propias: tumbado boca arriba, relajado; una almohada doblada o una toalla enrollada bajo el antebrazo; empujar el antebrazo hacia abajo mientras se estira el codo, de 5 a 10 segundos; volver a doblarlo. Repeticiones en blanco.
- Coincidencias (C1): todo, salvo las repeticiones.
- Diferencias (C3) y adaptaciones documentadas (C2): HealthMove usaba «una pauta de 5 a 10», sin fundamento citado. Pasa a la pauta de Forth Valley (2 a 10), la misma que en los ejercicios sentados del folleto y verificada (DG-3, condición 2).
- Adaptaciones que deben documentarse: la anterior, ya documentada con su fundamento.
- Hechos, inferencias e incertidumbres: D, un brazo cada vez («on each side»).
- Limitaciones de la verificación: ninguna.

### Auditoría de exigencias

| Exigencia                | Etiqueta actual | Evidencia (D/I/N) y fundamento                                              | Regla     | Resultado propuesto | Motivo |
| ------------------------ | --------------- | --------------------------------------------------------------------------- | --------- | ------------------- | ------ |
| equilibrio_sin_apoyo     | false           | D: tumbado                                                                  | evidencia | FALSE               | —      |
| una_pierna               | false           | D: tumbado                                                                  | evidencia | FALSE               | —      |
| sentarse_levantarse      | false           | D: siempre tumbado                                                          | evidencia | FALSE               | —      |
| impacto                  | false           | D: isométrico                                                               | evidencia | FALSE               | —      |
| carga_externa            | false           | D: se empuja la almohada; no se sostiene ningún peso                        | evidencia | FALSE               | —      |
| esfuerzo_cardio          | false           | D: isométrico                                                               | evidencia | FALSE               | —      |
| brazo_sobre_hombro       | false           | D (dibujo): brazo junto al cuerpo                                           | evidencia | FALSE               | —      |
| mano_detras              | false           | D: junto al cuerpo                                                          | evidencia | FALSE               | —      |
| ambos_brazos             | false           | D: «on each side», un brazo cada vez                                        | evidencia | FALSE               | —      |
| agarre                   | false           | D: se empuja con el antebrazo, sin cerrar la mano                           | evidencia | FALSE               | —      |
| peso_en_manos            | false           | D: tumbado; el antebrazo empuja la almohada sin soportar el peso del cuerpo | evidencia | FALSE               | —      |
| flexion_profunda_rodilla | false           | D: estructural                                                              | evidencia | FALSE               | —      |
| flexion_amplia_cadera    | false           | D: tumbado plano                                                            | evidencia | FALSE               | —      |
| puntillas_talones        | false           | D: tumbado                                                                  | evidencia | FALSE               | —      |
| inclinacion_tronco       | false           | D: tumbado                                                                  | evidencia | FALSE               | —      |
| rotacion_tronco          | false           | D: sin giro                                                                 | evidencia | FALSE               | —      |

### Otros campos
- Recursos (`cama`, `toalla`), fase `principal` y duración: coherentes.

### Incidencias
- Ninguna.

### Propuesta de cambios
- `dosis`: «De 5 a 10 veces» pasa a «De 2 a 10 veces». La adaptación cita la pauta de Forth Valley.
- `fuente.especifica_de` y `consultado`, como en el ejercicio 59.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-21 (P20).

## 63. flexion-hombro-lado-tumbado

### Identificación
- ID: `flexion-hombro-lado-tumbado`
- Nombre: Subir el brazo tumbado de lado
- Fuente: Royal Berkshire NHS FT (Fisioterapia), «Stage 1 exercises», n.º 6, «Bed exercise: Shoulder flexion», p. 3, la opción «lying on your side»
- Población destinataria de la fuente (si la declara): rehabilitación durante o después de un ingreso hospitalario
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel; la variante está descrita en la fuente (DG-5)

### Evidencia de la fuente
- Ubicación exacta: p. 3, n.º 6, texto. El dibujo muestra la versión boca arriba.
- Pasos originales relevantes, resumidos con palabras propias: subir un brazo con el codo recto hasta dejarlo junto a la oreja y bajarlo; «If this is too difficult then you can do the same motion lying on your side, with your moving arm on top»; repetir con cada brazo.
- Coincidencias (C1): la versión de lado y el movimiento.
- Diferencias (C3) y adaptaciones documentadas (C2): repeticiones según la pauta de Forth Valley (C2; como en el ejercicio 62).
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D, la variante de lado está en el texto de la fuente.
- Limitaciones de la verificación: no hay dibujo de la versión de lado.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | — |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: siempre tumbado | evidencia | FALSE | — |
| impacto | false | D: «slowly» | evidencia | FALSE | — |
| carga_externa | false | D: estructural | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movilidad | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D: «arm is next to your ear» | evidencia | TRUE | — |
| mano_detras | false | D: el brazo va hacia delante y arriba, junto a la oreja | evidencia | FALSE | — |
| ambos_brazos | false | D: «on each arm», un brazo cada vez | evidencia | FALSE | — |
| agarre | false | D: estructural | evidencia | FALSE | — |
| peso_en_manos | false | D: el brazo de arriba se mueve en el aire | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | N: la fuente no dice cómo van las piernas tumbado de lado; HealthMove tampoco | conservadora | TRUE | Ante la duda, se marca (R2.1), con su nota |
| flexion_amplia_cadera | false | N: como la anterior | conservadora | TRUE | Ídem |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | — |
| inclinacion_tronco | false | D: tumbado | evidencia | FALSE | — |
| rotacion_tronco | false | D: de lado, sin giro de hombros respecto a la cadera | evidencia | FALSE | — |

### Otros campos
- `variante_de`: `elevacion-brazos-tumbado` (Royal Berkshire, otro folleto). Fase `calentamiento`, recurso y duración: coherentes.
- **Ilustración:** de lado, con las rodillas dobladas. Es un dibujo de HealthMove sobre algo que la fuente no fija (R7.2).

### Incidencias
- **Piernas tumbado de lado.** Ni la fuente ni HealthMove dicen cómo van las piernas, y la ilustración las dibuja dobladas. Por R2.2, un `false` necesita evidencia D, y no la hay. Había dos salidas:
  - (a) marcar `flexion_profunda_rodilla` y `flexion_amplia_cadera` como conservadoras;
  - (b) añadir «con las piernas estiradas» como adaptación, que la fuente no describe.
  - Se aplica la (a), el criterio conservador del desarrollador (P9, P10 y P14). Así el ejercicio deja de ofrecerse con los perfiles `rodilla` y `cadera`.

### Propuesta de cambios
- `exigencias.flexion_profunda_rodilla` y `exigencias.flexion_amplia_cadera`: `false` → `true`, con la nota «[conservadora] flexion_profunda_rodilla y flexion_amplia_cadera: tumbado de lado, ni la fuente ni la instrucción dicen cómo van las piernas. Se cerraría con: una fuente que fije la postura de las piernas.»
- `dosis`: «De 5 a 10 veces» pasa a «De 2 a 10 veces», con la pauta de Forth Valley.
- `fuente.especifica_de` y `consultado`, como en el ejercicio 59.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-21 (P20).

## 64. respiracion-abdominal-sentado

### Identificación
- ID: `respiracion-abdominal-sentado`
- Nombre: Respiración abdominal
- Fuente: NHS (Reino Unido), «Breathing exercises for stress»
- Población destinataria de la fuente (si la declara): no la declara
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con dos adaptaciones documentadas

### Evidencia de la fuente
- Ubicación exacta: el texto completo de la página (sin apartados).
- Pasos originales relevantes, resumidos con palabras propias: de pie, sentado en una silla que sostenga la espalda o tumbado; sentado, con los brazos en los reposabrazos y los pies planos al ancho de la cadera; llevar el aire al vientre sin forzar; inspirar por la nariz y espirar por la boca, contando de 1 a 5 si ayuda; al menos 5 minutos.
- Coincidencias (C1): postura, respiración y conteo.
- Diferencias (C3) y adaptaciones documentadas (C2): tiempo más breve que el mínimo de la fuente; brazos sin reposabrazos (C2).
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: el tiempo de la rutina es menor que «at least 5 minutes». Ver Incidencias (R3.1, Q5).
- Limitaciones de la verificación: la página no tiene fotos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | — |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: siempre sentado | evidencia | FALSE | — |
| impacto | false | D: respiración | evidencia | FALSE | — |
| carga_externa | false | D: estructural | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: «calming» | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D: brazos apoyados | evidencia | FALSE | — |
| mano_detras | false | D: brazos apoyados | evidencia | FALSE | — |
| ambos_brazos | false | D: los brazos reposan (§7.1) | evidencia | FALSE | — |
| agarre | false | D: brazos en reposo | evidencia | FALSE | — |
| peso_en_manos | false | D: reposo, sin carga | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D: pies planos, sentado normal | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado con la espalda apoyada | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | — |
| inclinacion_tronco | false | D: «a chair that supports your back» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición, recurso y duración (120 s): coherentes con la adaptación.

### Incidencias
- **Duración menor que la de la fuente (R3.1, Q5):** «at least 5 minutes» no admite menos, así que la prueba operativa de R3.1 no se cumple al pie de la letra. Q5 sigue abierta y el protocolo dice que, entonces, cada adaptación se presenta con su justificación individual. Aquí: la rutina dura de 10 a 20 minutos y la fase de calma, un 20 %. El cambio va en `adaptaciones`, que el usuario lee, y no afecta a ninguna etiqueta.

### Propuesta de cambios
- `consultado` = 2026-10-21.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambio aplicado el 2026-10-21 (P20). La adaptación de la duración se acepta con su justificación individual (Q5).

## 65. respiracion-tranquila-tumbado

### Identificación
- ID: `respiracion-tranquila-tumbado`
- Nombre: Respiración tranquila contando hasta 5
- Fuente: NHS (Reino Unido), «Breathing exercises for stress»
- Población destinataria de la fuente (si la declara): no la declara
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel; nota retirada por falta de respaldo

### Evidencia de la fuente
- Ubicación exacta: el texto completo de la página.
- Pasos originales relevantes, resumidos con palabras propias: tumbado, aflojar la ropa; brazos algo separados con las palmas hacia arriba; piernas estiradas o con las rodillas dobladas y los pies planos; respirar hacia el vientre sin forzar, por la nariz y por la boca, contando hasta 5; al menos 5 minutos.
- Coincidencias (C1): postura de los brazos, respiración y conteo.
- Diferencias (C3) y adaptaciones documentadas (C2): unos 3 minutos (C2; ver Incidencias del ejercicio 64).
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: **la nota del catálogo decía que la fuente aconseja consultar a un profesional si el ejercicio angustia. La página actual (revisada el 12-06-2026) no lo dice**; no aparecen «GP», «professional» ni «distress». Se retira la nota, porque una nota no puede atribuir a la fuente lo que no dice. No cambia ninguna etiqueta.
- Limitaciones de la verificación: no se puede saber si una versión anterior de la página lo decía.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | — |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: siempre tumbado | evidencia | FALSE | — |
| impacto | false | D: respiración | evidencia | FALSE | — |
| carga_externa | false | D: estructural | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: «calming» | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D: brazos a los lados | evidencia | FALSE | — |
| mano_detras | false | D: a los lados | evidencia | FALSE | — |
| ambos_brazos | false | D: los brazos reposan | evidencia | FALSE | — |
| agarre | false | D: palmas hacia arriba | evidencia | FALSE | — |
| peso_en_manos | false | D: reposo | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D: «legs straight or bend your knees so your feet are flat»; con los pies planos en la cama, la rodilla no pasa de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado; con los pies planos, el muslo queda más lejos del tronco que sentado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | — |
| inclinacion_tronco | false | D: tumbado | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- `variante_de`: `respiracion-abdominal-tumbado`. Fase `calma`, recurso `cama` y duración: coherentes.

### Incidencias
- La nota sin respaldo se retira.

### Propuesta de cambios
- `notas_etiquetado`: vacía. `consultado` = 2026-10-21.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-21 (P20).

## Revisión de DeepSeek

**Consulta C7** (`deepseek/ejecuciones/20261021T010735Z-fase-06-lote09/`, DS-168 a DS-176; SHA-256 `b2db2467…`). Ningún hallazgo cambia etiquetas ni resultados.

**Aceptados, como precisiones:**
- **DS-168:** el `false` anterior de rodilla y cadera en `flexion-hombro-lado-tumbado` no cumplía R2.2. El paso a `true` conservador es una corrección, no una opción.
- **DS-172:** «rehabilitación tras un ingreso hospitalario» es la forma breve de «During and after a stay in hospital… your rehabilitation», en la línea de los valores existentes («reposo en cama tras neurocirugía»). Abarca el durante y el después.
- **DS-173:** la justificación de la duración del ejercicio 65 es la misma que la del 64 (Q5, justificación individual): fase de calma del 20 % en rutinas de 10 a 20 minutos, cambio documentado para el usuario.
- **DS-174:** en el lote 9, todas las propuestas están ya aplicadas (P20).

**No aceptados:**
- **DS-169:** las piernas dobladas del dibujo no contradicen una fuente que no dice nada (R7.2), y son coherentes con el `true` conservador. No es un caso de R7.7.
- **DS-170:** la adaptación nombra la fuente y la pauta («NHS Forth Valley… empezar con 2 o 3 y subir hasta 10»). El informe cita el documento, su hash y la frase literal. El fundamento es verificable (DG-3, condición 2).
- **DS-171:** «Only complete the exercises that your physiotherapist has taught you» es un consejo preventivo (clase 2), no una indicación de interrupción (clase 3). Ninguna de las dos cambia etiquetas (DG-6).
- **DS-175 y DS-176:** las bases de las variantes no estaban en los bloques enviados. Es una limitación de la consulta, no un error.

## Resumen del lote

- **7 ejercicios auditados por primera vez con el protocolo 1.0.**
- **Los 7 quedan LISTO PARA APROBACIÓN DOCUMENTAL.** En `flexion-hombro-lado-tumbado`, dos exigencias pasan a `true` conservador porque no consta la postura de las piernas.
- **Royal Devon (3 ejercicios):** fuente bloqueada (403), sin auditar.
- **Cambios:**
  - `especifica_de` en los 5 de Royal Berkshire;
  - dosis con fundamento verificable en los 2 tumbados;
  - nota sin respaldo retirada en `respiracion-tranquila-tumbado`;
  - `consultado` en los 7.
  - Etiquetas: solo las dos conservadoras de `flexion-hombro-lado-tumbado`.
- **Corrección de un error de aplicación:** al preparar este lote, un reemplazo global cambió por error la adaptación de 20 ejercicios de otras fuentes. Se revirtió antes de confirmar nada, y se comprobó contra `HEAD` que solo cambian los 7 de este lote.
