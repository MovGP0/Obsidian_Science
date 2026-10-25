---
title: "Linear independence does not imply orthogonality"
---

> [!TLDR]
> The two vectors are linearly independent, but their nonzero inner product shows that they are not orthogonal.

Chapter 4 — Vectors and Vector Spaces · Exercise 3 · Basic level

Back to [[04 Vectors and Vector Spaces/09 Exercises|Chapter 4 exercise index]].

## Question

Are $v_1=(1,0)^T$ and $v_2=(1,\mathrm{i})^T$ in $\mathbb{C}^2$ linearly independent? Are they orthogonal?

## Worked solution

### Linear independence

Test a linear combination with complex scalars $a,b$:

$$
a\begin{pmatrix}1\\0\end{pmatrix}
+b\begin{pmatrix}1\\\mathrm i\end{pmatrix}
=\begin{pmatrix}a+b\\\mathrm i b\end{pmatrix}
=\begin{pmatrix}0\\0\end{pmatrix}.
$$

The second component gives $\mathrm i b=0$. Since $\mathrm i\ne0$, division by $\mathrm i$ gives $b=0$. The first component then gives $a+b=a=0$. Only the zero coefficients produce the zero vector. Thus the vectors are linearly independent.

### Orthogonality

Use the complex inner product:

$$
\langle v_1,v_2\rangle
=\overline1\cdot1+\overline0\cdot\mathrm i=1.
$$

Orthogonality requires zero, so these vectors are not orthogonal. Linear independence excludes scalar dependence; it does not require a right angle in the inner-product sense.

## Answer

The vectors are linearly independent and are not orthogonal.
