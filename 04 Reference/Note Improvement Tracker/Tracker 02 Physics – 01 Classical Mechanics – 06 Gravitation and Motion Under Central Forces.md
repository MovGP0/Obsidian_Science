---
title: "Note Improvement Tracker – 02 Physics/01 Classical Mechanics/06 Gravitation and Motion Under Central Forces"
---

> [!TLDR]
> This note tracks the review of the 17 notes in `02 Physics/01 Classical Mechanics/06 Gravitation and Motion Under Central Forces`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 1 possible errors or notation conflicts. 1 of them are verified (1 rejected); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N0921|N0921]] 06.06 Keplerian Orbits: Notation clash: $e$ is the eccentricity in the orbit equation while $\electric{e}$ is the elementary charge in "$\alpha=\electric{k}\electric{e}^2$" in the same note; rename one (e.g. $\varepsilon$ for eccentricity) or add an explicit warning. **Rejected:** Standard textbook notation; the two are visually distinct (uncolored e vs \electric{e}), the charge appears once, and both have separate table rows.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N0915 | [[06.00 Gravitation and Motion Under Central Forces\|06.00 Gravitation and Motion Under Central Forces]] | Analyzed | low | no | no | [[#N0915\|View]] |
| N0916 | [[06.01 From Kepler to Newton\|06.01 From Kepler to Newton]] | Analyzed | low | no | no | [[#N0916\|View]] |
| N0917 | [[06.02 Law of Gravitation\|06.02 Law of Gravitation]] | Analyzed | medium | yes | no | [[#N0917\|View]] |
| N0918 | [[06.03 Gravitational Field and Gravitational Potential\|06.03 Gravitational Field and Gravitational Potential]] | Analyzed | medium | yes | no | [[#N0918\|View]] |
| N0919 | [[06.04 Central Forces and Conservation of Angular Momentum\|06.04 Central Forces and Conservation of Angular Momentum]] | Analyzed | medium | no | yes | [[#N0919\|View]] |
| N0920 | [[06.05 Two-Body Problem\|06.05 Two-Body Problem]] | Analyzed | high | yes | yes | [[#N0920\|View]] |
| N0921 | [[06.06 Keplerian Orbits\|06.06 Keplerian Orbits]] | Analyzed | high | yes | yes | [[#N0921\|View]] |
| N0922 | [[06.07 Worked Examples of Orbits\|06.07 Worked Examples of Orbits]] | Analyzed | low | no | yes | [[#N0922\|View]] |
| N0923 | [[06.08 Kepler's Three Laws\|06.08 Kepler's Three Laws]] | Analyzed | medium | yes | yes | [[#N0923\|View]] |
| N0924 | [[06.09 Escape Velocity and Binding Energy\|06.09 Escape Velocity and Binding Energy]] | Analyzed | medium | yes | no | [[#N0924\|View]] |
| N0925 | [[06.10 Virial Theorem\|06.10 Virial Theorem]] | Analyzed | high | yes | no | [[#N0925\|View]] |
| N0926 | [[06.11 Orbital Maneuvers and Hohmann Transfer\|06.11 Orbital Maneuvers and Hohmann Transfer]] | Analyzed | medium | yes | yes | [[#N0926\|View]] |
| N0927 | [[06.12 Coulomb Scattering\|06.12 Coulomb Scattering]] | Analyzed | medium | yes | yes | [[#N0927\|View]] |
| N0928 | [[06.13 Tidal Forces\|06.13 Tidal Forces]] | Analyzed | medium | yes | no | [[#N0928\|View]] |
| N0929 | [[06.14 Lagrange Points\|06.14 Lagrange Points]] | Analyzed | medium | yes | no | [[#N0929\|View]] |
| N0930 | [[06.15 Cosmic Velocities\|06.15 Cosmic Velocities]] | Analyzed | medium | yes | yes | [[#N0930\|View]] |
| N0931 | [[06.16 Gravitation and Orbits Exercises\|06.16 Gravitation and Orbits Exercises]] | Analyzed | low | no | no | [[#N0931\|View]] |

## Suggestions

### N0915

Note: [[06.00 Gravitation and Motion Under Central Forces|06.00 Gravitation and Motion Under Central Forces]]  
Priority: low · Graph: no · Manim: no

A clear chapter hub with correct summary formulas.

- [Links] Link 06.03 (field and potential) and the other chapter notes not listed in the summary, so that every section is reachable from the hub.

### N0916

Note: [[06.01 From Kepler to Newton|06.01 From Kepler to Newton]]  
Priority: low · Graph: no · Manim: no

An accurate, readable historical overview.

- [Intuition] Add Newton's Moon test as the quantitative core of the "unification" paragraph: $g(R_E/r_{\mathrm{Moon}})^2\approx9.8/60^2\approx\quantity{2.7\times10^{-3}}{m/s^2}$ matches the Moon's centripetal acceleration $4\pi^2r/T^2$.

### N0917

Note: [[06.02 Law of Gravitation|06.02 Law of Gravitation]]  
Priority: medium · Graph: yes · Manim: no

Correct but bare; the shell theorem is stated without justification or consequences, and there is no example.

- [Graph] Plot $|g(r)|/g_{\mathrm{surface}}$ for a uniform sphere: linear $r/R$ inside and $(R/r)^2$ outside, for $r/R\in[0,4]$. Optionally overlay a realistic dense-core profile to show that the interior result depends on the density.
- [Simplify] Call the statement the shell theorem. Mention that it follows from Gauss's law $\oint\vec g\cdot d\vec A=-4\pi GM_{\mathrm{enc}}$ or from direct integration, and that it holds only for spherically symmetric distributions.
- [Example] Add numbers: the force between two $\quantity{1}{kg}$ masses $\quantity{1}{m}$ apart is $6.7\times10^{-11}\unit{N}$. Derive $g=9.81\unit{m/s^2}$ from $M_E$ and $R_E$, and show how $g$ falls with altitude at the ISS ($h=400\unit{km}$, about $0.89g$).
- [Simplify] Explain that $-mg\hat\jmath$ is the local flat-Earth version of $-GMm\hat r/r^2$ with $\hat r\approx\hat\jmath$ (vertical up).

### N0918

Note: [[06.03 Gravitational Field and Gravitational Potential|06.03 Gravitational Field and Gravitational Potential]]  
Priority: medium · Graph: yes · Manim: no

Correct but minimal; it defines field and potential without showing the gradient relation, superposition, or a picture.

- [Simplify] Verify $\vec g=-\nabla\Phi$ in one line: $-\partial_r(-GM/r)\hat r=-GM\hat r/r^2$. Add that potentials add as scalars for several masses, which is the main practical reason to use $\Phi$.
- [Graph] Make a 2D contour plot of $\Phi(x,y)=-GM_1/|\vec r-\vec r_1|-GM_2/|\vec r-\vec r_2|$ for an Earth–Moon-like mass ratio (81:1) on a plane through both bodies, with the field direction arrows overlaid. Optionally add a radial 1D plot of $\Phi(r)$ for a single uniform sphere (parabolic inside, $-1/r$ outside).
- [Intuition] Connect to 03.13: the potential energy is $U=m\Phi$, and the escape condition is $\tfrac12v^2+\Phi=0$, so $v_{\mathrm{esc}}=\sqrt{-2\Phi}$ does not depend on the test mass.

### N0919

Note: [[06.04 Central Forces and Conservation of Angular Momentum|06.04 Central Forces and Conservation of Angular Momentum]]  
Priority: medium · Graph: no · Manim: yes

The note is correct and compact, but it states the areal-velocity result without derivation and gives no physical picture of why zero torque fixes the plane.

- [Simplify] Derive $d\mechanical{A}/dt=\mechanical{L}/(2\mechanical{m})$ in two lines: the triangle swept in $dt$ has area $\tfrac12\lvert\mechanical{\vec r}\times\mechanical{\vec v}\,dt\rvert$, then use $\mechanical{\vec L}=\mechanical{m}\mechanical{\vec r}\times\mechanical{\vec v}$.
- [Intuition] Add one sentence explaining planarity physically: the force always lies in the plane spanned by $\mechanical{\vec r}$ and $\mechanical{\vec v}$, so it can never push the particle out of that plane; mention the degenerate case $\mechanical{\vec L}=\vec 0$ (motion along a radial line).
- [Example] Add a contrast case: a non-central force (for example a constant force whose line of action misses $O$) produces torque and changes $\mechanical{\vec L}$, so the reader sees what the theorem excludes.
- [Manim] Animate Newton's geometric construction: a particle moves in straight segments for equal time steps, receives impulses directed toward $O$, and the shaded triangles $O P_n P_{n+1}$ are shown to have equal area at each step.
- [Links] Link "Kepler's second law" to \[\[06.08 Kepler's Three Laws\]\] and the later use of $\mechanical{L}$ in the effective potential to \[\[06.05 Two-Body Problem\]\].

### N0920

Note: [[06.05 Two-Body Problem|06.05 Two-Body Problem]]  
Priority: high · Graph: yes · Manim: yes

The key results are correct, but the note asserts the separation into CM and relative coordinates and the meaning of the centrifugal term instead of showing them.

- [Simplify] Show the coordinate change explicitly: define $\mechanical{\vec R}=(\mechanical{m}_1\mechanical{\vec r}_1+\mechanical{m}_2\mechanical{\vec r}_2)/\mechanical{M}$, add and subtract the two Newton equations using $\mechanical{\vec F}_{12}=-\mechanical{\vec F}_{21}$, and give the inverse map $\mechanical{\vec r}_1=\mechanical{\vec R}+(\mechanical{m}_2/\mechanical{M})\mechanical{\vec r}$, $\mechanical{\vec r}_2=\mechanical{\vec R}-(\mechanical{m}_1/\mechanical{M})\mechanical{\vec r}$.
- [Intuition] Interpret $\mechanical{L}^2/(2\mechanical{\mu}\mechanical{r}^2)$ as the angular part of the kinetic energy, rewritten through the conserved $\mechanical{L}$ (a "centrifugal barrier"), and state the limiting case $\mechanical{m}_2\gg\mechanical{m}_1\Rightarrow\mechanical{\mu}\to\mechanical{m}_1$.
- [Simplify] Derive the energy form $\energy{E}=\tfrac12\mechanical{\mu}\mechanical{\dot r}^2+\energy{U}_{\mathrm{eff}}(\mechanical{r})$ here (it first appears in 06.06) and explain turning points as solutions of $\energy{E}=\energy{U}_{\mathrm{eff}}$.
- [Graph] For $\energy{U}=-1/\mechanical{r}$ and $\mechanical{L}^2/\mechanical{\mu}=1$, plot the three curves $\energy{U}$, the barrier $1/(2\mechanical{r}^2)$ and their sum $\energy{U}_{\mathrm{eff}}$ for $\mechanical{r}\in[0.2,6]$ and values in $[-1.5,1.5]$, with horizontal lines at $\energy{E}=-0.3$ and $\energy{E}=+0.2$ marking the turning points.
- [Manim] Animate two unequal masses (e.g. 3:1) orbiting their common CM on similar ellipses, then fade to the equivalent relative orbit of one body of mass $\mechanical{\mu}$ about a fixed centre, showing that the relative vector traces the same shape scaled by $\mechanical{M}/\mechanical{m}_2$.

### N0921

Note: [[06.06 Keplerian Orbits|06.06 Keplerian Orbits]]  
Priority: high · Graph: yes · Manim: yes

The note is mathematically correct and complete, but it skips the Binet substitution and the eccentricity step, and the energy classification has no visual.

- [Simplify] Write out the Binet step: $\mechanical{\dot r}=-(\mechanical{L}/\mechanical{\mu})\,du/d\mechanical{\phi}$ and $\mechanical{\ddot r}=-(\mechanical{L}^2u^2/\mechanical{\mu}^2)\,d^2u/d\mechanical{\phi}^2$, substitute into the radial equation, and show how energy at periapsis fixes $C$ and gives $e=\sqrt{1+2\energy{E}\mechanical{L}^2/(\mechanical{\mu}\alpha^2)}$.
- [Correctness] Notation clash: $e$ is the eccentricity in the orbit equation while $\electric{e}$ is the elementary charge in "$\alpha=\electric{k}\electric{e}^2$" in the same note; rename one (e.g. $\varepsilon$ for eccentricity) or add an explicit warning.
- [Intuition] Connect the orbit types to the effective-potential picture: $\energy{E}=\energy{U}_{\mathrm{eff}}(\mechanical{r}_0)$ gives $e=0$ (circle), $\energy{U}_{\mathrm{eff}}(\mechanical{r}_0)<\energy{E}<0$ gives two turning points, and $\energy{E}\ge0$ gives only one.
- [Graph] Plot $\mechanical{r}(\mechanical{\phi})=\mechanical{p}/(1+e\cos\mechanical{\phi})$ as Cartesian curves with $\mechanical{p}=1$ for $e=0,0.5,1,1.5$ (focus at the origin, window $x\in[-4,2]$, $y\in[-3,3]$), each labelled by $e$ and the sign of $\energy{E}$.
- [Manim] Animate a continuous sweep of $e$ from 0 to 1.5 at fixed $\mechanical{p}$, morphing a circle into an ellipse, parabola and hyperbola, with a side panel showing the energy level rising through the $\energy{U}_{\mathrm{eff}}$ curve.
- [Example] Add a numerical check of the mass correction: for the Earth–Moon system, $\mechanical{G}(\mechanical{M}+\mechanical{m})$ versus $\mechanical{G}\mechanical{M}$ differs by about 1.2%, which shows when the approximation in the boxed law matters.

### N0922

Note: [[06.07 Worked Examples of Orbits|06.07 Worked Examples of Orbits]]  
Priority: low · Graph: no · Manim: yes

The worked examples are numerically correct; the gravity-assist paragraph is only qualitative and would benefit from a frame-change picture.

- [Example] For the Schwarzschild example, show the one-line arithmetic $\mechanical{r}_s=2(6.674\times10^{-11})(1.989\times10^{30})/(3.0\times10^8)^2\,\unit{m}\approx\quantity{2.95}{km}$ before scaling by $4.1\times10^6$.
- [Intuition] In the gravity-assist section, state the key fact: in the planet frame the speeds in and out are equal, and in the Sun frame $\mechanical{\vec v}=\mechanical{\vec v}'+\mechanical{\vec V}_{\mathrm{planet}}$, so rotating $\mechanical{\vec v}'$ changes $\lvert\mechanical{\vec v}\rvert$; the upper limit of the gain is $2\lvert\mechanical{\vec V}_{\mathrm{planet}}\rvert$ for a full hairpin turn.
- [Manim] Animate one gravity assist in two panels: in the planet frame the craft follows a symmetric hyperbola with equal speeds in and out; in the Sun frame the same encounter is shown with the planet moving, and velocity-addition arrows show the speed gain.
- [Intuition] After the solar-mass result, note that orbital data actually determine $\mechanical{G}\mechanical{M}_S$, which is known much more precisely than $\mechanical{G}$ alone, so the uncertainty of $\mechanical{M}_S$ comes from $\mechanical{G}$.

### N0923

Note: [[06.08 Kepler's Three Laws|06.08 Kepler's Three Laws]]  
Priority: medium · Graph: yes · Manim: yes

The summary of the laws is correct, but the note only asserts that they follow from Newtonian gravity, without pointing to each derivation or showing the laws visually.

- [Structure] After each law, add a one-line pointer to its derivation: law 1 from the orbit equation in \[\[06.06 Keplerian Orbits\]\], law 2 from conservation of $\mechanical{L}$ in \[\[06.04 Central Forces and Conservation of Angular Momentum\]\], and law 3 from the ellipse area divided by the areal velocity.
- [Intuition] Explain what law 2 implies physically: the planet moves fastest at perihelion and slowest at aphelion, with $\mechanical{v}_p/\mechanical{v}_a=\mechanical{r}_a/\mechanical{r}_p$ (for Earth, about a 3.4% difference).
- [Graph] Log–log plot of $\signal{T}$ in years versus $\mechanical{a}$ in AU for the eight planets using standard tabulated values, together with the line $\signal{T}=\mechanical{a}^{3/2}$; the slope of 3/2 makes law 3 visible at a glance.
- [Manim] Animate a planet on an ellipse with $e\approx0.6$ and the Sun at a focus, shading the area swept in three equal time intervals (near perihelion, midway, near aphelion) to show equal wedge areas while the planet's speed changes.
- [Intuition] Add a validity remark: the laws are exact only for an isolated two-body inverse-square system; perturbations from other planets cause slow perihelion precession.

### N0924

Note: [[06.09 Escape Velocity and Binding Energy|06.09 Escape Velocity and Binding Energy]]  
Priority: medium · Graph: yes · Manim: no

The note is correct but terse; it never defines binding energy despite the title and switches between $\mechanical{G}\mechanical{M}$ and $\alpha,\mechanical{\mu}$ notation without comment.

- [Structure] Define binding energy explicitly, for example $\energy{E}_b=-\energy{E}=\alpha/(2\mechanical{r})$ for a circular orbit, i.e. the energy that must be supplied to unbind the orbiting body.
- [Simplify] Derive $\mechanical{v}_{\mathrm{esc}}$ in one line from $\tfrac12\mechanical{m}\mechanical{v}^2-\mechanical{G}\mechanical{M}\mechanical{m}/\mechanical{r}=0$ and state $\alpha=\mechanical{G}\mechanical{M}\mechanical{m}$ and $\mechanical{\mu}\approx\mechanical{m}$, so the two halves of the note use visibly consistent notation.
- [Intuition] State the corollary $\mechanical{v}_{\mathrm{esc}}=\sqrt2\,\mechanical{v}_{\mathrm{circ}}$ and that the escape speed does not depend on launch direction (ignoring the atmosphere and collisions with the surface).
- [Graph] Plot $\mechanical{v}_{\mathrm{circ}}(\mechanical{r})$ and $\mechanical{v}_{\mathrm{esc}}(\mechanical{r})$ for Earth for $\mechanical{r}/\mechanical{R}_E\in[1,10]$ with km/s on the vertical axis, shading the bound-orbit band between the curves.
- [Example] Add the numerical check for Earth: $\sqrt{2(3.986\times10^{14})/(6.371\times10^6)}\,\unit{m\,s^{-1}}\approx\quantity{11.2}{km\,s^{-1}}$.

### N0925

Note: [[06.10 Virial Theorem|06.10 Virial Theorem]]  
Priority: high · Graph: yes · Manim: no

The statements are correct, but the note gives the theorem without derivation or assumptions and does not check it on a noncircular orbit.

- [Simplify] Add the short derivation: define $G_v=\mechanical{\vec p}\cdot\mechanical{\vec r}$, note $dG_v/dt=2\energy{K}+\mechanical{\vec F}\cdot\mechanical{\vec r}$, time-average over bounded motion so the left side vanishes, and use $\mechanical{\vec F}\cdot\mechanical{\vec r}=-n\energy{U}$ for $\energy{U}\propto\mechanical{r}^n$.
- [Intuition] State the assumptions explicitly (bounded positions and momenta, long-time average, power-law potential) and explain why averages are needed: on an ellipse $2\energy{K}\ne-\energy{U}$ at most instants.
- [Graph] Plot $\energy{K}(t)$, $\energy{U}(t)$ and $\energy{E}$ over one period of an $e=0.5$ Kepler orbit in normalized units, with horizontal lines at $\langle\energy{K}\rangle$ and $\langle\energy{U}\rangle$ showing $\langle\energy{U}\rangle=-2\langle\energy{K}\rangle$.
- [Example] Add a worked estimate: the circular-orbit check linked to \[\[06.09 Escape Velocity and Binding Energy\]\], or an order-of-magnitude galaxy-cluster mass $\mechanical{M}\sim\langle\mechanical{v}^2\rangle\mechanical{R}/\mechanical{G}$ with its caveats.
- [Structure] Rename the callout "Analytical Mechanics" to something that matches its content (e.g. "Applications"), since it lists applications rather than an analytical-mechanics viewpoint.

### N0926

Note: [[06.11 Orbital Maneuvers and Hohmann Transfer|06.11 Orbital Maneuvers and Hohmann Transfer]]  
Priority: medium · Graph: yes · Manim: yes

The formulas and example are correct, but the note does not derive the $\Delta\mechanical{v}$ expressions or show the transfer geometry.

- [Simplify] Derive $\Delta\mechanical{v}_1$ and $\Delta\mechanical{v}_2$ from the vis-viva equation $\mechanical{v}^2=\mechanical{G}\mechanical{M}(2/\mechanical{r}-1/\mechanical{a})$ with $\mechanical{a}=(\mechanical{r}_1+\mechanical{r}_2)/2$, as the transfer-ellipse speed minus the circular speed at each apsis.
- [Example] Extend the Earth–Mars example with $\Delta\mechanical{v}_1\approx\quantity{2.94}{km\,s^{-1}}$ and $\Delta\mechanical{v}_2\approx\quantity{2.65}{km\,s^{-1}}$ (already in exercise 11) and explain why launch must occur when Mars leads Earth by about $44^\circ$.
- [Intuition] Explain why both burns are prograde and why the craft slows between them as it climbs the potential well, resolving the "speed up to end up slower" paradox.
- [Graph] Plot circles of radius 1 and 1.524 AU around the Sun and the transfer half-ellipse from $(1,0)$ to $(-1.524,0)$, marking the burn points with $\Delta\mechanical{v}$ arrows.
- [Manim] Animate the spacecraft on the inner circle, the first burn, the coast along the half-ellipse while Mars moves along its orbit, and the second burn that circularizes the orbit as the craft meets Mars.

### N0927

Note: [[06.12 Coulomb Scattering|06.12 Coulomb Scattering]]  
Priority: medium · Graph: yes · Manim: yes

The formulas and historical framing are correct, but the note sketches neither the deflection formula nor the cross-section derivation, and the Rutherford example has no numbers.

- [Simplify] Show the chain $\mechanical{b}\to\mechanical{\theta}\to d\mechanical{\sigma}/d\Omega=(\mechanical{b}/\sin\mechanical{\theta})\lvert d\mechanical{b}/d\mechanical{\theta}\rvert$; inserting $\mechanical{b}=(\alpha/2\energy{E})\cot(\mechanical{\theta}/2)$ gives the Rutherford formula in three lines.
- [Example] Make the Rutherford example quantitative: the head-on closest approach for 5 MeV alphas on gold is $\mechanical{d}=\alpha/\energy{E}=2\cdot79\cdot\quantity{1.44}{MeV\,fm}/\quantity{5}{MeV}\approx\quantity{45}{fm}$, which shows why a point-nucleus model works at this energy.
- [Graph] Plot $d\mechanical{\sigma}/d\Omega$ in units of $(\alpha/4\energy{E})^2$ against $\mechanical{\theta}\in[10^\circ,180^\circ]$ on a logarithmic vertical axis to show the $\sin^{-4}(\mechanical{\theta}/2)$ fall-off.
- [Manim] Animate a parallel beam of particles with evenly spaced impact parameters approaching a fixed repulsive centre, each tracing its hyperbola, so that small $\mechanical{b}$ gives backscattering and large $\mechanical{b}$ gives grazing deflection.
- [Structure] The degree notation "$90\unit{{}^\circ}$" renders oddly; use $90^\circ$ as other notes do.

### N0928

Note: [[06.13 Tidal Forces|06.13 Tidal Forces]]  
Priority: medium · Graph: yes · Manim: no

The estimates are correct, but the note states the tidal formula and the Roche estimate without the short derivations that make them understandable.

- [Simplify] Derive $\Delta\mechanical{g}$ as a Taylor expansion, $\mechanical{G}\mechanical{M}/\mechanical{r}^2-\mechanical{G}\mechanical{M}/(\mechanical{r}+\Delta\mechanical{r})^2\approx2\mechanical{G}\mechanical{M}\Delta\mechanical{r}/\mechanical{r}^3$, and explain the two tidal bulges (near side pulled more and far side less than Earth's centre).
- [Simplify] Show the Roche balance $2\mechanical{G}\mechanical{M}_P\mechanical{R}_M/\mechanical{d}^3=\mechanical{G}\mechanical{M}_M/\mechanical{R}_M^2$, then write the masses as density times volume to reach $\mechanical{d}_R=\mechanical{R}_P(2\mechanical{\rho}_P/\mechanical{\rho}_M)^{1/3}$; note that a fluid body gives a coefficient of about 2.44 instead of $2^{1/3}\approx1.26$.
- [Example] Compare the Moon's and Sun's tidal accelerations on Earth numerically (ratio about 2.2) to explain spring and neap tides.
- [Graph] 2D vector plot of the tidal acceleration $(\mechanical{G}\mechanical{M}/\mechanical{r}^3)(2x,-y)$ at points on a unit circle representing Earth, showing stretching along the Earth–Moon line and compression perpendicular to it.

### N0929

Note: [[06.14 Lagrange Points|06.14 Lagrange Points]]  
Priority: medium · Graph: yes · Manim: no

The note is accurate and careful about source issues, but it gives no picture of the rotating-frame potential that explains the five equilibria and the stability of $L_4$ and $L_5$.

- [Intuition] Introduce the rotating-frame effective potential $\Phi=-\mechanical{G}\mechanical{m}_1/\mechanical{r}_1-\mechanical{G}\mechanical{m}_2/\mechanical{r}_2-\tfrac12\Omega^2\rho^2$ and state that Lagrange points are its stationary points; explain that $L_4$ and $L_5$ are maxima of $\Phi$ that the Coriolis force stabilizes.
- [Graph] graph3d surface or 2D contour plot of $\Phi(x,y)$ for $\mechanical{m}_2/\mechanical{m}_1=0.1$ over $x,y\in[-1.5,1.5]$ in normalized units, with the five points marked.
- [Example] Give the approximate $L_1$ and $L_2$ distance $\mechanical{r}_H\approx\mechanical{R}(\mechanical{m}_2/3\mechanical{m}_1)^{1/3}$ and evaluate it for Sun–Earth (about 1.5 million km) to connect with the JWST paragraph.
- [Structure] Merge the two "Source" callouts into one compact note to reduce visual clutter.

### N0930

Note: [[06.15 Cosmic Velocities|06.15 Cosmic Velocities]]  
Priority: medium · Graph: yes · Manim: yes

The values are correct, but the note does not derive the first two velocities or explain how Earth's orbital speed enters the third.

- [Simplify] Derive $\mechanical{v}_1$ from $\mechanical{m}\mechanical{v}^2/\mechanical{R}_E=\mechanical{m}\mechanical{g}$ and $\mechanical{v}_2$ from $\energy{E}=0$, using $\mechanical{g}=\mechanical{G}\mechanical{M}_E/\mechanical{R}_E^2$; link to \[\[06.09 Escape Velocity and Binding Energy\]\].
- [Example] Sketch the $\mechanical{v}_3$ calculation: solar escape speed at 1 AU is about $\quantity{42.1}{km\,s^{-1}}$; subtracting Earth's orbital speed of $\quantity{29.8}{km\,s^{-1}}$ leaves a hyperbolic excess of $\quantity{12.3}{km\,s^{-1}}$, and $\mechanical{v}_3=\sqrt{\mechanical{v}_2^2+12.3^2}\approx\quantity{16.6}{km\,s^{-1}}$.
- [Graph] Plot launch trajectories (Newton's cannon) from a point on Earth's surface for horizontal speeds $0.6\mechanical{v}_1$, $0.9\mechanical{v}_1$, $\mechanical{v}_1$, $1.2\mechanical{v}_1$ and $\mechanical{v}_2$ as conics with Earth's centre at the focus.
- [Manim] Animate Newton's cannon: projectiles launched horizontally with increasing speed fall back to the ground, then circle Earth at $\mechanical{v}_1$, then follow ellipses, and finally escape on a parabola at $\mechanical{v}_2$.

### N0931

Note: [[06.16 Gravitation and Orbits Exercises|06.16 Gravitation and Orbits Exercises]]  
Priority: low · Graph: no · Manim: no

The exercise list is clear and the results are correct (spot-checked numerically); only the proof exercises lack hints.

- [Structure] Add one-line hints for proof exercises 5, 9 and 15 (for exercise 15: combine $\mechanical{r}_p\mechanical{v}_p=\mechanical{r}_a\mechanical{v}_a$ with energy conservation or vis-viva).
- [Example] Exercise 12 uses inputs that put the Roche limit inside Saturn; replace the moon density with an icy value ($\mechanical{\rho}_M\approx\quantity{900}{kg\,m^{-3}}$ gives $\mechanical{d}_R\approx\quantity{6.7\times10^7}{m}$) so the result is physically meaningful, or turn the callout into an explicit discussion question.
