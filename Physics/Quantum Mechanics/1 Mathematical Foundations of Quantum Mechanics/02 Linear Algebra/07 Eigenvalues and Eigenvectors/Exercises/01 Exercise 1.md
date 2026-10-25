---
title: "Eigenvalues and normalized eigenvectors of three matrices"
---

> [!TLDR]
> Find the characteristic roots, solve each homogeneous system, and normalize the resulting eigenvectors.

Chapter 7 — Eigenvalues and Eigenvectors · Exercise 1 · Basic level.

[[07 Eigenvalues and Eigenvectors/07 Exercises#Exercise 1|Back to the chapter exercise index]].

## Question

Find the eigenvalues and normalized eigenvectors of:

**(a)**

$$
A=\begin{pmatrix}3&1\\1&3\end{pmatrix}.
$$

**(b)**

$$
B=\begin{pmatrix}0&1-i\\1+i&0\end{pmatrix}.
$$

**(c)** $\sigma_z$. The standard basis is already an eigenbasis.

> [!note]
> The source asks for “normalized eigenvalues and eigenvectors.” Normalization applies to the eigenvectors, not to their eigenvalues.

## Worked solution

### (a) Real symmetric matrix

An eigenvector is nonzero and satisfies $Av=\lambda v$. Thus $(A-\lambda I)v=0$ has a nonzero solution only if its determinant is zero:

$$
\det(A-\lambda I)
=\begin{vmatrix}3-\lambda&1\\1&3-\lambda\end{vmatrix}
=(3-\lambda)^2-1
=(\lambda-2)(\lambda-4).
$$

For $\lambda=2$, the first row gives $v_1+v_2=0$. Choose $(1,-1)^T$. Its squared norm is $1^2+(-1)^2=2$, so

$$
v_2=\frac1{\sqrt2}\begin{pmatrix}1\\-1\end{pmatrix}.
$$

For $\lambda=4$, the first row gives $-v_1+v_2=0$. Choose $(1,1)^T$ and divide by the same norm:

$$
v_4=\frac1{\sqrt2}\begin{pmatrix}1\\1\end{pmatrix}.
$$

Direct substitution checks both results:

$$
Av_2=\frac1{\sqrt2}\begin{pmatrix}2\\-2\end{pmatrix}=2v_2,
\qquad
Av_4=\frac1{\sqrt2}\begin{pmatrix}4\\4\end{pmatrix}=4v_4.
$$

Also $v_2^\dagger v_4=(1-1)/2=0$. The two normalized vectors form an orthonormal basis.

### (b) Complex Hermitian matrix

Use the product $(1-i)(1+i)=2$:

$$
\det(B-\lambda I)
=\lambda^2-(1-i)(1+i)
=\lambda^2-2.
$$

The eigenvalues are $\lambda_\pm=\pm\sqrt2$. The first component equation is $(1-i)v_2=\lambda v_1$. Choose $v_1=1-i$ and $v_2=\lambda$. This choice also satisfies the second equation because $(1+i)(1-i)=2=\lambda^2$.

The complex norm uses conjugation:

$$
\left\|\begin{pmatrix}1-i\\\pm\sqrt2\end{pmatrix}\right\|^2
=|1-i|^2+|\pm\sqrt2|^2=2+2=4.
$$

Therefore,

$$
v_+=\frac12\begin{pmatrix}1-i\\\sqrt2\end{pmatrix},
\qquad
v_-=\frac12\begin{pmatrix}1-i\\-\sqrt2\end{pmatrix}.
$$

For either sign,

$$
Bv_\pm
=\frac12\begin{pmatrix}\pm\sqrt2(1-i)\\2\end{pmatrix}
=\pm\sqrt2\,v_\pm.
$$

Their inner product is

$$
v_+^\dagger v_-=
\frac14\bigl((1+i)(1-i)-2\bigr)=0.
$$

The factor $1/2$ gives unit norm. A common phase factor of modulus one gives the same physical eigenstate.

### (c) The Pauli matrix σ_z

The matrix is diagonal:

$$
\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
$$

Its diagonal entries are its eigenvalues. The standard basis vectors already have unit norm:

$$
\sigma_z\begin{pmatrix}1\\0\end{pmatrix}
=\begin{pmatrix}1\\0\end{pmatrix},
\qquad
\sigma_z\begin{pmatrix}0\\1\end{pmatrix}
=-\begin{pmatrix}0\\1\end{pmatrix}.
$$

## Answer

For $A$: $(2,(1,-1)^T/\sqrt2)$ and $(4,(1,1)^T/\sqrt2)$.

For $B$: $(\sqrt2,(1-i,\sqrt2)^T/2)$ and $(-\sqrt2,(1-i,-\sqrt2)^T/2)$.

For $\sigma_z$: $(+1,|\uparrow\rangle)$ and $(-1,|\downarrow\rangle)$, with $|\uparrow\rangle=(1,0)^T$ and $|\downarrow\rangle=(0,1)^T$. Each eigenvalue in these three matrices is nondegenerate.
