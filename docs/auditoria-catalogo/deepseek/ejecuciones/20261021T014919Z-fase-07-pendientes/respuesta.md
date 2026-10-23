# Auditoría de la consulta C8 · revisión del bloque `informe`

**Alcance y límites.** Reviso el bloque `informe` (problemas críticos y graves pendientes, 2026-10-21) contra `protocolo`, `especificacion` y `registro`. No emito juicios clínicos. No he consultado las fuentes originales de los ejercicios ni los informes de lote (`lote-01.md` a `lote-09.md`), `consolidacion-lotes-1-5.md`, `plan-cambios-q1-q2.md`, `plan-cambios-q3-sentarse-levantarse.md`, `propuestas-cierre-protocolo.md`, `evidencia-fuentes-q1-q2.md`, `herramientas.md` ni los archivos de código citados (`scripts/auditoria.mjs`, `scripts/validar-catalogo.mjs`, `public/js/app.js`, `public/js/opciones.js`, `motor.js`). Cuando el informe atribuye algo a esos documentos, lo señalo como **no verificable con lo entregado** y no lo doy por confirmado ni por refutado.

**Nota sobre el estado de partida del informe.** El informe declara «commit `04c49c7`» y «41 de 220 auditados». `registro` confirma 41 auditados (tabla «Ejercicios auditados») y 30 aprobados (P21). El commit no aparece en `registro` ni en `protocolo`; no puedo verificarlo. Lo trato como dato del informe, no como hecho comprobado.

---

## DS-177 · C3 mezcla dos problemas de naturaleza distinta y con dependencias distintas

- **Ubicación:** `informe`, §2 Críticos, fila C3.
- **Evidencia:** «**179 ejercicios sin auditar y 11 con «REQUIERE CORRECCIONES»** (lotes 1 a 5, entre ellos las 3 ilustraciones con discrepancia de R7.7…)». Y en «De qué depende»: «**Trabajo de auditoría**…; **aprobación del desarrollador** en cada lote (P21); **fuentes accesibles**… Los 11 de los lotes 1 a 5 los dejó el desarrollador para una revisión posterior».
- **Problema:** agrupa en una sola fila (a) 179 ejercicios nunca auditados y (b) 11 ya auditados que requieren correcciones, incluidos 3 con discrepancia de ilustración bajo R7.7. Son dos flujos distintos: los 179 dependen de trabajo nuevo; los 11 dependen de reauditoría con el protocolo 1.0 y de resolver las ilustraciones. Además, R7.7 establece una prohibición específica («el ejercicio no se propone para aprobación documental») que no es la misma que «falta auditar». Mezclarlas oculta que los 11 tienen un impedimento normativo propio.
- **Consecuencia potencial:** el orden propuesto (§4, punto 5) trata C3 como un bloque homogéneo «por lotes», y no distingue que los 11 con R7.7 no pueden proponerse aunque se reauditen mientras la ilustración no se corrija. Se puede invertir esfuerzo en reauditar sin resolver el bloqueo real.
- **Nivel de certeza:** alta (la mezcla es literal en el texto; la distinción normativa está en `protocolo` R7.7).
- **Recomendación:** separar C3 en dos filas: C3a (179 sin auditar) y C3b (11 con REQUIERE CORRECCIONES, con subfila para los 3 de R7.7). Cada una con su dependencia.
- **Prueba que lo confirmaría:** leer `lote-01.md` a `lote-05.md` y comprobar que los 11 «REQUIERE CORRECCIONES» incluyen los 3 de R7.7 y que su estado no es «LISTO». `registro` ya lo sugiere (los 11 aparecen como «pendiente»), pero los informes de lote no están entre los documentos entregados.
- **¿Requiere decisión humana?:** no para separar; sí para decidir el orden entre C3a y C3b.

---

## DS-178 · C2 cita «D5» como decisión pendiente, pero `registro` no la recoge como tal

- **Ubicación:** `informe`, §2 Críticos, fila C2; contraste con `registro` (decisiones 2026-10-14 a 2026-10-21) y `protocolo` §13.
- **Evidencia del informe:** «**Decisión D5** del desarrollador: qué significa `posiciones` (secuencia o alternativa)».
- **Evidencia de contraste:** `registro` no contiene ninguna «D5» ni ninguna decisión sobre el significado de `posiciones`. `protocolo` §13 lista Q1–Q8; ninguna es sobre `posiciones`. La correspondencia de `protocolo` §13 con la consolidación menciona «D4 y D5 → DG-4 y Q1», es decir, en el protocolo D5 se asocia a `ambos_brazos`, no a `posiciones`.
- **Problema:** el informe usa «D5» para una cuestión (significado de `posiciones`) que no aparece con ese identificador en `registro` ni en `protocolo`. O bien es una decisión pendiente que no está registrada, o bien el identificador está mal referenciado. En cualquier caso, el informe la presenta como decisión del desarrollador cuando en los documentos entregados no consta.
- **Consecuencia potencial:** quien lea el informe creerá que existe una decisión D5 aprobada o pendiente sobre `posiciones`; al ir a `registro` no la encontrará. Se puede bloquear C2 esperando una decisión que no está formalizada, o al contrario, aplicarla sin registro.
- **Nivel de certeza:** alta en cuanto a la ausencia en `registro` y `protocolo`; media en cuanto a si existe en otro documento no entregado.
- **Recomendación:** o registrar la decisión D5 en `registro` con su texto, o corregir la referencia en el informe. Mientras no se aclare, C2 debe figurar como «cuestión abierta no registrada», no como «decisión D5».
- **Prueba que lo confirmaría:** buscar «D5» en `registro` y en `protocolo`; no aparece con el sentido que le da el informe. Confirmar si existe en `consolidacion-lotes-1-5.md` o en `propuestas-cierre-protocolo.md` (no entregados).
- **¿Requiere decisión humana?:** sí. El desarrollador debe confirmar si D5 existe, qué decide y dónde se registra.

---

## DS-179 · C1 y G6 se solapan y el informe no lo señala

- **Ubicación:** `informe`, §2 C1 y §3 G6.
- **Evidencia:** C1: «Ningún ejercicio lo ha revisado un fisioterapeuta, ni tampoco los avisos de seguridad de la app». G6: «Q8(c) y §8.4: propuestas de mensajes de seguridad sin validar… **De un profesional** (va unido a C1)».
- **Problema:** G6 reconoce explícitamente que «va unido a C1», pero se mantiene como hallazgo grave separado. La dependencia es la misma (revisión profesional) y el efecto es el mismo (los mensajes de seguridad no están validados). Mantenerlos separados infla el recuento de graves y puede hacer creer que hay dos frentes cuando hay uno.
- **Consecuencia potencial:** el orden propuesto (§4) pone C1 como paso 1 y no menciona G6; sin embargo, G6 se resolvería con el mismo profesional. Si se trata como grave independiente, se puede posponer indefinidamente sin que nadie note que ya está cubierto por C1.
- **Nivel de certeza:** alta (el propio informe lo dice).
- **Recomendación:** fusionar G6 dentro de C1 como subapartado («avisos de seguridad de la app y propuestas de §8.4»), o mantenerlo separado pero declarando explícitamente que su dependencia es C1 y que no se resuelve por separado.
- **Prueba que lo confirmaría:** `protocolo` §8.4 ya condiciona cualquier texto de síntomas a «revisión profesional que hoy no existe»; es la misma condición que C1.
- **¿Requiere decisión humana?:** no para fusionar; sí para decidir si se busca un profesional que cubra ambos.

---

## DS-180 · G1 se presenta como grave, pero su consecuencia es crítica para lo ya publicado

- **Ubicación:** `informe`, §3 Graves, fila G1; contraste con §1 Criterio de gravedad y §2 C1.
- **Evidencia del informe:** G1: «**Un ejercicio aprobado puede cambiar sin que nada pida reauditarlo.** La huella literal existe… pero el validador no compara la huella del informe con el catálogo actual».
- **Evidencia del criterio:** §1: «**Crítico:** puede hacer que la app ofrezca un ejercicio que exige algo que la persona ha dicho que no puede hacer, o deja un riesgo de seguridad sin cubrir».
- **Problema:** si un ejercicio aprobado (de los 30 publicados) cambia sin reauditoría, la app puede ofrecer un ejercicio cuyas etiquetas ya no corresponden a su contenido. Eso encaja literalmente en la definición de crítico del propio informe («puede hacer que la app ofrezca un ejercicio que exige algo que la persona ha dicho que no puede hacer»). El informe lo clasifica como grave sin justificar por qué no es crítico.
- **Consecuencia potencial:** el orden propuesto pone G1 en el paso 2, después de C1. Si es crítico, debería ir antes o en paralelo con C1, porque afecta a lo ya publicado.
- **Nivel de certeza:** media. Depende de si el catálogo puede cambiar sin que el validador lo detecte (el informe lo afirma; no puedo verificar `scripts/validar-catalogo.mjs`). Si es así, la clasificación como grave es discutible.
- **Recomendación:** o reclasificar G1 como crítico, o justificar en el informe por qué no lo es (por ejemplo, si el flujo de trabajo actual impide editar un ejercicio aprobado sin pasar por revisión humana).
- **Prueba que lo confirmaría:** revisar `scripts/validar-catalogo.mjs` y comprobar si compara huellas; revisar el flujo de commits para ver si un ejercicio aprobado puede editarse sin que nadie lo note.
- **¿Requiere decisión humana?:** sí. El desarrollador debe decidir la gravedad y el orden.

---

## DS-181 · G4 se presenta como grave, pero su resolución está subordinada a C3 y no tiene efecto hoy

- **Ubicación:** `informe`, §3 Graves, fila G4.
- **Evidencia:** «**D4: alcance retroactivo de `[conservadora]`.** Los 41 auditados ya siguen R2.4. En los 179 sin auditar puede haber `true` por precaución sin su nota… **Se resuelve al auditarlos** (C3)».
- **Problema:** el propio informe reconoce que G4 «se resuelve al auditarlos», es decir, que no es un problema independiente sino una consecuencia de C3. Además, no afecta a lo publicado (los 30 aprobados están entre los 41 auditados). Clasificarlo como grave lo coloca al mismo nivel que G1 o G2, cuando su efecto es nulo mientras no se auditen los 179.
- **Consecuencia potencial:** infla la lista de graves y puede desviar atención de G1 o G2, que sí afectan a lo publicado o a decisiones repetidas.
- **Nivel de certeza:** alta (el informe lo dice).
- **Recomendación:** mover G4 a «Fuera del informe (menores)» o a una nota dentro de C3, indicando que se resolverá por el camino.
- **Prueba que lo confirmaría:** `registro` P9 y P10 confirman que los 41 auditados ya siguen R2.4; los 179 no auditados no están publicados.
- **¿Requiere decisión humana?:** no.

---

## DS-182 · G5 se presenta como grave sin incumplimiento conocido y con propuesta ya hecha

- **Ubicación:** `informe`, §3 Graves, fila G5.
- **Evidencia:** «**D8: el validador solo comprueba `impacto` entre las exclusiones del catálogo v1**… No hay ningún incumplimiento conocido (DS-28/36), pero un ejercicio nuevo podría colarse… Claude propone la (a): dejarlo a la auditoría y documentar en la especificación §4 qué comprueba el validador».
- **Problema:** el propio informe reconoce que no hay incumplimiento conocido y que la propuesta es dejarlo como está más una nota documental. Eso no encaja en la definición de grave («rompe la trazabilidad o la coherencia de la auditoría, o hará que se repitan errores al seguir»): no hay error actual ni se repite un error, solo un riesgo futuro mitigado por la auditoría. Es más bien una propuesta de documentación.
- **Consecuencia potencial:** ocupa una fila de graves y una decisión (D8) que podría resolverse como propuesta menor.
- **Nivel de certeza:** media. Depende de si el validador realmente solo comprueba `impacto` (no puedo verificar `scripts/validar-catalogo.mjs`).
- **Recomendación:** mover G5 a «Fuera del informe (menores)» o a propuestas de documentación, salvo que el desarrollador quiera tratarlo como grave por precaución.
- **Prueba que lo confirmaría:** revisar `scripts/validar-catalogo.mjs` y comprobar qué exclusiones del catálogo v1 comprueba.
- **¿Requiere decisión humana?:** sí, para decidir si se queda como grave o pasa a menor.

---

## DS-183 · G7 se presenta como grave, pero su dependencia es una instrucción del desarrollador ya registrada

- **Ubicación:** `informe`, §3 Graves, fila G7; contraste con `registro` P12.
- **Evidencia del informe:** «**Archivos de continuidad desactualizados**… **Autorización del desarrollador**: él pidió no actualizarlos todavía».
- **Evidencia de contraste:** `registro` P12: «Por indicación del desarrollador, **no se actualizan** `deepseek/ESTADO.md` ni `CONTEXTO_CONTINUIDAD_CHATGPT.md`».
- **Problema:** el informe lo clasifica como grave, pero la causa es una decisión explícita del desarrollador ya registrada. No es un problema de auditoría ni de trazabilidad del catálogo (`registro` sí está al día, como el propio informe reconoce). Es una decisión de gestión de documentación de continuidad, no un hallazgo de auditoría.
- **Consecuencia potencial:** se presenta como problema pendiente algo que el desarrollador ya decidió no resolver. Puede generar confusión sobre si hay una acción pendiente cuando no la hay.
- **Nivel de certeza:** alta (el informe y `registro` coinciden en que es una instrucción del desarrollador).
- **Recomendación:** sacarlo de la lista de graves y llevarlo a una nota de «decisiones del desarrollador con efecto conocido», o reformularlo como «riesgo aceptado por el desarrollador» en lugar de «problema pendiente».
- **Prueba que lo confirmaría:** `registro` P12.
- **¿Requiere decisión humana?:** no; ya está decidido.

---

## DS-184 · G8 se presenta como grave, pero es una dependencia operativa, no un problema de auditoría

- **Ubicación:** `informe`, §3 Graves, fila G8.
- **Evidencia:** «**Fuentes inaccesibles desde el script:** Royal Devon (3 ejercicios) y CDC/Tufts (1) devuelven 403… **Del desarrollador**: descargar los PDF desde el navegador».
- **Problema:** es una dependencia operativa (acceso a fuentes), no un problema de trazabilidad ni de coherencia de la auditoría. El propio `registro` lo trata como pendiente operativo («Royal Devon está bloqueada… hace falta descargar su PDF a mano»), no como grave. Clasificarlo como grave lo equipara a G1 o G2.
- **Consecuencia potencial:** infla la lista de graves y puede hacer creer que hay un problema de auditoría cuando es una tarea de descarga.
- **Nivel de certeza:** alta (el informe y `registro` coinciden en la naturaleza operativa).
- **Recomendación:** moverlo a «Fuera del informe (menores)» o a una sección de «dependencias operativas».
- **Prueba que lo confirmaría:** `registro`, «Pendientes»: «Royal Devon está bloqueada (403 desde el script, 2026-10-21): hace falta descargar su PDF a mano».
- **¿Requiere decisión humana?:** no; es una tarea del desarrollador.

---

## DS-185 · El orden propuesto no incluye G4, G5, G6 ni G8, y no explica por qué

- **Ubicación:** `informe`, §4 Orden propuesto.
- **Evidencia:** el orden lista C1, G1, C2, G2 y G3, C3, G7 y G8. No menciona G4, G5 ni G6. G6 se menciona indirectamente en C1 («va unido a C1»), pero G4 y G5 no aparecen.
- **Problema:** el orden propuesto omite explícitamente tres graves (G4, G5, G6) sin decir si se han descartado, si se resuelven por el camino o si se han olvidado. G4 se resuelve con C3 (el propio informe lo dice), G6 con C1, pero G5 no tiene ubicación en el orden.
- **Consecuencia potencial:** quien siga el orden no sabrá qué hacer con G5; puede quedar sin resolver indefinidamente.
- **Nivel de certeza:** alta (el orden es literal).
- **Recomendación:** añadir una nota al orden que indique qué pasa con G4, G5 y G6 (resueltos por C3, pendientes de decisión, o unidos a C1).
- **Prueba que lo confirmaría:** leer §4 y comprobar que G4, G5 y G6 no aparecen.
- **¿Requiere decisión humana?:** sí, para decidir el destino de G5.

---

## Resumen de gravedad de los hallazgos

| Id | Tipo | Certeza | Requiere decisión humana |
|---|---|---|---|
| DS-177 | C3 mezcla dos problemas | alta | sí (orden) |
| DS-178 | D5 no registrada | alta / media | sí |
| DS-179 | C1 y G6 se solapan | alta | no (fusionar) / sí (profesional) |
| DS-180 | G1 debería ser crítico | media | sí |
| DS-181 | G4 no es grave independiente | alta | no |
| DS-182 | G5 no es grave | media | sí |
| DS-183 | G7 es decisión ya tomada | alta | no |
| DS-184 | G8 es dependencia operativa | alta | no |
| DS-185 | Orden omite G4, G5, G6 | alta | sí (G5) |

**Nota final.** No he podido verificar con los documentos entregados: (a) el commit `04c49c7`; (b) el contenido de `scripts/validar-catalogo.mjs` y `scripts/auditoria.mjs`; (c) los informes de lote 1 a 9; (d) la existencia de D5, D8 y D4 fuera de `registro` y `protocolo`; (e) las cifras de disponibilidad (19, 13, 8, 7) que cita C3. Todo ello queda como «requiere verificación» y no como confirmado ni refutado.