---
title: "Hilbert Space"
---

> [!TLDR]
> A Hilbert space extends the geometry of finite-dimensional vector spaces to spaces of functions. Completeness ensures that every Cauchy sequence has a limit within the space.

The previous chapters used finite-dimensional spaces: vectors in $\mathbb C^n$, $n\times n$ matrices, and eigenvalues of systems with a few levels. These tools are sufficient for systems such as spin one half. A free particle in continuous space requires a different setting.

A wavefunction $\signal{\psi}(\mechanical{x})$ on $\mathbb R$ describes infinitely many degrees of freedom. It is an object in an infinite-dimensional space.

The following table compares $\mathbb C^n$ with $L^2(\mathbb R)$. Their vector-space and inner-product structures correspond. The operations are realized differently.

| Structure | Finite-dimensional space $\mathbb C^n$ | Infinite-dimensional space $L^2(\mathbb R)$ |
| --- | --- | --- |
| Vector | $v=(v_1,\ldots,v_n)\in\mathbb C^n$ | A square-integrable function $f:\mathbb R\to\mathbb C$, understood up to equality almost everywhere. |
| Addition | $(u+v)_i=u_i+v_i$ | $(f+g)(x)=f(x)+g(x)$ |
| Inner product | $\sum_{i=1}^n u_i^*v_i$ | $\int_{-\infty}^{+\infty}f^*(x)g(x)\,dx$ |
| Squared norm | $\lVert v\rVert^2=\sum_i\lvert v_i\rvert^2$ | $\lVert f\rVert^2=\int_{-\infty}^{+\infty}\lvert f(x)\rvert^2\,dx$ |
| Orthonormal basis | A finite basis $\{e_i\}$, with $\langle e_i,e_j\rangle=\delta_{ij}$ | A countable basis $\{\phi_n\}$, with $\langle\phi_m,\phi_n\rangle=\delta_{mn}$ |
| Components | $v_i=\langle e_i,v\rangle$ | $c_n=\langle\phi_n,f\rangle$ |
| Expansion | $v=\sum_{i=1}^n v_i e_i$ | $f=\sum_{n=0}^{\infty}c_n\phi_n$, with convergence in norm. |

The move from finite to infinite dimensions introduces a complication: an infinite series need not converge. Every finite sum in $\mathbb C^n$ is well defined. In $L^2(\mathbb R)$, one must check whether $\sum_n c_n\phi_n$ converges and specify the meaning of convergence.

**Completeness** ensures that a Cauchy sequence of partial sums converges to an element of the space.

> [!note]
> Completeness does not make every infinite series converge. The partial sums must be Cauchy. For an orthonormal system, square-summable coefficients, $\sum_n|c_n|^2<\infty$, give this condition. Pointwise convergence is a separate question.

## Chapter sections

- [[01 The Space L2(R)|The space L²(ℝ)]]
- [[02 Completeness and Hilbert Space|Completeness and Hilbert space]]
- [[03 Orthonormal Bases|Orthonormal bases]]
- [[04 The Completeness Relation|The completeness relation]]
- [[05 Continuous Bases|Continuous bases]]
- [[06 Finite-Dimensional Systems|Finite-dimensional systems]]
- [[08 Hilbert Space/07 Common Errors|Common errors and quantum applications]]
- [[08 Hilbert Space/08 Chapter Summary|Chapter summary]]
- [[08 Hilbert Space/09 Exercises|Exercises]]

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The particle coordinate in one dimension. |
| $\signal{\psi}(\mechanical{x})$ | $\unit{m^{-1/2}}$ | Wavefunction | The position probability amplitude for a normalized one-dimensional state. |
