---
title: "The Adjoint of an Operator"
---

> [!TLDR]
> The adjoint is the conjugate transpose in an orthonormal matrix representation. Physics usually writes a dagger, while mathematics texts can use a star or a superscript H.

## Compare the conventions

| Feature | Physics notation | Mathematics notation |
| --- | --- | --- |
| Symbol | $A^{\dagger}$, read as dagger | $A^*$ or $A^H$ |
| Name | Hermitian adjoint | Adjoint or conjugate transpose |
| Matrix entries | $(A^{\dagger})_{ij}=A_{ji}^*$ | The same conjugate-transpose rule |
| Hermitian condition | $A^{\dagger}=A$ | $A^*=A$ or $A=A^H$ |

In the entry formula, $A_{ji}^*$ means the complex conjugate of the scalar entry. In a mathematics text, $A^*$ can instead denote the adjoint of the whole matrix. Determine the meaning from the object and the author's definition.

The simple conjugate-transpose matrix rule assumes an orthonormal basis. An arbitrary basis requires the corresponding inner-product matrix.

## What the adjoint preserves

The defining relation, with the physics inner product, is

$$
\langle u,Av\rangle=\langle A^{\dagger}u,v\rangle.
$$

It moves the operator from one argument to the other without changing the scalar. This relation also defines the same adjoint if both inner products use the mathematics convention in [[01 The Inner Product]]. It does not mean that scalar conjugation and operator adjunction are the same operation.

For example, if $A=\begin{pmatrix}0&i\\0&0\end{pmatrix}$, then $A^{\dagger}=\begin{pmatrix}0&0\\-i&0\end{pmatrix}$. With $u=(1,0)^T$ and $v=(0,1)^T$, both sides of the defining relation equal $i$. Transposition alone would give $-i$ on the right.

In a finite-dimensional non-orthonormal basis, the Gram matrix $G$ is Hermitian positive-definite and therefore invertible. The coordinate inner product is $u^{\dagger}Gv$. If $M$ represents $A$ and $N$ represents its adjoint, substitution in the defining relation gives $GM=N^{\dagger}G$, hence

$$
N=G^{-1}M^{\dagger}G.
$$

Here $M^{\dagger}$ is the conjugate transpose of the coordinate matrix. An infinite non-orthogonal basis needs additional convergence and boundedness hypotheses; this finite-matrix formula does not cover that case by itself. **Check the basis dependence:** For $G=\operatorname{diag}(1,2)$ and $M=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, this formula gives $N=\begin{pmatrix}0&0\\1/2&0\end{pmatrix}$. Check the defining relation using the two coordinate basis columns. Using only $M^{\dagger}$ fails this check.

For an unbounded operator on a Hilbert space, the domain is part of the definition. For a densely defined $A$, the adjoint relation holds for every $v\in D(A)$ and $u\in D(A^{\dagger})$. Equality of an operator and its adjoint requires equality of their domains as well as their actions. A formal differential expression alone does not establish self-adjointness.
