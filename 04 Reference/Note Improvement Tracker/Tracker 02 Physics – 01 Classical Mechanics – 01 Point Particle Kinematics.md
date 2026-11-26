---
title: "Note Improvement Tracker – 02 Physics/01 Classical Mechanics/01 Point Particle Kinematics"
---

> [!TLDR]
> This note tracks the review of the 14 notes in `02 Physics/01 Classical Mechanics/01 Point Particle Kinematics`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 4 possible errors or notation conflicts. 4 of them are verified (3 fixed, 1 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N0836|N0836]] 01.05 Motion in Two and Three Dimensions: State the validity limits: uniform $\mechanical{g}$ and no drag; link to the drag note ("Projectile motion with linear and quadratic drag") to show how real ranges fall short. **Partly:** Uniform g was already stated; added "without air resistance" plus a link to \[\[Projectile motion with linear and quadratic drag\]\] in the opening sentence.
- [[#N0843|N0843]] Kinematics, projectiles, and circular motion problems: The Physical quantities table defines $\mechanical{R}$ as "Volume flow rate, $\unit{m^3/s}$", but in this note $\mechanical{R}$ is the projectile range (4.38) and the resultant vector; the table also lists symbols that never occur here ($\mechanical{f}_s,\mechanical{f}_k,\mechanical{\mu}$, $\energy{U}_s$, $\mechanical{\vec r}_{\mathrm{CM}}$, $\mechanical{\lambda}$, $\mechanical{\sigma}$, wave number $\signal{k}$, pressure $\mechanical{P}$). Rebuild the table from the symbols actually used. **Fixed:** Changed the R row to range (m); removed the unused rows f_s/f_k, mu_s/mu_k, U_s, r_CM, lambda, sigma, k (wave number), P.
- [[#N0843|N0843]] Kinematics, projectiles, and circular motion problems: Window problem: the roots of $0=-5+\sqrt3\,\Delta x-0.049(\Delta x)^2$ are $\Delta x=(\sqrt3\mp\sqrt{1.02})/0.098\approx3.2\,\unit{m}$ and $32.2\,\unit{m}$, not "3.1 m" and "32.1 m". **Fixed:** Recomputed 3.171 m and 32.177 m; changed the text to 3.2 m and 32.2 m.
- [[#N0844|N0844]] Vector kinematics and moving polar bases: The Physical quantities table contains rows for symbols that do not appear in this note: flight time $T$, travel time $T$ (Fermat/brachistochrone), cycloid scale $\mechanical{a}$, and "$C,C_1,C_2$ complex displacement coefficients, $\unit{m}$", whereas the only $C$ here is the integration constant in $\mechanical{\dot x}=(\mechanical{F}_0/\mechanical{m})t+C$, which has units of velocity. Remove or correct these rows. **Fixed:** Removed both T rows; replaced the C row with "integration constant, m/s"; replaced the a row with "constant acceleration, m/s^2" (that is how a is used in the note).

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N0831 | [[01.00 Point Particle Kinematics\|01.00 Point Particle Kinematics]] | Analyzed | low | no | no | [[#N0831\|View]] |
| N0832 | [[01.01 Historical Background\|01.01 Historical Background]] | Analyzed | low | no | no | [[#N0832\|View]] |
| N0833 | [[01.02 Reference Frames and Coordinates\|01.02 Reference Frames and Coordinates]] | Analyzed | medium | yes | no | [[#N0833\|View]] |
| N0834 | [[01.03 Position, Velocity, and Acceleration\|01.03 Position, Velocity, and Acceleration]] | Analyzed | medium | yes | yes | [[#N0834\|View]] |
| N0835 | [[01.04 Motion with Constant Acceleration in One Dimension\|01.04 Motion with Constant Acceleration in One Dimension]] | Analyzed | medium | yes | no | [[#N0835\|View]] |
| N0836 | [[01.05 Motion in Two and Three Dimensions\|01.05 Motion in Two and Three Dimensions]] | Analyzed | high | yes | yes | [[#N0836\|View]] |
| N0837 | [[01.06 Circular Motion\|01.06 Circular Motion]] | Analyzed | medium | no | yes | [[#N0837\|View]] |
| N0838 | [[01.07 Tangential and Normal Acceleration\|01.07 Tangential and Normal Acceleration]] | Analyzed | medium | yes | yes | [[#N0838\|View]] |
| N0839 | [[01.08 Motion in Polar Coordinates\|01.08 Motion in Polar Coordinates]] | Analyzed | high | yes | yes | [[#N0839\|View]] |
| N0840 | [[01.09 Relative Motion and Addition of Velocities\|01.09 Relative Motion and Addition of Velocities]] | Analyzed | medium | yes | no | [[#N0840\|View]] |
| N0841 | [[01.10 Kinematics in Rotating Reference Frames\|01.10 Kinematics in Rotating Reference Frames]] | Analyzed | high | no | yes | [[#N0841\|View]] |
| N0842 | [[01.11 Kinematics Exercises\|01.11 Kinematics Exercises]] | Analyzed | low | no | no | [[#N0842\|View]] |
| N0843 | [[Kinematics, projectiles, and circular motion problems\|Kinematics, projectiles, and circular motion problems]] | Analyzed | high | yes | no | [[#N0843\|View]] |
| N0844 | [[Vector kinematics and moving polar bases\|Vector kinematics and moving polar bases]] | Analyzed | high | yes | yes | [[#N0844\|View]] |

## Suggestions

### N0831

Note: [[01.00 Point Particle Kinematics|01.00 Point Particle Kinematics]]  
Priority: low · Graph: no · Manim: no

Concise chapter hub with an accurate formula summary and a consistent quantities table.

- [Structure] The summary skips 1.7, 1.8 and 1.10; add one bullet each: $\mechanical{\vec a}=\mechanical{\dot v}\hat\tau+(\mechanical{v}^2/\mechanical{R})\hat n$, the polar acceleration $(\mechanical{\ddot r}-\mechanical{r}\mechanical{\dot\theta}^2)\hat e_r+(\mechanical{r}\mechanical{\ddot\theta}+2\mechanical{\dot r}\mechanical{\dot\theta})\hat e_\theta$, and the rotating-frame acceleration with Coriolis/centrifugal/Euler terms.
- [Intuition] Add one sentence on when the point-particle model is valid (body size small compared with the path scale, rotation irrelevant), e.g. Earth around the Sun vs a spinning top.

### N0832

Note: [[01.01 Historical Background|01.01 Historical Background]]  
Priority: low · Graph: no · Manim: no

Short, accurate historical sketch; adequate for its role.

- [Intuition] Name the concrete reason the inclined plane mattered (it "dilutes" gravity so that times become measurable with water clocks, and the distance-proportional-to-$t^2$ law can be checked), which turns the history into physics insight.
- [Links] Link "speeds near the speed of light" to the relativity section if one exists in the vault, and state the quantitative criterion $\mechanical{v}/c\ll1$ (e.g. $\gamma-1<10^{-8}$ for orbital speeds).

### N0833

Note: [[01.02 Reference Frames and Coordinates|01.02 Reference Frames and Coordinates]]  
Priority: medium · Graph: yes · Manim: no

Correct but list-like; the coordinate systems are defined without any picture or guidance on the spherical angle convention.

- [Graph] Add a graph3d figure showing a point $P$ with its Cartesian projections and the spherical angles $\mechanical{\theta}$ (from $+z$) and $\mechanical{\phi}$ (from $+x$ in the $xy$ plane), plus a 2D graph for planar polar $(\mechanical{r},\mechanical{\theta})$; the same symbol $\mechanical{\theta}$ means different angles in polar and spherical coordinates, and a figure removes that ambiguity.
- [Simplify] State explicitly that planar $\mechanical{\theta}$ and spherical $\mechanical{\theta}$ are different angles (the table already lists both); consider renaming the planar one $\mechanical{\varphi}$ or adding a warning callout.
- [Example] Add a one-line worked conversion, e.g. the point $(1,1,\sqrt2)$ in spherical coordinates gives $\mechanical{r}=2$, $\mechanical{\theta}=45^\circ$, $\mechanical{\phi}=45^\circ$, to make the formulas operational.
- [Intuition] Explain the role of the clock (simultaneity and a common time parameter $t$ shared by all frames in Newtonian mechanics), since the definition lists it but never uses it.

### N0834

Note: [[01.03 Position, Velocity, and Acceleration|01.03 Position, Velocity, and Acceleration]]  
Priority: medium · Graph: yes · Manim: yes

Correct and compact, but the step from average to instantaneous velocity is stated rather than shown.

- [Graph] Plot $\mechanical{x}(t)=\tfrac12\mechanical{g}t^2$ (free-fall example, $t\in[0,2]\,\unit{s}$) with a secant between $t_1$ and $t_2$ and the tangent at $t_1$, to show average vs instantaneous velocity as slopes.
- [Manim] Animate the secant line on $\mechanical{x}(t)$ rotating into the tangent as $\Delta t\to0$ while a readout shows $\Delta\mechanical{x}/\Delta t$ converging to $\mechanical{\dot x}(t_1)$.
- [Intuition] Add a short paragraph distinguishing speed vs velocity and average speed vs magnitude of average velocity (a round trip has zero average velocity but nonzero average speed).
- [Example] Extend the free-fall example with numbers, e.g. $\mechanical{h}=\quantity{20}{m}$ gives $t_c\approx\quantity{2.0}{s}$ and impact speed $\mechanical{g}t_c\approx\quantity{19.8}{m\,s^{-1}}$, and a check that the units of $\sqrt{2\mechanical{h}/\mechanical{g}}$ are seconds.

### N0835

Note: [[01.04 Motion with Constant Acceleration in One Dimension|01.04 Motion with Constant Acceleration in One Dimension]]  
Priority: medium · Graph: yes · Manim: no

Derivations are correct and complete but lack graphs and a worked numerical example.

- [Graph] Add stacked plots of $\mechanical{a}(t)=\mechanical{a}_0$, $\mechanical{v}(t)=\mechanical{v}_0+\mechanical{a}_0t$, and $\mechanical{x}(t)$ for e.g. $\mechanical{v}_0=\quantity{10}{m\,s^{-1}}$, $\mechanical{a}_0=\quantity{-2}{m\,s^{-2}}$, $t\in[0,10]\,\unit{s}$, highlighting that the area under $\mechanical{v}(t)$ is the displacement and the turning point at $t=5\,\unit{s}$.
- [Intuition] Give the area interpretation of $\mechanical{x}-\mechanical{x}_0=\mechanical{v}_0t+\tfrac12\mechanical{a}_0t^2$ (rectangle plus triangle under the $v$-$t$ line), and the equivalent average-velocity form $\Delta\mechanical{x}=\tfrac12(\mechanical{v}_0+\mechanical{v})t$.
- [Example] Add a worked braking or vertical-throw example that uses the sign convention in the Physics I callout (e.g. throw up at $\quantity{15}{m\,s^{-1}}$: apex height $\quantity{11.5}{m}$, return time $\quantity{3.06}{s}$).
- [Simplify] Mention a "choose the equation by the missing variable" rule (no $t$ → third equation; no $\mechanical{x}$ → first), which is the practical skill this note teaches.

### N0836

Note: [[01.05 Motion in Two and Three Dimensions|01.05 Motion in Two and Three Dimensions]]  
Priority: high · Graph: yes · Manim: yes

Correct results, but the parabola is asserted rather than derived and there is no trajectory figure or discussion of the 45° optimum.

- [Simplify] Derive the trajectory equation explicitly by eliminating $t$: $\mechanical{y}=\mechanical{x}\tan\mechanical{\alpha}-\dfrac{\mechanical{g}\mechanical{x}^2}{2\mechanical{v}_0^2\cos^2\mechanical{\alpha}}$, which justifies "the path is a parabola".
- [Graph] Plot trajectories $\mechanical{y}(\mechanical{x})$ for $\mechanical{v}_0=\quantity{20}{m\,s^{-1}}$, $\mechanical{g}=\quantity{9.81}{m\,s^{-2}}$ and $\mechanical{\alpha}=15^\circ,30^\circ,45^\circ,60^\circ,75^\circ$ on $x\in[0,42]$ m, showing that complementary angles share the same range and $45^\circ$ is maximal.
- [Intuition] Explain why $\sin(2\mechanical{\alpha})$ peaks at $45^\circ$ (trade-off between flight time $\propto\sin\mechanical{\alpha}$ and horizontal speed $\propto\cos\mechanical{\alpha}$), and add the limiting cases $\mechanical{\alpha}\to0$ and $\mechanical{\alpha}\to90^\circ$.
- [Manim] Animate a projectile tracing its parabola while its velocity vector and the separate $\mechanical{v}_x$ (constant) and $\mechanical{v}_y$ (linearly decreasing) component arrows update, showing independence of horizontal and vertical motion.
- [Correctness] State the validity limits: uniform $\mechanical{g}$ and no drag; link to the drag note ("Projectile motion with linear and quadratic drag") to show how real ranges fall short.

### N0837

Note: [[01.06 Circular Motion|01.06 Circular Motion]]  
Priority: medium · Graph: no · Manim: yes

Clear derivation with a figure and a good satellite example; the only gap is intuition for why the acceleration points inward.

- [Intuition] Add the geometric argument for centripetal acceleration: over $\Delta t$ the velocity vector rotates by $\Delta\mechanical{\theta}$, so $\lvert\Delta\mechanical{\vec v}\rvert\approx\mechanical{v}\Delta\mechanical{\theta}$ and points toward the centre, giving $\mechanical{a}=\mechanical{v}\mechanical{\omega}=\mechanical{v}^2/\mechanical{R}$ without calculus.
- [Manim] Animate a point moving on the circle with tangent velocity arrow, then copy successive velocity arrows tail-to-tail into a "velocity circle" (hodograph) so the viewer sees $\Delta\mechanical{\vec v}$ pointing toward the centre; optionally add nonzero $\mechanical{\alpha}$ to show the tangential component appearing.
- [Structure] The symbol $\mechanical{\alpha}$ is angular acceleration here but launch angle in 1.5 and the chapter summary; add a short notation remark or use a different symbol to avoid confusion when reading consecutively.
- [Example] Add a second, everyday example (e.g. a car at $\quantity{20}{m\,s^{-1}}$ on a $\quantity{50}{m}$ curve: $\mechanical{a}_c=\quantity{8}{m\,s^{-2}}\approx0.8\mechanical{g}$) to give scale.

### N0838

Note: [[01.07 Tangential and Normal Acceleration|01.07 Tangential and Normal Acceleration]]  
Priority: medium · Graph: yes · Manim: yes

Correct and well structured, but the key step $d\hat\tau/d\mechanical{s}=\hat n/\mechanical{R}$ is stated without justification.

- [Simplify] Justify $d\hat\tau/d\mechanical{s}=\hat n/\mechanical{R}$: $\hat\tau$ has unit length so its derivative is perpendicular to it, and along an osculating circle of radius $\mechanical{R}$ the tangent turns by $d\mechanical{s}/\mechanical{R}$.
- [Graph] Plot a curve such as $y=x^2$ on $x\in[-1.5,1.5]$ with the osculating circle at $x=0$ (radius $1/2$) and at $x=1$ (radius $5^{3/2}/2\approx5.59$), with $\hat\tau$ and $\hat n$ drawn at each point.
- [Manim] Animate a car moving along a curve with variable speed, showing $\mechanical{a}_\tau\hat\tau$ and $\mechanical{a}_n\hat n$ arrows changing, and the osculating circle sliding along with the car.
- [Example] Extend the car example by giving the acceleration after $\quantity{2}{s}$ ($\mechanical{v}=\quantity{24}{m\,s^{-1}}$, $\mechanical{a}_n=\quantity{5.76}{m\,s^{-2}}$) to show the normal component growing with speed squared.

### N0839

Note: [[01.08 Motion in Polar Coordinates|01.08 Motion in Polar Coordinates]]  
Priority: high · Graph: yes · Manim: yes

Correct but dense; the basis-vector derivatives and the second differentiation are stated without the intermediate algebra or geometric picture.

- [Simplify] Show the derivation of $\dot{\hat e}_r=\mechanical{\dot\theta}\hat e_\theta$ from $\hat e_r=(\cos\mechanical{\theta},\sin\mechanical{\theta})$, and write out the product-rule step for $\mechanical{\vec a}$ (four terms before collecting), as the companion note "Vector kinematics and moving polar bases" already does.
- [Intuition] Explain the $2\mechanical{\dot r}\mechanical{\dot\theta}$ term physically: half comes from the radial velocity being rotated, half from $\mechanical{r}\mechanical{\dot\theta}$ increasing as $\mechanical{r}$ grows (e.g. walking outward on a merry-go-round). Calling it "kinematic Coriolis term" without this explanation is confusing before rotating frames are introduced.
- [Manim] Animate a point moving on the Archimedean spiral with the local $\hat e_r,\hat e_\theta$ arrows rotating with it, and show the acceleration vector split into its radial and transverse components.
- [Graph] Plot the spiral $\mechanical{r}=\mechanical{c}\mechanical{\theta}$ for $\mechanical{\theta}\in[0,4\pi]$ (curve type polar/parametric $x=c\theta\cos\theta$, $y=c\theta\sin\theta$) with velocity vectors at a few points.
- [Example] Add a limiting-case check: $\mechanical{r}=\mathrm{const}$ recovers the circular-motion result of 1.6 ($-\mechanical{R}\mechanical{\omega}^2\hat e_r+\mechanical{R}\mechanical{\alpha}\hat e_\theta$).

### N0840

Note: [[01.09 Relative Motion and Addition of Velocities|01.09 Relative Motion and Addition of Velocities]]  
Priority: medium · Graph: yes · Manim: no

Correct and short; the source-wording callout is helpful but the main text should state the condition directly.

- [Simplify] Replace the acceleration sentence and the "Source wording" callout with the general relation $\mechanical{\vec a}=\mechanical{\vec A}+\mechanical{\vec a}\,'$ (with $\mechanical{\vec A}=\mechanical{\ddot{\vec R}}$) and then the special case $\mechanical{\vec A}=\vec0$.
- [Graph] Add a 2D vector diagram for the river example: $\mechanical{\vec V}$, $\mechanical{\vec v}\,'$ and their sum, plus the boat's actual straight-line path across a river of width $\mechanical{L}$ (e.g. $\mechanical{V}=1.5$, $\mechanical{v}'=2.0\,\unit{m\,s^{-1}}$, $\mechanical{L}=\quantity{100}{m}$).
- [Example] Add the complementary question: which heading gives a path straight across ($\sin\varphi=\mechanical{V}/\mechanical{v}'$) and how long it takes, which is the classic follow-up and highlights the vector nature.
- [Intuition] Mention the validity limit: Galilean addition fails as speeds approach $c$, linking to relativity.

### N0841

Note: [[01.10 Kinematics in Rotating Reference Frames|01.10 Kinematics in Rotating Reference Frames]]  
Priority: high · Graph: no · Manim: yes

Correct formulas, but the transport theorem is stated without derivation and the Coriolis term lacks intuition.

- [Simplify] Derive the transport theorem in two lines: write $\vec A=\sum A_i'\hat e_i'$, differentiate, and use $\dot{\hat e}_i'=\mechanical{\vec\omega}\times\hat e_i'$; also show where the factor 2 in the Coriolis term comes from (one $\mechanical{\vec\omega}\times\mechanical{\vec v}\,'$ from each application of the theorem).
- [Manim] Animate a ball rolling straight outward on a rotating turntable: in the inertial view its path is straight, in the co-rotating view it curves; show both side by side with the Coriolis acceleration arrow in the rotating view.
- [Intuition] Give a number for the Coriolis acceleration at Earth's surface (e.g. $2\mechanical{\omega}_T\mechanical{v}\approx\quantity{1.5\times10^{-3}}{m\,s^{-2}}$ for $\mechanical{v}=\quantity{10}{m\,s^{-1}}$) to complement the centrifugal estimate.
- [Simplify] Fold the "Source wording" callout into the example: say directly that rotation accounts for about $\quantity{0.034}{m\,s^{-2}}$ of the $\approx\quantity{0.05}{m\,s^{-2}}$ equator–pole difference and Earth's oblateness for the rest.

### N0842

Note: [[01.11 Kinematics Exercises|01.11 Kinematics Exercises]]  
Priority: low · Graph: no · Manim: no

Well-graded exercise list with results; numerical answers I checked are correct.

- [Structure] Exercise 7 and Exercise 15 have no stated result while all others do; add the result line (Ex. 15: angle $=\arctan(1/a)$ is already in the text, move it to a **Result** line) for consistency.
- [Structure] Ordering mixes levels (Ex. 11–12 Intermediate after Challenge 9–10, Ex. 13 Basic at the end); consider sorting Basic → Intermediate → Challenge.

### N0843

Note: [[Kinematics, projectiles, and circular motion problems|Kinematics, projectiles, and circular motion problems]]  
Priority: high · Graph: yes · Manim: no

A faithful transcription of handwritten course notes; arithmetic is mostly correct, but it is disorganised, contains course-admin and personal details, and its quantities table belongs to a different note.

- [Correctness] The Physical quantities table defines $\mechanical{R}$ as "Volume flow rate, $\unit{m^3/s}$", but in this note $\mechanical{R}$ is the projectile range (4.38) and the resultant vector; the table also lists symbols that never occur here ($\mechanical{f}_s,\mechanical{f}_k,\mechanical{\mu}$, $\energy{U}_s$, $\mechanical{\vec r}_{\mathrm{CM}}$, $\mechanical{\lambda}$, $\mechanical{\sigma}$, wave number $\signal{k}$, pressure $\mechanical{P}$). Rebuild the table from the symbols actually used.
- [Correctness] Window problem: the roots of $0=-5+\sqrt3\,\Delta x-0.049(\Delta x)^2$ are $\Delta x=(\sqrt3\mp\sqrt{1.02})/0.098\approx3.2\,\unit{m}$ and $32.2\,\unit{m}$, not "3.1 m" and "32.1 m".
- [Structure] Remove the opening course-admin paragraph (instructor name and email, grading weights); it is personal data and not physics. Also remove fragments such as the scientific-notation arithmetic and the unit-conversion homework (1.23–1.54) or move them to a separate "units" note.
- [Structure] Regroup into topic sections (1D kinematics, free fall, vectors, projectiles, circular motion) with each homework problem stated before its solution; problem 4.44 stops at the setup and its solution parts (a)–(c) appear at the top of "Newton’s laws, friction, and drag problems", so move them back here.
- [Graph] Replace or supplement the scanned figures for the window problem with a native plot of $y(x)=\sqrt3x-0.049x^2$ for $x\in[0,36]$ m and the horizontal line $y=5$ m, marking the two intersections.
- [Simplify] Use consistent units notation ($\unit{m\,s^{-1}}$ as in the numbered chapters instead of $\unit{m/s}$) and apply semantic macros to symbols that are currently plain ($v_0$, $a$, $t$ in the derivation of $v^2=v_0^2+2a\Delta x$ and in 4.40, 4.44).

### N0844

Note: [[Vector kinematics and moving polar bases|Vector kinematics and moving polar bases]]  
Priority: high · Graph: yes · Manim: yes

Correct mathematics (cross-product example and polar acceleration verified), but it is a loosely ordered transcription that mixes vector algebra, work-energy, momentum and polar kinematics, with many references to sketches that are not shown.

- [Correctness] The Physical quantities table contains rows for symbols that do not appear in this note: flight time $T$, travel time $T$ (Fermat/brachistochrone), cycloid scale $\mechanical{a}$, and "$C,C_1,C_2$ complex displacement coefficients, $\unit{m}$", whereas the only $C$ here is the integration constant in $\mechanical{\dot x}=(\mechanical{F}_0/\mechanical{m})t+C$, which has units of velocity. Remove or correct these rows.
- [Structure] Reorder to match the title: vector algebra (components, dot, cross, $\epsilon_{ijk}$, triple products) → vector derivatives → planar polar basis and acceleration; move the work-energy, incline, and momentum fragments to the Chapter 2/3 problem notes. The "Dot and cross products", "Vector products" and "Expanding vector products" sections repeat each other and can be merged.
- [Simplify] Delete sentences that describe unseen handwriting or sketches ("The lower sketches contrast another spherical-coordinate labeling...", "The handwriting mixes these two expressions...") or replace them with the actual figure.
- [Manim] Animate the polar basis: a point moves on a curve, $\hat r$ and $\hat\phi$ rotate with it, and the small change $\Delta\hat r\approx\Delta\phi\,\hat\phi$ is drawn as the angle advances, illustrating $d\hat r/dt=\dot\phi\,\hat\phi$ and $d\hat\phi/dt=-\dot\phi\,\hat r$.
- [Graph] Add a graph3d figure for the cross-product example $\vec A=(1,2,3)$, $\vec B=(4,5,6)$, $\vec A\times\vec B=(-3,6,-3)$ showing that the result is perpendicular to both.
- [Structure] Angles $\theta,\phi,\psi$ and $\dot\phi$ are left uncolored here while the numbered notes write $\mechanical{\theta}$ and $\mechanical{\dot\theta}$; apply the macros consistently.
