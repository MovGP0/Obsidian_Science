---
title: "Complex inner products and Hermitian symmetry"
---

> [!TLDR]
> Conjugate the first vector before multiplication; reversing the vectors conjugates the inner product.

Chapter 4 — Vectors and Vector Spaces · Exercise 2 · Basic level

Back to [[04 Vectors and Vector Spaces/09 Exercises|Chapter 4 exercise index]].

## Question

Calculate $\langle u,v\rangle$ for:

**(a)** $u=(1,\mathrm{i},0)^T$, $v=(\mathrm{i},1,1)^T$ in $\mathbb{C}^3$.

**(b)** $u=(3-\mathrm{i},2)^T$, $v=(1,3+\mathrm{i})^T$ in $\mathbb{C}^2$.

Verify Hermitian symmetry by calculating $\langle v,u\rangle$.

## Worked solution

Use the convention

$$
\langle u,v\rangle=\sum_j\overline{u_j}v_j.
$$

Conjugation changes $\mathrm i$ to $-\mathrm i$. It acts on the first vector only.

### (a) Three components

For $u=(1,\mathrm i,0)^T$, the conjugate row is $u^\dagger=(1,-\mathrm i,0)$. Therefore

$$
\langle u,v\rangle
=1\cdot\mathrm i+(-\mathrm i)\cdot1+0\cdot1
=\mathrm i-\mathrm i=0.
$$

Calculate the reverse product directly. Since $v^\dagger=(-\mathrm i,1,1)$,

$$
\langle v,u\rangle
=(-\mathrm i)\cdot1+1\cdot\mathrm i+1\cdot0
=0=\overline{\langle u,v\rangle}.
$$

The two nonzero imaginary terms cancel. The vectors are orthogonal because their inner product is zero.

### (b) Two components

Conjugating $3-\mathrm i$ gives $3+\mathrm i$. Hence

$$
\begin{aligned}
\langle u,v\rangle
&=(3+\mathrm i)\cdot1+2(3+\mathrm i)\\
&=3+\mathrm i+6+2\mathrm i=9+3\mathrm i.
\end{aligned}
$$

For the reverse product, conjugate $v$, not $u$:

$$
\begin{aligned}
\langle v,u\rangle
&=1\cdot(3-\mathrm i)+(3-\mathrm i)\cdot2\\
&=3-\mathrm i+6-2\mathrm i=9-3\mathrm i\\
&=\overline{\langle u,v\rangle}.
\end{aligned}
$$

Both direct calculations confirm Hermitian symmetry.

## Independent check

Cauchy–Schwarz gives a second check on (b). The squared norms are $14$ and $11$, while $|9+3\mathrm{i}|^2=90\le154$. This check would detect some arithmetic errors, but it cannot by itself verify the sign of the imaginary part; Hermitian symmetry supplies that separate check.

In (a), orthogonality comes from cancellation of complex contributions, not from disjoint nonzero components. This is the same algebra that makes interference possible in state overlaps. To test your convention, replace $u$ by $\mathrm{i}u$: the product must acquire $-\mathrm{i}$, not $+\mathrm{i}$.

## Answer

**(a)** $\langle u,v\rangle=\langle v,u\rangle=0$. **(b)** $\langle u,v\rangle=9+3\mathrm i$ and $\langle v,u\rangle=9-3\mathrm i$.
