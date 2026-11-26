---
title: "Note Improvement Tracker – 02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/11 Functional Integrals"
---

> [!TLDR]
> This note tracks the review of the 42 notes in `02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/11 Functional Integrals`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 6 possible errors or notation conflicts. 6 of them are verified (6 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2775|N2775]] 11.02.02 The Free Scalar Field and Gaussian Functional Integrals: Boxed (11.9) reads $Z_0[J]=Z_0[0]\exp[-\tfrac12\int J\Delta_FJ]$; with weight $e^{iS}$ it must be $Z_0[0]\exp[-\tfrac{i}{2}\int J\Delta_FJ]$. Put the correct form in the box and delete the correcting callout. **Fixed:** Box now has −(i/2)∫JΔ_FJ with an e^{iS} lead-in; deleted the correcting callout
- [[#N2787|N2787]] 11.05.04 Fermionic Functional Integral: The displayed correlator uses $\delta^2Z_0/\delta\bar\eta_\alpha(x)\delta\bar\eta_\beta(y)$, which vanishes at zero source; replace it with $\frac{1}{i^2}\frac{1}{Z_0}\frac{\delta}{\delta\eta_\beta(y)}\frac{\delta Z_0}{\delta\bar\eta_\alpha(x)}\big|_0=iS_{F,\alpha\beta}(x-y)$ (left derivatives) and delete the "source prints" display and its correcting callout. **Fixed:** 0 = iS_F with left derivatives (sign checked); deleted the "source prints" display and its callout
- [[#N2794|N2794]] 11.07.01 Derivation for the Scalar Field: Symbol clash: $\signal{\epsilon}(x)$ is the field shift, while the closing callout uses $\epsilon$ for the $i\epsilon$ prescription; rename the shift (for example $\delta\signal{\phi}(x)$). **Fixed:** Renamed the shift to δφ(x) in the text and the table
- [[#N2796|N2796]] 11.08.01 Global Symmetry and the Noether Current: The displayed $\delta S=\epsilon\int\mathrm{d}^4x\,\partial_\mu j_N^\mu$ (constant $\epsilon$) is inconsistent with (11.33); write the local form $\delta S=-\int\mathrm{d}^4x\,\epsilon(x)\,\partial_\mu j_N^\mu$, derive (11.33) from $0=\langle\delta O\rangle+i\langle\delta S\,O\rangle$ in the main text, and delete the correcting callout. **Fixed:** Main text now uses δS=−∫ε(x)∂j and derives (11.33) from 0=⟨δO⟩+i⟨δS O⟩ (sign checked); deleted the correcting callout paragraph and kept the time-ordering/anomaly paragraph
- [[#N2797|N2797]] 11.08.02 The Ward–Takahashi Identity for QED: (11.34) as displayed, with an unamputated photon field contracted with $k^\mu$, is not the identity (it misses the longitudinal $\xi/k^2$ propagator factor); state it for the amputated photon leg with full electron propagators, $k_\mu\mathcal{M}^\mu(k;p,p+k)=-e[S_F(p+k)-S_F(p)]$ with an explicit factor-of-$i$ convention, and drop the correcting callout. **Fixed:** Restated for the photon-amputated function M^μ=e S_F(p+k)Γ^μS_F(p), full propagator iS_F, amputated correlator iM^μ: k_μM^μ=−e[S_F(p+k)−S_F(p)] (consistent with 11.35); dropped the callout paragraph; added M^μ to the table
- [[#N2804|N2804]] 11.10.05 One-loop effective potential in quartic theory: "Here $\mathcal V$ denotes the spacetime volume" refers to a symbol that appears in no equation (the volume factor in $\ln\det=\mathcal V\int d^dk\ldots$ is never written), yet $\mathcal V$ is also listed in the table; either insert the relation $\Gamma^{(1)}=-\mathcal V\,V^{(1)}_{\mathrm{eff}}$ with the determinant, or delete the sentence and the table row. **Fixed:** Deleted the sentence and the table row

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2768 | [[11.01 The Path Integral in Quantum Mechanics\|11.01 The Path Integral in Quantum Mechanics]] | Analyzed | low | no | no | [[#N2768\|View]] |
| N2769 | [[11.01.01 Sum over Histories\|11.01.01 Sum over Histories]] | Analyzed | medium | yes | yes | [[#N2769\|View]] |
| N2770 | [[11.01.02 Derivation from Quantum Mechanics\|11.01.02 Derivation from Quantum Mechanics]] | Analyzed | medium | no | yes | [[#N2770\|View]] |
| N2771 | [[11.01.03 The Free Particle\|11.01.03 The Free Particle]] | Analyzed | low | yes | no | [[#N2771\|View]] |
| N2772 | [[11.01.04 Harmonic Oscillator\|11.01.04 Harmonic Oscillator]] | Analyzed | medium | yes | no | [[#N2772\|View]] |
| N2773 | [[11.02 Functional Integrals for the Scalar Field\|11.02 Functional Integrals for the Scalar Field]] | Analyzed | low | no | no | [[#N2773\|View]] |
| N2774 | [[11.02.01 Generating Functional Z[J]\|11.02.01 Generating Functional Z[J]]] | Analyzed | medium | no | no | [[#N2774\|View]] |
| N2775 | [[11.02.02 The Free Scalar Field and Gaussian Functional Integrals\|11.02.02 The Free Scalar Field and Gaussian Functional Integrals]] | Analyzed | high | yes | no | [[#N2775\|View]] |
| N2776 | [[11.02.03 Functional Determinants and Zeta Regularization\|11.02.03 Functional Determinants and Zeta Regularization]] | Analyzed | medium | no | no | [[#N2776\|View]] |
| N2777 | [[11.03 Connected Green's Functions and W[J]\|11.03 Connected Green's Functions and W[J]]] | Analyzed | low | no | no | [[#N2777\|View]] |
| N2778 | [[11.04 The Effective Action Γ[φ_cl]\|11.04 The Effective Action Γ[φ_cl]]] | Analyzed | low | no | no | [[#N2778\|View]] |
| N2779 | [[11.04.01 Legendre Transform of W[J]\|11.04.01 Legendre Transform of W[J]]] | Analyzed | medium | yes | no | [[#N2779\|View]] |
| N2780 | [[11.04.02 Proper Vertex Functions\|11.04.02 Proper Vertex Functions]] | Analyzed | low | no | no | [[#N2780\|View]] |
| N2781 | [[11.04.03 Effective Potential\|11.04.03 Effective Potential]] | Analyzed | medium | yes | no | [[#N2781\|View]] |
| N2782 | [[11.04.04 Loop Expansion and Counting Powers of ℏ\|11.04.04 Loop Expansion and Counting Powers of ℏ]] | Analyzed | low | no | no | [[#N2782\|View]] |
| N2783 | [[11.05 Functional Integrals for Fermions\|11.05 Functional Integrals for Fermions]] | Analyzed | low | no | no | [[#N2783\|View]] |
| N2784 | [[11.05.01 Grassmann Variables\|11.05.01 Grassmann Variables]] | Analyzed | low | no | no | [[#N2784\|View]] |
| N2785 | [[11.05.02 Berezin Integral\|11.05.02 Berezin Integral]] | Analyzed | low | no | no | [[#N2785\|View]] |
| N2786 | [[11.05.03 Gaussian Integrals over Grassmann Variables\|11.05.03 Gaussian Integrals over Grassmann Variables]] | Analyzed | low | no | no | [[#N2786\|View]] |
| N2787 | [[11.05.04 Fermionic Functional Integral\|11.05.04 Fermionic Functional Integral]] | Analyzed | medium | no | no | [[#N2787\|View]] |
| N2788 | [[11.06 Functional Integrals for Gauge Fields\|11.06 Functional Integrals for Gauge Fields]] | Analyzed | low | no | no | [[#N2788\|View]] |
| N2789 | [[11.06.01 Gauge Redundancy\|11.06.01 Gauge Redundancy]] | Analyzed | low | yes | no | [[#N2789\|View]] |
| N2790 | [[11.06.02 The Faddeev–Popov Procedure\|11.06.02 The Faddeev–Popov Procedure]] | Analyzed | medium | no | yes | [[#N2790\|View]] |
| N2791 | [[11.06.03 Ghost Fields\|11.06.03 Ghost Fields]] | Analyzed | medium | no | no | [[#N2791\|View]] |
| N2792 | [[11.06.04 QED - The Complete Functional Integral\|11.06.04 QED - The Complete Functional Integral]] | Analyzed | low | no | no | [[#N2792\|View]] |
| N2793 | [[11.07 Schwinger–Dyson Equations from the Functional Integral\|11.07 Schwinger–Dyson Equations from the Functional Integral]] | Analyzed | low | no | no | [[#N2793\|View]] |
| N2794 | [[11.07.01 Derivation for the Scalar Field\|11.07.01 Derivation for the Scalar Field]] | Analyzed | medium | no | no | [[#N2794\|View]] |
| N2795 | [[11.08 Ward Identities from the Functional Integral\|11.08 Ward Identities from the Functional Integral]] | Analyzed | low | no | no | [[#N2795\|View]] |
| N2796 | [[11.08.01 Global Symmetry and the Noether Current\|11.08.01 Global Symmetry and the Noether Current]] | Analyzed | medium | no | no | [[#N2796\|View]] |
| N2797 | [[11.08.02 The Ward–Takahashi Identity for QED\|11.08.02 The Ward–Takahashi Identity for QED]] | Analyzed | medium | no | no | [[#N2797\|View]] |
| N2798 | [[11.09 Conclusions and Outlook\|11.09 Conclusions and Outlook]] | Analyzed | low | no | no | [[#N2798\|View]] |
| N2799 | [[11.10 Exercises\|11.10 Exercises/11.10 Exercises]] | Analyzed | low | no | no | [[#N2799\|View]] |
| N2800 | [[11.10.01 Harmonic oscillator at finite temperature\|11.10 Exercises/11.10.01 Harmonic oscillator at finite temperature]] | Analyzed | low | yes | no | [[#N2800\|View]] |
| N2801 | [[11.10.02 Free-theory four-point function\|11.10 Exercises/11.10.02 Free-theory four-point function]] | Analyzed | low | no | no | [[#N2801\|View]] |
| N2802 | [[11.10.03 Fermionic and bosonic determinants\|11.10 Exercises/11.10.03 Fermionic and bosonic determinants]] | Analyzed | medium | no | no | [[#N2802\|View]] |
| N2803 | [[11.10.04 Grassmann Gaussian integral\|11.10 Exercises/11.10.04 Grassmann Gaussian integral]] | Analyzed | low | no | no | [[#N2803\|View]] |
| N2804 | [[11.10.05 One-loop effective potential in quartic theory\|11.10 Exercises/11.10.05 One-loop effective potential in quartic theory]] | Analyzed | medium | yes | no | [[#N2804\|View]] |
| N2805 | [[11.10.06 Faddeev–Popov determinant in Coulomb gauge\|11.10 Exercises/11.10.06 Faddeev–Popov determinant in Coulomb gauge]] | Analyzed | low | no | no | [[#N2805\|View]] |
| N2806 | [[11.10.07 Schwinger–Dyson equation for the photon propagator\|11.10 Exercises/11.10.07 Schwinger–Dyson equation for the photon propagator]] | Analyzed | medium | no | no | [[#N2806\|View]] |
| N2807 | [[11.10.08 Effective-action Hessian and exact propagator\|11.10 Exercises/11.10.08 Effective-action Hessian and exact propagator]] | Analyzed | low | no | no | [[#N2807\|View]] |
| N2808 | [[11.10.09 Unphysical photon modes in electron–positron annihilation\|11.10 Exercises/11.10.09 Unphysical photon modes in electron–positron annihilation]] | Analyzed | low | yes | no | [[#N2808\|View]] |
| N2809 | [[11.10.10 Translation Ward identity in quartic theory\|11.10 Exercises/11.10.10 Translation Ward identity in quartic theory]] | Analyzed | medium | no | no | [[#N2809\|View]] |

## Suggestions

### N2768

Note: [[11.01 The Path Integral in Quantum Mechanics|11.01 The Path Integral in Quantum Mechanics]]  
Priority: low · Graph: no · Manim: no

Clear chapter hub with good motivation and a correct reading order through the four particle notes.

- [Links] Optionally replace "full to connected and proper functions" with explicit links to \[\[11.03 Connected Green's Functions and W[J\]\]] and \[\[11.04 The Effective Action Γ[φ_cl\]\]]; otherwise no change needed.

### N2769

Note: [[11.01.01 Sum over Histories|11.01.01 Sum over Histories]]  
Priority: medium · Graph: yes · Manim: yes

Correct and carefully qualified, but the stationary-phase idea stays abstract and the "The source describes..." transcription scaffolding distracts.

- [Simplify] Replace "The source describes the particle as taking all paths at once" with a direct statement and merge it with the following note callout, which repeats the same caveat.
- [Example] Add a two-path toy: two paths with action difference $\Delta S$ give $|e^{iS_1}+e^{iS_2}|^2=2+2\cos\Delta S$, which shows interference and why squaring each path first loses it.
- [Graph] Plot $\cos S(a)$ against $a\in[-3,3]$ for the free-particle family $q(t)=q_{\mathrm{cl}}(t)+a\sin(\pi t/T)$, where $S(a)=S_{\mathrm{cl}}+m\pi^2a^2/(4T)$, for $m/T=1,5,20$, to show the phase becoming stationary only near $a=0$ as the action scale grows.
- [Manim] Animate a fan of paths between fixed endpoints, each path adding its unit phasor $e^{iS}$ tip-to-tail; paths near the classical one add coherently while distant ones curl up and cancel.

### N2770

Note: [[11.01.02 Derivation from Quantum Mechanics|11.01.02 Derivation from Quantum Mechanics]]  
Priority: medium · Graph: no · Manim: yes

The time-slicing derivation is correct and complete, including the normalization count, but forward references without links and dense prose make the flow harder to follow than necessary.

- [Links] "use the small-time approximation from the previous page" and "must reduce to (11.4)" point to other notes without links; link \[\[11.01.01 Sum over Histories\]\] and \[\[11.01.03 The Free Particle\]\].
- [Simplify] Move the paragraph on operator ordering (left-endpoint potential) next to Remark 11.1 and shorten it; it currently sits between the remark and the reconstruction check.
- [Example] Add the explicit $N=2$ case: one intermediate integral of two free slice kernels, done by completing the square, gives (11.4) with $2\epsilon$; this makes the "reconstruction check" concrete.
- [Manim] Animate the time slicing: a jagged polygon path through $N$ slices whose vertices are integrated over, with $N$ doubling from 2 to 32 and the polygons densifying toward continuous paths.

### N2771

Note: [[11.01.03 The Free Particle|11.01.03 The Free Particle]]  
Priority: low · Graph: yes · Manim: no

Correct, well-checked exact Gaussian example; the fluctuation factor is fixed by comparison rather than computed, which is acceptable but could be motivated.

- [Simplify] State in one line why comparison can fix the fluctuation factor: it is independent of $q_i,q_f$, so the delta-function limit fixes it (or point to the $N$-slice product in \[\[11.01.02 Derivation from Quantum Mechanics\]\]).
- [Graph] Plot $\mathrm{Re}\,K_0(q_f,T;0,0)$ against $q_f\in[-5,5]$ for $m=1$ and $T=0.2,1,3$, to show the chirped oscillations and the $T^{-1/2}$ decrease of the prefactor.
- [Intuition] Add one sentence that the classical action $m(q_f-q_i)^2/(2T)$ is kinetic energy times time for the straight path, so the phase grows with distance squared and causes the chirp.

### N2772

Note: [[11.01.04 Harmonic Oscillator|11.01.04 Harmonic Oscillator]]  
Priority: medium · Graph: yes · Manim: no

The classical path, action, product identity, and kernel are correct, but the determinant-ratio step is only described and the Euclidean example has notation slips.

- [Simplify] Show the determinant ratio explicitly: $\det(-\partial_t^2-\omega^2)/\det(-\partial_t^2)=\prod_n(1-\omega^2T^2/n^2\pi^2)=\sin\omega T/(\omega T)$, then multiply the free prefactor $\sqrt{m/(2\pi iT)}$ by its inverse square root to get (11.5).
- [Structure] In Example 11.2 the measure is written $\mathcal{D}q_E$ while the action uses $S_E[q]$ and $\dot q$; use one symbol. Also replace "The source calls this result exact" by a direct statement.
- [Graph] Plot $|\sin\omega T|^{-1/2}$ against $\omega T\in[0,4\pi]$, with the free curve $(\omega T)^{-1/2}$ for comparison, and mark the caustics at $\omega T=n\pi$ where the phase jumps by $-\pi/2$.
- [Graph] Plot the partial products $\prod_{n=1}^{N}(1-x^2/n^2\pi^2)$ for $N=1,3,10$ against $\sin x/x$ for $x\in[0,10]$ to make the infinite-product identity tangible.
- [Links] The zero-frequency check refers to (11.4); link \[\[11.01.03 The Free Particle\]\] there.

### N2773

Note: [[11.02 Functional Integrals for the Scalar Field|11.02 Functional Integrals for the Scalar Field]]  
Priority: low · Graph: no · Manim: no

Concise hub that correctly sets the lattice-regularized view and the Feynman-prescription convention.

- [Links] "The source functional in the next article" should link \[\[11.02.01 Generating Functional Z[J\]\]] explicitly.

### N2774

Note: [[11.02.01 Generating Functional Z[J]|11.02.01 Generating Functional Z[J]]]  
Priority: medium · Graph: no · Manim: no

Definitions and factors of $i$ are correct, but the expansion is first written for the unnormalized functional and then corrected in a callout, which is avoidable friction.

- [Simplify] Write the functional expansion directly for $Z[J]/Z[0]$ and delete the correcting callout; also drop the "The source writes" phrasing.
- [Intuition] Add a zero-dimensional analogue: $Z(J)=\int\mathrm{d}x\,e^{-x^2/2+Jx}$ with $\langle x^n\rangle=\partial_J^nZ/Z|_{J=0}$, so the reader sees source differentiation before the functional version.
- [Structure] Move Remark 11.3 on the $i\epsilon$ prescription before (11.7), since (11.7) already presupposes vacuum boundary conditions.

### N2775

Note: [[11.02.02 The Free Scalar Field and Gaussian Functional Integrals|11.02.02 The Free Scalar Field and Gaussian Functional Integrals]]  
Priority: high · Graph: yes · Manim: no

The derivation is correct up to the boxed result, but the box itself is wrong and the reader must follow several "the source writes/calls" corrections to reach the right propagator.

- [Correctness] Boxed (11.9) reads $Z_0[J]=Z_0[0]\exp[-\tfrac12\int J\Delta_FJ]$; with weight $e^{iS}$ it must be $Z_0[0]\exp[-\tfrac{i}{2}\int J\Delta_FJ]$. Put the correct form in the box and delete the correcting callout.
- [Simplify] Rewrite Example 11.4 as one clean computation (first derivative, second derivative, factor $1/i^2$, result $i\Delta_F$) and remove the "source calls" and "next line of the source" passages and the callout that reconciles them.
- [Simplify] The source-term display drops the $-i\epsilon$ that the line above kept; keep it consistently or state once that it is implicit from here on.
- [Graph] Plot the Euclidean free propagator $\Delta_E(r)=mK_1(mr)/(4\pi^2r)$ against $r\in[0.1,5]/m$ together with the massless $1/(4\pi^2r^2)$ on a log scale, to show short-distance agreement and exponential decay beyond the Compton length.
- [Example] For Wick's theorem, write the four-point result explicitly: $\langle\phi_1\phi_2\phi_3\phi_4\rangle=(i\Delta_{12})(i\Delta_{34})+(i\Delta_{13})(i\Delta_{24})+(i\Delta_{14})(i\Delta_{23})$.

### N2776

Note: [[11.02.03 Functional Determinants and Zeta Regularization|11.02.03 Functional Determinants and Zeta Regularization]]  
Priority: medium · Graph: no · Manim: no

Correct definitions with good caveats, but the note has no worked example and its physical-quantity table omits most symbols used.

- [Example] Add the 1D example that links to the oscillator: on a circle of circumference $\beta$, zeta regularization gives $\det(-\partial_\tau^2+\omega^2)=4\sinh^2(\beta\omega/2)$, which reproduces $Z=1/(2\sinh(\beta\omega/2))$ and checks against \[\[11.01.04 Harmonic Oscillator\]\].
- [Simplify] Use the Euclidean operator $-\partial_E^2+m^2$ in the main text instead of the Minkowski "$-\square-m^2$ on a four-dimensional torus", so the note does not first state and then retract that the spectrum is suitable.
- [Structure] The table lists only $m$; add $\mathcal{O}$, $\lambda_n$, $\zeta_{\mathcal{O}}$, $s$, and the heat-kernel parameter $t$ (with unit $\mathrm{MeV^{-2}}$, not a time).

### N2777

Note: [[11.03 Connected Green's Functions and W[J]|11.03 Connected Green's Functions and W[J]]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the factors of $i$ in $W=-i\ln Z$, the expansion, and the free example are consistent.

- [Example] Add the lowest interacting example: in $\phi^4$ theory the tree-level connected four-point function is $-i\lambda\int\mathrm{d}^4z\prod_{k=1}^{4}i\Delta_F(x_k-z)$, showing that interactions make $G_c^{(4)}\neq0$.
- [Intuition] State the zero-dimensional cumulant analogy explicitly: $\ln\langle e^{Jx}\rangle=J\langle x\rangle+\tfrac{J^2}{2}(\langle x^2\rangle-\langle x\rangle^2)+\dots$.
- [Simplify] Merge the one-sentence "Connected propagator" lead-in with the following paragraph; it says the same thing twice.

### N2778

Note: [[11.04 The Effective Action Γ[φ_cl]|11.04 The Effective Action Γ[φ_cl]]]  
Priority: low · Graph: no · Manim: no

Good hub that states the purpose of the Legendre transform and links all subnotes except the first.

- [Links] Add an explicit link to \[\[11.04.01 Legendre Transform of W[J\]\]] at the start, as the other hubs do.

### N2779

Note: [[11.04.01 Legendre Transform of W[J]|11.04.01 Legendre Transform of W[J]]]  
Priority: medium · Graph: yes · Manim: no

The Legendre transform and the free check are correct, but the source misstatement is kept and corrected in a callout, and intuition for the transform is missing.

- [Simplify] Replace the callout "The source says that the field ... extremizes the effective action itself" with one main-text sentence: with a source, $\Gamma+\int J\phi_{\mathrm{cl}}$ is stationary; without one, $\Gamma$ is.
- [Intuition] Add the thermodynamic analogy: as $G(T,p)$ is the Legendre transform of $F(T,V)$ that exchanges volume for pressure, $\Gamma$ exchanges the control variable $J$ for the response $\phi_{\mathrm{cl}}$.
- [Example] Write the free check as equations: $\phi_{\mathrm{cl}}=-\Delta_FJ$, $J=(\square+m^2)\phi_{\mathrm{cl}}$, $\Gamma_0=-\tfrac12\int\phi_{\mathrm{cl}}(\square+m^2)\phi_{\mathrm{cl}}=S_0$.
- [Graph] Zero-dimensional toy: for $e^{W(J)}=\int\mathrm{d}x\,e^{-x^2/2-gx^4/24+Jx}$ with $g=1$, plot numerically $W(J)$ for $J\in[-3,3]$ and its Legendre transform $\Gamma(\varphi)$, with the classical $-\varphi^2/2-g\varphi^4/24$ overlaid.

### N2780

Note: [[11.04.02 Proper Vertex Functions|11.04.02 Proper Vertex Functions]]  
Priority: low · Graph: no · Manim: no

Correct signs and factors of $i$ in (11.14), (11.15), and the inverse relation, with a useful explicit tree-level check.

- [Example] Add the geometric-series view $G_c=G_0+G_0(-i\Sigma)G_0+\dots=i/(p^2-m^2-\Sigma)$ and link the diagrammatic form in \[\[11.07.01 Derivation for the Scalar Field\]\].
- [Intuition] Give a one-line picture of 1PI: a diagram that falls into two pieces when one internal line is cut is reducible; a chain of self-energy bubbles is the standard example.

### N2781

Note: [[11.04.03 Effective Potential|11.04.03 Effective Potential]]  
Priority: medium · Graph: yes · Manim: no

The Coleman–Weinberg result and its checks are correct, but the step from the Gaussian determinant to (11.16) is skipped and one symbol is uncolored.

- [Simplify] Show the intermediate step: in dimensional regularization $\tfrac12\int\frac{\mathrm{d}^dk_E}{(2\pi)^d}\ln(k_E^2+M^2)=-\frac{M^4}{64\pi^2}\big(\tfrac{2}{\bar\epsilon}+\tfrac32-\ln\tfrac{M^2}{\mu^2}\big)$, and $\overline{\mathrm{MS}}$ removes the pole, giving (11.16) with $M^2=m^2+\lambda\phi_{\mathrm{cl}}^2/2$.
- [Structure] The one-loop integrand uses an uncolored $V''$ for the tree potential; write the second derivative of $\energy{V}^{(0)}$ consistently with the table.
- [Graph] Plot $V^{(0)}$ and $V^{(0)}+V^{(1)}_{\mathrm{eff}}$ against $\phi_{\mathrm{cl}}\in[-4,4]$ for $m=\mu=1$ and $\lambda=1$ and $3$, to show the size of the one-loop shift and that it stays even in the field.
- [Intuition] Add one sentence that $V''$ is the field-dependent mass squared of the fluctuations, so the one-loop term is their zero-point energy $\tfrac12\sum\omega_k$ per volume.

### N2782

Note: [[11.04.04 Loop Expansion and Counting Powers of ℏ|11.04.04 Loop Expansion and Counting Powers of ℏ]]  
Priority: low · Graph: no · Manim: no

Correct power counting, including the $I-V=L-1$ graph argument; the main expansion leaves the linear term to a callout.

- [Simplify] Expand the source-coupled exponent $(S+\int J\phi)/\hbar$ in the main text, so the linear term cancels by the definition of the saddle and the callout can be removed.
- [Example] Apply $L=I-V+1$ to two concrete $\phi^4$ self-energy graphs (the tadpole with $I=1,V=1$ and the sunset with $I=3,V=2$) to show the powers $\hbar^1$ and $\hbar^2$.

### N2783

Note: [[11.05 Functional Integrals for Fermions|11.05 Functional Integrals for Fermions]]  
Priority: low · Graph: no · Manim: no

Clear hub with a useful two-step sign check and a correct reading order.

- [Structure] No change needed.

### N2784

Note: [[11.05.01 Grassmann Variables|11.05.01 Grassmann Variables]]  
Priority: low · Graph: no · Manim: no

Short, correct introduction to Grassmann algebra with a good truncation example.

- [Example] Add one line with three generators showing $(\theta_1\theta_2)^2=0$ but $\theta_1\theta_2\neq0$, and that $\theta_1\theta_2$ commutes with $\theta_3$, to make "even bilinears commute" concrete.

### N2785

Note: [[11.05.02 Berezin Integral|11.05.02 Berezin Integral]]  
Priority: low · Graph: no · Manim: no

Correct rules, orientation signs, and change-of-variables result, explained with a clear one-variable check.

- [Structure] The translation-invariance paragraph appears before the rules (11.18) it justifies; move it after (11.18).

### N2786

Note: [[11.05.03 Gaussian Integrals over Grassmann Variables|11.05.03 Gaussian Integrals over Grassmann Variables]]  
Priority: low · Graph: no · Manim: no

The one-pair, determinant, and source formulas are correct and the shift argument checks out; the two-pair case is described rather than shown.

- [Example] Write the two-pair expansion explicitly: the quadratic term $\tfrac12(\bar\theta M\theta)^2$ and the Berezin integration that gives $M_{11}M_{22}-M_{12}M_{21}$.
- [Structure] Add $\mathcal{O}$ to the physical-quantity table, since Example 11.6 uses it.

### N2787

Note: [[11.05.04 Fermionic Functional Integral|11.05.04 Fermionic Functional Integral]]  
Priority: medium · Graph: no · Manim: no

(11.21)–(11.23) are correct, but the note displays a wrong two-point formula from the source before correcting it, which is confusing.

- [Correctness] The displayed correlator uses $\delta^2Z_0/\delta\bar\eta_\alpha(x)\delta\bar\eta_\beta(y)$, which vanishes at zero source; replace it with $\frac{1}{i^2}\frac{1}{Z_0}\frac{\delta}{\delta\eta_\beta(y)}\frac{\delta Z_0}{\delta\bar\eta_\alpha(x)}\big|_0=iS_{F,\alpha\beta}(x-y)$ (left derivatives) and delete the "source prints" display and its correcting callout.
- [Example] Show the completing-the-square shift $\psi\to\psi-S_F\eta$, $\bar\psi\to\bar\psi-\bar\eta S_F$ in one display so (11.22) is derived, not only stated.
- [Intuition] For the fermion-loop sign, show the one-line contraction in which reordering $\bar\psi_a\psi_a\bar\psi_b\psi_b$ into two propagators gives $-\mathrm{tr}(S_{ab}S_{ba})$.

### N2788

Note: [[11.06 Functional Integrals for Gauge Fields|11.06 Functional Integrals for Gauge Fields]]  
Priority: low · Graph: no · Manim: no

Good hub that states the gauge-redundancy problem and the physical-amplitude test clearly.

- [Links] "Exercise 11.9" is unlinked; link \[\[11.10.09 Unphysical photon modes in electron–positron annihilation\]\].

### N2789

Note: [[11.06.01 Gauge Redundancy|11.06.01 Gauge Redundancy]]  
Priority: low · Graph: yes · Manim: no

Correct and clear statement of gauge invariance and of the zero modes of the Maxwell operator.

- [Graph] Toy model: plot the integrand $e^{-(x-y)^2}$ over $x,y\in[-4,4]$ as a 3D surface; it is constant along the orbits $x-y=\text{const}$, so the integral diverges with the orbit length, the finite-dimensional picture of $\operatorname{Vol}(\mathcal{G})$.
- [Example] Show the momentum-space zero mode in one line: $(-k^2g^{\mu\nu}+k^\mu k^\nu)k_\nu=0$.

### N2790

Note: [[11.06.02 The Faddeev–Popov Procedure|11.06.02 The Faddeev–Popov Procedure]]  
Priority: medium · Graph: no · Manim: yes

The identity, the Lorenz-gauge determinant, the gauge averaging, and the $\xi$ propagator are correct, but the idea lacks a finite-dimensional motivation and the notation is mixed.

- [Example] Start with the finite-dimensional identity $1=|g'(x_0)|\int\mathrm{d}x\,\delta(g(x))$ applied to the toy integral $\int\mathrm{d}x\,\mathrm{d}y\,e^{-(x-y)^2}$ with slice $y=0$, to show how the orbit volume factors out.
- [Structure] The gauge condition and determinant use plain $A$ ($G(A)$, $\Delta_{\mathrm{FP}}[A]$) while the rest uses $\electric{A}_\mu$, and $\omega$, $G$, $\Delta_{\mathrm{FP}}$, $\mathcal{O}^{\mu\nu}$ are missing from the table; make both consistent.
- [Simplify] Show the inversion of $\mathcal{O}^{\mu\nu}$ in momentum space with transverse and longitudinal projectors to get (11.27) instead of stating it.
- [Manim] Animate gauge orbits as curves in a 2D field-space sketch, a slice $G=0$ that cuts each orbit once, and then the Gaussian average over $\omega$ that smears the sharp slice into a band.

### N2791

Note: [[11.06.03 Ghost Fields|11.06.03 Ghost Fields]]  
Priority: medium · Graph: no · Manim: no

The ghost representation and the QCD ghost Lagrangian (11.29) are correct, but the QED and QCD operator sign conventions differ and some source scaffolding remains.

- [Structure] QED uses $\mathcal{M}=\square$ while QCD uses $\mathcal{M}=-\partial^\mu D_\mu$, which reduces to $-\square$ at $g=0$; use one convention (or note the irrelevant constant sign) so the Abelian limit matches.
- [Simplify] Replace "The source calls them ghosts" and "The source describes the cancellation..." with direct statements, and merge the figure callout into the caption.
- [Structure] The table lists $\mechanical{q}$ as a vertex momentum but neither the text nor the caption uses it; keep only symbols that appear in the note or its figure.
- [Intuition] Add one sentence on why ghosts matter in loops: the ghost loop in the gluon self-energy cancels the contribution of unphysical gluon polarizations.

### N2792

Note: [[11.06.04 QED - The Complete Functional Integral|11.06.04 QED - The Complete Functional Integral]]  
Priority: low · Graph: no · Manim: no

Correct gauge-fixed QED functional and vertex sign, with a clear statement of what the functional does and does not yet give.

- [Example] List the three rules of Fig. 11.4 as formulas in the text ($-ig_{\mu\nu}/(k^2+i\epsilon)$, $i(\not p+m)/(p^2-m^2+i\epsilon)$, $-ie\gamma^\mu$) so they are readable and searchable without the image.

### N2793

Note: [[11.07 Schwinger–Dyson Equations from the Functional Integral|11.07 Schwinger–Dyson Equations from the Functional Integral]]  
Priority: low · Graph: no · Manim: no

Clear hub that states the assumptions and the non-closure of the hierarchy.

- [Structure] No change needed.

### N2794

Note: [[11.07.01 Derivation for the Scalar Field|11.07.01 Derivation for the Scalar Field]]  
Priority: medium · Graph: no · Manim: no

The derivation of (11.31)–(11.32) and the Dyson resummation are correct, but one symbol is used for two quantities and an elementary toy would make the hierarchy intuitive.

- [Correctness] Symbol clash: $\signal{\epsilon}(x)$ is the field shift, while the closing callout uses $\epsilon$ for the $i\epsilon$ prescription; rename the shift (for example $\delta\signal{\phi}(x)$).
- [Example] Add the zero-dimensional SD identity: from $\int\mathrm{d}x\,\partial_x e^{-x^2/2-\lambda x^4/24}=0$ follows $\langle x^2\rangle+\tfrac{\lambda}{6}\langle x^4\rangle=1$, the exact analogue of (11.32).
- [Simplify] Show the step from differentiating (11.31) with respect to $J(y)$ to (11.32): the factors $(1/i)\cdot i^2$ and $(1/i)^3\cdot i^4$, then division by $-i$.
- [Structure] Fix the grammar "can sum infinitely many diagrams while still omit" to "while still omitting", and use the same d'Alembertian symbol $\square$ as the other notes instead of $\Box$.

### N2795

Note: [[11.08 Ward Identities from the Functional Integral|11.08 Ward Identities from the Functional Integral]]  
Priority: low · Graph: no · Manim: no

Good hub that separates Ward identities from Schwinger–Dyson equations and states the tree-level check.

- [Structure] No change needed.

### N2796

Note: [[11.08.01 Global Symmetry and the Noether Current|11.08.01 Global Symmetry and the Noether Current]]  
Priority: medium · Graph: no · Manim: no

Identity (11.33) is correct, but the displayed action variation has a form and sign that the note must correct in a long callout.

- [Correctness] The displayed $\delta S=\epsilon\int\mathrm{d}^4x\,\partial_\mu j_N^\mu$ (constant $\epsilon$) is inconsistent with (11.33); write the local form $\delta S=-\int\mathrm{d}^4x\,\epsilon(x)\,\partial_\mu j_N^\mu$, derive (11.33) from $0=\langle\delta O\rangle+i\langle\delta S\,O\rangle$ in the main text, and delete the correcting callout.
- [Example] Add the U(1) complex scalar: $\delta\phi=i\phi$, $\delta\phi^*=-i\phi^*$, $j^\mu=i(\phi^*\partial^\mu\phi-\phi\partial^\mu\phi^*)$ with its sign stated, and the resulting identity for $\langle\partial_\mu j^\mu(x)\phi(x_1)\phi^*(x_2)\rangle$.

### N2797

Note: [[11.08.02 The Ward–Takahashi Identity for QED|11.08.02 The Ward–Takahashi Identity for QED]]  
Priority: medium · Graph: no · Manim: no

(11.35), (11.36), the renormalization consequences, and the one-loop relation are correct, but (11.34) is shown in a form that the note itself says needs amputation, and source commentary dominates.

- [Correctness] (11.34) as displayed, with an unamputated photon field contracted with $k^\mu$, is not the identity (it misses the longitudinal $\xi/k^2$ propagator factor); state it for the amputated photon leg with full electron propagators, $k_\mu\mathcal{M}^\mu(k;p,p+k)=-e[S_F(p+k)-S_F(p)]$ with an explicit factor-of-$i$ convention, and drop the correcting callout.
- [Simplify] Remove the paragraph on "the source's preceding sentence" about charge renormalization; the main text already states $Z_1=Z_2$ and $e_0=Z_3^{-1/2}e$.
- [Structure] Rename "Example 11.7: Explicit one-loop check", because it derives the constraint $k_\mu\delta\Gamma^\mu=\Sigma(p)-\Sigma(p+k)$ without evaluating loops; also color $\xi$ as $\signal{\xi}$ like the other gauge notes.
- [Intuition] Add one sentence on why $Z_1=Z_2$ matters physically: charge renormalization is universal, so electrons and muons with equal bare charge keep equal renormalized charge.

### N2798

Note: [[11.09 Conclusions and Outlook|11.09 Conclusions and Outlook]]  
Priority: low · Graph: no · Manim: no

Accurate summary of the chapter's tools and checks.

- [Links] Link each bullet to its section note (for example \[\[11.03 Connected Green's Functions and W[J\]\]] and \[\[11.06.02 The Faddeev–Popov Procedure\]\]) so the summary also works as a navigation page.

### N2799

Note: [[11.10 Exercises|11.10 Exercises]]  
Priority: low · Graph: no · Manim: no

Clear exercise hub with a useful reading order and convention reminder; all ten links resolve.

- [Structure] The "Source solutions" section only repeats that solutions sit in the linked articles; merge its two sentences into the intro or drop the heading.

### N2800

Note: [[11.10.01 Harmonic oscillator at finite temperature|11.10.01 Harmonic oscillator at finite temperature]]  
Priority: low · Graph: yes · Manim: no

Correct and well-checked derivation (zero mode, product formula, both temperature limits), with one self-contradictory sentence about the source.

- [Structure] The sentence "The source now explicitly identifies the $n=0$ contribution as $1/\omega$." directly after the "Zero-mode factor" callout contradicts the callout (which says the source hides it in $\mathcal N'$); delete it or merge it into the callout.
- [Simplify] In the step from $\mathcal N'/\omega\prod 1/(\omega_n^2+\omega^2)$ to $\frac{1}{\beta\omega}\prod(1+\beta^2\omega^2/4\pi^2n^2)^{-1}$, state explicitly that the frequency-independent factor $\prod_{n\ge1}\omega_n^{-2}$ (zeta-regularized $\prod_{n\ge1}(2\pi n/\beta)^2=\beta^2$) together with the measure supplies the $1/\beta$, so the reader sees where $\beta$ comes from.
- [Graph] Plot $Z(\beta\omega)=1/(2\sinh(\beta\omega/2))$ on a log axis for $\beta\omega\in[0.1,10]$ together with the asymptotes $1/(\beta\omega)$ (classical) and $e^{-\beta\omega/2}$ (ground state) to visualize the two limits discussed in the last paragraph.
- [Example] Add a numeric check: truncating the product at $N=1,5,50$ for $\beta\omega=2$ and comparing with $\sinh(1)/1\approx1.1752$ shows how fast the infinite-product identity converges.

### N2801

Note: [[11.10.02 Free-theory four-point function|11.10.02 Free-theory four-point function]]  
Priority: low · Graph: no · Manim: no

Correct and clear; factors of $i$ and the $G^{(2)}=i\Delta_F$ convention are consistent ($i^{-4}(-i\Delta)^2=(i\Delta)^2$).

- [Simplify] The product-rule step jumps from "derivatives above second order vanish" to "all pairings"; show the explicit fourth derivative of $e^f$ at $J=0$, $f_{12}f_{34}+f_{13}f_{24}+f_{14}f_{23}$, as one displayed line.
- [Intuition] Add the finite-dimensional analogue $\langle x^4\rangle=3\langle x^2\rangle^2$ for a one-variable Gaussian before the field calculation; it is mentioned only at the end in the coincident-point remark.

### N2802

Note: [[11.10.03 Fermionic and bosonic determinants|11.10.03 Fermionic and bosonic determinants]]  
Priority: medium · Graph: no · Manim: no

Physically correct Euclidean treatment ($D_E^\dagger D_E=K\mathbf1_4$, ratio $(\det K)^{5/2}$, log coefficient $-4$), but the many source-correction callouts make the main line hard to follow.

- [Structure] Three callouts (exercise note, "Operator convention", final note) all discuss the source's Lorentzian identity and determinant phase; merge them into one callout so the solution reads as a single derivation.
- [Structure] The Physical quantities table omits the operators $K$, $D_{\mathrm E}$ and the Euclidean gamma matrices used throughout; add them (or state that operators are omitted).
- [Example] Make the mode-by-mode paragraph concrete: for one Euclidean momentum mode with $K$-eigenvalue $\lambda=k^2+m^2$, the scalar contributes $\lambda^{-1/2}$ and the Dirac block $\det(i\gamma\cdot k+m)=\lambda^2$; display this instead of describing it in words.
- [Intuition] In the Supersymmetry section, give the simplest matched count explicitly (one Dirac fermion versus two complex scalars, i.e. $(\det K)^2(\det K)^{-2}=1$) to show the cancellation rather than only stating that multiplicities differ.

### N2803

Note: [[11.10.04 Grassmann Gaussian integral|11.10.04 Grassmann Gaussian integral]]  
Priority: low · Graph: no · Manim: no

Correct proof with explicit factorial and measure-sign bookkeeping and good small-matrix checks.

- [Example] Write out the $n=2$ check explicitly (expand $(\bar\theta M\theta)^2/2$, show the cross terms and the sign that yields $M_{11}M_{22}-M_{12}M_{21}$) instead of describing it in prose.
- [Structure] Remove the extra blank lines after the "Factorial and measure" callout (three consecutive empty lines before "Small-matrix checks").

### N2804

Note: [[11.10.05 One-loop effective potential in quartic theory|11.10.05 One-loop effective potential in quartic theory]]  
Priority: medium · Graph: yes · Manim: no

The regulated result $-\frac{M^4}{64\pi^2}[1/\varepsilon-\gamma+\ln4\pi-\ln(M^2/\mu^2)+3/2]$ and the boxed $\overline{\mathrm{MS}}$ form check out, but the text has a dangling symbol and skips the key integral.

- [Correctness] "Here $\mathcal V$ denotes the spacetime volume" refers to a symbol that appears in no equation (the volume factor in $\ln\det=\mathcal V\int d^dk\ldots$ is never written), yet $\mathcal V$ is also listed in the table; either insert the relation $\Gamma^{(1)}=-\mathcal V\,V^{(1)}_{\mathrm{eff}}$ with the determinant, or delete the sentence and the table row.
- [Simplify] Show the master formula $\frac12\int\frac{d^dk_E}{(2\pi)^d}\ln(k_E^2+M^2)=-\frac{\Gamma(-d/2)}{2(4\pi)^{d/2}}M^d$ and the expansion $\Gamma(-2+\varepsilon)=\frac12(1/\varepsilon-\gamma+3/2)+\mathcal O(\varepsilon)$; the jump to the regulated result is currently unexplained.
- [Structure] The same symbol $V^{(1)}_{\mathrm{eff}}$ denotes the unrenormalized integral, the regulated expansion and the renormalized boxed result; label the first two (e.g. "bare") to distinguish them from the $\overline{\mathrm{MS}}$ result.
- [Graph] Plot $V_{\mathrm{tree}}+V^{(1)}_{\mathrm{eff}}$ versus $\phi_{\mathrm{cl}}\in[-3,3]\,m$ for $\lambda=0.5,1,2$ with $\mu=m$, alongside the tree potential, to show the size of the one-loop correction and where the logarithm becomes large.
- [Links] Turn the bare equation reference "(11.16)" into a link to \[\[11.04.03 Effective Potential\]\].

### N2805

Note: [[11.10.06 Faddeev–Popov determinant in Coulomb gauge|11.10.06 Faddeev–Popov determinant in Coulomb gauge]]  
Priority: low · Graph: no · Manim: no

Correct and concise; the propagator components match the standard Coulomb-gauge result, but part (c) states rather than derives the inversion.

- [Simplify] In part (c), show the inversion briefly: write the quadratic action in $A_0$ and transverse $\mathbf A_T$, note that $A_0$ appears only through $\frac12(\nabla A_0)^2$ giving $i/|\mathbf k|^2$, while $\mathbf A_T$ gives the projected $i/(k^2+i0)$.
- [Intuition] Add the explicit check that the instantaneous $D^{00}$ term in position space is proportional to $\delta(t)/(4\pi r)$, the Coulomb potential, to justify the name.
- [Structure] The table lacks the gauge function $G$, gauge parameter $\alpha$ and $\Delta_{\mathrm{FP}}$; add them or note they are helper symbols.

### N2806

Note: [[11.10.07 Schwinger–Dyson equation for the photon propagator|11.10.07 Schwinger–Dyson equation for the photon propagator]]  
Priority: medium · Graph: no · Manim: no

The kernel, the sign correction to $-i\delta^\mu_\alpha$ and the dressed propagator check out (transverse and longitudinal parts both invert to $-i$), but the step from the functional identity to the dressed equation is skipped.

- [Simplify] "Absorbing the matter-current insertion into the proper polarization" hides the main step; show the intermediate exact equation containing $\langle T J^\mu_{\mathrm{mat}}A_\alpha\rangle$ in momentum space and then define $\Pi^{\mu\nu}$ through its 1PI part.
- [Example] Add the one-loop result for $\Pi(k^2)$ (for example $\Pi_2(k^2)\propto-\frac{e^2}{2\pi^2}\int_0^1dx\,x(1-x)\ln\frac{m^2-x(1-x)k^2}{\mu^2}$ in $\overline{\mathrm{MS}}$, with the sign matched to the note's convention) as a concrete transverse example.
- [Links] Turn "(11.27)" into a link to \[\[11.06.02 The Faddeev–Popov Procedure\]\].

### N2807

Note: [[11.10.08 Effective-action Hessian and exact propagator|11.10.08 Effective-action Hessian and exact propagator]]  
Priority: low · Graph: no · Manim: no

Correct chain-rule proof with carefully separated factors of $i$ ($W''=i\langle\phi\phi\rangle_c$ checks out), although the repeated convention callouts are heavy.

- [Structure] The two exercise callouts and the "Factors of i" callout repeat the same bookkeeping; replace them with one small table of the three objects ($W''$, $\Gamma''$, proper vertex $i\Gamma''$) and their tree-level values.
- [Intuition] Add one sentence explaining why the chain rule works: $\delta\phi_{\mathrm{cl}}/\delta J=W''$ and $\delta J/\delta\phi_{\mathrm{cl}}=-\Gamma''$ are inverse Jacobians of the same map.
- [Links] Link "relation (11.15)" to \[\[11.04.02 Proper Vertex Functions\]\].

### N2808

Note: [[11.10.09 Unphysical photon modes in electron–positron annihilation|11.10.09 Unphysical photon modes in electron–positron annihilation]]  
Priority: low · Graph: yes · Manim: no

Correct current-conservation argument and Born cross section, with a sound correction of the source's two-polarization claim.

- [Simplify] The note never shows the cancellation of an actual gauge-dependent term; add the general-$\xi$ propagator and show that its $(1-\xi)q_\mu q_\nu/q^2$ piece drops by $q_\mu j^\mu=0$, which is what the exercise asks.
- [Graph] Plot $\sigma s/(4\pi\alpha^2/3)=\sqrt{1-4m_\mu^2/s}\,(1+2m_\mu^2/s)$ versus $\sqrt s/(2m_\mu)\in[1,5]$ to show the threshold rise and the approach to 1.
- [Structure] The exercise uses $k$ and the solution $q$ for the same photon momentum; use one symbol.

### N2809

Note: [[11.10.10 Translation Ward identity in quartic theory|11.10.10 Translation Ward identity in quartic theory]]  
Priority: medium · Graph: no · Manim: no

Conceptually sound corrections (no Noether current for $\mathbb Z_2$, translation symmetry does not protect the mass), but the Ward identity is stated without derivation and the requested relation to the propagator is only described.

- [Simplify] Derive the local identity in a few lines: substitute $\phi\to\phi+\epsilon_\nu(x)\partial^\nu\phi$, use $\delta S=-\int\partial_\mu\epsilon_\nu T^{\mu\nu}$, and read off the contact terms, so the $-i$ and sign conventions are traceable.
- [Example] Write the two-point case explicitly, $\partial_\mu\langle T^{\mu\nu}(x)\phi(x_1)\phi(x_2)\rangle=-i[\delta(x-x_1)\partial_1^\nu+\delta(x-x_2)\partial_2^\nu]D(x_1-x_2)$, and its integrated form $(\partial_1+\partial_2)D=0$, instead of describing them in prose.
- [Structure] The exercise statement first introduces the $\mathbb Z_2$ symmetry and then says "Instead"; restate the exercise directly in terms of translation symmetry and keep the parity remark in the callout.
