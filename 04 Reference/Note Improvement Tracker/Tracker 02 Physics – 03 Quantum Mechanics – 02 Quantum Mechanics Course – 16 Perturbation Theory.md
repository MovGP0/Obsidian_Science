---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/16 Perturbation Theory"
---

> [!TLDR]
> This note tracks the review of the 14 notes in `02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/16 Perturbation Theory`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 8 possible errors or notation conflicts. 8 of them are verified (6 fixed, 2 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2168|N2168]] Degenerate perturbation theory and oscillator transitions: The physical-quantity table lists symbols absent from the note with unrelated meanings: $E$ in $\mathrm N$ (linear perturbation coefficient), $\Delta E,\delta E$ (continuum widths), $c$ (speed of light), $V_0,V$ (well depth), and $A,B$ (emission coefficients); remove them and add the used but missing $C_{ii'}$, $\alpha$, $\epsilon$, $U$, $H$, $\Theta$, $a_x,a_y$. **Fixed:** Removed those rows, added H/H_0/V, C_ii', epsilon, alpha, a_x/a_y, K_ij, U, Theta, and corrected the E_0 description
- [[#N2168|N2168]] Degenerate perturbation theory and oscillator transitions: Symbol clash: $C_{ii'}$ denotes the state expansion coefficients in the review section and $C_{ij}$ the quadratic-form matrix of the 2D oscillator perturbation; rename one (e.g. $K_{ij}$), and likewise $\lambda$ is used for the quartic coupling, the mode-frequency shifts $\lambda_j$, and the power-law coupling $\lambda_n$. **Partly:** Renamed the quadratic-form matrix to K_ij and the frequency shifts to kappa_j; kept lambda and lambda_n because both are potential couplings of the same kind distinguished by the subscript
- [[#N2169|N2169]] Einstein coefficients and electric dipole transition rates: The physical-quantity table contradicts the note: $\mechanical{L}$ is listed as "Box side length" (here $L$ is orbital angular momentum, also listed), $\mechanical{R}$ as "Well radius" (here the sum of position vectors, also listed), $N$ as "Number of states" (here photon number), $E_0$ as a degenerate-subspace energy (here the ground-state energy), plus unused $E$ in $\mathrm N$, $\Gamma$, $\mathbf p,\mathbf p'$, $\omega_j$, $t_0$, $\Delta t$; rebuild it from the symbols actually used. **Partly:** Rebuilt the table from used symbols (L box length, R well radius, N states, E in N, p/p', omega_j, t_0, Delta t removed; E_0, N fixed; P_i, alpha, A(k,s), phi, r, H_0, dP/dOmega, X, Y added); Gamma is used (Gamma_n->i^ind), so kept it as the induced emission rate
- [[#N2170|N2170]] Heisenberg and interaction pictures in perturbation calculations: The physical-quantity table lists symbols the note never uses, including gas pressure and volume $P,V$ "of the van der Waals equation", $V_0$ as a well depth, $A,B$ emission coefficients, $c$, $\omega_j$ "of the new oscillator modes", and $E_0$ as a degenerate-subspace energy; remove them and add the used ones ($U$, $U_0$, $U_I$, $V_I$, $O_S,O_H,O_I$, $c_n$, $\omega_0$, $\mathcal T$). **Fixed:** Removed those rows, fixed omega and E rows, added H/H_0/V, V_mn, U/U_0/U_I, V_I, O_S/O_H/O_I, c_n, script T, Theta (kept F, x_0, E in N, z, r, which this note does use)
- [[#N2171|N2171]] Light–matter coupling, absorption, and induced emission: The physical-quantities table lists symbols this note never uses or gives them the wrong meaning: $\signal{\omega}_j$ ("new oscillator modes"), $\mechanical{t}_0,\Delta\mechanical{t}$, $E$ in N, $\mathcal E$ in N (a duplicate of $\electric{\mathcal E}$ in V/m), $\mechanical{\mathbf p}'$, $N$ "number of states", $A,B$ "Einstein coefficients" (which clash with the mode amplitude $A(\signal{\mathbf k},s)$), and a second $\mechanical{v}$ meaning "molar volume in the gas equations"; $\energy{E}_0$ is described as "common energy of a degenerate subspace" but here it is the ground-state energy of the well. Prune the table to the symbols actually used and fix their meanings. **Fixed:** Removed unused rows, replaced A,B by mode amplitude A(k,s), N by photon number, p/p' by p_e/p_p, fixed omega, k, Gamma, Omega and E_0 descriptions
- [[#N2171|N2171]] Light–matter coupling, absorption, and induced emission: Symbol clash: $\mechanical{\ell}$ is the crossing length in the absorption-rate paragraph ("A region of size $\mechanical{\ell}$ has crossing time…"), while $\ell$ is the partial-wave quantum number a few lines earlier in $R_{k\ell}$ and $\delta_{\ell1}$; rename the length (e.g. $\mechanical{d}$). **Fixed:** Renamed the crossing length to d in the text and the table
- [[#N2172|N2172]] Time-dependent transition rates and the golden rule: Symbol clash: $\Delta\energy{E}$ means $\energy{E}_n^{(0)}-\energy{E}_0^{(0)}$ in the constant-perturbation section but "the energy scale of the smooth factors" in the golden-rule window $2\pi\hbar/\Delta\energy{E}\ll\mechanical{t}\ll2\pi\hbar/\delta\energy{E}$; rename one of them (e.g. $W$ for the smoothness scale). **Fixed:** Renamed the smoothness scale to W in the validity window and split the table row into Delta E and W, delta E
- [[#N2172|N2172]] Time-dependent transition rates and the golden rule: The physical-quantities table describes $\mechanical{F}$ as "equal to the negative of the applied force", but with $H\ni-\mechanical{F}\mechanical{x}\Theta(\mechanical{t})$ the force on the oscillator is $+\mechanical{F}$; the table also lists symbols this note never uses ($\signal{\omega}_j$, $\mechanical{F}_0$, $\mechanical{z},\mechanical{r}$, $E$ in N, $c$, $\energy{V}_0$, $A,B$, $d\energy{P}_{\mathrm{rad}}/d\Omega$, $\Delta\mechanical{t}$). Fix $\mechanical{F}$ and prune the rest. **Fixed:** Described F as the applied force (driving term -F x, consistent with x_0 = F/(m omega^2)); removed omega_j, F_0, z, E in N, c, V_0, A/B, dP_rad/dOmega, Delta t; added V and V_n0

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2159 | [[16.00 Perturbation Theory\|16.00 Perturbation Theory]] | Analyzed | low | no | no | [[#N2159\|View]] |
| N2160 | [[16.01 Time-Independent Perturbation Theory – Nondegenerate Case\|16.01 Time-Independent Perturbation Theory – Nondegenerate Case]] | Analyzed | medium | yes | no | [[#N2160\|View]] |
| N2161 | [[16.02 Harmonic Oscillator with a Cubic Perturbation\|16.02 Harmonic Oscillator with a Cubic Perturbation]] | Analyzed | medium | yes | no | [[#N2161\|View]] |
| N2162 | [[16.03 Degenerate Case\|16.03 Degenerate Case]] | Analyzed | low | no | no | [[#N2162\|View]] |
| N2163 | [[16.04 Time-Dependent Perturbation Theory\|16.04 Time-Dependent Perturbation Theory]] | Analyzed | medium | no | no | [[#N2163\|View]] |
| N2164 | [[16.05 Harmonic Perturbation and Fermi's Golden Rule\|16.05 Harmonic Perturbation and Fermi's Golden Rule]] | Analyzed | medium | yes | yes | [[#N2164\|View]] |
| N2165 | [[16.06 Radiation Absorption by an Atom\|16.06 Radiation Absorption by an Atom]] | Analyzed | medium | no | no | [[#N2165\|View]] |
| N2166 | [[16.07 Two-Level Dynamics and Rabi Oscillations\|16.07 Two-Level Dynamics and Rabi Oscillations]] | Analyzed | low | no | yes | [[#N2166\|View]] |
| N2167 | [[16.08 Perturbation Theory Exercises\|16.08 Perturbation Theory Exercises]] | Analyzed | low | no | no | [[#N2167\|View]] |
| N2168 | [[Degenerate perturbation theory and oscillator transitions\|Degenerate perturbation theory and oscillator transitions]] | Analyzed | high | yes | no | [[#N2168\|View]] |
| N2169 | [[Einstein coefficients and electric dipole transition rates\|Einstein coefficients and electric dipole transition rates]] | Analyzed | high | yes | no | [[#N2169\|View]] |
| N2170 | [[Heisenberg and interaction pictures in perturbation calculations\|Heisenberg and interaction pictures in perturbation calculations]] | Analyzed | high | yes | yes | [[#N2170\|View]] |
| N2171 | [[Light–matter coupling, absorption, and induced emission\|Light–matter coupling, absorption, and induced emission]] | Analyzed | high | no | no | [[#N2171\|View]] |
| N2172 | [[Time-dependent transition rates and the golden rule\|Time-dependent transition rates and the golden rule]] | Analyzed | high | yes | yes | [[#N2172\|View]] |

## Suggestions

### N2159

Note: [[16.00 Perturbation Theory|16.00 Perturbation Theory]]  
Priority: low · Graph: no · Manim: no

Accurate chapter hub; contains a transcription callout about "the source summary".

- [Structure] Remove the "Second-order energy in the source summary" callout; the corrected formula stands on its own and readers cannot see the source.

### N2160

Note: [[16.01 Time-Independent Perturbation Theory – Nondegenerate Case|16.01 Time-Independent Perturbation Theory – Nondegenerate Case]]  
Priority: medium · Graph: yes · Manim: no

Correct derivation, but the second-order step is skipped and no worked example or validity criterion is given.

- [Simplify] Show the $\lambda^2$ equation $(\hat H_0-E_n^{(0)})\lvert n^{(2)}\rangle+(\hat V-E_n^{(1)})\lvert n^{(1)}\rangle-E_n^{(2)}\lvert n^{(0)}\rangle=0$ before projecting, so that $E_n^{(2)}=\langle n^{(0)}\rvert\hat V\lvert n^{(1)}\rangle$ is visible.
- [Intuition] State the validity condition $\lvert V_{mn}\rvert\ll\lvert E_n^{(0)}-E_m^{(0)}\rvert$ and the level-repulsion interpretation of the second-order term (coupled levels push each other apart).
- [Example] Add the exactly solvable two-level case $\begin{pmatrix}E_1&v\\v&E_2\end{pmatrix}$ with eigenvalues $\tfrac{E_1+E_2}2\pm\sqrt{(\tfrac{E_1-E_2}2)^2+v^2}$, whose expansion reproduces $E^{(2)}=v^2/(E_1-E_2)$.
- [Graph] Plot the exact two-level energies and the second-order approximation versus $v/\Delta\in[0,2]$ (with $\Delta=E_2-E_1$), showing where perturbation theory fails.
- [Structure] Replace the "Sign of the ground-state correction" callout about the source with a plain statement; the main text already handles the zero-coupling case.

### N2161

Note: [[16.02 Harmonic Oscillator with a Cubic Perturbation|16.02 Harmonic Oscillator with a Cubic Perturbation]]  
Priority: medium · Graph: yes · Manim: no

The quoted result $-(\lambda^2/\hbar\omega)(\hbar/2m\omega)^3(30n^2+30n+11)$ is correct, but the matrix elements behind it are not shown and $\lambda$ changes meaning from 16.01.

- [Simplify] List the four matrix elements $\langle n\pm3\rvert\hat x^3\lvert n\rangle$ and $\langle n\pm1\rvert\hat x^3\lvert n\rangle$ in units of $(\hbar/2m\omega)^{3/2}$ (e.g. $\sqrt{(n+1)(n+2)(n+3)}$ and $3(n+1)^{3/2}$) and the energy denominators $\mp3\hbar\omega,\mp\hbar\omega$, so the reader can reproduce $30n^2+30n+11$.
- [Structure] In 16.01 $\lambda$ is dimensionless, here it carries units $\mathrm{J\,m^{-3}}$; rename the cubic coefficient (e.g. $\kappa$) or state the change, and delete the "Expansion convention" source callout.
- [Intuition] Explain why the shift is negative for every $n$: the potential $\tfrac12m\omega^2x^2+\lambda x^3$ softens on one side; also note that the series is only asymptotic because this potential has no global minimum.
- [Graph] Plot $V(x)=\tfrac12m\omega^2x^2+\lambda x^3$ in units of $\hbar\omega$ and $\sqrt{\hbar/m\omega}$ for $\lambda=0$ and a small $\lambda$, with the shifted levels $E_0,E_1,E_2$ drawn as horizontal lines.

### N2162

Note: [[16.03 Degenerate Case|16.03 Degenerate Case]]  
Priority: low · Graph: no · Manim: no

Correct and well illustrated; Stark matrix element, eigenvalues, eigenvectors, and Fig. 16.1 are consistent.

- [Intuition] Add one sentence interpreting the shifted states: $(\lvert2s\rangle\pm\lvert2p_0\rangle)/\sqrt2$ carry permanent dipole moments along $\pm z$ of magnitude $3ea_0$, which is why the shift is linear in the field, unlike the quadratic shift of $1s$.
- [Simplify] The first-order shifts are written $\lambda E_{n,k}^{(1)}$, but the Stark section uses $\hat V=eE\hat z$ without $\lambda$; say that $\lambda=1$ there.

### N2163

Note: [[16.04 Time-Dependent Perturbation Theory|16.04 Time-Dependent Perturbation Theory]]  
Priority: medium · Graph: no · Manim: no

Correct but terse; the derivation of the coefficient equation and the validity condition are skipped.

- [Simplify] Show the intermediate step: substituting the expansion into $i\hbar\partial_t\lvert\psi\rangle=(\hat H_0+\hat V)\lvert\psi\rangle$ cancels the $\hat H_0$ terms against the time derivative of the phases, then projecting onto $\langle m\rvert$ gives the coefficient equation.
- [Intuition] State when first order is valid ($\lvert c_f^{(1)}\rvert\ll1$, i.e. $c_i\approx1$) and that the phase $e^{i\omega_{fi}t'}$ makes the integral pick out the Fourier component of $V_{fi}(t)$ at $\omega_{fi}$.
- [Example] Add the constant perturbation switched on at $t=0$ (exercise 8 of 16.08) as a short worked example, $P=4\lvert V_{fi}\rvert^2\sin^2(\omega_{fi}t/2)/(\hbar\omega_{fi})^2$, as a bridge to 16.05.

### N2164

Note: [[16.05 Harmonic Perturbation and Fermi's Golden Rule|16.05 Harmonic Perturbation and Fermi's Golden Rule]]  
Priority: medium · Graph: yes · Manim: yes

Correct derivation of the golden rule (prefactors $\pi t/2$ and $2\pi/\hbar$ checked), but the key sinc-squared limit is only asserted.

- [Graph] Plot $F_t(\Delta)=\sin^2(\Delta t/2)/(\Delta/2)^2$ versus $\Delta=\omega_{fi}-\omega$ for $t=1,2,4$ (arbitrary units), showing peak height $t^2$, width $\sim2\pi/t$, and area $2\pi t$.
- [Manim] Animate $F_t(\Delta)$ as $t$ grows: the central peak rises as $t^2$ and narrows as $1/t$ while the area grows linearly, which shows why the rate becomes constant.
- [Simplify] Justify $\sin^2(xt/2)/x^2\to(\pi t/2)\delta(x)$ in one line with $\int_{-\infty}^\infty\sin^2(xt/2)/x^2\,dx=\pi t/2$.
- [Intuition] State the time window of validity: $t$ long enough that the peak is narrow compared with the energy range over which $\rho$ and $V_{fi}$ vary, yet $\Gamma t\ll1$ so first order holds.
- [Structure] Remove the "Time dependence in the source" callout; the main text is already correct.

### N2165

Note: [[16.06 Radiation Absorption by an Atom|16.06 Radiation Absorption by an Atom]]  
Priority: medium · Graph: no · Manim: no

The rate formulas and the $2p\to1s$ numbers ($A\approx6.3\times10^8\,\mathrm{s^{-1}}$, $\tau\approx1.6\,\mathrm{ns}$) are correct, but both rates appear without derivation or link to the golden rule.

- [Simplify] Show how the absorption rate follows from 16.05: average $\lvert\hat{\boldsymbol\epsilon}\cdot\mathbf d_{fi}\rvert^2$ over directions and polarizations to get $\lvert\mathbf d_{fi}\rvert^2/3$, and integrate the delta function against the spectral energy density $I(\omega)/c$.
- [Links] Link the spontaneous-emission formula to [[Einstein coefficients and electric dipole transition rates]] and state the Einstein relation that connects the two displayed rates.
- [Example] Show the $2p\to1s$ number: $\lvert\langle100\rvert z\lvert210\rangle\rvert^2=(2^{15}/3^{10})a_0^2$ and $\hbar\omega=10.2\,\mathrm{eV}$ give $A\approx6.3\times10^8\,\mathrm{s^{-1}}$.
- [Structure] Replace the "Dipole sign in the source" callout with the definition $\mathbf d=-e\mathbf r$ in the main text.

### N2166

Note: [[16.07 Two-Level Dynamics and Rabi Oscillations|16.07 Two-Level Dynamics and Rabi Oscillations]]  
Priority: low · Graph: no · Manim: yes

Correct Rabi formula and a correct figure (the detuned curve with $\delta=\sqrt3\,\Omega_R$ has amplitude $1/4$ and doubled frequency).

- [Simplify] Sketch the rotating-wave step: keep only the resonant term, go to the rotating frame to get the time-independent Hamiltonian $\tfrac\hbar2\begin{pmatrix}-\delta&\Omega_R\\\Omega_R&\delta\end{pmatrix}$, whose eigenfrequency splitting $\sqrt{\Omega_R^2+\delta^2}$ is the generalized Rabi frequency.
- [Manim] Animate the Bloch vector precessing about the tilted axis $(\Omega_R,0,\delta)$, on resonance (passing through the south pole) and detuned (a smaller cone), next to the growing $P(t)$ curve.
- [Structure] Fig. 16.2 labels the curve $P_{0\to1}$ while the text uses $P_{i\to f}$; use one label.

### N2167

Note: [[16.08 Perturbation Theory Exercises|16.08 Perturbation Theory Exercises]]  
Priority: low · Graph: no · Manim: no

Exercise list; the stated results check out (exercises 1, 2, 6, 7, 8, 10 verified).

- [Structure] Exercise 3 uses the label "Source condition" and refers to "the source"; restate it as a normal exercise with a result line.

### N2168

Note: [[Degenerate perturbation theory and oscillator transitions|Degenerate perturbation theory and oscillator transitions]]  
Priority: high · Graph: yes · Manim: no

A lecture transcript with course logistics, page references, and a physical-quantity table full of symbols the note never uses; the physics shown is mostly correct but disorganized, and the title promises oscillator transitions that never appear.

- [Correctness] The physical-quantity table lists symbols absent from the note with unrelated meanings: $E$ in $\mathrm N$ (linear perturbation coefficient), $\Delta E,\delta E$ (continuum widths), $c$ (speed of light), $V_0,V$ (well depth), and $A,B$ (emission coefficients); remove them and add the used but missing $C_{ii'}$, $\alpha$, $\epsilon$, $U$, $H$, $\Theta$, $a_x,a_y$.
- [Correctness] Symbol clash: $C_{ii'}$ denotes the state expansion coefficients in the review section and $C_{ij}$ the quadratic-form matrix of the 2D oscillator perturbation; rename one (e.g. $K_{ij}$), and likewise $\lambda$ is used for the quartic coupling, the mode-frequency shifts $\lambda_j$, and the power-law coupling $\lambda_n$.
- [Structure] Delete the course-logistics paragraphs (grading, midterm week, instructor absences, office room) and the page references ("on the previous page", "At the bottom of the page"), which are meaningless in the vault.
- [Structure] The title mentions oscillator transitions, but the note ends with the time-ordered propagator and never computes a transition; retitle (e.g. "Degenerate perturbation theory and the time-evolution operator") or link to [[Heisenberg and interaction pictures in perturbation calculations]], where driven-oscillator transitions are computed.
- [Simplify] In the degenerate section, give the closed-form mixing angle $\tan2\alpha=2V_{12}/(V_{11}-V_{22})$ and eigenvalues $\tfrac{V_{11}+V_{22}}2\pm\sqrt{(\tfrac{V_{11}-V_{22}}2)^2+V_{12}^2}$ instead of stopping at the condition $V_{\tilde1\tilde2}=0$.
- [Graph] Plot the two eigenvalues of $\begin{pmatrix}\Delta/2&v\\v&-\Delta/2\end{pmatrix}$ versus $\Delta\in[-4v,4v]$ (avoided crossing), with the nondegenerate second-order result $\pm(\Delta/2+v^2/\Delta)$ overlaid, to show why the formula diverges as $\Delta\to0$ and how diagonalization fixes it.

### N2169

Note: [[Einstein coefficients and electric dipole transition rates|Einstein coefficients and electric dipole transition rates]]  
Priority: high · Graph: yes · Manim: no

Correct core results (detailed balance $A=B$ per mode, $\langle0\vert\mathbf j_0\vert n\rangle=-i\omega\mathbf d_{0n}$, the $\Delta m$ selection rules), but presented as lecture notes with exam remarks, an unexplained nonstandard normalization, and a wrong physical-quantity table.

- [Correctness] The physical-quantity table contradicts the note: $\mechanical{L}$ is listed as "Box side length" (here $L$ is orbital angular momentum, also listed), $\mechanical{R}$ as "Well radius" (here the sum of position vectors, also listed), $N$ as "Number of states" (here photon number), $E_0$ as a degenerate-subspace energy (here the ground-state energy), plus unused $E$ in $\mathrm N$, $\Gamma$, $\mathbf p,\mathbf p'$, $\omega_j$, $t_0$, $\Delta t$; rebuild it from the symbols actually used.
- [Structure] Remove the exam and lecture remarks ("For the midterm...", "The February 12 lecture...", "Yuri chooses exam problems...", "The notes repeat the derivation...") and merge the duplicated detailed-balance derivation (done twice, with $P_i/P_n$ and with $P_0/P_n$) into one.
- [Intuition] Explain that $A=B$ holds only for rates per single mode, and relate it to the standard Einstein relation $A_{21}/B_{21}=\hbar\omega^3/(\pi^2c^3)$ (with $B$ defined per spectral energy density per angular frequency) by counting the $\omega^2/(\pi^2c^3)$ modes per unit volume and frequency, so it does not appear to contradict 16.06.
- [Simplify] The text says "the notes set $k_B=1$" while every formula keeps $k_B$; delete the remark. Also state once that this note uses Gaussian units (16.06 uses SI) and give the SI form of $dP/d\Omega$.
- [Graph] Plot the dipole radiation patterns in polar form: $\sin^2\theta$ for $\Delta m=0$ and $(1+\cos^2\theta)/2$ for $\Delta m=\pm1$, $\theta\in[0,2\pi]$.

### N2170

Note: [[Heisenberg and interaction pictures in perturbation calculations|Heisenberg and interaction pictures in perturbation calculations]]  
Priority: high · Graph: yes · Manim: yes

A long, mostly correct lecture transcript (the driven-oscillator result $\langle x\rangle=-F_0[\cos\omega t-\cos\omega_0t]/[m(\omega_0^2-\omega^2)]$, the Dyson series, and the quadratic-drive matrix elements check out), but it mixes three topics, includes homework and transcription remarks, and has a table with foreign symbols.

- [Correctness] The physical-quantity table lists symbols the note never uses, including gas pressure and volume $P,V$ "of the van der Waals equation", $V_0$ as a well depth, $A,B$ emission coefficients, $c$, $\omega_j$ "of the new oscillator modes", and $E_0$ as a degenerate-subspace energy; remove them and add the used ones ($U$, $U_0$, $U_I$, $V_I$, $O_S,O_H,O_I$, $c_n$, $\omega_0$, $\mathcal T$).
- [Structure] Split into (1) Schrödinger, Heisenberg, and interaction pictures, (2) the Dyson series and time ordering, and (3) worked driven-oscillator and hydrogen examples; move "homework problem 5.28", "chapter 5 of Sakurai", "The handwritten result retains an extra factor of 1/2", and "The notes refer to Landau and Lifshitz" out of the main text.
- [Intuition] For the sinusoidal drive, add the classical check: the quantum $\langle x(t)\rangle$ equals the classical driven-oscillator solution with $x(0)=\dot x(0)=0$ (Ehrenfest, exact for a linear force), and note that first order fails near $\omega\to\omega_0$, where $\lvert c_1\rvert$ grows linearly in $t$.
- [Graph] Plot $\langle x(t)\rangle$ in units of $F_0/(m\omega_0^2)$ versus $\omega_0t\in[0,60]$ for $\omega/\omega_0=0.5$ and $0.95$, showing the beat pattern near resonance.
- [Manim] Animate the sudden force step: the original Gaussian ground state sits off-centre in the shifted parabola $\tfrac12m\omega^2(x-x_0)^2$ and oscillates rigidly as a coherent state, with the overlap $\lvert c_0\rvert^2=e^{-m\omega x_0^2/(2\hbar)}$ displayed.
- [Simplify] In the force-step section, give the closed forms instead of only defining the integrals: $\lvert c_n\rvert^2=e^{-\lvert\alpha\rvert^2}\lvert\alpha\rvert^{2n}/n!$ with $\lvert\alpha\rvert=\lvert x_0\rvert\sqrt{m\omega/2\hbar}$, so the return amplitude $\tilde c_0=\sum_n\lvert c_n\rvert^2e^{-i\omega_nt_0}$ sums to a closed expression.

### N2171

Note: [[Light–matter coupling, absorption, and induced emission|Light–matter coupling, absorption, and induced emission]]  
Priority: high · Graph: no · Manim: no

The gauge-invariance and minimal-coupling algebra checks out, but the note is a loose lecture transcript: it switches between SI and Gaussian units, leans on "the preceding page", stops in the middle of the induced-emission argument, and has a physical-quantities table full of symbols from other pages.

- [Correctness] The physical-quantities table lists symbols this note never uses or gives them the wrong meaning: $\signal{\omega}_j$ ("new oscillator modes"), $\mechanical{t}_0,\Delta\mechanical{t}$, $E$ in N, $\mathcal E$ in N (a duplicate of $\electric{\mathcal E}$ in V/m), $\mechanical{\mathbf p}'$, $N$ "number of states", $A,B$ "Einstein coefficients" (which clash with the mode amplitude $A(\signal{\mathbf k},s)$), and a second $\mechanical{v}$ meaning "molar volume in the gas equations"; $\energy{E}_0$ is described as "common energy of a degenerate subspace" but here it is the ground-state energy of the well. Prune the table to the symbols actually used and fix their meanings.
- [Correctness] Symbol clash: $\mechanical{\ell}$ is the crossing length in the absorption-rate paragraph ("A region of size $\mechanical{\ell}$ has crossing time…"), while $\ell$ is the partial-wave quantum number a few lines earlier in $R_{k\ell}$ and $\delta_{\ell1}$; rename the length (e.g. $\mechanical{d}$).
- [Structure] Mixed units: the Maxwell equations and the table units ($\electric{\varepsilon}_0$, $\magnetic{\mu}_0$, $\unit{T\,m}$ for $\magnetic{\mathbf A}$) are SI, while the Hamiltonian, the gauge transformation, $\energy{u}=\signal{\omega}^2|A|^2/(2\pi c^2)$ and the absorption rate are Gaussian; add a units callout at the top of "Interaction of matter with light", fix the table description of $\electric{\phi}$ (in Gaussian units it is $A^0$, not $cA^0$), and replace "The SI normalization of the preceding page" with a wiki link to the note it refers to (for example [[Heisenberg and interaction pictures in perturbation calculations]]).
- [Structure] Fourier convention: the field expansion uses $\int d^3\signal{\mathbf k}$ with no $(2\pi)^{-3}$, but the absorption section says to integrate over $d^3\signal{\mathbf k}/(2\pi)^3$ "in the notes' Fourier convention"; pick one convention, and show the step from $|A(\signal{\mathbf k},s)|^2$ through $\energy{u}$ and $\energy{S}$ to $\energy{I}(\signal{\omega})$ that gives the stated $\Gamma^{\mathrm{abs}}_{i\to n}$, which is currently only asserted ("the notes give").
- [Structure] The "Induced emission" section stops after the Bose–Einstein occupation and the Boltzmann ratio without drawing the conclusion; add the detailed-balance step that requires spontaneous emission (or link to [[Einstein coefficients and electric dipole transition rates]]), and remove administrative lines such as "For the midterm, review…".
- [Simplify] Under "Absorption of light", add the dipole approximation $e^{-i\signal{\mathbf k}\cdot\mechanical{\mathbf r}}\approx1$ and $\langle n|\mechanical{\widehat{\mathbf p}}|i\rangle=i\mechanical{m}\signal{\omega}_{ni}\langle n|\mechanical{\mathbf r}|i\rangle$ to connect $\mathbf j(-\signal{\mathbf k})$ with the familiar $\electric{q}\,\boldsymbol\epsilon\cdot\mechanical{\mathbf r}$ matrix element used in the Baym 12.1 example.

### N2172

Note: [[Time-dependent transition rates and the golden rule|Time-dependent transition rates and the golden rule]]  
Priority: high · Graph: yes · Manim: yes

All key formulas check out (sinc² kernel integral $2\pi t/\hbar$, box density of states, $d\Gamma/d\Omega$, the oscillator-pulse amplitude, the $i\eta$ prescription), but the order follows the lecture chronology, the golden-rule window appears twice, and the table is copied from other pages.

- [Correctness] Symbol clash: $\Delta\energy{E}$ means $\energy{E}_n^{(0)}-\energy{E}_0^{(0)}$ in the constant-perturbation section but "the energy scale of the smooth factors" in the golden-rule window $2\pi\hbar/\Delta\energy{E}\ll\mechanical{t}\ll2\pi\hbar/\delta\energy{E}$; rename one of them (e.g. $W$ for the smoothness scale).
- [Correctness] The physical-quantities table describes $\mechanical{F}$ as "equal to the negative of the applied force", but with $H\ni-\mechanical{F}\mechanical{x}\Theta(\mechanical{t})$ the force on the oscillator is $+\mechanical{F}$; the table also lists symbols this note never uses ($\signal{\omega}_j$, $\mechanical{F}_0$, $\mechanical{z},\mechanical{r}$, $E$ in N, $c$, $\energy{V}_0$, $A,B$, $d\energy{P}_{\mathrm{rad}}/d\Omega$, $\Delta\mechanical{t}$). Fix $\mechanical{F}$ and prune the rest.
- [Structure] Reorder the material: the opening sine-drive and second-order fragments ("the integral on the previous page", "the quadratic drive", "$n=i\pm2$", "the February 9 discussion is canceled") refer to context that is not in the note; move them after the golden rule or link the source note, and merge the duplicated golden-rule window paragraphs (after the equation for $\Gamma$ and again before Fig. 6).
- [Example] After $d\Gamma/d\Omega=\mechanical{m}\signal{k}|\widetilde V|^2/(4\pi^2\hbar^3\mechanical{L}^3)$, finish the stated step: dividing by $j_{\mathrm{in}}$ gives the Born cross section $d\sigma/d\Omega=\mechanical{m}^2|\widetilde V(\signal{\mathbf k}'-\signal{\mathbf k})|^2/(4\pi^2\hbar^4)$, independent of $\mechanical{L}$; this shows why the box size drops out.
- [Graph] Replace or supplement Figs. 4–5 with a native plot of $P(\Delta\energy{E},\mechanical{t})=4|\energy{V}|^2\sin^2(\Delta\energy{E}\,\mechanical{t}/2\hbar)/\Delta\energy{E}^2$ against $\Delta\energy{E}$ (units $\hbar=|\energy{V}|=1$, range $-10\le\Delta\energy{E}\le10$) for $\mechanical{t}=1,2,4$, showing peak height $\propto\mechanical{t}^2$ and width $\propto1/\mechanical{t}$.
- [Manim] Animate the kernel $P/\mechanical{t}$ as $\mechanical{t}$ grows, with the shaded area fixed at $2\pi/\hbar$ while the peak narrows towards $(2\pi/\hbar)\delta(\Delta\energy{E})$, over a row of discrete final levels of spacing $\delta\energy{E}$; this shows both ends of the golden-rule time window directly.
