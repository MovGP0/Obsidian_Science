---
title: "Note Improvement Tracker – 02 Physics/02 Thermodynamics and Statistical Mechanics/04 Canonical Ensemble"
---

> [!TLDR]
> This note tracks the review of the 40 notes in `02 Physics/02 Thermodynamics and Statistical Mechanics/04 Canonical Ensemble`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 10 possible errors or notation conflicts. 10 of them are verified (10 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N1297|N1297]] 04.01.02 Derivation of the Canonical Distribution: The Physical quantities table describes ${\energy{\varepsilon}}$ as "The level spacing or characteristic energy per particle", but in this note it is the bath-energy argument of $\Omega_{\mathcal B}(\varepsilon)$; correct the description. **Fixed:** Row now Bath energy, the energy argument of Omega_B
- [[#N1309|N1309]] 04.05.01 Formal Proof: "$U({\thermal{T}})$" in the sentence after the saddle condition is written without the energy macro; use ${\energy{U}}({\thermal{T}})$ as in the table. **Fixed:** Wrapped as {\energy{U}}({\thermal{T}})
- [[#N1315|N1315]] 04.07.02 Quantum Oscillator: Symbol clash: "Limiting cases" sets $x=\beta\hbar\omega$, while the Fig. 4.4 axis uses $x=k_{\mathrm B}T/(\hbar\omega)$, its reciprocal; rename one (for example $\tau=k_{\mathrm B}T/(\hbar\omega)$ on the axis). **Fixed:** Fig. 4.4 axis label text changed to tau = kT/(hbar omega); plotted curves unchanged; not checked in Obsidian reading mode
- [[#N1332|N1332]] Canonical density matrices and imaginary-time kernels: The sentence "The free-particle equation and its Gaussian solution are on \[\[#Entropy from the canonical density matrix|...\]\]" (twice in the section "Canonical ensemble kernels") points to the wrong heading; the free-particle kernel is in "Free particle kernel", and the imaginary-time equation is in "Position representation and imaginary time". **Fixed:** Links now point to Position representation and imaginary time (equation) and Free particle kernel (solution and trace)
- [[#N1332|N1332]] Canonical density matrices and imaginary-time kernels: In "Harmonic oscillator partition function", "The kernel from \[\[#Canonical ensemble kernels|the section on · Canonical ensemble kernels\]\]" points to the wrong heading (the oscillator kernel is in "One-dimensional quantum harmonic oscillator") and the display text contains a stray "·". **Fixed:** Link now to One-dimensional quantum harmonic oscillator, stray dot removed
- [[#N1332|N1332]] Canonical density matrices and imaginary-time kernels: Symbol clash: $A$ denotes the observable in $\langle A\rangle=\operatorname{Tr}(\hat\rho A)$, $\energy{A}$ the Helmholtz free energy, and $A$ the Gaussian prefactor in $Ae^{-Bx^2}$; rename the prefactor (e.g. $\mathcal N$) and the observable (e.g. $\hat O$). **Fixed:** Observable renamed \hat O in the thermal-average equation; Gaussian prefactor renamed \mathcal N; Helmholtz A kept
- [[#N1332|N1332]] Canonical density matrices and imaginary-time kernels: The physical-quantity table lists symbols the note never uses or with wrong meanings: $\mechanical{x},\mechanical{h}$ "lifting example", $P_{\mathrm{int}},P_{\mathrm{ext}}$ "piston", $n$ twice (moles and density), $\theta,\phi$ orientation angles, $g$ Landé factor and internal degeneracy, $q$ coordination number, and $\energy{H}$ as enthalpy; trim it to the symbols used. **Fixed:** Removed h, P_int/P_ext, both n rows, theta/phi, both g rows, q; x row now kernel positions; H row now Hamiltonian only; Omega row description corrected
- [[#N1333|N1333]] Classical canonical gases and spin magnetization: Symbol clash: $\energy{H}$ is the Hamiltonian and $\magnetic{H}$ the applied field in the same equations ($\energy{H}=-\sum\vec\mu_i\cdot\magnetic{\vec H}$); rename the field to $\magnetic{B}$ as in 04.09, keeping a note about the notebook's $H$. **Fixed:** Field renamed \magnetic{B} throughout (including chi derivative at B=0) with a sentence that the notebook writes H; table row updated
- [[#N1333|N1333]] Classical canonical gases and spin magnetization: Quantity table errors: $\mechanical{v}$ is listed as "volume per unit amount" but the note uses it as particle speed in $T\propto\langle v^2\rangle$; $j$ is listed as "internal partition function" but is the angular-momentum quantum number; $z$ (fugacity), $n$ (twice), $P_{\mathrm{int}},P_{\mathrm{ext}}$, $q_i,p_i$ and "internal degeneracy" $g$ are unused, and $\mechanical{c}$ is described via a "photon spectrum formula" that does not appear. **Fixed:** v now particle speed; removed j, z, both n, q_i/p_i, degeneracy g rows; pressure row trimmed; H row Hamiltonian only; c row now Gaussian-unit moment constant
- [[#N1333|N1333]] Classical canonical gases and spin magnetization: Historical paragraph: Amontons' own extrapolation of the pressure–temperature line gave roughly $-240\,{}^\circ\mathrm C$, not $-273\,{}^\circ\mathrm C$; state that the $-273$ value comes from later, more precise gas data. **Fixed:** Kept notebook value and added that Amontons got roughly -240 C and the -273 C value came from later, more precise gas data

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N1294 | [[04.00 Canonical Ensemble\|04.00 Canonical Ensemble]] | Analyzed | low | no | no | [[#N1294\|View]] |
| N1295 | [[04.01 System in Contact with a Thermostat\|04.01 System in Contact with a Thermostat]] | Analyzed | low | no | no | [[#N1295\|View]] |
| N1296 | [[04.01.01 Configuration of the Composite System\|04.01.01 Configuration of the Composite System]] | Analyzed | low | no | no | [[#N1296\|View]] |
| N1297 | [[04.01.02 Derivation of the Canonical Distribution\|04.01.02 Derivation of the Canonical Distribution]] | Analyzed | medium | yes | no | [[#N1297\|View]] |
| N1298 | [[04.01.03 Physical Interpretation of β\|04.01.03 Physical Interpretation of β]] | Analyzed | low | no | yes | [[#N1298\|View]] |
| N1299 | [[04.02 Canonical Partition Function\|04.02 Canonical Partition Function]] | Analyzed | low | no | no | [[#N1299\|View]] |
| N1300 | [[04.02.01 Definition and Basic Properties\|04.02.01 Definition and Basic Properties]] | Analyzed | low | no | no | [[#N1300\|View]] |
| N1301 | [[04.02.02 Factorization of the Partition Function\|04.02.02 Factorization of the Partition Function]] | Analyzed | low | no | no | [[#N1301\|View]] |
| N1302 | [[04.03 Connection to Thermodynamics - Helmholtz Free Energy\|04.03 Connection to Thermodynamics - Helmholtz Free Energy]] | Analyzed | low | no | no | [[#N1302\|View]] |
| N1303 | [[04.03.01 Partition Function as a Thermodynamic Potential\|04.03.01 Partition Function as a Thermodynamic Potential]] | Analyzed | low | yes | no | [[#N1303\|View]] |
| N1304 | [[04.03.02 Calculation of Thermodynamic Quantities from F\|04.03.02 Calculation of Thermodynamic Quantities from F]] | Analyzed | low | no | no | [[#N1304\|View]] |
| N1305 | [[04.04 Energy Fluctuations\|04.04 Energy Fluctuations]] | Analyzed | low | no | no | [[#N1305\|View]] |
| N1306 | [[04.04.01 Variance and Standard Deviation\|04.04.01 Variance and Standard Deviation]] | Analyzed | low | no | no | [[#N1306\|View]] |
| N1307 | [[04.04.02 Relative Fluctuations and the Law of Large Numbers\|04.04.02 Relative Fluctuations and the Law of Large Numbers]] | Analyzed | low | no | no | [[#N1307\|View]] |
| N1308 | [[04.05 Ensemble Equivalence in the Thermodynamic Limit\|04.05 Ensemble Equivalence in the Thermodynamic Limit]] | Analyzed | low | no | no | [[#N1308\|View]] |
| N1309 | [[04.05.01 Formal Proof\|04.05.01 Formal Proof]] | Analyzed | medium | yes | no | [[#N1309\|View]] |
| N1310 | [[04.06 Classical Ideal Gas in the Canonical Ensemble\|04.06 Classical Ideal Gas in the Canonical Ensemble]] | Analyzed | low | no | no | [[#N1310\|View]] |
| N1311 | [[04.06.01 Calculation of the Partition Function\|04.06.01 Calculation of the Partition Function]] | Analyzed | low | yes | no | [[#N1311\|View]] |
| N1312 | [[04.06.02 Helmholtz Free Energy and Equation of State\|04.06.02 Helmholtz Free Energy and Equation of State]] | Analyzed | low | no | no | [[#N1312\|View]] |
| N1313 | [[04.07 Classical and Quantum Harmonic Oscillators\|04.07 Classical and Quantum Harmonic Oscillators]] | Analyzed | low | no | no | [[#N1313\|View]] |
| N1314 | [[04.07.01 Classical One-Dimensional Oscillator\|04.07.01 Classical One-Dimensional Oscillator]] | Analyzed | low | no | no | [[#N1314\|View]] |
| N1315 | [[04.07.02 Quantum Oscillator\|04.07.02 Quantum Oscillator]] | Analyzed | medium | yes | no | [[#N1315\|View]] |
| N1316 | [[04.08 Two-Level System\|04.08 Two-Level System]] | Analyzed | low | yes | yes | [[#N1316\|View]] |
| N1317 | [[04.09 Paramagnetism - Spin-½ Model\|04.09 Paramagnetism - Spin-½ Model]] | Analyzed | low | no | no | [[#N1317\|View]] |
| N1318 | [[04.09.01 Hamiltonian Function and Partition Function\|04.09.01 Hamiltonian Function and Partition Function]] | Analyzed | low | no | no | [[#N1318\|View]] |
| N1319 | [[04.09.02 Magnetization and Susceptibility\|04.09.02 Magnetization and Susceptibility]] | Analyzed | low | yes | no | [[#N1319\|View]] |
| N1320 | [[04.09.03 Entropy and Heat Capacity of the Spin System\|04.09.03 Entropy and Heat Capacity of the Spin System]] | Analyzed | medium | yes | no | [[#N1320\|View]] |
| N1321 | [[04.10 Generalization - Arbitrary Spin J and the Brillouin Function\|04.10 Generalization - Arbitrary Spin J and the Brillouin Function]] | Analyzed | medium | yes | no | [[#N1321\|View]] |
| N1322 | [[04.11 Solved Examples\|04.11 Solved Examples]] | Analyzed | low | no | no | [[#N1322\|View]] |
| N1323 | [[04.12 Classical Equipartition Theorem\|04.12 Classical Equipartition Theorem]] | Analyzed | low | yes | no | [[#N1323\|View]] |
| N1324 | [[04.13 Canonical Ensemble in Quantum Mechanics\|04.13 Canonical Ensemble in Quantum Mechanics]] | Analyzed | low | no | no | [[#N1324\|View]] |
| N1325 | [[04.14 Summary of the Main Results\|04.14 Summary of the Main Results]] | Analyzed | low | no | no | [[#N1325\|View]] |
| N1326 | [[04.99 Exercises\|04.99 Exercises]] | Analyzed | low | no | no | [[#N1326\|View]] |
| N1327 | [[04.01 Independent Quantum Oscillators\|99 Exercises/04.01 Independent Quantum Oscillators]] | Analyzed | low | yes | no | [[#N1327\|View]] |
| N1328 | [[04.02 Three-Level System\|99 Exercises/04.02 Three-Level System]] | Analyzed | low | yes | no | [[#N1328\|View]] |
| N1329 | [[04.03 Quantum Rotation of a Diatomic Gas\|99 Exercises/04.03 Quantum Rotation of a Diatomic Gas]] | Analyzed | medium | yes | no | [[#N1329\|View]] |
| N1330 | [[04.04 Ideal-Gas Pressure in Two and Three Dimensions\|99 Exercises/04.04 Ideal-Gas Pressure in Two and Three Dimensions]] | Analyzed | low | no | no | [[#N1330\|View]] |
| N1331 | [[04.05 Adiabatic Demagnetization\|99 Exercises/04.05 Adiabatic Demagnetization]] | Analyzed | medium | yes | no | [[#N1331\|View]] |
| N1332 | [[Canonical density matrices and imaginary-time kernels\|Canonical density matrices and imaginary-time kernels]] | Analyzed | high | yes | no | [[#N1332\|View]] |
| N1333 | [[Classical canonical gases and spin magnetization\|Classical canonical gases and spin magnetization]] | Analyzed | medium | yes | no | [[#N1333\|View]] |

## Suggestions

### N1294

Note: [[04.00 Canonical Ensemble|04.00 Canonical Ensemble]]  
Priority: low · Graph: no · Manim: no

A clear chapter hub that motivates the canonical ensemble from the boundary conditions.

- [Links] The reading route names the ideal gas, oscillator and spin examples only in words; link them as \[\[04.06 Classical Ideal Gas in the Canonical Ensemble\]\], \[\[04.07 Classical and Quantum Harmonic Oscillators\]\], \[\[04.08 Two-Level System\]\] and \[\[04.09 Paramagnetism - Spin-½ Model\]\], and add \[\[04.99 Exercises\]\].

### N1295

Note: [[04.01 System in Contact with a Thermostat|04.01 System in Contact with a Thermostat]]  
Priority: low · Graph: no · Manim: no

A short, correct section hub that states the role of weak contact well.

- [Structure] No change needed.

### N1296

Note: [[04.01.01 Configuration of the Composite System|04.01.01 Configuration of the Composite System]]  
Priority: low · Graph: no · Manim: no

Correct and clear setup of the system-plus-bath construction.

- [Structure] Add the symbols $\mathcal S$, $\mathcal B$, $\mathcal T$ and ${\energy{E}}_{\mathcal B}$, ${\energy{E}}_{\mathrm{tot}}$ to the Physical quantities table (or a one-line legend), since the note introduces all of them.
- [Intuition] Add a concrete picture, for example a small copper sample in a large water bath, with rough heat capacities, to show what "much larger" means quantitatively.

### N1297

Note: [[04.01.02 Derivation of the Canonical Distribution|04.01.02 Derivation of the Canonical Distribution]]  
Priority: medium · Graph: yes · Manim: no

The derivation and the second-order remainder $-E_i^2/(2k_{\mathrm B}T^2C_{\mathcal B})$ are correct, but the step "why expand the logarithm and not $\Omega_{\mathcal B}$ itself" is not explained, and the table misdescribes one symbol.

- [Correctness] The Physical quantities table describes ${\energy{\varepsilon}}$ as "The level spacing or characteristic energy per particle", but in this note it is the bath-energy argument of $\Omega_{\mathcal B}(\varepsilon)$; correct the description.
- [Intuition] Explain why the logarithm is expanded: $\Omega_{\mathcal B}$ varies as a huge power of energy, so its Taylor series converges badly, while $\ln\Omega_{\mathcal B}=S_{\mathcal B}/k_{\mathrm B}$ is extensive and smooth; one sentence with $\Omega_{\mathcal B}\propto\varepsilon^{3N_{\mathcal B}/2}$ makes the point.
- [Graph] Plot the exact finite-bath weight $(1-E/E_{\mathrm{tot}})^{3N_{\mathcal B}/2}$ against $E/(k_{\mathrm B}T)\in[0,5]$ for an ideal-gas bath with $N_{\mathcal B}=2,10,100$ (with $E_{\mathrm{tot}}=\tfrac32N_{\mathcal B}k_{\mathrm B}T$), together with $e^{-E/(k_{\mathrm B}T)}$, to show the Boltzmann factor emerging as the bath grows.
- [Example] After the degeneracy remark, give a numeric case: a level with 10 states at $E=k_{\mathrm B}T$ carries $10e^{-1}\approx3.7$ times the probability of a single ground state.

### N1298

Note: [[04.01.03 Physical Interpretation of β|04.01.03 Physical Interpretation of β]]  
Priority: low · Graph: no · Manim: yes

Correct and clear, with a good figure and an explicit warning that Boltzmann weights are per microstate.

- [Manim] Animate the occupation bars of a five-level ladder with spacing $\varepsilon$ as $k_{\mathrm B}T/\varepsilon$ sweeps from $0.05$ to $5$: all weight starts in the ground state and spreads upward, which shows the meaning of "coldness" $\beta$ dynamically.
- [Example] Add a degenerate-level example next to the "highly degenerate excited level" paragraph: ground state $g_0=1$ at $0$ and $g_1=10$ at $\varepsilon=k_{\mathrm B}T$ gives $P_1/P_0=10e^{-1}\approx3.7$, so the excited level is more probable.

### N1299

Note: [[04.02 Canonical Partition Function|04.02 Canonical Partition Function]]  
Priority: low · Graph: no · Manim: no

A short, correct section hub.

- [Structure] No change needed.

### N1300

Note: [[04.02.01 Definition and Basic Properties|04.02.01 Definition and Basic Properties]]  
Priority: low · Graph: no · Manim: no

Correct definitions and proof; the derivative identities would be easier to absorb with one worked case.

- [Example] Apply Eq. (4.5) to the two-level system $\mathcal Z=1+e^{-\beta\varepsilon}$ to get $\langle E\rangle=\varepsilon/(e^{\beta\varepsilon}+1)$ and the variance $\varepsilon^2e^{\beta\varepsilon}/(e^{\beta\varepsilon}+1)^2$, and link \[\[04.08 Two-Level System\]\].
- [Simplify] Move the paragraph beginning "In the derivatives below..." to directly after Proposition 4.1, where its remarks about the second derivative and the single-energy check apply.

### N1301

Note: [[04.02.02 Factorization of the Partition Function|04.02.02 Factorization of the Partition Function]]  
Priority: low · Graph: no · Manim: no

Correct, with a good contrast between localized and identical particles.

- [Example] Write the two-spin case explicitly: $\mathcal Z=\sum_{s_1,s_2=\pm1}e^{\beta\mu B(s_1+s_2)}=(2\cosh\beta\mu B)^2$, which shows the factorization in one line and why no $1/2!$ appears.

### N1302

Note: [[04.03 Connection to Thermodynamics - Helmholtz Free Energy|04.03 Connection to Thermodynamics - Helmholtz Free Energy]]  
Priority: low · Graph: no · Manim: no

A short, correct section hub.

- [Structure] No change needed.

### N1303

Note: [[04.03.01 Partition Function as a Thermodynamic Potential|04.03.01 Partition Function as a Thermodynamic Potential]]  
Priority: low · Graph: yes · Manim: no

Correct proof and good sanity checks of the sign of $F=-k_{\mathrm B}T\ln\mathcal Z$.

- [Graph] For the two-level system, plot $U/\varepsilon$, $TS/\varepsilon$ and $F/\varepsilon=-x\ln(1+e^{-1/x})$ against $x=k_{\mathrm B}T/\varepsilon\in[0,3]$, showing $F=U-TS$ falling below $U$ as entropy becomes important.
- [Example] Make the "several states at the same energy" check concrete: $g$ degenerate states at energy $E_0$ give $F=E_0-k_{\mathrm B}T\ln g$.

### N1304

Note: [[04.03.02 Calculation of Thermodynamic Quantities from F|04.03.02 Calculation of Thermodynamic Quantities from F]]  
Priority: low · Graph: no · Manim: no

Correct derivative relations (including $C_V=k_{\mathrm B}\beta^2\partial_\beta^2\ln\mathcal Z$) and a clear map figure.

- [Simplify] Show the chain-rule step for Eq. (4.9): $\mathrm d\beta/\mathrm dT=-k_{\mathrm B}\beta^2$ and $\partial U/\partial\beta=-\partial^2_\beta\ln\mathcal Z$.
- [Links] Point to \[\[04.06.02 Helmholtz Free Energy and Equation of State\]\] as the worked application of Eqs. (4.7) and (4.8).

### N1305

Note: [[04.04 Energy Fluctuations|04.04 Energy Fluctuations]]  
Priority: low · Graph: no · Manim: no

A short, correct section hub.

- [Structure] No change needed.

### N1306

Note: [[04.04.01 Variance and Standard Deviation|04.04.01 Variance and Standard Deviation]]  
Priority: low · Graph: no · Manim: no

Correct proof of $\sigma_E^2=k_{\mathrm B}T^2C_V$, but the commentary paragraphs come before the result they discuss.

- [Structure] Move the two paragraphs on non-negative heat capacity and units after the displayed result $\sigma_E^2=k_{\mathrm B}T^2C_V$, which they refer to as "the variance relation below".
- [Example] Evaluate for one mole of monatomic gas at $300\,\mathrm K$: $\sigma_E=\sqrt{k_{\mathrm B}T^2\cdot\tfrac32R}\approx3.9\times10^{-9}\,\mathrm J$ against $U\approx3.7\,\mathrm{kJ}$, a relative width of order $10^{-12}$.

### N1307

Note: [[04.04.02 Relative Fluctuations and the Law of Large Numbers|04.04.02 Relative Fluctuations and the Law of Large Numbers]]  
Priority: low · Graph: no · Manim: no

Correct scaling, a correctly normalized figure, and an accurate ideal-gas value $\sigma_u=\sqrt{2/(3N)}$; the caveat paragraphs precede the result and slow the reader down.

- [Structure] Put the scaling result ($U\sim N\varepsilon_0$, $C_V\sim Nk_{\mathrm B}$, $\sigma_E/\langle E\rangle\sim N^{-1/2}$) first and move the two paragraphs on energy reference and Gaussian validity after it.
- [Links] The density of states is called $g(E)$ here and $\omega(E)$ in \[\[03.02.01 Basic Definitions\]\]; state that they are the same object (or unify the symbol) so readers can connect the two chapters.

### N1308

Note: [[04.05 Ensemble Equivalence in the Thermodynamic Limit|04.05 Ensemble Equivalence in the Thermodynamic Limit]]  
Priority: low · Graph: no · Manim: no

A short, correct section hub with appropriate caveats.

- [Structure] No change needed.

### N1309

Note: [[04.05.01 Formal Proof|04.05.01 Formal Proof]]  
Priority: medium · Graph: yes · Manim: no

The saddle-point argument is correct (the curvature $-1/(k_{\mathrm B}T^2C_V)$ and the $O(\ln N)$ correction check out), but the caveat paragraphs before the proof are heavy and the integrand's sharpness is never shown.

- [Correctness] "$U({\thermal{T}})$" in the sentence after the saddle condition is written without the energy macro; use ${\energy{U}}({\thermal{T}})$ as in the table.
- [Simplify] Move the paragraphs on the energy reference and the nonnegative spectrum after the proof (or into the scope callout), so the proof starts right after the theorem.
- [Graph] Plot the normalized integrand $g(E)e^{-\beta E}$ for an ideal gas, $g\propto E^{3N/2-1}$, against $E/E^*$ for $N=2,20,200$, showing the peak at $E^*$ narrowing as $N^{-1/2}$; this is the picture behind the saddle-point step.
- [Intuition] State in words that $\ln\mathcal Z\approx\max_E[S(E)/k_{\mathrm B}-\beta E]$ is a Legendre transform, so $F$ is the Legendre transform of $E(S)$, which is why the two ensembles carry the same thermodynamics.

### N1310

Note: [[04.06 Classical Ideal Gas in the Canonical Ensemble|04.06 Classical Ideal Gas in the Canonical Ensemble]]  
Priority: low · Graph: no · Manim: no

A short, correct section hub.

- [Structure] No change needed.

### N1311

Note: [[04.06.01 Calculation of the Partition Function|04.06.01 Calculation of the Partition Function]]  
Priority: low · Graph: yes · Manim: no

Correct derivation of $\mathcal Z_1=V/\lambda_{\mathrm{th}}^3$ and Eq. (4.11); the dilute condition would benefit from a number.

- [Example] Evaluate for helium at $300\,\mathrm K$ and $1\,\mathrm{atm}$: $\lambda_{\mathrm{th}}\approx0.50\,\mathrm{\AA}$ and $n\lambda_{\mathrm{th}}^3\approx3\times10^{-6}\ll1$, so the Maxwell–Boltzmann limit is excellent; contrast with conduction electrons in a metal where it fails.
- [Graph] Plot $\lambda_{\mathrm{th}}(T)$ on log–log axes for $T\in[1,1000]\,\mathrm K$ for He atoms and electrons, with the mean interparticle spacing $n^{-1/3}$ of a gas at $1\,\mathrm{atm}$ and of electrons in copper as horizontal reference lines; crossings mark where the classical count breaks down.
- [Simplify] Move the two commentary paragraphs ("There is no position-dependent energy..." and "The thermal wavelength has length units...") after the result they explain.

### N1312

Note: [[04.06.02 Helmholtz Free Energy and Equation of State|04.06.02 Helmholtz Free Energy and Equation of State]]  
Priority: low · Graph: no · Manim: no

Correct ($P$, $U$ and the entropy derivative with the extra $3/2$ from $\lambda_{\mathrm{th}}^{-3}\propto T^{3/2}$ all check out) and well connected to the microcanonical result.

- [Links] Link "Sackur–Tetrode formula" to \[\[03.06 Sackur–Tetrode Formula\]\] and note that the canonical and microcanonical results agree once $E=\tfrac32Nk_{\mathrm B}T$ is inserted.
- [Example] Evaluate Eq. (4.12) for argon at $298\,\mathrm K$ and $1\,\mathrm{bar}$ and compare with the tabulated $S^\circ\approx154.8\,\mathrm{J\,mol^{-1}K^{-1}}$, a classic success of the formula.

### N1313

Note: [[04.07 Classical and Quantum Harmonic Oscillators|04.07 Classical and Quantum Harmonic Oscillators]]  
Priority: low · Graph: no · Manim: no

A short, correct section hub with a good preview of the zero-point versus heat-capacity distinction.

- [Structure] No change needed.

### N1314

Note: [[04.07.01 Classical One-Dimensional Oscillator|04.07.01 Classical One-Dimensional Oscillator]]  
Priority: low · Graph: no · Manim: no

Correct and compact; the commentary before the calculation is denser than the calculation itself.

- [Simplify] Move the paragraph "Both thermal energy and the oscillator level scale..." after the result $\langle E\rangle=k_{\mathrm B}T$, where the independence of $m$ and $\omega$ is visible.
- [Intuition] Interpret $\mathcal Z_1^{\mathrm{cl}}=k_{\mathrm B}T/(\hbar\omega)$ as "the number of quantum levels below $k_{\mathrm B}T$", which links directly to the high-temperature limit in \[\[04.07.02 Quantum Oscillator\]\].

### N1315

Note: [[04.07.02 Quantum Oscillator|04.07.02 Quantum Oscillator]]  
Priority: medium · Graph: yes · Manim: no

The partition function, Planck occupation, limits and Einstein heat capacity are correct, but the symbol $x$ is used for two reciprocal quantities and the heat capacity is not plotted.

- [Correctness] Symbol clash: "Limiting cases" sets $x=\beta\hbar\omega$, while the Fig. 4.4 axis uses $x=k_{\mathrm B}T/(\hbar\omega)$, its reciprocal; rename one (for example $\tau=k_{\mathrm B}T/(\hbar\omega)$ on the axis).
- [Graph] Add the Einstein heat capacity $C_V/k_{\mathrm B}$ against $k_{\mathrm B}T/(\hbar\omega)\in[0,3]$, with the classical value $1$ dashed; it reaches $0.92$ at $k_{\mathrm B}T=\hbar\omega$ and is exponentially suppressed below about $0.2$.
- [Simplify] Derive the heat capacity in one line from $\langle E\rangle$ (differentiate $\hbar\omega/(e^{\beta\hbar\omega}-1)$ with respect to $T$) instead of stating it, and move the two commentary paragraphs before Eq. (4.13) to after the limiting cases.
- [Example] Add a real number: for the N₂ vibration ($\hbar\omega/k_{\mathrm B}\approx3390\,\mathrm K$) at $300\,\mathrm K$, $\langle n\rangle\approx1.2\times10^{-5}$, so vibrations are frozen out at room temperature.

### N1316

Note: [[04.08 Two-Level System|04.08 Two-Level System]]  
Priority: low · Graph: yes · Manim: yes

Correct (the Schottky maximum at $k_{\mathrm B}T/\varepsilon\approx0.417$ with height $0.439$ checks out numerically) and well motivated by the predicted limits.

- [Graph] Add $\langle E\rangle/\varepsilon=1/(e^{1/x}+1)$ and $S/k_{\mathrm B}$ against $x=k_{\mathrm B}T/\varepsilon\in[0,5]$ next to the heat capacity, so the reader sees that the peak of $C$ marks the steepest rise of $\langle E\rangle$ toward $1/2$ and of $S$ toward $\ln2$.
- [Manim] Animate the two population bars $P_0$, $P_1$ as $T$ increases while a tracer moves along the Schottky curve, showing that $C$ is large exactly while $P_1$ changes fastest.
- [Simplify] Show the derivative step $C=\mathrm d\langle E\rangle/\mathrm dT$ leading to Eq. (4.14), and rewrite it as $C/k_{\mathrm B}=z^2/\cosh^2z$ with $z=\varepsilon/(2k_{\mathrm B}T)$, so the quoted maximum follows from $z\tanh z=1$ ($z\approx1.200$, $k_{\mathrm B}T^*/\varepsilon\approx0.417$).

### N1317

Note: [[04.09 Paramagnetism - Spin-½ Model|04.09 Paramagnetism - Spin-½ Model]]  
Priority: low · Graph: no · Manim: no

Short hub that frames the independent-spin model and links its three subnotes; clear enough for its purpose.

- [Structure] No change needed beyond optionally adding one sentence naming the key result of each subnote ($\mathcal Z_1=2\cosh x$, $M=N\mu_0\tanh x$, Schottky $C_B$) next to its link.

### N1318

Note: [[04.09.01 Hamiltonian Function and Partition Function|04.09.01 Hamiltonian Function and Partition Function]]  
Priority: low · Graph: no · Manim: no

Correct and compact derivation of the two-state partition function with a careful sign note, but the prose paragraphs before the equations are abstract.

- [Simplify] Move the paragraph about "positive moment projection has lower energy" directly after the Hamiltonian and state it concretely: $\sigma=+1$ has energy $-\mu_0 B$, $\sigma=-1$ has $+\mu_0 B$, gap $2\mu_0 B$.
- [Example] Add a one-line number: for $\mu_0=\mu_{\mathrm B}$, $B=1\,\mathrm T$, $T=1\,\mathrm K$ the ratio $x=\mu_0 B/(k_{\mathrm B}T)\approx0.67$, so both states are appreciably populated; at 300 K $x\approx2\times10^{-3}$.
- [Intuition] Replace the abstract "full count is two to the power of the site count" with the explicit check $\mathcal Z_N(B=0)=2^N$ from Eq. (4.15).

### N1319

Note: [[04.09.02 Magnetization and Susceptibility|04.09.02 Magnetization and Susceptibility]]  
Priority: low · Graph: yes · Manim: no

Correct derivation with a good tanh-versus-Curie graph and a helpful units note; the opening prose anticipates results before they are derived.

- [Structure] Move the two opening prose paragraphs (oddness, boundedness, slope) after Eq. (4.16) so the reader sees $M=N\mu_0\tanh x$ before its properties are discussed.
- [Example] Add a numeric illustration of where Curie's law fails, for example $\tanh x$ deviates from $x$ by 10 % at $x\approx0.57$, and convert this to $B/T\approx0.85\,\mathrm{T/K}$ for $\mu_0=\mu_{\mathrm B}$.
- [Graph] Optionally add a second plot of $\chi T/C_{\mathrm{Curie}}=\operatorname{sech}^2 x$ versus $x\in[0,4]$ to show how the differential susceptibility drops below the Curie value at strong field.

### N1320

Note: [[04.09.03 Entropy and Heat Capacity of the Spin System|04.09.03 Entropy and Heat Capacity of the Spin System]]  
Priority: medium · Graph: yes · Manim: no

Correct entropy and Schottky heat-capacity formulas, but the heat capacity is hidden in a callout and there is no figure of either curve.

- [Graph] Plot $S/(Nk_{\mathrm B})=\ln(2\cosh x)-x\tanh x$ and $C_B/(Nk_{\mathrm B})=x^2\operatorname{sech}^2x$ against $t=1/x=k_{\mathrm B}T/(\mu_0 B)$ for $t\in[0,5]$, marking the Schottky maximum ($C_B/(Nk_{\mathrm B})\approx0.44$ at $t\approx0.83$) and the $\ln2$ asymptote.
- [Structure] Promote the heat-capacity callout to a regular section with a derivation line $U=-N\mu_0B\tanh x$, $C_B=(\partial U/\partial T)_B$, and write $U$ with the semantic macro used in the table.
- [Intuition] Explain the Schottky peak physically: $C_B$ is small at low $T$ (gap frozen out) and at high $T$ (populations already equal), with a maximum when $k_{\mathrm B}T$ is comparable to the gap $2\mu_0B$.
- [Simplify] Shorten the "order of limits" paragraph to one sentence and give the formula limits ($x\to0$: $S\to Nk_{\mathrm B}\ln2$; $x\to\infty$: $S\to0$) directly.

### N1321

Note: [[04.10 Generalization - Arbitrary Spin J and the Brillouin Function|04.10 Generalization - Arbitrary Spin J and the Brillouin Function]]  
Priority: medium · Graph: yes · Manim: no

Formulas are correct, but the geometric-sum step, the Curie constant for general J, and a comparison figure are missing.

- [Simplify] Show the geometric-series step explicitly: $\sum_{m=-J}^{J}e^{m\eta}=e^{-J\eta}(e^{(2J+1)\eta}-1)/(e^\eta-1)$, then multiply by $e^{-\eta/2}/e^{-\eta/2}$ to reach the $\sinh$ ratio.
- [Example] Add the weak-field expansion $B_J(y)\approx\frac{J+1}{3J}y$, giving $\chi=Ng^2\mu_{\mathrm B}^2J(J+1)/(3k_{\mathrm B}T)$ and the effective moment $\mu_{\mathrm{eff}}=g\mu_{\mathrm B}\sqrt{J(J+1)}$; check that $J=1/2$ reproduces $N\mu_0^2/(k_{\mathrm B}T)$.
- [Graph] Plot $B_J(y)$ for $J=1/2,1,3/2,7/2$ and the Langevin function $\mathcal L(y)$ for $y\in[0,6]$ on one axis to show the monotone approach to the classical limit.
- [Structure] Move the explanatory paragraphs (removable zero-over-zero, the different large-$J$ limits) after the Brillouin definition so they comment on formulas already shown.

### N1322

Note: [[04.11 Solved Examples|04.11 Solved Examples]]  
Priority: low · Graph: no · Manim: no

Three correct and well-explained worked examples; numbers ($2.6\times10^{-12}$) and integrals check out.

- [Simplify] In Example 4.1, combine the two Gaussian integrals into one line stating the product $(2\pi I/\beta)\sin\theta$ before integrating the angles, so the origin of the $\sin\theta$ Jacobian is obvious.
- [Example] In Example 4.1, add a typical value, for example $\Theta_{\mathrm{rot}}\approx2.9\,\mathrm K$ for $\mathrm N_2$ and $\approx88\,\mathrm K$ for $\mathrm H_2$, to show when the classical rotor applies at room temperature.
- [Structure] Make the orientation angle notation consistent: $\theta$ is wrapped in the mechanical macro but $\phi$ is not; use the same treatment for both.

### N1323

Note: [[04.12 Classical Equipartition Theorem|04.12 Classical Equipartition Theorem]]  
Priority: low · Graph: yes · Manim: no

Clean statement and proof of equipartition; the two explanatory paragraphs before the proof are dense but correct.

- [Graph] Plot the Gaussian weight $e^{-\beta a\xi^2}$ for two stiffnesses $a$ and $4a$ (same $T$) over $\xi\in[-3,3]$, to show that a stiffer term narrows the distribution while $\langle a\xi^2\rangle$ stays $k_{\mathrm B}T/2$.
- [Intuition] Add a short alternative proof via $\langle a\xi^2\rangle=-\partial_\beta\ln\int e^{-\beta a\xi^2}d\xi=-\partial_\beta\ln\beta^{-1/2}=1/(2\beta)$, which shows at once why $a$ cancels.
- [Example] Add the Dulong–Petit law ($3N$ oscillator modes, $C_V=3Nk_{\mathrm B}$) as a second application alongside the gases.

### N1324

Note: [[04.13 Canonical Ensemble in Quantum Mechanics|04.13 Canonical Ensemble in Quantum Mechanics]]  
Priority: low · Graph: no · Manim: no

Correct and concise, but the middle paragraph lists many properties without an example.

- [Example] Add a two-level example: write $\hat\rho$ as a $2\times2$ diagonal matrix in the energy basis and evaluate $\langle\sigma_x\rangle=0$ and $\langle\sigma_z\rangle=\tanh(\beta\Delta/2)$ to show an observable that does and one that does not commute with $\hat H$.
- [Links] Link the imaginary-time sentence to \[\[Canonical density matrices and imaginary-time kernels\]\], which works out the free-particle and oscillator kernels.

### N1325

Note: [[04.14 Summary of the Main Results|04.14 Summary of the Main Results]]  
Priority: low · Graph: no · Manim: no

Correct summary table with explicit fixed variables; adequate as a formula sheet.

- [Structure] No change needed; optionally add the entropy form $S=k_{\mathrm B}(\ln\mathcal Z+\beta U)$ and the Gibbs-factor rule $\mathcal Z_N=\mathcal Z_1^N/N!$ versus $\mathcal Z_1^N$ for localized sites.

### N1326

Note: [[04.99 Exercises|04.99 Exercises]]  
Priority: low · Graph: no · Manim: no

Exercise index with working links and a useful study guide paragraph.

- [Structure] No change needed.

### N1327

Note: [[04.01 Independent Quantum Oscillators|04.01 Independent Quantum Oscillators]]  
Priority: low · Graph: yes · Manim: no

Correct factorization argument and formulas; the limit-check paragraph is stated only in words.

- [Simplify] Write the limit checks as formulas: $U_i\to\hbar\omega_i/2$, $C_i\to k_{\mathrm B}(\beta\hbar\omega_i)^2e^{-\beta\hbar\omega_i}$ for $k_{\mathrm B}T\ll\hbar\omega_i$, and $U_i\to k_{\mathrm B}T$, $C_i\to k_{\mathrm B}$ for $k_{\mathrm B}T\gg\hbar\omega_i$.
- [Graph] Plot $C_i/k_{\mathrm B}=(\beta\hbar\omega_i)^2e^{\beta\hbar\omega_i}/(e^{\beta\hbar\omega_i}-1)^2$ against $k_{\mathrm B}T/\hbar\omega_i\in[0,3]$, with the classical value 1 dashed.
- [Example] Add a two-frequency example ($\omega_2=3\omega_1$) to show the total heat capacity as a sum of two staggered freeze-out steps.

### N1328

Note: [[04.02 Three-Level System|04.02 Three-Level System]]  
Priority: low · Graph: yes · Manim: no

Correct algebra (variance numerator and high-temperature expansions check out) with a clear structure.

- [Graph] Plot $C/k_{\mathrm B}=x^2(q+4q^2+q^3)/(1+q+q^2)^2$ against $k_{\mathrm B}T/\varepsilon\in[0,4]$, optionally together with the two-level Schottky curve for comparison.
- [Simplify] Move the paragraph on infinite-temperature variance after part (d), where the limit $\operatorname{Var}(E)\to\frac23\varepsilon^2$ is actually derived.
- [Example] Mention the next term of the high-temperature mean, $\langle E\rangle=\varepsilon[1-\frac23x+\frac19x^3+\cdots]$, or state explicitly that the $x^2$ coefficient vanishes, since the note's $O(x^3)$ hides this.

### N1329

Note: [[04.03 Quantum Rotation of a Diatomic Gas|04.03 Quantum Rotation of a Diatomic Gas]]  
Priority: medium · Graph: yes · Manim: no

Correct limits and good unit correction, but the full crossover (including the known rotational heat-capacity overshoot) is never shown.

- [Graph] Plot the exact $C_{\mathrm{rot}}/(Nk_{\mathrm B})=a^2(\langle L^2\rangle-\langle L\rangle^2)$ from the truncated sum (e.g. $\ell\le40$) against $T/\Theta_{\mathrm{rot}}\in[0,3]$, together with the two asymptotes; it shows the maximum of about 1.1 near $T\approx0.8\Theta_{\mathrm{rot}}$.
- [Intuition] Add the Euler–Maclaurin correction $z_{\mathrm{rot}}\approx T/\Theta_{\mathrm{rot}}+1/3+\cdots$ to explain why the integral is only the leading high-temperature term.
- [Example] Give $\Theta_{\mathrm{rot}}$ values ($\mathrm H_2\approx88\,\mathrm K$, $\mathrm N_2\approx2.9\,\mathrm K$) to show which gases reach the classical limit at room temperature.

### N1330

Note: [[04.04 Ideal-Gas Pressure in Two and Three Dimensions|04.04 Ideal-Gas Pressure in Two and Three Dimensions]]  
Priority: low · Graph: no · Manim: no

Correct, short, and well-argued, with a careful note on the sign convention of the 2D spreading pressure.

- [Simplify] State the result in one line as a general $d$-dimensional law, $\mathcal Z_d=(L^d/\lambda_{\mathrm{th}}^d)^N/N!$ giving $P_dL^d=Nk_{\mathrm B}T$, before specializing.
- [Example] Mention the physical realization of the 2D gas (insoluble surfactant monolayer, where the spreading pressure is $\Pi=\gamma_0-\gamma$) to connect the sign note with measured surface tension.

### N1331

Note: [[04.05 Adiabatic Demagnetization|04.05 Adiabatic Demagnetization]]  
Priority: medium · Graph: yes · Manim: no

Correct isentropic argument with a valid $dS/dx$ check, but the classic entropy–temperature diagram that makes the process obvious is missing.

- [Graph] Plot $S/(Nk_{\mathrm B})$ against $T$ for two fields $B_{\mathrm{high}}$ and $B_{\mathrm{low}}=B_{\mathrm{high}}/4$, and draw the isothermal magnetization step (vertical) and the adiabatic demagnetization step (horizontal) between them.
- [Manim] Animate the two-step cycle on the $S$–$T$ plot while a two-level diagram beside it shrinks its gap with $B$ and the population bars stay fixed during the adiabatic step.
- [Simplify] Merge the three overlapping paragraphs after the main result (gap shrinks, populations fixed, halving check) into one short paragraph.
- [Example] Add a numeric case, for example $T_0=1\,\mathrm K$, $B_0=1\,\mathrm T$, $B_f=0.01\,\mathrm T$ (residual internal field) giving $T_f=10\,\mathrm{mK}$, to show why internal fields limit the final temperature.

### N1332

Note: [[Canonical density matrices and imaginary-time kernels|Canonical density matrices and imaginary-time kernels]]  
Priority: high · Graph: yes · Manim: no

Lecture transcription with correct kernels and partition functions, but with wrong internal section links, a triple use of the letter A, a padded quantity table, and an off-topic Liouville opening.

- [Correctness] The sentence "The free-particle equation and its Gaussian solution are on \[\[#Entropy from the canonical density matrix|...\]\]" (twice in the section "Canonical ensemble kernels") points to the wrong heading; the free-particle kernel is in "Free particle kernel", and the imaginary-time equation is in "Position representation and imaginary time".
- [Correctness] In "Harmonic oscillator partition function", "The kernel from \[\[#Canonical ensemble kernels|the section on · Canonical ensemble kernels\]\]" points to the wrong heading (the oscillator kernel is in "One-dimensional quantum harmonic oscillator") and the display text contains a stray "·".
- [Correctness] Symbol clash: $A$ denotes the observable in $\langle A\rangle=\operatorname{Tr}(\hat\rho A)$, $\energy{A}$ the Helmholtz free energy, and $A$ the Gaussian prefactor in $Ae^{-Bx^2}$; rename the prefactor (e.g. $\mathcal N$) and the observable (e.g. $\hat O$).
- [Correctness] The physical-quantity table lists symbols the note never uses or with wrong meanings: $\mechanical{x},\mechanical{h}$ "lifting example", $P_{\mathrm{int}},P_{\mathrm{ext}}$ "piston", $n$ twice (moles and density), $\theta,\phi$ orientation angles, $g$ Landé factor and internal degeneracy, $q$ coordination number, and $\energy{H}$ as enthalpy; trim it to the symbols used.
- [Structure] Move the Liouville/continuity paragraph (Poisson bracket and von Neumann equation) to the microcanonical or ensemble-foundations note, or add one sentence explaining why stationarity $[\hat\rho,\hat H]=0$ motivates $\hat\rho=f(\hat H)$.
- [Graph] Plot the diagonal oscillator density $\rho(x,x)/Z=\sqrt{B/\pi}\,e^{-Bx^2}$ with $B=(m\omega/\hbar)\tanh(\beta\hbar\omega/2)$ for $k_{\mathrm B}T/\hbar\omega=0.1,1,3$, in units of $\sqrt{\hbar/m\omega}$, showing the crossover from the ground-state Gaussian to the classical Boltzmann width.

### N1333

Note: [[Classical canonical gases and spin magnetization|Classical canonical gases and spin magnetization]]  
Priority: medium · Graph: yes · Manim: no

Correct derivations of the classical gas, Langevin and spin-½ results with careful source corrections, but with a symbol clash, an inaccurate table, and a historical digression that breaks the flow.

- [Correctness] Symbol clash: $\energy{H}$ is the Hamiltonian and $\magnetic{H}$ the applied field in the same equations ($\energy{H}=-\sum\vec\mu_i\cdot\magnetic{\vec H}$); rename the field to $\magnetic{B}$ as in 04.09, keeping a note about the notebook's $H$.
- [Correctness] Quantity table errors: $\mechanical{v}$ is listed as "volume per unit amount" but the note uses it as particle speed in $T\propto\langle v^2\rangle$; $j$ is listed as "internal partition function" but is the angular-momentum quantum number; $z$ (fugacity), $n$ (twice), $P_{\mathrm{int}},P_{\mathrm{ext}}$, $q_i,p_i$ and "internal degeneracy" $g$ are unused, and $\mechanical{c}$ is described via a "photon spectrum formula" that does not appear.
- [Correctness] Historical paragraph: Amontons' own extrapolation of the pressure–temperature line gave roughly $-240\,{}^\circ\mathrm C$, not $-273\,{}^\circ\mathrm C$; state that the $-273$ value comes from later, more precise gas data.
- [Structure] Move the "Temperature and heat" history and the margin joke out of the derivation sequence (e.g. into a short callout at the end) so the classical-gas and spin sections connect directly.
- [Links] Link the Langevin and spin-½ sections to \[\[04.10 Generalization - Arbitrary Spin J and the Brillouin Function\]\] and \[\[04.09.02 Magnetization and Susceptibility\]\], and note the factor $1/3$ difference between the classical Curie constant $N\mu^2/(3k_{\mathrm B})$ and the spin-½ value $N\mu^2/k_{\mathrm B}$.
- [Graph] Replace or supplement the Langevin image with a native plot of $L(x)=\coth x-1/x$, $\tanh x$, and the line $x/3$ for $x\in[0,6]$, so the classical and spin-½ saturation curves can be compared.
