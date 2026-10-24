los dos brazos a la vez. HealthMove usa un brazo cada vez. Es una diferencia de ejecución (C3) que no consta en `adaptaciones`. Aplicando R3.1/Q5, la ejecución de HealthMove debe ser una de las que permite la fuente; si las fotos fijan el rango (los dos brazos), la ejecución con un brazo no sería una de las que permite la fuente y sería una modificación (DG-5).
- **Consecuencia potencial:** si no se resuelve, el ejercicio no cumple R3.1 y no debería presentarse como fiel a la fuente; además, `ambos_brazos: false` podría no reflejar la ejecución de la fuente.
- **Nivel de certeza:** media (depende de si las fotos fijan el rango o son solo un ejemplo; la evidencia no lo aclara).
- **Recomendación:** presentar la diferencia como aclaración hacia la fuente o como adaptación con su justificación; si no pasa R3.1, tratarla como modificación (DG-5) y no incorporarla con la evidencia actual.
- **Prueba o evidencia que permitiría confirmarlo:** el texto completo de la fuente y si permite explícitamente hacerlo con un brazo; la revisión de Q5 por el desarrollador.
- **¿Requiere decisión humana?:** sí (si la ejecución con un brazo es una de las que permite la fuente, R3.1/Q5).

### DS-470 · `inclinacion_tronco` en `arrancar-cortacesped-sentado`
- **Ubicación exacta:** `arrancar-cortacesped-sentado`, `exigencias.inclinacion_tronco` y `notas_etiquetado`; evidencia 222.
- **Evidencia:** «la mano baja hacia el pie contrario con el tronco inclinado y girado».
- **Explicación:** la etiqueta actual es `false`, pero las fotos muestran el tronco inclinado al bajar la mano. La evidencia no dice si la inclinación pasa de leve (Q3). R2.2 exige D para un `false`; aquí no consta que la inclinación sea leve, así que procede `true` conservador con nota.
- **Consecuencia potencial:** un `false` sin D de que la inclinación no aparece; el perfil «Me cuesta inclinar o arquear la espalda» recibiría un ejercicio que inclina el tronco.
- **Nivel de certeza:** media (la evidencia no da el ángulo; la foto muestra inclinación).
- **Recomendación:** `true` conservador con nota `[conservadora]` en la forma de R2.4.
- **Prueba o evidencia que permitiría confirmarlo:** el ángulo de inclinación en la fuente o una frase que lo fije (Q3).
- **¿Requiere decisión humana?:** no (es un `true` conservador, R2.1).

### DS-471 · `estiramiento-isquios-pie`: la instrucción invierte qué rodilla se dobla
- **Ubicación exacta:** `estiramiento-isquios-pie`, `instrucciones` (paso 2); evidencia 223.
- **Evidencia:** la fuente dice «Bend your front leg and keep your back leg straight»; HealthMove dice «Dobla la rodilla de la pierna de atrás y deja recta la de delante».
- **Explicación:** la instrucción de HealthMove invierte la fuente. Es un C3 que se resuelve corrigiendo hacia la fuente (aclaración, porque la fuente lo dice con D). La ilustración ya se corrigió según la evidencia.
- **Consecuencia potencial:** el usuario ejecuta un estiramiento distinto del que describe la fuente; el ejercicio no es fiel a su fuente.
- **Nivel de certeza:** alta.
- **Recomendación:** corregir la instrucción hacia la fuente («Dobla la rodilla de delante y deja recta la de atrás»).
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente (ya en la evidencia) y la instrucción corregida en el catálogo.
- **¿Requiere decisión humana?:** no (es una aclaración hacia la fuente con D).

### DS-472 · `especifica_de` vacío en tres ejercicios con población declarada
- **Ubicación exacta:** `limpiaparabrisas-pie-sentado`, `deslizar-toalla-pared` y `estiramiento-pecho-pared`, `fuente.especifica_de`; evidencia 224, 225 y 226.
- **Evidencia:** «F3 y F4, rigidez de tobillo y de hombro en rehabilitación, con instrucción previa del fisioterapeuta».
- **Explicación:** las fuentes declaran población (D) y el campo está vacío. R8.1 permite rellenarlo solo con la población que la fuente declara, con un nombre breve como los existentes.
- **Consecuencia potencial:** la ficha no muestra la procedencia («Material pensado para: …») aunque la fuente la declare.
- **Nivel de certeza:** alta.
- **Recomendación:** rellenar `especifica_de` con un nombre breve («rigidez de tobillo» en 224; «rigidez de hombro» en 225 y 226), pendiente de la aprobación de nombres nuevos (P29).
- **Prueba o evidencia que permitiría confirmarlo:** el texto de la fuente (ya en la evidencia) y el campo rellenado.
- **¿Requiere decisión humana?:** sí (los nombres nuevos de `especifica_de` se aprueban al final, P29).

### DS-473 · `deslizar-toalla-pared`: la nota de `agarre` remite a una imagen que la evidencia ya recoge
- **Ubicación exacta:** `deslizar-toalla-pared`, `notas_etiquetado`; evidencia 225.
- **Evidencia:** la nota dice «Se cerraría con: la imagen de la fuente»; la evidencia recoge la foto: «la palma abierta, apoyada sobre la toalla contra la pared… no se ve que los dedos la agarren».
- **Explicación:** la imagen ya está disponible y muestra la palma abierta sin prensión visible. Según Q2 (P10), el contacto sin prensión se marca `agarre: true` conservador, con su nota, y no se presenta como un agarre observado. La nota puede actualizarse para reflejar que la imagen ya se ha consultado y que el `true` sigue siendo conservador.
- **Consecuencia potencial:** la nota sugiere una incertidumbre que la evidencia ya resuelve parcialmente; el motivo del `true` conservador no queda actualizado.
- **Nivel de certeza:** media (la imagen muestra la palma abierta, pero no prueba que la instrucción no pida cerrar la mano; «held» es ambiguo).
- **Recomendación:** actualizar la nota para indicar que la imagen muestra la palma abierta y que el `true` se mantiene por Q2, con lo que faltaría para cerrarlo (una revisión profesional que confirme que basta apoyar la palma abierta).
- **Prueba o evidencia que permitiría confirmarlo:** la nota actualizada y, si se quiere cerrar, la revisión profesional de Q2.
- **¿Requiere decisión humana?:** no (es una nota; el valor no cambia).

---

## Resumen del lote

- **11 ejercicios auditados por primera vez con el protocolo 1.0.**
- **Cambios de etiquetas propuestos:** `arrancar-cortacesped-sentado`, `inclinacion_tronco` → `true` conservador (DS-470). Ningún otro cambio de valor.
- **Notas `[conservadora]` que faltan:** `press-pecho-botella-tumbado` (`ambos_brazos`, DS-468); `arrancar-cortacesped-sentado` (`inclinacion_tronco`, DS-470); actualización de `deslizar-toalla-pared` (`agarre`, DS-473).
- **Correcciones hacia la fuente:** `estiramiento-isquios-pie`, instrucción invertida (DS-471).
- **Adaptaciones o aclaraciones pendientes:** `hombros-abajo-tumbado`, dosis con el tiempo en blanco (DS-467); `elevacion-lateral-botella-tumbado`, un brazo frente a los dos de la fuente (DS-469).
- **`especifica_de` nuevo (pendiente de aprobación):** «rigidez de tobillo» (224), «rigidez de hombro» (225 y 226) (DS-472).
- **Resultados:** 9 LISTO PARA APROBACIÓN DOCUMENTAL una vez aplicados los cambios propuestos (216, 217, 219, 220, 221, 222, 224, 225, 226); 1 PENDIENTE DE DECISIÓN (218, DS-469); 1 REQUIERE CORRECCIONES (223, DS-471).
- **Ilustraciones:** la evidencia dice que Claude corrigió las de `estiramiento-isquios-pie` y `estiramiento-pecho-pared`; no puedo confirmarlo (R7.6/R7.7). En los demás, la evidencia no describe la ilustración de HealthMove; no puedo confirmar que no haya discrepancia.
- **Disponibilidad (R9.1):** no medida; no tengo la herramienta ni el catálogo completo. El único cambio de valor (`inclinacion_tronco` en 222) afectaría al perfil «Me cuesta inclinar o arquear la espalda» (`inclinar`), que dejaría de recibir ese ejercicio.

FIN DEL BORRADOR