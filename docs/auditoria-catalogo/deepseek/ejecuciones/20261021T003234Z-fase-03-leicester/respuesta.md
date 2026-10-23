# Auditoría independiente · fase-03-leicester (consulta C4)

**Alcance y método.** He contrastado el informe `lote-06`, el `plan-leicester`, el `protocolo` 1.0, la `especificacion`, el `registro` y el catálogo de los 11 ejercicios. No he visto la fuente original; las citas de la fuente que aparecen en el informe y en el plan las trato como datos aportados por Claude, no como hechos verificados por mí. No emito juicios clínicos ni apruebo ejercicios.

**Resumen de gravedad.** Hay un problema estructural que afecta a los 11 resultados finales (DS-124) y varios errores de hecho y de aplicación de reglas que, en conjunto, hacen que el «LISTO PARA APROBACIÓN DOCUMENTAL» de los 11 ejercicios no se sostenga tal como está redactado. Los hallazgos más graves son DS-124, DS-125, DS-126, DS-127 y DS-128.

---

## DS-124 · El resultado final «LISTO PARA APROBACIÓN DOCUMENTAL» no se sostiene con el contenido del informe

- **Ubicación:** `lote-06`, «Decisión pendiente del desarrollador» de los 11 ejercicios (36 a 46) y «Resumen del lote».
- **Evidencia:** «los 11 quedan LISTO PARA APROBACIÓN DOCUMENTAL **una vez aplicadas sus propuestas**». Y, en cada ejercicio: «LISTO PARA APROBACIÓN DOCUMENTAL, con la propuesta de cambios aplicada».
- **Problema:** el resultado se condiciona a que se apliquen cambios que el propio informe no puede aplicar (no edita el catálogo) y que, además, incluyen cambios de etiquetas (`curl-biceps-sentado`, `brazo_sobre_hombro: false → true`) y adaptaciones que requieren aprobación (R2.6, principio 1). Un resultado «LISTO» que depende de cambios pendientes de aprobación no es un resultado del estado actual: es una previsión. El protocolo (§12, paso 9) pide que cada ejercicio termine con uno de los resultados de la skill; el informe no aclara si «LISTO» describe el estado actual o el estado tras aplicar el plan. Además, el plan `plan-leicester` dice explícitamente «plan propuesto, **no aprobado**» y «No sustituye la tabla de las 16 exigencias que exige R3.3 para cada versión adaptada».
- **Consecuencia:** el registro (`registro.md`) podría anotar 11 ejercicios como listos cuando en realidad dependen de decisiones no tomadas. Se pierde la distinción entre «auditoría terminada» y «cambios aplicados».
- **Certeza:** alta.
- **Recomendación:** que el desarrollador decida si el resultado debe expresarse como «LISTO PARA APROBACIÓN DOCUMENTAL **condicionado a** la aprobación del plan» o como «PENDIENTE DE DECISIÓN» mientras el plan no se apruebe. No propongo cuál; señalo la ambigüedad.
- **Prueba:** comparar el estado del catálogo (`borrador`, `adaptaciones: []` en 10 de 11) con el resultado declarado.
- **¿Requiere decisión humana?:** sí. Decidir el criterio de resultado cuando hay cambios pendientes.

---

## DS-125 · `curl-biceps-sentado`: el `true` de `brazo_sobre_hombro` no cumple R2.1 ni R2.4 tal como se registra

- **Ubicación:** `lote-06`, ejercicio 40, fila `brazo_sobre_hombro`; propuesta de cambios; CN-1.
- **Evidencia:** «D (foto 2): la mano llega por encima de la altura del hombro con el codo abajo; la definición dice "codo o mano" y el rótulo, "subir el brazo" (CN-1)» · Regla: «conservadora» · Resultado: «TRUE».
- **Problema:** hay una contradicción interna. La evidencia se califica **D** (directa) y, a la vez, la regla aplicada es **conservadora**. R2.1 permite `true` con D o I, o con `conservadora` cuando la evidencia es N o insuficiente. Si la evidencia es D, la regla debería ser `evidencia`, no `conservadora`. Si la regla es `conservadora`, la evidencia no puede ser D. El informe mezcla las dos. Además, la nota propuesta («[conservadora] brazo_sobre_hombro: la mano pasa del hombro al doblar el codo (CN-1). Se cerraría con: resolver CN-1.») cumple la forma de R2.4, pero el motivo no es una falta de evidencia: es una discrepancia entre la definición de la especificación (§4: «codo o mano por encima de la altura del hombro») y el rótulo de la interfaz (`opciones.js`: «subir el brazo por encima del hombro»). Eso es un CN (R1.4), no una incertidumbre de evidencia.
- **Consecuencia:** el `true` queda registrado con una regla que no le corresponde. Si CN-1 se resuelve a favor de la definición literal, el `true` es correcto por evidencia; si se resuelve a favor del rótulo, el `true` no se sostiene. Mientras tanto, el ejercicio pierde disponibilidad para el perfil `brazo_arriba` sin que la regla aplicada sea la adecuada.
- **Certeza:** alta (la contradicción D/conservadora es interna al informe).
- **Recomendación:** que el desarrollador decida si CN-1 se registra como caso no contemplado (R1.4) con valor provisional `false` (el actual) hasta resolverse, o si se acepta el `true` por evidencia D con la definición literal. No propongo la solución.
- **Prueba:** leer la fila y la nota; comprobar que la evidencia D y la regla `conservadora` no pueden coexistir según R2.1.
- **¿Requiere decisión humana?:** sí. Resolver CN-1 y decidir la regla aplicable.

---

## DS-126 · `estiramiento-isquiotibiales-sentado`: el `false` de `flexion_profunda_rodilla` se apoya en una instrucción propuesta, no en la fuente ni en una adaptación aprobada

- **Ubicación:** `lote-06`, ejercicio 38, fila `flexion_profunda_rodilla`; propuesta de cambios (instrucción 2).
- **Evidencia:** «D en la instrucción propuesta: la pierna que se estira va recta y la otra queda con el pie bajo la rodilla» · Regla: «adaptación» · Resultado: «FALSE». Y en «Hechos, inferencias e incertidumbres»: «En la versión con dos piernas, la fuente no dice dónde queda la otra: por eso se propone indicarlo».
- **Problema:** R2.2 solo permite `false` con (a) evidencia D de que la exigencia no aparece en ningún momento del ejercicio, o (b) una adaptación válida y aprobada según DG-3 que la elimine. Aquí la evidencia D es de una **instrucción que HealthMove propone añadir** («deja el otro pie apoyado bajo la rodilla»), no de la fuente ni de una adaptación ya aprobada. La adaptación «con cada pierna» está propuesta, no aprobada. Mientras no se apruebe, el `false` no tiene base según R2.2. El propio informe reconoce que «la fuente no dice dónde queda la otra»: eso es un N o un I, que según R2.3 nunca basta para `false`.
- **Consecuencia:** el `false` actual del catálogo queda sin respaldo documental hasta que se apruebe la adaptación y la instrucción. Si la adaptación no se aprueba, habría que aplicar R2.1 (conservadora) y el ejercicio pasaría a `true`, con impacto en disponibilidad para el perfil `rodilla`.
- **Certeza:** alta.
- **Recomendación:** que el desarrollador decida si la adaptación «con cada pierna» y la instrucción del otro pie se aprueban como una unidad (R3.1-R3.5) antes de mantener el `false`, o si el valor provisional debe ser `true` conservador con su nota.
- **Prueba:** comprobar que la instrucción 2 propuesta no está en el catálogo actual (`catalogo-leicester`: «Estira una pierna hacia delante sin bloquear la rodilla, con el talón en el suelo.») y que la adaptación está vacía.
- **¿Requiere decisión humana?:** sí. Aprobar o no la adaptación y la instrucción.

---

## DS-127 · `estiramiento-isquiotibiales-sentado`: la tabla R3.3 no evalúa la versión adaptada frente a todas las exigencias pertinentes

- **Ubicación:** `lote-06`, ejercicio 38, «Incidencia» y tabla de exigencias.
- **Evidencia:** «**Tabla de la versión adaptada (R3.3):** la tabla de arriba es ya la de la versión adaptada "con cada pierna". No añade ninguna exigencia (R3.5).»
- **Problema:** R3.3 exige «Nueva tabla completa de las 16 exigencias para la versión adaptada». La tabla del informe evalúa el ejercicio con la etiqueta actual, no la versión adaptada con la instrucción propuesta. La afirmación «no añade ninguna exigencia» es una conclusión, no una evaluación: no se comprueba, por ejemplo, si «deja el otro pie apoyado bajo la rodilla» introduce `flexion_profunda_rodilla` en la otra pierna (el pie bajo la rodilla es precisamente la posición que el criterio operativo del registro asocia a ~90°). El informe no lo evalúa; lo descarta.
- **Consecuencia:** la adaptación podría introducir una exigencia nueva sin evaluar (R3.5), y el `false` de `flexion_profunda_rodilla` podría ser incorrecto incluso con la adaptación aprobada.
- **Certeza:** media (depende de cómo se interprete «pie bajo la rodilla»; el registro lo asocia a ~90°, no a más de 90°, pero el informe no lo razona).
- **Recomendación:** que el desarrollador pida una tabla R3.3 explícita para la versión adaptada antes de aprobar la adaptación. No propongo el valor.
- **Prueba:** comparar la instrucción propuesta con el criterio operativo de `flexion_profunda_rodilla` del registro (ángulo entre muslo y pierna en vista lateral).
- **¿Requiere decisión humana?:** sí. Exigir o no la tabla R3.3 completa.

---

## DS-128 · `marcha-sentado-manos-cadera`: la nota «ante la duda» se mantiene con un `true` que el informe declara D

- **Ubicación:** `lote-06`, ejercicio 36, fila `flexion_amplia_cadera` e «Incidencias».
- **Evidencia:** fila: «D: levantar la pierna del asiento acerca el muslo al tronco más que sentado» · «La nota actual dice "ante la duda"; hay evidencia D». Incidencia: «La nota "ante la duda, se marca" puede quedarse: el `true` tiene evidencia D.»
- **Problema:** R2.4 exige que un `true` conservador se anote con la forma `[conservadora] <exigencia>: <motivo>. Se cerraría con: <evidencia que falta>.` Si el `true` tiene evidencia D, no es conservador y la nota «ante la duda, se marca» es incorrecta: describe una regla que ya no se aplica. El informe la deja «puede quedarse», lo que contradice R2.4 y la propia calificación D.
- **Consecuencia:** la nota del catálogo (`notas_etiquetado`: «…flexion_amplia_cadera (ante la duda, se marca)») queda desactualizada y puede inducir a error en una auditoría posterior.
- **Certeza:** alta.
- **Recomendación:** que el desarrollador decida si la nota se corrige (quitar «ante la duda») o se deja; el informe no lo propone como cambio.
- **Prueba:** leer `notas_etiquetado` del catálogo y la fila del informe.
- **¿Requiere decisión humana?:** sí. Corregir o no la nota.

---

## DS-129 · `inclinacion-lateral-brazo-arriba`: la aclaración «estirándote hacia arriba desde la cintura» puede cambiar el movimiento

- **Ubicación:** `lote-06`, ejercicio 37, propuesta de cambios (instrucción 3); `plan-leicester`, ejercicio 2.
- **Evidencia:** «Instrucción 3: "Inclínate con cuidado hacia la derecha, estirándote hacia arriba desde la cintura y manteniendo los dos glúteos apoyados en el asiento." (aclaración hacia la fuente, D).» Fuente citada: «Pull up out of your waist».
- **Problema:** el informe clasifica el cambio como **aclaración** (C3 → aclaración, protocolo 2.2: «si la fuente ya lo dice o lo muestra con evidencia D, es una aclaración»). Pero «Pull up out of your waist» es una instrucción de alargamiento activo que puede cambiar la ejecución (elongación antes de inclinar) frente a la instrucción actual («Inclínate con cuidado hacia la derecha, manteniendo los dos glúteos apoyados en el asiento»). No es solo una corrección de fidelidad: añade una acción. R3.1 exige que la ejecución que pide HealthMove sea una de las que permite la fuente; si el texto concede un rango, la imagen es un ejemplo. El informe no aporta la imagen ni un rango; solo el texto. No puedo verificar si la instrucción actual ya está dentro de lo que la fuente permite.
- **Consecuencia:** si el cambio altera el movimiento, sería una modificación (DG-5) y no una aclaración. El resultado «LISTO» no se sostendría.
- **Certeza:** media (depende de la interpretación de «Pull up out of your waist»; no he visto la imagen).
- **Recomendación:** que el desarrollador pida la prueba operativa de R3.1 (Q5) o la imagen de la fuente antes de clasificarlo como aclaración.
- **Prueba:** la imagen de la fuente y la comparación con la instrucción actual.
- **¿Requiere decisión humana?:** sí. Clasificar como aclaración o adaptación.

---

## DS-130 · `arquear-espalda-sentado`: la adaptación de las manos no se reevalúa con la instrucción propuesta y el `false` de `mano_detras` depende de una adaptación ya documentada, no de la fuente

- **Ubicación:** `lote-06`, ejercicio 45, fila `mano_detras`; `plan-leicester`, ejercicio 10.
- **Evidencia:** fila: «D: en HealthMove, solo en la cadera (adaptación documentada que evita la zona lumbar)» · Regla: «adaptación» · Resultado: «FALSE». Catálogo: `adaptaciones`: «La fuente permite apoyar las manos en la zona lumbar o en la cadera; aquí solo en la cadera para evitar mano_detras.»
- **Problema:** el `false` de `mano_detras` se apoya en una adaptación ya documentada (C2), lo que R2.2(b) permite. Pero el informe no comprueba que la adaptación siga siendo válida con la instrucción propuesta (que no cambia las manos) ni que la adaptación cumpla R3.1-R3.5. Además, la adaptación se justifica «para evitar mano_detras», lo que es una decisión de HealthMove que elimina una exigencia; R2.2(b) la admite, pero R3.3 exige evaluar la versión adaptada frente a todas las exigencias. El informe no lo hace.
- **Consecuencia:** el `false` podría ser correcto, pero la trazabilidad de la adaptación no está completa.
- **Certeza:** media.
- **Recomendación:** que el desarrollador pida la tabla R3.3 de la versión adaptada (manos solo en la cadera) antes de dar por bueno el `false`.
- **Prueba:** comparar la adaptación con R3.1-R3.5.
- **¿Requiere decisión humana?:** sí. Exigir o no la tabla R3.3.

---

## DS-131 · `boxeo-circulos-pecho`: la condición «if your shoulders hurt» se descarta como indicación sobre síntomas, pero el informe no verifica que la variante no introduzca una exigencia nueva

- **Ubicación:** `lote-06`, ejercicio 44, «Adaptaciones que deben documentarse» y fila `brazo_sobre_hombro`.
- **Evidencia:** «La condición "if your shoulders hurt" no se traslada al usuario: sería una indicación sobre síntomas (§8.4). Queda solo en `notas_etiquetado`.» Fila: «D: "level with your chest"» · Resultado: «FALSE».
- **Problema:** la decisión de no trasladar la condición es coherente con DG-6 (clase 2/3) y §8.4. Pero el informe no evalúa si la variante, al bajar los puños al pecho, cambia otras exigencias (por ejemplo, `ambos_brazos` o `agarre`). La tabla repite los valores de la base sin justificar por qué la altura del pecho no afecta a `brazo_sobre_hombro` más allá de la evidencia D. La fila dice «Es lo que la distingue de la base», lo que es correcto, pero no se comprueba que el resto de exigencias se mantengan.
- **Consecuencia:** menor; la variante está descrita en la fuente (DG-5 se cumple), pero la evaluación de exigencias no es independiente.
- **Certeza:** baja (no veo indicio de que cambie otra exigencia).
- **Recomendación:** que el desarrollador pida una evaluación explícita de las 16 exigencias para la variante, no una copia de la base.
- **Prueba:** comparar la instrucción de la variante con la de la base.
- **¿Requiere decisión humana?:** no (es una mejora de trazabilidad).

---

## DS-132 · `boxeo-circulos-alto`: la dosis propuesta «Mientras cuentas hasta 20 hacia delante y hasta 20 hacia atrás» no aclara si son círculos o tiempo, y el informe la clasifica como aclaración D

- **Ubicación:** `lote-06`, ejercicio 43, propuesta de cambios (`dosis`); `plan-leicester`, ejercicio 9.
- **Evidencia:** «`dosis`: "Mientras cuentas hasta 20 hacia delante y hasta 20 hacia atrás. Descansa y repite si puedes." (aclaración hacia la fuente, D).» Fuente: «circling your fists around each other forwards whilst you count to 20».
- **Problema:** la dosis actual («20 hacia delante y 20 hacia atrás») puede leerse como 20 círculos; la propuesta la sustituye por «mientras cuentas hasta 20», que es más fiel al texto. Pero el informe no aclara si «20» se refiere a conteo o a círculos; la fuente dice «whilst you count to 20», que es tiempo/conteo, no número de círculos. La propuesta es correcta en fidelidad, pero el informe no resuelve la ambigüedad de la dosis actual ni documenta el cambio como adaptación si el usuario pudiera interpretarlo como círculos. No es un error grave, pero la clasificación «aclaración D» es discutible: la fuente no da un número de círculos, y la propuesta conserva la vaguedad.
- **Consecuencia:** menor; la dosis podría seguir siendo ambigua para el usuario.
- **Certeza:** media.
- **Recomendación:** que el desarrollador decida si la dosis debe explicitar «cuenta hasta 20» sin prometer un número de círculos.
- **Prueba:** leer la dosis actual y la propuesta.
- **¿Requiere decisión humana?:** sí (menor).

---

## DS-133 · `toalla-separar-sentado`: la aclaración de dosis «De 2 a 3 series, según puedas» introduce una condición de esfuerzo que la fuente no da como exigencia

- **Ubicación:** `lote-06`, ejercicio 41, propuesta de cambios (`dosis`); `plan-leicester`, ejercicio 7.
- **Evidencia:** «`dosis`: "10 veces con cada posición de manos. De 2 a 3 series, según puedas." (aclaración hacia la fuente, D).» Fuente: «2 - 3 sets as able».
- **Problema:** la fuente dice «as able», que es una indicación de contingencia (clase 3, DG-6) o una condición de dosificación. El informe la incorpora a `dosis` como si fuera una exigencia. Según DG-6, una indicación de interrupción o contingencia no afecta a las etiquetas, pero aquí se incorpora al texto de dosis, que el usuario lee. No es un error de etiqueta, pero sí una posible confusión entre dosis y contingencia. El informe no lo señala.
- **Consecuencia:** menor; el usuario podría interpretar «según puedas» como una instrucción de esfuerzo.
- **Certeza:** media.
- **Recomendación:** que el desarrollador decida si «según puedas» se mantiene en `dosis` o se trata como contingencia (DG-6).
- **Prueba:** comparar con el ejemplo de DG-6 (`elevacion-talones-sin-apoyo`).
- **¿Requiere decisión humana?:** sí (menor).

---

## DS-134 · `curl-biceps-sentado`: la aclaración «botella de bebida u otro peso ligero» elimina «llena» sin justificar que la fuente no lo diga

- **Ubicación:** `lote-06`, ejercicio 40, propuesta de cambios (instrucción 1); `plan-leicester`, ejercicio 6.
- **Evidencia:** «Instrucción 1: "Siéntate cómodamente con una botella de bebida u otro peso ligero en una mano." (aclaración hacia la fuente).» Fuente: «Hold a light weight in one hand. This could be something simple like a drinks bottle».
- **Problema:** la instrucción actual dice «una botella llena u otro peso ligero». La fuente no dice «llena»; dice «a drinks bottle». La propuesta elimina «llena», lo que es correcto en fidelidad. Pero el informe no explica por qué «llena» era un problema: una botella vacía no es un peso ligero. La aclaración es razonable, pero la justificación es incompleta. No es un error grave.
- **Consecuencia:** menor; la instrucción propuesta es más fiel, pero el motivo no está documentado.
- **Certeza:** alta (la fuente no dice «llena»).
- **Recomendación:** que el desarrollador pida que la aclaración se justifique con la cita de la fuente.
- **Prueba:** leer la cita de la fuente.
- **¿Requiere decisión humana?:** no (mejora de trazabilidad).

---

## DS-135 · Errores de hecho y de recuento en el informe y el plan

- **Ubicación:** `lote-06`, cabecera y resumen; `plan-leicester`, resumen.
- **Evidencia y problemas:**
  1. **Recuento de ejercicios:** el plan dice «11 ejercicios» y el informe también. El catálogo tiene 11. Correcto.
  2. **«Los 11 quedan LISTO PARA APROBACIÓN DOCUMENTAL»:** el informe dice que los 11 quedan listos, pero `curl-biceps-sentado` depende de CN-1 (no resuelto) y `estiramiento-isquiotibiales-sentado` depende de una adaptación no aprobada. El recuento de «listos» no distingue los condicionados.
  3. **`especifica_de`:** el informe propone «usuarios de silla de ruedas» para los 11. La fuente (según el informe) dice «designed to allow you to exercise … whilst you maybe using a wheelchair. They can all be done in sitting in either a wheelchair, normal chair or whilst sitting on the edge of the bed». Eso respalda la población para el folleto, pero R8.1 exige que la fuente **declare** la población. La cita es una introducción común, no una declaración por ejercicio. El informe lo aplica a los 11 sin comprobar que cada ejercicio esté dentro del alcance de esa introducción. Es defendible, pero el informe no lo verifica ejercicio por ejercicio.
  4. **`marcha-sentado-manos-cadera`:** el informe dice «Estado inicial: `borrador`; lote 1, LISTO (anterior al protocolo)». El registro dice «LISTO PARA APROBACIÓN DOCUMENTAL». Coincide.
  5. **`boxeo-circulos-pecho`:** el informe dice «lote 4, LISTO tras añadir `especifica_de`». El registro dice «LISTO tras añadir `especifica_de`». Coincide.
  6. **`curl-biceps-sentado`:** el informe dice «lote 3, LISTO». El registro dice «LISTO PARA APROBACIÓN DOCUMENTAL». Coincide.
  7. **`toalla-separar-sentado`:** el informe dice «lote 3, REQUIERE CORRECCIONES». El registro dice «REQUIERE CORRECCIONES». Coincide.
  8. **`boxeo-sentado`:** el informe dice «lote 3, REQUIERE CORRECCIONES (anterior al protocolo); `ambos_brazos` ya corregido en P9». El registro dice «REQUIERE CORRECCIONES (criterio literal adoptado)». Hay una discrepancia menor: el registro no menciona P9.
  9. **`arquear-espalda-sentado`:** el informe dice «lote 4, REQUIERE CORRECCIONES (anterior al protocolo); `ambos_brazos` ya corregido en P9». El registro dice «REQUIERE CORRECCIONES». Coincide en lo esencial.
  10. **`movilidad-lumbar-sentado`:** el informe dice «lote 4, LISTO tras añadir `especifica_de`». El registro dice «LISTO tras añadir `especifica_de`». Coincide.
  11. **`circulos-hombros-sentado`:** el informe dice «lote 2, LISTO». El registro dice «LISTO PARA APROBACIÓN DOCUMENTAL». Coincide.
  12. **`inclinacion-lateral-brazo-arriba`:** el informe dice «lote 2, REQUIERE CORRECCIONES». El registro dice «REQUIERE CORRECCIONES». Coincide.
  13. **`estiramiento-isquiotibiales-sentado`:** el informe dice «lote 2, REQUIERE CORRECCIONES». El registro dice «REQUIERE CORRECCIONES». Coincide.
  14. **`marcha-sentado-manos-cadera`:** el informe dice «lote 1, LISTO». El registro dice «LISTO PARA APROBACIÓN DOCUMENTAL». Coincide.
  15. **`boxeo-circulos-alto`:** el informe dice «lote 3, LISTO». El registro dice «LISTO PARA APROBACIÓN DOCUMENTAL». Coincide.
- **Problema principal:** el informe no distingue entre «LISTO» y «LISTO condicionado». El recuento de 11 listos es engañoso.
- **Consecuencia:** el registro podría anotar 11 listos sin matices.
- **Certeza:** alta.
- **Recomendación:** que el desarrollador decida si el resultado debe matizarse por ejercicio.
- **Prueba:** comparar el resumen del informe con las incidencias de cada ejercicio.
- **¿Requiere decisión humana?:** sí.

---

## DS-136 · `fuente.especifica_de` = «usuarios de silla de ruedas»: respaldo desigual según el ejercicio

- **Ubicación:** `lote-06`, «Población declarada» y cada ejercicio; `plan-leicester`, «Declaración de población».
- **Evidencia:** «designed to allow you to exercise … whilst you maybe using a wheelchair. They can all be done in sitting in either a wheelchair, normal chair or whilst sitting on the edge of the bed». «Cubre los 11 ejercicios, todos del mismo folleto (P1, R8.1).»
- **Problema:** la cita es una introducción común que dice «maybe using a wheelchair» (puede que uses una silla de ruedas), no «usuarios de silla de ruedas» como población declarada. R8.1 exige que la fuente **declare** la población. «Maybe using» es una condición posible, no una declaración de población. El informe lo interpreta como población declarada para los 11. Es una inferencia, no un hecho D. Además, la fuente dice que se pueden hacer «in either a wheelchair, normal chair or whilst sitting on the edge of the bed», lo que amplía la población, no la restringe. El informe reconoce que «La fuente no los limita a ese grupo (R8.3)», pero aun así rellena `especifica_de` con «usuarios de silla de ruedas».
- **Consecuencia:** `especifica_de` podría no cumplir R8.1 si se interpreta estrictamente. El valor es defendible como «población a la que se dirige el folleto», pero el informe no distingue entre «dirigido a» y «declara como población».
- **Certeza:** media.
- **Recomendación:** que el desarrollador decida si «usuarios de silla de ruedas» cumple R8.1 o si debe registrarse como inferencia (I) y no como población declarada.
- **Prueba:** releer la cita y R8.1.
- **¿Requiere decisión humana?:** sí.

---

## DS-137 · `marcha-sentado-manos-cadera`: la adaptación «Se omite la versión más difícil de la fuente» no evalúa si la omisión cambia el propósito

- **Ubicación:** `lote-06`, ejercicio 36, propuesta de cambios; `plan-leicester`, ejercicio 1.
- **Evidencia:** «`adaptaciones`: añadir "Se omite la versión más difícil de la fuente, que añade el movimiento de los brazos."»
- **Problema:** la fuente ofrece una progresión con los brazos. HealthMove la omite. El informe lo documenta como adaptación, pero no evalúa si la omisión cambia el propósito del ejercicio (R3.1: conservar el movimiento y el propósito relevantes). La progresión es una variante, no el ejercicio base; omitirla es defendible, pero el informe no lo razona. Además, la adaptación se documenta en `adaptaciones`, que el usuario lee; el texto es correcto.
- **Consecuencia:** menor; la adaptación está documentada, pero la justificación es incompleta.
- **Certeza:** media.
- **Recomendación:** que el desarrollador pida la justificación de R3.1 para la omisión.
- **Prueba:** comparar la progresión con el ejercicio base.
- **¿Requiere decisión humana?:** no (mejora de trazabilidad).

---

## DS-138 · `inclinacion-lateral-brazo-arriba`: la adaptación «La fuente también permite apoyar la mano en el reposabrazos; aquí se apoya en la cadera» no evalúa R3.5 (exigencia nueva)

- **Ubicación:** `lote-06`, ejercicio 37, propuesta de cambios; `plan-leicester`, ejercicio 2.
- **Evidencia:** «No se vuelve al reposabrazos: habría que evaluar `agarre` y `peso_en_manos` (R3.5).»
- **Problema:** el informe reconoce que volver al reposabrazos introduciría un apoyo que habría que evaluar, y por eso no lo propone. Pero la adaptación actual (mano en la cadera) también es una decisión de HealthMove que elimina la opción del reposabrazos. El informe no evalúa si la mano en la cadera introduce alguna exigencia nueva (por ejemplo, `mano_detras` si la mano va detrás de la cadera). La instrucción actual dice «apoya la mano derecha en la cadera», que es un contacto, no un agarre. R3.5 exige evaluar antes de proponer. El informe no lo hace.
- **Consecuencia:** menor; la adaptación está documentada, pero la evaluación de R3.5 es incompleta.
- **Certeza:** media.
- **Recomendación:** que el desarrollador pida la evaluación de R3.5 para la mano en la cadera.
- **Prueba:** comparar la instrucción con las definiciones de `mano_detras` y `agarre`.
- **¿Requiere decisión humana?:** no (mejora de trazabilidad).

---

## DS-139 · `circulos-hombros-sentado`: el informe dice «solo cambia `especifica_de`», pero el plan no incluye la adaptación de las series

- **Ubicación:** `lote-06`, ejercicio 39; `plan-leicester`, ejercicio 4.
- **Evidencia:** «Las series ("___ sets") las rellena el profesional; HealthMove conserva la vaguedad (§5.1).» «Resultado: C1 en todo; solo cambia `especifica_de`.»
- **Problema:** la fuente tiene «___ sets» (un espacio para que el profesional rellene). HealthMove conserva la vaguedad, lo que es correcto según §5.1. Pero el informe no documenta en `adaptaciones` que la fuente deja las series abiertas; solo lo menciona en el informe. No es un error, pero la trazabilidad es incompleta.
- **Consecuencia:** menor.
- **Certeza:** alta.
- **Recomendación:** que el desarrollador decida si la vaguedad debe documentarse en `notas_etiquetado` o en `adaptaciones`.
- **Prueba:** leer la instrucción y la dosis del catálogo.
- **¿Requiere decisión humana?:** no (menor).

---

## DS-140 · `boxeo-sentado`: la adaptación «Se omite la variante con pesos ligeros de la fuente» está documentada, pero el informe no evalúa si la omisión cambia el propósito

- **Ubicación:** `lote-06`, ejercicio 42; `plan-leicester`, ejercicio 8.
- **Evidencia:** «Diferencias (C3) y adaptaciones documentadas (C2): se omite el "HINT!" con pesos (C2, ya documentado).»
- **Problema:** la adaptación está documentada en el catálogo (`adaptaciones`: «Se omite la variante con pesos ligeros de la fuente.»). El informe la acepta como C2 sin reevaluar R3.1-R3.5. La omisión de una progresión es defendible, pero el informe no lo razona.
- **Consecuencia:** menor.
- **Certeza:** media.
- **Recomendación:** que el desarrollador pida la justificación de R3.1 para la omisión.
- **Prueba:** comparar la progresión con el ejercicio base.
- **¿Requiere decisión humana?:** no (mejora de trazabilidad).

---

## DS-141 · `arquear-espalda-sentado`: la laguna de repeticiones se rellena con «5 veces» y se documenta como adaptación, pero el informe no evalúa si la fuente permite conservar la vaguedad

- **Ubicación:** `lote-06`, ejercicio 45; `plan-leicester`, ejercicio 10.
- **Evidencia:** «`adaptaciones`: añadir "La fuente no indica cuántas veces repetirlo; aquí se proponen 5."» «No se puede conservar la vaguedad: `dosis` necesita un valor.»
- **Problema:** §5.1 dice: «Si se puede conservar la vaguedad de la fuente sin inventar, se conserva, y la laguna va a `notas_etiquetado`.» El informe afirma que «`dosis` necesita un valor», pero no justifica por qué no se puede conservar la vaguedad (por ejemplo, «las veces que puedas» o «según la fuente, sin número»). La decisión de poner 5 es una adaptación, pero el informe no evalúa si era evitable.
- **Consecuencia:** menor; la adaptación está documentada, pero la justificación es incompleta.
- **Certeza:** media.
- **Recomendación:** que el desarrollador pida la justificación de por qué no se conserva la vaguedad.
- **Prueba:** comparar con el ejemplo de `circulos-hombros-sentado`, donde sí se conserva.
- **¿Requiere decisión humana?:** sí (menor).

---

## DS-142 · `estiramiento-isquiotibiales-sentado`: la adaptación «La fuente también permite apoyar el talón en un taburete o escalón bajo; aquí se apoya en el suelo» no evalúa si el cambio de recurso afecta a la compatibilidad

- **Ubicación:** `lote-06`, ejercicio 38; `plan-leicester`, ejercicio 3.
- **Evidencia:** «No se propone volver a la fuente: añadiría un recurso que el catálogo no tiene.»
- **Problema:** la fuente permite un taburete o escalón; HealthMove solo el suelo. El informe lo documenta como adaptación y justifica no volver a la fuente porque añadiría un recurso. Pero no evalúa si la adaptación cambia la exigencia `flexion_profunda_rodilla` (el talón en el suelo vs. en un taburete puede cambiar el ángulo de la rodilla). R3.3 exige evaluar la versión adaptada frente a todas las exigencias. El informe no lo hace.
- **Consecuencia:** el `false` de `flexion_profunda_rodilla` podría depender del recurso.
- **Certeza:** media.
- **Recomendación:** que el desarrollador pida la evaluación de R3.3 para la versión con el talón en el suelo.
- **Prueba:** comparar la instrucción con el criterio operativo de `flexion_profunda_rodilla`.
- **¿Requiere decisión humana?:** sí.

---

## DS-143 · `boxeo-circulos-pecho`: la nota `notas_etiquetado` del catálogo («Variante indicada en la propia fuente para quien tiene molestias en los hombros») no se actualiza con la decisión de no trasladar la condición

- **Ubicación:** `catalogo-leicester`, `boxeo-circulos-pecho`, `notas_etiquetado`; `lote-06`, ejercicio 44.
- **Evidencia:** catálogo: «Variante indicada en la propia fuente para quien tiene molestias en los hombros.» Informe: «La condición "if your shoulders hurt" no se traslada al usuario: sería una indicación sobre síntomas (§8.4). Queda solo en `notas_etiquetado`.»
- **Problema:** la nota actual del catálogo menciona la condición de síntomas, pero el informe no propone cambiarla. Si la condición no se traslada al usuario, la nota debería reflejar que es una decisión de HealthMove, no una indicación de la fuente. El informe dice que «queda solo en `notas_etiquetado`», pero no propone el texto.
- **Consecuencia:** menor; la nota es interna, pero podría inducir a error.
- **Certeza:** alta.
- **Recomendación:** que el desarrollador decida si la nota se actualiza.
- **Prueba:** leer la nota del catálogo y la decisión del informe.
- **¿Requiere decisión humana?:** sí (menor).

---

## DS-144 · `marcha-sentado-manos-cadera`: la instrucción actual dice «las manos apoyadas en la cadera», pero la fuente dice «hands resting on your hips»; el informe no evalúa si «apoyadas» introduce `peso_en_manos`

- **Ubicación:** `catalogo-leicester`, `marcha-sentado-manos-cadera`, instrucción 1; `lote-06`, ejercicio 36.
- **Evidencia:** catálogo: «Siéntate con la espalda recta y las manos apoyadas en la cadera, sin recostarte en el respaldo.» Fuente: «hands resting on your hips».
- **Problema:** «apoyadas» puede leerse como apoyo con carga, mientras que «resting» es reposo. El informe clasifica `peso_en_manos` como `false` con evidencia D («las manos descansan; el peso está en el asiento»), pero no evalúa si la instrucción de HealthMove («apoyadas») introduce una ambigüedad. R4.2 exige que la lectura de la función siga la instrucción que verá el usuario, contrastada con la fuente. El informe no lo hace.
- **Consecuencia:** menor; la etiqueta `false` es defendible, pero la instrucción podría mejorarse.
- **Certeza:** media.
- **Recomendación:** que el desarrollador decida si «apoyadas» debe cambiarse por «descansando» o similar.
- **Prueba:** comparar la instrucción con la fuente.
- **¿Requiere decisión humana?:** sí (menor).

---

## Resumen por ejercicio (aplicación de reglas)

| Ejercicio | Hallazgos que le afectan | ¿Alguna fila aplica mal una regla? |
|---|---|---|
| `marcha-sentado-manos-cadera` | DS-128, DS-137, DS-144 | Sí: nota conservadora con evidencia D (DS-128); instrucción «apoyadas» no evaluada (DS-144) |
| `inclinacion-lateral-brazo-arriba` | DS-129, DS-138 | Posible: aclaración que puede cambiar el movimiento (DS-129); R3.5 incompleta (DS-138) |
| `estiramiento-isquiotibiales-sentado` | DS-126, DS-127, DS-142 | Sí: `false` sin evidencia D ni adaptación aprobada (DS-126); R3.3 incompleta (DS-127, DS-142) |
| `circulos-hombros-sentado` | DS-139 | No (solo trazabilidad) |
| `curl-biceps-sentado` | DS-125, DS-134 | Sí: D + conservadora contradictorio (DS-125) |
| `toalla-separar-sentado` | DS-133 | No (dosis/contingencia) |
| `boxeo-sentado` | DS-140 | No (adaptación ya documentada) |
| `boxeo-circulos-alto` | DS-132 | No (dosis ambigua) |
| `boxeo-circulos-pecho` | DS-131, DS-143 | No (evaluación incompleta) |
| `arquear-espalda-sentado` | DS-130, DS-141 | Posible: `false` de `mano_detras` depende de adaptación no reevaluada (DS-130) |
| `movilidad-lumbar-sentado` | — | No |

---

## Nota final sobre independencia

Confirmo la hipótesis de que el informe contiene errores de aplicación de reglas (DS-125, DS-126, DS-128) y de clasificación (DS-129). Discrepo de la afirmación del informe de que los 11 quedan «LISTO PARA APROBACIÓN DOCUMENTAL»: al menos 3 ejercicios dependen de decisiones no tomadas (CN-1, adaptación de isquiotibiales, aclaración de inclinación lateral). No resuelvo esas decisiones; las señalo para que el desarrollador decida. No he consultado la fuente original; las citas las trato como datos aportados.