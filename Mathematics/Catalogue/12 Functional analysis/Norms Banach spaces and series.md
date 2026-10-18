---
title: "Norms, Banach spaces, and series"
catalogue_ids:
  - "12.3"
  - "12.3.1"
  - "12.3.1.1"
  - "12.3.1.2"
  - "12.3.2"
  - "12.3.2.1"
  - "12.3.2.2"
---

> [!TLDR]
> A norm measures vector size; completeness makes a normed space Banach and ensures that absolutely summable vector series have limits.

## Norm axioms and the induced metric

Read [[Vector spaces affine sets and convexity]] and [[Complete metrics and contraction maps]]. A **norm** on a real or complex vector space $V$ assigns a real number $\|x\|$ to each vector and satisfies

$$
\|x\|\ge0,\quad\|x\|=0\iff x=0,\quad
\|ax\|=|a|\|x\|,\quad
\|x+y\|\le\|x\|+\|y\|.
$$

Absolute homogeneity controls scaling; the triangle inequality controls addition. The rule $d(x,y)=\|x-y\|$ is a metric. Symmetry follows from $\|-v\|=\|v\|$, and the metric triangle inequality follows by writing $x-z=(x-y)+(y-z)$. Thus every normed space has the open sets and convergence rules of a metric space.

On $\mathbb R^2$, three norms are

$$
\|(x,y)\|_1=|x|+|y|,\quad
\|(x,y)\|_2=\sqrt{x^2+y^2},\quad
\|(x,y)\|_\infty=\max(|x|,|y|).
$$

For $(3,4)$ they give $7,5,4$. Each measures size by a different rule. A norm is more than an arbitrary metric: its distance is translation invariant and scales uniformly, because $d(x+z,y+z)=d(x,y)$ and $d(ax,ay)=|a|d(x,y)$.

![[catalogue-ch12a-norm-balls.svg|**Fig. C.ch12a.1** The same coordinate plane has diamond, circular, or square unit balls under three different norms.]]

The boundaries in Fig. C.ch12a.1 satisfy $\|x\|=1$. The open unit balls use strict inequality and exclude the boundaries. The diamond, disk, and square are all convex; the triangle inequality proves convexity of every norm ball.

## Useful consequences

The triangle inequality also gives the reverse estimate

$$
\big|\|x\|-\|y\|\big|\le\|x-y\|.
$$

Apply $\|x\|\le\|x-y\|+\|y\|$ and then exchange $x,y$. Hence taking a norm is continuous. Addition is continuous because the norm of the difference of two sums is bounded by the sum of the differences. If $a_n\to a$ and $x_n\to x$, then $a_nx_n\to ax$, using boundedness of the convergent scalar sequence and

$$
\|a_nx_n-ax\|\le |a_n|\|x_n-x\|+|a_n-a|\|x\|.
$$

Two norms are **equivalent** if positive constants $c,C$ satisfy $c\|x\|_a\le\|x\|_b\le C\|x\|_a$ for every vector. They then have the same convergent and Cauchy sequences. All norms on a finite-dimensional real or complex vector space are equivalent, so these spaces are complete. The finite-dimensional hypothesis matters; function norms can control very different kinds of error.

## Banach-space examples

A **Banach space** is a normed vector space complete in its norm metric. Finite coordinate spaces with any norm are examples. Another is $C[0,1]$, the continuous functions on $[0,1]$, with $\|f\|_\infty=\max_{0\le t\le1}|f(t)|$. A Cauchy sequence in this norm converges uniformly to a continuous function, keeping the limit in the space.

For $1\le p<\infty$, the sequence space $\ell^p$ consists of sequences $x=(x_j)_{j\ge1}$ with $\sum_j|x_j|^p<\infty$, with norm $(\sum_j|x_j|^p)^{1/p}$. The space $\ell^\infty$ consists of bounded sequences with the supremum norm. These are Banach spaces. Their triangle inequality for $1<p<\infty$ is Minkowski's inequality; a full proof is beyond this first lesson.

The space $c_0$ of sequences tending to zero is a closed subspace of $\ell^\infty$, and hence is Banach in the supremum norm. In contrast, $c_{00}$, the sequences with only finitely many nonzero entries, is not complete. Truncations of $(2^{-j})$ are Cauchy in supremum norm but their limit has infinitely many nonzero entries. The general Banach-space framework and these examples are developed in [MIT Lecture 1](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/resources/lecture-1-basic-banach-space-theory/).

## Series in normed spaces

A vector series $\sum_{n=1}^\infty v_n$ converges when its partial sums converge in norm. It is **absolutely summable** when $\sum_n\|v_n\|<\infty$. In a Banach space, absolute summability implies convergence: for $m>n$,

$$
\left\|\sum_{j=n+1}^{m}v_j\right\|\le\sum_{j=n+1}^{m}\|v_j\|,
$$

so the partial sums are Cauchy, and completeness supplies their limit. The same estimate bounds the error after truncation by the remaining scalar norm sum. Completeness is essential: an absolutely summable series can have a limit outside an incomplete space.

## Worked example: a vector geometric series

In $\mathbb R^2$, let $v_n=(2^{-n},(-1)^n2^{-n})$ for $n\ge1$. In the $1$-norm, $\|v_n\|_1=2^{1-n}$, whose sum is $2$. Thus the vector series converges absolutely. Coordinatewise geometric sums give

$$
\sum_{n=1}^{\infty}v_n=\left(1,-\frac13\right).
$$

The $1$-norm truncation error after $N$ terms is at most $\sum_{n>N}2^{1-n}=2^{1-N}$. A scalar upper bound therefore controls the whole vector error without needing its exact direction.

## Practice

1. For $x=(1,-2,2)$, calculate its $1$-, $2$-, and infinity norms.
2. In $c_{00}$ with the $1$-norm, take $v_n=2^{-n}e_n$, where $e_n$ has a single $1$ in position $n$. Is the series absolutely summable? Does it converge inside $c_{00}$?

## Worked answers

1. The answers are $1+2+2=5$, $\sqrt{1+4+4}=3$, and $\max(1,2,2)=2$.
2. The norm sum is $\sum_n2^{-n}=1$, so it is absolutely summable. In the larger space $\ell^1$, its sum is $(1/2,1/4,1/8,\ldots)$. Any norm limit must have these coordinates, since coordinate error is at most the $1$-norm error. That sequence is not finitely supported, so there is no limit inside $c_{00}$.
