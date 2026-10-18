---
title: "Classical curve problems"
catalogue_ids:
  - "10.2"
  - "10.2.1"
  - "10.2.2"
---

> [!TLDR]
> The isoperimetric problem compares enclosed areas at fixed perimeter; the brachistochrone compares weighted path integrals and leads to a cycloid.

## Two questions that require a whole curve

An unknown boundary has more freedom than an unknown radius or slope. A historical source of calculus of variations is the attempt to compare all allowed curves at once. Two important questions are the largest area enclosed by a curve of fixed length and the fastest descent between two points. Their names are **isoperimetric problem** and **brachistochrone problem**. The second name means shortest time, not shortest length.

Read [[Functionals and stationary curves]] first. The area problem also uses circle geometry from [[Geometry and trigonometry - Overview]]. The descent problem is presented below as a dimensionless weighted-length problem, so that its mathematical derivation does not require a prior mechanics course. Its physical interpretation uses ideal motion from rest without friction in a constant downward gravitational field. [[Physical action and equations of motion]] introduces the separate action principle of mechanics.

## Isoperimetric problem

Let a simple closed, piecewise smooth plane curve have perimeter $L$ and enclose area $A$. Simple means that the curve does not cross itself. The classical planar **isoperimetric inequality** states

$$
4\pi A\leq L^2.
$$

For this class, equality holds for a circle. Thus the largest possible area at fixed perimeter is $L^2/(4\pi)$. This is a theorem about all admissible shapes, not a comparison of a few familiar polygons. A full proof requires an additional geometric or analytic argument; the Euler–Lagrange equation alone does not establish the global inequality. [Cristoferi's lecture notes, Chapter 9](https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf) provide proofs and a discussion of the admissible class.

There is an elementary check within rectangles. If sides are $u,v>0$, then $2(u+v)=L$ and

$$
uv=\frac{(u+v)^2-(u-v)^2}{4}
=\frac{L^2}{16}-\frac{(u-v)^2}{4}.
$$

The square gives the largest rectangular area, $L^2/16$. The circle still encloses more because $4\pi<16$. Winning within a restricted family is weaker than winning among all shapes.

To see why variational methods enter, consider a graph arc $y(x)$ above a fixed horizontal line, with fixed endpoints. Its area is $\int y\,dx$, while its length is $\int\sqrt{1+y'^2}\,dx$. Enforce a prescribed length with a constant multiplier $\lambda$ and seek stationarity of

$$
\int\left(y+\lambda\sqrt{1+y'^2}\right)dx.
$$

The equation is $1-\lambda\,d(y'/\sqrt{1+y'^2})/dx=0$. It says the signed curvature $y''/(1+y'^2)^{3/2}$ is constant wherever this graph description is regular and $\lambda\ne0$. Its nonstraight solutions are circle arcs. The graph calculation concerns arcs, not the whole closed boundary: a circle cannot be described by one single-valued graph over its full horizontal diameter. This is one reason to use parametric curves, as in [[Higher derivatives and coupled curves]].

## Brachistochrone as a weighted-length problem

Use dimensionless horizontal coordinate $X$ and dimensionless downward coordinate $Y$. Fix $(X,Y)=(0,0)$ and $(X_1,Y_1)$, with $X_1,Y_1>0$. On curves with $Y>0$ away from the start, consider

$$
I[Y]=\int_0^{X_1}\frac{\sqrt{1+Y'^2}}{\sqrt{Y}}\,dX.
$$

This is length weighted by $1/\sqrt Y$. Greater depth lowers the cost per unit length. The fastest curve can therefore descend below the straight chord: it pays extra length to reduce the later weight. In the physical model, the actual travel time is a positive constant multiple of this reduced integral, so both have the same minimizer.

The integrand has no explicit $X$ dependence. The Beltrami identity gives

$$
F-Y'F_p=\frac{1}{\sqrt Y\sqrt{1+Y'^2}}=C,
\qquad Y(1+Y'^2)=2a,
$$

where $a>0$ is a constant. A parametric solution is

$$
X=a(\theta-\sin\theta),\qquad
Y=a(1-\cos\theta),\qquad 0\leq\theta\leq\theta_1<2\pi.
$$

Indeed, $dY/dX=\sin\theta/(1-\cos\theta)$ and
$Y(1+Y'^2)=2a$. This curve is a **cycloid**. The endpoint conditions determine $a$ and $\theta_1$ through two equations. The branch before the next cusp is the classical direct solution; adding loops or later cusps is not justified by the stationary equation.

The weight is singular at the start, so a theorem assuming a smooth integrand everywhere cannot simply be applied at $Y=0$. Interpret the integral as an improper limit. The parametric form handles the vertical initial tangent without pretending that $Y'(0)$ is finite. The calculation derives the classical candidate. A complete global minimality proof needs an additional comparison argument and is outside this introductory lesson. [UCL's brachistochrone section](https://www.homepages.ucl.ac.uk/~ucahmto/latex_html/latexml.html) derives an equivalent cycloid with the coordinate roles interchanged.

## Worked example: a convenient cycloid endpoint

Take $a=1$ and $\theta_1=\pi$. Then $(X_1,Y_1)=(\pi,2)$. Along the cycloid,

$$
\frac{\sqrt{(dX/d\theta)^2+(dY/d\theta)^2}}{\sqrt Y}
=\sqrt2,
$$

so $I=\sqrt2\pi\approx4.443$. On the straight chord $Y=2X/\pi$, direct integration gives

$$
I_{\mathrm{line}}=\sqrt{1+4/\pi^2}\int_0^\pi\sqrt{\frac{\pi}{2X}}\,dX
=\sqrt{2\pi^2+8}\approx5.267.
$$

The candidate beats this chord. That numerical comparison is evidence against the chord, not a proof against every possible curve.

## Practice

1. A curve has perimeter $L=12$. Give the largest possible enclosed area, and compare it with the largest rectangular area.
2. For the cycloid above with $a=2$, $\theta_1=\pi$, find the endpoint and reduced integral. Does doubling $a$ double the reduced integral?

### Worked answers

1. The circle gives $A=144/(4\pi)=36/\pi\approx11.459$. The best rectangle is the square of side $3$, with area $9$. The inequality certifies the circular maximum among the stated curves.
2. The endpoint is $(2\pi,4)$. The reduced integrand in $\theta$ is $\sqrt{2a}=2$, so $I=2\pi$. Doubling $a$ from $1$ to $2$ multiplies $I$ by $\sqrt2$, because length scales by $a$ and the weight scales by $a^{-1/2}$.
