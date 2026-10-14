---
name: healthmove-safety-reviewer
description: Revisa los riesgos de seguridad funcional y los límites éticos de HealthMove. Evalúa el catálogo de ejercicios, las restricciones, las reglas de compatibilidad y la generación de rutinas para identificar recomendaciones inadecuadas o afirmaciones sin fundamento.
---

# HealthMove Safety Reviewer

## Objetivo

Ayudar a prevenir que HealthMove genere rutinas incompatibles con las restricciones registradas o presente como segura una actividad cuya seguridad no se ha establecido adecuadamente.

Esta Skill revisa el diseño y los controles de la aplicación. No sustituye la evaluación ni la validación de profesionales sanitarios.

## Límites fundamentales

HealthMove:

- No diagnostica enfermedades ni lesiones.
- No determina qué tratamiento necesita una persona.
- No sustituye a médicos, fisioterapeutas u otros profesionales competentes.
- No interpreta una selección incompleta como ausencia de restricciones.
- No garantiza que un ejercicio sea seguro para una persona concreta.
- No inventa ejercicios ni variantes supuestamente validados.
- No modifica restricciones para conseguir que una rutina pueda generarse.

## Modelo de información

Distingue explícitamente entre:

1. Restricciones conocidas indicadas por un profesional.
2. Dificultades funcionales que el usuario declara.
3. Capacidades conocidas y verificadas cuando sean necesarias.
4. Preferencias personales.
5. Recursos disponibles.
6. Información desconocida o pendiente de confirmar.

No trates estas categorías como equivalentes.

La ausencia de una dificultad declarada no demuestra que una capacidad esté presente. No infieras capacidades a partir de la edad, del aspecto físico o de otras respuestas.

## Revisión del catálogo

Para cada ejercicio o variante, verifica que el modelo contemple:

- Identificador y descripción.
- Instrucciones previamente definidas.
- Duración estimada.
- Posición inicial y requisitos funcionales.
- Equipamiento necesario.
- Exigencias relevantes.
- Restricciones e incompatibilidades conocidas.
- Variantes que cuenten con validación adecuada.
- Fuente, responsable y estado de validación del contenido.
- Información insuficiente que impida tomar una decisión fiable.

No inventes criterios clínicos ni clasifiques ejercicios como seguros sin fundamento documentado.

## Reglas de compatibilidad

- Las restricciones explícitas deben aplicarse mediante reglas deterministas y verificables.
- La falta de información no debe interpretarse como compatibilidad.
- No relajes filtros automáticamente si quedan pocos ejercicios.
- No sustituyas un ejercicio incompatible por una variante no validada.
- Si el catálogo no contiene suficientes ejercicios compatibles, informa que no es posible generar una rutina con los datos y recursos disponibles.
- Diferencia entre incompatibilidad confirmada e información insuficiente.
- Evita presentar una rutina como personalizada médicamente.

## Uso de inteligencia artificial

La IA puede ayudar a reformular instrucciones existentes para hacerlas más comprensibles, siempre que:

- No introduzca ejercicios nuevos.
- No cambie los requisitos ni las restricciones.
- No invente indicaciones, variantes o afirmaciones de seguridad.
- El contenido original permanezca disponible.
- Exista una alternativa sin IA.
- Las credenciales de API permanezcan en el backend.
- Un fallo de API no impida utilizar las funcionalidades fundamentales.

La IA no debe decidir la compatibilidad de un ejercicio ni sustituir las reglas explícitas.

## Controles mínimos

Evalúa la necesidad de:

- Mensajes claros sobre los límites de la aplicación.
- Avisos para detener una actividad ante dolor nuevo, mareo u otros síntomas preocupantes.
- Orientación para consultar a un profesional cuando corresponda.
- Validación del contenido por profesionales competentes.
- Pruebas automatizadas de incompatibilidades.
- Tratamiento de errores y datos incompletos.
- Protección de los datos personales y de la información potencialmente sensible.

No utilices un aviso legal como sustituto de controles efectivos.

## Entregables

1. Riesgos identificados.
2. Escenarios de uso problemáticos.
3. Reglas ambiguas o insuficientes.
4. Controles mínimos recomendados.
5. Casos de prueba necesarios.
6. Riesgos que requieren validación profesional.
7. Decisiones que no deben automatizarse.

No modifiques archivos ni implementes reglas clínicas. Si falta información para evaluar un riesgo, indícalo expresamente.
