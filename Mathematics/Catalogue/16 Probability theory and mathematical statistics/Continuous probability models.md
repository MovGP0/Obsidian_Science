---
title: "Continuous probability models"
catalogue_ids:
  - "16.2.4"
  - "16.2.4.1"
  - "16.2.4.2"
  - "16.2.4.3"
  - "16.2.4.4"
  - "16.2.4.5"
---

> [!TLDR]
> A density assigns probability through area; normal, lognormal, exponential, and Weibull models have different shapes and domains.

## Probability as area

For a continuous variable with density $f$, the probability of an interval is its area under the density. The total area is one, and all heights are nonnegative. A single value has probability zero, but every nonempty interval around it can have positive probability. The density height is not a point probability.

If integrals are new, use [[08.01 Definite integrals]] as the area interpretation. A cumulative distribution function $F(x)=P(X\le x)$ lets us calculate interval probabilities by subtraction: $P(a<X\le b)=F(b)-F(a)$. This lesson gives formulas for $F$ or a standard table function, so no integration technique is needed to follow the numerical examples.

## Normal distribution

The normal distribution $N(\mu,\sigma^2)$ has mean $\mu$, standard deviation $\sigma>0$, and density

$$
f(x)=\frac1{\sigma\sqrt{2\pi}}\exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right),\quad -\infty<x<\infty.
$$

It is symmetric around $\mu$. The scale $\sigma$ changes its width. A normal model allows negative values as well as positive values, so it needs care for variables that are strictly positive. The familiar statements “about 68% within one standard deviation” and “about 95% within two” apply to this model, not to every distribution. [NIST's normal distribution page](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3661.htm) gives its parameters and probability functions.

## Standard normal distribution and Gaussian error integral

Standardization subtracts the centre and divides by the spread:

$$
Z=\frac{X-\mu}{\sigma},\qquad
\Phi(z)=\frac1{\sqrt{2\pi}}\int_{-\infty}^{z}e^{-t^2/2}\,dt.
$$

If $X$ is normal, then $Z$ is standard normal with mean zero and variance one. Software or a table supplies $\Phi$. Symmetry gives $\Phi(-z)=1-\Phi(z)$.

“Gaussian error integral” has several normalizations. Here define the error function explicitly:

$$
\operatorname{erf}(u)=\frac2{\sqrt\pi}\int_0^u e^{-t^2}\,dt,
\qquad
\Phi(z)=\frac12\left[1+\operatorname{erf}\left(\frac z{\sqrt2}\right)\right].
$$

This prevents mixing an integral from zero with a CDF from minus infinity. For $X\sim N(10,4)$, the standard deviation is two. Therefore $P(8<X\le12)=\Phi(1)-\Phi(-1)\approx0.6827$.

## Lognormal distribution

A positive variable $X$ is lognormal when $\ln X$ is normal. Write $\ln X\sim N(\mu,\sigma^2)$, where these parameters describe the logarithm, not $X$ itself. Then, for $x>0$,

$$
f_X(x)=\frac1{x\sigma\sqrt{2\pi}}\exp\left(-\frac{(\ln x-\mu)^2}{2\sigma^2}\right),\quad
F_X(x)=\Phi\left(\frac{\ln x-\mu}{\sigma}\right).
$$

Its median is $e^\mu$ and its mean is $e^{\mu+\sigma^2/2}$. Its variance is $(e^{\sigma^2}-1)e^{2\mu+\sigma^2}$. The long right tail makes mean and median different. A product of many positive factors can motivate a lognormal model because the logarithm turns the product into a sum; this remains a model choice. [NIST's lognormal reference](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3669.htm) explains alternative parameter names.

## Exponential distribution

For rate $r>0$, an exponential variable has

$$
f(x)=re^{-rx},\quad F(x)=1-e^{-rx},\quad x\ge0.
$$

Its mean is $1/r$ and its variance is $1/r^2$. Its survival probability is $P(X>x)=e^{-rx}$. Dividing survival probabilities shows that $P(X>s+t\mid X>s)=e^{-rt}$. This memoryless property means that the remaining model waiting time does not depend on how long the wait has already lasted. See [NIST's exponential distribution](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3667.htm). It is a strong assumption, not a general law of waiting.

## Weibull distribution

The two-parameter Weibull model uses shape $k>0$ and scale $a>0$:

$$
F(x)=1-e^{-(x/a)^k},\quad
f(x)=\frac ka(x/a)^{k-1}e^{-(x/a)^k},\quad x>0.
$$

The CDF is zero for $x<0$. The scale $a$ is the value at which the CDF reaches $1-e^{-1}\approx0.6321$. Shape $k=1$ gives an exponential model with rate $1/a$. For $k\ne1$ the memoryless property fails. Its hazard, defined as $f(x)/(1-F(x))$, equals $(k/a)(x/a)^{k-1}$. Thus the conditional event rate decreases for $k<1$, is constant for $k=1$, and increases for $k>1$. The definition concerns the continuous model. See [NIST's Weibull reference](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3668.htm).

## Worked comparison of scales

For an exponential variable with rate $r=2$, the probability of exceeding one is $e^{-2}\approx0.1353$, and its mean is $1/2$. Conditional on already exceeding three, the probability of exceeding four is still $e^{-2}$. Divide $P(X>4)=e^{-8}$ by $P(X>3)=e^{-6}$ to check that claim. A Weibull model with shape two does not have this same cancellation: its survival exponent contains a square, so the extra wait depends on the starting point.

For a lognormal variable with $\mu=\ln2$ and $\sigma=1/2$, the median is two, while the mean is $2e^{1/8}\approx2.2663$. To calculate the probability of exceeding $2e^{1/2}$, transform the threshold back to the normal scale. Its logarithm is $\ln2+1/2$, one standard deviation above the logarithmic mean. The probability is therefore $1-\Phi(1)\approx0.1587$. This calculation shows why a parameter called the lognormal “mean” needs an explicit definition: the mean of the logarithm and the mean of the original variable are different numbers.

Do not choose among these models from a single summary value. Their supports, symmetry, tail shapes, and conditional behavior differ. Use the experiment and suitable data checks to justify a model.

## Practice

1. If $\ln X\sim N(0,1)$, calculate $P(X\le1)$ and the mean of $X$.
2. For a Weibull model with $a=2,k=2$, calculate $P(X>2)$ and the median.

> [!example]- Worked answers
> 1. Since $\ln1=0$, $P(X\le1)=\Phi(0)=1/2$. The mean is $e^{1/2}\approx1.6487$, which is larger than the median one.
> 2. The survival probability is $e^{-(2/2)^2}=e^{-1}\approx0.3679$. Set $1-e^{-(m/2)^2}=1/2$. Taking logarithms gives $m=2\sqrt{\ln2}\approx1.6651$.
