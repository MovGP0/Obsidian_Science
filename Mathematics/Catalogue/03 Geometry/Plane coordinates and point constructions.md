---
title: "Plane coordinates and point constructions"
catalogue_ids:
  - "3.5.2"
  - "3.5.2.1"
  - "3.5.2.2"
  - "3.5.2.3"
  - "3.5.2.4"
  - "3.5.2.5"
---

> [!TLDR]
> Coordinates convert positions, special points, and areas into equations that can be checked by calculation.

## Coordinate systems and curves

Read [[04.01 Coordinates]] for points, distances, and displacements. A Cartesian system selects an origin and two perpendicular unit directions. The coordinates $(x,y)$ say how far to go in those directions. A polar system selects an origin and a reference ray: $r$ is distance from the origin, and $\theta$ is angle from the ray. For $r\ge0$,

$$
x=r\cos\theta,\quad y=r\sin\theta,\quad r=\sqrt{x^2+y^2}.
$$

At a nonzero point, choose the correct quadrant for $\theta$, for example with the two-argument function $\operatorname{atan2}(y,x)$. At the origin the angle is not determined. Angles differing by $2\pi$ describe the same ray. [[04.05 The unit circle]] explains the sine and cosine used here.

An **equation of a curve** specifies its points. Explicit form $y=f(x)$ is convenient but excludes a full circle as one function. Implicit form $F(x,y)=0$ can include it. Parametric form $x=x(t),y=y(t)$ lists the coordinates through a common parameter. A circle can be written $x^2+y^2=4$ or $(x,y)=(2\cos t,2\sin t)$. These expressions describe the same set, though a parameter interval may trace it more than once.

## Translate and rotate coordinates

Suppose a new origin is $O'=(h,k)$, and the new axes turn counterclockwise through $\alpha$. A fixed point has old coordinates $(x,y)$ and new coordinates $(X,Y)$. Resolving the two new unit directions in the old system gives

$$
\begin{pmatrix}x\\y\end{pmatrix}
=\begin{pmatrix}h\\k\end{pmatrix}
+\begin{pmatrix}\cos\alpha&-\sin\alpha\\\sin\alpha&\cos\alpha\end{pmatrix}
\begin{pmatrix}X\\Y\end{pmatrix}.
$$

Subtract the origin and transpose the rotation matrix to invert this relation. Its columns are perpendicular unit vectors, so transposition reverses the rotation. A coordinate change leaves the point fixed; an active rotation moves the point. The formulas look similar but use inverse angles. [[Affine transformations and homogeneous coordinates]] treats the distinction in matrix form.

For example, let $O'=(1,2)$ and $\alpha=\pi/2$. Then $x=1-Y$, $y=2+X$. The point $(3,5)$ therefore has $(X,Y)=(3,-2)$. Substitution reconstructs the old point, an effective sign check.

## Special points of a triangle

Let three noncollinear points be $A,B,C$. Their centroid is

$$
G=\frac{A+B+C}{3}.
$$

Indeed, the midpoint of $BC$ is $M=(B+C)/2$, and $A+\frac23(M-A)=(A+B+C)/3$. Thus the centroid lies two thirds of the way along each median from its vertex. This derivation uses affine point combinations whose coefficients add to one.

The circumcenter is equidistant from the three vertices. Subtracting two squared-distance equations cancels the quadratic terms and gives a linear equation. It is the intersection of perpendicular bisectors. The orthocenter is the intersection of altitudes, each perpendicular to the opposite side. The incenter has barycentric formula

$$
I=\frac{aA+bB+cC}{a+b+c},\qquad a=|BC|,\ b=|CA|,\ c=|AB|.
$$

Here a vertex is weighted by the length of its opposite side. The angle-bisector theorem gives this ratio; perpendicular distances from $I$ to the three sides agree. These points need not coincide, and the circumcenter or orthocenter can lie outside an obtuse triangle. A collinear triple has no unique circumcircle or ordinary triangle incenter.

## Areas from determinants

The signed area of a triangle is

$$
\frac12\big((B_x-A_x)(C_y-A_y)-(B_y-A_y)(C_x-A_x)\big).
$$

This is half the signed parallelogram area from [[Vector calculations and geometric products]]. Its absolute value is the ordinary area. For a simple polygon whose successive vertices are $(x_i,y_i)$, sum the signed triangles from the origin to obtain the shoelace formula

$$
\text{area}=\frac12\left|\sum_{i=1}^n(x_i y_{i+1}-y_i x_{i+1})\right|,
\qquad (x_{n+1},y_{n+1})=(x_1,y_1).
$$

Successive vertices must follow the boundary. For a self-intersecting polygon this sum is signed area with multiplicities, not necessarily the enclosed area intended by a drawing.

## Worked example

Take $A=(0,0)$, $B=(6,0)$, $C=(0,4)$. The signed area is $\frac12(6\cdot4)=12$. The centroid is $(2,4/3)$. Equal distances to $A,B$ give $x=3$; equal distances to $A,C$ give $y=2$. Thus the circumcenter is $(3,2)$, the midpoint of hypotenuse $BC$. The altitudes along the coordinate axes meet at $A$, so the orthocenter is $(0,0)$. The side lengths are $a=\sqrt{52}$, $b=4$, $c=6$, so the incenter is $(24,24)/(10+\sqrt{52})$. Its two equal coordinates agree with equal distances from the two perpendicular coordinate sides.

## Practice

1. Convert polar coordinates $(r,\theta)=(2,\pi/3)$ into Cartesian coordinates.
2. Find the centroid and area of $(1,1),(5,1),(1,4)$.

## Worked answers

1. Since $\cos(\pi/3)=1/2$ and $\sin(\pi/3)=\sqrt3/2$, the point is $(1,\sqrt3)$. Squaring and adding gives $r^2=4$, as required.
2. Averaging coordinates gives $G=(7/3,2)$. Edges from the first point are $(4,0)$ and $(0,3)$. Their determinant is $12$, so the area is $6$.
