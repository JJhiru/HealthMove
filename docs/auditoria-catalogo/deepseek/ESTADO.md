# Estado «Auditoría junto a DeepSeek»

Documento de coordinación de **Claude**. No contiene texto de DeepSeek: sus respuestas están, literales, en `ejecuciones/<id>/respuesta.md`.

**Procedimiento completo:** skill `auditoria-junto-a-deepseek` (`.claude/skills/auditoria-junto-a-deepseek/SKILL.md`).

- **Última actualización:** 2026-10-19 11:37 -05: Grupo 2 implementado y aceptado (§7.2), reparación del worktree (§7.2) y siguiente hallazgo, DS-28/36, a la espera de D8 (§7.3). Antes: triage de la fase 01 (ver §5 y `analisis-claude/fase-01-triage.md`).
- **Rama y commit:** `desarrollo-v1`, `defd8b0`. Sin commits nuevos: los Grupos 1 y 2 siguen sin confirmar (§7.4).
- **Catálogo:** blob `72fda34f80d2e3222eabd5c0ce583c21c83d7699`.
- **Protocolo:** 1.0.

## 1. Roles

| Quién | Hace | No hace |
|---|---|---|
| **DeepSeek** (auditor principal) | Revisa el protocolo, la especificación, el esquema, el código y el catálogo que se le envían. Propone hallazgos `DS-n` | Aprobar, decidir, modificar archivos. No consulta fuentes originales |
| **Claude** (coordinador técnico) | Prepara las fases, envía con la integración real, conserva las respuestas, **verifica en el código** lo que DeepSeek no puede y lo escribe aparte (`analisis-claude/`) | Sustituir o editar la respuesta de DeepSeek, convertir sus propuestas en decisiones, cambiar el catálogo, el protocolo, el motor o el validador sin autorización |
| **Desarrollador** | Decide | — |

## 2. Cómo se ejecuta (comandos verificados)

Siempre desde la raíz del worktree. La clave se carga con `--env-file=.env` y nunca se muestra.

```bash
cd ~/Escritorio/HealthMove/.claude/worktrees/desarrollo-v1
# Simulación: sin red ni clave. Lista lo que se envía, los tokens y el coste máximo.
HM_IA_MAX_TOKENS_ENTRADA=100000 HM_IA_MAX_TOKENS_SALIDA=16000 node scripts/auditoria-ia.mjs auditar-documentos <fase>
# Ejecución real (como mucho 2 intentos):
HM_IA_MAX_TOKENS_ENTRADA=100000 HM_IA_MAX_TOKENS_SALIDA=16000 HM_IA_PRESUPUESTO_USD=0.10 HM_IA_TIMEOUT_MS=540000 node --env-file=.env scripts/auditoria-ia.mjs auditar-documentos <fase> --ejecutar
# Si llega truncada (finish_reason «length»), se continúa como un bloque nuevo (máximo 3 bloques):
HM_IA_MAX_TOKENS_ENTRADA=200000 HM_IA_MAX_TOKENS_SALIDA=16000 HM_IA_PRESUPUESTO_USD=0.12 HM_IA_TIMEOUT_MS=540000 node --env-file=.env scripts/auditoria-ia.mjs auditar-documentos --continuar <id-ejecución> --ejecutar
```

- **Fases:** `fases/<fase>.json` (qué se envía) y `fases/<fase>.md` (la tarea).
- **Cada ejecución** se guarda en `ejecuciones/<id>/`, con `respuesta.md` (literal), `respuesta-api.json` (cuerpo HTTP exacto), `solicitud.json` y `metadatos.json` (hashes, uso, coste, `literalVerificado`).
- **Nada se sobrescribe.**

## 3. Ejecuciones

| Id | Fase | Bloque | Estado | Uso (caché / sin caché / salida) | Coste, cota superior | Literal |
|---|---|---|---|---|---|---|
| `20261019T001226Z-fase-01-protocolo` | fase-01-protocolo | 1 | truncada (`length`) | 0 / 52 690 / 16 000 | 0,0350 USD | verificado |
| `20261019T001508Z-fase-01-protocolo-bloque2` | fase-01-protocolo | 2 (continúa el 1) | **completa** (`stop`) | 68 608 / 141 / 10 123 | 0,0126 USD | verificado |

**Sobre el coste:**
- La fase 01 costó como mucho **0,0476 USD**, calculado con la tarifa punta de `scripts/ia/tarifas.mjs`.
- Las dos llamadas fueron entre las 00:12 y las 00:15 UTC del lunes, en horario valle según la documentación de DeepSeek, así que el cargo real debería ser aproximadamente la mitad. **DeepSeek no devuelve el importe cobrado**, así que no se ha podido verificar.
- Antes hubo otra llamada del desarrollador (`revisar-ejercicio`, 2026-10-18 23:08 UTC): 0,0052 USD como mucho.
- El saldo declarado era de unos 4,88 USD y no es consultable desde la herramienta.

**Respuesta completa de la fase 01:** es el bloque 1 seguido del bloque 2, en ese orden, sin unir ni editar. El bloque 1 termina en una viñeta vacía (`-`) y el bloque 2 empieza con `- **Recomendación:**`.

## 4. Clasificación de las fuentes (lo que se envía y cómo se trata)

1. **Reglas aprobadas:** el protocolo 1.0 (DG-1 a DG-8) y las decisiones fechadas de `registro.md` (2026-10-14, 2026-10-16 y P1–P4 del 2026-10-18).
2. **Decisiones del usuario confirmadas pero no incorporadas a la documentación** (2026-10-18; su texto literal está en `fases/fase-01-protocolo.md`): Q1 (`ambos_brazos` según la fuente), Q2 (contacto y prensión; **sigue abierta** hasta que DeepSeek la revise), Q3 («inclinación leve» sin umbral inventado), V7 (`revisado_por` y `fecha_revision`), V9/Q4 (variantes con respaldo verificable), la herramienta de disponibilidad y el versionado y la trazabilidad.
3. **Preguntas abiertas:** protocolo §13. Abiertas: Q1, Q2, Q3, Q4, Q5, Q7 y Q8. Resuelta: Q6.
4. **Propuestas de IA no aprobadas:** `propuestas-cierre-protocolo.md`, `plan-cambios-leicester.md`, los textos P5–P11 propuestos en la conversación (no registrados) y **todos los hallazgos `DS-n`**.
5. **Decisiones retiradas:** `registro.md`, «Propuestas retiradas». La decisión 4 fue sustituida por DG-4.
6. **Hallazgos que requieren verificación en código:** sección 5 de este documento.
7. **Cuestiones que requieren evidencia o revisión profesional:** sección 6.

## 5. Hallazgos de la fase 01

La lista completa, con su texto literal, está en los dos `respuesta.md`. Aquí solo hay **estado y verificación de Claude**.

**Documentos de Claude:**
- `analisis-claude/fase-01-protocolo.md`: el análisis inicial;
- **`analisis-claude/fase-01-triage.md`**: la matriz completa de DS-01 a DS-76, con categoría, gravedad propuesta, verificación, dependencias, decisiones D1–D12 y hallazgos propios C-1 a C-5. Corrige dos puntos del análisis inicial (su §6). **Es el documento de trabajo vigente.**

**Novedades del triage** (2026-10-19, ejecución en memoria, sin modificar nada):
- **DS-38 contradicho.** Con el catálogo real, 14 de 1200 rutinas contienen dos miembros de una misma cadena de `variante_de`. Con A → B → C coinciden A + C y A + B; solo se excluyen B y C. Ver C-1.
- **DS-07 ejecutado:** un ejercicio aprobado sin `fecha_revision` pasa `validarCatalogo`.
- **DS-33 ejecutado:** un ciclo A ↔ B también pasa. El catálogo no tiene ciclos y ningún código recorre la cadena.
- **C-2:** ningún DS revisó `de_pie_apoyo`, y la decisión Q2 lo pedía. Con `de_pie_apoyo` + `cerrar_mano` quedan 17 ejercicios de pie, y 4 no mencionan ningún apoyo.
- **C-3:** 14 ejercicios de todo el catálogo dicen «dos manos» o «cada mano» con `ambos_brazos: false`; 7 no son de pie.
- **C-4:** la especificación §7.4 ya distingue la palma contra la pared de sujetarse a la silla. DeepSeek no lo citó.

La tabla siguiente es la verificación inicial; las actualizaciones están en el triage y en §7.1–§7.3 (DS-07 está corregido desde el Grupo 2, §7.2).

**Verificados por Claude en el código y en el catálogo** (2026-10-19, en memoria, sin modificar nada):

| Hallazgo | Resultado de la verificación |
|---|---|
| DS-07, D | Confirmado: `validacion.js:95-96` solo comprueba `revisado_por` |
| DS-08, DS-24, C | Confirmado: los 8 ejercicios con `sentado,de_pie` quedan excluidos para «solo sentado». En 5 no hay secuencia; uno dice explícitamente «Siéntate… o ponte de pie» |
| DS-25, DS-39, A | **Matizado, con un error de DeepSeek:** `circulos-cadera-pie` tiene `ambos_brazos: true` en el catálogo, no `false`. Con «sujétate con las dos manos» y `false` hay 4: `elevar-puntas-pies-apoyo`, `flexion-rodilla-pie-apoyo`, `paso-atras-apoyo` y `puntillas-talones-apoyo`. `mini-sentadillas` y `elevacion-talones-apoyo` dicen «las manos», en plural y sin número. `tandem-apoyo` y `giro-tronco-pie` son de una mano |
| DS-33, DS-38 | **Agravado:** hay 3 cadenas de `variante_de` de dos niveles, y `familia()` (`motor.js:143`) solo mira un nivel. La base de la base y la variante final pueden coincidir en una rutina. DS-38 lo daba por implementado |
| DS-44, DS-70 | Hay 35 variantes; 27 tienen una URL de fuente distinta de la de su base. Comprobar que cada fuente describe la variante requiere las fuentes (pendiente) |
| DS-28 | Confirmado: el validador solo comprueba `impacto` entre las exclusiones del catálogo v1 |
| DS-03 | Confirmado: 0 notas con `[conservadora]` |
| B (cifras) | DeepSeek no pudo reproducirlas sin el catálogo completo. Claude las midió el 2026-10-18 con el mismo blob: 31, 15 y 4 |

**Pendientes de decisión del desarrollador**, según la priorización de DeepSeek (su apartado 14):
- **P1:** DS-01 (cerrar Q1–Q3 antes de aplicar cambios, o planes parciales); Q1 (DS-09, DS-25, DS-39, DS-48, DS-49, DS-50, DS-52); Q2 (DS-02, DS-13, DS-26, DS-40); Q3 (DS-12, DS-47, DS-58).
- **P2:** V7 (DS-07, DS-59, DS-65); alcance retroactivo de R2.4 (DS-03, DS-15, DS-16, DS-21); variantes e informes (DS-42, DS-44, DS-70); huellas (DS-62).
- **P3:** significado de `posiciones` (DS-08, DS-24); exclusiones en el validador (DS-28); Q2 sin cambiar el esquema (DS-35, DS-67).
- **P4:** citas de `app.js` (DS-06, DS-11); rótulo de `ambos_brazos` (DS-14); lista de perfiles de la herramienta (DS-19, DS-61); texto de Q8(b) (DS-64).
- **P5:** fuentes de Q1–Q3 (DS-71 a DS-73); revisión profesional (DS-74 a DS-76).

**Que DeepSeek da por correctos o sin acción:** DS-10, DS-20, DS-23, DS-31, DS-32, DS-37, DS-41, DS-43, DS-45, DS-46, DS-51, DS-53 a DS-56, DS-63 y DS-69.

## 6. Requiere evidencia o revisión profesional

- **Fuentes originales** de los ejercicios de pie con apoyo y de la familia `sentarse-levantarse`: Q1–Q3 (DS-71 a DS-73) y DS-22, DS-27 y DS-52.
- **Revisión profesional** (fisioterapia o rehabilitación): si el apoyo de una sola mano basta para quien solo puede usar un brazo; los avisos de seguridad (DS-75); el texto de procedencia de Q8(b) (DS-76).

## 7. Fases

| Fase | Contenido | Estado |
|---|---|---|
| `fase-01-protocolo` | Protocolo, especificación, registro, propuestas, `opciones.js`, `validacion.js`, `motor.js`, esquema y ejercicios de pie | **Revisada** (2 bloques). Hay que trasladar a decisión los hallazgos pendientes |
| `fase-01-q2-apoyo` (consulta C1) | Segunda consulta acotada: definición documental de Q2 y significado de `de_pie_apoyo`. Mismos documentos que la fase 01, salvo `propuestas-cierre`, más los dos `respuesta.md` de la fase 01 como bloques `archivo`. La tarea no copia ni resume esos informes. Numeración desde DS-77 | **Preparada y simulada; no enviada**, a la espera del desarrollador. Simulación del 2026-10-18 20:39 -05: ≈121 980 tokens de entrada **estimados** (0,5 por carácter) y una cota de 0,0510 USD por intento a tarifa punta. **Es una estimación, no una garantía**: el coste real sale del `usage`. **Ajuste de redacción pendiente:** «Revisa en ella tus propios hallazgos sobre Q2 y `de_pie_apoyo`» da a entender que DeepSeek ya revisó `de_pie_apoyo`, y no lo hizo. Una redacción neutra sería «lo que dijiste sobre Q2 y, si lo hubiera, sobre `de_pie_apoyo`». No se ha editado porque no se autorizó tocar la consulta |
| `fase-02-catalogo-sentado` (propuesta) | La misma revisión de coherencia entre etiqueta e instrucción para los 88 ejercicios sentados | **Sin preparar.** Necesita un tipo de bloque `catalogo-posicion` (cambio pequeño en `auditoria-documental.mjs`) |
| `fase-03-tumbado-suelo` (propuesta) | Ídem para los 82 de tumbado y suelo | Sin preparar |
| `fase-04-variantes` (propuesta) | Las 35 variantes y las 3 cadenas de `variante_de` | Sin preparar |

**Siguiente llamada:** `fase-01-q2-apoyo`, cuando el desarrollador lo indique. El presupuesto, 0,12 USD, cubre los dos intentos:

```bash
HM_IA_MAX_TOKENS_ENTRADA=200000 HM_IA_MAX_TOKENS_SALIDA=12000 HM_IA_PRESUPUESTO_USD=0.12 HM_IA_TIMEOUT_MS=540000 node --env-file=.env scripts/auditoria-ia.mjs auditar-documentos fase-01-q2-apoyo --ejecutar
```

### 7.1. Grupo 1: cadenas de variantes (DS-38 / C-1)

**Estado: implementado y verificado dentro del alcance revisado; sin commit.** Lo autorizó el desarrollador. **DeepSeek no ha revisado el arreglo**: la verificación es de Claude.

**Origen:**
- **DeepSeek, DS-38:** da por implementado que una variante no coincide con su original en una rutina.
- **Claude, triage C-1:** lo contradice al generar rutinas.

**Cambios atribuibles al Grupo 1**, separados del trabajo previo sin confirmar que ya había en los mismos archivos:
- **`public/js/motor.js`:**
  - `const familia = (ej) => ej.variante_de || ej.id;` se sustituye por `export function calcularFamilias(ejercicios)`, que recorre hasta la raíz, toma la base ausente como raíz y, en un ciclo, el id menor del ciclo;
  - en `generarRutina`, `const familias = calcularFamilias(original.ejercicios)` y `const familia = (e) => familias.get(e.id)`;
  - dos comentarios.
  - **No** son del Grupo 1, aunque estén en el mismo diff: el filtrado con `validarCatalogo` (`original`), `huella`, el recuento `invalidos` y los hunks iniciales del archivo.
- **`tests/motor.test.mjs`:** añadir `calcularFamilias` al import de `motor.js` y 5 tests nuevos detrás de «un ejercicio y su variante nunca aparecen…». Son anteriores, aunque estén en el mismo diff: `catalogoFalso` en el import de `ayudas.mjs`, en el mismo hunk, y el hunk de las líneas 73-85 de `HEAD`.
- **`public/sw.js`:** solo `VERSION`, de `hm-01258f69fe96` a `hm-b616665f0488`, con `npm run version-sw`. Lo confirma la copia de antes del cambio. Son anteriores: `js/validacion.js` en `PRECACHE` y el paso de `hm-7e0a3354cd23` a `hm-01258f69fe96`.
- **`package.json`:** sin cambios del Grupo 1. Su diff contra `HEAD` (+1 línea) es anterior.

**Verificación reproducida** (2026-10-18 20:39 -05, Claude, en memoria o en copias temporales):

| Comprobación | Resultado |
|---|---|
| `node --test tests/motor.test.mjs` | 20/20 |
| `npm test` | 189/189 |
| `npm run test:navegador` (navegador real) | 10/10, sin omitidas |
| `node scripts/version-sw.mjs --comprobar` | al día |
| `node scripts/auditoria.mjs validar` | 0 errores y 5 avisos |
| Oráculo independiente (componentes conexas del grafo `variante_de`), 400 catálogos aleatorios con árboles, ciclos y bases ausentes | 0 agrupaciones distintas; 0 familias que dependan del orden; en 201 rutinas, 0 con dos de la misma componente |
| Catálogo real, 900 rutinas (10/15/20 min, modo borrador) | Familias iguales que en el oráculo; 0 repeticiones |
| Mutación: lógica de un nivel | Fallan los 5 tests nuevos |
| Mutación: ciclo no determinista | Falla el test de ciclos |
| Mutación: `calcularFamilias` con el catálogo filtrado | **No falla ningún test** (limitación, abajo) |
| Comportamiento anterior, reproducido hoy con la lógica de un nivel (equivalente a la `familia()` antigua) sobre una copia temporal del motor | A → B → C: A + C en 162 y A + B en 138 de 300 rutinas; catálogo real: 14 de 1200. Son las mismas cifras que se midieron antes de implementarlo |

**Coherencia normativa:**
- A + B incumplía R5.6 («no la combina con su original») y la especificación §3.
- Que A y C sean de la misma familia es una lectura más estricta, que ninguna regla define ni contradice.

**Limitaciones:**
- Ningún test fija el caso de una cadena cuyo eslabón central es inválido y queda fuera del motor. El código usa el catálogo completo y lo trata bien, pero un cambio a la lista filtrada pasaría los tests. Añadir ese test requiere autorización.
- Las comprobaciones de esta tabla son de Claude, no de DeepSeek.

**Abierto, fuera del Grupo 1:**
- **D6, ciclos.**
  - El motor termina y asigna una familia determinista.
  - El validador acepta un ciclo A ↔ B (`validarCatalogo` devuelve `valido: true`).
  - El catálogo real no tiene ninguno.
  - Si el validador los rechazara, los datos serían coherentes, pero un ciclo dejaría inutilizables esos ejercicios en lugar de tratarlos como una familia. Lo decide el desarrollador.
- **C-5:** la ficha (`app.js:659`) muestra la base directa y las variantes directas. Es navegación, y no afecta a qué entra en una rutina. Sin cambios.
- **Grupo 2** (DS-07, DS-29, DS-65: `fecha_revision` en el validador): ver §7.2.

**Integridad, comprobada el 2026-10-18 20:39 -05:**
- los hashes de los dos `respuesta.md` coinciden con sus `metadatos.json` (`6f1f596b…` y `316aa112…`), con `literalVerificado: true` y DS-01 a DS-76 completos;
- el catálogo sigue en el blob `72fda34f`.

Después se pasaría a la `fase-02`, cuando esté preparada, y a la `fase-04`, después de la decisión D6 del triage.

**Mejora de coste anotada:** poner los documentos antes que la tarea en el mensaje, para que las fases que comparten documentos acierten en la caché. No se ha aplicado a la fase 01, para no cambiar su prefijo.

### 7.2. Grupo 2: `fecha_revision` en el validador (V7: DS-07, DS-29, DS-65)

**Estado: implementado, verificado y aceptado por el desarrollador (2026-10-19); sin commit (§7.4).** **DeepSeek no ha revisado el arreglo**: la verificación es de Claude.

**Decisión del desarrollador (opción C):** todo ejercicio cuyo estado no sea `borrador` necesita `revisado_por` y una `fecha_revision` con el formato exacto `AAAA-MM-DD` que sea una fecha real del calendario. Sin restricciones de fecha futura ni comparaciones con `fuente.consultado` o `fuente.actualizado`. **DS-59 no está autorizado:** `registro.md` no se ha tocado.

**Punto de partida, ya existente antes del Grupo 2:** `validacion.js` ya exigía que `fecha_revision` fuera un texto no vacío fuera de `borrador`, con sus pruebas (`null`, ausente, vacía, en blanco y excepción de `borrador`). Faltaban el formato y la validez de la fecha.

**Cambios atribuibles al Grupo 2:**
- **`public/js/validacion.js`** (sin seguimiento; el diff se hizo contra una copia previa):
  - `esFecha`: expresión `^(\d{4})-(\d{2})-(\d{2})$`, tabla de días por mes y regla gregoriana 4/100/400, sin `Date` (`Date.UTC` convierte los años 0–99 en 1900–1999);
  - un problema nuevo, `"fecha_revision" debe ser una fecha real con formato AAAA-MM-DD`, cuando hay texto pero no es válido. Los mensajes de «falta» no cambian.
- **`docs/especificacion-v1.md` §7.6:** cuatro viñetas: obligatoriedad fuera de `borrador`, formato y fecha real con ejemplos, excepción de `borrador` y ausencia de restricciones temporales.
- **`tests/validacion.test.mjs`:** dos mutaciones (`2026-02-30` y una marca de tiempo) y la prueba «fecha_revision fuera de borrador: formato exacto AAAA-MM-DD y fecha real del calendario» (fechas válidas, bisiestos, imposibles, otros formatos, valores que no son texto, `borrador` y problemas por separado).
- **`public/sw.js`:** solo `VERSION`, de `hm-8794d7dd14e5` a `hm-0d2499874e88`, con `npm run version-sw`. Son anteriores: `js/validacion.js` en `PRECACHE` y los valores previos de `VERSION`. No se guardó una copia de `sw.js`; la atribución procede del `git diff` previo y del manifiesto.

**Verificación** (Claude, 2026-10-19; repetida en la revisión final):

| Comprobación | Resultado |
|---|---|
| `node --test tests/validacion.test.mjs` | 52/52 |
| `npm test` | «Sin errores de estructura»; 200/200 (antes del cambio, 197/197) |
| `npm run test:navegador` | 10/10 |
| `node scripts/version-sw.mjs --comprobar` | al día |
| `node scripts/auditoria.mjs validar` | 0 errores y 5 avisos, igual que antes |
| Contraste con el validador anterior | Aceptaba `2026-02-30`, `2026-10-17T10:00:00Z` y `17/10/2026`; el nuevo los rechaza |
| Manifiesto SHA-256 de modificados y sin seguimiento | Solo cambian los cuatro archivos anteriores; `registro.md`, este archivo (hasta esta actualización), `CONTEXTO_CONTINUIDAD_CHATGPT.md`, el catálogo y los informes de DeepSeek, intactos |

**Impacto en el catálogo:** ninguno hoy. Los 220 ejercicios están en `borrador` y ninguno tiene `fecha_revision`.

**Política de años, aceptada tal cual por el desarrollador:** se aplica el calendario gregoriano proléptico: se aceptan `0000` y `0024` (con `0000-02-29`) y los días de 1582 que no existieron en la transición juliana. El desarrollador decidió no cambiarlo ni añadir restricciones.

**Reparación del worktree (2026-10-19), necesaria para aislar el trabajo:**
- **Causa:** `/home/erm` y `/var/home/erm` son el mismo subvolumen btrfs montado dos veces (sin enlace simbólico). El worktree se creó con rutas `/home/...` y Claude Code trabaja con `/var/home/...`, así que el guard de aislamiento no lo reconocía como worktree enlazado.
- **Arreglo, autorizado:** `git worktree repair <ruta /var/home>` desde el worktree principal. Reescribió solo el `.git` del worktree y `.git/worktrees/desarrollo-v1/gitdir` (`/home` → `/var/home`), con copias byte a byte previas.
- **Comprobado después:** HEAD, rama, referencias, índice, `status --porcelain=v2`, `git diff --binary`, manifiesto de 74 archivos y hash de `.env` idénticos. Git funciona por ambas rutas.

### 7.3. Siguiente hallazgo: DS-28 (DS-36 es su duplicado), a la espera de D8

**Por qué es el siguiente:** en el §5.1 del triage, los apartados 1 y 2 dependen de decisiones del desarrollador (D1–D5, D9, D11) y, en el apartado 3, después de las familias (Grupo 1) y de V7 (Grupo 2) vienen las exclusiones del validador. DS-33 (ciclos) depende de D6.

**Verificación de Claude (2026-10-19, solo lectura):**
- **Confirmado:** `problemasEjercicio` solo comprueba `impacto` entre las exclusiones de la especificación §4, que dice «ningún ejercicio las incluye».
- **Matiz no recogido por DeepSeek ni por el triage:** el material especial ya queda bloqueado si se declara en `recursos`, porque es una lista cerrada (silla, pared, cama, banda, peso ligero, toalla).
- **Cribado por palabras clave de los 220 ejercicios:** `impacto === true` en 0; sin términos de cuello, rodillas en el suelo ni material especial. 7 coincidencias son falsos positivos («sin saltar», muñecas dentro de otro movimiento, adaptaciones que retiran el reposabrazos de la fuente). **Caso límite:** `paso-atras-apoyo` («Da un paso atrás con un pie y vuelve», en `borrador`). Parece un paso en el sitio, no un desplazamiento; clasificarlo es tarea de la auditoría.
- **Impacto:** ningún incumplimiento confirmado hoy. El riesgo es que un ejercicio nuevo con esas características pase el validador.

**Decisión pendiente, D8:** (a) dejar las exclusiones a la auditoría documental (como mucho, anotar en la §4 qué comprueba el validador); (b) comprobar en el validador las que se puedan expresar por palabras clave, con riesgo de falsos avisos. Propuesta de Claude: (a). **Sin cambios de código hasta que se decida.**

### 7.4. Commit pendiente de decisión

No hay ningún commit de los Grupos 1 y 2. Probado en extracciones limpias de `HEAD` (`git archive`, fuera del repositorio):
- **Solo los archivos del Grupo 2** (especificación, `validacion.js`, `validacion.test.mjs`, `sw.js`): commit roto. `version-sw --comprobar` falla, `validacion.test.mjs` no carga (falta `catalogoFalso` en `tests/ayudas.mjs`) y en `HEAD` nadie importa `validacion.js`.
- **Conjunto coherente mínimo, 11 archivos:** los anteriores más `motor.js`, `app.js`, `perfil.js`, `almacen.js`, `scripts/validar-catalogo.mjs`, `tests/ayudas.mjs` y `tests/motor.test.mjs`. `version-sw` al día, catálogo válido, 101/101. Incluye el Grupo 1 y unas 420 líneas de trabajo previo sin confirmar.
- **Opciones:** (a) commit de esos 11 archivos; (b) solo los 4 del Grupo 2, aceptando un commit roto; (c) aplazarlo hasta revisar el trabajo previo. Lo decide el desarrollador.

## 8. Condiciones para considerar revisada una fase

1. Una respuesta **completa** (`finish_reason` «stop»), en uno o más bloques encadenados, con `literalVerificado: true` en todos.
2. Hashes de `respuesta.md` iguales a los de `metadatos.json`.
3. Análisis de Claude escrito aparte, con lo verificado en el código y lo que no se ha podido verificar.
4. Hallazgos trasladados a este documento: verificados, pendientes de decisión o sin acción.

Una fase revisada **no se repite** salvo que cambien sus fuentes (otro hash de un bloque), se pida una segunda opinión o haya otro motivo documentado.
