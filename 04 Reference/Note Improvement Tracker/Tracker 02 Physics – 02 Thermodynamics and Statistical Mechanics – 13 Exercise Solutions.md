---
title: "Note Improvement Tracker – 02 Physics/02 Thermodynamics and Statistical Mechanics/13 Exercise Solutions"
---

> [!TLDR]
> This note tracks the review of the 9 notes in `02 Physics/02 Thermodynamics and Statistical Mechanics/13 Exercise Solutions`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 10 possible errors or notation conflicts. 10 of them are verified (8 fixed, 2 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N1664|N1664]] 13.01 Chapter 3 - Microcanonical Ensemble: Symbol clash: $\mu$ denotes both the chemical potential ($\energy{\mu}$, Ex. 3.2) and the magnetic moment ($\magnetic{\mu}$, Ex. 3.4-3.5), distinguished only by colour; likewise $n$ is number density, the ball dimension ("Equation (3.1) with dimension $n=N$") and part of $n_\pm$; rename the magnetic moment (e.g. $\mu_{\mathrm m}$) and drop "$n=N$". **Fixed:** Renamed magnetic moment to mu_m (24 places and table); replaced "with dimension n=N" by "in N dimensions"
- [[#N1665|N1665]] 13.02 Chapter 4 - Canonical Ensemble: Symbol clash in Ex. 4.4: $\mechanical{p}$ is pressure while $\mechanical{\mathbf p}$ and $\mechanical{p}_i$ are momenta in the same exercise (and the quantity table lists both); use $P$ for pressure as in 13.01. Also $\sigma$ is used for the symmetry number, $\sigma_E$ for the energy spread and $\sigma_{\mathrm{liq}}$ for surface tension; rename the symmetry number (e.g. $\sigma_{\mathrm{sym}}$). **Fixed:** Pressure renamed to P in Ex. 4.4 and table; symmetry number renamed to sigma_sym in callout and table
- [[#N1666|N1666]] 13.03 Chapter 5 - Grand Canonical Ensemble: The TLDR promises "subsystem energy shifts", which no exercise covers, and leaves out the two adsorption problems; reword it to: ideal-gas grand potential and entropy, Langmuir fixed-$\mu$ energy response, van der Waals number fluctuations, and the BET multilayer isotherm. **Fixed:** Reworded TLDR to list ideal-gas grand potential and entropy, Langmuir fixed-μ energy response, vdW number fluctuations, and BET isotherm.
- [[#N1666|N1666]] 13.03 Chapter 5 - Grand Canonical Ensemble: Physical-quantities table: $\mathcal Z$ is never used (the note writes $Z_N$), and symbols the note does use are missing: $\mechanical{\kappa}_T^{(0)}$, $\mechanical{P}_s$, $\mechanical{P}_0$, $z_s$, $x=\energy{\Delta}/(k_BT)$, $n_{\mathrm c}$, $\thermal{T}_{\mathrm c}$, and the unsubscripted level energy $\varepsilon$. **Partly:** Replaced Z row by Z_N; added rows for ε, κ_T^(0), P_s, P_0, x, z_s, and n_c (in the n row); T_c was already covered by the T row description.
- [[#N1666|N1666]] 13.03 Chapter 5 - Grand Canonical Ensemble: Exercise 5.2, the weight $e^{-\thermal{\beta}(\varepsilon-\mu N)}$ leaves $\varepsilon$ and $\mu$ without macros, while the same quantities are colored everywhere else; write $\energy{\varepsilon}$ and $\energy{\mu}$. **Fixed:** Wrote e^{-β(\energy{ε}-\energy{μ}N)}.
- [[#N1667|N1667]] 13.04 Chapter 6 - Ideal Quantum Gas: Symbol clash: $n$ means number density ($\varepsilon_F\propto n^{2/3}$; $n\signal{\lambda}_T^3\ll1$ in Exercise 6.6) and also occupation (the "factor $n+1$" in the same section and the note box, next to $n_{\mathrm{BE}}$). In 6.6, write the enhancement factor as $1+\bar n$. Likewise $g$ means density of states while $g_{5/2}(z)$ is the Bose function in 6.3; the note should say so or rename one of them. **Fixed:** Wrote the enhancement factor as 1+\bar n in 6.6 text and note box; added a sentence in 6.3 that g_{5/2} is the Bose function and f_{5/2} the Fermi function, not the density of states g.
- [[#N1667|N1667]] 13.04 Chapter 6 - Ideal Quantum Gas: Physical-quantities table: $g_{5/2},f_{5/2}$ (Bose/Fermi functions), $\Gamma$, $\zeta$, $\energy{U}_0$, $\mechanical{P}_0$, $\Xi_\alpha$, $\Theta$ (step function), and the Sommerfeld test function $\phi$ are missing. The row for $\mathcal N$ says "electromagnetic one-particle modes", but Exercise 6.7 also uses it for massive ultrarelativistic particles. **Partly:** Added U_0, P_0, Ξ_α rows and generalized the N row to photon modes or ultrarelativistic particle states; Γ, ζ, Θ, φ, g_{5/2}, f_{5/2} are mathematical functions that the skill excludes from the table.
- [[#N1668|N1668]] 13.05 Chapter 8 - Bose Gas and Condensation: Exercise 8.3(c), "The Wien approximation predates Planck's law (1896)" reads as if Planck's law dates from 1896. Write "Wien's approximation (1896) predates Planck's law (1900)". **Fixed:** Changed to "Wien's approximation (1896) predates Planck's law (1900)".
- [[#N1669|N1669]] 13.06 Chapter 9 - Real Gases and Interactions: Exercise 9.5(c): "$\mechanical{P}_{\mathrm{vir}}\approx4.129\times10^5\,\unit{Pa}\approx4.077\,\unit{atm}$" is inconsistent; $4.129\times10^5$ Pa is $4.075$ atm (unrounded $4.1292\times10^5$ Pa $=4.0752$ atm), the same as the vdW value. **Fixed:** Stated the value as ≈4.075 atm and noted that the source prints 4.077 atm (checked: 4.1292e5/101325 = 4.0752).
- [[#N1669|N1669]] 13.06 Chapter 9 - Real Gases and Interactions: Physical-quantities table: $\energy{\varepsilon}$ is described as "The level energy or level spacing used in the exercise"; in this note it is the square-well depth of Exercise 9.2 (argon scale $\varepsilon/k_B\approx120$ K). The table also omits $\gamma$, $\mechanical{P}_{\mathrm c}$, $\mechanical{V}_{\mathrm c}$ and $\mechanical{P}_0$. **Fixed:** Rewrote ε row as square-well depth of Exercise 9.2; added rows for γ, P_0, P_c, V_c.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N1663 | [[13.00 Exercise Solutions\|13.00 Exercise Solutions]] | Analyzed | low | no | no | [[#N1663\|View]] |
| N1664 | [[13.01 Chapter 3 - Microcanonical Ensemble\|13.01 Chapter 3 - Microcanonical Ensemble]] | Analyzed | medium | yes | no | [[#N1664\|View]] |
| N1665 | [[13.02 Chapter 4 - Canonical Ensemble\|13.02 Chapter 4 - Canonical Ensemble]] | Analyzed | medium | yes | no | [[#N1665\|View]] |
| N1666 | [[13.03 Chapter 5 - Grand Canonical Ensemble\|13.03 Chapter 5 - Grand Canonical Ensemble]] | Analyzed | medium | yes | no | [[#N1666\|View]] |
| N1667 | [[13.04 Chapter 6 - Ideal Quantum Gas\|13.04 Chapter 6 - Ideal Quantum Gas]] | Analyzed | low | yes | no | [[#N1667\|View]] |
| N1668 | [[13.05 Chapter 8 - Bose Gas and Condensation\|13.05 Chapter 8 - Bose Gas and Condensation]] | Analyzed | low | yes | no | [[#N1668\|View]] |
| N1669 | [[13.06 Chapter 9 - Real Gases and Interactions\|13.06 Chapter 9 - Real Gases and Interactions]] | Analyzed | medium | yes | no | [[#N1669\|View]] |
| N1670 | [[13.07 Chapter 11 - Ising Model\|13.07 Chapter 11 - Ising Model]] | Analyzed | low | yes | no | [[#N1670\|View]] |
| N1671 | [[13.08 Chapter 12 - Landau Theory and the Renormalization Group\|13.08 Chapter 12 - Landau Theory and the Renormalization Group]] | Analyzed | low | yes | yes | [[#N1671\|View]] |

## Suggestions

### N1663

Note: [[13.00 Exercise Solutions|13.00 Exercise Solutions]]  
Priority: low · Graph: no · Manim: no

Clear hub with study guidance; all eight listed solution notes exist.

- [Structure] No change needed.

### N1664

Note: [[13.01 Chapter 3 - Microcanonical Ensemble|13.01 Chapter 3 - Microcanonical Ensemble]]  
Priority: medium · Graph: yes · Manim: no

All derivations and numbers (Sackur-Tetrode derivatives, 1D gas entropy, Schottky peak $y_*\approx1.1997$, $C_{\max}\approx0.439Nk_B$, electron wavelengths) are correct, but the note is long and some meta-commentary dilutes the solutions.

- [Correctness] Symbol clash: $\mu$ denotes both the chemical potential ($\energy{\mu}$, Ex. 3.2) and the magnetic moment ($\magnetic{\mu}$, Ex. 3.4-3.5), distinguished only by colour; likewise $n$ is number density, the ball dimension ("Equation (3.1) with dimension $n=N$") and part of $n_\pm$; rename the magnetic moment (e.g. $\mu_{\mathrm m}$) and drop "$n=N$".
- [Graph] Plot $C/(Nk_B)=y^2\operatorname{sech}^2y$ versus $k_BT/(\mu B)=1/y$ on $[0,4]$ with the peak at $(0.834, 0.439)$ marked (Ex. 3.4b).
- [Graph] For Ex. 3.5, plot $S/(Nk_B)$ from (13.8) and $\mu B/(k_BT)=\tfrac12\ln[(1-\varepsilon)/(1+\varepsilon)]$ versus $\varepsilon\in(-1,1)$ on shared axes, showing the entropy maximum and the sign change of $1/T$ at $\varepsilon=0$.
- [Simplify] In Ex. 3.1 the asymptotic section presents both an exact $O(1)$ result and the source's looser $O(\ln N)$ bound plus two callouts; keep the exact difference $-\ln(k_BT/E_{\mathrm{ref}})$ and one sentence on why it is negligible.
- [Links] Turn plain equation references such as "(3.5)", "(3.13)", "(3.17)" into links to their notes (e.g. [[03.04.02 Explicit Calculation of Φ(E)]], [[03.06.01 Complete Derivation]], [[03.08 Worked Examples]]).

### N1665

Note: [[13.02 Chapter 4 - Canonical Ensemble|13.02 Chapter 4 - Canonical Ensemble]]  
Priority: medium · Graph: yes · Manim: no

Derivations are correct (three-level derivative, peak $x^*\approx1.881$, $C^*\approx0.637k_B$, rotational coefficient $1/90$ and $1+\Theta^2/(45T^2)$, demagnetization entropy), but there are symbol clashes and some overlong commentary.

- [Correctness] Symbol clash in Ex. 4.4: $\mechanical{p}$ is pressure while $\mechanical{\mathbf p}$ and $\mechanical{p}_i$ are momenta in the same exercise (and the quantity table lists both); use $P$ for pressure as in 13.01. Also $\sigma$ is used for the symmetry number, $\sigma_E$ for the energy spread and $\sigma_{\mathrm{liq}}$ for surface tension; rename the symmetry number (e.g. $\sigma_{\mathrm{sym}}$).
- [Graph] Plot $C/k_B$ versus $k_BT/\varepsilon$ on $[0,3]$ for the three-level system (13.10) together with the two-level Schottky curve, marking the peaks at $k_BT/\varepsilon=1/1.881$ ($0.637$) and $1/2.40$ ($0.439$).
- [Graph] Plot the rotational heat capacity per molecule $c_V^{\mathrm{rot}}/k_B$ versus $T/\Theta_{\mathrm{rot}}$ on $[0,3]$ from a numerical sum of (13.11), showing the freeze-out and the overshoot above 1 predicted by $1+\Theta^2/(45T^2)$.
- [Simplify] In Ex. 4.5 the final two paragraphs on the zero-field endpoint and the callout on sweep-rate sign could be cut to one sentence each; the core result (13.14) is clear without them.
- [Links] Link "Equation (4.13)", "(4.15)", "(4.17)", "(4.18)" and "Theorem 4.1" to their notes (e.g. [[04.07.02 Quantum Oscillator]], [[04.09.01 Hamiltonian Function and Partition Function]], [[04.11 Solved Examples]]).

### N1666

Note: [[13.03 Chapter 5 - Grand Canonical Ensemble|13.03 Chapter 5 - Grand Canonical Ensemble]]  
Priority: medium · Graph: yes · Manim: no

All four derivations re-check correctly (entropy, $x^*\approx2.3994$, $\kappa_T^{-1}=n\,\partial P/\partial n$, BET $\langle n\rangle=cy/[(1-y)(1+(c-1)y)]$, $P_s/c=P_0$), but the TLDR misdescribes the content and the end of Exercise 5.3 is dense and vague.

- [Correctness] The TLDR promises "subsystem energy shifts", which no exercise covers, and leaves out the two adsorption problems; reword it to: ideal-gas grand potential and entropy, Langmuir fixed-$\mu$ energy response, van der Waals number fluctuations, and the BET multilayer isotherm.
- [Correctness] Physical-quantities table: $\mathcal Z$ is never used (the note writes $Z_N$), and symbols the note does use are missing: $\mechanical{\kappa}_T^{(0)}$, $\mechanical{P}_s$, $\mechanical{P}_0$, $z_s$, $x=\energy{\Delta}/(k_BT)$, $n_{\mathrm c}$, $\thermal{T}_{\mathrm c}$, and the unsubscripted level energy $\varepsilon$.
- [Correctness] Exercise 5.2, the weight $e^{-\thermal{\beta}(\varepsilon-\mu N)}$ leaves $\varepsilon$ and $\mu$ without macros, while the same quantities are colored everywhere else; write $\energy{\varepsilon}$ and $\energy{\mu}$.
- [Simplify] Exercise 5.3, last three paragraphs of "Critical behaviour" (correlation lengths, Proposition 5.3, critical opalescence, Theorem 4.2): say plainly that $(\Delta N)^2=k_BT\langle N\rangle^2\kappa_T/V$ stays exact in the grand ensemble, and that near $T_{\mathrm c}$ only the $\langle N\rangle^{-1/2}$ scaling breaks down, because the correlation length becomes comparable to the system size. Also cut the vague sentence "This also separates an occupation change ..." in the zero-splitting paragraph of 5.2.
- [Graph] Exercise 5.2: plot $\thermal{C}_\mu/(Mk_B\,|\varepsilon_0|/\Delta)=x^2e^x/(e^x+1)^2$ against $k_BT/\Delta\in[0,3]$, with a vertical line at the peak $0.417$. Exercise 5.4: plot BET $\theta$ against $P/P_s\in[0,0.95]$ for $c=1,10,100$, with the Langmuir curve $cx/(1+cx)$ dashed for $c=100$.
- [Graph] Exercise 5.3: plot the enhancement $\Delta N\sqrt{\langle N\rangle}/\langle N\rangle=1/\sqrt{1-2an/(k_BT)}$ against $2an/(k_BT)\in[0,0.98]$ to show the divergence at the reduced-model spinodal.

### N1667

Note: [[13.04 Chapter 6 - Ideal Quantum Gas|13.04 Chapter 6 - Ideal Quantum Gas]]  
Priority: low · Graph: yes · Manim: no

Clear and correct: every derivation re-checks, including $A_{3D}$, $\frac23\Gamma(5/2)A_{3D}(k_BT)^{3/2}=g_sV/\lambda_T^3$, the Sommerfeld coefficients $\pi^2/12$, $5\pi^2/12$, $\pi^2/2$, Planck's $16\pi^2\hbar=8\pi h$, $\Gamma(4)\zeta(4)=\pi^4/15$, and the relativistic $U_0=\frac34N\varepsilon_F$. The remaining issues are symbol overloading and table gaps.

- [Correctness] Symbol clash: $n$ means number density ($\varepsilon_F\propto n^{2/3}$; $n\signal{\lambda}_T^3\ll1$ in Exercise 6.6) and also occupation (the "factor $n+1$" in the same section and the note box, next to $n_{\mathrm{BE}}$). In 6.6, write the enhancement factor as $1+\bar n$. Likewise $g$ means density of states while $g_{5/2}(z)$ is the Bose function in 6.3; the note should say so or rename one of them.
- [Correctness] Physical-quantities table: $g_{5/2},f_{5/2}$ (Bose/Fermi functions), $\Gamma$, $\zeta$, $\energy{U}_0$, $\mechanical{P}_0$, $\Xi_\alpha$, $\Theta$ (step function), and the Sommerfeld test function $\phi$ are missing. The row for $\mathcal N$ says "electromagnetic one-particle modes", but Exercise 6.7 also uses it for massive ultrarelativistic particles.
- [Simplify] The Exercise 6.6 Task sentence "At the same energy greater than chemical potential, temperature, and chemical potential" is garbled; rewrite as "For the same $T$ and $\mu$ and any energy $\varepsilon>\mu$, show ...".
- [Example] Exercise 6.4: add the two-line Sommerfeld derivation (substitute $\varepsilon=\mu+k_BTt$, use $\int t^2e^t/(e^t+1)^2dt=\pi^2/3$). To make the fixed-$\mu$ warning concrete, show that keeping $\mu=\varepsilon_F$ gives $U-U_0=\frac{3\pi^2}{8}N(k_BT)^2/\varepsilon_F$, not $\frac{\pi^2}{4}N(k_BT)^2/\varepsilon_F$, which would make $C_V$ 50% too large.
- [Graph] Exercise 6.6: plot $n_{\mathrm{BE}},n_{\mathrm{MB}},n_{\mathrm{FD}}$ against $x=\beta(\varepsilon-\mu)\in[0.05,4]$ (y range 0 to 3) to show the ordering and how the curves merge at large $x$. Exercise 6.4: plot $\bar n_{\mathrm{FD}}(\varepsilon/\varepsilon_F)$ for $k_BT/\varepsilon_F=0,0.05,0.2$ over $[0,2]$, shading the width-$k_BT$ window around $\mu$.
- [Graph] Exercise 6.5: plot the dimensionless Planck curve $x^3/(e^x-1)$ for $x=h\nu/k_BT\in[0,12]$, with the Rayleigh–Jeans $x^2$ and Wien $x^3e^{-x}$ curves dashed.

### N1668

Note: [[13.05 Chapter 8 - Bose Gas and Condensation|13.05 Chapter 8 - Bose Gas and Condensation]]  
Priority: low · Graph: yes · Manim: no

Correct and well checked: all numbers reproduce ($T_c=3.13\,$K, $S(T_c)=1.284Nk_B$, $x=4.965$/$2.821$, $b=2.898\times10^{-3}\,$m K, the Debye table and crossings $y=9.0254/9.1046$, $U=6.13\times10^{-5}\,$J, $P=0.0204\,$Pa, $N_\gamma=5.5\times10^{14}$, $2.701k_BT$). The weak points are the Debye asymptotic formula and one wavelength-symbol overload.

- [Correctness] Exercise 8.3(c), "The Wien approximation predates Planck's law (1896)" reads as if Planck's law dates from 1896. Write "Wien's approximation (1896) predates Planck's law (1900)".
- [Simplify] Exercise 8.4, Eq. (13.23): the leading term $\frac{15}{4\pi^4}y^4e^{-y}$ gives only 3.1% at $y=9$, while the full value is 5.08%, so it cannot locate the 5% threshold. Replace it with the closed form of the $e^{-x}$ tail, $\delta(y)\approx\frac{15}{4\pi^4}e^{-y}(y^4+4y^3+12y^2+24y+24)$, which reproduces every table entry to 3 digits; then the table no longer has to be quoted from the source.
- [Structure] $\signal{\lambda}$ means the thermal wavelength in 8.1–8.2 and the radiation wavelength in 8.3, while the 2D thermal length in 8.6 is $\Lambda$ (the table records all three). Writing $\signal{\lambda}_T$ in 8.2, as the Chapter 5 and 6 solution notes do, would remove the overload. Also add $g_1,g_2,\zeta$ and $\thermal{T}_\lambda$ to the table.
- [Graph] Exercise 8.4: plot $\delta(y)$ on a log y-axis for $y=\Theta_D/T\in[4,20]$, with a horizontal line at 5% and markers at $y=9.03$ and $10$. Exercise 8.3: plot $u(\lambda,T)$ for $T=3000,4000,5000\,$K over $\lambda\in[0.1,3]\,\mu$m, with the Wien locus $\lambda_{\max}=b/T$.
- [Graph] Exercise 8.6: plot $n\Lambda^2$ (or $n\lambda^3$) against $z\in[0,1)$ for $g_1(z)=-\ln(1-z)$ (unbounded, 2D uniform), $g_{3/2}(z)$ (3D, saturates at 2.612) and $g_2(z)$ (2D trap, saturates at $\pi^2/6$), so the saturation criterion is visible.

### N1669

Note: [[13.06 Chapter 9 - Real Gases and Interactions|13.06 Chapter 9 - Real Gases and Interactions]]  
Priority: medium · Graph: yes · Manim: no

Derivations re-check (vdW derivatives $-9$ and $-6$, $\phi_*=2\sqrt{-\tau}$, $T_B=2.846\,\varepsilon/k_B$, $L\approx6Nk_BT_c\sqrt{1-T/T_c}$, $T_{\rm inv}=27T_c/4$), but one atm conversion and the table entry for $\varepsilon$ are wrong, and Exercise 9.5 is cluttered by rounded source values.

- [Correctness] Exercise 9.5(c): "$\mechanical{P}_{\mathrm{vir}}\approx4.129\times10^5\,\unit{Pa}\approx4.077\,\unit{atm}$" is inconsistent; $4.129\times10^5$ Pa is $4.075$ atm (unrounded $4.1292\times10^5$ Pa $=4.0752$ atm), the same as the vdW value.
- [Correctness] Physical-quantities table: $\energy{\varepsilon}$ is described as "The level energy or level spacing used in the exercise"; in this note it is the square-well depth of Exercise 9.2 (argon scale $\varepsilon/k_B\approx120$ K). The table also omits $\gamma$, $\mechanical{P}_{\mathrm c}$, $\mechanical{V}_{\mathrm c}$ and $\mechanical{P}_0$.
- [Simplify] Exercise 9.5: give the unrounded results in the main text (vdW $4.1294\times10^5$ Pa, virial $4.1292\times10^5$ Pa, ideal $4.1404\times10^5$ Pa) and drop the "Density convention and numerical precision" callout. Also, in 9.2, $2.846\times120\,\unit{K}=341.5$ K reads better as "about 341 K".
- [Graph] Exercises 9.1 and 9.3: plot the reduced isotherms $p(v)=8t/(3v-1)-3/v^2$ for $t=0.85,0.9,0.95,1,1.05$ over $v\in[0.45,4]$, $p\in[0,1.6]$. Draw the Maxwell equal-area tie line at $t=0.9$ and the coexistence dome, so the horizontal inflection and the $2\sqrt{-\tau}$ opening are visible.
- [Graph] Exercises 9.2 and 9.6: plot $B_2/b_0$ from (13.31) against $k_BT/\varepsilon\in[0.5,10]$ for $\lambda=1.5$, marking $T_B$. Add the vdW curve $(2a/k_BT-b)/b$ against $k_BT/(a/b)$ with its zero at $T_{\rm inv}=2T_B$.
- [Intuition] Exercise 9.4: add one sentence comparing the two regimes. The near-critical $L\approx6Nk_BT_c\sqrt{1-T/T_c}$ vanishes at $T_c$, while the formal low-temperature limit $L/N\approx3.4\,k_BT_c$ is the vdW cohesive energy, so $L$ falls monotonically between them.

### N1670

Note: [[13.07 Chapter 11 - Ising Model|13.07 Chapter 11 - Ising Model]]  
Priority: low · Graph: yes · Manim: no

Correct and carefully checked throughout: the transfer-matrix derivatives, $m=e^K\sinh(\beta h)/B$, $m^2=3\tau-\frac{12}{5}\tau^2$, the star–triangle algebra giving $e^{4K_c}=3$ ($k_BT_c=3.641J$), honeycomb $1.519J$, and the mean-field amplitude ratio 2 all verify.

- [Structure] $K$ means $\thermal{\beta}\energy{J}$ in Exercise 11.1 and $\thermal{T}_c/\thermal{T}$ in Exercise 11.2. The note and table explain the clash, but renaming the mean-field ratio (for example $r=T_c/T$) would remove it.
- [Simplify] Exercise 11.1: start from $\energy{u}=-\energy{J}\langle\sigma_i\sigma_{i+1}\rangle-\energy{h}\magnetic{m}$ and the two compact closed forms, then show Eq. (13.44) as their sum. Move the raw $\partial B/\partial\beta$ algebra into a collapsed callout.
- [Graph] Exercise 11.1: plot $u/J$ and $c/k_B$ (numerically from (13.45)) against $k_BT/J\in[0.05,4]$ for $h/J=0,0.5,1$. This shows a smooth Schottky-like peak with no singularity, and how the field shifts it.
- [Graph] Exercises 11.2 and 11.4: plot the numerical root of $m=\tanh(m\,T_c/T)$ for $T/T_c\in[0,1.5]$, with $\sqrt{3(1-T/T_c)}$ dashed. In a second panel, plot $k_BT_c\,\chi$ from (13.55) on both sides of $T_c$ to show the amplitude ratio 2.
- [Intuition] Exercise 11.3, Step 3: say explicitly that the composite of duality and star–triangle maps a high-temperature triangular lattice to a low-temperature one, so a unique transition must sit at the fixed point of this map. This is the same logic as square-lattice self-duality.

### N1671

Note: [[13.08 Chapter 12 - Landau Theory and the Renormalization Group|13.08 Chapter 12 - Landau Theory and the Renormalization Group]]  
Priority: low · Graph: yes · Manim: yes

Mathematically correct: $t_c=|b|^2/(4ac)$, the decimation table ($2^n\xi=3.6719$), the Ornstein–Zernike residue, the scaling relations, $y_u=-\epsilon$, and the XY estimates (0.600, 1.200, second-order 0.655) all verify. Clarity suffers from overloaded symbols and stacked source-attribution callouts.

- [Structure] $\xi$ (dimensionless, in lattice units, Exercise 12.2) and $\mechanical{\xi}$ (physical length, Exercise 12.3) differ only by color. Write $\xi_{\mathrm{lat}}$ for the first. Also, $R(K)$ in (13.62) is never defined; write $K'=R(K)$ at the transformation (12.7).
- [Simplify] Exercise 12.1, "Dimensions and limiting cases": "recovers the tricritical exponent $\beta_{\mathrm{crit}}=1/4$, as in part 2" points to a part that does not exist. Show it directly: at $b=0$, $\phi_{\mathrm{eq}}=(-at/(3c))^{1/4}$.
- [Simplify] Exercise 12.6(c) item 3 has three successive callouts (source attribution, verified correction, precision) about the 0.6717/1.3178 values. Merge them into one sentence attributing the values to Campostrini et al. 2006 (Monte Carlo plus high-temperature series), and note the $\alpha=-0.0151$ versus $-0.0127$ tension with the Lipa experiment.
- [Graph] Exercise 12.1: plot $F(\phi)/(|b|^3/c^2)$ against $\phi/\sqrt{|b|/c}\in[-1.2,1.2]$ for $at\,c/|b|^2=0.20,0.25,0.30,0.333,0.40$. This shows the coexistence at $1/4$, the metastable minima, and their disappearance at $1/3$.
- [Graph] Exercises 12.2 and 12.5: draw a cobweb plot of $K'=\frac12\ln\cosh2K$ against $K\in[0,3]$ with the diagonal, starting at $K_0=1$. In a second panel, plot $du/d\ell=\epsilon u-A_nu^2$ against $u$ for $\epsilon=1$, with arrows showing flow from the Gaussian to the Wilson–Fisher fixed point.
- [Manim] Exercise 12.2: animate a spin chain in which every second spin fades out and the survivors re-space to the original spacing. Show a counter for $K$ (1.000 → 0.663 → 0.350 → 0.114) and $\xi$ in current lattice units halving while $2^n\xi$ stays at 3.672.
