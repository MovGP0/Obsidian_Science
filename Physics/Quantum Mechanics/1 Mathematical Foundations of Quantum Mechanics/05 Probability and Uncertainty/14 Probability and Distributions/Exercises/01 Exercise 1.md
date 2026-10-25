---
title: "Moments and deviations of a discrete distribution"
---

> [!TLDR]
> Use weighted sums to find the mean and variance, then check which outcomes pass the strict deviation threshold.

Chapter 14 · Exercise 1 · Basic level

Back to [[14 Probability and Distributions/08 Exercises|Chapter 14 exercises]] · [[14 Probability and Distributions/00 Probability and Distributions|Chapter 14 overview]].

## Question

Consider the discrete distribution $P(0)=1/4$, $P(1)=1/2$, and $P(2)=1/4$.

**(a)** Calculate $\langle X\rangle$, $\langle X^2\rangle$, and $\sigma_X$.

**(b)** What is the probability that $X$ differs from its mean by **more than** $\sigma_X$?

## Worked solution

### (a) Weighted moments and standard deviation

For a discrete random variable, multiply each value by its probability and add the results:

$$
\langle X\rangle=\sum_x xP(x)
=0\cdot\frac14+1\cdot\frac12+2\cdot\frac14=1.
$$

For the second moment, square the value before taking the weighted sum:

$$
\langle X^2\rangle=0^2\cdot\frac14+1^2\cdot\frac12+2^2\cdot\frac14
=\frac12+1=\frac32.
$$

The variance measures the mean squared distance from the mean. The moment identity gives

$$
\sigma_X^2=\langle X^2\rangle-\langle X\rangle^2
=\frac32-1=\frac12,
\qquad \sigma_X=\frac1{\sqrt2}.
$$

### (b) Probability beyond one standard deviation

Check each possible outcome against the strict inequality:

$$
|0-1|=1>\frac1{\sqrt2},\qquad
|1-1|=0<\frac1{\sqrt2},\qquad
|2-1|=1>\frac1{\sqrt2}.
$$

Only the first and last outcomes qualify. They are disjoint, so their probabilities add:

$$
P\left(|X-\langle X\rangle|>\sigma_X\right)
=P(X=0)+P(X=2)=\frac14+\frac14=\frac12.
$$

No outcome is exactly one standard deviation from the mean. Thus a non-strict threshold would give the same result in this example. Chebyshev’s general bound at one standard deviation is only $P\leq1$; the exact probability gives more information.

## Answer

$$
\boxed{\langle X\rangle=1,\quad \langle X^2\rangle=\frac32,\quad
\sigma_X=\frac1{\sqrt2},\quad P(|X-1|>1/\sqrt2)=\frac12.}
$$
