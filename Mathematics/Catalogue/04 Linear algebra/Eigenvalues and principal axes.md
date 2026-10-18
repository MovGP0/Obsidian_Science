---
title: "Eigenvalues and principal axes"
catalogue_ids:
  - "4.6"
  - "4.6.1"
  - "4.6.2"
  - "4.6.2.1"
  - "4.6.2.2"
  - "4.6.2.3"
  - "4.6.2.4"
---

> [!TLDR]
> Eigenvectors identify directions preserved by a square map; symmetric matrices admit perpendicular principal directions.

## Directions a map preserves

Read [[Linear systems and pivot exchange]] and [[Determinants and oriented area]]. An **eigenvector** of a square matrix $A$ is a nonzero column $v$ for which $Av=\lambda v$. The scalar $\lambda$ is its eigenvalue. Positive values stretch or shrink that direction, negative values also reverse it, and zero means the direction is lost. The zero vector is excluded because it would satisfy the equation for every $\lambda$.

Rearrange to $(\lambda I-A)v=0$. A nonzero solution exists exactly when this coefficient matrix is singular. We use the monic characteristic polynomial

$$
p_A(\lambda)=\det(\lambda I-A).
$$

Its roots are the eigenvalues, over the complex numbers if needed. Some books use $\det(A-\lambda I)$, which differs by $(-1)^n$. The roots agree, but coefficient signs need a fixed convention. For a $2\times2$ matrix, $p_A(\lambda)=\lambda^2-\operatorname{tr}(A)\lambda+\det A$, where trace is the sum of the diagonal entries.

## Worked eigenvalue calculation

Let $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$. Then $p_A(\lambda)=(\lambda-2)^2-1=(\lambda-3)(\lambda-1)$. For $\lambda=3$, solve $(A-3I)v=0$ to get $v_1=v_2$. For $\lambda=1$, solve to get $v_1=-v_2$. Unit eigenvectors are $u_1=(1,1)^T/\sqrt2$ and $u_2=(1,-1)^T/\sqrt2$.

Check directly: $Au_1=3u_1$ and $Au_2=u_2$. If $P$ has these columns, then $P^TP=I$ and $P^TAP=\operatorname{diag}(3,1)$. In general, an invertible $P$ gives a **similarity transformation** $P^{-1}AP$, the same map in a new basis. It preserves the characteristic polynomial because determinants multiply and $\det P^{-1}\det P=1$.

## Symmetric matrices and principal axes

The real spectral theorem states that every real symmetric matrix has real eigenvalues and an orthonormal basis of eigenvectors. The complete existence proof needs further linear algebra; the orthogonality claim has a short proof. If $Au=\lambda u$ and $Av=\mu v$, symmetry gives $u^TAv=(Au)^Tv$, hence $(\mu-\lambda)u^Tv=0$. Distinct eigenvalues therefore have perpendicular eigenvectors. Repeated eigenvalues allow any orthonormal basis inside their eigenspaces.

A quadratic form $q(x)=x^TAx$ with symmetric $A$ becomes, on setting $x=Py$,

$$
q(x)=y^TP^TAPy=\sum_i\lambda_i y_i^2.
$$

This is a **principal-axis transformation**. In the example, $q(x_1,x_2)=2x_1^2+2x_1x_2+2x_2^2$ becomes $3y_1^2+y_2^2$. The equation $q=1$ is an ellipse with semiaxes $1/\sqrt3$ and $1$ along $u_1,u_2$. All positive eigenvalues give a positive definite form. Mixed signs give an indefinite form, such as $y_1^2-y_2^2$. Zero eigenvalues create flat directions. For a nonsymmetric coefficient array, only $(A+A^T)/2$ contributes to $x^TAx$, since the skew part contributes zero.

## Generalized eigenvalue problems

A more general problem is $Av=\lambda Bv$ for given square matrices $A,B$. If $B$ is invertible this is equivalent to $B^{-1}Av=\lambda v$, although explicitly forming the inverse is often a poor numerical method. If both $A$ and $B$ are symmetric and $B$ is positive definite, write $B=LL^T$ with invertible lower triangular $L$. Setting $y=L^Tv$ gives the symmetric ordinary problem $L^{-1}AL^{-T}y=\lambda y$. This explains why its eigenvalues are real.

For example, $A=\operatorname{diag}(6,2)$ and $B=\operatorname{diag}(2,1)$ give eigenvalues $3$ and $2$, with the coordinate-axis eigenvectors. If $B$ is singular, do not divide by it. A regular pencil, for which $\det(A-\lambda B)$ is not identically zero, can have finite and infinite generalized eigenvalues. For $A=\operatorname{diag}(2,1)$, $B=\operatorname{diag}(1,0)$, the first axis gives finite eigenvalue $2$; the second has no finite eigenvalue and represents an infinite one in pencil terminology. If the determinant is identically zero, the pencil is singular and needs additional theory. This is outside the elementary eigenvector calculation.

## Numerical methods and limitations

For a large matrix, computing characteristic-polynomial coefficients and finding their roots is usually less reliable than specialized matrix methods. A **power iteration** repeatedly forms $Ax$ and normalizes. For $A=\operatorname{diag}(3,1)$ starting at $(1,1)$, the component ratio after $k$ steps is $1/3^k$, so the normalized direction tends to the first axis. Convergence requires a uniquely dominant eigenvalue in magnitude and a nonzero starting component in its direction, with appropriate spectral assumptions. Equal dominant magnitudes or a missing component can prevent the desired result.

QR eigenvalue algorithms apply orthogonal similarity steps; specialized symmetric versions exploit symmetry. Check a computed pair with the residual $Av-\lambda v$, while remembering that a small residual alone may not control eigenvector error for a nonsymmetric, poorly conditioned problem. Repeated eigenvalues also need subspace reasoning rather than a preferred individual vector. [[10.08 Diagonalization]] gives examples of matrices without a full eigenvector basis.

## Practice

1. Find the characteristic polynomial and eigenvalues of $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ over the reals and over the complex numbers.
2. Classify $q(x,y)=4x^2+0y^2$ and identify the flat direction.

## Worked answers

1. $p(\lambda)=\lambda^2+1$. It has no real roots and thus no real eigenvectors. Over the complex numbers its eigenvalues are $i$ and $-i$. A real rotation need not preserve a real line.
2. The symmetric matrix is $\operatorname{diag}(4,0)$. The form is nonnegative but not positive definite: every vector $(0,y)$ has value zero. The second coordinate axis is its flat direction.

## Source

[LAPACK Users' Guide: generalized nonsymmetric eigenproblems](https://www.netlib.org/lapack/lug/node56.html) describes regular and singular pencils and finite or infinite eigenvalues. Those distinctions apply only to the generalized problem, not to ordinary finite square matrices alone.
