# Revisión del catálogo

Los 35 ejercicios de `public/data/catalogo.json` (v0.1.0) están en estado `borrador`: el etiquetado
lo propuso la IA. El motor no usará ninguno hasta que lo revises.

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

- **Solo sentado + me cuesta cerrar la mano:** solo hay 2 ejercicios para la parte principal
  (`marcha-sentado-manos-cadera`, `arquear-espalda-sentado`). Con un mínimo de 3, este perfil no
  recibe rutina. Hace falta encontrar más ejercicios sentados sin agarre en fuentes fiables, por
  ejemplo extensiones de rodilla sentado/a.
- **No hay ejercicios en el suelo.**
- **Licencias:** el contenido del NHS usa la Open Government Licence. El folleto de Age UK Devon
  tiene todos los derechos reservados y el de Leicester/CSP no indica licencia. Por eso las
  instrucciones están redactadas con palabras propias y con la fuente citada, no copiadas.
