---
title: "Matrices and Linear Operators"
---

> [!TLDR]
> A linear operator preserves vector-space structure. Its matrix depends on the chosen basis, while the operator and its physical meaning stay the same.

A linear operator is a map between vector spaces that respects their linear structure. In $\mathbb{C}^n$, every linear operator is represented by a matrix. But the matrix depends on the choice of basis, while the operator does not.

This distinction is essential. In quantum mechanics, a change of basis, such as from position space to momentum space, is a change of representation. The physics does not change.

To use this chapter, first build a matrix from the images of basis vectors. Next learn composition and adjoints before testing Hermiticity or unitarity. Finish with a change of basis, where both the state coordinates and the operator matrix must be transformed consistently.

A useful check separates the two main structures: $2I$ is Hermitian but doubles every vector's norm, whereas $\mathrm{i}I$ is unitary but is not Hermitian. Real measurement values and norm preservation therefore require different conditions. The matrix results here are finite-dimensional; differential operators later require a domain as part of their definition.

## Chapter sections

- [[01 Linear Operators and Matrices|Linear operators and matrices]]
- [[02 Matrix Operations|Matrix operations]]
- [[03 Hermitian Matrices|Hermitian matrices]]
- [[04 Unitary Matrices|Unitary matrices]]
- [[05 Change of Basis|Change of basis]]
- [[05 Matrices and Linear Operators/06 Common Errors|Common errors]]
- [[05 Matrices and Linear Operators/07 Chapter Summary|Chapter summary]]
- [[05 Matrices and Linear Operators/08 Exercises|Exercises]]
