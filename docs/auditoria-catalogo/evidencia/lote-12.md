# Evidencia de las fuentes · lote 12

> **Preparado por Claude** el 2026-10-24 para la auditoría del lote 12 (P29). Las fuentes no tienen licencia abierta: se resumen con palabras propias y solo se citan frases breves (entre «»). Las descripciones de imágenes son de Claude, con su grado de evidencia (D/I/N).
>
> Fuente descargada con `curl` el 2026-10-24 (HTTP 200), leída con `pdftotext -layout` y con sus 4 páginas renderizadas y miradas (R7.9). Ilustraciones de HealthMove renderizadas desde `public/data/ilustraciones.json`.

## Fuente abierta

| # | Fuente | URL | Datos | Revisado |
|---|---|---|---|---|
| F1 | Royal Berkshire NHS Foundation Trust, Physiotherapy Department, «Bed exercises and stretches», julio de 2024 (revisión prevista en julio de 2026) | `https://royalberkshire.nhs.uk/media/tc0hidxw/bed-exercises-and-stretches_jul24.pdf` | PDF de 4 páginas. SHA-256 `de719b8e696defef2d766d12394d730dc28d541d9ae1e875283c84f822de83d5` | Texto completo y los dibujos de los 11 ejercicios |

**Datos comunes a todo el folleto (D):**
- **Población declarada:** personas que pasan en la cama más tiempo de lo normal por estar enfermas, o que no pueden levantarse («spending more time in bed than normal, due to being unwell, or if you are unable to get out of bed»).
- «Your physiotherapist will tick the stretches and exercises that are appropriate for you» (consejo de clase 2, DG-6).
- Cada ejercicio tiene un apartado «To make this exercise harder»: más series y, en varios, banda elástica (amarilla, roja o verde). De ahí salen las 6 variantes con banda del catálogo.
- El ejercicio 1, «Neck stretch», no está en el catálogo (exclusión del cuello).

## 79. elevacion-brazos-tumbado · n.º 3 «Shoulder flexion», p. 2

- **Texto (D):** boca arriba, brazos a los lados; «Lift your arms above your head»; «Repeat 10 times on each arm».
- **Dibujo (D):** tumbado boca arriba; un brazo sube desde el costado hasta por encima de la cabeza (flecha en arco); el otro, junto al cuerpo.
- **Brazos (I):** el texto dice «arms» en plural pero «10 times on each arm»; el dibujo mueve uno. HealthMove: un brazo y luego el otro.
- **Ilustración de HealthMove:** tumbado, un brazo describe un arco hasta por encima de la cabeza. Coincide.

## 80. banda-elevar-brazo-tumbado · n.º 3, «To make this exercise harder», p. 2

- **Texto (D):** la misma elevación con banda; «Either hold the resistance band in the other hand at hip level or attach the band to the bed rails».
- **Dibujo:** no hay dibujo propio de la versión con banda (N).
- **HealthMove:** sujeta un extremo con la otra mano junto a la cadera y sube el brazo estirado por encima de la cabeza. Adaptación ya documentada: la barandilla se sustituye por la otra mano.
- **Ilustración de HealthMove:** como la 79, con la banda. Coincide con el texto.

## 81. banda-flexion-codo-tumbado · n.º 4 «Bicep curl», p. 2

- **Texto (D):** boca arriba, brazos a los lados; «Hold onto the resistance band, bend your elbow, then straighten it again»; la banda se sujeta con la otra mano a la altura de la cadera o se ata a la barandilla; 10 veces con cada brazo.
- **Dibujo (D):** tumbado boca arriba, el brazo pegado al costado y el antebrazo que sube desde la cadera hacia el pecho (flecha); la otra mano sujeta la banda a la altura de la cadera.
- **Altura de la mano (I):** el antebrazo sube hacia el pecho y el hombro; tumbado no se puede comparar bien con «la altura del hombro» (CN-1).
- **Catálogo:** `variante_de: banda-curl-sentado` (otra fuente).
- **Ilustración de HealthMove:** tumbado, el antebrazo sube desde la cadera hacia la cabeza con la banda. Coincide.

## 82. circulos-hombros-tumbado · n.º 2 «Shoulder circling», p. 1

- **Texto (D):** «Lie on your back or sat up in bed»; con los brazos a los lados, círculos lentos de hombros arriba, atrás y abajo; después hacia delante; 5 veces en cada sentido.
- **Dibujo (D):** la persona aparece **sentada** (en la cama o en una silla), de perfil, brazos abajo.
- **HealthMove:** solo tumbado (una de las dos posiciones que da el texto).
- **Ilustración de HealthMove:** tumbado, círculo en el hombro. Coincide con el texto.

## 83. apretar-gluteos-tumbado · n.º 5 «Gluteal squeeze», p. 2

- **Texto (D):** boca arriba con las piernas estiradas («this can also be done sitting up or when sat out in the chair»); apretar los glúteos; mantener contando hasta 3; relajar; 10 veces.
- **Dibujo (D):** detalle de los glúteos, relajados (1) y apretados (2), con flechas.
- **HealthMove:** solo tumbado (una de las posiciones que da el texto). En el catálogo ya hay `apretar-gluteos-sentado`, de otra fuente.
- **Ilustración de HealthMove:** tumbado con la zona marcada. Coincide.

## 84. abduccion-cadera-tumbado · n.º 6 «Hip abduction», p. 2

- **Texto (D):** boca arriba, piernas estiradas y juntas; llevar una pierna hacia fuera; «Let your heel guide the movement»; volver; 10 veces con cada pierna. Más difícil: banda en las rodillas (más fácil) o en los tobillos (más difícil).
- **Dibujo (D):** tumbado, una pierna separada hacia fuera, con flecha; brazos a los lados.
- **HealthMove:** adaptación ya documentada: «Se omite la versión más difícil con banda elástica» (existe como variante, 85).
- **Ilustración de HealthMove:** vista desde arriba, una pierna que se separa. Coincide.

## 85. banda-separar-pierna-tumbado · n.º 6, «To make this exercise harder», p. 2

- **Texto (D):** lazo de banda alrededor de las rodillas (más fácil) o de los tobillos (más difícil).
- **Dibujo:** sin dibujo propio (N).
- **HealthMove:** «alrededor de las rodillas (o de los tobillos, si quieres más dificultad)». Coincide. Hacer y colocar el lazo es preparación (CN-2, P28).
- **Ilustración de HealthMove:** vista desde arriba con la banda. Coincide.

## 86. elevacion-pierna-recta-tumbado · n.º 7 «Straight leg raise», p. 3

- **Texto (D):** boca arriba, piernas estiradas, puntas de los pies hacia el techo; levantar la pierna de la cama sin doblarla; mantener contando hasta 3; bajar con control; 10 veces con cada pierna.
- **Dibujo (D):** tumbado; una pierna recta elevada unos 25 a 30° sobre la cama (flecha hacia arriba); la otra, estirada sobre la cama; brazos a los lados.
- **Cadera (D, dibujo):** el muslo se separa de la cama muy por debajo de lo que se acerca al tronco al estar sentado.
- **Ilustración de HealthMove:** la pierna sube unos 35°. Algo más que el dibujo; mismo movimiento.

## 87. banda-elevacion-pierna-tumbado · n.º 7, «To make this exercise harder», p. 3

- **Texto (D):** lazo de banda alrededor de los tobillos.
- **Dibujo:** sin dibujo propio (N).
- **HealthMove:** coincide; la dosis no dice «mantén 3 segundos», pero la instrucción 3 sí («aguanta mientras cuentas hasta 3»).
- **Ilustración de HealthMove:** como la 86, con la banda. Coincide.

## 88. deslizar-talon-tumbado · n.º 8 «Knee bends», p. 3

- **Texto (D):** boca arriba, piernas estiradas; doblar la rodilla deslizando el talón «towards your buttocks»; volver; 10 veces con cada pierna. Más difícil: banda alrededor de los dos pies.
- **Dibujo (D):** tumbado sobre una colchoneta, una rodilla doblada con el pie apoyado más o menos a la altura de la otra rodilla.
- **Rodilla y cadera (I):** el dibujo muestra la rodilla en torno a 90°; el texto («towards your buttocks») no fija hasta dónde. El muslo sube hacia el tronco, sin que conste si más que al estar sentado.
- **Ilustración de HealthMove:** tumbado, rodilla doblada con el talón que se acerca. Coincide.

## 89. banda-deslizar-talon-tumbado · n.º 8, «To make this exercise harder», p. 3

- **Texto (D):** lazo de banda alrededor de los dos pies.
- **Dibujo:** sin dibujo propio (N).
- **Ilustración de HealthMove:** como la 88, con la banda. Coincide.

## 90. puente-tumbado · n.º 9 «Bridging», p. 3

- **Texto (D):** boca arriba, rodillas dobladas, pies apoyados y separados al ancho de la cadera; brazos a los lados («Rest your arms down by your sides»); subir los glúteos despacio llevando la cadera hacia el techo, apretándolos; mantener contando hasta 3; bajar despacio, vértebra a vértebra; 10 veces. Más difícil: banda en los muslos, o levantar un pie de la cama al repetir.
- **Dibujo (D):** tumbado, rodillas dobladas, cadera elevada, brazos estirados a los lados con las manos en la cama.
- **Rodillas (I, dibujo):** en torno a 90° o algo más abiertas.
- **HealthMove:** omite la progresión de levantar un pie (no documentado).
- **Ilustración de HealthMove:** tumbado, cadera que sube con las rodillas dobladas. Coincide.

## 91. banda-puente-tumbado · n.º 9, «To make this exercise harder», p. 3

- **Texto (D):** lazo de banda alrededor de los muslos, manteniéndola tensa («make sure you keep tension in the band»).
- **Dibujo:** sin dibujo propio (N).
- **Ilustración de HealthMove:** como la 90, con la banda en los muslos. Coincide.

## 92. rodilla-al-lado-tumbado · n.º 10 «Single knee drop outs», p. 4

- **Texto (D):** boca arriba, rodillas dobladas, pies apoyados al ancho de la cadera, brazos a los lados; bajar despacio la rodilla derecha hacia fuera y hacia el colchón; mantener contando hasta 3; volver al centro; «Repeat 10 times on both sides». Más difícil: banda en los muslos (sin variante en el catálogo).
- **Dibujo (D):** tumbado, una rodilla cae hacia fuera (flecha), la otra doblada arriba.
- **Ilustración de HealthMove:** vista desde arriba, una rodilla cae hacia fuera. Coincide.

## 93. bombeo-tobillos-tumbado · n.º 11 «Ankle pump/circles», p. 4

- **Texto (D):** piernas estiradas en la cama; doblar y estirar los tobillos «Briskly… as much as possible»; hacer círculos con los tobillos; 10 veces, y repetir a menudo a lo largo del día.
- **Dibujo (D):** detalle del pie: círculo con flechas y flexión y extensión del tobillo.
- **HealthMove:** adaptación ya documentada: «Se omiten los círculos de tobillo que propone la fuente (movilidad articular aislada, igual que la muñeca).» La exclusión del catálogo v1 (especificación §4) nombra solo la muñeca.
- **Ilustración de HealthMove:** detalle del pie, flexión y extensión. Coincide.
