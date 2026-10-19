# Evidencia de las fuentes originales para Q1, Q2 y Q3 (DS-22, DS-25, DS-47, DS-48 a DS-50, DS-71, DS-73, DS-93, DS-94, DS-96, C-3)

> **Análisis de Claude, no de DeepSeek.** Es evidencia para las decisiones D2 (Q2) y D3 (Q1), **no** una decisión ni una propuesta de cambio de etiquetas. No se ha modificado el catálogo.
>
> **Fecha:** 2026-10-19, 14:00 (-05). Descargas con `curl` a un directorio temporal, sin ejecutar nada de ellas. El texto se extrajo con `pdftotext -layout` (PDF) o quitando las etiquetas HTML. Las citas son literales del texto extraído. El SHA-256 es del archivo descargado: si la fuente cambia, cambia el hash.
>
> **Alcance:** los 17 ejercicios que C1 dejó pendientes de fuente (DS-93: los 9 de pie con `agarre: true` sin prensión explícita; DS-94: los 4 sin apoyo; DS-71/DS-25: los 4 con «sujétate con las dos manos» y `ambos_brazos: false`), más `sentarse-levantarse` (DS-22), que comparte fuente.

## 1. Fuentes consultadas

| Clave | URL (la de `fuente.url`) | Respuesta | SHA-256 de la descarga |
|---|---|---|---|
| NHS Strength | https://www.nhs.uk/live-well/exercise/strength-and-flexibility-exercises/strength-exercises/ | 200, HTML | `83285c87…88a9` |
| Sanidad | https://estilosdevidasaludable.sanidad.gob.es/seguridad/pdf/Seguridad_Lesiones2.pdf | 200, PDF | `5b39a367…c2ea` |
| Ealing (Later Life Training) | https://www.ealing.gov.uk/download/downloads/id/17772/strength_and_balance_exercise_booklet.pdf | 200, PDF | `9e53985c…d2ac` |
| Arthritis UK | https://www.arthritis-uk.org/…/exercises-for-the-shoulders/ | 200, HTML | `c34b815d…756b` |
| WWL | https://www.wwl.nhs.uk/pdfreader/accessiblePDF/cnv-wwl-68ca8bcea9f618.75465388 | 200, PDF | `d425a254…5e34` |
| North Cheshire | https://northcheshireandmersey.nhs.uk/media/luzaxp34/shoulder-range-of-motion-exercises-patient-advice-sheet.pdf | 200, PDF | `6058f5ed…1086` |
| Vivifrail | https://munideporte.com/imagenes/documentacion/ficheros/0134414D.pdf | 200, PDF | `ba4646b5…e197` |
| South Tees | https://www.southtees.nhs.uk/resources/cardiac-rehabilitation-exercise-programme | 200, HTML | `6e643097…bc30` |
| Royal Berkshire | https://www.royalberkshire.nhs.uk/media/m2yl2u1z/pulmonary-rehabilitation-exercises_mar25.pdf | 200, PDF | `d2f86ee2…c093` |
| CDC/Tufts | https://stacks.cdc.gov/view/cdc/11447/cdc_11447_DS1.pdf | **403** | — (no verificable) |
| CSP | https://www.csp.org.uk/…/staying-strong-you-age/strength | 200, HTML | `59b2d3e6…bd36` |
| NHS Fife | https://www.nhsfife.org/media/33404/easy-read-strength-and-balance.pdf | 200, PDF | `822ff298…ce10` |
| Wolverhampton | https://royalwolverhampton.nhs.uk/wp-content/uploads/2025/06/Stay-Strong-Stay-Steady.pdf | 200, PDF | `96a56c1c…61de` |

Nota: hashes completos en §5.

## 2. Q2 · los 9 de pie con `agarre: true` sin prensión explícita en la instrucción (DS-93)

Categorías de la decisión del usuario sobre Q2, aplicadas **solo al verbo de la fuente**: contacto, apoyo para estabilidad, soporte de carga, prensión, obligatorio u opcional. No son etiquetas.

| Ejercicio (instrucción de HealthMove) | Fuente, apartado | Texto de la fuente (literal) | Lo que dice el verbo de la fuente |
|---|---|---|---|
| `mini-sentadillas` («las manos en el respaldo») | NHS Strength, «Mini-squats» | «Rest your hands on the back of the chair for stability» | Apoyo para estabilidad (*rest*); sin prensión |
| `elevacion-talones-apoyo` («las manos en el respaldo») | NHS Strength, «Calf raises» | «Rest your hands on the back of a chair for stability.» … «To make this more difficult, perform the exercise without support.» | Apoyo para estabilidad; **opcional** (la versión sin apoyo es la progresión) |
| `elevacion-lateral-pierna` («las manos en el respaldo») | NHS Strength, «Sideways leg lift» | «Rest your hands on the back of a chair for stability.» | Apoyo para estabilidad |
| `extension-pierna-atras` («las manos en el respaldo») | NHS Strength, «Leg extension» | «Rest your hands on the back of a chair for stability.» | Apoyo para estabilidad |
| `flexion-alterna-piernas-de-pie` («apóyate en ella») | Sanidad, «Flexionar de forma alterna las piernas estando de pie» | «Si se siente más seguro, sitúese de pie apoyado al lado de una mesa, silla firme o barandilla.» | Apoyo **opcional** en la fuente. HealthMove lo hace obligatorio y lo documenta en `adaptaciones` («La fuente permite hacerlo sin apoyo; aquí se indica siempre con apoyo»), coherente con DS-45 |
| `giro-tronco-pie` («una mano en el respaldo») | Ealing, «Trunk Movements» | «Fold the arms in front of the chest or place one hand on the chair» | Contacto o apoyo de una mano (*place*), **alternativo** a cruzar los brazos; sin prensión |
| `pendulo-hombro` («apoya una mano en el respaldo») | Arthritis UK, «Shoulder circle» | «Stand with one hand resting on a chair.» | Apoyo (*resting*); sin prensión. La relación entre el nombre «péndulo» y «Shoulder circle» la comprueba la auditoría del ejercicio |
| `remo-inclinado-botella` («Apoya una mano en el respaldo») | WWL, «Bent over Rows» | «Stand, leaning on a table or chair with one hand.» | Apoyo, posiblemente con carga (*leaning*); sin prensión explícita |
| `deslizar-toalla-pared` («una toalla bajo la mano») | North Cheshire, «Wall Slides with Towel or Equivalent Exercise» | «Stand facing a wall with a towel in your hand, held at shoulder height.» | «in your hand… held»: el texto no aclara si la mano se cierra sobre la toalla. **Indeterminado** |

**Lectura de Claude:**
- En 8 de los 9, el verbo de la fuente es *rest*, *place*, *leaning* o «apoyado»: apoyo o contacto, nunca *hold* ni «sujétese». En `deslizar-toalla-pared` queda indeterminado.
- Hoy los 9 tienen `agarre: true`. Según R7.4 («que una mano toque un objeto no permite inferir un agarre») y la decisión del usuario sobre Q2 («tocar una superficie o apoyarse ligeramente, sin prensión, no equivale a agarrar»), esa marca solo se sostendría como conservadora (R2.1), y ninguno lleva la nota `[conservadora]` de R2.4 (DS-03, D4).
- **Qué cambiar, y si se cambia algo, depende de D2.** Esta tabla solo establece qué dice cada fuente.

## 3. Q2 · los 4 sin apoyo (DS-94)

| Ejercicio | Fuente, apartado | Texto de la fuente (literal) | Posición y apoyo en la fuente |
|---|---|---|---|
| `estiramiento-hombro-cruzado` | Vivifrail, «2. Ejercicio de estiramiento de la musculatura de la parte posterior del hombro» | «Coloque la mano en el hombro contrario y mantenga el codo pegado al pecho.» … «Inicio: De pie o sentado.» | De pie o sentado; sin apoyo |
| `estiramiento-triceps` | South Tees, «Arm stretches» | «Bend your arm so that your hand is on your shoulder. Slide your hand over your shoulder towards your shoulder blade.» Regla general de la sección: «If you feel unsteady hold onto a wall or sturdy chair for support.» | Posición no indicada en el ejercicio; apoyo como **contingencia** general (R6.3: no cambia la etiqueta) |
| `estiramiento-pecho-manos-lumbar` | Royal Berkshire, «Chest stretch» | «Stand upright.» «Place your hands on your lower back.» | **De pie**, sin apoyo. (South Tees tiene un ejercicio parecido, «Place your hands on the small of your back», que no es la fuente de este) |
| `manos-espalda-codo-contrario` | CDC/Tufts | — | **No verificable:** la descarga devolvió 403 |

**Lectura de Claude:**
- Las fuentes de 3 de los 4 describen el ejercicio **de pie y sin apoyo**, al menos como una de sus opciones. La cuarta no se pudo descargar.
- Con las manos ocupadas sobre el propio cuerpo, el apoyo externo no es posible durante el estiramiento.
- Si eso hace que `equilibrio_sin_apoyo` deba ser `true` en su versión de pie (o que haya que separar las posiciones, DS-08/D5) es una cuestión de etiquetado que depende de D5 y D2. **No se ha cambiado nada.**

## 4. Q1 · los 4 con «sujétate con las dos manos» y `ambos_brazos: false` (DS-25, DS-71, DS-89, DS-96)

| Ejercicio | Fuente, apartado | Texto de la fuente (literal) | Número de manos en la fuente |
|---|---|---|---|
| `paso-atras-apoyo` | NHS Fife (lectura fácil), «6. Step Backs» | «Stand facing the kitchen worktop» «Hold on with both hands» «Step one foot backwards» | **Las dos** (fiel) |
| `flexion-rodilla-pie-apoyo` | Wolverhampton, «Back of Knee Strengthening» | «Stand up straight facing the kitchen worktop or a sturdy chair, hold on with one or both hands and look ahead» | **Una o las dos** |
| `puntillas-talones-apoyo` | Vivifrail, «3. Ejercicio de equilibrio punta – talón» | «Sitúese de pie. Mantenga el equilibrio apoyando su peso solo sobre las puntas de los pies.» … «Si se siente más seguro, sitúese de pie apoyado en una mesa o barandilla.» | No se indica; el apoyo es **opcional** |
| `elevar-puntas-pies-apoyo` | CSP, «Toe raises» | «Stand tall holding the same support, then raise your toes» (el anterior, «Heel raises»: «holding the back of a sturdy kitchen type chair or kitchen sink») | No se indica |

**Lectura de Claude:**
- **Solo `paso-atras-apoyo` sigue literalmente a su fuente** en «las dos manos». Es el caso puro de Q1: apoyo bilateral y `ambos_brazos: false`.
- En los otros 3, «con las dos manos» **no viene de la fuente**: Wolverhampton admite una mano, y Vivifrail y CSP no dan número. Además, en Vivifrail el apoyo es opcional.
- Ninguno de los 3 tiene `adaptaciones`. Si «las dos manos» es una decisión de HealthMove, sería una adaptación sin documentar (R3.2; DS-96 en su forma general).
- Cómo afecta esto a `ambos_brazos` y a la instrucción depende de D3 (Q1). La decisión Q1 del usuario ya pide mirar «si el apoyo es opcional o si una mano apoya mientras la otra trabaja», que es justo lo que muestran estas citas.

## 4 bis. Q1 · C-3 y DS-48 a DS-50: las dos manos trabajando a la vez fuera del apoyo

No es apoyo, sino trabajo simultáneo de los dos brazos (una botella o un extremo de banda en cada mano). La decisión Q1 y DG-4 («función real») se refieren a ello. Segunda tanda de descargas, el mismo día.

| Ejercicio (instrucción de HealthMove) · `ambos_brazos` | Fuente, apartado | Texto de la fuente (literal) | Lectura |
|---|---|---|---|
| `giro-tronco-sentado` («lleva cada mano al hombro contrario») · `false` | NHS Sitting, «Upper-body twist» | «Sit upright with your feet flat on the floor, cross your arms and reach for your shoulders.» | Fiel. Los brazos se cruzan, pero el esfuerzo es del tronco: es un caso para DG-4, no de apoyo |
| `banda-press-pecho-sentado` · `false` | Worcestershire, «Chest Press» | «hold one end of the band in each hand… push your hands forwards» | Fiel: los dos brazos empujan a la vez |
| `banda-prensa-pierna-sentado` · `false` | Worcestershire, «Leg Press» | «hold an end of the band in each hand. Tuck your fists into the side of your hips» | Fiel: las dos manos sujetan y la pierna trabaja |
| `banda-elevaciones-laterales-sentado` · `false` | Worcestershire, «Side Raises» | «one end of the band in each hand (hands at your side)… raise your arms to the side» | Fiel: los dos brazos se elevan a la vez |
| `banda-empuje-pie-sentado` · `false` | Worcestershire, «Calf Press» | «one end in each hand. Tuck your fists into the side of your hips» | Fiel: las dos manos sujetan y el pie trabaja |
| `banda-sentarse-levantarse` · `false` (DS-48) | Worcestershire, «Sit to Stand» | «middle of the band beneath your feet and one end in each hand» | Fiel: las dos manos sujetan durante el ejercicio |
| `elevaciones-frontales-botella` · `true` (DS-49) | WWL, «Front Raises» | «holding the weight in both hands» | Fiel, coherente con `true` |
| `elevaciones-laterales-botella` · `false` (DS-49) | WWL, «Lateral Raises» | «holding a weight… Lift your arm to the side away from your body» | **La fuente es unilateral** (un peso, un brazo). HealthMove pide «una botella en cada mano y los brazos a los lados», sin `adaptaciones` |
| `press-hombros-botella-pie` · `false` (DS-50) | WWL, «Shoulder Press» | «Hold weights at shoulder height with your elbows pointing to the sides.» | Plural: los dos brazos, sin decir si a la vez o alternando |
| `press-pecho-botella-tumbado` · `false` | Plymouth, «Shoulder Abduction A» | «lift the weights above their chest until their elbows are straight» | Plural: los dos brazos. La correspondencia con el apartado es de Claude y está por confirmar |
| `press-encima-cabeza-sentado` · `false` | Moving Medicine | — | **No localizado** en el texto extraído: puede estar solo en imágenes |

**Lectura de Claude:**
- **En 5 ejercicios con banda la fuente dice literalmente «one end… in each hand»**: el uso simultáneo de las dos manos es fiel, no una adaptación. Con `ambos_brazos: false`, la persona que solo puede usar un brazo los recibe (DS-89 ya lo mostraba para los de pie).
- **Imagen de la página 5 del folleto de Worcestershire** (renderizada con `pdftoppm`, R7.9): en «Chest Press», «Side Raises» y «Bicep Curls» la figura mueve los dos brazos a la vez; en «Leg Press» y «Calf Press» las manos sujetan la banda junto a la cadera mientras trabaja la pierna. En «Sit to Stand» la figura se inclina claramente hacia delante, lo que es pertinente para Q3 (§4 ter).
- **En `elevaciones-laterales-botella` es al revés:** la fuente es unilateral y HealthMove la hizo bilateral sin documentarlo (R3.2).
- Ninguna de las dos cosas se corrige aquí: dependen de D3 (Q1) y de un plan de cambios aprobado (R2.6).

## 4 ter. Q3 · la familia `sentarse-levantarse` (DS-12, DS-47, DS-73)

**Decisión del usuario sobre Q3**, literal, recogida en `fases/fase-01-protocolo.md` («confirmada, no incorporada»; incorporarla es D11): «Si la fuente no proporciona un ángulo exacto, debe conservarse el término original y no inventarse un umbral numérico. Si la fuente proporciona un ángulo exacto, puede utilizarse en la explicación con atribución a la fuente.»

La especificación §4, fila 15, dice: `inclinacion_tronco` es «inclinar la espalda hacia delante o hacia un lado, o arquearla hacia atrás, más allá de una inclinación leve».

| Ejercicio · `inclinacion_tronco` | Fuente, apartado | Texto de la fuente (literal) | Instrucción de HealthMove |
|---|---|---|---|
| `sentarse-levantarse` · `false` (nota: «La inclinación es leve: no es inclinacion_tronco») | NHS Strength, «Sit-to-stand» | «Sit on the edge of the chair, feet hip-width apart. Lean slightly forwards.» | «el tronco un poco hacia delante» |
| `sentarse-levantarse-sin-manos` · `true` (sin nota) | Ealing (Later Life Training), «Sit To Stand No Hands» | «Lean forwards slightly» | «Inclínate un poco hacia delante» |
| `banda-sentarse-levantarse` · `true` | Worcestershire, «Sit to Stand» | «lean forwards and begin to stand up» | «Inclínate hacia delante» |

**Lectura de Claude:**
- **Ninguna de las tres fuentes da un ángulo.** Según la decisión Q3, se conserva el término original.
- **La base y la variante «sin manos» usan el mismo término en la fuente** («slightly») y la misma redacción en HealthMove («un poco»), pero tienen etiquetas opuestas. La diferencia no se explica por el texto de la fuente.
  - Puede venir de las imágenes: el protocolo, en Q3, menciona que la foto del paso B del NHS muestra más inclinación. No se han examinado las imágenes.
  - O puede ser un `true` conservador sin su nota `[conservadora]` (R2.4).
- **La de banda no dice «slightly»**: con el término original, su `true` es coherente con la definición de §4.
- **Pendiente:** D11 (incorporar Q3) y, después, un plan de cambios para la familia, con las imágenes examinadas (R7.x). Aquí no se cambia nada.

## 4 quater. DS-27 · `equilibrio_sin_apoyo: true` con apoyo «opcional o de contingencia»

DS-27 propone que estos 11 ejercicios podrían ser falsos negativos si la fuente permite el apoyo. Qué dicen las fuentes:

| Ejercicio | Fuente, apartado | Texto de la fuente (literal) | ¿Permite la fuente apoyarse durante el ejercicio? |
|---|---|---|---|
| `sentarse-levantarse` | NHS Strength, «Sit-to-stand» | «Stand up slowly using your legs, not arms.» … «slowly sit down, using your hands or arms just to guide you if possible» | Al levantarse, no; al sentarse, las manos solo «guían». Ambiguo (DS-22) |
| `elevacion-talones-sin-apoyo` | NHS Strength, «Calf raises» | «To make this more difficult, perform the exercise without support.» | No: es la versión sin apoyo |
| `de-pie-mano-preparada` | Mersey and West Lancashire, «Standing unsupported feet apart, eyes open» | «Hovering your hand over a sturdy surface, widen your feet and stand unsupported for 1 minute» | No: «unsupported». La mano preparada es una contingencia (R6.3) |
| `arquear-espalda-pie` | Ealing, «Back Extension» | «Stand tall with your feet hip width apart • Place your hands onto your bottom • Gently arch your back» | No: las manos están ocupadas. «Una silla firme cerca» es un consejo preventivo (DG-6, clase 2) |
| `sentadilla-sin-apoyo` | Ealing, «Knee Bends No Support» | (título) | No |
| `sentarse-levantarse-sin-manos` | Ealing, «Sit To Stand No Hands» | «with your hands on your thighs or folded across your chest» | No |
| `banda-sentarse-levantarse` | Worcestershire, «Sit to Stand» | «one end in each hand» | No: las dos manos sujetan la banda |
| `elevaciones-frontales-botella` | WWL, «Front Raises» | «holding the weight in both hands» | No: manos ocupadas; WWL no menciona apoyo en este ejercicio |
| `elevaciones-laterales-botella` | WWL, «Lateral Raises» | «Stand tall, with arms by your sides, holding a weight» | La fuente es unilateral (§4 bis): la otra mano quedaría libre. No menciona apoyo |
| `press-hombros-botella-pie` | WWL, «Shoulder Press» | «Stand tall. Hold weights at shoulder height» | No: manos ocupadas |
| `banda-elevar-brazos-pie` | South Tees (`?p=32161`) | «Open a loop of resistance band until the arms are parallel (Fig A).» | **No verificable en el texto:** no dice la posición ni el apoyo (puede estar en las figuras) |

**Lectura de Claude:**
- En **9 de 11** la fuente describe la ejecución **sin** apoyo, o con las manos ocupadas durante todo el ejercicio. El apoyo que aparece en HealthMove o en la fuente es una contingencia (R6.3) o un consejo preventivo (DG-6, clase 2), que no cambian la etiqueta. **La premisa de DS-27 no se confirma en esos 9.**
- Quedan **2 abiertos**: `sentarse-levantarse` («just to guide you», ambiguo y ya en DS-22) y `banda-elevar-brazos-pie` (no verificable en el texto).
- `elevaciones-laterales-botella`: si se siguiera la fuente (unilateral), la mano libre podría apoyarse. Es la misma cuestión de §4 bis, que depende de D3.

## 5. Otros datos de las mismas fuentes

- **DS-22 (`sentarse-levantarse`, `equilibrio_sin_apoyo: true`)**, NHS Strength, «Sit-to-stand»: «Stand up slowly using your legs, not arms.» … «Stand upright and then slowly sit down, using your hands or arms just to guide you if possible.» La fuente pide no usar los brazos al levantarse; las manos, «solo como guía» al sentarse. No se valora aquí si eso cambia `equilibrio_sin_apoyo`: depende de D2/Q2 (apoyo opcional) y de la auditoría del ejercicio.
- **Hashes completos (SHA-256 de cada descarga):**

```
83285c8724594258bab8243498ce82146aa06b75feb09fcdc750d20e068d88a9  nhs-strength
5b39a3679bc1e098d18ef1d3f414faeb3a79c6cd41b6ffeabb4cd310ff5ac2ea  sanidad-caidas
9e53985cb1091badb0369f48f822ad5a69ab832b0aa443ea77382021ec6bd2ac  ealing
c34b815d34d2a3f85a93c7be06159819a5ea4fd67b3a35d955116a654f70756b  arthritis-hombro
d425a25453cd5b5287bb62d3a4314d250f379318a5d8f0b5cb09c5b2fc4c5e34  wwl-hombro3
6058f5eddb0601dafcf12876492127f5264eec982c9e68f55dbc7553597a1086  ncm-hombro
ba4646b5a8b40c773e90ad6d1a9e729541cce324e6f099ef5429594d5884e197  vivifrail
6e64309764d462af3c217ff2329ad515d3556ac843cc3efc7bf6c2c307c3bc30  southtees
d2f86ee28d94b80f4f059c771e64fda34e55587ae281ed941a151edbf77fc093  royalberkshire-pulm
59b2d3e6d77764ced15d811c8eae41b7b46acd5343333769baba01d6b618bd36  csp-strength
822ff298da8af8c9fa85734d352d93ac284c513f21dd5261e38a7a11dd80ce10  nhsfife-easyread
96a56c1cdc93f065d7481e7d4c9ed213e825c502bac0993b5535cc89700d61de  wolverhampton
15afb9ee242df5d995ad71200ce25940c47ddafbc481b02707be3bc4faea8439  nhs-sitting
6483c809f722e57094c8346ebd37e8353449b36d47747e969723c9997533b0a8  movingmedicine
555fad5c3edd881ac00ccd969406049108bf742c82ea56f3d904851f7c75713c  worcestershire-banda
8a7b4bdf5e54eae55107f3a394a5f951ae81620c896e96218bcf9dfe6cde292c  plymouth-cama
f9e114cc95e655363a21afb2740712924b3fba7d96a7393b2b238111a54f8907  leicester
32ccd13cdd14d01c08727fc5a6fae8040f8333743b324e6f484338f1b5fee5f5  ageuk-devon
036aeee7032bf690b7b8762bda193ee30b31378a78a330eb73af64efa46ec7b0  mstrust-core
79421b7d81ce9785842c232f1e01bc235e0fc489d902e33cfb4cbb91f8c13d1b  grampian
77ae432cff4acce48caadc2153b2ca63c0b151c3612a5b1ef0bfcc39c887e10f  madrid-rodilla
a39de9b6aabec7b005da111a75b3a4e98bbfcce6e751db83d76cbcbbd617d373  fife-espalda
131efa9cf64311becaaf014a857db2e7a86b6353d75993803b4057923537c79a  papworth
5c8a7714ce7f80f45ef03324e466bc29318198995e25a313494f8af50a4037c4  husc-cama
ea97f0a203f4cc29116be56327af9512073b2e38b0de40b5e9350a9e2e661b8b  cuh-espalda
de719b8e696defef2d766d12394d730dc28d541d9ae1e875283c84f822de83d5  rbft-cama
d9d7d2ed32fef89ff7e5ab9599e83fb3613396fb1430aa358b0e898bb4550438  ruh-cama
92c65bb8377823c9a2aae98f55e6920a63766f0bc59e170d876292c1207ffc77  rbft-core
b37d892c03d8dc49eee8ea2363e202e878ddfe866377cd2b9f836599d48e4112  ruh-espalda
0fb44f60d026e498c77b5b10a629e0f8151b576299601c01cf7d1d57031d271d  arthritis-espalda
084c931a12448551a470c0c00c27d901b25420969e4bfa1db04434864398604f  arthritis-rodilla
eeec750bea7ccbd77826b1bacb45c17938d7bce8613a642be138e6229fb75da8  castilla-leon
178da6fd4688cea0e8a77022b6573219109e83a33c34ae688c821ecb4e35cd7f  rbft-stage1
a77d00094ed09fdcfe5212b7f23df0642a75475d8df1ca91ee527f6a2a57310d  nhs-respiracion
3812eacb9b3673996329f1b180335c90b2a120be9029dc38df35f0ad5c36b072  esht
d3e950136dc5ed3640452dbeb28954a066594ce53395ae54382d3b457e4883c9  mersey
148a1bee148be8100929cfe8dbfca298413f4287022c788d79e80ace5a12124c  southtees-banda
```

El hash de Leicester coincide con el registrado el 2026-10-18 en `CONTEXTO_CONTINUIDAD_CHATGPT.md` (sección F): el PDF no ha cambiado desde entonces.

- **Límites:**
  - Las páginas HTML pueden cambiar con el tiempo.
  - No se han examinado las imágenes de los PDF (R7.x): solo el texto.
  - La correspondencia entre cada ejercicio y su apartado se hizo por nombre y contenido. La confirma la auditoría de cada ejercicio con el protocolo 1.0.
