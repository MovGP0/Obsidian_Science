---
title: "Note Improvement Tracker – 02 Physics/01 Classical Mechanics/05 Particle Systems, Collisions, and Momentum"
---

> [!TLDR]
> This note tracks the review of the 16 notes in `02 Physics/01 Classical Mechanics/05 Particle Systems, Collisions, and Momentum`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 2 possible errors or notation conflicts. 2 of them are verified (2 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N0914|N0914]] Rocket momentum, centers of mass, and internal torque: Several internal links point to the wrong sections. "Rocket in gravity" sends the momentum balance to [[#Collisions]]; it should go to "Rocket momentum balance". "Momentum carried by rocket exhaust" cites [[#Center of mass of a semicircular wire]] for the $\alpha v_{\mathrm{ex}}$ term. "Swept area…" cites [[#Evaluating the center-of-mass integral]] for the equal-area result; it should cite "Central gravity and equal areas". The three links to [[Projectile motion with linear and quadratic drag#Momentum of a system]] for the range result should point to "#Range with weak linear drag". **Fixed:** Rocket-in-gravity and exhaust-momentum links now go to #Rocket momentum balance, swept-area link to #Central gravity and equal areas, three range links to Projectile motion with linear and quadratic drag#Range with weak linear drag.
- [[#N0914|N0914]] Rocket momentum, centers of mass, and internal torque: The dangling text "…on the section on Momentum of a system and 27." is a transcription remnant. Also, $\mechanical{\alpha}$ is used both for the mass-loss rate and for angular acceleration in the same note. Rename one of them. **Fixed:** Removed "and 27."; renamed angular acceleration to \mechanical{\dot\omega} in the torque section and its table row, kept \mechanical{\alpha} as mass-loss rate.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N0899 | [[05.00 Particle Systems, Collisions, and Momentum\|05.00 Particle Systems, Collisions, and Momentum]] | Analyzed | low | no | no | [[#N0899\|View]] |
| N0900 | [[05.01 Motivation for Studying Particle Systems\|05.01 Motivation for Studying Particle Systems]] | Analyzed | low | no | no | [[#N0900\|View]] |
| N0901 | [[05.02 Center of Mass of a System\|05.02 Center of Mass of a System]] | Analyzed | medium | yes | yes | [[#N0901\|View]] |
| N0902 | [[05.03 Total Momentum\|05.03 Total Momentum]] | Analyzed | medium | no | no | [[#N0902\|View]] |
| N0903 | [[05.04 Elastic and Inelastic Collisions in One Dimension\|05.04 Elastic and Inelastic Collisions in One Dimension]] | Analyzed | medium | yes | no | [[#N0903\|View]] |
| N0904 | [[05.05 Collisions in Two Dimensions and the Center-of-Mass Frame\|05.05 Collisions in Two Dimensions and the Center-of-Mass Frame]] | Analyzed | high | yes | yes | [[#N0904\|View]] |
| N0905 | [[05.06 Worked Examples of Collisions\|05.06 Worked Examples of Collisions]] | Analyzed | medium | no | no | [[#N0905\|View]] |
| N0906 | [[05.07 Angular Momentum\|05.07 Angular Momentum]] | Analyzed | medium | no | no | [[#N0906\|View]] |
| N0907 | [[05.08 Variable-Mass Systems and the Rocket Equation\|05.08 Variable-Mass Systems and the Rocket Equation]] | Analyzed | medium | yes | no | [[#N0907\|View]] |
| N0908 | [[05.09 Coefficient of Restitution\|05.09 Coefficient of Restitution]] | Analyzed | medium | yes | no | [[#N0908\|View]] |
| N0909 | [[05.10 Kinetic Energy in the Center-of-Mass Frame\|05.10 Kinetic Energy in the Center-of-Mass Frame]] | Analyzed | medium | no | no | [[#N0909\|View]] |
| N0910 | [[05.11 Collisions with a Stationary Target in the Laboratory Frame\|05.11 Collisions with a Stationary Target in the Laboratory Frame]] | Analyzed | medium | yes | no | [[#N0910\|View]] |
| N0911 | [[05.12 Full Derivation of the Rocket Equation\|05.12 Full Derivation of the Rocket Equation]] | Analyzed | medium | yes | no | [[#N0911\|View]] |
| N0912 | [[05.13 Particle Systems and Collisions Exercises\|05.13 Particle Systems and Collisions Exercises]] | Analyzed | low | no | no | [[#N0912\|View]] |
| N0913 | [[Momentum, impulse, and collision calculations\|Momentum, impulse, and collision calculations]] | Analyzed | high | yes | no | [[#N0913\|View]] |
| N0914 | [[Rocket momentum, centers of mass, and internal torque\|Rocket momentum, centers of mass, and internal torque]] | Analyzed | high | no | no | [[#N0914\|View]] |

## Suggestions

### N0899

Note: [[05.00 Particle Systems, Collisions, and Momentum|05.00 Particle Systems, Collisions, and Momentum]]  
Priority: low · Graph: no · Manim: no

A clear chapter hub with correct summary formulas.

- [Links] Add links for 05.09 (restitution), 05.10 (König), 05.11 (lab-frame scattering) and 05.12 (full rocket derivation) to the summary list.

### N0900

Note: [[05.01 Motivation for Studying Particle Systems|05.01 Motivation for Studying Particle Systems]]  
Priority: low · Graph: no · Manim: no

A short, correct motivational note.

- [Example] Add one concrete illustration of the CM/internal split, for example a spinning thrown wrench whose CM follows a parabola while the wrench rotates about it. Link to 05.02 for the explosion example.

### N0901

Note: [[05.02 Center of Mass of a System|05.02 Center of Mass of a System]]  
Priority: medium · Graph: yes · Manim: yes

Correct; the internal-force cancellation is asserted rather than shown, and there is no numerical example of a centre of mass.

- [Simplify] Show the cancellation explicitly: $\sum_i\sum_{j\ne i}\vec F_{ij}=\sum_{i<j}(\vec F_{ij}+\vec F_{ji})=\vec 0$ by Newton's third law.
- [Example] Add a discrete example (cross-link 05.13 Exercise 1) and one continuous one, such as a uniform rod or a semicircular wire with $y_{\mathrm{cm}}=2R/\pi$. Point out that the CM can lie outside the body.
- [Graph] Plot the explosion example: the original parabola $y=x\tan\alpha-gx^2/(2v_0^2\cos^2\alpha)$ with two fragment parabolas starting at the burst point and the mass-weighted midpoint marked at several times, lying on the original curve.
- [Manim] Animate the projectile flying, bursting into two unequal fragments that separate along different parabolas, and a CM dot that continues smoothly along the original trajectory.

### N0902

Note: [[05.03 Total Momentum|05.03 Total Momentum]]  
Priority: medium · Graph: no · Manim: no

Correct but brief; the rifle example has no numbers and impulse is never mentioned.

- [Example] Add numbers to the rifle example, for example $m=\quantity{10}{g}$, $v=\quantity{800}{m/s}$, $M=\quantity{4}{kg}$ giving $V=\quantity{2}{m/s}$. Compare the kinetic energies ($3.2\unit{kJ}$ against $8\unit{J}$) to show that equal momenta do not mean equal energies.
- [Intuition] Introduce impulse $\vec J=\int\vec F_{\mathrm{ext}}dt=\Delta\vec P$, and say why momentum is approximately conserved in short collisions even with external forces: the external impulse scales with $\Delta t$.
- [Simplify] The proof assumes constant total mass. Add a one-line pointer that variable-mass systems need the treatment in 05.08 and 05.12.

### N0903

Note: [[05.04 Elastic and Inelastic Collisions in One Dimension|05.04 Elastic and Inelastic Collisions in One Dimension]]  
Priority: medium · Graph: yes · Manim: no

Clear and correct, with good limiting cases; the derivation of the kinetic-energy loss is skipped.

- [Simplify] Derive $\Delta K_{\mathrm{loss}}=\tfrac12\mu(v_1-v_2)^2$ via König's theorem (link 05.10): the CM kinetic energy survives, and all the relative kinetic energy is lost.
- [Graph] Plot $v_1'/v_1$ and $v_2'/v_1$ against $m_2/m_1$ on a log axis from 0.01 to 100 for a stationary target, with the equal-mass exchange point and the wall and light-target limits marked.
- [Example] Add a numerical ballistic-pendulum case (or link 05.06), and note what fraction of the bullet's kinetic energy survives, $m/(m+M)$, which is about 1%.
- [Structure] Merge the trailing "lighter body can rebound" section into the limiting cases or into a worked-example subsection with a heading in the same style.

### N0904

Note: [[05.05 Collisions in Two Dimensions and the Center-of-Mass Frame|05.05 Collisions in Two Dimensions and the Center-of-Mass Frame]]  
Priority: high · Graph: yes · Manim: yes

Too terse. It states the CM-frame results and the equal-mass right-angle result without derivation or a diagram, so the most visual topic in the chapter has no picture.

- [Simplify] Derive the CM momenta: $\vec v_1^{\mathrm{CM}}=\vec v_1-\vec V=(m_2/M)\vec v_{\mathrm{rel}}$, so $\vec p_1^{\mathrm{CM}}=\mu\vec v_{\mathrm{rel}}$. Then show the equal-mass right-angle result from $v_1^2=v_1'^2+v_2'^2+2\vec v_1'\cdot\vec v_2'$.
- [Graph] Draw the velocity-space construction: the vector $\vec V$, a circle of radius $|\vec u_1|=(m_2/M)v_1$ centred at the tip of $\vec V$, and outgoing lab velocities for a chosen $\theta^*$. Repeat for $m_1<m_2$ and $m_1>m_2$ to show the maximum lab angle.
- [Manim] Animate the same elastic collision twice side by side. In the lab frame, the target is at rest and the balls leave at different angles. In the CM frame, the balls approach head-on and leave back-to-back rotated by $\theta^*$. A final overlay shows that adding $\vec V$ maps one picture onto the other.
- [Example] Work one numerical case, for example $m_1=m_2$, $v_1=\quantity{2}{m/s}$, $\theta^*=60^\circ$, giving lab angles of $30^\circ$ and $-60^\circ$ and speeds of $\sqrt3$ and $1\unit{m/s}$.

### N0905

Note: [[05.06 Worked Examples of Collisions|05.06 Worked Examples of Collisions]]  
Priority: medium · Graph: no · Manim: no

Correct worked examples; the Newton's cradle explanation oversimplifies the conditions.

- [Intuition] The Newton's-cradle claim that the result "follows from applying the equal-mass elastic collision equations to successive pairs, assuming short contact times" is only an idealization. It assumes separate, sequential binary collisions (tiny gaps between the balls). Touching balls need a wave or dispersion model, and real cradles show small residual motion.
- [Example] Give the explosion example numbers, for example $M=\quantity{2}{kg}$ at $\quantity{20}{m/s}$ at the top of its arc. Compute the explosion energy released, $\Delta K=\tfrac12(M/2)(2v)^2-\tfrac12Mv^2=\tfrac12Mv^2$, to show that internal forces add kinetic energy without changing the momentum.
- [Simplify] In the ballistic pendulum, add a line on why the two stages must be separated: momentum, not energy, is conserved during impact, and energy, not momentum, during the swing, because the string tension and gravity give an external impulse.

### N0906

Note: [[05.07 Angular Momentum|05.07 Angular Momentum]]  
Priority: medium · Graph: no · Manim: no

Correct; the derivative step is skipped, and the system-level theorem does not explain why internal torques cancel.

- [Simplify] Show $\dot{\vec L}=\dot{\vec r}\times\vec p+\vec r\times\dot{\vec p}=\vec r\times\vec F$, since $\vec v\times m\vec v=0$. For systems, add the condition that internal torques cancel only for central pair forces (strong third law), and link the internal-torque section of the rocket note.
- [Example] Make the skater quantitative: arms out $I=\quantity{3.5}{kg\,m^2}$, $\omega=\quantity{2}{rad/s}$; arms in $I=\quantity{1.0}{kg\,m^2}$ gives $\omega=\quantity{7}{rad/s}$. Show that the kinetic energy rises by the factor 3.5 and that the extra energy comes from the work done by the arms.
- [Intuition] Point out that $\vec L$ depends on the reference point, even for straight-line motion, where $|\vec L|=mvd$ with impact parameter $d$. This removes the common confusion that only rotating bodies have angular momentum.

### N0907

Note: [[05.08 Variable-Mass Systems and the Rocket Equation|05.08 Variable-Mass Systems and the Rocket Equation]]  
Priority: medium · Graph: yes · Manim: no

Correct and concise; it relies on 05.12 for the derivation without linking it and has no picture of the logarithmic penalty.

- [Links] Link [[05.12 Full Derivation of the Rocket Equation]] at "The momentum balance … gives", and say that $u$ here equals $v_{\mathrm{ex}}$ in the lecture notes.
- [Graph] Plot $\Delta v/u=\ln(m_0/m_f)$ for $m_0/m_f\in[1,30]$, with horizontal reference lines at the LEO requirement ($\approx9.4\unit{km/s}$ divided by $u=3$ and by $4.5\unit{km/s}$) to show why staging is needed.
- [Intuition] Explain why $F=\mathrm d(mv)/\mathrm dt$ applied naively to the rocket alone is wrong: the system boundary moves, and the exhaust carries momentum away.
- [Example] Add a two-stage comparison (link 05.13 Exercise 14) to show numerically how staging beats a single stage with the same overall mass ratio.

### N0908

Note: [[05.09 Coefficient of Restitution|05.09 Coefficient of Restitution]]  
Priority: medium · Graph: yes · Manim: no

Correct; the energy-loss formula and the total bounce time are given without derivation.

- [Simplify] Derive $\Delta K=-\tfrac12\mu(v_1-v_2)^2(1-e^2)$ from König's theorem: the relative speed is scaled by $e$, so the relative kinetic energy is scaled by $e^2$.
- [Simplify] Show the bounce-time series: $T=t_0+2t_0(e+e^2+\cdots)=t_0(1+e)/(1-e)$ with $t_0=\sqrt{2h_0/g}$.
- [Graph] Plot the bouncing-ball height $y(t)$ for $e=0.8$ and $h_0=\quantity{1}{m}$ through about 12 bounces, with the accumulation time $T_{\mathrm{tot}}=9\,t_0\approx\quantity{4.06}{s}$ marked.
- [Example] Measure $e$ from rebound heights, $e=\sqrt{h_1/h_0}$, and give typical values: a basketball has $e\approx0.8$ and a steel ball on steel $e\approx0.9$.

### N0909

Note: [[05.10 Kinetic Energy in the Center-of-Mass Frame|05.10 Kinetic Energy in the Center-of-Mass Frame]]  
Priority: medium · Graph: no · Manim: no

Correct; the proof is given in words only and there is no example.

- [Simplify] Write out the expansion: $\tfrac12\sum m_i|\vec V+\vec v_i'|^2=\tfrac12MV^2+\vec V\cdot\sum m_i\vec v_i'+\tfrac12\sum m_iv_i'^2$, where the middle term is zero by the definition of the CM.
- [Example] Two-body case: $K_{\mathrm{rel}}=\tfrac12\mu v_{\mathrm{rel}}^2$. Use it to rederive the perfectly inelastic loss in one line (link 05.04 and 05.09), and to show why colliders use head-on beams: a fixed target wastes CM energy.
- [Intuition] Give a rolling-wheel example: $K=\tfrac12Mv^2+\tfrac12I_{\mathrm{cm}}\omega^2$ is König's theorem for a rigid body. Link the rigid-body chapter.

### N0910

Note: [[05.11 Collisions with a Stationary Target in the Laboratory Frame|05.11 Collisions with a Stationary Target in the Laboratory Frame]]  
Priority: medium · Graph: yes · Manim: no

Correct formulas, but $\tan\theta_{\mathrm{lab}}$ and the recoil energy are stated without derivation and without the key consequence of a maximum scattering angle.

- [Simplify] Derive $\tan\theta_{\mathrm{lab}}$ from the components $\vec v_1'=\vec V+\vec u_1'$ in two lines. Derive $K_2'$ from $|\vec v_2'|=2|\vec u_2|\sin(\theta_{\mathrm{CM}}/2)$ (isosceles triangle).
- [Graph] Plot $\theta_{\mathrm{lab}}$ against $\theta_{\mathrm{CM}}\in[0,\pi]$ for $m_1/m_2=0.5,1,2$. For $m_1>m_2$ the curve has a maximum at $\sin\theta_{\max}=m_2/m_1$; for equal masses $\theta_{\mathrm{lab}}=\theta_{\mathrm{CM}}/2$.
- [Example] For the moderator, estimate the number of head-on-average collisions needed to go from $2\unit{MeV}$ to $0.025\unit{eV}$. With the average logarithmic energy loss $\xi\approx1$ for hydrogen and $0.16$ for carbon, this is about 18 and 115 collisions.

### N0911

Note: [[05.12 Full Derivation of the Rocket Equation|05.12 Full Derivation of the Rocket Equation]]  
Priority: medium · Graph: yes · Manim: no

A careful, correct derivation; the gravity-loss result needs a picture and an explicit burnout condition.

- [Graph] Plot $v(t)$ for the constant-burn rocket with $u=\quantity{2.6}{km/s}$, $m_0=2.97\times10^6\unit{kg}$, $\dot m_0=1.3\times10^4\unit{kg/s}$ up to burnout ($m=7.5\times10^5\unit{kg}$, $t\approx170\unit{s}$), with and without the $-gt$ term, to visualize the gravity loss.
- [Intuition] Add the lift-off condition $u\dot m_0>m_0g$: thrust must exceed the initial weight, or the rocket does not leave the pad. This is implicit in the formula and worth stating.
- [Simplify] Shorten the "Source sign" callout to one sentence: "with $\vec u$ pointing backward, $\vec u\,\dot m$ points forward because $\dot m<0$".

### N0912

Note: [[05.13 Particle Systems and Collisions Exercises|05.13 Particle Systems and Collisions Exercises]]  
Priority: low · Graph: no · Manim: no

A well-structured exercise list; all checked results are correct.

- [Structure] Add brief results or hints for Exercises 5, 9 and 15, for example: Exercise 9, $\vec L_{\mathrm{rel}}=\mu\vec r\times\dot{\vec r}$ is constant, so $\vec r\perp\vec L$.

### N0913

Note: [[Momentum, impulse, and collision calculations|Momentum, impulse, and collision calculations]]  
Priority: high · Graph: yes · Manim: no

Correct numerical work, but the title says momentum while the note opens with circular-motion energy problems and ends with rotational kinematics and moment of inertia, and it has broken headings.

- [Structure] Move "Chapter 10" (peg pendulum, hill crest), "Sled at constant speed", "Energy" (spring and loop), "Rotational kinematics", "Rotational kinematics examples" and "Moment of inertia" to the energy and rotation notes. Fix the "##### )" heading, and merge the duplicated inelastic-collision example, which appears twice.
- [Graph] Under "Impulse–momentum theorem", add a native plot of a realistic impact force $F(t)$ (for example a half-sine pulse of $0.2\unit{s}$ for the airbag case), with a rectangle of height $F_{\mathrm{avg}}=4000\unit{N}$ of equal area. This shows what "average force" means.
- [Intuition] For the airbag example, say why a longer stopping time helps: the same $\Delta p=\quantity{800}{kg\,m/s}$ spread over more time gives a smaller force. Compare with a $0.01\unit{s}$ stop on concrete, which gives $80{,}000\unit{N}$. Also note that the force from the bag is $F_{\mathrm{avg}}+mg$.
- [Example] Finish the homework recoil sketch, or remove it. As written it gives no numbers and no result.
- [Simplify] Apply \mechanical{} macros consistently. Most symbols in this note ($m$, $v$, $p$, $J$, $x_{\mathrm{CM}}$) are uncoloured, while a few are wrapped.

### N0914

Note: [[Rocket momentum, centers of mass, and internal torque|Rocket momentum, centers of mass, and internal torque]]  
Priority: high · Graph: no · Manim: no

The derivations are correct, but the note interleaves rocket, centre-of-mass, angular-momentum and projectile-drag scratch work, and many internal links point to the wrong sections.

- [Correctness] Several internal links point to the wrong sections. "Rocket in gravity" sends the momentum balance to [[#Collisions]]; it should go to "Rocket momentum balance". "Momentum carried by rocket exhaust" cites [[#Center of mass of a semicircular wire]] for the $\alpha v_{\mathrm{ex}}$ term. "Swept area…" cites [[#Evaluating the center-of-mass integral]] for the equal-area result; it should cite "Central gravity and equal areas". The three links to [[Projectile motion with linear and quadratic drag#Momentum of a system]] for the range result should point to "#Range with weak linear drag".
- [Correctness] The dangling text "…on the section on Momentum of a system and 27." is a transcription remnant. Also, $\mechanical{\alpha}$ is used both for the mass-loss rate and for angular acceleration in the same note. Rename one of them.
- [Structure] Move the two weak-drag range sections and "Comparing the range formula with scratch work" to the projectile-drag note. Order the rest as: rocket balance → rocket in gravity → CM definition → rod, wire and cone → angular momentum → internal torques → moment of inertia.
- [Simplify] In the semicircular-wire section, drop the misleading "$\simeq2R/3$". Instead give $2R/\pi\approx0.64R$, and contrast it with the semicircular lamina, $4R/(3\pi)\approx0.42R$, which the sketch actually introduces with $\sigma$.
- [Intuition] Under "Cancellation of internal torques", add one sentence noting that the cancellation requires the strong form of the third law (forces along the line joining the particles). Magnetic forces between moving charges are a counterexample.
