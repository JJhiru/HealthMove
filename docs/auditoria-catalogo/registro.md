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
   - **Estado (2026-10-16):** matizada por DG-5 y DG-4.
     - Un ejercicio derivado solo se crea si una fuente lo describe. Sin fuente, se registra como propuesta pendiente de validación.
     - `ambos_brazos` se evalúa según la función real de los brazos (protocolo, apartados 5.2 y 7).
2. **Umbral de 90° de la rodilla:**
   - Referencia operativa reproducible: el ángulo aproximado entre muslo y pierna, visto de lado.
   - Hay que documentar cómo se evalúan los casos ambiguos, sin inventar precisión cuando la fuente no permita determinar el ángulo.
   - **Antes de cambiar etiquetas en bloque hay que presentar la lista de ejercicios afectados y el criterio aplicado a cada uno.**
3. **Folleto de Leicester:**
   - Se añade `especifica_de` a sus 8 ejercicios: «usuarios de silla de ruedas».
   - En los dos que hablan de «la pierna que queda» se añade también esa condición.
   - No se generalizan sus instrucciones ni la procedencia se interpreta como validación clínica.
   - **Pendiente para la interfaz:** explicar a quién va dirigido el material y que el usuario puede considerar el ejercicio si las instrucciones y adaptaciones lo permiten, sin presentarlo como garantía de seguridad. El texto de la decisión llegó cortado; queda pendiente confirmar el final.
   - **Corrección (2026-10-16):**
     - El folleto de Leicester aporta **11** ejercicios al catálogo, no 8 (lista en `consolidacion-lotes-1-5.md`, 2.1).
     - Solo `estiramiento-isquiotibiales-sentado` habla de «la pierna que queda». `inclinacion-lateral-brazo-arriba` menciona la amputación solo como motivo del estiramiento.
     - Según el protocolo (R8.1), `especifica_de` lleva solo la población; la generalización «con cada pierna» va a `adaptaciones`.

4. **(Abierta) Manos que solo sirven de apoyo y `ambos_brazos`.** El caso de referencia del §7 («Elevar los talones sujetándose a la silla») no marca `ambos_brazos`, mientras que el criterio literal lo marcaría. Opciones:
   - **A (recomendada):** las manos de apoyo no cuentan y se documenta «apoya una o las dos manos».
   - **B:** se marca siempre.

   Afecta a todos los ejercicios de pie con apoyo (ver el lote 5).

   **Estado (2026-10-16):** sustituida por DG-4 (protocolo, apartado 7). Queda abierta la cuestión Q1: apoyo bilateral para estabilidad.

### Criterio operativo para `flexion_profunda_rodilla` (propuesta)

- **Medida:** ángulo de la rodilla visto de lado, entre el muslo y la pierna. 0° es la pierna recta. Sentado con el pie bajo la rodilla son unos 90°.
- **TRUE:** el pie queda claramente por detrás de la vertical de la rodilla estando sentado o tumbado, se lleva el talón hacia el glúteo, o la persona se agacha o hace una sentadilla más allá de lo que describe una «mini» sentadilla.
- **FALSE:** el pie queda bajo la rodilla o por delante, o la rodilla se estira.
- **REQUIERE_ACLARACION:** la fuente no permite saber dónde queda el pie, por ejemplo cuando dice «tanto como puedas» sin ilustración consultada. En ese caso se aplica §7.1 (se marca) y se anota que es por conservadurismo, no por evidencia.

**Estado (2026-10-16):** esta propuesta queda sustituida por el protocolo (R7.8 y apartado 3).
- La medida es el ángulo aproximado entre muslo y pierna en vista lateral (decisión 2).
- La posición del pie no se usa como sustituto universal del ángulo.
- La evidencia se califica D/I/N.
- Un `true` por conservadurismo se anota con `[conservadora]` en `notas_etiquetado`.

## Decisiones generales aprobadas (2026-10-16)

Las reglas operativas están en `protocolo.md` (versión 1.0). Resumen:

| Id | Decisión | Protocolo |
|---|---|---|
| DG-1 | Los casos de referencia son ilustrativos, no exhaustivos. Los casos nuevos se registran como CN | Apartado 4 |
| DG-2 | Regla asimétrica: `true` con evidencia o por conservadurismo; `false` solo con evidencia suficiente o una adaptación aprobada. Nada de cambios masivos sin revisión | Apartado 3 |
| DG-3 | Una adaptación es válida solo si cumple sus cinco condiciones, incluidos todos los filtros de compatibilidad aplicables | Apartado 5.1 |
| DG-4 | `ambos_brazos` según la función real de los brazos. `agarre` y `peso_en_manos` se evalúan por separado | Apartado 7 |
| DG-5 | Sin fuente no hay variantes. No existe un proceso profesional que autorice excepciones | Apartado 5.2 |
| DG-6 | Los consejos preventivos y las contingencias no son exigencias | Apartado 8 |
| DG-7 | Evidencia D/I/N. No se inventan umbrales ni se infiere carga o agarre del contacto | Apartado 6 |
| DG-8 | Fuente, población destinataria, adaptaciones e incertidumbres identificables. La población no decide la compatibilidad | Apartado 11 |

Las cuestiones que siguen abiertas (Q1-Q8) están en el apartado 13 del protocolo.

## Ejercicios auditados

| Lote | ID | Resultado de la auditoría | Decisión del desarrollador |
|---|---|---|---|
| 1 | estiramiento-pecho-sentado | REQUIERE CORRECCIONES | pendiente |
| 1 | giro-tronco-sentado | REQUIERE CORRECCIONES | pendiente |
| 7 | marcha-sentado-sujetandose | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 6 | marcha-sentado-manos-cadera | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 7 | estiramiento-tobillo-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 2 | tobillos-punta-talon-sentado | REQUIERE CORRECCIONES | pendiente |
| 6 | inclinacion-lateral-brazo-arriba | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 2 | inclinacion-lateral-sentado | REQUIERE CORRECCIONES | pendiente |
| 6 | estiramiento-isquiotibiales-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 6 | circulos-hombros-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 8 | elevar-rodar-hombros-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 6 | curl-biceps-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 6 | toalla-separar-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 6 | boxeo-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 6 | boxeo-circulos-alto | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 6 | boxeo-circulos-pecho | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 6 | arquear-espalda-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 6 | movilidad-lumbar-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 4 | estiramiento-gemelo-sentado | REQUIERE CORRECCIONES | pendiente |
| 4 | abrir-cerrar-manos | REQUIERE CORRECCIONES | pendiente |
| 8 | pulgar-dedos | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 8 | activacion-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 8 | banda-remo-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 9 | talon-al-suelo-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 9 | juntar-omoplatos-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 9 | elevacion-brazo-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 9 | extension-codo-toalla-tumbado | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 9 | flexion-hombro-lado-tumbado | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 9 | respiracion-abdominal-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 9 | respiracion-tranquila-tumbado | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 4 | banda-curl-sentado | REQUIERE CORRECCIONES | pendiente |
| 7 | sentarse-levantarse | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 7 | mini-sentadillas | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 7 | elevacion-talones-apoyo | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 5 | elevacion-talones-sin-apoyo | REQUIERE CORRECCIONES | pendiente |
| 7 | elevacion-lateral-pierna | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 7 | extension-pierna-atras | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 5 | flexiones-pared | REQUIERE CORRECCIONES | pendiente |
| 5 | equilibrio-una-pierna-pared | REQUIERE CORRECCIONES | pendiente |
| 7 | inclinacion-lateral-de-pie | LISTO PARA APROBACIÓN DOCUMENTAL | aprobado (2026-10-21, P21) |
| 5 | estiramiento-gemelo-pared | REQUIERE CORRECCIONES | pendiente |

## Pendientes

- Auditados: 41 de 220. Siguiente: St Helens y NHS Forth Valley. **Royal Devon está bloqueada** (403 desde el script, 2026-10-21): hace falta descargar su PDF a mano para auditar sus 3 ejercicios.
- Lista de candidatos a adaptación unilateral: ver los resúmenes de los lotes 1, 3 y 4.
- Tarea de interfaz pendiente: comunicar `especifica_de` (decisión 3).
- **Actualización (2026-10-16):**
  - Los resultados de los lotes 1 a 5 son anteriores al protocolo 1.0 y se revisarán con él antes de aplicar cambios al catálogo.
  - Las tareas de interfaz están en la cuestión Q8 del protocolo.
  - Los candidatos a adaptación unilateral pasan a la sección de propuestas de variante (DG-5).

## Casos no contemplados (CN)

Plantilla en `protocolo.md`, R1.4.

### CN-1 · La mano pasa del hombro al doblar el codo, con el brazo abajo
- Ejercicio(s): `curl-biceps-sentado` (lote 6) y `pulgar-dedos` (lote 8, por una foto con la mano a la altura de la cabeza y un texto que no fija la altura; ahí la regla es «conservadora»). Casos equivalentes sin auditar: `flexion-codo-tumbado`. `extension-codo-botella-sentado` ya tiene `brazo_sobre_hombro: true`.
- Detalle: la especificación §4 define `brazo_sobre_hombro` como «codo **o mano** por encima de la altura del hombro». La opción del perfil (`brazo_arriba`) y el rótulo hablan de «levantar el brazo por encima del hombro». En un curl, la mano sube por encima del hombro solo porque se dobla el codo; el brazo no se levanta.
- Evidencia: D, la foto 2 del ejercicio 6 del folleto de Leicester (p. 5 impresa) muestra la botella a la altura de la boca, con el codo pegado al costado.
- Reglas consideradas y por qué no resuelven: la definición literal de §4 da `true` con evidencia D, y así se ha aplicado. Pero el texto de la opción sugiere que el filtro busca la elevación del brazo. Elegir entre la definición y la intención de la opción es un criterio que el protocolo no tiene.
- Propuesta del auditor (sin aplicar): mantener la definición literal (más restrictiva, en línea con el criterio conservador de P9, P10 y P14) y, si se quiere afinar, cambiar el texto de la opción (Q8) en lugar de la etiqueta.
- Valor provisional: `true` en `curl-biceps-sentado`, por la definición literal con evidencia D (aplicado el 2026-10-21, P16).
- Estado: pendiente.

## Propuestas retiradas

No deben volver a proponerse sin evidencia nueva.

| Propuesta | Ejercicio | Motivo de la retirada | Dónde |
|---|---|---|---|
| Quitar «Aumenta el recorrido poco a poco» | `tobillos-punta-talon-sentado` | La fuente sí lo dice. El error vino de la extracción de un PDF a columnas | `consolidacion-lotes-1-5.md`, 2.1.2 |
| Limitar el movimiento a «levanta un poco el pie» | `equilibrio-una-pierna-pared` | La foto del NHS fija la rodilla alta; cambiaría el ejercicio | `consolidacion-lotes-1-5.md`, 2.1.4 |
| Crear derivados para un solo brazo sin fuente | `boxeo-sentado`, `abrir-cerrar-manos`, `giro-tronco-sentado` | Contradice el §1 de la especificación y DG-5 | `revision-critica-protocolo.md`, caso 5.7; DG-5 |

## Propuestas de variante pendientes de validación (DG-5)

No se incorporan al catálogo. Solo se reabren si aparece una fuente que las describa.

| Ejercicio de partida | Cambio | Exigencias que cambiarían | Perfil que se beneficiaría | Búsqueda de fuente |
|---|---|---|---|---|
| `giro-tronco-sentado` | Una mano al hombro contrario y el otro brazo relajado | `ambos_brazos` | «Solo puedo usar un brazo» | No realizada |
| `boxeo-sentado` | Golpes con un solo brazo | `ambos_brazos` | «Solo puedo usar un brazo» | No realizada |
| `abrir-cerrar-manos` | Una sola mano | `ambos_brazos` | «Solo puedo usar un brazo» | No realizada |

## Decisiones del desarrollador (2026-10-18)

Responden a las propuestas P1 a P4 de `propuestas-2026-10-18.md`. Ninguna cambia el catálogo, aprueba ejercicios ni modifica el protocolo.

1. **P1 · `fuente.especifica_de` en las filas compuestas de la consolidación (3.2):**
   - Cada fila se resuelve según su fuente.
   - «usuarios de silla de ruedas» solo se usa si la fuente lo respalda. El campo no se rellena por defecto.
   - La evidencia de cada ejercicio y el valor propuesto están en `propuestas-2026-10-18.md`, P1. Para cambiar el catálogo hace falta un plan aprobado.
2. **P2 · Final del mensaje de interfaz de la decisión 3:**
   - El original estaba cortado en origen.
   - Se aprueba como **aclaración** una continuación nueva. No es una reconstrucción del original. Se revisó con `healthmove-safety-reviewer`.
   - Texto de la aclaración: «La interfaz debe explicar que el folleto está dirigido a un grupo concreto de personas (en este caso, quienes pueden estar usando una silla de ruedas); que eso no hace el ejercicio exclusivo de ese grupo ni adecuado para todas las personas que lo forman; y que una persona puede hacerlo aunque no pertenezca a ese grupo cuando sus exigencias, instrucciones y adaptaciones documentadas son compatibles con las restricciones que ha indicado, sin que esa posibilidad se presente como una garantía de seguridad.»
   - El texto concreto de la interfaz y su implementación siguen pendientes (Q8(b)).
3. **P3 · Huellas:**
   - Se definen por separado las de compatibilidad, contenido y auditoría.
   - Los cambios del protocolo se proponen antes de implementarlas.
   - Hoy solo existe la huella literal de `node scripts/auditoria.mjs cabecera`.
4. **P4 · Skill:**
   - La copia vigente de `auditar-catalogo-ejercicios` es la de `desarrollo-v1`. Se ha añadido al índice de la rama junto con `CLAUDE.md`, sin commit.
   - La copia antigua de `main` (2026-10-14, anterior al protocolo) se apartó de forma reversible a `.claude/apartado-2026-10-18/auditar-catalogo-ejercicios/` en la copia de trabajo de `main`. SHA-256 de `SKILL.md`: `e2dd75e8fb77dbfac4f273f1bbf8265ccc3a66b703a660c2e3b042553f8ee985`.
   - Para deshacerlo: `mv -n ~/Escritorio/HealthMove/.claude/apartado-2026-10-18/auditar-catalogo-ejercicios ~/Escritorio/HealthMove/.claude/skills/`.

## Decisiones del desarrollador (2026-10-19)

Responden a las decisiones pendientes del informe `deepseek/analisis-claude/sesion-autonoma-2026-10-19.md` §8. El desarrollador las aprobó todas («De acuerdo con todas las decisiones»), con autorización explícita para versionar y seguir. **Ninguna cambia el catálogo ni aprueba ejercicios.** Quedan fuera: D2 (Q2) y D3 (Q1), porque el informe preguntaba qué opción adoptar sin proponer ninguna; y V7/DS-59, que no se ha autorizado registrar.

5. **P5 · Q3, «inclinación leve» (D11):**
   - Texto de la decisión (literal, tomado de `deepseek/fases/fase-01-protocolo.md`): «Si la fuente no proporciona un ángulo exacto, debe conservarse el término original y no inventarse un umbral numérico. Si la fuente proporciona un ángulo exacto, puede utilizarse en la explicación con atribución a la fuente.»
   - Se incorpora al protocolo (R7.8 y §13, Q3 resuelta) y a la especificación (§4).
   - No cambia ninguna etiqueta. La familia `sentarse-levantarse` necesita un plan de cambios: la base y la variante «sin manos» dicen «slightly» en sus fuentes y tienen `inclinacion_tronco` opuesto (`deepseek/analisis-claude/evidencia-fuentes-q1-q2.md` §4 ter).
6. **P6 · Perfiles fijos de R9.1 (D10):**
   - La herramienta de disponibilidad ya estaba aprobada (decisión recogida en `deepseek/fases/fase-01-protocolo.md`: «desarrollar una herramienta que analice el impacto de cambios de etiquetas antes de modificar el catálogo… sin alterar datos ni decidir por sí sola que un cambio es correcto»). Es `scripts/disponibilidad.mjs`.
   - «Posición con dos opciones»: `de_pie_apoyo` + `un_brazo`; `de_pie_apoyo` + `cerrar_mano`; `de_pie_apoyo` + `peso_manos`; `de_pie_apoyo` + `equilibrio`.
   - «Solo sentado con tres opciones»: `solo_sentado` + `un_brazo` + `cerrar_mano` + `brazo_arriba`; `solo_sentado` + `un_brazo` + `cerrar_mano` + `peso_manos`.
   - Todos sobre el perfil base que imprime la herramienta (de pie sin sujetarse, cama y suelo sí, todos los recursos).
7. **P7 · Ediciones del protocolo sin cambio de criterio:**
   - El estado de la herramienta de disponibilidad en el §9 y el §14.
   - DS-06: las citas de `app.js:621` pasan a citar la función (`vistaEjercicio`), que no se mueve con cada cambio del archivo.
   - DS-18: R7.9 remite al procedimiento comprobado de `herramientas.md` (`pdftotext -layout` y `pdftoppm`).
8. **P8 · Versionado:**
   - `93b2866`: el trabajo de la aplicación (validación centralizada, Grupos 1 y 2).
   - `078e3ce`: el conjunto de la auditoría (`herramientas.md` §4), con la auditoría con DeepSeek y la herramienta de disponibilidad.
   - Fuera: `CONTEXTO_CONTINUIDAD_CHATGPT.md` y la configuración de Obsidian.

## Decisiones del desarrollador (2026-10-20)

Responden a D2 (Q2) y D3 (Q1) del informe `deepseek/analisis-claude/sesion-autonoma-2026-10-19.md` §8. **Cambian el catálogo, pero no aprueban ningún ejercicio:** los 220 siguen en `borrador`. Detalle completo, con cada cambio, su regla y la medición de disponibilidad: `plan-cambios-q1-q2.md`.

9. **P9 · Q1 (D3) resuelta: `ambos_brazos` por el criterio conservador.**
   - Texto de la decisión (literal): «D3 (Q1): SI, me remito al criterio conservador». Después, al preguntarle si D3 cubre también el trabajo simultáneo de los dos brazos: «Si, Cierra D3 si ya esta».
   - Cuentan como `ambos_brazos`:
     - el apoyo de las dos manos para la estabilidad;
     - el uso de los dos brazos a la vez, también cuando una mano se apoya y el otro brazo trabaja;
     - la alternancia continua de los dos brazos.
   - No cuentan las series hechas con un brazo y después con el otro, ni las manos en reposo (§7.1).
   - Los `true` que se apoyan en el apoyo, la duda o la alternancia llevan la nota `[conservadora]` (R2.4).
   - Aplicado: 50 ejercicios pasan a `ambos_brazos: true`.
   - Quedan pendientes, porque «sujétate» no dice con cuántas manos: `estiramiento-aductores-pie` y `marcha-sitio-apoyo`.
10. **P10 · Q2 (D2) resuelta: `agarre` por el criterio conservador, con el verbo de la fuente.**
    - Texto de la decisión (literal): «D2. De acuerdo con la aplicacion propuesta, solo una modificacion, apliquemos el criterio conservador y mantengamos como "true", solamente apliquemos lo de usar el verbo de la fuente. Cierra Q2 y documenta esta decision.»
    - Antes, se exploraron con DeepSeek las objeciones a D2 (consulta C2, DS-97 a DS-108; `deepseek/analisis-claude/fase-01-d2-objeciones.md`). La que se sostenía (DS-100, DS-105) era que la regla asimétrica no permite un `false` con una instrucción neutra. Queda resuelta porque la etiqueta se mantiene en `true`.
    - El contacto o el apoyo sin evidencia de prensión no demuestra un agarre (R7.4), pero se marca `agarre: true` con la nota `[conservadora]`.
    - La instrucción usa el verbo de la fuente: «apoya las manos en el respaldo», en lugar de «con las manos en el respaldo».
    - Aplicado: 5 instrucciones reescritas y 9 notas en `agarre` (7 de apoyo sin prensión, `deslizar-toalla-pared` y `remo-inclinado-botella`, cuyo agarre es por la botella). Ninguna etiqueta de `agarre` cambia de valor.
    - Se cerraría con una revisión profesional que confirme que basta apoyar la palma abierta (DS-95, DS-102).
11. **P11 · Q8(a), el rótulo:** `ETIQUETA_EXIGENCIA.ambos_brazos` pasa de «usar los dos brazos a la vez» a «usar los dos brazos» (propuesta D11 de `consolidacion-lotes-1-5.md`). Se cambia junto con P9, como pide el protocolo. Los filtros no cambian.
12. **Ediciones de documentación:**
    - El protocolo: Q1, Q2 y Q8(a) en §13, R7.5, la fila «Apoyo para estabilidad» de §7.1 y el historial. Se mantiene la versión 1.0.
    - La especificación §7.4: dos viñetas.
    - Por indicación del desarrollador, **no se actualizan** `deepseek/ESTADO.md` ni `CONTEXTO_CONTINUIDAD_CHATGPT.md`.
13. **Entorno:** el desarrollador autorizó crear `.claude/settings.json` en la copia de trabajo de `main`, con `"worktree": {"bgIsolation": "none"}`, para que los trabajos en segundo plano de Claude Code puedan editar el worktree `desarrollo-v1`. Las credenciales de git no intervenían: el repositorio no tiene remotos.

**Efectos conocidos:**
- `node scripts/auditoria.mjs validar` da 13 avisos nuevos (18 en total). Los informes de los lotes 1 a 5 recogen el valor anterior de `ambos_brazos`. Por regla, no se sobrescriben; se revisarán con el protocolo.
- El bloque `catalogo-de-pie` que se envía a DeepSeek queda en 59 851 de los 60 000 caracteres permitidos. Por eso las notas son breves. **La próxima nota en un ejercicio de pie lo hará superar el límite**, y habrá que dividir el bloque o revisar el límite antes de la siguiente fase con DeepSeek. *Resuelto en P15.*

14. **P14 · Plan de Q3 (familia `sentarse-levantarse`): opción B.**
    - Texto de la indicación (literal): «Haz el commit y sigue con el plan de Q3 y las demas cosas a corregir. Puedes seguir llamando a Deepseek con normalidad». Antes, el desarrollador había pedido no consultarle más, salvo que fuera crítico.
    - Claude eligió la B por tres motivos: el criterio conservador que el desarrollador adoptó en P9 y P10; la consulta C3 a DeepSeek (DS-109 a DS-123); y la calificación de las imágenes (la foto B del NHS es D de una inclinación mayor que la leve, y los dibujos de Ealing son N).
    - Aplicado: `sentarse-levantarse` pasa a `inclinacion_tronco: true` y se sustituye su nota «La inclinación es leve…». `sentarse-levantarse-sin-manos` recibe la nota `[conservadora]` que le faltaba.
    - Detalle: `plan-cambios-q3-sentarse-levantarse.md` §6. Análisis de C3: `deepseek/analisis-claude/fase-02-q3-sentarse.md`.
    - Si el desarrollador prefiere la A, se revierte cambiando dos campos.
15. **P15 · Herramienta de DeepSeek: bloque de pie por partes.**
    - Los bloques `catalogo-de-pie` admiten `"parte": "n/m"`, que envía el tramo n de m en el orden del catálogo, para no superar `MAX_CARACTERES_BLOQUE` (60 000). El límite no se ha subido.
    - Las fases ya ejecutadas no se editan: son el registro de lo que se envió.
    - Prueba: `tests/auditoria-ia-documental.test.mjs`. Comprueba que las partes, juntas, son exactamente los ejercicios de pie y que se rechazan las partes mal formadas.
    - Además, un tipo de bloque `catalogo-ids` envía ejercicios concretos, completos, por su id. Lo usa la consulta C4.

## Decisiones aplicadas por delegación (2026-10-21)

El desarrollador pidió seguir con «las demas cosas a corregir» sin consultarle salvo que fuera crítico. Lo que sigue lo decidió Claude, con la evidencia citada, y se puede revertir.

16. **P16 · Plan de Leicester, revisado y aplicado; lote 6.**
    - Reauditoría con el protocolo 1.0 de los 11 ejercicios del folleto (`lote-06.md`), con la fuente abierta de nuevo. Mismo SHA-256 que el 2026-10-18; texto e imágenes revisados.
    - La revisó DeepSeek (consulta C4, DS-124 a DS-144). Las correcciones aceptadas y las rechazadas, con su motivo, están en el informe, en «Revisión de DeepSeek y aplicación».
    - Aplicado a los 11:
      - `fuente.especifica_de` = «usuarios de silla de ruedas», según la decisión 3;
      - las aclaraciones y adaptaciones del plan;
      - `fuente.consultado` = 2026-10-21;
      - notas de series en blanco (§5.1).
    - Respecto al plan de 2026-10-18:
      - en `estiramiento-isquiotibiales-sentado`, el otro pie bajo la rodilla, una adaptación con su tabla R3.3;
      - en `marcha-sentado-manos-cadera`, «descansando en la cadera»;
      - en `curl-biceps-sentado`, `brazo_sobre_hombro`: `false` → `true` por evidencia D (CN-1). Efecto: `brazo_arriba` pasa de 184 a 183 en modo auditoría.
    - Ilustración de `boxeo-circulos-alto` corregida (los puños, a la altura de la nariz; R7.6), en `d179beb`.
    - Los 11 quedan en LISTO PARA APROBACIÓN DOCUMENTAL. **Siguen en `borrador`:** pasar a `basado_en_fuente_publica` exige que el desarrollador los revise y rellene `revisado_por` y `fecha_revision` (especificación §7.6).
17. **P17 · Q8(b): texto de procedencia en la ficha.**
    - Se implementa, sin cambios, el texto propuesto en `propuestas-cierre-protocolo.md` §2. Es fiel a la aclaración aprobada en P2: el material se dirige a un grupo, pero no es exclusivo de él ni adecuado para todo el grupo; vale si es compatible con el perfil, y eso no es una garantía de seguridad.
    - Aparece en `vistaEjercicio` (`public/js/app.js`, constante `PROCEDENCIA`) bajo «Material pensado para: …», y solo si hay `especifica_de`.
    - Prueba en el navegador: `tests/navegador/flujos.test.mjs`, «ficha: la aclaración de procedencia…».
    - Era necesario antes de publicar cualquiera de los 60 ejercicios con `especifica_de`.
18. **P18 · Lote 7: reauditoría de 8 ejercicios del NHS.**
    - Ejercicios: `marcha-sentado-sujetandose`, `estiramiento-tobillo-sentado`, `sentarse-levantarse`, `mini-sentadillas`, `elevacion-talones-apoyo`, `elevacion-lateral-pierna`, `extension-pierna-atras` e `inclinacion-lateral-de-pie`.
    - Fuentes abiertas de nuevo (texto y fotos); ilustraciones comparadas sin discrepancias.
    - Aplicado: dos notas conservadoras pasan al formato de R2.4 (`estiramiento-tobillo-sentado` y `mini-sentadillas`). Ninguna etiqueta cambia.
    - Los 8 quedan en LISTO PARA APROBACIÓN DOCUMENTAL (`lote-07.md`). Siguen en `borrador`.
19. **P19 · Lote 8: reauditoría de 4 ejercicios de Age UK Devon.**
    - Ejercicios: `elevar-rodar-hombros-sentado`, `pulgar-dedos`, `activacion-sentado` y `banda-remo-sentado`.
    - El PDF se abrió de nuevo (SHA-256 `32ccd13c…`) y se renderizaron las páginas a dos columnas (R7.9).
    - Aplicado:
      - `pulgar-dedos`: `brazo_sobre_hombro` pasa de `false` a `true`, conservador (clase de CN-1), y la nota de `agarre` pasa a evidencia D (§4, cierre parcial);
      - `banda-remo-sentado`: ilustración frontal y nombre «Abrir la banda a la altura del abdomen» (antes, «Remo con banda elástica», que sugería otro movimiento; R7.6);
      - `consultado` en los 4.
    - Tras la revisión de DeepSeek (C6, DS-157 a DS-167):
      - el `agarre` de `pulgar-dedos` y el `esfuerzo_cardio` de `activacion-sentado` pasan a conservadores, con su nota (no cambia ningún valor);
      - se aclara la instrucción 4 de `banda-remo-sentado`;
      - **se aprueba la adaptación «solo la primera ronda» de `activacion-sentado`** (R3.1: subconjunto de la fuente).
    - Disponibilidad (modo auditoría): `brazos: brazo_arriba` pasa de 183 a 182.
    - Los 4 quedan en LISTO PARA APROBACIÓN DOCUMENTAL (`lote-08.md`). Siguen en `borrador`.
    - **Con este lote hay 23 ejercicios en LISTO PARA APROBACIÓN DOCUMENTAL, todos reauditados con el protocolo 1.0** (lotes 6 a 8). Son los 18 «LISTO» de los lotes 1 a 5 y 5 de Leicester que requerían correcciones. Los otros 11 «REQUIERE CORRECCIONES» de los lotes 1 a 5 quedan para la revisión posterior que pidió el desarrollador.
20. **P20 · Lote 9: primera auditoría de 7 ejercicios** (Royal Berkshire «Stage 1» y NHS «Breathing exercises for stress»).
    - Se eligieron para llenar los huecos del primer lote público: la parte principal sentada sin agarre y la calma sin inclinar la espalda.
    - Fuentes abiertas: los PDF y la página, con sus hashes; también NHS Forth Valley, para verificar la pauta de dosis que se cita.
    - Aplicado:
      - `especifica_de` = «rehabilitación tras un ingreso hospitalario» en los 5 de Royal Berkshire (R8.1: «During and after a stay in hospital»);
      - la dosis de los 2 tumbados pasa a la pauta verificada de Forth Valley (antes, una pauta sin fundamento);
      - `flexion-hombro-lado-tumbado`: `flexion_profunda_rodilla` y `flexion_amplia_cadera` pasan a `true` conservador, porque no consta la postura de las piernas. Efecto: `rodilla` de 199 a 198 y `cadera` de 185 a 184;
      - `respiracion-tranquila-tumbado`: **se retira una nota que atribuía a la fuente un consejo que la página no contiene**;
      - `consultado` en los 7.
    - Royal Devon devolvió 403: sus 3 ejercicios quedan sin auditar.
    - **Incidencia de aplicación, ya corregida:** un reemplazo global cambió por error una frase de adaptación en 20 ejercicios de otras fuentes. Se revirtió antes de confirmar y se comprobó contra `HEAD`.
    - Los 7 quedan en LISTO PARA APROBACIÓN DOCUMENTAL (`lote-09.md`). Siguen en `borrador`.

## Aprobaciones del desarrollador (2026-10-21)

**Este es el apartado en el que se aprueban ejercicios.** Cada aprobación también figura en la columna «Decisión del desarrollador» de la tabla «Ejercicios auditados». Surte efecto en `public/data/catalogo.json` (`validacion.estado`, `revisado_por`, `fecha_revision`). `node scripts/auditoria.mjs validar` da error si un ejercicio sale de `borrador` sin una aprobación registrada aquí.

21. **P21 · Primer lote público: 30 ejercicios aprobados como `basado_en_fuente_publica`.**
    - Texto de la decisión (literal): «Sí, apruébalos y pon revisado_por: JJhiru».
    - Ejercicios: los 30 de la tabla con «aprobado (2026-10-21, P21)». Son los de los lotes 6 a 9, todos auditados con el protocolo 1.0 y con resultado LISTO PARA APROBACIÓN DOCUMENTAL.
    - En el catálogo: `estado` = `basado_en_fuente_publica`, `revisado_por` = «JJhiru», `fecha_revision` = `2026-10-21` (especificación §7.6).
    - **Qué significa:** la auditoría documental contrastó cada ejercicio con su fuente pública, y su autor lo revisó. **No es una validación clínica ni profesional:** `revisado_por_profesional` queda sin usar, y la validación profesional sigue como riesgo abierto (especificación §7.5).
    - Efecto: fuera del modo desarrollo, el motor ya puede usar estos 30. Los otros 190 siguen en `borrador`.
