---
title: "Note Improvement Tracker – 02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/10 The Renormalization Group"
---

> [!TLDR]
> This note tracks the review of the 43 notes in `02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/10 The Renormalization Group`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 7 possible errors or notation conflicts. 7 of them are verified (6 fixed, 1 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2725|N2725]] 10.01 Motivation - The Scale Problem: "Its parameters are fixed experimentally, such as the fine-structure constant, the electron mass, and the Lamb shift": the Lamb shift is a QED prediction, not an input parameter; keep only charge and mass as inputs (or say the Lamb shift tests the theory). **Fixed:** Inputs are now α and the electron mass; added that predictions such as the Lamb shift test the theory
- [[#N2730|N2730]] 10.02.03 Solution of the Callan–Symanzik Equation: Example 10.2 keeps $\exp[-n\int\gamma]$ with $s^{4-n}$; for the unamputated $G^{(n)}$ of (10.1) (with $+n\gamma$) a fixed-point check gives $G(sp)=s^{D+n\gamma}G(p)$, so the exponent would be $+n\int\gamma$; the printed $-n\int\gamma$ with $s^{4-n}$ is consistent only for the amputated vertex $\Gamma^{(n)}$, whose CS equation has $-n\gamma$. State this explicitly alongside the existing $4-n$ note. **Fixed:** Extended the existing note: unamputated G gives s^(D+nγ) and +n∫γ; printed −n∫γ with s^(4−n) holds only for Γ^(n) with −nγ (fixed-point check confirmed)
- [[#N2740|N2740]] 10.05.03 Scale Evolution of αₛ in QCD: Normalizing at $\alpha_s(M_Z)=0.118$ requires $N_f=5$, $b_0=23/3$ (the top is inactive below $m_t\approx173\,\mathrm{GeV}$), but Fig. 10.4 and the "one-loop formula with $b_0=7$" use $N_f=6$ from 1 GeV through $M_Z$; use $b_0=23/3$ between $m_b$ and $m_t$ (one-loop $\Lambda^{(5)}\approx88\,\mathrm{MeV}$ instead of $\approx45\,\mathrm{MeV}$ with $b_0=7$) and switch flavors at thresholds. **Partly:** Prose corrected (b0=23/3 gives Λ(5)≈88 MeV, b0=7 gives formal ≈45 MeV, both recomputed) and caption marks the b0=7 curve as formal; Graphs curve not redrawn with thresholds (needs figure work and reading-mode check)
- [[#N2741|N2741]] 10.05.04 Interpretation - Antiscreening and the Color of the Vacuum: "gluon loops produce a paramagnetic color effect, contributing $+(11/3)C_A$" is inaccurate: in the Nielsen–Hughes decomposition the gluon contribution is $+4C_A$ (spin paramagnetism, antiscreening) $-\tfrac13C_A$ (orbital diamagnetism, screening), giving the net $\tfrac{11}{3}C_A$. **Fixed:** Now states spin paramagnetism +4C_A (antiscreening), orbital diamagnetism −C_A/3 (screening), net 11/3 C_A; "paramagnetic gluon contribution" changed to "net gluon contribution"
- [[#N2743|N2743]] 10.06.01 Wilson's Idea - Integrating Out High-Energy Modes: The displayed rescaling $\mechanical{x}'=b^{-1}\mechanical{x}$, $\signal{\phi}'=b^{(d-2)/2}\signal{\phi}^{<}$ maps the cutoff $b\energy{\Lambda}$ to $b^2\energy{\Lambda}$ (as the note itself admits); replace the display by the correct $\mechanical{k}'=\mechanical{k}/b$, $\mechanical{x}'=b\mechanical{x}$, $\signal{\phi}'(\mechanical{x}')=b^{-(d-2)/2}\signal{\phi}^{<}(\mechanical{x})$ and shorten the note to a one-line remark about the source's misprint. **Fixed:** Display now k'=k/b, x'=bx, φ'(x')=b^(−(d−2)/2)φ^<(x); callout shortened to a one-line remark on the source misprint
- [[#N2744|N2744]] 10.06.02 Relevant, Marginal, and Irrelevant Operators: Example 10.5 lists iron together with carbon dioxide near its critical point and binary liquid mixtures as sharing critical exponents; liquid–gas and binary-mixture critical points are in the 3D Ising class, while an isotropic ferromagnet such as iron is in the 3D Heisenberg (O(3)) class; replace iron by a uniaxial magnet (e.g. the antiferromagnet FeF₂) or state explicitly that iron belongs to a different class. **Fixed:** Replaced iron by the uniaxial antiferromagnet FeF₂, named the 3D Ising class, and stated that iron belongs to the 3D Heisenberg (O(3)) class
- [[#N2761|N2761]] 10.13.02 Running QED charge: The physical-quantities table lists $\electric{Q_i}$, $\electric{Q}$, $\electric{Q_1}$, $\electric{Q_{N_f}}$, which this note never uses (only $\electric{Q}_f$ appears); remove them. **Fixed:** Table row now lists only Q_f

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2725 | [[10.01 Motivation - The Scale Problem\|10.01 Motivation - The Scale Problem]] | Analyzed | medium | no | no | [[#N2725\|View]] |
| N2726 | [[10.01.01 Scale Ambiguity and Its Resolution\|10.01.01 Scale Ambiguity and Its Resolution]] | Analyzed | low | no | no | [[#N2726\|View]] |
| N2727 | [[10.02 The Callan–Symanzik Equation\|10.02 The Callan–Symanzik Equation]] | Analyzed | low | no | no | [[#N2727\|View]] |
| N2728 | [[10.02.01 Derivation from the Independence of Bare Parameters\|10.02.01 Derivation from the Independence of Bare Parameters]] | Analyzed | low | no | no | [[#N2728\|View]] |
| N2729 | [[10.02.02 Physical Meaning of the Beta Function and Anomalous Dimension\|10.02.02 Physical Meaning of the Beta Function and Anomalous Dimension]] | Analyzed | low | no | no | [[#N2729\|View]] |
| N2730 | [[10.02.03 Solution of the Callan–Symanzik Equation\|10.02.03 Solution of the Callan–Symanzik Equation]] | Analyzed | medium | no | no | [[#N2730\|View]] |
| N2731 | [[10.03 The Running Coupling Constant in QED\|10.03 The Running Coupling Constant in QED]] | Analyzed | low | no | no | [[#N2731\|View]] |
| N2732 | [[10.03.01 The Beta Function of Quantum Electrodynamics\|10.03.01 The Beta Function of Quantum Electrodynamics]] | Analyzed | low | no | no | [[#N2732\|View]] |
| N2733 | [[10.03.02 Scale Evolution of α(μ) and Charge Screening\|10.03.02 Scale Evolution of α(μ) and Charge Screening]] | Analyzed | low | no | yes | [[#N2733\|View]] |
| N2734 | [[10.04 Fixed Points of the Renormalization Group\|10.04 Fixed Points of the Renormalization Group]] | Analyzed | low | no | no | [[#N2734\|View]] |
| N2735 | [[10.04.01 Definition and Classification\|10.04.01 Definition and Classification]] | Analyzed | low | no | yes | [[#N2735\|View]] |
| N2736 | [[10.04.02 The Gaussian Fixed Point and the Wilson–Fisher Point\|10.04.02 The Gaussian Fixed Point and the Wilson–Fisher Point]] | Analyzed | low | yes | no | [[#N2736\|View]] |
| N2737 | [[10.05 The Beta Function for Non-Abelian Gauge Theories\|10.05 The Beta Function for Non-Abelian Gauge Theories]] | Analyzed | low | no | no | [[#N2737\|View]] |
| N2738 | [[10.05.01 Calculation of the Beta Function in Yang–Mills Theory\|10.05.01 Calculation of the Beta Function in Yang–Mills Theory]] | Analyzed | low | no | no | [[#N2738\|View]] |
| N2739 | [[10.05.02 Asymptotic Freedom\|10.05.02 Asymptotic Freedom]] | Analyzed | low | no | no | [[#N2739\|View]] |
| N2740 | [[10.05.03 Scale Evolution of αₛ in QCD\|10.05.03 Scale Evolution of αₛ in QCD]] | Analyzed | medium | yes | no | [[#N2740\|View]] |
| N2741 | [[10.05.04 Interpretation - Antiscreening and the Color of the Vacuum\|10.05.04 Interpretation - Antiscreening and the Color of the Vacuum]] | Analyzed | medium | no | yes | [[#N2741\|View]] |
| N2742 | [[10.06 The Wilsonian Renormalization Group\|10.06 The Wilsonian Renormalization Group]] | Analyzed | low | no | no | [[#N2742\|View]] |
| N2743 | [[10.06.01 Wilson's Idea - Integrating Out High-Energy Modes\|10.06.01 Wilson's Idea - Integrating Out High-Energy Modes]] | Analyzed | medium | no | yes | [[#N2743\|View]] |
| N2744 | [[10.06.02 Relevant, Marginal, and Irrelevant Operators\|10.06.02 Relevant, Marginal, and Irrelevant Operators]] | Analyzed | medium | yes | no | [[#N2744\|View]] |
| N2745 | [[10.06.03 Theory Space and Basins of Attraction\|10.06.03 Theory Space and Basins of Attraction]] | Analyzed | medium | yes | yes | [[#N2745\|View]] |
| N2746 | [[10.07 Dimensional Transmutation and Λ_QCD\|10.07 Dimensional Transmutation and Λ_QCD]] | Analyzed | low | no | no | [[#N2746\|View]] |
| N2747 | [[10.07.01 A Theory without a Scale Generates a Scale\|10.07.01 A Theory without a Scale Generates a Scale]] | Analyzed | medium | yes | no | [[#N2747\|View]] |
| N2748 | [[10.07.02 The Scale Anomaly and the Energy–Momentum Tensor\|10.07.02 The Scale Anomaly and the Energy–Momentum Tensor]] | Analyzed | medium | no | no | [[#N2748\|View]] |
| N2749 | [[10.08 Confinement and Asymptotic Freedom\|10.08 Confinement and Asymptotic Freedom]] | Analyzed | medium | yes | yes | [[#N2749\|View]] |
| N2750 | [[10.09 The Beta Function at Two Loops\|10.09 The Beta Function at Two Loops]] | Analyzed | medium | yes | no | [[#N2750\|View]] |
| N2751 | [[10.10 Applications - Unification of Forces\|10.10 Applications - Unification of Forces]] | Analyzed | low | no | no | [[#N2751\|View]] |
| N2752 | [[10.10.01 Coupling Constants of the Standard Model\|10.10.01 Coupling Constants of the Standard Model]] | Analyzed | low | no | no | [[#N2752\|View]] |
| N2753 | [[10.10.02 Quasi-Unification and Supersymmetry\|10.10.02 Quasi-Unification and Supersymmetry]] | Analyzed | medium | yes | no | [[#N2753\|View]] |
| N2754 | [[10.10.03 The Philosophy of Effective Field Theories\|10.10.03 The Philosophy of Effective Field Theories]] | Analyzed | low | no | no | [[#N2754\|View]] |
| N2755 | [[10.11 Anomalies and the Renormalization Group\|10.11 Anomalies and the Renormalization Group]] | Analyzed | low | no | no | [[#N2755\|View]] |
| N2756 | [[10.11.01 Scale Anomalies and Conformal Invariance\|10.11.01 Scale Anomalies and Conformal Invariance]] | Analyzed | low | no | no | [[#N2756\|View]] |
| N2757 | [[10.11.02 The c-Theorem (Zamolodchikov) and the a-Theorem\|10.11.02 The c-Theorem (Zamolodchikov) and the a-Theorem]] | Analyzed | low | no | no | [[#N2757\|View]] |
| N2758 | [[02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/10 The Renormalization Group/10.12 Summary\|10.12 Summary]] | Analyzed | low | no | no | [[#N2758\|View]] |
| N2759 | [[10.13 Exercises\|10.13 Exercises/10.13 Exercises]] | Analyzed | low | no | no | [[#N2759\|View]] |
| N2760 | [[10.13.01 Beta function in quartic scalar theory\|10.13 Exercises/10.13.01 Beta function in quartic scalar theory]] | Analyzed | low | no | no | [[#N2760\|View]] |
| N2761 | [[10.13.02 Running QED charge\|10.13 Exercises/10.13.02 Running QED charge]] | Analyzed | low | yes | no | [[#N2761\|View]] |
| N2762 | [[10.13.03 Wilson–Fisher fixed point\|10.13 Exercises/10.13.03 Wilson–Fisher fixed point]] | Analyzed | low | yes | no | [[#N2762\|View]] |
| N2763 | [[10.13.04 Asymptotic freedom\|10.13 Exercises/10.13.04 Asymptotic freedom]] | Analyzed | low | yes | no | [[#N2763\|View]] |
| N2764 | [[10.13.05 Callan–Symanzik equation for the propagator\|10.13 Exercises/10.13.05 Callan–Symanzik equation for the propagator]] | Analyzed | low | no | no | [[#N2764\|View]] |
| N2765 | [[10.13.06 Landau pole with Standard Model charged fermions\|10.13 Exercises/10.13.06 Landau pole with Standard Model charged fermions]] | Analyzed | low | yes | no | [[#N2765\|View]] |
| N2766 | [[10.13.07 Gauge-coupling unification\|10.13 Exercises/10.13.07 Gauge-coupling unification]] | Analyzed | low | yes | no | [[#N2766\|View]] |
| N2767 | [[10.13.08 Relevant, marginal, and irrelevant operators\|10.13 Exercises/10.13.08 Relevant, marginal, and irrelevant operators]] | Analyzed | low | no | no | [[#N2767\|View]] |

## Suggestions

### N2725

Note: [[10.01 Motivation - The Scale Problem|10.01 Motivation - The Scale Problem]]  
Priority: medium · Graph: no · Manim: no

Good motivation of scale independence with an existing qualitative flow figure, but one sentence mislabels an observable as an input parameter.

- [Correctness] "Its parameters are fixed experimentally, such as the fine-structure constant, the electron mass, and the Lamb shift": the Lamb shift is a QED prediction, not an input parameter; keep only charge and mass as inputs (or say the Lamb shift tests the theory).
- [Example] Add a two-line numeric illustration: for fixed $q^2$, show that $\alpha(\mu)[1+\frac{\alpha}{3\pi}\ln(-q^2/\mu^2)]$ is unchanged to $O(\alpha^2)$ when $\mu$ moves from $m_e$ to $M_Z$.
- [Simplify] Fig. 10.1 caption: "showing asymptotic freedom" refers only to the red curve; say so explicitly.

### N2726

Note: [[10.01.01 Scale Ambiguity and Its Resolution|10.01.01 Scale Ambiguity and Its Resolution]]  
Priority: low · Graph: no · Manim: no

Short and correct in spirit, but both displayed integrals are only schematic and the note explaining that is buried at the end.

- [Simplify] Write the cutoff integral with upper limit $\Lambda$ and result $\frac1{16\pi^2}[\ln(\Lambda^2/m^2)-1+O(m^2/\Lambda^2)]$, and the dimensional result as $\frac1{16\pi^2}(1/\bar\epsilon-\ln(m^2/\mu^2))$ without the stray $\mu^{2\epsilon}$ prefactor; the end note can then be dropped.
- [Intuition] Add the explicit correspondence $\ln\Lambda^2\leftrightarrow1/\bar\epsilon+\ln\mu^2$ to show that both regulators carry the same logarithm.

### N2727

Note: [[10.02 The Callan–Symanzik Equation|10.02 The Callan–Symanzik Equation]]  
Priority: low · Graph: no · Manim: no

Adequate section hub with correct links; the final sentence repeats the first link.

- [Structure] Drop the last sentence, which repeats the link to 10.02.01 already given in the first paragraph.

### N2728

Note: [[10.02.01 Derivation from the Independence of Bare Parameters|10.02.01 Derivation from the Independence of Bare Parameters]]  
Priority: low · Graph: no · Manim: no

Correct derivation (sign of $+n\gamma$, $\gamma_m$ convention, φ⁴ $\beta=3\lambda^2/16\pi^2$ and $\gamma=\lambda^2/(12(16\pi^2)^2)$ all check), but the source-quote notes interrupt the flow.

- [Simplify] Drop $Z$ from the table and the opening list and use only $Z_\phi$, with one sentence that $Z_\phi$ depends on $\mu$; this removes the need for the first note.
- [Example] In Example 10.1 show the one-line origin of $\beta$: $\lambda_0=\mu^{2\epsilon}\lambda(1+\frac{3\lambda}{32\pi^2\epsilon})$ at fixed $\lambda_0$, and replace the source term "butterfly" with the s-, t-, u-channel fish (bubble) diagrams.
- [Structure] State that (10.1) holds for unamputated $G^{(n)}$ and that the amputated vertex function obeys the same equation with $-n\gamma$; the next note relies on that distinction.

### N2729

Note: [[10.02.02 Physical Meaning of the Beta Function and Anomalous Dimension|10.02.02 Physical Meaning of the Beta Function and Anomalous Dimension]]  
Priority: low · Graph: no · Manim: no

Correct qualitative note; brief and readable.

- [Example] Add the fixed-point consequence $\langle\phi(x)\phi(0)\rangle\propto|x|^{-2(1+\gamma)}$ in four dimensions to make "changes the scaling laws" concrete.

### N2730

Note: [[10.02.03 Solution of the Callan–Symanzik Equation|10.02.03 Solution of the Callan–Symanzik Equation]]  
Priority: medium · Graph: no · Manim: no

The main formulas are displayed with the known source sign error and corrected only in notes, which makes the note harder to use than necessary.

- [Correctness] Example 10.2 keeps $\exp[-n\int\gamma]$ with $s^{4-n}$; for the unamputated $G^{(n)}$ of (10.1) (with $+n\gamma$) a fixed-point check gives $G(sp)=s^{D+n\gamma}G(p)$, so the exponent would be $+n\int\gamma$; the printed $-n\int\gamma$ with $s^{4-n}$ is consistent only for the amputated vertex $\Gamma^{(n)}$, whose CS equation has $-n\gamma$. State this explicitly alongside the existing $4-n$ note.
- [Structure] Display the corrected (10.3) with $\exp[+n\int_0^t\gamma]$ as the main equation and move the source sign into the note, instead of the reverse.
- [Example] Add the one-line characteristic derivation $\frac{d}{dt}G(p;\bar g(t),\bar m(t),\mu e^t)=-n\gamma\,G$ before (10.3), since that line settles the sign.

### N2731

Note: [[10.03 The Running Coupling Constant in QED|10.03 The Running Coupling Constant in QED]]  
Priority: low · Graph: no · Manim: no

Adequate hub; the final paragraph repeats the first link.

- [Structure] Drop the last paragraph, which repeats the 10.03.01 link.

### N2732

Note: [[10.03.01 The Beta Function of Quantum Electrodynamics|10.03.01 The Beta Function of Quantum Electrodynamics]]  
Priority: low · Graph: no · Manim: no

Correct one- and two-loop QED beta function and species sum; clear.

- [Example] Add the Standard Model value of $\sum_iQ_i^2$ above the top threshold, $3\cdot1+3\cdot(3\cdot\tfrac49+3\cdot\tfrac19)=8$ (leptons plus colored quarks), as a worked use of the species formula.
- [Intuition] The phrase "consistent with reduced screening at shorter distances" is compressed; state that a probe at shorter distance penetrates the screening cloud and sees a larger charge.

### N2733

Note: [[10.03.02 Scale Evolution of α(μ) and Charge Screening|10.03.02 Scale Evolution of α(μ) and Charge Screening]]  
Priority: low · Graph: no · Manim: yes

Correct running formula and numbers ($\alpha^{-1}(M_Z)\approx134.5$ electron-only, $e^{646}$, $10^{277}\,\mathrm{GeV}$ recomputed) with a good figure.

- [Structure] Name the scheme next to $\alpha^{-1}(M_Z)\approx128.9$: it is the on-shell effective coupling, while the $\overline{\mathrm{MS}}$ value is about $127.9$.
- [Manim] Animate a test charge approaching a point charge surrounded by polarized virtual pairs, with a side meter showing the enclosed effective charge rising as the radius shrinks, to illustrate the screening paragraph.

### N2734

Note: [[10.04 Fixed Points of the Renormalization Group|10.04 Fixed Points of the Renormalization Group]]  
Priority: low · Graph: no · Manim: no

Adequate hub with a useful caveat about mass tuning; the last paragraph repeats the first link.

- [Structure] Drop the final paragraph, which repeats the 10.04.01 link.

### N2735

Note: [[10.04.01 Definition and Classification|10.04.01 Definition and Classification]]  
Priority: low · Graph: no · Manim: yes

Correct linear-stability analysis and a correct schematic figure; the scale-invariance note breaks the bullet list.

- [Structure] Move the "Scale invariance requires..." note out of the middle of the stability bullet list to after the list.
- [Manim] Animate points flowing along the $g$ axis under $dg/dt=\beta(g)$ for the Fig. 10.3 beta function, first toward the infrared (converging to $g^*$) and then reversed toward the ultraviolet (converging to 0 from below $g^*$).

### N2736

Note: [[10.04.02 The Gaussian Fixed Point and the Wilson–Fisher Point|10.04.02 The Gaussian Fixed Point and the Wilson–Fisher Point]]  
Priority: low · Graph: yes · Manim: no

Correct Wilson–Fisher fixed point and stability reasoning, but the $d=4-\epsilon$ beta function itself is never written.

- [Example] Write $\beta(\lambda)=-\epsilon\lambda+\frac{3\lambda^2}{16\pi^2}$ explicitly before quoting $\lambda^*=16\pi^2\epsilon/3$, so the balance described in the next paragraph is visible.
- [Graph] Plot $\beta(\lambda)$ for $\epsilon=0$ and $\epsilon=0.5$ over $\lambda\in[0,40]$ with IR flow arrows, showing the Wilson–Fisher root separating from the Gaussian one.
- [Structure] The table lists $g^*$ while the text works with $\lambda$; use $\lambda^*=0$ for the Gaussian point for consistency.

### N2737

Note: [[10.05 The Beta Function for Non-Abelian Gauge Theories|10.05 The Beta Function for Non-Abelian Gauge Theories]]  
Priority: low · Graph: no · Manim: no

Adequate hub; the final sentence repeats the first link.

- [Structure] Drop the last sentence, which repeats the 10.05.01 link.

### N2738

Note: [[10.05.01 Calculation of the Beta Function in Yang–Mills Theory|10.05.01 Calculation of the Beta Function in Yang–Mills Theory]]  
Priority: low · Graph: no · Manim: no

Correct one-loop coefficients (gauge $-11C_A/3$, fermion $+4T_FN_f/3$, complex scalar $+T_FN_s/3$); compact.

- [Simplify] The listed $\Delta$ values are contributions to $-b_0$; say so explicitly, since 10.05.04 quotes contributions to $b_0$ with the opposite sign.
- [Example] Add the QED limit as a check: for U(1), $C_A=0$ and $T_FN_f\to\sum Q_i^2=1$ give $\beta=+e^3/(12\pi^2)$, matching (10.4).

### N2739

Note: [[10.05.02 Asymptotic Freedom|10.05.02 Asymptotic Freedom]]  
Priority: low · Graph: no · Manim: no

Correct flavor bound ($N_f<16.5$ for SU(3)) and history; the $N_f=6$ example needs the threshold caveat earlier.

- [Simplify] The condition $N_f<\frac{11}{2}N_c$ is stated twice (general and SU(3)); merge into one statement.
- [Example] Next to $b_0=7$ list $b_0=23/3$ ($N_f=5$, relevant at $M_Z$) and $b_0=9$ ($N_f=3$, around 1 GeV), to make the threshold caveat concrete.

### N2740

Note: [[10.05.03 Scale Evolution of αₛ in QCD|10.05.03 Scale Evolution of αₛ in QCD]]  
Priority: medium · Graph: yes · Manim: no

The running formulas are correct, but the numerics and Fig. 10.4 use the six-flavor $b_0=7$ at and below $M_Z$, where only five or fewer flavors are active.

- [Correctness] Normalizing at $\alpha_s(M_Z)=0.118$ requires $N_f=5$, $b_0=23/3$ (the top is inactive below $m_t\approx173\,\mathrm{GeV}$), but Fig. 10.4 and the "one-loop formula with $b_0=7$" use $N_f=6$ from 1 GeV through $M_Z$; use $b_0=23/3$ between $m_b$ and $m_t$ (one-loop $\Lambda^{(5)}\approx88\,\mathrm{MeV}$ instead of $\approx45\,\mathrm{MeV}$ with $b_0=7$) and switch flavors at thresholds.
- [Graph] Redraw the QCD curve with piecewise $b_0=25/3,\,23/3,\,7$ joined continuously at $m_b\approx4.2\,\mathrm{GeV}$ and $m_t\approx173\,\mathrm{GeV}$.
- [Example] Add a worked number: $\alpha_s(10\,\mathrm{GeV})$ from $\alpha_s(M_Z)=0.118$ with $b_0=23/3$ at one loop is about $0.17$.

### N2741

Note: [[10.05.04 Interpretation - Antiscreening and the Color of the Vacuum|10.05.04 Interpretation - Antiscreening and the Color of the Vacuum]]  
Priority: medium · Graph: no · Manim: yes

Good qualitative picture, but it misses the relativistic link between paramagnetism and antiscreening and assigns the whole gluon coefficient to the paramagnetic term.

- [Correctness] "gluon loops produce a paramagnetic color effect, contributing $+(11/3)C_A$" is inaccurate: in the Nielsen–Hughes decomposition the gluon contribution is $+4C_A$ (spin paramagnetism, antiscreening) $-\tfrac13C_A$ (orbital diamagnetism, screening), giving the net $\tfrac{11}{3}C_A$.
- [Intuition] Add the key step: Lorentz invariance of the vacuum requires $\varepsilon\mu=1$, so a paramagnetic response $\mu>1$ forces $\varepsilon<1$, which is antiscreening.
- [Manim] Animate a color source with virtual quark pairs aligning to screen and gluon spins aligning to antiscreen, with a meter of effective charge versus probe radius that falls at short distance when gluons dominate.

### N2742

Note: [[10.06 The Wilsonian Renormalization Group|10.06 The Wilsonian Renormalization Group]]  
Priority: low · Graph: no · Manim: no

Clear hub that orders the three subnotes and flags the two separate steps (mode elimination and rescaling) and the flow-direction convention.

- [Structure] The closing sentence repeats the first link of the opening paragraph verbatim; drop it or replace it with a one-line pointer to the exercises (\[\[10.13.03 Wilson–Fisher fixed point\]\], \[\[10.13.08 Relevant, marginal, and irrelevant operators\]\]).

### N2743

Note: [[10.06.01 Wilson's Idea - Integrating Out High-Energy Modes|10.06.01 Wilson's Idea - Integrating Out High-Energy Modes]]  
Priority: medium · Graph: no · Manim: yes

The mode-splitting and effective-action definitions are clear, but the displayed rescaling is knowingly wrong and only corrected in a trailing note, which confuses the reader.

- [Correctness] The displayed rescaling $\mechanical{x}'=b^{-1}\mechanical{x}$, $\signal{\phi}'=b^{(d-2)/2}\signal{\phi}^{<}$ maps the cutoff $b\energy{\Lambda}$ to $b^2\energy{\Lambda}$ (as the note itself admits); replace the display by the correct $\mechanical{k}'=\mechanical{k}/b$, $\mechanical{x}'=b\mechanical{x}$, $\signal{\phi}'(\mechanical{x}')=b^{-(d-2)/2}\signal{\phi}^{<}(\mechanical{x})$ and shorten the note to a one-line remark about the source's misprint.
- [Simplify] Remove the "the source gives / it states" phrasing in the rescaling paragraph and state the three RG steps as a numbered list: (1) integrate out the shell $b\energy{\Lambda}<\lvert\mechanical{k}\rvert<\energy{\Lambda}$, (2) rescale momenta, (3) rescale the field so the kinetic term keeps coefficient $1/2$.
- [Intuition] Show in one line why the field exponent is $(d-2)/2$: substituting $\mechanical{x}=\mechanical{x}'/b$ in $\int d^d\mechanical{x}\,(\partial\signal{\phi})^2$ gives a factor $b^{2-d}$ that the field rescaling must absorb; then show the tree-level consequence $\signal{g}_n'=b^{\,n-d}\signal{g}_n$ that feeds \[\[10.06.02 Relevant, Marginal, and Irrelevant Operators\]\].
- [Manim] Animate a momentum disk of radius $\energy{\Lambda}$: the outer shell is shaded and removed (integrated out), the remaining disk of radius $b\energy{\Lambda}$ is blown back up to radius $\energy{\Lambda}$, and a coupling readout $\signal{g}\to\signal{g}'$ updates each iteration.

### N2744

Note: [[10.06.02 Relevant, Marginal, and Irrelevant Operators|10.06.02 Relevant, Marginal, and Irrelevant Operators]]  
Priority: medium · Graph: yes · Manim: no

The dimensional classification and sign checks are correct and well motivated, but the universality example groups systems from different universality classes.

- [Correctness] Example 10.5 lists iron together with carbon dioxide near its critical point and binary liquid mixtures as sharing critical exponents; liquid–gas and binary-mixture critical points are in the 3D Ising class, while an isotropic ferromagnet such as iron is in the 3D Heisenberg (O(3)) class; replace iron by a uniaxial magnet (e.g. the antiferromagnet FeF₂) or state explicitly that iron belongs to a different class.
- [Example] After the flow equation, give a numeric illustration: a dimension-6 coefficient with $\signal{\tilde g_6}=1$ at $\energy{\mu}=1\,\unit{TeV}$ becomes $10^{-4}$ at $10\,\unit{GeV}$, while a mass term with $\signal{\tilde g_2}=10^{-4}$ grows to $1$ over the same range.
- [Graph] Plot the tree-level solutions $\signal{\tilde g_n}(\energy{\mu})=\signal{\tilde g_n}(\energy{\mu_0})(\energy{\mu}/\energy{\mu_0})^{n-d}$ for $d=4$, $n=2,4,6$ on a log–log plot with $\energy{\mu}/\energy{\mu_0}\in[10^{-3},1]$, showing the rising, flat, and falling lines.
- [Simplify] Merge the two notes on the meaning of $d$ and on EFT accuracy into the main text where $d$ is introduced, so the reader is not told the source uses a different convention after the table.

### N2745

Note: [[10.06.03 Theory Space and Basins of Attraction|10.06.03 Theory Space and Basins of Attraction]]  
Priority: medium · Graph: yes · Manim: yes

Conceptually correct but entirely verbal; the critical-surface and basin ideas would benefit greatly from one concrete two-coupling flow.

- [Example] Add the two-coupling $\signal{\phi}^4$ flow in $d=4-\epsilon$ as a concrete theory space, e.g. $\mathrm{d}r/\mathrm{d}l=2r+u/(1+r)$, $\mathrm{d}u/\mathrm{d}l=\epsilon u-3u^2/(1+r)^2$ (schematic normalization), with Gaussian and Wilson–Fisher fixed points, one relevant direction ($r$) and one irrelevant direction at the Wilson–Fisher point.
- [Graph] Plot that flow as a 2D vector field (streamlines) for $\epsilon=1$ with $r\in[-1,1]$, $u\in[0,1.5]$, marking both fixed points and the critical surface (the separatrix flowing into the Wilson–Fisher point).
- [Manim] Animate several starting theories (dots) flowing along the field toward the infrared: dots on the critical line converge to the Wilson–Fisher point, while dots off it run away toward large positive $r$ (disordered) or negative $r$ (ordered), illustrating basin and tuning.
- [Intuition] Explain "stationary point of the vector field" as "a theory that looks the same at every length scale", and link the linearized eigenvalues to the relevant/irrelevant classification of \[\[10.06.02 Relevant, Marginal, and Irrelevant Operators\]\].

### N2746

Note: [[10.07 Dimensional Transmutation and Λ_QCD|10.07 Dimensional Transmutation and Λ_QCD]]  
Priority: low · Graph: no · Manim: no

Short, clear hub that correctly separates the generated scale from predictions of specific hadron masses.

- [Structure] The final sentence duplicates the first link; drop it or replace it with a pointer to the numeric estimate in \[\[10.13.04 Asymptotic freedom\]\].

### N2747

Note: [[10.07.01 A Theory without a Scale Generates a Scale|10.07.01 A Theory without a Scale Generates a Scale]]  
Priority: medium · Graph: yes · Manim: no

Correct and carefully hedged, but it never displays the formula it relies on, so the key idea of dimensional transmutation stays abstract.

- [Links] "given by (10.6)" points to an equation in another note without a link; write it as \[\[10.05.03 Scale Evolution of αₛ in QCD|(10.6)\]\] or, better, display it here.
- [Simplify] Display the transmutation formula explicitly: $\energy{\Lambda_{\mathrm{QCD}}}=\energy{\mu_0}\exp[-2\pi/(b_0\signal{\alpha_s}(\energy{\mu_0}))]$, and show in one line that $\mathrm{d}\energy{\Lambda_{\mathrm{QCD}}}/\mathrm{d}\energy{\mu_0}=0$ along the one-loop trajectory, which is the "no new parameter" statement now given only in words.
- [Example] Insert the numbers: with $\signal{\alpha_s}(\mechanical{M_Z})=0.118$ and $n_f=5$ ($b_0=23/3$) the one-loop value is $\energy{\Lambda}\approx88\,\unit{MeV}$, with $b_0=7$ it is $\approx45\,\unit{MeV}$, versus the $\approx210\,\unit{MeV}$ higher-order $\overline{\mathrm{MS}}$ value, illustrating the scheme, flavor-number, and loop dependence mentioned in the last paragraph.
- [Graph] Plot one-loop $\signal{\alpha_s}(\energy{\mu})=2\pi/(b_0\ln(\energy{\mu}/\energy{\Lambda}))$ for $\energy{\mu}\in[0.3,1000]\,\unit{GeV}$ (log axis) for two or three reference values of $\signal{\alpha_s}(\mechanical{M_Z})$, marking the corresponding $\energy{\Lambda}$ where each curve diverges.

### N2748

Note: [[10.07.02 The Scale Anomaly and the Energy–Momentum Tensor|10.07.02 The Scale Anomaly and the Energy–Momentum Tensor]]  
Priority: medium · Graph: no · Manim: no

The anomaly formula and dimensional checks are right and the source's vacuum-condensate claim is properly corrected, but the correct proton-mass relation is described only in words.

- [Simplify] State the relation the correction note alludes to: $\langle p\vert\energy{T}^\mu{}_\mu\vert p\rangle=2m_p^2$ (relativistic normalization, at rest), and rewrite the source paragraph about the vacuum expectation value directly in this correct form instead of quoting it and then correcting it.
- [Structure] Fold the long paragraph about the negative beta function and the Lorentzian contraction into a short remark after the formula; it currently interrupts the flow between the anomaly and Example 10.6.
- [Example] In Example 10.6 add the arithmetic: two $u$ quarks of about $2.2\,\unit{MeV}$ and one $d$ quark of about $4.7\,\unit{MeV}$ give about $9\,\unit{MeV}$, i.e. roughly 1% of $938\,\unit{MeV}$, which justifies the quoted 99%.

### N2749

Note: [[10.08 Confinement and Asymptotic Freedom|10.08 Confinement and Asymptotic Freedom]]  
Priority: medium · Graph: yes · Manim: yes

Physically careful about not overclaiming confinement from the Landau pole, but the source's flawed argument is still presented in the body before being corrected.

- [Links] "the one-loop evolution (10.6)" is an unlinked reference to another note; link \[\[10.05.03 Scale Evolution of αₛ in QCD|(10.6)\]\].
- [Structure] Move the source's "force becomes arbitrarily large" paragraph and its correction into one short remark; lead instead with the static potential as the proper confinement diagnostic.
- [Graph] Plot the Cornell potential $V(r)=-\frac{4}{3}\frac{\alpha_s\hbar c}{r}+\sigma r$ with $\alpha_s\approx0.3$, $\sigma\approx0.18\,\unit{GeV^2}$, for $r\in[0.05,1.5]\,\unit{fm}$, showing the Coulomb-like short-distance part and the linear long-distance part (constant force about $0.9\,\unit{GeV/fm}$).
- [Manim] Animate a quark–antiquark pair being pulled apart: the field lines collapse into a flux tube of constant width, the stored energy grows linearly, and at a critical length the tube breaks into two mesons via pair creation.

### N2750

Note: [[10.09 The Beta Function at Two Loops|10.09 The Beta Function at Two Loops]]  
Priority: medium · Graph: yes · Manim: no

Coefficients, the $N_f=6$ values, and the expansion of the scale relation all check out, but several paragraphs of caveats precede the formula they qualify.

- [Structure] Move the paragraph about boundary data and the Lambert $W$ branch after the displayed $t$ relation, since it refers to "the integral" and "both displayed differences" before they appear.
- [Simplify] Define $t=\ln(\energy{\mu}/\energy{\mu_0})$ explicitly, add $t$, $b_0$, $b_1$, $N_c$, $N_f$ to the physical-quantities table, and show the one-line expansion $1/\signal{\beta}\approx-16\pi^2/(b_0\signal{g}^3)+b_1/(b_0^2\signal{g})$ that produces the logarithmic term.
- [Intuition] Mention that $b_1$ changes sign for $N_f>153/19\approx8.05$ while $b_0>0$ up to $N_f<16.5$, giving the Banks–Zaks infrared fixed point $\signal{g}_*^2=-16\pi^2b_0/b_1$; this makes the remark about "no positive nonzero fixed point" for six flavors concrete.
- [Graph] Plot $\signal{\alpha_s}(\energy{\mu})$ from $\signal{\alpha_s}(\mechanical{M_Z})=0.118$ at one loop and at two loops (numerically integrated, $N_f=5$) for $\energy{\mu}\in[1,1000]\,\unit{GeV}$ on a log axis, showing how the two-loop term shifts the low-energy rise.

### N2751

Note: [[10.10 Applications - Unification of Forces|10.10 Applications - Unification of Forces]]  
Priority: low · Graph: no · Manim: no

Clear hub that correctly frames unification as a pairwise-crossing test rather than a visual near-meeting.

- [Structure] The closing sentence repeats the first link; remove it.

### N2752

Note: [[10.10.01 Coupling Constants of the Standard Model|10.10.01 Coupling Constants of the Standard Model]]  
Priority: low · Graph: no · Manim: no

Values and coefficients are correct ($\alpha^{-1}=128$ and $\sin^2\theta_W\approx0.231$ reproduce 1/59 and 1/29), and the sign-convention warning is useful.

- [Example] Show the input numbers behind $1/59$ and $1/29$: $\electric{\alpha}(\mechanical{M_Z})\approx1/128$, $\sin^2\mechanical{\theta_W}\approx0.231$, so the reader can reproduce the values.
- [Intuition] Explain the signs of $b_i$ in one line: gauge-boson loops (antiscreening) dominate for $SU(2)$ and $SU(3)$, while $U(1)_Y$ has only matter and Higgs loops (screening); and note the general one-loop formula $b=-\frac{11}{3}C_A+\frac{2}{3}\sum T_F+\frac13\sum T_S$ (Weyl fermions, complex scalars) from which all three values follow.
- [Structure] Move the "Notice that these b coefficients include their signs" sentence to directly after the evolution equation so the convention is stated where it is used.

### N2753

Note: [[10.10.02 Quasi-Unification and Supersymmetry|10.10.02 Quasi-Unification and Supersymmetry]]  
Priority: medium · Graph: yes · Manim: no

The one-loop formula and the plotted SM lines are correct, but the MSSM claim that is the point of the note is not shown in the figure.

- [Graph] Add the MSSM lines with $b_i=(33/5,1,-3)$ (for simplicity starting at $\mechanical{M_Z}$, or with a kink at about 1 TeV) to Fig. 10.5 in a second panel or lighter style; with the note's inputs they cross pairwise at about $10^{15.9}$–$10^{16.6}\,\unit{GeV}$, visibly tighter than the SM crossings at $10^{13.2}$, $10^{14.4}$, and $10^{16.6}\,\unit{GeV}$.
- [Graph] The functiongraph offset uses $\log_{10}\mechanical{M_Z}=1.95904$ (that is 91.0 GeV); use $\log_{10}91.19\approx1.95995$ for consistency with the stated reference mass (visual change negligible).
- [Example] Quote the three SM pairwise crossing scales from \[\[10.13.07 Gauge-coupling unification\]\] in the text so "approach one another near $10^{15}$ GeV" is quantified.
- [Simplify] Replace "Figure 10.5 illustrates this behavior" and the "source states" phrasing with direct statements; the paragraph beginning "The displayed Standard Model curves therefore..." can be cut to one sentence.

### N2754

Note: [[10.10.03 The Philosophy of Effective Field Theories|10.10.03 The Philosophy of Effective Field Theories]]  
Priority: low · Graph: no · Manim: no

Correct and readable; the Fermi-theory example is well chosen and its matching relation and dimensions are right.

- [Example] Evaluate the matching numerically: with $\signal{g_2}\approx0.65$ and $\mechanical{M_W}\approx80.4\,\unit{GeV}$, $\signal{G_F}=\sqrt2\signal{g_2}^2/(8\mechanical{M_W}^2)\approx1.16\times10^{-5}\,\unit{GeV^{-2}}$, matching the measured $1.166\times10^{-5}\,\unit{GeV^{-2}}$; then show the suppression $\signal{G_F}E^2\approx10^{-5}$ at $E=1\,\unit{GeV}$.
- [Simplify] The two paragraphs between the matching formula and the suppression statement repeat the dimension check and caveats; condense them to two sentences.

### N2755

Note: [[10.11 Anomalies and the Renormalization Group|10.11 Anomalies and the Renormalization Group]]  
Priority: low · Graph: no · Manim: no

Brief, correct hub.

- [Structure] The final sentence repeats the first link; remove it.

### N2756

Note: [[10.11.01 Scale Anomalies and Conformal Invariance|10.11.01 Scale Anomalies and Conformal Invariance]]  
Priority: low · Graph: no · Manim: no

Accurate and appropriately hedged, though the definition of the scale anomaly is not connected to the explicit trace formula elsewhere in the chapter.

- [Links] Link the trace-anomaly formula (10.7) in \[\[10.07.02 The Scale Anomaly and the Energy–Momentum Tensor\]\] where the scale anomaly is defined, so "expressed through a nonzero beta function" has a concrete equation behind it.
- [Example] Add a concrete 4D interacting conformal example besides $\mathcal{N}=4$ SYM, e.g. the Banks–Zaks fixed point of QCD with $N_f$ just below 16.5 (see \[\[10.09 The Beta Function at Two Loops\]\]), to show that conformal fixed points need not be supersymmetric.

### N2757

Note: [[10.11.02 The c-Theorem (Zamolodchikov) and the a-Theorem|10.11.02 The c-Theorem (Zamolodchikov) and the a-Theorem]]  
Priority: low · Graph: no · Manim: no

Correct with good corrections of the source's "Euler anomaly in the Weyl tensor" wording, but lacks a concrete flow to illustrate the theorems.

- [Example] Add the 2D minimal-model example $c_p=1-6/(p(p+1))$ with the flow from the tricritical Ising model ($c=7/10$) to the Ising model ($c=1/2$), checking $c_{\mathrm{UV}}>c_{\mathrm{IR}}$.
- [Example] For the a-theorem, add the free-field values $a\propto(1,\tfrac{11}{2},62)$ for a real scalar, a Dirac fermion, and a gauge vector, and apply them to QCD (free quarks and gluons in the UV versus massless pions in the IR) as a consistency check.
- [Simplify] Replace the source sentence that calls the c-function "positive definite" and the quoted "in the Weyl tensor" phrase with the corrected statements directly, keeping the note shorter.

### N2758

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/10 The Renormalization Group/10.12 Summary|10.12 Summary]]  
Priority: low · Graph: no · Manim: no

A concise, correct summary with a useful workflow paragraph.

- [Simplify] Item 1 "Scale dependence of renormalized parameters is unphysical and unavoidable" reads as a contradiction; rephrase as "the subtraction-scale dependence of renormalized parameters is a bookkeeping choice that cancels in observables, while dependence on the physical probe energy is real".

### N2759

Note: [[10.13 Exercises|10.13 Exercises]]  
Priority: low · Graph: no · Manim: no

Complete exercise index with working links and a helpful study order.

- [Structure] The "Source solutions" section is redundant (its two sentences say the solutions are inside each linked article); merge it into the opening line.

### N2760

Note: [[10.13.01 Beta function in quartic scalar theory|10.13.01 Beta function in quartic scalar theory]]  
Priority: low · Graph: no · Manim: no

The bubble integral, three-channel pole, counterterm $\delta_\lambda=3\lambda/(32\pi^2\bar\epsilon)$, and beta-function derivation all check out and are clearly laid out.

- [Simplify] Move the two motivating paragraphs (locality of the pole, keeping $\epsilon$ until after differentiating) to the points of the derivation where they are used, so the solution starts with the amplitude.
- [Intuition] Add one sentence on the meaning of the factor 3: the s, t and u channels each contribute the same local pole, and $b=2a$ arises because $\signal{\lambda}_0\propto\signal{\lambda}^1$ at tree level while the counterterm is $\propto\signal{\lambda}^2$.

### N2761

Note: [[10.13.02 Running QED charge|10.13.02 Running QED charge]]  
Priority: low · Graph: yes · Manim: no

The electron-only result 134.47 and the active charge sum 20/3 at $M_Z$ are correct, and the limitations of the estimate are clearly stated.

- [Correctness] The physical-quantities table lists $\electric{Q_i}$, $\electric{Q}$, $\electric{Q_1}$, $\electric{Q_{N_f}}$, which this note never uses (only $\electric{Q}_f$ appears); remove them.
- [Links] Link "(10.5)" to \[\[10.03.02 Scale Evolution of α(μ) and Charge Screening\]\].
- [Example] Add a crude threshold-stepped estimate: run with electrons only from $m_e$ to $m_\mu$, add the muon up to $m_\tau$, then the tau up to $M_Z$; the leptons alone bring $\alpha^{-1}$ to about 132.2 at the Z, which shows quantitatively that the remaining gap to 128.9 is hadronic.
- [Graph] Plot $\electric{\alpha}^{-1}(\energy{\mu})$ for $\energy{\mu}\in[m_e,M_Z]$ on a log axis: the electron-only straight line versus the threshold-stepped line with increasing slopes at each fermion mass, with the benchmark 128.9 marked.

### N2762

Note: [[10.13.03 Wilson–Fisher fixed point|10.13.03 Wilson–Fisher fixed point]]  
Priority: low · Graph: yes · Manim: no

Correct and clear; the fixed point, slope $\beta'=\epsilon$, and IR-stability argument are all right.

- [Graph] Plot $\signal{\beta}(\tilde{\signal{\lambda}})=-\epsilon\tilde{\signal{\lambda}}+3\tilde{\signal{\lambda}}^2/(16\pi^2)$ for $\epsilon=1$ with $\tilde{\signal{\lambda}}\in[0,80]$, marking the zeros at 0 and $16\pi^2/3\approx52.6$ and adding arrows on the axis showing the IR flow toward the Wilson–Fisher point.
- [Example] In part (c), quote the leading ε-expansion exponent $\nu\approx1/2+\epsilon/12$ (Ising, $N=1$), giving 0.583 at $\epsilon=1$ against the 3D value 0.630, to make "rough route to the Ising class" concrete.

### N2763

Note: [[10.13.04 Asymptotic freedom|10.13.04 Asymptotic freedom]]  
Priority: low · Graph: yes · Manim: no

Correct integration, Landau-pole location, and numeric value $\Lambda\approx45$ MeV for fixed six flavors.

- [Example] Add the five-flavor one-loop value for comparison: $b_0=23/3$ gives $\energy{\Lambda}_{\mathrm{QCD}}\approx88\,\unit{MeV}$, which shows how strongly the result depends on the flavor number before the higher-order benchmark near 210 MeV.
- [Graph] Plot $\signal{\alpha}_s(\energy{\mu})$ from the one-loop formula with $\energy{\Lambda}=45\,\unit{MeV}$ ($b_0=7$) and $\energy{\Lambda}=88\,\unit{MeV}$ ($b_0=23/3$) for $\energy{\mu}\in[0.2,1000]\,\unit{GeV}$ on a log axis, both passing through 0.118 at $M_Z$.

### N2764

Note: [[10.13.05 Callan–Symanzik equation for the propagator|10.13.05 Callan–Symanzik equation for the propagator]]  
Priority: low · Graph: no · Manim: no

The CS equation, dimensional elimination, characteristic solution, and the $t^{c_\gamma/b_0}$ log correction all check out, but the illustration switches to a gauge theory instead of using the scalar theory of the exercise.

- [Example] Add the scalar case the exercise asks about: $\signal{\gamma}=\signal{\lambda}^2/(12(16\pi^2)^2)$ at two loops and $\bar{\signal{\lambda}}(t)=\signal{\lambda}/(1-3\signal{\lambda}t/(16\pi^2))$, noting that in the IR $\bar{\signal{\lambda}}\sim16\pi^2/(3\lvert t\rvert)$ so the integrated anomalous dimension converges and the propagator approaches a free $1/\mechanical{P}^2$ up to a constant.
- [Simplify] State the constant-$\signal{\gamma}$ check $\signal{G}^{(2)}\propto\mechanical{P}^{-2+2\signal{\gamma}}$ right after the characteristic solution; it gives immediate intuition for the exponential factor.

### N2765

Note: [[10.13.06 Landau pole with Standard Model charged fermions|10.13.06 Landau pole with Standard Model charged fermions]]  
Priority: low · Graph: yes · Manim: no

Correct counting (sum 8), beta function, and Landau-pole estimate $\sim10^{32}$ GeV (more precisely $6\times10^{31}$ GeV).

- [Graph] Plot $1/\electric{\alpha}(\energy{\mu})$ against $\log_{10}(\energy{\mu}/\unit{GeV})$ for the electron-only slope and for the all-species slope $16/(3\pi)$, from $m_e$ up to the zero crossing near $10^{32}\,\unit{GeV}$, with the Planck scale marked.
- [Simplify] Quote the result as $\approx6\times10^{31}\,\unit{GeV}$ alongside the order-of-magnitude statement, since $5.1\times10^{-4}\,\unit{GeV}\times e^{80.7}\approx5.7\times10^{31}\,\unit{GeV}$.

### N2766

Note: [[10.13.07 Gauge-coupling unification|10.13.07 Gauge-coupling unification]]  
Priority: low · Graph: yes · Manim: no

All pairwise crossing numbers for SM and MSSM reproduce, and the correction notes on precision are accurate.

- [Graph] Add a plot of the six lines $\signal{\alpha}_i^{-1}(L)$ for SM ($b=(4.1,-19/6,-7)$) and MSSM ($b=(6.6,1,-3)$) for $L\in[0,36]$, marking the three pairwise crossings in each case; this is the picture the exercise is computing.
- [Simplify] The SM value $\energy{\mu}_{13}\approx2.38\times10^{14}$ GeV is quoted as the source's; direct evaluation gives $2.37\times10^{14}$ GeV for both rounded and exact $b_2$, so quote 2.37 and drop the "source's rounded" qualifier.
- [Structure] Move part (a)'s "The source's numerical steps use the rounded $b_2$..." sentence into the closing note on exact $b_2$, so the solution reads linearly.

### N2767

Note: [[10.13.08 Relevant, marginal, and irrelevant operators|10.13.08 Relevant, marginal, and irrelevant operators]]  
Priority: low · Graph: no · Manim: no

Correct dimension counting and suppression estimate, clearly presented.

- [Intuition] Add that the marginal $\signal{\phi}^4$ coupling is marginally irrelevant in $d=4$ because $\signal{\beta}>0$ (Exercise 10.1), so it slowly decreases logarithmically toward the infrared; this completes part (b).
- [Simplify] Use one notation for the coefficients: the Lagrangian has $\signal{\lambda_6}/(\energy{\Lambda}^2 6!)$ while the solution writes $\signal{\lambda}_{2n}/\energy{\Lambda}^{2n-4}$ without the $(2n)!$; state that the factorial is absorbed or keep it consistently.
