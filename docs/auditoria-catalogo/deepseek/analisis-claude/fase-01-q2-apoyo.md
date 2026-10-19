# Análisis de Claude · fase-01-q2-apoyo (consulta C1)

> **Esto es un análisis de Claude, no de DeepSeek.** No modifica ni sustituye la respuesta de DeepSeek, que está literal en:
> - `../ejecuciones/20261019T185547Z-fase-01-q2-apoyo/respuesta.md` (bloque 1, se cortó por longitud; SHA-256 `84c4a24eb07deb275a36bedcb2e8264ed7a42f5c39c02aaa6e4b7c1dd3e78bf1`);
> - `../ejecuciones/20261019T185654Z-fase-01-q2-apoyo-bloque2/respuesta.md` (continuación, completa; SHA-256 `c5d4a11e3e4e07ac428fc0ad1ad0bb8247929cfc9390b186218bf80675936cb5`).
>
> Las paráfrasis de esta tabla solo sirven para localizar cada hallazgo; el texto que vale es el del informe. Ninguna clasificación de Claude es una decisión.

## 1. Ejecución

| Dato | Valor |
|---|---|
| Fecha | 2026-10-19, 18:55–18:57 UTC (13:55–13:57 -05) |
| Motivo | La decisión del desarrollador sobre Q2 la mantiene abierta «hasta que DeepSeek haya revisado la definición documental y las evidencias técnicas pertinentes». C1 era la siguiente llamada prevista en `ESTADO.md` §7. Enviada en la sesión autónoma del 2026-10-19, en la que el desarrollador autorizó consultar a DeepSeek cuando aclare una contradicción real (DS-02, crítica) |
| Cambio previo a la tarea | Solo la frase marcada como sesgada en `ESTADO.md` §7: «Revisa en ella tus propios hallazgos sobre Q2 y `de_pie_apoyo`» pasó a «Revisa en ella lo que dijiste sobre Q2 y, si lo hubiera, sobre `de_pie_apoyo`» |
| Modelo | `deepseek-flash` (configurado e informado) |
| Bloque 1 | `truncada` (`length`), 640 tokens de caché acertados, 75 625 sin caché, 12 000 de salida · 0,0371 USD (cota superior) |
| Bloque 2 (continuación) | `completa` (`stop`), 88 064 acertados, 260 sin caché, 7 009 de salida · 0,0090 USD (cota superior) |
| Coste total | **0,0461 USD** como cota superior, a tarifa punta. DeepSeek no devuelve el importe cobrado |
| Integridad | `literalVerificado: true` en los dos bloques; el SHA-256 de cada `respuesta.md` coincide con `hashes.respuesta`; DS-77 a DS-96 sin huecos ni duplicados |
| Fuentes enviadas | Estado de la copia de trabajo: incluye los cambios sin confirmar de los Grupos 1 y 2 (`motor.js`, `validacion.js`, especificación §7.6). El catálogo es el blob `72fda34f` |

## 2. Verificación de Claude con el motor real

Método: `calcularRestricciones` y `esCompatible` de `public/js/motor.js` con perfiles construidos con `public/js/perfil.js` (`de_pie_apoyo` más la opción que cita cada hallazgo; modo borrador), sobre el catálogo real. Scripts de solo lectura en el directorio temporal de la sesión (`c1-verificar.mjs` y `c1-verificar2.mjs`).

### 2.1. Mediciones de Claude que DeepSeek revisó

| Medición | Resultado |
|---|---|
| 1 (`de_pie_apoyo` excluye solo `equilibrio_sin_apoyo`) | Confirmada por DeepSeek y por el motor |
| 2 (50 / 38 / 21 / 17) | Confirmada |
| 3 (los 17 con `de_pie_apoyo` + `cerrar_mano`) | El motor da exactamente 17. **Error de DeepSeek en la lista:** enumera 18 nombres; incluye `estiramiento-pecho-manos-detras` (que tiene `agarre: true`, como él mismo dice) y `de-pie-mano-preparada`, que no están, y omite `banda-deslizar-brazos-pared`, que sí está |
| 4 (especificación §7.4) | Cita literal correcta |

### 2.2. Hallazgos DS-77 a DS-96

Clasificación de Claude: **C** confirmado · **P** parcialmente confirmado · **R** refutado en su evidencia · **D** documental (la cita existe y dice eso) · **NV** no verificable sin fuente o profesional.

| DS | Paráfrasis | Verif. | Evidencia de Claude | ¿Decisión? |
|---|---|---|---|---|
| DS-77 | `de_pie_apoyo` solo se traduce en excluir `equilibrio_sin_apoyo`; no garantiza que el ejercicio ofrezca apoyo | C, con matiz | Mecanismo confirmado. **Matiz:** «los 17… no ofrecen ningún apoyo» exagera: 13 de los 17 mencionan pared, respaldo o antebrazos; los 4 sin apoyo son los de DS-83 | Sí (D2) |
| DS-78 | El texto «me sujeto» usa el verbo con el que la especificación §4 define `agarre`, pero la opción no excluye `agarre` | C (D) | Cita de §4 literal: «incluye sujetarse a una silla». Es una ambigüedad de texto, no de motor | Sí (texto de opción; D12/Q8) |
| DS-79 | `de_pie_apoyo` no excluye `peso_en_manos` | C | Separación coherente con R4.1; la combinación con `peso_manos` cubre el caso | No urgente |
| DS-80 | `de_pie_apoyo` no excluye `ambos_brazos` | P | Mecanismo confirmado. **Error:** cita `circulos-cadera-pie` como ofrecido «con las dos manos»; lo es con `de_pie_apoyo` solo, pero el problema que describe es el de DS-89 | Sí (Q1, D3) |
| DS-81 | `de_pie_apoyo` no excluye `una_pierna` | P | 8 de los 10 citados tienen `una_pierna: true` y se ofrecen. **Error:** `tandem-apoyo` y `estiramiento-isquios-pie` tienen `una_pierna: false` (en los dos los pies quedan en el suelo) | No urgente |
| DS-82 | `de_pie_apoyo` no excluye `sentarse_levantarse` | **R** en la consecuencia | El mecanismo es cierto, pero los 3 ejemplos (`sentarse-levantarse`, `-sin-manos`, `banda-`) tienen `equilibrio_sin_apoyo: true` y **nunca** se ofrecen con `de_pie_apoyo`. En el catálogo no hay ningún ejercicio de pie con `sentarse_levantarse: true` y `equilibrio_sin_apoyo: false`: hoy el caso no se produce | No |
| DS-83 | El motor no comprueba que el ejercicio ofrezca el apoyo que declara el perfil | C | Los 4 sin apoyo, compatibles con `de_pie_apoyo` (+ `cerrar_mano`), confirmados con el motor | Sí (D2) |
| DS-84 | Contacto, apoyo para estabilidad y obligatorio/opcional no tienen representación propia | C (D) | `EXIGENCIAS` (16) y protocolo §7.1, citas correctas. **Matiz numérico:** dice que hay 19 con prensión explícita y 2 «manos en el respaldo» con `agarre: true`. Medido: de 25 de pie con `agarre: true`, **16** piden prensión explícita y **9** no: `mini-sentadillas`, `elevacion-talones-apoyo`, `elevacion-lateral-pierna`, `extension-pierna-atras`, `flexion-alterna-piernas-de-pie`, `giro-tronco-pie`, `pendulo-hombro`, `remo-inclinado-botella`, `deslizar-toalla-pared` | Sí (D2) |
| DS-85 | La obligatoriedad del apoyo es clase de indicación (DG-6), no propiedad del ejercicio | C (D) | Cita del protocolo §8.1 literal | Sí (D2) |
| DS-86 | §7.4 y R7.4 son coherentes; dejan abierto el caso «manos en el respaldo» | C (D) | Coincide con C-4 del triage. §7.4 cierra la prensión explícita; el caso neutro sigue en Q2 | Sí (D2) |
| DS-87 | La propuesta del auditor en Q2 no menciona el caso «sujétate» | C (D) | Texto de Q2 en el protocolo (línea 397): solo «palma abierta» y «neutra» | Sí (D2) |
| DS-88 | `de_pie_apoyo` + `cerrar_mano`: 17 ofrecidos, 4 sin apoyo y 13 indeterminados | P | 17 y los 4: confirmados. **Error:** de los 13 «indeterminados» que cita, 6 **no** se ofrecen (`deslizar-toalla-pared`, `pendulo-hombro`, `remo-inclinado-botella`, `giro-tronco-pie` y `flexion-alterna-piernas-de-pie` tienen `agarre: true`; `sentarse-levantarse`, `equilibrio_sin_apoyo: true`). Los 13 reales son los otros 13 de la medición 3 | Sí (D2) |
| DS-89 | `de_pie_apoyo` + `un_brazo` ofrece ejercicios que piden «las dos manos» | P | **Confirmado para 4:** `elevar-puntas-pies-apoyo`, `paso-atras-apoyo`, `flexion-rodilla-pie-apoyo`, `puntillas-talones-apoyo` (los mismos de DS-25 corregido). **Error en 4:** `circulos-cadera-pie` (`ambos_brazos: true`, excluido) y `banda-sentarse-levantarse`, `elevaciones-laterales-botella`, `press-hombros-botella-pie` (`equilibrio_sin_apoyo: true`, no se ofrecen con `de_pie_apoyo`) | Sí (Q1, D3) |
| DS-90 | `de_pie_apoyo` + `peso_manos` ofrece ejercicios con «apoya las manos» y `peso_en_manos: false` | P (NV) | 12 de los 13 citados se ofrecen; `sentarse-levantarse` no. Si «apoya» implica carga depende de la fuente | Sí, tras la fuente |
| DS-91 | `de_pie_apoyo` + `equilibrio`: el caso no se produce | C en la conclusión, **R** en la evidencia | Afirma que `tandem-apoyo` tiene `una_pierna: true`; es `false`. La conclusión se sostiene: ni el tándem ni el estiramiento de isquios levantan un pie | No |
| DS-92 | `de_pie_apoyo` + `levantarse_silla`: el caso no se produce | C | Ningún ejercicio de pie ofrecido con esa combinación pide pasar de sentado a de pie; «Siéntate… o ponte de pie» es una alternativa | No |
| DS-93 | Sin la fuente no se sabe si «manos en el respaldo» es prensión, contacto o apoyo | NV | Limitación real; afecta a los 9 de DS-84 | Sí, tras la fuente |
| DS-94 | Sin la fuente no se sabe si los 4 sin apoyo se hacen de pie con o sin apoyo | NV | Fuentes comprobadas en el catálogo: Vivifrail, South Tees, Royal Berkshire y CDC/Tufts, como dice DeepSeek | Sí, tras la fuente |
| DS-95 | La adecuación a una persona concreta requiere un profesional | D | Coincide con el protocolo §1.5 | Profesional |
| DS-96 | Sin la fuente no se sabe si «sujétate» es fiel o una adaptación | NV | Afecta a los 16 con prensión explícita | Sí, tras la fuente |

### 2.3. Correcciones que DeepSeek hace a su fase 01

- **DS-26:** precisa el criterio observable («palma abierta o yemas → `false`; respaldo o “sujétate” → `true`»). Coincide con los datos.
- **DS-52:** lo reclasifica como dependiente de la fuente (DS-94). Es coherente con el análisis de Claude (C-2) y con DS-08.
- No cambia ningún identificador de la fase 01.

## 3. Qué aporta C1 a la decisión D2 (Q2)

**Hechos que quedan establecidos** (con la corrección de Claude):
1. `de_pie_apoyo` solo excluye `equilibrio_sin_apoyo`. No representa «apoyo disponible» ni la obligatoriedad del apoyo (DS-77, DS-83, DS-85).
2. De las cinco distinciones de la decisión del usuario, solo la carga (`peso_en_manos`) y la prensión (`agarre`) tienen exigencia propia (DS-84).
3. La especificación §7.4 resuelve la prensión explícita y no el caso neutro (DS-86, DS-87; C-4).
4. **El caso neutro son 9 ejercicios de pie con `agarre: true`** (lista en DS-84, arriba). Con `cerrar_mano` se excluyen por precaución, sin la nota `[conservadora]` de R2.4 (enlaza con D4 y DS-03).
5. **Con `de_pie_apoyo` + `cerrar_mano` se ofrecen 17 ejercicios de pie, y 4 no indican ningún apoyo** (DS-83/88).
6. **Con `de_pie_apoyo` + `un_brazo` se ofrecen 4 que piden «sujétate con las dos manos»**: es Q1 (D3), no Q2.

**Opciones que plantea DeepSeek** (A a E de su §6). Son propuestas de DeepSeek, no de Claude ni del desarrollador:
- **A:** codificar las cinco distinciones en las 16 exigencias actuales, sin cambiar el esquema.
- **B:** la propuesta de Q2, completada con el caso de prensión explícita.
- **C:** un campo nuevo, con cambios en el esquema, el motor, el validador, las opciones y los 220 ejercicios.
- **D:** no cerrar Q2 y registrar los casos como CN.
- **E:** cerrar solo la prensión explícita (§7.4) y dejar abierto el caso neutro.

**Lo que C1 no resuelve:** la aplicación ejercicio a ejercicio, que necesita las fuentes (DS-93, 94 y 96), y cualquier uso como criterio de seguridad, que necesita un profesional (DS-95).

## 4. Pendiente

- **Trasladar a `ESTADO.md`** la ejecución, el coste y el estado de DS-77 a DS-96, como pide la skill §2.7. **No se ha hecho**: el desarrollador prohibió modificar `ESTADO.md` durante la sesión autónoma del 2026-10-19.
- **Decisión D2** del desarrollador, con esta evidencia.
