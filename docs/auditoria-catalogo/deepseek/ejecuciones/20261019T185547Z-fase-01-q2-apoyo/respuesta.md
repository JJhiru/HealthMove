# Auditoría acotada · Q2 y `de_pie_apoyo`

**Alcance.** Reviso solo Q2 y la opción `de_pie_apoyo`, con los bloques entregados. No he consultado las fuentes originales ni el catálogo completo. No emito juicio clínico. Distingo en cada hallazgo si se basa en regla aprobada (DG-1 a DG-8, protocolo 1.0), en la decisión del usuario sobre Q2 (confirmada, no incorporada), en una cuestión abierta, en una propuesta no aprobada o en mi inferencia.

**Verificación previa de las mediciones de Claude.** Las he comprobado en `opciones-js` y `catalogo-de-pie`:

- **Medición 1: confirmada.** `de_pie_apoyo` tiene `texto: 'Puedo estar de pie solo si me sujeto a algo'` y `excluyeExigencias: ['equilibrio_sin_apoyo']`. No excluye `agarre`.
- **Medición 2: confirmada por recuento.** De los 50 ejercicios con `de_pie` (42 solo `de_pie` + 8 `sentado,de_pie`), 38 tienen `equilibrio_sin_apoyo: false`. De esos 38, 21 tienen `agarre: true` y 17 `agarre: false`. Los 12 restantes tienen `equilibrio_sin_apoyo: true`.
- **Medición 3: confirmada.** Los 17 con `agarre: false` y `equilibrio_sin_apoyo: false` son: `flexiones-pared`, `equilibrio-una-pierna-pared`, `estiramiento-gemelo-pared`, `estiramiento-hombro-cruzado`, `estiramiento-triceps`, `estiramiento-pecho-manos-lumbar`, `estiramiento-pecho-manos-detras`, `manos-espalda-codo-contrario`, `de-pie-mano-preparada`, `descanso-apoyado-pared`, `descanso-espalda-pared`, `abrir-pierna-brazo-pared`, `estiramiento-hombros-espalda-pared`, `subir-manos-pared`, `estiramiento-pecho-pared`, `estiramiento-soleo-pared`, `estiramiento-lateral-muslo-pared`, `isometrico-hombro-fuera-pared`. De ellos, los cuatro que no mencionan ningún apoyo y tienen `posiciones: ["sentado","de_pie"]` son los citados por Claude. **Matiz:** `estiramiento-pecho-manos-detras` también tiene `posiciones: ["sentado","de_pie"]` y no menciona apoyo, pero tiene `agarre: true` (entrelaza las manos), por lo que no entra en el conjunto de 17. Los cuatro de Claude son correctos; hay un quinto con la misma estructura de posiciones pero distinto `agarre`.
- **Medición 4: confirmada literalmente.** Especificación §7, punto 4: «Conviene incluir variantes con la palma abierta contra la pared, porque sujetarse a una silla es `agarre`».

**Revisión de mi fase 01 sobre Q2 y `de_pie_apoyo`.** En el bloque 1 traté Q2 en DS-02, DS-13, DS-26 y DS-40; en el bloque 2, en DS-52 y DS-72. Mantengo el núcleo (la contradicción R2.1/R7.4 y la falta de criterio formalizado para distinguir contacto de agarre). **Corrijo y matizo:**

- **DS-26** decía que la inconsistencia «sugiere que el auditor aplicó un criterio no escrito». Lo mantengo, pero ahora puedo precisar que el criterio observable en el catálogo es: «palma abierta o yemas → `agarre: false`; “manos en el respaldo” o “sujétate” → `agarre: true`». No está en ningún documento normativo.
- **DS-40** listaba 19 ejercicios con `agarre: true` y contacto. Lo mantengo, pero distingo los que dicen «sujétate» (prensión explícita) de los que dicen «manos en el respaldo» (ambiguo). Esa distinción es la que Q2 pide formalizar.
- **DS-52** trataba los cinco ejercicios de `sentado,de_pie` como «incoherencia instrucción/etiqueta». Lo matizo: la incoherencia es real solo si el ejercicio se hace de pie; si se hace sentado, `equilibrio_sin_apoyo: false` es correcto. No puedo determinarlo sin la fuente. Lo reclasifico como cuestión que requiere evidencia (DS-84).
- **DS-72** decía que Q2 «requiere evidencia de la fuente y posible revisión profesional». Lo mantengo, pero añado que la parte documental (qué exige y qué excluye `de_pie_apoyo`) sí es cerrable sin fuente; la parte de aplicación a cada ejercicio no.

---

## 1. Significado real de `de_pie_apoyo`

### DS-77 · `de_pie_apoyo` mezcla en su texto una capacidad («puedo estar de pie») con una condición de ejecución («solo si me sujeto»), y el motor solo implementa la segunda como exclusión de `equilibrio_sin_apoyo`

- **Ubicación:** `opciones-js`, `POSICION`, entrada `de_pie_apoyo`; `motor-js`, `calcularRestricciones`; `especificacion` §5, tabla Posición.
- **Evidencia:** `opciones-js`: `{ id: 'de_pie_apoyo', texto: 'Puedo estar de pie solo si me sujeto a algo', excluyeExigencias: ['equilibrio_sin_apoyo'], excluyePosiciones: [] }`. `motor-js`: `excluir(pos.excluyeExigencias, pos.texto); pos.excluyePosiciones.forEach((x) => posiciones.delete(x));`. Especificación §5: «Puedo estar de pie solo si me sujeto a algo | `equilibrio_sin_apoyo`».
- **Explicación:** el texto de la opción describe una **capacidad condicionada** (estar de pie con sujeción). El motor la traduce a una sola exclusión: `equilibrio_sin_apoyo`. No exige que el ejercicio ofrezca un apoyo, ni distingue si el apoyo es obligatorio u opcional, ni si es contacto, apoyo para estabilidad, soporte de carga o prensión. La opción, por tanto, **no garantiza** que el ejercicio ofrezca el apoyo que el usuario declara necesitar; solo descarta los que exigen estar de pie sin apoyo.
- **Consecuencia potencial:** un usuario que elige `de_pie_apoyo` puede recibir ejercicios de pie que no ofrecen ningún apoyo (los 17 con `agarre: false` y `equilibrio_sin_apoyo: false`, de los cuales 4 no mencionan apoyo en las instrucciones). El motor no lo detecta porque no hay exigencia que represente «apoyo disponible».
- **Nivel de certeza:** alta (verificado en `opciones-js` y `motor-js`).
- **Recomendación:** que el desarrollador decida si `de_pie_apoyo` debe seguir siendo solo una exclusión de `equilibrio_sin_apoyo` o si el modelo necesita representar «apoyo disponible» (ver DS-86). No propongo texto nuevo.
- **Prueba:** `calcularRestricciones({posicion: 'de_pie_apoyo', ...})` devuelve `exigencias` con solo `equilibrio_sin_apoyo`; comprobar que ningún ejercicio con `equilibrio_sin_apoyo: false` y sin apoyo en instrucciones queda excluido.
- **¿Requiere decisión humana?:** sí. Significado de `de_pie_apoyo` y posible cambio de modelo.

### DS-78 · El texto de `de_pie_apoyo` usa «me sujeto», que la especificación §4 asocia a `agarre`, pero la opción no excluye `agarre`

- **Ubicación:** `opciones-js`, `de_pie_apoyo`; `especificacion` §4 fila 10; `opciones-js`, `cerrar_mano`.
- **Evidencia:** `de_pie_apoyo`: «Puedo estar de pie solo si me sujeto a algo». Especificación §4: «`agarre` | cerrar la mano, con o sin objeto, aunque sea en parte (**incluye sujetarse a una silla** y cerrar el puño)». `opciones-js`, `cerrar_mano`: `{ id: 'cerrar_mano', texto: 'Me cuesta cerrar la mano o sujetar objetos', excluyeExigencias: ['agarre'] }`.
- **Explicación:** «sujetarse» es el verbo que la especificación usa para definir `agarre`. Sin embargo, `de_pie_apoyo` no excluye `agarre`; es `cerrar_mano` quien lo hace. Esto es coherente si se interpreta que `de_pie_apoyo` describe la **capacidad de estar de pie con apoyo** (que puede ser contacto, apoyo o prensión) y `cerrar_mano` la **capacidad de prensión**. Pero el texto de `de_pie_apoyo` no lo aclara: un usuario puede leer «me sujeto» como «puedo agarrarme» y no marcar `cerrar_mano`, o al revés.
- **Consecuencia potencial:** ambigüedad en la respuesta del usuario; dos usuarios con la misma capacidad funcional pueden elegir combinaciones distintas. No es un error del motor, sino del texto de la opción.
- **Nivel de certeza:** alta para la ambigüedad textual; media para el impacto (depende de cómo lo lea el usuario).
- **Recomendación:** que el desarrollador decida si el texto de `de_pie_apoyo` debe aclarar que no presupone poder cerrar la mano, o si la relación con `cerrar_mano` se documenta en la especificación §5. No propongo texto.
- **Prueba:** revisión de usabilidad con usuarios (no disponible); o comparación con el texto de la especificación §5, que usa la misma fórmula.
- **¿Requiere decisión humana?:** sí. Texto de la opción y su relación con `cerrar_mano`.

### DS-79 · `de_pie_apoyo` no excluye `peso_en_manos`, aunque «sujetarse» puede implicar carga sobre las manos

- **Ubicación:** `opciones-js`, `de_pie_apoyo`; `opciones-js`, `peso_manos`; `especificacion` §4 fila 11.
- **Evidencia:** `de_pie_apoyo`: `excluyeExigencias: ['equilibrio_sin_apoyo']`. `peso_manos`: `{ id: 'peso_manos', texto: 'No puedo apoyar peso en las manos o las muñecas', excluyeExigencias: ['peso_en_manos'] }`. Especificación §4: «`peso_en_manos` | manos o muñecas soportan parte del peso corporal».
- **Explicación:** «sujetarse a algo» para estar de pie puede implicar desde un contacto ligero hasta soportar parte del peso. La opción `de_pie_apoyo` no distingue; `peso_manos` es una opción separada. Es coherente con la separación de exigencias (R4.1: no se confunden apoyo con carga), pero deja al usuario la tarea de marcar ambas si corresponde.
- **Consecuencia potencial:** un usuario que necesita sujetarse pero no puede cargar peso en las manos debe marcar `de_pie_apoyo` **y** `peso_manos`; si solo marca la primera, recibirá ejercicios con `peso_en_manos: true` (p. ej. `flexiones-pared`, `subir-manos-pared`).
- **Nivel de certeza:** alta (verificado en `opciones-js`).
- **Recomendación:** ninguna acción sobre el motor; señalar que la combinación `de_pie_apoyo` + `peso_manos` es la que cubre ese caso, y que la interfaz debería hacerlo comprensible (Q8, fuera de alcance).
- **Prueba:** `calcularRestricciones` con `de_pie_apoyo` solo no excluye `peso_en_manos`; con `de_pie_apoyo` + `peso_manos` sí.
- **¿Requiere decisión humana?:** no urgente; documental.

### DS-80 · `de_pie_apoyo` no excluye `ambos_brazos`, y el motor ofrece ejercicios que piden las dos manos para sujetarse

- **Ubicación:** `opciones-js`, `de_pie_apoyo`; `opciones-js`, `un_brazo`; `motor-js`, `motivosIncompatibilidad`.
- **Evidencia:** `de_pie_apoyo`: `excluyeExigencias: ['equilibrio_sin_apoyo']`. `un_brazo`: `{ id: 'un_brazo', texto: 'Solo puedo usar un brazo', excluyeExigencias: ['ambos_brazos'] }`. `motor-js`: `for (const [codigo, v] of Object.entries(ej.exigencias)) if (v === true && restr.exigencias.has(codigo)) motivos.push({ tipo: 'exigencia', codigo });`.
- **Explicación:** `de_pie_apoyo` por sí sola no excluye `ambos_brazos`. Un usuario que elige solo `de_pie_apoyo` (sin `un_brazo`) recibirá ejercicios con `ambos_brazos: true` que piden sujetarse con las dos manos (p. ej. `circulos-cadera-pie`, `elevar-puntas-pies-apoyo`, `paso-atras-apoyo`, `flexion-rodilla-pie-apoyo`, `puntillas-talones-apoyo`). Si además marca `un_brazo`, se excluyen los que tienen `ambos_brazos: true`, pero no los que tienen `ambos_brazos: false` con instrucción «sujétate con las dos manos» (ver DS-83).
- **Consecuencia potencial:** el usuario recibe un ejercicio que le pide usar las dos manos para sujetarse, aunque no haya declarado poder hacerlo. Es un falso positivo del filtro.
- **Nivel de certeza:** alta para el mecanismo; la resolución depende de Q1 (si el apoyo bilateral cuenta como `ambos_brazos`).
- **Recomendación:** cerrar Q1; mientras tanto, registrar como CN. No cambiar etiquetas.
- **Prueba:** listar los ejercicios de `catalogo-de-pie` con `equilibrio_sin_apoyo: false` e instrucciones «sujétate con las dos manos» o «las dos manos»; comprobar que `de_pie_apoyo` solo no los excluye.
- **¿Requiere decisión humana?:** sí. Cerrar Q1.

### DS-81 · `de_pie_apoyo` no excluye `una_pierna`, y el motor ofrece ejercicios de equilibrio sobre un pie con apoyo

- **Ubicación:** `opciones-js`, `de_pie_apoyo`; `opciones-js`, `equilibrio`; `especificacion` §5.
- **Evidencia:** `de_pie_apoyo`: `excluyeExigencias: ['equilibrio_sin_apoyo']`. `equilibrio`: `{ id: 'equilibrio', texto: 'Me cuesta mantener el equilibrio', excluyeExigencias: ['equilibrio_sin_apoyo', 'una_pierna'] }`. Especificación §5: «“Me cuesta mantener el equilibrio” excluye `equilibrio_sin_apoyo` y `una_pierna`».
- **Explicación:** `de_pie_apoyo` describe una capacidad de equilibrio condicionada, pero no excluye `una_pierna`. Un usuario que elige solo `de_pie_apoyo` recibirá ejercicios con `una_pierna: true` (p. ej. `elevacion-lateral-pierna`, `extension-pierna-atras`, `equilibrio-una-pierna-pared`, `tandem-apoyo`, `paso-atras-apoyo`, `marcha-sitio-apoyo`, `estiramiento-cuadriceps-pie`, `estiramiento-flexor-cadera-pie`, `estiramiento-isquios-pie`, `abrir-pierna-brazo-pared`). Si el usuario tiene dificultad de equilibrio, debe marcar además `equilibrio`.
- **Consecuencia potencial:** un usuario que solo marca `de_pie_apoyo` puede recibir ejercicios que requieren equilibrio sobre un pie. No es un error del motor (la opción `equilibrio` existe para eso), pero el texto de `de_pie_apoyo` no lo advierte.
- **Nivel de certeza:** alta (verificado en `opciones-js`).
- **Recomendación:** ninguna acción sobre el motor; señalar que la combinación `de_pie_apoyo` + `equilibrio` es la que cubre ese caso. La interfaz debería hacerlo comprensible (Q8).
- **Prueba:** `calcularRestricciones` con `de_pie_apoyo` solo no excluye `una_pierna`.
- **¿Requiere decisión humana?:** no urgente; documental.

### DS-82 · `de_pie_apoyo` no excluye `sentarse_levantarse`, y el motor ofrece ejercicios que pasan de sentado a de pie

- **Ubicación:** `opciones-js`, `de_pie_apoyo`; `opciones-js`, `levantarse_silla`; `especificacion` §5.
- **Evidencia:** `de_pie_apoyo`: `excluyeExigencias: ['equilibrio_sin_apoyo']`. `levantarse_silla`: `{ id: 'levantarse_silla', texto: 'Me cuesta levantarme de una silla', excluyeExigencias: ['sentarse_levantarse'] }`. Especificación §5: «“Me cuesta levantarme de una silla” excluye `sentarse_levantarse`».
- **Explicación:** `de_pie_apoyo` describe la capacidad de estar de pie con apoyo, pero no dice nada sobre levantarse de una silla. Un usuario que elige solo `de_pie_apoyo` recibirá ejercicios con `sentarse_levantarse: true` (p. ej. `sentarse-levantarse`, `sentarse-levantarse-sin-manos`, `banda-sentarse-levantarse`). Si tiene dificultad para levantarse, debe marcar además `levantarse_silla`.
- **Consecuencia potencial:** un usuario que solo marca `de_pie_apoyo` puede recibir ejercicios que requieren levantarse de una silla. No es un error del motor, pero el texto de `de_pie_apoyo` no lo advierte.
- **Nivel de certeza:** alta (verificado en `opciones-js`).
- **Recomendación:** ninguna acción sobre el motor; señalar que la combinación `de_pie_apoyo` + `levantarse_silla` es la que cubre ese caso.
- **Prueba:** `calcularRestricciones` con `de_pie_apoyo` solo no excluye `sentarse_levantarse`.
- **¿Requiere decisión humana?:** no urgente; documental.

### DS-83 · El motor no comprueba que el ejercicio ofrezca el apoyo que `de_pie_apoyo` declara necesitar; solo comprueba que no exija `equilibrio_sin_apoyo`

- **Ubicación:** `motor-js`, `calcularRestricciones` y `motivosIncompatibilidad`; `validacion-js`, `problemasEjercicio`.
- **Evidencia:** `motor-js`: `excluir(pos.excluyeExigencias, pos.texto);` y `for (const [codigo, v] of Object.entries(ej.exigencias)) if (v === true && restr.exigencias.has(codigo)) motivos.push({ tipo: 'exigencia', codigo });`. `validacion-js`: no hay campo de «apoyo disponible» ni comprobación de que las instrucciones mencionen un apoyo.
- **Explicación:** el motor solo excluye ejercicios con `equilibrio_sin_apoyo: true`. No exige que el ejercicio tenga un recurso de apoyo (`silla`, `pared`) ni que las instrucciones lo mencionen. Por tanto, `de_pie_apoyo` no garantiza que el ejercicio ofrezca el apoyo que el usuario necesita.
- **Consecuencia potencial:** los 17 ejercicios con `agarre: false` y `equilibrio_sin_apoyo: false` son compatibles con `de_pie_apoyo`; de ellos, 4 no mencionan apoyo en las instrucciones (`estiramiento-hombro-cruzado`, `estiramiento-triceps`, `estiramiento-pecho-manos-lumbar`, `manos-espalda-codo-contrario`). El usuario recibiría ejercicios que no le dicen cómo apoyarse.
- **Nivel de certeza:** alta (verificado en `motor-js` y `catalogo-de-pie`).
- **Recomendación:** que el desarrollador decida si el modelo necesita representar «apoyo disponible» (campo nuevo o exigencia nueva) o si basta con que las instrucciones lo indiquen y la auditoría lo verifique. No propongo campo ni texto.
- **Prueba:** `calcularRestricciones` con `de_pie_apoyo` solo; comprobar que los 4 ejercicios citados son compatibles y que sus instrucciones no mencionan apoyo.
- **¿Requiere decisión humana?:** sí. Modelo de datos y alcance de `de_pie_apoyo`.

---

## 2. Las cinco distinciones del usuario

### DS-84 · Ninguna de las cinco distinciones (contacto, apoyo para estabilidad, soporte de carga, prensión, apoyo obligatorio/opcional) tiene representación propia en el esquema; se reparten entre `agarre`, `peso_en_manos`, `ambos_brazos` y `equilibrio_sin_apoyo`, sin campo que las distinga

- **Ubicación:** `especificacion` §4 (16 exigencias); `validacion-js`, `EXIGENCIAS`; `motor-js`, `calcularRestricciones`; `protocolo` §7.1 (tabla de funciones).
- **Evidencia:** `validacion-js`: `EXIGENCIAS = ['equilibrio_sin_apoyo', 'una_pierna', 'sentarse_levantarse', 'impacto', 'carga_externa', 'esfuerzo_cardio', 'brazo_sobre_hombro', 'mano_detras', 'ambos_brazos', 'agarre', 'peso_en_manos', 'flexion_profunda_rodilla', 'flexion_amplia_cadera', 'puntillas_talones', 'inclinacion_tronco', 'rotacion_tronco']`. `protocolo` §7.1: «**Contacto** | Toca una superficie sin función de estabilidad ni carga | Nada por el contacto en sí (R7.3, R7.4)»; «**Apoyo para estabilidad** | El contacto ayuda al equilibrio | Se analiza cada exigencia por separado. `ambos_brazos`: ver la cuestión **Q1**. `agarre`, solo si la mano se cierra o la instrucción pide sujetarse. `peso_en_manos`, solo si las manos soportan peso corporal»; «**Carga sobre las manos** | Las manos o muñecas soportan parte del peso corporal | `peso_en_manos`»; «**Agarre** | Cerrar la mano, con o sin objeto, aunque sea en parte (§4, incluido sujetarse a una silla) | `agarre`».
- **Explicación:** el protocolo §7.1 ya distingue las funciones, pero el esquema solo tiene 16 exigencias booleanas. La correspondencia es:

| Distinción del usuario | Exigencia actual que la representa | Cita exacta | ¿Representación propia? |
|---|---|---|---|
| **Contacto** | Ninguna | `protocolo` §7.1: «Nada por el contacto en sí (R7.3, R7.4)» | **No** |
| **Apoyo para estabilidad** | Parcialmente `ambos_brazos` (Q1) y `agarre` (si se cierra la mano o la instrucción pide sujetarse) | `protocolo` §7.1: «`agarre`, solo si la mano se cierra o la instrucción pide sujetarse» | **No** (depende de Q1 y Q2) |
| **Soporte de carga** | `peso_en_manos` | Especificación §4: «manos o muñecas soportan parte del peso corporal» | **Sí** |
| **Prensión** | `agarre` | Especificación §4: «cerrar la mano, con o sin objeto, aunque sea en parte (incluye sujetarse a una silla y cerrar el puño)» | **Sí** |
| **Apoyo obligatorio vs. opcional** | Ninguna | `protocolo` §8.1: «**1. Exigencia del ejercicio** … **2. Consejo preventivo** … **3. Indicación de interrupción o contingencia**» | **No** (la clase 1 vs. 2/3 es una distinción de la indicación, no del apoyo) |

- **Consecuencia potencial:** las distinciones que no tienen representación propia (contacto, apoyo para estabilidad, apoyo obligatorio/opcional) no pueden filtrarse. El motor solo puede excluir por `agarre`, `peso_en_manos`, `ambos_brazos` y `equilibrio_sin_apoyo`. Un usuario que necesita apoyo obligatorio no puede expresarlo; uno que puede con apoyo opcional tampoco.
- **Nivel de certeza:** alta (verificado en `validacion-js` y `protocolo` §7.1).
- **Recomendación:** que el desarrollador decida si las distinciones sin representación se codifican en las 16 exigencias existentes (p. ej. `agarre` para prensión, `peso_en_manos` para carga, `ambos_brazos` para apoyo bilateral) o si requieren campo nuevo (fuera de alcance de esta fase). No propongo campo ni texto.
- **Prueba:** `grep` de las 16 exigencias en `validacion-js`; comprobar que no hay campo de «apoyo» ni de «obligatorio/opcional».
- **¿Requiere decisión humana?:** sí. Modelo de datos y alcance de Q2.

### DS-85 · La distinción «apoyo obligatorio vs. opcional» no se puede expresar con las 16 exigencias, y el protocolo la trata como clase de indicación (DG-6), no como propiedad del ejercicio

- **Ubicación:** `protocolo` §8.1 y §8.2 R6.1-R6.4; `especificacion` §4; `catalogo-de-pie` (`sentarse-levantarse`, `elevacion-talones-sin-apoyo`, `de-pie-mano-preparada`).
- **Evidencia:** `protocolo` §8.1: «**1. Exigencia del ejercicio** | “Sujétate a la silla durante todo el ejercicio” | **Sí**, si es necesaria para hacerlo (aquí, `agarre`)»; «**2. Consejo preventivo** | “Mantén una silla estable cerca por seguridad” | **No**»; «**3. Indicación de interrupción o contingencia** | “Si pierdes el equilibrio, detén el ejercicio y busca una posición estable” | **No**». `catalogo-de-pie` `sentarse-levantarse`: «Usa las manos solo como guía si lo necesitas»; `elevacion-talones-sin-apoyo`: «Si pierdes el equilibrio, sujétate a la silla»; `de-pie-mano-preparada`: «Deja la mano justo encima de la superficie, sin tocarla, lista para agarrarte».
- **Explicación:** DG-6 distingue tres clases de indicación, pero no distingue «apoyo obligatorio» de «apoyo opcional» como propiedad del ejercicio. Un ejercicio puede tener un apoyo obligatorio (clase 1), un consejo de apoyo (clase 2) o una contingencia de apoyo (clase 3). El esquema no guarda cuál. La etiqueta `agarre` se marca si la instrucción pide sujetarse (clase 1), pero no distingue si el apoyo es obligatorio u opcional cuando la instrucción es ambigua («manos en el respaldo»).
- **Consecuencia potencial:** dos ejercicios con la misma etiqueta `agarre: true` pueden tener apoyos de distinta obligatoriedad; el motor los trata igual. Un usuario que puede con apoyo opcional pero no con apoyo obligatorio no puede expresarlo.
- **Nivel de certeza:** alta (verificado en `protocolo` §8.1 y `catalogo-de-pie`).
- **Recomendación:** que el desarrollador decida si la obligatoriedad del apoyo se codifica en `agarre` (p. ej. `agarre: true` solo si es obligatorio) o si requiere campo nuevo. No propongo texto.
- **Prueba:** clasificar los ejercicios de `catalogo-de-pie` con `agarre: true` según si la instrucción pide sujetarse (obligatorio) o solo menciona el apoyo (opcional/ambiguo).
- **¿Requiere decisión humana?:** sí. Modelo de datos y alcance de Q2.

---

## 3. La especificación §7.4 frente a R2.1, R7.4 y R7.5

### DS-86 · La especificación §7.4 («sujetarse a una silla es `agarre`») y R7.4 («que una mano toque un objeto no permite inferir un agarre») no se contradicen, pero dejan sin resolver el caso intermedio: «manos en el respaldo» sin cierre explícito

- **Ubicación:** `especificacion` §7, punto 4; `protocolo` §6 R7.4 y R7.5; `protocolo` §3 R2.1; `protocolo` §13 Q2.
- **Evidencia:** especificación §7.4: «Conviene incluir variantes con la palma abierta contra la pared, porque sujetarse a una silla es `agarre`». R7.4: «Que una mano toque un objeto no permite inferir un agarre (`agarre`)». R7.5: «Si la imagen no determina un requisito, se registra la incertidumbre y se aplica la regla conservadora de esa exigencia (R2.1). Ver la cuestión **Q2** sobre la relación entre R7.4 y R2.1». R2.1: «Valor `true`. Puede proponerse con evidencia D o I, o con la regla `conservadora` cuando la evidencia es N o insuficiente».
- **Explicación:** §7.4 y R7.4 son coherentes: §7.4 dice que **sujetarse** (prensión) es `agarre`; R7.4 dice que **tocar** (contacto) no permite inferir agarre. La frontera entre ambos es la prensión. El problema es el caso intermedio: «manos en el respaldo» no dice si se cierra la mano. §7.4 no lo resuelve; R7.4 prohíbe inferirlo; R2.1 permite marcarlo por conservadurismo. Q2 reconoce la tensión y propone una salida (palma abierta → `false`; instrucción neutra → `true` conservador), pero no está aprobada.
- **Consecuencia potencial:** §7.4 **cierra una parte de Q2** (el caso de prensión explícita: «sujetarse» es `agarre`) pero **desplaza el resto** al caso de instrucción neutra («manos en el respaldo»), que sigue dependiendo de R2.1 vs. R7.4. No cierra Q2 entera.
- **Nivel de certeza:** alta (la lectura es directa).
- **Recomendación:** que el desarrollador decida si §7.4 se incorpora al protocolo como criterio (prensión explícita → `agarre: true`; contacto explícito sin prensión → `agarre: false`; instrucción neutra → Q2) o si se deja como está. No propongo texto.
- **Prueba:** aplicar §7.4, R7.4 y R2.1 por separado a los ejercicios de `catalogo-de-pie` con `agarre: true` y comparar resultados.
- **¿Requiere decisión humana?:** sí. Cerrar Q2 con la distinción del usuario.

### DS-87 · La propuesta del auditor recogida en Q2 («palma abierta → `false`; instrucción neutra → `true` conservador») no está aprobada y no cubre el caso «sujétate» (prensión explícita), que §7.4 sí resuelve

- **Ubicación:** `protocolo` §13 Q2; `especificacion` §7.4; `catalogo-de-pie` (`tandem-apoyo`, `circulos-cadera-pie`, `flexiones-pared`, `equilibrio-una-pierna-pared`).
- **Evidencia:** Q2: «**Propuesta del auditor:** si la instrucción de HealthMove pide expresamente la palma abierta y eso cumple DG-3, `false`; si la instrucción es neutra, `true` conservador con su nota, sin presentarlo como un agarre observado». §7.4: «sujetarse a una silla es `agarre`». `catalogo-de-pie` `tandem-apoyo`: «sujétate con una mano», `agarre: true`; `circulos-cadera-pie`: «Sujétate con las dos manos», `agarre: true`; `flexiones-pared`: «Apoya las palmas en la pared», `agarre: false`; `equilibrio-una-pierna-pared`: «las yemas de los dedos tocándola», `agarre: false`.
- **Explicación:** la propuesta de Q2 distingue «palma abierta» de «instrucción neutra», pero no menciona el caso «sujétate» (prensión explícita). §7.4 sí lo resuelve: «sujetarse» es `agarre`. La propuesta, por tanto, es incompleta: le falta el caso de prensión explícita, que §7.4 ya cubre. Si se aprobara tal cual, podría interpretarse que «sujétate» es «instrucción neutra» y aplicar `true` conservador, cuando §7.4 dice que es `agarre` por definición.
- **Consecuencia potencial:** ambigüedad en la aplicación de Q2; dos auditores podrían tratar «sujétate» de forma distinta.
- **Nivel de certeza:** alta (la propuesta no menciona «sujétate»).
- **Recomendación:** que el desarrollador decida si Q2 se cierra con tres casos (prensión explícita → `true` por §7.4; palma abierta → `false`; instrucción neutra → `true` conservador) o con otro criterio. No propongo texto.
- **Prueba:** clasificar los ejercicios de `catalogo-de-pie` con `agarre: true` en «sujétate» vs. «manos en el respaldo» vs. «palma abierta»; comprobar que la propuesta de Q2 no cubre el primero.
- **¿Requiere decisión humana?:** sí. Cerrar Q2.

---

## 4. Clasificación de los casos de `catalogo-de-pie` con contacto de manos

Clasifico solo con el texto de la instrucción, en las cinco categorías del usuario. Marco como **indeterminado** los que el texto no permite clasificar. No emito juicio clínico.

**Categorías:** C = contacto; A = apoyo para estabilidad; S = soporte de carga; P = prensión; O = obligatorio; Op = opcional.

| Ejercicio | Instrucción literal (fragmento) | C | A | S | P | O/Op | Notas |
|---|---|---|---|---|---|---|---|
| `mini-sentadillas` | «las manos en el respaldo» | indeterminado | indeterminado | no | indeterminado | indeterminado | «manos en el respaldo» no dice si se cierra la mano |
| `elevacion-talones-apoyo` | «las manos en el respaldo» | indeterminado | indeterminado | no | indeterminado | indeterminado | ídem |
| `elevacion-lateral-pierna` | «las manos en el respaldo» | indeterminado | indeterminado | no | indeterminado | indeterminado | ídem |
| `extension-pierna-atras` | «las manos en el respaldo» | indeterminado | indeterminado | no | indeterminado | indeterminado | ídem |
| `flexiones-pared` | «Apoya las palmas en la pared» | sí | sí | sí | no | O | palma abierta, carga explícita |
| `equilibrio-una-pierna-pared` | «las yemas de los dedos tocándola» | sí | sí | no | no | O | contacto ligero, sin carga |
| `estiramiento-gemelo-pared` | «Apoya las manos en la pared» | sí | sí | indeterminado | indeterminado | O | «apoya las manos» no dice palma ni cierre |
| `flexion-alterna-piernas-de-pie` | «apóyate en ella» | indeterminado | sí | indeterminado | indeterminado | O | «apóyate» es apoyo, pero no dice cómo |
| `elevar-puntas-pies-apoyo` | «sujétate con las dos manos» | sí | sí | indeterminado | sí | O | «sujétate» = prensión explícita |
| `flexion-rodilla-pie-apoyo` | «sujétate con las dos manos» | sí | sí | indeterminado | sí | O | ídem |
| `tandem-apoyo` | «sujétate con una mano» | sí | sí | indeterminado | sí | O | ídem |
| `circulos-cadera-pie` | «Sujétate con las dos manos» | sí | sí | indeterminado | sí | O | ídem |
| `paso-atras-apoyo` | «sujétate con las dos manos» | sí | sí | indeterminado | sí | O | ídem |
| `marcha-sitio-apoyo` | «Sujétate al respaldo» | sí | sí | indeterminado | sí | O | ídem |
| `giro-tronco-pie` | «una mano en el respaldo» | indeterminado | indeterminado | no | indeterminado | indeterminado | «una mano en el respaldo» no dice cierre |
| `puntillas-talones-apoyo` | «sujétate con las dos manos» | sí | sí | indeterminado | sí | O | ídem |
| `estiramiento-cuadriceps-pie` | «sujétate con una mano» | sí | sí | indeterminado | sí | O | ídem |
| `pendulo-hombro` | «apoya una mano en el respaldo» | indeterminado | sí | indeterminado | indeterminado | O | «apoya» es apoyo, pero no dice cierre |
| `remo-inclinado-botella` | «Apoya una mano en el respaldo» | indeterminado | sí | indeterminado | indeterminado | O | ídem |
| `estiramiento-flexor-cadera-pie` | «Sujétate al respaldo» | sí | sí | indeterminado | sí | O | ídem |
| `estiramiento-aductores-pie` | «Sujétate al respaldo» | sí | sí | indeterminado | sí | O | ídem |
| `estiramiento-isquios-pie` | «Sujétate al respaldo» | sí | sí | indeterminado | sí | O | ídem |
| `de-pie-mano-preparada` | «Deja la mano justo encima de la superficie, sin tocarla» | no | no | no | no | — | no hay contacto |
| `descanso-apoyado-pared` | «apoya los antebrazos en la pared» | sí | sí | indeterminado | no | O | antebrazos, no manos |
| `descanso-espalda-pared` | «Apóyate con la espalda en la pared» | no (espalda) | sí (espalda) | no | no | O | no hay manos |
| `abrir-pierna-brazo-pared` | «una mano apoyada en la pared» | indeterminado | sí | indeterminado | indeterminado | O | «apoyada» no dice cierre |
| `estiramiento-hombros-espalda-pared` | «Apoya la espalda en la pared» | no (espalda) | sí (espalda) | no | no | O | no hay manos |
| `subir-manos-pared` | «apoya las palmas en la pared» | sí | sí | sí | no | O | palma abierta, carga explícita |
| `deslizar-toalla-pared` | «una toalla bajo la mano» | sí | sí | indeterminado | indeterminado | O | toalla, no dice cierre |
| `estiramiento-pecho-pared` | «apoya la mano en la pared» | indeterminado | sí | indeterminado | indeterminado | O | «apoya la mano» no dice cierre |
| `estiramiento-soleo-pared` | «Apoya las manos en la pared» | sí | sí | indeterminado | indeterminado | O | ídem que `estiramiento-gemelo-pared` |
| `estiramiento-lateral-muslo-pared` | «apoya la mano en ella» | indeterminado | sí | indeterminado | indeterminado | O | ídem |
| `isometrico-hombro-fuera-pared` | «Empuja la pared con el dorso de la mano» | sí | no | sí | no | O | empuje, no apoyo para estabilidad |
| `estiramiento-hombro-cruzado` | «Pon una mano sobre el hombro contrario» | sí (sobre el cuerpo) | no | no | no | — | contacto sobre el propio cuerpo, no sobre superficie |
| `estiramiento-triceps` | «lleva la mano por encima del hombro hacia el omóplato» | sí (sobre el cuerpo) | no | no | no | — | ídem |
| `estiramiento-pecho-manos-lumbar` | «Pon las manos en la parte baja de la espalda» | sí (sobre el cuerpo) | no | no | no | — | ídem |
| `estiramiento-pecho-manos-detras` | «Entrelaza las manos detrás de la espalda» | sí (sobre el cuerpo) | no | no | sí | O | entrelazar = prensión |
| `manos-espalda-codo-contrario` | «Lleva las manos detrás de la espalda e intenta tocar con cada mano el codo contrario» | sí (sobre el cuerpo) | no | no | indeterminado | Op | «intenta tocar» no dice cierre |
| `sentarse-levantarse` | «Usa las manos solo como guía si lo necesitas» | indeterminado | indeterminado | no | indeterminado | Op | «si lo necesitas» = opcional |
| `elevacion-talones-sin-apoyo` | «Si pierdes el equilibrio, sujétate a la silla» | sí (contingencia) | sí (contingencia) | indeterminado | sí (contingencia) | Op | contingencia, no obligatorio |
| `arquear-espalda-pie` | «una silla firme cerca» | no | no | no | no | — | no hay contacto |
| `sentadilla-sin-apoyo` | «una silla detrás» | no | no | no | no | — | no hay contacto |
| `sentarse-levantarse-sin-manos` | «las manos cruzadas sobre el pecho» | sí (sobre el cuerpo) | no | no | no | — | no hay apoyo externo |
| `banda-sentarse-levantarse` | «un extremo en cada mano» | sí | no | no | sí | O | prensión de la banda |
| `elevaciones-frontales-botella` | «una botella sujeta con las dos manos» | sí | no | no | sí | O | prensión de la botella |
| `elevaciones-laterales-botella` | «una botella en cada mano» | sí | no | no | sí | O | ídem |
| `press-hombros-botella-pie` | «una botella en cada mano» | sí | no | no | sí | O | ídem |
| `banda-deslizar-brazos-pared` | «una banda alrededor de las manos» | sí | no | no | indeterminado | O | banda, no dice cierre |
| `banda-elevar-brazos-pie` | «sujeta una banda en lazo con las dos manos» | sí | no | no | sí | O | prensión de la banda |

**Resumen de la clasificación:**

- **Prensión explícita (P = sí):** 14 ejercicios con «sujétate» o «sujeta» + 1 con «entrelaza» + 1 con «un extremo en cada mano» + 2 con «una botella en cada mano» + 1 con «una botella sujeta con las dos manos» = 19. Coincide con los 21 con `agarre: true` menos 2 (`mini-sentadillas` y `elevacion-talones-apoyo` tienen `agarre: true` pero instrucción «manos en el respaldo», que es indeterminada).
- **Contacto sin prensión explícita (C = sí, P = no):** `flexiones-pared`, `equilibrio-una-pierna-pared`, `subir-manos-pared`, `isometrico-hombro-fuera-pared` = 4.
- **Indeterminados (ni prensión ni palma explícita):** `mini-sentadillas`, `elevacion-talones-apoyo`, `elevacion-lateral-pierna`, `extension-pierna-atras`, `estiramiento-gemelo-pared`, `flexion-alterna-piernas-de-pie`, `giro-tronco-pie`, `pendulo-hombro`, `remo-inclinado-botella`, `abrir-pierna-brazo-pared`, `deslizar-toalla-pared`, `estiramiento-pecho-pared`, `estiramiento-soleo-pared`, `estiramiento-lateral-muslo-pared`, `manos-espalda-codo-contrario`, `sentarse-levantarse`, `banda-deslizar-brazos-pared` = 17.
- **Sin contacto de manos:** `de-pie-mano-preparada`, `descanso-espalda-pared`, `estiramiento-hombros-espalda-pared`, `arquear-espalda-pie`, `sentadilla-sin-apoyo`, `sentarse-levantarse-sin-manos` = 6.
- **Contacto sobre el propio cuerpo (no sobre superficie):** `estiramiento-hombro-cruzado`, `estiramiento-triceps`, `estiramiento-pecho-manos-lumbar`, `estiramiento-pecho-manos-detras`, `manos-espalda-codo-contrario`, `sentarse-levantarse-sin-manos` = 6 (algunos ya contados).

**Consecuencia:** los 17 indeterminados son los que Q2 debe resolver. Los 4 con palma abierta y los 19 con prensión explícita son los que §7.4 y R7.4 ya cubren (aunque la aplicación actual no siempre coincide: `mini-sentadillas` y `elevacion-talones-apoyo` tienen `agarre: true` con instrucción indeterminada).

- **Nivel de certeza:** alta para la clasificación textual; media para la aplicación a etiquetas (depende de la fuente).
- **Recomendación:** que el desarrollador use esta clasificación como base para cerrar Q2; no propongo cambios de etiqueta.
- **Prueba:** comparar la clasificación con los valores actuales de `agarre` en `catalogo-de-pie`.
- **¿Requiere decisión humana?:** sí. Cerrar Q2.

---

## 5. Combinaciones de perfil en las que la representación actual puede ofrecer un ejercicio cuyas instrucciones piden algo que el perfil declara no poder hacer

### DS-88 · `de_pie_apoyo` + `cerrar_mano`: el motor ofrece 17 ejercicios, de los cuales 4 no mencionan apoyo y varios tienen instrucciones indeterminadas sobre el cierre de la mano

- **Ubicación:** `opciones-js` (`de_pie_apoyo`, `cerrar_mano`); `motor-js`; `catalogo-de-pie`.
- **Evidencia:** `de_pie_apoyo` excluye `equilibrio_sin_apoyo`; `cerrar_mano` excluye `agarre`. Los 17 ejercicios con `equilibrio_sin_apoyo: false` y `agarre: false` son compatibles. De ellos, 4 no mencionan apoyo: `estiramiento-hombro-cruzado`, `estiramiento-triceps`, `estiramiento-pecho-manos-lumbar`, `manos-espalda-codo-contrario`. Los 13 restantes mencionan apoyo, pero varios con instrucción indeterminada sobre el cierre