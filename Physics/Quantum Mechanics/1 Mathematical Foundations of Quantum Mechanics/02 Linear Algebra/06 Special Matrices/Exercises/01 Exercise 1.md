---
title: "Projector from a complex unit vector"
---

> [!TLDR]
> The outer product of a unit vector gives a Hermitian projector with eigenvalues zero and one.

Chapter 6: Special Matrices · Exercise 1 · Basic level

Back to [[06 Special Matrices/11 Exercises|Chapter 6 exercises]].

## Question

Let $v=(1,\mathrm{i})^T/\sqrt2\in\mathbb{C}^2$. Calculate the projector $P=vv^\dagger$ explicitly as a $2\times2$ matrix. Verify $P^2=P$ and $P^\dagger=P$.

## Worked solution

Take the conjugate transpose first. Complex conjugation changes the sign of the imaginary component:

$$
v=\frac1{\sqrt2}\begin{pmatrix}1\\\mathrm{i}\end{pmatrix},
\qquad
v^\dagger=\frac1{\sqrt2}\begin{pmatrix}1&-\mathrm{i}\end{pmatrix}.
$$

The outer product makes a matrix, with one entry for each pair of components:

$$
P=vv^\dagger
=\frac12
\begin{pmatrix}
1\cdot1&1\cdot(-\mathrm{i})\\
\mathrm{i}\cdot1&\mathrm{i}(-\mathrm{i})
\end{pmatrix}
=\frac12\begin{pmatrix}1&-\mathrm{i}\\\mathrm{i}&1\end{pmatrix}.
$$

To check idempotence, multiply the matrix by itself:

$$
\begin{aligned}
P^2
&=\frac14
\begin{pmatrix}
1+(-\mathrm{i})\mathrm{i}&-\mathrm{i}-\mathrm{i}\\
\mathrm{i}+\mathrm{i}&\mathrm{i}(-\mathrm{i})+1
\end{pmatrix}\\
&=\frac14\begin{pmatrix}2&-2\mathrm{i}\\2\mathrm{i}&2\end{pmatrix}
=P.
\end{aligned}
$$

The diagonal entries are real. The two off-diagonal entries are complex conjugates. Thus the conjugate transpose gives

$$
P^\dagger
=\frac12\begin{pmatrix}1&-\mathrm{i}\\\mathrm{i}&1\end{pmatrix}=P.
$$

These checks also follow from $v^\dagger v=(1+1)/2=1$: applying $P$ twice gives $vv^\dagger vv^\dagger=v(v^\dagger v)v^\dagger=P$. The matrix projects onto the one-dimensional subspace spanned by $v$.

## Answer

$$
\boxed{P=\frac12\begin{pmatrix}1&-\mathrm{i}\\\mathrm{i}&1\end{pmatrix},
\qquad P^2=P,\qquad P^\dagger=P.}
$$
