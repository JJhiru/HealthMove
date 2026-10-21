# Auditoría del lote 7 (consulta C5) — hallazgos DS-145 a DS-156

**Alcance y método.** He contrastado el informe `lote-07` con el catálogo entregado (`catalogo-lote07`), con el protocolo 1.0, con la especificación y con `evidencia-fuentes`. No he visto las fuentes originales ni las fotos: las citas del NHS que uso son las que aparecen en el informe y en `evidencia-fuentes`. No emito juicios clínicos. Los hallazgos van ordenados por gravedad y dependencia.

**Resumen.** El lote es internamente coherente en lo esencial: los 8 ejercicios aplican Q1, Q2 y Q3 de forma consistente entre sí, y las etiquetas del catálogo coinciden con las tablas del informe. Los problemas se concentran en (a) una contradicción entre la regla declarada y la regla aplicada en `sentarse-levantarse` (`inclinacion_tronco`), (b) una posible infravaloración de `flexion_amplia_cadera` en `marcha-sentado-sujetandose` frente a `estiramiento-tobillo-sentado`, (c) un `false` de `ambos_brazos` en `estiramiento-tobillo-sentado` que depende de una lectura singular/plural de la fuente, y (d) varios errores de hecho menores (nombre del ejercicio, cita de la fuente, formato de notas, coherencia de la cabecera).

---

## DS-145 · `sentarse-levantarse`: la regla «conservadora» se aplica a un `true` con evidencia D, contra R2.4 y contra la propia explicación del informe

- **Ubicación:** `lote-07`, §49 `sentarse-levantarse`, fila `inclinacion_tronco` de la tabla de exigencias; y §49 «Incidencia».
- **Evidencia:**
  - Fila: «`inclinacion_tronco` | true | D (foto B): más que leve | **conservadora** | TRUE | Q3 (P14), con su nota».
  - Incidencia: «`inclinacion_tronco` lleva evidencia D de la foto, pero la regla es «conservadora» porque el texto de la fuente dice lo contrario. Es el choque entre texto e imagen que P14 resolvió con R7.5.»
  - Protocolo R2.4: «Se anota en `notas_etiquetado` … con esta forma: `[conservadora] <exigencia>: <motivo>. Se cerraría con: <evidencia que falta>.`»
  - Protocolo R2.1: el `true` conservador se usa «cuando la evidencia es N o insuficiente».
  - Protocolo Q3 (resuelta): «Cuando el texto de la fuente («slightly») choca con su imagen (la foto B del NHS, calificada como D), se aplican R7.5 y R2.1: `true` conservador con su nota.»
- **Problema:** hay una contradicción triple.
  1. La propia fila declara evidencia **D** («más que leve»), no N ni insuficiente. R2.1 reserva el `true` conservador para N o insuficiente.
  2. La nota del catálogo (`catalogo-lote07`) sí lleva el prefijo `[conservadora]` y un «Se cerraría con: revisión profesional», lo que es coherente con R2.4 pero no con la evidencia D.
  3. La explicación del informe («la regla es conservadora porque el texto dice lo contrario») describe un caso de **conflicto texto/imagen**, no de falta de evidencia. R7.5 y Q3 hablan de aplicar R2.1 cuando la imagen no determina el requisito; aquí la imagen sí lo determina (D).
- **Consecuencia potencial:** la trazabilidad de la decisión queda ambigua: no se sabe si el `true` se sostiene por evidencia D (foto) o por conservadurismo (texto). Si en el futuro se revisa la foto o se corrige la nota, el criterio de reversión no está claro. Además, si se aplica el mismo criterio a otros ejercicios con texto «slightly» e imagen D, se podría generalizar un uso de `[conservadora]` que R2.4 no contempla.
- **Nivel de certeza:** alta (la contradicción está literalmente en el informe y en el catálogo).
- **Recomendación:** que el desarrollador decida si este caso es (a) `true` por evidencia D (foto) sin nota `[conservadora]`, o (b) `true` conservador con nota, y en ese caso se reformule la regla aplicada para que no contradiga R2.1. No propongo cuál.
- **Prueba que lo confirmaría:** revisar la foto B del NHS y el texto de P14 en `plan-cambios-q3-sentarse-levantarse.md` §6 (no lo tengo). Si la foto es D de una inclinación mayor que leve, la opción (a) es la coherente con R2.1.
- **¿Requiere decisión humana?:** sí. Decidir qué regla se aplica y si la nota `[conservadora]` se mantiene.

---

## DS-146 · `marcha-sentado-sujetandose`: `flexion_amplia_cadera: true` con evidencia D, mientras `estiramiento-tobillo-sentado` marca lo mismo con evidencia I y regla conservadora

- **Ubicación:** `lote-07`, §47 `marcha-sentado-sujetandose`, fila `flexion_amplia_cadera`; y §48 `estiramiento-tobillo-sentado`, misma fila.
- **Evidencia:**
  - §47: «`flexion_amplia_cadera` | true | D: subir la pierna con la rodilla doblada acerca el muslo al tronco | evidencia | TRUE».
  - §48: «`flexion_amplia_cadera` | true | I (foto A): el muslo estirado se eleva algo sobre el asiento | conservadora | TRUE».
  - Especificación §4, fila 13: `flexion_amplia_cadera` se marca si «muslo más cerca del tronco que al estar sentado».
- **Problema:** en `marcha-sentado-sujetandose` el informe califica la evidencia como **D** («subir la pierna con la rodilla doblada acerca el muslo al tronco»), pero la definición de §4 exige que el muslo esté **más cerca del tronco que al estar sentado**. Levantar la rodilla doblada estando sentado puede o no acercar el muslo al tronco más que en reposo; el informe no cita una foto o un ángulo que lo demuestre. En `estiramiento-tobillo-sentado`, un movimiento parecido (pierna estirada y elevada) se califica como **I** y conservadora. La diferencia de calificación entre dos ejercicios del mismo lote con movimientos análogos no está justificada en el informe.
- **Consecuencia potencial:** si la evidencia de §47 es en realidad I, la regla debería ser `conservadora` y la nota `[conservadora]` debería estar en `notas_etiquetado`. Hoy la nota de §47 no incluye `[conservadora]` para `flexion_amplia_cadera` (solo para `ambos_brazos`). La trazabilidad de la decisión queda inconsistente entre dos ejercicios del mismo lote.
- **Nivel de certeza:** media (la contradicción de calificación es clara; si la foto A de «Hip marching» muestra el muslo claramente más cerca del tronco, la D podría sostenerse, pero el informe no lo cita).
- **Recomendación:** que el desarrollador revise la foto A de «Hip marching» y decida si la evidencia es D o I. Si es I, aplicar R2.4 y añadir la nota.
- **Prueba que lo confirmaría:** la foto A de «Hip marching» (NHS Sitting exercises) y la foto A de «Ankle stretch», comparadas con la definición de §4.
- **¿Requiere decisión humana?:** sí. Decidir la calificación de evidencia y, si procede, la nota.

---

## DS-147 · `estiramiento-tobillo-sentado`: `ambos_brazos: false` se apoya en una lectura singular de «hold on to the side» que no está contrastada con la foto ni con la instrucción de HealthMove

- **Ubicación:** `lote-07`, §48 `estiramiento-tobillo-sentado`, fila `ambos_brazos`; y `catalogo-lote07`, instrucción 1 del ejercicio.
- **Evidencia:**
  - §48: «`ambos_brazos` | false | D: «hold on to the side», en singular: una mano | evidencia | FALSE | La otra queda libre».
  - §48, hechos: «D, «hold on to the side», en singular. Las fotos no muestran las manos.»
  - `catalogo-lote07`, instrucción: «Siéntate con la espalda recta y **sujeta el lado de la silla**.»
  - Protocolo R2.2: `false` solo con «(a) evidencia D de que la exigencia no aparece en ningún momento del ejercicio … o (b) una adaptación válida y aprobada».
  - Protocolo Q1 (resuelta): cuentan como `ambos_brazos` «el apoyo de las dos manos, el uso simultáneo de los dos brazos … y la alternancia continua de los dos brazos».
- **Problema:** el `false` se sostiene sobre una lectura gramatical («the side», singular) de una fuente que el propio informe reconoce que **no muestra las manos en las fotos**. La instrucción de HealthMove dice «sujeta el lado de la silla», que en español es ambiguo (puede ser un lado con una mano o los dos lados con las dos manos). No hay evidencia D de que la otra mano no se use; como mucho, hay un indicio (I) de que la fuente menciona un solo lado. R2.2 exige D o adaptación aprobada; R2.3 dice que «un N o un I nunca bastan para `false`».
- **Consecuencia potencial:** si la fuente permite o sugiere sujetarse con las dos manos (o si la instrucción de HealthMove se interpreta así), el `false` sería un falso negativo y el ejercicio se ofrecería a perfiles «solo puedo usar un brazo» sin que la etiqueta lo refleje. Es el mismo tipo de problema que Q1 resolvió para otros ejercicios, pero aquí se ha resuelto en sentido contrario sin justificar la diferencia.
- **Nivel de certeza:** media (la lectura singular es defendible, pero el informe no cita una foto que la confirme y la instrucción de HealthMove no es inequívoca).
- **Recomendación:** que el desarrollador decida si (a) se mantiene el `false` con la justificación de que la fuente solo menciona un lado y la instrucción de HealthMove lo refleja, o (b) se aplica Q1 y se marca `true` conservador con nota. No propongo cuál.
- **Prueba que lo confirmaría:** la foto A de «Ankle stretch» (¿se ve una o dos manos?) y el texto completo del apartado en la fuente.
- **¿Requiere decisión humana?:** sí. Decidir si el `false` se sostiene con la evidencia disponible.

---

## DS-148 · `marcha-sentado-sujetandose`: el nombre del ejercicio en el catálogo no coincide con el del informe

- **Ubicación:** `lote-07`, §47 «Identificación»; y `catalogo-lote07`, campo `nombre`.
- **Evidencia:**
  - Informe: «Nombre: Marcha en la silla, sujetándose».
  - Catálogo: `"nombre":"Marcha en la silla, sujetándote a ella"`.
- **Problema:** el informe y el catálogo no coinciden en el nombre. El informe dice que el ejercicio es «fiel» y que no hay cambios, pero el nombre del catálogo no es el que el informe transcribe.
- **Consecuencia potencial:** si el nombre del catálogo es el vigente, el informe no lo refleja; si el informe transcribe el nombre correcto, el catálogo tiene un nombre distinto. En cualquier caso, la trazabilidad entre informe y catálogo falla en un campo visible para el usuario.
- **Nivel de certeza:** alta (la discrepancia es literal).
- **Recomendación:** que el desarrollador confirme cuál es el nombre vigente y, si procede, corrija el informe o el catálogo.
- **Prueba que lo confirmaría:** `public/data/catalogo.json`, entrada `marcha-sentado-sujetandose`, campo `nombre`.
- **¿Requiere decisión humana?:** sí. Confirmar el nombre.

---

## DS-149 · `marcha-sentado-sujetandose`: la cita de la fuente en la fila `impacto` no aparece en el informe ni en `evidencia-fuentes`

- **Ubicación:** `lote-07`, §47, fila `impacto`.
- **Evidencia:** «`impacto` | false | D: «Place your foot down with control» | evidencia | FALSE».
- **Problema:** la cita «Place your foot down with control» no aparece en el resumen de pasos del informe (§47: «bajar el pie con control») ni en `evidencia-fuentes`. El informe resume la fuente con palabras propias, pero la fila de `impacto` cita entre comillas un texto que no se ha transcrito en ningún otro sitio del lote. No puedo verificar que sea literal.
- **Consecuencia potencial:** si la cita no es literal, la evidencia D de `impacto: false` no está respaldada por una cita verificable. Si es literal, el informe debería haberla incluido en el resumen de pasos.
- **Nivel de certeza:** media (la cita no aparece en los documentos entregados; no puedo afirmar que sea falsa, solo que no es verificable con lo que tengo).
- **Recomendación:** que el desarrollador confirme la cita con la fuente o la sustituya por el resumen de pasos que sí está en el informe.
- **Prueba que lo confirmaría:** el texto del apartado «Hip marching» en NHS Sitting exercises.
- **¿Requiere decisión humana?:** no (es una corrección de trazabilidad, no de etiqueta).

---

## DS-150 · `mini-sentadillas`: la nota `[conservadora]` de `flexion_profunda_rodilla` cita «as far as is comfortable», pero el informe no transcribe esa frase en el resumen de pasos

- **Ubicación:** `lote-07`, §50 `mini-sentadillas`, fila `flexion_profunda_rodilla` y propuesta de cambios; `catalogo-lote07`, `notas_etiquetado`.
- **Evidencia:**
  - Fila: «`flexion_profunda_rodilla` | true | N: el texto no fija el máximo («as far as is comfortable») | conservadora | TRUE».
  - Propuesta: «`[conservadora] flexion_profunda_rodilla: «as far as is comfortable» no limita la flexión. Se cerraría con: una fuente que fije el límite.`»
  - Resumen de pasos del informe: «doblar las rodillas despacio hasta donde resulte cómodo».
- **Problema:** la nota cita entre comillas «as far as is comfortable», pero el informe no transcribe esa frase literal en el resumen de pasos (lo resume como «hasta donde resulte cómodo»). La cita es plausible (coincide con el patrón de otras fuentes NHS), pero no es verificable con los documentos entregados. Además, la nota mezcla una cita en inglés con el resto en español, lo que puede ser correcto (cita literal) pero debería estar marcado como tal.
- **Consecuencia potencial:** menor. La nota es informativa y no visible al usuario. Pero si la cita no es literal, la nota induce a error sobre lo que dice la fuente.
- **Nivel de certeza:** baja (la cita es plausible; no puedo verificarla).
- **Recomendación:** que el desarrollador confirme la cita con la fuente o la reformule sin comillas.
- **Prueba que lo confirmaría:** el texto del apartado «Mini-squats» en NHS Strength exercises.
- **¿Requiere decisión humana?:** no.

---

## DS-151 · `elevacion-talones-apoyo`: la fila `agarre` cita «D (fotos): yemas apoyadas, sin prensión», pero el informe no describe las fotos en el apartado de hechos

- **Ubicación:** `lote-07`, §51 `elevacion-talones-apoyo`, fila `agarre`; y §51 «Hechos, inferencias e incertidumbres».
- **Evidencia:**
  - Fila: «`agarre` | true | D (fotos): yemas apoyadas, sin prensión (Q2) | conservadora | TRUE».
  - Hechos: «D (fotos), las yemas de los dedos se apoyan en el respaldo.»
- **Problema:** la fila califica la evidencia como **D** («yemas apoyadas, sin prensión»), pero la regla aplicada es **conservadora**. Según R2.1, el `true` conservador se usa cuando la evidencia es N o insuficiente; si la evidencia es D de que no hay prensión, la regla debería ser `evidencia` (o, si se aplica Q2, `conservadora` con la justificación de que la ausencia de prensión no demuestra ausencia de agarre). El informe no explica por qué una evidencia D lleva regla conservadora. Es el mismo patrón que DS-145, pero en `agarre` y con menor gravedad porque Q2 ya establece que el contacto sin prensión se marca conservador.
- **Consecuencia potencial:** la regla aplicada no se deduce de la evidencia declarada. Si se generaliza, otros ejercicios con evidencia D de «sin prensión» podrían llevar `[conservadora]` sin justificación.
- **Nivel de certeza:** media (la incoherencia es clara; la justificación podría estar en Q2, pero el informe no la cita en esta fila).
- **Recomendación:** que el desarrollador unifique el criterio: o la evidencia se califica como I (no se puede determinar la prensión) y la regla es conservadora, o se califica como D y la regla es `evidencia` con la nota de Q2.
- **Prueba que lo confirmaría:** las fotos A y B de «Calf raises» y la decisión P10.
- **¿Requiere decisión humana?:** sí. Unificar el criterio de calificación de `agarre` en los ejercicios de apoyo.

---

## DS-152 · `elevacion-lateral-pierna` y `extension-pierna-atras`: `flexion_profunda_rodilla: false` con evidencia D de «rodillas rectas» en la pierna que trabaja, pero sin evaluar la pierna de apoyo

- **Ubicación:** `lote-07`, §52 `elevacion-lateral-pierna`, fila `flexion_profunda_rodilla`; y §53 `extension-pierna-atras`, misma fila.
- **Evidencia:**
  - §52: «`flexion_profunda_rodilla` | false | D (foto B): rodillas rectas | evidencia | FALSE».
  - §53: «`flexion_profunda_rodilla` | false | D: «keeping it straight» | evidencia | FALSE».
- **Problema:** en ambos ejercicios, la evidencia D se refiere a la pierna que trabaja (la que se eleva o se extiende). El informe no evalúa explícitamente la pierna de apoyo, que soporta el peso y podría tener una flexión distinta. La definición de §4 («rodilla más de 90°») se aplica a cualquier rodilla en cualquier momento del ejercicio. Si la pierna de apoyo tiene una flexión leve (habitual al estar de pie con apoyo), el `false` podría no sostenerse con la evidencia citada.
- **Consecuencia potencial:** si la pierna de apoyo tiene flexión > 90° en algún momento, el `false` sería incorrecto. Es poco probable con las fotos descritas, pero el informe no lo verifica.
- **Nivel de certeza:** baja (las fotos probablemente muestran la pierna de apoyo recta, pero el informe no lo dice).
- **Recomendación:** que el desarrollador confirme que la pierna de apoyo también está recta en las fotos, o que el informe lo explicite.
- **Prueba que lo confirmaría:** las fotos B de «Sideways leg lift» y «Leg extension».
- **¿Requiere decisión humana?:** no (es una aclaración de trazabilidad).

---

## DS-153 · `inclinacion-lateral-de-pie`: `ambos_brazos: false` con evidencia D de «un brazo cada vez», pero la instrucción de HealthMove no aclara que el otro brazo reposa

- **Ubicación:** `lote-07`, §54 `inclinacion-lateral-de-pie`, fila `ambos_brazos`; y `catalogo-lote07`, instrucciones.
- **Evidencia:**
  - §54: «`ambos_brazos` | false | D: un brazo cada vez; el otro reposa a un lado (§7.1, P9) | evidencia | FALSE».
  - `catalogo-lote07`, instrucción 2: «Desliza un brazo por el costado hacia abajo hasta donde te resulte cómodo. Notarás el estiramiento en la cadera contraria.»
- **Problema:** la instrucción de HealthMove dice «desliza un brazo», pero no dice qué hace el otro. El informe asume que «el otro reposa a un lado» (§7.1, P9), lo cual es coherente con la fuente («brazos a los lados»), pero la instrucción de HealthMove no lo explicita. Si el usuario interpreta que debe mantener el otro brazo activo o elevado, la etiqueta `false` podría no reflejar la ejecución real.
- **Consecuencia potencial:** menor. La fuente y la instrucción son compatibles con `false`, pero la instrucción podría ser más clara. No es un error de etiqueta, sino de redacción.
- **Nivel de certeza:** media (la incoherencia entre la instrucción y la justificación de la etiqueta es clara; la etiqueta en sí es defendible).
- **Recomendación:** que el desarrollador valore si la instrucción debe aclarar que el otro brazo reposa a un lado. No propongo el texto.
- **Prueba que lo confirmaría:** la instrucción actual en `catalogo-lote07` y la fuente «Sideways bend».
- **¿Requiere decisión humana?:** sí. Decidir si se aclara la instrucción.

---

## DS-154 · `sentarse-levantarse`: `equilibrio_sin_apoyo: true` con evidencia D de «using your legs, not arms», pero la instrucción de HealthMove permite usar las manos como guía al sentarse

- **Ubicación:** `lote-07`, §49 `sentarse-levantarse`, fila `equilibrio_sin_apoyo`; y `catalogo-lote07`, instrucción 3.
- **Evidencia:**
  - §49: «`equilibrio_sin_apoyo` | true | D: de pie sin sujetarse a nada («using your legs, not arms») | evidencia | TRUE».
  - `catalogo-lote07`, instrucción 3: «Ya de pie, vuelve a sentarte despacio. Usa las manos solo como guía si lo necesitas.»
  - `evidencia-fuentes` §5: «La fuente pide no usar los brazos al levantarse; las manos, «solo como guía» al sentarse.»
- **Problema:** la etiqueta `equilibrio_sin_apoyo: true` se sostiene con la cita «using your legs, not arms», que se refiere al momento de levantarse. Pero la instrucción de HealthMove permite usar las manos como guía al sentarse. El informe no explica por qué ese uso de las manos al sentarse no afecta a `equilibrio_sin_apoyo`. La fuente dice «using your hands or arms just to guide you if possible» al sentarse, lo que podría interpretarse como un apoyo opcional. El informe no cita esa parte de la fuente en la fila.
- **Consecuencia potencial:** si el uso de las manos al sentarse cuenta como apoyo, `equilibrio_sin_apoyo` debería ser `false` o conservador. El informe no lo evalúa.
- **Nivel de certeza:** media (la cita de la fila es parcial; la fuente completa incluye el matiz de las manos al sentarse).
- **Recomendación:** que el desarrollador revise si el uso de las manos como guía al sentarse afecta a `equilibrio_sin_apoyo` y, si procede, añada la justificación en la fila.
- **Prueba que lo confirmaría:** el texto completo del apartado «Sit-to-stand» y la decisión sobre si «guía» cuenta como apoyo.
- **¿Requiere decisión humana?:** sí. Decidir si el matiz de las manos al sentarse afecta a la etiqueta.

---

## DS-155 · Coherencia de la cabecera del informe: el commit y el identificador git no son verificables con los documentos entregados

- **Ubicación:** `lote-07`, cabecera.
- **Evidencia:** «commit `11628133419394cdaa88c0baa3deeb49215f4a24`»; «Identificador git del catálogo: `439899e30b84570c0ea123a4de1b8119e9c30746`».
- **Problema:** no puedo verificar estos valores con los documentos entregados. El protocolo §10.2 los pide, pero no tengo acceso al repositorio. No es un error, sino una limitación de la auditoría.
- **Consecuencia potencial:** si los valores son incorrectos, la trazabilidad de la versión auditada falla.
- **Nivel de certeza:** baja (no puedo verificarlo).
- **Recomendación:** que el desarrollador confirme que los valores coinciden con `node scripts/auditoria.mjs cabecera` en el commit indicado.
- **Prueba que lo confirmaría:** ejecutar `node scripts/auditoria.mjs cabecera` en el commit `1162813`.
- **¿Requiere decisión humana?:** no (es una verificación).

---

## DS-156 · Coherencia entre el informe y el catálogo en las notas `[conservadora]`: el formato de R2.4 no se aplica de forma uniforme

- **Ubicación:** `catalogo-lote07`, `notas_etiquetado` de los 8 ejercicios; y `lote-07`, propuestas de cambios de §48 y §50.
- **Evidencia:**
  - R2.4: «`[conservadora] <exigencia>: <motivo>. Se cerraría con: <evidencia que falta>.`»
  - `marcha-sentado-sujetandose`: «[conservadora] ambos_brazos: apoyo bilateral (Q1). Se cerraría con: fuente de que basta una mano.» (cumple).
  - `estiramiento-tobillo-sentado`: «[conservadora] flexion_amplia_cadera: la pierna estirada y elevada sube algo el muslo. Se cerraría con: una imagen lateral de la cadera.» (cumple).
  - `sentarse-levantarse`: «[conservadora] inclinacion_tronco: el texto dice «slightly», pero la foto B de la fuente muestra más (Q3). Se cerraría con: revisión profesional.» (cumple el formato, pero la regla es discutible, ver DS-145).
  - `mini-sentadillas`: tres notas `[conservadora]` (flexion_profunda_rodilla, agarre, ambos_brazos), todas con formato correcto.
  - `elevacion-talones-apoyo`, `elevacion-lateral-pierna`, `extension-pierna-atras`: dos notas `[conservadora]` cada uno (agarre, ambos_brazos), con formato correcto.
  - `inclinacion-lateral-de-pie`: «De pie sin sujetarse.» (no hay notas `[conservadora]`, coherente con las etiquetas).
- **Problema:** el formato de R2.4 se cumple en general, pero hay dos casos que no encajan:
  1. `sentarse-levantarse` (DS-145): la nota es formalmente correcta pero la regla aplicada no se deduce de la evidencia D.
  2. `elevacion-talones-apoyo` (DS-151): la fila declara evidencia D pero regla conservadora, y la nota no explica por qué.
  Además, el informe dice en el resumen que «dos notas conservadoras pasan al formato de R2.4 (`estiramiento-tobillo-sentado` y `mini-sentadillas`)», pero no menciona que `sentarse-levantarse` ya tenía una nota `[conservadora]` (de P14) que no se ha revisado en este lote.
- **Consecuencia potencial:** la uniformidad del formato no garantiza la coherencia de la regla aplicada. El resumen del lote podría inducir a pensar que todas las notas `[conservadora]` están revisadas, cuando una de ellas (DS-145) tiene una regla discutible.
- **Nivel de certeza:** alta (la falta de uniformidad es verificable en el catálogo).
- **Recomendación:** que el desarrollador revise las notas `[conservadora]` de `sentarse-levantarse` y `elevacion-talones-apoyo` junto con DS-145 y DS-151, y que el resumen del lote mencione las notas que no se han tocado.
- **Prueba que lo confirmaría:** comparar las notas del catálogo con las propuestas del informe y con R2.4.
- **¿Requiere decisión humana?:** sí. Revisar las notas y el resumen.

---

## Observaciones finales

- **Coherencia entre ejercicios del mismo lote:** los 8 aplican Q1, Q2 y Q3 de forma consistente en lo esencial. Las diferencias que señalo (DS-146, DS-147) son de calificación de evidencia, no de regla.
- **Resultados finales:** los 8 quedan LISTO PARA APROBACIÓN DOCUMENTAL. Con los hallazgos DS-145, DS-146 y DS-147, al menos tres ejercicios (`sentarse-levantarse`, `marcha-sentado-sujetandose`, `estiramiento-tobillo-sentado`) tienen decisiones de etiqueta que no se sostienen sin una aclaración. No propongo cambiar el resultado, pero sí que el desarrollador los revise antes de aprobar.
- **Lecciones de C4 (DS-124 a DS-144):** no las repito. Los hallazgos de este lote son específicos de los 8 ejercicios y no reproducen los de C4.
- **Límites:** no he visto las fuentes originales ni las fotos. Las citas del NHS que uso son las del informe y `evidencia-fuentes`. No emito juicios clínicos. Las decisiones sobre etiquetas, notas y resultados son del desarrollador.