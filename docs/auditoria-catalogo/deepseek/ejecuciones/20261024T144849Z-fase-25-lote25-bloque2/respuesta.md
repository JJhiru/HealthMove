- **Explicación (continuación):** R2.2 exige D para un `false`; aquí la evidencia es I y la instrucción de HealthMove tampoco fija el número de manos. R2.1 permite el `true` conservador con su nota. La duda es si la instrucción de HealthMove («Sujeta una pierna») debe leerse como una sola mano (lo que daría `false` con D de la instrucción, no de la fuente) o como neutra (lo que da `true` conservador). El protocolo no resuelve qué prevalece cuando la instrucción de HealthMove es más concreta que la fuente.
- **Consecuencia potencial:** si se deja en `false`, el ejercicio se ofrece a quien «Solo puedo usar un brazo» sin que conste que la fuente lo permita con uno; si se pasa a `true`, se restringe sin evidencia de que haga falta.
- **Nivel de certeza:** media.
- **Recomendación:** aplicar R2.1 (`true` conservador con nota `[conservadora]`) mientras no haya D de la fuente sobre el número de manos; o, si el desarrollador prefiere, reescribir la instrucción de HealthMove con el verbo de la fuente («Sujeta la pierna por debajo del muslo») y mantener el `true` conservador.
- **Prueba o evidencia que permitiría confirmarlo:** una imagen o un texto de la fuente que muestre una o dos manos; o una decisión del desarrollador sobre qué prevalece cuando la instrucción de HealthMove es más concreta que la fuente.
- **¿Requiere decisión humana?:** sí. Fijar el criterio para esta clase de casos (instrucción de HealthMove más concreta que la fuente) y, con él, el valor de `ambos_brazos`.

### DS-461 · Posición de HealthMove distinta de la que permite la fuente, sin documentar en `adaptaciones` (207, 208, 209, 210)
- **Ubicación exacta:** catálogo, `marcha-circulos-codos-sentado`, `rodilla-mano-contraria-sentado`, `talones-flexion-codo-sentado` y `circulos-tobillo-tumbado`, campo `adaptaciones`; evidencia, apartados 207 a 210.
- **Evidencia:** «Sentado o de pie» (F2, 207, 208 y 209); ««Whilst lying or sitting with your back supported, now circle your ankles in each direction»» (F3, 210).
- **Explicación:** en los cuatro, la fuente permite dos posiciones y HealthMove usa una. R3.1 exige que la ejecución de HealthMove sea una de las que permite la fuente: se cumple. Pero R3.2 pide que la adaptación esté documentada y su fundamento sea verificable, y en los cuatro `adaptaciones` está vacío (o solo recoge la dosis). La diferencia es C2 no documentado, no C3. En 210, además, la posición elegida (tumbado) es una de las dos que permite la fuente, pero la instrucción de HealthMove («Túmbate boca arriba en la cama») no menciona la alternativa sentada.
- **Consecuencia potencial:** el usuario no ve en «Cambios respecto a la fuente» que la fuente permite otra posición; y la auditoría no deja constancia de la elección.
- **Nivel de certeza:** alta (la fuente permite las dos posiciones; el campo está vacío).
- **Recomendación:** añadir a `adaptaciones` una frase breve por ejercicio, del tipo «La fuente permite hacerlo sentado o de pie; aquí se hace sentado.» (207, 208, 209) y «La fuente permite hacerlo tumbado o sentado; aquí se hace tumbado.» (210). No cambia ninguna etiqueta.
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente (ya citado en la evidencia) y la comprobación de que la instrucción de HealthMove no introduce un movimiento distinto.
- **¿Requiere decisión humana?:** sí. Aprobar el texto de la adaptación (Q5, una a una) y decidir si se documenta también la alternativa que HealthMove no usa.

### DS-462 · `rotacion_tronco: true` en `rodilla-mano-contraria-sentado` sin nota `[conservadora]`
- **Ubicación exacta:** catálogo, `rodilla-mano-contraria-sentado`, `exigencias.rotacion_tronco` y `notas_etiquetado`; evidencia, apartado 208, «Tronco (I)».
- **Evidencia:** «**Tronco (I):** la mano cruza al muslo contrario; puede girar algo el tronco.»
- **Explicación:** la etiqueta es `true` con evidencia I. R2.4 pide que todo `true` conservador lleve su nota `[conservadora]` en `notas_etiquetado`. La nota actual solo cubre `ambos_brazos`. La duda es si un `true` con evidencia I (no N) cuenta como conservador a efectos de R2.4: el protocolo dice «cuando la evidencia es N o insuficiente» (R2.1) y «todo `true` conservador tiene su nota» (verificación de §3). Un I que no se resuelve es «insuficiente»; un I que se resuelve con la definición literal de §4 no lo es.
- **Consecuencia potencial:** si no se anota, la incertidumbre sobre el giro del tronco no queda registrada y el usuario no puede verla (Q7).
- **Nivel de certeza:** media.
- **Recomendación:** añadir la nota `[conservadora]` de `rotacion_tronco` en la forma de R2.4, con el motivo («la mano cruza al muslo contrario y puede girar algo el tronco») y lo que la cerraría («evidencia de la fuente de que el tronco no gira»). No cambia el valor.
- **Prueba o evidencia que permitiría confirmarlo:** una imagen o un texto de la fuente que fije si el tronco gira; o una decisión del desarrollador sobre si un `true` con I resuelto por la definición literal necesita nota.
- **¿Requiere decisión humana?:** sí. Fijar el criterio para las notas de los `true` con evidencia I.

### DS-463 · La exclusión «movilidad aislada de la muñeca» no cubre literalmente la movilidad aislada del tobillo (`circulos-tobillo-tumbado`)
- **Ubicación exacta:** especificación §4, «Exclusiones del catálogo v1»; catálogo, `circulos-tobillo-tumbado`.
- **Evidencia:** «Movimientos de cuello · arrodillarse o apoyar las rodillas en el suelo · desplazarse por el espacio · ejercicios de impacto (la exigencia `impacto` se mantiene para el futuro) · movilidad aislada de la muñeca (giros o círculos), porque ninguna exigencia la cubre · ejercicios que dependen de reposabrazos · ejercicios con material especial (pelotas de terapia, escalones).»
- **Explicación:** la exclusión se justifica porque «ninguna exigencia la cubre». El mismo argumento se aplica a la movilidad aislada del tobillo: `circulos-tobillo-tumbado` no marca ninguna exigencia y su propósito es la circulación. La exclusión está redactada solo para la muñeca. No puedo decidir si la intención era excluir toda movilidad aislada de una articulación pequeña o solo la de la muñeca; la especificación no lo dice.
- **Consecuencia potencial:** si la intención era excluir toda movilidad aislada, el ejercicio no debería estar en el catálogo; si era solo la muñeca, el ejercicio es válido y la exclusión está bien redactada. En cualquier caso, la auditoría no puede cerrar el punto sin una decisión.
- **Nivel de certeza:** media (la contradicción de criterio es clara; la intención, no).
- **Recomendación:** registrar como CN (R1.4) o como cuestión abierta, con las dos opciones: (a) la exclusión se lee literalmente y el ejercicio se queda; (b) la exclusión se extiende a toda movilidad aislada de una articulación pequeña y el ejercicio se retira. No propongo retirarlo sin decisión.
- **Prueba o evidencia que permitiría confirmarlo:** una frase de la especificación o del registro que fije el alcance de la exclusión; o una decisión del desarrollador.
- **¿Requiere decisión humana?:** sí. Fijar el alcance de la exclusión y, con él, si `circulos-tobillo-tumbado` se queda.

### DS-464 · `flexion_profunda_rodilla: false` en `abdomen-profundo-tumbado` con un dibujo que muestra las rodillas en torno a 90° (clase de CN-5)
- **Ubicación exacta:** catálogo, `abdomen-profundo-tumbado`, `exigencias.flexion_profunda_rodilla`; evidencia, apartado 211, «Rodillas (I)».
- **Evidencia:** «**Rodillas (I):** en torno a 90°; es la clase de CN-5.» «**Dibujo (D, n.º 5):** tumbado, rodillas dobladas, una mano sobre el vientre.»
- **Explicación:** CN-5 está pendiente y su valor provisional es «el actual en cada ejercicio». En los ejercicios ya auditados de la misma clase (suelo pélvico, `abdominal-isometrico-muslos`, `control-abdominal-brazos-arriba`, `rodilla-al-lado-tumbado`) el valor actual es `false`; en los puentes del lote 12 es `true` conservador porque el dibujo deja la rodilla en torno a 90°. Aquí el dibujo también deja la rodilla en torno a 90° (I), así que el criterio de los puentes apunta a `true` conservador, y el de los otros tumbados, a `false`. R2.2 exige D para un `false`; aquí la evidencia es I. La duda es si se aplica el criterio de los puentes (más cercano a la evidencia de este ejercicio) o se espera a CN-5.
- **Consecuencia potencial:** si se deja en `false`, el ejercicio se ofrece a quien «Me cuesta doblar mucho la rodilla» sin que conste que la rodilla no pase de 90°; si se pasa a `true`, se restringe sin D.
- **Nivel de certeza:** media.
- **Recomendación:** aplicar R2.1 (`true` conservador con nota `[conservadora]`) mientras CN-5 siga pendiente, por coherencia con los puentes del lote 12 y porque R2.2 no permite un `false` con I. Si el desarrollador prefiere esperar a CN-5, dejar el valor actual y anotarlo en `notas_etiquetado` como pendiente de CN-5.
- **Prueba o evidencia que permitiría confirmarlo:** una imagen lateral de la fuente que fije el ángulo; o la resolución de CN-5.
- **¿Requiere decisión humana?:** sí. Resolver CN-5 o decidir el valor provisional de esta clase.

### DS-465 · La ilustración de HealthMove de `gluteo-pierna-cruzada-suelo` omite el cruce y el abrazo que muestra la fuente
- **Ubicación exacta:** catálogo, `gluteo-pierna-cruzada-suelo`, ilustración; evidencia, apartado 214, «Ilustración de HealthMove».
- **Evidencia:** «**Ilustración de HealthMove:** sentado en el suelo, una pierna estirada; el cruce y el abrazo apenas se distinguen.» «**Dibujo (D, n.º 4):** sentado en el suelo, una pierna estirada, la otra cruzada por encima con la rodilla alta; **un brazo abraza la rodilla** y la lleva hacia el pecho; la otra mano, junto al cuerpo.»
- **Explicación:** R7.6 pide comparar la ilustración de HealthMove con la fuente y registrar la discrepancia si introduce un movimiento, una postura o un apoyo distintos. Aquí no introduce un movimiento distinto, pero omite dos rasgos que la fuente muestra con claridad (el cruce y el abrazo) y que son parte del ejercicio. R7.7 dice que, mientras haya una discrepancia de ilustración que induzca a interpretar el ejercicio de otra forma, esa ilustración no se da por válida y el ejercicio no se propone para aprobación documental. La duda es si una omisión (no una introducción) cuenta como discrepancia a efectos de R7.7.
- **Consecuencia potencial:** el usuario puede interpretar el ejercicio como un estiramiento con la pierna estirada, sin el cruce ni el abrazo, que es otro movimiento.
- **Nivel de certeza:** media.
- **Recomendación:** tratar la omisión como discrepancia de R7.6 y revisar la ilustración para que muestre el cruce y el abrazo; mientras no se corrija, no proponer el ejercicio para aprobación documental (R7.7). Si el desarrollador considera que la omisión no induce a interpretar el ejercicio de otra forma, dejarlo documentado y seguir.
- **Prueba o evidencia que permitiría confirmarlo:** la ilustración renderizada de HealthMove y el dibujo de la fuente, comparados; o una decisión del desarrollador sobre si la omisión cuenta como discrepancia.
- **¿Requiere decisión humana?:** sí. Decidir si la omisión cuenta como discrepancia de R7.7 y, si cuenta, corregir la ilustración antes de proponer el ejercicio.

### DS-466 · La nota `[conservadora]` de `ambos_brazos` en `gluteo-pierna-cruzada-suelo` ya no se sostiene con el dibujo de la fuente
- **Ubicación exacta:** catálogo, `gluteo-pierna-cruzada-suelo`, `notas_etiquetado`; evidencia, apartado 214.
- **Evidencia:** nota actual: «[conservadora] ambos_brazos: no consta si los brazos solo reposan (Q1). Se cerraría con: la fuente o su imagen.» Evidencia: «**Dibujo (D, n.º 4):** … **un brazo abraza la rodilla** y la lleva hacia el pecho; la otra mano, junto al cuerpo.»
- **Explicación:** la nota dice que no consta si los brazos solo reposan y que se cerraría con la fuente o su imagen. La imagen de la fuente muestra un brazo abrazando la rodilla y la otra mano junto al cuerpo: el brazo que abraza no reposa, interviene en el estiramiento. La nota conservadora ya no describe el fundamento real; el `true` de `ambos_brazos` pasa a tener evidencia D (el brazo abraza la rodilla y la otra mano acompaña). No cambia el valor, pero la nota debe actualizarse para no atribuir a la fuente una duda que la imagen resuelve.
- **Consecuencia potencial:** la nota conservadora queda como un rastro inexacto en la trazabilidad; si en el futuro se revisa el ejercicio, la nota sugiere una duda que ya no existe.
- **Nivel de certeza:** alta (la imagen de la fuente está descrita con D en la evidencia).
- **Recomendación:** sustituir la nota conservadora por una nota informativa que cite el dibujo («el dibujo de la fuente muestra un brazo abrazando la rodilla y la otra mano junto al cuerpo»). No cambia el valor de `ambos_brazos`.
- **Prueba o evidencia que permitiría confirmarlo:** el dibujo de la fuente (ya descrito en la evidencia) y la comprobación de que la instrucción de HealthMove («Abraza la pierna doblada») coincide con él.
- **¿Requiere decisión humana?:** no para el valor; sí para aprobar el texto de la nota si se quiere dejar constancia en el catálogo.

---

## Limitaciones de la verificación

- No he abierto las fuentes originales: solo veo la evidencia de Claude y el catálogo. Las citas entre «» son de la evidencia; no puedo confirmar que la fuente diga exactamente eso.
- Las descripciones de imágenes son de Claude, con D/I/N. No he visto las imágenes de la BHF (vídeos, N) ni las de Cambridge (descargadas aparte y descritas por Claude).
- No he visto las ilustraciones de HealthMove renderizadas: la evidencia solo describe la de `gluteo-pierna-cruzada-suelo` y la de `mariposa-suelo`. Para los demás ejercicios no puedo confirmar R7.6/R7.7.
- No he podido comprobar en código el valor actual de `notas_etiquetado` ni de `adaptaciones` más allá de lo que trae el bloque `catalogo-lote25`; si el catálogo ha cambiado desde la extracción, los valores pueden no coincidir.
- No emito juicios clínicos. Las cuestiones de seguridad (por ejemplo, la idoneidad de un estiramiento tras una prótesis de cadera) quedan fuera de esta auditoría y requerirían revisión profesional.
- CN-5 sigue pendiente: el valor de `flexion_profunda_rodilla` en los ejercicios tumbados con las rodillas dobladas no se puede cerrar sin la decisión del desarrollador.
- La exclusión de «movilidad aislada de la muñeca» (DS-463) no la puedo resolver con los documentos entregados: la especificación no fija su alcance.

FIN DEL BORRADOR