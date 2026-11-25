---
title: "Note Improvement Tracker – 02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/09 Renormalization"
---

> [!TLDR]
> This note tracks the review of the 36 notes in `02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/09 Renormalization`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 8 possible errors or notation conflicts. 8 of them are verified (8 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2689|N2689]] 09.01 Ultraviolet Divergences in Loop Diagrams: "agreement of the electron anomalous-moment prediction with experiment to about twelve significant figures" overstates the precision for $a_e$: the agreement is at the $10^{-12}$ level in absolute terms, i.e. roughly 9–10 significant figures of $a_e$ (about 12–13 for $g$ itself); state which quantity is meant. **Fixed:** Now states agreement at about 1e-12 absolute, about ten significant figures of a_e and twelve to thirteen of g; added g to the table
- [[#N2692|N2692]] 09.01.03 Renormalizable and Nonrenormalizable Theories: Notation clash: "$[\lambda]=4-\Delta$" uses $\lambda$ for the interaction operator although $\lambda$ conventionally denotes a coupling and $\Delta$ is called the coupling dimension; the bullets then write "$[\lambda]<4$" for the operator dimension. Name the operator ($[\mathcal O]=4-[g]$) and the coupling ($[g]=\Delta$) separately. **Fixed:** Named the operator O and the coupling g: [O]=4−Δ, Δ=[g]; changed the three bullet conditions to [O]
- [[#N2695|N2695]] 09.02.02 Pauli–Villars Regularization: "The source notes difficulties in extending the construction to fermion fields and beyond one loop" is misleading: Pauli–Villars is routinely used for QED fermion loops (several regulator fields with mass sum rules); its real limitations are non-Abelian gauge invariance and chiral fermions. State that instead of the source wording. **Fixed:** Replaced it with: routinely used for QED fermion loops with several regulators and mass sum rules; real limits are non-Abelian gauge invariance and chiral fermions
- [[#N2700|N2700]] 09.03.03 Vertex Correction Γμ(p′, p) and Anomalous Moment: "Lorentz invariance and parity give the on-shell form" (9.74) is incomplete: these symmetries also allow a $q^\mu$ term, which is excluded only by current conservation (Ward identity, $q_\mu\bar u'\Gamma^\mu u=0$); add that condition. **Fixed:** Added that current conservation (Ward identity q_μ ū'Γ^μ u=0) removes the q^μ term before (9.74)
- [[#N2716|N2716]] 09.08.02 Quartic scalar theory in four dimensions: The exercise statement writes $-i\Sigma=\frac{\lambda}{2}\int\frac{i}{k^2-m^2+i\epsilon}$, missing the vertex factor $-i$; with the $-i\lambda$ vertex it must be $(-i\lambda/2)\int\ldots$, as the solution correctly uses. **Fixed:** Changed λ/2 to −iλ/2 in the exercise display
- [[#N2716|N2716]] 09.08.02 Quartic scalar theory in four dimensions: Symbol clash in the exercise statement: $+i\epsilon$ is the causal prescription while the same part asks for the result in terms of $1/\epsilon$ with $d=4-2\epsilon$; use $+i0$ as the solution does. **Fixed:** Changed +iε to +i0 in the exercise display, as in the solution
- [[#N2719|N2719]] 09.08.05 Lamb-shift order-of-magnitude estimate: The note says the printed potential has "an extra factor $1/(4\pi)$"; the printed prefactor $-\frac{\alpha}{4\pi}\frac{2\alpha}{3r}=-\frac{\alpha^2}{6\pi r}$ differs from the standard $-\frac{\alpha}{r}\frac{2\alpha}{3\pi}$ by a factor $1/4$, not $1/(4\pi)$ (the standard form gives $\int d^3r\,V=-\frac{2\alpha^2}{3m^2}\cdot\frac25=-\frac{4\alpha^2}{15m^2}$, verified numerically). **Fixed:** Callout now gives the printed prefactor −α²/(6πr) as a factor 1/4 smaller than the conventional −(α/r)2α/(3π); integral −4α²/(15m²) checked numerically
- [[#N2722|N2722]] 09.08.08 Beta function and evolution of α: Symbol clash: $\alpha_0$ is the reference coupling at $\mu_0$ while $e_0$ in the same note is the bare charge; rename the reference value (for example $\alpha(\mu_0)$) so that $\alpha_0=e_0^2/4\pi$ is not implied. **Fixed:** Replaced every α_0 by α(μ_0), including the table

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2689 | [[09.01 Ultraviolet Divergences in Loop Diagrams\|09.01 Ultraviolet Divergences in Loop Diagrams]] | Analyzed | low | no | no | [[#N2689\|View]] |
| N2690 | [[09.01.01 Superficial Degree of Divergence\|09.01.01 Superficial Degree of Divergence]] | Analyzed | low | no | no | [[#N2690\|View]] |
| N2691 | [[09.01.02 Divergent Diagrams in QED\|09.01.02 Divergent Diagrams in QED]] | Analyzed | low | no | no | [[#N2691\|View]] |
| N2692 | [[09.01.03 Renormalizable and Nonrenormalizable Theories\|09.01.03 Renormalizable and Nonrenormalizable Theories]] | Analyzed | medium | no | no | [[#N2692\|View]] |
| N2693 | [[09.02 Regularization Methods\|09.02 Regularization Methods]] | Analyzed | low | no | no | [[#N2693\|View]] |
| N2694 | [[09.02.01 Cutoff Regularization\|09.02.01 Cutoff Regularization]] | Analyzed | low | yes | no | [[#N2694\|View]] |
| N2695 | [[09.02.02 Pauli–Villars Regularization\|09.02.02 Pauli–Villars Regularization]] | Analyzed | low | yes | no | [[#N2695\|View]] |
| N2696 | [[09.02.03 Dimensional Regularization\|09.02.03 Dimensional Regularization]] | Analyzed | medium | yes | yes | [[#N2696\|View]] |
| N2697 | [[09.03 One-Loop Corrections in QED\|09.03 One-Loop Corrections in QED]] | Analyzed | low | no | no | [[#N2697\|View]] |
| N2698 | [[09.03.01 Electron Self-Energy Σ(p)\|09.03.01 Electron Self-Energy Σ(p)]] | Analyzed | medium | yes | no | [[#N2698\|View]] |
| N2699 | [[09.03.02 Vacuum Polarization Πμν(q)\|09.03.02 Vacuum Polarization Πμν(q)]] | Analyzed | high | yes | no | [[#N2699\|View]] |
| N2700 | [[09.03.03 Vertex Correction Γμ(p′, p) and Anomalous Moment\|09.03.03 Vertex Correction Γμ(p′, p) and Anomalous Moment]] | Analyzed | high | yes | no | [[#N2700\|View]] |
| N2701 | [[09.04 Renormalization Procedure\|09.04 Renormalization Procedure]] | Analyzed | low | no | no | [[#N2701\|View]] |
| N2702 | [[09.04.01 Bare and Renormalized Quantities\|09.04.01 Bare and Renormalized Quantities]] | Analyzed | medium | no | no | [[#N2702\|View]] |
| N2703 | [[09.04.02 On-Shell Renormalization Conditions\|09.04.02 On-Shell Renormalization Conditions]] | Analyzed | medium | no | no | [[#N2703\|View]] |
| N2704 | [[09.04.03 The MS and MS-Bar Schemes\|09.04.03 The MS and MS-Bar Schemes]] | Analyzed | low | yes | no | [[#N2704\|View]] |
| N2705 | [[09.05 The BPHZ Scheme and Renormalizability at All Orders\|09.05 The BPHZ Scheme and Renormalizability at All Orders]] | Analyzed | low | no | no | [[#N2705\|View]] |
| N2706 | [[09.05.01 The Problem of Overlapping Divergences\|09.05.01 The Problem of Overlapping Divergences]] | Analyzed | medium | no | no | [[#N2706\|View]] |
| N2707 | [[09.05.02 The Bogoliubov–Parasiuk Subtraction Formula\|09.05.02 The Bogoliubov–Parasiuk Subtraction Formula]] | Analyzed | medium | no | no | [[#N2707\|View]] |
| N2708 | [[09.05.03 Proof at All Orders for QED\|09.05.03 Proof at All Orders for QED]] | Analyzed | low | no | no | [[#N2708\|View]] |
| N2709 | [[09.06 The Lamb Shift\|09.06 The Lamb Shift]] | Analyzed | low | no | no | [[#N2709\|View]] |
| N2710 | [[09.06.01 Historical and Experimental Context\|09.06.01 Historical and Experimental Context]] | Analyzed | low | no | no | [[#N2710\|View]] |
| N2711 | [[09.06.02 Physical Origin\|09.06.02 Physical Origin]] | Analyzed | low | yes | no | [[#N2711\|View]] |
| N2712 | [[09.06.03 Self-Energy Estimate - The Bethe Method\|09.06.03 Self-Energy Estimate - The Bethe Method]] | Analyzed | high | no | no | [[#N2712\|View]] |
| N2713 | [[09.07 Renormalization Constants in QED - Summary\|09.07 Renormalization Constants in QED - Summary]] | Analyzed | low | yes | no | [[#N2713\|View]] |
| N2714 | [[09.08 Exercises\|09.08 Exercises/09.08 Exercises]] | Analyzed | low | no | no | [[#N2714\|View]] |
| N2715 | [[09.08.01 QED superficial degree of divergence\|09.08 Exercises/09.08.01 QED superficial degree of divergence]] | Analyzed | low | no | no | [[#N2715\|View]] |
| N2716 | [[09.08.02 Quartic scalar theory in four dimensions\|09.08 Exercises/09.08.02 Quartic scalar theory in four dimensions]] | Analyzed | medium | yes | no | [[#N2716\|View]] |
| N2717 | [[09.08.03 Ward–Takahashi identity at one loop\|09.08 Exercises/09.08.03 Ward–Takahashi identity at one loop]] | Analyzed | low | no | no | [[#N2717\|View]] |
| N2718 | [[09.08.04 Vacuum-polarization imaginary part above threshold\|09.08 Exercises/09.08.04 Vacuum-polarization imaginary part above threshold]] | Analyzed | medium | yes | no | [[#N2718\|View]] |
| N2719 | [[09.08.05 Lamb-shift order-of-magnitude estimate\|09.08 Exercises/09.08.05 Lamb-shift order-of-magnitude estimate]] | Analyzed | medium | yes | no | [[#N2719\|View]] |
| N2720 | [[09.08.06 Electron self-energy on shell\|09.08 Exercises/09.08.06 Electron self-energy on shell]] | Analyzed | medium | no | no | [[#N2720\|View]] |
| N2721 | [[09.08.07 Counterterm Feynman rules\|09.08 Exercises/09.08.07 Counterterm Feynman rules]] | Analyzed | low | no | no | [[#N2721\|View]] |
| N2722 | [[09.08.08 Beta function and evolution of α\|09.08 Exercises/09.08.08 Beta function and evolution of α]] | Analyzed | low | yes | no | [[#N2722\|View]] |
| N2723 | [[09.08.09 Magnetic anomaly at order α²\|09.08 Exercises/09.08.09 Magnetic anomaly at order α²]] | Analyzed | low | yes | no | [[#N2723\|View]] |
| N2724 | [[09.08.10 Dimensional regularization of the scalar bubble\|09.08 Exercises/09.08.10 Dimensional regularization of the scalar bubble]] | Analyzed | low | yes | no | [[#N2724\|View]] |

## Suggestions

### N2689

Note: [[09.01 Ultraviolet Divergences in Loop Diagrams|09.01 Ultraviolet Divergences in Loop Diagrams]]  
Priority: low · Graph: no · Manim: no

Clear chapter introduction with good conceptual distinctions between regulator, cutoff and scheme.

- [Correctness] "agreement of the electron anomalous-moment prediction with experiment to about twelve significant figures" overstates the precision for $a_e$: the agreement is at the $10^{-12}$ level in absolute terms, i.e. roughly 9–10 significant figures of $a_e$ (about 12–13 for $g$ itself); state which quantity is meant.
- [Structure] The paragraphs on regulator vs physical cutoff and scheme dependence duplicate [[09.02 Regularization Methods]]; shorten here and link.

### N2690

Note: [[09.01.01 Superficial Degree of Divergence|09.01.01 Superficial Degree of Divergence]]  
Priority: low · Graph: no · Manim: no

Correct power-counting derivation of (9.3) with sound caveats about subdivergences.

- [Simplify] Show the substitution leading to (9.3): $D=3I_F+2I_B-4V+4$ with $I_F=V-E_F/2$, $I_B=(V-E_B)/2$; currently "Substitution gives" hides the only nontrivial step.
- [Example] Add a concrete case for "$D<0$ yet divergent subdiagrams can remain", e.g. the one-loop $e^-e^-\to e^-e^-$ graph made of one-photon exchange with a vertex correction at one end ($E_F=4$, $D=-2$ overall) still contains the logarithmically divergent vertex subgraph.

### N2691

Note: [[09.01.02 Divergent Diagrams in QED|09.01.02 Divergent Diagrams in QED]]  
Priority: low · Graph: no · Manim: no

Correct table and symmetry discussion; a few omitted cases would make it complete.

- [Structure] Mention the excluded entries: functions with one or three external photons and no fermions vanish by Furry's theorem (charge conjugation), and vacuum bubbles are irrelevant; this explains why the table stops at four rows.
- [Intuition] For the electron self-energy, say in one line why chiral symmetry reduces $D=1$ to logarithmic: the mass shift must vanish as $m\to0$, so $\delta m\propto m\ln\Lambda$ rather than $\Lambda$.

### N2692

Note: [[09.01.03 Renormalizable and Nonrenormalizable Theories|09.01.03 Renormalizable and Nonrenormalizable Theories]]  
Priority: medium · Graph: no · Manim: no

The physics is right, but the note displays the source's inconsistent sign and notation, making the classification harder to follow than necessary.

- [Simplify] Replace the printed (9.4) by the corrected formula $D=4-E_B-\tfrac32E_F-\sum_v[g_v]V_v$ in the main text and move the source's version into the callout, instead of displaying a formula the note then declares inconsistent.
- [Correctness] Notation clash: "$[\lambda]=4-\Delta$" uses $\lambda$ for the interaction operator although $\lambda$ conventionally denotes a coupling and $\Delta$ is called the coupling dimension; the bullets then write "$[\lambda]<4$" for the operator dimension. Name the operator ($[\mathcal O]=4-[g]$) and the coupling ($[g]=\Delta$) separately.
- [Example] Add quick dimension checks in four dimensions: $[e]=0$, $[\lambda_{\phi^4}]=0$, $[g_{\phi^3}]=1$, $[G_F]=-2$, $[G_N]=-2$, matching the listed examples.

### N2693

Note: [[09.02 Regularization Methods|09.02 Regularization Methods]]  
Priority: low · Graph: no · Manim: no

Short and correct hub; the last paragraph repeats the first.

- [Structure] Merge the final paragraph ("The first practical step is to regularize...") into the opening, since it restates the same idea.

### N2694

Note: [[09.02.01 Cutoff Regularization|09.02.01 Cutoff Regularization]]  
Priority: low · Graph: yes · Manim: no

Correct example of a logarithmically divergent radial integral with careful notes on Lorentz invariance.

- [Example] Give the closed form $\int_0^\Lambda k^3dk/(k^2+\Delta)^2=\tfrac12[\ln((\Lambda^2+\Delta)/\Delta)+\Delta/(\Lambda^2+\Delta)-1]$, which makes the logarithmic divergence explicit.
- [Graph] Plot this closed form and its asymptote $\ln(\Lambda/\sqrt\Delta)-\tfrac12$ against $\Lambda/\sqrt\Delta\in[0.1,10^3]$ with a log x-axis, showing the linear growth in $\ln\Lambda$.
- [Example] Add a one-line quadratic example, e.g. $\int_0^\Lambda k^3dk/(k^2+m^2)\approx\Lambda^2/2$, so drawback 3 is shown rather than only listed.

### N2695

Note: [[09.02.02 Pauli–Villars Regularization|09.02.02 Pauli–Villars Regularization]]  
Priority: low · Graph: yes · Manim: no

Short and correct description of the Pauli–Villars subtraction (9.6); the paragraph on non-uniform convergence is abstract and the fermion remark is misleading.

- [Correctness] "The source notes difficulties in extending the construction to fermion fields and beyond one loop" is misleading: Pauli–Villars is routinely used for QED fermion loops (several regulator fields with mass sum rules); its real limitations are non-Abelian gauge invariance and chiral fermions. State that instead of the source wording.
- [Example] Show the subtraction explicitly, $\frac1{k^2-m^2}-\frac1{k^2-M^2}=\frac{m^2-M^2}{(k^2-m^2)(k^2-M^2)}$, then apply it to $\int d^4k_E/(k_E^2+m^2)^2$ to show the log divergence becomes $\ln(M^2/m^2)$; this replaces the prose paragraph "Subtract the two fractions before expanding".
- [Graph] Log–log plot of the Euclidean propagator $1/(k_E^2+m^2)$ and the regulated difference $1/(k_E^2+m^2)-1/(k_E^2+M^2)$ for $m=1$, $M=30$, $k_E\in[0.1,10^3]$, showing the crossover from $k^{-2}$ to $k^{-4}$ near $k_E\approx M$.

### N2696

Note: [[09.02.03 Dimensional Regularization|09.02.03 Dimensional Regularization]]  
Priority: medium · Graph: yes · Manim: yes

Master formulas (9.11)–(9.14), the gamma-function expansions (9.15)–(9.17) and the $\bar\mu$ convention all check out, but source-error commentary (duplicated integral, inconsistent Wick-rotation wording) clutters the main line.

- [Structure] Drop the duplicated right-hand side in (9.7) and the sentence "The source prints the last integral twice"; likewise state the correct Wick rotation ($k_M^0=ik_E^0$, counterclockwise through quadrants I and III) directly in the text and remove the paragraph quoting the source's clockwise $k_E^0=ik_M^0$ plus the corrective note.
- [Simplify] Derive (9.9) in one line: $d^dk_M=i\,d^dk_E$ and $(k_M^2-\Delta)^b=(-1)^b(k_E^2+\Delta)^b$, so the prefactor $i(-1)^b$ is visible rather than stated.
- [Example] Add the radial step of (9.11) via the Beta function, $\int_0^\infty k^{d-1+2a}(k^2+\Delta)^{-b}dk=\tfrac12\Delta^{a+d/2-b}B(a+d/2,\,b-a-d/2)$, and a worked case $a=0$, $b=2$, $d=4-2\epsilon$ ending in $\frac{i}{16\pi^2}(1/\epsilon-\gamma_E+\ln4\pi-\ln\Delta)$.
- [Graph] Plot $\Gamma(z)$ for $z\in[-3.5,3.5]$ with vertical asymptotes at $0,-1,-2,-3$, overlaying $1/z-\gamma_E$ near $z=0$, to illustrate (9.16) and where the poles of (9.13) at $d=4$ come from.
- [Manim] Animate the $k^0$ integration contour rotating counterclockwise from the real to the imaginary axis while the two poles sit in quadrants II and IV, showing that no pole is crossed; this resolves the sign confusion flagged in the note.
- [Structure] The charge row in the quantity table uses unit "—" while sibling notes use $1$ for $\electric{e}$; unify.

### N2697

Note: [[09.03 One-Loop Corrections in QED|09.03 One-Loop Corrections in QED]]  
Priority: low · Graph: no · Manim: no

Clear hub with Feynman rules consistent with (9.20); all links resolve.

- [Intuition] Expand "exactly three divergent one-particle-irreducible diagram types" by one sentence: the one- and three-photon functions vanish by Furry's theorem and the superficially log-divergent four-photon box is finite by gauge invariance, which is why only $\Sigma$, $\Pi^{\mu\nu}$ and $\Lambda^\mu$ remain.

### N2698

Note: [[09.03.01 Electron Self-Energy Σ(p)|09.03.01 Electron Self-Energy Σ(p)]]  
Priority: medium · Graph: yes · Manim: no

The derivation is correct (signs of (9.21)–(9.23), $\Sigma_{\rm div}\propto-\not p+4m$, $Z_2=1-\alpha/(4\pi\bar\epsilon)$ and the omitted finite $(\alpha/4\pi)(\not p-2m)$ term all verified), but several source-correction callouts could be folded into the text.

- [Structure] Write (9.30) and (9.31) directly with $d^d\mechanical{\ell}$ and delete the callout about the source keeping $d^dk$; likewise include the omitted $(\alpha/4\pi)(\not p-2m)$ term in the "complete expression" instead of the note that refers to "the preceding page".
- [Simplify] After (9.36), add the divergent part of the mass shift, $\delta m_{\rm div}=\Sigma_{\rm div}(m)=3\alpha m/(4\pi\bar\epsilon)$, so the reader sees directly where the $-3\alpha/(4\pi)$ in $Z_m$ of 09.04.01 comes from.
- [Intuition] Explain why $\Sigma$ has only a logarithmic divergence despite superficial degree one: the mass correction is proportional to $m$ (chiral symmetry at $m=0$), so $\delta m\propto m\ln\Lambda$ rather than $\Lambda$.
- [Graph] Plot $\Delta_\Sigma(x)/m^2=(1-x)(1-xp^2/m^2)$ for $x\in[0,1]$ and $p^2/m^2=0,0.5,1$; at $p^2=m^2$ it becomes $(1-x)^2$ and vanishes at $x=1$, visualising the infrared sensitivity of $\partial\Sigma/\partial\not p$ mentioned in the final note.

### N2699

Note: [[09.03.02 Vacuum Polarization Πμν(q)|09.03.02 Vacuum Polarization Πμν(q)]]  
Priority: high · Graph: yes · Manim: no

The final result (9.57), the $-\alpha/(3\pi\bar\epsilon)$ pole, the running formula and the electron-only value $\alpha^{-1}(M_Z)\approx134.5$ all check, but the main line reproduces three wrong source equations ((9.53)–(9.55)) followed by corrective notes, which makes the central transversality cancellation hard to follow.

- [Structure] Replace (9.53)–(9.55) by the correct forms, $I_1=-\frac{i}{(4\pi)^{d/2}}\frac d2\Gamma(1-d/2)\Delta_\Pi^{d/2-1}=\frac{d}{d-2}\Delta_\Pi I_2$ and $(2/d-1)I_1=-\Delta_\Pi I_2$, and delete the three "as printed" notes; the cancellation of the $g^{\mu\nu}$ terms is the key check and should read cleanly.
- [Simplify] Write (9.50)–(9.51) with $d^d\ell$, include the $(4\pi)^\epsilon$ factor in the first line of the $\Pi(q^2)$ expansion, and fix the arrows in the SVG instead of keeping the momentum-routing note; this removes three more source callouts.
- [Example] Add the limits of $\Pi_R(q^2)=-\frac{2\alpha}{\pi}\int_0^1x(1-x)\ln\frac{m^2}{m^2-x(1-x)q^2}dx$: $\Pi_R\approx-\frac{\alpha}{15\pi}\frac{q^2}{m^2}$ for $|q^2|\ll m^2$ (Uehling term) and $\Pi_R\approx\frac{\alpha}{3\pi}[\ln(-q^2/m^2)-5/3]$ for $-q^2\gg m^2$, which connects (9.57) to (9.61).
- [Graph] Plot $\alpha^{-1}_{\rm eff}(Q)=\alpha^{-1}[1-\Pi_R(-Q^2)]$ for the electron loop with $Q$ from $10^{-2}m_e$ to $M_Z$ on a log axis, overlay the leading-log line $\alpha^{-1}-\frac{2}{3\pi}\ln(Q/m_e)$, and mark the value $\approx134.5$ at $M_Z$.
- [Intuition] Instead of "the source calls the following expression a Compton-scattering amplitude" plus a corrective note, call (9.59) the photon-exchange factor in Coulomb or Møller scattering.

### N2700

Note: [[09.03.03 Vertex Correction Γμ(p′, p) and Anomalous Moment|09.03.03 Vertex Correction Γμ(p′, p) and Anomalous Moment]]  
Priority: high · Graph: yes · Manim: no

The Schwinger result $\alpha/2\pi\approx1.16\times10^{-3}$ and both parameter integrations are correct, but the note keeps a wrong (9.62), a sign-wrong $\Delta_\Lambda$ (9.67), reversed factors in (9.68)/(9.71) and wrong gamma identities in the main text, and it skips the actual extraction of $F_2$.

- [Correctness] "Lorentz invariance and parity give the on-shell form" (9.74) is incomplete: these symmetries also allow a $q^\mu$ term, which is excluded only by current conservation (Ward identity, $q_\mu\bar u'\Gamma^\mu u=0$); add that condition.
- [Structure] Replace the source-printed (9.62), (9.67), (9.68), (9.71) and the gamma identities by their correct forms ($\Delta_\Lambda=m^2(x+y)^2-xyq^2$; the factor containing $\not p'-\not k$ to the left of $\gamma^\mu$; $\gamma^\alpha\not A\gamma^\mu\not B\gamma_\alpha=-2\not B\gamma^\mu\not A+(4-d)\not A\gamma^\mu\not B$, etc.) and use the overall $-ie^2$ in (9.63); then delete the six corrective callouts.
- [Example] The coefficient $2m^2z(1-z)$ is only asserted; add the short derivation in $d=4$ (reduce $\bar N^\mu$ with the contraction identities, move $\not p$ right and $\not p'$ left to use the Dirac equation, apply the Gordon identity, and symmetrise in $x\leftrightarrow y$) so the anomalous moment actually follows from the numerator.
- [Graph] Plot $F_2(q^2)/F_2(0)$ for spacelike transfer, $-q^2/m^2\in[0,20]$, using the closed form $\theta/\sinh\theta$ with $-q^2=4m^2\sinh^2(\theta/2)$ (checked numerically against the parameter integral), showing that the anomaly is a low-momentum-transfer property.
- [Simplify] In (9.70) remove the redundant arrow that maps the expression to itself.
- [Example] Update the precision statement with the 2023 Penning-trap value $a_e=0.001\,159\,652\,180\,59(13)$ and compare with $\alpha/2\pi=0.001\,161\,41$, so the reader sees the size of the higher orders (about $-1.8\times10^{-6}$, dominated by the $-0.328(\alpha/\pi)^2$ term).

### N2701

Note: [[09.04 Renormalization Procedure|09.04 Renormalization Procedure]]  
Priority: low · Graph: no · Manim: no

Concise hub that states the procedure clearly; the last paragraph repeats the link to 09.04.01.

- [Structure] Delete the final paragraph, which repeats the link to [[09.04.01 Bare and Renormalized Quantities]] already given in the reading order.

### N2702

Note: [[09.04.01 Bare and Renormalized Quantities|09.04.01 Bare and Renormalized Quantities]]  
Priority: medium · Graph: no · Manim: no

The counterterm algebra (9.80)–(9.81) and the one-loop poles $\delta_2,\delta_m,\delta_3$ are correct, but the note reproduces a source statement on $\delta_m$ that contradicts its own definitions and keeps "finite terms" in a list labelled $\overline{\rm MS}$.

- [Structure] Remove the paragraph reporting the source claim $\delta_m\ne\delta m/m$ and the positive on-shell $\delta m$, keep only the correct $\delta_m=\delta m/m$ from $m_0=m+\delta m=Z_mm$, and drop "+ finite terms" from (9.82)–(9.83).
- [Links] Here $\delta m=m_0-m$, while [[09.03.01 Electron Self-Energy Σ(p)]] (9.36) uses $\delta m=m_{\rm phys}-m=\Sigma(m)$; add one sentence relating the two (opposite sign at one loop in the on-shell scheme) so readers do not mix them.
- [Example] Show how $\delta_m=-3\alpha/(4\pi\bar\epsilon)$ follows: require $-\Sigma_{\rm div}+\delta_2\not p-(\delta_2+\delta_m)m$ to be finite with $\Sigma_{\rm div}=\frac{\alpha}{4\pi\bar\epsilon}(-\not p+4m)$, which gives $\delta_2=-\alpha/(4\pi\bar\epsilon)$ and $\delta_2+\delta_m=-4\alpha/(4\pi\bar\epsilon)$.
- [Simplify] Rename $\mathcal L_{\rm rin}$ to the standard $\mathcal L_{\rm R}$ and drop the note explaining the source label.

### N2703

Note: [[09.04.02 On-Shell Renormalization Conditions|09.04.02 On-Shell Renormalization Conditions]]  
Priority: medium · Graph: no · Manim: no

The conditions and (9.84) are correct, but the note juggles several sign conventions for $\delta m$ in source-correction callouts, which obscures the simple pole and residue conditions.

- [Structure] State the conditions once in a single convention, $\Sigma_R(m_e)=0$ and $\partial\Sigma_R/\partial\not p|_{m_e}=0$ with the counterterm insertion of [[09.08.07 Counterterm Feynman rules]], derive $\delta m_{\rm OS}=-\Sigma_{\rm loop}(m)$ and $\delta_2$ from the slope, and drop the two notes that reconcile the source formulas.
- [Example] Make the subtraction example concrete: $\Pi_R(q^2)=\Pi(q^2)-\Pi(0)=-\frac{2\alpha}{\pi}\int_0^1x(1-x)\ln\frac{m^2}{m^2-x(1-x)q^2}dx$, which is finite and vanishes at $q^2=0$.
- [Simplify] Remove "$\alpha(m_e)=1/137.036$ at $\mu=m_e$" (the source's identification of the Thomson charge with an $\overline{\rm MS}$ coupling) instead of keeping it and qualifying it in a note.

### N2704

Note: [[09.04.03 The MS and MS-Bar Schemes|09.04.03 The MS and MS-Bar Schemes]]  
Priority: low · Graph: yes · Manim: no

Correct and clear; (9.85) has the right one-loop scale dependence ($\gamma_m=3\alpha/2\pi$) but omits the known finite matching term, which the note mentions only abstractly.

- [Example] Give the missing matching constant: at one loop $\bar m(\mu)=m_e\left[1-\frac{\alpha}{\pi}+\frac{3\alpha}{2\pi}\ln\frac{m_e}{\mu}\right]$, so $\bar m(m_e)=m_e(1-\alpha/\pi)$; this makes the paragraph about setting $\mu=m_e$ concrete.
- [Graph] Plot $\bar m(\mu)/m_e$ from the formula above for $\mu$ from $m_e$ to $M_Z$ on a log axis, showing the slow logarithmic decrease (about $-4.4\%$ at $M_Z$ with fixed $\alpha$).

### N2705

Note: [[09.05 The BPHZ Scheme and Renormalizability at All Orders|09.05 The BPHZ Scheme and Renormalizability at All Orders]]  
Priority: low · Graph: no · Manim: no

Good hub with a clear motivation; the last paragraph duplicates the first link.

- [Structure] Merge the final paragraph (BPHZ acronym and repeated link to 09.05.01) into the opening sentence.

### N2706

Note: [[09.05.01 The Problem of Overlapping Divergences|09.05.01 The Problem of Overlapping Divergences]]  
Priority: medium · Graph: no · Manim: no

The concept is explained correctly in the corrective note, but the main text still states the source's wrong description (overlapping self-energy subgraphs, overall $D=0$) before correcting it.

- [Structure] Replace the source description by the corrected one directly: the two overlapping subgraphs are vertex subgraphs ($D=0$) sharing the internal photon line, and the full graph has $D=2$, reduced to a logarithm by transversality; then remove the note and the "source correction" sentence in the last paragraph.
- [Example] Add the simpler standard illustration: the two-loop electron self-energy with crossed photon lines, whose two overlapping vertex subgraphs cannot both be subtracted as independent counterterm insertions.
- [Structure] The quantity table lists only $\mechanical{q}$, which appears nowhere in the text or caption; mention $q$ in the caption or drop the entry.

### N2707

Note: [[09.05.02 The Bogoliubov–Parasiuk Subtraction Formula|09.05.02 The Bogoliubov–Parasiuk Subtraction Formula]]  
Priority: medium · Graph: no · Manim: no

The corrective notes are accurate, but (9.86)–(9.88) are given in the source's incomplete form and there is no worked forest example.

- [Structure] State the standard definitions in the main text ($\bar R[\Gamma]$ as $\Gamma$ plus counterterms for all sets of disjoint proper divergent subgraphs, $R=(1-T_\Gamma)\bar R$, and the forest formula summed over all forests including the empty one) and shorten the two notes accordingly.
- [Example] Enumerate the forests for the two-loop photon self-energy of Fig. 9.4 (empty, $\{\gamma_1\}$, $\{\gamma_2\}$, $\{\Gamma\}$, $\{\gamma_1,\Gamma\}$, $\{\gamma_2,\Gamma\}$, but not $\{\gamma_1,\gamma_2\}$), linking back to 09.05.01.
- [Example] Add a one-loop sanity check: for a primitive log-divergent graph $R[\Gamma]=(1-T)\Gamma=\Gamma(p)-\Gamma(0)$, which is finite.

### N2708

Note: [[09.05.03 Proof at All Orders for QED|09.05.03 Proof at All Orders for QED]]  
Priority: low · Graph: no · Manim: no

Correct and well-structured outline of the induction argument; the divergent-function list could be explained.

- [Simplify] Next to the $(E_F,E_B)$ list, give $D=4-\tfrac32E_F-E_B$ and the values ($D=2,1,0,0$), and note that $(0,1)$ and $(0,3)$ are also superficially divergent but vanish by Furry's theorem.
- [Simplify] Replace "fixing three renormalized quantities $(m_R,e_R,Z_{2,R})$" by "two physical parameters plus the field normalization", folding the note into the text.

### N2709

Note: [[09.06 The Lamb Shift|09.06 The Lamb Shift]]  
Priority: low · Graph: no · Manim: no

Clear hub; the last paragraph repeats the first link.

- [Structure] Remove the final paragraph, which repeats the link to [[09.06.01 Historical and Experimental Context]].

### N2710

Note: [[09.06.01 Historical and Experimental Context|09.06.01 Historical and Experimental Context]]  
Priority: low · Graph: no · Manim: no

Correct short history; the modern value and the role of the proton radius are missing.

- [Example] Add the modern value of the $2S_{1/2}$–$2P_{1/2}$ splitting, about $1057.8\,\mathrm{MHz}$, and Bethe's 1947 nonrelativistic estimate of about $1040\,\mathrm{MHz}$, so the reader sees how close the first calculation came.
- [Intuition] Add a sentence that the hydrogen Lamb-shift comparison is now limited by the proton charge radius (the muonic-hydrogen "proton radius puzzle"), which explains why precision tests also use other systems.

### N2711

Note: [[09.06.02 Physical Origin|09.06.02 Physical Origin]]  
Priority: low · Graph: yes · Manim: no

Clear qualitative explanation of why S states shift; the third item is vague.

- [Simplify] Item 3: say that the anomalous moment shifts P levels through the spin–orbit term; "spin–spin" refers to hyperfine structure, which is averaged out in the quoted $2S_{1/2}$–$2P_{1/2}$ splitting, so drop it.
- [Example] Give the Uehling contact formula $\Delta E_{\rm VP}=-\frac{4\alpha(Z\alpha)^4m}{15\pi n^3}$ for S states and show that it gives about $-27\,\mathrm{MHz}$ for $n=2$, $Z=1$ (checked: $-27.2\,\mathrm{MHz}$).
- [Graph] Plot the hydrogen radial densities $|R_{20}(r)|^2$ and $|R_{21}(r)|^2$ for $r\in[0,15]a_0$, emphasising that only the $2S$ density is nonzero at $r=0$.

### N2712

Note: [[09.06.03 Self-Energy Estimate - The Bethe Method|09.06.03 Self-Energy Estimate - The Bethe Method]]  
Priority: high · Graph: no · Manim: no

The notes correctly diagnose that both source equations (9.89) and (9.90) are wrong (dimension mismatch, factor 8 and factor 2), but the note never presents the correct derivation, so the reader is left with two flagged formulas.

- [Structure] Replace (9.89) by Bethe's result $\Delta E_{nS}=\frac{4\alpha(Z\alpha)^4m}{3\pi n^3}\ln\frac{m}{\langle E_n\rangle}$ (showing $|\psi_n(0)|^2=(Z\alpha m)^3/(\pi n^3)$) and (9.90) by $\frac{\alpha^5m}{6\pi}[\ln(1/\alpha^2)+C']$, removing the source formulas and the three corrective notes.
- [Example] Add the numerical evaluation: with Bethe's average excitation energy $\langle E\rangle\approx17.8\,\mathrm{Ry}$ for $2S$, $\frac{\alpha^5m}{6\pi}\ln\frac{m}{17.8\,\mathrm{Ry}}\approx1040\,\mathrm{MHz}$, whereas the naive $\ln(1/\alpha^2)$ gives about $1335\,\mathrm{MHz}$; this shows why the Bethe logarithm matters.
- [Simplify] Sketch the physical derivation in a few lines: the subtracted nonrelativistic self-energy is $\frac{2\alpha}{3\pi m^2}\sum_m|\mathbf p_{nm}|^2(E_m-E_n)\ln\frac{m}{|E_m-E_n|}$, and the sum rule $\sum_m|\mathbf p_{nm}|^2(E_m-E_n)=\tfrac12\langle\nabla^2V\rangle=2\pi Z\alpha|\psi_n(0)|^2$ produces the $|\psi_n(0)|^2$ factor.
- [Simplify] Replace the "equivalence principle" wording by "the high-frequency part is identical for bound and free electrons" and drop the note explaining it.

### N2713

Note: [[09.07 Renormalization Constants in QED - Summary|09.07 Renormalization Constants in QED - Summary]]  
Priority: low · Graph: yes · Manim: no

Correct summary ($Z_1=Z_2$, $Z_3$, $Z_m$ poles and $\beta=e^3/12\pi^2$ verified) with consistent notes on scheme and sign conventions.

- [Structure] Drop "+ finite terms" from the $\overline{\rm MS}$ list rather than adding a note that they do not belong there.
- [Example] Show the one-line derivation of (9.91): holding $e_0=\mu^\epsilon Z_3^{-1/2}e$ fixed gives $\beta=-\epsilon e+\frac{e^3}{12\pi^2}+\ldots$, hence $\frac{e^3}{12\pi^2}$ as $\epsilon\to0$.
- [Graph] Plot $\alpha^{-1}(\mu)=\alpha^{-1}(m_e)-\frac{2}{3\pi}\ln(\mu/m_e)$ for $\mu$ from $m_e$ to $10^3\,\mathrm{GeV}$ (electron loop only), a straight line on a log axis, to visualise the positive beta function.

### N2714

Note: [[09.08 Exercises|09.08 Exercises]]  
Priority: low · Graph: no · Manim: no

Clear exercise hub with a useful reading route and complete links; the "Source solutions" section is redundant.

- [Structure] Merge the two-sentence "Source solutions" section into the intro, since each linked article already contains its solution.

### N2715

Note: [[09.08.01 QED superficial degree of divergence|09.08.01 QED superficial degree of divergence]]  
Priority: low · Graph: no · Manim: no

Correct and compact power-counting derivation; $D=4-\tfrac32E_F-E_B$ and the $D_{\mathrm{eff}}=0$ argument check out.

- [Example] Add a short table of $D$ for the QED two-, three-, and four-point functions (electron self-energy $D=1$, photon self-energy $D=2$, vertex $D=0$, light-by-light $D=0$ but finite by gauge invariance) to show what the formula predicts.
- [Simplify] The second intro paragraph anticipates part (c) before (a) is shown; move it after part (c) so the derivation reads linearly.

### N2716

Note: [[09.08.02 Quartic scalar theory in four dimensions|09.08.02 Quartic scalar theory in four dimensions]]  
Priority: medium · Graph: yes · Manim: no

Tadpole and cutoff calculations are correct (checked $\Sigma_{\mathrm{tad}}=\tfrac{\lambda m^2}{32\pi^2}[-1/\bar\epsilon-1+\ln(m^2/\mu^2)]$ and the cutoff result), but repeated scope notes about bubble vs tadpole make it heavy.

- [Correctness] The exercise statement writes $-i\Sigma=\frac{\lambda}{2}\int\frac{i}{k^2-m^2+i\epsilon}$, missing the vertex factor $-i$; with the $-i\lambda$ vertex it must be $(-i\lambda/2)\int\ldots$, as the solution correctly uses.
- [Correctness] Symbol clash in the exercise statement: $+i\epsilon$ is the causal prescription while the same part asks for the result in terms of $1/\epsilon$ with $d=4-2\epsilon$; use $+i0$ as the solution does.
- [Structure] The bubble-vs-tadpole caveat appears three times (after the exercise, as "Diagram scope", and in the interpretation note); keep one note.
- [Graph] Plot $32\pi^2\Sigma_{\mathrm{cutoff}}/(\lambda m^2)=x-\ln(1+x)$ against $x=\Lambda^2/m^2$ for $x\in[0,100]$, with the leading asymptote $x$, to show the quadratic sensitivity that the naturalness remark refers to.

### N2717

Note: [[09.08.03 Ward–Takahashi identity at one loop|09.08.03 Ward–Takahashi identity at one loop]]  
Priority: low · Graph: no · Manim: no

Correct one-loop verification (signs of $\Lambda^\mu$, $\Sigma$, and $q_\mu\Lambda^\mu=\Sigma(p)-\Sigma(p')$ re-derived), but two abstract prose paragraphs interrupt between parts (a) and (b).

- [Simplify] Move the two paragraphs between the sign-convention note and part (b) ("Contracting the photon vertex..." and "Use the same regulator...") to a short remark after part (c); they read better once the cancellation has been seen.
- [Links] Turn the plain-text reference "Solution 8.12" into a wiki link to the corresponding 08.16 exercise note.

### N2718

Note: [[09.08.04 Vacuum-polarization imaginary part above threshold|09.08.04 Vacuum-polarization imaginary part above threshold]]  
Priority: medium · Graph: yes · Manim: no

The absorptive part and the $4\pi\alpha^2/(3q^2)$ cross-section check are correct, but the sign-convention notes are long and repetitive.

- [Structure] Combine the exercise note, the "Source polarization-sign mismatch" note, and the paragraph on positive spectral weight into one convention box stating $\Pi_{\mathrm{sol}}=-\Pi_{(9.57)}$ and which branch gives positive spectral weight.
- [Graph] Plot $\operatorname{Im}\Pi/(\alpha/3)=(1+2/z)\sqrt{1-4/z}\,\theta(z-4)$ against $z=q^2/m^2$ for $z\in[0,40]$ with the asymptote 1, to show the threshold onset proportional to $\beta$ and the high-energy limit of part (c).
- [Links] Make "Solution 8.4" a wiki link to the muon-pair exercise note.

### N2719

Note: [[09.08.05 Lamb-shift order-of-magnitude estimate|09.08.05 Lamb-shift order-of-magnitude estimate]]  
Priority: medium · Graph: yes · Manim: no

Contact-approximation result $-4\alpha^2|\psi_n(0)|^2/(15m_e^2)$ and the $1/8$ ratio are correct, but the normalization note misstates the factor relating the printed and standard Uehling potentials.

- [Correctness] The note says the printed potential has "an extra factor $1/(4\pi)$"; the printed prefactor $-\frac{\alpha}{4\pi}\frac{2\alpha}{3r}=-\frac{\alpha^2}{6\pi r}$ differs from the standard $-\frac{\alpha}{r}\frac{2\alpha}{3\pi}$ by a factor $1/4$, not $1/(4\pi)$ (the standard form gives $\int d^3r\,V=-\frac{2\alpha^2}{3m^2}\cdot\frac25=-\frac{4\alpha^2}{15m^2}$, verified numerically).
- [Example] Add the one-line integral behind $-4\alpha^2/(15m_e^2)$: $\int d^3r\,e^{-2mru}/r=\pi/(m^2u^2)$ and $\int_1^\infty(1+\tfrac1{2u^2})\sqrt{u^2-1}\,u^{-4}du=2/5$, and quote the resulting shift of about $-27\,\mathrm{MHz}$ for $2S$.
- [Graph] Plot the Uehling correction $r\,V_{\mathrm{Ue}}(r)/\alpha^2$ against $m_e r$ together with $r^2|R_{1S}|^2$ and $r^2|R_{2P}|^2$ on a logarithmic $r$ axis spanning the Compton and Bohr scales, to make the contact-approximation scale separation visible.

### N2720

Note: [[09.08.06 Electron self-energy on shell|09.08.06 Electron self-energy on shell]]  
Priority: medium · Graph: no · Manim: no

The integrals are right (source $\tfrac{\alpha m}{2\pi}[3\ln(\mu/m)+\tfrac52]$, corrected $\delta m/m$ bracket with $4/3$, $\delta_2$, $\delta_m$), but many long prose notes obscure the short calculation.

- [Structure] Replace the two prose paragraphs after part (b) with a three-row summary: source finite piece, restored numerator term $-\alpha m/(4\pi)$, corrected result $\tfrac{\alpha m}{4\pi}[3\ln(\mu^2/m^2)+4]$.
- [Simplify] Part (c) quotes the incomplete source $\delta_{2,\mathrm{source}}$ and then discards it; state the UV pole and the IR-divergent nature of the on-shell residue directly and move the source formula into the note.
- [Intuition] Add one sentence noting that the mass shift is proportional to $m$ and only logarithmically divergent because chiral symmetry protects a massless fermion, which explains the form $3\alpha m/(4\pi)[\ldots]$.

### N2721

Note: [[09.08.07 Counterterm Feynman rules|09.08.07 Counterterm Feynman rules]]  
Priority: low · Graph: no · Manim: no

Correct counterterm insertions and pole cancellation ($\delta_2=-\alpha/(4\pi\bar\epsilon)$, $\tilde\delta_m=-\alpha/(\pi\bar\epsilon)$, $\delta_m=-3\alpha/(4\pi\bar\epsilon)$); clear apart from abstract check paragraphs.

- [Simplify] The paragraph "Keep the insertion and the self-energy function distinct" duplicates what part (c) shows explicitly; shorten it to one sentence or drop it.
- [Example] Part (a) does not show the Fourier step; add $\partial_\mu\to-ip_\mu$ for an incoming $\psi$ so that $i\delta_2\bar\psi\not\partial\psi$ visibly becomes the insertion $i\delta_2\not p$.

### N2722

Note: [[09.08.08 Beta function and evolution of α|09.08.08 Beta function and evolution of α]]  
Priority: low · Graph: yes · Manim: no

Correct derivation of $\beta_e=e^3/(12\pi^2)$, the running solution, and $\mu_L\sim10^{277}\,\mathrm{GeV}$ (recomputed), with some redundant prose.

- [Correctness] Symbol clash: $\alpha_0$ is the reference coupling at $\mu_0$ while $e_0$ in the same note is the bare charge; rename the reference value (for example $\alpha(\mu_0)$) so that $\alpha_0=e_0^2/4\pi$ is not implied.
- [Simplify] The two paragraphs between parts (a) and (b) explain regulator bookkeeping and the factor two in prose; replace them by the one-line computation $\mu\,\partial_\mu\ln Z_3^{1/2}=-\frac{2e}{24\pi^2\epsilon}(-\epsilon e)=\frac{e^2}{12\pi^2}$.
- [Graph] Plot $\alpha^{-1}(\mu)=137-\frac{2}{3\pi}\ln(\mu/m_e)$ against $\log_{10}(\mu/\mathrm{MeV})$ from 0 to 281, marking the Planck scale and the zero crossing at the Landau pole.

### N2723

Note: [[09.08.09 Magnetic anomaly at order α²|09.08.09 Magnetic anomaly at order α²]]  
Priority: low · Graph: yes · Manim: no

Correct and well-sourced corrections ($0.0156874$ VP coefficient, $C_2\approx-0.32848$, insertion formula reproduced numerically), though the prose around the Euclidean representation is long.

- [Simplify] Collapse the two paragraphs after the asymptotic $\Pi_{\mathrm E}$ formula ("The Euclidean representation supplies..." and "The insertion samples...") into two sentences: the integrand is positive, and the large-$Q^2$ form is not uniform on $x\in[0,1]$.
- [Graph] Plot the integrand $(1-x)\,\Pi_{\mathrm E}(m^2x^2/(1-x))/(\alpha/\pi)$ for $x\in[0,1)$ to show where the $0.0157$ comes from and why the asymptotic logarithm fails at small $x$.

### N2724

Note: [[09.08.10 Dimensional regularization of the scalar bubble|09.08.10 Dimensional regularization of the scalar bubble]]  
Priority: low · Graph: yes · Manim: no

Correct Feynman-parameter evaluation and correct identification that the threshold term is in $\operatorname{Re}B$ while $\operatorname{Im}\widehat B=\beta/(16\pi)$; the diagram-name caveat is repeated.

- [Structure] The bubble-vs-box caveat appears twice (after the exercise and as "Diagram name"); keep one.
- [Example] Add the closed form of the finite part for spacelike momenta, $\int_0^1\ln[1-x(1-x)p^2/m^2]dx=-2+\beta\ln\frac{\beta+1}{\beta-1}$ with $\beta=\sqrt{1-4m^2/p^2}$, so limits can be checked.
- [Graph] Plot the real and imaginary parts of $\widehat B$ (finite part at $\mu=m$) against $p^2/m^2\in[-10,20]$ to show the cusp and cut opening at $p^2=4m^2$.
