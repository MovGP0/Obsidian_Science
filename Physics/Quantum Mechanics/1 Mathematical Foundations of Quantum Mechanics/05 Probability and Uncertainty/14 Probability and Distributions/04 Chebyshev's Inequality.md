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

The proof uses one idea: on the selected tail, the squared deviation is at least the squared threshold. Integrating over only that tail can therefore underestimate the total variance, but cannot overestimate it. No shape or independence assumption enters this argument.

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

For $0<k\le1$, the bound is at least one and gives no extra information beyond the probability axioms. For $k=2$, it can be exact: assign probabilities $1/8$, $3/4$, and $1/8$ to the values $-2$, $0$, and $2$. The mean is zero and the variance is one, while $P(|X|\ge2)=1/4$. This also shows why the boundary sign in the event matters. Reconstruct the example for any $k>1$ by placing total probability $1/k^2$ equally at $-k$ and $k$, with the rest at zero.
