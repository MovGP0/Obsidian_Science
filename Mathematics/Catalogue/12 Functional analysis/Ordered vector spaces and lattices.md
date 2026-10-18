---
title: "Ordered vector spaces and lattices"
catalogue_ids:
  - "12.1.7"
  - "12.1.7.1"
  - "12.1.7.2"
  - "12.1.7.3"
  - "12.1.7.4"
---

> [!TLDR]
> A positive cone defines a compatible partial order; a vector lattice additionally provides a least upper bound and greatest lower bound for each pair.

## Why an order need not compare everything

Start with [[Vector spaces affine sets and convexity]]. In $\mathbb R^2$, define $(a,b)\le(c,d)$ when $a\le c$ and $b\le d$. Then $(1,2)\le(3,4)$, but neither $(1,3)\le(2,2)$ nor the reverse holds. This is a **partial order**: some pairs can be incomparable.

A partial order is reflexive ($x\le x$), antisymmetric ($x\le y$ and $y\le x$ imply $x=y$), and transitive ($x\le y\le z$ implies $x\le z$). It is compatible with a real vector space when $x\le y$ implies $x+z\le y+z$ and $ax\le ay$ for $a\ge0$. Negative scalars reverse the order. These rules generalize ordinary real inequalities without forcing a single ranking of all vectors.

## Cones define the order

A convex cone $K\subseteq V$ contains zero, is closed under addition, and is closed under multiplication by nonnegative scalars. Require also

$$
K\cap(-K)=\{0\}.
$$

This condition is called pointedness. Define $x\le_K y$ to mean $y-x\in K$. Reflexivity uses $0\in K$. Transitivity uses addition in $K$. If both inequalities hold, then $y-x$ and its negative belong to $K$; pointedness gives $x=y$, proving antisymmetry.

Conversely, any compatible partial order determines its positive cone $K=\{x:0\le x\}$. The two constructions recover one another. The cone need not be closed in a topological sense until a topology has been supplied. The full plane is a convex cone but is not pointed, so it does not define a partial order by this rule.

For the coordinate order, $K$ is the nonnegative quadrant. For real-valued functions, use pointwise order: $f\le g$ when $f(t)\le g(t)$ at every input $t$. Complex scalars do not have an ordinary compatible positive order; the basic theory here uses real spaces.

## Order-bounded sets

An **order interval** is $[a,b]=\{x:a\le x\le b\}$. A set is order bounded if it is contained in some such interval. In coordinate order on $\mathbb R^2$, $[(-1,0),(2,3)]$ is a rectangle. A set can be bounded above without being bounded below; both are needed for order boundedness.

For pointwise-ordered functions on $[0,1]$, the family $f_n(t)=t^n$ is order bounded between the constant functions $0$ and $1$. A least upper bound, if it exists in the space, must be smaller than or equal to every upper bound. Merely finding one upper bound does not establish that it is the least one. Order boundedness also differs from a norm bound; their relation is studied in [[Ordered norms and normed algebras]].

## Positive linear operators

A linear operator $T:V\to W$ between ordered spaces is **positive** if $T(K_V)\subseteq K_W$. It then preserves order: if $y-x\in K_V$, linearity gives $T(y)-T(x)=T(y-x)\in K_W$. This implication also proves the converse by setting $x=0$.

For coordinate orders on finite-dimensional spaces, a matrix defines a positive operator exactly when all its entries are nonnegative. Necessity follows by applying the matrix to each standard basis vector, whose image is one column. Sufficiency follows because every output coordinate is a sum of nonnegative products. Positivity here means preservation of order. It is different from the condition $x^{\mathsf T}Ax\ge0$ used for positive semidefinite symmetric matrices.

## Vector lattices

A **vector lattice**, also called a Riesz space, is an ordered vector space in which each pair $x,y$ has a least upper bound $x\vee y$ and greatest lower bound $x\wedge y$. Coordinatewise maximum and minimum provide these in $\mathbb R^n$. Pointwise maximum and minimum provide them for continuous real functions, because the maximum and minimum of two continuous functions are continuous.

Define $x^+=x\vee0$, $x^-=(-x)\vee0$, and $|x|=x\vee(-x)$. Then $x=x^+-x^-$ and $|x|=x^++x^-$. In coordinate spaces these are the familiar positive and negative parts of each coordinate. A vector lattice only promises bounds for each pair; it does not automatically promise suprema for all infinite bounded families. That stronger condition is called Dedekind completeness.

## Worked example: compare, split, and apply an operator

Take $x=(-2,3)$ and $y=(1,1)$. They are incomparable: the first coordinate of $x$ is smaller and the second is larger. Their join and meet are

$$
x\vee y=(1,3),\qquad x\wedge y=(-2,1).
$$

Also $x^+=(0,3)$ and $x^-=(2,0)$, whose difference recovers $x$. For $T(a,b)=(a+2b,3a)$, all matrix entries are nonnegative, so $T$ is positive. Yet $T(x)=(4,-6)$ has a negative coordinate. There is no contradiction: positivity guarantees a nonnegative output only for nonnegative inputs, and $x$ is not nonnegative.

## Practice

1. Does $K=\{(x,y):y\ge0\}$ define a partial order through $v-u\in K$?
2. For $u=(2,-4)$, compute $u^+$, $u^-$, and $|u|$. Is $S(a,b)=(a-b,b)$ positive?

## Worked answers

1. No. Both $(1,0)$ and $(-1,0)$ belong to $K$, so it is not pointed. Its rule makes $(0,0)\le_K(1,0)$ and $(1,0)\le_K(0,0)$ although the two vectors differ. Antisymmetry fails.
2. Coordinatewise splitting gives $u^+=(2,0)$, $u^-=(0,4)$, and $|u|=(2,4)$. The nonnegative input $(0,1)$ has output $(-1,1)$ under $S$, so $S$ is not positive.

## Further reading

For the general order-theoretic framework, see [F. F. Bonsall, Lectures on some fixed point theorems of functional analysis, TIFR lecture notes](https://mathweb.tifr.res.in/sites/default/files/publications/ln/tifr26.pdf). The finite-dimensional examples above supply the definitions needed here.
