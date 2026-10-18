---
title: "Ordered norms and normed algebras"
catalogue_ids:
  - "12.3.3"
  - "12.3.4"
---

> [!TLDR]
> A normed space can also carry a compatible positive order or a multiplication whose size is controlled by the norm.

## Prerequisites and two additional structures

Read [[Ordered vector spaces and lattices]] and [[Norms Banach spaces and series]]. They introduce positive cones, vector lattices, norms, and completeness. This lesson adds order and multiplication separately. A space may have either structure, both, or neither. A norm does not create an order or define a product of vectors by itself.

The simplest joint example is $\mathbb R^2$. Use coordinatewise order, the maximum norm $\|(x,y)\|_\infty=\max(|x|,|y|)$, and coordinatewise multiplication $(x,y)(u,v)=(xu,yv)$. Nonnegative inputs have nonnegative products, and the product's norm is no larger than the product of the two norms. This example provides a model for several abstract definitions.

## Ordered normed spaces

An **ordered normed space** is a real normed vector space with an order defined by a pointed convex cone. Many texts additionally require the positive cone to be closed; we state this requirement whenever it is used. If the cone $K$ is closed, $x_n\ge0$ and $x_n\to x$ in norm imply $x\ge0$. Indeed, closed sets contain limits of their convergent sequences.

A cone is **normal** if there is a constant $C>0$ such that

$$
0\le x\le y\quad\Longrightarrow\quad\|x\|\le C\|y\|.
$$

This links order size to norm size. For the coordinate order and any of the usual $p$-norms, $C=1$ works. Each coordinate of $x$ is then between zero and the corresponding coordinate of $y$, so summing their nonnegative powers, or taking their maximum, preserves the comparison. A general positive cone and an arbitrary norm need not give this property.

In a vector lattice, a **lattice norm** satisfies

$$
|x|\le|y|\quad\Longrightarrow\quad\|x\|\le\|y\|.
$$

A complete vector lattice with such a norm is a **Banach lattice**. Examples are $\mathbb R^n$ with coordinate order and a $p$-norm, the real space $C[0,1]$ with pointwise order and supremum norm, and real $\ell^p$ spaces for $1\le p\le\infty$. The lattice absolute value is coordinatewise or pointwise absolute value, not the scalar norm.

## Order bounds versus norm bounds

An order bound supplies two vectors $a,b$ such that $a\le x\le b$. A norm bound supplies one real number $M$ with $\|x\|\le M$. In a Banach lattice, order bounded sets are norm bounded: if $a\le x\le b$, then $|x|\le|a|+|b|$, so $\|x\|\le\|a\|+\|b\|$.

The converse fails. In $\ell^2$, the standard vectors $e_n$ all have norm one. If one vector $b\in\ell^2$ were an order upper bound for them, its $n$th coordinate would satisfy $b_n\ge1$ for every $n$. Then $\sum_nb_n^2$ would diverge. Thus this norm-bounded family is not order bounded. An argument about finite-coordinate rectangles does not automatically extend to infinitely many coordinates.

## Normed algebras

An **algebra** over $\mathbb R$ or $\mathbb C$ is a vector space with a bilinear multiplication: the product distributes over addition and respects scalar multiplication in each factor. Here the product is associative, so $(ab)c=a(bc)$. A **normed algebra** also satisfies the submultiplicative bound

$$
\|ab\|\le\|a\|\,\|b\|.
$$

If its normed space is complete, it is a **Banach algebra**. A **unit** $1$ is an element with $1a=a1=a$. Not every algebra has one. In the unital examples here, $\|1\|=1$. Commutativity is optional: matrix multiplication is generally not commutative.

Continuous scalar functions on $[0,1]$ form a commutative unital Banach algebra with pointwise multiplication and supremum norm. The bound follows from $|f(t)g(t)|\le\|f\|_\infty\|g\|_\infty$. Square matrices form a Banach algebra with an induced operator norm. This norm is $\|A\|=\sup_{\|x\|=1}\|Ax\|$; applying $\|Ay\|\le\|A\|\|y\|$ to $y=Bx$ proves submultiplicativity. An arbitrary norm on an algebra need not satisfy the product bound with constant one.

## Worked example: a geometric inverse

In a unital Banach algebra, if $\|a\|<1$, the series $S=\sum_{n=0}^{\infty}a^n$ converges absolutely, since $\|a^n\|\le\|a\|^n$. Its partial sums satisfy

$$
(1-a)\sum_{n=0}^{N}a^n=1-a^{N+1}
=\left(\sum_{n=0}^{N}a^n\right)(1-a).
$$

The remainder tends to zero. Continuity of multiplication gives $(1-a)S=S(1-a)=1$, so $S=(1-a)^{-1}$. The condition $\|a\|<1$ is sufficient, not necessary for invertibility. This argument is called the Neumann series; see [Jacob Lurie's Banach-algebra lecture](https://www.math.ias.edu/~lurie/261ynotes/lecture2.pdf).

For $a(t)=t/2$ in $C[0,1]$, the norm is $1/2$. Thus $(1-a)^{-1}(t)=1/(1-t/2)$, and its geometric expansion converges uniformly. After terms $0$ through $N$, the supremum error is at most $\sum_{n>N}2^{-n}=2^{-N}$. Completeness turns the scalar bound into a limit inside the function algebra.

## Practice

1. In the coordinatewise algebra $\mathbb R^2$, find the multiplicative unit and decide when $(x,y)$ has an inverse.
2. In $C[0,1]$, does $f(t)=t$ have an inverse? Does $g(t)=1+t$?

## Worked answers

1. The unit is $(1,1)$. An inverse must solve $(xu,yv)=(1,1)$, so both coordinates must be nonzero. In that case it is $(1/x,1/y)$. A nonzero vector can therefore fail to be invertible.
2. An inverse for $f$ would have to equal $1/t$ for positive $t$, which is unbounded near zero and cannot be continuous on $[0,1]$. Thus $f$ has no inverse in this algebra. The function $1/(1+t)$ is continuous throughout the interval and multiplies $g$ to one, so it is the inverse of $g$.
