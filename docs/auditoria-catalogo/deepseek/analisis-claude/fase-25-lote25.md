# Análisis de Claude · fase-25-lote25 (consulta C26)

- **Ejecución:** dos bloques, con «FIN DEL BORRADOR». Literalidad verificada.
- **Papel de DeepSeek:** borrador de los 11 ejercicios a partir de `evidencia/lote-25.md` (P29).

## Verificación

- **Aciertos:**
  - población «personas mayores» de la BHF en 205 y 206 (DS-459);
  - `ambos_brazos` conservador en 205 (DS-460);
  - la posición «sentado o de pie» de F2, documentada como adaptación (DS-461);
  - `flexion_profunda_rodilla` de 211, de la clase de CN-5 (DS-464);
  - la ilustración de 214 (DS-465), que Claude corrigió en `tumbado.mjs`.
- **Errores de hecho:**
  - DS-463 trata los círculos de tobillo como excluidos del catálogo v1; la exclusión es solo de la muñeca. Rechazado.
  - DS-466 afirma que «la otra mano acompaña» en el dibujo de 214; en la evidencia, la otra mano queda junto al cuerpo. Se mantiene el `true` conservador de `ambos_brazos` con ese motivo (Q1).
- **Sin verificar:** la BHF solo tiene vídeos; lo que no dice el texto queda conservador.
