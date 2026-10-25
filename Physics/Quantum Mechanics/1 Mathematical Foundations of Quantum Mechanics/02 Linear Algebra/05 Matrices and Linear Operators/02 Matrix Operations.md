---
title: "Matrix Operations"
---

> [!TLDR]
> Matrix multiplication represents composition and is generally not commutative. Taking an adjoint reverses product order, while the trace is invariant under cyclic rearrangement.

## Matrix product

The product $C=AB$ is defined by

$$
C_{ij}=\sum_k A_{ik}B_{kj}.
$$

It represents composition of operators: apply $\hat B$ first, then $\hat A$.

**Matrix multiplication is not commutative.** In general, $AB\ne BA$.

### Example — Noncommutativity

Let

$$
A=\begin{pmatrix}1&1\\0&0\end{pmatrix},
\qquad B=\begin{pmatrix}1&0\\1&0\end{pmatrix}.
$$

Then

$$
AB=\begin{pmatrix}2&0\\0&0\end{pmatrix},
\qquad BA=\begin{pmatrix}1&1\\1&1\end{pmatrix}.
$$

Thus, $AB\ne BA$. In quantum mechanics, this fact leads to the Heisenberg uncertainty relation (Chapter 10).

## Conjugate transpose — The adjoint matrix

The **adjoint matrix**, or **conjugate transpose**, of $A$ is $A^\dagger$, with entries

$$
(A^\dagger)_{ij}=A_{ji}^*.
$$

In operator terms, $A^\dagger$ is the unique operator satisfying $\langle A^\dagger u,v\rangle=\langle u,Av\rangle$ for all $u,v$.

Its properties are

$$
(A^\dagger)^\dagger=A. \tag{5.1}
$$

$$
(AB)^\dagger=B^\dagger A^\dagger.
\qquad\text{(The order is reversed.)} \tag{5.2}
$$

$$
(A+B)^\dagger=A^\dagger+B^\dagger. \tag{5.3}
$$

$$
(\alpha A)^\dagger=\alpha^*A^\dagger. \tag{5.4}
$$

## Trace

The **trace** of $A\in M_n(\mathbb{C})$ is the sum of its diagonal entries:

$$
\operatorname{Tr}A=\sum_{i=1}^{n}A_{ii}.
$$

The trace is invariant under a change of basis and under cyclic rearrangement:

$$
\operatorname{Tr}(U^\dagger A U)=\operatorname{Tr}A,
\qquad\operatorname{Tr}(AB)=\operatorname{Tr}(BA).
$$

> [!note]
> In the displayed basis-change formula, $U$ is unitary. For a general invertible basis-change matrix $S$, use $S^{-1}AS$; its trace also equals $\operatorname{Tr}A$.
