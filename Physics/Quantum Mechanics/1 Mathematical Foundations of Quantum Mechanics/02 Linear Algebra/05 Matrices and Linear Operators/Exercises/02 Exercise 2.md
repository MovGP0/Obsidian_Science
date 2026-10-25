---
title: "Hermitian and unitary matrix tests"
---

> [!TLDR]
> Use the conjugate transpose to test Hermiticity and unitarity. A real phase matrix is always unitary but is Hermitian only at special phases.

Chapter 5 · Exercise 2 · Basic level.

Back to [[05 Matrices and Linear Operators/08 Exercises#Exercise 2|Chapter 5 exercises]].

## Question

Which of the following matrices are Hermitian? Which are unitary?

**(a)**

$$
\begin{pmatrix}2&1+\mathrm{i}\\1-\mathrm{i}&3\end{pmatrix}.
$$

**(b)**

$$
\begin{pmatrix}0&-\mathrm{i}\\\mathrm{i}&0\end{pmatrix}.
$$

**(c)**

$$
\frac1{\sqrt2}\begin{pmatrix}1&\mathrm{i}\\\mathrm{i}&1\end{pmatrix}.
$$

**(d)**

$$
\begin{pmatrix}\mathrm{e}^{\mathrm{i}\signal{\theta}}&0\\0&\mathrm{e}^{-\mathrm{i}\signal{\theta}}\end{pmatrix}.
$$

> [!note]
> Use real $\signal{\theta}$ for the phase-matrix questions in this chapter.

## Worked solution

A matrix $M$ is Hermitian if $M^\dagger=M$. It is unitary if $M^\dagger M=I$. These are separate tests.

### (a) Conjugate off-diagonal entries

Let $M_a=\begin{pmatrix}2&1+\mathrm{i}\\1-\mathrm{i}&3\end{pmatrix}$. Its diagonal entries are real and its off-diagonal entries are complex conjugates. Thus $M_a^\dagger=M_a$. Its square tests unitarity:

$$
M_a^\dagger M_a=M_a^2
=\begin{pmatrix}
4+(1+\mathrm{i})(1-\mathrm{i})&2(1+\mathrm{i})+3(1+\mathrm{i})\\
2(1-\mathrm{i})+3(1-\mathrm{i})&(1-\mathrm{i})(1+\mathrm{i})+9
\end{pmatrix}
=\begin{pmatrix}6&5+5\mathrm{i}\\5-5\mathrm{i}&11\end{pmatrix}\ne I.
$$

The matrix is Hermitian but is not unitary.

### (b) The Pauli y matrix

For the matrix in the current question,

$$
M_b=\begin{pmatrix}0&-\mathrm{i}\\\mathrm{i}&0\end{pmatrix},
\qquad M_b^\dagger=M_b,
\qquad M_b^\dagger M_b=M_b^2
=\begin{pmatrix}(-\mathrm{i})\mathrm{i}&0\\0&\mathrm{i}(-\mathrm{i})\end{pmatrix}=I.
$$

Thus this matrix is both Hermitian and unitary.

> [!note] Source discrepancy — Matrix in part (b)
> The supplied original exercise screenshot prints $\begin{pmatrix}0&-\mathrm{i}\\1&0\end{pmatrix}$, with lower-left entry $1$. The supplied solution and the current exercise use $\sigma_y=\begin{pmatrix}0&-\mathrm{i}\\\mathrm{i}&0\end{pmatrix}$ instead. The result above follows the current exercise.
>
> For the original matrix $C=\begin{pmatrix}0&-\mathrm{i}\\1&0\end{pmatrix}$, $C^\dagger=\begin{pmatrix}0&1\\\mathrm{i}&0\end{pmatrix}\ne C$, but $C^\dagger C=I$. That version is unitary and is not Hermitian.

### (c) A symmetric complex matrix

Conjugation changes the signs of both imaginary entries:

$$
M_c=\frac1{\sqrt2}\begin{pmatrix}1&\mathrm{i}\\\mathrm{i}&1\end{pmatrix},
\qquad M_c^\dagger=\frac1{\sqrt2}\begin{pmatrix}1&-\mathrm{i}\\-\mathrm{i}&1\end{pmatrix}\ne M_c.
$$

The product is

$$
M_c^\dagger M_c
=\frac12\begin{pmatrix}
1+(-\mathrm{i})\mathrm{i}&\mathrm{i}-\mathrm{i}\\
-\mathrm{i}+\mathrm{i}&(-\mathrm{i})\mathrm{i}+1
\end{pmatrix}
=I.
$$

The matrix is unitary and is not Hermitian. Symmetry without complex conjugation does not imply Hermiticity.

### (d) A diagonal phase matrix

For real $\signal{\theta}$, conjugation reverses the phase:

$$
M_d^\dagger=\begin{pmatrix}\mathrm{e}^{-\mathrm{i}\signal{\theta}}&0\\0&\mathrm{e}^{\mathrm{i}\signal{\theta}}\end{pmatrix},
\qquad M_d^\dagger M_d
=\begin{pmatrix}1&0\\0&1\end{pmatrix}=I.
$$

It is Hermitian exactly when its diagonal entries equal their complex conjugates:

$$
\mathrm{e}^{\mathrm{i}\signal{\theta}}=\mathrm{e}^{-\mathrm{i}\signal{\theta}}
\iff \mathrm{e}^{2\mathrm{i}\signal{\theta}}=1
\iff \signal{\theta}\in\pi\mathbb Z.
$$

> [!note] Source correction — Unitary condition
> Part (d) of the supplied key prints $UU=I$. The unitary condition is $U^\dagger U=I$. For this phase matrix, $U^2=I$ holds only when $\signal{\theta}\in\pi\mathbb Z$.

## Answer

(a) Hermitian only. (b) Both Hermitian and unitary for the current matrix $\sigma_y$. (c) Unitary only. (d) Unitary for all real $\signal{\theta}$, and Hermitian exactly when $\signal{\theta}\in\pi\mathbb Z$. The original screenshot version of (b) is unitary only.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\theta}$ | $\unit{rad}$ | Phase parameter | The real phase in the diagonal matrix. |
