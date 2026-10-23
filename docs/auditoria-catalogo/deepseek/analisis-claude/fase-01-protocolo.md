# Análisis de Claude · fase-01-protocolo

> **Esto es un análisis de Claude, no de DeepSeek.** No modifica ni sustituye la respuesta de DeepSeek, que está literal en:
> - `../ejecuciones/20261019T001226Z-fase-01-protocolo/respuesta.md` (bloque 1, truncado);
> - `../ejecuciones/20261019T001508Z-fase-01-protocolo-bloque2/respuesta.md` (bloque 2, completo).
>
> Las verificaciones se hicieron el 2026-10-19 con el catálogo `72fda34f`, en memoria y sin modificar nada.

## 1. Integridad de la respuesta

- **Hashes:** el SHA-256 de cada `respuesta.md` coincide con su `metadatos.json` (bloque 1, `6f1f596b…`; bloque 2, `316aa112…`). Ambos tienen `literalVerificado: true`: el archivo guardado es idéntico al contenido del cuerpo HTTP recibido.
- **Truncado:** el bloque 1 se cortó por `max_tokens` (16 000 de salida, el máximo configurado). El bloque 2 se pidió reenviando la conversación exacta con la orden fija de `ORDEN_CONTINUAR` (`scripts/ia/auditoria-documental.mjs`).
- **Unión:** la continuación encaja con el corte, pero el bloque 1 deja una viñeta vacía (`-`) en su última línea. No se ha unido ni editado nada.

## 2. Errores de hecho en la respuesta de DeepSeek (verificados)

| Dónde | Lo que dice DeepSeek | Lo que hay en el catálogo |
|---|---|---|
| DS-25, DS-39 y la hipótesis A | `circulos-cadera-pie` tiene `ambos_brazos: false` | **`true`**. Es el único ejercicio con «sujétate con las dos manos» etiquetado `true` |
| DS-25 | `tandem-apoyo` está entre los que piden «las dos manos» | La instrucción es «sujétate con una mano». El propio DS-39 lo reconoce |
| DS-25 | `mini-sentadillas` y `elevacion-talones-apoyo` piden «las dos manos» | Dicen «las manos en el respaldo»: plural, sin número. Es un caso indeterminado, no explícito |
| DS-39 | `estiramiento-flexor-cadera-pie`, `-aductores-pie` e `-isquios-pie` tienen «apoyo bilateral» | Dicen «Sujétate al respaldo», sin número de manos |
| Inicio | «He revisado los ocho bloques» | Se enviaron **nueve** bloques: lo comprueba `metadatos.json` |

**Recuento correcto** del caso «la instrucción exige las dos manos y la etiqueta es `false`»: **4** ejercicios (`elevar-puntas-pies-apoyo`, `flexion-rodilla-pie-apoyo`, `paso-atras-apoyo` y `puntillas-talones-apoyo`). Más los de «una botella o un extremo en cada mano» que señala DeepSeek en DS-48 a DS-50: `banda-sentarse-levantarse`, `elevaciones-laterales-botella` y `press-hombros-botella-pie`.

## 3. Hallazgos confirmados en el código

- **DS-07 y la hipótesis D:** `public/js/validacion.js:95-96` solo exige `revisado_por`. No se comprueba `fecha_revision` en ninguna parte.
- **DS-08, DS-24 y la hipótesis C:**
  - el motor exige todas las posiciones (`motor.js`, `motivosIncompatibilidad`);
  - los 8 ejercicios con `sentado,de_pie` quedan excluidos para «solo sentado»;
  - en 3 hay secuencia (`sentarse_levantarse: true`) y en 5 no;
  - `manos-espalda-codo-contrario` dice explícitamente «Siéntate en el borde de la silla o ponte de pie».
  - Combinaciones en todo el catálogo: `sentado` 88, `sentado,de_pie` 8, `de_pie` 42, `tumbado` 61, `suelo` 21.
- **DS-28:** el validador solo comprueba `impacto` (`validacion.js:77`). Las demás exclusiones de la especificación §4 no se comprueban.
- **DS-03:** `grep -c "\[conservadora\]"` en el catálogo da 0.
- **DS-12:** la cita «el tronco un poco hacia delante» de `sentarse-levantarse` es exacta.
- **DS-47:** los tres ejercicios proceden de fuentes distintas: NHS, Later Life Training (Otago) y Worcestershire County Council.

## 4. Hallazgos que la verificación agrava o matiza

- **DS-33 y DS-38, agravado.** DeepSeek considera de gravedad baja que no se detecten ciclos, y da por implementado que una variante no coincide con su original.
  - Hay **3 cadenas de dos niveles** en el catálogo: `marcha-apertura-brazos-sentado → marcha-sentado-manos-cadera → marcha-sentado-sujetandose`, `abdomen-boca-abajo → abdomen-profundo-tumbado → abdomen-sentado` y `flexor-cadera-tumbado → abrazar-rodilla-tumbado → rodilla-al-pecho-tumbado`.
  - `familia(ej) = ej.variante_de || ej.id` (`motor.js:143`) mira **un solo nivel**: para la primera cadena da `marcha-sentado-manos-cadera` en la variante final y `marcha-sentado-sujetandose` en la base.
  - **Inferencia:** por el código, el primero y el último de cada cadena pueden coincidir en una rutina, lo que contradice la especificación §3. **No se ha generado una rutina que lo demuestre**: hace falta un test.
- **DS-26, matizado.** DeepSeek trata el `agarre: false` de los ejercicios de pared como posibles falsos positivos «si se aplica R2.1 sin matiz».
  - No tiene en cuenta el fundamento **estructural** del protocolo (§2.3): una pared no puede agarrarse.
  - Para «apoya las manos/palmas en la pared», el `false` tiene un fundamento que no depende de Q2.
  - Siguen abiertos los casos del respaldo, que sí se puede agarrar.
- **DS-27, matizado.** Incluye `elevaciones-frontales-botella`, `elevaciones-laterales-botella`, `press-hombros-botella-pie` y `banda-elevar-brazos-pie` entre los ejercicios con «apoyo opcional o contingencia». Sus instrucciones no mencionan ningún apoyo. El hallazgo es válido para `sentarse-levantarse`, `de-pie-mano-preparada` y `arquear-espalda-pie`, no para esos cuatro.
- **DS-76, matizado.** DeepSeek llama «afirmación de seguridad» a la frase propuesta «Que sea compatible no garantiza que sea seguro para ti». Es un descargo de responsabilidad, no una afirmación de seguridad. Su recomendación (pasar por `healthmove-safety-reviewer` y, si se presenta como orientación, por un profesional) coincide con el protocolo §8.4.

## 5. Lo que no se ha podido verificar

- **Si la fuente describe cada una de las 35 variantes** (DS-44, DS-70): 27 citan una URL distinta de la de su base, pero eso no prueba que la fuente describa la variante.
- **Lo que dicen las fuentes originales** sobre el apoyo y la inclinación (DS-22, DS-27, DS-52 y DS-71 a DS-73).
- **El cargo real de las dos llamadas:** DeepSeek no lo devuelve.

## 6. Pruebas técnicas que propone esta revisión (sin implementar)

1. **Test de familias:** con un catálogo ficticio con una cadena A → B → C, `generarRutina` no debe incluir A y C en la misma rutina. Hoy, según el código, fallaría (DS-33).
2. **Test de V7:** un ejercicio aprobado sin `fecha_revision` debe dar error (DS-65).
3. **Avisos de coherencia entre instrucción y etiqueta** en `scripts/auditoria.mjs`: «dos manos» o «una … en cada mano» con `ambos_brazos: false`; `posiciones` con `sentado` y `de_pie` sin `sentarse_levantarse`.
4. **Reproducir en `scripts/disponibilidad.mjs`** (herramienta aprobada, sin construir) los recuentos 31/20/0 de Q1 y 31/15/4 del hallazgo B.

Ninguno se ha implementado: los cambios en el motor y el validador requieren autorización.
