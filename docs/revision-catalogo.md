# Revisión del catálogo

Los 64 ejercicios de `public/data/catalogo.json` (v0.2.0) están en estado `borrador`: el etiquetado
lo propuso la IA. El motor no usará ninguno fuera del modo desarrollo hasta que lo revises.

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
- **Suelo:** solo hay 2 variantes (puente y báscula pélvica, de MS Trust).
- **Fuentes específicas de una condición:** MS Trust (esclerosis múltiple), Sant Joan (espalda) y
  CHGUV (rodilla) aparecen en `fuente.especifica_de`. Los ejercicios son generales, pero conviene
  tenerlo en cuenta.
- **Dosis:** varias hojas de hospital dejan las repeticiones en blanco. Se usó la pauta general de
  NHS Forth Valley (de 2 a 10) y se anotó en `adaptaciones`.
- **Licencias:** solo las páginas web del NHS usan la Open Government Licence. Las hojas de
  hospitales, Age UK, MS Trust y las fuentes españolas no tienen licencia abierta. Por eso las
  instrucciones están redactadas con palabras propias y con la fuente citada, no copiadas.
