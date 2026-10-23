# Análisis de Claude · fase-08-cn1 (consulta C9)

- **Ejecuciones:** `20261023T021407Z-fase-08-cn1`, `…-bloque2` y `…-bloque3` (literal verificado en las tres). DS-186 a DS-222. Gasto: unos 0,037 USD.
- **Estado:** el tercer bloque llegó truncado en el «Resumen ejecutivo», que repite los apartados anteriores. No se pidió otro: no falta ningún hallazgo.
- **Encargo del desarrollador (P23):** «CN-1: de acuerdo a tu propuesta, revisala con deepseek y lleguen a una solucion». Es una delegación para cerrar CN-1. Por eso DS-211 (que DeepSeek no puede cerrar CN-1) no impide el cierre: lo cierra la decisión delegada, registrada como P25.

## 1. Solución

1. **Manda la definición literal** de la especificación §4 (codo o mano por encima de la altura del hombro). Lo sostienen la jerarquía documental, R2.2 y P9, P10 y P14. Se acepta el §1.2 de DeepSeek.
2. **B y D cuentan** (el curl y la mano a la altura de la cara). La otra lectura exigiría una regla nueva contra R2.2 y cambiaría 3 publicados con evidencia D (§4.4).
3. **C y E «cuentan» como conservadora**, no como evidencia. Sin una regla nueva, R2.1 y R2.2 dan `true` conservador cuando el brazo llega «hasta», «a» o «casi» a la altura del hombro y no consta que no la pase (§1.3 y §4.2). Se agrupan las tres expresiones (DS-188, DS-189 y DS-207): las tres dan el mismo resultado por la misma regla.
4. **F sin umbral nuevo.** Se retiran de la propuesta «más allá de la horizontal» y «como si estuviera de pie» (DS-203 y DS-204, aceptados): no estaban definidos y R7.2 prohíbe inventar ángulos. En su lugar, R2.1: tumbado, si el brazo se separa del tronco (estirado, en cruz o por encima de la cabeza) o no se dice hasta dónde, `true` conservador.
5. **Postura de partida o de apoyo:** cuenta, como dice §4 («en cualquier momento»). Se retira la distinción «postura de apoyo» de la propuesta (DS-195 y DS-205, aceptados).
6. **Movimiento pasivo:** §4 no lo distingue, así que no hace falta regla: cuenta la posición de la mano o del codo (DS-197 y DS-206, resueltos así).
7. **Excepción con evidencia:** la mano apoyada en el hombro con el codo por debajo, si el texto lo fija («el codo pegado al pecho», «brazos cruzados sobre el pecho»), es `false` con evidencia D. Responde a DS-198 y DS-199.

## 2. Hallazgos

**Aceptados y aplicados:**
- DS-186, DS-187 y DS-191: clasificaciones corregidas (`deslizar-toalla-pared` es A; `respiracion-lado-brazo-adelante` es F; `estiramiento-triceps` es B, y su `true` ya existe).
- DS-190 y DS-216: `marcha-circulos-codos-sentado` estaba en E y faltaba en la tabla; su nota pasa al formato `[conservadora]`.
- DS-194, DS-195 y DS-200: los `false` sin evidencia D pasan a `true` conservador.
- DS-212: impacto medido antes de aplicar (§3).
- DS-213: cada cambio es `conservadora`, con su nota «Se cerraría con».

**Aceptados como aclaración, sin cambio:** DS-192, DS-193, DS-201, DS-208, DS-209, DS-214, DS-215 y DS-217. Ningún publicado cambia, así que no se revierte P16 ni P19.

**Fuera del alcance de CN-1:**
- DS-218, DS-219 y DS-221: notas de la fuente, sin efecto en esta etiqueta.
- DS-220: la almohada de `extension-cadera-boca-abajo` se revisa al auditarlo (R3.3).
- DS-222: la licencia ya consta en el catálogo.

**Abierto, de interfaz (DS-210):** con B y D contando, la opción «levantar el brazo por encima del hombro» describe menos de lo que filtra. Quien la marca no verá curls. **Propuesta, sin aplicar:** «No puedo, o me cuesta, subir el brazo o la mano por encima del hombro». Es un texto de interfaz (Q8) y necesita la decisión del desarrollador.

## 3. Aplicación (P25)

- **23 ejercicios en `borrador`** pasan `brazo_sobre_hombro` de `false` a `true` conservador, con su nota:
  - **B** (la mano sube al doblar el codo): `banda-curl-sentado`, `flexion-codo-tumbado`, `banda-flexion-codo-tumbado`, `talones-flexion-codo-sentado` y `puno-extension-codo-sentado`;
  - **C** (el brazo llega a la altura del hombro, o no se dice hasta dónde): `elevaciones-laterales-botella`, `banda-elevaciones-laterales-sentado`, `estiramiento-espalda-alta-sentado`, `abrir-pierna-brazo-pared`, `estiramiento-pecho-sentado`, `equilibrio-una-pierna-pared`, `remo-sin-material-sentado`, `banda-aperturas-sentado`, `balanceo-brazos-sentado`, `descanso-apoyado-pared` y `estiramiento-gemelo-pared`;
  - **F** (tumbado, el brazo se separa del tronco): `respiracion-lado-brazo-adelante`, `cruz-suelo`, `rodillas-lado-lado-suelo`, `cuadriceps-lado-suelo`, `extension-cadera-boca-abajo`, `elevacion-lateral-botella-tumbado` y `extension-lumbar-antebrazos`.
- **Búsqueda:** no se limitó a los 27 ejemplos. Se buscó en las instrucciones de todos los borradores en `false`.
  - Se descartaron los que fijan una altura menor («a la altura del pecho»: `banda-press-pecho-sentado` y `flexiones-pared`) y los de brazos colgando o en reposo.
  - También `circulos-pierna-lado-suelo`: la mano se apoya junto al pecho, sin separar el brazo.
- **Ningún ejercicio publicado cambia.**
- **Disponibilidad** (`disponibilidad.mjs --escenario`, modo auditoría con borradores, v0.3.0 sobre `fcb38be` con los cambios sin confirmar): `brazo_arriba` pasa de 186 a 163. Las combinaciones de R9.1 no cambian. En la app publicada no cambia nada.
