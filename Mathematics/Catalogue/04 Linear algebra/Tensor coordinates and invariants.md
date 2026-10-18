---
title: "Tensor coordinates and invariants"
catalogue_ids:
  - "4.3"
  - "4.3.1"
  - "4.3.2"
  - "4.3.3"
  - "4.3.3.1"
  - "4.3.3.2"
---

> [!TLDR]
> Tensor components change with the basis, while the underlying multilinear rule remains the same.

## Start with a vector and a measuring rule

Read [[Matrices and linear maps]] first. A vector $v$ has coordinates only after a basis $e_1,\ldots,e_n$ is chosen: $v=\sum_i v^i e_i$. A **covector** $\alpha$ is a linear rule from vectors to real numbers. For example, $\alpha(x,y)=2x-y$. Its components are $\alpha_i=\alpha(e_i)$, so $\alpha(v)=\sum_i\alpha_i v^i$. The upper and lower index positions distinguish different transformation rules; they are not powers. [[18.01 Dual spaces]] derives the basis of covectors that extracts coordinates.

A tensor is built from vector and covector slots with linear dependence in each slot separately. A bilinear form is a simple second-order example: $B(u,v)$ returns a number and is linear in each of its two vector arguments. In a basis its entries are $B_{ij}=B(e_i,e_j)$, and $B(u,v)=\sum_{ij}B_{ij}u^iv^j$. Another second-order tensor is a linear map $T$ from vectors to vectors, with entries $T^i{}_j$. It has one upper and one lower slot. Both can be stored in a square array, but their basis-change laws differ.

## Change the coordinate system

Let the columns of $M$ be the new basis vectors in old coordinates: $e'_a=\sum_i e_iM^i{}_a$. Here $M$ must be invertible. The same vector satisfies $v=Mv'$ in coordinate columns, so $v'=M^{-1}v$. A covector component column satisfies $\alpha'=M^T\alpha$. Consequently $\alpha'^Tv'=\alpha^Tv$: evaluation is an invariant scalar.

For a map, substitute into $w=Av$ to get $Mw'=AMv'$, hence $A'=M^{-1}AM$. For a bilinear form, substitute old input columns $Mu'$ and $Mv'$ into $u^TBv$:

$$
B'=M^TBM.
$$

This is **congruence**, while $M^{-1}AM$ is **similarity**. Interchanging them silently changes the kind of tensor being represented. In Cartesian orthonormal bases $M$ is orthogonal, meaning $M^{-1}=M^T$. This makes some formulas look identical. It does not erase the distinction between their input slots.

## Second-order tensors with special properties

In a Euclidean orthonormal basis a symmetric matrix $S=S^T$ defines a symmetric form, $B(u,v)=B(v,u)$. A skew-symmetric matrix $K=-K^T$ changes sign on exchanging its arguments, and $v^TKv=0$. Every real square matrix has the unique split

$$
A=\tfrac12(A+A^T)+\tfrac12(A-A^T)=S+K.
$$

These formulas also split bilinear forms in arbitrary bases. If instead $A$ represents an operator, its adjoint must use the metric in a nonorthonormal basis; plain transpose alone then does not express self-adjointness. An **isotropic** second-order Euclidean form has matrix $cI$ in every orthonormal basis: $M^T(cI)M=cI$. This stronger property is not shared by every symmetric tensor.

The identity map has components $\delta^i{}_j$, equal to $1$ when indices agree and $0$ otherwise. It is invariant under every invertible basis change because $M^{-1}IM=I$. The Euclidean metric has entries $\delta_{ij}$ only in orthonormal bases. Its components change in a slanted basis. An **invariant tensor** under a specified group is one fixed by every transformation in that group. Always name the group; invariant under rotations need not mean invariant under all invertible matrices.

## Worked example: a slanted basis

Take $M=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, $v=(3,2)^T$, and $\alpha=(2,-1)^T$. Then $v'=(1,2)^T$, and $\alpha'=(2,1)^T$. Their pairing is $6-2=4$ before the change and $2+2=4$ afterwards.

The Euclidean metric starts as $G=I$. Its new matrix is

$$
G'=M^TM=\begin{pmatrix}1&1\\1&2\end{pmatrix}.
$$

The old squared length is $3^2+2^2=13$. The new expression is $(1,2)G'(1,2)^T=1+4+8=13$. If you incorrectly kept $I$, you would obtain $5$. The object is invariant even though its component table changes.

For a special-property example, split $A=\begin{pmatrix}2&3\\1&4\end{pmatrix}$. The symmetric part is $\begin{pmatrix}2&2\\2&4\end{pmatrix}$ and the skew part is $\begin{pmatrix}0&1\\-1&0\end{pmatrix}$. Adding them recovers every entry. For $v=(a,b)^T$, the skew quadratic expression is $ab-ba=0$.

## Practice

1. Under $M=\operatorname{diag}(2,3)$, transform $v=(4,6)^T$ and $\alpha=(1,2)^T$. Check evaluation.
2. Is $B=\operatorname{diag}(1,2)$ unchanged by a $90^\circ$ orthogonal basis change $M=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$?

## Worked answers

1. $v'=M^{-1}v=(2,2)^T$ and $\alpha'=M^T\alpha=(2,6)^T$. Both pairings equal $16$. Each component rule is needed for cancellation.
2. $M^TBM=\operatorname{diag}(2,1)$, so this form is not invariant under all plane rotations. Symmetry of its matrix is preserved, but equality of the entries is not. For further slot calculations see [[18.05 Transformation laws]].
