# Auditoría independiente · fase-05-lote08 (consulta C6)

Reviso el informe `lote-08` y los 4 ejercicios de `catalogo-lote08` con el protocolo 1.0, la especificación y el `registro`. No he consultado la fuente original (Age UK Devon): las citas y descripciones de fotos son de Claude y las trato como tales. No emito juicios clínicos ni apruebo ejercicios.

Antes de los hallazgos, una nota de método: la mayoría de las filas de las cuatro tablas son coherentes con R2.1/R2.2 y con DG-4/DG-6. Los problemas se concentran en (a) dos filas que mezclan «adaptación» con un `false` sin cumplir R2.2(b), (b) una fila de `pulgar-dedos` que aplica mal la regla conservadora, (c) la clasificación de la corrección de `banda-remo-sentado` como aclaración, y (d) un desajuste entre el informe y el catálogo en `pulgar-dedos`.

---

## DS-157 · `activacion-sentado`: `brazo_sobre_hombro` en `false` con regla «adaptación» sin adaptación aprobada

- **Ubicación:** `lote-08`, §57, tabla de exigencias, fila `brazo_sobre_hombro`.
- **Evidencia:** «D: "clap hands up to chest height" en la primera ronda; las rondas más altas se omiten (C2) | adaptación | FALSE».
- **Problema:** R2.2 solo permite `false` con (a) evidencia D de que la exigencia no aparece en ningún momento del ejercicio, o (b) una adaptación válida y aprobada según DG-3. Aquí la regla declarada es «adaptación», pero la adaptación documentada en el catálogo es «Se incluye solo la primera ronda, la más suave, del calentamiento de la fuente» (`adaptaciones`), que no está aprobada (los 4 siguen en `borrador` y el registro P19 dice «aplicado», no «aprobado»). Además, la propia fila reconoce que las rondas omitidas podrían contener la exigencia: el `false` se apoya en la omisión, no en evidencia D de ausencia. Es el patrón «D con regla conservadora» invertido: aquí es «adaptación con regla de evidencia» o «evidencia D sobre una versión recortada».
- **Consecuencia potencial:** si la adaptación no se aprueba, el `false` no tiene base. Si se aprueba, la fila debería citar la adaptación concreta y su prueba R3.1-R3.5, no «D». El motor ofrecería el ejercicio a perfiles con `brazo_arriba` excluido sin que la etiqueta esté justificada por la regla que dice aplicar.
- **Certeza:** alta (la incoherencia regla/evidencia es literal en la tabla).
- **Recomendación:** registrar la fila como `true` conservador (R2.1) mientras la adaptación no esté aprobada, o bien presentar la adaptación como tal con su tabla R3.3 y su prueba R3.1, y cambiar la regla de la fila a «adaptación aprobada» solo cuando lo esté. No propongo el valor: lo decide el desarrollador.
- **Prueba que lo confirmaría:** el plan de cambios aprobado de `activacion-sentado` con la adaptación «solo primera ronda» y su prueba R3.1; o la ausencia de esa aprobación en `registro`.
- **¿Requiere decisión humana?** Sí: aprobar o no la adaptación y, en consecuencia, la regla de la fila.

## DS-158 · `activacion-sentado`: `flexion_amplia_cadera` en `false` con la misma mezcla

- **Ubicación:** `lote-08`, §57, fila `flexion_amplia_cadera`.
- **Evidencia:** «D: los toques no levantan el muslo; la marcha es de la tercera ronda, omitida (C2) | adaptación | FALSE».
- **Problema:** mismo patrón que DS-157. La fila declara regla «adaptación» y valor `false`, pero la adaptación (omitir rondas) no está aprobada. La evidencia D se refiere a la versión recortada, no al ejercicio completo de la fuente. R2.2(b) exige adaptación «válida y aprobada».
- **Consecuencia potencial:** idéntica a DS-157, para `flexion_amplia_cadera`.
- **Certeza:** alta.
- **Recomendación:** agrupar con DS-157 en un solo plan de adaptación de `activacion-sentado`; mientras no se apruebe, `true` conservador o PENDIENTE DE DECISIÓN.
- **Prueba:** la misma que DS-157.
- **¿Requiere decisión humana?** Sí, la misma.

## DS-159 · `pulgar-dedos`: `brazo_sobre_hombro` en `true` con evidencia I y regla «conservadora», pero el motivo describe una adaptación no aprobada

- **Ubicación:** `lote-08`, §56, fila `brazo_sobre_hombro`; y `catalogo-lote08`, `notas_etiquetado` de `pulgar-dedos`.
- **Evidencia:** tabla: «I: el texto no fija la altura del brazo extendido, y la foto muestra la mano por encima del hombro | conservadora | TRUE». Nota: «[conservadora] brazo_sobre_hombro: la foto de la fuente muestra la mano por encima del hombro y el texto no fija la altura. Se cerraría con: precisar la altura en la instrucción, como adaptación (R3.1).»
- **Problema:** la regla conservadora (R2.1) permite el `true` con I o N, y la nota cumple el formato de R2.4. Hasta aquí es coherente. El problema es el «Se cerraría con: precisar la altura en la instrucción, como adaptación (R3.1)»: R3.1 es la prueba operativa de una adaptación, no un mecanismo para cerrar una nota conservadora. Cerrar la nota requeriría evidencia D de que la altura no supera el hombro, o una adaptación aprobada que fije la altura. La nota mezcla las dos cosas y sugiere que una adaptación (no aprobada) cerraría la incertidumbre. Además, la propia tabla reconoce que «el texto da el rango y la foto es un ejemplo (prueba de R3.1, Q5): la altura de la foto no es obligatoria, pero cabe»: si la altura «cabe», la incertidumbre no se cierra con precisar la instrucción, porque la fuente permite esa altura.
- **Consecuencia potencial:** la nota no describe una vía real de cierre; un lector futuro podría creer que basta una adaptación de redacción para quitar el `true`, cuando la fuente seguiría permitiendo la altura alta. Riesgo de que se proponga un `false` sin evidencia D (R2.3).
- **Certeza:** media-alta (la incoherencia entre «cabe» y «se cerraría con precisar la altura» es visible en el propio informe).
- **Recomendación:** reformular la nota para que el cierre sea «evidencia D de que la altura no supera el hombro en la ejecución que pide HealthMove», sin invocar R3.1 como cierre. No propongo cambiar el valor.
- **Prueba:** una instrucción de HealthMove que fije la altura por debajo del hombro y una fuente que lo respalde con D; o una revisión profesional que determine si la altura de la foto es exigible.
- **¿Requiere decisión humana?** Sí: redacción de la nota y, si se quiere, apertura de una cuestión sobre si la altura de la foto es parte del ejercicio.

## DS-160 · `pulgar-dedos`: la nota de `agarre` cambia de «precaución» a «evidencia D» sin que el informe lo justifique con la fuente

- **Ubicación:** `lote-08`, §56, fila `agarre` y «Propuesta de cambios»; `catalogo-lote08`, `notas_etiquetado`.
- **Evidencia:** tabla: «D: tocar el pulgar con cada dedo es cerrar la mano en parte (§4: "aunque sea en parte") | evidencia | TRUE | No es por precaución: la nota se corrige». Nota nueva: «Tocar el pulgar con cada dedo cierra la mano en parte: agarre (§4).»
- **Problema:** el cambio de «precaución» a «evidencia D» se apoya en una interpretación del gesto (tocar el pulgar con cada dedo) como «cerrar la mano en parte». La especificación §4 define `agarre` como «cerrar la mano, con o sin objeto, aunque sea en parte (incluye sujetarse a una silla y cerrar el puño)». Tocar la punta del pulgar con la punta de otro dedo no es, a primera vista, «cerrar la mano»: es un gesto de pinza entre dos dedos. El informe no cita la fuente para sostener que el gesto cierra la mano; lo deduce. Eso es una inferencia presentada como D. La nota anterior («por precaución») era más coherente con R7.4/R2.1.
- **Consecuencia potencial:** se pierde la trazabilidad de una decisión conservadora; si el gesto no cierra la mano, el `true` deja de tener nota `[conservadora]` y pasa a presentarse como hecho. Además, la nota nueva ya no lleva `[conservadora]`, lo que impide distinguirla de un `true` por evidencia.
- **Certeza:** media (depende de si «tocar el pulgar con cada dedo» se considera cerrar la mano; el informe no lo demuestra con cita).
- **Recomendación:** mantener la nota `[conservadora]` mientras no haya evidencia D de cierre, o citar la fuente (texto o foto) que muestre el cierre. No propongo el valor.
- **Prueba:** la foto de la fuente descrita con suficiente detalle para ver si los dedos se cierran o solo se tocan; o una definición operativa de «cerrar la mano en parte» en el protocolo.
- **¿Requiere decisión humana?** Sí: si se acepta la interpretación o se mantiene la nota conservadora.

## DS-161 · `banda-remo-sentado`: el cambio de nombre y de ilustración se presenta como corrección (R7.6) pero puede ser una modificación del ejercicio (DG-3/DG-5)

- **Ubicación:** `lote-08`, §58, «Identificación», «Otros campos» e «Incidencias»; `catalogo-lote08`, `nombre` e `instrucciones`.
- **Evidencia:** «Se llamaba "Remo con banda elástica"»; «El nombre es de HealthMove; la fuente lo llama "Upper Back Strengthener"»; «El id `banda-remo-sentado` no cambia, para no romper rutinas guardadas». Instrucciones actuales: «Súbela a la altura del abdomen estirándola hacia fuera. […] Llévala hacia el abdomen con los codos pegados al cuerpo».
- **Problema:** el informe clasifica el cambio como corrección de ilustración (R7.6) y aclara que el nombre es de HealthMove. Pero el nombre anterior («Remo con banda elástica») describía un movimiento distinto (remo hacia atrás) y el nuevo describe otro (abrir la banda al abdomen). Cambiar el nombre y la ilustración para que coincidan con la fuente es, en principio, una aclaración hacia la fuente (C3 → C1) si la fuente ya mostraba ese movimiento con evidencia D. Sin embargo, el informe no presenta la prueba de R3.1 (Q5) que demuestre que la ejecución que pide HealthMove es una de las que permite la fuente: solo dice que las fotos muestran «de frente» la banda subiendo y estirándose. Si la fuente permite ambas lecturas (remo y apertura), el cambio de nombre e ilustración elige una de ellas y podría ser una modificación (DG-5) más que una aclaración. El propio informe reconoce que el nombre es de HealthMove, lo que debilita la calificación de «fiel».
- **Consecuencia potencial:** si es modificación, el ejercicio cambia de propósito y debería tratarse como variante con fuente (R5.6) o registrarse como propuesta (R5.4), no como corrección de un ejercicio existente. El id se mantiene, lo que oculta el cambio de contenido a quien tenga rutinas guardadas.
- **Certeza:** media (depende de si la fuente permite el movimiento de remo; el informe no lo descarta explícitamente).
- **Recomendación:** documentar la prueba de R3.1 con la descripción de las tres fotos y decidir si el cambio es aclaración (C3→C1) o modificación (DG-5). Si es modificación, valorar si el id debe cambiar o si se registra como variante. No propongo la decisión.
- **Prueba:** descripción detallada de las tres fotos de la p. 13 y del texto «Upper Back Strengthener»; contraste con la instrucción anterior de HealthMove.
- **¿Requiere decisión humana?** Sí: calificar el cambio como aclaración o modificación.

## DS-162 · `banda-remo-sentado`: la instrucción «Llévala hacia el abdomen con los codos pegados al cuerpo» no está respaldada por la cita del informe

- **Ubicación:** `lote-08`, §58, «Evidencia de la fuente» y tabla, fila `brazo_sobre_hombro`; `catalogo-lote08`, `instrucciones[3]`.
- **Evidencia:** pasos resumidos: «agarrarla, subirla a la altura del abdomen y estirarla hacia fuera; volver al abdomen con los codos pegados; relajar». Instrucción de HealthMove: «Llévala hacia el abdomen con los codos pegados al cuerpo y relaja la tensión.»
- **Problema:** la instrucción de HealthMove mezcla dos acciones de la fuente («volver al abdomen» y «codos pegados») en una sola frase que puede leerse como «llevar la banda hacia el abdomen manteniendo los codos pegados», lo que no es exactamente lo que describe el resumen. No es una contradicción grave, pero es una diferencia de redacción que el informe no señala como C3 ni como adaptación. R4.2 pide que la lectura de la función siga la instrucción que verá el usuario, contrastada con la fuente; si la instrucción cambia el matiz, debería registrarse.
- **Consecuencia potencial:** el usuario podría ejecutar un movimiento ligeramente distinto del de la fuente sin que conste en `adaptaciones`. Bajo, pero afecta a la trazabilidad.
- **Certeza:** baja-media (depende de la interpretación del resumen; no tengo la fuente).
- **Recomendación:** contrastar la instrucción con el texto original y, si hay diferencia, documentarla como adaptación o ajustar la redacción.
- **Prueba:** texto literal de la fuente en la p. 13.
- **¿Requiere decisión humana?** No para el valor de las etiquetas; sí para la redacción de la instrucción.

## DS-163 · `elevar-rodar-hombros-sentado`: `ambos_brazos` en `false` con evidencia D, pero la fila no aplica la regla de P9 sobre alternancia

- **Ubicación:** `lote-08`, §55, fila `ambos_brazos`.
- **Evidencia:** «D: los brazos reposan (§7.1). Los hombros se mueven a la vez o por turnos, pero no se usan los brazos | evidencia | FALSE».
- **Problema:** P9 (Q1 resuelta) dice que cuentan como `ambos_brazos` «el uso de los dos brazos a la vez, también cuando una mano se apoya y el otro brazo trabaja, y la alternancia continua de los dos brazos». Aquí los hombros se mueven «a la vez o por turnos», pero los brazos reposan. La fila lo justifica con §7.1 («manos en reposo no cuentan»). Es coherente: los hombros no son brazos y las manos reposan. No obstante, la fila no cita explícitamente P9 ni la fila «Reposo» de §7.1, y la frase «los hombros se mueven a la vez o por turnos» podría invitar a aplicar la alternancia de P9. La conclusión es correcta, pero la justificación es incompleta.
- **Consecuencia potencial:** baja; el valor es correcto, pero la trazabilidad es débil y un revisor futuro podría dudar.
- **Certeza:** alta en el valor; media en la suficiencia de la justificación.
- **Recomendación:** añadir a la fila la cita de §7.1 («Reposo: la mano reposa… no se marca `ambos_brazos` por esa mano») y de P9 (la alternancia se refiere a brazos, no a hombros).
- **Prueba:** ninguna adicional; es de redacción.
- **¿Requiere decisión humana?** No.

## DS-164 · `pulgar-dedos`: el informe dice «la nota de `agarre` pasa a evidencia D» pero el catálogo conserva la nota antigua mezclada con la nueva

- **Ubicación:** `lote-08`, §56, «Propuesta de cambios»; `catalogo-lote08`, `notas_etiquetado` de `pulgar-dedos`.
- **Evidencia:** informe: «`notas_etiquetado`: "Cierre parcial de la mano: se marca agarre por precaución." pasa a "Tocar el pulgar con cada dedo cierra la mano en parte: agarre (§4). [conservadora] brazo_sobre_hombro: …"». Catálogo: la nota es exactamente la nueva, sin la antigua. Correcto.
- **Problema:** no hay error de hecho entre informe y catálogo en este punto. Lo señalo como verificación: la nota antigua se ha sustituido, no se ha conservado. Sin hallazgo.
- **Certeza:** alta.
- **Recomendación:** ninguna.
- **¿Requiere decisión humana?** No.

*(Este DS-164 se incluye solo para dejar constancia de que la comprobación se hizo y no hay discrepancia; si se prefiere, puede eliminarse del recuento.)*

## DS-165 · `pulgar-dedos`: el informe dice «la nota de `agarre` pasa a evidencia D» pero la fila de la tabla sigue diciendo «No es por precaución: la nota se corrige», sin citar la fuente

- **Ubicación:** `lote-08`, §56, fila `agarre`, columna «Motivo».
- **Evidencia:** «No es por precaución: la nota se corrige».
- **Problema:** el motivo no cita la fuente ni la definición de §4 más allá de «cerrar la mano en parte». Es una afirmación del auditor, no un hecho de la fuente. La distinción hecho/inferencia (protocolo §1.3) exige que una inferencia se escriba como tal. Aquí se presenta como hecho («No es por precaución»).
- **Consecuencia potencial:** se pierde la separación hecho/inferencia que el protocolo exige; un revisor podría aceptar el cambio sin evidencia.
- **Certeza:** alta (la frase es literal).
- **Recomendación:** reformular como inferencia («parece que tocar el pulgar con cada dedo cierra la mano en parte») o citar la fuente.
- **Prueba:** la foto de la fuente.
- **¿Requiere decisión humana?** No para el valor; sí para la redacción.

## DS-166 · `activacion-sentado`: `esfuerzo_cardio` en `true` con evidencia D, pero la adaptación «solo primera ronda» podría eliminar la subida de pulso

- **Ubicación:** `lote-08`, §57, fila `esfuerzo_cardio`; `catalogo-lote08`, `adaptaciones`.
- **Evidencia:** «D: "will increase your heart rate" | evidencia | TRUE». Adaptación: «Se incluye solo la primera ronda, la más suave, del calentamiento de la fuente.»
- **Problema:** la cita D («will increase your heart rate») se refiere al calentamiento completo de la fuente, no a la primera ronda que HealthMove incluye. Si la primera ronda es «la más suave», es posible que por sí sola no suba el pulso de forma clara. El informe no aporta evidencia D de que la primera ronda, sola, busque subir el pulso. Es una inferencia presentada como D. No es un problema clínico (no me corresponde), sino de coherencia entre la cita y la versión adaptada.
- **Consecuencia potencial:** el `true` podría estar sobrevalorado o infravalorado; en cualquier caso, la cita no respalda la versión que se ofrece.
- **Certeza:** media (depende de si la primera ronda incluye los toques de pie y el balanceo, que podrían subir el pulso; el informe no lo detalla).
- **Recomendación:** citar la parte de la fuente que se refiere a la primera ronda, o marcar la fila como conservadora con su nota.
- **Prueba:** texto literal de la fuente sobre la primera ronda y su efecto en el pulso.
- **¿Requiere decisión humana?** Sí, si se quiere ajustar la cita o la regla.

## DS-167 · Error de hecho menor: el informe dice «los 4 quedan en LISTO PARA APROBACIÓN DOCUMENTAL» y el registro P19 dice «23 ejercicios en LISTO», pero el registro de «Ejercicios auditados» no incluye los 4 del lote 8

- **Ubicación:** `registro`, tabla «Ejercicios auditados»; `lote-08`, «Resumen del lote»; `registro`, P19.
- **Evidencia:** la tabla de «Ejercicios auditados» del registro lista 34 filas y no incluye `elevar-rodar-hombros-sentado`, `pulgar-dedos`, `activacion-sentado` ni `banda-remo-sentado` con resultado del lote 8 (sí aparecen con resultados de lotes 3 y 4). P19 dice «Con este lote hay 23 ejercicios en LISTO PARA APROBACIÓN DOCUMENTAL».
- **Problema:** el registro no refleja el resultado del lote 8 en la tabla principal; solo en P19. La tabla dice «Auditados: 34 de 220», cifra que no cuadra con los 23 en LISTO ni con los 4 reauditados. Es un desajuste de mantenimiento, no de etiquetas.
- **Consecuencia potencial:** la trazabilidad del registro se degrada; un revisor futuro no verá el resultado del lote 8 en la tabla.
- **Certeza:** alta (la tabla es visible y no incluye los 4 con resultado del lote 8).
- **Recomendación:** actualizar la tabla de «Ejercicios auditados» con los 4 del lote 8 y su resultado, y revisar la cifra «34 de 220».
- **Prueba:** la propia tabla del registro.
- **¿Requiere decisión humana?** No para el valor; sí para el mantenimiento del registro.

---

## Respuestas directas a las tres preguntas

**1. ¿Alguna fila aplica mal una regla aprobada?**
Sí, en dos sentidos:
- **Mezcla regla/evidencia:** `activacion-sentado` tiene dos filas (`brazo_sobre_hombro`, `flexion_amplia_cadera`) con regla «adaptación» y valor `false` sin adaptación aprobada (DS-157, DS-158). Es el caso simétrico al «D con regla conservadora» de C4/C5: aquí es «adaptación con regla de evidencia».
- **Regla conservadora mal cerrada:** `pulgar-dedos` `brazo_sobre_hombro` es correcto en valor y regla, pero la nota invoca R3.1 como cierre (DS-159) y la fila de `agarre` presenta una inferencia como D (DS-160, DS-165).
- **Coherencia de P9:** `elevar-rodar-hombros-sentado` `ambos_brazos` es correcto, pero la justificación es incompleta (DS-163).
- **Coherencia de CN-1:** `pulgar-dedos` se añade a CN-1 como equivalente; la nota no menciona CN-1 explícitamente, pero la clase es la misma. No lo considero hallazgo separado.

**2. ¿Cambiar el nombre y la ilustración de `banda-remo-sentado` es aclaración o modificación?**
No puedo determinarlo con los documentos entregados. El informe lo presenta como corrección (R7.6) y aclara que el nombre es de HealthMove, pero no aporta la prueba de R3.1 (Q5) que demuestre que la ejecución que pide HealthMove es una de las que permite la fuente. Si la fuente permite el movimiento de remo, el cambio es modificación (DG-5); si solo permite la apertura, es aclaración (C3→C1). Ver DS-161. Requiere decisión humana.

**3. ¿Algún resultado final no se sostiene o hay errores de hecho?**
- El resultado «LISTO PARA APROBACIÓN DOCUMENTAL» de `activacion-sentado` no se sostiene mientras las dos filas con regla «adaptación» no tengan adaptación aprobada (DS-157, DS-158). Debería ser PENDIENTE DE DECISIÓN.
- El resultado de `pulgar-dedos` se sostiene en valor, pero la nota de `brazo_sobre_hombro` no describe una vía de cierre real (DS-159) y la de `agarre` pierde la marca conservadora sin evidencia D (DS-160).
- El resultado de `banda-remo-sentado` depende de la calificación aclaración/modificación (DS-161).
- Error de hecho menor: la tabla de «Ejercicios auditados» del registro no refleja el lote 8 (DS-167).
- No he encontrado errores de nombres, valores o notas entre el informe y `catalogo-lote08` más allá de los señalados. La comprobación de la nota de `agarre` de `pulgar-dedos` (DS-164) no arroja discrepancia.

## Resumen de gravedad y dependencia

| Orden | DS | Gravedad | Dependencia |
|---|---|---|---|
| 1 | DS-157, DS-158 | Alta | Bloquean el resultado de `activacion-sentado` |
| 2 | DS-161 | Media-alta | Bloquea la calificación de `banda-remo-sentado` |
| 3 | DS-160, DS-165 | Media | Afectan a la trazabilidad de `pulgar-dedos` |
| 4 | DS-159 | Media | Afecta a la nota de `pulgar-dedos` |
| 5 | DS-166 | Media-baja | Afecta a la cita de `esfuerzo_cardio` |
| 6 | DS-163 | Baja | Redacción de `elevar-rodar-hombros-sentado` |
| 7 | DS-167 | Baja | Mantenimiento del registro |
| — | DS-164 | Sin hallazgo | Verificación sin discrepancia |

No apruebo ningún ejercicio ni propongo valores nuevos. Las decisiones sobre adaptaciones, calificación aclaración/modificación y redacción de notas corresponden al desarrollador.