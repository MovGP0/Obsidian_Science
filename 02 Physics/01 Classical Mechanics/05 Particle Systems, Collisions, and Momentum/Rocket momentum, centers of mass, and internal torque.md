---
title: "Rocket momentum, centers of mass, and internal torque"
---

> [!TLDR]
> Track momentum across a changing system boundary and reduce the dynamics of many particles to motion of the center of mass and about it.

## Worked lecture material

##### Collisions

In an isolated elastic collision, both total momentum and kinetic energy are conserved. In an isolated inelastic collision, total momentum is conserved and kinetic energy can change. In a perfectly inelastic collision the bodies move together after impact.

$$
\begin{aligned}
\mechanical{m}_1\mechanical{\vec v}_{1i}+\mechanical{m}_2\mechanical{\vec v}_{2i}
&=\mechanical{m}_1\mechanical{\vec v}_{1f}+\mechanical{m}_2\mechanical{\vec v}_{2f},\\
\mechanical{\vec v}_f
&=\frac{\mechanical{m}_1\mechanical{\vec v}_{1i}+\mechanical{m}_2\mechanical{\vec v}_{2i}}
{\mechanical{m}_1+\mechanical{m}_2}
\qquad\text{for a perfectly inelastic collision}.
\end{aligned}
$$

When body 2 starts at rest, the common final velocity is $\mechanical{m}_1\mechanical{\vec v}_{1i}/(\mechanical{m}_1+\mechanical{m}_2)$. For equal masses this is $\mechanical{\vec v}_{1i}/2$.

##### Rocket momentum balance

The rocket sketch shows the rocket moving forward and the exhaust directed backward. Let $\mathrm d\mechanical{m}<0$ be the change in rocket mass and let $\mechanical{v}_{\mathrm{ex}}>0$ be the speed of the exhaust relative to the rocket. The mass of the emitted exhaust is $-\mathrm d\mechanical{m}$ and its velocity in the original frame is $\mechanical{v}-\mechanical{v}_{\mathrm{ex}}$ to the required order.

$$
\begin{aligned}
\mechanical{P}(t)&=\mechanical{m}\mechanical{v},\\
\mechanical{P}(t+\mathrm dt)
&=(\mechanical{m}+\mathrm d\mechanical{m})(\mechanical{v}+\mathrm d\mechanical{v})
-\mathrm d\mechanical{m}(\mechanical{v}-\mechanical{v}_{\mathrm{ex}})\\
&\simeq\mechanical{m}\mechanical{v}
+\mechanical{m}\,\mathrm d\mechanical{v}
+\mechanical{v}_{\mathrm{ex}}\,\mathrm d\mechanical{m}.
\end{aligned}
$$

With no external force, $\mathrm d\mechanical{P}=\mechanical{m}\,\mathrm d\mechanical{v}+\mechanical{v}_{\mathrm{ex}}\,\mathrm d\mechanical{m}=0$. The last handwritten line appears to switch the sign on the exhaust term. The sign above follows from the expansion with $\mathrm d\mechanical{m}<0$.

##### Rocket equation

The midterm entry gives February 23 and Chapters 1–4. With zero external force, $\mathrm d\mechanical{P}=0$ for rocket and exhaust together. From $\mechanical{m}\,\mathrm d\mechanical{v}=-\mechanical{v}_{\mathrm{ex}}\,\mathrm d\mechanical{m}$,

$$
\mechanical{m}\frac{\mathrm d\mechanical{v}}{\mathrm dt}
=-\mechanical{v}_{\mathrm{ex}}\frac{\mathrm d\mechanical{m}}{\mathrm dt}
=\mechanical{F}_{\mathrm{thrust}}.
$$

The notes consider a constant mass loss rate $\mathrm d\mechanical{m}/\mathrm dt=-\mechanical{\alpha}$. With constant exhaust speed, integration from the initial to the current mass gives

$$
\int_{\mechanical{v}_0}^{\mechanical{v}}\mathrm d\mechanical{v}'
=-\mechanical{v}_{\mathrm{ex}}\int_{\mechanical{m}_0}^{\mechanical{m}}
\frac{\mathrm d\mechanical{m}'}{\mechanical{m}'},
\qquad
\mechanical{v}-\mechanical{v}_0
=\mechanical{v}_{\mathrm{ex}}\ln\frac{\mechanical{m}_0}{\mechanical{m}}.
$$

##### System of particles and total mass

For particle $\alpha$, its force is its external force plus the internal forces due to the other particles. Its position in the planar sketch is $\mechanical{\vec r}_\alpha=\mechanical{x}_\alpha\hat x+\mechanical{y}_\alpha\hat y$. The total mass is $\mechanical{M}=\sum_\alpha\mechanical{m}_\alpha$. Summing Newton’s second law for particles of fixed mass gives

$$
\begin{aligned}
\frac{\mathrm d^2}{\mathrm dt^2}\sum_\alpha\mechanical{m}_\alpha\mechanical{\vec r}_\alpha
&=\sum_\alpha\mechanical{\vec F}^{(\mathrm{ext})}_\alpha
+\sum_{\alpha>\beta}
(\mechanical{\vec F}_{\alpha\beta}+\mechanical{\vec F}_{\beta\alpha})\\
&=\mechanical{\vec F}_{\mathrm{net}}^{(\mathrm{ext})}.
\end{aligned}
$$

##### Center of mass

For a planar system, average the coordinates with weights proportional to mass.

$$
\mechanical{x}_{\mathrm{cm}}=\frac1{\mechanical{M}}
\sum_\alpha\mechanical{m}_\alpha\mechanical{x}_\alpha,
\qquad
\mechanical{y}_{\mathrm{cm}}=\frac1{\mechanical{M}}
\sum_\alpha\mechanical{m}_\alpha\mechanical{y}_\alpha.
$$

Combining the two components gives

$$
\mechanical{\vec R}_{\mathrm{cm}}
=\mechanical{x}_{\mathrm{cm}}\hat x+\mechanical{y}_{\mathrm{cm}}\hat y
=\frac1{\mechanical{M}}\sum_\alpha\mechanical{m}_\alpha\mechanical{\vec r}_\alpha.
$$

The second derivative of $\mechanical{M}\mechanical{\vec R}_{\mathrm{cm}}$ is the time derivative of the total momentum, equal to the net external force. For a continuous mass distribution, replace the sum with an integral.

$$
\mechanical{\vec R}_{\mathrm{cm}}=\frac1{\mechanical{M}}
\int\mechanical{\vec r}\,\mathrm d\mechanical{m},
\qquad
\mechanical{x}_{\mathrm{cm}}=\frac1{\mechanical{M}}\int\mechanical{x}\,\mathrm d\mechanical{m},
\qquad
\mechanical{y}_{\mathrm{cm}}=\frac1{\mechanical{M}}\int\mechanical{y}\,\mathrm d\mechanical{m}.
$$

##### Uniform rod

The rod extends along the $x$ axis from $0$ to $\mechanical{L}$. Its linear mass density is $\mechanical{\lambda}=\mechanical{M}/\mechanical{L}$, so $\mathrm d\mechanical{m}=\mechanical{\lambda}\,\mathrm d\mechanical{x}$.

$$
\mechanical{x}_{\mathrm{cm}}
=\frac{\mechanical{\lambda}}{\mechanical{M}}\int_0^{\mechanical{L}}\mechanical{x}\,\mathrm d\mechanical{x}
=\frac{\mechanical{\lambda}\mechanical{L}^2}{2\mechanical{M}}
=\frac{\mechanical{L}}{2}.
$$

The lower sketch marks a small mass element on a semicircular planar region and introduces areal density $\mechanical{\sigma}=\mechanical{M}/\mechanical{A}$.

##### Center of mass of a semicircular wire

The sketch shows the upper half of a circle of radius $\mechanical{R}$. The calculation uses mass per length $\mechanical{\lambda}$, so it applies to the wire along the arc. With angle $\theta$ measured from the positive horizontal axis, $\mechanical{y}=\mechanical{R}\sin\theta$ and $\mathrm d\mechanical{m}=\mechanical{\lambda}\mechanical{R}\,\mathrm d\theta$. Symmetry gives $\mechanical{x}_{\mathrm{cm}}=0$.

$$
\begin{aligned}
\mechanical{y}_{\mathrm{cm}}
&=\frac{\mechanical{\lambda}\mechanical{R}^2}{\mechanical{M}}
\int_0^\pi\sin\theta\,\mathrm d\theta
=\frac{2\mechanical{\lambda}\mechanical{R}^2}{\mechanical{M}}\\
&=\frac{2\mechanical{R}}{\pi}\simeq\frac{2\mechanical{R}}{3},
\end{aligned}
$$

where $\mechanical{M}=\pi\mechanical{R}\mechanical{\lambda}$. The final approximation is the rough estimate written in the notes.

##### Rocket in gravity

Assume negligible air resistance, constant gravitational acceleration with height, and a constant fuel burn rate $\mathrm d\mechanical{m}/\mathrm dt=-\mechanical{\alpha}$. The force sketch shows thrust upward and weight $\mechanical{m}\mechanical{g}$ downward. The handwritten expression above the semicircle appears to give the changing weight, $(\mechanical{m}_0-\mechanical{\alpha}t)\mechanical{g}$.

The discussion proposes evaluating the impulse over $\mathrm dt$ by comparing momentum at $t+\mathrm dt$ and $t$. In the handwritten working, the product rule is applied to the rocket momentum alone, giving $\mathrm d(\mechanical{m}\mechanical{v})/\mathrm dt=\mechanical{m}\mechanical{\dot v}-\mechanical{\alpha}\mechanical{v}$. The sketch’s thrust already accounts for the exhaust momentum. To use that thrust, include the momentum of expelled fuel in the balance as on [[#Collisions|the section on Collisions]], with external impulse $-\mechanical{m}\mechanical{g}\,\mathrm dt$.

$$
\mechanical{m}\mechanical{\dot v}
=-\mechanical{v}_{\mathrm{ex}}\mechanical{\dot m}-\mechanical{m}\mechanical{g}
=\mechanical{F}_{\mathrm{thrust}}-\mechanical{m}\mechanical{g}.
$$

##### Momentum carried by rocket exhaust

The handwritten attempt equates $\mathrm d(\mechanical{m}\mechanical{v})/\mathrm dt$ for the rocket alone to $-\mechanical{m}\mechanical{g}$. Applying the product rule with $\mechanical{\dot m}=-\mechanical{\alpha}$ leads in the notes to $\mechanical{m}\mechanical{\dot v}=\mechanical{\alpha}\mechanical{v}-\mechanical{m}\mechanical{g}$, followed by an unfinished separation of variables. This attempt omits the momentum of the emitted mass. In the momentum balance for rocket and exhaust, the term $\mechanical{\alpha}\mechanical{v}$ is replaced by $\mechanical{\alpha}\mechanical{v}_{\mathrm{ex}}$ as on [[#Center of mass of a semicircular wire|the section on Center of mass of a semicircular wire]].

##### Center of mass of a solid cone

Place the tip of a uniform cone at the origin and the circular base at height $\mechanical{H}$ with radius $\mechanical{R}$. Symmetry gives $\mechanical{x}_{\mathrm{cm}}=\mechanical{y}_{\mathrm{cm}}=0$. Let the volume mass density be $\mechanical{\rho}=\mechanical{M}/\mechanical{V}$.

A horizontal section at $\mechanical{z}$ has radius $\mechanical{r}=\mechanical{R}\mechanical{z}/\mechanical{H}$ by similar triangles, so its area is $\mechanical{A}(\mechanical{z})=\pi(\mechanical{R}\mechanical{z}/\mechanical{H})^2$. Replace the two transverse integrals in the Cartesian volume integral by this section area.

$$
\begin{aligned}
\mechanical{z}_{\mathrm{cm}}
&=\frac1{\mechanical{M}}\int \mechanical{z}\,\mathrm d\mechanical{m}
=\frac{\mechanical{\rho}}{\mechanical{M}}\int_V\mechanical{z}\,\mathrm d\mechanical{V}\\
&=\frac{\mechanical{\rho}}{\mechanical{M}}
\int_0^{\mechanical{H}}\mechanical{z}
\left(\int_{A(\mechanical{z})}\mathrm d\mechanical{x}\,\mathrm d\mechanical{y}\right)
\mathrm d\mechanical{z}\\
&=\frac{\mechanical{\rho}}{\mechanical{M}}
\int_0^{\mechanical{H}}\mechanical{z}\,
\pi\left(\frac{\mechanical{R}\mechanical{z}}{\mechanical{H}}\right)^2
\mathrm d\mechanical{z}.
\end{aligned}
$$

##### Evaluating the center-of-mass integral

For the cone, the height integral reduces to a cubic.

$$
\mechanical{z}_{\mathrm{cm}}
=\frac{\mechanical{\rho}\pi\mechanical{R}^2}{\mechanical{M}\mechanical{H}^2}
\int_0^{\mechanical{H}}\mechanical{z}^3\,\mathrm d\mechanical{z}
=\frac{\mechanical{\rho}\pi\mechanical{R}^2\mechanical{H}^2}{4\mechanical{M}}.
$$

Using the cone mass $\mechanical{M}=\mechanical{\rho}\pi\mechanical{R}^2\mechanical{H}/3$ reduces the last expression to $3\mechanical{H}/4$ measured from the tip.

##### Angular momentum and torque

Zero net force implies conservation of linear momentum. For rotation about the origin, define the particle’s angular momentum by $\mechanical{\vec\ell}=\mechanical{\vec r}\times\mechanical{\vec p}$. Differentiate the cross product.

$$
\begin{aligned}
\frac{\mathrm d\mechanical{\vec\ell}}{\mathrm dt}
&=\mechanical{\vec r}\times\frac{\mathrm d\mechanical{\vec p}}{\mathrm dt}
+\mechanical{\vec v}\times\mechanical{\vec p}\\
&=\mechanical{\vec r}\times\mechanical{\vec F}
=\mechanical{\vec\tau},
\end{aligned}
$$

because $\mechanical{\vec p}=\mechanical{m}\mechanical{\vec v}$. The wrench sketch resolves the applied force perpendicular to its handle. The moment magnitude can be written $\mechanical{r}\mechanical{F}\sin\alpha=\mechanical{r}\mechanical{F}_{\perp}$, with $\alpha$ the angle between the handle vector and the force.

##### Central gravity and equal areas

In the Sun–planet sketch, $\mechanical{\vec r}$ extends from the Sun to the planet. The gravitational force on the planet is radial.

$$
\mechanical{\vec F}_{s,p}
=-\frac{\mechanical{G}\mechanical{m}_s\mechanical{m}_p}{\mechanical{r}^2}\hat r.
$$

Its torque about the Sun vanishes, so $\mechanical{\vec L}=\mechanical{\vec r}\times\mechanical{\vec p}$ is constant. The area swept in $\mathrm dt$ is the area of the small triangle formed by $\mechanical{\vec r}$ and $\mechanical{\vec v}\,\mathrm dt$.

$$
\mathrm d\mechanical{A}
=\tfrac12\lvert\mechanical{\vec r}\times\mechanical{\vec v}\rvert\,\mathrm dt
=\frac{\mechanical{L}}{2\mechanical{m}_p}\,\mathrm dt.
$$

Thus the rate of sweeping area is constant.

##### Swept area and angular momentum of a system

The orbit sketch refers to the equal-area result on [[#Evaluating the center-of-mass integral|the section on Evaluating the center-of-mass integral]].

![[Kyle Kabasares - Classical Mechanics - Equal areas in equal times.png|**Fig. 2** Two sectors along an orbit illustrate equal areas swept in equal time intervals.]]

For $N$ particles the total angular momentum about the origin is the sum of the particle angular momenta.

$$
\begin{aligned}
\mechanical{\vec L}
&=\sum_{\alpha=1}^N\mechanical{\vec r}_\alpha\times\mechanical{\vec p}_\alpha,\\
\frac{\mathrm d\mechanical{\vec L}}{\mathrm dt}
&=\sum_{\alpha=1}^N\mechanical{\vec r}_\alpha\times\mechanical{\vec F}_\alpha\\
&=\sum_{\alpha=1}^N\mechanical{\vec r}_\alpha\times
\left(\mechanical{\vec F}^{(\mathrm{ext})}_\alpha+
\sum_{\beta\ne\alpha}\mechanical{\vec F}_{\alpha\beta}\right).
\end{aligned}
$$

##### Working for the weak-drag range

The lower half returns to the projectile calculation. Expand the horizontal position through first order in $\mechanical{k}$ and substitute the approximate flight time from [[Projectile motion with linear and quadratic drag#Weak-drag approximation for the flight time|the section on Weak-drag approximation for the flight time]].

$$
\begin{aligned}
\mechanical{x}(T)
&=\frac{\mechanical{v}_{0x}}{\mechanical{k}}[1-\exp(-\mechanical{k}T)]
\simeq\mechanical{v}_{0x}T(1-\tfrac12\mechanical{k}T),\\
T&\simeq\frac{2\mechanical{v}_{0y}}{\mechanical{g}}
\left(1-\frac{\mechanical{k}\mechanical{v}_{0y}}{3\mechanical{g}}\right).
\end{aligned}
$$

In the second factor of the range, $\mechanical{k}T$ already contains one factor of $\mechanical{k}$, so only the drag-free part of $T$ contributes at first order. Thus the product reduces to the result given on [[Projectile motion with linear and quadratic drag#Momentum of a system|the section on Momentum of a system]]. The expansion at the bottom of the scan trails off and contains dropped factors of $\mechanical{g}$.

##### Second attempt at the weak-drag range

The page starts from the approximate flight time and the exact horizontal position for linear drag.

$$
T\simeq\frac{2\mechanical{v}_{0y}}{\mechanical{g}}
\left(1-\frac{\mechanical{k}\mechanical{v}_{0y}}{3\mechanical{g}}\right),
\qquad
\mechanical{x}(T)=\frac{\mechanical{v}_{0x}}{\mechanical{k}}
[1-\exp(-\mechanical{k}T)].
$$

The subsequent handwritten lines use $\mechanical{v}_{0x}T(1+\tfrac12\mechanical{k}T)$ for the range and repeatedly substitute the approximate $T$ into $\mechanical{R}/(1+\tfrac12\mechanical{k}T)$. The sign in that expansion conflicts with the Taylor series in the line above it. In fact,

$$
1-\exp(-\mechanical{k}T)=\mechanical{k}T-\tfrac12\mechanical{k}^2T^2+\cdots.
$$

Using the minus sign and keeping only first-order terms gives

$$
\begin{aligned}
\mechanical{x}(T)
&\simeq\mechanical{v}_{0x}\frac{2\mechanical{v}_{0y}}{\mechanical{g}}
\left(1-\frac{\mechanical{k}\mechanical{v}_{0y}}{3\mechanical{g}}\right)
\left(1-\frac{\mechanical{k}\mechanical{v}_{0y}}{\mechanical{g}}\right)\\
&\simeq\frac{2\mechanical{v}_{0x}\mechanical{v}_{0y}}{\mechanical{g}}
\left(1-\frac{4\mechanical{k}\mechanical{v}_{0y}}{3\mechanical{g}}\right),
\end{aligned}
$$

in agreement with the lecture result on [[Projectile motion with linear and quadratic drag#Momentum of a system|the section on Momentum of a system]].

The first three lines continue the alternate algebra on [[#Second attempt at the weak-drag range|the section on Second attempt at the weak-drag range]]. They carry the expression with the incorrect plus sign and combine terms of incompatible units, for example $3-2\mechanical{v}_{0y}$. The consistent first-order range is the one on [[Projectile motion with linear and quadratic drag#Momentum of a system|the section on Momentum of a system]] and 27.

##### Angular momentum review

The midterm reminder says to study summation notation, vectors, the textbook, and the derivations.

The first sketch shows a position vector from the origin and the particle momentum at its tip. The derivative of $\mechanical{\vec\ell}=\mechanical{\vec r}\times\mechanical{\vec p}$ is

$$
\frac{\mathrm d\mechanical{\vec\ell}}{\mathrm dt}
=\mechanical{\vec r}\times\mechanical{\dot{\vec p}}
+\mechanical{\dot{\vec r}}\times\mechanical{\vec p}
=\mechanical{\vec\tau},
$$

since the second term is proportional to $\mechanical{\vec v}\times\mechanical{\vec v}=0$. When the torque vanishes, $\mechanical{\vec\ell}$ is constant and $\Delta\mechanical{\vec\ell}=0$.

In the Sun–planet sketch the velocity need not be radial, but the gravitational force is $\mechanical{\vec F}=-\mechanical{G}\mechanical{m}_s\mechanical{m}_p\,\hat r/\mechanical{r}^2$. Therefore $\mathrm d\mechanical{\vec L}/\mathrm dt=\mechanical{\vec r}\times\mechanical{\dot{\vec p}}=0$.

##### Cancellation of internal torques

For $N$ particles, write $\mechanical{\vec\ell}_\alpha=\mechanical{\vec r}_\alpha\times\mechanical{\vec p}_\alpha$ and $\mechanical{\vec L}=\sum_\alpha\mechanical{\vec\ell}_\alpha$. The sketch connects the positions of particles $\alpha$ and $\beta$ by their separation $\mechanical{\vec r}_\alpha-\mechanical{\vec r}_\beta$. In the derivative of the total angular momentum, group the two torques from each internal force pair.

$$
\begin{aligned}
\mechanical{\dot{\vec L}}
&=\sum_\alpha\mechanical{\vec r}_\alpha\times\mechanical{\vec F}^{(\mathrm{ext})}_\alpha\\
&\quad+\sum_{\alpha>\beta}\left(
\mechanical{\vec r}_\alpha\times\mechanical{\vec F}_{\alpha\beta}
+\mechanical{\vec r}_\beta\times\mechanical{\vec F}_{\beta\alpha}\right)\\
&=\sum_\alpha\mechanical{\vec r}_\alpha\times\mechanical{\vec F}^{(\mathrm{ext})}_\alpha
+\sum_{\alpha>\beta}(\mechanical{\vec r}_\alpha-\mechanical{\vec r}_\beta)
\times\mechanical{\vec F}_{\alpha\beta}.
\end{aligned}
$$

The second sum vanishes for central pair forces because each force lies along the corresponding separation. For those interactions the total angular momentum is conserved whenever the net external torque vanishes, including in the absence of external forces.

##### Rotation about the z axis

The angular velocity $\mechanical{\vec\omega}$ points along the rotation axis. If $\theta$ is the angle between the axis and the position vector, the perpendicular distance to the axis is $\mechanical{R}=\mechanical{r}\sin\theta$. The circular path has arc length $\mechanical{s}=\mechanical{R}\phi$ for angle traveled $\phi$. With $\mechanical{\omega}=\dot\phi$ and fixed $\mechanical{R}$,

$$
\mechanical{v}=\frac{\mathrm d\mechanical{s}}{\mathrm dt}
=\mechanical{R}\mechanical{\omega}
=\mechanical{r}\mechanical{\omega}\sin\theta,
\qquad
\mechanical{\vec v}=\mechanical{\vec\omega}\times\mechanical{\vec r}.
$$

##### Moment of inertia

Use the vector triple-product identity

$$
\vec A\times(\vec B\times\vec C)
=\vec B(\vec A\cdot\vec C)-\vec C(\vec A\cdot\vec B).
$$

For particle $\alpha$ rotating with common angular velocity $\mechanical{\vec\omega}$, this gives

$$
\begin{aligned}
\mechanical{\vec\ell}_\alpha
&=\mechanical{m}_\alpha\mechanical{\vec r}_\alpha
\times(\mechanical{\vec\omega}\times\mechanical{\vec r}_\alpha)\\
&=\mechanical{m}_\alpha\left[
\mechanical{r}_\alpha^2\mechanical{\vec\omega}
-(\mechanical{\vec r}_\alpha\cdot\mechanical{\vec\omega})\mechanical{\vec r}_\alpha
\right].
\end{aligned}
$$

The notes drop the second term for positions perpendicular to the rotation axis. More generally, the component of $\mechanical{\vec L}$ along the axis is $\mechanical{L}_z=\mechanical{I}\mechanical{\omega}$, where $\mechanical{R}_\alpha$ is the perpendicular distance to the axis.

$$
\mechanical{I}=\sum_\alpha\mechanical{m}_\alpha\mechanical{R}_\alpha^2
\qquad\text{or}\qquad
\mechanical{I}=\int\mechanical{R}^2\,\mathrm d\mechanical{m}
$$

for a discrete or continuous mass distribution, respectively. In the planar case shown, $\mechanical{\vec L}=\mechanical{I}\mechanical{\vec\omega}$.

##### Torque about the rotation axis

The sketch resolves the force on mass $i$ into its tangential component. The torque component about the axis is the sum of the tangential forces times their lever arms. Each tangential acceleration is $\mechanical{a}_{i,\mathrm{tan}}=\mechanical{R}_i\mechanical{\alpha}$ for the common angular acceleration $\mechanical{\alpha}$.

$$
\mechanical{\tau}_z
=\sum_i\mechanical{R}_i\mechanical{F}_{i,\mathrm{tan}}
=\sum_i\mechanical{R}_i\mechanical{m}_i\mechanical{a}_{i,\mathrm{tan}}
=\mechanical{\alpha}\sum_i\mechanical{m}_i\mechanical{R}_i^2
=\mechanical{I}\mechanical{\alpha}.
$$

##### Comparing the range formula with scratch work

The second line restates the lecture result for the range,

$$
\mechanical{R}'\simeq\frac{2\mechanical{v}_{0y}\mechanical{v}_{0x}}{\mechanical{g}}
\left(1-\frac{4\mechanical{k}\mechanical{v}_{0y}}{3\mechanical{g}}\right).
$$

The opening line gives a trial flight time with correction $-\mechanical{k}\mechanical{v}_{0y}/\mechanical{g}$ inside the parentheses. The lecture derivation on [[Projectile motion with linear and quadratic drag#Weak-drag approximation for the flight time|the section on Weak-drag approximation for the flight time]] instead gives $-\mechanical{k}\mechanical{v}_{0y}/(3\mechanical{g})$. Below that, the scratch work expands $\exp(-x)=1-x+x^2/2!-x^3/3!+\cdots$, but repeats the sign error from [[#Second attempt at the weak-drag range|the section on Second attempt at the weak-drag range]] when subtracting the exponential from $1$. It then multiplies out the product of these two trial factors.

For the first-order approximation, put $u=\mechanical{k}\mechanical{v}_{0y}/\mechanical{g}$. The time contributes the factor $(1-u/3)$. The expansion of the horizontal position contributes $(1-u)$, so their product is $1-4u/3$ through first order, as in the restated result.

## Source

Kyle Kabasares, *Classical Mechanics (Physics 105, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\vec r}$, $\mechanical{r}$ | $\unit{m}$ | Position vector and radial distance | The displacement from the origin and its magnitude. |
| $\mechanical{x}$, $\mechanical{y}$, $\mechanical{z}$, $\mechanical{r}_i$ | $\unit{m}$ | Cartesian position components | Projections of position onto the three coordinate axes. |
| $\mechanical{\vec v}$, $\mechanical{v}_i$ | $\unit{m\,s^{-1}}$ | Velocity and components | The directed rate of change of position. |
| $\theta$, $\phi$, $\psi$ | $\unit{rad}$ | Angles | Angles between vectors or angular coordinates. |
| $\mechanical{\vec F}$, $\mechanical{\vec F}_{\mathrm{net}}$ | $\unit{N}$ | Force and net force | Individual forces and their vector sum on the body. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The inertia of the body in Newton’s second law. |
| $\mechanical{\vec\tau}$ | $\unit{N\,m}$ | Torque | The moment of a force about the selected point. |
| $\mechanical{g}$ | $\unit{m\,s^{-2}}$ | Gravitational acceleration | The acceleration that sets the weight of the body. |
| $t$, $\Delta t$ | $\unit{s}$ | Time and elapsed time | The time coordinate and the interval used for the average velocity. |
| $\mechanical{s}$ | $\unit{m}$ | Path length | Distance measured along the trajectory. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Linear momentum | Mass times velocity. |
| $\mechanical{\vec\omega}$, $\mechanical{\omega}$, $\dot\phi$, $\dot\theta$ | $\unit{rad\,s^{-1}}$ | Angular velocity | Rate of rotation of the position vector in the plane. |
| $\mechanical{R}$, $\mechanical{R}'$ | $\unit{m}$ | Horizontal range | Horizontal distance to the landing point, with a prime used for the weak-drag result. |
| $\mechanical{k}$ | $\unit{s^{-1}}$ | Linear drag rate | Linear drag coefficient divided by the projectile mass. |
| $T$ | $\unit{s}$ | Flight time | Positive time when the projectile returns to launch height. |
| $\mechanical{v}_{\mathrm{ex}}$ | $\unit{m\,s^{-1}}$ | Relative exhaust speed | Speed of the emitted material measured from the rocket. |
| $\mechanical{F}_{\mathrm{thrust}}$ | $\unit{N}$ | Thrust | Forward force from ejecting exhaust backward. |
| $\mechanical{\alpha}$ | $\unit{kg\,s^{-1}}$ | Mass loss rate | Positive rate at which rocket mass is expelled. |
| $\mechanical{M}$ | $\unit{kg}$ | Total mass | Sum of the masses of the particles. |
| $\mechanical{\vec R}_{\mathrm{cm}}$, $\mechanical{x}_{\mathrm{cm}}$, $\mechanical{y}_{\mathrm{cm}}$, $\mechanical{z}_{\mathrm{cm}}$ | $\unit{m}$ | Center-of-mass position and coordinates | Mass-weighted mean of the particle positions. |
| $\mechanical{L}$ | $\unit{m}$ | Length | Length of the uniform rod or total length of a candidate path. |
| $\mechanical{\lambda}$ | $\unit{kg\,m^{-1}}$ | Linear mass density | Mass per unit length of the rod. |
| $\mechanical{\sigma}$ | $\unit{kg\,m^{-2}}$ | Areal mass density | Mass per unit area of a planar body. |
| $\mechanical{A}$, $\mathrm d\mechanical{\vec A}$ | $\unit{m^2}$ | Area and directed area element | Area of a region, orbital sector, or section, and the normal area element in surface integrals. |
| $\mechanical{R}$ | $\unit{m}$ | Radius | Radius of a wire arc or cone, or the perpendicular distance to a rotation axis. |
| $\mechanical{\rho}$ | $\unit{kg\,m^{-3}}$ | Volume mass density | Mass per unit volume of the cone. |
| $\mechanical{V}$ | $\unit{m^3}$ | Volume | Region occupied by the solid body. |
| $\mechanical{H}$ | $\unit{m}$ | Cone height | Axial distance from the tip to the base. |
| $\mechanical{\vec\ell}$, $\mechanical{\vec L}$ | $\unit{kg\,m^2\,s^{-1}}$ | Angular momentum | Moment of the linear momentum about the chosen origin. |
| $\mechanical{G}$ | $\unit{N\,m^2\,kg^{-2}}$ | Gravitational constant | Coefficient in Newton’s inverse-square law of gravitation. |
| $\mechanical{I}$ | $\unit{kg\,m^2}$ | Moment of inertia | Sum or integral of mass weighted by squared distance from the rotation axis. |
| $\mechanical{\alpha}$, $\ddot\phi$, $\ddot\theta$ | $\unit{rad\,s^{-2}}$ | Angular acceleration | Rate of change of angular velocity about the rotation axis. |
| $\mechanical{k}$ | $\unit{N\,m^{-1}}$ | Spring constant | Force magnitude per unit extension or compression, or the local curvature of a position potential. |
| $\mechanical{\sigma}$ | $\unit{m}$ | Particle diameter | Length scale for separation in the pair-potential sketch. |
| $C$, $C_1$, $C_2$ | $\unit{m}$ | Complex displacement coefficients | Coefficients of the complex exponentials used to represent a real oscillation. |
| $\mechanical{R}$ | $\unit{m}$ | Radial scale | Reference length in the radial potential. |
| $\lambda$ | 1 | Radial potential parameter | Sets the equilibrium radius in multiples of the radial scale. |
| $T$ | $\unit{s}$ | Travel time | Time along a candidate path in Fermat’s principle or the brachistochrone problem. |
| $\mechanical{a}$ | $\unit{m}$ | Cycloid scale | Length parameter in the brachistochrone solution. |
| $\mechanical{k}$ | $\unit{m}$ | Polar length integral constant | Constant from the absence of explicit azimuth dependence in the arc-length integrand. |
