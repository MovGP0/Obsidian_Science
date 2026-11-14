---
title: "Line integrals, work, and conservative fields"
---

> [!TLDR]
> Integrate fields along curves and use the endpoint formula when the field has a potential.

## Worked lecture material

##### Vector fields

Scalar-valued functions such as $f(x,y)$ and $g(x,y,z)$ assign a number to each input. A vector-valued function of one variable such as $\mathbf f(t)=\langle x(t),y(t),z(t)\rangle$ assigns a vector to each parameter value.

A vector field assigns a vector to each point of a region. Typical plane and space fields are
$$
\mathbf F(x,y)=\langle F_1(x,y),F_2(x,y)\rangle,\qquad
\mathbf G(x,y,z)=\langle G_1(x,y,z),G_2(x,y,z),G_3(x,y,z)\rangle.
$$
Each component is itself a scalar function of several variables. These examples have types $\mathbf F:\mathbb R^2\to\mathbb R^2$ and $\mathbf G:\mathbb R^3\to\mathbb R^3$.

Represent a plane field by drawing sample vectors at their input points. For $\mathbf F(x,y)=x\mathbf i+y\mathbf j=\langle x,y\rangle$, the vectors point radially outward. In particular, $\mathbf F(0,0)=\langle0,0\rangle$ and $\mathbf F(1,0)=\langle1,0\rangle$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Radial vector field.png|**Fig. 131** The arrows of $\mathbf F(x,y)=\langle x,y\rangle$ point away from the origin and lengthen with distance.]]

The plane field $\mathbf F(x,y)=\langle-y,x\rangle$ has sample values
$$
\begin{aligned}
\mathbf F(0,0)&=\langle0,0\rangle,
&\mathbf F(1/2,1/2)&=\langle-1/2,1/2\rangle,\\
\mathbf F(-1,2)&=\langle-2,-1\rangle,
&\mathbf F(-2,0)&=\langle0,-2\rangle.
\end{aligned}
$$
It describes rigid rotation if interpreted as a velocity field. The arrows are tangent to circles, and the speed increases in proportion to the distance from the center.

![[Kyle Kabasares - Calculus III - Vector Calculus - Planar rotation field.png|**Fig. 132** The vectors circulate counterclockwise around the origin.]]

The space field $\mathbf G(x,y,z)=\langle-y,x,z\rangle$ combines rotation around the $z$-axis with motion away from the plane $z=0$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Three dimensional rotation field.png|**Fig. 133** The field rotates about the vertical axis and has a vertical component with the sign of $z$.]]

Force fields, including electric and gravitational examples, give the force $\mechanical{\mathbf F}$ on a test object at each point. Velocity fields give the local velocity $\mechanical{\mathbf v}$, for instance in a fluid. A scalar function $\phi(x,y)$ defines the gradient field $\mathbf F=\nabla\phi$. A field that can be expressed as the gradient of a scalar function is conservative.

For a continuously differentiable plane field $\mathbf F=\langle F_1,F_2\rangle$, a conservative field satisfies $\partial F_1/\partial y=\partial F_2/\partial x$. On a simply connected open domain this condition is also sufficient. For $\mathbf F=\langle x,y\rangle$, both derivatives are zero. For $\mathbf F=\langle-y,x\rangle$, they are $-1$ and $1$, so this field is not conservative.

##### Line integrals

Let $C$ be a curve parametrized by $\mathbf r(t)=\langle x(t),y(t),z(t)\rangle$. Divide $C$ into small arcs of lengths $\Delta s_i$ and sample $f(x,y,z)$ at $(x_i^*,y_i^*,z_i^*)$ on each arc. The scalar line integral is the limit
$$
\int_C f(x,y,z)\,ds
=\lim_{\max_i\Delta s_i\to0}\sum_i f(x_i^*,y_i^*,z_i^*)\,\Delta s_i.
$$
Here $ds$ is the arc-length element.

![[Kyle Kabasares - Calculus III - Vector Calculus - Line integral arc subdivisions.png|**Fig. 134** The curve is divided into small arcs, each with its own sample point and length.]]

For the Great Wall of China example, take $C$ to be the base of the wall. Each short portion contributes approximately its height $f$ times its base length $\Delta s$. The integral gives the area of one vertical face in this model.

![[Kyle Kabasares - Calculus III - Vector Calculus - Great Wall line integral.png|**Fig. 135** Each short segment of the wall contributes a nearly rectangular strip.]]

For a video game, let $f(x,y)$ be the density of collectible stars per unit length and $C$ be the path taken. The model estimates the number of stars as $\int_C f(x,y)\,ds$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Video game stars along path.png|**Fig. 136** The sketched path passes through a region containing collectible stars.]]

In the fundraising example, $f(x,y)$ models funds raised per unit distance and $C$ is the candidate's route. The total funds raised are $\int_C f\,ds$, the limit of sums $\sum_i f(x_i,y_i)\Delta s_i$.

Parametrize $C$ by $\mathbf r(t)=\langle x(t),y(t),z(t)\rangle$ for $a\leq t\leq b$. Substitute the parametrization into $f$ and use the arc-length element $ds=\lVert\mathbf r'(t)\rVert\,dt$. Then
$$
\int_C f\,ds
=\int_a^b f(x(t),y(t),z(t))
\sqrt{(x'(t))^2+(y'(t))^2+(z'(t))^2}\,dt.
$$

For $f(x,y)=y/x$ on the parabola $y=x^2$ between $x=-2$ and $x=2$, use $\mathbf r(t)=\langle t,t^2\rangle$. The restricted integrand is $t^2/t=t$ away from the origin and extends continuously there. The derivatives $x'=1$ and $y'=2t$ give
$$
I=\int_{-2}^{2}t\sqrt{1+4t^2}\,dt.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Scalar integral along parabola.png|**Fig. 137** The scalar line integral follows the parabola from $x=-2$ to $x=2$.]]

For a circular route $C$ of radius 3 miles, the fuel consumption model is $f(x,y)=15+y^2$ gallons per mile when the coordinates are measured in miles. Parametrize one lap by $\mathbf r(t)=\langle3\cos t,3\sin t\rangle$, $0\leq t\leq2\pi$. Then $\mathbf r'(t)=\langle-3\sin t,3\cos t\rangle$, $\lVert\mathbf r'(t)\rVert=3$, and $f(\mathbf r(t))=15+9\sin^2 t$. The total fuel used, in gallons, is
$$
\int_C (15+y^2)\,ds=3\int_0^{2\pi}(15+9\sin^2 t)\,dt.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Circular fuel consumption route.png|**Fig. 138** The circular path represents one complete lap.]]

##### Line integrals of vector fields

The unit tangent to an oriented curve is $\mathbf T=\mathbf r'(t)/\lVert\mathbf r'(t)\rVert$. The signed tangential component of $\mathbf F$ is $\mathbf F\cdot\mathbf T$. In the plane this is
$$
\mathbf F(\mathbf r(t))\cdot\mathbf T
=\frac{\mathbf F(x(t),y(t))\cdot\langle x'(t),y'(t)\rangle}
{\sqrt{(x'(t))^2+(y'(t))^2}}.
$$
Multiplication by $ds=\lVert\mathbf r'(t)\rVert\,dt$ cancels the denominator. For a force field, the integral gives the work along the curve:
$$
\mechanical{W}=\int_C\mechanical{\mathbf F}\cdot\mathbf T\,ds
=\int_a^b\mechanical{\mathbf F}(\mathbf r(t))\cdot\mathbf r'(t)\,dt.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Projection onto path tangent.png|**Fig. 139** Only the component of the field along the tangent contributes to work along the path.]]

For the work done by a field $\mechanical{\mathbf F}=\langle\mechanical{F}_1,\mechanical{F}_2,\mechanical{F}_3\rangle$ on a particle moving along $C$, proceed as follows.

1. Choose a parametrization $\mathbf r(t)=\langle x(t),y(t),z(t)\rangle$ for $a\leq t\leq b$.
2. Use $\mathbf T=\mathbf r'/\lVert\mathbf r'\rVert$ to obtain $\mathbf T\,ds=\mathbf r'(t)\,dt$.
3. Substitute the curve into each component of the field.
4. Take the dot product with $\mathbf r'(t)$ and integrate.

$$
\mechanical{W}
=\int_a^b\bigl(\mechanical{F}_1(\mathbf r(t))x'(t)
+\mechanical{F}_2(\mathbf r(t))y'(t)
+\mechanical{F}_3(\mathbf r(t))z'(t)\bigr)\,dt.
$$

In the normalized gravity example, the plane field is
$$
\mechanical{\mathbf F}(x,y,0)=\frac{\langle-x,-y\rangle}{(x^2+y^2)^{3/2}}.
$$
Along the upper semicircle of radius 2, take $\mathbf r(t)=\langle2\cos t,2\sin t\rangle$ for $0\leq t\leq\pi$. The force is $\langle-2\cos t/8,-2\sin t/8\rangle$ and the tangent derivative is $\langle-2\sin t,2\cos t\rangle$. Their dot product is $(4/8)\cos t\sin t-(4/8)\sin t\cos t=0$, so gravity does zero work along the arc.

![[Kyle Kabasares - Calculus III - Vector Calculus - Radial gravity on semicircle.png|**Fig. 140** Gravity points radially inward and is perpendicular to displacement along the semicircle.]]

Use the same normalized gravity field on the line segment $\mathbf r(t)=\langle2t,t-1\rangle$ for $0\leq t\leq1$. Then $\mathbf T\,ds=\langle2,1\rangle\,dt$ and
$$
\mechanical{\mathbf F}(\mathbf r(t))
=\frac{\langle-2t,1-t\rangle}{(4t^2+(t-1)^2)^{3/2}}.
$$
The two contributions to the numerator of the dot product are $-4t$ and $1-t$, so
$$
\mechanical{W}=\int_0^1\frac{1-5t}{(4t^2+(t-1)^2)^{3/2}}\,dt.
$$

The direct method parametrizes $C$ and evaluates the field on the parametrization. A conservative field $\mathbf F=\nabla\phi$ gives a shortcut through the scalar potential $\phi(x,y,z)$ restricted to the path. In the plane, $\partial F_1/\partial y=\partial F_2/\partial x$ is the differential condition for a potential on a simply connected domain. For a closed curve $C$, the starting and ending values of the potential agree.

Let $g(t)=\phi(\mathbf r(t))$ along a path from $P=\mathbf r(a)$ to $Q=\mathbf r(b)$. The chain rule gives
$$
g'(t)=\phi_x x'(t)+\phi_y y'(t)+\phi_z z'(t)
=\nabla\phi(\mathbf r(t))\cdot\mathbf r'(t).
$$
If $\mathbf F=\nabla\phi$, the fundamental theorem of line integrals follows from the ordinary fundamental theorem:
$$
\int_C\mathbf F\cdot d\mathbf r
=\int_a^b\nabla\phi(\mathbf r(t))\cdot\mathbf r'(t)\,dt
=\int_a^b g'(t)\,dt
=g(b)-g(a)=\phi(Q)-\phi(P).
$$
For a conservative force field, the work depends only on the endpoints. For a closed curve $Q=P$, the work is zero.

For $\phi(x,y)=x\sin y$, the gradient is $\mathbf F=\langle\sin y,x\cos y\rangle$. The mixed derivatives $\partial F_1/\partial y$ and $\partial F_2/\partial x$ both equal $\cos y$, consistent with the field being conservative.

For $\phi(x,y)=x\sin y$, the line integral of $\mathbf F=\nabla\phi$ along a spiral from $(0,0)$ to $(1,\pi/3)$ is
$$
\phi(1,\pi/3)-\phi(0,0)=\frac{\sqrt3}{2}.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Conservative field spiral path.png|**Fig. 141** The spiral is one possible path between the two endpoints. Its shape does not affect the line integral of the gradient.]]

For a conservative plane field $\mathbf F=\langle F_1,F_2\rangle=\nabla\phi$, the component equations are $\phi_x=F_1$ and $\phi_y=F_2$. When the second derivatives are continuous, $\partial F_2/\partial x=\phi_{yx}=\phi_{xy}=\partial F_1/\partial y$. Both sides equal $\cos y$ in the example. Given $\mathbf F$, recovering its potential means solving the two component equations for $\phi$.

A conservative field has a scalar potential satisfying $\mathbf F=\nabla\phi$. Its line integral from $P$ to $Q$ is $\phi(Q)-\phi(P)$, so the integral around a closed curve is zero. In the plane, a continuously differentiable conservative field satisfies $\partial F_1/\partial y=\partial F_2/\partial x$.

Given a conservative field $\langle F_1,F_2\rangle$, integrate the component equations $\phi_x=F_1$ and $\phi_y=F_2$:
$$
\phi(x,y)=\int F_1(x,y)\,dx+C_1(y),\qquad
\phi(x,y)=\int F_2(x,y)\,dy+C_2(x).
$$
Each arbitrary function depends on the variable held fixed in that integration.

For example, $\phi(x,y)=x^2e^y+x^3+3y+6$ produces $\mathbf F=\langle2xe^y+3x^2,x^2e^y+3\rangle$. To recover $\phi$ from the field alone, first check that both cross derivatives are $2xe^y$. Integrating the components gives
$$
\phi=x^2e^y+x^3+C_1(y)
\qquad\text{and}\qquad
\phi=x^2e^y+3y+C_2(x).
$$
Matching these expressions gives $C_1(y)=3y+C$ and $C_2(x)=x^3+C$ for an arbitrary constant $C$.

For $\mathbf F=\langle F_1,F_2,F_3\rangle$, the three mixed-partial identities for a conservative field are
$$
(F_2)_x=(F_1)_y,\qquad (F_3)_x=(F_1)_z,\qquad (F_2)_z=(F_3)_y.
$$
Equivalently, the curl vanishes:
$$
\nabla\times\mathbf F
=\begin{vmatrix}
\mathbf i&\mathbf j&\mathbf k\\
\partial_x&\partial_y&\partial_z\\
F_1&F_2&F_3
\end{vmatrix}
=\langle (F_3)_y-(F_2)_z,\ (F_1)_z-(F_3)_x,\ (F_2)_x-(F_1)_y\rangle
=\mathbf 0.
$$
When a potential exists, its component antiderivatives have the forms
$$
\phi=\int F_1\,dx+C_1(y,z),\qquad
\phi=\int F_2\,dy+C_2(x,z),\qquad
\phi=\int F_3\,dz+C_3(x,y).
$$

The field $\langle xy,z+z^2/2,z^2+xy\rangle$ fails the test because $(F_1)_z=0$ and $(F_3)_x=y$. A preliminary line gives the field with first component $ze^{xz}+\log y+yz$ and third component $xe^{xz}+xy$. The middle component on this page appears to read $xy+zy+yz$. The worked version on [[#Line integrals of vector fields|the section on Line integrals of vector fields]] uses $x/y+2y+xz$.

For $\mathbf F=\langle xy,z+x^2/2,xy\rangle$, the $xy$ pair agrees because $(F_2)_x=(F_1)_y=x$. The $xz$ pair gives $(F_3)_x=y$ and $(F_1)_z=0$. The $yz$ pair gives $(F_2)_z=1$ and $(F_3)_y=x$. The last two pairs fail to agree identically, so the field is not conservative.

For $y>0$, consider
$$
\mathbf F(x,y,z)=
\left\langle ze^{xz}+\log y+yz,\ \frac{x}{y}+2y+xz,\ xe^{xz}+xy\right\rangle.
$$
The three pairs of mixed derivatives agree:
$$
\begin{aligned}
(F_2)_x=(F_1)_y&=\frac1y+z,\\
(F_3)_x=(F_1)_z&=e^{xz}+xze^{xz}+y,\\
(F_2)_z=(F_3)_y&=x.
\end{aligned}
$$
The middle identity uses the product rule. The half-space $y>0$ is simply connected, so the field is conservative.

Integrating each component with respect to its coordinate gives
$$
\begin{aligned}
\phi&=e^{xz}+x\log y+xyz+C_1(y,z),\\
\phi&=x\log y+y^2+xyz+C_2(x,z),\\
\phi&=e^{xz}+xyz+C_3(x,y).
\end{aligned}
$$
Matching the common terms and the terms that depend only on the other variables yields
$$
\phi=e^{xz}+x\log y+xyz+y^2+C.
$$

## Source

Kyle Kabasares, *Calculus III - Vector Calculus (Math 23, UC Merced 2014)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\mathbf v}$ | $\unit{m\,s^{-1}}$ | Velocity | Time derivative of the position vector. |
| $\mechanical{\mathbf F}$ | $\unit{N}$ | Force | Vector describing a mechanical interaction. |
| $\mechanical{W}$ | $\unit{J}$ | Work | Integral of force projected onto the direction of displacement. |
| $\mechanical{F}_1$, $\mechanical{F}_2$, $\mechanical{F}_3$ | $\unit{N}$ | Force components | Cartesian components of the force field. |
