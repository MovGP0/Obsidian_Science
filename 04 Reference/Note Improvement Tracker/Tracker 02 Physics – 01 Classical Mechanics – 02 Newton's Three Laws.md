---
title: "Note Improvement Tracker – 02 Physics/01 Classical Mechanics/02 Newton's Three Laws"
---

> [!TLDR]
> This note tracks the review of the 17 notes in `02 Physics/01 Classical Mechanics/02 Newton's Three Laws`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 4 possible errors or notation conflicts. 4 of them are verified (3 fixed, 1 rejected); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N0848|N0848]] 02.03 Second Law – F = ma: Update the equivalence-principle figure: the source's $\approx10^{-13}$ corresponds to torsion-balance tests; the MICROSCOPE satellite (final results 2022) constrains the Eötvös parameter to about $10^{-15}$. Cite the bound as "better than $10^{-13}$" if the source figure is kept. **Fixed:** Kept the source figure, said it comes from torsion-balance tests, and added the MICROSCOPE (2022) bound of about 1e-15.
- [[#N0849|N0849]] 02.04 Third Law – Action and Reaction: The sentence "In the form used here, the action and reaction forces have the same line of action" is the strong form; add that magnetic forces between moving charges can violate it, where field momentum restores momentum conservation. **Rejected:** The sentence already says "In the form used here", so it is correct as written. Adding the caveat would be an extension, not a correction.
- [[#N0860|N0860]] Newton’s laws, friction, and drag problems: Worksheet 2(b)/(d) round the flight time to $2.9\,\unit{s}$ although the computed root is $2.95\,\unit{s}$; with $2.95\,\unit{s}$ the range is $\approx54.3\,\unit{m}$ (not $53.4\,\unit{m}$) and $v_{fy}\approx-15.1\,\unit{m/s}$. Discussion 4(e) states $b=mg/v^2=13.6\,\unit{kg/m}$ without the speed used (it implies $v\approx6\,\unit{m/s}$); state the input. **Fixed:** Used 2.95 s: range 54.3 m and v_fy = -15.1 m/s. In 4(e), stated that the page gives no speed and that b = 13.6 kg/m corresponds to v ≈ 6.0 m/s for m = 50 kg.
- [[#N0861|N0861]] Projectile motion with linear and quadratic drag: The Physical quantities table assigns conflicting meanings: $\mechanical{k}$ as drag rate ($\unit{s^{-1}}$), spring constant ($\unit{N\,m^{-1}}$) and "polar length integral constant" ($\unit{m}$); $\mechanical{c}$ as quadratic drag coefficient and speed of light; $\mechanical{b}$ as drag coefficient and cube half-width; $\mechanical{R}$ as range, radius and radial scale; plus $C$, travel time $T$ and $\mechanical{\alpha}$ rows that do not occur. Keep only the drag-problem symbols. **Fixed:** Removed the rows for radius R, radial scale R, spring constant k, polar constant k, cube half-width b, speed of light c, and travel time T. Replaced the complex-C row with integration constants (units depend on use). Dropped alpha from the angular-acceleration row and kept ddot phi (used for the pendulum). Kept the flight-time T row because T is used.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N0845 | [[02.00 Newton's Three Laws\|02.00 Newton's Three Laws]] | Analyzed | low | no | no | [[#N0845\|View]] |
| N0846 | [[02.01 Origins of Newton's Laws\|02.01 Origins of Newton's Laws]] | Analyzed | low | no | no | [[#N0846\|View]] |
| N0847 | [[02.02 Principle of Inertia\|02.02 Principle of Inertia]] | Analyzed | medium | no | yes | [[#N0847\|View]] |
| N0848 | [[02.03 Second Law – F = ma\|02.03 Second Law – F = ma]] | Analyzed | medium | no | no | [[#N0848\|View]] |
| N0849 | [[02.04 Third Law – Action and Reaction\|02.04 Third Law – Action and Reaction]] | Analyzed | medium | no | no | [[#N0849\|View]] |
| N0850 | [[02.05 Fundamental Forces and Contact Forces\|02.05 Fundamental Forces and Contact Forces]] | Analyzed | low | no | no | [[#N0850\|View]] |
| N0851 | [[02.06 Tension, Friction, and Constraints\|02.06 Tension, Friction, and Constraints]] | Analyzed | medium | yes | no | [[#N0851\|View]] |
| N0852 | [[02.07 Noninertial Reference Frames\|02.07 Noninertial Reference Frames]] | Analyzed | high | no | yes | [[#N0852\|View]] |
| N0853 | [[02.08 Worked Examples in Dynamics\|02.08 Worked Examples in Dynamics]] | Analyzed | medium | yes | no | [[#N0853\|View]] |
| N0854 | [[02.09 Elastic Forces and Elastic Cords\|02.09 Elastic Forces and Elastic Cords]] | Analyzed | medium | yes | yes | [[#N0854\|View]] |
| N0855 | [[02.10 Viscous Drag and Terminal Velocity\|02.10 Viscous Drag and Terminal Velocity]] | Analyzed | high | yes | no | [[#N0855\|View]] |
| N0856 | [[02.11 Free-Body Diagram\|02.11 Free-Body Diagram]] | Analyzed | medium | yes | no | [[#N0856\|View]] |
| N0857 | [[02.12 Momentum and the Impulse–Momentum Theorem\|02.12 Momentum and the Impulse–Momentum Theorem]] | Analyzed | medium | yes | no | [[#N0857\|View]] |
| N0858 | [[02.13 Dynamics of the Simple Pendulum\|02.13 Dynamics of the Simple Pendulum]] | Analyzed | medium | yes | yes | [[#N0858\|View]] |
| N0859 | [[02.14 Newtonian Dynamics Exercises\|02.14 Newtonian Dynamics Exercises]] | Analyzed | low | no | no | [[#N0859\|View]] |
| N0860 | [[Newton’s laws, friction, and drag problems\|Newton’s laws, friction, and drag problems]] | Analyzed | high | yes | no | [[#N0860\|View]] |
| N0861 | [[Projectile motion with linear and quadratic drag\|Projectile motion with linear and quadratic drag]] | Analyzed | high | yes | yes | [[#N0861\|View]] |

## Suggestions

### N0845

Note: [[02.00 Newton's Three Laws|02.00 Newton's Three Laws]]  
Priority: low · Graph: no · Manim: no

Clear chapter hub with an accurate summary.

- [Structure] Add summary bullets for 2.6 (friction law $\lVert\mechanical{\vec f}_s\rVert\le\mechanical{\mu}_s\mechanical{N}$), 2.10 (terminal velocity $\mechanical{v}_\infty=\mechanical{m}\mechanical{g}/\mechanical{b}$), 2.12 (impulse–momentum) and 2.13 (pendulum $\signal{\omega}=\sqrt{\mechanical{g}/\mechanical{\ell}}$), which are currently missing from the summary.

### N0846

Note: [[02.01 Origins of Newton's Laws|02.01 Origins of Newton's Laws]]  
Priority: low · Graph: no · Manim: no

Short, accurate historical context; appropriate as is.

- [Intuition] Optionally add the Moon test as the concrete payoff: the Moon's centripetal acceleration $\approx\quantity{2.7\times10^{-3}}{m\,s^{-2}}\approx\mechanical{g}/60^2$ at 60 Earth radii, which made "the same theory on Earth and in the sky" a quantitative claim.

### N0847

Note: [[02.02 Principle of Inertia|02.02 Principle of Inertia]]  
Priority: medium · Graph: no · Manim: yes

Correct and concise, but the first law is presented abstractly without the motivating contrast to Aristotelian intuition.

- [Intuition] Add Galileo's double-inclined-plane thought experiment (ball rolls up to the same height; as the second plane flattens it rolls forever), which motivates why constant velocity, not rest, is the natural state.
- [Manim] Animate the double-incline thought experiment: the ball released on the left reaches the same height on the right as the right slope is lowered step by step, until on a horizontal plane it never stops.
- [Simplify] Clarify why the first law is not just a special case of the second: it defines the frames in which $\mechanical{\vec F}=\mechanical{m}\mechanical{\vec a}$ holds; show a counterexample (a ball on the floor of an accelerating bus appears to accelerate with no force).
- [Example] Add a numerical Galilean-transformation example (a ball thrown forward at $\quantity{5}{m\,s^{-1}}$ in a train moving at $\quantity{20}{m\,s^{-1}}$) showing that accelerations agree in both frames.

### N0848

Note: [[02.03 Second Law – F = ma|02.03 Second Law – F = ma]]  
Priority: medium · Graph: no · Manim: no

Correct and well caveated; it needs a worked example where the vector character and net-force summation matter.

- [Example] Add a 2D example with two or more forces (e.g. a puck with $\mechanical{\vec F}_1=(10,0)\,\unit{N}$ and $\mechanical{\vec F}_2=(0,5)\,\unit{N}$, $\mechanical{m}=\quantity{0.3}{kg}$), emphasising that $\mechanical{\vec F}$ is the vector sum and $\mechanical{\vec a}$ is parallel to it.
- [Intuition] Explain operationally what force and mass mean (mass ratios from equal-force accelerations, force as $\mechanical{m}\mechanical{\vec a}$ on a reference mass) so the law is not read as a pure definition.
- [Correctness] Update the equivalence-principle figure: the source's $\approx10^{-13}$ corresponds to torsion-balance tests; the MICROSCOPE satellite (final results 2022) constrains the Eötvös parameter to about $10^{-15}$. Cite the bound as "better than $10^{-13}$" if the source figure is kept.
- [Simplify] The "Source wording" callout about variable mass can be shortened to a direct statement in the main text: $\mechanical{\vec F}=d\mechanical{\vec p}/dt$ holds for a fixed set of particles; for open systems use the rocket-equation momentum balance.

### N0849

Note: [[02.04 Third Law – Action and Reaction|02.04 Third Law – Action and Reaction]]  
Priority: medium · Graph: no · Manim: no

Correct statement; it lacks the classic misconception discussion that makes the third law useful in practice.

- [Intuition] Add the horse-and-cart (or book-on-table) example to separate third-law pairs (forces on different bodies) from balanced forces on one body (weight and normal force are not a third-law pair).
- [Example] Make the cord example quantitative by connecting it to Atwood/Two-block results in 2.8 and 2.11, or show a pushing example (two blocks in contact: $\mechanical{F}_c=\mechanical{m}_2\mechanical{F}/(\mechanical{m}_1+\mechanical{m}_2)$) where the contact pair is explicit.
- [Correctness] The sentence "In the form used here, the action and reaction forces have the same line of action" is the strong form; add that magnetic forces between moving charges can violate it, where field momentum restores momentum conservation.

### N0850

Note: [[02.05 Fundamental Forces and Contact Forces|02.05 Fundamental Forces and Contact Forces]]  
Priority: low · Graph: no · Manim: no

Accurate overview; brief by design.

- [Intuition] Add one quantitative comparison showing why electromagnetism dominates contact forces (electric/gravitational force ratio between two protons $\approx10^{36}$) and why gravity still dominates at astronomical scales (neutrality of matter).
- [Links] Link "Drag" to [[02.10 Viscous Drag and Terminal Velocity]], "friction" and "tension" to [[02.06 Tension, Friction, and Constraints]], and the spring force to [[02.09 Elastic Forces and Elastic Cords]].

### N0851

Note: [[02.06 Tension, Friction, and Constraints|02.06 Tension, Friction, and Constraints]]  
Priority: medium · Graph: yes · Manim: no

Correct content, but friction is stated as formulas without the static-to-kinetic picture and the hanging-cord result lacks a derivation.

- [Graph] Plot friction magnitude versus applied horizontal force: a line $\mechanical{f}=\mechanical{F}$ up to $\mechanical{\mu}_s\mechanical{N}$, then a drop to the constant $\mechanical{\mu}_d\mechanical{N}$ (e.g. $\mechanical{N}=\quantity{49}{N}$, $\mechanical{\mu}_s=0.7$, $\mechanical{\mu}_d=0.5$).
- [Simplify] Derive the incline threshold $\tan\mechanical{\alpha}\le\mechanical{\mu}_s$ in two lines from $\mechanical{m}\mechanical{g}\sin\mechanical{\alpha}\le\mechanical{\mu}_s\mechanical{m}\mechanical{g}\cos\mechanical{\alpha}$ and note it is mass-independent (a practical way to measure $\mechanical{\mu}_s$).
- [Simplify] For the heavy cord, show $d\mechanical{T}=\mechanical{\lambda}\mechanical{g}\,d\mechanical{s}$ from a free-body diagram of an element and integrate to $\mechanical{T}(\mechanical{s})=\mechanical{\lambda}\mechanical{g}\mechanical{s}$; use $d/d\mechanical{s}$ rather than $\partial/\partial\mechanical{s}$ for this one-variable static case.
- [Structure] The vault uses $\mechanical{\mu}_d$ here but $\mechanical{\mu}_k$ in the transcribed problem notes; choose one subscript convention throughout.

### N0852

Note: [[02.07 Noninertial Reference Frames|02.07 Noninertial Reference Frames]]  
Priority: high · Graph: no · Manim: yes

Correct but brief; centrifugal and Coriolis forces are listed without a simple worked example or intuition, and the Foucault example jumps to the result.

- [Example] Add a translating-frame example (pendulum hanging in an accelerating car tilts at $\tan\varphi=\mechanical{A}/\mechanical{g}$; apparent weight in an elevator) before the rotating case.
- [Intuition] Explain the direction of the Coriolis force with a concrete case (northern hemisphere: moving objects deflect to the right; magnitude estimate for a projectile) and why the centrifugal force points away from the axis.
- [Manim] Animate the Foucault pendulum seen from above: the swing plane fixed in the inertial frame while the floor rotates at $\mechanical{\omega}_T\sin\mechanical{\lambda}$, then switch to the floor's frame where the plane precesses.
- [Simplify] State the general equation including the frame-origin acceleration and the Euler term, $-\mechanical{m}\mechanical{\vec A}-\mechanical{m}\mechanical{\dot{\vec\omega}}\times\mechanical{\vec r}\,'$, then specialise, so it matches 1.10.

### N0853

Note: [[02.08 Worked Examples in Dynamics|02.08 Worked Examples in Dynamics]]  
Priority: medium · Graph: yes · Manim: no

Good examples with correct numbers and limiting cases; the banked-curve example would benefit from a friction extension and a figure.

- [Graph] Add a 2D force diagram for the banked curve (normal force resolved into $\mechanical{N}\sin\mechanical{\beta}$ and $\mechanical{N}\cos\mechanical{\beta}$, weight, centre direction), drawn with graph lines and arrows.
- [Example] Extend the banked curve with static friction to give the speed range $\mechanical{v}^2_{\min/\max}=\mechanical{g}\mechanical{R}\dfrac{\sin\mechanical{\beta}\mp\mechanical{\mu}_s\cos\mechanical{\beta}}{\cos\mechanical{\beta}\pm\mechanical{\mu}_s\sin\mechanical{\beta}}$, which shows why the frictionless speed is special.
- [Simplify] In the two-block example, show the elimination step (add the two equations so $\mechanical{T}$ cancels) rather than only giving the solution.
- [Structure] The last sentence "Race tracks are designed for typical race speeds" is vague; replace it with a numeric comparison (e.g. Daytona's 31° banking and $\mechanical{R}\approx\quantity{300}{m}$ give $\approx\quantity{42}{m\,s^{-1}}$).

### N0854

Note: [[02.09 Elastic Forces and Elastic Cords|02.09 Elastic Forces and Elastic Cords]]  
Priority: medium · Graph: yes · Manim: yes

Correct but terse; series/parallel spring results are stated without derivation and the title promises elastic cords that are not discussed.

- [Simplify] Derive both combination rules in one line each: parallel springs share the displacement (forces add), series springs share the force (extensions add).
- [Structure] The title mentions "elastic cords" but the note only treats springs; add a paragraph on cords that resist only extension ($\mechanical{F}=0$ when slack), e.g. a bungee cord, or rename the note.
- [Graph] Plot $\mechanical{F}(\mechanical{x})=-\mechanical{k}\mechanical{x}$ and $\energy{U}(\mechanical{x})=\tfrac12\mechanical{k}\mechanical{x}^2$ on the same $\mechanical{x}$ axis, plus the vertical-spring potential $\tfrac12\mechanical{k}\mechanical{z}^2+\mechanical{m}\mechanical{g}\mechanical{z}$ showing its minimum shifted to $\mechanical{z}_0=-\mechanical{m}\mechanical{g}/\mechanical{k}$.
- [Manim] Animate a mass on a vertical spring: first the static stretch to $\mechanical{z}_0$, then oscillation about $\mechanical{z}_0$ with the same period as the horizontal case, showing that gravity only shifts equilibrium.
- [Simplify] Integrate the "Source wording" callout into the main text by stating the origin choice once.

### N0855

Note: [[02.10 Viscous Drag and Terminal Velocity|02.10 Viscous Drag and Terminal Velocity]]  
Priority: high · Graph: yes · Manim: no

Correct and physically honest (it flags that Stokes drag fails for raindrops), but the $\mechanical{v}(t)$ solution is underived and the regime criterion (Reynolds number) is missing.

- [Simplify] Show the separation-of-variables derivation of $\mechanical{v}(t)=\mechanical{v}_\infty(1-e^{-t/\tau})$ and verify the limits $t\ll\tau$ ($\mechanical{v}\approx\mechanical{g}t$, free fall) and $t\gg\tau$.
- [Graph] Plot $\mechanical{v}(t)/\mechanical{v}_\infty$ versus $t/\tau$ on $[0,5]$ for linear drag $1-e^{-t/\tau}$ and for quadratic drag $\tanh(t/\tau_q)$, plus the drag-free line $\mechanical{v}=\mechanical{g}t$, to show the approach to terminal velocity.
- [Intuition] Introduce the Reynolds number $Re=\mechanical{\rho}_f\mechanical{v}\,2\mechanical{R}/\mechanical{\eta}$ as the criterion for choosing between the two drag laws; for the raindrop $Re\approx10^3$ at $\quantity{6.5}{m\,s^{-1}}$, explaining why the Stokes estimate of $\quantity{121}{m\,s^{-1}}$ fails.
- [Example] Complete the raindrop example with the quadratic law: $\mechanical{v}_\infty=\sqrt{2\mechanical{m}\mechanical{g}/(\mechanical{\rho}_{\mathrm{air}}\mechanical{C}_d\mechanical{A})}$ with $\mechanical{C}_d\approx0.5$ gives $\approx\quantity{6.6}{m\,s^{-1}}$, close to the measured value.
- [Structure] The water density is written $\mechanical{\rho}_a$, which reads as "air"; use $\mechanical{\rho}_w$, and give the fluid density in the quadratic law its own subscript.

### N0856

Note: [[02.11 Free-Body Diagram|02.11 Free-Body Diagram]]  
Priority: medium · Graph: yes · Manim: no

Clear procedure and a correct Atwood example, but a note about free-body diagrams contains no diagram.

- [Graph] Add a native 2D figure of the Atwood machine with separate free-body diagrams for $\mechanical{m}_1$ and $\mechanical{m}_2$ (tension up, weights down, acceleration arrows).
- [Example] Add limiting-case checks: $\mechanical{m}_1=\mechanical{m}_2$ gives $\mechanical{a}=0$, $\mechanical{T}=\mechanical{m}\mechanical{g}$; $\mechanical{m}_1\to0$ gives $\mechanical{a}\to\mechanical{g}$, $\mechanical{T}\to0$; and note $\mechanical{m}_1\mechanical{g}<\mechanical{T}<\mechanical{m}_2\mechanical{g}$.
- [Simplify] Add a step "choose axes and sign conventions per body (positive in the direction of motion)" and a "common mistakes" line (no "force of motion", no centripetal force as a separate force).

### N0857

Note: [[02.12 Momentum and the Impulse–Momentum Theorem|02.12 Momentum and the Impulse–Momentum Theorem]]  
Priority: medium · Graph: yes · Manim: no

Correct and compact; impulse as area under $\mechanical{F}(t)$ is the key visual idea and is missing.

- [Graph] Plot a realistic contact force pulse $\mechanical{F}(t)$ (e.g. half-sine of peak $\approx\quantity{251}{N}$ over $\quantity{0.01}{s}$, matching the ball example) together with the rectangle of the average force $\quantity{160}{N}$, both enclosing area $\lvert\mechanical{J}\rvert=\quantity{1.6}{N\,s}$.
- [Intuition] Add the airbag or bent-knees landing example: same $\Delta\mechanical{p}$, longer $\Delta t$, smaller average force.
- [Example] Note that the ball loses kinetic energy ($\quantity{2.5}{J}\to\quantity{0.9}{J}$) even though the impulse calculation does not need it, linking to the coefficient of restitution note.

### N0858

Note: [[02.13 Dynamics of the Simple Pendulum|02.13 Dynamics of the Simple Pendulum]]  
Priority: medium · Graph: yes · Manim: yes

Correct derivation; it stops before giving the period, the validity of the small-angle approximation, or a picture.

- [Example] State the period $\signal{T}=2\pi\sqrt{\mechanical{\ell}/\mechanical{g}}$ and a number ($\mechanical{\ell}=\quantity{1}{m}$ gives $\approx\quantity{2.0}{s}$), and add the first anharmonic correction $\signal{T}\approx\signal{T}_0(1+\mechanical{\theta}_0^2/16)$ to quantify when the approximation fails.
- [Graph] Plot $\sin\mechanical{\theta}$ and $\mechanical{\theta}$ on $[0,\pi/2]$ (showing the error is below 1% up to about $14^\circ$), or the exact period ratio $\signal{T}/\signal{T}_0$ versus amplitude $\mechanical{\theta}_0\in[0,170^\circ]$.
- [Manim] Animate two pendulums released at $10^\circ$ and $60^\circ$ side by side with a small-angle model ghost, showing the large-amplitude one falling behind, plus the tension arrow varying through the swing.
- [Intuition] Interpret the tension formula: at the bottom $\mechanical{T}>\mechanical{m}\mechanical{g}$ by $\mechanical{m}\mechanical{v}^2/\mechanical{\ell}$; at the turning points $\mechanical{T}=\mechanical{m}\mechanical{g}\cos\mechanical{\theta}_0$.

### N0859

Note: [[02.14 Newtonian Dynamics Exercises|02.14 Newtonian Dynamics Exercises]]  
Priority: low · Graph: no · Manim: no

Good exercise set; all results I checked (including Coriolis deflection and drag height) are correct.

- [Structure] Order by level (Basic → Intermediate → Challenge); Challenge Ex. 9–10 currently precede Intermediate Ex. 11–14, and Ex. 15 is Challenge again.
- [Simplify] Ex. 10 result could add the explicit solution $\mechanical{x}(t)=\mechanical{x}_0\cosh(\sqrt{\mechanical{g}/\mechanical{L}}\,t)$ for release from rest, valid until $\mechanical{x}=\mechanical{L}$.

### N0860

Note: [[Newton’s laws, friction, and drag problems|Newton’s laws, friction, and drag problems]]  
Priority: high · Graph: yes · Manim: no

Long transcription with mostly correct worked problems, but broken headings, orphaned fragments from other problems, and missing problem statements make it hard to follow.

- [Structure] Fix malformed headings ("##### )", "**)**", "##### ) — Week 4 worksheet 1", "##### ) — Block released from rest", "##### ) — Drag force", "##### ) — Dot product") and remove non-content fragments (the "5.7" and "6.13" stubs, the remark about Euler's identity).
- [Structure] The opening "(b) Apex / (a) Cliff height / (c) Velocity at the cliff" solution belongs to problem 4.44 whose statement is in "Kinematics, projectiles, and circular motion problems"; move it there, together with the projectile problems 4.45–4.79 and the worksheet projectiles, so this note covers only forces, friction, drag and circular dynamics as its title says.
- [Correctness] Worksheet 2(b)/(d) round the flight time to $2.9\,\unit{s}$ although the computed root is $2.95\,\unit{s}$; with $2.95\,\unit{s}$ the range is $\approx54.3\,\unit{m}$ (not $53.4\,\unit{m}$) and $v_{fy}\approx-15.1\,\unit{m/s}$. Discussion 4(e) states $b=mg/v^2=13.6\,\unit{kg/m}$ without the speed used (it implies $v\approx6\,\unit{m/s}$); state the input.
- [Example] Finish the dot-product example with the angle: $\cos\theta=-47/\sqrt{83\cdot29}\approx-0.958$, so $\theta\approx163^\circ$.
- [Graph] Replace the scanned "Approach to terminal speed" sketch with a native plot of $v(t)=v_t\tanh(gt/v_t)$ for $v_t=\quantity{40.4}{m\,s^{-1}}$ (problem 4) over $t\in[0,15]\,\unit{s}$, and the static-to-kinetic friction plot with a native graph.
- [Simplify] Apply semantic macros to the many plain symbols ($T$, $m$, $g$, $F_N$, $\mu_k$ in the equations) and keep macro arguments to the symbol only ($\mechanical{v}_x$, not $\mechanical{v_x}$ as in problem 4.79).

### N0861

Note: [[Projectile motion with linear and quadratic drag|Projectile motion with linear and quadratic drag]]  
Priority: high · Graph: yes · Manim: yes

The linear-drag derivation and weak-drag expansions are correct, but the note repeats the same integration three times, includes unrelated sections, and has a corrupted quantities table.

- [Correctness] The Physical quantities table assigns conflicting meanings: $\mechanical{k}$ as drag rate ($\unit{s^{-1}}$), spring constant ($\unit{N\,m^{-1}}$) and "polar length integral constant" ($\unit{m}$); $\mechanical{c}$ as quadratic drag coefficient and speed of light; $\mechanical{b}$ as drag coefficient and cube half-width; $\mechanical{R}$ as range, radius and radial scale; plus $C$, travel time $T$ and $\mechanical{\alpha}$ rows that do not occur. Keep only the drag-problem symbols.
- [Structure] Merge the three overlapping sections ("Adding linear air resistance", "Projectile motion with linear drag", "Integrating the linear-drag equations") into one clean derivation of $\mechanical{x}(t)$ and $\mechanical{y}(t)$; move "Sliding in a circular track" to the pendulum note and "Momentum of a system" to Chapter 5.
- [Graph] Plot the trajectory $\mechanical{y}(\mechanical{x})$ with and without linear drag for the same launch (e.g. $\mechanical{v}_0=\quantity{30}{m\,s^{-1}}$, $\theta=45^\circ$, $\mechanical{k}=0,0.1,0.3\,\unit{s^{-1}}$) using the parametric forms $\mechanical{x}(t)$, $\mechanical{y}(t)$ given in the note, showing the shortened, asymmetric path and the vertical asymptote at $\mechanical{x}=\mechanical{v}_{0x}/\mechanical{k}$.
- [Manim] Animate two projectiles launched together, one drag-free and one with linear drag, with velocity arrows; the drag projectile's horizontal velocity decays exponentially and it lands earlier and shorter, matching $\mechanical{R}'\approx\mechanical{R}(1-4\mechanical{k}\mechanical{v}_{0y}/(3\mechanical{g}))$.
- [Intuition] Interpret the weak-drag result: the factor $\mechanical{k}\mechanical{v}_{0y}/\mechanical{g}=\mechanical{v}_{0y}/\mechanical{v}_{\mathrm{ter}}$ compares the launch speed with terminal speed, giving a clear validity criterion; also note that the $\quantity{201.6}{km}$ drag-free example is far outside this regime.
- [Simplify] Remove sentences about the scan ("The height formula at the edge of the scan is partly clipped", "The horizontal line on the scan appears to omit the minus sign") once the equations are verified, and color $\phi$, $\theta$ with the mechanical macro for consistency.
