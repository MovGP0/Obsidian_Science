---
title: "Vector spaces, affine sets, and convexity"
catalogue_ids:
  - "12.1"
  - "12.1.1"
  - "12.1.2"
  - "12.1.3"
  - "12.1.4"
  - "12.1.4.1"
  - "12.1.4.2"
---

> [!TLDR]
> Linear combinations define subspaces, affine combinations define translated subspaces, and convex combinations define mixtures between points.

## From coordinate pairs to abstract vectors

Begin with [[05.02 Vector operations]] and [[10.01 Vector spaces]]. A vector space over $\mathbb R$ permits addition and multiplication by real numbers. The operations obey the usual associative, commutative, and distributive rules, have a zero vector and additive inverses, and satisfy $1v=v$. Over $\mathbb C$, complex numbers replace real scalars. A **scalar** is a member of the chosen number field.

Coordinates are examples, not the definition of a vector. Polynomials form a real vector space: sums and scalar multiples are again polynomials. The continuous real functions on $[0,1]$ also form a vector space, with operations defined at each input. Thus $(f+g)(t)=f(t)+g(t)$ and $(af)(t)=af(t)$. These spaces explain why linear algebra is useful beyond arrows.

A linear combination is a finite expression $a_1v_1+\cdots+a_nv_n$. The **span** of a set consists of all its finite linear combinations. Even in an infinite-dimensional vector space, this algebraic definition uses finite sums. Infinite sums need a separate meaning of convergence.

## Linear and affine subsets

A nonempty subset $W$ is a linear subspace when $au+bv\in W$ for all $u,v\in W$ and all scalars $a,b$. This includes the zero vector by setting both scalars to zero. The set $x+y=0$ in $\mathbb R^2$ passes this test. The set $x+y=1$ fails because it misses the origin.

An **affine subspace** is a translate $p+W=\{p+w:w\in W\}$ of a linear subspace. Its direction space is $W$. An affine combination $\sum_i a_i p_i$ has $\sum_i a_i=1$, while its coefficients may be negative. If $p_i=p+w_i$, the sum is $p+\sum_i a_iw_i$, so it stays in $p+W$. Conversely, closure under affine combinations characterizes nonempty affine subspaces.

For a linear map $A$, every nonempty solution set of $Ax=b$ is affine. Choose one solution $p$. Then $A(x-p)=0$, so all solutions are $p+\ker A$. A homogeneous equation $Ax=0$ gives a linear subspace; a nonzero right side generally gives a translated one.

## Independence means unique coefficients

Vectors $v_1,\ldots,v_n$ are linearly independent when

$$
\sum_{j=1}^n a_jv_j=0\quad\Longrightarrow\quad a_1=\cdots=a_n=0.
$$

A basis is an independent spanning family. Subtracting two coordinate expressions proves uniqueness of their coefficients. The polynomials $1,t,t^2$ are independent: if $a+bt+ct^2=0$ for every $t$, substituting $t=0,1,-1$ gives $a=b=c=0$. They span all polynomials of degree at most two. The full polynomial space is infinite-dimensional; no fixed finite degree contains every polynomial.

## Convex sets and the convex hull

A subset $C$ of a real vector space is **convex** when

$$
(1-t)x+ty\in C\qquad(x,y\in C,\ 0\le t\le1).
$$

The expression follows the line segment from $x$ to $y$. Restricting the coefficients to be nonnegative prevents motion past the endpoints. A disk and a filled triangle are convex; a circle consisting only of its boundary is not, because a segment between opposite points crosses its missing center.

The **convex hull** of a set $S$ consists of all finite convex combinations $\sum_i a_i s_i$ with $a_i\ge0$ and $\sum_i a_i=1$. It is convex, contains $S$, and is contained in every convex set containing $S$. These three properties explain the word “hull”. Convex hull does not mean closed convex hull: a closure is an additional operation once a topology is available.

## Cones

A cone is closed under multiplication by nonnegative real scalars. Here we include zero. A **convex cone** is also closed under addition. The first quadrant $\{(x,y):x,y\ge0\}$ is a convex cone. A union of two positive coordinate rays is a cone but is not convex, since $(1,0)+(0,1)$ is missing. A linear subspace permits negative scalars as well; a cone need not do so. Complex spaces can be treated as real vector spaces when discussing convexity and cones.

## Worked example: three different hulls

Let $A=(1,0)$ and $B=(0,1)$. Their linear span is all of $\mathbb R^2$, because $(x,y)=xA+yB$. Their affine hull is the line $x+y=1$, since $tA+(1-t)B=(t,1-t)$ with unrestricted real $t$.

Their convex hull is only the segment $x+y=1$ with $x,y\ge0$, because now $0\le t\le1$. Their convex conical hull is the whole first quadrant, using $aA+bB$ with $a,b\ge0$ and no requirement that $a+b=1$. These four constructions solve different problems. Always inspect both the sign conditions and the sum of coefficients.

## Practice

1. Is $\{(x,y):y=2x+3\}$ linear, affine, or convex?
2. Does $(1,1)$ lie in the convex hull of $(0,0),(2,0),(0,2)$? Does $(2,2)$?

## Worked answers

1. It misses zero, so it is not linear. It equals $(0,3)+\operatorname{span}(1,2)$, so it is affine. Every affine combination stays on the line; in particular every convex combination does. Thus it is convex.
2. The weights $0,1/2,1/2$ give $(1,1)$, so it is included. Every convex combination has coordinate sum at most $2$, because the vertex sums are $0,2,2$. The sum for $(2,2)$ is $4$, so that point is excluded.
