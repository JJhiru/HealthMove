# Borrador de auditoría · fase-22-lote22 (consulta C23)

> **Alcance y límites.** Audito los 10 ejercicios del bloque `catalogo-lote22` con el protocolo 1.0, usando **solo** la evidencia de Claude (`evidencia-lote-22`) y el propio catálogo. No he abierto las fuentes originales. No emito juicios clínicos ni apruebo nada. Las citas entre «» son literales de la evidencia de Claude; cuando la evidencia resume con palabras propias, lo indico.
>
> **Nota de método.** La evidencia agrupa los ejercicios por parejas (169/170, 171/172) y da un apartado por ejercicio en los demás casos. Cada informe lleva su número de apartado. Donde la evidencia no distingue entre las dos versiones (sentada y de pie) de un mismo estiramiento, lo señalo como limitación y aplico la regla conservadora (R2.1) cuando la posición no está fijada por el texto.

---

## 169. estiramiento-triceps

### Identificación
- ID: `estiramiento-triceps`
- Nombre: Estirar la parte de atrás del brazo
- Fuente: South Tees Hospitals NHS FT (Rehabilitación cardiaca), «Cardiac rehabilitation exercise programme», «Arm stretches», primer método (F1, apartado 169)
- Población destinataria de la fuente (si la declara): «rehabilitación cardiaca» (D, datos comunes de F1). `especifica_de` actual: «rehabilitación cardiaca».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en la posición (la fuente no la indica en el texto y el dibujo es de pie; HealthMove tiene una versión sentada, P23).

### Evidencia de la fuente
- Ubicación exacta: F1, «Arm stretches», primer método (apartado 169).
- Pasos originales relevantes, resumidos con palabras propias: doblar el brazo con la mano en el hombro; deslizar la mano por encima del hombro hacia el omóplato; con el otro brazo, empujar suavemente el brazo hacia atrás hasta notar el estiramiento por detrás del brazo; repetir con el otro. Tiempo: el común (15 s en la vuelta a la calma).
- Coincidencias (C1): mano por encima del hombro hacia el omóplato, la otra mano empuja el codo, 15 s, cambio de brazo.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente no indica la posición en el texto; el dibujo («Arm-stretch») es de pie. HealthMove tiene una versión sentada y otra de pie (P23). La sentada no está documentada como adaptación.
- Hechos, inferencias e incertidumbres: D (texto), la mano sube por encima del hombro hacia el omóplato y la otra empuja el codo. D (dibujo), de pie, codo levantado por encima de la cabeza y mano detrás de la cabeza. N, si la fuente permite hacerlo sentado.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite la posición sentada; la versión sentada es una elección de HealthMove.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: estiramiento estático, sin fase en el aire | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y dibujo): la mano sube por encima del hombro hacia el omóplato; el codo queda por encima de la cabeza | evidencia | TRUE | §4: codo o mano por encima del hombro |
| mano_detras | true | D (texto y dibujo): la mano va hacia el omóplato, detrás de la cabeza | evidencia | TRUE | §4: mano detrás de la cabeza |
| ambos_brazos | true | D (texto): una mano sube y la otra empuja el codo | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto y dibujo): la mano se apoya en el hombro y en el codo, sin prensión ni objeto | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `sentado`, recurso `silla`, dosis «Mantén 15 segundos con cada brazo»: coherentes con F1 (15 s en la vuelta a la calma).
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «rehabilitación cardiaca». La evidencia recoge que la fuente se dirige a rehabilitación cardiaca (D). Coincide con R8.1.
- `notas_etiquetado` actual: «Posición: el 2026-10-22 se separó en dos entradas (C2, P23): esta, sentada, y estiramiento-triceps-pie, de pie. La fuente no indica la posición de este ejercicio; las dos versiones quedan pendientes de auditoría.» Es correcta como nota informativa; no es una nota conservadora. No propongo cambiarla.

### Incidencias
- La posición sentada no consta en la fuente; es una adaptación no documentada (C3). Ver DS-428.

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente no indica la posición; el dibujo es de pie. Aquí se hace sentado.» (C3 documentado; R3.1, Q5; ver DS-428).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 170. estiramiento-triceps-pie

### Identificación
- ID: `estiramiento-triceps-pie`
- Nombre: Estirar la parte de atrás del brazo de pie
- Fuente: South Tees Hospitals NHS FT (Rehabilitación cardiaca), «Cardiac rehabilitation exercise programme», «Arm stretches», primer método (F1, apartado 170)
- Población destinataria de la fuente (si la declara): «rehabilitación cardiaca» (D, datos comunes de F1). `especifica_de` actual: «rehabilitación cardiaca».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento y en la posición (el dibujo es de pie).
- Variante de: `estiramiento-triceps` (contexto, auditado en 169).

### Evidencia de la fuente
- Ubicación exacta: F1, «Arm stretches», primer método (apartado 170).
- Pasos originales relevantes, resumidos con palabras propias: los mismos que en 169; el dibujo («Arm-stretch») es de pie.
- Coincidencias (C1): de pie, mano por encima del hombro hacia el omóplato, la otra mano empuja el codo, 15 s, cambio de brazo.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), de pie, codo levantado por encima de la cabeza y mano detrás de la cabeza; la otra mano sobre el codo.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con un solo brazo; HealthMove lo hace con los dos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | true | D (dibujo): de pie, con las dos manos ocupadas en el estiramiento | evidencia | TRUE | §4: de pie, exige no sujetarse a nada; las dos manos están ocupadas |
| una_pierna | false | D (dibujo): los dos pies apoyados | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: estiramiento estático | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y dibujo): la mano sube por encima del hombro hacia el omóplato; el codo queda por encima de la cabeza | evidencia | TRUE | §4: codo o mano por encima del hombro |
| mano_detras | true | D (texto y dibujo): la mano va hacia el omóplato, detrás de la cabeza | evidencia | TRUE | §4: mano detrás de la cabeza |
| ambos_brazos | true | D (texto): una mano sube y la otra empuja el codo | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto y dibujo): la mano se apoya en el hombro y en el codo, sin prensión ni objeto | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (dibujo): de pie con las piernas rectas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `de_pie`, recursos: vacío, coherente (no necesita silla ni pared).
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «rehabilitación cardiaca». Coincide con R8.1.
- `variante_de`: `estiramiento-triceps` (contexto; auditado en 169).
- `notas_etiquetado` actual: «equilibrio_sin_apoyo: con las dos manos ocupadas no hay forma de sujetarse a nada (especificación §7, regla 4; C2, P23). Versión de pie separada de estiramiento-triceps el 2026-10-22. La fuente no indica la posición de este ejercicio; las dos versiones quedan pendientes de auditoría.» Es correcta como nota informativa; no es una nota conservadora. No propongo cambiarla.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 171. estiramiento-pecho-manos-detras

### Identificación
- ID: `estiramiento-pecho-manos-detras`
- Nombre: Abrir el pecho con las manos entrelazadas detrás
- Fuente: South Tees Hospitals NHS FT (Rehabilitación cardiaca), «Cardiac rehabilitation exercise programme», «Chest stretch», segundo método (F1, apartado 171)
- Población destinataria de la fuente (si la declara): «rehabilitación cardiaca» (D, datos comunes de F1). `especifica_de` actual: «rehabilitación cardiaca».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en la posición (la fuente no la indica en el texto y el dibujo es de pie; HealthMove tiene una versión sentada, P23).

### Evidencia de la fuente
- Ubicación exacta: F1, «Chest stretch», segundo método (apartado 171).
- Pasos originales relevantes, resumidos con palabras propias: «Or hold your hands together behind your back. Keeping your arms straight, lift your arms away from you until you can feel a stretch across your chest». El primer método (manos en la parte baja de la espalda) es otro ejercicio.
- Coincidencias (C1): manos juntas detrás de la espalda, brazos rectos, separar los brazos hacia atrás hasta notar el estiramiento en el pecho.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente no indica la posición en el texto; el dibujo («chest_2») es de pie. HealthMove tiene una versión sentada y otra de pie (P23). La sentada no está documentada como adaptación. C2, la dosis: la fuente no da repeticiones; HealthMove usa 2 (ya documentado en `adaptaciones`).
- Hechos, inferencias e incertidumbres: D (texto), manos juntas detrás de la espalda, brazos rectos, separar hacia atrás. D (dibujo), de pie, de perfil, el brazo estirado hacia atrás y abajo. N, si la fuente permite hacerlo sentado.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite la posición sentada; la versión sentada es una elección de HealthMove.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: estiramiento estático | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): los brazos van hacia atrás y abajo, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | true | D (texto): «hold your hands together behind your back» | evidencia | TRUE | §4: mano detrás de la espalda |
| ambos_brazos | true | D (texto): las dos manos juntas detrás y los dos brazos se separan | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto): «hold your hands together»; las manos se entrelazan | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `sentado`, recurso `silla`, dosis «Mantén 15 segundos. 2 veces.»: coherentes con F1 (15 s en la vuelta a la calma) y con la adaptación de repeticiones ya documentada.
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «rehabilitación cardiaca». Coincide con R8.1.
- `notas_etiquetado` actual: «Posición: el 2026-10-22 se separó en dos entradas (C2, P23): esta, sentada, y estiramiento-pecho-manos-detras-pie, de pie. La fuente no indica la posición de este ejercicio; las dos versiones quedan pendientes de auditoría.» Es correcta como nota informativa; no es una nota conservadora. No propongo cambiarla.

### Incidencias
- La posición sentada no consta en la fuente; es una adaptación no documentada (C3). Ver DS-428.

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente no indica la posición; el dibujo es de pie. Aquí se hace sentado.» (C3 documentado; R3.1, Q5; ver DS-428).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 172. estiramiento-pecho-manos-detras-pie

### Identificación
- ID: `estiramiento-pecho-manos-detras-pie`
- Nombre: Abrir el pecho con las manos entrelazadas detrás de pie
- Fuente: South Tees Hospitals NHS FT (Rehabilitación cardiaca), «Cardiac rehabilitation exercise programme», «Chest stretch», segundo método (F1, apartado 172)
- Población destinataria de la fuente (si la declara): «rehabilitación cardiaca» (D, datos comunes de F1). `especifica_de` actual: «rehabilitación cardiaca».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento y en la posición (el dibujo es de pie).
- Variante de: `estiramiento-pecho-manos-detras` (contexto, auditado en 171).

### Evidencia de la fuente
- Ubicación exacta: F1, «Chest stretch», segundo método (apartado 172).
- Pasos originales relevantes, resumidos con palabras propias: los mismos que en 171; el dibujo («chest_2») es de pie.
- Coincidencias (C1): de pie, manos juntas detrás de la espalda, brazos rectos, separar hacia atrás hasta notar el estiramiento en el pecho.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis: la fuente no da repeticiones; HealthMove usa 2 (ya documentado en `adaptaciones`).
- Hechos, inferencias e incertidumbres: D (texto y dibujo), de pie, de perfil, el brazo estirado hacia atrás y abajo.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con un solo brazo; HealthMove lo hace con los dos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | true | D (dibujo): de pie, con las dos manos entrelazadas detrás | evidencia | TRUE | §4: de pie, exige no sujetarse a nada; las dos manos están ocupadas |
| una_pierna | false | D (dibujo): los dos pies apoyados | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: estiramiento estático | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): los brazos van hacia atrás y abajo, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | true | D (texto): «hold your hands together behind your back» | evidencia | TRUE | §4: mano detrás de la espalda |
| ambos_brazos | true | D (texto): las dos manos juntas detrás y los dos brazos se separan | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto): «hold your hands together»; las manos se entrelazan | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (dibujo): de pie con las piernas rectas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `de_pie`, recursos: vacío, coherente (no necesita silla ni pared).
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «rehabilitación cardiaca». Coincide con R8.1.
- `variante_de`: `estiramiento-pecho-manos-detras` (contexto; auditado en 171).
- `notas_etiquetado` actual: «equilibrio_sin_apoyo: con las dos manos ocupadas no hay forma de sujetarse a nada (especificación §7, regla 4; C2, P23). Versión de pie separada de estiramiento-pecho-manos-detras el 2026-10-22. La fuente no indica la posición de este ejercicio; las dos versiones quedan pendientes de auditoría.» Es correcta como nota informativa; no es una nota conservadora. No propongo cambiarla.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 173. banda-elevar-brazos-pie

### Identificación
- ID: `banda-elevar-brazos-pie`
- Nombre: Subir los brazos con banda en lazo
- Fuente: South Tees, Physiotherapy, «Rotator cuff in standing with resistance band» (STW0062, actualizada el 09-07-2024) (F2, apartado 173)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin informe de lote (corregido en P26)
- Resultado documental: C1 en el movimiento; C2 en la dosis y en la altura de los brazos (ya documentadas en `adaptaciones`).

### Evidencia de la fuente
- Ubicación exacta: F2, «Rotator cuff in standing with resistance band» (apartado 173).
- Pasos originales relevantes, resumidos con palabras propias: abrir un lazo de banda hasta que los brazos queden paralelos (Fig. A); mantener la tensión y subir los brazos despacio y con control «as high as the physiotherapist has directed» (Figs. B y C); volver; repetir según indique el fisioterapeuta. Aviso: usar gafas de protección con la banda.
- Coincidencias (C1): de pie, banda en lazo, abrir hasta que los brazos queden paralelos, subir despacio y con control, volver.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis (la fuente la deja al fisioterapeuta; HealthMove usa 5 a 10) y la altura («hasta donde te resulte cómodo» en lugar de «as high as the physiotherapist has directed»). Las dos ya están en `adaptaciones`.
- Hechos, inferencias e incertidumbres: D (texto y fotos), de pie, sin apoyo, las dos manos cerradas sobre la banda; brazos abajo delante de los muslos al empezar; en la C, completamente arriba.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con un solo brazo; HealthMove lo hace con los dos. El aviso de gafas de protección no aparece en las instrucciones de HealthMove; ver DS-429.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | true | D (fotos): de pie, sin apoyo, con las dos manos en la banda | evidencia | TRUE | §4: de pie, exige no sujetarse a nada; las dos manos están ocupadas |
| una_pierna | false | D (fotos): los dos pies apoyados | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | true | D (texto): «resistance band» | evidencia | TRUE | §4: incluye banda |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (fotos): en la Fig. C los brazos están completamente arriba | evidencia | TRUE | §4: codo o mano por encima del hombro |
| mano_detras | false | D (texto y fotos): los brazos suben al frente, no detrás | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y fotos): las dos manos sujetan la banda y los dos brazos suben | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (fotos): las dos manos cerradas sobre la banda | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (fotos): de pie con las piernas rectas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `de_pie`, recurso `banda`, dosis «De 5 a 10 veces»: coherentes con la adaptación documentada.
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia. En P26 se corrigió para que empiece con los brazos abajo; la evidencia no lo recoge.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: «agarre: las fotos de la fuente (Fig. A a C) muestran las dos manos cerradas sobre la banda. equilibrio_sin_apoyo: de pie, con las dos manos en la banda y sin apoyo en las fotos (DS-27, M3). brazo_sobre_hombro: la Fig. C muestra los brazos completamente arriba.» Es correcta como nota informativa; no es una nota conservadora. No propongo cambiarla.

### Incidencias
- El aviso de la fuente sobre las gafas de protección no aparece en las instrucciones de HealthMove. Ver DS-429.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 174. estiramiento-flexor-cadera-pie

### Identificación
- ID: `estiramiento-flexor-cadera-pie`
- Nombre: Estirar la parte delantera de la cadera
- Fuente: South Tees Hospitals NHS FT (Rehabilitación cardiaca), «Cardiac rehabilitation exercise programme», «Thigh stretch», segundo método (F1, apartado 174)
- Población destinataria de la fuente (si la declara): «rehabilitación cardiaca» (D, datos comunes de F1). `especifica_de` actual: «rehabilitación cardiaca».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en el apoyo (la fuente lo hace opcional y el dibujo es sin apoyo; HealthMove se sujeta siempre).

### Evidencia de la fuente
- Ubicación exacta: F1, «Thigh stretch», segundo método (apartado 174).
- Pasos originales relevantes, resumidos con palabras propias: «Or standing on one leg, stretch the other one out behind you with the tips of your toes on the floor. Gently push your hips forward until you can feel a stretch over the front of your hip and down the front of your thigh.» Apoyo, el común: sujetarse a una pared o silla si hay inestabilidad.
- Coincidencias (C1): de pie, una pierna atrás con la punta en el suelo, empujar la cadera hacia delante hasta notar el estiramiento por delante de la cadera y el muslo.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la fuente propone sujetarse solo si hay inestabilidad; HealthMove se sujeta siempre (ya documentado en `adaptaciones`).
- Hechos, inferencias e incertidumbres: D (texto y dibujo), de pie, sin apoyo, una pierna atrás con la punta en el suelo, la mano en la cadera. D (texto), el apoyo es opcional.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con una sola mano; HealthMove se sujeta con una mano al respaldo (la instrucción dice «Sujétate al respaldo»).

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto): «hold onto a wall or sturdy chair for support»; HealthMove se sujeta siempre | evidencia | FALSE | §4: se sujeta |
| una_pierna | true | D (texto): «standing on one leg»; el peso cae sobre la pierna de delante | evidencia | TRUE | §4: el peso cae sobre un solo pie |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: estiramiento estático | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): la mano en la cadera o en el respaldo, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): la mano en la cadera o en el respaldo, no detrás | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): «Sujétate al respaldo»; una sola mano se apoya | evidencia | FALSE | Q1 (P9): una mano se apoya mientras el otro brazo no trabaja; no hay uso simultáneo ni alternancia |
| agarre | true | D (texto): «hold onto a wall or sturdy chair for support»; HealthMove se sujeta al respaldo | conservadora | TRUE | Q2 (P10): apoyo sin prensión visible, `true` conservador con nota |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y dibujo): de pie con las piernas rectas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D (texto): la punta del pie atrás toca el suelo, pero el peso no cae sobre ella | evidencia | FALSE | §4: soportar el peso sobre las puntas o los talones; aquí no |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `de_pie`, recurso `silla`, dosis «Mantén 15 segundos con cada pierna»: coherentes con F1 (15 s en la vuelta a la calma).
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «rehabilitación cardiaca». Coincide con R8.1.
- `notas_etiquetado` actual: «Casi todo el peso cae sobre la pierna de delante.» Es correcta como nota informativa; no es una nota conservadora. Falta la nota `[conservadora]` de `agarre` (Q2). Ver DS-430.

### Incidencias
- Falta la nota `[conservadora]` de `agarre` (Q2) (DS-430).

### Propuesta de cambios
- `notas_etiquetado`: añadir la nota `[conservadora]` de `agarre` en la forma de R2.4 (DS-430).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 175. estiramiento-aductores-pie

### Identificación
- ID: `estiramiento-aductores-pie`
- Nombre: Estirar la parte interna del muslo
- Fuente: South Tees Hospitals NHS FT (Rehabilitación cardiaca), «Cardiac rehabilitation exercise programme», «Split stretch» (F1, apartado 175)
- Población destinataria de la fuente (si la declara): «rehabilitación cardiaca» (D, datos comunes de F1). `especifica_de` actual: «rehabilitación cardiaca».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en el apoyo (la fuente pone las manos en la cadera y propone sujetarse si hay inestabilidad; HealthMove se sujeta siempre).

### Evidencia de la fuente
- Ubicación exacta: F1, «Split stretch» (apartado 175).
- Pasos originales relevantes, resumidos con palabras propias: pies algo más separados que los hombros y mirando al frente; «place your hands on your hips»; doblar una rodilla llevando el peso a esa pierna, con la otra estirada y los dos pies apoyados; hasta notar el estiramiento en la cara interna del muslo; repetir con las dos piernas.
- Coincidencias (C1): de pie, pies separados, doblar una rodilla llevando el peso a esa pierna, la otra estirada, los dos pies apoyados, estiramiento en la cara interna del muslo, cambio de lado.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la fuente pone las manos en la cadera y propone sujetarse si hay inestabilidad; HealthMove se sujeta siempre (ya documentado en `adaptaciones`).
- Hechos, inferencias e incertidumbres: D (texto y dibujo), de pie, piernas muy separadas, una rodilla doblada, los brazos en jarra. D (texto), el apoyo es opcional.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con una sola mano; HealthMove se sujeta con una mano al respaldo.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto): «hold onto a wall or sturdy chair for support»; HealthMove se sujeta siempre | evidencia | FALSE | §4: se sujeta |
| una_pierna | false | D (texto): «with the other one straight and both feet on the floor»; el peso se lleva a una pierna, pero los dos pies siguen apoyados | evidencia | FALSE | §4: el peso cae sobre un solo pie; aquí no |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: estiramiento estático | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): las manos en la cadera o en el respaldo, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): las manos en la cadera o en el respaldo, no detrás | evidencia | FALSE | — |
| ambos_brazos | false | D (texto): «Sujétate al respaldo»; una sola mano se apoya | evidencia | FALSE | Q1 (P9): una mano se apoya mientras el otro brazo no trabaja; no hay uso simultáneo ni alternancia |
| agarre | true | D (texto): «hold onto a wall or sturdy chair for support»; HealthMove se sujeta al respaldo | conservadora | TRUE | Q2 (P10): apoyo sin prensión visible, `true` conservador con nota |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y dibujo): una rodilla doblada, sin que conste que pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D (texto): los dos pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `de_pie`, recurso `silla`, dosis «Mantén 15 segundos por lado»: coherentes con F1 (15 s en la vuelta a la calma).
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «rehabilitación cardiaca». Coincide con R8.1.
- `notas_etiquetado` actual: vacío. Falta la nota `[conservadora]` de `agarre` (Q2). Ver DS-430.

### Incidencias
- Falta la nota `[conservadora]` de `agarre` (Q2) (DS-430).

### Propuesta de cambios
- `notas_etiquetado`: añadir la nota `[conservadora]` de `agarre` en la forma de R2.4 (DS-430).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 176. almeja-tumbado

### Identificación
- ID: `almeja-tumbado`
- Nombre: La almeja
- Fuente: South Tees, Physiotherapy, «The clam» (STW0024) (F3, apartado 176)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis (la fuente la deja al fisioterapeuta; HealthMove usa 5 a 10).

### Evidencia de la fuente
- Ubicación exacta: F3, «The clam» (apartado 176).
- Pasos originales relevantes, resumidos con palabras propias: de lado con la cabeza sobre una almohada; caderas y rodillas dobladas, hombros, caderas y tobillos en línea (al principio puede ayudar alinearse contra una pared); con los talones juntos, separar despacio las rodillas usando el glúteo, mantener y bajar despacio; «Do not let your hips roll backwards»; repetir según indique el fisioterapeuta.
- Coincidencias (C1): de lado, caderas y rodillas dobladas, talones juntos, abrir la rodilla de arriba, bajar despacio, sin que la cadera ruede hacia atrás, cambio de lado.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis (la fuente la deja al fisioterapeuta; HealthMove usa 5 a 10; ya documentado en `adaptaciones`).
- Hechos, inferencias e incertidumbres: D (texto y fotos), tumbada de lado en una camilla, la cabeza en la almohada, la mano de arriba apoyada delante; las rodillas dobladas a unos 90° y la de arriba abierta en la B. D (fotos), las rodillas en torno a 90°; las caderas dobladas a unos 45°.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo sin almohada; HealthMove usa la cama como recurso.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento y con control | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y fotos): la mano de arriba apoyada delante, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y fotos): la mano de arriba apoyada delante, no detrás | evidencia | FALSE | — |
| ambos_brazos | false | D (texto y fotos): una sola mano se apoya delante; el otro brazo no trabaja | evidencia | FALSE | Q1 (P9): una mano se apoya mientras el otro brazo no trabaja; no hay uso simultáneo ni alternancia |
| agarre | false | D (texto y fotos): la mano se apoya delante, sin prensión ni objeto | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | true | D (fotos): las rodillas en torno a 90°; la de arriba se abre más | conservadora | TRUE | R7.8: el ángulo no se fija con precisión; `true` conservador con nota (ver DS-431) |
| flexion_amplia_cadera | false | D (fotos): las caderas dobladas a unos 45°; el muslo no se acerca al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D (texto): «Do not let your hips roll backwards»; sin giro de hombros respecto a la cadera | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `tumbado`, recurso `cama`, dosis «De 5 a 10 veces con cada pierna»: coherentes con la adaptación documentada.
- Ilustración: la evidencia no describe la ilustración de HealthMove de este ejercicio. R7.6/R7.7: no puedo confirmar que no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: vacío. Falta la nota `[conservadora]` de `flexion_profunda_rodilla` (DS-431).

### Incidencias
- `flexion_profunda_rodilla: false` con fotos que muestran las rodillas en torno a 90°: la etiqueta actual no es coherente con la evidencia. Ver DS-431.

### Propuesta de cambios
- `exigencias.flexion_profunda_rodilla`: `false` → `true` conservador (R2.1, R7.8; ver DS-431).
- `notas_etiquetado`: añadir la nota `[conservadora]` de `flexion_profunda_rodilla` en la forma de R2.4 (DS-431).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
REQUIERE CORRECCIONES. El cambio de `flexion_profunda_rodilla` necesita aprobación (R2.6) y afecta al filtro `rodilla` de `opciones.js`.

---

## 177. isquios-toalla-tumbado

### Identificación
- ID: `isquios-toalla-tumbado`
- Nombre: Estirar la parte de atrás del muslo tumbado
- Fuente: South Tees, Physiotherapy, «Hamstring stretch» (STW0017) (F4, apartado 177)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis (la fuente no fija tiempos; HealthMove usa la pauta del NIA); C3 en `ambos_brazos` (la etiqueta actual es `false` y las dos fotos muestran las dos manos).

### Evidencia de la fuente
- Ubicación exacta: F4, «Hamstring stretch» (apartado 177).
- Pasos originales relevantes, resumidos con palabras propias: boca arriba, en una cama o en el suelo, con las rodillas dobladas cómodamente; levantar la pierna afectada y «walk your hands up the back of your leg» mientras se estira la rodilla (Fig. A); tirón suave y constante, sin rebotes; mantener, relajar y repetir según indique el fisioterapeuta. Alternativa: una toalla alrededor de la pierna (Fig. B). Progresión: la otra pierna estirada en la cama (Fig. C). Aviso: consultar si hay un problema de espalda.
- Coincidencias (C1): boca arriba, rodillas dobladas, levantar una pierna, sujetarla por detrás del muslo o con una toalla, estirar la rodilla, tirón suave y constante, sin rebotes, cambio de pierna.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis (la fuente no fija tiempos; HealthMove usa la pauta del NIA; ya documentado en `adaptaciones`). C3, `ambos_brazos: false` y las dos fotos muestran las dos manos sujetando la pierna o la toalla.
- Hechos, inferencias e incertidumbres: D (texto y fotos), A, las dos manos sujetan la pierna por detrás del muslo; B, las dos manos sujetan los extremos de la toalla; C, la otra pierna estirada. La pierna levantada queda casi vertical.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con una sola mano; las fotos muestran las dos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: estiramiento estático | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y fotos): las manos suben por detrás del muslo, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y fotos): las manos van por detrás del muslo, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | false | D (fotos): las dos manos sujetan la pierna o la toalla | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos; la etiqueta actual contradice la evidencia |
| agarre | true | D (texto y fotos): las manos sujetan la pierna o los extremos de la toalla | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y fotos): la rodilla se estira; la otra queda doblada cómodamente, sin que conste que pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | true | D (texto y fotos): la pierna levantada queda casi vertical; el muslo se acerca al tronco | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `tumbado`, recursos `cama` y `toalla`, dosis «Mantén de 10 a 30 segundos. 3 veces con cada pierna.»: coherentes con la adaptación documentada.
- Ilustración: la evidencia dice que HealthMove lo dibuja tumbado, una pierna levantada en vertical y la mano hacia ella. La fuente muestra las dos manos. R7.6: la ilustración de HealthMove no introduce un movimiento distinto, pero omite una mano. Ver DS-432.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: «La fuente pide consultar antes si tienes un problema de espalda.» Es correcta como nota informativa; no es una nota conservadora. No propongo cambiarla.

### Incidencias
- `ambos_brazos: false` contradice las fotos de la fuente (DS-432).
- La ilustración de HealthMove muestra una sola mano; la fuente muestra las dos (DS-432).

### Propuesta de cambios
- `exigencias.ambos_brazos`: `false` → `true` (D: las dos fotos muestran las dos manos; ver DS-432).
- `notas_etiquetado`: añadir una nota que describa el fundamento real (las dos fotos muestran las dos manos) (DS-432).
- Ilustración: revisar para que muestre las dos manos (R7.6; ver DS-432).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
REQUIERE CORRECCIONES. El cambio de `ambos_brazos` necesita aprobación (R2.6) y afecta al filtro `un_brazo` de `opciones.js`.

---

## 178. gluteo-figura-cuatro-tumbado

### Identificación
- ID: `gluteo-figura-cuatro-tumbado`
- Nombre: Estirar el glúteo con la pierna en forma de 4
- Fuente: South Tees, Physiotherapy, «Gluteal stretches in lying» (STW0016; copia en `southtees.mixd.co.uk`) (F5, apartado 178)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la dosis (la fuente no fija tiempos; HealthMove usa la pauta del NIA).

### Evidencia de la fuente
- Ubicación exacta: F5, «Gluteal stretches in lying» (apartado 178).
- Pasos originales relevantes, resumidos con palabras propias: boca arriba con las rodillas dobladas; apoyar el tobillo de la pierna afectada sobre la rodilla contraria; «Put one hand on your knee and one just above the ankle»; llevar la pierna hacia el hombro contrario hasta notar el estiramiento en el glúteo; mantener y repetir según indique el fisioterapeuta; puede ayudar una toalla o un cinturón por encima del tobillo (Fig. D). Aviso: «Do not do this exercise if you have had a hip replacement».
- Coincidencias (C1): boca arriba, rodillas dobladas, tobillo sobre la rodilla contraria, una mano en la rodilla y otra sobre el tobillo, llevar la pierna hacia el hombro contrario, cambio de lado.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la dosis (la fuente no fija tiempos; HealthMove usa la pauta del NIA; ya documentado en `adaptaciones`).
- Hechos, inferencias e incertidumbres: D (texto y fotos), C, las dos manos sujetan la rodilla y el tobillo y llevan la pierna hacia el pecho; D, las dos manos sujetan la toalla; las dos rodillas muy dobladas.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con una sola mano; las fotos muestran las dos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: tumbado; el peso no cae sobre un pie | evidencia | FALSE | — |
| sentarse_levantarse | false | D: tumbado | evidencia | FALSE | — |
| impacto | false | D: estiramiento estático | evidencia | FALSE | — |
| carga_externa | false | D: sin peso ni banda | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y fotos): las manos en la rodilla y el tobillo, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y fotos): las manos van a la rodilla y al tobillo, no detrás de la espalda ni de la cabeza | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y fotos): las dos manos sujetan la rodilla y el tobillo | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto y fotos): las manos sujetan la rodilla, el tobillo o la toalla | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: tumbado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | true | D (fotos): las dos rodillas muy dobladas | evidencia | TRUE | §4: rodilla más de 90° |
| flexion_amplia_cadera | true | D (texto y fotos): la pierna se lleva hacia el hombro contrario; el muslo se acerca al tronco | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: tumbado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `tumbado`, recursos `cama` y `toalla`, dosis «Mantén de 10 a 30 segundos. 3 veces con cada pierna.»: coherentes con la adaptación documentada.
- Ilustración: la evidencia dice que HealthMove lo dibuja tumbado, la pierna en «4» que se acerca. Coincide con el texto.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: «La fuente lo desaconseja si llevas una prótesis de cadera.» Es correcta como nota informativa; no es una nota conservadora. No propongo cambiarla.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## Hallazgos DS

### DS-428 · Posición sentada no documentada en los dos estiramientos de tríceps y pecho
- **Ubicación exacta:** `evidencia-lote-22`, apartados 169 y 171; catálogo, `estiramiento-triceps` y `estiramiento-pecho-manos-detras`, campo `adaptaciones` (vacío).
- **Evidencia:** «Posición: la fuente no la indica en el texto; el dibujo es de pie. El catálogo tiene las dos versiones desde P23.» (evidencia, 169). «Posición: como 169 y 170.» (evidencia, 171).
- **Explicación:** la fuente no fija la posición en el texto y el dibujo es de pie. HealthMove tiene una versión sentada (P23) sin que la adaptación esté documentada en `adaptaciones`. Es un C3 (diferencia sin documentar) que se resuelve como adaptación documentada (C2) o como aclaración hacia la fuente (R3.1, Q5).
- **Consecuencia potencial:** el usuario ve una versión sentada que la fuente no describe, sin saber que es una elección de HealthMove. Si la fuente no permite la posición sentada, la adaptación no pasaría R3.1.
- **Nivel de certeza:** alta (la evidencia lo dice literalmente).
- **Recomendación:** documentar la adaptación en `adaptaciones` con el texto propuesto en 169 y 171, o aclarar hacia la fuente si la fuente permite la posición sentada.
- **Prueba o evidencia que permitiría confirmarlo:** abrir F1 y comprobar si el texto o alguna imagen permiten la posición sentada.
- **¿Requiere decisión humana?:** sí. Aprobar la adaptación (Q5, una a una) o pedir la aclaración hacia la fuente.

### DS-429 · Aviso de gafas de protección en `banda-elevar-brazos-pie`
- **Ubicación exacta:** `evidencia-lote-22`, apartado 173; catálogo, `banda-elevar-brazos-pie`, `instrucciones` y `adaptaciones`.
- **Evidencia:** «Aviso: usar gafas de protección con la banda.» (evidencia, 173).
- **Explicación:** la fuente incluye un aviso de seguridad (clase 2, DG-6) que HealthMove no recoge. Según R6.2, un consejo de seguridad no cambia etiquetas; según R6.3, si HealthMove lo añade, se documenta como adaptación. Aquí no lo añade, así que no hay adaptación, pero el aviso de la fuente se pierde.
- **Consecuencia potencial:** el usuario no ve un aviso de seguridad que la fuente considera relevante. No afecta a las etiquetas, pero sí a la fidelidad documental.
- **Nivel de certeza:** alta (la evidencia lo dice literalmente).
- **Recomendación:** decidir si se incorpora el aviso como consejo preventivo (clase 2) en las instrucciones o en `adaptaciones`, con revisión de seguridad del texto. No cambia etiquetas.
- **Prueba o evidencia que permitiría confirmarlo:** abrir F2 y comprobar el texto exacto del aviso.
- **¿Requiere decisión humana?:** sí. Decidir si se incorpora el aviso y con qué redacción.

### DS-430 · Falta la nota `[conservadora]` de `agarre` en `estiramiento-flexor-cadera-pie` y `estiramiento-aductores-pie`
- **Ubicación exacta:** catálogo, `estiramiento-flexor-cadera-pie` y `estiramiento-aductores-pie`, `notas_etiquetado`; `evidencia-lote-22`, apartados 174 y 175.
- **Evidencia:** «Apoyo, el común: sujetarse a una pared o silla si hay inestabilidad.» (evidencia, 174). «HealthMove: se sujeta al respaldo en lugar de las manos en la cadera (adaptación documentada).» (evidencia, 175).
- **Explicación:** las dos et