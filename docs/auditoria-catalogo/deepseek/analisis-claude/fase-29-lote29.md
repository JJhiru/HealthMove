# Análisis de Claude · fase-29-lote29 (consulta C30)

- **Ejecución:** dos bloques (el primero, truncado y continuado), con «FIN DEL BORRADOR». Literalidad verificada.
- **Papel de DeepSeek:** borrador de la reauditoría de los 11 ejercicios de los lotes 1 a 5 en REQUIERE CORRECCIONES, a partir de `evidencia/lote-29.md` (P29).

## Verificación

- **Aciertos:**
  - comparó cada motivo antiguo con el catálogo actual: 245, 247 y 251 ya no tenían nada que corregir;
  - DS-493 a DS-498: la dosis de 246, `brazo_sobre_hombro` de 248, el paso de 249, la adaptación de 250, la instrucción de 252 y `peso_en_manos` de 253.
- **Errores o matices:**
  - DS-492 propone una nota conservadora para 243 cuando las fotos dan evidencia directa del `false`. Claude aplica el `false` (R2.2).
  - En 244, DeepSeek trata como evidencia el `ambos_brazos` de unas manos apoyadas en el propio cuerpo. Claude lo deja conservador (Q1 excluye el reposo).
  - En 252, DeepSeek marcó `flexion_amplia_cadera` como `false` con evidencia I (el validador lo rechaza por R2.2). Claude lo deja en `true` conservador.
- **Ilustraciones:** Claude corrigió las tres discrepancias conocidas de R7.7 y actualizó esa línea de `protocolo.md`, que el validador lee. No cambia ninguna regla.
