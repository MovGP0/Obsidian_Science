---
title: "Note Improvement Tracker – 02 Physics/01 Classical Mechanics/03 Work, Energy, and Conservation"
---

> [!TLDR]
> This note tracks the review of the 17 notes in `02 Physics/01 Classical Mechanics/03 Work, Energy, and Conservation`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 7 possible errors or notation conflicts. 7 of them are verified (3 fixed, 2 rejected, 2 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N0867|N0867]] 03.05 Conservation of Mechanical Energy: The smooth-incline result $\mechanical{v}=\sqrt{2\mechanical{g}\mechanical{h}}$ holds for sliding; add that a rolling solid ball reaches only $\sqrt{10\mechanical{g}\mechanical{h}/7}$, which addresses the source-wording callout directly. **Rejected:** The example is explicitly titled and computed as sliding, and a callout already addresses the source's rolling wording. The result is correct as stated.
- [[#N0869|N0869]] 03.07 Worked Examples in Energy Methods: In the loop example, state that the ball is treated as a sliding point particle; a ball rolling without slipping needs $\mechanical{h}\ge27\mechanical{R}/10$ (neglecting its own radius). **Fixed:** Checked gh = 2gR + (7/10)gR, which gives 2.7R. Added a sentence after h >= 5R/2 that states the sliding-point assumption and gives the rolling result 27R/10.
- [[#N0873|N0873]] 03.11 Central Forces and Effective Potential: The sentence "If the central potential diverges to $-\infty$ more slowly than $1/\mechanical{r}^2$, the barrier still prevents the particle from reaching the origin" is correct, but add the converse (for $\energy{U}\propto-1/\mechanical{r}^n$ with $n>2$ the particle can fall in), so the condition is understood as a threshold. **Rejected:** The claim itself says the statement is correct. Adding the converse would be an extension, not an error fix.
- [[#N0876|N0876]] 03.14 Work and Energy Exercises: $\mechanical{L}$ is used both for angular momentum (Exercise 13) and for rod length (Exercise 14), and the table lists it twice. Rename the rod length, for example to $\mechanical{\ell}$. **Fixed:** Renamed the rod length to \mechanical{\ell} in Exercise 14 (statement and result) and in its table row.
- [[#N0877|N0877]] Conservative forces, work integrals, and potential: Several internal links point to the wrong sections. "Comparing both sides of the vector triple product" cites \[\[#Work along path a\]\] but means the BAC–CAB section. "Work along path b" cites \[\[#Work and change in kinetic energy\]\] for its integral. "Rocket momentum problem" cites the semicircular-wire section of the rocket note for the momentum balance; the correct target is "Rocket momentum balance". **Partly:** Retargeted the triple-product link to #BAC–CAB rule and the rocket link to #Rocket momentum balance (the heading exists in the rocket note). Left the path-b link to #Work and change in kinetic energy unchanged, because that section defines the work integral W = ∫F·dr, so the reference is plausible.
- [[#N0877|N0877]] Conservative forces, work integrals, and potential: The Stokes restatement $\int_S(\nabla\times\vec A)\cdot\mathrm d\mechanical{\vec A}$ uses $A$ for both the vector field and the area element. Rename the field (for example $\vec G$) or the area element ($\mathrm d\vec S$). **Fixed:** Renamed the general field to \vec G in the sentence and in the equation; kept d\mechanical{\vec A} as the area element, matching the table.
- [[#N0878|N0878]] Work, energy, and mechanical power problems: The box-on-incline problem never gives the initial speed, yet records $\Delta x=2.03\unit{m}$. That value implies $v_0=\quantity{5}{m\,s^{-1}}$, so state it. Problem 47 (sled at 30°) likewise reports $\mu_k=0.117$ without the tension and mass used. **Partly:** Confirmed that v0 = 5 m/s with mu_k retained gives 2.02–2.03 m, and added that the page gives no initial speed and that the value corresponds to v0 ≈ 5 m/s. Problem 47 cannot be reconstructed (one equation, two unknowns T and m), so left it unchanged.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N0862 | [[03.00 Work, Energy, and Conservation\|03.00 Work, Energy, and Conservation]] | Analyzed | low | no | no | [[#N0862\|View]] |
| N0863 | [[03.01 Origins of the Concept of Energy\|03.01 Origins of the Concept of Energy]] | Analyzed | low | no | no | [[#N0863\|View]] |
| N0864 | [[03.02 Work Done by a Force\|03.02 Work Done by a Force]] | Analyzed | medium | yes | no | [[#N0864\|View]] |
| N0865 | [[03.03 Kinetic Energy and the Work–Energy Theorem\|03.03 Kinetic Energy and the Work–Energy Theorem]] | Analyzed | medium | no | no | [[#N0865\|View]] |
| N0866 | [[03.04 Conservative Forces and Potential Energy\|03.04 Conservative Forces and Potential Energy]] | Analyzed | medium | yes | no | [[#N0866\|View]] |
| N0867 | [[03.05 Conservation of Mechanical Energy\|03.05 Conservation of Mechanical Energy]] | Analyzed | medium | yes | yes | [[#N0867\|View]] |
| N0868 | [[03.06 Power\|03.06 Power]] | Analyzed | low | yes | no | [[#N0868\|View]] |
| N0869 | [[03.07 Worked Examples in Energy Methods\|03.07 Worked Examples in Energy Methods]] | Analyzed | medium | yes | yes | [[#N0869\|View]] |
| N0870 | [[03.08 Energy Diagrams and Qualitative Analysis of Motion\|03.08 Energy Diagrams and Qualitative Analysis of Motion]] | Analyzed | medium | no | yes | [[#N0870\|View]] |
| N0871 | [[03.09 Work Along Closed Paths and Potential Energy\|03.09 Work Along Closed Paths and Potential Energy]] | Analyzed | medium | yes | no | [[#N0871\|View]] |
| N0872 | [[03.10 Work Done by Nonconservative Forces\|03.10 Work Done by Nonconservative Forces]] | Analyzed | medium | no | no | [[#N0872\|View]] |
| N0873 | [[03.11 Central Forces and Effective Potential\|03.11 Central Forces and Effective Potential]] | Analyzed | high | yes | yes | [[#N0873\|View]] |
| N0874 | [[03.12 Nonmechanical Forms of Energy\|03.12 Nonmechanical Forms of Energy]] | Analyzed | medium | no | no | [[#N0874\|View]] |
| N0875 | [[03.13 Gravitational Forces and Potential\|03.13 Gravitational Forces and Potential]] | Analyzed | medium | yes | no | [[#N0875\|View]] |
| N0876 | [[03.14 Work and Energy Exercises\|03.14 Work and Energy Exercises]] | Analyzed | low | no | no | [[#N0876\|View]] |
| N0877 | [[Conservative forces, work integrals, and potential\|Conservative forces, work integrals, and potential]] | Analyzed | high | yes | yes | [[#N0877\|View]] |
| N0878 | [[Work, energy, and mechanical power problems\|Work, energy, and mechanical power problems]] | Analyzed | high | yes | no | [[#N0878\|View]] |

## Suggestions

### N0862

Note: [[03.00 Work, Energy, and Conservation|03.00 Work, Energy, and Conservation]]  
Priority: low · Graph: no · Manim: no

Clear chapter hub with an accurate summary.

- [Structure] Add summary bullets for 3.9–3.13 (closed-path test, $\Delta\energy{E}_{\mathrm{mech}}=\energy{W}_{\mathrm{nc}}$, effective potential $\energy{U}_{\mathrm{eff}}=\energy{U}+\mechanical{L}^2/(2\mechanical{m}\mechanical{r}^2)$), which are currently not summarised.

### N0863

Note: [[03.01 Origins of the Concept of Energy|03.01 Origins of the Concept of Energy]]  
Priority: low · Graph: no · Manim: no

Accurate concise history; appropriate as is.

- [Intuition] Add one sentence on why the vis-viva dispute was resolved (momentum $\mechanical{m}\mechanical{v}$ and $\mechanical{m}\mechanical{v}^2$ are both conserved in elastic collisions, but measure different things: force integrated over time vs over distance), which links directly to 2.12 and 3.3.

### N0864

Note: [[03.02 Work Done by a Force|03.02 Work Done by a Force]]  
Priority: medium · Graph: yes · Manim: no

Correct definition, but the line integral is introduced without the geometric picture or an example where the path matters.

- [Graph] Plot $\mechanical{F}_x(\mechanical{x})$ for a spring ($-\mechanical{k}\mechanical{x}$) on $[0,\mechanical{x}_B]$ with the shaded area equal to the work, illustrating $\energy{W}=\int\mechanical{F}_x\,dx$ as signed area.
- [Intuition] Explain the sign via $\mechanical{\vec F}\cdot d\mechanical{\vec r}=\lVert\mechanical{\vec F}\rVert\cos\varphi\,ds$, with the zero-work case of a force perpendicular to motion (normal force, centripetal force in uniform circular motion).
- [Example] Add a numerical example with an angled pull (e.g. $\quantity{50}{N}$ at $30^\circ$ over $\quantity{10}{m}$ gives $\quantity{433}{J}$), and a path-dependent counterexample (friction along two different paths) to prepare 3.4.

### N0865

Note: [[03.03 Kinetic Energy and the Work–Energy Theorem|03.03 Kinetic Energy and the Work–Energy Theorem]]  
Priority: medium · Graph: no · Manim: no

Clean definition and proof; it needs a worked example and physical interpretation of why $\tfrac12\mechanical{m}\mechanical{v}^2$ appears.

- [Example] Add a worked example, e.g. stopping distance from $\mechanical{v}_0$ with friction: $-\mechanical{\mu}_d\mechanical{m}\mechanical{g}\mechanical{d}=-\tfrac12\mechanical{m}\mechanical{v}_0^2$ gives $\mechanical{d}=\mechanical{v}_0^2/(2\mechanical{\mu}_d\mechanical{g})$, and note that doubling the speed quadruples the distance.
- [Simplify] In the proof, state explicitly the substitution $d\mechanical{\vec r}=\mechanical{\vec v}\,dt$ before the second equality; it is the only non-obvious step.
- [Intuition] Contrast with the impulse–momentum theorem (force integrated over time vs over displacement) to show the two theorems are complementary.

### N0866

Note: [[03.04 Conservative Forces and Potential Energy|03.04 Conservative Forces and Potential Energy]]  
Priority: medium · Graph: yes · Manim: no

Correct and carefully worded, but the relation $\mechanical{\vec F}=-\nabla\energy{U}$ is given without the 1D intuition or a picture.

- [Intuition] Start from 1D: $\mechanical{F}_x=-d\energy{U}/d\mechanical{x}$, i.e. force points downhill on the potential curve; then generalise to the gradient.
- [Graph] Plot $\energy{U}(\mechanical{x})=\tfrac12\mechanical{k}\mechanical{x}^2$ and $\mechanical{F}(\mechanical{x})=-\mechanical{k}\mechanical{x}$ together (or a 2D contour plot of $\energy{U}=\mechanical{m}\mechanical{g}\mechanical{y}$ with force arrows perpendicular to the equipotentials).
- [Example] Show how to recover $\energy{U}$ from $\mechanical{\vec F}$ for the gravitational force by integrating from infinity, making the "additive constant" concrete.
- [Simplify] The "Source wording" callout is subtle; shorten it to one sentence in the main text ("Friction does negative work relative to the surface; what is frame-independent is the dissipation").

### N0867

Note: [[03.05 Conservation of Mechanical Energy|03.05 Conservation of Mechanical Energy]]  
Priority: medium · Graph: yes · Manim: yes

Correct; the friction example stops at an expression and the energy exchange is not visualised.

- [Example] Finish the friction example with the final speed: $\mechanical{v}=\sqrt{2\mechanical{g}\mechanical{L}(\sin\mechanical{\alpha}-\mechanical{\mu}_d\cos\mechanical{\alpha})}$, with numbers (e.g. $\mechanical{L}=\quantity{5}{m}$, $\mechanical{\alpha}=30^\circ$, $\mechanical{\mu}_d=0.2$).
- [Graph] Plot $\energy{K}$, $\energy{U}$ and $\energy{E}$ versus position along the incline for the frictionless and frictional cases, showing the constant total line and the linearly decreasing one.
- [Manim] Animate a bead sliding on a curved frictionless track alongside live energy bars for $\energy{K}$ and $\energy{U}$ that trade off while their sum stays constant.
- [Correctness] The smooth-incline result $\mechanical{v}=\sqrt{2\mechanical{g}\mechanical{h}}$ holds for sliding; add that a rolling solid ball reaches only $\sqrt{10\mechanical{g}\mechanical{h}/7}$, which addresses the source-wording callout directly.

### N0868

Note: [[03.06 Power|03.06 Power]]  
Priority: low · Graph: yes · Manim: no

Correct and short; one realistic example would make it useful.

- [Example] Add a car example with numbers: drag $\tfrac12\mechanical{\rho}\mechanical{C}_d\mechanical{A}\mechanical{v}^2$ with $\mechanical{C}_d\mechanical{A}\approx\quantity{0.7}{m^2}$ and $\mechanical{\rho}=\quantity{1.2}{kg\,m^{-3}}$ at $\quantity{30}{m\,s^{-1}}$ needs $\approx\quantity{11}{kW}$, and $\approx\quantity{38}{kW}$ at $\quantity{45}{m\,s^{-1}}$.
- [Graph] Plot required power versus speed for constant rolling resistance ($\propto\mechanical{v}$) and aerodynamic drag ($\propto\mechanical{v}^3$) on $\mechanical{v}\in[0,50]\,\unit{m\,s^{-1}}$, showing where drag dominates.

### N0869

Note: [[03.07 Worked Examples in Energy Methods|03.07 Worked Examples in Energy Methods]]  
Priority: medium · Graph: yes · Manim: yes

Good, correct examples; the pendulum example ends without a result and the loop example assumes a sliding point particle without saying so.

- [Correctness] In the loop example, state that the ball is treated as a sliding point particle; a ball rolling without slipping needs $\mechanical{h}\ge27\mechanical{R}/10$ (neglecting its own radius).
- [Manim] Animate the loop: release from $\mechanical{h}<5\mechanical{R}/2$ (ball leaves the track and falls inward) versus $\mechanical{h}=5\mechanical{R}/2$ (just completes), with the normal-force arrow shrinking to zero at the top.
- [Example] Give the pendulum example a concrete drop height (e.g. break point $\quantity{1}{m}$ above the floor, $\mechanical{\ell}=\quantity{1}{m}$, $\mechanical{\theta}_0=60^\circ$: $\mechanical{v}\approx\quantity{3.13}{m\,s^{-1}}$, range $\approx\quantity{1.41}{m}$) and fold the source-wording callout into the text.
- [Graph] Plot the normal force at the top, $\mechanical{N}/(\mechanical{m}\mechanical{g})=2\mechanical{h}/\mechanical{R}-5$, versus $\mechanical{h}/\mechanical{R}\in[2,4]$, showing the threshold at $2.5$.
- [Simplify] In the pulley example, explain why friction work uses $\mechanical{h}$ (block 2 slides the same distance as block 1 descends).

### N0870

Note: [[03.08 Energy Diagrams and Qualitative Analysis of Motion|03.08 Energy Diagrams and Qualitative Analysis of Motion]]  
Priority: medium · Graph: no · Manim: yes

Clear, correct, and already illustrated with a good native double-well plot; mainly lacks a dynamic picture and the link to phase space.

- [Manim] Animate a ball moving in the double-well $\energy{U}(\mechanical{x})$ of Fig. 3.1 at two energies: below $\energy{U}_{\max}$ it oscillates between $T_1,T_2$ in one well; above it travels across both wells; show the kinetic energy as the gap between the $\energy{E}$ line and the curve.
- [Intuition] Explain the unstable case with the inverted-oscillator equation $\mechanical{m}\ddot\xi=\lvert\energy{U}''\rvert\xi$, giving $e^{\pm\kappa t}$ with $\kappa=\sqrt{\lvert\energy{U}''\rvert/\mechanical{m}}$, so "grows exponentially" is justified.
- [Example] Add a derivation of $\signal{\omega}=\sqrt{\energy{U}''(\mechanical{x}_0)/\mechanical{m}}$ by Taylor-expanding $\energy{U}$ to second order, and apply it to the double-well (minimum at $\mechanical{x}=\pm1$).
- [Links] Link to the phase-space note \[\[04.05 Phase Space of the Harmonic Oscillator\]\], since each horizontal energy line corresponds to a closed or open phase-space orbit.

### N0871

Note: [[03.09 Work Along Closed Paths and Potential Energy|03.09 Work Along Closed Paths and Potential Energy]]  
Priority: medium · Graph: yes · Manim: no

Correct and well chosen examples; the curl test is not motivated and the swirling field cries out for a picture.

- [Graph] Plot the vector field $(-\mechanical{y},\mechanical{x})$ on $[-2,2]^2$ with the circle of radius $\mechanical{R}=1.5$, showing the field everywhere tangent to the path (hence positive work all the way round), and next to it a conservative field such as $(-\mechanical{x},-\mechanical{y})$.
- [Simplify] Compute the circle integral explicitly with $\mechanical{x}=\mechanical{R}\cos t$, $\mechanical{y}=\mechanical{R}\sin t$, and check it against Stokes' theorem ($\text{curl}\cdot\text{area}=2\cdot\pi\mechanical{R}^2$).
- [Intuition] Mention the classic counterexample for the simply-connected condition, $\mechanical{\vec F}=(-\mechanical{y},\mechanical{x})/(\mechanical{x}^2+\mechanical{y}^2)$ (curl zero but circulation $2\pi$ around the origin), to explain why the topological condition matters.
- [Example] For the central-force example, show that the potential is obtained explicitly for gravity, $\mechanical{F}=-\mechanical{G}\mechanical{m}\mechanical{M}/\mechanical{r}^2$ → $\energy{U}=-\mechanical{G}\mechanical{m}\mechanical{M}/\mechanical{r}$.

### N0872

Note: [[03.10 Work Done by Nonconservative Forces|03.10 Work Done by Nonconservative Forces]]  
Priority: medium · Graph: no · Manim: no

Correct statement; the diver example is a rough estimate whose own caveat undermines it.

- [Example] Redo the diver example properly: during water penetration to depth $\mechanical{d}$, $\energy{W}_{\mathrm{visc}}=-\mechanical{m}\mechanical{g}(\mechanical{h}+\mechanical{d})+\energy{W}_{\mathrm{buoy}}$; with buoyancy roughly cancelling weight underwater, the estimate $-\mechanical{m}\mechanical{g}\mechanical{h}$ is reasonable, and give the average drag force for e.g. $\mechanical{d}=\quantity{3}{m}$ ($\approx\quantity{2.3}{kN}$).
- [Intuition] Derive $\Delta\energy{E}_{\mathrm{mech}}=\energy{W}_{\mathrm{nc}}$ in one line from $\energy{W}_{\mathrm{net}}=\energy{W}_c+\energy{W}_{\mathrm{nc}}=\Delta\energy{K}$ and $\energy{W}_c=-\Delta\energy{U}$.
- [Links] Link to \[\[03.05 Conservation of Mechanical Energy\]\] and to the friction example there, and to \[\[03.12 Nonmechanical Forms of Energy\]\] for where the dissipated energy goes.

### N0873

Note: [[03.11 Central Forces and Effective Potential|03.11 Central Forces and Effective Potential]]  
Priority: high · Graph: yes · Manim: yes

Correct but very compressed; the effective potential is introduced without derivation, example, or the plot that is its whole point.

- [Simplify] Derive $\energy{U}_{\mathrm{eff}}$: write $\energy{E}=\tfrac12\mechanical{m}(\mechanical{\dot r}^2+\mechanical{r}^2\mechanical{\dot\phi}^2)+\energy{U}$ using the polar velocity from 1.8, then substitute $\mechanical{\dot\phi}=\mechanical{L}/(\mechanical{m}\mechanical{r}^2)$.
- [Graph] Plot for the Kepler case $\energy{U}=-\mechanical{k}/\mechanical{r}$ (scaled units $\mechanical{k}=\mechanical{L}=\mechanical{m}=1$, $\mechanical{r}\in[0.2,6]$): $\energy{U}$, the barrier $1/(2\mechanical{r}^2)$, their sum $\energy{U}_{\mathrm{eff}}$ with minimum at $\mechanical{r}=1$, and horizontal lines for a bound ($\energy{E}<0$), circular ($\energy{E}=-1/2$) and unbound ($\energy{E}>0$) orbit with turning points marked.
- [Manim] Animate an elliptical orbit in the plane side by side with a dot moving back and forth between the turning points in the $\energy{U}_{\mathrm{eff}}(\mechanical{r})$ well, synchronised so the radial oscillation corresponds to perihelion/aphelion.
- [Correctness] The sentence "If the central potential diverges to $-\infty$ more slowly than $1/\mechanical{r}^2$, the barrier still prevents the particle from reaching the origin" is correct, but add the converse (for $\energy{U}\propto-1/\mechanical{r}^n$ with $n>2$ the particle can fall in), so the condition is understood as a threshold.
- [Intuition] Explain the barrier physically: as $\mechanical{r}$ shrinks at fixed $\mechanical{L}$, the angular speed and hence the tangential kinetic energy grow like $1/\mechanical{r}^2$, which is why it acts as a repulsive potential in the radial equation.

### N0874

Note: [[03.12 Nonmechanical Forms of Energy|03.12 Nonmechanical Forms of Energy]]  
Priority: medium · Graph: no · Manim: no

Short and correct, but the energy balance is stated without motivation and the braking example stops before using it.

- [Intuition] Before the balance equation, add one sentence on why friction "loses" mechanical energy: the work goes into random microscopic motion (internal energy), so the total is still conserved.
- [Example] Finish the braking example with the balance: choose the car plus brakes as the system, set $\thermal{Q}\approx0$ and $\energy{W}_{\mathrm{ext}}\approx0$ during the stop, conclude $\Delta\energy{E}_{\mathrm{int}}=+\quantity{675}{kJ}$, then estimate the disc temperature rise with $\Delta T=\Delta\energy{E}_{\mathrm{int}}/(m_{\mathrm{disc}}c)$ for an assumed disc mass, so the reported $200\unit{{}^\circ C}$ means something.
- [Simplify] Say directly that the result depends on the system boundary: friction between the car and the road is internal if the road is in the system and external if it is not. Readers often get stuck on this.
- [Structure] Remove the table row with "—" for brake temperature, or give it a symbol such as $\thermal{T}_{\mathrm{disc}}$.

### N0875

Note: [[03.13 Gravitational Forces and Potential|03.13 Gravitational Forces and Potential]]  
Priority: medium · Graph: yes · Manim: no

Correct and compact, but it gives $U=-GMm/r$ without the work integral and has no picture of the potential well.

- [Simplify] Derive $\energy{U}(\mechanical{r})$ in two lines from $\energy{U}(\mechanical{r})=-\int_\infty^{\mechanical{r}}\mechanical{\vec F}\cdot\mathrm d\mechanical{\vec r}$, so the negative sign follows from the $\energy{U}(\infty)=0$ convention instead of being stated.
- [Graph] Plot $\energy{U}(r)/(GMm/R)=-R/r$ for $r/R\in[1,6]$, with horizontal lines at $E<0$ (bound, with turning point marked), $E=0$ (escape threshold) and $E>0$, to show binding energy and escape speed visually.
- [Intuition] Add the limiting case: for $r=R+h$ with $h\ll R$, expanding $-GMm/(R+h)$ gives $\mathrm{const}+mgh$, which links to the uniform-field result.
- [Example] Plug in Earth's values ($GM_E\approx3.99\times10^{14}\unit{m^3\,s^{-2}}$, $R_E\approx6.37\times10^6\unit{m}$) to get the $11.2\unit{km\,s^{-1}}$, and note that $v_{\mathrm{esc}}$ does not depend on $m$ or on launch direction.

### N0876

Note: [[03.14 Work and Energy Exercises|03.14 Work and Energy Exercises]]  
Priority: low · Graph: no · Manim: no

A clean exercise list with correct results; only the notation and some missing answers need work.

- [Correctness] $\mechanical{L}$ is used both for angular momentum (Exercise 13) and for rod length (Exercise 14), and the table lists it twice. Rename the rod length, for example to $\mechanical{\ell}$.
- [Structure] Exercises 10 and 15 have no **Result**. Add short results, for example Exercise 10: $x_0=2B/A$, and bounded oscillation between two turning points for $-A^2/(4B)<E<0$.
- [Simplify] Exercise 3 says "ball" on a smooth incline. State that it slides without rolling, because a rolling ball gives $v=\sqrt{10gh/7}\approx\quantity{5.29}{m\,s^{-1}}$.

### N0877

Note: [[Conservative forces, work integrals, and potential|Conservative forces, work integrals, and potential]]  
Priority: high · Graph: yes · Manim: yes

An accurate but scattered lecture transcription that mixes summation notation, vector identities, rocket and polar-velocity review into the conservative-force story, and contains several broken internal links.

- [Correctness] Several internal links point to the wrong sections. "Comparing both sides of the vector triple product" cites \[\[#Work along path a\]\] but means the BAC–CAB section. "Work along path b" cites \[\[#Work and change in kinetic energy\]\] for its integral. "Rocket momentum problem" cites the semicircular-wire section of the rocket note for the momentum balance; the correct target is "Rocket momentum balance".
- [Correctness] The Stokes restatement $\int_S(\nabla\times\vec A)\cdot\mathrm d\mechanical{\vec A}$ uses $A$ for both the vector field and the area element. Rename the field (for example $\vec G$) or the area element ($\mathrm d\vec S$).
- [Structure] Move the summation, BAC–CAB, Levi-Civita, rocket, and polar-velocity sections to the vector-math and rocket notes, or into a clearly labelled appendix. Reorder the rest as: work–energy theorem → path a/b example → path dependence → potential → $\vec F=-\nabla U$ → curl test → 1D potentials and turning points.
- [Intuition] After computing $\energy{W}_a=2$ and $\energy{W}_b=3/2$, say explicitly that the field $(\mechanical{y},2\mechanical{x})$ is not conservative because $\partial F_y/\partial x-\partial F_x/\partial y=1\ne0$. This is the payoff of the example, and the curl section should refer back to it.
- [Graph] Add a native 2D vector-field plot of $\vec F=(y,2x)$ on $[0,1.2]^2$, with path a (through $Q=(1,0)$), path b (diagonal) and path c ($y=x^2$) overlaid. Label each path with its work: 2, 3/2, and $\int_0^1(x^2+4x^2)\,dx=5/3$.
- [Manim] Move a particle along paths a, b and c in turn, drawing the local $\vec F\cdot\mathrm d\vec r$ arrow and a running work counter, so the reader sees the three totals diverge.

### N0878

Note: [[Work, energy, and mechanical power problems|Work, energy, and mechanical power problems]]  
Priority: high · Graph: yes · Manim: no

Numerically sound worked problems, but the note is a long chronological dump with broken headings, missing given data, and much unrelated kinematics and force material.

- [Structure] Fix the broken headings "##### )" and "##### ) — Hooke's law". Move the projectile ("Week 2 worksheet", "Chapter 4") and pure force-balance material ("Chapter 6", "Chapter 8") to the Newton's-laws or kinematics notes, so this note covers work, energy and power only.
- [Correctness] The box-on-incline problem never gives the initial speed, yet records $\Delta x=2.03\unit{m}$. That value implies $v_0=\quantity{5}{m\,s^{-1}}$, so state it. Problem 47 (sled at 30°) likewise reports $\mu_k=0.117$ without the tension and mass used.
- [Simplify] Use one notation throughout. Many symbols are uncoloured ($F$, $v$, $m$, $K$, $U$) next to macro-coloured ones; apply \mechanical{} and \energy{} consistently, and use one symbol for kinetic friction ($F_{\mathrm k}$ and $f_{\mathrm k}$ are both used).
- [Graph] Replace the "Work as area under force curve" image with a native plot of the spring force $F=kx$ for $x\in[0,0.03]\unit{m}$ with $k=500\unit{N/m}$, shading the triangle whose area is $0.225\unit{J}$, to tie together the area picture and the next example.
- [Intuition] In "Work by a nonconservative force", add one sentence explaining why $W_{\mathrm{nc}}=\Delta K+\Delta U$: the conservative work is already counted as $-\Delta U$. Then add a one-line flowchart: identify forces → conservative ones go into $U$ → the rest go into $W_{\mathrm{nc}}$.
- [Example] The email problem should end with the explicit result $v_f=\sqrt{2g\Delta s(m_2\sin\theta-m_1-\mu_k m_2\cos\theta)/(m_1+m_2)}$ and a check that $v_f$ is real only when $m_2\sin\theta>m_1+\mu_k m_2\cos\theta$.
