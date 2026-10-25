---
title: "Full SVD of a rectangular diagonal matrix"
---

> [!TLDR]
> The singular values are three and two, and identity matrices give the left and right singular-vector bases.

Chapter 6: Special Matrices · Exercise 5 · Intermediate level

Back to [[06 Special Matrices/11 Exercises|Chapter 6 exercises]].

## Question

Find the SVD of

$$
A=\begin{pmatrix}3&0\\0&2\\0&0\end{pmatrix}.
$$

Its upper part is already diagonal, so the singular values are immediate. But write $U$, $\Sigma$, and $V^\dagger$ explicitly.

## Worked solution

For the full singular value decomposition $A=U\Sigma V^\dagger$, the dimensions are $3\times3$, $3\times2$, and $2\times2$, respectively. The squared singular values are the eigenvalues of $A^\dagger A$:

$$
A^\dagger A
=\begin{pmatrix}3&0&0\\0&2&0\end{pmatrix}
\begin{pmatrix}3&0\\0&2\\0&0\end{pmatrix}
=\begin{pmatrix}9&0\\0&4\end{pmatrix}.
$$

The normalized eigenvectors are $v_1=(1,0)^T$ and $v_2=(0,1)^T$. Thus the singular values, in descending order, are $s_1=3$ and $s_2=2$, and $V=I_2$.

For each nonzero singular value, calculate the left singular vector from $u_k=Av_k/s_k$:

$$
u_1=\frac13\begin{pmatrix}3\\0\\0\end{pmatrix}
=\begin{pmatrix}1\\0\\0\end{pmatrix},
\qquad
u_2=\frac12\begin{pmatrix}0\\2\\0\end{pmatrix}
=\begin{pmatrix}0\\1\\0\end{pmatrix}.
$$

A full $U$ needs a third orthonormal column. Choose $u_3=(0,0,1)^T$, which is perpendicular to the image of $A$. This column belongs to $\ker(A^\dagger)$ and contributes a zero row to $\Sigma$.

Therefore

$$
U=\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix},
\qquad
\Sigma=\begin{pmatrix}3&0\\0&2\\0&0\end{pmatrix},
\qquad
V^\dagger=\begin{pmatrix}1&0\\0&1\end{pmatrix}.
$$

Both $U$ and $V$ are unitary. Direct multiplication gives $U\Sigma V^\dagger=I_3\Sigma I_2=A$, which checks the decomposition.

## Answer

$$
\boxed{A=U\Sigma V^\dagger,\qquad
U=I_3,\quad
\Sigma=\begin{pmatrix}3&0\\0&2\\0&0\end{pmatrix},\quad
V^\dagger=I_2.}
$$

The singular values are $3$ and $2$.
