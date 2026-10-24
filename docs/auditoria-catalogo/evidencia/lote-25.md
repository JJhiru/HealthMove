# Evidencia de las fuentes · lote 25

> **Preparado por Claude** el 2026-10-24 (P29). Las fuentes se resumen con palabras propias; solo se citan frases breves (entre «»). Las descripciones de imágenes son de Claude, con D/I/N.
>
> Páginas HTML descargadas con `curl` el 2026-10-24 (HTTP 200); texto extraído del HTML; las imágenes de Cambridge se descargaron aparte y se miraron. Las páginas de la BHF solo tienen vídeos, no imágenes de los ejercicios (N). Ilustraciones de HealthMove renderizadas desde `ilustraciones.json`.

## Fuentes abiertas

| # | Fuente | URL | SHA-256 (prefijo) |
|---|---|---|---|
| F1 | British Heart Foundation, «Chair exercises: 10-minute mobility workout for older people» (actualizada el 05-02-2026) | `https://www.bhf.org.uk/informationsupport/heart-matters-magazine/activity/chair-based-exercises` | `4eda537af770101f` |
| F2 | British Heart Foundation, «Warm-up exercises» | `https://www.bhf.org.uk/informationsupport/heart-matters-magazine/activity/warm-up-exercises` | `528c6367b244fa8b` |
| F3 | Cambridge University Hospitals NHS FT, «Exercises for patients before and after a hip injury or operation» (doc. 34324 v5, 16-07-2024) | `https://www.cuh.nhs.uk/patient-information/exercises-for-patients-before-and-after-a-hip-injury-or-operation` | `d5c9f6bc2b20806c` |
| F4 | Cambridge University Hospitals, «Back mobility exercises» (doc. 22383 v4) | `https://www.cuh.nhs.uk/patient-information/back-mobility-exercises/` | `e0d30e3dce09d581` |
| F5 | Cambridge University Hospitals, «Thoracic spine exercises» (doc. 21670 v4) | `https://www.cuh.nhs.uk/patient-information/thoracic-spine-exercises/` | `b6509b09c3525c17` |
| F6 | Cambridge University Hospitals, «Stretches for the hip» | `https://cuh.nhs.uk/patient-information/stretches-for-the-hip` | `ed0ddc53403062c7` |

**F1 (D):** para personas mayores y quien tenga dificultad para estar de pie o caminar («for older people»; «Exercise is for everyone, including those who have difficulty standing or walking»), sentado.
**F2 (D):** calentamiento en 6 rondas, sentado o de pie, demostrado de pie y sentado por alguien que ha pasado por rehabilitación cardiaca; consultar al médico si hay enfermedad cardiovascular; parar si aparecen síntomas. No declara un grupo.
**F4-F6 (D):** las repeticiones y los tiempos se dejan **en blanco** para el fisioterapeuta («Repeat ___ times», «Hold ___ seconds»). F3 da «Repeat x10».

## 205. abrazar-rodilla-sentado · F1, «8. Knee hug»

- **Texto (D):** sentado con los pies al ancho de la cadera; sujetar una pierna por debajo del muslo; acercar la rodilla despacio hasta donde sea cómodo, con la espalda recta; bajar el pie; 8 a 10 veces con cada pierna. Progresión: sujetar la pierna por la espinilla.
- **Imagen:** N (vídeo).
- **Manos (I):** «hold 1 leg under the thigh» no dice con cuántas manos.

## 206. circulos-cadera-sentado · F1, «9. Hip circles»

- **Texto (D):** sentado con los pies al ancho de la cadera; levantar una pierna todo lo que sea cómodo; con la rodilla doblada, hacer círculos pequeños 10 a 12 veces; con la otra. Progresión: la pierna estirada o círculos más grandes.
- **Imagen:** N.

## 207. marcha-circulos-codos-sentado · F2, ronda 4, «1. March with elbow circles»

- **Texto (D):** las manos sobre los hombros mientras se ruedan hacia atrás y se mueven los codos en círculo, levantando las piernas más si se puede; 16 a 20 veces con cada pierna. Sentado o de pie.
- **Imagen:** N.
- **Codos (I):** con las manos en los hombros, los codos dibujan círculos y pueden pasar de la altura del hombro.

## 208. rodilla-mano-contraria-sentado · F2, ronda 2, «4. Knee raises with hand taps»

- **Texto (D):** al levantar la rodilla derecha, tocar la parte de arriba del muslo con la mano izquierda; bajar y llevar la mano a un lado; con la otra; 16 a 20 veces por lado. Sentado o de pie.
- **Imagen:** N.
- **Tronco (I):** la mano cruza al muslo contrario; puede girar algo el tronco.

## 209. talones-flexion-codo-sentado · F2, ronda 2, «2. Foot pedals with alternating bicep curls»

- **Texto (D):** al levantar el talón derecho, doblar el codo izquierdo llevando la mano hacia el hombro; bajar los dos; con el otro lado; 16 a 20 veces por lado. Sentado o de pie.
- **Imagen:** N.
- **Mano (I):** llega hacia el hombro (CN-1).

## 210. circulos-tobillo-tumbado · F3, segundo ejercicio

- **Texto (D):** «Whilst lying or sitting with your back supported, now circle your ankles in each direction»; «Repeat x10». Ejercicio de circulación.
- **Imagen (D):** detalle de un pie con flechas en círculo.
- **Población (D):** antes y después de una lesión u operación de cadera (`especifica_de`: «lesión u operación de cadera»).

## 211. abdomen-profundo-tumbado · F4, «5. Core muscle contraction»

- **Texto (D):** boca arriba con las piernas dobladas y los pies juntos; tensar suavemente el abdomen llevando la parte baja del vientre hacia arriba y hacia dentro y activando el suelo pélvico; respirar con normalidad; no arquear la espalda; mantener ___ s; ___ veces.
- **Dibujo (D, n.º 5):** tumbado, rodillas dobladas, una mano sobre el vientre.
- **Rodillas (I):** en torno a 90°; es la clase de CN-5.
- **Catálogo:** `variante_de: abdomen-sentado`.

## 212. extension-lumbar-manos · F4, «2b. Lumbar spine extension»

- **Texto (D):** boca abajo con las dos manos bajo los hombros; estirar los codos y subir la parte de arriba del tronco todo lo posible; la pelvis y las piernas relajadas; ___ veces.
- **Dibujo (D, n.º 2b):** boca abajo, los brazos estirados, el tronco muy elevado y la espalda arqueada.
- **Catálogo:** `variante_de: extension-lumbar-antebrazos`.

## 213. abrir-codos-toalla-suelo · F5, n.º 8

- **Texto (D):** boca arriba con una toalla enrollada a lo largo de la columna, entre los omóplatos; las manos detrás de la nuca, los codos hacia el techo; tomar aire y separar los codos hacia el suelo; ___ veces.
- **Dibujo (D, n.º 8):** tumbado, las manos detrás de la cabeza, los codos que se abren; la toalla bajo la espalda.

## 214. gluteo-pierna-cruzada-suelo · F6, «4. Piriformis stretch (crossed leg knee hug)»

- **Texto (D):** sentado en el suelo con una pierna estirada y la otra cruzada por encima; llevar la rodilla hacia el hombro contrario hasta notar el estiramiento en el glúteo; mantener ___ s; ___ veces. (El n.º 3, «Gluts stretch (sitting twisted)», es parecido con las dos piernas dobladas y dice «Put your arm around the leg».)
- **Dibujo (D, n.º 4):** sentado en el suelo, una pierna estirada, la otra cruzada por encima con la rodilla alta; **un brazo abraza la rodilla** y la lleva hacia el pecho; la otra mano, junto al cuerpo.
- **Rodilla y cadera (D, dibujo):** la rodilla cruzada, muy doblada; el muslo cerca del tronco.
- **Catálogo:** la nota («No hacerlo tras una prótesis de cadera…») es de HealthMove, no de la fuente.
- **Ilustración de HealthMove:** sentado en el suelo, una pierna estirada; el cruce y el abrazo apenas se distinguen.

## 215. mariposa-suelo · F6, «7b. Cross leg sit»

- **Texto (D):** sentado en el suelo con las plantas de los pies juntas; sujetar los pies y empujar hacia abajo con los codos; la espalda recta, sin dejar que la pelvis bascule hacia atrás; ___ s; ___ veces.
- **Dibujo (D):** sentado en el suelo, las plantas juntas, las manos sujetando los pies y los codos sobre las rodillas.
- **Catálogo:** la nota cita a Arthritis UK, no a esta fuente.
- **Ilustración de HealthMove:** de frente, sentado en el suelo con las rodillas abiertas. Coincide.
