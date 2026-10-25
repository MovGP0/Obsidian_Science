---
title: "Trace and determinant of the Pauli matrices"
---

> [!TLDR]
> Each Pauli matrix has trace zero and determinant −1, in agreement with its eigenvalues +1 and −1.

Chapter 7 — Eigenvalues and Eigenvectors · Exercise 3 · Basic level.

[[07 Eigenvalues and Eigenvectors/07 Exercises#Exercise 3|Back to the chapter exercise index]].

## Question

Calculate $\operatorname{Tr}(\sigma_i)$ and $\det(\sigma_i)$ for $i=x,y,z$. Compare these with the sum and product of the eigenvalues.

## Worked solution

Use the standard matrices

$$
\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},
\quad
\sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},
\quad
\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
$$

The trace is the sum of the diagonal entries:

$$
\operatorname{Tr}(\sigma_x)=0+0=0,
\quad
\operatorname{Tr}(\sigma_y)=0+0=0,
\quad
\operatorname{Tr}(\sigma_z)=1-1=0.
$$

For a $2\times2$ matrix, the determinant is $ad-bc$. Therefore,

$$
\begin{aligned}
\det(\sigma_x)&=(0)(0)-(1)(1)=-1,\\
\det(\sigma_y)&=(0)(0)-(-i)(i)=-1,\\
\det(\sigma_z)&=(1)(-1)-(0)(0)=-1.
\end{aligned}
$$

In the second line, $(-i)(i)=-i^2=1$, which fixes the sign.

For each matrix, the characteristic polynomial is $\lambda^2-1$. Its roots are $+1$ and $-1$. Thus the eigenvalue sum and product are

$$
\lambda_++\lambda_-=1-1=0,
\qquad
\lambda_+\lambda_-=(1)(-1)=-1.
$$

These agree with the trace and determinant. This agreement also follows from diagonalization: trace and determinant do not change when the basis changes.

## Answer

For $i=x,y,z$, $\operatorname{Tr}(\sigma_i)=0$ and $\det(\sigma_i)=-1$. These are the sum and product of the two eigenvalues $+1$ and $-1$.
