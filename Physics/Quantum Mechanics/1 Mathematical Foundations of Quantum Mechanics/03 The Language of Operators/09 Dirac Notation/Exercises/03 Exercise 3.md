---
title: "Completeness and the norm of a state"
---

> [!TLDR]
> The identity resolution expresses the state norm as the sum of squared basis amplitudes.

Chapter 9 — Dirac Notation · Exercise 3 · Basic level

Back to [[09 Dirac Notation/10 Exercises#Exercise 3|Chapter 9 exercise index]].

## Question

Use completeness, $\sum_n|n\rangle\langle n|=\hat I$, to show that

$$
\langle\psi|\psi\rangle=\sum_n|\langle n|\psi\rangle|^2.
$$

## Worked solution

Insert the identity operator between the bra and ket. The completeness relation then gives

$$
\begin{aligned}
\langle\psi|\psi\rangle
&=\langle\psi|\hat I|\psi\rangle\\
&=\left\langle\psi\left|\left(\sum_n|n\rangle\langle n|\right)\right|\psi\right\rangle\\
&=\sum_n\langle\psi|n\rangle\langle n|\psi\rangle.
\end{aligned}
$$

Each factor is a scalar. Conjugate symmetry of the inner product gives $\langle\psi|n\rangle=\langle n|\psi\rangle^*$. Therefore

$$
\langle\psi|\psi\rangle
=\sum_n\langle n|\psi\rangle^*\langle n|\psi\rangle
=\sum_n|\langle n|\psi\rangle|^2.
$$

For an infinite orthonormal basis, completeness means that the basis expansion converges in the Hilbert-space norm. The equality is Parseval’s identity. For a normalized quantum state the left side is $1$, so the squared basis amplitudes sum to $1$.

## Answer

$\langle\psi|\psi\rangle=\sum_n|\langle n|\psi\rangle|^2$, by completeness and conjugate symmetry. For a normalized state the sum is $1$.
