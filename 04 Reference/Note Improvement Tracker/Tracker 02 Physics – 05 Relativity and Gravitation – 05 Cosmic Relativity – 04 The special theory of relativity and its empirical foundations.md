---
title: "Note Improvement Tracker – 02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/04 The special theory of relativity and its empirical foundations"
---

> [!TLDR]
> This note tracks the review of the 12 notes in `02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/04 The special theory of relativity and its empirical foundations`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 8 possible errors or notation conflicts. 8 of them are verified (7 fixed, 1 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3528|N3528]] 04.01 Einstein's Motivations for a Theory of Relativity: "Einstein mentioned the astronomical evidence of light received from double stars for this fact [3, 4]" sits inside the account of 1905. The 1905 paper cites no double-star evidence. De Sitter's argument [4] dates from 1913, and the remark about school children is in the 1916 popular book. State the dates, so that it is not read as part of Einstein's 1905 reasoning. **Fixed:** Marked it as later writings (1916 popular monograph) and stated that the 1905 paper does not cite it and De Sitter's argument dates from 1913
- [[#N3529|N3529]] 04.02 The Lorentz Transformations: "A clock in O′ at the position $\mechanical{x}$ of the frame O runs behind a clock at the origin ... by the amount $\mechanical{v}\mechanical{x}/\mechanical{c}^2$": from Eq. (4.7), at fixed $t$ the offset is $\gamma\mechanical{v}\mechanical{x}/\mechanical{c}^2=\mechanical{v}\mechanical{x}'/\mechanical{c}^2$. Write it with $\mechanical{x}'$, or add γ. **Fixed:** Changed amount to γvx/c² at the same time t of frame O, from Eq. (4.7)
- [[#N3531|N3531]] 04.03.01 The Doppler Effect in the STR: "All the experiments use a moving source and a stationary detector" is false. Mössbauer rotor experiments with the absorber on the rim (Hay et al. 1960, Kündig 1963) used a moving receiver and agreed with special relativity. **Fixed:** Restricted statement to canal-ray experiments and added the rotor experiments (Hay et al. 1960, Kündig 1963) with moving receiver agreeing with STR
- [[#N3531|N3531]] 04.03.01 The Doppler Effect in the STR: "the spectral shift that is confirmed in experiments, like the Ives-Stilwell experiment, directly contradicts this": Eq. (4.21) uses φ = 90° in the observer frame, while Eq. (4.22) is emission at 90° in the source frame. These are different geometries related by aberration, and Ives–Stilwell measured the forward and backward lines, not 90°. No contradiction follows. The note's "Interpretation and checks" says this, but the lecture text calls it a refutation. **Partly:** Core point right, but claim swaps frames: Eq. (4.21) is 90° in source frame and Eq. (4.22) is reception at 90° in observer frame; replaced "directly contradicts" with "appears to contradict" plus that geometry explanation and the Ives–Stilwell remark
- [[#N3531|N3531]] 04.03.01 The Doppler Effect in the STR: "For the special case φ = 0, the important difference between the two expressions ... cannot be discerned" compares Eq. (4.18) (observer receding for $\mechanical{v}>0$) with Eq. (4.20) (source approaching). These are reciprocal, opposite senses of motion. State the sign convention, so that the reader sees that the same sense of relative motion gives the same formula. **Fixed:** Added the sign convention of v in each equation and that the same sense of motion gives the same result
- [[#N3532|N3532]] 04.03.02 The Unipolar Phenomena and the STR: "requires only the local magnetic field $\magnetic{\mathbf B}$ and the instantaneous relative velocity $\mechanical{\mathbf v}$": in the co-rotating case the relative velocity of conductor and magnet is zero, yet an emf appears. The velocity in $\electric{\mathbf E}=\mechanical{\mathbf v}\times\magnetic{\mathbf B}$ must be the conductor's velocity in the frame where the field is static (the lab), not the velocity relative to the magnet. **Fixed:** Replaced "instantaneous relative velocity" with velocity of the charge in the lab frame where B is static, noting co-rotation; updated table row
- [[#N3532|N3532]] 04.03.02 The Unipolar Phenomena and the STR: "hidden under a several rug" is a typo. Use "swept under the rug" or similar. **Fixed:** Changed to "swept under the rug"
- [[#N3534|N3534]] 04.03.04 The Empirical Status of the Light Hypothesis: Correct in place: "$\mechanical{v}\delta t=\mechanical{v}\mechanical{x}/\mechanical{c}^2$ is the duration the signal saves" should read $(\mechanical{v}/\mechanical{c})\delta t=\mechanical{v}\mechanical{x}/\mechanical{c}^2$. The callout notes the unit mismatch but leaves the wrong expression in the text. **Fixed:** Changed text to (v/c)δt=vx/c² and updated the callout to say the text uses the corrected duration

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3526 | [[04 References\|04 References]] | Analyzed | low | no | no | [[#N3526\|View]] |
| N3527 | [[04.00 The Special Theory of Relativity and Its Empirical Foundations\|04.00 The Special Theory of Relativity and Its Empirical Foundations]] | Analyzed | low | no | no | [[#N3527\|View]] |
| N3528 | [[04.01 Einstein's Motivations for a Theory of Relativity\|04.01 Einstein's Motivations for a Theory of Relativity]] | Analyzed | low | no | no | [[#N3528\|View]] |
| N3529 | [[04.02 The Lorentz Transformations\|04.02 The Lorentz Transformations]] | Analyzed | medium | yes | yes | [[#N3529\|View]] |
| N3530 | [[04.03 The Physical Results of the Special Theory of Relativity\|04.03 The Physical Results of the Special Theory of Relativity]] | Analyzed | medium | yes | no | [[#N3530\|View]] |
| N3531 | [[04.03.01 The Doppler Effect in the STR\|04.03.01 The Doppler Effect in the STR]] | Analyzed | high | yes | yes | [[#N3531\|View]] |
| N3532 | [[04.03.02 The Unipolar Phenomena and the STR\|04.03.02 The Unipolar Phenomena and the STR]] | Analyzed | medium | no | no | [[#N3532\|View]] |
| N3533 | [[04.03.03 Einstein's STR and Thermodynamics\|04.03.03 Einstein's STR and Thermodynamics]] | Analyzed | medium | yes | no | [[#N3533\|View]] |
| N3534 | [[04.03.04 The Empirical Status of the Light Hypothesis\|04.03.04 The Empirical Status of the Light Hypothesis]] | Analyzed | medium | yes | no | [[#N3534\|View]] |
| N3535 | [[04.04 The General Nature of Experimenters' Interpretations\|04.04 The General Nature of Experimenters' Interpretations]] | Analyzed | medium | no | no | [[#N3535\|View]] |
| N3536 | [[04.05 The Special Theory of Relativity and Accelerated Frames\|04.05 The Special Theory of Relativity and Accelerated Frames]] | Analyzed | low | no | no | [[#N3536\|View]] |
| N3537 | [[04.06 Summary\|04.06 Summary]] | Analyzed | low | no | no | [[#N3537\|View]] |

## Suggestions

### N3526

Note: [[04 References|04 References]]  
Priority: low · Graph: no · Manim: no

A reference list; no change needed.

- [Links] Reference 13 links to a general site. If a stable URL for the translated Nordmann article exists, use it; otherwise state that only the journal issue is cited.

### N3527

Note: [[04.00 The Special Theory of Relativity and Its Empirical Foundations|04.00 The Special Theory of Relativity and Its Empirical Foundations]]  
Priority: low · Graph: no · Manim: no

A short chapter introduction; clear, with no change needed.

- [Links] Add a short list of the chapter's sub-notes (04.01–04.06), as the other chapter hubs have, so the introduction can be used for navigation.

### N3528

Note: [[04.01 Einstein's Motivations for a Theory of Relativity|04.01 Einstein's Motivations for a Theory of Relativity]]  
Priority: low · Graph: no · Manim: no

A readable historical account of Einstein's motivations, with one chronological issue.

- [Correctness] "Einstein mentioned the astronomical evidence of light received from double stars for this fact [3, 4]" sits inside the account of 1905. The 1905 paper cites no double-star evidence. De Sitter's argument [4] dates from 1913, and the remark about school children is in the 1916 popular book. State the dates, so that it is not read as part of Einstein's 1905 reasoning.
- [Example] For the magnet–conductor paragraph, add the two-frame calculation: in the magnet frame the force is $\electric{q}\mechanical{\mathbf v}\times\magnetic{\mathbf B}$, and in the conductor frame it is $\electric{q}\electric{\mathbf E}'$ with $\electric{\mathbf E}'=\mechanical{\mathbf v}\times\magnetic{\mathbf B}$ to first order. The emf is the same in both.

### N3529

Note: [[04.02 The Lorentz Transformations|04.02 The Lorentz Transformations]]  
Priority: medium · Graph: yes · Manim: yes

The derivation in Eq. (4.3) is correct and easy to follow; the clock-offset statement drops a γ, and a spacetime diagram would help.

- [Correctness] "A clock in O′ at the position $\mechanical{x}$ of the frame O runs behind a clock at the origin ... by the amount $\mechanical{v}\mechanical{x}/\mechanical{c}^2$": from Eq. (4.7), at fixed $t$ the offset is $\gamma\mechanical{v}\mechanical{x}/\mechanical{c}^2=\mechanical{v}\mechanical{x}'/\mechanical{c}^2$. Write it with $\mechanical{x}'$, or add γ.
- [Simplify] Replace the light-path symbol $d\mechanical{l}$ in Eqs. (4.1)–(4.2) by the interval $ds^2=d\mechanical{x}^2+d\mechanical{y}^2+d\mechanical{z}^2-\mechanical{c}^2dt^2$ from the start. This removes the need for the "Source interval symbol" callout and makes clear what Eq. (4.3) keeps invariant.
- [Graph] Draw a Minkowski diagram ($\mechanical{x}$, $\mechanical{c}t$) with the O′ axes for $\beta=0.5$: the $\mechanical{c}t'$ axis with slope $1/\beta$, the $\mechanical{x}'$ axis with slope β, and the light line at 45°. Mark lines of constant $t'$, so that the $-\mechanical{v}\mechanical{x}/\mechanical{c}^2$ term appears as tilted simultaneity lines.
- [Manim] Animate a Lorentz boost of the spacetime grid: as β increases from 0 to 0.8, the primed axes scissor towards the light line, which stays fixed.

### N3530

Note: [[04.03 The Physical Results of the Special Theory of Relativity|04.03 The Physical Results of the Special Theory of Relativity]]  
Priority: medium · Graph: yes · Manim: no

The derivations of contraction, dilation, velocity addition and drag are correct, but several printed typos are only listed in callouts.

- [Structure] Correct the printed forms in place instead of only in callouts: $\mechanical{y}=\mechanical{y}'$ and $\mechanical{z}=\mechanical{z}'$ in Eqs. (4.12)–(4.13), $dt'$ in the numerator of Eq. (4.15), "$\mechanical{\phi}=\pi/2$" after Eq. (4.16), and the reference to Eq. (4.4)/(4.7) instead of (4.11)/(4.14). Each callout makes the reader do the correction.
- [Example] After Eq. (4.9), add a muon example: $\tau_0=2.2\,\unit{\mu s}$ and $\gamma=10$ give a lab lifetime of 22 μs and a mean decay length of about 6.6 km. This makes time dilation concrete.
- [Graph] Plot $\mechanical{u}$ against $\mechanical{u}'$ from Eq. (4.15) for $\mechanical{v}=0.5\mechanical{c}$ and $0.9\mechanical{c}$, with $\mechanical{u}'\in[-\mechanical{c},\mechanical{c}]$, against the Galilean line $\mechanical{u}'+\mechanical{v}$. All relativistic curves stay within $\pm\mechanical{c}$.
- [Simplify] Keep the author's interpretation of the "local time" in one clearly marked paragraph. As written, the derivation of Eqs. (4.9)–(4.10) is mixed with claims about "mysteriously unsynchronised" clocks.

### N3531

Note: [[04.03.01 The Doppler Effect in the STR|04.03.01 The Doppler Effect in the STR]]  
Priority: high · Graph: yes · Manim: yes

The note argues that Einstein's Doppler formula is contradicted by experiment, but this depends on frame-dependent angles and on factual claims that are not correct.

- [Correctness] "All the experiments use a moving source and a stationary detector" is false. Mössbauer rotor experiments with the absorber on the rim (Hay et al. 1960, Kündig 1963) used a moving receiver and agreed with special relativity.
- [Correctness] "the spectral shift that is confirmed in experiments, like the Ives-Stilwell experiment, directly contradicts this": Eq. (4.21) uses φ = 90° in the observer frame, while Eq. (4.22) is emission at 90° in the source frame. These are different geometries related by aberration, and Ives–Stilwell measured the forward and backward lines, not 90°. No contradiction follows. The note's "Interpretation and checks" says this, but the lecture text calls it a refutation.
- [Correctness] "For the special case φ = 0, the important difference between the two expressions ... cannot be discerned" compares Eq. (4.18) (observer receding for $\mechanical{v}>0$) with Eq. (4.20) (source approaching). These are reciprocal, opposite senses of motion. State the sign convention, so that the reader sees that the same sense of relative motion gives the same formula.
- [Simplify] Unify the angle symbol: θ in Eqs. (4.17) and (4.19), φ in the text. Say in which frame each angle is measured.
- [Graph] Plot $\signal{\nu}'/\signal{\nu}$ against the observer-frame angle (0–180°) from Eq. (4.17), and against the source-frame angle from Eq. (4.19), for β = 0.3. The two curves cross 1 at different angles, which shows why "transverse" is frame-dependent.
- [Manim] Animate a source moving past a detector. Show the photon emitted at 90° in the source frame arriving tilted in the lab, and mark the received frequency in both descriptions.

### N3532

Note: [[04.03.02 The Unipolar Phenomena and the STR|04.03.02 The Unipolar Phenomena and the STR]]  
Priority: medium · Graph: no · Manim: no

The historical quotations are presented clearly, but the force-law statement contradicts the note's own co-rotating example, and the standard explanation is not given.

- [Correctness] "requires only the local magnetic field $\magnetic{\mathbf B}$ and the instantaneous relative velocity $\mechanical{\mathbf v}$": in the co-rotating case the relative velocity of conductor and magnet is zero, yet an emf appears. The velocity in $\electric{\mathbf E}=\mechanical{\mathbf v}\times\magnetic{\mathbf B}$ must be the conductor's velocity in the frame where the field is static (the lab), not the velocity relative to the magnet.
- [Correctness] "hidden under a several rug" is a typo. Use "swept under the rug" or similar.
- [Intuition] Add the standard textbook resolution in one paragraph: emf is the loop integral of the force per charge in a single frame, and the stationary brushes and return wire complete the loop. This reproduces all three rotating cases without a preferred frame. Then mark the author's absolute-frame view as an alternative interpretation.
- [Links] Link to [[03.09 Experiments on the Unipolar Induction]] for the disc-emf formula once it is added there.

### N3533

Note: [[04.03.03 Einstein's STR and Thermodynamics|04.03.03 Einstein's STR and Thermodynamics]]  
Priority: medium · Graph: yes · Manim: no

A concise account of the moving-temperature debate; it is clear but omits the invariant-temperature position and a concrete observable.

- [Intuition] Add the third standard position (Landsberg: $\thermal{T}'=\thermal{T}$) next to Planck–Einstein 1907 ($\thermal{T}/\gamma$) and Ott/Einstein 1952 ($\gamma\thermal{T}$). Then explain that the disagreement is about how heat and work are defined for a moving body, not about a measured value.
- [Example] Give the observable case: a detector moving at β through blackbody radiation sees a direction-dependent temperature $\thermal{T}(\theta)=\thermal{T}_0/[\gamma(1-\beta\cos\theta)]$. This is the measured CMB dipole, about 3.36 mK for β ≈ 1.23×10⁻³.
- [Graph] Plot $\thermal{T}(\theta)/\thermal{T}_0$ against θ (0–180°) for β = 0.1 and 0.5. Draw horizontal lines at $1/\gamma$, $1$ and $\gamma$, so the reader sees that no single scalar transformation describes the directional spectrum.

### N3534

Note: [[04.03.04 The Empirical Status of the Light Hypothesis|04.03.04 The Empirical Status of the Light Hypothesis]]  
Priority: medium · Graph: yes · Manim: no

A clear presentation of the two-way versus one-way issue, with useful quotations; it lacks the standard conventionality framework and includes a dimensional slip.

- [Correctness] Correct in place: "$\mechanical{v}\delta t=\mechanical{v}\mechanical{x}/\mechanical{c}^2$ is the duration the signal saves" should read $(\mechanical{v}/\mechanical{c})\delta t=\mechanical{v}\mechanical{x}/\mechanical{c}^2$. The callout notes the unit mismatch but leaves the wrong expression in the text.
- [Intuition] Introduce the Reichenbach parameter ε: $t_B=t_A+\epsilon(t'_A-t_A)$ with $0<\epsilon<1$, where Einstein's convention is ε = 1/2. One-way speeds are then $\mechanical{c}/(2\epsilon)$ and $\mechanical{c}/(2(1-\epsilon))$, and the round trip stays $\mechanical{c}$. This makes the note's main point precise in one line.
- [Graph] Plot the one-way speeds $c_{\rightarrow}=\mechanical{c}/(2\epsilon)$ and $c_{\leftarrow}=\mechanical{c}/(2(1-\epsilon))$ against ε in [0.3, 0.7], with their harmonic mean fixed at $\mechanical{c}$.
- [Structure] State in the lecture section, not only in "Interpretation and checks", which constraints do exist: source-independence (de Sitter, and the 1964 CERN π⁰ decay-photon test), round-trip isotropy (modern cavity tests at about $10^{-17}$), and Kennedy–Thorndike-type tests.

### N3535

Note: [[04.04 The General Nature of Experimenters' Interpretations|04.04 The General Nature of Experimenters' Interpretations]]  
Priority: medium · Graph: no · Manim: no

Readable, but the argument that rest-frame experiments cannot test dilation or contraction omits that Earth's velocity changes during these experiments.

- [Intuition] Kennedy–Thorndike and Hils–Hall compare the laboratory at different times of day and year, when its velocity differs by up to about 60 km/s. They therefore compare different inertial frames, and the Robertson–Mansouri–Sexl test theory turns their null results into bounds on the time-dilation parameter. Add this, so that the claim "no relativistic effect is expected" is not left without the standard counter-argument.
- [Simplify] The Kennedy–Thorndike paragraph uses "1935" and "1932" for the same experiment (the paper is from 1932). Use 1932 in the text and drop the date callout.
- [Example] Show why unequal arms need dilation: with arms $L_1\ne L_2$ and contraction only, the round-trip difference changes by $\approx(L_1-L_2)\mechanical{v}^2/\mechanical{c}^3$ when $\mechanical{v}$ changes. This term is cancelled only if the clock (source frequency) also changes by $\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}$.

### N3536

Note: [[04.05 The Special Theory of Relativity and Accelerated Frames|04.05 The Special Theory of Relativity and Accelerated Frames]]  
Priority: low · Graph: no · Manim: no

A short, correct note on using special relativity with accelerated motion; it lacks a worked example.

- [Example] Add the proper-time integral $\tau=\int\sqrt{1-v(t)^2/c^2}\,dt$ and one case: a clock on a circular orbit, or a muon in the CERN storage ring (γ ≈ 29.3, lifetime extended from 2.2 μs to 64 μs despite an acceleration of about $10^{18}\,g$). This supports the statement that acceleration itself does not affect clock rate.
- [Links] The links to [[07.01 The Genesis and Its Salient Points]] and [[09.10 Einstein's Gravitational Resolution of the Paradox]] are valid. Also link "Wigner rotation" (two non-collinear boosts) to a relativity note if one exists.

### N3537

Note: [[04.06 Summary|04.06 Summary]]  
Priority: low · Graph: no · Manim: no

A chapter summary that does its job; no change needed beyond links.

- [Links] Add wiki links from each summarised topic to notes 04.01–04.05, especially 04.03.01 (Doppler) and 04.03.04 (light hypothesis).
