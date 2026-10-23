# Consolidación de la auditoría documental, lotes 1 a 5

- Fecha: 2026-10-14
- Auditor: Claude, con la skill `auditar-catalogo-ejercicios`. Es una auditoría documental, no una validación clínica.
- **Fase: revisión y propuesta.** Este documento no modifica el catálogo, las ilustraciones, los estados, las fechas, la autoría, las licencias ni las versiones.
- Los informes originales (`lote-01.md` a `lote-05.md`) se dejan tal cual. Las correcciones a esos informes se recogen aquí.

## 1. Estado inicial

- **Worktree `~/Escritorio/HealthMove/.claude/worktrees/desarrollo-v1`:**
  - Rama `desarrollo-v1`, árbol limpio.
  - Último commit `defd8b0` (informes de los lotes 1 a 5).
- **`main` (`~/Escritorio/HealthMove`):**
  - En `ada0699`, sin cambios de seguimiento.
  - Archivos sin seguimiento del desarrollador: `.claude/skills/auditar-catalogo-ejercicios/`, siete skills de diseño, `icon.png` e `icon.svg`.
  - No se ha tocado.
- **Uso de los campos en el código:**
  - `validar-catalogo.mjs:70` comprueba que `variante_de` apunta a un id existente y distinto.
  - `motor.js:91` agrupa cada ejercicio y su versión de partida en una «familia» (`variante_de || id`).
  - `app.js:590` muestra las variantes en el detalle, y `app.js:621` muestra `fuente.especifica_de` como «Material pensado para: …».
  - `opciones.js:37` hace que la opción «Solo puedo usar un brazo» excluya `ambos_brazos`, y `opciones.js:103` la rotula como «usar los dos brazos **a la vez**».
- **Evidencia visual consultada en esta fase** (no se había revisado en los lotes):
  - NHS, foto «Chest stretch» (`NHSC_0118_chest-stretch1`).
  - NHS, fotos de «Sit-to-stand», «Mini-squats», «One-leg stand» y «Calf stretch».
  - Age UK Devon, páginas 5 y 15 del PDF, renderizadas: «Ankle Activator» y «Arm Curl».

## 2. Hallazgos consolidados

### 2.1. Correcciones a los propios informes

1. **El folleto de Leicester no tiene 8 ejercicios en el catálogo, sino 11.** Son `marcha-sentado-manos-cadera`, `inclinacion-lateral-brazo-arriba`, `estiramiento-isquiotibiales-sentado`, `circulos-hombros-sentado`, `curl-biceps-sentado`, `toalla-separar-sentado`, `boxeo-sentado`, `boxeo-circulos-alto`, `boxeo-circulos-pecho`, `arquear-espalda-sentado` y `movilidad-lumbar-sentado`.
2. **Lote 2, `tobillos-punta-talon-sentado`:** el informe dijo que la instrucción «Aumenta el recorrido poco a poco» pertenecía a la marcha. **Es incorrecto.** En la página 5 renderizada, la frase «Gradually increase range of movement» está dentro del bloque «Ankle Activator» (punta y talón). El error vino de la extracción de texto en columnas. Por la misma causa, el «Rep. 3» citado no es de este ejercicio, sino del calentamiento. **Se retira esa propuesta.**
3. **Lote 2, ejercicios que «mencionan la amputación»:** son dos, pero de forma distinta.
   - `estiramiento-isquiotibiales-sentado` habla de «la pierna que queda» (*remaining leg*).
   - `inclinacion-lateral-brazo-arriba` solo justifica el estiramiento porque esos músculos se tensan tras una amputación; no habla de una pierna restante.
4. **Lote 5, `equilibrio-una-pierna-pared`:** la foto del NHS muestra que la rodilla **sube hacia delante** casi hasta la altura de la cadera. **Se descarta** la propuesta de limitar el movimiento a «levanta un poco el pie», porque cambiaría el ejercicio de la fuente.
5. **Lote 1, `estiramiento-pecho-sentado`:** la foto del NHS resuelve `brazo_sobre_hombro`. En los dos pasos los brazos van extendidos hacia los lados y hacia abajo, con las manos muy por debajo del hombro. **Queda en FALSE con evidencia**; no hace falta la adaptación propuesta.
6. **Criterio de rodilla (`registro.md`):** la propuesta usaba la posición del pie como indicador principal. Siguiendo la decisión 2, se reformula en el apartado 2.3: el ángulo entre muslo y pierna en vista lateral es la medida, y el pie es solo un indicio en ciertos casos.

### 2.2. Las situaciones de brazos, separadas

| Supuesto | Ejemplos | Decisión que lo cubre | Estado |
|---|---|---|---|
| Los dos brazos hacen el movimiento, a la vez o por turnos | Flexiones contra la pared, boxeo, abrir y cerrar las manos, toalla, banda | Decisión 1 (literal) | Aprobada: `true` |
| Las dos manos se colocan a la vez en una postura que forma parte del ejercicio | Brazos cruzados en el giro de tronco; manos en la cadera con los codos hacia atrás en el arqueo | Decisión 1 (literal) | Aprobada: `true` |
| Las dos manos solo sirven de apoyo o estabilización (silla, pared) | Ejercicios de pie con el respaldo; marcha sujetándose a los lados | Decisión 4 | **Pendiente** |
| Las manos solo descansan en el cuerpo, sin función en el ejercicio | Manos en la cadera durante la marcha; manos en los muslos; manos sobre la rodilla | — | **Pendiente: decisión 5 (nueva)** |
| Cada lado se hace por separado, con un brazo cada vez | Curl con botella, pulgar con cada dedo, inclinación lateral | Decisión 1 | `false` |

### 2.3. Criterio operativo de rodilla, reformulado (propuesta)

- **Medida:** el ángulo aproximado entre el muslo y la pierna en vista lateral. 0° es la rodilla estirada. El umbral de la especificación es 90°.
- **TRUE con evidencia:** el texto o una imagen de la fuente muestran una flexión claramente mayor de 90°. Por ejemplo, el talón hacia el glúteo, la cuclilla o una sentadilla profunda.
- **TRUE por conservadurismo (§7.1):** la instrucción permite pasar de 90° sin limitarlo («hasta donde puedas») y no hay imagen que lo acote. Se anota en `notas_etiquetado` como «por conservadurismo, no por evidencia».
- **FALSE con evidencia:** el texto o la imagen muestran una flexión de 90° o menos, o la rodilla estirada.
- **Indicio, no prueba:** sentado con el muslo horizontal, que el pie quede por delante de la vertical de la rodilla indica menos de 90°. No vale como medida en otras posturas.
- **Sin evidencia suficiente:** se presenta como pendiente. No se inventa un ángulo.

### 2.4. Procedencia de Leicester

- **11 ejercicios afectados** (punto 2.1.1), todos sin `fuente.especifica_de`. Valor acordado: «usuarios de silla de ruedas».
- **Contexto adicional:**
  - En `estiramiento-isquiotibiales-sentado`, la mención de «la pierna que queda» tras una amputación.
  - En `inclinacion-lateral-brazo-arriba`, la mención de la amputación como motivo del estiramiento.
- No se extiende a Age UK Devon ni al NHS.

## 3. Plan de cambios por archivo

### 3.1. Leyenda de categorías

| Código | Significado |
|---|---|
| **DOC** | Corrección documental respaldada por evidencia |
| **ADAPT** | Adaptación de HealthMove que hay que documentar |
| **EXIG-OK** | Cambio de exigencia ya cubierto por una decisión aprobada |
| **EXIG-PEND** | Cambio de exigencia pendiente de decisión |
| **ESQ** | Cambio de esquema que necesita aprobación |
| **UI** | Cambio de interfaz que requiere evaluar antes la arquitectura |
| **ILUS** | Corrección de una ilustración para que coincida con la fuente |
| **DESC** | Propuesta descartada |

### 3.2. Cambios propuestos

Todas las rutas del catálogo son `public/data/catalogo.json → ejercicios[id]`.

| Archivo | Elemento | Valor actual | Valor propuesto | Justificación | Evidencia | Estado |
|---|---|---|---|---|---|---|
| catalogo.json | los 11 de Leicester · `fuente.especifica_de` | (ausente) | «usuarios de silla de ruedas» | Decisión 3 | Introducción del PDF de Leicester | DOC (aprobado) |
| catalogo.json | `estiramiento-isquiotibiales-sentado` · `fuente.especifica_de` | (ausente) | «usuarios de silla de ruedas; el ejercicio está escrito para la pierna que queda tras una amputación» | Decisión 3 | Leicester, ejercicio 3 | DOC (aprobado) |
| catalogo.json | `inclinacion-lateral-brazo-arriba` · `fuente.especifica_de` | (ausente) | «usuarios de silla de ruedas; el ejercicio menciona la amputación» | Decisión 3 | Leicester, ejercicio 2 | DOC (aprobado) |
| catalogo.json | `estiramiento-pecho-sentado` · `exigencias.ambos_brazos` | false | true | Los dos brazos se extienden a la vez en el estiramiento | NHS, texto y foto | EXIG-OK |
| catalogo.json | `estiramiento-pecho-sentado` · `notas_etiquetado` | «Brazos… a la altura del hombro, no por encima» | «Según la foto de la fuente, los brazos van hacia los lados y hacia abajo, por debajo del hombro» | La nota pasa de interpretación a evidencia | NHS, foto | DOC |
| scripts/ilustraciones/sentado.mjs:10 | `estiramiento-pecho-sentado` · pose final | brazos a 90° (horizontales) | brazos a unos 35° hacia abajo y afuera | La ilustración exagera la altura respecto a la foto | NHS, foto | ILUS |
| catalogo.json | `giro-tronco-sentado` · `exigencias.ambos_brazos` | false | true | Los dos brazos se cruzan a la vez | NHS, texto | EXIG-OK |
| catalogo.json | `tobillos-punta-talon-sentado` · `instrucciones[3]` | «Aumenta el recorrido poco a poco…» | sin cambios | La fuente sí lo dice (corrección 2.1.2) | Age UK, p. 5 | DESC (se retira la propuesta del lote 2) |
| catalogo.json | `tobillos-punta-talon-sentado` · `exigencias.flexion_profunda_rodilla` | false | false | Las fotos muestran el pie por delante de la rodilla y un ángulo de unos 90° o menos | Age UK, p. 5, fotos | DOC (se confirma) |
| catalogo.json | `tobillos-punta-talon-sentado` · `exigencias.ambos_brazos` | false | según la decisión 5 | Manos que descansan en los muslos (adaptación ya documentada) | — | EXIG-PEND (D5) |
| catalogo.json | `inclinacion-lateral-brazo-arriba` · `exigencias.ambos_brazos` | false | true | Un brazo arriba y la otra mano en la cadera, en una postura descrita | Leicester, ejercicio 2 | EXIG-OK |
| catalogo.json | `inclinacion-lateral-sentado` · `dosis` | «1 o 2 veces hacia cada lado, hasta 10 segundos» | «Una vez hacia cada lado, hasta 10 segundos» | La fuente describe una vez por lado | Age UK, p. 6 | DOC (recomendado) o ADAPT (si se prefiere mantener «1 o 2») |
| catalogo.json | `estiramiento-isquiotibiales-sentado` · `adaptaciones` | [] | «La fuente describe el estiramiento de la pierna que queda tras una amputación; aquí se hace con cada pierna» y «La fuente indica de 3 a 5 repeticiones; se usan 3» | Diferencias sin documentar | Leicester, ejercicio 3 | ADAPT |
| catalogo.json | `toalla-separar-sentado` · `adaptaciones` | [] | «La fuente propone de 2 a 3 series; aquí se hace una dentro de la rutina» | Reducción sin documentar | Leicester, ejercicio 7 | ADAPT |
| catalogo.json | `boxeo-sentado` · `exigencias.ambos_brazos` | false | true | Los brazos se alternan; con el criterio literal se marca aunque sea por turnos | Leicester, ejercicio 8 | EXIG-OK |
| catalogo.json | `boxeo-circulos-alto` / `boxeo-circulos-pecho` · `variante_de` | alto: null; pecho: «boxeo-circulos-alto» | sin cambios | Relación correcta: el id existe, es distinto y es la versión que la fuente propone si duelen los hombros | Validador y Leicester, ejercicio 9 | DOC (se confirma) |
| catalogo.json | `arquear-espalda-sentado` · `exigencias.ambos_brazos` | false | true | Los codos se juntan hacia atrás con las dos manos en la cadera; es parte del movimiento | Leicester, ejercicio 10 | EXIG-OK |
| catalogo.json | `arquear-espalda-sentado` · `adaptaciones` | [1 elemento] | añadir «La fuente no indica repeticiones; se proponen 5» | Dosis sin respaldo | Leicester, ejercicio 10 | ADAPT |
| catalogo.json | `estiramiento-gemelo-sentado` · `exigencias.ambos_brazos` | false | según la decisión 5 | Las manos descansan sobre la rodilla | Age UK, «Calf Stretch» | EXIG-PEND (D5) |
| catalogo.json | `estiramiento-gemelo-sentado` · `notas_etiquetado` | «El talón queda en el suelo…» | «El talón en el suelo es una interpretación nuestra; la ilustración de la fuente está pendiente de revisar» | No consta en el texto | Age UK (ilustración no revisada) | DOC |
| catalogo.json | `abrir-cerrar-manos` · `exigencias.ambos_brazos` | false | true | Las dos manos hacen el movimiento a la vez | Age UK, «Fingers» | EXIG-OK |
| catalogo.json | `banda-curl-sentado` · `instrucciones[2]` y `[3]` | «Sube los puños hacia los hombros…» / «Mantén hasta 5 segundos y baja los brazos despacio» | Ver la redacción conservadora debajo de la tabla | La fuente parte de los antebrazos horizontales y vuelve a esa posición | Age UK, p. 15, foto | DOC |
| catalogo.json | `banda-curl-sentado` · `adaptaciones` | [] | «La fuente indica mantener hasta 5 segundos sin precisar en qué posición» | Incertidumbre documentada | Age UK, p. 15 | ADAPT |
| scripts/ilustraciones/sentado.mjs:33 | `banda-curl-sentado` · pose inicial | brazo colgando (codo a 20°) | codo a 90°, antebrazo horizontal | Coincidir con la foto | Age UK, p. 15, foto | ILUS |
| catalogo.json | `sentarse-levantarse` · `notas_etiquetado` | nota actual | añadir «`flexion_profunda_rodilla` se marca por conservadurismo: la fuente no fija la posición de los pies» | Distinguir conservadurismo de medición | NHS (en las fotos, unos 90 a 100° en el paso B; aproximado) | DOC |
| catalogo.json | `sentarse-levantarse` · `exigencias.inclinacion_tronco` y `flexion_amplia_cadera` | false / false | según la decisión 6 | En la foto B el tronco se inclina mucho hacia delante; el caso de referencia del §7 no las marca | NHS, foto B | EXIG-PEND (D6) |
| catalogo.json | `sentarse-levantarse` · `exigencias.agarre` | false | false | Las manos son una guía opcional y no se pide sujetarse | NHS, texto; en la foto A la mano se apoya en el asiento | DOC (se confirma, con nota) |
| catalogo.json | `mini-sentadillas` · `exigencias.ambos_brazos` | false | según la decisión 4 | Apoyo | NHS | EXIG-PEND (D4) |
| catalogo.json | `mini-sentadillas` · `exigencias.flexion_profunda_rodilla` | true | según la decisión 7 | La foto muestra poca flexión; el texto no la limita | NHS, foto B | EXIG-PEND (D7) |
| catalogo.json | `elevacion-talones-apoyo` · `exigencias.ambos_brazos` | false | según la decisión 4 | Apoyo; el caso de referencia del §7 no la marca | NHS | EXIG-PEND (D4) |
| catalogo.json | `elevacion-talones-sin-apoyo` · `adaptaciones` | [] | «La fuente solo dice “sin apoyo”; HealthMove mantiene la silla cerca para sujetarse si se pierde el equilibrio» | Añadido nuestro | NHS | ADAPT |
| catalogo.json | `elevacion-lateral-pierna` · `exigencias.ambos_brazos` | false | según la decisión 4 | Apoyo | NHS | EXIG-PEND (D4) |
| catalogo.json | `extension-pierna-atras` · `exigencias.ambos_brazos` | false | según la decisión 4 | Apoyo; no implica soportar peso con las manos | NHS | EXIG-PEND (D4) |
| catalogo.json | `flexiones-pared` · `exigencias.ambos_brazos` | false | true | Los dos brazos hacen el movimiento | NHS | EXIG-OK |
| catalogo.json | `equilibrio-una-pierna-pared` · `instrucciones[1]` | «Levanta la pierna izquierda con la cadera nivelada…» | «Sube la rodilla izquierda hacia delante, con la cadera nivelada…» | La foto fija la dirección del movimiento | NHS, foto B | DOC |
| catalogo.json | `equilibrio-una-pierna-pared` · `exigencias.flexion_profunda_rodilla` | false | según la decisión 7 | En la foto la rodilla está en torno a 90°; es un caso límite | NHS, foto B | EXIG-PEND (D7) |
| catalogo.json | `equilibrio-una-pierna-pared` · `exigencias.ambos_brazos` | false | según la decisión 4 | Las yemas de las dos manos en la pared, como apoyo | NHS | EXIG-PEND (D4) |
| scripts/ilustraciones/depie.mjs:18 | `equilibrio-una-pierna-pared` · pose final | pie hacia atrás (`rodillaI: -80`) | rodilla hacia delante con el muslo casi horizontal | Coincidir con la foto | NHS, foto B | ILUS |
| catalogo.json | `equilibrio-una-pierna-pared` · propuesta «levanta un poco el pie» | — | — | Cambiaría el ejercicio | NHS, foto B | DESC |
| catalogo.json | `estiramiento-gemelo-pared` · `exigencias.peso_en_manos` | false | según la decisión 8 | La fuente dice «for stability»; la foto muestra una inclinación leve y no es concluyente | NHS, foto | EXIG-PEND (D8) |
| catalogo.json | `estiramiento-gemelo-pared` · `exigencias.ambos_brazos` | false | según la decisión 4 | Apoyo | NHS | EXIG-PEND (D4) |
| catalogo.json | `marcha-sentado-sujetandose` · `exigencias.ambos_brazos` | false | según la decisión 4 | Sujetar los dos lados de la silla es apoyo | NHS | EXIG-PEND (D4) |
| catalogo.json | `marcha-sentado-manos-cadera` y `circulos-hombros-sentado` · `exigencias.ambos_brazos` | false | según la decisión 5 | Las manos descansan, sin función | Leicester | EXIG-PEND (D5) |
| public/js/opciones.js:103 | `ETIQUETA_EXIGENCIA.ambos_brazos` | «usar los dos brazos a la vez» | «usar los dos brazos» | Con el criterio literal también cuentan los brazos por turnos | Decisión 1 | UI |
| public/js/app.js:621 | Texto de procedencia en el detalle | «Material pensado para: …» | Ver el apartado 5 | Decisión 3 | — | UI |

**Redacción conservadora propuesta para `banda-curl-sentado`:**
- `instrucciones[2]`: «Empieza con los codos pegados al cuerpo y doblados en ángulo recto, con los puños al frente. Sube los puños hacia los hombros.»
- `instrucciones[3]`: «Bájalos hasta que los antebrazos vuelvan a quedar horizontales. Mantén hasta 5 segundos y relaja los brazos.»

**Sin cambios:**
- `marcha-sentado-sujetandose` (salvo la decisión 4), `estiramiento-tobillo-sentado`, `elevar-rodar-hombros-sentado`, `curl-biceps-sentado` (salvo `especifica_de`), `pulgar-dedos`, `activacion-sentado`, `banda-remo-sentado`, `movilidad-lumbar-sentado` (salvo `especifica_de`) e `inclinacion-lateral-de-pie`.
- Se ha comprobado que ninguno de estos cambios afecta a estados, fechas, autoría, licencias ni a la versión del catálogo.

## 4. Adaptaciones a un solo brazo y ejercicios derivados

La convención de ids existente usa sufijos descriptivos en kebab-case (`-apoyo`, `-sin-apoyo`, `-pared`, `-de-pie`). Los ids sugeridos no colisionan con ningún id actual (comprobado). Son provisionales.

| Candidato | Instrucción original | Cambio a un brazo | ¿Se mantiene el ejercicio? | Adaptación o derivado | Cambios de exigencias | Efecto en el motor | ¿Nueva auditoría? | Riesgos | Recomendación |
|---|---|---|---|---|---|---|---|---|---|
| `estiramiento-gemelo-sentado` | Manos en la rodilla contraria | Una mano o ninguna en la rodilla | Sí: las manos solo descansan | **Adaptación** | Ninguno si la decisión 5 deja estas manos fuera de `ambos_brazos` | Ninguno | No | Ninguno | Documentar «apoya una o las dos manos». Sin ejercicio nuevo |
| `abrir-cerrar-manos` | Las dos manos se abren y cierran a la vez | Una mano cada vez | Sí, con una mano cada vez | **Derivado** | `ambos_brazos` false en la versión de una mano | Si fuera un derivado, compartiría familia con el original y nunca saldrían juntos en una rutina | Sí, si es derivado: la fuente no describe la versión de una mano | Bajo | **Derivado** `abrir-cerrar-mano` (ver el matiz debajo): una adaptación dentro del original no lo abre a quien usa un brazo |
| `giro-tronco-sentado` | Brazos cruzados con las manos a los hombros, giro a cada lado | Una mano al hombro contrario y el otro brazo relajado | Sí en el giro, pero cambia la postura de los brazos y la ilustración | **Derivado** `giro-tronco-sentado-un-brazo`, con `variante_de` `giro-tronco-sentado` | Igual que el original salvo `ambos_brazos` false. Hay que revisar `agarre` y `mano_detras` (false) | Misma familia: el motor elige uno u otro. Una persona con un solo brazo recibe el derivado | Sí: la fuente del NHS no describe la versión con un brazo. Sería una adaptación de HealthMove sin fuente específica | Hay que presentarlo como adaptación nuestra, no del NHS | Crearlo solo si se acepta un derivado sin fuente propia, marcado claramente como adaptación |
| `boxeo-sentado` | Golpes alternos con los dos brazos | Golpes con un solo brazo | Sí, la mecánica de cada golpe es la misma | **Derivado** `boxeo-sentado-un-brazo` | `ambos_brazos` false | Si es derivado, misma familia | Sí, si es derivado | Bajo. La fuente no describe la versión de un brazo: sería una adaptación de HealthMove | **Derivado**. Documentarlo solo en el original no basta, porque el original queda excluido para quien usa un brazo |

**Matiz importante:** con el criterio literal, una adaptación documentada dentro del ejercicio original no lo vuelve compatible con «Solo puedo usar un brazo», porque `ambos_brazos` sigue en true. Hay dos caminos:
- **Si la decisión 5 deja fuera las manos que solo descansan,** `estiramiento-gemelo-sentado` no necesita nada.
- **Para los ejercicios donde los brazos hacen el movimiento** (`abrir-cerrar-manos`, `boxeo-sentado`), la única forma de ofrecerlos a quien usa un brazo es un **derivado** con `ambos_brazos` false.

Recomendación final:
- **Derivados:** `boxeo-sentado-un-brazo` y `abrir-cerrar-mano`, este último con id en singular.
- **Pendiente de tu criterio:** `giro-tronco-sentado-un-brazo`, porque no tiene fuente propia.
- **Ninguno para** `estiramiento-gemelo-sentado`.

## 5. Mensaje de interfaz sobre la procedencia

**Estado actual:**
- El detalle (`app.js:621`) añade «Material pensado para: {especifica_de}» junto a la fuente.
- No hay más lógica de procedencia.
- `especifica_de` es texto libre, así que no permite distinguir con fiabilidad «silla de ruedas» de «amputación».

**Evaluación del texto propuesto:** es adecuado y no es alarmista. Tres ajustes:
1. «consulta si existe una variante adecuada» presupone que siempre hay una; mejor «busca una variante o pregunta a tu profesional sanitario».
2. Conviene dejar claro que no es una indicación médica.
3. La frase sobre la amputación solo debe mostrarse en los dos ejercicios que la mencionan.

**Propuesta:**
- **Ubicación:** en el detalle del ejercicio, justo encima de «Cómo se hace», como nota informativa (estilo `nota-neutra`, no de aviso). No en el reproductor, para no recargarlo.
- **Condición:** solo si el ejercicio tiene `fuente.especifica_de`.
- **Relación con los metadatos (requiere un cambio de esquema, ESQ):** añadir a `fuente` un campo estructurado, por ejemplo `poblacion_fuente: ["silla_ruedas"]` o `["silla_ruedas", "amputacion"]`.
  - Así la interfaz elige las frases sin analizar texto libre.
  - `especifica_de` se mantiene como descripción legible para quien revisa el catálogo.
  - Habría que extender el validador para aceptar solo esos códigos.
- **Texto adaptado:**
  - «Este ejercicio procede de un material pensado para personas usuarias de silla de ruedas. No es exclusivo para ellas: puedes considerarlo si las instrucciones encajan con tu situación. Es información sobre la fuente, no una indicación médica.»
  - Solo con `amputacion`: «Algunas indicaciones de la fuente están pensadas para personas con una amputación. Si no es tu caso, no las apliques tal cual: busca una variante o pregunta a tu profesional sanitario.»
- **No se implementa en esta fase.**

## 6. Incidencias sin resolver por falta de evidencia

1. `banda-curl-sentado`: en qué posición se mantienen los 5 segundos. Ni el texto ni las fotos lo precisan.
2. `estiramiento-gemelo-sentado`: si el talón sigue en el suelo. La ilustración de Age UK no se ha revisado en esta fase.
3. `estiramiento-gemelo-pared`: si las manos cargan peso. La foto muestra una inclinación leve y no es concluyente.
4. `equilibrio-una-pierna-pared`: el ángulo exacto de la rodilla en la foto. Está en torno a 90°, en el límite.
5. `sentarse-levantarse`: el ángulo de rodilla en las fotos es aproximado (unos 90 a 100°). No es una medición.
6. Ilustraciones de Leicester: no se han revisado. El texto bastó para todos sus ejercicios, salvo para confirmar la altura exacta de los brazos en el estiramiento lateral, que el texto ya fija («overhead»).

## 7. Decisiones que requieren aprobación

- **D4. Manos que solo sirven de apoyo** (silla, pared). Afecta a 7 ejercicios de estos lotes: `marcha-sentado-sujetandose`, `mini-sentadillas`, `elevacion-talones-apoyo`, `elevacion-lateral-pierna`, `extension-pierna-atras`, `equilibrio-una-pierna-pared` y `estiramiento-gemelo-pared`. En el catálogo completo hay 50 ejercicios de pie, y 43 mencionan silla, pared o apoyo en sus instrucciones. Es un recuento aproximado por búsqueda de texto: esos ejercicios no se han auditado.
  - **A:** las manos de apoyo no cuentan; se documenta «apoya una o las dos manos».
    - *A favor:* coincide con el caso de referencia del §7.
    - *Consecuencia:* quien solo usa un brazo puede hacer los ejercicios de pie con apoyo.
  - **B:** se marcan siempre.
    - *A favor:* más literal.
    - *Consecuencia:* la persona con un solo brazo pierde todos los ejercicios de pie con apoyo, aunque puede apoyarse con una mano. Además contradice el caso de referencia del §7, que habría que reescribir.
  - **Recomendación:** A.
- **D5 (nueva). Manos que solo descansan** (cadera, muslos, rodilla). Afecta a `marcha-sentado-manos-cadera`, `circulos-hombros-sentado`, `estiramiento-gemelo-sentado` y `tobillos-punta-talon-sentado`.
  - **A:** no cuentan. **B:** se marcan.
  - **Recomendación:** A. Las manos no hacen nada en el ejercicio y la instrucción puede decir «apoya las manos donde te resulte cómodo».
- **D6 (nueva). `sentarse-levantarse`: inclinación del tronco y flexión de cadera.**
  - La foto B del NHS muestra una inclinación marcada hacia delante.
  - Según las definiciones del §4, `inclinacion_tronco` y `flexion_amplia_cadera` serían TRUE.
  - El caso de referencia del §7 solo marca `sentarse_levantarse`.
  - Opciones:
    - (a) Marcarlas según la evidencia y actualizar el caso de referencia del §7.
    - (b) Mantener el caso de referencia y documentar que la inclinación necesaria para levantarse no cuenta.
  - **Recomendación:** (a). La evidencia visual es clara y el criterio conservador apunta en esa dirección.
- **D7 (nueva). Rodilla en dos casos límite.**
  - **`mini-sentadillas`:** hoy TRUE por conservadurismo; la foto muestra poca flexión.
    - Opción 1: mantener TRUE.
    - Opción 2: añadir la adaptación documentada «dobla un poco las rodillas», respaldada por la foto, y pasar a FALSE.
  - **`equilibrio-una-pierna-pared`:** hoy FALSE; la foto muestra unos 90°.
    - Opción: TRUE por conservadurismo. Es la recomendación.
- **D8 (nueva). `estiramiento-gemelo-pared`, `peso_en_manos`:**
  - (1) Mantener FALSE y añadir la adaptación «apoya las manos solo para no perder el equilibrio, sin echar el peso sobre ellas».
  - (2) Pasar a TRUE por conservadurismo.
  - **Recomendación:** (1). La fuente dice «for stability», la foto muestra una inclinación leve, y la adaptación lo deja explícito.
- **D9 (nueva). Derivados para usar un solo brazo:** aprobar o no los propuestos en el apartado 4, incluido el criterio para `giro-tronco-sentado-un-brazo`, que no tiene fuente propia.
- **D10 (nueva). Esquema e interfaz de procedencia:** aprobar el campo `poblacion_fuente` y el mensaje del apartado 5.
- **D11 (nueva). Rótulo «usar los dos brazos a la vez»:** cambiarlo a «usar los dos brazos».

## 8. Estado recomendado por ejercicio (lotes 1 a 5, 34 ejercicios)

| Grupo | Ejercicios |
|---|---|
| **Listo para aprobación documental ya** | `estiramiento-tobillo-sentado`, `elevar-rodar-hombros-sentado`, `pulgar-dedos`, `activacion-sentado`, `banda-remo-sentado`, `inclinacion-lateral-de-pie` |
| **Listo tras aplicar cambios ya aprobados** (DOC, ADAPT o EXIG-OK, sin decisiones pendientes) | `estiramiento-pecho-sentado`, `giro-tronco-sentado`, `inclinacion-lateral-brazo-arriba`, `inclinacion-lateral-sentado`, `estiramiento-isquiotibiales-sentado`, `curl-biceps-sentado`, `toalla-separar-sentado`, `boxeo-sentado`, `boxeo-circulos-alto`, `boxeo-circulos-pecho`, `arquear-espalda-sentado`, `movilidad-lumbar-sentado`, `abrir-cerrar-manos`, `banda-curl-sentado`, `elevacion-talones-sin-apoyo`, `flexiones-pared` |
| **Pendiente de la D4** | `marcha-sentado-sujetandose`, `mini-sentadillas` (también D7), `elevacion-talones-apoyo`, `elevacion-lateral-pierna`, `extension-pierna-atras`, `equilibrio-una-pierna-pared` (también D7), `estiramiento-gemelo-pared` (también D8) |
| **Pendiente de la D5** | `marcha-sentado-manos-cadera`, `circulos-hombros-sentado`, `estiramiento-gemelo-sentado`, `tobillos-punta-talon-sentado` |
| **Pendiente de la D6** | `sentarse-levantarse` |

Ninguno pasa a `basado_en_fuente_publica` sin tu revisión personal y tus datos en `revisado_por` y `fecha_revision` (§7.6 y skill, §9).

## 9. Validaciones tras aprobar los cambios

1. `node scripts/validar-catalogo.mjs`: estructura, listas cerradas y coherencia entre posición y exigencias.
2. Si cambian fichas de ilustración: `npm run ilustraciones` y revisión visual de las tres ilustraciones afectadas (pecho, curl con banda y apoyo a una pierna).
3. `npm run version-sw`, porque cambian archivos de `public/`.
4. `npm test`:
   - los tests del motor, incluida la propiedad de seguridad con 400 perfiles;
   - los de coherencia entre ilustración y material;
   - los de la PWA.
5. Si se aprueban derivados: añadir sus fichas y verificar que comparten familia con el original (`motor.js:91`).
6. Si se aprueba D10: nuevo test del validador para `poblacion_fuente` y comprobación visual del detalle.
7. Comprobación en el navegador del detalle de un ejercicio de Leicester.

En esta fase no se ha ejecutado ninguna de estas validaciones, porque no se ha cambiado nada.
