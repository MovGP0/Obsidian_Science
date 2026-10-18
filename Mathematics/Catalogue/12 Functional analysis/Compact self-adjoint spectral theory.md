---
title: "Compact self-adjoint spectral theory"
catalogue_ids:
  - "12.7.4"
  - "12.7.5"
---

> [!TLDR]
> A compact self-adjoint operator has orthogonal eigenvector expansions, with nonzero eigenvalues tending to zero when there are infinitely many.

## Prerequisite route

Read [[10.08 Diagonalization]], [[Dual and Hilbert adjoints]], [[Compactness weak convergence and Fredholm equations]], and [[Orthogonal expansions and best approximation]]. First understand ordinary symmetric matrices. The infinite-dimensional theorem has a similar form, but includes convergence and zero-spectrum questions that a finite matrix cannot show.

A Hilbert space has an inner product and is complete in its induced norm. Use the convention that $\langle x,y\rangle$ is linear in $y$. An orthonormal family consists of unit vectors with pairwise zero inner product. An eigenvector satisfies $Ke=\lambda e$ with $e\ne0$. A compact operator sends bounded sequences to outputs with norm-convergent subsequences.

## Compact operators in Hilbert space

Every compact operator between Hilbert spaces can be approximated in operator norm by finite-rank operators. This is more than pointwise approximation. Given $\varepsilon>0$, compactness covers the image of the unit ball by finitely many $\varepsilon$-balls. Let $M$ be the span of their centers and $P_M$ the orthogonal projector onto $M$. Each output lies within $\varepsilon$ of $M$, so

$$
\|K-P_MK\|\le\varepsilon.
$$

Thus finite-dimensional information approximates every unit input with the same error bound. This uses the Hilbert-space orthogonal projector. The converse holds: an operator-norm limit of finite-rank maps is compact. [MIT lecture 20](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/9eaaf363541d01d53c330ee7931fc715_MIT18_102s21_lec20.pdf)

Compactness alone does not guarantee an orthonormal eigenbasis. For the real matrix $N=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, the only eigenvalue is zero and the eigenvectors span only one line. The operator is compact because it acts in finite dimensions, but it is not self-adjoint. Extra structure is essential.

## Compact self-adjoint operators

The **compact self-adjoint spectral theorem** says: for a compact self-adjoint $K$ on a Hilbert space, the nonzero eigenvalues are real, each has finite multiplicity, and different eigenspaces are orthogonal. There are at most countably many nonzero eigenvalues, and their only possible accumulation point is zero. The closed span of their eigenspaces is $(\ker K)^\perp$. If $e_j$ lists orthonormal eigenvectors for these eigenspaces, then

$$
Kx=\sum_j\lambda_j e_j\langle e_j,x\rangle
$$

with convergence in norm. The component of $x$ in $\ker K$ is sent to zero. In a separable Hilbert space, adding an orthonormal basis for the kernel gives an orthonormal basis for the whole space. These claims require both compactness and self-adjointness. [MIT lecture 22](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/57596554e180e442c9487f580303147b_MIT18_102s21_lec22.pdf)

Why are eigenvalues real? If $Ke=\lambda e$, then $\langle e,Ke\rangle=\lambda\|e\|^2$. Self-adjointness makes this scalar equal to its own conjugate. Therefore $\lambda=\overline\lambda$. For eigenvectors $e,f$ with eigenvalues $\lambda\ne\mu$, the adjoint identity gives $(\lambda-\mu)\langle e,f\rangle=0$, so they are orthogonal.

Why can nonzero eigenvalues not stay away from zero? Choose normalized orthogonal eigenvectors $e_j$. If $|\lambda_j|\ge\varepsilon>0$, then

$$
\|Ke_j-Ke_k\|^2=|\lambda_j|^2+|\lambda_k|^2\ge2\varepsilon^2.
$$

The bounded input sequence would have no convergent output subsequence, contradicting compactness. The same argument proves finite multiplicity of each nonzero eigenvalue. Constructing the complete expansion requires the full spectral theorem.

## Worked example and truncation error

On $\ell^2$, let $K(x_1,x_2,\ldots)=(x_1,x_2/2,x_3/3,\ldots)$. It is compact and self-adjoint. Here $e_j$ are the coordinate vectors and $\lambda_j=1/j$. For $x=(1,1/2,1/3,\ldots)$,

$$
Kx=(1,1/4,1/9,\ldots).
$$

Retaining the first $N$ eigenvectors gives $K_Nx=\sum_{j\le N}(x_j/j)e_j$. For every input,

$$
\|Kx-K_Nx\|^2
=\sum_{j>N}\frac{|x_j|^2}{j^2}
\le\frac{\|x\|^2}{(N+1)^2}.
$$

Thus an error at most $0.01$ for every unit input is guaranteed by $N=99$. This estimates the operator action, not approximation of every input by its first coordinates. The unit ball itself is still not compact.

Zero is in the spectrum of this $K$ but is not an eigenvalue. The formal inverse multiplies the $j$th coordinate by $j$, so it is unbounded and not defined on all of $\ell^2$. Small eigenvalues therefore create unstable inverse problems even when the forward map is well approximated by finite rank. In a finite-dimensional example a compact operator can be invertible; the obstruction concerns infinite-dimensional spaces.

## Practice

1. Let $D(x_n)=((-1)^n x_n/n)$. Is $D$ compact, self-adjoint, or positive?
2. Suppose a compact self-adjoint operator has eigenvalues $\lambda_j=2^{-j}$ and an orthonormal eigenbasis indexed from $j=1$. How many terms guarantee operator error at most $1/64$?

> [!example]- Worked answers
> 1. The diagonal entries are real, so $D$ is self-adjoint. Its truncation error is $1/(N+1)$, so it is compact. It is not positive because $\langle e_1,De_1\rangle=-1$.
> 2. The omitted eigenvalues have maximum absolute value $2^{-(N+1)}$. We need $2^{-(N+1)}\le2^{-6}$, so $N\ge5$. Five terms give exactly the required bound, attained on the sixth eigenvector.
