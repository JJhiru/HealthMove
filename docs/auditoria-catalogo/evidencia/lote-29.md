# Evidencia de las fuentes · lote 29 (reauditoría)

> **Preparado por Claude** el 2026-10-24 (P29). Reauditoría con el protocolo 1.0 de los 11 ejercicios de los lotes 1 a 5 que quedaron en REQUIERE CORRECCIONES. Las fuentes se resumen con palabras propias; solo se citan frases breves (entre «»). Las descripciones de imágenes son de Claude, con D/I/N.
>
> Descargadas con `curl` el 2026-10-24 (HTTP 200). Las páginas del NHS se leyeron del HTML y sus fotos se descargaron aparte (`assets.nhs.uk`); el PDF de Age UK Devon se leyó con `pdftotext -layout` y se renderizaron sus páginas. Ilustraciones de HealthMove renderizadas desde `ilustraciones.json`.

## Fuentes abiertas

| # | Fuente | URL | SHA-256 (prefijo) |
|---|---|---|---|
| F1 | NHS, «Sitting exercises» | `https://www.nhs.uk/live-well/exercise/strength-and-flexibility-exercises/sitting-exercises/` | `2f194882037b1137` |
| F2 | NHS, «Strength exercises» (revisada el 28-02-2024) | `https://www.nhs.uk/live-well/exercise/strength-and-flexibility-exercises/strength-exercises/` | `ad5e590897afccc9` |
| F3 | NHS, «Balance exercises» | `https://www.nhs.uk/live-well/exercise/strength-and-flexibility-exercises/balance-exercises/` | `1e6561a30d544b34` |
| F4 | NHS, «Flexibility exercises» (revisada el 20-11-2023) | `https://www.nhs.uk/live-well/exercise/strength-and-flexibility-exercises/flexibility-exercises/` | `e95677336226620b` |
| F5 | Age UK Devon, «Seated Vitality at Home» (PDF de 11 páginas dobles) | `https://www.ageuk.org.uk/bp-assets/globalassets/devon/original-blocks/activities-and-events/a4-seated-vitality-at-home.pdf` | `32ccd13cdd14d01c` |

**Motivo pendiente de los lotes 1 a 5** (tabla de cada informe antiguo): se cita en cada apartado.
**Reglas aplicables desde entonces:** Q1/P9 (apoyo con las dos manos = `ambos_brazos`; las palmas sobre el propio cuerpo = `false` con D), Q2/P10, CN-1 (P25), CN-5, R6.3 y Q5. La «decisión 4» del lote 5 quedó resuelta por Q1.

## 243. estiramiento-pecho-sentado · F1, «Chest stretch»

- **Motivo antiguo:** `brazo_sobre_hombro` y `ambos_brazos`.
- **Texto (D):** sentado erguido, sin apoyar la espalda; hombros atrás y abajo; «Extend your arms out to the side»; empujar el pecho hacia delante y arriba; 5 a 10 s; 5 veces.
- **Fotos (D):** de frente, sentado, **los dos brazos abiertos hacia los lados y hacia abajo, con las manos por debajo de la altura de los hombros** (unos 45°); de perfil, el pecho adelantado y los brazos atrás, bajos.
- **Catálogo:** `brazo_sobre_hombro` conservador («no se dice hasta dónde sube»); `ambos_brazos: true`.
- **Ilustración de HealthMove:** sentado, los brazos abiertos. (Ver la comparación al renderizar.)

## 244. giro-tronco-sentado · F1, «Upper-body twist»

- **Motivo antiguo:** decidir `ambos_brazos`.
- **Texto (D):** sentado erguido con los pies en el suelo; cruzar los brazos y llevar las manos a los hombros; sin mover la cadera, girar la parte alta del cuerpo a la izquierda, 5 s; a la derecha; 5 veces a cada lado.
- **Fotos (D):** de frente, sentado, los brazos cruzados sobre el pecho con **cada mano apoyada en el hombro contrario**; después, el tronco girado.
- **Brazos (D):** las manos descansan sobre el propio cuerpo; no soportan peso ni sujetan nada (Q1/P9: palmas sobre el propio cuerpo).
- **Catálogo:** `ambos_brazos: true` sin nota.

## 245. tobillos-punta-talon-sentado · F5, «Ankle Activator», p. 5

- **Motivo antiguo:** la instrucción 4 no estaba en la fuente; decidir `flexion_profunda_rodilla`.
- **Texto (D):** postura erguida; los pies en el suelo; sujetarse a la silla si hace falta; con el pie izquierdo, la punta donde estaba el talón y el talón donde estaba la punta, 4 veces; con el derecho, 4 veces; **«Gradually increase range of movement»**.
- **Fotos (D):** de frente, sentada; un pie adelantado con el talón en el suelo y la punta arriba; después, el pie apoyado en la punta. La rodilla no se dobla más que al estar sentado; el pie va **hacia delante**.
- **Instrucción 4** («Aumenta el recorrido poco a poco»): **sí está en la fuente**.
- **Rodilla (D, fotos):** no pasa de 90°.

## 246. inclinacion-lateral-sentado · F5, «Side Stretch», p. 7

- **Motivo antiguo:** la dosis añade una repetición.
- **Texto (D):** postura erguida; deslizar una mano por el lado de la silla hacia abajo todo lo posible; mantener la postura; no inclinarse hacia delante ni hacia atrás; hasta 10 s; volver; **repetir hacia el otro lado**. No da número de repeticiones: una vez por lado.
- **Foto (D):** sentada, inclinada de lado, una mano baja junto a la pata de la silla.
- **Catálogo:** «1 o 2 veces hacia cada lado, hasta 10 segundos»: la segunda vez no está en la fuente ni en `adaptaciones`.

## 247. estiramiento-gemelo-sentado · F5, «Calf Stretch», p. 8

- **Motivo antiguo:** `ambos_brazos`; aclarar la nota.
- **Texto (D):** postura erguida; estirar una pierna; **«Place hands on opposite knee»**; llevar la punta del pie hacia arriba, poco a poco hacia la rodilla; hasta 10 s; soltar despacio; cambiar de pierna.
- **Foto (D):** de frente, sentada, una pierna estirada con **el talón en el suelo** y la punta arriba; las dos manos sobre la otra rodilla; el tronco erguido.
- **Brazos (D):** las palmas sobre la propia rodilla (Q1/P9: `false` con D).
- **Nota del catálogo** («El talón queda en el suelo y no se inclina el tronco»): coincide con la foto (D).

## 248. abrir-cerrar-manos · F5, «Hand and Finger Flexion and Extension», p. 9

- **Motivo antiguo:** `ambos_brazos`.
- **Texto (D):** postura erguida; «Extend the arms away from the body»; cerrar los dedos en un puño; abrir y estirar los dedos; hasta 8 veces.
- **Fotos (D):** de frente, sentada, **los dos brazos a la vez**, con los codos doblados y separados del cuerpo; **las manos a la altura de la cara**, por encima de los hombros; puños y después dedos abiertos.
- **Catálogo:** `ambos_brazos: true` (D), `agarre: true` (puño sin objeto, nota del catálogo); `brazo_sobre_hombro: false`, que las fotos contradicen (las manos por encima del hombro).

## 249. banda-curl-sentado · F5, «Arm Curl», p. 15

- **Motivo antiguo:** falta un paso de la secuencia.
- **Texto (D):** sentado alto; la banda bajo uno o los dos pies; sujetarla por los dos lados; **«Draw the fists upwards towards shoulders then drop the hands to be in line with the elbows»**, con las muñecas alineadas; mantener hasta 5 s; relajar los brazos a los lados; hasta 4 veces.
- **Fotos (D):** de perfil, sentada, la banda bajo los pies; los puños suben hasta la altura del pecho y los hombros, no por encima.
- **Catálogo:** «Sube los puños hacia los hombros… Mantén hasta 5 segundos y baja los brazos despacio». **Falta bajar las manos hasta la altura de los codos antes de mantener.** `brazo_sobre_hombro` conservador.

## 250. elevacion-talones-sin-apoyo · F2, «Calf raises» (variante)

- **Motivo antiguo:** documentar la medida de seguridad.
- **Texto (D):** con las manos en el respaldo de una silla, subir los dos talones todo lo cómodo, despacio y con control; 5 veces. «To make this more difficult, perform the exercise without support.»
- **Fotos (D):** de lado, una mano en el respaldo; los talones suben.
- **HealthMove:** de pie detrás de la silla, cerca pero sin sujetarse; «Si pierdes el equilibrio, sujétate a la silla». **La silla cerca y sujetarse si se pierde el equilibrio son de HealthMove** (R6.3); la nota lo dice, pero no está en `adaptaciones`.

## 251. flexiones-pared · F2, «Wall press-up»

- **Motivo antiguo:** `ambos_brazos`.
- **Texto (D):** a un brazo de la pared; las manos planas a la altura del pecho con los dedos hacia arriba; con la espalda recta, doblar los brazos con los codos junto al cuerpo; volver; 3 series de 5 a 10.
- **Fotos (D):** las dos palmas en la pared, a la altura del pecho, el cuerpo inclinado hacia ella.
- **Catálogo:** `ambos_brazos: true` y `peso_en_manos: true`. **El motivo antiguo ya está corregido.**

## 252. equilibrio-una-pierna-pared · F3, «One-leg stand»

- **Motivo antiguo:** fijar cómo se levanta la pierna; decisión 4.
- **Texto (D):** de cara a la pared, con los brazos estirados y las yemas tocándola; levantar la pierna izquierda con la cadera nivelada y la rodilla de apoyo algo doblada; bajar el pie con suavidad; 5 a 10 s; 3 con cada pierna. **El texto no dice cómo se levanta la pierna.**
- **Fotos (D):** de lado; los brazos estirados al frente, **a la altura de los hombros**, con los dedos en la pared; **la rodilla sube por delante hasta la altura de la cadera** (muslo horizontal, rodilla doblada).
- **Cadera (I):** el muslo horizontal es como al estar sentado, no más cerca del tronco (`flexion_amplia_cadera`, §4: no).
- **Catálogo:** «Levanta la pierna izquierda» (sin decir cómo); `ambos_brazos` y `brazo_sobre_hombro` conservadores con nota.

## 253. estiramiento-gemelo-pared · F4, «Calf stretch»

- **Motivo antiguo:** `peso_en_manos`; decisión 4.
- **Texto (D):** las manos en la pared «for stability»; doblar la pierna derecha y llevar la izquierda atrás al menos un pie, recta; los dos pies planos; mantener la pierna de atrás estirada y el talón en el suelo; 3 por lado.
- **Fotos (D):** de lado, las dos manos en la pared a la altura de los hombros; el cuerpo **inclinado hacia la pared**, con parte del peso en las manos.
- **Catálogo:** `peso_en_manos: false` sin nota; `ambos_brazos` y `brazo_sobre_hombro` conservadores.
- **Manos (I):** al inclinarse hacia la pared, las manos soportan algo de peso, como en 251 (I, por la foto).
