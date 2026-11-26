---
title: "Note Improvement Tracker – 02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/06 The Equivalence Principles"
---

> [!TLDR]
> This note tracks the review of the 18 notes in `02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/06 The Equivalence Principles`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 16 possible errors or notation conflicts. 16 of them are verified (14 fixed, 1 partly, 1 rejected); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3549|N3549]] 06.01 The Universality of Free Fall: "the UFF is verified ... to the level of 1 part in $10^{13}$–$10^{14}$" is outdated. MICROSCOPE (2022) gives the Eötvös parameter $\eta(\mathrm{Ti,Pt})=(-1.5\pm2.7)\times10^{-15}$. Update the number. **Fixed:** Updated to about 10⁻¹⁵ with MICROSCOPE 2022 η(Ti,Pt)=(-1.5±2.7)×10⁻¹⁵; updated table row and added η
- [[#N3549|N3549]] 06.01 The Universality of Free Fall: "The gravitational mass is the source of a gravitational field; it is the 'charge' of gravity" describes the active gravitational mass, while the WEP and the UFF concern the passive gravitational mass (the coupling to an external field). Distinguish $\mechanical{m}_p$ from $\mechanical{m}_a$, and link to \[\[06.07.04 The Active and the Passive Gravitational Masses\]\]. **Fixed:** Distinguished m_a and m_p, stated that WEP and UFF concern m_p, linked 06.07.04, and made the WEP sentence say passive mass; added table row
- [[#N3550|N3550]] 06.02 The Equivalence of Inertia and Mass - The Weak Equivalence Principle: "the WEP implies that any form of energy is also a source of gravity, with mass $\mechanical{m}_g=\mechanical{m}_i$" is wrong. The WEP equates inertial and passive gravitational mass. That energy also sources gravity is the equality of active and passive mass, which is a separate statement tested by Kreuzer (ref. [21]) and lunar laser ranging. Correct the parenthesis. **Fixed:** Rewrote the parenthesis: WEP equates m_i with passive mass; energy as a source needs active = passive equality, tested by Kreuzer [21] and lunar laser ranging
- [[#N3551|N3551]] 06.03 Galileo's Thought Experiment Proof of the UFF: "Nobody seems to have found any defect in Galileo's proof till now" is incorrect. The argument and its hidden assumptions (for example that speed depends only on weight and that weight is additive) have been analysed at length, for example by J. R. Brown (1991), J. D. Norton (1996) and T. Gendler (1998). Cite this literature or soften the claim. **Fixed:** Replaced with a sentence citing analyses by J. R. Brown (1991), J. D. Norton (1996) and T. Gendler (1998)
- [[#N3552|N3552]] 06.04 Einstein's Equivalence Principle: "the additional apparent force $\mechanical{\mathbf F}=-\mechanical{m}\mechanical{\mathbf a}$, acting opposite to the direction of motion": the inertial force is opposite to the frame's acceleration, not to its velocity. A decelerating rocket gives apparent weight towards its nose. **Fixed:** Changed "direction of motion" to "direction of the frame's acceleration"
- [[#N3552|N3552]] 06.04 Einstein's Equivalence Principle: The physical-quantities table lists $\mechanical{g}'$, which the note never uses. Remove it or use it in the text. **Partly:** Text does not use it, but Fig. 6.2 labels g′ = −a; kept the row and changed its description to reference the Fig. 6.2 label
- [[#N3555|N3555]] 06.07 A Brief Account of Experimental Tests: Eötvös paragraph: the horizontal torque comes from the centrifugal acceleration having a horizontal component relative to the true gravitational pull (the plumb line follows their sum), and the effect scales as $\Omega^2R_E\sin\varphi\cos\varphi$, maximal at $45^\circ$ latitude; Budapest ($47^\circ$) is a mid-latitude site, so "high-latitude location" and "Earth's gravity ... has a small horizontal component" should be corrected. **Fixed:** Changed to mid-latitude (Budapest, 47°); stated that the centrifugal force has a horizontal component relative to the gravitational pull (plumb line follows the sum), scaling as Ω²R_E sinφ cosφ, largest at 45°; added Ω, R_E, φ to the table
- [[#N3555|N3555]] 06.07 A Brief Account of Experimental Tests: "Washington University in Seattle" should be "the University of Washington, Seattle" (Eöt-Wash group); Washington University is in St. Louis. **Fixed:** Changed to "the University of Washington, Seattle, USA (the Eöt-Wash group)"
- [[#N3555|N3555]] 06.07 A Brief Account of Experimental Tests: Sign convention of (6.4): with $a=(m_g/m_i)g$, one gets $\delta a/g=(m_g/m_i)_1-(m_g/m_i)_2\approx-\eta$ as $\eta$ is defined from $m_i/m_g$; either define $\eta$ with $m_g/m_i$ or write $|\eta|=|\delta a|/g$. **Fixed:** /g from a = (m_g/m_i)g and stated that δa/g has the opposite sign to η
- [[#N3557|N3557]] 06.07.02 Laser Ranging to the Moon and the WEP: "precision of a few parts in $10^{14}$": a few millimetres over $3.84\times10^8\,\mathrm{m}$ is $\approx10^{-11}$ ($3\,\mathrm{mm}/3.84\times10^8\,\mathrm{m}=7.8\times10^{-12}$); the interpretation section's "parts in $10^{12}$" should also read "about $10^{-11}$". The $10^{-13}$–$10^{-14}$ figure applies to the inferred differential acceleration $\delta a/g$, not the range. **Fixed:** 3 mm/3.84e8 m = 7.8e-12; changed to "about one part in 10^11" and the interpretation sentence to about 10⁻¹¹, with 10⁻¹³ to 10⁻¹⁴ assigned to δa/g
- [[#N3557|N3557]] 06.07.02 Laser Ranging to the Moon and the WEP: "Lunakhod" should be "Lunokhod". **Fixed:** Changed to "Lunokhod"
- [[#N3558|N3558]] 06.07.03 Tests of the SEP: Symbol clash: the same self-energy appears as $\epsilon_g$ (defined as $GM^2/R$) and $E_g$, and the same mass as $M$ and $m$; use one symbol each, and note that for a uniform sphere $E_g=\tfrac35GM^2/R$, so Earth's actual fraction $\approx4.6\times10^{-10}$ differs from $GM/(Rc^2)=7.0\times10^{-10}$. **Fixed:** Replaced E_g/(mc²) with ε_g/(Mc²) and removed E_g, m from the table; wrote ε_g ≃ GM²/R and added that (6.5) gives 7.0e-10 for Earth while 3/5 and Earth's density structure give about 4.6e-10
- [[#N3560|N3560]] 06.08 The First Applications of the EEP - Prelude to the GTR: Eq. (6.9) with the table entry "clock periods": the lower clock ($S_1$, lower potential) runs slow, so its period seen from $S_2$ is longer and $(T_1-T_2)/\bar T=+gd/c^2$; the printed sign $-gd/c^2$ is correct only if $T_1,T_2$ are elapsed proper-time readings over a common interval. Define $T$ as accumulated readings (and update the table) or flip the sign. **Fixed:** Defined T₁ (lower) and T₂ (upper) as readings accumulated over the same interval, so −gd/c² is correct; updated the note, the interpretation wording, and the table entry
- [[#N3560|N3560]] 06.08 The First Applications of the EEP - Prelude to the GTR: "runs at a smaller rate $\phi/c^2$ relative to a stationary clock in gravity-free space" should read "runs slower by the fraction $|\phi|/c^2$", i.e. $d\tau/dt\approx1+\phi/c^2$ with $\phi<0$. **Fixed:** /c²", with dτ/dt ≈ 1 + φ/c² and φ < 0
- [[#N3560|N3560]] 06.08 The First Applications of the EEP - Prelude to the GTR: The Planck constant is wrapped in \energy{h}; it is an action ($\mathrm{J\,s}$), so use the macro group for action or leave it uncolored as a constant. **Rejected:** The vault has no action group and its reference note Physical constants and SI units uses \energy{h}; the colouring is consistent with vault convention
- [[#N3563|N3563]] 06.11 The Equivalence Principle and the Quantum Theory: "the classical path in a gravitational field $g$ is exactly the same as the classical path in an accelerated frame with acceleration $-a$" contradicts (6.11) and the earlier statement $a=-g$; it should read "with acceleration $a=-g$". **Fixed:** Changed to "with acceleration a = −g", consistent with (6.11)

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3547 | [[06 References\|06 References]] | Analyzed | low | no | no | [[#N3547\|View]] |
| N3548 | [[06.00 The Equivalence Principles\|06.00 The Equivalence Principles]] | Analyzed | low | no | no | [[#N3548\|View]] |
| N3549 | [[06.01 The Universality of Free Fall\|06.01 The Universality of Free Fall]] | Analyzed | medium | yes | no | [[#N3549\|View]] |
| N3550 | [[06.02 The Equivalence of Inertia and Mass - The Weak Equivalence Principle\|06.02 The Equivalence of Inertia and Mass - The Weak Equivalence Principle]] | Analyzed | medium | no | no | [[#N3550\|View]] |
| N3551 | [[06.03 Galileo's Thought Experiment Proof of the UFF\|06.03 Galileo's Thought Experiment Proof of the UFF]] | Analyzed | low | no | yes | [[#N3551\|View]] |
| N3552 | [[06.04 Einstein's Equivalence Principle\|06.04 Einstein's Equivalence Principle]] | Analyzed | low | no | yes | [[#N3552\|View]] |
| N3553 | [[06.05 What Are Inertial Frames\|06.05 What Are Inertial Frames]] | Analyzed | low | no | yes | [[#N3553\|View]] |
| N3554 | [[06.06 A Stronger Equivalence Principle\|06.06 A Stronger Equivalence Principle]] | Analyzed | low | no | no | [[#N3554\|View]] |
| N3555 | [[06.07 A Brief Account of Experimental Tests\|06.07 A Brief Account of Experimental Tests]] | Analyzed | medium | yes | yes | [[#N3555\|View]] |
| N3556 | [[06.07.01 Space Tests of the UFF and the WEP\|06.07.01 Space Tests of the UFF and the WEP]] | Analyzed | low | no | yes | [[#N3556\|View]] |
| N3557 | [[06.07.02 Laser Ranging to the Moon and the WEP\|06.07.02 Laser Ranging to the Moon and the WEP]] | Analyzed | medium | no | yes | [[#N3557\|View]] |
| N3558 | [[06.07.03 Tests of the SEP\|06.07.03 Tests of the SEP]] | Analyzed | medium | yes | no | [[#N3558\|View]] |
| N3559 | [[06.07.04 The Active and the Passive Gravitational Masses\|06.07.04 The Active and the Passive Gravitational Masses]] | Analyzed | low | no | no | [[#N3559\|View]] |
| N3560 | [[06.08 The First Applications of the EEP - Prelude to the GTR\|06.08 The First Applications of the EEP - Prelude to the GTR]] | Analyzed | medium | yes | yes | [[#N3560\|View]] |
| N3561 | [[06.09 On the Gravitational Origin of the UFF, WEP, and EEP\|06.09 On the Gravitational Origin of the UFF, WEP, and EEP]] | Analyzed | low | no | no | [[#N3561\|View]] |
| N3562 | [[06.10 Diving Deeper - Equivalent or Identical\|06.10 Diving Deeper - Equivalent or Identical]] | Analyzed | low | no | no | [[#N3562\|View]] |
| N3563 | [[06.11 The Equivalence Principle and the Quantum Theory\|06.11 The Equivalence Principle and the Quantum Theory]] | Analyzed | medium | no | no | [[#N3563\|View]] |
| N3564 | [[06.12 Summary\|06.12 Summary]] | Analyzed | low | no | no | [[#N3564\|View]] |

## Suggestions

### N3547

Note: [[06 References|06 References]]  
Priority: low · Graph: no · Manim: no

A reference list; one entry is superseded by later results.

- [Links] Add the MICROSCOPE final result (Touboul et al., Phys. Rev. Lett. 129, 121102 (2022), $\eta=(-1.5\pm2.7)\times10^{-15}$) as a note next to reference 17, so that readers get the current bound.

### N3548

Note: [[06.00 The Equivalence Principles|06.00 The Equivalence Principles]]  
Priority: low · Graph: no · Manim: no

A clear chapter introduction; no change needed.

- [Links] Add a list of the chapter sub-notes (06.01–06.12) for navigation.

### N3549

Note: [[06.01 The Universality of Free Fall|06.01 The Universality of Free Fall]]  
Priority: medium · Graph: yes · Manim: no

A clear statement of the UFF and its role in GR, with an outdated experimental bound and a mixing of active and passive gravitational mass.

- [Correctness] "the UFF is verified ... to the level of 1 part in $10^{13}$–$10^{14}$" is outdated. MICROSCOPE (2022) gives the Eötvös parameter $\eta(\mathrm{Ti,Pt})=(-1.5\pm2.7)\times10^{-15}$. Update the number.
- [Correctness] "The gravitational mass is the source of a gravitational field; it is the 'charge' of gravity" describes the active gravitational mass, while the WEP and the UFF concern the passive gravitational mass (the coupling to an external field). Distinguish $\mechanical{m}_p$ from $\mechanical{m}_a$, and link to \[\[06.07.04 The Active and the Passive Gravitational Masses\]\].
- [Example] Define the Eötvös parameter $\eta=2|a_1-a_2|/(a_1+a_2)$ and show that $\eta=10^{-15}$ near Earth means $\Delta a\approx10^{-14}\,\unit{m/s^2}$.
- [Graph] Plot the best bound on η (log scale) against year: Newton ~1e-3, Bessel ~2e-5, Eötvös 1922 ~5e-9, Roll–Krotkov–Dicke 1964 ~1e-11, Braginsky 1972 ~1e-12, Eöt-Wash 2008/2012 ~2e-13, MICROSCOPE 2022 ~1e-15.

### N3550

Note: [[06.02 The Equivalence of Inertia and Mass - The Weak Equivalence Principle|06.02 The Equivalence of Inertia and Mass - The Weak Equivalence Principle]]  
Priority: medium · Graph: no · Manim: no

Eq. (6.1)–(6.3) are presented clearly with a good charge analogy, but the note mixes active and passive gravitational mass.

- [Correctness] "the WEP implies that any form of energy is also a source of gravity, with mass $\mechanical{m}_g=\mechanical{m}_i$" is wrong. The WEP equates inertial and passive gravitational mass. That energy also sources gravity is the equality of active and passive mass, which is a separate statement tested by Kreuzer (ref. [21]) and lunar laser ranging. Correct the parenthesis.
- [Simplify] Use $\mechanical{m}_p$ (passive) consistently in Eq. (6.1), instead of first $\mechanical{m}$ and then $\mechanical{m}_g$. The table currently lists $\mechanical{m}$ and $\mechanical{m}_g$ as the same quantity, which hides the conceptual point.
- [Example] Make Eq. (6.2) concrete: in the same field $\electric{E}=1\,\unit{kV/m}$, an electron accelerates at about $1.8\times10^{14}\,\unit{m/s^2}$ and a proton at about $9.6\times10^{10}\,\unit{m/s^2}$ in the opposite direction. Gravity gives both the same $g$.

### N3551

Note: [[06.03 Galileo's Thought Experiment Proof of the UFF|06.03 Galileo's Thought Experiment Proof of the UFF]]  
Priority: low · Graph: no · Manim: yes

Galileo's argument and the author's critique are explained clearly; one historiographic claim is wrong.

- [Correctness] "Nobody seems to have found any defect in Galileo's proof till now" is incorrect. The argument and its hidden assumptions (for example that speed depends only on weight and that weight is additive) have been analysed at length, for example by J. R. Brown (1991), J. D. Norton (1996) and T. Gendler (1998). Cite this literature or soften the claim.
- [Simplify] The source title is "Discourses and Mathematical Demonstrations Relating to Two New Sciences" (1638), usually shortened to "Two New Sciences". "Dialogues Concerning Two New Sciences" mixes it with the 1632 Dialogue.
- [Manim] Animate the three cases of Fig. 6.1 under an Aristotelian rule $v\propto W$: the light and heavy bodies separately, the tied pair with the light body as a drag, and the pair as one body. Show the two predicted speeds for the pair diverging.

### N3552

Note: [[06.04 Einstein's Equivalence Principle|06.04 Einstein's Equivalence Principle]]  
Priority: low · Graph: no · Manim: yes

A clear statement of the EEP with good tidal caveats; it has one directional error and an unused table symbol.

- [Correctness] "the additional apparent force $\mechanical{\mathbf F}=-\mechanical{m}\mechanical{\mathbf a}$, acting opposite to the direction of motion": the inertial force is opposite to the frame's acceleration, not to its velocity. A decelerating rocket gives apparent weight towards its nose.
- [Correctness] The physical-quantities table lists $\mechanical{g}'$, which the note never uses. Remove it or use it in the text.
- [Example] Give a tidal estimate for the "locally" restriction: in a 2 m cabin in low Earth orbit, the differential acceleration is $\approx2g\,\Delta r/R_E\approx6\times10^{-6}\,\unit{m/s^2}$. This shows the size of the effect that limits the EEP.
- [Manim] Animate Fig. 6.2: a ball released in a box at rest on Earth, and the same in a rocket accelerating at g, side by side and identical. Then widen the box until the two balls in the Earth case visibly converge towards Earth's centre (tidal effect).

### N3553

Note: [[06.05 What Are Inertial Frames|06.05 What Are Inertial Frames]]  
Priority: low · Graph: no · Manim: yes

Readable conceptual essay with one equation, but it blends the operational definition of inertial frames with the author's cosmic-potential explanation without marking which part is standard and which is proposal.

- [Structure] Split the lecture account into an "operational definition" paragraph (accelerometer reads zero, gyroscopes do not precess relative to each other, free bodies stay unaccelerated) and a clearly labelled "Cosmic Relativity proposal" paragraph, so readers see where standard physics ends.
- [Intuition] Add a short worked contrast: in a rotating laboratory, a released ball follows a curved path and an accelerometer at rest reads $\Omega^2 r$, while in a freely falling cabin neither effect appears; this makes "no inertial forces" concrete before the circularity argument.
- [Simplify] Replace "So is the situation in the General Theory of Relativity because its basis is the STR" with an explicit sentence: in GR, local inertial frames are freely falling frames defined by the metric, which itself depends on all matter through the field equations.
- [Manim] Animate two neighbouring free test bodies released in a falling cabin near Earth: in a small cabin they stay at fixed separation (local inertial frame), in a large cabin they slowly converge, showing why the interpretation section says tidal curvature limits the frame's extent.

### N3554

Note: [[06.06 A Stronger Equivalence Principle|06.06 A Stronger Equivalence Principle]]  
Priority: low · Graph: no · Manim: no

Short and clear statement of the SEP, but it lacks the one number that makes the principle tangible.

- [Example] Add the binding-energy fractions that the interpretation section asks the reader to predict: $GM/(Rc^2)\approx10^{-27}$ for a 1 kg metal sphere, $\approx7\times10^{-10}$ for Earth, $\approx2\times10^{-6}$ for the Sun and $\approx0.1$–$0.2$ for a neutron star, linking forward to \[\[06.07.03 Tests of the SEP\]\].
- [Simplify] State the SEP in one formula, e.g. $m_g/m_i=1+\eta_N\,E_g/(mc^2)$ with Nordtvedt parameter $\eta_N=0$ in GR, so the "self-energy" phrasing has a concrete target.

### N3555

Note: [[06.07 A Brief Account of Experimental Tests|06.07 A Brief Account of Experimental Tests]]  
Priority: medium · Graph: yes · Manim: yes

Informative overview of free-fall, Eötvös and solar-field torsion tests with mostly correct numbers, but the Eötvös mechanism is described inaccurately and one institution is misnamed.

- [Correctness] Eötvös paragraph: the horizontal torque comes from the centrifugal acceleration having a horizontal component relative to the true gravitational pull (the plumb line follows their sum), and the effect scales as $\Omega^2R_E\sin\varphi\cos\varphi$, maximal at $45^\circ$ latitude; Budapest ($47^\circ$) is a mid-latitude site, so "high-latitude location" and "Earth's gravity ... has a small horizontal component" should be corrected.
- [Correctness] "Washington University in Seattle" should be "the University of Washington, Seattle" (Eöt-Wash group); Washington University is in St. Louis.
- [Correctness] Sign convention of (6.4): with $a=(m_g/m_i)g$, one gets $\delta a/g=(m_g/m_i)_1-(m_g/m_i)_2\approx-\eta$ as $\eta$ is defined from $m_i/m_g$; either define $\eta$ with $m_g/m_i$ or write $|\eta|=|\delta a|/g$.
- [Example] Add the worked estimate for the electrostatic example: with $\eta_{\mathrm{ex}}=10^{-12}$ and $\epsilon=10^{-7}$, $\eta_{\mathrm{ex}}/\epsilon=10^{-5}$; also give Earth-orbit solar field $GM_\odot/r^2=5.9\times10^{-3}\,\mathrm{m/s^2}$ to show where $0.6\,\mathrm{cm/s^2}$ comes from.
- [Graph] Plot the expected torsion-balance signal $\theta(t)=\theta_0\cos(2\pi t/24\,\mathrm{h})$ for a WEP violation together with a thermal diurnal disturbance of similar period, over $t\in[0,72]\,\mathrm{h}$, to show why diurnal systematics are the main problem.
- [Manim] Animate the Dicke-type solar-field balance rotating with Earth over one day, with an exaggerated differential pull towards the Sun on the Pb and Cu halves, so the 24 h modulation of the torque direction is visible.

### N3556

Note: [[06.07.01 Space Tests of the UFF and the WEP|06.07.01 Space Tests of the UFF and the WEP]]  
Priority: low · Graph: no · Manim: yes

Clear short note with a correct schematic signal graph; the lecture's MICROSCOPE number is the 2017 first result and is updated only in the interpretation section.

- [Structure] Move the dated update into the lecture text as a callout: MICROSCOPE final result (2022) $\eta(\mathrm{Ti},\mathrm{Pt})=[-1.5\pm2.3(\mathrm{stat})\pm1.5(\mathrm{syst})]\times10^{-15}$, i.e. about $10^{-15}$, so the "better than $2\times10^{-14}$" statement is not read as current.
- [Example] Add why orbit helps quantitatively: in low Earth orbit the driving field is still $\approx7.9\,\mathrm{m/s^2}$ while the free-fall time is unlimited, compared with $\approx5\,\mathrm{s}$ in a drop tower and $5.9\times10^{-3}\,\mathrm{m/s^2}$ for solar-field torsion balances.
- [Manim] Animate the satellite orbiting Earth with the two concentric test cylinders and an exaggerated relative displacement $\Delta s$ that always points towards Earth, while a trace of $\Delta s$ along the satellite axis builds up the cosine curve of Fig. 6.5(c).

### N3557

Note: [[06.07.02 Laser Ranging to the Moon and the WEP|06.07.02 Laser Ranging to the Moon and the WEP]]  
Priority: medium · Graph: no · Manim: yes

Accessible description of lunar laser ranging, but the quoted range precision is inconsistent with the stated millimetre accuracy and the interpretation section's correction is itself off by an order of magnitude.

- [Correctness] "precision of a few parts in $10^{14}$": a few millimetres over $3.84\times10^8\,\mathrm{m}$ is $\approx10^{-11}$ ($3\,\mathrm{mm}/3.84\times10^8\,\mathrm{m}=7.8\times10^{-12}$); the interpretation section's "parts in $10^{12}$" should also read "about $10^{-11}$". The $10^{-13}$–$10^{-14}$ figure applies to the inferred differential acceleration $\delta a/g$, not the range.
- [Correctness] "Lunakhod" should be "Lunokhod".
- [Intuition] Explain how a millimetre range test becomes a $10^{-13}$ acceleration test: a violation $\delta a/g=\eta$ polarises the orbit towards the Sun with amplitude $\approx2.9\times10^{12}\,\eta$ cm (about 13 m per unit Nordtvedt parameter), so mm-level residuals bound $\eta$ near $10^{-13}$.
- [Simplify] Separate the WEP (composition) and SEP (self-energy) content of LLR explicitly; the note currently says the same data verify "UFF and WEP" at $10^{-14}$ and only hints at the SEP.
- [Manim] Animate the Earth–Moon system orbiting the Sun with an exaggerated Nordtvedt shift of the lunar orbit towards the Sun, showing the synodic-period oscillation of the Earth–Moon distance.

### N3558

Note: [[06.07.03 Tests of the SEP|06.07.03 Tests of the SEP]]  
Priority: medium · Graph: yes · Manim: no

Good outline of LLR, triple-pulsar and GW-light SEP tests with mostly correct numbers, but notation for the self-energy is inconsistent and the different "precisions" quoted are not put on a common parameter.

- [Correctness] Symbol clash: the same self-energy appears as $\epsilon_g$ (defined as $GM^2/R$) and $E_g$, and the same mass as $M$ and $m$; use one symbol each, and note that for a uniform sphere $E_g=\tfrac35GM^2/R$, so Earth's actual fraction $\approx4.6\times10^{-10}$ differs from $GM/(Rc^2)=7.0\times10^{-10}$.
- [Simplify] Introduce the Nordtvedt parameter $\eta_N$ via $\delta a/g=\eta_N\,\Delta(E_g/mc^2)$; then LLR gives $|\eta_N|\lesssim4\times10^{-4}$ ("$<0.04\%$"), and PSR J0337+1715 gives $|\Delta|<2.6\times10^{-6}$, i.e. $|\eta_N|\lesssim2\times10^{-5}$ with a binding fraction $\approx0.1$; this explains "more than an order of magnitude tighter".
- [Example] Show the 3000 kg estimate: for density $10^4\,\mathrm{kg/m^3}$, $R\approx0.41\,\mathrm{m}$ and $GM/(Rc^2)\approx5\times10^{-24}$, compared with laboratory $\eta\sim10^{-13}$–$10^{-15}$.
- [Graph] Log-log plot of $GM/(Rc^2)$ against mass for laboratory bodies, Moon, Earth, Sun, white dwarf and neutron star (points with labels, $M$ from $1$ to $10^{31}\,\mathrm{kg}$), with horizontal lines for current $\delta a/g$ sensitivities, to show why only astrophysical bodies test the SEP.

### N3559

Note: [[06.07.04 The Active and the Passive Gravitational Masses|06.07.04 The Active and the Passive Gravitational Masses]]  
Priority: low · Graph: no · Manim: no

Short, correct conceptual note distinguishing three masses; it would gain from the momentum-conservation argument that the interpretation section only hints at.

- [Intuition] Add the two-body argument: with $F_{12}=Gm_{p1}m_{a2}/r^2$ and $F_{21}=Gm_{p2}m_{a1}/r^2$, momentum conservation (Newton's third law) requires $m_{a1}/m_{p1}=m_{a2}/m_{p2}$, which is exactly what Kreuzer (1968) and the lunar test of Bartlett and van Buren (1986) checked.
- [Example] Answer the closing exercise: a pendulum comparison measures $m_p/m_i$ (passive over inertial), never $m_a$, because the Earth's active mass is common to both bobs.

### N3560

Note: [[06.08 The First Applications of the EEP - Prelude to the GTR|06.08 The First Applications of the EEP - Prelude to the GTR]]  
Priority: medium · Graph: yes · Manim: yes

Good step-by-step equivalence-principle derivation of the redshift, but the clock-rate equation (6.9) has an ambiguous meaning of $T$ that changes its sign, and one sentence is garbled.

- [Correctness] Eq. (6.9) with the table entry "clock periods": the lower clock ($S_1$, lower potential) runs slow, so its period seen from $S_2$ is longer and $(T_1-T_2)/\bar T=+gd/c^2$; the printed sign $-gd/c^2$ is correct only if $T_1,T_2$ are elapsed proper-time readings over a common interval. Define $T$ as accumulated readings (and update the table) or flip the sign.
- [Correctness] "runs at a smaller rate $\phi/c^2$ relative to a stationary clock in gravity-free space" should read "runs slower by the fraction $|\phi|/c^2$", i.e. $d\tau/dt\approx1+\phi/c^2$ with $\phi<0$.
- [Correctness] The Planck constant is wrapped in \energy{h}; it is an action ($\mathrm{J\,s}$), so use the macro group for action or leave it uncolored as a constant.
- [Example] Add the Pound–Rebka number: $gd/c^2=9.81\times22.5/(3\times10^8)^2=2.5\times10^{-15}$, and the GPS value $\Delta\phi/c^2\approx5.3\times10^{-10}$ (about $+45.7\,\mu\mathrm{s/day}$), with a reminder that GPS needs the full $-GM/r$ potential difference, not $gd$.
- [Graph] Plot the fractional rate offset $(\phi(r)-\phi(R_E))/c^2$ with $\phi=-GM_E/r$ against altitude $h=r-R_E$ from 0 to 40,000 km, together with the linear approximation $gh/c^2$, marking the GPS orbit at 20,200 km to show where the uniform-field formula fails.
- [Manim] Animate Fig. 6.6: a light pulse travelling up an accelerating box while the box gains speed $\delta v=ad/c$, then switch to the gravitational picture with two clocks ticking at visibly different rates.

### N3561

Note: [[06.09 On the Gravitational Origin of the UFF, WEP, and EEP|06.09 On the Gravitational Origin of the UFF, WEP, and EEP]]  
Priority: low · Graph: no · Manim: no

Short argumentative note that states the author's claim clearly; it contains no derivation to check.

- [Structure] Add a forward link to the chapter where Cosmic Relativity is claimed to derive the UFF (Chapter 10 or 12) so "emerge transparently" points to an actual argument rather than an assertion.

### N3562

Note: [[06.10 Diving Deeper - Equivalent or Identical|06.10 Diving Deeper - Equivalent or Identical]]  
Priority: low · Graph: no · Manim: no

Clear philosophical note; the distinction between equal ratio and identity is well posed, but the closing claim is stated without a pointer to its derivation.

- [Links] Replace "(Chapter 12)" with a wiki link to the actual Chapter 12 note that derives "inertial mass = gravitational mass times cosmic potential", so the reader can check the claim.
- [Intuition] Give the formula that the author's claim implies, e.g. $m_i=m_g\,\Phi_U/c^2$ with $\Phi_U$ the cosmic potential magnitude, and state the consequence that would distinguish identity from equivalence (dependence of inertia on the local potential).

### N3563

Note: [[06.11 The Equivalence Principle and the Quantum Theory|06.11 The Equivalence Principle and the Quantum Theory]]  
Priority: medium · Graph: no · Manim: no

The propagator argument is clear in outline, but one sentence uses the wrong sign for the equivalent acceleration and the step from equal classical paths to equal actions skips the gauge phase.

- [Correctness] "the classical path in a gravitational field $g$ is exactly the same as the classical path in an accelerated frame with acceleration $-a$" contradicts (6.11) and the earlier statement $a=-g$; it should read "with acceleration $a=-g$".
- [Intuition] Show the two Lagrangians explicitly: $L_g=\tfrac12m\dot z^2-mgz$ and, in a frame with acceleration $a$ upward, $L_a=\tfrac12m\dot z^2-maz$; for $a=g$ (frame accelerating upward, i.e. the fictitious field $-a$ equals $g$) they coincide, so the actions are equal; if the frame is described from an inertial frame by $z=z'+at^2/2$ the Lagrangians differ by a total time derivative, which gives only a boundary phase.
- [Example] Add the COW neutron-interferometer phase $\Delta\varphi=m^2g\lambda A/(2\pi\hbar^2)$ as the standard example of a mass-dependent quantum phase that is nevertheless consistent with the equivalence principle (it depends on $m_im_g$).
- [Structure] Add the measured quantum WEP tests (atom-interferometer comparisons such as $^{85}$Rb/$^{87}$Rb at the $10^{-12}$ level) so the "categorical" statement has an experimental counterpart.

### N3564

Note: [[06.12 Summary|06.12 Summary]]  
Priority: low · Graph: no · Manim: no

Adequate chapter summary; no change needed beyond links.

- [Links] Add wiki links to the summarised notes (06.01, 06.03, 06.07, 06.07.03, 06.11) and to \[\[07.00 Einstein's General Theory of Relativity\]\] for "the next chapter".
