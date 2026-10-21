# Problemas críticos y graves pendientes · 2026-10-21

> **Informe de Claude, revisado con DeepSeek** (consulta C8, §5). No es una fuente de autoridad ni una decisión: si choca con `protocolo.md` o `registro.md`, mandan ellos.
>
> **Estado de partida** (commit `04c49c7`, comprobado hoy):
> - 30 ejercicios publicados (`basado_en_fuente_publica`, P21) y 190 en `borrador`.
> - 41 de 220 auditados.
> - `npm test` 210/210, navegador 11/11, `node scripts/auditoria.mjs validar` con 0 errores.
> - Cuestiones abiertas del protocolo: Q4, Q5, Q7 y Q8(c).

## 1. Criterio de gravedad

- **Crítico:** puede hacer que la app ofrezca un ejercicio que exige algo que la persona ha dicho que no puede hacer, o deja un riesgo de seguridad sin cubrir. También lo que impide ampliar el catálogo publicado.
- **Grave:** no pone en riesgo directo a nadie, pero rompe la trazabilidad o la coherencia de la auditoría, o hará que se repitan errores al seguir.
- **Fuera del informe (menores):**
  - D6, ciclos de `variante_de`: el catálogo no tiene ninguno y el motor ya los trata;
  - Q4, una frase de la especificación;
  - DS-11 y C-5, textos de interfaz;
  - la lista de «Fuentes» de la página «Ajustes», que incluye fuentes de ejercicios aún no publicados.

## 2. Críticos

| # | Problema | Afecta hoy a lo publicado | De qué depende |
|---|---|---|---|
| C1 | **Validación profesional ausente** (DS-74, DS-75; especificación §7.5). Ningún ejercicio lo ha revisado un fisioterapeuta, ni tampoco los avisos de seguridad de la app (por ejemplo, «Para si notas dolor en el pecho…»). Es el riesgo abierto declarado de la v1 | **Sí**, a los 30 publicados y a los avisos | **De un profesional externo** (fisioterapia o rehabilitación). Lo mínimo sería revisar los avisos de la app y los 30 publicados. Mientras tanto, la app lo declara en «Ajustes, límites y fuentes». La auditoría documental no puede sustituirlo |
| C2 | **DS-52 y D5: cinco ejercicios `sentado,de_pie` con las dos manos ocupadas y `equilibrio_sin_apoyo: false`** (`estiramiento-hombro-cruzado`, `estiramiento-triceps`, `estiramiento-pecho-manos-lumbar`, `estiramiento-pecho-manos-detras`, `manos-espalda-codo-contrario`). Con `de_pie_apoyo` se ofrecerían a quien solo se mantiene de pie sujetándose, sin decirle cómo sujetarse con las manos ocupadas. Tres de sus fuentes los describen de pie sin apoyo (`evidencia-fuentes-q1-q2.md` §3) | No: están en `borrador`. **Bloquea su publicación** | **Decisión D5** del desarrollador: qué significa `posiciones` (secuencia o alternativa). Opciones: (a) `equilibrio_sin_apoyo: true` conservador; (b) dejarlos solo en `sentado`; (c) separar la versión de pie. Después, auditar cada uno con su fuente (la de `manos-espalda-codo-contrario`, CDC/Tufts, devuelve 403) |
| C3 | **179 ejercicios sin auditar y 11 con «REQUIERE CORRECCIONES»** (lotes 1 a 5, entre ellos las 3 ilustraciones con discrepancia de R7.7: `estiramiento-pecho-sentado`, `banda-curl-sentado` y `equilibrio-una-pierna-pared`). La disponibilidad real es estrecha: en la parte principal hay 19 ejercicios para el perfil base, 13 para «solo sentado», 8 para «un brazo» y 7 para «cerrar la mano». `solo_sentado` + `un_brazo` + `cerrar_mano` + `brazo_arriba` todavía no genera rutina | Sí: limita lo que puede hacer la app publicada | **Trabajo de auditoría** (Claude y DeepSeek, por lotes); **aprobación del desarrollador** en cada lote (P21); **fuentes accesibles** (Royal Devon y CDC devuelven 403: hay que descargarlas a mano). Los 11 de los lotes 1 a 5 los dejó el desarrollador para una revisión posterior |

## 3. Graves

| # | Problema | De qué depende |
|---|---|---|
| G1 | **Un ejercicio aprobado puede cambiar sin que nada pida reauditarlo.** La huella literal existe (`node scripts/auditoria.mjs cabecera`), pero el validador no compara la huella del informe con el catálogo actual. Las huellas de compatibilidad, contenido y auditoría (P3) están propuestas y sin implementar (`propuestas-cierre-protocolo.md` §1; protocolo 1.1) | **Decisión del desarrollador** sobre el protocolo 1.1. Después, cambiar el validador (Claude) |
| G2 | **CN-1: «codo o mano por encima del hombro» frente a «levantar el brazo».** Se aplicó la definición literal (curl y `pulgar-dedos`), pero el texto de la opción `brazo_arriba` sugiere otra lectura. Quedan casos equivalentes sin auditar (`flexion-codo-tumbado`) | **Decisión del desarrollador**: mantener la definición y, si se quiere, ajustar el texto de la opción (Q8), o cambiar la definición en la especificación §4 (y reetiquetar) |
| G3 | **Q5: la prueba operativa de R3.1 no está aprobada.** Las adaptaciones se aceptan «con justificación individual» (por ejemplo, la respiración por debajo de «at least 5 minutes»). Dos auditores podrían decidir distinto | **Decisión del desarrollador**: aprobar la prueba de R3.1 o sustituirla (protocolo §13, Q5) |
| G4 | **D4: alcance retroactivo de `[conservadora]`.** Los 41 auditados ya siguen R2.4. En los 179 sin auditar puede haber `true` por precaución sin su nota (había 12 «por precaución» o «por prudencia») | **Se resuelve al auditarlos** (C3). Si el desarrollador quiere adelantarlo: decisión D4 y un barrido de notas |
| G5 | **D8: el validador solo comprueba `impacto` entre las exclusiones del catálogo v1** (cuello, rodillas en el suelo, material especial…). No hay ningún incumplimiento conocido (DS-28/36), pero un ejercicio nuevo podría colarse | **Decisión D8.** Claude propone la (a): dejarlo a la auditoría y documentar en la especificación §4 qué comprueba el validador |
| G6 | **Q8(c) y §8.4: propuestas de mensajes de seguridad sin validar** (contingencias y síntomas). No se trasladan al usuario. Así se cumple la norma, pero puede que falte información útil | **De un profesional** (va unido a C1) y de la skill `healthmove-safety-reviewer` |
| G7 | **Archivos de continuidad desactualizados:** `deepseek/ESTADO.md` (2026-10-19) y `CONTEXTO_CONTINUIDAD_CHATGPT.md` no recogen nada de P9 a P21 ni las consultas C2 a C7. Una sesión nueva que los lea partirá de un estado falso | **Autorización del desarrollador**: él pidió no actualizarlos todavía. `registro.md` sí está al día |
| G8 | **Fuentes inaccesibles desde el script:** Royal Devon (3 ejercicios) y CDC/Tufts (1) devuelven 403 | **Del desarrollador**: descargar los PDF desde el navegador y dejarlos en una carpeta que yo pueda leer |

## 4. Orden propuesto

1. **C1:** buscar la revisión profesional de los avisos de la app y de los 30 publicados. Es lo único que reduce el riesgo de lo que ya está publicado.
2. **G1:** proteger lo aprobado frente a cambios posteriores, antes de seguir editando el catálogo.
3. **C2 (D5)**, antes de auditar más ejercicios con `sentado,de_pie`.
4. **G2 y G3**, decisiones cortas que evitan repetir dudas en cada lote.
5. **C3**, por lotes, empezando por los que cubren los huecos («un brazo», «cerrar la mano»). G4 se resuelve por el camino.
6. **G7**, cuando el desarrollador lo autorice, y **G8**, cuando tenga los PDF.

## 5. Revisión de DeepSeek

**Consulta C8** (`deepseek/ejecuciones/20261021T014919Z-fase-07-pendientes/`, DS-177 a DS-185; 0,014 USD como máximo). DeepSeek **no encontró ningún problema crítico ni grave que falte**. Sus observaciones son sobre la clasificación:

- **DS-180, aceptado. G1 pasa a crítico:** un ejercicio publicado que cambie sin reauditarse afecta directamente a lo publicado. Por eso G1 va segundo en el orden (§4).
- **DS-177, aceptado:** C3 mezcla dos cosas, la ampliación del catálogo (179 sin auditar) y la corrección de los 11 ya auditados (con 3 de R7.7). Las dos dependen de trabajo de auditoría y de la aprobación del desarrollador.
- **DS-179, aceptado:** G6 es la parte de C1 que toca a los mensajes de seguridad. Se resuelven juntos.
- **DS-181, DS-182, DS-183 y DS-184, aceptados como matiz:** G4, G5, G7 y G8 no afectan hoy a lo publicado. Son de proceso o de operación, y pueden considerarse de gravedad media. Se mantienen en la lista porque bloquean trabajo (G8) o la continuidad (G7).
- **DS-178, matizado:** D5 es una decisión pendiente del triage (`deepseek/analisis-claude/fase-01-triage.md`). El registro no la recoge porque todavía no se ha tomado.
- **DS-185, aceptado:** G4 se resuelve dentro de C3; G5 y G8 no tienen orden propio (son una decisión y una descarga), y G6 va con C1.
