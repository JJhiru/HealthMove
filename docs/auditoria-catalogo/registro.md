# Registro de la auditoría del catálogo

Este registro lleva la cuenta de la auditoría documental hecha con la skill `auditar-catalogo-ejercicios`.

- No es una validación clínica.
- Ningún estado del catálogo cambia sin una decisión explícita del desarrollador.

## Decisiones del desarrollador

Todavía no hay ninguna. Las preguntas abiertas son:

1. Criterio para `ambos_brazos` (ver el resumen del lote 1):
   - **Literal:** si la instrucción pide los dos brazos, se marca.
   - **Funcional:** solo se marca si con un brazo el ejercicio no se puede hacer, y entonces se añade una adaptación documentada.
2. Frase de referencia del umbral de 90° para `flexion_profunda_rodilla`. La pide el §4 de la especificación y no está escrita (ver el lote 2).
3. Añadir `fuente.especifica_de` a todos los ejercicios del folleto de Leicester, pensado para quien usa silla de ruedas y en parte para personas con amputación (ver el lote 2).

## Ejercicios auditados

| Lote | ID | Resultado de la auditoría | Decisión del desarrollador |
|---|---|---|---|
| 1 | estiramiento-pecho-sentado | REQUIERE CORRECCIONES | pendiente |
| 1 | giro-tronco-sentado | REQUIERE CORRECCIONES | pendiente |
| 1 | marcha-sentado-sujetandose | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 1 | marcha-sentado-manos-cadera | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 1 | estiramiento-tobillo-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 2 | tobillos-punta-talon-sentado | REQUIERE CORRECCIONES | pendiente |
| 2 | inclinacion-lateral-brazo-arriba | REQUIERE CORRECCIONES | pendiente |
| 2 | inclinacion-lateral-sentado | REQUIERE CORRECCIONES | pendiente |
| 2 | estiramiento-isquiotibiales-sentado | REQUIERE CORRECCIONES | pendiente |
| 2 | circulos-hombros-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 3 | elevar-rodar-hombros-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 3 | curl-biceps-sentado | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |
| 3 | toalla-separar-sentado | REQUIERE CORRECCIONES | pendiente |
| 3 | boxeo-sentado | Depende del criterio de `ambos_brazos` | pendiente |
| 3 | boxeo-circulos-alto | LISTO PARA APROBACIÓN DOCUMENTAL | pendiente |

## Pendientes

- Auditados: 15 de 220. Siguiente: ejercicio 16 del catálogo (`boxeo-circulos-pecho`).
