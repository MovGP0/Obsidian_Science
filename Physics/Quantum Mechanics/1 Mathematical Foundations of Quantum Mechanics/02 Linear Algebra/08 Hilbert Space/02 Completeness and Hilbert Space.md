---
title: "Completeness and Hilbert Space"
---

> [!TLDR]
> A Hilbert space is an inner-product space that is complete in its induced norm. Every Cauchy sequence therefore converges to an element of that same space.

> [!definition] Definition 8.2 | Hilbert space
> An inner-product space $(\mathcal H,\langle\cdot,\cdot\rangle)$ is a **Hilbert space** if it is complete: every Cauchy sequence in $\mathcal H$ converges to an element of $\mathcal H$.

A **Cauchy sequence** $\{f_n\}$ satisfies

$$
\lVert f_n-f_m\rVert\longrightarrow0
\qquad\text{as }n,m\longrightarrow\infty.
$$

The terms become arbitrarily close to each other. Completeness states that their limit lies within the space.

Why is this important? Without completeness, a Cauchy sequence of partial sums could approach an object outside the chosen space. Calculations that require this limit would then leave that space. A complete space has no such missing limits.

An incomplete inner-product space shows what this condition prevents. Let $V$ be the square-summable sequences with only finitely many nonzero entries, using the usual sum inner product. The vectors $f_N=(1,1/2,\ldots,1/N,0,\ldots)$ lie in $V$ and are Cauchy because their squared differences are tails of $\sum_n1/n^2$. Their limit has infinitely many nonzero entries, so it is not in $V$. The completion supplies that missing vector.

In state expansions, the same tail argument is the proof strategy: first show the partial sums are Cauchy, then invoke completeness. Do not invoke completeness before establishing that hypothesis. A normalized coefficient list can describe an actual limiting state by this route, rather than only a sequence of finite approximations.

The space $L^2(\mathbb R)$ is complete. This is a nontrivial theorem from the theory of Lebesgue integration. We use it throughout these notes without proving it.
