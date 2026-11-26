---
title: "Note Improvement Tracker – 02 Physics/01 Classical Mechanics/08 Fundamentals of Fluid Mechanics"
---

> [!TLDR]
> This note tracks the review of the 16 notes in `02 Physics/01 Classical Mechanics/08 Fundamentals of Fluid Mechanics`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 2 possible errors or notation conflicts. 2 of them are verified (2 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N0956|N0956]] 08.07 Viscosity and Laminar Flow: Notation clash: $\mechanical{L}$ is the pipe length in $\mechanical{Q}=\pi\mechanical{R}^4\Delta\mechanical{p}/(8\mechanical{\eta}\mechanical{L})$ and then the characteristic length in $\mathrm{Re}=\mechanical{\rho}\mechanical{v}\mechanical{L}/\mechanical{\eta}$, which the text says should be the diameter; write the pipe Reynolds number with $\mechanical{D}$. **Fixed:** Reynolds number now uses characteristic length \mechanical{\ell}, with pipe form Re=\rho v D/\eta and D=2R; table split into pipe length L and characteristic length/diameter rows.
- [[#N0959|N0959]] 08.10 Worked Examples in Fluid Mechanics: Notation clash: "$\mechanical{F}=\int_0^H\mechanical{p}(\mechanical{z})\mechanical{L}\,dz$" uses $\mechanical{L}$ for the dam width, and "$\mechanical{L}=\tfrac12\mechanical{C}_L\mechanical{\rho}\mechanical{v}^2\mechanical{S}$" uses $\mechanical{L}$ for a force; rename the width (e.g. $\mechanical{W}$) or the lift (e.g. $\mechanical{F}_L$). **Fixed:** Renamed lift to \mechanical{F}_L in the formula and table; dam force value 2.45e9 N rechecked and correct.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N0949 | [[08.00 Fundamentals of Fluid Mechanics\|08.00 Fundamentals of Fluid Mechanics]] | Analyzed | low | no | no | [[#N0949\|View]] |
| N0950 | [[08.01 Fluids in the Continuum Limit\|08.01 Fluids in the Continuum Limit]] | Analyzed | low | yes | no | [[#N0950\|View]] |
| N0951 | [[08.02 Pressure and Hydrostatics\|08.02 Pressure and Hydrostatics]] | Analyzed | medium | yes | no | [[#N0951\|View]] |
| N0952 | [[08.03 Pascal's Principle\|08.03 Pascal's Principle]] | Analyzed | low | no | yes | [[#N0952\|View]] |
| N0953 | [[08.04 Archimedes' Principle\|08.04 Archimedes' Principle]] | Analyzed | medium | no | no | [[#N0953\|View]] |
| N0954 | [[08.05 Continuity Equation\|08.05 Continuity Equation]] | Analyzed | low | no | yes | [[#N0954\|View]] |
| N0955 | [[08.06 Bernoulli's Equation\|08.06 Bernoulli's Equation]] | Analyzed | medium | yes | yes | [[#N0955\|View]] |
| N0956 | [[08.07 Viscosity and Laminar Flow\|08.07 Viscosity and Laminar Flow]] | Analyzed | medium | yes | no | [[#N0956\|View]] |
| N0957 | [[08.08 Euler Equation for Fluid Flow\|08.08 Euler Equation for Fluid Flow]] | Analyzed | high | no | no | [[#N0957\|View]] |
| N0958 | [[08.09 Navier–Stokes Equation\|08.09 Navier–Stokes Equation]] | Analyzed | medium | yes | no | [[#N0958\|View]] |
| N0959 | [[08.10 Worked Examples in Fluid Mechanics\|08.10 Worked Examples in Fluid Mechanics]] | Analyzed | medium | yes | no | [[#N0959\|View]] |
| N0960 | [[08.11 Waves in Fluids\|08.11 Waves in Fluids]] | Analyzed | medium | yes | yes | [[#N0960\|View]] |
| N0961 | [[08.12 Surface Tension and Capillarity\|08.12 Surface Tension and Capillarity]] | Analyzed | medium | yes | no | [[#N0961\|View]] |
| N0962 | [[08.13 Flotation and Stability\|08.13 Flotation and Stability]] | Analyzed | high | no | yes | [[#N0962\|View]] |
| N0963 | [[08.14 Fluid Mechanics Exercises\|08.14 Fluid Mechanics Exercises]] | Analyzed | low | no | no | [[#N0963\|View]] |
| N0964 | [[Buoyancy, continuity, and Bernoulli problems\|Buoyancy, continuity, and Bernoulli problems]] | Analyzed | high | yes | yes | [[#N0964\|View]] |

## Suggestions

### N0949

Note: [[08.00 Fundamentals of Fluid Mechanics|08.00 Fundamentals of Fluid Mechanics]]  
Priority: low · Graph: no · Manim: no

This is a clear chapter hub with correct summary formulas.

- [Links] Add links for the notes not listed (08.01, 08.08, 08.09, 08.10, 08.11, 08.12, 08.13) so the hub covers the whole chapter.

### N0950

Note: [[08.01 Fluids in the Continuum Limit|08.01 Fluids in the Continuum Limit]]  
Priority: low · Graph: yes · Manim: no

The conceptual introduction is clear; it could make the two-sided size condition on the fluid element more concrete.

- [Example] Give numbers for the "small but not too small" element: a cube of air $\quantity{1}{\mu m}$ on a side contains about $2.5\times10^7$ molecules, so relative fluctuations are about $1/\sqrt N\approx2\times10^{-4}$.
- [Graph] Schematic plot, clearly labelled qualitative, of measured density against sampling-volume size: noisy at molecular scales, a flat plateau in the continuum range, and a drift at macroscopic scales where real gradients appear.
- [Intuition] Contrast the Eulerian description with the Lagrangian one (following a parcel) in one sentence, since 08.08 combines them in the material derivative, and introduce the Knudsen number $\mathrm{Kn}=\lambda/\mechanical{L}$ as the validity criterion.

### N0951

Note: [[08.02 Pressure and Hydrostatics|08.02 Pressure and Hydrostatics]]  
Priority: medium · Graph: yes · Manim: no

The note is correct, but it quotes the hydrostatic equation without the slab force balance, and a buoyancy puzzle sits in the wrong note.

- [Simplify] Show the force balance on a thin horizontal slab, $\mechanical{p}(\mechanical{z})\mechanical{A}-\mechanical{p}(\mechanical{z}+d\mechanical{z})\mechanical{A}-\mechanical{\rho}\mechanical{g}\mechanical{A}\,d\mechanical{z}=0$, which gives $d\mechanical{p}/d\mechanical{z}=-\mechanical{\rho}\mechanical{g}$.
- [Example] Add numbers: each $\quantity{10}{m}$ of water adds about $\quantity{1}{atm}$, and the given molecular mass yields a scale height of about $\quantity{8.4}{km}$ at $\quantity{288}{K}$.
- [Structure] Move "Why the water level falls when a dense load sinks" to \[\[08.04 Archimedes' Principle\]\], where it belongs logically.
- [Graph] Two-panel plot of $\mechanical{p}(\mechanical{z})$ in atm: linear increase with depth in water (0 to 30 m) and exponential decrease $\mechanical{p}_0e^{-\mechanical{z}/\mechanical{H}}$ in the atmosphere (0 to 30 km).
- [Structure] $k_B$ in the scale height is uncoloured; apply the macro group used for Boltzmann's constant elsewhere in the vault.

### N0952

Note: [[08.03 Pascal's Principle|08.03 Pascal's Principle]]  
Priority: low · Graph: no · Manim: yes

The note is correct and clear; a short justification and a numerical example would complete it.

- [Intuition] Explain why the principle follows from hydrostatics: adding $\Delta\mechanical{p}$ at one point shifts the whole profile $\mechanical{p}(\mechanical{z})$ by the same constant, because $d\mechanical{p}/d\mechanical{z}=-\mechanical{\rho}\mechanical{g}$ fixes only pressure differences.
- [Example] Add a numerical hydraulic-lift example: with an area ratio of 100, a force of about $\quantity{98}{N}$ lifts a $\quantity{1000}{kg}$ car, but the small piston must move 100 times farther.
- [Manim] Animate a hydraulic press: the small piston moves down a long way while the large piston rises a short way, with equal shaded displaced volumes and force arrows scaled by the areas.

### N0953

Note: [[08.04 Archimedes' Principle|08.04 Archimedes' Principle]]  
Priority: medium · Graph: no · Manim: no

The note is correct and has a rigorous divergence-theorem proof, but it lacks the elementary pressure-difference picture that beginners need.

- [Intuition] Before the divergence-theorem proof, add the box argument: a submerged cube of height $\mechanical{h}$ and face area $\mechanical{A}$ feels $\mechanical{\rho}_f\mechanical{g}\mechanical{h}\mechanical{A}$ more force on its bottom than on its top, which equals the displaced weight, and the side forces cancel.
- [Intuition] Add the replacement argument: a fluid parcel of the same shape is in equilibrium, so the surrounding pressure forces must balance its weight, whatever fills the space.
- [Structure] The proof uses the gradient form of the divergence theorem, $\oint\mechanical{p}\,d\mechanical{\vec A}=\int\nabla\mechanical{p}\,dV$; state this explicitly because readers may know only the vector-field form.
- [Example] Add a sinking-body example (apparent weight of a submerged stone) beside the iceberg, and move in the boat-and-load puzzle currently in 08.02.

### N0954

Note: [[08.05 Continuity Equation|08.05 Continuity Equation]]  
Priority: low · Graph: no · Manim: yes

The note is correct and concise; one derivation sentence and a visual would help beginners.

- [Simplify] Derive the equation in one sentence: in time $dt$, mass $\mechanical{\rho}_1\mechanical{A}_1\mechanical{v}_1\,dt$ enters and $\mechanical{\rho}_2\mechanical{A}_2\mechanical{v}_2\,dt$ leaves, and steady flow allows no accumulation in between.
- [Links] Point to the local form $\partial_t\mechanical{\rho}+\nabla\cdot(\mechanical{\rho}\mechanical{\vec v})=0$ in \[\[08.08 Euler Equation for Fluid Flow\]\].
- [Manim] Animate equal-volume fluid slices moving through a pipe constriction, each slice becoming longer and faster in the narrow section, with the product $\mechanical{A}\mechanical{v}$ displayed as constant.

### N0955

Note: [[08.06 Bernoulli's Equation|08.06 Bernoulli's Equation]]  
Priority: medium · Graph: yes · Manim: yes

The note is correct, but it does not explain the pressure-work term in the derivation and the Venturi example has no numbers.

- [Simplify] Explain the pressure-work term: the upstream fluid pushes the element forward and does work $\mechanical{p}_1\mechanical{A}_1\mechanical{v}_1\,dt=\mechanical{p}_1\delta\mechanical{V}$, the downstream fluid does $-\mechanical{p}_2\delta\mechanical{V}$, and continuity makes the two volumes equal.
- [Example] Make the Venturi example quantitative and give the flowmeter formula $\mechanical{v}_1=\sqrt{2\Delta\mechanical{p}/(\mechanical{\rho}[(\mechanical{A}_1/\mechanical{A}_2)^2-1])}$; link exercise 3 in \[\[08.14 Fluid Mechanics Exercises\]\].
- [Intuition] Address the common misconception: the pressure gradient from the wide section to the throat is what accelerates the fluid into the constriction; low pressure is not caused by fast fluid "pushing less".
- [Graph] Plot $\mechanical{v}(x)$ and $\mechanical{p}(x)$ along a horizontal Venturi tube with area $\mechanical{A}(x)=\mechanical{A}_1[1-0.75e^{-x^2}]$ for $x\in[-3,3]$, showing the speed peak and the pressure dip.
- [Manim] Animate flow through a Venturi tube with manometer columns above the wide and narrow sections, the narrow-section column falling as the flow speed increases.

### N0956

Note: [[08.07 Viscosity and Laminar Flow|08.07 Viscosity and Laminar Flow]]  
Priority: medium · Graph: yes · Manim: no

The formulas are correct, but the note quotes the Poiseuille result without the velocity profile and uses the same symbol $\mechanical{L}$ for the pipe length and the Reynolds length.

- [Correctness] Notation clash: $\mechanical{L}$ is the pipe length in $\mechanical{Q}=\pi\mechanical{R}^4\Delta\mechanical{p}/(8\mechanical{\eta}\mechanical{L})$ and then the characteristic length in $\mathrm{Re}=\mechanical{\rho}\mechanical{v}\mechanical{L}/\mechanical{\eta}$, which the text says should be the diameter; write the pipe Reynolds number with $\mechanical{D}$.
- [Simplify] Give the parabolic profile $\mechanical{v}(\mechanical{r})=\Delta\mechanical{p}(\mechanical{R}^2-\mechanical{r}^2)/(4\mechanical{\eta}\mechanical{L})$ from a force balance on a cylindrical core, then integrate it to obtain $\mechanical{Q}$.
- [Intuition] Explain the $\mechanical{R}^4$ law as two factors of $\mechanical{R}^2$, one from the area and one from the peak speed; for example, a 10% narrower vessel carries about 34% less flow at the same pressure drop.
- [Graph] Plot the normalized velocity profile $\mechanical{v}/\mechanical{v}_{\max}=1-(\mechanical{r}/\mechanical{R})^2$ for $\mechanical{r}/\mechanical{R}\in[-1,1]$ with velocity arrows across the pipe.
- [Intuition] Interpret $\mathrm{Re}$ as the ratio of inertial to viscous stresses, $\mechanical{\rho}\mechanical{v}^2/(\mechanical{\eta}\mechanical{v}/\mechanical{L})$.

### N0957

Note: [[08.08 Euler Equation for Fluid Flow|08.08 Euler Equation for Fluid Flow]]  
Priority: high · Graph: no · Manim: no

The note is correct but very compressed: it only names the material derivative, the pressure-force density, and the route to Bernoulli.

- [Simplify] Introduce the material derivative $D/Dt=\partial_t+\mechanical{\vec v}\cdot\nabla$ with a concrete picture: in steady flow through a nozzle, $\partial_t\mechanical{\vec v}=0$, yet each parcel accelerates.
- [Simplify] Derive the right-hand side from the pressure force on a small cube, $-(\partial\mechanical{p}/\partial x)\,dx\,dy\,dz$ per component, which gives the force density $-\nabla\mechanical{p}$.
- [Example] Show the steady-flow route to Bernoulli: use $(\mechanical{\vec v}\cdot\nabla)\mechanical{\vec v}=\nabla(\tfrac12\mechanical{v}^2)-\mechanical{\vec v}\times(\nabla\times\mechanical{\vec v})$, take the component along $\mechanical{\vec v}$, and recover \[\[08.06 Bernoulli's Equation\]\].
- [Structure] Write the generalized Bernoulli equation explicitly, $\mechanical{\rho}\,\partial_t\mechanical{\Phi}+\mechanical{p}+\tfrac12\mechanical{\rho}\mechanical{v}^2+\mechanical{\rho}\mechanical{g}\mechanical{z}=f(t)$, instead of only naming it, and derive the continuity equation from a control volume in one line.

### N0958

Note: [[08.09 Navier–Stokes Equation|08.09 Navier–Stokes Equation]]  
Priority: medium · Graph: yes · Manim: no

The statements are correct, but the note introduces the viscous term without physical interpretation and only names the Reynolds-number regimes.

- [Intuition] Interpret $\mechanical{\eta}\nabla^2\mechanical{\vec v}$ as diffusion of momentum (a parcel faster than the average of its neighbours is slowed), compare it with the heat equation, and define the kinematic viscosity $\nu=\mechanical{\eta}/\mechanical{\rho}$.
- [Simplify] Show how $\mathrm{Re}$ arises by nondimensionalizing ($\mechanical{\vec v}=U\tilde v$, $x=\mechanical{L}\tilde x$), which leaves $1/\mathrm{Re}$ in front of the viscous term.
- [Example] Add a Stokes-drag example: the terminal speed of a small sphere is $\mechanical{v}_t=2(\mechanical{\rho}_s-\mechanical{\rho}_f)\mechanical{g}\mechanical{R}^2/(9\mechanical{\eta})$; evaluate it for a $\quantity{10}{\mu m}$ water droplet in air and check that $\mathrm{Re}\ll1$.
- [Graph] Log–log plot of the sphere drag coefficient against $\mathrm{Re}$ showing the Stokes law $C_D=24/\mathrm{Re}$ for $\mathrm{Re}<1$, with a plateau near $C_D\sim0.4$ at high Re labelled as qualitative (do not invent detailed data).

### N0959

Note: [[08.10 Worked Examples in Fluid Mechanics|08.10 Worked Examples in Fluid Mechanics]]  
Priority: medium · Graph: yes · Manim: no

The worked examples are correct, but $\mechanical{L}$ means both dam width and lift force, and the note does not show the siphon crest pressure.

- [Correctness] Notation clash: "$\mechanical{F}=\int_0^H\mechanical{p}(\mechanical{z})\mechanical{L}\,dz$" uses $\mechanical{L}$ for the dam width, and "$\mechanical{L}=\tfrac12\mechanical{C}_L\mechanical{\rho}\mechanical{v}^2\mechanical{S}$" uses $\mechanical{L}$ for a force; rename the width (e.g. $\mechanical{W}$) or the lift (e.g. $\mechanical{F}_L$).
- [Example] Add the overturning moment about the base, $\tfrac16\mechanical{\rho}\mechanical{g}\mechanical{L}\mechanical{H}^3$, and the centre of pressure at $\mechanical{H}/3$ above the base, explaining why dams are thicker at the bottom.
- [Simplify] Write the Bernoulli expression for the crest pressure, $\mechanical{p}_c=\mechanical{p}_0-\mechanical{\rho}\mechanical{g}(\mechanical{h}_c-\mechanical{h}_a)-\tfrac12\mechanical{\rho}\mechanical{v}^2$, so that the $\quantity{10}{m}$ limit follows visibly.
- [Graph] Plot the gauge pressure on the dam face, $\mechanical{p}(\mechanical{z})=\mechanical{\rho}\mechanical{g}\mechanical{z}$ for $\mechanical{z}\in[0,50]\,\unit{m}$, as horizontal arrows of increasing length (triangular load).

### N0960

Note: [[08.11 Waves in Fluids|08.11 Waves in Fluids]]  
Priority: medium · Graph: yes · Manim: yes

The limits are correct, but the note omits the full dispersion relation that links deep and shallow water and does not motivate the sound-speed formula.

- [Simplify] Give the full relation $\signal{\omega}^2=\mechanical{g}\signal{k}\tanh(\signal{k}\mechanical{h})$ and obtain both limits from $\tanh x\approx1$ and $\tanh x\approx x$; note that the deep-water form already holds for $\mechanical{h}\gtrsim\signal{\lambda}/2$.
- [Example] Verify the sound speed in air, $\sqrt{1.4\cdot1.013\times10^5/1.204}\,\unit{m\,s^{-1}}\approx\quantity{343}{m\,s^{-1}}$, and mention Newton's isothermal value (about 290 m/s) to motivate the adiabatic subscript $s$.
- [Structure] The tsunami speed is written $\signal{v}$ here but $\mechanical{v}$ in exercise 12 of \[\[08.14 Fluid Mechanics Exercises\]\]; pick one macro group for wave speed and use it in both notes.
- [Graph] Plot the phase speed $\sqrt{(\mechanical{g}/\signal{k})\tanh(\signal{k}\mechanical{h})}$ against $\signal{k}\mechanical{h}\in[0.01,10]$ on a logarithmic horizontal axis, with the asymptotes $\sqrt{\mechanical{g}\mechanical{h}}$ and $\sqrt{\mechanical{g}/\signal{k}}$.
- [Manim] Animate a deep-water surface wave with marker particles moving on circles whose radius shrinks with depth while the profile travels, showing that the water circulates in place rather than travelling with the wave.

### N0961

Note: [[08.12 Surface Tension and Capillarity|08.12 Surface Tension and Capillarity]]  
Priority: medium · Graph: yes · Manim: no

The results and numbers are correct, but the note states the Laplace pressure and capillary rise without the simple force balances behind them.

- [Simplify] Derive the Laplace pressure by cutting a droplet in half, $\Delta\mechanical{p}\,\pi\mechanical{R}^2=\mechanical{\gamma}\,2\pi\mechanical{R}$, and the capillary rise from $2\pi\mechanical{r}\mechanical{\gamma}\cos\mechanical{\theta}=\mechanical{\rho}\mechanical{g}\pi\mechanical{r}^2\mechanical{h}$.
- [Intuition] Explain the two equivalent views of $\mechanical{\gamma}$, energy per area and force per length ($\unit{J\,m^{-2}}=\unit{N\,m^{-1}}$), and why molecules at the surface have higher energy.
- [Graph] Plot the capillary rise $\mechanical{h}(\mechanical{r})$ for water on clean glass for $\mechanical{r}\in[0.05,2]\,\unit{mm}$, optionally on log axes, to show the $1/\mechanical{r}$ dependence.
- [Example] Add the opposite case: mercury on glass ($\mechanical{\theta}\approx140^\circ$) gives capillary depression, which shows the role of $\cos\mechanical{\theta}$.

### N0962

Note: [[08.13 Flotation and Stability|08.13 Flotation and Stability]]  
Priority: high · Graph: no · Manim: yes

The note is qualitatively correct but very thin: it gives no formula for the metacentric height, no righting moment, and no example.

- [Simplify] Add the quantitative core: the righting moment $\approx\mechanical{\rho}_f\mechanical{g}\mechanical{V}\,\overline{GM}\sin\phi$ and $\overline{BM}=\mechanical{I}_{\mathrm{wl}}/\mechanical{V}$ (second moment of the waterline area divided by the displaced volume), so that $\overline{GM}=\overline{BM}-\overline{BG}$.
- [Example] Work a floating rectangular block of width $b$ and draft $h$: $\overline{BM}=b^2/(12h)$; find the width-to-height ratio at which it becomes unstable.
- [Intuition] Explain why a floating body can be stable with $G$ above the centre of buoyancy (the centre of buoyancy moves sideways when the body tilts), unlike a fully submerged body, which needs $G$ below it.
- [Structure] Use the common notation $B$ and $\overline{GM}$ (positive when $M$ is above $G$), and avoid $M$ for the metacenter where $\mechanical{M}$ denotes mass, or add a warning.
- [Manim] Animate a floating box tilting by a small angle: the submerged wedge shifts, the centre of buoyancy moves sideways, the buoyancy line meets the centreline at $M$, and the weight–buoyancy couple turns the box back.

### N0963

Note: [[08.14 Fluid Mechanics Exercises|08.14 Fluid Mechanics Exercises]]  
Priority: low · Graph: no · Manim: no

The exercise list is clear and the results are numerically correct (spot-checked).

- [Structure] Add brief hints for derivation exercises 8 and 9 and a one-line setup for exercise 13 ($\mechanical{A}\,d\mechanical{h}/dt=-\mechanical{A}_f\sqrt{2\mechanical{g}\mechanical{h}}$).

### N0964

Note: [[Buoyancy, continuity, and Bernoulli problems|Buoyancy, continuity, and Bernoulli problems]]  
Priority: high · Graph: yes · Manim: yes

The arithmetic checks out, but the note is a loose lecture transcription: it mixes in unrelated topics (gravitation, Doppler), includes meta-commentary about the source pages, and has a broken heading.

- [Structure] Fix the malformed heading "##### ) — Archimedes' principle". Move "Fluid statics" (pressure, density, the nail example) to the top, because buoyancy depends on it. Move or link out the "Newton's law of universal gravitation" and "Doppler effect" sections, which do not belong in a fluids note.
- [Simplify] Remove source-referencing sentences such as "The page labels the densities $\rho_1$ and $\rho_2$…", "Find the exit speed $v_2$ for the pipe on the preceding page", "The notes call this the Bernoulli effect", and "The example is titled 'hot air balloon'…". State the physics directly.
- [Example] Finish the balloon example: give $m_c=\tfrac43\pi r^3(\rho_{\mathrm{air}}-\rho_{\mathrm{He}})-m_b$ and a numerical case (e.g. $r=5\,\mathrm{m}$) instead of stopping at "Solve this equation for $m_c$". In "Displacement and buoyancy", add the one-line inequality $m/\rho_w > m/\rho_{\mathrm{metal}}$ that explains why the water level falls.
- [Intuition] In the Bernoulli section, say that $P+\tfrac12\rho v^2+\rho gy$ is mechanical energy per unit volume (work done by pressure plus kinetic plus potential energy). Add a one-line caveat to the wing paragraph: Bernoulli describes the pressure difference but does not by itself explain why the upper flow is faster.
- [Graph] Add a 2D plot for the narrowing pipe at fixed flow rate $R$: $v(A)=R/A$ and $P(A)=P_1+\tfrac12\rho R^2(1/A_1^2-1/A^2)$ against $A$. Alternatively, plot the Torricelli speed $v_1=\sqrt{2g(y_2-y_1)}$ against water depth from 0 to 2 m.
- [Manim] Animate fluid parcels (dots) moving through a pipe that narrows and then widens. The parcels should speed up in the narrow section while a pressure bar above each section drops, showing $A_1v_1=A_2v_2$ and the Bernoulli pressure drop together.
- [Structure] The physical-quantities table lists $\mechanical{\rho}$ twice and omits $P$, $v$, $A$, $V_f$, $R$ and $f$. Merge the duplicate row and add the missing symbols.
