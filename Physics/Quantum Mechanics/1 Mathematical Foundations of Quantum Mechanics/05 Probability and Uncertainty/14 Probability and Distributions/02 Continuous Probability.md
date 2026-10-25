---
title: "Continuous Probability"
---

> [!TLDR]
> A probability density gives interval probabilities through integration. Means and variances use the same weighted-moment structure as discrete probability, with integrals in place of sums.

> [!definition] Definition 14.3 | Probability density
> A probability density is a nonnegative integrable function $\rho:\mathbb R\to[0,\infty)$ such that
>
> $$
> \int_{-\infty}^{+\infty}\rho(x)\,dx=1.
> $$
>
> The interval probability is
>
> $$
> P(a\le X\le b)=\int_a^b\rho(x)\,dx.
> $$
>
> The expectation and variance are
>
> $$
> \langle X\rangle=\int_{-\infty}^{+\infty}x\rho(x)\,dx,
> $$
>
> $$
> \sigma_X^2=\int_{-\infty}^{+\infty}x^2\rho(x)\,dx
> -\left(\int_{-\infty}^{+\infty}x\rho(x)\,dx\right)^2.
> $$

Assume the stated moments are finite. A density is one way to describe a distribution; not every probability distribution has an ordinary density.

## Example — Uniform distribution on [a, b]

Let $a<b$. The density is $\rho(x)=1/(b-a)$ on $[a,b]$ and zero elsewhere.

$$
\langle X\rangle=\frac1{b-a}\int_a^b x\,dx=\frac{a+b}2,
$$

the midpoint of the interval. The second moment is

$$
\langle X^2\rangle=\frac1{b-a}\int_a^b x^2\,dx
=\frac{a^2+ab+b^2}3.
$$

Therefore,

$$
\sigma_X^2=\frac{a^2+ab+b^2}3-\frac{(a+b)^2}4
=\frac{(b-a)^2}{12},
\qquad\sigma_X=\frac{b-a}{2\sqrt3}.
$$
