---
title: "Exponential moments and Chebyshev’s inequality"
---

> [!TLDR]
> Normalize an exponential density, derive its moments, and compare its exact tail probability with Chebyshev’s bound.

Chapter 14 · Exercise 2 · Basic level

Back to [[14 Probability and Distributions/08 Exercises|Chapter 14 exercises]] · [[14 Probability and Distributions/00 Probability and Distributions|Chapter 14 overview]].

## Question

Let $\rho(x)=Ce^{-\lambda x}$ for $x\ge0$, and zero otherwise, with $\lambda>0$.

**(a)** Determine $C$ from normalization.

**(b)** Calculate $\langle X\rangle$ and $\sigma_X$.

**(c)** Verify Chebyshev’s inequality for $k=2$.

## Worked solution

### (a) Normalization

The density vanishes for negative values. Its integral over the remaining half-line must be one:

$$
1=C\int_0^\infty e^{-\lambda x}\,dx
=C\left[-\frac{e^{-\lambda x}}\lambda\right]_0^\infty
=\frac C\lambda.
$$

The upper boundary term is zero because $\lambda>0$. Therefore $C=\lambda$.

### (b) First and second moments

To evaluate both moments by the same method, define the integral helper

$$
I_j=\int_0^\infty x^j e^{-\lambda x}\,dx,\qquad I_0=\frac1\lambda.
$$

Integration by parts with $u=x^j$ and $dv=e^{-\lambda x}dx$ gives, for positive integers $j$,

$$
I_j=\left[-\frac{x^je^{-\lambda x}}\lambda\right]_0^\infty
+\frac j\lambda\int_0^\infty x^{j-1}e^{-\lambda x}\,dx
=\frac j\lambda I_{j-1}.
$$

The exponential makes the upper boundary term zero, and $x^j=0$ at the lower boundary. Thus

$$
I_1=\frac1{\lambda^2},\qquad I_2=\frac2{\lambda^3}.
$$

Multiply by the normalization coefficient to obtain the moments:

$$
\langle X\rangle=\lambda I_1=\frac1\lambda,
\qquad \langle X^2\rangle=\lambda I_2=\frac2{\lambda^2}.
$$

Hence

$$
\sigma_X^2=\frac2{\lambda^2}-\left(\frac1\lambda\right)^2
=\frac1{\lambda^2},\qquad \sigma_X=\frac1\lambda.
$$

### (c) Exact tail and Chebyshev’s bound

Chebyshev’s inequality for a finite-variance distribution states

$$
P(|X-\langle X\rangle|\geq k\sigma_X)\leq\frac1{k^2}.
$$

At $k=2$, the event splits into two branches:

$$
\left|X-\frac1\lambda\right|\geq\frac2\lambda
\quad\Longleftrightarrow\quad
X\leq-\frac1\lambda\ \text{or}\ X\geq\frac3\lambda.
$$

The first branch has zero probability because the density has support only at $X\geq0$. Integrate the upper branch:

$$
P\left(X\geq\frac3\lambda\right)
=\int_{3/\lambda}^\infty\lambda e^{-\lambda x}\,dx
=\left[-e^{-\lambda x}\right]_{3/\lambda}^\infty
=e^{-3}\approx0.04979<\frac14.
$$

This verifies the inequality. The exact exponential tail is smaller than the general bound. A single endpoint has zero probability for this continuous density, so strict and non-strict thresholds agree.

## Answer

$$
\boxed{C=\lambda,\quad \langle X\rangle=\frac1\lambda,
\quad \langle X^2\rangle=\frac2{\lambda^2},\quad \sigma_X=\frac1\lambda.}
$$

At two standard deviations, the exact tail is $e^{-3}\approx0.04979\leq1/4$.
