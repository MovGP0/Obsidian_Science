---
title: "Lines planes and intersections in space"
catalogue_ids:
  - "3.5.3.8"
  - "3.5.3.9"
  - "3.5.3.10"
  - "3.5.3.11"
  - "3.5.3.12"
---

> [!TLDR]
> A space curve needs one parameter and a surface needs two; linear equations describe lines, planes, and their intersections.

## Curves, surfaces, and their equations

Use [[Vector calculations and geometric products]] first. A space curve can be given by $r(t)=(x(t),y(t),z(t))$. The parameter $t$ selects one point. For instance $(\cos t,\sin t,t)$ is a helix. A curve can also be the common solution of two surface equations. The equations $x^2+y^2=1$ and $z=0$ together specify a circle; the first equation alone specifies a cylinder, not a curve.

A surface patch has two parameters: $r(u,v)$. For example $(u,v,u^2+v^2)$ is a paraboloid. An implicit equation $F(x,y,z)=0$ can also describe a surface, but degeneracies matter: $x^2+y^2+z^2=0$ is one point, not a regular two-dimensional surface. [[Surface geometry curvature and geodesics]] explains the local regularity conditions when derivatives are available.

## Lines and planes

A line through $A$ in nonzero direction $d$ has equation $X=A+td$. Coordinate expressions are $x=A_x+td_x$, and similarly for $y,z$. Symmetric fractions $(x-A_x)/d_x=(y-A_y)/d_y=(z-A_z)/d_z$ are permitted only for nonzero denominators. A zero direction component instead fixes that coordinate.

A plane through $P$ with nonzero normal $n$ is

$$
n\cdot(X-P)=0.
$$

Thus $ax+by+cz=d$ is a plane if $(a,b,c)\ne0$. Alternatively use $X=P+su+tv$ with independent spanning directions $u,v$; then $u\times v$ is a normal. Three noncollinear points determine one plane. Collinear points do not.

For point $Q$, its perpendicular foot on the plane is

$$
H=Q-\frac{n\cdot(Q-P)}{n\cdot n}n,
\qquad \operatorname{dist}(Q,\text{plane})=
\frac{|n\cdot(Q-P)|}{\|n\|}.
$$

Subtracting a multiple of the normal makes $H-P$ perpendicular to $n$. This derives both formulas from the scalar projection.

## Intersections and exceptional cases

Substitute $A+td$ into the plane equation. If $n\cdot d\ne0$, solve the single linear equation

$$
t=\frac{n\cdot(P-A)}{n\cdot d}.
$$

If the denominator is zero, the line is parallel to the plane. It lies entirely in the plane when the numerator is also zero; otherwise there is no intersection. Do not divide first and inspect later.

Two planes with independent normals intersect in a line directed by $n_1\times n_2$. Find one point by solving their equations with one convenient coordinate fixed. Parallel normals give coincident or disjoint planes. Two space lines can intersect, be parallel, coincide, or be **skew**: nonparallel but disjoint. To test intersection solve $A+tu=B+sv$ and require all three coordinate equations to hold.

For nonparallel lines, their shortest distance is

$$
\frac{|(B-A)\cdot(u\times v)|}{\|u\times v\|}.
$$

The numerator projects the connecting displacement onto the common perpendicular, and the denominator normalizes that direction. A zero result means the lines are coplanar and hence intersect. For parallel lines use $\|(B-A)\times u\|/\|u\|$ instead.

## Angles

The smaller angle between lines uses $\cos\theta=|u\cdot v|/(\|u\|\|v\|)$, with $0\le\theta\le\pi/2$. The smaller dihedral angle between planes uses the same formula on their normals. The angle $\eta$ of a line to a plane is complementary to its angle with the normal:

$$
\sin\eta=\frac{|d\cdot n|}{\|d\|\|n\|}.
$$

Absolute values remove the arbitrary signs of direction and normal vectors. If an oriented angle is required, additional orientation data are needed.

## Worked example: a line meets a plane

Take the plane $x+2y+2z=6$ and line $X=(0,0,0)+t(1,1,1)$. Substitution gives $5t=6$, so the intersection is $(6/5,6/5,6/5)$. The normal length is $3$, while the line direction length is $\sqrt3$. Hence $\sin\eta=5/(3\sqrt3)$.

The perpendicular foot from the origin is $(6/9)(1,2,2)=(2/3,4/3,4/3)$, and the distance is $6/3=2$. This foot differs from the line-plane intersection because the chosen line is not the normal line. Substituting either point into the plane equation confirms membership.

For a skew example use $L_1=(t,0,0)$ and $L_2=(0,s,1)$. Equality would require $0=1$ in the last coordinate, so they do not meet. Their direction cross product is $(0,0,1)$, giving distance $1$.

## Practice

1. Find the intersection line of $x+y=2$ and $z=3$.
2. Decide whether $(1,0,0)+t(0,1,0)$ intersects $x=2$.

## Worked answers

1. Set $x=t$, so $y=2-t$, $z=3$. The line is $(0,2,3)+t(1,-1,0)$. Its direction is perpendicular to both normals $(1,1,0)$ and $(0,0,1)$.
2. Every line point has $x=1$. The plane requires $x=2$. The direction is perpendicular to the normal $(1,0,0)$, and the line is parallel and disjoint from the plane.
