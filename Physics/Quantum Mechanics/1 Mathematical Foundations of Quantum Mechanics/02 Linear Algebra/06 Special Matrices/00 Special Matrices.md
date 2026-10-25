---
title: "Special Matrices"
---

> [!TLDR]
> Matrix structure determines spectral, geometric, and numerical properties. This chapter connects projectors, decompositions, invariants, and density matrices with quantum applications.

This chapter organizes the properties of matrices. Structures such as singular value decomposition (SVD), orthogonal projectors, and normal forms occur in physical applications and numerical implementations of quantum algorithms.

> [!note]
> Every Hermitian matrix is normal. Every unitary matrix is normal. The spectral theorem applies to normal matrices: exactly these complex matrices are unitarily diagonalizable.

The main families of $n\times n$ matrices over $\mathbb{C}$ are summarized below.

| Family | Condition | Main property |
| --- | --- | --- |
| Hermitian | $A^\dagger=A$ | Real eigenvalues; unitarily diagonalizable. |
| Anti-Hermitian | $A^\dagger=-A$ | Purely imaginary eigenvalues, or zero. |
| Unitary | $A^\dagger A=I$ | $\lvert\lambda_i\rvert=1$; an isometry. |
| Normal | $A^\dagger A=AA^\dagger$ | Unitarily diagonalizable. |
| Orthogonal projector | $P^2=P$, $P^\dagger=P$ | Eigenvalues are $0$ or $1$. |
| Real symmetric | $A^T=A$, $A\in M_n(\mathbb{R})$ | Real eigenvalues. |
| Orthogonal | $A^TA=I$, $A\in M_n(\mathbb{R})$ | $\det A=\pm1$. |
| Upper triangular | $A_{ij}=0$ for $i>j$ | The diagonal entries are the eigenvalues. |
| Diagonal | $A_{ij}=0$ for $i\ne j$ | Operations act component by component. |

## Chapter sections

- [[01 Orthogonal Projectors|Orthogonal projectors]]
- [[02 Singular Value Decomposition|Singular value decomposition]]
- [[03 Polar Decomposition|Polar decomposition]]
- [[04 Rank, Kernel and Image|Rank, kernel, and image]]
- [[05 Determinant, Trace and Invariants|Determinant, trace, and invariants]]
- [[06 Condition Number|Condition number]]
- [[07 Gell-Mann Matrices|Gell-Mann matrices]]
- [[08 Density Matrices|Density matrices]]
- [[06 Special Matrices/09 Common Errors|Common errors]]
- [[10 Chapter Summary|Chapter summary]]
- [[11 Exercises|Exercises]]
