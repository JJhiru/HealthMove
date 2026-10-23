# Auditoría del catálogo — Lote 3

- Fecha: 2026-10-14
- Auditor: Claude, con la skill `auditar-catalogo-ejercicios`. Es una auditoría documental, no una validación clínica.
- Catálogo: v0.3.0, sin modificar.
- Fuentes abiertas, las mismas que en el lote 2:
  - **Age UK Devon, «Seated Vitality at Home»:** todos los derechos reservados, verificado en el PDF.
  - **Specialist Mobility Centre (Leicester), «Seated Exercises – Information for Patients»:** sin licencia indicada; dirigido a quien usa silla de ruedas.
  - Ilustraciones de ambas no revisadas.

---

## 11. elevar-rodar-hombros-sentado

### Identificación
- ID: `elevar-rodar-hombros-sentado`
- Nombre: Elevar y rodar los hombros
- Fuente: Age UK Devon, «Shoulder Lifts and Circles»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Ubicación exacta:** «Seated Vitality at Home», bloque «Shoulder Lifts and Circles».
- **Pasos originales, con palabras propias:**
  1. Postura erguida y movimientos lentos y controlados.
  2. Subir los hombros hacia las orejas y bajarlos todo lo posible, 4 veces.
  3. Subir el hombro izquierdo y rodarlo hacia atrás, abajo y delante, 4 veces.
  4. Repetir con el derecho.
- **Coincidencias:** todos los pasos y las repeticiones.
- **Diferencias:** ninguna.
- **Adaptaciones que deben documentarse:** ninguna.
- **Limitaciones de la verificación:** ilustraciones no revisadas.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Sentado | FALSE | — |
| una_pierna | false | — | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | Movimientos lentos | FALSE | — |
| brazo_sobre_hombro | false | Se mueve el hombro; el brazo cuelga | FALSE | El codo no sube por encima del hombro |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | false | Primero los dos hombros, luego cada uno | FALSE | Es movilidad de hombros, no de brazos; puede hacerse por lados |
| agarre | false | — | FALSE | — |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | — | FALSE | — |
| flexion_amplia_cadera | false | — | FALSE | — |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | false | — | FALSE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
- **Fases** (`calentamiento`), **posición**, **recursos**, **dosis** y **duración** (60 s): coherentes.

### Incidencias
Ninguna.

### Propuesta de cambios
Ninguna.

### Decisión pendiente del desarrollador
**LISTO PARA APROBACIÓN DOCUMENTAL.**

---

## 12. curl-biceps-sentado

### Identificación
- ID: `curl-biceps-sentado`
- Nombre: Flexión de codo con botella
- Fuente: Leicester, ejercicio 6, «Bicep curls»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Ubicación exacta:** PDF, página 4, «6) Bicep curls».
- **Pasos originales, con palabras propias:**
  1. Sentarse cómodo con un peso ligero en una mano; una botella sirve.
  2. Girar la mano con el pulgar hacia el techo.
  3. Doblar el codo despacio llevando el peso al hombro, con el codo pegado al costado.
  4. Estirar despacio hasta dejar el peso en el regazo.
  5. 10 repeticiones por lado.
- **Coincidencias:** todos los pasos y la dosis.
- **Diferencias:** ninguna. El texto extraído mezcla columnas con el ejercicio 4; se ha separado por contexto.
- **Adaptaciones que deben documentarse:** ninguna.
- **Limitaciones de la verificación:** ilustración no revisada.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Sentado | FALSE | — |
| una_pierna | false | — | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | true | Se sostiene un peso ligero | TRUE | — |
| esfuerzo_cardio | false | — | FALSE | — |
| brazo_sobre_hombro | false | El peso llega al hombro con el codo pegado al costado | FALSE | La mano llega a la altura del hombro, no por encima |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | false | Un brazo cada vez | FALSE | Coincide con la nota |
| agarre | true | Sujetar la botella | TRUE | — |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | — | FALSE | — |
| flexion_amplia_cadera | false | — | FALSE | — |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | false | — | FALSE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
- **Recursos** (`silla`, `peso_ligero`): correctos.
- **Fases**, **dosis** y **duración** (90 s): coherentes.

### Incidencias
Solo la común del folleto (`especifica_de`).

### Propuesta de cambios
Ninguna propia.

### Decisión pendiente del desarrollador
**LISTO PARA APROBACIÓN DOCUMENTAL.**

---

## 13. toalla-separar-sentado

### Identificación
- ID: `toalla-separar-sentado`
- Nombre: Estirar la toalla
- Fuente: Leicester, ejercicio 7, «Arm exercise with a towel»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA en el movimiento, con una ADAPTACIÓN NO DOCUMENTADA en la dosis.

### Evidencia de la fuente
- **Ubicación exacta:** PDF, página 4, «7) Arm exercise with a towel».
- **Pasos originales, con palabras propias:**
  1. Sujetar una toalla con las dos manos.
  2. Tirar con una hacia arriba y con la otra hacia abajo, como si se quisiera separar la toalla.
  3. Mantener 5 s y relajar, con los brazos pegados al cuerpo.
  4. 10 repeticiones, cambiar las manos y repetir.
  5. De 2 a 3 series según se pueda.
- **Coincidencias:** pasos y repeticiones por posición de las manos.
- **Diferencias:** el catálogo omite las 2 o 3 series. Cabe en una rutina breve, pero no está documentado.
- **Adaptaciones que deben documentarse:** la reducción a una serie.
- **Limitaciones de la verificación:** ilustración no revisada.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Sentado | FALSE | — |
| una_pierna | false | — | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | false | La resistencia la pone la persona | FALSE | Coincide con la nota. La toalla no añade peso ni resistencia propia |
| esfuerzo_cardio | false | Isométrico | FALSE | — |
| brazo_sobre_hombro | false | Brazos pegados al cuerpo | FALSE | Una mano tira hacia arriba, pero con el brazo pegado no sube por encima del hombro |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | true | «Hold a towel with both hands» | TRUE | Imprescindible para el ejercicio |
| agarre | true | Sujetar la toalla | TRUE | — |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | — | FALSE | — |
| flexion_amplia_cadera | false | — | FALSE | — |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | false | — | FALSE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
- **Recursos** (`silla`, `toalla`), **fases** y **duración** (120 s): coherentes.

### Incidencias
1. Reducción de series sin documentar.

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente propone de 2 a 3 series; aquí se hace una dentro de la rutina».

### Decisión pendiente del desarrollador
**REQUIERE CORRECCIONES** (solo documentación).

---

## 14. boxeo-sentado

### Identificación
- ID: `boxeo-sentado`
- Nombre: Boxeo en la silla
- Fuente: Leicester, ejercicio 8, «Boxing»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Ubicación exacta:** PDF, página 5, «8) Boxing».
- **Pasos originales, con palabras propias:**
  1. Sentarse erguido sin apoyarse en el respaldo.
  2. Cerrar las manos en puño y subirlas delante del pecho.
  3. Estirar un brazo al frente sin abrir el puño y volver.
  4. Alternar como si se boxeara despacio.
  5. De 10 a 20 repeticiones, descanso y más series si se puede.
  6. Opcionalmente, con pesos ligeros.
- **Coincidencias:** todos los pasos y la dosis.
- **Diferencias:** se omite la variante con pesos; está documentada.
- **Adaptaciones que deben documentarse:** ninguna más.
- **Limitaciones de la verificación:** ilustración no revisada.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Sentado | FALSE | — |
| una_pierna | false | — | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | Los golpes son al aire y despacio | FALSE | — |
| carga_externa | false | Sin pesos (adaptación documentada) | FALSE | — |
| esfuerzo_cardio | false | «As if you are slowly boxing» | FALSE | La fuente lo plantea lento |
| brazo_sobre_hombro | false | Puños delante del pecho; el brazo se estira al frente | FALSE | A la altura del pecho, no por encima del hombro |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | false | Brazos alternos | REQUIERE_ACLARACION | Depende del criterio pendiente. Cada golpe es de un brazo, pero el ejercicio está descrito alternando |
| agarre | true | Puño cerrado | TRUE | La especificación incluye cerrar el puño |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | — | FALSE | — |
| flexion_amplia_cadera | false | — | FALSE | — |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | false | — | FALSE | — |
| rotacion_tronco | false | Brazo al frente, sin giro descrito | FALSE | Si se boxea con giro de hombros pasaría a TRUE; la fuente no lo pide |

### Otros campos
- **Fases**, **posición**, **recursos**, **dosis** y **duración** (60 s): coherentes.

### Incidencias
1. `ambos_brazos` según el criterio común.

### Propuesta de cambios
- `exigencias.ambos_brazos`: true con el criterio literal; sin cambios con el funcional.

### Decisión pendiente del desarrollador
**REQUIERE CORRECCIONES**, solo si se adopta el criterio literal. Con el criterio funcional, LISTO PARA APROBACIÓN DOCUMENTAL.

---

## 15. boxeo-circulos-alto

### Identificación
- ID: `boxeo-circulos-alto`
- Nombre: Círculos de puños a la altura de la nariz
- Fuente: Leicester, ejercicio 9, «Boxing Speedball»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Ubicación exacta:** PDF, página 5, «9) Boxing Speedball».
- **Pasos originales, con palabras propias:**
  1. Sentarse erguido sin apoyarse en el respaldo.
  2. Hacer dos puños y subirlos a la altura de la nariz.
  3. Girar los puños uno alrededor del otro hacia delante contando hasta 20, y hacia atrás contando hasta 20.
  4. Descansar y repetir si se puede.
  5. Si duelen los hombros, la fuente propone subir las manos solo a la altura del pecho. Esa versión existe en el catálogo como `boxeo-circulos-pecho`.
- **Coincidencias:** todos los pasos y la dosis.
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
| esfuerzo_cardio | false | Contar hasta 20 en cada sentido | FALSE | La fuente no lo plantea para subir el pulso |
| brazo_sobre_hombro | true | Puños a la altura de la nariz | TRUE | Las manos quedan por encima del hombro |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | true | Puños girando uno alrededor del otro | TRUE | No puede hacerse con un brazo |
| agarre | true | Puños cerrados | TRUE | — |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | — | FALSE | — |
| flexion_amplia_cadera | false | — | FALSE | — |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | false | — | FALSE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
- **Fases**, **posición**, **recursos**, **dosis** y **duración** (60 s): coherentes.
- **Variantes:** la versión «a la altura del pecho» es la que la propia fuente propone si duelen los hombros. Hoy no está enlazada con `variante_de`, y podría estarlo.

### Incidencias
1. Opcional: enlazar `boxeo-circulos-pecho` como variante de este ejercicio. Se comprobará en el lote siguiente.

### Propuesta de cambios
Ninguna obligatoria.

### Decisión pendiente del desarrollador
**LISTO PARA APROBACIÓN DOCUMENTAL.**

---

## Resumen del lote 3

| ID | Resultado | Cambios propuestos |
|---|---|---|
| elevar-rodar-hombros-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | — |
| curl-biceps-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | — |
| toalla-separar-sentado | REQUIERE CORRECCIONES | Documentar la reducción de series |
| boxeo-sentado | REQUIERE CORRECCIONES con el criterio literal; LISTO con el funcional | `ambos_brazos` |
| boxeo-circulos-alto | LISTO PARA APROBACIÓN DOCUMENTAL | — |

**Incidencia común:** los ejercicios del folleto de Leicester siguen pendientes de la decisión sobre `especifica_de` (ver el registro).
