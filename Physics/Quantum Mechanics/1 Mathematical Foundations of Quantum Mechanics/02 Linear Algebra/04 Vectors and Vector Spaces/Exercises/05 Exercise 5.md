---
title: "Gram–Schmidt in a two-dimensional complex space"
---

> [!TLDR]
> Normalize the first vector, subtract its projection from the second, and normalize the remaining orthogonal vector.

Chapter 4 — Vectors and Vector Spaces · Exercise 5 · Intermediate level

Back to [[04 Vectors and Vector Spaces/09 Exercises|Chapter 4 exercise index]].

## Question

Apply Gram–Schmidt to $v_1=(1,1)^T$ and $v_2=(0,1)^T$ in $\mathbb{C}^2$. Verify that the resulting vectors $e_1,e_2$ satisfy $\langle e_i,e_j\rangle=\delta_{ij}$.

## Worked solution

### Normalize the first vector

The first vector has norm

$$
\|v_1\|=\sqrt{|1|^2+|1|^2}=\sqrt2.
$$

Thus

$$
e_1=\frac{v_1}{\|v_1\|}
=\frac1{\sqrt2}\begin{pmatrix}1\\1\end{pmatrix}.
$$

### Remove the component parallel to the first vector

For a normalized vector $e_1$, the projection coefficient is $\langle e_1,v_2\rangle$. Compute it before subtracting the projection:

$$
\langle e_1,v_2\rangle
=\frac1{\sqrt2}\cdot0+\frac1{\sqrt2}\cdot1
=\frac1{\sqrt2}.
$$

Therefore

$$
\begin{aligned}
u_2
&=v_2-\langle e_1,v_2\rangle e_1\\
&=\begin{pmatrix}0\\1\end{pmatrix}
-\frac12\begin{pmatrix}1\\1\end{pmatrix}
=\begin{pmatrix}-1/2\\1/2\end{pmatrix}.
\end{aligned}
$$

This subtraction removes exactly the part along $e_1$. Indeed,

$$
\langle e_1,u_2\rangle
=\langle e_1,v_2\rangle
-\langle e_1,v_2\rangle\langle e_1,e_1\rangle=0.
$$

### Normalize and verify

Since $\|u_2\|=\sqrt{1/4+1/4}=1/\sqrt2$,

$$
e_2=\frac{u_2}{\|u_2\|}
=\frac1{\sqrt2}\begin{pmatrix}-1\\1\end{pmatrix}.
$$

Now check all inner products:

$$
\langle e_1,e_1\rangle=\frac12+\frac12=1,
\qquad
\langle e_2,e_2\rangle=\frac12+\frac12=1,
$$

$$
\langle e_1,e_2\rangle=-\frac12+\frac12=0,
\qquad
\langle e_2,e_1\rangle=\overline0=0.
$$

These four results are exactly $\langle e_i,e_j\rangle=\delta_{ij}$.

## Answer

$e_1=(1,1)^T/\sqrt2$ and $e_2=(-1,1)^T/\sqrt2$ form an orthonormal basis.
