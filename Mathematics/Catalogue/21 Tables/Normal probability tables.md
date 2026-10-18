---
title: "Standard normal tables and quantiles"
catalogue_ids:
  - "21.17"
---

> [!TLDR]
> A standard normal table converts a z-score into cumulative probability; symmetry and complements give intervals, upper tails, and central cutoffs.

## The standard normal distribution

The standard normal random variable $Z$ has mean 0, variance 1, and density

$$
\phi(z)=\frac1{\sqrt{2\pi}}e^{-z^2/2}.
$$

A density is not a point probability. The area under it over an interval is the interval's probability. In particular, $P(Z=z)=0$ for each individual real $z$, even where the density is largest. Define the cumulative distribution function

$$
\Phi(z)=P(Z\le z)=\int_{-\infty}^z\phi(u)\,du.
$$

The density integrates to one by the Gaussian integral discussed in [[Gamma function tables]]. The definitions agree with the [NIST normal distribution reference](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3661.htm). A normal model is an assumption about a distribution, not a property proved by converting data to z-scores.

## Read the probability heading

This table gives **left cumulative probability** $\Phi(z)$, rounded to six places. Some printed tables instead give area from 0 to $z$ or area to the right. Those numbers differ even at the same $z$.

| $z$ | $\Phi(z)$ | Right tail $1-\Phi(z)$ |
| --- | --- | --- |
| 0 | 0.500000 | 0.500000 |
| 0.5 | 0.691462 | 0.308538 |
| 1 | 0.841345 | 0.158655 |
| 1.5 | 0.933193 | 0.066807 |
| 1.96 | 0.975002 | 0.024998 |
| 2 | 0.977250 | 0.022750 |
| 2.576 | 0.995002 | 0.004998 |

Since $\phi(-z)=\phi(z)$, symmetry gives $\Phi(-z)=1-\Phi(z)$. Subtraction gives $P(a<Z<b)=\Phi(b)-\Phi(a)$. Continuous distributions have zero endpoint probability, so open and closed interval endpoints give the same result.

## Quantiles and central intervals

The $p$-quantile $z_p$ solves $\Phi(z_p)=p$ for $0<p<1$. It reverses the direction of a lookup: a CDF starts from a threshold; a quantile starts from a probability. Useful rounded quantiles are

| Left probability $p$ | $z_p$ | Meaning |
| --- | --- | --- |
| 0.90 | 1.281552 | 10% remains to the right |
| 0.95 | 1.644854 | 5% remains to the right |
| 0.975 | 1.959964 | 2.5% remains to the right |
| 0.995 | 2.575829 | 0.5% remains to the right |

For a central probability $1-\alpha$, symmetry puts $\alpha/2$ in each tail. The upper cutoff is $z_{1-\alpha/2}$, not $z_{1-\alpha}$. Thus the central 95% standard normal interval is approximately $[-1.959964,1.959964]$. A one-sided 95th percentile is approximately 1.644854. Both are correct answers to different questions.

![[catalogue-ch21-quantile-areas.svg|**Fig. C.ch21.2** Probability is split into two tails and a central interval; each cutoff is labelled by its left cumulative probability.]]

The diagram is an area-accounting strip, not a density graph. Its tail widths show probabilities. The vertical boundaries represent quantiles. It explains why a two-sided 5% total tail uses the 0.975 upper quantile.

## Worked example: standardize an input

If $X$ is normal with mean $\mu=50$ and standard deviation $\sigma=4$, then $Z=(X-50)/4$ is standard normal. These numbers are abstract scores, with no physical units. To find $P(46<X<58)$, convert both limits:

$$
\frac{46-50}{4}=-1,\qquad\frac{58-50}{4}=2.
$$

Therefore $P(46<X<58)=\Phi(2)-\Phi(-1)\approx0.977250-0.158655=0.818595$. Using the mean alone would not locate either limit. Dividing by the variance 16 instead of the standard deviation 4 would also be wrong.

To find the 95th percentile of $X$, reverse the standardization: $x_{0.95}=50+4z_{0.95}\approx56.579416$. This is a one-sided percentile, not the upper endpoint of a central 95% interval.

## Practical limits

A short table supports interpolation only at its stated accuracy. In a far tail, subtracting a CDF close to 1 can lose significant digits. Numerical software often provides a survival function $P(Z>z)$ directly to avoid this cancellation. A normal approximation to a discrete count also needs justification and may need a continuity correction; the formula for a z-score alone does not justify that approximation.

## Practice

1. Use the table to find $P(-1.5<Z<1.5)$.
2. For normal $X$ with $\mu=10$, $\sigma=2$, find the central 90% interval.

> [!example]- Worked answers
> 1. Symmetry gives $2\Phi(1.5)-1\approx2(0.933193)-1=0.866386$.
> 2. Put 0.05 in each tail, so the cutoff is $z_{0.95}\approx1.644854$. The endpoints are $10\pm2(1.644854)$, approximately 6.710292 and 13.289708.
