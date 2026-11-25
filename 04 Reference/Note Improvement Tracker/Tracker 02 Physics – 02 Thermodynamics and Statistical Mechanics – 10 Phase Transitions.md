---
title: "Note Improvement Tracker – 02 Physics/02 Thermodynamics and Statistical Mechanics/10 Phase Transitions"
---

> [!TLDR]
> This note tracks the review of the 52 notes in `02 Physics/02 Thermodynamics and Statistical Mechanics/10 Phase Transitions`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 5 possible errors or notation conflicts. 5 of them are verified (5 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N1554|N1554]] 10.04.01 Triple Point and Critical Point: $P_t=611.73\,\text{Pa}$ is an older value; the current IAPWS value for the triple point of water is $P_t=611.657\,\text{Pa}$ (with $T_t=273.16$ K). **Fixed:** Changed to the IAPWS value 611.657 Pa
- [[#N1567|N1567]] 10.06.04 Specific Heat near the Lambda Transition: Fig. 10.4 puts the $T>T_\lambda$ branch above the $T<T_\lambda$ branch at equal $|t|$ ($A_->A_+$ in $C=C_c-A_\pm|t|^{0.013}$). For helium-4 the measured heat capacity is larger below $T_\lambda$ (Lipa et al.: $A^+/A^-\approx1.05$ in $C=B+(A^\pm/\alpha)|t|^{-\alpha}$, with $\alpha<0$). Swap the amplitudes so the figure shows the lambda shape. **Fixed:** Data confirmed A_-=1.5 > A_+=1.2; regenerated curves with A_-=1.2, A_+=1.5, swapped the two branch-label heights, and updated the caption; not checked in Obsidian reading mode
- [[#N1570|N1570]] 10.07.02 Scaling Relations: "Fisher relation (1969)": Fisher derived $\gamma=\nu(2-\eta)$ in 1964 (J. Math. Phys. 5, 944); correct the year. **Fixed:** Changed heading year to 1964 (no links point to the old heading)
- [[#N1571|N1571]] 10.07.03 Universality and Universality Classes: The Heisenberg row ($\alpha=-0.122$, $\nu=0.707$) uses old estimates; current values are $\nu\approx0.711$, $\alpha\approx-0.134$, $\beta\approx0.369$, $\gamma\approx1.396$, $\delta\approx4.78$, $\eta\approx0.038$. For 3D XY, theory gives $\alpha\approx-0.015$ and $\delta\approx4.78$ (the $-0.013$ is the helium-4 experimental value). Update the rows or mark them as dated. **Fixed:** Kept the source table and added a note marking the rows as dated, with current XY (alpha -0.015, delta 4.78) and Heisenberg estimates
- [[#N1588|N1588]] 10.01 Water Phase Diagram: $P_t=611.73\,\text{Pa}$ is outdated; the current IAPWS value is $611.657\,\text{Pa}$ (the rounded $\approx6.12$ mbar is unchanged). **Fixed:** Changed to 611.657 Pa; approx 6.12 mbar unchanged

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N1540 | [[10.00 Phase Transitions\|10.00 Phase Transitions]] | Analyzed | low | no | no | [[#N1540\|View]] |
| N1541 | [[10.01 Phenomenology of Phase Transitions\|10.01 Phenomenology of Phase Transitions]] | Analyzed | low | no | no | [[#N1541\|View]] |
| N1542 | [[10.01.01 Representative Examples\|10.01.01 Representative Examples]] | Analyzed | low | no | no | [[#N1542\|View]] |
| N1543 | [[10.01.02 General Properties\|10.01.02 General Properties]] | Analyzed | low | no | no | [[#N1543\|View]] |
| N1544 | [[10.02 Ehrenfest Classification\|10.02 Ehrenfest Classification]] | Analyzed | low | no | no | [[#N1544\|View]] |
| N1545 | [[10.02.01 First-Order Phase Transitions\|10.02.01 First-Order Phase Transitions]] | Analyzed | medium | yes | no | [[#N1545\|View]] |
| N1546 | [[10.02.02 Continuous Transitions - Second Order\|10.02.02 Continuous Transitions - Second Order]] | Analyzed | medium | yes | no | [[#N1546\|View]] |
| N1547 | [[10.02.03 Limits of the Ehrenfest Classification\|10.02.03 Limits of the Ehrenfest Classification]] | Analyzed | low | no | no | [[#N1547\|View]] |
| N1548 | [[10.03 Clausius–Clapeyron Equation\|10.03 Clausius–Clapeyron Equation]] | Analyzed | low | no | no | [[#N1548\|View]] |
| N1549 | [[10.03.01 Derivation\|10.03.01 Derivation]] | Analyzed | low | no | no | [[#N1549\|View]] |
| N1550 | [[10.03.02 Application - Vaporization Curve\|10.03.02 Application - Vaporization Curve]] | Analyzed | low | yes | no | [[#N1550\|View]] |
| N1551 | [[10.03.03 Application - Melting Curve\|10.03.03 Application - Melting Curve]] | Analyzed | low | no | no | [[#N1551\|View]] |
| N1552 | [[10.03.04 Clausius–Clapeyron Relation for Magnetic Fields\|10.03.04 Clausius–Clapeyron Relation for Magnetic Fields]] | Analyzed | medium | yes | no | [[#N1552\|View]] |
| N1553 | [[10.04 Phase Diagram\|10.04 Phase Diagram]] | Analyzed | low | no | no | [[#N1553\|View]] |
| N1554 | [[10.04.01 Triple Point and Critical Point\|10.04.01 Triple Point and Critical Point]] | Analyzed | low | no | no | [[#N1554\|View]] |
| N1555 | [[10.04.02 Gibbs Phase Rule\|10.04.02 Gibbs Phase Rule]] | Analyzed | low | no | no | [[#N1555\|View]] |
| N1556 | [[10.04.03 Phase Diagram in the P–T Plane\|10.04.03 Phase Diagram in the P–T Plane]] | Analyzed | low | no | no | [[#N1556\|View]] |
| N1557 | [[10.04.04 P–V Diagram with Isotherms\|10.04.04 P–V Diagram with Isotherms]] | Analyzed | low | no | yes | [[#N1557\|View]] |
| N1558 | [[10.05 Order Parameter and Spontaneous Symmetry Breaking\|10.05 Order Parameter and Spontaneous Symmetry Breaking]] | Analyzed | low | no | no | [[#N1558\|View]] |
| N1559 | [[10.05.01 Definition of the Order Parameter\|10.05.01 Definition of the Order Parameter]] | Analyzed | low | no | no | [[#N1559\|View]] |
| N1560 | [[10.05.02 Examples of Order Parameters\|10.05.02 Examples of Order Parameters]] | Analyzed | low | no | no | [[#N1560\|View]] |
| N1561 | [[10.05.03 Spontaneous Symmetry Breaking\|10.05.03 Spontaneous Symmetry Breaking]] | Analyzed | medium | yes | yes | [[#N1561\|View]] |
| N1562 | [[10.05.04 Temperature Dependence of the Order Parameter\|10.05.04 Temperature Dependence of the Order Parameter]] | Analyzed | low | no | no | [[#N1562\|View]] |
| N1563 | [[10.06 Critical Point and Fluctuations\|10.06 Critical Point and Fluctuations]] | Analyzed | low | no | no | [[#N1563\|View]] |
| N1564 | [[10.06.01 Critical Opalescence\|10.06.01 Critical Opalescence]] | Analyzed | medium | yes | no | [[#N1564\|View]] |
| N1565 | [[10.06.02 Divergence of Response Functions\|10.06.02 Divergence of Response Functions]] | Analyzed | low | yes | no | [[#N1565\|View]] |
| N1566 | [[10.06.03 Correlation Function\|10.06.03 Correlation Function]] | Analyzed | medium | yes | no | [[#N1566\|View]] |
| N1567 | [[10.06.04 Specific Heat near the Lambda Transition\|10.06.04 Specific Heat near the Lambda Transition]] | Analyzed | high | yes | no | [[#N1567\|View]] |
| N1568 | [[10.07 Critical Exponents\|10.07 Critical Exponents]] | Analyzed | low | no | no | [[#N1568\|View]] |
| N1569 | [[10.07.01 Definition of Critical Exponents\|10.07.01 Definition of Critical Exponents]] | Analyzed | low | yes | no | [[#N1569\|View]] |
| N1570 | [[10.07.02 Scaling Relations\|10.07.02 Scaling Relations]] | Analyzed | medium | no | no | [[#N1570\|View]] |
| N1571 | [[10.07.03 Universality and Universality Classes\|10.07.03 Universality and Universality Classes]] | Analyzed | medium | no | no | [[#N1571\|View]] |
| N1572 | [[10.08 Landau Theory of Phase Transitions\|10.08 Landau Theory of Phase Transitions]] | Analyzed | low | no | no | [[#N1572\|View]] |
| N1573 | [[10.08.01 Landau Free Energy\|10.08.01 Landau Free Energy]] | Analyzed | medium | yes | no | [[#N1573\|View]] |
| N1574 | [[10.08.02 Second-Order Transition\|10.08.02 Second-Order Transition]] | Analyzed | medium | yes | yes | [[#N1574\|View]] |
| N1575 | [[10.08.03 First-Order Transition in Landau Theory\|10.08.03 First-Order Transition in Landau Theory]] | Analyzed | medium | yes | yes | [[#N1575\|View]] |
| N1576 | [[10.08.04 Critical Mean-Field Exponents\|10.08.04 Critical Mean-Field Exponents]] | Analyzed | low | yes | no | [[#N1576\|View]] |
| N1577 | [[10.09 van der Waals Model and the Ferromagnet Analogy\|10.09 van der Waals Model and the Ferromagnet Analogy]] | Analyzed | low | no | no | [[#N1577\|View]] |
| N1578 | [[10.09.01 van der Waals Equation\|10.09.01 van der Waals Equation]] | Analyzed | low | no | no | [[#N1578\|View]] |
| N1579 | [[10.09.02 Law of Corresponding States\|10.09.02 Law of Corresponding States]] | Analyzed | low | yes | no | [[#N1579\|View]] |
| N1580 | [[10.09.03 Critical van der Waals Exponents\|10.09.03 Critical van der Waals Exponents]] | Analyzed | low | yes | no | [[#N1580\|View]] |
| N1581 | [[10.09.04 Maxwell Construction\|10.09.04 Maxwell Construction]] | Analyzed | low | yes | yes | [[#N1581\|View]] |
| N1582 | [[10.10 Worked Problems\|10.10 Worked Problems]] | Analyzed | low | no | no | [[#N1582\|View]] |
| N1583 | [[10.11 Notes on the Renormalization Group\|10.11 Notes on the Renormalization Group]] | Analyzed | low | no | no | [[#N1583\|View]] |
| N1584 | [[10.11.01 Basic Idea\|10.11.01 Basic Idea]] | Analyzed | medium | no | yes | [[#N1584\|View]] |
| N1585 | [[10.11.02 Fixed Points and Critical Exponents\|10.11.02 Fixed Points and Critical Exponents]] | Analyzed | medium | yes | no | [[#N1585\|View]] |
| N1586 | [[10.11.03 ε Expansion\|10.11.03 ε Expansion]] | Analyzed | low | yes | no | [[#N1586\|View]] |
| N1587 | [[02 Physics/02 Thermodynamics and Statistical Mechanics/10 Phase Transitions/10.12 Summary\|10.12 Summary]] | Analyzed | low | no | no | [[#N1587\|View]] |
| N1588 | [[10.01 Water Phase Diagram\|99 Exercises/10.01 Water Phase Diagram]] | Analyzed | low | yes | no | [[#N1588\|View]] |
| N1589 | [[10.02 Mean-Field Ising Exponents\|99 Exercises/10.02 Mean-Field Ising Exponents]] | Analyzed | low | yes | no | [[#N1589\|View]] |
| N1590 | [[10.03 Superconducting Transition Heat\|99 Exercises/10.03 Superconducting Transition Heat]] | Analyzed | low | yes | no | [[#N1590\|View]] |
| N1591 | [[10.04 Scaling Relations for the Two-Dimensional Ising Model\|99 Exercises/10.04 Scaling Relations for the Two-Dimensional Ising Model]] | Analyzed | low | no | no | [[#N1591\|View]] |

## Suggestions

### N1540

Note: [[10.00 Phase Transitions|10.00 Phase Transitions]]  
Priority: low · Graph: no · Manim: no

Clear chapter hub with a useful reading guide.

- [Links] The links are correct; [[10.12 Summary]] also matches a QFT note with the same name, so consider a path-qualified link for robustness.

### N1541

Note: [[10.01 Phenomenology of Phase Transitions|10.01 Phenomenology of Phase Transitions]]  
Priority: low · Graph: no · Manim: no

Short and clear section hub; no change needed.

- [Structure] No change needed.

### N1542

Note: [[10.01.01 Representative Examples|10.01.01 Representative Examples]]  
Priority: low · Graph: no · Manim: no

Values are correct (water $T_c=647.1$ K, $P_c=220.6$ bar, Curie temperatures, $L\approx2257$ J/g); the closing paragraphs read as disclaimers more than explanation.

- [Simplify] Shorten the last two paragraphs ("The liquid–gas example gives a direct energy check..." and "For the magnetic example...") to one sentence each. The domain-cancellation point is worth keeping; the "no measured transition curve is supplied here" sentence is not.
- [Structure] Add a compact comparison table (system, order parameter, control variable, transition order, typical $T_c$) to summarize the four examples.

### N1543

Note: [[10.01.02 General Properties|10.01.02 General Properties]]  
Priority: low · Graph: no · Manim: no

Correct and balanced, with an appropriate caveat note.

- [Example] For "Universality", give one concrete example: the liquid–gas critical point of CO₂ and a uniaxial magnet share $\beta\approx0.33$ despite completely different microscopic physics.
- [Links] Link "Universality" to [[10.07.03 Universality and Universality Classes]] and "correlation length" to [[10.06.03 Correlation Function]].

### N1544

Note: [[10.02 Ehrenfest Classification|10.02 Ehrenfest Classification]]  
Priority: low · Graph: no · Manim: no

Clear hub with a correct definition (Ehrenfest 1933).

- [Structure] Remove the double blank line after Definition 10.1; otherwise no change needed.

### N1545

Note: [[10.02.01 First-Order Phase Transitions|10.02.01 First-Order Phase Transitions]]  
Priority: medium · Graph: yes · Manim: no

Correct ($\Delta v\approx RT/(PM)\approx1.70$ L/g verifies), but the main idea, two crossing Gibbs-energy branches, is only described in words.

- [Graph] Plot two schematic branches $G_1(T)$ and $G_2(T)$ at fixed $P$, crossing at $T_0$ with different slopes, and below them $S=-\partial G/\partial T$ of the stable branch, which jumps by $\Delta S=L/T_0$. Show the metastable continuations dashed to explain hysteresis.
- [Structure] In Example 10.1, $\Delta s$ is written without the `\thermal{}` macro, unlike all other entropies in the note; wrap it for consistency.
- [Simplify] The last paragraph ("The symbol for latent heat has two normalizations...") repeats the NOTE callout; delete it or fold it into the callout.

### N1546

Note: [[10.02.02 Continuous Transitions - Second Order|10.02.02 Continuous Transitions - Second Order]]  
Priority: medium · Graph: yes · Manim: no

Correct second-derivative formulas and a good remark on terminology; it needs a visual contrast of the possible singular forms.

- [Graph] Plot three schematic $C(T)$ curves near $T_c$: a finite jump (mean field, $\alpha=0$), a logarithmic divergence (2D Ising, $-\ln|t|$), and a finite cusp ($\alpha=-0.013$, helium-4), all on $-0.2\le t\le0.2$.
- [Simplify] Delete or shorten the last paragraph ("To distinguish a finite jump from a cusp... No such dataset is included here"). It adds no physics.
- [Intuition] Add a sentence that at a continuous transition the entropy curve $S(T)$ is continuous but has a kink or infinite slope, mirroring the jump shown in the first-order note.

### N1547

Note: [[10.02.03 Limits of the Ehrenfest Classification|10.02.03 Limits of the Ehrenfest Classification]]  
Priority: low · Graph: no · Manim: no

Correct and concise, though abstract.

- [Example] Make limit 1 concrete: the 2D Ising heat capacity diverges logarithmically, so no derivative of finite order simply "jumps"; and the BKT transition has all derivatives finite (essential singularity), so it has no finite Ehrenfest order.

### N1548

Note: [[10.03 Clausius–Clapeyron Equation|10.03 Clausius–Clapeyron Equation]]  
Priority: low · Graph: no · Manim: no

Clear section hub; no change needed.

- [Structure] No change needed.

### N1549

Note: [[10.03.01 Derivation|10.03.01 Derivation]]  
Priority: low · Graph: no · Manim: no

Correct, careful derivation with consistent molar quantities and a clear sign convention.

- [Intuition] Add one sentence of geometric picture: in the $(T,P)$ plane the two surfaces $\mu_\alpha(T,P)$ and $\mu_\beta(T,P)$ intersect along a curve, and the Clausius–Clapeyron slope is the direction of that intersection.
- [Example] Add a one-line numeric check for boiling water ($L=40.7$ kJ/mol, $T=373$ K, $\Delta v\approx30.6$ L/mol gives $dP/dT\approx3.6$ kPa/K) so the formula has a concrete magnitude.

### N1550

Note: [[10.03.02 Application - Vaporization Curve|10.03.02 Application - Vaporization Curve]]  
Priority: low · Graph: yes · Manim: no

Correct derivation of the integrated Clausius–Clapeyron law; it needs the plot it describes.

- [Graph] Plot $\ln(P/P_0)$ against $1/T$ for water with $L=40.7$ kJ/mol and reference $(373.15\,\text{K},101.325\,\text{kPa})$ over 280–450 K, and optionally overlay tabulated vapour pressures to show the slight curvature from a temperature-dependent $L$.
- [Example] Add a worked example: predict the boiling point at 70 kPa (about 3000 m altitude), which gives about 363 K.
- [Simplify] Shorten the final "proposed test" paragraph and remove "No vapor-pressure data or fitted slope is provided here."

### N1551

Note: [[10.03.03 Application - Melting Curve|10.03.03 Application - Melting Curve]]  
Priority: low · Graph: no · Manim: no

Correct; $\Delta v=-1.63\times10^{-6}$ m³/mol and $dP/dT\approx-1.35\times10^7$ Pa/K $\approx-133$ atm/K verify.

- [Simplify] The last two paragraphs repeat the dimensional and sign checks already implied by the example; merge them into two sentences.
- [Intuition] Give the reciprocal form $dT/dP\approx-7.5\,\text{mK/atm}$. It shows directly how small the pressure-melting effect is, which supports the ice-skating remark.

### N1552

Note: [[10.03.04 Clausius–Clapeyron Relation for Magnetic Fields|10.03.04 Clausius–Clapeyron Relation for Magnetic Fields]]  
Priority: medium · Graph: yes · Manim: no

The relation and its sign (with $G=U-TS-VHM$) verify, but the derivation is only described, not shown.

- [Simplify] Show the two-line derivation: $dG=-S\,dT-VM\,dH$, then $dG_{SC}=dG_N$ along $H_c(T)$, which gives $dH_c/dT=-(S_{SC}-S_N)/[V(M_{SC}-M_N)]$. This replaces the verbal "the conjugate magnetic work term... has a minus sign".
- [Graph] Plot $H_c(T)/H_c(0)=1-(T/T_c)^2$ and the normalized latent heat $L/(VH_c(0)^2/8\pi)=4x^2(1-x^2)$ against $x=T/T_c$ on $[0,1]$, showing the maximum at $x=1/\sqrt2$.
- [Structure] Merge the two unit callouts ("Unit and sign convention" and "Entropy-unit correction") into one; also add the SI form $L=-\mu_0VTH_c\,dH_c/dT$ here, as the exercise note does.

### N1553

Note: [[10.04 Phase Diagram|10.04 Phase Diagram]]  
Priority: low · Graph: no · Manim: no

Clear hub with a useful P–T versus P–V cross-check.

- [Structure] No change needed.

### N1554

Note: [[10.04.01 Triple Point and Critical Point|10.04.01 Triple Point and Critical Point]]  
Priority: low · Graph: no · Manim: no

Clear definitions and a useful correction to the source about the supercritical region; the triple-point pressure is an outdated value.

- [Correctness] $P_t=611.73\,\text{Pa}$ is an older value; the current IAPWS value for the triple point of water is $P_t=611.657\,\text{Pa}$ (with $T_t=273.16$ K).
- [Example] Add the water critical point ($T_c=647.1$ K, $P_c=22.06$ MPa, $\rho_c\approx322$ kg/m³) next to the triple point, so both special points have numbers in this note.
- [Simplify] The last paragraph repeats the correction callout and the NIST link context; shorten it to the link alone.

### N1555

Note: [[10.04.02 Gibbs Phase Rule|10.04.02 Gibbs Phase Rule]]  
Priority: low · Graph: no · Manim: no

Correct theorem and counting proof ($\varphi(C+1)-(\varphi-1)(C+2)=C-\varphi+2$); clear.

- [Example] Add one two-component example, for example a binary liquid in equilibrium with its vapour ($C=2$, $\varphi=2$, $\mathcal F=2$), to show where the mole fraction enters the count.

### N1556

Note: [[10.04.03 Phase Diagram in the P–T Plane|10.04.03 Phase Diagram in the P–T Plane]]  
Priority: low · Graph: no · Manim: no

Good schematic figure and correct topology; the text is clear.

- [Graph] Optionally add a dashed alternative melting line with negative slope (or a second panel) to show the water case beside the generic one, as the text discusses both.
- [Simplify] The "Critical-point condition" callout repeats the correction in [[10.04.01 Triple Point and Critical Point]]; replace it with a link.

### N1557

Note: [[10.04.04 P–V Diagram with Isotherms|10.04.04 P–V Diagram with Isotherms]]  
Priority: low · Graph: no · Manim: yes

Strong note with a correctly computed van der Waals figure (the plateau at $p\approx0.5045$ between $v\approx0.5534$ and $3.128$ verifies against the plotted coexistence curve).

- [Manim] Animate the reduced isotherm as $t$ decreases from 1.15 to 0.85. Show the van der Waals loop forming below $t=1$, the Maxwell plateau sliding to the equal-area position, and the plateau endpoints tracing the dashed coexistence dome.
- [Structure] The reduced variables $p,v,t$ in the equation are written without semantic macros, while $P,V,T$ are coloured; colour them consistently (for example `\mechanical{p}`).
- [Intuition] Add the lever rule, gas fraction $x_g=(v-v_L)/(v_G-v_L)$, to make "the gas fraction increases continuously from zero to one" quantitative.

### N1558

Note: [[10.05 Order Parameter and Spontaneous Symmetry Breaking|10.05 Order Parameter and Spontaneous Symmetry Breaking]]  
Priority: low · Graph: no · Manim: no

Clear hub; no change needed.

- [Structure] No change needed.

### N1559

Note: [[10.05.01 Definition of the Order Parameter|10.05.01 Definition of the Order Parameter]]  
Priority: low · Graph: no · Manim: no

Correct and careful definition with a good list of order-parameter types.

- [Structure] Replace the bullet list with a small table (system, order parameter, number of components, symmetry group); it connects directly to the universality classes in [[10.07.03 Universality and Universality Classes]].
- [Simplify] Shorten the final paragraph on the liquid–gas case: one sentence that the density difference has no exact microscopic $\mathbb Z_2$ (only an emergent one near $T_c$) is enough.

### N1560

Note: [[10.05.02 Examples of Order Parameters|10.05.02 Examples of Order Parameters]]  
Priority: low · Graph: no · Manim: no

Correct, with appropriate caveats on the schematic BCS formula and gauge symmetry.

- [Structure] The liquid–gas order parameter $\phi$ is written without the `\mechanical{}` macro used for $\phi$ in the neighbouring notes; make it consistent.
- [Simplify] Move the paragraph "For ferromagnetic positive exchange energy..." up into the Ising section, where it belongs, and delete the duplicated unit remarks in the final paragraph.
- [Links] Link the Ising Hamiltonian to [[11.01.01 Hamiltonian and Spin Variables]] and note that chapter 11 writes the spins as $\sigma_i$ rather than $s_i$.

### N1561

Note: [[10.05.03 Spontaneous Symmetry Breaking|10.05.03 Spontaneous Symmetry Breaking]]  
Priority: medium · Graph: yes · Manim: yes

Correct, and the order-of-limits paragraph is good, but the double-well picture that drives the argument is missing.

- [Graph] Plot $F(\phi)=a\phi^2+b\phi^4-h\phi$ with $a<0$, $b>0$ for $h=0$ and a small $h>0$, showing that the tilt makes one minimum the global one.
- [Manim] Animate the order of limits: a ball in the tilted double well settles in the right minimum; then $h\to0$ while the barrier (which grows with $N$) stays high, so the ball stays there. Contrast this with a small-$N$ case where it hops between the wells.
- [Example] State the order of limits as a formula: $m_s=\lim_{h\to0^+}\lim_{N\to\infty}m(h,N)\ne0$, whereas $\lim_{N\to\infty}\lim_{h\to0}m=0$.

### N1562

Note: [[10.05.04 Temperature Dependence of the Order Parameter|10.05.04 Temperature Dependence of the Order Parameter]]  
Priority: low · Graph: no · Manim: no

Clear, with a good figure and a correct caption.

- [Simplify] Shorten the final two paragraphs ("The power law is an asymptotic statement..." and "As a reconstruction check...") into one; they mostly restate the caption.

### N1563

Note: [[10.06 Critical Point and Fluctuations|10.06 Critical Point and Fluctuations]]  
Priority: low · Graph: no · Manim: no

Clear hub; no change needed.

- [Structure] No change needed.

### N1564

Note: [[10.06.01 Critical Opalescence|10.06.01 Critical Opalescence]]  
Priority: medium · Graph: yes · Manim: no

Correct physics, but the key quantitative link, the Ornstein–Zernike form, is missing, and the normalization caveats are heavy.

- [Intuition] Add the Ornstein–Zernike form $S(q)\propto\kappa_T/(1+q^2\xi^2)$. It explains both the strong forward scattering ($q\xi\ll1$) and why the turbidity grows as $\xi$ approaches the wavelength of light.
- [Graph] Plot $S(q)/S_0$ against $q\xi_0$ on log-log axes for $\xi/\xi_0=1,10,100$ using the Ornstein–Zernike form with $S(0)\propto\xi^{2}$, showing the growing small-angle peak.
- [Simplify] Condense the normalization paragraph and the finite-sample paragraph to two sentences; they distract from the main idea.

### N1565

Note: [[10.06.02 Divergence of Response Functions|10.06.02 Divergence of Response Functions]]  
Priority: low · Graph: yes · Manim: no

Correct with a useful caveat; it lacks the fluctuation–response link that the hub note promises.

- [Intuition] Add the fluctuation–response relation $\kappa_T=V\langle(\Delta N)^2\rangle/(k_BT\langle N\rangle^2)$ (or $\chi\propto\langle M^2\rangle-\langle M\rangle^2$), which explains why a large response means large fluctuations.
- [Graph] Plot $\kappa_T$ against $t$ on $-0.1\le t\le0.1$ for $\gamma=1$ (mean field) and $\gamma=1.24$ (3D Ising), with different amplitudes on the two sides.

### N1566

Note: [[10.06.03 Correlation Function|10.06.03 Correlation Function]]  
Priority: medium · Graph: yes · Manim: no

Correct definitions and scaling forms; a plot would make the crossover from power-law to exponential decay much clearer.

- [Graph] Plot $G(r)=e^{-r/\xi}/r^{d-2+\eta}$ ($d=3$, $\eta=0.036$) on log-log axes for $\xi=5,20,\infty$ over $1\le r\le200$, showing the common power-law part and the cutoff at $r\approx\xi$.
- [Simplify] The last paragraph on units and finite samples repeats [[10.07.01 Definition of Critical Exponents]]; shorten it.

### N1567

Note: [[10.06.04 Specific Heat near the Lambda Transition|10.06.04 Specific Heat near the Lambda Transition]]  
Priority: high · Graph: yes · Manim: no

The text is correct, but the figure shows the wrong asymmetry for helium-4, is close to unreadable for $\alpha=-0.013$, and its 1001-point curves inflate the note to 85 kB.

- [Correctness] Fig. 10.4 puts the $T>T_\lambda$ branch above the $T<T_\lambda$ branch at equal $|t|$ ($A_->A_+$ in $C=C_c-A_\pm|t|^{0.013}$). For helium-4 the measured heat capacity is larger below $T_\lambda$ (Lipa et al.: $A^+/A^-\approx1.05$ in $C=B+(A^\pm/\alpha)|t|^{-\alpha}$, with $\alpha<0$). Swap the amplitudes so the figure shows the lambda shape.
- [Graph] With exponent 0.013, the linear-$T$ plot shows a nearly vertical drop within $10^{-14}$ of $T_\lambda$. Replace it with (or add) a plot of $C$ against $\log_{10}|t|$ for $10^{-9}\le|t|\le10^{-2}$, where the two branches appear as gently curving lines approaching the finite value $C_c$. This is how the orbital data are usually shown.
- [Structure] Replace the two embedded 1001-point `curve` elements with `functiongraph` expressions (for example `f:3-1.2*abs(x-1)^0.013`). This cuts the note from about 85 kB to a few kB.
- [Simplify] The note uses both $T_c$ (in $t$) and $T_\lambda$ (in the figure) for the same temperature; use $T_\lambda$ throughout, or state $T_c\equiv T_\lambda$ once.

### N1568

Note: [[10.07 Critical Exponents|10.07 Critical Exponents]]  
Priority: low · Graph: no · Manim: no

Clear hub; no change needed.

- [Structure] No change needed.

### N1569

Note: [[10.07.01 Definition of Critical Exponents|10.07.01 Definition of Critical Exponents]]  
Priority: low · Graph: yes · Manim: no

Correct and complete definitions with good path warnings.

- [Graph] Add one log-log plot of $|m|$ against $-t$ for $\beta=1/2$ (mean field), $0.326$ (3D Ising) and $1/8$ (2D Ising), to show how the exponent changes the shape near $T_c$.
- [Structure] Add a small table with one row per exponent (observable, path, mean-field value, 3D Ising value) beside the aligned equations.

### N1570

Note: [[10.07.02 Scaling Relations|10.07.02 Scaling Relations]]  
Priority: medium · Graph: no · Manim: no

Correct relations and a clear Fisher derivation, but one historical date is wrong and the Widom and Josephson relations are stated without motivation.

- [Correctness] "Fisher relation (1969)": Fisher derived $\gamma=\nu(2-\eta)$ in 1964 (J. Math. Phys. 5, 944); correct the year.
- [Intuition] Add the Widom scaling hypothesis $f_s(t,h)=|t|^{2-\alpha}\Phi(h/|t|^{\Delta})$ in one line. Rushbrooke and Widom then follow by differentiation, which explains why they hold together.
- [Example] Add a small check table that inserts the 3D Ising values ($\alpha=0.110$, $\beta=0.326$, $\gamma=1.237$, $\nu=0.630$, $\eta=0.036$, $d=3$) into all four relations, to show agreement within rounding.

### N1571

Note: [[10.07.03 Universality and Universality Classes|10.07.03 Universality and Universality Classes]]  
Priority: medium · Graph: no · Manim: no

Good structure and evidence-status discussion, but some theory rows of Table 10.1 are outdated.

- [Correctness] The Heisenberg row ($\alpha=-0.122$, $\nu=0.707$) uses old estimates; current values are $\nu\approx0.711$, $\alpha\approx-0.134$, $\beta\approx0.369$, $\gamma\approx1.396$, $\delta\approx4.78$, $\eta\approx0.038$. For 3D XY, theory gives $\alpha\approx-0.015$ and $\delta\approx4.78$ (the $-0.013$ is the helium-4 experimental value). Update the rows or mark them as dated.
- [Simplify] The paragraphs "Read the table as..." and "As a check..." can be merged; keep the evidence-status point and remove the repetition about rounding.
- [Intuition] Add one sentence explaining why the liquid–gas point is in the Ising class (lattice-gas mapping: occupied or empty sites correspond to spin up or down), not only stating that it is.

### N1572

Note: [[10.08 Landau Theory of Phase Transitions|10.08 Landau Theory of Phase Transitions]]  
Priority: low · Graph: no · Manim: no

Clear hub; no change needed.

- [Structure] Remove the double blank line after the first paragraph; otherwise no change needed.

### N1573

Note: [[10.08.01 Landau Free Energy|10.08.01 Landau Free Energy]]  
Priority: medium · Graph: yes · Manim: no

Correct and careful, but the note has no picture of the free-energy landscape that the whole theory relies on.

- [Graph] Plot $F-F_0=a\phi^2+b\phi^4$ ($b=1$) for $a=+1,0,-1$ on $-1.5\le\phi\le1.5$, and a second panel with $b=-1$, $c=1$ for $a=0.5,0.25,0$ to preview the first-order case.
- [Simplify] The last two paragraphs repeat the symmetry and stability arguments of the main text; compress them to two sentences.

### N1574

Note: [[10.08.02 Second-Order Transition|10.08.02 Second-Order Transition]]  
Priority: medium · Graph: yes · Manim: yes

All results verify ($F_{eq}=-a_0^2(T-T_c)^2/4b$, $\Delta C=T_ca_0^2/2b$, curvature $-4a$ below $T_c$); the closing paragraphs state formulas in words.

- [Simplify] Replace the verbal paragraphs ("substituting its defining squared magnitude into the curvature gives minus four times the quadratic coefficient...") with the equations $F''(\phi_{eq})=-4a$ and $\chi^{-1}=2a$ (above), $-4a$ (below).
- [Graph] Plot three stacked panels against $T/T_c$ on $[0.5,1.5]$: $\phi_{eq}$, $F_{eq}-F_0$, and $C-C_0$ showing the jump $\Delta C$.
- [Manim] Animate $F(\phi)$ as $T$ sweeps from $1.3T_c$ to $0.7T_c$: the single well flattens at $T_c$ and splits into two, and a marker follows the minimum continuously.

### N1575

Note: [[10.08.03 First-Order Transition in Landau Theory|10.08.03 First-Order Transition in Landau Theory]]  
Priority: medium · Graph: yes · Manim: yes

All conditions verify ($a_{sp}=b^2/3c$, $a_{coex}=b^2/4c$, $\phi_0^2=-b/2c$, curvature $2b^2/c$), but the key ordering is again written in words.

- [Simplify] Replace "The exact ordering of quadratic coefficients is the squared quartic coefficient divided by three times..." with $b^2/(3c)>b^2/(4c)>0$ and the corresponding $T_{sp,upper}>T_{coex}>T_{sp,lower}$.
- [Graph] Plot $F(\phi)$ for $b=-1$, $c=1$ at $a=1/3$ (inflection appears), $a=1/4$ (three equal minima), $a=0.1$, and $a=0$ (origin loses stability), on $-1.2\le\phi\le1.2$.
- [Manim] Animate decreasing $a$ through these values, showing side minima appearing, becoming degenerate with the origin, and the equilibrium state jumping from $\phi=0$ to $\pm\phi_0$. Optionally show a hysteresis loop on heating.

### N1576

Note: [[10.08.04 Critical Mean-Field Exponents|10.08.04 Critical Mean-Field Exponents]]  
Priority: low · Graph: yes · Manim: no

Correct and compact; the amplitude ratio 2 and the Rushbrooke and Widom checks verify.

- [Graph] Plot $2a_0T_c\chi$ against $t$ on $[-0.2,0.2]$ showing the branches $1/t$ and $1/(2|t|)$, which makes the amplitude ratio visible.
- [Simplify] The last paragraph repeats the critical-isotherm derivation; remove it or cut it to one sentence.

### N1577

Note: [[10.09 van der Waals Model and the Ferromagnet Analogy|10.09 van der Waals Model and the Ferromagnet Analogy]]  
Priority: low · Graph: no · Manim: no

Clear hub that states the analogy well.

- [Structure] Add a two-column dictionary table (fluid and magnet: $\rho_L-\rho_G$ and $m$, $P-P_c(T)$ and $h$, $\kappa_T$ and $\chi$, coexistence line and $h=0$ for $T<T_c$) to make the analogy explicit.

### N1578

Note: [[10.09.01 van der Waals Equation|10.09.01 van der Waals Equation]]  
Priority: low · Graph: no · Manim: no

Correct critical constants and reduced equation.

- [Example] Add the critical compressibility factor $Z_c=P_cv_c/(RT_c)=3/8$ and compare it with real fluids ($\approx0.23$–$0.29$). This is the simplest quantitative test of the model.
- [Simplify] The final two paragraphs restate unit checks and the Maxwell caveat already given elsewhere; shorten them.

### N1579

Note: [[10.09.02 Law of Corresponding States|10.09.02 Law of Corresponding States]]  
Priority: low · Graph: yes · Manim: no

Clear distinction between corresponding states and universality.

- [Graph] Plot the reduced coexistence curve $T/T_c$ against $\rho/\rho_c$ for the van der Waals model, with Guggenheim's empirical noble-gas fit $\rho_{L,G}/\rho_c=1+\tfrac34(1-T/T_c)\pm\tfrac74(1-T/T_c)^{1/3}$ overlaid. It shows both the data collapse and the non-mean-field exponent.

### N1580

Note: [[10.09.03 Critical van der Waals Exponents|10.09.03 Critical van der Waals Exponents]]  
Priority: low · Graph: yes · Manim: no

Correct expansion and exponents; the coexistence width $2\sqrt{-t}$ verifies.

- [Graph] Plot the exact van der Waals coexistence volumes from the Maxwell construction against the leading form $1\pm2\sqrt{-t}$ for $-0.2\le t\le0$, to show where the asymptotic result holds.
- [Simplify] The last two paragraphs repeat the order-counting argument in words; replace them with the one line: $t\epsilon\sim\epsilon^3\sim|t|^{3/2}$, while $t\epsilon^2,\epsilon^4\sim t^2$.

### N1581

Note: [[10.09.04 Maxwell Construction|10.09.04 Maxwell Construction]]  
Priority: low · Graph: yes · Manim: yes

Correct, and the free-energy explanation of the equal-area rule is good.

- [Graph] Plot the $t=0.9$ reduced isotherm with the two equal areas shaded between the loop and the plateau, and the spinodal points marked.
- [Manim] Animate a horizontal line sliding in pressure while the two enclosed areas are computed live, stopping where they are equal. An inset can show $\mu(P)$ with the two branches crossing at the same pressure.

### N1582

Note: [[10.10 Worked Problems|10.10 Worked Problems]]  
Priority: low · Graph: no · Manim: no

Useful problem hub with good guidance; no change needed.

- [Structure] No change needed.

### N1583

Note: [[10.11 Notes on the Renormalization Group|10.11 Notes on the Renormalization Group]]  
Priority: low · Graph: no · Manim: no

Clear hub; no change needed.

- [Structure] No change needed.

### N1584

Note: [[10.11.01 Basic Idea|10.11.01 Basic Idea]]  
Priority: medium · Graph: no · Manim: yes

Correct but abstract; a concrete coarse-graining example would make the idea much easier to grasp.

- [Manim] Animate majority-rule block-spin coarse graining ($3\times3$ blocks) on Ising configurations at $T<T_c$, $T=T_c$, and $T>T_c$. After repeated steps the first flows to all aligned, the last to random noise, and the critical one keeps looking statistically the same.
- [Example] Add the exact 1D decimation result $\tanh K'=\tanh^2K$ as a worked example of one RG step. It shows the flow to $K=0$ and hence no transition at $T>0$, linking to [[11.02 Ising Model in One Dimension]].

### N1585

Note: [[10.11.02 Fixed Points and Critical Exponents|10.11.02 Fixed Points and Critical Exponents]]  
Priority: medium · Graph: yes · Manim: no

Correct relations ($\nu=1/y_t$, $\eta=d+2-2y_h$), but the derivation of the second relation is only asserted.

- [Graph] Plot an RG recursion map $K'(K)$ against $K$ with the diagonal, for example the Migdal–Kadanoff 2D Ising map $K'=\tfrac12\ln\cosh(4K)$ for $b=2$. Show the unstable fixed point $K^*$ and the flows to $0$ and $\infty$; the slope at $K^*$ gives $y_t$.
- [Simplify] Replace the verbal "To reconstruct the thermal relation" paragraph with the equation chain $\xi(t)=b\,\xi(b^{y_t}t)\Rightarrow\xi\propto|t|^{-1/y_t}$.
- [Intuition] Add one line for $\eta$: $G(r)$ scales as $b^{-2(d-y_h)}$, so $d-2+\eta=2(d-y_h)$.

### N1586

Note: [[10.11.03 ε Expansion|10.11.03 ε Expansion]]  
Priority: low · Graph: yes · Manim: no

Correct coefficients ($\nu=\tfrac12+\tfrac{n+2}{4(n+8)}\epsilon$, $\eta=\tfrac{n+2}{2(n+8)^2}\epsilon^2$) and a good caution about extrapolation.

- [Graph] Plot first-order $\nu(n)$ at $\epsilon=1$ for $n=1,2,3$ together with the accepted values (0.630, 0.672, 0.711), to show the size of the leading-order error.
- [Intuition] Add one sentence on why $d=4$ is special: the $\phi^4$ coupling has scaling dimension $\epsilon$, so it is marginal at $d=4$ and the Wilson–Fisher fixed point sits at $u^*=O(\epsilon)$.

### N1587

Note: [[02 Physics/02 Thermodynamics and Statistical Mechanics/10 Phase Transitions/10.12 Summary|10.12 Summary]]  
Priority: low · Graph: no · Manim: no

Accurate and well organized summary.

- [Links] Add links from each bullet to its section note (for example [[10.03.01 Derivation]], [[10.07.02 Scaling Relations]], [[10.08.02 Second-Order Transition]]).

### N1588

Note: [[10.01 Water Phase Diagram|10.01 Water Phase Diagram]]  
Priority: low · Graph: yes · Manim: no

Correct calculation; it uses the same outdated triple-point pressure as the main note.

- [Correctness] $P_t=611.73\,\text{Pa}$ is outdated; the current IAPWS value is $611.657\,\text{Pa}$ (the rounded $\approx6.12$ mbar is unchanged).
- [Graph] Add a schematic water P–T diagram (log pressure axis) with a negative-slope ice-I melting line, the triple point, the critical point, and labels for the high-pressure ice phases, which the generic figure in [[10.04.03 Phase Diagram in the P–T Plane]] cannot show.
- [Simplify] The final two paragraphs before "Solution" repeat the dimensional check from [[10.03.03 Application - Melting Curve]]; replace them with a link.

### N1589

Note: [[10.02 Mean-Field Ising Exponents|10.02 Mean-Field Ising Exponents]]  
Priority: low · Graph: yes · Manim: no

Correct; $m^2\approx-3t$, $\chi^-=1/(2k_BT_c|t|)$, and $m^3\approx3h$ verify.

- [Graph] Plot the graphical solution of $m=\tanh(m\,T_c/T)$: the line $y=m$ and $y=\tanh(m/\tau)$ for $\tau=T/T_c=0.8,1.0,1.2$ on $-1.5\le m\le1.5$, showing the appearance of nonzero intersections below $T_c$.
- [Simplify] In the susceptibility section, show the denominator step $k_BT-zJ(1-m^2)=k_BT_c(t+m^2)=-2k_BT_ct$ explicitly, so that the factor 2 below $T_c$ is visible.

### N1590

Note: [[10.03 Superconducting Transition Heat|10.03 Superconducting Transition Heat]]  
Priority: low · Graph: yes · Manim: no

Correct; the maximum $H_c^2(0)/(8\pi)$ at $T_c/\sqrt2$ and the SI form verify.

- [Graph] Plot $L/V$ normalized by $H_c^2(0)/(8\pi)$, that is $4x^2(1-x^2)$, against $x=T/T_c$ on $[0,1]$ with the maximum marked.
- [Simplify] The last paragraph before "Solution" repeats the maximum check in words; shorten it to one sentence.

### N1591

Note: [[10.04 Scaling Relations for the Two-Dimensional Ising Model|10.04 Scaling Relations for the Two-Dimensional Ising Model]]  
Priority: low · Graph: no · Manim: no

Correct and clear arithmetic check of all four relations.

- [Example] Add the mean-field Josephson counterexample as a displayed equation ($2-0\ne\tfrac12\cdot2$) instead of describing it only in words.
