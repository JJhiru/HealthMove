# HealthMove — Especificación funcional v1

> Documento de decisiones. **No** es diseño de base de datos ni código.
> Origen: maqueta MV10 (`~/proyectos/MV10`), renombrada a **HealthMove**.
> Estado: decisiones aceptadas por el autor (2026-10-14), salvo las marcadas como **pendiente**.

## 1. Propósito y límites

HealthMove es una PWA que ofrece rutinas breves (10, 15 o 20 min) de movimiento a personas con
restricciones o dificultades de movilidad **ya identificadas**, usando un catálogo previamente
definido y reglas explícitas.

HealthMove **no**: diagnostica, decide tratamientos, sustituye a profesionales, presenta una rutina
como "segura" o "recomendada para tu condición", inventa ejercicios o variantes, ni relaja filtros
para conseguir generar una rutina. En v1 no se piden condiciones médicas, solo descripciones
funcionales e indicaciones profesionales.

## 2. Tipos de información (no son equivalentes)

| Tipo | Ejemplo | Uso |
|---|---|---|
| Indicación de un profesional | "evitar impactos" | filtro duro |
| Dificultad funcional declarada | "me cuesta cerrar la mano" | filtro duro |
| Capacidad (preguntada explícitamente) | "puedo estar de pie si me sujeto" | filtro duro |
| Recursos | silla estable, pared, banda | filtro duro |
| Preferencias | duración | solo ordena o compone, nunca filtra |
| Desconocido | sección sin responder | **nunca** cuenta como compatibilidad (ver §6) |

Las capacidades no se deducen de la ausencia de dificultades: la posición y el suelo se preguntan
siempre.

## 3. Posición (atributo del ejercicio, no exigencia)

Valores: `sentado`, `de_pie`, `tumbado` (boca arriba en una cama, sin bajar al suelo) y `suelo`
(exige bajar al suelo y levantarse). Un ejercicio anota **todas** las posiciones que usa y solo es
compatible si todas están permitidas. Si un ejercicio puede hacerse en la cama o en el suelo, se
registran como dos entradas enlazadas por `variante_de`, y el motor no incluye las dos en la misma
rutina.

## 4. Exigencias de movimiento (16)

Una exigencia se marca si aparece en **cualquier momento** del ejercicio (posición inicial,
movimiento o vuelta).

| # | Código | Se marca si… |
|---|---|---|
| 1 | `equilibrio_sin_apoyo` | de pie, exige no sujetarse a nada |
| 2 | `una_pierna` | en algún momento el peso cae sobre un solo pie (incluye marchar de pie) |
| 3 | `sentarse_levantarse` | pide pasar de sentado a de pie o viceversa |
| 4 | `impacto` | fase en el aire o golpe al apoyar |
| 5 | `carga_externa` | se sostiene peso o resistencia añadida (incluye banda) |
| 6 | `esfuerzo_cardio` | pensado para subir claramente pulso o respiración |
| 7 | `brazo_sobre_hombro` | codo o mano por encima de la altura del hombro |
| 8 | `mano_detras` | mano detrás de la espalda o de la cabeza |
| 9 | `ambos_brazos` | no puede hacerse con un solo brazo |
| 10 | `agarre` | cerrar la mano, con o sin objeto, aunque sea en parte (**incluye sujetarse a una silla** y cerrar el puño) |
| 11 | `peso_en_manos` | manos o muñecas soportan parte del peso corporal |
| 12 | `flexion_profunda_rodilla` | rodilla más de 90°, agacharse o ponerse en cuclillas |
| 13 | `flexion_amplia_cadera` | muslo más cerca del tronco que al estar sentado |
| 14 | `puntillas_talones` | de pie, soportar el peso del cuerpo sobre las puntas de los pies o sobre los talones |
| 15 | `inclinacion_tronco` | inclinar la espalda hacia delante o hacia un lado, o arquearla hacia atrás, más allá de una inclinación leve |
| 16 | `rotacion_tronco` | girar los hombros respecto a la cadera |

Los umbrales "inclinación leve" y "90°" se fijan con una frase de referencia por umbral y se
aplican igual en todo el catálogo. No son medidas clínicas.

### Exclusiones del catálogo v1 (ningún ejercicio las incluye)

Movimientos de cuello · arrodillarse o apoyar las rodillas en el suelo · desplazarse por el
espacio · ejercicios de impacto (la exigencia `impacto` se mantiene para el futuro) · movilidad
aislada de la muñeca (giros o círculos), porque ninguna exigencia la cubre · ejercicios que
dependen de reposabrazos · ejercicios con material especial (pelotas de terapia, escalones).

El catálogo v0.3.0 tiene 220 ejercicios. Por posición: 96 sentado, 50 de pie, 61 tumbado en la
cama y 21 en el suelo (algunos admiten dos posiciones). Las fuentes y los huecos están en
`docs/revision-catalogo.md`.

### Lado del cuerpo

En v1 una restricción se aplica a **los dos lados**. Es conservador y simplifica el modelo.

## 5. Secciones del perfil y su traducción

**Posición** (obligatoria, una respuesta)

| Opción | Excluye |
|---|---|
| Puedo estar de pie sin sujetarme | — |
| Puedo estar de pie solo si me sujeto a algo | `equilibrio_sin_apoyo` |
| Solo puedo hacer ejercicio sentado/a | posiciones `de_pie`, `tumbado` y `suelo`, y `sentarse_levantarse` |

Dos preguntas obligatorias aparte, que no se hacen si la persona eligió "Solo sentado/a":

- "¿Puedes tumbarte boca arriba en una cama y volver a sentarte sin ayuda?". "No" excluye
  `tumbado`.
- "¿Puedes bajar al suelo y levantarte sin ayuda?". "No" excluye `suelo`. La única guía fiable
  encontrada para levantarse del suelo pasa por apoyar las rodillas, así que la pregunta debe ser
  explícita y no darse por supuesta.

Equilibrio y movilidad (dentro de Posición): "Me cuesta mantener el equilibrio" excluye
`equilibrio_sin_apoyo` y `una_pierna`. "Me cuesta levantarme de una silla" excluye
`sentarse_levantarse`.

**Brazos y hombros** (incluye codos)

| Opción | Excluye |
|---|---|
| No puedo, o me cuesta, levantar el brazo por encima del hombro | `brazo_sobre_hombro` |
| Me cuesta llevar la mano a la espalda o detrás de la cabeza | `mano_detras` |
| Solo puedo usar un brazo | `ambos_brazos` |

**Manos y muñecas**

| Opción | Excluye |
|---|---|
| Me cuesta cerrar la mano o sujetar objetos | `agarre` |
| No puedo apoyar peso en las manos o muñecas | `peso_en_manos` |

**Piernas** (subgrupos visuales: cadera, rodilla, tobillo/pie)

| Opción | Excluye |
|---|---|
| Me cuesta doblar mucho la cadera | `flexion_amplia_cadera` |
| Me cuesta doblar mucho la rodilla o agacharme | `flexion_profunda_rodilla` |
| No puedo cargar peso sobre una de mis piernas | posición `de_pie`, `sentarse_levantarse`, `una_pierna` |
| Me cuesta ponerme de puntillas o sobre los talones | `puntillas_talones` |

**Espalda y tronco** (sección añadida)

| Opción | Excluye |
|---|---|
| Me cuesta inclinar o arquear la espalda | `inclinacion_tronco` |
| Me cuesta girar el tronco | `rotacion_tronco` |

**Indicaciones de un profesional** ("Marca solo lo que te haya indicado un profesional sanitario")

| Opción | Excluye |
|---|---|
| Evitar impactos o saltos | `impacto` |
| No cargar peso ni usar resistencia | `carga_externa` |
| Evitar esfuerzos que me agiten | `esfuerzo_cardio` |
| No doblar cadera / rodilla, no inclinar / girar la espalda | las mismas exigencias que la dificultad equivalente |
| **Tengo otra indicación que no aparece aquí** | **bloquea la generación** (HealthMove no puede respetar lo que no puede representar) |

**Recursos y tiempo:** silla estable sin ruedas (preferiblemente sin reposabrazos), pared libre,
banda elástica, peso ligero (por ejemplo, una botella de agua llena), toalla de mano, cama; 10,
15 o 20 min.

## 6. Estados de sección y condiciones para generar

Cada sección de dificultades tiene uno de estos estados:

| Estado | Significado | Efecto en el filtro |
|---|---|---|
| `no_revisada` | el usuario no ha respondido | **impide generar** |
| `sin_dificultades` | marcó "No tengo dificultades en esta sección" | ninguna exclusión |
| `con_selecciones` | marcó una o más opciones | excluye lo indicado |
| `cubierta_por_declaracion` | no la abrió, pero confirmó la declaración global | ninguna exclusión; el resumen la muestra como "no revisada; declaraste no tener más" |

- "No tengo dificultades en esta sección" es excluyente **solo dentro de su sección**. Al marcar
  una dificultad, se retira; al marcarla, se desmarcan las dificultades de esa sección con opción
  de deshacer.
- "No tengo más restricciones/dificultades" **no borra nada** y lleva al resumen. Allí el usuario
  confirma explícitamente: "Confirmo que no tengo restricciones ni dificultades además de las
  indicadas". Solo entonces las secciones `no_revisada` pasan a `cubierta_por_declaracion`.
  (Corrección respecto a la propuesta inicial: no visitar una sección no equivale por sí solo a no
  tener dificultades en ella.)
- Si el usuario cambia una sección, las demás se conservan, vuelve al resumen y la declaración
  global se invalida si la sección cambiada estaba cubierta por ella.

Para generar una rutina hace falta: posición respondida, preguntas de cama y suelo respondidas (salvo
"solo sentado/a"), recursos y
duración elegidos, ninguna sección `no_revisada`, y no haber marcado "otra indicación".

## 7. Reglas del catálogo

Datos que necesita cada ejercicio o variante: identificador, nombre, descripción, instrucciones
paso a paso, duración estimada, posiciones, las 16 exigencias **revisadas una a una**, recursos
necesarios, enlace a su ejercicio base (si es una variante), fuente, responsable y estado de
validación.

1. Ante la duda, se marca la exigencia.
2. Que una exigencia no esté marcada significa "revisada: no la exige". Un ejercicio sin revisión
   completa **no se usa** (información insuficiente; es distinto de una incompatibilidad
   confirmada).
3. Cada variante se etiqueta por separado.
4. En los ejercicios de pie se usa una silla o una pared como apoyo, salvo que estén marcados con
   `equilibrio_sin_apoyo`. Conviene incluir variantes con la palma abierta contra la pared, porque
   sujetarse a una silla es `agarre`.
5. Estados de validación: `borrador` → `basado_en_fuente_publica` → `revisado_por_profesional`.
   v1 usa `basado_en_fuente_publica` y lo indica en la app. **La validación profesional queda como
   riesgo abierto.**
6. El etiquetado inicial lo genera la IA y queda en `borrador`. Solo pasa a
   `basado_en_fuente_publica` cuando el autor revisa el ejercicio contra su fuente y rellena
   `revisado_por` y `fecha_revision`. El motor solo usa ejercicios fuera de `borrador`. La IA
   propone; la persona decide.
7. Las instrucciones se redactan con palabras propias en español; el texto de la fuente no se
   copia. Cualquier cambio respecto a la fuente se anota en `adaptaciones`.
8. Archivo: `public/data/catalogo.json`. Validación: `node scripts/validar-catalogo.mjs`.

### Casos de referencia

| Ejercicio | Posición | Exigencias | Recursos |
|---|---|---|---|
| Elevar los brazos sobre la cabeza, sentado | sentado | `brazo_sobre_hombro` | silla |
| ↳ elevar los brazos hasta los hombros | sentado | — | silla |
| Marcha sentado | sentado | `flexion_amplia_cadera` | silla |
| Sentarse y levantarse de la silla | sentado + de pie | `sentarse_levantarse` | silla |
| Flexiones contra la pared | de pie | `peso_en_manos` | pared |
| Puente de glúteo | suelo | — | — |
| Elevar los talones sujetándose a la silla | de pie | `puntillas_talones`, `agarre` | silla |

## 8. Regla de compatibilidad

Un ejercicio es compatible **si y solo si**:

- está revisado por completo y su estado de validación es suficiente;
- todas sus posiciones están permitidas;
- ninguna de sus exigencias está excluida;
- se dispone de todos sus recursos.

Si no hay ejercicios compatibles suficientes, no se genera la rutina y la app informa de las
restricciones que más limitan, sin relajar ningún filtro.

## 9. Decisiones

Aceptadas: aplicar las restricciones a los dos lados · "otra indicación" bloquea la generación ·
añadir la sección Espalda y tronco · exclusiones del catálogo v1.

**Arquitectura v1: local-first (opción B, aceptada el 2026-10-14).**

- Sin backend ni cuentas. Para servirla basta un servidor de archivos estáticos.
- El catálogo es un archivo JSON versionado dentro de `public/`.
- El motor de reglas es un módulo JS puro: corre en el navegador y se prueba con `node --test`.
- El perfil y el historial se guardan solo en el dispositivo. La app debe avisar de que se pierden
  si se borran los datos del navegador.
- El service worker cachea la app, el catálogo y la última rutina, para que funcione sin conexión.
- El backend de MV10 (Express, PostgreSQL, JWT) queda archivado en `legacy/mv10-backend/` para
  versiones futuras (cuentas, sincronización o IA en el servidor).

**Pendiente:**

- **Opción "No estoy seguro/a" por sección.** Excluiría todas las exigencias de esa sección
  (conservador). Está por confirmar.
