# Evidencia de las fuentes · lote 15

> **Preparado por Claude** el 2026-10-24 (P29). Las fuentes se resumen con palabras propias; solo se citan frases breves (entre «»). Las descripciones de imágenes son de Claude, con D/I/N.
>
> Descargadas con `curl` el 2026-10-24 (HTTP 200), leídas con `pdftotext -layout` y con las páginas de los ejercicios renderizadas (R7.9). Ilustraciones de HealthMove renderizadas desde `ilustraciones.json`.

## Fuentes abiertas

| # | Fuente | URL | Datos | Revisado |
|---|---|---|---|---|
| F1 | Hospital Clínico San Carlos, «Guía práctica de recomendaciones para pacientes: Ejercicios de Rodilla», DI-FISI-027-2025, diciembre de 2025 | `https://www.comunidad.madrid/hospital/clinicosancarlos/sites/clinicosancarlos/files/inline-files/DI-FSI-027-2025.%20EjerciciosRodilla%20v1.pdf` | PDF de 18 páginas, SHA-256 `77ae432cff4acce48caadc2153b2ca63c0b151c3612a5b1ef0bfcc39c887e10f` | Texto completo; fotos de las páginas 7, 10, 14, 15 y 17 |
| F2 | Consorcio Hospital General Universitario de Valencia (Centro de Salud Fuensanta), «10 ejercicios para la rodilla» | `https://chguv.san.gva.es/documents/1324933/1356112/5.RODILLA.pdf/e68c6e67-e516-4365-9f8f-505613994f10` | PDF de 3 páginas, SHA-256 `764d4226e74b45e19f46912bddffec7598b986df33f79809abbb3a825f66a1ba` | Texto y dibujos de la página 1 |
| F3 | Ministerio de Sanidad y semFYC, «Prevenir las caídas es posible» (2016) | `https://estilosdevidasaludable.sanidad.gob.es/seguridad/pdf/Seguridad_Lesiones2.pdf` | PDF de 2 páginas, SHA-256 `5b39a3679bc1e098d18ef1d3f414faeb3a79c6cd41b6ffeabb4cd310ff5ac2ea` | Texto y figuras |

**F1, datos comunes (D, p. 3):** complemento para hacer en casa; el fisioterapeuta indica qué ejercicios hacer «en función de su patología» (DG-6). Regla general: en los de movilidad, empezar con 5 repeticiones e ir subiendo hasta 3 veces más si no hay fatiga ni dolor; en los estiramientos, mantener 30 a 60 segundos y repetir 5 veces (hasta 8). «ningún ejercicio debe provocar dolor». Estiramientos (p. 14): suaves, hasta notar tensión, no dolor. Población: pacientes de rodilla de la Unidad de Fisioterapia (no hay frase de población más concreta que el título).

## 110. elevar-rodilla-mantenida-sentado · F2, n.º 2 «Sentados, flexionar rodilla y cadera»

- **Texto (D):** sentado recto en una silla; levantar la punta del pie con la rodilla doblada; elevar la rodilla y mantenerla en el aire 5 segundos; bajar despacio. No da repeticiones.
- **Dibujos (D):** 1, sentado, el pie con la punta levantada; 2, la rodilla elevada por encima del asiento.
- **Cadera (I):** la rodilla sube por encima del asiento: el muslo se acerca al tronco más que al estar sentado.
- **Población:** el folleto es de ejercicios para la rodilla; no declara un grupo más concreto. `especifica_de` actual: «rodilla».
- **Catálogo:** la dosis «De 2 a 10 veces» viene de otra fuente (NHS Forth Valley), documentada como adaptación.
- **Ilustración de HealthMove:** sentado, la rodilla y el pie suben. Coincide.

## 111. flexion-alterna-piernas-de-pie · F3, «Flexionar de forma alterna las piernas estando de pie»

- **Texto (D):** de pie, flexionar una pierna mientras la otra sigue en el suelo; mantener la pierna elevada «unos 5 segundos»; bajar y cambiar. «Si se siente más seguro, sitúese de pie apoyado al lado de una mesa, silla firme o barandilla». «Mantenga la posición contando hasta 10 para cada una de las piernas. Descanse de 1 a 3 minutos y repita» (el texto da dos tiempos: 5 segundos y contar hasta 10).
- **Figura (D):** figura de pie, una pierna doblada con la rodilla hacia delante, sin apoyo.
- **Apoyo:** opcional en la fuente; HealthMove lo hace siempre (adaptación ya documentada). Con «apóyate», la mano se apoya (Q2).
- **Población:** personas mayores, prevención de caídas (el folleto no lo dice con esas palabras; el título es «Prevenir las caídas es posible»).
- **Ilustración de HealthMove:** de perfil, la mano en el respaldo de una silla delante. **Antes:** el pie de la pierna elevada quedaba apoyado sobre el asiento, como si se subiera el pie a la silla. **Corregida por Claude** (`depie.mjs`): la rodilla sube y el pie queda en el aire, sin tocar la silla.

## 112. toalla-entre-rodillas-sentado · F1, «Add sentado», p. 6

- **Texto (D):** sentado en silla, rodillas a 90°, plantas de los pies pegadas al suelo; pelota de tenis o toalla enrollada entre las rodillas; apretar las dos rodillas y mantener 3 a 5 segundos.
- **Foto (D):** sentada, una pelota azul entre las rodillas, manos sobre los muslos.
- **Dosis:** la regla general de F1 es empezar con 5 repeticiones (p. 3). La adaptación actual dice que la fuente no indica repeticiones: **es inexacta**.
- **Ilustración de HealthMove:** de frente, sentado, con la toalla entre las rodillas. Coincide.

## 113. estiramiento-soleo-pared · F1, «Tríceps sural, b) sóleo», p. 14

- **Texto (D):** de pie, la pierna a estirar retrasada y «ligeramente en flexión»; la otra delante con la rodilla doblada, como dando un paso largo; sin despegar el talón de detrás, llevar el peso a la pierna de delante. Regla general: 30 a 60 s, 5 veces.
- **Foto (D):** de frente a una pared, **las dos manos apoyadas en la pared**, la pierna de atrás con la rodilla algo doblada. El texto no menciona la pared ni las manos.
- **Catálogo:** `variante_de: estiramiento-gemelo-pared`.
- **Ilustración de HealthMove:** de perfil, la mano en la pared, la pierna de atrás doblada. Coincide.

## 114. estiramiento-lateral-muslo-pared · F1, «Tensor de la Fascia Lata», pp. 13-14

- **Texto (D):** de pie, apoyado en una pared; llevar la pierna a estirar por detrás de la otra y poner los pies en paralelo; inclinarse dejando caer la cadera hacia la pared. Para más estiramiento, elevar e inclinar el brazo del lado que se estira, formando una «C» con el cuerpo.
- **Fotos (D):** 1, de lado junto a la pared, **una mano apoyada en la pared a la altura del hombro**, las piernas cruzadas; 2, la versión con el brazo por encima de la cabeza.
- **Tronco (D):** la cadera cae hacia la pared y el tronco se inclina hacia el lado.
- **Ilustración de HealthMove:** de frente, junto a la pared. **Antes:** la mano en la pared quedaba a la altura de la cabeza (por encima del hombro, cuando `brazo_sobre_hombro` es `false`). **Corregida por Claude** (`depie.mjs`): la mano queda en la pared por debajo del hombro, como en la foto 1.

## 115. psoas-borde-cama · F1, «Psoas», p. 16

- **Texto (D):** boca arriba, una pierna flexionada llevando la rodilla hacia el pecho; sacar por fuera de la cama la pierna a estirar y dejarla caer por su propio peso. El texto no dice si se sujeta la rodilla.
- **Foto (D):** tumbada en una camilla alta, junto al borde; una rodilla llevada al pecho **sujeta con las manos**; la otra pierna cuelga por fuera.
- **Rodilla y cadera (D, foto):** la rodilla de la pierna doblada queda muy flexionada y el muslo pegado al tronco.
- **Catálogo:** nota de HealthMove sobre el riesgo de caer de la cama (no está en la fuente; nota no visible).
- **Ilustración de HealthMove:** tumbado, una rodilla hacia el pecho y la otra pierna cae por el borde. Coincide (las manos no se distinguen).

## 116. extension-cadera-boca-abajo · F1, «Extensores de cadera tumbado», p. 9

- **Texto (D):** boca abajo, con almohada o cojín bajo el ombligo, «Frente apoyada sobre las manos»; levantar toda la pierna sin doblarla; mantener 3 segundos y volver.
- **Fotos (D):** boca abajo en una camilla, la frente sobre las manos (codos doblados hacia los lados, manos bajo la frente), una pierna estirada elevada.
- **Brazos (I):** las manos quedan bajo la frente, a la altura de la cabeza; tumbado no se puede comparar bien con la altura del hombro (CN-1).
- **Catálogo:** posición `suelo` (la guía usa una camilla); la almohada se omite (adaptación documentada).
- **Ilustración de HealthMove:** boca abajo, una pierna estirada sube. Coincide (los brazos no se distinguen).

## 117. cuadriceps-boca-abajo-toalla · F1, «Cuádriceps, a) tumbado», p. 13

- **Texto (D):** boca abajo, llevar el talón al glúteo; con la mano del mismo lado, coger el pie o el tobillo; si no llega, usar una toalla. Regla general: 30 a 60 s, 5 veces.
- **Fotos (D):** boca abajo en una camilla; la mano del mismo lado sujeta el tobillo por detrás, con la rodilla muy doblada.
- **Mano (I):** la mano va hacia atrás, por detrás del cuerpo, hasta el pie.
- **Ilustración de HealthMove:** boca abajo, el brazo hacia atrás hasta el pie. Coincide.
