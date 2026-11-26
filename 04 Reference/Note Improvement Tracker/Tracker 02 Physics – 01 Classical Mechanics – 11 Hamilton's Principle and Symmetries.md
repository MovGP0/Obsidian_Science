---
title: "Note Improvement Tracker – 02 Physics/01 Classical Mechanics/11 Hamilton's Principle and Symmetries"
---

> [!TLDR]
> This note tracks the review of the 17 notes in `02 Physics/01 Classical Mechanics/11 Hamilton's Principle and Symmetries`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 7 possible errors or notation conflicts. 7 of them are verified (6 fixed, 1 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N1001|N1001]] 11.02 Action Functional: Notation is inconsistent: here $S$ is uncolored, while the hub 11.00 writes $\energy{S}$. Use one form across the chapter. **Fixed:** Changed S to \energy{S} in the definition and table row.
- [[#N1002|N1002]] 11.03 Detailed Example of the Brachistochrone: The travel time is written $T$, which clashes with kinetic energy $\energy{T}$ used throughout chapters 10–11. Rename it $t_{AB}$ or $\tau$, and use $\mathrm{d}\mechanical{x}$ consistently: the integral ends in uncolored $dx$. **Fixed:** Renamed travel time to t_{AB} in the integral and table, and changed dx to d\mechanical{x}; cycloid slope -cot(theta/2) rechecked and correct.
- [[#N1005|N1005]] 11.06 Symmetry Transformations: Time translation $t\to t+\varepsilon$ is not of the form $q\to q'(\varepsilon)$ used in Definition 11.2. Recast it as $q(t)\to q(t+\varepsilon)$, i.e. $\eta=\dot q$ with $\delta L=\varepsilon\,dL/dt$ ($f=L$) when $\partial L/\partial t=0$, so that it fits the definition. **Partly:** Right that it does not fit q->q'(epsilon) with f(q,t); but f=L depends on qdot, so it fits only infinitesimally; recast bullet as q(t)->q(t+epsilon), eta=qdot, delta L=epsilon dL/dt, f=L, with that caveat.
- [[#N1011|N1011]] 11.12 Limits of Analytical Mechanics: Macro inconsistency: the body uses an uncolored $\vec x$ in $\phi(\vec x,t)$, while the table lists $\mechanical{\vec x}$; choose one and use it in both places. **Fixed:** Changed \phi(\vec x,t) to \phi(\mechanical{\vec x},t) in the body.
- [[#N1012|N1012]] 11.13 Variations with Free Endpoints: Clarify the scope: the formula covers a free endpoint value $q(t_2)$ at a fixed time $t_2$. If the endpoint time also varies, an additional term $-[\energy{H}\,\delta t]$ appears. The opening sentence "variations can move the endpoints" suggests the general case. **Fixed:** Opening sentence now says the endpoint values q(t1), q(t2) vary while t1, t2 stay fixed
- [[#N1013|N1013]] 11.14 Representative Examples of Noether's Theorem: The table gives "—" as the unit of $T^{0i}$, and the body says "in the units used in this example". State the convention, for example $T^{0i}=c\times$ momentum density in $\unit{J\,m^{-3}}$, so the unit is defined. **Fixed:** Text now states SI convention T^{0i} = c x momentum density (J m^-3), momentum = integral of T^{0i}/c; table unit set to J m^-3 and row for c added
- [[#N1015|N1015]] Variational paths and the brachistochrone: The physical-quantities table is a copied generic table: it defines $\mechanical{c}$ both as a quadratic drag coefficient and as the speed of light, $\mechanical{k}$ three ways (linear drag rate, spring constant, polar integration constant), and $T$ as flight time. Remove the drag, flight-time, and rod entries, and use distinct symbols for the spring constant and the polar constant $\mechanical{k}$. **Fixed:** Removed quadratic-drag, linear-drag-rate and flight-time rows, rod removed from L row; renamed polar integration constant k to \mechanical{b} in the polar section and table; spring-constant row description narrowed

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N0999 | [[11.00 Hamilton's Principle and Symmetries\|11.00 Hamilton's Principle and Symmetries]] | Analyzed | low | no | no | [[#N0999\|View]] |
| N1000 | [[11.01 History of the Principle of Least Action\|11.01 History of the Principle of Least Action]] | Analyzed | low | yes | no | [[#N1000\|View]] |
| N1001 | [[11.02 Action Functional\|11.02 Action Functional]] | Analyzed | medium | yes | yes | [[#N1001\|View]] |
| N1002 | [[11.03 Detailed Example of the Brachistochrone\|11.03 Detailed Example of the Brachistochrone]] | Analyzed | high | yes | yes | [[#N1002\|View]] |
| N1003 | [[11.04 Stationary Action Principle\|11.04 Stationary Action Principle]] | Analyzed | medium | yes | no | [[#N1003\|View]] |
| N1004 | [[11.05 Variational Equations and Calculus of Variations\|11.05 Variational Equations and Calculus of Variations]] | Analyzed | medium | yes | no | [[#N1004\|View]] |
| N1005 | [[11.06 Symmetry Transformations\|11.06 Symmetry Transformations]] | Analyzed | medium | no | no | [[#N1005\|View]] |
| N1006 | [[11.07 Noether's Theorem\|11.07 Noether's Theorem]] | Analyzed | high | no | no | [[#N1006\|View]] |
| N1007 | [[11.08 Energy, Momentum, and Angular Momentum as Conserved Charges\|11.08 Energy, Momentum, and Angular Momentum as Conserved Charges]] | Analyzed | medium | no | no | [[#N1007\|View]] |
| N1008 | [[11.09 Equivalent Lagrangians from Symmetry\|11.09 Equivalent Lagrangians from Symmetry]] | Analyzed | medium | yes | no | [[#N1008\|View]] |
| N1009 | [[11.10 Energy Function and Jacobi Function\|11.10 Energy Function and Jacobi Function]] | Analyzed | medium | yes | yes | [[#N1009\|View]] |
| N1010 | [[11.11 Noether Charges for Discrete Symmetries\|11.11 Noether Charges for Discrete Symmetries]] | Analyzed | medium | no | no | [[#N1010\|View]] |
| N1011 | [[11.12 Limits of Analytical Mechanics\|11.12 Limits of Analytical Mechanics]] | Analyzed | medium | no | no | [[#N1011\|View]] |
| N1012 | [[11.13 Variations with Free Endpoints\|11.13 Variations with Free Endpoints]] | Analyzed | medium | yes | yes | [[#N1012\|View]] |
| N1013 | [[11.14 Representative Examples of Noether's Theorem\|11.14 Representative Examples of Noether's Theorem]] | Analyzed | medium | no | no | [[#N1013\|View]] |
| N1014 | [[11.15 Hamilton's Principle and Symmetries Exercises\|11.15 Hamilton's Principle and Symmetries Exercises]] | Analyzed | low | no | no | [[#N1014\|View]] |
| N1015 | [[Variational paths and the brachistochrone\|Variational paths and the brachistochrone]] | Analyzed | high | yes | yes | [[#N1015\|View]] |

## Suggestions

### N0999

Note: [[11.00 Hamilton's Principle and Symmetries|11.00 Hamilton's Principle and Symmetries]]  
Priority: low · Graph: no · Manim: no

A clear chapter hub with an accurate summary.

- [Links] Link each summary bullet to its note (11.02 action, 11.04 stationary action, 11.06 symmetry, 11.07 Noether, 11.08 conserved charges, 11.09 boosts), as the 09.00 and 10.00 hubs do.

### N1000

Note: [[11.01 History of the Principle of Least Action|11.01 History of the Principle of Least Action]]  
Priority: low · Graph: yes · Manim: no

An accurate, readable history; one visual would ground the optics analogy.

- [Graph] Add a 2D figure of Heron's reflection: source $A=(-1,1)$, observer $B=(1,1)$, mirror $y=0$. Plot path length $L(x)=\sqrt{(x+1)^2+1}+\sqrt{(1-x)^2+1}$ against the reflection point $x\in[-2,2]$, with its minimum at $x=0$ (equal angles).
- [Links] Cross-link 10.01 (overlapping history) and the Fermat/Snell derivation, if one exists in the optics notes.

### N1001

Note: [[11.02 Action Functional|11.02 Action Functional]]  
Priority: medium · Graph: yes · Manim: yes

The definition is correct but bare; it lacks a concrete evaluation of $S$ for different paths, which is what makes "functional" meaningful.

- [Example] Compute $S$ for a free particle or for a ball in gravity going from $(0,0)$ to $(T,0)$. Use the trial paths $x(t)=at(T-t)$ and show that $S(a)$ is a parabola in $a$, minimized at the physical value $a=g/2$.
- [Graph] Plot $S(a)$ against $a$ for that family ($m=1$, $g=9.8$, $T=1$). Optionally show the trial paths $x(t)$ for several $a$ in a second panel.
- [Manim] Animate a family of trial paths between fixed endpoints morphing continuously. A live readout shows $S$ decreasing to its minimum at the true parabola.
- [Correctness] Notation is inconsistent: here $S$ is uncolored, while the hub 11.00 writes $\energy{S}$. Use one form across the chapter.

### N1002

Note: [[11.03 Detailed Example of the Brachistochrone|11.03 Detailed Example of the Brachistochrone]]  
Priority: high · Graph: yes · Manim: yes

The cycloid result and slope parametrization are correct, but the key step from Beltrami to the cycloid is skipped, and the brachistochrone is the classic case where a visual comparison of paths teaches the most.

- [Simplify] Show the Beltrami step explicitly. With depth $h=y_A-y$, $F=\sqrt{1+h'^2}/\sqrt{2gh}$ gives $h(1+h'^2)=2R$ (constant). Then substitute $h=R(1-\cos\theta)$ to recover the parametric cycloid.
- [Correctness] The travel time is written $T$, which clashes with kinetic energy $\energy{T}$ used throughout chapters 10–11. Rename it $t_{AB}$ or $\tau$, and use $\mathrm{d}\mechanical{x}$ consistently: the integral ends in uncolored $dx$.
- [Graph] Plot the straight line, a circular arc and the cycloid from $A=(0,0)$ to $B=(\pi R,-2R)$ with $R=1$. Annotate each with its numerically computed descent time.
- [Manim] Animate three beads released together on a straight ramp, a circular arc and a cycloid between the same endpoints. The cycloid bead arrives first. Then show the tautochrone: beads released at different heights on the cycloid arrive at the bottom simultaneously.
- [Structure] The section "Fixed endpoints and the choice of coordinate" is abstract. Either give the depth-as-independent-variable calculation explicitly or shorten it to one sentence with the link.

### N1003

Note: [[11.04 Stationary Action Principle|11.04 Stationary Action Principle]]  
Priority: medium · Graph: yes · Manim: no

A clean, correct derivation; it lacks intuition for "stationary" and an example of a path that is a saddle rather than a minimum.

- [Intuition] Explain the fundamental lemma in words: if $\int g(t)\delta q(t)dt=0$ for every bump $\delta q$ vanishing at the ends, then $g\equiv0$. A bump localized where $g\ne0$ would give a nonzero integral.
- [Example] Illustrate "minimum only for short intervals" with the harmonic oscillator. For $T<\pi/\omega$ the action is a true minimum. Beyond half a period it becomes a saddle, because the variation $\delta x=\epsilon\sin(\pi t/T)$ gives $\delta^2S\propto(\pi^2/T^2-\omega^2)$.
- [Graph] Plot $\delta^2S/\epsilon^2=\tfrac{mT}{4}(\pi^2/T^2-\omega^2)$ against $T\omega\in[0,2\pi]$. The sign change at $T=\pi/\omega$ shows where "least" fails.

### N1004

Note: [[11.05 Variational Equations and Calculus of Variations|11.05 Variational Equations and Calculus of Variations]]  
Priority: medium · Graph: yes · Manim: no

Correct but extremely brief; it names geodesics and minimal surfaces without solving even the simplest one.

- [Example] Work the shortest path in the plane: $F=\sqrt{1+y'^2}$ gives $y'=$ const, a straight line. Optionally add the Beltrami identity for $F$ without explicit $x$, linking 11.03.
- [Graph] Plot the straight line between $(0,0)$ and $(1,1)$ against perturbed curves $y=x+\epsilon\sin(\pi x)$ for $\epsilon=\pm0.2$, with their arc lengths annotated.
- [Links] Link 11.03 (brachistochrone) and the math notes on calculus of variations ("Variational modeling of paths and surfaces").

### N1005

Note: [[11.06 Symmetry Transformations|11.06 Symmetry Transformations]]  
Priority: medium · Graph: no · Manim: no

The definition is correct, but the examples are restatements ("symmetry when L is invariant") rather than checks, and the time-translation example does not fit the $q\to q'$ definition.

- [Example] Replace the circular examples with explicit checks. For two particles with $U(|\vec r_1-\vec r_2|)$, the shift $\vec r_i\to\vec r_i+\varepsilon\hat n$ leaves both $T$ and $U$ unchanged. For a rotation, $|\vec v|$ and $|\vec r_1-\vec r_2|$ are invariant.
- [Correctness] Time translation $t\to t+\varepsilon$ is not of the form $q\to q'(\varepsilon)$ used in Definition 11.2. Recast it as $q(t)\to q(t+\varepsilon)$, i.e. $\eta=\dot q$ with $\delta L=\varepsilon\,dL/dt$ ($f=L$) when $\partial L/\partial t=0$, so that it fits the definition.
- [Example] Add a non-example: the uniform gravity potential $mgz$ breaks vertical translation symmetry. This links to 11.08's example.

### N1006

Note: [[11.07 Noether's Theorem|11.07 Noether's Theorem]]  
Priority: high · Graph: no · Manim: no

The statement is correct, but the proof sketch is hard to follow without equations, and the note has no example of computing a charge.

- [Simplify] Write the proof in equations: $\delta L=\sum_k(\partial_{q_k}L\,\eta_k+\partial_{\dot q_k}L\,\dot\eta_k)\varepsilon$. Use the Euler–Lagrange equations to rewrite this as $\varepsilon\tfrac{d}{dt}\sum_kp_k\eta_k$, then set it equal to $\varepsilon\dot f$ to get $\dot Q=0$.
- [Example] Add one short example inline, such as a free particle under translation $\eta=\hat n$ with $f=0$, giving $Q=\vec p\cdot\hat n$. Point to 11.08 for the others.
- [Intuition] Add a one-sentence takeaway: "If shifting the system along a direction costs nothing, the momentum along that direction never changes". Note also that the theorem needs a continuous symmetry; a discrete one like parity gives no conserved charge of this kind.

### N1007

Note: [[11.08 Energy, Momentum, and Angular Momentum as Conserved Charges|11.08 Energy, Momentum, and Angular Momentum as Conserved Charges]]  
Priority: medium · Graph: no · Manim: no

The momentum and angular-momentum derivations are correct. The energy case is hand-waved ("changes the integration limits") instead of derived with the Noether formula.

- [Simplify] Derive energy with the same Noether formula. For $\partial L/\partial t=0$, the shift $q(t)\to q(t+\varepsilon)$ has $\eta_k=\dot q_k$ and $\delta L=\varepsilon\,dL/dt$, so $f=L$ and $Q=\sum_kp_k\dot q_k-L=E$. This replaces "changes the integration limits".
- [Simplify] For angular momentum, show the one-line vector identity $\vec p_i\cdot(\hat n\times\vec r_i)=\hat n\cdot(\vec r_i\times\vec p_i)$ that gives $\hat n\cdot\vec L$.
- [Example] In the gravity example, explain why $L_x,L_y$ are not conserved: tilting the horizontal axis changes $mgz$. Add a case where $E\ne T+U$ but $E$ is still conserved, such as the rotating guide in 09.11.

### N1008

Note: [[11.09 Equivalent Lagrangians from Symmetry|11.09 Equivalent Lagrangians from Symmetry]]  
Priority: medium · Graph: yes · Manim: no

The boost calculation and the charge $\vec G=m\vec r-\vec Pt$ are correct, but the note skips applying the Noether formula, and the closing field-theory callout is vague.

- [Simplify] Show the Noether formula step: with $\eta=\vec Vt$ and $f=m\vec r\cdot\vec V$, $Q=m\dot{\vec r}\cdot\vec Vt-m\vec r\cdot\vec V=-\vec V\cdot(m\vec r-\vec pt)$. This explains "up to sign".
- [Intuition] Interpret $\vec G$ as "initial position of the center of mass": $\vec G/M=\vec R(t)-\vec Vt$ is constant. For many particles, sum to obtain $M\vec R-\vec Pt$.
- [Graph] Plot $x(t)$ for a free particle together with the constant $G_x=mx-p_xt$ ($m=1$, $x_0=1$, $v=2$, $t\in[0,3]$) to show visibly what is conserved.
- [Structure] The "Analytical Mechanics" callout ends with "The source refers to the electromagnetic Lagrangian density in this example", which is meta-commentary. Remove it, or state the U(1) Noether current $j^\mu$ briefly with a link.

### N1009

Note: [[11.10 Energy Function and Jacobi Function|11.10 Energy Function and Jacobi Function]]  
Priority: medium · Graph: yes · Manim: yes

Correct and compact, but the conservation claim is asserted without proof and the rotating-rail example lacks the physical explanation of why $h$ is conserved while $T$ grows.

- [Simplify] Add the two-line proof of "$d\energy{h}/dt=0$": differentiate $\energy{h}$, use the Euler–Lagrange equations, and show $d\energy{h}/dt=-\partial\energy{L}/\partial t$, so the reader sees where the condition comes from.
- [Intuition] In the rotating-rail example, explain that the motor driving the rail does work on the bead, so $\energy{T}$ is not conserved; $\energy{h}$ equals the energy in the rotating frame, with $-\tfrac12\mechanical{m}\mechanical{r}^2\mechanical{\omega}^2$ acting as a centrifugal potential.
- [Example] Finish the rail example: solve $\mechanical{\ddot r}=\mechanical{\omega}^2\mechanical{r}$ to get $\mechanical{r}(t)=\mechanical{r}_0\cosh(\mechanical{\omega}t)$ for release from rest, and check explicitly that $\energy{h}=-\tfrac12\mechanical{m}\mechanical{\omega}^2\mechanical{r}_0^2$ stays constant while $\energy{T}$ grows.
- [Simplify] Show the decomposition $\energy{T}=\energy{T}_2+\energy{T}_1+\energy{T}_0$ and the result $\energy{h}=\energy{T}_2-\energy{T}_0+\energy{U}$ (Euler's theorem on homogeneous functions); this explains both the $\energy{h}=\energy{E}$ case and the rail case at once.
- [Graph] 2D plot of $\energy{T}(t)$, $\energy{h}(t)$ and $\tfrac12\mechanical{m}\mechanical{\dot r}^2$ for the rail with $\mechanical{m}=1$, $\mechanical{\omega}=1$, $\mechanical{r}_0=1$, $t\in[0,2]$: $\energy{h}$ is a flat line and $\energy{T}$ grows like $\cosh(2t)$.
- [Manim] Top view of a rail rotating at constant $\mechanical{\omega}$ with the bead sliding outward along it, alongside live bars for $\energy{T}$ (growing) and $\energy{h}$ (constant).

### N1010

Note: [[11.11 Noether Charges for Discrete Symmetries|11.11 Noether Charges for Discrete Symmetries]]  
Priority: medium · Graph: no · Manim: no

Very short and correct, but the title promises "Noether charges" while the body explains that discrete symmetries do not give them, and nothing concrete is shown.

- [Structure] Rename or reframe the note (for example "Discrete Symmetries and Conservation") or state the takeaway first: discrete symmetries give selection rules and solution maps rather than continuous conserved charges. In quantum mechanics, parity gives a multiplicatively conserved quantum number.
- [Intuition] Explain why Noether needs continuity: the charge comes from the derivative with respect to an infinitesimal parameter $\varepsilon$, and parity has no "small parity transformation".
- [Example] Add a concrete case: for $\energy{U}(x)=\tfrac12\mechanical{k}x^2$ or any even potential, show that the mirrored trajectory $-x(t)$ is a solution; for a velocity-dependent magnetic force, show how time reversal fails unless $\magnetic{\vec B}\to-\magnetic{\vec B}$.
- [Simplify] Add one sentence on how this maps solutions: the time-reversed solution of a ball thrown upward is the ball falling back along the same parabola.

### N1011

Note: [[11.12 Limits of Analytical Mechanics|11.12 Limits of Analytical Mechanics]]  
Priority: medium · Graph: no · Manim: no

Correct but terse; the title "Limits of Analytical Mechanics" does not match the content, which is the extension to fields.

- [Structure] Retitle it (for example "Extension to Classical Fields") or add the actual limits (dissipation, nonholonomic constraints, quantum effects); the current title misleads readers about the content.
- [Example] Add one worked case: the string density $\mathcal L=\tfrac12\mu\dot\phi^2-\tfrac12\tau(\partial_x\phi)^2$ gives the wave equation $\mu\ddot\phi=\tau\partial_x^2\phi$ through the field Euler–Lagrange equation.
- [Intuition] Explain the discretization picture: a chain of $N$ masses with coordinates $q_i(t)$ becomes $\phi(x,t)$ as $N\to\infty$, so $\sum_i\to\int dx$ and $\energy{L}\to\int\mathcal L\,dx$.
- [Correctness] Macro inconsistency: the body uses an uncolored $\vec x$ in $\phi(\vec x,t)$, while the table lists $\mechanical{\vec x}$; choose one and use it in both places.

### N1012

Note: [[11.13 Variations with Free Endpoints|11.13 Variations with Free Endpoints]]  
Priority: medium · Graph: yes · Manim: yes

The boundary-term result is correct, but the derivation is skipped, and the application paragraph is abstract with no worked example.

- [Simplify] Show the integration-by-parts step that produces the boundary term $[\partial\energy{L}/\partial\dot q\,\delta q]_{t_1}^{t_2}$, and explain why the integral and boundary terms must vanish separately (first choose $\delta q$ with fixed ends, then free the ends).
- [Correctness] Clarify the scope: the formula covers a free endpoint value $q(t_2)$ at a fixed time $t_2$. If the endpoint time also varies, an additional term $-[\energy{H}\,\delta t]$ appears. The opening sentence "variations can move the endpoints" suggests the general case.
- [Example] Work the free-endpoint brachistochrone: the bead must reach a given vertical line (fixed horizontal distance) in least time; the natural boundary condition $\partial f/\partial\mechanical{y}'=0$ forces a horizontal tangent there, so the cycloid ends at its lowest point ($\theta=\pi$).
- [Graph] 2D plot of several cycloids $\mechanical{x}=\mechanical{a}(1-\cos\theta)$, $\mechanical{y}=\mechanical{a}(\theta-\sin\theta)$ for different $\mechanical{a}$ ending on a vertical line, highlighting the one that meets it with a horizontal tangent.
- [Manim] Animate a family of trial curves from a fixed start point to a movable end point on a line, letting the end slide until the curve meets the line perpendicularly (the geodesic case), with $\delta\energy{S}$ shown as a shrinking number.

### N1013

Note: [[11.14 Representative Examples of Noether's Theorem|11.14 Representative Examples of Noether's Theorem]]  
Priority: medium · Graph: no · Manim: no

The examples are only asserted; there is no explicit current, no charge formula, and no derivation, so it reads as a list of claims.

- [Example] For the complex scalar field, write the explicit Noether current $j^\mu\propto i(\psi^*\partial^\mu\psi-\psi\,\partial^\mu\psi^*)$ and the charge $Q=\int j^0\,d^3x$. Without them, "the associated charge is the total electric charge" cannot be checked.
- [Simplify] Start with a mechanical analogue the reader already knows: invariance under a rotation by angle $\alpha$ in the $(x,y)$ plane gives $\mechanical{L}_z$. Then show the $U(1)$ phase as a rotation in the $(\mathrm{Re}\,\psi,\mathrm{Im}\,\psi)$ plane.
- [Correctness] The table gives "—" as the unit of $T^{0i}$, and the body says "in the units used in this example". State the convention, for example $T^{0i}=c\times$ momentum density in $\unit{J\,m^{-3}}$, so the unit is defined.
- [Links] Link back to the general Noether theorem note and to \[\[11.11 Noether Charges for Discrete Symmetries\]\] for the contrast with discrete symmetries.

### N1014

Note: [[11.15 Hamilton's Principle and Symmetries Exercises|11.15 Hamilton's Principle and Symmetries Exercises]]  
Priority: low · Graph: no · Manim: no

A clear, correct exercise list with sensible results; only small ordering and numbering issues.

- [Structure] Reorder by difficulty or topic: exercises 11–13 (Intermediate) come after the Challenge exercises 9–10. Move them into the Intermediate block, or group them under topic headings (translations/rotations, energy, boosts, Kepler).
- [Links] Add links from exercises 3 and 11 to \[\[11.10 Energy Function and Jacobi Function\]\], and from exercise 8 to the Kepler/LRL note, so a stuck reader can find the theory.

### N1015

Note: [[Variational paths and the brachistochrone|Variational paths and the brachistochrone]]  
Priority: high · Graph: yes · Manim: yes

A careful transcription of lecture notes with correct derivations, but it reads as commentary on handwritten sketches, and its quantity table contains conflicting and irrelevant entries.

- [Correctness] The physical-quantities table is a copied generic table: it defines $\mechanical{c}$ both as a quadratic drag coefficient and as the speed of light, $\mechanical{k}$ three ways (linear drag rate, spring constant, polar integration constant), and $T$ as flight time. Remove the drag, flight-time, and rod entries, and use distinct symbols for the spring constant and the polar constant $\mechanical{k}$.
- [Simplify] Remove the "sketch shows", "handwritten" and "birthday lecture" remarks from the main text, or move them into a single source-note callout, so the derivations read as standalone exposition.
- [Intuition] Before the brachistochrone setup, explain why the straight line is not fastest: a steeper initial drop gains speed early, which pays off over the longer path. A comparison table of descent times (line, circle arc, cycloid) would help.
- [Graph] 2D plot comparing a straight line, a quarter circle and the cycloid $\mechanical{x}=\mechanical{a}(1-\cos\theta)$, $\mechanical{y}=\mechanical{a}(\theta-\sin\theta)$ for $\theta\in[0,\pi]$ between the same endpoints ($\mechanical{a}=1$, downward $\mechanical{x}$ axis), with the computed travel times in the legend.
- [Manim] Release three beads at once on the line, circle and cycloid tracks and animate them under gravity, showing that the cycloid bead arrives first. Then trace the cycloid as a point on a rolling circle.
- [Example] For the polar shortest-path section, finish the integral: $\theta-\theta_0=\arccos(\mechanical{k}/\mechanical{r})$, so $\mechanical{r}\cos(\theta-\theta_0)=\mechanical{k}$ is a straight line. Without this step the section never confirms the expected answer.
