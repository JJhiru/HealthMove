… (la consulta C9 es de CN-1, no del lote 10). El informe del lote 10 no menciona el fallo de la clave, y el registro no menciona que el lote 10 no se haya enviado por la razón que da el informe. La consecuencia es que no se sabe si la revisión de DeepSeek del lote 10 está pendiente por decisión (no aplica cambios) o por fallo técnico (la clave). El informe dice lo primero; el registro sugiere lo segundo para otra consulta.
- **Consecuencia:** la trazabilidad de la revisión de DeepSeek queda ambigua. Si el desarrollador quiere saber si el lote 10 se ha revisado por DeepSeek, no puede saberlo con los documentos entregados.
- **Certeza:** alta (la discrepancia está en los textos).
- **Recomendación:** unificar la razón en los dos documentos: o «no se ha enviado porque el lote no aplica cambios» o «no se ha enviado por el fallo de la clave». Si son dos consultas distintas (C9 de CN-1 y la del lote 10), decirlo explícitamente.
- **Prueba:** comparar `lote-10` «Revisión de DeepSeek» con `registro` P24.
- **¿Requiere decisión humana?:** no para la redacción; sí si el desarrollador quiere que el lote 10 se revise por DeepSeek antes de aplicar cambios (ya aplicados en P24).

### DS-236 · El informe del lote 10 dice que `recoger-toalla-dedos-pies` «pasa de REQUIERE CORRECCIONES a PENDIENTE DE DECISIÓN (CN-2)» en P24, pero el informe del lote 10 no dice que el ejercicio estuviera antes en REQUIERE CORRECCIONES.
- **Ubicación:** `registro`, P24; `lote-10`, «Resumen del lote» y «Decisión pendiente» del ejercicio 66.
- **Evidencia:** `registro` P24: «`recoger-toalla-dedos-pies` pasa de REQUIERE CORRECCIONES a PENDIENTE DE DECISIÓN (CN-2).» `lote-10`, ejercicio 66: «Resultado documental: requiere aclaraciones, dos adaptaciones y un `true` conservador»; «Decisión pendiente del desarrollador: PENDIENTE DE DECISIÓN (CN-2: dejar la toalla en el suelo exige llegar al suelo).»
- **Problema:** el informe del lote 10 no dice que el ejercicio estuviera antes en REQUIERE CORRECCIONES; dice «requiere aclaraciones, dos adaptaciones y un `true` conservador», que es una descripción, no un resultado de la skill. El registro dice que pasa de REQUIERE CORRECCIONES a PENDIENTE DE DECISIÓN. La discrepancia es menor, pero afecta a la trazabilidad: no se sabe si el ejercicio tuvo un resultado anterior de REQUIERE CORRECCIONES o si el registro lo atribuye por error.
- **Consecuencia:** menor: la trazabilidad del resultado del ejercicio 66 queda ambigua.
- **Certeza:** media (puede ser que el informe use «requiere aclaraciones» como sinónimo de REQUIERE CORRECCIONES, pero no lo dice).
- **Recomendación:** unificar el resultado del ejercicio 66 en los dos documentos.
- **Prueba:** comparar `lote-10` «Resultado documental» con `registro` P24.
- **¿Requiere decisión humana?:** no.

### DS-237 · El informe del lote 10 dice que `banda-tobillo-fuera-sentado` tiene «`agarre` y `ambos_brazos`: sin cambio hasta CN-2», pero el catálogo aplicado tiene `agarre: false` y `ambos_brazos: false`, y la nota de `notas_etiquetado` dice «agarre y ambos_brazos: pendientes de CN-2 (atar y colocar el lazo)». La nota no sigue el formato de R2.4.
- **Ubicación:** `catalogo-lote10`, `banda-tobillo-fuera-sentado`, `notas_etiquetado`; `protocolo` R2.4.
- **Evidencia:** R2.4: «Se anota en `notas_etiquetado`, que la interfaz no muestra, con esta forma: `[conservadora] <exigencia>: <motivo>. Se cerraría con: <evidencia que falta>.`» Catálogo: «[conservadora] flexion_profunda_rodilla: la imagen de la fuente es frontal y no deja ver el ángulo de la rodilla. Se cerraría con: una vista lateral o un texto que diga dónde queda el pie. agarre y ambos_brazos: pendientes de CN-2 (atar y colocar el lazo).»
- **Problema:** la nota de `agarre` y `ambos_brazos` no sigue el formato de R2.4: no lleva `[conservadora]` delante de cada exigencia, no dice el motivo ni la evidencia que falta. Es una nota de pendiente, no una nota de `true` conservador. Eso es coherente con que los valores sean `false` (no hay `true` conservador que anotar), pero entonces la nota no debería estar en `notas_etiquetado` con la forma de R2.4. El informe dice «`agarre` y `ambos_brazos`: sin cambio hasta CN-2», lo que es correcto, pero la nota del catálogo mezcla una nota de `true` conservador (la de `flexion_profunda_rodilla`) con una nota de pendiente (la de `agarre` y `ambos_brazos`).
- **Consecuencia:** menor: la nota es legible, pero no sigue el formato que el protocolo pide para las notas de `true` conservador. Si en el futuro se aplica CN-2 y `agarre` pasa a `true`, la nota deberá reescribirse.
- **Certeza:** alta (la nota está en el catálogo y no sigue R2.4).
- **Recomendación:** separar las dos notas: la de `flexion_profunda_rodilla` con el formato de R2.4; la de `agarre` y `ambos_brazos` como nota de pendiente, sin el formato de `[conservadora]`, o moverla a otro campo si el esquema lo permite (no lo sé).
- **Prueba:** releer R2.4 con la nota del catálogo delante.
- **¿Requiere decisión humana?:** no para la redacción; sí si el desarrollador quiere un campo separado para las notas de pendiente (sería un cambio de esquema, fuera de alcance).

### DS-238 · El informe del lote 10 dice que `cuadriceps-estatico-sentado` tiene «`adaptaciones`: sustituir por "La fuente lo describe tumbado, con la rodilla empujando contra el suelo, y dice que también puede hacerse sentado, sin precisar cómo; aquí se hace en una silla."», pero el catálogo aplicado tiene «La fuente indica el tiempo pero no las repeticiones; se usan 10.» y no tiene la adaptación de la posición.
- **Ubicación:** `lote-10`, ejercicio 68, «Propuesta de cambios»; `catalogo-lote10`, `cuadriceps-estatico-sentado`, `adaptaciones`.
- **Evidencia:** `lote-10`: «Si la silla pasa R3.1: `adaptaciones`: sustituir por "La fuente lo describe tumbado, con la rodilla empujando contra el suelo, y dice que también puede hacerse sentado, sin precisar cómo; aquí se hace en una silla." y "La fuente indica el tiempo, pero no las repeticiones ni el cambio de pierna; se usan 10 con cada pierna."» Catálogo: `adaptaciones`: `["La fuente indica el tiempo pero no las repeticiones; se usan 10."]`.
- **Problema:** el catálogo aplicado no tiene la adaptación de la posición (la que describe que la fuente lo hace tumbado y HealthMove sentado). El informe la condiciona a que la silla pase R3.1, y Q5 está pendiente, así que es coherente que no se haya aplicado. Pero el registro P24 dice «Aplicado el 2026-10-22 (P24): `especifica_de`, `consultado` y una nota con la duda de posición», y no menciona que la adaptación de la posición no se ha aplicado. La nota de `notas_etiquetado` sí menciona la duda de posición. La consecuencia es que el catálogo no documenta la diferencia de posición en `adaptaciones` (que es lo que ve el usuario), solo en `notas_etiquetado` (que no ve). Eso es coherente con que Q5 esté pendiente, pero el usuario no sabe que la fuente lo describe tumbado.
- **Consecuencia:** el usuario ve una instrucción sentada sin saber que la fuente la describe tumbado. Eso puede ser una diferencia sin documentar (C3) para el usuario, aunque esté documentada en `notas_etiquetado` para el auditor.
- **Certeza:** alta (el catálogo no tiene la adaptación).
- **Recomendación:** si Q5 se resuelve a favor de la silla, añadir la adaptación de la posición a `adaptaciones`. Mientras Q5 esté pendiente, valorar si la nota de `notas_etiquetado` basta o si el usuario debería ver la diferencia (eso sería una decisión de interfaz, Q7/Q8).
- **Prueba:** comparar `lote-10` «Propuesta de cambios» con `catalogo-lote10` `adaptaciones`.
- **¿Requiere decisión humana?:** sí. Q5 está pendiente; la visibilidad de la diferencia para el usuario es Q7/Q8.

### DS-239 · El informe del lote 10 dice que `cruce-piernas-isometrico` tiene «`adaptaciones`: añadir "La fuente dice que se aguante todo lo posible; HealthMove añade que sea sin dolor."», y el catálogo aplicado la tiene. Pero el informe también dice que «"sin dolor" es un consejo de HealthMove: R6.3», y R6.3 dice que un consejo de clase 2 o 3 que la fuente no contiene «se documenta como adaptación (C2) y nunca se atribuye a la fuente». La adaptación aplicada dice «La fuente dice que se aguante todo lo posible; HealthMove añade que sea sin dolor», que es correcto (no atribuye el «sin dolor» a la fuente). No hay error.
- **Ubicación:** `lote-10`, ejercicio 69, «Diferencias (C3)» y «Propuesta de cambios»; `catalogo-lote10`, `cruce-piernas-isometrico`, `adaptaciones`; `protocolo` R6.3.
- **Evidencia:** R6.3: «Si HealthMove añade un consejo de clase 2 o 3 que la fuente no contiene, es una diferencia con la fuente. Se documenta como adaptación (C2) y nunca se atribuye a la fuente.» Catálogo: «La fuente dice que se aguante todo lo posible; HealthMove añade que sea sin dolor.»
- **Problema:** ninguno. Lo señalo como confirmación: la adaptación está bien redactada y no atribuye el consejo a la fuente. No requiere cambio.
- **Certeza:** alta.
- **Recomendación:** ninguna.
- **¿Requiere decisión humana?:** no.

### DS-240 · El informe del lote 10 dice que `banda-elevar-brazos-pie` «sigue en `borrador`: no tiene informe de lote», y el registro P26 dice que se corrigió en P26. El catálogo aplicado tiene `agarre: true` y las instrucciones corregidas. No hay error entre el informe y el catálogo, pero el informe del lote 10 no menciona `banda-elevar-brazos-pie` (no es del lote 10). Lo señalo porque la tarea pide revisar también `banda-elevar-brazos-pie` corregido en P26.
- **Ubicación:** `registro`, P26; `catalogo-lote10`, `banda-elevar-brazos-pie`.
- **Evidencia:** `registro` P26: «Corregido: `agarre` pasa de `false` a `true` (D: las fotos); las instrucciones: "Arms are parallel" (Fig. A) son los brazos paralelos entre sí, colgando delante de los muslos, no "paralelos al suelo"; nueva adaptación: "hasta donde te resulte cómodo" en lugar de "as high as the physiotherapist has directed"; la ilustración empieza con los brazos abajo (R7.6); `consultado` = 2026-10-22.» Catálogo: `agarre: true`; instrucciones: «Ponte de pie con los brazos abajo, delante de los muslos, y sujeta una banda en lazo con las dos manos. Abre el lazo hasta que los brazos queden paralelos entre sí. Sin perder la tensión, sube los brazos despacio y con control hasta donde te resulte cómodo. Vuelve despacio a la posición de partida.»; `adaptaciones`: «La fuente deja las repeticiones en blanco para que las fije el fisioterapeuta; se usa una pauta de 5 a 10.» y «La fuente dice subir los brazos hasta donde indique el fisioterapeuta; aquí, hasta donde te resulte cómodo.»
- **Problema:** el catálogo aplicado es coherente con P26. Lo señalo como confirmación. No hay error.
- **Certeza:** alta.
- **Recomendación:** ninguna.
- **¿Requiere decisión humana?:** no.

---

## Resumen de hallazgos

| Id | Tema | Certeza | ¿Decisión humana? |
|---|---|---|---|
| DS-223 | `ambos_brazos` en 66: `false` con fundamento que mezcla D e I | alta | no (redacción); sí si se quiere criterio nuevo |
| DS-224 | `flexion_profunda_rodilla` en 67: confirmación, sin error | alta | no |
| DS-225 | `ambos_brazos`/`agarre` en 69: `true` conservador con imagen D | alta | sí |
| DS-226 | Apoyo que solo aparece en la imagen: ¿bien fundado en R7.5/Q1/Q2? | alta (D/I); media (conclusión) | sí |
| DS-227 | `flexion_amplia_cadera` en 68: fundamento mezcla fuente e instrucción | media | no (redacción); sí (Q5) |
| DS-228 | `brazo_sobre_hombro` en 66: `false` con una sola vista lateral | media | no (revisión); sí si se concluye que hace falta criterio |
| DS-229 | `inclinacion_tronco` en 66: `false` condicionado a CN-2 | alta | no |
| DS-230 | `peso_en_manos` en 69: confirmación, sin error | alta | no |
| DS-231 | CN-2 bien planteado; alcance más amplio de lo que el informe reconoce | alta (planteamiento); media (alcance) | sí |
| DS-232 | CN-2 opción (b): texto de interfaz fuera de alcance (Q8) | alta | sí |
| DS-233 | Q5 en 68: no se identifica la rama de R3.1 que aplica | media | sí |
| DS-234 | Q5 en 69: discrepancia de R7.7 no se resuelve solo con Q5 | alta | sí |
| DS-235 | Revisión de DeepSeek: razones distintas en informe y registro | alta | no (redacción); sí si se quiere revisar antes de aplicar |
| DS-236 | Resultado del 66: REQUIERE CORRECCIONES vs «requiere aclaraciones» | media | no |
| DS-237 | Nota de `agarre`/`ambos_brazos` en 67 no sigue R2.4 | alta | no (redacción); sí si se quiere campo separado |
| DS-238 | Adaptación de posición en 68 no aplicada; usuario no ve la diferencia | alta | sí (Q5, Q7/Q8) |
| DS-239 | Adaptación «sin dolor» en 69: confirmación, sin error | alta | no |
| DS-240 | `banda-elevar-brazos-pie` P26: confirmación, sin error | alta | no |

**Prioridad por gravedad y dependencia:**
1. DS-226 y DS-225 (criterio sobre el apoyo que solo aparece en la imagen): bloquean la interpretación de Q1/Q2 y afectan a 66 y 69.
2. DS-231 y DS-232 (CN-2): bloquean 66 y 67; la opción (b) está fuera de alcance.
3. DS-233 y DS-234 (Q5): bloquean 68 y 69; la discrepancia de R7.7 del 69 no se resuelve solo con Q5.
4. DS-238 (adaptación de posición en 68): afecta a lo que ve el usuario.
5. DS-223, DS-227, DS-228, DS-229 (filas con fundamento mezclado): afectan a la trazabilidad, no al valor.
6. DS-235, DS-236, DS-237 (errores de hecho y formato): menor.

**Lo que no puedo verificar con los documentos entregados:**
- Si las imágenes de la fuente muestran lo que el informe dice (no las he visto).
- Si la instrucción 1 de `recoger-toalla-dedos-pies` («Siéntate con una toalla en el suelo delante de ti») exige agacharse o llegar al suelo (depende de la altura de la silla y de la persona; no es una cuestión documental).
- Si `banda-elevar-brazos-pie` tiene informe de lote (el registro dice que no; el catálogo no lo dice).
- El recuento de ejercicios afectados por CN-2 (no tengo el catálogo completo).
- Si la opción (b) de CN-2 requeriría revisión profesional (el informe lo dice, pero no puedo verificarlo).

**Discrepancias con la revisión previa de Claude (si las hay):**
- No tengo a la vista los hallazgos previos de Claude sobre este lote (la tarea dice que se me presentan como hipótesis, pero no se incluyen en los documentos entregados). No puedo confirmarlos ni refutarlos. Si Claude ya señaló DS-225/DS-226 (el apoyo que solo aparece en la imagen), mi análisis coincide en la distinción D/I, pero matizo que el 66 (imagen I) sí encaja en Q2 y el 69 (imagen D) no encaja en Q1/Q2 tal como están escritas.
- Si Claude ya señaló que CN-2 está bien planteado, coincido, pero añado que su alcance es más amplio de lo que el informe reconoce (DS-231) y que la opción (b) está fuera de alcance (DS-232).