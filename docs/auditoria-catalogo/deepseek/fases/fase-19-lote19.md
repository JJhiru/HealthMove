# Tarea · fase-19-lote19 (consulta C20)

## Encargo del desarrollador (literal, P29)

«Mira, con lo que ya se puede auditar la mayoria del catalogo, divide entre tu y deepseek sin importar el costo de api, y las revisiones finales la dejamos para despues.»

## Reparto del trabajo

- **Claude** ha abierto las fuentes y ha escrito la evidencia (bloque `evidencia-lote-19`): ubicación, texto, imágenes con D/I/N, población y comparación con la ilustración de HealthMove.
- **Tú (DeepSeek)** haces la auditoría de cada ejercicio con el protocolo 1.0 a partir de esa evidencia y del ejercicio del catálogo (bloque `catalogo-lote19`). Claude verificará tu borrador contra las fuentes y escribirá el informe definitivo.
- **El desarrollador** aprueba al final.

`sentarse-levantarse` van solo como contexto (bases de `variante_de` o ejercicios relacionados). No los audites.

## Qué debes entregar

**1. Un borrador de informe para cada uno de los 9 ejercicios**, con los números de apartado de la evidencia (143 a 151) y **exactamente** la estructura de los ejercicios del bloque `ejemplo-formato-lote-18` (un informe ya verificado del lote anterior):

- `## <n>. <id>`, y dentro `### Identificación`, `### Evidencia de la fuente`, `### Auditoría de exigencias`, `### Otros campos`, `### Incidencias`, `### Propuesta de cambios` y `### Decisión pendiente del desarrollador`, con los mismos campos que el ejemplo.
- La tabla tiene **las 16 exigencias** en el orden de la especificación §4, con las columnas `Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo`. Regla: `evidencia`, `conservadora` o `adaptación`. Resultado: `TRUE`, `FALSE` o `REQUIERE_ACLARACION`. Un `FALSE` necesita D (R2.2).
- En «Otros campos», comprueba también las exclusiones del catálogo v1 (especificación §4, P28).
- Decisión: LISTO PARA APROBACIÓN DOCUMENTAL · REQUIERE CORRECCIONES · PENDIENTE_DE_FUENTE · PENDIENTE DE DECISIÓN (con la cuestión o el CN) · REQUIERE REVISIÓN PROFESIONAL · NO INCORPORAR CON LA EVIDENCIA ACTUAL. Si tus cambios propuestos lo dejan listo, escribe «LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos».

**2. Como mucho 8 hallazgos `DS-n`**, numerados **desde DS-408**, solo para dudas de aplicación de una regla, posibles CN (plantilla R1.4) o errores de la evidencia de Claude. **No escribas confirmaciones** de valores que no cambian: ya están en las tablas.

**3. Termina con la línea `FIN DEL BORRADOR`.**

## Reglas que debes aplicar (en `protocolo` y `registro`)

- R2.1 (ante la duda, `true` conservador con su nota) y R2.2 (un `false` necesita D). Las notas `[conservadora]` con la forma de R2.4.
- DG-4 y Q1/Q2 (P9, P10): función de cada mano; el apoyo de las dos manos cuenta como `ambos_brazos`; contacto o apoyo sin prensión visible, `agarre` conservador; la mano en reposo no cuenta. Con criterio único para las dos exigencias.
- DG-6 y R6.1-R6.3: los consejos de seguridad no cambian etiquetas; solo se documenta como adaptación el consejo que HealthMove **añade**.
- R3.1 y Q5 (P28): la ejecución de HealthMove debe ser una de las que permite la fuente; cada adaptación nueva se presenta con su justificación. Las diferencias de texto se resuelven antes como aclaración hacia la fuente.
- CN-1 (P25), CN-2 (P28: la preparación del material no cuenta), CN-3 (aplazado: apoyo que solo aparece en la imagen, `true` conservador).
- R7.6/R7.7 (ilustraciones) y R8.1/DG-8 (`especifica_de` solo con la población declarada, con un nombre breve como los existentes).
- Nada de «Propuestas retiradas» ni variantes sin fuente (DG-5).
- **Cita solo frases que estén en la evidencia de Claude.** No inventes citas de las fuentes.

## Límites

No apruebes. Sin juicios clínicos. Si falta algo en la evidencia, dilo en «Limitaciones de la verificación».
