---
title: "Verify the spectral decomposition of σₓ"
---

> [!TLDR]
> The difference of the projectors onto the two σₓ eigenstates reproduces the Pauli matrix.

Chapter 7 — Eigenvalues and Eigenvectors · Exercise 2 · Basic level.

[[07 Eigenvalues and Eigenvectors/07 Exercises#Exercise 2|Back to the chapter exercise index]].

## Question

Verify the spectral decomposition

$$
\sigma_x=|+x\rangle\langle+x|-|-x\rangle\langle-x|
$$

by calculating the right-hand side explicitly as a $2\times2$ matrix.

## Worked solution

The normalized eigenvectors of $\sigma_x$ are

$$
|+x\rangle=\frac1{\sqrt2}\begin{pmatrix}1\\1\end{pmatrix},
\qquad
|-x\rangle=\frac1{\sqrt2}\begin{pmatrix}1\\-1\end{pmatrix}.
$$

An outer product is a column multiplied by its conjugate-transpose row. The entries here are real, so conjugation leaves them unchanged:

$$
\begin{aligned}
|+x\rangle\langle+x|
&=\frac12\begin{pmatrix}1\\1\end{pmatrix}\begin{pmatrix}1&1\end{pmatrix}
=\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix},\\
|-x\rangle\langle-x|
&=\frac12\begin{pmatrix}1\\-1\end{pmatrix}\begin{pmatrix}1&-1\end{pmatrix}
=\frac12\begin{pmatrix}1&-1\\-1&1\end{pmatrix}.
\end{aligned}
$$

The spectral decomposition multiplies each projector by its eigenvalue. These eigenvalues are $+1$ and $-1$. Subtract the second projector from the first:

$$
\begin{aligned}
|+x\rangle\langle+x|-|-x\rangle\langle-x|
&=\frac12\begin{pmatrix}1-1&1-(-1)\\1-(-1)&1-1\end{pmatrix}\\
&=\begin{pmatrix}0&1\\1&0\end{pmatrix}=\sigma_x.
\end{aligned}
$$

As a separate completeness check, the sum of the two projectors is $I$. Thus these projectors cover the full two-dimensional space.

## Answer

The right-hand side is $\begin{pmatrix}0&1\\1&0\end{pmatrix}$, which is $\sigma_x$. The spectral decomposition is verified.
