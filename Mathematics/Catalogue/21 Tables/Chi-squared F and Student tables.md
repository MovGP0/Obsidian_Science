---
title: "Chi-squared, F, and Student t quantile tables"
catalogue_ids:
  - "21.18"
  - "21.19"
  - "21.20"
---

> [!TLDR]
> Chi-squared, F, and Student t tables need degrees of freedom and an explicit tail convention; their reference cutoffs depend on the statistical assumptions behind the calculation.

## Probability and degrees of freedom

Start with [[Normal probability tables]] for densities, cumulative probabilities, quantiles, and a standard normal variable $Z$. A **degree of freedom** counts independent normal components left after stated constraints. It is a distribution parameter, not the physical dimension of space. Throughout this article, $q_p$ means a **left cumulative** quantile: $P(X\le q_p)=p$. Many hypothesis-test tables instead label the right tail $\alpha=1-p$.

The constructions below use independent standard normal variables. Independence is an assumption about their joint distribution. It cannot be replaced by saying that their values happen to be different. Each construction gives a concrete definition before its use in a statistical test.

## Chi-squared distribution

For an integer $\nu\ge1$, define $V=Z_1^2+\cdots+Z_\nu^2$ from independent standard normals. Then $V$ has a chi-squared distribution with $\nu$ degrees of freedom, written $\chi^2_\nu$. It is nonnegative, with mean $\nu$ and variance $2\nu$. Its density is

$$
f(v)=\frac{v^{\nu/2-1}e^{-v/2}}{2^{\nu/2}\Gamma(\nu/2)},\qquad v>0.
$$

The gamma function is defined in [[Gamma function tables]]. The construction explains integer degrees of freedom; the density extends the distribution to any real $\nu>0$. [NIST chi-squared distribution](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3666.htm)

| Degrees of freedom $\nu$ | $q_{0.50}$ | $q_{0.95}$ |
| --- | --- | --- |
| 1 | 0.454936 | 3.841459 |
| 2 | 1.386294 | 5.991465 |

These small rows have independent checks. For $\nu=1$, $V=Z^2$, so $P(V\le v)=P(-\sqrt v\le Z\le\sqrt v)=2\Phi(\sqrt v)-1$. Therefore $q_p=[z_{(1+p)/2}]^2$. For $\nu=2$, integrate the density $e^{-v/2}/2$ to get CDF $1-e^{-v/2}$ and quantile $q_p=-2\ln(1-p)$.

For independent normal data $X_1,\ldots,X_n$ with unknown mean and variance $\sigma^2$, define the sample mean $\bar X=(\sum X_i)/n$ and sample variance $S^2=\sum(X_i-\bar X)^2/(n-1)$. Then $(n-1)S^2/\sigma^2$ is chi-squared with $n-1$ degrees of freedom. One linear constraint, $\sum(X_i-\bar X)=0$, explains the loss of one independent direction. A full distribution proof uses an orthogonal coordinate change; it is beyond the calculation needed to read this table. The normal and independence assumptions are necessary for this exact statement.

## Fisher F-distribution

Take independent $U\sim\chi^2_{\nu_1}$ and $V\sim\chi^2_{\nu_2}$. Then

$$
F=\frac{U/\nu_1}{V/\nu_2}
$$

has the F-distribution with numerator degrees $\nu_1$ and denominator degrees $\nu_2$. The order matters. If two independent normal samples estimate variances, their scaled variance ratio can have this distribution under an equal-variance assumption. It is not a generic model for every ratio. [NIST F-distribution](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3665.htm)

A useful exact row occurs at $(\nu_1,\nu_2)=(2,2)$. Its CDF is $P(F\le x)=x/(1+x)$ for $x\ge0$, so $q_p=p/(1-p)$.

| Left probability $p$ | F(2,2) quantile |
| --- | --- |
| 0.50 | 1 |
| 0.90 | 9 |
| 0.95 | 19 |
| 0.975 | 39 |

To derive this CDF directly, $U$ and $V$ both have density $e^{-v/2}/2$. Conditioning on $V=v$ gives $P(U\le xv)=1-e^{-xv/2}$. Its average over $v>0$ is $1-1/(1+x)=x/(1+x)$. This concrete case shows why the upper tail is much longer than a normal tail.

Reciprocation swaps the degrees of freedom: if $F\sim F_{\nu_1,\nu_2}$, then $1/F\sim F_{\nu_2,\nu_1}$. Hence $q_p(\nu_1,\nu_2)=1/q_{1-p}(\nu_2,\nu_1)$. This identity converts an upper-tail table into lower-tail values while also swapping its row and column degrees.

## Student t-distribution

Let $Z$ be standard normal and let $V\sim\chi^2_\nu$ be independent of $Z$. Define

$$
T=\frac Z{\sqrt{V/\nu}}.
$$

The random denominator produces heavier tails than a standard normal. The distribution is symmetric about zero, so $q_p=-q_{1-p}$. Its mean is zero for $\nu>1$, and its variance is $\nu/(\nu-2)$ for $\nu>2$; the variance does not exist for $\nu\le2$. Symmetry alone does not guarantee existence of a mean or variance. [NIST t-distribution](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3664.htm)

| Degrees of freedom $\nu$ | $q_{0.95}$ | $q_{0.975}$ |
| --- | --- | --- |
| 1 | 6.313752 | 12.706205 |
| 2 | 2.919986 | 4.302653 |
| 5 | 2.015048 | 2.570582 |
| 10 | 1.812461 | 2.228139 |

Values are rounded to six places. The 0.975 column is the upper cutoff for a central 95% interval, because each tail has probability 0.025. At $\nu=1$, the CDF is $1/2+\arctan t/\pi$, so the quantiles can be checked with a tangent. As degrees of freedom grow, t quantiles approach standard normal quantiles.

For independent normal observations with unknown mean $\mu$ and variance, the statistic $T=(\bar X-\mu)/(S/\sqrt n)$ has $\nu=n-1$ degrees of freedom. Here $S$ is the sample standard deviation, the positive square root of $S^2$. This gives a confidence procedure with interval $\bar X\pm q_{1-\alpha/2}S/\sqrt n$. Its repeated-sampling coverage is $1-\alpha$ under the model; it is not a probability assigned to a fixed unknown mean after observing the interval.

## Worked example: a mean interval

Suppose 11 independent normally distributed scores give $\bar x=20$ and $s=3$. There are 10 degrees of freedom. For a central 95% confidence procedure, the table gives $q_{0.975}=2.228139$. The margin is

$$
2.228139\frac3{\sqrt{11}}\approx2.01543.
$$

The interval is approximately $[17.98457,22.01543]$. Using the normal cutoff 1.96 would ignore uncertainty from estimating the standard deviation. Using the 0.95 column would put 5% in each tail and give central 90% coverage instead.

For a contrasting chi-squared lookup, a statistic $V=6.2$ with two degrees of freedom exceeds $q_{0.95}=5.991465$. The upper-tail probability is $e^{-6.2/2}\approx0.045049$. This is a probability under a specified reference model, not a probability that the model itself is true.

## Practice

1. Find the chi-squared two-degree 90th percentile exactly as a logarithm and approximately.
2. An F(2,2) value is 19. What is its upper-tail probability? What is its lower 5th percentile?
3. For six independent normal scores with mean 8 and sample standard deviation 2, give a central 95% mean interval.

> [!example]- Worked answers
> 1. $q_{0.90}=-2\ln0.1=2\ln10\approx4.605170$.
> 2. Since the CDF is $x/(1+x)$, the upper tail at 19 is $1/20=0.05$. The lower 5th percentile is $0.05/0.95=1/19$.
> 3. Degrees of freedom are $6-1=5$. The margin is $2.570582(2/\sqrt6)\approx2.09887$. The interval is approximately $[5.90113,10.09887]$.
