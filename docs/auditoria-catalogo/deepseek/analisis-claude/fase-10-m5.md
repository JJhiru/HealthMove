# Análisis de Claude · fase-10-m5 (consulta C11)

- **Ejecución:** `20261024T024933Z-fase-10-m5` (completa, `stop`, literal verificado; SHA-256 de `respuesta.md` `8a49c243…`). DS-241 a DS-250. Uso: 640 en caché, 38 901 sin caché, 8 375 de salida. Gasto: como mucho 0,0217 USD.
- **Encargo:** P28, «M5: consulta a Deepseek alguna solución». Nada de lo que sigue está decidido.

## Lo que propone DeepSeek

Siete opciones (O1 a O7), de no hacer nada a un campo nuevo en el esquema. **Recomienda O4 para la v1:** un aviso genérico, redactado para la persona, en la ficha y en el resumen de exclusiones, derivado de las marcas `[conservadora]` sin mostrarlas literalmente. La condiciona a:

1. que el validador compruebe antes el formato `[conservadora]` (m3, DS-30);
2. que el texto pase por `healthmove-safety-reviewer`;
3. que se decida si R2.4 («la interfaz no muestra `notas_etiquetado`») se actualiza o se crea un campo nuevo (O6).

Riesgos que señala (§2): falsa tranquilidad, invitación a saltarse el filtro, afirmación clínica implícita, ansiedad y legibilidad. Su criterio: el texto debe decir «no lo sabemos con seguridad», nunca «probablemente puedas», y no ofrecer «probar de todas formas».

## Verificado en el código (2026-10-23)

- **DS-243 y DS-249, confirmados:** ningún archivo de `public/js/` ni `scripts/validar-catalogo.mjs` lee `notas_etiquetado` ni comprueba `[conservadora]`. Hoy, la derivación funciona con las 66 marcas, también con las que nombran dos exigencias (`flexion_profunda_rodilla y flexion_amplia_cadera`), pero nada lo garantiza para notas futuras.
- **DS-245, confirmado:** `explicar` (`motor.js:256`) agrega por exigencia (`tipo:codigo` → número de ejercicios) y no conserva qué ejercicio cae por qué. `motivosIncompatibilidad` sí da los motivos de cada ejercicio, y `app.js` ya la importa.
- **DS-246, confirmado:** `vistaEjercicio` muestra «Exige: …» sin distinguir.
- **DS-242:** R2.4 dice, en efecto, «que la interfaz no muestra». La propuesta de campo estructurado está en el protocolo §14 con el motivo que cita DeepSeek.

## Matices de Claude

- **Falta una regla para O3 y O4 (no la señala DeepSeek).** Un ejercicio solo queda fuera «por precaución» si **todas** las exigencias por las que el perfil lo excluye son conservadoras. Basta una con evidencia para que la exclusión sea firme. Y si lo excluye además una posición o un recurso, la precaución no es el motivo. Cualquier implementación tiene que calcularlo por ejercicio, con `motivosIncompatibilidad`, no con los totales de `explicar`.
- **DS-250 / O6 sobrestima el coste:** no hay que rellenar el campo en los 225 ejercicios, sino en los 53 con alguna marca (66 marcas). Los demás quedarían vacíos.
- **La «aclaración previa» de la respuesta** (que no ve «ninguna respuesta de DeepSeek») viene de que el encargo literal nombra a DeepSeek y la respuesta no se reconoce en él. No afecta al contenido.
- **Alcance real hoy:** 10 ejercicios publicados tienen marcas. Es lo único que la persona puede ver ahora.

## Decisiones que quedan para el desarrollador

1. Qué opción (DeepSeek recomienda O4) y en qué vistas: ficha, resumen o ambas.
2. Si se implementa antes m3 (comprobación del formato en el validador), como pide DeepSeek.
3. Si R2.4 se actualiza (la interfaz lee la marca sin mostrarla literal) o se crea un campo nuevo (O6).
4. El texto final, que pasa por `healthmove-safety-reviewer`.
