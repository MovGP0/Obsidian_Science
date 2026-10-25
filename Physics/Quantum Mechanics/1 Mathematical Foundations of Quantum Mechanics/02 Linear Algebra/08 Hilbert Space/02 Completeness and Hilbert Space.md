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

The space $L^2(\mathbb R)$ is complete. This is a nontrivial theorem from the theory of Lebesgue integration. We use it throughout these notes without proving it.
