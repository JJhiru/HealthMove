# Análisis de Claude · fase-15-lote15 (consulta C16)

- **Ejecución:** completa en un bloque, con «FIN DEL BORRADOR». Literalidad verificada. Gasto: como mucho 0,034 USD.
- **Papel de DeepSeek:** borrador de los 8 ejercicios a partir de `evidencia/lote-15.md` (P29).

## Verificación

El detalle está en `lote-15.md`, «Revisión de DeepSeek».

- **Aciertos:**
  - el `agarre` conservador de los apoyos en pared;
  - el `ambos_brazos` del psoas (D por la foto);
  - la dosis de 112.
- **Errores:**
  - DS-386 se apoya en un hecho falso (la instrucción sí menciona la toalla);
  - en 117 pone `true` como «etiqueta actual» de `mano_detras`, que era `false`.
- **Clase nueva:** la mano que va hacia atrás hasta el pie. DeepSeek la trató como D de `mano_detras`. Claude la registra como CN-4, con `true` conservador provisional, porque §4 no decide si la mano por debajo de la cintura está «detrás de la espalda».
