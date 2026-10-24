…resumidos con palabras propias: piernas estiradas en la cama; doblar y estirar los tobillos «Briskly… as much as possible»; hacer círculos con los tobillos; 10 veces, y repetir a menudo a lo largo del día.
- Coincidencias (C1): posición, flexión y extensión del tobillo, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, se omiten los círculos de tobillo. Ya está en `adaptaciones`. La exclusión del catálogo v1 (especificación §4) nombra solo la muñeca; ver DS-360.
- Adaptaciones que deben documentarse: ninguna nueva.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), flexión y extensión del tobillo con energía. D (texto), la fuente también propone círculos.
- Limitaciones de la verificación: el dibujo es un detalle del pie.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento de tobillo | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| agarre | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): piernas estiradas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide (detalle del pie, flexión y extensión).
- Exclusiones del catálogo v1: la adaptación omite los círculos de tobillo por «movilidad articular aislada, igual que la muñeca», pero la exclusión de §4 nombra solo la muñeca. Ver DS-360.
- `fuente.especifica_de`: vacío (ver DS-357).

### Incidencias
- La justificación de la adaptación (círculos de tobillo como «movilidad articular aislada») no está en la lista de exclusiones del catálogo v1 tal como está redactada. Ver DS-360.

### Propuesta de cambios
- `fuente.especifica_de`: «encamados» (DS-357).
- `fuente.consultado`: 2026-10-24.
- `adaptaciones`: mantener el texto actual mientras DS-360 siga abierto; si el desarrollador confirma que la exclusión de «movilidad aislada» cubre también el tobillo, se reescribe la justificación para citar la exclusión aplicable.

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (DS-360: justificación de la omisión de los círculos de tobillo frente a las exclusiones del catálogo v1).

---

## Hallazgos

### DS-356 · `especifica_de` vacío en los 15 ejercicios de F1 pese a que la fuente declara población
- **Ubicación exacta:** `catalogo-lote12`, campo `fuente.especifica_de` de los 15 ejercicios (todos vacíos). Evidencia de la fuente: `evidencia-lote-12`, «Datos comunes a todo el folleto (D)», población declarada.
- **Evidencia:** «Población declarada: personas que pasan en la cama más tiempo de lo normal por estar enfermas, o que no pueden levantarse («spending more time in bed than normal, due to being unwell, or if you are unable to get out of bed»).»
- **Explicación:** R8.1 permite rellenar `especifica_de` cuando la fuente declara la población. La fuente la declara. Ninguno de los 15 ejercicios la tiene. No es un error de la evidencia de Claude: es un campo del catálogo que no se ha rellenado.
- **Consecuencia potencial:** la ficha no muestra «Material pensado para: …» (P17) en estos 15 ejercicios, aunque la fuente sí declara población. La información de procedencia queda incompleta.
- **Nivel de certeza:** alta (la población está en la evidencia; el campo está vacío en el catálogo).
- **Recomendación:** proponer un nombre breve de población, coherente con los existentes («párkinson», «residencias», «discapacidad intelectual»). Candidatos: «encamados» o «personas encamadas». El nombre lo confirma el desarrollador en la revisión final (P29).
- **Prueba o evidencia que permitiría confirmarlo:** que el desarrollador apruebe el nombre; después, `node scripts/validar-catalogo.mjs` y la ficha en el navegador.
- **¿Requiere decisión humana?:** sí. El nombre de la población.

### DS-357 · `ambos_brazos` en círculos de hombros con los brazos a los lados (82)
- **Ubicación exacta:** `catalogo-lote12`, `circulos-hombros-tumbado`, exigencia `ambos_brazos` (actual `false`). Evidencia: `evidencia-lote-12`, n.º 82.
- **Evidencia:** «con los brazos a los lados, círculos lentos de hombros arriba, atrás y abajo; después hacia delante; 5 veces en cada sentido».
- **Explicación:** Q1 (P9) cuenta como `ambos_brazos` el uso simultáneo de los dos brazos y la alternancia continua. El texto no dice si los círculos se hacen con los dos hombros a la vez o uno después del otro. Si son simultáneos, es `true` por evidencia; si son alternos sin pausa, es `true` por Q1; si son series de un hombro y después del otro, es `false`. La evidencia no lo determina.
- **Consecuencia potencial:** si se marca `true` conservador, el ejercicio sale de `un_brazo` (modo auditoría). Si se deja `false` sin evidencia D de que no se usan los dos brazos a la vez, se incumple R2.2.
- **Nivel de certeza:** media (la duda está en el texto; la evidencia no la resuelve).
- **Recomendación:** `true` conservador con nota `[conservadora]` en la forma de R2.4, salvo que Claude confirme en la fuente que los hombros se mueven de uno en uno. Si se confirma, `false` con D.
- **Prueba o evidencia que permitiría confirmarlo:** releer el texto completo del n.º 2 en la fuente; si hay una frase que fije el orden («one at a time», «both shoulders»), se aplica.
- **¿Requiere decisión humana?:** no si la fuente lo aclara; sí si sigue ambigua y el desarrollador quiere fijar el criterio.

### DS-358 · `flexion_profunda_rodilla` en el puente (90 y 91)
- **Ubicación exacta:** `catalogo-lote12`, `puente-tumbado` y `banda-puente-tumbado`, exigencia `flexion_profunda_rodilla` (actual `false`). Evidencia: `evidencia-lote-12`, n.º 90 y 91.
- **Evidencia:** «Rodillas (I, dibujo): en torno a 90° o algo más abiertas.» Y la nota actual del catálogo: «las rodillas no pasan de 90°».
- **Explicación:** R7.8 fija el umbral en «más de 90°», medido como ángulo aproximado entre muslo y pierna en vista lateral. La evidencia califica el dibujo como I («en torno a 90° o algo más abiertas»). Un I no basta para `false` (R2.3). La nota actual afirma «no pasan de 90°», que es una conclusión que la evidencia no sostiene con D.
- **Consecuencia potencial:** si se deja `false`, se apoya en una nota que no tiene evidencia D. Si se marca `true` conservador, el ejercicio sale de `rodilla` (modo auditoría).
- **Nivel de certeza:** media (la evidencia es I; la nota actual no se sostiene con D).
- **Recomendación:** `true` conservador con nota `[conservadora]` en la forma de R2.4, salvo que Claude confirme en el dibujo que la rodilla queda claramente por debajo de 90°. La nota actual se sustituye.
- **Prueba o evidencia que permitiría confirmarlo:** medir el ángulo en el dibujo renderizado (R7.9) o encontrar una frase en el texto que fije la posición de la rodilla.
- **¿Requiere decisión humana?:** no si la fuente lo aclara; sí si sigue ambigua.

### DS-359 · Justificación de la omisión de los círculos de tobillo frente a las exclusiones del catálogo v1 (93)
- **Ubicación exacta:** `catalogo-lote12`, `bombeo-tobillos-tumbado`, campo `adaptaciones`. Evidencia: `evidencia-lote-12`, n.º 93. Especificación §4, «Exclusiones del catálogo v1».
- **Evidencia:** la adaptación dice «Se omiten los círculos de tobillo que propone la fuente (movilidad articular aislada, igual que la muñeca).» La especificación §4 dice: «movilidad aislada de la muñeca (giros o círculos), porque ninguna exigencia la cubre».
- **Explicación:** la exclusión del catálogo v1 nombra solo la muñeca. La adaptación extiende el criterio al tobillo («igual que la muñeca»). Es una decisión de HealthMove que no está en la lista de exclusiones tal como está redactada. No es un error de la evidencia: es una diferencia entre la justificación de la adaptación y la especificación.
- **Consecuencia potencial:** la adaptación se presenta con una justificación que no coincide con la exclusión aprobada. Si el desarrollador quiere que la exclusión cubra también el tobillo, hay que ampliar la especificación §4; si no, la justificación debe cambiar.
- **Nivel de certeza:** alta (la diferencia está en los textos).
- **Recomendación:** presentar al desarrollador la opción de ampliar la exclusión a «movilidad aislada de muñeca o tobillo» o de reescribir la justificación de la adaptación. No se cambia la etiqueta.
- **Prueba o evidencia que permitiría confirmarlo:** decisión del desarrollador sobre la redacción de la exclusión.
- **¿Requiere decisión humana?:** sí. La redacción de la exclusión o de la adaptación.

### DS-360 · `brazo_sobre_hombro` en `elevacion-brazos-tumbado`: ¿el brazo sube estirado?
- **Ubicación exacta:** `catalogo-lote12`, `elevacion-brazos-tumbado`, instrucción 2. Evidencia: `evidencia-lote-12`, n.º 79.
- **Evidencia:** «Dibujo (D): tumbado boca arriba; un brazo sube desde el costado hasta por encima de la cabeza (flecha en arco)». El texto no dice «sin doblar el codo».
- **Explicación:** la propuesta de cambio de 79 añade «sin doblar el codo» como aclaración. La evidencia no cita una frase de la fuente que lo diga; solo el dibujo. Si el dibujo no permite determinarlo con claridad, la aclaración no se sostiene y hay que retirarla. No afecta a ninguna etiqueta.
- **Consecuencia potencial:** una aclaración sin fundamento en la fuente. No cambia etiquetas.
- **Nivel de certeza:** baja (la evidencia no cita el texto; solo el dibujo).
- **Recomendación:** aplicar la aclaración solo si Claude confirma en el dibujo que el codo está estirado; si no, retirarla.
- **Prueba o evidencia que permitiría confirmarlo:** releer el dibujo renderizado del n.º 3.
- **¿Requiere decisión humana?:** no.

### DS-361 · `flexion_amplia_cadera` en `deslizar-talon-tumbado` y `banda-deslizar-talon-tumbado` (88 y 89)
- **Ubicación exacta:** `catalogo-lote12`, `deslizar-talon-tumbado` y `banda-deslizar-talon-tumbado`, exigencia `flexion_amplia_cadera` (actual `true`). Evidencia: `evidencia-lote-12`, n.º 88 y 89.
- **Evidencia:** «Rodilla y cadera (I): el dibujo muestra la rodilla en torno a 90°; el texto («towards your buttocks») no fija hasta dónde. El muslo sube hacia el tronco, sin que conste si más que al estar sentado.»
- **Explicación:** la definición de §4 es «muslo más cerca del tronco que al estar sentado». La evidencia califica la posición del muslo como I y dice expresamente que no consta si supera la referencia. Un I no basta para `false` (R2.3), así que el `true` actual se mantiene, pero la nota actual no tiene la forma de R2.4. Es una duda de aplicación de R2.4, no de valor.
- **Consecuencia potencial:** la nota no cumple R2.4 y no se puede auditar como conservadora.
- **Nivel de certeza:** alta (la nota actual no tiene la forma de R2.4).
- **Recomendación:** sustituir la nota por una `[conservadora]` en la forma de R2.4, como se propone en 88 y 89.
- **Prueba o evidencia que permitiría confirmarlo:** aplicar el cambio y comprobar el formato con `node scripts/auditoria.mjs validar`.
- **¿Requiere decisión humana?:** no.

### DS-362 · `flexion_profunda_rodilla` en `deslizar-talon-tumbado` y `banda-deslizar-talon-tumbado` (88 y 89)
- **Ubicación exacta:** `catalogo-lote12`, `deslizar-talon-tumbado` y `banda-deslizar-talon-tumbado`, exigencia `flexion_profunda_rodilla` (actual `true`). Evidencia: `evidencia-lote-12`, n.º 88 y 89.
- **Evidencia:** «el dibujo muestra la rodilla en torno a 90°; el texto («towards your buttocks») no fija hasta dónde».
- **Explicación:** el umbral de §4 es «más de 90°». La evidencia califica el dibujo como I («en torno a 90°»). Un I no basta para `false` (R2.3), así que el `true` actual se mantiene, pero la nota actual no tiene la forma de R2.4. Es una duda de aplicación de R2.4, no de valor.
- **Consecuencia potencial:** la nota no cumple R2.4.
- **Nivel de certeza:** alta (la nota actual no tiene la forma de R2.4).
- **Recomendación:** sustituir la nota por una `[conservadora]` en la forma de R2.4, como se propone en 88 y 89.
- **Prueba o evidencia que permitiría confirmarlo:** aplicar el cambio y comprobar el formato con `node scripts/auditoria.mjs validar`.
- **¿Requiere decisión humana?:** no.

### DS-363 · `especifica_de` en los 15 ejercicios: nombre de población
- **Ubicación exacta:** `catalogo-lote12`, campo `fuente.especifica_de` de los 15 ejercicios. Evidencia: `evidencia-lote-12`, «Datos comunes».
- **Evidencia:** «personas que pasan en la cama más tiempo de lo normal por estar enfermas, o que no pueden levantarse».
- **Explicación:** R8.1 pide un nombre breve, coherente con los existentes. La población de F1 no coincide exactamente con ninguna de las existentes («párkinson», «amputación por debajo de la rodilla», «dolor lumbar», «usuarios de silla de ruedas», «rehabilitación tras un ingreso hospitalario», «residencias», «discapacidad intelectual», «pies y tobillos», «cadera», «rodilla»). Hay que elegir un nombre nuevo. Es una decisión del desarrollador (P29: los nombres nuevos de `especifica_de` se confirman en la revisión final).
- **Consecuencia potencial:** si se elige un nombre que no encaja con los existentes, la ficha muestra una población distinta de la que declara la fuente.
- **Nivel de certeza:** alta (la población está en la evidencia; el nombre no está decidido).
- **Recomendación:** proponer «encamados» o «personas encamadas» y confirmarlo con el desarrollador.
- **Prueba o evidencia que permitiría confirmarlo:** aprobación del desarrollador.
- **¿Requiere decisión humana?:** sí. El nombre de la población.

---

## Limitaciones de la verificación

- **No se ha consultado la fuente original.** Solo se ha trabajado con la evidencia de Claude (`evidencia-lote-12`). Las citas literales de la fuente que aparecen en este borrador son las que Claude ha transcrito en la evidencia; no se ha comprobado su literalidad contra el PDF.
- **No se ha verificado el commit ni el identificador git del catálogo.** No se han entregado. La cabecera del informe definitivo debe incluirlos (protocolo §10.2).
- **No se han renderizado las ilustraciones de HealthMove.** Se ha confiado en la comparación que Claude describe en la evidencia. R7.6 y R7.7 no se han podido comprobar de forma independiente.
- **No se ha medido el impacto en la disponibilidad** (R9.1). Los cambios propuestos afectan a `un_brazo` (82, si se aplica DS-357), `rodilla` (90 y 91, si se aplica DS-358) y `cadera` (88 y 89, ya en `true`). La medición con `node scripts/disponibilidad.mjs --escenario` queda para el informe definitivo.
- **No se ha podido comprobar el estado de `banda-curl-sentado`** (base de `variante_de` de `banda-flexion-codo-tumbado`): no se audita en este lote.
- **Las decisiones sobre nombres de población y sobre la redacción de la exclusión de movilidad aislada requieren al desarrollador** (P29). No se aprueban aquí.

FIN DEL BORRADOR