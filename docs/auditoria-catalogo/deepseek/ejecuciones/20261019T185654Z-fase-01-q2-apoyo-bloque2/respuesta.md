de la mano (`estiramiento-gemelo-pared`, `estiramiento-soleo-pared`, `estiramiento-pecho-pared`, `abrir-pierna-brazo-pared`, `deslizar-toalla-pared`, `estiramiento-lateral-muslo-pared`, `pendulo-hombro`, `remo-inclinado-botella`, `giro-tronco-pie`, `flexion-alterna-piernas-de-pie`, `sentarse-levantarse`, `banda-deslizar-brazos-pared`, `isometrico-hombro-fuera-pared`).

- **Explicación:** el perfil declara no poder cerrar la mano. El motor excluye los ejercicios con `agarre: true`, pero no comprueba que las instrucciones de los `agarre: false` no pidan cerrar la mano de forma implícita. Los 4 sin apoyo no ofrecen el apoyo que `de_pie_apoyo` declara necesitar (DS-83). Los 13 con apoyo tienen instrucciones como «apoya las manos en la pared» o «apoya una mano en el respaldo», que no dicen si se cierra la mano; el motor los ofrece porque `agarre: false`, pero el texto no garantiza que no se pida prensión.
- **Consecuencia potencial:** el usuario recibe ejercicios que no le dicen cómo apoyarse (los 4) o que podrían pedirle cerrar la mano sin decirlo (los 13 indeterminados). Es un falso positivo del filtro.
- **Nivel de certeza:** alta para la existencia de los 17 y de los 4 sin apoyo; media para la indeterminación de los 13 (depende de la fuente).
- **Recomendación:** cerrar Q2 con la distinción del usuario; mientras tanto, registrar como CN. No cambiar etiquetas.
- **Prueba:** listar los 17 y clasificar sus instrucciones según la tabla de DS-84.
- **¿Requiere decisión humana?:** sí. Cerrar Q2.

### DS-89 · `de_pie_apoyo` + `un_brazo`: el motor ofrece ejercicios con `ambos_brazos: false` cuyas instrucciones piden «sujétate con las dos manos»

- **Ubicación:** `opciones-js` (`de_pie_apoyo`, `un_brazo`); `motor-js`; `catalogo-de-pie`.
- **Evidencia:** `un_brazo` excluye `ambos_brazos`. Los ejercicios con `ambos_brazos: false` y `equilibrio_sin_apoyo: false` son compatibles. Varios tienen instrucciones «sujétate con las dos manos» o «las dos manos»: `circulos-cadera-pie` («Sujétate con las dos manos»), `elevar-puntas-pies-apoyo` («sujétate con las dos manos»), `paso-atras-apoyo` («sujétate con las dos manos»), `flexion-rodilla-pie-apoyo` («sujétate con las dos manos»), `puntillas-talones-apoyo` («sujétate con las dos manos»). También `banda-sentarse-levantarse` («un extremo en cada mano»), `elevaciones-laterales-botella` («una botella en cada mano»), `press-hombros-botella-pie` («una botella en cada mano»).
- **Explicación:** el perfil declara poder usar solo un brazo. El motor excluye los ejercicios con `ambos_brazos: true`, pero no los que tienen `ambos_brazos: false` con instrucción que pide las dos manos. La etiqueta `ambos_brazos: false` no refleja la instrucción. Es el caso de Q1 (si el apoyo bilateral cuenta como `ambos_brazos`) y de DG-4 (función real de los brazos).
- **Consecuencia potencial:** el usuario recibe ejercicios que le piden usar las dos manos para sujetarse o sostener un objeto. Es un falso positivo del filtro.
- **Nivel de certeza:** alta para la discrepancia instrucción/etiqueta; la resolución depende de Q1.
- **Recomendación:** cerrar Q1; mientras tanto, registrar como CN. No cambiar etiquetas.
- **Prueba:** listar los ejercicios de `catalogo-de-pie` con `ambos_brazos: false` e instrucciones «dos manos» o «cada mano»; comprobar que `de_pie_apoyo` + `un_brazo` los ofrece.
- **¿Requiere decisión humana?:** sí. Cerrar Q1.

### DS-90 · `de_pie_apoyo` + `peso_manos`: el motor excluye los ejercicios con `peso_en_manos: true`, pero no los que tienen instrucciones de apoyo que podrían implicar carga sin `peso_en_manos: true`

- **Ubicación:** `opciones-js` (`de_pie_apoyo`, `peso_manos`); `motor-js`; `catalogo-de-pie`.
- **Evidencia:** `peso_manos` excluye `peso_en_manos`. Los ejercicios con `peso_en_manos: false` y `equilibrio_sin_apoyo: false` son compatibles. Varios tienen instrucciones de apoyo que podrían implicar carga: `estiramiento-gemelo-pared` («Apoya las manos en la pared»), `estiramiento-soleo-pared` («Apoya las manos en la pared»), `estiramiento-pecho-pared` («apoya la mano en la pared»), `abrir-pierna-brazo-pared` («una mano apoyada en la pared»), `deslizar-toalla-pared` («una toalla bajo la mano»), `estiramiento-lateral-muslo-pared` («apoya la mano en ella»), `pendulo-hombro` («apoya una mano en el respaldo»), `remo-inclinado-botella` («Apoya una mano en el respaldo»), `giro-tronco-pie` («una mano en el respaldo»), `flexion-alterna-piernas-de-pie` («apóyate en ella»), `sentarse-levantarse` («Usa las manos solo como guía si lo necesitas»), `banda-deslizar-brazos-pared` («una banda alrededor de las manos»), `isometrico-hombro-fuera-pared` («Empuja la pared con el dorso de la mano»).
- **Explicación:** el perfil declara no poder apoyar peso en las manos. El motor excluye los ejercicios con `peso_en_manos: true`, pero no comprueba si las instrucciones de los `peso_en_manos: false` implican carga. R7.3 dice que el contacto no demuestra carga, pero la instrucción «apoya las manos en la pared» puede implicar más que contacto. La etiqueta `peso_en_manos: false` no garantiza que no haya carga.
- **Consecuencia potencial:** el usuario recibe ejercicios que le piden apoyar las manos en una superficie, lo que podría implicar carga. Es un falso positivo del filtro si la instrucción implica más que contacto.
- **Nivel de certeza:** media (depende de la fuente y de la interpretación de «apoya»).
- **Recomendación:** revisar con la fuente si «apoya las manos» implica carga; si es así, valorar `peso_en_manos: true`. Registrar como CN.
- **Prueba:** consultar las fuentes (no entregadas); comparar con `flexiones-pared` y `subir-manos-pared`, que tienen `peso_en_manos: true` con instrucción similar.
- **¿Requiere decisión humana?:** sí, tras revisar fuentes.

### DS-91 · `de_pie_apoyo` + `equilibrio`: el motor excluye `una_pierna`, pero no los ejercicios con `equilibrio_sin_apoyo: false` e instrucciones que piden equilibrio sobre un pie sin `una_pierna: true`

- **Ubicación:** `opciones-js` (`de_pie_apoyo`, `equilibrio`); `motor-js`; `catalogo-de-pie`.
- **Evidencia:** `equilibrio` excluye `equilibrio_sin_apoyo` y `una_pierna`. Los ejercicios con `una_pierna: false` y `equilibrio_sin_apoyo: false` son compatibles. Varios tienen instrucciones que podrían implicar equilibrio sobre un pie sin `una_pierna: true`: `tandem-apoyo` («Coloca un pie justo delante del otro, en línea recta»), `marcha-sitio-apoyo` («Marcha en el sitio levantando las rodillas por turnos»), `flexion-alterna-piernas-de-pie` («Eleva una pierna con la rodilla doblada»). Este último tiene `una_pierna: true`, pero `tandem-apoyo` y `marcha-sitio-apoyo` tienen `una_pierna: true` también. **Corrección:** los tres tienen `una_pierna: true`, por lo que `equilibrio` los excluye. El caso no se produce con estos ejemplos.
- **Explicación:** el motor excluye `una_pierna` cuando se marca `equilibrio`. Los ejercicios con `una_pierna: true` quedan excluidos. No encuentro en `catalogo-de-pie` un ejercicio con `una_pierna: false` e instrucción que pida equilibrio sobre un pie. El caso no se verifica con los datos entregados.
- **Consecuencia potencial:** ninguna verificable con los datos entregados.
- **Nivel de certeza:** baja (no encuentro el caso).
- **Recomendación:** ninguna acción; se cita para descartar el caso.
- **Prueba:** listar los ejercicios con `una_pierna: false` e instrucciones «un pie» o «una pierna»; no hay ninguno en `catalogo-de-pie`.
- **¿Requiere decisión humana?:** no.

### DS-92 · `de_pie_apoyo` + `levantarse_silla`: el motor excluye `sentarse_levantarse`, pero no los ejercicios con `sentarse_levantarse: false` e instrucciones que piden pasar de sentado a de pie sin `sentarse_levantarse: true`

- **Ubicación:** `opciones-js` (`de_pie_apoyo`, `levantarse_silla`); `motor-js`; `catalogo-de-pie`.
- **Evidencia:** `levantarse_silla` excluye `sentarse_levantarse`. Los ejercicios con `sentarse_levantarse: false` y `equilibrio_sin_apoyo: false` son compatibles. No encuentro en `catalogo-de-pie` un ejercicio con `sentarse_levantarse: false` e instrucción que pida pasar de sentado a de pie. Los que tienen `posiciones: ["sentado","de_pie"]` y `sentarse_levantarse: false` son `estiramiento-hombro-cruzado`, `estiramiento-triceps`, `estiramiento-pecho-manos-lumbar`, `estiramiento-pecho-manos-detras`, `manos-espalda-codo-contrario`; sus instrucciones no piden pasar de sentado a de pie (algunos dicen «Siéntate en el borde de la silla o ponte de pie», que es una alternativa, no una secuencia).
- **Explicación:** el motor excluye `sentarse_levantarse` cuando se marca `levantarse_silla`. Los ejercicios con `sentarse_levantarse: true` quedan excluidos. No encuentro un ejercicio con `sentarse_levantarse: false` e instrucción que pida la secuencia. El caso no se verifica con los datos entregados.
- **Consecuencia potencial:** ninguna verificable con los datos entregados.
- **Nivel de certeza:** baja (no encuentro el caso).
- **Recomendación:** ninguna acción; se cita para descartar el caso.
- **Prueba:** listar los ejercicios con `sentarse_levantarse: false` e instrucciones «levántate» o «siéntate»; no hay ninguno en `catalogo-de-pie` con la secuencia.
- **¿Requiere decisión humana?:** no.

---

## 6. Opciones documentales para cerrar Q2

No elijo ninguna. Para cada una, indico qué cambiaría en cada documento o código y si requiere revisión profesional. Las opciones no son exhaustivas; son las que se derivan de los documentos entregados.

### Opción A · Cerrar Q2 con la distinción del usuario, codificada en las 16 exigencias existentes

- **Qué cambiaría:**
  - **Protocolo:** añadir a DG-4 (§7.1) una tabla de correspondencia entre las cinco distinciones y las exigencias actuales (contacto → nada; apoyo para estabilidad → `ambos_brazos` según Q1 y `agarre` si hay prensión; soporte de carga → `peso_en_manos`; prensión → `agarre`; obligatorio/opcional → clase 1 vs. 2/3 de DG-6). Cerrar Q2 en §13.
  - **Especificación:** aclarar en §4 que `agarre` cubre prensión y que `peso_en_manos` cubre carga; que el contacto no se marca. Añadir en §7.4 el criterio de prensión explícita.
  - **Esquema:** sin cambios (16 exigencias).
  - **Motor:** sin cambios (sigue leyendo `agarre`, `peso_en_manos`, `ambos_brazos`).
  - **Validador:** sin cambios.
  - **Opciones:** sin cambios en `de_pie_apoyo`; posible aclaración del texto (DS-78).
  - **Catálogo:** revisar los 17 indeterminados de DS-84 y los 4 sin apoyo de DS-88; aplicar el criterio. Requiere plan aprobado (R2.6).
- **¿Requiere revisión profesional?:** no para la parte documental; sí si se presenta como criterio de seguridad.
- **Nivel de certeza:** alta para la correspondencia; media para la aplicación a cada ejercicio (depende de la fuente).

### Opción B · Cerrar Q2 con la propuesta del auditor recogida en Q2 (palma abierta → `false`; instrucción neutra → `true` conservador), añadiendo el caso de prensión explícita de §7.4

- **Qué cambiaría:**
  - **Protocolo:** aprobar la propuesta de Q2 con tres casos (prensión explícita → `true` por §7.4; palma abierta → `false`; instrucción neutra → `true` conservador con nota `[conservadora]`). Cerrar Q2 en §13.
  - **Especificación:** aclarar §7.4 con los tres casos.
  - **Esquema:** sin cambios.
  - **Motor:** sin cambios.
  - **Validador:** sin cambios (la nota `[conservadora]` no se comprueba; DS-30).
  - **Opciones:** sin cambios.
  - **Catálogo:** revisar los 17 indeterminados; aplicar `true` conservador con nota `[conservadora]` a los neutros. Requiere plan aprobado.
- **¿Requiere revisión profesional?:** no para la parte documental; sí si se presenta como criterio de seguridad.
- **Nivel de certeza:** alta para la propuesta; media para la aplicación.

### Opción C · Cerrar Q2 con un campo nuevo que distinga las cinco categorías

- **Qué cambiaría:**
  - **Protocolo:** añadir una regla nueva (requiere aprobación del desarrollador, R1.4) que defina el campo y su uso.
  - **Especificación:** añadir el campo a §4 o §7.
  - **Esquema:** añadir el campo a `catalogo.json` y a `validacion-js` (`EXIGENCIAS` o campo aparte).
  - **Motor:** leer el campo en `calcularRestricciones` y `motivosIncompatibilidad`.
  - **Validador:** comprobar el campo.
  - **Opciones:** añadir opciones que excluyan las nuevas categorías (p. ej. «No puedo con apoyo obligatorio»).
  - **Catálogo:** rellenar el campo en los 220 ejercicios (o en los de pie primero). Requiere plan aprobado.
- **¿Requiere revisión profesional?:** sí, si el campo se usa para decidir compatibilidad con personas; la definición de las categorías es funcional, pero su aplicación a cada ejercicio puede requerir juicio clínico.
- **Nivel de certeza:** alta para el alcance; baja para la viabilidad (fuera del alcance de esta fase según el protocolo §14).

### Opción D · No cerrar Q2 y mantener el valor actual, registrando los casos como CN

- **Qué cambiaría:**
  - **Protocolo:** sin cambios; Q2 sigue abierta.
  - **Especificación:** sin cambios.
  - **Esquema:** sin cambios.
  - **Motor:** sin cambios.
  - **Validador:** sin cambios.
  - **Opciones:** sin cambios.
  - **Catálogo:** sin cambios; los casos se registran en `registro.md` como CN (R1.4).
- **¿Requiere revisión profesional?:** no.
- **Nivel de certeza:** alta.
- **Consecuencia:** los 17 indeterminados y los 4 sin apoyo siguen como están; el motor sigue ofreciéndolos a `de_pie_apoyo` + `cerrar_mano`.

### Opción E · Cerrar Q2 solo para el caso de prensión explícita (§7.4) y dejar el resto abierto

- **Qué cambiaría:**
  - **Protocolo:** incorporar §7.4 como criterio (prensión explícita → `agarre: true`); mantener Q2 abierta para el caso neutro.
  - **Especificación:** sin cambios (ya lo dice §7.4).
  - **Esquema:** sin cambios.
  - **Motor:** sin cambios.
  - **Validador:** sin cambios.
  - **Opciones:** sin cambios.
  - **Catálogo:** revisar los ejercicios con «sujétate» y `agarre: false` (no hay ninguno en `catalogo-de-pie`; todos los «sujétate» tienen `agarre: true`). Revisar los «manos en el respaldo» con `agarre: true` (`mini-sentadillas`, `elevacion-talones-apoyo`) y los «manos en el respaldo» con `agarre: true` (`elevacion-lateral-pierna`, `extension-pierna-atras`): si «manos en el respaldo» no es prensión explícita, quedarían en Q2.
- **¿Requiere revisión profesional?:** no para la parte documental.
- **Nivel de certeza:** alta.
- **Consecuencia:** cierra una parte de Q2 (prensión explícita) y deja el resto (instrucción neutra) abierto.

---

## 7. Lo que no se puede determinar sin las fuentes originales o sin un profesional

### DS-93 · Sin las fuentes originales no se puede determinar si «manos en el respaldo» implica prensión, contacto o apoyo para estabilidad en cada ejercicio

- **Ubicación:** `catalogo-de-pie` (17 indeterminados de DS-84); `protocolo` §12.2 (abrir la fuente real).
- **Evidencia:** `protocolo` §12.2: «Abrir la fuente real. Si no se puede, C4 con alcance de todo el ejercicio: PENDIENTE_DE_FUENTE». `catalogo-de-pie` `mini-sentadillas`: «las manos en el respaldo»; `elevacion-talones-apoyo`: «las manos en el respaldo»; `elevacion-lateral-pierna`: «las manos en el respaldo»; `extension-pierna-atras`: «las manos en el respaldo».
- **Explicación:** la instrucción de HealthMove es una redacción propia; la fuente puede decir «hold the back of the chair» (prensión) o «rest your hands on the back of the chair» (contacto/apoyo). Sin la fuente, no se puede saber si la redacción de HealthMove conserva o cambia el significado. Es un C4 con alcance de campo (`agarre`).
- **Consecuencia potencial:** la clasificación de DS-84 es provisional; la aplicación de Q2 a estos ejercicios requiere la fuente.
- **Nivel de certeza:** alta (es una limitación de los datos entregados).
- **Recomendación:** auditar las fuentes de los 17 indeterminados antes de aplicar Q2. Registrar como C4 con alcance de campo.
- **Prueba:** consultar las fuentes (NHS, Otago, etc.; no entregadas).
- **¿Requiere decisión humana?:** sí, tras la evidencia.

### DS-94 · Sin las fuentes originales no se puede determinar si los 4 ejercicios sin apoyo (`estiramiento-hombro-cruzado`, `estiramiento-triceps`, `estiramiento-pecho-manos-lumbar`, `manos-espalda-codo-contrario`) se hacen de pie con apoyo, de pie sin apoyo o sentado

- **Ubicación:** `catalogo-de-pie` (los cuatro); `especificacion` §3; `protocolo` §13 Q2.
- **Evidencia:** los cuatro tienen `posiciones: ["sentado","de_pie"]`, `equilibrio_sin_apoyo: false`, `agarre: false`. Sus instrucciones no mencionan apoyo. `manos-espalda-codo-contrario`: «Siéntate en el borde de la silla o ponte de pie». `estiramiento-hombro-cruzado`: «Pon una mano sobre el hombro contrario…». `estiramiento-triceps`: «Dobla un brazo y lleva la mano por encima del hombro…». `estiramiento-pecho-manos-lumbar`: «Pon las manos en la parte baja de la espalda».
- **Explicación:** si el ejercicio se hace de pie, las manos están ocupadas y no hay apoyo; `equilibrio_sin_apoyo: false` sería incorrecto (debería ser `true` o las instrucciones deberían indicar apoyo). Si se hace sentado, `equilibrio_sin_apoyo: false` es correcto. Sin la fuente, no se puede saber. Es un C4 con alcance de campo (`equilibrio_sin_apoyo` y `posiciones`).
- **Consecuencia potencial:** un usuario que necesita apoyo para estar de pie recibe el ejercicio (porque `equilibrio_sin_apoyo: false`), pero las instrucciones no le dicen cómo apoyarse. Es un falso positivo del filtro.
- **Nivel de certeza:** alta para la limitación; media para la resolución.
- **Recomendación:** auditar las fuentes de los cuatro; si se hacen de pie sin apoyo, valorar `equilibrio_sin_apoyo: true` o añadir instrucción de apoyo (requiere plan aprobado). Registrar como CN.
- **Prueba:** consultar las fuentes (Vivifrail, South Tees, Royal Berkshire, CDC/Tufts; no entregadas).
- **¿Requiere decisión humana?:** sí, tras la evidencia.

### DS-95 · Sin un profesional no se puede determinar si el contacto, el apoyo para estabilidad o el soporte de carga son adecuados para una persona concreta con dificultad para cerrar la mano

- **Ubicación:** `protocolo` §1.5; `especificacion` §1 y §7.5; decisión del usuario sobre Q2.
- **Evidencia:** `protocolo` §1.5: «La aprobación documental no es validación clínica… `revisado_por_profesional` queda reservado a una revisión profesional real, que hoy no existe». Especificación §1: «HealthMove no diagnostica, decide tratamientos, sustituye a profesionales, presenta una rutina como “segura” o “recomendada para tu condición”».
- **Explicación:** la distinción entre contacto, apoyo, carga y prensión es funcional y se puede documentar. Pero decidir si una persona concreta con dificultad para cerrar la mano puede hacer un ejercicio con apoyo indeterminado requiere juicio clínico. No lo puedo emitir.
- **Consecuencia potencial:** cualquier cierre de Q2 que se presente como criterio de seguridad requiere revisión profesional, que hoy no existe.
- **Nivel de certeza:** alta (es una limitación conocida).
- **Recomendación:** ninguna acción; señalar que la aplicación de Q2 a personas concretas requiere profesional.
- **Prueba:** —
- **¿Requiere decisión humana?:** sí, con profesional.

### DS-96 · Sin las fuentes originales no se puede determinar si la redacción de HealthMove de los 19 ejercicios con prensión explícita conserva el significado de la fuente

- **Ubicación:** `catalogo-de-pie` (19 con «sujétate» o «sujeta»); `especificacion` §7.7; `protocolo` §5.1 R3.2.
- **Evidencia:** especificación §7.7: «Las instrucciones se redactan con palabras propias en español; el texto de la fuente no se copia. Cualquier cambio respecto a la fuente se anota en `adaptaciones`». `protocolo` R3.2: «Texto en `adaptaciones`, redactado para el usuario. En el informe, la cita de la fuente que la justifica».
- **Explicación:** la instrucción «sujétate» puede ser una redacción propia de la fuente o una adaptación. Sin la fuente, no se puede saber si la fuente dice «hold» (prensión) o «rest your hands» (contacto). Si la fuente dice «rest» y HealthMove dice «sujétate», es una adaptación (C2) que debería estar en `adaptaciones`; si dice «hold», es fiel (C1).
- **Consecuencia potencial:** adaptaciones no documentadas; la etiqueta `agarre: true` podría ser correcta o no.
- **Nivel de certeza:** alta para la limitación; media para la resolución.
- **Recomendación:** auditar las fuentes de los 19; comprobar si «sujétate» es fiel o adaptación. Registrar como C4 con alcance de campo.
- **Prueba:** consultar las fuentes (no entregadas).
- **¿Requiere decisión humana?:** sí, tras la evidencia.

---

## Cierre

Esta auditoría es documental y no equivale a validación clínica profesional. No he aprobado ni rechazado ejercicios, etiquetas ni reglas. Los hallazgos se presentan para que el desarrollador decida.

**Resumen de lo verificado:**

- `de_pie_apoyo` exige estar de pie con apoyo y excluye solo `equilibrio_sin_apoyo`; no excluye `agarre`, `peso_en_manos`, `ambos_brazos`, `una_pierna` ni `sentarse_levantarse` (DS-77 a DS-83).
- De las cinco distinciones del usuario, solo «soporte de carga» (`peso_en_manos`) y «prensión» (`agarre`) tienen representación propia; «contacto», «apoyo para estabilidad» y «apoyo obligatorio/opcional» no la tienen (DS-84, DS-85).
- La especificación §7.4 cierra el caso de prensión explícita («sujetarse» es `agarre`) pero no el caso de instrucción neutra («manos en el respaldo»), que sigue dependiendo de R2.1 vs. R7.4 (DS-86, DS-87).
- De los 50 ejercicios con `de_pie`, 38 tienen `equilibrio_sin_apoyo: false`; de esos, 21 tienen `agarre: true` y 17 `agarre: false`. De los 17, 4 no mencionan apoyo y tienen `posiciones: ["sentado","de_pie"]` (DS-88).
- Las combinaciones `de_pie_apoyo` + `cerrar_mano`, `+ un_brazo` y `+ peso_manos` ofrecen ejercicios cuyas instrucciones piden algo que el perfil declara no poder hacer (DS-88, DS-89, DS-90). Las combinaciones `+ equilibrio` y `+ levantarse_silla` no producen el caso con los datos entregados (DS-91, DS-92).
- Sin las fuentes originales no se puede determinar si «manos en el respaldo» implica prensión, contacto o apoyo (DS-93), si los 4 sin apoyo se hacen de pie o sentado (DS-94), ni si la redacción de HealthMove conserva el significado de la fuente (DS-96). Sin un profesional no se puede determinar la adecuación a una persona concreta (DS-95).

**Correcciones a mi fase 01:** mantengo DS-02, DS-13, DS-26, DS-40 y DS-72 en su núcleo; matizo DS-52 (la incoherencia de los cinco ejercicios de `sentado,de_pie` depende de si se hacen de pie, DS-94) y DS-26 (el criterio observable es «palma abierta o yemas → `false`; “manos en el respaldo” o “sujétate” → `true`», no formalizado). No cambio ningún identificador de la fase 01; los nuevos van de DS-77 a DS-96.