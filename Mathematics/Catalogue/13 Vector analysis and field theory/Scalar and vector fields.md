---
title: "Scalar and vector fields"
catalogue_ids:
  - "13.1"
  - "13.1.2"
  - "13.1.2.1"
  - "13.1.2.2"
  - "13.1.2.3"
  - "13.1.2.4"
  - "13.1.3"
  - "13.1.3.1"
  - "13.1.3.2"
  - "13.1.3.3"
  - "13.1.3.4"
  - "13.1.3.5"
---

> [!TLDR]
> A field assigns a value to each point; coordinate changes alter its formula and components but preserve the assigned object.

## Basic concepts of field theory

Start with [[05.03 Components and bases]], [[04.01 Coordinates]], and [[Vector functions and curves]]. Here a **field** is a mathematical function on a region of Euclidean space. It need not describe a physical force. A domain states where inputs are allowed. A scalar field $f:U\to\mathbb R$ assigns one real number to each point of $U$. A vector field $\mathbf F:U\to\mathbb R^3$ assigns one vector. On an open domain, each point has a small surrounding ball within the domain; this permits local derivatives in every direction.

Write $C^1$ for functions with continuous first partial derivatives and $C^2$ for functions with continuous partial derivatives through second order. These assumptions will matter for the later theorems. A formula and its domain must be specified together: $1/\sqrt{x^2+y^2+z^2}$ is not a field on all of $\mathbb R^3$.

## Scalar fields and level sets

Examples include a constant field $f=3$, an affine field $f=2x-y+z$, and a radial field $f=g(r)$ with $r=\sqrt{x^2+y^2+z^2}$. Radial means that the value depends only on distance from a chosen center. An axisymmetric scalar field does not depend on rotation around an axis; for the $z$-axis its cylindrical form depends only on radius and height.

A **level set** is the set of points where $f=c$, for a chosen constant $c$. In two dimensions, $x^2+y^2=c$ gives circles for $c>0$, the origin for $c=0$, and no real points for $c<0$. In three dimensions, $x^2+y^2+z^2=c$ gives spheres for $c>0$. Not every level set is a smooth curve or surface. At critical values it may reduce to a point or contain crossings. The condition $\nabla f\ne0$, introduced in [[Directional derivatives and gradients]], ensures a regular level surface locally.

## Vector fields and their components

In Cartesian coordinates write $\mathbf F=F_x\mathbf e_x+F_y\mathbf e_y+F_z\mathbf e_z$. Uniform fields have a constant vector value. Central fields point along the radius: $\mathbf F=a(r)\mathbf e_r$. Rotational fields such as $\mathbf F=(-y,x,0)$ are tangent to circles around the $z$-axis. These examples describe different geometries; radial does not mean constant magnitude, and tangent does not automatically mean nonzero curl everywhere.

![[catalogue-ch13-levels-and-lines.svg|**Fig. C.ch13.1** Circles are level curves of x² + y². The field (−y, x) is tangent to them; the gradient (2x, 2y) is perpendicular to them.]]

A **field line** is a parameterized curve whose tangent follows the field. One convenient equation is $\mathbf r'(s)=\mathbf F(\mathbf r(s))$. A change of positive parameter speed preserves the oriented line. For a $C^1$ field, a nonzero field value has locally unique integral curves, so two distinct field lines cannot cross at a regular point. At a zero of the field the constant curve is an equilibrium; sketches near that point need care. Arrow length indicates magnitude only when the drawing uses a stated common scale.

## Transition between coordinate systems

Cylindrical coordinates are $(\rho,\phi,z)$ with $x=\rho\cos\phi$, $y=\rho\sin\phi$, and $\rho>0$. Their unit vectors are

$$
\mathbf e_\rho=(\cos\phi,\sin\phi,0),\quad
\mathbf e_\phi=(-\sin\phi,\cos\phi,0),\quad
\mathbf e_z=(0,0,1).
$$

For a scalar field, substitute the coordinate formulas: $x^2+y^2+z^2$ becomes $\rho^2+z^2$. The value at a point is unchanged. For vectors, also change the basis:

$$
F_\rho=F_x\cos\phi+F_y\sin\phi,\qquad
F_\phi=-F_x\sin\phi+F_y\cos\phi.
$$

The inverse formulas are $F_x=F_\rho\cos\phi-F_\phi\sin\phi$ and $F_y=F_\rho\sin\phi+F_\phi\cos\phi$. These are components in a unit basis. The coordinate tangent $\partial\mathbf r/\partial\phi=\rho\mathbf e_\phi$ has length $\rho$, so coefficients in that non-unit basis would differ. This distinction prevents missing radius factors in calculus.

## Worked example: a circular field

Take $\mathbf F=(-y,x,0)$. Substitution and the basis formulas give $F_\rho=0$, $F_\phi=\rho$, and $F_z=0$. Thus $\mathbf F=\rho\mathbf e_\phi$. The field-line equations in Cartesian coordinates are $x'=-y$, $y'=x$, and $z'=0$. Differentiate $x^2+y^2$ along a line: its derivative is $2x(-y)+2y(x)=0$. Radius and height remain constant. The solutions $x=R\cos(s+s_0)$, $y=R\sin(s+s_0)$ therefore trace circles, with speed $R$.

At $(0,0,z)$ the Cartesian formula is well defined and zero even though the cylindrical basis has no unique angle. This is a coordinate failure, not a singularity of the vector field.

## Practice

1. Express $f=x^2+y^2+2z$ and $\mathbf G=(x,y,0)$ in cylindrical coordinates. Describe their level sets or field lines.
2. Can $f=1/r$ extend continuously to the origin? Can the field $(x,y,z)$ do so?

## Worked answers

1. The scalar becomes $\rho^2+2z$; its level surfaces are paraboloids $z=(c-\rho^2)/2$. The vector is $\rho\mathbf e_\rho$. Its lines satisfy $x'=x$, $y'=y$, so their projections are radial rays; height is constant.
2. As $r\to0$, $1/r$ grows without bound, so no finite continuous extension exists. The vector $(x,y,z)$ tends to zero, and its original Cartesian formula already defines that value at the origin.
