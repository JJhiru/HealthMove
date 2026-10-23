# Triage de los hallazgos DS-01 a DS-76 · fase-01-protocolo

> **Esto es un análisis de Claude, no de DeepSeek.** No modifica ni sustituye la respuesta de DeepSeek, que está literal en:
> - `../ejecuciones/20261019T001226Z-fase-01-protocolo/respuesta.md` (bloque 1, truncado; SHA-256 `6f1f596b…`);
> - `../ejecuciones/20261019T001508Z-fase-01-protocolo-bloque2/respuesta.md` (bloque 2, completo; SHA-256 `316aa112…`).
>
> **Integridad, comprobada el 2026-10-19:**
> - los hashes coinciden con los `metadatos.json` y los dos bloques tienen `literalVerificado: true`;
> - están los 76 identificadores, DS-01 a DS-76, sin huecos ni duplicados;
> - el catálogo es el blob `72fda34f`.
>
> La columna «Hallazgo» es una **paráfrasis de Claude** que solo sirve para localizar cada hallazgo; el texto que vale es el del informe. La gravedad, la categoría, la verificación y la siguiente acción son **propuestas de Claude**, no de DeepSeek. Ninguna es una decisión.
>
> Complementa, sin sustituirlo, a `fase-01-protocolo.md` (análisis anterior de Claude). Este documento corrige dos puntos de aquel análisis: ver §6.

## 1. Cómo leer la matriz

**Categorías**

| Código | Categoría |
|---|---|
| CP | Contradicción o ambigüedad del protocolo |
| CD | Contradicción entre documentos (protocolo, especificación, interfaz) |
| ED | Problema de esquema o de datos del catálogo |
| MV | Defecto del motor o del validador |
| PR | Falta de pruebas o de herramienta |
| TR | Trazabilidad |
| ME | Propuesta de mejora o cuestión editorial |
| EX | Requiere evidencia externa (fuente original) o revisión profesional |
| SA | DeepSeek lo da por correcto o sin acción |

**Gravedad propuesta por Claude**
- **Crítica:** puede llevar a ofrecer un ejercicio cuyas instrucciones piden algo que el perfil declara no poder hacer, o deja una regla aplicable de dos maneras opuestas.
- **Alta:** contradicción normativa que bloquea cambios del catálogo, o que permite aprobar ejercicios sin los requisitos escritos.
- **Media:** falso negativo (se ofrece menos de lo posible), regla no reproducible o comprobación ausente sin efecto conocido hoy.
- **Baja:** editorial o de cita.
- **—:** sin acción.

**Impacto real hoy.** Los 220 ejercicios están en `borrador` (DS-10, verificado), así que fuera del modo desarrollo el motor no ofrece ninguno. Las gravedades describen lo que pasaría **al aprobar ejercicios** o en modo desarrollo, no un daño actual.

**Estado de verificación de Claude**
- **V:** verificado en el código o el catálogo (lectura o ejecución en memoria).
- **VC:** verificado con corrección; una parte de lo que dice DeepSeek es incorrecta.
- **X:** contradicho.
- **D:** documental; el texto citado existe y dice eso, y no hay comportamiento que ejecutar.
- **NV:** no verificable sin la fuente original o un profesional.

Todas las comprobaciones se hicieron en memoria, sin modificar archivos. Los scripts usados se describen en el §6.

## 2. Matriz

### 2.1. Contradicciones internas del protocolo (DS-01 a DS-06)

| DS    | Hallazgo (paráfrasis)                                                                                                   | Ubicación                      | Cat. | Gravedad (Claude)                                                                                                        | Evidencia                                                                              | Verif. | Depende de / se solapa                                                               | ¿Decisión?                         | Siguiente acción                               |
| ----- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------ | ---------------------------------- | ---------------------------------------------- |
| DS-01 | El protocolo está vigente, pero mientras Q1–Q3 sigan abiertas no se pueden cambiar etiquetas en los casos más numerosos | protocolo §1.1, §13; registro  | CP   | **Alta**: gobierna el orden de todo lo demás                                                                             | §13 «no se cambian etiquetas»; registro con 34 auditados (contados: 34)                | D      | Precede a todo el bloque Q1–Q3                                                       | Sí (D1)                            | Decidir el orden de cierre                     |
| DS-02 | R2.1 (ante la duda, `true`) y R7.4 (el contacto no demuestra agarre) chocan en el contacto sin cierre de mano           | protocolo R2.1, R7.4, R7.5, Q2 | CP   | **Crítica**: dos auditores pueden etiquetar `agarre` al revés                                                            | Textos literales. Ejemplos citados, 4/4 correctos en el catálogo                       | V      | Base de DS-13, 26, 35, 40, 67, 72 y C-2. Se matiza con la especificación §7.4 (§3.2) | Sí, tras C1 (D2)                   | Consulta C1                                    |
| DS-03 | R2.4 exige la nota `[conservadora]` y el catálogo tiene 0                                                               | protocolo R2.4; catálogo       | TR   | **Alta**: impide distinguir una marca por precaución de una basada en evidencia, que es justo lo que pide la decisión Q1 | 0 `[conservadora]`; **12** notas dicen «precaución» o «prudencia» (recuento de Claude) | V      | Agrupa DS-15, 16 y 21; base de DS-30                                                 | Sí (D4)                            | Decidir el alcance retroactivo                 |
| DS-04 | El adjetivo «restrictivo» de R2.5 puede leerse como «más seguro»                                                        | protocolo R2.5                 | ME   | Baja                                                                                                                     | `motor.js:57` coincide con la cita                                                     | D      | —                                                                                    | No                                 | Editorial, en la próxima versión del protocolo |
| DS-05 | R3.1, la prueba operativa, es condición de las adaptaciones pero depende de Q5, que está abierta                        | protocolo R3.1, Q5             | CP   | Media: puede haber adaptaciones aceptadas con un criterio no aprobado                                                    | Texto literal                                                                          | D      | Se solapa con DS-17                                                                  | Sí (D9)                            | Listar qué adaptaciones usaron R3.1 (no hecho) |
| DS-06 | El protocolo cita `app.js:621`, que en la copia de trabajo es la 690                                                    | protocolo R8.2, Q8             | TR   | Baja                                                                                                                     | `HEAD`: 621; copia de trabajo: 690 (comprobado)                                        | V      | —                                                                                    | Autorizar la edición del protocolo | Citar por función al actualizar                |

### 2.2. Contradicciones entre protocolo, especificación y esquema (DS-07 a DS-11)

| DS | Hallazgo (paráfrasis) | Ubicación | Cat. | Gravedad (Claude) | Evidencia | Verif. | Depende de / se solapa | ¿Decisión? | Siguiente acción |
|---|---|---|---|---|---|---|---|---|---|
| DS-07 | La especificación §7.6 exige `revisado_por` y `fecha_revision`; el validador solo `revisado_por` (V7) | especificación §7.6; `validacion.js:95-96` | MV | **Alta**: permitiría aprobar sin fecha. Hoy no hay ningún aprobado | **Ejecutado:** un ejercicio `basado_en_fuente_publica` con `fecha_revision: null` pasa `validarCatalogo`. El ejercicio de prueba de `tests/ayudas.mjs` depende de eso | V | Se solapa con DS-29, 59 y 65 | Ya decidido (V7); falta autorizar el cambio de código (D7) | Cambio del validador y su test |
| DS-08 | `posiciones` no distingue una secuencia obligatoria de una alternativa | especificación §3; `motor.js:56` | ED | Media: falsos negativos para «solo sentado» | Los 8 `sentado,de_pie` quedan excluidos para «solo sentado»; 5 no son secuencia | V | Se solapa con DS-24 y 34; relacionado con DS-52 | Sí (D5) | Decidir el significado |
| DS-09 | La especificación define `ambos_brazos` como binario; DG-4 y Q1 añaden matices que no recoge | especificación §4, fila 9; protocolo §7.1, Q1 | CD | **Crítica**: es la ambigüedad de Q1 | Textos literales. **Error en un ejemplo:** `circulos-cadera-pie` tiene `ambos_brazos: true` | VC | Bloque Q1: DS-25, 39, 48, 49, 50, 52 y C-3 | Sí (D3) | Incorporar la decisión Q1 |
| DS-10 | 220 ejercicios en `borrador` y ninguno aprobado: fuera del modo desarrollo el motor no usa ninguno | esquema; `motor.js:55` | SA | — | `{"borrador": 220}` | V | Contexto de todas las gravedades | No | Ninguna |
| DS-11 | El texto de la opción en la interfaz («en una silla o silla de ruedas») no coincide con la especificación §5 («sentado/a») | especificación §5; `opciones.js:12` | CD | Baja: el comportamiento coincide | Línea 90 de la especificación frente a la línea 12 de `opciones.js` | V | — | Sí, menor: qué texto manda | Alinear o registrar como decisión de interfaz |

### 2.3. Ambigüedades que pueden producir etiquetas incorrectas (DS-12 a DS-16)

| DS | Hallazgo (paráfrasis) | Ubicación | Cat. | Gravedad (Claude) | Evidencia | Verif. | Depende de / se solapa | ¿Decisión? | Siguiente acción |
|---|---|---|---|---|---|---|---|---|---|
| DS-12 | «Inclinación leve» no tiene umbral (Q3), y ejercicios parecidos tienen valores distintos de `inclinacion_tronco` | especificación §4; R7.8; Q3 | CP | **Alta**: posible falso positivo para «me cuesta inclinar» en una familia de 3 ejercicios | Citas exactas, 2/2 | V | Se solapa con DS-47, 58 y 73 | Sí (D11) | Incorporar Q3 y consultar las fuentes |
| DS-13 | No está operacionalizada la diferencia entre apoyo para estabilidad y agarre | protocolo §7.1 | CP | **Crítica**: es Q2 | 4/4 citas y etiquetas correctas | V | Se solapa con DS-02 y 40 | Sí, tras C1 | Consulta C1 |
| DS-14 | El rótulo «usar los dos brazos a la vez» contradice DG-4 cuando los brazos se alternan | `opciones.js:103`; Q8(a) | CD | Media: la persona entiende mal por qué se excluye un ejercicio; el filtro no cambia | Línea 103, comprobada | V | Se solapa con DS-57 | Sí (D12) | Texto del rótulo |
| DS-15 | `mini-sentadillas`: `flexion_profunda_rodilla` «por precaución», sin `[conservadora]` | catálogo | TR | Media | Cita y etiqueta exactas | V | Incluido en DS-03 | Lo cubre D4 | Lo cubre DS-03 |
| DS-16 | `elevaciones-frontales-botella`: `brazo_sobre_hombro` «por prudencia», sin `[conservadora]` | catálogo | TR | Media | Cita y etiqueta exactas | V | Incluido en DS-03 | Lo cubre D4 | Lo cubre DS-03 |

### 2.4. Reglas que no pueden aplicarse de forma reproducible (DS-17 a DS-20)

| DS | Hallazgo (paráfrasis) | Ubicación | Cat. | Gravedad (Claude) | Evidencia | Verif. | Depende de / se solapa | ¿Decisión? | Siguiente acción |
|---|---|---|---|---|---|---|---|---|---|
| DS-17 | R3.1 no es reproducible sin la fuente ni sin criterio para distinguir un rango de una imagen fija | protocolo R3.1 | CP | Media | Texto literal | D | Se solapa con DS-05 | Sí (D9) | Cerrar Q5 |
| DS-18 | R7.9 (renderizar los PDF a columnas) no dice con qué herramienta ni cómo | protocolo R7.9; skill | ME | Baja | Ni `protocolo.md:196` ni la skill (línea 79) nombran herramienta | V | — | No | Documentar el procedimiento |
| DS-19 | R9.1 no define qué son «posición con dos opciones» y «solo sentado con tres opciones» | protocolo R9.1 | CP | **Alta** por dependencia: R9.1 obliga a medir la disponibilidad en todo plan de cambios, y sin lista cerrada las mediciones no son comparables | `protocolo.md:270` | D | Precede a DS-61, 66 y 68 | Sí (D10) | Fijar la lista de perfiles |
| DS-20 | R2.6 exige medir el impacto, pero no hay umbral de aceptación | protocolo R2.6, §9 | SA | — | «No hay umbral de aviso aprobado» | D | — | No | Ninguna: es una decisión consciente |

### 2.5. Criterio conservador confundido con evidencia (DS-21 a DS-23)

| DS | Hallazgo (paráfrasis) | Ubicación | Cat. | Gravedad (Claude) | Evidencia | Verif. | Depende de / se solapa | ¿Decisión? | Siguiente acción |
|---|---|---|---|---|---|---|---|---|---|
| DS-21 | Hay notas que describen marcas por precaución sin el formato exigido (agrupa DS-03, 15 y 16) | catálogo | TR | Media | 12 notas con «precaución» o «prudencia»; cita de `flexion-alterna-piernas-de-pie` exacta | V | Incluido en DS-03 | Lo cubre D4 | Lo cubre DS-03 |
| DS-22 | `sentarse-levantarse` tiene `equilibrio_sin_apoyo: true`, pero la instrucción dice «usa las manos solo como guía si lo necesitas» | catálogo | EX | Media: el `true` excluye más, no ofrece de más | Cita y etiqueta exactas | V para los datos; NV para la fuente | Relacionado con DS-27 | Sí, tras ver la fuente | Consultar NHS «Strength exercises» |
| DS-23 | La contingencia «si pierdes el equilibrio, sujétate a la silla» no cambia la etiqueta (R6.3) | catálogo; R6.3 | SA | — | Cita, nota y `variante_de` exactas | V | — | No | Ninguna |

### 2.6. Falsos positivos y falsos negativos en los filtros (DS-24 a DS-28)

| DS | Hallazgo (paráfrasis) | Ubicación | Cat. | Gravedad (Claude) | Evidencia | Verif. | Depende de / se solapa | ¿Decisión? | Siguiente acción |
|---|---|---|---|---|---|---|---|---|---|
| DS-24 | `posiciones` usado como alternativa produce falsos negativos para «solo sentado» | motor; 5 ejercicios | ED | Media | 5/5 ejercicios con `sentado,de_pie` | V | Se solapa con DS-08 | Lo cubre D5 | Lo cubre DS-08 |
| DS-25 | Hay ejercicios con `ambos_brazos: false` cuyas instrucciones piden las dos manos: falso positivo para «solo un brazo» | catálogo; Q1 | ED | **Crítica** | **Corrección:** de los 8 citados, solo 4 piden «las dos manos» (`elevar-puntas-pies-apoyo`, `flexion-rodilla-pie-apoyo`, `paso-atras-apoyo`, `puntillas-talones-apoyo`). `circulos-cadera-pie` es `true`; `mini-sentadillas` y `elevacion-talones-apoyo` dicen «las manos» sin número; `tandem-apoyo` dice «una mano» | VC | Bloque Q1; se amplía con C-3 | Sí (D3) | Aplicar Q1 cuando esté incorporada |
| DS-26 | Los ejercicios de pared con `agarre: false` podrían ser falsos positivos si se aplica R2.1 sin matiz | catálogo; Q2 | CP | Baja para la pared; el caso abierto es el respaldo | 13/13 etiquetas y citas correctas. **Matiz:** la especificación §7.4 dice «la palma abierta contra la pared, porque sujetarse a una silla es `agarre`» | V | Q2; ver §3.2 | Lo cubre D2 | Consulta C1 |
| DS-27 | `equilibrio_sin_apoyo: true` en ejercicios con apoyo opcional o contingencia: posibles falsos negativos | catálogo | EX | Media | 13/13 etiquetas correctas. **Matiz** (análisis anterior): 4 de los 11 citados (las 3 botellas y `banda-elevar-brazos-pie`) no mencionan ningún apoyo | VC | Relacionado con DS-22 | Sí, tras ver las fuentes | Consultar las fuentes |
| DS-28 | El validador solo comprueba `impacto` entre las exclusiones del catálogo v1 | especificación §4; `validacion.js:77` | MV | Media: no se conoce ningún ejercicio que la incumpla, pero no se ha buscado | Línea 77 | V | Se solapa con DS-36 | Sí (D8) | Decidir el alcance del validador |

### 2.7. Requisitos que el validador no comprueba (DS-29 a DS-34)

| DS | Hallazgo (paráfrasis) | Ubicación | Cat. | Gravedad (Claude) | Evidencia | Verif. | Depende de / se solapa | ¿Decisión? | Siguiente acción |
|---|---|---|---|---|---|---|---|---|---|
| DS-29 | No se comprueba `fecha_revision` | validador | MV | Alta | Igual que DS-07 | V | Duplicado de DS-07 | — | — |
| DS-30 | No se comprueba el formato `[conservadora]` | validador; R2.4 | MV | Baja: antes hace falta un criterio en el esquema | El validador no lee `notas_etiquetado` | V | Depende de DS-03 (D4) | Sí, después de D4 | Ninguna hasta D4 |
| DS-31 | No se comprueba que `adaptaciones` recoja las diferencias con la fuente | validador; §7.7 | SA | — | No se lee `adaptaciones` | V | — | No | Ninguna: lo verifica la auditoría |
| DS-32 | No se comprueba que `especifica_de` coincida con la fuente | validador; R8.1 | SA | — | No se lee `especifica_de` | V | — | No | Ninguna |
| DS-33 | No se detectan ciclos de `variante_de` | `validacion.js:100-102` | MV | Baja para los ciclos en sí | **Ejecutado:** un catálogo con A ↔ B pasa como válido. El catálogo no tiene ningún ciclo, y ningún código recorre la cadena (`motor.js:143`, `app.js:659`), así que hoy no se cuelga nada | V | Va unido a DS-38, que es más grave | Lo cubre D6 | Test junto con DS-38 |
| DS-34 | No se comprueba la coherencia entre `posiciones` y las instrucciones | validador | ED | Media | Limitación estructural | D | Duplicado de DS-08 | Lo cubre D5 | — |

### 2.8. Reglas documentadas que el motor no implementa (DS-35 a DS-38)

| DS | Hallazgo (paráfrasis) | Ubicación | Cat. | Gravedad (Claude) | Evidencia | Verif. | Depende de / se solapa | ¿Decisión? | Siguiente acción |
|---|---|---|---|---|---|---|---|---|---|
| DS-35 | No hay forma de representar el apoyo opcional frente al obligatorio | motor; esquema | ED | **Alta**: Q2 puede no ser representable sin cambiar el esquema | El motor solo lee posiciones, exigencias, recursos y estado (`motor.js:55-58`) | V | Q2; se solapa con DS-67 | Sí, tras C1 (D2) | Consulta C1 |
| DS-36 | El motor no filtra el desplazamiento ni el material especial | motor | MV | Media | No existe ese filtro | V | Duplicado de DS-28 | Lo cubre D8 | — |
| DS-37 | El motor no usa `especifica_de` | motor; R8.2 | SA | — | 0 apariciones en `motor.js` | V | — | No | Ninguna |
| DS-38 | DeepSeek da por implementado que una variante no coincide con su original en la misma rutina | `motor.js:143`, `:167-182` | MV, PR | **Media**: dos versiones del mismo ejercicio en una rutina. No es una incompatibilidad, porque cada una es compatible por separado | **Contradicho por ejecución:** en 1200 rutinas en memoria con el catálogo real (modo borrador), 14 contienen dos miembros de la misma cadena (por ejemplo `abdomen-boca-abajo` + `abdomen-sentado`, 4 veces). Con un catálogo ficticio A → B → C: A + C en 162 de 300 rutinas y A + B en 138; B + C nunca | X | Une DS-33 con la fase-04 (variantes) | Sí (D6) | Autorizar la corrección y su test |

### 2.9. Casos límite de Q1 y Q2 (DS-39 a DS-41)

| DS | Hallazgo (paráfrasis) | Ubicación | Cat. | Gravedad (Claude) | Evidencia | Verif. | Depende de / se solapa | ¿Decisión? | Siguiente acción |
|---|---|---|---|---|---|---|---|---|---|
| DS-39 | 15 ejercicios de pie con apoyo y `ambos_brazos: false` (Q1) | catálogo | ED | **Crítica** | 14/15 son `false`; `circulos-cadera-pie` es `true`. **Corrección:** varios no son «bilaterales» (sin número de manos, o con una mano) | VC | Bloque Q1 | Sí (D3) | Aplicar Q1 |
| DS-40 | 19 ejercicios con contacto y `agarre: true` (Q2) | catálogo | ED | **Crítica** | 19/19 citas y etiquetas exactas | V | Bloque Q2 | Sí, tras C1 | Consulta C1 |
| DS-41 | `peso_en_manos: true` con `agarre: false` (palma abierta con carga) es coherente | catálogo | SA | — | 2/2 correctos | V | — | No | Ninguna |

### 2.10. Adaptación y trazabilidad de las fuentes (DS-42 a DS-46)

| DS | Hallazgo (paráfrasis) | Ubicación | Cat. | Gravedad (Claude) | Evidencia | Verif. | Depende de / se solapa | ¿Decisión? | Siguiente acción |
|---|---|---|---|---|---|---|---|---|---|
| DS-42 | La cita que justifica una adaptación vive en el informe, no en el catálogo: si el informe se pierde, se pierde la justificación | protocolo R3.2, §10.1 | TR | Media | **Matiz:** `lote-01.md` a `lote-05.md` están versionados en git (`git ls-files`). Lo que falta es enlazar el informe con la versión del catálogo (huellas, DS-62) | VC | Se solapa con DS-62 | Lo cubre D-huellas (DS-62) | — |
| DS-43 | El validador no puede comprobar que la fuente describe la variante | validador; R5.6 | SA | — | Limitación estructural | D | — | No | Ninguna |
| DS-44 | Hay 35 variantes en el catálogo y el registro solo recoge 3 propuestas pendientes | esquema; registro | EX | **Alta** si alguna no tiene respaldo (DG-5, V9/Q4). Hoy no se sabe | 35 variantes; 3 filas de propuestas; 13 variantes con `adaptaciones`; 27 con una URL distinta de la de su base | V para los recuentos; NV para el respaldo | Se solapa con DS-70; fase-04 | Sí, tras verificar | Fase-04 y revisión de fuentes |
| DS-45 | La adaptación de `flexion-alterna-piernas-de-pie` (añadir apoyo) es coherente con sus etiquetas | catálogo | SA | — | Correcto | V | — | No | Ninguna |
| DS-46 | `elevacion-talones-sin-apoyo` es coherente con R6.3 | catálogo | SA | — | Correcto | V | — | No | Ninguna |

### 2.11. Variantes y casos de pie (DS-47 a DS-57)

| DS | Hallazgo (paráfrasis) | Ubicación | Cat. | Gravedad (Claude) | Evidencia | Verif. | Depende de / se solapa | ¿Decisión? | Siguiente acción |
|---|---|---|---|---|---|---|---|---|---|
| DS-47 | En la familia de `sentarse-levantarse`, la base tiene `inclinacion_tronco: false` y dos variantes `true` | catálogo; Q3 | ED | Alta | Correcto. Las tres vienen de fuentes distintas (NHS, Later Life Training y Worcestershire) | V | Bloque Q3 | Lo cubre D11 | Consultar las fuentes |
| DS-48 | `banda-sentarse-levantarse`: «un extremo en cada mano» y `ambos_brazos: false` | catálogo; Q1 | ED | **Crítica** | Correcto | V | Bloque Q1 | Lo cubre D3 | Aplicar Q1 |
| DS-49 | «Botella con las dos manos» es `true`; «una botella en cada mano» es `false` | catálogo; Q1 | ED | **Crítica** | Correcto | V | Bloque Q1 | Lo cubre D3 | Aplicar Q1 |
| DS-50 | `press-hombros-botella-pie`: «una botella en cada mano» y `ambos_brazos: false` | catálogo; Q1 | ED | **Crítica** | Correcto | V | Bloque Q1 | Lo cubre D3 | Aplicar Q1 |
| DS-51 | Los dos ejercicios con banda y `ambos_brazos: true` son coherentes | catálogo | SA | — | Correcto | V | — | No | Ninguna |
| DS-52 | Cinco ejercicios `sentado,de_pie` con las dos manos ocupadas, `equilibrio_sin_apoyo: false` y sin instrucción de apoyo | catálogo; hipótesis B | ED | **Crítica**: con `de_pie_apoyo` se ofrecen los cinco, y cuatro también con `cerrar_mano` (C-2), sin decir cómo sujetarse de pie | 5/5 correctos | V; NV para la fuente | DS-08 y Q2 (C-2) | Sí, tras ver las fuentes | Fuentes y consulta C1 |
| DS-53 | `estiramiento-pecho-manos-detras` (manos entrelazadas, `agarre: true`) es coherente | catálogo | SA | — | Correcto | V | — | No | Ninguna |
| DS-54 | `estiramiento-pecho-manos-lumbar` es coherente | catálogo | SA | — | Correcto | V | — | No | Ninguna |
| DS-55 | `manos-espalda-codo-contrario` es coherente | catálogo | SA | — | Correcto | V | — | No | Ninguna |
| DS-56 | `estiramiento-triceps` es coherente | catálogo | SA | — | Correcto | V | — | No | Ninguna |
| DS-57 | `estiramiento-hombro-cruzado` (`ambos_brazos: true`, brazos alternos) es coherente con DG-4, pero choca con el rótulo | catálogo; `opciones.js:103` | CD | Media | Correcto | V | Duplicado de DS-14 | Lo cubre D12 | — |

### 2.12. Decisiones que pueden cerrarse documentalmente (DS-58 a DS-64)

| DS | Hallazgo (paráfrasis) | Ubicación | Cat. | Gravedad (Claude) | Evidencia | Verif. | Depende de / se solapa | ¿Decisión? | Siguiente acción |
|---|---|---|---|---|---|---|---|---|---|
| DS-58 | Q3 puede cerrarse con la decisión del usuario | Q3 | ME | Alta, por lo que desbloquea | Decisión literal | D | Desbloquea DS-12 y 47 | Sí (D11) | Autorizar la incorporación al protocolo |
| DS-59 | V7: registrar la decisión y planificar el cambio del validador | V7 | ME | Alta | — | D | Duplicado de DS-07 | Lo cubre D7 | — |
| DS-60 | V9/Q4 puede registrarse como confirmación de DG-5 | V9/Q4 | ME | Media | — | D | DS-44 | Sí: registrarla | Autorizar la anotación en el registro |
| DS-61 | La herramienta de disponibilidad está aprobada, pero falta la lista de perfiles y el formato | §9, §14 | PR | Alta, por dependencia | — | D | Depende de DS-19 | Lo cubre D10 | Construir `scripts/disponibilidad.mjs` |
| DS-62 | Las huellas de `propuestas-cierre` §1 están sin aprobar | propuestas-cierre §1 | TR | Media | — | D | Cubre DS-42 | Sí | Aprobar o rechazar |
| DS-63 | Q6 está resuelta | Q6 | SA | — | Comprobado en el protocolo | D | — | No | Ninguna |
| DS-64 | Q8(b): la aclaración está aprobada y el texto de interfaz, pendiente | Q8(b); P2 | ME | Media | — | D | Se solapa con DS-76 | Sí (D12) | Aprobar el texto |

### 2.13. Decisiones que requieren pruebas de código (DS-65 a DS-70)

| DS | Hallazgo (paráfrasis) | Ubicación | Cat. | Gravedad (Claude) | Evidencia | Verif. | Depende de / se solapa | ¿Decisión? | Siguiente acción |
|---|---|---|---|---|---|---|---|---|---|
| DS-65 | Falta un test de que se rechaza un ejercicio sin `fecha_revision` | tests | PR | Alta | — | V (el test no existe) | Duplicado de DS-07 | Autorizar el cambio de código (D7) | — |
| DS-66 | Las cifras 31/20/0 de Q1 deben reproducirse con la herramienta | Q1 | PR | Alta | Medidas a mano en una sesión anterior; no hay herramienta versionada | NV hasta tener la herramienta | Depende de DS-19 y 61 | Lo cubre D10 | Reproducir con la herramienta |
| DS-67 | Falta probar si el motor puede distinguir apoyo de agarre | motor | PR | Alta | **Probado por Claude:** la prueba que propone DeepSeek se resuelve de forma determinista. `flexiones-pared` (`agarre: false`, `peso_en_manos: true`) se ofrece con `cerrar_mano` y se excluye con `peso_manos`. Lo que queda abierto es de diseño (C1) | V | Q2 | Lo cubre D2 | Consulta C1 |
| DS-68 | Las cifras 31/15/4 de la hipótesis B deben reproducirse | hipótesis B | PR | Media | Medidas por Claude el 2026-10-18 con el mismo blob; falta la herramienta | V (a mano) | Depende de DS-61 | No | Reproducir con la herramienta |
| DS-69 | Confirmados los 220 borradores y los 34 auditados | esquema; registro | SA | — | 220 y 34 | V | — | No | Ninguna |
| DS-70 | Hay que comprobar el respaldo de las 35 variantes | esquema | EX | Alta | — | NV | Duplicado de DS-44 | Lo cubre DS-44 | Fase-04 |

### 2.14. Evidencia adicional o revisión profesional (DS-71 a DS-76)

| DS | Hallazgo (paráfrasis) | Ubicación | Cat. | Gravedad (Claude) | Evidencia | Verif. | Depende de / se solapa | ¿Decisión? | Siguiente acción |
|---|---|---|---|---|---|---|---|---|---|
| DS-71 | Aplicar Q1 exige consultar la fuente de cada ejercicio | Q1 | EX | Crítica, por lo que bloquea | — | NV | Bloque Q1 | Sí, tras la evidencia | Fichas por fuente |
| DS-72 | Q2 exige la fuente y, si se presenta como criterio de seguridad, un profesional | Q2 | EX | Crítica, por lo que bloquea | — | NV | Bloque Q2; C1 | Sí | C1, después las fuentes |
| DS-73 | Q3 exige la fuente (un ángulo) o conservar el término original | Q3 | EX | Alta | — | NV | Bloque Q3 | Sí | Fuentes de la familia `sentarse-levantarse` |
| DS-74 | No existe validación profesional y el protocolo lo reconoce | §1.5; §7.5 | SA | — | — | D | — | No (requiere un profesional) | Ninguna |
| DS-75 | Los avisos de seguridad no están validados por un profesional | §8.3, §8.4 | EX | Alta | — | D | — | Sí, con un profesional | Revisión profesional cuando la haya |
| DS-76 | El texto propuesto «Que sea compatible no garantiza que sea seguro para ti» sería una afirmación de seguridad | propuestas-cierre §2 | EX | Media | **Matiz:** es un descargo, no una afirmación. La recomendación coincide con §8.4 | VC | Se solapa con DS-64 | Lo cubre D12 | Skill `healthmove-safety-reviewer` |

## 3. Hallazgos propios de Claude (no son de DeepSeek)

Surgen de esta verificación. Se numeran C-n para no confundirlos con los DS-n.

### C-1 · DS-38 contradicho, con su causa
- **Causa:** `familia(ej) = ej.variante_de || ej.id` (`motor.js:143`) mira un solo nivel.
- **Cadena A → B → C** (A es variante de B, y B de C): las familias son B, C y C. Por eso A puede coincidir con B y con C, y solo B y C se excluyen entre sí.
- **El catálogo tiene 3 cadenas de este tipo:** `marcha-apertura-brazos-sentado → marcha-sentado-manos-cadera → marcha-sentado-sujetandose`, `abdomen-boca-abajo → abdomen-profundo-tumbado → abdomen-sentado` y `flexor-cadera-tumbado → abrazar-rodilla-tumbado → rodilla-al-pecho-tumbado`.
- **Contradice** la especificación §3: «el motor no incluye las dos en la misma rutina».

### C-2 · `de_pie_apoyo` no se revisó, y la decisión Q2 lo pedía
- **El hueco:** ningún hallazgo DS analiza qué significa `de_pie_apoyo` ni su relación con `cerrar_mano`, aunque la decisión del usuario sobre Q2 lo pide expresamente.
- **Medición:**
  - `de_pie_apoyo` («Puedo estar de pie solo si me sujeto a algo») excluye solo `equilibrio_sin_apoyo`;
  - de los 50 ejercicios de pie, 38 son compatibles con esa opción (21 con `agarre: true` y 17 con `false`);
  - con `cerrar_mano` quedan 17;
  - cuatro de ellos no mencionan ningún apoyo: `estiramiento-hombro-cruzado`, `estiramiento-triceps`, `estiramiento-pecho-manos-lumbar` y `manos-espalda-codo-contrario`.
- **Consecuencia:** quien solo puede estar de pie sujetándose y no puede cerrar la mano recibe ejercicios de pie sin indicación de cómo apoyarse. Esto agrava DS-52.
- **Por qué no es definitivo:** lo que la persona pueda hacer realmente es un juicio clínico, y lo que diga la fuente no se ha consultado.

### C-3 · Q1 no se limita a los ejercicios de pie
En todo el catálogo hay **14** ejercicios con «dos manos» o «cada mano» en las instrucciones y `ambos_brazos: false`. Siete no tienen `de_pie` y quedaban fuera de lo que recibió DeepSeek:
- `giro-tronco-sentado`;
- `press-encima-cabeza-sentado`;
- `banda-press-pecho-sentado`;
- `banda-prensa-pierna-sentado`;
- `banda-elevaciones-laterales-sentado`;
- `banda-empuje-pie-sentado`;
- `press-pecho-botella-tumbado`.

Son candidatos para revisar, no errores confirmados: hay que aplicar primero la decisión Q1 (la fuente).

### C-4 · La especificación §7.4 ya distingue la pared de la silla
Dice: «Conviene incluir variantes con la palma abierta contra la pared, porque sujetarse a una silla es `agarre`».
- **Matiza DS-02, DS-13 y DS-26:** la distinción no está tan sin formalizar como dice DeepSeek.
- **No cierra Q2:** «manos en el respaldo», sin «sujétate», sigue siendo indeterminado.
- **Pasa a la consulta C1.**

### C-5 · La ficha del ejercicio también mira un solo nivel
`app.js:659` lista solo la base directa y las variantes directas. Es un detalle de interfaz relacionado con C-1.

## 4. Afirmaciones técnicas de DeepSeek: estado de verificación

| Estado | Hallazgos |
|---|---|
| **Verificadas** (código o catálogo) | DS-02, 03, 06, 07 (ejecutado), 08, 10, 11, 12, 13, 14, 15, 16, 18, 21, 22 (datos), 23, 24, 26 (datos), 28, 29, 30, 31, 32, 33 (ejecutado), 35, 36, 37, 40, 41, 45, 46, 47, 48, 49, 50, 51, 52 (datos), 53, 54, 55, 56, 57, 67 (ejecutado), 69 |
| **Verificadas con corrección** | DS-09 (`circulos-cadera-pie`), 25 (4 de 8 piden las dos manos), 27 (4 de 11 sin apoyo), 39 (`circulos-cadera-pie` y «bilateral»), 42 (los lotes están versionados), 76 (descargo, no afirmación) |
| **Contradichas** | DS-38 (no está implementado para cadenas). La gravedad «baja» de DS-33 solo vale para los ciclos; la de las cadenas es mayor |
| **No verificables aquí** (fuente o profesional) | DS-22 y 27 (fuente), 44 y 70 (respaldo de las variantes), 52 (fuente), 66 (sin herramienta), 71, 72, 73 y 75 |
| **Documentales** (sin comportamiento que ejecutar) | DS-01, 04, 05, 17, 19, 20, 34, 43, 58 a 64, 74 |
| **Error de recuento en el preámbulo** | «He revisado los ocho bloques»: fueron nueve |

## 5. Priorización y dependencias

### 5.1. Grupos (propuesta de Claude)

1. **Bloqueos críticos** (pueden llevar a recomendaciones incompatibles o invalidar reglas):
   - el orden de cierre, DS-01;
   - Q2: DS-02, 13, 35, 40 y 72, con C-2 y C-4;
   - Q1: DS-09, 25, 39, 48, 49, 50, 52 y 71, con C-3.
2. **Contradicciones normativas que resolver antes de tocar el catálogo:**
   - Q3: DS-12, 47, 58 y 73;
   - el alcance de R2.4: DS-03, 15, 16 y 21;
   - Q5: DS-05 y 17;
   - el significado de `posiciones`: DS-08, 24 y 34;
   - la lista de perfiles de R9.1: DS-19;
   - el rótulo de `ambos_brazos`: DS-14 y 57.
3. **Problemas técnicos verificables con código o pruebas:**
   - las familias: DS-38 y 33, con C-1;
   - V7: DS-07, 29, 59 y 65;
   - las exclusiones del validador: DS-28 y 36;
   - la herramienta de disponibilidad: DS-61, 66 y 68;
   - el formato `[conservadora]`: DS-30, después de D4.
4. **Documentación y trazabilidad:** DS-04, 06, 11, 18, 42, 60 y 62.
5. **Decisiones del usuario:** §5.3.
6. **Evidencia externa o profesionales:**
   - fuentes: DS-22, 27, 44 y 70;
   - profesionales: DS-74, 75 y 76.

**Sin acción** (DeepSeek y la verificación coinciden): DS-10, 20, 23, 31, 32, 37, 41, 43, 45, 46, 51, 53, 54, 55, 56, 63 y 69.

### 5.2. Dependencias (qué cambia la lectura de qué)

```
D1 (orden de cierre, DS-01)
 └─ Q2: definir contacto / apoyo / carga / prensión / obligatorio u opcional   ← consulta C1, luego D2
     ├─ cambia la lectura de DS-13, 26, 35, 40, 52, 67 y C-2
     └─ Q1 (D3) se aplica DESPUÉS: la decisión Q1 pregunta si «el apoyo es opcional», que es una categoría de Q2
         └─ DS-09, 25, 39, 48-50 y C-3 (aplicación ejercicio a ejercicio; requiere las fuentes, DS-71)
R9.1: lista de perfiles (DS-19, D10)
 └─ herramienta de disponibilidad (DS-61)  →  reproducir DS-66 y 68  →  medir el impacto de cualquier plan de Q1/Q2/Q3
R2.4 retroactivo (D4)  →  DS-15, 16, 21 y DS-30
Familias (D6)  →  DS-38, DS-33 y la fase-04 (variantes, DS-44 y 70)
```

**Por qué Q2 va antes que Q1:**
- la decisión Q1 del usuario pide examinar, después de la fuente, «si el apoyo es opcional o si una mano apoya mientras la otra trabaja»;
- esas categorías las define Q2;
- si Q1 se cierra antes, habría que releer sus casos después.

### 5.3. Decisiones que debe tomar el usuario

| Id | Decisión | Opciones | Consecuencias |
|---|---|---|---|
| D1 (DS-01) | Orden de cierre | (a) Cerrar Q2, Q1 y Q3, en ese orden, antes de cualquier plan de cambio de etiquetas. (b) Admitir planes parciales para los ejercicios que no dependen de Q1–Q3 | (a) Es más lento, pero no obliga a reetiquetar dos veces. (b) Avanza antes, pero exige marcar en cada plan de qué cuestión no depende, y cualquier error de esa clasificación obliga a rehacerlo |
| D2 (Q2) | Cómo representar las cinco distinciones | Después de C1: (a) definirlas en el protocolo y asignarlas a las exigencias actuales, sin cambiar el esquema. (b) Añadir una exigencia o un campo (cambia esquema, motor, validador, opciones, catálogo y pruebas). (c) Además, revisar el texto de `de_pie_apoyo` | (a) Es barata, pero puede que no represente «apoyo obligatorio u opcional» (DS-35). (b) Es más completa, pero es un cambio funcional amplio. (c) Afecta a lo que entiende la persona usuaria y debería pasar por `healthmove-safety-reviewer` |
| D3 (Q1) | Incorporar al protocolo y a la especificación §4 el texto ya decidido | (a) Incorporarlo ahora, literal, como regla. (b) Esperar a D2 | (a) Fija el criterio, pero su paso sobre el apoyo opcional queda sin definir hasta D2. (b) Es coherente con §5.2 |
| D4 (R2.4) | ¿Se aplica a las notas existentes? | (a) Sí: plan para reescribir las 12 notas «por precaución» o «prudencia» con `[conservadora]` (es un cambio de datos). (b) Solo a los cambios nuevos | (a) Da trazabilidad completa, pero hay que revisar 12 ejercicios. (b) Deja marcas por precaución indistinguibles de la evidencia |
| D5 (DS-08) | Significado de `posiciones` | (a) «Todas las que usa» y aceptar los falsos negativos. (b) Separar las alternativas en dos entradas con `variante_de` (cambia el catálogo). (c) Un campo nuevo (cambia el esquema) | (a) No cambia nada, pero pierde 5 ejercicios para «solo sentado». (b) Sigue la especificación §3 para la cama y el suelo, aunque crea variantes y, por tanto, más cadenas (D6). (c) Es el cambio más amplio |
| D6 (DS-38) | Familias de variantes | (a) Autorizar que `familia()` recorra hasta la raíz, con un test. (b) Que el validador prohíba las cadenas y aplanarlas en la fase-04 (cambia el catálogo). (c) Aceptar el comportamiento actual | (a) Es un cambio pequeño en el motor y cumple la especificación §3. (b) Simplifica los datos, pero cambia `variante_de` en 3 ejercicios. (c) Mantiene la contradicción con la especificación |
| D7 (V7) | Autorizar el cambio del validador y su test | Sí o no | La decisión de fondo ya está tomada; falta autorizar el código |
| D8 (DS-28) | Exclusiones del catálogo v1 | (a) Dejarlas a la auditoría documental. (b) Comprobar en el validador las que se puedan expresar | (b) Requiere criterios por palabras clave, que pueden dar falsos avisos |
| D9 (Q5) | Prueba operativa de R3.1 | Confirmarla o rechazarla | Si se rechaza, cada adaptación necesita su propia justificación |
| D10 (DS-19) | Lista cerrada de perfiles de R9.1 y construir la herramienta | Aprobar una lista (se puede preparar una propuesta) | Sin ella no hay mediciones comparables para D2, D3 ni D5 |
| D11 (Q3) | Incorporar al protocolo y a la especificación el texto ya decidido | Sí o no | Desbloquea DS-12 y 47, aunque su aplicación sigue necesitando las fuentes |
| D12 | Textos de interfaz: el rótulo de `ambos_brazos` (Q8(a)) y la procedencia (Q8(b)) | Aprobar o modificar | Pasan por `healthmove-safety-reviewer`; no cambian los filtros |

## 6. Método y correcciones a mi análisis anterior

**Scripts** (en el directorio temporal de la sesión, no versionados), todos solo de lectura:
- **Integridad:** hashes y recuento de los DS-n.
- **Datos:** 97 comprobaciones de etiquetas y citas, agrupadas por hallazgo.
- **Familias:** `generarRutina` con el catálogo real (`permitirBorrador: true`; 1200 rutinas con semillas 1–400 y duraciones de 10, 15 y 20 min) y con un catálogo ficticio A → B → C (300 semillas).
- **Validador:** un ejercicio aprobado sin fecha y un ciclo A ↔ B, pasados por `validarCatalogo`.
- **Perfil:** el recuento de `de_pie_apoyo` combinado con `cerrar_mano`.

**Correcciones a `fase-01-protocolo.md`** (aquel archivo no se ha editado):
1. **§4, DS-33/38:** decía que podían coincidir «el primero y el último de cada cadena». También pueden coincidir el primero y el segundo; solo se excluyen el segundo y el tercero. Ya no es una inferencia: está demostrado por ejecución (C-1).
2. **§4, DS-26:** atribuía al protocolo §2.3 que «una pared no puede agarrarse». El §2.3 solo define el fundamento «estructural» («imposible por la posición»). El texto que sostiene la distinción entre pared y silla es la especificación §7.4 (C-4). Aplicar el fundamento estructural a la pared es una inferencia de Claude.

## 7. Siguiente revisión de DeepSeek

**Lo que no necesita a DeepSeek:**
- **Los errores de hecho** (DS-09, 25, 39, 27 y 42): se resuelven por inspección y ya están resueltos aquí.
- **DS-38 y DS-07:** se resolvieron ejecutando el código.
- **Las decisiones D1 a D12:** son del usuario.
- **DS-44 y 70, y DS-71 a 73:** necesitan las fuentes originales, que DeepSeek no consulta.

**Consultas previstas:**

| Id | Incertidumbre que resuelve | Contexto | Estado |
|---|---|---|---|
| **C1** `fase-01-q2-apoyo` | La decisión del usuario mantiene Q2 abierta hasta que DeepSeek revise la definición. Además, `de_pie_apoyo` no se revisó (C-2), y no se sabe si las cinco distinciones caben en las 16 exigencias (DS-35) ni si la especificación §7.4 cierra parte de Q2 (C-4) | Protocolo, especificación, registro, `opciones.js`, `validacion.js`, `motor.js`, esquema y ejercicios de pie, todos completos; la decisión Q2 literal; los encabezados literales de DS-02, 13, 26, 35, 40, 41, 67 y 72; las mediciones de Claude, marcadas como tales. Numera desde DS-77 | **Preparada y simulada; no enviada.** ≈78 800 tokens estimados y 0,038 USD como máximo por intento |
| C2 `fase-02-catalogo-sentado` (ya prevista) | Coherencia entre etiqueta e instrucción en los 88 ejercicios sentados, incluidos 6 de los 7 de C-3 | Necesita el tipo de bloque `catalogo-posicion` | Sin preparar |
| C3 `fase-04-variantes` (ya prevista) | Las cadenas de variantes, después de D6, y la coherencia de etiquetas entre la base y su variante | Las 35 variantes y sus bases | Sin preparar; mejor después de D6 |

No se propone volver a enviar los 76 hallazgos: ninguna incertidumbre lo justifica.
