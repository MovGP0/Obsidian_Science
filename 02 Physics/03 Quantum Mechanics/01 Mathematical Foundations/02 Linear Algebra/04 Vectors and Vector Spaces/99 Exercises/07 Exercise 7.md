---
title: "Triangle inequality from Cauchy–Schwarz"
---

> [!TLDR]
> Bound the real cross term by its magnitude, apply Cauchy–Schwarz, and take nonnegative square roots.

Chapter 4 — Vectors and Vector Spaces · Exercise 7 · Intermediate level

Back to [[04 Vectors and Vector Spaces/09 Exercises|Chapter 4 exercise index]].

## Question

Use the Cauchy–Schwarz inequality to prove the triangle inequality

$$
\|u+v\|\le\|u\|+\|v\|.
$$

## Worked solution

Start with the squared norm. Linearity and conjugate-linearity distribute over the sum:

$$
\begin{aligned}
\|u+v\|^2
&=\langle u+v,u+v\rangle\\
&=\langle u,u\rangle+\langle u,v\rangle
+\langle v,u\rangle+\langle v,v\rangle\\
&=\|u\|^2+2\operatorname{Re}\langle u,v\rangle+\|v\|^2.
\end{aligned}
$$

The last equality uses Hermitian symmetry: a complex number plus its conjugate is twice its real part.

For every complex number $z$, $\operatorname{Re}z\le|z|$. One way to see this is to write $z=x+\mathrm i y$. If $x<0$, the inequality is immediate because $|z|\ge0$. If $x\ge0$, use $x^2\le x^2+y^2$ and take square roots. Thus

$$
\|u+v\|^2
\le\|u\|^2+2|\langle u,v\rangle|+\|v\|^2.
$$

Cauchy–Schwarz gives

$$
|\langle u,v\rangle|
\le\sqrt{\langle u,u\rangle\langle v,v\rangle}
=\|u\|\|v\|.
$$

Substitute this bound and recognize a square:

$$
\begin{aligned}
\|u+v\|^2
&\le\|u\|^2+2\|u\|\|v\|+\|v\|^2\\
&=(\|u\|+\|v\|)^2.
\end{aligned}
$$

Both $\|u+v\|$ and $\|u\|+\|v\|$ are nonnegative. The square-root function preserves order on nonnegative real numbers, so taking square roots proves the required result. This argument also covers either vector being zero.

## When is the bound sharp?

For nonzero vectors, equality requires equality in both bounds: the vectors must be dependent and $\langle u,v\rangle$ must be nonnegative real. Thus $v$ must be a nonnegative real multiple of $u$. Dependence alone is insufficient. Take $v=-u\ne0$: the left side is zero, while the right side is $2\|u\|$. Take $v=\mathrm{i}u$: the left side is $\sqrt2\|u\|$, also below $2\|u\|$.

This matters for superpositions: their lengths depend on relative phase, even when the separate vectors have fixed lengths. The inequality bounds the sum; it does not normalize it.

## Answer

$\|u+v\|\le\|u\|+\|v\|$ for every pair of vectors in an inner-product space.
