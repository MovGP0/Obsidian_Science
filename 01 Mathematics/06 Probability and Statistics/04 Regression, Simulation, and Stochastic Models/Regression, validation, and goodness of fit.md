---
title: "Regression, validation, and goodness of fit"
---

> [!TLDR]
> Fit a linear model, estimate prediction error on held-out observations, and compare categorical counts with a model.

## Worked lecture material

The notes point to the `t.test` function in R.

##### Linear least-squares regression

The regression function is $g(x)=E[Y\mid X=x]$, where $x$ can be vector-valued. For example, $g(71)=E[Y\mid X=71]$.

For the simple linear model,

$$
Y_i=\alpha+\beta x_i+U_i.
$$

Here $Y_i$ is the dependent variable, $\alpha$ is the intercept, $\beta$ is the slope, $x_i$ is the observed feature or independent variable, and $U_i$ is the noise term. The model assumes that $U_1,\ldots,U_n$ are independent, that $E[U_i]=0$, and that $\operatorname{Var}(U_i)=\sigma^2$ for every $i$. The notes ask whether those assumptions hold in an application.

To estimate $\alpha$ and $\beta$, minimize the residual sum of squares,

$$
S(\alpha,\beta)=\sum_{i=1}^n(y_i-\alpha-\beta x_i)^2.
$$

Under independent normal responses $Y_i\sim N(\alpha+\beta x_i,\sigma^2)$ at the observed $x_i$, least squares gives the maximum likelihood estimates of $\alpha$ and $\beta$.

##### )

Minimize $S(\alpha,\beta)=\sum_{i=1}^n(y_i-(\alpha+\beta x_i))^2$ to estimate $\alpha$ and $\beta$. This is equivalent to maximum likelihood under the Gaussian error model $Y_i\sim N(\alpha+\beta x_i,\sigma^2)$ with independent errors.

![[Kyle Kabasares - Probability and Statistics - Vertical residuals around a fitted line.png|**Fig. 76** Vertical deviations from the line $y=\alpha+\beta x$ are the residuals whose squares are summed.]]

Setting $\partial S/\partial\alpha=0$ and $\partial S/\partial\beta=0$ yields a system of linear equations. After fitting the line, estimate the error standard deviation by

$$
\hat\sigma=\sqrt{\frac1{n-2}\sum_{i=1}^n(y_i-(\hat\alpha+\hat\beta x_i))^2}.
$$

The residual degrees of freedom are $n-2$, the number of observations minus the two fitted regression parameters. The lecture proposes minimizing cross-validation error to choose a model and address overfitting and underfitting.

##### Validation

Fit the model's parameters on a training set and evaluate prediction error on a held-out test or validation set. The held-out error estimates the generalization error. Training error can be optimistic because the model was fitted to those observations. A single split holds back some of the data from fitting.

For $k$-fold cross-validation,

1. Divide the data into $k$ partitions or folds. A common choice is $k=10$.
2. Hold out one fold as the test set, train on the other folds, and compute the validation error, such as the mean squared error.
3. Repeat for each fold and average the validation errors.

Setting $k=n$ gives leave-one-out cross-validation.

**)**

Consider a road with a speed limit of $\quantity{70}{mph}$. The lecture asks how to calibrate an automated speed trap. The page phrases the target as at most $5\%$ of ticketed drivers being within the speed limit. The test calculation treats $5\%$ as the maximum probability of a ticket for a driver within the limit.

Let $\mechanical{S}$ be the actual speed and $\mechanical{M}$ the measured speed, both in miles per hour. Given actual speed $\mechanical{S}=s$, the numerical measurement has normal distribution $N(s,2^2)$. The sketch shows what happens at $s=70$ if the device tickets at a measured speed of $70$ or higher.

![[Kyle Kabasares - Probability and Statistics - Measured speeds at the speed limit.png|**Fig. 77** At an actual speed of 70 miles per hour, measurement noise gives a symmetric distribution about 70. A threshold at 70 puts half the probability in the shaded upper tail.]]

Ticket a driver if the measured speed $\mechanical{M}$ exceeds a cutoff $\mechanical{a}$. Among actual speeds at or below 70 miles per hour, the ticket probability is greatest at the boundary $\mechanical{S}=70$ when speeds are expressed in miles per hour.

$$
P(\mechanical{M}>\mechanical{a}\mid\mechanical{S}\le70)
\le P(\mechanical{M}>\mechanical{a}\mid\mechanical{S}=70).
$$

![[Kyle Kabasares - Probability and Statistics - Speed trap threshold and shaded upper tail.png|**Fig. 78** At the null boundary of 70 miles per hour, choose the cutoff $a$ so the shaded upper tail has probability $0.05$.]]

At that boundary, standardizing the normal measurement gives

$$
P(\mechanical{M}>\mechanical{a}\mid\mechanical{S}=70)
=P\left(Z>\frac{\mechanical{a}-70}{2}\right).
$$

The standard normal upper $5\%$ point is about $1.645$, so the cutoff is $\mechanical{a}=70+2(1.645)\approx\quantity{73.3}{mph}$.

| Decision | Driver exceeds the limit | Driver is within the limit |
| --- | --- | --- |
| Ticket | Correct decision | Type I error, with probability at most $0.05$ at each null speed |
| No ticket | Type II error | Correct decision |

A Type I error is rejection of a true null hypothesis, or a false positive. A Type II error is failure to reject when the alternative is true, or a false negative.

The page ends with a heading on goodness-of-fit testing.

The page begins with item 2, a regression model through the origin, $Y_i=\beta x_i+U_i$, with $E[U_i]=0$ and $\operatorname{Var}(U_i)=\sigma^2$.

##### Confidence intervals

Many inference problems fall into one of three categories, point estimation, confidence intervals, and hypothesis testing.

A $(1-\alpha)$ confidence interval for $\theta$ has the form $C_n=(a,b)$, where $a=a(X_1,\ldots,X_n)$ and $b=b(X_1,\ldots,X_n)$ depend on the data. Its coverage satisfies $P_\theta(\theta\in C_n)\ge 1-\alpha$ for every $\theta\in\Theta$. For a procedure with exact $95\%$ coverage, $95\%$ of intervals constructed in repeated experiments contain the parameter.

##### Normal-based confidence intervals

Suppose the sampling distribution of $\hat\theta_n$ is approximately normal, centered at $\theta$, and use $\widehat{\operatorname{se}}$ for its standard error. Let $\Phi$ be the standard normal CDF, and let $z_{\alpha/2}$ have upper-tail probability $\alpha/2$. For $Z\sim N(0,1)$,

$$
\Phi(z_{\alpha/2})=1-\alpha/2,
\qquad P(-z_{\alpha/2}<Z<z_{\alpha/2})=1-\alpha.
$$

Set

$$
C_n=\left(\hat\theta_n-z_{\alpha/2}\widehat{\operatorname{se}},\
\hat\theta_n+z_{\alpha/2}\widehat{\operatorname{se}}\right).
$$

If $Z_n=(\hat\theta_n-\theta)/\widehat{\operatorname{se}}$ converges in distribution to $Z$, then the probability that $Z_n$ falls between the two critical values converges to $1-\alpha$. This is the probability that $C_n$ covers $\theta$. For $95\%$ confidence, $\alpha=0.05$ and Table B.1 gives $z_{\alpha/2}\approx1.96$.

For independent $X_1,\ldots,X_n\sim N(\mu,\sigma^2)$ with known $\sigma^2$, the estimator $\hat\mu_n=\bar X_n=n^{-1}\sum_{i=1}^n X_i$ is normal with mean $\mu$ and variance $\sigma^2/n$. The standard error is $\sigma/\sqrt n$, and $\sqrt n(\bar X_n-\mu)/\sigma$ has the standard normal distribution. Therefore

$$
P\left(-z_{\alpha/2}<\frac{\sqrt n(\bar X_n-\mu)}{\sigma}
<z_{\alpha/2}\right)=1-\alpha.
$$

Equivalently,

$$
P\left(\bar X_n-z_{\alpha/2}\frac{\sigma}{\sqrt n}<\mu<
\bar X_n+z_{\alpha/2}\frac{\sigma}{\sqrt n}\right)=1-\alpha.
$$

Substituting the observed mean $\bar x$ gives the exact $(1-\alpha)$ confidence interval $\bar x\pm z_{\alpha/2}\sigma/\sqrt n$. For a $95\%$ interval, use $\alpha=0.05$ and $z_{\alpha/2}\approx1.96$.

![[Kyle Kabasares - Probability and Statistics - Normal tails for a two sided confidence interval.png|**Fig. 79** The critical values leave probability $\alpha/2$ in each tail of the standard normal distribution.]]

##### Point estimation

Point estimation gives a single best guess for a quantity of interest. The target can be a parameter in a parametric model, a CDF $F$, a density $f$, a regression function $r$, or a future value $Y$ of a random variable.

Write the estimator of $\theta$ as $\hat\theta$ or $\hat\theta_n$. The parameter is fixed and unknown, and the estimator is random because it depends on the data. Formally, if $X_1,\ldots,X_n$ are independent and identically distributed from $F$, a point estimator is a function $\hat\theta_n=g(X_1,\ldots,X_n)$ of those observations.

The bias of $\hat\theta_n$ is $E[\hat\theta_n]-\theta$. It is unbiased if $E[\hat\theta_n]=\theta$, equivalently if its bias is zero. The distribution of the estimator is its sampling distribution, and its standard deviation is the standard error $\operatorname{se}(\hat\theta_n)=\sqrt{\operatorname{Var}(\hat\theta_n)}$. This can depend on the unknown distribution $F$. The notes use $\widehat{\operatorname{se}}$ for an estimate of the standard error.

For independent $X_1,\ldots,X_n\sim\operatorname{Ber}(p)$, the estimator $\hat p_n=n^{-1}\sum_{i=1}^n X_i$ has expectation $n^{-1}\sum_{i=1}^nE[X_i]=p$ and is unbiased. Its standard error and estimated standard error are

$$
\operatorname{se}=\sqrt{\frac{p(1-p)}n},
\qquad
\widehat{\operatorname{se}}=\sqrt{\frac{\hat p_n(1-\hat p_n)}n}.
$$

The mean squared error measures the quality of a point estimator.

$$
\operatorname{MSE}=E[(\hat\theta_n-\theta)^2]
=\bigl(\operatorname{bias}(\hat\theta_n)\bigr)^2+\operatorname{Var}(\hat\theta_n).
$$

An estimator is asymptotically normal in the sense used here if the distribution of $(\hat\theta_n-\theta)/\operatorname{se}$ converges to $N(0,1)$.

**)**

Let $\boldsymbol X\sim\operatorname{Mult}(n,\boldsymbol p)$ with $\boldsymbol p=(p_1,\ldots,p_k)$ and $\sum_{i=1}^k p_i=1$. The expected count vector is

$$
E[\boldsymbol X]=
\begin{pmatrix}
E[X_1]\\
\vdots\\
E[X_k]
\end{pmatrix}
=
\begin{pmatrix}
np_1\\
\vdots\\
np_k
\end{pmatrix}.
$$

##### Pearson's chi-square test for multinomial data

The notes attribute the statistic to Karl Pearson and describe it as an approximation to the likelihood-ratio test statistic. For observed category counts $x_j$ and expected counts $E_j=E[X_j]=np_j$,

$$
T=\sum_{j=1}^k\frac{(x_j-np_j)^2}{np_j}
=\sum_{j=1}^k\frac{(x_j-E_j)^2}{E_j}.
$$

Under a multinomial null with $k$ specified category probabilities, the large-sample reference distribution is approximately $\chi^2_{k-1}$, where $k-1$ is the number of degrees of freedom.

##### Traffic accidents

| Accident count $x$ | Frequency |
| ---: | ---: |
| 0 | 32 |
| 1 | 12 |
| 2 | 6 |
| 3 | 0 |

Under $H_0$, the accident counts follow a $\operatorname{Pois}(\mu)$ distribution. The maximum likelihood estimate of $\mu$ is the sample mean, here $\hat\mu=24/50=0.48$. For $X\sim\operatorname{Pois}(\mu)$, $P(X=k)=\mu^ke^{-\mu}/k!$ for $k=0,1,2,\ldots$.

Using the fitted mean, the probabilities for the grouped categories are

$$
\begin{aligned}
p_1&=P(X=0)=e^{-\hat\mu}\approx0.619,\\
p_2&=P(X=1)=\hat\mu e^{-\hat\mu}\approx0.297,\\
p_3&=P(X\ge2)=1-e^{-\hat\mu}-\hat\mu e^{-\hat\mu}\approx0.084.
\end{aligned}
$$

The third formula pools all counts of two or more.

Under the fitted Poisson null model, multiplying the rounded probabilities by $n=50$ gives the expected category frequencies

$$
E_1=n\hat p_1=30.95,\qquad E_2=n\hat p_2=14.85,\qquad E_3=n\hat p_3=4.20.
$$

The $p$-value is the upper-tail probability for the observed goodness-of-fit statistic under the null reference distribution.

## Source

Kyle Kabasares, *Probability and Statistics (Math 32, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{S}$ | $\unit{mph}$ | Actual speed | True speed of the car in the speed-trap example. |
| $\mechanical{M}$ | $\unit{mph}$ | Measured speed | Speed recorded by the automated device. |
| $\mechanical{a}$ | $\unit{mph}$ | Ticket threshold | Measured speed above which the automated device issues a ticket. |
