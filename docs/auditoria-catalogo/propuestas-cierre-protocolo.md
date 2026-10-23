# Propuestas para cerrar el protocolo (versión 1.1)

- **Estado:** propuesta completa, **no aprobada**. No cambia `protocolo.md`, el catálogo, la interfaz ni las herramientas.
- **Base:** las decisiones del desarrollador del 2026-10-18 (`registro.md`, P1 a P4). Este documento las desarrolla; no las reabre.
- **Qué ya se aplicó, sin cambios normativos:** el estado de Q6 y de Q8(b) y el estado de las herramientas en `protocolo.md` (10.2, §14 y el historial).

## 1. Huellas (desarrolla P3)

### 1.1. Las cuatro cuestiones de la especificación

| # | Cuestión | Propuesta | Motivo |
|---|---|---|---|
| H-1 | ¿`fases` y `variante_de` entran en la huella de compatibilidad? | **`fases` sí; `variante_de` y `duracion_estimada_seg`, no.** No se crea una cuarta huella | La disponibilidad se mide «por fase» (R9.1), así que un cambio de `fases` puede cambiar los recuentos. `variante_de` y la duración solo intervienen al componer la rutina (`motor.js`: `familia` y el coste por tiempo), no en a quién se ofrece el ejercicio |
| H-2 | ¿Qué normalización se aplica al texto del informe en la huella de auditoría? | Unicode NFC; finales de línea `\n`; sin espacios al final de cada línea; varias líneas en blanco seguidas cuentan como una; sin espacios ni líneas en blanco al principio y al final. Mayúsculas, puntuación y orden se conservan | Que no cambie por cómo se guarda el archivo, y sí por cualquier cambio del contenido. El texto es el apartado `## <n>. <id>` completo, hasta el siguiente `## ` |
| H-3 | ¿Se guarda el SHA-256 del documento fuente? | **Sí, cuando la fuente es un archivo descargado** (PDF), en la cabecera del informe: «Documento consultado: <URL> · <fecha> · SHA-256 <hash>». Para páginas web, que cambian sin aviso, la fecha de consulta y la fecha de revisión que declare la página («Page last reviewed …») | Permite saber si la fuente cambió. Ejemplo real: el folleto de Leicester consultado el 2026-10-18 tiene `f9e114cc95e655363a21afb2740712924b3fba7d96a7393b2b238111a54f8907` |
| H-4 | ¿Qué pasa con la huella literal actual? | Se mantiene, marcada como provisional, hasta que exista `hco1`. Después se retira de `cabecera` | Ningún informe la ha usado todavía (`grep` en `lote-*.md`: ninguna). Retirarla no rompe trazabilidad |

### 1.2. Texto normativo propuesto para `protocolo.md`

**Sustituir el apartado 10.2** por:

> ### 10.2. Versión exacta del catálogo auditado
>
> - **R10.1.** La cabecera de cada informe registra:
>   - `version` y `actualizado` del catálogo;
>   - el commit de la rama auditada;
>   - el identificador git del archivo (`git rev-parse <commit>:public/data/catalogo.json`) o, si tiene cambios sin confirmar, la indicación expresa de que no hay identificador fiable;
>   - la versión de este protocolo.
>
>   `node scripts/auditoria.mjs cabecera` imprime estos datos.
> - **R10.2.** Si la fuente es un archivo descargado, la cabecera registra su URL, la fecha de consulta y su SHA-256. Si es una página web, la fecha de consulta y la fecha de revisión que declare.
> - **R10.3.** Las huellas por ejercicio son tres. Tienen fines distintos y **no son intercambiables** (10.3).

**Añadir el apartado 10.3**:

> ### 10.3. Huellas por ejercicio
>
> **Reglas comunes:**
> - SHA-256 completo, con un prefijo de tipo y versión (`hc1:`, `hco1:`, `ha1:`). Para mostrarlo pueden usarse los 16 primeros caracteres hexadecimales.
> - Serialización canónica:
>   - claves ordenadas en todos los niveles;
>   - textos en Unicode NFC;
>   - `fases`, `posiciones` y `recursos` (conjuntos para el motor), ordenadas y sin duplicados;
>   - `instrucciones` y `adaptaciones` en su orden.
>
> | Huella | Pregunta | Entra | No entra |
> |---|---|---|---|
> | **De compatibilidad** (`hc1`) | ¿Puede haber cambiado a qué perfiles y en qué fases ofrece el motor el ejercicio? | `exigencias` (las 16), `posiciones`, `recursos`, `fases` y `validacion.estado` | Textos, dosis, fuente, notas, `variante_de`, duración y gestión de `validacion` |
> | **De contenido** (`hco1`) | ¿Ha cambiado lo que se auditó? | Todos los campos del ejercicio salvo los de gestión de `validacion` (`estado`, `responsable`, `etiquetado_por`, `revisado_por` y `fecha_revision`) | La gestión de `validacion` |
> | **De auditoría** (`ha1`) | ¿Es exactamente la misma auditoría? | `hco1`, la versión del protocolo, el texto normalizado del apartado del ejercicio en el informe (H-2), la URL y la fecha de la fuente, su SHA-256 si existe (R10.2) y la fila del ejercicio en `registro.md` | — |
>
> - **R10.4.** Una auditoría anterior solo se reutiliza sin revisarla si coinciden su `hco1`, la versión del protocolo y la fuente (URL, fecha o SHA-256). Si no coinciden, se revisa.
> - **R10.5.** Un cambio de `hc1` exige repetir las mediciones de disponibilidad que dependan de ese ejercicio (apartado 9).
> - **R10.6.** Ninguna huella demuestra que una auditoría sea correcta. Solo identifican qué se comparó.

**Sustituir en §14** la fila «Huella por ejercicio…» por: «Implementación de `hc1`, `hco1` y `ha1` en `scripts/auditoria/` · Herramienta · Se implementa tras aprobar 10.3».

### 1.3. Cambios que acompañarían a la aprobación (sin hacer)

| Archivo | Cambio |
|---|---|
| `protocolo.md` | 10.2 y 10.3 como arriba; §14; historial «1.1» |
| `.claude/skills/auditar-catalogo-ejercicios/SKILL.md` | §0, «versión 1.1». §3.4 remite a R10.1 y R10.2. La subrutina C de §11 aplica R10.4 |
| `scripts/auditoria/informes.mjs` | Funciones `huellaCompatibilidad`, `huellaContenido` y `huellaAuditoria` según 10.3; retirada de la literal (H-4) |
| `scripts/auditoria.mjs` | `cabecera` imprime `hc1`/`hco1` por ejercicio y la línea de la fuente (R10.2). `validar` comprueba R10.1 en los informes de formato 1.1 |
| `tests/auditoria-huella.test.mjs` | Pasa de caracterizar a especificar: `hco1` no cambia con el orden ni con `validacion`; `hc1` no cambia con textos; `ha1` cambia con la evidencia y la decisión |
| `tests/auditoria.test.mjs` | La versión que cita la skill es 1.1 (lo comprueba el test de no divergencia) |

## 2. Texto de interfaz para Q8(b) (desarrolla P2)

**Dónde se mostraría:**
- En `vistaEjercicio` (`public/js/app.js`), sección «Fuente», como un párrafo justo después de la línea «Material pensado para: …».
- Esa línea está en `app.js:690` de la copia de trabajo y en `app.js:621` en `HEAD`.
- Solo se mostraría cuando `e.fuente.especifica_de` tiene valor.
- Es el único lugar donde la interfaz muestra `especifica_de`: la rutina y el reproductor no lo muestran, y no se propone añadirlo allí.

**Texto propuesto:**

> Este material se escribió para ese grupo de personas, pero no es exclusivo de él ni adecuado para todas las que lo forman. Puedes hacerlo aunque no formes parte de ese grupo si es compatible con las restricciones que has indicado en tu perfil; lo ves al principio de esta página. Que sea compatible no garantiza que sea seguro para ti.

**Por qué es fiel a la aclaración aprobada** (`registro.md`, 2026-10-18, P2):

| Elemento de la aclaración | En el texto |
|---|---|
| El folleto está dirigido a un grupo concreto | «Material pensado para: …» (ya existe) y «se escribió para ese grupo de personas» |
| No es exclusivo ni adecuado para todo el grupo (R8.3) | «no es exclusivo de él ni adecuado para todas las que lo forman» |
| Se puede hacer sin pertenecer al grupo si es compatible con las restricciones **indicadas** | «Puedes hacerlo aunque no formes parte de ese grupo si es compatible con las restricciones que has indicado en tu perfil» |
| No es una garantía de seguridad | «Que sea compatible no garantiza que sea seguro para ti» |

**Funciona con los tres estados del aviso de compatibilidad** (`compat`, `app.js:680` de la copia de trabajo):
- «Completa tu perfil…»;
- «No es compatible con tu perfil…»;
- «Compatible con tu perfil».

El texto no afirma ninguno de ellos: remite a ese aviso. La compatibilidad no depende de que la persona se declare apta, sino del filtro sobre las restricciones declaradas (R8.2).

**No incluye** la parte perdida del mensaje original ni avisos nuevos sobre síntomas: esos necesitarían validación profesional (§8.4).

## 3. Otros cambios del protocolo propuestos

| Cambio | Tipo | Motivo |
|---|---|---|
| R10.1 y R10.2: los datos de la cabecera pasan de propuesta a regla | Normativo | La skill ya los exige (§3.4) y la herramienta los produce. Hoy el protocolo los llama «propuesta» y la skill los pide: es una discrepancia sin consecuencias, pero conviene cerrarla en 1.1 |
| Q8(b): sustituir «Mensaje de procedencia (`app.js:621`)» por la referencia al texto de §2 | Estado | Cuando se apruebe el texto |
| R8.2: la cita `app.js:621` es correcta en `HEAD`; en la copia de trabajo, la línea es la 690 | Editorial | Actualizarla cuando se confirme `app.js` |
