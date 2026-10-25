---
title: "The Pauli matrix commutator"
---

> [!TLDR]
> Direct matrix multiplication gives the Pauli commutator and fixes its sign.

Chapter 10 — Commutators and Operator Algebra · Exercise 2 · Basic level.

Back to [[10 Commutators and Operator Algebra/08 Exercises|Chapter 10 exercises]].

## Question

Verify $[\sigma_z,\sigma_x]=2i\sigma_y$ by calculating the products $\sigma_z\sigma_x$ and $\sigma_x\sigma_z$ explicitly.

## Worked solution

Write the three Pauli matrices explicitly:

$$
\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},
\qquad
\sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},
\qquad
\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
$$

Multiply in the first order, using each row of $\sigma_z$ and each column of $\sigma_x$:

$$
\begin{aligned}
\sigma_z\sigma_x
&=\begin{pmatrix}
1\cdot0+0\cdot1&1\cdot1+0\cdot0\\
0\cdot0-1\cdot1&0\cdot1-1\cdot0
\end{pmatrix}\\
&=\begin{pmatrix}0&1\\-1&0\end{pmatrix}.
\end{aligned}
$$

Reverse the order:

$$
\begin{aligned}
\sigma_x\sigma_z
&=\begin{pmatrix}
0\cdot1+1\cdot0&0\cdot0-1\cdot1\\
1\cdot1+0\cdot0&1\cdot0-0\cdot1
\end{pmatrix}\\
&=\begin{pmatrix}0&-1\\1&0\end{pmatrix}.
\end{aligned}
$$

The commutator is the first product minus the second product:

$$
[\sigma_z,\sigma_x]
=\begin{pmatrix}0&2\\-2&0\end{pmatrix}.
$$

To compare this with the required form, multiply each entry of $\sigma_y$ by $2i$:

$$
2i\sigma_y=\begin{pmatrix}0&2i(-i)\\2i(i)&0\end{pmatrix}
=\begin{pmatrix}0&2\\-2&0\end{pmatrix}.
$$

## Answer

$$
\sigma_z\sigma_x=\begin{pmatrix}0&1\\-1&0\end{pmatrix},
\qquad
\sigma_x\sigma_z=\begin{pmatrix}0&-1\\1&0\end{pmatrix},
\qquad
[\sigma_z,\sigma_x]=2i\sigma_y.
$$
