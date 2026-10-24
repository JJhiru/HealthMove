# Tarea · fase-10-m5 (consulta C11)

Numera tus hallazgos **a partir de DS-241**.

## Encargo del desarrollador (literal)

«M5: consulta a Deepseek alguna solución.»

## El problema

M5 (bloque `informe-medios-menores`, §3) es la cuestión abierta Q7 del protocolo (bloque `protocolo`, §13; DG-8): las incertidumbres del etiquetado no se ven. Cuando falta evidencia, una exigencia se marca `true` por precaución (R2.1, DG-2) y se anota en `notas_etiquetado` con la forma `[conservadora] <exigencia>: <motivo>. Se cerraría con: <evidencia que falta>.` La interfaz (bloque `app-extracto`, extracto literal de `app.js` descrito en su cabecera) no muestra `notas_etiquetado`. Si el perfil excluye esa exigencia, el motor (bloque `motor`) quita el ejercicio, y la persona no puede distinguir «se quitó por precaución, porque no consta que no lo exija» de «se quitó porque lo exige».

Recibes los 10 ejercicios **publicados** que tienen alguna marca `[conservadora]` (`catalogo-publicados-conservadora`). Hay 53 en total en el catálogo; los otros 43 están en `borrador` y la persona no los ve.

## Datos verificados por Claude en el código y el catálogo (2026-10-23)

- Las 66 marcas `[conservadora]` del catálogo se pueden leer con la expresión `\[conservadora\]\s*([^:]+):`; las 66 nombran exigencias válidas y todas están en `true` en su ejercicio. El validador no comprueba ese formato (m3, DS-30).
- `vistaResumen` (`app-extracto`) ya explica qué se deja fuera y por qué opción del perfil («Dejamos fuera los ejercicios que…»). `vistaEjercicio` muestra la ficha, sin `notas_etiquetado`.
- `notas_etiquetado` está redactado para la auditoría, con nombres de código y reglas, no para la persona.

## Hipótesis de Claude (no verificadas, para que las contrastes)

- H1: se podría derivar, sin cambiar el esquema, qué exigencias de cada ejercicio son por precaución, leyendo esas marcas.
- H2: mostrar el motivo literal de la nota no sirve a la persona; haría falta un texto genérico o un campo nuevo redactado para ella.

## Qué debes responder

1. Opciones para resolver M5, de la más pequeña a la más completa. Para cada una: dónde se vería (ficha, resumen de exclusiones, rutina, Explorar u otra), qué ve la persona, si cambia el esquema, el motor o el validador, y qué riesgos tiene.
2. Riesgos de seguridad y ética de mostrar «por precaución», frente a los límites de seguridad de abajo y la especificación §1: falsa tranquilidad («entonces sí puedo hacerlo»), invitación a saltarse el filtro, afirmaciones clínicas implícitas, ansiedad o confusión, y legibilidad para personas mayores o con discapacidad.
3. Si H1 y H2 se sostienen, y qué haría falta para que la marca sea fiable si la interfaz depende de ella (por ejemplo, que el validador compruebe el formato: m3).
4. Qué opción recomendarías para la v1, y qué debería revisar el desarrollador antes de implementarla.

## Límites de seguridad del proyecto (literales, de la skill `healthmove-safety-reviewer`)

> HealthMove:
>
> - No diagnostica enfermedades ni lesiones.
> - No determina qué tratamiento necesita una persona.
> - No sustituye a médicos, fisioterapeutas u otros profesionales competentes.
> - No interpreta una selección incompleta como ausencia de restricciones.
> - No garantiza que un ejercicio sea seguro para una persona concreta.
> - No inventa ejercicios ni variantes supuestamente validados.
> - No modifica restricciones para conseguir que una rutina pueda generarse.

> - La falta de información no debe interpretarse como compatibilidad.
> - No relajes filtros automáticamente si quedan pocos ejercicios.
> - Diferencia entre incompatibilidad confirmada e información insuficiente.
> - Evita presentar una rutina como personalizada médicamente.

## Límites de la respuesta

- No apruebes nada ni lo des por decidido: el desarrollador decide.
- No redactes juicios clínicos ni digas qué es seguro para una persona.
- Si propones textos para la interfaz, márcalos como propuesta.
- Como mucho unos 10 hallazgos.
