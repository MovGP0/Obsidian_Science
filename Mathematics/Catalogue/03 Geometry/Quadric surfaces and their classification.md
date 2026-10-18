---
title: "Quadric surfaces and their classification"
catalogue_ids:
  - "3.5.3.13"
  - "3.5.3.14"
---

> [!TLDR]
> A quadric is a surface described by a quadratic equation; rotations and translations expose its axes, signs, and degenerate cases.

## Read standard equations through slices

Begin with [[Lines circles and conic sections]] and [[Lines planes and intersections in space]]. A **quadric** is the zero set of a real polynomial of degree two in $x,y,z$. A slice fixes one coordinate and gives a planar curve. Slices help reconstruct the whole shape without a perfect three-dimensional drawing. Here $a,b,c$ are positive constants.

An ellipsoid has equation $x^2/a^2+y^2/b^2+z^2/c^2=1$. Its axis intercepts are $\pm a,\pm b,\pm c$. At fixed $z=z_0$ the slice is an ellipse when $|z_0|<c$, a point when $|z_0|=c$, and empty otherwise. Equal semiaxes give a sphere.

The one-sheet hyperboloid $x^2/a^2+y^2/b^2-z^2/c^2=1$ has an ellipse at every fixed $z$. Its narrowest such section is at $z=0$, and the surface is connected. The two-sheet hyperboloid $-x^2/a^2-y^2/b^2+z^2/c^2=1$ requires $|z|\ge c$. It has two disconnected components. The equation with right side zero, $x^2/a^2+y^2/b^2-z^2/c^2=0$, is an elliptic double cone; its vertex is a singular point.

## Paraboloids and cylinders

The elliptic paraboloid $z=x^2/a^2+y^2/b^2$ has ellipse slices above its vertex and none below. The hyperbolic paraboloid $z=x^2/a^2-y^2/b^2$ is a saddle: the sections $y=0$ and $x=0$ bend in opposite directions. At $z=0$ its slice is two intersecting lines. This does not mean the whole surface is singular.

If a coordinate is absent, translate freely in that direction without changing the equation. Thus $x^2/a^2+y^2/b^2=1$ is an elliptic cylinder parallel to $z$. The equations $x^2/a^2-y^2/b^2=1$ and $y=x^2$ give hyperbolic and parabolic cylinders. In mathematics a cylinder need not have a circular cross-section.

These examples show why a sign list alone is insufficient. A missing squared term can carry a linear term, producing a paraboloid, or be entirely absent, producing a cylinder. Constants can remove all real points or collapse a surface to lower dimension.

## General quadratic form

Write the polynomial as

$$
X^{\mathsf T}AX+b^{\mathsf T}X+c_0=0,
\qquad X=(x,y,z)^{\mathsf T},
$$

where $A$ is a real symmetric $3\times3$ matrix. A mixed term $6xy$ corresponds to $A_{12}=A_{21}=3$, since the matrix product counts it twice. A symmetric matrix has an orthonormal basis of eigenvectors. An **eigenvector** is a direction $v\ne0$ with $Av=\lambda v$; $\lambda$ is its eigenvalue. [[10.07 Eigenvalues and eigenvectors]] supplies the calculation method. Using those directions as axes removes mixed products. This spectral theorem is stated here; a proof belongs to linear algebra.

If $A$ is invertible, translate to $X_0=-\tfrac12A^{-1}b$. Substituting $X=X_0+Y$ cancels the linear terms, because $2AX_0+b=0$. The equation becomes

$$
Y^{\mathsf T}AY+c_0-\tfrac14b^{\mathsf T}A^{-1}b=0.
$$

Then rotate into eigenvector axes and divide by a nonzero constant if appropriate. If $A$ is singular, do not use its inverse. Diagonalize first and complete squares only in directions with nonzero eigenvalues. A remaining linear term in a zero-eigenvalue direction gives a paraboloid-type equation. No such term gives cylinder-type or degenerate cases.

## Worked example: a rotated ellipsoid

Consider $2x^2+2xy+2y^2+3z^2=6$. In the $xy$-plane use $u=(x+y)/\sqrt2$ and $v=(x-y)/\sqrt2$. The inverse relations are $x=(u+v)/\sqrt2$, $y=(u-v)/\sqrt2$. Thus $x^2+y^2=u^2+v^2$ and $2xy=u^2-v^2$. Substitution gives

$$
3u^2+v^2+3z^2=6,
\qquad \frac{u^2}{2}+\frac{v^2}{6}+\frac{z^2}{2}=1.
$$

The semiaxes are $\sqrt2,\sqrt6,\sqrt2$. The longest axis points along $(1,-1,0)$. The point $(\sqrt3,-\sqrt3,0)$ has $v=\sqrt6$ and satisfies the original equation: $6-6+6=6$. This checks both the direction and scale.

## Degeneracies and limitations

The equation $x^2+y^2+z^2=-1$ has no real points. With right side zero it has one point. The equation $x^2+y^2=0$ gives a line, while $x^2-z^2=0$ gives two planes. These sets arise from quadratic equations but are not regular quadric surfaces everywhere. Multiplying an equation by a nonzero scalar leaves its zero set unchanged. Axis labels and the sign of an eigenvector can change without changing the underlying geometry.

## Practice

1. Classify $x^2+y^2-z^2=4$ and describe its $z=0$ slice.
2. Classify $x^2+y^2-2z=0$ and find its slice at $z=2$.

## Worked answers

1. Division by $4$ gives two positive squared terms and one negative term with positive right side: a one-sheet hyperboloid. At $z=0$, the section is the circle $x^2+y^2=4$.
2. Rearrangement gives $z=(x^2+y^2)/2$, an elliptic paraboloid. At $z=2$, the slice is $x^2+y^2=4$, a circle of radius $2$.
