---
title: "Orthonormal expansion and the Parseval identity"
---

> [!TLDR]
> Orthonormality extracts each expansion coefficient and removes the cross terms in the squared norm.

Chapter 4 — Vectors and Vector Spaces · Exercise 9 · Challenge level

Back to [[04 Vectors and Vector Spaces/09 Exercises|Chapter 4 exercise index]].

## Question

If $\{e_1,\ldots,e_n\}$ is an orthonormal basis of $V$, prove that for every $v\in V$,

$$
v=\sum_{i=1}^{n}\langle e_i,v\rangle e_i,
\qquad
\|v\|^2=\sum_{i=1}^{n}|\langle e_i,v\rangle|^2.
$$

The second equality is **Parseval's identity**.

## Worked solution

### Extract the coefficients

Since $\{e_1,\ldots,e_n\}$ is a basis, every $v\in V$ has a unique expansion

$$
v=\sum_{i=1}^n c_i e_i.
$$

Apply $\langle e_j,\cdot\rangle$ to this expression. The second slot is linear, so its scalar coefficients are not conjugated:

$$
\begin{aligned}
\langle e_j,v\rangle
&=\sum_{i=1}^n c_i\langle e_j,e_i\rangle\\
&=\sum_{i=1}^n c_i\delta_{ji}=c_j.
\end{aligned}
$$

Orthonormality makes every term with $i\ne j$ zero and leaves the term with $i=j$ unchanged. Substitute these coefficients into the expansion:

$$
v=\sum_{i=1}^n\langle e_i,v\rangle e_i.
$$

### Calculate the squared norm

Use the expansion in both slots:

$$
\begin{aligned}
\|v\|^2
&=\left\langle\sum_{i=1}^n c_i e_i,
\sum_{j=1}^n c_j e_j\right\rangle\\
&=\sum_{i=1}^n\sum_{j=1}^n
\overline{c_i}c_j\langle e_i,e_j\rangle\\
&=\sum_{i=1}^n\sum_{j=1}^n
\overline{c_i}c_j\delta_{ij}\\
&=\sum_{i=1}^n\overline{c_i}c_i
=\sum_{i=1}^n|c_i|^2.
\end{aligned}
$$

The first-slot coefficients are conjugated. This step is essential: $\overline{c_i}c_i$ is a nonnegative real number, whereas $c_i^2$ need not be. Orthogonality removes all cross terms with unequal indices. Unit normalization leaves each diagonal term with factor one. Finally, replace $c_i$ by the inner product found above:

$$
\|v\|^2=\sum_{i=1}^n|\langle e_i,v\rangle|^2.
$$

Thus an orthonormal coordinate expansion preserves the squared norm. The basis assumption ensures that no component of $v$ lies outside the span.

## Answer

$v=\sum_{i=1}^n\langle e_i,v\rangle e_i$ and $\|v\|^2=\sum_{i=1}^n|\langle e_i,v\rangle|^2$.
