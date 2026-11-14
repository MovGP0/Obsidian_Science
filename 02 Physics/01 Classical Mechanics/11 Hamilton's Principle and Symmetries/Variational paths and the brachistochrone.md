---
title: "Variational paths and the brachistochrone"
---

> [!TLDR]
> Use fixed-endpoint variations, cyclic coordinates, and a convenient path parameter to derive stationary paths.

## Worked lecture material

##### Variational problems

The sketch compares a candidate curve with an alternate curve joining the same fixed endpoints. For a path $\mechanical{y}(\mechanical{x})$ with increasing $\mechanical{x}$, the arc length is

$$
\mechanical{L}[\mechanical{y}]
=\int_{\mechanical{x}_1}^{\mechanical{x}_2}
\sqrt{1+(\mechanical{y}')^2}\,\mathrm d\mechanical{x}.
$$

The objective in the shortest-path problem is to minimize this length over curves. A separate sketch shows the corresponding idea for an ordinary function, whose derivative is zero at a smooth interior extremum.

##### Fermat’s principle

The ray sketch bends toward the normal on entering a medium of refractive index $1.1$ from one of index $1.0$. In a medium of index $\signal{n}$, the speed is $\mechanical{v}=\mechanical{c}/\signal{n}$. The travel time along a path is

$$
\begin{aligned}
T&=\int_1^2\frac{\mathrm d\mechanical{s}}{\mechanical{v}}
=\frac1{\mechanical{c}}\int_1^2\signal{n}\,\mathrm d\mechanical{s}\\
&=\frac1{\mechanical{c}}\int_{\mechanical{x}_1}^{\mechanical{x}_2}
\signal{n}(\mechanical{x},\mechanical{y})\sqrt{1+(\mechanical{y}')^2}\,
\mathrm d\mechanical{x}.
\end{aligned}
$$

The notes call this the least-time path. The overall constant $1/\mechanical{c}$ can be dropped when comparing paths, as in the last handwritten integral.

##### Stationary functional and fixed endpoints

Both examples have the general form $S[y]=\int_{x_1}^{x_2}f(y(x),y'(x),x)\,\mathrm dx$. Seek a curve $y(x)$ for which $S$ is stationary. Compare it with $Y(x)=y(x)+\eta(x)$, where $\eta(x_1)=\eta(x_2)=0$ so the varied curve keeps the endpoints.

##### Deriving the Euler–Lagrange equation

Introduce the scalar variation parameter $\alpha$ and set $Y(x)=y(x)+\alpha\eta(x)$. The varied functional becomes an ordinary function of $\alpha$.

$$
S(\alpha)=\int_{x_1}^{x_2}f(Y(x),Y'(x),x)\,\mathrm dx.
$$

Stationarity requires $\mathrm dS/\mathrm d\alpha=0$ at $\alpha=0$ for every allowed $\eta$. In the chain rule, $\partial_\alpha Y=\eta$, $\partial_\alpha Y'=\eta'$, and $\partial_\alpha x=0$. Thus

$$
\begin{aligned}
\left.\frac{\mathrm dS}{\mathrm d\alpha}\right|_{\alpha=0}
&=\int_{x_1}^{x_2}\left(
\frac{\partial f}{\partial y}\eta+\frac{\partial f}{\partial y'}\eta'
\right)\mathrm dx\\
&=\left[\frac{\partial f}{\partial y'}\eta\right]_{x_1}^{x_2}
+\int_{x_1}^{x_2}\left[
\frac{\partial f}{\partial y}
-\frac{\mathrm d}{\mathrm dx}\left(\frac{\partial f}{\partial y'}\right)
\right]\eta\,\mathrm dx.
\end{aligned}
$$

The boundary term from integration by parts vanishes because the endpoints are fixed. Since the variation in the interior is arbitrary, the bracketed integrand coefficient must vanish.

$$
\frac{\partial f}{\partial y}
-\frac{\mathrm d}{\mathrm dx}\left(\frac{\partial f}{\partial y'}\right)=0.
$$

##### Second form of the Euler–Lagrange equation

For $f=f(y,y',x)$, use the chain rule and the product rule.

$$
\begin{aligned}
\frac{\mathrm df}{\mathrm dx}
&=\frac{\partial f}{\partial x}+y'\frac{\partial f}{\partial y}
+y''\frac{\partial f}{\partial y'},\\
\frac{\mathrm d}{\mathrm dx}\left(y'\frac{\partial f}{\partial y'}\right)
&=y''\frac{\partial f}{\partial y'}
+y'\frac{\mathrm d}{\mathrm dx}\left(\frac{\partial f}{\partial y'}\right).
\end{aligned}
$$

Subtract the first equation from the second. The Euler–Lagrange equation cancels the remaining terms proportional to $y'$, giving

$$
\frac{\mathrm d}{\mathrm dx}
\left(y'\frac{\partial f}{\partial y'}-f\right)
+\frac{\partial f}{\partial x}=0.
$$

If $f$ has no explicit dependence on $x$, the expression in parentheses is constant.

##### Brachistochrone setup

The goal is to find the path of shortest travel time for a body released from rest and sliding under gravity. Measure $\mechanical{x}$ downward from the release point and $\mechanical{y}$ horizontally. Conservation of $\energy{E}=\energy{T}+\energy{U}$ with $\energy{U}=-\mechanical{m}\mechanical{g}\mechanical{x}$ gives $\mechanical{v}=\sqrt{2\mechanical{g}\mechanical{x}}$. The written energy line has a plus sign before the gravity term, while the positive downward coordinate and the resulting speed require the minus sign.

$$
T=\int_1^2\frac{\mathrm d\mechanical{s}}{\mechanical{v}}
=\int_{\mechanical{x}_1}^{\mechanical{x}_2}
\frac{\sqrt{1+(\mechanical{y}')^2}}{\sqrt{2\mechanical{g}\mechanical{x}}}\,
\mathrm d\mechanical{x}.
$$

The integrand depends explicitly on $\mechanical{x}$ and on the slope $\mechanical{y}'$. It has no explicit dependence on $\mechanical{y}$.

##### Integrating the brachistochrone equation

Because the time integrand is independent of $\mechanical{y}$, the Euler–Lagrange equation gives a constant $\partial f/\partial\mechanical{y}'$. Absorb the factor $1/\sqrt{2\mechanical{g}}$ into the constant and parameterize it by a positive length $\mechanical{a}$.

$$
\frac{\mechanical{y}'}{\sqrt{\mechanical{x}}\sqrt{1+(\mechanical{y}')^2}}
=\frac1{\sqrt{2\mechanical{a}}},
\qquad
(\mechanical{y}')^2=\frac{\mechanical{x}}{2\mechanical{a}-\mechanical{x}}.
$$

The notes choose the branch for increasing $\mechanical{y}$ on the downward segment. Substitute $\mechanical{x}=\mechanical{a}(1-\cos\theta)$ so that $\mathrm d\mechanical{x}=\mechanical{a}\sin\theta\,\mathrm d\theta$. For $0<\theta<\pi$,

$$
\sqrt{\frac{\mechanical{x}}{2\mechanical{a}-\mechanical{x}}}
=\sqrt{\frac{1-\cos\theta}{1+\cos\theta}}
=\frac{1-\cos\theta}{\sin\theta}.
$$

The last equality uses $\sin^2\theta+\cos^2\theta=1$ and $\sin\theta>0$ on this segment. The sine cancels in the integral, leaving $\mechanical{y}=\int\mechanical{a}(1-\cos\theta)\,\mathrm d\theta$. Choose $\mechanical{y}=0$ at $\theta=0$ to obtain the boxed parametrization.

$$
\mechanical{x}=\mechanical{a}(1-\cos\theta),
\qquad
\mechanical{y}=\mechanical{a}(\theta-\sin\theta).
$$

##### Shortest path in polar coordinates

The lecture restates the second form of the Euler–Lagrange equation. If the independent and dependent variables are exchanged, the functional is written $S=\int f(x,x',y)\,\mathrm dy$, with $x'=\mathrm dx/\mathrm dy$.

In the discussion problem, use $\theta$ as the independent variable and let $\mechanical{r}'=\mathrm d\mechanical{r}/\mathrm d\theta$. For increasing $\theta$,

$$
\mathrm d\mechanical{\vec s}=\hat r\,\mathrm d\mechanical{r}
+\hat\theta\,\mechanical{r}\,\mathrm d\theta,
\qquad
\mathrm d\mechanical{s}
=\sqrt{(\mechanical{r}')^2+\mechanical{r}^2}\,\mathrm d\theta.
$$

The length integrand $f=\sqrt{(\mechanical{r}')^2+\mechanical{r}^2}$ has no explicit $\theta$ dependence. Therefore $f-\mechanical{r}'\partial f/\partial\mechanical{r}'$ is constant. Differentiate and combine the terms over a common denominator.

$$
\begin{aligned}
\frac{\partial f}{\partial\mechanical{r}'}
&=\frac{\mechanical{r}'}{\sqrt{(\mechanical{r}')^2+\mechanical{r}^2}},\\
\mechanical{k}
&=\sqrt{(\mechanical{r}')^2+\mechanical{r}^2}
-\frac{(\mechanical{r}')^2}{\sqrt{(\mechanical{r}')^2+\mechanical{r}^2}}
=\frac{\mechanical{r}^2}{\sqrt{(\mechanical{r}')^2+\mechanical{r}^2}}.
\end{aligned}
$$

Squaring gives $\mechanical{r}^4=\mechanical{k}^2[(\mechanical{r}')^2+\mechanical{r}^2]$, hence

$$
(\mechanical{r}')^2=\frac{\mechanical{r}^2(\mechanical{r}^2-\mechanical{k}^2)}
{\mechanical{k}^2}.
$$

On the branch with increasing radius, the polar length equation separates as

$$
\frac{\mathrm d\mechanical{r}}{\mathrm d\theta}
=\frac{\mechanical{r}\sqrt{\mechanical{r}^2-\mechanical{k}^2}}{\mechanical{k}},
\qquad
\theta=\int\frac{\mechanical{k}\,\mathrm d\mechanical{r}}
{\mechanical{r}\sqrt{\mechanical{r}^2-\mechanical{k}^2}}.
$$

The last handwritten radical appears to switch to a plus sign. The separated differential in the preceding line fixes the minus sign.

##### Chapter 7 and Hamilton’s principle

The heading labels this the birthday lecture. A one-dimensional spring obeys $\mechanical{m}\mechanical{\ddot x}=-\mechanical{k}\mechanical{x}$, with total energy $\energy{E}_{\mathrm T}=\energy{T}+\energy{U}$. The Lagrangian instead uses the difference $\energy{\mathcal L}=\energy{T}-\energy{U}$. Hamilton’s principle states that the action is stationary for variations with fixed endpoints.

$$
\energy{S}=\int_{t_1}^{t_2}\energy{\mathcal L}\,\mathrm dt.
$$

To transfer the general variational calculation to mechanics, replace the independent variable $x$ by $t$, the curve value $y$ by the position $\mechanical{x}$, and the slope $y'$ by $\mechanical{\dot x}$. For the spring, $\energy{T}=\tfrac12\mechanical{m}\mechanical{\dot x}^2$ and $\energy{U}=\tfrac12\mechanical{k}\mechanical{x}^2$. The equation for a stationary action is

$$
\frac{\partial\energy{\mathcal L}}{\partial\mechanical{x}}
-\frac{\mathrm d}{\mathrm dt}
\left(\frac{\partial\energy{\mathcal L}}{\partial\mechanical{\dot x}}\right)=0.
$$

## Source

Kyle Kabasares, *Classical Mechanics (Physics 105, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\vec r}$, $\mechanical{r}$ | $\unit{m}$ | Position vector and radial distance | The displacement from the origin and its magnitude. |
| $\mechanical{x}$, $\mechanical{y}$, $\mechanical{z}$, $\mechanical{r}_i$ | $\unit{m}$ | Cartesian position components | Projections of position onto the three coordinate axes. |
| $\theta$, $\phi$, $\psi$ | $\unit{rad}$ | Angles | Angles between vectors or angular coordinates. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The inertia of the body in Newton’s second law. |
| $\mechanical{g}$ | $\unit{m\,s^{-2}}$ | Gravitational acceleration | The acceleration that sets the weight of the body. |
| $t$, $\Delta t$ | $\unit{s}$ | Time and elapsed time | The time coordinate and the interval used for the average velocity. |
| $\mechanical{s}$ | $\unit{m}$ | Path length | Distance measured along the trajectory. |
| $\energy{K}$, $\energy{T}$ | $\unit{J}$ | Kinetic energy | The energy associated with motion. |
| $\energy{U}$ | $\unit{J}$ | Potential energy | Energy defined from the work of a conservative force. |
| $\energy{E}$, $\energy{E}_{\mathrm T}$ | $\unit{J}$ | Total mechanical energy | The sum of kinetic and potential energy. |
| $\mechanical{c}$ | $\unit{N\,s^2\,m^{-2}}$ | Quadratic drag coefficient | Multiplier of speed squared in the quadratic drag term. |
| $\mechanical{k}$ | $\unit{s^{-1}}$ | Linear drag rate | Linear drag coefficient divided by the projectile mass. |
| $T$ | $\unit{s}$ | Flight time | Positive time when the projectile returns to launch height. |
| $\mechanical{L}$ | $\unit{m}$ | Length | Length of the uniform rod or total length of a candidate path. |
| $\mechanical{k}$ | $\unit{N\,m^{-1}}$ | Spring constant | Force magnitude per unit extension or compression, or the local curvature of a position potential. |
| $\signal{n}$ | 1 | Refractive index | Ratio of the vacuum speed of light to the speed in the medium. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light in vacuum | Reference speed in the travel-time functional. |
| $T$ | $\unit{s}$ | Travel time | Time along a candidate path in Fermat’s principle or the brachistochrone problem. |
| $\mechanical{a}$ | $\unit{m}$ | Cycloid scale | Length parameter in the brachistochrone solution. |
| $\mechanical{k}$ | $\unit{m}$ | Polar length integral constant | Constant from the absence of explicit azimuth dependence in the arc-length integrand. |
| $\energy{\mathcal L}$ | $\unit{J}$ | Lagrangian | Kinetic energy minus potential energy for the systems considered here. |
| $\energy{S}$ | $\unit{J\,s}$ | Action | Time integral of the Lagrangian along a candidate trajectory. |
