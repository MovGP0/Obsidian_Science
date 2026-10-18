---
title: "Resolvents and spectra"
catalogue_ids:
  - "12.5.3"
  - "12.5.3.1"
  - "12.5.3.2"
---

> [!TLDR]
> The spectrum records where a shifted operator fails to have a bounded inverse, including failures that are not eigenvalues.

## Prerequisite route

Read [[10.05 Inverses]], [[10.07 Eigenvalues and eigenvectors]], and [[Bounded operators and convergence]]. Use [[09.02 Infinite series]] for geometric series. This lesson concerns a bounded operator $T:X\to X$ on a nonzero **complex Banach space**. Complex scalars matter: a real matrix can have no real eigenvalues but still have complex eigenvalues. The identity operator $I$ returns its input unchanged.

## Elements of spectral theory

To solve $(\lambda I-T)x=y$, ask three questions. Does a solution exist for every $y$? Is it unique? Does it depend continuously on $y$? In finite dimensions, the first two questions are controlled by a determinant, and a bijection automatically has a bounded inverse. Infinite-dimensional spaces need the third condition explicitly in the definition.

A scalar $\lambda$ belongs to the **resolvent set** $\rho(T)$ if $\lambda I-T$ is bijective with bounded inverse. Define the **resolvent operator** by

$$
R(\lambda,T)=(\lambda I-T)^{-1}.
$$

Some books use $(T-\lambda I)^{-1}$ instead. That convention changes the sign of the resolvent but not the spectrum. In this lesson the sign is fixed by the displayed definition.

The **spectrum** $\sigma(T)$ is the complement $\mathbb C\setminus\rho(T)$. An **eigenvalue** has a nonzero vector $x$ satisfying $Tx=\lambda x$. Every eigenvalue is spectral because $\lambda I-T$ then has a nonzero kernel. The kernel is the set of inputs sent to zero. The spectrum can contain additional points when surjectivity or bounded invertibility fails.

## Worked matrix example

Let $T=\operatorname{diag}(2,-1)$ on $\mathbb C^2$. Then

$$
\lambda I-T=
\begin{pmatrix}\lambda-2&0\\0&\lambda+1\end{pmatrix}.
$$

For $\lambda\ne2,-1$,

$$
R(\lambda,T)=
\begin{pmatrix}(\lambda-2)^{-1}&0\\0&(\lambda+1)^{-1}\end{pmatrix}.
$$

Thus $\sigma(T)=\{2,-1\}$. For $\lambda=3$ and $y=(4,8)$, the solution is $x=(4,2)$. Substitution gives $(3I-T)(4,2)=(4,8)$.

In Euclidean norm the resolvent norm is the larger of $|\lambda-2|^{-1}$ and $|\lambda+1|^{-1}$. It grows near either spectral value. Even outside the spectrum an inverse can amplify errors greatly. For non-normal matrices, distance from the spectrum alone does not in general give the exact inverse norm. The diagonal example has extra structure.

## A geometric-series method

If $|\lambda|>\|T\|$, factor

$$
\lambda I-T=\lambda(I-T/\lambda).
$$

The geometric series converges in operator norm because $\|T/\lambda\|<1$. Multiplying partial sums gives $I-(T/\lambda)^{N+1}$; the last term tends to zero. Therefore

$$
R(\lambda,T)=\frac1\lambda\sum_{n=0}^{\infty}(T/\lambda)^n,
\qquad
\|R(\lambda,T)\|\le\frac1{|\lambda|-\|T\|}.
$$

Consequently the spectrum lies in the closed disk $|\lambda|\le\|T\|$. For bounded operators on a nonzero complex Banach space it is also nonempty and compact. Nonemptiness is a deeper theorem, not a consequence of the geometric series alone. [MIT lecture 20](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/9eaaf363541d01d53c330ee7931fc715_MIT18_102s21_lec20.pdf)

## A spectral point without an eigenvector

On $\ell^2$, define $Dx=(x_1,x_2/2,x_3/3,\ldots)$. Its norm is $1$. Every $1/n$ is an eigenvalue with eigenvector $e_n$. Yet zero also lies in its spectrum, although $Dx=0$ forces every coordinate of $x$ to vanish.

The failure at zero is surjectivity. The sequence $y=(1,1/2,1/3,\ldots)$ belongs to $\ell^2$, because the sum of reciprocal squares converges. A solution of $Dx=y$ would need $x=(1,1,1,\ldots)$, which is not in $\ell^2$. Thus $D$ has no inverse on all of $\ell^2$.

One can show that $\sigma(D)=\{1,1/2,1/3,\ldots\}\cup\{0\}$. If $\lambda$ is outside this closed set, its distance $d$ from the set is positive. The inverse acts coordinatewise as $y_n\mapsto y_n/(\lambda-1/n)$, whose norm is at most $1/d$. This verifies bounded invertibility directly.

## Mistakes to avoid

A determinant is not available for every infinite-dimensional operator. A missing eigenvector does not prove resolvent membership. Also, the boundary $|\lambda|=\|T\|$ is not covered by the strict geometric-series condition. The series test gives a sufficient condition; it does not identify the whole spectrum.

## Practice

1. Find the spectrum and resolvent of $A=\operatorname{diag}(0,4)$.
2. Suppose $\|T\|\le2$. Give a guaranteed bound for $\|(5I-T)^{-1}\|$ and explain why the inverse exists.

> [!example]- Worked answers
> 1. $\lambda I-A$ is invertible precisely when $\lambda\ne0,4$. Thus $\sigma(A)=\{0,4\}$, and $R(\lambda,A)=\operatorname{diag}(1/\lambda,1/(\lambda-4))$ on its domain.
> 2. $\|T/5\|\le2/5<1$, so the geometric series constructs the inverse. Its norm is at most $1/(5-\|T\|)\le1/3$.
