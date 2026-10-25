---
title: "Why a complex inner product needs conjugation"
---

> [!TLDR]
> Removing conjugation gives a bilinear map that fails conjugate-linearity, Hermitian symmetry, and positive definiteness.

Chapter 4 — Vectors and Vector Spaces · Exercise 10 · Challenge level

Back to [[04 Vectors and Vector Spaces/09 Exercises|Chapter 4 exercise index]].

## Question

Let $V=\mathbb{C}^2$ with the standard inner product. Define a new map

$$
\langle u,v\rangle'=\sum_i u_iv_i,
$$

without conjugation of the first factor. Does this new map satisfy all inner-product axioms? In particular, check whether $\langle v,v\rangle'\ge0$ for every $v$.

## Worked solution

The proposed expression is bilinear: it is linear in each argument. A complex inner product under the chapter convention must instead be conjugate-linear in its first argument, linear in its second, Hermitian symmetric, and positive definite.

### Conjugate-linearity fails

Let $e=(1,0)^T$. The proposed map gives

$$
\langle\mathrm i e,e\rangle'=\mathrm i.
$$

Conjugate-linearity would require

$$
\langle\mathrm i e,e\rangle'
=\overline{\mathrm i}\langle e,e\rangle'
=-\mathrm i.
$$

The results differ. The new map does satisfy ordinary linearity in the second argument, but that property alone is insufficient.

### Hermitian symmetry fails

Take $u=(\mathrm i,0)^T$ and $v=(1,0)^T$. Then

$$
\langle u,v\rangle'=\mathrm i,
\qquad
\langle v,u\rangle'=\mathrm i,
\qquad
\overline{\langle v,u\rangle'}=-\mathrm i.
$$

The map is symmetric under interchange, but it is not Hermitian symmetric. Hermitian symmetry requires complex conjugation as well as interchange.

### Positivity fails

For the nonzero vector $v=(\mathrm i,0)^T$,

$$
\langle v,v\rangle'=\mathrm i^2=-1<0.
$$

Thus the requested inequality fails. There are two further ways to see the same problem. For $v=(1+\mathrm i,0)^T$,

$$
\langle v,v\rangle'=(1+\mathrm i)^2=2\mathrm i,
$$

which is not even real, so it has no ordering as a nonnegative real number. For the nonzero vector $v=(1,\mathrm i)^T$,

$$
\langle v,v\rangle'=1+\mathrm i^2=0.
$$

This also violates the requirement that only zero has zero squared norm. Conjugation prevents these failures in the standard product:

$$
\langle v,v\rangle
=\sum_i\overline{v_i}v_i
=\sum_i|v_i|^2\ge0,
$$

with equality only when every component vanishes.

## Answer

No. The proposed map is not a complex inner product. For $v=(\mathrm i,0)^T$, it gives $\langle v,v\rangle'=-1$; it also fails conjugate-linearity and Hermitian symmetry.
