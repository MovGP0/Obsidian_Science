---
title: "Note Improvement Tracker – 02 Physics/02 Thermodynamics and Statistical Mechanics/08 Bose Gas and Condensation"
---

> [!TLDR]
> This note tracks the review of the 41 notes in `02 Physics/02 Thermodynamics and Statistical Mechanics/08 Bose Gas and Condensation`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 4 possible errors or notation conflicts. 4 of them are verified (4 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N1465|N1465]] 08.03.01 Internal Energy: Symbol clash: ${\mechanical{n}}$ is the mean occupation $\langle n(\varepsilon)\rangle$ in the first equation and the number density in $n\lambda^3=g_{3/2}(z)$ under "Normal phase"; rename the occupation (e.g. $\bar n(\varepsilon)$ or $f(\varepsilon)$), and fix the table row, which lists ${\mechanical{n}}_\alpha$, a symbol the note never uses. **Fixed:** Occupation renamed to f(epsilon) in the energy integral; table row replaced by f(epsilon) mean occupation number
- [[#N1495|N1495]] Bose condensation, photon gases, and phonons: The physical-quantities table lists meanings and symbols the note does not use or uses differently: $g$ as "Landé factor" (here it is only the internal degeneracy), $j$ as "Internal partition function" (here $j$ is the summation index in $\zeta(s)$), $n$ as "Amount of substance" and "Number density" (here $n(\epsilon)$ is the occupation number, which is missing), $\Omega$ as "Multiplicity" (here ${\energy{\Omega}}$ is the grand potential), and $\energy{F}$, $\mechanical{P}_{\mathrm{int}}$, $\mechanical{P}_{\mathrm{ext}}$, $\signal{\nu}$ are never used; rebuild the table from the symbols actually present. **Fixed:** Removed Lande g, j, n in mol, Omega Multiplicity, F, P_int/P_ext, nu; number-density row replaced by occupation n(epsilon); T_c description limited to Bose condensation
- [[#N1495|N1495]] Bose condensation, photon gases, and phonons: Under "Critical temperature of the Bose gas", London's proposal linking helium to Bose condensation dates from 1938, not 1928, and the lambda point is $2.17\,\mathrm{K}$; keep the transcribed "1928" and "2.19 K" only with a clarification callout (the same 2.19 K appears in the heat-capacity section). **Fixed:** Added a source-clarification callout: London 1938, lambda point 2.17 K, 2.19 K is the notebook value (both sections)
- [[#N1495|N1495]] Bose condensation, photon gases, and phonons: Fig. 15 caption says the maximum of $x^3/(e^x-1)$ lies "near $x=2.822$"; the root of $3(1-e^{-x})=x$ is $2.8214$, so write $x\approx2.821$ as in 08.04.04. **Fixed:** Root of 3(1-e^-x)=x is 2.8214; caption now x approx 2.821

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N1455 | [[08.00 Bose Gas and Condensation\|08.00 Bose Gas and Condensation]] | Analyzed | low | no | no | [[#N1455\|View]] |
| N1456 | [[08.01 Ideal Bose Gas - Grand Canonical Formalism\|08.01 Ideal Bose Gas - Grand Canonical Formalism]] | Analyzed | low | no | no | [[#N1456\|View]] |
| N1457 | [[08.01.01 Bose–Einstein Distribution\|08.01.01 Bose–Einstein Distribution]] | Analyzed | low | no | no | [[#N1457\|View]] |
| N1458 | [[08.01.02 Bose Functions gₙ(z)\|08.01.02 Bose Functions gₙ(z)]] | Analyzed | low | yes | no | [[#N1458\|View]] |
| N1459 | [[08.01.03 Equation of State - Fugacity Series\|08.01.03 Equation of State - Fugacity Series]] | Analyzed | low | yes | no | [[#N1459\|View]] |
| N1460 | [[08.02 Bose–Einstein Condensation\|08.02 Bose–Einstein Condensation]] | Analyzed | low | no | no | [[#N1460\|View]] |
| N1461 | [[08.02.01 Derivation of the Critical Temperature\|08.02.01 Derivation of the Critical Temperature]] | Analyzed | medium | yes | yes | [[#N1461\|View]] |
| N1462 | [[08.02.02 Condensate - Ground-State Occupation\|08.02.02 Condensate - Ground-State Occupation]] | Analyzed | low | no | no | [[#N1462\|View]] |
| N1463 | [[08.02.03 Nature of the Phase Transition\|08.02.03 Nature of the Phase Transition]] | Analyzed | medium | yes | no | [[#N1463\|View]] |
| N1464 | [[08.03 Thermodynamic Properties of the Bose Gas\|08.03 Thermodynamic Properties of the Bose Gas]] | Analyzed | low | no | no | [[#N1464\|View]] |
| N1465 | [[08.03.01 Internal Energy\|08.03.01 Internal Energy]] | Analyzed | medium | yes | no | [[#N1465\|View]] |
| N1466 | [[08.03.02 Pressure\|08.03.02 Pressure]] | Analyzed | low | yes | yes | [[#N1466\|View]] |
| N1467 | [[08.03.03 Specific Heat\|08.03.03 Specific Heat]] | Analyzed | low | no | no | [[#N1467\|View]] |
| N1468 | [[08.03.04 Entropy and the Third Law\|08.03.04 Entropy and the Third Law]] | Analyzed | low | no | no | [[#N1468\|View]] |
| N1469 | [[08.04 Photon Gas and Blackbody Radiation\|08.04 Photon Gas and Blackbody Radiation]] | Analyzed | low | no | no | [[#N1469\|View]] |
| N1470 | [[08.04.01 Photons as Relativistic Bosons\|08.04.01 Photons as Relativistic Bosons]] | Analyzed | low | yes | no | [[#N1470\|View]] |
| N1471 | [[08.04.02 Density of States and the Planck Spectrum\|08.04.02 Density of States and the Planck Spectrum]] | Analyzed | low | yes | yes | [[#N1471\|View]] |
| N1472 | [[08.04.03 Stefan–Boltzmann Law\|08.04.03 Stefan–Boltzmann Law]] | Analyzed | low | no | no | [[#N1472\|View]] |
| N1473 | [[08.04.04 Wien Displacement Law\|08.04.04 Wien Displacement Law]] | Analyzed | low | yes | no | [[#N1473\|View]] |
| N1474 | [[08.04.05 Radiation Pressure\|08.04.05 Radiation Pressure]] | Analyzed | low | no | no | [[#N1474\|View]] |
| N1475 | [[08.05 Phonons and the Debye Model\|08.05 Phonons and the Debye Model]] | Analyzed | low | no | no | [[#N1475\|View]] |
| N1476 | [[08.05.01 Lattice Vibrations as Bosons\|08.05.01 Lattice Vibrations as Bosons]] | Analyzed | low | yes | yes | [[#N1476\|View]] |
| N1477 | [[08.05.02 Debye Model\|08.05.02 Debye Model]] | Analyzed | low | yes | no | [[#N1477\|View]] |
| N1478 | [[08.05.03 Debye Internal Energy and Specific Heat\|08.05.03 Debye Internal Energy and Specific Heat]] | Analyzed | low | yes | no | [[#N1478\|View]] |
| N1479 | [[08.05.04 High- and Low-Temperature Limits\|08.05.04 High- and Low-Temperature Limits]] | Analyzed | low | no | no | [[#N1479\|View]] |
| N1480 | [[08.05.05 Comparison with the Einstein Model\|08.05.05 Comparison with the Einstein Model]] | Analyzed | low | yes | no | [[#N1480\|View]] |
| N1481 | [[08.05.06 Typical Debye Temperatures\|08.05.06 Typical Debye Temperatures]] | Analyzed | low | no | no | [[#N1481\|View]] |
| N1482 | [[08.06 Experimental Bose–Einstein Condensates\|08.06 Experimental Bose–Einstein Condensates]] | Analyzed | low | no | no | [[#N1482\|View]] |
| N1483 | [[08.06.01 Historical Overview\|08.06.01 Historical Overview]] | Analyzed | low | no | no | [[#N1483\|View]] |
| N1484 | [[08.06.02 Magneto-Optical Traps and Cooling Methods\|08.06.02 Magneto-Optical Traps and Cooling Methods]] | Analyzed | medium | yes | yes | [[#N1484\|View]] |
| N1485 | [[08.06.03 Condensate Properties\|08.06.03 Condensate Properties]] | Analyzed | low | yes | yes | [[#N1485\|View]] |
| N1486 | [[08.07 Worked Examples\|08.07 Worked Examples]] | Analyzed | low | no | no | [[#N1486\|View]] |
| N1487 | [[08.08 Summary\|08.08 Summary]] | Analyzed | low | no | no | [[#N1487\|View]] |
| N1488 | [[08.99 Exercises\|08.99 Exercises]] | Analyzed | low | no | no | [[#N1488\|View]] |
| N1489 | [[08.01 Critical Temperature of Helium-4\|99 Exercises/08.01 Critical Temperature of Helium-4]] | Analyzed | low | no | no | [[#N1489\|View]] |
| N1490 | [[08.02 Entropy of the Condensed Bose Gas\|99 Exercises/08.02 Entropy of the Condensed Bose Gas]] | Analyzed | low | no | no | [[#N1490\|View]] |
| N1491 | [[08.03 Limits and Maximum of the Planck Spectrum\|99 Exercises/08.03 Limits and Maximum of the Planck Spectrum]] | Analyzed | low | yes | no | [[#N1491\|View]] |
| N1492 | [[08.04 Accuracy of the Debye T³ Law\|99 Exercises/08.04 Accuracy of the Debye T³ Law]] | Analyzed | low | yes | no | [[#N1492\|View]] |
| N1493 | [[08.05 Photon Gas in a One-Litre Cavity\|99 Exercises/08.05 Photon Gas in a One-Litre Cavity]] | Analyzed | low | no | no | [[#N1493\|View]] |
| N1494 | [[08.06 Condensation in Two Dimensions\|99 Exercises/08.06 Condensation in Two Dimensions]] | Analyzed | low | yes | no | [[#N1494\|View]] |
| N1495 | [[Bose condensation, photon gases, and phonons\|Bose condensation, photon gases, and phonons]] | Analyzed | high | yes | no | [[#N1495\|View]] |

## Suggestions

### N1455

Note: [[08.00 Bose Gas and Condensation|08.00 Bose Gas and Condensation]]  
Priority: low · Graph: no · Manim: no

Clear chapter hub with a good model-choice guide; all links resolve (the 2D-condensation link points to the exercise note).

- [Structure] No change needed.

### N1456

Note: [[08.01 Ideal Bose Gas - Grand Canonical Formalism|08.01 Ideal Bose Gas - Grand Canonical Formalism]]  
Priority: low · Graph: no · Manim: no

Clear hub that motivates the factorization and the separate ground-state treatment.

- [Structure] No change needed.

### N1457

Note: [[08.01.01 Bose–Einstein Distribution|08.01.01 Bose–Einstein Distribution]]  
Priority: low · Graph: no · Manim: no

Correct and clear, including the geometric-series derivation of the minus sign.

- [Simplify] Display the geometric-series step as an equation, $\Xi_k=\sum_{n=0}^\infty q^n=1/(1-q)$ and $\langle n_k\rangle=q\,\partial_q\ln\Xi_k=q/(1-q)$, instead of describing it only in prose.
- [Structure] The quantity table lists ${\mechanical{n}}_\alpha$, but the note uses ${\mechanical{n}}_k$, and the helper $q$ is not identified as a helper.

### N1458

Note: [[08.01.02 Bose Functions gₙ(z)|08.01.02 Bose Functions gₙ(z)]]  
Priority: low · Graph: yes · Manim: no

Correct definitions and properties (the density-of-states rewriting in terms of $\lambda$ checks), with a good local convergence argument.

- [Graph] Plot $g_{1/2}(z)$, $g_{3/2}(z)$ and $g_{5/2}(z)$ for $z\in[0,1)$, marking $g_{3/2}(1)=2.612$ and $g_{5/2}(1)=1.341$ and showing the divergence of $g_{1/2}$ as $z\to1$. This visualizes the saturation of the excited states.
- [Structure] The quantity table writes ${\energy{g(\varepsilon)}}$, which puts the argument inside the macro; use ${\energy{g}}({\energy{\varepsilon}})$ as in the body.

### N1459

Note: [[08.01.03 Equation of State - Fugacity Series|08.01.03 Equation of State - Fugacity Series]]  
Priority: low · Graph: yes · Manim: no

Correct pressure derivation and virial coefficients ($-2^{-5/2}$ and $-(2\cdot3^{-5/2}-\tfrac18)\approx-0.0033$ check).

- [Graph] Plot $P/(nk_BT)$ against $n\lambda^3$ from 0 to $\zeta(3/2)$ for the Bose gas (parametric in $z$), together with the Fermi gas ($g_s=1$, same range) and the classical value 1. This shows the opposite statistical corrections and the Bose endpoint at condensation.
- [Simplify] Show the inversion step $z=y-y^2/2^{3/2}+(\tfrac14-3^{-3/2})y^3+\dots$ with $y=n\lambda^3$, from which the virial bracket follows.
- [Structure] In the quantity table, $\mu$ in the fugacity row lacks the ${\energy{}}$ macro; ${\mechanical{n}}_0$ is described as "local" density in a uniform gas, so "condensate number density" is clearer.

### N1460

Note: [[08.02 Bose–Einstein Condensation|08.02 Bose–Einstein Condensation]]  
Priority: low · Graph: no · Manim: no

Clear hub that motivates the reading order and states the uniform-gas, thermodynamic-limit scope.

- [Structure] No change needed; optionally add one sentence with the saturation criterion $n\lambda^3=\zeta(3/2)$ so the hub states the central result it routes to.

### N1461

Note: [[08.02.01 Derivation of the Critical Temperature|08.02.01 Derivation of the Critical Temperature]]  
Priority: medium · Graph: yes · Manim: yes

Correct and compact derivation (coefficient 3.31 and the helium estimate check out), but the proof is a one-liner and the key idea of a finite excited-state capacity is only stated, not shown.

- [Graph] Plot $g_{3/2}(z)$ for $0\le z\le1$ with a horizontal line at $\zeta(3/2)\approx2.612$ and a few horizontal lines for $n\lambda^3$ at decreasing $T$; the missing intersection once $n\lambda^3>2.612$ makes the saturation argument visual.
- [Simplify] Expand the Proof of Theorem 8.1 into two displayed algebra steps ($\lambda_c^3=\zeta(3/2)/n$, then square and invert $h^2/(2\pi m k_BT_c)$) instead of "substitute and solve".
- [Intuition] Add the picture behind the "Scale and endpoint checks" paragraph: condensation sets in when the thermal wavelength $\lambda$ becomes comparable to the mean spacing $n^{-1/3}$, i.e. $n^{1/3}\lambda_c=\zeta(3/2)^{1/3}\approx1.38$.
- [Manim] Animate cooling at fixed $n$: atoms drawn as wave packets of width $\lambda(T)$ grow until neighbouring packets overlap at $T_c$, while a side gauge shows $n\lambda^3$ approaching 2.612.
- [Example] Remark 8.3 gives $3.1\,\mathrm{K}$ for $n=2.2\times10^{28}\,\mathrm{m^{-3}}$, $m=4\,\mathrm{u}$ (direct evaluation gives $3.15\,\mathrm{K}$); link \[\[08.01 Critical Temperature of Helium-4\]\], which redoes this with full precision.

### N1462

Note: [[08.02.02 Condensate - Ground-State Occupation|08.02.02 Condensate - Ground-State Occupation]]  
Priority: low · Graph: no · Manim: no

Clear and correct; the $T^{3/2}$ law, the 0.646 check at $T_c/2$, and Fig. 8.1 are consistent.

- [Simplify] In the first display, insert the intermediate step $N_{\mathrm{ex}}/N=\lambda_c^3/\lambda^3=(T/T_c)^{3/2}$ explicitly before stating the fraction, since the text currently says it only in words.
- [Graph] Optionally add the excited fraction $(T/T_c)^{3/2}$ as a second curve in Fig. 8.1 so the reader sees the two populations summing to one.

### N1463

Note: [[08.02.03 Nature of the Phase Transition|08.02.03 Nature of the Phase Transition]]  
Priority: medium · Graph: yes · Manim: no

Physically correct but abstract; the third-order Ehrenfest statement and the fixed-density path are asserted rather than shown.

- [Simplify] Under "In the Ehrenfest classification", list explicitly along the fixed-density path: $F$ continuous, $S=-\partial F/\partial T$ continuous, $C_V=-T\partial^2F/\partial T^2$ continuous, $\partial C_V/\partial T$ (third derivative) jumps, so the reader sees why it is "third order".
- [Intuition] Add one sentence noting that in the $P$–$v$ plane the ideal Bose gas behaves like a first-order transition (flat isotherms of 08.03.02, coexistence of condensate and normal gas), so the order depends on the path and variables chosen; this reconciles common textbook statements.
- [Graph] Plot the condensate fraction for the uniform gas, $1-(T/T_c)^{3/2}$, and for the harmonic trap, $1-(T/T_c)^3$, on the same axes for $0\le T/T_c\le1.2$ to support the trap callout.

### N1464

Note: [[08.03 Thermodynamic Properties of the Bose Gas|08.03 Thermodynamic Properties of the Bose Gas]]  
Priority: low · Graph: no · Manim: no

Useful hub with good warnings about which variables are held fixed.

- [Structure] No change needed.

### N1465

Note: [[08.03.01 Internal Energy|08.03.01 Internal Energy]]  
Priority: medium · Graph: yes · Manim: no

Results are correct, but "the same integral steps used for pressure" skips the derivation, and one symbol is used for two quantities.

- [Correctness] Symbol clash: ${\mechanical{n}}$ is the mean occupation $\langle n(\varepsilon)\rangle$ in the first equation and the number density in $n\lambda^3=g_{3/2}(z)$ under "Normal phase"; rename the occupation (e.g. $\bar n(\varepsilon)$ or $f(\varepsilon)$), and fix the table row, which lists ${\mechanical{n}}_\alpha$, a symbol the note never uses.
- [Simplify] Show the missing steps from $U=\int\varepsilon g(\varepsilon)\langle n\rangle d\varepsilon$ to Eq. (8.5): insert $g(\varepsilon)\propto V\varepsilon^{1/2}$, substitute $x=\beta\varepsilon$, and use $\int_0^\infty x^{3/2}/(z^{-1}e^x-1)dx=\Gamma(5/2)g_{5/2}(z)$.
- [Simplify] The density of states ${\energy{g}}(\varepsilon)$ and the Bose functions $g_{5/2}$ share the letter $g$; add one sentence distinguishing them or write the density of states as $D(\varepsilon)$.
- [Graph] Plot $U/(Nk_BT_c)$ versus $T/T_c$ from 0 to 3: the $T^{5/2}$ branch below $T_c$, the Bose-function branch above it, and the classical asymptote $\tfrac32T/T_c$.

### N1466

Note: [[08.03.02 Pressure|08.03.02 Pressure]]  
Priority: low · Graph: yes · Manim: yes

Correct and well explained, including the physical meaning of the divergent compressibility.

- [Graph] Plot ideal-Bose isotherms $P(v)$ with $v=V/N$: flat $P=k_BT\zeta(5/2)/\lambda^3$ for $v<v_c=\lambda^3/\zeta(3/2)$ and the normal branch from $v=\lambda^3/g_{3/2}(z)$, $P=k_BTg_{5/2}(z)/\lambda^3$ for $v>v_c$, for two or three temperatures, plus the classical $P=k_BT/v$ for comparison.
- [Manim] Animate isothermal compression of a box: as volume shrinks, excited atoms drop into the condensate (counter of $N_0$ rising) while a pressure gauge stays fixed; on re-expansion past $v_c$ the condensate empties and the gauge starts to move.

### N1467

Note: [[08.03.03 Specific Heat|08.03.03 Specific Heat]]  
Priority: low · Graph: no · Manim: no

Correct derivation (checked: the $dz/dT$ constraint, Eq. 8.7, and the value 1.926) with a good figure and limiting-case checks.

- [Simplify] Between the number-constraint equation and Eq. (8.7), show the intermediate form $C_V/(Nk_B)=\tfrac32[g_{5/2}/g_{3/2}+T\,d(g_{5/2}/g_{3/2})/dT]$, so the origin of the $15/4$ and $9/4$ coefficients is visible.
- [Intuition] State the slope jump explicitly: below $T_c$, $dC_V/dT=\tfrac32C_V/T>0$; above, $C_V$ decreases, which is the cusp seen in Fig. 8.2.

### N1468

Note: [[08.03.04 Entropy and the Third Law|08.03.04 Entropy and the Third Law]]  
Priority: low · Graph: no · Manim: no

Correct and clear, with a careful treatment of the integration constant.

- [Links] Add a link to \[\[08.02 Entropy of the Condensed Bose Gas\]\], which derives the same result via $TS=U+PV$ as an independent route.
- [Intuition] Add the entropy per excited atom, $S/N_{\mathrm{ex}}=\tfrac52k_B\zeta(5/2)/\zeta(3/2)\approx1.28k_B$, constant below $T_c$, to make concrete that all entropy is carried by the excited cloud.

### N1469

Note: [[08.04 Photon Gas and Blackbody Radiation|08.04 Photon Gas and Blackbody Radiation]]  
Priority: low · Graph: no · Manim: no

Good hub that flags the fixed-$\mu$ constraint and the spectral-variable trap.

- [Structure] No change needed.

### N1470

Note: [[08.04.01 Photons as Relativistic Bosons|08.04.01 Photons as Relativistic Bosons]]  
Priority: low · Graph: yes · Manim: no

Correct and concise; the zero-chemical-potential argument is stated but could use one line of thermodynamic justification.

- [Intuition] Add the minimization argument: with photon number free, equilibrium at fixed $T,V$ requires $(\partial F/\partial N)_{T,V}=\mu=0$.
- [Graph] Plot the Planck occupation $\langle n\rangle$ versus $x=\hbar\omega/k_BT$ on log axes together with its limits $1/x$ (small $x$) and $e^{-x}$ (large $x$), illustrating the last paragraph.

### N1471

Note: [[08.04.02 Density of States and the Planck Spectrum|08.04.02 Density of States and the Planck Spectrum]]  
Priority: low · Graph: yes · Manim: yes

Correct (Fig. 8.3 normalizations check out) and carefully explained, but the mode-count derivation is only described in words.

- [Simplify] Display the mode count $g(\omega)d\omega=2\cdot V\,4\pi k^2dk/(2\pi)^3$ with $k=\omega/c$ before the result $V\omega^2/(\pi^2c^3)$, instead of describing it only in the last section.
- [Graph] Add an unnormalized companion plot of $u(\omega,T)$ for the same three temperatures, plus the Rayleigh–Jeans curve at $T_1$, so the $T^3$ peak-height growth hidden by Fig. 8.3 and the ultraviolet catastrophe are both visible.
- [Manim] Animate the Planck curve as $T$ is swept continuously: the peak slides right linearly in $T$, the height grows as $T^3$, and the shaded area grows as $T^4$.

### N1472

Note: [[08.04.03 Stefan–Boltzmann Law|08.04.03 Stefan–Boltzmann Law]]  
Priority: low · Graph: no · Manim: no

Correct and well structured; the $c/4$ factor is explained only in words.

- [Simplify] Display the hemisphere integral $\frac{1}{4\pi}\int_0^{2\pi}d\phi\int_0^{\pi/2}c\cos\theta\sin\theta\,d\theta=c/4$ in the "factor one quarter" section.
- [Example] Add a quick number: $a_R\approx7.57\times10^{-16}\,\mathrm{J\,m^{-3}\,K^{-4}}$ and the radiant exitance of a $300\,\mathrm{K}$ blackbody, about $459\,\mathrm{W\,m^{-2}}$.

### N1473

Note: [[08.04.04 Wien Displacement Law|08.04.04 Wien Displacement Law]]  
Priority: low · Graph: yes · Manim: no

Correct (both roots, $b$, and the solar estimate check out) and the spectral-variable caveat is well made.

- [Graph] Plot $u(\omega)$ and $u(\lambda_{\mathrm{rad}})$ for $T=5778\,\mathrm{K}$ on a common wavelength axis (convert with $\lambda=2\pi c/\omega$), marking the two maxima near $500\,\mathrm{nm}$ and about $880\,\mathrm{nm}$ to show the peak shift caused by the Jacobian.
- [Simplify] Show the one-line derivative that gives $3(1-e^{-x})=x$ (i.e. $3x^2(e^x-1)-x^3e^x=0$) so the reader can reuse it for the $5(1-e^{-x})=x$ case.

### N1474

Note: [[08.04.05 Radiation Pressure|08.04.05 Radiation Pressure]]  
Priority: low · Graph: no · Manim: no

Correct and clear, with a good momentum-flux interpretation.

- [Simplify] In Remark 8.5, add the one-line kinetic derivation $P=\tfrac13 n\langle pv\rangle$ and note that $pv=\varepsilon$ for photons and $pv=2\varepsilon$ for nonrelativistic particles, which gives both $1/3$ and $2/3$ at once.

### N1475

Note: [[08.05 Phonons and the Debye Model|08.05 Phonons and the Debye Model]]  
Priority: low · Graph: no · Manim: no

Clear hub with a useful atoms-versus-excitations distinction.

- [Structure] The sentence "This section develops the Debye model, its temperature limits, and its comparison with the Einstein model:" ends with a colon but is followed by a paragraph rather than the list; move it directly above the link list or end it with a period.

### N1476

Note: [[08.05.01 Lattice Vibrations as Bosons|08.05.01 Lattice Vibrations as Bosons]]  
Priority: low · Graph: yes · Manim: yes

Correct conceptual introduction with a good mode-versus-phonon distinction.

- [Graph] Plot the 1D monatomic chain dispersion $\omega(k)=2\sqrt{K/M}|\sin(ka/2)|$ over the first Brillouin zone together with its linear small-$k$ approximation $v_sk$, to show where linear dispersion holds.
- [Manim] Animate a 1D chain of masses and springs vibrating in one normal mode, then in a superposition of two, to show that a normal mode is a collective oscillator and that a phonon is a quantum of excitation of it.

### N1477

Note: [[08.05.02 Debye Model|08.05.02 Debye Model]]  
Priority: low · Graph: yes · Manim: no

Correct, with a clear cutoff and normalization argument.

- [Intuition] State how the "single effective sound speed" is defined, $3/v_s^3=1/v_L^3+2/v_T^3$; otherwise the reader cannot compute $\Theta_D$ from elastic data.
- [Graph] Plot the Debye density $g_D(\omega)\propto\omega^2$ cut off at $\omega_D$ together with the Einstein spectrum (a single spike at $\omega_E$), both normalized to $3N$, to preview 08.05.05.

### N1478

Note: [[08.05.03 Debye Internal Energy and Specific Heat|08.05.03 Debye Internal Energy and Specific Heat]]  
Priority: low · Graph: yes · Manim: no

Correct (checked $U_0=\tfrac98Nk_B\Theta_D$ and the heat-capacity integrand), clear, with a useful total-versus-molar correction.

- [Graph] Plot the single-mode heat-capacity factor $x^2e^x/(e^x-1)^2$ versus $x=\hbar\omega/k_BT$; it explains why modes with $x\gg1$ freeze out and underlies both limits in 08.05.04.
- [Simplify] The note defines $D(y)$ but Eq. (8.11) does not use it; either write $C_V=3Nk_B[4D(y)-3y/(e^y-1)]$ or say that $C_V$ is usually tabulated directly.

### N1479

Note: [[08.05.04 High- and Low-Temperature Limits|08.05.04 High- and Low-Temperature Limits]]  
Priority: low · Graph: no · Manim: no

Correct and well reasoned (the $12\pi^4/5$ coefficient checks), with good explanations of why each approximation is valid.

- [Simplify] In the high-temperature section, state that the next term $-x/2$ gives a constant $-\tfrac98Nk_B\Theta_D$ in $U-U_0$, which exactly cancels $U_0$ and does not change $C_V$; the first correction to $C_V$ is $-\tfrac{3}{20}Nk_B(\Theta_D/T)^2$.
- [Links] Link \[\[08.04 Accuracy of the Debye T³ Law\]\] from the low-temperature section for the size of the cutoff error.

### N1480

Note: [[08.05.05 Comparison with the Einstein Model|08.05.05 Comparison with the Einstein Model]]  
Priority: low · Graph: yes · Manim: no

Correct and clear comparison with a good figure and a sound argument that low-temperature data test the spectrum.

- [Graph] Add a log-scale second plot of $C_V/(3Nk_B)$ versus $T/\Theta_D$ for $0.01\le T/\Theta_D\le0.3$, where the $T^3$ versus exponential difference is invisible on the linear axis of Fig. 8.4.
- [Intuition] Say where $\Theta_E=0.83\,\Theta_D$ comes from (a source fit or a matching criterion); common matching rules give different ratios (about 0.72 from high-temperature entropy, 0.775 from $\langle\omega^2\rangle$), so the choice should be explained rather than only called a parameter.

### N1481

Note: [[08.05.06 Typical Debye Temperatures|08.05.06 Typical Debye Temperatures]]  
Priority: low · Graph: no · Manim: no

Reference table with values consistent with standard tabulations and a sensible scope note.

- [Example] Add a column with $\Theta_D/(300\,\mathrm{K})$ or the predicted room-temperature $C_V/(3R)$ to make the "same laboratory temperature" remark concrete (lead near the classical limit, diamond far below it).

### N1482

Note: [[08.06 Experimental Bose–Einstein Condensates|08.06 Experimental Bose–Einstein Condensates]]  
Priority: low · Graph: no · Manim: no

Clear hub with good guidance on which observation supports which claim.

- [Structure] No change needed.

### N1483

Note: [[08.06.01 Historical Overview|08.06.01 Historical Overview]]  
Priority: low · Graph: no · Manim: no

Accurate short history (1995 JILA and MIT condensates, 2001 Nobel Prize), with provenance.

- [Intuition] Add the phase-space density target $n\lambda^3\approx2.6$ and typical cloud parameters (peak density around $10^{13}$–$10^{14}\,\mathrm{cm^{-3}}$, a few hundred nK) to connect the history with 08.02.01, and say why the vapor does not solidify first (metastable dilute gas with rare three-body collisions).

### N1484

Note: [[08.06.02 Magneto-Optical Traps and Cooling Methods|08.06.02 Magneto-Optical Traps and Cooling Methods]]  
Priority: medium · Graph: yes · Manim: yes

Correct (the $146\,\mu\mathrm{K}$ Doppler limit for Rb-87 checks), but the cooling mechanisms are only described in words.

- [Graph] Plot the optical-molasses force $F(v)$ from two counter-propagating red-detuned beams (difference of two Lorentzians centred at $v=\pm|\delta|/k$) with its linear small-velocity part $-\alpha v$, for a detuning of about $-\Gamma/2$.
- [Manim] Animate evaporative cooling: a Maxwell–Boltzmann histogram in a trap whose depth is lowered, the high-energy tail is cut off, and the remaining atoms rethermalize to a narrower distribution.
- [Intuition] Add one sentence on why the Doppler limit has the form $\hbar\Gamma/(2k_B)$: damping balanced by momentum diffusion from random photon recoils, optimal at detuning $\delta=-\Gamma/2$.
- [Structure] Mention sub-Doppler (polarization-gradient) cooling, which reaches well below $T_D$; real experiments start evaporation from tens of microkelvin, so the "hundreds of microkelvin" starting point is only the Doppler-limit picture.

### N1485

Note: [[08.06.03 Condensate Properties|08.06.03 Condensate Properties]]  
Priority: low · Graph: yes · Manim: yes

Accurate and carefully hedged, though the Gaussian and Thomas–Fermi profiles are named without formulas.

- [Graph] Plot the ideal Gaussian profile $n(r)\propto e^{-r^2/a_{ho}^2}$ and the Thomas–Fermi profile $n(r)\propto\max(0,1-r^2/R_{TF}^2)$ normalized to the same atom number, with $R_{TF}$ several times $a_{ho}$.
- [Manim] Animate two released condensates expanding and overlapping, producing interference fringes with spacing $ht/(md)$ that changes with the separation $d$ and expansion time $t$.

### N1486

Note: [[08.07 Worked Examples|08.07 Worked Examples]]  
Priority: low · Graph: no · Manim: no

Correct worked examples (all numbers recomputed: 358 nK, $3.85\times10^{26}\,\mathrm{W}$, $0.0482$ and $8.5\times10^{-9}\,\mathrm{J\,mol^{-1}\,K^{-1}}$) with useful model checks.

- [Simplify] In Example 8.4, "about seven orders of magnitude below" is generous: $0.047/8.5\times10^{-9}\approx5.5\times10^6$; say "more than six orders of magnitude".
- [Intuition] In Example 8.2, compare with the uniform-gas formula evaluated at the peak trap density, to show why trapped clouds condense at hundreds of nK despite their low density.

### N1487

Note: [[08.08 Summary|08.08 Summary]]  
Priority: low · Graph: no · Manim: no

Accurate summary with a useful comparison table and a good "choose the constraint" section.

- [Structure] In item 5, the mode density is written $g_D(\omega)$ without the ${\signal{}}$ macro used in 08.05.02; colour it consistently.

### N1488

Note: [[08.99 Exercises|08.99 Exercises]]  
Priority: low · Graph: no · Manim: no

Clear exercise index with a sensible practice route.

- [Structure] No change needed.

### N1489

Note: [[08.01 Critical Temperature of Helium-4|08.01 Critical Temperature of Helium-4]]  
Priority: low · Graph: no · Manim: no

Correct worked solution (recomputed $T_c=3.1325\,\mathrm{K}$) with a sound discussion of interactions.

- [Intuition] Add the degeneracy check $n^{1/3}\lambda_c\approx1.38$ and the mean spacing $n^{-1/3}\approx0.36\,\mathrm{nm}$, comparable to the helium atom size, which shows directly why interactions cannot be neglected in the liquid.

### N1490

Note: [[08.02 Entropy of the Condensed Bose Gas|08.02 Entropy of the Condensed Bose Gas]]  
Priority: low · Graph: no · Manim: no

Correct solution with two independent routes and a careful third-law discussion.

- [Simplify] In "Check the temperature dependence independently", carry out the differentiation and integration ($C_V=\tfrac52U/T$, $S=\int_0^TC_V/T'\,dT'=\tfrac53U/T$) so the check is shown rather than described.
- [Simplify] The grand potential is written ${\energy{\Phi}}$ here but ${\energy{\Omega}}$ in other notes of this chapter; use one symbol.

### N1491

Note: [[08.03 Limits and Maximum of the Planck Spectrum|08.03 Limits and Maximum of the Planck Spectrum]]  
Priority: low · Graph: yes · Manim: no

Correct and complete (the root $4.96511$ and $b=2.89777\times10^{-3}\,\mathrm{m\,K}$ check out).

- [Graph] Plot $x^3/(e^x-1)$ with the Rayleigh–Jeans approximation $x^2$ and the Wien approximation $x^3e^{-x}$ for $0\le x\le10$, marking the peak at $x\approx2.821$; this illustrates the ranges discussed in the last section.
- [Simplify] Use ${\signal{\lambda}}_{\mathrm{rad}}$ consistently: the question and several formulas write plain $\lambda_{\mathrm{rad,max}}$ and $\lambda_{\mathrm{rad}}$ without the colour macro used elsewhere in the note.

### N1492

Note: [[08.04 Accuracy of the Debye T³ Law|08.04 Accuracy of the Debye T³ Law]]  
Priority: low · Graph: yes · Manim: no

Correct and careful (recomputed $y\approx9.1046$, $T\approx32.95\,\mathrm{K}$, and the $1.57\times10^{-5}$ error at $\Theta_D/20$), including a justified correction to the source hint.

- [Graph] Plot the relative error $R(y)/(4\pi^4/15-R(y))$ on a log axis versus $T/\Theta_D$ from 0.03 to 0.2, with horizontal lines at 5% and 1% and a vertical line at $T/\Theta_D=0.05$.

### N1493

Note: [[08.05 Photon Gas in a One-Litre Cavity|08.05 Photon Gas in a One-Litre Cavity]]  
Priority: low · Graph: no · Manim: no

Correct worked numbers (recomputed $U$, $P$, $\langle N_\gamma\rangle$, and $2.701k_BT$) with good scaling checks.

- [Intuition] Compare $P_{\mathrm{rad}}\approx0.0204\,\mathrm{Pa}$ with an ideal gas of the same particle number at $3000\,\mathrm{K}$ ($Nk_BT/V\approx0.0227\,\mathrm{Pa}$), showing that the photon gas has $P\approx0.90\,nk_BT$.

### N1494

Note: [[08.06 Condensation in Two Dimensions|08.06 Condensation in Two Dimensions]]  
Priority: low · Graph: yes · Manim: no

Correct and thorough solution with careful scope statements on the theorem and the trap limit.

- [Graph] Plot $g_1(z)=-\ln(1-z)$, $g_{3/2}(z)$, and $g_2(z)$ for $0\le z<1$ on one axis, showing that only $g_1$ diverges; this condenses the main argument into one picture.
- [Simplify] The last two sections repeat the endpoint and theorem-scope arguments; merge "Endpoint test and scope of the comparison" into "Physical interpretation and theorem scope" to shorten the note.

### N1495

Note: [[Bose condensation, photon gases, and phonons|Bose condensation, photon gases, and phonons]]  
Priority: high · Graph: yes · Manim: no

Transcribed lecture notes whose derivations are correct, but with a badly wrong physical-quantities table, a few historical slips, unmotivated fragments, and no phonon content despite the title.

- [Correctness] The physical-quantities table lists meanings and symbols the note does not use or uses differently: $g$ as "Landé factor" (here it is only the internal degeneracy), $j$ as "Internal partition function" (here $j$ is the summation index in $\zeta(s)$), $n$ as "Amount of substance" and "Number density" (here $n(\epsilon)$ is the occupation number, which is missing), $\Omega$ as "Multiplicity" (here ${\energy{\Omega}}$ is the grand potential), and $\energy{F}$, $\mechanical{P}_{\mathrm{int}}$, $\mechanical{P}_{\mathrm{ext}}$, $\signal{\nu}$ are never used; rebuild the table from the symbols actually present.
- [Correctness] Under "Critical temperature of the Bose gas", London's proposal linking helium to Bose condensation dates from 1938, not 1928, and the lambda point is $2.17\,\mathrm{K}$; keep the transcribed "1928" and "2.19 K" only with a clarification callout (the same 2.19 K appears in the heat-capacity section).
- [Correctness] Fig. 15 caption says the maximum of $x^3/(e^x-1)$ lies "near $x=2.822$"; the root of $3(1-e^{-x})=x$ is $2.8214$, so write $x\approx2.821$ as in 08.04.04.
- [Simplify] The opening line about an ultrarelativistic Fermi gas, the sentence "The grand canonical factor associated with particle number is $e^{+\beta\mu N}$", and the finite-volume $|\mu|$ estimate at $T_c$ appear without derivation or connection; either derive them in one or two lines or remove them.
- [Structure] The title promises phonons but the note contains only the heading "Photons and phonons" and no phonon material; either rename the note or add a short Debye section linking to \[\[08.05.02 Debye Model\]\] and the Einstein comparison.
- [Graph] Replace or complement the scanned Fig. 12 with a native plot of $N_0/N=1-(T/T_c)^{3/2}$ and $N_{\mathrm{ex}}/N=(T/T_c)^{3/2}$ for $0\le T/T_c\le1.3$, and the chemical-potential sketch with $\beta\mu(T/T_c)$ computed from $g_{3/2}(z)=\zeta(3/2)(T_c/T)^{3/2}$ for $1\le T/T_c\le3$, showing the quadratic departure from zero.
