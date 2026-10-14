# Auditoría del catálogo — Lote 5

- Fecha: 2026-10-14
- Auditor: Claude, con la skill `auditar-catalogo-ejercicios`. Es una auditoría documental, no una validación clínica.
- Catálogo: v0.3.0, sin modificar.

Fuentes abiertas (texto completo descargado el 2026-10-14; licencia OGL verificada en las condiciones de nhs.uk, ver el lote 1; ilustraciones y vídeos no revisados):

- **NHS, «Strength exercises»** (https://www.nhs.uk/live-well/exercise/strength-and-flexibility-exercises/strength-exercises/). Revisada el 28 de febrero de 2024.
- **NHS, «Balance exercises»** (…/balance-exercises/). Revisada el 7 de noviembre de 2023. Indica hacer los ejercicios cerca de una pared o de una silla estable.
- **NHS, «Flexibility exercises»** (…/flexibility-exercises/). Revisada el 20 de noviembre de 2023.

## Conflicto de criterio detectado: apoyarse con las dos manos

Cinco ejercicios de este lote dicen «apoya las manos en el respaldo» o «en la pared», pero el apoyo se puede hacer con una sola mano.

- **Con el criterio literal** (decisión 1), habría que marcar `ambos_brazos`.
- **El caso de referencia del §7** de la especificación, «Elevar los talones sujetándose a la silla», lleva solo `puntillas_talones` y `agarre`, sin `ambos_brazos`.

Las dos reglas chocan. Para no cambiar etiquetas en bloque sin aprobación, estos casos quedan como **REQUIERE_ACLARACION** y se añade la **decisión 4** al registro:

- **Opción A (recomendada):** las manos que solo sirven de apoyo no cuentan para `ambos_brazos`, como en el caso de referencia, y se añade una adaptación documentada: «apoya una o las dos manos».
- **Opción B:** se marca `ambos_brazos` en todos ellos.

Las flexiones contra la pared no entran aquí: los dos brazos hacen el movimiento, así que se marca en cualquier caso.

---

## 26. sentarse-levantarse

### Identificación
- ID: `sentarse-levantarse`
- Nombre: Sentarse y levantarse
- Fuente: NHS, «Strength exercises», «Sit-to-stand»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Pasos originales, con palabras propias:**
  1. Sentarse en el borde de la silla, con los pies al ancho de la cadera y algo inclinado hacia delante.
  2. Levantarse despacio usando las piernas y no los brazos, mirando al frente.
  3. Sentarse despacio, usando las manos solo como guía si es posible.
  4. 5 repeticiones; cuanto más lentas, mejor.
- **Coincidencias:** todo.
- **Diferencias:** ninguna.
- **Adaptaciones que deben documentarse:** ninguna.
- **Limitaciones de la verificación:** ilustración no revisada. Es la que mostraría dónde quedan los pies.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | true | Se termina de pie, sin sujetarse | TRUE | — |
| una_pierna | false | Pies al ancho de la cadera | FALSE | — |
| sentarse_levantarse | true | Es el ejercicio | TRUE | Caso de referencia |
| impacto | false | «Slowly» | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | 5 repeticiones lentas | FALSE | — |
| brazo_sobre_hombro | false | — | FALSE | — |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | false | Las manos son una guía opcional | FALSE | No son necesarias |
| agarre | false | «Hands… just to guide you» | FALSE | Es una guía opcional, no sujetarse. Si el desarrollador la ve como apoyo, pasaría a TRUE |
| peso_en_manos | false | La fuente pide no usar los brazos para levantarse | FALSE | — |
| flexion_profunda_rodilla | true | Sentado en el borde con el tronco adelantado | TRUE (conservador) | La fuente no indica dónde van los pies. Umbral operativo: caso ambiguo, así que se marca por §7.1 y no por evidencia |
| flexion_amplia_cadera | false | «Lean slightly forwards» | FALSE | Inclinación leve. Coincide con el caso de referencia, que no marca esta exigencia |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | false | «Slightly» | FALSE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
- **Posiciones** (`sentado`, `de_pie`): cumplen la regla del validador.
- **Dosis** y **duración**: coherentes.

### Incidencias
Ninguna.

### Propuesta de cambios
- `notas_etiquetado`: dejar escrito que `flexion_profunda_rodilla` se marca por conservadurismo, porque la fuente no fija la posición de los pies.

### Decisión pendiente del desarrollador
**LISTO PARA APROBACIÓN DOCUMENTAL.**

---

## 27. mini-sentadillas

### Identificación
- ID: `mini-sentadillas`
- Nombre: Mini sentadillas con apoyo
- Fuente: NHS, «Strength exercises», «Mini-squats»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Pasos originales, con palabras propias:**
  1. Manos en el respaldo de una silla para estabilizarse, pies al ancho de la cadera.
  2. Doblar las rodillas despacio hasta donde sea cómodo, hacia delante y sobre el dedo gordo, con la espalda recta.
  3. Subir apretando los glúteos.
  4. 5 veces.
- **Coincidencias:** todo.
- **Diferencias:** el catálogo omite «llevar las rodillas sobre el dedo gordo». Es aceptable.
- **Adaptaciones que deben documentarse:** ninguna.
- **Limitaciones de la verificación:** ilustración no revisada.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Manos en el respaldo | FALSE | — |
| una_pierna | false | — | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | — | FALSE | — |
| brazo_sobre_hombro | false | — | FALSE | — |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | false | «Rest your hands on the back of the chair» | REQUIERE_ACLARACION | Decisión 4 |
| agarre | true | Apoyar las manos en el respaldo | TRUE | §4: sujetarse a una silla es agarre (criterio conservador) |
| peso_en_manos | false | Es apoyo para la estabilidad | FALSE | — |
| flexion_profunda_rodilla | true | «As far as is comfortable» | TRUE (conservador) | La fuente no limita la flexión |
| flexion_amplia_cadera | false | Mini sentadilla | FALSE | La cadera no se flexiona más que al estar sentado |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | false | «Back straight» | FALSE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
Coherentes.

### Incidencias
Decisión 4.

### Propuesta de cambios
Según la decisión 4.

### Decisión pendiente del desarrollador
**LISTO PARA APROBACIÓN DOCUMENTAL** si se elige la opción A de la decisión 4. Con la opción B, REQUIERE CORRECCIONES.

---

## 28. elevacion-talones-apoyo

### Identificación
- ID: `elevacion-talones-apoyo`
- Nombre: Elevación de talones con apoyo
- Fuente: NHS, «Strength exercises», «Calf raises»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Pasos originales, con palabras propias:**
  1. Manos en el respaldo.
  2. Subir los dos talones hasta donde sea cómodo, lento y controlado.
  3. 5 veces.
  4. Como progresión, hacerlo sin apoyo.
- **Coincidencias:** todo.
- **Diferencias:** ninguna.
- **Adaptaciones que deben documentarse:** ninguna.
- **Limitaciones de la verificación:** ilustración no revisada.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Con apoyo | FALSE | — |
| una_pierna | false | Los dos talones | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | Lento | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | — | FALSE | — |
| brazo_sobre_hombro | false | — | FALSE | — |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | false | Las manos en el respaldo | REQUIERE_ACLARACION | Decisión 4. El caso de referencia del §7 no la marca |
| agarre | true | Apoyo en la silla | TRUE | Caso de referencia del §7 |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | — | FALSE | — |
| flexion_amplia_cadera | false | — | FALSE | — |
| puntillas_talones | true | De pie sobre las puntas | TRUE | Caso de referencia del §7 |
| inclinacion_tronco | false | — | FALSE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
Coherentes. Es la versión de partida de `elevacion-talones-sin-apoyo`.

### Incidencias
Decisión 4.

### Propuesta de cambios
Según la decisión 4.

### Decisión pendiente del desarrollador
**LISTO PARA APROBACIÓN DOCUMENTAL** con la opción A de la decisión 4.

---

## 29. elevacion-talones-sin-apoyo

### Identificación
- ID: `elevacion-talones-sin-apoyo`
- Nombre: Elevación de talones sin apoyo
- Fuente: NHS, «Strength exercises», progresión de «Calf raises»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA, con una ADAPTACIÓN NO DOCUMENTADA.

### Evidencia de la fuente
- **Pasos originales, con palabras propias:** «To make this more difficult, perform the exercise without support».
- **Coincidencias:** movimiento y dosis.
- **Diferencias:** el catálogo añade dos cosas que la fuente no dice:
  1. Quedarse cerca de la silla.
  2. «Si pierdes el equilibrio, sujétate a la silla».
- **Adaptaciones que deben documentarse:** esas dos medidas de seguridad.
- **Limitaciones de la verificación:** ninguna adicional.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | true | Sin sujetarse | TRUE | — |
| una_pierna | false | — | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | — | FALSE | — |
| brazo_sobre_hombro | false | — | FALSE | — |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | false | — | FALSE | — |
| agarre | false | La silla es solo un recurso de emergencia | FALSE | — |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | — | FALSE | — |
| flexion_amplia_cadera | false | — | FALSE | — |
| puntillas_talones | true | — | TRUE | — |
| inclinacion_tronco | false | — | FALSE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
- **`variante_de`**: coherente.
- **Recursos** (`silla`): coherente con la medida de seguridad.

### Incidencias
1. Medida de seguridad añadida sin documentar.

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente solo dice “sin apoyo”; aquí se mantiene la silla cerca para sujetarse si se pierde el equilibrio».

### Decisión pendiente del desarrollador
**REQUIERE CORRECCIONES** (solo documentación).

---

## 30. elevacion-lateral-pierna

### Identificación
- ID: `elevacion-lateral-pierna`
- Nombre: Elevación lateral de pierna
- Fuente: NHS, «Strength exercises», «Sideways leg lift»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Pasos originales, con palabras propias:**
  1. Manos en el respaldo.
  2. Subir la pierna derecha hacia el lado hasta donde sea cómodo, con la espalda y la cadera rectas, sin ladearse.
  3. Volver y repetir con la izquierda.
  4. 5 veces con cada pierna.
- **Coincidencias:** todo.
- **Diferencias:** ninguna.
- **Adaptaciones que deben documentarse:** ninguna.
- **Limitaciones de la verificación:** ilustración no revisada.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Con apoyo | FALSE | — |
| una_pierna | true | Una pierna en el aire | TRUE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | — | FALSE | — |
| brazo_sobre_hombro | false | — | FALSE | — |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | false | Manos en el respaldo | REQUIERE_ACLARACION | Decisión 4 |
| agarre | true | Apoyo en la silla | TRUE | — |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | — | FALSE | — |
| flexion_amplia_cadera | false | Movimiento hacia el lado | FALSE | No es flexión de cadera |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | false | «Avoid tilting» | FALSE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
Coherentes.

### Incidencias
Decisión 4.

### Propuesta de cambios
Según la decisión 4.

### Decisión pendiente del desarrollador
**LISTO PARA APROBACIÓN DOCUMENTAL** con la opción A.

---

## 31. extension-pierna-atras

### Identificación
- ID: `extension-pierna-atras`
- Nombre: Extensión de pierna hacia atrás
- Fuente: NHS, «Strength exercises», «Leg extension»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Pasos originales, con palabras propias:**
  1. Manos en el respaldo.
  2. Erguido, llevar la pierna izquierda estirada hacia atrás sin arquear la espalda.
  3. Repetir con la derecha.
  4. Mantener hasta 5 s, 5 veces por pierna.
- **Coincidencias:** todo.
- **Diferencias:** ninguna.
- **Adaptaciones que deben documentarse:** ninguna.
- **Limitaciones de la verificación:** ilustración no revisada.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Con apoyo | FALSE | — |
| una_pierna | true | — | TRUE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | — | FALSE | — |
| brazo_sobre_hombro | false | — | FALSE | — |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | false | Manos en el respaldo | REQUIERE_ACLARACION | Decisión 4 |
| agarre | true | — | TRUE | — |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | Pierna estirada | FALSE | — |
| flexion_amplia_cadera | false | Es extensión, no flexión | FALSE | — |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | false | «Avoid arching your back» | FALSE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
Coherentes.

### Incidencias
Decisión 4.

### Propuesta de cambios
Según la decisión 4.

### Decisión pendiente del desarrollador
**LISTO PARA APROBACIÓN DOCUMENTAL** con la opción A.

---

## 32. flexiones-pared

### Identificación
- ID: `flexiones-pared`
- Nombre: Flexiones contra la pared
- Fuente: NHS, «Strength exercises», «Wall press-up»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Pasos originales, con palabras propias:**
  1. A un brazo de la pared, con las palmas planas a la altura del pecho y los dedos hacia arriba.
  2. Con la espalda recta y los codos pegados, doblar los brazos acercándose a la pared.
  3. Volver despacio.
  4. 3 series de 5 a 10.
- **Coincidencias:** todo.
- **Diferencias:** ninguna.
- **Adaptaciones que deben documentarse:** ninguna.
- **Limitaciones de la verificación:** ilustración no revisada.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Apoyo en la pared | FALSE | — |
| una_pierna | false | — | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | — | FALSE | — |
| brazo_sobre_hombro | false | Manos a la altura del pecho | FALSE | — |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | false | Los dos brazos empujan | **TRUE** | Aquí los brazos hacen el ejercicio, no solo apoyan. Con un brazo sería otro ejercicio |
| agarre | false | Palmas abiertas | FALSE | — |
| peso_en_manos | true | Las manos soportan parte del peso | TRUE | Caso de referencia del §7 |
| flexion_profunda_rodilla | false | — | FALSE | — |
| flexion_amplia_cadera | false | — | FALSE | — |
| puntillas_talones | false | Pies planos | FALSE | Si el talón se levantara al acercarse pasaría a TRUE; la fuente no lo dice |
| inclinacion_tronco | false | Todo el cuerpo se inclina recto hacia la pared | FALSE | La espalda no se dobla respecto a las piernas. Coincide con el caso de referencia |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
- **Duración** (120 s): coherente con 3 series.

### Incidencias
1. `ambos_brazos` debe marcarse.

### Propuesta de cambios
- `exigencias.ambos_brazos`: false → **true**.

### Decisión pendiente del desarrollador
**REQUIERE CORRECCIONES.**

---

## 33. equilibrio-una-pierna-pared

### Identificación
- ID: `equilibrio-una-pierna-pared`
- Nombre: Apoyo sobre una pierna frente a la pared
- Fuente: NHS, «Balance exercises», «One-leg stand»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Pasos originales, con palabras propias:**
  1. De pie frente a la pared, con los brazos estirados y las yemas tocándola.
  2. Levantar la pierna izquierda con la cadera nivelada y la otra rodilla un poco doblada.
  3. Bajar con suavidad.
  4. Mantener de 5 a 10 s, 3 veces por lado.
- **Coincidencias:** todo.
- **Diferencias:** ninguna.
- **Adaptaciones que deben documentarse:** ninguna.
- **Limitaciones de la verificación:**
  - La fuente no dice cuánto se levanta la pierna ni en qué dirección.
  - El vídeo no se ha revisado.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Yemas en la pared | FALSE | Es un apoyo |
| una_pierna | true | — | TRUE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | — | FALSE | — |
| brazo_sobre_hombro | false | Brazos estirados al frente, a la altura de la pared | FALSE | Sin indicación de que suban por encima del hombro |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | false | «Arms outstretched» | REQUIERE_ACLARACION | Decisión 4 |
| agarre | false | Yemas, sin cerrar la mano | FALSE | — |
| peso_en_manos | false | Solo tocan | FALSE | — |
| flexion_profunda_rodilla | false | La fuente no dice cómo se levanta la pierna | REQUIERE_ACLARACION | Si se dobla la rodilla hacia atrás, podría pasar de 90°. Con la regla conservadora sería TRUE, salvo que la instrucción fije cómo levantar la pierna |
| flexion_amplia_cadera | false | — | FALSE | — |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | false | — | FALSE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
Coherentes.

### Incidencias
1. Decisión 4.
2. La forma de levantar la pierna no está especificada.

### Propuesta de cambios
- **Fijar la forma de levantar la pierna:** añadir a `instrucciones[1]` «…levanta un poco el pie del suelo, sin doblar mucho la rodilla» y documentarlo como adaptación. Si no se fija, `flexion_profunda_rodilla` → true.
- **`ambos_brazos`:** según la decisión 4.

### Decisión pendiente del desarrollador
**REQUIERE CORRECCIONES.**

---

## 34. inclinacion-lateral-de-pie

### Identificación
- ID: `inclinacion-lateral-de-pie`
- Nombre: Inclinación lateral de pie
- Fuente: NHS, «Flexibility exercises», «Sideways bend»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Pasos originales, con palabras propias:**
  1. De pie, con los pies al ancho de la cadera y los brazos a los lados.
  2. Deslizar el brazo izquierdo por el costado hasta donde sea cómodo, notando el estiramiento en la cadera contraria.
  3. Repetir con el derecho.
  4. Mantener 2 s, 3 por lado.
- **Coincidencias:** todo.
- **Diferencias:** ninguna.
- **Adaptaciones que deben documentarse:** ninguna.
- **Limitaciones de la verificación:** ilustración no revisada.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | true | De pie sin apoyo | TRUE | — |
| una_pierna | false | — | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | — | FALSE | — |
| brazo_sobre_hombro | false | — | FALSE | — |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | false | Un brazo cada vez | FALSE | — |
| agarre | false | — | FALSE | — |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | — | FALSE | — |
| flexion_amplia_cadera | false | — | FALSE | — |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | true | Inclinación lateral | TRUE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
- **Recursos** (`[]`): correcto.
- **Fases**, **dosis** y **duración**: coherentes.

### Incidencias
Ninguna.

### Propuesta de cambios
Ninguna.

### Decisión pendiente del desarrollador
**LISTO PARA APROBACIÓN DOCUMENTAL.**

---

## 35. estiramiento-gemelo-pared

### Identificación
- ID: `estiramiento-gemelo-pared`
- Nombre: Estiramiento de gemelo en la pared
- Fuente: NHS, «Flexibility exercises», «Calf stretch»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Pasos originales, con palabras propias:**
  1. Manos contra la pared para estabilizarse.
  2. Doblar la pierna derecha y llevar la izquierda atrás al menos un pie de distancia, estirada y con los dos pies planos.
  3. Estirar la pantorrilla con el talón en el suelo.
  4. Repetir con la otra pierna, 3 por lado.
- **Coincidencias:** todo.
- **Diferencias:** ninguna.
- **Adaptaciones que deben documentarse:** ninguna.
- **Limitaciones de la verificación:**
  - Ilustración no revisada.
  - La fuente no dice si se descarga peso en las manos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Manos en la pared | FALSE | — |
| una_pierna | true | Paso atrás | TRUE (conservador) | Coincide con el registro anterior |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | — | FALSE | — |
| brazo_sobre_hombro | false | — | FALSE | — |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | false | «Place your hands against a wall» | REQUIERE_ACLARACION | Decisión 4 |
| agarre | false | Palmas en la pared | FALSE | — |
| peso_en_manos | false | En este estiramiento el cuerpo suele echarse hacia la pared | **REQUIERE_ACLARACION (TRUE si no se aclara)** | La fuente dice «for stability» pero no aclara si se carga peso. Por §7.1 se marca, salvo que la instrucción diga que la pared solo sirve para no perder el equilibrio |
| flexion_profunda_rodilla | false | La rodilla de delante se dobla | FALSE | En una zancada corta no llega a 90° |
| flexion_amplia_cadera | false | — | FALSE | — |
| puntillas_talones | false | Pies planos | FALSE | — |
| inclinacion_tronco | false | Todo el cuerpo se inclina un poco | FALSE | Leve |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
Coherentes.

### Incidencias
1. `peso_en_manos` es dudosa.
2. Decisión 4.

### Propuesta de cambios
- `exigencias.peso_en_manos`: false → **true**. También puede quedarse en false si se añade una adaptación: «apoya las manos en la pared solo para no perder el equilibrio, sin cargar peso en ellas».

### Decisión pendiente del desarrollador
**REQUIERE CORRECCIONES.**

---

## Resumen del lote 5

| ID | Resultado | Cambios propuestos |
|---|---|---|
| sentarse-levantarse | LISTO PARA APROBACIÓN DOCUMENTAL | Nota sobre la rodilla |
| mini-sentadillas | LISTO con la opción A de la decisión 4 | — |
| elevacion-talones-apoyo | LISTO con la opción A de la decisión 4 | — |
| elevacion-talones-sin-apoyo | REQUIERE CORRECCIONES | Documentar la medida de seguridad |
| elevacion-lateral-pierna | LISTO con la opción A de la decisión 4 | — |
| extension-pierna-atras | LISTO con la opción A de la decisión 4 | — |
| flexiones-pared | REQUIERE CORRECCIONES | `ambos_brazos` → true |
| equilibrio-una-pierna-pared | REQUIERE CORRECCIONES | Fijar cómo se levanta la pierna; decisión 4 |
| inclinacion-lateral-de-pie | LISTO PARA APROBACIÓN DOCUMENTAL | — |
| estiramiento-gemelo-pared | REQUIERE CORRECCIONES | `peso_en_manos`; decisión 4 |
