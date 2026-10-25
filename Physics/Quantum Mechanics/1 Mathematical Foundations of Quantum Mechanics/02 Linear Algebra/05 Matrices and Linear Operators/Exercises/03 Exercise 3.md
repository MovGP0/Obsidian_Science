---
title: "Pauli products and cyclic traces"
---

> [!TLDR]
> The two Pauli products have the same trace, although their signs are opposite.

Chapter 5 · Exercise 3 · Basic level.

Back to [[05 Matrices and Linear Operators/08 Exercises#Exercise 3|Chapter 5 exercises]].

## Question

Calculate $\operatorname{Tr}(\sigma_x)$, $\operatorname{Tr}(\sigma_x\sigma_y)$, and $\operatorname{Tr}(\sigma_y\sigma_x)$. Verify $\operatorname{Tr}(AB)=\operatorname{Tr}(BA)$, but note that $\sigma_x\sigma_y\ne\sigma_y\sigma_x$.

## Worked solution

Use the standard Pauli matrices:

$$
\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad
\sigma_y=\begin{pmatrix}0&-\mathrm{i}\\\mathrm{i}&0\end{pmatrix},\qquad
\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
$$

The trace is the sum of diagonal entries, so $\operatorname{Tr}(\sigma_x)=0+0=0$. Multiply in each order:

$$
\sigma_x\sigma_y=\begin{pmatrix}\mathrm{i}&0\\0&-\mathrm{i}\end{pmatrix}=\mathrm{i}\sigma_z,
\qquad
\sigma_y\sigma_x=\begin{pmatrix}-\mathrm{i}&0\\0&\mathrm{i}\end{pmatrix}=-\mathrm{i}\sigma_z.
$$

Their traces are $\mathrm{i}-\mathrm{i}=0$ and $-\mathrm{i}+\mathrm{i}=0$. Thus equal traces do not imply equal matrices.

For any two square matrices of the same size, write the trace with entry indices to see why the equality is general:

$$
\operatorname{Tr}(AB)=\sum_j\sum_k A_{jk}B_{kj}
=\sum_k\sum_j B_{kj}A_{jk}=\operatorname{Tr}(BA).
$$

The individual entries are complex numbers, which commute. The finite sums can therefore be exchanged even when the matrices do not commute.

## Answer

All three requested traces are zero. The products are $\sigma_x\sigma_y=\mathrm{i}\sigma_z$ and $\sigma_y\sigma_x=-\mathrm{i}\sigma_z$, so they are different.
