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

## Examples that test both directions

Take $A=\sigma_x$ and $B=\sigma_y$. Both are Hermitian, but $AB=\mathrm{i}\sigma_z$ is anti-Hermitian, so the product fails the test. In contrast, $A=\sigma_z$ and $B=2I$ commute, and $AB=2\sigma_z$ is Hermitian. The adjoint rule explains both examples with the same method.

This condition matters when combining quantum observables: multiplying two observable matrices does not automatically produce another Hermitian observable. The theorem is stated for finite matrices. Extending it to unbounded operators requires care with the domains of both products and their adjoints; the finite proof does not settle that question.

## Answer

$$
\boxed{AB\text{ is Hermitian}\iff AB=BA\iff[A,B]=0}.
$$

The factors must commute.
