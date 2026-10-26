---
title: "Gaussian Limit and the Central Limit Theorem"
source_chapter: "C"
source_section: "C.3.3"
source_page: 485
---

> [!TLDR]
> The central limit theorem gives Gaussian fluctuations for sums of independent variables with finite variance.

**Theorem C.1: Central limit theorem.** Let $X_1,\ldots,X_N$ be independent identically distributed random variables with mean $\mu$ and finite nonzero variance $\sigma^2$. The normalized sum

$$
Z_N=\frac{\sum_{i=1}^NX_i-N\mu}{\sigma\sqrt N}
$$

converges in distribution to a standard normal variable $\mathcal N(0,1)$ as $N\to\infty$:

$$
P(Z_N\le z)\longrightarrow
\frac1{\sqrt{2\pi}}\int_{-\infty}^ze^{-t^2/2}\,dt.
\tag{C.1}
$$

## Gaussian limits of discrete distributions

For large $N$ with both $Np$ and $N(1-p)$ large, the binomial law near its central region is approximated by

$$
P_B(k;N,p)\approx
\frac1{\sqrt{2\pi Np(1-p)}}
\exp\left[-\frac{(k-Np)^2}{2Np(1-p)}\right].
$$

Likewise, a Poisson distribution with $\lambda\gg1$ approaches a Gaussian with mean and variance both equal to $\lambda$.

## Characteristic-function argument

The characteristic function is the Fourier transform of the probability distribution. Near the origin,

$$
\ln\varphi_X(s)=i\mu s-\frac12\sigma^2s^2+o(s^2).
$$

Evaluate it at $s=t/(\sigma\sqrt N)$ and centre the sum. The characteristic function of $Z_N$ tends to $e^{-t^2/2}$, the standard-normal characteristic function.

> [!note] Source clarification
> The source uses an $O(s^3)$ remainder. A finite second moment gives the $o(s^2)$ remainder above; a cubic bound needs additional moment assumptions.

## Physical implications

The theorem explains Gaussian fluctuations of extensive quantities when the system can be treated as many independent contributions, or when suitable weak-dependence conditions hold. Relative fluctuations then decrease in the thermodynamic limit.

> [!note] Source clarification
> The source also states that macroscopic relative deviations have probability of order $e^{-N}$. This requires a suitable large-deviation principle and is not a consequence of the finite-variance central limit theorem alone. The central limit theorem controls deviations on the square-root scale, rather than arbitrary macroscopic tails.
