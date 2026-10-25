---
title: "Unitary similarity preserves Hermiticity and eigenvalues"
---

> [!TLDR]
> A unitary change of basis preserves Hermiticity and maps each eigenvector to an eigenvector with the same eigenvalue.

Chapter 5 · Exercise 8 · Intermediate level.

Back to [[05 Matrices and Linear Operators/08 Exercises#Exercise 8|Chapter 5 exercises]].

## Question

Prove that if $U$ is unitary and $A$ is Hermitian, then $B=UAU^\dagger$ is Hermitian and has the same eigenvalues as $A$.

## Worked solution

### Hermiticity

Use $(XYZ)^\dagger=Z^\dagger Y^\dagger X^\dagger$ and $(U^\dagger)^\dagger=U$:

$$
B^\dagger=(UAU^\dagger)^\dagger
=(U^\dagger)^\dagger A^\dagger U^\dagger
=UAU^\dagger=B.
$$

The equality $A^\dagger=A$ supplies the central step. Hence $B$ is Hermitian.

### Eigenvalues

Let $v\ne0$ satisfy $Av=\lambda v$. Since $U$ is unitary, $U^\dagger U=UU^\dagger=I$, so $U$ is invertible and $Uv\ne0$. Then

$$
B(Uv)=UAU^\dagger Uv=UAv=\lambda Uv.
$$

Thus every eigenvalue of $A$ is an eigenvalue of $B$. To show equality of the spectra, also use the reverse map: if $Bw=\lambda w$ with $w\ne0$, then

$$
A(U^\dagger w)=U^\dagger Bw=\lambda U^\dagger w,
\qquad U^\dagger w\ne0.
$$

The invertible map $v\mapsto Uv$ is a bijection between corresponding eigenspaces. For these Hermitian matrices there is a complete eigenbasis, so the eigenvalue multiplicities also agree. Equivalently, their characteristic polynomials are identical:

$$
\det(B-\lambda I)=\det\bigl(U(A-\lambda I)U^\dagger\bigr)
=\det(U)\det(A-\lambda I)\det(U^\dagger)
=\det(A-\lambda I),
$$

because $\det(U)\det(U^\dagger)=\det(UU^\dagger)=1$.

## Answer

$\boxed{B^\dagger=B}$. The matrices $A$ and $B$ have the same eigenvalues with the same multiplicities; an eigenvector $v$ of $A$ maps to the eigenvector $Uv$ of $B$.
