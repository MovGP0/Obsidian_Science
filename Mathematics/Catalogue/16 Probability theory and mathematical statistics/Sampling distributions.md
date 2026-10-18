---
title: "Sampling distributions"
catalogue_ids:
  - "16.2.4.6"
  - "16.2.4.7"
  - "16.2.4.8"
---

> [!TLDR]
> Chi-squared, Student t, and Fisher F distributions arise from normal variables and describe the variation of statistical calculations.

## A distribution of a calculation

Take a fresh sample, calculate its mean, and repeat the whole experiment. The means vary, so the mean itself has a distribution. This is a sampling distribution. The same idea applies to variances and ratios. The word “sample” refers to all observations used in one calculation; repeating a calculation on the same fixed data does not create independent samples.

Begin with [[Random variables and joint distributions]] and the normal model in [[Continuous probability models]]. This lesson constructs three distributions from independent standard normal variables. Their full density formulas are not needed to use them. Software supplies their cumulative probabilities and quantiles. A quantile $q_p$ means a value with probability $p$ at or below it; for these continuous distributions this determines the usual interior quantiles uniquely.

## Chi-squared distribution

Let $Z_1,\ldots,Z_\nu$ be independent standard normal variables, where $\nu$ is a positive integer. Define

$$
Q=Z_1^2+\cdots+Z_\nu^2\sim\chi^2_\nu.
$$

The parameter $\nu$ is the degrees of freedom: the number of independent normal pieces in this construction. The result is nonnegative. Each squared standard normal has mean one and variance two, so $E[Q]=\nu$ and $\operatorname{Var}(Q)=2\nu$. The distribution is generally skewed, especially for small $\nu$. It is not a normal distribution simply because it was built from normal variables. See [NIST's chi-squared reference](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3666.htm).

For an independent sample $X_1,\ldots,X_n$ from $N(\mu,\sigma^2)$, define

$$
\bar X=\frac1n\sum_iX_i,\qquad
S^2=\frac1{n-1}\sum_i(X_i-\bar X)^2.
$$

Then $(n-1)S^2/\sigma^2$ has a chi-squared distribution with $n-1$ degrees of freedom. The lost degree comes from using the sample mean: the deviations satisfy $\sum_i(X_i-\bar X)=0$, so one is determined by the others. The exact distributional theorem also states that $\bar X$ and $S^2$ are independent under normal sampling. Its proof uses properties of normal vectors and is beyond this introductory lesson. The normal assumption is essential for the exact chi-squared statement.

## Student distribution

Let $Z\sim N(0,1)$ and $Q\sim\chi^2_\nu$ be independent. Then

$$
T=\frac{Z}{\sqrt{Q/\nu}}\sim t_\nu.
$$

The random denominator introduces extra variation. The distribution is symmetric about zero and has heavier tails than the standard normal. As $\nu$ increases, the denominator concentrates near one and the t distribution approaches the standard normal. For $\nu>1$ its mean exists and is zero; for $\nu>2$ its variance is $\nu/(\nu-2)$. At smaller degrees of freedom these moments do not exist, even though the distribution is defined. See [NIST's Student t reference](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3664.htm).

Under the normal-sample assumptions above,

$$
\frac{\bar X-\mu}{S/\sqrt n}\sim t_{n-1}.
$$

Replacing an unknown population standard deviation by $S$ does not leave an exact standard-normal statistic. It changes the reference distribution to t. [[Confidence intervals and hypothesis tests]] uses this result to obtain an interval and test for a mean.

## Fisher distribution

“Fisher distribution” here means the Fisher–Snedecor F distribution, not the Fisher distribution for directions on a sphere. If $Q_1\sim\chi^2_{\nu_1}$ and $Q_2\sim\chi^2_{\nu_2}$ are independent, define

$$
F=\frac{Q_1/\nu_1}{Q_2/\nu_2}\sim F_{\nu_1,\nu_2}.
$$

It is nonnegative and usually skewed. The order of the degrees of freedom matters. Taking the reciprocal interchanges them. For two independent normal samples, the ratio $(S_1^2/\sigma_1^2)/(S_2^2/\sigma_2^2)$ has this distribution, with $\nu_i=n_i-1$. Under equal population variances the statistic is simply $S_1^2/S_2^2$. Without normality the usual exact F test can be unreliable. See [NIST's F reference](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3665.htm).

## Worked example: identify the reference law

Nine independent normal observations have sample variance $S^2$. If the population variance were four, the statistic $8S^2/4=2S^2$ would have distribution $\chi^2_8$. If the observed $s^2$ is six, the statistic is twelve. This twelve is an observed value, not the degrees of freedom. A table compares it against the distribution with eight degrees of freedom. If another independent normal sample of size six has variance $s_2^2=3$, the equal-variance comparison statistic is $6/3=2$ with F degrees $(8,5)$.

## Practice

1. Which distribution does $Z/\sqrt{Q/5}$ have if $Z$ is standard normal and $Q$ is independent chi-squared with five degrees of freedom?
2. A normal sample has size ten and sample variance two. Under population variance four, calculate the chi-squared statistic and its degrees of freedom.

> [!example]- Worked answers
> 1. It is $t_5$ by construction. Its variance is $5/(5-2)=5/3$; it is not one.
> 2. The statistic is $(10-1)2/4=4.5$, and the reference law is $\chi^2_9$. The divisor is the hypothesized population variance, not its standard deviation.
