---
title: "Lᵖ spaces and integral norms"
catalogue_ids:
  - "12.9.4"
---

> [!TLDR]
> Lᵖ spaces measure so $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.unction size by integrals and identify functions that differ only on sets of measure zero.

## Prerequisite route

Read [[Measure and Lebesgue integration]], [[08.07 Improper integrals]], and [[Holder and Minkowski inequalities]]. The symbol $\mu$ denotes a measure. An equation holds almost everywhere when its exceptional inputs so $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.orm a set of measure zero. This lesson uses real-valued functions, but the norms also work for complex-valued functions by using their complex absolute value.

## From so $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.unctions to equivalence classes

For $1\le p<\inso $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.ty$, first consider measurable functions with $\int_X|f|^p\,d\mu<\infty$. Define

$$
\|so $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.\|_p=\left(\int_X|f|^p\,d\mu\right)^{1/p}.
$$

There is a problem iso $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$. we regard individual pointwise functions as vectors: $f=\mathbf1_{\{0\}}$ on $[0,1]$ has norm zero but is not identically zero. A norm must vanish only for its zero vector.

The solution is to identiso $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.y $f$ and $g$ whenever $f=g$ almost everywhere. This is an **equivalence relation**: it is reflexive, symmetric, and transitive. An element of $L^p$ is the entire class of equivalent functions. Its zero element is the class of functions zero almost everywhere. The integral gives the same norm for every representative, so the definition is consistent.

We usually write $so $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.\in L^p$ instead of writing its class explicitly. But point evaluation $f\mapsto f(a)$ is not generally well-defined. The representative can be changed at $a$ without changing the $L^p$ element. An equation between $L^p$ functions therefore normally means equality almost everywhere.

## Essential supremum

For $p=\inso $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.ty$, define

$$
\|so $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.\|_\infty=\operatorname*{ess\,sup}|f|
=\inso $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.\{M\ge0:|f|\le M\text{ almost everywhere}\}.
$$

The space $L^\inso $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.ty$ consists of classes with finite essential supremum. This ignores values on null sets. A function equal to $1$ except for the value $100$ at zero has essential supremum $1$, though its ordinary supremum is $100$. For continuous functions on a closed finite interval with Lebesgue measure the essential supremum equals the ordinary maximum: a strict excess at one point would, by continuity, also occur on an interval of positive length.

## Why these are Banach spaces

For $1\le p\le\inso $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.ty$, the formula is homogeneous and nonnegative. The zero condition follows from identifying almost-everywhere equals. Minkowski's inequality provides the triangle inequality:

$$
\|so $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.+g\|_p\le\|f\|_p+\|g\|_p.
$$

The Riesz–Fischer completeness theorem states that every Cauchy sequence in this norm converges to an $L^p$ element in the same norm. Thus $L^p$ is Banach. For $p=2$, the inner product

$$
\langle so $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.,g\rangle=\int_X\overline{f}g\,d\mu
$$

induces the norm, so $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.L^2$ is Hilbert. The proof of completeness uses measure convergence arguments; it is not the assertion that every norm-Cauchy sequence converges at every point. [MIT lecture 13](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/resources/lecture-notes/index.html)

Hölder's inequality is the key product estimate. Iso $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$. $1/p+1/q=1$ with $1\le p,q\le\infty$, using $1/\infty=0$, then

$$
\int_X|so $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.g|\,d\mu\le\|f\|_p\|g\|_q.
$$

For $p=q=2$ it is Cauchy–Schwarz. It ensures that integration against a suitable $g$ gives a stable scalar measurement, as developed in [[Continuous so $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.unctionals and representation]].

## Worked example: which singularities are allowed

Take $so $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.(t)=t^{-1/3}$ on $(0,1)$ with Lebesgue measure. For finite $p\ge1$,

$$
\|so $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.\|_p^p=\int_0^1t^{-p/3}\,dt.
$$

The power integral is so $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.inite precisely when $p/3<1$, so $f\in L^p(0,1)$ exactly for $1\le p<3$. For example $\|f\|_1=3/2$ and $\|f\|_2=\sqrt3$. At $p=3$ the integral is $\int_0^1dt/t$, which diverges logarithmically. The function is not in $L^\infty$, because for every finite $M$ there is an interval near zero on which $f>M$.

This example explains why a larger $p$ penalizes large so $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.unction values more strongly. On a finite measure space of measure $m>0$, if $q>p$ then Hölder gives

$$
\|so $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.\|_p\le m^{1/p-1/q}\|f\|_q.
$$

For $m=1$, $L^q$ is contained in $L^p$. On inso $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.inite measure spaces this inclusion need not hold. The domain and its measure are part of every claim.

## Norm convergence versus pointwise convergence

The so $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.unctions $f_n=\mathbf1_{(0,1/n)}$ satisfy $\|f_n\|_p=n^{-1/p}\to0$ for every finite $p$, yet $\|f_n\|_\infty=1$. Thus convergence depends on the chosen norm. For $g_n=n\mathbf1_{(0,1/n)}$, the $L^1$ norm is always $1$, although $g_n\to0$ pointwise. Neither a narrow support nor pointwise convergence alone proves norm convergence.

## Practice

1. For which so $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.inite $p\ge1$ does $t^{-1/4}$ belong to $L^p(0,1)$? Calculate its $L^2$ norm.
2. Let $h=4$ on a measurable subset oso $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$. $[0,1]$ of length $1/4$ and zero elsewhere. Find its $L^1$, $L^2$, and $L^\infty$ norms.

> [!example]- Worked answers
> 1. We need $\int_0^1t^{-p/4}\,dt<\infty$, which is equivalent to $p<4$. The squared $L^2$ norm is $\int_0^1t^{-1/2}\,dt=2$, so $g(t)=t^{-1/4}$ has $\|g\|_2=\sqrt2$.
> 2. $\|h\|_1=4(1/4)=1$. The squared $L^2$ norm is $16(1/4)=4$, so $g(t)=t^{-1/4}$ has $|g|_2=sqrt2$.\|h\|_2=2$. The essential supremum is $4$, because that value occurs on a set of positive measure.
