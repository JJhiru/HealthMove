# Evidencia de las fuentes · lote 11

> **Preparado por Claude** el 2026-10-24 para la auditoría del lote 11 (encargo P29). Es la parte de la auditoría que DeepSeek no puede hacer: abrir las fuentes, leer el texto y mirar las imágenes. Las fuentes no tienen licencia abierta: se resumen con palabras propias y solo se citan frases breves (entre «»). Las descripciones de imágenes son de Claude, con su grado de evidencia (D directa, I indicio, N no determinable).
>
> Las fuentes se descargaron con `curl` el 2026-10-24 (HTTP 200) a una carpeta fuera del repositorio. Los PDF se leyeron con `pdftotext -layout` y las páginas con dibujos o fotos se renderizaron con `pdftoppm` y se miraron (R7.9). Las ilustraciones de HealthMove se renderizaron desde `public/data/ilustraciones.json` con `public/js/figura.js`.

## Fuentes abiertas

| # | Fuente | URL | Datos | Revisado |
|---|---|---|---|---|
| F1 | Mersey and West Lancashire Teaching Hospitals NHS Trust (St Helens), «Chair based exercises», MWL2083 v001, revisión 01/12/2026, Critical Care and Surgery Therapy Team | `https://sthk.merseywestlancs.nhs.uk/media/.leaflets/66016bfe111f20.73905449.pdf` | PDF de 4 páginas (la 1 es la portada; la numeración impresa empieza en la 2). SHA-256 `f8f8fe2fcff2f9df8cf118f8747a56e61df4c99ce80bc6b6443595fa3f02ac6f` | Texto y fotos de las páginas 2 a 4 |
| F2 | St Helens Reablement Team (Terapia Ocupacional), «Balance exercises (low level)», STHK1446 v1 | `https://sthk.merseywestlancs.nhs.uk/leaflets/download/sthk-606eccc802c744.80446620` | PDF de 4 páginas. SHA-256 `d3e950136dc5ed3640452dbeb28954a066594ce53395ae54382d3b457e4883c9` | Texto y fotos de las páginas 2 y 3 |
| F3 | NHS Forth Valley, «Bed & Seated Exercises. A resource for care homes in NHS Forth Valley» | `https://nhsforthvalley.com/wp-content/uploads/2021/08/2Seated-Bed-Exercises.pdf` | PDF de 4 páginas. SHA-256 `d18e24d920faf5e3a6c867660162f8935ef59e0253adbe1a3f0aae1051fa7cab` | Texto y dibujos de las páginas 2 a 4 |
| F4 | NHS Fife, «Home GRASP Participant Manual» (programa GRASP, University of British Columbia) | `https://www.nhsfife.org/media/39645/home-grasp-version-1.pdf` | PDF de 56 páginas. SHA-256 `a12336373e504e9bb39c166b75190780573acbd6f7686f13d9f60abce8ad81eb` | Texto de la introducción y página 49 (ejercicio 35) con sus tres fotos |
| F5 | NHS Fife, Learning Disability Physiotherapy Service, «Strength and Balance Retraining Exercise Programme» (lectura fácil) | `https://www.nhsfife.org/media/33404/easy-read-strength-and-balance.pdf` | PDF de 7 páginas. SHA-256 `822ff298da8af8c9fa85734d352d93ac284c513f21dd5261e38a7a11dd80ce10` | Texto completo y página 6 con sus fotos |
| F6 | NHS Fife, Learning Disability Physiotherapy Service, «Back Pain Advice» (S. Dobbs, 21-05-2020) | `https://www.nhsfife.org/media/33403/back-pain-advice-updated-21052020.pdf` | PDF de 5 páginas. SHA-256 `a39de9b6aabec7b005da111a75b3a4e98bbfcce6e751db83d76cbcbbd617d373` | Texto completo y página 3 (ejercicio 2) con sus tres fotos |
| F7 | NHS Fife Health and Social Care, Podiatry, «Calf stretches» (V1R3, revisada en enero de 2024) | `https://www.nhsfife.org/services/all-services/patient-advice/calf-stretches/` | HTML. SHA-256 `e6f8248f8d657e4520e95cf10f5b3834fd86dbc8774e1e19972fbe4b86be8e97` | Texto y la única foto de la página (`img_5751.jpeg`) |

## 70. elevacion-pierna-recta-sentado · F1, «Straight leg raise», p. 4 del PDF (impresa «Page 3»)

- **Texto (D):** estirar la pierna al frente con la rodilla «as straight as possible»; con la pierna recta, subirla y bajarla; repetir con la otra pierna; «Complete 10 times with each leg». Cabecera del folleto: hacer todos los ejercicios sentado en «a safe and stable chair».
- **Foto (D):** mujer sentada en el borde de una camilla de tratamiento, tronco erguido, manos apoyadas en el borde del asiento a los lados de la cadera; una pierna estirada al frente, elevada con el pie a la altura aproximada del asiento; flecha vertical de doble sentido junto al pie. La otra pierna, doblada con el pie en el suelo.
- **Manos (I):** en la foto descansan en el borde del asiento; no se ve si lo agarran. El texto no dice nada de las manos.
- **Muslo:** la pierna elevada recta separa el muslo del asiento (I por la foto: el muslo sube un poco respecto al asiento).
- **Población:** el folleto no declara grupo (es del equipo de cuidados críticos y cirugía).
- **Ilustración de HealthMove:** sentado en una silla, pierna estirada que sube desde una posición algo más baja (gris) hasta la horizontal. Coincide.

## 71. apretar-gluteos-sentado · F1, «Glute squeeze», p. 3 del PDF (impresa «Page 2»)

- **Texto (D):** «In an upright seated position», apretar los glúteos, mantener 5 segundos y soltar; «Complete this 10 times».
- **Foto (D):** mujer sentada en un sillón con reposabrazos, espalda en el respaldo, antebrazos y manos apoyados sobre los reposabrazos. Pies en el suelo.
- **Manos (D por la foto, sin texto):** en reposo sobre los reposabrazos. El texto no los pide; el ejercicio no los usa.
- **Población:** no declarada.
- **Ilustración de HealthMove:** sentado en una silla sin reposabrazos, brazos abajo, la zona de los glúteos marcada. Coincide en lo que importa (sentado, sin movimiento).

## 72. de-pie-mano-preparada · F2, «Standing unsupported feet apart, eyes open», p. 3 del PDF

- **Texto (D):** con la mano «Hovering… over a sturdy surface», separar los pies y estar de pie «unsupported for 1 minute»; aumentar el tiempo cada vez si se puede. El folleto tiene al lado una versión con los ojos cerrados (no incorporada).
- **Foto (D):** mujer de pie, de frente, pies separados; un brazo junto al cuerpo y el otro con la mano justo encima de una mesa alta, sin tocarla.
- **Objetivo declarado (D):** «designed to improve your standing balance». No declara población.
- **Ilustración de HealthMove:** de pie junto a una silla, con la mano sobre el respaldo. A 60 ppp no se distingue si la mano toca o queda encima. HealthMove usa una silla; la fuente, «a sturdy surface» (en la foto, una mesa alta).

## 73. balanceo-brazos-sentado · F3, «Arm Swings», p. 3

- **Texto (D):** sentarse erguido «away from the back of the chair»; pies planos «below your knees»; doblar los codos y balancear los brazos «from the shoulder»; ritmo cómodo; «Continue for 30 seconds».
- **Dibujo (D):** mujer sentada sin apoyar la espalda, codos doblados, manos abiertas a la altura del pecho o algo por debajo; flechas curvas junto a las manos. No llegan por encima del hombro en el dibujo; el texto no fija hasta dónde suben (N para la altura máxima).
- **Población (D):** «A resource for care homes» (residencias). Guía de dosis del folleto (D, p. 2): empezar con 2 o 3 repeticiones y subir hasta 10 en un par de semanas.
- **Ilustración de HealthMove:** sentado, codo doblado, el brazo balancea desde el hombro con la mano por debajo del hombro. Coincide.

## 74. elevar-talones-sentado · F3, «Heel raises (seated)», p. 4

- **Texto (D):** sentarse erguido «away from the back of your chair»; levantar los talones; «Make sure your toes remain on the ground»; «Repeat 10 times».
- **Dibujo (D):** detalle de las piernas sentadas en una silla, talones levantados, puntas en el suelo, flecha hacia arriba.
- **Población:** como 73.
- **Ilustración de HealthMove:** sentado, talón que sube. Coincide.

## 75. secarse-toalla-sentado · F4, ejercicio 35 «Drying off», p. 49 del PDF (impresa 48)

- **Texto (D):** poner la toalla en la mesa y doblarla a lo largo; poner una mano en cada extremo y llevarla «over your head so it touches your neck»; moverla «back and forth across your neck and your shoulders 10 times, as if you are drying after a shower»; «Repeat 5 times». Consejo: usar la mano afectada por el ictus todo lo posible.
- **Fotos (D):**
  1. sentada a una mesa, los dos brazos al frente sujetando la toalla extendida con las dos manos cerradas;
  2. la toalla por detrás de la cabeza y del cuello, las dos manos a los lados de la cabeza, a la altura de las orejas (D: la mano por encima del hombro); los codos, separados, más o menos a la altura de los hombros (I);
  3. la toalla detrás del cuello, las manos a la altura de los hombros, moviéndola.
- **Población (D):** personas que han tenido un ictus («stroke-affected arm», introducción). Licencia: el catálogo dice «Todos los derechos reservados».
- **Diferencias con HealthMove:** la fuente coge la toalla de la mesa (ya anotado en `notas_etiquetado`); la fuente dice «touches your neck» y «across your neck and your shoulders»; HealthMove dice «hasta dejarla en la parte alta de la espalda» y «sobre los hombros».
- **Ilustración de HealthMove:** de frente, sentado, la toalla por encima de la cabeza sujeta con las dos manos. Coincide con la foto 1-2 (la subida); no muestra el movimiento por detrás del cuello.

## 76. paso-atras-apoyo · F5, «6. Step Backs», p. 6

- **Texto (D):** «Stand facing the kitchen worktop»; «Hold on with both hands»; dar un paso atrás con un pie y volver; «Do this 10 times»; repetir con la otra pierna.
- **Foto (D):** vista lateral, de pie frente a una encimera, la mano visible apoyada en la encimera; una pierna atrás con el pie en el suelo; flecha horizontal de doble sentido en el pie. La otra mano no se ve (queda detrás del cuerpo en la vista lateral).
- **Población (D):** servicio de fisioterapia para personas con discapacidad intelectual; formato de lectura fácil.
- **Ilustración de HealthMove:** de pie frente al respaldo de una silla, una mano en el respaldo, una pierna atrás. Coincide. HealthMove permite «una encimera o el respaldo de una silla firme»; la fuente dice «kitchen worktop».

## 77. abrazar-rodilla-tumbado · F6, «Exercise 2 · Knee Hug», p. 3

- **Texto (D):** tumbado boca arriba, rodillas dobladas, pies en la cama; llevar UNA rodilla al pecho «- you can use your hands to help»; mantener 5 segundos; bajar despacio; lo mismo con la otra; «Repeat 5 times»; «Try BOTH knees together if you can». Aviso general (D, p. 1): si los ejercicios empeoran el dolor o causan uno nuevo, parar y consultar al fisioterapeuta.
- **Fotos (D):**
  1. tumbado boca arriba en una camilla, rodillas dobladas, pies apoyados, brazos a los lados;
  2. una rodilla junto al pecho, sujeta con las dos manos entrelazadas por delante de la espinilla;
  3. las dos rodillas al pecho, abrazadas, sobre una colchoneta en el suelo.
- **Manos:** el texto las hace **opcionales** («you can use your hands to help»); la foto 2 las muestra sujetando la rodilla.
- **Rodilla y cadera (D, foto 2):** la rodilla queda muy doblada y el muslo pegado al tronco.
- **Población (D):** «Back Pain Advice» del servicio de fisioterapia de discapacidad intelectual.
- **Catálogo:** es `variante_de: rodilla-al-pecho-tumbado` (Sant Joan d'Alacant, sin manos). HealthMove pide abrazar la rodilla con las manos; omite la versión con las dos rodillas.
- **Ilustración de HealthMove:** tumbado en la cama, una rodilla sube hacia el pecho y la mano llega a la rodilla. Coincide con la foto 2.

## 78. gemelo-banda-suelo · F7, tercer estiramiento (sin título)

- **Texto (D):** «Sit on the floor or bed with your back straight against the wall and your legs straight out in front of you»; poner una banda alrededor del pie; tirar suavemente y notar el estiramiento en la pantorrilla; «Do not allow your knee to bend»; mantener «approximately 20- 30s seconds»; «Repeat 3-5 times each leg».
- **Imagen:** la única foto de la página corresponde al **primer** estiramiento (de pie, con las manos en el respaldo de una silla y un pie sobre un cojín de espuma). **Este ejercicio no tiene imagen** (N para todo lo que el texto no dice).
- **Manos (I):** «pull the band» exige sujetar la banda; el texto no dice si con una o con dos manos.
- **Población:** podología; no declara grupo.
- **Diferencias con HealthMove:** la fuente permite «floor or bed»; HealthMove, solo el suelo (posición `suelo`, recurso `pared`).
- **Ilustración de HealthMove:** sentado en el suelo con la espalda en la pared, piernas estiradas, banda del pie a las manos (dos manos). Coincide con el texto.
