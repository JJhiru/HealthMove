# Evidencia de las fuentes · lote 27

> **Preparado por Claude** el 2026-10-24 (P29). Las fuentes se resumen con palabras propias; solo se citan frases breves (entre «»). Las descripciones de imágenes son de Claude, con D/I/N.
>
> Descargadas con `curl` el 2026-10-24 (HTTP 200). Los PDF se leyeron con `pdftotext -layout` y se renderizaron sus páginas; las dos imágenes de Versus Arthritis se descargaron aparte. Ilustraciones de HealthMove renderizadas desde `ilustraciones.json`.

## Fuentes abiertas

| # | Fuente | URL | SHA-256 (prefijo) |
|---|---|---|---|
| F1 | MS Trust, «Exercises: posture» (2010, PDF de 9 páginas) | `https://mstrust.org.uk/sites/default/files/2024-03/exercises-posture-2024.pdf` | `a72c28a9f272118c` |
| F2 | MS Trust, «Exercises: core stability» (2010, PDF de 7 páginas) | `https://mstrust.org.uk/sites/default/files/files/exercises-core-stability.pdf` | `036aeee7032bf690` |
| F3 | Moving Medicine (Oxford University Hospitals), «Chair-based Exercise Programme» (PDF de 16 páginas) | `https://australia.movingmedicine.ac.uk/wp-content/uploads/2020/04/Chair-exercise-programme-v.3-final-2.pdf` | `6483c809f722e570` |
| F4 | Versus Arthritis, «Exercises you can do sitting down» (17-09-2023) | `https://versusarthritis.org/news/2023/september/exercises-you-can-do-sitting-down` | `00f3110944e877a1` |

**Poblaciones (D):** F1 y F2, esclerosis múltiple (`especifica_de` actual: «esclerosis múltiple»). F3, pacientes durante una estancia en el hospital («Having a stay in hospital may leave you feeling somewhat weaker»), en el sillón y con el apoyo del equipo; `especifica_de` vacío. F4, personas con artritis o con dolor o rigidez en las articulaciones («chair-bases stretches for people with arthritis»); `especifica_de` vacío.
**Imágenes (D):** F1 y F2 son dibujos de figuras; F3, fotos; F4, dibujos de detalle del pie.

## 227. abdomen-sentado · F1/F2, «Exercise 22: Core stability»

- **Texto (D):** la posición principal es **a cuatro patas**; soltar el abdomen y después meterlo desde debajo del ombligo hacia arriba y hacia dentro; contar hasta 10 si se puede; 3 a 5 veces. **«NB This exercise can also be done in a sitting position»**: sentado bien atrás en la silla para apoyar la espalda; soltar el abdomen, meterlo desde debajo de la cintura, contar hasta 10 y seguir respirando.
- **Dibujos (D):** a cuatro patas, con el abdomen suelto y metido. No hay dibujo sentado.
- **HealthMove:** sentado. La posición elegida no consta en `adaptaciones`.
- **Ilustración de HealthMove:** sentado en la silla, de perfil. Coincide con la variante sentada.

## 228. desplazar-peso-sentado · F1, «Exercise 6: Cheek to cheek»

- **Texto (D):** sentado en una superficie firme (borde de la cama, taburete, silla); pasar el peso de un isquion al otro levantando un glúteo, **manteniendo el tronco erguido**; en el lado que sube, las costillas se acercan; 3 a 5 veces a cada lado.
- **Dibujos (D):** de frente, sentado en un taburete; un glúteo sube y el tronco se mantiene casi vertical, con una ligera curva lateral.
- **Catálogo:** `inclinacion_tronco: true` con la nota «Las costillas del lado elevado se acercan: es una inclinación lateral» (sin la forma de R2.4).
- **Ilustración de HealthMove:** de frente, sentado, el peso pasa a un lado. Coincide.

## 229. puente-suelo · F2, «Exercise 3: Bridging»

- **Texto (D):** tumbado con las rodillas dobladas y los pies apoyados en el suelo o la cama, separados unos 30 cm; apretar los glúteos y subirlos formando un puente; mantener; bajar despacio; 3 a 5 veces; subir y bajar en línea recta.
- **Dibujos (D):** tumbado, las rodillas dobladas, la pelvis que sube.
- **Rodillas (I):** dobladas, sin ángulo; en el dibujo, en torno a 90° (clase de CN-5).
- **Catálogo:** `variante_de: puente-tumbado`; posición `suelo` (la fuente permite el suelo o la cama).
- **Ilustración de HealthMove:** tumbado en el suelo, la pelvis elevada. Coincide.

## 230. bascula-pelvica-suelo · F2, «Exercise 4: Pelvic tilt lying»

- **Texto (D):** la misma posición inicial que 229; apretar el abdomen para bascular la pelvis y apoyar la espalda en la cama o el suelo; soltar; 3 a 5 veces.
- **Dibujos (D):** tumbado, las rodillas dobladas; flecha hacia abajo en la zona lumbar.
- **Rodillas (I):** como en 229 (clase de CN-5).
- **Catálogo:** `variante_de: bascula-pelvica-tumbado`; `inclinacion_tronco: true` sin nota.
- **Ilustración de HealthMove:** tumbado, las rodillas dobladas. Coincide.

## 231. alcance-cruzado-sentado · F3, «Reaching across», p. 13

- **Texto (D):** sentado erguido hacia el borde de la silla; llevar el brazo derecho cruzando el cuerpo y alargar unos centímetros más; volver y repetir con el otro brazo; 5 veces hacia cada lado. Si hay inestabilidad, sujetarse al reposabrazos con la otra mano. Objetivo: la flexibilidad de la parte alta de la espalda.
- **Foto (D):** sentada en un sillón, un brazo estirado cruzando el cuerpo **a la altura del hombro**, el tronco girado; la otra mano, junto al cuerpo.
- **Catálogo:** adaptación que omite el reposabrazos.
- **Ilustración de HealthMove:** de frente, sentado, el brazo cruza el cuerpo a la altura del hombro. Coincide.

## 232. press-encima-cabeza-sentado · F3, «Pillow press», p. 11

- **Texto (D):** sujetar un cojín con las dos manos cerca del pecho; empujarlo hacia arriba hasta estirar los codos sin bloquearlos, lo más alto posible; 10 veces. Progresión: más repeticiones o cambiar el cojín por un peso pequeño.
- **Fotos (D):** sentada; el cojín, sujeto con las dos manos junto al pecho; después, por encima de la cabeza con los brazos estirados.
- **HealthMove:** «una botella en cada mano» (adaptación documentada: se usa directamente la botella).
- **Ilustración de HealthMove:** de perfil, sentado, la botella sube por encima de la cabeza. Coincide.

## 233. circulos-tobillo-sentado · F4, «Ankle rotation»

- **Texto (D):** sentado, levantar un poco los pies del suelo y girar el tobillo en círculo; 10 veces en un sentido y otras 10 en el contrario.
- **Dibujo (D):** detalle del pie con flechas en círculo.
- **Ilustración de HealthMove:** detalle de la pierna y el pie con una flecha circular. Coincide.

## 234. separar-dedos-pies-sentado · F4, «Toe spread»

- **Texto (D):** con los pies en el suelo, separar los dedos todo lo posible; mantener 5 s; 10 veces.
- **Dibujo (D):** detalle de un pie con los dedos separados.
- **Ilustración de HealthMove:** detalle de la pierna y el pie. Coincide.
