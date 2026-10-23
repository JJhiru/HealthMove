# Revisión asistida por IA: `sentarse-levantarse`

> **ANÁLISIS ASISTIDO POR IA. No es una decisión, una aprobación ni una validación clínica.**
> Lo que sigue son sugerencias de un modelo de lenguaje. Requieren revisión humana antes de usarse. El modelo no ha consultado las fuentes originales: solo los textos enviados.

## Datos de la ejecución

- Fecha: 2026-10-18T23:08:14.308Z
- Modelo: `deepseek-flash` · id de la respuesta: `20506e4b-0829-4fef-bdcb-34920b5f963f`
- Instrucciones: `scripts/ia/instrucciones/revision-documental.md` (revision-documental/1 (2026-10-18), sha256 `a03373173555d644`)
- Uso informado por la API: 0 tokens de entrada en caché, 11278 sin caché y 1476 de salida (estimados antes de enviar: 18580 de entrada)
- Coste: 0.0052 USD a tarifa punta, que es la cota superior (en horario valle, la mitad). Máximo autorizado: 0.0104 USD. Tarifas verificadas el 2026-10-18
- Bloques enviados:
  - `protocolo-2` ← `docs/auditoria-catalogo/protocolo.md#2` (2085 caracteres, sha256 `21295f1eda39774a`)
  - `protocolo-3` ← `docs/auditoria-catalogo/protocolo.md#3` (1645 caracteres, sha256 `c2e6ce6c5b29d40e`)
  - `protocolo-5` ← `docs/auditoria-catalogo/protocolo.md#5` (3168 caracteres, sha256 `2922f4c9692023aa`)
  - `protocolo-6` ← `docs/auditoria-catalogo/protocolo.md#6` (2298 caracteres, sha256 `a77a8b9098ff2dfd`)
  - `protocolo-7` ← `docs/auditoria-catalogo/protocolo.md#7` (1742 caracteres, sha256 `3c38bf0863db0b85`)
  - `protocolo-8` ← `docs/auditoria-catalogo/protocolo.md#8` (3366 caracteres, sha256 `f5e75e5f4b5838d1`)
  - `protocolo-11` ← `docs/auditoria-catalogo/protocolo.md#11` (2007 caracteres, sha256 `5659d1026e5d84db`)
  - `protocolo-13` ← `docs/auditoria-catalogo/protocolo.md#13` (4122 caracteres, sha256 `5d4df4bc87f42f94`)
  - `especificacion-4` ← `docs/especificacion-v1.md#4` (2471 caracteres, sha256 `334d8dc8807d1e39`)
  - `registro-decisiones-1` ← `docs/auditoria-catalogo/registro.md#decisiones` (4082 caracteres, sha256 `645a4067065a5995`)
  - `registro-decisiones-2` ← `docs/auditoria-catalogo/registro.md#decisiones` (1277 caracteres, sha256 `18f2ddd980b55457`)
  - `registro-decisiones-3` ← `docs/auditoria-catalogo/registro.md#decisiones` (2296 caracteres, sha256 `71b40826e110b520`)
  - `catalogo-sentarse-levantarse` ← `public/data/catalogo.json#sentarse-levantarse` (1878 caracteres, sha256 `ea52d81c67b0663b`)

## Comprobado por herramientas deterministas

- Estado en el catálogo: `borrador`
- `fuente.especifica_de`: ausente
- Discrepancia de ilustración pendiente (R7.7): no
- Cita verificada: la cita del modelo aparece literalmente, salvo los espacios, en el bloque que indica. Lo comprueba este script, no el modelo.

## Sugerencias del modelo (no verificadas salvo la cita)

**Resumen del modelo:** Revisión de la entrada `sentarse-levantarse` frente al protocolo, la especificación y las decisiones registradas. Se detectan incoherencias entre las etiquetas, las instrucciones y las notas, además de dependencias de cuestiones abiertas (Q3) y de umbrales no formalizados.

| # | Hallazgo | Criterio | Gravedad | Confianza | Cita verificada | Revisión humana |
|---|---|---|---|---|---|---|
| 1 | `equilibrio_sin_apoyo` en true sin apoyo documentado en las instrucciones | especificación §4 (exigencia 1: «de pie, exige no sujetarse a nada») y R2.2 | media | media | sí | sí |
| 2 | `inclinacion_tronco` en false apoyado en un umbral no formalizado (Q3) | R7.8 y Q3 (umbral de «inclinación leve» sin frase de referencia) | media | alta | sí | sí |
| 3 | Instrucción de usar las manos como guía frente a `agarre` y `peso_en_manos` en false | DG-4 (apartado 7.1, funciones de la mano) y R2.2/R2.3 | media | media | sí | sí |
| 4 | `flexion_profunda_rodilla` en true sin evidencia explícita del ángulo | R7.8 y decisión 2 del registro (ángulo aproximado entre muslo y pierna en vista lateral) | baja | media | sí | sí |
| 5 | `ambos_brazos` en false sin justificar la función de los brazos | DG-4 (apartado 7) y R2.2 | baja | media | sí | sí |
| 6 | Posible diferencia con la fuente en la instrucción de las manos (C3) | apartado 2.2 (C3) y R6.3 | baja | baja | sí | sí |

### 1. `equilibrio_sin_apoyo` en true sin apoyo documentado en las instrucciones

- Evidencia (`catalogo-sentarse-levantarse`, cita verificada): «"equilibrio_sin_apoyo": true,»
- Incertidumbre: Las instrucciones no mencionan sujetarse ni un apoyo; la nota dice «Al estar de pie no hay apoyo», pero no se aporta la cita de la fuente que lo respalde. No se puede comprobar si la fuente pide o no un apoyo.
- Recomendación del modelo: Revisar si la fuente (NHS) indica algún apoyo al estar de pie y registrar la evidencia (D/I/N) que fundamenta el valor, según el apartado 2.3.

### 2. `inclinacion_tronco` en false apoyado en un umbral no formalizado (Q3)

- Evidencia (`catalogo-sentarse-levantarse`, cita verificada): «La inclinación es leve: no es inclinacion_tronco.»
- Incertidumbre: La especificación §4 promete una frase de referencia para «inclinación leve» que no existe; no se puede determinar si la inclinación descrita supera el umbral.
- Recomendación del modelo: No cambiar la etiqueta mientras Q3 siga abierta; registrar el caso como pendiente de esa cuestión y no dar el false por cerrado.

### 3. Instrucción de usar las manos como guía frente a `agarre` y `peso_en_manos` en false

- Evidencia (`catalogo-sentarse-levantarse`, cita verificada): «Usa las manos solo como guía si lo necesitas.»
- Incertidumbre: No queda claro si «usar las manos como guía» implica contacto con la silla, apoyo para estabilidad o carga. Tampoco si la fuente lo menciona o es una adición de HealthMove (posible C3).
- Recomendación del modelo: Clasificar la función real de las manos (reposo, contacto, apoyo o carga) y comprobar si la instrucción procede de la fuente o es una adaptación; registrar la evidencia de `agarre` y `peso_en_manos`.

### 4. `flexion_profunda_rodilla` en true sin evidencia explícita del ángulo

- Evidencia (`catalogo-sentarse-levantarse`, cita verificada): «Con los pies algo atrasados, la rodilla puede pasar de 90°.»
- Incertidumbre: La nota usa «puede pasar de 90°», que es una posibilidad, no una observación. No se indica si la fuente o la imagen permiten determinar el ángulo (D/I/N).
- Recomendación del modelo: Registrar el nivel de evidencia y el fundamento del true; si es conservador, anotarlo con la forma `[conservadora]` en `notas_etiquetado` (R2.4).

### 5. `ambos_brazos` en false sin justificar la función de los brazos

- Evidencia (`catalogo-sentarse-levantarse`, cita verificada): «"ambos_brazos": false,»
- Incertidumbre: La instrucción «no los brazos» y «manos solo como guía» sugiere que los brazos no ejecutan el movimiento, pero no se documenta la clasificación de su función ni la evidencia.
- Recomendación del modelo: Dejar constancia en las notas de la función de los brazos (reposo o guía) que sostiene el false, con su fundamento.

### 6. Posible diferencia con la fuente en la instrucción de las manos (C3)

- Evidencia (`catalogo-sentarse-levantarse`, cita verificada): «"adaptaciones": [],»
- Incertidumbre: No se dispone del texto de la fuente en esta revisión; no se puede saber si «Usa las manos solo como guía si lo necesitas» está en la fuente o es una adición de HealthMove.
- Recomendación del modelo: Contrastar la instrucción con el texto original del NHS y, si es una adición, documentarla como adaptación (C2) en `adaptaciones`.

**Limitaciones señaladas por el modelo:**
- No se han consultado las fuentes originales (NHS) ni las ilustraciones; no se puede verificar la fidelidad (C1/C2/C3) ni la evidencia D/I/N de cada exigencia.
- No se ha podido comprobar el impacto en disponibilidad ni las opciones de `opciones.js` afectadas (apartado 9 y R2.6).
- Las cuestiones Q1, Q2 y Q3 siguen abiertas y condicionan varios de los hallazgos; no se resuelven aquí.
- No se ha verificado el estado de validación ni la coherencia con `validar-catalogo.mjs`.

---

Siguiente paso: una persona revisa estos hallazgos con la skill `auditar-catalogo-ejercicios` y el protocolo. Ningún cambio del catálogo se aplica sin un plan aprobado (protocolo, principio 1).
