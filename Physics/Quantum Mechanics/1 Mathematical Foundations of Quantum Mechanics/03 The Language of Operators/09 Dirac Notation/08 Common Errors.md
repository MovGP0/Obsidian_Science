---
title: "Common Errors"
---

> [!TLDR]
> Keep bras, kets, scalars, and operators distinct, and conjugate matrix elements correctly. Normalize projected states after measurement; projector idempotence is a separate property.

## Error 1 — Equate a bra with a ket

The expression $\langle\psi|\hat A=\hat A|\psi\rangle$ is false. The object $\langle\psi|\hat A$ is a functional, whereas $\hat A|\psi\rangle$ is a vector. They belong to different spaces. Confusing them causes sign and conjugation errors.

## Error 2 — Omit conjugation in the adjoint relation

In general,

$$
\langle\psi|\hat A|\phi\rangle
\ne\langle\phi|\hat A^\dagger|\psi\rangle.
$$

The correct relation is

$$
\langle\psi|\hat A|\phi\rangle
=\left(\langle\phi|\hat A^\dagger|\psi\rangle\right)^*.
$$

For a Hermitian operator,

$$
\langle\psi|\hat A|\phi\rangle
=\left(\langle\phi|\hat A|\psi\rangle\right)^*.
$$

Omitting the conjugation would wrongly require the relevant matrix elements to be real.

## Error 3 — Treat the outer product as a number

The outer product $|u\rangle\langle v|$ is an operator:

$$
(|u\rangle\langle v|)|\psi\rangle
=|u\rangle\langle v|\psi\rangle
=\langle v|\psi\rangle|u\rangle.
$$

It returns a ket: the vector $|u\rangle$ multiplied by a scalar. The inner product $\langle v|\psi\rangle\in\mathbb C$ is a number.

## Error 4 — Forget normalization after collapse

For a nondegenerate outcome $a_n$, the conventional eigenket $|a_n\rangle$ is already normalized. The direct projection, however, is

$$
\hat P_n|\psi\rangle
=\langle a_n|\psi\rangle|a_n\rangle.
$$

Its norm is $|\langle a_n|\psi\rangle|$, generally smaller than one. Divide by this norm to obtain the normalized conditional state, provided the outcome has nonzero probability.

## Error 5 — Confuse projector idempotence with state normalization

The identity $\hat P_n^2=\hat P_n$ is an operator property. It holds for every orthogonal projector. Geometrically, projecting twice has the same effect as projecting once. This is independent of whether $|\psi\rangle$ is normalized.

## Quantum mechanics — What the notation reveals

Dirac notation reveals the structure of quantum mechanics as well as abbreviating its formulas.

The inner product $\langle\phi|\psi\rangle$ is the probability amplitude for finding the state $|\phi\rangle$ in a projection measurement on a system prepared in $|\psi\rangle$, with both states normalized. Reversing the arguments conjugates the amplitude but leaves its squared magnitude unchanged:

$$
|\langle\psi|\phi\rangle|^2=|\langle\phi|\psi\rangle|^2.
$$

Thus the two corresponding projection probabilities are equal.

The **spectral decomposition**

$$
\hat A=\sum_n a_n|a_n\rangle\langle a_n|
$$

describes an observable through its eigenvalues, the possible measurement outcomes, and its projectors, which select the corresponding state components. For a nondegenerate outcome, an ideal measurement projects onto one eigenstate. A degenerate outcome uses the projector onto its full eigenspace.

The **completeness relation**

$$
\sum_n|a_n\rangle\langle a_n|=\hat I
$$

states that a complete eigenbasis has no missing directions: no nonzero state is orthogonal to every basis vector. Every state can be expanded in that basis.

Finally, Dirac notation works in the same way in $\mathbb C^2$ for spin and in $L^2(\mathbb R)$ for a particle. It expresses a common theory rather than separate collections of formulas for different systems. Continuous-basis expressions retain the generalized-state qualifications from Chapter 8.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $a_n$ | — | Measurement outcome | An eigenvalue with the unit of its observable. |
| $\langle\phi\vert\psi\rangle$ | $1$ | Projection amplitude | The overlap of two normalized states. |
