# Propuesta: protocolo universal de discrepancias del catálogo

- Fecha: 2026-10-14
- **Estado: PROPUESTA.** No es todavía política del proyecto. No se ha integrado en la skill `auditar-catalogo-ejercicios`, no cambia el catálogo, las ilustraciones ni la especificación, y no resuelve las decisiones D4 a D11 de la consolidación.
- Es un protocolo documental. Ninguna de sus categorías equivale a una validación clínica.

**Lo que se ha revisado para escribirla:**
- la especificación (`docs/especificacion-v1.md`, §1, §2, §4, §7 y §8);
- la guía del autor (`docs/revision-catalogo.md`);
- la skill de auditoría;
- `scripts/validar-catalogo.mjs`;
- el motor (`public/js/motor.js`);
- los tests (`tests/*.mjs`);
- los informes `lote-01` a `lote-05`, `registro.md` y `consolidacion-lotes-1-5.md`;
- los datos reales de los casos del apartado 5.

---

## 0. Tres hechos del proyecto que condicionan el protocolo

1. **Las exigencias describen lo que HealthMove pide hacer al usuario, no lo que dice la fuente.**
   - El motor (`motor.js:54`) solo lee `exigencias`.
   - Las exigencias son, por tanto, propiedad de la definición de HealthMove (capa B, apartado 3).
   - La fuente sirve como evidencia de si esa definición es fiel y de qué movimiento implica.
   - Consecuencia: una adaptación documentada que restrinja la ejecución puede cambiar legítimamente una exigencia. Una suposición del auditor, no.
2. **El modelo solo tiene dos formas de dejar fuera un ejercicio.**
   - **Excluirlo entero:** dejarlo en `borrador`. Fuera del modo desarrollo nunca se usa (`motor.js:50`; test «sin modo desarrollo, los ejercicios en borrador nunca se usan»).
   - **Excluirlo solo para ciertos perfiles:** marcar una exigencia en `true`. Desaparece únicamente para quien tenga restringida esa exigencia.
   - Por eso el marcado conservador (§7.1) es *la* herramienta de exclusión parcial. No hace falta un estado nuevo.
3. **La especificación prohíbe inventar.** El §1 dice que HealthMove no «inventa ejercicios o variantes». Esto limita los ejercicios derivados (apartado 2.5 y caso 5.7).

---

## 1. El protocolo: categorías de discrepancia

### 1.1. Unidad de análisis

- Se clasifica **cada detalle relevante**, no el ejercicio entero. Un mismo ejercicio puede tener un detalle en C1 y otro en C4.
- **Detalles relevantes:**
  - posición inicial;
  - secuencia del movimiento;
  - lados;
  - recorrido o amplitud;
  - apoyos y uso de las manos;
  - dosis y duración;
  - recursos;
  - cada una de las 16 exigencias;
  - ilustración;
  - procedencia (población a la que se dirige la fuente);
  - relación de variante.

### 1.2. Categorías

Las cinco que propones bastan como base. Solo hace falta **partir la quinta en tres**, porque se resuelven de formas distintas.

| Código | Situación | En una frase |
|---|---|---|
| **C1** | Respaldado por la fuente y conforme con los criterios | Nada que hacer, salvo registrar la evidencia |
| **C2** | Difiere de la fuente, pero es una adaptación explícita y justificada | Ya está en `adaptaciones` con su motivo |
| **C3** | Difiere de su referencia y no está documentado | Hay que corregirlo hacia la fuente o documentarlo como adaptación |
| **C4** | La evidencia no permite decidir | Se conserva la incertidumbre y se fija su **alcance** (apartado 4) |
| **C5-N** | Conflicto normativo: dos reglas aprobadas, o una regla y un caso de referencia, dan resultados distintos | Decide el desarrollador, una vez para toda la clase de casos |
| **C5-M** | Límite del modelo: el esquema, el motor, el validador o la interfaz no pueden representar lo que es verdad | No se deforma el dato para que encaje. Se elige la representación conservadora y se propone un cambio de modelo o un derivado |
| **C5-S** | Seguridad o límites éticos | Prevalece siempre. Se marca de forma conservadora o se pide revisión profesional |

**Precisiones:**
- **C3 no se limita a «instrucción frente a fuente».** También cubre cualquier elemento de HealthMove que no cuadre con su referencia:
  - la ilustración frente a las instrucciones y las fotos de la fuente;
  - una exigencia frente a las instrucciones;
  - `notas_etiquetado` frente a las exigencias.
- **Rellenar una laguna de la fuente es una adaptación (C2), no fidelidad.** Por ejemplo, «la fuente no da repeticiones; se proponen 5». Debe documentarse como tal.

### 1.3. Categorías estudiadas y descartadas, para no crear redundancias

| Candidata | Por qué no es una categoría aparte |
|---|---|
| Fuente inaccesible | Es C4 con alcance «todo el ejercicio» y tiene la misma acción: PENDIENTE_DE_FUENTE |
| Error del propio informe de auditoría | Es un problema del proceso, no del ejercicio. Se trata con el **registro de propuestas retiradas** (apartado 4.3) |
| Incoherencia interna del catálogo | Es C3, porque la referencia de un elemento puede ser otro elemento de la capa B |
| Discrepancia leve o grave | La gravedad no es una categoría, es el **alcance** (apartado 4) |

### 1.4. Nivel de evidencia de cada afirmación

Cada exigencia y cada detalle discutible llevan uno de estos niveles. Así se separa lo que se sabe de lo que se supone.

| Nivel | Significado | Ejemplo real |
|---|---|---|
| **D: directa** | El texto lo dice, o una foto o ilustración de la fuente lo muestra sin ambigüedad. También es directa la imposibilidad estructural (sentado no hay `una_pierna`) | Foto del NHS del estiramiento de pecho: las manos muy por debajo del hombro |
| **I: indicio** | Una imagen o un texto lo sugieren, pero la vista, la resolución o la cercanía al umbral impiden afirmarlo | La rodilla «en torno a 90°» en la foto del apoyo a una pierna |
| **C: conservadora** | No hay evidencia suficiente y se aplica el §7.1 | `flexion_profunda_rodilla` en las mini sentadillas por «as far as comfortable» |
| **A: adaptación** | Lo fija una instrucción propia de HealthMove documentada en `adaptaciones` | Mantener la silla cerca en la elevación de talones sin apoyo |
| **N: no determinable** | No se puede afirmar ni siquiera de forma conservadora sin inventar | La posición en que se mantienen los 5 s en el curl con banda |

---

## 2. Reglas de precedencia y límites de la resolución automática

### 2.1. No es una jerarquía única: son dos ejes

Mezclar en una sola lista hechos y normas produce errores. Por ejemplo: «como hay una decisión aprobada, la foto no cuenta». Se distinguen dos ejes:

- **Eje de los hechos** (qué es verdad del ejercicio): fuente con nivel D > indicio I > inferencia del auditor. Una norma nunca convierte una inferencia en un hecho.
- **Eje de las normas** (qué se hace con esos hechos):
  1. Seguridad y límites éticos: §1 de la especificación (no diagnosticar, no inventar, no relajar filtros) y las exclusiones de la v1.
  2. Decisiones aprobadas expresamente por el desarrollador.
  3. Reglas de la especificación: definiciones del §4, §7 y casos de referencia, según la decisión general DG-1.
  4. Valores por defecto de la skill.
- **El esquema, el motor y los validadores no son una fuente de verdad, sino de representación.** Dicen *cómo* se puede guardar algo, no *qué* es cierto. Cuando chocan con la verdad, es C5-M.
- **Las adaptaciones de HealthMove** valen por encima de la fidelidad literal solo si están documentadas y no contradicen el nivel 1. Si quitan una exigencia, necesitan aprobación (apartado 2.3).

### 2.2. Cómo se resuelve cada conflicto

| Conflicto | Resolución |
|---|---|
| Seguridad frente a cualquier otra cosa | Gana la seguridad. Si basta con marcar una exigencia en `true`, se propone. Si no basta, REQUIERE REVISIÓN PROFESIONAL y el ejercicio sigue en `borrador` |
| Decisión aprobada frente a evidencia nueva | **Se para y se pregunta.** La decisión gobierna la interpretación; la evidencia, los hechos. Ninguna anula a la otra en silencio |
| Decisión aprobada frente a una regla de la especificación | Prevalece la decisión, porque es posterior y expresa. Se propone actualizar la especificación para que no queden dos verdades |
| Dos decisiones aprobadas entre sí, o una regla frente a un caso de referencia | C5-N: se para, una sola vez por clase de caso |
| Fuente frente a esquema o motor | C5-M: no se deforma el dato. Representación conservadora y propuesta de cambio |
| Fuente frente a adaptación de HealthMove | La adaptación vale si está documentada. Si no lo está, es C3. Nunca se presenta como parte de la fuente |
| Fuente ambigua frente a inferencia del auditor | La inferencia solo puede empujar hacia `true` (nivel C), nunca hacia `false`, y nunca se escribe como hecho |

### 2.3. La regla de asimetría

Es el núcleo de la resolución automática.

- **Pasar una exigencia a `true`** solo puede excluir el ejercicio de más perfiles. Nunca hace insegura una rutina. Basta con un nivel D, I o C.
- **Pasar una exigencia a `false`**, o mantenerla en `false` cuando hay duda, amplía a quién se ofrece. Solo se admite con:
  - **nivel D**, o
  - **nivel A** con una adaptación restrictiva aprobada (DG-3).
- **Un indicio (I) nunca basta para `false`.**

Matiz: el desarrollador ya pidió ver la lista antes de cambios masivos de etiquetas. Por eso la asimetría permite *proponer* sin consultar caso a caso, no *aplicar* sin plan aprobado.

### 2.4. Qué puede resolver el auditor por su cuenta y qué no

Por su cuenta solo puede **clasificar y redactar la propuesta**. El catálogo solo se edita con el plan de cambios aprobado.

| Puede proponer como resolución rutinaria (sin abrir decisión nueva) | Nunca puede resolver solo |
|---|---|
| Documentar en `adaptaciones` una diferencia que aplica una regla ya aprobada, como el apoyo del §7.4 o una exclusión de la v1 | Cualquier `true → false` sin nivel D |
| Corregir una instrucción hacia la fuente cuando la fuente es inequívoca y la corrección no reduce exigencias | Cambiar el movimiento o el propósito del ejercicio |
| Marcar `true` con nivel D, I o C, dejando el motivo en `notas_etiquetado` | Crear un ejercicio o una variante |
| Añadir `fuente.especifica_de` cuando la fuente declara su población | Cambiar el esquema, el motor o la interfaz |
| Corregir la nota de una ilustración que contradice la fuente | Cambiar `validacion.estado`, `revisado_por` o `fecha_revision` |
| Aplicar a un caso nuevo una decisión general ya aprobada | El primer caso de una clase que ninguna regla cubre |

### 2.5. Cuándo hay que parar y pedir una decisión

1. Una regla aprobada, aplicada a la evidencia, contradice otra regla o un caso de referencia (C5-N).
2. Para resolver hace falta un `true → false` sin nivel D.
3. La corrección cambiaría el movimiento, el propósito o la población del ejercicio.
4. Haría falta un ejercicio derivado.
5. Hace falta cambiar el esquema, el motor, el validador o la interfaz (C5-M).
6. Hay una cuestión de seguridad que no se resuelve marcando una exigencia (C5-S).
7. Es el primer caso de una clase nueva. Se pregunta **una vez**, la respuesta se registra como decisión general y no se vuelve a preguntar por casos equivalentes.

### 2.6. Ejercicios derivados: cuándo sí y cuándo no

**Se propone un derivado solo si se cumplen todas estas condiciones:**
1. El cambio altera al menos una exigencia, una posición o un recurso, de modo que el motor tendría que tratarlo de otra forma.
2. El cambio necesita instrucciones **e** ilustración propias. No basta con añadir una frase.
3. El original sigue siendo fiel a su fuente. Si no lo es, se corrige el original; no se crea una copia.
4. **Hay una fuente que describe esa versión** (§1). Si no la hay, solo con una decisión expresa (DG-5).
5. Existe un perfil real al que el original excluye y el derivado no.

**No justifican un derivado:**
- una dosis distinta;
- una aclaración de redacción;
- la elección de «una o dos manos» en un apoyo, que se resuelve con DG-4;
- una ambigüedad de la fuente;
- una ilustración mal dibujada.

---

## 3. Las cuatro capas de información y dónde vive cada una

| Capa | Contenido | Dónde vive hoy | ¿Hace falta algo nuevo? |
|---|---|---|---|
| **A. Evidencia de la fuente** | Texto, foto o vídeo comprobado, página o sección, límites de lo que la fuente permite afirmar | `fuente.{organizacion, titulo, url, licencia, consultado}` en el catálogo. La ubicación exacta y las citas, en los informes de lote | **No en el catálogo.** La evidencia detallada pertenece a la auditoría, no a lo que se instala en el dispositivo. Se propone una **ficha por fuente** en `docs/auditoria-catalogo/fuentes/` |
| **B. Definición de HealthMove** | Instrucciones, dosis, duración, fases, posiciones, recursos, exigencias, adaptaciones, ilustración | `instrucciones`, `dosis`, `duracion_estimada_seg`, `fases`, `posiciones`, `recursos`, `exigencias`, `adaptaciones`, `notas_etiquetado` y las fichas de `scripts/ilustraciones/` | No. Se fija una **convención de redacción** en `notas_etiquetado` para el nivel de evidencia (apartado 3.1) |
| **C. Decisiones técnicas** | Ids, `variante_de`, familias en el motor, compatibilidad con el validador | `id`, `variante_de`, `motor.js:91`, el validador | No |
| **D. Estado de revisión** | Qué está confirmado, adaptado, pendiente o necesita aprobación | `validacion.estado`, `revisado_por` y `fecha_revision` en el catálogo. El detalle, en `registro.md` | No en el catálogo. Se propone ampliar `registro.md` (apartado 4.3) |

### 3.1. Convención para `notas_etiquetado` (sin cambiar el esquema)

- Cada exigencia no obvia se anota con su nivel. Por ejemplo:
  - «`flexion_profunda_rodilla`: conservadora (la fuente no limita la flexión)»;
  - «`brazo_sobre_hombro` false: directa (foto de la fuente)».
- La frase «por conservadurismo» queda reservada al nivel C. Así, una revisión futura puede buscarlas y reevaluarlas si aparece evidencia.

### 3.2. Por qué no se proponen campos nuevos ahora

- **`adaptaciones` cubre C2 y el relleno de lagunas.**
- **`notas_etiquetado` cubre los niveles de evidencia.**
- **`borrador` y el marcado conservador cubren la exclusión total y la parcial.**
- **`fuente.especifica_de` ya se usa en 49 ejercicios** con 17 poblaciones distintas: párkinson, dolor lumbar, rehabilitación cardiaca, amputación por debajo de la rodilla y otras. Un mensaje de procedencia **genérico** funciona con ese texto libre (DG-8).
- **Un campo estructurado de población** solo haría falta si la interfaz tuviera que mostrar frases distintas según la población. Esto corrige la recomendación de la consolidación (D10): el campo `poblacion_fuente` no es necesario de momento.

---

## 4. Casos ambiguos: alcance de la incertidumbre

### 4.1. Regla general

Una incertidumbre bloquea **solo la capa que afecta**. El resto del ejercicio se sigue revisando.

| Alcance | Ejemplo | ¿Se puede continuar? | ¿Impide la aprobación documental? |
|---|---|---|---|
| **Todo el ejercicio** | Fuente inaccesible; no se localiza el ejercicio en la fuente | No | Sí: PENDIENTE_DE_FUENTE |
| **Una exigencia** | La rodilla está en el umbral; no se sabe si se carga peso en las manos | Sí | **No, si se cierra con `true` conservador.** Sí, mientras esté abierto un C5-N que impida elegir el valor |
| **Una instrucción: laguna que la fuente también deja abierta** | Dónde se mantienen los 5 s del curl | Sí | No. Se redacta con la misma vaguedad que la fuente y se documenta la laguna. No se inventa |
| **Una instrucción sin la cual el ejercicio no se puede hacer con seguridad** | Falta el apoyo en un ejercicio de pie | Sí, el resto | Sí, hasta resolverla (C3 o C5-S) |
| **Dosis o duración** | 3 frente a 3-5 repeticiones | Sí | No: se documenta como adaptación |
| **Ilustración** | Dibuja otro movimiento o una exigencia que no está etiquetada | Sí | **Sí si induce a otro movimiento**, porque el usuario sigue el dibujo. No si es solo estética |
| **Procedencia o interfaz** | Cómo mostrar `especifica_de` | Sí | No: no forma parte de la aprobación documental del ejercicio |

### 4.2. Exigencias biomecánicas

- Se aplica el criterio operativo aprobado: ángulo entre muslo y pierna en vista lateral, umbral de 90°, sin usar el pie como sustituto universal.
- Cada valor lleva su nivel (D, I, C, A o N).
- Si el ángulo está **claramente** a un lado del umbral, de forma que ningún observador razonable lo situaría al otro lado, es D. Si está cerca, es I. Un I no basta para `false` (apartado 2.3).
- No se escriben grados que no se puedan medir. «En torno a 90°» es aceptable; «87°», no.

### 4.3. Registros que permiten reanudar sin repetir

Se propone ampliar `registro.md`, o dividirlo en tres archivos, con:

1. **Decisiones generales:** número, texto aprobado, fecha y clases de casos que cubre.
2. **Lista única de decisiones pendientes**, cada una en el formato mínimo del apartado 6.3. Un caso nuevo equivalente se añade a la decisión que ya existe, no se crea una pregunta nueva.
3. **Propuestas retiradas:** qué se propuso, por qué se retira y en qué informe. Antes de proponer algo se comprueba que no esté aquí. Por ejemplo:
   - «levanta un poco el pie» en el apoyo a una pierna;
   - quitar «Aumenta el recorrido» en el ejercicio de punta y talón.
4. **Tabla por ejercicio:**
   - lote;
   - **huella** (los primeros caracteres de un hash del ejercicio en el momento de auditarlo);
   - categorías abiertas;
   - decisiones de las que depende;
   - resultado.
   Si la huella no ha cambiado, la auditoría anterior sigue valiendo. Si ha cambiado, solo se revisa lo modificado.
5. **Ficha por fuente:**
   - URL y fecha;
   - mapa de qué ejercicio está en qué página o sección;
   - fotos o ilustraciones revisadas;
   - avisos de extracción, por ejemplo «PDF a dos columnas: renderizar la página, no fiarse del texto extraído».

---

## 5. Aplicación a los casos reales

### 5.1. `elevacion-talones-sin-apoyo`: medida de seguridad añadida

| Detalle | Evidencia | Categoría | Acción |
|---|---|---|---|
| Quedarse cerca de la silla y sujetarse si se pierde el equilibrio | NHS, solo «perform the exercise without support» (D). El catálogo lo añade sin documentar | **C3 → C2** | Rutinaria: se documenta en `adaptaciones` como medida de HealthMove. Aplica el principio del §7.4 (apoyo disponible en los ejercicios de pie), así que no hace falta una decisión nueva |
| «Sujétate a la silla» como contingencia | La redacción es nuestra | **C5-S (leve) + clase nueva** | La contingencia no forma parte de la ejecución, pero tal como está redactada presupone `agarre`, y una persona sin agarre se quedaría sin esa red. Se propone redactarla sin exigir una capacidad nueva: «apoya las manos en la silla». La clase general se decide una vez (DG-6) |
| `equilibrio_sin_apoyo` y `puntillas_talones` en true | D | C1 | Ninguna |

**Por qué:** la medida de seguridad es legítima, pero no es de la fuente. Hay que decirlo, y no debe introducir una exigencia oculta.

### 5.2. `flexiones-pared`: `ambos_brazos` no refleja el movimiento

| Detalle | Evidencia | Categoría | Acción |
|---|---|---|---|
| `ambos_brazos` false | Las dos palmas empujan; los brazos hacen el ejercicio (D). Decisión 1 aprobada: criterio literal | **C3** (la exigencia no cuadra con las instrucciones) **+ C5-N** | `false → true` es la dirección segura y está respaldada por D. Pero el caso de referencia del §7 («Flexiones contra la pared: `peso_en_manos`») no la lista. Queda pendiente **solo** de DG-1. Si se aprueba DG-1 en la opción recomendada, pasa a ser rutinaria |

**Por qué:** el conflicto no está en la evidencia, sino en si los casos de referencia son listas cerradas. Es la misma pregunta que en `sentarse-levantarse` y en los talones con apoyo, así que se decide una vez.

### 5.3. `equilibrio-una-pierna-pared`: instrucción y rodilla, con la foto revisada

| Detalle | Evidencia | Categoría | Acción |
|---|---|---|---|
| «Levanta la pierna izquierda» | El texto no precisa la dirección; la foto B muestra la rodilla subiendo al frente (D en la dirección) | **C3** (precisión) | Rutinaria: «sube la rodilla izquierda hacia delante». No reduce exigencias ni inventa nada. **No se recupera** la propuesta retirada «levanta un poco el pie» |
| `flexion_profunda_rodilla` false | Foto: en torno a 90° (I, en el umbral) | **C4, alcance de exigencia** | Mantener `false` exigiría nivel D, y no lo hay. Se propone `true` con nivel C. No bloquea el resto del ejercicio |
| `flexion_amplia_cadera` false | Foto: muslo casi horizontal, equivalente a estar sentado (D, lejos del umbral) | C1 | Se mantiene `false` y se anota «directa (foto)» |
| Ilustración: el pie va hacia atrás | No coincide con la foto | **C3, capa visual, bloqueante** | Induce a otro movimiento (flexión de rodilla sin flexión de cadera), así que hay que corregirla antes de aprobar el ejercicio |
| `ambos_brazos` (yemas en la pared) | Apoyo | **Pendiente de DG-4** | Se agrupa con los demás apoyos |

### 5.4. `estiramiento-gemelo-pared`: ¿hay carga en las manos?

| Detalle | Evidencia | Categoría | Acción |
|---|---|---|---|
| `peso_en_manos` false | Texto: manos en la pared «for stability» (D sobre la intención, no sobre la carga). Foto: inclinación leve (I) | **C4, alcance de exigencia** | Dos salidas válidas según el protocolo, y se elige con DG-3, no caso a caso: **(a)** `true` con nivel C, que es la vía rutinaria; **(b)** `false` con nivel A, mediante la adaptación restrictiva «apoya las manos solo para no perder el equilibrio, sin echar el peso sobre ellas». Es viable porque el estiramiento lo da la posición de la pierna, no la inclinación hacia la pared |
| `una_pierna` true | Al dar el paso atrás (C) | C1 con nivel C | Se anota «por conservadurismo» |
| `ambos_brazos` | Apoyo | Pendiente de DG-4 | — |

### 5.5. `sentarse-levantarse`: foto, interpretación y caso de referencia

| Detalle | Evidencia | Categoría | Acción |
|---|---|---|---|
| `notas_etiquetado`: «La inclinación es leve: no es inclinacion_tronco» | La foto B del NHS muestra una inclinación marcada, de unos 45° (I fuerte) | **C3** (la nota del catálogo es una inferencia contradicha por la fuente) | Se retira la afirmación de la nota. Una inferencia no puede quedar escrita como hecho |
| `inclinacion_tronco` y `flexion_amplia_cadera` false | La misma foto (I fuerte) | **C5-N** | `false → true` es la dirección segura, pero el caso de referencia lista solo `sentarse_levantarse`. **Dato que pesa:** el catálogo *ya* marca aquí 3 exigencias frente a 1 del caso de referencia. Queda pendiente de DG-1 |
| `flexion_profunda_rodilla` true | Fotos: unos 90 a 100° (I); la fuente no fija los pies | C1 con nivel C | Anotar «por conservadurismo» |
| `agarre` y `peso_en_manos` false | Las manos «solo como guía». En la foto A la mano va al asiento (I) | C4, alcance de exigencia | Con la redacción actual, que es opcional y sin cerrar la mano, `false` está respaldado por la instrucción de HealthMove (A ya presente). Se documenta como adaptación: la fuente muestra la mano en el asiento |
| Consecuencia en el motor | — | — | Si se marcan inclinación y cadera, el ejercicio sale de los perfiles con «me cuesta inclinarme». Eso es coherente con levantarse de una silla, pero reduce la disponibilidad de un ejercicio funcional clave. Es una decisión de diseño, por eso va a DG-1 |

### 5.6. Leicester: procedencia que debe verse en la interfaz (`estiramiento-isquiotibiales-sentado`)

| Detalle | Evidencia | Categoría | Acción |
|---|---|---|---|
| Falta `fuente.especifica_de` | La introducción del folleto declara usuarios de silla de ruedas, y el ejercicio habla de la pierna que queda (D) | **C3** | Rutinaria por la decisión 3: añadir el valor |
| «cada pierna» y 3 repeticiones frente a 3-5 | D | **C3 → C2** | Documentar en `adaptaciones` |
| Cómo explicarlo al usuario | `app.js:621` solo muestra «Material pensado para: …» | **C5-M, alcance de interfaz** | **No bloquea** la aprobación documental. Hay 49 ejercicios con `especifica_de` y 17 poblaciones, así que el mensaje debe ser genérico (DG-8), no exclusivo de Leicester |

### 5.7. Derivado unilateral que no debe crearse automáticamente (`giro-tronco-sentado-un-brazo`)

| Condición del apartado 2.6 | ¿Se cumple? |
|---|---|
| 1. Cambia una exigencia (`ambos_brazos`) | Sí |
| 2. Necesita instrucciones e ilustración propias | Sí |
| 3. El original es fiel | Sí, tras corregir `ambos_brazos` |
| 4. Hay una fuente que describa la versión con un brazo | **No** |
| 5. Hay un perfil al que el original excluye | Sí («Solo puedo usar un brazo») |

**Acción:** no se crea. Se registra como **hueco de cobertura** en `docs/revision-catalogo.md` («Huecos conocidos») y como búsqueda de fuente pendiente. Solo se reabre si aparece una fuente o si se aprueba DG-5.

**Corrección a la consolidación:** la recomendación de D9 de crear `boxeo-sentado-un-brazo` y `abrir-cerrar-mano` falla igualmente la condición 4. Según este protocolo, tampoco se crean sin fuente o sin DG-5. No se ha editado `consolidacion-lotes-1-5.md`; la corrección queda aquí.

---

## 6. Flujo de auditoría eficiente

### 6.1. Por fuente, no por orden del archivo

1. **Preparar la fuente una vez.**
   - Descargarla y crear o actualizar su ficha (apartado 4.3, punto 5).
   - Si es un PDF a columnas, renderizar las páginas.
   - Localizar todos los ejercicios del catálogo que vienen de ella. Un lote es una fuente, con un máximo de unos 10 ejercicios.
2. **Cargar el contexto.**
   - Decisiones generales, pendientes y propuestas retiradas.
   - Comprobar la huella de cada ejercicio. Los que ya están auditados y no han cambiado se saltan.
3. **Leer los datos reales** del ejercicio en `catalogo.json`, nunca de memoria ni de un informe anterior.
4. **Comparar** cada detalle relevante (apartado 1.1) con la fuente y asignar categoría y nivel de evidencia.
5. **Aplicar las reglas aprobadas:** decisiones generales, criterios operativos y asimetría.
6. **Clasificar lo que queda:**
   - Lo rutinario va a la tabla de cambios propuestos.
   - Lo que coincide con una decisión pendiente se **vincula** a ella, sin pregunta nueva.
   - Solo lo verdaderamente nuevo abre una decisión.
7. **Informe del lote:** tabla de cambios propuestos con categoría, nivel y evidencia, más la actualización de la lista única de pendientes.
8. **Registrar** la huella, el resultado y las retiradas, si las hay.

### 6.2. Informe por ejercicio, más corto

- Se conserva la tabla de las 16 exigencias que exige la skill, pero con una columna de **nivel** y motivos de una línea.
- Las secciones en prosa solo detallan lo que **no** es C1.
- Si un ejercicio queda entero en C1, se cierra en pocas líneas.

### 6.3. Formato mínimo de una decisión

Con esto, el desarrollador puede decidir sin releer los informes.

```
DG-n · <pregunta en una frase>
Clase de casos: <qué tipo de situación cubre>
Afecta a: <ids, recuento> (y estimación en el resto del catálogo)
Evidencia: <1-3 referencias concretas: fuente, página o foto>
Opciones:
  A — <qué se hace> → efecto en el motor: <qué perfiles ganan o pierden ejercicios>
  B — ...
Recomendación: <opción> porque <una razón>
Mientras esté pendiente: <valor provisional, siempre el conservador>
Reversible: sí/no, y coste de revertir
```

---

## 7. Decisiones generales que se aprueban una sola vez

Agrupan las pendientes D4 a D11 de la consolidación y evitan preguntas repetidas. **No se aplica ninguna sin tu aprobación.**

| Id | Pregunta | Recomendación | Absorbe |
|---|---|---|---|
| **DG-1** | ¿Los casos de referencia del §7 son listas **cerradas** o **ejemplos** de las exigencias principales? | **Ejemplos.** El catálogo ya los trata así (`sentarse-levantarse` tiene 3 exigencias; `marcha-sentado-sujetandose` añade `agarre`). Se propone añadir al §7 la frase «no son listas exhaustivas» | D6; `flexiones-pared`; la parte de D4 que se apoyaba en el caso de los talones |
| **DG-2** | ¿Se adopta la regla de asimetría del apartado 2.3: `true` con D, I o C; `false` solo con D o A? | Sí | Criterio de las D7 y D8 |
| **DG-3** | ¿Una adaptación restrictiva documentada puede dejar una exigencia en `false`? | Sí, si: no cambia el movimiento ni el propósito de la fuente; el usuario puede seguirla de forma realista; está en `adaptaciones`. Cada aplicación se lista en el plan del lote | D7 (mini sentadillas), D8 (gemelo en la pared) |
| **DG-4** | `ambos_brazos` en manos **sin función motora**: las que solo apoyan (silla, pared) y las que solo descansan (cadera, muslos, rodilla) | No cuentan; se documenta «apoya una o las dos manos». Cuentan si las manos mueven, empujan, sostienen carga o forman una postura que exige el ejercicio | D4 y D5 |
| **DG-5** | ¿Se permiten derivados sin fuente que los describa? | **No en la v1** (§1: «no inventa variantes»). Los huecos se registran y se buscan fuentes | D9 (corrige la recomendación de la consolidación) |
| **DG-6** | Medidas de contingencia («si pierdes el equilibrio…») | No cuentan como exigencia, pero se redactan sin exigir una capacidad que el ejercicio no pida («apoya las manos», no «sujétate») | Clase nueva (caso 5.1) |
| **DG-7** | ¿Las fotos e ilustraciones de la fuente son evidencia D? | Sí cuando lo que muestran está claramente a un lado del umbral. Si está cerca, son I | Criterio de las D6 y D7 |
| **DG-8** | Mensaje de procedencia | Genérico para todo ejercicio con `especifica_de`, basado en tu texto y sin un campo nuevo por ahora. La frase sobre amputación solo se mostraría si se aprueba más adelante un campo estructurado | D10 |

La **D11** (rótulo «usar los dos brazos a la vez») no es una decisión general. Es una consecuencia directa de la decisión 1 que ya aprobaste, y queda como cambio de interfaz pendiente del plan.

---

## 8. Cambios que recomendaría, por tipo

| Tipo | Cambio | ¿Cambia código? |
|---|---|---|
| **Protocolo documental** | Adoptar este documento, una vez aprobado, como anexo de la auditoría | No |
| **Skill** (requiere tu aprobación expresa) | §4: sustituir las 5 etiquetas por las categorías C1-C5 y los niveles de evidencia | No |
| | §5: añadir la regla de asimetría y el nivel por exigencia | No |
| | Nueva sección: precedencia, condiciones de parada y criterios de derivados | No |
| | §10: lotes por fuente de hasta unos 10 ejercicios, en lugar de 3 a 5 | No |
| | §3: renderizar las páginas de los PDF con columnas | No |
| | §3: consultar decisiones generales, pendientes y propuestas retiradas antes de empezar | No |
| | §8: formato abreviado (apartado 6.2) y formato mínimo de decisión (apartado 6.3) | No |
| **Documentación del proyecto** | `registro.md`: decisiones generales, lista única de pendientes, propuestas retiradas y huella por ejercicio | No |
| | `docs/auditoria-catalogo/fuentes/`: una ficha por fuente | No |
| | Especificación §7: aclarar los casos de referencia (DG-1) y escribir el criterio de rodilla aprobado (decisión 2) | No |
| | `docs/revision-catalogo.md`: sección de huecos de cobertura para usar un solo brazo (DG-5) | No |
| **Datos** | Los del plan de la consolidación, filtrados por DG-1 a DG-8 una vez aprobadas. Este documento no añade cambios de datos nuevos | — |
| **Esquema** | **Ninguno necesario.** Solo si en el futuro se quieren mensajes distintos por población (`poblacion_fuente`) | Sí, si se aprueba |
| **Motor** | Ninguno | — |
| **Interfaz** | El mensaje de procedencia (DG-8) y el rótulo de D11 | Sí, pequeño |
| **Herramienta opcional** | Un script que calcule la huella de cada ejercicio, para reanudar la auditoría. Ayuda, pero no es imprescindible | Sí, opcional |

---

## 9. Riesgos de aplicar mal el protocolo

| Riesgo | Cómo se manifiesta | Defensa |
|---|---|---|
| **Inflación conservadora** | La asimetría hace fácil marcar `true`, y el catálogo se vacía para los perfiles con más restricciones | El nivel C se anota siempre y se reevalúa por búsqueda. Los marcados masivos se presentan antes de aplicarlos, con su efecto en el motor |
| **Falsa certeza** | Un indicio (I) se redacta como hecho, o un nivel C se olvida y parece evidencia | Niveles obligatorios. «Por conservadurismo» reservado al nivel C |
| **Adaptaciones que vacían el ejercicio** | DG-3 se usa para quitar exigencias reescribiendo el ejercicio hasta convertirlo en otro | Condición de DG-3: no cambiar el movimiento ni el propósito. Lista expresa en cada plan |
| **Adaptación presentada como fuente** | El usuario cree que el NHS dice algo que es nuestro | Toda diferencia va a `adaptaciones`. La interfaz no atribuye a la fuente el texto de HealthMove |
| **Decisiones generales aplicadas a casos que no lo son** | Un caso parecido pero distinto se resuelve con una DG que no le corresponde | Cada DG declara su clase de casos. Ante la duda, el caso se presenta como posible miembro, no se aplica en silencio |
| **Resucitar propuestas retiradas** | Un auditor nuevo vuelve a proponer «levanta un poco el pie» | Registro de propuestas retiradas, consultado en el paso 2 del flujo |
| **Confundir aprobación documental con validación clínica** | «LISTO» se lee como «seguro» | Las categorías hablan de fidelidad documental. El estado `revisado_por_profesional` sigue reservado a revisiones reales (§7.5) |
| **Errores de extracción** | Columnas de PDF mezcladas, como en el lote 2 | Renderizar las páginas. Contrastar el texto extraído con la imagen cuando hay columnas |
| **Bloqueo excesivo** | Una duda de ilustración o de interfaz paraliza ejercicios correctos | Tabla de alcance (apartado 4.1): solo bloquean la fuente, las exigencias sin cerrar y las ilustraciones que inducen a otro movimiento |
| **Saltarse la regla de inventar** | Crear derivados «porque faltan» | Condición 4 del apartado 2.6 y DG-5 |
