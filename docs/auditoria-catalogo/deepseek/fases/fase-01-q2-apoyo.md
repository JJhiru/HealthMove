# Tarea · fase-01-q2-apoyo

Segunda consulta, **acotada**. No repitas la auditoría de la fase 01: revisa solo la cuestión Q2 y la opción del perfil `de_pie_apoyo`.

**Por qué se te consulta:** el usuario dejó escrito que Q2 «permanece abierta hasta que DeepSeek haya revisado la definición documental y las evidencias técnicas pertinentes».

Numera tus hallazgos **a partir de DS-77**, con el formato de tus instrucciones.

## Documentos que recibes, completos

| Id del bloque | Procedencia | Qué es |
|---|---|---|
| `protocolo` | `docs/auditoria-catalogo/protocolo.md` | Protocolo de auditoría vigente (versión 1.0). Reglas aprobadas DG-1 a DG-8; cuestiones abiertas en su apartado 13 |
| `especificacion` | `docs/especificacion-v1.md` | Especificación funcional: posiciones (§3), exigencias (§4), opciones del perfil (§5), reglas del catálogo (§7) |
| `registro` | `docs/auditoria-catalogo/registro.md` | Decisiones del desarrollador con fecha, ejercicios auditados, casos no contemplados y propuestas retiradas |
| `opciones-js` | `public/js/opciones.js` | Opciones del perfil y qué exigencias o posiciones excluye cada una |
| `validacion-js` | `public/js/validacion.js` | Validador del catálogo |
| `motor-js` | `public/js/motor.js` | Motor: restricciones, compatibilidad y generación de rutinas |
| `catalogo-esquema` | derivado de `public/data/catalogo.json` | Claves, listas de valores y recuentos. Calculado por un script |
| `catalogo-de-pie` | derivado de `public/data/catalogo.json` | Los ejercicios con `de_pie` en `posiciones`, sin modificar |
| `fase-01-respuesta-bloque1` | `docs/auditoria-catalogo/deepseek/ejecuciones/20261019T001226Z-fase-01-protocolo/respuesta.md` | Tu respuesta original de la fase 01, bloque 1 (se cortó por longitud), tal como se guardó |
| `fase-01-respuesta-bloque2` | `docs/auditoria-catalogo/deepseek/ejecuciones/20261019T001508Z-fase-01-protocolo-bloque2/respuesta.md` | Su continuación, bloque 2, tal como se guardó |

No recibes el catálogo completo ni las fuentes originales. Los ejercicios sentados, tumbados y en el suelo con contacto de manos se revisarán en otra fase.

## Decisión del usuario sobre Q2 (literal, confirmada, no incorporada)

Lo que sigue lo escribió el desarrollador y se reproduce literalmente. **No es una propuesta de Claude ni tuya.**

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

## Tu respuesta de la fase 01

Está completa en los bloques `fase-01-respuesta-bloque1` y `fase-01-respuesta-bloque2`, en ese orden. Revisa en ella lo que dijiste sobre Q2 y, si lo hubiera, sobre `de_pie_apoyo`: no son reglas aprobadas, así que puedes mantenerlos, matizarlos o corregirlos, y debes citar por su identificador el que cambies.

## Datos medidos por Claude (comprobables en los bloques)

Son mediciones de Claude sobre el mismo catálogo que recibes, no conclusiones. Compruébalas en `catalogo-de-pie` y `opciones-js` antes de usarlas.

1. `de_pie_apoyo` tiene el texto «Puedo estar de pie solo si me sujeto a algo» y excluye solo `equilibrio_sin_apoyo`. No excluye `agarre`.
2. De los 50 ejercicios con `de_pie`, 38 tienen `equilibrio_sin_apoyo: false`. De esos 38, 21 tienen `agarre: true` y 17 `agarre: false`.
3. Para el perfil `de_pie_apoyo` + `cerrar_mano` quedan esos 17. Cuatro de ellos no mencionan ningún apoyo en sus instrucciones: `estiramiento-hombro-cruzado`, `estiramiento-triceps`, `estiramiento-pecho-manos-lumbar` y `manos-espalda-codo-contrario`. Los cuatro tienen `posiciones: ["sentado","de_pie"]`.
4. La especificación §7, punto 4, dice: «Conviene incluir variantes con la palma abierta contra la pared, porque sujetarse a una silla es `agarre`».

## Qué debes responder

1. **Significado real de `de_pie_apoyo`.** Qué exige y qué excluye según `opciones-js`, `motor-js`, `validacion-js` y la especificación §5. Si su texto mezcla apoyo y prensión, y qué consecuencias tiene en los filtros.
2. **Las cinco distinciones del usuario.** Para contacto, apoyo para estabilidad, soporte de carga, prensión y apoyo obligatorio u opcional: qué exigencia actual la representa, si alguna, con la cita exacta. Indica las que no tienen representación.
3. **La especificación §7.4 frente a R2.1, R7.4 y R7.5.** Si es coherente con ellas y si cierra una parte de Q2 o solo la desplaza.
4. **Clasificación de los casos de `catalogo-de-pie` con contacto de manos** en las cinco categorías, solo con el texto de la instrucción. Marca como indeterminados los que el texto no permita clasificar, por ejemplo «las manos en el respaldo».
5. **Combinaciones de perfil** en las que la representación actual pueda ofrecer un ejercicio cuyas instrucciones piden algo que el perfil declara no poder hacer: al menos `de_pie_apoyo` con `cerrar_mano`, con `un_brazo` y con `peso_manos`. Cita los ejercicios.
6. **Opciones documentales para cerrar Q2**, sin elegir ninguna. Para cada una, qué cambiaría en el protocolo, la especificación, el esquema, el motor, el validador, las opciones y el catálogo, y si requiere revisión profesional.
7. **Lo que no se puede determinar** sin las fuentes originales o sin un profesional.

## Límites

- No apruebes ni rechaces ejercicios, etiquetas ni reglas.
- No propongas textos de instrucciones nuevos ni variantes.
- No emitas juicios clínicos: cuando algo dependa de la capacidad física de una persona, señálalo como tal.
- Distingue en cada hallazgo si se basa en una regla aprobada, en la decisión del usuario, en una cuestión abierta o en tu inferencia.
