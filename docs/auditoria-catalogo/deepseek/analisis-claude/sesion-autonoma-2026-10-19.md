# Sesión autónoma de resolución de la auditoría · 2026-10-19

> **Informe de Claude.** No sustituye a `ESTADO.md` ni a `CONTEXTO_CONTINUIDAD_CHATGPT.md`: por instrucción del desarrollador, no se tocaron en esta sesión y quedan por actualizar con lo que hay aquí. No cierra la auditoría.
>
> **Sesión:** de 13:52 a 14:22 (-05). Se terminó antes del límite porque se agotó la cola que se puede resolver sin decisiones nuevas. Límite autorizado: 3 h. Rama `desarrollo-v1`, worktree `/var/home/erm/Escritorio/HealthMove/.claude/worktrees/desarrollo-v1`.

## 1. Viabilidad (respuesta dada al empezar)

- **Sin supervisión** se puede: reconstruir la cola, reproducir y clasificar hallazgos, reunir evidencia de las fuentes, consultar a DeepSeek en las fases previstas, implementar herramientas o pruebas que se desprendan de decisiones ya tomadas y verificar en extracciones limpias.
- **Necesitan una decisión nueva:**
  - criterios normativos: D1 a D12 y Q1 a Q8;
  - cualquier cambio del catálogo, y DS-59;
  - editar el protocolo;
  - el commit de un trabajo previo cuyo origen no se ha verificado.
- **Dependen de servicios externos:** DeepSeek (red, clave, saldo y truncado) y las fuentes web (una devolvió 403).
- **No caben en 3 h:** auditar el catálogo ejercicio a ejercicio, la revisión profesional y las fases 02 a 04 completas.
- **Entorno:** trabajo en segundo plano gestionado por el servicio de Claude Code (`backend: daemon`), que no depende de la terminal.

## 2. Estado de Git

| | Inicio (13:52) | Final |
|---|---|---|
| Rama · HEAD | `desarrollo-v1` · `defd8b0` | Igual |
| Índice | Vacío | Vacío |
| Referencias (`for-each-ref`) | 2 | Idénticas: **ningún commit** |
| Modificados (versionados) | 11 | 11, los mismos |
| Manifiesto (modificados y sin seguimiento) | 75 archivos | 88; diferencias en §5 |

## 3. Hallazgos revisados

Clasificación: confirmado, parcial, refutado, ya resuelto, duplicado, indeterminado o bloqueado.

| Id | Clasificación | Evidencia | Resultado |
|---|---|---|---|
| **Grupo 1, limitación** («ningún test fija el eslabón central inválido») | **Ya resuelto** | `tests/motor.test.mjs:166` existe. Mutación `calcularFamilias(catalogo.ejercicios)` en una copia: falla `not ok 13`; sin mutar, 21/21 | La limitación de `ESTADO.md` §7.1 y del contexto está desactualizada |
| **Grupos 1 y 2, integración** | Verificado | Suite 209/209, navegador 10/10 | Sin regresiones |
| **C1 (Q2, `de_pie_apoyo`)**: DS-77 a DS-96 | Ver `fase-01-q2-apoyo.md` | Motor real con los perfiles citados | Confirmados: DS-77/83/84/85/86/87/92. Parciales: DS-80/81/88/89/90. Refutado en la consecuencia: DS-82. Conclusión correcta con dato erróneo: DS-91. Error en la lista de la medición 3 |
| **DS-02, 13, 26, 35, 40, 67, 72, C-2, C-4** (Q2) | **Bloqueado (D2)**, con evidencia nueva | C1 y fuentes: 8 de los 9 casos neutros dicen *rest/place/leaning/apoyado* | Pregunta D2 en §7 |
| **DS-93, DS-94, DS-96** | Evidencia reunida (parcial) | `evidencia-fuentes-q1-q2.md` §2 a §4 | 3 de los 4 «sin apoyo» se hacen de pie sin apoyo en su fuente; CDC devolvió 403 |
| **DS-09, 25, 39, 48-50, 52, 71, C-3** (Q1) | **Bloqueado (D3)**, con evidencia nueva | §4 y §4 bis | Solo `paso-atras-apoyo` pide «both hands» en la fuente; Wolverhampton admite «one or both»; Vivifrail y CSP no dan número. Las 5 de banda son «one end in each hand» (fieles). `elevaciones-laterales-botella` es unilateral en la fuente y bilateral en HealthMove, sin `adaptaciones` |
| **DS-12, 47, 58, 73** (Q3) | **Bloqueado (D11)**, con evidencia nueva | §4 ter | Base y variante «sin manos» usan el mismo término en la fuente («slightly») y tienen etiquetas opuestas; ninguna fuente da ángulo |
| **DS-22** | Indeterminado | NHS: «using your legs, not arms» / «just to guide you» | Depende de Q2 (apoyo opcional) |
| **DS-27** | **Refutado en 9 de 11** | §4 quater: la fuente describe la ejecución sin apoyo o con las manos ocupadas | Abiertos: `sentarse-levantarse` y `banda-elevar-brazos-pie` |
| **DS-44 / DS-70** | **DS-70 verificado; el riesgo de DS-44, refutado** | `variantes-ds44-ds70.md`: las 35 variantes están en su fuente | Detalle: `marcha-sitio-apoyo` hace obligatorio un apoyo opcional y lo explica en `notas_etiquetado`, no en `adaptaciones` |
| **DS-61** | **Hecho** (la herramienta) | Decisión literal del desarrollador en `fases/fase-01-protocolo.md` | `scripts/disponibilidad.mjs`. El protocolo §9 sigue diciendo «no hay script» |
| **DS-66** | **Reproducido** | Herramienta + escenario declarado | Ejercicios de pie con `de_pie_apoyo` + `un_brazo`: 31 / 20 / 0 |
| **DS-68** | Parcial | 31 reproducido | 15 y 4 dependen de una búsqueda de texto no documentada; con `dos manos/las manos/palmas/cada mano/ambas manos` salen 13 |
| **DS-19** (D10) | Bloqueado | R9.1 fija 2 de las 4 familias de perfiles | Propuesta medida en §7 |
| **DS-05 / DS-17** (Q5) | Inventario hecho | 85 ejercicios con `adaptaciones` (90 entradas, 13 en variantes); unas 17 cambian la ejecución o el rango (clasificación orientativa por palabras clave), 50 son de dosis o lagunas y 18 quedan sin clasificar. Ningún lote aplica R3.1 | Alcance de D9. Candidato a revisar frente al principio 6: `tobillos-punta-talon-sentado` («…para que no exija agarre») |
| **DS-18** | **Hecho** (documentado) | `herramientas.md`: procedimiento de R7.9 con `pdftotext -layout` y `pdftoppm`, comprobado en un PDF de 3 columnas | El protocolo sigue sin nombrar herramienta |
| **DS-28 / DS-36** | Confirmado; bloqueado (D8) | Turno anterior: solo `impacto` y la lista cerrada de `recursos`; 0 incumplimientos y 1 caso límite | Sin cambios |
| **DS-33** | Bloqueado (D6) | — | — |
| **DS-06** | Confirmado; bloqueado (edición del protocolo) | `app.js:621` en HEAD; 690 en la copia de trabajo | Citar `vistaEjercicio` por función |
| **DS-11** | Confirmado; bloqueado (decisión de texto) | Especificación §5 «sentado/a» frente a `opciones.js:12` «en una silla o silla de ruedas» | — |
| **C-5** | Bloqueado | `app.js:659` | Decisión de interfaz |
| **DS-03, 15, 16, 21, 30** | Bloqueado (D4) | — | Los 9 casos neutros de Q2 son otro ejemplo de `true` sin `[conservadora]` |
| **DS-08, 24, 34** | Bloqueado (D5) | — | — |
| **DS-14, 57, 64, 76** | Bloqueado (D12, `healthmove-safety-reviewer`) | — | — |
| **DS-60, 62** | Bloqueado (registro y protocolo) | — | — |
| **DS-59** | No autorizado | — | Sin tocar |
| **DS-74, 75** | Requieren un profesional | — | — |
| **Commit de los Grupos 1 y 2** | Bloqueado (decisión) | §6 | — |

## 4. Contradicciones resueltas y decisión que autorizó cada cambio

- **DS-61 / protocolo §9:** el protocolo dice que la herramienta es una «propuesta pendiente», pero la decisión del desarrollador (literal, en `fases/fase-01-protocolo.md`) la aprueba. Manda la decisión. Se construyó la herramienta y no se editó el protocolo, porque eso requiere autorización.
- **Grupo 1:** la limitación anotada ya no existía; se verificó con una mutación. No hizo falta cambiar nada.
- **DS-44 frente a R5.4/R5.6:** la diferencia entre 3 y 35 no es una contradicción; las 35 tienen fuente.
- **Ninguna contradicción normativa se resolvió eligiendo una versión.** Las de Q1, Q2 y Q3 quedan con evidencia, para decidir.

## 5. Cambios realizados

| Archivo | Tipo | Motivo |
|---|---|---|
| `scripts/disponibilidad.mjs` | Nuevo | Herramienta de impacto en la disponibilidad (decisión del desarrollador; DS-61) |
| `tests/disponibilidad.test.mjs` | Nuevo | 9 pruebas: cuentas iguales al motor, modo auditoría, escenario en memoria sin tocar la entrada, rechazo de entradas inválidas (también ids repetidos, que se desmarcarían al conmutar), la CLI no modifica el catálogo, código 2 sin traza |
| `docs/auditoria-catalogo/herramientas.md` | Modificado | Fila de la orden, nota de origen y reproducción de DS-66; procedimiento de R7.9 (DS-18) |
| `docs/auditoria-catalogo/deepseek/fases/fase-01-q2-apoyo.md` | Modificado | Solo la frase sesgada señalada en `ESTADO.md` §7, antes de enviar C1 |
| `deepseek/analisis-claude/fase-01-q2-apoyo.md` | Nuevo | Análisis de Claude de C1 |
| `deepseek/analisis-claude/evidencia-fuentes-q1-q2.md` | Nuevo | Citas literales de las fuentes para Q1, Q2, Q3 y DS-27, con hashes |
| `deepseek/analisis-claude/variantes-ds44-ds70.md` | Nuevo | Respaldo de las 35 variantes |
| `deepseek/analisis-claude/sesion-autonoma-2026-10-19.md` | Nuevo | Este informe |
| `deepseek/ejecuciones/20261019T185547Z-…` y `…185654Z-…-bloque2/` | Nuevos | Generados por `auditoria-ia.mjs` (respuesta literal, cuerpo HTTP, solicitud y metadatos). No editados |

**Sin tocar:** el catálogo (sin diff), `registro.md` (mismo SHA-256), `ESTADO.md`, `CONTEXTO_CONTINUIDAD_CHATGPT.md` (sin cambios frente al manifiesto de inicio), `validacion.js`, la especificación, el protocolo y los informes de DeepSeek anteriores (`6f1f596b…` y `316aa112…`).

## 6. Pruebas y verificaciones (ejecutadas en esta sesión)

| Orden | Resultado |
|---|---|
| `node --test tests/disponibilidad.test.mjs` | 9/9 |
| Mutaciones de la herramienta, sobre una copia | Sin `structuredClone` falla 1; con borradores excluidos por omisión fallan 3 |
| `npm test` | «Sin errores de estructura»; **209/209** (200 al empezar + 9) |
| `npm run test:navegador` | **10/10** |
| `node scripts/version-sw.mjs --comprobar` | Al día (la herramienta está fuera de `public/`) |
| `node scripts/auditoria.mjs validar` | 0 errores y 5 avisos (los de siempre) |
| Extracción limpia: HEAD + los 11 archivos coherentes de los Grupos 1 y 2 + `scripts/auditoria/entradas.mjs` + la herramienta y su prueba | `version-sw` al día, catálogo válido, **110/110** |

**Commit: no se ha creado.**
- El Grupo 2 no se puede versionar solo: `validacion.js` entero está sin versionar, y en HEAD nadie lo importa.
- El conjunto coherente arrastra unas 420 líneas de trabajo previo de origen no verificado (contexto, C.1, bloque 2).
- La herramienta depende de `scripts/auditoria/entradas.mjs`, que forma parte del conjunto de 20 archivos de auditoría que `herramientas.md` §4 dice versionar juntos.
- Por la regla del desarrollador, queda pendiente.

## 7. Consultas a DeepSeek

| Consulta | Motivo | Resultado | Coste (cota superior) | Respuesta literal |
|---|---|---|---|---|
| C1 `fase-01-q2-apoyo` | La decisión del usuario mantiene Q2 abierta «hasta que DeepSeek haya revisado…». DS-02 es crítico. Era la siguiente llamada prevista | Bloque 1 truncado (`length`) y continuación completa (`stop`); DS-77 a DS-96; literalidad y hashes verificados | 0,0371 + 0,0090 = **0,0461 USD** | `ejecuciones/20261019T185547Z-fase-01-q2-apoyo/respuesta.md` (`84c4a24e…`) y `…185654Z-…-bloque2/respuesta.md` (`c5d4a11e…`) |

No se hicieron más consultas: el resto se resolvía con el código, las fuentes o el registro.

## 8. Decisiones humanas pendientes

Cada una, independiente:

1. **Commit.** ¿Se versiona el conjunto coherente de 11 archivos de los Grupos 1 y 2, que incluye ~420 líneas de trabajo previo, o se revisa antes ese trabajo previo?
2. **Commit de la herramienta.** ¿Se versiona `scripts/disponibilidad.mjs` con su prueba junto con el conjunto de auditoría de `herramientas.md` §4, del que depende (`entradas.mjs`)?
3. **D2 (Q2).** Con C1 y las fuentes, ¿qué opción, de la A a la E de DeepSeek (o otra), se adopta para el caso neutro? Dato clave: 8 de los 9 ejercicios de pie con `agarre: true` y sin prensión explícita usan en la fuente *rest/place/leaning/apoyado*.
4. **D3 (Q1).** Con las citas de §4 y §4 bis, ¿el apoyo bilateral y el trabajo simultáneo de los dos brazos cuentan como `ambos_brazos`? Escenarios medidos con la herramienta: 31, 20 o 0 ejercicios de pie para `de_pie_apoyo` + `un_brazo`.
5. **D11 (Q3).** ¿Se incorpora al protocolo y a la especificación el texto de Q3 ya decidido? Dato: la base y la variante «sin manos» dicen «slightly» en la fuente y tienen etiquetas opuestas.
6. **D10.** ¿Se aprueba una lista para «posición con dos opciones» y «solo sentado con tres opciones»? Propuesta de Claude, medida en modo auditoría:

   | Perfil propuesto | Compatibles (de pie) |
   |---|---|
   | `de_pie_apoyo` + `un_brazo` | 171 (31) |
   | `de_pie_apoyo` + `cerrar_mano` | 135 (17) |
   | `de_pie_apoyo` + `peso_manos` | 203 (36) |
   | `de_pie_apoyo` + `equilibrio` | 197 (27) |
   | `solo_sentado` + `un_brazo` + `cerrar_mano` + `brazo_arriba` | 47 |
   | `solo_sentado` + `un_brazo` + `cerrar_mano` + `peso_manos` | 52 |

7. **Protocolo.** ¿Se autoriza editarlo para tres cosas: (a) el estado de la herramienta en §9 y §14; (b) la cita de `app.js:621` → `vistaEjercicio` (DS-06); (c) nombrar el procedimiento de R7.9 (DS-18)?
8. **`ESTADO.md` y contexto de continuidad.** ¿Se autoriza actualizarlos con este informe? Incluye retirar la limitación del Grupo 1, que ya no existe.
9. **D8, D6, D4, D5, D9, D12 y DS-11/C-5:** siguen como en el turno anterior; no hay datos nuevos que cambien sus opciones, salvo el inventario de D9 (§3).

## 9. No revisados

- **DS-44/70 en profundidad** (etiquetas, adaptaciones e imágenes de cada variante): fase-04.
- **Las imágenes de los PDF**, salvo la página 5 de Worcestershire (R7.x).
- **`manos-espalda-codo-contrario`:** CDC devolvió 403.
- **`press-encima-cabeza-sentado`:** no se localizó en el texto de Moving Medicine.
- **Fases 02 y 03 con DeepSeek:** sin preparar; necesitan el bloque `catalogo-posicion`.

## 10. Orden recomendado para seguir

1. Decidir el commit (§8.1 y §8.2).
2. Autorizar la actualización de `ESTADO.md` y del contexto con este informe.
3. D2, con C1 y la evidencia de §2 y §3 de `evidencia-fuentes-q1-q2.md`; después, D3 con §4 y §4 bis. Es el orden del triage: Q2 antes que Q1.
4. D10, con la tabla de §8.6, para que los planes de cambios de Q1 y Q2 se midan con la herramienta.
5. D11 (Q3) y, con ella, un plan para la familia `sentarse-levantarse`.
6. Las ediciones del protocolo (§8.7) en su próxima versión.
