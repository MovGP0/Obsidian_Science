---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/07 Barriers and Quantum Tunneling"
---

> [!TLDR]
> This note tracks the review of the 8 notes in `02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/07 Barriers and Quantum Tunneling`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 1 possible errors or notation conflicts. 1 of them are verified (1 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2071|N2071]] 07.05 Other Applications: The quantities table lists $\electric I,\electric V$ (current and voltage), but the note never uses these symbols; drop the row or add the $I$–$V$ characteristic it refers to. **Fixed:** Removed the current and voltage row

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2066 | [[07.00 Barriers and Quantum Tunneling\|07.00 Barriers and Quantum Tunneling]] | Analyzed | low | no | no | [[#N2066\|View]] |
| N2067 | [[07.01 Rectangular Potential Barrier\|07.01 Rectangular Potential Barrier]] | Analyzed | medium | yes | yes | [[#N2067\|View]] |
| N2068 | [[07.02 Physical Interpretation\|07.02 Physical Interpretation]] | Analyzed | low | yes | no | [[#N2068\|View]] |
| N2069 | [[07.03 WKB Approximation for Tunneling\|07.03 WKB Approximation for Tunneling]] | Analyzed | medium | yes | no | [[#N2069\|View]] |
| N2070 | [[07.04 Application to Alpha Decay\|07.04 Application to Alpha Decay]] | Analyzed | medium | yes | no | [[#N2070\|View]] |
| N2071 | [[07.05 Other Applications\|07.05 Other Applications]] | Analyzed | low | yes | no | [[#N2071\|View]] |
| N2072 | [[07.06 Tunneling and Lifetimes\|07.06 Tunneling and Lifetimes]] | Analyzed | low | no | no | [[#N2072\|View]] |
| N2073 | [[07.07 Barriers and Quantum Tunneling Exercises\|07.07 Barriers and Quantum Tunneling Exercises]] | Analyzed | low | no | no | [[#N2073\|View]] |

## Suggestions

### N2066

Note: [[07.00 Barriers and Quantum Tunneling|07.00 Barriers and Quantum Tunneling]]  
Priority: low · Graph: no · Manim: no

A concise chapter hub with correct summary formulas, and all its heading links resolve.

- [Structure] No change needed.

### N2067

Note: [[07.01 Rectangular Potential Barrier|07.01 Rectangular Potential Barrier]]  
Priority: medium · Graph: yes · Manim: yes

The algebra is correct (the closed form for $t$ was checked numerically against the four matching equations), but the step from the four equations to $t$ is skipped.

- [Simplify] After (7.2), add the intermediate lines: from (7.2) $A=\tfrac12(1-ik/\kappa)te^{ika+\kappa a}$ and $B=\tfrac12(1+ik/\kappa)te^{ika-\kappa a}$, then insert into (7.1) and eliminate $r$; readers cannot reproduce "Solve the four equations" as written.
- [Graph] Plot $T$ against $E/V_0$ on $0<E/V_0<4$ for a fixed opacity $\sqrt{2mV_0}a/\hbar=5$, using (7.3) below the barrier and the $\sin^2$ form above it; mark the resonances $k'a=n\pi$.
- [Intuition] Add the $E\to V_0$ limiting case (both forms give $T=[1+mV_0a^2/(2\hbar^2)]^{-1}$) to show that the two formulas join continuously.
- [Manim] Animate a Gaussian wave packet with mean energy below $V_0$ hitting the barrier and splitting into a reflected and a weak transmitted packet, with $|\psi|^2$ shown, to contrast with the stationary picture of Fig. 7.1.

### N2068

Note: [[07.02 Physical Interpretation|07.02 Physical Interpretation]]  
Priority: low · Graph: yes · Manim: no

Short and correct; the numbers (proton $\sim10^{-190}$, STM factor $e^{-2}\simeq0.13$) check out.

- [Example] In "Role of mass" state the actual numbers: $\kappa=5.12\,\mathrm{nm^{-1}}$, $e^{-2\kappa a}\simeq3.6\times10^{-5}$, and with the prefactor $T\simeq1.4\times10^{-4}$ (as in exercise 2), so "of order $10^{-4}$" is not ambiguous; write $\ln$ instead of $\log$.
- [Intuition] In "Penetration and current", show briefly why one real exponential alone carries no current ($J\propto\operatorname{Im}(\psi^*\psi')=0$) while the mixed term gives $J\propto\kappa\operatorname{Im}(A^*B)$.
- [Graph] Plot $\ln T$ versus barrier width $a$ ($0$ to $1\,\mathrm{nm}$) for an electron and a proton with $V_0-E=1\,\mathrm{eV}$, to show the slope ratio $\sqrt{1836}$.

### N2069

Note: [[07.03 WKB Approximation for Tunneling|07.03 WKB Approximation for Tunneling]]  
Priority: medium · Graph: yes · Manim: no

The WKB expansion and the triangular-barrier integral are correct, but the note does not say when WKB is valid or why the transmission is the square of the amplitude ratio.

- [Simplify] State the validity condition, a slowly varying wavelength $|d\lambda/dx|\ll1$ (equivalently $|\hbar S''|\ll S'^2$), and note that it fails at the turning points, which is why Airy matching is needed.
- [Intuition] Add one line explaining that $T\simeq|\psi(x_2)/\psi(x_1)|^2=e^{-2\int\kappa\,dx}$, and that the rectangular case gives back $e^{-2\kappa a}$ but loses the prefactor $16E(V_0-E)/V_0^2$.
- [Graph] For the triangular example plot $V(x)=V_0-Fx$ with $E=0$ and shade the forbidden segment; optionally compare exact and WKB $\ln T$ for a rectangular barrier as a function of $\kappa a$ to show where the approximation is good.

### N2070

Note: [[07.04 Application to Alpha Decay|07.04 Application to Alpha Decay]]  
Priority: medium · Graph: yes · Manim: no

The integral and the Gamow leading term are correct, but "+ correction terms" hides a term that is numerically as large as the leading one.

- [Simplify] Write the next term explicitly: $\ln T\simeq-\frac{2\pi C}{\hbar v_\alpha}+\frac{4\sqrt{2m_\alpha CR}}{\hbar}$; for U-238 ($Z'=180$, $E_\alpha=4.27$ MeV, $R=9.3$ fm) the terms are $-172.4$ and $+86.1$, giving $-86.3$ against the exact WKB value $-88.7$, so the leading term alone would be off by roughly 37 orders of magnitude.
- [Example] Add the worked U-238 numbers: $r_2\simeq61\,\mathrm{fm}$, $V_C(R)\simeq28\,\mathrm{MeV}$, $T\simeq3\times10^{-39}$, $\nu\simeq8\times10^{20}\,\mathrm{Hz}$, $\tau\simeq4\times10^{17}\,\mathrm{s}\simeq1.4\times10^{10}$ yr (consistent with exercise 7).
- [Graph] Add a Geiger–Nuttall plot: $\log_{10}t_{1/2}$ versus $Z'/\sqrt{E_\alpha}$ for a handful of even-even emitters (e.g. U-238, Th-232, Ra-226, Po-210, Po-212), with the straight-line trend.

### N2071

Note: [[07.05 Other Applications|07.05 Other Applications]]  
Priority: low · Graph: yes · Manim: no

A brief, correct qualitative survey.

- [Correctness] The quantities table lists $\electric I,\electric V$ (current and voltage), but the note never uses these symbols; drop the row or add the $I$–$V$ characteristic it refers to.
- [Graph] In "Stellar fusion" plot $e^{-E/k_BT}$, $e^{-b/\sqrt E}$, and their product versus $E$ (0–30 keV) for $k_BT=1.3$ keV and the p–p value of $b$, to show the Gamow peak near 6 keV.

### N2072

Note: [[07.06 Tunneling and Lifetimes|07.06 Tunneling and Lifetimes]]  
Priority: low · Graph: no · Manim: no

A correct and compact derivation of $\tau=\hbar/\Gamma\simeq1/(\nu T)$.

- [Intuition] Add one sentence on why the per-encounter picture gives an exponential law (a constant escape probability per attempt implies $dN/dt=-\nu TN$) and why it needs $T\ll1$.

### N2073

Note: [[07.07 Barriers and Quantum Tunneling Exercises|07.07 Barriers and Quantum Tunneling Exercises]]  
Priority: low · Graph: no · Manim: no

A good exercise list; recomputed results 1, 2, 4, 5, 6, and 7 are correct to the stated precision.

- [Structure] No change needed; optionally add the exercise 7 WKB breakdown ($T\simeq3\times10^{-39}$, $\nu\simeq8\times10^{20}$ Hz) so the order-of-magnitude result can be checked.
