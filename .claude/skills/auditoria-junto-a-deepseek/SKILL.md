---
name: auditoria-junto-a-deepseek
description: Estado de trabajo «Auditoría junto a DeepSeek» de HealthMove. DeepSeek es el auditor principal de la documentación (protocolo, especificación, esquema, código y catálogo); Claude coordina, envía con la integración real (scripts/auditoria-ia.mjs auditar-documentos), conserva literalmente sus respuestas y verifica en el código. Usar cuando se pida continuar, preparar o ejecutar una fase de auditoría con DeepSeek, o revisar sus resultados.
---

# Auditoría junto a DeepSeek

## 0. Al empezar

1. Lee `docs/auditoria-catalogo/deepseek/ESTADO.md`. Es la fuente de continuidad: ejecuciones, hallazgos, fases y siguiente llamada. **No dependas de conversaciones anteriores.**
2. Comprueba que las fuentes no han cambiado desde la última fase:
   - `node scripts/auditoria.mjs estado` (catálogo y protocolo);
   - los hashes de los bloques en el `metadatos.json` de la última ejecución, frente a los de una simulación nueva.
3. Si `ESTADO.md` indica una siguiente tarea dentro de esta autonomía (sección 4), hazla. Si no hay ninguna preparada, prepara la siguiente fase y detente antes de gastar si su coste máximo supera el presupuesto habitual (sección 3).

## 1. Roles

- **DeepSeek, auditor principal:** revisa lo que se le envía y propone hallazgos `DS-n`. No decide.
- **Claude, coordinador técnico:**
  - prepara las fases y las envía con la integración real;
  - conserva las respuestas;
  - verifica en el código y en el catálogo lo que DeepSeek no puede comprobar;
  - registra el estado.

  **No sustituye la revisión de DeepSeek por la suya ni presenta sus conclusiones como si fueran de DeepSeek.**
- **El desarrollador** decide: aprobaciones, catálogo, protocolo y cambios funcionales.

## 2. Procedimiento de una fase

1. **Definir la fase.**
   - `docs/auditoria-catalogo/deepseek/fases/<fase>.json` dice qué se envía, con rutas reales del repositorio.
   - `fases/<fase>.md` contiene la tarea.
   - Envía **los documentos completos**, no resúmenes de Claude.
   - Las decisiones del usuario se copian literalmente y se marcan como tales.
   - Las hipótesis de Claude se presentan como hipótesis.
   - Si el contexto no cabe, divide en fases documentadas: nunca se omiten secciones en silencio.
2. **Simular** (sin red ni clave): `node scripts/auditoria-ia.mjs auditar-documentos <fase>` con los límites `HM_IA_*` de `ESTADO.md` §2. Comprueba la lista de bloques, los tokens y el coste máximo.
3. **Ejecutar:** el mismo comando con `node --env-file=.env … --ejecutar`, desde la raíz del worktree. **Nunca muestres la clave.**
4. **Si la respuesta llega truncada** (`finish_reason` «length»): `auditar-documentos --continuar <id-ejecución> --ejecutar`. Reenvía la conversación exacta y guarda la continuación como un bloque nuevo, como mucho 3. No se completa ni se resume nada a mano.
5. **Comprobar:**
   - `metadatos.json`: `estado`, `literalVerificado: true` y que el SHA-256 de `respuesta.md` coincide con `hashes.respuesta`;
   - una respuesta vacía, truncada o con error se registra como tal.
6. **Analizar aparte:** `docs/auditoria-catalogo/deepseek/analisis-claude/<fase>.md`, con la marca «Análisis de Claude». Recoge lo verificado en el código, los errores de hecho de DeepSeek, los matices y lo que no se ha podido verificar.
7. **Actualizar `ESTADO.md`:** la ejecución con su coste, el estado de cada hallazgo (verificado, pendiente de decisión o sin acción), las decisiones humanas pendientes y la siguiente fase.

## 3. Regla de literalidad (obligatoria)

- `respuesta.md` es el contenido exacto del mensaje de DeepSeek y `respuesta-api.json`, el cuerpo HTTP exacto.
- **No se editan, resumen, traducen, reordenan ni corrigen nunca**, ni siquiera para unir bloques.
- Los comentarios de Claude van solo en `analisis-claude/` y en `ESTADO.md`.
- Al mostrar una respuesta al usuario, se copia literalmente del archivo, en el orden de sus bloques. Si es demasiado larga, se da la ruta, el hash y la limitación de visualización. No digas que una copia es literal si no puedes comprobarlo.

## 4. Autonomía

**Se puede, sin preguntar:**
- leer documentación y código;
- preparar paquetes de contexto;
- simular y hacer las llamadas de una fase prevista en `ESTADO.md`, dentro de los límites;
- continuar una respuesta truncada;
- ejecutar pruebas no destructivas;
- crear informes, análisis y registros nuevos;
- mantener la lista de hallazgos.

**No se puede sin una autorización concreta:**
- aprobar ejercicios;
- modificar etiquetas o datos del catálogo;
- cambiar reglas del protocolo;
- convertir propuestas `DS-n` en decisiones;
- alterar instrucciones o inventar variantes;
- hacer cambios funcionales en el motor o el validador;
- `git add`, commits u operaciones destructivas;
- ampliar el alcance a otras tareas.

Se pueden **preparar** propuestas y pruebas, pero su implementación queda pendiente.

## 5. Gasto y errores

- **Por ejecución:** presupuesto local con `HM_IA_PRESUPUESTO_USD` (por omisión 0,05; para una fase, 0,10–0,12), como mucho **2 intentos**, una sola continuación por bloque y **3 bloques** por fase.
- **Antes de enviar** se autoriza la cota superior (tarifa punta, `scripts/ia/tarifas.mjs`). El coste exacto sale del `usage`; DeepSeek no devuelve el importe cobrado.
- **Detenerse sin reintentar** ante 400, 401, 402 o 422, dos respuestas vacías seguidas o un coste no previsto. Informar.
- **Reintentar** solo ante un tiempo agotado, un fallo de red, 429, 500 o 503, o una respuesta vacía, una vez.
- **No repetir** una fase revisada salvo que cambien sus fuentes, se pida una segunda opinión o haya otro motivo documentado.

## 6. Una fase está revisada cuando

1. Hay una respuesta completa (`stop`), en uno o más bloques encadenados, con la literalidad verificada.
2. Existe su análisis de Claude.
3. Sus hallazgos están en `ESTADO.md`, cada uno con su estado.

## 7. Límites

- Una auditoría documental **no es una validación clínica**.
- Lo que requiera juicio clínico se señala con el profesional o la evidencia necesarios (fisioterapia, rehabilitación, la fuente original).
- Las reglas vigentes las fijan `docs/auditoria-catalogo/protocolo.md` y `registro.md`. Esta skill no las cambia.
