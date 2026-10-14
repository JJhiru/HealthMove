# Auditoría del catálogo — Lote 4

- Fecha: 2026-10-14
- Auditor: Claude, con la skill `auditar-catalogo-ejercicios`. Es una auditoría documental, no una validación clínica.
- Catálogo: v0.3.0, sin modificar.
- Criterios aplicados, según las decisiones del desarrollador (ver `registro.md`):
  - `ambos_brazos`: criterio literal sobre las instrucciones documentadas.
  - Umbral operativo de 90° para `flexion_profunda_rodilla`.
  - `especifica_de` para el folleto de Leicester.

Fuentes abiertas (las mismas de los lotes 2 y 3, ya descargadas):

- **Specialist Mobility Centre (Leicester), «Seated Exercises – Information for Patients»:**
  - dirigido a quien usa silla de ruedas;
  - sin licencia indicada;
  - ilustraciones no revisadas.
- **Age UK Devon, «Seated Vitality at Home» (2020):**
  - todos los derechos reservados;
  - el texto extraído mezcla columnas, y cada ejercicio se ha reconstruido por contexto;
  - ilustraciones no revisadas.

---

## 16. boxeo-circulos-pecho

### Identificación
- ID: `boxeo-circulos-pecho`
- Nombre: Círculos de puños a la altura del pecho
- Fuente: Leicester, ejercicio 9, «Boxing Speedball», pista «HINT»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Ubicación exacta:** PDF, p. 5. Es el ejercicio 9, con la pista final: si duelen los hombros, subir las manos solo a la altura del pecho.
- **Pasos originales, con palabras propias:** igual que «Boxing Speedball» (puños girando uno alrededor del otro, 20 hacia delante y 20 hacia atrás), pero con las manos a la altura del pecho.
- **Coincidencias:** todo.
- **Diferencias:** ninguna.
- **Adaptaciones que deben documentarse:** ninguna. `variante_de` ya enlaza con `boxeo-circulos-alto`, lo que resuelve la nota del lote 3.
- **Limitaciones de la verificación:** ilustración no revisada.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Sentado | FALSE | — |
| una_pierna | false | — | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | — | FALSE | — |
| brazo_sobre_hombro | false | Manos a la altura del pecho | FALSE | Es precisamente la versión sin brazo sobre el hombro |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | true | Puños girando uno alrededor del otro | TRUE | — |
| agarre | true | Puños cerrados | TRUE | — |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | — | FALSE | — |
| flexion_amplia_cadera | false | — | FALSE | — |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | false | — | FALSE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
Coherentes. Falta `especifica_de` (decisión 3).

### Incidencias
Solo la común de Leicester.

### Propuesta de cambios
- `fuente.especifica_de`: (ausente) → «usuarios de silla de ruedas».

### Decisión pendiente del desarrollador
**LISTO PARA APROBACIÓN DOCUMENTAL** una vez añadido `especifica_de`.

---

## 17. arquear-espalda-sentado

### Identificación
- ID: `arquear-espalda-sentado`
- Nombre: Estiramiento de espalda con escápulas
- Fuente: Leicester, ejercicio 10, «Back stretches»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA en el movimiento, con una ADAPTACIÓN NO DOCUMENTADA en la dosis.

### Evidencia de la fuente
- **Ubicación exacta:** PDF, p. 5, «10) Back stretches».
- **Pasos originales, con palabras propias:**
  1. Repartir el peso sobre los dos isquiones.
  2. Manos en la zona lumbar o en la cadera.
  3. Sentarse lo más alto posible arqueando la espalda y juntando omóplatos y codos hacia atrás.
  4. Mantener contando hasta 5 y relajar.
  5. **No se indica número de repeticiones.**
- **Coincidencias:** posición y movimiento.
- **Diferencias:**
  1. Solo manos en la cadera; está documentado.
  2. Dosis «5 veces»: la fuente no da repeticiones, y esto no está documentado.
- **Adaptaciones que deben documentarse:** las 5 repeticiones.
- **Limitaciones de la verificación:** ilustración no revisada.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Sentado | FALSE | — |
| una_pierna | false | — | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | — | FALSE | — |
| brazo_sobre_hombro | false | Manos en la cadera | FALSE | — |
| mano_detras | false | Solo la cadera (adaptación documentada) | FALSE | — |
| ambos_brazos | false | «Juntando omóplatos y codos» con las dos manos en la cadera | **TRUE** | Criterio literal: el gesto se describe con los dos brazos |
| agarre | false | Manos apoyadas | FALSE | — |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | — | FALSE | — |
| flexion_amplia_cadera | false | — | FALSE | — |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | true | «Arching your back» | TRUE | Arqueo hacia atrás, más que leve |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
- **Fases** (`principal`, `calma`): aceptables.
- **Duración** (50 s): coherente con 5 mantenimientos de 5 s.

### Incidencias
1. Dosis sin respaldo en la fuente.
2. `ambos_brazos`.
3. Falta `especifica_de`.

### Propuesta de cambios
- `exigencias.ambos_brazos`: false → **true**.
- `adaptaciones`: añadir «La fuente no indica repeticiones; se proponen 5».
- `fuente.especifica_de`: → «usuarios de silla de ruedas».

### Decisión pendiente del desarrollador
**REQUIERE CORRECCIONES.**

---

## 18. movilidad-lumbar-sentado

### Identificación
- ID: `movilidad-lumbar-sentado`
- Nombre: Movilidad de la zona lumbar
- Fuente: Leicester, ejercicio 11, «Lower back mobility»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Ubicación exacta:** PDF, p. 6, «11) Lower back mobility».
- **Pasos originales, con palabras propias:**
  1. Sentarse algo adelantado, sin apoyo en la espalda.
  2. Crecer arqueando la zona lumbar.
  3. Después hundirse aplanando la espalda hacia el respaldo.
  4. 5 veces, descansar y repetir si se puede.
- **Coincidencias:** todo.
- **Diferencias:** ninguna.
- **Adaptaciones que deben documentarse:** ninguna.
- **Limitaciones de la verificación:** ilustración no revisada.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Sentado | FALSE | — |
| una_pierna | false | — | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | — | FALSE | — |
| brazo_sobre_hombro | false | — | FALSE | — |
| mano_detras | false | La fuente no pone las manos detrás | FALSE | — |
| ambos_brazos | false | No intervienen los brazos | FALSE | — |
| agarre | false | — | FALSE | — |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | Pie bajo la rodilla | FALSE | Umbral operativo |
| flexion_amplia_cadera | false | Sentado | FALSE | Al encorvarse puede acercarse algo el tronco a los muslos; es leve |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | true | Arquear y redondear la zona lumbar | TRUE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
Coherentes. Falta `especifica_de`.

### Incidencias
Solo la común de Leicester.

### Propuesta de cambios
- `fuente.especifica_de`: → «usuarios de silla de ruedas».

### Decisión pendiente del desarrollador
**LISTO PARA APROBACIÓN DOCUMENTAL** una vez añadido `especifica_de`.

---

## 19. estiramiento-gemelo-sentado

### Identificación
- ID: `estiramiento-gemelo-sentado`
- Nombre: Estiramiento de gemelo en la silla
- Fuente: Age UK Devon, «Calf Stretch»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Ubicación exacta:** «Seated Vitality at Home», p. 8, «Calf Stretch».
- **Pasos originales, con palabras propias:**
  1. Postura erguida y pies apoyados.
  2. Estirar una pierna.
  3. Poner las manos en la rodilla contraria.
  4. Llevar la punta del pie estirado hacia arriba y poco a poco hacia la rodilla.
  5. Mantener hasta 10 s, soltar despacio y cambiar de pierna.
- **Coincidencias:** todo.
- **Diferencias:** ninguna.
- **Adaptaciones que deben documentarse:** ninguna.
- **Limitaciones de la verificación:** no se ha visto la ilustración (que diría si el talón sigue en el suelo). La nota interna lo afirma, pero el texto de la fuente no lo dice.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Sentado | FALSE | — |
| una_pierna | false | — | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | — | FALSE | — |
| brazo_sobre_hombro | false | — | FALSE | — |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | false | «Place hands on opposite knee» | **TRUE** | Criterio literal. Es candidato a adaptación trivial («apoya una o las dos manos»), no a un ejercicio nuevo |
| agarre | false | Las manos se apoyan | FALSE | — |
| peso_en_manos | false | Las manos descansan en la rodilla | FALSE | — |
| flexion_profunda_rodilla | false | Una pierna estirada y la otra en la postura sentada | FALSE | — |
| flexion_amplia_cadera | false | La fuente no dice que la pierna se eleve | FALSE | Si se elevara pasaría a TRUE. La nota dice que el talón queda en el suelo; está por confirmar con la ilustración |
| puntillas_talones | false | Sentado | FALSE | — |
| inclinacion_tronco | false | No se pide inclinarse | FALSE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
Coherentes.

### Incidencias
1. `ambos_brazos`.
2. La nota «el talón queda en el suelo» no está en el texto de la fuente.

### Propuesta de cambios
- `exigencias.ambos_brazos`: false → **true**. Alternativa: documentar la adaptación «apoya una o las dos manos» y dejarla en false. Va a la lista de candidatos a variante.
- `notas_etiquetado`: aclarar que lo del talón en el suelo es una interpretación nuestra.

### Decisión pendiente del desarrollador
**REQUIERE CORRECCIONES.**

---

## 20. abrir-cerrar-manos

### Identificación
- ID: `abrir-cerrar-manos`
- Nombre: Abrir y cerrar las manos
- Fuente: Age UK Devon, «Hand and Finger Flexion and Extension – Fingers»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Ubicación exacta:** «Seated Vitality at Home», p. 8.
- **Pasos originales, con palabras propias:**
  1. Postura erguida.
  2. Extender los brazos separándolos del cuerpo.
  3. Cerrar los dedos en puño.
  4. Abrir y estirar los dedos.
  5. Hasta 8 veces.
- **Coincidencias:** todo.
- **Diferencias:** ninguna.
- **Adaptaciones que deben documentarse:** ninguna.
- **Limitaciones de la verificación:** la página mezcla en columnas este ejercicio con un estiramiento lateral (codo arriba, mantener de 8 a 10 s). Se han separado por contexto. Ilustración no revisada.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Sentado | FALSE | — |
| una_pierna | false | — | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | — | FALSE | — |
| brazo_sobre_hombro | false | «Extend the arms away from the body», sin altura indicada | FALSE | Extender los brazos al frente o a los lados no exige pasar del hombro |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | false | «Extend the arms», en plural | **TRUE** | Criterio literal. Es candidato a adaptación trivial («con una mano o con las dos») |
| agarre | true | Cerrar el puño | TRUE | — |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | — | FALSE | — |
| flexion_amplia_cadera | false | — | FALSE | — |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | false | — | FALSE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
Coherentes.

### Incidencias
1. `ambos_brazos`.

### Propuesta de cambios
- `exigencias.ambos_brazos`: false → **true**. También va a la lista de candidatos a adaptación.

### Decisión pendiente del desarrollador
**REQUIERE CORRECCIONES.**

---

## 21. pulgar-dedos

### Identificación
- ID: `pulgar-dedos`
- Nombre: Pulgar con cada dedo
- Fuente: Age UK Devon, «Finger Dexterity»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Ubicación exacta:** «Seated Vitality at Home», p. 8, «Finger Dexterity».
- **Pasos originales, con palabras propias:**
  1. Extender un brazo, con la palma hacia abajo y los dedos estirados.
  2. Tocar el pulgar con cada dedo.
  3. Hasta 4 veces.
  4. Cambiar de mano.
- **Coincidencias:** todo.
- **Diferencias:** ninguna.
- **Adaptaciones que deben documentarse:** ninguna.
- **Limitaciones de la verificación:** ilustración no revisada.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Sentado | FALSE | — |
| una_pierna | false | — | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | — | FALSE | — |
| brazo_sobre_hombro | false | Brazo extendido, sin altura indicada | FALSE | — |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | false | «Extend one arm… change hands» | FALSE | La fuente lo hace con una mano cada vez |
| agarre | true | Cierre parcial de la mano | TRUE | Criterio conservador ya anotado |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | — | FALSE | — |
| flexion_amplia_cadera | false | — | FALSE | — |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | false | — | FALSE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
Coherentes.

### Incidencias
Ninguna.

### Propuesta de cambios
Ninguna.

### Decisión pendiente del desarrollador
**LISTO PARA APROBACIÓN DOCUMENTAL.**

---

## 22. activacion-sentado

### Identificación
- ID: `activacion-sentado`
- Nombre: Activación en la silla
- Fuente: Age UK Devon, «Circulation Booster», primera ronda
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Ubicación exacta:** «Seated Vitality at Home», «Let's Warm Up – Circulation Booster», «Rep. 1».
- **Pasos originales, con palabras propias:**
  1. Toques de punta al ritmo de la música: pie izquierdo, derecho, alternos y los dos de lado a lado.
  2. Balanceo suave y alterno de los brazos, con los codos pegados y los dedos apuntando al frente.
  3. Toque en las rodillas y palmada a la altura del pecho. Cierra la ronda 1 antes de «Rest» y «Rep. 2».
  4. La fuente declara que el bloque busca subir la frecuencia cardiaca.
- **Coincidencias:** todo.
- **Diferencias:**
  1. Solo se incluye la ronda 1; está documentado.
  2. La fuente sugiere hacerlo con música; es un detalle opcional.
- **Adaptaciones que deben documentarse:** ninguna más.
- **Limitaciones de la verificación:** el orden de los bloques se ha reconstruido de un texto en columnas.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Sentado | FALSE | — |
| una_pierna | false | — | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | Toques de punta y palmadas | FALSE | No hay fase en el aire ni golpe al cargar el peso |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | true | «Will increase your heart rate» | TRUE | Declarado por la fuente |
| brazo_sobre_hombro | false | Palmada a la altura del pecho y codos pegados | FALSE | — |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | true | Palmadas | TRUE | — |
| agarre | false | Los dedos apuntan al frente; la palmada no cierra la mano | FALSE | — |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | Toques de punta junto a la silla | FALSE | — |
| flexion_amplia_cadera | false | — | FALSE | — |
| puntillas_talones | false | Sentado | FALSE | — |
| inclinacion_tronco | false | Tocar las rodillas sentado | FALSE | Inclinación leve |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
- **Fases** (`calentamiento`): correcto.
- **Duración** (120 s): plausible.

### Incidencias
Ninguna.

### Propuesta de cambios
Ninguna.

### Decisión pendiente del desarrollador
**LISTO PARA APROBACIÓN DOCUMENTAL.**

---

## 23. banda-remo-sentado

### Identificación
- ID: `banda-remo-sentado`
- Nombre: Remo con banda elástica
- Fuente: Age UK Devon, «Thera Band – Upper Back Strengthener»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Ubicación exacta:** «Seated Vitality at Home», p. 13, «Upper Back Strengthener».
- **Pasos originales, con palabras propias:**
  1. Sentarse alto.
  2. Banda plana sobre los muslos.
  3. Pasar las manos por debajo con las muñecas planas.
  4. Agarrar la banda y subirla a la altura del abdomen, estirándola hacia fuera.
  5. Llevarla al abdomen con los codos pegados.
  6. Volver al frente y soltar la tensión.
  7. Hasta 12 veces.
- **Coincidencias:** todo.
- **Diferencias:** la fuente admite unas medias como alternativa a la banda; el catálogo no lo menciona. Es aceptable.
- **Adaptaciones que deben documentarse:** ninguna.
- **Limitaciones de la verificación:** la página mezcla en columnas este ejercicio con otro de pelota («Chest Press»). Ilustración no revisada.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Sentado | FALSE | — |
| una_pierna | false | — | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | true | Banda | TRUE | La especificación incluye la banda |
| esfuerzo_cardio | false | — | FALSE | — |
| brazo_sobre_hombro | false | Altura del abdomen | FALSE | — |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | true | Banda estirada entre las dos manos | TRUE | — |
| agarre | true | «Grip band» | TRUE | — |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | — | FALSE | — |
| flexion_amplia_cadera | false | — | FALSE | — |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | false | — | FALSE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
Coherentes.

### Incidencias
Ninguna.

### Propuesta de cambios
Ninguna.

### Decisión pendiente del desarrollador
**LISTO PARA APROBACIÓN DOCUMENTAL.**

---

## 24. banda-curl-sentado

### Identificación
- ID: `banda-curl-sentado`
- Nombre: Flexión de codos con banda elástica
- Fuente: Age UK Devon, «Thera Band – Arm Curl»
- Estado inicial: `borrador`
- Resultado documental: DISCREPANCIA menor en la secuencia.

### Evidencia de la fuente
- **Ubicación exacta:** «Seated Vitality at Home», p. 15, «Arm Curl».
- **Pasos originales, con palabras propias:**
  1. Sentarse alto.
  2. Banda bajo uno o los dos pies.
  3. Agarrarla por los dos lados.
  4. Subir los puños hacia los hombros.
  5. **Después bajar las manos hasta que queden en línea con los codos, con las muñecas alineadas.**
  6. Mantener hasta 5 s y relajar los brazos a los lados.
  7. Hasta 4 veces.
- **Coincidencias:** posición, agarre, dosis y mantenimiento.
- **Diferencias:** el catálogo omite el paso 5. La redacción del catálogo («mantén hasta 5 segundos» con los puños arriba) hace que el mantenimiento parezca hacerse en otra posición que la de la fuente.
- **Adaptaciones que deben documentarse:** la omisión, o bien corregir la instrucción.
- **Limitaciones de la verificación:** sin la ilustración no queda claro qué significa exactamente «drop the hands to be in line with the elbows». Se interpreta como bajar los antebrazos hasta la horizontal.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Sentado | FALSE | — |
| una_pierna | false | — | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | true | Banda | TRUE | — |
| esfuerzo_cardio | false | — | FALSE | — |
| brazo_sobre_hombro | false | Puños hacia los hombros | FALSE | No se pasa la altura del hombro |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | true | «Grip band on both sides» | TRUE | — |
| agarre | true | Agarrar la banda | TRUE | — |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | — | FALSE | — |
| flexion_amplia_cadera | false | — | FALSE | — |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | false | — | FALSE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
- **Dosis** («Hasta 4 veces»): coincide.
- **Duración** (60 s): plausible.

### Incidencias
1. Falta un paso de la secuencia. Requiere revisar la ilustración para redactarlo con exactitud.

### Propuesta de cambios
- `instrucciones[2]`: añadir el paso intermedio. Propuesta: «Sube los puños hacia los hombros y bájalos después hasta que los antebrazos queden horizontales, con las muñecas rectas. Mantén hasta 5 segundos». Hay que confirmarlo con la ilustración de la fuente.

### Decisión pendiente del desarrollador
**REQUIERE CORRECCIONES.**

---

## Resumen del lote 4

| ID | Resultado | Cambios propuestos |
|---|---|---|
| boxeo-circulos-pecho | LISTO tras añadir `especifica_de` | `especifica_de` |
| arquear-espalda-sentado | REQUIERE CORRECCIONES | `ambos_brazos` → true; documentar la dosis; `especifica_de` |
| movilidad-lumbar-sentado | LISTO tras añadir `especifica_de` | `especifica_de` |
| estiramiento-gemelo-sentado | REQUIERE CORRECCIONES | `ambos_brazos` → true (o adaptación trivial); aclarar la nota |
| abrir-cerrar-manos | REQUIERE CORRECCIONES | `ambos_brazos` → true (o adaptación trivial) |
| pulgar-dedos | LISTO PARA APROBACIÓN DOCUMENTAL | — |
| activacion-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | — |
| banda-remo-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | — |
| banda-curl-sentado | REQUIERE CORRECCIONES | Falta un paso de la secuencia |

**Candidatos a adaptación unilateral** (para la propuesta pedida en la decisión 1):

- **Adaptación trivial, sin ejercicio nuevo:** `estiramiento-gemelo-sentado` y `abrir-cerrar-manos`. Con un solo brazo el ejercicio es el mismo; bastaría con documentarlo.
- **Posibles ejercicios derivados con instrucciones propias:**
  - `giro-tronco-sentado` (lote 1): una mano al hombro contrario.
  - `boxeo-sentado` (lote 3): un solo brazo.
  - Se valorarán junto con el resto al terminar la auditoría.
