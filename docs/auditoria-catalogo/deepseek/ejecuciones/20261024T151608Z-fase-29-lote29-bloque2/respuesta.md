- **Prueba o evidencia que permitiría confirmarlo:** el texto completo de F5, «Side Stretch», p. 7, con el número de repeticiones.
- **¿Requiere decisión humana?:** sí (elegir entre ajustar la dosis o documentarla como adaptación).

### DS-494 · `brazo_sobre_hombro: false` en `abrir-cerrar-manos` contradice las fotos de la fuente
- **Ubicación exacta:** apartado 248, `abrir-cerrar-manos`, exigencia `brazo_sobre_hombro`.
- **Evidencia:** «Fotos (D): … las manos a la altura de la cara, por encima de los hombros» (apartado 248). El catálogo: `brazo_sobre_hombro: false`.
- **Explicación:** §4 marca `brazo_sobre_hombro` con «codo o mano por encima de la altura del hombro». La foto (D) muestra las manos por encima del hombro. Un `false` necesita D de que la exigencia no aparece (R2.2); aquí la D apunta a lo contrario.
- **Consecuencia potencial:** un falso negativo: el ejercicio se ofrece a perfiles con `brazo_arriba` excluido.
- **Nivel de certeza:** alta.
- **Recomendación:** `brazo_sobre_hombro: true` con evidencia D (§4).
- **Prueba o evidencia que permitiría confirmarlo:** la foto de F5, p. 9, con las manos a la altura de la cara.
- **¿Requiere decisión humana?:** sí (aprobar el cambio de etiqueta, R2.6).

### DS-495 · Falta un paso de la secuencia de `banda-curl-sentado`
- **Ubicación exacta:** apartado 249, `banda-curl-sentado`, campo `instrucciones`.
- **Evidencia:** «"Draw the fists upwards towards shoulders then drop the hands to be in line with the elbows"» (apartado 249). El catálogo: «Sube los puños hacia los hombros… Mantén hasta 5 segundos y baja los brazos despacio».
- **Explicación:** la fuente pide bajar las manos hasta la altura de los codos antes de mantener; HealthMove omite ese paso. R3.1 (Q5) pide que la ejecución de HealthMove sea una de las que permite la fuente; omitir un paso de la secuencia es una diferencia sin documentar (C3).
- **Consecuencia potencial:** la ejecución de HealthMove no coincide con la de la fuente; el usuario mantiene en una posición distinta.
- **Nivel de certeza:** alta.
- **Recomendación:** añadir el paso a las instrucciones (R3.1, Q5).
- **Prueba o evidencia que permitiría confirmarlo:** el texto de F5, p. 15, con la secuencia completa.
- **¿Requiere decisión humana?:** sí (aprobar la aclaración de la instrucción).

### DS-496 · La silla cerca y la contingencia de `elevacion-talones-sin-apoyo` no están en `adaptaciones`
- **Ubicación exacta:** apartado 250, `elevacion-talones-sin-apoyo`, campo `adaptaciones` y `notas_etiquetado`.
- **Evidencia:** «La silla cerca y sujetarse si se pierde el equilibrio son de HealthMove (R6.3); la nota lo dice, pero no está en `adaptaciones`» (apartado 250). La fuente solo dice «without support».
- **Explicación:** R6.3 pide documentar como adaptación (C2) el consejo de clase 2 o 3 que HealthMove añade y que la fuente no contiene. La nota lo menciona, pero `adaptaciones` está vacío.
- **Consecuencia potencial:** una diferencia con la fuente sin documentar en el campo que el usuario ve.
- **Nivel de certeza:** alta.
- **Recomendación:** añadir la adaptación a `adaptaciones` (R6.3).
- **Prueba o evidencia que permitiría confirmarlo:** el texto de F2, «Calf raises», con la variante sin apoyo.
- **¿Requiere decisión humana?:** sí (aprobar el texto de la adaptación).

### DS-497 · `equilibrio-una-pierna-pared`: la instrucción no dice cómo se levanta la pierna y las notas no siguen R2.4
- **Ubicación exacta:** apartado 252, `equilibrio-una-pierna-pared`, campo `instrucciones` y `notas_etiquetado`.
- **Evidencia:** «El texto no dice cómo se levanta la pierna» y «Fotos (D): … la rodilla sube por delante hasta la altura de la cadera» (apartado 252). El catálogo: «Levanta la pierna izquierda con la cadera nivelada…».
- **Explicación:** la instrucción de HealthMove no fija cómo se levanta la pierna, y la foto (D) sí lo muestra. R3.1 (Q5) pide que la ejecución de HealthMove sea una de las que permite la fuente; la foto fija el rango. Además, las notas de `ambos_brazos` y `brazo_sobre_hombro` no siguen la forma de R2.4.
- **Consecuencia potencial:** una instrucción ambigua que no coincide con la foto de la fuente; notas que no permiten cerrar el caso.
- **Nivel de certeza:** media (la foto es D, pero la instrucción no contradice la fuente, solo la omite).
- **Recomendación:** aclarar la instrucción según la foto y reescribir las notas en la forma de R2.4.
- **Prueba o evidencia que permitiría confirmarlo:** la foto de F3, «One-leg stand», con la rodilla por delante hasta la cadera.
- **¿Requiere decisión humana?:** sí (aprobar la aclaración de la instrucción).

### DS-498 · `peso_en_manos: false` en `estiramiento-gemelo-pared` con un indicio de carga en las manos
- **Ubicación exacta:** apartado 253, `estiramiento-gemelo-pared`, exigencia `peso_en_manos` y `notas_etiquetado`.
- **Evidencia:** «Manos (I): al inclinarse hacia la pared, las manos soportan algo de peso, como en 251 (I, por la foto)» (apartado 253). El catálogo: `peso_en_manos: false` sin nota.
- **Explicación:** R7.3 prohíbe inferir carga del contacto, pero aquí la foto (I) sugiere que el cuerpo inclinado hacia la pared deja parte del peso en las manos. Un `false` necesita D de que la exigencia no aparece (R2.2); un I no basta. R2.1 permite el `true` conservador con nota.
- **Consecuencia potencial:** un falso negativo: el ejercicio se ofrece a perfiles con `peso_manos` excluido.
- **Nivel de certeza:** media (la evidencia es I, no D).
- **Recomendación:** `peso_en_manos: true` conservador con nota en la forma de R2.4 (R2.1).
- **Prueba o evidencia que permitiría confirmarlo:** una foto lateral de F4 que muestre cuánto peso soportan las manos, o una revisión profesional.
- **¿Requiere decisión humana?:** sí (aprobar el cambio de etiqueta, R2.6).

---

## Limitaciones de la verificación

- **No he abierto las fuentes originales.** Todo lo que afirmo sobre ellas procede de la evidencia de Claude (`evidencia-lote-29`). No puedo confirmar ni refutar las calificaciones D/I/N de las imágenes ni las citas.
- **No he visto las ilustraciones de HealthMove.** Las comparaciones de R7.6/R7.7 se basan en la descripción de Claude y en la lista de discrepancias conocidas del protocolo (`sentado.mjs:33` para `banda-curl-sentado`, `depie.mjs:18` para `equilibrio-una-pierna-pared`).
- **No puedo verificar la versión del catálogo** (cabecera de `node scripts/auditoria.mjs cabecera`): no se entrega. Los datos auditados son los del bloque `catalogo-lote29`.
- **`especifica_de`:** la evidencia no declara población para ninguna de las cinco fuentes. No propongo rellenarlo (R8.1); si Claude la declara al verificar, habría que añadirlo.
- **`elevacion-talones-apoyo`** se usa solo como contexto (base de `variante_de` de `elevacion-talones-sin-apoyo`); no se audita.
- **Cuestión que requiere evidencia o revisión profesional:** el cierre de `agarre` por apoyo sin prensión (Q2, P10) y el de `peso_en_manos` por indicio de carga (DS-498) se cerrarían con una revisión profesional que confirme si basta apoyar la palma abierta o cuánto peso soportan las manos. No emito ese juicio.

FIN DEL BORRADOR