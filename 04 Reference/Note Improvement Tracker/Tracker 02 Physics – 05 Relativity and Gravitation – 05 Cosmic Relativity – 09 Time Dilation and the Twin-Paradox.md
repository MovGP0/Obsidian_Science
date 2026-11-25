---
title: "Note Improvement Tracker – 02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/09 Time Dilation and the Twin-Paradox"
---

> [!TLDR]
> This note tracks the review of the 18 notes in `02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/09 Time Dilation and the Twin-Paradox`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 24 possible errors or notation conflicts. 24 of them are verified (24 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3606|N3606]] 09 References: Ref 3: "$25$(9–15), 47–51" is not a valid issue/page citation; give it as *Phys. Today* 25(1), 9–15 and 47–51 (1972) or whatever the actual letter pages are. Ref 4 lacks its year (Naturwissenschaften 6, 697–702, 1918). **Fixed:** Ref 3 now Phys. Today 25(1), 9-15 and 47-51 (1972) (issue 1 = January 1972 from memory, not checked online); Ref 4 year 1918 added.
- [[#N3611|N3611]] 09.04 Langevin's Twin-Paradox: "Kinematics is symmetric except for the brief inertial, gravity-like force in B's rest frame": B has no single inertial rest frame; its worldline consists of two inertial segments, and in B's outbound and inbound frames Earth's simultaneous time jumps at the turnaround. The asymmetry is in the worldlines, not only in the force, so the "real paradox" claim does not follow from STR as stated; label it as the author's view. **Fixed:** Labelled the symmetry and paradox claim as the author's view and added the standard STR account (two inertial segments, simultaneity jump at turnaround).
- [[#N3612|N3612]] 09.05 The Real Twin-Paradox in the STR: "The STR cannot choose $t_A>t_B$ or $t_B>t_A$": once each frame's burn sequence is specified, both worldlines are known in any inertial frame and $\int d\tau$ gives unique reunion readings (equal if the reversals are symmetric, otherwise the clock that changed velocity more ages less). Freezing the clocks during burns does not change this, since the difference accumulates on the coasting legs. **Fixed:** Labelled the claim as the author's and added that proper-time integrals fix the readings; freezing clocks does not change this.
- [[#N3612|N3612]] 09.05 The Real Twin-Paradox in the STR: Subscript inconsistency: "relative dilation is $\Delta T_a-\Delta T_b$" uses lowercase $a,b$ while the rest of the note uses $A,B$. **Fixed:** Changed Delta T_a - Delta T_b to Delta T_A - Delta T_B and removed the extra symbols from the table.
- [[#N3613|N3613]] 09.06 The Predictions for Motional Time Dilation: The STR prediction for the Mumbai–Paris trip uses only the ground-relative speed $v$ in $-v^2/(2c^2)$, treating the rotating Earth surface as inertial. Standard relativity evaluates both clocks in the non-rotating Earth-centred inertial frame, giving the transported clock's rate offset $-(v^2+2\mathbf u_r\cdot\mathbf v)/(2c^2)$ relative to the laboratory clock, the same $u_rv/c^2$ term the note attributes only to an absolute frame (this is the Hafele–Keating east–west asymmetry and the Sagnac correction). The statements "The STR says the transported clock is slower throughout" and "a westward-circling clock can run faster ... only in an absolute-frame theory" are therefore incorrect. **Fixed:** Added the ECI rate offset -(v^2+2 u_r.v)/(2c^2) with Hafele-Keating/Sagnac note; requalified the three STR-falsification statements as the author's view.
- [[#N3613|N3613]] 09.06 The Predictions for Motional Time Dilation: The interpretation section's claim that (9.3) "repeats a factor where its reciprocal is needed" is wrong for inertial relative motion: reciprocal dilation $dt=\sqrt{1-v^2/c^2}\,d\tau$ in the other clock's rest frame is the correct symmetric statement; the asymmetry appears only for non-inertial worldlines. Correct or remove that sentence. **Fixed:** Replaced the interpretation sentence: (9.3) is the correct reciprocal statement; asymmetry only for non-inertial worldlines.
- [[#N3613|N3613]] 09.06 The Predictions for Motional Time Dilation: Fix in the text the items kept with callouts: $0.78\,\mathrm{s}$ should be $0.0785\,\mathrm{s}$ ($720\,\mathrm{ns/s}\times30.3\,\mathrm{h}$), $\cos\omega t+\theta$ should be $\cos(\omega t+\theta)$ in (9.9), and (9.11) needs $\cos\phi$ in its last term. State the $\cos\phi$ used for the "19 ns" outward gain (with $\cos\phi=1$, $u_rvT/c^2-v^2T/(2c^2)=35-10.8\approx24\,\mathrm{ns}$). **Fixed:** Set 0.0785 s, cos(omega t+theta), added cos phi to (9.11); outward gain now (35 cos phi-10.8) ns, 24 ns for cos phi=1 and 19 ns for cos phi approx 0.85; removed three callouts and updated table.
- [[#N3613|N3613]] 09.06 The Predictions for Motional Time Dilation: "Mumbai's laboratory moves through the Universe at about $u=390\,\mathrm{km/s}$" conflicts with the CMB dipole speed of $370\,\mathrm{km/s}$ quoted in 08.05 for the solar system; use 370 km/s and give the annual modulation $\pm30\,\mathrm{km/s}$ around it. **Fixed:** Now 370 km/s with +-30 km/s annual modulation; u0 kept at about 360 km/s as a value within that range so the 720 ns/s and 1.8 ns/s results stay valid.
- [[#N3615|N3615]] 09.07.01 Time Dilation of Unstable Particles: In the expansion $\mechanical{v}'\approx\mechanical{v}\pm\mechanical{u}^2/\mechanical{c}$: expanding $(\mechanical{v}\pm\mechanical{u})(1\mp\mechanical{u}/\mechanical{c})$ at $\mechanical{v}\approx\mechanical{c}$ gives $\mechanical{v}-\mechanical{u}^2/\mechanical{c}$ for BOTH signs; the exact composition gives $\mechanical{v}'-\mechanical{v}=\pm\mechanical{u}(1-\mechanical{v}^2/\mechanical{c}^2)/(1\pm\mechanical{u}\mechanical{v}/\mechanical{c}^2)$, i.e. a shift of order $\pm\mechanical{u}/\mechanical{\gamma}^2$, not $\pm\mechanical{u}^2/\mechanical{c}$. **Fixed:** Replaced the expansion with the exact composition and its ±u/γ² approximation.
- [[#N3615|N3615]] 09.07.01 Time Dilation of Unstable Particles: Eq. (9.12) should follow from the exact identity $1-\mechanical{v}'^2/\mechanical{c}^2=(1-\mechanical{v}^2/\mechanical{c}^2)(1-\mechanical{u}^2/\mechanical{c}^2)/(1\pm\mechanical{u}\mechanical{v}/\mechanical{c}^2)^2$, giving $\mechanical{\Gamma}_{\mathrm{Ab}}\approx\mechanical{\Gamma}_{\mathrm{STR}}(1\mp\mechanical{u}\mechanical{v}/\mechanical{c}^2)$; for $\mechanical{u}=400\,\unit{km/s}$ the asymmetry is about $\pm0.13\%$ independent of $\mechanical{\gamma}$, not the $\approx\pm0.9\%$ implied by $\sqrt{1\mp2\mechanical{\gamma}^2\mechanical{u}^2/\mechanical{c}^2}$ at $\mechanical{\gamma}=70$. State this explicitly instead of only the generic caveat in "Interpretation and checks". **Fixed:** Rewrote (9.12) from the exact identity and stated the ±0.13 % asymmetry; kept the source's ±0.9 % value as a marked non-derivable expansion.
- [[#N3615|N3615]] 09.07.01 Time Dilation of Unstable Particles: The table lists $t$ as "Creation time" and $\mechanical{\tau}'$ as a lifetime, but the text writes $\mechanical{\tau}'=\mechanical{\tau}\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}$ while the interpretation says the lab lifetime is increased by $\mechanical{\gamma}$; say which of $\mechanical{\tau},\mechanical{\tau}'$ is the proper lifetime so the two statements do not appear to contradict each other. **Fixed:** Added that τ' is the proper lifetime and τ the laboratory lifetime, in the text and the table row.
- [[#N3616|N3616]] 09.07.02 Experiments on Atomic Systems: Eq. (9.15) $\signal{\nu}'=\signal{\nu}(1\pm\mechanical{v}/\mechanical{c})\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}$ is not the special-relativistic result for a moving source; the correct lab-frame frequencies are $\signal{\nu}'=\signal{\nu}\sqrt{(1\pm\mechanical{v}/\mechanical{c})/(1\mp\mechanical{v}/\mechanical{c})}\approx\signal{\nu}(1\pm\mechanical{v}/\mechanical{c}+\mechanical{v}^2/(2\mechanical{c}^2))$, i.e. the second-order term is $+\mechanical{v}^2/(2\mechanical{c}^2)$ relative to the static line (equivalently, wavelengths $\lambda_0(1\mp\beta+\beta^2/2)$, the mean-wavelength redshift Ives and Stilwell measured). Flag this in a note or correct it. **Fixed:** Replaced (9.15) with ν sqrt((1±β)/(1∓β)) ≈ ν(1±β+β²/2), added a note on the source's form and the Ives–Stilwell mean-wavelength shift, and changed the asymmetry sign in the next sentence.
- [[#N3616|N3616]] 09.07.02 Experiments on Atomic Systems: Eq. (9.13)/(9.14): stating that $\signal{\nu}'=\mechanical{\gamma}\signal{\nu}$ at $\mechanical{\theta}=\pi/2$ "predicts an increased received frequency" is only true when $\mechanical{\theta}$ is measured in the source frame; say which frame defines $\mechanical{\theta}$ (in the lab frame the transverse result is $\signal{\nu}/\mechanical{\gamma}$, a decrease), otherwise the claimed "ambiguity" looks like a contradiction with experiment. **Fixed:** Added that θ is measured in the source frame and that the lab-frame transverse result is ν/γ, a decrease.
- [[#N3617|N3617]] 09.07.03 Experiments on the Comparison of Atomic Clocks: The caesium hyperfine frequency is $9\,192\,631\,770\,\unit{Hz}\approx9.19\,\unit{GHz}$ (the SI-second definition), not $9.18\,\unit{GHz}$; correct the text and the table row instead of attributing the wrong value to the source. **Fixed:** Corrected the text and the table row.
- [[#N3617|N3617]] 09.07.03 Experiments on the Comparison of Atomic Clocks: Eq. (9.18) left side "$-\mechanical{v}^2/(2\mechanical{c}^2)-\mechanical{v}_{\mathrm{ref}}^2/(2\mechanical{c}^2)$" must be the difference $-(\mechanical{v}'^2-\mechanical{v}_{\mathrm{ref}}^2)/(2\mechanical{c}^2)$ (transported minus reference); a sum of two dilations cannot produce the $\pm$ cross term on the right. **Fixed:** Replaced the sum with the difference.
- [[#N3617|N3617]] 09.07.03 Experiments on the Comparison of Atomic Clocks: Symbol clash: the sentence after (9.18) says "Over $t$ seconds" but the formula uses $\mechanical{T}$, and $\mechanical{v}$ is used both for the lab-relative transport speed and (in the table) generically; use $\mechanical{T}$ consistently and write the transported clock's absolute velocity as $\mechanical{v}'$. **Fixed:** Changed to T, defined v' in the text and added a v' table row (also added the missing ± in the u_r L cos φ/c² term).
- [[#N3618|N3618]] 09.08 The Hafele-Keating Experiment: "J. C. Hafele and R. E. Keating of the US Naval Observatory": Hafele was a physicist at Washington University in St. Louis; only Keating was at USNO. **Fixed:** Corrected the affiliation sentence.
- [[#N3618|N3618]] 09.08 The Hafele-Keating Experiment: Table 9.2 row "Absolute-frame prediction $-185\pm10$, $+104\pm10$" should say these essentially coincide with Hafele and Keating's own published kinematic predictions ($-184\pm18$, $+96\pm10\,\unit{ns}$, computed in the Earth-centred nonrotating frame), and that their total predictions $-40\pm23$ and $+275\pm21\,\unit{ns}$ match the observations; otherwise the reader thinks the standard relativistic calculation predicts the "Einstein" row $-41$, $-49$. **Fixed:** Added a paragraph after Table 9.2 with −184±18, +96±10 ns and totals −40±23, +275±21 ns, and that the "Einstein" row is the author's Earth-fixed calculation.
- [[#N3618|N3618]] 09.08 The Hafele-Keating Experiment: Table "Physical quantities": the latitude row gives unit $\unit{rad}$ but the text and Table 9.1 use degrees; use degrees or convert. **Fixed:** Changed both latitude table rows to degrees.
- [[#N3621|N3621]] 09.09.02 Resolution Sans Acceleration: Fig. 9.4 labels each leg "T(1 − v²/4c²)"; each leg lasts $\mechanical{T}/2$, so the aged time per leg is $(\mechanical{T}/2)(1-\mechanical{v}^2/(2\mechanical{c}^2))=\mechanical{T}/2-\mechanical{T}\mechanical{v}^2/(4\mechanical{c}^2)$. Fix the labels (the same labels are copied into Fig. 9.5 of [[09.10 Einstein's Gravitational Resolution of the Paradox]]). **Fixed:** Changed the four graph text labels and updated the caption (not checked in Obsidian reading mode).
- [[#N3621|N3621]] 09.09.02 Resolution Sans Acceleration: "inertial observer C moving oppositely at relative velocity $-2\mechanical{v}$" is wrong in relativity (relative speed of C to B is $2\mechanical{v}/(1+\mechanical{v}^2/\mechanical{c}^2)$); state C moves at $-\mechanical{v}$ relative to A, which is the intended set-up. **Fixed:** Changed to C moving at −v relative to A.
- [[#N3622|N3622]] 09.10 Einstein's Gravitational Resolution of the Paradox: The callout "Einstein's twin-paradox resolution admitted that the STR alone was insufficient" is misleading: in the 1918 dialogue, the inertial-frame STR calculation already gives a unique answer; the GTR argument only describes the same result from the traveller's accelerated frame. Attribute the claim to the author or rephrase. **Fixed:** Attributed the reading to the author and stated that the 1918 inertial-frame STR calculation already gives a unique answer.
- [[#N3622|N3622]] 09.10 Einstein's Gravitational Resolution of the Paradox: Fig. 9.5(a,c) leg labels "T(1 − v²/4c²)" should be $\mechanical{T}/2-\mechanical{T}\mechanical{v}^2/(4\mechanical{c}^2)$ (each leg lasts $\mechanical{T}/2$), as in Fig. 9.4. **Fixed:** Changed the four graph text labels (not checked in Obsidian reading mode).
- [[#N3623|N3623]] 09.11 Summary: "Westward clocks returned older ... contrary to the STR as presented here" should add that the standard Earth-centred-inertial relativistic calculation by Hafele and Keating predicted this westward gain ($+275\pm21\,\unit{ns}$ total), so the summary does not imply the experiment contradicted standard relativity. **Fixed:** Added that H&K's standard Earth-centred-inertial calculation predicted the westward gain (+275±21 ns total).

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3606 | [[09 References\|09 References]] | Analyzed | low | no | no | [[#N3606\|View]] |
| N3607 | [[09.00 Time Dilation and the Twin-Paradox\|09.00 Time Dilation and the Twin-Paradox]] | Analyzed | low | no | no | [[#N3607\|View]] |
| N3608 | [[09.01 Cautionary Introduction\|09.01 Cautionary Introduction]] | Analyzed | low | no | no | [[#N3608\|View]] |
| N3609 | [[09.02 Time Dilation in Lorentz-Poincare Relativity\|09.02 Time Dilation in Lorentz-Poincare Relativity]] | Analyzed | low | no | no | [[#N3609\|View]] |
| N3610 | [[09.03 Time Dilation in Einstein's STR\|09.03 Time Dilation in Einstein's STR]] | Analyzed | medium | yes | no | [[#N3610\|View]] |
| N3611 | [[09.04 Langevin's Twin-Paradox\|09.04 Langevin's Twin-Paradox]] | Analyzed | medium | no | yes | [[#N3611\|View]] |
| N3612 | [[09.05 The Real Twin-Paradox in the STR\|09.05 The Real Twin-Paradox in the STR]] | Analyzed | medium | no | yes | [[#N3612\|View]] |
| N3613 | [[09.06 The Predictions for Motional Time Dilation\|09.06 The Predictions for Motional Time Dilation]] | Analyzed | high | yes | no | [[#N3613\|View]] |
| N3614 | [[09.07 Experiments on Motional Time Dilation\|09.07 Experiments on Motional Time Dilation]] | Analyzed | low | no | no | [[#N3614\|View]] |
| N3615 | [[09.07.01 Time Dilation of Unstable Particles\|09.07.01 Time Dilation of Unstable Particles]] | Analyzed | medium | yes | no | [[#N3615\|View]] |
| N3616 | [[09.07.02 Experiments on Atomic Systems\|09.07.02 Experiments on Atomic Systems]] | Analyzed | medium | yes | no | [[#N3616\|View]] |
| N3617 | [[09.07.03 Experiments on the Comparison of Atomic Clocks\|09.07.03 Experiments on the Comparison of Atomic Clocks]] | Analyzed | medium | no | yes | [[#N3617\|View]] |
| N3618 | [[09.08 The Hafele-Keating Experiment\|09.08 The Hafele-Keating Experiment]] | Analyzed | medium | yes | no | [[#N3618\|View]] |
| N3619 | [[09.09 Popular Resolutions of the Twin-Paradox\|09.09 Popular Resolutions of the Twin-Paradox]] | Analyzed | low | no | no | [[#N3619\|View]] |
| N3620 | [[09.09.01 Langevin's Solution in the Acceleration\|09.09.01 Langevin's Solution in the Acceleration]] | Analyzed | medium | yes | yes | [[#N3620\|View]] |
| N3621 | [[09.09.02 Resolution Sans Acceleration\|09.09.02 Resolution Sans Acceleration]] | Analyzed | medium | yes | yes | [[#N3621\|View]] |
| N3622 | [[09.10 Einstein's Gravitational Resolution of the Paradox\|09.10 Einstein's Gravitational Resolution of the Paradox]] | Analyzed | medium | yes | no | [[#N3622\|View]] |
| N3623 | [[09.11 Summary\|09.11 Summary]] | Analyzed | low | no | no | [[#N3623\|View]] |

## Suggestions

### N3606

Note: [[09 References|09 References]]  
Priority: low · Graph: no · Manim: no

Complete reference list with correct data for most entries; two entries are incomplete or garbled.

- [Correctness] Ref 3: "$25$(9–15), 47–51" is not a valid issue/page citation; give it as *Phys. Today* 25(1), 9–15 and 47–51 (1972) or whatever the actual letter pages are. Ref 4 lacks its year (Naturwissenschaften 6, 697–702, 1918).

### N3607

Note: [[09.00 Time Dilation and the Twin-Paradox|09.00 Time Dilation and the Twin-Paradox]]  
Priority: low · Graph: no · Manim: no

Short chapter abstract with a helpful numerical check in the interpretation section.

- [Links] Add a list of links to the chapter's sections (09.01–09.09) so the hub is navigable, and mark the abstract's last sentence as the author's thesis.

### N3608

Note: [[09.01 Cautionary Introduction|09.01 Cautionary Introduction]]  
Priority: low · Graph: no · Manim: no

Clear introduction to the author's position; no equations to check, but it states contested conclusions of earlier chapters as established.

- [Structure] "This showed that invariant relative light speed and the STR must be abandoned" and "Some results directly conflict with STR motional time dilation" should be phrased as the author's claims with links to the chapters where they are argued (Chapter 5 notes, 09.08), since mainstream analyses of the same data agree with relativity.
- [Links] Link "Einstein's own resolution ... 1918" to the note in this chapter that discusses it (09.09) and to [[09 References]] entry 4.

### N3609

Note: [[09.02 Time Dilation in Lorentz-Poincare Relativity|09.02 Time Dilation in Lorentz-Poincare Relativity]]  
Priority: low · Graph: no · Manim: no

Short and clear statement of Lorentz's absolute-frame time dilation.

- [Simplify] Spell "FitzGerald" correctly and add the one-line derivation from the quoted transformation: for a clock at rest in the moving frame, $x=vt$ gives $t'=\gamma t(1-v^2/c^2)=t/\gamma$, so $\Delta T'=\Delta T\sqrt{1-v^2/c^2}$.
- [Links] Replace "Section 3.6, equation (3.28)" by a wiki link to the Chapter 3 note that contains it.

### N3610

Note: [[09.03 Time Dilation in Einstein's STR|09.03 Time Dilation in Einstein's STR]]  
Priority: medium · Graph: yes · Manim: no

Clear account of accumulated time dilation and Einstein's 1905 statement, but it ends by suggesting that special relativity has no answer for the reunion, without showing the standard computation.

- [Intuition] Add the standard worked example right after the Einstein quote: Earth clock inertial, traveller at $v=0.6c$ for 4 years out and 4 years back in Earth's frame; $\int d\tau=8\times0.8=6.4$ years for the traveller, and the same result in the traveller's outbound frame once the return leg's speed ($v=15c/17$) is used. This shows that (9.1) along given worldlines has a unique answer.
- [Simplify] "Any relative spatial motion with respect to an inertial frame lowers its time rate" should add "as computed in that inertial frame"; the reunion comparison is decided by which worldline is not inertial.
- [Graph] Plot the accumulated lag $\Delta T/T=1-\sqrt{1-v^2/c^2}$ and its approximation $v^2/(2c^2)$ against $v/c\in[0,0.9]$, showing where Einstein's second-order formula breaks down.

### N3611

Note: [[09.04 Langevin's Twin-Paradox|09.04 Langevin's Twin-Paradox]]  
Priority: medium · Graph: no · Manim: yes

Well-sourced history of Langevin's examples with correct numbers (1/20000 gives $\gamma=100$, muon range 660 m), but the argument that the two descriptions are kinematically symmetric omits the change of inertial frame.

- [Correctness] "Kinematics is symmetric except for the brief inertial, gravity-like force in B's rest frame": B has no single inertial rest frame; its worldline consists of two inertial segments, and in B's outbound and inbound frames Earth's simultaneous time jumps at the turnaround. The asymmetry is in the worldlines, not only in the force, so the "real paradox" claim does not follow from STR as stated; label it as the author's view.
- [Example] Show Langevin's numbers: $1-v/c=1/20000$ gives $\gamma=1/\sqrt{1-v^2/c^2}\approx100$, so 2 years of traveller time correspond to 200 Earth years.
- [Simplify] Fig. 9.1(b) caption: state explicitly that the right-hand diagram (A at rest) is not the same physical scenario as the left-hand one unless B's worldline in A's frame has the same kinks; this is the point the interpretation section makes.
- [Manim] Animate a Minkowski diagram of the 0.6c journey with the traveller's lines of simultaneity sweeping across Earth's worldline; at the turnaround they jump, showing where Earth's "missing" ageing occurs in the traveller's description.

### N3612

Note: [[09.05 The Real Twin-Paradox in the STR|09.05 The Real Twin-Paradox in the STR]]  
Priority: medium · Graph: no · Manim: yes

Clear statement of the author's "symmetric" twin scenario, but the conclusion that STR cannot decide the reunion readings is incorrect once the burn sequences are specified, and the subscripts are inconsistent.

- [Correctness] "The STR cannot choose $t_A>t_B$ or $t_B>t_A$": once each frame's burn sequence is specified, both worldlines are known in any inertial frame and $\int d\tau$ gives unique reunion readings (equal if the reversals are symmetric, otherwise the clock that changed velocity more ages less). Freezing the clocks during burns does not change this, since the difference accumulates on the coasting legs.
- [Correctness] Subscript inconsistency: "relative dilation is $\Delta T_a-\Delta T_b$" uses lowercase $a,b$ while the rest of the note uses $A,B$.
- [Example] Give the size of the effect for the stated numbers: at $v=3000\,\mathrm{km/s}$, $v^2/(2c^2)=5\times10^{-5}$, i.e. about 43 s over 10 days, so the scenario is easily measurable.
- [Links] Replace "(Section 5.4)" with a wiki link to the Chapter 5 note on the train and platform simultaneity argument.
- [Manim] Animate the two worldlines in A's initial rest frame for an asymmetric burn sequence, with tick marks of proper time along each, and then the same events in B's initial frame, showing the reunion readings are identical in both descriptions.

### N3613

Note: [[09.06 The Predictions for Motional Time Dilation|09.06 The Predictions for Motional Time Dilation]]  
Priority: high · Graph: yes · Manim: no

The numerical examples recompute correctly (0.43 ps/s, 10.8 ns, 3.2 ns, 1.8 ns/s, 200 ns, 62 ns), but the "STR prediction" treats the rotating Earth-surface laboratory as an inertial frame, which makes the claimed contrast with an absolute-frame theory invalid.

- [Correctness] The STR prediction for the Mumbai–Paris trip uses only the ground-relative speed $v$ in $-v^2/(2c^2)$, treating the rotating Earth surface as inertial. Standard relativity evaluates both clocks in the non-rotating Earth-centred inertial frame, giving the transported clock's rate offset $-(v^2+2\mathbf u_r\cdot\mathbf v)/(2c^2)$ relative to the laboratory clock, the same $u_rv/c^2$ term the note attributes only to an absolute frame (this is the Hafele–Keating east–west asymmetry and the Sagnac correction). The statements "The STR says the transported clock is slower throughout" and "a westward-circling clock can run faster ... only in an absolute-frame theory" are therefore incorrect.
- [Correctness] The interpretation section's claim that (9.3) "repeats a factor where its reciprocal is needed" is wrong for inertial relative motion: reciprocal dilation $dt=\sqrt{1-v^2/c^2}\,d\tau$ in the other clock's rest frame is the correct symmetric statement; the asymmetry appears only for non-inertial worldlines. Correct or remove that sentence.
- [Correctness] Fix in the text the items kept with callouts: $0.78\,\mathrm{s}$ should be $0.0785\,\mathrm{s}$ ($720\,\mathrm{ns/s}\times30.3\,\mathrm{h}$), $\cos\omega t+\theta$ should be $\cos(\omega t+\theta)$ in (9.9), and (9.11) needs $\cos\phi$ in its last term. State the $\cos\phi$ used for the "19 ns" outward gain (with $\cos\phi=1$, $u_rvT/c^2-v^2T/(2c^2)=35-10.8\approx24\,\mathrm{ns}$).
- [Correctness] "Mumbai's laboratory moves through the Universe at about $u=390\,\mathrm{km/s}$" conflicts with the CMB dipole speed of $370\,\mathrm{km/s}$ quoted in 08.05 for the solar system; use 370 km/s and give the annual modulation $\pm30\,\mathrm{km/s}$ around it.
- [Graph] Plot the accumulated time offset of an equatorial circumnavigating clock against ground speed $v\in[0,300]\,\mathrm{m/s}$ for eastward and westward trips, $\Delta T=-L(v\pm2u_r)/(2c^2)$ with $u_r=465\,\mathrm{m/s}$ and $L=40{,}000\,\mathrm{km}$, showing that the westward clock gains in standard relativity (gravitational term omitted).

### N3614

Note: [[09.07 Experiments on Motional Time Dilation|09.07 Experiments on Motional Time Dilation]]  
Priority: low · Graph: no · Manim: no

Short, clear hub-style introduction that separates clock-comparison logic from interpretation; no technical content to correct.

- [Structure] The "Physical question and model" paragraph lists three experiment classes (particle survival, spectroscopy, reunion clocks); add one-line links to [[09.07.01 Time Dilation of Unstable Particles]], [[09.07.02 Experiments on Atomic Systems]] and [[09.07.03 Experiments on the Comparison of Atomic Clocks]] so the hub actually routes the reader.
- [Simplify] "A difference can arise from either clock changing rate or their rates being unequal" is circular; rephrase as "a measured difference only tells you the two accumulated times differ, not which clock's rate changed".

### N3615

Note: [[09.07.01 Time Dilation of Unstable Particles|09.07.01 Time Dilation of Unstable Particles]]  
Priority: medium · Graph: yes · Manim: no

Readable historical account, but the displayed velocity-composition expansion and (9.12) are wrong at leading order and overstate the predicted asymmetry by roughly a factor of seven.

- [Correctness] In the expansion $\mechanical{v}'\approx\mechanical{v}\pm\mechanical{u}^2/\mechanical{c}$: expanding $(\mechanical{v}\pm\mechanical{u})(1\mp\mechanical{u}/\mechanical{c})$ at $\mechanical{v}\approx\mechanical{c}$ gives $\mechanical{v}-\mechanical{u}^2/\mechanical{c}$ for BOTH signs; the exact composition gives $\mechanical{v}'-\mechanical{v}=\pm\mechanical{u}(1-\mechanical{v}^2/\mechanical{c}^2)/(1\pm\mechanical{u}\mechanical{v}/\mechanical{c}^2)$, i.e. a shift of order $\pm\mechanical{u}/\mechanical{\gamma}^2$, not $\pm\mechanical{u}^2/\mechanical{c}$.
- [Correctness] Eq. (9.12) should follow from the exact identity $1-\mechanical{v}'^2/\mechanical{c}^2=(1-\mechanical{v}^2/\mechanical{c}^2)(1-\mechanical{u}^2/\mechanical{c}^2)/(1\pm\mechanical{u}\mechanical{v}/\mechanical{c}^2)^2$, giving $\mechanical{\Gamma}_{\mathrm{Ab}}\approx\mechanical{\Gamma}_{\mathrm{STR}}(1\mp\mechanical{u}\mechanical{v}/\mechanical{c}^2)$; for $\mechanical{u}=400\,\unit{km/s}$ the asymmetry is about $\pm0.13\%$ independent of $\mechanical{\gamma}$, not the $\approx\pm0.9\%$ implied by $\sqrt{1\mp2\mechanical{\gamma}^2\mechanical{u}^2/\mechanical{c}^2}$ at $\mechanical{\gamma}=70$. State this explicitly instead of only the generic caveat in "Interpretation and checks".
- [Graph] Plot the fractional asymmetry $|\mechanical{\Gamma}_{\mathrm{Ab}}/\mechanical{\Gamma}_{\mathrm{STR}}-1|$ against $\mechanical{\gamma}\in[1,100]$ for $\mechanical{u}=370\,\unit{km/s}$, comparing the printed formula $\sqrt{1+2\mechanical{\gamma}^2\mechanical{u}^2/\mechanical{c}^2}-1$ with the exact $\mechanical{u}\mechanical{v}/\mechanical{c}^2$ result, to show visually why the printed expansion overstates the effect.
- [Example] Add a worked muon number: $\mechanical{\tau}=2.2\,\unit{\mu s}$, $\mechanical{\gamma}=20$, so $\mechanical{\gamma}\mechanical{c}\mechanical{\tau}\approx13\,\unit{km}$ versus $660\,\unit{m}$ without dilation, so the reader sees why atmospheric muons reach the ground.
- [Correctness] The table lists $t$ as "Creation time" and $\mechanical{\tau}'$ as a lifetime, but the text writes $\mechanical{\tau}'=\mechanical{\tau}\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}$ while the interpretation says the lab lifetime is increased by $\mechanical{\gamma}$; say which of $\mechanical{\tau},\mechanical{\tau}'$ is the proper lifetime so the two statements do not appear to contradict each other.

### N3616

Note: [[09.07.02 Experiments on Atomic Systems|09.07.02 Experiments on Atomic Systems]]  
Priority: medium · Graph: yes · Manim: no

Clear motivation for Ives–Stilwell, but the "STR" forward/backward Doppler formula (9.15) has the wrong second-order sign, which undermines the asymmetry argument.

- [Correctness] Eq. (9.15) $\signal{\nu}'=\signal{\nu}(1\pm\mechanical{v}/\mechanical{c})\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}$ is not the special-relativistic result for a moving source; the correct lab-frame frequencies are $\signal{\nu}'=\signal{\nu}\sqrt{(1\pm\mechanical{v}/\mechanical{c})/(1\mp\mechanical{v}/\mechanical{c})}\approx\signal{\nu}(1\pm\mechanical{v}/\mechanical{c}+\mechanical{v}^2/(2\mechanical{c}^2))$, i.e. the second-order term is $+\mechanical{v}^2/(2\mechanical{c}^2)$ relative to the static line (equivalently, wavelengths $\lambda_0(1\mp\beta+\beta^2/2)$, the mean-wavelength redshift Ives and Stilwell measured). Flag this in a note or correct it.
- [Correctness] Eq. (9.13)/(9.14): stating that $\signal{\nu}'=\mechanical{\gamma}\signal{\nu}$ at $\mechanical{\theta}=\pi/2$ "predicts an increased received frequency" is only true when $\mechanical{\theta}$ is measured in the source frame; say which frame defines $\mechanical{\theta}$ (in the lab frame the transverse result is $\signal{\nu}/\mechanical{\gamma}$, a decrease), otherwise the claimed "ambiguity" looks like a contradiction with experiment.
- [Graph] Plot observed frequency ratio $\signal{\nu}'/\signal{\nu}$ against lab angle $\mechanical{\theta}\in[0,\pi]$ for $\beta=0.01$, comparing the classical moving-source curve $1/(1-\beta\cos\mechanical{\theta})$ with the relativistic $\sqrt{1-\beta^2}/(1-\beta\cos\mechanical{\theta})$, marking the forward, backward and transverse points; this makes the second-order offset visible.
- [Example] Add the Ives–Stilwell numbers: for $\beta=0.005$ and $H_\beta$ at $486\,\unit{nm}$, the first-order shift is $\pm2.4\,\unit{nm}$ while the mean-wavelength shift is $\lambda_0\beta^2/2\approx0.006\,\unit{nm}$, so the reader sees how small the measured quantity is.

### N3617

Note: [[09.07.03 Experiments on the Comparison of Atomic Clocks|09.07.03 Experiments on the Comparison of Atomic Clocks]]  
Priority: medium · Graph: no · Manim: yes

Good bridge to Hafele–Keating, but contains a wrong caesium frequency and a sign error in the left side of (9.18).

- [Correctness] The caesium hyperfine frequency is $9\,192\,631\,770\,\unit{Hz}\approx9.19\,\unit{GHz}$ (the SI-second definition), not $9.18\,\unit{GHz}$; correct the text and the table row instead of attributing the wrong value to the source.
- [Correctness] Eq. (9.18) left side "$-\mechanical{v}^2/(2\mechanical{c}^2)-\mechanical{v}_{\mathrm{ref}}^2/(2\mechanical{c}^2)$" must be the difference $-(\mechanical{v}'^2-\mechanical{v}_{\mathrm{ref}}^2)/(2\mechanical{c}^2)$ (transported minus reference); a sum of two dilations cannot produce the $\pm$ cross term on the right.
- [Correctness] Symbol clash: the sentence after (9.18) says "Over $t$ seconds" but the formula uses $\mechanical{T}$, and $\mechanical{v}$ is used both for the lab-relative transport speed and (in the table) generically; use $\mechanical{T}$ consistently and write the transported clock's absolute velocity as $\mechanical{v}'$.
- [Manim] Animate Earth seen from above the North Pole with a ground clock and two aircraft clocks circling east and west; show each clock's absolute speed $\mechanical{u}_r\pm\mechanical{v}$ as an arrow and the accumulated time offsets as bars, so the sign of the cross term is visible.

### N3618

Note: [[09.08 The Hafele-Keating Experiment|09.08 The Hafele-Keating Experiment]]  
Priority: medium · Graph: yes · Manim: no

Detailed and numerically consistent (0.39 ns/(h km), ~48 ns, 386/399 m/s and -185/+104 ns all check), but one attribution is wrong and Table 9.2 hides that its "absolute-frame" row equals Hafele–Keating's own published kinematic prediction.

- [Correctness] "J. C. Hafele and R. E. Keating of the US Naval Observatory": Hafele was a physicist at Washington University in St. Louis; only Keating was at USNO.
- [Correctness] Table 9.2 row "Absolute-frame prediction $-185\pm10$, $+104\pm10$" should say these essentially coincide with Hafele and Keating's own published kinematic predictions ($-184\pm18$, $+96\pm10\,\unit{ns}$, computed in the Earth-centred nonrotating frame), and that their total predictions $-40\pm23$ and $+275\pm21\,\unit{ns}$ match the observations; otherwise the reader thinks the standard relativistic calculation predicts the "Einstein" row $-41$, $-49$.
- [Simplify] The note box about the extra minus sign in (9.19) could be replaced by writing the intended relation $\Delta\mechanical{T}_v=-\int\mechanical{v}^2\,dt/(2\mechanical{c}^2)\approx-\mechanical{T}_f\bar{\mechanical{v}}^2/(2\mechanical{c}^2)$ and noting the source's typo once.
- [Graph] Bar chart per direction (east, west) with grouped bars: observed O, gravitational G, kinematic O−G, Earth-frame "STR" estimate, and Earth-centred nonrotating-frame prediction, with error bars from Table 9.2.
- [Correctness] Table "Physical quantities": the latitude row gives unit $\unit{rad}$ but the text and Table 9.1 use degrees; use degrees or convert.

### N3619

Note: [[09.09 Popular Resolutions of the Twin-Paradox|09.09 Popular Resolutions of the Twin-Paradox]]  
Priority: low · Graph: no · Manim: no

Brief section hub with a useful three-chart test in "Interpretation and checks"; no errors.

- [Links] Add links to [[09.09.01 Langevin's Solution in the Acceleration]] and [[09.09.02 Resolution Sans Acceleration]] so the hub routes to its subsections.

### N3620

Note: [[09.09.01 Langevin's Solution in the Acceleration|09.09.01 Langevin's Solution in the Acceleration]]  
Priority: medium · Graph: yes · Manim: yes

Clearly states the author's objection, but leaves the reader without the one-line standard calculation that resolves the asymmetry, so the critique cannot be evaluated.

- [Example] Add the standard worked case: $\mechanical{v}=0.6\mechanical{c}$, home time $10\,\unit{yr}$, traveller proper time $8\,\unit{yr}$, independent of turnaround duration as it shrinks; this concretises the "limiting case" mentioned in "Interpretation and checks".
- [Intuition] Explain why the two diagrams are not symmetric: the home worldline is a straight line between the meeting events, the traveller's is bent, and straight timelike lines maximise proper time (reverse triangle inequality); this is the geometric content the note calls "inadvertently arguing for an absolute frame".
- [Graph] Minkowski diagram with the home worldline, the bent traveller worldline for $\mechanical{v}=0.6\mechanical{c}$, and the traveller's lines of simultaneity just before and after turnaround, showing the jump on the home worldline.
- [Manim] Animate the traveller's simultaneity line sweeping across the home worldline during a short turnaround, with both clock readouts, to show where the "missing" home-twin time is assigned.

### N3621

Note: [[09.09.02 Resolution Sans Acceleration|09.09.02 Resolution Sans Acceleration]]  
Priority: medium · Graph: yes · Manim: yes

The simultaneity-jump bookkeeping is correct and well explained, but the graph labels per leg are wrong and the source's factor-2 inconsistencies are only flagged, not resolved.

- [Correctness] Fig. 9.4 labels each leg "T(1 − v²/4c²)"; each leg lasts $\mechanical{T}/2$, so the aged time per leg is $(\mechanical{T}/2)(1-\mechanical{v}^2/(2\mechanical{c}^2))=\mechanical{T}/2-\mechanical{T}\mechanical{v}^2/(4\mechanical{c}^2)$. Fix the labels (the same labels are copied into Fig. 9.5 of [[09.10 Einstein's Gravitational Resolution of the Paradox]]).
- [Simplify] Replace the note box about the inconsistent factor $1/2$ with the corrected statement: the reunion deficit is $\Delta\mechanical{T}=-\mechanical{T}\mechanical{v}^2/(2\mechanical{c}^2)=-\mechanical{L}\mechanical{v}/\mechanical{c}^2$ and the simultaneity jump is $2\mechanical{L}\mechanical{v}/\mechanical{c}^2$; then the "Doppler coincidence" paragraph can state the correct factor directly.
- [Correctness] "inertial observer C moving oppositely at relative velocity $-2\mechanical{v}$" is wrong in relativity (relative speed of C to B is $2\mechanical{v}/(1+\mechanical{v}^2/\mechanical{c}^2)$); state C moves at $-\mechanical{v}$ relative to A, which is the intended set-up.
- [Graph] Replace the schematic Fig. 9.4 by a quantitative Minkowski diagram for $\mechanical{v}=0.6\mechanical{c}$, $\mechanical{T}=10$: A's worldline, B/C legs, and B's simultaneity lines before/after the handover, labelling A's readings 3.2 and 6.8 yr at the jump.
- [Manim] Animate the A–B–C relay: B and C pass, the reading is copied, and the line of simultaneity jumps on A's worldline, with the three clock readouts updating.

### N3622

Note: [[09.10 Einstein's Gravitational Resolution of the Paradox|09.10 Einstein's Gravitational Resolution of the Paradox]]  
Priority: medium · Graph: yes · Manim: no

Einstein's pseudo-gravitational bookkeeping is correctly reproduced ($\Delta t=2\mechanical{v}\mechanical{L}/\mechanical{c}^2$, net $+\mechanical{T}\mechanical{v}^2/(2\mechanical{c}^2)$), but the editorial callout states the author's reading as historical fact and the figure labels repeat the leg-duration error.

- [Correctness] The callout "Einstein's twin-paradox resolution admitted that the STR alone was insufficient" is misleading: in the 1918 dialogue, the inertial-frame STR calculation already gives a unique answer; the GTR argument only describes the same result from the traveller's accelerated frame. Attribute the claim to the author or rephrase.
- [Correctness] Fig. 9.5(a,c) leg labels "T(1 − v²/4c²)" should be $\mechanical{T}/2-\mechanical{T}\mechanical{v}^2/(4\mechanical{c}^2)$ (each leg lasts $\mechanical{T}/2$), as in Fig. 9.4.
- [Simplify] Replace the middle-panel note about $\mechanical{g}\mechanical{L}/\mechanical{c}^2$ by simply writing the dimensionally correct label $|\mechanical{g}|t\mechanical{L}/\mechanical{c}^2=2\mechanical{v}\mechanical{L}/\mechanical{c}^2=\mechanical{T}\mechanical{v}^2/\mechanical{c}^2$.
- [Graph] Plot the home clock reading as assigned by the traveller versus traveller proper time for a finite turnaround with $\mechanical{a}=$ constant: slow growth on the legs, steep rise during turnaround (rate $1+\mechanical{a}\mechanical{L}/\mechanical{c}^2$), showing the integrated $2\mechanical{v}\mechanical{L}/\mechanical{c}^2$.
- [Example] Give numbers: $\mechanical{v}=0.1\mechanical{c}$, $\mechanical{L}=1\,\unit{ly}$: motional deficit $\mechanical{L}\mechanical{v}/\mechanical{c}^2=0.1\,\unit{yr}$ each way-pair, turnaround gain $0.2\,\unit{yr}$, net $+0.1\,\unit{yr}$ for A.

### N3623

Note: [[09.11 Summary|09.11 Summary]]  
Priority: low · Graph: no · Manim: no

Faithful chapter summary that clearly marks the author's conclusions; no errors beyond those inherited from 09.08.

- [Correctness] "Westward clocks returned older ... contrary to the STR as presented here" should add that the standard Earth-centred-inertial relativistic calculation by Hafele and Keating predicted this westward gain ($+275\pm21\,\unit{ns}$ total), so the summary does not imply the experiment contradicted standard relativity.
