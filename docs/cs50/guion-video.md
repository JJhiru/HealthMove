# CS50x final project video: script and shot list

Target length: about 2:50 (the limit is 3:00). About 400 words of voiceover at a calm pace. Times are approximate; if you run long, shorten section 4, never the demo.

Before recording:
- use a clean profile with no real personal data;
- make sure the app is installed on the phone (or open in a phone-sized browser window);
- have the editor open on `public/js/motor.js` and a terminal ready with `npm test`.

---

## 0. Title card (0:00–0:08)

**On screen (mandatory, required by CS50):**

> **HealthMove**
> <Your full name>
> GitHub: JJhiru · edX: <your edX username>
> <City>, <Country>
> Recorded on <date>

**Voiceover:**
"Hi, I'm <name>, and this is HealthMove, my final project for CS50x."

## 1. The problem (0:08–0:30)

**Shot:** the home screen of the app.

"Most exercise apps assume you can do any movement, and leave it to you to skip what you can't. But if you can only exercise sitting down, or you can't raise your arm above your shoulder, or closing your hand is hard, that's not a small detail. HealthMove works the other way around: you tell it what you need to avoid, and it only gives you exercises that don't require it."

## 2. Demo: the profile (0:30–1:05)

**Shots:**
1. Tap "start" and go through the questionnaire. Pick «Solo puedo hacer ejercicio en una silla o silla de ruedas», then in arms tick «No puedo, o me cuesta, levantar el brazo por encima del hombro» and in hands «Me cuesta cerrar la mano o sujetar objetos».
2. The equipment screen: tick "chair" and "towel".
3. Choose 15 minutes.

"The profile has six short sections: mobility, arms, hands, legs, back and other indications. I'll say I can only exercise sitting down, I shouldn't raise my arms above the shoulder, and gripping is hard. Then I choose what I have at home, a chair and a towel, and how long I want to move: fifteen minutes."

## 3. Demo: the routine (1:05–1:40)

**Shots:**
1. The generated routine: warm-up, main block and cool-down.
2. Open one exercise: the illustration, the instructions and, at the bottom, the source (for example, NHS).
3. Start the player for a few seconds, with its timer.

"HealthMove builds a routine with a warm-up, a main block and a cool-down. Every exercise has an illustration, simple instructions, and the public source it comes from, mostly NHS trusts. Then a player guides me through the session, and the routine is saved in a local history."

## 4. Safety: when it says no (1:40–1:55)

**Shot:** go back to "Other indications" and tick «Tengo otra indicación que no aparece aquí» ("I have another indication that isn't listed"). A notice appears: «No podremos generar una rutina…».

"And if I have a medical indication HealthMove can't represent, it refuses to build a routine and sends me to my health professional, instead of guessing. The app would rather say no than offer something unsafe."

(Checked in the engine on 2026-10-25: even with almost every restriction ticked there is still a sitting routine, so this option is the clear way to show the refusal.)

## 5. How it works (1:55–2:30)

**Shots:**
1. `motor.js` in the editor, scrolled to the compatibility check.
2. A slice of `catalogo.json` showing one exercise with its 16 demand labels.
3. The phone in airplane mode, opening the app.

"Under the hood there's no AI deciding anything. Every one of the 225 exercises is labelled with the same 16 demands: does the hand go above the shoulder, does the knee bend more than 90 degrees, do you need to grip. Your answers become demands to avoid, and a rule engine filters the catalog. Rules can be tested and explained, which I couldn't guarantee with a language model. It's a PWA with no backend: your data never leaves the phone, and it works offline, here in airplane mode. The illustrations are SVG, generated from joint angles."

## 6. What I'm proudest of (2:30–2:50)

**Shots:**
1. `docs/auditoria-catalogo/registro.md`, scrolled to "Aprobaciones del desarrollador".
2. The terminal running `npm test`, ending with "pass 210, fail 0".

"Because these labels are safety data, I wrote an audit protocol and checked every exercise against its original source: when in doubt, a demand is marked as required. 213 exercises are approved so far, and 210 automated tests include one that generates 400 random profiles and checks no routine ever breaks a restriction. HealthMove isn't medical advice. It's a careful way to keep moving. Thanks for watching!"

---

## Images to have ready

| # | Image | Where it comes from | Used in |
|---|---|---|---|
| 1 | Title card with the mandatory data | A slide, or text over the home screen | 0 |
| 2 | Home screen | The app | 1 |
| 3 | Questionnaire sections (positions, arms, hands) | The app | 2 |
| 4 | Equipment and duration | The app | 2 |
| 5 | Generated routine (three blocks) | The app | 3 |
| 6 | One exercise with illustration and source | The app | 3 |
| 7 | Player with timer | The app | 3 |
| 8 | The "other indication" notice: «No podremos generar una rutina» | The app | 4 |
| 9 | `motor.js`, compatibility check | Editor | 5 |
| 10 | One exercise in `catalogo.json` with its 16 labels | Editor | 5 |
| 11 | Phone in airplane mode opening the app | Phone recording | 5 |
| 12 | `registro.md`, the approvals section | Editor or GitHub | 6 |
| 13 | `npm test` output | Terminal | 6 |

Optional, if you have a few seconds left: a before-and-after illustration fix (for example, the hamstring stretch with the legs the right way round), to show that the illustrations were checked too.

## Checklist after recording

- The video is at most 3:00 long.
- The title card shows all six items.
- It's uploaded to YouTube as **unlisted**, not private.
- The URL replaces `<URL_DEL_VIDEO>` in `README.md`.
