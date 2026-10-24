- **¿Requiere decisión humana?:** sí (confirmar el nombre de la población).

### DS-256 · La nota de `ambos_brazos` en `paso-atras-apoyo` ya no es correcta: la fuente pide las dos manos (D)
- **Ubicación exacta:** `catalogo-lote11`, `paso-atras-apoyo`, `notas_etiquetado`; `evidencia-lote-11`, apartado 76.
- **Evidencia:** la nota actual dice «[conservadora] ambos_brazos: apoyo bilateral (Q1). Se cerraría con: fuente de que basta una mano.» La fuente dice «Hold on with both hands» (D).
- **Explicación:** la nota presenta el `true` como conservador, pero la fuente pide expresamente las dos manos. Es evidencia D, no una duda. R2.4 reserva la forma `[conservadora]` para los `true` que se apoyan en la duda o en el apoyo sin evidencia de prensión; aquí no hay duda.
- **Consecuencia potencial:** la nota induce a pensar que la etiqueta es conservadora y que se cerraría con una fuente que ya existe. Un auditor posterior podría proponer `false` por error.
- **Nivel de certeza:** alta.
- **Recomendación:** sustituir la nota por la forma de evidencia D (ver propuesta del ejercicio 76). No cambiar el valor.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente, «Hold on with both hands».
- **¿Requiere decisión humana?:** no (es una corrección de forma de la nota).

### DS-257 · `ambos_brazos` y `agarre` en `gemelo-banda-suelo`: `true` conservador sin la nota de R2.4
- **Ubicación exacta:** `catalogo-lote11`, `gemelo-banda-suelo`, `exigencias.ambos_brazos`, `exigencias.agarre` y `notas_etiquetado`; `evidencia-lote-11`, apartado 78.
- **Evidencia:** la nota actual dice «La banda solo sirve para tirar del pie: no se marca carga externa.» No hay nota para `ambos_brazos` ni para `agarre`. La evidencia de Claude dice: «Manos (I): “pull the band” exige sujetar la banda; el texto no dice si con una o con dos manos.»
- **Explicación:** `ambos_brazos` y `agarre` están en `true` con evidencia I, no D. R2.4 exige que un `true` conservador se anote con la forma `[conservadora] <exigencia>: <motivo>. Se cerraría con: <evidencia que falta>.` Las notas actuales no lo hacen.
- **Consecuencia potencial:** las etiquetas parecen basadas en evidencia D cuando no lo están. Si en el futuro se busca evidencia para cerrarlas, la nota no dice qué falta.
- **Nivel de certeza:** alta.
- **Recomendación:** mantener los valores y añadir las notas de R2.4 (ver propuesta del ejercicio 78).
- **Prueba o evidencia que permitiría confirmarlo:** una descripción de la fuente que diga con cuántas manos se sujeta la banda y si se cierra la mano.
- **¿Requiere decisión humana?:** no (es una corrección de forma de la nota).

### DS-258 · `secarse-toalla-sentado`: la diferencia «toca el cuello» / «parte alta de la espalda» es una C3 que debe documentarse como adaptación
- **Ubicación exacta:** `evidencia-lote-11`, apartado 75, «Diferencias con HealthMove»; `catalogo-lote11`, `secarse-toalla-sentado`, `adaptaciones` (vacío) y `notas_etiquetado`.
- **Evidencia:** «la fuente dice “touches your neck” y “across your neck and your shoulders”; HealthMove dice “hasta dejarla en la parte alta de la espalda” y “sobre los hombros”.»
- **Explicación:** es una diferencia entre la fuente y HealthMove que no está documentada en `adaptaciones`, que es lo que ve el usuario (R3.2). La diferencia «coge la toalla de la mesa» / «la sostiene desde el principio» está en `notas_etiquetado`, que la interfaz no muestra (Q7), pero no en `adaptaciones`.
- **Consecuencia potencial:** el usuario no sabe que HealthMove ha cambiado el destino de la toalla (cuello → parte alta de la espalda) ni que la coge de otra forma. R3.2 exige que la adaptación esté documentada y su fundamento sea verificable.
- **Nivel de certeza:** alta.
- **Recomendación:** añadir las dos adaptaciones a `adaptaciones` (ver propuesta del ejercicio 75). No cambiar etiquetas.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente, «over your head so it touches your neck» y «across your neck and your shoulders».
- **¿Requiere decisión humana?:** no (es una corrección de documentación).

### DS-259 · `abrazar-rodilla-tumbado`: las manos son opcionales en la fuente y HealthMove las hace obligatorias; la omisión del aviso de seguridad no está documentada
- **Ubicación exacta:** `evidencia-lote-11`, apartado 77; `catalogo-lote11`, `abrazar-rodilla-tumbado`, `adaptaciones` (vacío) y `notas_etiquetado` (vacío).
- **Evidencia:** «el texto las hace **opcionales** (“you can use your hands to help”); la foto 2 las muestra sujetando la rodilla.» «Aviso general (D, p. 1): si los ejercicios empeoran el dolor o causan uno nuevo, parar y consultar al fisioterapeuta.»
- **Explicación:** HealthMove pide abrazar la rodilla con las manos, lo que convierte en obligatorio lo que la fuente hace opcional. Es una C3 que debe documentarse como adaptación (R3.2). La omisión del aviso de seguridad es un consejo de clase 2/3 (R6.3): no cambia etiquetas, pero debe documentarse como diferencia. La omisión de la versión con las dos rodillas también debe documentarse.
- **Consecuencia potencial:** el usuario no sabe que la fuente permite hacerlo sin manos ni que ofrece una versión con las dos rodillas. La omisión del aviso de seguridad no se atribuye a la fuente.
- **Nivel de certeza:** alta.
- **Recomendación:** añadir las tres adaptaciones a `adaptaciones` (ver propuesta del ejercicio 77). No cambiar etiquetas.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente, «you can use your hands to help», «Try BOTH knees together if you can» y el aviso general de la p. 1.
- **¿Requiere decisión humana?:** no (es una corrección de documentación).

### DS-260 · `gemelo-banda-suelo`: la fuente permite suelo o cama y HealthMove solo el suelo; la adaptación de posición no está documentada
- **Ubicación exacta:** `evidencia-lote-11`, apartado 78, «Diferencias con HealthMove»; `catalogo-lote11`, `gemelo-banda-suelo`, `posiciones: ["suelo"]`, `recursos: ["banda","pared"]`, `adaptaciones` (vacío).
- **Evidencia:** «la fuente permite “floor or bed”; HealthMove, solo el suelo (posición `suelo`, recurso `pared`).»
- **Explicación:** la fuente permite dos posiciones (suelo o cama); HealthMove elige una (suelo). Es una adaptación de posición que debe documentarse (R3.2). No cambia etiquetas: la tabla se ha evaluado con la posición de HealthMove (suelo).
- **Consecuencia potencial:** el usuario no sabe que la fuente permite hacerlo en la cama, lo que podría ser relevante para quien no puede bajar al suelo. La adaptación no se presenta como parte de la fuente.
- **Nivel de certeza:** alta.
- **Recomendación:** añadir la adaptación a `adaptaciones` (ver propuesta del ejercicio 78). No cambiar etiquetas.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente, «Sit on the floor or bed».
- **¿Requiere decisión humana?:** no (es una corrección de documentación).

### DS-261 · `de-pie-mano-preparada`: la fuente usa «a sturdy surface» y HealthMove una silla; la adaptación de recurso no está documentada
- **Ubicación exacta:** `evidencia-lote-11`, apartado 72; `catalogo-lote11`, `de-pie-mano-preparada`, `recursos: ["silla"]`, `adaptaciones` (vacío).
- **Evidencia:** «HealthMove usa una silla; la fuente, “a sturdy surface” (en la foto, una mesa alta).»
- **Explicación:** la fuente no dice «silla»; dice «una superficie firme» (en la foto, una mesa alta). HealthMove usa una silla. Es una adaptación de recurso que debe documentarse (R3.2). No cambia etiquetas: la tabla se ha evaluado con la versión de HealthMove.
- **Consecuencia potencial:** el usuario no sabe que la fuente usa una superficie firme distinta de una silla. La adaptación no se presenta como parte de la fuente.
- **Nivel de certeza:** alta.
- **Recomendación:** añadir la adaptación a `adaptaciones` (ver propuesta del ejercicio 72). No cambiar etiquetas.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente, «Hovering… over a sturdy surface».
- **¿Requiere decisión humana?:** no (es una corrección de documentación).

### DS-262 · `paso-atras-apoyo`: la fuente dice «kitchen worktop» y HealthMove permite también el respaldo de una silla; la adaptación de recurso no está documentada
- **Ubicación exacta:** `evidencia-lote-11`, apartado 76; `catalogo-lote11`, `paso-atras-apoyo`, `recursos: ["silla"]`, `adaptaciones` (vacío).
- **Evidencia:** «HealthMove permite “una encimera o el respaldo de una silla firme”; la fuente dice “kitchen worktop”.»
- **Explicación:** la fuente dice «encimera de la cocina»; HealthMove permite también el respaldo de una silla firme. Es una adaptación de recurso que debe documentarse (R3.2). No cambia etiquetas.
- **Consecuencia potencial:** el usuario no sabe que la fuente usa una encimera y que HealthMove añade una alternativa. La adaptación no se presenta como parte de la fuente.
- **Nivel de certeza:** alta.
- **Recomendación:** añadir la adaptación a `adaptaciones` (ver propuesta del ejercicio 76). No cambiar etiquetas.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente, «Stand facing the kitchen worktop».
- **¿Requiere decisión humana?:** no (es una corrección de documentación).

### DS-263 · `elevacion-pierna-recta-sentado`: la instrucción 3 es más estricta que la fuente («sin doblar la rodilla» frente a «as straight as possible»)
- **Ubicación exacta:** `evidencia-lote-11`, apartado 70; `catalogo-lote11`, `elevacion-pierna-recta-sentado`, `instrucciones[2]`.
- **Evidencia:** la fuente dice «as straight as possible»; HealthMove dice «Sin doblar la rodilla, sube y baja la pierna.»
- **Explicación:** la fuente concede un rango («lo más recta posible»); HealthMove lo convierte en una condición absoluta («sin doblar la rodilla»). Es una C3 que puede ser una aclaración (si se alinea con la fuente) o una adaptación (si se mantiene la condición absoluta). No cambia etiquetas: `flexion_profunda_rodilla` sigue en `false` con evidencia D (la fuente pide la rodilla recta).
- **Consecuencia potencial:** la instrucción de HealthMove es más restrictiva que la fuente. Un usuario que no pueda estirar del todo la rodilla podría descartar el ejercicio aunque la fuente lo permita.
- **Nivel de certeza:** alta.
- **Recomendación:** alinear la instrucción con la fuente («Con la rodilla lo más recta posible, sube y baja la pierna.») o documentar la diferencia como adaptación. No cambiar etiquetas.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente, «as straight as possible».
- **¿Requiere decisión humana?:** no (es una corrección de redacción o de documentación).

### DS-264 · `balanceo-brazos-sentado`: `brazo_sobre_hombro` conservador con la nota de R2.4 ya correcta; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `balanceo-brazos-sentado`, `notas_etiquetado`; `evidencia-lote-11`, apartado 73.
- **Evidencia:** la nota actual dice «[conservadora] brazo_sobre_hombro: el brazo llega a la altura del hombro, o no se dice hasta dónde sube, y no consta que no la pase (CN-1, P25). Se cerraría con: evidencia de la fuente de que el brazo no pasa de la altura del hombro.» La evidencia de Claude dice: «el texto no fija hasta dónde suben (N para la altura máxima)».
- **Explicación:** la nota ya tiene la forma de R2.4 y el motivo es correcto (N para la altura máxima). No hay hallazgo que corregir; se registra como confirmación para que no se confunda con una incidencia.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna. Se mantiene el valor y la nota.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente, que no fija la altura máxima.
- **¿Requiere decisión humana?:** no.

### DS-265 · `elevar-talones-sentado`: `puntillas_talones` en `false` con evidencia D; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `elevar-talones-sentado`, `notas_etiquetado`; `evidencia-lote-11`, apartado 74.
- **Evidencia:** la nota actual dice «Sentado no se carga el peso del cuerpo: no es puntillas_talones.» La evidencia de Claude dice: «D (texto y dibujo), sentado, talones levantados, puntas en el suelo.»
- **Explicación:** la definición de `puntillas_talones` (§4) es «de pie, soportar el peso del cuerpo sobre las puntas de los pies o sobre los talones». Sentado, el peso está en el asiento. La etiqueta `false` tiene evidencia D (R2.2). No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna. Se mantiene el valor y la nota.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente, «Make sure your toes remain on the ground», y el dibujo, sentado.
- **¿Requiere decisión humana?:** no.

### DS-266 · `gemelo-banda-suelo`: `carga_externa` en `false` con la banda; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `gemelo-banda-suelo`, `notas_etiquetado`; `evidencia-lote-11`, apartado 78.
- **Evidencia:** la nota actual dice «La banda solo sirve para tirar del pie: no se marca carga externa.» La evidencia de Claude dice: «poner una banda alrededor del pie; tirar suavemente y notar el estiramiento en la pantorrilla».
- **Explicación:** la definición de `carga_externa` (§4) es «se sostiene peso o resistencia añadida (incluye banda)». La banda aquí no añade resistencia al movimiento: sirve para tirar del pie en un estiramiento. La etiqueta `false` tiene evidencia D (el texto describe un estiramiento suave, no una resistencia). No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** media (la frontera entre «banda como resistencia» y «banda como ayuda para el estiramiento» no está formalizada en el protocolo; la nota actual la resuelve por el uso descrito en la fuente).
- **Recomendación:** ninguna. Se mantiene el valor y la nota. Si el desarrollador quiere formalizar la frontera, sería una cuestión nueva (R1.4), no una corrección de este ejercicio.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente, «pull the band gently and feel the stretch in your calf».
- **¿Requiere decisión humana?:** no (salvo que se quiera formalizar la frontera, que sería una decisión aparte).

### DS-267 · `secarse-toalla-sentado`: `carga_externa` en `false` con una toalla; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `secarse-toalla-sentado`, `exigencias.carga_externa`; `evidencia-lote-11`, apartado 75.
- **Evidencia:** la fuente describe una toalla que se pasa por detrás del cuello; no hay peso ni resistencia añadida.
- **Explicación:** la definición de `carga_externa` (§4) es «se sostiene peso o resistencia añadida (incluye banda)». Una toalla no es un peso ni una resistencia. La etiqueta `false` tiene evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente, que describe una toalla, no un peso.
- **¿Requiere decisión humana?:** no.

### DS-268 · `abrazar-rodilla-tumbado`: `flexion_profunda_rodilla` y `flexion_amplia_cadera` en `true` con evidencia D; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `abrazar-rodilla-tumbado`, `exigencias.flexion_profunda_rodilla` y `exigencias.flexion_amplia_cadera`; `evidencia-lote-11`, apartado 77.
- **Evidencia:** «Rodilla y cadera (D, foto 2): la rodilla queda muy doblada y el muslo pegado al tronco.»
- **Explicación:** las dos etiquetas tienen evidencia D (foto 2). No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** la foto 2 de la fuente.
- **¿Requiere decisión humana?:** no.

### DS-269 · `paso-atras-apoyo`: `una_pierna` en `true` con evidencia D; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `paso-atras-apoyo`, `exigencias.una_pierna`; `evidencia-lote-11`, apartado 76.
- **Evidencia:** «dar un paso atrás con un pie y volver»; la foto muestra una pierna atrás con el pie en el suelo.
- **Explicación:** la definición de `una_pierna` (§4) es «en algún momento el peso cae sobre un solo pie (incluye marchar de pie)». Al dar un paso atrás, el peso cae sobre un solo pie en algún momento. La etiqueta `true` tiene evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente y la foto.
- **¿Requiere decisión humana?:** no.

### DS-270 · `de-pie-mano-preparada`: `equilibrio_sin_apoyo` en `true` con evidencia D; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `de-pie-mano-preparada`, `exigencias.equilibrio_sin_apoyo`; `evidencia-lote-11`, apartado 72.
- **Evidencia:** «estar de pie “unsupported for 1 minute”»; la foto muestra la mano justo encima de una mesa alta, sin tocarla.
- **Explicación:** la definición de `equilibrio_sin_apoyo` (§4) es «de pie, exige no sujetarse a nada». La fuente pide estar de pie sin apoyo y la mano no toca la superficie. La etiqueta `true` tiene evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente, «unsupported», y la foto.
- **¿Requiere decisión humana?:** no.

### DS-271 · `balanceo-brazos-sentado`: `ambos_brazos` en `true` con evidencia D; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `balanceo-brazos-sentado`, `exigencias.ambos_brazos`; `evidencia-lote-11`, apartado 73.
- **Evidencia:** «balancear los brazos “from the shoulder”»; el dibujo muestra los dos brazos balanceándose.
- **Explicación:** la definición de `ambos_brazos` (§4) es «no puede hacerse con un solo brazo». El balanceo es simultáneo de los dos brazos. La etiqueta `true` tiene evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente y el dibujo.
- **¿Requiere decisión humana?:** no.

### DS-272 · `secarse-toalla-sentado`: `brazo_sobre_hombro`, `mano_detras`, `ambos_brazos` y `agarre` en `true` con evidencia D; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `secarse-toalla-sentado`, `exigencias`; `evidencia-lote-11`, apartado 75.
- **Evidencia:** «la toalla por detrás de la cabeza y del cuello, las dos manos a los lados de la cabeza, a la altura de las orejas (D: la mano por encima del hombro)»; «las dos manos cerradas sujetando la toalla».
- **Explicación:** las cuatro etiquetas tienen evidencia D (fotos). No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** las fotos 1-3 de la fuente.
- **¿Requiere decisión humana?:** no.

### DS-273 · `elevacion-pierna-recta-sentado`: `agarre` conservador por la foto; posible CN-3
- **Ubicación exacta:** `catalogo-lote11`, `elevacion-pierna-recta-sentado`, `exigencias.agarre`; `evidencia-lote-11`, apartado 70; `registro`, CN-3.
- **Evidencia:** «Manos (I): en la foto descansan en el borde del asiento; no se ve si lo agarran. El texto no dice nada de las manos.»
- **Explicación:** es la misma clase que CN-3 (apoyo que solo aparece en la imagen). La foto muestra las manos descansando en el borde; el texto no las pide. Q2 (P10) resuelve el contacto sin prensión con `agarre: true` conservador. CN-3 está aplazado y su valor provisional es el actual. Aquí el valor actual es `false`, no `true`; la propuesta es `true` conservador, que es el valor provisional de CN-3.
- **Consecuencia potencial:** si CN-3 se resuelve en el sentido de que el apoyo que solo aparece en la imagen no cuenta, este `true` se revertiría. Mientras tanto, el `true` conservador es coherente con Q2 y con el valor provisional de CN-3.
- **Nivel de certeza:** alta (la clase es la misma que CN-3).
- **Recomendación:** aplicar `true` conservador con la nota de R2.4 (ver propuesta del ejercicio 70) y registrar el ejercicio como caso equivalente de CN-3 en `registro.md`.
- **Prueba o evidencia que permitiría confirmarlo:** la resolución de CN-3.
- **¿Requiere decisión humana?:** sí (la resolución de CN-3, que ya está en manos del desarrollador).

### DS-274 · `apretar-gluteos-sentado`: `agarre` en `false` con las manos sobre los reposabrazos; posible CN-3
- **Ubicación exacta:** `catalogo-lote11`, `apretar-gluteos-sentado`, `exigencias.agarre`; `evidencia-lote-11`, apartado 71; `registro`, CN-3.
- **Evidencia:** «Manos (D por la foto, sin texto): en reposo sobre los reposabrazos. El texto no los pide; el ejercicio no los usa.»
- **Explicación:** a diferencia de `elevacion-pierna-recta-sentado`, aquí las manos descansan sobre los reposabrazos, no sobre el borde del asiento. No hay contacto con un objeto que se pueda sujetar (los reposabrazos son parte del sillón). R7.4 dice que el contacto no demuestra agarre; Q2 (P10) marca `agarre: true` conservador cuando hay contacto o apoyo sin evidencia de prensión. Aquí el contacto es con el reposabrazos, que no es un objeto que se sujete. La etiqueta `false` tiene evidencia D (las manos descansan, no sujetan). No es CN-3: CN-3 trata el apoyo que solo aparece en la imagen y que el texto no pide; aquí el apoyo es en reposo, no en sujeción.
- **Consecuencia potencial:** si se aplicara Q2 sin distinguir el tipo de contacto, se marcaría `agarre: true` conservador. La distinción entre «contacto con un objeto que se puede sujetar» y «contacto en reposo sobre una superficie del propio asiento» no está formalizada.
- **Nivel de certeza:** media (la frontera entre contacto en reposo y contacto con objeto sujetable no está formalizada en el protocolo).
- **Recomendación:** mantener `false` con la nota propuesta en el ejercicio 71. Si el desarrollador quiere formalizar la frontera, sería una cuestión nueva (R1.4), no una corrección de este ejercicio.
- **Prueba o evidencia que permitiría confirmarlo:** una definición del protocolo sobre qué contacto cuenta para Q2.
- **¿Requiere decisión humana?:** sí (si se quiere formalizar la frontera; si no, no).

### DS-275 · `gemelo-banda-suelo`: `ambos_brazos` y `agarre` conservadores por la banda; posible CN-3
- **Ubicación exacta:** `catalogo-lote11`, `gemelo-banda-suelo`, `exigencias.ambos_brazos` y `exigencias.agarre`; `evidencia-lote-11`, apartado 78; `registro`, CN-3.
- **Evidencia:** «Manos (I): “pull the band” exige sujetar la banda; el texto no dice si con una o con dos manos.»
- **Explicación:** a diferencia de CN-3, aquí el texto sí pide sujetar la banda («pull the band»); lo que no dice es con cuántas manos. No es el caso de CN-3 (apoyo que solo aparece en la imagen y que el texto no pide). Es el caso de Q1 (P9) y Q2 (P10): la duda sobre el número de manos y sobre la prensión se resuelve con `true` conservador. La propuesta es mantener los valores y añadir las notas de R2.4 (ver propuesta del ejercicio 78).
- **Consecuencia potencial:** si se aplicara CN-3 sin distinguir, se trataría como un caso de apoyo que solo aparece en la imagen, cuando el texto sí pide sujetar. La distinción es relevante para el valor provisional.
- **Nivel de certeza:** alta (el texto pide sujetar; no es CN-3).
- **Recomendación:** mantener los valores y añadir las notas de R2.4. No registrar como CN-3.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente, «pull the band».
- **¿Requiere decisión humana?:** no.

### DS-276 · `de-pie-mano-preparada`: la mano preparada no es apoyo; posible confusión con Q1
- **Ubicación exacta:** `catalogo-lote11`, `de-pie-mano-preparada`, `exigencias.ambos_brazos` y `exigencias.agarre`; `evidencia-lote-11`, apartado 72; `protocolo` §7.1, «Apoyo para estabilidad».
- **Evidencia:** «Deja la mano justo encima de la superficie, sin tocarla, lista para agarrarte.»
- **Explicación:** la mano preparada no toca la superficie; no es apoyo ni contacto. Q1 (P9) cuenta el apoyo de las dos manos y el uso simultáneo de los dos brazos; aquí no hay ni lo uno ni lo otro. Q2 (P10) cuenta el contacto sin prensión; aquí no hay contacto. Las etiquetas `false` tienen evidencia D. No hay hallazgo que corregir; se registra como confirmación de que la mano preparada no es apoyo.
- **Consecuencia potencial:** si se confundiera con apoyo, se marcarían `ambos_brazos` y `agarre` en `true` conservador, y el ejercicio saldría de «un brazo» y «cerrar la mano» sin motivo.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna. Se mantienen los valores.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente, «Hovering… over a sturdy surface», y la foto, con la mano sin tocar.
- **¿Requiere decisión humana?:** no.

### DS-277 · `elevacion-pierna-recta-sentado`: `ambos_brazos` en `false` con las dos manos descansando en el borde; posible confusión con Q1
- **Ubicación exacta:** `catalogo-lote11`, `elevacion-pierna-recta-sentado`, `exigencias.ambos_brazos`; `evidencia-lote-11`, apartado 70; `protocolo` §7.1, «Reposo».
- **Evidencia:** «manos apoyadas en el borde del asiento a los lados de la cadera»; «las manos descansan; no se ve si agarran».
- **Explicación:** las dos manos descansan en el borde del asiento, pero no hay función de estabilidad ni de carga: el peso está en el asiento y el movimiento es de la pierna. §7.1 clasifica esta función como «Reposo»: «La mano reposa o descansa (muslos, cadera, regazo) sin función en la ejecución. No se marca `ambos_brazos` por esa mano.» Q1 (P9) cuenta el apoyo de las dos manos para la estabilidad; aquí no hay estabilidad que mantener (sentado). La etiqueta `false` tiene evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** si se confundiera con apoyo bilateral, se marcaría `ambos_brazos: true` conservador y el ejercicio saldría de «un brazo» sin motivo.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna. Se mantiene el valor.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente y la foto, sentado con las manos en reposo.
- **¿Requiere decisión humana?:** no.

### DS-278 · `apretar-gluteos-sentado`: `ambos_brazos` en `false` con los antebrazos sobre los reposabrazos; posible confusión con Q1
- **Ubicación exacta:** `catalogo-lote11`, `apretar-gluteos-sentado`, `exigencias.ambos_brazos`; `evidencia-lote-11`, apartado 71; `protocolo` §7.1, «Reposo».
- **Evidencia:** «antebrazo y manos apoyados sobre los reposabrazos».
- **Explicación:** los antebrazos descansan sobre los reposabrazos, pero no hay función de estabilidad ni de carga: el peso está en el asiento y el movimiento es de los glúteos. §7.1 clasifica esta función como «Reposo». Q1 (P9) cuenta el apoyo de las dos manos para la estabilidad; aquí no hay estabilidad que mantener (sentado). La etiqueta `false` tiene evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** si se confundiera con apoyo bilateral, se marcaría `ambos_brazos: true` conservador y el ejercicio saldría de «un brazo» sin motivo.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna. Se mantiene el valor.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente y la foto, sentado con los antebrazos en reposo.
- **¿Requiere decisión humana?:** no.

### DS-279 · `balanceo-brazos-sentado`: `mano_detras` en `false` con las manos a la altura del pecho; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `balanceo-brazos-sentado`, `exigencias.mano_detras`; `evidencia-lote-11`, apartado 73.
- **Evidencia:** «manos abiertas a la altura del pecho o algo por debajo».
- **Explicación:** la definición de `mano_detras` (§4) es «mano detrás de la espalda o de la cabeza». Las manos están al frente, a la altura del pecho. La etiqueta `false` tiene evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** el dibujo de la fuente.
- **¿Requiere decisión humana?:** no.

### DS-280 · `elevar-talones-sentado`: `flexion_profunda_rodilla` en `false` con el dibujo mostrando las rodillas en torno a 90°; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `elevar-talones-sentado`, `exigencias.flexion_profunda_rodilla`; `evidencia-lote-11`, apartado 74.
- **Evidencia:** «detalle de las piernas sentadas en una silla, talones levantados, puntas en el suelo».
- **Explicación:** la definición de `flexion_profunda_rodilla` (§4) es «rodilla más de 90°, agacharse o ponerse en cuclillas». Sentado normal, la rodilla está en torno a 90°, no más. La etiqueta `false` tiene evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** el dibujo de la fuente.
- **¿Requiere decisión humana?:** no.

### DS-281 · `secarse-toalla-sentado`: `flexion_profunda_rodilla` y `flexion_amplia_cadera` en `false` con las fotos mostrando sentado normal; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `secarse-toalla-sentado`, `exigencias.flexion_profunda_rodilla` y `exigencias.flexion_amplia_cadera`; `evidencia-lote-11`, apartado 75.
- **Evidencia:** «sentada a una mesa»; las fotos muestran sentado normal.
- **Explicación:** las definiciones de `flexion_profunda_rodilla` y `flexion_amplia_cadera` (§4) no se cumplen con un sentado normal. Las etiquetas `false` tienen evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** las fotos de la fuente.
- **¿Requiere decisión humana?:** no.

### DS-282 · `paso-atras-apoyo`: `flexion_profunda_rodilla` en `false` con la foto mostrando las rodillas estiradas; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `paso-atras-apoyo`, `exigencias.flexion_profunda_rodilla`; `evidencia-lote-11`, apartado 76.
- **Evidencia:** «vista lateral, de pie frente a una encimera… una pierna atrás con el pie en el suelo».
- **Explicación:** la definición de `flexion_profunda_rodilla` (§4) es «rodilla más de 90°, agacharse o ponerse en cuclillas». La foto muestra las rodillas estiradas. La etiqueta `false` tiene evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** la foto de la fuente.
- **¿Requiere decisión humana?:** no.

### DS-283 · `de-pie-mano-preparada`: `flexion_profunda_rodilla` en `false` con la foto mostrando las rodillas estiradas; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `de-pie-mano-preparada`, `exigencias.flexion_profunda_rodilla`; `evidencia-lote-11`, apartado 72.
- **Evidencia:** «mujer de pie, de frente, pies separados».
- **Explicación:** la definición de `flexion_profunda_rodilla` (§4) es «rodilla más de 90°, agacharse o ponerse en cuclillas». La foto muestra las rodillas estiradas. La etiqueta `false` tiene evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** la foto de la fuente.
- **¿Requiere decisión humana?:** no.

### DS-284 · `gemelo-banda-suelo`: `flexion_profunda_rodilla` en `false` con el texto pidiendo la rodilla recta; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `gemelo-banda-suelo`, `exigencias.flexion_profunda_rodilla`; `evidencia-lote-11`, apartado 78.
- **Evidencia:** «“Do not allow your knee to bend”».
- **Explicación:** la definición de `flexion_profunda_rodilla` (§4) es «rodilla más de 90°, agacharse o ponerse en cuclillas». El texto pide la rodilla recta. La etiqueta `false` tiene evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente.
- **¿Requiere decisión humana?:** no.

### DS-285 · `abrazar-rodilla-tumbado`: `inclinacion_tronco` en `false` con el tronco en la cama; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `abrazar-rodilla-tumbado`, `exigencias.inclinacion_tronco`; `evidencia-lote-11`, apartado 77.
- **Evidencia:** «tumbado boca arriba, rodillas dobladas, pies en la cama».
- **Explicación:** la definición de `inclinacion_tronco` (§4) es «inclinar la espalda hacia delante o hacia un lado, o arquearla hacia atrás, más allá de una inclinación leve». Tumbado, el tronco está en la cama, sin inclinación. La etiqueta `false` tiene evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** las fotos de la fuente.
- **¿Requiere decisión humana?:** no.

### DS-286 · `gemelo-banda-suelo`: `inclinacion_tronco` en `false` con el texto pidiendo la espalda recta; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `gemelo-banda-suelo`, `exigencias.inclinacion_tronco`; `evidencia-lote-11`, apartado 78.
- **Evidencia:** «“back straight against the wall”».
- **Explicación:** la definición de `inclinacion_tronco` (§4) es «inclinar la espalda hacia delante o hacia un lado, o arquearla hacia atrás, más allá de una inclinación leve». El texto pide la espalda recta. La etiqueta `false` tiene evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente.
- **¿Requiere decisión humana?:** no.

### DS-287 · `balanceo-brazos-sentado`: `inclinacion_tronco` en `false` con el texto pidiendo sentarse erguido; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `balanceo-brazos-sentado`, `exigencias.inclinacion_tronco`; `evidencia-lote-11`, apartado 73.
- **Evidencia:** «sentarse erguido “away from the back of the chair”».
- **Explicación:** la definición de `inclinacion_tronco` (§4) es «inclinar la espalda hacia delante o hacia un lado, o arquearla hacia atrás, más allá de una inclinación leve». El texto pide sentarse erguido. La etiqueta `false` tiene evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente.
- **¿Requiere decisión humana?:** no.

### DS-288 · `elevar-talones-sentado`: `inclinacion_tronco` en `false` con el texto pidiendo sentarse erguido; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `elevar-talones-sentado`, `exigencias.inclinacion_tronco`; `evidencia-lote-11`, apartado 74.
- **Evidencia:** «sentarse erguido “away from the back of your chair”».
- **Explicación:** la definición de `inclinacion_tronco` (§4) es «inclinar la espalda hacia delante o hacia un lado, o arquearla hacia atrás, más allá de una inclinación leve». El texto pide sentarse erguido. La etiqueta `false` tiene evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente.
- **¿Requiere decisión humana?:** no.

### DS-289 · `apretar-gluteos-sentado`: `inclinacion_tronco` en `false` con el texto pidiendo «upright seated position»; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `apretar-gluteos-sentado`, `exigencias.inclinacion_tronco`; `evidencia-lote-11`, apartado 71.
- **Evidencia:** «“In an upright seated position”».
- **Explicación:** la definición de `inclinacion_tronco` (§4) es «inclinar la espalda hacia delante o hacia un lado, o arquearla hacia atrás, más allá de una inclinación leve». El texto pide sentarse erguido. La etiqueta `false` tiene evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente.
- **¿Requiere decisión humana?:** no.

### DS-290 · `elevacion-pierna-recta-sentado`: `inclinacion_tronco` en `false` con la foto mostrando el tronco erguido; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `elevacion-pierna-recta-sentado`, `exigencias.inclinacion_tronco`; `evidencia-lote-11`, apartado 70.
- **Evidencia:** «tronco erguido».
- **Explicación:** la definición de `inclinacion_tronco` (§4) es «inclinar la espalda hacia delante o hacia un lado, o arquearla hacia atrás, más allá de una inclinación leve». La foto muestra el tronco erguido. La etiqueta `false` tiene evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** la foto de la fuente.
- **¿Requiere decisión humana?:** no.

### DS-291 · `secarse-toalla-sentado`: `inclinacion_tronco` en `false` con las fotos mostrando el tronco erguido; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `secarse-toalla-sentado`, `exigencias.inclinacion_tronco`; `evidencia-lote-11`, apartado 75.
- **Evidencia:** «tronco erguido».
- **Explicación:** la definición de `inclinacion_tronco` (§4) es «inclinar la espalda hacia delante o hacia un lado, o arquearla hacia atrás, más allá de una inclinación leve». Las fotos muestran el tronco erguido. La etiqueta `false` tiene evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** las fotos de la fuente.
- **¿Requiere decisión humana?:** no.

### DS-292 · `paso-atras-apoyo`: `inclinacion_tronco` en `false` con la foto mostrando el tronco erguido; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `paso-atras-apoyo`, `exigencias.inclinacion_tronco`; `evidencia-lote-11`, apartado 76.
- **Evidencia:** «tronco erguido».
- **Explicación:** la definición de `inclinacion_tronco` (§4) es «inclinar la espalda hacia delante o hacia un lado, o arquearla hacia atrás, más allá de una inclinación leve». La foto muestra el tronco erguido. La etiqueta `false` tiene evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** la foto de la fuente.
- **¿Requiere decisión humana?:** no.

### DS-293 · `de-pie-mano-preparada`: `inclinacion_tronco` en `false` con la foto mostrando el tronco erguido; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `de-pie-mano-preparada`, `exigencias.inclinacion_tronco`; `evidencia-lote-11`, apartado 72.
- **Evidencia:** «tronco erguido».
- **Explicación:** la definición de `inclinacion_tronco` (§4) es «inclinar la espalda hacia delante o hacia un lado, o arquearla hacia atrás, más allá de una inclinación leve». La foto muestra el tronco erguido. La etiqueta `false` tiene evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** la foto de la fuente.
- **¿Requiere decisión humana?:** no.

### DS-294 · `rotacion_tronco` en `false` en los 9 ejercicios; confirmación
- **Ubicación exacta:** `catalogo-lote11`, los 9 ejercicios auditados, `exigencias.rotacion_tronco`; `evidencia-lote-11`, apartados 70 a 78.
- **Evidencia:** ninguno de los textos ni de las imágenes describe un giro de hombros respecto a la cadera.
- **Explicación:** la definición de `rotacion_tronco` (§4) es «girar los hombros respecto a la cadera». Ninguno de los 9 ejercicios lo hace. Las etiquetas `false` tienen evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** los textos e imágenes de las fuentes.
- **¿Requiere decisión humana?:** no.

### DS-295 · `equilibrio_sin_apoyo`, `una_pierna`, `sentarse_levantarse`, `impacto`, `esfuerzo_cardio`, `puntillas_talones` en `false` en los ejercicios sentados o tumbados; confirmación
- **Ubicación exacta:** `catalogo-lote11`, los ejercicios sentados o tumbados (`elevacion-pierna-recta-sentado`, `apretar-gluteos-sentado`, `balanceo-brazos-sentado`, `elevar-talones-sentado`, `secarse-toalla-sentado`, `abrazar-rodilla-tumbado`, `gemelo-banda-suelo`), `exigencias`; `evidencia-lote-11`, apartados 70, 71, 73, 74, 75, 77 y 78.
- **Evidencia:** todos son sentados o tumbados; ninguno tiene fase en el aire ni está pensado para subir el pulso.
- **Explicación:** las definiciones de §4 no se cumplen en posición sentada o tumbada para `equilibrio_sin_apoyo`, `una_pierna`, `sentarse_levantarse`, `impacto`, `esfuerzo_cardio` y `puntillas_talones`. Las etiquetas `false` tienen evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** los textos e imágenes de las fuentes.
- **¿Requiere decisión humana?:** no.

### DS-296 · `equilibrio_sin_apoyo`, `una_pierna`, `sentarse_levantarse`, `impacto`, `esfuerzo_cardio`, `puntillas_talones` en `false` en los ejercicios de pie; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `de-pie-mano-preparada` y `paso-atras-apoyo`, `exigencias`; `evidencia-lote-11`, apartados 72 y 76.
- **Evidencia:** `de-pie-mano-preparada`: de pie sin apoyo, pies separados, sin paso; `paso-atras-apoyo`: de pie con apoyo de las dos manos, paso atrás.
- **Explicación:** `equilibrio_sin_apoyo` es `true` en `de-pie-mano-preparada` (D) y `false` en `paso-atras-apoyo` (D, apoyo bilateral). `una_pierna` es `false` en `de-pie-mano-preparada` (D, pies separados) y `true` en `paso-atras-apoyo` (D, paso atrás). `sentarse_levantarse`, `impacto`, `esfuerzo_cardio` y `puntillas_talones` son `false` en los dos (D). No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** los textos e imágenes de las fuentes.
- **¿Requiere decisión humana?:** no.

### DS-297 · `peso_en_manos` en `false` en los 9 ejercicios; confirmación
- **Ubicación exacta:** `catalogo-lote11`, los 9 ejercicios auditados, `exigencias.peso_en_manos`; `evidencia-lote-11`, apartados 70 a 78.
- **Evidencia:** ninguno de los textos ni de las imágenes describe manos o muñecas soportando parte del peso corporal.
- **Explicación:** la definición de `peso_en_manos` (§4) es «manos o muñecas soportan parte del peso corporal». En los ejercicios sentados o tumbados, el peso está en el asiento o en la cama. En los de pie, las manos se sujetan o se preparan, pero no soportan el peso. Las etiquetas `false` tienen evidencia D. No hay hallazgo que corregir; se registra como confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** los textos e imágenes de las fuentes.
- **¿Requiere decisión humana?:** no.

### DS-298 · `mano_detras` en `false` en los ejercicios que no llevan la mano detrás de la espalda o de la cabeza; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `elevacion-pierna-recta-sentado`, `apretar-gluteos-sentado`, `de-pie-mano-preparada`, `balanceo-brazos-sentado`, `elevar-talones-sentado`, `paso-atras-apoyo`, `abrazar-rodilla-tumbado`, `gemelo-banda-suelo`, `exigencias.mano_detras`; `evidencia-lote-11`, apartados 70, 71, 72, 73, 74, 76, 77 y 78.
- **Evidencia:** ninguno de estos ejercicios lleva la mano detrás de la espalda o de la cabeza.
- **Explicación:** la definición de `mano_detras` (§4) es «mano detrás de la espalda o de la cabeza». Las etiquetas `false` tienen evidencia D. No hay hallazgo que corregir; se registra como confirmación. `secarse-toalla-sentado` tiene `mano_detras: true` (D, la toalla por detrás de la cabeza y del cuello) y no se incluye en esta confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** los textos e imágenes de las fuentes.
- **¿Requiere decisión humana?:** no.

### DS-299 · `brazo_sobre_hombro` en `false` en los ejercicios que no suben el brazo por encima del hombro; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `elevacion-pierna-recta-sentado`, `apretar-gluteos-sentado`, `de-pie-mano-preparada`, `elevar-talones-sentado`, `paso-atras-apoyo`, `abrazar-rodilla-tumbado`, `gemelo-banda-suelo`, `exigencias.brazo_sobre_hombro`; `evidencia-lote-11`, apartados 70, 71, 72, 74, 76, 77 y 78.
- **Evidencia:** ninguno de estos ejercicios sube el brazo por encima del hombro.
- **Explicación:** la definición de `brazo_sobre_hombro` (§4) es «codo o mano por encima de la altura del hombro». Las etiquetas `false` tienen evidencia D. No hay hallazgo que corregir; se registra como confirmación. `balanceo-brazos-sentado` tiene `brazo_sobre_hombro: true` conservador (N para la altura máxima) y `secarse-toalla-sentado` tiene `brazo_sobre_hombro: true` (D, las manos a la altura de las orejas); no se incluyen en esta confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** los textos e imágenes de las fuentes.
- **¿Requiere decisión humana?:** no.

### DS-300 · `ambos_brazos` en `false` en los ejercicios que no usan los dos brazos; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `elevacion-pierna-recta-sentado`, `apretar-gluteos-sentado`, `de-pie-mano-preparada`, `elevar-talones-sentado`, `exigencias.ambos_brazos`; `evidencia-lote-11`, apartados 70, 71, 72 y 74.
- **Evidencia:** ninguno de estos ejercicios usa los dos brazos en la ejecución.
- **Explicación:** la definición de `ambos_brazos` (§4) es «no puede hacerse con un solo brazo». En estos ejercicios los brazos no intervienen o descansan. Las etiquetas `false` tienen evidencia D. No hay hallazgo que corregir; se registra como confirmación. `balanceo-brazos-sentado`, `secarse-toalla-sentado`, `paso-atras-apoyo`, `abrazar-rodilla-tumbado` y `gemelo-banda-suelo` tienen `ambos_brazos: true` (D o conservador) y no se incluyen en esta confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** los textos e imágenes de las fuentes.
- **¿Requiere decisión humana?:** no.

### DS-301 · `agarre` en `false` en los ejercicios que no cierran la mano; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `apretar-gluteos-sentado`, `de-pie-mano-preparada`, `balanceo-brazos-sentado`, `elevar-talones-sentado`, `exigencias.agarre`; `evidencia-lote-11`, apartados 71, 72, 73 y 74.
- **Evidencia:** ninguno de estos ejercicios cierra la mano.
- **Explicación:** la definición de `agarre` (§4) es «cerrar la mano, con o sin objeto, aunque sea en parte (incluye sujetarse a una silla y cerrar el puño)». En estos ejercicios las manos están abiertas o en reposo. Las etiquetas `false` tienen evidencia D. No hay hallazgo que corregir; se registra como confirmación. `elevacion-pierna-recta-sentado` (propuesta `true` conservador), `secarse-toalla-sentado` (D), `paso-atras-apoyo` (D), `abrazar-rodilla-tumbado` (D) y `gemelo-banda-suelo` (conservador) no se incluyen en esta confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** los textos e imágenes de las fuentes.
- **¿Requiere decisión humana?:** no.

### DS-302 · `flexion_amplia_cadera` en `false` en los ejercicios que no acercan el muslo al tronco; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `apretar-gluteos-sentado`, `de-pie-mano-preparada`, `balanceo-brazos-sentado`, `elevar-talones-sentado`, `secarse-toalla-sentado`, `paso-atras-apoyo`, `gemelo-banda-suelo`, `exigencias.flexion_amplia_cadera`; `evidencia-lote-11`, apartados 71, 72, 73, 74, 75, 76 y 78.
- **Evidencia:** ninguno de estos ejercicios acerca el muslo al tronco más que al estar sentado.
- **Explicación:** la definición de `flexion_amplia_cadera` (§4) es «muslo más cerca del tronco que al estar sentado». Las etiquetas `false` tienen evidencia D. No hay hallazgo que corregir; se registra como confirmación. `elevacion-pierna-recta-sentado` (I, propuesta `true` conservador) y `abrazar-rodilla-tumbado` (D, `true`) no se incluyen en esta confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** los textos e imágenes de las fuentes.
- **¿Requiere decisión humana?:** no.

### DS-303 · `flexion_profunda_rodilla` en `false` en los ejercicios que no doblan la rodilla más de 90°; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `elevacion-pierna-recta-sentado`, `apretar-gluteos-sentado`, `de-pie-mano-preparada`, `balanceo-brazos-sentado`, `elevar-talones-sentado`, `secarse-toalla-sentado`, `paso-atras-apoyo`, `gemelo-banda-suelo`, `exigencias.flexion_profunda_rodilla`; `evidencia-lote-11`, apartados 70, 71, 72, 73, 74, 75, 76 y 78.
- **Evidencia:** ninguno de estos ejercicios dobla la rodilla más de 90°.
- **Explicación:** la definición de `flexion_profunda_rodilla` (§4) es «rodilla más de 90°, agacharse o ponerse en cuclillas». Las etiquetas `false` tienen evidencia D. No hay hallazgo que corregir; se registra como confirmación. `abrazar-rodilla-tumbado` (D, `true`) no se incluye en esta confirmación.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba o evidencia que permitiría confirmarlo:** los textos e imágenes de las fuentes.
- **¿Requiere decisión humana?:** no.

### DS-304 · `carga_externa` en `false` en los ejercicios sin peso ni resistencia añadida; confirmación
- **Ubicación exacta:** `catalogo-lote11`, `elevacion-pierna-recta-sentado`, `apretar