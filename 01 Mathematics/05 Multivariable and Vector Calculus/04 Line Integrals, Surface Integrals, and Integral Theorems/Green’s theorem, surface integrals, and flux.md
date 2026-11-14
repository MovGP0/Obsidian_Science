---
title: "Green’s theorem, surface integrals, and flux"
---

> [!TLDR]
> Relate planar circulation to curl, compute flux through surfaces, and apply the divergence theorem to closed boundaries.

## Worked lecture material

##### 16.4 Green's theorem

For a positively oriented, simple, closed, piecewise smooth curve $C$ enclosing a region $D$, let $\mathbf F=\langle F_1,F_2\rangle$ have continuous first derivatives on an open set containing $D$ and its boundary. Green's theorem gives
$$
\oint_C\mathbf F\cdot d\mathbf r
=\iint_D\left(\frac{\partial F_2}{\partial x}-\frac{\partial F_1}{\partial y}\right)dA.
$$
The positive orientation of an outer boundary is counterclockwise. Reversing it changes the sign of the integral. The scalar expression under the double integral is the vorticity of a plane velocity field, or local circulation per unit area.

![[Kyle Kabasares - Calculus III - Vector Calculus - Green theorem rectangle boundary.png|**Fig. 142** A rectangular region has a boundary formed by four directed segments.]]

For a small rectangle, the boundary circulation is approximately its area $\Delta x\,\Delta y$ times the vorticity. Add the circulations of the rectangles in a partition. Each shared edge is traversed twice with opposite directions, so only the outer boundary contributes. The sum of the area contributions tends to the double integral.

![[Kyle Kabasares - Calculus III - Vector Calculus - Cancellation of interior edges.png|**Fig. 143** The interior edges cancel when the circulations of the three rectangles are added.]]

For $\mathbf F=\langle-y,x\rangle$ and the counterclockwise unit circle, the vorticity is $1-(-1)=2$. Integrating over the disk gives
$$
\oint_C\mathbf F\cdot d\mathbf r
=\int_0^{2\pi}\int_0^1 2r\,dr\,d\theta=2\pi.
$$

For $\mathbf F=\langle-yx^2,y^2x\rangle$, the scalar curl is $y^2-(-x^2)=x^2+y^2$. To integrate on the upper unit semicircle $C$ from $(1,0)$ to $(-1,0)$, add the diameter $C_2$ from $(-1,0)$ to $(1,0)$. The field vanishes on $C_2$ because $y=0$. Applying Green's theorem to the closed boundary gives
$$
\int_C\mathbf F\cdot d\mathbf r
=\iint_D(x^2+y^2)\,dA-\int_{C_2}\mathbf F\cdot d\mathbf r
=\int_0^\pi\int_0^1 r^3\,dr\,d\theta=\frac{\pi}{4}.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Green theorem semicircle.png|**Fig. 144** The upper arc is traversed counterclockwise from angle zero to angle $\pi$.]]

Green's theorem applies to nonconservative fields and uses a closed boundary. For $\mathbf F=\langle-y,x\rangle$ on the counterclockwise unit circle, direct parametrization gives $\mathbf r(t)=\langle\cos t,\sin t\rangle$ and $\mathbf F(\mathbf r(t))=\mathbf r'(t)=\langle-\sin t,\cos t\rangle$. Hence
$$
\oint_C\mathbf F\cdot d\mathbf r=\int_0^{2\pi}(\sin^2 t+\cos^2 t)\,dt=2\pi.
$$
The area calculation uses $(F_2)_x=1$ and $(F_1)_y=-1$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Unit circle circulation path.png|**Fig. 145** The unit circle is positively oriented for Green's theorem.]]

For $\mathbf F=\langle-y,x\rangle$ on the unit disk, Green's theorem gives $\int_0^{2\pi}\int_0^1 2r\,dr\,d\theta=2\pi$, in agreement with direct parametrization.

For $\mathbf F=\langle-yx^2,y^2x\rangle$, parametrize the upper unit arc $C_1$ by $\mathbf r(t)=\langle\cos t,\sin t\rangle$ for $0\leq t\leq\pi$. Along the arc,
$$
\mathbf F(\mathbf r(t))=\langle-\sin t\cos^2 t,\ \sin^2 t\cos t\rangle,\qquad
\mathbf r'(t)=\langle-\sin t,\cos t\rangle.
$$
Taking the dot product gives $2\sin^2 t\cos^2 t$, whose integral on $[0,\pi]$ is $\pi/4$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Arc closed by diameter.png|**Fig. 146** The diameter $C_2$ closes the arc $C_1$ to form the boundary of the upper half disk.]]

Green's theorem gives the same result. The scalar curl is $x^2+y^2$, so its integral over the half disk is $\pi[r^4/4]_0^1=\pi/4$. In general, after closing an arc one must subtract the line integral along the added path.

The two-dimensional curl is
$$
\begin{vmatrix}\partial_x&\partial_y\\F_1&F_2\end{vmatrix}
=(F_2)_x-(F_1)_y.
$$
In three dimensions,
$$
\nabla\times\mathbf F
=\langle (F_3)_y-(F_2)_z,\ (F_1)_z-(F_3)_x,\ (F_2)_x-(F_1)_y\rangle.
$$

The curl describes the local tendency of a velocity field to rotate a small marker placed in the flow. The divergence is the scalar
$$
\nabla\cdot\mathbf F
=\frac{\partial F_1}{\partial x}
+\frac{\partial F_2}{\partial y}
+\frac{\partial F_3}{\partial z}.
$$

At a point $(x_0,y_0,z_0)$, interpret $\mathbf F$ as a velocity field. Positive divergence indicates net local outflow, negative divergence indicates net local inflow, and zero divergence indicates that the two balance to first order.

Represent a surface by $\mathbf r(u,v)=\langle x(u,v),y(u,v),z(u,v)\rangle$. Holding one parameter fixed and varying the other traces a curve on the surface. The corresponding tangent vectors are
$$
\mathbf r_u=\langle x_u,y_u,z_u\rangle,\qquad
\mathbf r_v=\langle x_v,y_v,z_v\rangle.
$$
Where they are linearly independent, a normal is $\mathbf n=\mathbf r_u\times\mathbf r_v$. A unit normal is $\mathbf n/\lVert\mathbf n\rVert$. The magnitude of the cross product will also determine the surface area element.

![[Kyle Kabasares - Calculus III - Vector Calculus - Surface parameter curves.png|**Fig. 147** The two families of parameter curves trace a grid across the surface.]]

For an ellipsoid with semiaxes $1,3,3$, choose
$$
\mathbf r(u,v)=\langle\cos u\sin v,\ 3\sin u\sin v,\ 3\cos v\rangle.
$$
Then
$$
\begin{aligned}
\mathbf r_u&=\langle-\sin u\sin v,\ 3\cos u\sin v,\ 0\rangle,\\
\mathbf r_v&=\langle\cos u\cos v,\ 3\sin u\cos v,\ -3\sin v\rangle,\\
\mathbf r_u\times\mathbf r_v
&=\langle-9\cos u\sin^2v,\ -3\sin u\sin^2v,\ -3\sin v\cos v\rangle.
\end{aligned}
$$
At $(u,v)=(0,0)$ the cross product is zero because the parametrization is singular at the pole. At $(\pi/2,\pi/2)$ it is $\langle0,-3,0\rangle$, directed along the negative $y$-axis.

![[Kyle Kabasares - Calculus III - Vector Calculus - Ellipsoid surface example.png|**Fig. 148** The ellipsoid extends one unit along its short semiaxis and three along each of the other two semiaxes.]]

A parameter rectangle with sides $\Delta u$ and $\Delta v$ maps to a small surface patch. Its area is approximately $\lVert\mathbf r_u\times\mathbf r_v\rVert\,\Delta u\,\Delta v$. In the limit the surface element and the total area are
$$
dS=\lVert\mathbf r_u\times\mathbf r_v\rVert\,du\,dv,\qquad
\iint_S dS=\iint_D\lVert\mathbf r_u\times\mathbf r_v\rVert\,du\,dv,
$$
where $D$ is the parameter domain for a parametrization that covers the surface once.

For a graph $z=f(x,y)$, take $\mathbf r(u,v)=\langle u,v,f(u,v)\rangle$. Then
$$
\mathbf r_u=\langle1,0,f_u\rangle,\qquad
\mathbf r_v=\langle0,1,f_v\rangle,\qquad
\mathbf r_u\times\mathbf r_v=\langle-f_u,-f_v,1\rangle.
$$
The area is $\iint_D\sqrt{1+f_u^2+f_v^2}\,du\,dv$.

##### 16.7 Surface integrals

The double integral $\iint_D f(x,y)\,dx\,dy$ integrates over a flat domain. The same idea extends to curved surfaces using the surface area element.

Surface integrals can add population density over Earth to obtain total population, integrate over the ocean to find its area and fraction of the surface, or compute the area-weighted average of atmospheric pressure. A scalar surface integral $\iint_S f\,dS$ is the limit of sums of $f$ sampled on each surface patch times the local patch area $\Delta S$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Spherical surface partition.png|**Fig. 149** A grid divides the sphere into small patches whose areas weight the sampled values.]]

To compute the integral, parametrize the surface by $\mathbf r(u,v)$, substitute $(x(u,v),y(u,v),z(u,v))$ into $f$, and express $dS$ in terms of $u$ and $v$:
$$
\iint_S f\,dS
=\iint_D f(\mathbf r(u,v))\lVert\mathbf r_u\times\mathbf r_v\rVert\,du\,dv.
$$

For the example $f(x,y,z)=x^2$ on the sphere of radius 3, take the spherical angles $u=\theta$ and $v=\phi$:
$$
\mathbf r(u,v)=\langle3\cos u\sin v,\ 3\sin u\sin v,\ 3\cos v\rangle,
\qquad 0\leq u\leq2\pi,\quad 0\leq v\leq\pi.
$$

For the sphere of radius 3, the parameter derivatives are
$$
\begin{aligned}
\mathbf r_u&=\langle-3\sin u\sin v,\ 3\cos u\sin v,\ 0\rangle,\\
\mathbf r_v&=\langle3\cos u\cos v,\ 3\sin u\cos v,\ -3\sin v\rangle.
\end{aligned}
$$

##### Review of surfaces

Review chapters 12–16, skipping sections 14.8, 15.5, 15.6, and 16.8. Use quizzes, lecture notes, homework, worksheets, and problems 3–6 of the second practice midterm.

For sections 16.6–16.7, parametrize the surface by $\mathbf r(u,v)=\langle x(u,v),y(u,v),z(u,v)\rangle$. The area element is $dS=\lVert\mathbf r_u\times\mathbf r_v\rVert\,du\,dv$. The corresponding unit normal is
$$
\widehat{\mathbf n}
=\frac{\mathbf r_u\times\mathbf r_v}{\lVert\mathbf r_u\times\mathbf r_v\rVert}
$$
for the orientation determined by that cross product.

A scalar surface integral is $\iint_S f(x,y,z)\,dS$, and taking $f=1$ gives the area. The flux of a vector field is $\iint_S \mathbf F\cdot\widehat{\mathbf n}\,dS$. In each case, parametrize the surface and substitute its coordinates into the scalar or vector field. Compute $dS$ in terms of $u,v$ and choose the appropriate normal for a flux.

A scalar surface integral can give the total amount of a pollutant from its density per unit area on Earth's surface. On a sphere of radius $R$, choose
$$
\mathbf r(\theta,\phi)
=\langle R\cos\theta\sin\phi,\ R\sin\theta\sin\phi,\ R\cos\phi\rangle.
$$
The parameter derivatives are
$$
\begin{aligned}
\mathbf r_\theta&=\langle-R\sin\theta\sin\phi,\ R\cos\theta\sin\phi,\ 0\rangle,\\
\mathbf r_\phi&=\langle R\cos\theta\cos\phi,\ R\sin\theta\cos\phi,\ -R\sin\phi\rangle.
\end{aligned}
$$
Their cross product is
$$
\mathbf r_\theta\times\mathbf r_\phi
=-R^2\langle\cos\theta\sin^2\phi,\ \sin\theta\sin^2\phi,\ \sin\phi\cos\phi\rangle.
$$
Its magnitude is $R^2\sin\phi$ for $0\leq\phi\leq\pi$, so $dS=R^2\sin\phi\,d\theta\,d\phi$. For the example $f(x,y,z)=z^2$, the integrand on the sphere is $R^2\cos^2\phi$ and the setup is
$$
\iint_S z^2\,dS=\int_0^\pi\int_0^{2\pi}
(R^2\cos^2\phi)(R^2\sin\phi)\,d\theta\,d\phi.
$$

##### 16.7 Flux

Flux measures how much of a vector field passes through a surface. For a field $\mathbf F=\langle F_1,F_2,F_3\rangle$ and a chosen unit normal $\widehat{\mathbf n}$, the relevant component is $\mathbf F\cdot\widehat{\mathbf n}$. The parametrization provides both the normal $\widehat{\mathbf n}=(\mathbf r_u\times\mathbf r_v)/\lVert\mathbf r_u\times\mathbf r_v\rVert$ and the area element $dS=\lVert\mathbf r_u\times\mathbf r_v\rVert\,du\,dv$.

The flux through an oriented surface is $\iint_S \mathbf F\cdot\widehat{\mathbf n}\,dS$. The dot product gives flux per unit area. For a compatible parametrization, the oriented area element $\widehat{\mathbf n}\,dS$ equals the corresponding cross product of the two tangent derivatives times the parameter area element.

In the solar-wind example, take $\mathbf F=\langle-x+y,-x-y,z\rangle$ and model Earth by a sphere of radius 7:
$$
\begin{aligned}
\mathbf r(\theta,\phi)&=7\langle\cos\theta\sin\phi,\sin\theta\sin\phi,\cos\phi\rangle,\\
\mathbf r_\theta&=7\langle-\sin\theta\sin\phi,\cos\theta\sin\phi,0\rangle,\\
\mathbf r_\phi&=7\langle\cos\theta\cos\phi,\sin\theta\cos\phi,-\sin\phi\rangle.
\end{aligned}
$$
The outward oriented cross product is $\mathbf r_\phi\times\mathbf r_\theta$. On the sphere the field is
$$
7\langle(-\cos\theta+\sin\theta)\sin\phi,\ -(\cos\theta+\sin\theta)\sin\phi,\ \cos\phi\rangle.
$$
The mixed terms cancel in the dot product, giving the outward flux
$$
\int_0^\pi\int_0^{2\pi}7^3\sin\phi(\cos^2\phi-\sin^2\phi)\,d\theta\,d\phi
=-\frac{4\pi 7^3}{3}.
$$
The source's boxed value uses a plus sign between the squared trigonometric terms. The field as written gives the difference shown above, with inward flux $4\pi 7^3/3$.

For a sphere of arbitrary radius $R$, the same angular parametrization gives the outward unit normal $\langle\cos\theta\sin\phi,\sin\theta\sin\phi,\cos\phi\rangle$ and $dS=R^2\sin\phi\,d\theta\,d\phi$.

On the side of a cylinder of radius $R$,
$$
\mathbf r(\theta,z)=\langle R\cos\theta,R\sin\theta,z\rangle,\qquad
\widehat{\mathbf n}=\langle\cos\theta,\sin\theta,0\rangle,\qquad
dS=R\,d\theta\,dz.
$$
For the graph $z=f(x,y)$, the parametrization $\mathbf r(x,y)=\langle x,y,f(x,y)\rangle$ has upward normal $\langle-f_x,-f_y,1\rangle$ before normalization and area element $dS=\sqrt{1+f_x^2+f_y^2}\,dx\,dy$.

The final exam is listed for Friday, May 16, from 8 to 11 in COB 116. The divergence $\nabla\cdot\mathbf F=(F_1)_x+(F_2)_y+(F_3)_z$ measures net outward flux per unit volume in the limit near a point.

Computing the flux through a box face by face requires six double integrals. In the sketch, the six outward unit normals, in order, are
$$
\langle-1,0,0\rangle,\quad \langle0,1,0\rangle,\quad
\langle1,0,0\rangle,\quad \langle0,-1,0\rangle,\quad
\langle0,0,1\rangle,\quad \langle0,0,-1\rangle.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Outward normals of a box.png|**Fig. 150** Each of the six faces contributes a flux with its own outward normal.]]

For a box centered at the origin, face 1 lies at $x=-\Delta x/2$, with outward normal $\langle-1,0,0\rangle$. Its flux element is $-F_1(-\Delta x/2,y,z)\,dy\,dz$.

The flux through the negative $x$ face of the centered box is
$$
\int_{-\Delta z/2}^{\Delta z/2}\int_{-\Delta y/2}^{\Delta y/2}
-F_1(-\Delta x/2,y,z)\,dy\,dz.
$$
It is approximately the normal component at a sample point times $\Delta y\,\Delta z$.

If $\mathbf F$ is continuously differentiable on a neighborhood of a solid $V$ bounded by a closed piecewise smooth surface $S$, the divergence theorem gives
$$
\iiint_V\nabla\cdot\mathbf F\,dV
=\iint_S\mathbf F\cdot\widehat{\mathbf n}\,dS
$$
with the outward orientation.

![[Kyle Kabasares - Calculus III - Vector Calculus - Closed surface outward direction.png|**Fig. 151** The normal on the boundary of the solid points outward.]]

Find the outward flux through the sphere of radius 2 centered at the origin for
$$
\mathbf F(x,y,z)=\langle x^2+x+1+y,\ 3y-2xy+4z,\ z^2+e^{xy}\rangle.
$$
The divergence is $(1+2x)+(3-2x)+2z=4+2z$. The $2z$ contribution integrates to zero by reflection symmetry. Hence
$$
\iiint_V(4+2z)\,dV=4\left(\frac{4\pi}{3}\cdot2^3\right)=\frac{128\pi}{3}.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Divergence theorem sphere.png|**Fig. 152** The sphere encloses the ball used for the volume integral.]]

For the curved hemisphere $S$ on $x^2+y^2+z^2=9$ with $y\leq0$, close the surface with the disk $D$ in the plane $y=0$. The divergence theorem gives
$$
\iint_S\mathbf F\cdot\widehat{\mathbf n}\,dS
=\iiint_V\nabla\cdot\mathbf F\,dV-\iint_D\mathbf F\cdot\widehat{\mathbf n}\,dS.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Hemisphere closed by disk.png|**Fig. 153** The curved hemisphere and a flat disk together enclose the half-ball.]]

The field is $\mathbf F=\langle4x-z^2,(y-1)^2,\sin y+z\rangle$, with divergence $4+2(y-1)+1=3+2y$. The constant part integrates to $3\operatorname{vol}(V)=54\pi$. The angular bounds are $0\leq\phi\leq\pi$, $\pi\leq\theta\leq2\pi$, and $0\leq\rho\leq3$. The $2y$ part contributes
$$
\int_\pi^{2\pi}\int_0^\pi\int_0^3 2\rho^3\sin\theta\sin^2\phi\,d\rho\,d\phi\,d\theta
=-\frac{81\pi}{2}.
$$
Thus the closed surface has flux $27\pi/2$. The disk's outward normal is $\langle0,1,0\rangle$, so its flux is $\iint_D(0-1)^2\,dA=9\pi$. The curved hemisphere contributes the difference $9\pi/2$. The integration bounds and the disk equation $x^2+z^2=9$ specify the plane $y=0$. The sketch labels the plane $x=0$.

Problem 2 asks for the absolute maximum of $f(x,y)=2x+2y-x^2-3y^2$ on the triangle bounded by $y=x$, $y=0$, and $x=3$. The equations $f_x=2-2x=0$ and $f_y=2-6y=0$ give $(1,1/3)$. For the second derivative test, $D=f_{xx}f_{yy}-f_{xy}^2$. If $D>0$, the sign of $f_{xx}$ distinguishes a local minimum from a local maximum. If $D<0$, the point is a saddle, and if $D=0$, the test is inconclusive. Here $D=12$ and $f_{xx}=-2$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Triangular optimization domain.png|**Fig. 154** The triangle has vertices $(0,0)$, $(3,0)$, and $(3,3)$.]]

On the edge $y=0$, $f(x,0)=2x-x^2$ has its critical point at $(1,0)$. The page begins a table for comparing the interior candidate, the boundary candidates, and the vertices. The stated maximum is $f(1,1/3)=4/3$. It also follows by writing $f=4/3-(x-1)^2-3(y-1/3)^2$.

Problem 5 sets up the mass integral for the part of the unit ball above the cone $z=r$, with density $3-z^2-r^2$. The cone meets the sphere where $r=\sqrt{1-r^2}$, so the cylindrical setup is
$$
\mechanical{M}
=\int_0^{2\pi}\int_0^{1/\sqrt2}\int_r^{\sqrt{1-r^2}}r(3-z^2-r^2)\,dz\,dr\,d\theta.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Unit sphere and cone section.png|**Fig. 155** A cross-section shows the cone below the spherical boundary.]]

For the mass example in spherical coordinates, the bounds are $0\leq\rho\leq1$, $0\leq\phi\leq\pi/4$, and $0\leq\theta\leq2\pi$. The density becomes $3-\rho^2$, so
$$
\mechanical{M}
=\int_0^{\pi/4}\int_0^{2\pi}\int_0^1
(3-\rho^2)\rho^2\sin\phi\,d\rho\,d\theta\,d\phi.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Spherical angle of the cone.png|**Fig. 156** The inclination $\phi$ is measured from the vertical axis to the ray within the cone.]]

##### Worksheet 11, problem 3

Integrate $f(x,y)=(y-3x)(2x+y)^2$ over the quadrilateral with vertices $(0,0)$, $(1,3)$, $(0,5)$, and $(-1,2)$ using a change of variables.

![[Kyle Kabasares - Calculus III - Vector Calculus - Worksheet quadrilateral.png|**Fig. 157** The four edges lie on $y=3x$, $y=3x+5$, $y=-2x$, and $y=-2x+5$.]]

Choose $u=y+2x$ and $v=y-3x$. The pairs of opposite sides become $u=0,5$ and $v=0,5$. The transformed integrand before the area factor is $vu^2$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Worksheet transformed square.png|**Fig. 158** The quadrilateral maps to the square $[0,5]\times[0,5]$.]]

The remaining steps are to solve for $x(u,v)$ and $y(u,v)$ and use
$$
J=\begin{vmatrix}x_u&x_v\\y_u&y_v\end{vmatrix}.
$$

##### Cofactor expansion of a $3\times3$ determinant

The cofactor signs form a checkerboard:
$$
\begin{pmatrix}
+&-&+\\
-&+&-\\
+&-&+
\end{pmatrix}.
$$
Expanding along the first row gives
$$
J=\begin{vmatrix}
1&2&3\\
4&5&6\\
7&8&9
\end{vmatrix}
=1(5\cdot9-6\cdot8)-2(4\cdot9-6\cdot7)+3(4\cdot8-5\cdot7)=0.
$$

## Source

Kyle Kabasares, *Calculus III - Vector Calculus (Math 23, UC Merced 2014)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{M}$ | $\unit{kg}$ | Total mass | Integral of the density over the solid. |
