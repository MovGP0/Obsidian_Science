---
title: "When a product of Hermitian matrices is Hermitian"
---

> [!TLDR]
> The product of two Hermitian matrices is Hermitian exactly when the matrices commute.

Chapter 5 · Exercise 5 · Intermediate level.

Back to [[05 Matrices and Linear Operators/08 Exercises#Exercise 5|Chapter 5 exercises]].

## Question

If $A$ and $B$ are Hermitian, under which condition is $AB$ also Hermitian?

## Worked solution

Hermiticity requires equality with the adjoint. Use the product rule because the adjoint reverses the factor order:

$$
(AB)^\dagger=B^\dagger A^\dagger=BA,
$$

where the last equality uses $A^\dagger=A$ and $B^\dagger=B$.

If $AB$ is Hermitian, then $AB=(AB)^\dagger=BA$, so commutation is necessary. Conversely, if $AB=BA$, then $(AB)^\dagger=BA=AB$, so commutation is sufficient. Both directions are required to establish the exact condition.

## Answer

$$
\boxed{AB\text{ is Hermitian}\iff AB=BA\iff[A,B]=0}.
$$

The factors must commute.
