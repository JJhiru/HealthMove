# Auditoría del catálogo — Lote 1

- Fecha: 2026-10-14
- Auditor: Claude, con la skill `auditar-catalogo-ejercicios`. Es una auditoría documental, no una validación clínica.
- Catálogo: v0.3.0 (`public/data/catalogo.json`). No se ha modificado nada.
- Definiciones usadas: §4 (16 exigencias) y §7 (reglas del catálogo, «ante la duda, se marca») de `docs/especificacion-v1.md`.

Fuentes abiertas en este lote:

- **NHS, «Sitting exercises»** (https://www.nhs.uk/live-well/exercise/strength-and-flexibility-exercises/sitting-exercises/).
  - Se descargó la página completa el 2026-10-14. Indica «Page last reviewed: 18 January 2024».
  - Licencia verificada en https://www.nhs.uk/our-policies/terms-and-conditions/, apartado 3: el contenido de nhs.uk se publica bajo la Open Government Licence, salvo indicación en contrario.
  - No se han revisado las ilustraciones de la página; solo su texto.
- **Specialist Mobility Centre (Leicester), «Seated Exercises – Information for Patients»** (PDF de 5 páginas en csp.org.uk, referencia impresa «936957 iss1 11/15»).
  - Texto extraído con pdftotext.
  - El PDF no contiene ningún aviso de licencia ni de copyright: licencia no identificada.
  - Las ilustraciones del PDF no se han revisado.

---

## 1. estiramiento-pecho-sentado

### Identificación
- ID: `estiramiento-pecho-sentado`
- Nombre: Estiramiento de pecho
- Fuente: NHS, «Sitting exercises», ejercicio «Chest stretch»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA en pasos y dosis. Hay una interpretación sin documentar en `notas_etiquetado`.

### Evidencia de la fuente
- **Ubicación exacta:** página «Sitting exercises», primer ejercicio, «Chest stretch», pasos A y B.
- **Pasos originales, con palabras propias:**
  1. Sentarse erguido, separado del respaldo.
  2. Llevar los hombros atrás y abajo.
  3. Extender los brazos a los lados.
  4. Empujar el pecho hacia delante y arriba hasta notar el estiramiento.
  5. Mantener de 5 a 10 s y repetir 5 veces.
- **Coincidencias:** posición inicial, secuencia, dosis y finalidad.
- **Diferencias:** ninguna en el texto. La nota interna dice que los brazos van «a la altura del hombro, no por encima», pero la fuente no fija la altura de los brazos.
- **Adaptaciones que deben documentarse:** ninguna, salvo que se decida fijar la altura de los brazos (ver propuesta).
- **Limitaciones de la verificación:** no se ha visto la ilustración de la fuente, que es la que podría aclarar la altura de los brazos.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Sentado | FALSE | No es de pie |
| una_pierna | false | Sentado, sin carga en un pie | FALSE | — |
| sentarse_levantarse | false | No hay transición | FALSE | — |
| impacto | false | Estático | FALSE | — |
| carga_externa | false | Sin material | FALSE | — |
| esfuerzo_cardio | false | Estiramiento suave | FALSE | — |
| brazo_sobre_hombro | false | «Extend your arms out to the side», sin altura indicada | REQUIERE_ACLARACION (TRUE si no se aclara) | Si los brazos suben al empujar el pecho, la mano o el codo pueden pasar el hombro. La fuente no lo descarta. Por §7.1, ante la duda se marca, salvo que la instrucción limite la altura como adaptación documentada |
| mano_detras | false | Manos a los lados | FALSE | — |
| ambos_brazos | false | Los dos brazos extendidos a los lados | REQUIERE_ACLARACION (TRUE si no se aclara) | Tal como está redactado se hace con los dos brazos. No se ha verificado que con uno solo se consiga el mismo estiramiento. Criterio conservador |
| agarre | false | Manos abiertas | FALSE | — |
| peso_en_manos | false | Las manos no apoyan | FALSE | — |
| flexion_profunda_rodilla | false | Rodillas como al estar sentado | FALSE | — |
| flexion_amplia_cadera | false | Cadera como al estar sentado | FALSE | — |
| puntillas_talones | false | No es de pie | FALSE | — |
| inclinacion_tronco | false | «Empuja el pecho hacia delante y arriba» | FALSE | Es una extensión leve de la parte alta de la espalda, no un arqueo marcado. Si el desarrollador entiende que arquea la espalda más allá de lo leve, pasaría a TRUE |
| rotacion_tronco | false | Sin giro | FALSE | — |

### Otros campos
- **Fases** (`calma`): coherente con un estiramiento.
- **Posición** (`sentado`) y **recursos** (`silla`): correctos.
- **Dosis:** coincide con la fuente.
- **Duración** (75 s): plausible para 5 repeticiones de 5 a 10 s.
- **Variantes:** no tiene.
- **Licencia:** OGL verificada; conserva la atribución.

### Incidencias
1. La altura de los brazos no está en la fuente. La nota «no por encima» es una interpretación nuestra y no está documentada.
2. Dudas en `ambos_brazos` y `brazo_sobre_hombro`.

### Propuesta de cambios
- `exigencias.brazo_sobre_hombro`: false → **true**, o bien mantenerla en false y añadir una adaptación documentada:
  - instrucción 2: «…extiende los brazos a los lados, sin subirlos por encima de los hombros»;
  - `adaptaciones`: «La fuente no indica la altura de los brazos; se limita a la altura del hombro».
- `exigencias.ambos_brazos`: false → **true**.

### Decisión pendiente del desarrollador
**REQUIERE CORRECCIONES.**

---

## 2. giro-tronco-sentado

### Identificación
- ID: `giro-tronco-sentado`
- Nombre: Giro de tronco en la silla
- Fuente: NHS, «Sitting exercises», ejercicio «Upper-body twist»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Ubicación exacta:** «Sitting exercises», segundo ejercicio, «Upper-body twist», pasos A a C.
- **Pasos originales, con palabras propias:**
  1. Sentarse erguido con los pies en el suelo.
  2. Cruzar los brazos y llevar las manos a los hombros.
  3. Sin mover la cadera, girar la parte alta del cuerpo a la izquierda hasta donde resulte cómodo y mantener 5 s.
  4. Repetir a la derecha.
  5. 5 veces por lado.
- **Coincidencias:** todos los pasos y la dosis.
- **Diferencias:** ninguna.
- **Adaptaciones que deben documentarse:** ninguna.
- **Limitaciones de la verificación:** ilustración no revisada.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Sentado | FALSE | — |
| una_pierna | false | Sentado | FALSE | — |
| sentarse_levantarse | false | Sin transición | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | false | Sin material | FALSE | — |
| esfuerzo_cardio | false | Movilidad suave | FALSE | — |
| brazo_sobre_hombro | false | Manos en los hombros, codos por delante del pecho | FALSE | Ni codo ni mano pasan la altura del hombro |
| mano_detras | false | Las manos van a los hombros por delante | FALSE | Coincide con la nota interna |
| ambos_brazos | false | «Cross your arms and reach for your shoulders» | REQUIERE_ACLARACION (TRUE si no se aclara) | La instrucción pide los dos brazos. La revisión anterior opinó que no son imprescindibles para el giro, pero eso exigiría una adaptación documentada para una persona que solo usa un brazo |
| agarre | false | Las manos se apoyan en los hombros, sin cerrarse | FALSE | — |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | — | FALSE | — |
| flexion_amplia_cadera | false | — | FALSE | — |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | false | Giro sin inclinación | FALSE | — |
| rotacion_tronco | true | «Turn your upper body… without moving your hips» | TRUE | Es justo la definición: girar los hombros respecto a la cadera |

### Otros campos
- **Fases** (`calentamiento`, `calma`): razonables.
- **Posición**, **recursos**, **dosis** y **duración** (90 s, 10 giros de 5 s más las transiciones): coherentes.

### Incidencias
1. Decidir `ambos_brazos`. Opciones:
   - marcarla;
   - mantenerla en false y añadir una adaptación del tipo «si solo puedes usar un brazo, lleva esa mano al hombro contrario». Sería una propuesta nuestra, no de la fuente.

### Propuesta de cambios
- `exigencias.ambos_brazos`: false → **true**, o mantenerla en false con la adaptación documentada descrita arriba.

### Decisión pendiente del desarrollador
**REQUIERE CORRECCIONES** (solo la decisión sobre `ambos_brazos`).

---

## 3. marcha-sentado-sujetandose

### Identificación
- ID: `marcha-sentado-sujetandose`
- Nombre: Marcha en la silla, sujetándote a ella
- Fuente: NHS, «Sitting exercises», ejercicio «Hip marching»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Ubicación exacta:** «Sitting exercises», tercer ejercicio, «Hip marching», pasos A a C.
- **Pasos originales, con palabras propias:**
  1. Sentarse erguido sin apoyarse en el respaldo, sujetando los lados de la silla.
  2. Elevar la pierna izquierda con la rodilla doblada hasta donde sea cómodo.
  3. Bajar el pie con control.
  4. Repetir con la otra pierna.
  5. 5 elevaciones por pierna.
- **Coincidencias:** todos los pasos y la dosis.
- **Diferencias:** ninguna.
- **Adaptaciones que deben documentarse:** ninguna.
- **Limitaciones de la verificación:** ilustración no revisada.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Sentado | FALSE | — |
| una_pierna | false | Sentado: el peso no cae sobre un pie | FALSE | La definición se refiere al peso del cuerpo sobre un pie |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | El pie se baja «con control» | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | 5 elevaciones lentas | FALSE | No está pensado para subir el pulso |
| brazo_sobre_hombro | false | Manos en los lados de la silla | FALSE | — |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | false | Sujeta los dos lados | FALSE | Se puede sujetar con una sola mano sin cambiar el ejercicio |
| agarre | true | «Hold on to the sides of the chair» | TRUE | La especificación incluye sujetarse a una silla |
| peso_en_manos | false | Sujetarse no es cargar el peso del cuerpo | FALSE | — |
| flexion_profunda_rodilla | false | Rodilla doblada al subir, en torno a 90° | FALSE | Coincide con el caso de referencia «Marcha sentado» del §7 |
| flexion_amplia_cadera | true | «Lift your leg… as far as is comfortable» | TRUE | El muslo se acerca al tronco más que al estar sentado. Es un caso de referencia del §7 |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | false | Se pide no recostarse | FALSE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
- **Fases**, **posición**, **recursos**, **dosis** y **duración** (60 s): coherentes.
- **Variantes:** es la versión de partida de `marcha-sentado-manos-cadera`.

### Incidencias
Ninguna.

### Propuesta de cambios
Ninguna.

### Decisión pendiente del desarrollador
**LISTO PARA APROBACIÓN DOCUMENTAL.**

---

## 4. marcha-sentado-manos-cadera

### Identificación
- ID: `marcha-sentado-manos-cadera`
- Nombre: Marcha en la silla, con las manos en la cadera
- Fuente: Specialist Mobility Centre (Leicester), «Seated Exercises – Information for Patients», ejercicio 1, «Chair Marching»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Ubicación exacta:** PDF, primera página de ejercicios, «1) Chair Marching».
- **Pasos originales, con palabras propias:**
  1. Sentarse erguido en una silla o en la cama, con las manos en la cadera y sin apoyarse en el respaldo.
  2. Marchar en el sitio levantando cada pierna un poco.
  3. Mantener la espalda erguida, sin ladearse ni echarse atrás.
  4. Tras 10 a 20 pasos, descansar y repetir.
  5. Las series se dejan en blanco para el fisioterapeuta.
  6. Como progresión opcional, añadir el braceo con los codos doblados.
- **Coincidencias:** posición, pasos, dosis y advertencias posturales.
- **Diferencias:**
  - La fuente permite hacerlo en la cama; el catálogo solo en silla. Es una reducción de alcance, no una alteración.
  - La progresión con brazos no se incluye.
- **Adaptaciones que deben documentarse:** ninguna obligatoria. Opcionalmente, anotar que se omite la progresión con brazos.
- **Limitaciones de la verificación:** ilustración no revisada. El PDF no indica licencia.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Sentado | FALSE | — |
| una_pierna | false | Sentado | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | Pasos pequeños | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | 10 a 20 pasos con descanso | FALSE | — |
| brazo_sobre_hombro | false | Manos en la cadera | FALSE | — |
| mano_detras | false | La cadera no es detrás de la espalda | FALSE | — |
| ambos_brazos | false | Las manos descansan en la cadera | FALSE | No es un requisito funcional |
| agarre | false | Las manos se apoyan, no sujetan | FALSE | — |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | — | FALSE | — |
| flexion_amplia_cadera | true | Se levanta la pierna «slightly» | TRUE | Aunque el pie suba poco, el muslo se eleva respecto a la postura sentada. §7.1 y caso de referencia «Marcha sentado» |
| puntillas_talones | false | — | FALSE | — |
| inclinacion_tronco | false | Se pide no inclinarse | FALSE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
- **Fases**, **posición** y **recursos**: coherentes.
- **Dosis:** coincide con la fuente.
- **Duración** (60 s): plausible.
- **`variante_de`** (`marcha-sentado-sujetandose`): coherente; elimina el `agarre` y conserva la flexión de cadera, que es lo que pretende.
- **Licencia:** «sin licencia abierta indicada» es correcto, y la redacción es propia.

### Incidencias
Ninguna que impida la aprobación.

### Propuesta de cambios
Ninguna obligatoria.

### Decisión pendiente del desarrollador
**LISTO PARA APROBACIÓN DOCUMENTAL.**

---

## 5. estiramiento-tobillo-sentado

### Identificación
- ID: `estiramiento-tobillo-sentado`
- Nombre: Estiramiento de tobillo con la pierna estirada
- Fuente: NHS, «Sitting exercises», ejercicio «Ankle stretch»
- Estado inicial: `borrador`
- Resultado documental: FIDELIDAD CONFIRMADA.

### Evidencia de la fuente
- **Ubicación exacta:** «Sitting exercises», cuarto ejercicio, «Ankle stretch», pasos A a C.
- **Pasos originales, con palabras propias:**
  1. Sentarse erguido, sujetando el lado de la silla.
  2. Estirar la pierna izquierda con el pie despegado del suelo.
  3. Con la pierna estirada y elevada, llevar la punta del pie hacia delante y luego hacia uno mismo.
  4. 2 series de 5 con cada pie.
- **Coincidencias:** todos los pasos y la dosis.
- **Diferencias:** ninguna.
- **Adaptaciones que deben documentarse:** ninguna.
- **Limitaciones de la verificación:** no se ha visto la ilustración. Es la que diría si el muslo sigue apoyado o se eleva.

### Auditoría de exigencias

| Exigencia | Etiqueta actual | Evidencia | Resultado propuesto | Motivo |
|---|---|---|---|---|
| equilibrio_sin_apoyo | false | Sentado | FALSE | — |
| una_pierna | false | Sentado | FALSE | — |
| sentarse_levantarse | false | — | FALSE | — |
| impacto | false | — | FALSE | — |
| carga_externa | false | — | FALSE | — |
| esfuerzo_cardio | false | — | FALSE | — |
| brazo_sobre_hombro | false | Mano en el lado de la silla | FALSE | — |
| mano_detras | false | — | FALSE | — |
| ambos_brazos | false | Una mano sujeta la silla | FALSE | — |
| agarre | true | «Hold on to the side of the chair» | TRUE | Sujetarse a la silla es agarre (§4) |
| peso_en_manos | false | — | FALSE | — |
| flexion_profunda_rodilla | false | La rodilla se estira | FALSE | — |
| flexion_amplia_cadera | true | «Straighten your leg with your foot off the floor… leg straight and raised» | TRUE (conservador) | Puede hacerse solo estirando la rodilla con el muslo apoyado, o elevando el muslo. «Raised» sugiere elevación. Ante la duda, se marca (§7.1). No es una contraindicación médica |
| puntillas_talones | false | Sentado; la definición exige soportar el peso de pie | FALSE | Apuntar con el pie no es cargar peso sobre las puntas |
| inclinacion_tronco | false | Erguido | FALSE | — |
| rotacion_tronco | false | — | FALSE | — |

### Otros campos
- **Fases** (`calentamiento`): aceptable.
- **Posición**, **recursos** y **dosis**: coherentes.
- **Duración** (90 s): plausible para 20 movimientos más el cambio de pierna.

### Incidencias
1. `flexion_amplia_cadera` se mantiene por criterio conservador. La nota de etiquetado ya lo explica.

### Propuesta de cambios
Ninguna.

### Decisión pendiente del desarrollador
**LISTO PARA APROBACIÓN DOCUMENTAL.**

---

## Resumen del lote 1

| ID | Resultado | Cambios propuestos |
|---|---|---|
| estiramiento-pecho-sentado | REQUIERE CORRECCIONES | `brazo_sobre_hombro` y `ambos_brazos` (o adaptación documentada que limite la altura) |
| giro-tronco-sentado | REQUIERE CORRECCIONES | Decidir `ambos_brazos` |
| marcha-sentado-sujetandose | LISTO PARA APROBACIÓN DOCUMENTAL | — |
| marcha-sentado-manos-cadera | LISTO PARA APROBACIÓN DOCUMENTAL | — |
| estiramiento-tobillo-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | — |

**Incidencia común:** `ambos_brazos` se ha etiquetado con un criterio funcional («¿hace falta realmente el otro brazo?»), cuando las instrucciones describen el movimiento con los dos brazos. Conviene que el desarrollador fije el criterio de una vez:
- **Criterio literal:** si la instrucción pide los dos brazos, se marca.
- **Criterio funcional:** solo se marca si con un brazo el ejercicio no se puede hacer; en ese caso hay que añadir una adaptación documentada.

La especificación (§7.1) inclina hacia el criterio literal.
