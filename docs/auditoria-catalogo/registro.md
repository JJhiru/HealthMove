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
| 10 | recoger-toalla-dedos-pies | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 10 | banda-tobillo-fuera-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 10 | cuadriceps-estatico-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 10 | cruce-piernas-isometrico | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 11 | elevacion-pierna-recta-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 11 | apretar-gluteos-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 11 | de-pie-mano-preparada | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 11 | balanceo-brazos-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 11 | elevar-talones-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 11 | secarse-toalla-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 11 | paso-atras-apoyo | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 11 | abrazar-rodilla-tumbado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 11 | gemelo-banda-suelo | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 12 | elevacion-brazos-tumbado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 12 | banda-elevar-brazo-tumbado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 12 | banda-flexion-codo-tumbado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 12 | circulos-hombros-tumbado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 12 | apretar-gluteos-tumbado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 12 | abduccion-cadera-tumbado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 12 | banda-separar-pierna-tumbado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 12 | elevacion-pierna-recta-tumbado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 12 | banda-elevacion-pierna-tumbado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 12 | deslizar-talon-tumbado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 12 | banda-deslizar-talon-tumbado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 12 | puente-tumbado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 12 | banda-puente-tumbado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 12 | rodilla-al-lado-tumbado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 12 | bombeo-tobillos-tumbado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 13 | puno-extension-codo-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 13 | estiramiento-pecho-manos-lumbar | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 13 | estiramiento-pecho-manos-lumbar-pie | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 13 | abrir-pierna-brazo-pared | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 13 | suelo-pelvico-lentas | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 13 | suelo-pelvico-rapidas | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 13 | manos-entrelazadas-arriba-tumbado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 13 | circulos-pierna-lado-suelo | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 13 | rodillas-lado-lado-suelo | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 14 | circulos-rodilla-tumbado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 14 | control-abdominal-brazos-arriba | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 14 | abdominal-isometrico-muslos | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 14 | oblicuos-isometricos-tumbado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 14 | movilizacion-ciatico-tumbado | REQUIERE REVISIÓN PROFESIONAL | pendiente |
| 14 | cruzar-pierna-tumbado | PENDIENTE DE DECISIÓN | pendiente |
| 14 | autoelongacion-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |

## Pendientes

- Auditados: 85 de 225 (lote 14, 2026-10-24). Desde P29 se audita por fuente con DeepSeek; la lista de fuentes pendientes está en `evidencia/plan-lotes.md`. **Royal Devon está bloqueada** (403 desde el script, 2026-10-21): hace falta descargar su PDF a mano para auditar sus 3 ejercicios.
- Lista de candidatos a adaptación unilateral: ver los resúmenes de los lotes 1, 3 y 4.
- ~~Tarea de interfaz pendiente: comunicar `especifica_de` (decisión 3).~~ Hecha en P17 (2026-10-21).
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
- Estado: **resuelto por P25 (2026-10-22)**. Manda la definición literal; la mano que pasa del hombro al doblar el codo cuenta. Ver P25 y `deepseek/analisis-claude/fase-08-cn1.md`.

### CN-2 · Preparar el material antes de empezar
- Ejercicio(s): `banda-tobillo-fuera-sentado` y `recoger-toalla-dedos-pies` (lote 10). Casos equivalentes sin auditar: los que piden poner un lazo de banda en las rodillas, los muslos, los tobillos o los pies (por ejemplo, `banda-separar-pierna-tumbado`, `banda-puente-tumbado`, `banda-elevacion-pierna-tumbado` y `banda-deslizar-talon-tumbado`).
- Detalle: la especificación §4 marca una exigencia si aparece «en cualquier momento del ejercicio (posición inicial, movimiento o vuelta)». No dice si cuenta la preparación del material: atar un lazo de banda (dos manos y cerrar la mano), meter el pie en él o dejar una toalla en el suelo (llegar al pie o al suelo).
- Evidencia: D, «Make a loop out of a piece of elastic fitness band» (Arthritis UK, «Seated ankle out stretch with resistance band») y la imagen, con el nudo. D, «Sit down with a towel on the floor in front of you».
- Reglas consideradas y por qué no resuelven: §4 enumera las fases del ejercicio, y la preparación no está entre ellas ni excluida. R2.1 permitiría marcar ante la duda, pero se aplica a una exigencia dudosa del ejercicio, no a decidir qué forma parte del ejercicio. DG-6 trata los consejos de seguridad, no la preparación.
- Propuesta del auditor (sin aplicar): tres opciones. (a) La preparación cuenta: más `true` (`agarre`, `ambos_brazos`, y a veces `inclinacion_tronco` o `flexion_amplia_cadera`) en todos los ejercicios con banda en las piernas. (b) No cuenta si la puede hacer otra persona antes, y la instrucción la separa como preparación («Antes de empezar, o con ayuda: …»). Es un texto de interfaz y pasaría por `healthmove-safety-reviewer`. (c) No cuenta nunca.
- Valor provisional: el actual en los dos ejercicios. Ningún cambio sin aprobación.
- Alcance (DS-231, 2026-10-22): 23 ejercicios con banda o toalla y un paso de preparación, 22 en borrador y 1 publicado (`extension-codo-toalla-tumbado`, «Pon una toalla doblada bajo el antebrazo»). Con la opción (a) cambiarían 14, entre ellos el publicado. La opción (b) incluye un texto de interfaz (Q8, DS-232).
- Estado: **resuelto por P28 (2026-10-23), opción (c)**: la preparación del material no cuenta como parte del ejercicio. Ninguna etiqueta cambia. Incorporado a la especificación §4.

### CN-3 · Apoyo de las manos que solo aparece en la imagen
- Ejercicio(s): `cruce-piernas-isometrico` (lote 10; las dos manos sujetan el borde en la imagen). Relacionado: `recoger-toalla-dedos-pies` (una mano; la imagen es I y encaja en Q2).
- Detalle: la imagen de la fuente muestra con claridad (D) que las manos se sujetan, pero el texto no lo pide. No se sabe si ese apoyo forma parte de la ejecución o es solo la postura del dibujo.
- Evidencia: D (imagen «Leg Cross Stretch», Arthritis UK). El texto: «Sit on the edge of a table, seat or bed and cross your ankles».
- Reglas consideradas y por qué no resuelven: Q1 y Q2 tratan el contacto o el apoyo cuya prensión no se ve. R7.5 trata la imagen que no determina un requisito. Aquí la imagen determina el apoyo, pero no si el ejercicio lo exige (DS-226).
- Propuesta del auditor (sin aplicar): (a) cuenta, con `true` conservador, que es el valor actual; (b) no cuenta si el texto no lo pide y el movimiento no lo necesita.
- Valor provisional: `ambos_brazos` y `agarre` en `true` conservador (P24).
- Estado: **aplazado (P28, 2026-10-23)**. Se mantiene el valor provisional.

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

## Decisiones del desarrollador (2026-10-22)

Sobre el informe `problemas-pendientes-2026-10-21.md`.

22. **P22 · Aplazamientos y encargos.**
    - **C1 (validación profesional), aplazado.** Texto (literal): «Ignoralo y marca la razon (aun no tenemos profesionales trabajando)». El riesgo sigue abierto y declarado en la app (especificación §7.5). No cambia `revisado_por_profesional`.
    - **G7 y G8, aplazados.** Texto (literal): «dejemoslos para despues». Los archivos de continuidad no se actualizan y las fuentes con error 403 siguen sin descargar.
    - **C3: continuar auditando** por lotes, con aprobación del desarrollador en cada uno (P21).
    - **CN-1:** el desarrollador pide ejemplos que se repitan para precisar la definición. Preparados en `cn1-ejemplos-2026-10-22.md`. CN-1 sigue pendiente.
    - **Q5:** el desarrollador revisará todas las adaptaciones frente a su fuente. Preparado en `adaptaciones-q5-2026-10-22.md`. Q5 sigue pendiente.
    - En el informe, G1 pasa a la tabla de críticos como C4 (DS-180).

23. **P23 · C2 (D5) por la opción (c); C4 y Q5 para después; autorización para modificar el catálogo.**
    - **Textos (literales):** «C2: opcion c», «C4: Para despues», «Q5: luego lo reviso», «te doy autorizacion de modificar el catalogo si lo necesitas».
    - **C2 / D5, aplicado:** los 5 ejercicios con `sentado,de_pie` que eran alternativas, y no una secuencia, se separan en dos entradas. La que conserva el id es sentada (`posiciones: [sentado]`). La nueva, `<id>-pie`, es de pie (`posiciones: [de_pie]`, sin `silla`) con `equilibrio_sin_apoyo: true` y `variante_de` apuntando a la sentada: con las dos manos ocupadas no hay forma de sujetarse (especificación §7, regla 4).
      - Ejercicios: `estiramiento-hombro-cruzado`, `estiramiento-triceps`, `estiramiento-pecho-manos-lumbar`, `estiramiento-pecho-manos-detras` y `manos-espalda-codo-contrario`.
      - Cada versión lleva un primer paso con su posición. `estiramiento-pecho-manos-lumbar` sentado lleva la adaptación «La fuente lo describe de pie; aquí se hace sentado» (R3.1, pendiente de Q5). Lo que dice cada fuente sobre la posición está en `notas_etiquetado`.
      - Ninguna otra etiqueta cambia. Los 10 siguen en `borrador`, sin auditar.
      - Con esto, `posiciones` significa en todo el catálogo «todas las que usa el ejercicio» (especificación §3): los otros 3 con `sentado,de_pie` son secuencias de sentarse y levantarse. **D5 queda resuelta.**
      - Ilustraciones de pie nuevas en `scripts/ilustraciones/depie.mjs` (225 en total); `sw.js` actualizado.
      - El catálogo pasa de 220 a 225 ejercicios. No cambian `version` ni `actualizado`, como en P16 a P21.
    - **C4 (huellas, protocolo 1.1) y Q5:** aplazados.
    - **Autorización:** Claude puede modificar `public/data/catalogo.json` cuando lo necesite, con la evidencia y las decisiones de este registro. Aprobar ejercicios (P21) y fijar criterios nuevos siguen siendo decisiones del desarrollador.
    - **CN-1:** el desarrollador acepta la propuesta de `cn1-ejemplos-2026-10-22.md` y pide cerrarla con DeepSeek (consulta C9, `deepseek/fases/fase-08-cn1.*`).
24. **P24 · Lote 10: cambios aplicados por la autorización de P23.**
    - Se aplica todo lo de `lote-10.md` que no depende de CN-2 ni de Q5.
    - Etiquetas, todas `true` conservadoras con su nota: `agarre` en `recoger-toalla-dedos-pies`; `flexion_profunda_rodilla` en `banda-tobillo-fuera-sentado`; `ambos_brazos` y `agarre` en `cruce-piernas-isometrico`.
    - Textos: las aclaraciones de las instrucciones, la dosis «Hasta 10 veces» y las adaptaciones del informe; `especifica_de` («pies y tobillos», «cadera», «rodilla») y `consultado` (2026-10-22) en los 4.
    - Sin aplicar: lo que depende de CN-2 (`agarre` y `ambos_brazos` de `banda-tobillo-fuera-sentado`) y de Q5 (la posición de `cuadriceps-estatico-sentado` y la postura de las piernas y la ilustración de `cruce-piernas-isometrico`).
    - `recoger-toalla-dedos-pies` pasa de REQUIERE CORRECCIONES a PENDIENTE DE DECISIÓN (CN-2). Los 4 siguen en `borrador`.
    - Revisión de DeepSeek del lote: pendiente (la consulta C9 de CN-1 no se pudo enviar: la clave leída no tenía un formato válido).
25. **P25 · CN-1 resuelto con DeepSeek (consulta C9), por delegación de P23.**
    - Consulta: `deepseek/ejecuciones/20261023T021407Z-fase-08-cn1` y sus dos continuaciones (DS-186 a DS-222). Análisis: `deepseek/analisis-claude/fase-08-cn1.md`.
    - **Criterio**, incorporado a la especificación §4:
      - manda la definición literal: codo o mano por encima de la altura del hombro, en cualquier momento (también en la postura de partida) y lo mueva quien lo mueva;
      - cuenta la mano que pasa del hombro solo porque se dobla el codo;
      - `true` conservador si el brazo llega «hasta», «a» o «casi» a la altura del hombro sin que conste que no la pasa, y si, tumbado, el brazo se separa del tronco;
      - `false` con evidencia si la mano se apoya en el hombro con el codo por debajo y el texto lo fija.
    - **No es una regla nueva:** aplica la definición de §4 con R2.1 y R2.2. Se retiran de la propuesta los dos umbrales sin definir («más allá de la horizontal» y «como si estuviera de pie»), como pedía DeepSeek (DS-203 y DS-204).
    - **Aplicado:** 23 ejercicios en `borrador` pasan `brazo_sobre_hombro` a `true` conservador, con su nota; la nota de `marcha-circulos-codos-sentado` pasa al formato `[conservadora]`. Ningún publicado cambia. `brazo_arriba` (modo auditoría): 186 → 163.
    - **Pendiente, de interfaz (DS-210, Q8):** el texto de la opción `brazo_arriba` describe menos de lo que filtra. Propuesta sin aplicar: «No puedo, o me cuesta, subir el brazo o la mano por encima del hombro».
26. **P26 · M3 (DS-27) revisado: ningún falso negativo; corrección de `banda-elevar-brazos-pie`.**
    - Encargo (literal): «M3: arreglalo entonces we».
    - Ya se habían revisado las fuentes de los 11 ejercicios con `equilibrio_sin_apoyo: true` (`deepseek/analisis-claude/evidencia-fuentes-q1-q2.md` §4 quater). En 9, la fuente pide hacerlo sin apoyo o con las manos ocupadas. `sentarse-levantarse` se cerró en el lote 7 (DS-154). En `elevaciones-laterales-botella`, poner la mano libre en un apoyo sería una variante sin fuente (DG-5). Las 5 versiones de pie de P23 tienen las manos ocupadas. **Ninguna etiqueta de `equilibrio_sin_apoyo` cambia.**
    - El único caso abierto, `banda-elevar-brazos-pie`, se abrió de nuevo: South Tees, «Rotator cuff in standing with resistance band», `https://www.southtees.nhs.uk/?p=32161`, actualizada el 09-07-2024, HTML con SHA-256 (prefijo) `f796dbe915372ef7`, texto y figuras A a C.
      - Las fotos: de pie, sin apoyo, con las dos manos cerradas sobre la banda. `equilibrio_sin_apoyo: true` es correcto (D).
      - **Corregido:**
        - `agarre` pasa de `false` a `true` (D: las fotos);
        - las instrucciones: «Arms are parallel» (Fig. A) son los brazos paralelos entre sí, colgando delante de los muslos, no «paralelos al suelo»;
        - nueva adaptación: «hasta donde te resulte cómodo» en lugar de «as high as the physiotherapist has directed»;
        - la ilustración empieza con los brazos abajo (R7.6);
        - `consultado` = 2026-10-22.
      - Sigue en `borrador`: no tiene informe de lote. Efecto: sale de `cerrar_mano` (modo auditoría).
27. **P27 · Revisión de DeepSeek del lote 10 (consulta C10).**
    - Consulta: `deepseek/ejecuciones/20261023T022202Z-fase-09-lote10` y su continuación (DS-223 a DS-240). Análisis: `deepseek/analisis-claude/fase-09-lote10.md`.
    - Nuevo **CN-3** (apoyo que solo aparece en la imagen), con el valor actual como provisional. Se cuenta el alcance de CN-2. Ninguna etiqueta cambia.
    - La consulta C9 (CN-1), que en P24 figuraba como no enviada, se hizo después con la clave del `.env` (P25).
28. **P28 · CN-2, D8, CN-3, Q5, M2 y M5.**
    - **Textos (literales):** «CN-2: la decisión era que preparar el material para el ejercicio no cuenta como parte del mismo.», «D8/G5: opción A», «CN-3: para después», «Q5: ya los revisé, apruébalos.», «M2: se muestran sólo 4 ejercicios porque el resto no han sido aprobados.», «M5: consulta a Deepseek alguna solución.»
    - **CN-2, opción (c):** preparar el material (atar o colocar una banda, dejar una toalla en el suelo o bajo el brazo) no marca exigencias. Incorporado a la especificación §4 y a la skill de auditoría (§5, paso 2). Ninguna etiqueta cambia: `agarre` y `ambos_brazos` de `banda-tobillo-fuera-sentado` quedan en `false` (nota actualizada) y el publicado `extension-codo-toalla-tumbado` no cambia.
    - **D8 (G5), opción (a):** el validador sigue comprobando solo `impacto`. Las demás exclusiones del catálogo v1 las comprueba la auditoría de cada ejercicio. Documentado en la especificación §4 y añadido a «Otros campos» de la skill de auditoría, que antes no lo pedía. Sin cambios en el validador.
    - **CN-3:** aplazado. Valor provisional, el actual (`true` conservador).
    - **Q5:** el desarrollador aprueba las adaptaciones de `adaptaciones-q5-2026-10-22.md` (apartados 1 a 4). La columna «¿Pasa R3.1?» del documento no se rellenó: la aprobación es global. Se registra como **aprobación individual** de las adaptaciones presentadas (la salida que prevé el protocolo §13 si la prueba no se confirma), no como confirmación de la prueba: `cruce-piernas-isometrico` con los pies en el suelo no pasa la cláusula «si el texto no da rango y la imagen lo muestra, la imagen fija el rango». En el apartado 2 el texto de la fuente estaba pendiente; su auditoría (C3) sigue contrastando cada adaptación con la fuente.
      - Aplicado en el catálogo: `cuadriceps-estatico-sentado` (las dos adaptaciones de `lote-10.md`, nota de posición); `cruce-piernas-isometrico` (adaptación «La fuente muestra las piernas estiradas al frente; aquí se hacen con los pies apoyados en el suelo.», instrucción 1 «Siéntate en el borde del asiento, con los pies apoyados en el suelo, y cruza los tobillos.», nota). La ilustración ya sigue esa postura: la discrepancia de R7.7 queda cerrada. `estiramiento-pecho-manos-lumbar`: nota (la versión sentada se acepta; sigue sin auditar).
    - **Lote 10:** los 4 pasan a LISTO PARA APROBACIÓN DOCUMENTAL. Siguen en `borrador` hasta que el desarrollador los apruebe (P21).
    - **M2:** se deja como está (ya decidido el 2026-10-22). Sin cambios. **Comprobado en el código:** `vistaAcerca` (`app.js`) lista las fuentes de todos los ejercicios válidos, también los borradores: 79 documentos, de los que solo 7 (de 4 organizaciones) tienen ejercicios publicados. Si se quiere que salgan solo esos, es la propuesta original de M2 (filtrar con `estadoUtilizable`).
    - **M5 (Q7):** consulta C11 a DeepSeek hecha (`deepseek/ejecuciones/20261024T024933Z-fase-10-m5`, DS-241 a DS-250; análisis en `deepseek/analisis-claude/fase-10-m5.md`). Recomienda, sin decidir, un aviso genérico en la ficha y en el resumen de exclusiones (O4), después de que el validador compruebe el formato `[conservadora]` (m3) y con revisión de seguridad del texto. Q7 sigue abierta hasta que el desarrollador elija.
29. **P29 · Auditoría del resto del catálogo, repartida con DeepSeek; aprobaciones al final.**
    - **Texto (literal):** «Mira, con lo que ya se puede auditar la mayoria del catalogo, divide entre tu y deepseek sin importar el costo de api, y las revisiones finales la dejamos para despues. Manda el commit»
    - **Reparto:** Claude abre las fuentes y escribe la evidencia (`evidencia/lote-NN.md`); DeepSeek redacta el borrador del lote (fase `fase-NN-loteNN`); Claude lo verifica contra las fuentes, escribe `lote-NN.md` y aplica los cambios con la autorización de P23. Las correcciones de Claude al borrador se listan en cada informe.
    - **Aprobaciones:** ningún ejercicio cambia de `borrador` hasta la revisión final del desarrollador. Tampoco los nombres nuevos de `especifica_de` ni las adaptaciones nuevas (Q5, una a una), que se listan en cada resumen de lote.
    - **Bloqueados:** los 7 ejercicios de fuentes que devuelven 403 (Royal Devon, CDC/Tufts y la copia de ACPRC) siguen esperando G8.
    - **Lote 11** (St Helens, NHS Forth Valley y NHS Fife): 9 ejercicios, los 9 listos. Consulta C12.
    - **Lote 12** (Royal Berkshire, «Bed exercises and stretches»): 15 ejercicios, los 15 listos. Consulta C13. `especifica_de` «encamados» y `flexion_profunda_rodilla` conservadora en los dos puentes.
    - **Lote 13** (Royal Berkshire pulmonar y core, Royal Papworth, RUH Bath): 9 ejercicios, los 9 listos. Consulta C14. `esfuerzo_cardio` en Star Jacks; «mujeres» en el suelo pélvico.
    - **Lote 14** (Hospital Clínico San Carlos, columna lumbar): 7 ejercicios; 5 listos, `movilizacion-ciatico-tumbado` REQUIERE REVISIÓN PROFESIONAL y `cruzar-pierna-tumbado` PENDIENTE DE DECISIÓN (DS-378). Consulta C15.
