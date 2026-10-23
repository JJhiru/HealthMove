# Plan de cambios del catálogo: folleto de Leicester (11 ejercicios)

- **Estado:** plan propuesto, **no aprobado**. No se ha modificado `public/data/catalogo.json`.
- **Decisiones en que se basa:**
  - `registro.md`, 2026-10-18, P1: cada fila según su fuente, sin rellenar por defecto.
  - R8.1: `especifica_de` solo con la población declarada; las generalizaciones van a `adaptaciones`.
  - DG-3 (R3.1-R3.5).
  - Protocolo §5.1: rellenar una laguna de la fuente es una adaptación.
- **Requisito antes de aplicarlo:** los lotes 2 a 4 son anteriores al protocolo 1.0 y deben revisarse con él antes de aplicar cambios al catálogo (cabecera del protocolo).
  - Este plan cubre la procedencia y la fidelidad del texto.
  - No sustituye la tabla de las 16 exigencias que exige R3.3 para cada versión adaptada. Para aplicarlo hace falta, además, aprobar cada cambio concreto (principio 1).
- **Etiquetas:** el plan no toca ninguna.

## Fuente consultada

| Dato | Valor |
|---|---|
| Documento | Specialist Mobility Centre, Leicester, «Seated Exercises – Information for Patients» |
| URL (la del catálogo) | `https://www.csp.org.uk/system/files/documents/2018-09/leicester_seated_exercise_booklet_0.pdf` |
| Consulta | 2026-10-18. PDF de 5 páginas, modificado el 2018-09-13 |
| SHA-256 | `f9e114cc95e655363a21afb2740712924b3fba7d96a7393b2b238111a54f8907` |
| Revisión | Texto extraído y páginas 2 a 4 del PDF renderizadas como imagen, porque están a dos columnas (R7.9) |
| Correspondencia de páginas | Página 2 del PDF = páginas impresas 2-3 (ejercicios 1 a 3). Página 3 = impresas 4-5 (4 a 7). Página 4 = impresas 6-7 (8 a 11). La página 5 solo tiene los datos de contacto |
| Licencia | El PDF no indica ninguna |

**Declaración de población** (página impresa 2, introducción común, evidencia D, texto): «These exercises are designed to allow you to exercise and keep your joints moving and strong whilst you maybe using a wheelchair. They can all be done in sitting in either a wheelchair, normal chair or whilst sitting on the edge of the bed».
- Respalda «usuarios de silla de ruedas» para cada ejercicio **de este folleto**. Por eso, a cada uno se le comprueba abajo su ubicación.
- La propia fuente no los limita a ese grupo (R8.3).

**Lo que no está en el catálogo:** el ejercicio 5, «Wheelchair push ups» (página impresa 4). No se propone incorporarlo.

## Resumen

| # en la fuente | `id` | Ubicación | `especifica_de` propuesto | Diferencias que hay que resolver |
|---|---|---|---|---|
| 1 | `marcha-sentado-manos-cadera` | p. 2 | «usuarios de silla de ruedas» | 2 adaptaciones sin documentar |
| 2 | `inclinacion-lateral-brazo-arriba` | p. 3 | «usuarios de silla de ruedas» | 1 adaptación sin documentar, 1 aclaración |
| 3 | `estiramiento-isquiotibiales-sentado` | p. 3 | «usuarios de silla de ruedas» | 3 adaptaciones sin documentar (una es la generalización de «la pierna que queda»), 1 aclaración de dosis |
| 4 | `circulos-hombros-sentado` | p. 4 | «usuarios de silla de ruedas» | Ninguna |
| 6 | `curl-biceps-sentado` | p. 5 | «usuarios de silla de ruedas» | 1 aclaración menor |
| 7 | `toalla-separar-sentado` | p. 5 | «usuarios de silla de ruedas» | 1 aclaración de dosis |
| 8 | `boxeo-sentado` | p. 6 | «usuarios de silla de ruedas» | Ninguna (la adaptación ya está documentada) |
| 9 | `boxeo-circulos-alto` | p. 6 | «usuarios de silla de ruedas» | 1 aclaración de dosis |
| 9, «HINT!» | `boxeo-circulos-pecho` | p. 6 | «usuarios de silla de ruedas» | 1 aclaración de dosis |
| 10 | `arquear-espalda-sentado` | p. 7 | «usuarios de silla de ruedas» | 1 adaptación sin documentar (laguna de repeticiones) |
| 11 | `movilidad-lumbar-sentado` | p. 7 | «usuarios de silla de ruedas» | Ninguna |

**Leyenda:**
- **Aclaración:** corregir HealthMove hacia lo que la fuente dice con evidencia D (protocolo 2.2).
- **Adaptación:** mantener la diferencia y documentarla en `adaptaciones`, que el usuario lee, con un texto redactado para él (R3.2).

## Detalle por ejercicio

### 1. `marcha-sentado-manos-cadera` (fuente: 1, «Chair Marching», p. 2)

- **Texto actual:** sentado con las manos en la cadera y sin recostarse; marcha levantando cada pie un poco del suelo; espalda recta; «Después de 10 a 20 pasos, descansa». Dosis: «10 a 20 pasos, descansa y repite». `adaptaciones`: vacío.
- **Evidencia:**
  - «Sit up tall on a chair or the bed with your hands resting on your hips»;
  - «March on the spot by lifting each leg slightly off the bed/chair»;
  - «After 10 to 20 stepping movements rest and then repeat»;
  - «To make this more difficult try to add in your arms moving forwards and backwards…».

| Detalle | Clase | Propuesta |
|---|---|---|
| Postura, manos, secuencia y dosis | C1 | Sin cambio |
| La fuente permite la cama; HealthMove, solo la silla | C3 → adaptación | `adaptaciones`: «La fuente también permite hacerlo sentado en la cama; aquí se hace en una silla.» |
| Se omite la progresión con los brazos | C3 → adaptación | `adaptaciones`: «Se omite la versión más difícil de la fuente, que añade el movimiento de los brazos.» Sigue el mismo criterio que `boxeo-sentado` |
| «Lifting each leg slightly off the bed/chair» frente a «levantando cada pie solo un poco del suelo» | I | Parece el mismo movimiento visto desde otro punto. Se anota, sin cambio |

### 2. `inclinacion-lateral-brazo-arriba` (fuente: 2, «Side stretch», p. 3)

- **Texto actual:** brazo izquierdo arriba, mano derecha en la cadera; inclinación a la derecha con los dos glúteos apoyados; vuelta y cambio de lado. Dosis: «3 a 5 veces hacia cada lado».
- **Evidencia:**
  - «place you right hand on your hip or on the arm of the chair»;
  - «Lean over carefully to the right. Pull up out of your waist, making sure both buttocks stay firmly on the seat»;
  - «Repeat 3- 5 times on each side»;
  - motivo: «these muscles get tight quickly when you have had an amputation».

| Detalle | Clase | Propuesta |
|---|---|---|
| Postura, secuencia, lados y dosis | C1 | Sin cambio |
| La fuente permite apoyar la mano en el reposabrazos; HealthMove, solo en la cadera | C3 → adaptación | `adaptaciones`: «La fuente también permite apoyar la mano en el reposabrazos; aquí se apoya en la cadera.» No se propone volver al reposabrazos: introduciría un apoyo que habría que evaluar para `agarre` y `peso_en_manos` (R3.5) |
| Falta «Pull up out of your waist» | C3 → aclaración (D) | Paso 3: «Inclínate con cuidado hacia la derecha, estirándote hacia arriba desde la cintura y manteniendo los dos glúteos apoyados en el asiento.» |
| Amputación | — | Es un indicio (I), no una población: no se rellena (P1) |

### 3. `estiramiento-isquiotibiales-sentado` (fuente: 3, «Hamstring stretch», p. 3)

- **Texto actual:** adelantarse en el asiento; «Estira una pierna hacia delante sin bloquear la rodilla, con el talón en el suelo»; inclinarse desde la cadera con la espalda recta; «Cambia de pierna». Dosis: «Mantén de 10 a 15 segundos. 3 veces con cada pierna». `adaptaciones`: vacío.
- **Evidencia:**
  - «Lift your bottom slightly forwards in the chair»;
  - «Stretch your remaining leg out in front of you without locking your knee. Either rest your heel on the floor or on a small stool or step if one is available»;
  - «Lean forward from the hips, keeping your spine straight, not rounded»;
  - «Hold the position for 10-15 when you feel a comfortable stretch behind your thigh. Repeat 3 -5 times on your remaining leg»;
  - en la foto, una persona en silla de ruedas con una sola pierna extendida (D, imagen).

| Detalle | Clase | Propuesta |
|---|---|---|
| Postura, rodilla sin bloquear, inclinación desde la cadera | C1 | Sin cambio |
| La fuente está escrita para la pierna que queda tras una amputación; HealthMove lo hace con cada pierna | C3 → adaptación (R8.1) | `adaptaciones`: «En la fuente, este estiramiento está escrito para la pierna que queda tras una amputación; aquí se hace con cada pierna.» Antes de aprobarlo, tabla de las 16 exigencias de la versión adaptada (R3.3) |
| La fuente dice «10-15» sin unidad; HealthMove, «segundos» | C3 → adaptación (laguna, §5.1) | `adaptaciones`: «La fuente indica mantener la posición de 10 a 15 sin decir la unidad; aquí se entiende como segundos.» |
| La fuente permite apoyar el talón en un taburete o escalón; HealthMove, solo en el suelo | C3 → adaptación | `adaptaciones`: «La fuente también permite apoyar el talón en un taburete o escalón bajo; aquí se apoya en el suelo.» No se propone volver a la fuente: añadiría un recurso que el catálogo no tiene |
| La fuente: de 3 a 5 repeticiones; HealthMove: 3 | C3 → aclaración (D) | `dosis`: «Mantén de 10 a 15 segundos. De 3 a 5 veces con cada pierna.» |

### 4. `circulos-hombros-sentado` (fuente: 4, «Shoulder circles backwards», p. 4)

- **Evidencia:** «Sit comfortably up tall. Do not lean on the back of the chair»; «Keep your hands and arms relaxed on your thighs»; «Slowly roll your shoulders backwards in a circle»; «Repeat 10 times».
- **Resultado:** C1 en todo; solo cambia `especifica_de`. Las líneas «___ sets» de la fuente se dejan para que las rellene el profesional; HealthMove conserva esa vaguedad (§5.1).

### 6. `curl-biceps-sentado` (fuente: 6, «Bicep curls», p. 5)

- **Evidencia:**
  - «Hold a light weight in one hand. This could be something simple like a drinks bottle»;
  - «Turn your hand so the thumb faces the ceiling»;
  - «Slowly bend your elbow taking the weight towards your shoulder»;
  - «put the weight back on your lap»;
  - «Try to keep your elbow into your side throughout the exercise»;
  - «Repeat 10 times each side».

| Detalle | Clase | Propuesta |
|---|---|---|
| Secuencia y dosis | C1 | Sin cambio |
| «una botella **llena**»: la fuente no dice que esté llena | C3 → aclaración | Paso 1: «…con una botella de bebida u otro peso ligero en una mano.» |

### 7. `toalla-separar-sentado` (fuente: 7, «Arm exercise with a towel», p. 5)

- **Evidencia:**
  - «Hold a towel with both hands»;
  - «Pull upwards with one hand and downwards with the other as if you are trying to pull the towel apart»;
  - «Hold for 5 seconds then relax»;
  - «keep your arms close to your body»;
  - «Repeat 10 times»;
  - «Swap your hands over and repeat the other way»;
  - «2 - 3 sets as able».

| Detalle | Clase | Propuesta |
|---|---|---|
| Secuencia, brazos cerca del cuerpo, 5 s, 10 repeticiones, cambio de manos | C1 | Sin cambio. «Siéntate con la espalda recta» lo cubre la introducción («sit up tall») |
| Falta «2 - 3 sets as able» | C3 → aclaración (D) | `dosis`: «10 veces con cada posición de manos. De 2 a 3 series, según puedas.» |

### 8. `boxeo-sentado` (fuente: 8, «Boxing», p. 6)

- **Evidencia:** sentado sin apoyarse; puños delante del pecho; «Straighten one arm out in front of you keeping your fist closed»; alternar «as if you are slowly boxing»; «Repeat for 10 – 20 reps and then relax. Do some more sets if you can»; «HINT!» con pesos ligeros.
- **Resultado:** C1. La adaptación ya está documentada («Se omite la variante con pesos ligeros de la fuente»). Solo cambia `especifica_de`.

### 9. `boxeo-circulos-alto` (fuente: 9, «Boxing Speedball», p. 6)

- **Evidencia:** «Make two fists lift them up level with your nose»; «circling your fists around each other forwards whilst you count to 20»; «Then circle your fists backwards… whilst you count to 20»; «Rest. Repeat if able».

| Detalle | Clase | Propuesta |
|---|---|---|
| Instrucciones | C1 | Sin cambio («mientras cuentas hasta 20» ya está en los pasos) |
| `dosis` «20 hacia delante y 20 hacia atrás» puede leerse como 20 círculos; la fuente cuenta tiempo. Además, falta «Repeat if able» | C3 → aclaración (D) | `dosis`: «Mientras cuentas hasta 20 hacia delante y hasta 20 hacia atrás. Descansa y repite si puedes.» |

### 9, «HINT!». `boxeo-circulos-pecho` (variante de `boxeo-circulos-alto`, p. 6)

- **Evidencia:** «HINT! To make this exercise easier if your shoulders hurt just lift your hands level with your chest».

| Detalle | Clase | Propuesta |
|---|---|---|
| Altura del pecho | C1 | Sin cambio |
| `dosis` | C3 → aclaración (D) | La misma que en `boxeo-circulos-alto` |
| La fuente presenta la variante «if your shoulders hurt» | — | No se traslada: sería una indicación sobre síntomas, que necesitaría validación profesional (§8.4). No afecta a las etiquetas (DG-6) |

### 10. `arquear-espalda-sentado` (fuente: 10, «Back stretches», p. 7)

- **Evidencia:** «Sit with your weight evenly distributed on your sitbones»; «Place hands on your lower back or hips»; «arching your back and squeeze your shoulder blades and elbows towards each other»; «Hold for count of 5 then relax»; «___ sets». La fuente no da repeticiones.

| Detalle | Clase | Propuesta |
|---|---|---|
| Postura y secuencia | C1 | Sin cambio. La adaptación de las manos ya está documentada |
| `dosis` «5 veces»: la fuente no indica repeticiones | C3 → adaptación (laguna, §5.1) | `adaptaciones`: «La fuente no indica cuántas veces repetirlo; aquí se proponen 5.» No se puede conservar la vaguedad: `dosis` necesita un valor |

### 11. `movilidad-lumbar-sentado` (fuente: 11, «Lower back mobility», p. 7)

- **Evidencia:** «sit slightly forwards in the chair so your back is not supported»; «Sit up as tall as you can so you arch your lower back»; «Then slump as much as you can so you flatten you back towards the back of the chair»; «Repeat 5 times. Rest repeat again if you can».
- **Resultado:** C1. Solo cambia `especifica_de`.

## Lo que queda pendiente, y de quién

| Pendiente | Quién lo decide | Bloquea |
|---|---|---|
| Revisar estos 11 ejercicios con el protocolo 1.0 (16 exigencias, D/I/N, regla), incluida la tabla R3.3 de la versión adaptada de los isquiotibiales | Auditor, siguiendo la skill | La aplicación de este plan |
| Aprobar cada cambio concreto de este plan | Desarrollador | La edición del catálogo |
| Después de aplicar: `node scripts/validar-catalogo.mjs`, `npm run version-sw` (cambia `public/`) y `npm test` (protocolo, 12, paso 10) | Auditor | — |
