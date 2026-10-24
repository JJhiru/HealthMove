# Evidencia de las fuentes · lote 28

> **Preparado por Claude** el 2026-10-24 (P29). Las fuentes se resumen con palabras propias; solo se citan frases breves (entre «»). Las descripciones de imágenes son de Claude, con D/I/N.
>
> PDF descargados con `curl` el 2026-10-24 (HTTP 200), leídos con `pdftotext -layout` y con sus páginas renderizadas. Ilustraciones de HealthMove renderizadas desde `ilustraciones.json`.

## Fuentes abiertas

| # | Fuente | URL | SHA-256 (prefijo) |
|---|---|---|---|
| F1 | St George's University Hospitals NHS FT (terapia de la mano), «Hand Exercises for Patients with Rheumatoid Arthritis» (THE_HERA_01, enero de 2020) | `https://www.stgeorges.nhs.uk/wp-content/uploads/2021/09/RA-hand-exercises.pdf` | `ee9417941ca14f89` |
| F2 | ACPRC, «How to Cope With Being Short Of Breath - Positions» (GL-01, 2011), copia de NHS Scotland (Right Decisions) | `https://rightdecisions.scot.nhs.uk/media/fibfur4q/acprc-managing-breathlessness.pdf` | `7315112c3ecbe10b` |
| F3 | Berkshire Healthcare NHS FT, «Low back pain» (BH1165n v1.0, revisado en febrero de 2026) | `https://www.berkshirehealthcare.nhs.uk/media/qwqaccdd/bh1165n-low-back-pain-v1-feb-2026.pdf` | `cea331fcddd17eba` |
| F4 | Calderdale and Huddersfield NHS FT (rehabilitación cardiaca), «Home Exercise Programme: Beginners» (cscr0004 v3) | `https://plr.cht.nhs.uk/download/1113/Home%20Exercise%20Programme%20Beginners` | `7e41c6f4915268ab` |
| F5 | Sherwood Forest Hospitals NHS FT, «Shoulder range of motion exercises» (PIL202509-04-SRME, revisado en septiembre de 2025) | `https://www.sfh-tr.nhs.uk/media/0romp4a3/pil202509-04-srme-shoulder-range-of-movement-exercises.pdf` | `c4e9938e14791e6b` |

**Poblaciones (D):** F1, artritis reumatoide en seguimiento por el equipo de terapia de la mano (`especifica_de`: «artritis reumatoide»). F2, personas con problemas pulmonares que se quedan sin aire («People with lung problems often feel short of breath»); `especifica_de` vacío. F3, dolor lumbar (`especifica_de`: «dolor lumbar»). F4, rehabilitación cardiaca (`especifica_de`: «rehabilitación cardiaca»). F5, problemas de hombro (el brazo «affected» frente al «good»); `especifica_de` vacío.

## 235. separar-juntar-dedos · F1, p. 2

- **Texto (D):** separar los dedos y el pulgar y volver a juntarlos con suavidad. Repeticiones, tiempo y veces al día **en blanco** («Do each exercise ____ times», «Hold for ____ seconds»). Antes, calentar las manos en agua tibia o con una bolsa de calor. **No dice la posición del brazo ni de la mano.**
- **Dibujo (D):** una mano con los dedos juntos y otra con los dedos separados; solo la mano, vertical, sin apoyo visible.
- **HealthMove:** «Apoya las manos en los muslos» (posición que no da la fuente); `ambos_brazos` conservador con la nota «Se cerraría con: la fuente o su imagen».
- **Ilustración de HealthMove:** mano cerrada → mano abierta. Coincide.

## 236. dedos-hacia-pulgar · F1, p. 2

- **Texto (D):** con la palma sobre una superficie plana, separar el pulgar deslizándolo y «caminar» con los demás dedos hacia el pulgar, de uno en uno. Repeticiones en blanco.
- **Dibujo (D):** dos manos apoyadas: el pulgar se separa y los dedos se acercan hacia él, con una flecha.
- **Catálogo:** adaptación «La fuente usa una superficie plana; aquí se usa el muslo».
- **Ilustración de HealthMove:** mano abierta → los dedos juntos y el pulgar separado. Coincide.

## 237. descanso-inclinado-sentado · F2, «Sitting leaning forward»

- **Texto (D):** sentado inclinado hacia delante con los codos apoyados en las rodillas; las muñecas y las manos sueltas. No da duración: se usa cuando falta el aire, hasta que se calma.
- **Dibujo (D):** sentada en una silla, el tronco muy inclinado, los codos sobre las rodillas y las manos colgando.
- **Ilustración de HealthMove:** sentado, el tronco inclinado y los antebrazos sobre los muslos. Coincide.

## 238. descanso-apoyado-pared · F2, «Standing leaning forward»

- **Texto (D):** de pie, inclinarse hacia delante apoyando los codos en una pared, un alféizar, una barandilla o una encimera; también en un bastón, un paraguas largo, un carro o un andador con ruedas.
- **Dibujo (D):** de pie, inclinada, con los antebrazos sobre el respaldo de una silla, los codos **por debajo de los hombros** y las manos juntas.
- **HealthMove:** la pared (una de las opciones de la fuente), con los antebrazos apoyados.
- **Ilustración de HealthMove:** inclinado hacia la pared con los antebrazos en vertical y las manos **por encima de la cabeza**. Más alto que el dibujo de la fuente, pero dentro de lo que permite «apoyar los codos en una pared».
- **Brazo (I):** en la pared, la altura del codo depende de cómo se apoye; el dibujo de la fuente (respaldo) no sirve para la pared.

## 239. descanso-espalda-pared · F2, «Standing leaning back or sideways»

- **Texto (D):** apoyarse de espaldas o de lado en una pared, con los pies un poco separados y a unos 30 cm; dejar las manos colgando a los lados o en los bolsillos, o apoyarlas en las trabillas, la cintura o el asa del bolso.
- **Dibujo (D):** de pie, la espalda apoyada en la pared, los pies separados de ella; las manos juntas delante, a la altura del cinturón.
- **HealthMove:** solo de espaldas y con los brazos a los lados (subconjunto de la fuente).
- **Ilustración de HealthMove:** de perfil, la espalda en la pared y los pies algo separados. Coincide.

## 240. circulos-grandes-brazos-sentado · F4, «Arm Circles», p. 6

- **Texto (D):** sentado en el tercio delantero de la silla; dibujar círculos hacia delante con un brazo y después con el otro, tan grandes como se pueda; 4 veces en cada sentido. (Calentamiento del programa.)
- **Dibujo (D):** sentado; un brazo estirado por encima de la cabeza; en el otro dibujo, la mano a la altura del hombro.
- **Catálogo:** nota «Si cansa, la fuente propone círculos más pequeños o descansar». **Consta** en las instrucciones generales del folleto (D: «slow down, do smaller movements or rest»; corregido tras DS-489).
- **Ilustración de HealthMove:** sentado, un brazo estirado con un círculo alrededor del hombro. Coincide.

## 241. abrazar-ambas-rodillas · F3, «2. Knee to chest stretch»

- **Texto (D):** tumbado boca arriba; llevar con suavidad las dos rodillas hacia el pecho, **sujetándolas por detrás de los muslos**, hasta notar un estiramiento cómodo en la zona lumbar; mantener. «Repetitions: 1-20», dos veces al día (mañana y tarde). Ejercicios suaves, poco y a menudo; pueden molestar, pero no deben aumentar mucho los síntomas.
- **Fotos (D):** tumbado; las dos rodillas dobladas hacia el pecho y las manos detrás de los muslos.
- **HealthMove:** añade «Baja los pies despacio, de uno en uno», que **no está en la fuente** (consejo de HealthMove sin documentar; R6.3). La dosis «Hasta 20 veces, según te encuentres» no dice las dos veces al día.
- **Ilustración de HealthMove:** tumbado en la cama, las rodillas suben hacia el pecho. Coincide.

## 242. elevacion-pasiva-brazo-tumbado · F5, «Passive elevation exercise»

- **Texto (D):** tumbado boca arriba con la cabeza y el cuello cómodos sobre almohadas; **«Use your good hand to hold or support your affected arm»**; con la mano buena, subir el brazo afectado por encima de la cabeza todo lo que permita la comodidad; es normal una molestia leve de estiramiento; 10 a 12 veces o según la comodidad; varias veces al día.
- **Imagen:** N (el folleto no tiene dibujos; remite a un vídeo).
- **Mano (I):** «hold or support»: puede sujetar o solo sostener.
- **Catálogo:** `agarre: true` sin nota.
- **Ilustración de HealthMove:** tumbado, un brazo lleva al otro por encima de la cabeza. Coincide.
