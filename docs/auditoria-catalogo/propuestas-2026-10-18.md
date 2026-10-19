# Propuestas pendientes de aprobación (2026-10-18)

- **Qué son:** propuestas, no decisiones.
- **Qué no cambian:** el protocolo, el registro, la consolidación ni el catálogo.
- **Estado:** todas pendientes hasta que el desarrollador las apruebe y se anoten en `registro.md`.

## P1. `fuente.especifica_de` en dos ejercicios de Leicester

### Textos citados

**Regla vigente** (`protocolo.md:327-329`, R8.1):

> **R8.1.** `fuente.especifica_de` solo se rellena con la población que la fuente declara. No se infiere ni se inventa.
> - Se escribe como un nombre breve de población, coherente con los valores existentes («párkinson», «amputación por debajo de la rodilla», «dolor lumbar»…).
> - Si la fuente adapta un paso a una situación concreta (por ejemplo, «la pierna que queda» en Leicester) y HealthMove lo generaliza, eso es una **adaptación** y va a `adaptaciones`, no dentro de `especifica_de`.

**Antecedentes:**
- `registro.md:27-30`, «Corrección (2026-10-16)»: «Solo `estiramiento-isquiotibiales-sentado` habla de «la pierna que queda». `inclinacion-lateral-brazo-arriba` menciona la amputación solo como motivo del estiramiento».
- `revision-critica-protocolo.md:131-136`, H12.

**Estado actual en el catálogo:** ninguno de los dos ejercicios tiene `especifica_de`. Las propuestas de la consolidación no se aplicaron.

**Efecto en el motor:** ninguno. El motor no lee `especifica_de` (R8.2). Solo lo muestra la interfaz, Q8(b): `app.js:621` en `HEAD` y `app.js:690` en la copia de trabajo, que tiene cambios sin confirmar. El protocolo cita la 621. Ninguna opción cambia la compatibilidad ni la disponibilidad.

### P1.a. `estiramiento-isquiotibiales-sentado`

**Fila de la consolidación** (`consolidacion-lotes-1-5.md:89`): valor propuesto «usuarios de silla de ruedas; el ejercicio está escrito para la pierna que queda tras una amputación», con estado «DOC (aprobado)».

**Por qué choca con R8.1:**
- Mezcla en un mismo campo la población declarada («usuarios de silla de ruedas») con una condición propia del ejercicio.
- No es un nombre breve de población.
- Según R8.1, la generalización de «la pierna que queda» pertenece a `adaptaciones`.
- «Aprobado» en la consolidación significa que el cambio está cubierto por la decisión 3. Esa decisión se corrigió el 2026-10-16.

**Opciones:**

| Opción | Cambio | Consecuencias |
|---|---|---|
| A | `especifica_de` «usuarios de silla de ruedas», como en los otros 10. Si las instrucciones de HealthMove sirven para cualquier pierna, una adaptación en `adaptaciones` lo explica para el usuario | Cumple R8.1 y la corrección del registro. El usuario ve la población y, si existe, la adaptación. Antes hay que comprobar con la fuente si HealthMove generaliza el ejercicio (lote 2) |
| B | Dos poblaciones (silla de ruedas y amputación) | El campo admite un solo texto. Necesita un cambio de formato o de esquema (B-M, Q7, protocolo §14). Además, «por debajo de la rodilla» solo puede escribirse si la fuente lo declara |
| C | Conservar el texto compuesto | Exige cambiar R8.1, es decir, el protocolo. No se recomienda |

### P1.b. `inclinacion-lateral-brazo-arriba`

**Fila de la consolidación** (`consolidacion-lotes-1-5.md:90`): valor propuesto «usuarios de silla de ruedas; el ejercicio menciona la amputación», con estado «DOC (aprobado)».

**Por qué choca con R8.1:**
- Añade a la población una mención que no es una población.
- Según el registro, la amputación aparece solo como motivo del estiramiento. Tampoco es una adaptación.

**Opciones:**

| Opción | Cambio | Consecuencias |
|---|---|---|
| A | `especifica_de` «usuarios de silla de ruedas». La mención de la amputación queda en el informe del lote 2 y, si se quiere, en `notas_etiquetado` | Cumple R8.1. No se pierde la trazabilidad |
| B | Añadir «amputación» como población | Sería una inferencia: la fuente no declara que este ejercicio esté destinado a ese grupo. Choca con R8.1 |
| C | Conservar el texto compuesto | Exige cambiar R8.1 |

**Recomendación del auditor para los dos ejercicios:** la opción A. Su aplicación al catálogo necesita un plan concreto aprobado (protocolo, principio 1).

## P2. Final del mensaje de interfaz de la decisión 3

**Original:** mensaje del desarrollador del 2026-10-14 a las 19:34, en la transcripción local de Claude Code de esa sesión (identificador `bb6a0481-…`, línea 1785; no forma parte del repositorio). Texto literal de la parte que afecta a la interfaz:

> Además, revisa cómo comunicar esta información en la interfaz. Quiero que el usuario pueda entender que **puede hacer estos ejercicios de todas formas**, siempre que las instrucciones y las adaptaciones documentadas permitan considerar esa opción.
>
> No conviertas esa frase en una garantía universal de seguridad. La interfaz debe explicar que el folleto está dirigido a un

**Qué se ha comprobado:**
- El bloque pegado termina ahí. **El texto ya estaba cortado en origen**: no hay ninguna versión completa en las transcripciones ni en Git. El registro lo incorporó cortado desde `c9a710b`.
- **Lo que falta:** cómo termina la frase «La interfaz debe explicar que el folleto está dirigido a un…» y cualquier indicación posterior.
- **Diferencia con el registro:** `registro.md:26` resume la intención como «puede considerar el ejercicio». El original dice «puede hacer estos ejercicios de todas formas», con la condición citada arriba.

**Se necesita:** que el desarrollador complete la frase. No se propone ningún texto.

## P3. Huella por ejercicio (protocolo, 10.2 y §14)

**Lo implementado:** `huella()` en `scripts/auditoria/informes.mjs`, mostrada por `node scripts/auditoria.mjs cabecera`.
- Calcula el SHA-256 de `JSON.stringify(ejercicio)`, en el orden de claves y listas del archivo, recortado a 16 caracteres hexadecimales.
- Su comportamiento está fijado en `tests/auditoria-huella.test.mjs`:

| Cambio | ¿Cambia la huella? |
|---|---|
| Ninguno | No |
| Etiqueta, instrucción, dosis, `notas_etiquetado`, `fuente.url` o `fuente.consultado` | Sí |
| Evidencia del informe (página, cita) | No: la evidencia no está en el catálogo |
| Decisión en `registro.md` | No |
| `validacion.estado` o `revisado_por` | Sí, aunque el contenido sea el mismo |
| Orden de claves o de listas usadas como conjunto (`fases`) | Sí, aunque el significado sea el mismo |

**Tres huellas distintas, que no son equivalentes:**

| Huella | Responde a | Contenido propuesto | Estado |
|---|---|---|---|
| **De compatibilidad** | ¿Puede haber cambiado a quién ofrece el motor este ejercicio? | Lo que leen `motivosIncompatibilidad` y `estadoUtilizable`: `exigencias`, `posiciones`, `recursos` y `validacion.estado`. Las listas se tratan como conjuntos | No existe |
| **De contenido** | ¿Ha cambiado lo que se auditó? | Todos los campos del ejercicio salvo los de gestión de `validacion`, en forma canónica: claves ordenadas, listas usadas como conjunto ordenadas y `instrucciones` en su orden | No existe. La literal actual se acerca, pero da falsos cambios por el orden y por `validacion` |
| **De auditoría** | ¿Es esta la misma auditoría? | Huella de contenido + versión del protocolo + texto del apartado del ejercicio en el informe + fecha de consulta de la fuente + fila del registro | No existe |

**Texto propuesto para el protocolo** (no aplicado):
- **10.2:** sustituir «Propuesta (sin implementar en código)» por «`node scripts/auditoria.mjs cabecera` registra la versión, el commit y el identificador git del catálogo, y una huella literal por ejercicio (ver §14)».
- **§14:** sustituir la fila «Huella por ejercicio…» por: «Huella literal por ejercicio: implementada como herramienta de solo lectura (2026-10-18). No equivale a una huella de contenido canónica, de compatibilidad ni de auditoría; decidir cuáles se adoptan y para qué».

## P4. Una sola copia de la skill y de las instrucciones

**Lo verificado** arrancando `claude -p` desde cada sitio:

| Arranque | Skill que se carga | `CLAUDE.md` |
|---|---|---|
| `.claude/worktrees/desarrollo-v1` | La de `desarrollo-v1` (352 líneas, protocolo 1.0) | El del worktree |
| Raíz (`main`) | La de `main` (212 líneas, 2026-10-14, anterior al protocolo) | Ninguno |

- Las dos copias de `auditar-catalogo-ejercicios` y el `CLAUDE.md` están sin seguimiento en Git.
- Las otras cuatro skills de HealthMove son idénticas en las dos ubicaciones.

**Propuesta:**
1. **Fuente canónica:** `.claude/skills/auditar-catalogo-ejercicios/SKILL.md` de `desarrollo-v1`, versionada con un commit del desarrollador junto con `CLAUDE.md`.
2. **Copia de `main`:** apartarla (moverla fuera de `.claude/skills`, por ejemplo a una copia de seguridad) en lugar de borrarla.
   - Mientras siga ahí, abrir Claude desde la raíz usa instrucciones anteriores al protocolo.
   - Cuando la skill esté versionada en `desarrollo-v1`, un merge a `main` fallará con «untracked working tree files would be overwritten».
   - Es una acción sobre `main`: la hace el desarrollador.
3. **Para evitar divergencias:**
   - Un único archivo versionado.
   - El test «la skill, CLAUDE.md y el protocolo no divergen» (`tests/auditoria.test.mjs`) comprueba que la versión del protocolo citada en la skill es la vigente y que las órdenes citadas existen.
   - Abrir Claude desde el worktree mientras `main` no tenga la versión nueva.

---

# Seguimiento tras las decisiones del 2026-10-18

Las decisiones están en `registro.md`, «Decisiones del desarrollador (2026-10-18)». Lo que sigue es su desarrollo. Ningún apartado cambia el catálogo.

## P1. Resolución por fila según la fuente

**Fuente consultada el 2026-10-18:**
- URL declarada en el catálogo: `https://www.csp.org.uk/system/files/documents/2018-09/leicester_seated_exercise_booklet_0.pdf`.
- PDF de 5 páginas, modificado el 2018-09-13. SHA-256: `f9e114cc95e655363a21afb2740712924b3fba7d96a7393b2b238111a54f8907`.
- La página 2 del PDF (páginas impresas 2 y 3) se revisó en texto y en imagen, porque está a dos columnas (R7.9).

**Evidencia común** (introducción, página impresa 2, D, texto):
- «These exercises are designed to allow you to exercise and keep your joints moving and strong whilst you maybe using a wheelchair. They can all be done in sitting in either a wheelchair, normal chair or whilst sitting on the edge of the bed».
- La fuente declara el folleto para quien puede estar usando una silla de ruedas. Además, ella misma permite hacer los ejercicios en una silla normal o en el borde de la cama: no los limita a ese grupo, en línea con R8.3.

### `estiramiento-isquiotibiales-sentado` (consolidación, fila 89)

| Detalle | Evidencia | Resolución propuesta (pendiente de plan) |
|---|---|---|
| Población | Introducción común (D, texto) | `especifica_de` «usuarios de silla de ruedas», respaldado. Alternativa más literal, a elegir: «personas que pueden usar silla de ruedas» |
| Amputación | Ejercicio 3, página impresa 3: «Stretch your remaining leg out in front of you…» y «Repeat 3 -5 times on your remaining leg» (D, texto). La foto muestra a una persona en silla de ruedas con una pierna extendida (D, imagen) | Es la adaptación de un paso a una situación concreta, no una población (R8.1). **No va a `especifica_de`** |
| Diferencia con HealthMove (C3) | HealthMove dice «Estira una pierna…», «Cambia de pierna» y «3 veces con cada pierna», y `adaptaciones` está vacío | HealthMove generaliza «la pierna que queda». Hay que documentarlo como adaptación en `adaptaciones` (R8.1, DG-3), con un plan aprobado |
| Diferencia menor (C3) | La fuente: «Either rest your heel on the floor or on a small stool or step if one is available». HealthMove: «con el talón en el suelo» | Es una aclaración posible hacia la fuente. Sin decidir |

### `inclinacion-lateral-brazo-arriba` (consolidación, fila 90)

| Detalle | Evidencia | Resolución propuesta (pendiente de plan) |
|---|---|---|
| Población | Introducción común (D, texto) | `especifica_de` «usuarios de silla de ruedas», respaldado (con la misma alternativa literal) |
| Amputación | Ejercicio 2, página impresa 3: «these muscles get tight quickly when you have had an amputation» | Es el motivo del estiramiento, dirigido a quien ha tenido una amputación. Es un **indicio (I)** de que el folleto se dirige también a esas personas, no una declaración de población para este ejercicio. Según P1, **no se rellena**. Los pasos no dependen de la amputación («Repeat 3- 5 times on each side») |
| Diferencia menor (C3) | La fuente: «place you right hand on your hip or on the arm of the chair». HealthMove: «apoya la mano derecha en la cadera» | Es una aclaración posible. Sin decidir |

### Los otros 9 ejercicios de Leicester (consolidación, fila 88)

- La fila 88 proponía «usuarios de silla de ruedas» para los 11 a la vez.
- Según P1, **no se rellena por defecto**: cada uno necesita su propia comprobación de que el ejercicio está en este folleto. La introducción cubre «These exercises».
- Los lotes 2 a 4 ya localizaron cada ejercicio. Falta un plan con la ubicación de cada uno.

## P2. Estado

- Aprobada como aclaración. El texto está en `registro.md`.
- **Cambio frente al primer borrador, tras `healthmove-safety-reviewer`:**
  - «si las exigencias… encajan con sus restricciones de movimiento» pasa a «cuando sus exigencias, instrucciones y adaptaciones documentadas son compatibles con las restricciones que ha indicado».
  - Motivo: la compatibilidad la decide el filtro determinista sobre las restricciones declaradas (R8.2), no la persona por su cuenta. La ausencia de una dificultad declarada no demuestra una capacidad.
- No se ha añadido ningún aviso nuevo sobre síntomas ni sobre consultar a un profesional: necesitaría validación profesional (§8.4).
- Sigue pendiente: el texto concreto de la interfaz y dónde se muestra (Q8(b)).

## P3. Especificación de las tres huellas (sin implementar)

Reglas comunes:
- SHA-256 completo (64 caracteres hexadecimales) para guardar; un prefijo de 16 solo para mostrar.
- Serialización canónica:
  - claves ordenadas en todos los niveles;
  - textos en Unicode NFC;
  - **listas que el motor usa como conjunto** (`fases`, `posiciones`, `recursos`) ordenadas y sin duplicados;
  - **listas con orden propio** (`instrucciones`, `adaptaciones`) en su orden.
- Cada huella lleva un prefijo de tipo y de versión (por ejemplo, `hc1:`), para que dos huellas de distinto tipo no se confundan nunca.

| | **Compatibilidad** (`hc1`) | **Contenido** (`hco1`) | **Auditoría** (`ha1`) |
|---|---|---|---|
| Pregunta | ¿Puede haber cambiado a qué perfiles ofrece el motor el ejercicio? | ¿Ha cambiado lo que se auditó? | ¿Es exactamente la misma auditoría? |
| Entra | `exigencias` (las 16, con su valor), `posiciones`, `recursos` y `validacion.estado`: lo que leen `motivosIncompatibilidad` y `estadoUtilizable` (`motor.js:55-58`) | Todos los campos del ejercicio salvo los de gestión: `validacion.estado`, `responsable`, `etiquetado_por`, `revisado_por` y `fecha_revision` | `hco1` del ejercicio, versión del protocolo, texto del apartado del ejercicio en el informe (normalizado), URL y fecha de la fuente consultada, SHA-256 del documento fuente si se descargó, y fila del registro (resultado y decisión) |
| No entra | Textos, dosis, fuente, notas, `fases`, `variante_de` y duración (afectan a cómo se compone la rutina, no a quién se ofrece) | La gestión de `validacion` | Nada del ejercicio que no esté en `hco1` |
| Cambia con | Una etiqueta, una posición, un recurso o el estado | Cualquier texto, etiqueta, dosis, fuente o nota | La evidencia, la decisión, el protocolo o el documento fuente, además de lo que cambie `hco1` |
| No cambia con | El orden de claves o de conjuntos | El orden de claves o de conjuntos, o la aprobación de un estado | El formato de espacios del informe, según la normalización que se apruebe |
| Uso | Saber cuándo una medición de disponibilidad (apartado 9) puede haber quedado obsoleta | Saltarse en una auditoría posterior los ejercicios que no han cambiado (10.2) | Detectar los informes que hay que revisar de nuevo |

**Cuestiones que debe decidir el desarrollador** antes de implementar:
1. ¿`fases` y `variante_de` entran en `hc1` o en una cuarta huella «de composición»?
2. ¿Qué normalización del texto del informe vale para `ha1` (espacios, saltos de línea)?
3. ¿Se guarda el SHA-256 del documento fuente en el informe? Hoy no se hace.
4. ¿Qué pasa con la huella literal actual: se retira o se mantiene como referencia?

**Texto propuesto para el protocolo** (sustituye al de P3 de arriba; no aplicado):
- **10.2:** «`node scripts/auditoria.mjs cabecera` registra `version`, `actualizado`, el commit y el identificador git del catálogo. Las huellas por ejercicio son tres, con fines distintos y no intercambiables: de compatibilidad (`hc1`), de contenido (`hco1`) y de auditoría (`ha1`). Su definición está en el apartado 10.3».
- **10.3 (nuevo):** la tabla de arriba y las reglas comunes.
- **§14:** retirar la fila «Huella por ejercicio…» cuando se implemente; mientras tanto, «Huellas `hc1`, `hco1` y `ha1`: definidas, pendientes de implementación».

## P4. Estado

- `CLAUDE.md` y `.claude/skills/auditar-catalogo-ejercicios/SKILL.md` están en el índice de `desarrollo-v1`, sin commit.
- La copia antigua de `main` está apartada (ver el registro). Comprobado con `claude -p`:
  - desde la raíz, no se carga ninguna skill de auditoría;
  - desde el worktree, solo la vigente.
- **Lo que queda en el índice incompleto:** la skill y `CLAUDE.md` remiten a archivos que siguen sin seguimiento: el protocolo, el registro está modificado, la consolidación, `scripts/auditoria*` y sus tests. Un commit solo con lo que hay en el índice versionaría instrucciones que apuntan a documentos no versionados. Conviene añadirlos en el mismo commit.
