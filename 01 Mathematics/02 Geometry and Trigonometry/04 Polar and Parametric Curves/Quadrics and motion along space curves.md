---
title: "Quadrics and motion along space curves"
---

> [!TLDR]
> Classify surfaces from their cross-sections, then use vector-valued functions to describe motion, arc length, and coordinates.

## Worked lecture material

The hyperbola $y^2/b^2-x^2/a^2=1$ opens along the $y$-axis. The equations $y=c_1x^2$ and $x=c_2y^2$ give parabolas with different axes.

![[Kyle Kabasares - Calculus III - Vector Calculus - Vertical hyperbola.png|**Fig. 29** The hyperbola opens upward and downward.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Parabola orientations.png|**Fig. 30** For positive coefficients, $y=c_1x^2$ opens upward and $x=c_2y^2$ opens to the right.]]

##### Explicit and implicit graphs

In $y=f(x)$, the input $x$ lies in the domain and the output $y$ lies in the range. In three dimensions $z=f(x,y)$ gives a height at each input pair. Equivalently, the graph is the zero set of $g(x,y,z)=f(x,y)-z$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Graph of one variable.png|**Fig. 31** The value $y_0=f(x_0)$ is read from a graph in the plane.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Graph of two variables.png|**Fig. 32** The value $z_0=f(x_0,y_0)$ lies over the input pair $(x_0,y_0)$.]]

A plane has form $ax+by+cz+d=0$ with normal $\langle a,b,c\rangle$. A quadric has the general equation

$$
Ax^2+By^2+Cz^2+Dxy+Eyz+Fxz+Gx+Hy+Iz+J=0.
$$

The notes associate mixed terms with rotation and linear terms with translation. The axis-aligned form without mixed or linear terms is $Ax^2+By^2+Cz^2+J=0$.

##### Parabolic cylinder

For $z=x^2$, the $y$ coordinate is arbitrary. The parabola repeats along the $y$ direction and forms a trough.

![[Kyle Kabasares - Calculus III - Vector Calculus - Parabolic cylinder.png|**Fig. 33** The parabolic cylinder $z=x^2$ extends along the $y$ direction. The sketch marks a trace at $y=4$.]]

##### Elliptic cylinder

In $x^2+z^2/4=1$, $y$ is free. Fixing one variable gives a **trace**. The vertical trace at $y=0$ is an ellipse with $(x,z)$ intercepts $(\pm1,0)$ and $(0,\pm2)$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Elliptic cylinder vertical trace.png|**Fig. 34** The $xz$-plane trace has semiaxes $1$ along $x$ and $2$ along $z$.]]

At a fixed height $z$, the traces are lines parallel to the $y$-axis when $|z|<2$. The sketch labels the pairs at $z=0$ and $z=1$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Elliptic cylinder level traces.png|**Fig. 35** The horizontal traces at $z=1$ are closer to the $y$-axis than those at $z=0$.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Elliptic cylinder.png|**Fig. 36** The elliptic cylinder repeats the same elliptical cross section along its axis.]]

##### Ellipsoid

For the axis-aligned quadric, the coefficients $A,B,C$ are nonzero and have the same sign in this example:

$$
\frac{x^2}{4}+\frac{y^2}{9}+z^2=1.
$$

The coordinate-plane traces follow by setting one variable to zero.

![[Kyle Kabasares - Calculus III - Vector Calculus - Ellipsoid yz trace.png|**Fig. 37** At $x=0$, the ellipse $y^2/9+z^2=1$ has semiaxes $3$ and $1$.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Ellipsoid xz trace.png|**Fig. 38** At $y=0$, the ellipse $x^2/4+z^2=1$ has semiaxes $2$ and $1$.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Ellipsoid xy trace.png|**Fig. 39** At $z=0$, the ellipse $x^2/4+y^2/9=1$ has semiaxes $2$ and $3$.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Ellipsoid.png|**Fig. 40** The completed ellipsoid with its coordinate traces indicated.]]

##### A quadric with mixed signs

The coefficients of $x^2$, $y^2$, and $z^2$ are all nonzero, with two negative and one positive:

$$
z^2-x^2-y^2=1.
$$

At $x=0$, the trace is $z^2-y^2=1$. At $y=0$, the trace is $z^2-x^2=1$. Both are hyperbolas opening along $z$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Hyperboloid yz trace.png|**Fig. 41** The trace at $x=0$ has two branches separated along the $z$-axis.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Hyperboloid xz trace.png|**Fig. 42** The trace at $y=0$ has the same form in the $xz$-plane.]]

The horizontal traces satisfy $x^2+y^2=z^2-1$. There is no real trace at $z=0$. At $z=1$ there is a single point, and at $z=2$ and $z=3$ the traces are circles with squared radii $3$ and $8$, respectively.

![[Kyle Kabasares - Calculus III - Vector Calculus - Two sheet hyperboloid.png|**Fig. 43** The surface $z^2-x^2-y^2=1$ has two separate sheets beginning at $z=\pm1$.]]

##### One-sheet hyperboloid

Changing the right side to $-1$ gives $z^2-x^2-y^2=-1$. The traces in the vertical coordinate planes are hyperbolas. For a fixed $z$, rearrange to $x^2+y^2=1+z^2$. At $z=0$, the trace is a circle of radius $1$. At $z=\pm1$, the trace is a circle of radius $\sqrt2$. A few intermediate handwritten equalities appear to lose the minus sign on the right. The trace radii and original equation use $-1$.

![[Kyle Kabasares - Calculus III - Vector Calculus - One sheet hyperboloid.png|**Fig. 44** The one-sheet hyperboloid is connected and has its smallest circular section at $z=0$.]]

##### Cone

With zero constant term, $z^2-x^2-y^2=0$, or $z^2=x^2+y^2$. The trace at $x=0$ consists of $z=\pm y$. The trace at $y=0$ consists of $z=\pm x$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Cone yz trace.png|**Fig. 45** The lines $z=\pm y$ form the trace in the $yz$-plane.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Cone xz trace.png|**Fig. 46** The lines $z=\pm x$ form the trace in the $xz$-plane.]]

At $z=0$, the trace is the single point $x=y=0$. At $z=1$, it is the unit circle. At $z=2$, it has radius $2$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Cone horizontal traces.png|**Fig. 47** Horizontal traces are concentric circles in the projected view, with radius $|z|$.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Double cone.png|**Fig. 48** The two parts of the cone meet at the origin.]]

##### Elliptic paraboloid

With no $z^2$ term and positive coefficients on $x^2$ and $y^2$, one example is $z=x^2+4y^2$. Its $x$-traces at $x=0,1$ are $z=4y^2$ and $z=1+4y^2$. Its $y$-traces at $y=0,1$ are $z=x^2$ and $z=x^2+4$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Elliptic paraboloid x traces.png|**Fig. 49** Fixing $x$ gives upward-opening parabolas in the $yz$ coordinates.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Elliptic paraboloid y traces.png|**Fig. 50** Fixing $y$ gives upward-opening parabolas in the $xz$ coordinates. The trace at $y=1$ lies above the one at $y=0$.]]

At $z=0$, $x^2+4y^2=0$ gives the origin. At $z=1$ and $z=2$, the equations $x^2+4y^2=1$ and $x^2+4y^2=2$ give ellipses.

![[Kyle Kabasares - Calculus III - Vector Calculus - Elliptic paraboloid level traces.png|**Fig. 51** The elliptical traces grow as the height increases.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Elliptic paraboloid.png|**Fig. 52** The elliptic paraboloid forms a bowl above the origin.]]

##### Hyperbolic paraboloid

For $z=x^2-4y^2$, setting $x=0$ or $x=1$ gives $z=-4y^2$ or $z=1-4y^2$. The handwritten $x=0$ line appears to omit the minus sign, but the original equation and the downward-opening sketch give $-4y^2$. At $y=0$ and $y=1$, the equations are $z=x^2$ and $z=x^2-4$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Saddle x traces.png|**Fig. 53** The traces at fixed $x$ open downward.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Saddle y traces.png|**Fig. 54** The traces at fixed $y$ open upward.]]

At $z=0$, $x^2=4y^2$ gives $x=\pm2y$. At $z=1$, $x^2-4y^2=1$ is a hyperbola opening along $x$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Saddle level traces.png|**Fig. 55** Horizontal traces include two lines through the origin at height zero and hyperbolas at positive heights.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Hyperbolic paraboloid.png|**Fig. 56** The saddle curves upward in one coordinate direction and downward in the other.]]

##### Sections 13.1–13.2. Vector-valued functions and space curves

A vector-valued function maps a scalar parameter to a vector:

$$
t\longmapsto \mathbf r(t)=\langle x(t),y(t),z(t)\rangle.
$$

The input is in $\mathbb R$ and the output is in $\mathbb R^3$. In a physical trajectory the parameter can be time $\mechanical{t}$, and examples of time-dependent vectors are position $\mechanical{\mathbf r}(\mechanical{t})$, velocity $\mechanical{\mathbf v}(\mechanical{t})$, and force $\mechanical{\mathbf F}(\mechanical{t})$.

For a line, $\mathbf r(t)=\langle2,3,0\rangle+t\langle1,-2,1\rangle$ gives $x(t)=2+t$, $y(t)=3-2t$, and $z(t)=t$.

##### Parametric examples

**1.** With $x(t)=t$ and $y(t)=t^2$, eliminating $t$ gives $y=x^2$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Parametric parabola.png|**Fig. 57** The curve with coordinates $x=t$ and $y=t^2$ is a parabola.]]

**2.** With $x(t)=\cos t$ and $y(t)=3\sin t$, use $\cos^2t+\sin^2t=1$ to get $x^2+(y/3)^2=1$. The handwritten sketch marks $t$ as an angle. It is the angle in the scaled coordinates $(x,y/3)$, while the polar angle of $(x,y)$ generally differs.

![[Kyle Kabasares - Calculus III - Vector Calculus - Parametric ellipse.png|**Fig. 58** The ellipse has semiaxes $1$ and $3$.]]

**3.** With $x(t)=\cos t$, $y(t)=t$, and $z(t)=\sin t$, the curve lies on $x^2+z^2=1$. At $t=0$ it passes through $(1,0,0)$. As $t$ increases, the point circles the $y$-axis while advancing along it.

![[Kyle Kabasares - Calculus III - Vector Calculus - Helix around the y axis.png|**Fig. 59** The unit-radius helix starts at $(1,0,0)$.]]

##### More examples of space curves

For $\mathbf r(t)=\langle t,t^2,t^3\rangle$, the points at $t=-1,0,1,2$ are $(-1,1,-1)$, $(0,0,0)$, $(1,1,1)$, and $(2,4,8)$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Cubic space curve.png|**Fig. 60** Arrows indicate increasing parameter on the curve $\langle t,t^2,t^3\rangle$.]]

A space curve can arise as the intersection of two surfaces. The cylinder $y^2+z^2=16$ and plane $x+y=1$ give

$$
y(t)=4\cos t,\qquad z(t)=4\sin t,\qquad x(t)=1-4\cos t.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Plane cutting a cylinder.png|**Fig. 61** The cylinder and the plane meet along a curve. Parametrize the circular coordinates first, then recover $x$ from the plane.]]

For the cone $z^2=x^2+y^2$ and the plane $z=(x-6)/3$, substitute for $z$ and complete the square:

$$
\frac{(x-6)^2}{9}=x^2+y^2
\quad\Longrightarrow\quad
\frac89\left(x+\frac34\right)^2+y^2=\frac92.
$$

The projected ellipse has $x$ semiaxis $\sqrt{(9/2)/(8/9)}=9/4$ and $y$ semiaxis $3/\sqrt2$. Using the ellipse and the plane gives

$$
x(t)=-\frac34+\frac94\cos t,\qquad
y(t)=\frac3{\sqrt2}\sin t,\qquad
z(t)=-\frac94+\frac34\cos t.
$$

The handwritten $x$-coefficient appears to multiply by $\sqrt{8/9}$. The ellipse equation requires division by that factor. The constant in $z(t)$ then follows from the plane equation.

![[Kyle Kabasares - Calculus III - Vector Calculus - Plane cutting a cone.png|**Fig. 62** The handwritten construction intersects a plane and a double cone. For the stated equations the ellipse lies on the lower sheet.]]

##### Calculus of vector-valued functions

Limits, derivatives, and integrals are taken component by component:

$$
\begin{aligned}
\lim_{t\to t_0}\mathbf r(t)
&=\left\langle\lim_{t\to t_0}x(t),\lim_{t\to t_0}y(t),\lim_{t\to t_0}z(t)\right\rangle,\\
\mathbf r'(t)&=\langle x'(t),y'(t),z'(t)\rangle,\\
\int\mathbf r(t)\,dt
&=\left\langle\int x(t)\,dt,\int y(t)\,dt,\int z(t)\,dt\right\rangle.
\end{aligned}
$$

For a physical trajectory, the derivative of position is velocity. For differentiable vector functions $\mathbf u,\mathbf v$, a differentiable scalar function $f$, and a constant $c$,

$$
\begin{aligned}
(\mathbf u\pm\mathbf v)'&=\mathbf u'\pm\mathbf v',\\
(c\mathbf u)'&=c\mathbf u',\\
(\mathbf u\circ f)'(t)&=\mathbf u'(f(t))f'(t),\\
(f\mathbf u)'&=f\mathbf u'+f'\mathbf u,\\
(\mathbf u\times\mathbf v)'&=\mathbf u'\times\mathbf v+\mathbf u\times\mathbf v',\\
(\mathbf u\cdot\mathbf v)'&=\mathbf u'\cdot\mathbf v+\mathbf u\cdot\mathbf v'.
\end{aligned}
$$

The cross-product derivative is a vector, and the dot-product derivative is a scalar.

##### Circular satellite orbit

Let $\mechanical{\mathbf r}(\mechanical{t})$ be the satellite's position relative to Earth's center and let $\mechanical{R}$ be the constant orbital radius. Then $\mechanical{\mathbf r}\cdot\mechanical{\mathbf r}=\mechanical{R}^2$. Differentiation gives

$$
\frac{d}{d\mechanical{t}}
\left(\mechanical{\mathbf r}\cdot\mechanical{\mathbf r}\right)
=\mechanical{\mathbf r}'\cdot\mechanical{\mathbf r}
+\mechanical{\mathbf r}\cdot\mechanical{\mathbf r}'
=2\mechanical{\mathbf r}\cdot\mechanical{\mathbf v}=0.
$$

The position and velocity are perpendicular. The sketch also marks $\mechanical{\mathbf v}\perp\mechanical{\mathbf a}$, as holds for uniform circular motion.

![[Kyle Kabasares - Calculus III - Vector Calculus - Circular satellite orbit.png|**Fig. 63** The radius points toward the satellite and the velocity is tangent to the circular orbit.]]

##### Constant-acceleration kinematics

For constant acceleration in one dimension, $d\mechanical{v}/d\mechanical{t}=\mechanical{a}$. Integrate from time $0$ to $\mechanical{t}$ and from initial velocity $\mechanical{v}_0$ to $\mechanical{v}$ to obtain $\mechanical{v}-\mechanical{v}_0=\mechanical{a}\mechanical{t}$, or

$$
\mechanical{v}=\mechanical{v}_0+\mechanical{a}\mechanical{t}.
$$

##### Arc length and kinematics

Velocity is the instantaneous rate of change of position:

$$
\mechanical{\mathbf v}(\mechanical{t})
=\frac{d\mechanical{\mathbf r}}{d\mechanical{t}}
=\lim_{h\to0}
\frac{\mechanical{\mathbf r}(\mechanical{t}+h)-\mechanical{\mathbf r}(\mechanical{t})}{h}.
$$

The magnitude $\|\mechanical{\mathbf v}\|$ is the speed. At a point of nonzero velocity the unit tangent is $\mathbf T=\mechanical{\mathbf r}'/\|\mechanical{\mathbf r}'\|$. It has length one and points in the direction of motion.

Acceleration is $\mechanical{\mathbf a}=\mechanical{\mathbf r}''=d\mechanical{\mathbf v}/d\mechanical{t}$. Integration recovers the position and velocity increments:

$$
\mechanical{\mathbf r}(\mechanical{t})-\mechanical{\mathbf r}(0)
=\int_0^{\mechanical{t}}\mechanical{\mathbf v}(s)\,ds,\qquad
\mechanical{\mathbf v}(\mechanical{t})-\mechanical{\mathbf v}(0)
=\int_0^{\mechanical{t}}\mechanical{\mathbf a}(s)\,ds.
$$

The handwritten formulas omit the starting values, which is valid when the corresponding starting vector is zero.

##### Velocity and acceleration on a helix

For $\mechanical{\mathbf r}(t)=\langle\cos t,t,\sin t\rangle$ in numerical coordinates,

$$
\mechanical{\mathbf v}(t)=\mechanical{\mathbf r}'(t)=\langle-\sin t,1,\cos t\rangle,\qquad
\mechanical{\mathbf a}(t)=\mechanical{\mathbf r}''(t)=\langle-\cos t,0,-\sin t\rangle.
$$

At $t=0$, the position is $\langle1,0,0\rangle$, the tangent velocity is $\langle0,1,1\rangle$, and the radially inward acceleration is $\langle-1,0,0\rangle$. The speed is $\sqrt{\sin^2t+1+\cos^2t}=\sqrt2$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Helix tangent and acceleration.png|**Fig. 64** At the starting point of the helix, the velocity is tangent and the acceleration points inward toward the axis.]]

##### Arc length

Arc length is the distance along a curve. An ant moving along a string travels approximately $\Delta s=\|\mathbf r'(t)\|\Delta t$ in a short parameter interval $\Delta t$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Arc length along a string.png|**Fig. 65** The distance traveled by the ant follows the string's curve.]]

Add these distances over a partition of $[0,t]$ and take a limit:

$$
s(t)=\lim_{n\to\infty}\sum_{i=1}^n\|\mathbf r'(t_i^*)\|\Delta t_i
=\int_0^t\|\mathbf r'(\tau)\|\,d\tau
=\int_0^t\sqrt{x'(\tau)^2+y'(\tau)^2+z'(\tau)^2}\,d\tau.
$$

By the fundamental theorem of calculus, if $f(t)=\int_0^t g(x)\,dx$ and $g$ is continuous, then $f'(t)=g(t)$. Therefore $ds/dt=\|\mathbf r'(t)\|$.

One can use $s$ instead of $t$ as the curve parameter. In this parameterization $\mathbf r(1)$ is the position reached after traveling one unit of distance. By the chain rule, where $\mathbf r'(t)\ne\mathbf0$,

$$
\frac{d\mathbf r}{ds}
=\frac{d\mathbf r}{dt}\frac{dt}{ds}
=\frac{\mathbf r'(t)}{\|\mathbf r'(t)\|}
=\mathbf T(t).
$$

The rate $d\mathbf T/ds$ measures change of the unit tangent. The scalar curvature is its magnitude, $\kappa=\|d\mathbf T/ds\|$. The handwritten formula on this page omits the magnitude bars.

##### Cylindrical coordinates

In the plane, polar coordinates $(r,\theta)$ give $x=r\cos\theta$ and $y=r\sin\theta$. When $x\ne0$, $\tan\theta=y/x$, with the quadrant chosen from the signs of $x$ and $y$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Polar coordinates.png|**Fig. 66** The radius $r$ and azimuth $\theta$ locate a point in the plane.]]

Add the unchanged vertical coordinate $z$ to obtain cylindrical coordinates $(r,\theta,z)$ with $r\ge0$ and $0\le\theta\le2\pi$. The angles $0$ and $2\pi$ give the same direction.

![[Kyle Kabasares - Calculus III - Vector Calculus - Cylindrical coordinates.png|**Fig. 67** At fixed $r$ and $z$, varying $\theta$ traces a horizontal circle.]]

| Equation | Surface |
| --- | --- |
| $r=2$ | Circular cylinder extending along the full $z$-axis. |
| $\theta=\pi/4$ | Vertical half-plane with arbitrary $z$ and $r\ge0$. |
| $z=r$ | Upper half of a cone. |
| $z=r^2=x^2+y^2$ | Circular paraboloid. |

![[Kyle Kabasares - Calculus III - Vector Calculus - Fixed cylindrical radius.png|**Fig. 68** Fixing $r=2$ gives a cylinder of radius $2$.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Fixed azimuth half plane.png|**Fig. 69** Fixing the azimuth and taking $r\ge0$ gives one side of a vertical plane through the axis.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Cone from cylindrical coordinates.png|**Fig. 70** For $z=r$, the horizontal trace has radius equal to its nonnegative height.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Paraboloid from cylindrical coordinates.png|**Fig. 71** For $z=r^2$, the height grows quadratically with the cylindrical radius.]]

##### Spherical coordinates

Use $(\rho,\theta,\phi)$, where $\rho=\sqrt{x^2+y^2+z^2}$, $\theta$ is the same azimuth, and $\phi$ is the angle from the positive $z$-axis. The ranges are $\rho\ge0$, $0\le\theta\le2\pi$, and $0\le\phi\le\pi$. The right triangle gives $z=\rho\cos\phi$ and $r=\rho\sin\phi$. Therefore

$$
x=\rho\sin\phi\cos\theta,\qquad
y=\rho\sin\phi\sin\theta,\qquad
z=\rho\cos\phi.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Spherical coordinates.png|**Fig. 72** The radius $\rho$ makes angle $\phi$ with the positive $z$-axis. Its projection into the horizontal plane has radius $r$ and azimuth $\theta$.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Spherical coordinate triangle.png|**Fig. 73** The vertical and horizontal components of $\rho$ are $z$ and $r$.]]

##### Surfaces in spherical coordinates

The equation $\rho=2$ is a sphere of radius $2$ centered at the origin. With $\phi=\pi/4$, all azimuths $0\le\theta\le2\pi$ and all $\rho\ge0$ give the upper cone $z=r$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Fixed spherical radius.png|**Fig. 74** Fixing $\rho=2$ gives a sphere.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Fixed spherical inclination.png|**Fig. 75** Fixing $\phi=\pi/4$ gives a cone with its axis along positive $z$.]]

##### Cycloid of a rolling circle

A circle of radius $\mechanical{R}$ rolls to the left without slipping with constant angular speed $\mechanical{\omega}>0$. A marked point $P$ starts at $(\mechanical{R},\mechanical{R})$ on the right side of the circle. After a rotation through $\mechanical{\theta}=\mechanical{\omega}\mechanical{t}$, the center has moved a distance $\mechanical{d}=\mechanical{R}\mechanical{\theta}$ to the left.

![[Kyle Kabasares - Calculus III - Vector Calculus - Cycloid rolling circle.png|**Fig. 76** The center stays at height $\mechanical{R}$ as the circle rolls left. The point $P$ rotates around the moving center.]]

The position and velocity components are

$$
\begin{aligned}
\mechanical{x}(\mechanical{t})&=-\mechanical{R}\mechanical{\omega}\mechanical{t}+\mechanical{R}\cos(\mechanical{\omega}\mechanical{t}),\\
\mechanical{y}(\mechanical{t})&=\mechanical{R}+\mechanical{R}\sin(\mechanical{\omega}\mechanical{t}),\\
\mechanical{x}'(\mechanical{t})&=-\mechanical{R}\mechanical{\omega}\bigl(1+\sin(\mechanical{\omega}\mechanical{t})\bigr),\\
\mechanical{y}'(\mechanical{t})&=\mechanical{R}\mechanical{\omega}\cos(\mechanical{\omega}\mechanical{t}).
\end{aligned}
$$

Using $\sin^2\mechanical{\theta}+\cos^2\mechanical{\theta}=1$, the speed is

$$
\|\mechanical{\mathbf r}'\|
=\mechanical{R}\mechanical{\omega}\sqrt{2(1+\sin\mechanical{\theta})}.
$$

At the top, $\mechanical{\theta}=\pi/2$ gives $2\mechanical{R}\mechanical{\omega}$. The handwritten value appears to keep an extra $\sqrt2$. At the bottom, $\mechanical{\theta}=-\pi/2$ modulo $2\pi$ gives zero speed.

Since $(\sin(\mechanical{\theta}/2)+\cos(\mechanical{\theta}/2))^2=1+\sin\mechanical{\theta}$, the square root gives an absolute value. On the initial interval $0\le\mechanical{\theta}\le3\pi/2$, the expression inside is nonnegative. Integrating the speed there gives the handwritten arc-length formula:

$$
\mechanical{s}(\mechanical{t})
=2\sqrt2\,\mechanical{R}\left[1+\sin\left(\frac{\mechanical{\omega}\mechanical{t}}{2}\right)
-\cos\left(\frac{\mechanical{\omega}\mechanical{t}}{2}\right)\right].
$$

The acceleration follows by differentiating the velocity:

$$
\mechanical{\mathbf a}(\mechanical{t})
=\left\langle
-\mechanical{\omega}^2\mechanical{R}\cos(\mechanical{\omega}\mechanical{t}),
-\mechanical{\omega}^2\mechanical{R}\sin(\mechanical{\omega}\mechanical{t})
\right\rangle.
$$

## Source

Kyle Kabasares, *Calculus III - Vector Calculus (Math 23, UC Merced 2014)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{t}$ | $\unit{s}$ | Time | Parameter of a physical trajectory. |
| $\mechanical{\mathbf r}$ | $\unit{m}$ | Position | Vector from the coordinate origin to the moving point. |
| $\mechanical{\mathbf v}$ | $\unit{m\,s^{-1}}$ | Velocity | Time derivative of the position vector. |
| $\mechanical{\mathbf F}$ | $\unit{N}$ | Force | Vector describing a mechanical interaction. |
| $\mechanical{R}$ | $\unit{m}$ | Radius | Distance from Earth’s center to the satellite, or radius of the rolling circle. |
| $\mechanical{\mathbf a}$, $\mechanical{a}$ | $\unit{m\,s^{-2}}$ | Acceleration | Time derivative of velocity, or its signed one-dimensional value. |
| $\mechanical{v}$, $\mechanical{v}_0$ | $\unit{m\,s^{-1}}$ | One-dimensional velocity | Signed velocity and its value at the initial time. |
| $\mechanical{x}$, $\mechanical{y}$ | $\unit{m}$ | Position components | Horizontal and vertical coordinates of the marked point. |
| $\mechanical{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular speed | Constant rate at which the circle rotates. |
| $\mechanical{\theta}$ | $\unit{rad}$ | Rotation angle or azimuth | Angle swept by the rolling circle, or horizontal direction of the initial velocity measured from the positive $x$-axis. |
| $\mechanical{d}$ | $\unit{m}$ | Distance traveled by the center | Arc swept at the circumference, equal to the distance rolled. |
| $\mechanical{s}$ | $\unit{m}$ | Arc length | Distance traveled by the marked point along its trajectory. |
