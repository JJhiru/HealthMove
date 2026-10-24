# Problemas de gravedad media y menor · 2026-10-22

> **Informe de Claude.** Es el siguiente nivel de `problemas-pendientes-2026-10-21.md`. No es una fuente de autoridad ni una decisión: si choca con `protocolo.md` o `registro.md`, mandan ellos.
>
> **Estado de partida** (rama `desarrollo-v1`, commit `fcb38be` más los cambios sin confirmar de P22 a P24):
> - 225 ejercicios: 30 publicados (`basado_en_fuente_publica`) y 195 en `borrador`; 45 auditados.
> - `npm test` 210/210 y `node scripts/auditoria.mjs validar` con 0 errores (29 avisos: informes antiguos con valores ya corregidos).
>
> **Actualizado el 2026-10-23 (P28):** CN-2 resuelto (opción c: preparar el material no cuenta). G5/D8 resuelto (opción a: auditoría, documentado en la especificación §4). G3/Q5: adaptaciones aprobadas; los 4 del lote 10 quedan listos para aprobación. CN-3 aplazado. M2 sin cambios. M5: DeepSeek consultado (C11), pendiente de decisión.
>
> **Actualizado el 2026-10-22 (P25 a P27):** CN-1 resuelto con DeepSeek (C9). M3 revisado: ningún falso negativo (P26). M7 hecho (C10, P27). M1 confirmado y enviado con push. M2 se deja así: solo 4 fuentes tienen ejercicios publicados porque el resto está sin revisar.

## 1. Cómo quedan los críticos y graves

| # | Estado | Qué falta |
|---|---|---|
| C1 · Validación profesional | Aplazado (P22) | Que haya un profesional |
| C2 · Ejercicios con las manos ocupadas | **Resuelto** (P23, opción c) | — |
| C3 · Ampliar el catálogo | En curso: lote 10 aplicado en lo que no depende de decisiones (P24) | CN-2 y Q5 para cerrar los 4 del lote 10; seguir por lotes |
| C4 · Huellas (protocolo 1.1) | Aplazado (P23) | — |
| G2 · CN-1 | Consulta C9 preparada, **sin enviar** | La clave de DeepSeek |
| G3 · Q5 | Aplazado (P23) | Tu revisión de `adaptaciones-q5-2026-10-22.md` |
| G4 · `[conservadora]` en los no auditados | Se resuelve dentro de C3 | — |
| G5 · D8, exclusiones del validador | **Sin decidir** | Tu decisión: (a) auditoría y documentarlo, o (b) avisos por palabras clave |
| G6 · Mensajes de seguridad | Va con C1 | — |
| G7 y G8 | Aplazados (P22) | — |
| **Nuevo · CN-2**, preparar el material | **Sin decidir** | Tu decisión (`registro.md`, CN-2). Afecta a los ejercicios con banda en las piernas y bloquea 2 del lote 10 |

**No queda ningún crítico ni grave que yo pueda resolver sin una decisión tuya o sin la clave.** Las tres cosas que desbloquean trabajo inmediato son: **la clave** (CN-1 y la revisión del lote 10), **CN-2** y **D8**.

## 2. Criterio de gravedad

- **Media:** no pone en riesgo a nadie y no rompe la trazabilidad, pero da información incompleta o confusa a la persona, deja trabajo bloqueado o puede producir errores si nadie lo mira.
- **Menor:** textos, documentación o detalles de herramienta sin efecto en lo que la app ofrece.

## 3. Gravedad media

| # | Problema | Afecta hoy a lo publicado | De qué depende |
|---|---|---|---|
| M1 | **Rama `desarrollo-v1` sin fusionar.** Lleva 17 commits por delante de `main` y los cambios de P22 a P24 están sin confirmar. Los 30 aprobados, el protocolo y la auditoría solo existen aquí: si la app se sirve desde `main`, no tiene ningún ejercicio aprobado | Sí, si la app publicada sale de `main` | **Tú:** confirmar los cambios y decidir cuándo fusionar. Yo no hago commits ni toco `main` |
| M2 | **La lista «Fuentes» de Ajustes enseña 51 fuentes, pero solo 4 tienen ejercicios publicados** (`vistaAcerca`, `app.js`). Cita materiales que la persona no verá en ninguna rutina | Sí (texto) | **Tu decisión de interfaz.** Propuesta: listar solo las fuentes de ejercicios utilizables (`estadoUtilizable`), como ya hace el recuento «revisados» de la misma página. Es un cambio de una línea, con su prueba en el navegador |
| M3 | **DS-27: `equilibrio_sin_apoyo: true` en ejercicios donde el apoyo es opcional o una contingencia.** Posibles falsos negativos para «me sujeto a algo». En 4 de los 11 citados la fuente no menciona ningún apoyo | No: los afectados están en `borrador` | **Auditoría** (C3), con la fuente de cada uno. R6.3 ya dice cómo tratar la contingencia |
| M4 | **Tres propuestas de variante para «un brazo»** (`giro-tronco-sentado`, `boxeo-sentado` y `abrir-cerrar-manos`, en `registro.md`) **sin buscar fuente.** «Un brazo» es uno de los huecos del catálogo publicado (C3) | No | **Trabajo de Claude:** buscar si alguna fuente pública describe la versión con un solo brazo. Sin fuente no se incorporan (DG-5) |
| M5 | **Q7: las incertidumbres no se ven.** Las notas `[conservadora]` y las dudas de fuente viven en `notas_etiquetado`, que la interfaz no enseña. La persona no sabe que un ejercicio se le quitó «por precaución» y no por una incompatibilidad confirmada | Sí (información) | **Tu decisión de interfaz** (protocolo §13, Q7). Pasaría por `healthmove-safety-reviewer` |
| M6 | **C-5: la ficha del ejercicio solo enseña la base directa y las variantes directas** (`app.js`, `vistaEjercicio`). En una cadena A → B → C, desde C no se ve A | Todavía no. Hay 3 cadenas de tres; en una entran dos publicados (`marcha-sentado-sujetandose` → `marcha-sentado-manos-cadera` → `marcha-apertura-brazos-sentado`), pero el tercero está en `borrador` y no se ve. Se notará cuando se apruebe | **Tu decisión de interfaz**. El motor ya trata la familia completa (D6) |
| M7 | **Revisión de DeepSeek del lote 10 pendiente.** Los lotes 6 a 9 se revisaron antes de cerrarse | No (`borrador`) | **La clave** (igual que CN-1) |

## 4. Gravedad menor

| # | Problema | De qué depende |
|---|---|---|
| m1 | **DS-11:** la opción del perfil dice «en una silla o silla de ruedas» y la especificación §5, «sentado/a». El filtro es el mismo | Tu decisión: qué texto manda |
| m2 | **Q4:** la especificación §7 no dice que sus casos de referencia son ilustrativos (lo dice el protocolo, DG-1), y dos filas llevan «—» | Tu autorización para editar la especificación |
| m3 | **DS-30:** el validador no comprueba el formato `[conservadora]` de las notas | D4 (G4); después, cambio del validador |
| m4 | **DS-42:** la cita que justifica una adaptación vive en el informe del lote, no en el catálogo. Los informes están versionados, así que no se pierde | Nada urgente: solo si se quisiera llevar la cita al catálogo (cambio de esquema) |
| m5 | **Editoriales del protocolo:** DS-04 («restrictivo» puede leerse como «más seguro») y DS-06 (cita una línea de `app.js` que ha cambiado) | La próxima versión del protocolo (va con C4, aplazado) |
| m6 | **Los 29 avisos del validador** son de informes antiguos que conservan valores ya corregidos. Molestan, porque esconden un aviso nuevo entre ellos | Nada: desaparecen al reauditar los lotes 1 a 5 (C3). Si se quiere antes, una opción del validador para silenciar los avisos de informes cerrados |

**Corregido hoy, sin decisión pendiente:** la especificación decía «220 ejercicios» y «algunos admiten dos posiciones», y el registro daba como pendiente comunicar `especifica_de` (hecho en P17).

## 5. Dependencias y orden propuesto

1. **La clave de DeepSeek** desbloquea CN-1 (G2) y M7.
2. **CN-2 y D8 (G5)**: dos decisiones cortas. CN-2 cierra 2 del lote 10 y fija el criterio antes de auditar los ejercicios con banda en las piernas.
3. **M1**: confirmar el trabajo de `desarrollo-v1` (tú). Es lo único de este nivel que puede afectar ya a la app publicada.
4. **M2 y M5**: decisiones de interfaz sobre lo que la persona ve. M2 es inmediata, si la apruebas.
5. **C3 por lotes**, con **M3** y **M4** por el camino: M4 es la vía más directa para llenar el hueco de «un brazo».
6. **m1 a m6**, cuando toque: ninguno cambia lo que la app ofrece.
