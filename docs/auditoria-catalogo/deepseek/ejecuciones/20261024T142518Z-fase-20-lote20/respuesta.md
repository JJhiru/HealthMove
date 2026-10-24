# Borrador de auditoría · fase-20-lote20 (consulta C21)

**Nota previa.** Este borrador se apoya solo en `evidencia-lote-20` (bloques 152-160), en `catalogo-lote20` y en las reglas de `protocolo`, `especificacion`, `registro` y `opciones`. No he abierto las fuentes originales. Las citas entre «» son las que aparecen en la evidencia de Claude; no añado ninguna que no esté ahí. Los ejercicios `flexion-alterna-piernas-de-pie`, `mini-sentadillas` y `sentarse-levantarse` se usan solo como contexto.

**Limitaciones de la verificación (comunes a los 9):**
- No he visto las fuentes. Todo lo que la evidencia califica como D/I/N lo tomo como hipótesis de Claude, no como hecho verificado por mí.
- No he visto las ilustraciones de HealthMove ni los archivos `scripts/ilustraciones/*.mjs`. Las comparaciones R7.6/R7.7 que cita la evidencia no las puedo comprobar.
- No he visto el catálogo completo ni el estado de `notas_etiquetado` de cada ejercicio más allá de lo que trae `catalogo-lote20`. Las notas que propongo son borradores de texto, no ediciones.
- No he medido disponibilidad (R9.1). No la incluyo porque no tengo la herramienta ni el catálogo completo; lo señalo en cada informe donde un cambio de etiqueta podría afectar a un filtro.
- No emito juicio clínico. Donde la evidencia sugiere una cuestión de seguridad (por ejemplo, `equilibrio_sin_apoyo` en `sentadilla-sin-apoyo`), lo señalo como cuestión documental, no como valoración de idoneidad.

---

## 152. brazos-arriba-manos-entrelazadas-sentado

### Identificación
- ID: `brazos-arriba-manos-entrelazadas-sentado`
- Nombre: Brazos arriba con las manos entrelazadas
- Fuente: The Royal Wolverhampton NHS Trust (Rehabilitación cardiaca), «Cardiac Rehabilitation for Patients Post Cardiac Surgery», p. 3 (F3)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: «cirugía cardiaca».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en la posición (la fuente no dice si se hace sentado o de pie).

### Evidencia de la fuente
- Ubicación exacta: F3, p. 3, ejercicios de calentamiento (apartado 152).
- Pasos originales relevantes, resumidos con palabras propias: entrelazar los dedos delante del cuerpo («link your fingers») y estirar los brazos alejándolos del pecho; con los brazos rectos, subir las manos por encima de la cabeza; soltar los dedos, abrir los brazos hacia los lados y bajarlos. 5 veces.
- Coincidencias (C1): entrelazar los dedos, estirar al frente, subir por encima de la cabeza, soltar y abrir, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente no dice si se hace sentado o de pie; el ejercicio siguiente dice «Stand up straight». HealthMove lo hace sentado.
- Hechos, inferencias e incertidumbres: D (texto), entrelazar los dedos y subir las manos por encima de la cabeza. N (imagen), la fuente no trae dibujo de este ejercicio.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo sentado; la posición de HealthMove es una elección que no consta en la fuente.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto): «subir las manos por encima de la cabeza» | evidencia | TRUE | §4: codo o mano por encima del hombro |
| mano_detras | false | D (texto): las manos suben por delante y por encima de la cabeza, no detrás | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): los dos brazos suben a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto): «entrelazar los dedos» cierra la mano en parte | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis: coherentes.
- Ilustración: coincide con el texto (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «cirugía cardiaca». La evidencia no recoge que la fuente declare esa población; el título del documento sí lo sugiere. No propongo cambiarlo, pero lo señalo como verificación pendiente (ver DS-412).
- `notas_etiquetado` actual: «Entrelazar los dedos se marca como agarre por prudencia.» No tiene la forma de R2.4. Ver DS-413.

### Incidencias
- La nota de `agarre` no tiene la forma de R2.4 (DS-413).
- La posición sentada no consta en la fuente; es una adaptación no documentada (C3). Ver DS-414.

### Propuesta de cambios
- `notas_etiquetado`: reescribir la nota de `agarre` en la forma de R2.4 (DS-413).
- `adaptaciones`: añadir «La fuente no fija la posición; aquí se hace sentado.» (DS-414).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
REQUIERE CORRECCIONES. Cambios propuestos: nota de `agarre` en forma R2.4 y adaptación de posición. Una vez aplicados, LISTO PARA APROBACIÓN DOCUMENTAL.

---

## 153. flexion-rodilla-pie-apoyo

### Identificación
- ID: `flexion-rodilla-pie-apoyo`
- Nombre: Llevar el talón hacia el glúteo
- Fuente: The Royal Wolverhampton NHS Trust (Falls Prevention Service), «Stay Strong, Stay Steady», «Back of Knee Strengthening», p. 16 (F2)
- Población destinataria de la fuente (si la declara): «for patients who have been assessed and issued with these exercises» (D). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en `flexion_profunda_rodilla` (la fuente no fija el ángulo).

### Evidencia de la fuente
- Ubicación exacta: F2, «Back of Knee Strengthening», p. 16 (apartado 153).
- Pasos originales relevantes, resumidos con palabras propias: de pie de cara a la encimera o a una silla firme, sujetándose «with one or both hands»; doblar la rodilla despacio llevando el pie hacia el glúteo, con las rodillas juntas; mantener 5 segundos y bajar despacio; 5 a 10 veces con cada pierna.
- Coincidencias (C1): de pie con apoyo, doblar la rodilla hacia el glúteo, mantener 5 segundos, 5 a 10 veces, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente no fija el ángulo de la rodilla; HealthMove no lo marca.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), de pie con las dos manos en el respaldo, una pierna doblada hacia atrás. I (dibujo), el ángulo de la rodilla no se puede medir con precisión.
- Limitaciones de la verificación: la evidencia no dice si el dibujo permite medir el ángulo; se aplica R7.8.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto y dibujo): se sujeta a la silla o a la encimera | evidencia | FALSE | §4: se sujeta |
| una_pierna | true | D (texto y dibujo): el peso cae sobre un solo pie al doblar la otra rodilla | evidencia | TRUE | §4: peso sobre un solo pie |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): las manos en el respaldo, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): las manos al frente, en el respaldo | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y dibujo): las dos manos en el respaldo | evidencia | TRUE | Q1 (P9): apoyo bilateral |
| agarre | true | D (texto): «sujetándose» | evidencia | TRUE | §4: sujetarse a una silla |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | I (dibujo): la pierna se dobla hacia atrás, sin que se pueda medir el ángulo; la fuente no lo fija | conservadora | TRUE | R2.1 / R7.8: ante la duda del ángulo, `true` conservador con nota (ver DS-415) |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): «sin inclinarte hacia delante» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `de_pie`, recurso `silla`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia recoge que la fuente se dirige a pacientes valorados por el servicio de prevención de caídas (D). Propuesta: «prevención de caídas» (R8.1; ver DS-412).
- `notas_etiquetado` actual: «[conservadora] ambos_brazos: apoyo bilateral (Q1). Se cerraría con: fuente de que basta una mano.» Tiene la forma de R2.4.

### Incidencias
- `flexion_profunda_rodilla: false` con la duda del ángulo: R2.1 y R7.8 apuntan a `true` conservador (DS-415).

### Propuesta de cambios
- `exigencias.flexion_profunda_rodilla`: `false` → `true` conservador, con nota `[conservadora]` (DS-415).
- `fuente.especifica_de`: «prevención de caídas» (R8.1; ver DS-412).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
REQUIERE CORRECCIONES. Cambio propuesto: `flexion_profunda_rodilla` a `true` conservador. Una vez aplicado, LISTO PARA APROBACIÓN DOCUMENTAL.

---

## 154. tandem-apoyo

### Identificación
- ID: `tandem-apoyo`
- Nombre: Un pie delante del otro, con apoyo
- Fuente: Later Life Training (programa Otago), copia del Ealing Council, «Heel Toe Stand Supported», p. 23 (F1)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1).

### Evidencia de la fuente
- Ubicación exacta: F1, «Heel Toe Stand Supported», p. 23 (apartado 154).
- Pasos originales relevantes, resumidos con palabras propias: de pie, de lado al apoyo; poner un pie justo delante del otro, en línea recta; mirar al frente y aguantar 10 segundos; separar los pies y cambiar el pie de delante.
- Coincidencias (C1): de pie con apoyo, pies en línea, aguantar 10 segundos, cambiar el pie de delante.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), de pie de lado junto a una silla, una mano en el respaldo, los pies en línea.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo sin apoyo; HealthMove lo hace siempre con apoyo.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto y dibujo): se sujeta a la silla | evidencia | FALSE | §4: se sujeta |
| una_pierna | false | D (texto y dibujo): los dos pies apoyados, uno delante del otro | evidencia | FALSE | §4: el peso no cae sobre un solo pie |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): la mano en el respaldo, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): la mano al frente, en el respaldo | evidencia | FALSE | — |
| ambos_brazos | false | D (texto y dibujo): una sola mano en el respaldo; la otra no interviene | evidencia | FALSE | Q1 (P9): una mano en apoyo, la otra en reposo; no hay trabajo simultáneo |
| agarre | true | D (texto): «sujétate con una mano» | evidencia | TRUE | §4: sujetarse a una silla |
| peso_en_manos | false | D: de pie; la mano no carga el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y dibujo): de pie con las piernas rectas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `de_pie`, recurso `silla`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).

### Incidencias
- Ninguna.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicado el cambio de `consultado`.

---

## 155. circulos-cadera-pie

### Identificación
- ID: `circulos-cadera-pie`
- Nombre: Círculos de cadera de pie
- Fuente: James Paget University Hospitals NHS FT, «Standing Balance Exercises» (PH-49), «Exercise 6», p. 6 (F4)
- Población destinataria de la fuente (si la declara): «whilst in hospital and when you are discharged» (D). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1).

### Evidencia de la fuente
- Ubicación exacta: F4, «Exercise 6», p. 6 (apartado 155).
- Pasos originales relevantes, resumidos con palabras propias: de pie, sujetándose al aparador con las dos manos; círculos con la cadera hacia la izquierda y después hacia la derecha; 10 veces en cada sentido.
- Coincidencias (C1): de pie con las dos manos apoyadas, círculos de cadera, 10 veces en cada sentido.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna.
- Hechos, inferencias e incertidumbres: D (texto y fotos), de pie frente a un mueble, las dos manos apoyadas, flecha circular en la cadera.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con una sola mano; HealthMove lo hace con las dos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto y fotos): se sujeta al aparador | evidencia | FALSE | §4: se sujeta |
| una_pierna | false | D (texto y fotos): los dos pies apoyados | evidencia | FALSE | §4: el peso no cae sobre un solo pie |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y fotos): las manos en el aparador, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y fotos): las manos al frente, en el aparador | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y fotos): las dos manos apoyadas | evidencia | TRUE | Q1 (P9): apoyo bilateral |
| agarre | true | D (texto): «sujetándose» | evidencia | TRUE | §4: sujetarse a un mueble |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y fotos): de pie con las piernas rectas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `de_pie`, recurso `silla`, dosis: coherentes. La fuente usa un aparador; HealthMove usa una silla. Es una adaptación de recurso, no de movimiento; no cambia exigencias.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia recoge que la fuente se dirige a la recuperación durante el ingreso y tras el alta (D). Propuesta: «rehabilitación tras un ingreso hospitalario» (nombre ya existente en el catálogo; R8.1; ver DS-412).

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.especifica_de`: «rehabilitación tras un ingreso hospitalario» (R8.1; ver DS-412).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 156. marcha-sitio-apoyo

### Identificación
- ID: `marcha-sitio-apoyo`
- Nombre: Marchar en el sitio con apoyo
- Fuente: Later Life Training (programa Otago), copia del Ealing Council, «March», p. 5 (F1)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en el apoyo (la fuente lo hace opcional; HealthMove lo hace siempre).
- Variante de: `flexion-alterna-piernas-de-pie` (contexto, no auditado).

### Evidencia de la fuente
- Ubicación exacta: F1, «March», p. 5 (apartado 156).
- Pasos originales relevantes, resumidos con palabras propias: de pie, alto, «holding your support if needed»; marchar; si se siente estable, añadir el balanceo de uno o de los dos brazos; 1 a 2 minutos. Calentamiento.
- Coincidencias (C1): de pie, marchar, 1 a 2 minutos, calentamiento.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la fuente hace el apoyo opcional; HealthMove lo hace siempre. La nota actual lo recoge.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), de pie, una mano en el respaldo, marchando.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con las dos manos en el respaldo; HealthMove lo hace con una.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto y dibujo): se sujeta al respaldo | evidencia | FALSE | §4: se sujeta |
| una_pierna | true | D (texto): «marchar» implica que el peso cae sobre un pie | evidencia | TRUE | §4: incluye marchar de pie |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: marcha lenta | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: calentamiento suave | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): la mano en el respaldo, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): la mano al frente, en el respaldo | evidencia | FALSE | — |
| ambos_brazos | false | D (texto y dibujo): una sola mano en el respaldo; la otra no interviene | evidencia | FALSE | Q1 (P9): una mano en apoyo, la otra en reposo; no hay trabajo simultáneo |
| agarre | true | D (texto): «holding your support» | evidencia | TRUE | §4: sujetarse a una silla |
| peso_en_manos | false | D: de pie; la mano no carga el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y dibujo): la rodilla sube al marchar, sin que conste que pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | true | D (texto): «marchar» levanta la rodilla; el muslo se acerca al tronco | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): «sin inclinarte hacia delante ni hacia atrás» | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `de_pie`, recurso `silla`, dosis: coherentes.
- Ilustración: la evidencia dice que Claude la corrigió (`depie.mjs`); no la he visto. R7.6/R7.7: no puedo confirmar que ya no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).
- `variante_de`: `flexion-alterna-piernas-de-pie` (contexto; no auditado).
- `notas_etiquetado` actual: «La fuente propone añadir el balanceo de brazos cuando te sientas seguro; aquí se mantiene el apoyo.» Es una adaptación documentada (C2), no una nota de etiqueta. No tiene la forma de R2.4 porque no es una nota conservadora; no propongo cambiarla.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicado el cambio de `consultado` y verificada la ilustración corregida (R7.7).

---

## 157. arquear-espalda-pie

### Identificación
- ID: `arquear-espalda-pie`
- Nombre: Arquear la espalda de pie
- Fuente: Later Life Training (programa Otago), copia del Ealing Council, «Back Extension», p. 8 (F1)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en `equilibrio_sin_apoyo` (la fuente no dice que se haga sin apoyo; el dibujo muestra una silla al lado sin sujetarse).

### Evidencia de la fuente
- Ubicación exacta: F1, «Back Extension», p. 8 (apartado 157).
- Pasos originales relevantes, resumidos con palabras propias: de pie, alto, con los pies al ancho de la cadera; «Place your hands onto your bottom»; arquear la espalda con suavidad; sin mirar al techo ni bloquear las rodillas; 5 veces.
- Coincidencias (C1): de pie, manos a los glúteos, arquear la espalda, 5 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente no dice que se haga sin apoyo; el dibujo muestra una silla al lado sin sujetarse.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), de pie de perfil, las dos manos en los glúteos, una silla al lado sin sujetarse.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite apoyarse en la silla; HealthMove no lo hace.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | true | D (dibujo): de pie sin sujetarse; las manos en los glúteos | evidencia | TRUE | §4: de pie, exige no sujetarse a nada |
| una_pierna | false | D (texto y dibujo): los dos pies apoyados | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): las manos en los glúteos, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | true | D (texto y dibujo): las manos van atrás, a los glúteos | conservadora | TRUE | CN-4 (pendiente): la mano va hacia atrás, junto al glúteo, sin llegar a la espalda; `true` conservador con nota (ver DS-416) |
| ambos_brazos | true | D (texto y dibujo): las dos manos van a los glúteos | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto y dibujo): las manos apoyadas en los glúteos, sin prensión | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): «sin bloquear las rodillas»; de pie con las piernas rectas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | true | D (texto): «arquear la espalda» | evidencia | TRUE | §4: arquear la espalda hacia atrás |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `de_pie`, recurso `silla`, dosis: coherentes. La silla está en el dibujo pero no se usa; el recurso `silla` no es necesario. No propongo quitarlo (no es una exigencia).
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: «[conservadora] ambos_brazos: apoyo bilateral (Q1). Se cerraría con: fuente de que basta una mano.» Es incorrecta: aquí no hay apoyo bilateral, las dos manos van a los glúteos. Ver DS-417.

### Incidencias
- La nota de `ambos_brazos` no describe el fundamento real (DS-417).
- `mano_detras: true` sin nota `[conservadora]` (DS-416).

### Propuesta de cambios
- `notas_etiquetado`: sustituir la nota de `ambos_brazos` por una que describa el fundamento real (las dos manos van a los glúteos) (DS-417).
- `notas_etiquetado`: añadir la nota `[conservadora]` de `mano_detras` en la forma de R2.4 (DS-416).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
PENDIENTE DE DECISIÓN (CN-4). El valor de `mano_detras` depende de CN-4, que sigue pendiente. El resto de cambios se puede aplicar ya.

---

## 158. giro-tronco-pie

### Identificación
- ID: `giro-tronco-pie`
- Nombre: Giro de tronco de pie
- Fuente: Later Life Training (programa Otago), copia del Ealing Council, «Trunk Movements», p. 9 (F1)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en el cuello (la fuente gira «the head and shoulders»; HealthMove dice «los hombros»).

### Evidencia de la fuente
- Ubicación exacta: F1, «Trunk Movements», p. 9 (apartado 158).
- Pasos originales relevantes, resumidos con palabras propias: de pie, alto; «Fold the arms in front of the chest or place one hand on the chair»; estirar el tronco hacia arriba y girar despacio la cabeza y los hombros a la derecha, sin girar la cadera; volver y repetir al otro lado; 5 veces.
- Coincidencias (C1): de pie, giro de hombros, 5 veces hacia cada lado.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente gira «the head and shoulders»; HealthMove dice «los hombros» (la cabeza no; exclusión del cuello). Es una adaptación documentada.
- Hechos, inferencias e incertidumbres: D (texto y dibujos), de pie de frente junto a una silla, con una mano en la silla; y con los brazos cruzados.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con las dos manos en la silla; HealthMove lo hace con una.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto y dibujos): se apoya en la silla | evidencia | FALSE | §4: se sujeta |
| una_pierna | false | D (texto y dibujos): los dos pies apoyados | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujos): la mano en el respaldo o los brazos cruzados, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujos): la mano al frente, en el respaldo, o los brazos cruzados delante | evidencia | FALSE | — |
| ambos_brazos | false | D (texto y dibujos): una sola mano en el respaldo; la otra no interviene | evidencia | FALSE | Q1 (P9): una mano en apoyo, la otra en reposo; no hay trabajo simultáneo |
| agarre | true | D (texto): «apoya una mano en el respaldo» | conservadora | TRUE | Q2 (P10): apoyo sin prensión visible, `true` conservador con nota |
| peso_en_manos | false | D: de pie; la mano no carga el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y dibujos): de pie con las piernas rectas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | true | D (texto): «girar los hombros» | evidencia | TRUE | §4: girar los hombros respecto a la cadera |

### Otros campos
- Fase `calentamiento`, posición `de_pie`, recurso `silla`, dosis: coherentes.
- Ilustración: la evidencia dice que Claude la corrigió (`depie.mjs`); no la he visto. R7.6/R7.7: no puedo confirmar que ya no haya discrepancia.
- Exclusiones del catálogo v1: ninguna. La fuente gira la cabeza; HealthMove no. Es una adaptación documentada, no una exclusión del catálogo v1 (la exclusión es de movimientos de cuello como ejercicio, no de un giro de cabeza dentro de otro ejercicio).
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: «[conservadora] agarre: apoyo sin prensión (Q2). Se cerraría con: revisión profesional.» Tiene la forma de R2.4.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente gira la cabeza y los hombros; aquí solo se giran los hombros.» (C3 documentado).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos y verificada la ilustración corregida (R7.7).

---

## 159. sentadilla-sin-apoyo

### Identificación
- ID: `sentadilla-sin-apoyo`
- Nombre: Sentadilla sin apoyo
- Fuente: Later Life Training (programa Otago), copia del Ealing Council, «Knee Bends No Support», p. 20 (F1)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en `flexion_profunda_rodilla` (la fuente no fija el ángulo).
- Variante de: `mini-sentadillas` (contexto, no auditado).

### Evidencia de la fuente
- Ubicación exacta: F1, «Knee Bends No Support», p. 20 (apartado 159).
- Pasos originales relevantes, resumidos con palabras propias: pies al ancho de la cadera, las puntas al frente; doblar las rodillas llevando el trasero hacia atrás como para sentarse; sin levantar los talones; sin que las rodillas vayan hacia dentro; volver; 10 veces. La página siguiente es la versión «Supported».
- Coincidencias (C1): de pie sin apoyo, doblar las rodillas, trasero hacia atrás, 10 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente no fija el ángulo de la rodilla; HealthMove lo marca.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), de pie sin apoyo, las rodillas dobladas y el tronco inclinado hacia delante.
- Limitaciones de la verificación: la evidencia no dice si el dibujo permite medir el ángulo; se aplica R7.8.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | true | D (texto y dibujo): de pie sin apoyo | evidencia | TRUE | §4: de pie, exige no sujetarse a nada |
| una_pierna | false | D (texto y dibujo): los dos pies apoyados | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): los brazos no intervienen | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): los brazos no intervienen | evidencia | FALSE | — |
| ambos_brazos | false | D (texto y dibujo): los brazos no intervienen | evidencia | FALSE | — |
| agarre | false | D (texto y dibujo): las manos no intervienen | evidencia | FALSE | — |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | true | D (texto y dibujo): «doblar las rodillas llevando el trasero hacia atrás»; el dibujo muestra la rodilla doblada | evidencia | TRUE | §4: agacharse o ponerse en cuclillas |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D (texto): «sin levantar los talones» | evidencia | FALSE | — |
| inclinacion_tronco | true | D (texto y dibujo): el tronco se inclina hacia delante | evidencia | TRUE | §4: inclinar la espalda hacia delante |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `de_pie`, recurso `silla`, dosis: coherentes. La silla está detrás pero no se usa; el recurso `silla` no es necesario. No propongo quitarlo (no es una exigencia).
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: «Es la progresión sin apoyo; la fuente recomienda hacer antes la versión con apoyo.» Es una nota informativa, no una nota conservadora. No tiene la forma de R2.4 porque no es conservadora; no propongo cambiarla.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicado el cambio de `consultado`.

---

## 160. sentarse-levantarse-sin-manos

### Identificación
- ID: `sentarse-levantarse-sin-manos`
- Nombre: Sentarse y levantarse sin usar las manos
- Fuente: Later Life Training (programa Otago), copia del Ealing Council, «Sit To Stand No Hands», p. 34 (F1)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en la posición de los brazos (la fuente permite dos opciones; HealthMove elige una).
- Variante de: `sentarse-levantarse` (contexto, no auditado).

### Evidencia de la fuente
- Ubicación exacta: F1, «Sit To Stand No Hands», p. 34 (apartado 160).
- Pasos originales relevantes, resumidos con palabras propias: sentado, alto, cerca del borde de la silla, con las manos sobre los muslos **o** cruzadas sobre el pecho; los pies algo atrás; inclinarse un poco hacia delante («Lean forwards slightly») y levantarse; retroceder hasta tocar la silla con las piernas y sentarse despacio; hasta 10 veces, despacio.
- Coincidencias (C1): sentado y de pie, inclinación hacia delante, levantarse y sentarse, hasta 10 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, HealthMove elige la opción de los brazos cruzados sobre el pecho.
- Hechos, inferencias e incertidumbres: D (texto y dibujos), sentado con los brazos cruzados sobre el pecho, y de pie.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con las manos sobre los muslos; HealthMove elige la otra opción.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | true | D (texto y dibujos): de pie sin apoyarse en nada; las manos cruzadas sobre el pecho | evidencia | TRUE | §4: de pie, exige no sujetarse a nada |
| una_pierna | false | D (texto y dibujos): los dos pies apoyados | evidencia | FALSE | — |
| sentarse_levantarse | true | D (texto): pasar de sentado a de pie y viceversa | evidencia | TRUE | §4: pide pasar de sentado a de pie o viceversa |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujos): los brazos cruzados sobre el pecho, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujos): los brazos cruzados delante | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y dibujos): los dos brazos cruzados sobre el pecho | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto y dibujos): las manos cruzadas sobre el pecho, sin prensión | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | true | D (texto): los pies algo atrás; al levantarse, la rodilla puede pasar de 90° | conservadora | TRUE | R2.1: ante la duda del ángulo, `true` conservador con nota (ver DS-418) |
| flexion_amplia_cadera | false | D: de pie y sentado, sin que el muslo se acerque al tronco más que al estar sentado | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | true | D (texto): «Lean forwards slightly» | conservadora | TRUE | Q3 (P5) / R2.1: la fuente dice «slightly» y sus dibujos no muestran la fase; `true` conservador con nota |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posiciones `sentado` y `de_pie`, recurso `silla`, dosis: coherentes.
- Ilustración: coincide (evidencia).
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).
- `variante_de`: `sentarse-levantarse` (contexto; no auditado).
- `notas_etiquetado` actual: «[conservadora] inclinacion_tronco: la fuente dice «slightly» y sus dibujos no muestran la fase; la foto del NHS de la base muestra más (Q3). Se cerraría con: una imagen de la transición.» Tiene la forma de R2.4.

### Incidencias
- `flexion_profunda_rodilla: true` sin nota `[conservadora]` (DS-418).

### Propuesta de cambios
- `notas_etiquetado`: añadir la nota `[conservadora]` de `flexion_profunda_rodilla` en la forma de R2.4 (DS-418).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## Hallazgos DS-n

### DS-412 · `especifica_de` en los ejercicios del lote 20
- **Ubicación exacta:** `evidencia-lote-20`, apartados 152, 153, 155 y 160; `catalogo-lote20`, campo `fuente.especifica_de` de cada ejercicio.
- **Evidencia:** «F2 (D): para pacientes valorados por el servicio de prevención de caídas»; «F4 (D): recuperación durante el ingreso hospitalario y después del alta»; «F3 (D): rehabilitación cardiaca tras cirugía cardiaca (`especifica_de` actual: «cirugía cardiaca»)». Para F1: «No declara un grupo de población más concreto».
- **Explicación:** la evidencia recoge la población de F2 y F4, pero el catálogo no la tiene en `especifica_de` (vacío en `flexion-rodilla-pie-apoyo` y `circulos-cadera-pie`). En F3, la evidencia dice que la fuente declara «rehabilitación cardiaca tras cirugía cardiaca», y el catálogo tiene «cirugía cardiaca»; no es un nombre breve de población, es una intervención. R8.1 pide un nombre breve de población, coherente con los existentes.
- **Consecuencia potencial:** si no se rellena, la ficha no muestra la aclaración de procedencia (P17) en ejercicios donde la fuente sí declara población. Si se rellena con un nombre que no es de población, se incumple R8.1.
- **Nivel de certeza:** media. La evidencia es D para F2 y F4; para F3, la evidencia no cita la frase literal de la fuente, solo la resume.
- **Recomendación:** proponer «prevención de caídas» en `flexion-rodilla-pie-apoyo`, «rehabilitación tras un ingreso hospitalario» en `circulos-cadera-pie` (nombre ya existente) y revisar si «cirugía cardiaca» cumple R8.1 en `brazos-arriba-manos-entrelazadas-sentado`. No lo aplico.
- **Prueba o evidencia que permitiría confirmarlo:** cita literal de la fuente F3 donde declare la población; y confirmación de que «cirugía cardiaca» es un nombre de población aceptado en el catálogo.
- **¿Requiere decisión humana?:** sí. Decidir si se rellena `especifica_de` y con qué nombre.

### DS-413 · Notas de etiqueta que no tienen la forma de R2.4
- **Ubicación exacta:** `catalogo-lote20`, `notas_etiquetado` de `brazos-arriba-manos-entrelazadas-sentado` («Entrelazar los dedos se marca como agarre por prudencia.»).
- **Evidencia:** R2.4: «Se anota en `notas_etiquetado` … con esta forma: `[conservadora] <exigencia>: <motivo>. Se cerraría con: <evidencia que falta>.`»
- **Explicación:** la nota describe el motivo pero no lleva el prefijo `[conservadora]`, ni el nombre de la exigencia, ni la cláusula «Se cerraría con:». No cumple R2.4.
- **Consecuencia potencial:** la nota no se puede filtrar ni mostrar de forma consistente; el validador (si en el futuro comprueba el formato, como propone P28/M5) la rechazaría.
- **Nivel de certeza:** alta.
- **Recomendación:** reescribir la nota en la forma de R2.4. Texto propuesto: «[conservadora] agarre: entrelazar los dedos cierra la mano en parte. Se cerraría con: evidencia de que la fuente permite hacerlo con las manos abiertas.»
- **Prueba o evidencia que permitiría confirmarlo:** comparar con las notas de otros ejercicios del catálogo que sí cumplen R2.4 (por ejemplo, `flexion-rodilla-pie-apoyo`).
- **¿Requiere decisión humana?:** no para el formato; sí para el texto final si el desarrollador quiere cambiarlo.

### DS-414 · Posición sentada no documentada en `brazos-arriba-manos-entrelazadas-sentado`
- **Ubicación exacta:** `evidencia-lote-20`, apartado 152; `catalogo-lote20`, `posiciones: ["sentado"]` y `adaptaciones: []`.
- **Evidencia:** «El texto no dice si se hace sentado o de pie (el ejercicio siguiente dice «Stand up straight»).»
- **Explicación:** la fuente no fija la posición. HealthMove lo hace sentado. Según R3.1, la ejecución de HealthMove debe ser una de las que permite la fuente; si la fuente no dice la posición, no se puede afirmar que la sentada esté permitida. Es una adaptación no documentada (C3).
- **Consecuencia potencial:** si la fuente solo permite hacerlo de pie, la versión sentada sería una modificación (DG-5), no una adaptación. Si la fuente permite las dos, falta documentarlo en `adaptaciones`.
- **Nivel de certeza:** media. La evidencia no cita la frase de la fuente sobre la posición; solo dice que no la fija.
- **Recomendación:** antes de decidir, aclarar con la fuente si la posición sentada está permitida. Si lo está, añadir la adaptación «La fuente no fija la posición; aquí se hace sentado.» Si no lo está, es una modificación y se aplica DG-5.
- **Prueba o evidencia que permitiría confirmarlo:** cita literal de la fuente sobre la posición, o una imagen que la muestre.
- **¿Requiere decisión humana?:** sí. Decidir si se documenta como adaptación o se trata como modificación.

### DS-415 · `flexion_profunda_rodilla` en `flexion-rodilla-pie-apoyo`
- **Ubicación exacta:** `evidencia-lote-20`, apartado 153; `catalogo-lote20`, `exigencias.flexion_profunda_rodilla: false`.
- **Evidencia:** «doblar la rodilla despacio llevando el pie hacia el glúteo»; «Dibujo (D): … una pierna doblada hacia atrás».
- **Explicación:** la fuente no fija el ángulo. El dibujo muestra la pierna doblada hacia atrás, pero no se puede medir con precisión. R2.2 exige D para un `false`; R7.8 prohíbe inventar umbrales. La duda del ángulo no se resuelve con la evidencia disponible.
- **Consecuencia potencial:** un `false` sin D. Si el ángulo real pasa de 90°, el ejercicio se ofrece a perfiles con restricción de rodilla que no deberían verlo.
- **Nivel de certeza:** media. La evidencia califica el dibujo como D, pero no dice si permite medir el ángulo.
- **Recomendación:** `true` conservador con nota `[conservadora]`, como en `flexion-rodilla-boca-abajo` (lote 19, apartado 151) y en `sentarse-levantarse` (nota actual). Texto propuesto: «[conservadora] flexion_profunda_rodilla: la fuente no fija el ángulo y el dibujo no permite medirlo. Se cerraría con: una imagen lateral que muestre el ángulo.»
- **Prueba o evidencia que permitiría confirmarlo:** imagen lateral de la fuente con el ángulo visible, o texto que lo fije.
- **¿Requiere decisión humana?:** sí. Aprobar el cambio de etiqueta (R2.6).

### DS-416 · `mano_detras` en `arquear-espalda-pie` y CN-4
- **Ubicación exacta:** `evidencia-lote-20`, apartado 157; `catalogo-lote20`, `exigencias.mano_detras: true`; `registro`, CN-4.
- **Evidencia:** «las dos manos van atrás, a los glúteos: no queda ninguna para sujetarse. Si cuenta como `mano_detras` es la clase de CN-4.»
- **Explicación:** CN-4 trata la mano que va hacia atrás, junto al glúteo, sin llegar a la espalda. Aquí la mano va a los glúteos, no a la espalda. El valor actual es `true`; CN-4 sigue pendiente. La nota `[conservadora]` no está.
- **Consecuencia potencial:** si CN-4 se resuelve como «no cuenta», este ejercicio tendría un `true` sin fundamento. Si se resuelve como «cuenta», falta la nota.
- **Nivel de certeza:** alta en cuanto a la clase (CN-4); media en cuanto al valor final.
- **Recomendación:** mantener `true` conservador con nota `[conservadora]` mientras CN-4 siga pendiente. Texto propuesto: «[conservadora] mano_detras: las manos van a los glúteos, hacia atrás, sin llegar a la espalda (CN-4). Se cerraría con: la decisión de CN-4.»
- **Prueba o evidencia que permitiría confirmarlo:** resolución de CN-4 en `registro`.
- **¿Requiere decisión humana?:** sí. Resolver CN-4.

### DS-417 · Nota de `ambos_brazos` incorrecta en `arquear-espalda-pie`
- **Ubicación exacta:** `catalogo-lote20`, `notas_etiquetado` de `arquear-espalda-pie`: «[conservadora] ambos_brazos: apoyo bilateral (Q1). Se cerraría con: fuente de que basta una mano.»
- **Evidencia:** `evidencia-lote-20`, apartado 157: «las dos manos van atrás, a los glúteos: no queda ninguna para sujetarse».
- **Explicación:** la nota atribuye `ambos_brazos` al apoyo bilateral (Q1), pero en este ejercicio no hay apoyo: las dos manos van a los glúteos. El fundamento real es el uso simultáneo de los dos brazos (Q1, P9), no el apoyo. La nota es incorrecta.
- **Consecuencia potencial:** la nota induce a error sobre el motivo de la etiqueta; si se revisa el ejercicio, se puede quitar la etiqueta pensando que el apoyo ya no aplica.
- **Nivel de certeza:** alta.
- **Recomendación:** sustituir la nota por una que describa el fundamento real. Texto propuesto: «[conservadora] ambos_brazos: las dos manos van a los glúteos a la vez (Q1). Se cerraría con: fuente de que basta una mano.»
- **Prueba o evidencia que permitiría confirmarlo:** comparar con la nota de `mini-sentadillas`, donde el apoyo bilateral sí es el fundamento.
- **¿Requiere decisión humana?:** no para el formato; sí para el texto final.

### DS-418 · `flexion_profunda_rodilla` en `sentarse-levantarse-sin-manos` sin nota
- **Ubicación exacta:** `evidencia-lote-20`, apartado 160; `catalogo-lote20`, `exigencias.flexion_profunda_rodilla: true` y `notas_etiquetado` (solo tiene la nota de `inclinacion_tronco`).
- **Evidencia:** «los pies algo atrás; inclinarse un poco hacia delante («Lean forwards slightly») y levantarse».
- **Explicación:** la etiqueta es `true`, pero la nota `[conservadora]` no está. La evidencia no fija el ángulo de la rodilla; el valor es conservador. R2.4 exige la nota.
- **Consecuencia potencial:** un `true` conservador sin nota incumple R2.4; el validador (si en el futuro comprueba el formato) lo rechazaría.
- **Nivel de certeza:** alta.
- **Recomendación:** añadir la nota `[conservadora]` en la forma de R2.4. Texto propuesto: «[conservadora] flexion_profunda_rodilla: los pies algo atrás; al levantarse, la rodilla puede pasar de 90°. Se cerraría con: una imagen lateral de la transición.»
- **Prueba o evidencia que permitiría confirmarlo:** comparar con la nota de `sentarse-levantarse` (base), que ya tiene una nota equivalente.
- **¿Requiere decisión humana?:** no para el formato; sí para el texto final.

---

## Resumen del borrador

- **9 ejercicios auditados por primera vez con el protocolo 1.0.**
- **Resultados propuestos:**
  - LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios: 154, 155, 156, 158, 159, 160.
  - REQUIERE CORRECCIONES: 152 (nota R2.4 y adaptación de posición), 153 (`flexion_profunda_rodilla` a `true` conservador).
  - PENDIENTE DE DECISIÓN (CN-4): 157.
- **Cambios de etiquetas propuestos:** `flexion-rodilla-pie-apoyo`, `flexion_profunda_rodilla` → `true` conservador (DS-415).
- **Notas R2.4 propuestas:** 152 (`agarre`), 157 (`mano_detras` y `ambos_brazos`), 160 (`flexion_profunda_rodilla`).
- **Adaptaciones propuestas:** 152 (posición sentada), 158 (solo hombros, no cabeza).
- **Nombres en `especifica_de` propuestos:** «prevención de caídas» (153), «rehabilitación tras un ingreso hospitalario» (155); revisar «cirugía cardiaca» (152) (DS-412).
- **Ilustraciones:** la evidencia dice que Claude corrigió las de `marcha-sitio-apoyo` y `giro-tronco-pie`; no las he visto. R7.7 queda pendiente de verificación por Claude.

FIN DEL BORRADOR