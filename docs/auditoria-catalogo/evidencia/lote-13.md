# Evidencia de las fuentes · lote 13

> **Preparado por Claude** el 2026-10-24 (P29). Las fuentes no tienen licencia abierta: se resumen con palabras propias y solo se citan frases breves (entre «»). Las descripciones de imágenes son de Claude, con D/I/N.
>
> Descargadas con `curl` el 2026-10-24 (HTTP 200), leídas con `pdftotext -layout` y con las páginas de los ejercicios renderizadas; las fotos de RUH «Back exercises» se extrajeron con `pdfimages` (R7.9). Ilustraciones de HealthMove renderizadas desde `ilustraciones.json`.

## Fuentes abiertas

| # | Fuente | URL | Datos | Revisado |
|---|---|---|---|---|
| F1 | Royal Berkshire NHS FT, «Pulmonary Rehabilitation Exercise Booklet», marzo de 2025 | `https://www.royalberkshire.nhs.uk/media/m2yl2u1z/pulmonary-rehabilitation-exercises_mar25.pdf` | PDF de 21 páginas, SHA-256 `d2f86ee28d94b80f4f059c771e64fda34e55587ae281ed941a151edbf77fc093` | Páginas 1-3 (seguridad), 7-10 y 13, con sus dibujos |
| F2 | Royal Berkshire NHS FT, Pelvic Health Physiotherapy, «Core exercise programme», mayo de 2025 | `https://royalberkshire.nhs.uk/media/qfljlxzd/physio-core-exercise-programme-matplusgynae.pdf` | PDF de 4 páginas, SHA-256 `92c65bb8377823c9a2aae98f55e6920a63766f0bc59e170d876292c1207ffc77` | Texto y fotos de las páginas 1 y 2 |
| F3 | Royal Papworth Hospital NHS FT, «Pelvic floor exercises for women», PI 107 v3.1 | `https://royalpapworth.nhs.uk/download_file/1536/305` | PDF de 2 páginas, SHA-256 `131efa9cf64311becaaf014a857db2e7a86b6353d75993803b4057923537c79a` | Texto completo (sin imágenes de ejercicios) |
| F4 | Royal United Hospitals Bath NHS FT, Pain Clinic, «Back Exercises» (ANA034) | `https://www.ruh.nhs.uk/patients/patient_information/ANA034_Back_exercises.pdf` | PDF de 9 páginas, SHA-256 `b37d892c03d8dc49eee8ea2363e202e878ddfe866377cd2b9f836599d48e4112` | Páginas 1-3 y 6, y las dos fotos de «Knee rolling» |
| F5 | Royal United Hospitals Bath NHS FT, «Bed Exercises» | `https://www.ruh.nhs.uk/patients/patient_information/Bed_Exercises.pdf` | PDF de 2 páginas, SHA-256 `d9d7d2ed32fef89ff7e5ab9599e83fb3613396fb1430aa358b0e898bb4550438` | Texto y dibujos |
| F6 | Royal United Hospitals Bath NHS FT, «Chair Exercises» | `https://www.ruh.nhs.uk/patients/patient_information/chair_exercises.pdf` | PDF de 2 páginas, SHA-256 `24f1722fe1fb97c9865a00ab5c6521552631df0ef9c6858e84ee6a9f8e122f48` | Texto y dibujos |

## 94. puno-extension-codo-sentado · F6, primer ejercicio de la página 1

- **Texto (D):** doblar el codo, manteniéndolo junto a la cintura, y cerrar el puño; estirar el codo y abrir la mano todo lo que se pueda; «Repeat x on each side» (repeticiones en blanco). Cabecera del folleto (D): el fisioterapeuta recomienda hacerlos tres veces al día; sentado con la espalda apoyada y los pies en el suelo («Sit with your back supported and your feet on the floor»).
- **Dibujo (D):** figura con el codo doblado al máximo y la mano cerrada a la altura del hombro, delante de él.
- **Mano y hombro (I):** la mano llega a la altura del hombro; no consta si la pasa.
- **Ilustración de HealthMove:** sentado, el antebrazo sube hasta el hombro. Coincide.

## 95 y 96. estiramiento-pecho-manos-lumbar (sentado) y estiramiento-pecho-manos-lumbar-pie · F1, «Chest stretch», p. 13

- **Texto (D):** apartado «Cool down exercises»: cada estiramiento suave, 15 a 20 segundos. «Stand upright»; «Place your hands on your lower back»; juntar los omóplatos («Squeeze your shoulder blades together, keeping your elbows bent»).
- **Dibujo (D):** de pie, de perfil, las dos manos en la parte baja de la espalda, codos doblados hacia atrás.
- **Población (D):** rehabilitación pulmonar (el folleto es de un programa de rehabilitación pulmonar; `especifica_de` actual: «enfermedad pulmonar»). Página 2 (D): reglas para hacer ejercicio con seguridad y síntomas para parar (consejos de clase 2, DG-6).
- **Catálogo:** desde P23 hay dos entradas; la sentada es una adaptación aprobada una a una en P28 (Q5).
- **Dosis:** la fuente da 15 a 20 segundos; no da repeticiones. HealthMove: «2 o 3 veces».
- **Ilustraciones de HealthMove:** de pie y sentado, manos en la parte baja de la espalda. Coinciden.

## 97. abrir-pierna-brazo-pared · F1, «Star Jacks», p. 9

- **Texto (D):** de pie con los pies al ancho de la cadera; «Hold onto a wall for support if you need to»; deslizar el pie derecho hacia el lado mientras se sube el brazo derecho «up to shoulder height»; volver al centro y repetir con el otro lado; «Timed: Build up to 5 minutes».
- **Apartado (D):** Star Jacks está en el apartado **«Aerobic exercises»** (empieza en la p. 8 y sigue en la 9: caminar, bicicleta, Star Jacks), que pide «You should aim to feel moderately breathless» y 20 a 30 minutos de ejercicio aeróbico 5 días a la semana.
- **Dibujo (D):** de pie, una mano apoyada en la pared, el otro brazo extendido hacia el lado a la altura del hombro, la pierna del mismo lado separada.
- **Apoyo:** en la fuente es opcional («if you need to»); HealthMove lo hace obligatorio («con una mano apoyada en la pared»).
- **Ilustración de HealthMove:** de pie junto a la pared, la mano de la pared por encima del hombro, el otro brazo hasta la altura del hombro y la pierna que se separa. La mano de la pared está más alta que en el dibujo de la fuente.

## 98 y 99. suelo-pelvico-lentas y suelo-pelvico-rapidas · F3, «Slow contractions» y «Fast contractions», p. 2

- **Población (D):** el título es «Pelvic floor exercises for women»; habla de la incontinencia de esfuerzo.
- **Posición (D):** los ejercicios se pueden hacer en cualquier posición; puede ser más fácil empezar «lying on your back with your knees bent up or sitting on the toilet».
- **Cómo (D, p. 1):** apretar los músculos alrededor de los orificios delantero y trasero y subirlos, como para retener la orina y los gases a la vez; «upward and inward»; no hacer fuerza hacia abajo. No contener la respiración; no apretar abdomen, muslos ni glúteos (se admite una contracción suave de la parte baja del abdomen); no juntar las piernas; no subir hombros, dedos de los pies ni cejas. Cortar el chorro de orina para encontrar los músculos, como mucho una vez cada quince días.
- **Lentas (D):** apretar todo lo posible, mantener 10 segundos, relajar y descansar 10 segundos; hasta 10 veces; al principio quizá solo 1 o 2 segundos, e ir subiendo hasta 10.
- **Rápidas (D):** apretar rápido, mantener **un segundo**, relajar y **descansar un segundo**; **«Repeat the contraction 10 times»**. (La dosis se lee completa: la adaptación actual de `suelo-pelvico-rapidas` dice que no se pudo leer.)
- **Imágenes:** ninguna de los ejercicios (N).
- **Ilustraciones de HealthMove:** tumbado con las rodillas dobladas y la zona pélvica marcada. Coinciden con la posición que sugiere la fuente.

## 100. manos-entrelazadas-arriba-tumbado · F5, primer ejercicio de la página 1

- **Texto (D):** entrelazar las manos con los codos estirados; subirlas por encima de la cabeza «as far above your head as comfortable»; mantener 5 segundos; «Repeat times» (en blanco). Cabecera (D): «These exercises can be done either in lying or sitting up in bed», tres veces al día.
- **Dibujo (D):** tumbado, los brazos estirados por encima de la cabeza con las manos juntas.
- **Ilustración de HealthMove:** tumbado, los brazos suben en arco por encima de la cabeza. Coincide.

## 101. circulos-pierna-lado-suelo · F2, n.º 3 «Side lying hip abduction», versión más difícil, p. 2

- **Texto (D):** tumbado de lado con la rodilla de abajo doblada; la mano de arriba delante, en la colchoneta o el suelo, «if you need extra support»; cadera de arriba encima de la de abajo, sin que ruede hacia atrás; subir la pierna de arriba y bajarla. Versión más difícil: mantener la pierna a la altura de la cadera y hacer círculos pequeños, 10 en cada sentido, con la rodilla estirada y la cadera quieta.
- **Fotos (D):** tumbado de lado sobre una colchoneta en el suelo, la mano de arriba apoyada delante, la pierna de arriba recta y elevada.
- **Población:** el programa se presenta como punto de partida «for anyone wanting to improve their general core strength» (D); es del servicio de fisioterapia de salud pélvica. No declara un grupo.
- **Apoyo:** en la fuente, opcional; HealthMove lo da por hecho («la mano de delante apoyada»).
- **Catálogo:** `variante_de: elevar-pierna-lado-tumbado`.
- **Ilustración de HealthMove:** tumbado de lado en el suelo, la pierna de arriba elevada con un círculo. Coincide.

## 102. rodillas-lado-lado-suelo · F4, «Knee rolling», p. 3

- **Texto (D):** tumbado boca arriba con las rodillas dobladas y los pies «on the floor»; hombros relajados y apoyados «on the floor/bed»; dejar caer las rodillas de lado a lado hasta donde se pueda sin demasiado dolor; volver en sentido contrario; respiración relajada; «Repeat 5-10 times both ways». Cabecera (D, p. 2): ejercicios para después de una infiltración en la clínica del dolor; es normal sentir algo de dolor leve, y si es demasiado, hacer menos o parar.
- **Fotos (D):** un hombre tumbado en una camilla, con las rodillas dobladas caídas hacia un lado; los brazos estirados junto al cuerpo, algo separados, con las manos sobre la camilla. **No están en cruz.**
- **Diferencias con HealthMove:** HealthMove dice «los brazos en cruz», que la fuente no dice ni muestra. La fuente admite suelo o cama (F4 dice «floor/bed»); HealthMove, suelo.
- **Población (D):** clínica del dolor, tras una infiltración en la espalda. `especifica_de` actual: «dolor de espalda».
- **Catálogo:** `variante_de: rotacion-rodillas-tumbado`.
- **Ilustración de HealthMove:** vista desde arriba, las rodillas caen hacia un lado; los brazos junto al cuerpo (no en cruz). Coincide con la fuente; no con la instrucción actual.
