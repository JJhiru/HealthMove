# Protocolo de auditoría del catálogo de ejercicios

- **Versión:** 1.0 (2026-10-16).
- **Estado:** vigente para la auditoría documental. Recoge las decisiones DG-1 a DG-8 aprobadas por el desarrollador el 2026-10-16.
- **Alcance:** cómo se audita, se registra y se propone. No cambia el catálogo, el esquema, el motor, los tests, las ilustraciones ni la interfaz.
- **Lo que no es:** una validación clínica. Ninguna regla de este protocolo convierte una auditoría en una indicación sanitaria.
- **Herramienta asociada:** la skill `auditar-catalogo-ejercicios`, que resume las instrucciones operativas y remite aquí.

**Antecedentes:**
- `propuesta-protocolo-discrepancias.md` y `revision-critica-protocolo.md` son el razonamiento que llevó a este documento.
- Si alguno de ellos contradice este protocolo, prevalece este. En concreto:
  - DG-1 adopta los casos de referencia como **ilustrativos**, no la «calibración vinculante» que recomendaba la revisión crítica.
  - DG-7 fija la escala de evidencia en **D/I/N**.
  - Las reglas sobre las manos (DG-4) y las contingencias (DG-6) sustituyen a las propuestas DG-4 y DG-6 y a G6.
- Los informes `lote-01.md` a `lote-05.md` y `consolidacion-lotes-1-5.md` se auditaron antes de este protocolo. Sus conclusiones se revisarán con él antes de aplicar cambios al catálogo.

---

## 1. Principios

1. **La IA propone y la persona decide** (especificación §7.6). Ningún cambio de etiquetas, instrucciones, estados, fechas, autoría o licencia se aplica sin un plan aprobado expresamente por el desarrollador.
2. **No se inventa nada:** ni ejercicios, ni variantes, ni fuentes, ni poblaciones, ni ángulos, ni dosis, ni licencias (especificación §1 y DG-5).
3. **Hechos, inferencias e incertidumbres se escriben por separado.** Una inferencia del auditor nunca se presenta como hecho de la fuente.
4. **Una adaptación de HealthMove nunca se presenta como parte de la fuente.**
5. **La aprobación documental no es validación clínica.**
   - El estado `basado_en_fuente_publica` solo significa que el autor comparó el ejercicio con su fuente (§7.5 y §7.6).
   - `revisado_por_profesional` queda reservado a una revisión profesional real, que hoy no existe.
6. **Las etiquetas no se ajustan para ganar disponibilidad** (especificación §1: no relajar filtros).
7. **Se usan los nombres reales del proyecto:**
   - los campos de `public/data/catalogo.json`;
   - los estados de `estados_validacion`;
   - `scripts/validar-catalogo.mjs`;
   - las opciones de `public/js/opciones.js`.
   Si falta un campo, se registra como propuesta (apartado 14) y no se crea.

---

## 2. Modelo de registro

### 2.1. Unidad de análisis

Se analiza **cada detalle relevante** del ejercicio, no el ejercicio entero:
- posición inicial;
- secuencia de movimiento;
- lados;
- recorrido;
- uso de las manos y de los brazos;
- apoyos;
- dosis y duración;
- recursos;
- cada una de las 16 exigencias;
- ilustración;
- procedencia y población;
- relación de variante.

### 2.2. Dos ejes por detalle

| Eje | Valores | Pregunta |
|---|---|---|
| **Estado frente a la fuente** | **C1** fiel · **C2** adaptación documentada · **C3** diferencia sin documentar · **C4** indeterminado (con alcance: todo el ejercicio o un campo) | ¿Coincide con la fuente? |
| **Bloqueos** (0 a n) | **B-N** norma (dos reglas chocan, o falta un criterio) · **B-M** modelo (el esquema, el motor o la interfaz no pueden representarlo) · **B-S** seguridad o límites éticos | ¿Qué impide cerrarlo? Cada bloqueo cita la cuestión pendiente (apartado 13) |

- **C4 con alcance «todo el ejercicio»** equivale a PENDIENTE_DE_FUENTE: la fuente es inaccesible o el ejercicio no se localiza en ella.
- **C3 se resuelve de dos maneras:**
  - corrigiéndolo hacia la fuente; si la fuente ya lo dice o lo muestra con evidencia D, es una **aclaración**;
  - documentándolo como adaptación, con lo que pasa a C2 (apartado 5).

### 2.3. Tres datos por cada exigencia

| Dato | Valores | Origen |
|---|---|---|
| **Evidencia** | **D** directa · **I** indicio · **N** no determinable | DG-7 (apartado 6) |
| **Fundamento** | Texto de la fuente · imagen de la fuente · instrucción de HealthMove · estructural (imposible por la posición, por ejemplo `una_pierna` estando sentado) | Cita o referencia concreta |
| **Regla del valor** | `evidencia` · `conservadora` (DG-2) · `adaptación` (DG-3) | Apartado 3 |

**Hecho, inferencia e incertidumbre:**
- Un **hecho** es lo que tiene evidencia D.
- Una **inferencia** es lo que el auditor deduce a partir de un I. Se escribe como inferencia: «parece», «sugiere».
- Una **incertidumbre** es un I o un N que no se resuelve. Se registra con lo que haría falta para cerrarla.

---

## 3. DG-2: regla asimétrica para el valor de cada exigencia

**Reglas:**
- **R2.1. Valor `true`.** Puede proponerse con evidencia D o I, o con la regla `conservadora` cuando la evidencia es N o insuficiente. Esto incluye la duda documentada (especificación §7.1: «ante la duda, se marca»).
- **R2.2. Valor `false`.** Solo puede proponerse con:
  - (a) evidencia D de que la exigencia no aparece en ningún momento del ejercicio (§4: posición inicial, movimiento o vuelta); o
  - (b) una adaptación válida y aprobada según DG-3 que la elimine.
- **R2.3. La falta de evidencia no demuestra la ausencia.** Un N o un I nunca bastan para `false`.
- **R2.4. Cómo se registra un `true` conservador.**
  - Se anota en `notas_etiquetado`, que la interfaz no muestra, con esta forma: `[conservadora] <exigencia>: <motivo>. Se cerraría con: <evidencia que falta>.`
  - No se anota en `adaptaciones`, porque el usuario lee ese campo (`app.js`, «Cambios respecto a la fuente»).
- **R2.5. Lenguaje.** Un `true` es una decisión **restrictiva**: solo reduce los perfiles a los que el motor ofrece el ejercicio (`motor.js`, `motivosIncompatibilidad`). No se describe como «seguro».
- **R2.6. Nada de cambios masivos sin revisión.** Los cambios de etiquetas se presentan antes como plan, con estos datos por cada uno:
  - ejercicio y exigencia;
  - valor actual y valor propuesto;
  - evidencia y fundamento;
  - regla aplicada;
  - opciones de `opciones.js` afectadas;
  - impacto en la disponibilidad (apartado 9).

**Verificación:** todo `false` propuesto cita evidencia D o una adaptación aprobada. Todo `true` conservador tiene su nota `[conservadora]`.

---

## 4. DG-1: los casos de referencia son ilustrativos

**Reglas:**
- **R1.1. Ilustran, no limitan.** Los casos de referencia del §7 de la especificación y los ejemplos de este protocolo ilustran cómo se aplican las definiciones. No son exhaustivos ni restringen las exigencias que puede tener un ejercicio concreto.
- **R1.2. Cada ejercicio se evalúa por sí mismo,** con sus propias instrucciones y su fuente, aplicando las definiciones del §4 y las reglas de este protocolo.
  - Que un caso de referencia no liste una exigencia no basta para dejarla en `false` (R2.2).
  - Que la liste no basta para marcarla sin evidencia.
- **R1.3. Si un caso de referencia y la evidencia de un ejercicio parecido apuntan en direcciones distintas,** se sigue la evidencia y la diferencia se anota en el informe. No se crea una regla específica para ese ejercicio.
- **R1.4. Un caso nuevo se trata como sigue:**
  1. Se intenta resolver con las reglas generales.
  2. Si no se resuelve sin inventar un criterio, se registra en `registro.md`, sección «Casos no contemplados», con esta plantilla:

```
### CN-<n> · <título breve>
- Ejercicio(s): <ids>
- Detalle: <qué no encaja>
- Evidencia: <D/I/N, cita o imagen>
- Reglas consideradas y por qué no resuelven: <...>
- Propuesta del auditor (sin aplicar): <...>
- Valor provisional: <el actual; ningún cambio sin aprobación>
- Estado: pendiente | resuelto por <decisión, fecha>
```

  3. Los casos equivalentes se añaden al mismo CN y no generan preguntas nuevas.
  4. Una regla nueva solo se crea con la aprobación del desarrollador y se añade a este protocolo con fecha.

**Limitación:** el §7 de la especificación no dice todavía que sus casos sean ilustrativos, y dos filas llevan «—». Editar la especificación queda fuera del alcance de esta fase (cuestión **Q4**).

---

## 5. DG-3 y DG-5: adaptaciones y variantes

### 5.1. Condiciones de una adaptación válida (DG-3)

Una adaptación solo es válida si cumple **las cinco**:

| # | Condición | Cómo se verifica |
|---|---|---|
| R3.1 | Conserva el movimiento y el propósito relevantes, sin inventar una variante | **Prueba operativa:** la ejecución que pide HealthMove es una de las que permite la fuente. Si el texto concede un rango («as far as is comfortable»), la imagen es un ejemplo dentro de ese rango. Si el texto no da rango y la imagen lo muestra, la imagen fija el rango. Si la prueba falla, es una **modificación**, es decir, otro ejercicio, y se aplica DG-5. **Esta prueba concreta está pendiente de confirmación (Q5)** |
| R3.2 | Está documentada y su fundamento es verificable | Texto en `adaptaciones`, redactado para el usuario. En el informe, la cita de la fuente que la justifica |
| R3.3 | Se evalúa frente a **todas** las exigencias pertinentes | Nueva tabla completa de las 16 exigencias para la versión adaptada. Quitar una exigencia no implica quitar las demás |
| R3.4 | Supera todos los filtros de compatibilidad aplicables | El auditor no conoce al usuario: lo que comprueba es que las etiquetas de la versión adaptada están completas y que cada filtro (opción de `opciones.js`) que se dice favorecido no excluye ninguna de sus exigencias en `true`, sus posiciones ni sus recursos. El motor aplica el filtro real (§8). Si falla un filtro, no se presenta como compatible con ese perfil |
| R3.5 | No introduce una exigencia nueva sin evaluar | Por ejemplo, «apoya las palmas en la pared» puede introducir `peso_en_manos`. Se evalúa antes de proponerla |

**Además:**
- Una adaptación que deja una exigencia en `false` se lista en el plan y necesita aprobación (R2.6).
- Una adaptación nunca se justifica por la disponibilidad (principio 6).
- Rellenar una laguna de la fuente con una decisión de HealthMove («la fuente no indica repeticiones; se proponen 5») es una adaptación. Si se puede conservar la vaguedad de la fuente sin inventar, se conserva, y la laguna va a `notas_etiquetado`.

### 5.2. Variantes sin fuente (DG-5)

- **R5.1.** No se crean ejercicios ni variantes sin una fuente que los describa. Una variación intuitiva o sencilla no es evidencia.
- **R5.2.** No se crean variantes para aumentar la disponibilidad.
- **R5.3.** No existe un proceso de validación profesional que autorice excepciones, y no se presupone.
- **R5.4.** Una variante útil sin fuente se registra en `registro.md`, sección «Propuestas de variante pendientes de validación», con:
  - el ejercicio de partida;
  - el cambio;
  - las exigencias que cambiarían;
  - el perfil que se beneficiaría;
  - la búsqueda de fuente realizada.
  No se incorpora al catálogo.
- **R5.5.** Si en el futuro se establece un respaldo profesional, deberá documentarse en este protocolo antes de usarse como excepción.
- **R5.6.** Una variante **con** fuente se crea como entrada propia con `variante_de` (especificación §3 y §7.3; `validar-catalogo.mjs` comprueba que el id existe). Se etiqueta por separado, y el motor no la combina con su original en la misma rutina (`motor.js`, familia).

---

## 6. DG-7: evidencia del texto y de las imágenes

### 6.1. Escala

| Nivel | Significado |
|---|---|
| **D: directa** | El texto o la imagen permiten observar claramente la característica |
| **I: indicio** | Hay una señal relevante, pero la perspectiva, la resolución, la oclusión o la falta de información impiden confirmarla con suficiente certeza |
| **N: no determinable** | No puede establecerse de forma fiable con la evidencia disponible |

### 6.2. Reglas

- **R7.1.** Cada exigencia se evalúa por separado.
- **R7.2.** No se inventan ángulos, cargas, apoyos ni movimientos que la imagen no permita determinar. Las estimaciones se escriben de forma aproximada («en torno a 90°»), nunca con falsa precisión.
- **R7.3.** El contacto con una superficie no demuestra carga sobre ella (`peso_en_manos`).
- **R7.4.** Que una mano toque un objeto no permite inferir un agarre (`agarre`).
- **R7.5.** Si la imagen no determina un requisito, se registra la incertidumbre y se aplica la regla conservadora de esa exigencia (R2.1). Ver la cuestión **Q2** sobre la relación entre R7.4 y R2.1.
- **R7.6.** Las ilustraciones de HealthMove (`scripts/ilustraciones/*.mjs` → `public/data/ilustraciones.json`) se comparan con la fuente. Si introducen un movimiento, una postura o un apoyo distintos, la discrepancia se registra.
- **R7.7.** Mientras haya una discrepancia de ilustración que induzca a interpretar el ejercicio de otra forma, esa ilustración no se da por válida y el ejercicio no se propone para aprobación documental.
  - Discrepancias conocidas: `estiramiento-pecho-sentado` (`sentado.mjs:10`), `banda-curl-sentado` (`sentado.mjs:33`) y `equilibrio-una-pierna-pared` (`depie.mjs:18`).
- **R7.8.** No se fijan umbrales numéricos nuevos.
  - Se usan los de la especificación: rodilla «más de 90°» (§4), evaluada como ángulo aproximado entre muslo y pierna en vista lateral (decisión 2 del registro).
  - Si un caso depende de un umbral sin formalizar, se identifica el criterio pendiente y no se inventa una cifra.
  - «Inclinación leve» (§4 de la especificación; Q3, resuelta): si la fuente no da un ángulo exacto, se conserva el término original de la fuente y no se inventa un umbral numérico. Si lo da, puede usarse en la explicación atribuyéndolo a la fuente (`registro.md`, 2026-10-19, P5).
- **R7.9.** Para PDF a varias columnas, se renderiza la página y se contrasta con el texto extraído. En el lote 2, la extracción mezcló las columnas. Procedimiento comprobado: `herramientas.md`, apartado 1 (`pdftotext -layout` y `pdftoppm`).

---

## 7. DG-4: brazos y manos según su función real

### 7.1. Clasificación de la función de cada brazo y mano

Antes de etiquetar, se clasifica qué hace cada brazo o mano:

| Función | Descripción | Exigencias que se evalúan |
|---|---|---|
| **Ejecución** | El brazo ejecuta el movimiento, empuja, sostiene una carga relevante o mantiene una postura bilateral que el ejercicio exige | `ambos_brazos` en `true` si se requieren los dos. Además, `carga_externa`, `brazo_sobre_hombro`, `mano_detras` y `agarre`, según corresponda |
| **Reposo** | La mano reposa o descansa (muslos, cadera, regazo) sin función en la ejecución | No se marca `ambos_brazos` por esa mano |
| **Contacto** | Toca una superficie sin función de estabilidad ni carga | Nada por el contacto en sí (R7.3, R7.4) |
| **Apoyo para estabilidad** | El contacto ayuda al equilibrio | Se analiza cada exigencia por separado. `ambos_brazos`: ver la cuestión **Q1**. `agarre`, solo si la mano se cierra o la instrucción pide sujetarse. `peso_en_manos`, solo si las manos soportan peso corporal |
| **Carga sobre las manos** | Las manos o muñecas soportan parte del peso corporal | `peso_en_manos` |
| **Agarre** | Cerrar la mano, con o sin objeto, aunque sea en parte (§4, incluido sujetarse a una silla) | `agarre` |

### 7.2. Reglas

- **R4.1.** No se confunden contacto con apoyo, apoyo con carga, ni carga con agarre. Una exigencia no sustituye a otra.
- **R4.2.** La lectura de la función sigue la instrucción que verá el usuario, contrastada con la fuente. Si la instrucción de HealthMove dice algo distinto de la fuente, es un C3 (apartado 2.2).
- **R4.3.** No se inventan campos ni se cambia el esquema. Las 16 exigencias actuales bastan para registrar estas funciones.

---

## 8. DG-6: exigencias, consejos preventivos y contingencias

### 8.1. Tres clases de indicaciones

| Clase | Ejemplo | ¿Afecta a las etiquetas? |
|---|---|---|
| **1. Exigencia del ejercicio** | «Sujétate a la silla durante todo el ejercicio» | **Sí**, si es necesaria para hacerlo (aquí, `agarre`) |
| **2. Consejo preventivo** | «Mantén una silla estable cerca por seguridad» | **No** |
| **3. Indicación de interrupción o contingencia** | «Si pierdes el equilibrio, detén el ejercicio y busca una posición estable» | **No** |

### 8.2. Reglas

- **R6.1.** Solo la clase 1 entra en la evaluación de las 16 exigencias.
- **R6.2.** Una recomendación de seguridad no justifica ninguna etiqueta, ni para marcarla ni para desmarcarla.
- **R6.3.** Si HealthMove añade un consejo de clase 2 o 3 que la fuente no contiene, es una diferencia con la fuente. Se documenta como adaptación (C2) y nunca se atribuye a la fuente.
  - Ejemplo: en `elevacion-talones-sin-apoyo`, la fuente solo dice «without support».
  - La silla cercana es un consejo preventivo de HealthMove.
  - «Si pierdes el equilibrio, sujétate a la silla» es una contingencia.
  - Ninguno de los dos cambia `equilibrio_sin_apoyo` ni `agarre`.
- **R6.4.** Un texto de clase 2 o 3 debe leerse claramente como opcional o de contingencia. Si su redacción hace que parezca necesario para ejecutar el ejercicio, pasa a evaluarse como clase 1.
  - **Recomendación no vinculante:** redactar las contingencias sin presuponer capacidades que el ejercicio no exige, como en el ejemplo de DG-6.

### 8.3. Avisos de seguridad que ya tiene la app

Comprobado en `public/js/app.js`:

| Lugar | Contenido |
|---|---|
| Aviso inicial (`vistaAviso`) | Lo que HealthMove no hace; «Mejor no la uses si…»; «Detén cualquier ejercicio si notas dolor en el pecho, falta de aire intensa, mareo, o un dolor nuevo o que aumenta», con los números de emergencia |
| Rutina (`vistaRutina`) y detalle (`vistaEjercicio`) | «Para si notas dolor en el pecho, falta de aire intensa, mareo, o un dolor nuevo o que aumenta» |
| Reproductor (`vistaReproductor`) | Dosis, instrucciones y el botón «Detener: tengo molestias». **No** repite el aviso |
| Tras detener la sesión | Atención médica ante síntomas graves; con molestias leves, descansar y comentarlo con un profesional |
| Fin de la rutina | «Si después notas un dolor nuevo o que aumenta, coméntalo con tu profesional sanitario» |

### 8.4. Propuestas pendientes de revisión

**No se implementan en esta fase.** Sus textos no están validados profesionalmente.

- **Durante la ejecución:** como el aviso ya está en el inicio, la rutina, el detalle y la parada, no se recomienda repetirlo entero en el reproductor. Se podría valorar un recordatorio breve junto al botón «Detener». Por ejemplo: «Para si aparece un dolor nuevo o inusual, molestias en el pecho, falta de aire o mareo».
- **Consejos preventivos por ejercicio:** por ejemplo, la silla cerca en los ejercicios de pie. Se mostrarían separados de las instrucciones y de «Exige:», para que no se confundan con exigencias.
- **Condición:** cualquier texto sobre síntomas, interrupción o respuesta ante incidentes debe ser prudente, revisarse con la skill `healthmove-safety-reviewer` y, antes de presentarse como orientación sanitaria validada, pasar una revisión profesional que hoy no existe. No se afirma esa validación.

---

## 9. Impacto en la disponibilidad

- **R9.1.** Todo plan de cambios de etiquetas incluye el impacto en la disponibilidad: los ejercicios compatibles por fase para un conjunto fijo de perfiles, antes y después.
  - **Perfiles:** cada opción de `opciones.js` sola; cada posición de `POSICION`; posición con dos opciones; «solo sentado» con tres opciones.
  - **Lista fija** (`registro.md`, 2026-10-19, P6), sobre el perfil base de la herramienta: «posición con dos opciones» son `de_pie_apoyo` con `un_brazo`, con `cerrar_mano`, con `peso_manos` y con `equilibrio`; «solo sentado con tres opciones» son `solo_sentado` + `un_brazo` + `cerrar_mano` + `brazo_arriba` y `solo_sentado` + `un_brazo` + `cerrar_mano` + `peso_manos`.
- **R9.2.** Cada medición declara sus condiciones:
  - si es **modo auditoría**, con los ejercicios en `borrador` incluidos (`permitirBorrador: true`);
  - si usa **supuestos de texto**, como identificar los ejercicios «con apoyo» por palabras clave;
  - la versión exacta del catálogo (apartado 10.2).
  Una medición en modo auditoría **no** es la disponibilidad real. Fuera del modo desarrollo, el motor no usa ningún ejercicio en `borrador`, y hoy lo están los 220.
- **R9.3.** La disponibilidad es información para decidir, nunca un motivo para retirar una etiqueta. Una marca conservadora costosa se revisa buscando evidencia (R2.2), no se quita.
- **R9.4.** Las mediciones no son disponibilidad clínica ni idoneidad para nadie: son recuentos del motor sobre etiquetas documentales.
- **Herramienta:** `node scripts/disponibilidad.mjs` (desde el 2026-10-19; `registro.md`, P6). Mide por defecto todos los perfiles de R9.1, declara las condiciones de R9.2 y, con `--escenario`, aplica en memoria los cambios de un plan para dar el antes y el después. No modifica datos ni decide si un cambio es correcto. Detalle en `herramientas.md`.
- **No hay umbral de aviso aprobado.** Se informa sin umbral.

---

## 10. Trazabilidad

### 10.1. Qué se registra por cada decisión de etiqueta o adaptación

| Dato | Dónde |
|---|---|
| Id del ejercicio | Informe de lote y `registro.md` |
| Fuente y fragmento o referencia (página, sección, imagen) | Informe de lote. El catálogo solo guarda `fuente.organizacion`, `titulo`, `url`, `licencia` y `consultado` |
| Población destinataria de la fuente | `fuente.especifica_de` (apartado 11) |
| Exigencia evaluada, evidencia D/I/N, fundamento y regla | Tabla de exigencias del informe |
| Etiqueta actual y propuesta, con justificación | Tabla de exigencias y «Propuesta de cambios» del informe |
| Adaptación examinada y prueba de R3.1-R3.5 | Informe. Una vez aprobada, el texto para el usuario va a `adaptaciones` |
| Filtros afectados | Opciones de `opciones.js` cuyo `excluyeExigencias` incluye una exigencia que cambia |
| Incertidumbres y preguntas | `notas_etiquetado` (las `[conservadora]`), el informe y `registro.md` |
| Estado de revisión y responsable | En el catálogo: `validacion.estado`, `responsable`, `etiquetado_por`, `revisado_por` y `fecha_revision`. Solo los rellena el desarrollador (§7.6). La decisión sobre cada propuesta se anota en `registro.md` |
| Versión del catálogo auditada | Cabecera del informe (apartado 10.2) |

### 10.2. Versión exacta del catálogo auditado

- **Situación actual:** los informes de los lotes 1 a 5 registran «v0.3.0». Eso no identifica el contenido con precisión, porque el campo `version` no cambia con cada edición.
- **Propuesta (sin implementar en código):** la cabecera de cada informe registra:
  - `version` y `actualizado` del catálogo;
  - el commit de la rama auditada;
  - el identificador git del contenido del archivo (`git rev-parse <commit>:public/data/catalogo.json`). Ejemplo, a 2026-10-16 en `defd8b0`: `72fda34f80d2e3222eabd5c0ce583c21c83d7699`;
  - si el catálogo tiene cambios sin confirmar, se indica expresamente, porque entonces no hay un identificador git fiable.
- **Herramienta disponible desde el 2026-10-18:** `node scripts/auditoria.mjs cabecera` imprime estos datos. La skill ya los pide en cada informe (§3.4 de la skill). Que pasen a ser regla del protocolo es una propuesta (`propuestas-cierre-protocolo.md`).
- **Propuesta adicional:** una huella por ejercicio (hash de su objeto JSON) permitiría saltarse en una auditoría posterior los ejercicios que no han cambiado.
  - La validez de una auditoría anterior depende además de la versión de este protocolo y de la fecha de consulta de la fuente.
  - Se apunta como propuesta de herramienta (apartado 14) y no se implementa.

---

## 11. DG-8: fuente y población destinataria

### 11.1. Qué debe permitir identificar la información de cada ejercicio

| Elemento | Campo actual |
|---|---|
| De dónde proviene | `fuente.organizacion`, `fuente.titulo`, `fuente.url`, `fuente.licencia` y `fuente.consultado` |
| Población a la que se dirigía la fuente | `fuente.especifica_de`, solo si la fuente la declara. Hoy está en 49 de los 220 ejercicios |
| Adaptaciones documentadas | `adaptaciones`, que el usuario ve en «Cambios respecto a la fuente» |
| Incertidumbres pendientes | `notas_etiquetado` (no visible), el informe y `registro.md` (Q7) |

### 11.2. Reglas

- **R8.1.** `fuente.especifica_de` solo se rellena con la población que la fuente declara. No se infiere ni se inventa.
  - Se escribe como un nombre breve de población, coherente con los valores existentes («párkinson», «amputación por debajo de la rodilla», «dolor lumbar»…).
  - Si la fuente adapta un paso a una situación concreta (por ejemplo, «la pierna que queda» en Leicester) y HealthMove lo generaliza, eso es una **adaptación** y va a `adaptaciones`, no dentro de `especifica_de`.
- **R8.2.** La población de la fuente **no** es un criterio de compatibilidad.
  - El motor no lee `especifica_de`; solo lo muestra `vistaEjercicio` (`app.js`).
  - La compatibilidad individual depende únicamente de las restricciones del perfil, las exigencias, las posiciones, los recursos y el estado de validación (§8 de la especificación).
  - La auditoría no usa `especifica_de` para marcar ni desmarcar exigencias.
- **R8.3.** En los informes y en cualquier texto propuesto debe quedar claro:
  - que un ejercicio procedente de una fuente dirigida a una población **no** es por ello apropiado para todas las personas de ese grupo;
  - que **tampoco** es exclusivo de ese grupo.
- **R8.4.** Organizar la presentación por población destinataria (por ejemplo, filtrar o agrupar en Explorar) es una propuesta de interfaz pendiente (Q8). Solo tiene sentido cuando la fuente declara la población.

---

## 12. Procedimiento de auditoría

1. **Identificar el ejercicio y su fuente.**
   - Leer el ejercicio en `public/data/catalogo.json`, nunca de memoria ni de un informe anterior.
   - Registrar la versión exacta del catálogo (10.2).
   - Consultar en `registro.md` las decisiones, los CN, las propuestas retiradas y las de variante.
2. **Abrir la fuente real.** Si no se puede, C4 con alcance de todo el ejercicio: PENDIENTE_DE_FUENTE.
   - Localizar el ejercicio y revisar el texto y, cuando haga falta, las imágenes (R7.9 en los PDF a columnas).
   - Registrar la población destinataria si la fuente la declara (R8.1).
3. **Separar** hechos (D), inferencias (I, escritas como tales) e incertidumbres (I o N sin resolver) (2.3).
4. **Evaluar cada exigencia por separado** con evidencia, fundamento y regla (DG-2 y DG-7), clasificando antes la función de los brazos y las manos (DG-4) y la clase de cada indicación de seguridad (DG-6).
5. **Analizar las adaptaciones** existentes o propuestas con R3.1-R3.5, sin inventar movimientos ni variantes (DG-5).
6. **Verificar los filtros afectados** por cada adaptación o etiqueta (R3.4, 10.1).
7. **Registrar** los desacuerdos, los casos no contemplados (R1.4), las cuestiones abiertas que afectan al ejercicio y las propuestas de variante (R5.4).
8. **Evaluar el impacto en la disponibilidad** de las etiquetas propuestas, declarando las condiciones de la medición (apartado 9).
9. **Presentar** el informe y el plan de cambios. No se edita el catálogo durante la auditoría.
   - Cada ejercicio termina con uno de los resultados de la skill (apartado 8 de la skill).
   - Entre ellos está PENDIENTE DE DECISIÓN, cuando el ejercicio depende de una cuestión abierta o de un CN.
10. **Mantener la trazabilidad.** Una vez aprobado y aplicado el plan:
    - anotar la decisión en `registro.md`;
    - ejecutar `node scripts/validar-catalogo.mjs`;
    - si cambian ilustraciones, `npm run ilustraciones`;
    - si cambian archivos de `public/`, `npm run version-sw`;
    - después, `npm test`.

### 12.1. Cuándo parar y preguntar

- Una regla aprobada choca con otra, o con la evidencia.
- Haría falta un `false` sin evidencia D ni adaptación aprobada.
- Una corrección cambiaría el movimiento, el propósito o la población del ejercicio.
- Haría falta un ejercicio o una variante nueva.
- Haría falta cambiar el esquema, el motor, el validador o la interfaz.
- Hay una cuestión de seguridad que no se resuelve con una etiqueta.
- El caso no está contemplado (R1.4).

Una pregunta se plantea **una vez por clase de caso**, con este formato mínimo:

```
<Id> · <pregunta en una frase>
Clase de casos y ejercicios afectados (con recuento)
Evidencia: 1-3 referencias concretas
Opciones, con su efecto en el motor (opciones de opciones.js afectadas)
Recomendación y motivo
Valor provisional mientras siga pendiente (el actual)
```

---

## 13. Cuestiones abiertas

Son las cuestiones que este protocolo no resuelve. Mientras sigan abiertas, **no se cambian etiquetas**: se registran y se presentan.

| Id | Cuestión | Por qué está abierta | Efecto mientras siga abierta |
|---|---|---|---|
| **Q1** | ¿`ambos_brazos` en el **apoyo bilateral para estabilidad**? Ejemplo: «Rest your hands on the back of a chair for stability» (NHS) en ejercicios de pie | DG-4 pide analizar la función, y DG-2 permite el `true` conservador si hay duda. Aplicando las dos sin más criterio, la duda acabaría siempre en `true`. **Medición en modo auditoría** (220 ejercicios en borrador; los «con apoyo» identificados por búsqueda de texto; 2026-10-14): para el perfil «Solo puedo usar un brazo» + «Puedo estar de pie solo si me sujeto a algo», los ejercicios de pie compatibles serían 31 si el apoyo no cuenta, 20 si solo cuenta cuando además hay `una_pierna`, y 0 si cuenta siempre | Valor actual sin cambios. Los casos se registran como CN |
| **Q2** | **Contacto sin evidencia de cierre de la mano:** ¿`agarre` en `true` conservador (R2.1) o no (R7.4)? Ejemplo: «manos en el respaldo», con `agarre` en true en el catálogo | R7.4 prohíbe inferir el agarre del contacto, y R2.1 permite marcar ante la duda. **Propuesta del auditor:** si la instrucción de HealthMove pide expresamente la palma abierta y eso cumple DG-3, `false`; si la instrucción es neutra, `true` conservador con su nota, sin presentarlo como un agarre observado | Valor actual sin cambios |
| **Q3** | **Umbral de «inclinación leve»** (§4): la especificación promete una frase de referencia que no existe | **Resuelta** (`registro.md`, decisiones del 2026-10-19, P5): sin ángulo en la fuente, se conserva su término original y no se inventa un umbral; con ángulo, puede usarse atribuyéndolo a la fuente (R7.8) | Sin cambio de etiquetas. La familia `sentarse-levantarse` necesita un plan: el NHS («Lean slightly forwards», con una foto del paso B que muestra más inclinación) y Later Life Training («Lean forwards slightly») dicen lo mismo y las etiquetas difieren |
| **Q4** | **El §7 de la especificación no dice que sus casos de referencia sean ilustrativos** (DG-1), y dos filas llevan «—» | Editar la especificación está fuera del alcance de esta fase | Este protocolo aplica DG-1. Se propone añadir al §7 una frase como «Los casos de referencia ilustran la aplicación de las definiciones; no son exhaustivos» |
| **Q5** | **Prueba operativa de R3.1** (el subconjunto de ejecuciones que permite la fuente) | Concreta DG-3.1, pero el texto aprobado no la menciona | Se aplica como criterio de revisión. Si no se confirma, cada adaptación se presenta con su justificación individual |
| **Q6** | **Dónde vive la skill.** La original está sin seguimiento en la copia de trabajo de `main`. Se ha creado una versión actualizada en `desarrollo-v1`; la de `main` no se ha tocado | **Resuelta** (`registro.md`, decisiones del 2026-10-18, P4): la copia vigente es la de `desarrollo-v1`. La de `main` se apartó de forma reversible a `.claude/apartado-2026-10-18/` | Sin efecto en los datos. Falta versionarla junto con sus dependencias (lista en `herramientas.md`) |
| **Q7** | **Incertidumbres visibles para el usuario** (DG-8): el catálogo las guarda en `notas_etiquetado`, que la interfaz no muestra | Mostrarlas sería un cambio de interfaz, y quizá de esquema si se quisieran estructuradas | Quedan en la documentación de auditoría y en `notas_etiquetado` |
| **Q8** | **Interfaz pendiente.** (a) Rótulo `ETIQUETA_EXIGENCIA.ambos_brazos` («usar los dos brazos a la vez», `opciones.js:103`), que contradice DG-4 cuando los brazos se alternan. (b) Mensaje de procedencia (`vistaEjercicio`, en `app.js`). (c) Propuestas del apartado 8.4 | Fuera del alcance de esta fase | El rótulo debe cambiarse antes o junto con los cambios de datos de `ambos_brazos`. Para (b), la intención del mensaje está aprobada como aclaración (`registro.md`, 2026-10-18, P2). El texto de interfaz está propuesto en `propuestas-cierre-protocolo.md`, sin implementar |

**Correspondencia con las decisiones pendientes de `consolidacion-lotes-1-5.md`:**

| Decisión de la consolidación | Dónde queda ahora |
|---|---|
| D4 y D5 | DG-4, con Q1 abierta |
| D6 | DG-1, R7.8 y Q3 |
| D7 y D8 | DG-2 y DG-3, con Q5 |
| D9 | DG-5. No se crean derivados sin fuente |
| D10 | DG-8 y Q8(b) |
| D11 | Q8(a) |

---

## 14. Propuestas registradas que no se implementan

| Propuesta | Tipo | Motivo para no hacerla ahora |
|---|---|---|
| Huella por ejercicio y registro del identificador git del catálogo en los informes | Proceso o herramienta | Identificador git: disponible en `node scripts/auditoria.mjs cabecera` (2026-10-18). Huellas de compatibilidad, contenido y auditoría: definidas como propuesta (`registro.md`, 2026-10-18, P3; texto en `propuestas-cierre-protocolo.md`), sin implementar. Hoy solo existe una huella literal provisional |
| Frase de umbral de la rodilla en el §4 y aclaración de DG-1 en el §7 de la especificación | Documentación de producto | Q4. La de «inclinación leve» ya está incorporada (Q3, resuelta) |
| Fichas por fuente en `docs/auditoria-catalogo/fuentes/` | Documentación de auditoría | Se crearán al auditar cada fuente, no por adelantado |
| Campo estructurado de población o de incertidumbres | Esquema | No hace falta mientras `fuente.especifica_de` y `notas_etiquetado` basten (Q7) |
| Cambios de interfaz (Q8) | Interfaz | Alcance |

---

## 15. Historial

| Fecha | Versión | Cambio |
|---|---|---|
| 2026-10-16 | 1.0 | Primera versión. Formaliza DG-1 a DG-8 a partir de la propuesta y de la revisión crítica |
| 2026-10-18 | 1.0 | Sin cambios normativos. Estado de Q6 (resuelta, P4) y Q8(b) (aclaración aprobada, P2). Estado de las herramientas en 10.2 y §14. Los cambios normativos pendientes están en `propuestas-cierre-protocolo.md` |
| 2026-10-19 | 1.0 | Q3 resuelta (P5), dentro de R7.8, que ya prohibía inventar umbrales. Lista fija de perfiles de R9.1 y herramienta de disponibilidad (P6). Citas de `app.js` por función (DS-06) y procedimiento de R7.9 (DS-18) (P7). Se mantiene la versión 1.0: no cambia ningún criterio aprobado, y la 1.1 está reservada para `propuestas-cierre-protocolo.md` |
