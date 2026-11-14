---
title: "Projectile motion with linear and quadratic drag"
---

> [!TLDR]
> Compare the force models, derive the linear-drag trajectory, and examine the approximations used for projectile range.

## Worked lecture material

##### Sliding in a circular track

The sketch places a block on the inside of a circular track. The radius $\mechanical{r}$ is fixed, and $\phi$ is the angle from the downward vertical. The normal force points toward the center. The component of weight tangent to the track is restoring.

$$
\mechanical{F}_{\mathrm{tan}}=-\mechanical{m}\mechanical{g}\sin\phi
=\mechanical{m}\mechanical{r}\ddot\phi,
\qquad
\ddot\phi=-\frac{\mechanical{g}}{\mechanical{r}}\sin\phi.
$$

For small $\phi$, use $\sin\phi\simeq\phi$ to obtain $\ddot\phi\simeq-\signal{\omega}^2\phi$ with $\signal{\omega}^2=\mechanical{g}/\mechanical{r}$. The page recalls the Taylor expansions

$$
\sin\phi=\phi-\frac{\phi^3}{3!}+\frac{\phi^5}{5!}-\frac{\phi^7}{7!}+\cdots,
\qquad
\cos\phi=1-\frac{\phi^2}{2!}+\frac{\phi^4}{4!}-\cdots.
$$

##### Drag

Write $\mechanical{\vec v}=\mechanical{v}\hat v$. The drag force points opposite the velocity. A speed expansion of its magnitude has zero constant term because drag vanishes at $\mechanical{v}=0$.

$$
\mechanical{\vec f}
=-(\mechanical{b}\mechanical{v}+\mechanical{c}\mechanical{v}^2)\hat v,
\qquad
\mechanical{f}_{\mathrm{lin}}=\mechanical{b}\mechanical{v},
\qquad
\mechanical{f}_{\mathrm{quad}}=\mechanical{c}\mechanical{v}^2.
$$

The linear term depends on viscosity and the quadratic term on cross-sectional area. For a spherical projectile of diameter $\mechanical{D}$ the notes give $\mechanical{b}=\mechanical{\beta}\mechanical{D}$ and $\mechanical{c}=\mechanical{\gamma}\mechanical{D}^2$, with $\mechanical{\beta}=1.6\times10^{-4}\,\unit{N\,s\,m^{-2}}$ and $\mechanical{\gamma}=0.25\,\unit{N\,s^2\,m^{-4}}$.

$$
\frac{\mechanical{f}_{\mathrm{quad}}}{\mechanical{f}_{\mathrm{lin}}}
=\frac{\mechanical{c}\mechanical{v}^2}{\mechanical{b}\mechanical{v}}
=\frac{\mechanical{\gamma}}{\mechanical{\beta}}\mechanical{D}\mechanical{v}
\simeq(1.6\times10^3\,\unit{s\,m^{-2}})\mechanical{D}\mechanical{v}.
$$

For $\mechanical{D}=7\,\unit{cm}$ and $\mechanical{v}=5\,\unit{m\,s^{-1}}$, the ratio is approximately $560$, rounded in the notes to about $600$.

##### Projectile motion without drag

The lecture recalls $\mechanical{f}=\mechanical{b}\mechanical{v}+\mechanical{c}\mechanical{v}^2$ and notes that Taylor treats horizontal and vertical motion with linear and quadratic drag. The first example sets drag to zero. The sketch shows a projectile starting at the origin with speed $\mechanical{v}_0$ at angle $\theta$ above the horizontal.

In the absence of drag, $\mechanical{F}_x=0$ and $\mechanical{F}_y=-\mechanical{m}\mechanical{g}$. Therefore $\mechanical{\ddot x}=0$ and $\mechanical{\ddot y}=-\mechanical{g}$. Integrate each component with the initial velocity from the sketch.

$$
\begin{aligned}
\mechanical{v}_x(t)&=\mechanical{v}_{0x}=\mechanical{v}_0\cos\theta,\\
\mechanical{v}_y(t)&=\mechanical{v}_{0y}-\mechanical{g}t
=\mechanical{v}_0\sin\theta-\mechanical{g}t.
\end{aligned}
$$

Integrate again, with $\mechanical{x}_0=\mechanical{y}_0=0$ in the example.

$$
\begin{aligned}
\mechanical{x}(t)&=\mechanical{x}_0+(\mechanical{v}_0\cos\theta)t,\\
\mechanical{y}(t)&=\mechanical{y}_0+(\mechanical{v}_0\sin\theta)t-\tfrac12\mechanical{g}t^2.
\end{aligned}
$$

The speed is the magnitude of the velocity.

$$
\begin{aligned}
\mechanical{v}
&=\sqrt{\mechanical{v}_x^2+\mechanical{v}_y^2}
=\sqrt{\mechanical{v}_0^2\cos^2\theta+
(\mechanical{v}_0\sin\theta-\mechanical{g}t)^2}\\
&=\sqrt{\mechanical{v}_0^2+\mechanical{g}^2t^2-2\mechanical{v}_0\mechanical{g}t\sin\theta}.
\end{aligned}
$$

##### Projectile distance, range, and height

The distance from the origin is the magnitude of the position vector.

$$
\mechanical{r}(t)
=\sqrt{\mechanical{v}_0^2t^2+\frac{\mechanical{g}^2t^4}{4}
-\mechanical{v}_0\mechanical{g}t^3\sin\theta}.
$$

For a projectile that lands at its launch height, factor the vertical coordinate as $\mechanical{y}(t)=t(\mechanical{v}_0\sin\theta-\tfrac12\mechanical{g}t)$. The nonzero root and the corresponding horizontal range are

$$
t_f=\frac{2\mechanical{v}_0\sin\theta}{\mechanical{g}},
\qquad
\mechanical{R}=\mechanical{v}_0\cos\theta\,t_f
=\frac{\mechanical{v}_0^2\sin(2\theta)}{\mechanical{g}}.
$$

The maximum occurs halfway through the flight, when the vertical velocity is zero. Substituting $t_{\max}=\mechanical{v}_0\sin\theta/\mechanical{g}$ gives $\mechanical{y}_{\max}=\mechanical{v}_0^2\sin^2\theta/(2\mechanical{g})$. The height formula at the edge of the scan is partly clipped. This expression follows from the preceding vertical trajectory.

The example uses $\mechanical{v}_0=1450\,\unit{m\,s^{-1}}$, $\theta=55^\circ$, and $\mechanical{g}=9.8\,\unit{m\,s^{-2}}$, giving about $201.6\,\unit{km}$ in the level-ground model without drag.

##### Adding linear air resistance

The sketch shows weight vertically downward and drag opposite the velocity. In the linear model, write $\mechanical{\vec f}=-\mechanical{b}\mechanical{\vec v}=-\mechanical{k}\mechanical{m}\mechanical{\vec v}$ with $\mechanical{k}=\mechanical{b}/\mechanical{m}$. Newton’s second law gives

$$
\begin{aligned}
\mechanical{m}\mechanical{\dot v}_x&=-\mechanical{k}\mechanical{m}\mechanical{v}_x,\\
\mechanical{m}\mechanical{\dot v}_y&=-\mechanical{m}\mechanical{g}
-\mechanical{k}\mechanical{m}\mechanical{v}_y.
\end{aligned}
$$

Separate the horizontal equation, $\mathrm d\mechanical{v}_x/\mechanical{v}_x=-\mechanical{k}\,\mathrm dt$. For positive $\mechanical{v}_{0x}$ the integrated equation can be written $\ln(\mechanical{v}_x/\mechanical{v}_{0x})=-\mechanical{k}t$.

##### Projectile motion with linear drag

The lecture recaps the drag-free component equations $\mechanical{\dot v}_x=0$ and $\mechanical{\dot v}_y=-\mechanical{g}$. With linear drag, the force diagram again shows $\mechanical{m}\mechanical{\vec g}$ downward and $\mechanical{\vec f}=-\mechanical{k}\mechanical{m}\mechanical{\vec v}$ opposite the velocity. The equations separate by component.

For horizontal motion, $\mechanical{\dot v}_x=-\mechanical{k}\mechanical{v}_x$. Exponentiating the integrated logarithmic equation gives $\mechanical{v}_x=C\exp(-\mechanical{k}t)$, where the initial condition fixes $C=\mechanical{v}_{0x}$. With zero initial horizontal position,

$$
\mechanical{\dot x}(t)=\mechanical{v}_{0x}\exp(-\mechanical{k}t),
\qquad
\mechanical{x}(t)
=\frac{\mechanical{v}_{0x}}{\mechanical{k}}[1-\exp(-\mechanical{k}t)].
$$

For vertical motion, $\mechanical{\dot v}_y=-\mechanical{g}-\mechanical{k}\mechanical{v}_y$. For initial height $\mechanical{h}$ and initial vertical velocity $\mechanical{v}_{0y}$ the notes give

$$
\begin{aligned}
\mechanical{\dot y}(t)
&=-\frac{\mechanical{g}}{\mechanical{k}}
+\frac{\mechanical{k}\mechanical{v}_{0y}+\mechanical{g}}{\mechanical{k}}
\exp(-\mechanical{k}t),\\
\mechanical{y}(t)
&=\mechanical{h}-\frac{\mechanical{g}t}{\mechanical{k}}
+\frac{\mechanical{k}\mechanical{v}_{0y}+\mechanical{g}}{\mechanical{k}^2}
[1-\exp(-\mechanical{k}t)].
\end{aligned}
$$

##### Integrating the linear-drag equations

Integrate the horizontal velocity and use $\mechanical{x}(0)=\mechanical{x}_0$ to determine the integration constant.

$$
\begin{aligned}
\mechanical{x}(t)&=-\frac{\mechanical{v}_{0x}}{\mechanical{k}}\exp(-\mechanical{k}t)+C,\\
C&=\mechanical{x}_0+\frac{\mechanical{v}_{0x}}{\mechanical{k}},\\
\mechanical{x}(t)&=\mechanical{x}_0+
\frac{\mechanical{v}_{0x}}{\mechanical{k}}[1-\exp(-\mechanical{k}t)].
\end{aligned}
$$

The notes take $\mechanical{x}_0=0$. For the vertical component, separate $\mechanical{\dot v}_y=-(\mechanical{g}+\mechanical{k}\mechanical{v}_y)$.

$$
\frac{\mathrm d\mechanical{v}_y}{\mechanical{g}+\mechanical{k}\mechanical{v}_y}
=-\mathrm dt.
$$

Integrating and exponentiating for the launch considered gives

$$
\begin{aligned}
\mechanical{k}\mechanical{v}_y+\mechanical{g}&=C\exp(-\mechanical{k}t),\\
\mechanical{v}_y&=-\frac{\mechanical{g}}{\mechanical{k}}
+\frac{C}{\mechanical{k}}\exp(-\mechanical{k}t),\\
C&=\mechanical{k}\mechanical{v}_{0y}+\mechanical{g}.
\end{aligned}
$$

##### Vertical position and flight time with linear drag

Integrating the vertical velocity gives

$$
\mechanical{y}(t)
=-\frac{\mechanical{g}t}{\mechanical{k}}
-\frac{\mechanical{k}\mechanical{v}_{0y}+\mechanical{g}}{\mechanical{k}^2}
\exp(-\mechanical{k}t)+C.
$$

The initial height is zero here, so $C=(\mechanical{k}\mechanical{v}_{0y}+\mechanical{g})/\mechanical{k}^2$. The boxed equation and its horizontal counterpart are

$$
\begin{aligned}
\mechanical{y}(t)
&=-\frac{\mechanical{g}t}{\mechanical{k}}
+\frac{\mechanical{k}\mechanical{v}_{0y}+\mechanical{g}}{\mechanical{k}^2}
[1-\exp(-\mechanical{k}t)],\\
\mechanical{x}(t)
&=\frac{\mechanical{v}_{0x}}{\mechanical{k}}
[1-\exp(-\mechanical{k}t)].
\end{aligned}
$$

The horizontal line on the scan appears to omit the minus sign in the exponent. The integrated result on the previous page supplies it.

Set $\mechanical{y}(T)=0$ at the positive landing time $T$. The notes call this the time for maximum range, meaning the end of the flight for this launch.

$$
T=\frac{\mechanical{k}\mechanical{v}_{0y}+\mechanical{g}}
{\mechanical{g}\mechanical{k}}\,[1-\exp(-\mechanical{k}T)].
$$

Expand the exponential and divide by $T$ to obtain

$$
1=\frac{\mechanical{k}\mechanical{v}_{0y}+\mechanical{g}}
{\mechanical{g}\mechanical{k}}
\left(\mechanical{k}-\tfrac12\mechanical{k}^2T
+\tfrac16\mechanical{k}^3T^2+\cdots\right).
$$

##### Weak-drag approximation for the flight time

Use $1-\exp(-\mechanical{k}T)=\mechanical{k}T-\tfrac12(\mechanical{k}T)^2+\tfrac16(\mechanical{k}T)^3+\cdots$. Keeping the terms needed to find the first-order correction gives

$$
T\simeq
\frac{2\mechanical{v}_{0y}/\mechanical{g}}
{1+\mechanical{k}\mechanical{v}_{0y}/\mechanical{g}}
+\tfrac13\mechanical{k}T^2.
$$

At $\mechanical{k}=0$, the right side reduces to the drag-free time $T_0=2\mechanical{v}_{0y}/\mechanical{g}=2\mechanical{v}_0\sin\theta/\mechanical{g}$. Substitute $T_0$ for $T$ in the term already multiplied by $\mechanical{k}$ and use $(1+u)^{-1}\simeq1-u$.

$$
\begin{aligned}
T&\simeq\frac{2\mechanical{v}_{0y}}{\mechanical{g}}
\left(1-\frac{\mechanical{k}\mechanical{v}_{0y}}{\mechanical{g}}\right)
+\tfrac13\mechanical{k}
\left(\frac{2\mechanical{v}_{0y}}{\mechanical{g}}\right)^2\\
&=\frac{2\mechanical{v}_{0y}}{\mechanical{g}}
\left(1-\frac{\mechanical{k}\mechanical{v}_{0y}}{3\mechanical{g}}\right).
\end{aligned}
$$

##### Range with weak linear drag

The lecture repeats the flight-time derivation from $\mechanical{y}(T)=0$ using the Taylor series for the exponential and the binomial expansion for $(1+u)^n$. To find the range, expand the horizontal position at the landing time.

$$
\mechanical{x}(T)
=\frac{\mechanical{v}_{0x}}{\mechanical{k}}
\left(\mechanical{k}T-\tfrac12\mechanical{k}^2T^2
+\tfrac16\mechanical{k}^3T^3+\cdots\right).
$$

Keeping terms through first order in $\mechanical{k}$ gives $\mechanical{R}'\simeq\mechanical{v}_{0x}(T-\tfrac12\mechanical{k}T^2)$.

The first-order range, using the flight time on the previous page, is

$$
\mechanical{R}'\simeq
\frac{2\mechanical{v}_{0y}\mechanical{v}_{0x}}{\mechanical{g}}
\left(1-\frac{4\mechanical{k}\mechanical{v}_{0y}}{3\mechanical{g}}\right).
$$

##### Momentum of a system

For the three particles in the sketch, the total internal force is the sum of $\mechanical{\vec F}_{12}$, $\mechanical{\vec F}_{13}$, $\mechanical{\vec F}_{21}$, $\mechanical{\vec F}_{23}$, $\mechanical{\vec F}_{31}$, and $\mechanical{\vec F}_{32}$. For $n$ particles, split the net force into external and internal contributions.

$$
\begin{aligned}
\mechanical{\vec F}_{\mathrm{net}}
&=\mechanical{\vec F}_{\mathrm{net}}^{(\mathrm{ext})}
+\sum_{\substack{\alpha,\beta=1\\\alpha\ne\beta}}^n\mechanical{\vec F}_{\alpha\beta}\\
&=\mechanical{\vec F}_{\mathrm{net}}^{(\mathrm{ext})}
+\sum_{\substack{\alpha,\beta=1\\\alpha>\beta}}^n
(\mechanical{\vec F}_{\alpha\beta}+\mechanical{\vec F}_{\beta\alpha})
=\mechanical{\vec F}_{\mathrm{net}}^{(\mathrm{ext})}.
\end{aligned}
$$

The internal terms cancel by Newton’s third law. Summing Newton’s second law over the particles gives $\mathrm d\mechanical{\vec P}/\mathrm dt=\mechanical{\vec F}_{\mathrm{net}}^{(\mathrm{ext})}$. If the net external force is zero, the total momentum is constant and $\mechanical{\vec P}_f-\mechanical{\vec P}_i=0$.

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
| $\mechanical{g}$ | $\unit{m\,s^{-2}}$ | Gravitational acceleration | The acceleration that sets the weight of the body. |
| $t$, $\Delta t$ | $\unit{s}$ | Time and elapsed time | The time coordinate and the interval used for the average velocity. |
| $\mechanical{\vec P}$ | $\unit{kg\,m\,s^{-1}}$ | Total linear momentum | Vector sum of the individual particle momenta. |
| $\signal{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular frequency | Frequency in radians per second for the small oscillation. |
| $\mechanical{\vec f}$, $\mechanical{f}_{\mathrm{lin}}$, $\mechanical{f}_{\mathrm{quad}}$ | $\unit{N}$ | Drag force and term magnitudes | Drag opposes motion and has linear and quadratic speed terms. |
| $\mechanical{b}$ | $\unit{N\,s\,m^{-1}}$ | Linear drag coefficient | Multiplier of speed in the linear drag term. |
| $\mechanical{c}$ | $\unit{N\,s^2\,m^{-2}}$ | Quadratic drag coefficient | Multiplier of speed squared in the quadratic drag term. |
| $\mechanical{D}$ | $\unit{m}$ | Diameter | The diameter of the spherical projectile. |
| $\mechanical{\beta}$ | $\unit{N\,s\,m^{-2}}$ | Linear drag factor | Coefficient of diameter in the formula for linear drag. |
| $\mechanical{\gamma}$ | $\unit{N\,s^2\,m^{-4}}$ | Quadratic drag factor | Coefficient of diameter squared in the formula for quadratic drag. |
| $\mechanical{R}$, $\mechanical{R}'$ | $\unit{m}$ | Horizontal range | Horizontal distance to the landing point, with a prime used for the weak-drag result. |
| $\mechanical{k}$ | $\unit{s^{-1}}$ | Linear drag rate | Linear drag coefficient divided by the projectile mass. |
| $\mechanical{h}$ | $\unit{m}$ | Initial height | Vertical coordinate at launch in the drag calculation. |
| $T$ | $\unit{s}$ | Flight time | Positive time when the projectile returns to launch height. |
| $\mechanical{R}$ | $\unit{m}$ | Radius | Radius of a wire arc or cone, or the perpendicular distance to a rotation axis. |
| $\mechanical{\alpha}$, $\ddot\phi$, $\ddot\theta$ | $\unit{rad\,s^{-2}}$ | Angular acceleration | Rate of change of angular velocity about the rotation axis. |
| $\mechanical{k}$ | $\unit{N\,m^{-1}}$ | Spring constant | Force magnitude per unit extension or compression, or the local curvature of a position potential. |
| $\mechanical{b}$ | $\unit{m}$ | Cube half-width | Half the length of an edge of the cube. |
| $C$, $C_1$, $C_2$ | $\unit{m}$ | Complex displacement coefficients | Coefficients of the complex exponentials used to represent a real oscillation. |
| $\mechanical{R}$ | $\unit{m}$ | Radial scale | Reference length in the radial potential. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light in vacuum | Reference speed in the travel-time functional. |
| $T$ | $\unit{s}$ | Travel time | Time along a candidate path in Fermat’s principle or the brachistochrone problem. |
| $\mechanical{k}$ | $\unit{m}$ | Polar length integral constant | Constant from the absence of explicit azimuth dependence in the arc-length integrand. |
