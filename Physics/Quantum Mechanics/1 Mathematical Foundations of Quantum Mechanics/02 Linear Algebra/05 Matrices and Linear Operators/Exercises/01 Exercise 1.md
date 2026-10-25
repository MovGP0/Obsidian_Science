---
title: "Matrix products and the adjoint of a product"
---

> [!TLDR]
> Matrix multiplication depends on the order of the factors. The adjoint reverses that order.

Chapter 5 · Exercise 1 · Basic level.

Back to [[05 Matrices and Linear Operators/08 Exercises#Exercise 1|Chapter 5 exercises]].

## Question

Calculate $AB$, $BA$, $A^\dagger$, $B^\dagger$, $(AB)^\dagger$, and $B^\dagger A^\dagger$ for

$$
A=\begin{pmatrix}1&\mathrm{i}\\0&2\end{pmatrix},
\qquad B=\begin{pmatrix}2&0\\1&-\mathrm{i}\end{pmatrix}.
$$

Verify $(AB)^\dagger=B^\dagger A^\dagger$.

## Worked solution

Multiply a row of the left matrix by a column of the right matrix. Keep the factor order fixed because matrix multiplication need not commute:

$$
AB=\begin{pmatrix}
1\cdot2+\mathrm{i}\cdot1&1\cdot0+\mathrm{i}(-\mathrm{i})\\
0\cdot2+2\cdot1&0\cdot0+2(-\mathrm{i})
\end{pmatrix}
=\begin{pmatrix}2+\mathrm{i}&1\\2&-2\mathrm{i}\end{pmatrix},
$$

$$
BA=\begin{pmatrix}
2\cdot1+0\cdot0&2\mathrm{i}+0\cdot2\\
1\cdot1+(-\mathrm{i})\cdot0&\mathrm{i}+(-\mathrm{i})\cdot2
\end{pmatrix}
=\begin{pmatrix}2&2\mathrm{i}\\1&-\mathrm{i}\end{pmatrix}.
$$

Thus $AB\ne BA$. To form an adjoint, transpose the matrix and conjugate each entry:

$$
A^\dagger=\begin{pmatrix}1&0\\-\mathrm{i}&2\end{pmatrix},
\qquad B^\dagger=\begin{pmatrix}2&1\\0&\mathrm{i}\end{pmatrix}.
$$

Apply the same operation to the calculated product:

$$
(AB)^\dagger=\begin{pmatrix}2-\mathrm{i}&2\\1&2\mathrm{i}\end{pmatrix}.
$$

Now calculate the product in the reversed order to check the identity directly:

$$
B^\dagger A^\dagger
=\begin{pmatrix}2&1\\0&\mathrm{i}\end{pmatrix}
\begin{pmatrix}1&0\\-\mathrm{i}&2\end{pmatrix}
=\begin{pmatrix}2-\mathrm{i}&2\\\mathrm{i}(-\mathrm{i})&2\mathrm{i}\end{pmatrix}
=\begin{pmatrix}2-\mathrm{i}&2\\1&2\mathrm{i}\end{pmatrix}.
$$

## Answer

$AB$, $BA$, $A^\dagger$, and $B^\dagger$ are the matrices above, and

$$
\boxed{(AB)^\dagger=B^\dagger A^\dagger
=\begin{pmatrix}2-\mathrm{i}&2\\1&2\mathrm{i}\end{pmatrix}}.
$$
