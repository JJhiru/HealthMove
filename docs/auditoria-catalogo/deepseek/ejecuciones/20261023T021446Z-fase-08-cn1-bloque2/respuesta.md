…con nota `[conservadora]`, no `false`. La propuesta no lo señala.
- **Certeza:** alta.
- **Recomendación:** aplicar R2.1 y R2.2: `true` conservador con nota, o D de ausencia si la fuente la permite.
- **Prueba:** releer `notas_etiquetado` de `elevacion-lateral-botella-tumbado` contra R2.2.
- **¿Requiere decisión humana?:** sí (aplicar DG-2 o mantener el `false` actual con justificación).

### DS-195 · `cuadriceps-lado-suelo` y `extension-cadera-boca-abajo` están en F con `false` y la propuesta no distingue «postura de apoyo» de «movimiento»

- **Ubicación:** `propuesta-cn1`, §2.F, filas `cuadriceps-lado-suelo` y `extension-cadera-boca-abajo`.
- **Evidencia:** `ejercicios-cn1` `cuadriceps-lado-suelo` instrucción 1: «Túmbate de lado con las piernas estiradas y la cabeza apoyada en el brazo». `extension-cadera-boca-abajo` instrucción 1: «Túmbate boca abajo con la frente apoyada sobre las manos». `propuesta-cn1` los pone en `false` y añade: «dejan el brazo por encima de la cabeza (en ángulo) **como postura de apoyo**, no como movimiento».
- **Problema:** la especificación §4 dice que una exigencia se marca si aparece «en **cualquier momento** del ejercicio (posición inicial, movimiento o vuelta)». La postura inicial cuenta. La propuesta introduce una distinción («postura de apoyo» vs «movimiento») que **no está en la especificación** y que, aplicada, dejaría en `false` dos ejercicios cuya postura inicial podría cumplir la definición literal. Es una regla nueva no aprobada.
- **Consecuencia:** si se aplica la distinción, se crea un criterio nuevo sin pasar por R1.4.4. Si no se aplica, los dos ejercicios deberían revisarse (posiblemente a `true` conservador o con D).
- **Certeza:** alta (la distinción no está en §4).
- **Recomendación:** no introducir la distinción «postura de apoyo» sin decisión explícita; si se quiere, registrarla como regla nueva en el protocolo.
- **Prueba:** comparar §4 de la especificación con §2.F de `propuesta-cn1`.
- **¿Requiere decisión humana?:** sí (crear o no la distinción).

### DS-196 · `elevar-brazo-boca-abajo` está en F con `true` y la propuesta no cita la nota del catálogo

- **Ubicación:** `propuesta-cn1`, §2.F, fila `elevar-brazo-boca-abajo`.
- **Evidencia:** `ejercicios-cn1` instrucción 1: «Túmbate boca abajo con la espalda recta y los brazos estirados hacia delante»; instrucción 3: «Levanta un brazo del suelo…». `propuesta-cn1` lo pone en `true` sin nota.
- **Problema:** el texto no dice hasta dónde sube el brazo; solo dice que se levanta del suelo. La propuesta lo pone en `true` sin explicar por qué (¿es A? ¿es F?). Si es F, la regla de F («se mide por el ángulo del brazo respecto al tronco») no está aprobada. Si es A, el texto no lo confirma. Es un `true` sin fundamento explícito en la propuesta.
- **Consecuencia:** la casilla F incluye un ejercicio cuyo `true` no se justifica con la cita.
- **Certeza:** media.
- **Recomendación:** explicitar el fundamento (A, F o conservador) o marcar la incertidumbre.
- **Prueba:** comparar la instrucción con la casilla F.
- **¿Requiere decisión humana?:** no (aclaración).

### DS-197 · `elevacion-pasiva-brazo-tumbado` está en F con `true` y la propuesta no distingue «el brazo lo sube la otra mano»

- **Ubicación:** `propuesta-cn1`, §2.F, fila `elevacion-pasiva-brazo-tumbado`.
- **Evidencia:** `ejercicios-cn1` instrucción 3: «Con la ayuda de esa mano, súbelo por encima de la cabeza hasta donde te resulte cómodo». `propuesta-cn1` lo pone en `true` y añade: «(el brazo lo sube la otra mano)».
- **Problema:** la propuesta incluye en §3.2 una regla («Que el brazo lo suba la otra mano no cambia nada») que **no está aprobada**. Es una decisión nueva sobre si el movimiento pasivo cuenta. La especificación §4 no distingue activo de pasivo. La propuesta la introduce sin pasar por R1.4.4.
- **Consecuencia:** si se aprueba, es una regla nueva; si no, el `true` de este ejercicio queda sin fundamento explícito.
- **Certeza:** alta (la regla no está en los documentos).
- **Recomendación:** registrar la regla como propuesta (R1.4) o justificar el `true` por otra vía (por ejemplo, la mano está por encima de la cabeza, que es D).
- **Prueba:** comparar §3.2 de `propuesta-cn1` con §4 de la especificación.
- **¿Requiere decisión humana?:** sí (crear o no la regla).

### DS-198 · `giro-tronco-sentado` está en E con `false` y la propuesta no cita la nota del catálogo

- **Ubicación:** `propuesta-cn1`, §2.E, fila `giro-tronco-sentado`.
- **Evidencia:** `ejercicios-cn1` instrucción 2: «Cruza los brazos sobre el pecho y lleva cada mano al hombro contrario». `notas_etiquetado`: «Las manos van a los hombros por delante: no es mano_detras». `propuesta-cn1` lo pone en E con `false`.
- **Problema:** el texto dice «lleva cada mano al hombro contrario», no «el codo a la altura del hombro». La clasificación en E es una inferencia (el codo sube al cruzar los brazos), no una cita. La propuesta no lo señala.
- **Consecuencia:** si E se decide «no cuenta», este ejercicio no debería cambiar por E; cambiaría por otra casilla (¿B/D?).
- **Certeza:** media.
- **Recomendación:** marcar la inferencia o moverlo a B/D.
- **Prueba:** comparar la instrucción con la casilla E.
- **¿Requiere decisión humana?:** no.

### DS-199 · `estiramiento-hombro-cruzado` está en E con `false` y la propuesta no cita la nota del catálogo

- **Ubicación:** `propuesta-cn1`, §2.E, fila `estiramiento-hombro-cruzado`.
- **Evidencia:** `ejercicios-cn1` instrucción 2: «Pon una mano sobre el hombro contrario con el codo pegado al pecho». `propuesta-cn1` lo pone en E con `false`.
- **Problema:** el texto dice «el codo pegado al pecho», no «el codo a la altura del hombro». La clasificación en E es una inferencia (el codo sube al llevar la mano al hombro contrario), no una cita. La propuesta no lo señala.
- **Consecuencia:** mismo riesgo que DS-198.
- **Certeza:** media.
- **Recomendación:** marcar la inferencia o moverlo a B/D.
- **Prueba:** comparar la instrucción con la casilla E.
- **¿Requiere decisión humana?:** no.

### DS-200 · `banda-curl-sentado`, `flexion-codo-tumbado`, `banda-flexion-codo-tumbado` y `talones-flexion-codo-sentado` están en B con `false` y la propuesta no cita la nota del catálogo

- **Ubicación:** `propuesta-cn1`, §2.B, filas de los cuatro ejercicios.
- **Evidencia:** `ejercicios-cn1`:
  - `banda-curl-sentado` instrucción 3: «Sube los puños hacia los hombros…».
  - `flexion-codo-tumbado` instrucción 2: «Dobla el codo llevando la mano hacia el hombro…».
  - `banda-flexion-codo-tumbado` instrucción 3: «Dobla el codo contra la banda y vuelve a estirarlo».
  - `talones-flexion-codo-sentado` instrucción 2: «A la vez, dobla el codo del brazo contrario».
- **Problema:** los cuatro están en `false` sin nota `[conservadora]` y sin D de ausencia. Según R2.2, un `false` sin D no está justificado. La propuesta los pone en B («incoherente») pero no aplica la regla asimétrica: los deja en `false` a la espera de auditar su fuente. Eso es correcto como valor provisional (no se cambia sin auditar), pero la propuesta no lo dice explícitamente: parece que los clasifica como «deberían ser `true`» sin advertir que su `false` actual ya incumple R2.2.
- **Consecuencia:** si se decide B «cuenta», los cuatro pasan a `true` al auditarse; si se decide B «no cuenta», su `false` actual queda justificado por la nueva regla, no por D. La propuesta no distingue.
- **Certeza:** alta.
- **Recomendación:** añadir a §2.B una nota: «Los cuatro `false` actuales no tienen D de ausencia; su valor provisional se mantiene hasta auditar la fuente, pero no están justificados por R2.2».
- **Prueba:** comparar `notas_etiquetado` de los cuatro con R2.2.
- **¿Requiere decisión humana?:** no (aclaración).

### DS-201 · `press-encima-cabeza-sentado` y `elevacion-brazos-tumbado` están en A con `true` y la propuesta no cita la nota del catálogo

- **Ubicación:** `propuesta-cn1`, §2.A, filas `press-encima-cabeza-sentado` y `elevacion-brazos-tumbado`.
- **Evidencia:** `ejercicios-cn1`:
  - `press-encima-cabeza-sentado` instrucción 2: «Empuja los brazos hacia arriba hasta estirar los codos…».
  - `elevacion-brazos-tumbado` instrucción 2: «Sube un brazo por encima de la cabeza».
- **Problema:** los dos están en `true` sin nota `[conservadora]` y sin D explícita en la propuesta. En `press-encima-cabeza-sentado`, el texto dice «hacia arriba hasta estirar los codos», que no fija la altura; en `elevacion-brazos-tumbado`, «por encima de la cabeza» sí es D. La propuesta los agrupa en A sin distinguir. Es un problema menor, pero afecta a la trazabilidad de R2.4.
- **Consecuencia:** si se auditan, `press-encima-cabeza-sentado` podría necesitar nota `[conservadora]` si la fuente no fija la altura.
- **Certeza:** media.
- **Recomendación:** distinguir A con D de A con I/N.
- **Prueba:** comparar las instrucciones con la casilla A.
- **¿Requiere decisión humana?:** no.

---

## 3. Huecos de la redacción del apartado 3

### DS-202 · El apartado 3 no decide qué pasa con los casos que no encajan en A, B, C, D, E o F

- **Ubicación:** `propuesta-cn1`, §3.
- **Evidencia:** §3 propone una definición con cuatro puntos (A, F, C/E, B/D). No dice qué hacer con casos que no encajan en ninguno, por ejemplo:
  - brazos horizontales mantenidos (`estiramiento-espalda-alta-sentado`, DS-188);
  - «casi la altura» (`banda-elevaciones-laterales-sentado`, DS-189);
  - «empieza a la altura y sube» (`deslizar-toalla-pared`, DS-186);
  - «estira el brazo hacia delante» tumbado de lado (`respiracion-lado-brazo-adelante`, DS-187).
- **Problema:** la definición de §3 no es exhaustiva. Los casos que no encajan quedan sin decidir. R1.4 exige registrar los casos nuevos en «Casos no contemplados»; la propuesta no lo hace.
- **Consecuencia:** si se aprueba §3 tal cual, los casos no cubiertos seguirán sin criterio y volverán a aparecer como CN.
- **Certeza:** alta.
- **Recomendación:** añadir a §3 un punto 5: «Los casos que no encajan en A-F se registran como CN y se resuelven por las reglas generales (DG-2, DG-7)».
- **Prueba:** comparar §3 con los casos de §2.
- **¿Requiere decisión humana?:** sí (completar la definición).

### DS-203 · El apartado 3 no define «el brazo se separa del tronco más allá de la horizontal» (A)

- **Ubicación:** `propuesta-cn1`, §3.1.
- **Evidencia:** «**(A)** el brazo se separa del tronco más allá de la horizontal, sea hacia delante, hacia el lado o por encima de la cabeza».
- **Problema:** «más allá de la horizontal» es un umbral nuevo. La especificación §4 no lo usa; habla de «codo o mano por encima de la altura del hombro». R7.8 prohíbe inventar umbrales numéricos, pero «la horizontal» es un umbral geométrico. Además, «la horizontal» respecto a qué: ¿el hombro? ¿el tronco? ¿el suelo? La frase admite dos lecturas.
- **Consecuencia:** si se aprueba, es una regla nueva que sustituye la definición literal de §4 sin pasar por R1.4.4.
- **Certeza:** alta.
- **Recomendación:** o se mantiene la definición literal de §4, o se registra la nueva como regla aprobada con su justificación.
- **Prueba:** comparar §3.1 con §4 de la especificación.
- **¿Requiere decisión humana?:** sí.

### DS-204 · El apartado 3 no define «se mide igual, por el ángulo del brazo respecto al tronco, como si la persona estuviera de pie» (F)

- **Ubicación:** `propuesta-cn1`, §3.2.
- **Evidencia:** «**(F)** tumbado o boca abajo, se mide igual, por el ángulo del brazo respecto al tronco, como si la persona estuviera de pie».
- **Problema:** «como si la persona estuviera de pie» es una ficción geométrica que no está definida. ¿Qué ángulo? ¿Cómo se proyecta? ¿Qué pasa con el brazo apoyado en la cabeza (`cuadriceps-lado-suelo`)? La frase admite dos lecturas y no es reproducible sin una convención.
- **Consecuencia:** si se aprueba, cada auditor tendrá que inventar la proyección, lo que contradice R7.2 («no se inventan ángulos»).
- **Certeza:** alta.
- **Recomendación:** o se define con precisión (y se revisa con un profesional si hace falta), o se deja como CN.
- **Prueba:** intentar aplicar F a `cuadriceps-lado-suelo` y `extension-cadera-boca-abajo` sin inventar.
- **¿Requiere decisión humana?:** sí.

### DS-205 · El apartado 3 no dice qué pasa con la postura inicial y de apoyo

- **Ubicación:** `propuesta-cn1`, §3.
- **Evidencia:** §3 dice «en cualquier momento del ejercicio (también en la postura de partida o de apoyo)», pero luego, en §2.F, trata `cuadriceps-lado-suelo` y `extension-cadera-boca-abajo` como «postura de apoyo» y los deja en `false`. Hay contradicción interna.
- **Problema:** §3 incluye la postura de partida; §2.F la excluye para dos ejercicios. La propuesta no resuelve la contradicción.
- **Consecuencia:** si se aprueba §3, los dos ejercicios de F deberían revisarse; si se aprueba §2.F, §3 sobra.
- **Certeza:** alta.
- **Recomendación:** unificar: o la postura de partida cuenta siempre, o se define cuándo no.
- **Prueba:** comparar §3 con §2.F.
- **¿Requiere decisión humana?:** sí.

### DS-206 · El apartado 3 no dice qué pasa con el movimiento pasivo

- **Ubicación:** `propuesta-cn1`, §3.2.
- **Evidencia:** «Que el brazo lo suba la otra mano no cambia nada».
- **Problema:** es una regla nueva (DS-197) que no está justificada en §3 ni en el protocolo. La especificación §4 no distingue activo de pasivo.
- **Consecuencia:** si se aprueba, es una regla nueva; si no, `elevacion-pasiva-brazo-tumbado` queda sin fundamento.
- **Certeza:** alta.
- **Recomendación:** registrar la regla como propuesta (R1.4) o justificarla.
- **Prueba:** comparar §3.2 con §4 de la especificación.
- **¿Requiere decisión humana?:** sí.

### DS-207 · El apartado 3 no dice qué pasa con «casi la altura» y «a la altura»

- **Ubicación:** `propuesta-cn1`, §3.3.
- **Evidencia:** «**(C y E)** "hasta la altura del hombro" o "el codo a la altura del hombro": **[elegir]** cuenta / no cuenta».
- **Problema:** la casilla C/E no distingue «hasta la altura» de «a la altura» (DS-188) ni de «casi la altura» (DS-189). Son tres expresiones distintas que la propuesta agrupa.
- **Consecuencia:** si se decide C/E, no se sabe si afecta a las tres o solo a una.
- **Certeza:** alta.
- **Recomendación:** separar las tres expresiones o decidir explícitamente que se agrupan.
- **Prueba:** comparar §3.3 con §2.C.
- **¿Requiere decisión humana?:** sí.

### DS-208 · El apartado 3 no dice qué pasa con los ejercicios publicados

- **Ubicación:** `propuesta-cn1`, §3 y §4.
- **Evidencia:** §4 dice «B y D "no cuenta" → `curl-biceps-sentado` vuelve a `false`, y `boxeo-circulos-alto` y `pulgar-dedos` se revisan por la altura del codo. **Los tres están publicados**».
- **Problema:** la propuesta advierte que los tres están publicados, pero no dice qué implica eso: ¿se revierte P16? ¿Se cambia la disponibilidad real? ¿Se necesita una decisión explícita del desarrollador? El protocolo R2.6 exige un plan con impacto en disponibilidad antes de cambiar etiquetas; la propuesta no lo incluye.
- **Consecuencia:** si se aprueba B/D «no cuenta», se cambia la disponibilidad real de tres ejercicios publicados sin plan de impacto.
- **Certeza:** alta.
- **Recomendación:** añadir a §4 el impacto en disponibilidad (R9.1) y la nota de que revierte P16.
- **Prueba:** comparar §4 con R2.6 y R9.1.
- **¿Requiere decisión humana?:** sí.

### DS-209 · El apartado 3 no dice qué pasa con los ejercicios en `borrador`

- **Ubicación:** `propuesta-cn1`, §4.
- **Evidencia:** §4 dice «Ninguno publicado» para F, C/E y B/D «cuenta», pero no explica qué implica: los ejercicios en `borrador` no se usan por el motor (especificación §7.6), así que su cambio no afecta a la disponibilidad real.
- **Problema:** la propuesta no distingue el impacto de cambiar un `borrador` (sin efecto en disponibilidad real) del de cambiar un publicado (con efecto). Es una omisión de trazabilidad.
- **Consecuencia:** el desarrollador podría pensar que todos los cambios son igual de urgentes.
- **Certeza:** alta.
- **Recomendación:** añadir una columna «impacto en disponibilidad real» a §4.
- **Prueba:** comparar §4 con R9.2.
- **¿Requiere decisión humana?:** no (aclaración).

### DS-210 · El apartado 3 no dice qué pasa con la opción del perfil

- **Ubicación:** `propuesta-cn1`, §3.
- **Evidencia:** «Con eso, el texto de la opción del perfil puede seguir siendo "levantar el brazo por encima del hombro", que se entiende, y la definición técnica cubre los casos de la tabla».
- **Problema:** la propuesta asume que la opción puede seguir igual, pero si la definición técnica incluye B/D (mano por encima por flexión de codo), la opción («levantar el brazo») no describe lo que el filtro hace. Es una discrepancia entre interfaz y etiqueta que la propuesta no resuelve. Q8 está abierta.
- **Consecuencia:** el usuario que marca «me cuesta levantar el brazo» podría recibir ejercicios de curl, que no levantan el brazo. Es un problema de interfaz, no de etiqueta, pero la propuesta no lo señala.
- **Certeza:** alta.
- **Recomendación:** registrar la discrepancia como Q8 o como CN.
- **Prueba:** comparar §3 con `opciones-js` y Q8.
- **¿Requiere decisión humana?:** sí (interfaz).

---

## 4. Ejercicios de `ejercicios-cn1` que cambiarían de valor con la respuesta al punto 1

**Regla asimétrica recordada:** un `false` solo con evidencia D (R2.2). Un `true` puede ser conservador (R2.1). Los cambios que siguen son **propuestas**, no aplicaciones.

### 4.1. Si C y E se deciden «no cuenta» (coherente con la definición literal)

Cambiarían a `false` **solo si hay D de que el brazo no supera la altura del hombro**:

| Ejercicio | Valor actual | ¿Hay D? | Cambio propuesto |
|---|---|---|---|
| `elevaciones-laterales-botella` | `false` | El texto dice «hasta la altura»; no hay D de que no supere. | Se mantiene `false` solo si se acepta «hasta» como D de no superar; si no, `true` conservador. |
| `banda-elevaciones-laterales-sentado` | `false` | «casi la altura»; no hay D de que no supere. | Igual. |
| `estiramiento-espalda-alta-sentado` | `false` | «a la altura»; no hay D de que no supere. | Igual. |
| `abrir-pierna-brazo-pared` | `false` | «hasta la altura del hombro»; no hay D de que no supere. | Igual. |
| `respiracion-lado-brazo-adelante` | `false` | El texto no menciona la altura; no hay D. | Reclasificar (DS-187); no cambiar por C. |
| `deslizar-toalla-pared` | `true` | Empieza a la altura y sube; no es C. | No cambiar por C (DS-186). |

**Conclusión:** con la definición literal, C/E «no cuenta» **no justifica ningún `false` nuevo** en estos ejercicios, porque no hay D de ausencia. Los cinco `false` actuales de C siguen sin D y, según R2.2, deberían ser `true` conservador. La propuesta no lo dice.

### 4.