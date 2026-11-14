---
title: "Eigenvalues, Eigenvectors, and Diagonalization"
---

> [!TLDR]
> Eigenvectors describe directions that a linear operator preserves up to a scalar factor. For a Hermitian matrix, they form an orthonormal basis that makes the matrix diagonal.

Consider a linear operator $\hat A$. Are there vectors that it only stretches or compresses, instead of rotating them? In mathematical form, are there $v\ne0$ and $\lambda\in\mathbb C$ such that

$$
\hat A v=\lambda v?
$$

The answer depends on the operator. These special vectors, when they exist, are **eigenvectors**. The scalar factors are **eigenvalues**.

> [!note]
> The geometric description of stretching and compression is direct for real eigenvalues. A negative eigenvalue also reverses direction. A complex eigenvalue can change the phase of a complex vector. In each case, the one-dimensional complex span of the eigenvector is preserved.

In quantum mechanics, the eigenvectors and eigenvalues of the Hamiltonian $\hat H$ give the stationary states and the possible energies of the system.

The chapter follows three questions. First, which nonzero vectors satisfy the eigenvalue equation? Next, what extra conclusions follow from Hermiticity? Finally, how can a full orthonormal eigenbasis simplify functions of an operator and measurement calculations? Keep finding eigenvalues separate from proving that enough eigenvectors exist.

For example, $\begin{pmatrix}0&1\\0&0\end{pmatrix}$ has eigenvalue zero but only one independent eigenvector in $\mathbb C^2$. It cannot be diagonalized. Hermitian matrices avoid this defect. The finite-matrix results do not imply that every infinite-dimensional Hamiltonian has normalizable energy eigenvectors; a continuous spectrum requires a different spectral formulation.

## Chapter sections

- [[01 Definition and Calculation|Definition and calculation]]
- [[02 Properties of Hermitian Operators|Properties of Hermitian operators]]
- [[03 The Spectral Theorem|The spectral theorem]]
- [[04 Diagonalization Methods|Diagonalization methods]]
- [[07 Eigenvalues and Eigenvectors/05 Common Errors|Common errors and quantum measurement]]
- [[07 Eigenvalues and Eigenvectors/06 Chapter Summary|Chapter summary]]
- [[07 Eigenvalues and Eigenvectors/07 Exercises|Exercises]]
