# Auditoría del catálogo — Lote 2

- Fecha: 2026-10-14
- Auditor: Claude, con la skill `auditar-catalogo-ejercicios`. Es una auditoría documental, no una validación clínica.
- Catálogo: v0.3.0, sin modificar.

Fuentes abiertas:

- **Specialist Mobility Centre (Leicester), «Seated Exercises – Information for Patients»** (PDF de 5 páginas, csp.org.uk).
  - Texto completo extraído.
  - Ilustraciones no revisadas.
  - El PDF no indica ninguna licencia.
  - **Hallazgo:** la introducción dice que los ejercicios están pensados para quien usa silla de ruedas («whilst you maybe using a wheelchair»). Además, dos de ellos aluden expresamente a la amputación:
    - «Side stretch»: «these muscles get tight quickly when you have had an amputation».
    - «Hamstring stretch»: «Stretch your remaining leg».
- **Age UK Devon, «Seated Vitality at Home»** (PDF de 11 páginas, 2020).
  - Texto completo extraído.
  - Licencia verificada en el propio PDF: «All rights are reserved by the charity and no part of this publication may be produced in whole or in part without written permission». Hay que mantener la redacción propia y la atribución.

---

## 6. tobillos-punta-talon-sentado

### Identificación
- ID: `tobillos-punta-talon-sentado`
- Nombre: Punta y talón en la silla
- Fuente: Age UK Devon, «Seated Vitality at Home», bloque de calentamiento, «Heel and toe action»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA en el movimiento y la dosis, con una ADAPTACIÓN NO DOCUMENTADA.

### Evidencia de la fuente
- **Ubicación exacta:** «Seated Vitality at Home», calentamiento, tras «Check posture», «Keep feet flat on the floor» y «Hold the chair for support if required».
- **Pasos originales, con palabras propias:**
  1. Con el pie izquierdo, poner la punta donde estaba el talón y el talón donde estaba la punta, 4 veces.
  2. Repetir con el pie derecho, 4 veces.
  3. El bloque se marca «Rep. 3».
  4. La fuente permite sujetarse a la silla si hace falta.
- **Coincidencias:** movimiento y repeticiones por pie.
- **Diferencias:**
  1. La instrucción 4 del catálogo, «Aumenta el recorrido poco a poco si te resulta cómodo», no corresponde a este ejercicio: en la fuente esa indicación acompaña a la marcha, que viene después.
  2. Manos en los muslos en vez de sujetarse a la silla. Esta sí está documentada en `adaptaciones`.
  3. El «Rep. 3» del bloque no se refleja en la dosis. Es aceptable si se trata como un ejercicio suelto.
- **Adaptaciones que deben documentarse:** la instrucción 4, o eliminarla.
- **Limitaciones de la verificación:** ilustraciones no revisadas.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Sentado | FALSE | — |
| una_pierna | false | Sentado, sin cargar peso | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | Toques suaves | FALSE | No hay golpe al apoyar |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | Parte de un calentamiento suave, 4 repeticiones | FALSE | — |
| brazo_sobre_hombro | false | Manos en los muslos | FALSE | — |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | false | — | FALSE | — |
| agarre | false | Manos en los muslos (adaptación documentada) | FALSE | La fuente lo permitía; nuestra versión no lo exige |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | Para poner la punta donde estaba el talón, el pie retrocede unos centímetros | REQUIERE_ACLARACION | Retrasar el pie sentado puede llevar la rodilla algo más allá de 90°. Depende de la frase de referencia del umbral (§4), que no está escrita en la especificación |
| flexion_amplia_cadera | false | Muslo apoyado | FALSE | — |
| puntillas_talones | false | Sentado: no se soporta el peso del cuerpo | FALSE | La definición exige estar de pie |
| inclinacion_tronco | false | Postura erguida | FALSE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
- **Fases**, **posición**, **recursos** y **dosis**: coherentes.
- **Duración** (45 s): plausible.

### Incidencias
1. La instrucción 4 se atribuyó a este ejercicio sin estar en él.
2. La especificación no fija la «frase de referencia» del umbral de 90°, así que `flexion_profunda_rodilla` queda abierta.

### Propuesta de cambios
- `instrucciones[3]`: eliminarla, o mantenerla y añadir a `adaptaciones`: «La fuente no indica aumentar el recorrido en este ejercicio; es una propuesta nuestra».
- `exigencias.flexion_profunda_rodilla`: decidir. TRUE si se aplica §7.1 al pie retrasado.

### Decisión pendiente del desarrollador
**REQUIERE CORRECCIONES.**

---

## 7. inclinacion-lateral-brazo-arriba

### Identificación
- ID: `inclinacion-lateral-brazo-arriba`
- Nombre: Inclinación lateral con brazo arriba
- Fuente: Specialist Mobility Centre (Leicester), ejercicio 2, «Side stretch»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA en el movimiento. Falta indicar la población a la que va dirigido el material.

### Evidencia de la fuente
- **Ubicación exacta:** PDF, página 2, «2) Side stretch».
- **Pasos originales, con palabras propias:**
  1. Sentarse recto, con la cabeza y los hombros al frente.
  2. Subir el brazo izquierdo por encima de la cabeza y poner la mano derecha en la cadera o en el reposabrazos.
  3. Inclinarse con cuidado a la derecha, «creciendo» desde la cintura y con los dos glúteos apoyados.
  4. Notar el estiramiento en el costado izquierdo.
  5. 3 a 5 veces por lado.
  6. La fuente justifica el ejercicio así: esos músculos se tensan rápido después de una amputación.
- **Coincidencias:** posición, pasos, sensación esperada y dosis.
- **Diferencias:** el catálogo solo ofrece la mano en la cadera, no el reposabrazos. Es correcto, porque el §4 excluye depender de reposabrazos.
- **Adaptaciones que deben documentarse:** ninguna por la mano. Falta `fuente.especifica_de`.
- **Limitaciones de la verificación:** ilustración no revisada.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Sentado | FALSE | — |
| una_pierna | false | Sentado | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | — | FALSE | — |
| brazo_sobre_hombro | true | «Lift your arm overhead» | TRUE | — |
| mano_detras | false | La mano va a la cadera, no a la espalda | FALSE | — |
| ambos_brazos | false | Un brazo arriba y la otra mano en la cadera | REQUIERE_ACLARACION | Depende del criterio pendiente (lote 1). Con el criterio literal sería TRUE |
| agarre | false | La mano se apoya en la cadera | FALSE | — |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | — | FALSE | — |
| flexion_amplia_cadera | false | — | FALSE | — |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | true | «Lean over carefully to the right» | TRUE | Inclinación lateral más allá de leve |
| rotacion_tronco | false | Hombros al frente | FALSE | — |

### Otros campos
- **Fases**, **posición**, **recursos** y **dosis**: coherentes.
- **Duración** (75 s): plausible.

### Incidencias
1. El material está pensado para quien usa silla de ruedas, y este ejercicio se justifica por la amputación. No se trata de una contraindicación, pero debe constar.

### Propuesta de cambios
- `fuente.especifica_de`: (ausente) → «usuarios de silla de ruedas; el ejercicio menciona la amputación».
- `exigencias.ambos_brazos`: según el criterio que se decida.

### Decisión pendiente del desarrollador
**REQUIERE CORRECCIONES.**

---

## 8. inclinacion-lateral-sentado

### Identificación
- ID: `inclinacion-lateral-sentado`
- Nombre: Inclinación lateral deslizando la mano
- Fuente: Age UK Devon, «Seated Vitality at Home», página 6, deslizar una mano por el lado de la silla
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA en el movimiento, con una DISCREPANCIA en la dosis.

### Evidencia de la fuente
- **Ubicación exacta:** «Seated Vitality at Home», p. 6, bloque «Check posture», «Slide one hand down the side of the chair».
- **Pasos originales, con palabras propias:**
  1. Postura erguida y pies apoyados.
  2. Deslizar una mano por el lado de la silla tan abajo como se pueda.
  3. Mantener la postura, sin inclinarse hacia delante ni hacia atrás.
  4. Mantener hasta 10 s.
  5. Volver y repetir hacia el otro lado.
- **Coincidencias:** movimiento, mantenimiento y lados.
- **Diferencias:** el catálogo dice «1 o 2 veces hacia cada lado». La fuente describe una vez por lado y no da número de repeticiones.
- **Adaptaciones que deben documentarse:** la segunda repetición.
- **Limitaciones de la verificación:** ilustraciones no revisadas.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Sentado | FALSE | — |
| una_pierna | false | — | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | — | FALSE | — |
| brazo_sobre_hombro | false | La mano baja | FALSE | — |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | false | Una mano | FALSE | — |
| agarre | false | La mano se desliza, no sujeta | FALSE | — |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | — | FALSE | — |
| flexion_amplia_cadera | false | — | FALSE | — |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | true | Deslizar la mano «as far as possible» | TRUE | Inclinación lateral |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
- **`variante_de`** (`inclinacion-lateral-brazo-arriba`): coherente, porque elimina `brazo_sobre_hombro`.
- **Fases** y **duración**: coherentes.

### Incidencias
1. La dosis añade una segunda repetición sin documentarla.

### Propuesta de cambios
- `dosis`: «1 o 2 veces hacia cada lado, hasta 10 segundos» → «Una vez hacia cada lado, hasta 10 segundos». O mantenerla y añadir a `adaptaciones`: «La fuente indica una vez por lado; se permite repetir».

### Decisión pendiente del desarrollador
**REQUIERE CORRECCIONES.**

---

## 9. estiramiento-isquiotibiales-sentado

### Identificación
- ID: `estiramiento-isquiotibiales-sentado`
- Nombre: Estiramiento de la parte trasera del muslo
- Fuente: Specialist Mobility Centre (Leicester), ejercicio 3, «Hamstring stretch»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA en el movimiento, con una DISCREPANCIA en la dosis y la población sin indicar.

### Evidencia de la fuente
- **Ubicación exacta:** PDF, página 3, «3) Hamstring stretch».
- **Pasos originales, con palabras propias:**
  1. Sentarse con la espalda recta y adelantarse un poco en el asiento.
  2. Estirar al frente «la pierna que queda», sin bloquear la rodilla, con el talón en el suelo o en un taburete.
  3. Inclinarse hacia delante desde la cadera con la espalda recta.
  4. Mantener de 10 a 15 al notar el estiramiento. La fuente omite la unidad; se entiende que son segundos.
  5. Repetir de 3 a 5 veces.
- **Coincidencias:** posición, pasos y tiempo de mantenimiento.
- **Diferencias:**
  1. La fuente habla de «la pierna que queda» (amputación). El catálogo dice «cambia de pierna».
  2. La fuente indica de 3 a 5 repeticiones; el catálogo, 3 por pierna.
  3. El catálogo omite el taburete opcional, lo que es correcto con los recursos permitidos.
- **Adaptaciones que deben documentarse:** que se hace con las dos piernas y la reducción a 3 repeticiones.
- **Limitaciones de la verificación:** ilustración no revisada.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Sentado | FALSE | — |
| una_pierna | false | — | FALSE | — |
| sentarse_levantarse | false | Solo se adelanta en el asiento | FALSE | No pasa a estar de pie |
| impacto | false | — | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | — | FALSE | — |
| brazo_sobre_hombro | false | — | FALSE | — |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | false | — | FALSE | — |
| agarre | false | — | FALSE | — |
| peso_en_manos | false | La fuente no dice dónde van las manos | FALSE | Si se apoyan en el muslo no soportan el peso del cuerpo. Sin evidencia de lo contrario |
| flexion_profunda_rodilla | false | La rodilla se estira | FALSE | — |
| flexion_amplia_cadera | true | «Lean forward from the hips» | TRUE | El tronco se acerca al muslo |
| puntillas_talones | false | Sentado | FALSE | — |
| inclinacion_tronco | true | Inclinación hacia delante desde la cadera | TRUE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
- **Fases** (`calma`) y **posición**: coherentes.
- **Duración** (100 s): plausible para 6 mantenimientos de 10 a 15 s.

### Incidencias
1. La fuente es específica de amputación en este ejercicio.
2. Hay dos diferencias sin documentar.

### Propuesta de cambios
- `fuente.especifica_de`: (ausente) → «usuarios de silla de ruedas; el ejercicio está escrito para la pierna que queda tras una amputación».
- `adaptaciones`: añadir:
  - «La fuente describe el estiramiento de la pierna que queda tras una amputación; aquí se hace con cada pierna».
  - «La fuente indica de 3 a 5 repeticiones; se usan 3».

### Decisión pendiente del desarrollador
**REQUIERE CORRECCIONES.**

---

## 10. circulos-hombros-sentado

### Identificación
- ID: `circulos-hombros-sentado`
- Nombre: Círculos de hombros hacia atrás
- Fuente: Specialist Mobility Centre (Leicester), ejercicio 4, «Shoulder circles backwards»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Ubicación exacta:** PDF, página 3, «4) Shoulder circles backwards».
- **Pasos originales, con palabras propias:**
  1. Sentarse erguido sin apoyarse en el respaldo.
  2. Manos y brazos relajados sobre los muslos.
  3. Hacer círculos lentos con los hombros hacia atrás.
  4. 10 repeticiones.
- **Coincidencias:** todos los pasos y la dosis.
- **Diferencias:** ninguna.
- **Adaptaciones que deben documentarse:** ninguna.
- **Limitaciones de la verificación:** ilustración no revisada. El texto del PDF mezcla columnas con el ejercicio 6; se ha separado por contexto.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Sentado | FALSE | — |
| una_pierna | false | — | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | — | FALSE | — |
| brazo_sobre_hombro | false | Brazos sobre los muslos; solo se mueven los hombros | FALSE | — |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | false | Se mueven los dos hombros, pero los brazos solo descansan | FALSE | Con un solo lado sigue siendo el mismo ejercicio |
| agarre | false | — | FALSE | — |
| peso_en_manos | false | Las manos descansan | FALSE | — |
| flexion_profunda_rodilla | false | — | FALSE | — |
| flexion_amplia_cadera | false | — | FALSE | — |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | false | — | FALSE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
- **Fases**, **posición**, **recursos**, **dosis** y **duración** (30 s): coherentes.

### Incidencias
Ninguna propia. Opcionalmente, puede añadirse a nivel de folleto `especifica_de`: «usuarios de silla de ruedas» (ver resumen).

### Propuesta de cambios
Ninguna obligatoria.

### Decisión pendiente del desarrollador
**LISTO PARA APROBACIÓN DOCUMENTAL.**

---

## Resumen del lote 2

| ID | Resultado | Cambios propuestos |
|---|---|---|
| tobillos-punta-talon-sentado | REQUIERE CORRECCIONES | Instrucción 4 no está en la fuente; decidir `flexion_profunda_rodilla` |
| inclinacion-lateral-brazo-arriba | REQUIERE CORRECCIONES | Añadir `especifica_de`; `ambos_brazos` según el criterio |
| inclinacion-lateral-sentado | REQUIERE CORRECCIONES | La dosis añade una repetición |
| estiramiento-isquiotibiales-sentado | REQUIERE CORRECCIONES | `especifica_de` (amputación); documentar dos adaptaciones |
| circulos-hombros-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | — |

**Incidencias comunes:**
- **Folleto de Leicester:** está dirigido a usuarios de silla de ruedas y en parte a personas con amputación, y el catálogo no lo indica en ningún ejercicio. Afecta a todos los que lo citan, también a `marcha-sentado-manos-cadera` del lote 1. Se propone añadir `especifica_de` a todos ellos.
- **Umbral de 90°:** la especificación lo menciona, pero no define su «frase de referencia». Ya bloquea una decisión (`flexion_profunda_rodilla` en punta y talón) y probablemente bloqueará otras.
