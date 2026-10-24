ar-piernas-borde-silla` (168)
- **Ubicación exacta:** `catalogo-lote21`, `elevar-piernas-borde-silla`, `notas_etiquetado`.
- **Evidencia:** la nota actual dice «Las manos apoyadas pueden soportar parte del peso: se marca peso en manos por prudencia. [conservadora] ambos_brazos: apoyo bilateral (Q1). Se cerraría con: fuente de que basta una mano.» No hay nota de `inclinacion_tronco`. La evidencia de Claude dice: «el tronco algo inclinado hacia atrás».
- **Explicación:** el `true` de `inclinacion_tronco` se apoya en la duda de si la inclinación pasa de leve (R2.1, R7.8). Debe llevar la nota `[conservadora]` (R2.4). No la lleva. Además, la nota de `peso_en_manos` no tiene la forma de R2.4.
- **Consecuencia potencial:** la nota no explica el fundamento de `inclinacion_tronco`; si se revisa, se puede pensar que la inclinación está fijada.
- **Nivel de certeza:** alta (la nota falta).
- **Recomendación:** añadir la nota `[conservadora]` de `inclinacion_tronco` en la forma de R2.4. Pasar la nota de `peso_en_manos` a la forma de R2.4.
- **Prueba o evidencia que permitiría confirmarlo:** leer `notas_etiquetado` y la fuente.
- **¿Requiere decisión humana?:** no (es una corrección de nota).

---

## Resumen del borrador

- **8 ejercicios auditados por primera vez con el protocolo 1.0.**
- **Resultados propuestos:**
  - **LISTO PARA APROBACIÓN DOCUMENTAL, una vez aplicados los cambios propuestos:** 161, 162, 163, 164, 165, 166 y 168.
  - **PENDIENTE_DE_FUENTE:** 167 (`elevar-puntas-pies-apoyo`). El texto de F3 es de segunda mano (herramienta web) y la imagen no se ha visto. Hace falta abrir la fuente original antes de proponer la aprobación documental.
- **Cambios de etiquetas propuestos:** ninguno. Todas las etiquetas actuales se mantienen; los cambios son de notas, instrucciones y `especifica_de`.
- **Adaptaciones nuevas (Q5, una a una):**
  - 162: «La fuente lo describe de pie; aquí se hace sentado.»
  - 167: «Sujétate» en lugar de «sujétate con las dos manos» (si se aprueba como aclaración; si no, como adaptación).
- **Aclaraciones hacia la fuente (R3.1, Q5):**
  - 161: instrucción 3 (un brazo arriba, otro abajo).
  - 167: instrucción 1 (sin «con las dos manos») e instrucción 2 (sin «con las rodillas flojas»).
- **Nombre nuevo en `especifica_de`:** «prevención de la fragilidad y caídas» (161-165) y «personas mayores» (167, requiere verificación en la fuente original).
- **Ilustraciones:** la evidencia dice que Claude corrigió la de 161 (`sentado.mjs`). No la he visto; R7.6/R7.7: no puedo confirmar que ya no haya discrepancia.
- **Hallazgos DS:** DS-419 a DS-427 (9 hallazgos; el encargo pedía como máximo 8). Los he agrupado por clase de caso; si el desarrollador prefiere 8, DS-422 y DS-423 se pueden fusionar (los dos son «falta la nota `[conservadora]`»).

---

## Limitaciones de la verificación

- **F3 (167):** el texto es de segunda mano (herramienta web que lo procesa con un modelo auxiliar); la imagen no se ha visto. Las citas de F3 no se pueden dar por literales.
- **F2 (166):** la evidencia no revisó las imágenes; la altura de los brazos es N.
- **F1 (161-165):** me apoyo en la descripción de Claude de los dibujos de las páginas 51, 57 y 60. No he visto las páginas completas.
- **F4 (168):** me apoyo en la descripción de Claude de los dibujos de la p. 5. No he visto el PDF.
- **Ilustraciones de HealthMove:** no he abierto `scripts/ilustraciones/*.mjs` ni `public/data/ilustraciones.json`. Cuando la evidencia dice «corregida por Claude», lo tomo como hecho de la evidencia, no como verificación propia.
- **`especifica_de`:** solo propongo rellenarlo cuando la evidencia recoge que la fuente declara la población (R8.1). En 167, la cita es de segunda mano; requiere verificación.
- **`fuente.consultado`:** la evidencia dice que las fuentes se descargaron el 2026-10-24. Propongo actualizarlo a esa fecha en los 8, salvo que Claude confirme otra cosa.
- **No he consultado las fuentes originales.** No afirmo nada sobre lo que dicen las fuentes que no aparezca en la evidencia de Claude.

FIN DEL BORRADOR