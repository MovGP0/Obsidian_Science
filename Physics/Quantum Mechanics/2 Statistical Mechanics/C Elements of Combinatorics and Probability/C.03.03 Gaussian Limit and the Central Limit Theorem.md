---
title: "Gaussian Limit and the Central Limit Theorem"
source_chapter: "C"
source_section: "C.3.3"
source_page: 485
---

> [!TLDR]
> The central limit theorem gives Gaussian fluctuations for sums of independent, identically distributed variables with finite nonzero variance.

The question is how the fluctuations of a sum scale when more contributions are added. Independence makes its variance grow in proportion to $N$, so its standard deviation grows as $\sqrt N$. Subtracting the mean and dividing by that standard deviation produces a variable with no units and a nontrivial limiting spread. The theorem below concerns this rescaled distribution, not pointwise convergence of every probability density.

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

More explicitly, independence gives a product of $N$ characteristic functions. Taking its logarithm converts that product into a sum:

$$
\ln\varphi_{Z_N}(t)
=N\ln\varphi_X\!\left(\frac{t}{\sigma\sqrt N}\right)
-\frac{iN\mu t}{\sigma\sqrt N}
=-\frac{t^2}{2}+o(1).
$$

For each fixed $t$, the centring term cancels the linear contribution. Multiplying the quadratic term by $N$ leaves a finite limit, while $N\,o(1/N)$ vanishes. Use the logarithm branch continuous near the origin, where the characteristic function equals one. The continuity theorem for characteristic functions then gives convergence in distribution. This explains why a Fourier-transform method handles many different input laws at once.

> [!note] Source clarification
> The source uses an $O(s^3)$ remainder. A finite second moment gives the $o(s^2)$ remainder above; a cubic bound needs additional moment assumptions.

The Gaussian binomial formula is a local approximation to an integer probability near the mean; integrating the density over a bin of width one gives the same leading value. Use a half-integer continuity correction when approximating a cumulative integer probability. This does not make the approximation reliable near the hard boundaries or far into a tail.

As a check, if each input is already Gaussian, the normalized sum is exactly standard normal for every $N$. Without independence, extra covariance terms enter the variance. Without finite variance, the stated normalization and theorem can fail. Predict the outcome for a rare-event binomial sequence with fixed finite $Np$: it approaches Poisson, so a Gaussian conclusion needs a further large-mean limit.

## Physical implications

The theorem explains Gaussian fluctuations of extensive quantities when the system can be treated as many independent contributions, or when suitable weak-dependence conditions hold. Relative fluctuations then decrease in the thermodynamic limit.

Here a relative fluctuation means the standard deviation divided by the magnitude of a nonzero extensive mean. For the independent, identically distributed sum with $\mu\ne0$, this ratio is $\sigma/(|\mu|\sqrt N)$. For a centred sum with zero mean, that ratio is undefined; its fluctuations divided by $N$ still scale as $N^{-1/2}$.

> [!note] Source clarification
> The source also states that macroscopic relative deviations have probability of order $e^{-N}$. This requires a suitable large-deviation principle and is not a consequence of the finite-variance central limit theorem alone. The central limit theorem controls deviations on the square-root scale, rather than arbitrary macroscopic tails.
