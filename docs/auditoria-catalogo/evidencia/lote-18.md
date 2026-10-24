# Evidencia de las fuentes · lote 18

> **Preparado por Claude** el 2026-10-24 (P29). La guía es una publicación del Gobierno de EE. UU. (NIA, NIH); se resume con palabras propias y solo se citan frases breves (entre «»). Las descripciones de imágenes son de Claude, con D/I/N.
>
> Descargada con `curl` el 2026-10-24 (HTTP 200), leída página a página con `pdftotext -layout` y con las 8 páginas de los ejercicios renderizadas (R7.9). Ilustraciones de HealthMove renderizadas desde `ilustraciones.json`.

## Fuente abierta

| # | Fuente | URL | Datos | Revisado |
|---|---|---|---|---|
| F1 | National Institute on Aging (NIH), «Exercise & Physical Activity: Your Everyday Guide from the National Institute on Aging» (copia de la Universidad de Missouri, Geriatric Toolkit) | `https://geriatrictoolkit.missouri.edu/consumer/Exercise_and_Physical_ActivityYour_Everyday_Guide_from_The_NIA.pdf` | PDF de 124 páginas, SHA-256 `62876c2cee2eee05c80981c80dc120029574218772d34c7af346c7ad9d7282f5` | Páginas 54-57 y 72-87 (texto), y fotos de las páginas 56, 74-76, 78, 80, 86 y 87 |

**Datos comunes (D):**
- **Población:** el NIA busca «improve the health and well-being of older adults» (introducción): personas mayores.
- **Estiramientos (p. 72):** cada uno de 3 a 5 veces por sesión; hasta donde se pueda sin dolor, mantener 10 a 30 segundos; respirar con normalidad; sin rebotes; parar ante un dolor agudo o punzante (DG-6).
- **Fuerza (p. 56):** 10 a 15 repeticiones, descanso y otras 10 a 15.
- Varios ejercicios avisan de consultar al médico tras una operación de cadera o espalda, o si hay problemas de hombro (DG-6, consejo de clase 2).

## 135. flexion-tronco-delante-sentado · «Back 1», p. 78 del PDF (impresa 76)

- **Texto (D):** sentado hacia el borde de una silla firme sin brazos, pies apoyados al ancho de los hombros; inclinarse despacio desde la cadera con la espalda y el cuello rectos; relajar un poco el cuello y bajar la barbilla; seguir inclinándose y deslizar las manos por las piernas hacia las espinillas hasta notar el estiramiento; 10 a 30 s; volver despacio; 3 a 5 veces. Progresión: inclinarse más hasta tocar los talones. Aviso: consultar tras cirugía de cadera o espalda.
- **Foto (D):** sentado en una silla, el tronco muy inclinado hacia delante, las manos bajando por las espinillas, la cabeza baja.
- **Cuello:** la fuente pide relajar el cuello y bajar la barbilla; HealthMove no lo recoge (exclusión del cuello).
- **Ilustración de HealthMove:** sentado, el tronco se inclina hacia delante. Coincide.

## 136. estiramiento-espalda-alta-sentado · «Upper Back», p. 80 (impresa 78)

- **Texto (D):** sentado en una silla firme sin brazos; los brazos al frente a la altura de los hombros «with palms facing outward»; hombros relajados, el tronco quieto, alcanzar hacia delante con las manos; 10 a 30 s; 3 a 5 veces. **Progresión:** «cross your arms and interlace fingers».
- **Fotos (D):** sentada, los brazos estirados al frente a la altura de los hombros, las manos **sin entrelazar**; en un recuadro aparte, la progresión con los dedos entrelazados.
- **HealthMove:** «entrelaza las manos al frente»: usa la **progresión** como versión de base. Con la versión base no hay agarre (palmas hacia fuera, manos separadas).
- **Ilustración de HealthMove:** sentado, los brazos al frente a la altura de los hombros. Coincide con las dos versiones.

## 137. extension-codo-botella-sentado · «Elbow Extension», p. 56 (impresa 54)

- **Texto (D):** de pie o sentado en una silla firme sin brazos; el peso en una mano, subir ese brazo hacia el techo y sujetarlo por debajo del codo con la otra mano; doblar el codo llevando el peso hacia el hombro, 1 s, y estirar sin bloquear el codo; 10 a 15 veces con cada brazo, y otras 10 a 15. Si es difícil sujetar pesas, usar muñequeras lastradas.
- **Fotos (D):** de pie, el brazo vertical por encima de la cabeza con la pesa; la otra mano sujeta el brazo por debajo del codo.
- **HealthMove:** sentado (una de las dos posiciones de la fuente); botella en lugar de pesa (recurso `peso_ligero`).
- **Ilustración de HealthMove:** sentado, el brazo arriba con la botella y la otra mano en el codo. Coincide.

## 138. estiramiento-cuadriceps-pie · «Thigh, Standing», p. 87 (impresa 85)

- **Texto (D):** de pie detrás de una silla firme; sujetarse a la silla con una mano «for balance»; doblar la pierna contraria hacia atrás y coger el pie con la mano de ese lado, con la rodilla apuntando al suelo; si no se llega, pasar una banda, cinturón o toalla por el pie y sujetar los extremos; tirar suavemente; 10 a 30 s; 3 a 5 veces con cada pierna. Aviso: consultar tras cirugía de cadera o espalda.
- **Foto (D):** de pie detrás de la silla, una mano en el respaldo, la otra mano sujeta el pie por detrás; la rodilla muy doblada.
- **Mano (D):** la mano coge el pie por detrás del cuerpo: es la clase de CN-4 (aplazada, `true` conservador provisional).
- **Ilustración de HealthMove:** de pie con la silla, la pierna doblada hacia atrás y la mano en el pie. Coincide.

## 139. estiramiento-hombros-espalda-pared · «Shoulder», p. 74 (impresa 72)

- **Texto (D):** de pie con la espalda contra una pared, pies al ancho de los hombros y brazos a la altura de los hombros; doblar los codos para que los dedos apunten al techo y toquen la pared detrás; 10 a 30 s; después dejar que los brazos rueden hacia delante, con los codos doblados, hasta que apunten al suelo y toquen la pared; alternar; 3 a 5 veces. Parar ante dolor agudo.
- **Fotos (D):** de pie contra la pared, los brazos en «candelabro» (codos a la altura de los hombros, manos arriba) y en la posición contraria (manos hacia abajo).
- **Ilustración de HealthMove:** de pie contra la pared, los brazos en candelabro. Coincide.

## 140. subir-manos-pared · «Upper Body», p. 76 (impresa 74)

- **Texto (D):** de cara a la pared, algo más lejos que la longitud del brazo; inclinarse y apoyar las palmas en la pared a la altura de los hombros; con la espalda recta, subir las manos «walk your hands up» hasta tener los brazos por encima de la cabeza; mantener 10 a 30 s; bajar despacio; 3 a 5 veces.
- **Fotos (D):** inclinada hacia la pared, las palmas apoyadas; en la segunda, los brazos estirados por encima de la cabeza contra la pared.
- **Manos (I):** al inclinarse, las manos soportan parte del peso; están abiertas sobre la pared.
- **Ilustración de HealthMove:** de cara a la pared, las manos suben por encima de la cabeza. Coincide.

## 141. toalla-detras-espalda-sentado · «Shoulder and Upper Arm», p. 75 (impresa 73)

- **Texto (D):** de pie, pies al ancho de los hombros; sujetar un extremo de una toalla con la mano derecha; subir y doblar el brazo derecho dejando caer la toalla por la espalda; con la mano izquierda, coger la toalla por detrás de la zona lumbar; tirar hacia abajo para estirar el hombro derecho; 3 a 5 veces; cambiar. Aviso: consultar si hay problemas de hombro.
- **Fotos (D):** de pie, de espaldas: una mano arriba, detrás de la cabeza, y la otra detrás de la cintura, sujetando la toalla.
- **HealthMove:** sentado (adaptación documentada: «La fuente lo hace de pie; sentado no exige equilibrio»).
- **Ilustración de HealthMove:** sentado, una mano detrás de la cabeza y otra detrás de la espalda con la toalla. Coincide.

## 142. cuadriceps-lado-suelo · «Thigh, Floor», p. 86 (impresa 84)

- **Texto (D):** tumbado de lado con las piernas estiradas y las rodillas juntas; la cabeza apoyada en el brazo; doblar la rodilla de arriba, llevar la mano hacia atrás y coger el empeine; si no se llega, una banda, cinturón o toalla; tirar suavemente; 10 a 30 s; 3 a 5 veces con cada pierna. Remite a la versión de pie si cuesta bajar al suelo, y a las instrucciones para bajar y levantarse del suelo (pp. 80-81).
- **Foto (D):** tumbada de lado en una colchoneta, la cabeza sobre el brazo de abajo, estirado por encima de la cabeza; la mano de arriba sujeta el pie por detrás.
- **Brazo de abajo (D):** estirado por encima de la cabeza, bajo la cabeza.
- **Mano de arriba:** coge el pie por detrás (clase de CN-4).
- **Ilustración de HealthMove:** tumbado de lado, la rodilla doblada y la mano hacia el pie. Coincide.
