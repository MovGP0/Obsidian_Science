---
title: "The Spectral Theorem"
---

> [!TLDR]
> Every Hermitian matrix has an orthonormal eigenbasis. Its spectral decomposition expresses it as a sum of eigenvalues multiplied by orthogonal projectors.

> [!theorem] Theorem 7.3 | Spectral theorem for Hermitian operators
> If $\hat A$ is Hermitian on $\mathbb C^n$, there is an orthonormal basis of eigenvectors $\{|a_k\rangle\}$ with real eigenvalues $\{a_k\}$.
>
> Equivalently, $\hat A$ is **unitarily diagonalizable**:
>
> $$
> A=U\begin{pmatrix}a_1&&0\\&\ddots&\\0&&a_n\end{pmatrix}U^\dagger,
> $$
>
> where the columns of $U$ are the normalized eigenvectors.

Here $A$ is the matrix of $\hat A$ in the initial orthonormal basis.

The equivalent form used in quantum mechanics is the **spectral decomposition**:

$$
\boxed{\hat A=\sum_k a_k|a_k\rangle\langle a_k|.}
$$

For a nondegenerate eigenvalue $a_k$, the operator $|a_k\rangle\langle a_k|$ projects onto its one-dimensional eigenspace. For a degenerate eigenvalue $a$, the projector onto the full eigenspace is

$$
\hat P_a=\sum_{k:\,a_k=a}|a_k\rangle\langle a_k|.
$$

The index $k$ labels basis vectors, including separate vectors that share the same eigenvalue. The spectral decomposition can therefore also be written as

$$
\hat A=\sum_{a\text{ distinct}}a\hat P_a.
$$

See Fig. 7.1 in [[04 Diagonalization Methods]] for the removal of degeneracy by coupling two levels.
