---
title: "Determinant of a unitary matrix"
---

> [!TLDR]
> Unitarity forces the determinant to have unit modulus, so it is a complex phase.

Chapter 6: Special Matrices · Exercise 6 · Intermediate level

Back to [[06 Special Matrices/11 Exercises|Chapter 6 exercises]].

## Question

Prove that every unitary matrix $U$ has $\det(U)=\mathrm{e}^{\mathrm{i}\phi}$ for some $\phi\in\mathbb{R}$. Thus, $|\det U|=1$.

*Hint:* use $\det(U^\dagger)\det(U)=\det(I)$ and multiplicativity of the determinant.

## Worked solution

By definition, a unitary matrix satisfies $U^\dagger U=I$. Take determinants and use multiplicativity:

$$
1=\det(I)=\det(U^\dagger U)
=\det(U^\dagger)\det(U).
$$

The adjoint is $U^\dagger=\overline U^{\,T}$. Transposition does not change a determinant, and conjugation conjugates the determinant. Hence

$$
\det(U^\dagger)=\det(\overline U^{\,T})
=\det(\overline U)=\overline{\det(U)}.
$$

Substitution gives

$$
\overline{\det(U)}\det(U)=|\det(U)|^2=1.
$$

The modulus is nonnegative, so $|\det(U)|=1$. Every complex number of unit modulus is on the unit circle and has a polar form $\mathrm{e}^{\mathrm{i}\phi}$ for a real argument $\phi$. The phase is defined modulo $2\pi$.

## Answer

$$
\boxed{\det(U)=\mathrm{e}^{\mathrm{i}\phi},\quad
\phi\in\mathbb R,\qquad |\det(U)|=1.}
$$
