# Lote 19 · Primera auditoría con el protocolo 1.0: Worcestershire, Medway y York (9 ejercicios)

- Fecha: 2026-10-24
- Versión del protocolo: 1.0
- Catálogo: v0.3.0 (actualizado 2026-10-14), rama `desarrollo-v1`, commit `9ecaa6f`
- Identificador git del catálogo: no fiable, el catálogo tiene cambios sin confirmar (son los cambios de este lote, aplicados antes de cerrarlo).
- Huellas literales (tras aplicar los cambios): `banda-press-pecho-sentado` `aebf842d5328e638`, `banda-prensa-pierna-sentado` `75ce15ee12b1cba3`, `banda-separar-rodillas-sentado` `2c703b694806ebf9`, `banda-aperturas-sentado` `47bf683b0dc13f00`, `banda-elevaciones-laterales-sentado` `dd3e34012eff3873`, `banda-empuje-pie-sentado` `ee5f17c0baefac12`, `banda-sentarse-levantarse` `0d709c5951f61f37`, `cuadriceps-estatico-tumbado` `21108b2092afed24`, `flexion-rodilla-boca-abajo` `32b1a76ff7c0e776`.
- **Cómo se hizo (P29):** evidencia de Claude (`evidencia/lote-19.md`); borrador de DeepSeek (consulta C20, en un bloque); verificación de Claude. **Los apartados son el borrador de DeepSeek con las correcciones de Claude** listadas en «Revisión de DeepSeek». La columna «Etiqueta actual» conserva el valor de antes de aplicar.
- **Fuentes abiertas** (2026-10-24, `curl`, HTTP 200):

| Fuente | URL | Datos | Revisado |
|---|---|---|---|
| Worcestershire County Council, «The Resistance Band Exercise Guide» | `https://www.worcestershire.gov.uk/sites/default/files/2024-12/resistance_band_accessible_leaflet_online_version.pdf` | PDF de 5 páginas, SHA-256 (prefijo) `555fad5c3edd8814` | Texto y los 8 dibujos |
| Medway NHS FT, «Knee Exercises», DOC629 | `https://www.medway.nhs.uk/app/app-uploads/2024/04/Knee-Exercises-Patient-Information-Leaflet.pdf` | PDF de 2 páginas, SHA-256 (prefijo) `e547d33981368888` | Texto y fotos |
| York and Scarborough Teaching Hospitals NHS FT, «Knee Exercises», PIL636 v4 | `https://yorkhospitals.nhs.uk/seecmsfile/?id=6834` | PDF de 2 páginas, SHA-256 (prefijo) `6ca07fac7114b5b3` | Texto completo |

- **Ilustraciones de HealthMove** (R7.6): coinciden las 9.

## 143. banda-press-pecho-sentado

### Identificación
- ID: `banda-press-pecho-sentado`
- Nombre: Empujar al frente con banda
- Fuente: Worcestershire County Council (Salud Pública), «The Resistance Band Exercise Guide», «Chest Press» (F1)
- Población destinataria de la fuente (si la declara): «Anyone over 50» (D: la banda se ofrece gratis a mayores de 50 en las bibliotecas del condado). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1).

### Evidencia de la fuente
- Ubicación exacta: F1, «Chest Press» (apartado 143).
- Pasos originales relevantes, resumidos con palabras propias: sentado al fondo de la silla; la banda por detrás del respaldo, un extremo en cada mano; manos a la altura del pecho, a los lados; empujar al frente hasta casi estirar los brazos («don't fully extend»); volver despacio; 8 a 12 veces.
- Coincidencias (C1): posición sentada, banda por detrás del respaldo, manos a la altura del pecho, empuje al frente, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), sentado, brazos al frente a la altura del pecho, manos cerradas sobre la banda.
- Limitaciones de la verificación: la evidencia no dice si la banda se ata antes de empezar; por CN-2 no cuenta.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | true | D (texto y dibujo): se empuja contra una banda elástica | evidencia | TRUE | §4: resistencia añadida (incluye banda) |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): las manos a la altura del pecho, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): las manos van al frente | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y dibujo): los dos brazos empujan a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto y dibujo): las manos cerradas sobre la banda | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado con los pies apoyados, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recursos `silla` y `banda`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia recoge que la fuente se dirige a mayores de 50 (D). Propuesta: «personas mayores de 50» (R8.1; ver DS-408).

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.especifica_de`: «personas mayores de 50» (R8.1; ver DS-408).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 144. banda-prensa-pierna-sentado

### Identificación
- ID: `banda-prensa-pierna-sentado`
- Nombre: Empujar con la pierna y banda
- Fuente: Worcestershire County Council (Salud Pública), «The Resistance Band Exercise Guide», «Leg Press» (F1)
- Población destinataria de la fuente (si la declara): «Anyone over 50» (D). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1).

### Evidencia de la fuente
- Ubicación exacta: F1, «Leg Press» (apartado 144).
- Pasos originales relevantes, resumidos con palabras propias: sentado en la mitad delantera de la silla; el centro de la banda bajo un pie y un extremo en cada mano; los puños junto a la cadera; subir la rodilla hacia el techo y empujar el pie hacia delante y abajo; volver a la rodilla levantada; 8 a 12 veces con cada pierna.
- Coincidencias (C1): posición sentada, banda bajo el pie, manos junto a la cadera, rodilla que sube, empuje del pie, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), sentado, una rodilla levantada por encima del asiento, el pie empuja la banda, las manos sujetan la banda junto a la cadera.
- Limitaciones de la verificación: la evidencia no dice si la banda se coloca antes de empezar; por CN-2 no cuenta.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | true | D (texto y dibujo): se empuja contra una banda elástica | evidencia | TRUE | §4: resistencia añadida |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): las manos junto a la cadera, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): las manos junto a la cadera, delante | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y dibujo): las dos manos sujetan la banda a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto y dibujo): las manos sujetan la banda | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y dibujo): la rodilla sube hacia el techo, sin que conste que pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | true | D (texto y dibujo): la rodilla sube por encima del asiento; el muslo se acerca al tronco más que al estar sentado | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recursos `silla` y `banda`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. Propuesta: «personas mayores de 50» (R8.1; ver DS-408).

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.especifica_de`: «personas mayores de 50» (R8.1; ver DS-408).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 145. banda-separar-rodillas-sentado

### Identificación
- ID: `banda-separar-rodillas-sentado`
- Nombre: Separar las rodillas con banda
- Fuente: Worcestershire County Council (Salud Pública), «The Resistance Band Exercise Guide», «Knee Splits» (F1)
- Población destinataria de la fuente (si la declara): «Anyone over 50» (D). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C3 en `agarre` y `ambos_brazos` (la fuente no dice si se sujetan los extremos; el dibujo no lo aclara).

### Evidencia de la fuente
- Ubicación exacta: F1, «Knee Splits» (apartado 145).
- Pasos originales relevantes, resumidos con palabras propias: sentado en la mitad delantera de la silla, rodillas y pies juntos; «Wrap the band around your lap»; separar los pies al ancho de la cadera; con los pies apoyados, empujar las rodillas hacia fuera, 3 a 5 segundos, y volver; 8 a 12 veces. El texto no dice si se sujetan los extremos.
- Coincidencias (C1): posición sentada, banda alrededor de los muslos, empuje de las rodillas hacia fuera, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente no dice si las manos sujetan la banda; el dibujo no lo aclara (I).
- Hechos, inferencias e incertidumbres: D (texto), la banda alrededor de los muslos; I (dibujo ampliado), las manos quedan junto a los muslos, a la altura de los extremos de la banda, sin que se vea si los sujetan.
- Limitaciones de la verificación: la evidencia no resuelve si hay prensión; se aplica Q2 (P10) como conservador.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | true | D (texto): la banda tira de las rodillas hacia dentro | evidencia | TRUE | §4: resistencia añadida |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (dibujo): los brazos cuelgan a los lados, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (dibujo): las manos junto a los muslos, delante | evidencia | FALSE | — |
| ambos_brazos | false | I (dibujo): los brazos cuelgan a los lados; no se ve que sujeten la banda ni que trabajen | conservadora | TRUE | Q1 (P9): ante la duda de si las manos sujetan la banda, `true` conservador con nota (ver DS-409) |
| agarre | true | I (dibujo): las manos junto a los extremos de la banda, sin que se vea prensión | conservadora | TRUE | Q2 (P10): contacto sin prensión visible, `true` conservador con nota |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado con los pies apoyados, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recursos `silla` y `banda`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. Propuesta: «personas mayores de 50» (R8.1; ver DS-408).
- `notas_etiquetado` actual: «Sujetar los extremos de la banda se marca como agarre.» No tiene la forma de R2.4. Ver DS-409.

### Incidencias
- `ambos_brazos: false` con la duda de si las manos sujetan la banda: Q1 (P9) y R2.1 apuntan a `true` conservador (DS-409).
- La nota de `agarre` no tiene la forma de R2.4 (DS-409).

### Propuesta de cambios
- `exigencias.ambos_brazos`: `false` → `true` conservador, con nota `[conservadora]` (DS-409).
- `notas_etiquetado`: reescribir la nota de `agarre` en la forma de R2.4 (DS-409).
- `fuente.especifica_de`: «personas mayores de 50» (R8.1; ver DS-408).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 146. banda-aperturas-sentado

### Identificación
- ID: `banda-aperturas-sentado`
- Nombre: Abrir los brazos con banda
- Fuente: Worcestershire County Council (Salud Pública), «The Resistance Band Exercise Guide», «Back Flies» (F1)
- Población destinataria de la fuente (si la declara): «Anyone over 50» (D). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1).

### Evidencia de la fuente
- Ubicación exacta: F1, «Back Flies» (apartado 146).
- Pasos originales relevantes, resumidos con palabras propias: sentado en la parte delantera de la silla; sujetar la banda con las dos manos, al ancho de los hombros, con los brazos estirados; manteniéndolos estirados, separar la banda hasta que los brazos queden «in line with your shoulders»; volver; 8 a 12 veces.
- Coincidencias (C1): posición sentada, banda con las dos manos, brazos estirados, apertura hasta la línea de los hombros, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), sentado, los brazos abiertos en cruz a la altura de los hombros, la banda tensa delante del pecho.
- Limitaciones de la verificación: la evidencia no dice si las manos están cerradas o abiertas; dice «sujetar la banda con las dos manos».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | true | D (texto y dibujo): se separa una banda elástica | evidencia | TRUE | §4: resistencia añadida |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y dibujo): los brazos quedan «in line with your shoulders»; la mano llega a la altura del hombro y no consta que no la pase | conservadora | TRUE | R2.1 / CN-1 (P25): `true` conservador con nota |
| mano_detras | false | D (texto y dibujo): las manos van al frente y a los lados | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y dibujo): los dos brazos se abren a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto): «sujetar la banda con las dos manos» | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado con los pies apoyados, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recursos `silla` y `banda`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. Propuesta: «personas mayores de 50» (R8.1; ver DS-408).
- La nota `[conservadora]` de `brazo_sobre_hombro` ya tiene la forma de R2.4; no la cambio.

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.especifica_de`: «personas mayores de 50» (R8.1; ver DS-408).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 147. banda-elevaciones-laterales-sentado

### Identificación
- ID: `banda-elevaciones-laterales-sentado`
- Nombre: Subir los brazos de lado con banda
- Fuente: Worcestershire County Council (Salud Pública), «The Resistance Band Exercise Guide», «Side Raises» (F1)
- Población destinataria de la fuente (si la declara): «Anyone over 50» (D). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1).

### Evidencia de la fuente
- Ubicación exacta: F1, «Side Raises» (apartado 147).
- Pasos originales relevantes, resumidos con palabras propias: sentado en la mitad delantera de la silla, el centro de la banda bajo los pies y un extremo en cada mano, con las manos a los lados; con los codos algo doblados, subir los brazos de lado hasta que manos y codos estén «almost level with your shoulders»; bajar despacio; 8 a 12 veces.
- Coincidencias (C1): posición sentada, banda bajo los pies, subida de los brazos de lado hasta casi la altura de los hombros, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), sentado de frente, los brazos abiertos casi a la altura de los hombros, la banda desde los pies.
- Limitaciones de la verificación: la evidencia no dice si las manos están cerradas o abiertas; dice «un extremo en cada mano».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | true | D (texto y dibujo): se sube contra una banda elástica | evidencia | TRUE | §4: resistencia añadida |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y dibujo): los brazos suben hasta «almost level with your shoulders»; no consta que no pasen la altura del hombro | conservadora | TRUE | R2.1 / CN-1 (P25): `true` conservador con nota |
| mano_detras | false | D (texto y dibujo): las manos suben de lado, por delante | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y dibujo): los dos brazos suben a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto): «un extremo en cada mano» | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): sentado con los pies apoyados, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recursos `silla` y `banda`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. Propuesta: «personas mayores de 50» (R8.1; ver DS-408).
- La nota `[conservadora]` de `brazo_sobre_hombro` ya tiene la forma de R2.4; no la cambio.

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.especifica_de`: «personas mayores de 50» (R8.1; ver DS-408).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 148. banda-empuje-pie-sentado

### Identificación
- ID: `banda-empuje-pie-sentado`
- Nombre: Empujar con la punta del pie y banda
- Fuente: Worcestershire County Council (Salud Pública), «The Resistance Band Exercise Guide», «Calf Press» (F1)
- Población destinataria de la fuente (si la declara): «Anyone over 50» (D). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1).

### Evidencia de la fuente
- Ubicación exacta: F1, «Calf Press» (apartado 148).
- Pasos originales relevantes, resumidos con palabras propias: sentado en la parte delantera de la silla, el centro de la banda alrededor de un pie y un extremo en cada mano; los puños junto a la cadera; estirar la pierna y empujar el pie hacia delante, con los dedos apuntando al frente; volver despacio hacia la espinilla; 8 a 12 veces.
- Coincidencias (C1): posición sentada, banda alrededor del pie, manos junto a la cadera, estiramiento de la pierna, empuje del pie, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), sentado, la pierna estirada, el pie empuja la banda, las manos junto a la cadera.
- Limitaciones de la verificación: la evidencia no dice si la banda se coloca antes de empezar; por CN-2 no cuenta.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | true | D (texto y dibujo): se empuja contra una banda elástica | evidencia | TRUE | §4: resistencia añadida |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): las manos junto a la cadera, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): las manos junto a la cadera, delante | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y dibujo): las dos manos sujetan la banda a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto y dibujo): las manos sujetan la banda | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y dibujo): la pierna se estira, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recursos `silla` y `banda`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. Propuesta: «personas mayores de 50» (R8.1; ver DS-408).

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.especifica_de`: «personas mayores de 50» (R8.1; ver DS-408).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 149. banda-sentarse-levantarse

### Identificación
- ID: `banda-sentarse-levantarse`
- Nombre: Sentarse y levantarse con banda
- Fuente: Worcestershire County Council (Salud Pública), «The Resistance Band Exercise Guide», «Sit to Stand» (F1)
- Población destinataria de la fuente (si la declara): «Anyone over 50» (D). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1) en el movimiento; C3 en `equilibrio_sin_apoyo` (la fuente no dice que se haga sin apoyo; el dibujo muestra las manos ocupadas con la banda).
- Variante de: `sentarse-levantarse` (contexto, no auditado).

### Evidencia de la fuente
- Ubicación exacta: F1, «Sit to Stand» (apartado 149).
- Pasos originales relevantes, resumidos con palabras propias: sentado en la parte delantera de la silla, el centro de la banda bajo los pies y un extremo en cada mano; retrasar los pies hasta que los dedos queden a la altura de las rodillas; inclinarse hacia delante y levantarse (la banda añade resistencia); sentarse despacio con la espalda recta; 8 a 12 veces.
- Coincidencias (C1): posición sentada y de pie, banda bajo los pies, inclinación hacia delante, levantarse y sentarse, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente no dice que se haga sin apoyo; el dibujo muestra las manos sujetando la banda pisada, sin apoyarse en nada.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), de pie delante de la silla, las manos sujetan la banda pisada; ninguna mano se apoya.
- Limitaciones de la verificación: la evidencia no dice si la banda se coloca antes de empezar; por CN-2 no cuenta.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | true | D (dibujo): de pie con las manos ocupadas en la banda, sin apoyarse en nada; el texto no menciona apoyo | evidencia | TRUE | §4: de pie, exige no sujetarse a nada (las manos están ocupadas) |
| una_pierna | false | D: de pie con los dos pies | evidencia | FALSE | — |
| sentarse_levantarse | true | D (texto): pasar de sentado a de pie y viceversa | evidencia | TRUE | §4: pide pasar de sentado a de pie o viceversa |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | true | D (texto y dibujo): la banda añade resistencia | evidencia | TRUE | §4: resistencia añadida |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): las manos junto a la cadera, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): las manos delante, junto a la cadera | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y dibujo): las dos manos sujetan la banda a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto y dibujo): las manos sujetan la banda | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | true | D (texto): los pies retrasados hasta que los dedos quedan a la altura de las rodillas; al levantarse, la rodilla puede pasar de 90° | conservadora | TRUE | R2.1: ante la duda del ángulo, `true` conservador con nota (ver DS-410) |
| flexion_amplia_cadera | false | D: de pie y sentado, sin que el muslo se acerque al tronco más que al estar sentado | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | true | D (texto): «inclinarse hacia delante» para levantarse | evidencia | TRUE | §4: inclinar la espalda hacia delante |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posiciones `sentado` y `de_pie`, recursos `silla` y `banda`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. Propuesta: «personas mayores de 50» (R8.1; ver DS-408).
- `variante_de`: `sentarse-levantarse` (contexto; no auditado).

### Incidencias
- `flexion_profunda_rodilla: true` sin nota `[conservadora]` (DS-410).

### Propuesta de cambios
- `notas_etiquetado`: añadir la nota `[conservadora]` de `flexion_profunda_rodilla` en la forma de R2.4 (DS-410).
- `fuente.especifica_de`: «personas mayores de 50» (R8.1; ver DS-408).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 150. cuadriceps-estatico-tumbado

### Identificación
- ID: `cuadriceps-estatico-tumbado`
- Nombre: Apretar el muslo en la cama
- Fuente: Medway NHS FT (Virtual Fracture Clinic), «Knee Exercises», «Static Quads» (F2)
- Población destinataria de la fuente (si la declara): «Knee Soft Tissue Injury», fractura de rótula, luxación o subluxación de rótula (D). `especifica_de` actual: «lesión de rodilla».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1) en el movimiento; C2 en la posición (HealthMove lo hace tumbado boca arriba, una de las posturas compatibles con «legs supported and straight»).

### Evidencia de la fuente
- Ubicación exacta: F2, «Static Quads» (apartado 150).
- Pasos originales relevantes, resumidos con palabras propias: «Rest with your legs supported and straight»; tensar suavemente el muslo e intentar empujar la rodilla contra la cama; mantener 5 segundos; 5 a 10 veces.
- Coincidencias (C1): piernas estiradas y apoyadas, tensar el muslo, empujar la rodilla contra la superficie, mantener 5 segundos, 5 a 10 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, HealthMove lo hace tumbado boca arriba; la fuente no fija la postura (la foto muestra una camilla, sin que se vea si la persona está sentada o tumbada).
- Hechos, inferencias e incertidumbres: D (texto), piernas estiradas y apoyadas; D (foto), las piernas estiradas sobre una camilla.
- Limitaciones de la verificación: la evidencia no dice si la foto muestra a la persona sentada o tumbada; la postura de HealthMove es una de las compatibles con el texto.

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
| agarre | false | D (texto): las manos no intervienen | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): «legs supported and straight» | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado con las piernas estiradas | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «lesión de rodilla». La evidencia recoge que la fuente se dirige a lesión de partes blandas de la rodilla, fractura de rótula y luxación o subluxación de rótula (D). El valor actual es un nombre breve coherente con R8.1; no propongo cambiarlo.

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.
- `fuente.especifica_de`: «lesión de rodilla» (la fuente declara lesión de partes blandas, fractura y luxación de rótula; nombre ya existente).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 151. flexion-rodilla-boca-abajo

### Identificación
- ID: `flexion-rodilla-boca-abajo`
- Nombre: Llevar el talón al glúteo boca abajo
- Fuente: York and Scarborough Teaching Hospitals NHS FT, «Knee Exercises», «Hamstring Exercises» (F3)
- Población destinataria de la fuente (si la declara): rodilla dolorosa (D: «If it becomes painful the thigh muscles may become weak»). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1) en el movimiento; C3 en la dosis (la fuente no da repeticiones y HealthMove usa una pauta de 5 a 10) y en la adaptación actual, que es inexacta.

### Evidencia de la fuente
- Ubicación exacta: F3, «Hamstring Exercises» (apartado 151).
- Pasos originales relevantes, resumidos con palabras propias: «Lie on your stomach if you are able»; doblar la rodilla llevando el talón hacia el glúteo; mantener contando hasta cinco y bajar despacio. También se puede hacer de pie, sujetándose a una silla firme. No da repeticiones.
- Coincidencias (C1): boca abajo, doblar la rodilla llevando el talón al glúteo, mantener contando hasta cinco, bajar despacio.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente no da repeticiones; HealthMove usa «De 5 a 10 veces con cada pierna». La adaptación actual dice «La fuente deja las repeticiones en blanco para que las fije el fisioterapeuta», que es inexacta (la fuente no las menciona).
- Hechos, inferencias e incertidumbres: D (texto), boca abajo, la rodilla se dobla llevando el talón al glúteo; N (imágenes), la fuente no trae fotos de los ejercicios.
- Limitaciones de la verificación: la evidencia no dice si la mano interviene; el texto no la menciona.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: boca abajo | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: boca abajo | evidencia | FALSE | — |
| sentarse_levantarse | false | D: boca abajo | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| agarre | false | D (texto): las manos no intervienen | evidencia | FALSE | — |
| peso_en_manos | false | D: boca abajo; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | true | D (texto): el talón va hacia el glúteo; la rodilla pasa de 90° | evidencia | TRUE | §4: rodilla más de 90° |
| flexion_amplia_cadera | false | D: boca abajo con el muslo apoyado | evidencia | FALSE | — |
| puntillas_talones | false | D: boca abajo | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `suelo`, sin recursos, dosis: coherentes con la versión de HealthMove.
- Ilustración: coincide con el texto (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia recoge que la fuente se dirige a rodilla dolorosa (D). Propuesta: «dolor de rodilla» (R8.1; ver DS-408).
- La adaptación actual es inexacta (DS-411).

### Incidencias
- La adaptación actual atribuye a la fuente unos espacios en blanco que no existen (DS-411).
- La dosis de HealthMove (5 a 10) no está en la fuente; es una adaptación que debe documentarse (DS-411).

### Propuesta de cambios
- `adaptaciones`: sustituir «La fuente deja las repeticiones en blanco para que la fije el fisioterapeuta; se usa una pauta de 5 a 10.» por «La fuente no indica repeticiones; aquí se proponen de 5 a 10.» (DS-411).
- `fuente.especifica_de`: «dolor de rodilla» (R8.1; ver DS-408).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## Revisión de DeepSeek

**Consulta C20** (en un bloque, con «FIN DEL BORRADOR»; 0,033 USD como mucho). Los cuatro hallazgos (DS-408 a DS-411) se aceptan. Claude añade la población de Medway, que el borrador no rellenaba. Análisis: `deepseek/analisis-claude/fase-19-lote19.md`.

## Resumen del lote

- **9 ejercicios auditados por primera vez con el protocolo 1.0.** Los 9 quedan LISTOS PARA APROBACIÓN DOCUMENTAL, con los cambios aplicados.
- **Cambios de etiquetas:** `banda-separar-rodillas-sentado`, `ambos_brazos` → `true` conservador (el dibujo no deja ver si las manos sujetan la banda).
- **Adaptación corregida:** 151 (la fuente no da repeticiones; no las «deja en blanco»).
- **Nombres en `especifica_de`:** «personas mayores de 50» (nuevo), «lesión de rodilla» y «dolor de rodilla».
