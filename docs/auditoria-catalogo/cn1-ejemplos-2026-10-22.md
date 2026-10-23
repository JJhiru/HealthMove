# CN-1 · Ejemplos que se repiten para `brazo_sobre_hombro`

> **Resuelto el 2026-10-22 (P25).** La solución, revisada con DeepSeek (C9), está en `deepseek/analisis-claude/fase-08-cn1.md` y en la especificación §4. Este documento queda como propuesta de partida. Las frases «más allá de la horizontal» y «como si la persona estuviera de pie» del apartado 3 se **retiraron**. DeepSeek corrigió tres clasificaciones: `deslizar-toalla-pared` es A, `respiracion-lado-brazo-adelante` es F y `estiramiento-triceps` es B.

> **Documento de trabajo para la decisión del desarrollador sobre CN-1** (`registro.md`, «Casos no contemplados»). No es una fuente de autoridad ni cambia el catálogo. Si choca con `protocolo.md` o `registro.md`, mandan ellos.
>
> Preparado el 2026-10-22 con el catálogo v0.3.0 de `desarrollo-v1`. Los valores y las instrucciones se han copiado del catálogo. **Los ejercicios en `borrador` no se han auditado**: su valor actual puede estar mal por otros motivos.

## 1. Por qué «por encima del hombro» no basta

En la conversación se entiende: subir el brazo hacia el techo. Para ese caso, la definición de la especificación (§4: «codo **o mano** por encima de la altura del hombro») y el texto de la opción del perfil («No puedo, o me cuesta, levantar el brazo por encima del hombro») dicen lo mismo.

Pero hay **seis situaciones que se repiten** en el catálogo en las que la frase no decide por sí sola. En tres de ellas, ejercicios con el mismo movimiento tienen hoy valores distintos.

## 2. Las seis situaciones

### A. El brazo sube hacia el techo · sin dudas

Las dos lecturas dan `true`, y el catálogo es coherente.

| Ejercicio | Estado | Texto | Valor |
|---|---|---|---|
| `elevacion-brazo-sentado` | publicado | «Con el brazo estirado, súbelo despacio hacia el techo…» | `true` |
| `inclinacion-lateral-brazo-arriba` | publicado | «Sube el brazo izquierdo por encima de la cabeza…» | `true` |
| `press-encima-cabeza-sentado` | borrador | «Empuja los brazos hacia arriba hasta estirar los codos…» | `true` |
| `elevacion-brazos-tumbado` | borrador | «Sube un brazo por encima de la cabeza.» | `true` |

### B. La mano llega al hombro al doblar el codo, con el codo abajo · **incoherente**

Es el núcleo de CN-1. Se repite en 5 ejercicios: **uno está en `true` y cuatro en `false`**.

| Ejercicio | Estado | Texto | Valor |
|---|---|---|---|
| `curl-biceps-sentado` | publicado | «Dobla el codo despacio llevando el peso hacia el hombro, con el codo pegado al costado.» | `true` (la foto de la fuente muestra la botella a la altura de la boca) |
| `banda-curl-sentado` | borrador | «Sube los puños hacia los hombros…» | `false` |
| `flexion-codo-tumbado` | borrador | «Dobla el codo llevando la mano hacia el hombro, con el codo pegado al cuerpo.» | `false` |
| `banda-flexion-codo-tumbado` | borrador | «Dobla el codo contra la banda y vuelve a estirarlo.» | `false` |
| `talones-flexion-codo-sentado` | borrador | «A la vez, dobla el codo del brazo contrario.» | `false` |

**Lo que hay que decidir:** si una mano que llega a la altura del hombro **solo porque se dobla el codo** cuenta. Con la definición literal, sí (y habría que pasar los cuatro a `true` si su fuente lo confirma). Con la lectura de la opción («levantar el brazo»), no, y `curl-biceps-sentado` volvería a `false`.

### C. El brazo sube **hasta** la altura del hombro, no más · coherente, pero en el límite

La definición dice «por encima», así que «a la altura» da `false`. El catálogo lo aplica así.

| Ejercicio | Estado | Texto | Valor |
|---|---|---|---|
| `elevaciones-laterales-botella` | borrador | «Sube los brazos por los lados, con los codos estirados, hasta la altura de los hombros.» | `false` |
| `banda-elevaciones-laterales-sentado` | borrador | «…sube los brazos por los lados hasta casi la altura de los hombros.» | `false` |
| `estiramiento-espalda-alta-sentado` | borrador | «Estira los brazos a la altura de los hombros…» | `false` |
| `abrir-pierna-brazo-pared` | borrador | «…mientras subes ese brazo hasta la altura del hombro.» | `false` |
| `respiracion-lado-brazo-adelante` | borrador | «…estira el brazo de arriba hacia delante, como para tocar la pared de enfrente.» | `false` |
| `deslizar-toalla-pared` | borrador | «…una toalla bajo la mano, a la altura del hombro. Desliza la toalla hacia arriba…» | `true` (empieza a la altura y sube) |

**Lo que hay que decidir:** si «a la altura del hombro» basta para `false`. La palabra «encima» dice que sí. La duda es si quien elige «me cuesta levantar el brazo por encima del hombro» espera que se le ofrezcan ejercicios que llegan justo hasta ahí. Es una pregunta para un profesional; mientras tanto, el criterio conservador del proyecto (P9, P10, P14) se inclinaría por `true`.

### D. La mano a la altura de la cara, con el codo por debajo del hombro · coherente

La definición literal dice «o mano», y el catálogo la aplica.

| Ejercicio | Estado | Texto | Valor |
|---|---|---|---|
| `boxeo-circulos-alto` | publicado | «Cierra las dos manos en puño y súbelas a la altura de la nariz.» | `true` |
| `boxeo-circulos-pecho` | publicado | «…súbelas a la altura del pecho.» | `false` |
| `pulgar-dedos` | publicado | «Extiende un brazo separado del cuerpo…» (la foto muestra la mano por encima del hombro) | `true`, conservador |

Si se decide B a favor de «levantar el brazo», D también cambia: `boxeo-circulos-alto` y `pulgar-dedos` pasarían a depender de la altura del codo, no de la mano.

### E. Las manos en los hombros y los codos se mueven · depende de hasta dónde suba el codo

| Ejercicio | Estado | Texto | Valor |
|---|---|---|---|
| `marcha-circulos-codos-sentado` | borrador | «Pon las manos sobre los hombros. Dibuja círculos hacia atrás con los codos…» | `true` |
| `estiramiento-triceps` | borrador | «Dobla un brazo y lleva la mano por encima del hombro hacia el omóplato…» | `true` |
| `estiramiento-hombro-cruzado` | borrador | «Pon una mano sobre el hombro contrario con el codo pegado al pecho.» | `false` |
| `giro-tronco-sentado` | borrador | «Cruza los brazos sobre el pecho y lleva cada mano al hombro contrario.» | `false` |

Aquí la mano está en el hombro (no por encima) y lo que decide es el codo. Hace falta una frase de referencia para «el codo a la altura del hombro» parecida a la de C.

### F. Tumbado o boca abajo · «la altura del hombro» deja de tener sentido · **incoherente**

Con el cuerpo horizontal, casi nada queda «por encima» del hombro en altura. Lo que cambia es el ángulo del brazo respecto al tronco.

| Ejercicio | Estado | Texto | Valor |
|---|---|---|---|
| `elevar-brazo-boca-abajo` | borrador | «…los brazos estirados hacia delante… Levanta un brazo del suelo…» | `true` |
| `elevacion-pasiva-brazo-tumbado` | borrador | «Con la ayuda de esa mano, súbelo por encima de la cabeza…» | `true` (el brazo lo sube la otra mano) |
| `cuadriceps-lado-suelo` | borrador | «Túmbate de lado con las piernas estiradas y la cabeza apoyada en el brazo.» | `false` |
| `extension-cadera-boca-abajo` | borrador | «Túmbate boca abajo con la frente apoyada sobre las manos.» | `false` |
| `elevacion-lateral-botella-tumbado` | borrador | «Separa el brazo hacia el lado, con el codo estirado y apoyado en la cama.» | `false` (el texto no dice hasta dónde) |

`cuadriceps-lado-suelo` y `extension-cadera-boca-abajo` dejan el brazo por encima de la cabeza (en ángulo) **como postura de apoyo**, no como movimiento, y están en `false`. `elevar-brazo-boca-abajo` hace algo parecido y está en `true`.

## 3. Propuesta de definición para decidir

Ninguna de estas frases está aplicada. Siguen el método de Q3 (P5): una frase de referencia por umbral, sin cifras que la fuente no dé.

> **`brazo_sobre_hombro`** se marca si, en cualquier momento del ejercicio (también en la postura de partida o de apoyo):
> 1. **(A)** el brazo se separa del tronco más allá de la horizontal, sea hacia delante, hacia el lado o por encima de la cabeza;
> 2. **(F)** tumbado o boca abajo, se mide igual, por el ángulo del brazo respecto al tronco, como si la persona estuviera de pie. «Por encima de la cabeza» tumbado cuenta. Que el brazo lo suba la otra mano no cambia nada;
> 3. **(C y E)** «hasta la altura del hombro» o «el codo a la altura del hombro»: **[elegir]** cuenta / no cuenta;
> 4. **(B y D)** la mano por encima del hombro solo por doblar el codo, con el codo abajo: **[elegir]** cuenta (definición literal actual) / no cuenta (lectura de la opción).

Con eso, el texto de la opción del perfil puede seguir siendo «levantar el brazo por encima del hombro», que se entiende, y la definición técnica cubre los casos de la tabla.

## 4. Qué cambiaría según lo que decidas

| Decisión | Ejercicios que habría que revisar (con su fuente) |
|---|---|
| F como en la propuesta | `cuadriceps-lado-suelo`, `extension-cadera-boca-abajo` y `elevacion-lateral-botella-tumbado`, posiblemente a `true`. Ninguno publicado |
| C y E «cuenta» | Los 5 de C en `false` y, en E, `estiramiento-hombro-cruzado`. Ninguno publicado |
| B y D «cuenta» (lo actual) | Los 4 de B en `false`, al auditarlos. Ninguno publicado |
| B y D «no cuenta» | `curl-biceps-sentado` vuelve a `false`, y `boxeo-circulos-alto` y `pulgar-dedos` se revisan por la altura del codo. **Los tres están publicados** |

Esta lista sale de buscar texto en las instrucciones (107 ejercicios mencionan el brazo, la mano o el codo junto a «hombro», «cabeza», «techo», «altura», «arriba» o «levanta»). No es una auditoría: puede haber casos que no se hayan encontrado y valores que cambien al abrir la fuente.
