# Tarea · fase-01-protocolo

Primera auditoría independiente: coherencia del protocolo de auditoría con la especificación, el esquema del catálogo, el validador, el motor y las opciones, y casos límite de Q1 y Q2.

## Documentos que recibes, completos

| Id del bloque | Procedencia | Qué es |
|---|---|---|
| `protocolo` | `docs/auditoria-catalogo/protocolo.md` | Protocolo de auditoría vigente (versión 1.0). Sus reglas aprobadas son DG-1 a DG-8; las cuestiones abiertas están en su apartado 13 |
| `especificacion` | `docs/especificacion-v1.md` | Especificación funcional: posiciones (§3), exigencias (§4), opciones del perfil (§5), reglas del catálogo (§7), compatibilidad (§8) |
| `registro` | `docs/auditoria-catalogo/registro.md` | Decisiones del desarrollador con fecha, ejercicios auditados, casos no contemplados, **propuestas retiradas** y propuestas de variante pendientes |
| `propuestas-cierre` | `docs/auditoria-catalogo/propuestas-cierre-protocolo.md` | **Propuestas no aprobadas** (versión 1.1 del protocolo, huellas, texto de interfaz) |
| `opciones-js` | `public/js/opciones.js` | Opciones del perfil y qué exigencias o posiciones excluye cada una |
| `validacion-js` | `public/js/validacion.js` | Validador del catálogo y de cada ejercicio (lo usan el motor y `scripts/validar-catalogo.mjs`) |
| `motor-js` | `public/js/motor.js` | Motor: restricciones del perfil, compatibilidad y generación de rutinas |
| `catalogo-esquema` | derivado de `public/data/catalogo.json` | Claves, listas de valores, recuentos y un ejercicio completo de ejemplo. Calculado por un script, no escrito a mano |
| `catalogo-de-pie` | derivado de `public/data/catalogo.json` | Los ejercicios con `de_pie` en `posiciones`, con sus exigencias, instrucciones, recursos y fuente, sin modificar |

No recibes el catálogo completo (220 ejercicios) ni las fuentes originales de los ejercicios. Los archivos `public/js/validacion.js` y `public/js/motor.js` tienen cambios sin confirmar en el repositorio: audita la versión que recibes.

## Decisiones del usuario que debes tener en cuenta

Lo que sigue lo escribió el desarrollador (el usuario) y se reproduce literalmente. **No son propuestas de Claude ni tuyas.** Están confirmadas por el usuario pero **todavía no incorporadas** al protocolo ni al registro.

> ### Q1 — `ambos_brazos`
>
> El análisis debe basarse primero en la evidencia de la fuente original.
>
> Primera pregunta: ¿qué exige el movimiento según la fuente?
>
> - Si la fuente demuestra que ambos brazos son necesarios para ejecutar el movimiento, sostener una carga o mantener una postura bilateral requerida, la clasificación debe reflejar ese requisito.
> - Si la fuente demuestra que basta un brazo, no se debe marcar que ambos son necesarios sin otra evidencia que lo justifique.
> - Si la fuente no permite determinarlo, se debe aplicar el criterio conservador previsto por el protocolo, para evitar recomendar un ejercicio potencialmente incompatible. La incertidumbre debe registrarse mediante la nota `[conservadora]` exigida por el protocolo.
> - Una clasificación conservadora no debe presentarse como un hecho demostrado por la fuente.
>
> Solo después de analizar el movimiento según la fuente debe examinarse si las instrucciones obligan a usar ambas manos, si el apoyo es opcional o si una mano apoya mientras la otra trabaja.
>
> No basta con cambiar `ambos_brazos` a `false` para hacer que un ejercicio pase un filtro si sus instrucciones siguen exigiendo ambas manos.
>
> ### Q2 — `agarre` y `de_pie_apoyo`
>
> El usuario considera que tocar una superficie o apoyarse ligeramente, sin prensión, no equivale a agarrar.
>
> Hay que distinguir:
> - contacto;
> - apoyo para estabilidad;
> - soporte de carga;
> - prensión;
> - apoyo obligatorio frente a opcional.
>
> La opción `de_pie_apoyo` parece mezclar apoyo y prensión en su descripción. Debe comprobarse su significado real en el esquema, el validador y el motor.
>
> No supongas que `cerrar_mano` representa todas estas propiedades ni que existen filtros automáticos de desplazamiento si el código no los implementa.
>
> Q2 permanece abierta hasta que DeepSeek haya revisado la definición documental y las evidencias técnicas pertinentes.
>
> ### Q3 — «Inclinación leve»
>
> Si la fuente no proporciona un ángulo exacto, debe conservarse el término original y no inventarse un umbral numérico. Si la fuente proporciona un ángulo exacto, puede utilizarse en la explicación con atribución a la fuente.
>
> ### V7 — `fecha_revision`
>
> El usuario está de acuerdo con exigir tanto `revisado_por` como `fecha_revision` para salir del estado de borrador, después de comprobar la especificación, el validador y las pruebas.
>
> ### V9/Q4 — Variantes
>
> Las variantes de ejercicios adaptadas a HealthMove deben estar documentadas en la fuente o contar con respaldo verificable. No se deben inventar variantes sin evidencia.
>
> ### Herramienta de disponibilidad
>
> El usuario está de acuerdo con desarrollar una herramienta que analice el impacto de cambios de etiquetas antes de modificar el catálogo. La herramienta debe analizar sin alterar datos ni decidir por sí sola que un cambio es correcto.
>
> ### Versionado
>
> El usuario está de acuerdo con preservar la trazabilidad de informes, evidencias, versiones del protocolo y decisiones aplicadas.

## Hipótesis previas de Claude que debes evaluar de forma independiente

Lo que sigue lo identificó Claude en inspecciones anteriores (texto del usuario, reproducido literalmente). Son **hipótesis**: verifícalas y cuestiónalas, no las aceptes por defecto.

> ### Hallazgo A — Etiquetas `ambos_brazos`
>
> Se observaron ejercicios etiquetados `false` cuyas instrucciones mencionan dos manos o palmas, otros en los que una mano apoya y la otra trabaja, y ejercicios con movimiento bilateral etiquetados de manera inconsistente.
>
> DeepSeek debe comprobar la consistencia entre fuente, instrucción, etiqueta, requisitos de ejecución y filtros. Debe separar los errores confirmados de las sospechas y señalar la evidencia exacta.
>
> ### Hallazgo B — Coordinación de filtros
>
> En una inspección anterior se identificaron 31 ejercicios de pie compatibles con `de_pie_apoyo` y `un_brazo`; 15 mencionaban dos manos o palmas y 4 describían «una mano apoya, la otra trabaja».
>
> Estas cifras son resultados de una inspección previa, no hechos que deban aceptarse sin comprobar. Si cambió el catálogo o el método de consulta, vuelve a verificarlas.
>
> También se identificaron cinco ejercicios con posiciones `sentado,de_pie`, ambos brazos en el movimiento y `equilibrio_sin_apoyo = false`. La hipótesis es que, en la opción de pie, las manos están ocupadas y las instrucciones no especifican cómo apoyarse.
>
> ### Hallazgo C — Significado de `posiciones`
>
> El campo parece utilizarse como secuencia obligatoria en ejercicios como `sentarse-levantarse` y como alternativa en ejercicios cuyas instrucciones permiten elegir entre estar sentado o de pie.
>
> La especificación podría no representar explícitamente ambos significados. DeepSeek debe determinar si esto constituye una contradicción documental, un defecto del modelo de datos o ambos.
>
> ### Hallazgo D — V7
>
> El validador parece exigir `revisado_por` para abandonar el estado de borrador, mientras que la especificación también menciona `fecha_revision`. Debe verificarse en las versiones actuales.
>
> ### Hallazgo E — Cobertura y madurez
>
> En la auditoría anterior se indicó que el catálogo tenía 220 ejercicios en borrador, cero aprobados y 34 auditorías previas realizadas antes del protocolo 1.0. Verifica estos datos antes de utilizarlos.

Notas de Claude sobre esas hipótesis (para que puedas valorarlas):
- Las cifras del hallazgo B se volvieron a medir el 2026-10-18 con el catálogo cuyo identificador git es el mismo que el de este envío. Método: el motor real en modo auditoría (incluye borradores) y una búsqueda de texto en las instrucciones. La búsqueda de texto solo localiza candidatos.
- Los cinco ejercicios del hallazgo B son `estiramiento-hombro-cruzado`, `estiramiento-triceps`, `estiramiento-pecho-manos-lumbar`, `estiramiento-pecho-manos-detras` y `manos-espalda-codo-contrario`. Están en el bloque `catalogo-de-pie`.
- Para el hallazgo E, los recuentos por estado están en `catalogo-esquema` y los 34 auditados, en la tabla «Ejercicios auditados» del `registro`.

## Qué tienes que auditar

1. Contradicciones internas del protocolo.
2. Contradicciones entre protocolo, especificación y esquema.
3. Ambigüedades que puedan producir etiquetas incorrectas.
4. Reglas que no puedan aplicarse de manera reproducible.
5. Casos donde el criterio conservador se confunda con evidencia directa.
6. Riesgos de falsos positivos y falsos negativos en los filtros.
7. Requisitos que el validador no compruebe.
8. Reglas documentadas que el motor no implemente.
9. Casos límite de Q1 y Q2.
10. Reglas de adaptación y trazabilidad de las fuentes.
11. Decisiones que pueden cerrarse documentalmente.
12. Decisiones que requieren pruebas de código.
13. Decisiones que requieren evidencia adicional o revisión profesional.
14. Recomendaciones priorizadas por gravedad y dependencia.

Cada hallazgo debe incluir: identificador; ubicación exacta; evidencia literal o referencia verificable; explicación de la contradicción; consecuencia potencial; nivel de certeza; recomendación; prueba o evidencia que permitiría confirmarlo; si requiere decisión humana.

No apruebes ejercicios ni emitas un dictamen clínico. Una auditoría documental no equivale a validación clínica profesional.

Estructura tu respuesta con un apartado por cada uno de los 14 puntos (puedes remitir a un hallazgo ya descrito en lugar de repetirlo), seguido de una evaluación explícita de las hipótesis A a E (confirmada, matizada, refutada o no verificable con estos documentos, y por qué).
