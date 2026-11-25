---
title: "Note Improvement Tracker – 02 Physics/01 Classical Mechanics/09 Constraints, Virtual Work, and d’Alembert’s Principle"
---

> [!TLDR]
> This note tracks the review of the 15 notes in `02 Physics/01 Classical Mechanics/09 Constraints, Virtual Work, and d’Alembert’s Principle`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 1 possible errors or notation conflicts. 1 of them are verified (1 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N0973|N0973]] 09.08 Holonomic Constraints in Differential Form: The coefficients $\vec a_i$ in $\sum_i\vec a_i\cdot d\vec r_i+a_t\,dt=0$ clash with the acceleration $\mechanical{\vec a}_i$ used in 09.06 and 09.13. Rename them (e.g. $\vec c_i$, $c_t$) to avoid confusion. **Fixed:** Renamed coefficients to \vec c_i and c_t in both expressions.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N0965 | [[09.00 Constraints, Virtual Work, and d’Alembert’s Principle\|09.00 Constraints, Virtual Work, and d’Alembert’s Principle]] | Analyzed | low | no | no | [[#N0965\|View]] |
| N0966 | [[09.01 Motivation and Overview of Constrained Systems\|09.01 Motivation and Overview of Constrained Systems]] | Analyzed | medium | no | no | [[#N0966\|View]] |
| N0967 | [[09.02 Holonomic and Nonholonomic Constraints\|09.02 Holonomic and Nonholonomic Constraints]] | Analyzed | medium | no | yes | [[#N0967\|View]] |
| N0968 | [[09.03 Generalized Coordinates and Degrees of Freedom\|09.03 Generalized Coordinates and Degrees of Freedom]] | Analyzed | low | no | no | [[#N0968\|View]] |
| N0969 | [[09.04 Virtual Displacements\|09.04 Virtual Displacements]] | Analyzed | high | yes | yes | [[#N0969\|View]] |
| N0970 | [[09.05 Principle of Virtual Work\|09.05 Principle of Virtual Work]] | Analyzed | medium | no | no | [[#N0970\|View]] |
| N0971 | [[09.06 d’Alembert’s Equation in Symbolic Form\|09.06 d’Alembert’s Equation in Symbolic Form]] | Analyzed | medium | no | no | [[#N0971\|View]] |
| N0972 | [[09.07 Generalized Forces\|09.07 Generalized Forces]] | Analyzed | low | no | no | [[#N0972\|View]] |
| N0973 | [[09.08 Holonomic Constraints in Differential Form\|09.08 Holonomic Constraints in Differential Form]] | Analyzed | medium | yes | no | [[#N0973\|View]] |
| N0974 | [[09.09 Lagrange Multipliers\|09.09 Lagrange Multipliers]] | Analyzed | medium | yes | no | [[#N0974\|View]] |
| N0975 | [[09.10 Unilateral Constraints and Inequalities\|09.10 Unilateral Constraints and Inequalities]] | Analyzed | medium | yes | yes | [[#N0975\|View]] |
| N0976 | [[09.11 Systems with Rheonomic Constraints\|09.11 Systems with Rheonomic Constraints]] | Analyzed | medium | yes | yes | [[#N0976\|View]] |
| N0977 | [[09.12 Worked Examples of Constrained Systems\|09.12 Worked Examples of Constrained Systems]] | Analyzed | medium | yes | yes | [[#N0977\|View]] |
| N0978 | [[09.13 d’Alembert’s Equation in Practice\|09.13 d’Alembert’s Equation in Practice]] | Analyzed | low | no | no | [[#N0978\|View]] |
| N0979 | [[09.14 Constraints and Virtual Work Exercises\|09.14 Constraints and Virtual Work Exercises]] | Analyzed | low | no | no | [[#N0979\|View]] |

## Suggestions

### N0965

Note: [[09.00 Constraints, Virtual Work, and d’Alembert’s Principle|09.00 Constraints, Virtual Work, and d’Alembert’s Principle]]  
Priority: low · Graph: no · Manim: no

A clear chapter hub with an accurate summary and working links.

- [Links] The summary skips 09.01 and 09.08–09.13 (Lagrange multipliers, unilateral and rheonomic constraints, worked examples). Add one bullet per missing note so the hub links the whole chapter.

### N0966

Note: [[09.01 Motivation and Overview of Constrained Systems|09.01 Motivation and Overview of Constrained Systems]]  
Priority: medium · Graph: no · Manim: no

Motivation stated in the abstract; there is no concrete example of why Newtonian constraint handling becomes painful.

- [Example] Add a concrete contrast. The planar pendulum in Cartesian form needs $x,y$, the tension $T$ and the constraint $x^2+y^2=\ell^2$ (three unknowns). With $\theta$ it reduces to one equation, $\ddot\theta+(g/\ell)\sin\theta=0$, and $T$ never appears.
- [Intuition] Add a picture-level sentence: constraint forces only keep the system on its allowed surface. They act perpendicular to every allowed motion, so they do no work, and that is why they can be dropped.
- [Links] Link each listed concept (degrees of freedom, virtual displacements, virtual work, d'Alembert) to its note 09.02–09.06, and link forward to 10.03.

### N0967

Note: [[09.02 Holonomic and Nonholonomic Constraints|09.02 Holonomic and Nonholonomic Constraints]]  
Priority: medium · Graph: no · Manim: yes

The definitions are correct, but the nonholonomic case is only asserted; the note never shows why rolling cannot be integrated.

- [Example] Add the standard vertical rolling disk (coin) on a plane: $\dot x=R\dot\phi\cos\theta$, $\dot y=R\dot\phi\sin\theta$. Show that these cannot be integrated to $f(x,y,\theta,\phi)=0$: any configuration is reachable, yet velocities are restricted.
- [Intuition] Contrast with the disk rolling on a straight line, where $\dot x=R\dot\phi$ integrates to $x=R\phi+c$ (holonomic). This makes "integrable" concrete.
- [Manim] Animate a coin that rolls forward, turns, rolls back and turns again (parallel parking). It returns to the same $(x,y)$ with a different $\phi$ or heading, showing visually that velocity constraints do not restrict reachable configurations.
- [Structure] Introduce the scleronomic/rheonomic terminology before the moving-sphere example, which already uses "rheonomic".

### N0968

Note: [[09.03 Generalized Coordinates and Degrees of Freedom|09.03 Generalized Coordinates and Degrees of Freedom]]  
Priority: low · Graph: no · Manim: no

A clear, correct note with good examples; only small gaps remain.

- [Example] Add the 3D double pendulum ($N=2$, $K=2$, $n=4$) and a rigid dumbbell ($N=2$, $K=1$, $n=5$) to show how counting changes with dimension and constraint type.
- [Intuition] Explain why a free rigid body has 6 degrees of freedom by counting: 3 non-collinear points give 9 coordinates minus 3 fixed distances, or $3N-K$ with rigid-distance constraints.
- [Simplify] In "Choice of coordinates", explain why $x=\ell\sin\theta$ works only locally: it is double-valued between the lower and upper half of the circle.

### N0969

Note: [[09.04 Virtual Displacements|09.04 Virtual Displacements]]  
Priority: high · Graph: yes · Manim: yes

The definition is correct, but the key distinction between virtual and actual displacement (frozen time) is stated without intuition and illustrated only for a scleronomic case, where the two coincide.

- [Example] Add a rheonomic example where virtual and actual displacements differ. For a bead on a rotating rod or a pendulum with a moving pivot, $d\vec r$ contains $(\partial\vec r/\partial t)dt$, while $\delta\vec r$ stays tangent to the frozen constraint.
- [Intuition] Explain the freezing of time: "imagine stopping the clock, then nudging the system along the constraint as it is at that instant". This explains why ideal reactions are perpendicular to $\delta\vec r$ but not necessarily to $d\vec r$.
- [Graph] Add a 2D figure of the pendulum circle $x^2+y^2=\ell^2$ with the bob at $\theta=30^\circ$, the tangent vector $\partial\vec r/\partial\theta=(\ell\cos\theta,\ell\sin\theta)$, and the radial cord, showing $\delta\vec r\perp$ cord.
- [Manim] Animate an expanding ring $|\vec r|=a(t)$ with a bead on it. Show the actual displacement over $dt$ (an outward-tilted arrow) next to the virtual displacement at frozen $t$ (tangent arrow). The ring radius then advances, and the comparison repeats.

### N0970

Note: [[09.05 Principle of Virtual Work|09.05 Principle of Virtual Work]]  
Priority: medium · Graph: no · Manim: no

The theorem and examples are correct. The "ideal constraints" paragraph is dense, and the examples are so simple that the method's advantage over force balance does not show.

- [Simplify] Split the "Ideal constraints" paragraph into a short bulleted list: frictionless surface (normal reaction ⟂ $\delta\vec r$), rigid link (internal forces cancel), rolling without slipping (contact point has $\delta\vec r=0$), and sliding friction (not ideal).
- [Example] Add an example where virtual work beats force balance, such as a frictionless ladder or a pantograph/scissor linkage with weight $P$ and horizontal force $F$. Writing $\delta y_P$ and $\delta x_F$ in terms of $\delta\theta$ gives $F=\tfrac12P\cot\theta$-type results without any internal forces.
- [Intuition] In the lever example, add one sentence on the "golden rule of mechanics": force times displacement is conserved, so $F_1\delta s_1=F_2\delta s_2$.
- [Links] Link the incline example to 09.07: the cord tension is the generalized force along $s$, and equilibrium is $Q_s=0$.

### N0971

Note: [[09.06 d’Alembert’s Equation in Symbolic Form|09.06 d’Alembert’s Equation in Symbolic Form]]  
Priority: medium · Graph: no · Manim: no

A correct, very short statement with no derivation from Newton's law and no example.

- [Simplify] Add a three-line derivation: $m_i\vec a_i=\vec F_i^{\mathrm{act}}+\vec\Phi_i$. Dot with $\delta\vec r_i$ and sum, then use $\sum_i\vec\Phi_i\cdot\delta\vec r_i=0$ to obtain the theorem. This shows exactly where the ideal-constraint assumption enters.
- [Example] Add a minimal example, such as a block on a frictionless incline: $(-mg\sin\alpha-m\ddot s)\delta s=0$ gives $\ddot s=-g\sin\alpha$ without the normal force. Alternatively, point explicitly to the worked example in 09.13.
- [Intuition] Explain the "inertial force" reading: in the instantaneously co-accelerating frame, $-m\vec a$ acts like an extra applied force, so dynamics becomes statics.

### N0972

Note: [[09.07 Generalized Forces|09.07 Generalized Forces]]  
Priority: low · Graph: no · Manim: no

Clear and correct, with a good pendulum example; the note could clarify units and the meaning of a generalized force.

- [Intuition] State that $Q_k$ is "the force component along the direction in which $q_k$ moves the system, times the lever factor". For an angle $Q$ is a torque; for a length it is a force. The table gives units, but the text does not.
- [Example] Add a second example with two coordinates, such as a bead on a rotating hoop or the double pendulum (exercise 6 in 09.14 asks for exactly $Q_{\theta_1},Q_{\theta_2}$), so the sum over particles is visible.
- [Structure] The table gives $Q_k$ the unit "—" but $Q_\theta$ the unit N m. Use "J/[q_k]" or similar for consistency.

### N0973

Note: [[09.08 Holonomic Constraints in Differential Form|09.08 Holonomic Constraints in Differential Form]]  
Priority: medium · Graph: yes · Manim: no

Terse. The note never writes the full differential of $f$, overloads $\vec a_i$ (already used for acceleration), and ends with an unrelated callout.

- [Simplify] Start from the full differential $df=\sum_i(\partial f/\partial\vec r_i)\cdot d\vec r_i+(\partial f/\partial t)dt=0$. Then show that freezing time ($dt=0$) drops the last term to give the virtual-displacement condition. This motivates the title.
- [Correctness] The coefficients $\vec a_i$ in $\sum_i\vec a_i\cdot d\vec r_i+a_t\,dt=0$ clash with the acceleration $\mechanical{\vec a}_i$ used in 09.06 and 09.13. Rename them (e.g. $\vec c_i$, $c_t$) to avoid confusion.
- [Intuition] Explain why $\vec\Phi_i=\lambda\,\partial f/\partial\vec r_i$: the gradient is normal to the constraint surface, so it is the only direction that does zero work on every admissible $\delta\vec r$.
- [Graph] Add a 2D plot of the circle $f=x^2+y^2-\ell^2=0$ with the gradient arrow $(2x,2y)$ and the tangent virtual displacement at one point.
- [Structure] The closing "Analytical Mechanics" callout about choosing generalized coordinates is unrelated to differential constraints. Move it to 09.03 or remove it.

### N0974

Note: [[09.09 Lagrange Multipliers|09.09 Lagrange Multipliers]]  
Priority: medium · Graph: yes · Manim: no

The method and the pendulum result are correct, but the key algebra ("Solving with the constraint gives λ") is skipped.

- [Simplify] Show the skipped step. Multiply the $x$ equation by $x$ and the $y$ equation by $y$ and add: $m(x\ddot x+y\ddot y)=2\lambda\ell^2-mgy$. Then use $x\ddot x+y\ddot y=-(\dot x^2+\dot y^2)=-\ell^2\dot\theta^2$ (from differentiating the constraint twice) and $y=-\ell\cos\theta$.
- [Intuition] Explain the meaning of $\lambda$: the reaction is $\lambda\nabla f$, so $\lambda$ times $|\nabla f|=2\ell$ is the tension magnitude. The sign $\lambda<0$ means the force points inward.
- [Example] Add the energy substitution $v^2=2g\ell(\cos\theta-\cos\theta_0)$ to give $T(\theta)=mg(3\cos\theta-2\cos\theta_0)$, a closed form ready to plot.
- [Graph] Plot $T/(mg)=3\cos\theta-2\cos\theta_0$ for $\theta\in[-\theta_0,\theta_0]$ with $\theta_0=30^\circ,90^\circ,180^\circ$. This shows the maximum at the bottom and where tension would turn negative.
- [Structure] State the coordinate convention explicitly: the pivot is at the origin and $y=-\ell\cos\theta$.

### N0975

Note: [[09.10 Unilateral Constraints and Inequalities|09.10 Unilateral Constraints and Inequalities]]  
Priority: medium · Graph: yes · Manim: yes

Correct and fairly clear, but the 2/3 result is quoted without the one-line algebra, and the sign logic for contact loss could be more explicit.

- [Simplify] Show the algebra: substitute $v^2$ into the radial equation to get $N=mg(3\cos\theta-2)$. Then $N=0$ gives $\cos\theta=2/3$.
- [Intuition] State the general rule plainly: solve as if the constraint were bilateral, monitor the reaction, and switch to free motion when the required reaction changes sign. Note that the result is independent of $m$, $g$ and $R$.
- [Graph] Plot $N/(mg)=3\cos\theta-2$ against $\theta\in[0,90^\circ]$. Mark the zero crossing at $48.2^\circ$ and dash the unphysical negative branch.
- [Manim] Animate a bead sliding over a quarter-circle cap with a shrinking normal-force arrow. At $\theta\approx48.2^\circ$ the arrow vanishes and the bead continues on a parabolic projectile path that clears the surface.

### N0976

Note: [[09.11 Systems with Rheonomic Constraints|09.11 Systems with Rheonomic Constraints]]  
Priority: medium · Graph: yes · Manim: yes

The result is correct, but the note introduces the Hamiltonian and $T_1,T_0$ before chapter 10 defines them and does not show $H$ conserved while $E$ is not.

- [Simplify] Show $H=p_r\dot r-L$ explicitly with $p_r=m\dot r$, giving $H=\tfrac12m\dot r^2-\tfrac12m\omega^2r^2$. Name the terms: $T_2$ is the radial part and $T_0$ is $\tfrac12m\omega^2r^2$, while $T_1=0$ here.
- [Intuition] State the punchline: $H$ is conserved because $L$ has no explicit $t$. $E=T$ is not conserved, because the motor driving the guide does work on the bead through the normal force. Solve $\ddot r=\omega^2r$ to show the exponential escape $r=r_0\cosh\omega t$.
- [Links] Link forward to 10.02 for $T_2+T_1+T_0$ and to the Hamiltonian/energy-function notes (10.07 and 11.08), since these concepts appear here first.
- [Graph] Plot $r(t)=r_0\cosh(\omega t)$ together with $E(t)=\tfrac12m(\dot r^2+\omega^2r^2)$ (growing) and $H$ (constant) for $t\in[0,3/\omega]$.
- [Manim] Animate a rotating rod with a bead sliding outward along it. Show a top-down view with the bead's spiral trajectory traced in the lab frame.

### N0977

Note: [[09.12 Worked Examples of Constrained Systems|09.12 Worked Examples of Constrained Systems]]  
Priority: medium · Graph: yes · Manim: yes

The equations are correct, but the note uses the Lagrangian and cyclic coordinates before chapter 10 introduces them, and the surface example stops before the equations of motion.

- [Structure] Either state that the examples preview chapter 10 (link 10.04 and 10.07) or move the spherical pendulum to 10.06, which already contains the same system as "Particle on a Sphere" (duplicate content).
- [Example] Finish the surface example with $f=\tfrac12\kappa(x^2+y^2)$ (a paraboloid bowl). Write the resulting Euler–Lagrange equations and the small-oscillation frequency $\omega=\sqrt{g\kappa}$.
- [Intuition] For the conical pendulum, explain $\dot\phi^2=g/(\ell\cos\theta)$ physically (tension components balance gravity and supply the centripetal force) and check the limit $\theta\to0$, where $\dot\phi\to\sqrt{g/\ell}$.
- [Graph] Add a 3D plot of a spherical-pendulum trajectory on the sphere of radius $\ell$ (numerically integrated, $\theta_0=60^\circ$, small $\dot\phi_0$). It shows the precessing rosette between two latitude circles.
- [Manim] Animate the spherical pendulum bob precessing in 3D between turning latitudes $\theta_{\min}$ and $\theta_{\max}$, with its trace accumulating.

### N0978

Note: [[09.13 d’Alembert’s Equation in Practice|09.13 d’Alembert’s Equation in Practice]]  
Priority: low · Graph: no · Manim: no

A correct and clear example; it skips the expanded virtual-work sum and keeps a source-notation callout.

- [Simplify] Show the expanded line before the result: $[-m_1g\sin\alpha-m_1\ddot s]\delta s+[m_2g-m_2\ddot s]\delta s=0$. Readers then see each term's origin.
- [Example] Add limiting checks: $\alpha=90^\circ$ gives the ordinary Atwood machine, and $m_2=m_1\sin\alpha$ gives equilibrium.
- [Structure] Remove the "Source notation" callout, which describes a typo in the source rather than physics. The main text is already correct.

### N0979

Note: [[09.14 Constraints and Virtual Work Exercises|09.14 Constraints and Virtual Work Exercises]]  
Priority: low · Graph: no · Manim: no

A good exercise list with correct results; several exercises lack answers.

- [Structure] Add results for Exercise 6 ($Q_{\theta_1}=-(m_1+m_2)g\ell_1\sin\theta_1$, $Q_{\theta_2}=-m_2g\ell_2\sin\theta_2$) and a short hint for Exercise 8 ($\delta W=\sum_kQ_k\delta q_k=-\sum_k(\partial U/\partial q_k)\delta q_k$ with independent $\delta q_k$).
- [Links] Link exercises to their source notes (Ex 9 to 09.10, Ex 10 to 09.09, Ex 2 to 09.05) so readers can check the method.
