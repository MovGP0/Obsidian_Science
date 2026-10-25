---
title: "Exponential of the Pauli z matrix"
---

> [!TLDR]
> Separate the even and odd powers to obtain the cosine and sine terms in the matrix exponential.

Chapter 5 · Exercise 6 · Intermediate level.

Back to [[05 Matrices and Linear Operators/08 Exercises#Exercise 6|Chapter 5 exercises]].

## Question

Calculate $\mathrm{e}^{\mathrm{i}\signal{\theta}\sigma_z}$ using the series

$$
\mathrm{e}^M=\sum_{n=0}^{\infty}\frac{M^n}{n!}
$$

and $\sigma_z^2=I$. Separate the terms with $\sigma_z^{2k}$ and $\sigma_z^{2k+1}$, and identify the cosine and sine series.

## Worked solution

Since $\sigma_z^2=I$, repeated multiplication gives $\sigma_z^{2k}=I$ and $\sigma_z^{2k+1}=\sigma_z$. Separate these two types of term in the exponential series:

$$
\begin{aligned}
\mathrm{e}^{\mathrm{i}\signal{\theta}\sigma_z}
&=\sum_{k=0}^\infty\frac{(\mathrm{i}\signal{\theta})^{2k}}{(2k)!}I
+\sum_{k=0}^\infty\frac{(\mathrm{i}\signal{\theta})^{2k+1}}{(2k+1)!}\sigma_z\\
&=I\sum_{k=0}^\infty\frac{(-1)^k\signal{\theta}^{2k}}{(2k)!}
+\mathrm{i}\sigma_z\sum_{k=0}^\infty\frac{(-1)^k\signal{\theta}^{2k+1}}{(2k+1)!}\\
&=\cos\signal{\theta}\,I+\mathrm{i}\sin\signal{\theta}\,\sigma_z.
\end{aligned}
$$

The first sum is the cosine series and the second is the sine series. This separation is valid because the finite-dimensional matrix exponential series converges absolutely. Substitute the diagonal form of $\sigma_z$:

$$
\mathrm{e}^{\mathrm{i}\signal{\theta}\sigma_z}
=\begin{pmatrix}\cos\signal{\theta}+\mathrm{i}\sin\signal{\theta}&0\\0&\cos\signal{\theta}-\mathrm{i}\sin\signal{\theta}\end{pmatrix}
=\begin{pmatrix}\mathrm{e}^{\mathrm{i}\signal{\theta}}&0\\0&\mathrm{e}^{-\mathrm{i}\signal{\theta}}\end{pmatrix}.
$$

## Answer

$\boxed{\mathrm{e}^{\mathrm{i}\signal{\theta}\sigma_z}=\cos\signal{\theta}\,I+\mathrm{i}\sin\signal{\theta}\,\sigma_z}$. Its diagonal entries are $\mathrm{e}^{\mathrm{i}\signal{\theta}}$ and $\mathrm{e}^{-\mathrm{i}\signal{\theta}}$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\theta}$ | $\unit{rad}$ | Phase parameter | The real parameter in the Pauli exponential. |
