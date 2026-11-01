---
title: "Linear Algebra"
---

> [!TLDR]
> The trace is invariant under a cyclic exchange of two factors. Taking the adjoint reverses product order, while the determinant of a product is the product of the determinants.

For square matrices $A$ and $B$ of the same size,

$$
\operatorname{Tr}(AB)=\operatorname{Tr}(BA),
$$

$$
(AB)^{\dagger}=B^{\dagger}A^{\dagger},
$$

$$
\det(AB)=\det(A)\det(B).
$$

The adjoint identity also applies to compatible rectangular matrices. The dagger denotes the conjugate transpose.

Use trace cyclicity to move a complete factor around a closed product, the adjoint rule to conjugate an operator expression, and determinant multiplicativity to test invertibility. In an orthonormal basis, these matrix operations represent the corresponding operations on finite-dimensional quantum operators. In a nonorthonormal basis, the Hilbert-space adjoint requires the inner-product matrix; it need not be the ordinary conjugate transpose.

Trace cyclicity follows from $\operatorname{Tr}(AB)=\sum_{i,j}A_{ij}B_{ji}$ by exchanging the two finite summation indices. For three factors it permits $\operatorname{Tr}(ABC)=\operatorname{Tr}(BCA)$, but does not permit an arbitrary exchange of adjacent factors. For example, take

$$
A=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad
B=\begin{pmatrix}0&0\\1&0\end{pmatrix},\qquad
C=\begin{pmatrix}1&0\\0&2\end{pmatrix}.
$$

Then $\operatorname{Tr}(ABC)=1$ while $\operatorname{Tr}(ACB)=2$. Thus a trace can be cyclic even when the matrices do not commute. This distinction matters when simplifying quantum expectation values.

As a basis-change check, if $U$ is unitary then $\operatorname{Tr}(U^\dagger A U)=\operatorname{Tr}(A)$: move the last factor to the front and use $UU^\dagger=I$. These finite-matrix formulas do not by themselves justify exchanging unbounded operators inside an infinite-dimensional trace; existence and domain conditions must be checked first.
