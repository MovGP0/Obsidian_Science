---
title: "Purity and Pauli-z expectation of a mixed state"
---

> [!TLDR]
> Equal populations give a maximally mixed state with purity one half and zero Pauli-z expectation.

Chapter 6: Special Matrices · Exercise 4 · Basic level

Back to [[06 Special Matrices/11 Exercises|Chapter 6 exercises]].

## Question

For the mixed state

$$
\rho=\frac12|\uparrow\rangle\langle\uparrow|
+\frac12|\downarrow\rangle\langle\downarrow|,
$$

calculate $\rho$ as a matrix, $\operatorname{Tr}(\rho^2)$, and $\langle\sigma_z\rangle=\operatorname{Tr}(\rho\sigma_z)$.

## Worked solution

Use the ordered basis $\{|\uparrow\rangle,|\downarrow\rangle\}$. Its two basis-state projectors are

$$
|\uparrow\rangle\langle\uparrow|
=\begin{pmatrix}1&0\\0&0\end{pmatrix},
\qquad
|\downarrow\rangle\langle\downarrow|
=\begin{pmatrix}0&0\\0&1\end{pmatrix}.
$$

Add them with the stated probabilities. A statistical mixture adds projectors, so it has no cross terms between the states:

$$
\rho=\frac12\begin{pmatrix}1&0\\0&1\end{pmatrix}
=\frac12 I.
$$

Square this matrix and sum the diagonal entries:

$$
\rho^2=\frac14 I,
\qquad
\operatorname{Tr}(\rho^2)=\frac14+\frac14=\frac12.
$$

This is the minimum purity of a two-level density matrix. For the Pauli-z operator,

$$
\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix},
\qquad
\rho\sigma_z=\begin{pmatrix}1/2&0\\0&-1/2\end{pmatrix}.
$$

Hence

$$
\langle\sigma_z\rangle
=\operatorname{Tr}(\rho\sigma_z)=\frac12-\frac12=0.
$$

The expectation value is zero because the two measurement outcomes $+1$ and $-1$ have equal probabilities.

## Answer

$$
\boxed{\rho=\frac12 I,\qquad
\operatorname{Tr}(\rho^2)=\frac12,\qquad
\langle\sigma_z\rangle=0.}
$$

The state is maximally mixed.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\operatorname{Tr}(\rho^2)$ | $1$ | Purity | The purity of the equal statistical mixture. |
| $\langle\sigma_z\rangle$ | $1$ | Pauli-z expectation value | The mean of the dimensionless outcomes plus and minus one. |
