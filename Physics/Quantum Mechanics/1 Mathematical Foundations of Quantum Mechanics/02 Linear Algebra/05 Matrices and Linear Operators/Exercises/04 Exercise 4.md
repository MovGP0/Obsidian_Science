---
title: "Squares of the Pauli matrices"
---

> [!TLDR]
> Each Pauli matrix has the identity matrix as its square.

Chapter 5 · Exercise 4 · Basic level.

Back to [[05 Matrices and Linear Operators/08 Exercises#Exercise 4|Chapter 5 exercises]].

## Question

Verify $\sigma_x^2=\sigma_y^2=\sigma_z^2=I$.

## Worked solution

Calculate each square directly. The off-diagonal Pauli matrices interchange the two components, so a second application restores their positions:

$$
\sigma_x^2
=\begin{pmatrix}0&1\\1&0\end{pmatrix}\begin{pmatrix}0&1\\1&0\end{pmatrix}
=\begin{pmatrix}0\cdot0+1\cdot1&0\cdot1+1\cdot0\\1\cdot0+0\cdot1&1\cdot1+0\cdot0\end{pmatrix}
=I.
$$

For $\sigma_y$, the two imaginary factors also cancel:

$$
\sigma_y^2
=\begin{pmatrix}0&-\mathrm{i}\\\mathrm{i}&0\end{pmatrix}\begin{pmatrix}0&-\mathrm{i}\\\mathrm{i}&0\end{pmatrix}
=\begin{pmatrix}(-\mathrm{i})\mathrm{i}&0\\0&\mathrm{i}(-\mathrm{i})\end{pmatrix}
=\begin{pmatrix}1&0\\0&1\end{pmatrix}=I.
$$

For the diagonal matrix, square the diagonal entries:

$$
\sigma_z^2=\begin{pmatrix}1&0\\0&-1\end{pmatrix}^2
=\begin{pmatrix}1^2&0\\0&(-1)^2\end{pmatrix}=I.
$$

## Answer

$\boxed{\sigma_x^2=\sigma_y^2=\sigma_z^2=I}$. Each Pauli matrix is its own inverse.
