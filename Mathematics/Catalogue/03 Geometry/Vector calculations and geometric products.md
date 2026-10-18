---
title: "Vector calculations and geometric products"
catalogue_ids:
  - "3.5"
  - "3.5.1"
  - "3.5.1.1"
  - "3.5.1.2"
  - "3.5.1.3"
  - "3.5.1.4"
  - "3.5.1.5"
  - "3.5.1.8"
---

> [!TLDR]
> Vectors describe directed displacements; their products calculate angles, projections, areas, and volumes.

## Vectors, coordinates, and calculation rules

Start with [[05.01 Geometric vectors]] and [[05.03 Components and bases]]. A geometric vector records a length and a direction. Moving its arrow without changing either gives the same **free vector**. A point records a position. The displacement from $A$ to $B$ is $\mathbf v=B-A$; it is a vector, not another point. This distinction lets us translate an entire construction without changing its geometry.

A **basis** is a collection of independent directions that can express every vector. In an orthonormal basis, the directions are mutually perpendicular and have length one. In three dimensions write $\mathbf v=v_1\mathbf e_1+v_2\mathbf e_2+v_3\mathbf e_3$, or simply $(v_1,v_2,v_3)$. A component tells how many copies of one basis vector to add. This article uses a right-handed orthonormal basis for all product formulas. For other bases use [[Oblique bases and vector equations]].

Add vectors component by component. Multiplication by a real scalar changes length and possibly reverses direction:

$$
(a,b,c)+(d,e,f)=(a+d,b+e,c+f),\qquad k(a,b,c)=(ka,kb,kc).
$$

Addition is commutative and associative. Scalar multiplication distributes over addition: $k(\mathbf u+\mathbf v)=k\mathbf u+k\mathbf v$. There is a zero vector, and $\mathbf v+(-\mathbf v)=\mathbf0$. These laws justify the same rearrangements as ordinary linear equations. However, vectors cannot generally be divided by other vectors. Products need their own definitions.

## Scalar product and vector product

The **scalar product**, or dot product, is

$$
\mathbf u\cdot\mathbf v=u_1v_1+u_2v_2+u_3v_3
=\|\mathbf u\|\|\mathbf v\|\cos\theta.
$$

Here $\|\mathbf v\|=\sqrt{\mathbf v\cdot\mathbf v}$ is length, and $\theta\in[0,\pi]$ is the angle between nonzero vectors. The product is a number. Perpendicular nonzero vectors have zero dot product. The component of $\mathbf u$ along a nonzero $\mathbf v$ is described by the projection vector

$$
\operatorname{proj}_{\mathbf v}\mathbf u=
\frac{\mathbf u\cdot\mathbf v}{\mathbf v\cdot\mathbf v}\mathbf v.
$$

To derive the coefficient, require the remainder $\mathbf u-k\mathbf v$ to be perpendicular to $\mathbf v$ and solve $\mathbf u\cdot\mathbf v-k\|\mathbf v\|^2=0$.

The **vector product**, or cross product, in oriented three-dimensional Euclidean space is

$$
\mathbf u\times\mathbf v=
(u_2v_3-u_3v_2,\ u_3v_1-u_1v_3,\ u_1v_2-u_2v_1).
$$

It is perpendicular to both inputs. Its length is $\|\mathbf u\|\|\mathbf v\|\sin\theta$, the area of their parallelogram. Its direction follows the right-hand rule. Swapping the inputs reverses its sign. A triangle formed by the two vectors has half that area. In two dimensions use the signed area $u_1v_2-u_2v_1$ rather than assuming an ordinary planar cross-product vector exists.

## Multiple products and geometric applications

Parentheses matter. The scalar triple product $\mathbf u\cdot(\mathbf v\times\mathbf w)$ is the signed volume of a parallelepiped. Its absolute value is volume; one sixth of it in absolute value gives the tetrahedron volume from three edges at one vertex. Zero means that the three vectors are coplanar. Cyclic permutations preserve this product, while exchanging two inputs changes its sign.

The vector triple product satisfies

$$
\mathbf u\times(\mathbf v\times\mathbf w)
=\mathbf v(\mathbf u\cdot\mathbf w)-\mathbf w(\mathbf u\cdot\mathbf v).
$$

One can verify it by expanding the three coordinates. This also shows that the result lies in the plane spanned by $\mathbf v,\mathbf w$. Cross products are not associative: $(\mathbf u\times\mathbf v)\times\mathbf w$ is a different expression. These products solve geometric problems without a diagram drawn to scale.

## Worked example: one triangle and one volume

Let $A=(1,0,0)$, $B=(3,1,0)$, and $C=(1,2,0)$. Their edge vectors are $\mathbf u=(2,1,0)$ and $\mathbf v=(0,2,0)$. The dot product is $2$, and their lengths are $\sqrt5$ and $2$. Thus $\cos\theta=1/\sqrt5$. Their cross product is $(0,0,4)$, so the triangle area is $4/2=2$.

Project $\mathbf u$ onto $\mathbf v$. The coefficient is $2/4=1/2$, so the projection is $(0,1,0)$. The remainder $(2,0,0)$ is perpendicular to $\mathbf v$, which checks the construction. Add the third edge $\mathbf w=(0,0,3)$. Then $(\mathbf u\times\mathbf v)\cdot\mathbf w=12$, giving parallelepiped volume $12$ and tetrahedron volume $2$.

## Checks and common errors

A dot product can be negative; a length cannot. A zero cross product means parallel vectors or a zero input. It does not imply perpendicularity. The angle and projection formulas require nonzero denominators. Cross-product coordinates change sign if the coordinate orientation changes, so keep a right-handed convention throughout.

## Practice

1. For $\mathbf a=(1,2,0)$ and $\mathbf b=(2,0,0)$, find the projection of $\mathbf a$ onto $\mathbf b$ and the triangle area.
2. Find the volume generated by $(1,0,0),(0,2,0),(1,1,3)$. Are the vectors coplanar?

## Worked answers

1. The dot product is $2$, and $\|\mathbf b\|^2=4$. The projection is $(2/4)(2,0,0)=(1,0,0)$. The cross product is $(0,0,-4)$, so the triangle area is $2$.
2. The first two vectors have cross product $(0,0,2)$. Its dot product with $(1,1,3)$ is $6$. The volume is $6$. Since the triple product is nonzero, the vectors are not coplanar.
