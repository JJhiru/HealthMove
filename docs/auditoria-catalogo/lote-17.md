# Lote 17 · Primera auditoría con el protocolo 1.0: Sant Joan d'Alacant, Hospital de León y SERMEF (9 ejercicios)

- Fecha: 2026-10-24
- Versión del protocolo: 1.0
- Catálogo: v0.3.0 (actualizado 2026-10-14), rama `desarrollo-v1`, commit `0eb0603`
- Identificador git del catálogo: no fiable, el catálogo tiene cambios sin confirmar (son los cambios de este lote, aplicados antes de cerrarlo).
- Huellas literales (tras aplicar los cambios): `respiracion-abdominal-tumbado` `ce43e38bb7629095`, `bascula-pelvica-tumbado` `1ea24f9441f7b1a9`, `rotacion-rodillas-tumbado` `2d58d1eff265ec4d`, `rodilla-al-pecho-tumbado` `9ac870c7968d37e8`, `isometrico-hombro-fuera-pared` `69740f069a2abfed`, `isometrico-hombro-dentro` `c9a0605452aa0cf0`, `elevar-pierna-lado-tumbado` `24c5ef8cd4b718ea`, `separar-juntar-rodillas-tumbado` `1fb2d0d178c8c8d2`, `elevar-brazo-lado-respiracion` `7f0614288f3acde5`.
- **Cómo se hizo (P29):** evidencia de Claude (`evidencia/lote-17.md`); borrador de DeepSeek (consulta C18, en un bloque); verificación de Claude. **Los apartados son el borrador de DeepSeek con las correcciones de Claude** listadas en «Revisión de DeepSeek». La columna «Etiqueta actual» conserva el valor de antes de aplicar.
- **Fuentes abiertas** (2026-10-24, `curl`, HTTP 200):

| Fuente | URL | Datos | Revisado |
|---|---|---|---|
| Hospital Universitari de Sant Joan d'Alacant, «Escuela de espalda» | `https://sanjuan.san.gva.es/wp-content/uploads/2020/05/ESCUELA-DE-ESPALDA.-2.pdf` | PDF de 7 páginas, SHA-256 (prefijo) `59efc8bce2a30824` | Texto completo y fotos |
| Hospital de León, «Guía informativa de ejercicio terapéutico. Capacidad física baja» | `https://www.saludcastillayleon.es/CHLeon/es/cuidados-enfermeria-paciente/guia-informativa-ejercicios-terapeuticos.ficheros/1567504-GU%C3%8DA%20INFORMATIVA%20PARA%20EJERCICIOS%20TERAPEUTICOS%20%20CAPACIDAD%20F%C3%8DSICA%20BAJA.pdf` | PDF de 2 páginas, SHA-256 (prefijo) `eeec750bea7ccbd7` | Texto y dibujos |
| SERMEF, «Programas de ejercicios para hombro: síndrome subacromial, isométricos» | `https://www.sermef.es/wp-content/uploads/2023/10/Hombro_SdSubacromial_Isometricos.pdf` | PDF de 2 páginas, SHA-256 (prefijo) `be5d898310d5a6b7` | Texto y dibujos de la página 1 |

- **Población:** la guía de León declara «prevenir la pérdida funcional secundaria al ingreso hospitalario por COVID-19 en pacientes con baja capacidad física»; sus 3 ejercicios pasan de vacío a «ingreso hospitalario por COVID-19».
- **Ilustraciones de HealthMove** (R7.6): coinciden las 9; en 132 y 134 coincidían con la fuente más que las instrucciones, que se corrigen.

## 126. respiracion-abdominal-tumbado

### Identificación
- ID: `respiracion-abdominal-tumbado`
- Nombre: Respiración abdominal en la cama
- Fuente: Hospital Universitari de Sant Joan d'Alacant, «Escuela de espalda», ejercicio 1 (F1)
- Población destinataria de la fuente (si la declara): «problemas de espalda» (`especifica_de` actual: «problemas de espalda»).
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1).

### Evidencia de la fuente
- Ubicación exacta: F1, ejercicio 1 (apartado 126).
- Pasos originales relevantes, resumidos con palabras propias: manos sobre la tripa; coger aire por la nariz hinchando el abdomen y expulsarlo por la boca; repetir 10 veces.
- Coincidencias (C1): posición (tumbado, rodillas dobladas), manos sobre el abdomen, respiración, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y foto), manos sobre el abdomen, tumbado con rodillas dobladas.
- Limitaciones de la verificación: la evidencia no dice si las manos están cerradas o abiertas; dice «las manos sobre la tripa».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: respiración | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: respiración lenta | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y foto): las manos están sobre el abdomen, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y foto): las manos están delante, sobre el abdomen | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): las manos reposan sobre el abdomen; no hay función de ejecución | evidencia | FALSE | DG-4 / Q1 (P9): manos en reposo |
| agarre | false | D (texto): las manos se apoyan sobre el propio cuerpo; no se pide cerrar la mano | evidencia | FALSE | R7.4 / Q2 (P10): contacto con el propio cuerpo, no apoyo |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): «rodillas dobladas», sin que conste que pasen de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «problemas de espalda»; la fuente es una «Escuela de espalda» (D). Coherente con R8.1.

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 127. bascula-pelvica-tumbado

### Identificación
- ID: `bascula-pelvica-tumbado`
- Nombre: Báscula pélvica en la cama
- Fuente: Hospital Universitari de Sant Joan d'Alacant, «Escuela de espalda», ejercicio 2 (F1)
- Población destinataria de la fuente (si la declara): «problemas de espalda» (`especifica_de` actual: «problemas de espalda»).
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel; `inclinacion_tronco: true` conservador ya documentado.

### Evidencia de la fuente
- Ubicación exacta: F1, ejercicio 2 (apartado 127).
- Pasos originales relevantes, resumidos con palabras propias: coger aire por la nariz llevándolo a la tripa y soltarlo por la boca mientras se presiona la zona lumbar hacia abajo hasta notar que toca la camilla; 10 veces.
- Coincidencias (C1): posición, movimiento de la zona lumbar, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y fotos), tumbado con rodillas dobladas, flecha que indica la zona lumbar que baja. I (tronco): movimiento pequeño de la pelvis y la zona lumbar contra la camilla; no es inclinar ni arquear la espalda en el sentido de §4, pero sí mover la columna.
- Limitaciones de la verificación: la evidencia no fija el ángulo de la rodilla.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: respiración lenta | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| agarre | false | D (texto): las manos no intervienen | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): «rodillas dobladas», sin que conste que pasen de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | true | I (texto y fotos): la zona lumbar se presiona contra la camilla; movimiento pequeño de la columna | conservadora | TRUE | R2.1: ante la duda, `true` conservador con nota |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal` y `calma`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «problemas de espalda»; coherente con R8.1.

### Incidencias
- La nota actual de `inclinacion_tronco` no tiene la forma de R2.4. Ver DS-395.

### Propuesta de cambios
- `notas_etiquetado`: reescribir la nota de `inclinacion_tronco` en la forma de R2.4 (DS-395).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 128. rotacion-rodillas-tumbado

### Identificación
- ID: `rotacion-rodillas-tumbado`
- Nombre: Llevar las rodillas de lado a lado
- Fuente: Hospital Universitari de Sant Joan d'Alacant, «Escuela de espalda», ejercicio 10 (F1)
- Población destinataria de la fuente (si la declara): «problemas de espalda» (`especifica_de` actual: «problemas de espalda»).
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel; `rotacion_tronco: true` con nota.

### Evidencia de la fuente
- Ubicación exacta: F1, ejercicio 10 (apartado 128).
- Pasos originales relevantes, resumidos con palabras propias: con las piernas flexionadas y juntas, llevarlas hacia un lado y hacia el otro con cada espiración; 10 veces a cada lado.
- Coincidencias (C1): posición, movimiento de las rodillas, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y fotos), las dos rodillas juntas caídas hacia un lado, los hombros apoyados.
- Limitaciones de la verificación: la evidencia no fija el ángulo de la rodilla.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: respiración lenta | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| agarre | false | D (texto): las manos no intervienen | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): «piernas flexionadas», sin que conste que pasen de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | true | D (texto y fotos): las rodillas giran a un lado y a otro con los hombros apoyados | evidencia | TRUE | §4: girar los hombros respecto a la cadera |

### Otros campos
- Fase `calma`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «problemas de espalda»; coherente con R8.1.

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 129. rodilla-al-pecho-tumbado

### Identificación
- ID: `rodilla-al-pecho-tumbado`
- Nombre: Rodilla hacia el pecho sin manos
- Fuente: Hospital Universitari de Sant Joan d'Alacant, «Escuela de espalda», ejercicio 6 (F1)
- Población destinataria de la fuente (si la declara): «problemas de espalda» (`especifica_de` actual: «problemas de espalda»).
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel; `flexion_profunda_rodilla: true` y `flexion_amplia_cadera: true` con evidencia D.

### Evidencia de la fuente
- Ubicación exacta: F1, ejercicio 6 (apartado 129).
- Pasos originales relevantes, resumidos con palabras propias: coger aire llevándolo a la tripa y, al soltarlo por la boca, doblar la rodilla dirigiéndola al pecho; 10 veces con cada pierna. Los ejercicios 7 y 8 son las variantes que cogen la pierna con las manos (no incorporadas aquí).
- Coincidencias (C1): posición, movimiento de la rodilla hacia el pecho, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): la adaptación actual «Se omiten las variantes de la fuente que agarran la pierna con las manos» es coherente con la evidencia (los ejercicios 7 y 8 no se incorporan).
- Adaptaciones que deben documentarse: ninguna nueva.
- Hechos, inferencias e incertidumbres: D (texto y fotos), una rodilla sube hacia el pecho sin las manos; las manos quedan a los lados. D (fotos), la rodilla muy doblada y el muslo cerca del tronco.
- Limitaciones de la verificación: la evidencia no fija el ángulo exacto de la rodilla ni del muslo; las fotos son D de que la rodilla está muy doblada y el muslo cerca del tronco.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: respiración lenta | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y fotos): las manos quedan a los lados, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y fotos): las manos quedan a los lados | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): las manos no intervienen; el movimiento es de la pierna | evidencia | FALSE | DG-4 / Q1 (P9): manos en reposo |
| agarre | false | D (texto): «sin ayudarte de las manos» | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | true | D (fotos): la rodilla muy doblada | evidencia | TRUE | §4: rodilla más de 90° |
| flexion_amplia_cadera | true | D (fotos): el muslo cerca del tronco | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «problemas de espalda»; coherente con R8.1.

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 130. isometrico-hombro-fuera-pared

### Identificación
- ID: `isometrico-hombro-fuera-pared`
- Nombre: Empujar la pared con el dorso de la mano
- Fuente: SERMEF, «Programas de ejercicios para hombro: síndrome subacromial, isométricos», «Isométrico de rotadores externos» (F3)
- Población destinataria de la fuente (si la declara): «síndrome subacromial» (`especifica_de` actual: «síndrome subacromial»).
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1).

### Evidencia de la fuente
- Ubicación exacta: F3, «Isométrico de rotadores externos» (apartado 130).
- Pasos originales relevantes, resumidos con palabras propias: pegado a la pared del lado afectado, con una toalla entre el cuerpo y el brazo y el codo a 90°; empujar la pared con el dorso de la mano; mantener 3 a 5 segundos; 1 serie de 10.
- Coincidencias (C1): posición de pie junto a la pared, codo a 90°, empuje con el dorso de la mano, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), de pie, de lado junto a la pared, el codo a 90° y el dorso de la mano contra la pared; la mano abierta.
- Limitaciones de la verificación: la evidencia no dice si el ejercicio se hace con los dos brazos a la vez o alternando; la instrucción de HealthMove dice «Gírate y repite con el otro brazo».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto y dibujo): de pie; una mano empuja la pared y la otra queda libre | evidencia | FALSE | §4 «exige no sujetarse a nada»: no lo exige; a diferencia de P23, solo una mano está ocupada (DS-396) |
| una_pierna | false | D: de pie con los dos pies | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: isométrico | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: isométrico local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): el codo a 90°, la mano a la altura del codo, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): la mano está al lado, contra la pared | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): un brazo empuja; el otro no interviene; la instrucción de HealthMove alterna los brazos | evidencia | FALSE | DG-4 / Q1 (P9): series con un brazo y después con el otro no cuentan |
| agarre | false | D (dibujo): la mano abierta contra la pared; no se pide cerrar la mano | evidencia | FALSE | R7.4 / Q2 (P10): contacto sin prensión, pero la instrucción usa el verbo de la fuente («empuja») y la mano está abierta en el dibujo |
| peso_en_manos | false | D: el brazo empuja contra la pared sin cargar el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: de pie, sin doblar la rodilla | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto y dibujo): de pie, sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `de_pie`, recursos `pared` y `toalla`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «síndrome subacromial»; coherente con R8.1.

### Incidencias
- `equilibrio_sin_apoyo: false` con la pared como recurso y el cuerpo pegado a ella: ver DS-396.

### Propuesta de cambios
- `exigencias.equilibrio_sin_apoyo`: se mantiene `false`, con una nota que lo explica (DS-396).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 131. isometrico-hombro-dentro

### Identificación
- ID: `isometrico-hombro-dentro`
- Nombre: Empujar la mano hacia dentro sin moverla
- Fuente: SERMEF, «Programas de ejercicios para hombro: síndrome subacromial, isométricos», «Isométrico de rotadores internos» (F3)
- Población destinataria de la fuente (si la declara): «síndrome subacromial» (`especifica_de` actual: «síndrome subacromial»).
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C3 en la postura (la fuente muestra de pie; HealthMove lo hace sentado) con adaptación documentada pero **inexacta** (DS-397).

### Evidencia de la fuente
- Ubicación exacta: F3, «Isométrico de rotadores internos» (apartado 131).
- Pasos originales relevantes, resumidos con palabras propias: toalla entre el cuerpo y el brazo, codo a 90°; «La mano contraria sujeta la muñeca»; empujar hacia dentro con el brazo afectado sin que la otra mano permita el movimiento; 3 a 5 segundos; 1 serie de 10.
- Coincidencias (C1): toalla, codo a 90°, mano contraria sujeta la muñeca, empuje isométrico, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, el dibujo de la fuente es **de pie** y HealthMove lo hace sentado. La adaptación actual dice «La fuente no fija la postura; se propone sentado», que es inexacta (DS-397).
- Adaptaciones que deben documentarse: corregir la redacción de la adaptación existente (DS-397).
- Hechos, inferencias e incertidumbres: D (texto y dibujo), de pie, la mano contraria sujeta la muñeca del brazo con el codo doblado.
- Limitaciones de la verificación: la evidencia no dice si el dibujo muestra las manos cerradas o abiertas; dice «la mano contraria sujeta la muñeca».

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado (HealthMove) / de pie (fuente) | evidencia | FALSE | Solo se define de pie; la versión de HealthMove es sentada |
| una_pierna | false | D: sentado / de pie con los dos pies | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado / de pie | evidencia | FALSE | — |
| impacto | false | D: isométrico | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: isométrico local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): el codo a 90°, la mano a la altura del codo, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): la mano contraria sujeta la muñeca delante del cuerpo | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y dibujo): una mano sujeta la muñeca del otro brazo mientras este empuja; los dos brazos intervienen a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto): «La mano contraria sujeta la muñeca» | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: sentado / de pie; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: sentado / de pie, sin doblar la rodilla | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado / de pie | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado / de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto y dibujo): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recursos `silla` y `toalla`, dosis: coherentes con la versión de HealthMove.
- Ilustración: coincide con la versión de HealthMove (sentado), no con la fuente (de pie). No es una discrepancia de R7.7 porque la ilustración representa la adaptación, no la fuente; se anota.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «síndrome subacromial»; coherente con R8.1.

### Incidencias
- La adaptación actual es inexacta: el dibujo de la fuente es de pie. Ver DS-397.

### Propuesta de cambios
- `adaptaciones`: corregir la redacción para reflejar que la fuente muestra la posición de pie y que HealthMove lo hace sentado (DS-397).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 132. elevar-pierna-lado-tumbado

### Identificación
- ID: `elevar-pierna-lado-tumbado`
- Nombre: Levantar la pierna de lado en la cama
- Fuente: Hospital de León, «Guía informativa de ejercicio terapéutico: capacidad física baja», ejercicio 7 (F2)
- Población destinataria de la fuente (si la declara): la fuente no declara población en la evidencia; `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C3 en la instrucción (la fuente muestra las dos piernas estiradas; HealthMove pide la pierna de abajo doblada) sin adaptación documentada (DS-398).

### Evidencia de la fuente
- Ubicación exacta: F2, ejercicio 7 (apartado 132).
- Pasos originales relevantes, resumidos con palabras propias: tumbado sobre el lado izquierdo, elevar la pierna derecha «hacia el techo»; repetir sobre el lado derecho. 10 veces (regla común).
- Coincidencias (C1): posición de lado, elevación de la pierna de arriba, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, HealthMove pide «Túmbate de lado con la pierna de abajo doblada» y «sin que la cadera ruede hacia atrás»; ninguna de las dos cosas está en la fuente (el dibujo muestra la pierna de abajo estirada). No hay adaptación documentada (DS-398).
- Adaptaciones que deben documentarse: la pierna de abajo doblada y la indicación de no rodar la cadera (DS-398).
- Hechos, inferencias e incertidumbres: D (texto y dibujo), de lado, las dos piernas estiradas; la de arriba sube unos 40 a 45°.
- Limitaciones de la verificación: la evidencia no dice si el dibujo muestra las manos cerradas o abiertas; no las menciona.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| agarre | false | D (texto): las manos no intervienen | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (dibujo): las dos piernas estiradas; la instrucción de HealthMove pide la pierna de abajo doblada, sin que conste que pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado de lado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide con la fuente (las dos piernas estiradas), no con la instrucción de HealthMove (pierna de abajo doblada). Es una discrepancia de R7.7 entre la ilustración y la instrucción de HealthMove; ver DS-398.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge una población declarada por la fuente; no se rellena (R8.1).

### Incidencias
- La instrucción de HealthMove introduce dos elementos que la fuente no tiene (pierna de abajo doblada, no rodar la cadera) sin adaptación documentada. Ver DS-398.

### Propuesta de cambios
- Instrucciones 1 y 3 corregidas hacia la fuente: «Túmbate de lado con las dos piernas estiradas.» y «Bájala despacio.» (DS-398). La ilustración ya tenía las dos piernas estiradas.
- `fuente.consultado`: 2026-10-24.
- `fuente.especifica_de`: «ingreso hospitalario por COVID-19» (D: la guía lo declara).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 133. separar-juntar-rodillas-tumbado

### Identificación
- ID: `separar-juntar-rodillas-tumbado`
- Nombre: Separar y juntar las rodillas
- Fuente: Hospital de León, «Guía informativa de ejercicio terapéutico: capacidad física baja», ejercicio 6 (F2)
- Población destinataria de la fuente (si la declara): la fuente no declara población en la evidencia; `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1).

### Evidencia de la fuente
- Ubicación exacta: F2, ejercicio 6 (apartado 133).
- Pasos originales relevantes, resumidos con palabras propias: con las rodillas flexionadas y los pies apoyados en la cama, separar y juntar las rodillas.
- Coincidencias (C1): posición, movimiento de las rodillas, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), vista desde los pies, rodillas dobladas que se separan y se juntan.
- Limitaciones de la verificación: la evidencia no fija el ángulo de la rodilla.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| mano_detras | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): los brazos no intervienen | evidencia | FALSE | — |
| agarre | false | D (texto): las manos no intervienen | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): «rodillas flexionadas», sin que conste que pasen de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge una población declarada por la fuente; no se rellena (R8.1).

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.
- `fuente.especifica_de`: «ingreso hospitalario por COVID-19» (D: la guía lo declara).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## 134. elevar-brazo-lado-respiracion

### Identificación
- ID: `elevar-brazo-lado-respiracion`
- Nombre: Subir el brazo de lado al tomar aire
- Fuente: Hospital de León, «Guía informativa de ejercicio terapéutico: capacidad física baja», ejercicio 1, apartado B (F2)
- Población destinataria de la fuente (si la declara): la fuente no declara población en la evidencia; `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel en el movimiento; `brazo_sobre_hombro: false` con nota inexacta (DS-399).

### Evidencia de la fuente
- Ubicación exacta: F2, ejercicio 1, apartado B (apartado 134).
- Pasos originales relevantes, resumidos con palabras propias: tumbado sobre el lado izquierdo; tomar aire por la nariz mientras se eleva el brazo derecho y soltarlo por la boca al bajarlo; repetir sobre el lado derecho.
- Coincidencias (C1): posición de lado, elevación del brazo, respiración, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Adaptaciones que deben documentarse: ninguna.
- Hechos, inferencias e incertidumbres: **el apartado B no tiene dibujo**; el único dibujo del ejercicio 1 es el del apartado A (boca arriba, los dos brazos que suben por encima de la cabeza). La altura del brazo en B es N.
- Limitaciones de la verificación: la evidencia no dice si la ilustración de HealthMove (el brazo sube por encima de la cabeza) corresponde a la fuente o a una interpretación del apartado A.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: respiración lenta | evidencia | FALSE | — |
| brazo_sobre_hombro | false | N: el apartado B no tiene dibujo; la altura del brazo no se puede determinar | conservadora | TRUE | R2.1: ante la duda, `true` conservador con nota (ver DS-399) |
| mano_detras | false | D (texto): el brazo sube, no va detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): un brazo se mueve; el otro no interviene | evidencia | FALSE | DG-4 / Q1 (P9): un brazo trabaja, el otro en reposo |
| agarre | false | D (texto): no se pide cerrar la mano | evidencia | FALSE | — |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: tumbado de lado, sin que se pida doblar la rodilla | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: tumbado de lado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `tumbado`, recurso `cama`, dosis: coherentes.
- Ilustración: de lado, el brazo sube por encima de la cabeza. La fuente no tiene dibujo para el apartado B; la ilustración no se puede comparar con la fuente para este apartado. Se anota.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge una población declarada por la fuente; no se rellena (R8.1).
- `variante_de`: `respiracion-lado-brazo-adelante` (no auditado en este lote; solo contexto).

### Incidencias
- La nota actual («La guía muestra la altura del brazo en un dibujo…») es inexacta: el apartado B no tiene dibujo. Ver DS-399.

### Propuesta de cambios
- `exigencias.brazo_sobre_hombro`: `false` → `true` conservador (CN-1; DS-399). La ilustración ya subía el brazo por encima de la cabeza. Impacto (modo auditoría): sale de `brazo_arriba`.
- `notas_etiquetado`: la nota inexacta se sustituye por la `[conservadora]` (DS-399).
- `fuente.consultado`: 2026-10-24.
- `fuente.especifica_de`: «ingreso hospitalario por COVID-19» (D: la guía lo declara).

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL. Cambios aplicados el 2026-10-24 (P29).


## Revisión de DeepSeek

**Consulta C18** (en un bloque, con «FIN DEL BORRADOR»; 0,032 USD como mucho). Análisis: `deepseek/analisis-claude/fase-17-lote17.md`.

**Aceptado:** DS-395 (nota de la báscula), DS-397 (adaptación inexacta de 131), DS-398 (instrucción de 132, que se corrige hacia la fuente en vez de documentarla), DS-399 (`brazo_sobre_hombro` conservador en 134 y nota corregida).

**Corregido por Claude:**
- DS-396, rechazado: en 130 una mano empuja la pared y la otra queda libre; el ejercicio no exige estar sin apoyo. El precedente de P23 (`true`) era para las dos manos ocupadas.
- 132 y 134: el borrador los dejaba en REQUIERE CORRECCIONES y PENDIENTE DE DECISIÓN; con las correcciones aplicadas quedan listos.
- Población de León: el borrador no la rellenaba.

## Resumen del lote

- **9 ejercicios auditados por primera vez con el protocolo 1.0.** Los 9 quedan LISTOS PARA APROBACIÓN DOCUMENTAL, con los cambios aplicados.
- **Cambios de etiquetas:** `elevar-brazo-lado-respiracion`, `brazo_sobre_hombro` → `true` conservador.
- **Instrucciones corregidas hacia la fuente:** `elevar-pierna-lado-tumbado` (piernas estiradas; se retira «sin que la cadera ruede hacia atrás»).
- **Adaptación corregida para aprobar (Q5):** 131, «La fuente lo muestra de pie; aquí se hace sentado».
- **Nombre nuevo en `especifica_de`:** «ingreso hospitalario por COVID-19».
