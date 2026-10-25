---
title: "Pauli exponential and a half-turn about y"
---

> [!TLDR]
> Separate even and odd powers of the Pauli matrix to calculate the rotation and its basis-state phases.

Chapter: [[11 Unitary Operators/00 Unitary Operators|Chapter 11 — Unitary Operators]]. Exercise 1. Difficulty: **Basic level**.

Back to [[11 Unitary Operators/08 Exercises#Exercise 1|Chapter 11 exercise index]].

## Question

Calculate $e^{i\signal{\theta}\sigma_y/2}$ using $\sigma_y^2=\hat I$. For $\signal{\theta}=\pi$, verify the expected action on $|\uparrow\rangle$ and $|\downarrow\rangle$.

## Worked solution

The identity $\sigma_y^2=\hat I$ reduces every even power to $\hat I$ and every odd power to $\sigma_y$. This lets us identify the cosine and sine series:

$$
\begin{aligned}
e^{i\signal{\theta}\sigma_y/2}
&=\sum_{r=0}^{\infty}\frac{(-1)^r(\signal{\theta}/2)^{2r}}{(2r)!}\hat I
+i\sum_{r=0}^{\infty}\frac{(-1)^r(\signal{\theta}/2)^{2r+1}}{(2r+1)!}\sigma_y\\
&=\cos(\signal{\theta}/2)\hat I+i\sin(\signal{\theta}/2)\sigma_y.
\end{aligned}
$$

Use $\sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$. Then

$$
e^{i\signal{\theta}\sigma_y/2}
=\begin{pmatrix}\cos(\signal{\theta}/2)&\sin(\signal{\theta}/2)\\-\sin(\signal{\theta}/2)&\cos(\signal{\theta}/2)\end{pmatrix}.
$$

At $\signal{\theta}=\pi$, use the basis columns $|\uparrow\rangle=(1,0)^{\mathsf T}$ and $|\downarrow\rangle=(0,1)^{\mathsf T}$:

$$
\begin{pmatrix}0&1\\-1&0\end{pmatrix}\begin{pmatrix}1\\0\end{pmatrix}
=\begin{pmatrix}0\\-1\end{pmatrix}=-|\downarrow\rangle,
\qquad
\begin{pmatrix}0&1\\-1&0\end{pmatrix}\begin{pmatrix}0\\1\end{pmatrix}
=\begin{pmatrix}1\\0\end{pmatrix}=|\uparrow\rangle.
$$

The plus sign in the given exponential matters. With the convention $R_y(\signal{\theta})=e^{-i\signal{\theta}\sigma_y/2}$, the given operator is $R_y(-\signal{\theta})$. Both half-turns exchange the two spin directions, but their displayed phases differ. Each basis state has an unobservable overall phase; relative phases must still be kept for a superposition.

## Answer

$$
e^{i\signal{\theta}\sigma_y/2}=\cos(\signal{\theta}/2)\hat I+i\sin(\signal{\theta}/2)\sigma_y.
$$

For $\signal{\theta}=\pi$, $|\uparrow\rangle\mapsto-|\downarrow\rangle$ and $|\downarrow\rangle\mapsto|\uparrow\rangle$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\theta}$ | $1$ | Rotation angle | The angle parameter in the Pauli exponential. |
