---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/08 Harmonic Oscillator"
---

> [!TLDR]
> This note tracks the review of the 9 notes in `02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/08 Harmonic Oscillator`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 2 possible errors or notation conflicts. 2 of them are verified (2 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2082|N2082]] Harmonic oscillator wavefunctions and ladder calculations: The physical-quantities table defines $a_0$ as the Bohr radius in $\unit{m}$, but here $a_0$ is the first power-series coefficient; $\Psi$ is also given in $\unit{m^{-3/2}}$ in a purely 1D note. **Fixed:** Removed the Bohr-radius row (a_0 is a series coefficient); Psi unit changed to m^-1/2
- [[#N2082|N2082]] Harmonic oscillator wavefunctions and ladder calculations: Symbol clashes: $\alpha$ is the Hermite scale $\sqrt{m\omega/\hbar}$, then $n\pi/a$ in the $\langle x\rangle$ integral, then the delta strength in $V=+\alpha\delta(x)$; $y$ is both the dimensionless oscillator coordinate and the unknown function in $y''+y=0$; $E_0$ is the oscillator ground energy $\hbar\omega/2$ and also "the constant multiplying $n^2$" for the well (the comparison table correctly uses $E_1$); $k$ and $k'$ swap roles between "Strategy for wavefunctions" and the last paragraph. **Fixed:** <x> helper alpha renamed beta; Hermite scale alpha renamed gamma (delta strength keeps alpha); example function y renamed g in y''+y=0; well E_0 n^2 changed to E_1 n^2; last paragraph uses k' inside and k=i kappa outside as in the strategy section; added gamma and alpha table rows

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2074 | [[08.00 Harmonic Oscillator\|08.00 Harmonic Oscillator]] | Analyzed | low | no | no | [[#N2074\|View]] |
| N2075 | [[08.01 Algebraic Form – Operators â and â†\|08.01 Algebraic Form – Operators â and â†]] | Analyzed | low | no | no | [[#N2075\|View]] |
| N2076 | [[08.02 Position Representation – Hermite Functions\|08.02 Position Representation – Hermite Functions]] | Analyzed | low | no | no | [[#N2076\|View]] |
| N2077 | [[08.03 Expectation Values and Fluctuations\|08.03 Expectation Values and Fluctuations]] | Analyzed | low | no | no | [[#N2077\|View]] |
| N2078 | [[08.04 Dynamics and the Ehrenfest Theorem\|08.04 Dynamics and the Ehrenfest Theorem]] | Analyzed | low | yes | no | [[#N2078\|View]] |
| N2079 | [[08.05 Coherent States\|08.05 Coherent States]] | Analyzed | low | yes | yes | [[#N2079\|View]] |
| N2080 | [[08.06 Oscillator in Two and Three Dimensions\|08.06 Oscillator in Two and Three Dimensions]] | Analyzed | low | no | no | [[#N2080\|View]] |
| N2081 | [[08.07 Harmonic Oscillator Exercises\|08.07 Harmonic Oscillator Exercises]] | Analyzed | low | no | no | [[#N2081\|View]] |
| N2082 | [[Harmonic oscillator wavefunctions and ladder calculations\|Harmonic oscillator wavefunctions and ladder calculations]] | Analyzed | high | yes | no | [[#N2082\|View]] |

## Suggestions

### N2074

Note: [[08.00 Harmonic Oscillator|08.00 Harmonic Oscillator]]  
Priority: low · Graph: no · Manim: no

A clear hub with a correct chapter summary.

- [Links] Link the summary bullets to their notes (08.01 ladder operators, 08.02 Hermite functions, 08.03 uncertainties, 08.05 coherent states, 08.06 3D degeneracy), as the 07.00 hub does.

### N2075

Note: [[08.01 Algebraic Form – Operators â and â†|08.01 Algebraic Form – Operators â and â†]]  
Priority: low · Graph: no · Manim: no

The algebraic derivation is correct and well ordered, and the inverse relations check out.

- [Simplify] Show the one-line commutator check $[\hat a,\hat a^\dagger]=\frac{m\omega}{2\hbar}\cdot\frac{-2i}{m\omega}[\hat x,\hat p]=\hat I$ and the step $\hat a^\dagger\hat a=\frac{\hat H}{\hbar\omega}-\frac12$; both are currently asserted.
- [Intuition] Describe the energy ladder: rungs $\hbar\omega$ apart, $\hat a$ steps down and stops at $\lvert0\rangle$; a small static ladder diagram would help.

### N2076

Note: [[08.02 Position Representation – Hermite Functions|08.02 Position Representation – Hermite Functions]]  
Priority: low · Graph: no · Manim: no

Correct and clear, with an accurate native graph of $\psi_0$ to $\psi_3$; the normalizations and plotted factors match.

- [Simplify] Show one application of $\hat a^\dagger=\frac{1}{\sqrt2}(\xi-d/d\xi)$ on $\psi_0$ to get $\psi_1\propto2\xi e^{-\xi^2/2}$, so "repeated application" becomes concrete.
- [Intuition] Mention that for large $n$, $|\psi_n|^2$ approaches the classical density $1/(\pi\sqrt{2n+1-\xi^2})$; a second panel plotting $|\psi_{20}|^2$ against it would illustrate correspondence.

### N2077

Note: [[08.03 Expectation Values and Fluctuations|08.03 Expectation Values and Fluctuations]]  
Priority: low · Graph: no · Manim: no

Correct matrix elements and uncertainties, presented compactly.

- [Simplify] Derive $\langle n|\hat x^2|n\rangle$ in one line from $(\hat a+\hat a^\dagger)^2$, where only $\hat a\hat a^\dagger+\hat a^\dagger\hat a=2\hat N+1$ survives; currently it is stated.
- [Structure] The table lists $\energy{\hat H}$, which the text never writes; either use it in the mean-energy sentence or drop the row.

### N2078

Note: [[08.04 Dynamics and the Ehrenfest Theorem|08.04 Dynamics and the Ehrenfest Theorem]]  
Priority: low · Graph: yes · Manim: no

The example is correct and short, but the opening sentence about "confining potentials treated here" is awkward.

- [Simplify] Replace "This exact correspondence among the confining potentials treated here follows from the linearity of $V'(x)$" with: since $\langle V'(\hat x)\rangle=V'(\langle\hat x\rangle)$ only when $V'$ is linear, the means obey Newton's law exactly for the oscillator (and for the free particle or a uniform field).
- [Simplify] Note that $x_0'=x_0/\sqrt2$, with $x_0$ from 08.02, to avoid introducing a new length symbol.
- [Graph] Plot $\langle x(t)\rangle/x_0'=\cos\omega t$ together with $|\psi(x,t)|^2$ snapshots at $\omega t=0,\pi/2,\pi$ for the $(\lvert0\rangle+\lvert1\rangle)/\sqrt2$ state.

### N2079

Note: [[08.05 Coherent States|08.05 Coherent States]]  
Priority: low · Graph: yes · Manim: yes

Correct and clear; the mean values, uncertainties, and Fig. 8.2 densities check out.

- [Graph] Add a bar chart of the Poisson distribution $P_n$ for $|\alpha|^2=4$ ($n=0$ to $12$) beside Fig. 8.2.
- [Manim] Animate the coherent-state Gaussian $|\langle x|\alpha(t)\rangle|^2$ oscillating in the parabolic potential over one period with constant width, side by side with $\alpha e^{-i\omega t}$ rotating in the complex plane.
- [Simplify] Show the one-line derivation of $\langle\hat x\rangle$ from $\hat x=(x_0/\sqrt2)(\hat a+\hat a^\dagger)$ and $\langle\alpha|\hat a^\dagger=\alpha^*\langle\alpha|$.

### N2080

Note: [[08.06 Oscillator in Two and Three Dimensions|08.06 Oscillator in Two and Three Dimensions]]  
Priority: low · Graph: no · Manim: no

Short, correct, and clear.

- [Example] Add the explicit counting for $n=2$ (six triples, or $(n_r,\ell)=(1,0),(0,2)$ giving $1+5=6$ states) to show that the two bases agree.

### N2081

Note: [[08.07 Harmonic Oscillator Exercises|08.07 Harmonic Oscillator Exercises]]  
Priority: low · Graph: no · Manim: no

A good exercise list; the results for exercises 1, 2, 7, and 10 are correct.

- [Structure] In exercise 1 the carbon-12 mass is irrelevant ($\omega=2E_0/\hbar$); either say so as the point of the exercise or also ask for the oscillator length $x_0$, which does need the mass.

### N2082

Note: [[Harmonic oscillator wavefunctions and ladder calculations|Harmonic oscillator wavefunctions and ladder calculations]]  
Priority: high · Graph: yes · Manim: no

The ladder-operator algebra, normalization, Hermite table, and delta-jump condition are correct, but the note is a raw lecture transcript with stray logistics, overloaded symbols, and a wrong quantities table.

- [Correctness] The physical-quantities table defines $a_0$ as the Bohr radius in $\unit{m}$, but here $a_0$ is the first power-series coefficient; $\Psi$ is also given in $\unit{m^{-3/2}}$ in a purely 1D note.
- [Correctness] Symbol clashes: $\alpha$ is the Hermite scale $\sqrt{m\omega/\hbar}$, then $n\pi/a$ in the $\langle x\rangle$ integral, then the delta strength in $V=+\alpha\delta(x)$; $y$ is both the dimensionless oscillator coordinate and the unknown function in $y''+y=0$; $E_0$ is the oscillator ground energy $\hbar\omega/2$ and also "the constant multiplying $n^2$" for the well (the comparison table correctly uses $E_1$); $k$ and $k'$ swap roles between "Strategy for wavefunctions" and the last paragraph.
- [Structure] Remove the office-hours line, the "Midterm topics" list, "Homework problem 4" without its statement, and the handwriting remarks; move the infinite-well, power-series, and finite-well/delta material to the 06 notes (or link them), so this note covers only the oscillator.
- [Simplify] Under "Harmonic-oscillator asymptotics" finish the argument: the series must terminate, so $\lambda=2n+1$, which gives $E_n=(n+\tfrac12)\hbar\omega$ and $f=H_n$; currently the recurrence is left hanging and the result appears only earlier, without derivation.
- [Structure] The oscillator angular frequency is written $\signal{\omega}$ here but $\mechanical{\omega}$ in the 08.0x course notes; use one macro consistently.
- [Graph] Plot $\psi_n(x)$ and $|\psi_n|^2$ for $n=0..3$ against $y=\alpha x$, with $V=\tfrac12y^2$ and the classical turning points $y=\pm\sqrt{2n+1}$, to support the comparison table (or embed the 08.02 figure).
