---
title: "Note Improvement Tracker – 02 Physics/02 Thermodynamics and Statistical Mechanics/07 Fermi Gas"
---

> [!TLDR]
> This note tracks the review of the 38 notes in `02 Physics/02 Thermodynamics and Statistical Mechanics/07 Fermi Gas`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 5 possible errors or notation conflicts. 5 of them are verified (5 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N1442|N1442]] 07.06.03 Thermal Conductivity and the Lorenz Number: The heat-capacity label is written ${\thermal{c}}_V^{({\electric{e}})}$, which colours the label "electronic" as the elementary charge. Use the plain label $(e)$, as in \[\[07.04.01 Derivation of the Linear Contribution\]\]. **Fixed:** Changed c_V^{(\electric{e})} to plain c_V^{(e)}
- [[#N1447|N1447]] 07.07.03 Ultrarelativistic Regime and the Chandrasekhar Mass: Symbol clash: ${\mechanical{A}}'$ (the energy coefficient) uses the same coloured letter as the mass number ${\mechanical{A}}$ in $\mu_e=A/Z$ in the same note. In 07.07.02 the coefficient is the uncoloured helper $A$. Use an uncoloured helper such as $a'$ (and $b$), or rename the mass number. **Fixed:** Renamed the energy coefficient to the uncoloured helper a' in all six places; B unchanged
- [[#N1454|N1454]] Degenerate Fermi gases and the Sommerfeld expansion: $x$ is used for two quantities: the integration variable $x=\beta(\epsilon-\mu)$ in "Fermi gas at nonzero temperature" and $x=k_BT/E_F$ from the chemical-potential result onward. Rename the second, for example $t=k_BT/E_F$. **Fixed:** Renamed the second use to t=k_BT/E_F from the chemical-potential result through the entropy result (expansions re-checked)
- [[#N1454|N1454]] Degenerate Fermi gases and the Sommerfeld expansion: The quantity table lists rows that are wrong or unused here: $n$ in $\unit{mol}$ (here $n$ is only number density), $g$ "Landé factor" (here spin degeneracy), $\Omega$ "Multiplicity", $z$ fugacity, and $P_{\mathrm{int}},P_{\mathrm{ext}}$. Remove or correct them. **Fixed:** Removed n in mol, Omega Multiplicity, Lande g, fugacity z rows; pressure row reduced to P; g row now spin degeneracy g=2s+1
- [[#N1454|N1454]] Degenerate Fermi gases and the Sommerfeld expansion: Room-temperature thermal energy is given as $0.024\,\mathrm{eV}$ in "Sommerfeld expansion" and as $0.026\,\mathrm{eV}$ in "Metals". At 300 K, $k_BT=0.0259\,\mathrm{eV}$; mark the first as the notebook's rounding or correct it. **Fixed:** kT at 300 K is 0.0259 eV; kept the notebook value and added the correct value in parentheses

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N1417 | [[07.00 Fermi Gas\|07.00 Fermi Gas]] | Analyzed | low | no | no | [[#N1417\|View]] |
| N1418 | [[07.01 Fermi Gas at Zero Temperature\|07.01 Fermi Gas at Zero Temperature]] | Analyzed | low | no | no | [[#N1418\|View]] |
| N1419 | [[07.01.01 Level Occupation and the Fermi Sphere\|07.01.01 Level Occupation and the Fermi Sphere]] | Analyzed | low | no | yes | [[#N1419\|View]] |
| N1420 | [[07.01.02 Calculation of the Fermi Momentum\|07.01.02 Calculation of the Fermi Momentum]] | Analyzed | low | no | no | [[#N1420\|View]] |
| N1421 | [[07.02 Density of States and Total Energy at T = 0\|07.02 Density of States and Total Energy at T = 0]] | Analyzed | low | no | no | [[#N1421\|View]] |
| N1422 | [[07.02.01 Density of States\|07.02.01 Density of States]] | Analyzed | low | no | no | [[#N1422\|View]] |
| N1423 | [[07.02.02 Total Energy at T = 0\|07.02.02 Total Energy at T = 0]] | Analyzed | low | no | no | [[#N1423\|View]] |
| N1424 | [[07.02.03 Degeneracy Pressure\|07.02.03 Degeneracy Pressure]] | Analyzed | low | no | no | [[#N1424\|View]] |
| N1425 | [[07.03 Fermi Gas at Finite Temperature - Sommerfeld Expansion\|07.03 Fermi Gas at Finite Temperature - Sommerfeld Expansion]] | Analyzed | low | no | no | [[#N1425\|View]] |
| N1426 | [[07.03.01 Fermi–Dirac Distribution\|07.03.01 Fermi–Dirac Distribution]] | Analyzed | low | no | no | [[#N1426\|View]] |
| N1427 | [[07.03.02 Fermi Integrals\|07.03.02 Fermi Integrals]] | Analyzed | low | yes | no | [[#N1427\|View]] |
| N1428 | [[07.03.03 Sommerfeld Expansion\|07.03.03 Sommerfeld Expansion]] | Analyzed | medium | yes | no | [[#N1428\|View]] |
| N1429 | [[07.03.04 Chemical Potential at Low Temperature\|07.03.04 Chemical Potential at Low Temperature]] | Analyzed | low | yes | no | [[#N1429\|View]] |
| N1430 | [[07.03.05 Total Energy at Finite Temperature\|07.03.05 Total Energy at Finite Temperature]] | Analyzed | low | yes | no | [[#N1430\|View]] |
| N1431 | [[07.04 Electronic Specific Heat\|07.04 Electronic Specific Heat]] | Analyzed | low | no | no | [[#N1431\|View]] |
| N1432 | [[07.04.01 Derivation of the Linear Contribution\|07.04.01 Derivation of the Linear Contribution]] | Analyzed | low | no | no | [[#N1432\|View]] |
| N1433 | [[07.04.02 Comparison with the Classical Prediction\|07.04.02 Comparison with the Classical Prediction]] | Analyzed | low | no | no | [[#N1433\|View]] |
| N1434 | [[07.04.03 Experimental Significance\|07.04.03 Experimental Significance]] | Analyzed | medium | yes | no | [[#N1434\|View]] |
| N1435 | [[07.05 Pauli Paramagnetism\|07.05 Pauli Paramagnetism]] | Analyzed | low | no | no | [[#N1435\|View]] |
| N1436 | [[07.05.01 Magnetization of the Electron Gas\|07.05.01 Magnetization of the Electron Gas]] | Analyzed | low | yes | no | [[#N1436\|View]] |
| N1437 | [[07.05.02 Pauli Susceptibility\|07.05.02 Pauli Susceptibility]] | Analyzed | low | yes | no | [[#N1437\|View]] |
| N1438 | [[07.05.03 Finite-Temperature Corrections\|07.05.03 Finite-Temperature Corrections]] | Analyzed | low | no | no | [[#N1438\|View]] |
| N1439 | [[07.06 Electron Gas in Metals - Drude–Sommerfeld Model\|07.06 Electron Gas in Metals - Drude–Sommerfeld Model]] | Analyzed | low | no | no | [[#N1439\|View]] |
| N1440 | [[07.06.01 Drude Model\|07.06.01 Drude Model]] | Analyzed | low | no | yes | [[#N1440\|View]] |
| N1441 | [[07.06.02 Sommerfeld Transport Model\|07.06.02 Sommerfeld Transport Model]] | Analyzed | low | no | no | [[#N1441\|View]] |
| N1442 | [[07.06.03 Thermal Conductivity and the Lorenz Number\|07.06.03 Thermal Conductivity and the Lorenz Number]] | Analyzed | low | no | no | [[#N1442\|View]] |
| N1443 | [[07.06.04 Effective Mass and Experimental Density of States\|07.06.04 Effective Mass and Experimental Density of States]] | Analyzed | low | no | no | [[#N1443\|View]] |
| N1444 | [[07.07 White Dwarfs and the Chandrasekhar Mass\|07.07 White Dwarfs and the Chandrasekhar Mass]] | Analyzed | low | no | no | [[#N1444\|View]] |
| N1445 | [[07.07.01 Structure and Composition\|07.07.01 Structure and Composition]] | Analyzed | low | no | no | [[#N1445\|View]] |
| N1446 | [[07.07.02 Hydrostatic Equilibrium and Degeneracy Pressure\|07.07.02 Hydrostatic Equilibrium and Degeneracy Pressure]] | Analyzed | low | yes | no | [[#N1446\|View]] |
| N1447 | [[07.07.03 Ultrarelativistic Regime and the Chandrasekhar Mass\|07.07.03 Ultrarelativistic Regime and the Chandrasekhar Mass]] | Analyzed | medium | no | yes | [[#N1447\|View]] |
| N1448 | [[07.07.04 Stellar Stability and Quantum Glue\|07.07.04 Stellar Stability and Quantum Glue]] | Analyzed | low | yes | no | [[#N1448\|View]] |
| N1449 | [[07.08 Worked Examples\|07.08 Worked Examples]] | Analyzed | low | yes | no | [[#N1449\|View]] |
| N1450 | [[07.09 Further Study - Relativistic Fermi Gas\|07.09 Further Study - Relativistic Fermi Gas]] | Analyzed | low | yes | no | [[#N1450\|View]] |
| N1451 | [[07.10 Summary\|07.10 Summary]] | Analyzed | low | no | no | [[#N1451\|View]] |
| N1452 | [[07.99 Exercises\|07.99 Exercises]] | Analyzed | low | no | no | [[#N1452\|View]] |
| N1453 | [[07.01 Sirius B - Degenerate Electrons\|99 Exercises/07.01 Sirius B - Degenerate Electrons]] | Analyzed | low | no | no | [[#N1453\|View]] |
| N1454 | [[Degenerate Fermi gases and the Sommerfeld expansion\|Degenerate Fermi gases and the Sommerfeld expansion]] | Analyzed | high | no | no | [[#N1454\|View]] |

## Suggestions

### N1417

Note: [[07.00 Fermi Gas|07.00 Fermi Gas]]  
Priority: low · Graph: no · Manim: no

Clear chapter hub with a good motivating question and correct links.

- [Structure] No change needed.

### N1418

Note: [[07.01 Fermi Gas at Zero Temperature|07.01 Fermi Gas at Zero Temperature]]  
Priority: low · Graph: no · Manim: no

Short, correct hub that motivates filling under exclusion.

- [Structure] No change needed.

### N1419

Note: [[07.01.01 Level Occupation and the Fermi Sphere|07.01.01 Level Occupation and the Fermi Sphere]]  
Priority: low · Graph: no · Manim: yes

Correct and well illustrated (the occupied points in Fig. 7.1 correctly lie inside radius 1.45), with careful remarks on the bulk limit.

- [Manim] Animate the ground-state filling: add particles two at a time (spin up and down) to the $k$-grid points in order of increasing $|\mathbf k|$, so that the occupied region grows into the Fermi disk while the boundary radius $k_F\propto N^{1/3}$ (2D section) is tracked.
- [Structure] The integer labels are written $n_x,n_y,n_z$, while ${\mechanical{n}}$ is number density in the next note. Use $\ell_x,\ell_y,\ell_z$ as in \[\[06.09.01 Motivation and Problem Formulation\]\].

### N1420

Note: [[07.01.02 Calculation of the Fermi Momentum|07.01.02 Calculation of the Fermi Momentum]]  
Priority: low · Graph: no · Manim: no

Correct and compact derivation of $k_F$, $\varepsilon_F$ and $p_F$ with good unit checks.

- [Example] Add one concrete line, or a link to \[\[07.08 Worked Examples\]\]: copper with $n=8.49\times10^{28}\,\mathrm{m^{-3}}$ gives $k_F=1.36\times10^{10}\,\mathrm{m^{-1}}$, $\varepsilon_F=7.0\,\mathrm{eV}$ and $T_F=8.2\times10^4\,\mathrm K$, which makes "typical metallic Fermi temperatures" concrete.

### N1421

Note: [[07.02 Density of States and Total Energy at T = 0|07.02 Density of States and Total Energy at T = 0]]  
Priority: low · Graph: no · Manim: no

Clear hub that correctly stresses the fixed-$N$ constraint for the pressure.

- [Structure] No change needed.

### N1422

Note: [[07.02.01 Density of States|07.02.01 Density of States]]  
Priority: low · Graph: no · Manim: no

Correct per-volume density of states with an explicit convention note relative to Chapter 6.

- [Structure] The helper coefficient $C$ is later used next to the heat capacities ${\thermal{C}}_V$ (07.03–07.04). Rename it, for example $A_g$, or state that $C$ here is not a heat capacity.
- [Simplify] Show the omitted algebra step $4\pi k^2\,dk/(2\pi)^3=\tfrac{1}{2\pi^2}\tfrac{(2m)^{3/2}}{2\hbar^3}\sqrt\varepsilon\,d\varepsilon$ between the second and third displays.

### N1423

Note: [[07.02.02 Total Energy at T = 0|07.02.02 Total Energy at T = 0]]  
Priority: low · Graph: no · Manim: no

Correct and clear, with a good figure; the plotted finite-temperature chemical potentials ($0.9947$ and $0.9146\,\varepsilon_F$ for $k_BT=0.08$ and $0.3\,\varepsilon_F$) agree with an exact number-equation solution.

- [Simplify] State in the Fig. 7.2 caption the two temperatures used ($k_BT=0.08\,\varepsilon_F$ and $0.3\,\varepsilon_F$), so that readers can relate the curves to the Sommerfeld formula.

### N1424

Note: [[07.02.03 Degeneracy Pressure|07.02.03 Degeneracy Pressure]]  
Priority: low · Graph: no · Manim: no

Correct ($P_0=\tfrac{\hbar^2}{5m}(6\pi^2/g_s)^{2/3}n^{5/3}$ checks), with a good second derivation route described in words.

- [Simplify] Write the energy-derivative route as two displayed lines, $E_0\propto V^{-2/3}$ and $P_0=-(\partial E_0/\partial V)_N=\tfrac23E_0/V$, instead of only describing it in prose.
- [Links] Link to \[\[06.12 Equation of State and Degeneracy Pressure\]\], which already contains the copper estimate $P_0\approx3.8\times10^{10}\,\mathrm{Pa}$.

### N1425

Note: [[07.03 Fermi Gas at Finite Temperature - Sommerfeld Expansion|07.03 Fermi Gas at Finite Temperature - Sommerfeld Expansion]]  
Priority: low · Graph: no · Manim: no

Clear hub that states the fixed-density constraint and the validity window of the expansion.

- [Structure] No change needed.

### N1426

Note: [[07.03.01 Fermi–Dirac Distribution|07.03.01 Fermi–Dirac Distribution]]  
Priority: low · Graph: no · Manim: no

Correct, with a figure that uses chemical potentials from the exact number equation (it improves on the source).

- [Simplify] State in the Fig. 7.3 caption the three temperatures plotted ($k_BT/\varepsilon_F=0.05$, $0.15$, $0.4$) and the corresponding $\mu/\varepsilon_F$ ($0.998$, $0.981$, $0.840$).

### N1427

Note: [[07.03.02 Fermi Integrals|07.03.02 Fermi Integrals]]  
Priority: low · Graph: yes · Manim: no

Correct definitions and a careful normalization warning, but no formula connects the integrals back to $n$ and $E$.

- [Simplify] Add the two explicit uses, $n=C(k_BT)^{3/2}F_{1/2}(\eta)$ and $E/V=C(k_BT)^{5/2}F_{3/2}(\eta)$. The "order $1/2$ versus $3/2$" paragraph then has formulas to refer to.
- [Graph] Plot $F_{1/2}(\eta)$ for $\eta\in[-4,10]$ on a log scale, with the classical asymptote $\Gamma(3/2)e^\eta$ and the degenerate asymptote $\tfrac23\eta^{3/2}$. This shows the crossover between the two regimes.
- [Structure] $\eta$ here is the reduced chemical potential, while \[\[06.08.03 Quantum Degeneracy Parameter\]\] uses ${\mechanical{\eta}}$ for $n\lambda_T^3$; add a one-line warning about the different meaning.

### N1428

Note: [[07.03.03 Sommerfeld Expansion|07.03.03 Sommerfeld Expansion]]  
Priority: medium · Graph: yes · Manim: no

The result (7.3) and the $\pi^2/3$ moment are correct, but the derivation jumps from the Taylor series to the lemma without the intermediate line.

- [Simplify] Insert the intermediate result $I=\Phi(\mu)+\tfrac{\pi^2}{6}(k_BT)^2\Phi''(\mu)+\tfrac{7\pi^4}{360}(k_BT)^4\Phi^{(4)}(\mu)+\dots$ and then note $\Phi''=\phi'$ and $\Phi(\mu)=\int_0^\mu\phi$. This makes the link to Eq. (7.3) explicit.
- [Graph] Plot the kernel $-\partial f/\partial\varepsilon$ against $(\varepsilon-\mu)/k_BT$ for $\in[-8,8]$, with its full width at half maximum of about $3.5\,k_BT$ marked. This shows why only a window of width $\sim k_BT$ matters.
- [Example] Add a worked check with $\phi=\varepsilon^{1/2}$, giving the number correction used in 07.03.04, so that the lemma is applied once before it is used.
- [Structure] $\Phi$ is the primitive here but the grand potential in Chapter 6 (06.11). Consider another letter, such as $K(\varepsilon)$.

### N1429

Note: [[07.03.04 Chemical Potential at Low Temperature|07.03.04 Chemical Potential at Low Temperature]]  
Priority: low · Graph: yes · Manim: no

Correct derivation and a good physical sign argument.

- [Graph] Plot $\mu/\varepsilon_F$ against $T/T_F$ for $0$–$1.5$: show the exact numerical solution of the number equation, the Sommerfeld approximation $1-\tfrac{\pi^2}{12}(T/T_F)^2$, and the classical limit $k_BT\ln[\tfrac43\pi^{-1/2}(T_F/T)^{3/2}]$. Mark where $\mu$ crosses zero (near $T\approx0.99\,T_F$).
- [Example] Quantify the shift for copper at 300 K: $\Delta\mu/\varepsilon_F\approx-1.1\times10^{-5}$, so $\mu=\varepsilon_F$ is an excellent approximation in metals.

### N1430

Note: [[07.03.05 Total Energy at Finite Temperature|07.03.05 Total Energy at Finite Temperature]]  
Priority: low · Graph: yes · Manim: no

Correct (the coefficient $5\pi^2/12$ checks) and well explained, including why the $\mu$ shift matters.

- [Simplify] Show the substitution explicitly: $\tfrac25C\mu^{5/2}\approx\tfrac25C\varepsilon_F^{5/2}[1-\tfrac{5\pi^2}{24}t^2]$ plus $\tfrac{\pi^2}{4}C\varepsilon_F^{5/2}t^2$, with $t=k_BT/\varepsilon_F$, giving the net $\tfrac{\pi^2}{6}$. The cancellation that the text describes is then visible.
- [Graph] Plot $E/E_0$ against $T/T_F$ from 0 to 2, using the exact numerical result, with the Sommerfeld parabola and the classical line $E/(N\varepsilon_F)=\tfrac32T/T_F$.

### N1431

Note: [[07.04 Electronic Specific Heat|07.04 Electronic Specific Heat]]  
Priority: low · Graph: no · Manim: no

Clear hub with good motivation for why a large energy coexists with a small heat capacity.

- [Structure] No change needed.

### N1432

Note: [[07.04.01 Derivation of the Linear Contribution|07.04.01 Derivation of the Linear Contribution]]  
Priority: low · Graph: no · Manim: no

Correct; all three expressions for $\gamma$ agree, given the per-volume $g(\varepsilon_F)=3n/(2\varepsilon_F)$.

- [Example] Add the copper number: $\gamma_{\mathrm{free}}=\pi^2R/(2T_F)\approx0.50\,\mathrm{mJ\,mol^{-1}\,K^{-2}}$ against the measured $0.695$. Link to \[\[07.08 Worked Examples\]\].
- [Simplify] Show the one-line identity $g(\varepsilon_F)=3n/(2\varepsilon_F)$ that turns the middle expression for $\gamma$ into the density-of-states form.

### N1433

Note: [[07.04.02 Comparison with the Classical Prediction|07.04.02 Comparison with the Classical Prediction]]  
Priority: low · Graph: no · Manim: no

Correct ratio $\pi^2T/(3T_F)$ with a justified source correction.

- [Example] Evaluate the ratio for copper at 300 K: $\pi^2\cdot300/(3\cdot8.18\times10^4)\approx0.012$. This quantifies the famous failure of the classical $\tfrac32R$ electronic heat capacity.

### N1434

Note: [[07.04.03 Experimental Significance|07.04.03 Experimental Significance]]  
Priority: medium · Graph: yes · Manim: no

Correct physics and data (the Debye coefficient, the $3.9\,\mathrm K$ crossover and the table values check), but the figure plots against $T$, although the method is a straight line against $T^2$.

- [Graph] Replace Fig. 7.4, or add a second figure, with $C/T$ against $T^2$ for $T^2\in[0,40]\,\mathrm{K^2}$ using $\gamma=0.695$ and $\beta_{\mathrm{ph}}=0.046\,\mathrm{mJ\,mol^{-1}\,K^{-4}}$. Show the straight line, the intercept $\gamma$ and the slope $\beta_{\mathrm{ph}}$, which is the actual analysis the note describes.
- [Structure] The first display writes $\beta_{\mathrm{ph}}$ uncolored, while later lines use ${\thermal{\beta}}_{\mathrm{ph}}$; make it consistent.
- [Example] Add the inverse step for Cu: the slope $0.046\,\mathrm{mJ\,mol^{-1}\,K^{-4}}$ gives $\Theta_D=(12\pi^4R/5\beta_{\mathrm{ph}})^{1/3}\approx350\,\mathrm K$, close to the tabulated $343\,\mathrm K$.

### N1435

Note: [[07.05 Pauli Paramagnetism|07.05 Pauli Paramagnetism]]  
Priority: low · Graph: no · Manim: no

Clear hub that correctly states the scope (spin only, no orbital or exchange terms).

- [Structure] No change needed.

### N1436

Note: [[07.05.01 Magnetization of the Electron Gas|07.05.01 Magnetization of the Electron Gas]]  
Priority: low · Graph: yes · Manim: no

Correct signs and populations, carefully explained.

- [Graph] Add the standard Pauli picture: the two half-densities of states $g_1(\varepsilon\mp\mu_BB)$ drawn back-to-back (spin up to the left, spin down to the right), shifted by $\pm\mu_BB$ and filled to a common $\mu$. The small excess area in the down branch is the magnetization.
- [Structure] $g_1$ is written without the ${\energy{}}$ macro, unlike ${\energy{g}}$; use ${\energy{g}}_1$.

### N1437

Note: [[07.05.02 Pauli Susceptibility|07.05.02 Pauli Susceptibility]]  
Priority: low · Graph: yes · Manim: no

Correct derivation and a justified correction of the source's Curie comparison (ratio $\tfrac32T/T_F$ for spin 1/2).

- [Example] Add a number: for copper's free-electron values, $\chi_{\mathrm{Pauli}}=3n\mu_0\mu_B^2/(2\varepsilon_F)\approx1.2\times10^{-5}$, which shows how small the effect is (and that diamagnetic terms can compete).
- [Graph] Plot $\chi/\chi_{\mathrm{Pauli}}$ against $T/T_F$ (0–1): a nearly flat Pauli curve together with the Curie curve $\tfrac23T_F/T$. This visualizes the remark that degeneracy suppresses the response.

### N1438

Note: [[07.05.03 Finite-Temperature Corrections|07.05.03 Finite-Temperature Corrections]]  
Priority: low · Graph: no · Manim: no

Correct coefficient $-\pi^2/12$, but the two contributions are described only in words.

- [Simplify] Add the two-line calculation: $\chi\propto\int g(-f')\,d\varepsilon=g(\mu)+\tfrac{\pi^2}{6}(k_BT)^2g''(\mu)$, with the curvature term $-\tfrac{\pi^2}{24}t^2$ and the $\mu$-shift term $-\tfrac{\pi^2}{24}t^2$ summing to $-\tfrac{\pi^2}{12}t^2$, where $t=k_BT/\varepsilon_F$.

### N1439

Note: [[07.06 Electron Gas in Metals - Drude–Sommerfeld Model|07.06 Electron Gas in Metals - Drude–Sommerfeld Model]]  
Priority: low · Graph: no · Manim: no

Clear hub that separates equilibrium statistics from the relaxation-time input.

- [Structure] No change needed.

### N1440

Note: [[07.06.01 Drude Model|07.06.01 Drude Model]]  
Priority: low · Graph: no · Manim: yes

Correct ($\tau=\sigma m_e/(ne^2)\approx2.5\times10^{-14}\,\mathrm s$ for copper checks), but the force-balance derivation is described rather than shown.

- [Simplify] Display the equation of motion $m_e\,d\langle\mathbf v\rangle/dt=-e\mathbf E-m_e\langle\mathbf v\rangle/\tau$, its steady state $\langle\mathbf v\rangle=-e\tau\mathbf E/m_e$, and $\mathbf j=-ne\langle\mathbf v\rangle=\sigma\mathbf E$. This replaces the paragraph about signs.
- [Manim] Animate a few electrons moving randomly with occasional scattering events while a weak field adds a slow drift opposite to $\mathbf E$. Show the average velocity settling at $-e\tau E/m_e$, which makes the relaxation-time picture tangible.
- [Example] Add the drift speed for $1\,\mathrm A$ in a $1\,\mathrm{mm^2}$ copper wire ($\approx7\times10^{-5}\,\mathrm{m\,s^{-1}}$), to contrast with $v_F\approx1.6\times10^6\,\mathrm{m\,s^{-1}}$ in 07.06.02.

### N1441

Note: [[07.06.02 Sommerfeld Transport Model|07.06.02 Sommerfeld Transport Model]]  
Priority: low · Graph: no · Manim: no

Correct numbers ($v_F=1.57\times10^6\,\mathrm{m\,s^{-1}}$, about 13 times the classical speed, $\ell\approx39\,\mathrm{nm}$) and a good clarification of the temperature of the estimate.

- [Intuition] Add the picture of a Fermi sphere displaced by $\delta\mathbf k=-e\tau\mathbf E/\hbar$: only states near the surface change occupation, which is why $v_F$, and not the drift speed, enters the mean free path.

### N1442

Note: [[07.06.03 Thermal Conductivity and the Lorenz Number|07.06.03 Thermal Conductivity and the Lorenz Number]]  
Priority: low · Graph: no · Manim: no

Correct derivation ($L_0=\pi^2k_B^2/3e^2=2.44\times10^{-8}\,\mathrm{W\,\Omega\,K^{-2}}$), and the table ratios recompute.

- [Correctness] The heat-capacity label is written ${\thermal{c}}_V^{({\electric{e}})}$, which colours the label "electronic" as the elementary charge. Use the plain label $(e)$, as in \[\[07.04.01 Derivation of the Linear Contribution\]\].
- [Simplify] Show the substitution $\varepsilon_F=\tfrac12m_ev_F^2$ that turns $\tfrac13c_Vv_F^2\tau$ into $\pi^2nk_B^2T\tau/(3m_e)$.

### N1443

Note: [[07.06.04 Effective Mass and Experimental Density of States|07.06.04 Effective Mass and Experimental Density of States]]  
Priority: low · Graph: no · Manim: no

Correct linearized dispersion, with a justified source correction and good caveats on multiband metals.

- [Links] Link the enhancement factor to the copper (1.39) and iron (7.9) estimates in \[\[07.08 Worked Examples\]\].

### N1444

Note: [[07.07 White Dwarfs and the Chandrasekhar Mass|07.07 White Dwarfs and the Chandrasekhar Mass]]  
Priority: low · Graph: no · Manim: no

Clear hub that correctly frames the mass limit as a scaling argument.

- [Structure] No change needed.

### N1445

Note: [[07.07.01 Structure and Composition|07.07.01 Structure and Composition]]  
Priority: low · Graph: no · Manim: no

Correct estimates ($n_e\approx3\times10^{35}\,\mathrm{m^{-3}}$, $T_F\sim2\times10^9\,\mathrm K$) with good caveats.

- [Example] Show the two numbers behind the claims: $\varepsilon_F^{\mathrm{NR}}\approx0.16\,\mathrm{MeV}$ ($T_F\approx1.9\times10^9\,\mathrm K$) and $p_Fc/(m_ec^2)\approx0.8$ at $\rho=10^9\,\mathrm{kg\,m^{-3}}$. The phrase "can be comparable" then becomes quantitative.

### N1446

Note: [[07.07.02 Hydrostatic Equilibrium and Degeneracy Pressure|07.07.02 Hydrostatic Equilibrium and Degeneracy Pressure]]  
Priority: low · Graph: yes · Manim: no

Correct energy-balance argument (the virial check $|E_{\mathrm{grav}}|=2E_{\mathrm{kin}}$ and the second derivative $2A/R^4$ check), but no number is given for the radius.

- [Example] Write out $A$ and $B$ and evaluate $R_{\mathrm{eq}}=2A/B$ for $M=M_\odot$ and $\mu_e=2$. It gives about $7\times10^3\,\mathrm{km}$, close to Earth's radius and to the observed white-dwarf radii in 07.07.01.
- [Graph] Plot $E_{\mathrm{kin}}=A/R^2$, $E_{\mathrm{grav}}=-B/R$ and their sum against $R/R_{\mathrm{eq}}$ for $0.3$–$4$, marking the minimum at $R_{\mathrm{eq}}$ with depth $-B^2/(4A)$.

### N1447

Note: [[07.07.03 Ultrarelativistic Regime and the Chandrasekhar Mass|07.07.03 Ultrarelativistic Regime and the Chandrasekhar Mass]]  
Priority: medium · Graph: no · Manim: yes

Correct scaling argument and coefficients, with a good clarification of the marginal case, but the energy coefficient reuses the mass-number symbol.

- [Correctness] Symbol clash: ${\mechanical{A}}'$ (the energy coefficient) uses the same coloured letter as the mass number ${\mechanical{A}}$ in $\mu_e=A/Z$ in the same note. In 07.07.02 the coefficient is the uncoloured helper $A$. Use an uncoloured helper such as $a'$ (and $b$), or rename the mass number.
- [Example] Complete the uniform-density estimate: setting $A'=B$ with $A'=\tfrac34(9\pi/4)^{1/3}\hbar cN_e^{4/3}$ and $B=\tfrac35GM^2$ gives $M\approx1.75\,M_\odot$ for $\mu_e=2$. This shows that the crude model already lands within 20 % of $5.83/\mu_e^2=1.46\,M_\odot$.
- [Manim] Animate $E_{\mathrm{tot}}(R)$ using the full relativistic kinetic energy, $\propto\int_0^{x_F}(\sqrt{1+t^2}-1)t^2dt$ with $x_F\propto N^{1/3}/R$, as $M$ increases. The minimum moves to smaller $R$, becomes shallower, and disappears at the Chandrasekhar mass.

### N1448

Note: [[07.07.04 Stellar Stability and Quantum Glue|07.07.04 Stellar Stability and Quantum Glue]]  
Priority: low · Graph: yes · Manim: no

Correct mass–radius scaling ($R\propto M^{-1/3}$), with careful scope limits.

- [Graph] Plot the white-dwarf mass–radius relation for $M/M_\odot\in[0.2,1.46]$: the nonrelativistic law $R\propto M^{-1/3}$, normalized with the 07.07.02 estimate, and a schematic relativistic curve that falls to $R=0$ at $M_{\mathrm{Ch}}$. Mark Sirius B ($1.02\,M_\odot$, about $5600\,\mathrm{km}$).

### N1449

Note: [[07.08 Worked Examples|07.08 Worked Examples]]  
Priority: low · Graph: yes · Manim: no

All numbers recompute (Cu: $\varepsilon_F=7.04\,\mathrm{eV}$, $\gamma_V=70.7\,\mathrm{J\,m^{-3}\,K^{-2}}$, $\gamma_{\mathrm{free}}=0.501$; Fe: $\varepsilon_F=11.2\,\mathrm{eV}$, $m^*/m\approx7.9$), and the presentation is clear.

- [Graph] For Example 7.2, plot the copper $C_e=\gamma T$ and $C_{\mathrm{ph}}=\beta_{\mathrm{ph}}T^3$ and their sum for $T\in[0,8]\,\mathrm K$, with the crossover at $3.9\,\mathrm K$ marked.
- [Structure] In Example 7.2, $\beta_{\mathrm{ph}}$ is uncoloured while ${\thermal{\gamma}}$ is coloured; use ${\thermal{\beta}}_{\mathrm{ph}}$ as in 07.04.03.

### N1450

Note: [[07.09 Further Study - Relativistic Fermi Gas|07.09 Further Study - Relativistic Fermi Gas]]  
Priority: low · Graph: yes · Manim: no

Correct density of states and pressure integral (the prefactor $g_sm^4c^5/6\pi^2\hbar^3$ checks), with useful limit checks.

- [Graph] Plot $\log P_0$ against $\log n$ for electrons ($n=10^{30}$–$10^{40}\,\mathrm{m^{-3}}$) from the exact integral, with the $n^{5/3}$ and $n^{4/3}$ asymptotes. Mark the crossover at $x_F=1$ ($n\approx5.9\times10^{35}\,\mathrm{m^{-3}}$) and Sirius B.
- [Structure] $g_{\mathrm{rel}}$ lacks the ${\energy{}}$ macro, and ${\mechanical{m}}$ should be ${\mechanical{m}}_e$ when applied to electrons, as in the Sirius B exercise.
- [Simplify] Display the momentum-flux formula $P=\tfrac13\int n(\mathbf p)\,p\,v\,d^3p$ with $v=c\,t/\sqrt{1+t^2}$ before the final integral, so that the "isotropic momentum flux" statement is derived.

### N1451

Note: [[07.10 Summary|07.10 Summary]]  
Priority: low · Graph: no · Manim: no

Accurate summary table and good reconstruction checks.

- [Links] Link each table row to its source note, for example Pauli susceptibility to \[\[07.05.02 Pauli Susceptibility\]\] and Lorenz number to \[\[07.06.03 Thermal Conductivity and the Lorenz Number\]\], so that the table works as a navigation hub.

### N1452

Note: [[07.99 Exercises|07.99 Exercises]]  
Priority: low · Graph: no · Manim: no

Clear exercise hub with correct links.

- [Structure] No change needed.

### N1453

Note: [[07.01 Sirius B - Degenerate Electrons|07.01 Sirius B - Degenerate Electrons]]  
Priority: low · Graph: no · Manim: no

Excellent worked exercise; every number recomputes ($\rho=2.82\times10^9$, $n_e=8.49\times10^{35}$, $x_F=1.13$, $\varepsilon_F=0.260\,\mathrm{MeV}$, $T_F=3.0\times10^9\,\mathrm K$, $P^{\mathrm{NR}}=1.8\times10^{22}$, $P=1.3\times10^{22}\,\mathrm{Pa}$).

- [Links] Link the relativistic pressure formula to \[\[07.09 Further Study - Relativistic Fermi Gas\]\], where it is introduced.

### N1454

Note: [[Degenerate Fermi gases and the Sommerfeld expansion|Degenerate Fermi gases and the Sommerfeld expansion]]  
Priority: high · Graph: no · Manim: no

The derivations are correct (the Sommerfeld cancellation of even terms, the $\pi^2/8$ and $5\pi^2/8$ coefficients, $A$ and $S$ at low $T$, and the ultrarelativistic $3/4$ factor check), but the note has a symbol clash, a wrong quantity table, and heavy transcription commentary.

- [Correctness] $x$ is used for two quantities: the integration variable $x=\beta(\epsilon-\mu)$ in "Fermi gas at nonzero temperature" and $x=k_BT/E_F$ from the chemical-potential result onward. Rename the second, for example $t=k_BT/E_F$.
- [Correctness] The quantity table lists rows that are wrong or unused here: $n$ in $\unit{mol}$ (here $n$ is only number density), $g$ "Landé factor" (here spin degeneracy), $\Omega$ "Multiplicity", $z$ fugacity, and $P_{\mathrm{int}},P_{\mathrm{ext}}$. Remove or correct them.
- [Correctness] Room-temperature thermal energy is given as $0.024\,\mathrm{eV}$ in "Sommerfeld expansion" and as $0.026\,\mathrm{eV}$ in "Metals". At 300 K, $k_BT=0.0259\,\mathrm{eV}$; mark the first as the notebook's rounding or correct it.
- [Simplify] Collect the transcription remarks ("handwritten volume has an apparent square", "short handwritten box omits", "gold symbol is overwritten", "handwritten power ... differs", "written $z$ in the notebook") in one source-notes callout so that the physics reads continuously.
- [Links] Link the material to the chapter notes that treat it fully: \[\[07.03.03 Sommerfeld Expansion\]\], \[\[07.03.04 Chemical Potential at Low Temperature\]\], \[\[07.09 Further Study - Relativistic Fermi Gas\]\], and \[\[07.01 Sirius B - Degenerate Electrons\]\] for the white-dwarf estimate. Also use ${\signal{c}}$ for the speed of light instead of ${\mechanical{c}}$.
