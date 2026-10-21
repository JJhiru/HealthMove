# Análisis de Claude · fase-01-d2-objeciones (consulta C2)

> **Análisis de Claude, no de DeepSeek.** La respuesta de DeepSeek está literal en `../ejecuciones/20261020T235245Z-fase-01-d2-objeciones/respuesta.md` (SHA-256 `ef15cbc9750893abaeb9b4481db5b69b1631a19c1bc7c3bed81935bf0607aed5`, igual a `hashes.respuesta`; `literalVerificado: true`; `stop` en el primer intento). Nada de aquí es una decisión. Por indicación del desarrollador (2026-10-20), **no se ha actualizado `ESTADO.md`** ni el contexto de continuidad.

## 1. Ejecución

| Dato | Valor |
|---|---|
| Fecha | 2026-10-20, 23:52 UTC |
| Motivo | El desarrollador decidió D2 («NO») y D3 («SI, me remito al criterio conservador») y pidió consultar a DeepSeek si había objeciones a D2. Claude planteó cinco (O1 a O5) |
| Uso | 640 tokens de caché acertados, 70 577 sin caché, 11 663 de salida |
| Coste | **0,0352 USD** como cota superior, a tarifa punta |
| Hallazgos | DS-97 a DS-108, sin huecos |
| Catálogo | blob `72fda34f` |

## 2. Verificación de Claude

| DS | Qué dice DeepSeek | Verificación |
|---|---|---|
| DS-97 | El «NO» de D2 es ambiguo | **Matizado.** La pregunta que se hizo al desarrollador fue «si tocar sin cerrar la mano cuenta como `agarre`», y a eso respondió «NO». La lectura «el contacto sin prensión no marca `agarre`» es directa. DeepSeek no tenía la pregunta. Aun así, conviene que el desarrollador lo confirme al registrarla |
| DS-98 | D3 no dice si incluye el trabajo simultáneo de los dos brazos | **Confirmado.** La pregunta del chat solo nombraba el apoyo con las dos manos. El trabajo simultáneo (un extremo de banda o una botella en cada mano) es otra clase de caso: se evalúa con DG-4 (función real), ya aprobada, no con Q1 |
| DS-99 | No encuentra la decisión del usuario sobre Q2 | **Refutado.** Está literal en `fases/fase-01-protocolo.md:42`: «El usuario considera que tocar una superficie o apoyarse ligeramente, sin prensión, no equivale a agarrar». Ese bloque no se envió: es una omisión de Claude al preparar C2 |
| DS-100, DS-105 | O1 se sostiene: con la instrucción neutra («las manos en el respaldo»), el `false` no cumple R2.2(a), porque la evidencia D tiene que estar en el ejercicio que ve el usuario (R4.2), ni R2.2(b), porque no hay ninguna adaptación | **Confirmado. Es la objeción que pesa.** Con las reglas actuales, D2 no se puede aplicar sin más a los ejercicios cuya instrucción es neutra |
| DS-101 | O2 se sostiene: la especificación §7.4 no distingue «apoyar» de «sujetarse» | Confirmado |
| DS-102 | O3 no es una objeción según las reglas: la seguridad del apoyo sin prensión queda fuera de ellas y es una cuestión para un profesional | Confirmado. La especificación §7.5 ya declara abierto el riesgo de la validación profesional |
| DS-103 | O4: D2 y D3 pueden coexistir (DG-4, R4.1); `[conservadora]` solo se usa en los `true` | Confirmado |
| DS-104, DS-106 | `flexion-alterna-piernas-de-pie` es un caso distinto por su adaptación | **Refutado en la consecuencia.** La adaptación solo hace obligatorio el apoyo; no habla de la mano. La instrucción ya dice «apóyate en ella» y la fuente, «apoyado». Es el mismo caso que los demás. `remo-inclinado-botella` (sigue en `true` por la botella) y `deslizar-toalla-pared` (indeterminado): confirmados |
| DS-107 | El recuento es correcto | **Confirmado, con un razonamiento confuso.** Hay 50 ejercicios de pie; 25 tienen `agarre: true` y 21 de ellos `equilibrio_sin_apoyo: false`. Los 9 neutros de DS-84 más los 16 con prensión explícita suman 25 |
| DS-108 | Sin las fuentes originales no se puede cerrar | **Parcialmente refutado.** Las fuentes de los 7 sí se consultaron (`evidencia-fuentes-q1-q2.md` §2, con hashes): en todas el verbo es *rest*, *place* o «apoyado». Lo que falta no es la fuente, sino que la instrucción de HealthMove lo refleje (DS-100) |

## 3. Qué queda de las objeciones a D2

**Lo que sostiene D2, con reglas y decisiones ya aprobadas:**
- R7.4: el contacto no permite inferir un agarre.
- DG-7: no se infiere carga ni agarre del contacto.
- DG-4 y R4.1: el contacto, el apoyo, la carga y el agarre se evalúan por separado.
- La decisión del usuario sobre Q2 del 2026-10-18 (citada arriba).
- La especificación §4 define `agarre` como prensión: «sujetarse».
- La evidencia D de las fuentes de los 7 ejercicios: *rest*, *place*, «apoyado».

**La objeción que se sostiene (DS-100, DS-105):** en 5 de los 7, la instrucción de HealthMove es neutra. No dice «apoya», así que el usuario no ve que no hace falta cerrar la mano, y el `false` no tiene evidencia D en el ejercicio tal como se presenta (R2.2(a) y R4.2).

| Ejercicio | Instrucción actual | Verbo de la fuente | ¿Evidencia D en la instrucción? |
|---|---|---|---|
| `pendulo-hombro` | «apoya una mano en el respaldo» | *resting* | Sí |
| `flexion-alterna-piernas-de-pie` | «apóyate en ella» | «apoyado» | Sí |
| `mini-sentadillas` | «las manos en el respaldo» | *Rest your hands* | No, es neutra |
| `elevacion-talones-apoyo` | «con las manos en el respaldo» | *Rest your hands* | No, es neutra |
| `elevacion-lateral-pierna` | «con las manos en el respaldo» | *Rest your hands* | No, es neutra |
| `extension-pierna-atras` | «con las manos en el respaldo» | *Rest your hands* | No, es neutra |
| `giro-tronco-pie` | «con una mano en el respaldo» | *place one hand* | No, es neutra |

**Cómo cerrarla sin crear una regla nueva (propuesta de Claude, para decidir):**
1. En los 5 neutros, poner en la instrucción el verbo de la fuente: «apoya las manos en el respaldo» o «apoya una mano». No es una adaptación, sino fidelidad a *rest* y *place* (R4.2). Así el `false` tiene evidencia D en la instrucción y en la fuente (R2.2(a)). Es un cambio del catálogo y necesita aprobación (R2.6).
2. Cerrar Q2 en el protocolo §13 con el texto de D2, y aclarar en la especificación §7.4 que apoyar la palma no es `agarre` y sujetarse sí (DS-101). Son ediciones del protocolo y de la especificación, y necesitan aprobación. Que eso exija la versión 1.1 lo decide el desarrollador: cierra una cuestión abierta, pero no cambia ningún criterio aprobado.
3. `remo-inclinado-botella`: sin cambio. `deslizar-toalla-pared`: sin cambio; añadir una nota `[conservadora]` (R2.4) hasta revisar la imagen de la fuente.
4. Revisar después los textos de seguridad con `healthmove-safety-reviewer` (DS-102), sin bloquear D2.

## 4. D3: alcance y medición

**Ejercicios de pie con apoyo de las dos manos y `ambos_brazos: false`** (lectura de las instrucciones por Claude), 10 en total:
- `mini-sentadillas`, `elevacion-talones-apoyo`, `elevacion-lateral-pierna` y `extension-pierna-atras` («las manos en el respaldo»);
- `estiramiento-gemelo-pared` y `estiramiento-soleo-pared` («Apoya las manos en la pared»);
- `elevar-puntas-pies-apoyo`, `flexion-rodilla-pie-apoyo`, `paso-atras-apoyo` y `puntillas-talones-apoyo` («sujétate con las dos manos»).

Con D3, pasarían a `true`, cada uno con su nota `[conservadora]` (R2.4). El rótulo `ETIQUETA_EXIGENCIA.ambos_brazos` (Q8(a)) se cambia antes o a la vez.

**Fuera del alcance de D3 (DS-98)**, para decidir aparte con DG-4: el trabajo simultáneo de los dos brazos con `ambos_brazos: false`. Son `banda-press-pecho-sentado`, `banda-prensa-pierna-sentado`, `banda-elevaciones-laterales-sentado`, `banda-empuje-pie-sentado`, `banda-sentarse-levantarse`, `press-hombros-botella-pie` y `press-pecho-botella-tumbado`. `elevaciones-laterales-botella` va aparte: su fuente es unilateral (`evidencia-fuentes-q1-q2.md` §4 bis).

## 5. Impacto en la disponibilidad (R9.1)

Medido con `scripts/disponibilidad.mjs --escenario`. Es **modo auditoría** (incluye borradores, así que **no es la disponibilidad real**), sobre el catálogo `72fda34f`. Supuesto: las listas son la lectura de Claude de §3 y §4. Solo se muestran los perfiles que cambian; los demás de R9.1 quedan igual.

| Perfil | Actual | D2 | D3 | D2 + D3 |
|---|---|---|---|---|
| `manos: cerrar_mano` | 143 (de pie 25) | 150 (32), gana 7 | = | 150 (32) |
| `de_pie_apoyo` + `cerrar_mano` | 135 (17) | 142 (24), gana 7 | = | 142 (24) |
| `brazos: un_brazo` | 181 (de pie 41) | = | 171 (31), pierde 10 | 171 (31) |
| `de_pie_apoyo` + `un_brazo` | 171 (31) | = | 161 (21), pierde 10 | 161 (21) |

R9.3: la disponibilidad informa, pero no decide.
