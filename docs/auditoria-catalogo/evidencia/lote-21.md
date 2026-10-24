# Evidencia de las fuentes · lote 21

> **Preparado por Claude** el 2026-10-24 (P29). Las fuentes se resumen con palabras propias; solo se citan frases breves (entre «»). Las descripciones de imágenes son de Claude, con D/I/N.
>
> Descargadas con `curl` el 2026-10-24 (HTTP 200), salvo F3: la página del CSP devolvió **403** al script (tres intentos, con cabeceras de navegador) y se leyó con la herramienta de lectura web de Claude Code, **que pasa el texto por un modelo auxiliar**. Sus citas de F3 son las que devolvió esa herramienta y la imagen («Toe raises diagram») no se ha visto. Los PDF se leyeron con `pdftotext -layout` y con las páginas renderizadas (R7.9).

## Fuentes abiertas

| # | Fuente | URL | Datos | Revisado |
|---|---|---|---|---|
| F1 | Programa Vivifrail (Erasmus+, Universidad Pública de Navarra; M. Izquierdo), «Programa multicomponente de ejercicio físico para la prevención de la fragilidad y el riesgo de caídas» | `https://munideporte.com/imagenes/documentacion/ficheros/0134414D.pdf` | PDF de 68 páginas, SHA-256 `ba4646b5a8b40c773e90ad6d1a9e729541cce324e6f099ef5429594d5884e197` | Páginas 49-53 y 57-61 (texto) y dibujos de 51, 57 y 60 |
| F2 | HSE (Irlanda), «Sitting exercises» (contenido del NHS adaptado), revisado el 23-02-2023 | `https://www.hse.ie/living-well/exercise/exercise-at-home/sitting-exercises/` | HTML, SHA-256 `a90d65d57f07b40c7024d732ce91f237a2cac899f5c0d6adc36a814bdaf50350` | Texto (no se revisaron las imágenes) |
| F3 | Chartered Society of Physiotherapy, «Staying strong as you age: Strength» | `https://www.csp.org.uk/public-patient/keeping-active-and-healthy/staying-healthy-you-age/staying-strong-you-age/strength` | HTML; **403 al script**; leído con la herramienta web (texto procesado) | Texto del ejercicio «Toe raises»; imagen no vista |
| F4 | Parkinson's UK, «Staying active and exercise at home» (copia de Edinburgh Parkinson's) | `https://www.edinburghparkinsons.org/wp-content/uploads/2020/06/PUK-Staying-active-and-exercise-at-home.pdf` | PDF de 8 páginas, SHA-256 `a19fce1049c42013dd20f8d1419f09afa610fa211c679ad1170d869357ab0e72` | Páginas 4 y 5, con los dibujos |

**F1, datos comunes (D):** «prevención de la fragilidad y caídas en mayores de 70 años». Por ejercicio: 1 serie de 10, descanso de 1 a 3 minutos y otra serie de 10 (fuerza); estiramientos, 10-12 s, 2-3 veces.

## 161. banda-aperturas-diagonal-sentado · F1, «5. Apertura de brazos en diagonal con una cinta elástica», p. 51

- **Texto (D):** en posición sentada; coger la cinta por los extremos y enrollarla para evitar lesiones; «A la altura de las rodillas, empiece a separar los brazos en diagonal realizando una extensión del codo». 1 serie de 10, descanso y otra de 10.
- **Dibujo (D, p. 51):** sentada, un brazo estirado hacia arriba y fuera, por encima de la cabeza, y el otro hacia abajo y fuera, la banda en diagonal entre las manos.
- **Brazo (D):** la mano de arriba pasa claramente por encima del hombro.
- **Diferencia con HealthMove:** la instrucción dice «Separa los brazos en diagonal hacia arriba y hacia fuera» y la ilustración subía **los dos brazos** por encima de la cabeza; en la fuente **un brazo sube y el otro baja** hacia la cadera contraria (D, dibujo ampliado a 130 ppp).
- **Ilustración de HealthMove:** **corregida por Claude** (`sentado.mjs`): un brazo arriba y hacia fuera, el otro abajo, la banda en diagonal. La instrucción sigue pendiente de aclarar hacia la fuente.

## 162. escurrir-toalla-sentado · F1, «3. Ejercicios de prensión en las manos», ejercicio B, p. 51

- **Texto (D):** enrollar una toalla pequeña como un tubo; cogerla por los extremos y, con las dos manos, hacer el movimiento de escurrir una toalla empapada; apretar poco a poco, tan fuerte como se pueda. Empezar por el ejercicio A (pelota) y pasar al B cuando se hagan 20 apretones fáciles seguidos. 1 serie de 10, descanso y otra de 10.
- **Dibujos (D):** una persona **de pie** apretando una pelota (A) y escurriendo la toalla (B).
- **Posición:** el título del ejercicio no dice «posición sentada» (a diferencia de los ejercicios 1, 2, 4 y 5 de la misma página); el dibujo es de pie. HealthMove lo hace sentado y no lo documenta.
- **Ilustración de HealthMove:** sentado, las manos al frente con la toalla.

## 163. estiramiento-hombro-cruzado y 164. estiramiento-hombro-cruzado-pie · F1, «Flexibilidad, 2. Estiramiento de la parte posterior del hombro», p. 60

- **Texto (D):** poner la mano en el hombro contrario con el codo pegado al pecho; con la otra mano, empujar el codo hacia la mano contraria hasta notar tensión en la parte de atrás del hombro; 10-12 s; pausa de 5 s; «De pie o sentado»; 2-3 veces y después el otro hombro.
- **Dibujos (D):** una persona de pie y otra en **silla de ruedas** haciendo el estiramiento.
- **Catálogo (P23):** dos entradas: sentada (`estiramiento-hombro-cruzado`) y de pie (`-pie`, con `equilibrio_sin_apoyo` porque las dos manos están ocupadas).
- **Ilustraciones de HealthMove:** sentado y de pie, una mano en el hombro contrario y la otra en el codo.

## 165. puntillas-talones-apoyo · F1, «Equilibrio y marcha, 3. Equilibrio punta-talón», p. 57

- **Texto (D):** de pie; mantener el equilibrio solo sobre las puntas de los pies unos segundos y después solo sobre los talones; «Si se siente más seguro, sitúese de pie apoyado en una mesa o barandilla». Contar hasta 10 de puntillas y hasta 10 de talones; descanso de 1 a 3 minutos; repetir la serie.
- **Dibujo (D):** de pie sin apoyo, de puntillas y de talones.
- **HealthMove:** «sujétate con las dos manos» a una silla o encimera: el apoyo es opcional en la fuente y no dice cuántas manos.
- **Ilustración de HealthMove:** de pie con la silla delante.

## 166. elevacion-lateral-brazos-sentado · F2, «Arm raises»

- **Texto (D):** sentado erguido, los brazos a los lados y las palmas hacia delante, hombros bajos y brazos rectos; al soltar el aire, «raise both arms out to the side and up as far as is comfortable»; al tomar aire, bajar; 5 veces.
- **Brazos (D):** los dos brazos a la vez; «as far as is comfortable» no fija la altura.
- **Catálogo:** la nota actual dice «Puede hacerse con un solo brazo»: **la fuente no lo dice**; pide los dos brazos.
- **Ilustración de HealthMove:** sentado, los brazos suben por los lados.

## 167. elevar-puntas-pies-apoyo · F3, «Toe raises» (texto procesado por la herramienta web)

- **Texto (D, citado por la herramienta):** «Stand tall holding the same support» (el del ejercicio anterior: «the back of a sturdy kitchen type chair or kitchen sink»); «raise your toes – taking your weight on your heels»; «Don't stick your bottom out»; «Hold for three seconds, then lower with control»; «Repeat 10 times». No dice cuántas manos, ni nada de las rodillas, ni una progresión de manos.
- **Población (D):** «designed especially for older people»; aviso: puede no ser adecuado para personas con riesgo de caídas o fracturas.
- **Imagen:** N (no vista).
- **Diferencias con HealthMove:** «sujétate con las dos manos» y «con las rodillas flojas» no están en la fuente. La nota del catálogo cita las fuentes de Otago para la progresión de manos, no esta.
- **Ilustración de HealthMove:** de pie con la silla delante, las puntas suben.

## 168. elevar-piernas-borde-silla · F4, «Leg raises», p. 5

- **Texto (D):** en el apartado «Sofa exercises» (cada ejercicio 30 segundos, descanso de un minuto entre ejercicios): sentado hacia la parte delantera del sofá; «Place your hands either side of you», los pies juntos en el suelo; levantar las piernas desde la rodilla todo lo posible, hasta que queden paralelas a la cadera; con una pierna si es más fácil; bajar hasta 5 cm del suelo y repetir; más fácil, dejando que los pies toquen el suelo.
- **Dibujos (D):** sentado en el borde de un sofá, las manos apoyadas en el asiento a los lados de la cadera, el tronco algo inclinado hacia atrás; las piernas pasan de abajo a estiradas en horizontal; los muslos se separan poco del asiento.
- **Población (D):** párkinson.
- **Ilustración de HealthMove:** sentado en la silla con las manos a los lados, las piernas suben.
