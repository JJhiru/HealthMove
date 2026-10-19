- **Recomendación:** ninguna.
- **Prueba:** —
- **¿Requiere decisión humana?:** no.

### DS-47 · `sentarse-levantarse-sin-manos` y `banda-sentarse-levantarse` son variantes de `sentarse-levantarse` con `inclinacion_tronco: true`, mientras el original tiene `false`

- **Ubicación:** `catalogo-de-pie` (`sentarse-levantarse`, `sentarse-levantarse-sin-manos`, `banda-sentarse-levantarse`).
- **Evidencia:** `sentarse-levantarse`: `inclinacion_tronco: false`, nota «La inclinación es leve: no es inclinacion_tronco». `sentarse-levantarse-sin-manos`: `inclinacion_tronco: true`, instrucción «Inclínate un poco hacia delante». `banda-sentarse-levantarse`: `inclinacion_tronco: true`, instrucción «Inclínate hacia delante».
- **Explicación:** tres ejercicios de la misma familia, con instrucciones de inclinación similares, tienen valores distintos. La diferencia podría deberse a la fuente (NHS vs. Otago), pero el protocolo no permite verificarlo sin Q3. Es un caso límite de Q3.
- **Consecuencia potencial:** inconsistencia entre variantes; un usuario con dificultad para inclinar la espalda recibiría el original pero no las variantes, o al revés.
- **Nivel de certeza:** media (depende de la fuente).
- **Recomendación:** cerrar Q3 y revisar las tres fuentes.
- **Prueba:** consultar las fuentes (no entregadas).
- **¿Requiere decisión humana?:** sí. Cerrar Q3.

### DS-48 · `banda-sentarse-levantarse` tiene `agarre: true` y `carga_externa: true`; la instrucción pide «un extremo en cada mano», lo que implica ambas manos

- **Ubicación:** `catalogo-de-pie` `banda-sentarse-levantarse`.
- **Evidencia:** instrucción: «con el centro de la banda bajo los pies y un extremo en cada mano». `ambos_brazos: false`, `agarre: true`, `carga_externa: true`.
- **Explicación:** la instrucción exige ambas manos para sostener la banda, pero `ambos_brazos: false`. Bajo Q1 (si el apoyo bilateral cuenta) o bajo una lectura literal de la instrucción, debería ser `true`. Es un caso límite de Q1 y de la relación entre `carga_externa` y `ambos_brazos`.
- **Consecuencia potencial:** un usuario «Solo puedo usar un brazo» recibiría el ejercicio, pero la instrucción le pide usar las dos manos.
- **Nivel de certeza:** alta para la discrepancia; la resolución depende de Q1.
- **Recomendación:** cerrar Q1; mientras tanto, registrar como CN.
- **Prueba:** comparación literal.
- **¿Requiere decisión humana?:** sí. Cerrar Q1.

### DS-49 · `elevaciones-frontales-botella` tiene `ambos_brazos: true` y `agarre: true` con «una botella sujeta con las dos manos»; `elevaciones-laterales-botella` tiene `ambos_brazos: false` con «una botella en cada mano»

- **Ubicación:** `catalogo-de-pie` (`elevaciones-frontales-botella`, `elevaciones-laterales-botella`).
- **Evidencia:** `elevaciones-frontales-botella`: «una botella sujeta con las dos manos», `ambos_brazos: true`. `elevaciones-laterales-botella`: «una botella en cada mano», `ambos_brazos: false`.
- **Explicación:** ambos ejercicios requieren las dos manos (una botella con dos manos vs. una botella en cada mano), pero tienen valores distintos de `ambos_brazos`. La diferencia podría deberse a que en el segundo los brazos se mueven de forma independiente, pero ambos son necesarios. Es un caso límite de Q1 y de DG-4.
- **Consecuencia potencial:** inconsistencia; un usuario «Solo puedo usar un brazo» recibiría `elevaciones-laterales-botella` pero no `elevaciones-frontales-botella`, aunque ambos requieren dos manos.
- **Nivel de certeza:** alta para la discrepancia; media para la resolución (depende de si «una botella en cada mano» se considera bilateral).
- **Recomendación:** revisar con DG-4 y Q1; registrar como CN.
- **Prueba:** comparación literal.
- **¿Requiere decisión humana?:** sí. Cerrar Q1.

### DS-50 · `press-hombros-botella-pie` tiene `ambos_brazos: false` con «una botella en cada mano»

- **Ubicación:** `catalogo-de-pie` `press-hombros-botella-pie`.
- **Evidencia:** instrucción: «Ponte de pie con una botella en cada mano a la altura de los hombros». `ambos_brazos: false`, `agarre: true`, `carga_externa: true`.
- **Explicación:** mismo patrón que DS-49. La instrucción exige ambas manos, pero `ambos_brazos: false`.
- **Consecuencia potencial:** ídem.
- **Nivel de certeza:** alta para la discrepancia.
- **Recomendación:** ídem.
- **Prueba:** ídem.
- **¿Requiere decisión humana?:** sí. Cerrar Q1.

### DS-51 · `banda-elevar-brazos-pie` tiene `ambos_brazos: true` con «sujeta una banda en lazo con las dos manos»; `banda-deslizar-brazos-pared` tiene `ambos_brazos: true` con «una banda alrededor de las manos»

- **Ubicación:** `catalogo-de-pie` (`banda-elevar-brazos-pie`, `banda-deslizar-brazos-pared`).
- **Evidencia:** ambos tienen `ambos_brazos: true` y `agarre: false`. Las instrucciones piden las dos manos.
- **Explicación:** coherente con DG-4 (los dos brazos ejecutan el movimiento). Correcto. Se cita como contraste con DS-49 y DS-50.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba:** —
- **¿Requiere decisión humana?:** no.

### DS-52 · `estiramiento-hombro-cruzado`, `estiramiento-triceps`, `estiramiento-pecho-manos-lumbar`, `estiramiento-pecho-manos-detras`, `manos-espalda-codo-contrario` tienen `ambos_brazos: true` y `posiciones: ["sentado","de_pie"]` con `equilibrio_sin_apoyo: false`

- **Ubicación:** `catalogo-de-pie` (los cinco ejercicios).
- **Evidencia:** los cinco tienen `ambos_brazos: true`, `posiciones: ["sentado","de_pie"]`, `equilibrio_sin_apoyo: false`. Sus instrucciones no indican cómo apoyarse de pie; algunas dicen «Siéntate en el borde de la silla o ponte de pie» (`manos-espalda-codo-contrario`).
- **Explicación:** es el caso del hallazgo B de Claude (los cinco ejercicios). La hipótesis es que, en la opción de pie, las manos están ocupadas y las instrucciones no especifican cómo apoyarse. Verifico la existencia y las etiquetas; no puedo verificar la fuente. Si el ejercicio se hace de pie con ambas manos ocupadas, `equilibrio_sin_apoyo` debería ser `true` (no hay apoyo) o las instrucciones deberían indicar un apoyo. La combinación actual (`equilibrio_sin_apoyo: false` + `ambos_brazos: true` + instrucciones sin apoyo) es incoherente.
- **Consecuencia potencial:** un usuario que necesita apoyo para estar de pie recibiría el ejercicio (porque `equilibrio_sin_apoyo: false`), pero las instrucciones no le dicen cómo apoyarse y sus manos están ocupadas. Riesgo de falso positivo.
- **Nivel de certeza:** alta para la incoherencia instrucción/etiqueta; media para la resolución (depende de la fuente y de si el ejercicio se hace sentado o de pie).
- **Recomendación:** revisar con la fuente si el ejercicio se hace sentado, de pie o ambos; si se hace de pie, valorar `equilibrio_sin_apoyo: true` o añadir instrucción de apoyo. Registrar como CN.
- **Prueba:** consultar las fuentes (Vivifrail, South Tees, Royal Berkshire, CDC/Tufts; no entregadas).
- **¿Requiere decisión humana?:** sí, tras revisar fuentes.

### DS-53 · `estiramiento-pecho-manos-detras` tiene `agarre: true` con «Entrelaza las manos detrás de la espalda»

- **Ubicación:** `catalogo-de-pie` `estiramiento-pecho-manos-detras`.
- **Evidencia:** instrucción: «Entrelaza las manos detrás de la espalda». `agarre: true`, `mano_detras: true`, `ambos_brazos: true`.
- **Explicación:** entrelazar las manos implica cerrar la mano (agarre) y usar ambas. Correcto bajo DG-4 y R2.1. Se cita como contraste con los casos de apoyo.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba:** —
- **¿Requiere decisión humana?:** no.

### DS-54 · `estiramiento-pecho-manos-lumbar` tiene `mano_detras: true` y `ambos_brazos: true` con «Pon las manos en la parte baja de la espalda»

- **Ubicación:** `catalogo-de-pie` `estiramiento-pecho-manos-lumbar`.
- **Evidencia:** instrucción: «Pon las manos en la parte baja de la espalda. Junta los codos por detrás». `mano_detras: true`, `ambos_brazos: true`, `agarre: false`.
- **Explicación:** las manos van detrás de la espalda (mano_detras) y se usan ambas (ambos_brazos). No hay cierre de mano (agarre: false). Coherente.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba:** —
- **¿Requiere decisión humana?:** no.

### DS-55 · `manos-espalda-codo-contrario` tiene `mano_detras: true` y `ambos_brazos: true` con «Lleva las manos detrás de la espalda e intenta tocar con cada mano el codo contrario»

- **Ubicación:** `catalogo-de-pie` `manos-espalda-codo-contrario`.
- **Evidencia:** instrucción: «Lleva las manos detrás de la espalda e intenta tocar con cada mano el codo contrario, o acércate lo que puedas». `mano_detras: true`, `ambos_brazos: true`, `agarre: false`.
- **Explicación:** coherente. Se cita como contraste.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba:** —
- **¿Requiere decisión humana?:** no.

### DS-56 · `estiramiento-triceps` tiene `brazo_sobre_hombro: true` y `mano_detras: true` con «lleva la mano por encima del hombro hacia el omóplato»

- **Ubicación:** `catalogo-de-pie` `estiramiento-triceps`.
- **Evidencia:** instrucción: «Dobla un brazo y lleva la mano por encima del hombro hacia el omóplato». `brazo_sobre_hombro: true`, `mano_detras: true`, `ambos_brazos: true`.
- **Explicación:** coherente. Se cita como contraste.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba:** —
- **¿Requiere decisión humana?:** no.

### DS-57 · `estiramiento-hombro-cruzado` tiene `ambos_brazos: true` con «Pon una mano sobre el hombro contrario… Con la otra mano, empuja el codo»

- **Ubicación:** `catalogo-de-pie` `estiramiento-hombro-cruzado`.
- **Evidencia:** instrucción: «Pon una mano sobre el hombro contrario con el codo pegado al pecho. Con la otra mano, empuja el codo suavemente». `ambos_brazos: true`, `agarre: false`.
- **Explicación:** los brazos se alternan (una mano apoya, la otra empuja), pero ambos son necesarios. `ambos_brazos: true` es coherente con DG-4 (postura bilateral requerida). Se cita como ejemplo de la contradicción con el rótulo «a la vez» (DS-14).
- **Consecuencia potencial:** el usuario puede interpretar mal el rótulo.
- **Nivel de certeza:** alta.
- **Recomendación:** ver DS-14.
- **Prueba:** —
- **¿Requiere decisión humana?:** sí (rótulo).

---

## 11. Decisiones que pueden cerrarse documentalmente

### DS-58 · Q3 («inclinación leve») puede cerrarse con la decisión del usuario

- **Ubicación:** `protocolo` §13 Q3; decisión del usuario Q3.
- **Evidencia:** decisión del usuario: «Si la fuente no proporciona un ángulo exacto, debe conservarse el término original y no inventarse un umbral numérico. Si la fuente proporciona un ángulo exacto, puede utilizarse en la explicación con atribución a la fuente».
- **Explicación:** la decisión es clara y compatible con R7.8. Puede incorporarse al protocolo y a la especificación §4 sin necesidad de código.
- **Consecuencia potencial:** cierra la ambigüedad de DS-12 y DS-47.
- **Nivel de certeza:** alta.
- **Recomendación:** incorporar la decisión a `protocolo.md` (R7.8) y a `especificacion-v1.md` §4; registrar en `registro.md`.
- **Prueba:** revisión editorial.
- **¿Requiere decisión humana?:** sí. Aprobar la incorporación.

### DS-59 · V7 (`fecha_revision`) puede cerrarse documentalmente y requiere cambio de validador

- **Ubicación:** decisión del usuario V7; `validacion-js`; `especificacion` §7.6.
- **Evidencia:** decisión del usuario: «El usuario está de acuerdo con exigir tanto `revisado_por` como `fecha_revision` para salir del estado de borrador, después de comprobar la especificación, el validador y las pruebas».
- **Explicación:** la especificación ya lo exige; el validador no. Cerrar V7 requiere cambio de código (validador) y de pruebas, no solo documental. Pero la decisión de fondo puede registrarse ya.
- **Consecuencia potencial:** cierra DS-07.
- **Nivel de certeza:** alta.
- **Recomendación:** registrar la decisión en `registro.md`; planificar el cambio de `validacion-js` y de las pruebas.
- **Prueba:** test que verifique que un ejercicio sin `fecha_revision` no pasa a `basado_en_fuente_publica`.
- **¿Requiere decisión humana?:** sí. Aprobar el cambio de validador.

### DS-60 · V9/Q4 (variantes) puede cerrarse documentalmente

- **Ubicación:** decisión del usuario V9/Q4; `protocolo` §5.2 R5.1.
- **Evidencia:** decisión del usuario: «Las variantes de ejercicios adaptadas a HealthMove deben estar documentadas en la fuente o contar con respaldo verificable. No se deben inventar variantes sin evidencia».
- **Explicación:** coincide con R5.1 y R5.2. Puede registrarse como confirmación de DG-5.
- **Consecuencia potencial:** ninguna nueva; refuerza DG-5.
- **Nivel de certeza:** alta.
- **Recomendación:** registrar en `registro.md` como confirmación de DG-5.
- **Prueba:** revisión editorial.
- **¿Requiere decisión humana?:** sí. Registrar.

### DS-61 · La herramienta de disponibilidad puede cerrarse documentalmente (alcance) y requiere desarrollo

- **Ubicación:** decisión del usuario «Herramienta de disponibilidad»; `protocolo` §9 y §14.
- **Evidencia:** decisión del usuario: «El usuario está de acuerdo con desarrollar una herramienta que analice el impacto de cambios de etiquetas antes de modificar el catálogo. La herramienta debe analizar sin alterar datos ni decidir por sí sola que un cambio es correcto».
- **Explicación:** el protocolo ya la propone (§14) y describe el prototipo (§9). La decisión confirma el alcance. Cerrar documentalmente requiere definir la lista de perfiles (DS-19) y el formato de salida.
- **Consecuencia potencial:** sin la herramienta, las mediciones de impacto son manuales y no reproducibles.
- **Nivel de certeza:** alta.
- **Recomendación:** definir la lista de perfiles y el formato; incorporar a `scripts/`.
- **Prueba:** script que reproduzca el 31/20/0 de Q1.
- **¿Requiere decisión humana?:** sí. Aprobar el desarrollo y la lista de perfiles.

### DS-62 · El versionado y la trazabilidad pueden cerrarse documentalmente con `propuestas-cierre` (huellas)

- **Ubicación:** decisión del usuario «Versionado»; `propuestas-cierre` §1.
- **Evidencia:** decisión del usuario: «El usuario está de acuerdo con preservar la trazabilidad de informes, evidencias, versiones del protocolo y decisiones aplicadas». `propuestas-cierre` propone `hc1`, `hco1`, `ha1`.
- **Explicación:** la propuesta está completa pero no aprobada. Cerrar documentalmente requiere aprobar `propuestas-cierre` §1.2 y §1.3.
- **Consecuencia potencial:** sin huellas, la reutilización de auditorías no es fiable.
- **Nivel de certeza:** alta.
- **Recomendación:** aprobar o rechazar `propuestas-cierre` §1.
- **Prueba:** revisión editorial.
- **¿Requiere decisión humana?:** sí. Aprobar la propuesta.

### DS-63 · Q6 (skill) ya está resuelta según el protocolo y el registro

- **Ubicación:** `protocolo` §13 Q6; `registro` decisión P4.
- **Evidencia:** `protocolo` Q6: «**Resuelta** (`registro.md`, decisiones del 2026-10-18, P4): la copia vigente es la de `desarrollo-v1`». `registro` P4: «La copia vigente de `auditar-catalogo-ejercicios` es la de `desarrollo-v1`».
- **Explicación:** cerrada. Se cita para confirmar.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba:** —
- **¿Requiere decisión humana?:** no.

### DS-64 · Q8(b) (mensaje de procedencia) tiene aclaración aprobada pero texto de interfaz pendiente

- **Ubicación:** `protocolo` §13 Q8(b); `registro` P2; `propuestas-cierre` §2.
- **Evidencia:** `registro` P2: «Se aprueba como **aclaración** una continuación nueva… El texto concreto de la interfaz y su implementación siguen pendientes (Q8(b))». `propuestas-cierre` §2 propone un texto.
- **Explicación:** la aclaración está aprobada; el texto concreto no. Cerrar documentalmente requiere aprobar el texto de `propuestas-cierre` §2.
- **Consecuencia potencial:** la interfaz no comunica la procedencia.
- **Nivel de certeza:** alta.
- **Recomendación:** aprobar o modificar el texto de `propuestas-cierre` §2.
- **Prueba:** revisión editorial.
- **¿Requiere decisión humana?:** sí. Aprobar el texto.

---

## 12. Decisiones que requieren pruebas de código

### DS-65 · V7 requiere prueba de que el validador rechaza un ejercicio sin `fecha_revision`

- **Ubicación:** `validacion-js`; `especificacion` §7.6.
- **Evidencia:** ver DS-07.
- **Explicación:** la decisión está tomada; falta implementar y probar.
- **Consecuencia potencial:** sin prueba, no se sabe si el cambio funciona.
- **Nivel de certeza:** alta.
- **Recomendación:** añadir test en `tests/` que verifique el rechazo.
- **Prueba:** test unitario.
- **¿Requiere decisión humana?:** no (la decisión ya está tomada); requiere desarrollo.

### DS-66 · Q1 requiere prueba de impacto en disponibilidad con la herramienta

- **Ubicación:** `protocolo` §13 Q1; `motor-js`.
- **Evidencia:** Q1: «para el perfil "Solo puedo usar un brazo" + "Puedo estar de pie solo si me sujeto a algo", los ejercicios de pie compatibles serían 31 si el apoyo no cuenta, 20 si solo cuenta cuando además hay `una_pierna`, y 0 si cuenta siempre».
- **Explicación:** las cifras son de una medición previa; requieren reproducirse con la herramienta y el catálogo actual.
- **Consecuencia potencial:** sin reproducir, no se puede decidir Q1 con datos.
- **Nivel de certeza:** media (no puedo reproducir).
- **Recomendación:** implementar la herramienta (DS-61) y reproducir las tres cifras.
- **Prueba:** script que calcule los tres escenarios.
- **¿Requiere decisión humana?:** sí, tras la prueba.

### DS-67 · Q2 requiere prueba de que el motor distingue apoyo de agarre

- **Ubicación:** `motor-js`; `validacion-js`.
- **Evidencia:** ver DS-35.
- **Explicación:** la distinción de Q2 no está en el esquema; requiere prueba de que el motor puede implementarla sin cambio de modelo o de que necesita cambio.
- **Consecuencia potencial:** sin prueba, no se sabe si Q2 es cerrable sin cambio de esquema.
- **Nivel de certeza:** alta.
- **Recomendación:** probar con un catálogo de prueba que tenga `agarre: false` y `peso_en_manos: true` (palma abierta con carga) y verificar que el motor filtra correctamente.
- **Prueba:** test con `flexiones-pared` y perfil «Me cuesta cerrar la mano».
- **¿Requiere decisión humana?:** sí, tras la prueba.

### DS-68 · El hallazgo B (31/15/4/5) requiere reproducción con el catálogo actual

- **Ubicación:** `catalogo-de-pie`; `motor-js`.
- **Evidencia:** Claude: «Las cifras del hallazgo B se volvieron a medir el 2026-10-18 con el catálogo cuyo identificador git es el mismo que el de este envío».
- **Explicación:** no puedo reproducir las cifras sin el catálogo completo. Los cinco ejercicios citados existen y tienen las etiquetas descritas (DS-52). Las cifras 31/15/4 no las puedo verificar.
- **Consecuencia potencial:** si las cifras son correctas, confirman el problema; si no, el alcance es menor.
- **Nivel de certeza:** baja para las cifras; alta para la existencia de los cinco ejercicios.
- **Recomendación:** reproducir con la herramienta (DS-61).
- **Prueba:** script que cuente los ejercicios de pie compatibles con `de_pie_apoyo` + `un_brazo` y busque «dos manos»/«palmas» en instrucciones.
- **¿Requiere decisión humana?:** no (es verificación).

### DS-69 · El hallazgo E (220 borradores, 0 aprobados, 34 auditados) se confirma parcialmente

- **Ubicación:** `catalogo-esquema` `por_estado`; `registro` «Ejercicios auditados».
- **Evidencia:** `catalogo-esquema`: `"por_estado": {"borrador": 220}`. `registro`: tabla con 34 filas (contadas: lote 1 = 5, lote 2 = 5, lote 3 = 5, lote 4 = 9, lote 5 = 10; total 34).
- **Explicación:** 220 borradores y 0 aprobados se confirman con el esquema. 34 auditados se confirman con el registro. La afirmación «34 auditorías previas realizadas antes del protocolo 1.0» es coherente con el registro («Los resultados de los lotes 1 a 5 son anteriores al protocolo 1.0»).
- **Consecuencia potencial:** ninguna; confirma el estado.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba:** conteo manual del registro.
- **¿Requiere decisión humana?:** no.

### DS-70 · La afirmación «35 variantes» requiere verificación en el catálogo completo

- **Ubicación:** `catalogo-esquema` `variantes: 35`.
- **Evidencia:** ver DS-44.
- **Explicación:** no puedo verificar sin el catálogo completo.
- **Consecuencia potencial:** si las variantes no tienen fuente, incumplen R5.6.
- **Nivel de certeza:** baja.
- **Recomendación:** auditar las 35 variantes.
- **Prueba:** listar y revisar fuentes.
- **¿Requiere decisión humana?:** sí, tras la verificación.

---

## 13. Decisiones que requieren evidencia adicional o revisión profesional

### DS-71 · Q1 requiere evidencia de la fuente original para cada ejercicio

- **Ubicación:** decisión del usuario Q1; `protocolo` §13 Q1.
- **Evidencia:** decisión del usuario: «El análisis debe basarse primero en la evidencia de la fuente original… Si la fuente no permite determinarlo, se debe aplicar el criterio conservador».
- **Explicación:** la decisión es clara, pero requiere consultar las fuentes de cada ejercicio afectado. No es una decisión documental cerrable sin evidencia.
- **Consecuencia potencial:** sin evidencia, Q1 no se cierra.
- **Nivel de certeza:** alta.
- **Recomendación:** auditar las fuentes de los ejercicios de pie con apoyo bilateral.
- **Prueba:** fichas por fuente (propuestas en `protocolo` §14).
- **¿Requiere decisión humana?:** sí, tras la evidencia.

### DS-72 · Q2 requiere evidencia de la fuente y posible revisión profesional

- **Ubicación:** decisión del usuario Q2; `protocolo` §13 Q2.
- **Evidencia:** decisión del usuario: «Q2 permanece abierta hasta que DeepSeek haya revisado la definición documental y las evidencias técnicas pertinentes».
- **Explicación:** la distinción contacto/apoyo/carga/prensión es funcional, pero su aplicación a cada ejercicio requiere la fuente. Si se plantea como criterio de seguridad, requeriría revisión profesional (no la hay).
- **Consecuencia potencial:** sin evidencia, Q2 no se cierra.
- **Nivel de certeza:** alta.
- **Recomendación:** auditar las fuentes; si se quiere presentar como criterio de seguridad, revisión profesional.
- **Prueba:** fichas por fuente.
- **¿Requiere decisión humana?:** sí.

### DS-73 · Q3 requiere evidencia de la fuente (ángulo) o aceptación del término original

- **Ubicación:** decisión del usuario Q3.
- **Evidencia:** ver DS-58.
- **Explicación:** si la fuente da ángulo, se usa; si no, se conserva el término. Requiere consultar las fuentes.
- **Consecuencia potencial:** sin evidencia, no se puede aplicar.
- **Nivel de certeza:** alta.
- **Recomendación:** consultar las fuentes de `sentarse-levantarse` y variantes.
- **Prueba:** fichas por fuente.
- **¿Requiere decisión humana?:** sí, tras la evidencia.

### DS-74 · La validación clínica profesional no existe y el protocolo lo reconoce; cualquier decisión que la requiera queda bloqueada

- **Ubicación:** `protocolo` §1.5; `especificacion` §7.5; `registro` decisión 3.
- **Evidencia:** `protocolo` §1.5: «`revisado_por_profesional` queda reservado a una revisión profesional real, que hoy no existe». `especificacion` §7.5: «La validación profesional queda como riesgo abierto».
- **Explicación:** ninguna decisión que requiera validación clínica puede cerrarse hoy. Esto incluye cualquier afirmación sobre seguridad de un ejercicio o sobre idoneidad para una población.
- **Consecuencia potencial:** el catálogo no puede pasar de `basado_en_fuente_publica` a `revisado_por_profesional`.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna acción; es una limitación conocida. Se cita para que no se confunda con una decisión pendiente.
- **Prueba:** —
- **¿Requiere decisión humana?:** no (requiere profesional).

### DS-75 · Los avisos de seguridad de la app (§8.3) no están validados profesionalmente

- **Ubicación:** `protocolo` §8.3 y §8.4.
- **Evidencia:** §8.4: «cualquier texto sobre síntomas, interrupción o respuesta ante incidentes debe ser prudente, revisarse con la skill `healthmove-safety-reviewer` y, antes de presentarse como orientación sanitaria validada, pasar una revisión profesional que hoy no existe».
- **Explicación:** los avisos actuales no están validados. No es una contradicción, pero conviene señalarlo.
- **Consecuencia potencial:** los avisos podrían no ser adecuados.
- **Nivel de certeza:** alta.
- **Recomendación:** revisión profesional cuando exista.
- **Prueba:** —
- **¿Requiere decisión humana?:** sí, con profesional.

### DS-76 · La población destinataria (`fuente.especifica_de`) no es criterio de compatibilidad, pero su presentación en la interfaz requiere revisión

- **Ubicación:** `protocolo` §11.2 R8.2 y R8.3; `registro` P2; `propuestas-cierre` §2.
- **Evidencia:** R8.2: «La población de la fuente **no** es un criterio de compatibilidad». R8.3: «un ejercicio procedente de una fuente dirigida a una población **no** es por ello apropiado para todas las personas de ese grupo».
- **Explicación:** el texto de interfaz propuesto en `propuestas-cierre` §2 incluye «Que sea compatible no garantiza que sea seguro para ti», que es una afirmación de seguridad. Requiere revisión profesional antes de presentarse como orientación sanitaria validada.
- **Consecuencia potencial:** el texto podría interpretarse como garantía o como consejo sanitario.
- **Nivel de certeza:** media.
- **Recomendación:** revisar con `healthmove-safety-reviewer` y, si se presenta como orientación, con profesional.
- **Prueba:** revisión de la skill.
- **¿Requiere decisión humana?:** sí.

---

## 14. Recomendaciones priorizadas por gravedad y dependencia

**Prioridad 1 (bloqueantes de la aplicación de cambios):**
1. **DS-01:** decidir el orden de cierre de Q1-Q3 frente a la aplicación de cambios. Sin esto, los 34 auditados no pueden convertirse en cambios.
2. **DS-09 / DS-25 / DS-39 / DS-48 / DS-49 / DS-50 / DS-52:** cerrar Q1 con la decisión del usuario (basada en fuente, instrucciones y apoyo opcional). Afecta a la mayoría de los ejercicios de pie.
3. **DS-02 / DS-13 / DS-26 / DS-40:** cerrar Q2 con la distinción del usuario (contacto / apoyo / carga / prensión / obligatorio vs. opcional). Afecta a `agarre` en todo el catálogo.
4. **DS-12 / DS-47 / DS-58:** cerrar Q3 con la decisión del usuario (conservar término o usar ángulo de la fuente). Afecta a `inclinacion_tronco`.

**Prioridad 2 (trazabilidad y validador):**
5. **DS-07 / DS-29 / DS-59 / DS-65:** incorporar V7 (`fecha_revision`) al validador y a las pruebas.
6. **DS-03 / DS-15 / DS-16 / DS-21:** decidir el alcance retroactivo de R2.4 (notas `[conservadora]`).
7. **DS-42 / DS-44 / DS-70:** auditar las 35 variantes y asegurar la conservación de informes.
8. **DS-62:** aprobar o rechazar `propuestas-cierre` §1 (huellas).

**Prioridad 3 (modelo y motor):**
9. **DS-08 / DS-24:** decidir el significado de `posiciones` (secuencia vs. alternativa) y su impacto en el motor.
10. **DS-28 / DS-36:** decidir si el validador debe comprobar las exclusiones del catálogo v1 (desplazamiento, material especial, etc.).
11. **DS-35 / DS-67:** verificar si Q2 es cerrable sin cambio de esquema.

**Prioridad 4 (editorial y herramientas):**
12. **DS-06 / DS-11:** actualizar citas de `app.js` y alinear textos.
13. **DS-14:** cambiar el rótulo de `ambos_brazos`.
14. **DS-19 / DS-61:** definir la lista de perfiles y desarrollar la herramienta de disponibilidad.
15. **DS-64:** aprobar el texto de interfaz de Q8(b).

**Prioridad 5 (evidencia adicional):**
16. **DS-71 / DS-72 / DS-73:** auditar las fuentes de los ejercicios afectados por Q1-Q3.
17. **DS-74 / DS-75 / DS-76:** revisión profesional cuando exista.

---

## Evaluación de las hipótesis A a E

### Hallazgo A — Etiquetas `ambos_brazos`

**Evaluación: confirmada parcialmente, matizada.**

- **Confirmado:** existen ejercicios con `ambos_brazos: false` cuyas instrucciones mencionan dos manos o palmas. Ejemplos verificables en `catalogo-de-pie`: `circulos-cadera-pie` («Sujétate con las dos manos», `ambos_brazos: false`), `elevar-puntas-pies-apoyo` («sujétate con las dos manos», `ambos_brazos: false`), `paso-atras-apoyo` («sujétate con las dos manos», `ambos_brazos: false`), `flexion-rodilla-pie-apoyo` («sujétate con las dos manos», `ambos_brazos: false`), `banda-sentarse-levantarse` («un extremo en cada mano», `ambos_brazos: false`), `elevaciones-laterales-botella` («una botella en cada mano», `ambos_brazos: false`), `press-hombros-botella-pie` («una botella en cada mano», `ambos_brazos: false`).
- **Confirmado:** existen ejercicios con una mano apoya y la otra trabaja. Ejemplo: `estiramiento-hombro-cruzado` («Pon una mano sobre el hombro contrario… Con la otra mano, empuja el codo»), con `ambos_brazos: true`. Es coherente con DG-4, pero contradice el rótulo «a la vez» (DS-14).
- **Matizado:** la inconsistencia no es solo entre fuente e instrucción; también entre instrucción y etiqueta. La distinción entre «apoyo bilateral» (Q1) y «ejecución bilateral» (DG-4) no está formalizada. No puedo separar errores confirmados de sospechas sin la fuente original.
- **No verificable:** la consistencia con la fuente original (no la tengo).

### Hallazgo B — Coordinación de filtros

**Evaluación: parcialmente verificable; las cifras no se confirman, los cinco ejercicios sí.**

- **Verificado:** los cinco ejercicios citados (`estiramiento-hombro-cruzado`, `estiramiento-triceps`, `estiramiento-pecho-manos-lumbar`, `estiramiento-pecho-manos-detras`, `manos-espalda-codo-contrario`) existen en `catalogo-de-pie`, tienen `posiciones: ["sentado","de_pie"]`, `ambos_brazos: true` y `equilibrio_sin_apoyo: false`. Sus instrucciones no especifican cómo apoyarse de pie (DS-52).
- **No verificado:** las cifras 31/15/4. No puedo reproducirlas sin el catálogo completo ni el motor ejecutable. La afirmación de Claude de que se midieron el 2026-10-18 con el mismo identificador git es plausible pero no verificable con los documentos entregados.
- **Matizado:** la hipótesis de que «en la opción de pie, las manos están ocupadas y las instrucciones no especifican cómo apoyarse» es coherente con las etiquetas, pero la resolución depende de la fuente (¿el ejercicio se hace sentado, de pie o ambos?).

### Hallazgo C — Significado de `posiciones`

**Evaluación: confirmada como contradicción documental y defecto del modelo de datos.**

- **Confirmado:** `sentarse-levantarse` usa `posiciones: ["sentado","de_pie"]` como secuencia obligatoria (hay que estar sentado y de pie). `estiramiento-hombro-cruzado` usa la misma combinación, pero sus instrucciones no indican que haya que estar de pie; podría ser alternativa. La especificación §3 dice «Un ejercicio anota **todas** las posiciones que usa y solo es compatible si todas están permitidas», lo que no distingue secuencia de alternativa.
- **Confirmado:** el motor trata ambos igual (`for (const p of ej.posiciones) if (!restr.posiciones.has(p)) motivos.push(...)`), lo que produce falsos negativos para «solo sentado» en los ejercicios que usan `posiciones` como alternativa (DS-24).
- **Conclusión:** es a la vez contradicción documental (la especificación no representa los dos significados) y defecto del modelo de datos (el esquema no distingue). Requiere decisión humana (DS-08).

### Hallazgo D — V7

**Evaluación: confirmada.**

- **Confirmado:** el validador solo exige `revisado_por` para salir de `borrador` (`validacion-js`: `!esTexto(ej.validacion.revisado_por)`), mientras la especificación §7.6 exige `revisado_por` **y** `fecha_revision`. El validador no comprueba `fecha_revision` (DS-07).
- **Confirmado:** el usuario (V7) está de acuerdo con exigir ambas, pero no está incorporado.
- **Conclusión:** confirmada; requiere cambio de validador y de pruebas (DS-59, DS-65).

### Hallazgo E — Cobertura y madurez

**Evaluación: confirmada.**

- **Confirmado:** 220 ejercicios en `borrador` y 0 aprobados (`catalogo-esquema`: `"por_estado": {"borrador": 220}`).
- **Confirmado:** 34 auditados (conteo de la tabla «Ejercicios auditados» del `registro`: 5 + 5 + 5 + 9 + 10 = 34).
- **Confirmado:** las 34 auditorías son anteriores al protocolo 1.0 (`registro`: «Los resultados de los lotes 1 a 5 son anteriores al protocolo 1.0 y se revisarán con él antes de aplicar cambios al catálogo»).
- **Conclusión:** confirmada. La consecuencia es que ningún ejercicio es usable fuera de modo desarrollo (DS-10) y que las 34 auditorías deben revisarse con el protocolo 1.0 antes de aplicar cambios (DS-01).

---

## Cierre

Esta auditoría es documental y no equivale a validación clínica profesional. No he aprobado ni rechazado ejercicios, etiquetas ni reglas. Los hallazgos se presentan para que el desarrollador decida. Las cuestiones que requieren juicio clínico (Q1, Q2, Q3 en su aplicación a ejercicios concretos, y cualquier afirmación sobre seguridad) quedan señaladas como tales y requieren evidencia de la fuente original y, cuando corresponda, revisión profesional.

Las decisiones del usuario (Q1, Q2, Q3, V7, V9/Q4, herramienta de disponibilidad, versionado) están confirmadas pero no incorporadas; su incorporación al protocolo, la especificación, el validador y el motor es la vía para cerrar los hallazgos DS-01 a DS-04, DS-07, DS-09, DS-12, DS-13, DS-25, DS-26, DS-39, DS-40, DS-47, DS-48, DS-49, DS-50, DS-52, DS-58, DS-59, DS-61 y DS-62.