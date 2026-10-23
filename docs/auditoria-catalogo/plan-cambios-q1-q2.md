# Plan de cambios · cierre de Q1 y Q2 (2026-10-20)

- **Estado:** **aprobado y aplicado** el 2026-10-20 (`registro.md`, decisiones del 2026-10-20, P9 a P11). Sin commit.
- **Catálogo de partida:** v0.3.0, commit `8161842`, blob `72fda34f80d2e3222eabd5c0ce583c21c83d7699`. Los 220 ejercicios siguen en `borrador`: **ningún ejercicio queda aprobado** por este plan.
- **Origen:** decisiones D2 y D3 del desarrollador. Objeciones a D2 exploradas con DeepSeek (consulta C2, `deepseek/ejecuciones/20261020T235245Z-fase-01-d2-objeciones/`; análisis de Claude en `deepseek/analisis-claude/fase-01-d2-objeciones.md`). Evidencia de las fuentes: `deepseek/analisis-claude/evidencia-fuentes-q1-q2.md`.
- **Aplicado con:** un script de un solo uso (fuera del repositorio) que comprueba que cada id existe y que cada instrucción original coincide literalmente antes de sustituirla.

## 1. Criterio aplicado

**Q2 (`agarre`).**
- El contacto o el apoyo sin evidencia de prensión no demuestra un agarre (R7.4). Aun así, se marca `agarre: true` por el criterio conservador (R2.1), con la nota `[conservadora]` (R2.4).
- La instrucción usa el verbo de la fuente (*rest*, *place* → «apoya»), no la fórmula neutra «las manos en el respaldo». Eso responde a la objeción DS-100 de DeepSeek: el usuario ve lo mismo que describe la fuente (R4.2).
- Se cerraría con una revisión profesional que confirme que basta apoyar la palma abierta (DS-102, DS-95).

**Q1 y DG-4 (`ambos_brazos`).**
- **Cuentan:**
  - el apoyo de las dos manos para la estabilidad;
  - los dos brazos trabajando o sosteniendo la postura a la vez;
  - una mano que se apoya mientras el otro brazo trabaja;
  - la alternancia continua de los dos brazos como parte del movimiento (como `boxeo-sentado`, que la consolidación ya marcaba).
- **Llevan la nota `[conservadora]`:** los `true` que se apoyan en el apoyo, en la duda o en la alternancia. Los de trabajo bilateral descrito en la instrucción tienen evidencia D y no la llevan.
- **No cuentan:**
  - las series hechas con un brazo y después con el otro (`curl-biceps-sentado` y `pulgar-dedos`, auditados como LISTO con `false`);
  - las manos en reposo (§7.1);
  - el contacto sin función;
  - una mano de apoyo con el otro brazo libre.

**Rótulo (Q8(a)):** `ETIQUETA_EXIGENCIA.ambos_brazos` pasa de «usar los dos brazos a la vez» a «usar los dos brazos» (propuesta D11 de la consolidación). Ahora es coherente con la alternancia y con el apoyo. No cambia ningún filtro.

## 2. Instrucciones cambiadas (Q2)

| Ejercicio | Paso | Antes | Después |
|---|---|---|---|
| `mini-sentadillas` | 1 | «Ponte de pie detrás de una silla, con los pies separados al ancho de la cadera y las manos en el respaldo.» | «Ponte de pie detrás de una silla, con los pies separados al ancho de la cadera, y apoya las manos en el respaldo.» |
| `elevacion-talones-apoyo` | 1 | «Ponte de pie detrás de una silla con las manos en el respaldo y los pies apoyados en el suelo.» | «Ponte de pie detrás de una silla, con los pies en el suelo, y apoya las manos en el respaldo.» |
| `elevacion-lateral-pierna` | 1 | «Ponte de pie detrás de una silla con las manos en el respaldo.» | «Ponte de pie detrás de una silla y apoya las manos en el respaldo.» |
| `extension-pierna-atras` | 1 | «Ponte de pie detrás de una silla con las manos en el respaldo.» | «Ponte de pie detrás de una silla y apoya las manos en el respaldo.» |
| `giro-tronco-pie` | 1 | «Ponte de pie, alto, con una mano en el respaldo de una silla firme.» | «Ponte de pie, alto, y apoya una mano en el respaldo de una silla firme.» |

En `pendulo-hombro`, `flexion-alterna-piernas-de-pie`, `remo-inclinado-botella`, `estiramiento-gemelo-pared` y `estiramiento-soleo-pared`, la instrucción ya decía «apoya» o «apóyate»: sin cambio.

## 3. Etiquetas y notas (59 filas; 50 cambian de valor)

| Ejercicio | Exigencia | Antes | Después | Grupo | Regla | Nota añadida |
|---|---|---|---|---|---|---|
| `mini-sentadillas` | `agarre` | true | true | Q2 · apoyo sin prensión | R2.1, R2.4, Q2 | sí |
| `elevacion-talones-apoyo` | `agarre` | true | true | Q2 · apoyo sin prensión | R2.1, R2.4, Q2 | sí |
| `elevacion-lateral-pierna` | `agarre` | true | true | Q2 · apoyo sin prensión | R2.1, R2.4, Q2 | sí |
| `extension-pierna-atras` | `agarre` | true | true | Q2 · apoyo sin prensión | R2.1, R2.4, Q2 | sí |
| `flexion-alterna-piernas-de-pie` | `agarre` | true | true | Q2 · apoyo sin prensión | R2.1, R2.4, Q2 | sí |
| `giro-tronco-pie` | `agarre` | true | true | Q2 · apoyo sin prensión | R2.1, R2.4, Q2 | sí |
| `pendulo-hombro` | `agarre` | true | true | Q2 · apoyo sin prensión | R2.1, R2.4, Q2 | sí |
| `deslizar-toalla-pared` | `agarre` | true | true | Q2 · indeterminado | R2.1, R2.4, Q2 | sí |
| `remo-inclinado-botella` | `agarre` | true | true | Q2 · prensión de la botella | D (botella), R7.4 | sí |
| `mini-sentadillas` | `ambos_brazos` | false | true | Q1 · apoyo bilateral | R2.1, R2.4, Q1 | sí |
| `elevacion-talones-apoyo` | `ambos_brazos` | false | true | Q1 · apoyo bilateral | R2.1, R2.4, Q1 | sí |
| `elevacion-lateral-pierna` | `ambos_brazos` | false | true | Q1 · apoyo bilateral | R2.1, R2.4, Q1 | sí |
| `extension-pierna-atras` | `ambos_brazos` | false | true | Q1 · apoyo bilateral | R2.1, R2.4, Q1 | sí |
| `estiramiento-gemelo-pared` | `ambos_brazos` | false | true | Q1 · apoyo bilateral | R2.1, R2.4, Q1 | sí |
| `estiramiento-soleo-pared` | `ambos_brazos` | false | true | Q1 · apoyo bilateral | R2.1, R2.4, Q1 | sí |
| `elevar-puntas-pies-apoyo` | `ambos_brazos` | false | true | Q1 · apoyo bilateral | R2.1, R2.4, Q1 | sí |
| `flexion-rodilla-pie-apoyo` | `ambos_brazos` | false | true | Q1 · apoyo bilateral | R2.1, R2.4, Q1 | sí |
| `paso-atras-apoyo` | `ambos_brazos` | false | true | Q1 · apoyo bilateral | R2.1, R2.4, Q1 | sí |
| `puntillas-talones-apoyo` | `ambos_brazos` | false | true | Q1 · apoyo bilateral | R2.1, R2.4, Q1 | sí |
| `equilibrio-una-pierna-pared` | `ambos_brazos` | false | true | Q1 · apoyo bilateral | R2.1, R2.4, Q1 | sí |
| `marcha-sentado-sujetandose` | `ambos_brazos` | false | true | Q1 · apoyo bilateral | R2.1, R2.4, Q1 | sí |
| `elevar-piernas-borde-silla` | `ambos_brazos` | false | true | Q1 · apoyo bilateral | R2.1, R2.4, Q1 | sí |
| `arquear-espalda-pie` | `ambos_brazos` | false | true | Q1 · apoyo bilateral | R2.1, R2.4, Q1 | sí |
| `remo-inclinado-botella` | `ambos_brazos` | false | true | Q1 · apoyo y trabajo | DG-4, R2.4, Q1 | sí |
| `pendulo-hombro` | `ambos_brazos` | false | true | Q1 · apoyo y trabajo | DG-4, R2.4, Q1 | sí |
| `rodilla-mano-contraria-sentado` | `ambos_brazos` | false | true | Q1 · alternancia continua | DG-4, R2.4, Q1 | sí |
| `talones-flexion-codo-sentado` | `ambos_brazos` | false | true | Q1 · alternancia continua | DG-4, R2.4, Q1 | sí |
| `cruz-suelo` | `ambos_brazos` | false | true | Q1 · duda | R2.1, R2.4, Q1 | sí |
| `rodillas-lado-lado-suelo` | `ambos_brazos` | false | true | Q1 · duda | R2.1, R2.4, Q1 | sí |
| `gluteo-pierna-cruzada-suelo` | `ambos_brazos` | false | true | Q1 · duda | R2.1, R2.4, Q1 | sí |
| `separar-juntar-dedos` | `ambos_brazos` | false | true | Q1 · duda | R2.1, R2.4, Q1 | sí |
| `estiramiento-pecho-sentado` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `giro-tronco-sentado` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `boxeo-sentado` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `abrir-cerrar-manos` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `arquear-espalda-sentado` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `flexiones-pared` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `balanceo-brazos-sentado` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `elevacion-lateral-brazos-sentado` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `press-encima-cabeza-sentado` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `banda-press-pecho-sentado` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `banda-prensa-pierna-sentado` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `banda-elevaciones-laterales-sentado` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `banda-empuje-pie-sentado` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `banda-sentarse-levantarse` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `marcha-apertura-brazos-sentado` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `toques-laterales-brazos-arriba-sentado` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `marcha-circulos-codos-sentado` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `elevaciones-laterales-botella` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `press-hombros-botella-pie` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `press-pecho-botella-tumbado` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `subir-manos-pared` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `estiramiento-hombros-espalda-pared` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `control-abdominal-brazos-arriba` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `extension-lumbar-antebrazos` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `extension-lumbar-manos` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `mariposa-suelo` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `abrazar-rodilla-tumbado` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |
| `abdominal-isometrico-muslos` | `ambos_brazos` | false | true | DG-4 · trabajo bilateral (D) | DG-4 (evidencia D en la instrucción), Q1 | — |

**Textos de las notas añadidas a `notas_etiquetado`** (al final de la nota existente, si había una). Son breves a propósito: con textos más largos, el bloque `catalogo-de-pie` que se envía a DeepSeek supera el límite de seguridad de 60 000 caracteres (`scripts/ia/revision.mjs`, `MAX_CARACTERES_BLOQUE`). La explicación completa de cada nota está en este plan.
- **Q2, apoyo sin prensión:** «[conservadora] agarre: apoyo sin prensión (Q2). Se cerraría con: revisión profesional.»
- **`deslizar-toalla-pared`:** «[conservadora] agarre: la fuente dice «held» (Q2). Se cerraría con: la imagen de la fuente.»
- **`remo-inclinado-botella`:** «agarre: por la botella; la otra mano solo se apoya (Q2).» Lleva evidencia D, así que no se marca como conservadora.
- **Q1, apoyo bilateral:** «[conservadora] ambos_brazos: apoyo bilateral (Q1). Se cerraría con: fuente de que basta una mano.»
- **Q1, apoyo y trabajo:** «[conservadora] ambos_brazos: una mano apoya y el otro brazo trabaja (Q1). Se cerraría con: fuente sin apoyo.»
- **Q1, alternancia continua:** «[conservadora] ambos_brazos: brazos alternos sin pausa (Q1). Se cerraría con: fuente con un brazo.»
- **Q1, duda:** «[conservadora] ambos_brazos: no consta si los brazos solo reposan (Q1). Se cerraría con: la fuente o su imagen.»

## 4. Revisados y sin cambio

| Ejercicio | Motivo |
|---|---|
| `curl-biceps-sentado`, `pulgar-dedos`, `elevacion-brazo-sentado`, `elevacion-brazos-tumbado`, `puno-extension-codo-sentado`, `circulos-grandes-brazos-sentado`, `estiramiento-pecho-pared`, `isometrico-hombro-fuera-pared`, `nadador-boca-abajo`, `elevar-brazo-boca-abajo`, `elevacion-lateral-botella-tumbado`, `flexion-hombro-botella-tumbado`, `flexion-hombro-lado-tumbado`, `flexion-codo-tumbado` | Un brazo cada vez, en series por lado: se puede hacer con un solo brazo |
| `giro-tronco-pie`, `arrancar-cortacesped-sentado`, `deslizar-toalla-pared` | Una mano; la otra queda libre (`ambos_brazos`) |
| `marcha-sentado-manos-cadera`, `circulos-hombros-sentado`, `circulos-hombros-tumbado`, `tobillos-punta-talon-sentado`, `estiramiento-gemelo-sentado`, `inclinacion-lateral-brazo-arriba`, `inclinacion-lateral-de-pie`, `descanso-inclinado-sentado`, `descanso-apoyado-pared`, `descanso-espalda-pared`, `puente-tumbado`, `rodilla-al-lado-tumbado`, `hombros-abajo-tumbado`, `flexion-rodilla-boca-abajo`, `extension-cadera-boca-abajo`, `abdomen-boca-abajo`, `respiracion-tranquila-tumbado`, `autoelongacion-sentado` | Manos o brazos en reposo (§7.1). En `inclinacion-lateral-brazo-arriba`, la consolidación proponía `true` con el criterio literal; DG-4 lo sustituye (la mano en la cadera reposa) |
| `respiracion-abdominal-tumbado`, `respiracion-costal-sentado`, `flexion-tronco-delante-sentado` | Contacto sin función de apoyo ni de trabajo |
| `sentarse-levantarse`, `sentarse-levantarse-sin-manos`, `rotacion-cadera-fuera-sentado`, `rodilla-al-pecho-tumbado` | Las manos son opcionales, se cruzan para no usarlas o no se usan |
| `estiramiento-aductores-pie`, `marcha-sitio-apoyo` | «Sujétate al respaldo» sin decir con cuántas manos. **Residual:** se revisa con la fuente en su auditoría |
| `arrancar-cortacesped-sentado`, `abrazar-rodilla-tumbado`, `gluteo-pierna-cruzada-suelo`, `pulgar-dedos` (`agarre`) | Prensión o cierre parcial descritos («como si cogieras», «abrázala», tocar el pulgar): no es el caso de Q2 |

## 5. Impacto en la disponibilidad (R9.1)

`node scripts/disponibilidad.mjs --escenario` antes de aplicar. Es **modo auditoría** (incluye borradores, así que **no es la disponibilidad real**), sobre el catálogo `72fda34f`. Supuesto: la lista de ejercicios es de Claude. Solo cambian estos perfiles; el resto de R9.1 queda igual.

| Perfil | Antes | Después |
|---|---|---|
| `brazos: un_brazo` | 181 (calentamiento 51, principal 87, calma 52; de pie 41) | 131 (39, 60, 38; de pie 21) |
| `de_pie_apoyo` + `un_brazo` | 171 (50, 79, 51; de pie 31) | 125 (39, 55, 37; de pie 15) |
| `solo_sentado` + `un_brazo` + `cerrar_mano` + `brazo_arriba` | 47 (18, 18, 14) | 38 (12, 16, 11) |
| `solo_sentado` + `un_brazo` + `cerrar_mano` + `peso_manos` | 52 (23, 18, 15) | 41 (14, 17, 12) |

- `cerrar_mano` no cambia: con la modificación del desarrollador, `agarre` se mantiene en `true`.
- Todas las fases siguen por encima de los mínimos del motor (1, 3 y 1).
- R9.3: la disponibilidad informa, pero no decide.

## 6. Verificación tras aplicar

- `node scripts/validar-catalogo.mjs`: sin errores de estructura.
- `npm run version-sw`, `npm test`, `node scripts/auditoria.mjs validar`: resultados en `registro.md`, P9 a P11.
