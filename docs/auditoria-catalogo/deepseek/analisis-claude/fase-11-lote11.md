# Análisis de Claude · fase-11-lote11 (consulta C12)

- **Ejecuciones:** `20261024T031637Z-fase-11-lote11` (bloque 1, truncado), `…-bloque2` y `…-bloque3` (truncados; se llegó al límite de 3 bloques). Literalidad verificada en los tres. Gasto: como mucho 0,075 USD.
- **Papel de DeepSeek en esta fase:** primer borrador de la auditoría del lote 11 a partir de la evidencia de Claude (`evidencia/lote-11.md`), por el reparto de P29.

## Calidad de la respuesta

- **Bloque 1:** borrador completo de los 9 ejercicios con el formato del protocolo, y DS-251 a DS-263. Útil.
- **DS-264 a DS-355 (bloques 2 y 3):** «confirmaciones» de valores que no cambian y, desde DS-327, repeticiones literales de hallazgos anteriores («reiteración de DS-…»). No aportan nada y no se usan. La respuesta no llegó a cerrarse: se cortó en el tercer bloque.
- **Medida para las siguientes fases:** como mucho 8 hallazgos, ninguna confirmación y una línea final de cierre.

## Verificación contra las fuentes

El detalle está en `lote-11.md`, «Revisión de DeepSeek». En resumen:

- **Errores de hecho de DeepSeek:**
  - cita inventada («sit up straight» en 73 y 74; la fuente dice «Sit tall»);
  - una frase de F2 atribuida a F5 (76).
- **Criterio incoherente:** en 70, las mismas manos en el borde cuentan como apoyo para `agarre` y como reposo para `ambos_brazos`.
- **Omisión:** no vio «Respira con calma», añadido por HealthMove en 77.
- **Aciertos que Claude no había visto:**
  - el formato no conservador de las notas de 70 y 78 (DS-251, DS-257);
  - la nota de 76, que ya no es conservadora (DS-256);
  - la ilustración de 72, que a 300 ppp sí inducía un apoyo (DS-254).
