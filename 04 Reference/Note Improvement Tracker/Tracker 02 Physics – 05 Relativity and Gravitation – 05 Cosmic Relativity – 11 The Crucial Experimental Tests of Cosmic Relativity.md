---
title: "Note Improvement Tracker – 02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/11 The Crucial Experimental Tests of Cosmic Relativity"
---

> [!TLDR]
> This note tracks the review of the 23 notes in `02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/11 The Crucial Experimental Tests of Cosmic Relativity`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 20 possible errors or notation conflicts. 20 of them are verified (17 fixed, 2 partly, 1 rejected); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3661|N3661]] 11 References: Ref. 8 (Krisher et al.) is Phys. Rev. D 42, 731–734 (1990), not "Phys. Rev. 42 ... (1980)". **Fixed:** Changed to Phys. Rev. D 42, 731-734 (1990)
- [[#N3664|N3664]] 11.01.01 Past Experiments on the One-Way Propagation of Light: The text describing Ruderfer's rotating disc points to "(Fig. 11.1)", but the Fig. 11.1 caption describes the Krisher et al. fibre experiment; either move the reference to the Krisher paragraph or add a separate schematic for the disc. **Fixed:** Removed the reference from the Ruderfer paragraph and added (Fig. 11.1) to the Krisher fibre-test paragraph; figure embed position unchanged
- [[#N3667|N3667]] 11.03.01 The Propagation of Light in a Moving Frame: For the looped path the stationary-frame travel time is not $\mechanical{L}/[\mechanical{c}_w(1-\mechanical{v}/\mechanical{c}_w)]$: summing segments gives $\Delta t\approx\mechanical{L}/\mechanical{c}_w+(\mechanical{v}/\mechanical{c}_w^2)\times$(A-to-B displacement along $\mechanical{\mathbf v}$), which is $\mechanical{L}/\mechanical{c}_w$ to first order when B is next to A (for the tabulated loop: $+2\mechanical{l}$ along, $-2\mechanical{l}$ against). Hence (11.8) gives $\Delta t'\approx\mechanical{L}/\mechanical{c}$ for light, not $\mechanical{L}/(\mechanical{c}-\mechanical{v})$, and the GT and Galilean (11.10) loop results also lose their first-order term. **Fixed:** Added a note callout after (11.9) with the segment-by-segment sum (+2l along, -2l against v) giving L/c_w and Delta t' = L/c for light; added l_i and Delta x_AB' to the table
- [[#N3667|N3667]] 11.03.01 The Propagation of Light in a Moving Frame: (11.9) divides the open-path displacement $\Delta\mechanical{x}'=\signal{\gamma}\mechanical{L}$ by the loop duration; for a loop the endpoint displacement is about zero and $\mechanical{L}$ is a path length, so the ratio is not a velocity. **Fixed:** Same note callout states that the loop endpoint displacement is about zero and L is a path length, so (11.9) is not a velocity
- [[#N3667|N3667]] 11.03.01 The Propagation of Light in a Moving Frame: The Lorentz factor is written $\signal{\gamma}$; use $\mechanical{\gamma}$. **Fixed:** Replaced all 18 \signal{\gamma} by \mechanical{\gamma}, the vault convention for the Lorentz factor
- [[#N3668|N3668]] 11.03.02 A Simple Demonstration of the Conflict Between the PoR and the Light Hypothesis: (11.11) uses $\mechanical{L}/[\mechanical{c}(1-\mechanical{v}/\mechanical{c})]$ for a light circuit of a loop co-moving with the detector; for a closed loop the first-order terms cancel (see \[\[11.03 The True Relative Velocity of Light - A Prelude to a Test\]\]), so the light circuit time is $\mechanical{L}/\mechanical{c}$ in the apparatus frame and $N$ is not $(\mechanical{c}-\mechanical{v})/(\mechanical{c}_s-\mechanical{v})$. **Rejected:** The loop is at rest in frame O (loop of length L in the apparatus rest frame) and only the detector moves along it (Fig. 11.3, d = vt), so the lapping interval L/(c-v) and N = (c-v)/(c_s-v) are correct; first-order cancellation applies only to a co-moving loop
- [[#N3669|N3669]] 11.04 The Experiment on the One-Way Relative Velocity of Light: Fig. 11.5(a) states that the four mirrors are fixed and only source, optics and detector translate; then in the lab frame (mirrors and light at rest) standard relativity predicts a counter-propagating delay $2\mechanical{L}\mechanical{v}/\mechanical{c}^2$, i.e. $2\times(3.1\,\unit{m}/\mechanical{c})\times\mechanical{v}/\mechanical{c}\approx7\times10^{-17}\,\unit{s}$ per $\unit{m/s}$, which matches the plotted slope (350 mV per m/s at 10 mV per $2\times10^{-18}\,\unit{s}$). The result therefore does not discriminate; this must be stated, since criterion 1 (co-moving A, B and path) is not met. **Fixed:** Verified 2*(3.1 m/c)*(v/c) = 6.9e-17 s per m/s and 350 mV*(2e-18 s/10 mV) = 7e-17 s; added a note callout stating this after the result paragraph
- [[#N3669|N3669]] 11.04 The Experiment on the One-Way Relative Velocity of Light: The sound-test check is consistent ($\mechanical{T}\mechanical{v}/\mechanical{c}_s=26\,\unit{ms}/343\approx76\,\unit{\mu s}$ per m/s versus a plotted slope of $80\,\unit{\mu s}$ per m/s), which confirms that the "$5\,\unit{ms}$" precision must be $5\,\unit{\mu s}$; correct it rather than retaining it in a note box. **Fixed:** Changed the text to 5 us and rewrote the note box to give the check and say the value is corrected; added c_s to the table
- [[#N3671|N3671]] 11.06 Cosmic Relativity and Clock Synchronisation: (11.14) defines $\mechanical{\mathbf v}_r$ as receiver velocity but then uses $\mechanical{\mathbf v}$; use one symbol. **Fixed:** Defined the receiver velocity as bold v and removed v_r from the table
- [[#N3672|N3672]] 11.07 Experimental Tests of Time Dilation - Atomic Clocks: $\mechanical{\mathbf l}_i$ in (11.17) is not defined; state that $\mechanical{\mathbf l}_i=\mechanical{\mathbf v}_it_i$ is the directed segment. **Fixed:** Added a sentence after (11.17): l_i = v_i t_i is the directed displacement of segment i
- [[#N3673|N3673]] 11.08 Experimental Tests of Time Dilation - GNSS and GPS: GPS satellites at $26\,560\,\unit{km}$ orbital radius move at $\sqrt{\mechanical{G}\mechanical{M}/r}\approx3.87\,\unit{km/s}$, not $3.6\,\unit{km/s}$. **Fixed:** sqrt(GM/r) = 3.874 km/s; text and table now give 3.87 km/s at 26 560 km and say the source prints 3.6 km/s and 26000 km
- [[#N3673|N3673]] 11.08 Experimental Tests of Time Dilation - GNSS and GPS: "Bidou" should be BeiDou, and Japan's system is QZSS (Quasi-Zenith Satellite System), not "QNSS"; QZSS and NavIC use geosynchronous inclined as well as geostationary orbits. **Fixed:** Corrected both names and described the regional systems as geostationary and inclined geosynchronous
- [[#N3674|N3674]] 11.08.01 Time Dilations in the GNSS Satellites: With $\mechanical{G}\mechanical{M}=3.986\times10^{14}\,\unit{m^3/s^2}$, $\mechanical{R}_0=6371\,\unit{km}$, $\mechanical{R}_s=26\,560\,\unit{km}$: $\mechanical{G}\mechanical{M}/(\mechanical{R}_0\mechanical{c}^2)=6.95\times10^{-10}$ (not $7.3\times10^{-10}$), the gravitational shift is $0.53\,\unit{ns/s}$ ($45.7\,\unit{\mu s/day}$), and the motional shift with $\mechanical{v}_s=3.87\,\unit{km/s}$ is $-0.083\,\unit{ns/s}$ ($-7.2\,\unit{\mu s/day}$), not $-0.07$; net $+38.5\,\unit{\mu s/day}$. **Fixed:** Recomputed (6.96e-10, 0.529 ns/s = 45.7 us/day, -0.0835 ns/s = -7.2 us/day, net 38.5 us/day); replaced the values and noted the printed source values
- [[#N3676|N3676]] 11.09 The Absence of a Relative Time Dilation in Accelerated Frames: Replace the retained values in the text by the correct ones already identified in the note box: $10\,\unit{mm}$ of light path is $33\,\unit{ps}$, $10^{-13}\,\unit{s}$ corresponds to $30\,\unit{\mu m}$, and a $10\,\unit{m}$ vertical separation on Earth accumulates about $0.1\,\unit{ns}$ per day. **Fixed:** Verified (10 mm/c = 33 ps, c*1e-13 s = 30 um, g d/c^2*86400 s = 0.094 ns); corrected the text and reduced the note box to the source values and checks
- [[#N3676|N3676]] 11.09 The Absence of a Relative Time Dilation in Accelerated Frames: $\mechanical{f}_g=d\mechanical{A}_g/dt$ uses the macro letter $\mechanical{f}$ for a field per unit mass while the chapter otherwise writes induced acceleration as $-\mechanical{c}\,d\mechanical{g}_{0i}/dt$; state units and normalisation. **Partly:** Units and normalisation were unstated; added the dimensionless normalisation A_g = -v/c (linked to 01.05), unit s^-1 for f_g and induced acceleration c f_g = -dv/dt, and updated the table; kept the symbol f_g
- [[#N3678|N3678]] 11.10.01 An Early History of the Relevant Ideas: The text dates Lodge's work to 1893 while citing ref. [15] from 1897; cite both papers (Phil. Trans. A 184, 727 (1893) and 189, 149 (1897)) or adjust the year. **Fixed:** Text now cites the 1893 paper (Phil. Trans. R. Soc. A 184, 727) and the 1897 paper [15]; the reference list (not in batch) is unchanged
- [[#N3679|N3679]] 11.10.02 The Experiments by G. Sagnac: The symbol $\mechanical{v}=\mechanical{R}\signal{\omega}$ in (11.26) uses $\signal{\omega}$ while the general formula uses $\boldsymbol{\omega}$ without macro, and 11.08.02 uses $\boldsymbol{\omega}$ for Earth rotation; use one convention for angular velocity in the chapter. **Partly:** Within this note, wrapped all three bare \boldsymbol{\omega} in \signal{}; 11.08.02 (not in batch) still uses bare \boldsymbol{\omega}
- [[#N3680|N3680]] 11.10.03 The Michelson-Gale Experiment: "Earth's rotation rate $2\pi/86400\,\mathrm{rad/s}$" is the solar-day value; the rotation rate relative to inertial space is the sidereal $2\pi/86164\,\mathrm{s}\approx7.292\times10^{-5}\,\mathrm{rad/s}$. **Fixed:** Replaced with the sidereal rate 2pi/86 164 s = 7.292e-5 rad/s
- [[#N3681|N3681]] 11.10.04 The Proof of the Galilean Nature of a Rotating Frame: The "moving-frame line element" is written in unprimed $dx$; substituting $x=x'\pm vt$ gives $ds^2=dx'^2\pm2v\,dx'\,dt-c^2(1-v^2/c^2)dt^2$, and the null condition $ds=0$ then yields $dx'/dt=c\mp v$, which is the check the note should display. **Fixed:** Extended the existing note callout with ds^2 = dx'^2 +- 2v dx' dt - c^2(1-v^2/c^2)dt^2 for x = x' +- vt and the null result dx'/dt = c -+ v
- [[#N3681|N3681]] 11.10.04 The Proof of the Galilean Nature of a Rotating Frame: "$c'=R\,d\phi/dt=c\mp R\omega$" uses the stationary angle; the relative light speed is $c'=R\,d\phi'/dt$ (with $d\phi/dt=c/R$ in the stationary frame). **Fixed:** Changed to c' = R dphi'/dt and stated dphi/dt = c/R in the stationary frame

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3661 | [[11 References\|11 References]] | Analyzed | low | no | no | [[#N3661\|View]] |
| N3662 | [[11.00 The Crucial Experimental Tests of Cosmic Relativity\|11.00 The Crucial Experimental Tests of Cosmic Relativity]] | Analyzed | low | no | no | [[#N3662\|View]] |
| N3663 | [[11.01 The Nature of Propagation of Light\|11.01 The Nature of Propagation of Light]] | Analyzed | low | no | no | [[#N3663\|View]] |
| N3664 | [[11.01.01 Past Experiments on the One-Way Propagation of Light\|11.01.01 Past Experiments on the One-Way Propagation of Light]] | Analyzed | medium | no | yes | [[#N3664\|View]] |
| N3665 | [[11.02 True Relative Velocity of Light - The Prediction\|11.02 True Relative Velocity of Light - The Prediction]] | Analyzed | low | no | no | [[#N3665\|View]] |
| N3666 | [[11.03 The True Relative Velocity of Light - A Prelude to a Test\|11.03 The True Relative Velocity of Light - A Prelude to a Test]] | Analyzed | medium | no | yes | [[#N3666\|View]] |
| N3667 | [[11.03.01 The Propagation of Light in a Moving Frame\|11.03.01 The Propagation of Light in a Moving Frame]] | Analyzed | high | no | yes | [[#N3667\|View]] |
| N3668 | [[11.03.02 A Simple Demonstration of the Conflict Between the PoR and the Light Hypothesis\|11.03.02 A Simple Demonstration of the Conflict Between the PoR and the Light Hypothesis]] | Analyzed | medium | no | no | [[#N3668\|View]] |
| N3669 | [[11.04 The Experiment on the One-Way Relative Velocity of Light\|11.04 The Experiment on the One-Way Relative Velocity of Light]] | Analyzed | high | no | yes | [[#N3669\|View]] |
| N3670 | [[11.05 Motional Time Dilation - The Predictions\|11.05 Motional Time Dilation - The Predictions]] | Analyzed | low | no | no | [[#N3670\|View]] |
| N3671 | [[11.06 Cosmic Relativity and Clock Synchronisation\|11.06 Cosmic Relativity and Clock Synchronisation]] | Analyzed | low | no | no | [[#N3671\|View]] |
| N3672 | [[11.07 Experimental Tests of Time Dilation - Atomic Clocks\|11.07 Experimental Tests of Time Dilation - Atomic Clocks]] | Analyzed | medium | yes | no | [[#N3672\|View]] |
| N3673 | [[11.08 Experimental Tests of Time Dilation - GNSS and GPS\|11.08 Experimental Tests of Time Dilation - GNSS and GPS]] | Analyzed | low | no | no | [[#N3673\|View]] |
| N3674 | [[11.08.01 Time Dilations in the GNSS Satellites\|11.08.01 Time Dilations in the GNSS Satellites]] | Analyzed | medium | yes | no | [[#N3674\|View]] |
| N3675 | [[11.08.02 The GNSS Mystery Created by the Galilean Propagation of Light\|11.08.02 The GNSS Mystery Created by the Galilean Propagation of Light]] | Analyzed | medium | no | yes | [[#N3675\|View]] |
| N3676 | [[11.09 The Absence of a Relative Time Dilation in Accelerated Frames\|11.09 The Absence of a Relative Time Dilation in Accelerated Frames]] | Analyzed | medium | no | yes | [[#N3676\|View]] |
| N3677 | [[11.10 The One-Way Relative Velocity of Light in Rotating Frames\|11.10 The One-Way Relative Velocity of Light in Rotating Frames]] | Analyzed | low | no | no | [[#N3677\|View]] |
| N3678 | [[11.10.01 An Early History of the Relevant Ideas\|11.10.01 An Early History of the Relevant Ideas]] | Analyzed | low | no | no | [[#N3678\|View]] |
| N3679 | [[11.10.02 The Experiments by G. Sagnac\|11.10.02 The Experiments by G. Sagnac]] | Analyzed | medium | yes | yes | [[#N3679\|View]] |
| N3680 | [[11.10.03 The Michelson-Gale Experiment\|11.10.03 The Michelson-Gale Experiment]] | Analyzed | medium | no | no | [[#N3680\|View]] |
| N3681 | [[11.10.04 The Proof of the Galilean Nature of a Rotating Frame\|11.10.04 The Proof of the Galilean Nature of a Rotating Frame]] | Analyzed | medium | no | yes | [[#N3681\|View]] |
| N3682 | [[11.11 Lorentz's Relativity, Einstein's Relativity and Cosmic Relativity\|11.11 Lorentz's Relativity, Einstein's Relativity and Cosmic Relativity]] | Analyzed | low | no | no | [[#N3682\|View]] |
| N3683 | [[11.12 Summary\|11.12 Summary]] | Analyzed | low | no | no | [[#N3683\|View]] |

## Suggestions

### N3661

Note: [[11 References|11 References]]  
Priority: low · Graph: no · Manim: no

Clean reference list with a useful study route; one citation is wrong.

- [Correctness] Ref. 8 (Krisher et al.) is Phys. Rev. D 42, 731–734 (1990), not "Phys. Rev. 42 ... (1980)".

### N3662

Note: [[11.00 The Crucial Experimental Tests of Cosmic Relativity|11.00 The Crucial Experimental Tests of Cosmic Relativity]]  
Priority: low · Graph: no · Manim: no

Clear chapter abstract and introduction; the dimensional typo in the travel time is correctly flagged.

- [Simplify] Replace the note box by writing the intended comparison $T=\mechanical{L}/(\mechanical{c}\pm\mechanical{v})$ versus $\mechanical{L}/\mechanical{c}$ directly in the text, with the first-order difference $\mp\mechanical{L}\mechanical{v}/\mechanical{c}^2$.
- [Structure] Remove the empty "Lecture account" heading directly above "Abstract" (or nest Abstract/Introduction under it) and add links to the 11.01–11.10 sections.

### N3663

Note: [[11.01 The Nature of Propagation of Light|11.01 The Nature of Propagation of Light]]  
Priority: low · Graph: no · Manim: no

Clear explanation of the one-way synchronisation problem; numbers (3.3 ns/m, a few fs at 300 m/s) check and (11.1) is consistent.

- [Example] Make the transport-synchronisation gap concrete: for slow transport over $\mechanical{L}$ the cross term in (11.1) integrates to $-\mechanical{u}\mechanical{L}/\mechanical{c}^2$ independent of transport speed, e.g. $\mechanical{u}=370\,\unit{km/s}$, $\mechanical{L}=1\,\unit{m}$ gives $4\,\unit{fs}$, exactly the size of the Galilean one-way effect $\mechanical{L}\mechanical{u}/\mechanical{c}^2$; this shows why slow clock transport cannot decide the question.
- [Intuition] Mention that this exact cancellation is the content of the conventionality of simultaneity (Reichenbach $\varepsilon$), so the reader can connect the note to the standard literature.

### N3664

Note: [[11.01.01 Past Experiments on the One-Way Propagation of Light|11.01.01 Past Experiments on the One-Way Propagation of Light]]  
Priority: medium · Graph: no · Manim: yes

Good account of the Ruderfer erratum story, but the figure referenced for the Ruderfer disc shows the Krisher fibre experiment, and the Krisher limit is quoted in an ambiguous way.

- [Correctness] The text describing Ruderfer's rotating disc points to "(Fig. 11.1)", but the Fig. 11.1 caption describes the Krisher et al. fibre experiment; either move the reference to the Krisher paragraph or add a separate schematic for the disc.
- [Example] Quote the Krisher result in its standard form: a phase variation below $1.5^\circ$ at $100\,\unit{MHz}$ is about $42\,\unit{ps}$ on a delay of about $105\,\unit{\mu s}$, i.e. $|\delta\mechanical{c}/\mechanical{c}|<3.5\times10^{-7}$; say that "$0.02\%$" refers to the fraction of an expected $\mechanical{v}/\mechanical{c}$ signal, if that is what is meant.
- [Simplify] Show the erratum cancellation in one line: propagation gives $+\signal{\omega}\mechanical{R}\mechanical{u}\sin\theta/\mechanical{c}^2$, absorber dilation in the absolute frame gives $-\mechanical{u}\mechanical{v}(t)/\mechanical{c}^2=-\mechanical{u}\signal{\omega}\mechanical{R}\sin\theta/\mechanical{c}^2$, sum zero; this replaces the note box on the missing $\mechanical{c}^{-2}$.
- [Manim] Animate Ruderfer's disc: emitter at the centre, absorber on the rim, the fixed absolute velocity $\mechanical{u}$, and two oscillating curves (propagation shift and absorber dilation) that cancel.

### N3665

Note: [[11.02 True Relative Velocity of Light - The Prediction|11.02 True Relative Velocity of Light - The Prediction]]  
Priority: low · Graph: no · Manim: no

Clear statement of the prediction and of the two experimental criteria; no errors.

- [Intuition] Add the remark that criterion 2 (no separated clocks) together with criterion 1 (endpoints co-moving) is exactly the closed-path situation discussed in \[\[11.03 The True Relative Velocity of Light - A Prelude to a Test\]\], where uniform translation gives no first-order term, so the reader anticipates the key issue.

### N3666

Note: [[11.03 The True Relative Velocity of Light - A Prelude to a Test|11.03 The True Relative Velocity of Light - A Prelude to a Test]]  
Priority: medium · Graph: no · Manim: yes

Clear description of the looped-path idea, with an interpretation section that correctly identifies why it fails for a co-moving loop.

- [Example] Add the explicit first-order loop calculation: time $=\sum_i\mechanical{L}_i/(\mechanical{c}-\mechanical{v}\cos\theta_i)\approx\mechanical{L}/\mechanical{c}+(\mechanical{v}/\mechanical{c}^2)\sum_i\mechanical{L}_i\cos\theta_i$, and the sum is the A-to-B displacement along $\mechanical{\mathbf v}$, which vanishes for co-located endpoints, even with Galilean propagation.
- [Manim] Animate a rectangular loop translating at $\mechanical{v}$ with a light pulse going around: show the pulse "losing" time on the segments along $\mechanical{v}$ and "gaining" it on the return segments, ending with a net first-order difference of zero.

### N3667

Note: [[11.03.01 The Propagation of Light in a Moving Frame|11.03.01 The Propagation of Light in a Moving Frame]]  
Priority: high · Graph: no · Manim: yes

The straight-path GT/LT comparison (11.3)–(11.7) is correct, but the loop analysis applies the straight-path travel time to a closed loop, so (11.8)–(11.10) are wrong at first order and the claimed LT contradiction does not follow.

- [Correctness] For the looped path the stationary-frame travel time is not $\mechanical{L}/[\mechanical{c}_w(1-\mechanical{v}/\mechanical{c}_w)]$: summing segments gives $\Delta t\approx\mechanical{L}/\mechanical{c}_w+(\mechanical{v}/\mechanical{c}_w^2)\times$(A-to-B displacement along $\mechanical{\mathbf v}$), which is $\mechanical{L}/\mechanical{c}_w$ to first order when B is next to A (for the tabulated loop: $+2\mechanical{l}$ along, $-2\mechanical{l}$ against). Hence (11.8) gives $\Delta t'\approx\mechanical{L}/\mechanical{c}$ for light, not $\mechanical{L}/(\mechanical{c}-\mechanical{v})$, and the GT and Galilean (11.10) loop results also lose their first-order term.
- [Correctness] (11.9) divides the open-path displacement $\Delta\mechanical{x}'=\signal{\gamma}\mechanical{L}$ by the loop duration; for a loop the endpoint displacement is about zero and $\mechanical{L}$ is a path length, so the ratio is not a velocity.
- [Correctness] The Lorentz factor is written $\signal{\gamma}$; use $\mechanical{\gamma}$.
- [Structure] Instead of four note boxes on retained source errors (missing $\signal{\gamma}$, row a times, $2\mechanical{l}+2\mechanical{h}$, $\mechanical{c}$ vs $\mechanical{c}_w$), give the corrected table once and mention the source discrepancies in a single note.
- [Manim] Animate the tabulated rectangular loop (points A, b, c, d, a, B) moving at $\mechanical{v}$ in frame O with the light front, labelling the O-frame times of each corner, to show segment-by-segment cancellation.

### N3668

Note: [[11.03.02 A Simple Demonstration of the Conflict Between the PoR and the Light Hypothesis|11.03.02 A Simple Demonstration of the Conflict Between the PoR and the Light Hypothesis]]  
Priority: medium · Graph: no · Manim: no

Clearly told thought experiment, but its key circuit time uses the straight-path formula for a closed loop, and the moving-frame count mixes conventions.

- [Correctness] (11.11) uses $\mechanical{L}/[\mechanical{c}(1-\mechanical{v}/\mechanical{c})]$ for a light circuit of a loop co-moving with the detector; for a closed loop the first-order terms cancel (see \[\[11.03 The True Relative Velocity of Light - A Prelude to a Test\]\]), so the light circuit time is $\mechanical{L}/\mechanical{c}$ in the apparatus frame and $N$ is not $(\mechanical{c}-\mechanical{v})/(\mechanical{c}_s-\mechanical{v})$.
- [Intuition] State that $N$ is a count of coincidence events and therefore the same in every consistent description; the apparent $N\neq N'$ arises from treating sound with a medium at rest in O while treating light as invariant in O′, which is the point made in "Interpretation and checks" and should be moved into the main text.

### N3669

Note: [[11.04 The Experiment on the One-Way Relative Velocity of Light|11.04 The Experiment on the One-Way Relative Velocity of Light]]  
Priority: high · Graph: no · Manim: yes

Detailed description of the sound and light loop experiments with well-recreated graphs, but the light set-up (lab-fixed mirrors, moving source/detector) produces the measured slope also in standard relativity, which the note does not say.

- [Correctness] Fig. 11.5(a) states that the four mirrors are fixed and only source, optics and detector translate; then in the lab frame (mirrors and light at rest) standard relativity predicts a counter-propagating delay $2\mechanical{L}\mechanical{v}/\mechanical{c}^2$, i.e. $2\times(3.1\,\unit{m}/\mechanical{c})\times\mechanical{v}/\mechanical{c}\approx7\times10^{-17}\,\unit{s}$ per $\unit{m/s}$, which matches the plotted slope (350 mV per m/s at 10 mV per $2\times10^{-18}\,\unit{s}$). The result therefore does not discriminate; this must be stated, since criterion 1 (co-moving A, B and path) is not met.
- [Correctness] The sound-test check is consistent ($\mechanical{T}\mechanical{v}/\mechanical{c}_s=26\,\unit{ms}/343\approx76\,\unit{\mu s}$ per m/s versus a plotted slope of $80\,\unit{\mu s}$ per m/s), which confirms that the "$5\,\unit{ms}$" precision must be $5\,\unit{\mu s}$; correct it rather than retaining it in a note box.
- [Simplify] Replace the note box on $3.3\times10^{-7}\,\unit{ns}$ by the correct value $\delta T=3.3\times10^{-8}\,\unit{ns}=33\,\unit{as}$ at $1\,\unit{m/s}$.
- [Manim] Animate the light loop with fixed mirrors and a moving detector/beam splitter: two counter-propagating pulses, the detector advancing during transit, and the resulting path-length difference, to show where the measured phase comes from.

### N3670

Note: [[11.05 Motional Time Dilation - The Predictions|11.05 Motional Time Dilation - The Predictions]]  
Priority: low · Graph: no · Manim: no

Short summary of the absolute-frame rate law; the sign slip in (11.13) is correctly flagged.

- [Simplify] Write (11.13) with the corrected sign ($+\mechanical{u}^2/(2\mechanical{c}^2)$ for the subtracted reference clock) and keep the source discrepancy in one sentence, rather than displaying an equation that does not equal its own right side.
- [Intuition] Point out that in an inertial chart the standard proper-time difference between a moving and a lab clock, when the lab itself moves at $\mechanical{\mathbf u}$, contains the same $\mechanical{\mathbf u}\cdot\mechanical{\mathbf v}/\mechanical{c}^2$ term; it integrates to $\mechanical{\mathbf u}\cdot\Delta\mechanical{\mathbf x}/\mechanical{c}^2$ (a synchronisation term) for uniform $\mechanical{\mathbf u}$, so it is not by itself absent from STR.

### N3671

Note: [[11.06 Cosmic Relativity and Clock Synchronisation|11.06 Cosmic Relativity and Clock Synchronisation]]  
Priority: low · Graph: no · Manim: no

Clear contrast of the two ranging formulas, with a good external reference in the interpretation section; expansion (11.15) checks.

- [Intuition] Add that $\mechanical{c}(t_r-t_s)-\hat{\mathbf D}\cdot\mechanical{\mathbf v}(t_r-t_s)$ is just the distance from the emission event to where the receiver was at emission time, which standard relativity also uses in an inertial chart; this makes clear the correction is geometric, as the interpretation section says.
- [Correctness] (11.14) defines $\mechanical{\mathbf v}_r$ as receiver velocity but then uses $\mechanical{\mathbf v}$; use one symbol.

### N3672

Note: [[11.07 Experimental Tests of Time Dilation - Atomic Clocks|11.07 Experimental Tests of Time Dilation - Atomic Clocks]]  
Priority: medium · Graph: yes · Manim: no

Numbers check (55, 207, 42, 146, -188, +104 ns), but the note does not tell the reader that Hafele and Keating's own standard-relativity calculation gives the same east/west asymmetry.

- [Intuition] State that the standard calculation in the Earth-centred nonrotating frame (ground clock moving at $\mechanical{R}_e\signal{\omega}_e\cos\lambda$) yields exactly the cross term $\mp\mechanical{R}_e\signal{\omega}_e\mechanical{L}\cos\lambda/\mechanical{c}^2$ and Hafele–Keating's published kinematic predictions $-184\pm18$ and $+96\pm10\,\unit{ns}$; the "STR comparison" in (11.16) uses the lab clock as if inertial.
- [Simplify] Fix the signs in (11.16)–(11.17) directly (final term $-\mechanical{L}\mechanical{v}/(2\mechanical{c}^2)$; reference term $+T\mechanical{u}^2/(2\mechanical{c}^2)$) and shorten the note box to one line about the source.
- [Correctness] $\mechanical{\mathbf l}_i$ in (11.17) is not defined; state that $\mechanical{\mathbf l}_i=\mechanical{\mathbf v}_it_i$ is the directed segment.
- [Graph] Plot predicted kinematic $\Delta T$ for an equatorial circumnavigation versus aircraft ground speed $\mechanical{v}\in[0,300]\,\unit{m/s}$ for eastward and westward trips, $-\mechanical{L}\mechanical{v}/(2\mechanical{c}^2)\mp\mechanical{R}_e\signal{\omega}_e\mechanical{L}/\mechanical{c}^2$, showing the speed-independent 207 ns offset.

### N3673

Note: [[11.08 Experimental Tests of Time Dilation - GNSS and GPS|11.08 Experimental Tests of Time Dilation - GNSS and GPS]]  
Priority: low · Graph: no · Manim: no

Readable overview of GNSS as a clock laboratory, but the orbital speed and two system names are wrong.

- [Correctness] GPS satellites at $26\,560\,\unit{km}$ orbital radius move at $\sqrt{\mechanical{G}\mechanical{M}/r}\approx3.87\,\unit{km/s}$, not $3.6\,\unit{km/s}$.
- [Correctness] "Bidou" should be BeiDou, and Japan's system is QZSS (Quasi-Zenith Satellite System), not "QNSS"; QZSS and NavIC use geosynchronous inclined as well as geostationary orbits.

### N3674

Note: [[11.08.01 Time Dilations in the GNSS Satellites|11.08.01 Time Dilations in the GNSS Satellites]]  
Priority: medium · Graph: yes · Manim: no

Clear structure, but the quoted GPS rate numbers are slightly off and the Cosmic Relativity formula is written awkwardly.

- [Correctness] With $\mechanical{G}\mechanical{M}=3.986\times10^{14}\,\unit{m^3/s^2}$, $\mechanical{R}_0=6371\,\unit{km}$, $\mechanical{R}_s=26\,560\,\unit{km}$: $\mechanical{G}\mechanical{M}/(\mechanical{R}_0\mechanical{c}^2)=6.95\times10^{-10}$ (not $7.3\times10^{-10}$), the gravitational shift is $0.53\,\unit{ns/s}$ ($45.7\,\unit{\mu s/day}$), and the motional shift with $\mechanical{v}_s=3.87\,\unit{km/s}$ is $-0.083\,\unit{ns/s}$ ($-7.2\,\unit{\mu s/day}$), not $-0.07$; net $+38.5\,\unit{\mu s/day}$.
- [Simplify] Write (11.22) as $-\mechanical{v}_s^2/(2\mechanical{c}^2)+\mechanical{v}_o^2/(2\mechanical{c}^2)$ instead of the double negative $-(-\mechanical{v}_o^2)/(2\mechanical{c}^2)$, and say that the velocities are Earth-centred-inertial ones (the ground receiver has $\mechanical{v}_o=465\cos\lambda\,\unit{m/s}$).
- [Graph] Plot fractional rate offsets versus orbital radius $r\in[6.6,45]\times10^3\,\unit{km}$: gravitational $(\mechanical{G}\mechanical{M}/\mechanical{c}^2)(1/\mechanical{R}_0-1/r)$, motional $-\mechanical{G}\mechanical{M}/(2r\mechanical{c}^2)$ and their sum, marking the zero crossing near $r=1.5\mechanical{R}_0$ and the GPS radius.

### N3675

Note: [[11.08.02 The GNSS Mystery Created by the Galilean Propagation of Light|11.08.02 The GNSS Mystery Created by the Galilean Propagation of Light]]  
Priority: medium · Graph: no · Manim: yes

The Sagnac-term algebra in (11.25) checks, but the note leaves the reader with the author's claim that receiver-motion terms imply Galilean light, without the one-line standard explanation.

- [Intuition] Add the standard derivation: in the Earth-centred inertial frame light travels at $\mechanical{c}$ from the emission event to the reception event, and the receiver moves by $\mechanical{\mathbf v}\Delta\tau$ during transit; expanding $|\mechanical{\mathbf x}_r(t_r)-\mechanical{\mathbf x}_s(t_e)|=\mechanical{c}(t_r-t_e)$ about $\mechanical{\mathbf x}_r(t_e)$ gives exactly (11.24), with no change of local light speed.
- [Example] Give the size of the Sagnac term for a ground receiver: with $|\mechanical{\mathbf d}|\approx2\times10^7\,\unit{m}$ and $|\mechanical{\mathbf v}|\le465\,\unit{m/s}$, $\mechanical{\mathbf d}\cdot\mechanical{\mathbf v}/\mechanical{c}^2$ is up to about $100\,\unit{ns}$ (about $30\,\unit{m}$ of range).
- [Simplify] Replace the note box on 40 m vs 20 m by the correct number $\mechanical{v}_o\Delta\tau\approx20\,\unit{m}$ and keep the source value in parentheses.
- [Manim] Animate a satellite emitting a pulse toward a receiver on the rotating Earth: the receiver moves during the 67 ms transit, showing the extra path and the triangle area $\mechanical{\mathbf A}=\tfrac12\mechanical{\mathbf R}\times\mechanical{\mathbf d}$ swept.

### N3676

Note: [[11.09 The Absence of a Relative Time Dilation in Accelerated Frames|11.09 The Absence of a Relative Time Dilation in Accelerated Frames]]  
Priority: medium · Graph: no · Manim: yes

Clear experimental proposal whose order-of-magnitude slips are correctly flagged, but the note keeps the wrong numbers in the main text.

- [Correctness] Replace the retained values in the text by the correct ones already identified in the note box: $10\,\unit{mm}$ of light path is $33\,\unit{ps}$, $10^{-13}\,\unit{s}$ corresponds to $30\,\unit{\mu m}$, and a $10\,\unit{m}$ vertical separation on Earth accumulates about $0.1\,\unit{ns}$ per day.
- [Correctness] $\mechanical{f}_g=d\mechanical{A}_g/dt$ uses the macro letter $\mechanical{f}$ for a field per unit mass while the chapter otherwise writes induced acceleration as $-\mechanical{c}\,d\mechanical{g}_{0i}/dt$; state units and normalisation.
- [Intuition] Contrast the author's Galilean signal-advance argument with the standard one: in the vehicle frame (after acceleration) light travels $\mechanical{L}$ at $\mechanical{c}$ in both directions with Einstein synchronisation, so the standard prediction for the readout is the Rindler clock difference $T\mechanical{a}\mechanical{L}/\mechanical{c}^2$ alone.
- [Manim] Animate the train scenario: two clocks C1 and C2 separated by 100 m accelerating, a light signal sent from C2 to C1, and the clock readouts, showing which contribution each theory attributes to clock rate versus signal timing.

### N3677

Note: [[11.10 The One-Way Relative Velocity of Light in Rotating Frames|11.10 The One-Way Relative Velocity of Light in Rotating Frames]]  
Priority: low · Graph: no · Manim: no

Short historical section introduction with a correct interpretation of why rotation differs from translation.

- [Links] Add links to \[\[11.10.01 An Early History of the Relevant Ideas\]\] and \[\[11.10.02 The Experiments by G. Sagnac\]\].

### N3678

Note: [[11.10.01 An Early History of the Relevant Ideas|11.10.01 An Early History of the Relevant Ideas]]  
Priority: low · Graph: no · Manim: no

Well-written history with apt Michelson quotations; Michelson's integral is correctly reproduced.

- [Intuition] Connect Michelson's $T=(2/\mechanical{V}^2)\oint\mechanical{v}\cos\theta\,d\mechanical{s}$ to Stokes' theorem: for rigid rotation it equals $4\mechanical{\mathbf A}\cdot\boldsymbol{\Omega}/\mechanical{V}^2$, and for uniform translation it vanishes, which explains both the Michelson–Morley null and the Sagnac signal in one line.
- [Correctness] The text dates Lodge's work to 1893 while citing ref. [15] from 1897; cite both papers (Phil. Trans. A 184, 727 (1893) and 189, 149 (1897)) or adjust the year.

### N3679

Note: [[11.10.02 The Experiments by G. Sagnac|11.10.02 The Experiments by G. Sagnac]]  
Priority: medium · Graph: yes · Manim: yes

Correct Sagnac derivation ((11.26) and the Stokes form check) and good history; it would benefit from a worked fringe estimate and a visual.

- [Example] Add the fringe estimate for Sagnac's set-up: $\mechanical{A}=0.086\,\unit{m^2}$, $\signal{\omega}=2\pi\times2\,\unit{rad/s}$ gives $\delta T=4\mechanical{A}\signal{\omega}/\mechanical{c}^2\approx4.8\times10^{-17}\,\unit{s}$, i.e. about $0.03$ fringe at $436\,\unit{nm}$, doubled to about $0.07$ by reversing rotation; and for Michelson–Gale ($207\,800\,\unit{m^2}$, Earth rotation at $41.8^\circ$ N) about $0.23$ fringe.
- [Correctness] The symbol $\mechanical{v}=\mechanical{R}\signal{\omega}$ in (11.26) uses $\signal{\omega}$ while the general formula uses $\boldsymbol{\omega}$ without macro, and 11.08.02 uses $\boldsymbol{\omega}$ for Earth rotation; use one convention for angular velocity in the chapter.
- [Graph] Plot fringe shift $4\mechanical{A}\signal{\omega}/(\lambda\mechanical{c})$ versus rotation frequency $0$–$3\,\unit{Hz}$ for Sagnac's area, with the measured point at $2\,\unit{Hz}$.
- [Manim] Animate a rotating ring interferometer with co- and counter-rotating pulses, showing the detector moving so that the co-rotating pulse needs a longer path, and the resulting arrival-time difference.

### N3680

Note: [[11.10.03 The Michelson-Gale Experiment|11.10.03 The Michelson-Gale Experiment]]  
Priority: medium · Graph: no · Manim: no

Clear historical account with correctly transcribed numbers, but the expected fringe shift is quoted without the formula that produces it.

- [Example] Add the leading Sagnac fringe formula $\Delta N=4A\Omega\sin\varphi/(\lambda c)$ and evaluate it: $A=613\times339\approx2.078\times10^5\,\mathrm{m^2}$, $\varphi\approx41.8^\circ$, $\lambda\approx570\,\mathrm{nm}$ give $\Delta N\approx0.235$, reproducing the quoted $0.236\pm0.002$.
- [Correctness] "Earth's rotation rate $2\pi/86400\,\mathrm{rad/s}$" is the solar-day value; the rotation rate relative to inertial space is the sidereal $2\pi/86164\,\mathrm{s}\approx7.292\times10^{-5}\,\mathrm{rad/s}$.
- [Structure] The Physical quantities table has only "—" symbols; introduce $A$, $\Omega$, $\varphi$, $\lambda$, $\Delta N$ in the text with the formula above and list them.
- [Intuition] Explain in one sentence why the counter-clockwise beam is retarded (it co-rotates with Earth seen from above the northern hemisphere) and why the small inner rectangle gives an almost null reference shift (its area is much smaller).

### N3681

Note: [[11.10.04 The Proof of the Galilean Nature of a Rotating Frame|11.10.04 The Proof of the Galilean Nature of a Rotating Frame]]  
Priority: medium · Graph: no · Manim: yes

Faithful transcription with good dimensional notes, but primed and unprimed coordinates are mixed and the closed-loop delay is never actually computed from the metric.

- [Correctness] The "moving-frame line element" is written in unprimed $dx$; substituting $x=x'\pm vt$ gives $ds^2=dx'^2\pm2v\,dx'\,dt-c^2(1-v^2/c^2)dt^2$, and the null condition $ds=0$ then yields $dx'/dt=c\mp v$, which is the check the note should display.
- [Correctness] "$c'=R\,d\phi/dt=c\mp R\omega$" uses the stationary angle; the relative light speed is $c'=R\,d\phi'/dt$ (with $d\phi/dt=c/R$ in the stationary frame).
- [Example] Restore $dt^2$ in (11.28), solve the null condition for both directions, and show that the round-trip difference is $\delta T=4A\omega/c^2=2Lv/c^2$ for $A=\pi R^2$, $L=2\pi R$, $v=\omega R$, matching (11.27).
- [Manim] Animate a straight A–B track bending into a circle that then rotates, while two light pulses travel in opposite directions and reach the moving emitter at different times, to make the train analogy concrete.
- [Simplify] In Interpretation, quote the exact rotating-coordinate metric of ordinary relativity, $ds^2=-(c^2-\omega^2r^2)dt^2+2\omega r^2d\phi\,dt+dr^2+r^2d\phi^2+dz^2$, so the reader can compare it directly with the source's Galilean form.

### N3682

Note: [[11.11 Lorentz's Relativity, Einstein's Relativity and Cosmic Relativity|11.11 Lorentz's Relativity, Einstein's Relativity and Cosmic Relativity]]  
Priority: low · Graph: no · Manim: no

Short historical-philosophical comparison that is readable and balanced by its Interpretation section.

- [Links] Link the Sagnac, Michelson–Gale, Hafele–Keating, and GNSS sections of this chapter where the note names them as evidence.

### N3683

Note: [[11.12 Summary|11.12 Summary]]  
Priority: low · Graph: no · Manim: no

Accurate chapter summary that flags the source's dimensionally incomplete accelerated-clock expressions.

- [Simplify] In the accelerated-clock paragraph, print the dimensionally correct forms $vL/c^2$, $aTL/c^2$, and $2aTL/c^2$ in the main text and move the source's printed forms into the note, so the summary does not repeat formulas without time units.
- [Links] Link each summarised topic to its section note (11.9 accelerated clocks, 11.10.02 Sagnac, 11.10.03 Michelson–Gale, 11.10.04 Langevin metric).
