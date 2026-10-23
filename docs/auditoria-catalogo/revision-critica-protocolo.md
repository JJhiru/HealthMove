# Revisión crítica de la propuesta de protocolo de discrepancias

- Fecha: 2026-10-14
- Objeto: `docs/auditoria-catalogo/propuesta-protocolo-discrepancias.md`, que no se ha modificado.
- **Estado: revisión para aprobación.** No cambia la skill, la especificación, el catálogo, las ilustraciones ni la interfaz. No aplica ninguna decisión general.
- No es una validación clínica. Las cifras de disponibilidad son recuentos del motor sobre datos de etiquetado, no juicios sobre la idoneidad de un ejercicio para una persona.

## Qué se ha comprobado para esta revisión

**Leído:**
- `docs/especificacion-v1.md`: §1, §2, §4 (incluida la línea 64 sobre las frases de referencia), §7 y §8.
- `public/js/opciones.js` (completo).
- `public/js/motor.js`: líneas 11-15, 44-59 y 91, y la lista de funciones exportadas.
- `public/js/app.js`: líneas 575-630, la vista del detalle.
- `tests/ayudas.mjs`.
- La cabecera de `tests/motor.test.mjs`, las líneas 1-45, y los títulos de todos los tests.
- Los textos guardados del NHS: *strength*, *balance* y *flexibility*.
- Las secciones del lote 5 de los casos reales.
- `registro.md`, la consolidación y la propuesta.

**Búsquedas:**
- `referencia` en `tests/`, `scripts/` y `public/js/`: ningún resultado. Los casos de referencia del §7 no están codificados en ningún test.
- `notas_etiquetado` en `public/js/`: ningún resultado. La interfaz no muestra esa nota.
- `.claude/skills` del worktree: la skill `auditar-catalogo-ejercicios` **no está** en `desarrollo-v1`. Solo existe, sin seguimiento, en la copia de trabajo de `main`.

**Medición de disponibilidad:**
- Script de solo lectura: `~/.claude/jobs/174a7127/tmp/prot/impacto.mjs`. Modifica una copia del catálogo en memoria y usa las funciones reales del motor y de `perfil.js`. Con `permitirBorrador: true`, porque los 220 ejercicios están en borrador.
- No es un test del proyecto. No se ha ejecutado `npm test`, porque no ha cambiado ningún archivo de código ni de datos.

---

## 1. Hallazgos críticos y contradicciones

### H1. Los niveles D, I, C, A y N mezclan tres dimensiones

  | Código | Qué describe en realidad |
  |---|---|
  | D, I | **Certeza** de la evidencia: concluyente o aproximada |
  | C | **Regla de decisión** aplicada (§7.1), no un nivel de evidencia |
  | A | **Procedencia** del valor: lo fija una instrucción de HealthMove, no la fuente |
  | N | Ausencia de certeza **y** de regla aplicable |

**Consecuencia:** un mismo valor necesita dos códigos a la vez, y la propuesta no dice cuál prevalece. Ejemplos:
- `estiramiento-gemelo-pared`, `peso_en_manos`: la fuente habla de la intención («for stability», evidencia de tipo D sobre la intención) y la foto es aproximada (I). El valor saldría por la regla C o por la vía A.
- `mini-sentadillas`, `flexion_profunda_rodilla`: el texto dice «as far as is comfortable» y la foto muestra poca flexión. Es a la vez I y C.

Un auditor podría escribir «I», y otro, «C».

### H2. C5 no forma parte de la misma partición que C1-C4

C1-C4 describen la relación de un detalle con la fuente. C5-N, C5-M y C5-S describen un **bloqueo**. La propia propuesta clasifica dos veces:
- `flexiones-pared`: «C3 + C5-N».
- Leicester: C3 en los datos y C5-M en la interfaz.

Tal como está, la regla «una categoría por detalle» es incumplible. **No es una duplicación innecesaria, sino un segundo eje mal presentado.**

### H3. El caso 5.1 aplica mal el §7.4

El §7.4 dice que en los ejercicios de pie se usa silla o pared «salvo que estén marcados con `equilibrio_sin_apoyo`». `elevacion-talones-sin-apoyo` **está** marcado. Por tanto, el §7.4 no respalda la silla cercana. Es una medida añadida por HealthMove que no cubre ninguna regla aprobada.

La propuesta la clasificó como «rutinaria»; requiere aprobación.

### H4. La asimetría se aplica como aprobada mientras se pide aprobarla (DG-2)

- Los apartados 2.4, 5.3 y 5.4 ya resuelven casos con la asimetría, que todavía es la decisión pendiente DG-2.
- Algunas expresiones afirman seguridad: «dirección segura» y «`true` nunca hace insegura una rutina».
  - Lo único demostrable es que `true` **reduce el conjunto de perfiles** a los que se ofrece el ejercicio (`motor.js:54`).
  - Debe decirse «dirección restrictiva». Esto afecta a la norma de no confundir la aprobación documental con una afirmación sobre seguridad.

### H5. DG-1 se justificó con el argumento equivocado y contra el texto

- **Argumento inválido.** «El catálogo ya se desvía de los casos de referencia» no prueba nada. El catálogo es un borrador generado con IA (§7.6), y sus desviaciones son precisamente lo que se audita.
- **El texto de la especificación apunta a listas completas:**
  - La columna se titula «Exigencias».
  - Dos filas llevan «—»: «elevar los brazos hasta los hombros» y «Puente de glúteo». Un guion solo tiene sentido si la lista es completa.
  - El §7.2 dice que lo no marcado significa «revisada: no la exige».
- **Lo que la especificación no dice:** que los casos sean vinculantes para cualquier ejercicio del catálogo con un nombre parecido. Describen ejercicios **genéricos** de una línea, sin instrucciones.
- **Comportamiento del motor:** solo lee etiquetas (§8 y `motor.js:54`) y ningún test codifica los casos de referencia. Hoy no tienen fuerza ejecutable, solo normativa.
- **Otro hueco de la especificación:** el §4, línea 64, promete «una frase de referencia por umbral» para «inclinación leve» y «90°». **Ninguna de las dos está escrita.** La frase de 90° la cubre ya la decisión 2, que hay que transcribir. La de «inclinación leve» no existe, y de ella depende `sentarse-levantarse`. El conflicto de ese ejercicio no es solo de casos de referencia: es un umbral sin definir.

### H6. En `sentarse-levantarse` la propuesta dio más peso a la foto del que tiene

El texto del NHS, que no cité en la propuesta, dice:
- Paso A: «Lean **slightly** forwards».
- Paso B: «Stand up slowly using your legs, not arms».
- Paso C: «using your hands or arms just to guide you **if possible**».

Consecuencias:
- **Inclinación del tronco:** el texto respalda una inclinación leve al inicio. La foto B muestra más inclinación durante la subida, y el §4 cuenta «cualquier momento». La certeza depende del umbral sin definir (H5). La nota actual del catálogo no es una inferencia sin base, como dije, sino una lectura del paso A que ignora el B.
- **Peso en las manos:** «if possible» admite que algunas personas usen las manos para algo más que guiarse. `peso_en_manos` en false **no es concluyente**. La propuesta lo dio por respaldado con «A ya presente», pero `adaptaciones` está vacío. Es una contradicción interna.

### H7. Dos resoluciones incompatibles de «manos en el respaldo»

- El NHS dice «**Rest** your hands on the back of a chair for stability» en las elevaciones de talones, las mini sentadillas, la elevación lateral y la extensión atrás.
- El catálogo escribe «con las manos en el respaldo» y marca `agarre` por conservadurismo (lote 5, por el §4 y el caso de referencia).
- La DG-6 de la propuesta pedía cambiar la contingencia «sujétate» por «apoya las manos en la silla» **para no exigir agarre**.

Con la misma lógica del lote 5, «apoya las manos en la silla» también sería `agarre`. **La misma expresión se resolvería de dos maneras opuestas.**

### H8. Tres apartados tratan por separado la misma clase de casos

| Apartado | Caso |
|---|---|
| DG-4 | Manos que apoyan o descansan |
| DG-6 | Manos de contingencia |
| 5.5 | Manos «solo como guía si lo necesitas» |

Las tres son **usos de las manos que no son el movimiento del ejercicio**. Afectan a la vez a `ambos_brazos`, `agarre` y `peso_en_manos`. Deben decidirse juntas: si no, cada exigencia acabará con un criterio distinto para las mismas manos.

### H9. La opción A de DG-4 introduce una adaptación sin declararla

- «Apoya una o las dos manos» no es solo una regla de etiquetado. **Reduce el apoyo** respecto a una fuente que dice «your hands», en plural.
- Con una mano, el equilibrio pesa más. Es una cuestión relevante para la seguridad (C5-S) que la propuesta no planteó.
- Según la taxonomía del apartado 2.3 de esta revisión, apoyarse con una mano cuando la fuente pide las dos **no es un subconjunto** de lo que la fuente permite: es una modificación.

### H10. DG-3 tiene una vía de escape

Sus condiciones («no cambia el movimiento ni el propósito», «realista») no son comprobables. Con ellas se podría justificar «levanta un poco el pie» en `equilibrio-una-pierna-pared`, que ya se **retiró**. Falta una prueba objetiva (apartado 2.3).

### H11. La propuesta trataba `adaptaciones` como un registro interno, y el usuario lo lee

- **Quién ve qué:**
  - `app.js` muestra `adaptaciones` al usuario en «Cambios respecto a la fuente».
  - `notas_etiquetado` no se muestra.
- **Lo que mandaba la propuesta a `adaptaciones`:** incertidumbres de auditoría como «La fuente no precisa en qué posición se mantienen los 5 s», además del relleno de lagunas.
- **Consecuencias:**
  - Esos textos los leería el usuario.
  - La incertidumbre de auditoría debe ir a `notas_etiquetado` y al registro.
  - A `adaptaciones` solo van cambios que el usuario necesita conocer, redactados para él.

### H12. Los textos compuestos de `especifica_de` de la consolidación chocan con el formato existente

- **Formato existente:** los 49 valores actuales son nombres de población cortos, como «párkinson» o «amputación por debajo de la rodilla».
- **Lo que proponía la consolidación:** «usuarios de silla de ruedas; el ejercicio está escrito para la pierna que queda tras una amputación». Mezcla población y adaptación.
- **Cómo se vería:** «Material pensado para: usuarios de silla de ruedas; el ejercicio está escrito para…».
- **Corrección:** la observación sobre la amputación es una adaptación («aquí se hace con cada pierna») y su sitio es `adaptaciones`.

### H13. Una metarregla implícita

El apartado 2.2 de la propuesta decía «decisión aprobada frente a una regla de la especificación: prevalece la decisión». Es una metarregla que nadie ha aprobado, y choca con la fila siguiente («decisión frente a evidencia: se para»).

Además, la decisión 1 (criterio literal de `ambos_brazos`) no se pronunció sobre el caso de referencia «Flexiones contra la pared». Darla por prevalente sería aprobar algo que no se votó.

### H14. La huella de reanudación es insuficiente

Un ejercicio que no cambia puede necesitar otra revisión si cambia una decisión general o la fuente. La validez depende de tres cosas:
- la huella del ejercicio;
- la versión del conjunto de decisiones;
- la fecha de consulta de la fuente.

### H15. La disponibilidad no está amenazada por estos cambios; sí lo está DG-4 en su opción B

Medido sobre los 220 ejercicios, todos tratados como usables:

| Escenario | Perfiles posición + 1-2 opciones sin rutina de 15 min | Solo sentado + 3 opciones sin rutina | Mínimo de ejercicios principales compatibles (solo sentado + 3) | De pie compatibles para «un brazo» + «de pie si me sujeto» |
|---|---|---|---|---|
| Catálogo actual | 0 de 630 | 0 de 1140 | 12 | 31 |
| Cambios de exigencias de la consolidación | 0 de 630 | 0 de 1140 | 12 | 30 |
| DG-4 opción B (marca 34 ejercicios de pie con apoyo) | 0 de 630 | 0 de 1140 | 12 | **0** |

**Lectura:**
- El marcado conservador de los lotes 1-5 cuesta poco.
- La opción B de DG-4 deja sin **ningún** ejercicio de pie a quien usa un brazo y necesita sujetarse.
- El riesgo de disponibilidad real hoy es el borrador: fuera del modo desarrollo hay 0 ejercicios usables. El conservadurismo no lo es.

**Límite de la medición:** el filtro de «ejercicios de pie con apoyo» es una búsqueda de texto (silla, pared, apoyo…) sin auditar.

### H16. La skill no está en la rama de trabajo

`auditar-catalogo-ejercicios` solo existe, sin seguimiento, en la copia de trabajo de `main`. Editarla supondría cambiar archivos fuera de `desarrollo-v1` y sin control de versiones. Hay que decidir dónde vive antes de modificarla (P1 en el apartado 3).

### Comprobación del resto de reglas

| Comprobación | Resultado |
|---|---|
| ¿Alguna regla permite presentar una adaptación como fuente? | No directamente. Pero H11 (incertidumbres en un campo que lee el usuario) y H12 (una adaptación dentro de `especifica_de`) difuminan la frontera. Ambos se corrigen abajo |
| ¿Alguna regla permite inventar ejercicios? | DG-5 lo impide. DG-3 lo permitía de forma indirecta (H10) |
| ¿Alguna regla confunde aprobación documental con validación clínica? | Solo el lenguaje de H4 |
| ¿Clasifican C1-C4 todos los casos sin duplicaciones? | Sí, una vez que C5 se separa como eje de bloqueos (H2). Falta distinguir la **aclaración** como forma de resolver un C3 sin pasar por `adaptaciones` (apartado 2.3) |

---

## 2. Propuesta revisada de las reglas afectadas

### 2.1. Modelo con dimensiones separadas (sustituye a D, I, C, A y N)

**Por cada detalle:**

| Dimensión | Valores | Pregunta que responde |
|---|---|---|
| **Estado frente a la fuente** | C1 fiel · C2 adaptación documentada · C3 diferencia sin documentar · C4 indeterminado (con alcance: ejercicio o campo) | ¿Coincide con la fuente? |
| **Bloqueos** (0 a n) | B-N norma · B-M modelo · B-S seguridad o ética, cada uno con el id de la decisión de la que depende | ¿Qué impide cerrarlo? |

**Además, por cada exigencia:**

| Dimensión | Valores |
|---|---|
| **Fundamento** | `fuente-texto` · `fuente-imagen` · `instruccion-hm` (lo fija una instrucción de HealthMove) · `estructural` (imposible por la posición) · `ninguno` |
| **Certeza** | `concluyente` · `aproximada` · `insuficiente` |
| **Regla del valor** | `evidencia` · `conservadora-7.1` · `decision:<id>` · `caso-referencia` |

**Combinaciones válidas:**

| Regla | Exige | Valor resultante |
|---|---|---|
| `evidencia` | Certeza concluyente | `true` o `false` |
| `conservadora-7.1` | Certeza aproximada o insuficiente | Solo `true` |
| `false` con fundamento `instruccion-hm` | Una adaptación que cumpla la prueba del subconjunto (2.3) y esté aprobada | `false` |

Si la certeza es insuficiente y no hay regla aplicable, se abre un **bloqueo**. Así desaparece N.

**Cómo clasifica los casos reales:**

| Ejercicio · detalle | Estado | Fundamento | Certeza | Regla | Valor | Bloqueo |
|---|---|---|---|---|---|---|
| `estiramiento-pecho-sentado` · `brazo_sobre_hombro` | C1 | fuente-imagen | concluyente | evidencia | false | — |
| `flexiones-pared` · `ambos_brazos` | C3 | fuente-texto | concluyente | evidencia | true | B-N (caso de referencia, G3) |
| `equilibrio-una-pierna-pared` · instrucción «levanta la pierna» | C3, resuelto como **aclaración** | fuente-imagen | concluyente (dirección) | evidencia | «sube la rodilla hacia delante» | — |
| `equilibrio-una-pierna-pared` · `flexion_profunda_rodilla` | C4 | fuente-imagen | aproximada (en torno a 90°) | conservadora-7.1 | true | — |
| `equilibrio-una-pierna-pared` · `flexion_amplia_cadera` | C1 | fuente-imagen | concluyente (muslo casi horizontal) | evidencia | false | — |
| `equilibrio-una-pierna-pared` · ilustración | C3, bloqueante | fuente-imagen | concluyente | — | redibujar | — |
| `estiramiento-gemelo-pared` · `peso_en_manos` | C4 | fuente-texto (intención) + fuente-imagen | insuficiente | conservadora-7.1 → true; o, si se aprueba G5, `instruccion-hm` → false | según G5 | — |
| `mini-sentadillas` · `flexion_profunda_rodilla` | C4 | fuente-texto («as far as is comfortable») + fuente-imagen (poca flexión) | aproximada | conservadora-7.1 → true; o, por G5, `instruccion-hm` («dobla un poco») → false | según G5 | — |
| `sentarse-levantarse` · `inclinacion_tronco` | C4 | fuente-texto (A: «slightly») + fuente-imagen (B: más inclinación) | **no evaluable**: falta el umbral | — | — | **B-N (G4: frase de «inclinación leve»)** |
| `sentarse-levantarse` · `peso_en_manos` | C4 | fuente-texto («just to guide you if possible») | insuficiente | conservadora-7.1 → true, salvo G6 | según G6 | B-N (G6) |
| `elevacion-talones-sin-apoyo` · silla cercana | C3 | — | concluyente (la fuente no la menciona) | — | documentar como adaptación de HealthMove | B-S leve: aprobar la medida (G6) |
| `elevacion-talones-apoyo` · `agarre` | C4 | fuente-texto («Rest your hands») | insuficiente (apoyar sobre el respaldo puede implicar cerrar los dedos) | conservadora-7.1 | true | Ligado a G6 |
| `banda-curl-sentado` · posición del mantenimiento de 5 s | C4, alcance de instrucción | — | insuficiente | Se redacta con la misma vaguedad que la fuente | — | No bloqueante. La nota va a `notas_etiquetado`, no a `adaptaciones` |

### 2.2. Conservadurismo, disponibilidad y prioridad de revisión

1. **Registrar la incertidumbre donde no la lea el usuario.**
   - Convención en `notas_etiquetado`, que no se muestra: `[conservadora] <exigencia>: <motivo>. Se cerraría con: <evidencia que falta>.`
   - En `registro.md`, una tabla de incertidumbres abiertas con: id, exigencia, valor, fundamento, certeza, regla y evidencia que falta.
   - **No se usa `adaptaciones`** (H11).
2. **Medir el impacto por perfil.**
   - Un informe, no un test que falle, que calcule para un conjunto fijo de perfiles los ejercicios compatibles por fase en dos escenarios:
     - **actual;**
     - **sin conservadurismo:** las marcas `conservadora-7.1` pasadas a false, solo en memoria.
   - Perfiles del conjunto: cada opción sola; cada posición; posición con 2 opciones; solo sentado con 3 opciones (como en H15).
   - La diferencia entre escenarios es el **coste de la incertidumbre**.
   - El informe se calcula **sobre los ejercicios fuera de borrador** y, como proyección, sobre todo el catálogo.
3. **Prioridad de revisión,** en este orden:
   1. Marcas conservadoras que hacen que un perfil pase de tener rutina a no tenerla.
   2. Marcas que reducen por debajo del doble de `MINIMOS` el número de ejercicios de una fase para algún perfil. Este umbral es un parámetro de diseño que debes aprobar.
   3. Coste de conseguir la evidencia: por ejemplo, si la fuente tiene una foto sin revisar.
   - Con los datos de H15, hoy la prioridad es **sacar ejercicios del borrador**, no revisar las marcas conservadoras.
4. **Límite.** El informe no decide nada por sí solo. Una marca conservadora cara se revisa buscando evidencia, **nunca** se retira para ganar disponibilidad. El §1 prohíbe relajar filtros.

### 2.3. Aclaración, adaptación y modificación (sustituye a DG-3)

**Prueba principal (del subconjunto):** ¿la ejecución que pide HealthMove es una de las ejecuciones que permite la fuente?

**Cómo se determina lo que «permite la fuente»:**
- Si el texto concede un rango («as far as is comfortable», «hasta donde puedas»), la imagen es un ejemplo dentro de ese rango.
- Si el texto no da rango y la imagen lo muestra, **la imagen fija el rango**.

| Tipo | Prueba | Dónde se documenta | ¿Puede bajar exigencias? | Ejemplo real |
|---|---|---|---|---|
| **Aclaración** | Hace explícito lo que la fuente dice o muestra de forma concluyente. Quien siga la fuente cumple la aclaración, y al revés | Evidencia en el registro o en la ficha de la fuente. **No** va en `adaptaciones` | Solo con evidencia concluyente | «Sube la rodilla hacia delante» (foto del NHS); la posición inicial del curl con banda (foto de Age UK) |
| **Adaptación que conserva el ejercicio** | La ejecución de HealthMove es un **subconjunto** de las que permite la fuente, o añade un elemento externo que no altera el movimiento (silla cerca, dosis). Mismos segmentos, dirección, posición, lados y propósito | `adaptaciones`, redactada para el usuario | **Sí**, si se aprueba (G5) y la restricción no vacía el propósito declarado por la fuente | Gemelo en la pared «sin echar el peso sobre las manos» («for stability» lo permite); mini sentadillas «dobla un poco» («as far as is comfortable» lo permite) |
| **Modificación** | La ejecución **no** está entre las que permite la fuente: otro número de extremidades, otra dirección o postura, menos rango del que fija la imagen, o quitar un componente (como la alternancia) | Es otro ejercicio. **Solo** con una fuente propia (G7) | — | Boxeo con un brazo; abrir y cerrar una sola mano; «levanta un poco el pie» (la imagen fija la rodilla alta y el texto no da rango: **la propuesta retirada sigue retirada**); apoyarse con una mano cuando la fuente pide las dos |

**Cierres contra la vía de escape:**
1. Cada adaptación lleva la cita de la fuente que demuestra el subconjunto.
2. No puede quitar el componente que da nombre o propósito al ejercicio. Por ejemplo, el equilibrio en un ejercicio de equilibrio.
3. Un cambio en el número de extremidades nunca es adaptación.
4. Cada aplicación se lista en el plan del lote.
5. El motivo no puede ser «ganar disponibilidad» (§1).

### 2.4. Casos de referencia del §7 (sustituye a DG-1)

**Tres lecturas posibles:**

| Opción | Lectura | Consecuencias | Efecto en el motor |
|---|---|---|---|
| **A. Exhaustivos y vinculantes** | Todo ejercicio del catálogo equivalente al genérico lleva exactamente esas exigencias | Habría que **quitar** de `sentarse-levantarse` `equilibrio_sin_apoyo` y `flexion_profunda_rodilla`, que hoy están marcadas, y no se podrían añadir la inclinación ni la flexión de cadera. `flexiones-pared` no podría llevar `ambos_brazos`, en contra de la decisión 1 | Más disponibilidad para `sentarse-levantarse`, contradiciendo la evidencia visual |
| **B. Ilustrativos** | Solo muestran exigencias típicas | Los «—» pierden su sentido. Desaparece la calibración común entre auditores | Ninguno directo. Más divergencia entre auditores |
| **C. Calibración vinculante, revisable por enmienda** (recomendada) | Vinculan para la descripción genérica de la fila. Un ejercicio concreto se evalúa con sus propias instrucciones y puede añadir exigencias si añade elementos. Si un ejercicio *equivalente* contradice la fila, el auditor **no** resuelve: propone enmendar la fila, y una vez aprobada se aplica a todos | Las incoherencias actuales se convierten en enmiendas explícitas (tabla siguiente) | Un test nuevo puede codificar las filas sobre ids designados y dar fuerza ejecutable a la calibración |

**Contraste con el catálogo y las propuestas** (solo para la opción C):

| Fila del §7 | Ejercicio equivalente | Situación | Enmienda que habría que decidir |
|---|---|---|---|
| Sentarse y levantarse: `sentarse_levantarse` | `sentarse-levantarse` | El catálogo añade `equilibrio_sin_apoyo` y `flexion_profunda_rodilla`; la evidencia apunta a más | Decidir fila por fila. `equilibrio_sin_apoyo` excluye el ejercicio de «De pie solo si me sujeto» y de «Me cuesta mantener el equilibrio». Depende también de G4 (umbral de inclinación) |
| Flexiones contra la pared: `peso_en_manos` | `flexiones-pared` | La decisión 1 da `ambos_brazos` | ¿Se añade `ambos_brazos` a la fila? |
| Elevar los talones sujetándose a la silla: `puntillas_talones`, `agarre` | `elevacion-talones-apoyo` | Coincide. La fila implica que las manos de apoyo no cuentan para `ambos_brazos` | Ninguna, pero condiciona G6 |
| Marcha sentado: `flexion_amplia_cadera` | `marcha-sentado-manos-cadera` | Coincide | — |
| Puente de glúteo: — | `puente-tumbado`, `puente-suelo` | Coinciden: «—» | — |

### 2.5. Interfaz separada de la auditoría

| Asunto | Parte de auditoría (datos) | Parte de interfaz (código, aprobación y commit aparte) | Dependencia |
|---|---|---|---|
| **Procedencia** | `fuente.especifica_de` con un nombre de población corto, como los 49 existentes. Las observaciones que cambian la ejecución («la pierna que queda») van a `adaptaciones` | Texto y posición del mensaje (`app.js:621`), genérico para todo `especifica_de` | Ninguna en un sentido ni en otro. La interfaz no bloquea la aprobación documental |
| **Rótulo de `ambos_brazos`** | El criterio de etiquetado (decisión 1 + G6) | `ETIQUETA_EXIGENCIA.ambos_brazos` (`opciones.js:103`). Se usa en «Exige:» y en las explicaciones de exclusión | **El texto del rótulo depende de G6.** Debe publicarse antes o junto con los cambios de datos de `ambos_brazos`; si no, las explicaciones serán incorrectas |
| **Adaptaciones visibles** | Redacción de `adaptaciones` pensada para el usuario | Hoy se muestran en un desplegable cerrado («Cambios respecto a la fuente»). Cambiar eso es una decisión de interfaz opcional | — |
| **Urgencia** | — | Fuera del modo desarrollo no se ve ningún ejercicio en borrador, así que los cambios de interfaz no afectan a los usuarios hasta que haya ejercicios aprobados | — |

---

## 3. Decisiones que realmente tienes que aprobar

Agrupan D4-D11 de la consolidación y DG-1 a DG-8 de la propuesta. Mientras una esté pendiente, se aplica el valor provisional indicado.

| Id | Pregunta y alcance | Opciones y efecto en el motor | Recomendación | Provisional | Absorbe |
|---|---|---|---|---|---|
| **G1** | **Estructura del protocolo.** Dos ejes por detalle (estado frente a la fuente + bloqueos) y, para las exigencias, fundamento, certeza y regla. Incluye la evidencia visual como rango estimado: concluyente solo si todo el rango cae a un lado del umbral. Incluye el registro de incertidumbres fuera de `adaptaciones` | Sin efecto en el motor | Aprobar | — | DG-7; H1, H2, H11 y H14 |
| **G2** | **Regla del valor.** `true` con evidencia concluyente o por conservadurismo; `false` solo con evidencia concluyente o una adaptación aprobada (G5). Lenguaje: «restrictiva», no «segura» | Solo puede reducir disponibilidad. Medido en H15: sin perfiles perdidos con los cambios de los lotes 1-5 | Aprobar | Valores actuales; las propuestas se listan | DG-2; D7 y D8 en parte |
| **G3** | **Casos de referencia del §7** | A, B o C del apartado 2.4 | **C**, con estas enmiendas: (a) `flexiones-pared` + `ambos_brazos`: sí/no; (b) fila de sentarse y levantarse: qué exigencias, pendiente de G4 | Fila actual | DG-1; D6 en parte |
| **G4** | **Frases de umbral del §4.** (a) Transcribir la decisión 2 (ángulo muslo-pierna en vista lateral, más de 90°). (b) Fijar «inclinación leve» | Para (b): **(i)** referencia angular en vista lateral (por ejemplo, 30° desde la vertical; el número lo eliges tú, es operativo y no clínico); **(ii)** comparación con una postura («más de lo que se inclina al sentarse erguido en el borde de la silla»). Efecto: decide si `sentarse-levantarse` sale de los perfiles «inclinar» y «no inclinar espalda» | **(i)**, por coherencia con el criterio de rodilla | `inclinacion_tronco` sin cambios; `sentarse-levantarse` pendiente | D6 en parte |
| **G5** | **Taxonomía y prueba del subconjunto** (2.3) para que una adaptación pueda dejar una exigencia en false | Sí, con los cinco cierres / No (solo evidencia de la fuente). Con «no», gemelo en la pared y mini sentadillas quedan en true | Sí, con los cierres | true por conservadurismo | DG-3, D7 y D8 |
| **G6** | **Manos que no son el movimiento del ejercicio** (apoyo, reposo, guía opcional, contingencia), para `ambos_brazos`, `agarre` y `peso_en_manos` a la vez | `ambos_brazos`: **A** no cuentan, solo donde la fuente no exige las dos manos. Si las exige, apoyarse con una es una modificación (H9). **A′** como A, pero se marca en los de pie con `una_pierna`, como sustituto conservador del mayor reto de equilibrio. No es un juicio clínico. **B** cuentan siempre. Efecto medido, de pie compatibles para «un brazo» + «de pie si me sujeto»: A 31, A′ 20, B **0** (medido; los ejercicios «con apoyo» se identifican por búsqueda de texto). `agarre`: manos «en el respaldo» → true por conservadurismo (como ahora); palmas abiertas en la pared → false. `peso_en_manos`: guía opcional «si es posible» → true por conservadurismo salvo una adaptación por G5. Contingencias: no cuentan si van redactadas como opcionales y no son necesarias para hacer el ejercicio; se documentan en `adaptaciones` | **A** para `ambos_brazos`, con la salvedad de las dos manos; resto como se describe | Valores actuales | D4, D5, DG-4, DG-6; casos 5.1 y 5.5; H7 y H8 |
| **G7** | **Derivados sin fuente** | No / Sí, marcados como adaptación de HealthMove (exigiría enmendar el §1) | **No** en la v1; los huecos se registran | No se crean | DG-5, D9 |
| **G8** | **`elevacion-talones-sin-apoyo`:** aceptar la silla cercana como medida propia de HealthMove documentada | Sí / No (se quita y el ejercicio queda como en la fuente). Sin efecto en el motor | Sí | Sin cambios | Caso 5.1, H3 |

**Decisiones de interfaz** (aprobación y commit aparte; no bloquean la auditoría):

| Id | Pregunta | Recomendación |
|---|---|---|
| **U1** | Mensaje de procedencia genérico para todo `especifica_de` y su ubicación | Una frase en el bloque «Fuente», basada en tu texto, sin campo nuevo |
| **U2** | Rótulo de `ambos_brazos` | Con G6 = A: «necesitar los dos brazos para el movimiento». Se publica antes o junto con los cambios de datos |

**Decisiones de proceso:**

| Id | Pregunta | Recomendación |
|---|---|---|
| **P1** | Dónde vive la skill: dejarla sin seguimiento en `main` o incorporarla a `desarrollo-v1` | Incorporarla a `desarrollo-v1` antes de editarla, para que los cambios queden versionados |
| **P2** | Umbral de aviso del informe de disponibilidad | 2 × `MINIMOS` por fase, solo como aviso |

---

## 4. Lo que se conserva sin cambios de la propuesta original

**Apartado 0:**
- Punto 1: las exigencias describen la definición de HealthMove. Hay que añadir que la fuente sigue siendo la referencia para decidir si una adaptación es legítima.
- Punto 2: las dos formas de exclusión.
- Punto 3: la prohibición de inventar.

**Apartado 1:**
- 1.1, la unidad de análisis por detalle.
- C1-C4, con sus definiciones.
- La tabla 1.3 de categorías descartadas.

**Apartado 2:**
- 2.5, las condiciones de parada. Cambia solo la 2: «sin evidencia concluyente o adaptación aprobada».
- 2.6, los criterios de derivados, más la prueba del subconjunto.

**Apartados 3 a 9:**
- Apartado 3: las capas A-D y la conclusión de no añadir campos al esquema.
- Apartado 4.1: la tabla de alcance. Se corrige la fila de laguna, cuya nota va a `notas_etiquetado`.
- Apartado 4.3: los registros. Se corrige la huella (H14).
- Apartado 6: el flujo por fuente, el informe abreviado y el formato mínimo de decisión, al que se añaden fundamento y certeza.
- Apartado 9: los riesgos.
- Apartado 5: los casos 5.2, 5.3, 5.6 y 5.7 en lo esencial.

**No se conservan:**
- Los niveles D, I, C, A y N.
- La partición con C5.
- DG-1 a DG-8 tal como estaban.
- Los casos 5.1, 5.4 y 5.5 tal como estaban.
- La metarregla del apartado 2.2.
- El lenguaje de «dirección segura».

---

## 5. Plan de implementación por archivos (tras tu aprobación)

| Ámbito | Archivo | Cambio | Depende de |
|---|---|---|---|
| **Protocolo** | `docs/auditoria-catalogo/protocolo-discrepancias.md` (nuevo) | Versión definitiva: propuesta + esta revisión, con las decisiones aprobadas | G1, G2, G5 |
| **Skill** | `.claude/skills/auditar-catalogo-ejercicios/SKILL.md` | §4: dos ejes. §5: fundamento, certeza y regla. Nueva sección de precedencia, parada, subconjunto y derivados. §3: decisiones, retiradas y fichas de fuente; renderizar los PDF a columnas. §8: formato abreviado. §10: lotes por fuente | P1, G1, G2, G5, G7 |
| **Documentación** | `docs/especificacion-v1.md` §4 | Frases de umbral | G4 |
| | `docs/especificacion-v1.md` §7 | Estado de los casos de referencia y enmiendas | G3 |
| | `docs/revision-catalogo.md` | Huecos para usar un solo brazo. Actualizar la tabla de decisiones dudosas | G7 |
| | `docs/auditoria-catalogo/registro.md` | Decisiones generales, pendientes únicas, retiradas, incertidumbres y huella con versión de decisiones | G1 |
| | `docs/auditoria-catalogo/fuentes/*.md` (nuevos) | NHS (3 páginas), Age UK Devon, Leicester | — |
| **Datos** | `public/data/catalogo.json` | El plan de la consolidación, revisado así: `especifica_de` corto y la amputación a `adaptaciones` (H12); incertidumbres a `notas_etiquetado` (H11); exigencias según G2-G6; texto de G8. Sin estados, fechas, autoría ni versión | G2-G6, G8 |
| | `scripts/ilustraciones/sentado.mjs:10`, `:33` y `depie.mjs:18` | Tres fichas que no coinciden con las fotos | — |
| **Herramientas y tests** | `scripts/informe-disponibilidad.mjs` (nuevo) | Informe del apartado 2.2, a partir del prototipo de `tmp/prot/impacto.mjs` | P2 |
| | `tests/motor.test.mjs` | Si G3 = C: test que codifica las filas del §7 sobre ids designados | G3 |
| **Interfaz** | `public/js/opciones.js:103` | Rótulo | U2, G6 |
| | `public/js/app.js:621` | Mensaje de procedencia | U1 |

Orden propuesto, con commits separados:
1. Protocolo y skill.
2. Documentación.
3. Herramienta de disponibilidad.
4. Datos e ilustraciones, por lotes.
5. Interfaz.

---

## 6. Riesgos residuales y pruebas necesarias

### Riesgos

| Riesgo | Por qué persiste | Mitigación |
|---|---|---|
| La prueba del subconjunto depende de cómo se lea la fuente | «Permite» es interpretable cuando el texto es breve | Cita obligatoria. Ante la duda, es modificación |
| La frase de umbral de inclinación es una convención | No hay medida clínica detrás | Se presenta como referencia operativa, igual que los 90° |
| A′ en G6 usa `una_pierna` como sustituto | No es un juicio clínico sobre el equilibrio | Solo si se elige. Documentarlo como convención conservadora |
| El informe de disponibilidad empuja a retirar marcas | Presión por llenar rutinas | Regla 2.2.4: solo se busca evidencia, nunca se retira para ganar disponibilidad |
| Los textos de `adaptaciones` los leen usuarios | Redacción técnica o alarmista | Revisarlos con la skill `healthmove-ux-designer` antes de aplicarlos |
| Un primer caso de clase nueva no se detecta | El auditor lo encaja en una decisión que no le corresponde | Cada decisión declara su clase. Ante la duda, se presenta como posible miembro |

### Pruebas tras aplicar cambios

1. `node scripts/validar-catalogo.mjs`.
2. `npm run ilustraciones` y revisión visual de las tres fichas.
3. `npm run version-sw`.
4. `npm test`: los 43 actuales, incluida la propiedad de seguridad con 400 perfiles.
5. Test nuevo de los casos de referencia (si G3 = C).
6. Informe de disponibilidad antes y después de cada lote de datos, con el mismo conjunto de perfiles de H15.
7. Comprobación en el navegador de una ficha con `especifica_de`, de otra con `adaptaciones` y del rótulo de `ambos_brazos` en «Exige:» y en la pantalla sin rutina.
8. Para la skill: aplicar el protocolo a un lote nuevo (Royal Devon) y comprobar que todos los detalles se clasifican sin código doble y que solo se elevan decisiones nuevas.

**Ninguna de estas pruebas se ha ejecutado en esta fase**, porque no se ha cambiado nada. Solo se ejecutó la medición de solo lectura de H15.
