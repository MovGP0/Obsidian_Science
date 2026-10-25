---
title: "Density matrix and purity of an equal superposition"
---

> [!TLDR]
> The density matrix of a normalized state is a projector and has purity one.

Chapter 6: Special Matrices · Exercise 3 · Basic level

Back to [[06 Special Matrices/11 Exercises|Chapter 6 exercises]].

## Question

The density matrix of

$$
|\psi\rangle=\frac1{\sqrt2}\bigl(|\uparrow\rangle+|\downarrow\rangle\bigr)
$$

is $\rho=|\psi\rangle\langle\psi|$. Calculate $\rho$ as a $2\times2$ matrix. Verify $\operatorname{Tr}(\rho)=1$ and $\operatorname{Tr}(\rho^2)=1$.

## Worked solution

Use the ordered basis $\{|\uparrow\rangle,|\downarrow\rangle\}$. The state and its adjoint are

$$
|\psi\rangle=\frac1{\sqrt2}\begin{pmatrix}1\\1\end{pmatrix},
\qquad
\langle\psi|=\frac1{\sqrt2}\begin{pmatrix}1&1\end{pmatrix}.
$$

The outer product retains both populations and the coherence between the two basis states:

$$
\rho=|\psi\rangle\langle\psi|
=\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}.
$$

The trace gives the total probability:

$$
\operatorname{Tr}(\rho)=\frac12+\frac12=1.
$$

Calculate the square before taking its trace:

$$
\rho^2=\frac14\begin{pmatrix}2&2\\2&2\end{pmatrix}
=\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}
=\rho.
$$

Therefore $\operatorname{Tr}(\rho^2)=1$. This unit purity is the criterion for a pure density matrix. The nonzero off-diagonal entries distinguish this coherent superposition from an equal statistical mixture.

## Answer

$$
\boxed{\rho=\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix},
\quad\operatorname{Tr}(\rho)=1,
\quad\operatorname{Tr}(\rho^2)=1.}
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\operatorname{Tr}(\rho^2)$ | $1$ | Purity | The purity of the equal superposition. |
