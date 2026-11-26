---
title: "Note Improvement Tracker – 02 Physics/02 Thermodynamics and Statistical Mechanics/11 Ising Model"
---

> [!TLDR]
> This note tracks the review of the 37 notes in `02 Physics/02 Thermodynamics and Statistical Mechanics/11 Ising Model`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 6 possible errors or notation conflicts. 6 of them are verified (6 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N1607|N1607]] 11.03.04 Critical Mean-Field Exponents: Symbol clash: the exponent table writes $\beta=1/2$ (uncoloured) while the same note uses $\thermal{\beta}$ for inverse temperature in (11.7); use $\beta_{\mathrm c}$ as in \[\[11.03.02 Analysis of the Self-Consistency Equation\]\] or add the disambiguation sentence used in \[\[11.04.03 Exact Critical Exponents in Two Dimensions\]\]. **Fixed:** Added the disambiguation sentence after the exponent table, as in 11.04.03
- [[#N1613|N1613]] 11.04.04 Spontaneous Magnetization - Yang's Result: Fig. 11.5 caption says "Spontaneous magnetization versus reduced temperature", but the horizontal axis is $T/T_c$, not the reduced temperature $t=(T-T_c)/T_c$ defined in the chapter; change the caption to "versus $T/T_c$". **Fixed:** Caption now says versus T/T_c
- [[#N1622|N1622]] 11.07 Worked Examples: Symbol clash: Example 11.3 uses $\magnetic{m}_0=0.5$ for the starting iterate, while Example 11.4 (and \[\[11.04.04 Spontaneous Magnetization - Yang's Result\]\]) uses $\magnetic{m}_0$ for the spontaneous magnetization; rename the iterates to $m^{(0)},m^{(1)},\dots$. **Fixed:** Renamed iterates to m^(0), m^(1), m^(2), m^(3), m^(infinity); updated the table description
- [[#N1627|N1627]] 11.04 Mean-Field Susceptibility above and below the Critical Temperature: The physical-quantities table lists $\magnetic{m}_0$ and $\magnetic{m}_{\mathrm s}$, which the note never uses; reduce the row to $\magnetic{m}$. **Fixed:** Reduced the row to m
- [[#N1628|N1628]] Ising mean field and transfer-matrix calculations: "Mean-field approximation": with $\energy{H}=-\energy{J}\sum_{\langle ij\rangle}\sigma_i\sigma_j$ (each pair once) the mean-field equation is $\bar\sigma=\tanh[\thermal{\beta}(q\energy{J}\bar\sigma+\energy{h})]$, so $\thermal{k}_{\mathrm B}\thermal{T}_{\mathrm c}=q\energy{J}$, not $q\energy{J}/2$; the factor $1/2$ belongs only in $\energy{U}=-Nq\energy{J}\bar\sigma^2/2$. Consequently the heat-capacity jump is $\tfrac32N\thermal{k}_{\mathrm B}$ (not $3N\thermal{k}_{\mathrm B}$) and the susceptibility prefactor is $N\magnetic{\mu}^2/(\energy{J}q)$ (not $2N\magnetic{\mu}^2/(\energy{J}q)$); fix these or state explicitly that the notebook's convention double-counts pairs. **Fixed:** Re-derived: k_BT_c=qJ, jump (3/2)Nk_B, prefactor N mu^2/(Jq); stated the correct mean-field equation and kept the notebook convention as a remark
- [[#N1628|N1628]] Ising mean field and transfer-matrix calculations: Physical-quantities table lists symbols the note never uses or uses differently: Planck's constant as $\energy{h}$ (clashes with the Ising field parameter; only $\energy{\hbar}$ appears), Landé $g$, internal partition function $j$, internal degeneracy $g$ (clashes with density of states $g(\energy{E})$), $\energy{F}$; and $\thermal{T}_{\mathrm c}$ is described as "onset of macroscopic ground-state occupation". Remove unused rows and fix the description. **Fixed:** Removed Planck h, Lande g, j, internal degeneracy g, F; T_c description now Ising ordering; removed the Planck note from the h row

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N1592 | [[11.00 Ising Model\|11.00 Ising Model]] | Analyzed | low | no | no | [[#N1592\|View]] |
| N1593 | [[11.01 Model Definition\|11.01 Model Definition]] | Analyzed | low | no | no | [[#N1593\|View]] |
| N1594 | [[11.01.01 Hamiltonian and Spin Variables\|11.01.01 Hamiltonian and Spin Variables]] | Analyzed | low | no | no | [[#N1594\|View]] |
| N1595 | [[11.01.02 Lattice and Coordination Number\|11.01.02 Lattice and Coordination Number]] | Analyzed | low | no | no | [[#N1595\|View]] |
| N1596 | [[11.01.03 ℤ₂ Symmetry\|11.01.03 ℤ₂ Symmetry]] | Analyzed | low | no | yes | [[#N1596\|View]] |
| N1597 | [[11.02 Ising Model in One Dimension\|11.02 Ising Model in One Dimension]] | Analyzed | low | yes | no | [[#N1597\|View]] |
| N1598 | [[11.02.01 Solution by Recursion\|11.02.01 Solution by Recursion]] | Analyzed | low | no | yes | [[#N1598\|View]] |
| N1599 | [[11.02.02 Transfer-Matrix Method\|11.02.02 Transfer-Matrix Method]] | Analyzed | low | yes | no | [[#N1599\|View]] |
| N1600 | [[11.02.03 Helmholtz Free Energy\|11.02.03 Helmholtz Free Energy]] | Analyzed | low | yes | no | [[#N1600\|View]] |
| N1601 | [[11.02.04 Magnetization and Susceptibility\|11.02.04 Magnetization and Susceptibility]] | Analyzed | low | yes | no | [[#N1601\|View]] |
| N1602 | [[11.02.05 Correlation Function and Correlation Length\|11.02.05 Correlation Function and Correlation Length]] | Analyzed | low | yes | yes | [[#N1602\|View]] |
| N1603 | [[11.03 Mean-Field Approximation\|11.03 Mean-Field Approximation]] | Analyzed | low | no | no | [[#N1603\|View]] |
| N1604 | [[11.03.01 Derivation of the Self-Consistency Equation\|11.03.01 Derivation of the Self-Consistency Equation]] | Analyzed | low | no | no | [[#N1604\|View]] |
| N1605 | [[11.03.02 Analysis of the Self-Consistency Equation\|11.03.02 Analysis of the Self-Consistency Equation]] | Analyzed | medium | yes | yes | [[#N1605\|View]] |
| N1606 | [[11.03.03 Landau Free Energy and the Phase Transition\|11.03.03 Landau Free Energy and the Phase Transition]] | Analyzed | low | yes | yes | [[#N1606\|View]] |
| N1607 | [[11.03.04 Critical Mean-Field Exponents\|11.03.04 Critical Mean-Field Exponents]] | Analyzed | medium | yes | no | [[#N1607\|View]] |
| N1608 | [[11.03.05 Limits of the Mean-Field Approximation\|11.03.05 Limits of the Mean-Field Approximation]] | Analyzed | low | yes | no | [[#N1608\|View]] |
| N1609 | [[11.04 Ising Model in Two Dimensions\|11.04 Ising Model in Two Dimensions]] | Analyzed | low | no | no | [[#N1609\|View]] |
| N1610 | [[11.04.01 Onsager Solution\|11.04.01 Onsager Solution]] | Analyzed | low | yes | no | [[#N1610\|View]] |
| N1611 | [[11.04.02 Kramers–Wannier Duality\|11.04.02 Kramers–Wannier Duality]] | Analyzed | medium | yes | yes | [[#N1611\|View]] |
| N1612 | [[11.04.03 Exact Critical Exponents in Two Dimensions\|11.04.03 Exact Critical Exponents in Two Dimensions]] | Analyzed | low | yes | no | [[#N1612\|View]] |
| N1613 | [[11.04.04 Spontaneous Magnetization - Yang's Result\|11.04.04 Spontaneous Magnetization - Yang's Result]] | Analyzed | medium | yes | no | [[#N1613\|View]] |
| N1614 | [[11.05 Spontaneous Symmetry Breaking\|11.05 Spontaneous Symmetry Breaking]] | Analyzed | low | no | no | [[#N1614\|View]] |
| N1615 | [[11.05.01 Mechanism of Spontaneous Breaking\|11.05.01 Mechanism of Spontaneous Breaking]] | Analyzed | medium | yes | yes | [[#N1615\|View]] |
| N1616 | [[11.05.02 Physical Interpretation - Equilibrium States and Domains\|11.05.02 Physical Interpretation - Equilibrium States and Domains]] | Analyzed | low | no | yes | [[#N1616\|View]] |
| N1617 | [[11.05.03 Order Parameter and Phase Transition\|11.05.03 Order Parameter and Phase Transition]] | Analyzed | medium | yes | no | [[#N1617\|View]] |
| N1618 | [[11.06 Extensions of the Ising Model\|11.06 Extensions of the Ising Model]] | Analyzed | low | no | no | [[#N1618\|View]] |
| N1619 | [[11.06.01 Potts Model\|11.06.01 Potts Model]] | Analyzed | low | yes | no | [[#N1619\|View]] |
| N1620 | [[11.06.02 XY Model\|11.06.02 XY Model]] | Analyzed | medium | yes | yes | [[#N1620\|View]] |
| N1621 | [[11.06.03 Heisenberg Model\|11.06.03 Heisenberg Model]] | Analyzed | low | no | no | [[#N1621\|View]] |
| N1622 | [[11.07 Worked Examples\|11.07 Worked Examples]] | Analyzed | low | yes | no | [[#N1622\|View]] |
| N1623 | [[11.08 Summary and Connections\|11.08 Summary and Connections]] | Analyzed | low | no | no | [[#N1623\|View]] |
| N1624 | [[11.01 Internal Energy and Heat Capacity in a Field\|99 Exercises/11.01 Internal Energy and Heat Capacity in a Field]] | Analyzed | low | yes | no | [[#N1624\|View]] |
| N1625 | [[11.02 Mean-Field Magnetization near the Critical Temperature\|99 Exercises/11.02 Mean-Field Magnetization near the Critical Temperature]] | Analyzed | low | yes | no | [[#N1625\|View]] |
| N1626 | [[11.03 Critical Temperature of the Triangular Lattice\|99 Exercises/11.03 Critical Temperature of the Triangular Lattice]] | Analyzed | low | no | no | [[#N1626\|View]] |
| N1627 | [[11.04 Mean-Field Susceptibility above and below the Critical Temperature\|99 Exercises/11.04 Mean-Field Susceptibility above and below the Critical Temperature]] | Analyzed | low | yes | no | [[#N1627\|View]] |
| N1628 | [[Ising mean field and transfer-matrix calculations\|Ising mean field and transfer-matrix calculations]] | Analyzed | high | yes | no | [[#N1628\|View]] |

## Suggestions

### N1592

Note: [[11.00 Ising Model|11.00 Ising Model]]  
Priority: low · Graph: no · Manim: no

Clear chapter hub with correct history (Lenz 1920, Ising 1925, Onsager 1944).

- [Structure] No change needed.

### N1593

Note: [[11.01 Model Definition|11.01 Model Definition]]  
Priority: low · Graph: no · Manim: no

Clear hub; no change needed.

- [Structure] No change needed.

### N1594

Note: [[11.01.01 Hamiltonian and Spin Variables|11.01.01 Hamiltonian and Spin Variables]]  
Priority: low · Graph: no · Manim: no

Correct definition with good sign checks.

- [Example] Add a worked example: a 3-spin chain (or a $2\times2$ periodic square lattice), listing all configurations and energies, so the reader sees the $2^N$ counting and the bond energies $\mp J$ concretely.

### N1595

Note: [[11.01.02 Lattice and Coordination Number|11.01.02 Lattice and Coordination Number]]  
Priority: low · Graph: no · Manim: no

Correct table ($z$ and $Nz/2$ for all six lattices) and a clear boundary remark.

- [Structure] Add a small figure of the square and triangular lattices with one site's neighbours highlighted, to make "same $z$, different geometry" visible.

### N1596

Note: [[11.01.03 ℤ₂ Symmetry|11.01.03 ℤ₂ Symmetry]]  
Priority: low · Graph: no · Manim: yes

Correct and clear; the figure is accurate (net $+6$ of 36 spins), but its JSON is pretty-printed over about 1600 lines.

- [Structure] Compact the Graphs JSON (one element per line, as in the chapter 10 figures); the note shrinks from 25 kB to a few kB and becomes easier to edit.
- [Manim] Animate the 6×6 configuration under a global flip (all arrows reverse while a bond-energy counter stays constant) and then under a single-site flip (the counter changes by $2J$ times the number of satisfied minus unsatisfied bonds at that site).
- [Simplify] The statement $\langle\sigma_i\rangle=0$ holds for any flip-symmetric boundary condition (free or periodic), not only periodic ones; say so to avoid implying that periodicity is required.

### N1597

Note: [[11.02 Ising Model in One Dimension|11.02 Ising Model in One Dimension]]  
Priority: low · Graph: yes · Manim: no

Clear hub with a good reading guide; the quantity table mentions a critical-value subscript that the note never uses.

- [Graph] Add the key exact result as a plot: correlation length $\xi/a=-1/\ln\tanh(J/k_BT)$ against $k_BT/J$ on $[0.2,3]$, which grows exponentially as $T\to0$ but stays finite for every $T>0$.
- [Structure] The table entry for $T$ says "a c subscript marks a critical value", but no $T_c$ appears in this note; remove that clause.

### N1598

Note: [[11.02.01 Solution by Recursion|11.02.01 Solution by Recursion]]  
Priority: low · Graph: no · Manim: yes

Short, correct derivation of the reduced-sum recursion with good checks ($Z_n(s)=2^{n-1}$ at $J=h=0$ verifies).

- [Example] Add a two-step worked case at $h=0$: $Z_2(\pm1)=e^{\beta J}+e^{-\beta J}=2\cosh\beta J$, and $Z_3(s)=(2\cosh\beta J)^2$, so the reader sees the recursion produce a closed form before the matrix language appears.
- [Intuition] State explicitly that the recursion is the vector equation $\mathbf Z_{n+1}=\mathbf T^{\mathsf T}\mathbf Z_n$ with $\mathbf Z_n=(Z_n(+),Z_n(-))$, which makes the bridge to \[\[11.02.02 Transfer-Matrix Method\]\] immediate.
- [Manim] Animate a chain growing one site at a time, with the two-component vector $(Z_n(+),Z_n(-))$ updated at each attachment, to show that only the end spin carries information forward.
- [Structure] The physical-quantity table lists $\thermal{T}$ with "a c subscript marks a critical value", but no critical temperature appears in this note; trim the description.

### N1599

Note: [[11.02.02 Transfer-Matrix Method|11.02.02 Transfer-Matrix Method]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; the characteristic polynomial, eigenvalues (11.3) and the $J=0$ limit all verify.

- [Example] Add the explicit $N=2$ check $\operatorname{Tr}\mathbf T^2=e^{2\beta(J+h)}+e^{2\beta(J-h)}+2e^{-2\beta J}$ and match it to the four periodic configurations, so the trace-as-sum claim is seen directly.
- [Graph] Plot $\lambda_+$ and $\lambda_-$ from (11.3) versus $\beta h\in[-3,3]$ for $\beta J=0.5$ and $\beta J=-0.5$, showing the gap $\lambda_+>|\lambda_-|$ never closes at finite temperature (the key fact behind analyticity).
- [Intuition] Add one sentence explaining why the trace imposes periodicity: $(\mathbf T^N)_{ss}$ sums all paths that start and end on the same spin value.

### N1600

Note: [[11.02.03 Helmholtz Free Energy|11.02.03 Helmholtz Free Energy]]  
Priority: low · Graph: yes · Manim: no

Correct and compact; both limiting checks ($f\to-J$ and $f=-k_BT\ln2$) verify.

- [Graph] Plot $f/J$ from (11.4) versus $k_BT/J\in[0.05,4]$ for $h/J=0,0.5,1$, showing smooth curves with no kink, which visualizes Remark 11.2.
- [Intuition] Explain briefly why a $2\times2$ matrix cannot produce a transition: a singularity would need $\lambda_+=|\lambda_-|$, which Perron–Frobenius forbids for a strictly positive matrix at $T>0$; this gives the reason behind the analyticity remark rather than only the statement.
- [Example] Add a numerical illustration of the finite-size correction, e.g. for $\beta J=1$, $h=0$: $(\lambda_-/\lambda_+)^N=\tanh^N 1\approx0.762^N$, negligible already at $N=50$.

### N1601

Note: [[11.02.04 Magnetization and Susceptibility|11.02.04 Magnetization and Susceptibility]]  
Priority: low · Graph: yes · Manim: no

Correct results ($m(h)$ and $\chi=\beta e^{2\beta J}$ verify) with a slightly awkward paragraph order.

- [Structure] The sentence "follows from the field derivative of the free energy:" ends with a colon but is followed by a prose paragraph before the equation; move the explanatory paragraph after the displayed $m=-\partial f/\partial h$.
- [Graph] Plot $m(h)$ for $h/J\in[-2,2]$ at $k_BT/J=2,1,0.5,0.25$, showing ever steeper but always smooth curves through the origin, the visual form of "no spontaneous magnetization but diverging susceptibility".
- [Graph] Add a semilog plot of $k_BT\,\chi=e^{2J/k_BT}$ versus $J/k_BT$ to show the exponential (not power-law) growth.
- [Intuition] Connect $\chi=\beta e^{2\beta J}$ to $\chi=\beta\sum_r G(r)=\beta(1+t)/(1-t)$ with $t=\tanh\beta J$ (fluctuation–response relation), linking this note to \[\[11.02.05 Correlation Function and Correlation Length\]\].

### N1602

Note: [[11.02.05 Correlation Function and Correlation Length|11.02.05 Correlation Function and Correlation Length]]  
Priority: low · Graph: yes · Manim: yes

Thorough and correct; $\xi\sim\frac12e^{2\beta J}$, $c(T)$ and the maximum at $k_BT\approx0.83J$ ($x\tanh x=1$, $x\approx1.200$) all verify.

- [Graph] Add a plot of the heat capacity $c/k_B=x^2\operatorname{sech}^2x$ versus $k_BT/J\in[0,4]$ with the Schottky maximum at $0.83$ marked, since the note discusses its shape in detail but shows only $G(r)$.
- [Graph] Plot $\xi$ versus $k_BT/J$ on a log scale with the asymptote $\frac12e^{2J/k_BT}$ overlaid, illustrating Remark 11.3.
- [Intuition] Sketch the transfer-matrix derivation of $G(r)=(\lambda_-/\lambda_+)^r$ in two lines (insert $\sigma^z$ at sites $0$ and $r$ in $\operatorname{Tr}\mathbf T^N$; $\sigma^z$ swaps the two eigenvectors at $h=0$), since it is stated without derivation.
- [Manim] Animate Monte Carlo snapshots of a 1D chain at decreasing temperature, showing domains growing in length while walls never disappear, which illustrates a diverging but finite $\xi$.
- [Structure] Example 11.1 (free energy, internal energy, heat capacity) is unrelated to the correlation-function title; consider moving it to \[\[11.02.03 Helmholtz Free Energy\]\] or renaming the section.

### N1603

Note: [[11.03 Mean-Field Approximation|11.03 Mean-Field Approximation]]  
Priority: low · Graph: no · Manim: no

Clear hub with a useful reading order; no change needed.

- [Structure] No change needed; the reading-order paragraph and link list are consistent and all targets exist.

### N1604

Note: [[11.03.01 Derivation of the Self-Consistency Equation|11.03.01 Derivation of the Self-Consistency Equation]]  
Priority: low · Graph: no · Manim: no

Correct derivation (Hamiltonian, Weiss field and (11.5) verify) but the key substitution step hides the neglected term.

- [Simplify] The displayed step "$\sigma_i\sigma_j=m\sigma_i+\sigma_i\delta\sigma_j$" is exact but does not show what is dropped; write the symmetric form $\sigma_i\sigma_j=m\sigma_i+m\sigma_j-m^2+\delta\sigma_i\delta\sigma_j$ first, then strike the last term.
- [Intuition] Add the counting $\sum_{\langle ij\rangle}(\sigma_i+\sigma_j)=z\sum_i\sigma_i$ and $\sum_{\langle ij\rangle}1=Nz/2$ before the second line of $\mathcal H_{\mathrm{MF}}$, since the factors $z$ and $1/2$ are otherwise unexplained.
- [Example] Give a quick numeric example: square lattice ($z=4$), $h=0$, $k_BT=3J$: solving $m=\tanh(4m/3)$ gives $m\approx0.69$, so readers see the equation in use before the graphical analysis.

### N1605

Note: [[11.03.02 Analysis of the Self-Consistency Equation|11.03.02 Analysis of the Self-Consistency Equation]]  
Priority: medium · Graph: yes · Manim: yes

Correct and clear analysis (the expansion to $m^2\approx3(1-T/T_c)$ verifies) but it describes a graphical construction without showing it.

- [Graph] Add the standard plot of $y=m$ and $y=\tanh(Km)$ for $m\in[-1.5,1.5]$ at $K=0.5,1,2$, marking the intersections $\pm m_0$ for $K=2$; the text refers to these intersections but has no figure.
- [Graph] Add a plot of the full numerical solution $m_0(T/T_c)$ of $m=\tanh(m\,T_c/T)$ for $T/T_c\in[0,1.2]$ together with $\sqrt{3(1-T/T_c)}$, illustrating the closing paragraph about extrapolation beyond saturation.
- [Manim] Animate $y=\tanh(Km)$ as $K$ increases from 0.5 to 2 while $y=m$ stays fixed, with the two nonzero intersections splitting off from the origin at $K=1$ (pitchfork bifurcation).
- [Intuition] Support "the solution $m=0$ is unstable" by pointing to the Landau coefficient $a<0$ in \[\[11.03.03 Landau Free Energy and the Phase Transition\]\] rather than only to the slope argument.

### N1606

Note: [[11.03.03 Landau Free Energy and the Phase Transition|11.03.03 Landau Free Energy and the Phase Transition]]  
Priority: low · Graph: yes · Manim: yes

Correct and well explained; $a(T)$, $b(T)=(zJ)^4/[12(k_BT)^3]$ and the curvature $-4a$ verify, and the existing figure fits the text.

- [Example] Show the expansion $\ln\cosh x=x^2/2-x^4/12+O(x^6)$ that produces $a$ and $b$, since the coefficients are currently stated without the intermediate step.
- [Graph] Add a companion plot of the untruncated mean-field $f(m)-f(0)$ for $T/T_c=1.2,1,0.8,0.5$ over $m\in[-1,1]$, showing where the quartic approximation stays accurate.
- [Manim] Animate the curve $a(T)m^2+bm^4$ as $T$ decreases through $T_c$, with a ball rolling into one of the two emerging minima, to show the continuous onset and the choice of sign.

### N1607

Note: [[11.03.04 Critical Mean-Field Exponents|11.03.04 Critical Mean-Field Exponents]]  
Priority: medium · Graph: yes · Manim: no

Correct results (Curie–Weiss law and $\Delta C=3k_B/2$ verify), but the exponent $\beta$ collides with the inverse temperature and $\delta$ and $\Delta C$ are stated without derivation.

- [Correctness] Symbol clash: the exponent table writes $\beta=1/2$ (uncoloured) while the same note uses $\thermal{\beta}$ for inverse temperature in (11.7); use $\beta_{\mathrm c}$ as in \[\[11.03.02 Analysis of the Self-Consistency Equation\]\] or add the disambiguation sentence used in \[\[11.04.03 Exact Critical Exponents in Two Dimensions\]\].
- [Example] Derive $\delta=3$ in two lines: at $T=T_c$, $m=\tanh(m+\beta_c h)$ gives $m^3/3\approx\beta_c h$, so $m\propto h^{1/3}$; the table currently gives it without support.
- [Example] Derive the heat-capacity jump: $u=-zJm^2/2$ with $m^2=3(1-T/T_c)$ gives $c=3k_B/2$ just below $T_c$ and $0$ above.
- [Graph] Plot the mean-field $\chi^{-1}$ versus $T/T_c\in[0.5,1.5]$, showing slope 1 above $T_c$ and slope 2 below (the factor-2 amplitude ratio), which connects to exercise \[\[11.04 Mean-Field Susceptibility above and below the Critical Temperature\]\].

### N1608

Note: [[11.03.05 Limits of the Mean-Field Approximation|11.03.05 Limits of the Mean-Field Approximation]]  
Priority: low · Graph: yes · Manim: no

Correct and well scoped; the Ginzburg scaling $|t|^{(d-4)/2}$, the 3D exponents and the 1D mean-field $T_c=2J/k_B$ are right.

- [Graph] Plot $|t|^{(d-4)/2}$ on log axes for $d=3,4,5$ over $|t|\in[10^{-4},1]$, showing growth for $d<4$, constancy at $d=4$ and decay for $d>4$.
- [Intuition] Add a one-line heuristic: fluctuations of $m$ averaged over a correlation volume scale as $\xi^{2-d}$, while $m^2\propto|t|$; with $\xi\propto|t|^{-1/2}$ the ratio is $|t|^{(d-4)/2}$.
- [Links] Link "Theorem 11.1 (Ginzburg criterion)" to the fuller treatment in \[\[12.02.03 Ginzburg Criterion\]\].

### N1609

Note: [[11.04 Ising Model in Two Dimensions|11.04 Ising Model in Two Dimensions]]  
Priority: low · Graph: no · Manim: no

Clear hub with a correct reading order; no change needed.

- [Structure] No change needed; all four links resolve and the scope paragraph is accurate.

### N1610

Note: [[11.04.01 Onsager Solution|11.04.01 Onsager Solution]]  
Priority: low · Graph: yes · Manim: no

Correct; the critical condition, $k_BT_c\approx2.269J$, the 76% overestimate and both integral limits ($f\to-k_BT\ln2$, $f\to-2J$) verify.

- [Graph] Plot the exact heat capacity per spin (numerically differentiated from the Onsager integral) versus $k_BT/J\in[1,5]$ with the 1D chain and mean-field ($z=4$) curves overlaid, showing the logarithmic spike at 2.269 against the smooth 1D maximum and the mean-field jump at 4.
- [Intuition] Add a sentence on why the singularity sits at $\theta_1=\theta_2=0$: it is the longest-wavelength mode, so the transition is driven by fluctuations on the largest scales.
- [Example] Add the numerical step $\ln(1+\sqrt2)=0.88137$, so $k_BT_c/J=2/0.88137=2.2692$.

### N1611

Note: [[11.04.02 Kramers–Wannier Duality|11.04.02 Kramers–Wannier Duality]]  
Priority: medium · Graph: yes · Manim: yes

Correct ($e^{-2K^*}=\tanh K$ and $K_c=\tfrac12\ln(1+\sqrt2)$ verify) and carefully scoped, but the contour matching is only asserted.

- [Graph] Plot $K^*(K)=-\frac12\ln\tanh K$ for $K\in[0.05,2]$ together with the diagonal $K^*=K$, marking the intersection at $K_c\approx0.4407$; it shows at a glance that weak and strong coupling are exchanged.
- [Example] Show the weight matching on one elementary loop: the high-temperature square loop has weight $\tanh^4K$, a single flipped dual spin has four broken bonds with weight $e^{-2K^*\cdot4}$, so equating them gives $\tanh K=e^{-2K^*}$.
- [Manim] Animate a square lattice with its dual overlaid, morphing a high-temperature closed bond loop into the domain-wall contour enclosing a flipped spin on the dual lattice.

### N1612

Note: [[11.04.03 Exact Critical Exponents in Two Dimensions|11.04.03 Exact Critical Exponents in Two Dimensions]]  
Priority: low · Graph: yes · Manim: no

Correct exponent table with valid scaling-relation checks and good scope notes.

- [Graph] Plot $C$ versus $t\in[-0.2,0.2]$ comparing a logarithmic divergence $-\ln|t|$ with a mean-field finite jump, to make the two meanings of $\alpha=0$ visible.
- [Example] Add the remaining checks $\alpha+\beta(1+\delta)=2$ ($0+\tfrac18\cdot16=2$) and hyperscaling $d\nu=2-\alpha$ ($2\cdot1=2$), which complete the consistency test.
- [Links] Link the scaling-relation remark to \[\[12.06.02 Derivation of Scaling Relations\]\] in addition to the external Tong reference.

### N1613

Note: [[11.04.04 Spontaneous Magnetization - Yang's Result|11.04.04 Spontaneous Magnetization - Yang's Result]]  
Priority: medium · Graph: yes · Manim: no

Correct formula and good discussion, but the figure plots only schematic power laws and its caption names the wrong axis.

- [Correctness] Fig. 11.5 caption says "Spontaneous magnetization versus reduced temperature", but the horizontal axis is $T/T_c$, not the reduced temperature $t=(T-T_c)/T_c$ defined in the chapter; change the caption to "versus $T/T_c$".
- [Graph] Replace or supplement the schematic curves with the exact Yang curve $[1-\sinh^{-4}(2K_cT_c/T)]^{1/8}$ and the full mean-field solution of $m=\tanh(mT_c/T)$, both versus $T/T_c\in[0,1.2]$; this removes the need for the "Interpretation of the source plot" caveat.
- [Structure] The opening sentence ends with a colon but the formula appears only after a separate paragraph; move the scope paragraph after Equation (11.9).
- [Example] Add the near-$T_c$ expansion: $\sinh(2K)\approx1+2\sqrt2(K-K_c)$, so the bracket $\approx8\sqrt2(K-K_c)$ and $m_0\propto(T_c-T)^{1/8}$, making the exponent derivation explicit.

### N1614

Note: [[11.05 Spontaneous Symmetry Breaking|11.05 Spontaneous Symmetry Breaking]]  
Priority: low · Graph: no · Manim: no

Clear hub that states the puzzle and resolution well; no change needed.

- [Structure] No change needed; links resolve and the motivation paragraph is accurate.

### N1615

Note: [[11.05.01 Mechanism of Spontaneous Breaking|11.05.01 Mechanism of Spontaneous Breaking]]  
Priority: medium · Graph: yes · Manim: yes

Correct and careful about the order of limits, but entirely abstract with no concrete illustration.

- [Example] Illustrate the non-commuting limits with a two-phase model: for finite $N$, $\langle\sigma\rangle\approx m_s\tanh(N\beta h\,m_s)$, which tends to $m_s$ if $N\to\infty$ first and to $0$ if $h\to0$ first.
- [Graph] Plot $\langle\sigma\rangle=m_s\tanh(N\beta hm_s)$ versus $\beta h\in[-0.05,0.05]$ for $N=10,100,1000$ with $m_s=0.9$, showing the curves sharpen into a step of height $2m_s$.
- [Manim] Animate the same family as $N$ grows, so the smooth finite-size curve visibly turns into the discontinuous infinite-system magnetization.

### N1616

Note: [[11.05.02 Physical Interpretation - Equilibrium States and Domains|11.05.02 Physical Interpretation - Equilibrium States and Domains]]  
Priority: low · Graph: no · Manim: yes

Correct and well qualified (barrier scaling, $2J$ per broken bond, Mermin–Wagner scope).

- [Example] Add the 2D domain-wall estimate: a straight wall across an $L\times L$ lattice costs $2JL$, so the reversal barrier scales as $L^{d-1}$, not $N=L^d$, which quantifies the "Barrier scaling" note.
- [Manim] Animate a 2D lattice below $T_c$ with mixed boundary conditions, showing two domains separated by a fluctuating wall, to illustrate ergodicity breaking and interface energy.
- [Links] Link the Mermin–Wagner remark to \[\[11.06.02 XY Model\]\] and \[\[11.06.03 Heisenberg Model\]\], where the theorem is applied.

### N1617

Note: [[11.05.03 Order Parameter and Phase Transition|11.05.03 Order Parameter and Phase Transition]]  
Priority: medium · Graph: yes · Manim: no

Correct physics, but the two paths through the phase diagram are described only in words.

- [Graph] Add a $(T,h)$ phase diagram with the coexistence line $h=0$, $0\le T<T_c$ ending at the critical point, and mark the two paths (zero-field temperature sweep and fixed-$T$ field sweep) discussed in the text.
- [Graph] Add a companion plot of $m(h)$ at $T/T_c=0.8,1,1.2$ (mean field), showing the jump $2m_s$, the critical $h^{1/\delta}$ shape and the smooth paramagnetic curve.
- [Simplify] Shorten the "Source correction" note to one sentence; the main text already places coexistence at $h=0$.

### N1618

Note: [[11.06 Extensions of the Ising Model|11.06 Extensions of the Ising Model]]  
Priority: low · Graph: no · Manim: no

Clear hub; no change needed.

- [Structure] No change needed; links resolve and the distinction between spin components and lattice dimension is well made.

### N1619

Note: [[11.06.01 Potts Model|11.06.01 Potts Model]]  
Priority: low · Graph: yes · Manim: no

Correct; the $q=2$ mapping, the factor one half and $e^{\beta_cJ}=1+\sqrt q$ all verify.

- [Graph] Plot $k_BT_c/J=1/\ln(1+\sqrt q)$ versus $q=2,\dots,10$ as points, with the continuous ($q\le4$) and first-order ($q\ge5$) regions shaded.
- [Intuition] Add why larger $q$ favours a first-order transition: the disordered phase gains entropy of order $\ln q$ per site, which eventually lets it win discontinuously against the ordered phase.
- [Example] Give a second number, e.g. $q=3$: $k_BT_c/J=1/\ln(1+\sqrt3)\approx0.995$.

### N1620

Note: [[11.06.02 XY Model|11.06.02 XY Model]]  
Priority: medium · Graph: yes · Manim: yes

Correct overview of the BKT transition, but vortices and quasi-long-range order are described without any picture or formula.

- [Example] State the low-temperature law $G(r)\sim r^{-\eta(T)}$ with $\eta=k_BT/(2\pi J)$ in spin-wave theory and the universal value $\eta=1/4$ at the transition ($k_BT_{\mathrm{BKT}}\approx0.893J$ on the square lattice), so "power-law decay" becomes concrete.
- [Intuition] Add the Kosterlitz–Thouless energy–entropy argument: a free vortex costs $\pi J\ln(L/a)$ and gains entropy $2k_B\ln(L/a)$, so free vortices proliferate above $k_BT\approx\pi J/2$ (renormalized down to the actual value).
- [Graph] Plot a vector field of a vortex–antivortex pair, $\theta(\mathbf r)=\arg(\mathbf r-\mathbf r_1)-\arg(\mathbf r-\mathbf r_2)$, to show what the topological defects are.
- [Manim] Animate a vortex–antivortex pair binding and unbinding as temperature crosses $T_{\mathrm{BKT}}$, illustrating the topological transition.

### N1621

Note: [[11.06.03 Heisenberg Model|11.06.03 Heisenberg Model]]  
Priority: low · Graph: no · Manim: no

Correct and carefully qualified, though the universality discussion repeats itself across three paragraphs.

- [Simplify] Merge Remark 11.6, the following paragraph and the "Scope of the universality statement" note into one paragraph stating that the class is fixed by $d$, the order-parameter symmetry ($n$) and the interaction range.
- [Example] Quote the 3D Heisenberg exponents ($\beta\approx0.37$, $\gamma\approx1.40$, $\nu\approx0.71$) next to the 3D Ising values ($0.326$, $1.237$, $0.630$), so "its exponents differ" is shown, not only stated.
- [Links] Link "Mermin–Wagner theorem" to the remark in \[\[11.05.02 Physical Interpretation - Equilibrium States and Domains\]\].

### N1622

Note: [[11.07 Worked Examples|11.07 Worked Examples]]  
Priority: low · Graph: yes · Manim: no

Correct worked examples; $\mathbf T^3$, the enumeration, the iterates (0.50467, 0.50853, 0.51170, limit 0.52543), Yang's 0.95441 and the full mean-field 0.71041 all verify.

- [Correctness] Symbol clash: Example 11.3 uses $\magnetic{m}_0=0.5$ for the starting iterate, while Example 11.4 (and \[\[11.04.04 Spontaneous Magnetization - Yang's Result\]\]) uses $\magnetic{m}_0$ for the spontaneous magnetization; rename the iterates to $m^{(0)},m^{(1)},\dots$.
- [Simplify] In Example 11.5 the expression $h_{\mathrm{eff}}=k_BT\operatorname{arctanh}(\tanh K)=J$ is a roundabout identity; state directly that the bond spins $\mu_i$ act as independent spins in field $J$, giving $\mathcal Z=2(2\cosh K)^{N-1}$ for the open chain.
- [Graph] For Example 11.3, plot the cobweb diagram of $m\mapsto\tanh(m/0.9)$ from $m=0.5$, showing the slow convergence to 0.525 that explains why three iterates are not yet close.
- [Structure] The source/correction notes in Examples 11.3 and 11.4 nearly repeat the main text; give the unrounded values directly in the main text and keep one short note.

### N1623

Note: [[11.08 Summary and Connections|11.08 Summary and Connections]]  
Priority: low · Graph: no · Manim: no

Accurate summary table and useful exercise guide.

- [Links] In "Connections", link item 2 to \[\[12.01 Landau Theory of Phase Transitions\]\] and item 4 to \[\[12.00 Landau Theory and the Renormalization Group\]\], since the next chapter exists in the vault.

### N1624

Note: [[11.01 Internal Energy and Heat Capacity in a Field|11.01 Internal Energy and Heat Capacity in a Field]]  
Priority: low · Graph: yes · Manim: no

Correct and well-checked solution route (eigenvalue factorization, zero-field and zero-coupling limits verified), but it stops short of the explicit field-dependent result.

- [Example] Under "Solution route and checks", give the closed-form $\energy{u}(\thermal{\beta},\energy{h})$ obtained by differentiating the factorized $\ln\lambda_+$ (including the $-2\energy{J}e^{-4\thermal{\beta}\energy{J}}$ term from the square root) as a collapsible answer, so readers can check their own differentiation.
- [Graph] Plot $\thermal{c}/\thermal{k}_{\mathrm B}$ versus $\thermal{k}_{\mathrm B}\thermal{T}/\energy{J}\in[0.05,5]$ for $\energy{h}/\energy{J}=0,0.5,1,2$; it shows the Schottky-like peak shifting and broadening with field and makes the nonnegativity check visual.
- [Intuition] Add one sentence after the zero-coupling check explaining that the field opens a gap $2\energy{h}$ per spin, so the heat-capacity peak moves to $\thermal{k}_{\mathrm B}\thermal{T}\sim\energy{h}$ at large field.

### N1625

Note: [[11.02 Mean-Field Magnetization near the Critical Temperature|11.02 Mean-Field Magnetization near the Critical Temperature]]  
Priority: low · Graph: yes · Manim: no

Short, correct expansion with good range and sign remarks; clear as it stands.

- [Graph] Plot the numerical solution of $\magnetic{m}=\tanh(\magnetic{m}\thermal{T}_{\mathrm c}/\thermal{T})$ and the asymptote $\sqrt{3(1-\thermal{T}/\thermal{T}_{\mathrm c})}$ for $\thermal{T}/\thermal{T}_{\mathrm c}\in[0,1]$; it shows where the leading term is accurate and that it exceeds 1 near $\thermal{T}=0$, as the text remarks.
- [Simplify] In "Derivation and range", show the divided equation explicitly, $1=\frac{1}{1-\thermal{\epsilon}}-\frac{\magnetic{m}^2}{3(1-\thermal{\epsilon})^3}$, before stating $\magnetic{m}^2=3\thermal{\epsilon}$, so the balance step is not left implicit.

### N1626

Note: [[11.03 Critical Temperature of the Triangular Lattice|11.03 Critical Temperature of the Triangular Lattice]]  
Priority: low · Graph: no · Manim: no

Correct and complete star–triangle plus duality derivation (algebra and $4/\ln3\approx3.641$ verified); slightly heavy on caveats.

- [Structure] The opening says "the source supplies the exact result" and only later derives it; reorder so the derivation section leads and the supplied values become the final check.
- [Intuition] Also state the honeycomb critical point ($\tanh\thermal{L}_{\mathrm c}=1/\sqrt3$, i.e. $\thermal{k}_{\mathrm B}\thermal{T}_{\mathrm c}\approx1.519\energy{J}$) to show the expected ordering triangular > square > honeycomb with coordination number.

### N1627

Note: [[11.04 Mean-Field Susceptibility above and below the Critical Temperature|11.04 Mean-Field Susceptibility above and below the Critical Temperature]]  
Priority: low · Graph: yes · Manim: no

Correct derivation of the factor-two amplitude ratio (verified); clear, with one table defect.

- [Correctness] The physical-quantities table lists $\magnetic{m}_0$ and $\magnetic{m}_{\mathrm s}$, which the note never uses; reduce the row to $\magnetic{m}$.
- [Graph] Plot $\thermal{k}_{\mathrm B}\thermal{T}_{\mathrm c}\magnetic{\chi}$ from the full selected-branch formula for $\thermal{T}/\thermal{T}_{\mathrm c}\in[0.3,2]$, together with the asymptotes $1/(\thermal{T}/\thermal{T}_{\mathrm c}-1)$ and $1/[2(1-\thermal{T}/\thermal{T}_{\mathrm c})]$; this shows the amplitude ratio and the return to zero at low temperature.
- [Intuition] Add a sentence that the ordered side is stiffer because the quartic term adds curvature at the nonzero minimum, linking to the Landau result $\chi^+/\chi^-=2$ in \[\[12.01.04 Landau Critical Exponents\]\].

### N1628

Note: [[Ising mean field and transfer-matrix calculations|Ising mean field and transfer-matrix calculations]]  
Priority: high · Graph: yes · Manim: no

Transcribed lecture notes with an off-topic ensembles opening, a factor-of-two mean-field convention that conflicts with the stated Hamiltonian, and a cluttered quantity table.

- [Correctness] "Mean-field approximation": with $\energy{H}=-\energy{J}\sum_{\langle ij\rangle}\sigma_i\sigma_j$ (each pair once) the mean-field equation is $\bar\sigma=\tanh[\thermal{\beta}(q\energy{J}\bar\sigma+\energy{h})]$, so $\thermal{k}_{\mathrm B}\thermal{T}_{\mathrm c}=q\energy{J}$, not $q\energy{J}/2$; the factor $1/2$ belongs only in $\energy{U}=-Nq\energy{J}\bar\sigma^2/2$. Consequently the heat-capacity jump is $\tfrac32N\thermal{k}_{\mathrm B}$ (not $3N\thermal{k}_{\mathrm B}$) and the susceptibility prefactor is $N\magnetic{\mu}^2/(\energy{J}q)$ (not $2N\magnetic{\mu}^2/(\energy{J}q)$); fix these or state explicitly that the notebook's convention double-counts pairs.
- [Correctness] Physical-quantities table lists symbols the note never uses or uses differently: Planck's constant as $\energy{h}$ (clashes with the Ising field parameter; only $\energy{\hbar}$ appears), Landé $g$, internal partition function $j$, internal degeneracy $g$ (clashes with density of states $g(\energy{E})$), $\energy{F}$; and $\thermal{T}_{\mathrm c}$ is described as "onset of macroscopic ground-state occupation". Remove unused rows and fix the description.
- [Structure] The "Ising model" subsection is actually about microcanonical vs canonical entropy of the ideal gas (Sackur–Tetrode, verified correct) and is unrelated to the title; move it to an ensembles note or retitle the subsection.
- [Simplify] Remove meta-commentary about the handwritten source ("The handwritten radical differs...", the "Ising 1920" label, "The notebook labels the logarithm...") or collect it in one source remark; it distracts from the physics.
- [Graph] Complement Fig. 17/18 with native plots: numerical mean-field $\bar\sigma(\thermal{T}/\thermal{T}_{\mathrm c})$ and $\thermal{C}_V/(N\thermal{k}_{\mathrm B})$ on $[0,1.5]$ showing the $3/2$ jump, and the 1D chain $\bar\sigma(\energy{h})$ for $\thermal{\beta}\energy{J}=0.5,1,2$ showing no spontaneous magnetization.
