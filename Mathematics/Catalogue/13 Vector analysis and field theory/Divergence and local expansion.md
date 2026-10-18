---
title: "Divergence and local expansion"
catalogue_ids:
  - "13.2.4"
  - "13.2.4.1"
  - "13.2.4.2"
  - "13.2.4.3"
  - "13.2.4.4"
---

> [!TLDR]
> Divergence measures net outward flux per unit volume and includes geometric area factors in curved coordinates.

## From paired faces to a derivative

Read [[Directional derivatives and gradients]] and [[05.05 Dot products]]. For a $C^1$ field $\mathbf F=(P,Q,R)$, define

$$
\operatorname{div}\mathbf F=\nabla\cdot\mathbf F=P_x+Q_y+R_z.
$$

The answer is a scalar. It is the trace, or sum of diagonal entries, of the Jacobian. It is not the vector $(P_x,Q_y,R_z)$. To understand the sum, place a small rectangular box at a point. The two faces perpendicular to $x$ have opposite outward normals. Their net contribution is approximately $P_x\,dx\,dy\,dz$. The corresponding $y$ and $z$ pairs contribute $Q_y$ and $R_z$ times the same volume. After division by volume, the sum remains.

The result measures local outward excess. A constant field can cross a box strongly but has zero divergence: what enters one side leaves the other. A positive divergence does not mean that every arrow points away from the point. For example, $(2x,-y,0)$ has divergence one, even though its $y$ component points toward the $x$-axis. Divergence records the total balance of all directions.

![[catalogue-ch13-divergence-curl.svg|**Fig. C.ch13.2** The expanding field (x, y) has positive divergence. The rotational field (−y, x) has zero divergence and positive planar curl.]]

## Rules for calculating divergence

Linearity gives $\nabla\cdot(a\mathbf F+b\mathbf G)=a\nabla\cdot\mathbf F+b\nabla\cdot\mathbf G$ for constants $a,b$. Applying the component product rule gives

$$
\nabla\cdot(f\mathbf F)=\nabla f\cdot\mathbf F+f\nabla\cdot\mathbf F.
$$

Neither factor may be dropped when both vary. For a cross product,

$$
\nabla\cdot(\mathbf F\times\mathbf G)
=\mathbf G\cdot(\nabla\times\mathbf F)-\mathbf F\cdot(\nabla\times\mathbf G).
$$

The minus sign follows from the antisymmetry of the cross product. For a $C^2$ field $\mathbf A$, $\nabla\cdot(\nabla\times\mathbf A)=0$, since mixed second derivatives cancel in pairs. A **solenoidal** field is one with zero divergence throughout its stated domain. It need not be constant or curl-free.

## Divergence in different coordinates

Use the cylindrical and spherical conventions of [[Nabla identities and curvilinear coordinates]]. Components here refer to their unit vectors. In cylindrical coordinates,

$$
\nabla\cdot\mathbf F=\frac1\rho\partial_\rho(\rho F_\rho)
+\frac1\rho\partial_\phi F_\phi+\partial_zF_z.
$$

In spherical coordinates, with polar angle $\theta$ measured from positive $z$,

$$
\nabla\cdot\mathbf F=\frac1{r^2}\partial_r(r^2F_r)
+\frac1{r\sin\theta}\partial_\theta(\sin\theta F_\theta)
+\frac1{r\sin\theta}\partial_\phi F_\phi.
$$

The factors describe growing face areas. For example, opposite spherical faces have areas proportional to $r^2$. Subtracting their flux requires differentiating $r^2F_r$, not merely $F_r$. Coordinate formulas apply on regular coordinate patches. Their denominators may fail at a pole even when the underlying Cartesian field is smooth.

## Divergence of a central field

For $\mathbf F=a(r)\mathbf e_r$ in three dimensions, all angular components vanish. Therefore, for $r>0$,

$$
\nabla\cdot\mathbf F=\frac1{r^2}\frac{d}{dr}(r^2a(r))
=a'(r)+\frac{2a(r)}r.
$$

If $a(r)=r^m$, this is $(m+2)r^{m-1}$. In particular $a=r$ gives three, while $a=r^{-2}$ gives zero away from the origin. The latter field has outward flux $4\pi$ through every centered sphere. This does not contradict zero ordinary divergence on its domain: the origin is excluded, so one cannot use the smooth divergence theorem on the filled ball. In a generalized sense its source is concentrated at the origin; [[Point sources and superposition]] explains that statement.

For two-dimensional radial fields the corresponding formula is $a'(r)+a(r)/r$, with one rather than two. The dimension changes the circumference or area scaling. Do not copy the three-dimensional central-field formula into a planar problem.

## Worked example: verify a local balance

Let $\mathbf F=(x^2,y,z)$ on the unit cube $0\le x,y,z\le1$. Its divergence is $2x+2$. Integrate over the cube: the result is $\int_0^1(2x+2)dx=3$. The two $x$ faces have net flux $1-0=1$. The two $y$ faces contribute one, and the two $z$ faces contribute one. The total is three. This checks both the derivative formula and its outward orientation.

For a second coordinate check, take $\mathbf G=\rho\mathbf e_\rho+z\mathbf e_z$. Its divergence is $\rho^{-1}\partial_\rho(\rho^2)+1=3$. Since this is $(x,y,z)$ in Cartesian coordinates, the direct answer $1+1+1$ agrees.

## Common errors

Distinguish outward flux from flux through one chosen open surface. A divergence theorem requires the complete closed boundary. A field with a point or line singularity must be treated on a punctured region, or with a stated generalized source. Finally, divergence contains only one part of the local change; a zero answer does not prove that the field is zero.

## Practice

1. Find the divergence of $\mathbf F=(xy,yz,zx)$. Evaluate it at $(1,2,3)$.
2. A central field has zero divergence for every $r>0$. Find all possible $a(r)$ on an interval of positive radii.

## Worked answers

1. The derivatives are $y,z,x$, so the divergence is $x+y+z$. Its value at the given point is six.
2. The equation is $(r^2a)'=0$. Therefore $r^2a=C$ on the interval, and $a=C/r^2$. Smoothness at the origin would impose extra conditions; it is not part of this interval problem.
