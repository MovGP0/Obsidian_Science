---
title: "Chapter Summary"
---

> [!TLDR]
> Matrices represent operators in a chosen basis. Adjoints, Hermiticity, unitarity, and unitary basis changes describe the main algebraic structures used for quantum observables and transformations.

- In an orthonormal basis, the representing matrix has entries $A_{ij}=\langle e_i,\hat A e_j\rangle$.
- The matrix product is $(AB)_{ij}=\sum_k A_{ik}B_{kj}$. It is generally not commutative.
- The adjoint satisfies $(A^\dagger)_{ij}=A_{ji}^*$ and $(AB)^\dagger=B^\dagger A^\dagger$.
- A Hermitian matrix satisfies $A^\dagger=A$. It has real eigenvalues and is unitarily diagonalizable.
- A unitary matrix satisfies $U^\dagger U=I$. It preserves norms and represents an isometry.
- Under a change between orthonormal bases, $A'=U^\dagger AU$. The trace is invariant.
- In quantum mechanics, observables correspond to Hermitian operators, and unitary operators represent symmetries and transformations.

## One calculation that joins the ideas

Take $A=\sigma_z$ and the Hadamard basis change $H$. Since $H^\dagger H=I$, the new matrix is $H^\dagger AH=\sigma_x$. Its form changes from diagonal to off-diagonal, but both matrices are Hermitian and have eigenvalues $+1,-1$ and trace zero. The observable is the same when the state coordinates are changed consistently.

Reconstruct the factor order from $c=Hc'$ rather than from memory. Then explain why replacing $H^\dagger AH$ by $H^\dagger A$ alone would not represent the same map in a new basis: only the output coordinates would have been changed.

> [!note]
> For infinite-dimensional observables, use the self-adjointness and domain qualifications in [[05 Matrices and Linear Operators/06 Common Errors|the quantum-mechanics box]]. That note also distinguishes unitary symmetries from antiunitary ones.
