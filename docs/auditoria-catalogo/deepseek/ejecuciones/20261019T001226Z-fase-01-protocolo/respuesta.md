# Auditoría documental independiente · fase-01-protocolo

**Alcance y límites.** He revisado los ocho bloques entregados. No he consultado las fuentes originales ni el catálogo completo (220 ejercicios): solo el esquema derivado y los ejercicios con `de_pie`. No emito juicio clínico. Distingo en todo momento entre regla aprobada (DG-1 a DG-8, protocolo 1.0), decisión del usuario confirmada pero no incorporada (Q1, Q2, Q3, V7, V9/Q4, herramienta de disponibilidad, versionado), propuesta no aprobada (`propuestas-cierre`), cuestión abierta (Q1-Q8 del §13) y hallazgo que requiere verificación en código o evidencia adicional.

**Nota metodológica sobre las cifras.** No puedo reproducir los recuentos del hallazgo B (31/15/4/5) porque no tengo el catálogo completo ni el motor ejecutable. Sí puedo verificar la existencia y las etiquetas de los cinco ejercicios citados en `catalogo-de-pie`, y comprobar la coherencia interna de los documentos. Donde no puedo verificar, lo digo.

---

## 1. Contradicciones internas del protocolo

### DS-01 · El protocolo se declara «vigente» y a la vez «no se cambian etiquetas» por cuestiones abiertas que afectan a casi todo el catálogo de pie

- **Ubicación:** `protocolo` §13 (tabla de cuestiones abiertas, encabezado «Mientras sigan abiertas, **no se cambian etiquetas**») y §1.1 («Estado: vigente para la auditoría documental»).
- **Evidencia:** «Mientras sigan abiertas, **no se cambian etiquetas**: se registran y se presentan» (§13). Q1 afecta a «todos los ejercicios de pie con apoyo» (registro, decisión 4); Q2 afecta a todo `agarre` con contacto; Q3 afecta a `inclinacion_tronco` de `sentarse-levantarse`.
- **Explicación:** el protocolo 1.0 está vigente para *auditar*, pero su propia regla de bloqueo impide *aplicar* cambios en las clases de casos más numerosas. No es una contradicción lógica, pero sí una tensión operativa: el protocolo se presenta como completo y, sin embargo, su aplicación práctica queda suspendida por Q1-Q3. El registro ya refleja 34 auditorías «pendientes» de decisión.
- **Consecuencia potencial:** riesgo de que la auditoría produzca informes que no pueden convertirse en cambios, o de que se apliquen cambios parciales sin cerrar las cuestiones, rompiendo la trazabilidad.
- **Nivel de certeza:** alta (es una lectura directa de los textos).
- **Recomendación:** que el desarrollador decida si Q1-Q3 se cierran antes de aplicar cualquier plan, o si se admite un plan parcial limitado a los casos no afectados por Q1-Q3, dejando constancia en `registro.md`.
- **Prueba:** listar, para cada uno de los 34 auditados, si depende de Q1, Q2 o Q3. Eso se puede hacer con los informes de lote (no entregados) y el registro.
- **¿Requiere decisión humana?:** sí. Decidir el orden de cierre de Q1-Q3 frente a la aplicación de cambios.

### DS-02 · R2.1 y R7.4/R7.5 se contradicen en el caso del contacto sin cierre de mano (núcleo de Q2)

- **Ubicación:** `protocolo` §3 R2.1, §6 R7.4 y R7.5, §13 Q2.
- **Evidencia:** R2.1: «Valor `true`. Puede proponerse con evidencia D o I, o con la regla `conservadora` cuando la evidencia es N o insuficiente». R7.4: «Que una mano toque un objeto no permite inferir un agarre (`agarre`)». R7.5: «Si la imagen no determina un requisito, se registra la incertidumbre y se aplica la regla conservadora de esa exigencia (R2.1). Ver la cuestión **Q2** sobre la relación entre R7.4 y R2.1».
- **Explicación:** R7.4 dice que el contacto no permite inferir agarre; R2.1 dice que ante la duda se marca. El protocolo reconoce la tensión y la remite a Q2, pero no la resuelve. La propuesta del auditor recogida en Q2 («si la instrucción pide palma abierta y cumple DG-3, `false`; si es neutra, `true` conservador») no está aprobada.
- **Consecuencia potencial:** dos auditores pueden llegar a resultados opuestos con la misma evidencia. Ejemplo verificable en `catalogo-de-pie`: `mini-sentadillas` tiene `agarre: true` con instrucción «las manos en el respaldo»; `elevacion-talones-apoyo` también `agarre: true` con «manos en el respaldo»; en cambio `equilibrio-una-pierna-pared` tiene `agarre: false` con «las yemas de los dedos tocándola» y nota «apoyo sin cerrar la mano: no es agarre». La distinción aplicada (palma/yemas vs. «manos en el respaldo») no está formalizada en el protocolo.
- **Nivel de certeza:** alta (la contradicción es literal).
- **Recomendación:** no resolver Q2 aquí; señalar que la decisión del usuario sobre Q2 (distinguir contacto, apoyo, soporte de carga, prensión, apoyo obligatorio/opcional) es precisamente la que permitiría cerrarla, y que debe incorporarse al protocolo antes de aplicar cambios de `agarre`.
- **Prueba:** aplicar R2.1 y R7.4 por separado a los ejercicios de `catalogo-de-pie` con `agarre: true` y comparar resultados.
- **¿Requiere decisión humana?:** sí. Cerrar Q2 con la distinción que propone el usuario.

### DS-03 · R2.4 exige la nota `[conservadora]` pero el esquema derivado muestra cero notas

- **Ubicación:** `protocolo` §3 R2.4; `catalogo-esquema` campo `notas_con_marca_conservadora`.
- **Evidencia:** R2.4: «Se anota en `notas_etiquetado` … con esta forma: `[conservadora] <exigencia>: <motivo>. Se cerraría con: <evidencia que falta>.`». `catalogo-esquema`: `"notas_con_marca_conservadora": 0`.
- **Explicación:** el catálogo tiene 220 ejercicios en borrador y varias notas que describen marcas por precaución sin usar la forma exigida. Ejemplos verificables en `catalogo-de-pie`: `mini-sentadillas` («se marca flexion_profunda_rodilla por precaución»), `flexion-alterna-piernas-de-pie` («se marca por precaución»), `elevaciones-frontales-botella` («se marca brazo sobre el hombro por prudencia»). Ninguna usa `[conservadora]`.
- **Consecuencia potencial:** las marcas conservadoras no son distinguibles de las basadas en evidencia D, lo que impide auditar su origen y contradice el principio 3 («hechos, inferencias e incertidumbres se escriben por separado»).
- **Nivel de certeza:** alta para los ejemplos citados; el recuento global (0) es del esquema derivado, que no puedo contrastar con el catálogo completo.
- **Recomendación:** que el desarrollador decida si las notas existentes se reescriben con la forma `[conservadora]` (es un cambio de datos, requiere plan) o si R2.4 solo se aplica a cambios nuevos.
- **Prueba:** `grep -c '\[conservadora\]' public/data/catalogo.json` y comparación con las notas que dicen «por precaución/prudencia».
- **¿Requiere decisión humana?:** sí. Alcance retroactivo de R2.4.

### DS-04 · R2.5 describe el `true` como «restrictivo» pero el motor también lo usa para excluir perfiles, no solo para «ofrecer menos»

- **Ubicación:** `protocolo` §3 R2.5; `motor-js` `motivosIncompatibilidad`.
- **Evidencia:** R2.5: «Un `true` es una decisión **restrictiva**: solo reduce los perfiles a los que el motor ofrece el ejercicio (`motor.js`, `motivosIncompatibilidad`)». `motor-js`: `for (const [codigo, v] of Object.entries(ej.exigencias)) if (v === true && restr.exigencias.has(codigo)) motivos.push({ tipo: 'exigencia', codigo });`.
- **Explicación:** la descripción es correcta en cuanto al efecto (reduce disponibilidad), pero «restrictivo» puede leerse como «más seguro», que es justo lo que R2.5 quiere evitar. La frase siguiente («No se describe como "seguro"») lo aclara, pero el adjetivo «restrictivo» no está definido y podría confundirse con una garantía.
- **Consecuencia potencial:** baja; riesgo de interpretación. No es una contradicción dura.
- **Nivel de certeza:** media.
- **Recomendación:** valorar sustituir «restrictivo» por «reduce la disponibilidad» en una futura versión.
- **Prueba:** revisión editorial.
- **¿Requiere decisión humana?:** no urgente; editorial.

### DS-05 · R3.1 (prueba operativa) está pendiente de confirmación (Q5) pero se presenta como condición de validez de toda adaptación

- **Ubicación:** `protocolo` §5.1 R3.1 y §13 Q5.
- **Evidencia:** R3.1: «**Prueba operativa:** la ejecución que pide HealthMove es una de las que permite la fuente… **Esta prueba concreta está pendiente de confirmación (Q5)**». Q5: «Se aplica como criterio de revisión. Si no se confirma, cada adaptación se presenta con su justificación individual».
- **Explicación:** una de las cinco condiciones de validez de una adaptación no está aprobada. El protocolo la aplica «como criterio de revisión», lo que es una decisión de facto no formalizada.
- **Consecuencia potencial:** adaptaciones aprobadas bajo un criterio no confirmado; si Q5 se rechaza, habría que revisarlas.
- **Nivel de certeza:** alta.
- **Recomendación:** que el desarrollador confirme o rechace Q5 antes de aprobar adaptaciones que dependan de ella.
- **Prueba:** identificar en `registro.md` y en los informes de lote qué adaptaciones se aprobaron usando R3.1.
- **¿Requiere decisión humana?:** sí. Cerrar Q5.

### DS-06 · El protocolo cita `app.js` con números de línea que el propio `propuestas-cierre` reconoce desactualizados

- **Ubicación:** `protocolo` §8.3, §11.2 R8.2, §13 Q8; `propuestas-cierre` §3.
- **Evidencia:** `protocolo` R8.2: «solo lo muestra `app.js:621`». `propuestas-cierre` §3: «R8.2: la cita `app.js:621` es correcta en `HEAD`; en la copia de trabajo, la línea es la 690».
- **Explicación:** el protocolo vigente cita una línea que no corresponde a la copia de trabajo. No es una contradicción de fondo, pero afecta a la verificabilidad.
- **Consecuencia potencial:** un auditor que siga la cita en la copia de trabajo no encuentra lo que el protocolo dice.
- **Nivel de certeza:** alta (el propio `propuestas-cierre` lo reconoce).
- **Recomendación:** actualizar la cita cuando se confirme `app.js`; mientras tanto, citar por función/sección, no por línea.
- **Prueba:** abrir `app.js` en la copia de trabajo y en `HEAD` y localizar el mensaje de procedencia.
- **¿Requiere decisión humana?:** no; editorial, pero conviene registrarlo.

---

## 2. Contradicciones entre protocolo, especificación y esquema

### DS-07 · La especificación §7.6 exige `revisado_por` **y** `fecha_revision`; el validador solo exige `revisado_por` (V7)

- **Ubicación:** `especificacion` §7.6; `validacion-js` `problemasEjercicio`; `catalogo-esquema` `ejemplo_de_ejercicio_completo.validacion`.
- **Evidencia:** especificación §7.6: «Solo pasa a `basado_en_fuente_publica` cuando el autor revisa el ejercicio contra su fuente y rellena `revisado_por` y `fecha_revision`». `validacion-js`: `} else if (ej.validacion.estado !== 'borrador' && !esTexto(ej.validacion.revisado_por)) { p.push('un ejercicio fuera de borrador necesita "revisado_por"'); }`. No hay comprobación de `fecha_revision`.
- **Explicación:** el validador no implementa la exigencia de `fecha_revision`. El usuario (V7) está de acuerdo con exigir ambas, pero no está incorporado. El esquema muestra `fecha_revision: null` en el ejemplo, coherente con el estado borrador.
- **Consecuencia potencial:** un ejercicio podría pasar a `basado_en_fuente_publica` sin fecha de revisión, incumpliendo la especificación. El motor lo usaría (`estadoUtilizable`).
- **Nivel de certeza:** alta (verificado en el código entregado).
- **Recomendación:** incorporar la comprobación de `fecha_revision` en `problemasEjercicio` cuando se apruebe V7; mientras tanto, registrar la discrepancia.
- **Prueba:** `node scripts/validar-catalogo.mjs` con un ejercicio de prueba con `estado: basado_en_fuente_publica`, `revisado_por` relleno y `fecha_revision: null`; debe pasar hoy.
- **¿Requiere decisión humana?:** sí. Aprobar V7 e incorporarlo al validador y a la especificación.

### DS-08 · La especificación §3 dice que un ejercicio anota **todas** las posiciones que usa y solo es compatible si todas están permitidas; el motor lo implementa, pero el significado de `posiciones` como secuencia vs. alternativa no está representado (Hallazgo C)

- **Ubicación:** `especificacion` §3; `motor-js` `motivosIncompatibilidad`; `catalogo-de-pie` (`sentarse-levantarse`, `estiramiento-hombro-cruzado`, etc.).
- **Evidencia:** especificación §3: «Un ejercicio anota **todas** las posiciones que usa y solo es compatible si todas están permitidas». `motor-js`: `for (const p of ej.posiciones) if (!restr.posiciones.has(p)) motivos.push({ tipo: 'posicion', codigo: p });`. `catalogo-de-pie`: `sentarse-levantarse` tiene `posiciones: ["sentado","de_pie"]` y `sentarse_levantarse: true` (secuencia obligatoria); `estiramiento-hombro-cruzado` tiene `posiciones: ["sentado","de_pie"]` e instrucciones «Pon una mano…» sin indicar que haya que estar de pie (alternativa).
- **Explicación:** el modelo de datos no distingue «secuencia obligatoria» de «alternativa». El motor trata ambos igual: exige que **todas** las posiciones estén permitidas. Para `sentarse-levantarse` esto es correcto (hay que estar sentado y de pie). Para `estiramiento-hombro-cruzado`, si el ejercicio puede hacerse sentado **o** de pie, el motor exige ambas, lo que es más restrictivo de lo que la instrucción sugiere. La especificación no representa explícitamente los dos significados.
- **Consecuencia potencial:** falsos negativos (ejercicios que podrían ofrecerse a un perfil «solo sentado» se excluyen porque también listan `de_pie`) y ambigüedad en la auditoría (¿qué significa `posiciones` para este ejercicio?).
- **Nivel de certeza:** alta para la contradicción documental; media para el impacto real (depende de cuántos ejercicios usan `posiciones` como alternativa).
- **Recomendación:** que el desarrollador decida si se documenta el significado único («todas las posiciones que el ejercicio requiere en algún momento») o si se propone un campo nuevo (fuera de alcance de esta fase). Mientras tanto, registrar como CN.
- **Prueba:** revisar las instrucciones de los 8 ejercicios con `sentado,de_pie` y clasificar cada uno como secuencia o alternativa; medir cuántos se excluirían para «solo sentado».
- **¿Requiere decisión humana?:** sí. Significado de `posiciones` y posible cambio de esquema.

### DS-09 · La especificación §4 dice que `ambos_brazos` se marca si «no puede hacerse con un solo brazo»; DG-4 y Q1 introducen matices que la especificación no recoge

- **Ubicación:** `especificacion` §4 fila 9; `protocolo` §7.1 y §13 Q1.
- **Evidencia:** especificación §4: «`ambos_brazos` | no puede hacerse con un solo brazo». `protocolo` §7.1: «`ambos_brazos` en `true` si se requieren los dos» (función ejecución); «`ambos_brazos`: ver la cuestión **Q1**» (función apoyo para estabilidad).
- **Explicación:** la especificación define `ambos_brazos` de forma binaria; DG-4 distingue funciones (ejecución, reposo, contacto, apoyo, carga, agarre) y Q1 deja abierto si el apoyo bilateral cuenta. La especificación no menciona el apoyo como caso.
- **Consecuencia potencial:** un ejercicio con apoyo bilateral para estabilidad puede etiquetarse `ambos_brazos: true` (conservador) o `false` (si el apoyo no cuenta), y ambas lecturas son defendibles con los documentos actuales.
- **Nivel de certeza:** alta.
- **Recomendación:** cerrar Q1 con la decisión del usuario (que ya distingue fuente, instrucciones y apoyo opcional) e incorporarla a la especificación §4 y al protocolo §7.
- **Prueba:** aplicar Q1 a los ejercicios de `catalogo-de-pie` con `ambos_brazos: false` y apoyo bilateral (p. ej. `mini-sentadillas`, `elevacion-talones-apoyo`, `puntillas-talones-apoyo`, `circulos-cadera-pie`, `paso-atras-apoyo`).
- **¿Requiere decisión humana?:** sí. Cerrar Q1.

### DS-10 · El esquema derivado declara 220 ejercicios en `borrador` y cero aprobados; el motor, fuera de modo desarrollo, no usaría ninguno

- **Ubicación:** `catalogo-esquema` `por_estado`; `motor-js` `estadoUtilizable`; `protocolo` §9 R9.2.
- **Evidencia:** `catalogo-esquema`: `"por_estado": {"borrador": 220}`. `motor-js`: `ESTADOS_APROBADOS = ['basado_en_fuente_publica', 'revisado_por_profesional']`; `estadoUtilizable` devuelve `false` para `borrador` salvo `permitirBorrador`. `protocolo` R9.2: «Fuera del modo desarrollo, el motor no usa ningún ejercicio en `borrador`, y hoy lo están los 220».
- **Explicación:** no es una contradicción, sino una consecuencia: la app no puede generar rutinas reales hoy. El protocolo lo reconoce. Pero conviene señalarlo porque afecta a la interpretación de cualquier medición de disponibilidad.
- **Consecuencia potencial:** las mediciones en modo auditoría (incluido el 31/20/0 de Q1) no son disponibilidad real.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna acción; ya está documentado. Se cita para que no se confunda con disponibilidad real.
- **Prueba:** `node -e` con `estadoUtilizable` sobre el catálogo.
- **¿Requiere decisión humana?:** no.

### DS-11 · La especificación §5 dice que «Solo puedo hacer ejercicio sentado/a» excluye `tumbado` y `suelo`; `opciones-js` lo implementa, pero la etiqueta de la opción difiere del texto de la especificación

- **Ubicación:** `especificacion` §5 tabla Posición; `opciones-js` `POSICION`.
- **Evidencia:** especificación: «Solo puedo hacer ejercicio sentado/a». `opciones-js`: `texto: 'Solo puedo hacer ejercicio en una silla o silla de ruedas'`.
- **Explicación:** discrepancia editorial entre el texto de la especificación y el de la interfaz. No cambia el comportamiento (`excluyePosiciones: ['de_pie', 'tumbado', 'suelo']` coincide).
- **Consecuencia potencial:** baja; confusión documental.
- **Nivel de certeza:** alta.
- **Recomendación:** alinear los textos o registrar la diferencia como decisión de interfaz.
- **Prueba:** comparación literal.
- **¿Requiere decisión humana?:** no urgente; editorial.

---

## 3. Ambigüedades que puedan producir etiquetas incorrectas

### DS-12 · «Inclinación leve» no tiene umbral operativo (Q3) y afecta a `inclinacion_tronco` de varios ejercicios

- **Ubicación:** `especificacion` §4 fila 15 y §4 párrafo de umbrales; `protocolo` §6 R7.8 y §13 Q3; `catalogo-de-pie` (`sentarse-levantarse`, `sentarse-levantarse-sin-manos`, `banda-sentarse-levantarse`).
- **Evidencia:** especificación §4: «Los umbrales "inclinación leve" y "90°" se fijan con una frase de referencia por umbral». `protocolo` R7.8: «la especificación promete una frase de referencia que no existe (cuestión **Q3**)». `catalogo-de-pie` `sentarse-levantarse`: `notas_etiquetado`: «La inclinación es leve: no es inclinacion_tronco». `sentarse-levantarse-sin-manos`: `inclinacion_tronco: true` con instrucción «Inclínate un poco hacia delante».
- **Explicación:** dos ejercicios con instrucciones similares («un poco hacia delante» vs. «el tronco un poco hacia delante») tienen valores distintos de `inclinacion_tronco`. La diferencia puede deberse a la fuente (no la tengo), pero el protocolo no permite verificarlo sin umbral.
- **Consecuencia potencial:** etiquetas inconsistentes entre ejercicios equivalentes; falsos positivos/negativos en el filtro «Me cuesta inclinar o arquear la espalda».
- **Nivel de certeza:** alta para la ambigüedad; media para la inconsistencia (podría justificarse por la fuente).
- **Recomendación:** cerrar Q3 con la decisión del usuario (conservar el término original si no hay ángulo; usar el ángulo de la fuente si lo hay) e incorporarla al protocolo y a la especificación.
- **Prueba:** comparar las fuentes de `sentarse-levantarse` y `sentarse-levantarse-sin-manos` (NHS vs. Otago) y ver si alguna da ángulo.
- **¿Requiere decisión humana?:** sí. Cerrar Q3.

### DS-13 · La distinción entre «apoyo para estabilidad» y «agarre» no está operacionalizada; depende de si la mano se cierra o la instrucción pide sujetarse

- **Ubicación:** `protocolo` §7.1 tabla (fila «Apoyo para estabilidad»); `catalogo-de-pie` (varios).
- **Evidencia:** `protocolo` §7.1: «`agarre`, solo si la mano se cierra o la instrucción pide sujetarse». `catalogo-de-pie`: `equilibrio-una-pierna-pared` (`agarre: false`, «yemas de los dedos tocándola»); `mini-sentadillas` (`agarre: true`, «manos en el respaldo»); `tandem-apoyo` (`agarre: true`, «sujétate con una mano»); `de-pie-mano-preparada` (`agarre: false`, «sin tocarla»).
- **Explicación:** la regla es razonable, pero «manos en el respaldo» no dice si se cierra la mano. La nota de `equilibrio-una-pierna-pared` («apoyo sin cerrar la mano») sugiere que el auditor distinguió, pero no hay criterio general. Q2 lo reconoce.
- **Consecuencia potencial:** etiquetas inconsistentes de `agarre` en ejercicios con apoyo similar.
- **Nivel de certeza:** alta.
- **Recomendación:** cerrar Q2 con la distinción del usuario (contacto / apoyo / soporte de carga / prensión / obligatorio vs. opcional) e incorporarla a DG-4.
- **Prueba:** revisar las instrucciones de los ejercicios de `catalogo-de-pie` con `agarre: true` y clasificar el tipo de contacto.
- **¿Requiere decisión humana?:** sí. Cerrar Q2.

### DS-14 · `ambos_brazos` en ejercicios con brazos alternos: la etiqueta de interfaz dice «usar los dos brazos a la vez», que contradice DG-4

- **Ubicación:** `opciones-js` `ETIQUETA_EXIGENCIA.ambos_brazos`; `protocolo` §13 Q8(a).
- **Evidencia:** `opciones-js`: `ambos_brazos: 'usar los dos brazos a la vez'`. `protocolo` Q8(a): «Rótulo `ETIQUETA_EXIGENCIA.ambos_brazos` («usar los dos brazos a la vez», `opciones.js:103`), que contradice DG-4 cuando los brazos se alternan».
- **Explicación:** DG-4 permite `ambos_brazos: true` cuando los brazos se alternan pero ambos son necesarios (p. ej. `estiramiento-hombro-cruzado`: una mano empuja el codo de la otra). El rótulo «a la vez» sugiere simultaneidad, lo que puede confundir al usuario y al auditor.
- **Consecuencia potencial:** el usuario puede interpretar mal por qué se excluye un ejercicio; el auditor puede dudar de la etiqueta.
- **Nivel de certeza:** alta.
- **Recomendación:** cambiar el rótulo antes o junto con los cambios de datos de `ambos_brazos` (ya previsto en Q8(a)).
- **Prueba:** revisión de interfaz.
- **¿Requiere decisión humana?:** sí. Texto del rótulo.

### DS-15 · `flexion_profunda_rodilla` en `mini-sentadillas`: la nota dice «por precaución» pero la instrucción permite «hasta donde te resulte cómodo»

- **Ubicación:** `catalogo-de-pie` `mini-sentadillas`.
- **Evidencia:** `notas_etiquetado`: «'Hasta donde te resulte cómodo' no limita la flexión: se marca flexion_profunda_rodilla por precaución». Instrucción: «Dobla las rodillas despacio hasta donde te resulte cómodo».
- **Explicación:** la nota reconoce que es una marca conservadora, pero no usa `[conservadora]` (DS-03). Además, la lógica («no limita la flexión») es una inferencia, no evidencia D. El protocolo R2.1 permite el `true` conservador, pero R2.4 exige la nota con formato.
- **Consecuencia potencial:** la marca no es trazable como conservadora; un auditor posterior podría confundirla con evidencia.
- **Nivel de certeza:** alta.
- **Recomendación:** reformular la nota con el formato de R2.4.
- **Prueba:** comparación literal.
- **¿Requiere decisión humana?:** sí (alcance retroactivo de R2.4, ver DS-03).

### DS-16 · `elevaciones-frontales-botella`: `brazo_sobre_hombro: true` «por prudencia» sin nota `[conservadora]`

- **Ubicación:** `catalogo-de-pie` `elevaciones-frontales-botella`.
- **Evidencia:** `notas_etiquetado`: «La fuente no indica la altura; se marca brazo sobre el hombro por prudencia». `brazo_sobre_hombro: true`.
- **Explicación:** mismo patrón que DS-15. La nota reconoce incertidumbre (N) y aplica R2.1, pero no usa el formato de R2.4.
- **Consecuencia potencial:** ídem.
- **Nivel de certeza:** alta.
- **Recomendación:** ídem.
- **Prueba:** ídem.
- **¿Requiere decisión humana?:** sí (DS-03).

---

## 4. Reglas que no puedan aplicarse de manera reproducible

### DS-17 · R3.1 (prueba operativa) no es reproducible sin la fuente original y sin criterio para «rango» vs. «imagen fija»

- **Ubicación:** `protocolo` §5.1 R3.1.
- **Evidencia:** R3.1: «Si el texto concede un rango ("as far as is comfortable"), la imagen es un ejemplo dentro de ese rango. Si el texto no da rango y la imagen lo muestra, la imagen fija el rango».
- **Explicación:** la regla depende de tener acceso a la fuente (texto e imagen) y de un juicio sobre qué es «rango» y qué es «ejemplo». No hay criterio para casos en que el texto da rango pero la imagen muestra un extremo, o viceversa. Además, Q5 no está confirmada.
- **Consecuencia potencial:** dos auditores pueden llegar a resultados distintos con la misma fuente.
- **Nivel de certeza:** alta.
- **Recomendación:** cerrar Q5 con un criterio explícito (p. ej. «si el texto da rango, la imagen no fija el rango; si no lo da, la imagen lo fija»), o aceptar que cada adaptación se justifica individualmente.
- **Prueba:** aplicar R3.1 a una adaptación concreta (p. ej. `flexion-alterna-piernas-de-pie`, «La fuente permite hacerlo sin apoyo; aquí se indica siempre con apoyo») y ver si la prueba es concluyente.
- **¿Requiere decisión humana?:** sí. Cerrar Q5.

### DS-18 · R7.9 (PDF a columnas) depende de una herramienta de renderizado no especificada

- **Ubicación:** `protocolo` §6 R7.9.
- **Evidencia:** R7.9: «Para PDF a varias columnas, se renderiza la página y se contrasta con el texto extraído. En el lote 2, la extracción mezcló las columnas».
- **Explicación:** no se especifica qué herramienta, qué resolución ni cómo se registra el contraste. La regla es correcta en intención pero no reproducible sin más detalle.
- **Consecuencia potencial:** auditorías con distinto nivel de rigor.
- **Nivel de certeza:** media.
- **Recomendación:** documentar la herramienta y el procedimiento en la skill o en el protocolo.
- **Prueba:** revisar la skill `auditar-catalogo-ejercicios` (no entregada).
- **¿Requiere decisión humana?:** no urgente; documental.

### DS-19 · R9.1 (perfiles de medición) no define cómo se combinan las opciones ni qué significa «posición con dos opciones»

- **Ubicación:** `protocolo` §9 R9.1.
- **Evidencia:** R9.1: «**Perfiles:** cada opción de `opciones.js` sola; cada posición de `POSICION`; posición con dos opciones; "solo sentado" con tres opciones».
- **Explicación:** «posición con dos opciones» no dice qué dos opciones ni si son de la misma sección o de secciones distintas. «Solo sentado con tres opciones» tampoco. Sin una lista cerrada, las mediciones no son comparables entre auditores.
- **Consecuencia potencial:** mediciones no reproducibles; comparaciones inválidas.
- **Nivel de certeza:** alta.
- **Recomendación:** definir la lista exacta de perfiles de medición en el protocolo o en la herramienta.
- **Prueba:** intentar reproducir el 31/20/0 de Q1 con la definición actual.
- **¿Requiere decisión humana?:** sí. Lista de perfiles.

### DS-20 · R2.6 (plan de cambios) exige «impacto en la disponibilidad» pero no define el formato ni el umbral de aceptación

- **Ubicación:** `protocolo` §3 R2.6 y §9.
- **Evidencia:** R2.6: «impacto en la disponibilidad (apartado 9)». §9: «**No hay umbral de aviso aprobado.** Se informa sin umbral».
- **Explicación:** el plan debe incluir el impacto, pero no hay criterio para decidir si un impacto es aceptable. Es coherente con «la disponibilidad no es un motivo para retirar una etiqueta» (R9.3), pero deja al desarrollador sin guía.
- **Consecuencia potencial:** decisiones discrecionales.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna acción; es una decisión consciente. Se cita para que no se confunda con una regla operativa.
- **Prueba:** —
- **¿Requiere decisión humana?:** no.

---

## 5. Casos donde el criterio conservador se confunde con evidencia directa

### DS-21 · Notas que describen marcas conservadoras sin el formato `[conservadora]` (agrupación de DS-03, DS-15, DS-16)

- **Ubicación:** `catalogo-de-pie` (`mini-sentadillas`, `flexion-alterna-piernas-de-pie`, `elevaciones-frontales-botella`, `sentarse-levantarse`).
- **Evidencia:** ver DS-15 y DS-16. `flexion-alterna-piernas-de-pie`: «Subir la rodilla de pie acerca el muslo al tronco como mínimo igual que sentado: se marca por precaución». `sentarse-levantarse`: «La inclinación es leve: no es inclinacion_tronco» (esta es una decisión de `false`, no conservadora, pero depende de Q3).
- **Explicación:** las notas mezclan hechos, inferencias y decisiones conservadoras sin el formato exigido. El principio 3 del protocolo («hechos, inferencias e incertidumbres se escriben por separado») no se cumple en estas notas.
- **Consecuencia potencial:** un auditor posterior puede leer «se marca por precaución» como evidencia de que la exigencia existe.
- **Nivel de certeza:** alta.
- **Recomendación:** reformular con el formato de R2.4 y separar hecho/inferencia/decisión.
- **Prueba:** comparación literal.
- **¿Requiere decisión humana?:** sí (alcance retroactivo de R2.4).

### DS-22 · `sentarse-levantarse`: `equilibrio_sin_apoyo: true` con instrucción «Usa las manos solo como guía si lo necesitas»

- **Ubicación:** `catalogo-de-pie` `sentarse-levantarse`.
- **Evidencia:** `equilibrio_sin_apoyo: true`; instrucción: «Ya de pie, vuelve a sentarte despacio. Usa las manos solo como guía si lo necesitas». `notas_etiquetado`: «Al estar de pie no hay apoyo: equilibrio_sin_apoyo».
- **Explicación:** la instrucción permite usar las manos como guía, lo que podría interpretarse como apoyo opcional. La nota afirma que «no hay apoyo», pero la instrucción no lo prohíbe. Es una posible confusión entre apoyo opcional y ausencia de apoyo.
- **Consecuencia potencial:** un usuario que necesita apoyo podría recibir el ejercicio y no poder hacerlo sin él; o un usuario que no lo necesita podría excluirlo innecesariamente.
- **Nivel de certeza:** media (depende de la fuente, que no tengo).
- **Recomendación:** revisar con la fuente si el apoyo es opcional; si lo es, valorar si `equilibrio_sin_apoyo` debe ser `false` o si la instrucción debe reformularse.
- **Prueba:** consultar la fuente NHS «Strength exercises» (no entregada).
- **¿Requiere decisión humana?:** sí, tras revisar la fuente.

### DS-23 · `elevacion-talones-sin-apoyo`: `equilibrio_sin_apoyo: true` con contingencia «Si pierdes el equilibrio, sujétate a la silla»

- **Ubicación:** `catalogo-de-pie` `elevacion-talones-sin-apoyo`; `protocolo` §8.2 R6.3.
- **Evidencia:** instrucción: «Si pierdes el equilibrio, sujétate a la silla». `equilibrio_sin_apoyo: true`. R6.3: «"Si pierdes el equilibrio, sujétate a la silla" es una contingencia. Ninguno de los dos cambia `equilibrio_sin_apoyo` ni `agarre`».
- **Explicación:** el protocolo ya resuelve este caso (la contingencia no cambia la etiqueta). No es una contradicción, pero se cita porque es un ejemplo de cómo el criterio conservador (marcar `equilibrio_sin_apoyo: true` porque la fuente dice «without support») convive con una contingencia que permite apoyo. La nota del ejercicio («La silla queda cerca como seguridad») es coherente.
- **Consecuencia potencial:** ninguna si se aplica R6.3.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna; ejemplo de buena aplicación.
- **Prueba:** —
- **¿Requiere decisión humana?:** no.

---

## 6. Riesgos de falsos positivos y falsos negativos en los filtros

### DS-24 · Falsos negativos por `posiciones` como alternativa (agrupación con DS-08)

- **Ubicación:** `motor-js` `motivosIncompatibilidad`; `catalogo-de-pie` (`estiramiento-hombro-cruzado`, `estiramiento-triceps`, `estiramiento-pecho-manos-lumbar`, `estiramiento-pecho-manos-detras`, `manos-espalda-codo-contrario`).
- **Evidencia:** los cinco ejercicios tienen `posiciones: ["sentado","de_pie"]` y `equilibrio_sin_apoyo: false`. Sus instrucciones no indican que haya que estar de pie; algunos dicen «Siéntate en el borde de la silla o ponte de pie» (`manos-espalda-codo-contrario`), lo que sugiere alternativa. El motor exige que **todas** las posiciones estén permitidas.
- **Explicación:** un perfil «solo sentado» no recibiría estos ejercicios aunque pudiera hacerlos sentado, porque el motor exige `de_pie` también. Es un falso negativo.
- **Consecuencia potencial:** menor disponibilidad de la real; el usuario no ve ejercicios que podría hacer.
- **Nivel de certeza:** alta para el mecanismo; media para el impacto (depende de cuántos ejercicios usan `posiciones` como alternativa).
- **Recomendación:** ver DS-08.
- **Prueba:** medir cuántos de los 8 ejercicios con `sentado,de_pie` se excluyen para «solo sentado» y si sus instrucciones permiten hacerlos sentado.
- **¿Requiere decisión humana?:** sí (DS-08).

### DS-25 · Falsos positivos por `ambos_brazos: false` en ejercicios con apoyo bilateral (Q1)

- **Ubicación:** `catalogo-de-pie` (`mini-sentadillas`, `elevacion-talones-apoyo`, `puntillas-talones-apoyo`, `circulos-cadera-pie`, `paso-atras-apoyo`, `tandem-apoyo`, `flexion-rodilla-pie-apoyo`, `elevar-puntas-pies-apoyo`).
- **Evidencia:** todos tienen `ambos_brazos: false` y `agarre: true` con instrucciones que piden «las dos manos» o «sujétate con las dos manos». Ejemplo: `circulos-cadera-pie`: «Sujétate con las dos manos a una mesa firme…», `ambos_brazos: false`.
- **Explicación:** si el apoyo bilateral cuenta como `ambos_brazos` (opción B de la decisión 4 del registro, o Q1 sin resolver), estos ejercicios deberían tener `ambos_brazos: true`. Con `false`, un usuario «Solo puedo usar un brazo» los recibiría, pero las instrucciones le piden usar las dos manos. Es un falso positivo del filtro.
- **Consecuencia potencial:** el usuario recibe un ejercicio que no puede ejecutar según las instrucciones.
- **Nivel de certeza:** alta para la discrepancia instrucción/etiqueta; la resolución depende de Q1.
- **Recomendación:** cerrar Q1; mientras tanto, registrar como CN y no cambiar etiquetas.
- **Prueba:** listar los ejercicios de `catalogo-de-pie` con `ambos_brazos: false` e instrucciones que mencionan «dos manos» o «las manos»; contar.
- **¿Requiere decisión humana?:** sí. Cerrar Q1.

### DS-26 · Falsos positivos por `agarre: false` en ejercicios con instrucción de «apoya las manos» o «palmas» (Q2)

- **Ubicación:** `catalogo-de-pie` (`flexiones-pared`, `estiramiento-gemelo-pared`, `estiramiento-soleo-pared`, `abrir-pierna-brazo-pared`, `estiramiento-hombros-espalda-pared`, `subir-manos-pared`, `estiramiento-pecho-pared`, `estiramiento-lateral-muslo-pared`, `isometrico-hombro-fuera-pared`, `descanso-apoyado-pared`).
- **Evidencia:** `flexiones-pared`: «Apoya las palmas en la pared…», `agarre: false`, nota «Palmas abiertas, sin agarre». `estiramiento-gemelo-pared`: «Apoya las manos en la pared», `agarre: false`. `subir-manos-pared`: «apoya las palmas en la pared», `agarre: false`, `peso_en_manos: true`.
- **Explicación:** la distinción entre «palma abierta» (no agarre) y «manos en el respaldo» (agarre) no está formalizada. Si Q2 se cierra con la propuesta del auditor (palma abierta → `false`; instrucción neutra → `true` conservador), estos ejercicios son correctos. Si se aplica R2.1 sin matiz, deberían ser `true`. La inconsistencia actual sugiere que el auditor aplicó un criterio no escrito.
- **Consecuencia potencial:** usuarios con dificultad para cerrar la mano podrían recibir ejercicios que les piden apoyar la palma (probablemente bien) o sujetarse (mal), según el caso.
- **Nivel de certeza:** alta para la inconsistencia; media para la resolución.
- **Recomendación:** cerrar Q2 y documentar el criterio.
- **Prueba:** revisar las instrucciones de los ejercicios con `agarre: false` y contacto con superficie; clasificar.
- **¿Requiere decisión humana?:** sí. Cerrar Q2.

### DS-27 · Falsos negativos por `equilibrio_sin_apoyo: true` en ejercicios con apoyo opcional o contingencia

- **Ubicación:** `catalogo-de-pie` (`sentarse-levantarse`, `elevacion-talones-sin-apoyo`, `de-pie-mano-preparada`, `arquear-espalda-pie`, `sentadilla-sin-apoyo`, `sentarse-levantarse-sin-manos`, `banda-sentarse-levantarse`, `elevaciones-frontales-botella`, `elevaciones-laterales-botella`, `press-hombros-botella-pie`, `banda-elevar-brazos-pie`).
- **Evidencia:** `de-pie-mano-preparada`: «Deja la mano justo encima de la superficie, sin tocarla, lista para agarrarte», `equilibrio_sin_apoyo: true`. `arquear-espalda-pie`: «una silla firme cerca», `equilibrio_sin_apoyo: true`. `sentarse-levantarse`: «Usa las manos solo como guía si lo necesitas», `equilibrio_sin_apoyo: true`.
- **Explicación:** si el apoyo es opcional o hay contingencia, `equilibrio_sin_apoyo: true` excluye a usuarios que necesitan apoyo, aunque podrían hacer el ejercicio con apoyo. Es conservador (R2.1), pero puede ser un falso negativo si la fuente permite el apoyo.
- **Consecuencia potencial:** menor disponibilidad; usuarios que podrían hacer el ejercicio con apoyo no lo reciben.
- **Nivel de certeza:** media (depende de la fuente y de si el apoyo es opcional).
- **Recomendación:** revisar con la fuente; si el apoyo es opcional, valorar si `equilibrio_sin_apoyo` debe ser `false` o si se documenta como adaptación.
- **Prueba:** consultar las fuentes (no entregadas).
- **¿Requiere decisión humana?:** sí, tras revisar fuentes.

### DS-28 · El motor no implementa ningún filtro de «desplazamiento» ni de «material especial»; la especificación los excluye del catálogo pero no hay comprobación

- **Ubicación:** `especificacion` §4 «Exclusiones del catálogo v1»; `validacion-js` `problemasEjercicio`.
- **Evidencia:** especificación: «Movimientos de cuello · arrodillarse o apoyar las rodillas en el suelo · desplazarse por el espacio · ejercicios de impacto … · movilidad aislada de la muñeca … · ejercicios que dependen de reposabrazos · ejercicios con material especial».
- **Explicación:** el validador solo comprueba `impacto === true` («v1 no admite ejercicios de impacto»). No comprueba las demás exclusiones (cuello, rodillas en el suelo, desplazamiento, muñeca, reposabrazos, material especial). No hay exigencia que las cubra, así que no se pueden etiquetar; pero tampoco se detectan.
- **Consecuencia potencial:** un ejercicio con desplazamiento o material especial podría entrar en el catálogo sin que el validador lo detecte.
- **Nivel de certeza:** alta (verificado en el código).
- **Recomendación:** que el desarrollador decida si se añaden comprobaciones (requiere cambio de esquema o de validador) o si se confía en la auditoría documental.
- **Prueba:** buscar en el catálogo completo (no entregado) ejercicios con instrucciones de desplazamiento o material especial.
- **¿Requiere decisión humana?:** sí. Alcance del validador.

---

## 7. Requisitos que el validador no comprueba

### DS-29 · El validador no comprueba `fecha_revision` (agrupación con DS-07)

- Ver DS-07.

### DS-30 · El validador no comprueba que `notas_etiquetado` use el formato `[conservadora]` cuando corresponde

- **Ubicación:** `validacion-js` `problemasEjercicio`; `protocolo` §3 R2.4.
- **Evidencia:** `problemasEjercicio` no menciona `notas_etiquetado`. R2.4 exige el formato.
- **Explicación:** la regla es documental, no verificada por código.
- **Consecuencia potencial:** notas conservadoras sin formato pasan la validación.
- **Nivel de certeza:** alta.
- **Recomendación:** si se quiere garantizar, añadir comprobación (requiere criterio para distinguir conservadora de no conservadora, que hoy no existe en el esquema).
- **Prueba:** `grep` de `[conservadora]` en el catálogo.
- **¿Requiere decisión humana?:** sí. Si se quiere verificar por código.

### DS-31 · El validador no comprueba que `adaptaciones` esté documentado cuando hay diferencia con la fuente

- **Ubicación:** `validacion-js` `problemasEjercicio`; `especificacion` §7.7.
- **Evidencia:** especificación §7.7: «Cualquier cambio respecto a la fuente se anota en `adaptaciones`». `problemasEjercicio` no comprueba `adaptaciones`.
- **Explicación:** no hay forma automática de saber si hay diferencia con la fuente; el validador no puede comprobarlo sin la fuente. Es una limitación estructural, no un defecto.
- **Consecuencia potencial:** adaptaciones no documentadas.
- **Nivel de certeza:** alta (limitación conocida).
- **Recomendación:** ninguna acción; la auditoría documental es la que lo verifica.
- **Prueba:** —
- **¿Requiere decisión humana?:** no.

### DS-32 · El validador no comprueba que `fuente.especifica_de` sea coherente con la fuente

- **Ubicación:** `validacion-js` `problemasEjercicio`; `protocolo` §11.2 R8.1.
- **Evidencia:** R8.1: «`fuente.especifica_de` solo se rellena con la población que la fuente declara». `problemasEjercicio` no comprueba `especifica_de`.
- **Explicación:** no se puede comprobar sin la fuente. Limitación estructural.
- **Consecuencia potencial:** poblaciones inventadas o inferidas.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna acción automática; la auditoría lo verifica.
- **Prueba:** —
- **¿Requiere decisión humana?:** no.

### DS-33 · El validador no comprueba que `variante_de` no cree ciclos

- **Ubicación:** `validacion-js` `problemasEjercicio`.
- **Evidencia:** `if (typeof ej.variante_de !== 'string' || ej.variante_de === ej.id || (ids && !ids.has(ej.variante_de))) { p.push(...) }`. Comprueba que existe y no es el mismo, pero no ciclos (A→B→A).
- **Explicación:** un ciclo podría romper `familia` en el motor (`const familia = (ej) => ej.variante_de || ej.id;`), aunque el motor solo usa un nivel. No es un problema actual si no hay ciclos, pero no se detecta.
- **Consecuencia potencial:** baja; el motor no recorre la cadena.
- **Nivel de certeza:** alta.
- **Recomendación:** valorar añadir comprobación de ciclos si se prevén cadenas.
- **Prueba:** construir un catálogo de prueba con ciclo y validar.
- **¿Requiere decisión humana?:** no urgente.

### DS-34 · El validador no comprueba que `posiciones` sea coherente con las instrucciones (secuencia vs. alternativa)

- Ver DS-08. No es comprobable automáticamente sin NLP; es una limitación estructural.

---

## 8. Reglas documentadas que el motor no implemente

### DS-35 · El motor no implementa la distinción entre «apoyo obligatorio» y «apoyo opcional» (Q1, Q2)

- **Ubicación:** `motor-js` `calcularRestricciones` y `motivosIncompatibilidad`; `protocolo` §7.1 y §13 Q1/Q2.
- **Evidencia:** el motor solo lee `exigencias`, `posiciones`, `recursos` y `validacion.estado`. No hay campo para «apoyo opcional».
- **Explicación:** la distinción que propone el usuario en Q2 (contacto / apoyo / soporte / prensión / obligatorio vs. opcional) no está representada en el esquema. El motor no puede implementarla sin cambio de esquema.
- **Consecuencia potencial:** las decisiones de Q1/Q2 no pueden reflejarse en el motor sin cambio de modelo.
- **Nivel de certeza:** alta.
- **Recomendación:** que el desarrollador decida si la distinción se codifica en las 16 exigencias existentes (p. ej. `agarre` vs. `peso_en_manos` vs. `ambos_brazos`) o si requiere campo nuevo (fuera de alcance).
- **Prueba:** revisar `motor-js` y `validacion-js` para confirmar que no hay campo de apoyo opcional.
- **¿Requiere decisión humana?:** sí. Modelo de datos.

### DS-36 · El motor no implementa la exclusión de «desplazamiento por el espacio» ni «material especial» (agrupación con DS-28)

- Ver DS-28.

### DS-37 · El motor no usa `fuente.especifica_de` para nada (correcto según R8.2, pero conviene verificarlo)

- **Ubicación:** `motor-js`; `protocolo` §11.2 R8.2.
- **Evidencia:** R8.2: «El motor no lee `especifica_de`; solo lo muestra `app.js:621`». En `motor-js` no aparece `especifica_de`.
- **Explicación:** coherente. Se cita para confirmar que la regla se cumple.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba:** `grep especifica_de public/js/motor.js`.
- **¿Requiere decisión humana?:** no.

### DS-38 · El motor no implementa la regla de que un ejercicio con `variante_de` no se combine con su original en la misma rutina (sí lo hace, pero conviene verificarlo)

- **Ubicación:** `motor-js` `familia` y `usadas`.
- **Evidencia:** `const familia = (ej) => ej.variante_de || ej.id;` y `if (usadas.has(familia(e))) continue;`.
- **Explicación:** implementado. Se cita para confirmar.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba:** generar rutina con `sentarse-levantarse` y `sentarse-levantarse-sin-manos` y verificar que solo aparece uno.
- **¿Requiere decisión humana?:** no.

---

## 9. Casos límite de Q1 y Q2

### DS-39 · Q1: ejercicios con apoyo bilateral y `ambos_brazos: false` (agrupación con DS-25)

- Ejemplos verificables en `catalogo-de-pie`: `mini-sentadillas`, `elevacion-talones-apoyo`, `puntillas-talones-apoyo`, `circulos-cadera-pie`, `paso-atras-apoyo`, `tandem-apoyo`, `flexion-rodilla-pie-apoyo`, `elevar-puntas-pies-apoyo`, `estiramiento-cuadriceps-pie`, `estiramiento-flexor-cadera-pie`, `estiramiento-aductores-pie`, `estiramiento-isquios-pie`, `giro-tronco-pie`, `pendulo-hombro`, `remo-inclinado-botella`.
- **Caso límite:** `tandem-apoyo` («sujétate con una mano») tiene `ambos_brazos: false` y `agarre: true`; es apoyo unilateral, no bilateral. Correcto bajo cualquier lectura de Q1.
- **Caso límite:** `circulos-cadera-pie` («Sujétate con las dos manos») tiene `ambos_brazos: false`; bajo Q1 opción B debería ser `true`.
- **Caso límite:** `elevar-puntas-pies-apoyo` («sujétate con las dos manos») tiene `ambos_brazos: false`; ídem.
- **Recomendación:** cerrar Q1 con la decisión del usuario (que ya distingue fuente, instrucciones y apoyo opcional) y aplicar a estos casos.
- **¿Requiere decisión humana?:** sí.

### DS-40 · Q2: ejercicios con contacto sin cierre de mano y `agarre: true` (agrupación con DS-13, DS-26)

- Ejemplos verificables en `catalogo-de-pie`: `mini-sentadillas` («manos en el respaldo», `agarre: true`), `elevacion-talones-apoyo` («manos en el respaldo», `agarre: true`), `elevacion-lateral-pierna` («manos en el respaldo», `agarre: true`), `extension-pierna-atras` («manos en el respaldo», `agarre: true`), `flexion-alterna-piernas-de-pie` («apóyate en ella», `agarre: true`), `elevar-puntas-pies-apoyo` («sujétate con las dos manos», `agarre: true`), `flexion-rodilla-pie-apoyo` («sujétate con las dos manos», `agarre: true`), `tandem-apoyo` («sujétate con una mano», `agarre: true`), `circulos-cadera-pie` («Sujétate con las dos manos», `agarre: true`), `paso-atras-apoyo` («sujétate con las dos manos», `agarre: true`), `marcha-sitio-apoyo` («Sujétate al respaldo», `agarre: true`), `giro-tronco-pie` («una mano en el respaldo», `agarre: true`), `puntillas-talones-apoyo` («sujétate con las dos manos», `agarre: true`), `estiramiento-cuadriceps-pie` («sujétate con una mano», `agarre: true`), `pendulo-hombro` («apoya una mano en el respaldo», `agarre: true`), `remo-inclinado-botella` («Apoya una mano en el respaldo», `agarre: true`), `estiramiento-flexor-cadera-pie` («Sujétate al respaldo», `agarre: true`), `estiramiento-aductores-pie` («Sujétate al respaldo», `agarre: true`), `estiramiento-isquios-pie` («Sujétate al respaldo», `agarre: true`).
- **Caso límite:** `equilibrio-una-pierna-pared` («yemas de los dedos tocándola», `agarre: false`) y `flexiones-pared` («palmas en la pared», `agarre: false`) aplican un criterio de palma abierta que no está formalizado.
- **Caso límite:** `de-pie-mano-preparada` («sin tocarla», `agarre: false`) es correcto bajo cualquier lectura.
- **Recomendación:** cerrar Q2 con la distinción del usuario y aplicar a estos casos.
- **¿Requiere decisión humana?:** sí.

### DS-41 · Q1/Q2: ejercicios con `peso_en_manos: true` y `agarre: false` (palmas abiertas con carga)

- Ejemplos: `flexiones-pared` (`peso_en_manos: true`, `agarre: false`), `subir-manos-pared` (`peso_en_manos: true`, `agarre: false`).
- **Explicación:** coherente con R7.3 (contacto no demuestra carga) y R7.4 (contacto no demuestra agarre). La palma abierta soporta peso sin cerrar la mano. Correcto bajo la propuesta del auditor en Q2.
- **Recomendación:** ninguna; ejemplo de buena aplicación.
- **¿Requiere decisión humana?:** no.

---

## 10. Reglas de adaptación y trazabilidad de las fuentes

### DS-42 · R3.2 exige que la adaptación esté documentada en `adaptaciones` con cita de la fuente; el catálogo no guarda la cita, solo el texto para el usuario

- **Ubicación:** `protocolo` §5.1 R3.2 y §10.1; `catalogo-esquema` `ejemplo_de_ejercicio_completo.adaptaciones`.
- **Evidencia:** R3.2: «Texto en `adaptaciones`, redactado para el usuario. En el informe, la cita de la fuente que la justifica». §10.1: «Fuente y fragmento o referencia (página, sección, imagen) | Informe de lote. El catálogo solo guarda `fuente.organizacion`, `titulo`, `url`, `licencia` y `consultado`».
- **Explicación:** la cita de la fuente vive en el informe, no en el catálogo. Si el informe se pierde, la adaptación queda sin justificación verificable en el catálogo.
- **Consecuencia potencial:** pérdida de trazabilidad si los informes no se conservan.
- **Nivel de certeza:** alta.
- **Recomendación:** asegurar que los informes de lote se versionan junto con el catálogo (ya previsto en `propuestas-cierre` con huellas, pero no implementado).
- **Prueba:** revisar si los informes de lote están en el repositorio.
- **¿Requiere decisión humana?:** sí. Política de conservación de informes.

### DS-43 · R5.6 exige que una variante con fuente se cree como entrada propia con `variante_de`; el validador comprueba que el id existe, pero no que la fuente describa la variante

- **Ubicación:** `protocolo` §5.2 R5.6; `validacion-js` `problemasEjercicio`.
- **Evidencia:** R5.6: «Una variante **con** fuente se crea como entrada propia con `variante_de` … Se etiqueta por separado». `problemasEjercicio` comprueba `variante_de` existe y no es el mismo, pero no la fuente.
- **Explicación:** la comprobación de que la fuente describe la variante es documental, no automática.
- **Consecuencia potencial:** variantes sin respaldo podrían entrar si el auditor no lo detecta.
- **Nivel de certeza:** alta (limitación estructural).
- **Recomendación:** ninguna acción automática; la auditoría lo verifica.
- **Prueba:** —
- **¿Requiere decisión humana?:** no.

### DS-44 · El catálogo tiene 35 variantes (`catalogo-esquema`), pero el registro solo menciona propuestas de variante pendientes y ninguna creada

- **Ubicación:** `catalogo-esquema` `variantes: 35`; `registro` «Propuestas de variante pendientes de validación».
- **Evidencia:** `catalogo-esquema`: `"variantes": 35`. `registro`: tabla con 3 propuestas pendientes (`giro-tronco-sentado`, `boxeo-sentado`, `abrir-cerrar-manos`), ninguna creada.
- **Explicación:** las 35 variantes existentes en el catálogo no están documentadas en el registro como creadas con fuente. No puedo verificar si cada una tiene fuente (no tengo el catálogo completo). Es un hallazgo que requiere verificación.
- **Consecuencia potencial:** variantes sin respaldo documental.
- **Nivel de certeza:** baja (no puedo verificar sin el catálogo completo).
- **Recomendación:** auditar las 35 variantes y comprobar que cada una tiene fuente que la describa (R5.6).
- **Prueba:** listar las 35 variantes y revisar sus fuentes.
- **¿Requiere decisión humana?:** sí, tras la verificación.

### DS-45 · `flexion-alterna-piernas-de-pie` tiene `adaptaciones: ["La fuente permite hacerlo sin apoyo; aquí se indica siempre con apoyo."]` pero `equilibrio_sin_apoyo: false` y `agarre: true`

- **Ubicación:** `catalogo-de-pie` `flexion-alterna-piernas-de-pie`.
- **Evidencia:** `adaptaciones`: «La fuente permite hacerlo sin apoyo; aquí se indica siempre con apoyo». `equilibrio_sin_apoyo: false`, `agarre: true`.
- **Explicación:** la adaptación documentada (añadir apoyo) es coherente con las etiquetas. Es un ejemplo de buena aplicación de R3.2. Se cita para confirmar.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
- **Recomendación:** ninguna.
- **Prueba:** —
- **¿Requiere decisión humana?:** no.

### DS-46 · `elevacion-talones-sin-apoyo` tiene `variante_de: "elevacion-talones-apoyo"` y `equilibrio_sin_apoyo: true`; la fuente (NHS) describe la variante sin apoyo, pero la nota dice «La silla queda cerca como seguridad»

- **Ubicación:** `catalogo-de-pie` `elevacion-talones-sin-apoyo`.
- **Evidencia:** `variante_de: "elevacion-talones-apoyo"`, `equilibrio_sin_apoyo: true`, instrucción «Si pierdes el equilibrio, sujétate a la silla», nota «La silla queda cerca como seguridad».
- **Explicación:** coherente con R6.3 (contingencia no cambia etiqueta). La variante tiene fuente (NHS). Correcto.
- **Consecuencia potencial:** ninguna.
- **Nivel de certeza:** alta.
-