# Auditoría documental · fase-10-m5 (consulta C11) · M5 / Q7

**Nota de método.** No he consultado las fuentes originales ni el código completo: solo los bloques entregados. Cuando digo «verificable en código» quiero decir que la comprobación se puede hacer con los archivos citados, no que yo la haya hecho. No emito juicios clínicos. Las propuestas de texto van marcadas como **[propuesta]**.

**Aclaración previa sobre el encargo.** El encargo literal es «M5: consulta a Deepseek alguna solución». No hay en los documentos entregados ninguna respuesta de DeepSeek ni instrucción que me pida actuar como tal. Lo que hago es responder a las cuatro preguntas del apartado «Qué debes responder» con los documentos que tengo. Si el desarrollador esperaba una segunda opinión de otro modelo, esta auditoría no la sustituye: es una revisión documental independiente.

**Estado de partida que uso:**
- Q7 sigue **abierta** (protocolo §13). M5 es su manifestación en la interfaz.
- R2.4 fija la forma de la nota y dice expresamente que `notas_etiquetado` «la interfaz no muestra».
- La especificación §1 y los límites de seguridad del proyecto prohíben presentar una rutina como «segura» o «recomendada para tu condición», y exigen diferenciar incompatibilidad confirmada de información insuficiente.
- `vistaResumen` (app-extracto) ya explica exclusiones por opción del perfil («Dejamos fuera los ejercicios que…»), pero **no distingue** si la exigencia que excluye estaba marcada con evidencia o por precaución.
- `vistaEjercicio` muestra «Exige: …» con `ETIQUETA_EXIGENCIA`, sin indicar cuáles son conservadoras.

---

## 1. Opciones para resolver M5 (de la más pequeña a la más completa)

Las ordeno por coste creciente. Para cada una indico dónde se vería, qué ve la persona, qué toca (esquema / motor / validador / interfaz) y riesgos. **Ninguna está aprobada.**

### O1 · No hacer nada en v1; dejar Q7 abierta y documentarlo
- **Dónde:** ninguno.
- **Qué ve la persona:** lo mismo que hoy.
- **Cambia:** nada.
- **Riesgo:** la persona sigue sin poder distinguir «se quitó por precaución» de «se quitó porque lo exige». Es exactamente el problema que M5 describe. No lo resuelve; solo lo deja explícito.
- **Certeza:** alta (es el estado actual según los documentos).

### O2 · Solo en la ficha del ejercicio: marcar visualmente las exigencias conservadoras
- **Dónde:** `vistaEjercicio`, en el bloque «Exige: …».
- **Qué ve la persona:** junto a cada exigencia conservadora, una marca discreta y un texto corto. **[propuesta]** «Exige: cerrar la mano o sujetarse (marcado por precaución: no consta que no lo exija)».
- **Cambia:** interfaz. **No** cambia esquema, motor ni validador si se deriva de `notas_etiquetado` (ver H1 y DS-243).
- **Riesgos:** falsa tranquilidad si el texto se lee como «entonces sí puedo»; longitud y legibilidad; que la marca se rompa si alguien edita la nota sin formato (DS-243).

### O3 · Solo en el resumen de exclusiones (`vistaResumen` / `explicacionHtml`)
- **Dónde:** `explicacionHtml` en `vistaRutina` y el bloque de exclusiones de `vistaResumen`.
- **Qué ve la persona:** por cada exigencia que excluye, si la exclusión se apoya en una exigencia conservadora o en una exigencia con evidencia. **[propuesta]** «Dejamos fuera los ejercicios que exigen cerrar la mano o sujetarse (N). En algunos, esa exigencia está marcada por precaución: no consta que no la exijan.»
- **Cambia:** interfaz. El motor ya calcula `explicacion.items` con `motivos` (texto de la opción del perfil), pero **no** con la información de si la exigencia del ejercicio era conservadora. Para mostrarlo haría falta que el motor o la interfaz consulten `notas_etiquetado` del ejercicio excluido, o que el motor añada ese dato a `explicacion`. Eso es un cambio de motor (aunque pequeño) o de interfaz con acceso al catálogo.
- **Riesgos:** el resumen es agregado; decir «en algunos» puede confundir. Riesgo de invitar a «probar de todas formas» si el texto sugiere que la precaución es excesiva.

### O4 · En la ficha y en el resumen, con un texto común redactado para la persona
- **Dónde:** `vistaEjercicio` y `vistaResumen`/`explicacionHtml`.
- **Qué ve la persona:** un aviso único, no el motivo literal de la nota. **[propuesta]** «Algunas de las cosas que este ejercicio exige están marcadas por precaución: no tenemos constancia de que no las exija. Por eso puede quedar fuera de tu rutina aunque quizá pudieras hacerlo. No lo sabemos con seguridad.»
- **Cambia:** interfaz. Si se deriva de `notas_etiquetado`, no cambia esquema. Si se quiere un texto por exigencia redactado para la persona, hace falta un campo nuevo (ver O6).
- **Riesgos:** los mismos que O2 y O3, atenuados por el texto genérico; riesgo de que el aviso se lea como «puedes hacerlo» si no se cuida la redacción (ver §2).

### O5 · En la rutina y en Explorar, además de ficha y resumen
- **Dónde:** `vistaRutina` (junto a cada bloque), `vistaExplorar` (en la tarjeta o en el detalle).
- **Qué ve la persona:** un indicador por ejercicio de que tiene exigencias conservadoras.
- **Cambia:** interfaz. Requiere que la información esté disponible en el listado (no solo en la ficha). Si se deriva de `notas_etiquetado`, no cambia esquema.
- **Riesgos:** saturación visual; en Explorar puede leerse como «este ejercicio es más seguro» o «menos seguro», lo que roza la afirmación clínica implícita. Requiere revisión de `healthmove-safety-reviewer`.

### O6 · Campo estructurado nuevo en el esquema (p. ej. `exigencias_conservadoras: [codigo, …]` o `incertidumbres: [{exigencia, motivo_persona, evidencia_que_falta}]`)
- **Dónde:** catálogo, validador, motor (si el motor lo usa para explicar), interfaz.
- **Qué ve la persona:** lo mismo que O4/O5, pero con texto redactado para ella y sin depender del formato de `notas_etiquetado`.
- **Cambia:** esquema, validador (nuevo campo obligatorio o validado), catálogo (rellenar 66 marcas), y probablemente motor si se quiere usar en `explicacion`. Es el cambio más grande.
- **Riesgos:** coste alto; obliga a reauditar o al menos a rellenar el campo en los 225 ejercicios; riesgo de que el campo se rellene a mano y se desincronice de `notas_etiquetado` (dos fuentes de verdad). El protocolo §14 ya registra «Campo estructurado de población o de incertidumbres» como propuesta no implementada, con el motivo «No hace falta mientras `fuente.especifica_de` y `notas_etiquetado` basten (Q7)». O6 contradice ese motivo, pero no lo invalida: depende de si se acepta que `notas_etiquetado` «basta» para la interfaz.

### O7 · Cambiar el motor para que distinga en `explicacion` y en `motivosIncompatibilidad` si la exigencia era conservadora
- **Dónde:** `motor.js` (`explicar`, `motivosIncompatibilidad`), y la interfaz que lo consume.
- **Qué ve la persona:** lo mismo que O3/O4, pero con el dato calculado por el motor, no por la interfaz leyendo notas.
- **Cambia:** motor e interfaz. No cambia esquema si el motor lee `notas_etiquetado` (lo que introduce acoplamiento al formato de la nota, ver DS-243).
- **Riesgos:** el motor hoy no lee `notas_etiquetado`; hacerlo lo acopla a un campo de auditoría. Si el formato cambia, el motor puede fallar en silencio.

**Resumen de dependencias:**
- O1: nada.
- O2, O3, O4, O5: interfaz (y O3/O5 pueden requerir tocar motor o exponer el catálogo a la vista).
- O6: esquema + validador + catálogo + interfaz.
- O7: motor + interfaz.

---

## 2. Riesgos de seguridad y ética de mostrar «por precaución»

Los enumero como riesgos, no como dictámenes. Cada uno se contrasta con los límites de seguridad y la especificación §1.

| Riesgo | Por qué | Límite o regla afectada | Mitigación posible (propuesta, no aprobada) |
|---|---|---|---|
| **Falsa tranquilidad** («entonces sí puedo hacerlo») | «Por precaución» puede leerse como «no es un problema real» | Especificación §1: no presentar como «segura»; límites: «No garantiza que un ejercicio sea seguro para una persona concreta» | Redactar como incertidumbre, no como permiso: «no lo sabemos con seguridad», no «probablemente puedas» |
| **Invitación a saltarse el filtro** | Si la persona cree que la precaución es excesiva, puede intentar forzar la generación cambiando el perfil | Límites: «No relajes filtros automáticamente»; «No modifica restricciones para conseguir que una rutina pueda generarse» | No ofrecer ningún botón ni enlace que sugiera «probar de todas formas»; no decir «quizá puedas» |
| **Afirmación clínica implícita** | Decir «por precaución» sobre una exigencia concreta puede leerse como valoración de riesgo de esa exigencia para esa persona | Especificación §1: no diagnostica ni decide tratamientos; límites: «No interpreta una selección incompleta como ausencia de restricciones» | Mantener el texto en el plano documental («no consta en la fuente»), no en el clínico («es poco probable que te haga daño») |
| **Ansiedad o confusión** | «No sabemos si esto te hace daño» puede alarmar; «por precaución» puede tranquilizar de más | Límites: «Diferencia entre incompatibilidad confirmada e información insuficiente» | Texto breve, sin alarmismo, separado de «Exige:»; explicar que la app prefiere no ofrecerlo |
| **Legibilidad para personas mayores o con discapacidad** | Frases largas, paréntesis anidados, tecnicismos («conservadora», «evidencia») | No hay regla explícita en los documentos entregados sobre accesibilidad de textos; sí hay `aria-*` y `role="status"` en `app-extracto` | Frase corta, sin «conservadora» ni «evidencia»; un solo aviso por ficha, no uno por exigencia |
| **Inconsistencia entre vistas** | Si la ficha dice «por precaución» y el resumen no, la persona puede pensar que el resumen miente | Coherencia interna; no hay regla explícita | Decidir una sola formulación y usarla en todas las vistas donde aparezca |
| **Exposición de la nota literal** | La nota está redactada para auditoría («Q1», «Q2», «R2.1», «Se cerraría con: revisión profesional») | H2 (ver §3) | No mostrar la nota literal; usar texto genérico o campo nuevo |

**Conclusión de §2:** mostrar «por precaución» es compatible con los límites **solo si** el texto (a) no afirma seguridad, (b) no invita a saltarse el filtro, (c) distingue explícitamente incertidumbre de incompatibilidad confirmada, y (d) pasa por `healthmove-safety-reviewer`. Cualquier texto que diga «probablemente puedas» o «no es un problema real» choca con los límites. La redacción concreta requiere revisión humana y, si se presenta como orientación sanitaria, profesional (que hoy no existe, según el protocolo §1.5).

---

## 3. ¿Se sostienen H1 y H2?

### H1 · «Se podría derivar, sin cambiar el esquema, qué exigencias de cada ejercicio son por precaución, leyendo esas marcas»

**Se sostiene con matices.** Base:
- R2.4 fija la forma `[conservadora] <exigencia>: <motivo>. Se cerraría con: <evidencia que falta>.`
- Los datos verificados por Claude (66 marcas, todas con exigencia válida y en `true`) son coherentes con esa forma.
- En los 10 ejercicios publicados entregados, las marcas que veo siguen esa forma (p. ej. `[conservadora] ambos_brazos: apoyo bilateral (Q1). Se cerraría con: fuente de que basta una mano.`).

**Matices que impiden tratarlo como fiable sin más:**
1. **El validador no comprueba el formato** (m3, DS-30). Una nota editada a mano, o generada por otra herramienta, puede no seguir la forma y la derivación fallaría en silencio.
2. **La expresión `\[conservadora\]\s*([^:]+):` captura el texto hasta el primer `:`.** Si el motivo contiene un `:` antes de la exigencia (p. ej. `[conservadora] ambos_brazos: apoyo (Q1): ...`), la captura sería `ambos_brazos` y el resto se perdería; si el motivo contiene `:` después, no afecta a la captura de la exigencia, pero sí a cualquier parseo del motivo. En los 10 entregados no veo ese caso, pero no puedo afirmar que no exista en los 66.
3. **La nota puede contener varias marcas** (varias `[conservadora]` en la misma cadena). La expresión con `g` las captura todas; sin `g`, solo la primera. Claude dice «las 66 marcas», lo que sugiere que ya las cuenta todas; no puedo verificarlo con los documentos.
4. **La nota puede contener texto no conservador** (p. ej. `Subir la rodilla estando sentado acerca el muslo al tronco más que en reposo: flexion_amplia_cadera.` en `marcha-sentado-sujetandose`). Ese texto no lleva `[conservadora]` y no debe confundirse con una marca. La expresión lo respeta, pero conviene que el validador lo distinga.
5. **La nota no es un campo estructurado.** Depender de ella para la interfaz crea acoplamiento entre un campo de auditoría y la UI. El protocolo §14 ya registra «Campo estructurado de población o de incertidumbres» como propuesta no implementada, con el motivo «No hace falta mientras `fuente.especifica_de` y `notas_etiquetado` basten (Q7)». Si la interfaz depende de `notas_etiquetado`, ese motivo deja de ser cierto y la propuesta de campo estructurado gana peso (ver O6).

**Veredicto H1:** se sostiene como **posible**, no como **fiable sin cambios**. Para que la interfaz dependa de la marca, haría falta al menos:
- que el validador compruebe el formato (m3, DS-30);
- que la comprobación sea parte de `npm test` o de `node scripts/validar-catalogo.mjs`;
- que la derivación tolere notas sin marca y notas con varias marcas;
- que se documente en el protocolo que `notas_etiquetado` pasa a ser leído por la interfaz (hoy R2.4 dice que la interfaz no lo muestra).

### H2 · «Mostrar el motivo literal de la nota no sirve a la persona; haría falta un texto genérico o un campo nuevo redactado para ella»

**Se sostiene.** Base:
- R2.4 redacta la nota para auditoría: cita reglas (`Q1`, `Q2`, `R2.1`), habla de «evidencia», «fuente», «revisión profesional». Ejemplos en los 10 entregados: `[conservadora] agarre: apoyo sin prensión (Q2). Se cerraría con: revisión profesional.`; `[conservadora] flexion_profunda_rodilla: «as far as is comfortable» no limita la flexión. Se cerraría con: una fuente que fije el límite.`
- Esos textos no están pensados para una persona con restricciones de movilidad; usan vocabulario de auditoría y referencias internas.
- La especificación §1 y los límites piden no presentar como clínico lo que es documental; el motivo literal mezcla ambas cosas.

**Veredicto H2:** se sostiene. La opción más pequeña que respeta H2 es un **texto genérico** (O4) sin cambiar esquema; la más completa es un **campo nuevo** (O6). Mostrar la nota literal (O2 sin filtro) no es aceptable según H2.

---

## 4. Recomendación para la v1 y qué revisar antes de implementar

**No apruebo nada.** Lo que sigue es una recomendación razonada para que el desarrollador decida.

### Recomendación (para decidir, no decidida)
Para la v1, la opción de menor coste que resuelve M5 sin cambiar esquema ni motor es **O4** (texto genérico en ficha y resumen), **condicionada** a:
1. Que el validador compruebe el formato `[conservadora]` (m3, DS-30) **antes** de que la interfaz dependa de él. Sin esto, O4 es frágil.
2. Que el texto pase por `healthmove-safety-reviewer` y, si se presenta como orientación sanitaria, por revisión profesional (que hoy no existe; protocolo §1.5).
3. Que se decida si `notas_etiquetado` deja de ser «no visible» (R2.4) o si se crea un campo nuevo (O6). Mientras no se decida, O4 puede implementarse leyendo `notas_etiquetado` **solo como fuente interna**, sin mostrarlo literal.
4. Que se documente en el protocolo (Q7) la decisión y se actualice R2.4 si la interfaz pasa a mostrar algo derivado de la nota.

**Por qué no O6 en v1:** cambia esquema, validador y catálogo (66 marcas a rellenar), y el protocolo §14 ya lo tenía como propuesta no implementada. Es la opción correcta a medio plazo si se quiere texto por exigencia redactado para la persona, pero no es la más pequeña.

**Por qué no O1:** deja M5 sin resolver y Q7 abierta; el desarrollador pidió «alguna solución».

**Por qué no O5/O7 en v1:** O5 satura y roza la afirmación clínica implícita en Explorar; O7 acopla el motor a un campo de auditoría.

### Qué debería revisar el desarrollador antes de implementar
- **Decisión de producto:** ¿quiere mostrar la incertidumbre en la ficha, en el resumen, en ambos, o en ninguno? (Q7 sigue abierta; esta auditoría no la cierra.)
- **Decisión de esquema:** ¿`notas_etiquetado` pasa a ser leído por la interfaz, o se crea un campo nuevo? (O4 vs O6.)
- **Decisión de validador:** ¿se implementa m3 (DS-30) antes de que la interfaz dependa de la marca? Sin esto, H1 no es fiable.
- **Revisión de seguridad:** cualquier texto propuesto debe pasar por `healthmove-safety-reviewer`; si se presenta como orientación sanitaria, por revisión profesional (hoy inexistente).
- **Revisión de accesibilidad:** textos cortos, sin tecnicismos, con `role="status"` donde corresponda (ya hay precedente en `app-extracto`).
- **Coherencia entre vistas:** una sola formulación en ficha y resumen.
- **Prueba:** un test que verifique que la derivación de marcas funciona con los 66 casos y que falla si una nota no sigue el formato.

---

## Hallazgos

### DS-241 · Q7 sigue abierta y M5 no tiene decisión registrada
- **Ubicación:** `protocolo` §13, fila Q7; `informe-medios-menores` §3, fila M5.
- **Evidencia:** «Q7 · Incertidumbres visibles para el usuario (DG-8): el catálogo las guarda en `notas_etiquetado`, que la interfaz no muestra» · «M5 · Q7: las incertidumbres no se ven… **Tu decisión de interfaz** (protocolo §13, Q7). Pasaría por `healthmove-safety-reviewer`».
- **Problema:** el encargo pide «alguna solución», pero no hay decisión registrada ni propuesta aprobada. Cualquier opción de §1 es propuesta no aprobada.
- **Consecuencia:** si se implementa sin decisión, se contradice el principio 1 del protocolo («La IA propone y la persona decide»).
- **Certeza:** alta.
- **Recomendación:** registrar la decisión en `registro.md` antes de tocar código; actualizar Q7 y R2.4 si la interfaz pasa a mostrar algo derivado de la nota.
- **Prueba:** entrada en `registro.md` con fecha y decisión.
- **¿Requiere decisión humana?** Sí: qué opción (O1–O7) y con qué alcance.

### DS-242 · R2.4 dice que la interfaz no muestra `notas_etiquetado`; cualquier opción que la lea contradice esa regla
- **Ubicación:** `protocolo` §3, R2.4.
- **Evidencia:** «Se anota en `notas_etiquetado`, que la interfaz no muestra, con esta forma: `[conservadora] <exigencia>: <motivo>. Se cerraría con: <evidencia que falta>.`»
- **Problema:** O2–O5 y O7 dependen de leer `notas_etiquetado` (directa o indirectamente). R2.4 afirma que la interfaz no lo muestra. No es una contradicción lógica (leer no es mostrar), pero sí una decisión de diseño que hay que revisar: si la interfaz lee la nota, R2.4 deja de describir la realidad.
- **Consecuencia:** documentación desactualizada; riesgo de que un futuro cambio de formato de la nota rompa la interfaz sin aviso.
- **Certeza:** alta.
- **Recomendación:** decidir si R2.4 se mantiene (y entonces O6 es la vía) o se actualiza (y entonces O4/O7 son viables con la nota como fuente interna).
- **Prueba:** diff del protocolo tras la decisión.
- **¿Requiere decisión humana?** Sí: mantener R2.4 o actualizarla.

### DS-243 · El validador no comprueba el formato `[conservadora]`; la interfaz no puede depender de la marca sin ese control
- **Ubicación:** `informe-medios-menores` §4, m3 (DS-30); `protocolo` §3, R2.4.
- **Evidencia:** «m3 · **DS-30:** el validador no comprueba el formato `[conservadora]` de las notas».
- **Problema:** H1 se apoya en que las 66 marcas se pueden leer con una expresión regular, pero el validador no garantiza que futuras notas sigan el formato. Una nota editada a mano o generada por otra herramienta puede no ser parseable.
- **Consecuencia:** la interfaz mostraría información incompleta o incorrecta sin error visible; el usuario no sabría que la marca falta.
- **Certeza:** alta (el propio informe lo dice).
- **Recomendación:** implementar m3 antes de que la interfaz dependa de la marca; añadir test que verifique las 66 marcas y falle si una nota no sigue el formato.
- **Prueba:** `node scripts/validar-catalogo.mjs` con un caso de nota mal formada que debe fallar.
- **¿Requiere decisión humana?** Sí: priorizar m3 frente a M5.

### DS-244 · La nota está redactada para auditoría, no para la persona (H2 confirmada)
- **Ubicación:** `protocolo` §3, R2.4; `catalogo-publicados-conservadora` (ejemplos).
- **Evidencia:** `[conservadora] agarre: apoyo sin prensión (Q2). Se cerraría con: revisión profesional.` · `[conservadora] flexion_profunda_rodilla: «as far as is comfortable» no limita la flexión. Se cerraría con: una fuente que fije el límite.`
- **Problema:** el texto cita reglas internas (`Q2`), habla de «evidencia» y «revisión profesional», y usa vocabulario de auditoría. No es legible para una persona con restricciones de movilidad.
- **Consecuencia:** mostrar la nota literal (O2 sin filtro) confunde o alarma; no cumple el objetivo de M5.
- **Certeza:** alta.
- **Recomendación:** no mostrar la nota literal; usar texto genérico (O4) o campo nuevo (O6).
- **Prueba:** revisión de legibilidad con `healthmove-safety-reviewer` y, si se puede, con personas del público objetivo.
- **¿Requiere decisión humana?** Sí: texto genérico vs campo nuevo.

### DS-245 · `vistaResumen` y `explicacionHtml` no distinguen exigencia conservadora de exigencia con evidencia
- **Ubicación:** `app-extracto`, `explicacionHtml` y bloque de exclusiones de `vistaResumen`.
- **Evidencia:** `explicacionHtml` genera «Dejamos fuera los ejercicios que…» con `i.motivos` (texto de la opción del perfil), sin información de si la exigencia del ejercicio era conservadora. `vistaResumen` muestra `textoEstado(s.id)` sin ese dato.
- **Problema:** el resumen ya explica exclusiones, pero no distingue «se quitó por precaución» de «se quitó porque lo exige». Es exactamente el problema de M5 en la vista agregada.
- **Consecuencia:** la persona no puede interpretar correctamente el resumen; puede pensar que todos los ejercicios excluidos son incompatibles confirmados.
- **Certeza:** alta (verificable en el extracto).
- **Recomendación:** si se elige O3/O4, añadir el dato al resumen; decidir si el motor lo calcula (O7) o la interfaz lo deriva (O3).
- **Prueba:** test de `explicacionHtml` con un ejercicio conservador y otro con evidencia.
- **¿Requiere decisión humana?** Sí: O3 vs O7 vs no hacerlo.

### DS-246 · `vistaEjercicio` muestra «Exige: …» sin marcar las conservadoras
- **Ubicación:** `app-extracto`, `vistaEjercicio`, bloque «Qué necesitas y qué exige».
- **Evidencia:** `<p><strong>Exige:</strong> ${exige.length ? escapar(exige.join(', ')) : 'nada de la lista de restricciones de HealthMove'}.</p>` — sin distinción.
- **Problema:** la ficha no indica qué exigencias están marcadas por precaución. La persona ve «Exige: cerrar la mano o sujetarse» sin saber que puede ser conservador.
- **Consecuencia:** la ficha no resuelve M5; la persona no puede distinguir.
- **Certeza:** alta.
- **Recomendación:** si se elige O2/O4, añadir la marca en la ficha; decidir texto.
- **Prueba:** test de `vistaEjercicio` con un ejercicio conservador.
- **¿Requiere decisión humana?** Sí: texto y alcance.

### DS-247 · Riesgo de falsa tranquilidad e invitación a saltarse el filtro si el texto no se cuida
- **Ubicación:** `especificacion` §1; límites de seguridad del proyecto; `protocolo` §1.6.
- **Evidencia:** «HealthMove **no**… presenta una rutina como "segura" o "recomendada para tu condición"» · «No relajes filtros automáticamente si quedan pocos ejercicios» · «Diferencia entre incompatibilidad confirmada e información insuficiente».
- **Problema:** «por precaución» puede leerse como «no es un problema real» o «probablemente puedas». Eso invita a cambiar el perfil para forzar la generación, lo que choca con los límites.
- **Consecuencia:** la persona podría modificar sus respuestas para obtener una rutina que el motor excluyó por precaución; riesgo de seguridad y ético.
- **Certeza:** media (depende de la redacción final; no hay texto aprobado).
- **Recomendación:** redactar como incertidumbre («no lo sabemos con seguridad»), no como permiso; no ofrecer botones ni enlaces que sugieran «probar de todas formas»; pasar por `healthmove-safety-reviewer`.
- **Prueba:** revisión de seguridad del texto propuesto; prueba con personas del público objetivo.
- **¿Requiere decisión humana?** Sí: texto final y revisión.

### DS-248 · Riesgo de afirmación clínica implícita al mostrar «por precaución» sobre una exigencia concreta
- **Ubicación:** `especificacion` §1; límites de seguridad.
- **Evidencia:** «No diagnostica enfermedades ni lesiones» · «No garantiza que un ejercicio sea seguro para una persona concreta».
- **Problema:** decir «esta exigencia está marcada por precaución» sobre una exigencia concreta puede leerse como valoración de riesgo de esa exigencia para esa persona. No lo es: es una decisión documental (R2.1).
- **Consecuencia:** la app podría interpretarse como consejo clínico; choca con §1.
- **Certeza:** media (depende de la redacción).
- **Recomendación:** mantener el texto en el plano documental («no consta en la fuente»), no en el clínico («es poco probable que te haga daño»); revisión profesional si se presenta como orientación sanitaria.
- **Prueba:** revisión de `healthmove-safety-reviewer` y, si aplica, profesional.
- **¿Requiere decisión humana?** Sí: texto y revisión.

### DS-249 · H1 se sostiene como posible, no como fiable sin cambios
- **Ubicación:** `catalogo-publicados-conservadora`; `informe-medios-menores` §4, m3.
- **Evidencia:** las 66 marcas se leen con `\[conservadora\]\s*([^:]+):`, pero el validador no comprueba el formato (m3). En los 10 entregados, las marcas siguen la forma, pero hay texto no conservador en la misma nota (p. ej. `marcha-sentado-sujetandose`).
- **Problema:** la derivación funciona hoy, pero no está garantizada por el validador; una nota editada a mano puede romperla en silencio.
- **Consecuencia:** la interfaz mostraría información incompleta sin error visible.
- **Certeza:** alta (el propio informe lo dice).
- **Recomendación:** implementar m3 antes de que la interfaz dependa de la marca; test con los 66 casos y con un caso mal formado.
- **Prueba:** `node scripts/validar-catalogo.mjs` con un caso de nota mal formada que debe fallar.
- **¿Requiere decisión humana?** Sí: priorizar m3.

### DS-250 · H2 se sostiene; la opción más pequeña que la respeta es texto genérico (O4), no mostrar la nota literal
- **Ubicación:** `protocolo` §3, R2.4; `catalogo-publicados-conservadora`.
- **Evidencia:** las notas citan reglas internas (`Q1`, `Q2`, `R2.1`) y hablan de «evidencia» y «revisión profesional».
- **Problema:** mostrar la nota literal no sirve a la persona; hace falta texto genérico o campo nuevo.
- **Consecuencia:** si se muestra la nota literal, se confunde o alarma; no cumple M5.
- **Certeza:** alta.
- **Recomendación:** O4 (texto genérico) como opción más pequeña que respeta H2; O6 (campo nuevo) si se quiere texto por exigencia.
- **Prueba:** revisión de legibilidad.
- **¿Requiere decisión humana?** Sí: O4 vs O6.

---

## Cierre

- **No apruebo ninguna opción.** Las O1–O7 son propuestas para que el desarrollador decida.
- **H1** se sostiene como posible, no como fiable sin cambios (DS-243, DS-249).
- **H2** se sostiene (DS-244, DS-250).
- **Recomendación para la v1 (para decidir):** O4 condicionada a m3, revisión de seguridad y decisión sobre R2.4.
- **Lo que no puedo verificar con los documentos entregados:** que las 66 marcas sigan exactamente la forma (solo veo 10 ejercicios); que la expresión regular capture todas las marcas en todos los casos; que el validador no compruebe el formato (lo dice el informe, no lo he visto en código); que `vistaResumen` y `vistaEjercicio` sean las únicas vistas relevantes (el extracto cubre líneas 440–723; el resto de `app.js` no trata compatibilidad según la cabecera, pero no lo he verificado).
- **Lo que requiere juicio clínico o profesional:** cualquier texto que se presente como orientación sanitaria; la idoneidad de mostrar «por precaución» a personas con restricciones; la redacción final. Hoy no hay revisión profesional (protocolo §1.5).