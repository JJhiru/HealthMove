# Borrador de auditoría · lote 21 (consulta C22)

> **Naturaleza del borrador.** Redactado por DeepSeek a partir de la evidencia de Claude (`evidencia-lote-21`) y del catálogo (`catalogo-lote21`). No he abierto las fuentes. No es una validación clínica. Claude debe verificar cada punto contra las fuentes antes de cerrar el informe.
>
> **Limitaciones de la verificación (comunes a los 8 ejercicios):**
> - **F3 (CSP, `elevar-puntas-pies-apoyo`):** la evidencia advierte de que el texto se obtuvo con una herramienta web que lo procesa con un modelo auxiliar y que la imagen no se ha visto. Las citas de F3 son de segunda mano; no puedo confirmar que sean literales de la fuente. La imagen es N.
> - **F2 (HSE, `elevacion-lateral-brazos-sentado`):** la evidencia dice que no se revisaron las imágenes. La altura de los brazos es N.
> - **F1 (Vivifrail):** la evidencia describe los dibujos de las páginas 51, 57 y 60. No he visto las páginas 49-53 ni 57-61 completas; me apoyo en la descripción de Claude.
> - **F4 (Parkinson's UK):** la evidencia describe los dibujos de la p. 5. No he visto el PDF.
> - **Ilustraciones de HealthMove:** solo sé lo que dice la evidencia. No he abierto `scripts/ilustraciones/*.mjs` ni `public/data/ilustraciones.json`. Cuando la evidencia dice «corregida por Claude», lo tomo como hecho de la evidencia, no como verificación propia (R7.6/R7.7).
> - **`especifica_de`:** solo propongo rellenarlo cuando la evidencia recoge que la fuente declara la población (R8.1). En los demás casos, no propongo rellenarlo.
> - **`fuente.consultado`:** la evidencia dice que las fuentes se descargaron el 2026-10-24. Propongo actualizarlo a esa fecha en los 8, salvo que Claude confirme otra cosa.

---

## 161. banda-aperturas-diagonal-sentado

### Identificación
- ID: `banda-aperturas-diagonal-sentado`
- Nombre: Abrir los brazos en diagonal con banda
- Fuente: Programa Vivifrail (Erasmus+, Universidad Pública de Navarra), «Programa de ejercicio físico multicomponente Vivifrail: guía práctica (copia de munideporte.com)», «5. Apertura de brazos en diagonal con una cinta elástica», p. 51 (F1)
- Población destinataria de la fuente (si la declara): «prevención de la fragilidad y caídas en mayores de 70 años» (D, datos comunes de F1). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en la instrucción (HealthMove dice «hacia arriba y hacia fuera» y la fuente dice «en diagonal» con un brazo arriba y otro abajo); C3 en la ilustración (ya corregida por Claude, según la evidencia).

### Evidencia de la fuente
- Ubicación exacta: F1, «5. Apertura de brazos en diagonal con una cinta elástica», p. 51 (apartado 161).
- Pasos originales relevantes, resumidos con palabras propias: en posición sentada; coger la cinta por los extremos y enrollarla para evitar lesiones; «A la altura de las rodillas, empiece a separar los brazos en diagonal realizando una extensión del codo». 1 serie de 10, descanso y otra de 10.
- Coincidencias (C1): sentado, banda, separar los brazos en diagonal, extensión del codo, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la instrucción de HealthMove dice «hacia arriba y hacia fuera» y la fuente dice «en diagonal»; el dibujo de la fuente muestra un brazo arriba y otro abajo. La ilustración de HealthMove ya se corrigió (evidencia). La instrucción sigue pendiente de aclarar hacia la fuente.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), sentada, un brazo estirado hacia arriba y fuera por encima de la cabeza, el otro hacia abajo y fuera, la banda en diagonal. D (texto), la mano de arriba pasa por encima del hombro.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con un solo brazo; HealthMove lo hace con los dos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | true | D (texto): «cinta elástica» | evidencia | TRUE | §4: incluye banda |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto y dibujo): la mano de arriba pasa por encima del hombro | evidencia | TRUE | §4: codo o mano por encima del hombro |
| mano_detras | false | D (texto y dibujo): los brazos van al frente y a los lados, no detrás | evidencia | FALSE | — |
| ambos_brazos | true | D (texto y dibujo): los dos brazos trabajan a la vez | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto): «coger la cinta por los extremos y enrollarla» | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recursos `silla` y `banda`, dosis: coherentes.
- Ilustración: la evidencia dice que Claude la corrigió (`sentado.mjs`); no la he visto. R7.6/R7.7: no puedo confirmar que ya no haya discrepancia.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia recoge que la fuente se dirige a «prevención de la fragilidad y caídas en mayores de 70 años» (D). Propuesta: «prevención de la fragilidad y caídas» (nombre breve; R8.1; ver DS-419).
- `notas_etiquetado` actual: «La fuente no dice hasta qué altura suben las manos; se marca brazo sobre el hombro por prudencia.» Es incorrecta: la fuente sí lo dice (el dibujo muestra un brazo por encima de la cabeza). Ver DS-420.

### Incidencias
- La instrucción 3 («Separa los brazos en diagonal hacia arriba y hacia fuera») no coincide con la fuente (un brazo arriba, otro abajo). Es un C3 que se resuelve como aclaración hacia la fuente (R3.1, Q5).
- La nota de `brazo_sobre_hombro` no describe el fundamento real (DS-420).

### Propuesta de cambios
- `instrucciones[2]`: «Separa los brazos en diagonal: uno sube hacia arriba y hacia fuera y el otro baja hacia la cadera contraria, estirando los codos.» (aclaración hacia la fuente; R3.1, Q5).
- `notas_etiquetado`: sustituir la nota de `brazo_sobre_hombro` por una que describa el fundamento real (el dibujo muestra un brazo por encima de la cabeza) (DS-420).
- `fuente.especifica_de`: «prevención de la fragilidad y caídas» (R8.1; ver DS-419).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos y verificada la ilustración corregida (R7.7).

---

## 162. escurrir-toalla-sentado

### Identificación
- ID: `escurrir-toalla-sentado`
- Nombre: Escurrir la toalla
- Fuente: Programa Vivifrail (Erasmus+, Universidad Pública de Navarra), «3. Ejercicios de prensión en las manos», ejercicio B, p. 51 (F1)
- Población destinataria de la fuente (si la declara): «prevención de la fragilidad y caídas en mayores de 70 años» (D, datos comunes de F1). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en la posición (la fuente no dice «sentado» y el dibujo es de pie; HealthMove lo hace sentado y no lo documenta).

### Evidencia de la fuente
- Ubicación exacta: F1, «3. Ejercicios de prensión en las manos», ejercicio B, p. 51 (apartado 162).
- Pasos originales relevantes, resumidos con palabras propias: enrollar una toalla pequeña como un tubo; cogerla por los extremos y, con las dos manos, hacer el movimiento de escurrir una toalla empapada; apretar poco a poco, tan fuerte como se pueda. Empezar por el ejercicio A (pelota) y pasar al B cuando se hagan 20 apretones fáciles seguidos. 1 serie de 10, descanso y otra de 10.
- Coincidencias (C1): toalla, escurrir con las dos manos, apretar poco a poco, dosis.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la fuente no dice «sentado»; el dibujo es de pie. HealthMove lo hace sentado y no lo documenta.
- Hechos, inferencias e incertidumbres: D (texto), escurrir la toalla con las dos manos. D (dibujo), la persona está de pie. N, la posición que permite la fuente.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo sentado; la posición de HealthMove es una elección que no consta en la fuente.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: la resistencia la pone la propia persona | evidencia | FALSE | §4: no hay peso ni resistencia añadida |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): las manos al frente, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): las manos al frente | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): «con las dos manos» | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | true | D (texto): «cogerla por los extremos» y apretar | evidencia | TRUE | §4: cerrar la mano, aunque sea en parte |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recursos `silla` y `toalla`, dosis: coherentes.
- Ilustración: la evidencia dice que HealthMove lo dibuja sentado con las manos al frente con la toalla. Coincide con la instrucción de HealthMove, no con el dibujo de la fuente (de pie). R7.6: la ilustración de HealthMove no introduce un movimiento distinto; solo la posición. No propongo cambiarla.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia recoge que la fuente se dirige a «prevención de la fragilidad y caídas en mayores de 70 años» (D). Propuesta: «prevención de la fragilidad y caídas» (R8.1; ver DS-419).
- `notas_etiquetado` actual: «La resistencia la pone la propia persona: no se marca carga externa.» Es correcta como nota informativa; no es una nota conservadora. No propongo cambiarla.

### Incidencias
- La posición sentada no consta en la fuente; es una adaptación no documentada (C3). Ver DS-421.

### Propuesta de cambios
- `adaptaciones`: añadir «La fuente lo describe de pie; aquí se hace sentado.» (C3 documentado; R3.1, Q5).
- `fuente.especifica_de`: «prevención de la fragilidad y caídas» (R8.1; ver DS-419).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 163. estiramiento-hombro-cruzado

### Identificación
- ID: `estiramiento-hombro-cruzado`
- Nombre: Estirar la parte de atrás del hombro
- Fuente: Programa Vivifrail (Erasmus+, Universidad Pública de Navarra), «Flexibilidad, 2. Estiramiento de la parte posterior del hombro», p. 60 (F1)
- Población destinataria de la fuente (si la declara): «prevención de la fragilidad y caídas en mayores de 70 años» (D, datos comunes de F1). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1) en la versión sentada.

### Evidencia de la fuente
- Ubicación exacta: F1, «Flexibilidad, 2. Estiramiento de la parte posterior del hombro», p. 60 (apartado 163).
- Pasos originales relevantes, resumidos con palabras propias: poner la mano en el hombro contrario con el codo pegado al pecho; con la otra mano, empujar el codo hacia la mano contraria hasta notar tensión en la parte de atrás del hombro; 10-12 s; pausa de 5 s; «De pie o sentado»; 2-3 veces y después el otro hombro.
- Coincidencias (C1): mano en el hombro contrario, codo pegado al pecho, empujar el codo con la otra mano, 10-12 s, 2-3 veces por lado, «De pie o sentado».
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna. La fuente permite las dos posiciones; HealthMove tiene dos entradas (P23).
- Hechos, inferencias e incertidumbres: D (texto y dibujos), una persona de pie y otra en silla de ruedas haciendo el estiramiento. D (texto), «De pie o sentado».
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con un solo brazo; HealthMove lo hace con los dos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): la mano en el hombro contrario, por debajo del hombro; el codo pegado al pecho | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): las manos al frente, en el hombro y en el codo | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): una mano en el hombro y la otra empuja el codo | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto y dibujo): la mano apoyada en el hombro y en el codo, sin prensión | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `sentado`, recurso `silla`, dosis: coherentes.
- Ilustración: la evidencia dice que HealthMove lo dibuja sentado, una mano en el hombro contrario y la otra en el codo. Coincide con el texto.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia recoge que la fuente se dirige a «prevención de la fragilidad y caídas en mayores de 70 años» (D). Propuesta: «prevención de la fragilidad y caídas» (R8.1; ver DS-419).
- `notas_etiquetado` actual: «Posición: el 2026-10-22 se separó en dos entradas (C2, P23): esta, sentada, y estiramiento-hombro-cruzado-pie, de pie. La fuente indica «De pie o sentado» (evidencia-fuentes-q1-q2.md §3).» Es correcta como nota informativa; no es una nota conservadora. No propongo cambiarla.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.especifica_de`: «prevención de la fragilidad y caídas» (R8.1; ver DS-419).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 164. estiramiento-hombro-cruzado-pie

### Identificación
- ID: `estiramiento-hombro-cruzado-pie`
- Nombre: Estirar la parte de atrás del hombro de pie
- Fuente: Programa Vivifrail (Erasmus+, Universidad Pública de Navarra), «Flexibilidad, 2. Estiramiento de la parte posterior del hombro», p. 60 (F1)
- Población destinataria de la fuente (si la declara): «prevención de la fragilidad y caídas en mayores de 70 años» (D, datos comunes de F1). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: fiel (C1) en la versión de pie.
- Variante de: `estiramiento-hombro-cruzado` (contexto, auditado en 163).

### Evidencia de la fuente
- Ubicación exacta: F1, «Flexibilidad, 2. Estiramiento de la parte posterior del hombro», p. 60 (apartado 164).
- Pasos originales relevantes, resumidos con palabras propias: los mismos que en 163; la fuente dice «De pie o sentado».
- Coincidencias (C1): de pie, mano en el hombro contrario, codo pegado al pecho, empujar el codo con la otra mano, 10-12 s, 2-3 veces por lado.
- Diferencias (C3) y adaptaciones documentadas (C2): ninguna. La fuente permite las dos posiciones.
- Hechos, inferencias e incertidumbres: D (texto y dibujos), una persona de pie y otra en silla de ruedas haciendo el estiramiento. D (texto), «De pie o sentado».
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con un solo brazo; HealthMove lo hace con los dos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | true | D (texto y dibujo): de pie, con las dos manos ocupadas en el estiramiento | evidencia | TRUE | §4: de pie, exige no sujetarse a nada; las dos manos están ocupadas |
| una_pierna | false | D (texto y dibujo): los dos pies apoyados | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): la mano en el hombro contrario, por debajo del hombro; el codo pegado al pecho | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): las manos al frente, en el hombro y en el codo | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): una mano en el hombro y la otra empuja el codo | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto y dibujo): la mano apoyada en el hombro y en el codo, sin prensión | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y dibujo): de pie con las piernas rectas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: de pie con los pies apoyados | evidencia | FALSE | — |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calma`, posición `de_pie`, recursos: vacío, coherente (no necesita silla ni pared).
- Ilustración: la evidencia dice que HealthMove lo dibuja de pie, una mano en el hombro contrario y la otra en el codo. Coincide con el texto.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia recoge que la fuente se dirige a «prevención de la fragilidad y caídas en mayores de 70 años» (D). Propuesta: «prevención de la fragilidad y caídas» (R8.1; ver DS-419).
- `variante_de`: `estiramiento-hombro-cruzado` (contexto; auditado en 163).
- `notas_etiquetado` actual: «equilibrio_sin_apoyo: con las dos manos ocupadas no hay forma de sujetarse a nada (especificación §7, regla 4; C2, P23). Versión de pie separada de estiramiento-hombro-cruzado el 2026-10-22. La fuente indica «De pie o sentado» (evidencia-fuentes-q1-q2.md §3).» Es correcta como nota informativa; no es una nota conservadora. No propongo cambiarla.

### Incidencias
- Ninguna de etiquetas.

### Propuesta de cambios
- `fuente.especifica_de`: «prevención de la fragilidad y caídas» (R8.1; ver DS-419).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 165. puntillas-talones-apoyo

### Identificación
- ID: `puntillas-talones-apoyo`
- Nombre: Aguantar de puntillas y de talones
- Fuente: Programa Vivifrail (Erasmus+, Universidad Pública de Navarra), «Equilibrio y marcha, 3. Equilibrio punta-talón», p. 57 (F1)
- Población destinataria de la fuente (si la declara): «prevención de la fragilidad y caídas en mayores de 70 años» (D, datos comunes de F1). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en el apoyo (la fuente lo hace opcional y no dice cuántas manos; HealthMove lo hace siempre con las dos manos).

### Evidencia de la fuente
- Ubicación exacta: F1, «Equilibrio y marcha, 3. Equilibrio punta-talón», p. 57 (apartado 165).
- Pasos originales relevantes, resumidos con palabras propias: de pie; mantener el equilibrio solo sobre las puntas de los pies unos segundos y después solo sobre los talones; «Si se siente más seguro, sitúese de pie apoyado en una mesa o barandilla». Contar hasta 10 de puntillas y hasta 10 de talones; descanso de 1 a 3 minutos; repetir la serie.
- Coincidencias (C1): de pie, puntillas y talones, contar hasta 10, repetir la serie.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la fuente hace el apoyo opcional y no dice cuántas manos; HealthMove lo hace siempre con las dos manos.
- Hechos, inferencias e incertidumbres: D (texto y dibujo), de pie sin apoyo, de puntillas y de talones. D (texto), el apoyo es opcional.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con una sola mano; HealthMove lo hace con las dos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto): «apoyado en una mesa o barandilla» | evidencia | FALSE | §4: se sujeta |
| una_pierna | false | D (texto y dibujo): los dos pies apoyados | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): las manos en la mesa o barandilla, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): las manos al frente, en la mesa o barandilla | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): «apoyado en una mesa o barandilla»; HealthMove usa las dos manos | conservadora | TRUE | Q1 (P9): apoyo bilateral; la fuente no dice cuántas manos, `true` conservador con nota |
| agarre | true | D (texto): «apoyado en una mesa o barandilla» | conservadora | TRUE | Q2 (P10): apoyo sin prensión visible, `true` conservador con nota |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto y dibujo): de pie con las piernas rectas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | true | D (texto): «solo sobre las puntas de los pies» y «solo sobre los talones» | evidencia | TRUE | §4: soportar el peso sobre las puntas o los talones |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `de_pie`, recurso `silla`, dosis: coherentes. La fuente usa una mesa o barandilla; HealthMove usa una silla. Es una adaptación de recurso, no de movimiento; no cambia exigencias.
- Ilustración: la evidencia dice que HealthMove lo dibuja de pie con la silla delante. Coincide con la instrucción de HealthMove.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia recoge que la fuente se dirige a «prevención de la fragilidad y caídas en mayores de 70 años» (D). Propuesta: «prevención de la fragilidad y caídas» (R8.1; ver DS-419).
- `notas_etiquetado` actual: «[conservadora] ambos_brazos: apoyo bilateral (Q1). Se cerraría con: fuente de que basta una mano.» Tiene la forma de R2.4. Falta la nota de `agarre` (Q2). Ver DS-422.

### Incidencias
- Falta la nota `[conservadora]` de `agarre` (Q2) (DS-422).

### Propuesta de cambios
- `notas_etiquetado`: añadir la nota `[conservadora]` de `agarre` en la forma de R2.4 (DS-422).
- `fuente.especifica_de`: «prevención de la fragilidad y caídas» (R8.1; ver DS-419).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 166. elevacion-lateral-brazos-sentado

### Identificación
- ID: `elevacion-lateral-brazos-sentado`
- Nombre: Subir los brazos por los lados
- Fuente: HSE (Irlanda), «Sitting exercises», «Arm raises» (F2)
- Población destinataria de la fuente (si la declara): no consta en la evidencia. `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en la nota de `ambos_brazos` (la nota dice «Puede hacerse con un solo brazo» y la fuente pide los dos brazos).

### Evidencia de la fuente
- Ubicación exacta: F2, «Arm raises» (apartado 166).
- Pasos originales relevantes, resumidos con palabras propias: sentado erguido, los brazos a los lados y las palmas hacia delante, hombros bajos y brazos rectos; al soltar el aire, «raise both arms out to the side and up as far as is comfortable»; al tomar aire, bajar; 5 veces.
- Coincidencias (C1): sentado, brazos a los lados, subir por los lados, 5 veces, respiración.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, la nota de `ambos_brazos` dice «Puede hacerse con un solo brazo»; la fuente pide los dos brazos.
- Hechos, inferencias e incertidumbres: D (texto), los dos brazos a la vez; «as far as is comfortable» no fija la altura. N (imagen), la evidencia no revisó las imágenes.
- Limitaciones de la verificación: la evidencia no revisó las imágenes de F2; la altura de los brazos es N.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D: sentado | evidencia | FALSE | — |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | true | D (texto): «raise both arms out to the side and up as far as is comfortable»; la altura no se fija | conservadora | TRUE | R2.1 / R7.8: ante la duda de la altura, `true` conservador con nota (ver DS-423) |
| mano_detras | false | D (texto): los brazos suben por los lados, no detrás | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): «raise both arms» | evidencia | TRUE | Q1 (P9): uso simultáneo de los dos brazos |
| agarre | false | D (texto): las manos abiertas, sin prensión | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | false | D: sentado; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D: sentado, sin que conste que la rodilla pase de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: sentado, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto): sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `calentamiento`, posición `sentado`, recurso `silla`, dosis: coherentes.
- Ilustración: la evidencia dice que HealthMove lo dibuja sentado, los brazos suben por los lados. Coincide con el texto.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia no recoge que la fuente declare una población concreta; no propongo rellenarlo (R8.1).
- `notas_etiquetado` actual: «Puede hacerse con un solo brazo.» Es incorrecta: la fuente pide los dos brazos. Ver DS-424.

### Incidencias
- La nota de `ambos_brazos` contradice la fuente (DS-424).
- `brazo_sobre_hombro: true` sin nota `[conservadora]` (DS-423).

### Propuesta de cambios
- `notas_etiquetado`: sustituir la nota de `ambos_brazos` por una que describa el fundamento real (la fuente pide los dos brazos) (DS-424).
- `notas_etiquetado`: añadir la nota `[conservadora]` de `brazo_sobre_hombro` en la forma de R2.4 (DS-423).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## 167. elevar-puntas-pies-apoyo

### Identificación
- ID: `elevar-puntas-pies-apoyo`
- Nombre: Levantar las puntas de los pies con apoyo
- Fuente: Chartered Society of Physiotherapy, «Helping older people stay active at home», «Toe raises» (F3)
- Población destinataria de la fuente (si la declara): «designed especially for older people» (D, según la evidencia). `especifica_de` actual: vacío.
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C3 en la instrucción («sujétate con las dos manos» y «con las rodillas flojas» no están en la fuente); C3 en la nota (cita fuentes de Otago, no esta).

### Evidencia de la fuente
- Ubicación exacta: F3, «Toe raises» (apartado 167). **Texto procesado por la herramienta web de Claude; no verificado literalmente.**
- Pasos originales relevantes, resumidos con palabras propias: «Stand tall holding the same support» (el del ejercicio anterior: «the back of a sturdy kitchen type chair or kitchen sink»); «raise your toes – taking your weight on your heels»; «Don't stick your bottom out»; «Hold for three seconds, then lower with control»; «Repeat 10 times». No dice cuántas manos, ni nada de las rodillas, ni una progresión de manos.
- Coincidencias (C1): de pie con apoyo, levantar las puntas de los pies, peso sobre los talones, mantener 3 segundos, 10 veces.
- Diferencias (C3) y adaptaciones documentadas (C2): C3, «sujétate con las dos manos» y «con las rodillas flojas» no están en la fuente. La nota del catálogo cita las fuentes de Otago para la progresión de manos, no esta.
- Hechos, inferencias e incertidumbres: D (texto, según la herramienta), de pie con apoyo, levantar las puntas, peso sobre los talones, 3 segundos, 10 veces. N (imagen), no vista.
- Limitaciones de la verificación: **el texto de F3 es de segunda mano** (herramienta web que lo procesa con un modelo auxiliar). No puedo confirmar que las citas sean literales. La imagen es N. La población «designed especially for older people» es D según la evidencia, pero también de segunda mano.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D (texto): «holding the same support» | evidencia | FALSE | §4: se sujeta |
| una_pierna | false | D (texto): los dos pies apoyados | evidencia | FALSE | — |
| sentarse_levantarse | false | D: de pie | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto): las manos en el respaldo, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto): las manos al frente, en el respaldo | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): «holding the same support»; HealthMove usa las dos manos | conservadora | TRUE | Q1 (P9): apoyo bilateral; la fuente no dice cuántas manos, `true` conservador con nota |
| agarre | true | D (texto): «holding the same support» | conservadora | TRUE | Q2 (P10): apoyo sin prensión visible, `true` conservador con nota |
| peso_en_manos | false | D: de pie; las manos no cargan el peso corporal | evidencia | FALSE | R7.3 |
| flexion_profunda_rodilla | false | D (texto): de pie con las piernas rectas; la fuente no menciona las rodillas | evidencia | FALSE | — |
| flexion_amplia_cadera | false | D: de pie, sin que el muslo se acerque al tronco | evidencia | FALSE | — |
| puntillas_talones | true | D (texto): «taking your weight on your heels» | evidencia | TRUE | §4: soportar el peso sobre los talones |
| inclinacion_tronco | false | D (texto): «Don't stick your bottom out»; sin inclinación | evidencia | FALSE | — |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `de_pie`, recurso `silla`, dosis: coherentes. La fuente usa una silla de cocina o el fregadero; HealthMove usa una silla. Es una adaptación de recurso, no de movimiento; no cambia exigencias.
- Ilustración: la evidencia dice que HealthMove lo dibuja de pie con la silla delante, las puntas suben. Coincide con la instrucción de HealthMove.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: vacío. La evidencia recoge que la fuente se dirige a «designed especially for older people» (D, según la herramienta). Propuesta: «personas mayores» (nombre breve; R8.1; ver DS-419). **Requiere verificación en la fuente original** (la cita es de segunda mano).
- `notas_etiquetado` actual: «Las fuentes de Otago proponen pasar de dos manos a una y a ninguna; aquí se mantiene el apoyo. [conservadora] ambos_brazos: apoyo bilateral (Q1). Se cerraría con: fuente de que basta una mano.» La primera frase cita fuentes que no son esta (DS-425). La nota de `agarre` (Q2) falta (DS-422).

### Incidencias
- La nota cita fuentes de Otago, no esta (DS-425).
- Falta la nota `[conservadora]` de `agarre` (Q2) (DS-422).
- «Sujétate con las dos manos» y «con las rodillas flojas» no están en la fuente (C3). Ver DS-426.

### Propuesta de cambios
- `instrucciones[0]`: «Ponte detrás de una silla firme o junto a una encimera y sujétate.» (aclaración hacia la fuente; R3.1, Q5; ver DS-426).
- `instrucciones[1]`: quitar «con las rodillas flojas» (no está en la fuente; ver DS-426).
- `notas_etiquetado`: sustituir la primera frase por una que no atribuya a esta fuente la progresión de Otago (DS-425).
- `notas_etiquetado`: añadir la nota `[conservadora]` de `agarre` en la forma de R2.4 (DS-422).
- `fuente.especifica_de`: «personas mayores» (R8.1; ver DS-419; requiere verificación en la fuente original).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
PENDIENTE_DE_FUENTE. El texto de F3 es de segunda mano (herramienta web) y la imagen no se ha visto. Hace falta abrir la fuente original (o descargar el PDF, si existe) para confirmar las citas y la población antes de proponer la aprobación documental.

---

## 168. elevar-piernas-borde-silla

### Identificación
- ID: `elevar-piernas-borde-silla`
- Nombre: Subir las dos piernas desde el borde
- Fuente: Parkinson's UK, «How to stay active and exercise at home» (copia de Edinburgh Parkinson's), «Leg raises», p. 5 (F4)
- Población destinataria de la fuente (si la declara): «párkinson» (D, según la evidencia). `especifica_de` actual: «párkinson».
- Estado inicial: `borrador`; sin auditar
- Resultado documental: C1 en el movimiento; C2 en el recurso (la fuente usa un sofá; HealthMove usa una silla).

### Evidencia de la fuente
- Ubicación exacta: F4, «Leg raises», p. 5 (apartado 168).
- Pasos originales relevantes, resumidos con palabras propias: en el apartado «Sofa exercises» (cada ejercicio 30 segundos, descanso de un minuto entre ejercicios): sentado hacia la parte delantera del sofá; «Place your hands either side of you», los pies juntos en el suelo; levantar las piernas desde la rodilla todo lo posible, hasta que queden paralelas a la cadera; con una pierna si es más fácil; bajar hasta 5 cm del suelo y repetir; más fácil, dejando que los pies toquen el suelo.
- Coincidencias (C1): sentado, manos a los lados, levantar las piernas desde la rodilla, 30 segundos, opción de una pierna, opción de tocar el suelo.
- Diferencias (C3) y adaptaciones documentadas (C2): C2, la fuente usa un sofá; HealthMove usa una silla. Ya está documentado en `adaptaciones`.
- Hechos, inferencias e incertidumbres: D (texto y dibujos), sentado en el borde de un sofá, las manos apoyadas en el asiento a los lados de la cadera, el tronco algo inclinado hacia atrás; las piernas pasan de abajo a estiradas en horizontal; los muslos se separan poco del asiento.
- Limitaciones de la verificación: la evidencia no dice si la fuente permite hacerlo con una sola mano; HealthMove lo hace con las dos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo |
|---|---|---|---|---|---|
| equilibrio_sin_apoyo | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| una_pierna | false | D (texto): «con una pierna si es más fácil»; el peso no cae sobre un pie | evidencia | FALSE | §4: el peso no cae sobre un solo pie |
| sentarse_levantarse | false | D: sentado | evidencia | FALSE | — |
| impacto | false | D: movimiento lento | evidencia | FALSE | — |
| carga_externa | false | D: sin peso | evidencia | FALSE | — |
| esfuerzo_cardio | false | D: movimiento local | evidencia | FALSE | — |
| brazo_sobre_hombro | false | D (texto y dibujo): las manos a los lados de la cadera, por debajo del hombro | evidencia | FALSE | — |
| mano_detras | false | D (texto y dibujo): las manos a los lados, no detrás | evidencia | FALSE | — |
| ambos_brazos | true | D (texto): «Place your hands either side of you» | conservadora | TRUE | Q1 (P9): apoyo bilateral; `true` conservador con nota |
| agarre | false | D (texto y dibujo): las manos apoyadas en el asiento, sin prensión | evidencia | FALSE | R7.4: el contacto no demuestra agarre; aquí no hay objeto que sujetar |
| peso_en_manos | true | D (texto y dibujo): las manos apoyadas en el asiento, el tronco algo inclinado hacia atrás | conservadora | TRUE | R7.3 / R2.1: las manos pueden soportar parte del peso; `true` conservador con nota |
| flexion_profunda_rodilla | false | D (texto y dibujo): sentado, las piernas se estiran; la rodilla no pasa de 90° | evidencia | FALSE | — |
| flexion_amplia_cadera | true | D (texto y dibujo): «hasta que queden paralelas a la cadera»; el muslo se acerca al tronco | evidencia | TRUE | §4: muslo más cerca del tronco que al estar sentado |
| puntillas_talones | false | D: sentado | evidencia | FALSE | Solo se define de pie |
| inclinacion_tronco | false | D (texto y dibujo): el tronco algo inclinado hacia atrás, sin que conste que pase de una inclinación leve | conservadora | TRUE | R2.1 / R7.8: ante la duda de la inclinación, `true` conservador con nota (ver DS-427) |
| rotacion_tronco | false | D: sin giro | evidencia | FALSE | — |

### Otros campos
- Fase `principal`, posición `sentado`, recurso `silla`, dosis: coherentes. La fuente usa un sofá; HealthMove usa una silla. Ya está documentado en `adaptaciones`.
- Ilustración: la evidencia dice que HealthMove lo dibuja sentado en la silla con las manos a los lados, las piernas suben. Coincide con el texto.
- Exclusiones del catálogo v1: ninguna.
- `fuente.especifica_de`: «párkinson». La evidencia recoge que la fuente se dirige a párkinson (D). Coincide con R8.1.
- `notas_etiquetado` actual: «Las manos apoyadas pueden soportar parte del peso: se marca peso en manos por prudencia. [conservadora] ambos_brazos: apoyo bilateral (Q1). Se cerraría con: fuente de que basta una mano.» La nota de `peso_en_manos` no tiene la forma de R2.4. Falta la nota de `inclinacion_tronco` (DS-427).

### Incidencias
- La nota de `peso_en_manos` no tiene la forma de R2.4.
- `inclinacion_tronco: true` sin nota `[conservadora]` (DS-427).

### Propuesta de cambios
- `notas_etiquetado`: la nota de `peso_en_manos` pasa a la forma de R2.4.
- `notas_etiquetado`: añadir la nota `[conservadora]` de `inclinacion_tronco` en la forma de R2.4 (DS-427).
- `fuente.consultado`: 2026-10-24.

### Decisión pendiente del desarrollador
LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos.

---

## Hallazgos DS

### DS-419 · `especifica_de` en los 5 ejercicios de Vivifrail (161-165)
- **Ubicación exacta:** `catalogo-lote21`, ejercicios `banda-aperturas-diagonal-sentado`, `escurrir-toalla-sentado`, `estiramiento-hombro-cruzado`, `estiramiento-hombro-cruzado-pie` y `puntillas-talones-apoyo`; `evidencia-lote-21`, «F1, datos comunes (D)».
- **Evidencia:** «prevención de la fragilidad y caídas en mayores de 70 años».
- **Explicación:** la fuente declara la población (D). R8.1 permite rellenar `especifica_de` con un nombre breve. El nombre propuesto, «prevención de la fragilidad y caídas», es coherente con los existentes («riesgo de caídas», «rehabilitación tras un ingreso hospitalario»). No es una decisión mía: es una propuesta para que el desarrollador la apruebe (P29: los nombres nuevos de `especifica_de` no se aplican hasta la revisión final).
- **Consecuencia potencial:** sin `especifica_de`, la ficha no muestra la aclaración de procedencia (Q8(b), P17) en estos 5 ejercicios.
- **Nivel de certeza:** alta (la población está en la evidencia).
- **Recomendación:** proponer «prevención de la fragilidad y caídas» para los 5. En `elevar-puntas-pies-apoyo` (167), la población es «designed especially for older people» (D, según la herramienta web); propongo «personas mayores», pero **requiere verificación en la fuente original** (ver DS-425).
- **Prueba o evidencia que permitiría confirmarlo:** abrir F1 y F3 y comprobar la frase de población.
- **¿Requiere decisión humana?:** sí. Aprobar el nombre nuevo de `especifica_de` (P29).

### DS-420 · Nota de `brazo_sobre_hombro` en `banda-aperturas-diagonal-sentado` (161)
- **Ubicación exacta:** `catalogo-lote21`, `banda-aperturas-diagonal-sentado`, `notas_etiquetado`.
- **Evidencia:** la nota dice «La fuente no dice hasta qué altura suben las manos; se marca brazo sobre el hombro por prudencia.» La evidencia de Claude dice: «Dibujo (D, p. 51): sentada, un brazo estirado hacia arriba y fuera, por encima de la cabeza».
- **Explicación:** la nota describe un fundamento que la evidencia contradice. La fuente sí lo dice (el dibujo). La nota no tiene la forma de R2.4 y no es correcta.
- **Consecuencia potencial:** la nota induce a error sobre el fundamento de la etiqueta; si se revisa el ejercicio, se puede pensar que el `true` es conservador cuando es D.
- **Nivel de certeza:** alta (la evidencia es explícita).
- **Recomendación:** sustituir la nota por una que describa el fundamento real (el dibujo muestra un brazo por encima de la cabeza).
- **Prueba o evidencia que permitiría confirmarlo:** abrir F1, p. 51, y comprobar el dibujo.
- **¿Requiere decisión humana?:** no (es una corrección de nota, no de etiqueta).

### DS-421 · Posición sentada no documentada en `escurrir-toalla-sentado` (162)
- **Ubicación exacta:** `catalogo-lote21`, `escurrir-toalla-sentado`, `posiciones` y `adaptaciones`; `evidencia-lote-21`, apartado 162.
- **Evidencia:** «el título del ejercicio no dice «posición sentada» (a diferencia de los ejercicios 1, 2, 4 y 5 de la misma página); el dibujo es de pie. HealthMove lo hace sentado y no lo documenta.»
- **Explicación:** la posición sentada es una elección de HealthMove que no consta en la fuente. Es un C3 que se resuelve documentándolo como adaptación (R3.1, Q5). La fuente no dice que se haga de pie; solo el dibujo lo muestra. La adaptación es defendible, pero debe documentarse.
- **Consecuencia potencial:** el usuario ve «Cambios respecto a la fuente» vacío y no sabe que la posición es una elección de HealthMove.
- **Nivel de certeza:** alta (la evidencia es explícita).
- **Recomendación:** añadir a `adaptaciones`: «La fuente lo describe de pie; aquí se hace sentado.» (R3.1, Q5).
- **Prueba o evidencia que permitiría confirmarlo:** abrir F1, p. 51, y comprobar el texto y el dibujo.
- **¿Requiere decisión humana?:** sí. Aprobar la adaptación (Q5, una a una; P29).

### DS-422 · Falta la nota `[conservadora]` de `agarre` (Q2) en 165 y 167
- **Ubicación exacta:** `catalogo-lote21`, `puntillas-talones-apoyo` y `elevar-puntas-pies-apoyo`, `notas_etiquetado`.
- **Evidencia:** en 165, la nota actual solo cubre `ambos_brazos`; en 167, la nota cubre `ambos_brazos` y cita fuentes de Otago. En los dos, `agarre: true` con apoyo sin prensión visible (Q2, P10).
- **Explicación:** Q2 (P10) pide `agarre: true` conservador con su nota `[conservadora]` (R2.4). En los dos ejercicios falta la nota de `agarre`.
- **Consecuencia potencial:** la nota no explica por qué `agarre` está en `true`; si se revisa, se puede pensar que es un agarre observado.
- **Nivel de certeza:** alta (la nota falta en el catálogo).
- **Recomendación:** añadir la nota `[conservadora]` de `agarre` en la forma de R2.4 en los dos.
- **Prueba o evidencia que permitiría confirmarlo:** leer `notas_etiquetado` en el catálogo.
- **¿Requiere decisión humana?:** no (es una corrección de nota).

### DS-423 · `brazo_sobre_hombro: true` sin nota `[conservadora]` en `elevacion-lateral-brazos-sentado` (166)
- **Ubicación exacta:** `catalogo-lote21`, `elevacion-lateral-brazos-sentado`, `notas_etiquetado`.
- **Evidencia:** la fuente dice «raise both arms out to the side and up as far as is comfortable»; la altura no se fija. La nota actual solo dice «Puede hacerse con un solo brazo.»
- **Explicación:** el `true` de `brazo_sobre_hombro` se apoya en la duda de la altura (R2.1, R7.8). Debe llevar la nota `[conservadora]` (R2.4). No la lleva.
- **Consecuencia potencial:** la nota no explica el fundamento; si se revisa, se puede pensar que la altura está fijada.
- **Nivel de certeza:** alta (la nota falta).
- **Recomendación:** añadir la nota `[conservadora]` de `brazo_sobre_hombro` en la forma de R2.4.
- **Prueba o evidencia que permitiría confirmarlo:** leer `notas_etiquetado` y la fuente.
- **¿Requiere decisión humana?:** no (es una corrección de nota).

### DS-424 · Nota de `ambos_brazos` incorrecta en `elevacion-lateral-brazos-sentado` (166)
- **Ubicación exacta:** `catalogo-lote21`, `elevacion-lateral-brazos-sentado`, `notas_etiquetado`.
- **Evidencia:** la nota dice «Puede hacerse con un solo brazo.» La evidencia de Claude dice: «la fuente no lo dice; pide los dos brazos».
- **Explicación:** la nota contradice la fuente. La fuente pide los dos brazos («raise both arms»). La nota no tiene la forma de R2.4 y no es correcta.
- **Consecuencia potencial:** la nota induce a error sobre el fundamento de la etiqueta; si se revisa, se puede pensar que el `true` es conservador cuando es D.
- **Nivel de certeza:** alta (la evidencia es explícita).
- **Recomendación:** sustituir la nota por una que describa el fundamento real (la fuente pide los dos brazos).
- **Prueba o evidencia que permitiría confirmarlo:** abrir F2 y comprobar el texto.
- **¿Requiere decisión humana?:** no (es una corrección de nota).

### DS-425 · Nota de `elevar-puntas-pies-apoyo` (167) cita fuentes que no son esta; texto de F3 de segunda mano
- **Ubicación exacta:** `catalogo-lote21`, `elevar-puntas-pies-apoyo`, `notas_etiquetado`; `evidencia-lote-21`, apartado 167 y cabecera de F3.
- **Evidencia:** la nota dice «Las fuentes de Otago proponen pasar de dos manos a una y a ninguna; aquí se mantiene el apoyo.» La evidencia dice: «La nota del catálogo cita las fuentes de Otago para la progresión de manos, no esta.» Y en la cabecera: «la página del CSP devolvió 403 al script… se leyó con la herramienta de lectura web de Claude Code, que pasa el texto por un modelo auxiliar».
- **Explicación:** la nota atribuye a esta fuente una progresión de manos que no está en ella. Además, el texto de F3 es de segunda mano: no puedo confirmar que las citas sean literales. La imagen no se ha visto.
- **Consecuencia potencial:** la nota induce a error sobre el fundamento; la auditoría de este ejercicio no se puede cerrar con la evidencia actual.
- **Nivel de certeza:** alta (la nota y la cabecera son explícitas).
- **Recomendación:** sustituir la primera frase de la nota por una que no atribuya a esta fuente la progresión de Otago. Abrir la fuente original (o descargar el PDF, si existe) antes de proponer la aprobación documental.
- **Prueba o evidencia que permitiría confirmarlo:** abrir F3 en el navegador y comprobar el texto y la imagen.
- **¿Requiere decisión humana?:** sí. Decidir si se abre la fuente original o se deja el ejercicio en PENDIENTE_DE_FUENTE.

### DS-426 · «Sujétate con las dos manos» y «con las rodillas flojas» no están en la fuente (167)
- **Ubicación exacta:** `catalogo-lote21`, `elevar-puntas-pies-apoyo`, `instrucciones[0]` e `instrucciones[1]`; `evidencia-lote-21`, apartado 167.
- **Evidencia:** la evidencia dice: «No dice cuántas manos, ni nada de las rodillas, ni una progresión de manos.» Y: ««sujétate con las dos manos» y «con las rodillas flojas» no están en la fuente.»
- **Explicación:** las dos frases son añadidos de HealthMove que no constan en la fuente. La primera es una adaptación (concreta el número de manos); la segunda es una instrucción nueva. R3.1 (Q5) pide que la ejecución de HealthMove sea una de las que permite la fuente. «Con las rodillas flojas» no está en la fuente y no es una aclaración: es una instrucción nueva.
- **Consecuencia potencial:** la instrucción de HealthMove no es una de las que permite la fuente; el ejercicio no se puede aprobar documentalmente sin resolverlo.
- **Nivel de certeza:** media (el texto de F3 es de segunda mano; la ausencia de las frases se apoya en la herramienta web, no en la fuente original).
- **Recomendación:** quitar «con las rodillas flojas» (no está en la fuente). En «sujétate con las dos manos», proponer «sujétate» (sin concretar el número de manos) como aclaración hacia la fuente, o documentarlo como adaptación (Q5, una a una). **Requiere verificación en la fuente original** antes de decidir.
- **Prueba o evidencia que permitiría confirmarlo:** abrir F3 en el navegador y comprobar el texto.
- **¿Requiere decisión humana?:** sí. Aprobar la aclaración o la adaptación (Q5, una a una; P29).

### DS-427 · `inclinacion_tronco: true` sin nota `[conservadora]` en `elev