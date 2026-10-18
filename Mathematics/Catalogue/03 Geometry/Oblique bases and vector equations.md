---
title: "Oblique bases and vector equations"
catalogue_ids:
  - "3.5.1.6"
  - "3.5.1.7"
---

> [!TLDR]
> In a slanted basis, expansion coefficients and dot products with basis vectors differ; a Gram matrix connects them.

## From a vector equation to scalar equations

Read [[Vector calculations and geometric products]] first. A vector equation states equality of vectors. Once a basis is fixed, this is equivalent to equality in every coordinate. For example,

$$
a(1,0)+b(1,2)=(3,4)
$$

means $a+b=3$ and $2b=4$. Solve the second equation to obtain $b=2$, then the first to obtain $a=1$. Two scalar equations replace one planar vector equation. Geometric meaning remains useful: we are building a displacement from two independent directions.

If the directions were $(1,0)$ and $(2,0)$, they could not build $(3,4)$. If the target were $(3,0)$, infinitely many coefficient pairs would work. Independence is therefore the condition for unique coordinates. In three dimensions use three independent directions. [[05.07 Linear combinations]] gives further elementary examples.

## Contravariant and covariant coordinates

Let $\mathbf b_1,\mathbf b_2$ be independent but not necessarily perpendicular. Write

$$
\mathbf v=v^1\mathbf b_1+v^2\mathbf b_2.
$$

The superscripts label the **contravariant components**: the expansion coefficients. They are indices, not powers. Define the **covariant components**, using the Euclidean dot product, by $v_i=\mathbf b_i\cdot\mathbf v$. Substitution gives

$$
v_i=\sum_j g_{ij}v^j,\qquad g_{ij}=\mathbf b_i\cdot\mathbf b_j.
$$

The array $G=(g_{ij})$ is the Gram matrix. Each entry measures a basis length or angle; [[05.06 General bases]] derives its properties. It is invertible because the basis is independent, so the expansion coefficients can be recovered from the covariant components. In an orthonormal basis $G$ is the identity, and the two lists agree. This special case can hide their different roles.

The word covariant here uses an inner product to associate a vector with a linear measuring function. Without that extra structure, a vector does not automatically have lowered components. [[18.01 Dual spaces]] explains these measuring functions, or covectors, in detail.

![[catalogue-ch03b-oblique-basis.svg|**Fig. C.ch03b.1** The same vector is the sum of one horizontal basis vector and two slanted basis vectors. Its expansion coefficients are (1, 2), not its standard coordinates (3, 4).]]

## Worked example in a slanted basis

Use $\mathbf b_1=(1,0)$, $\mathbf b_2=(1,2)$, and $\mathbf v=(3,4)$. The earlier equation gave $(v^1,v^2)=(1,2)$. The Gram matrix and covariant components are

$$
G=\begin{pmatrix}1&1\\1&5\end{pmatrix},\qquad
\begin{pmatrix}v_1\\v_2\end{pmatrix}
=G\begin{pmatrix}1\\2\end{pmatrix}
=\begin{pmatrix}3\\11\end{pmatrix}.
$$

Direct dot products check this: $(1,0)\cdot(3,4)=3$ and $(1,2)\cdot(3,4)=11$. The length is not $\sqrt{1^2+2^2}$ or $\sqrt{3^2+11^2}$. It is

$$
\|\mathbf v\|^2=\sum_i v^iv_i=1(3)+2(11)=25.
$$

This agrees with $3^2+4^2$. The reciprocal basis consists of vectors $\mathbf b^1=(1,-1/2)$ and $\mathbf b^2=(0,1/2)$, which obey $\mathbf b^i\cdot\mathbf b_j=1$ when $i=j$ and $0$ otherwise. Dotting them with $\mathbf v$ extracts $1$ and $2$. They implement the dual-coordinate functions using the Euclidean dot product.

## Why the transformation names differ

Suppose a new basis is formed from an old basis by an invertible coefficient matrix $S$: its $j$th column gives the old components of the new $j$th basis vector. Holding the actual vector fixed gives $v_{\mathrm{old}}=S v_{\mathrm{new}}$ for expansion columns. Therefore $v_{\mathrm{new}}=S^{-1}v_{\mathrm{old}}$. Components change inversely to the basis, which explains “contravariant.”

For lowered-component columns, dotting with the new basis instead gives $v_{\mathrm{new,lower}}=S^{\mathsf T}v_{\mathrm{old,lower}}$. The superscript $\mathsf T$ means transpose: interchange rows and columns. Do not use these two rules interchangeably. They keep the scalar $\sum_i v^i w_i$ unchanged. This is a change of description, not a physical or geometric movement of the vector.

## Vector equations for geometric constraints

The line through point $A$ in nonzero direction $\mathbf d$ is $X=A+t\mathbf d$, where $t$ is real. To intersect two lines, equate their coordinate expressions and solve for both parameters. For example, $(t,t)=(1+s,1-s)$ gives $t=1$, $s=0$. The common point is $(1,1)$. In three dimensions there may be no simultaneous solution even when directions are not parallel: the lines can be skew. The complete geometric cases are in [[Lines planes and intersections in space]].

## Practice

1. With $\mathbf b_1=(2,0)$ and $\mathbf b_2=(0,1)$, find both component lists of $\mathbf v=(6,4)$ and its squared length.
2. Solve $a(1,1)+b(1,-1)=(4,2)$, and explain why the solution is unique.

## Worked answers

1. Expansion gives $(v^1,v^2)=(3,4)$. Dotting with basis vectors gives $(v_1,v_2)=(12,4)$. Thus $\|\mathbf v\|^2=3(12)+4(4)=52$, agreeing with $36+16$.
2. The scalar equations are $a+b=4$, $a-b=2$. Adding them gives $a=3$, then $b=1$. The basis vectors are independent because neither is a scalar multiple of the other, so the coordinates are unique.
