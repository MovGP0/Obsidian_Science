---
title: "Common Errors"
---

> [!TLDR]
> Normalize eigenvectors after finding their directions, and keep eigenvalues separate from eigenstates. Degeneracy permits an orthonormal eigenbasis for Hermitian matrices, while measurement probabilities follow from projection onto that basis.

## Error 1 — Normalize before finding the direction

First find the direction of the eigenvector without normalization. Then normalize it. Normalizing an incorrect vector leaves it incorrect, even though its norm is now $1$.

## Error 2 — A repeated eigenvalue prevents diagonalization

This is false for Hermitian operators. For a Hermitian matrix, the dimension of each eigenspace equals the algebraic multiplicity of its eigenvalue. There are enough independent eigenvectors to form a basis. Matrices that cannot be diagonalized exist, but they are not Hermitian.

## Error 3 — The phase of an eigenvector is fixed

If $|a\rangle$ is an eigenvector of $\hat A$ with eigenvalue $a$, then $e^{i\signal{\phi}}|a\rangle$ is also an eigenvector for every $\signal{\phi}\in\mathbb R$. The phase choice is a convention.

In quantum mechanics, relative phases between components in an eigenbasis can affect physical predictions. The global phase of the complete state has no physical effect.

## Error 4 — Mix eigenvalues and eigenvectors

The source gives the mixed expression $\hat A|\lambda\rangle=|a\rangle\langle a|\lambda\rangle$ as an example of confusing notation. Keep the eigenvalue and the ket separate:

$$
\hat A|a_n\rangle=a_n|a_n\rangle,
$$

where $a_n\in\mathbb R$ is the eigenvalue and $|a_n\rangle$ is the ket.

> [!note]
> The mixed expression is not a general eigenvalue equation. It would require additional definitions, such as a particular projector operator. An eigenvalue is a scalar; an eigenvector is a nonzero vector.

## Quantum mechanics — The measurement principle

The spectral theorem is the mathematical basis of the quantum **measurement principle**.

Let $\hat A$ be an observable with eigenvalues $a_n$ and an orthonormal eigenbasis $\{|a_n\rangle\}$. Any normalized state can be written as

$$
|\psi\rangle=\sum_n c_n|a_n\rangle,
\qquad c_n=\langle a_n|\psi\rangle.
$$

For a nondegenerate discrete spectrum, the postulates state:

1. A measurement of $\hat A$ can give only one of its eigenvalues $a_n$.
2. The probability of obtaining $a_n$ is $P(a_n)=|c_n|^2$.
3. After an ideal projective measurement with outcome $a_n$, the state collapses to $|a_n\rangle$, up to a global phase.

The probabilities sum to one:

$$
\begin{aligned}
\sum_n P(a_n)
&=\sum_n|c_n|^2\\
&=\sum_n\langle\psi|a_n\rangle\langle a_n|\psi\rangle\\
&=\left\langle\psi\left|\sum_n|a_n\rangle\langle a_n|\right|\psi\right\rangle\\
&=\langle\psi|\psi\rangle=1.
\end{aligned}
$$

This calculation uses **completeness**:

$$
\sum_n|a_n\rangle\langle a_n|=\hat I.
$$

The sum of the orthogonal projectors is the identity. This is a consequence of the spectral theorem.

The expectation value is

$$
\langle\hat A\rangle
=\langle\psi|\hat A|\psi\rangle
=\sum_n a_n|c_n|^2
=\sum_n a_nP(a_n).
$$

It is the weighted mean of the eigenvalues, with their measurement probabilities as weights, as in classical probability theory.

> [!note]
> The source states the measurement rules for individual eigenvectors without specifying nondegeneracy. If an outcome $a$ is degenerate, sum the probabilities over its full eigenspace: $P(a)=\langle\psi|\hat P_a|\psi\rangle$. For an ideal measurement that resolves only $a$, the conditional state is $\hat P_a|\psi\rangle/\sqrt{P(a)}$ when $P(a)>0$. It need not be one chosen basis vector. These formulas concern a discrete spectrum; continuous spectra require a more general spectral measure.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\phi}$ | $1$ | Phase angle | The arbitrary global phase applied to an eigenvector. |
| $a$, $a_n$ | — | Measurement outcome | An eigenvalue of the observable; its unit depends on that observable. |
| $c_n$ | $1$ | Probability amplitude | The coefficient of an eigenstate in a normalized state. |
| $P(a)$, $P(a_n)$ | $1$ | Measurement probability | The probability of an outcome in the specified state. |
| $\langle\hat A\rangle$ | — | Expectation value | The mean measurement result; it has the unit of the observable. |
