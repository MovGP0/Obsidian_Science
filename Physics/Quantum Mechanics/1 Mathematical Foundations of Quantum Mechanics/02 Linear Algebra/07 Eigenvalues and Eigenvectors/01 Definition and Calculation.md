---
title: "Definition and Calculation"
---

> [!TLDR]
> Find eigenvalues from the characteristic equation, then solve a homogeneous linear system for each eigenvector. Normalize the vectors after you find their directions.

> [!definition] Definition 7.1 | Eigenvalue and eigenvector
> A number $\lambda\in\mathbb C$ is an **eigenvalue** of $\hat A:V\to V$ if there is a vector $v\ne0$ such that
>
> $$
> \hat A v=\lambda v.
> $$
>
> The vector $v$ is an **eigenvector** for the eigenvalue $\lambda$.

In $\mathbb C^n$, the eigenvalue equation is equivalent to

$$
(A-\lambda I)v=0.
$$

This system has a nonzero solution exactly when $A-\lambda I$ is singular. Thus,

$$
\det(A-\lambda I)=0.
$$

This is the **characteristic equation**. The determinant is a polynomial of degree $n$ in $\lambda$. It has exactly $n$ roots in $\mathbb C$, counted with their algebraic multiplicities.

> [!note]
> This chapter uses $\det(A-\lambda I)$, as in the source. Chapter 6 uses $\det(\lambda I-A)$. These polynomials differ by the factor $(-1)^n$ and have the same roots.

## Example — Eigenvalues and eigenvectors of σ_y

$$
\det(\sigma_y-\lambda I)
=\det\begin{pmatrix}-\lambda&-i\\i&-\lambda\end{pmatrix}
=\lambda^2-1=0
\quad\Longrightarrow\quad\lambda=\pm1.
$$

For $\lambda=+1$, solve $(\sigma_y-I)v=0$:

$$
\begin{pmatrix}-1&-i\\i&-1\end{pmatrix}
\begin{pmatrix}v_1\\v_2\end{pmatrix}=0
\quad\Longrightarrow\quad-v_1-iv_2=0
\quad\Longrightarrow\quad v_1=-iv_2.
$$

Choose $v_2=1$. Then $v=(-i,1)^T$, and its normalized form is $\tfrac1{\sqrt2}(-i,1)^T$. Multiplication by the global phase $i$ gives the usual convention:

$$
|+y\rangle=\frac1{\sqrt2}\begin{pmatrix}1\\i\end{pmatrix}.
$$

The global phase does not change the physical state.

For $\lambda=-1$, the same procedure gives

$$
|-y\rangle=\frac1{\sqrt2}\begin{pmatrix}1\\-i\end{pmatrix}.
$$

**Verification:**

$$
\begin{aligned}
\sigma_y|+y\rangle
&=\frac1{\sqrt2}\begin{pmatrix}0&-i\\i&0\end{pmatrix}
\begin{pmatrix}1\\i\end{pmatrix}\\
&=\frac1{\sqrt2}\begin{pmatrix}-i\cdot i\\i\cdot1\end{pmatrix}
=\frac1{\sqrt2}\begin{pmatrix}1\\i\end{pmatrix}
=|+y\rangle.
\end{aligned}
$$
