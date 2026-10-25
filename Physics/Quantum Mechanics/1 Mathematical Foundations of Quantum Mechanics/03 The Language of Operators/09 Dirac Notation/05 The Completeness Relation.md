---
title: "The Completeness Relation"
---

> [!TLDR]
> Insert the resolution of the identity to expand an abstract expression in a basis. This gives moment formulas, changes of basis, and measurement amplitudes.

The **completeness relation** is

$$
\boxed{\sum_n|n\rangle\langle n|=\hat I.}
$$

It is a versatile tool in Dirac notation. Inserting it into an expression is equivalent to expanding in an orthonormal basis. It can be inserted wherever an abstract calculation must be made explicit.

## Example — Calculate ⟨Â²⟩ through completeness

Let $\hat A$ be Hermitian, with a complete orthonormal eigenbasis $\{|a_n\rangle\}$ and real eigenvalues $a_n$. To calculate $\langle\psi|\hat A^2|\psi\rangle$, insert completeness between the two operators:

$$
\begin{aligned}
\langle\psi|\hat A^2|\psi\rangle
&=\langle\psi|\hat A\hat I\hat A|\psi\rangle\\
&=\sum_n\langle\psi|\hat A|a_n\rangle
\langle a_n|\hat A|\psi\rangle.
\end{aligned}
$$

Use $\hat A|a_n\rangle=a_n|a_n\rangle$ and

$$
\langle a_n|\hat A|\psi\rangle
=\langle\hat A^\dagger a_n|\psi\rangle
=a_n\langle a_n|\psi\rangle.
$$

Then

$$
\begin{aligned}
\langle\hat A^2\rangle
&=\sum_n a_n\langle\psi|a_n\rangle\,
a_n\langle a_n|\psi\rangle\\
&=\sum_n a_n^2|\langle a_n|\psi\rangle|^2
=\sum_n a_n^2P_n.
\end{aligned}
$$

The expectation of the square, $\langle\hat A^2\rangle$, is different from the square of the expectation, $\langle\hat A\rangle^2$. It is the weighted mean of $a_n^2$, as in the probability-theory formula

$$
\langle X^2\rangle=\sum_n x_n^2P(x_n).
$$

## Example — Change basis through completeness

Let $\{|a_n\rangle\}$ be an eigenbasis of $\hat A$, and let $\{|b_m\rangle\}$ be an eigenbasis of $\hat B$. To express $|b_m\rangle$ in the first basis, insert its completeness relation:

$$
|b_m\rangle
=\hat I|b_m\rangle
=\sum_n|a_n\rangle\langle a_n|b_m\rangle.
$$

The coefficients $\langle a_n|b_m\rangle$ form the **change-of-basis matrix**. For a nondegenerate outcome $a_n$, the quantity $|\langle a_n|b_m\rangle|^2$ is the probability of obtaining $a_n$ when $\hat A$ is measured in the state $|b_m\rangle$, which has a definite value $b_m$ of $\hat B$.

> [!note]
> These sums assume complete discrete orthonormal bases. For a degenerate measurement outcome, sum over its full eigenspace. Continuous spectral parts require integrals. For an unbounded $\hat A$, the second-moment formula also requires the appropriate domain and finite-moment conditions.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $a_n$, $b_m$ | — | Measurement outcome | Eigenvalues of the respective observables; their units depend on those observables. |
| $P_n$ | $1$ | Measurement probability | The probability weight of the eigenstate labelled $n$. |
| $\langle\hat A^2\rangle$ | — | Second moment | The mean squared outcome, with the squared unit of the observable. |
| $\langle\hat A\rangle$ | — | Expectation value | The mean outcome, with the unit of the observable. |
