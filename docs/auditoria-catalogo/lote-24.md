# Lote 24 · Primera auditoría con el protocolo 1.0: Wrightington, Wigan and Leigh y East Sussex (11 ejercicios)

- Fecha: 2026-10-24
- Versión del protocolo: 1.0
- Catálogo: v0.3.0 (actualizado 2026-10-14), rama `desarrollo-v1`, commit `2c237c0`
- Identificador git del catálogo: no fiable, el catálogo tiene cambios sin confirmar (son los cambios de este lote, aplicados antes de cerrarlo).
- Huellas literales (tras aplicar los cambios): `remo-inclinado-botella` `4957eeb143851096`, `elevaciones-frontales-botella` `003243ba73e5c934`, `elevaciones-laterales-botella` `d02538452a316983`, `press-hombros-botella-pie` `7644716596cf5a14`, `banda-deslizar-brazos-pared` `ca7c0c5694153507`, `cruz-suelo` `4ff22385aff7fa43`, `extension-lumbar-antebrazos` `77cefbe26f83b9fb`, `abrir-rodillas-plantas-juntas` `8c75dd75ad5cd3c8`, `toalla-entre-rodillas-tumbado` `e1ea81b042873235`, `pierna-adelante-atras-lado` `618e43d5c16ba9f3`, `flexor-cadera-tumbado` `680d36dbb4817253`.
- **Cómo se hizo (P29):** evidencia de Claude (`evidencia/lote-24.md`); borrador de DeepSeek (consulta C25, en dos bloques); verificación de Claude. **Los apartados son el borrador de DeepSeek con las correcciones de Claude** listadas en «Revisión de DeepSeek». La columna «Etiqueta actual» conserva el valor de antes de aplicar.
- **Fuentes abiertas** (2026-10-24, `curl`, HTTP 200): tres folletos de Wrightington, Wigan and Leigh (hombro nivel 3, dolor lumbar nivel 2, cadera nivel 1) y la hoja PIRPAG de East Sussex; URL y hashes en la evidencia.
- **Poblaciones** (título de cada folleto): «hombro», «dolor lumbar» y «cadera»; East Sussex ya tenía «amputación por debajo de la rodilla».
- **Ilustraciones de HealthMove** (R7.6): coinciden; la de `elevaciones-laterales-botella` se corrige junto con el ejercicio (un solo brazo).

## 194. remo-inclinado-botella

### Identificación
- ID: `remo-inclinado-botella`
- Nombre: Remo con botella apoyado en la silla
- Fuente: Wrightington, Wigan and Leigh Teaching Hospitals NHS FT (MSK Physiotherapy), «Shoulder Exercises Level 3», «Bent over Rows», p. 6 (F1, apartado 194)
- Población destinataria de la fuente (si la declara): la evidencia dice «problemas de hombro (servicio de fisioterapia musculoesquelética, nivel 3)». `especifica_de` actual: vacío. Ver DS-443.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis (la fuente no la da en el texto extraído; el catálogo usa 10 repeticiones «del resto de la hoja»).

### Evidencia de la fuente
- Ubicación exacta: F1, «Bent over Rows», p. 6 (apartado 194).
- Pasos originales relevantes, resumidos con palabras propias: de pie, apoyándose con una mano en una mesa o una silla; dejar colgar el otro brazo relajado y, si se puede, sujetar un peso (una bolsa, una mancuerna o una botella con agua); doblar el codo llevándolo hacia atrás y juntar los omóplatos.
- Coincidencias (C1): de pie, una mano en la silla, el otro brazo con la botella, doblar el codo hacia atrás, juntar los omóplatos, cambio de brazo.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis (la fuente no la da en el texto extraído; el catálogo usa 10 repeticiones del resto de la hoja; ya documentado en `adaptaciones`). C3 posible: la fuente dice «si se puede» sujetar un peso; HealthMove lo exige siempre. Ver DS-445.
- Hechos, inferencias e incertidumbres: D (texto y foto), inclinado hacia delante, una mano en una silla, el otro brazo con un peso. N, la dosis.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo sin peso; HealthMove lo exige.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto y foto): una mano apoyada en la silla | evidencia | FALSE | §4: se sujeta |
| una_pierna | false | D (foto): los dos pies apoyados | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | true | D (texto): «sujetar un peso (una bolsa, una mancuerna o una botella con agua)» | evidencia | TRUE | §4: sostener peso |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y foto): el codo se dobla hacia atrás, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y foto): el codo va hacia atrás, la mano no va detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): una mano apoya y el otro brazo trabaja | conservadora | TRUE | Q1 (P9): una mano apoya mientras el otro brazo trabaja; nota `[conservadora]` ya presente |
| agarre | true | D (texto): la mano sujeta la botella | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: de pie; la mano apoyada no carga el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y foto): de pie, rodillas algo dobladas, sin que conste que pasen de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | true | D (texto y foto): «inclínate un poco hacia delante»; la foto muestra la espalda inclinada | evidencia | TRUE | §4: inclinar la espalda hacia delante más allá de una inclinación leve |
| rotacion_tronco | false | D (texto): sin giro de hombros respecto a la cadera | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `de_pie`, recursos `silla` y `peso_ligero`, dosis «10 veces con cada brazo»: la dosis no se puede verificar contra la fuente (DS-444).
- Ilustración: la evidencia dice «coincide». R7.6/R7.7: no puedo confirmar que no haya discrepancia con lo entregado.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta con esas palabras; no propongo rellenarlo (R8.1). Ver DS-443.
- `notas_etiquetado` actual: «agarre: por la botella; la otra mano solo se apoya (Q2). [conservadora] ambos_brazos: una mano apoya y el otro brazo trabaja (Q1). Se cerraría con: fuente sin apoyo.» La nota de `agarre` no sigue la forma de R2.4 (no lleva `[conservadora]` ni «Se cerraría con:»). Ver DS-446.

### Incidencias
- La nota de `agarre` no sigue la forma de R2.4 (DS-446).
- La dosis no se puede verificar contra la fuente (DS-444).
- La fuente dice «si se puede» sujetar un peso; HealthMove lo exige siempre (DS-445).

### Propuesta de cambios
- `notas_etiquetado`: reescribir la nota de `agarre` en la forma de R2.4 (DS-446).
- `adaptaciones`: añadir «La fuente propone el peso como opcional; aquí se usa siempre.» (C3 documentado; R3.1, Q5; ver DS-445).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 195. elevaciones-frontales-botella

### Identificación
- ID: `elevaciones-frontales-botella`
- Nombre: Subir una botella al frente
- Fuente: Wrightington, Wigan and Leigh Teaching Hospitals NHS FT (MSK Physiotherapy), «Shoulder Exercises Level 3», «Front Raises», p. 7 (F1, apartado 195)
- Población destinataria de la fuente (si la declara): la evidencia dice «problemas de hombro». `especifica_de` actual: vacío. Ver DS-443.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis (la fuente propone 3 series; HealthMove usa una). C3 posible: la fuente dice «lift alternate arms up» (alternando brazos) y HealthMove sube la botella con las dos manos a la vez. Ver DS-447.

### Evidencia de la fuente
- Ubicación exacta: F1, «Front Raises», p. 7 (apartado 195).
- Pasos originales relevantes, resumidos con palabras propias: de pie, con la cadera y las rodillas algo dobladas, sujetando el peso «in both hands» (por ejemplo, una bolsa con botellas); apretar el abdomen y la zona lumbar; «lift alternate arms up and bring back down both in a controlled manner» (la frase es confusa); 10 veces; 3 series.
- Coincidencias (C1): de pie, rodillas algo dobladas, peso con las dos manos, subir al frente, bajar con control.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis (la fuente propone 3 series; HealthMove usa una; ya documentado en `adaptaciones`). C3 posible: la fuente dice «alternate arms»; HealthMove sube la botella con las dos manos a la vez. Ver DS-447.
- Hechos, inferencias e incertidumbres: D (texto y foto), de pie, las dos manos sujetan la bolsa al frente, los brazos estirados a la altura de los hombros. I, si el movimiento es alternando brazos o con los dos a la vez (la frase es confusa).
- Limitaciones de la verificación: la evidencia no resuelve la contradicción entre «in both hands» y «alternate arms».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | true | D (texto y foto): de pie, sin apoyo, con las dos manos en la bolsa | evidencia | TRUE | §4: de pie, exige no sujetarse a nada; las dos manos están ocupadas |
| una_pierna | false | D (foto): los dos pies apoyados | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | true | D (texto): «sujetando el peso» | evidencia | TRUE | §4: sostener peso |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (foto): los brazos estirados a la altura de los hombros; la nota actual dice «no indica la altura; se marca por prudencia» | conservadora | TRUE | §4 y CN-1 (P25): el brazo llega «a» la altura del hombro sin que conste que no la pasa; `true` conservador con nota |
| mano_detras | false | D (texto y foto): los brazos suben al frente, no detrás | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y foto): las dos manos sujetan la bolsa | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto y foto): las dos manos sujetan la bolsa | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): rodillas algo dobladas, sin que conste que pasen de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `de_pie`, recurso `peso_ligero`, dosis «10 veces»: coherente con la adaptación documentada (una serie).
- Ilustración: la evidencia dice «de pie, la botella sube al frente con las dos manos». Coincide con el texto de HealthMove. R7.6/R7.7: no puedo confirmar que no haya discrepancia con la fuente (la fuente muestra las dos manos en la bolsa, no una botella).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. Ver DS-443.
- `notas_etiquetado` actual: «La fuente no indica la altura; se marca brazo sobre el hombro por prudencia.» No sigue la forma de R2.4 (no lleva `[conservadora]` ni «Se cerraría con:»). Ver DS-446.

### Incidencias
- La nota de `brazo_sobre_hombro` no sigue la forma de R2.4 (DS-446).
- La fuente dice «alternate arms»; HealthMove sube la botella con las dos manos a la vez (DS-447).

### Propuesta de cambios
- `notas_etiquetado`: reescribir la nota de `brazo_sobre_hombro` en la forma de R2.4 (DS-446).
- `adaptaciones`: añadir «La fuente describe el movimiento alternando los brazos; aquí se sube la botella con las dos manos a la vez.» (C3 documentado; R3.1, Q5; ver DS-447).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 196. elevaciones-laterales-botella

### Identificación
- ID: `elevaciones-laterales-botella`
- Nombre: Subir las botellas por los lados
- Fuente: Wrightington, Wigan and Leigh Teaching Hospitals NHS FT (MSK Physiotherapy), «Shoulder Exercises Level 3», «Lateral Raises», p. 9 (F1, apartado 196)
- Población destinataria de la fuente (si la declara): la evidencia dice «problemas de hombro». `especifica_de` actual: vacío. Ver DS-443.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en el número de brazos y de pesos (la fuente lo hace con **un** brazo y **un** peso; HealthMove con **dos** botellas y **dos** brazos a la vez). Ver DS-448.

### Evidencia de la fuente
- Ubicación exacta: F1, «Lateral Raises», p. 9 (apartado 196).
- Pasos originales relevantes, resumidos con palabras propias: de pie, alto, con los brazos a los lados, sujetando **un peso**; «Lift your arm to the side away from your body, keeping your elbow straight»; controlar la vuelta; 10 veces.
- Coincidencias (C1): de pie, subir el brazo de lado con el codo estirado, bajar con control, 10 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente lo hace con un brazo y un peso; HealthMove con dos botellas y los dos brazos a la vez. La evidencia lo dice expresamente: «La fuente lo hace con un brazo». Ver DS-448.
- Hechos, inferencias e incertidumbres: D (texto y foto), de pie, un solo brazo sube de lado con la bolsa, la mano por encima de la altura del hombro; el otro brazo cuelga sin nada.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con los dos brazos a la vez.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | true | D (texto y foto): un solo brazo trabaja y la otra mano queda libre | evidencia | FALSE | No exige estar sin apoyo (como en 130, lote 17) |
| una_pierna | false | D (foto): los dos pies apoyados | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | true | D (texto): «sujetando un peso» | evidencia | TRUE | §4: sostener peso |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (foto): la mano sube por encima de la altura del hombro | evidencia | TRUE | §4: codo o mano por encima del hombro |
| mano_detras | false | D (texto y foto): el brazo sube de lado, no detrás | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y foto): la fuente lo hace con un brazo | evidencia | FALSE | Se corrige el ejercicio hacia la fuente: un brazo y una botella (DS-448) |
| agarre | true | D (texto y foto): la mano sujeta la bolsa | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): de pie, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `de_pie`, recurso `peso_ligero`, dosis «10 veces»: coherente con la fuente.
- Ilustración: la evidencia dice «de frente, los dos brazos suben». La fuente muestra un solo brazo. R7.6: la ilustración de HealthMove no introduce un movimiento distinto, pero muestra dos brazos donde la fuente muestra uno. Ver DS-448.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. Ver DS-443.
- `notas_etiquetado` actual: «[conservadora] brazo_sobre_hombro: el brazo llega a la altura del hombro, o no se dice hasta dónde sube, y no consta que no la pase (CN-1, P25). Se cerraría con: evidencia de la fuente de que el brazo no pasa de la altura del hombro.» La nota es incorrecta: la foto muestra la mano **por encima** de la altura del hombro (D), no «a la altura». Ver DS-449.

### Incidencias
- La fuente lo hace con un brazo y un peso; HealthMove con dos botellas y los dos brazos a la vez (DS-448).
- La nota de `brazo_sobre_hombro` no refleja la evidencia D de la foto (DS-449).

### Propuesta de cambios
- Instrucciones y dosis corregidas hacia la fuente: una botella en una mano, el brazo sube por el lado hasta la altura del hombro, después el otro; «10 veces con cada brazo» (DS-448).
- `exigencias.ambos_brazos` y `exigencias.equilibrio_sin_apoyo`: `true` → `false` (D). Impacto (modo auditoría): entra en `un_brazo` y en los perfiles que piden apoyo de pie.
- Ilustración corregida (`depie.mjs`): un solo brazo con la botella.
- `notas_etiquetado`: corregir la nota de `brazo_sobre_hombro` para que refleje la evidencia D de la foto (DS-449).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 197. press-hombros-botella-pie

### Identificación
- ID: `press-hombros-botella-pie`
- Nombre: Empujar las botellas hacia arriba de pie
- Fuente: Wrightington, Wigan and Leigh Teaching Hospitals NHS FT (MSK Physiotherapy), «Shoulder Exercises Level 3», «Shoulder Press», p. 12 (F1, apartado 197)
- Población destinataria de la fuente (si la declara): la evidencia dice «problemas de hombro». `especifica_de` actual: vacío. Ver DS-443.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis (la fuente no la da en el texto extraído; el catálogo usa 10 repeticiones del resto de la hoja). C3 posible: la foto de la fuente está recortada y no se ve si es sentado o de pie; HealthMove lo hace de pie. Ver DS-450.
- Variante de: `press-encima-cabeza-sentado` (contexto, no auditado).

### Evidencia de la fuente
- Ubicación exacta: F1, «Shoulder Press», p. 12 (apartado 197).
- Pasos originales relevantes, resumidos con palabras propias: de pie, alto; los pesos a la altura de los hombros con los codos hacia los lados; empujar hasta estirar los brazos; volver con control; sin encoger los hombros.
- Coincidencias (C1): de pie, botellas a la altura de los hombros, codos hacia los lados, empujar hasta estirar los brazos, bajar con control, sin encoger los hombros.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis (la fuente no la da en el texto extraído; el catálogo usa 10 repeticiones del resto de la hoja; ya documentado en `adaptaciones`). C3 posible: la foto está recortada y no se ve la posición; el texto dice «de pie, alto». Ver DS-450.
- Hechos, inferencias e incertidumbres: D (texto), de pie, alto, los pesos a la altura de los hombros, empujar hasta estirar los brazos. I (foto), sentado o de pie con dos mancuernas a la altura de los hombros (la foto está recortada).
- Limitaciones de la verificación: la evidencia no resuelve si la foto es sentado o de pie; el texto dice «de pie».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | true | D (texto): «de pie, alto», sin apoyo | evidencia | TRUE | §4: de pie, exige no sujetarse a nada |
| una_pierna | false | D (texto): de pie, sin que conste que el peso caiga sobre un solo pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | true | D (texto): «los pesos» | evidencia | TRUE | §4: sostener peso |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto): «empujar hasta estirar los brazos»; los brazos suben por encima de la cabeza | evidencia | TRUE | §4: codo o mano por encima del hombro |
| mano_detras | false | D (texto): los brazos suben al frente, no detrás | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): las dos manos sujetan los pesos y los dos brazos suben | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto): las dos manos sujetan los pesos | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): de pie, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `de_pie`, recurso `peso_ligero`, dosis «10 veces»: la dosis no se puede verificar contra la fuente (DS-444).
- Ilustración: la evidencia dice «de pie, los dos brazos suben por encima de la cabeza». Coincide con el texto. R7.6/R7.7: no puedo confirmar que no haya discrepancia con la fuente (la foto está recortada).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. Ver DS-443.
- `variante_de`: `press-encima-cabeza-sentado` (contexto; no auditado).
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- La dosis no se puede verificar contra la fuente (DS-444).
- La foto de la fuente está recortada y no se ve la posición; el texto dice «de pie» (DS-450).

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aclarada la dosis (DS-444) y la posición de la foto (DS-450). Si el desarrollador acepta la dosis actual como adaptación documentada y la posición «de pie» como la del texto, queda listo.


## 198. banda-deslizar-brazos-pared

### Identificación
- ID: `banda-deslizar-brazos-pared`
- Nombre: Deslizar los brazos por la pared con banda
- Fuente: Wrightington, Wigan and Leigh Teaching Hospitals NHS FT (MSK Physiotherapy), «Shoulder Exercises Level 3», «Banded Wall Slide», p. 10 (F1, apartado 198)
- Población destinataria de la fuente (si la declara): la evidencia dice «problemas de hombro». `especifica_de` actual: vacío. Ver DS-443.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis (la fuente la deja en blanco o no se extrae; el catálogo usa 5 a 10). C3 posible: `peso_en_manos` está en `false` y la evidencia dice que los antebrazos soportan parte del peso (I). Ver DS-451.

### Evidencia de la fuente
- Ubicación exacta: F1, «Banded Wall Slide», p. 10 (apartado 198).
- Pasos originales relevantes, resumidos con palabras propias: de cara a la pared; las manos a la altura de los hombros, los antebrazos contra la pared con las palmas enfrentadas; una banda alrededor de las dos manos; activar el tronco y los glúteos; «Lean towards the wall while sliding your arms upwards to a 'Y' position»; volver; mantener la banda tensa.
- Coincidencias (C1): de cara a la pared, antebrazos apoyados a la altura de los hombros, banda alrededor de las manos, deslizar hacia arriba en «Y», volver, mantener la banda tensa.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis (la fuente la deja en blanco o no se extrae; el catálogo usa 5 a 10; ya documentado en `adaptaciones`). C3 posible: `peso_en_manos` en `false` y la evidencia dice que los antebrazos soportan parte del peso (I). Ver DS-451.
- Hechos, inferencias e incertidumbres: D (texto y foto), de espaldas, los antebrazos en la pared y la banda roja entre las manos, en «Y». I, al inclinarse hacia la pared, los antebrazos soportan parte del peso.
- Limitaciones de la verificación: la evidencia no dice cuánto peso soportan los antebrazos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto): de cara a la pared, con los antebrazos apoyados | evidencia | FALSE | §4: se apoya en la pared |
| una_pierna | false | D (texto): de pie, sin que conste que el peso caiga sobre un solo pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | true | D (texto): «una banda alrededor de las dos manos» | evidencia | TRUE | §4: incluye banda |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y foto): los brazos suben en «Y», por encima de la altura del hombro | evidencia | TRUE | §4: codo o mano por encima del hombro |
| mano_detras | false | D (texto y foto): los brazos suben al frente, no detrás | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y foto): las dos manos sujetan la banda y los dos brazos suben | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto y foto): las manos sujetan la banda; la etiqueta actual es `false` | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte; la etiqueta actual contradice la evidencia (DS-452) |
| peso_en_manos | false | I (texto): «al inclinarse hacia la pared, los antebrazos soportan parte del peso» | conservadora | TRUE | R2.1 y R7.3: el contacto con la pared no demuestra carga, pero la evidencia lo sugiere; `true` conservador con nota (DS-451) |
| flexion_profunda_rodilla | false | D (texto): de pie, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): «lean towards the wall»; la inclinación es leve | evidencia | FALSE | §4: inclinación leve |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `de_pie`, recursos `pared` y `banda`, dosis «De 5 a 10 veces»: la dosis no se puede verificar contra la fuente (DS-444).
- Ilustración: la evidencia dice «de cara a la pared, los brazos suben en Y». Coincide con el texto. R7.6/R7.7: no puedo confirmar que no haya discrepancia con la fuente (la foto es de espaldas).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. Ver DS-443.
- `notas_etiquetado` actual: vacío. Faltan las notas `[conservadora]` de `peso_en_manos` (DS-451) y la de `agarre` (DS-452).

### Incidencias
- `agarre: false` contradice la evidencia (las manos sujetan la banda) (DS-452).
- `peso_en_manos: false` con evidencia I de que los antebrazos soportan parte del peso (DS-451).
- La dosis no se puede verificar contra la fuente (DS-444).

### Propuesta de cambios
- `exigencias.agarre`: `false` → `true` (D: las manos sujetan la banda; ver DS-452).
- `exigencias.peso_en_manos`: `false` → `true` conservador (R2.1, R7.3; ver DS-451).
- `notas_etiquetado`: añadir las notas `[conservadora]` de `agarre` y `peso_en_manos` en la forma de R2.4 (DS-451, DS-452).
- `fuente.consultado`: 2026-10-24.
- `fuente.especifica_de`: «hombro» (título del folleto; DS-443).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 199. cruz-suelo

### Identificación
- ID: `cruz-suelo`
- Nombre: La cruz
- Fuente: Wrightington, Wigan and Leigh Teaching Hospitals NHS FT, «Low Back Pain Exercises Level 2», «Knee Rolls (Crucifix Stretch)», p. 7 (F2, apartado 199)
- Población destinataria de la fuente (si la declara): la evidencia dice «dolor lumbar». `especifica_de` actual: «dolor lumbar». Coincide con R8.1 si la fuente lo declara con esas palabras (ver DS-443).
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis (la fuente da 10 s y 3 veces; HealthMove usa lo mismo). C3 posible: `ambos_brazos: true` conservador y la foto muestra los brazos en cruz, en reposo. Ver DS-453.

### Evidencia de la fuente
- Ubicación exacta: F2, «Knee Rolls (Crucifix Stretch)», p. 7 (apartado 199).
- Pasos originales relevantes, resumidos con palabras propias: boca arriba, con los brazos estirados («arms stretched out») y los hombros en contacto con el suelo; una pierna completamente recta; llevar la otra pierna hacia el hombro contrario y volver al centro; mantener 10 s; 3 veces a cada lado.
- Coincidencias (C1): boca arriba, brazos estirados, hombros en el suelo, una pierna recta, llevar la otra al lado contrario, volver al centro, 10 s, 3 veces por lado.
- Diferencias (C3) y adaptaciones documentadas (C2): C3 posible: `ambos_brazos: true` conservador y la foto muestra los brazos en cruz, en reposo. Ver DS-453.
- Hechos, inferencias e incertidumbres: D (texto y foto), tumbado en una colchoneta, los brazos abiertos en cruz, una pierna cruzada por encima de la otra hacia el lado contrario. D (foto), los brazos en cruz, sobre el suelo, en reposo.
- Limitaciones de la verificación: la evidencia no dice si los brazos solo reposan o si ayudan a estabilizar.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y foto): los brazos en cruz, separados del tronco | conservadora | TRUE | CN-1 (P25): tumbado, el brazo se separa del tronco; `true` conservador con nota |
| mano_detras | false | D (texto y foto): los brazos en cruz, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | true | D (foto): los brazos en cruz, en reposo | conservadora | TRUE | Q1 (P9): la nota actual dice «no consta si los brazos solo reposan»; `true` conservador con nota (DS-453) |
| agarre | false | D (texto y foto): las manos abiertas, sin prensión ni objeto | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y foto): una pierna recta; la otra se cruza, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | true | D (texto y foto): la pierna se cruza por encima de la otra hacia el lado contrario; el muslo se acerca al tronco | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | true | D (texto y foto): la pierna cruza hacia el lado contrario; los hombros giran respecto a la cadera | evidencia | TRUE | §4: girar los hombros respecto a la cadera |

### Otros campos
- Fase `calma`, posición `suelo`, recursos: vacío, coherente (no necesita silla ni pared).
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «dolor lumbar». Coincide con R8.1 si la fuente lo declara con esas palabras (ver DS-443).
- `notas_etiquetado` actual: «[conservadora] ambos_brazos: no consta si los brazos solo reposan (Q1). Se cerraría con: la fuente o su imagen. [conservadora] brazo_sobre_hombro: tumbado, la altura del hombro no se puede comparar y el brazo se separa del tronco (estirado, en cruz o por encima de la cabeza) (CN-1, P25). Se cerraría con: evidencia de la fuente del ángulo del brazo.» La nota de `ambos_brazos` dice «no consta si los brazos solo reposan», pero la foto muestra los brazos en cruz, en reposo (D). Ver DS-453.

### Incidencias
- La nota de `ambos_brazos` no refleja la evidencia D de la foto (los brazos en cruz, en reposo) (DS-453).

### Propuesta de cambios
- `notas_etiquetado`: corregir la nota de `ambos_brazos` para que refleje la evidencia D de la foto (DS-453).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicado el cambio propuesto (DS-453). La población (DS-443) queda como cuestión abierta.


## 200. extension-lumbar-antebrazos

### Identificación
- ID: `extension-lumbar-antebrazos`
- Nombre: Apoyarse en los antebrazos boca abajo
- Fuente: Wrightington, Wigan and Leigh Teaching Hospitals NHS FT, «Low Back Pain Exercises Level 2», «Lumbar Extensions (on Forearms)», p. 6 (F2, apartado 200)
- Población destinataria de la fuente (si la declara): la evidencia dice «dolor lumbar». `especifica_de` actual: «dolor lumbar». Coincide con R8.1 si la fuente lo declara con esas palabras (ver DS-443).
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis (la fuente no indica repeticiones; HealthMove usa 2 o 3). C3 posible: `peso_en_manos: true` y la evidencia dice que los antebrazos soportan parte del peso (D). Ver DS-454.

### Evidencia de la fuente
- Ubicación exacta: F2, «Lumbar Extensions (on Forearms)», p. 6 (apartado 200).
- Pasos originales relevantes, resumidos con palabras propias: boca abajo, apoyado en los codos y los antebrazos; presionar la pelvis y el abdomen contra el suelo para arquear la zona lumbar; subir la parte alta de la espalda, con los antebrazos en el suelo; subir el pecho todo lo posible; unos 30 s. Variante: respirar y dejar que la pelvis baje.
- Coincidencias (C1): boca abajo, apoyado en los codos y los antebrazos, pelvis y abdomen pegados al suelo, elevar el pecho, arquear la zona lumbar, unos 30 s.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis (la fuente no indica repeticiones; HealthMove usa 2 o 3; ya documentado en `adaptaciones`). C3 posible: `peso_en_manos: true` y la evidencia dice que los antebrazos soportan parte del peso (D). Ver DS-454.
- Hechos, inferencias e incertidumbres: D (texto y foto), boca abajo sobre los antebrazos, el pecho elevado, la espalda arqueada. D (texto), los antebrazos en el suelo.
- Limitaciones de la verificación: la evidencia no dice cuánto peso soportan los antebrazos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y foto): los brazos separados del tronco, apoyados en los antebrazos | conservadora | TRUE | CN-1 (P25): tumbado, el brazo se separa del tronco; `true` conservador con nota |
| mano_detras | false | D (texto y foto): los antebrazos al frente, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y foto): los dos antebrazos apoyados y los dos brazos trabajan | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto y foto): los antebrazos apoyados, sin prensión ni objeto | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | true | D (texto): «los antebrazos en el suelo»; soportan parte del peso corporal | evidencia | TRUE | §4: manos o muñecas soportan parte del peso corporal |
| flexion_profunda_rodilla | false | D (texto y foto): tumbado boca abajo, las piernas estiradas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | true | D (texto y foto): «arquear la zona lumbar»; la espalda se arquea hacia atrás | evidencia | TRUE | §4: arquear la espalda hacia atrás más allá de una inclinación leve |
| rotacion_tronco | false | D (texto): sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `suelo`, recursos: vacío, coherente (no necesita silla ni pared).
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «dolor lumbar». Coincide con R8.1 si la fuente lo declara con esas palabras (ver DS-443).
- `notas_etiquetado` actual: «Los antebrazos soportan parte del peso: se marca peso en manos por prudencia. [conservadora] brazo_sobre_hombro: tumbado, la altura del hombro no se puede comparar y el brazo se separa del tronco (estirado, en cruz o por encima de la cabeza) (CN-1, P25). Se cerraría con: evidencia de la fuente del ángulo del brazo.» La nota de `peso_en_manos` no sigue la forma de R2.4 (no lleva `[conservadora]` ni «Se cerraría con:»). Ver DS-446.

### Incidencias
- La nota de `peso_en_manos` no sigue la forma de R2.4 (DS-446).

### Propuesta de cambios
- `notas_etiquetado`: reescribir la nota de `peso_en_manos` en la forma de R2.4 (DS-446).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicado el cambio propuesto (DS-446). La población (DS-443) queda como cuestión abierta.


## 201. abrir-rodillas-plantas-juntas

### Identificación
- ID: `abrir-rodillas-plantas-juntas`
- Nombre: Abrir las rodillas con las plantas juntas
- Fuente: Wrightington, Wigan and Leigh Teaching Hospitals NHS FT, «Hip Exercises Level 1», «Hip Fallouts», p. 3 (F3, apartado 201)
- Población destinataria de la fuente (si la declara): la evidencia dice «cadera». `especifica_de` actual: «cadera». Coincide con R8.1 si la fuente lo declara con esas palabras (ver DS-443).
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis (la fuente propone 3 series; HealthMove usa una). C3 posible: `flexion_profunda_rodilla: false` y la evidencia dice que las rodillas están dobladas y las plantas juntas. Ver DS-455.

### Evidencia de la fuente
- Ubicación exacta: F3, «Hip Fallouts», p. 3 (apartado 201).
- Pasos originales relevantes, resumidos con palabras propias: tumbado con las rodillas dobladas y los pies en el suelo o la cama al ancho de la cadera; girar las plantas de los pies una hacia la otra y dejar caer las rodillas hacia fuera; notar el estiramiento en la ingle; la espalda plana; unos segundos; 10 veces; 3 series.
- Coincidencias (C1): tumbado, rodillas dobladas, plantas juntas, dejar caer las rodillas hacia fuera, estiramiento en la ingle, espalda plana, unos segundos, 10 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis (la fuente propone 3 series; HealthMove usa una; ya documentado en `adaptaciones`). C3 posible: `flexion_profunda_rodilla: false` y la evidencia dice que las rodillas están dobladas y las plantas juntas. Ver DS-455.
- Hechos, inferencias e incertidumbres: D (texto y foto), tumbada en una colchoneta, las plantas juntas y las rodillas abiertas. D (texto), las rodillas dobladas.
- Limitaciones de la verificación: la evidencia no da el ángulo exacto de la rodilla.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y foto): los brazos a los lados, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y foto): los brazos a los lados, no detrás | evidencia | FALSE | — |
| ambos_brazos | false | D (texto y foto): los brazos a los lados, en reposo | evidencia | FALSE | Q1 (P9): las manos en reposo no cuentan |
| agarre | false | D (texto y foto): las manos abiertas, sin prensión ni objeto | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y foto): las rodillas dobladas y las plantas juntas; el ángulo no se fija con precisión | conservadora | TRUE | R7.8: el ángulo no se fija con precisión; `true` conservador con nota (DS-455) |
| flexion_amplia_cadera | false | D (texto y foto): las rodillas se abren hacia fuera; el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D (texto): sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `tumbado`, recurso `cama`, dosis «Mantén unos segundos. 10 veces»: coherente con la adaptación documentada (una serie).
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «cadera». Coincide con R8.1 si la fuente lo declara con esas palabras (ver DS-443).
- `notas_etiquetado` actual: vacío. Falta la nota `[conservadora]` de `flexion_profunda_rodilla` (DS-455).

### Incidencias
- `flexion_profunda_rodilla: false` con evidencia de rodillas dobladas y plantas juntas; el ángulo no se fija con precisión (DS-455).

### Propuesta de cambios
- `exigencias.flexion_profunda_rodilla`: `false` → `true` conservador (R2.1, R7.8; ver DS-455).
- `notas_etiquetado`: añadir la nota `[conservadora]` de `flexion_profunda_rodilla` en la forma de R2.4 (DS-455).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicado el cambio propuesto (DS-455). La población (DS-443) queda como cuestión abierta.


## 202. toalla-entre-rodillas-tumbado

### Identificación
- ID: `toalla-entre-rodillas-tumbado`
- Nombre: Apretar una toalla entre las rodillas en la cama
- Fuente: East Sussex Healthcare NHS Trust (PIRPAG), hoja de ejercicios para amputación por debajo de la rodilla (0103), «4. Hip Adduction With Resistance», p. 3 (F4, apartado 202)
- Población destinataria de la fuente (si la declara): la evidencia dice «amputación por debajo de la rodilla». `especifica_de` actual: «amputación por debajo de la rodilla». Coincide con R8.1.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la posición (la fuente lo hace sentado; HealthMove tumbado; ya documentado en `adaptaciones`) y en la dosis (la fuente deja las repeticiones en blanco; HealthMove usa 5 a 10; ya documentado). C3 posible: `flexion_profunda_rodilla: false` y la evidencia dice que las piernas están estiradas. Ver DS-456.

### Evidencia de la fuente
- Ubicación exacta: F4, «4. Hip Adduction With Resistance», p. 3 (apartado 202).
- Pasos originales relevantes, resumidos con palabras propias: **sentado** con las dos piernas estiradas al frente; una almohada o una toalla enrollada entre las rodillas; apretar; 5 s; «Repeat ___ times». También en silla de ruedas o al borde de la cama.
- Coincidencias (C1): las piernas estiradas, la toalla entre las rodillas, apretar, 5 s.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la posición (la fuente lo hace sentado; HealthMove tumbado; ya documentado en `adaptaciones`) y la dosis (la fuente deja las repeticiones en blanco; HealthMove usa 5 a 10; ya documentado). C3 posible: `flexion_profunda_rodilla: false` y la evidencia dice que las piernas están estiradas. Ver DS-456.
- Hechos, inferencias e incertidumbres: D (texto y foto), sentado en una camilla con las piernas estiradas y la toalla entre las rodillas. D (texto), las piernas estiradas.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo tumbado; HealthMove lo hace tumbado.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda; la toalla no es resistencia añadida | evidencia | FALSE | §4: la toalla no es peso ni banda |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y foto): los brazos a los lados, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y foto): los brazos a los lados, no detrás | evidencia | FALSE | — |
| ambos_brazos | false | D (texto y foto): los brazos a los lados, en reposo | evidencia | FALSE | Q1 (P9): las manos en reposo no cuentan |
| agarre | false | D (texto y foto): las manos abiertas, sin prensión ni objeto | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y foto): las piernas estiradas | evidencia | FALSE | §4: la rodilla no pasa de 90° |
| flexion_amplia_cadera | false | D (texto y foto): las piernas estiradas; el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D (texto): sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `tumbado`, recursos `cama` y `toalla`, dosis «Mantén 5 segundos. De 5 a 10 veces»: coherente con las adaptaciones documentadas.
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «amputación por debajo de la rodilla». Coincide con R8.1.
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. La posición tumbada y la dosis ya están documentadas como adaptaciones.


## 203. pierna-adelante-atras-lado

### Identificación
- ID: `pierna-adelante-atras-lado`
- Nombre: Llevar la pierna adelante y atrás, de lado
- Fuente: East Sussex Healthcare NHS Trust (PIRPAG), hoja de ejercicios para amputación por debajo de la rodilla (0103), «9. Hip Flexion and Extension in Side Lying», p. 5 (F4, apartado 203)
- Población destinataria de la fuente (si la declara): la evidencia dice «amputación por debajo de la rodilla». `especifica_de` actual: «amputación por debajo de la rodilla». Coincide con R8.1.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis (la fuente deja las repeticiones en blanco; HealthMove usa 5 a 10; ya documentado). C3 posible: `flexion_profunda_rodilla: true` y la evidencia dice que la rodilla de arriba se dobla del todo hacia el pecho. Ver DS-457.

### Evidencia de la fuente
- Ubicación exacta: F4, «9. Hip Flexion and Extension in Side Lying», p. 5 (apartado 203).
- Pasos originales relevantes, resumidos con palabras propias: tumbado de lado; doblar la pierna de abajo; levantar un poco la de arriba; doblar la rodilla del todo hacia el pecho; estirar la rodilla y llevar la pierna hacia atrás; «Repeat ___ times»; no dejar que la cadera ruede.
- Coincidencias (C1): tumbado de lado, la pierna de abajo doblada, levantar un poco la de arriba, doblar la rodilla hacia el pecho, estirar la rodilla y llevar la pierna hacia atrás, sin que la cadera ruede, cambio de lado.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis (la fuente deja las repeticiones en blanco; HealthMove usa 5 a 10; ya documentado). C3 posible: `flexion_profunda_rodilla: true` y la evidencia dice que la rodilla de arriba se dobla del todo hacia el pecho. Ver DS-457.
- Hechos, inferencias e incertidumbres: D (texto y fotos), de lado, la rodilla de arriba muy doblada hacia el pecho; después la pierna estirada hacia atrás. D (texto), la rodilla se dobla del todo.
- Limitaciones de la verificación: la evidencia no da el ángulo exacto de la rodilla.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y fotos): los brazos a los lados, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y fotos): los brazos a los lados, no detrás | evidencia | FALSE | — |
| ambos_brazos | false | D (texto y fotos): los brazos a los lados, en reposo | evidencia | FALSE | Q1 (P9): las manos en reposo no cuentan |
| agarre | false | D (texto y fotos): las manos abiertas, sin prensión ni objeto | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | true | D (texto y fotos): «doblar la rodilla del todo hacia el pecho»; la rodilla de arriba muy doblada | evidencia | TRUE | §4: rodilla más de 90° |
| flexion_amplia_cadera | true | D (texto y fotos): la rodilla se lleva hacia el pecho; el muslo se acerca al tronco | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D (texto): «no dejar que la cadera ruede»; sin giro de hombros respecto a la cadera | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `tumbado`, recurso `cama`, dosis «De 5 a 10 veces con cada pierna»: coherente con la adaptación documentada.
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «amputación por debajo de la rodilla». Coincide con R8.1.
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. La dosis ya está documentada como adaptación.


## 204. flexor-cadera-tumbado

### Identificación
- ID: `flexor-cadera-tumbado`
- Nombre: Estirar la cadera con una rodilla al pecho
- Fuente: East Sussex Healthcare NHS Trust (PIRPAG), hoja de ejercicios para amputación por debajo de la rodilla (0103), «7. Hip Flexor Stretch», p. 4 (F4, apartado 204)
- Población destinataria de la fuente (si la declara): la evidencia dice «amputación por debajo de la rodilla». `especifica_de` actual: «amputación por debajo de la rodilla». Coincide con R8.1.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis (la fuente deja las repeticiones en blanco; HealthMove usa 2; ya documentado). C3 posible: `flexion_profunda_rodilla: true` y la evidencia dice que la rodilla se dobla hacia el pecho. Ver DS-458.
- Variante de: `abrazar-rodilla-tumbado` (contexto, no auditado).

### Evidencia de la fuente
- Ubicación exacta: F4, «7. Hip Flexor Stretch», p. 4 (apartado 204).
- Pasos originales relevantes, resumidos con palabras propias: boca arriba, mejor sin almohada; doblar una rodilla hacia el pecho y sujetarla con las manos; empujar la otra pierna contra la cama; 30 a 60 s; «Repeat ___ times»; con la otra pierna.
- Coincidencias (C1): boca arriba, una rodilla hacia el pecho, sujeta con las manos, la otra pierna estirada contra la cama, 30 a 60 s, cambio de pierna.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis (la fuente deja las repeticiones en blanco; HealthMove usa 2; ya documentado). C3 posible: `flexion_profunda_rodilla: true` y la evidencia dice que la rodilla se dobla hacia el pecho. Ver DS-458.
- Hechos, inferencias e incertidumbres: D (texto y foto), tumbado, una rodilla abrazada con las dos manos contra el pecho, la otra pierna estirada. D (texto), la rodilla se dobla hacia el pecho.
- Limitaciones de la verificación: la evidencia no da el ángulo exacto de la rodilla.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: estiramiento estático | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y foto): las manos abrazan la rodilla, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y foto): las manos van a la rodilla, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y foto): las dos manos sujetan la rodilla | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto y foto): las manos sujetan la rodilla | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | true | D (texto y foto): la rodilla se dobla hacia el pecho | evidencia | TRUE | §4: rodilla más de 90° |
| flexion_amplia_cadera | true | D (texto y foto): la rodilla se lleva al pecho; el muslo se acerca al tronco | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D (texto): sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `tumbado`, recurso `cama`, dosis «Mantén de 30 a 60 segundos. 2 veces con cada pierna»: coherente con la adaptación documentada.
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «amputación por debajo de la rodilla». Coincide con R8.1.
- `variante_de`: `abrazar-rodilla-tumbado` (contexto; no auditado).
- `notas_etiquetado` actual: vacío. No propongo cambiarla.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. La dosis ya está documentada como adaptación.


## Revisión de DeepSeek

**Consulta C25** (dos bloques, con «FIN DEL BORRADOR»). Análisis: `deepseek/analisis-claude/fase-24-lote24.md`.

**Aceptado:** DS-442 y DS-446 (forma de las notas), DS-443 (población, con el título de cada folleto), DS-445 (peso opcional en 194), DS-447 (la frase «alternate arms» de 195, con la foto a dos manos), DS-449 (nota de 196), DS-451 y DS-452 (`peso_en_manos` y `agarre` en 198), DS-453 (nota de 199).

**Corregido por Claude:**
- 196 (DS-448): en vez de documentar los dos brazos como adaptación, el ejercicio se corrige hacia la fuente (un brazo, una botella): `ambos_brazos` y `equilibrio_sin_apoyo` pasan a `false` (D) e ilustración corregida.
- 201 (DS-455): `true` conservador, como proponía DeepSeek (R2.2 no permite `false` sin D); se anota en CN-5.
- DS-444 y DS-450 (dosis no extraída y foto recortada): no bloquean; la dosis queda como adaptación documentada.
- DS-454, DS-456 a DS-458: confirmaciones sin cambio.

## Resumen del lote

- **11 ejercicios auditados por primera vez con el protocolo 1.0.** Los 11 quedan LISTOS PARA APROBACIÓN DOCUMENTAL, con los cambios aplicados.
- **Cambios de etiquetas:** `abrir-rodillas-plantas-juntas`, `flexion_profunda_rodilla` → `true` conservador (CN-5); `elevaciones-laterales-botella`, `ambos_brazos` y `equilibrio_sin_apoyo` → `false` (D); `banda-deslizar-brazos-pared`, `agarre` → `true` (D) y `peso_en_manos` → `true` conservador.
- **Adaptaciones nuevas (Q5):** 194 (peso siempre) y 195 (dos manos).
- **Ilustración corregida:** 1.
