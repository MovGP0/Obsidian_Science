---
title: "Multiple integrals and changes of variables"
---

> [!TLDR]
> Set up double and triple integrals, describe regions in adapted coordinates, and use Jacobians to transform area and volume.

## Worked lecture material

##### Checking the boundary of the study-time region

On $x=0$, $f(0,y)=(y-2)^2+100$ has its minimum at $y=2$, where $f(0,2)=100$.

On $y=24$, write $g(x)=f(x,24)=x^3/3-5x^2/2+4x+584$. Its critical points are $x=1,4$. Because $g''(x)=2x-5$, the first is a local maximum along the edge and the second is a local minimum. Their values are

$$
f(1,24)=584+\frac{11}{6},\qquad f(4,24)=584-\frac83.
$$

On $y=x$, write $g(x)=f(x,x)=x^3/3-5x^2/2+4x+100+(x-2)^2$. Then $g'(x)=x^2-3x$ vanishes at $0$ and $3$. Since $g''(x)=2x-3$, the endpoint $0$ is a local maximum on this edge and $3$ is a local minimum. The values are $f(0,0)=104$ and $f(3,3)=9-45/2+12+100+1=99.5$.

The corner values are $f(0,0)=104$, $f(0,24)=584$, and

$$
f(24,24)=\frac{24^3}{3}-\frac{5\cdot24^2}{2}+4\cdot24+100+484=3848.
$$

The handwritten result $6152$ uses $24^3/2$ in this line. The original polynomial has $x^3/3$. The maximum still occurs at $(24,24)$, and comparing all candidates gives the minimum at $(3,3)$.

##### Double integrals

Recall how a Riemann sum approximates area under a nonnegative function on $[a,b]$. For $x_i^*\in[x_{i-1},x_i]$,

$$
A=\int_a^b f(x)\,dx
=\lim_{n\to\infty}\sum_{i=1}^{n} f(x_i^*)(x_i-x_{i-1}),
$$

with the partition widths tending to zero. Each term multiplies a sampled height by the width.

![[Kyle Kabasares - Calculus III - Vector Calculus - Area by Riemann sums.png|**Fig. 101** Partitioning $[a,b]$ into strips gives the area beneath the curve in the limit.]]

For a continuous function of one variable, the Riemann sums converge to the same limit regardless of the sample points. The fundamental theorem of calculus gives an antiderivative $F(x)=\int_0^x f(u)\,du$, so $F'(x)=f(x)$. Integration can also be defined over regions of the $xy$-plane, subsets of $\mathbb R^n$, curves, and surfaces.

Let $f(x,y)$ be real-valued and continuous on the rectangle $R=[a,b]\times[c,d]$. Partition the two intervals and choose a sample point $(x_{ij}^*,y_{ij}^*)$ in each subrectangle $[x_{i-1},x_i]\times[y_{j-1},y_j]$. With widths $\Delta x_i=x_i-x_{i-1}$ and $\Delta y_j=y_j-y_{j-1}$, the double integral is
$$
\iint_R f\,dA
=\lim_{\max_i\Delta x_i,\,\max_j\Delta y_j\to0}
\sum_{i=1}^{n}\sum_{j=1}^{m} f(x_{ij}^*,y_{ij}^*)\,\Delta x_i\Delta y_j
=\int_a^b\int_c^d f(x,y)\,dy\,dx.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Riemann sum volume columns.png|**Fig. 102** A column in the double Riemann sum has a rectangular base and a height given by the sampled function value.]]

When $f\geq0$, the integral gives the volume below $z=f(x,y)$ and above $R$. The midpoint rule samples each subrectangle at $\bigl((x_{i-1}+x_i)/2,(y_{j-1}+y_j)/2\bigr)$. The average value on an interval is $\overline f=(b-a)^{-1}\int_a^b f(x)\,dx$. On a rectangle it is
$$
\overline f
=\frac{\int_a^b\int_c^d f(x,y)\,dy\,dx}{\int_a^b\int_c^d 1\,dy\,dx}
=\frac{\iint_R f\,dA}{\iint_R 1\,dA}.
$$

Double integrals are linear in the integrand. For domains $D_1$ and $D_2$ whose interiors are disjoint and whose common boundary has area zero, the integral over their union is the sum of the integrals over the two domains:
$$
\begin{aligned}
\iint_D(f+g)\,dA&=\iint_D f\,dA+\iint_D g\,dA,\\
\iint_D cf\,dA&=c\iint_D f\,dA,\\
\iint_{D_1\cup D_2}f\,dA&=\iint_{D_1}f\,dA+\iint_{D_2}f\,dA.
\end{aligned}
$$
The area of $D$ is $\iint_D1\,dA$. If $f\geq 0$, the volume below the graph of $f$ is $V=\iint_Df\,dA$.

##### 15.2 Iterated integrals

Over $[a,b]\times[c,d]$, first fix $x$ and find the area of the vertical cross-section under the curve $y\mapsto f(x,y)$. The volume of a thin slice is approximately that cross-sectional area times its thickness $\Delta x$. Adding the slices yields
$$
V=\lim_{\max_i\Delta x_i\to0}\sum_{i=1}^n
\left(\int_c^d f(x_i^*,y)\,dy\right)\Delta x_i
=\int_a^b\left(\int_c^d f(x,y)\,dy\right)dx.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Volume by slicing.png|**Fig. 103** A thin slice beneath the graph contributes its cross-sectional area times its thickness.]]

Evaluate the inner integral while holding the other variable constant. On $D=[0,2]\times[1,3]$, both orders give
$$
\begin{aligned}
\iint_D(x+2y+3)\,dA
&=\int_0^2\int_1^3(x+2y+3)\,dy\,dx\\
&=\int_1^3\int_0^2(x+2y+3)\,dx\,dy\\
&=\int_1^3\left[\frac{x^2}{2}+2xy+3x\right]_0^2dy
=\int_1^3(8+4y)\,dy
=[8y+2y^2]_1^3=32.
\end{aligned}
$$

##### Fubini's theorem

For continuous $f$ on a rectangle, the iterated integrals can be evaluated in either order. A convenient order can simplify the calculation. For example,
$$
\int_1^2\int_0^1\frac{xe^x}{y}\,dx\,dy
=[\log y]_1^2[xe^x-e^x]_0^1
=\log 2.
$$

For a nonrectangular domain, draw arrows across the region in the direction of the inner integration to determine the bounds. For $0\le x\le3$ and $0\le y\le x/2$, vertical slices run from $y=0$ to $y=x/2$. Horizontal slices run from $x=2y$ to $x=3$ for $0\le y\le3/2$. Hence
$$
\int_0^3\int_0^{x/2} f(x,y)\,dy\,dx
=\int_0^{3/2}\int_{2y}^3 f(x,y)\,dx\,dy.
$$
The result is a number. The inner bounds may depend on the outer variable, and the outer bounds must be constants.

##### 15.3 Integrating over general domains

Integrate $h(x,y)=x$ over the right half of the disk $x^2+y^2\leq 9$. Vertical slices are bounded by $y=\pm\sqrt{9-x^2}$ for $0\leq x\leq3$. Horizontal slices run from $x=0$ to $x=\sqrt{9-y^2}$ for $-3\leq y\leq3$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Right half disk.png|**Fig. 104** The shaded right half of the disk has radius 3.]]

With vertical slices,
$$
\int_0^3\int_{-\sqrt{9-x^2}}^{\sqrt{9-x^2}} x\,dy\,dx
=\int_0^3 2x\sqrt{9-x^2}\,dx
=\left[-\frac23(9-x^2)^{3/2}\right]_0^3=18.
$$
With horizontal slices,
$$
\int_{-3}^3\int_0^{\sqrt{9-y^2}} x\,dx\,dy
=\int_{-3}^3 \frac{9-y^2}{2}\,dy
=\left[\frac{9y}{2}-\frac{y^3}{6}\right]_{-3}^3=18.
$$

For the next region, add the integrals of $h(x,y)$ over four pieces $D_1,D_2,D_3,D_4$. Two triangles below the $x$-axis are bounded below by $y=-2x-4$ and $y=2x-4$. Two upper semicircles lie on $y^2+(x+1)^2=1$ and $y^2+(x-1)^2=1$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Four piece integration region.png|**Fig. 105** Two triangular pieces and two semicircular pieces partition the integration domain.]]

Using the four pieces from the previous page, integrate with vertical slices on $D_1,D_3,D_4$ and horizontal slices on $D_2$:
$$
\begin{aligned}
\iint_D h\,dA
={}&\int_{-2}^0\int_{-2x-4}^0 h(x,y)\,dy\,dx
+\int_{-4}^0\int_0^{(y+4)/2} h(x,y)\,dx\,dy\\
&+\int_{-2}^0\int_0^{\sqrt{1-(x+1)^2}}h(x,y)\,dy\,dx
+\int_0^2\int_0^{\sqrt{1-(x-1)^2}}h(x,y)\,dy\,dx.
\end{aligned}
$$

##### 15.4 Integrals in polar coordinates

The volume between $z=0$ and $z=f(x,y)$ over $D$ is $\iint_D f\,dA$ for $f\geq0$. The area is $\iint_D1\,dA$ and the average of $f$ is $\iint_Df\,dA/\operatorname{area}(D)$. Double integrals obey linearity,
$$
\iint_D(af+bg)\,dA=a\iint_D f\,dA+b\iint_D g\,dA,
$$
and add over pieces whose overlap has area zero. In Cartesian coordinates the integral is a limit of sums of $f(x_i,y_j)\Delta y\,\Delta x$.

To change from Cartesian to polar coordinates, write
$$
r=\sqrt{x^2+y^2},\qquad \tan\theta=\frac yx,\qquad
x=r\cos\theta,\qquad y=r\sin\theta.
$$
The quadrant determines the angle when recovering it from $y/x$. The integrand becomes $f(r\cos\theta,r\sin\theta)$, and the Riemann sum now uses polar cells. Their areas determine the new expression for $dA$.

A polar cell from radius $r$ to $r+\Delta r$ and angle $\theta$ to $\theta+\Delta\theta$ occupies the fraction $\Delta\theta/(2\pi)$ of an annulus. Its area is
$$
\Delta A
=\frac{\Delta\theta}{2\pi}\bigl[\pi(r+\Delta r)^2-\pi r^2\bigr]
=r\Delta r\,\Delta\theta+\frac{(\Delta r)^2}{2}\Delta\theta.
$$
The second term is higher order in $\Delta r$, so the area element is $dA=r\,dr\,d\theta$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Annular sector area.png|**Fig. 106** The shaded polar cell is a sector of an annulus.]]

Find the average of $f(x,y)=\sin(x^2+y^2)$ over the right half of the disk of radius 2. In polar coordinates the bounds are $0\leq r\leq2$ and $-\pi/2\leq\theta\leq\pi/2$, and the integrand becomes $\sin(r^2)$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Polar half disk average.png|**Fig. 107** The region used to average the radial function is the right half of the disk of radius 2.]]

Using $u=r^2$ and $du=2r\,dr$ in the numerator,
$$
\begin{aligned}
\overline f
&=\frac{\int_{-\pi/2}^{\pi/2}\int_0^2\sin(r^2)r\,dr\,d\theta}
{\int_{-\pi/2}^{\pi/2}\int_0^2 r\,dr\,d\theta}\\
&=\frac{\int_{-\pi/2}^{\pi/2}\bigl[-\tfrac12\cos(r^2)\bigr]_0^2\,d\theta}
{\int_{-\pi/2}^{\pi/2}\bigl[\tfrac12r^2\bigr]_0^2\,d\theta}
=\frac{\pi(1-\cos4)/2}{2\pi}
=\frac{1-\cos4}{4}.
\end{aligned}
$$

For $f(x,y)=xy=r^2\sin\theta\cos\theta$ on the disk $(x-1)^2+y^2\leq1$, the boundary satisfies $x^2+y^2=2x$ and hence $r^2=2r\cos\theta$. Away from the origin the boundary is $r=2\cos\theta$. Integrating from the origin to that boundary gives
$$
\int_{-\pi/2}^{\pi/2}\int_0^{2\cos\theta} r^3\sin\theta\cos\theta\,dr\,d\theta
=4\int_{-\pi/2}^{\pi/2}\cos^5\theta\sin\theta\,d\theta=0
$$
by odd symmetry.

![[Kyle Kabasares - Calculus III - Vector Calculus - Offset polar disk.png|**Fig. 108** The disk centered at $(1,0)$ is tangent to the vertical axis at the origin.]]

For the petal bounded by $r=\cos(2\theta)$ on $-\pi/4\leq\theta\leq\pi/4$, use $\cos^2(2\theta)=(1+\cos4\theta)/2$:
$$
A=\int_{-\pi/4}^{\pi/4}\int_0^{\cos(2\theta)} r\,dr\,d\theta
=\frac12\int_{-\pi/4}^{\pi/4}\cos^2(2\theta)\,d\theta
=\left[\frac{\theta}{4}+\frac{\sin4\theta}{16}\right]_{-\pi/4}^{\pi/4}
=\frac{\pi}{8}.
$$

##### Triple integrals

For a three-dimensional box partitioned into smaller boxes of equal volume $\Delta V$, the integral is the limit of the three-index Riemann sum
$$
\iiint_V f(x,y,z)\,dV
=\lim_{m,n,p\to\infty}
\sum_{i=1}^m\sum_{j=1}^n\sum_{k=1}^p f(x_i,y_j,z_k)\,\Delta V.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Triple Riemann sum cells.png|**Fig. 109** A box partitioned into cells for a three-dimensional Riemann sum.]]

Integrating $1$ gives the volume. If the solid lies between $z=0$ and a nonnegative graph $z=f(x,y)$ over $D$, that volume is also $\iint_D f(x,y)\,dA$. Integrating a mass density $\mechanical{\rho}(x,y,z)$ gives the mass $\mechanical{M}=\iiint_V\mechanical{\rho}(x,y,z)\,dV$.

##### 15.7 Triple integrals

For the brownie example, the box has $-1\leq x\leq1$, $0\leq y\leq2$, and $0\leq z\leq1$. Integrate the model calorie density:
$$
\begin{aligned}
\int_{-1}^1\int_0^2\int_0^1(3+xz-y^3)\,dz\,dy\,dx
&=\int_{-1}^1\int_0^2\left[3z+\frac{xz^2}{2}-y^3z\right]_0^1dy\,dx\\
&=\int_{-1}^1\left[3y+\frac{xy}{2}-\frac{y^4}{4}\right]_0^2dx
=\int_{-1}^1(x+2)\,dx=4.
\end{aligned}
$$

For a solid above $z=0$, below $z=1-y$, and on the side $y\geq\sqrt{x}$ with $x\geq0$, its volume can be set up in several orders.

![[Kyle Kabasares - Calculus III - Vector Calculus - Triple integral solid.png|**Fig. 110** The sloping plane bounds the solid above, and the curved vertical face lies on $y=\sqrt{x}$.]]

When integrating $z$ first, the projection in the $xy$-plane can be sliced either vertically or horizontally:
$$
I_1=\int_0^1\int_{\sqrt{x}}^1\int_0^{1-y} dz\,dy\,dx,\qquad
I_2=\int_0^1\int_0^{y^2}\int_0^{1-y} dz\,dx\,dy.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Triple integral xy projection.png|**Fig. 111** The $xy$ projection lies between $y=\sqrt{x}$ and $y=1$, to the right of $x=0$.]]

When integrating $y$ first, the bounds are $\sqrt{x}\leq y\leq1-z$. In the $xz$ projection, $x\leq(1-z)^2$ or equivalently $z\leq1-\sqrt{x}$:
$$
I_3=\int_0^1\int_0^{(1-z)^2}\int_{\sqrt{x}}^{1-z}dy\,dx\,dz,\qquad
I_4=\int_0^1\int_0^{1-\sqrt{x}}\int_{\sqrt{x}}^{1-z}dy\,dz\,dx.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Triple integral xz projection.png|**Fig. 112** The $xz$ projection is bounded by the axes and $z=1-\sqrt{x}$.]]

When integrating $x$ first for the solid on the preceding page, the bounds are $0\leq x\leq y^2$. The triangular $yz$ projection can be sliced in either direction:
$$
I_5=\int_0^1\int_0^{1-z}\int_0^{y^2} dx\,dy\,dz,\qquad
I_6=\int_0^1\int_0^{1-y}\int_0^{y^2} dx\,dz\,dy.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Triple integral yz projection.png|**Fig. 113** The $yz$ projection lies in the first quadrant below $y+z=1$.]]

##### 15.8 Triple integrals in cylindrical coordinates

Cylindrical coordinates $(r,\theta,z)$ use polar coordinates in the horizontal plane and retain the Cartesian height $z$. The radius $r$ is the distance from the $z$-axis, and $\theta$ is the azimuth measured from the positive $x$ direction. A fixed $z=k$ gives a horizontal plane, fixed $r=2$ gives a cylinder, and fixed $\theta=\pi/6$ gives a vertical half-plane.

![[Kyle Kabasares - Calculus III - Vector Calculus - Cylindrical coordinate plane and cylinder.png|**Fig. 114** Holding $z$ fixed gives a plane. Holding $r$ fixed gives a cylinder.]]

![[Kyle Kabasares - Calculus III - Vector Calculus - Constant azimuth half plane.png|**Fig. 115** Holding the azimuth fixed gives a vertical half-plane starting at the $z$-axis.]]

To set up a triple integral in cylindrical coordinates:

1. Use the volume element $dV=r\,dr\,d\theta\,dz$. A cell has radial width $dr$, angular arc length $r\,d\theta$, and height $dz$.
2. Substitute $x=r\cos\theta$, $y=r\sin\theta$, and unchanged $z$ into the integrand to obtain $f(r\cos\theta,r\sin\theta,z)$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Cylindrical volume element.png|**Fig. 116** Extruding an annular sector through height $dz$ gives a cylindrical volume cell.]]

Find the volume of the cone bounded by $z=2\sqrt{x^2+y^2}$ and $z=H$. The conical boundary is $z=2r$, and the plane $z=H$ meets it at radius $H/2$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Cone volume geometry.png|**Fig. 117** The circular top of the cone is a height $H$ above the apex.]]

$$
\begin{aligned}
V
&=\int_0^{2\pi}\int_0^{H/2}\int_{2r}^H r\,dz\,dr\,d\theta
=\int_0^{2\pi}\int_0^{H/2}r(H-2r)\,dr\,d\theta\\
&=2\pi\left[\frac{Hr^2}{2}-\frac{2r^3}{3}\right]_0^{H/2}
=2\pi\left(\frac{H^3}{8}-\frac{H^3}{12}\right)
=\frac{\pi H^3}{12}.
\end{aligned}
$$
With base radius $R=H/2$, this is $V=\pi R^2H/3$.

Find the average height $\overline z$ of the solid upper half of a sphere of radius $R$. The spherical boundary $x^2+y^2+z^2=R^2$ becomes $r^2+z^2=R^2$ in cylindrical coordinates. Above the equatorial plane it gives $z=\sqrt{R^2-r^2}$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Upper hemisphere cylindrical bounds.png|**Fig. 118** The upper hemisphere lies above the equatorial disk in the $xy$-plane.]]

For the three-dimensional average, divide the triple integral of the height by the volume of the solid:
$$
\overline z=\frac{\iiint_V z\,dV}{\iiint_V 1\,dV}.
$$

For the upper hemisphere, the cylindrical integral of $z$ is
$$
\int_0^R\int_0^{2\pi}\int_0^{\sqrt{R^2-r^2}} zr\,dz\,d\theta\,dr
=\pi\int_0^R r(R^2-r^2)\,dr=\frac{\pi R^4}{4}.
$$
The denominator $\int_0^R\int_0^{2\pi}\int_0^{\sqrt{R^2-r^2}}r\,dz\,d\theta\,dr$ is half the volume of the sphere, $2\pi R^3/3$. The average height is $\overline z=3R/8$.

##### 15.9 Triple integrals in spherical coordinates

Spherical coordinates $(\rho,\theta,\phi)$ use $\rho\geq0$ for distance from the origin, $0\leq\theta<2\pi$ for azimuth in the $xy$-plane, and $0\leq\phi\leq\pi$ for inclination from the positive $z$-axis.

![[Kyle Kabasares - Calculus III - Vector Calculus - Spherical coordinate angles.png|**Fig. 119** The sketch shows the radial distance, its horizontal projection, and the two spherical angles.]]

A fixed $\rho=R$ gives a sphere. The equation $\theta=\pi/4$ gives a vertical half-plane, and $\phi=\pi/3$ gives a cone.

![[Kyle Kabasares - Calculus III - Vector Calculus - Spherical coordinate surfaces.png|**Fig. 120** A sphere, half-plane, and cone are the coordinate surfaces obtained by fixing one spherical coordinate at a time.]]

From the right triangle, $r=\rho\sin\phi$ and $z=\rho\cos\phi$. Together with $x=r\cos\theta$ and $y=r\sin\theta$, this yields
$$
x=\rho\sin\phi\cos\theta,\qquad
y=\rho\sin\phi\sin\theta,\qquad
z=\rho\cos\phi,\qquad
\rho=\sqrt{x^2+y^2+z^2}.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Spherical conversion triangle.png|**Fig. 121** The inclination from the vertical gives the projections $z=\rho\cos\phi$ and $r=\rho\sin\phi$.]]

To integrate in spherical coordinates, convert the integrand, express the solid in $(\rho,\theta,\phi)$, and use $dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta$.

##### Mass inside a cone and a sphere

The cone $z=\sqrt{3}\sqrt{x^2+y^2}=\sqrt3\,r$ has inclination $\phi=\pi/6$. The written calculation uses the sphere
$$
x^2+y^2+\left(z-\frac H{\sqrt3}\right)^2=\left(\frac H{\sqrt3}\right)^2.
$$
Expanding gives $\rho^2=(2H/\sqrt3)\rho\cos\phi$. Along each ray within the cone, the sphere is reached at $\rho=2H\cos\phi/\sqrt3$. For the density $3-\rho^2/5$ in the notes, the mass integral is
$$
\mechanical{M}
=\int_0^{2\pi}\int_0^{\pi/6}\int_0^{2H\cos\phi/\sqrt3}
\left(3-\frac{\rho^2}{5}\right)\rho^2\sin\phi\,d\rho\,d\phi\,d\theta.
$$
The upper radial bound follows the expanded sphere equation. The sketch labels $H$ at the cone's circular rim, which does not agree with the position of the rim for the written sphere.

![[Kyle Kabasares - Calculus III - Vector Calculus - Cone with spherical cap.png|**Fig. 122** The handwritten sketch shows the conical side and a rounded cap.]]

Midterm 2 review material includes quizzes, homework, worksheets, problems 5 and 6 on practice midterm 1, and problems 1, 2, and 5 on practice midterm 2. The listed sections are 14.3–14.7, 15.1–15.4, and 15.7–15.9.

A change of variables uses invertible relations $u=u(x,y)$ and $v=v(x,y)$ with inverses $x=x(u,v)$ and $y=y(u,v)$. The aim is to describe a region more simply in the new variables.

![[Kyle Kabasares - Calculus III - Vector Calculus - Change of variables region mapping.png|**Fig. 123** The change of variables straightens the sides of a region to make a rectangle in the new coordinate plane.]]

Cartesian coordinates use $(x,y,z)$, polar use $(r,\theta)$, cylindrical use $(r,\theta,z)$, and spherical use $(\rho,\theta,\phi)$. In Cartesian coordinates $dA=dx\,dy$ and $dV=dx\,dy\,dz$. Under $x=r\cos\theta$, $y=r\sin\theta$, the area element is $dA=r\,dr\,d\theta$.

For the one-dimensional example $\int x^2e^{x^2}\,dx$ on $x\geq0$, the substitution $u=x^2$ gives $x=\sqrt u$ and $dx=du/(2\sqrt u)$ for $u>0$. In two variables, choose the new coordinates, compute the new area element, and convert the integrand.

The parallelogram is bounded by $y=x-1$, $y=x+2$, $y=-x/2+3$, and $y=-x/2+4$. Choose variables that are constant on these lines:
$$
u=y-x,\qquad v=y+\frac x2.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Cartesian parallelogram for substitution.png|**Fig. 124** Two families of parallel lines bound the shaded parallelogram in Cartesian coordinates.]]

The new region is $-1\leq u\leq2$ and $3\leq v\leq4$. Adding $u+2v=3y$ and solving for $x$ gives
$$
y=\frac{u+2v}{3},\qquad x=\frac{2(v-u)}{3}.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Rectangle after substitution.png|**Fig. 125** The shaded region becomes a rectangle with sides parallel to the new coordinate axes.]]

The shaded first-quadrant region lies between $y=1/x$, $y=2/x$, $y=4x/3$, and $y=x/2$. Let $u=x/y$ and $v=xy$. The two rays become $u=3/4$ and $u=2$, while the two hyperbolas become $v=1$ and $v=2$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Region between rays and hyperbolas.png|**Fig. 126** The two rays and two hyperbolas bound a curvilinear quadrilateral in the first quadrant.]]

Since $x=uy$ and $v=uy^2$, the inverse transformation on this region is
$$
y=\sqrt{\frac vu},\qquad
x=u\sqrt{\frac vu}=\sqrt{uv}.
$$

Small changes $du$ and $dv$ in the new variables produce changes in $x$ and $y$. The image of a small rectangle is approximately a parallelogram.

![[Kyle Kabasares - Calculus III - Vector Calculus - Local parallelogram approximation.png|**Fig. 127** A small coordinate rectangle maps locally to a parallelogram.]]

The Jacobian of the transformation $(u,v)\mapsto(x,y)$ is
$$
J=\frac{\partial(x,y)}{\partial(u,v)}
=\begin{vmatrix}x_u&x_v\\y_u&y_v\end{vmatrix}.
$$
The absolute value scales area, so $dA=|J|\,du\,dv$.

Return to the parallelogram bounded by $u=y-x=-1,2$ and $v=y+x/2=3,4$. The inverse transformation gives $x=2(v-u)/3$, $y=(u+2v)/3$, and $x+y=(4v-u)/3$.

![[Kyle Kabasares - Calculus III - Vector Calculus - Parallelogram Jacobian example.png|**Fig. 128** The four Cartesian boundary lines are level sets of the two new coordinates.]]

The determinant is
$$
J=\begin{vmatrix}-2/3&2/3\\1/3&2/3\end{vmatrix}
=-\frac49-\frac29=-\frac23.
$$
Thus $dA=(2/3)\,du\,dv$ and the transformed integral is
$$
\iint_D(x+y)\,dA=\frac23\int_{-1}^2\int_3^4\frac{4v-u}{3}\,dv\,du.
$$

For polar coordinates, $x_r=\cos\theta$, $x_\theta=-r\sin\theta$, $y_r=\sin\theta$, and $y_\theta=r\cos\theta$. The Jacobian is
$$
J=\begin{vmatrix}
\cos\theta&-r\sin\theta\\
\sin\theta&r\cos\theta
\end{vmatrix}
=r\cos^2\theta+r\sin^2\theta=r,
$$
so $dA=r\,dr\,d\theta$.

If $u(x,y)$ and $v(x,y)$ are known and the transformation is locally invertible with a nonzero Jacobian, the reciprocal determinant can be calculated directly:
$$
\frac1J=\frac{\partial(u,v)}{\partial(x,y)}
=\begin{vmatrix}u_x&u_y\\v_x&v_y\end{vmatrix}.
$$
For $u=y-x$ and $v=y+x/2$, the determinant is $-1-1/2=-3/2$, giving $|J|=2/3$.

Review problems 5 and 6 from midterm 1. In the tangent-plane exercise, the surface $S$ is given through two curves rather than by an equation:
$$
\mathbf r_1(t)=\langle1+5t,\ 3-t^2,\ 2+t-t^3\rangle,\qquad
\mathbf r_2(s)=\langle3s-2s^2,\ s+s^3+s^4,\ s-s^2+2s^3\rangle.
$$
Find the tangent plane at $P=(1,3,2)$. The parameters at $P$ are $t=0$ and $s=1$. The first components agree because $1+5(0)=3(1)-2(1)^2=1$. Substituting in the other two components gives $3$ and $2$ for both curves, so they intersect at $P$.

For the two curves through $P=(1,3,2)$, differentiate to find the tangent vectors:
$$
\begin{aligned}
\mathbf r_1'(t)&=\langle5,-2t,1-3t^2\rangle,
&\mathbf r_1'(0)&=\langle5,0,1\rangle,\\
\mathbf r_2'(s)&=\langle3-4s,1+3s^2+4s^3,1-2s+6s^2\rangle,
&\mathbf r_2'(1)&=\langle-1,8,5\rangle.
\end{aligned}
$$
Their cross product is $\mathbf n=\langle-8,-26,40\rangle$. Hence the tangent plane through $P$ is
$$
-8(x-1)-26(y-3)+40(z-2)=0.
$$

For $f(x,y)=x\cos y+y^2e^x+x$, the differential is
$$
df=dz=(\cos y+y^2e^x+1)\,dx+(-x\sin y+2ye^x)\,dy.
$$
At $(0,\pi,\pi^2)$ the two coefficients evaluate to $\pi^2$ and $2\pi$, so the tangent plane is
$$
z-\pi^2=\pi^2x+2\pi(y-\pi).
$$

**Midterm 2 review**

The first region has right boundary $x=y-y^3$. The lower portion $D_1$ extends from $y=-1$ to $y=0$ and has left boundary $x=-1$. The upper portion $D_2$ extends from $y=0$ to $y=1$ and has left boundary $y=(x+1)^2$, or $x=\sqrt y-1$ on the indicated branch. Its total area is
$$
A=\int_{-1}^0\int_{-1}^{y-y^3}1\,dx\,dy
+\int_0^1\int_{\sqrt y-1}^{y-y^3}1\,dx\,dy.
$$
The average of $f(x,y)=y^2$ on $D_1\cup D_2$ is
$$
\overline f=\frac{\iint_{D_1} y^2\,dA+\iint_{D_2} y^2\,dA}{A}.
$$

![[Kyle Kabasares - Calculus III - Vector Calculus - Midterm two piece region.png|**Fig. 129** The left integration limit changes at $y=0$, so the region is split there.]]

For $f(x,y)=4x+6y-x^2-y^2$, the equations $f_x=4-2x=0$ and $f_y=6-2y=0$ give $(2,3)$. The second derivatives $f_{xx}=f_{yy}=-2$ and $f_{xy}=0$ give determinant $D=4>0$, so this point is a local maximum.

![[Kyle Kabasares - Calculus III - Vector Calculus - Midterm optimization rectangle.png|**Fig. 130** The function is restricted to a rectangle with $0\leq x\leq4$ and $0\leq y\leq5$.]]

On the edge $x=0$, the restriction is $f(0,y)=6y-y^2$. Its derivative vanishes at $y=3$, where its second derivative is $-2$, giving a maximum along that edge.

## Source

Kyle Kabasares, *Calculus III - Vector Calculus (Math 23, UC Merced 2014)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\rho}$ | $\unit{kg\,m^{-3}}$ | Mass density | Mass per unit volume. |
| $\mechanical{M}$ | $\unit{kg}$ | Total mass | Integral of the density over the solid. |
