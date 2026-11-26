---
title: "Note Improvement Tracker – 02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/05 Simultaneity and the synchronisation of time"
---

> [!TLDR]
> This note tracks the review of the 9 notes in `02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/05 Simultaneity and the synchronisation of time`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 6 possible errors or notation conflicts. 6 of them are verified (6 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3540|N3540]] 05.01 Introduction: "the average temperature is the same everywhere in the Universe to very high accuracy (of a part in a million)": CMB anisotropies are about $10^{-5}$ (and the observer's dipole is about $10^{-3}$). Correct the figure, as in 02.06. **Fixed:** Changed to about a part in 10⁵ after removal of the observer dipole of about 10⁻³
- [[#N3542|N3542]] 05.03 Einstein's Discussion of Simultaneity in the STR: "the light signals from A and B will reach the observer O′ simultaneously, after the delay $\mechanical{L}/(2\mechanical{c})$" is not what special relativity predicts. The meeting of the two rays is one spacetime event on O's worldline, which all frames agree on. In O′'s frame the two emissions are not simultaneous (they differ by $\gamma\mechanical{v}\mechanical{L}/\mechanical{c}^2$), so O′ receives the B flash first. The "catastrophe" paragraph follows from assuming that "when the events occurred" is the same in both frames. **Fixed:** Source argument retained as the author's thesis; added a "Prediction of the STR" note callout giving the γvL/c² emission difference and that O′ receives B first; added γ to table
- [[#N3543|N3543]] 05.04 Einstein's Fallacy on the Relativity of Simultaneity: "The light signals that were emitted when O′ was at the midpoint M′ ... will necessarily reach O′ simultaneously" assumes that the emissions are simultaneous in O′'s frame. For flashes simultaneous on the platform, the Lorentz transformation gives a train-frame emission difference $\gamma\mechanical{v}\mechanical{L}/\mechanical{c}^2$, with B earlier. Einstein's conclusion therefore follows within the light postulate, with no inconsistency, and the boxed note "Einstein's light hypothesis is inconsistent" states a refuted claim as fact. **Fixed:** Relabelled the box as "Source claim" and appended the Lorentz-transformation rebuttal (train-frame emission difference γvL/c², B earlier); added L and γ to table
- [[#N3543|N3543]] 05.04 Einstein's Fallacy on the Relativity of Simultaneity: The claim that light reaching distant walls is "untestable and unverifiable" ignores that each wall can carry a local detector and clock, so that each arrival is a recorded event. What is frame-dependent is only the time order of two spacelike-separated events, which is the content of the relativity of simultaneity. **Fixed:** Added to Interpretation and checks that local detectors and clocks record each arrival and only the time order of spacelike events is frame-dependent
- [[#N3544|N3544]] 05.05 H. Bergson's Critique of Einstein's Relativity of Simultaneity: "there is not a single written account from anybody that counters and disproves Bergson's ... demonstration" is false. Jean Becquerel and André Metz published rebuttals in 1922–24, and Bergson answered Becquerel in the appendices added to the second edition of Durée et simultanéité (1923). Mention this exchange. **Fixed:** Replaced the sentence with the Becquerel and Metz rebuttals (1922–1924) and Bergson's 1923 second-edition appendices; attributed the "flawless" judgment to the source
- [[#N3545|N3545]] 05.06 The Synchronisation of Time: "the midpoint of the two-way time delay is determined as $t_{A0}=(t_{A2}-t_{A1})/2$" defines half the round-trip delay, not a midpoint time. The midpoint instant is $(t_{A1}+t_{A2})/2$, as in Eq. (5.3). Rename $t_{A0}$, for example $\tau=(t_{A2}-t_{A1})/2$, in the text and the table. **Fixed:** Renamed to τ described as half of the two-way delay in text and table

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3538 | [[05 References\|05 References]] | Analyzed | low | no | no | [[#N3538\|View]] |
| N3539 | [[05.00 Simultaneity and the Synchronisation of Time\|05.00 Simultaneity and the Synchronisation of Time]] | Analyzed | low | no | no | [[#N3539\|View]] |
| N3540 | [[05.01 Introduction\|05.01 Introduction]] | Analyzed | low | no | no | [[#N3540\|View]] |
| N3541 | [[05.02 Galilean Simultaneity\|05.02 Galilean Simultaneity]] | Analyzed | medium | yes | yes | [[#N3541\|View]] |
| N3542 | [[05.03 Einstein's Discussion of Simultaneity in the STR\|05.03 Einstein's Discussion of Simultaneity in the STR]] | Analyzed | high | yes | yes | [[#N3542\|View]] |
| N3543 | [[05.04 Einstein's Fallacy on the Relativity of Simultaneity\|05.04 Einstein's Fallacy on the Relativity of Simultaneity]] | Analyzed | high | yes | yes | [[#N3543\|View]] |
| N3544 | [[05.05 H. Bergson's Critique of Einstein's Relativity of Simultaneity\|05.05 H. Bergson's Critique of Einstein's Relativity of Simultaneity]] | Analyzed | medium | no | no | [[#N3544\|View]] |
| N3545 | [[05.06 The Synchronisation of Time\|05.06 The Synchronisation of Time]] | Analyzed | medium | yes | yes | [[#N3545\|View]] |
| N3546 | [[05.07 Summary\|05.07 Summary]] | Analyzed | low | no | no | [[#N3546\|View]] |

## Suggestions

### N3538

Note: [[05 References|05 References]]  
Priority: low · Graph: no · Manim: no

A reference list; no change needed.

- [Links] For reference 3, add to the callout that the correct volume of Poincaré's Comptes Rendus paper is 140, as in the Chapter 3 list.

### N3539

Note: [[05.00 Simultaneity and the Synchronisation of Time|05.00 Simultaneity and the Synchronisation of Time]]  
Priority: low · Graph: no · Manim: no

A short chapter introduction with a fair interpretation callout; no change needed.

- [Links] Add the list of chapter sub-notes (05.01–05.07) for navigation.

### N3540

Note: [[05.01 Introduction|05.01 Introduction]]  
Priority: low · Graph: no · Manim: no

A clear introduction to simultaneity; one numerical claim about the CMB is off.

- [Correctness] "the average temperature is the same everywhere in the Universe to very high accuracy (of a part in a million)": CMB anisotropies are about $10^{-5}$ (and the observer's dipole is about $10^{-3}$). Correct the figure, as in 02.06.
- [Example] Give the size of the first-order term: for Earth's orbit ($\mechanical{v}=30\,\unit{km/s}$) and clocks 1000 km apart, $\mechanical{v}\mechanical{x}/\mechanical{c}^2\approx0.33\,\unit{ns}$. This is relevant for GPS, which needs better than 10 ns.

### N3541

Note: [[05.02 Galilean Simultaneity|05.02 Galilean Simultaneity]]  
Priority: medium · Graph: yes · Manim: yes

Eq. (5.1) and (5.2) are correct and the Galilean case is explained well, but the note is long and has minor typos.

- [Simplify] Split the long final paragraph into (i) the result of Eq. (5.2), (ii) the author's interpretation of the local time as hiding Galilean propagation, and (iii) the lead-in to Einstein's case. Fix the typos "need not necessary be" and "an observers O′".
- [Example] Give a sound example: $\mechanical{L}=340\,\unit{m}$, $\mechanical{c}_w=340\,\unit{m/s}$, observer at $\mechanical{v}=20\,\unit{m/s}$, which gives $\Delta t\approx-59\,\unit{ms}$ from Eq. (5.1). Compare with the first-order value $-\mechanical{L}\mechanical{v}/\mechanical{c}_w^2=-58.8\,\unit{ms}$.
- [Graph] Plot $|\Delta t|\,\mechanical{c}_w/\mechanical{L}$ against $\mechanical{v}/\mechanical{c}_w\in[0,0.9]$ for the exact Eq. (5.1), its first-order approximation, and the contracted form Eq. (5.2).
- [Manim] Animate two sound pulses from A and B spreading in still air, with one observer at rest and one moving. The moving observer meets the B pulse first, and both clocks show their reception times.

### N3542

Note: [[05.03 Einstein's Discussion of Simultaneity in the STR|05.03 Einstein's Discussion of Simultaneity in the STR]]  
Priority: high · Graph: yes · Manim: yes

The lecture's central STR deduction contradicts the invariance of event coincidence, and only the short interpretation section corrects it.

- [Correctness] "the light signals from A and B will reach the observer O′ simultaneously, after the delay $\mechanical{L}/(2\mechanical{c})$" is not what special relativity predicts. The meeting of the two rays is one spacetime event on O's worldline, which all frames agree on. In O′'s frame the two emissions are not simultaneous (they differ by $\gamma\mechanical{v}\mechanical{L}/\mechanical{c}^2$), so O′ receives the B flash first. The "catastrophe" paragraph follows from assuming that "when the events occurred" is the same in both frames.
- [Structure] Put a visible callout at the start of the lecture account. It should say that the note presents the author's contested argument and that standard special relativity resolves it through the relativity of simultaneity of the emission events. Readers should not have to reach "Interpretation and checks" to find this.
- [Graph] Add a Minkowski diagram ($\mechanical{x}$, $\mechanical{c}t$, β = 0.5): emission events at $(\pm\mechanical{L}/2,0)$, light lines meeting on O's worldline at $\mechanical{c}t=\mechanical{L}/2$, and O′'s worldline $\mechanical{x}=\beta\mechanical{c}t$ crossing the B ray first. Overlay the $t'=0$ line to show that the emissions are not simultaneous for O′.
- [Manim] Animate the same flashes twice, in the platform frame and in the train frame, with Lorentz-transformed event times. In both, the B ray reaches O′ before the A ray, so the arrival order agrees.

### N3543

Note: [[05.04 Einstein's Fallacy on the Relativity of Simultaneity|05.04 Einstein's Fallacy on the Relativity of Simultaneity]]  
Priority: high · Graph: yes · Manim: yes

The note states as proven an inconsistency in special relativity that rests on a frame error. The interpretation section corrects it, but the main text does not.

- [Correctness] "The light signals that were emitted when O′ was at the midpoint M′ ... will necessarily reach O′ simultaneously" assumes that the emissions are simultaneous in O′'s frame. For flashes simultaneous on the platform, the Lorentz transformation gives a train-frame emission difference $\gamma\mechanical{v}\mechanical{L}/\mechanical{c}^2$, with B earlier. Einstein's conclusion therefore follows within the light postulate, with no inconsistency, and the boxed note "Einstein's light hypothesis is inconsistent" states a refuted claim as fact.
- [Correctness] The claim that light reaching distant walls is "untestable and unverifiable" ignores that each wall can carry a local detector and clock, so that each arrival is a recorded event. What is frame-dependent is only the time order of two spacelike-separated events, which is the content of the relativity of simultaneity.
- [Structure] The title states the source's claim as fact. Keep the title for the source structure, but add a top callout stating that this is the author's contested reading and that the standard analysis finds no fallacy.
- [Graph] Add a spacetime diagram with platform and train axes (β = 0.6): the two flashes on the platform $t=0$ line, their positions on the train's $t'$ axis, and the reception events on O and O′. This shows directly that the emissions are not simultaneous in the train frame.
- [Manim] Animate Fig. 5.5 (light from the room centre to both walls) in both frames, with detectors at the walls that stamp local clock times. Show that each frame's synchronised clocks record the stamps consistently.

### N3544

Note: [[05.05 H. Bergson's Critique of Einstein's Relativity of Simultaneity|05.05 H. Bergson's Critique of Einstein's Relativity of Simultaneity]]  
Priority: medium · Graph: no · Manim: no

A clear historical account, but it presents Bergson's argument as unrefuted, which is historically incorrect.

- [Correctness] "there is not a single written account from anybody that counters and disproves Bergson's ... demonstration" is false. Jean Becquerel and André Metz published rebuttals in 1922–24, and Bergson answered Becquerel in the appendices added to the second edition of Durée et simultanéité (1923). Mention this exchange.
- [Structure] Mark the boxed note ("logically and physically impeccable") as the author's view, and link to the interpretation in \[\[05.04 Einstein's Fallacy on the Relativity of Simultaneity\]\], which explains where standard SR differs.
- [Intuition] Distinguish Bergson's philosophical concern (lived duration and the reality of multiple times) from the physical claim about signal arrivals, as the "Physical question" section starts to do. One sentence in the lecture section would prevent the two from being conflated.

### N3545

Note: [[05.06 The Synchronisation of Time|05.06 The Synchronisation of Time]]  
Priority: medium · Graph: yes · Manim: yes

A good treatment of two-way and clock-transport synchronisation, with correct transport algebra (5.6); one quantity is mislabelled and the conventionality framework is missing.

- [Correctness] "the midpoint of the two-way time delay is determined as $t_{A0}=(t_{A2}-t_{A1})/2$" defines half the round-trip delay, not a midpoint time. The midpoint instant is $(t_{A1}+t_{A2})/2$, as in Eq. (5.3). Rename $t_{A0}$, for example $\tau=(t_{A2}-t_{A1})/2$, in the text and the table.
- [Intuition] Introduce the Reichenbach ε (Einstein's convention is ε = 1/2) and state that slow clock transport reproduces ε = 1/2 in any inertial frame. This is the standard counterpart of the note's Eq. (5.6) result, and it shows why transport cannot decide the one-way speed.
- [Example] Give numbers for Eq. (5.6): $\mechanical{u}=370\,\unit{km/s}$ (CMB dipole) and $\mechanical{L}=1000\,\unit{km}$ give a transport gap $\mechanical{L}\mechanical{u}/\mechanical{c}^2\approx4.1\,\unit{ns}$. Compare this with modern time-transfer precision.
- [Graph] Extend the Fig. 5.6(b) diagram with a third, slow-transport worldline from A to B, and show that its arrival reading coincides with the ε = 1/2 reflection time.
- [Manim] Animate the two-way protocol: the pulse goes from A to B and back, and B's clock is set to the midpoint reading. Then repeat with an assumed preferred-frame drift to show the hidden offset $\mechanical{L}\mechanical{v}/\mechanical{c}^2$.

### N3546

Note: [[05.07 Summary|05.07 Summary]]  
Priority: low · Graph: no · Manim: no

The chapter summary restates the contested "fatal inconsistency" as established fact; otherwise it is clear.

- [Structure] Add one sentence or a callout saying that the claimed inconsistency is the author's thesis, and that standard SR attributes the different arrival order to non-simultaneous emissions in the moving frame. Link to the interpretation sections of \[\[05.03 Einstein's Discussion of Simultaneity in the STR\]\] and \[\[05.04 Einstein's Fallacy on the Relativity of Simultaneity\]\].
- [Links] Link each summarised step to notes 05.02–05.06.
