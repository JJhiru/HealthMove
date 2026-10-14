# Revisión del catálogo

Los 220 ejercicios de `public/data/catalogo.json` (v0.3.0) están en estado `borrador`: el
etiquetado lo propuso la IA. El motor no usará ninguno fuera del modo desarrollo hasta que lo
revises.

Los 156 ejercicios añadidos en la v0.3.0 (del 65 al 220 en el archivo) salen de fuentes que los
agentes de investigación leyeron enteras (PDF o página), pero las instrucciones las redactó la IA
con palabras propias a partir de sus informes: compara cada una con la fuente. El informe, con
todas las fuentes y su nivel, está en `~/Documents/deep-research/2026-10-14-healthmove-catalogo-220.md`.

Los 29 ejercicios añadidos en la v0.2.0 se redactaron a partir de los resúmenes de agentes de
investigación, no de una lectura directa: compara cada uno con su PDF original. El informe de
fuentes está en `~/Documents/deep-research/2026-10-14-ejercicios-movilidad-reducida.md`.

## Por cada ejercicio

1. Abre `fuente.url` y busca el ejercicio.
2. Comprueba que las `instrucciones` dicen lo mismo que la fuente, con otras palabras, y que cada
   diferencia aparece en `adaptaciones`.
3. Repasa las 16 `exigencias` con las definiciones del §4 de la especificación. Ante la duda, `true`.
4. Lee `notas_etiquetado`: explican las decisiones dudosas.
5. Si estás de acuerdo, cambia `validacion.estado` a `basado_en_fuente_publica` y rellena
   `revisado_por` y `fecha_revision`.
6. Ejecuta `node scripts/validar-catalogo.mjs`.

## Decisiones dudosas que conviene mirar primero

| Ejercicio | Decisión | Motivo |
|---|---|---|
| `sentarse-levantarse` | `flexion_profunda_rodilla`, `equilibrio_sin_apoyo` | Con los pies atrasados la rodilla puede pasar de 90°, y de pie no hay apoyo |
| `mini-sentadillas` | `flexion_profunda_rodilla` | "Hasta donde te resulte cómodo" no pone límite |
| `marcha-sentado-manos-cadera` | `flexion_amplia_cadera` | Aunque el pie suba poco, el muslo se acerca al tronco |
| `estiramiento-tobillo-sentado` | `flexion_amplia_cadera` | Elevar la pierna estirada aumenta la flexión de cadera |
| `pulgar-dedos` | `agarre` | Es un cierre parcial de la mano |
| `activacion-sentado` | `esfuerzo_cardio` | La fuente dice que busca subir el pulso |
| `toalla-separar-sentado` | sin `carga_externa` | La resistencia la pone la propia persona |
| `estiramiento-gemelo-pared` | `una_pierna` | Al dar el paso atrás, el peso cae un momento sobre un pie |
| `giro-tronco-sentado` | sin `ambos_brazos` | Cruzar los brazos no es imprescindible para el giro |

## Huecos conocidos

- **Resuelto en la v0.2.0:** "Solo sentado + me cuesta cerrar la mano" tiene ahora 13 ejercicios
  para la parte principal (antes 2).
- **Resuelto en la v0.3.0:** el suelo pasa de 2 a 21 ejercicios, la banda de 2 a 20 y la pared
  de 3 a 15. Con 20 rutinas por perfil salen de media 102 ejercicios distintos (antes 49).
- **Fuentes específicas de una condición:** MS Trust (esclerosis múltiple), Sant Joan (espalda) y
  CHGUV (rodilla) aparecen en `fuente.especifica_de`. Los ejercicios son generales, pero conviene
  tenerlo en cuenta.
- **Dosis:** varias hojas de hospital dejan las repeticiones en blanco. Se usó la pauta general de
  NHS Forth Valley (de 2 a 10) y se anotó en `adaptaciones`.
- **Licencias:** solo las páginas web del NHS usan la Open Government Licence. Las hojas de
  hospitales, Age UK, MS Trust y las fuentes españolas no tienen licencia abierta. Por eso las
  instrucciones están redactadas con palabras propias y con la fuente citada, no copiadas.

## Ampliación v0.3.0: qué mirar primero

| Ejercicio | Motivo |
|---|---|
| `movilizacion-ciatico-tumbado` | Es una movilización del nervio ciático: conviene criterio sanitario |
| `psoas-borde-cama` | Una pierna cuelga fuera de la cama: riesgo de caída |
| `cruzar-pierna-tumbado`, `gluteo-pierna-cruzada-suelo`, `gluteo-figura-cuatro-tumbado`, `mariposa-suelo`, `rotacion-cadera-fuera-sentado` | Desaconsejados tras una prótesis de cadera (cruzan la pierna o rotan la cadera) |
| `nadador-boca-abajo`, `extension-lumbar-manos` | Exigentes para la zona lumbar |
| `suelo-pelvico-rapidas` | La dosis de la fuente no se pudo leer completa |
| `elevar-brazo-lado-respiracion`, `banda-aperturas-diagonal-sentado`, `elevaciones-frontales-botella` | La fuente no dice hasta qué altura sube el brazo |
| `sentadilla-sin-apoyo`, `sentarse-levantarse-sin-manos`, `de-pie-mano-preparada` | Progresiones sin apoyo (`equilibrio_sin_apoyo`) |
| Los que citan Otago (Later Life Training) o Vivifrail | Sus licencias prohíben reproducir el texto: comprueba que la redacción es propia |

- **Fuentes específicas de una condición:** 40 de los nuevos vienen de hojas para una condición
  concreta (dolor lumbar, párkinson, rehabilitación cardiaca, amputación, neurocirugía…). Está
  en `fuente.especifica_de`.
- **Variantes:** 29 de los nuevos son variantes de otros (`variante_de`): con banda, en el suelo, sin
  apoyo, etc.
- **Dosis en blanco:** cuando la hoja deja las repeticiones para el fisioterapeuta se usa una pauta
  de 5 a 10, anotada en `adaptaciones`. Cuando la dosis original no cabe en una rutina de 10 a 20
  minutos (por ejemplo 5 series de 60 segundos), se acorta y también se anota.

## Candidatos aparcados hasta ampliar el modelo

La investigación encontró 28 ejercicios más con buenas fuentes que el §4 de la especificación
excluye de la v1 porque ninguna exigencia permite filtrarlos: 8 de cuello (giros, inclinaciones,
barbilla al pecho, retracción del mentón), 8 de desplazamiento (caminar de lado, hacia atrás,
talón-punta, de puntillas, de talones, en ocho, a intervalos, caminata de equilibrio), 5 a cuatro
apoyos o de rodillas (gato-camello, bird dog, abdomen a cuatro apoyos, giro a cuatro apoyos,
sentarse sobre los talones), 5 de muñeca (círculos, flexión y extensión, giro del antebrazo,
estiramiento con las palmas juntas) y 2 que dependen de reposabrazos. Están en el informe de
investigación. Para usarlos haría falta añadir exigencias (cuello, muñeca, rodillas en el suelo,
desplazamiento) y sus preguntas en el perfil.

## Ilustraciones

Cada ejercicio tiene una ilustración generada por una figura articulada (`public/js/figura.js`) a
partir de su ficha de pose en `scripts/ilustraciones/` (sentado, de pie, tumbado y suelo). La pose
inicial va en gris, la final en color, y una flecha naranja une las dos. Los apoyos y el material
(silla, pared, cama, banda, botella, toalla) se dibujan siempre.

- Revisa la ilustración junto con el ejercicio: debe mostrar la misma postura, los mismos apoyos y
  el mismo movimiento que las instrucciones. Si no, corrige la ficha y ejecuta
  `npm run ilustraciones`.
- Los tests comprueban que cada ejercicio tiene ilustración, que la postura dibujada es una de las
  del ejercicio y que el material dibujado coincide exactamente con `recursos`.
- Manos, pies y tobillos se muestran con un detalle ampliado en lugar de la figura entera.
- Limitaciones conocidas: los giros de tronco se indican con una flecha en arco, y tumbado de lado
  se dibuja visto desde arriba (cama en planta) para que se vea el movimiento.
