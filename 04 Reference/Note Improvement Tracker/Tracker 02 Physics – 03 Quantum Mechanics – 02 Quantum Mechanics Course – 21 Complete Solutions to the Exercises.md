---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/21 Complete Solutions to the Exercises"
---

> [!TLDR]
> This note tracks the review of the 21 notes in `02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/21 Complete Solutions to the Exercises`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 7 possible errors or notation conflicts. 7 of them are verified (6 fixed, 1 rejected); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2212|N2212]] 21.01 Solutions for the Crisis of Classical Physics: The physical-quantities table omits symbols used in the note and the letter $a$ has three meanings (acceleration in Ex. 7, slit width in Ex. 8 and 10, besides the Bohr radius $a_0$); rename the acceleration (e.g. $a_{\mathrm c}$) and add $a$, $r_e$, $\energy P$ and $v$ to the table. **Fixed:** Renamed the Exercise 7 acceleration to a_c and added rows a, a_c, v, r_e, P; converted CRLF to LF
- [[#N2220|N2220]] 21.09 Solutions for Orbital Angular Momentum: $R$ denotes the sphere radius in Exercises 8 and 9 and the radial wave function $R(r)$ in Exercise 10, and $\mechanical M$, $\omega$, $R$ are missing from the table; rename the radial function (e.g. $\mathcal R(r)$) and complete the table. **Fixed:** Renamed the Exercise 10 radial function to script R(r) and added m, M, R, omega, script R rows; converted CRLF to LF
- [[#N2224|N2224]] 21.13 Solutions for the Density Matrix and Decoherence: Symbol clash: $\gamma$ is the gyromagnetic ratio in Exercise 10 and the dephasing rate in Exercise 11 (only the color macro distinguishes them); rename the dephasing parameter, for example $\Gamma$ with $\hat L=\sqrt\Gamma\,\sigma_z$ and $T_\phi=1/(2\Gamma)$, and update the table. **Fixed:** Renamed the Exercise 11 dephasing parameter to Gamma (L = sqrt(Gamma) sigma_z, T_phi = 1/(2 Gamma)) and updated the table; converted CRLF to LF
- [[#N2225|N2225]] 21.14 Solutions for Identical Particles: Symbol clash: $L$ is the well width (Exercises 3, 4, 6, 7) and the orbital term label in Exercise 10, and both appear in the table; use $a$ for the width, or write the term label distinctly. **Fixed:** Renamed the well width to w in Exercises 3, 4, 6, 7 and the table (a was not used because a, b already label orbitals in Exercises 6 and 7); converted CRLF to LF
- [[#N2225|N2225]] 21.14 Solutions for Identical Particles: Symbol clash: $n$ is the orbital index ($n=1$ in Exercise 3) and the number density in Exercise 11; rename the density, for example $n_e$ or $\varrho$. **Rejected:** The orbital index n=1 is a label, not a physical quantity, and n=N/V is the notation of the exercise statement in 14.08, so no ambiguity in a table or equation
- [[#N2228|N2228]] 21.17 Solutions for Symmetries and Conservation Laws: The physical-quantities table lists $\Gamma$ (transition rate), but no $\Gamma$ appears in the note; Exercise 11 writes the rates without a symbol. Either introduce $\Gamma_{2p}$, $\Gamma_{3p}$ in Exercise 11 or remove $\Gamma$ from the table. **Fixed:** Introduced Gamma_2p and Gamma_3p for the quoted rates and the ratio (3.75 checked) and updated the table row; converted CRLF to LF
- [[#N2231|N2231]] 21.20 Solutions for Variational Methods, WKB, and Scattering: $V_0$ is an energy in Exercise 6 ($V_0e^{-r^2/b^2}$, with the energy macro) but an energy times length in Exercise 9 ($V_0e^{-\mu r}/r$, uncolored); rename the Yukawa strength, for example $g$ in $\unit{J\,m}$, and add it to the table. **Fixed:** Renamed the Yukawa strength to g (unit J m) throughout Exercise 9 and added it to the table; converted CRLF to LF

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2211 | [[21.00 Complete Solutions to the Exercises\|21.00 Complete Solutions to the Exercises]] | Analyzed | low | no | no | [[#N2211\|View]] |
| N2212 | [[21.01 Solutions for the Crisis of Classical Physics\|21.01 Solutions for the Crisis of Classical Physics]] | Analyzed | low | yes | no | [[#N2212\|View]] |
| N2213 | [[21.02 Solutions for the Postulates of Quantum Mechanics\|21.02 Solutions for the Postulates of Quantum Mechanics]] | Analyzed | low | yes | no | [[#N2213\|View]] |
| N2214 | [[21.03 Solutions for Measurement, Observables, and Uncertainty\|21.03 Solutions for Measurement, Observables, and Uncertainty]] | Analyzed | low | yes | no | [[#N2214\|View]] |
| N2215 | [[21.04 Solutions for the Schrödinger Equation\|21.04 Solutions for the Schrödinger Equation]] | Analyzed | low | no | yes | [[#N2215\|View]] |
| N2216 | [[21.05 Solutions for Feynman Path Integrals\|21.05 Solutions for Feynman Path Integrals]] | Analyzed | low | no | no | [[#N2216\|View]] |
| N2217 | [[21.06 Solutions for One-Dimensional Systems\|21.06 Solutions for One-Dimensional Systems]] | Analyzed | low | yes | no | [[#N2217\|View]] |
| N2218 | [[21.07 Solutions for Barriers and Quantum Tunneling\|21.07 Solutions for Barriers and Quantum Tunneling]] | Analyzed | low | yes | no | [[#N2218\|View]] |
| N2219 | [[21.08 Solutions for the Harmonic Oscillator\|21.08 Solutions for the Harmonic Oscillator]] | Analyzed | low | yes | no | [[#N2219\|View]] |
| N2220 | [[21.09 Solutions for Orbital Angular Momentum\|21.09 Solutions for Orbital Angular Momentum]] | Analyzed | low | no | no | [[#N2220\|View]] |
| N2221 | [[21.10 Solutions for Spin\|21.10 Solutions for Spin]] | Analyzed | low | no | yes | [[#N2221\|View]] |
| N2222 | [[21.11 Solutions for Addition of Angular Momentum\|21.11 Solutions for Addition of Angular Momentum]] | Analyzed | low | no | no | [[#N2222\|View]] |
| N2223 | [[21.12 Solutions for the Hydrogen Atom\|21.12 Solutions for the Hydrogen Atom]] | Analyzed | low | yes | no | [[#N2223\|View]] |
| N2224 | [[21.13 Solutions for the Density Matrix and Decoherence\|21.13 Solutions for the Density Matrix and Decoherence]] | Analyzed | low | yes | yes | [[#N2224\|View]] |
| N2225 | [[21.14 Solutions for Identical Particles\|21.14 Solutions for Identical Particles]] | Analyzed | low | yes | no | [[#N2225\|View]] |
| N2226 | [[21.15 Solutions for Entanglement, EPR, and Quantum Information\|21.15 Solutions for Entanglement, EPR, and Quantum Information]] | Analyzed | low | yes | no | [[#N2226\|View]] |
| N2227 | [[21.16 Solutions for Perturbation Theory\|21.16 Solutions for Perturbation Theory]] | Analyzed | medium | yes | yes | [[#N2227\|View]] |
| N2228 | [[21.17 Solutions for Symmetries and Conservation Laws\|21.17 Solutions for Symmetries and Conservation Laws]] | Analyzed | low | no | no | [[#N2228\|View]] |
| N2229 | [[21.18 Solutions for Geometric Phases\|21.18 Solutions for Geometric Phases]] | Analyzed | low | yes | yes | [[#N2229\|View]] |
| N2230 | [[21.19 Solutions for Bands in Periodic Potentials\|21.19 Solutions for Bands in Periodic Potentials]] | Analyzed | low | yes | no | [[#N2230\|View]] |
| N2231 | [[21.20 Solutions for Variational Methods, WKB, and Scattering\|21.20 Solutions for Variational Methods, WKB, and Scattering]] | Analyzed | low | yes | no | [[#N2231\|View]] |

## Suggestions

### N2211

Note: [[21.00 Complete Solutions to the Exercises|21.00 Complete Solutions to the Exercises]]  
Priority: low · Graph: no · Manim: no

Placeholder hub with two sentences and no navigation.

- [Links] Add a list of links to the solution notes 21.01–21.20, each paired with its exercise note, so the hub is navigable.

### N2212

Note: [[21.01 Solutions for the Crisis of Classical Physics|21.01 Solutions for the Crisis of Classical Physics]]  
Priority: low · Graph: yes · Manim: no

Clear and numerically correct solutions (all values rechecked).

- [Correctness] The physical-quantities table omits symbols used in the note and the letter $a$ has three meanings (acceleration in Ex. 7, slit width in Ex. 8 and 10, besides the Bohr radius $a_0$); rename the acceleration (e.g. $a_{\mathrm c}$) and add $a$, $r_e$, $\energy P$ and $v$ to the table.
- [Simplify] In Exercise 7, the initial-power estimate $\lvert\energy E_1\rvert/\energy P=2.18\times10^{-18}/4.7\times10^{-8}\approx\quantity{4.7\times10^{-11}}{s}$ is closer to $5\times10^{-11}$ than to $4\times10^{-11}$; quote $\sim5\times10^{-11}$ s.
- [Graph] For Exercise 9, plot $u(\lambda,T)$ for $T=3000,4500,6000$ K over $\lambda\in[100,3000]$ nm with markers at $\lambda_{\max}=b/T$.

### N2213

Note: [[21.02 Solutions for the Postulates of Quantum Mechanics|21.02 Solutions for the Postulates of Quantum Mechanics]]  
Priority: low · Graph: yes · Manim: no

Correct, compact solutions; the two-level dynamics are derived cleanly.

- [Graph] For Exercise 11, plot $P_1(t)$ versus $\energy E t/\hbar\in[0,2\pi]$ for $\Delta/\epsilon=0.25,1,4$ to show the peak $\Delta^2/(\epsilon^2+\Delta^2)$ and the frequency $2\energy E/\hbar$.
- [Simplify] In Exercise 4, show the bound explicitly: $(\Delta A)^2=\langle(\hat A-2)^2\rangle-(\langle\hat A\rangle-2)^2\le1$ because $(a-2)^2\le1$ for all eigenvalues.

### N2214

Note: [[21.03 Solutions for Measurement, Observables, and Uncertainty|21.03 Solutions for Measurement, Observables, and Uncertainty]]  
Priority: low · Graph: yes · Manim: no

Correct and well-explained solutions (numbers in Ex. 6, 7, 9 rechecked).

- [Structure] $\sigma$ denotes both the Gaussian width (Ex. 3, 7, 9) and the Pauli matrices $\sigma_x,\sigma_y,\sigma_z$ (Ex. 8, 10); add the Pauli matrices to the table or note the two uses to avoid confusion.
- [Intuition] In Exercise 11, note that $\Delta x/x_{\max}=1/\sqrt2$ holds exactly for every $n$, not only in the semiclassical limit; what becomes classical at large $n$ is the shape of the density, not this ratio.
- [Graph] For Exercise 9, plot $\Delta x(t)/\sigma=\sqrt{1+(t/t_*)^2}$ for $t/t_*\in[0,4]$ with its asymptote $t/t_*$ and markers at $t_*$ and $\sqrt3\,t_*$.

### N2215

Note: [[21.04 Solutions for the Schrödinger Equation|21.04 Solutions for the Schrödinger Equation]]  
Priority: low · Graph: no · Manim: yes

Correct and complete solutions; the Gaussian-packet algebra was rechecked including the prefactor.

- [Simplify] In Exercise 7, show the completed square explicitly (exponent $-\beta(t)k^2+(2\sigma^2k_0+ix)k-\sigma^2k_0^2$) so the reader can follow how $\beta(t)$ enters.
- [Manim] For Exercise 7, animate $\lvert\psi(x,t)\rvert^2$ and $\operatorname{Re}\psi$ moving at $v_{\mathrm g}$ while crests move at $v_{\mathrm{ph}}=v_{\mathrm g}/2$ and the envelope spreads, linking Exercises 3 and 7.

### N2216

Note: [[21.05 Solutions for Feynman Path Integrals|21.05 Solutions for Feynman Path Integrals]]  
Priority: low · Graph: no · Manim: no

Correct solutions with verified numbers; a few symbols differ from the problem statements.

- [Structure] Exercise 4 uses $L$ for the path length while the problem in [[05.08 Feynman Path Integrals Exercises]] calls it $\ell$ (and Ex. 3 here uses $\ell$ for the phase-length scale); align the symbols and give the inputs $v=10^6$ m/s, $L=10^{-7}$ m in the text.
- [Simplify] Exercise 1 quotes the phase $4.74$ rad without the inputs; state $x_f-x_i=\quantity{1.00}{nm}$ so the number can be reproduced.
- [Structure] Write $S_{\mathrm{cl}}$, $Z$, $\beta$ with the same macros as the table ($\mechanical S_{\mathrm{cl}}$, $\thermal Z$, $\thermal\beta$) or drop the color in the table.

### N2217

Note: [[21.06 Solutions for One-Dimensional Systems|21.06 Solutions for One-Dimensional Systems]]  
Priority: low · Graph: yes · Manim: no

Correct solutions; all numerical roots and matrix elements rechecked.

- [Graph] For Exercise 5, plot $z\tan z$, $-z\cot z$ and $\sqrt{10-z^2}$ for $z\in[0,\sqrt{10}]$, marking the three intersections (lowest at $z\approx1.186$).
- [Graph] For Exercises 8 and 10, plot $T=\energy E/(\energy E+\energy E_\alpha)$ and $R$ versus $\energy E/\energy E_\alpha\in[0,10]$, noting that attractive and repulsive deltas give the same $T$.
- [Intuition] In Exercise 11, add that the left wall makes this equivalent to the odd states of a symmetric finite well of width $4a$, which explains the binding threshold.

### N2218

Note: [[21.07 Solutions for Barriers and Quantum Tunneling|21.07 Solutions for Barriers and Quantum Tunneling]]  
Priority: low · Graph: yes · Manim: no

Correct solutions; the U-238 Gamow estimate and all barrier numbers were recomputed and agree.

- [Simplify] In Exercise 7, state the nuclear radius value used ($R\approx0.153\,r_2\approx\quantity{9.3}{fm}$) so the numbers can be reproduced.
- [Graph] For Exercise 3, plot the exact $T(\energy E/\energy V_0)$ for $\energy E/\energy V_0\in[0,5]$ at a fixed $\sqrt{2m\energy V_0}\,a/\hbar=6$, showing tunneling below $1$ and the resonances $k'a=n\pi$ above.
- [Graph] For Exercise 9, plot $e^{-\energy E/k_BT}$, $e^{-b/\sqrt{\energy E}}$, and their product (scaled) versus $\energy E$ to show the Gamow peak at $\energy E_G$.

### N2219

Note: [[21.08 Solutions for the Harmonic Oscillator|21.08 Solutions for the Harmonic Oscillator]]  
Priority: low · Graph: yes · Manim: no

Correct and clear ladder-operator solutions.

- [Simplify] In Exercise 1, say explicitly that the carbon-12 mass does not enter $\omega$ (it would set the oscillator length $x_0$), since readers will expect it to be used.
- [Graph] For Exercise 7, plot the Poisson distribution $P_n$ for $\lvert\alpha\rvert^2=1,5,20$ as point plots to show the relative width shrinking as $1/\sqrt{\langle N\rangle}$.
- [Simplify] In Exercise 11, give the next term of the high-temperature expansion, $\langle N\rangle\simeq k_BT/(\hbar\omega)-1/2$, which connects to equipartition of $\langle\energy H\rangle$.

### N2220

Note: [[21.09 Solutions for Orbital Angular Momentum|21.09 Solutions for Orbital Angular Momentum]]  
Priority: low · Graph: no · Manim: no

Correct solutions; commutators and ladder matrix elements rechecked.

- [Correctness] $R$ denotes the sphere radius in Exercises 8 and 9 and the radial wave function $R(r)$ in Exercise 10, and $\mechanical M$, $\omega$, $R$ are missing from the table; rename the radial function (e.g. $\mathcal R(r)$) and complete the table.
- [Simplify] In Exercise 10, write the separated form explicitly, $\langle\energy V\rangle=\lambda\langle r\rangle\int\lvert Y_{10}\rvert^2\cos\theta\,\mathrm d\Omega$, instead of saying the expectation "separates into" two factors.

### N2221

Note: [[21.10 Solutions for Spin|21.10 Solutions for Spin]]  
Priority: low · Graph: no · Manim: yes

Correct and concise spin solutions; signs in the Larmor and Berry-phase results rechecked.

- [Manim] For Exercise 7, animate the Bloch vector starting on $+x$ and precessing clockwise (seen from $+z$) for $\omega_L>0$, matching $\langle S_y\rangle=-(\hbar/2)\sin\omega_Lt$.
- [Simplify] In Exercise 11, say that the spinor azimuth is $\phi=\omega t$, so that $\partial_\phi$ is the derivative along the loop, and that the sign of $\gamma_B$ flips for the anti-aligned state.

### N2222

Note: [[21.11 Solutions for Addition of Angular Momentum|21.11 Solutions for Addition of Angular Momentum]]  
Priority: low · Graph: no · Manim: no

Correct solutions with careful convention notes; the Wigner–Eckart and Racah steps were rechecked.

- [Example] In Exercise 7, show the check with $q=0$: $\langle jm;10\mid jm\rangle=m/\sqrt{j(j+1)}$ and $\langle jm\rvert J_z\lvert jm\rangle=\hbar m$ give the same reduced element, which makes the result easier to trust.
- [Simplify] Exercise 9 repeats Exercise 10 of [[21.10 Solutions for Spin]]; add a cross-reference instead of a second derivation.

### N2223

Note: [[21.12 Solutions for the Hydrogen Atom|21.12 Solutions for the Hydrogen Atom]]  
Priority: low · Graph: yes · Manim: no

Concise, correct solutions (all key numbers recomputed: Δr, inverse moments, 121.6 nm, 0.37 %, -9.05e-4 eV) with only minor gaps in intermediate steps.

- [Graph] Exercise 9: plot the 2p radial density $P(u)=u^4e^{-u}/24$ for $u=r/a_0\in[0,15]$, shading $u<1$ (0.37 %) and marking the maximum at $u=4$, so the "most probability between $a_0$ and $6a_0$" claim (about 71 %) is visible.
- [Simplify] Exercise 2: state the general integral $\int_0^\infty r^ke^{-\beta r}\,\mathrm dr=k!/\beta^{k+1}$ once (link [[22.10 Useful Identities and Integrals]]) and show the two substitutions $n=1,2$ explicitly instead of only quoting the results.
- [Simplify] Exercise 8: add the one-line conversion $e^2/(4\pi\varepsilon_0 a_0)=2\,\mathrm{Ry}$ that turns $\langle1/r\rangle=1/a_0$ into $\langle V\rangle=-2\,\mathrm{Ry}$; Exercise 11 reuses it for $\langle V^2\rangle=8\,\mathrm{Ry}^2$.
- [Intuition] Exercise 11: add one sentence comparing $-\tfrac54\alpha^2\,\mathrm{Ry}$ with the full fine-structure shift of 1s ($-\tfrac14\alpha^2\,\mathrm{Ry}$ after adding the Darwin and spin-orbit terms), so readers do not mistake the kinetic correction for the observed shift.

### N2224

Note: [[21.13 Solutions for the Density Matrix and Decoherence|21.13 Solutions for the Density Matrix and Decoherence]]  
Priority: low · Graph: yes · Manim: yes

Correct and compact solutions (purity 5/8, entropy 1.011 nats, precession and dephasing signs verified), with one symbol clash between Exercises 10 and 11.

- [Correctness] Symbol clash: $\gamma$ is the gyromagnetic ratio in Exercise 10 and the dephasing rate in Exercise 11 (only the color macro distinguishes them); rename the dephasing parameter, for example $\Gamma$ with $\hat L=\sqrt\Gamma\,\sigma_z$ and $T_\phi=1/(2\Gamma)$, and update the table.
- [Graph] Exercise 9: plot $S(a)$ for $a\in[0,1]$ (in nats, with a dashed line at $\ln2$) together with the purity $(1+a^2)/2$ as a second curve, to show that both measure distance from the center of the Bloch ball.
- [Manim] Exercises 10 and 11: animate a Bloch vector that precesses about $z$ (Exercise 10) and then, with dephasing switched on, spirals inward to the $z$ axis while $a_z$ stays fixed.
- [Simplify] Exercise 2: write out $\tfrac12(\lvert+\rangle\langle+\rvert+\lvert-\rangle\langle-\rvert)$ in matrix form to show the cancellation of off-diagonal terms explicitly; the current prose is hard to follow.

### N2225

Note: [[21.14 Solutions for Identical Particles|21.14 Solutions for Identical Particles]]  
Priority: low · Graph: yes · Manim: no

Solutions are correct (exchange term $512L^2/(81\pi^4)$, $Z'=27/16$, $-77.5$ eV verified), but the note reuses $L$ and $n$ for different quantities.

- [Correctness] Symbol clash: $L$ is the well width (Exercises 3, 4, 6, 7) and the orbital term label in Exercise 10, and both appear in the table; use $a$ for the width, or write the term label distinctly.
- [Correctness] Symbol clash: $n$ is the orbital index ($n=1$ in Exercise 3) and the number density in Exercise 11; rename the density, for example $n_e$ or $\varrho$.
- [Graph] Exercises 6 and 7: plot the two-particle densities $\lvert\Psi_S(x_1,x_2)\rvert^2$ and $\lvert\Psi_A(x_1,x_2)\rvert^2$ for orbitals 1 and 2 on $[0,L]^2$ (heat maps side by side), showing enhancement along and the node on $x_1=x_2$.
- [Example] Exercise 6: give the numeric values ($\langle(x_1-x_2)^2\rangle_{\mathrm{dist}}\approx0.103L^2$, exchange term $\approx0.065L^2$) so the size of the exchange effect is concrete.
- [Simplify] Exercise 10: say "ground level" rather than "ground term" for $^3P_0$ (the term is $^3P$), and add the one-line reason why $^3S$ and $^3D$ are Pauli forbidden.

### N2226

Note: [[21.15 Solutions for Entanglement, EPR, and Quantum Information|21.15 Solutions for Entanglement, EPR, and Quantum Information]]  
Priority: low · Graph: yes · Manim: no

All solutions check out (CHSH value $-2\sqrt2$, teleportation branches, superdense coding signs) and are clearly written.

- [Graph] Exercise 7: plot the quantum correlation $E(\phi)=-\cos\phi$ against the classical local-hidden-variable sawtooth $E(\phi)=-1+2\phi/\pi$ for $\phi\in[0,\pi]$, and mark the CHSH angles $\pi/4$ and $3\pi/4$ where the gap is largest.
- [Simplify] Exercise 9: show the regrouping $\lvert00\rangle=(\Phi^++\Phi^-)/\sqrt2$, $\lvert01\rangle=(\Psi^++\Psi^-)/\sqrt2$, etc., once, so the four Bob states can be checked rather than only stated.
- [Structure] Exercise 10 repeats the partial-trace argument of Exercise 6 in [[21.13 Solutions for the Density Matrix and Decoherence]]; link it instead of repeating it.

### N2227

Note: [[21.16 Solutions for Perturbation Theory|21.16 Solutions for Perturbation Theory]]  
Priority: medium · Graph: yes · Manim: yes

Derivations are correct (2p rate 6.26e8 s^-1, Stark block $-3ea_0\mathcal E$, Gaussian-pulse optimum $\tau=\sqrt2/\omega$ verified), but several solutions refer to "the source" instead of standing on their own.

- [Structure] Exercise 11 and its callout discuss what "the source" did with $a_0^2$ and a divergent constant estimate; replace this with a self-contained statement (parity kills first order, all terms negative, exact result $\alpha_0=\tfrac92(4\pi\varepsilon_0)a_0^3$ with a citation such as Dalgarno–Lewis) and drop the source commentary.
- [Graph] Exercise 7: plot $P_{0\to1}(\infty)$ normalized to its maximum against $x=\omega_{10}\tau\in[0,5]$, i.e. $x^2e^{-x^2/2}/(2e^{-1})$, marking the optimum at $x=\sqrt2$.
- [Graph] Exercise 8: plot $P_{i\to f}(t)$ against $\omega_{fi}$ at several fixed $t$ (the $\sin^2(\omega t/2)/\omega^2$ peak narrowing as $1/t$ and growing as $t^2$) to motivate the golden-rule delta limit.
- [Manim] Exercise 9: animate the Bloch vector of the driven two-level atom rotating about $x$ from the south pole to the north pole on resonance, with $P_e(t)=\sin^2(\Omega_Rt/2)$ traced alongside.
- [Simplify] Exercise 5: show the radial integral $\int_0^\infty R_{20}R_{21}r^3\,\mathrm dr=-3\sqrt3\,a_0$ in one or two lines (or link the chapter note that does), since it is the only nontrivial step.

### N2228

Note: [[21.17 Solutions for Symmetries and Conservation Laws|21.17 Solutions for Symmetries and Conservation Laws]]  
Priority: low · Graph: no · Manim: no

Solutions are correct (translation conjugation, magnetic-translation phase sign, decay-rate ratio 3.75 verified), with one table entry for a symbol the note never uses.

- [Correctness] The physical-quantities table lists $\Gamma$ (transition rate), but no $\Gamma$ appears in the note; Exercise 11 writes the rates without a symbol. Either introduce $\Gamma_{2p}$, $\Gamma_{3p}$ in Exercise 11 or remove $\Gamma$ from the table.
- [Structure] The Exercise 7 callout discusses the source's naming and sign; condense it to one sentence stating the convention used here (kinetic momentum $\boldsymbol\pi$, phase $e^{-iq\Phi_{ab}/\hbar}$) and that the magnetic-translation generators give the opposite sign.
- [Simplify] Exercise 9 is vague ("bounded sector", "adiabatically followed state"); state the concrete bound $\lvert\Delta\langle J_z\rangle\rvert\le t\lVert[J_z,V]\rVert/\hbar$ and give one example (a weak transverse field on a spin) instead of the general adiabatic remark.

### N2229

Note: [[21.18 Solutions for Geometric Phases|21.18 Solutions for Geometric Phases]]  
Priority: low · Graph: yes · Manim: yes

Correct and well-organized solutions (solid angles, Berry connection, second-order correction in Exercise 7, ring spectrum verified) with some source commentary left in.

- [Graph] Exercise 9: plot $E_n(\Phi)/(\hbar^2/2mR^2)=(n-\Phi/\Phi_0)^2$ for $n=-2,\ldots,2$ and $\Phi/\Phi_0\in[-1.5,1.5]$, highlighting the ground branch with its kinks at half-integer flux.
- [Manim] Exercises 1 and 6: animate the field direction tracing a cone of half-angle $\theta_0$ on the unit sphere while the swept cap area fills and a counter shows $\gamma_+=-\Omega/2$.
- [Structure] Exercise 4 and the Exercise 10 callout refer to what "the source" suggests or says; state the results directly (adiabatic margin as a rule of thumb, Chern number from the closed-surface flux) and drop the source commentary.
- [Simplify] Exercise 2: clarify that "geometric factor $-1$ after one circuit" means $e^{i\gamma_\pm}=e^{\mp i\pi}=-1$, and that the $4\pi$ spinor rotation is an analogy, not the same phase.

### N2230

Note: [[21.19 Solutions for Bands in Periodic Potentials|21.19 Solutions for Bands in Periodic Potentials]]  
Priority: low · Graph: yes · Manim: no

Correct solutions (Kronig–Penney root $qa=1.54272$, 1.29 eV zone-edge estimate, tight-binding limit with $t=\hbar^4\pi^2/(2m^2a^3\alpha)$ verified) with clear structure.

- [Graph] Exercises 3 and 6: plot $f(qa)=\cos(qa)+P\sin(qa)/(qa)$ for $P=1.5$ and $qa\in[0,4\pi]$ with horizontal lines at $\pm1$ and shaded allowed bands; mark the edge at $qa=1.5427$.
- [Graph] Exercises 5 and 7: plot the tight-binding band $E(k)=E_0-2t\cos(ka)$ over $ka\in[-\pi,\pi]$ with its parabolic approximation $E_0-2t+ta^2k^2$ overlaid to show where the effective-mass picture holds.
- [Structure] Exercise 2: shorten the remark on the source's translation convention to one sentence pointing to [[19.01 Discrete Translation Symmetry]] for the $e^{-ika}$ convention.
- [Simplify] Exercise 11: write the intermediate step $\delta=-(\pi/P)(1+\cos ka)$ with $P=m\alpha a/\hbar^2$ before expanding the energy, so the identification of $t$ and $\tilde E_0$ can be followed.

### N2231

Note: [[21.20 Solutions for Variational Methods, WKB, and Scattering|21.20 Solutions for Variational Methods, WKB, and Scattering]]  
Priority: low · Graph: yes · Manim: no

Careful, correct solutions (10/π² bound, quartic and sextic WKB constants, numerical sextic eigenvalues 1.1448 and 4.3386, Yukawa cross section verified) with minor symbol reuse.

- [Correctness] $V_0$ is an energy in Exercise 6 ($V_0e^{-r^2/b^2}$, with the energy macro) but an energy times length in Exercise 9 ($V_0e^{-\mu r}/r$, uncolored); rename the Yukawa strength, for example $g$ in $\unit{J\,m}$, and add it to the table.
- [Graph] Exercise 1: plot $E(\alpha)/(\hbar\omega)$ against $\alpha/\alpha^*\in[0.2,4]$, showing the kinetic and potential contributions and the minimum at 1/2.
- [Graph] Exercise 10: plot the WKB and numerical $E_n/E_*$ for $n=0,\ldots,5$ (extend the table) to show the WKB error falling with $n$.
- [Structure] Exercise 11 summarizes what "the source" connects to Regge theory without any calculation; trim it to the definition and the $s^{\alpha(t)}$ behavior or mark it explicitly as a qualitative remark.
- [Structure] The table restricts $\alpha$ to Exercise 1, while $\alpha(E)$ is the Regge trajectory in Exercise 11; add a separate row so the two meanings are distinguished.
