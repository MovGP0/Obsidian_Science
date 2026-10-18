---
title: "Confidence intervals and hypothesis tests"
catalogue_ids:
  - "16.3.3"
  - "16.3.3.1"
  - "16.3.3.2"
  - "16.3.3.3"
  - "16.3.3.4"
  - "16.3.3.5"
---

> [!TLDR]
> Confidence intervals describe a procedure’s repeated-sampling coverage; tests measure how incompatible data are with a specified null model.

## Distribution of sample means

Suppose $X_1,\ldots,X_n$ are iid with mean $\mu$ and finite variance $\sigma^2$. Then $E[\bar X]=\mu$ and $\operatorname{Var}(\bar X)=\sigma^2/n$. The standard deviation $\sigma/\sqrt n$ of the mean is its standard error. If the population is normal, the mean is exactly normal for every $n$. Otherwise a normal approximation can follow from the central limit theorem as $n$ grows, under its assumptions. A small standard error does not measure selection bias.

Read [[Samples and descriptive statistics]] for $\bar X,S^2$ and [[Sampling distributions]] for the normal-sample distributional results. This lesson distinguishes exact normal-model intervals from large-sample approximations.

## Confidence limits for the mean

Let $z_p$ and $t_{p,\nu}$ denote lower-tail quantiles: probability $p$ lies at or below each. For independent normal observations and known $\sigma$, a two-sided confidence interval with coverage $1-\alpha$ is $\bar x\pm z_{1-\alpha/2}\sigma/\sqrt n$. For unknown $\sigma$, use

$$
\bar x\pm t_{1-\alpha/2,n-1}\frac{s}{\sqrt n}.
$$

This follows by rearranging the probability statement that $(\bar X-\mu)/(S/\sqrt n)$ lies between the two central t quantiles. The parameter $\mu$ is fixed. Across repeated samples, the calculated endpoints vary. Under the assumptions, a fraction $1-\alpha$ of those intervals covers $\mu$ in the long run. After observing one interval, the frequentist statement is not a probability of $1-\alpha$ that this fixed parameter is inside it. See [NIST's confidence limits for the mean](https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm).

![[catalogue-ch16-coverage.svg|**Fig. C.ch16.3** Repeated samples give different intervals; the fixed parameter stays in one place. This schematic illustrates coverage and does not simulate a coverage percentage.]]

For nine normal observations with $\bar x=10$ and $s=3$, a 95% interval uses $t_{0.975,8}\approx2.306$. The standard error is $3/3=1$, so the interval is $10\pm2.306$, or approximately $[7.694,12.306]$. This is an interval for the population mean, not an interval containing 95% of individual observations. A prediction interval for a new normal observation is wider: $\bar x\pm t_{1-\alpha/2,n-1}s\sqrt{1+1/n}$.

## Confidence limits for dispersion

Under the same independent normal model, $(n-1)S^2/\sigma^2\sim\chi^2_{n-1}$. Write $q_p$ for its lower-tail quantiles. Rearrangement gives the variance interval

$$
\left[\frac{(n-1)s^2}{q_{1-\alpha/2}},\frac{(n-1)s^2}{q_{\alpha/2}}\right].
$$

Take positive square roots to obtain standard-deviation limits. The quantile order reverses because variance is in the denominator. With $n=10,s^2=4$, the chi-squared quantiles for nine degrees of freedom are approximately $q_{0.025}=2.700$ and $q_{0.975}=19.023$. Thus the 95% variance interval is $[36/19.023,36/2.700]\approx[1.892,13.333]$. Exact chi-squared variance intervals are sensitive to nonnormality. [NIST's standard-deviation limits](https://itl.nist.gov/div898/software/dataplot/refman1/auxillar/sdconfli.htm) state this calculation and alternatives.

## Principle of statistical tests

Specify a null hypothesis $H_0$, an alternative, a test statistic, and a significance level $\alpha$ before inspecting the result. A valid test controls its probability of rejecting a true null at no more than $\alpha$ under the specified model. A Type I error rejects a true null. A Type II error fails to reject a false null; its probability depends on the particular alternative. Power is one minus that probability.

A p-value is the probability, calculated under the null model, of a test statistic at least as extreme as the observed one in the prespecified direction or directions. It is not the probability that $H_0$ is true and not the probability that the data occurred “by chance.” Not rejecting $H_0$ does not prove it. Model errors, multiple testing, and selecting a test after looking at the data can invalidate the intended error control.

For a two-sided normal-mean test, calculate $t=(\bar x-\mu_0)/(s/\sqrt n)$ and compare $|t|$ with $t_{1-\alpha/2,n-1}$. The worked sample above tests $H_0:\mu=8$ at 5%. Its statistic is two, below 2.306, so it does not reject. Equivalently, eight is inside the corresponding confidence interval.

## Testing for a normal distribution

A normal probability plot compares ordered observations with normal quantiles; approximate straightness supports the shape, while curvature can reveal skew or unusual tails. It does not prove normality. Shapiro–Wilk is a formal normality test for an independent sample. Its statistic has the form

$$
W=\frac{(\sum_i a_i x_{(i)})^2}{\sum_i(x_i-\bar x)^2},
$$

where $x_{(i)}$ are ordered data and the weights $a_i$ depend on sample size and normal order-statistic calculations. Use validated software for weights and null calibration; small $W$ indicates departure. Constant data give a zero denominator and do not support this calculation. See [NIST's Shapiro–Wilk reference](https://itl.nist.gov/div898/software/dataplot/refman1/auxillar/wilkshap.htm). A high p-value is insufficient evidence to reject normality, not evidence of its exact truth. Small samples can miss important departures; large samples can detect very small ones. Check independence, plots, and the consequence of departures for the intended analysis.

## Practice

1. Under a fair-coin null model, ten independent tosses all give heads. For a prespecified one-sided excess-heads test, find the exact p-value.
2. A normal sample has $n=16,s=4$. If $t_{0.975,15}=2.131$, what is the half-width of its 95% mean interval?

> [!example]- Worked answers
> 1. Ten is the maximum count. The tail probability is $P(X\ge10)=1/2^{10}=1/1024\approx0.000977$. It is not a posterior probability of coin fairness. A two-sided extreme-imbalance test would also include zero heads and double this value.
> 2. The standard error is $4/\sqrt{16}=1$. The half-width is $2.131$. The centre still needs the observed sample mean.
