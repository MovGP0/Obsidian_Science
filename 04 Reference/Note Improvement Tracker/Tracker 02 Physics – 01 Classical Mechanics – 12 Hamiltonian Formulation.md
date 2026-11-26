---
title: "Note Improvement Tracker – 02 Physics/01 Classical Mechanics/12 Hamiltonian Formulation"
---

> [!TLDR]
> This note tracks the review of the 15 notes in `02 Physics/01 Classical Mechanics/12 Hamiltonian Formulation`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 2 possible errors or notation conflicts. 2 of them are verified (2 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N1024|N1024]] 12.08 Worked Examples of Hamiltonian Problems: Macro inconsistency: $p_\phi$ appears uncolored in the polar Hamiltonian while $\mechanical{p}_\rho$ and $\mechanical{p}_z$ use \mechanical{}; apply the macro consistently (the same issue appears in 12.11, 12.13 and 13.09). **Fixed:** All p_\phi occurrences (Hamiltonian, text, note, table) now \mechanical{p}_\phi
- [[#N1027|N1027]] 12.11 Applications of Hamiltonian Mechanics: Macro inconsistency: $p_\phi$ and $p_\theta$ are uncolored while $\mechanical{p}_r$ uses \mechanical{}; apply the macro consistently. **Fixed:** All p_\phi, p_\theta and \dot p_\theta now \mechanical{p}_\phi, \mechanical{p}_\theta, \mechanical{\dot p}_\theta (equations, text, table)

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N1016 | [[12.00 Hamiltonian Formulation\|12.00 Hamiltonian Formulation]] | Analyzed | low | no | no | [[#N1016\|View]] |
| N1017 | [[12.01 History of Hamiltonian Mechanics\|12.01 History of Hamiltonian Mechanics]] | Analyzed | low | no | no | [[#N1017\|View]] |
| N1018 | [[12.02 Legendre Transformation\|12.02 Legendre Transformation]] | Analyzed | high | yes | yes | [[#N1018\|View]] |
| N1019 | [[12.03 Canonical Variables and Hamilton's Equations\|12.03 Canonical Variables and Hamilton's Equations]] | Analyzed | medium | yes | no | [[#N1019\|View]] |
| N1020 | [[12.04 Energy and the Hamiltonian\|12.04 Energy and the Hamiltonian]] | Analyzed | medium | no | no | [[#N1020\|View]] |
| N1021 | [[12.05 Phase Space\|12.05 Phase Space]] | Analyzed | medium | yes | yes | [[#N1021\|View]] |
| N1022 | [[12.06 Poisson Brackets\|12.06 Poisson Brackets]] | Analyzed | medium | no | no | [[#N1022\|View]] |
| N1023 | [[12.07 Liouville's Theorem\|12.07 Liouville's Theorem]] | Analyzed | medium | yes | yes | [[#N1023\|View]] |
| N1024 | [[12.08 Worked Examples of Hamiltonian Problems\|12.08 Worked Examples of Hamiltonian Problems]] | Analyzed | high | yes | yes | [[#N1024\|View]] |
| N1025 | [[12.09 Integrable Systems and the Liouville–Arnold Theorem\|12.09 Integrable Systems and the Liouville–Arnold Theorem]] | Analyzed | high | yes | yes | [[#N1025\|View]] |
| N1026 | [[12.10 Phase Space and Hamiltonian Flow\|12.10 Phase Space and Hamiltonian Flow]] | Analyzed | medium | no | yes | [[#N1026\|View]] |
| N1027 | [[12.11 Applications of Hamiltonian Mechanics\|12.11 Applications of Hamiltonian Mechanics]] | Analyzed | medium | yes | yes | [[#N1027\|View]] |
| N1028 | [[12.12 Transformation Between the Lagrangian and Hamiltonian Formulations\|12.12 Transformation Between the Lagrangian and Hamiltonian Formulations]] | Analyzed | low | no | no | [[#N1028\|View]] |
| N1029 | [[12.13 Examples of Hamiltonian Flow\|12.13 Examples of Hamiltonian Flow]] | Analyzed | high | yes | yes | [[#N1029\|View]] |
| N1030 | [[12.14 Hamiltonian Formulation Exercises\|12.14 Hamiltonian Formulation Exercises]] | Analyzed | low | no | no | [[#N1030\|View]] |

## Suggestions

### N1016

Note: [[12.00 Hamiltonian Formulation|12.00 Hamiltonian Formulation]]  
Priority: low · Graph: no · Manim: no

A clear chapter hub with an accurate summary.

- [Links] Link each summary bullet to its section note (12.02 Legendre, 12.03 Hamilton's equations, 12.05 Phase space, 12.06 Poisson brackets, 12.07 Liouville) so the hub works as navigation.

### N1017

Note: [[12.01 History of Hamiltonian Mechanics|12.01 History of Hamiltonian Mechanics]]  
Priority: low · Graph: no · Manim: no

A concise historical overview; it is adequate for its purpose.

- [Intuition] Add one sentence on the optical–mechanical analogy that motivated Hamilton (rays as normals to wavefronts, like trajectories normal to surfaces $\energy{S}=$ const), with a link to \[\[13.12 WKB Approximation\]\], which completes this idea.

### N1018

Note: [[12.02 Legendre Transformation|12.02 Legendre Transformation]]  
Priority: high · Graph: yes · Manim: yes

Mathematically correct but abstract; the geometric meaning of the transform and the reason mechanics needs it are missing.

- [Intuition] Explain the geometry: $g(p)$ is minus the $y$-intercept of the tangent line of slope $p$ to $f$, so the function is described by its family of tangent lines instead of its points, and no information is lost.
- [Example] Give a one-variable example before mechanics: $f(x)=\tfrac12ax^2$ gives $g(p)=p^2/(2a)$. Then map it directly to $\energy{L}=\tfrac12\mechanical{m}\dot q^2\to\energy{H}=p^2/(2\mechanical{m})$.
- [Simplify] Say why mechanics needs the transform: we want $p$ as an independent variable, but simply substituting $\dot q(p)$ into $\energy{L}$ would lose information. The $p\dot q$ term is exactly the correction needed. Also mention thermodynamics ($U\to F=U-TS$) as a familiar parallel.
- [Graph] 2D plot of $f(x)=x^2/2$ on $x\in[-2,2]$ with tangent lines for slopes $p=-1,0.5,1.5$, marking the intercept $-g(p)$ on the vertical axis; optionally a second panel with $g(p)$.
- [Manim] Slide a tangent line along the convex curve $f(x)$ while a point traces $(p,g(p))$ in a second axes, showing how the slope–intercept data build the transformed function.

### N1019

Note: [[12.03 Canonical Variables and Hamilton's Equations|12.03 Canonical Variables and Hamilton's Equations]]  
Priority: medium · Graph: yes · Manim: no

A clean, correct derivation with good examples, but no physical reading of the two equations and $\signal{\omega}$ is never defined.

- [Simplify] In the oscillator example, define $\signal{\omega}=\sqrt{\mechanical{k}/\mechanical{m}}$ explicitly before $\ddot q=-\signal{\omega}^2q$.
- [Intuition] Interpret the equations: $\dot q=\partial\energy{H}/\partial p$ recovers the velocity–momentum relation, and $\dot p=-\partial\energy{H}/\partial q$ is "force equals minus the slope of the energy landscape". Note that one second-order equation becomes two first-order equations.
- [Simplify] In the derivation, show the cancellation of the $d\dot q_k$ terms explicitly: $d(p_k\dot q_k)=\dot q_k\,dp_k+p_k\,d\dot q_k$ and $-(\partial\energy{L}/\partial\dot q_k)\,d\dot q_k$.
- [Graph] A quiver or vector-field plot of $(\dot q,\dot p)=(p/\mechanical{m},-\mechanical{k}q)$ on $q,p\in[-2,2]$ with $\mechanical{m}=\mechanical{k}=1$ and one elliptical trajectory overlaid, showing that Hamilton's equations define a velocity field on phase space.

### N1020

Note: [[12.04 Energy and the Hamiltonian|12.04 Energy and the Hamiltonian]]  
Priority: medium · Graph: no · Manim: no

Correct, but it repeats 11.10 without an example and leaves the reader to see the cancellation in the conservation proof.

- [Simplify] In the $d\energy{H}/dt$ equation, insert Hamilton's equations explicitly to show $\frac{\partial\energy{H}}{\partial q_k}\frac{\partial\energy{H}}{\partial p_k}-\frac{\partial\energy{H}}{\partial p_k}\frac{\partial\energy{H}}{\partial q_k}=0$ before concluding.
- [Example] Add the rotating-rail bead (conserved $\energy{H}\ne\energy{E}$) and a charged particle in a static magnetic field ($\energy{H}=\energy{E}$ although $\energy{L}$ is velocity dependent), and make the 2×2 distinction explicit: conserved or not, and equal to energy or not.
- [Links] Link to \[\[11.10 Energy Function and Jacobi Function\]\], which contains the same statement in Lagrangian variables.

### N1021

Note: [[12.05 Phase Space|12.05 Phase Space]]  
Priority: medium · Graph: yes · Manim: yes

Clear and correct, with a good figure, but the explanation of the clockwise direction and of why trajectories cannot cross is minimal.

- [Intuition] Explain the clockwise direction: on the upper half ($p>0$), $\dot q=p/\mechanical{m}>0$, so the point moves right. Explain non-crossing: a crossing point would have two different futures.
- [Graph] Replace or supplement the static SVG with a native Obsidian Graphs plot: ellipses $p^2/2+q^2/2=E$ for $E=0.5,1,2$ with $\mechanical{m}=\mechanical{k}=1$, plus direction arrows; optionally add a damped spiral for contrast, to show what non-Hamiltonian flow looks like.
- [Manim] Animate a point moving clockwise around the phase ellipse while a mass on a spring oscillates beside it, with $q$ linked horizontally and $p$ shown as a velocity arrow, so the reader sees phase-space motion as a picture of the physical motion.
- [Example] Add a second phase portrait for a free particle (horizontal lines $p=$ const) or a particle in a uniform field (parabolas), to show that phase space is not only ellipses.

### N1022

Note: [[12.06 Poisson Brackets|12.06 Poisson Brackets]]  
Priority: medium · Graph: no · Manim: no

Correct and well organized, but the time-evolution formula is stated without derivation and there is no worked bracket computation.

- [Simplify] Derive $df/dt=\{f,\energy{H}\}+\partial f/\partial t$ in one line: apply the chain rule and substitute Hamilton's equations.
- [Example] Work one bracket fully, for example $\{\mechanical{L}_x,\mechanical{L}_y\}$ using the Leibniz rule and $\{q_k,p_l\}=\delta_{kl}$, or show $\{q,\energy{H}\}=p/\mechanical{m}$ for the oscillator. This makes the abstract definition concrete.
- [Intuition] Explain in words that $\{f,g\}$ measures how much $f$ changes along the flow generated by $g$. Then $\{f,\energy{H}\}=0$ means "$f$ does not change as time runs", which explains the constants-of-motion statement.

### N1023

Note: [[12.07 Liouville's Theorem|12.07 Liouville's Theorem]]  
Priority: medium · Graph: yes · Manim: yes

The proof is correct but compressed; the info box about Poisson brackets is off-topic, and the theorem lacks a visual demonstration.

- [Structure] The "Analytical mechanics" callout on Poisson brackets and commutators does not belong in a Liouville note; it duplicates 12.06. Move it to 12.06, or replace it with a note on the quantum analogue of Liouville's theorem (unitary evolution of the density matrix).
- [Simplify] Make the proof step explicit: the rate of change of volume is $dV/dt=\int_{R(t)}\nabla\cdot\vec X_H\,dV$ (Reynolds transport theorem). This is the step behind "by the divergence theorem".
- [Intuition] Contrast with damping: for $\dot p=-\gamma p-\mechanical{k}q$ the divergence is $-\gamma$, and phase areas shrink like $e^{-\gamma t}$. This shows what the theorem rules out.
- [Graph] Plot an initial disk of points in the pendulum phase plane and its images at several times (filamented but equal area), or for the oscillator a disk that rotates rigidly.
- [Manim] Evolve a small square blob of phase points under the pendulum flow: it shears and stretches into a thin filament, while an on-screen area counter stays constant. Optionally add a damped-oscillator blob shrinking beside it.

### N1024

Note: [[12.08 Worked Examples of Hamiltonian Problems|12.08 Worked Examples of Hamiltonian Problems]]  
Priority: high · Graph: yes · Manim: yes

The algebra is correct, but the magnetic and crossed-field examples stop before solving anything, and the square-well section is thin.

- [Example] Finish the magnetic example: write Hamilton's equations in Cartesian form, show $\mechanical{\ddot x}=\signal{\omega}_c\mechanical{\dot y}$ and $\mechanical{\ddot y}=-\signal{\omega}_c\mechanical{\dot x}$, and solve for the circle with Larmor radius $r_L=\mechanical{m}v_\perp/(\lvert\electric{q}\rvert\magnetic{B})$. Point out that canonical $\mechanical{p}_x$ differs from kinetic $\mechanical{m}\mechanical{\dot x}$.
- [Example] For crossed fields, derive the drift: choose a frame moving at $\mechanical{\vec v}_d$, where the electric field vanishes. Note the condition $\lvert\electric{\vec E}\rvert<c\magnetic{B}$.
- [Correctness] Macro inconsistency: $p_\phi$ appears uncolored in the polar Hamiltonian while $\mechanical{p}_\rho$ and $\mechanical{p}_z$ use \mechanical{}; apply the macro consistently (the same issue appears in 12.11, 12.13 and 13.09).
- [Graph] Phase portrait of the square well: horizontal segments $p=\pm\sqrt{2\mechanical{m}(\energy{E}+\energy{V}_0)}$ inside $\lvert x\rvert<\mechanical{L}$, connected by vertical jumps at the walls, for a few energies.
- [Manim] Animate a charged particle in crossed $\electric{\vec E}$ and $\magnetic{\vec B}$ fields tracing a cycloid-like path, with the guiding center moving at $\mechanical{\vec v}_d$. Then switch $\electric{\vec E}$ off to show the pure cyclotron circle.

### N1025

Note: [[12.09 Integrable Systems and the Liouville–Arnold Theorem|12.09 Integrable Systems and the Liouville–Arnold Theorem]]  
Priority: high · Graph: yes · Manim: yes

An abstract statement of a deep theorem with no explanation of why tori arise; the KAM link points to the wrong note.

- [Links] The KAM reference points to \[\[14.00 Small Oscillations and Normal Modes\]\], a hub. Point it to \[\[14.07 Overview of Nonlinear Systems and Chaos\]\] or to \[\[13.14 Hamilton–Jacobi Theory for Nonseparable Systems\]\], where KAM is discussed.
- [Intuition] Explain why the level set is a torus: $n$ conserved quantities confine the motion to an $n$-dimensional surface in $2n$-dimensional phase space, and the $n$ commuting flows generated by the $f_i$ give $n$ independent periodic directions.
- [Example] Work the 2D anisotropic oscillator: $f_1=\energy{H}_x$ and $f_2=\energy{H}_y$ give a product of two circles $S^1\times S^1=\mathbb T^2$, with the explicit angles $\theta_{x,y}=\signal{\omega}_{x,y}t+\theta_0$.
- [Graph] 3D plot of a torus with a winding line for frequency ratios $\signal{\omega}_2/\signal{\omega}_1=2/3$ (closed) and $\sqrt2$ (dense), parameter $t\in[0,60]$.
- [Manim] Animate a trajectory winding on a torus in 3D for an irrational frequency ratio, gradually covering the surface. Then cut the torus open into the flat square $[0,2\pi)^2$, where the motion becomes straight lines.

### N1026

Note: [[12.10 Phase Space and Hamiltonian Flow|12.10 Phase Space and Hamiltonian Flow]]  
Priority: medium · Graph: no · Manim: yes

Correct and careful, but very abstract; it is a list of properties with no example of a concrete flow map.

- [Example] Give the oscillator flow explicitly: in scaled variables $(q,p/(\mechanical{m}\signal{\omega}))$, $\Phi^t$ is a rotation by angle $\signal{\omega}t$. Check $\det=1$ and the group property directly.
- [Intuition] Explain the symplectic form as an oriented area: for $n=1$, $\omega$ is the signed area in the $(q,p)$ plane. For $n>1$, the flow preserves the sum of the projected areas onto each $(q_k,p_k)$ plane, which is stronger than volume preservation.
- [Simplify] The source-formula callout is subtle; give a one-line concrete example instead of an abstract warning.
- [Manim] Show a grid of phase points carried by the pendulum flow $\Phi^t$ for several times, demonstrating $\Phi^{t+s}=\Phi^t\circ\Phi^s$ by running two short steps and one long step side by side.

### N1027

Note: [[12.11 Applications of Hamiltonian Mechanics|12.11 Applications of Hamiltonian Mechanics]]  
Priority: medium · Graph: yes · Manim: yes

Correct and concise, but the effective potential and pendulum phase portrait cry out for figures, and the central-force derivation of $\dot p_r$ is skipped.

- [Simplify] Show $\mechanical{\dot p}_r=-\partial\energy{H}/\partial\mechanical{r}=p_\phi^2/(\mechanical{m}\mechanical{r}^3)-\energy{U}'(\mechanical{r})$ before introducing $\energy{U}_{\mathrm{eff}}$, and interpret the first term as the centrifugal barrier.
- [Graph] Plot $\energy{U}_{\mathrm{eff}}(\mechanical{r})=-1/\mechanical{r}+\mechanical{L}_z^2/(2\mechanical{r}^2)$ for $\mechanical{L}_z=0.7,1,1.4$ ($\mechanical{m}=1$) on $\mechanical{r}\in[0.2,6]$, with horizontal energy lines marking the turning points of bound and unbound orbits.
- [Graph] Plot the pendulum phase portrait: contours $p_\theta^2/2-\cos\theta=E$ for $E\in\{-0.8,-0.3,0.5,1,1.5\}$, $\theta\in[-2\pi,2\pi]$, with the separatrix $E=1$ highlighted.
- [Manim] Animate a pendulum swinging at increasing energies, each linked to a moving point on the $(\theta,p_\theta)$ portrait: closed loops become the separatrix and then open rotating curves.
- [Correctness] Macro inconsistency: $p_\phi$ and $p_\theta$ are uncolored while $\mechanical{p}_r$ uses \mechanical{}; apply the macro consistently.

### N1028

Note: [[12.12 Transformation Between the Lagrangian and Hamiltonian Formulations|12.12 Transformation Between the Lagrangian and Hamiltonian Formulations]]  
Priority: low · Graph: no · Manim: no

A clear comparison note; it overlaps 12.02 but serves as a summary.

- [Example] Add a degenerate case where the inversion fails, for example $\energy{L}$ linear in $\dot q$ ($\energy{L}=\dot q\,f(q)-\energy{U}(q)$), to show why "when the momentum equations are invertible" matters (constrained Hamiltonian systems, Dirac).
- [Links] Link to \[\[12.02 Legendre Transformation\]\] and \[\[12.03 Canonical Variables and Hamilton's Equations\]\] instead of repeating the definitions.

### N1029

Note: [[12.13 Examples of Hamiltonian Flow|12.13 Examples of Hamiltonian Flow]]  
Priority: high · Graph: yes · Manim: yes

Its content is visual by nature but there is no figure; the Kepler part uses $\energy{U}_{\mathrm{eff}}$ without defining it.

- [Graph] Add the pendulum phase portrait: contours of $\energy{H}=p_\theta^2/(2\mechanical{m}\mechanical{\ell}^2)-\mechanical{m}\mechanical{g}\mechanical{\ell}\cos\theta$ with $\mechanical{m}=\mechanical{\ell}=\mechanical{g}=1$, $\theta\in[-\pi,\pi]$ (or $[-2\pi,2\pi]$), $p_\theta\in[-3,3]$, with the separatrix $\energy{E}=1$ drawn bold.
- [Graph] Plot the period $\signal{T}(\energy{E})/\signal{T}_0=(2/\pi)K(k)$ with $k^2=(\energy{E}+\mechanical{m}\mechanical{g}\mechanical{\ell})/(2\mechanical{m}\mechanical{g}\mechanical{\ell})$ on $k\in[0,0.999]$, showing the logarithmic divergence at the separatrix.
- [Simplify] Define $\energy{U}_{\mathrm{eff}}(\mechanical{r})=-\alpha/\mechanical{r}+\mechanical{L}^2/(2\mechanical{\mu}\mechanical{r}^2)$ in the Kepler section, and add a reduced phase portrait $(\mechanical{r},\mechanical{p}_r)$ with closed curves for $\energy{E}<0$ and open curves for $\energy{E}\ge0$.
- [Manim] Animate an ensemble of pendulum phase points starting on a line $p_\theta=0$, $\theta\in(0,\pi)$: inner points circulate quickly, while points near the separatrix lag behind and get stuck near $\theta=\pm\pi$. This shows the energy-dependent period.

### N1030

Note: [[12.14 Hamiltonian Formulation Exercises|12.14 Hamiltonian Formulation Exercises]]  
Priority: low · Graph: no · Manim: no

A good, correct exercise set with useful results.

- [Structure] Group the exercises by difficulty: Intermediate exercises 11–13 come after the Challenge exercises 9–10, and exercise 14 is Challenge-labelled but trivial. Relabel exercise 14 as Basic.
