---
title: "Note Improvement Tracker – 02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/08 Quantum Electrodynamics"
---

> [!TLDR]
> This note tracks the review of the 59 notes in `02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/08 Quantum Electrodynamics`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 6 possible errors or notation conflicts. 6 of them are verified (5 fixed, 1 rejected); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2631|N2631]] 08.01.01 Global and Local Gauge Invariance: With $\psi\to e^{-i\electric{e}\signal{\alpha}}\psi$, $D_\mu=\partial_\mu+i\electric{e}\electric{A}_\mu$, $\electric{e}>0$ and $\mathcal L_{\mathrm{int}}=-J^\mu\electric{A}_\mu$, the current is $J^\mu=\electric{e}\bar\psi\gamma^\mu\psi$, so the particles annihilated by $\psi$ carry charge $+\electric{e}$; the claim that $\electric{Q}_e=-|\electric{e}|$ "follows from quantization" is false here. Either set $\electric{e}=-|\electric{e}|$ for the electron (Peskin's convention) or use $D_\mu=\partial_\mu-i|\electric{e}|\electric{A}_\mu$. **Fixed:** Text now derives J^mu = e psibar gamma^mu psi, says psi quanta carry charge e, and sets e = -abs(e) for the electron; a callout records the source claim; table updated and A_mu, J^mu, L_int rows added.
- [[#N2655|N2655]] 08.09 Bremsstrahlung: The table lists $p,p',k$ as used "in the figure", but neither the text nor the Fig. 8.6 caption uses these symbols; introduce them (e.g. in an explicit soft factor) or remove the row. **Rejected:** The Fig. 8.6 SVG labels the legs e⁻(p), e⁻(p′) and γ(k), so the table row is correct.
- [[#N2655|N2655]] 08.09 Bremsstrahlung: The photon energy is written $\signal{\omega}$ here but $\energy{\omega}$ in 08.06.02, 08.10.01 and 08.11.02 for the same physical quantity; use $\energy{\omega}$ consistently. **Fixed:** Changed all signal{omega} to energy{omega} and renamed the table row to photon energies.
- [[#N2661|N2661]] 08.11.01 Nature of the Infrared Problem: The displayed integral uses the measure $d^4k$ with an integrand in $l$; correct the equation to $d^4l$ (and drop $k$ from the table) instead of keeping the error and explaining it in a note. **Fixed:** Changed the measure to d^4l, removed the explaining sentence from the callout, and dropped k from the table.
- [[#N2662|N2662]] 08.11.02 The Bloch–Nordsieck Theorem: The schematic $\sigma=\sigma_0[1+\frac{\alpha}{\pi}(-\ln^2\frac{\Delta E}{\sqrt s}+\dots)]$ is a double log in $\Delta E$, but for massive external charges the regulator-free remainder is a single log in $\Delta E$ times a mass log, $\sigma\simeq\sigma_0[1+\frac{2\alpha}{\pi}(\ln\frac{s}{m^2}-1)\ln\frac{\Delta E}{\sqrt s}+\dots]$, consistent with the first-order expansion of the exponent in 08.11.03. **Fixed:** Replaced the schematic display by σ0[1+(2α/π)(ln(s/m²)−1)ln(ΔE/√s)+…], added a sentence linking the 08.11.03 expansion, and added m to the table
- [[#N2688|N2688]] 08.16.12 Schwinger result for (g − 2) - 2: Symbol clash: $\mu$ is both the Lorentz index of $\Lambda^\mu$, $\gamma^\mu$ and the dimensional-regularization scale in $\mu^{2\epsilon}$ in the same equation; rename the scale (e.g. $\tilde\mu$) or the vertex index. **Fixed:** Renamed the scale to \energy{\tilde\mu} in the display, the callout and the table

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2630 | [[08.01 The QED Lagrangian and U(1) Gauge Invariance\|08.01 The QED Lagrangian and U(1) Gauge Invariance]] | Analyzed | low | no | no | [[#N2630\|View]] |
| N2631 | [[08.01.01 Global and Local Gauge Invariance\|08.01.01 Global and Local Gauge Invariance]] | Analyzed | medium | no | no | [[#N2631\|View]] |
| N2632 | [[08.01.02 Covariant Derivative and Minimal Coupling\|08.01.02 Covariant Derivative and Minimal Coupling]] | Analyzed | low | no | no | [[#N2632\|View]] |
| N2633 | [[08.01.03 Physical Content of the Lagrangian\|08.01.03 Physical Content of the Lagrangian]] | Analyzed | low | no | no | [[#N2633\|View]] |
| N2634 | [[08.02 Feynman Rules of QED\|08.02 Feynman Rules of QED]] | Analyzed | low | no | no | [[#N2634\|View]] |
| N2635 | [[08.03 Trace Techniques\|08.03 Trace Techniques]] | Analyzed | low | no | no | [[#N2635\|View]] |
| N2636 | [[08.03.01 Spin Sums and Completeness\|08.03.01 Spin Sums and Completeness]] | Analyzed | low | no | no | [[#N2636\|View]] |
| N2637 | [[08.03.02 Traces of Gamma Matrices\|08.03.02 Traces of Gamma Matrices]] | Analyzed | low | no | no | [[#N2637\|View]] |
| N2638 | [[08.03.03 Index Contractions in d = 4\|08.03.03 Index Contractions in d = 4]] | Analyzed | low | no | no | [[#N2638\|View]] |
| N2639 | [[08.04 Annihilation - e⁺e⁻ → μ⁺μ⁻\|08.04 Annihilation - e⁺e⁻ → μ⁺μ⁻]] | Analyzed | low | no | no | [[#N2639\|View]] |
| N2640 | [[08.04.01 Kinematics and Feynman Diagram\|08.04.01 Kinematics and Feynman Diagram]] | Analyzed | low | no | no | [[#N2640\|View]] |
| N2641 | [[08.04.02 Feynman Amplitude\|08.04.02 Feynman Amplitude]] | Analyzed | low | no | no | [[#N2641\|View]] |
| N2642 | [[08.04.03 Calculation of the Squared Amplitude\|08.04.03 Calculation of the Squared Amplitude]] | Analyzed | medium | no | no | [[#N2642\|View]] |
| N2643 | [[08.04.04 Mandelstam Variables\|08.04.04 Mandelstam Variables]] | Analyzed | low | yes | no | [[#N2643\|View]] |
| N2644 | [[08.04.05 Differential and Total Cross Sections\|08.04.05 Differential and Total Cross Sections]] | Analyzed | medium | yes | no | [[#N2644\|View]] |
| N2645 | [[08.04.06 The Ratio R and Color Counting\|08.04.06 The Ratio R and Color Counting]] | Analyzed | medium | yes | no | [[#N2645\|View]] |
| N2646 | [[08.05 Bhabha Scattering - e⁺e⁻ → e⁺e⁻\|08.05 Bhabha Scattering - e⁺e⁻ → e⁺e⁻]] | Analyzed | low | no | no | [[#N2646\|View]] |
| N2647 | [[08.05.01 Diagrams and Interference\|08.05.01 Diagrams and Interference]] | Analyzed | low | no | no | [[#N2647\|View]] |
| N2648 | [[08.05.02 Squared Modulus and Interference\|08.05.02 Squared Modulus and Interference]] | Analyzed | medium | yes | no | [[#N2648\|View]] |
| N2649 | [[08.06 Compton Scattering and the Klein–Nishina Formula\|08.06 Compton Scattering and the Klein–Nishina Formula]] | Analyzed | low | no | no | [[#N2649\|View]] |
| N2650 | [[08.06.01 Diagrams and Kinematics\|08.06.01 Diagrams and Kinematics]] | Analyzed | low | no | no | [[#N2650\|View]] |
| N2651 | [[08.06.02 Klein–Nishina Formula\|08.06.02 Klein–Nishina Formula]] | Analyzed | medium | yes | no | [[#N2651\|View]] |
| N2652 | [[08.07 Møller Scattering - e⁻e⁻ → e⁻e⁻\|08.07 Møller Scattering - e⁻e⁻ → e⁻e⁻]] | Analyzed | low | no | no | [[#N2652\|View]] |
| N2653 | [[08.07.01 Diagrams and the Exclusion Principle\|08.07.01 Diagrams and the Exclusion Principle]] | Analyzed | medium | yes | no | [[#N2653\|View]] |
| N2654 | [[08.08 Annihilation - e⁺e⁻ → γγ\|08.08 Annihilation - e⁺e⁻ → γγ]] | Analyzed | medium | yes | no | [[#N2654\|View]] |
| N2655 | [[08.09 Bremsstrahlung\|08.09 Bremsstrahlung]] | Analyzed | medium | no | yes | [[#N2655\|View]] |
| N2656 | [[08.10 Polarization\|08.10 Polarization]] | Analyzed | low | no | no | [[#N2656\|View]] |
| N2657 | [[08.10.01 Transverse and Longitudinal Polarization\|08.10.01 Transverse and Longitudinal Polarization]] | Analyzed | low | no | yes | [[#N2657\|View]] |
| N2658 | [[08.10.02 Sum over Physical Polarizations\|08.10.02 Sum over Physical Polarizations]] | Analyzed | low | no | no | [[#N2658\|View]] |
| N2659 | [[08.10.03 Helicity Asymmetries\|08.10.03 Helicity Asymmetries]] | Analyzed | medium | yes | no | [[#N2659\|View]] |
| N2660 | [[08.11 Infrared Divergences\|08.11 Infrared Divergences]] | Analyzed | low | no | no | [[#N2660\|View]] |
| N2661 | [[08.11.01 Nature of the Infrared Problem\|08.11.01 Nature of the Infrared Problem]] | Analyzed | medium | no | no | [[#N2661\|View]] |
| N2662 | [[08.11.02 The Bloch–Nordsieck Theorem\|08.11.02 The Bloch–Nordsieck Theorem]] | Analyzed | medium | yes | no | [[#N2662\|View]] |
| N2663 | [[08.11.03 The Sudakov Double Logarithm\|08.11.03 The Sudakov Double Logarithm]] | Analyzed | medium | yes | no | [[#N2663\|View]] |
| N2664 | [[08.12 Preview of Loop Corrections\|08.12 Preview of Loop Corrections]] | Analyzed | low | no | no | [[#N2664\|View]] |
| N2665 | [[08.12.01 Vacuum Polarization\|08.12.01 Vacuum Polarization]] | Analyzed | medium | yes | no | [[#N2665\|View]] |
| N2666 | [[08.12.02 Vertex Correction and Anomalous Magnetic Moment\|08.12.02 Vertex Correction and Anomalous Magnetic Moment]] | Analyzed | low | no | no | [[#N2666\|View]] |
| N2667 | [[08.12.03 Fermion Self-Energy\|08.12.03 Fermion Self-Energy]] | Analyzed | low | no | no | [[#N2667\|View]] |
| N2668 | [[08.13 Ward–Takahashi Identity\|08.13 Ward–Takahashi Identity]] | Analyzed | low | no | no | [[#N2668\|View]] |
| N2669 | [[08.13.01 Statement and Physical Meaning\|08.13.01 Statement and Physical Meaning]] | Analyzed | low | no | no | [[#N2669\|View]] |
| N2670 | [[08.13.02 Consequences for Renormalization Factors\|08.13.02 Consequences for Renormalization Factors]] | Analyzed | low | no | no | [[#N2670\|View]] |
| N2671 | [[08.13.03 Form for External Amplitudes\|08.13.03 Form for External Amplitudes]] | Analyzed | medium | no | no | [[#N2671\|View]] |
| N2672 | [[08.14 High-Energy Limit\|08.14 High-Energy Limit]] | Analyzed | low | no | no | [[#N2672\|View]] |
| N2673 | [[08.14.01 Chiral Structure of the Amplitudes\|08.14.01 Chiral Structure of the Amplitudes]] | Analyzed | low | yes | no | [[#N2673\|View]] |
| N2674 | [[08.14.02 Regge Limit\|08.14.02 Regge Limit]] | Analyzed | medium | yes | no | [[#N2674\|View]] |
| N2675 | [[08.15 Summary of Fundamental Processes\|08.15 Summary of Fundamental Processes]] | Analyzed | low | yes | no | [[#N2675\|View]] |
| N2676 | [[08.16 Exercises\|08.16 Exercises/08.16 Exercises]] | Analyzed | low | no | no | [[#N2676\|View]] |
| N2677 | [[08.16.01 Gauge invariance of the QED Lagrangian\|08.16 Exercises/08.16.01 Gauge invariance of the QED Lagrangian]] | Analyzed | low | no | no | [[#N2677\|View]] |
| N2678 | [[08.16.02 QED Noether current\|08.16 Exercises/08.16.02 QED Noether current]] | Analyzed | low | no | no | [[#N2678\|View]] |
| N2679 | [[08.16.03 Trace calculations\|08.16 Exercises/08.16.03 Trace calculations]] | Analyzed | low | no | no | [[#N2679\|View]] |
| N2680 | [[08.16.04 Muon-pair angular distribution\|08.16 Exercises/08.16.04 Muon-pair angular distribution]] | Analyzed | low | yes | no | [[#N2680\|View]] |
| N2681 | [[08.16.05 Bhabha scattering\|08.16 Exercises/08.16.05 Bhabha scattering]] | Analyzed | low | yes | no | [[#N2681\|View]] |
| N2682 | [[08.16.06 Compton scattering with polarized photons\|08.16 Exercises/08.16.06 Compton scattering with polarized photons]] | Analyzed | low | yes | no | [[#N2682\|View]] |
| N2683 | [[08.16.07 Symmetry of Møller scattering\|08.16 Exercises/08.16.07 Symmetry of Møller scattering]] | Analyzed | low | yes | no | [[#N2683\|View]] |
| N2684 | [[08.16.08 Tree-level Compton Ward identity\|08.16 Exercises/08.16.08 Tree-level Compton Ward identity]] | Analyzed | low | no | no | [[#N2684\|View]] |
| N2685 | [[08.16.09 Low-energy vacuum polarization and the Uehling potential\|08.16 Exercises/08.16.09 Low-energy vacuum polarization and the Uehling potential]] | Analyzed | low | yes | no | [[#N2685\|View]] |
| N2686 | [[08.16.10 R ratio and number of colors\|08.16 Exercises/08.16.10 R ratio and number of colors]] | Analyzed | low | yes | no | [[#N2686\|View]] |
| N2687 | [[08.16.11 Crossing symmetry\|08.16 Exercises/08.16.11 Crossing symmetry]] | Analyzed | low | no | no | [[#N2687\|View]] |
| N2688 | [[08.16.12 Schwinger result for (g − 2) - 2\|08.16 Exercises/08.16.12 Schwinger result for (g − 2) - 2]] | Analyzed | low | yes | no | [[#N2688\|View]] |

## Suggestions

### N2630

Note: [[08.01 The QED Lagrangian and U(1) Gauge Invariance|08.01 The QED Lagrangian and U(1) Gauge Invariance]]  
Priority: low · Graph: no · Manim: no

Readable chapter introduction and hub, with vague precision claims and one missing child link.

- [Links] The closing sentence links 08.01.01 and 08.01.02 but not [[08.01.03 Physical Content of the Lagrangian]]; add it.
- [Example] Replace "more than ten decimal places" with the actual comparison (measured $\magnetic{a}_e=0.001\,159\,652\,180\,59(13)$, 2023) and flag the Feynman quote as unverified attribution.

### N2631

Note: [[08.01.01 Global and Local Gauge Invariance|08.01.01 Global and Local Gauge Invariance]]  
Priority: medium · Graph: no · Manim: no

The transformation algebra is correct, but the source's charge-sign claim is wrong for the stated conventions and is only deferred to the next note.

- [Correctness] With $\psi\to e^{-i\electric{e}\signal{\alpha}}\psi$, $D_\mu=\partial_\mu+i\electric{e}\electric{A}_\mu$, $\electric{e}>0$ and $\mathcal L_{\mathrm{int}}=-J^\mu\electric{A}_\mu$, the current is $J^\mu=\electric{e}\bar\psi\gamma^\mu\psi$, so the particles annihilated by $\psi$ carry charge $+\electric{e}$; the claim that $\electric{Q}_e=-|\electric{e}|$ "follows from quantization" is false here. Either set $\electric{e}=-|\electric{e}|$ for the electron (Peskin's convention) or use $D_\mu=\partial_\mu-i|\electric{e}|\electric{A}_\mu$.
- [Structure] The gauge parameter $\signal{\alpha}$ shares its letter with the fine-structure constant $\electric{\alpha}$ used throughout the chapter; consider $\theta(\mechanical{x})$ or $\Lambda(\mechanical{x})$.
- [Manim] Optional: show phase arrows on a spacetime grid, first rotated uniformly (differences between neighbours unchanged), then by a position-dependent angle so neighbour differences change, motivating the compensating field.

### N2632

Note: [[08.01.02 Covariant Derivative and Minimal Coupling|08.01.02 Covariant Derivative and Minimal Coupling]]  
Priority: low · Graph: no · Manim: no

Correct and explicit covariance check and interaction term; the closing charge-sign note is hedged instead of stating the consequence.

- [Simplify] In the closing note, state plainly that with $J^\mu=\electric{e}\signal{j}^\mu$ and $\electric{e}>0$ the field quanta have charge $+\electric{e}$, and which substitution describes electrons (see the 08.01.01 item).
- [Simplify] Shorten the four-line expansion (8.1) to two lines by applying the product rule directly; the cancellation sentence already makes the point.
- [Intuition] Add the field-strength check $[D_\mu,D_\nu]=i\electric{e}\electric{F}_{\mu\nu}$, with $\electric{F}_{\mu\nu}$ invariant under $\electric{A}_\mu\to\electric{A}_\mu+\partial_\mu\signal{\alpha}$, to explain why the Maxwell term is allowed.

### N2633

Note: [[08.01.03 Physical Content of the Lagrangian|08.01.03 Physical Content of the Lagrangian]]  
Priority: low · Graph: no · Manim: no

Correct and clear decomposition of the Lagrangian with appropriate caveats on convergence and photon mass.

- [Intuition] Add the coupled field equations from the full Lagrangian, $\partial_\mu\electric{F}^{\mu\nu}=\electric{e}\signal{j}^\nu$ and $(i\not D-\mechanical{m})\signal{\psi}=0$, to show what the interaction term changes.
- [Example] Mention the experimental photon-mass bound (PDG: $\mechanical{m}_\gamma<10^{-18}\unit{eV}$) next to Remark 8.1.

### N2634

Note: [[08.02 Feynman Rules of QED|08.02 Feynman Rules of QED]]  
Priority: low · Graph: no · Manim: no

Correct compact rule list; the incoming electron is pulled out of the table for no reason.

- [Structure] Put the incoming electron $u^s(\mechanical{p})$ into the external-state table with the other five rows.
- [Links] Link "Chapter 7" to [[07.05 Feynman Rules for QED]] and [[07.05.06 Summary Table of Feynman Rules for QED]].

### N2635

Note: [[08.03 Trace Techniques|08.03 Trace Techniques]]  
Priority: low · Graph: no · Manim: no

Short, clear hub that orders the three trace subnotes and correctly states when the unpolarized average applies.

- [Structure] No change needed; optionally add one line naming the generic recipe ($\overline{|\mathcal M|^2}\to$ insert completeness $\to$ trace $\to$ contract) so the reader sees the pipeline before opening the subnotes.

### N2636

Note: [[08.03.01 Spin Sums and Completeness|08.03.01 Spin Sums and Completeness]]  
Priority: low · Graph: no · Manim: no

Correct and compact, but the step from a bilinear product to a trace is only described in words.

- [Example] Add a three-line worked example: $\sum_{s,s'}|\bar u^{s'}(p')\Gamma u^s(p)|^2=\operatorname{tr}[\Gamma(\not p+m)\bar\Gamma(\not p'+m)]$, showing explicitly where each completeness relation is inserted.
- [Intuition] Add a normalization check: tracing $\sum_s u^s\bar u^s=\not p+m$ gives $\sum_s\bar u^s u^s=4m=2\cdot2m$, matching $\bar u^s u^s=2m$ per spin; the analogous check for $v$ gives $-2m$ and explains the opposite mass sign.

### N2637

Note: [[08.03.02 Traces of Gamma Matrices|08.03.02 Traces of Gamma Matrices]]  
Priority: low · Graph: no · Manim: no

Correct identity list, but the four-gamma trace and the gamma-five sign are stated without derivation or explicit convention.

- [Simplify] Derive (8.5) in three lines (anticommute $\gamma^\mu$ through the other three and use cyclicity) so the plus-minus-plus sign pattern is earned rather than memorized.
- [Structure] State the convention package explicitly next to the $\gamma^5$ trace (e.g. $\gamma^5=i\gamma^0\gamma^1\gamma^2\gamma^3$, $\epsilon^{0123}=-1$ as in Peskin–Schroeder) instead of only saying the sign is convention-dependent.
- [Structure] The algebraic-check paragraph refers to (8.6) before (8.6) is displayed; move it below (8.6) or phrase it in terms of (8.5) contracted with one vector.

### N2638

Note: [[08.03.03 Index Contractions in d = 4|08.03.03 Index Contractions in d = 4]]  
Priority: low · Graph: no · Manim: no

Correct four-dimensional contraction identities with a sensible warning about dimensional regularization.

- [Simplify] Show the one-line derivation of $\gamma^\mu\not a\gamma_\mu=-2\not a$ from $\gamma^\mu\not a=-\not a\gamma^\mu+2a^\mu$, which also makes the later identities plausible.
- [Example] Since the note warns about dimensional regularization, give the $d$-dimensional forms ($\gamma^\mu\gamma_\mu=d$, $\gamma^\mu\not a\gamma_\mu=-(d-2)\not a$, $\gamma^\mu\not a\not b\gamma_\mu=4a\cdot b-(4-d)\not a\not b$) so the reader sees exactly what changes.

### N2639

Note: [[08.04 Annihilation - e⁺e⁻ → μ⁺μ⁻|08.04 Annihilation - e⁺e⁻ → μ⁺μ⁻]]  
Priority: low · Graph: no · Manim: no

Clear hub with a good motivating question and correct scope statement.

- [Structure] No change needed; optionally state the final results ($\alpha^2(1+\cos^2\theta)/4s$ and $4\pi\alpha^2/3s$) up front so the reader knows the destination.

### N2640

Note: [[08.04.01 Kinematics and Feynman Diagram|08.04.01 Kinematics and Feynman Diagram]]  
Priority: low · Graph: no · Manim: no

Correct and readable setup of momenta, diagram, and threshold.

- [Example] Write the explicit centre-of-mass four-vectors ($p=(E,0,0,E)$, $\bar p=(E,0,0,-E)$, $k=(E,\mathbf k)$, $\bar k=(E,-\mathbf k)$ with $|\mathbf k|=\sqrt{E^2-m_\mu^2}$) so the virtual photon $q=(2E,\mathbf 0)$ and the threshold $E\ge m_\mu$ are visible at a glance; later notes reuse them.

### N2641

Note: [[08.04.02 Feynman Amplitude|08.04.02 Feynman Amplitude]]  
Priority: low · Graph: no · Manim: no

Correct amplitude with useful dimension and current-conservation checks.

- [Simplify] Show the phase bookkeeping explicitly: $(-ie)^2(-i)=ie^2$, so $i\mathcal M=ie^2/q^2[\dots][\dots]$; this one line replaces the abstract sentence about the displayed overall phase.
- [Intuition] Make the transversality claim concrete: $q_\mu\bar v(\bar p)\gamma^\mu u(p)=\bar v(\bar p)(\not p+\not{\bar p})u(p)=\bar v(m-m)u=0$.

### N2642

Note: [[08.04.03 Calculation of the Squared Amplitude|08.04.03 Calculation of the Squared Amplitude]]  
Priority: medium · Graph: no · Manim: no

The derivation is correct (re-derived (8.7) and (8.8)), but the long list of contractions is hard to follow and the mass terms are simplified in one opaque step.

- [Simplify] Introduce $A=p\cdot\bar p+m_e^2$, $B=k\cdot\bar k+m_\mu^2$, $P=p\cdot\bar p$, $K=k\cdot\bar k$ and show the intermediate step $-2AK-2BP+4AB=2m_e^2K+2m_\mu^2P+4m_e^2m_\mu^2$ that turns the first form of (8.8) into the second.
- [Structure] Replace the seven separate contraction displays by a $3\times3$ table (rows: electron-tensor terms, columns: muon-tensor terms) whose entries are the scalar products; this makes the factor 2 in front of each product obvious.
- [Simplify] The electron-tensor section expands the trace twice (once with the vanishing odd traces, once again without); keep a single expansion.
- [Example] Display the current-conservation check, $q^\mu L^{(e)}_{\mu\nu}=(P+m_e^2)(p+\bar p)_\nu-(p+\bar p)_\nu(P+m_e^2)=0$, rather than only describing it.

### N2643

Note: [[08.04.04 Mandelstam Variables|08.04.04 Mandelstam Variables]]  
Priority: low · Graph: yes · Manim: no

Correct and well-checked; the meaning of t and u as functions of angle is deferred to the next note.

- [Graph] Plot $t/s=-(1-\cos\theta)/2$ and $u/s=-(1+\cos\theta)/2$ against $\cos\theta\in[-1,1]$ (massless case) together with their sum $-1$, so the physical region and the right-angle point $t=u=-s/2$ are visible.
- [Simplify] Derive one massless dot product in a line, e.g. $t=(p-k)^2=-2p\cdot k$, to show where the factor $-1/2$ comes from.

### N2644

Note: [[08.04.05 Differential and Total Cross Sections|08.04.05 Differential and Total Cross Sections]]  
Priority: medium · Graph: yes · Manim: no

Correct results (recomputed 0.87 nb at 10 GeV), but the angular shape and the energy scaling would be much clearer with plots and a practical unit formula.

- [Graph] Polar plot of $d\sigma/d\Omega\propto1+\cos^2\theta$ for $\theta\in[0,2\pi]$, optionally overlaid with the isotropic average $4/3$, to show the forward–backward symmetric shape.
- [Graph] Log–log plot of $\sigma_{\rm tot}=86.8\,\mathrm{nb}/(s/\mathrm{GeV}^2)$ for $\sqrt s\in[1,200]\,\mathrm{GeV}$, marking the 10 GeV benchmark.
- [Example] State the practical formula $\sigma_{\rm tot}\approx86.8\,\mathrm{nb}/s[\mathrm{GeV}^2]$ and the conversion $1\,\mathrm{GeV^{-2}}=0.3894\,\mathrm{mb}$ used to get 0.87 nb; the current text skips the unit conversion.
- [Links] The general formula $d\sigma/d\Omega=|\mathbf k|\overline{|\mathcal M|^2}/(64\pi^2s|\mathbf p|)$ appears without source; link the chapter 7 note where the two-body cross section is derived.

### N2645

Note: [[08.04.06 The Ratio R and Color Counting|08.04.06 The Ratio R and Color Counting]]  
Priority: medium · Graph: yes · Manim: no

Correct R values and threshold formula, but the note mixes two topics and gives no picture of the step structure.

- [Graph] Plot the parton-model $R(\sqrt s)$ as a step function (2 below charm, 10/3 above about 3.7 GeV, 11/3 above about 10.6 GeV) on $\sqrt s\in[1,40]\,\mathrm{GeV}$, optionally with the $(1+\alpha_s/\pi)$-corrected values.
- [Graph] Plot $\sigma/\sigma_{\rm massless}=\beta_\mu(1+2m_\mu^2/s)$ against $\sqrt s/(2m_\mu)\in[1,5]$ to show the threshold rise and approach to one.
- [Structure] Example 8.2 (massive muon threshold) concerns $\mathrm e^+\mathrm e^-\to\mu^+\mu^-$ kinematics, not $R$; move it to 08.04.05 or give it its own short note.
- [Simplify] Write the QCD correction explicitly as $R=3\sum_qQ_q^2(1+\alpha_s/\pi+\dots)$ instead of only "corrections of order $\alpha_s/\pi$".
- [Intuition] Mention that the threshold formula is tree level only; near threshold the Coulomb (Sommerfeld) final-state enhancement modifies the $\beta$ behaviour.

### N2646

Note: [[08.05 Bhabha Scattering - e⁺e⁻ → e⁺e⁻|08.05 Bhabha Scattering - e⁺e⁻ → e⁺e⁻]]  
Priority: low · Graph: no · Manim: no

Clear hub with the right physical warning about the forward Coulomb peak.

- [Structure] No change needed.

### N2647

Note: [[08.05.01 Diagrams and Interference|08.05.01 Diagrams and Interference]]  
Priority: low · Graph: no · Manim: no

Correct channel amplitudes and relative sign; the origin of the minus sign is only asserted.

- [Intuition] Show briefly how the relative sign arises: the two Wick contractions differ by an odd permutation of the external fermion operators, or equivalently the $t$-channel amplitude follows from the $s$-channel one by crossing $\bar p\leftrightarrow-k$.
- [Simplify] Add the physical-region values $s=4E^2>0$ and $t=-2E^2(1-\cos\theta)\le0$, which makes the timelike-versus-spacelike sentence concrete.

### N2648

Note: [[08.05.02 Squared Modulus and Interference|08.05.02 Squared Modulus and Interference]]  
Priority: medium · Graph: yes · Manim: no

Correct (8.11) with a good right-angle check (1/2, 5, −1 verified), but the traces are not shown and the angular behaviour is left to words.

- [Graph] Plot the three bracket terms of (8.11) and their sum against $\cos\theta\in[-0.95,0.95]$ on a logarithmic vertical axis, using $t=-s(1-\cos\theta)/2$, $u=-s(1+\cos\theta)/2$; overlay the muon-pair term $(1+\cos^2\theta)/2$ for comparison.
- [Simplify] Obtain $\overline{|\mathcal M_t|^2}$ from $\overline{|\mathcal M_s|^2}$ by crossing ($s\leftrightarrow t$) in one line rather than "trace evaluation gives", and name the single trace that produces the interference term.
- [Example] Give the explicit angular form $d\sigma/d\Omega=\frac{\alpha^2}{2s}\left[\frac{1+\cos^4(\theta/2)}{\sin^4(\theta/2)}-\frac{2\cos^4(\theta/2)}{\sin^2(\theta/2)}+\frac{1+\cos^2\theta}{2}\right]$ so the $1/\sin^4(\theta/2)$ peak is visible.

### N2649

Note: [[08.06 Compton Scattering and the Klein–Nishina Formula|08.06 Compton Scattering and the Klein–Nishina Formula]]  
Priority: low · Graph: no · Manim: no

Clear hub with correct scope and checks.

- [Structure] No change needed.

### N2650

Note: [[08.06.01 Diagrams and Kinematics|08.06.01 Diagrams and Kinematics]]  
Priority: low · Graph: no · Manim: no

Correct amplitude (8.12) and denominators; the gauge-invariance check is only described.

- [Example] Carry out the gauge check explicitly for $\epsilon(k)\to k$: using the Dirac equation, show that the two terms reduce to $\pm\bar u(p')\gamma_\nu u(p)\epsilon^{*\nu}$ and cancel.
- [Example] Derive the Compton relation $1/\omega'-1/\omega=(1-\cos\theta)/m$ here from $p'^2=(p+k-k')^2=m^2$, since the next note uses it without derivation.

### N2651

Note: [[08.06.02 Klein–Nishina Formula|08.06.02 Klein–Nishina Formula]]  
Priority: medium · Graph: yes · Manim: no

Correct squared amplitude, Klein–Nishina and Thomson results, but the route from the invariant expression to (8.13) is skipped and the angular physics is not visualized.

- [Graph] Polar plot of $(d\sigma/d\Omega)/r_0^2$ from (8.13) for $\omega/m_e=0.01,\,0.1,\,1,\,10$ to show the transition from the symmetric Thomson pattern to forward peaking.
- [Graph] Plot $\omega'/\omega=1/[1+(\omega/m_e)(1-\cos\theta)]$ against $\theta\in[0,\pi]$ for the same energies.
- [Simplify] Add the missing step: lab-frame phase space gives $d\sigma/d\cos\theta=\frac{1}{32\pi m^2}(\omega'/\omega)^2\overline{|\mathcal M|^2}$, and in the lab $p\cdot k=m\omega$, $p\cdot k'=m\omega'$, which turns the bracket into $\omega'/\omega+\omega/\omega'-\sin^2\theta$.
- [Structure] The note uses both $m$ and $m_e$ for the same electron mass (and lists both in the table); pick one symbol.

### N2652

Note: [[08.07 Møller Scattering - e⁻e⁻ → e⁻e⁻|08.07 Møller Scattering - e⁻e⁻ → e⁻e⁻]]  
Priority: low · Graph: no · Manim: no

Clear hub that correctly separates the exchange sign from identical-particle phase-space counting.

- [Structure] No change needed.

### N2653

Note: [[08.07.01 Diagrams and the Exclusion Principle|08.07.01 Diagrams and the Exclusion Principle]]  
Priority: medium · Graph: yes · Manim: no

Correct amplitudes and (8.14), but the result is not connected to Bhabha by crossing and lacks a numerical check.

- [Graph] Plot the bracket of (8.14) against $\cos\theta\in[-0.95,0.95]$ (log vertical axis) together with its separate $t$-pole, $u$-pole, and interference terms, to show the symmetric forward and backward peaks.
- [Example] Add the right-angle check: with $t=u=-s/2$ the three terms are $5$, $5$, and $+8$, total $18$ (the interference is constructive here, unlike Bhabha).
- [Simplify] Note that (8.14) follows from Bhabha (8.11) by crossing $s\leftrightarrow u$; this is a strong consistency check between the two notes.
- [Structure] The table lists $\mathcal M$ and $\mathcal M_{\mathrm{Møller}}$ in two rows for the same quantity; merge them.

### N2654

Note: [[08.08 Annihilation - e⁺e⁻ → γγ|08.08 Annihilation - e⁺e⁻ → γγ]]  
Priority: medium · Graph: yes · Manim: no

Correct amplitude, (8.15), and high-energy total cross section (checked against Dirac's formula), but the crossing from Compton and the integration are not shown.

- [Simplify] Show the crossing explicitly: the massless Compton result $-2e^4(u/s+s/u)$ with $s\to t$ and the overall fermion-crossing sign gives $2e^4(u/t+t/u)$; a small mapping table (which momentum goes where) would replace the abstract paragraph.
- [Graph] Plot $u/t+t/u=2(1+\cos^2\theta)/\sin^2\theta$ (massless) against $\cos\theta\in[-0.99,0.99]$, optionally with the massive version at $\sqrt s=10m_e$, to show the collinear peaks that the mass regulates.
- [Example] Sketch the integration that produces $[\ln(s/m_e^2)-1]$: the endpoints $\cos\theta\to\pm1$ are cut off at $1\mp\cos\theta\sim m^2/s$, giving the logarithm.
- [Intuition] Mention the low-energy limit (Dirac's $\sigma\simeq\pi r_0^2/\beta$, relevant for positron annihilation at rest) as a contrast to the high-energy $\ln s/s$ behaviour.

### N2655

Note: [[08.09 Bremsstrahlung|08.09 Bremsstrahlung]]  
Priority: medium · Graph: no · Manim: yes

Qualitatively correct but schematic; the angular factor is never given and the quantity table and macros are inconsistent with the rest of the chapter.

- [Correctness] The table lists $p,p',k$ as used "in the figure", but neither the text nor the Fig. 8.6 caption uses these symbols; introduce them (e.g. in an explicit soft factor) or remove the row.
- [Correctness] The photon energy is written $\signal{\omega}$ here but $\energy{\omega}$ in 08.06.02, 08.10.01 and 08.11.02 for the same physical quantity; use $\energy{\omega}$ consistently.
- [Example] Replace the schematic $f(\theta,\phi)$ by the explicit eikonal factor $dN=-\frac{\alpha}{4\pi^2}\frac{d\omega}{\omega}d\Omega_k\,\omega^2\left(\frac{p'}{p'\cdot k}-\frac{p}{p\cdot k}\right)^2$, which shows where the $1/\omega$ and the angular pattern come from.
- [Manim] Animate an electron deflected by a nucleus with radiation emitted from the kink in its trajectory, showing that the change of velocity (not velocity itself) produces the photon and that soft photons dominate.
- [Simplify] Give the integrated soft result $\sim\frac{\alpha}{\pi}\ln\frac{-q^2}{m^2}\ln\frac{\omega_{\max}}{\omega_{\min}}$ for $-q^2\gg m^2$ to make the logarithmic divergence quantitative.

### N2656

Note: [[08.10 Polarization|08.10 Polarization]]  
Priority: low · Graph: no · Manim: no

Clear hub with a useful reconstruction check.

- [Structure] No change needed.

### N2657

Note: [[08.10.01 Transverse and Longitudinal Polarization|08.10.01 Transverse and Longitudinal Polarization]]  
Priority: low · Graph: no · Manim: yes

Correct transverse and circular vectors, but the longitudinal part promised by the title is only one sentence.

- [Structure] Display the unphysical scalar and longitudinal vectors ($\epsilon_{(0)}=(1,0,0,0)$, $\epsilon_{(3)}=(0,0,0,1)$) and show that $\epsilon_{(0)}+\epsilon_{(3)}=k/\omega$, which is why their contributions decouple via the Ward identity.
- [Manim] Animate the electric-field vector at a fixed point for $\epsilon_{(1)}$, $\epsilon_{(2)}$, and $\epsilon_{(\pm)}$ (oscillating line versus rotating arrow), showing circular states as phase-shifted superpositions of linear ones.

### N2658

Note: [[08.10.02 Sum over Physical Polarizations|08.10.02 Sum over Physical Polarizations]]  
Priority: low · Graph: no · Manim: no

Correct polarization-sum formula (including the general-$n$ correction) and a clear statement of when $-g_{\mu\nu}$ may be used.

- [Example] Evaluate the projector for $k=(\omega,0,0,\omega)$, $n=(1,0,0,-1)$ and show it reduces to $\mathrm{diag}(0,1,1,0)$, i.e. exactly $\sum_\lambda\epsilon^{i*}\epsilon^j$ for $\lambda=1,2$.
- [Example] Show in two lines why the extra terms vanish: $k^\mu\mathcal M_\mu=0$ kills the $k_\mu n_\nu$ and $k_\nu n_\mu$ terms after contraction with $\mathcal M^\mu\mathcal M^{*\nu}$.

### N2659

Note: [[08.10.03 Helicity Asymmetries|08.10.03 Helicity Asymmetries]]  
Priority: medium · Graph: yes · Manim: no

Correct helicity cross sections and reconstruction of (8.9), but the angular-momentum argument is too terse and the many caveat boxes interrupt the flow.

- [Graph] Polar plot of $(1+\cos\theta)^2$, $(1-\cos\theta)^2$, and their sum $2(1+\cos^2\theta)$, to show how two asymmetric helicity channels combine into the symmetric unpolarized pattern.
- [Intuition] Make the angular-momentum argument explicit: $J_z=+1$ initially, final state along $\theta$ with $J_{z'}=\pm1$, amplitude $\propto d^1_{1,\pm1}(\theta)=(1\pm\cos\theta)/2$, and squaring gives the displayed factors; add a small spin-arrow sketch.
- [Structure] Merge the three note boxes (antifermion chirality, "other four" counting, QED asymmetry caveat) into one short "Conventions and caveats" section at the end.

### N2660

Note: [[08.11 Infrared Divergences|08.11 Infrared Divergences]]  
Priority: low · Graph: no · Manim: no

Clear hub with a good motivating question about detector resolution.

- [Structure] No change needed.

### N2661

Note: [[08.11.01 Nature of the Infrared Problem|08.11.01 Nature of the Infrared Problem]]  
Priority: medium · Graph: no · Manim: no

The power-counting argument is correct, but the displayed integral keeps a known typo and the soft numerator is not worked out.

- [Correctness] The displayed integral uses the measure $d^4k$ with an integrand in $l$; correct the equation to $d^4l$ (and drop $k$ from the table) instead of keeping the error and explaining it in a note.
- [Simplify] Show the soft (eikonal) limit of the numerator: for $l\to0$, $\bar u(p')\gamma^\nu(\not p'+m)\gamma^\mu(\not p+m)\gamma_\nu u(p)\to4(p\cdot p')\bar u(p')\gamma^\mu u(p)$, so the soft part is manifestly proportional to $\Gamma^\mu_{\rm tree}$.
- [Simplify] Give the leading high-energy form $\delta F_1\simeq-\frac{\alpha}{2\pi}\ln\frac{-q^2}{m^2}\ln\frac{-q^2}{m_\gamma^2}$ instead of the vague $\ln(m_\gamma^2/\mu^2)$ with an unspecified scale.

### N2662

Note: [[08.11.02 The Bloch–Nordsieck Theorem|08.11.02 The Bloch–Nordsieck Theorem]]  
Priority: medium · Graph: yes · Manim: no

Conceptually careful, but the displayed resolution logarithm has the wrong structure for massive charges and no explicit cancellation is shown.

- [Correctness] The schematic $\sigma=\sigma_0[1+\frac{\alpha}{\pi}(-\ln^2\frac{\Delta E}{\sqrt s}+\dots)]$ is a double log in $\Delta E$, but for massive external charges the regulator-free remainder is a single log in $\Delta E$ times a mass log, $\sigma\simeq\sigma_0[1+\frac{2\alpha}{\pi}(\ln\frac{s}{m^2}-1)\ln\frac{\Delta E}{\sqrt s}+\dots]$, consistent with the first-order expansion of the exponent in 08.11.03.
- [Example] Show the cancellation explicitly at one loop: a virtual term $\propto-\frac{\alpha}{\pi}(\ln\frac{s}{m^2}-1)\ln\frac{\sqrt s}{m_\gamma}$ and a real term $\propto+\frac{\alpha}{\pi}(\ln\frac{s}{m^2}-1)\ln\frac{\Delta E}{m_\gamma}$ (common coefficient), so the reader sees $m_\gamma$ drop out and $\Delta E$ remain.
- [Graph] Plot $\sigma(\Delta E)/\sigma_0$ from the corrected first-order formula against $\Delta E/\sqrt s\in[10^{-4},1]$ (log axis) for $\sqrt s=10\,\mathrm{GeV}$, $m=m_e$, showing that it turns negative at small $\Delta E$ and motivating resummation.
- [Simplify] The KLN/collinear discussion (two paragraphs plus an external link) is longer than the theorem itself; condense it to two sentences.

### N2663

Note: [[08.11.03 The Sudakov Double Logarithm|08.11.03 The Sudakov Double Logarithm]]  
Priority: medium · Graph: yes · Manim: no

Correct leading-log statements with appropriate caveats, but the dense note box and missing numbers make the size of the effect hard to grasp.

- [Graph] Plot $\sigma_{\rm excl}/\sigma_0=\exp[-\frac{\alpha}{\pi}\ln\frac{s}{m_e^2}\ln\frac{s}{\Delta E^2}]$ and its first-order truncation against $\sqrt s\in[1,1000]\,\mathrm{GeV}$ for fixed $\Delta E/\sqrt s=0.01$, showing the truncation turning negative while the exponential stays positive.
- [Example] Give one number: at $\sqrt s=91\,\mathrm{GeV}$, $\Delta E=1\,\mathrm{GeV}$, the exponent is about $-(1/137\pi)\cdot24.2\cdot9.0\approx-0.51$, i.e. roughly a 40 percent suppression.
- [Intuition] Explain the origin of the two logarithms with the soft–collinear integral $\int\frac{d\omega}{\omega}\int\frac{d\theta^2}{\theta^2}$, which makes "double log" concrete.
- [Simplify] Shorten the "Soft-factor scope" note box to two sentences; its reference list is heavier than the physics it qualifies.

### N2664

Note: [[08.12 Preview of Loop Corrections|08.12 Preview of Loop Corrections]]  
Priority: low · Graph: no · Manim: no

Clear hub with correct expansion factor and links.

- [Links] Link "Chapter 9" to the hub of the 09 Renormalization folder so the forward reference is clickable.

### N2665

Note: [[08.12.01 Vacuum Polarization|08.12.01 Vacuum Polarization]]  
Priority: medium · Graph: yes · Manim: no

Correct structure and running-coupling statements, but (8.16) is not identified as the subtracted function and the size of the electron-only running is not quantified.

- [Simplify] State that (8.16) is the renormalized (subtracted) function $\hat\Pi(q^2)=\Pi(q^2)-\Pi(0)$; the unsubtracted one-loop $\Pi$ is ultraviolet divergent, and $\alpha_{\rm em}(q^2)=\alpha/(1-\hat\Pi)$ holds for the subtracted one.
- [Graph] Plot $1/\alpha_{\rm em}(Q)$ from one-loop leptonic running against $Q\in[1\,\mathrm{MeV},100\,\mathrm{GeV}]$ (log axis), first electron only, then adding $\mu$ and $\tau$, with a marker at $1/128$ for the full value at $M_Z$.
- [Example] Quantify the electron loop: at $M_Z$, $\frac{1}{3\pi}[\ln(M_Z^2/m_e^2)-5/3]\approx2.4$, so $1/\alpha$ drops from 137.0 to about 134.6; adding $\mu$ and $\tau$ gives about 132.7, and hadrons supply the rest to about 128.9.
- [Intuition] Add a one-line screening picture (a test charge surrounded by oriented virtual dipoles, more bare charge seen at shorter distance) linking the sign of $\hat\Pi$ to the growth of $\alpha$.

### N2666

Note: [[08.12.02 Vertex Correction and Anomalous Magnetic Moment|08.12.02 Vertex Correction and Anomalous Magnetic Moment]]  
Priority: low · Graph: no · Manim: no

Correct form-factor decomposition and Schwinger term (0.00116 verified), with clearly dated numerical benchmarks.

- [Intuition] Use the Gordon identity $\bar u'\gamma^\mu u=\bar u'[\frac{(p+p')^\mu}{2m}+\frac{i\sigma^{\mu\nu}q_\nu}{2m}]u$ to show why $F_1+F_2$ multiplies the spin (magnetic) term and hence $g=2(F_1+F_2)$.
- [Structure] Add one sentence that the theory–experiment comparison is now limited by the fine-structure-constant determinations (the Cs and Rb atom-recoil values disagree by several standard deviations), so the quoted agreement depends on which $\alpha$ is used.

### N2667

Note: [[08.12.03 Fermion Self-Energy|08.12.03 Fermion Self-Energy]]  
Priority: low · Graph: no · Manim: no

Correct qualitative preview of the self-energy structure and its renormalization role.

- [Example] Write the on-shell conditions explicitly: $m_{\rm phys}=m+\Sigma(\not p=m_{\rm phys})$ and $Z_2^{-1}=1-\left.\frac{d\Sigma}{d\not p}\right|_{\not p=m_{\rm phys}}$; this makes "location fixes mass, residue fixes normalization" concrete.
- [Structure] The argument is written $\Sigma(\not p)$ here but $\Sigma(p)$ in 08.13.01; use one notation across the two notes.

### N2668

Note: [[08.13 Ward–Takahashi Identity|08.13 Ward–Takahashi Identity]]  
Priority: low · Graph: no · Manim: no

Clear hub; all three links (including 08.13.03) resolve.

- [Structure] No change needed.

### N2669

Note: [[08.13.01 Statement and Physical Meaning|08.13.01 Statement and Physical Meaning]]  
Priority: low · Graph: no · Manim: no

Correct identity, tree check, and careful handling of the factor-$i$ convention.

- [Example] Add the zero-momentum Ward limit $\Gamma^\mu(p,p)=\partial S_F^{-1}(p)/\partial p_\mu$, obtained by expanding (8.19) to first order in $q$; it is the bridge to $Z_1=Z_2$ in the next note.
- [Intuition] Add a short one-loop illustration: inserting the external photon on every internal fermion line of the self-energy produces the one-loop vertex, which is why (8.19) holds order by order.

### N2670

Note: [[08.13.02 Consequences for Renormalization Factors|08.13.02 Consequences for Renormalization Factors]]  
Priority: low · Graph: no · Manim: no

Correct statement of $Z_1=Z_2$ and its implication, but the derivation from the identity is absent.

- [Simplify] Derive $Z_1=Z_2$ in three lines from the Ward limit $\Gamma^\mu(p,p)=\partial S^{-1}/\partial p_\mu$ near the mass shell, then show $e_R=Z_1^{-1}Z_2Z_3^{1/2}e_0=Z_3^{1/2}e_0$ so the role of the photon factor is explicit.

### N2671

Note: [[08.13.03 Form for External Amplitudes|08.13.03 Form for External Amplitudes]]  
Priority: medium · Graph: no · Manim: no

Correct statement of the Ward identity, but Example 8.7 describes the Compton cancellation only in words and never shows the algebra.

- [Example] In Example 8.7 write the two key lines explicitly: $(\not p+\not k+m)\not k\,u(p)=2p\cdot k\,u(p)$ and $\bar u(p')\not k(\not p-\not k'+m)=2p\cdot k'\,\bar u(p')$, so the reader sees each diagram reduce to $\mp e^2\bar u(p')\gamma_\nu u(p)$; or link [[08.16.08 Tree-level Compton Ward identity]] where this is done.
- [Simplify] The paragraph "The physical consequence is invariance under adding a multiple of the photon momentum to its polarization" should show the one-line reason: $\epsilon_\mu\to\epsilon_\mu+c\,q_\mu$ changes $\epsilon_\mu\mathcal M^\mu$ by $c\,q_\mu\mathcal M^\mu=0$.
- [Intuition] Explain briefly why only the sum of diagrams satisfies (8.20): gauge invariance is a property of the full amplitude, and a single diagram changes under the replacement.
- [Structure] The table entry "q_i and q_j label individual photons" uses plain text instead of $q_i,q_j$; use inline math for consistency.

### N2672

Note: [[08.14 High-Energy Limit|08.14 High-Energy Limit]]  
Priority: low · Graph: no · Manim: no

Short and clear hub that separates the fixed-angle massless limit from the Regge limit.

- [Example] Name one concrete case for the closing sentence on mass logarithms, for example the Compton total cross section $\propto\ln(s/m_e^2)$ in [[08.15 Summary of Fundamental Processes]], to make "mass logarithms" tangible.

### N2673

Note: [[08.14.01 Chiral Structure of the Amplitudes|08.14.01 Chiral Structure of the Amplitudes]]  
Priority: low · Graph: yes · Manim: no

Correct helicity amplitudes with a careful anomaly caveat; the angular-momentum argument is stated but not illustrated.

- [Intuition] Add the angular-momentum picture: the initial $e_L^-e_R^+$ pair has $J_z=-1$ along the beam, the final pair has $J=1$ with projection $\mp1$ along the muon direction, and the amplitudes are proportional to $d^1_{-1,\mp1}(\theta)=(1\pm\cos\theta)/2$ (up to phase conventions); this explains both factors at once.
- [Graph] Plot $(1+\cos\theta)^2$, $(1-\cos\theta)^2$ and their sum $2(1+\cos^2\theta)$ for $\theta\in[0,\pi]$, showing how the two helicity channels add to the unpolarized $1+\cos^2\theta$ distribution.
- [Links] Link to [[08.16.04 Muon-pair angular distribution]] so the reader sees that summing the four nonzero squared helicity amplitudes reproduces $1+\cos^2\theta$.

### N2674

Note: [[08.14.02 Regge Limit|08.14.02 Regge Limit]]  
Priority: medium · Graph: yes · Manim: no

Correct formulas, but the note spends more text on caveats than on explaining what a Regge trajectory is.

- [Intuition] Explain what $\alpha_R(t)$ means: exchanging a particle of spin $J$ gives an amplitude $\propto s^J$ at fixed $t$, so $\alpha_R(0)=1$ for the photon follows from spin one; a trajectory interpolates spin as a function of $t$.
- [Simplify] Show the one-line step to the cross section: optical theorem $\sigma_{\rm tot}\simeq\operatorname{Im}\mathcal M(s,0)/s\sim s^{\alpha_R(0)-1}$; the note quotes the result without this step.
- [Graph] Log–log plot of $\sigma_{\rm tot}\propto s^{\alpha_R(0)-1}$ for $\alpha_R(0)=0.5$, $1$, $1.08$ over $\sqrt s\in[10,10^4]$ GeV (arbitrary normalization), showing falling, constant and slowly rising behavior.
- [Structure] Merge the three caveat paragraphs (infrared prescription, reference scale, transfer window vs angular acceptance) into one short callout so the main idea stays visible.

### N2675

Note: [[08.15 Summary of Fundamental Processes|08.15 Summary of Fundamental Processes]]  
Priority: low · Graph: yes · Manim: no

Correct and useful reference table; all squared amplitudes, cross sections and the crossing map check out.

- [Example] Add the one-line crossing check for Remark 8.8: $-2(u/s+s/u)\to-2(u/t+t/u)$ under $s\leftrightarrow t$, then multiplied by $-1$, gives the annihilation row.
- [Graph] Plot $\overline{|\mathcal M|^2}/e^4$ against $\cos\theta\in[-0.95,0.95]$ for $e^+e^-\to\mu^+\mu^-$, Bhabha and Møller using $t=-\tfrac s2(1-\cos\theta)$, $u=-\tfrac s2(1+\cos\theta)$, with a log y-axis, to contrast the flat s-channel shape with the forward t-channel peak and the symmetric t/u peaks.

### N2676

Note: [[08.16 Exercises|08.16 Exercises]]  
Priority: low · Graph: no · Manim: no

Clean exercise index with a useful reading order.

- [Structure] The "Source solutions" section repeats the sentence above it; reduce it to one line or drop it.

### N2677

Note: [[08.16.01 Gauge invariance of the QED Lagrangian|08.16.01 Gauge invariance of the QED Lagrangian]]  
Priority: low · Graph: no · Manim: no

Correct and complete solution with a clear derivation of the covariant-derivative transformation.

- [Simplify] In (a) state explicitly that $\bar\psi\to\bar\psi\,e^{+ie\alpha}$, so the reader sees why $\bar\psi\gamma^\mu D_\mu\psi$ is invariant instead of reading only "The adjoint carries the inverse phase".
- [Intuition] In (c) add the Proca/Yukawa contrast: a photon mass would turn the Coulomb potential into $e^{-m_\gamma r}/r$, which links the gauge argument to the stated infinite range.

### N2678

Note: [[08.16.02 QED Noether current|08.16.02 QED Noether current]]  
Priority: low · Graph: no · Manim: no

Correct Noether derivation and a sound interacting-conservation proof.

- [Simplify] In the conservation step, say explicitly that $\partial_\mu(\bar\psi\gamma^\mu\psi)=(D_\mu\bar\psi)\gamma^\mu\psi+\bar\psi\gamma^\mu D_\mu\psi$ because the $\pm ieA_\mu$ terms cancel; this is the line that makes the covariant equations usable.
- [Intuition] Add one sentence connecting the result to charge: $Q=\int d^3x\,j^0=e\int d^3x\,\psi^\dagger\psi$, so the conserved quantity is electric charge counted with opposite signs for particles and antiparticles.

### N2679

Note: [[08.16.03 Trace calculations|08.16.03 Trace calculations]]  
Priority: low · Graph: no · Manim: no

All four traces are correct, including the contracted product in (d), and the checks are useful.

- [Simplify] In (d) show the intermediate contraction, $A^{\mu\nu}B_{\mu\nu}=2[(p\cdot k)(q\cdot k')+(p\cdot k')(q\cdot k)]-2m^2(p\cdot q+k\cdot k')+4m^4$, before multiplying by 16; the jump to the final line is otherwise hard to verify.
- [Intuition] In (b) add the quick check $\operatorname{Tr}(\gamma^0\gamma^1\gamma^2\gamma^3\gamma^5)=\operatorname{Tr}(-i\gamma^5\gamma^5)=-4i$, which fixes the sign for the stated $\epsilon^{0123}=+1$ convention.

### N2680

Note: [[08.16.04 Muon-pair angular distribution|08.16.04 Muon-pair angular distribution]]  
Priority: low · Graph: yes · Manim: no

Correct throughout, including the massive-muon bracket, the $\beta$ factor, the total cross section and the 0.87 nb check.

- [Graph] Plot the bracket $(1+\cos^2\theta)+(4m_\mu^2/s)\sin^2\theta$ for $\cos\theta\in[-1,1]$ at $\beta=0.1,0.5,0.9,1$, and a second panel $\sigma/\sigma_0=\beta(3-\beta^2)/2$ against $\sqrt s/m_\mu\in[2,10]$ to show the threshold rise.
- [Simplify] In (c) add the CM kinematics used to evaluate the dot products ($p\cdot k=\tfrac s4(1-\beta\cos\theta)$, $p\cdot k'=\tfrac s4(1+\beta\cos\theta)$, $p\cdot p'=s/2$), since the step from the trace to the angular bracket is skipped.
- [Intuition] Note that $\beta(1+2m_\mu^2/s)=\beta(3-\beta^2)/2$, which makes the threshold behavior $\sigma\propto\beta$ immediate.

### N2681

Note: [[08.16.05 Bhabha scattering|08.16.05 Bhabha scattering]]  
Priority: low · Graph: yes · Manim: no

Correct channel amplitudes, interference sign and right-angle check; the interference trace is not shown.

- [Simplify] Show how $\overline{\mathcal M_s\mathcal M_t^*}=-2e^4u^2/(st)$ arises from the single eight-gamma trace $\operatorname{Tr}(\not{\bar p}\gamma^\mu\not p\gamma^\nu\not k\gamma_\mu\not{\bar k}\gamma_\nu)$ via the contraction identity $\gamma^\nu\not a\not b\not c\gamma_\nu=-2\not c\not b\not a$; currently only "Similarly" is given.
- [Graph] Plot the three pieces $(t^2+u^2)/s^2$, $(s^2+u^2)/t^2$, $2u^2/(st)$ and their sum versus $\cos\theta\in[-0.95,0.95]$ (log y-axis), alongside the muon-pair $1+\cos^2\theta$ shape, to visualize part (c).
- [Intuition] Explain why Bhabha scattering serves as a luminosity monitor: the forward t-channel peak gives a large, precisely calculable QED rate at small angles.

### N2682

Note: [[08.16.06 Compton scattering with polarized photons|08.16.06 Compton scattering with polarized photons]]  
Priority: low · Graph: yes · Manim: no

Correct overlap factors and Klein–Nishina formula, with a clear scope note on the Thomson limit.

- [Graph] Plot the Klein–Nishina $d\sigma/d\Omega$ in units of $\alpha^2/m_e^2$ versus $\theta\in[0,\pi]$ for $\omega/m_e=0.01,0.5,2,10$, showing the transition from the symmetric Thomson shape $(1+\cos^2\theta)/2$ to forward peaking.
- [Simplify] In (a) state the outgoing helicity vectors explicitly for scattering in the $xz$ plane, e.g. $\boldsymbol\epsilon^{(\pm)}(\hat{\mathbf k}')=\mp(\cos\theta,\pm i,-\sin\theta)/\sqrt2$, so the overlaps $(1\pm\cos\theta)/2$ can be checked directly.
- [Structure] The Clifford identity $\not\epsilon\not k=-\not k\not\epsilon$ is derived but never used on this page; either use it or remove it.

### N2683

Note: [[08.16.07 Symmetry of Møller scattering|08.16.07 Symmetry of Møller scattering]]  
Priority: low · Graph: yes · Manim: no

Correct symmetry argument and careful lab-frame caveats; the nonrelativistic Mott form omits a qualifier and part (c) is left open.

- [Simplify] The NR CM expression is the Born-level Mott formula; the exact Coulomb result multiplies the interference term by $\cos[(\alpha/v)\ln\tan^2(\theta/2)]$, which reduces to 1 only for $\alpha/v\ll1$. Add this qualifier, since "nonrelativistic limit" alone suggests small $v$ where it fails.
- [Graph] Plot the three NR Mott terms and their sum versus $\theta_{\rm CM}\in[0.2,\pi-0.2]$ on a log scale, together with the distinguishable-particle sum, to show the symmetry about $\pi/2$ and the destructive exchange term.
- [Example] Complete part (c) at least nonrelativistically: with $\theta_{\rm CM}=2\theta_{\rm lab}$ and $d\Omega_{\rm CM}/d\Omega_{\rm lab}=4\cos\theta_{\rm lab}$, give the normalized lab formula instead of leaving the exercise open.

### N2684

Note: [[08.16.08 Tree-level Compton Ward identity|08.16.08 Tree-level Compton Ward identity]]  
Priority: low · Graph: no · Manim: no

Correct and explicit derivation of both diagram reductions and their cancellation.

- [Simplify] Part (b) only states "the analogous cancellation"; add the two-line mirror computation using $\not k'u(p)=(\not p+\not k-\not p')u(p)$ so both parts are equally explicit.
- [Intuition] In (c) state that each diagram alone gives $\mp e^2\bar u(p')\gamma_\nu u(p)$, i.e. the electron current; the cancellation reflects current conservation along the electron line.

### N2685

Note: [[08.16.09 Low-energy vacuum polarization and the Uehling potential|08.16.09 Low-energy vacuum polarization and the Uehling potential]]  
Priority: low · Graph: yes · Manim: no

Correct contact coefficient, energy shift (−27 MHz checks numerically) and large-distance Uehling asymptotics; one inconsistent number.

- [Structure] The exercise text quotes the Lamb shift as approximately 1057 MHz while the solution quotes approximately 1058 MHz; use one value (measured $\approx1057.8$ MHz) in both places.
- [Simplify] In (b) show the asymptotic step: near $u=1$ the integrand is $\tfrac32\sqrt{2(u-1)}$, and $\int_0^\infty e^{-2m_erv}\sqrt v\,dv=\Gamma(3/2)/(2m_er)^{3/2}$ gives the prefactor $\alpha/(4\sqrt\pi)$.
- [Graph] Plot $r\,\delta V(r)/\alpha^2$ from the exact spectral integral and from the asymptotic form $-e^{-2x}/(4\sqrt\pi x^{3/2})$ against $x=m_er\in[0.05,5]$ on a log y-axis, showing where the asymptotic form becomes accurate.
- [Intuition] Add the screening picture: virtual pairs screen the bare charge, so at distances below $1/m_e$ the probe sees more of the charge and the attraction strengthens, which is why the S-level shift is negative.

### N2686

Note: [[08.16.10 R ratio and number of colors|08.16.10 R ratio and number of colors]]  
Priority: low · Graph: yes · Manim: no

Correct plateau values and color counting with appropriate caveats.

- [Graph] Step plot of the tree-level $R(\sqrt s)$ with $N_c=3$ and $N_c=1$ for $\sqrt s\in[1,15]$ GeV, steps at $2m_c\approx3$ GeV and $2m_b\approx10$ GeV, optionally multiplied by $1+\alpha_s/\pi$ with $\alpha_s\approx0.2$.
- [Structure] In (b), MARK I was a detector at the SPEAR ring rather than a separate facility; write "MARK I at SPEAR" to avoid suggesting four independent colliders.

### N2687

Note: [[08.16.11 Crossing symmetry|08.16.11 Crossing symmetry]]  
Priority: low · Graph: no · Manim: no

Correct crossing map and sign treatment, but the exercise callout and the solution use different photon assignments.

- [Structure] The exercise callout proposes $k\to-k_1$, $k'\to k_2$, while the solution uses $k\to-k_2$, $k'\to k_1$; both are valid, but use one assignment in both places.
- [Example] Add a small momentum-map table (Compton label, crossed annihilation label, in/out status) before the invariant mapping; this makes $s_C\to u_A$, $u_C\to t_A$, $t_C\to s_A$ immediate.

### N2688

Note: [[08.16.12 Schwinger result for (g − 2) - 2|08.16.12 Schwinger result for (g − 2) - 2]]  
Priority: low · Graph: yes · Manim: no

Correct Feynman-parameter setup and evaluation of $F_2(0)=\alpha/2\pi$; the numerator reduction is deferred to the textbook.

- [Correctness] Symbol clash: $\mu$ is both the Lorentz index of $\Lambda^\mu$, $\gamma^\mu$ and the dimensional-regularization scale in $\mu^{2\epsilon}$ in the same equation; rename the scale (e.g. $\tilde\mu$) or the vertex index.
- [Simplify] Use one name for the coupling: the exercise uses $\alpha_{\rm em}$ and the solution $\alpha$; the table lists both as two names for the same parameter.
- [Graph] Plot $F_2(q^2)/F_2(0)$ from the given parameter integral for spacelike $-q^2/m_e^2\in[0,20]$, showing that the anomalous moment is a low-momentum property that falls off at large transfer.
- [Example] Add the gamma-matrix reduction at least in outline (Gordon identity turning $(p+p')^\mu$ terms into $\gamma^\mu$ and $i\sigma^{\mu\nu}q_\nu/2m$), since the coefficient $2m^2z(1-z)$ is the crux of the exercise.
