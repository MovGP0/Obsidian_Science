---
title: "Functional analysis: a route from vectors to functions"
catalogue_ids:
  - "12"
---

> [!TLDR]
> Functional analysis extends vector calculations to spaces of sequences and functions, with distance and completeness controlling limits.

## Start from school mathematics

A pair such as $(2,3)$ can be added to another pair and multiplied by a number. A polynomial can be treated in the same way. For example, adding $1+2t$ and $3-t$ gives $4+t$. Functional analysis keeps these familiar operations and asks what happens when vectors have infinitely many coordinates, or are entire functions.

You do not need previous university analysis to start this route. First read [[05.02 Vector operations]], [[05.05 Dot products]], [[05.07 Linear combinations]], and [[10.01 Vector spaces]]. These explain components, scalar multiplication, span, and basis. Continue with [[09.01 Sequences]] and [[09.02 Infinite series]] for limits and partial sums. Use [[11.04 Inner products]] and [[11.09 Complex inner products]] before the Hilbert-space lessons. The articles below explain the additional ideas when they first occur.

The derivative and integral are needed only for function examples and Sobolev spaces. Read [[Differential calculus - Overview]] and [[Integral calculus - Overview]] before those examples. A first pass can use coordinate vectors and sequences throughout. The later measure-theory part of this chapter supplies the general Lebesgue integral; the elementary examples here use integrals of ordinary piecewise smooth functions.

## Four layers of structure

A **vector space** permits linear combinations $ax+by$. A **metric space** supplies distances $d(x,y)$, even when addition makes no sense. A **normed vector space** combines both: $d(x,y)=\|x-y\|$, where a norm measures size. A **Hilbert space** adds an inner product, which measures orthogonality, and requires completeness in its induced norm.

Completeness means that a sequence whose late terms become arbitrarily close to one another has a limit inside the space. A complete normed space is a **Banach space**. A complete inner-product space is a Hilbert space, and therefore also a Banach space. The converse fails: not every norm comes from an inner product.

For example, on $\mathbb R^2$, the Euclidean norm $\sqrt{x^2+y^2}$ comes from the dot product. The norm $|x|+|y|$ does not. Both make $\mathbb R^2$ complete. A point has the same coordinates in each case, but its measured distance changes.

## Learning route

1. [[Vector spaces affine sets and convexity]] separates subspaces, translated subspaces, and convex sets.
2. [[Linear maps functionals and complexification]] explains maps between vector spaces and how real spaces can acquire complex scalars.
3. [[Ordered vector spaces and lattices]] adds a compatible meaning of “positive”.
4. [[Metric spaces and convergence]] introduces distance, open sets, closure, and continuity.
5. [[Complete metrics and contraction maps]] explains why some iterative equations have a unique limit.
6. [[Norms Banach spaces and series]] combines vector operations with distance and infinite sums.
7. [[Sobolev spaces and weak derivatives]] controls a function and its derivatives together.
8. [[Ordered norms and normed algebras]] adds order or multiplication to a normed space.
9. [[Inner products and Hilbert spaces]] develops infinite-dimensional orthogonality.
10. [[Orthogonal expansions and best approximation]] turns orthogonal coordinates into convergent expansions.

This is a route through the first four catalogue sections. The complete chapter index also includes operators, spectra, nonlinear maps, and integration. Those subjects use the distinctions established here.

## Worked example: one vector, several questions

Take $x=(3,4)$ and $M=\{(s,0):s\in\mathbb R\}$. Algebra alone says that $M$ is a subspace, since $(s,0)+(t,0)=(s+t,0)$ and $a(s,0)=(as,0)$. A norm supplies a distance: the Euclidean norm gives $\|x\|_2=5$.

The dot product adds a best approximation. The candidate $p=(3,0)$ lies in $M$, and $x-p=(0,4)$ is orthogonal to every vector in $M$. For another candidate $q=(s,0)$,

$$
\|x-q\|_2^2=(3-s)^2+16\ge16=\|x-p\|_2^2.
$$

Thus $p$ is the unique closest point. This argument uses more structure than the subspace test. The projection theorem later extends it to closed subspaces of Hilbert spaces. The word “closed” becomes essential when infinitely many coordinates are allowed.

## Practice

1. Which extra information is needed to ask whether two vectors are perpendicular: vector addition, a metric, or an inner product?
2. The sequence $1,1.4,1.41,1.414,\ldots$ consists of decimal truncations of $\sqrt2$. Explain why its behavior differs in $\mathbb Q$ and $\mathbb R$ with the usual distance.

## Worked answers

1. An inner product supplies the condition $\langle x,y\rangle=0$. Addition alone supplies no angle. An arbitrary metric need not arise from an inner product, so distance alone does not supply this particular definition of perpendicularity.
2. Its terms approach one another, so it is Cauchy. In $\mathbb R$ it converges to $\sqrt2$. That number is irrational, so the same sequence has no limit in $\mathbb Q$. Completeness depends on both the set and the metric.

<!-- catalogue-complete-lesson-index:start -->
## Complete lesson index

Read the prerequisite route above before the advanced lessons. The source topic links are in [[Planned Topics#12. Functional analysis|the detailed catalogue]].

- [[Vector spaces affine sets and convexity|Vector spaces, affine sets, and convexity]] — 12.1, 12.1.1, 12.1.2, 12.1.3, 12.1.4, 12.1.4.1, 12.1.4.2.
- [[Linear maps functionals and complexification|Linear maps, functionals, and complexification]] — 12.1.5, 12.1.5.1, 12.1.5.2, 12.1.5.3, 12.1.6.
- [[Ordered vector spaces and lattices|Ordered vector spaces and lattices]] — 12.1.7, 12.1.7.1, 12.1.7.2, 12.1.7.3, 12.1.7.4.
- [[Metric spaces and convergence|Metric spaces and convergence]] — 12.2, 12.2.1, 12.2.1.1, 12.2.1.2, 12.2.1.3, 12.2.1.4, 12.2.3.
- [[Complete metrics and contraction maps|Complete metrics and contraction maps]] — 12.2.2, 12.2.2.1, 12.2.2.2, 12.2.2.3, 12.2.2.4, 12.2.2.5.
- [[Norms Banach spaces and series|Norms, Banach spaces, and series]] — 12.3, 12.3.1, 12.3.1.1, 12.3.1.2, 12.3.2, 12.3.2.1, 12.3.2.2.
- [[Sobolev spaces and weak derivatives|Sobolev spaces and weak derivatives]] — 12.3.2.3.
- [[Ordered norms and normed algebras|Ordered norms and normed algebras]] — 12.3.3, 12.3.4.
- [[Inner products and Hilbert spaces|Inner products and Hilbert spaces]] — 12.4, 12.4.1, 12.4.1.1, 12.4.1.2, 12.4.1.3.
- [[Orthogonal expansions and best approximation|Orthogonal expansions and best approximation]] — 12.4.2, 12.4.2.1, 12.4.2.2, 12.4.3, 12.4.3.1, 12.4.3.2, 12.4.4.
- [[Bounded operators and convergence|Bounded operators and convergence]] — 12.5, 12.5.1, 12.5.1.1, 12.5.1.2, 12.5.1.3, 12.5.2.
- [[Resolvents and spectra|Resolvents and spectra]] — 12.5.3, 12.5.3.1, 12.5.3.2.
- [[Continuous functionals and representation|Continuous functionals and representation]] — 12.5.4, 12.5.4.1, 12.5.4.2, 12.5.4.3.
- [[Extension separation and reflexivity|Extension, separation, and reflexivity]] — 12.5.5, 12.5.6, 12.5.7.
- [[Dual and Hilbert adjoints|Dual and Hilbert adjoints]] — 12.6, 12.6.1, 12.6.2, 12.6.3, 12.6.3.1, 12.6.3.2.
- [[Compactness weak convergence and Fredholm equations|Compactness, weak convergence, and Fredholm equations]] — 12.7, 12.7.1, 12.7.2, 12.7.2.1, 12.7.2.2, 12.7.2.3, 12.7.3.
- [[Compact self-adjoint spectral theory|Compact self-adjoint spectral theory]] — 12.7.4, 12.7.5.
- [[Nonlinear derivatives and Newton iteration|Nonlinear derivatives and Newton iteration]] — 12.8, 12.8.1, 12.8.2, 12.8.3.
- [[Fixed points positive maps and monotonicity|Fixed points, positive maps, and monotonicity]] — 12.8.4, 12.8.5, 12.8.6, 12.8.7.
- [[Measure and Lebesgue integration|Measure and Lebesgue integration]] — 12.9, 12.9.1, 12.9.2, 12.9.2.1, 12.9.2.2, 12.9.3, 12.9.3.1, 12.9.3.2, 12.9.3.3.
- [[Lp spaces and integral norms|Lᵖ spaces and integral norms]] — 12.9.4.
- [[Distributions and generalized derivatives|Distributions and generalized derivatives]] — 12.9.5, 12.9.5.1, 12.9.5.2, 12.9.5.3, 12.9.5.4.
<!-- catalogue-complete-lesson-index:end -->
