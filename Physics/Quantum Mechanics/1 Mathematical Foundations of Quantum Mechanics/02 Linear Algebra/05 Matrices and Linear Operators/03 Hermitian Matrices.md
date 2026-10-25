---
title: "Hermitian Matrices"
---

> [!TLDR]
> A Hermitian matrix equals its adjoint. Its diagonal entries and eigenvalues are real, and an orthonormal eigenbasis diagonalizes it.

> [!definition] Definition 5.2 — Hermitian matrix
> A matrix $A$ is **Hermitian**, or **self-adjoint**, if $A^\dagger=A$. Equivalently, $A_{ij}^*=A_{ji}$.

Immediate consequences:

- The diagonal entries are real: $A_{ii}^*=A_{ii}\Longrightarrow A_{ii}\in\mathbb{R}$.
- All eigenvalues of $A$ are real. We will prove this in Chapter 7.
- $A$ is unitarily diagonalizable.

## Example — The Pauli matrices

The three Pauli matrices are

$$
\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},
\qquad\sigma_y=\begin{pmatrix}0&-\mathrm{i}\\\mathrm{i}&0\end{pmatrix},
\qquad\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
$$

### Hermiticity

$$
\sigma_x^\dagger=(\sigma_x^*)^T
=\begin{pmatrix}0&1\\1&0\end{pmatrix}
=\sigma_x.\quad\checkmark
$$

$$
\sigma_y^\dagger
=\begin{pmatrix}0&\mathrm{i}\\-\mathrm{i}&0\end{pmatrix}^{T}
=\begin{pmatrix}0&-\mathrm{i}\\\mathrm{i}&0\end{pmatrix}
=\sigma_y.\quad\checkmark
$$

### Main properties

$$
\sigma_i^2=I,
\qquad\sigma_x\sigma_y=\mathrm{i}\sigma_z,
\qquad\sigma_y\sigma_z=\mathrm{i}\sigma_x,
\qquad\sigma_z\sigma_x=\mathrm{i}\sigma_y.
$$

Verify $\sigma_x\sigma_y=\mathrm{i}\sigma_z$:

$$
\begin{aligned}
\begin{pmatrix}0&1\\1&0\end{pmatrix}
\begin{pmatrix}0&-\mathrm{i}\\\mathrm{i}&0\end{pmatrix}
&=\begin{pmatrix}\mathrm{i}&0\\0&-\mathrm{i}\end{pmatrix}\\
&=\mathrm{i}\begin{pmatrix}1&0\\0&-1\end{pmatrix}
=\mathrm{i}\sigma_z.\quad\checkmark
\end{aligned}
$$

These matrices represent the spin components of a spin-$\tfrac12$ particle:

$$
\hat S_i=\frac{\energy{\hbar}}2\sigma_i.
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| — | $1$ | Spin quantum number | The particle has spin quantum number one half. |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant that converts a Pauli matrix into a spin-component operator. |
