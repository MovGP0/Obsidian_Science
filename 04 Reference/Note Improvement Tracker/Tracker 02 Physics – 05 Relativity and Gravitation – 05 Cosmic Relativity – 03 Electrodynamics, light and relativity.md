---
title: "Note Improvement Tracker – 02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/03 Electrodynamics, light and relativity"
---

> [!TLDR]
> This note tracks the review of the 15 notes in `02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/03 Electrodynamics, light and relativity`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 16 possible errors or notation conflicts. 16 of them are verified (15 fixed, 1 unsure); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3512|N3512]] 03.00 Electrodynamics, Light and Relativity: The Maxwell quotation spells the name "Kohlrauch"; the physicist is Rudolf Kohlrausch (Weber–Kohlrausch measurement of 1856). Correct it, or mark it as a source typo. **Fixed:** Corrected the spelling in the Maxwell quotation.
- [[#N3514|N3514]] 03.01.01 Roemer's Method: The note defines $\signal{\Delta T}=2\mechanical{v}\signal{T}/\mechanical{c}$ for the difference between the observed periods, then uses "varies by about 30 s" with $\mechanical{c}=\mechanical{v}\signal{T}/30\,\unit{s}\approx1.5\times10^8\,\unit{m/s}$. If 30 s is the approach–recession difference, then $\mechanical{c}=2\mechanical{v}\signal{T}/\signal{\Delta T}\approx3.06\times10^5\,\unit{km/s}$. The one-sided shift $\mechanical{v}\signal{T}/\mechanical{c}$ is only about 15 s. State which quantity is 30 s and fix the estimate. **Fixed:** Stated that 30 s is the receding-approaching difference Delta T, used c=2vT/Delta T (about 3.1e8 m/s), and noted the one-sided shift is about 15 s.
- [[#N3514|N3514]] 03.01.01 Roemer's Method: "the average maximum delay is $42.48\times3600\times30/\mechanical{c}$" is the one-sided per-eclipse shift $\mechanical{v}\signal{T}/\mechanical{c}$, not the difference $\signal{\Delta T}$ given below it. Use one name for each quantity, so that the reader does not apply the factor 2 twice or not at all. **Fixed:** Renamed it the maximum shift of one observed period, vT/c.
- [[#N3517|N3517]] 03.03 Stellar Aberration: "A. Fresnel had made the important theoretical discovery in 1815": Fresnel proposed partial drag in his 1818 letter to Arago. Correct the year. **Fixed:** Changed the year to 1818.
- [[#N3518|N3518]] 03.04 The Speed of Light in Moving Media - Fresnel Drag: Fig. 3.4 caption and the sentence after it: for complete drag (speed $\mechanical{c}/\signal{n}\pm\mechanical{v}$) the fringe shift is $\Delta N\approx4\mechanical{L}\signal{n}^2\mechanical{v}/(\signal{\lambda}\mechanical{c})$, not proportional to $\mechanical{L}(\signal{n}-1)\mechanical{v}/(\signal{\lambda}\mechanical{c})$. With Fresnel drag it is $4\mechanical{L}(\signal{n}^2-1)\mechanical{v}/(\signal{\lambda}\mechanical{c})$. **Fixed:** Corrected the caption and the following sentence; defined L as each tube length and Delta N in the table.
- [[#N3518|N3518]] 03.04 The Speed of Light in Moving Media - Fresnel Drag: Caption: "the observed effect was still smaller, second order in the refractive index n" is wrong. The observed shift is the fraction $1-1/\signal{n}^2\approx0.44$ of the complete-drag value, which is first order in $\mechanical{v}/\mechanical{c}$. The body text ("about half the effect") is correct. **Fixed:** Caption now says the observed shift is the fraction 1-1/n^2 (about 0.44) of complete drag, first order in v/c.
- [[#N3518|N3518]] 03.04 The Speed of Light in Moving Media - Fresnel Drag: Caption: "At about 5 m/s the expected shift is only about 1/100 of a fringe". With Fizeau's tubes ($\mechanical{L}\approx1.5\,\unit{m}$ each, $\signal{\lambda}\approx0.53\,\unit{\mu m}$), complete drag at 5 m/s gives $\Delta N\approx0.3$ fringe. Fizeau observed about 0.23 fringe on reversing a 7 m/s flow. Replace the estimate. **Fixed:** Replaced with about 0.3 fringe for complete drag (L about 1.5 m, lambda about 0.53 um) and Fizeau's observed 0.23 fringe on reversing 7 m/s; updated the table row.
- [[#N3519|N3519]] 03.05 The Doppler Effect: "the situation where the observer is in transverse motion ... is not yet adequately probed in experiments" is outdated. Mössbauer rotor experiments with a moving absorber, for example Hay et al. (1960) and Kündig (1963), measured the transverse shift of a moving receiver and agreed with special relativity. **Fixed:** Added a callout stating the Mössbauer rotor results that agree with special relativity.
- [[#N3519|N3519]] 03.05 The Doppler Effect: Eqs. (3.13)–(3.14) mix $\mechanical{u}_s$ and $\mechanical{v}$ for the same speed (the callout mentions only $\mechanical{u}_s$ in 3.14). Use one symbol, $\mechanical{u}_s$ for the source case and $\mechanical{u}_o$ for the observer case, in both the exact and the approximate forms. **Fixed:** Used u_s in both forms of Eq. (3.13) and u_o in both forms of Eq. (3.14); updated the source callout.
- [[#N3519|N3519]] 03.05 The Doppler Effect: Ives–Stilwell (1938) did not observe at 90°. They compared the forward- and backward-shifted lines, and the second-order shift of their mean gives $\sqrt{1-\mechanical{u}^2/\mechanical{c}^2}$. Say this, so that "what was verified was Eq. (3.13)" is not read as a transverse measurement. **Fixed:** Added to the new callout that they compared forward and backward lines and the mean shift gives sqrt(1-u^2/c^2).
- [[#N3520|N3520]] 03.06 Experiments Designed to Detect the Stationary Ether: The length-contraction paragraph after Eq. (3.27) switches from frames O, O′ to "F′" and "F" without definition. Use O and O′ throughout, or define F, F′. **Fixed:** Replaced F′ and F with O′ and O in that paragraph
- [[#N3521|N3521]] 03.07 The Trouton-Noble Experiment: Fitzgerald "had proposed the length contraction hypothesis in 1892". FitzGerald published it in 1889 (Science, ref. [16] in 03.06); 1892 is Lorentz's independent proposal. **Fixed:** Changed 1892 to 1889
- [[#N3521|N3521]] 03.07 The Trouton-Noble Experiment: "The total energy remains the same because the capacitance increases by the factor γ, but the volume decreases ... by the same factor" is inconsistent. At fixed charge, the longitudinal field is unchanged and the volume shrinks by $1/\gamma$, so $\energy{\mathcal E}=Q^2/2\circuit{C}$ falls by $1/\gamma$. At fixed $\electric{V}$, $\circuit{C}\electric{V}^2/2$ rises by γ. Rewrite or remove this claim. **Fixed:** Rewrote sentence: at fixed charge Q the longitudinal field is unchanged, volume shrinks by 1/γ, so Q²/2C falls by 1/γ; added Q to table
- [[#N3521|N3521]] 03.07 The Trouton-Noble Experiment: Eq. (3.29) writes $\mechanical{T}=d\energy{\mathcal E}_m/d\mechanical{\theta}$. The torque is $\mechanical{T}=-d\energy{\mathcal E}_m/d\mechanical{\theta}$. With $\energy{\mathcal E}_m\propto\sin^2\mechanical{\theta}$, the printed minus sign on the right is correct, so the callout's "extra minus sign" comment is misleading. Fix the definition and the $\sin\mechanical{\theta}\to\sin^2\mechanical{\theta}$ exponent together. **Fixed:** E_m now uses sin²θ and T=-dE_m/dθ (agrees with printed RHS of Eq. 3.29); updated source-convention callout
- [[#N3521|N3521]] 03.07 The Trouton-Noble Experiment: $\mechanical{V}$ (volume, caption) and $\electric{V}$ (voltage, body) are both used. Rename the integration volume, for example to $d\tau$, so that one letter has one meaning. **Fixed:** Renamed integration volume to dτ in caption text and table row
- [[#N3523|N3523]] 03.09 Experiments on the Unipolar Induction: $\electric{E}$ is used both for the electric field vector and for the emf in Figs. 3.9–3.10, as the table admits. Use $\mathcal{E}$ (or $U$) for the emf. **Unsure:** Clash is real but the emf symbol E exists only as text labels inside the SVG attachments (outside batch scope); note text never uses scalar emf E, so renaming only the table row would mismatch the figures; needs an SVG label change to ℰ

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3511 | [[03 References\|03 References]] | Analyzed | low | no | no | [[#N3511\|View]] |
| N3512 | [[03.00 Electrodynamics, Light and Relativity\|03.00 Electrodynamics, Light and Relativity]] | Analyzed | low | no | no | [[#N3512\|View]] |
| N3513 | [[03.01 Experiments to Determine the Speed of Light\|03.01 Experiments to Determine the Speed of Light]] | Analyzed | low | no | no | [[#N3513\|View]] |
| N3514 | [[03.01.01 Roemer's Method\|03.01.01 Roemer's Method]] | Analyzed | high | yes | yes | [[#N3514\|View]] |
| N3515 | [[03.01.02 Michelson's Measurements\|03.01.02 Michelson's Measurements]] | Analyzed | medium | no | yes | [[#N3515\|View]] |
| N3516 | [[03.02 The Ether - The Medium for the Propagation of the EM Waves\|03.02 The Ether - The Medium for the Propagation of the EM Waves]] | Analyzed | low | no | no | [[#N3516\|View]] |
| N3517 | [[03.03 Stellar Aberration\|03.03 Stellar Aberration]] | Analyzed | medium | yes | yes | [[#N3517\|View]] |
| N3518 | [[03.04 The Speed of Light in Moving Media - Fresnel Drag\|03.04 The Speed of Light in Moving Media - Fresnel Drag]] | Analyzed | high | yes | yes | [[#N3518\|View]] |
| N3519 | [[03.05 The Doppler Effect\|03.05 The Doppler Effect]] | Analyzed | high | yes | yes | [[#N3519\|View]] |
| N3520 | [[03.06 Experiments Designed to Detect the Stationary Ether\|03.06 Experiments Designed to Detect the Stationary Ether]] | Analyzed | high | yes | yes | [[#N3520\|View]] |
| N3521 | [[03.07 The Trouton-Noble Experiment\|03.07 The Trouton-Noble Experiment]] | Analyzed | high | no | yes | [[#N3521\|View]] |
| N3522 | [[03.08 The Birth of a New Theory of Relativity\|03.08 The Birth of a New Theory of Relativity]] | Analyzed | low | no | no | [[#N3522\|View]] |
| N3523 | [[03.09 Experiments on the Unipolar Induction\|03.09 Experiments on the Unipolar Induction]] | Analyzed | medium | no | yes | [[#N3523\|View]] |
| N3524 | [[03.10 The Principle of Relativity and the Theories of Relativity\|03.10 The Principle of Relativity and the Theories of Relativity]] | Analyzed | low | no | no | [[#N3524\|View]] |
| N3525 | [[03.11 Summary\|03.11 Summary]] | Analyzed | low | no | no | [[#N3525\|View]] |

## Suggestions

### N3511

Note: [[03 References|03 References]]  
Priority: low · Graph: no · Manim: no

A reference list with good provenance notes; no change needed.

- [Links] For reference 21, add to the callout that the correct volume of Poincaré's Comptes Rendus paper is 140 (1905), not 14. Also note that Maxwell's Part III is dated 1862 here, but the 03.00 text says "in 1861".

### N3512

Note: [[03.00 Electrodynamics, Light and Relativity|03.00 Electrodynamics, Light and Relativity]]  
Priority: low · Graph: no · Manim: no

A clear chapter introduction; the only equation is fine, but its source-notation callout is not needed.

- [Correctness] The Maxwell quotation spells the name "Kohlrauch"; the physicist is Rudolf Kohlrausch (Weber–Kohlrausch measurement of 1856). Correct it, or mark it as a source typo.
- [Simplify] Write the light-speed relation as $\mechanical{c}=1/\sqrt{\electric{\epsilon}_0\magnetic{\mu}_0}$ and delete the "Source notation" callout. The printed form is not ambiguous enough to need it.
- [Example] Add the one-line check $1/\sqrt{8.854\times10^{-12}\times1.2566\times10^{-6}}\approx2.998\times10^8\,\unit{m/s}$. This shows the "coincidence" that Maxwell noticed.

### N3513

Note: [[03.01 Experiments to Determine the Speed of Light|03.01 Experiments to Determine the Speed of Light]]  
Priority: low · Graph: no · Manim: no

A short hub with a useful SI note; no substantial change needed.

- [Structure] Give the defined value $\mechanical{c}=299\,792\,458\,\unit{m/s}$ (exact since 1983) explicitly in "Interpretation and checks". The lecture's $2.99\times10^8$ looks like a measured estimate.

### N3514

Note: [[03.01.01 Roemer's Method|03.01.01 Roemer's Method]]  
Priority: high · Graph: yes · Manim: yes

The geometric idea is explained well, but the numerical estimate mixes the one-sided delay with the approach–recession difference and so gets half the intended speed.

- [Correctness] The note defines $\signal{\Delta T}=2\mechanical{v}\signal{T}/\mechanical{c}$ for the difference between the observed periods, then uses "varies by about 30 s" with $\mechanical{c}=\mechanical{v}\signal{T}/30\,\unit{s}\approx1.5\times10^8\,\unit{m/s}$. If 30 s is the approach–recession difference, then $\mechanical{c}=2\mechanical{v}\signal{T}/\signal{\Delta T}\approx3.06\times10^5\,\unit{km/s}$. The one-sided shift $\mechanical{v}\signal{T}/\mechanical{c}$ is only about 15 s. State which quantity is 30 s and fix the estimate.
- [Correctness] "the average maximum delay is $42.48\times3600\times30/\mechanical{c}$" is the one-sided per-eclipse shift $\mechanical{v}\signal{T}/\mechanical{c}$, not the difference $\signal{\Delta T}$ given below it. Use one name for each quantity, so that the reader does not apply the factor 2 twice or not at all.
- [Example] Add Roemer's actual observable: the shifts accumulate to about 16–22 minutes over half a year, which is the light-travel time across Earth's orbit ($2\,\unit{AU}/\mechanical{c}\approx1000\,\unit{s}$). This gives a more robust estimate than a single 30 s interval.
- [Graph] Plot the predicted eclipse-time residual $\delta t(\tau)=[d(\tau)-d_0]/\mechanical{c}$ over one synodic year, with $d(\tau)=|\mathbf r_J-\mathbf r_E|$ for circular orbits (1 AU and 5.2 AU). Overlay the per-interval shift $\mathrm{d}\delta t/\mathrm{d}\tau\cdot T$, so the reader sees the maximum near quadrature.
- [Manim] Animate Earth and Jupiter orbiting, with Io eclipses as flashes whose light fronts travel to Earth. A running clock shows the intervals getting shorter while Earth approaches and longer while it recedes.

### N3515

Note: [[03.01.02 Michelson's Measurements|03.01.02 Michelson's Measurements]]  
Priority: medium · Graph: no · Manim: yes

A clear historical account; the numbers check out, but the Fizeau method could have a worked example.

- [Example] Work out Fizeau's condition: the wheel blocks the returning light when $2\mechanical{L}/\mechanical{c}=1/(2N f)$, with $N=720$ teeth. For $\mechanical{L}=8.6\,\unit{km}$ this gives $f\approx12.1\,\unit{s^{-1}}$. Note that Fizeau's actual baseline (Suresnes–Montmartre) was about 8.6 km, not 8.2 km.
- [Example] Check the octagon in the text: $\signal{T}=2\times35\,\unit{km}/\mechanical{c}=2.33\times10^{-4}\,\unit{s}$, and $1/8$ turn in $\signal{T}$ needs $1/(8\signal{T})\approx535$ rev/s. This matches the caption and confirms the 45° condition.
- [Intuition] In the two-way paragraph, add the explicit result $2\mechanical{L}/[\mechanical{c}(1-\mechanical{v}^2/\mechanical{c}^2)]$. This shows why the first-order terms cancel and links the reader to Eq. (3.18) in 03.06.
- [Manim] Animate the rotating octagonal mirror: a pulse leaves facet 1, travels to the distant mirror and back, and the octagon turns 45° in that time, so facet 2 sends the pulse back to the slit.

### N3516

Note: [[03.02 The Ether - The Medium for the Propagation of the EM Waves|03.02 The Ether - The Medium for the Propagation of the EM Waves]]  
Priority: low · Graph: no · Manim: no

A short, clear historical note about the ether; no errors of substance.

- [Simplify] In "meant a different density of the ether in such media", state that this was one historical model (Fresnel's), in which the ether density in matter is proportional to $\signal{n}^2$. This prepares the drag coefficient $1-1/\signal{n}^2$ in 03.03–03.04.
- [Links] Link "stellar aberration" in the last paragraph to \[\[03.03 Stellar Aberration\]\], and "Fizeau measured the velocity of light in water" to \[\[03.04 The Speed of Light in Moving Media - Fresnel Drag\]\]. Note that Foucault (1850) first showed that light is slower in water.

### N3517

Note: [[03.03 Stellar Aberration|03.03 Stellar Aberration]]  
Priority: medium · Graph: yes · Manim: yes

The aberration estimate and formulas are correct and clear, but one date is wrong and Eq. (3.1) needs an explicit angle convention.

- [Correctness] "A. Fresnel had made the important theoretical discovery in 1815": Fresnel proposed partial drag in his 1818 letter to Arago. Correct the year.
- [Simplify] State the convention for Eq. (3.1): $\mechanical{\theta}$ is the true angle between the star direction and Earth's velocity, and $\mechanical{\phi}$ is the apparent angle. Show the small-angle result $\mechanical{\theta}-\mechanical{\phi}\approx(\mechanical{v}/\mechanical{c})\sin\mechanical{\theta}$, which gives $20.5''$ at $\mechanical{\theta}=90^\circ$.
- [Example] Add Airy's 1871 water-telescope null result as a worked contrast: Eq. (3.2) with $\signal{n}=1.33$ predicts $27''$ instead of $20.5''$. No such change was seen, and Fresnel's drag removes exactly this extra factor.
- [Graph] Plot the apparent annual path of a star at ecliptic latitude β, from $\Delta\lambda\cos\beta=-\kappa\cos(\lambda_\odot-\lambda)$ and $\Delta\beta=-\kappa\sin\beta\sin(\lambda_\odot-\lambda)$ with $\kappa=20.5''$: an ellipse with semi-axes κ and κ sinβ. Compare it with the parallax ellipse, which is 90° out of phase.
- [Manim] Animate rain falling vertically on a walking person who tilts the umbrella, then a telescope tube moving sideways while a photon travels down it. This shows the tilt $\mechanical{v}/\mechanical{c}$.

### N3518

Note: [[03.04 The Speed of Light in Moving Media - Fresnel Drag|03.04 The Speed of Light in Moving Media - Fresnel Drag]]  
Priority: high · Graph: yes · Manim: yes

The drag formula (3.3) and its relativistic check are correct, but the figure caption's fringe-shift scaling and size estimate are wrong.

- [Correctness] Fig. 3.4 caption and the sentence after it: for complete drag (speed $\mechanical{c}/\signal{n}\pm\mechanical{v}$) the fringe shift is $\Delta N\approx4\mechanical{L}\signal{n}^2\mechanical{v}/(\signal{\lambda}\mechanical{c})$, not proportional to $\mechanical{L}(\signal{n}-1)\mechanical{v}/(\signal{\lambda}\mechanical{c})$. With Fresnel drag it is $4\mechanical{L}(\signal{n}^2-1)\mechanical{v}/(\signal{\lambda}\mechanical{c})$.
- [Correctness] Caption: "the observed effect was still smaller, second order in the refractive index n" is wrong. The observed shift is the fraction $1-1/\signal{n}^2\approx0.44$ of the complete-drag value, which is first order in $\mechanical{v}/\mechanical{c}$. The body text ("about half the effect") is correct.
- [Correctness] Caption: "At about 5 m/s the expected shift is only about 1/100 of a fringe". With Fizeau's tubes ($\mechanical{L}\approx1.5\,\unit{m}$ each, $\signal{\lambda}\approx0.53\,\unit{\mu m}$), complete drag at 5 m/s gives $\Delta N\approx0.3$ fringe. Fizeau observed about 0.23 fringe on reversing a 7 m/s flow. Replace the estimate.
- [Example] Add the worked derivation: $\Delta t=\mechanical{L}[1/(\mechanical{c}/\signal{n}-f\mechanical{v})-1/(\mechanical{c}/\signal{n}+f\mechanical{v})]\approx2\mechanical{L}\signal{n}^2f\mechanical{v}/\mechanical{c}^2$ per tube. Here $f=0$, $1-1/\signal{n}^2$ or $1$ gives the three hypotheses (a)–(c) of the lecture.
- [Graph] Plot the predicted fringe shift against flow speed (0–8 m/s) for no drag, Fresnel drag and complete drag, with Fizeau's 1851 point and the Michelson–Morley 1886 water result.
- [Manim] Animate the Sagnac-type loop: two counter-propagating wave trains pass through flowing water and come back out of step. A slider switches the drag coefficient between 0, 0.44 and 1.

### N3519

Note: [[03.05 The Doppler Effect|03.05 The Doppler Effect]]  
Priority: high · Graph: yes · Manim: yes

A rich derivation, but it is dense and many formulas carry printed errors that are only listed in a callout; the claim about untested observer motion is outdated.

- [Correctness] "the situation where the observer is in transverse motion ... is not yet adequately probed in experiments" is outdated. Mössbauer rotor experiments with a moving absorber, for example Hay et al. (1960) and Kündig (1963), measured the transverse shift of a moving receiver and agreed with special relativity.
- [Correctness] Eqs. (3.13)–(3.14) mix $\mechanical{u}_s$ and $\mechanical{v}$ for the same speed (the callout mentions only $\mechanical{u}_s$ in 3.14). Use one symbol, $\mechanical{u}_s$ for the source case and $\mechanical{u}_o$ for the observer case, in both the exact and the approximate forms.
- [Correctness] Ives–Stilwell (1938) did not observe at 90°. They compared the forward- and backward-shifted lines, and the second-order shift of their mean gives $\sqrt{1-\mechanical{u}^2/\mechanical{c}^2}$. Say this, so that "what was verified was Eq. (3.13)" is not read as a transverse measurement.
- [Structure] Instead of keeping six erroneous printed forms with a separate callout, give corrected forms next to them: Eq. (3.9) should be $\signal{\nu}'\approx\signal{\nu}(1-\mechanical{u}_s/\mechanical{c}+\mechanical{u}_s^2/2\mechanical{c}^2)$, Eq. (3.8) should keep $\mechanical{u}_s$, and Hubble's law should be $cz=H\mechanical{d}$ with 1 Mpc $=3.26\times10^6$ ly. Also state that the standard redshift is $z=(\signal{\nu}-\signal{\nu}')/\signal{\nu}'$.
- [Graph] Plot $\signal{\nu}'/\signal{\nu}$ against $\beta=u/c$ in $[-0.9,0.9]$ for the classical moving source $1/(1+\beta)$, the classical moving observer $1-\beta$, and the relativistic $\sqrt{(1-\beta)/(1+\beta)}$. Add the transverse curves $\sqrt{1-\beta^2}$ and $1/\sqrt{1-\beta^2}$.
- [Manim] Animate circular wavefronts from a moving source (bunched in front, stretched behind), then the same for a moving observer in a medium. Finish with the relativistic case, where the time-dilation factor scales the emission period.

### N3520

Note: [[03.06 Experiments Designed to Detect the Stationary Ether|03.06 Experiments Designed to Detect the Stationary Ether]]  
Priority: high · Graph: yes · Manim: yes

A long but careful Michelson–Morley analysis whose numbers check out; it lacks a fringe-count example, and the frame labels change mid-note.

- [Correctness] The length-contraction paragraph after Eq. (3.27) switches from frames O, O′ to "F′" and "F" without definition. Use O and O′ throughout, or define F, F′.
- [Example] Add the 1887 numbers: effective arm $\mechanical{L}\approx11\,\unit{m}$, $\signal{\lambda}\approx550\,\unit{nm}$, $\mechanical{v}/\mechanical{c}=10^{-4}$, so the expected shift on a 90° rotation is $2\mechanical{L}\mechanical{v}^2/(\mechanical{c}^2\signal{\lambda})\approx0.4$ fringe. The observed shift was below about 0.01–0.02 fringe. This makes "sufficient sensitivity" concrete.
- [Simplify] Put the corrected leading term $(\mechanical{L}/\mechanical{c})(\mechanical{v}^2/\mechanical{c}^2)$ directly as the result of Eq. (3.19), and keep the source form only in the callout. As it stands, the reader meets the wrong factor 2 first.
- [Graph] Plot the predicted fringe shift $N(\alpha)=(\mechanical{L}\mechanical{v}^2/\signal{\lambda}\mechanical{c}^2)\cos2\alpha$ against the apparatus angle α (0–360°) for $\mechanical{v}=30\,\unit{km/s}$. Overlay the observed band of about ±0.01 fringe.
- [Manim] Animate the interferometer moving through the ether frame: the longitudinal beam lags then catches up, and the transverse beam follows a zig-zag. Then rotate the apparatus 90° and show the predicted fringe motion, followed by the contracted arm that cancels it.

### N3521

Note: [[03.07 The Trouton-Noble Experiment|03.07 The Trouton-Noble Experiment]]  
Priority: high · Graph: no · Manim: yes

A useful historical account, but the energy and torque argument contains several inconsistencies beyond those listed in the callout.

- [Correctness] Fitzgerald "had proposed the length contraction hypothesis in 1892". FitzGerald published it in 1889 (Science, ref. [16] in 03.06); 1892 is Lorentz's independent proposal.
- [Correctness] "The total energy remains the same because the capacitance increases by the factor γ, but the volume decreases ... by the same factor" is inconsistent. At fixed charge, the longitudinal field is unchanged and the volume shrinks by $1/\gamma$, so $\energy{\mathcal E}=Q^2/2\circuit{C}$ falls by $1/\gamma$. At fixed $\electric{V}$, $\circuit{C}\electric{V}^2/2$ rises by γ. Rewrite or remove this claim.
- [Correctness] Eq. (3.29) writes $\mechanical{T}=d\energy{\mathcal E}_m/d\mechanical{\theta}$. The torque is $\mechanical{T}=-d\energy{\mathcal E}_m/d\mechanical{\theta}$. With $\energy{\mathcal E}_m\propto\sin^2\mechanical{\theta}$, the printed minus sign on the right is correct, so the callout's "extra minus sign" comment is misleading. Fix the definition and the $\sin\mechanical{\theta}\to\sin^2\mechanical{\theta}$ exponent together.
- [Correctness] $\mechanical{V}$ (volume, caption) and $\electric{V}$ (voltage, body) are both used. Rename the integration volume, for example to $d\tau$, so that one letter has one meaning.
- [Example] Give one order-of-magnitude torque estimate with explicit geometry, for example $\mechanical{T}\sim\tfrac12\electric{\epsilon}_0\electric{E}^2\mechanical{A}\mechanical{d}(\mechanical{v}^2/\mechanical{c}^2)$ for plausible plate values. Then compare it with the torsion-fibre sensitivity of the original experiment.
- [Manim] Animate the suspended capacitor rotating with Earth: the predicted torque $\propto\sin2\mechanical{\theta}$ would make it oscillate at twice the rotation frequency, while the observed orientation stays fixed.

### N3522

Note: [[03.08 The Birth of a New Theory of Relativity|03.08 The Birth of a New Theory of Relativity]]  
Priority: low · Graph: no · Manim: no

A clear interpretive comparison of Lorentz–Poincaré and Einstein relativity; it has almost no mathematics and needs little change.

- [Structure] Add a two-column table that compares LPTR and STR: preferred frame, one-way light speed, meaning of contraction and dilation, and predicted M-M result. This replaces several long paragraphs that repeat the same contrast.
- [Links] Link "a later chapter" (the crucial demarcating experiments) to \[\[11.04 The Experiment on the One-Way Relative Velocity of Light\]\].

### N3523

Note: [[03.09 Experiments on the Unipolar Induction|03.09 Experiments on the Unipolar Induction]]  
Priority: medium · Graph: no · Manim: yes

The experimental cases are described clearly, but the disc emf is never computed and one symbol is used for two quantities.

- [Correctness] $\electric{E}$ is used both for the electric field vector and for the emf in Figs. 3.9–3.10, as the table admits. Use $\mathcal{E}$ (or $U$) for the emf.
- [Example] Add the Faraday-disc result $\mathcal{E}=\int_0^R\omega r\magnetic{B}\,dr=\tfrac12\omega\magnetic{B}R^2$. For example, $\magnetic{B}=0.5\,\unit{T}$, $R=0.1\,\unit{m}$ and 50 rev/s give about 0.8 V. This shows the size of the "large currents".
- [Intuition] In "Interpretation and checks", add a case table for Fig. 3.10 (a)–(c). In the lab frame where the axisymmetric field is static, a conductor segment contributes emf only if it moves in that frame. This gives (a) and (c) nonzero and (b) zero, and also brings in the stationary return wire.
- [Manim] Animate the three rotating cases with the circuit drawn: conductor rotating, magnet rotating, and both rotating. Show the field lines staying fixed for an axisymmetric magnet, and mark which part of the circuit moves in the lab.

### N3524

Note: [[03.10 The Principle of Relativity and the Theories of Relativity|03.10 The Principle of Relativity and the Theories of Relativity]]  
Priority: low · Graph: no · Manim: no

A clear conceptual note; no change of substance needed.

- [Structure] The callout and the paragraph before it repeat the same statement. Keep the callout and shorten the paragraph to the logic "PoR is necessary, not sufficient", with a reference to Eq. (3.22) in \[\[03.06 Experiments Designed to Detect the Stationary Ether\]\].

### N3525

Note: [[03.11 Summary|03.11 Summary]]  
Priority: low · Graph: no · Manim: no

A chapter summary that does its job; no change needed.

- [Links] Add wiki links from items (a)–(e) and from the Trouton–Noble and unipolar paragraphs to notes 03.01–03.10.
