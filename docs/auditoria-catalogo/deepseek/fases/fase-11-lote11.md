# Tarea · fase-11-lote11 (consulta C12)

## Encargo del desarrollador (literal, P29)

«Mira, con lo que ya se puede auditar la mayoria del catalogo, divide entre tu y deepseek sin importar el costo de api, y las revisiones finales la dejamos para despues.»

## Reparto del trabajo

- **Claude** ha abierto las fuentes y ha escrito la evidencia (bloque `evidencia-lote-11`): ubicación, lo que dice el texto, lo que muestran las imágenes con D/I/N, la población y la comparación con la ilustración de HealthMove.
- **Tú (DeepSeek)** haces la auditoría de cada ejercicio con el protocolo 1.0 a partir de esa evidencia y del ejercicio del catálogo (bloque `catalogo-lote11`). Claude verificará después tu borrador contra las fuentes y escribirá el informe definitivo.
- **El desarrollador** aprueba al final.

`rodilla-al-pecho-tumbado` va solo como contexto: es la base de `abrazar-rodilla-tumbado` (`variante_de`). No lo audites.

## Qué debes entregar

**1. Un borrador de informe para cada uno de los 9 ejercicios**, con los números de apartado de la evidencia (70 a 78) y **exactamente** la estructura de los ejercicios del bloque `ejemplo-formato-lote-10`:

- `## <n>. <id>`
- `### Identificación` (ID, Nombre, Fuente, Población destinataria de la fuente (si la declara), Estado inicial, Resultado documental)
- `### Evidencia de la fuente` (Ubicación exacta; Pasos originales relevantes, resumidos con palabras propias; Coincidencias (C1); Diferencias (C3) y adaptaciones documentadas (C2); Adaptaciones que deben documentarse; Hechos, inferencias e incertidumbres; Limitaciones de la verificación)
- `### Auditoría de exigencias`: la tabla con **las 16 exigencias**, en el orden de la especificación §4, y las columnas `Exigencia | Etiqueta actual | Evidencia (D/I/N) y fundamento | Regla | Resultado propuesto | Motivo`. La regla es `evidencia`, `conservadora` o `adaptación`; el resultado, `TRUE`, `FALSE` o `REQUIERE_ACLARACION`. Un `FALSE` necesita evidencia D (R2.2).
- `### Otros campos` (fases, posiciones, recursos, dosis, duración, variantes, ilustración y **las exclusiones del catálogo v1**, especificación §4, P28)
- `### Incidencias`
- `### Propuesta de cambios` (solo lo necesario: valor actual → propuesto, con su justificación; textos de instrucciones, `adaptaciones` y notas `[conservadora]` con la forma de R2.4; `fuente.especifica_de` solo si la fuente declara la población, R8.1/DG-8)
- `### Decisión pendiente del desarrollador`: una de LISTO PARA APROBACIÓN DOCUMENTAL · REQUIERE CORRECCIONES · PENDIENTE_DE_FUENTE · PENDIENTE DE DECISIÓN (con la cuestión o el CN) · REQUIERE REVISIÓN PROFESIONAL · NO INCORPORAR CON LA EVIDENCIA ACTUAL. Si tu propuesta de cambios lo deja listo una vez aplicada, escribe «LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos».

**2. Hallazgos `DS-n`**, numerados **desde DS-251**, solo para lo que no cabe en el borrador: dudas sobre cómo aplicar una regla, casos que no encajan en ninguna (un posible CN, con la plantilla de R1.4) o errores de la evidencia de Claude.

## Reglas que debes aplicar (todas en `protocolo` y `registro`)

- R2.1 (ante la duda, `true` conservador con su nota) y R2.2 (un `false` necesita D).
- DG-4 y Q1/Q2 (P9, P10): función de cada mano; el apoyo de las dos manos cuenta como `ambos_brazos`; el contacto o el apoyo sin prensión visible, `agarre` conservador. La mano en reposo no cuenta.
- DG-6: los consejos de seguridad no cambian etiquetas.
- R3.1 y Q5 (P28): la ejecución de HealthMove debe ser una de las que permite la fuente; cada adaptación nueva se presenta con su justificación.
- CN-1 (P25): `brazo_sobre_hombro` con la definición literal. CN-2 (P28): la preparación del material no cuenta. CN-3 (aplazado): el apoyo que solo aparece en la imagen lleva `true` conservador.
- R7.6/R7.7: la ilustración no puede inducir otro movimiento, postura o apoyo.
- R8.1/DG-8: `especifica_de` solo con la población que la fuente declara.
- No vuelvas a proponer nada de «Propuestas retiradas» (`registro`), ni variantes sin fuente (DG-5).

## Límites

No apruebes. No inventes datos de las fuentes: usa solo la evidencia de Claude y, si te falta algo, dilo en «Limitaciones» o como hallazgo. Sin juicios clínicos.
