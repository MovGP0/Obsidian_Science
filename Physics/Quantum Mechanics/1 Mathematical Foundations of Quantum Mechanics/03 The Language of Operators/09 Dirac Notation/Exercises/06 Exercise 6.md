---
title: "Positivity of a squared Hermitian operator"
---

> [!TLDR]
> The expectation of a squared Hermitian operator is a squared norm and can vanish only in its kernel.

Chapter 9 — Dirac Notation · Exercise 6 · Intermediate level

Back to [[09 Dirac Notation/10 Exercises#Exercise 6|Chapter 9 exercise index]].

## Question

Show that, for a Hermitian operator $\hat A$,

$$
\sum_n\langle\psi|\hat A|n\rangle\langle n|\hat A|\psi\rangle
=\langle\psi|\hat A^2|\psi\rangle.
$$

Deduce that $\langle\hat A^2\rangle\ge0$ and that

$$
\langle\hat A^2\rangle=0\quad\Longrightarrow\quad\hat A|\psi\rangle=0.
$$

Use a complete orthonormal basis and assume that the state is in the domain needed for these expressions.

## Worked solution

### Insert the complete basis

The sum can be placed between the two operators because the outer bra and ket do not depend on $n$:

$$
\begin{aligned}
\sum_n\langle\psi|\hat A|n\rangle\langle n|\hat A|\psi\rangle
&=\langle\psi|\hat A\left(\sum_n|n\rangle\langle n|\right)\hat A|\psi\rangle\\
&=\langle\psi|\hat A\hat I\hat A|\psi\rangle
=\langle\psi|\hat A^2|\psi\rangle.
\end{aligned}
$$

This step uses completeness. For an unbounded operator, retain the stated domain assumption so that both applications of $\hat A$ and the expectation exist.

### Use Hermiticity to prove positivity

The adjoint rule and $\hat A^\dagger=\hat A$ give

$$
\langle\psi|\hat A|n\rangle
=\left(\langle n|\hat A^\dagger|\psi\rangle\right)^*
=\left(\langle n|\hat A|\psi\rangle\right)^*.
$$

Therefore each summand is a squared magnitude:

$$
\langle\hat A^2\rangle
=\sum_n|\langle n|\hat A|\psi\rangle|^2
=\lVert\hat A|\psi\rangle\rVert^2\ge0.
$$

### Identify the vector that must vanish

If the expectation is zero, the sum of nonnegative terms is zero. Hence $\langle n|\hat A|\psi\rangle=0$ for every basis ket. Expand the vector $\hat A|\psi\rangle$ in that basis:

$$
\hat A|\psi\rangle
=\hat I\hat A|\psi\rangle
=\sum_n|n\rangle\langle n|\hat A|\psi\rangle
=0.
$$

Equivalently, a vector has zero norm only when it is the zero vector. The reverse implication also holds: $\hat A|\psi\rangle=0$ makes the expectation zero.

> [!note] Correct vector in the proof
> The vanishing components are those of $\hat A|\psi\rangle$, expanded in the complete basis $\{|n\rangle\}$. The argument does not show that $\hat A|n\rangle=0$ for every basis ket, or that $\hat A$ is the zero operator.

The main idea is to recognize a squared norm. Once Hermiticity converts the two matrix elements into conjugates, positivity follows from Hilbert-space geometry; no diagonalization of the operator is needed. This proof also identifies exactly what vanishes when equality holds.

For an unbounded operator, the basis proof as written also assumes that every basis ket belongs to $D(\hat A)$, so the factors $\langle\psi|\hat A|n\rangle$ are defined. The condition on the state alone does not supply this basis-domain condition. Alternatively, expand the vector $\hat A|\psi\rangle$ by Parseval's identity and use its squared coefficients. That norm argument needs no action of $\hat A$ on the chosen basis kets.

For a matrix with diagonal entries $0$ and $1$, the first basis vector gives zero expectation of the square, although the operator is not zero. The equality condition identifies a state in the kernel, not all states. For an unbounded operator, taking the state in $D(\hat A^2)$ suffices for the displayed operator-square expectation. The norm $\lVert\hat A\psi\rVert^2$ itself needs only $\psi\in D(\hat A)$; this weaker quadratic-form statement should not be confused with the existence of $\hat A^2\psi$.

## Answer

The sum equals $\langle\hat A^2\rangle=\lVert\hat A|\psi\rangle\rVert^2\ge0$. It is zero if and only if $\hat A|\psi\rangle=0$, under the stated completeness and domain assumptions.
