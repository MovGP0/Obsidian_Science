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

Here $A$ is the matrix of $\hat A$ in the initial orthonormal basis. A proof roadmap explains the existence statement. A complex finite matrix has an eigenvector. For a Hermitian matrix, the orthogonal complement of that vector is invariant: if $\langle v,w\rangle=0$, then $\langle v,Aw\rangle=\langle Av,w\rangle=\lambda\langle v,w\rangle=0$. Restrict the operator to this complement and repeat by induction. Each step supplies another orthogonal eigenvector.

For the check $A=\operatorname{diag}(2,2,5)$, the eigenvalue-$2$ projector is $\operatorname{diag}(1,1,0)$, independent of which orthonormal pair is chosen in its plane. The decomposition $A=2P_2+5P_5$ therefore refers to eigenspaces, not to an arbitrary choice inside a degenerate level. In quantum measurement, the spectral projectors supply the mathematical alternatives; the probability rule remains a physical postulate.

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
