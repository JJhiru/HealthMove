# Revisión documental asistida por IA (DeepSeek)

- **Qué es:** un segundo par de ojos, económico, para la auditoría documental.
- **Qué no es:** no sustituye a `scripts/auditoria.mjs` (comprobaciones deterministas) ni a la skill `auditar-catalogo-ejercicios`. No decide nada.
- **Reglas que no cambian:**
  - el modelo no aprueba ni rechaza ejercicios;
  - no cambia el catálogo, el protocolo ni el registro;
  - sus hallazgos los revisa una persona.

## Reparto de funciones

| Quién | Hace |
|---|---|
| DeepSeek | Contrasta un ejercicio (y, si se indica, su apartado de un informe) con el protocolo, la especificación §4 y las decisiones registradas. Devuelve hallazgos estructurados |
| Este script | Elige qué se envía, filtra secretos, controla el gasto, valida la respuesta, comprueba que cada cita existe y guarda el informe |
| Claude Code | Inspecciona el repositorio, implementa los cambios autorizados y ejecuta las pruebas |
| ChatGPT y el desarrollador | Arquitectura, prioridades y decisiones |

## Configuración

La clave se lee **solo** de la variable de entorno `DEEPSEEK_API_KEY`. No se lee ningún `.env` ni se guarda en el repositorio (`.env` ya está en `.gitignore`). Para cargarla en la terminal sin que quede en el historial:

```bash
read -rs DEEPSEEK_API_KEY && export DEEPSEEK_API_KEY   # pega la clave y pulsa Intro; no se muestra
# … ejecuciones …
unset DEEPSEEK_API_KEY
```

**Límites** (variables opcionales). Son controles de esta herramienta, **no** límites de facturación de DeepSeek, y la herramienta no conoce el saldo de la cuenta.

| Variable | Por omisión | Rango | Qué limita |
|---|---|---|---|
| `HM_IA_MODELO` | `deepseek-flash` | Modelos con tarifa en `scripts/ia/tarifas.mjs` | Modelo. Uno sin tarifa se rechaza, porque no se podría acotar el gasto |
| `HM_IA_PRESUPUESTO_USD` | 0,05 | 0,001 a 1 | Gasto máximo por ejecución (cota superior) |
| `HM_IA_MAX_SOLICITUDES` | 3 | 1 a 10 | Solicitudes por ejecución: una por ejercicio |
| `HM_IA_MAX_TOKENS_ENTRADA` | 30000 | 1000 a 200000 | Tokens de entrada estimados por solicitud |
| `HM_IA_MAX_TOKENS_SALIDA` | 4000 | 256 a 16000 | `max_tokens` de la respuesta |
| `HM_IA_TIMEOUT_MS` | 120000 | 5000 a 600000 | Espera máxima por solicitud |

**Fijos, sin configuración:**
- la URL (`https://api.deepseek.com/chat/completions`), para que la clave no pueda enviarse a otro servidor;
- el modo de razonamiento, desactivado: por omisión DeepSeek lo activa con hasta 64K tokens de salida;
- la salida en JSON;
- `temperature` 0;
- en `revisar-ejercicio`, sin reintentos ni rondas de seguimiento: una solicitud por ejercicio, y se detiene al primer error. `auditar-documentos` tiene sus propias reglas: ver «Auditoría documental por fases».

## Uso

```bash
# Simulación: no llama a la API ni necesita la clave. Muestra qué se enviaría, los tokens y el coste máximo.
node scripts/auditoria-ia.mjs revisar-ejercicio estiramiento-isquiotibiales-sentado --informe docs/auditoria-catalogo/lote-02.md

# Ejecución real: una solicitud por ejercicio (como mucho HM_IA_MAX_SOLICITUDES).
node scripts/auditoria-ia.mjs revisar-ejercicio estiramiento-isquiotibiales-sentado --informe docs/auditoria-catalogo/lote-02.md --ejecutar
```

- **Qué se envía, y nada más:**
  - los apartados 2, 3, 5, 6, 7, 8, 11 y 13 del protocolo;
  - la especificación §4;
  - las secciones de decisiones de `registro.md`;
  - el objeto JSON de **ese** ejercicio (no el catálogo);
  - opcionalmente, el apartado del ejercicio en el informe indicado.

  La simulación lista cada bloque con su tamaño.
- **Dónde se guarda:** cada informe va a `docs/auditoria-catalogo/ia/<fecha>-<id>.md`, sin sobrescribir ninguno anterior. Incluye:
  - un aviso de que es un análisis asistido por IA;
  - el modelo, el id de la respuesta, el uso y el coste;
  - la huella de cada bloque enviado;
  - **por separado**, lo comprobado por herramientas deterministas y las sugerencias del modelo.
- En `revisar-ejercicio`, **no se guardan** el prompt completo ni la respuesta en bruto: solo el resultado validado. En `auditar-documentos` se guardan **literalmente** (ver abajo).
- **Códigos de salida:** 0 si todo va bien; 1 si falla una revisión (error de la API, respuesta inválida o límite alcanzado); 2 si hay un error de uso o de configuración.

## Cómo leer un informe

- **«Cita verificada: sí»:** el script ha comprobado que el texto citado aparece literalmente, salvo los espacios, en el bloque que el modelo indica. No significa que el razonamiento del modelo sea correcto.
- **«Cita verificada: no»:** el modelo citó algo que no está en lo que se le envió. Ese hallazgo no es fiable.
- **Una respuesta que no cumple el esquema** (campos de más o de menos, valores fuera de lista, procedencias inventadas) **detiene la revisión**. Nunca se toma como «sin hallazgos» ni como una aprobación.
- **Siguiente paso:** revisar los hallazgos con la skill y el protocolo. Ningún cambio del catálogo se aplica sin un plan aprobado.

## Coste

**Tarifas de DeepSeek verificadas el 2026-10-18** en https://api-docs.deepseek.com/quick_start/pricing, en USD por millón de tokens, para `deepseek-flash`:

| Concepto | Hora punta | Horario valle |
|---|---|---|
| Entrada, acierto de caché | 0,006 | 0,003 |
| Entrada, sin caché | 0,30 | 0,15 |
| Salida | 1,20 | 0,60 |

- La herramienta calcula siempre con la tarifa punta: es la cota superior. No puede saber si la solicitud cae en horario valle, porque este excluye los festivos chinos.
- **Antes de enviar,** solo se conoce una cota: tokens de entrada estimados (0,5 por carácter, con margen sobre los 0,3 que indica DeepSeek) más el máximo de salida.
- **El coste real** sale del campo `usage` de la respuesta. Si una solicitud se envía y falla sin `usage`, se cuenta el máximo autorizado.
- **Medido en simulación** el 2026-10-18 para `estiramiento-isquiotibiales-sentado` con su informe: ≈20 400 tokens de entrada estimados y un coste máximo de **0,0109 USD**.
- El contexto normativo va siempre primero. Así DeepSeek puede reutilizar su caché entre solicitudes, con la entrada repetida unas 50 veces más barata; la caché no está garantizada.

## Seguridad y privacidad

- **Lo que sale del equipo** son textos del proyecto: el protocolo, la especificación, el registro, un ejercicio del catálogo y un informe. Van a DeepSeek, un proveedor externo, y no contienen datos personales. Las condiciones de uso y conservación de datos son las de DeepSeek.
- **Lo que no se envía nunca:**
  - `.env*`, `.git/`, `node_modules/` y claves (`*.pem`, `*.key`, `id_rsa`…);
  - cualquier texto con aspecto de secreto o que contenga la propia clave;
  - los informes se leen con la misma validación de rutas que `scripts/auditoria.mjs`.
- **La respuesta del modelo son datos:**
  - no se ejecuta;
  - no se usa para elegir archivos ni órdenes;
  - no provoca nuevas solicitudes;
  - el único archivo que escribe el código es el informe, en su carpeta.
- **La clave:**
  - solo va en la cabecera `Authorization`;
  - se elimina de los mensajes de error, aunque el servidor la repita;
  - no se escribe un informe que la contenga.

## Limitaciones

- **El modelo no consulta las fuentes originales** (PDF, páginas web): solo contrasta textos. La verificación de la fuente sigue siendo trabajo de la auditoría.
- **La comprobación de citas es literal:** no detecta una cita real usada fuera de contexto.
- **Las tarifas pueden cambiar.** Hay que revisar `scripts/ia/tarifas.mjs` antes de confiar en las estimaciones.
- **El modo JSON de DeepSeek puede devolver contenido vacío:** se trata como error y detiene la revisión.
- **Una sola tarea implementada,** la revisión documental de ejercicios. La función `revisar()` (`scripts/ia/revision.mjs`) es genérica para añadir otras (diffs, resultados), pero no se ha hecho.
- **No se ha hecho ninguna llamada real.** El comportamiento de la API real solo se ha contrastado con su documentación.

## Auditoría documental por fases (`auditar-documentos`)

Es el flujo del estado «Auditoría junto a DeepSeek». El procedimiento está en la skill `auditoria-junto-a-deepseek` y el estado, en `docs/auditoria-catalogo/deepseek/ESTADO.md`.

- **Qué se envía:** cada fase (`docs/auditoria-catalogo/deepseek/fases/<fase>.json`) indica qué archivos del repositorio, **completos**, recibe DeepSeek, además de unas instrucciones versionadas (`scripts/ia/instrucciones/auditoria-documental.md`) y una tarea. Del catálogo solo van subconjuntos derivados por el script, marcados como tales.
- **Formato:** la salida es texto (Markdown) y **se conserva literalmente**, aunque llegue truncada o vacía. Cada ejecución crea `docs/auditoria-catalogo/deepseek/ejecuciones/<id>/` con `respuesta.md`, `respuesta-api.json`, `solicitud.json` y `metadatos.json` (hashes, `literalVerificado`, uso, coste, versiones).
- **Errores:** como mucho 2 intentos, solo ante errores transitorios o respuestas vacías. Los errores 400, 401, 402 y 422 detienen la fase.
- **Respuestas truncadas:** se continúan con `--continuar <id>`, que reenvía la conversación exacta y crea un bloque nuevo (como mucho 3).
- **Análisis:** lo escribe Claude aparte, en `docs/auditoria-catalogo/deepseek/analisis-claude/`.

## Archivos

- `scripts/auditoria-ia.mjs`: la CLI.
- `scripts/ia/configuracion.mjs`, `tarifas.mjs`, `presupuesto.mjs`, `deepseek.mjs`, `revision.mjs` y `revision-ejercicio.mjs`.
- `scripts/ia/instrucciones/revision-documental.md`: instrucciones versionadas para el modelo.
- `tests/auditoria-ia.test.mjs`: pruebas sin red, con transporte simulado y `fetch` bloqueado en la CLI.
- `scripts/ia/auditoria-documental.mjs`, `scripts/ia/instrucciones/auditoria-documental.md` y `tests/auditoria-ia-documental.test.mjs`: auditoría documental por fases.
