---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/05 Feynman Path Integrals"
---

> [!TLDR]
> This note tracks the review of the 9 notes in `02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/05 Feynman Path Integrals`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found no possible errors in this folder.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2046 | [[05.00 Feynman Path Integrals\|05.00 Feynman Path Integrals]] | Analyzed | low | no | no | [[#N2046\|View]] |
| N2047 | [[05.01 Transition Amplitude and Propagator\|05.01 Transition Amplitude and Propagator]] | Analyzed | low | no | no | [[#N2047\|View]] |
| N2048 | [[05.02 Time Discretization and the Feynman Formula\|05.02 Time Discretization and the Feynman Formula]] | Analyzed | medium | no | yes | [[#N2048\|View]] |
| N2049 | [[05.03 Free Particle\|05.03 Free Particle]] | Analyzed | low | yes | no | [[#N2049\|View]] |
| N2050 | [[05.04 Harmonic Oscillator\|05.04 Harmonic Oscillator]] | Analyzed | medium | yes | yes | [[#N2050\|View]] |
| N2051 | [[05.05 Classical Limit and Stationary Phase\|05.05 Classical Limit and Stationary Phase]] | Analyzed | medium | yes | no | [[#N2051\|View]] |
| N2052 | [[05.06 Equivalence to the Schrödinger Equation\|05.06 Equivalence to the Schrödinger Equation]] | Analyzed | low | no | no | [[#N2052\|View]] |
| N2053 | [[05.07 Closed Paths and Geometric Phases\|05.07 Closed Paths and Geometric Phases]] | Analyzed | low | no | no | [[#N2053\|View]] |
| N2054 | [[05.08 Feynman Path Integrals Exercises\|05.08 Feynman Path Integrals Exercises]] | Analyzed | low | no | no | [[#N2054\|View]] |

## Suggestions

### N2046

Note: [[05.00 Feynman Path Integrals|05.00 Feynman Path Integrals]]  
Priority: low · Graph: no · Manim: no

A clean chapter hub with correct summary formulas and working links.

- [Structure] No change needed. Optionally write the flux phase $e^{iq\Phi/\hbar}$ in the last bullet, because the table lists $\Phi$ but the text never uses the symbol.

### N2047

Note: [[05.01 Transition Amplitude and Propagator|05.01 Transition Amplitude and Propagator]]  
Priority: low · Graph: no · Manim: no

Correct and readable; the Green-function remark is slightly loose and there is no concrete example.

- [Simplify] Qualify "It is a Green function": the retarded Green function is $\theta(t_f-t_i)K$, which satisfies $(i\hbar\partial_{t_f}-\hat H)G=i\hbar\,\delta(x_f-x_i)\delta(t_f-t_i)$.
- [Example] Add the spectral form $K=\sum_n\psi_n(x_f)\psi_n^*(x_i)e^{-iE_n(t_f-t_i)/\hbar}$. It makes the composition law and the initial condition $\delta(x_f-x_i)$ (from completeness) immediate.

### N2048

Note: [[05.02 Time Discretization and the Feynman Formula|05.02 Time Discretization and the Feynman Formula]]  
Priority: medium · Graph: no · Manim: yes

The derivation is correct (Trotter ordering, $N/2$ power of the prefactor, and $V(x_k)$ placement all check out), but the momentum Gaussian integral that turns phase space into configuration space is only asserted.

- [Example] Show one completed square: $\int\frac{dp}{2\pi\hbar}\exp\{\frac{i}{\hbar}[p\Delta x-\epsilon p^2/(2m)]\}=\sqrt{m/(2\pi i\hbar\epsilon)}\,e^{im\Delta x^2/(2\hbar\epsilon)}$, using the damped Gaussian prescription ($\epsilon\to\epsilon-i0$).
- [Intuition] Explain why the error per Trotter step is $O(\epsilon^2)$ (from the commutator $[\hat T,\hat V]$), so that $N$ steps accumulate $O(T\epsilon)\to0$.
- [Manim] Animate the time-slicing: a grid of $N$ time slices with free intermediate positions $x_k$, random zigzag paths redrawn as $N$ grows, and each path's phasor $e^{iS/\hbar}$ added to a running sum in the complex plane.
- [Simplify] In the note on Wick rotation, add the Euclidean weight $e^{-S_E/\hbar}$. This explains why the imaginary-time integral converges while the real-time one is only oscillatory.

### N2049

Note: [[05.03 Free Particle|05.03 Free Particle]]  
Priority: low · Graph: yes · Manim: no

Correct and concise, but the induction step is stated without its key Gaussian convolution identity.

- [Example] Write the induction step explicitly: $\int dx_1\,e^{ia(x_2-x_1)^2}e^{ib(x_1-x_0)^2}\propto e^{i\frac{ab}{a+b}(x_2-x_0)^2}$. With $a=m/(2\hbar n\epsilon)$ and $b=m/(2\hbar\epsilon)$, this gives the $(n+1)\epsilon$ law.
- [Graph] Plot $\mathrm{Re}\,K_{\mathrm{free}}$ and $\mathrm{Im}\,K_{\mathrm{free}}$ against $x_f$ for fixed $T$, in units of $\ell=\sqrt{2\hbar T/m}$. The chirp, with faster oscillation farther out, shows that far endpoints correspond to large classical velocities.
- [Intuition] Note that $|K_{\mathrm{free}}|$ is independent of $x_f$. A point source spreads uniformly in magnitude, and only the phase carries position information.

### N2050

Note: [[05.04 Harmonic Oscillator|05.04 Harmonic Oscillator]]  
Priority: medium · Graph: yes · Manim: yes

The formulas (5.5) and (5.6), the focal-point statement, and the trace remark are correct, but the classical action and the determinant prefactor are quoted without any derivation steps.

- [Example] Derive Eq. (5.5) in two lines. Use $x_{\mathrm{cl}}(t)=[x_i\sin\omega(T-t)+x_f\sin\omega t]/\sin\omega T$ and the boundary-term form $S_{\mathrm{cl}}=\frac m2[x\dot x]_0^T$ that follows from the equation of motion.
- [Simplify] In Remark 5.1, carry out the trace for the reader or point to exercise 9 in 05.08. Expanding $1/[2\sinh(\beta\hbar\omega/2)]=\sum_n e^{-\beta\hbar\omega(n+1/2)}$ shows the spectrum directly.
- [Graph] Plot classical trajectories $x_{\mathrm{cl}}(t)$ from a fixed $x_i$ with several initial velocities over $\omega t\in[0,2\pi]$. All of them refocus at $\omega t=\pi$ (at $-x_i$) and $2\pi$ (at $x_i$), which illustrates the focal points and the delta-function kernel.
- [Manim] Animate a fan of oscillator trajectories in the $(t,x)$ plane converging at the focal time, while the prefactor $1/\sqrt{\sin\omega T}$ diverges and its phase jumps by $-\pi/2$.

### N2051

Note: [[05.05 Classical Limit and Stationary Phase|05.05 Classical Limit and Stationary Phase]]  
Priority: medium · Graph: yes · Manim: no

The physics and the Van Vleck formula are correct once the phase note is applied, but the reader must patch Eq. (5.7) with a separate note, and the stationary-phase mechanism itself is not shown.

- [Simplify] Put the $e^{-i\pi/4}$ directly into Eq. (5.7) by writing the prefactor as $\sqrt{\frac{1}{2\pi i\hbar}\left|-\partial^2S_{\mathrm{cl}}/\partial x_f\partial x_i\right|}$. Then delete the "Phase convention in the source" note and the references to "the source". In one dimension, the $\det$ is unnecessary.
- [Example] Check Eq. (5.7) against the free particle in one line: $-\partial^2S_{\mathrm{cl}}/\partial x_f\partial x_i=m/T$ reproduces Eq. (5.4).
- [Graph] Illustrate stationary phase with a one-parameter family of paths $x_a(t)=x_{\mathrm{cl}}(t)+a\sin(\pi t/T)$, for which $S(a)=S_{\mathrm{cl}}+ca^2$. Plot $\cos(S(a)/\hbar)$ against $a$ for two values of $\hbar$. The integrand oscillates rapidly except near $a=0$, and the oscillation becomes faster as $\hbar$ decreases.
- [Intuition] Add the one-dimensional stationary-phase formula $\int e^{i f(a)/\hbar}da\approx\sqrt{2\pi i\hbar/f''(a_0)}\,e^{if(a_0)/\hbar}$. It explains the origin of both the prefactor and the $i$.

### N2052

Note: [[05.06 Equivalence to the Schrödinger Equation|05.06 Equivalence to the Schrödinger Equation]]  
Priority: low · Graph: no · Manim: no

A correct, well-paced derivation; the Gaussian moments and the final equation check out.

- [Simplify] Replace "Here the source places the potential at the final position" with a neutral statement. The choice of $V(x)$ or $V(y)$ changes only $O(\epsilon\xi)$ terms, which contribute at $O(\epsilon^{3/2})$ and vanish in the limit.
- [Intuition] Add a sentence explaining that $|\xi|\sim\sqrt{\hbar\epsilon/m}$ is a diffusion-like scaling, so $\xi^2\sim\epsilon$. This is why the second-order Taylor term survives at first order in $\epsilon$ while higher terms drop out.

### N2053

Note: [[05.07 Closed Paths and Geometric Phases|05.07 Closed Paths and Geometric Phases]]  
Priority: low · Graph: no · Manim: no

Short and correct, but the meta-commentary about "the source" makes it read like an editorial note.

- [Simplify] Merge the "Homotopy and magnetic field" note into the main text as a plain statement: the relative phase depends only on the homotopy class when $\mathbf B=0$ along the accessible paths. Drop the wording "The source describes".
- [Intuition] Add a static diagram or a short sentence describing two paths that pass on either side of a shielded solenoid. The particle never meets $\mathbf B$, yet the interference pattern shifts by $q\Phi/\hbar$.

### N2054

Note: [[05.08 Feynman Path Integrals Exercises|05.08 Feynman Path Integrals Exercises]]  
Priority: low · Graph: no · Manim: no

A good exercise set; all numerical results (1.23e9 m^-1, 4.74 rad, 1.52e-8 m, 432 rad, 5.00e-31 J s, the flux quantum h/2e) and the partition function were rechecked and are correct.

- [Structure] Exercise 6: define the speed in $\Delta\varphi=mv\Delta L/\hbar$ as $v=(L_1+L_2)/(2T)$. Then the result follows exactly from $m(L_2^2-L_1^2)/(2\hbar T)$ rather than from an unstated limit.
