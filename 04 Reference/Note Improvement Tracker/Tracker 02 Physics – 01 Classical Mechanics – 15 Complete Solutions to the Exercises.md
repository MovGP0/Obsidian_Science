---
title: "Note Improvement Tracker – 02 Physics/01 Classical Mechanics/15 Complete Solutions to the Exercises"
---

> [!TLDR]
> This note tracks the review of the 15 notes in `02 Physics/01 Classical Mechanics/15 Complete Solutions to the Exercises`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found no possible errors in this folder.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N1064 | [[15.00 Complete Solutions to the Exercises\|15.00 Complete Solutions to the Exercises]] | Analyzed | low | no | no | [[#N1064\|View]] |
| N1065 | [[15.01 Solutions for Point Particle Kinematics\|15.01 Solutions for Point Particle Kinematics]] | Analyzed | low | yes | no | [[#N1065\|View]] |
| N1066 | [[15.02 Solutions for Newton's Three Laws\|15.02 Solutions for Newton's Three Laws]] | Analyzed | low | yes | no | [[#N1066\|View]] |
| N1067 | [[15.03 Solutions for Work, Energy, and Conservation\|15.03 Solutions for Work, Energy, and Conservation]] | Analyzed | low | yes | no | [[#N1067\|View]] |
| N1068 | [[15.04 Solutions for Oscillations\|15.04 Solutions for Oscillations]] | Analyzed | low | yes | no | [[#N1068\|View]] |
| N1069 | [[15.05 Solutions for Particle Systems, Collisions, and Momentum\|15.05 Solutions for Particle Systems, Collisions, and Momentum]] | Analyzed | low | no | no | [[#N1069\|View]] |
| N1070 | [[15.06 Solutions for Gravitation and Motion Under Central Forces\|15.06 Solutions for Gravitation and Motion Under Central Forces]] | Analyzed | low | yes | yes | [[#N1070\|View]] |
| N1071 | [[15.07 Solutions for Rigid Bodies\|15.07 Solutions for Rigid Bodies]] | Analyzed | low | no | yes | [[#N1071\|View]] |
| N1072 | [[15.08 Solutions for Fundamentals of Fluid Mechanics\|15.08 Solutions for Fundamentals of Fluid Mechanics]] | Analyzed | low | no | no | [[#N1072\|View]] |
| N1073 | [[15.09 Solutions for Constraints, Virtual Work, and d’Alembert’s Principle\|15.09 Solutions for Constraints, Virtual Work, and d’Alembert’s Principle]] | Analyzed | low | no | no | [[#N1073\|View]] |
| N1074 | [[15.10 Solutions for Euler–Lagrange Equations\|15.10 Solutions for Euler–Lagrange Equations]] | Analyzed | low | yes | yes | [[#N1074\|View]] |
| N1075 | [[15.11 Solutions for Hamilton's Principle and Symmetries\|15.11 Solutions for Hamilton's Principle and Symmetries]] | Analyzed | low | no | no | [[#N1075\|View]] |
| N1076 | [[15.12 Solutions for the Hamiltonian Formulation\|15.12 Solutions for the Hamiltonian Formulation]] | Analyzed | low | yes | no | [[#N1076\|View]] |
| N1077 | [[15.13 Solutions for Canonical Transformations\|15.13 Solutions for Canonical Transformations]] | Analyzed | low | no | no | [[#N1077\|View]] |
| N1078 | [[15.14 Solutions for Small Oscillations and Normal Modes\|15.14 Solutions for Small Oscillations and Normal Modes]] | Analyzed | low | yes | no | [[#N1078\|View]] |

## Suggestions

### N1064

Note: [[15.00 Complete Solutions to the Exercises|15.00 Complete Solutions to the Exercises]]  
Priority: low · Graph: no · Manim: no

A minimal hub note that does its job.

- [Links] Add links to 15.01 through 15.14 so the hub is navigable on its own.

### N1065

Note: [[15.01 Solutions for Point Particle Kinematics|15.01 Solutions for Point Particle Kinematics]]  
Priority: low · Graph: yes · Manim: no

Correct, concise solutions with verified numbers; a few would benefit from limit checks and one trajectory figure.

- [Graph] For exercises 2 and 9, plot $\mechanical{y}(\mechanical{x})$ for $\mechanical{v}_0=\quantity{20}{m\,s^{-1}}$, $\alpha=30^\circ$ from $\mechanical{h}_0=0$ and $\mechanical{h}_0=\quantity{10}{m}$, marking range and apex.
- [Intuition] In exercise 9, add the check that $\mechanical{h}_0\to0$ recovers $\mechanical{v}_0^2\sin2\alpha/\mechanical{g}$ from exercise 2.
- [Simplify] In exercise 7, the closing sentence about average position is unexplained and off-topic; remove it or justify it.
- [Graph] For exercise 12, a small plot of the circle of radius $\mechanical{R}/2$ centered at $(\mechanical{R}/2,0)$ makes the result immediate.

### N1066

Note: [[15.02 Solutions for Newton's Three Laws|15.02 Solutions for Newton's Three Laws]]  
Priority: low · Graph: yes · Manim: no

Correct solutions with sound numerics (including the Coriolis and drag derivations); mainly lacking free-body descriptions and limiting checks.

- [Intuition] In exercise 9, add a one-line physical reason for the westward deflection (the Coriolis acceleration $-2\mechanical{\omega}\cos\lambda\,\mechanical{\dot z}$ points west on the way up and east on the way down, but the westward velocity gained during ascent persists) and note that $\cos\lambda$ makes it vanish at the poles.
- [Example] In exercise 14, add the limit $\mechanical{v}_\infty\to\infty$: $\ln(1+u)\simeq u-u^2/2$ recovers $\mechanical{v}_0^2/(2\mechanical{g})$.
- [Graph] Plot $\mechanical{v}(t)$ for linear drag (exercises 6 and 14) against the drag-free line, showing the approach to $-\mechanical{v}_\infty$.
- [Structure] Exercises 1, 2, 7, and 13 would benefit from a one-sentence list of forces and axes before the equation, as exercise 11 does.

### N1067

Note: [[15.03 Solutions for Work, Energy, and Conservation|15.03 Solutions for Work, Energy, and Conservation]]  
Priority: low · Graph: yes · Manim: no

Correct, compact energy solutions; the potential-energy exercises would gain from plotted curves.

- [Graph] For exercises 4, 9, and 10, plot $\energy{U}=\mechanical{x}^4-4\mechanical{x}^2$, the Morse curve $\energy{U}_0(1-e^{-\mechanical{x}/\mechanical{a}})^2$, and $-A/\mechanical{x}+B/\mechanical{x}^2$, each with an energy line marking turning points and bound versus unbound motion.
- [Intuition] In exercise 11, note that friction also acts during the $\quantity{0.05}{m}$ of spring expansion, so $\mechanical{d}=\quantity{1.70}{m}$ is the total path measured from release.
- [Simplify] In exercise 13, show $\energy{U}_{\mathrm{eff}}''(\mechanical{r}_0)$ or refer to exercise 10 (same function with $A=\alpha$, $B=\beta'$) to avoid an unexplained jump.

### N1068

Note: [[15.04 Solutions for Oscillations|15.04 Solutions for Oscillations]]  
Priority: low · Graph: yes · Manim: no

Correct and consistent with the $2\signal{\gamma}$ damping convention; a couple of plots would anchor the resonance and beats answers.

- [Graph] For exercise 15, plot $\mechanical{x}_1(t)$ and $\mechanical{x}_2(t)$ with $\mechanical{k}/\mechanical{m}=1$ over several modulation periods; note that $\signal{\omega}_2/\signal{\omega}_1=\sqrt3$ is far from 1, so the beats are coarse compared with weak coupling.
- [Graph] For exercises 8 and 13, plot $\mechanical{A}(\signal{\Omega})$ with $\signal{\omega}_0=5$, $\signal{\gamma}=0.1$ and mark the half-power width $2\signal{\gamma}$.
- [Simplify] In exercise 5, show the series step $K(k)\simeq(\pi/2)(1+k^2/4)$ with $k\simeq\theta_0/2$ instead of only "expanding to second order".
- [Structure] State the damping convention $\mechanical{\ddot x}+2\signal{\gamma}\mechanical{\dot x}+\signal{\omega}_0^2\mechanical{x}=\dots$ once at the top, since exercises 4, 8, 9, 11, and 13 depend on it.

### N1069

Note: [[15.05 Solutions for Particle Systems, Collisions, and Momentum|15.05 Solutions for Particle Systems, Collisions, and Momentum]]  
Priority: low · Graph: no · Manim: no

Correct, clear solutions; only a notational ambiguity and the unexplained elastic formulas stand out.

- [Structure] In exercise 11, $e^{2n}$ reads like the exponential function; write $(e^2)^n$ or rename the restitution coefficient (e.g. $\varepsilon_r$).
- [Simplify] In exercise 2, add where the elastic formulas come from (momentum conservation plus reversal of relative velocity, $\mechanical{v}'_2-\mechanical{v}'_1=\mechanical{v}_1$), since exercise 13 reuses them.
- [Intuition] In exercise 5, add the geometric picture: the three momenta form a right triangle by Pythagoras.

### N1070

Note: [[15.06 Solutions for Gravitation and Motion Under Central Forces|15.06 Solutions for Gravitation and Motion Under Central Forces]]  
Priority: low · Graph: yes · Manim: yes

Correct numerics throughout (binding energy, escape speed, geostationary radius, Hohmann transfer); the Hohmann solution skips the intermediate formulas.

- [Simplify] In exercise 11, write the formulas used: $\mechanical{v}_p=\mechanical{v}_1\sqrt{2\mechanical{r}_2/(\mechanical{r}_1+\mechanical{r}_2)}$, $\mechanical{v}_a=\mechanical{v}_2\sqrt{2\mechanical{r}_1/(\mechanical{r}_1+\mechanical{r}_2)}\simeq\quantity{21.48}{km\,s^{-1}}$, and $t_H=\tfrac12(\mechanical{a}/\quantity{1}{au})^{3/2}\,\unit{yr}$.
- [Graph] Plot the Earth and Mars circular orbits with the Hohmann half-ellipse ($\mechanical{a}=1.262$ au, $e\simeq0.208$) and the two burn points.
- [Manim] Animate a spacecraft leaving Earth at the transfer perihelion and arriving at aphelion as Mars arrives, showing why departure requires Mars to lead Earth by about $44^\circ$.
- [Structure] Exercise 9 is titled "Bertrand's theorem" but proves only closure of Kepler orbits; retitle or add the apsidal-angle argument briefly.

### N1071

Note: [[15.07 Solutions for Rigid Bodies|15.07 Solutions for Rigid Bodies]]  
Priority: low · Graph: no · Manim: yes

Correct solutions (free-rod impact, intermediate-axis instability, Chandler period all check out); a few derivations are compressed.

- [Simplify] In exercise 7, add the effective-mass shortcut: the rod end acts like a point mass $\mechanical{M}/4$ because $1/\mechanical{M}_{\mathrm{eff}}=1/\mechanical{M}+(\mechanical{L}/2)^2/(\mechanical{M}\mechanical{L}^2/12)$, which makes $\mechanical{v}'=(4\mechanical{m}-\mechanical{M})\mechanical{v}_0/(4\mechanical{m}+\mechanical{M})$ immediate.
- [Manim] For exercise 9, animate a T-handle spinning about its smallest, intermediate, and largest principal axes, with the intermediate case flipping periodically (Dzhanibekov effect).
- [Intuition] In exercise 11, explain the ranking: the fraction of energy in rotation is $\beta/(1+\beta)$, largest for the ring.
- [Simplify] In exercise 9, state the ordering assumption ($\mechanical{I}_1<\mechanical{I}_2<\mechanical{I}_3$ or reversed) next to $k$ so the sign claim is self-contained.

### N1072

Note: [[15.08 Solutions for Fundamentals of Fluid Mechanics|15.08 Solutions for Fundamentals of Fluid Mechanics]]  
Priority: low · Graph: no · Manim: no

Correct and concise; one input value is missing and the Boltzmann-constant notation differs from the constants appendix.

- [Structure] In exercise 6, state the molecular mass used ($\mechanical{m}\simeq29\,\mathrm{u}\simeq\quantity{4.8\times10^{-26}}{kg}$ for air) so $\mechanical{H}\simeq\quantity{7990}{m}$ can be reproduced.
- [Structure] $k_B$ is uncolored here but written $\thermal{k}_B$ in 17.01; align the macro usage.
- [Intuition] In exercise 13, add the check that the draining time is twice the time needed at the constant initial outflow rate.

### N1073

Note: [[15.09 Solutions for Constraints, Virtual Work, and d’Alembert’s Principle|15.09 Solutions for Constraints, Virtual Work, and d’Alembert’s Principle]]  
Priority: low · Graph: no · Manim: no

Correct and clear; the nonholonomic argument and two dynamics answers could show slightly more reasoning.

- [Simplify] In exercise 3, show why the sphere constraint is nonintegrable: rolling the sphere around a closed loop returns the center to its start but changes the orientation, so no position-only relation can encode the constraint.
- [Example] In exercise 9, show the step $\mechanical{g}\cos\theta=2\mechanical{g}(1-\cos\theta)\Rightarrow\cos\theta=2/3$ and note the independence from $\mechanical{m}$ and $\mechanical{R}$.
- [Intuition] In exercise 10, use energy conservation for release from rest at $\theta_0$ to get $\mechanical{T}=\mechanical{m}\mechanical{g}(3\cos\theta-2\cos\theta_0)$, which shows rather than asserts that the tension peaks at the lowest point.

### N1074

Note: [[15.10 Solutions for Euler–Lagrange Equations|15.10 Solutions for Euler–Lagrange Equations]]  
Priority: low · Graph: yes · Manim: yes

Correct Lagrangians and equations; the kinetic-energy symbol is inconsistent and the rotating-hoop bifurcation deserves a figure.

- [Structure] Kinetic energy is $\energy{T}$ in most exercises but $\energy{K}$ in exercise 13 (and in other chapters); use one symbol.
- [Graph] For exercise 10, plot the equilibrium angles against $\mechanical{\omega}^2\mechanical{R}/\mechanical{g}\in[0,4]$: $\theta=0$ solid up to 1 and dashed beyond, plus the branches $\theta=\pm\arccos(\mechanical{g}/(\mechanical{R}\mechanical{\omega}^2))$, as a pitchfork diagram.
- [Manim] Animate the bead on the rotating hoop while $\mechanical{\omega}$ slowly increases through $\sqrt{\mechanical{g}/\mechanical{R}}$, showing the bead leaving the bottom and settling at the off-axis equilibrium.
- [Simplify] In exercise 3, also give the equation $\ddot\theta=\mechanical{\omega}^2\sin\theta\cos\theta-(\mechanical{g}/\mechanical{\ell})\sin\theta$ and note it is the same physics as exercise 10.

### N1075

Note: [[15.11 Solutions for Hamilton's Principle and Symmetries|15.11 Solutions for Hamilton's Principle and Symmetries]]  
Priority: low · Graph: no · Manim: no

Correct Noether-type solutions; the Galilean-boost and quadratic-Lagrangian arguments are too compressed.

- [Simplify] In exercise 6, show the Noether step $Q=\mechanical{\vec p}\cdot\mechanical{\vec V}t-\mechanical{m}\mechanical{\vec r}\cdot\mechanical{\vec V}=-\mechanical{\vec V}\cdot(\mechanical{m}\mechanical{\vec r}-\mechanical{\vec P}t)$, which explains the "equivalent choice of sign".
- [Simplify] Rewrite exercise 12 in the standard form: isotropy gives $\energy{L}=\energy{L}(\mechanical{v}^2)$; a small boost changes it by $2(\partial\energy{L}/\partial\mechanical{v}^2)\mechanical{\vec v}\cdot\delta\mechanical{\vec V}$, which is a total time derivative only if $\partial\energy{L}/\partial\mechanical{v}^2$ is constant.
- [Intuition] In exercise 11, interpret $\energy{h}$ as the energy in the rotating frame including the centrifugal potential $-\tfrac12\mechanical{m}\mechanical{r}^2\mechanical{\omega}^2$; it differs from the kinetic energy because the rail does work on the bead.

### N1076

Note: [[15.12 Solutions for the Hamiltonian Formulation|15.12 Solutions for the Hamiltonian Formulation]]  
Priority: low · Graph: yes · Manim: no

Correct and compact; the phase-space statements would benefit from one portrait.

- [Graph] For exercises 7 and 13, plot oscillator ellipses in $(q,p)$ for three energies next to the corresponding circles in $(q,u)$, with arrows showing the clockwise flow.
- [Simplify] In exercise 3, show the bracket computation with $\mechanical{L}_x=\mechanical{y}\mechanical{p}_z-\mechanical{z}\mechanical{p}_y$ and $\mechanical{L}_y=\mechanical{z}\mechanical{p}_x-\mechanical{x}\mechanical{p}_z$ rather than only the result.
- [Structure] In exercise 10, state the assumption $\partial f/\partial t=\partial g/\partial t=0$ before the first argument, then give the time-dependent generalization.

### N1077

Note: [[15.13 Solutions for Canonical Transformations|15.13 Solutions for Canonical Transformations]]  
Priority: low · Graph: no · Manim: no

Correct solutions (actions, Kepler energy, complex oscillator variables all check); a few answers are pointers rather than solutions.

- [Example] Exercise 9 only points elsewhere; add at least the separated radial equation $(\energy{W}_r')^2+\mechanical{L}^2/\mechanical{r}^2=2\mechanical{\mu}(\energy{E}+\alpha/\mechanical{r})$.
- [Simplify] In exercise 8, add the next term $J\simeq\energy{E}/\signal{\omega}_0+\energy{E}^2/(16\mechanical{m}\mechanical{g}\mechanical{\ell}\signal{\omega}_0)$, which reproduces the $\theta_0^2/16$ period correction used in 15.04 and 15.14.
- [Structure] The table gives $\alpha$ both as a rotation angle and as the Kepler strength (J m) with unit "—"; use different symbols or list both units.

### N1078

Note: [[15.14 Solutions for Small Oscillations and Normal Modes|15.14 Solutions for Small Oscillations and Normal Modes]]  
Priority: low · Graph: yes · Manim: no

Correct solutions (double-pendulum matrices, diatomic dispersion, Feigenbaum values verified); a couple of figures would help.

- [Graph] For exercise 11, plot both branches $\signal{\omega}(\signal{q})$ for $\mechanical{M}/\mechanical{m}=2$ over $\signal{q}\mechanical{a}\in[0,\pi/2]$, marking the gap between $\sqrt{2\mechanical{k}/\mechanical{M}}$ and $\sqrt{2\mechanical{k}/\mechanical{m}}$ at the zone edge.
- [Example] In exercise 13, give the two spacing ratios numerically ($\approx4.75$ and $\approx4.66$) and reuse the logistic bifurcation diagram suggested for 14.07.
- [Example] In exercise 3, show where the matrices come from: $\energy{T}=\tfrac12\mechanical{m}\mechanical{\ell}^2(2\dot\theta_1^2+2\dot\theta_1\dot\theta_2+\dot\theta_2^2)$ and $\energy{U}\simeq\tfrac12\mechanical{m}\mechanical{g}\mechanical{\ell}(2\theta_1^2+\theta_2^2)$ up to a constant.
