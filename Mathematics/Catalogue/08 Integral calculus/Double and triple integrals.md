---
title: "Double and triple integrals"
catalogue_ids:
  - "8.4.1"
  - "8.4.1.1"
  - "8.4.1.2"
  - "8.4.1.3"
  - "8.4.2"
  - "8.4.2.1"
  - "8.4.2.2"
  - "8.4.2.3"
---

> [!TLDR]
> Multiple integrals add contributions over regions; nested bounds describe the region, and a Jacobian corrects size after a coordinate change.

## From interval widths to area

Read [[Definite integrals and accumulation]] and [[12.01 Functions of several variables]]. A function $f(x,y)$ assigns one number to each point of a plane region $D$. Partition $D$ into small pieces of area $\Delta A_i$, choose sample points, and add $\sum_i f(x_i,y_i)\Delta A_i$. The limit is $\iint_D f\,dA$ when it exists independently of the partition choices. Continuous functions on compact regions with piecewise smooth boundaries are sufficient for the cases here.

Setting $f=1$ gives area. A nonnegative $f$ gives the volume between its graph and the plane. The average of $f$ is its integral divided by the region's area. Coordinate-weighted integrals locate a geometric center: $\overline x=\iint_D x\,dA/A$, and similarly for $\overline y$. Negative $f$ gives signed contributions, just as in one variable.

## Iterated calculation and region bounds

For the rectangle $[a,b]\times[c,d]$ and continuous $f$, Fubini's theorem gives $\iint_Df\,dA=\int_a^b\int_c^d f(x,y)\,dy\,dx$. Work from the inside out. During the inner integral, $x$ is constant. If the upper and lower $y$ boundaries depend on $x$, use $D=\{a\le x\le b,\ g(x)\le y\le h(x)\}$ and replace the inner bounds accordingly.

For the triangle $D=\{x\ge0,y\ge0,x+y\le1\}$,

$$
\begin{aligned}
\iint_D(x+y)\,dA
&=\int_0^1\int_0^{1-x}(x+y)\,dy\,dx\\
&=\int_0^1\left[x(1-x)+\frac{(1-x)^2}{2}\right]dx\\
&=\int_0^1\frac{1-x^2}{2}\,dx=\frac13.
\end{aligned}
$$

The triangle has area $1/2$, so the mean value of $x+y$ is $2/3$. By symmetry $\overline x=\overline y=1/3$. The variable inner bound belongs to the outside variable, not to the variable currently being integrated.

![[catalogue-ch08-triangle-bounds.svg|**Fig. C.08.3** Vertical and horizontal strips describe the same triangular domain with different nested bounds.]]

Figure C.08.3 explains a change of order: $0\le x\le1$, $0\le y\le1-x$ becomes $0\le y\le1$, $0\le x\le1-y$. Merely swapping $dx$ and $dy$ while leaving bounds unchanged would describe an invalid or different setup. For measurable integrands, absolute integrability is sufficient for Fubini; nonnegative integrands permit Tonelli even with infinite values. Conditional improper cases require care.

## Coordinate substitution and the Jacobian

Let $x=x(u,v)$, $y=y(u,v)$. The derivative matrix has determinant

$$
J=\frac{\partial(x,y)}{\partial(u,v)}=x_u y_v-x_v y_u.
$$

It is the local signed area scale. The change-of-variables formula uses its absolute value: $dA=|J|\,du\,dv$. A convenient theorem assumes a continuously differentiable one-to-one transformation with nonzero determinant in the interior, apart from negligible seams or boundary exceptions. A map covering a region twice counts twice unless the domain is restricted. See [[12.08 Coordinate substitution]] and [MIT's multivariable notes](https://math.mit.edu/~poonen/notes02.pdf).

In polar coordinates $x=r\cos\theta$, $y=r\sin\theta$, the determinant is $r$. For the disk $x^2+y^2\le4$, use $0\le r\le2$, $0\le\theta<2\pi$. Then

$$
\iint_D(x^2+y^2)\,dA
=\int_0^{2\pi}\int_0^2r^2r\,dr\,d\theta
=8\pi.
$$

The origin and angular seam do not change the integral. Omitting the extra $r$ loses the area scale of an annular sector. The computed average is $8\pi/(4\pi)=2$, halfway between the radial-square extremes in this particular area distribution.

## Triple integrals and applications

For a spatial region $V$, use small volumes $\Delta V_i$ to define $\iiint_V f\,dV$. Setting $f=1$ gives volume; dividing by that volume gives a spatial average. Coordinates give the geometric center. A continuous function on a compact piecewise smooth region can be computed by nested integrals with bounds chosen from the geometry.

For the tetrahedron $x,y,z\ge0$, $x+y+z\le1$,

$$
\iiint_V1\,dV
=\int_0^1\int_0^{1-x}\int_0^{1-x-y}1\,dz\,dy\,dx
=\int_0^1\frac{(1-x)^2}{2}\,dx=\frac16.
$$

To compute its mean $z$, the inner integral of $z$ is $(1-x-y)^2/2$. Integrating in $y$ gives $(1-x)^3/6$, and then in $x$ gives $1/24$. Divide by $1/6$ to obtain $\overline z=1/4$. Symmetry gives the same values for $\overline x,\overline y$.

In three dimensions the Jacobian is a $3\times3$ determinant. Cylindrical coordinates use $dV=r\,dr\,d\theta\,dz$. Spherical coordinates, with polar angle $\phi$ measured from the positive $z$ axis, use $x=\rho\sin\phi\cos\theta$, $y=\rho\sin\phi\sin\theta$, $z=\rho\cos\phi$ and $dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta$. For a ball of radius $R$, the ranges are $0\le\rho\le R$, $0\le\phi\le\pi$, and $0\le\theta<2\pi$. Their integral gives $(R^3/3)(2)(2\pi)=4\pi R^3/3$. Other sources may exchange angle names; inspect their definitions before copying a Jacobian.

## Practice

1. Find the area of $0\le x\le2$, $0\le y\le x$ by a double integral.
2. Find $\iiint_V z\,dV$ for the cylinder $x^2+y^2\le1$, $0\le z\le2$.

## Worked answers

1. The area is $\int_0^2\int_0^x1\,dy\,dx=\int_0^2x\,dx=2$. Reversing order gives $0\le y\le2$, $y\le x\le2$, and $\int_0^2(2-y)\,dy=2$ again.
2. Cylindrical coordinates give $\int_0^{2\pi}\int_0^1\int_0^2zr\,dz\,dr\,d\theta=2\pi$. The cylinder volume is $2\pi$, so mean $z=1$, consistent with symmetry about its middle plane.
