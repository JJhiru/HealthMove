# Lote 8 · Reauditoría con el protocolo 1.0: Age UK Devon, «Seated Vitality at Home» (4 ejercicios)

- Fecha: 2026-10-21
- Versión del protocolo: 1.0
- Catálogo: v0.3.0 (actualizado 2026-10-14), rama `desarrollo-v1`, commit `408c06af12edcd13588f19f24408c248cf8ed673`
- Identificador git del catálogo: `9100d41ec086de3cf60f1e406761d86cc08f5061`
- Huellas literales: `elevar-rodar-hombros-sentado` `eb87ab72f68df55d`, `pulgar-dedos` `0f47291c3dc683de`, `activacion-sentado` `f39c41c055cdeb71`, `banda-remo-sentado` `97eb3ff3bbcb1633`.
- **Por qué este lote:** son los últimos «LISTO» de los lotes 3 y 4 (anteriores al protocolo) que quedaban por reauditar.
- **Fuente abierta:** Age UK Devon, «Seated Vitality at Home», `https://www.ageuk.org.uk/bp-assets/globalassets/devon/original-blocks/activities-and-events/a4-seated-vitality-at-home.pdf`.
  - Descargado el 2026-10-21. SHA-256 `32ccd13cdd14d01c08727fc5a6fae8040f8333743b324e6f484338f1b5fee5f5`. PDF de 11 páginas de dos caras impresas cada una, modificado el 2020-11-17.
  - Revisado: el texto (`pdftotext -layout`) y las páginas 3, 5 y 7 del PDF renderizadas (impresas 4-5, 8-9 y 12-13), porque están a dos columnas (R7.9).
  - **Licencia:** el catálogo la registra como «todos los derechos reservados». El PDF no declara una licencia abierta; HealthMove usa palabras propias y las citas de este informe son breves (skill, §7).
  - **Población:** el folleto se dirige en general a quien hace ejercicio sentado en casa; no declara un grupo concreto. `especifica_de` no se rellena (R8.1).
- **Ilustraciones de HealthMove** (R7.6): las de `elevar-rodar-hombros-sentado`, `pulgar-dedos` y `activacion-sentado` coinciden con las fotos. La de `banda-remo-sentado` dibujaba de perfil un remo hacia atrás; la fuente muestra, de frente, la banda que sube de los muslos al abdomen y se estira hacia los lados. Se corrigió (`scripts/ilustraciones/sentado.mjs`, vista frontal) antes de cerrar este informe.
- **Decisiones aplicadas:** Q1 (P9), Q2 (P10) y CN-1.

## 55. elevar-rodar-hombros-sentado

### Identificación
- ID: `elevar-rodar-hombros-sentado`
- Nombre: Elevar y rodar los hombros
- Fuente: Age UK Devon, «Seated Vitality at Home», «Shoulder Lifts and Circles», página impresa 5
- Población destinataria de la fuente (si la declara): no la declara
- Estado inicial: `borrador`; lote 3, LISTO (anterior al protocolo)
- Resultado documental: fiel

### Evidencia de la fuente
- Ubicación exacta: p. 5 impresa, «Mobility, Stretching and Resistance», «Shoulder Lifts and Circles». Solo texto, sin foto.
- Pasos originales relevantes, resumidos con palabras propias: postura erguida; movimientos lentos y controlados; subir los hombros hacia las orejas y bajarlos todo lo posible, 4 veces; subir el hombro izquierdo y rodarlo hacia atrás, abajo y adelante, 4 veces; repetir con el derecho.
- Coincidencias (C1): todo.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D, se mueven los hombros y no los brazos.
- Limitaciones de la verificación: no hay foto.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | — |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: siempre sentado | evidencia | FALSE | — |
| impacto | false | D: «Slow controlled movements» | evidencia | FALSE | — |
| carga_externa | false | D: estructural | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movilidad | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D: suben los hombros, no los brazos | evidencia | FALSE | — |
| mano_detras | false | D: estructural | evidencia | FALSE | — |
| ambos_brazos | false | D: los brazos reposan (§7.1, «Reposo… no se marca `ambos_brazos`»). La alternancia de P9 se refiere a los brazos; aquí se mueven los hombros | evidencia | FALSE | DS-163 |
| agarre | false | D: estructural | evidencia | FALSE | — |
| peso_en_manos | false | D: estructural | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D: sentado normal | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: erguido | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | — |
| inclinacion_tronco | false | D: «good upright posture» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición, recurso, dosis y duración: coherentes. Ilustración: círculo en el hombro. Coincide con la fuente.

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-21.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambio aplicado el 2026-10-21 (P19).

## 56. pulgar-dedos

### Identificación
- ID: `pulgar-dedos`
- Nombre: Pulgar con cada dedo
- Fuente: Age UK Devon, «Seated Vitality at Home», «Finger Dexterity», página impresa 9
- Población destinataria de la fuente (si la declara): no la declara
- Estado inicial: `borrador`; lote 4, LISTO (anterior al protocolo)
- Resultado documental: listo con un `true` conservador nuevo

### Evidencia de la fuente
- Ubicación exacta: p. 9 impresa, «Building Strength in your Hands», «Finger Dexterity», texto y foto.
- Pasos originales relevantes, resumidos con palabras propias: extender un brazo separado del cuerpo, con la palma hacia abajo y los dedos estirados; tocar el pulgar con cada dedo; hasta 4 veces; cambiar de mano.
- Coincidencias (C1): secuencia, mano a mano y dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna en el texto.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres:
  - D (foto): la persona hace el gesto con las dos manos a la vez, a la altura de la cabeza, con las manos por encima de los hombros.
  - D (texto): una mano cada vez («Change hands») y sin altura fijada.
  - El texto da el rango y la foto es un ejemplo (prueba de R3.1, Q5): la altura de la foto no es obligatoria, pero cabe.
- Limitaciones de la verificación: ninguna.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | — |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: siempre sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento de dedos | evidencia | FALSE | — |
| carga_externa | false | D: estructural | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: destreza | evidencia | FALSE | — |
| brazo_sobre_hombro | false | I: el texto no fija la altura del brazo extendido, y la foto muestra la mano por encima del hombro | conservadora | TRUE | Ante la duda, se marca (R2.1), con su nota |
| mano_detras | false | D: el brazo, separado y por delante | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): una mano cada vez, «Change hands»; la foto con las dos a la vez es un ejemplo | evidencia | FALSE | Series por lado (P9) |
| agarre | true | I: tocar el pulgar con cada dedo flexiona los dedos, lo que parece un cierre parcial (§4: «aunque sea en parte»). Es una inferencia del auditor | conservadora | TRUE | La nota pasa al formato de R2.4 (DS-160, DS-165) |
| peso_en_manos | false | D: estructural | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D (foto): sentado normal | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: erguido | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | — |
| inclinacion_tronco | false | D (foto): erguido | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición, recurso, dosis y duración: coherentes. Ilustración: detalle de la mano con el pulgar tocando un dedo. Coincide con la fuente.

### Incidencias
- **Clase de CN-1 (equivalente):** la mano queda por encima del hombro sin que el brazo tenga que levantarse tanto. Se añade a CN-1, sin abrir otro caso (R1.4, paso 3).

### Propuesta de cambios
- `exigencias.brazo_sobre_hombro`: `false` → `true`.
- `notas_etiquetado`: «Cierre parcial de la mano: se marca agarre por precaución.» pasa a «[conservadora] agarre: tocar el pulgar con cada dedo flexiona los dedos, lo que parece un cierre parcial de la mano (§4). Se cerraría con: un criterio sobre si la pinza cuenta como agarre. [conservadora] brazo_sobre_hombro: la foto de la fuente muestra la mano por encima del hombro y el texto no fija la altura. Se cerraría con: evidencia D de la altura en la ejecución que pide HealthMove.» (texto tras C6).
- `fuente.consultado`: 2026-10-21.
- **Disponibilidad** (modo auditoría, con borradores): `brazos: brazo_arriba` pierde este ejercicio. La medición está en `registro.md`, P19.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-21 (P19).

## 57. activacion-sentado

### Identificación
- ID: `activacion-sentado`
- Nombre: Activación en la silla
- Fuente: Age UK Devon, «Seated Vitality at Home», «Let's Warm Up – Circulation Booster», «Rep.1», página impresa 4
- Población destinataria de la fuente (si la declara): no la declara
- Estado inicial: `borrador`; lote 4, LISTO (anterior al protocolo)
- Resultado documental: fiel, con su adaptación documentada

### Evidencia de la fuente
- Ubicación exacta: p. 4 impresa, «Circulation Booster», «Rep.1», texto y foto (palmada a la altura del pecho).
- Pasos originales relevantes, resumidos con palabras propias: toques de pie al ritmo (izquierdo, derecho, alternando, los dos de lado a lado); balanceo alterno de brazos con los codos pegados; toque en las rodillas y palmada a la altura del pecho. La fuente dice que el calentamiento sube la frecuencia cardiaca.
- Coincidencias (C1): los tres movimientos de la primera ronda.
- Diferencias (C3) y adaptaciones documentadas (C2): solo la primera ronda (C2, ya documentada).
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D, «will increase your heart rate». D (foto), la palmada a la altura del pecho.
- Limitaciones de la verificación: ninguna.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | — |
| una_pierna | false | D: sentado; el peso está en el asiento | evidencia | FALSE | — |
| sentarse_levantarse | false | D: siempre sentado | evidencia | FALSE | — |
| impacto | false | D: toques de pie sentado, sin el peso del cuerpo y sin fase en el aire | evidencia | FALSE | — |
| carga_externa | false | D: estructural | evidencia | FALSE | — |
| esfuerzo_cardio | true | I: «will increase your heart rate» se dice del calentamiento completo; HealthMove solo incluye la primera ronda | conservadora | TRUE | Con su nota (DS-166) |
| brazo_sobre_hombro | false | D: «clap hands up to chest height» en la primera ronda; las rondas más altas se omiten (C2) | adaptación | FALSE | — |
| mano_detras | false | D: por delante | evidencia | FALSE | — |
| ambos_brazos | true | D: la palmada exige las dos manos | evidencia | TRUE | — |
| agarre | false | D: manos abiertas («point fingers forwards», palmadas) | evidencia | FALSE | — |
| peso_en_manos | false | D: toques en las rodillas, sin cargar peso | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D (foto): sentado normal | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: los toques no levantan el muslo; la marcha es de la tercera ronda, omitida (C2) | adaptación | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | — |
| inclinacion_tronco | false | D (foto): erguido | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición, recurso, dosis y duración: coherentes. Ilustración: balanceo de brazo y toque de pie. Coincide con la fuente.

### Incidencias
- Ninguna.

- **Adaptación «solo la primera ronda» (DS-157, DS-158):**
  - Se aprueba en P19.
  - Prueba de R3.1: es un subconjunto de la fuente, que describe la primera ronda completa con sus tres movimientos.
  - Tabla R3.3: es la de arriba. Al omitir las rondas 2 y 3 desaparecen la marcha (`flexion_amplia_cadera`) y la palmada a la altura del hombro (que no pasa de él). No se añade ninguna exigencia.

### Propuesta de cambios
- `notas_etiquetado`: «La fuente indica que busca subir el pulso: esfuerzo_cardio.» pasa a «[conservadora] esfuerzo_cardio: la fuente dice que el calentamiento completo sube el pulso; aquí solo va la primera ronda. Se cerraría con: una fuente sobre la primera ronda sola.»
- `fuente.consultado`: 2026-10-21.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-21 (P19).

## 58. banda-remo-sentado

### Identificación
- ID: `banda-remo-sentado`
- Nombre: Abrir la banda a la altura del abdomen
- Fuente: Age UK Devon, «Seated Vitality at Home», «Thera Band», «Upper Back Strengthener», página impresa 13
- Población destinataria de la fuente (si la declara): no la declara
- Estado inicial: `borrador`; lote 4, LISTO (anterior al protocolo). Se llamaba «Remo con banda elástica»
- Resultado documental: fiel; ilustración y nombre corregidos

### Evidencia de la fuente
- Ubicación exacta: p. 13 impresa, «Upper Back Strengthener», texto y tres fotos.
- Pasos originales relevantes, resumidos con palabras propias: sentado erguido; la banda plana sobre los muslos; pasar las manos por debajo; agarrarla, subirla a la altura del abdomen y estirarla hacia fuera; volver al abdomen con los codos pegados; relajar; hasta 12 veces.
- Coincidencias (C1): las instrucciones 1 a 3 y la dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): la instrucción 4 omitía «Return hands to forward position» (DS-162). Se aclara hacia la fuente.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (fotos 1 a 3), de frente: banda sobre los muslos, después a la altura del abdomen y por último estirada hacia los lados, con los codos junto al cuerpo. No es un remo hacia atrás.
- Limitaciones de la verificación: ninguna.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | — |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: siempre sentado | evidencia | FALSE | — |
| impacto | false | D: lento | evidencia | FALSE | — |
| carga_externa | true | D: la banda (§4: «incluye banda») | evidencia | TRUE | — |
| esfuerzo_cardio | false | D: fuerza | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (fotos): a la altura del abdomen | evidencia | FALSE | — |
| mano_detras | false | D: por delante | evidencia | FALSE | — |
| ambos_brazos | true | D: las dos manos estiran la banda a la vez | evidencia | TRUE | — |
| agarre | true | D: «Grip band» | evidencia | TRUE | — |
| peso_en_manos | false | D: sin apoyo | evidencia | FALSE | — |
| flexion_profunda_rodilla | false | D (fotos): sentado normal | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: «Sit tall» | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | — |
| inclinacion_tronco | false | D (fotos): erguido | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Recursos (`silla`, `banda`), fase `principal`, dosis y duración: coherentes.
- **Ilustración** (R7.6): dibujaba un remo de perfil, con el brazo desde delante hasta el abdomen. Ahora es frontal: la banda pasa de los muslos al abdomen y se estira hacia fuera, como en las fotos.
- **Nombre:** «Remo con banda elástica» sugería el mismo movimiento equivocado. Pasa a «Abrir la banda a la altura del abdomen». El nombre es de HealthMove; la fuente lo llama «Upper Back Strengthener».

### Incidencias
- El id `banda-remo-sentado` no cambia, para no romper rutinas guardadas.

- **Aclaración, no modificación (DS-161):** las instrucciones ya describían el movimiento de la fuente. El nombre y el dibujo eran lo único que sugería otro. Ponerlos de acuerdo con la fuente no cambia el ejercicio, así que el id se mantiene (DG-5 no aplica).

### Propuesta de cambios
- Instrucción 4: «Vuelve a llevarla hacia el abdomen con los codos pegados al cuerpo. Después adelanta las manos, relaja los brazos y suelta la tensión.» (aclaración hacia la fuente).
- `nombre`: «Abrir la banda a la altura del abdomen».
- Ilustración: vista frontal.
- `fuente.consultado`: 2026-10-21.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-21 (P19).

## Revisión de DeepSeek

**Consulta C6** (`deepseek/ejecuciones/20261021T005608Z-fase-05-lote08/`, DS-157 a DS-167; SHA-256 `594c7652…`).

**Aceptados:**
- DS-160 y DS-165: el `agarre` de `pulgar-dedos` pasa a I y conservador.
- DS-166: el `esfuerzo_cardio` de `activacion-sentado` pasa a I y conservador.
- DS-157 y DS-158: la adaptación «solo la primera ronda» se aprueba, con R3.1 y R3.3.
- DS-162: aclaración de la instrucción 4 de la banda.
- DS-159: la condición de cierre de la nota de altura se reformula.
- DS-163: se cita §7.1.

**No aceptados:**
- **DS-161:** es una aclaración (ver el ejercicio 58).
- **DS-167:** las 4 filas del lote 8 sí están en la tabla del registro. «34 de 220» cuenta ids, no informes, y no cambia con la reauditoría.
- **DS-164:** el propio DeepSeek dice que no es un hallazgo.

## Resumen del lote

- **4 ejercicios reauditados con el protocolo 1.0**, con la fuente abierta de nuevo (texto y páginas renderizadas).
- **Cambios:**
  - `pulgar-dedos`: `brazo_sobre_hombro` pasa a `true` (conservadora, clase de CN-1) y la nota de `agarre` pasa a evidencia D;
  - `banda-remo-sentado`: ilustración y nombre;
  - `consultado` en los 4.
- **Los 4 quedan LISTO PARA APROBACIÓN DOCUMENTAL.** Siguen en `borrador`.
