---
title: "The Completeness Relation"
---

> [!TLDR]
> The projectors onto all vectors of an orthonormal basis sum to the identity. Applying this resolution of the identity to a state gives its basis expansion.

A compact expression of basis completeness is the **resolution of the identity**:

$$
\boxed{\sum_n|\phi_n\rangle\langle\phi_n|=\hat I.}
$$

The sum of the projectors onto the basis vectors is the identity operator. Applied to an arbitrary vector $|f\rangle$, this gives

$$
|f\rangle
=\hat I|f\rangle
=\sum_n|\phi_n\rangle\langle\phi_n|f\rangle
=\sum_n c_n|\phi_n\rangle,
\qquad c_n=\langle\phi_n|f\rangle.
$$

Thus, the completeness relation recovers the basis expansion. In infinite dimensions, the partial sums converge to $|f\rangle$ in norm for each vector. This is strong operator convergence, not generally convergence in operator norm.

In the position representation, the same relation is written as

$$
\sum_n\phi_n(\mechanical{x})\phi_n^*(\mechanical{x}')
=\delta(\mechanical{x}-\mechanical{x}').
$$

Here $\delta$ is the Dirac delta distribution, introduced in Chapter 13. This identity can be used to test the completeness of a proposed set of functions.

> [!note]
> The position-space equality is a distributional kernel identity. It is not an ordinary pointwise equality of functions. Its meaning is obtained by integrating the kernel against suitable functions. See [[05 Continuous Bases]] for generalized position states.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$, $\mechanical{x}'$ | $\unit{m}$ | Position | The two position coordinates in the identity kernel. |
| $\phi_n$ | $\unit{m^{-1/2}}$ | Basis wavefunction | A normalized position-space basis function in one dimension. |
