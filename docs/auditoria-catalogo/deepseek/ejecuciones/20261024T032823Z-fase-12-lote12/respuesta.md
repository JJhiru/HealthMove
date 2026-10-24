# Borrador de auditoría · lote 12 (consulta C13)

- **Fecha:** 2026-10-24
- **Versión del protocolo:** 1.0
- **Catálogo:** v0.3.0 (actualizado 2026-10-14). No se ha podido verificar el commit ni el identificador git del catálogo: no se han entregado. Ver «Limitaciones de la verificación».
- **Encargo:** P29. Claude ha abierto la fuente y escrito la evidencia (`evidencia-lote-12`); este documento es el borrador de DeepSeek para los 15 ejercicios de la fuente F1 (Royal Berkshire, «Bed exercises and stretches»). Claude lo verificará contra la fuente.
- **Fuente única del lote:** F1, Royal Berkshire NHS Foundation Trust (Fisioterapia), «Bed exercises and stretches», julio de 2024. PDF de 4 páginas, SHA-256 `de719b8e…`. Población declarada: «personas que pasan en la cama más tiempo de lo normal por estar enfermas, o que no pueden levantarse».
- **Ejercicios fuera de este borrador:** `banda-curl-sentado` (aparece en el bloque `catalogo-lote12` solo como base de `variante_de` de `banda-flexion-codo-tumbado`; no se audita).

---

## 79. elevacion-brazos-tumbado

### Identificación
- ID: `elevacion-brazos-tumbado`
- Nombre: Elevar los brazos en la cama
- Fuente: Royal Berkshire NHS Foundation Trust (Fisioterapia), «Bed exercises and stretches», n.º 3 «Shoulder flexion», p. 2
- Población destinataria de la fuente (si la declara): personas que pasan en la cama más tiempo de lo normal por estar enfermas, o que no pueden levantarse
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una aclaración de redacción y un `true` conservador

### Evidencia de la fuente
- Ubicación exacta: F1, n.º 3 «Shoulder flexion», p. 2, texto y dibujo.
- Pasos originales relevantes, resumidos con palabras propias: boca arriba, brazos a los lados; «Lift your arms above your head»; «Repeat 10 times on each arm».
- Coincidencias (C1): posición, movimiento, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, el texto dice «arms» en plural y el dibujo mueve un brazo; HealthMove hace un brazo y luego el otro. Es una de las ejecuciones que permite la fuente («10 times on each arm»): aclaración, no adaptación.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), un brazo sube por encima de la cabeza. I, si los dos brazos suben a la vez: el texto dice «arms» pero la dosis es por brazo y el dibujo mueve uno.
- Limitaciones de la verificación: un solo dibujo.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movilidad de hombro | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y dibujo): «above your head» | evidencia | TRUE | — |
| mano_detras | false | D (dibujo): el brazo sube por delante y por encima, no por detrás | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): «10 times on each arm»; el dibujo mueve uno | evidencia | FALSE | DG-4: series con un brazo y después con el otro |
| agarre | false | D (dibujo): mano abierta | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: tumbado con piernas estiradas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento` y `principal`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La fuente declara población (ver «Datos comunes» de la evidencia). R8.1 permite rellenarlo; ver DS-357.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.especifica_de`: «encamados» (nombre breve, R8.1; ver DS-357).
- `fuente.consultado`: 2026-10-24.
- Instrucción 2: «Sube un brazo por encima de la cabeza.» → «Sube un brazo por encima de la cabeza, sin doblar el codo.» (aclaración; el dibujo muestra el brazo estirado). Si Claude no lo confirma en la fuente, no se aplica.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos y confirmado el nombre de `especifica_de` (DS-357).

---

## 80. banda-elevar-brazo-tumbado

### Identificación
- ID: `banda-elevar-brazo-tumbado`
- Nombre: Subir el brazo con banda en la cama
- Fuente: Royal Berkshire NHS Foundation Trust (Fisioterapia), «Bed exercises and stretches», n.º 3, «To make this exercise harder», p. 2
- Población destinataria de la fuente (si la declara): personas que pasan en la cama más tiempo de lo normal por estar enfermas, o que no pueden levantarse
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una adaptación ya documentada

### Evidencia de la fuente
- Ubicación exacta: F1, n.º 3, «To make this exercise harder», p. 2, solo texto.
- Pasos originales relevantes, resumidos con palabras propias: la misma elevación con banda; «Either hold the resistance band in the other hand at hip level or attach the band to the bed rails».
- Coincidencias (C1): movimiento, banda, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la barandilla se sustituye por la otra mano. Ya está en `adaptaciones`.
- Adaptaciones que deben documentarse: ninguna nueva.
- Hechos, inferencias e incertidumbres: D (texto), la banda se sujeta con la otra mano a la altura de la cadera. N, la imagen de la versión con banda: no hay dibujo propio.
- Limitaciones de la verificación: sin dibujo propio.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | true | D (texto): banda elástica | evidencia | TRUE | §4: incluye banda |
| esfuerzo_cardio | false | D: movilidad de hombro | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto): la misma elevación «above your head» | evidencia | TRUE | — |
| mano_detras | false | D (texto): el brazo sube por delante | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): una mano sujeta la banda a la altura de la cadera mientras la otra trabaja | evidencia | TRUE | Q1 (P9): una mano se apoya mientras el otro brazo trabaja |
| agarre | true | D (texto): «hold the resistance band» | evidencia | TRUE | — |
| peso_en_manos | false | D: tumbado | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: tumbado | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `tumbado`, recursos `cama` y `banda`, dosis: coherentes.
- `variante_de: elevacion-brazos-tumbado`: correcto (misma fuente, misma familia).
- Ilustración: coincide con el texto.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío (ver DS-357).

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.especifica_de`: «encamados» (DS-357).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos y confirmado el nombre de `especifica_de` (DS-357).

---

## 81. banda-flexion-codo-tumbado

### Identificación
- ID: `banda-flexion-codo-tumbado`
- Nombre: Doblar el codo con banda en la cama
- Fuente: Royal Berkshire NHS Foundation Trust (Fisioterapia), «Bed exercises and stretches», n.º 4 «Bicep curl», p. 2
- Población destinataria de la fuente (si la declara): personas que pasan en la cama más tiempo de lo normal por estar enfermas, o que no pueden levantarse
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con un `true` conservador ya anotado

### Evidencia de la fuente
- Ubicación exacta: F1, n.º 4 «Bicep curl», p. 2, texto y dibujo.
- Pasos originales relevantes, resumidos con palabras propias: boca arriba, brazos a los lados; «Hold onto the resistance band, bend your elbow, then straighten it again»; la banda se sujeta con la otra mano a la altura de la cadera o se ata a la barandilla; 10 veces con cada brazo.
- Coincidencias (C1): posición, movimiento, banda, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la barandilla se sustituye por la otra mano. Ya está en `adaptaciones`.
- Adaptaciones que deben documentarse: ninguna nueva.
- Hechos, inferencias e incertidumbres: D (dibujo), el antebrazo sube desde la cadera hacia el pecho. I, la altura de la mano: tumbado no se puede comparar bien con «la altura del hombro» (CN-1).
- Limitaciones de la verificación: un solo dibujo.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | true | D (texto): banda elástica | evidencia | TRUE | §4: incluye banda |
| esfuerzo_cardio | false | D: fuerza local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | I (dibujo): el antebrazo sube hacia el pecho y el hombro; tumbado no se puede comparar bien | conservadora | TRUE | CN-1 (P25); nota ya en la forma de R2.4 |
| mano_detras | false | D (dibujo): la mano sube por delante | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): una mano sujeta la banda a la altura de la cadera mientras la otra trabaja | evidencia | TRUE | Q1 (P9) |
| agarre | true | D (texto): «Hold onto the resistance band» | evidencia | TRUE | — |
| peso_en_manos | false | D: tumbado | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: tumbado | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `tumbado`, recursos `cama` y `banda`, dosis: coherentes.
- `variante_de: banda-curl-sentado`: correcto (otra fuente, misma familia; el motor no las combina).
- Ilustración: coincide.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío (ver DS-357).

### Incidencias
- `brazo_sobre_hombro` es la clase de CN-1 (P25): `true` conservador como valor provisional.

### Propuesta de cambios
- `fuente.especifica_de`: «encamados» (DS-357).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos y confirmado el nombre de `especifica_de` (DS-357).

---

## 82. circulos-hombros-tumbado

### Identificación
- ID: `circulos-hombros-tumbado`
- Nombre: Círculos de hombros en la cama
- Fuente: Royal Berkshire NHS Foundation Trust (Fisioterapia), «Bed exercises and stretches», n.º 2 «Shoulder circling», p. 1
- Población destinataria de la fuente (si la declara): personas que pasan en la cama más tiempo de lo normal por estar enfermas, o que no pueden levantarse
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una aclaración de posición

### Evidencia de la fuente
- Ubicación exacta: F1, n.º 2 «Shoulder circling», p. 1, texto y dibujo.
- Pasos originales relevantes, resumidos con palabras propias: «Lie on your back or sat up in bed»; con los brazos a los lados, círculos lentos de hombros arriba, atrás y abajo; después hacia delante; 5 veces en cada sentido.
- Coincidencias (C1): movimiento, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente permite tumbado o sentado en la cama; HealthMove solo tumbado. Es una de las posiciones que permite la fuente: aclaración, no adaptación.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto), dos posiciones posibles. D (dibujo), la persona aparece sentada. N, si el círculo de hombros mueve el brazo por encima del hombro: el texto no lo fija.
- Limitaciones de la verificación: el dibujo muestra la versión sentada, no la tumbada.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: círculos lentos | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movilidad suave | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): círculos de hombros con los brazos a los lados; el texto no pide subir el brazo | evidencia | FALSE | — |
| mano_detras | false | D (texto): brazos a los lados | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): «Shoulder circling» con los brazos a los lados; el texto no dice si los dos a la vez | conservadora | TRUE | R2.1: el texto no aclara si se hacen los dos hombros a la vez; ver DS-358 |
| agarre | false | D: manos abiertas | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: tumbado | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide con el texto (tumbado).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío (ver DS-357).

### Incidencias
- `ambos_brazos` es una duda de aplicación de Q1 (ver DS-358).

### Propuesta de cambios
- `fuente.especifica_de`: «encamados» (DS-357).
- `fuente.consultado`: 2026-10-24.
- Instrucción 1: «Túmbate boca arriba con los brazos a los lados.» → «Túmbate boca arriba con los brazos a los lados (la fuente también permite hacerlo sentado en la cama).» (aclaración de posición; ver DS-358).

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (DS-358: `ambos_brazos` en círculos de hombros con los brazos a los lados).

---

## 83. apretar-gluteos-tumbado

### Identificación
- ID: `apretar-gluteos-tumbado`
- Nombre: Apretar glúteos en la cama
- Fuente: Royal Berkshire NHS Foundation Trust (Fisioterapia), «Bed exercises and stretches», n.º 5 «Gluteal squeeze», p. 2
- Población destinataria de la fuente (si la declara): personas que pasan en la cama más tiempo de lo normal por estar enfermas, o que no pueden levantarse
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel

### Evidencia de la fuente
- Ubicación exacta: F1, n.º 5 «Gluteal squeeze», p. 2, texto y dibujo.
- Pasos originales relevantes, resumidos con palabras propias: boca arriba con las piernas estiradas («this can also be done sitting up or when sat out in the chair»); apretar los glúteos; mantener contando hasta 3; relajar; 10 veces.
- Coincidencias (C1): posición, movimiento, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente permite también sentado; HealthMove solo tumbado. Es una de las posiciones que permite la fuente: aclaración, no adaptación.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), contracción de glúteos sin movimiento de piernas.
- Limitaciones de la verificación: el dibujo es un detalle de los glúteos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: contracción estática | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: contracción estática | evidencia | FALSE | — |
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
- Fase `principal`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío (ver DS-357).

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.especifica_de`: «encamados» (DS-357).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos y confirmado el nombre de `especifica_de` (DS-357).

---

## 84. abduccion-cadera-tumbado

### Identificación
- ID: `abduccion-cadera-tumbado`
- Nombre: Separar la pierna en la cama
- Fuente: Royal Berkshire NHS Foundation Trust (Fisioterapia), «Bed exercises and stretches», n.º 6 «Hip abduction», p. 2
- Población destinataria de la fuente (si la declara): personas que pasan en la cama más tiempo de lo normal por estar enfermas, o que no pueden levantarse
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una adaptación ya documentada

### Evidencia de la fuente
- Ubicación exacta: F1, n.º 6 «Hip abduction», p. 2, texto y dibujo.
- Pasos originales relevantes, resumidos con palabras propias: boca arriba, piernas estiradas y juntas; llevar una pierna hacia fuera; «Let your heel guide the movement»; volver; 10 veces con cada pierna. Más difícil: banda en las rodillas (más fácil) o en los tobillos (más difícil).
- Coincidencias (C1): posición, movimiento, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, se omite la versión con banda (existe como variante, 85). Ya está en `adaptaciones`.
- Adaptaciones que deben documentarse: ninguna nueva.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), una pierna se separa hacia fuera con el talón como guía.
- Limitaciones de la verificación: un solo dibujo.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: fuerza local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (dibujo): brazos a los lados | evidencia | FALSE | — |
| mano_detras | false | D (dibujo): brazos a los lados | evidencia | FALSE | — |
| ambos_brazos | false | D (dibujo): brazos a los lados, sin función | evidencia | FALSE | DG-4: reposo |
| agarre | false | D (dibujo): manos abiertas | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): piernas estiradas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío (ver DS-357).

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.especifica_de`: «encamados» (DS-357).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos y confirmado el nombre de `especifica_de` (DS-357).

---

## 85. banda-separar-pierna-tumbado

### Identificación
- ID: `banda-separar-pierna-tumbado`
- Nombre: Separar la pierna con banda en la cama
- Fuente: Royal Berkshire NHS Foundation Trust (Fisioterapia), «Bed exercises and stretches», n.º 6, «To make this exercise harder», p. 2
- Población destinataria de la fuente (si la declara): personas que pasan en la cama más tiempo de lo normal por estar enfermas, o que no pueden levantarse
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel

### Evidencia de la fuente
- Ubicación exacta: F1, n.º 6, «To make this exercise harder», p. 2, solo texto.
- Pasos originales relevantes, resumidos con palabras propias: lazo de banda alrededor de las rodillas (más fácil) o de los tobillos (más difícil).
- Coincidencias (C1): movimiento, banda, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna. Hacer y colocar el lazo es preparación (CN-2, P28): no cuenta.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto), la banda se coloca en las rodillas o en los tobillos. N, la imagen de la versión con banda: no hay dibujo propio.
- Limitaciones de la verificación: sin dibujo propio.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | true | D (texto): banda elástica | evidencia | TRUE | §4: incluye banda |
| esfuerzo_cardio | false | D: fuerza local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no intervienen; colocar el lazo es preparación (CN-2) | evidencia | FALSE | CN-2 (P28) |
| agarre | false | D (texto): los brazos no intervienen; colocar el lazo es preparación (CN-2) | evidencia | FALSE | CN-2 (P28) |
| peso_en_manos | false | D: tumbado | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): piernas estiradas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `tumbado`, recursos `cama` y `banda`, dosis: coherentes.
- `variante_de: abduccion-cadera-tumbado`: correcto.
- Ilustración: coincide.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío (ver DS-357).

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.especifica_de`: «encamados» (DS-357).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos y confirmado el nombre de `especifica_de` (DS-357).

---

## 86. elevacion-pierna-recta-tumbado

### Identificación
- ID: `elevacion-pierna-recta-tumbado`
- Nombre: Elevación de pierna estirada en la cama
- Fuente: Royal Berkshire NHS Foundation Trust (Fisioterapia), «Bed exercises and stretches», n.º 7 «Straight leg raise», p. 3
- Población destinataria de la fuente (si la declara): personas que pasan en la cama más tiempo de lo normal por estar enfermas, o que no pueden levantarse
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel

### Evidencia de la fuente
- Ubicación exacta: F1, n.º 7 «Straight leg raise», p. 3, texto y dibujo.
- Pasos originales relevantes, resumidos con palabras propias: boca arriba, piernas estiradas, puntas de los pies hacia el techo; levantar la pierna de la cama sin doblarla; mantener contando hasta 3; bajar con control; 10 veces con cada pierna.
- Coincidencias (C1): posición, movimiento, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), una pierna recta elevada unos 25 a 30° sobre la cama. D (dibujo), el muslo se separa de la cama muy por debajo de lo que se acerca al tronco al estar sentado.
- Limitaciones de la verificación: un solo dibujo.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: elevación lenta | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: fuerza local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (dibujo): brazos a los lados | evidencia | FALSE | — |
| mano_detras | false | D (dibujo): brazos a los lados | evidencia | FALSE | — |
| ambos_brazos | false | D (dibujo): brazos a los lados, sin función | evidencia | FALSE | DG-4: reposo |
| agarre | false | D (dibujo): manos abiertas | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y dibujo): pierna recta | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D (dibujo): el muslo se separa de la cama muy por debajo de lo que se acerca al tronco al estar sentado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: la pierna sube unos 35°, algo más que el dibujo; mismo movimiento. Coincide.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío (ver DS-357).

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.especifica_de`: «encamados» (DS-357).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos y confirmado el nombre de `especifica_de` (DS-357).

---

## 87. banda-elevacion-pierna-tumbado

### Identificación
- ID: `banda-elevacion-pierna-tumbado`
- Nombre: Levantar la pierna estirada con banda
- Fuente: Royal Berkshire NHS Foundation Trust (Fisioterapia), «Bed exercises and stretches», n.º 7, «To make this exercise harder», p. 3
- Población destinataria de la fuente (si la declara): personas que pasan en la cama más tiempo de lo normal por estar enfermas, o que no pueden levantarse
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una aclaración de dosis

### Evidencia de la fuente
- Ubicación exacta: F1, n.º 7, «To make this exercise harder», p. 3, solo texto.
- Pasos originales relevantes, resumidos con palabras propias: lazo de banda alrededor de los tobillos.
- Coincidencias (C1): movimiento, banda.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la dosis no dice «mantén 3 segundos», pero la instrucción 3 sí («aguanta mientras cuentas hasta 3»). Es una aclaración hacia la fuente (la dosis hereda la del ejercicio base).
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto), la banda se coloca en los tobillos. N, la imagen de la versión con banda: no hay dibujo propio.
- Limitaciones de la verificación: sin dibujo propio.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: elevación lenta | evidencia | FALSE | — |
| carga_externa | true | D (texto): banda elástica | evidencia | TRUE | §4: incluye banda |
| esfuerzo_cardio | false | D: fuerza local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no intervienen; colocar el lazo es preparación (CN-2) | evidencia | FALSE | CN-2 (P28) |
| agarre | false | D (texto): los brazos no intervienen; colocar el lazo es preparación (CN-2) | evidencia | FALSE | CN-2 (P28) |
| peso_en_manos | false | D: tumbado | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): pierna recta | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `tumbado`, recursos `cama` y `banda`, dosis: coherentes.
- `variante_de: elevacion-pierna-recta-tumbado`: correcto.
- Ilustración: coincide.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío (ver DS-357).

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.especifica_de`: «encamados» (DS-357).
- `fuente.consultado`: 2026-10-24.
- `dosis`: «10 veces con cada pierna.» → «Mantén 3 segundos. 10 veces con cada pierna.» (aclaración; la instrucción 3 ya lo dice).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos y confirmado el nombre de `especifica_de` (DS-357).

---

## 88. deslizar-talon-tumbado

### Identificación
- ID: `deslizar-talon-tumbado`
- Nombre: Deslizar el talón
- Fuente: Royal Berkshire NHS Foundation Trust (Fisioterapia), «Bed exercises and stretches», n.º 8 «Knee bends», p. 3
- Población destinataria de la fuente (si la declara): personas que pasan en la cama más tiempo de lo normal por estar enfermas, o que no pueden levantarse
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con dos `true` conservadores

### Evidencia de la fuente
- Ubicación exacta: F1, n.º 8 «Knee bends», p. 3, texto y dibujo.
- Pasos originales relevantes, resumidos con palabras propias: boca arriba, piernas estiradas; doblar la rodilla deslizando el talón «towards your buttocks»; volver; 10 veces con cada pierna. Más difícil: banda alrededor de los dos pies.
- Coincidencias (C1): posición, movimiento, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (dibujo), una rodilla doblada con el pie apoyado más o menos a la altura de la otra rodilla. I, el ángulo de la rodilla: el dibujo muestra en torno a 90°; el texto («towards your buttocks») no fija hasta dónde. I, el muslo sube hacia el tronco, sin que conste si más que al estar sentado.
- Limitaciones de la verificación: un solo dibujo.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movilidad | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (dibujo): brazos a los lados | evidencia | FALSE | — |
| mano_detras | false | D (dibujo): brazos a los lados | evidencia | FALSE | — |
| ambos_brazos | false | D (dibujo): brazos a los lados, sin función | evidencia | FALSE | DG-4: reposo |
| agarre | false | D (dibujo): manos abiertas | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | true | I (dibujo): rodilla en torno a 90°; el texto no fija hasta dónde | conservadora | TRUE | R2.1; nota nueva en la forma de R2.4 |
| flexion_amplia_cadera | true | I (dibujo): el muslo sube hacia el tronco, sin que conste si más que al estar sentado | conservadora | TRUE | R2.1; nota nueva en la forma de R2.4 |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento` y `principal`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío (ver DS-357).

### Incidencias
- `flexion_profunda_rodilla` y `flexion_amplia_cadera` son `true` conservadores: la nota actual no tiene la forma de R2.4.

### Propuesta de cambios
- `notas_etiquetado`: sustituir la nota actual por dos notas `[conservadora]` en la forma de R2.4:
  - `[conservadora] flexion_profunda_rodilla: el dibujo muestra la rodilla en torno a 90° y el texto no fija hasta dónde; se marca por precaución. Se cerraría con: evidencia de la fuente de que la rodilla no pasa de 90°.`
  - `[conservadora] flexion_amplia_cadera: el muslo sube hacia el tronco y no consta si más que al estar sentado; se marca por precaución. Se cerraría con: evidencia de la fuente de la posición del muslo.`
- `fuente.especifica_de`: «encamados» (DS-357).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos y confirmado el nombre de `especifica_de` (DS-357).

---

## 89. banda-deslizar-talon-tumbado

### Identificación
- ID: `banda-deslizar-talon-tumbado`
- Nombre: Deslizar el talón con banda
- Fuente: Royal Berkshire NHS Foundation Trust (Fisioterapia), «Bed exercises and stretches», n.º 8, «To make this exercise harder», p. 3
- Población destinataria de la fuente (si la declara): personas que pasan en la cama más tiempo de lo normal por estar enfermas, o que no pueden levantarse
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con dos `true` conservadores

### Evidencia de la fuente
- Ubicación exacta: F1, n.º 8, «To make this exercise harder», p. 3, solo texto.
- Pasos originales relevantes, resumidos con palabras propias: lazo de banda alrededor de los dos pies.
- Coincidencias (C1): movimiento, banda, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna. Colocar el lazo es preparación (CN-2, P28).
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto), la banda se coloca en los dos pies. N, la imagen de la versión con banda: no hay dibujo propio. I, el ángulo de la rodilla y la posición del muslo: los mismos que en 88.
- Limitaciones de la verificación: sin dibujo propio.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | true | D (texto): banda elástica | evidencia | TRUE | §4: incluye banda |
| esfuerzo_cardio | false | D: movilidad | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no intervienen; colocar el lazo es preparación (CN-2) | evidencia | FALSE | CN-2 (P28) |
| agarre | false | D (texto): los brazos no intervienen; colocar el lazo es preparación (CN-2) | evidencia | FALSE | CN-2 (P28) |
| peso_en_manos | false | D: tumbado | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | true | I: el mismo movimiento que 88; el texto no fija hasta dónde | conservadora | TRUE | R2.1; nota nueva en la forma de R2.4 |
| flexion_amplia_cadera | true | I: el mismo movimiento que 88; el muslo sube hacia el tronco | conservadora | TRUE | R2.1; nota nueva en la forma de R2.4 |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `tumbado`, recursos `cama` y `banda`, dosis: coherentes.
- `variante_de: deslizar-talon-tumbado`: correcto.
- Ilustración: coincide.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío (ver DS-357).

### Incidencias
- `flexion_profunda_rodilla` y `flexion_amplia_cadera` son `true` conservadores sin nota en la forma de R2.4.

### Propuesta de cambios
- `notas_etiquetado`: añadir las dos notas `[conservadora]` en la forma de R2.4, con el mismo texto que en 88.
- `fuente.especifica_de`: «encamados» (DS-357).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos y confirmado el nombre de `especifica_de` (DS-357).

---

## 90. puente-tumbado

### Identificación
- ID: `puente-tumbado`
- Nombre: Puente en la cama
- Fuente: Royal Berkshire NHS Foundation Trust (Fisioterapia), «Bed exercises and stretches», n.º 9 «Bridging», p. 3
- Población destinataria de la fuente (si la declara): personas que pasan en la cama más tiempo de lo normal por estar enfermas, o que no pueden levantarse
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una aclaración de progresión omitida

### Evidencia de la fuente
- Ubicación exacta: F1, n.º 9 «Bridging», p. 3, texto y dibujo.
- Pasos originales relevantes, resumidos con palabras propias: boca arriba, rodillas dobladas, pies apoyados y separados al ancho de la cadera; brazos a los lados («Rest your arms down by your sides»); subir los glúteos despacio llevando la cadera hacia el techo, apretándolos; mantener contando hasta 3; bajar despacio, vértebra a vértebra; 10 veces. Más difícil: banda en los muslos, o levantar un pie de la cama al repetir.
- Coincidencias (C1): posición, movimiento, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, HealthMove omite la progresión de levantar un pie. Es una de las ejecuciones que permite la fuente: aclaración, no adaptación.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), rodillas dobladas, cadera elevada, brazos estirados a los lados con las manos en la cama. I (dibujo), las rodillas en torno a 90° o algo más abiertas.
- Limitaciones de la verificación: un solo dibujo.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: fuerza local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): brazos a los lados | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): brazos a los lados | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): «Rest your arms down by your sides»; los brazos no intervienen | evidencia | FALSE | DG-4: reposo |
| agarre | false | D (dibujo): manos abiertas en la cama | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | I (dibujo): rodillas en torno a 90° o algo más abiertas; no consta que pasen de 90° | conservadora | TRUE | R2.1; ver DS-359 |
| flexion_amplia_cadera | false | D: tumbado; el muslo no se acerca al tronco más que al estar sentado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): extensión de cadera, no arqueo de espalda | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío (ver DS-357).

### Incidencias
- `flexion_profunda_rodilla` es una duda de aplicación de R7.8 (ver DS-359).

### Propuesta de cambios
- `fuente.especifica_de`: «encamados» (DS-357).
- `fuente.consultado`: 2026-10-24.
- Instrucción 4: «Baja despacio, apoyando la espalda poco a poco.» → «Baja despacio, apoyando la espalda poco a poco (la fuente dice «vértebra a vértebra»).» (aclaración; ver DS-359).

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (DS-359: `flexion_profunda_rodilla` en el puente).

---

## 91. banda-puente-tumbado

### Identificación
- ID: `banda-puente-tumbado`
- Nombre: Puente con banda
- Fuente: Royal Berkshire NHS Foundation Trust (Fisioterapia), «Bed exercises and stretches», n.º 9, «To make this exercise harder», p. 3
- Población destinataria de la fuente (si la declara): personas que pasan en la cama más tiempo de lo normal por estar enfermas, o que no pueden levantarse
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con un `true` conservador

### Evidencia de la fuente
- Ubicación exacta: F1, n.º 9, «To make this exercise harder», p. 3, solo texto.
- Pasos originales relevantes, resumidos con palabras propias: lazo de banda alrededor de los muslos, manteniéndola tensa («make sure you keep tension in the band»).
- Coincidencias (C1): movimiento, banda, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna. Colocar el lazo es preparación (CN-2, P28).
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto), la banda se coloca en los muslos. N, la imagen de la versión con banda: no hay dibujo propio. I, el ángulo de la rodilla: el mismo que en 90.
- Limitaciones de la verificación: sin dibujo propio.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | true | D (texto): banda elástica | evidencia | TRUE | §4: incluye banda |
| esfuerzo_cardio | false | D: fuerza local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no intervienen; colocar el lazo es preparación (CN-2) | evidencia | FALSE | CN-2 (P28) |
| agarre | false | D (texto): los brazos no intervienen; colocar el lazo es preparación (CN-2) | evidencia | FALSE | CN-2 (P28) |
| peso_en_manos | false | D: tumbado | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | I: el mismo movimiento que 90; no consta que las rodillas pasen de 90° | conservadora | TRUE | R2.1; ver DS-359 |
| flexion_amplia_cadera | false | D: tumbado; el muslo no se acerca al tronco más que al estar sentado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): extensión de cadera, no arqueo de espalda | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `tumbado`, recursos `cama` y `banda`, dosis: coherentes.
- `variante_de: puente-tumbado`: correcto.
- Ilustración: coincide.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío (ver DS-357).

### Incidencias
- `flexion_profunda_rodilla` es una duda de aplicación de R7.8 (ver DS-359).

### Propuesta de cambios
- `fuente.especifica_de`: «encamados» (DS-357).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (DS-359: `flexion_profunda_rodilla` en el puente).

---

## 92. rodilla-al-lado-tumbado

### Identificación
- ID: `rodilla-al-lado-tumbado`
- Nombre: Dejar caer una rodilla hacia fuera
- Fuente: Royal Berkshire NHS Foundation Trust (Fisioterapia), «Bed exercises and stretches», n.º 10 «Single knee drop outs», p. 4
- Población destinataria de la fuente (si la declara): personas que pasan en la cama más tiempo de lo normal por estar enfermas, o que no pueden levantarse
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel

### Evidencia de la fuente
- Ubicación exacta: F1, n.º 10 «Single knee drop outs», p. 4, texto y dibujo.
- Pasos originales relevantes, resumidos con palabras propias: boca arriba, rodillas dobladas, pies apoyados al ancho de la cadera, brazos a los lados; bajar despacio la rodilla derecha hacia fuera y hacia el colchón; mantener contando hasta 3; volver al centro; «Repeat 10 times on both sides». Más difícil: banda en los muslos (sin variante en el catálogo).
- Coincidencias (C1): posición, movimiento, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), una rodilla cae hacia fuera, la otra doblada arriba.
- Limitaciones de la verificación: un solo dibujo.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movilidad | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): brazos a los lados | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): brazos a los lados | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): brazos a los lados, sin función | evidencia | FALSE | DG-4: reposo |
| agarre | false | D (dibujo): manos abiertas | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y dibujo): rodillas dobladas, sin que conste que pasen de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado; el muslo no se acerca al tronco más que al estar sentado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D: espalda en la cama | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío (ver DS-357).

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.especifica_de`: «encamados» (DS-357).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos y confirmado el nombre de `especifica_de` (DS-357).

---

## 93. bombeo-tobillos-tumbado

### Identificación
- ID: `bombeo-tobillos-tumbado`
- Nombre: Mover los tobillos en la cama
- Fuente: Royal Berkshire NHS Foundation Trust (Fisioterapia), «Bed exercises and stretches», n.º 11 «Ankle pump/circles», p. 4
- Población destinataria de la fuente (si la declara): personas que pasan en la cama más tiempo de lo normal por estar enfermas, o que no pueden levantarse
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel, con una adaptación ya documentada y una duda de exclusión del catálogo v1

### Evidencia de la fuente
- Ubicación exacta: F1, n.º 11 «Ankle pump/circles», p. 4, texto y dibujo.
- Pasos originales relevantes