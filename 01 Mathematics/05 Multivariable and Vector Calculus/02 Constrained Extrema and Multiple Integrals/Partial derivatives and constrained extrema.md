---
title: "Partial derivatives and constrained extrema"
---

> [!TLDR]
> Test multivariable limits, find tangent planes and gradients, and compare interior and boundary extrema.

## Worked lecture material

##### Projectile motion with a three-dimensional launch direction

The initial speed is $\quantity{240}{m\,s^{-1}}$. The calculation uses azimuth $\mechanical{\theta}=3\pi/4$ measured from east toward north and inclination $\mechanical{\phi}=\pi/3$ from the positive vertical. The compass sketch instead marks $\pi/3$ from west, which would give an azimuth of $2\pi/3$. The component calculation below follows the written azimuth $3\pi/4$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Projectile compass direction.png|**Fig. 77** The horizontal launch direction points northwest. The angle in the sketch and the angle used in the component calculation differ.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Projectile inclination.png|**Fig. 78** The inclination is $\pi/3$ from the vertical.]]

Using the spherical-coordinate direction vector,

$$
\mechanical{\mathbf v}(0)=
(\quantity{240}{m\,s^{-1}})
\left\langle
\cos\left(\frac{3\pi}{4}\right)\sin\left(\frac{\pi}{3}\right),
\sin\left(\frac{3\pi}{4}\right)\sin\left(\frac{\pi}{3}\right),
\cos\left(\frac{\pi}{3}\right)
\right\rangle.
$$

The acceleration is $\langle0,0,-10\rangle$ in $\unit{m\,s^{-2}}$. With numerical time in seconds, integration gives the velocity in $\unit{m\,s^{-1}}$ and the position in $\unit{m}$:

$$
\begin{aligned}
\mechanical{\mathbf v}(t)&=\langle-60\sqrt6,60\sqrt6,120-10t\rangle,\\
\mechanical{\mathbf r}(t)&=\langle-60t\sqrt6,60t\sqrt6,120t-5t^2\rangle.
\end{aligned}
$$

The projectile starts at the origin.

##### Multivariable functions

The midterm covers Chapters 12–14. A scalar function of two variables sends an input pair $(x,y)$ in a domain in $\mathbb R^2$ to a real value $z=f(x,y)$.

For $f(x,y)=\sqrt{x}+\sqrt{3-y}$, the domain is $x\ge0$ and $y\le3$. For instance $f(1,2)=2$. The handwritten shading shows a strip above the $x$-axis, but the formula permits arbitrarily negative $y$. The range is $[0,\infty)$ because $f(0,3)=0$ and $f(x,3)=\sqrt{x}$ takes all nonnegative values.

For $f(x,y)=\sqrt{y-x}\ln(x+y)$, the square root requires $y\ge x$ and the logarithm requires $y>-x$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Domain of square root and logarithm.png|**Fig. 79** The domain lies above both lines, including the allowable part of $y=x$ and excluding $y=-x$.]]

For $f(x,y)=e^{\sqrt{4-x^2-y^2}}$, the domain is the closed disk $x^2+y^2\le4$. The square root ranges from $0$ to $2$, so $1\le f(x,y)\le e^2$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Disk domain and exponential range.png|**Fig. 80** The disk has radius $2$, and the vertical range extends from $1$ to $e^2$.]]

##### Traces and contours of the exponential surface

For $f(x,y)=e^{\sqrt{4-x^2-y^2}}$, the trace at $x=0$ is $f(0,y)=e^{\sqrt{4-y^2}}$ for $|y|\le2$. The traces at $x=\pm\sqrt3$ both have $f(\pm\sqrt3,y)=e^{\sqrt{1-y^2}}$ for $|y|\le1$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Exponential surface vertical traces.png|**Fig. 81** The trace at $x=0$ is higher and wider than those at $x=\pm\sqrt3$.]]

A fixed height $z$ gives a level curve or contour. There is no level curve at $z=0$. At $z=1$, the contour is $x^2+y^2=4$. At $z=2$, taking the logarithm gives $x^2+y^2=4-(\ln2)^2$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Exponential surface contours.png|**Fig. 82** The level curve at $z=2$ lies inside the boundary circle at $z=1$.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Exponential dome.png|**Fig. 83** The graph rises from its circular boundary toward its maximum at the center.]]

##### Level curves and intercepts of a plane

For $z=-x-2y+4$, set $z=k$ and solve to get the level line $y=-x/2+(4-k)/2$. All levels have slope $-1/2$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Parallel level lines.png|**Fig. 84** The level curves of the plane are parallel lines in the $xy$-plane.]]

To find the axis intercepts, set the other two coordinates to zero. The intercepts are $(0,0,4)$, $(4,0,0)$, and $(0,2,0)$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Plane intercepts.png|**Fig. 85** The three intercepts bound the portion of the plane in the first octant.]]

##### Level surfaces

For $w=f(x,y,z)$, a fixed level $w=k$ can give a surface in three dimensions. In the example $f(x,y,z)=(x-1)^2+y^2+z^2$, the levels with $k>0$ are spheres centered at $(1,0,0)$ of radius $\sqrt{k}$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Concentric level spheres.png|**Fig. 86** Level surfaces with different positive values of $k$ share the center $(1,0,0)$.]]

##### Limits and continuity

For a function of one variable, continuity at an interior point $x_0$ means $\lim_{x\to x_0}f(x)=f(x_0)$. Equivalently, the limits from the left and the right both equal $f(x_0)$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Continuity in one variable.png|**Fig. 87** Both one-sided approaches to $x_0$ give the function value at $x_0$.]]

For a function with a two-dimensional domain, the limit

$$
\lim_{(x,y)\to(x_0,y_0)}f(x,y)=L
$$

requires the same value regardless of the path through the domain. The notes refer to the $\varepsilon$–$\delta$ formulation from Math 122. To disprove a limit, it is enough to find two paths with different limiting values. For approaches to the origin, useful test paths include $y=mx$, $y=ax^2$, $x=by^2$, $x=0$, and $y=0$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Paths to a point.png|**Fig. 88** Many straight and curved paths can approach $(x_0,y_0)$.]]

Examples of functions continuous on their natural domains include polynomials such as $xy+x^3y^5$, trigonometric functions, exponentials, logarithms, noninteger powers such as $(xy)^\pi$, and rational functions. The denominator of a rational function must be nonzero.

##### Path tests and polar coordinates

First consider $f(x,y)=\log(x^2+y^2)$ away from the origin and $f(0,0)=0$. The written argument appears to omit the square on $y$, while the condition and polar substitution use $x^2+y^2=r^2$. Then $\log(r^2)\to-\infty$ as $r\to0^+$, so there is no finite limit at the origin.

![[Kyle Kabasares - Calculus III - Vector Calculus - Logarithm near the origin.png|**Fig. 89** The logarithm decreases without bound as its positive argument tends to zero.]]

For $f(x,y)=x^2/(x^2+y^2)$ off the origin and $f(0,0)=1$, approach along $y=mx$. For $x\ne0$,

$$
f(x,mx)=\frac{x^2}{x^2+m^2x^2}=\frac1{1+m^2}.
$$

The values for $m=0$ and $m=1$ differ, so the limit does not exist.

For $f(x,y)=y^4/(x^2+y^4)$ off the origin and $f(0,0)=0$, a line $y=mx$ of finite slope gives

$$
\frac{m^4x^4}{x^2+m^4x^4}
=\frac{m^4x^2}{1+m^4x^2}\longrightarrow0.
$$

Along $x=ay^2$, however,

$$
\frac{y^4}{a^2y^4+y^4}=\frac1{1+a^2}
$$

for $y\ne0$, so the limit again does not exist.

Polar coordinates offer another approach. The expression $x^2/(x^2+y^2)=\cos^2\theta$ still depends on the direction as $r\to0$. By contrast,

$$
\frac{x^4}{x^2+y^2}=r^2\cos^4\theta.
$$

This lies between $0$ and $r^2$ for all $\theta$, so its limit at the origin is $0$.

The projectile has numerical acceleration $\mechanical{\mathbf a}=\langle0,0,-10\rangle$ and initial velocity $\mechanical{\mathbf v}_0=\langle\mechanical{v}_{0x},\mechanical{v}_{0y},\mechanical{v}_{0z}\rangle$. The launch angles in this example are $\pi/6$ from the vertical and azimuth $5\pi/4$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Practice projectile direction.png|**Fig. 90** The sketch marks the inclination and azimuth used in the initial velocity.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Spherical coordinate components.png|**Fig. 91** The horizontal projection is $r=\rho\sin\phi$, giving $x=r\cos\theta$ and $y=r\sin\theta$. The vertical component is $z=\rho\cos\phi$.]]

In the numerical units of the exercise, the spherical components give

$$
\mechanical{\mathbf v}_0
=\left\langle
120\sin\left(\frac{\pi}{6}\right)\cos\left(\frac{5\pi}{4}\right),
120\sin\left(\frac{\pi}{6}\right)\sin\left(\frac{5\pi}{4}\right),
120\cos\left(\frac{\pi}{6}\right)
\right\rangle.
$$

Integrate the acceleration, then the velocity:

$$
\begin{aligned}
\mechanical{\mathbf v}(t)
&=\langle\mechanical{v}_{0x},\mechanical{v}_{0y},\mechanical{v}_{0z}-10t\rangle,\\
\mechanical{\mathbf r}(t)
&=\langle
\mechanical{v}_{0x}t+\mechanical{x}_0,\,
\mechanical{v}_{0y}t+\mechanical{y}_0,\,
\mechanical{v}_{0z}t-5t^2+\mechanical{z}_0
\rangle.
\end{aligned}
$$

The handwritten position line has an unclear separator after $y_0$. The three components follow from integrating the preceding velocity. The final part of the exercise calls for solving for $t$.

##### Partial derivatives

For a function of one variable, $f'(x)=\lim_{h\to0}[f(x+h)-f(x)]/h$. For a function of two variables, differentiate along one coordinate while holding the other fixed:

$$
\begin{aligned}
f_x(x,b)
&=\left.\frac{\partial f}{\partial x}\right|_{y=b}
=\lim_{h\to0}\frac{f(x+h,b)-f(x,b)}h,\\
f_y(a,y)
&=\left.\frac{\partial f}{\partial y}\right|_{x=a}
=\lim_{h\to0}\frac{f(a,y+h)-f(a,y)}h.
\end{aligned}
$$

##### Partial derivatives from contours and formulas

The contour sketch shows $f(0,1)=1$ and $f(3,1)=2$. Along $y=1$, the difference quotient estimates

$$
f_x(0,1)\approx\frac{f(3,1)-f(0,1)}3=\frac{2-1}3=\frac13.
$$

The handwritten equality gives the slope over a finite interval. Without more information about the function, this slope is an estimate of the derivative.

![[Kyle Kabasares - Calculus III - Vector Calculus - Contour estimate of a partial derivative.png|**Fig. 92** Moving from $(0,1)$ to $(3,1)$ keeps $y$ fixed while crossing from level $1$ to level $2$.]]

For $f(x,y)=3x^2y^4$, holding $y$ fixed gives $f_x=6xy^4$, and holding $x$ fixed gives $f_y=12x^2y^3$.

For the hemisphere $f(x,y)=\sqrt{4-x^2-y^2}$, the partial derivatives in the interior of its domain are

$$
f_x(x,y)=\frac{-x}{\sqrt{4-x^2-y^2}},\qquad
f_y(x,y)=\frac{-y}{\sqrt{4-x^2-y^2}}.
$$

At $(1,0)$ they are $-1/\sqrt3$ and $0$, respectively.

![[Kyle Kabasares - Calculus III - Vector Calculus - Hemisphere partial derivatives.png|**Fig. 93** The point above $(1,0)$ lies on the upper hemisphere.]]

##### Tangent planes and linear approximation

The tangent line to $y=f(x)$ at $x_0$ gives the linear approximation

$$
f(x)\approx f(x_0)+f'(x_0)(x-x_0).
$$

The handwritten expression repeats a term at $x_0$. The tangent line has a single constant term $f(x_0)$ and slope $f'(x_0)$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Tangent line approximation.png|**Fig. 94** The tangent line approximates the curve near the point of contact.]]

For a differentiable surface $z=f(x,y)$, put $z_0=f(x_0,y_0)$. The tangent plane is

$$
z-z_0=f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0).
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Tangent plane sketch.png|**Fig. 95** The tangent plane meets the surface at the point above $(x_0,y_0)$.]]

For $f(x,y)=x^2+y^2/4$ above $(1/2,1)$, the partial derivatives are $2x$ and $y/2$, giving slopes $1$ and $1/2$ at the point. The height is $1/4+1/4=1/2$. Therefore the tangent plane is

$$
z-\frac12=\left(x-\frac12\right)+\frac12(y-1).
$$

The tangent-plane function from the preceding example is $\pi(x,y)=1/2+(x-1/2)+(y-1)/2$. It gives

$$
f(0.47,1.02)\approx\pi(0.47,1.02)
=\frac12-0.03+\frac12(0.02)=0.48.
$$

The starting value is $f(1/2,1)=0.5$. The linear change in the plane is $\Delta z_{\mathrm{lin}}=f_x\Delta x+f_y\Delta y$, with derivatives evaluated at the starting point.

##### Chain rule

For $f$ depending on $r(t)$ alone, $df/dt=(df/dr)(dr/dt)$. For two inputs depending on $t$, take $B(r,s)=20r+s^2$ with $r(t)=1+t/2$ and $s(t)=2+3t^3$. Substitution gives

$$
B(r(t),s(t))=20\left(1+\frac t2\right)+(2+3t^3)^2
=24+10t+12t^3+9t^6.
$$

Differentiating this expression gives $10+36t^2+54t^5$. The same result follows directly from the chain rule:

$$
\begin{aligned}
\frac{dB}{dt}
&=\frac{\partial B}{\partial r}\frac{dr}{dt}
+\frac{\partial B}{\partial s}\frac{ds}{dt}\\
&=20\left(\frac12\right)+2(2+3t^3)(9t^2)
=10+36t^2+54t^5.
\end{aligned}
$$

In general, for $z=z(x,y)$ with $x=x(t)$ and $y=y(t)$,

$$
\frac{dz}{dt}=\frac{\partial z}{\partial x}\frac{dx}{dt}
+\frac{\partial z}{\partial y}\frac{dy}{dt}.
$$

##### Chain rule with two independent parameters

Let $B$ depend on $r(t,d)=1+d^2-4d$ and $s(t,d)=(2+3t^3)e^{dt}$. The composite function has two partial derivatives,

$$
B_t=B_r r_t+B_s s_t,\qquad B_d=B_r r_d+B_s s_d,
$$

where the left sides denote derivatives of the composite function, and $B_r,B_s$ are evaluated at $(r(t,d),s(t,d))$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Chain rule dependency paths.png|**Fig. 96** For the derivative with respect to $t$, multiply the derivatives along each path through $r$ or $s$ and add the two products.]]

For $f=f(x,y,z)$ with $x=r\cos\theta$, $y=r\sin\theta$, and $z=1-r^2$, let $F(r,\theta)$ denote the composite function. Then

$$
\begin{aligned}
F_r&=f_x x_r+f_y y_r+f_z z_r
=f_x\cos\theta+f_y\sin\theta-2rf_z,\\
F_\theta&=f_x x_\theta+f_y y_\theta+f_z z_\theta
=-rf_x\sin\theta+rf_y\cos\theta.
\end{aligned}
$$

The last term in the second line vanishes since $z_\theta=0$.

##### Implicit differentiation

Suppose $f(x,y,z)=g(x,y,z)$ along functions $x(r,\theta)$, $y(r,\theta)$, and $z(r,\theta)$. Differentiating with respect to $r$ at fixed $\theta$ gives

$$
f_x x_r+f_y y_r+f_z z_r
=g_x x_r+g_y y_r+g_z z_r.
$$

Where $f_z-g_z\ne0$, solve for

$$
z_r=\frac{g_x x_r+g_y y_r-f_x x_r-f_y y_r}{f_z-g_z}.
$$

##### Directional derivatives

The partial derivatives $f_x(a,b)$ and $f_y(a,b)$ give rates of change in the positive coordinate directions. To measure the rate in another direction $\mathbf v\ne\mathbf0$, take the unit vector $\mathbf u=\mathbf v/\|\mathbf v\|=\langle u_x,u_y\rangle$. Define

$$
D_{\mathbf u}f(a,b)=
\lim_{h\to0}\frac{f(a+hu_x,b+hu_y)-f(a,b)}h.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Directional derivative surface.png|**Fig. 97** The directional derivative measures how the surface height changes along a chosen input direction.]]

If $f$ is differentiable at $(a,b)$, its linear approximation along $\mathbf u$ is

$$
f(a+hu_x,b+hu_y)=f(a,b)+h f_x(a,b)u_x+h f_y(a,b)u_y+h\varepsilon(h),
$$

where $\varepsilon(h)\to0$ as $h\to0$. Subtract $f(a,b)$, divide by $h$, and take the limit. With the **gradient** $\nabla f(a,b)=\langle f_x(a,b),f_y(a,b)\rangle$,

$$
D_{\mathbf u}f(a,b)=f_x(a,b)u_x+f_y(a,b)u_y
=\nabla f(a,b)\cdot\mathbf u.
$$

When $\nabla f\ne\mathbf0$, this is $\|\nabla f\|\cos\theta$, with $\theta$ the angle between $\nabla f$ and $\mathbf u$.

##### Example

For $f(x,y)=x\cos y$ at $(2,\pi/4)$ in the direction $\mathbf v=\langle-3,4\rangle$, the unit vector is $\langle-3/5,4/5\rangle$. Since $f_x=\cos y$ and $f_y=-x\sin y$, the partial derivatives at the point are $\sqrt2/2$ and $-\sqrt2$. Hence

$$
D_{\mathbf u}f(2,\pi/4)
=-\frac35\frac{\sqrt2}{2}-\frac45\sqrt2
=-\frac{11\sqrt2}{10}.
$$

##### Properties of the gradient

At a point where $f$ is differentiable, $\nabla f$ is a vector. When it is nonzero, it points in the direction of steepest increase, where the angle in $D_{\mathbf u}f=\|\nabla f\|\cos\theta$ is $0$ and the cosine is $1$. The opposite direction $-\nabla f$ gives the steepest decrease, with $\cos\pi=-1$. The gradient is perpendicular to any regular level curve through the point.

![[Kyle Kabasares - Calculus III - Vector Calculus - Gradients normal to contours.png|**Fig. 98** The gradient arrows are perpendicular to the contours. The direction of increase depends on the level values.]]

For the hemisphere $f(x,y)=\sqrt{4-x^2-y^2}$,

$$
\nabla f(x,y)=\frac{\langle-x,-y\rangle}{\sqrt{4-x^2-y^2}}
$$

in the interior of its disk. Away from the center, this points radially inward toward greater height.

![[Kyle Kabasares - Calculus III - Vector Calculus - Hemisphere gradient directions.png|**Fig. 99** The arrows in the horizontal plane point toward the center beneath the top of the hemisphere.]]

##### The gradient as the normal to a level surface

For $g(x,y,z)=k$, the gradient $\nabla g=\langle g_x,g_y,g_z\rangle$ is normal to the level surface wherever it is nonzero. In particular, $z=f(x,y)$ is the level $g=0$ of $g(x,y,z)=z-f(x,y)$, and $\nabla g=\langle-f_x,-f_y,1\rangle$. At $(a,b,f(a,b))$, the tangent plane is

$$
-f_x(a,b)(x-a)-f_y(a,b)(y-b)+z-f(a,b)=0.
$$

The second difference in the handwritten formula appears to use $x-b$. The second gradient component multiplies $y-b$.

For $g(x,y,z)=2x^2+y^2+z^2$, the level $g=4$ has $\nabla g=\langle4x,2y,2z\rangle$. At $(1,1,1)$, this gives normal $\langle4,2,2\rangle$ and tangent plane

$$
4(x-1)+2(y-1)+2(z-1)=0.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Tangent plane to an ellipsoid.png|**Fig. 100** The sketch marks the tangent plane to the ellipsoid at $(1,1,1)$.]]

##### Optimization

At an interior local maximum or minimum of a differentiable function of one variable, $f'(x)=0$. The tangent line there is horizontal. For a differentiable function of two variables, an interior local extremum at $(a,b)$ requires $f_x(a,b)=f_y(a,b)=0$, so the tangent plane is horizontal.

To classify such a point, consider the second-order Taylor approximation. In one variable,

$$
f(a+\Delta x)\approx f(a)+f'(a)\Delta x+\frac12f''(a)(\Delta x)^2.
$$

In two variables, with all derivatives evaluated at $(a,b)$, the quadratic approximation is

$$
f(a+\Delta x,b+\Delta y)
\approx f(a,b)+f_x\Delta x+f_y\Delta y+
\frac12\bigl[f_{xx}(\Delta x)^2+2f_{xy}\Delta x\Delta y+f_{yy}(\Delta y)^2\bigr].
$$

The handwritten expansion stops after an incomplete mixed term. The full quadratic part includes both pure second derivatives, and the mixed term uses equality of the continuous mixed partials.

At the origin, $u^2+v^2+c$ has a minimum, $-u^2-v^2+c$ has a maximum, and $u^2-v^2+c$ has a saddle point. The second-derivative test at an interior critical point uses

$$
D=f_{xx}f_{yy}-f_{xy}^2.
$$

| Conditions | Classification |
| --- | --- |
| $D>0$, $f_{xx}>0$ | Local minimum |
| $D>0$, $f_{xx}<0$ | Local maximum |
| $D<0$ | Saddle point |
| $D=0$ | The test is inconclusive |

At a saddle point the function can increase in one direction and decrease in another.

##### Classifying critical points

Let

$$
f(x,y)=\frac{x^3}{3}-\frac{5x^2}{2}+4x+100+(y-2)^2.
$$

The first derivatives are $f_x=x^2-5x+4=(x-4)(x-1)$ and $f_y=2(y-2)$. The two critical points are $(1,2)$ and $(4,2)$. Since $f_{xx}=2x-5$, $f_{xy}=0$, and $f_{yy}=2$, the determinant is $D=4x-10$.

- At $(1,2)$, $D=-6<0$, so the point is a saddle.
- At $(4,2)$, $D=6>0$ and $f_{xx}=3>0$, so the point is a local minimum.

##### Constrained optimization

A global maximum at $(x_0,y_0)$ satisfies $f(x_0,y_0)\ge f(x,y)$ for every point in the domain under consideration. A global minimum satisfies the reverse inequality. Look for extrema at interior local extrema and along the boundary, including corners. A function unbounded above has no global maximum, and one unbounded below has no global minimum.

In the study-time example, $x$ and $y$ are numerical hours per day spent studying mathematics and studying all subjects, respectively. The same polynomial models accumulated knowledge. Optimize it over $0\le x\le y\le24$. Only $(1,2)$ of the two critical points lies in the region, and it is a saddle. This leaves the boundary to check.

## Source

Kyle Kabasares, *Calculus III - Vector Calculus (Math 23, UC Merced 2014)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\mathbf r}$ | $\unit{m}$ | Position | Vector from the coordinate origin to the moving point. |
| $\mechanical{\mathbf v}$ | $\unit{m\,s^{-1}}$ | Velocity | Time derivative of the position vector. |
| $\mechanical{\mathbf a}$, $\mechanical{a}$ | $\unit{m\,s^{-2}}$ | Acceleration | Time derivative of velocity, or its signed one-dimensional value. |
| $\mechanical{v}$, $\mechanical{v}_0$ | $\unit{m\,s^{-1}}$ | One-dimensional velocity | Signed velocity and its value at the initial time. |
| $\mechanical{x}$, $\mechanical{y}$ | $\unit{m}$ | Position components | Horizontal and vertical coordinates of the marked point. |
| $\mechanical{\theta}$ | $\unit{rad}$ | Rotation angle or azimuth | Angle swept by the rolling circle, or horizontal direction of the initial velocity measured from the positive $x$-axis. |
| $\mechanical{\phi}$ | $\unit{rad}$ | Launch inclination | Angle of the initial velocity from the positive vertical. |
| $\mechanical{\mathbf v}_0$, $\mechanical{v}_{0x}$, $\mechanical{v}_{0y}$, $\mechanical{v}_{0z}$ | $\unit{m\,s^{-1}}$ | Initial velocity and components | Velocity at launch resolved into Cartesian components. |
| $\mechanical{x}_0$, $\mechanical{y}_0$, $\mechanical{z}_0$ | $\unit{m}$ | Initial position coordinates | Position components at launch. |
