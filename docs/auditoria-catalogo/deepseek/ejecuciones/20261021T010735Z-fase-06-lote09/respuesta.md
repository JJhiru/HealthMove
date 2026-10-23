# Auditoría independiente · fase-06-lote09 (consulta C7)

**Alcance y límites.** Reviso el informe `lote-09` contra el protocolo 1.0, la especificación, el registro y los 7 ejercicios de `catalogo-lote09`. No he abierto las fuentes originales: todo lo que digo sobre lo que dicen Royal Berkshire, NHS o Forth Valley se basa en las citas y resúmenes de Claude. No emito juicios clínicos ni apruebo ejercicios. Los hallazgos van numerados a partir de DS-168 y ordenados por gravedad y dependencia.

**Resumen de la respuesta a las cinco preguntas:**

1. Hay una fila que aplica mal R2.2 (DS-168) y una incoherencia entre la nota y la ilustración (DS-169). No veo repeticiones de «D con regla conservadora» en el sentido que señalaron C4-C6: los `false` con evidencia D que reviso son defendibles salvo el de DS-168.
2. `especifica_de` está bien respaldado por la cita que da el informe (DS-172, certeza media-alta). El consejo del fisioterapeuta está mal clasificado como clase 2: es clase 3 (DS-171).
3. La pauta de Forth Valley no cumple DG-3 condición 2 tal como está redactada (DS-170).
4. Aceptar una duración menor que «at least 5 minutes» con justificación individual es coherente con Q5 abierta, pero el informe no lo trata como tal en un caso y sí en otro (DS-173).
5. Hay errores de hecho entre el informe y el catálogo (DS-174, DS-175, DS-176).

---

## DS-168 · `flexion_profunda_rodilla` y `flexion_amplia_cadera` en `flexion-hombro-lado-tumbado`: el `false` no tiene evidencia D

- **Ubicación:** `lote-09`, ejercicio 63, tabla de exigencias, filas `flexion_profunda_rodilla` y `flexion_amplia_cadera`; y `catalogo-lote09`, `flexion-hombro-lado-tumbado`.
- **Evidencia:** el informe escribe en la columna «Evidencia»: «N: la fuente no dice cómo van las piernas tumbado de lado; HealthMove tampoco». Y en la columna «Etiqueta actual»: `false`. La regla R2.2 dice: «`false` solo puede proponerse con: (a) evidencia D de que la exigencia no aparece en ningún momento del ejercicio… o (b) una adaptación válida y aprobada».
- **Explicación:** la fila mezcla la evidencia (N) con la etiqueta actual (`false`) y con el resultado propuesto (`TRUE`). El `false` actual no está justificado por R2.2: no hay D ni adaptación aprobada. El informe lo reconoce en «Incidencias» y propone el cambio a `true` conservador, que es lo correcto. Pero la tabla presenta el `false` como si fuera una etiqueta válida con evidencia N, lo que contradice R2.3 («La falta de evidencia no demuestra la ausencia»). Es un caso de «N con etiqueta `false`», no de «D con regla conservadora»: no repite el patrón de C4-C6, pero sí es una aplicación incorrecta de R2.2 en la fila.
- **Consecuencia potencial:** si el desarrollador no aprueba el cambio, el ejercicio sigue ofreciéndose a perfiles con `rodilla` y `cadera` sin base documental. Si lo aprueba, el cambio es correcto, pero la tabla del informe no refleja con claridad que el `false` era un error, no una decisión.
- **Nivel de certeza:** alta (la contradicción está en el propio texto del informe).
- **Recomendación:** en la tabla, la columna «Etiqueta actual» debería ir acompañada de una nota que diga que ese `false` no cumple R2.2 y que el cambio a `true` conservador es una corrección, no una propuesta opcional. No propongo cambiar la etiqueta: eso lo decide el desarrollador.
- **Prueba o evidencia que permitiría confirmarlo:** revisar el catálogo anterior al lote (no lo tengo) para ver si el `false` venía de una auditoría previa con evidencia D que el informe no recoge. Si no hay tal evidencia, se confirma el hallazgo.
- **¿Requiere decisión humana?:** sí. El desarrollador debe decidir si aprueba el cambio a `true` conservador (P20 ya lo aplicó) y si acepta que el `false` anterior era un error de etiquetado.

---

## DS-169 · La nota conservadora y la ilustración de `flexion-hombro-lado-tumbado` se contradicen

- **Ubicación:** `lote-09`, ejercicio 63, «Otros campos · Ilustración» y «Propuesta de cambios»; `catalogo-lote09`, `flexion-hombro-lado-tumbado`, `notas_etiquetado`.
- **Evidencia:** el informe dice: «**Ilustración:** de lado, con las rodillas dobladas. Es un dibujo de HealthMove sobre algo que la fuente no fija (R7.2)». Y la nota conservadora dice: «ni la fuente ni la instrucción dicen cómo van las piernas».
- **Explicación:** la nota afirma que la instrucción no dice cómo van las piernas, pero la ilustración de HealthMove sí las dibuja dobladas. R7.6 obliga a comparar las ilustraciones con la fuente y a registrar la discrepancia si introducen una postura distinta. Aquí la ilustración introduce una postura (rodillas dobladas) que la fuente no fija. El informe lo menciona, pero no lo trata como discrepancia de R7.6 ni como adaptación de R3.2. La nota conservadora, además, no menciona la ilustración como fuente de la duda.
- **Consecuencia potencial:** el usuario ve una ilustración con las rodillas dobladas y una nota que dice que no se sabe cómo van las piernas. La ilustración puede inducir a interpretar el ejercicio de una forma que la fuente no respalda. R7.7 dice que, mientras haya una discrepancia de ilustración que induzca a interpretar el ejercicio de otra forma, esa ilustración no se da por válida y el ejercicio no se propone para aprobación documental.
- **Nivel de certeza:** media-alta. La contradicción está en el texto; la calificación como «discrepancia de R7.6» requiere ver la ilustración, que no tengo.
- **Recomendación:** el informe debería decidir si la ilustración es una discrepancia de R7.6 (y entonces aplicar R7.7) o si es una adaptación documentada (y entonces ir a `adaptaciones`, no solo a la nota). No propongo cambiar la ilustración.
- **Prueba o evidencia que permitiría confirmarlo:** comparar la ilustración de `flexion-hombro-lado-tumbado` con la fuente (p. 3, n.º 6) y decidir si la postura de las piernas es una elección de HealthMove o una lectura de la fuente.
- **¿Requiere decisión humana?:** sí. El desarrollador debe decidir si la ilustración se mantiene, se corrige o se documenta como adaptación.

---

## DS-170 · La pauta de dosis de Forth Valley no cumple DG-3 condición 2 tal como está redactada

- **Ubicación:** `lote-09`, ejercicios 59, 60, 61, 62 y 63, «Diferencias (C3) y adaptaciones documentadas (C2)»; `catalogo-lote09`, campo `adaptaciones` de esos cinco ejercicios.
- **Evidencia:** el informe dice: «repeticiones (pauta de Forth Valley, verificada)». Y en la tabla de fuentes: «NHS Forth Valley, “Seated & Bed Exercises” (fundamento de las dosis) … “To start with, try each exercise 2 or 3 times… working up to 10 repetitions” (D)». La condición R3.2 de DG-3 exige: «Está documentada y su fundamento es verificable. Texto en `adaptaciones`, redactado para el usuario. En el informe, la cita de la fuente que la justifica».
- **Explicación:** la cita de Forth Valley está en el informe, pero no en `adaptaciones`. El texto de `adaptaciones` dice: «se usa la pauta general de NHS Forth Valley (empezar con 2 o 3 y subir hasta 10)», sin citar la fuente concreta ni la página. Además, la pauta de Forth Valley es de otra fuente, no de la fuente del ejercicio. DG-3 no prohíbe usar una pauta de otra fuente, pero R3.1 exige que «la ejecución que pide HealthMove es una de las que permite la fuente». La fuente del ejercicio (Royal Berkshire) deja las repeticiones en blanco: no permite ni prohíbe ninguna pauta. La pauta de Forth Valley es una decisión de HealthMove para rellenar una laguna, y el protocolo §5.1 dice: «Rellenar una laguna de la fuente con una decisión de HealthMove (“la fuente no indica repeticiones; se proponen 5”) es una adaptación. Si se puede conservar la vaguedad de la fuente sin inventar, se conserva, y la laguna va a `notas_etiquetado`».
- **Consecuencia potencial:** la adaptación no cumple R3.2 tal como está redactada (falta la cita en `adaptaciones`) y no cumple la preferencia de §5.1 (conservar la vaguedad). El usuario lee una pauta concreta que la fuente del ejercicio no respalda, atribuida a otra fuente que no se cita en el campo visible.
- **Nivel de certeza:** alta en cuanto a la falta de cita en `adaptaciones`; media en cuanto a si la pauta de Forth Valley es la mejor opción (eso requiere decisión humana).
- **Recomendación:** el informe debería decidir entre: (a) conservar la vaguedad de la fuente («repite según te indique tu fisioterapeuta») y llevar la laguna a `notas_etiquetado`; (b) mantener la pauta de Forth Valley pero citarla en `adaptaciones` con la referencia concreta (documento, página, frase). No propongo cuál.
- **Prueba o evidencia que permitiría confirmarlo:** verificar que la cita de Forth Valley está en el PDF en la página que se indica y que la pauta es aplicable a los ejercicios de Royal Berkshire (no solo a los de Forth Valley).
- **¿Requiere decisión humana?:** sí. El desarrollador debe decidir si acepta la pauta de Forth Valley como adaptación documentada o si prefiere conservar la vaguedad.

---

## DS-171 · «Only complete the exercises that your physiotherapist has taught you» está mal clasificado como clase 2 (DG-6)

- **Ubicación:** `lote-09`, «Población declarada (Royal Berkshire, D)».
- **Evidencia:** el informe dice: «El folleto añade: “Only complete the exercises that your physiotherapist has taught you”. Es un consejo preventivo (DG-6, clase 2): no cambia ninguna etiqueta».
- **Explicación:** DG-6 §8.1 define tres clases:
  - clase 1: exigencia del ejercicio;
  - clase 2: consejo preventivo («Mantén una silla estable cerca por seguridad»);
  - clase 3: indicación de interrupción o contingencia («Si pierdes el equilibrio, detén el ejercicio…»).

  «Only complete the exercises that your physiotherapist has taught you» no es un consejo preventivo: es una condición para hacer el ejercicio (solo si el fisioterapeuta lo ha enseñado). Se parece más a una indicación de contingencia o a una condición de uso que a un consejo de seguridad. R6.4 dice: «Un texto de clase 2 o 3 debe leerse claramente como opcional o de contingencia. Si su redacción hace que parezca necesario para ejecutar el ejercicio, pasa a evaluarse como clase 1». La redacción «Only complete…» hace que parezca necesario. Por tanto, o es clase 3 (contingencia) o es clase 1 (exigencia). El informe la clasifica como clase 2 sin justificar por qué no es clase 3.
- **Consecuencia potencial:** si es clase 1, afectaría a las etiquetas (por ejemplo, a la población o a la compatibilidad). Si es clase 3, no afecta a las etiquetas pero debe leerse como contingencia. La clasificación actual como clase 2 puede inducir a error sobre su función.
- **Nivel de certeza:** media-alta. La redacción «Only complete…» no es un consejo preventivo típico; la clasificación como clase 2 es discutible.
- **Recomendación:** el informe debería justificar por qué es clase 2 y no clase 3, o Reclasificarla. No propongo cambiar la etiqueta.
- **Prueba o evidencia que permitiría confirmarlo:** leer el contexto completo del folleto (no lo tengo) para ver si la frase es una condición de uso o una recomendación de seguridad.
- **¿Requiere decisión humana?:** sí. El desarrollador debe decidir si la frase se trata como clase 2, clase 3 o clase 1.

---

## DS-172 · `especifica_de` = «rehabilitación tras un ingreso hospitalario»: respaldo suficiente pero con matices

- **Ubicación:** `lote-09`, «Población declarada (Royal Berkshire, D)»; `catalogo-lote09`, `fuente.especifica_de` de los 5 ejercicios de Royal Berkshire.
- **Evidencia:** el informe cita: «During and after a stay in hospital… helpful in your rehabilitation». R8.1 dice: «`fuente.especifica_de` solo se rellena con la población que la fuente declara. No se infiere ni se inventa. Se escribe como un nombre breve de población, coherente con los valores existentes».
- **Explicación:** la cita respalda que la fuente se dirige a personas «during and after a stay in hospital». El nombre «rehabilitación tras un ingreso hospitalario» es una síntesis razonable, pero omite «during» (durante el ingreso). La fuente dice «during and after», no solo «after». El nombre elegido puede inducir a pensar que solo aplica después del alta. Además, R8.1 pide coherencia con los valores existentes («párkinson», «amputación por debajo de la rodilla», «dolor lumbar»…), que son poblaciones, no procesos. «Rehabilitación tras un ingreso hospitalario» es un proceso, no una población. No es un error grave, pero conviene señalarlo.
- **Consecuencia potencial:** el usuario puede interpretar que el ejercicio no aplica durante el ingreso. La falta de coherencia con los valores existentes puede dificultar futuras agrupaciones (Q8).
- **Nivel de certeza:** media. La cita respalda la población; el nombre es una síntesis que omite «during» y no sigue el patrón de los valores existentes.
- **Recomendación:** el informe debería justificar por qué se elige «rehabilitación tras un ingreso hospitalario» y no «rehabilitación durante o después de un ingreso hospitalario» o similar. No propongo un nombre nuevo.
- **Prueba o evidencia que permitiría confirmarlo:** revisar los valores existentes de `especifica_de` en el catálogo completo (no lo tengo) para ver si hay otros procesos además de poblaciones.
- **¿Requiere decisión humana?:** sí. El desarrollador debe decidir si el nombre es aceptable o si se ajusta.

---

## DS-173 · La duración menor que «at least 5 minutes» se trata de forma incoherente entre los dos ejercicios de respiración

- **Ubicación:** `lote-09`, ejercicios 64 y 65, «Incidencias» y «Decisión pendiente del desarrollador».
- **Evidencia:** en el ejercicio 64, el informe dice: «Q5 sigue abierta y el protocolo dice que, entonces, cada adaptación se presenta con su justificación individual. Aquí: la rutina dura de 10 a 20 minutos y la fase de calma, un 20 %. El cambio va en `adaptaciones`, que el usuario lee, y no afecta a ninguna etiqueta». Y en la decisión: «La adaptación de la duración se acepta con su justificación individual (Q5)». En el ejercicio 65, el informe dice: «Diferencias (C3) y adaptaciones documentadas (C2): unos 3 minutos (C2; ver Incidencias del ejercicio 64)». Pero no hay una justificación individual para el ejercicio 65: remite al 64.
- **Explicación:** Q5 está abierta y el protocolo dice que, mientras siga abierta, «cada adaptación se presenta con su justificación individual». El ejercicio 64 tiene justificación individual (la fase de calma es un 20 % de la rutina). El ejercicio 65 no la tiene: remite al 64, pero la duración es distinta (3 minutos frente a 2 minutos) y la justificación podría no ser la misma. Además, el ejercicio 64 dice «se acepta con su justificación individual (Q5)», lo que sugiere que la aceptación es una decisión del desarrollador, pero el informe no cita una decisión explícita en el registro. El registro (P20) dice: «la dosis de los 2 tumbados pasa a la pauta verificada de Forth Valley», pero no menciona la duración de los ejercicios de respiración.
- **Consecuencia potencial:** la adaptación del ejercicio 65 no cumple la exigencia de justificación individual de Q5. La aceptación del ejercicio 64 no está respaldada por una decisión explícita en el registro.
- **Nivel de certeza:** alta en cuanto a la falta de justificación individual en el 65; media en cuanto a si la aceptación del 64 es una decisión del desarrollador o una interpretación de Claude.
- **Recomendación:** el informe debería dar una justificación individual para el ejercicio 65 (o remitir a una decisión explícita del desarrollador que cubra ambos casos). Y debería citar la decisión del registro que acepta la duración menor, si existe.
- **Prueba o evidencia que permitiría confirmarlo:** revisar el registro y las decisiones del desarrollador para ver si hay una decisión explícita sobre la duración de los ejercicios de respiración.
- **¿Requiere decisión humana?:** sí. El desarrollador debe decidir si acepta la duración menor en ambos ejercicios y con qué justificación.

---

## DS-174 · Error de hecho: el informe dice que la dosis de `extension-codo-toalla-tumbado` pasa a «De 2 a 10 veces», pero el catálogo ya tiene «De 2 a 10 veces»

- **Ubicación:** `lote-09`, ejercicio 62, «Propuesta de cambios»; `catalogo-lote09`, `extension-codo-toalla-tumbado`, campo `dosis`.
- **Evidencia:** el informe dice: «`dosis`: “De 5 a 10 veces” pasa a “De 2 a 10 veces”». El catálogo dice: `"dosis":"Mantén de 5 a 10 segundos. De 2 a 10 veces con cada brazo."`.
- **Explicación:** el catálogo ya tiene «De 2 a 10 veces». El informe describe un cambio que ya está aplicado. No es un error grave, pero es una incoherencia entre el informe y el catálogo: el informe presenta como propuesta algo que ya está en el catálogo. Puede deberse a que el catálogo se actualizó después de escribir el informe, pero el informe dice «Cambios aplicados el 2026-10-21 (P20)», lo que sugiere que el informe debería reflejar el estado final.
- **Consecuencia potencial:** confusión sobre qué cambios están aplicados y cuáles pendientes.
- **Nivel de certeza:** alta.
- **Recomendación:** el informe debería distinguir entre «cambio propuesto» y «cambio aplicado», o actualizar la propuesta para reflejar el estado actual.
- **Prueba o evidencia que permitiría confirmarlo:** comparar el catálogo anterior al lote (no lo tengo) con el actual.
- **¿Requiere decisión humana?:** no. Es una corrección editorial del informe.

---

## DS-175 · Error de hecho: el informe dice que `flexion-hombro-lado-tumbado` tiene `variante_de: elevacion-brazos-tumbado` (Royal Berkshire, otro folleto), pero el catálogo no permite verificar esa relación

- **Ubicación:** `lote-09`, ejercicio 63, «Otros campos»; `catalogo-lote09`, `flexion-hombro-lado-tumbado`, campo `variante_de`.
- **Evidencia:** el informe dice: «`variante_de`: `elevacion-brazos-tumbado` (Royal Berkshire, otro folleto)». El catálogo dice: `"variante_de":"elevacion-brazos-tumbado"`. Pero el catálogo no incluye el ejercicio `elevacion-brazos-tumbado`, así que no puedo verificar que sea de Royal Berkshire ni de otro folleto.
- **Explicación:** el informe afirma que `elevacion-brazos-tumbado` es de Royal Berkshire y de otro folleto, pero no lo puedo verificar con los documentos entregados. No digo que sea falso; digo que no está respaldado por lo que veo.
- **Consecuencia potencial:** si la relación de variante es incorrecta, el motor podría combinar dos ejercicios que no deberían ir juntos (R5.6).
- **Nivel de certeza:** baja (no puedo verificar).
- **Recomendación:** el informe debería citar la fuente de `elevacion-brazos-tumbado` o remitir al ejercicio en el catálogo completo.
- **Prueba o evidencia que permitiría confirmarlo:** revisar `elevacion-brazos-tumbado` en el catálogo completo.
- **¿Requiere decisión humana?:** no. Es una verificación documental.

---

## DS-176 · Error de hecho: el informe dice que `respiracion-tranquila-tumbado` tiene `variante_de: respiracion-abdominal-tumbado`, pero el catálogo no incluye ese ejercicio

- **Ubicación:** `lote-09`, ejercicio 65, «Otros campos»; `catalogo-lote09`, `respiracion-tranquila-tumbado`, campo `variante_de`.
- **Evidencia:** el informe dice: «`variante_de`: `respiracion-abdominal-tumbado`». El catálogo dice: `"variante_de":"respiracion-abdominal-tumbado"`. Pero el catálogo no incluye `respiracion-abdominal-tumbado`, así que no puedo verificar la relación.
- **Explicación:** igual que DS-175, no puedo verificar la relación de variante con los documentos entregados.
- **Consecuencia potencial:** si la relación es incorrecta, el motor podría combinar dos ejercicios que no deberían ir juntos (R5.6).
- **Nivel de certeza:** baja (no puedo verificar).
- **Recomendación:** el informe debería citar la fuente de `respiracion-abdominal-tumbado` o remitir al ejercicio en el catálogo completo.
- **Prueba o evidencia que permitiría confirmarlo:** revisar `respiracion-abdominal-tumbado` en el catálogo completo.
- **¿Requiere decisión humana?:** no. Es una verificación documental.

---

## Observaciones que no llegan a hallazgo (para no repetir)

- **`ambos_brazos` en `elevacion-brazo-sentado`:** el informe dice «un brazo cada vez, en series por lado (P9); el otro reposa». P9 dice que las series hechas con un brazo y después con el otro no cuentan. La fila es coherente.
- **`agarre` en `respiracion-abdominal-sentado`:** el informe dice «brazos en reposo». Q2 dice que el contacto sin prensión se marca `agarre: true` conservador. Pero aquí los brazos están en reposo, no en contacto con una superficie para estabilidad. La fila es coherente con §7.1 (reposo).
- **`inclinacion_tronco` en `juntar-omoplatos-sentado`:** el informe dice «D: “sit up as tall as you can”». Es una postura erguida, no una inclinación. La fila es coherente.
- **`flexion_profunda_rodilla` en `respiracion-tranquila-tumbado`:** el informe dice «con los pies planos en la cama, la rodilla no pasa de 90°». Es una inferencia razonable, pero no es D directa: la fuente no da el ángulo. Podría ser un caso de I, no de D. No lo elevo a hallazgo porque la conclusión (`false`) es la misma y la diferencia entre D e I no cambia la etiqueta en este caso. Pero conviene que el informe lo revise.
- **`especifica_de` en los ejercicios de NHS:** el informe dice «no la declara». Coherente con R8.1.

---

## Prioridad de los hallazgos

1. **DS-168** (R2.2 mal aplicada): afecta a la validez de la etiqueta actual y a la decisión pendiente.
2. **DS-171** (clasificación DG-6): afecta a cómo se trata una indicación de la fuente.
3. **DS-170** (DG-3 condición 2): afecta a la validez de las adaptaciones de dosis.
4. **DS-169** (contradicción nota/ilustración): afecta a R7.6 y R7.7.
5. **DS-173** (Q5): afecta a la coherencia entre los dos ejercicios de respiración.
6. **DS-172** (nombre de `especifica_de`): afecta a R8.1 y a la coherencia con los valores existentes.
7. **DS-174, DS-175, DS-176** (errores de hecho): correcciones editoriales o verificaciones documentales.