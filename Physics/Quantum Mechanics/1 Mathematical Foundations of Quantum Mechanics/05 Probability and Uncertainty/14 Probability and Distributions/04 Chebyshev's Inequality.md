---
title: "Chebyshev’s Inequality"
---

> [!TLDR]
> Chebyshev’s inequality bounds the probability of a large deviation using only the variance. It applies without assuming a normal distribution.

> [!theorem] Theorem 14.1 | Chebyshev’s inequality
> For a distribution with mean $\mu$, finite positive standard deviation $\sigma$, and every $k>0$,
>
> $$
> P(|X-\mu|\ge k\sigma)\le\frac1{k^2}.
> $$

**Proof for a density.** Since the squared deviation is nonnegative,

$$
\begin{aligned}
\sigma^2=\langle(X-\mu)^2\rangle
&\ge\int_{|x-\mu|\ge k\sigma}(x-\mu)^2\rho(x)\,dx\\
&\ge(k\sigma)^2P(|X-\mu|\ge k\sigma).
\end{aligned}
$$

Divide by $(k\sigma)^2$ to obtain the bound. $\square$

For a discrete distribution, the same proof uses a sum over the selected outcomes instead of an integral.

- For $k=2$, at least 75% of outcomes are within two standard deviations of the mean.
- For $k=3$, at least 88.9% are within three standard deviations.

> [!note]
> The source does not exclude $\sigma=0$. With its event written using “greater than or equal to,” substitution of zero makes the threshold zero and invalidates the displayed bound for $k>1$. The nondegenerate form above requires $\sigma>0$. If the variance is zero, $X=\mu$ with probability one, so the probability of exceeding any fixed positive deviation is zero.
