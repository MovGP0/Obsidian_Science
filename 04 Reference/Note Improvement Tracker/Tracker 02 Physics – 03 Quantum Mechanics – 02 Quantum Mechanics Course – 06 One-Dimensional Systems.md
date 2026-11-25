---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/06 One-Dimensional Systems"
---

> [!TLDR]
> This note tracks the review of the 11 notes in `02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/06 One-Dimensional Systems`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 5 possible errors or notation conflicts. 5 of them are verified (5 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2060|N2060]] 06.05 Attractive Delta Potential: The source link [[Orbital angular momentum, rings, and spheres#Atkins problems 3.29 and 3.30|Physics 137]] targets a section about hydrogenic orbital and spin angular momentum, which has nothing to do with point interactions. The relevant heading in that note is "#Double delta well". **Fixed:** Link heading changed to #Double delta well (heading exists in the target note)
- [[#N2063|N2063]] 06.08 One-Dimensional Systems Exercises: Symbol clash: $T$ denotes both the transmission coefficient (exercises 2, 8, and 10) and the oscillation period (exercise 6), and the table lists both. Rename the period, for example to $\tau$. **Fixed:** Renamed the period in exercise 6 and the table to tau (value 4mL^2/(3 pi hbar) verified)
- [[#N2064|N2064]] Free particles, finite barriers, and point interactions: $\alpha$ denotes three different things: the delta strength in $V=-\alpha\delta(x)$, the Gaussian parameter in $\phi(k)=\frac{2N}{\sqrt\alpha}\cos(kx_0)e^{-k^2/(2\alpha)}$, and the cosine coefficient in the centered infinite well $\psi_{\mathrm{II}}=\alpha\cos(kx)+\beta\sin(kx)$; rename the last two (e.g. $C,D$ and $a_G$); equation tags (1),(2) are also reused for both the Fourier pair and the even-state matching equations. **Fixed:** Gaussian parameter renamed gamma (with a definition sentence); centered-well coefficients alpha,beta renamed P,Q; even-state matching tags renumbered (4),(5) and the reference updated; added alpha and gamma table rows
- [[#N2065|N2065]] Square-well, oscillator, and tunneling problems: The physical-quantities table lists $R$ as "Activity" in $\unit{Bq}$, but here $R$ is the dimensionless reflection coefficient; $E_n$ is described as "relative to ionization" in eV, which is wrong for the infinite well (measured from the well floor); add $T$, $k$, $\kappa$, $\eta$, $L$, $m$, $\psi$. **Fixed:** R row now reflection coefficient (1); E_n row now J, measured from the well floor; added E, V_0, m, L, psi, k, kappa, eta, T rows
- [[#N2065|N2065]] Square-well, oscillator, and tunneling problems: Symbol clashes: in "Barrier boundary conditions" region III is $De^{ik_3x}+Fe^{-ik_3x}$ with $F=0$, but two paragraphs later it is $Fe^{ik_3x}+Ge^{-ik_3x}$ with $F$ the transmitted amplitude; the finite-well decay uses $\eta=1/\alpha$ with $\alpha$ never defined (use $\kappa$ as later in the note). **Fixed:** Region III in Barrier boundary conditions now Fe^{ik3x}+Ge^{-ik3x} with G=0; eta=1/kappa

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2055 | [[06.00 One-Dimensional Systems\|06.00 One-Dimensional Systems]] | Analyzed | low | no | no | [[#N2055\|View]] |
| N2056 | [[06.01 Free Particle\|06.01 Free Particle]] | Analyzed | low | no | no | [[#N2056\|View]] |
| N2057 | [[06.02 Potential Step\|06.02 Potential Step]] | Analyzed | medium | yes | yes | [[#N2057\|View]] |
| N2058 | [[06.03 Infinite Potential Well\|06.03 Infinite Potential Well]] | Analyzed | low | no | yes | [[#N2058\|View]] |
| N2059 | [[06.04 Finite Potential Well\|06.04 Finite Potential Well]] | Analyzed | medium | yes | no | [[#N2059\|View]] |
| N2060 | [[06.05 Attractive Delta Potential\|06.05 Attractive Delta Potential]] | Analyzed | medium | yes | no | [[#N2060\|View]] |
| N2061 | [[06.06 General Theorems in One Dimension\|06.06 General Theorems in One Dimension]] | Analyzed | low | no | no | [[#N2061\|View]] |
| N2062 | [[06.07 Overview\|06.07 Overview]] | Analyzed | low | no | no | [[#N2062\|View]] |
| N2063 | [[06.08 One-Dimensional Systems Exercises\|06.08 One-Dimensional Systems Exercises]] | Analyzed | low | no | no | [[#N2063\|View]] |
| N2064 | [[Free particles, finite barriers, and point interactions\|Free particles, finite barriers, and point interactions]] | Analyzed | high | yes | yes | [[#N2064\|View]] |
| N2065 | [[Square-well, oscillator, and tunneling problems\|Square-well, oscillator, and tunneling problems]] | Analyzed | high | yes | no | [[#N2065\|View]] |

## Suggestions

### N2055

Note: [[06.00 One-Dimensional Systems|06.00 One-Dimensional Systems]]  
Priority: low · Graph: no · Manim: no

A clear chapter hub with correct summary formulas.

- [Structure] No change needed. Optionally list [[06.07 Overview]] in the chapter summary so that the comparison table is reachable from the hub.

### N2056

Note: [[06.01 Free Particle|06.01 Free Particle]]  
Priority: low · Graph: no · Manim: no

Correct but terse; the reason that $E<0$ is excluded is stated without justification.

- [Simplify] Justify "the exponential solutions cannot satisfy the conditions": any combination $Ae^{\kappa x}+Be^{-\kappa x}$ diverges at $+\infty$ or $-\infty$ unless $A=B=0$, so it is not even polynomially bounded and is not a generalized eigenfunction.
- [Intuition] Note the twofold degeneracy for each $E>0$ ($\pm k$), which contrasts with the nondegenerate bound states in 06.06.

### N2057

Note: [[06.02 Potential Step|06.02 Potential Step]]  
Priority: medium · Graph: yes · Manim: yes

The derivations and coefficients are correct, but the note lacks a picture of how $R$ and $T$ depend on energy and an intuition for why $T\ne|C/A|^2$.

- [Graph] Plot $R(E/V_0)$ and $T(E/V_0)$ on $E/V_0\in[0,5]$: $R=1$ below 1, then $R=((\sqrt{\epsilon}-\sqrt{\epsilon-1})/(\sqrt{\epsilon}+\sqrt{\epsilon-1}))^2$ with $\epsilon=E/V_0$. The plot shows full reflection at threshold and the slow decay of $R$ at high energy.
- [Intuition] Explain the factor $k_2/k_1$ in $T$: the current is density times velocity, and the transmitted wave moves more slowly. Note also that $|C/A|$ can exceed 1 without violating conservation.
- [Manim] Animate a Gaussian packet hitting the step for $E<V_0$ and for $E>V_0$. The first case shows the evanescent tail and total reflection; the second shows the packet splitting into reflected and transmitted parts.
- [Example] Add a numerical example, such as an electron with $E=2V_0$, which gives $k_2/k_1=1/\sqrt2$, $R\approx0.029$, and $T\approx0.971$, to show how small the quantum reflection typically is.

### N2058

Note: [[06.03 Infinite Potential Well|06.03 Infinite Potential Well]]  
Priority: low · Graph: no · Manim: yes

Clear and correct, with a good figure, a correct parity table, and a correct uncertainty estimate.

- [Manim] Animate $|\psi(x,t)|^2$ for $(\psi_1+\psi_2)/\sqrt2$ sloshing between the walls with period $4mL^2/(3\pi\hbar)$, which connects to exercise 6 in 06.08.
- [Intuition] Add a numeric anchor for the energy scale: for an electron in $L=1\,\mathrm{nm}$, $E_1\approx0.376\,\mathrm{eV}$. This shows why nanometre confinement gives electron-volt level spacings.

### N2059

Note: [[06.04 Finite Potential Well|06.04 Finite Potential Well]]  
Priority: medium · Graph: yes · Manim: no

The derivation, the bound-state count $\lceil2z_0/\pi\rceil$, and Fig. 6.2 (which uses $\kappa=\tan 1$ consistently with $k\tan ka=\kappa$) are correct, but the graphical solution is described without a plot.

- [Graph] Add the standard graphical-solution plot. On $z\in[0,z_0]$ with $z_0=4$, plot $z\tan z$ and $-z\cot z$ (on their positive branches) together with the quarter circle $\sqrt{z_0^2-z^2}$, and mark the three intersections.
- [Example] Work one case numerically, such as $z_0=\pi/4$ or the exercise value $z_0=\sqrt{10}$. Give the root $z_1$ and the resulting $E_1=-V_0(1-z_1^2/z_0^2)$, together with the conversion $E=\hbar^2z^2/(2ma^2)-V_0$, which the note never states.
- [Intuition] Add the limit $z_0\to\infty$, in which the roots approach $z=n\pi/2$ and reproduce the infinite well of width $2a$.

### N2060

Note: [[06.05 Attractive Delta Potential|06.05 Attractive Delta Potential]]  
Priority: medium · Graph: yes · Manim: no

The physics (jump condition, $E_0$, $T(k)$, figure) is correct, but the last section is mistitled and wordy, and one source link points to an unrelated heading.

- [Correctness] The source link [[Orbital angular momentum, rings, and spheres#Atkins problems 3.29 and 3.30|Physics 137]] targets a section about hydrogenic orbital and spin angular momentum, which has nothing to do with point interactions. The relevant heading in that note is "#Double delta well".
- [Structure] Rename "Use the derivative jump as a normalization check". The jump fixes the decay rate, and normalization ($A=\sqrt\kappa$) is a separate step. Also condense the paragraph into two equations: $\kappa=m\alpha/\hbar^2$ and $A=\sqrt\kappa$.
- [Graph] Plot $T(E)$ against $E/|E_0|$ on $[0,10]$, using $T=1/(1+|E_0|/E)$ since $(m\alpha/\hbar^2k)^2=|E_0|/E$. This compact form and the plot make the low-energy reflection obvious.
- [Simplify] In the opening, write "finite integrated strength $2aV_0=\alpha$" rather than "finite $V_0a$" so that the limiting procedure is explicit.

### N2061

Note: [[06.06 General Theorems in One Dimension|06.06 General Theorems in One Dimension]]  
Priority: low · Graph: no · Manim: no

Correct and compact; the node theorem is stated without any intuition.

- [Intuition] Add a short Sturm-comparison heuristic for Theorem 6.2: raising $E$ increases the local curvature, so $\psi$ turns faster and fits one more half-oscillation before it must decay. Point to Fig. 6.1 in 06.03 as an illustration.
- [Simplify] In the proof of Theorem 6.1, state why $W\to0$: both functions and their derivatives vanish at $\pm\infty$ or at hard walls, so the constant $W$ is zero.

### N2062

Note: [[06.07 Overview|06.07 Overview]]  
Priority: low · Graph: no · Manim: no

A useful, correct comparison table.

- [Structure] No change needed. Optionally add a column for degeneracy: twofold in the continuum for $E$ above both asymptotes, and nondegenerate for bound states.

### N2063

Note: [[06.08 One-Dimensional Systems Exercises|06.08 One-Dimensional Systems Exercises]]  
Priority: low · Graph: no · Manim: no

A solid exercise set; the numerical results (0.376, 1.50, 3.38 eV, 1.10 um, the $\langle x(t)\rangle$ amplitude $16L/(9\pi^2)$, and $0.568\hbar$) were rechecked and are correct.

- [Correctness] Symbol clash: $T$ denotes both the transmission coefficient (exercises 2, 8, and 10) and the oscillation period (exercise 6), and the table lists both. Rename the period, for example to $\tau$.
- [Structure] Exercise 5: add the result. Here $z_0=\sqrt{10}\approx3.16$, just above $\pi$, so there are three bound states, the third barely bound. This is worth stating because the graphical estimate is delicate.

### N2064

Note: [[Free particles, finite barriers, and point interactions|Free particles, finite barriers, and point interactions]]  
Priority: high · Graph: yes · Manim: yes

The physics checks out (penetration depth 0.20 nm, delta-well R and T, barrier $T^{-1}$, even-state condition all verified), but the note is a lightly edited lecture transcript with stray fragments, repeated derivations, and an unfinished ending.

- [Correctness] $\alpha$ denotes three different things: the delta strength in $V=-\alpha\delta(x)$, the Gaussian parameter in $\phi(k)=\frac{2N}{\sqrt\alpha}\cos(kx_0)e^{-k^2/(2\alpha)}$, and the cosine coefficient in the centered infinite well $\psi_{\mathrm{II}}=\alpha\cos(kx)+\beta\sin(kx)$; rename the last two (e.g. $C,D$ and $a_G$); equation tags (1),(2) are also reused for both the Fourier pair and the even-state matching equations.
- [Structure] Remove transcript artifacts: the heading "##### ) — One-dimensional potentials", "The margin notes quantized energy.", "OH means office hours.", the homework references "Problem 3/problem 2/2.22" without statements, and the notes about corrected handwriting; merge the twice-stated finite-barrier setup (General wavefunctions/Continuity and the numbered recipe) into one pass.
- [Structure] The centered infinite well section stops after writing the two matching equations; finish it ($\cos(ka/2)=0$ or $\sin(ka/2)=0$, $k_n=n\pi/a$, $E_n=n^2\pi^2\hbar^2/(2ma^2)$) or link to [[06.03 Infinite Potential Well]].
- [Structure] The physical-quantities table gives $\Psi$ in $\unit{m^{-3/2}}$ "in three dimensions" although the whole note is 1D; give $\unit{m^{-1/2}}$ and add $m$, $\alpha$, $L$, $a$, $z$, $z_0$.
- [Graph] Under "Finite barrier" plot $T(E/V)$ from the given $T^{-1}$ formula for $z=\sqrt{2mV}L/\hbar=3$ over $0<E/V<1$ (log y-axis), and under "Even functions" plot $\tan z$ and $\sqrt{z_0^2/z^2-1}$ for $z_0=8$ on $0<z<8$ with intersections marked, replacing the hand-sketched Fig. 24.
- [Manim] After Eq. (3), animate a Gaussian packet's $|\Psi(x,t)|^2$ spreading as the $k$ components dephase, to motivate the $\Psi(x,0)\to\phi(k)\to\Psi(x,t)$ recipe.

### N2065

Note: [[Square-well, oscillator, and tunneling problems|Square-well, oscillator, and tunneling problems]]  
Priority: high · Graph: yes · Manim: no

The infinite-well derivation is correct and readable, but the note has a broken quantities table, inconsistent amplitude labels, duplicated sentences, and ends in a one-line stub.

- [Correctness] The physical-quantities table lists $R$ as "Activity" in $\unit{Bq}$, but here $R$ is the dimensionless reflection coefficient; $E_n$ is described as "relative to ionization" in eV, which is wrong for the infinite well (measured from the well floor); add $T$, $k$, $\kappa$, $\eta$, $L$, $m$, $\psi$.
- [Correctness] Symbol clashes: in "Barrier boundary conditions" region III is $De^{ik_3x}+Fe^{-ik_3x}$ with $F=0$, but two paragraphs later it is $Fe^{ik_3x}+Ge^{-ik_3x}$ with $F$ the transmitted amplitude; the finite-well decay uses $\eta=1/\alpha$ with $\alpha$ never defined (use $\kappa$ as later in the note).
- [Structure] Delete the duplicated cat-norm sentence ("Each diagonal integral...") and the handwriting remarks ("The handwritten box omits...", "The red note says..."); the "Expectation values" section is a single question, so either complete it (e.g. $\langle x\rangle=L/2$, $\langle x^2\rangle$ for the infinite well) or remove it.
- [Simplify] The paragraph linking $\Delta x\,\Delta p_y\ge0$ to $\hat{\mathbf x}\cdot\hat{\mathbf y}=0$ is misleading; replace by the statement that $[\hat x,\hat p_y]=0$, so there is no lower bound.
- [Graph] Under "Infinite square well" plot $\psi_n(x)=\sqrt{2/L}\sin(n\pi x/L)$ and $|\psi_n|^2$ for $n=1,2,3$ offset at $E_n\propto n^2$ on $0\le x\le L$.
