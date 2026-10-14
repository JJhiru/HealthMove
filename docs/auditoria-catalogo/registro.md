# Registro de la auditoría del catálogo

Este registro lleva la cuenta de la auditoría documental hecha con la skill `auditar-catalogo-ejercicios`.

- No es una validación clínica.
- Ningún estado del catálogo cambia sin una decisión explícita del desarrollador.

## Decisiones del desarrollador (2026-10-14)

1. **`ambos_brazos`:**
   - Cada ejercicio original se evalúa según sus propias instrucciones documentadas. En la práctica es el criterio literal.
   - Cuando una adaptación a un solo brazo cambie de forma relevante la ejecución, las instrucciones o la ilustración, se valora un ejercicio derivado independiente, con id, instrucciones e ilustración propias y enlazado al original con `variante_de`.
   - No se crea una copia por cada adaptación posible.
   - **Antes de crearlos hay que presentar una propuesta:** ids afectados, variantes sugeridas, diferencias y fuente que respalda cada cambio.
2. **Umbral de 90° de la rodilla:**
   - Referencia operativa reproducible: el ángulo aproximado entre muslo y pierna, visto de lado.
   - Hay que documentar cómo se evalúan los casos ambiguos, sin inventar precisión cuando la fuente no permita determinar el ángulo.
   - **Antes de cambiar etiquetas en bloque hay que presentar la lista de ejercicios afectados y el criterio aplicado a cada uno.**
3. **Folleto de Leicester:**
   - Se añade `especifica_de` a sus 8 ejercicios: «usuarios de silla de ruedas».
   - En los dos que hablan de «la pierna que queda» se añade también esa condición.
   - No se generalizan sus instrucciones ni la procedencia se interpreta como validación clínica.
   - **Pendiente para la interfaz:** explicar a quién va dirigido el material y que el usuario puede considerar el ejercicio si las instrucciones y adaptaciones lo permiten, sin presentarlo como garantía de seguridad. El texto de la decisión llegó cortado; queda pendiente confirmar el final.

4. **(Abierta) Manos que solo sirven de apoyo y `ambos_brazos`.** El caso de referencia del §7 («Elevar los talones sujetándose a la silla») no marca `ambos_brazos`, mientras que el criterio literal lo marcaría. Opciones:
   - **A (recomendada):** las manos de apoyo no cuentan y se documenta «apoya una o las dos manos».
   - **B:** se marca siempre.

   Afecta a todos los ejercicios de pie con apoyo (ver el lote 5).

### Criterio operativo para `flexion_profunda_rodilla` (propuesta)

- **Medida:** ángulo de la rodilla visto de lado, entre el muslo y la pierna. 0° es la pierna recta. Sentado con el pie bajo la rodilla son unos 90°.
- **TRUE:** el pie queda claramente por detrás de la vertical de la rodilla estando sentado o tumbado, se lleva el talón hacia el glúteo, o la persona se agacha o hace una sentadilla más allá de lo que describe una «mini» sentadilla.
- **FALSE:** el pie queda bajo la rodilla o por delante, o la rodilla se estira.
- **REQUIERE_ACLARACION:** la fuente no permite saber dónde queda el pie, por ejemplo cuando dice «tanto como puedas» sin ilustración consultada. En ese caso se aplica §7.1 (se marca) y se anota que es por conservadurismo, no por evidencia.

## Ejercicios auditados

| Lote | ID | Resultado de la auditoría | Decisión del desarrollador |
|---|---|---|---|
| 1 | estiramiento-pecho-sentado | REQUIERE CORRECCIONES | pendiente |
| 1 | giro-tronco-sentado | REQUIERE CORRECCIONES | pendiente |
| 1 | marcha-sentado-sujetandose | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 1 | marcha-sentado-manos-cadera | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 1 | estiramiento-tobillo-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 2 | tobillos-punta-talon-sentado | REQUIERE CORRECCIONES | pendiente |
| 2 | inclinacion-lateral-brazo-arriba | REQUIERE CORRECCIONES | pendiente |
| 2 | inclinacion-lateral-sentado | REQUIERE CORRECCIONES | pendiente |
| 2 | estiramiento-isquiotibiales-sentado | REQUIERE CORRECCIONES | pendiente |
| 2 | circulos-hombros-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 3 | elevar-rodar-hombros-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 3 | curl-biceps-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 3 | toalla-separar-sentado | REQUIERE CORRECCIONES | pendiente |
| 3 | boxeo-sentado | REQUIERE CORRECCIONES (criterio literal adoptado) | pendiente |
| 3 | boxeo-circulos-alto | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 4 | boxeo-circulos-pecho | LISTO tras añadir `especifica_de` | pendiente |
| 4 | arquear-espalda-sentado | REQUIERE CORRECCIONES | pendiente |
| 4 | movilidad-lumbar-sentado | LISTO tras añadir `especifica_de` | pendiente |
| 4 | estiramiento-gemelo-sentado | REQUIERE CORRECCIONES | pendiente |
| 4 | abrir-cerrar-manos | REQUIERE CORRECCIONES | pendiente |
| 4 | pulgar-dedos | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 4 | activacion-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 4 | banda-remo-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 4 | banda-curl-sentado | REQUIERE CORRECCIONES | pendiente |
| 5 | sentarse-levantarse | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 5 | mini-sentadillas | LISTO con la opción A de la decisión 4 | pendiente |
| 5 | elevacion-talones-apoyo | LISTO con la opción A de la decisión 4 | pendiente |
| 5 | elevacion-talones-sin-apoyo | REQUIERE CORRECCIONES | pendiente |
| 5 | elevacion-lateral-pierna | LISTO con la opción A de la decisión 4 | pendiente |
| 5 | extension-pierna-atras | LISTO con la opción A de la decisión 4 | pendiente |
| 5 | flexiones-pared | REQUIERE CORRECCIONES | pendiente |
| 5 | equilibrio-una-pierna-pared | REQUIERE CORRECCIONES | pendiente |
| 5 | inclinacion-lateral-de-pie | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 5 | estiramiento-gemelo-pared | REQUIERE CORRECCIONES | pendiente |

## Pendientes

- Auditados: 34 de 220. Siguiente: Royal Devon, St Helens, Royal Berkshire Stage 1 y NHS Forth Valley.
- Lista de candidatos a adaptación unilateral: ver los resúmenes de los lotes 1, 3 y 4.
- Tarea de interfaz pendiente: comunicar `especifica_de` (decisión 3).
