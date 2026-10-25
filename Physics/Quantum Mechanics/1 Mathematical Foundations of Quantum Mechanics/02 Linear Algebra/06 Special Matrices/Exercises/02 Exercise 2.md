---
title: "Trace, determinant, rank, and kernel of a diagonal matrix"
---

> [!TLDR]
> The diagonal entries determine the trace, determinant, rank, and kernel of this invertible matrix.

Chapter 6: Special Matrices · Exercise 2 · Basic level

Back to [[06 Special Matrices/11 Exercises|Chapter 6 exercises]].

## Question

For

$$
A=\begin{pmatrix}3&0\\0&-1\end{pmatrix},
$$

calculate $\operatorname{Tr}(A)$, $\det(A)$, $\operatorname{rk}(A)$, and $\ker(A)$.

## Worked solution

The trace is the sum of the diagonal entries:

$$
\operatorname{Tr}(A)=3+(-1)=2.
$$

For a diagonal matrix, the determinant is the product of the diagonal entries:

$$
\det(A)=3(-1)=-3.
$$

Both diagonal entries are nonzero. Thus both columns are independent and

$$
\operatorname{rk}(A)=2.
$$

Find the kernel by solving $Ax=0$. Write $x=(x_1,x_2)^T$. Then

$$
\begin{pmatrix}3x_1\\-x_2\end{pmatrix}
=\begin{pmatrix}0\\0\end{pmatrix}
\quad\Longrightarrow\quad x_1=x_2=0.
$$

Therefore the kernel contains only the zero vector. The nonzero determinant confirms that $A$ is invertible. The rank-nullity relation also checks the result: $2+0=2$.

## Answer

$$
\boxed{\operatorname{Tr}(A)=2,\quad\det(A)=-3,\quad
\operatorname{rk}(A)=2,\quad\ker(A)=\{(0,0)^T\}.}
$$
