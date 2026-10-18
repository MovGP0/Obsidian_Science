---
title: "Extension, separation, and reflexivity"
catalogue_ids:
  - "12.5.5"
  - "12.5.6"
  - "12.5.7"
---

> [!TLDR]
> Hahn–Banach extends bounded measurements, separation distinguishes convex sets, and reflexivity identifies vectors with all continuous measurements on the dual.

## Prerequisite route

Read [[18.01 Dual spaces]], [[Continuous functionals and representation]], and [[05.07 Linear combinations]]. A subspace is closed under vector addition and scalar multiplication. A set is **convex** if it contains $(1-t)x+ty$ whenever it contains $x,y$ and $0\le t\le1$. A closed set contains the limits of all convergent sequences within it. The notation $X^*$ means the continuous dual, with its functional norm.

## Extension of linear functionals

Suppose a measurement is known only on a subspace $M$ of a normed space $X$. Can we define it on the whole space without increasing its sensitivity? The normed-space **Hahn–Banach theorem** answers yes. If $f:M\to\mathbb F$ is bounded and linear, there is bounded linear $F:X\to\mathbb F$ such that

$$
F|_M=f,\qquad\|F\|=\|f\|.
$$

Neither completeness of $X$ nor closedness of $M$ is required. The extension usually is not unique. The general proof uses a maximal extension argument and is beyond this introduction. [MIT lecture 5](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/06f9cf855f9f5eaa1898f3e684e05cec_MIT18_102s21_lec5.pdf)

Take $M=\{(t,0):t\in\mathbb R\}$ in the Euclidean plane and $f(t,0)=2t$. Every linear extension has the form $F(x,y)=2x+ay$. Its norm is $\sqrt{4+a^2}$. Thus preserving the original norm $2$ forces $a=0$. In this example the extension is unique.

Change the plane's norm to $\|(x,y)\|_1=|x|+|y|$. The norm of $F(x,y)=2x+ay$ is $\max(2,|a|)$: the upper bound follows by the triangle inequality, and coordinate unit vectors attain the larger coefficient. Every $|a|\le2$ now gives a norm-preserving extension. Geometry determines uniqueness.

## Separation of convex sets

A real functional $F$ defines parallel hyperplanes $F(x)=c$. In $\mathbb R^2$ they are ordinary lines. A useful separation theorem says: if $C$ is a nonempty closed convex subset of a real normed space and $x_0\notin C$, there are a continuous linear functional $F$ and a real number $a$ with

$$
F(x_0)<a\le F(c)\quad\text{for every }c\in C.
$$

The functional is nonzero because of the strict inequality. This is separation of a point from a closed convex set. Two arbitrary disjoint closed convex sets need not have a positive separating gap in an infinite-dimensional space. More general separation statements need their own hypotheses. [ETH functional analysis lecture summary, geometric Hahn–Banach theorem](https://metaphor.ethz.ch/x/2026/hs/401-3461-00L/) In a complex space, apply the real statement to the underlying real vector space or use real parts of complex functionals.

For the closed unit disk $C$ and $x_0=(2,0)$, choose $F(x,y)=-x$. On $C$, $F\ge-1$, while $F(x_0)=-2$. Thus $a=-3/2$ gives $-2<-3/2\le F(c)$. A gap appears because the point is outside the disk. Convexity is essential: the set $\{-1,1\}\subset\mathbb R$ cannot be separated in this way from $0$, since any linear functional has opposite values at its endpoints.

![[catalogue-ch12b-separation.svg|**Fig. C.ch12b.1** The line x = 1.5 separates the point (2, 0) from the closed unit disk.]]

In Fig. C.ch12b.1 all points of the disk lie on one side of the line. This is a statement about the whole set, not just sampled points. Such functionals turn vector constraints into scalar inequalities.

## Bidual space and reflexivity

The **bidual** is $X^{**}=(X^*)^*$. Every $x\in X$ defines a continuous functional on $X^*$ by evaluation:

$$
J(x)(f)=f(x).
$$

This defines the **canonical map** $J:X\to X^{**}$. It is linear and preserves norm. The upper bound $\|J(x)\|\le\|x\|$ follows from $|f(x)|\le\|f\|\|x\|$. For the lower bound, when $x\ne0$, define $f(tx)=t\|x\|$ on its one-dimensional span. This has norm $1$. Hahn–Banach extends it with the same norm, giving $J(x)(f)=\|x\|$.

A Banach space is **reflexive** when $J$ is onto. All finite-dimensional normed spaces and all Hilbert spaces are reflexive. Real $L^p[0,1]$ is reflexive for $1<p<\infty$. The spaces $L^1[0,1]$ and $L^\infty[0,1]$ are not reflexive. [MIT lecture 6](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/806234baa2feadee4b54cdf679382257_MIT18_102s21_lec6.pdf)

A concrete non-reflexive example is $c_0$, the space of scalar sequences tending to zero with the supremum norm. Its dual can be identified with $\ell^1$ through $f_a(x)=\sum a_nx_n$. Its bidual is then $\ell^\infty$, all bounded scalar sequences. Under these identifications, $J$ is ordinary inclusion. The constant sequence $(1,1,\ldots)$ belongs to the bidual but not to $c_0$. Thus a bidual element need not come from an original vector.

Reflexivity is about the canonical map, not merely equal cardinalities or a convenient matrix representation. It is useful because bounded sequences in a reflexive Banach space have weakly convergent subsequences, as introduced in [[Compactness weak convergence and Fredholm equations]].

## Practice

1. Extend $f(t,0)=3t$ to the plane with the $1$-norm without increasing its norm. Give two different extensions.
2. Separate $x_0=3$ from $C=[-1,1]$ by a scalar linear functional, and compute $J(3)(f)$ for your functional.

> [!example]- Worked answers
> 1. Both $F_1(x,y)=3x$ and $F_2(x,y)=3x+2y$ restrict to $f$. Their norms are $\max(3,0)=3$ and $\max(3,2)=3$, so both preserve the norm.
> 2. Let $f(x)=-x$. Then $f(3)=-3<-2\le f(c)$ for every $c\in[-1,1]$, since $f(c)\ge-1$. By definition $J(3)(f)=f(3)=-3$. Here $J(3)$ is a function whose input is the functional $f$.
