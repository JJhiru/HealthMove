# Tarea · fase-01-d2-objeciones (consulta C2)

Tercera consulta, **acotada**. No repitas la fase 01 ni la consulta C1: revisa solo las objeciones a una decisión que el desarrollador ya ha tomado sobre Q2.

**Por qué se te consulta:** el desarrollador decidió D2 (abajo) y pidió que, si hay objeciones, se exploren contigo. Tu papel es examinar si las objeciones se sostienen con las reglas aprobadas, no decidir.

Numera tus hallazgos **a partir de DS-97**, con el formato de tus instrucciones.

## Documentos que recibes, completos

| Id del bloque | Procedencia | Qué es |
|---|---|---|
| `protocolo` | `docs/auditoria-catalogo/protocolo.md` | Protocolo vigente (1.0): DG-1 a DG-8, R2.x, R7.x, §13 |
| `especificacion` | `docs/especificacion-v1.md` | Definiciones de las exigencias (§4) y reglas del catálogo (§7) |
| `registro` | `docs/auditoria-catalogo/registro.md` | Decisiones del desarrollador con fecha. **Aún no recoge D2 ni D3 de hoy** |
| `opciones-js` | `public/js/opciones.js` | Opciones del perfil y qué exigencias excluyen |
| `catalogo-esquema` | derivado del catálogo | Claves, valores y recuentos |
| `catalogo-de-pie` | derivado del catálogo | Los ejercicios con `de_pie`, sin modificar |
| `evidencia-fuentes` | `analisis-claude/evidencia-fuentes-q1-q2.md` | **Análisis de Claude**, no tuyo: citas literales de las fuentes originales, con hashes. Las lecturas de Claude que contiene son hipótesis |
| `c1-respuesta-bloque1` y `c1-respuesta-bloque2` | `ejecuciones/…fase-01-q2-apoyo…/respuesta.md` | Tu respuesta a la consulta C1 (DS-77 a DS-96), en dos bloques, tal como se guardó |

## Decisiones del desarrollador de hoy (2026-10-20, literales, aún no registradas)

Las escribió el desarrollador. **No son propuestas de Claude ni tuyas.**

> D2 (Q2): NO, si tenemos algun criterio que justifique esta decision, usalo para argumentarla, en caso de tener objecciones, llama a deepseek para exxplorar la objeccion.

> D3 (Q1): SI, me remito al criterio conservador.

**Cómo las interpreta Claude (hipótesis, compruébala):** la pregunta D2 era si el contacto o el apoyo de la mano sin evidencia de cierre (caso neutro de Q2) debe marcar `agarre`. «NO» significa: el contacto o apoyo sin prensión no marca `agarre`. La pregunta D3 era si el apoyo bilateral para estabilidad y el trabajo simultáneo de los dos brazos cuentan como `ambos_brazos`. «SÍ» significa que cuentan, por el criterio conservador (R2.1).

## Argumento a favor de D2 que ha reunido Claude

Compruébalo en los bloques; las citas de las fuentes están en `evidencia-fuentes` §2.

1. Protocolo R7.4: que una mano toque un objeto no permite inferir un agarre. DG-7: no se infiere carga ni agarre del contacto.
2. Decisión del usuario sobre Q2 (2026-10-18, recogida en C1): «tocar una superficie o apoyarse ligeramente, sin prensión, no equivale a agarrar».
3. Especificación §4 (`agarre`) y §7.4: la prensión explícita («sujetarse a una silla») es `agarre`; la palma abierta, no.
4. Evidencia D de las fuentes de los 9 casos neutros de pie (tu DS-84, con la corrección de Claude): en 8 el verbo es *rest*, *place*, *leaning* o «apoyado»; ninguno dice *hold* ni «sujétese».

**Alcance que deduce Claude (hipótesis):**
- 7 ejercicios pasarían a `agarre: false`: `mini-sentadillas`, `elevacion-talones-apoyo`, `elevacion-lateral-pierna`, `extension-pierna-atras`, `flexion-alterna-piernas-de-pie`, `giro-tronco-pie` y `pendulo-hombro`.
- `remo-inclinado-botella` seguiría con `agarre: true`, porque la otra mano sostiene una botella.
- `deslizar-toalla-pared` queda indeterminado: HealthMove dice «una toalla bajo la mano» y la fuente, «with a towel in your hand, held at shoulder height».
- Los 16 de pie con prensión explícita («sujétate») no cambian.

## Objeciones que plantea Claude (hipótesis, para que las examines)

- **O1 · DG-2 y R2.2 (regla asimétrica).** Un `false` exige evidencia suficiente (D) o una adaptación aprobada. ¿Es evidencia D de ausencia de prensión el verbo de la fuente (*rest*, *place*, *leaning*), cuando la instrucción de HealthMove es neutra («las manos en el respaldo»)? ¿O el `false` exigiría además que la instrucción de HealthMove lo diga expresamente (por ejemplo, la palma apoyada), como pedía la propuesta del auditor en Q2? Si haría falta reescribir la instrucción, ¿sería fidelidad a la fuente o una adaptación con las condiciones de DG-3?
- **O2 · Especificación §7.4.** «Sujetarse a una silla es `agarre`». ¿Apoyar las manos en el respaldo de una silla es un caso distinto de «sujetarse» según el texto aprobado, o la especificación lo trata igual? ¿Hay que editar la especificación para que D2 sea coherente con ella?
- **O3 · Seguridad funcional.** Con D2, una persona con `cerrar_mano` recibiría ejercicios de pie en los que la estabilidad depende de apoyar la palma sin cerrar la mano. ¿Lo cubre alguna regla aprobada (DG-6, avisos de §8.3), o es una cuestión que solo puede responder un profesional (DS-95)? No emitas un juicio clínico: indica qué regla aplica o qué falta.
- **O4 · Coherencia con D3.** Con D3 = SÍ, el apoyo bilateral cuenta como `ambos_brazos` por precaución. ¿Es coherente marcar `ambos_brazos: true` por precaución en el apoyo y, a la vez, `agarre: false` en ese mismo apoyo? (Una cosa es si se usan los dos brazos y otra si la mano se cierra: DG-4 dice que se evalúan por separado.) ¿Necesita alguno de los dos la nota `[conservadora]` de R2.4?
- **O5 · Casos límite.** `remo-inclinado-botella` (la mano de apoyo no prende, la otra sí), `deslizar-toalla-pared` (*held*) y `flexion-alterna-piernas-de-pie` (apoyo opcional en la fuente que HealthMove hace obligatorio, con su adaptación documentada).

## Qué debes responder

1. Para cada objeción O1 a O5: si se sostiene, con la cita exacta de la regla o el texto que la sostiene o la refuta, y si se basa en una regla aprobada, en una decisión del usuario, en una cuestión abierta o en tu inferencia.
2. Si D2 es aplicable con las reglas actuales o requiere antes editar el protocolo (Q2 en §13, R7.4) o la especificación (§4, §7.4), y qué edición mínima la haría coherente, sin redactar instrucciones de ejercicios nuevas.
3. Si el alcance de Claude (7 ejercicios, 1 que no cambia, 1 indeterminado) es correcto con los datos de `catalogo-de-pie`. Corrige cualquier error de hecho.
4. Si hay ejercicios en `catalogo-de-pie` afectados por D2 que Claude no haya listado.
5. Lo que no se puede determinar sin las fuentes originales o sin un profesional.

## Límites

- No apruebes ni rechaces ejercicios, etiquetas ni reglas. La decisión ya la ha tomado el desarrollador: examina sus objeciones.
- No propongas textos de instrucciones nuevos ni variantes.
- No emitas juicios clínicos.
- Sé breve: como mucho unos 15 hallazgos.
