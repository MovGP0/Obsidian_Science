---
title: "Large numbers and normal approximation problems"
---

> [!TLDR]
> Apply Chebyshev’s inequality and the central limit theorem, then summarize and visualize sample data.

## Worked lecture material

##### Chebyshev's inequality

For a random variable $Y$ with finite variance and any $a>0$, Chebyshev's inequality bounds the probability that the distance from $Y$ to its mean is at least $a$.

$$
P(\lvert Y-E[Y]\rvert\ge a)\le \frac{\operatorname{Var}(Y)}{a^2}.
$$

For $Y=\bar X_n$, this gives $P(\lvert\bar X_n-\mu\rvert\ge a)\le\sigma^2/(na^2)$.

How large can $\sigma^2$ be on a five-point scale? The largest value, $4$, occurs when half of the probability is at each endpoint, $1$ and $5$. In that case $\mu=3$ and

$$
\operatorname{Var}(X)=E[(X-3)^2]
=\frac12(1-3)^2+\frac12(5-3)^2=4.
$$

Thus for a five-point scale, $P(\lvert\bar X_n-\mu\rvert\ge a)\le 4/(na^2)$.

##### Central limit theorem

For independent and identically distributed $X_1,\ldots,X_n$ with finite mean and finite positive variance, the sum $S_n=X_1+\cdots+X_n$ and mean $\bar X_n=S_n/n$ are approximately normally distributed for large $n$. The standardized distributions approach the standard normal as $n\to\infty$.

For $Y\sim N(\mu,\sigma^2)$, the notes give the following rounded central areas under the normal curve.

| Range | Area in the notes |
| --- | ---: |
| $\mu\pm\sigma$ | $68\%$ |
| $\mu\pm2\sigma$ | $95\%$ |
| $\mu\pm3\sigma$ | $99\%$ |

![[Kyle Kabasares - Probability and Statistics - Normal areas for the empirical rule.png|**Fig. 58** Shaded areas within one, two, and three standard deviations of the normal mean. The notes round the three-standard-deviation area to 99%.]]

For $Y=\bar X_n$, the mean is $E[Y]=\mu$ and the standard deviation is $\sigma/\sqrt n$. Using two standard deviations for the approximate $95\%$ normal interval gives

$$
\left(\bar x-\frac{2\sigma}{\sqrt n},\ \bar x+\frac{2\sigma}{\sqrt n}\right).
$$

In practice, the notes replace $\sigma$ with the sample standard deviation $s$ and use

$$
\left(\bar x-\frac{2s}{\sqrt n},\ \bar x+\frac{2s}{\sqrt n}\right).
$$

For the data, $n=14$, $\bar x_{14}\approx 3.07$, and $s_{14}\approx 1.38$. The approximate $95\%$ confidence interval calculated by this method is

$$
\left(3.07-\frac{2(1.38)}{\sqrt{14}},\ 3.07+\frac{2(1.38)}{\sqrt{14}}\right)
\approx(2.33,3.81).
$$

##### )

Apply Chebyshev's inequality to $Y=\bar X_n$. If $\sigma^2=\operatorname{Var}(X_i)$ is finite, then for each $\varepsilon>0$,

$$
P(\lvert\bar X_n-\mu\rvert>\varepsilon)
=P(\lvert\bar X_n-E[\bar X_n]\rvert>\varepsilon)
\le \frac{\operatorname{Var}(\bar X_n)}{\varepsilon^2}
=\frac{\sigma^2}{n\varepsilon^2}\longrightarrow 0
\qquad(n\to\infty).
$$

The notes illustrate this weak law of large numbers with two sampling distributions. In the first, $\bar X_n$ is within $\varepsilon$ of $\mu$ most of the time. As $n$ grows, this probability approaches one.

![[Kyle Kabasares - Probability and Statistics - Sample mean with a modest sample size.png|**Fig. 59** Sampling distribution of the mean for a modest sample size, with the interval from $\mu-\varepsilon$ to $\mu+\varepsilon$ shaded.]]

![[Kyle Kabasares - Probability and Statistics - Sample mean with a large sample size.png|**Fig. 60** For a larger sample size the distribution concentrates more of its probability in the same interval.]]

##### Coin flips or a yes/no survey

Let $X_1,\ldots,X_n$ be independent Bernoulli variables with parameter $p$. Then $E[X_i]=p$ and $\operatorname{Var}(X_i)=p(1-p)$. If $p=1/2$, for what values of $n$ will $P(0.4\le\bar X_n\le 0.6)\ge 0.7$?

$$
P(0.4\le\bar X_n\le 0.6)=P(\lvert\bar X_n-\mu\rvert\le 0.1)
=1-P(\lvert\bar X_n-\mu\rvert>0.1).
$$

Apply Chebyshev's inequality to the coin-flip sample mean. For $p=1/2$,

$$
P(\lvert\bar X_n-\mu\rvert>0.1)
\le \frac{\operatorname{Var}(\bar X_n)}{0.1^2}
=\frac{100p(1-p)}{n}=\frac{25}{n}.
$$

The probability of being within $0.1$ of the mean is therefore at least $1-25/n$. To make this lower bound at least $0.7$, solve $1-25/n\ge 0.7$, or $n\ge 25/0.3$. The sufficient integer sample size is $84$.

For $0\le p\le 1$, the Bernoulli variance $p(1-p)$ is greatest at $p=1/2$, where it equals $1/4$.

![[Kyle Kabasares - Probability and Statistics - Bernoulli variance by success probability.png|**Fig. 61** Bernoulli variance vanishes at $p=0$ and $p=1$ and peaks at $p=1/2$.]]

**Central limit theorem**

For a large independent and identically distributed sample, $\bar X_n$ has approximate distribution $N(\mu,\sigma^2/n)$. Equivalently, $S_n=X_1+\cdots+X_n$ has approximate distribution $N(n\mu,n\sigma^2)$. Linearity of expectation and independence give

$$
\begin{aligned}
E[S_n]&=E[X_1]+\cdots+E[X_n]=n\mu,\\
\operatorname{Var}(S_n)&=\operatorname{Var}(X_1)+\cdots+\operatorname{Var}(X_n)=n\sigma^2.
\end{aligned}
$$

##### Applying the central limit theorem

Standardize the statistic and its threshold, then use the standard normal table (Table B.1 in the notes). With $Z\sim N(0,1)$,

$$
\begin{aligned}
P(\bar X_n>a)
&=P\left(\frac{\bar X_n-E[\bar X_n]}{\operatorname{sd}(\bar X_n)}
>\frac{a-E[\bar X_n]}{\operatorname{sd}(\bar X_n)}\right)\\
&=P\left(\frac{\bar X_n-\mu}{\sigma/\sqrt n}
>\frac{a-\mu}{\sigma/\sqrt n}\right)
\approx P\left(Z>\frac{\sqrt n(a-\mu)}{\sigma}\right).
\end{aligned}
$$

The same method for the sum gives

$$
\begin{aligned}
P(S_n>a)
&=P\left(\frac{S_n-E[S_n]}{\operatorname{sd}(S_n)}
>\frac{a-E[S_n]}{\operatorname{sd}(S_n)}\right)\\
&=P\left(\frac{S_n-n\mu}{\sigma\sqrt n}
>\frac{a-n\mu}{\sigma\sqrt n}\right)
\approx P\left(Z>\frac{a-n\mu}{\sigma\sqrt n}\right).
\end{aligned}
$$

##### Normal approximation to the binomial

If $X\sim\operatorname{Bin}(n,p)$, represent it as $X=R_1+\cdots+R_n$ with independent $R_i\sim\operatorname{Ber}(p)$. The mean and variance are

$$
\begin{aligned}
E[X]&=E[R_1]+\cdots+E[R_n]=np,\\
\operatorname{Var}(X)&=\operatorname{Var}(R_1)+\cdots+\operatorname{Var}(R_n)=np(1-p).
\end{aligned}
$$

The central limit theorem gives the normal approximation $N(np,np(1-p))$.

##### Roulette example

A roulette wheel has 38 slots, labeled $0$, $00$, and $1$ through $36$. A one-unit bet on a specified number wins 35 units net if that number comes up and loses one unit otherwise. What is the probability of being ahead after 34, 1,000, or 100,000 bets?

Let $X_i$ be the net winnings from bet $i$ and let $S_n=X_1+\cdots+X_n$. Then $P(X_i=35)=1/38$ and $P(X_i=-1)=37/38$. The first two moments and the variance are

$$
\begin{aligned}
E[X_i]&=(-1)\frac{37}{38}+35\frac1{38}=-\frac1{19},\\
E[X_i^2]&=(-1)^2\frac{37}{38}+35^2\frac1{38}
=\frac{1262}{38}=\frac{631}{19},\\
\operatorname{Var}(X_i)&=\frac{631}{19}-\left(-\frac1{19}\right)^2\approx 33.2.
\end{aligned}
$$

Continue with the independent payoffs $X_i$. The questions are to approximate $P(S_{34}>0)$, $P(S_{1000}>0)$, and $P(S_{100000}>0)$. Start with the mean of the sum.

$$
E[S_n]=E[X_1+\cdots+X_n]=E[X_1]+\cdots+E[X_n]
=nE[X_i]=-\frac n{19}.
$$

By independence, $\operatorname{Var}(S_n)=\sum_{i=1}^n\operatorname{Var}(X_i)=n\operatorname{Var}(X_i)\approx 33.208n$. The lecture uses the normal approximation and computes the upper tail at zero with `1 - pnorm(0, mean = -n/19, sd = sqrt(33.208*n))` in R.

| Bets $n$ | Normal approximation to $P(S_n>0)$ |
| ---: | ---: |
| 34 | $0.48$ |
| 1,000 | $0.39$ |
| 100,000 | $0.002$ |

##### Rounding error example

An accountant rounds amounts to the nearest dollar. Both 99.53 dollars and 100.46 dollars round to 100 dollars. What is the cumulative effect over 100 amounts?

Model the rounding errors $X_1,\ldots,X_{100}$ in dollars as independent $U(-1/2,1/2)$ variables. Use the central limit theorem to approximate the probability that the total error exceeds ten dollars in either direction.

![[Kyle Kabasares - Probability and Statistics - Uniform density of a rounding error.png|**Fig. 62** An individual rounding error is modeled as uniform from minus one-half to plus one-half dollar.]]

Writing $S_{100}=X_1+\cdots+X_{100}$, the two tails are equal by symmetry. If $p=P(S_{100}>10)$, then

$$
P(\lvert S_{100}\rvert>10)
=P(S_{100}<-10)+P(S_{100}>10)=2p.
$$

For the rounding errors, each $E[X_i]=0$ and $\operatorname{Var}(X_i)=(1/2-(-1/2))^2/12=1/12$. By linearity of expectation and independence,

$$
E[S_{100}]=0+\cdots+0=0,
\qquad
\operatorname{Var}(S_{100})=\sum_{i=1}^{100}\operatorname{Var}(X_i)=\frac{100}{12}.
$$

Thus the central limit theorem gives

$$
p=P(S_{100}>10)
=P\left(\frac{S_{100}-E[S_{100}]}{\sqrt{\operatorname{Var}(S_{100})}}
>\frac{10-0}{\sqrt{100/12}}\right)
\approx P(Z>3.46)\approx 0.0003.
$$

The two-sided probability is approximately $2p\approx 0.0006$ with the notes' rounding.

##### Approximating binomial probabilities

Write $X\sim\operatorname{Bin}(n,p)$ as a sum of independent $\operatorname{Ber}(p)$ variables. Since $E[X]=np$ and $\operatorname{Var}(X)=np(1-p)$, the standardized variable $(X-np)/\sqrt{np(1-p)}$ is approximately standard normal for large $n$.

The examples ask for $P(X\ge 21)$ when $X\sim\operatorname{Bin}(41,0.55)$, and $P(X\ge 201)$ when $X\sim\operatorname{Bin}(401,0.55)$. For the continuity correction, approximate the mass at integer $i$ by the normal probability from $i-\tfrac12$ to $i+\tfrac12$. Let $Y$ be normal with the same mean and variance as $X$. For the first example,

$$
\begin{aligned}
P(X\ge 21)&\approx P(Y\ge 20.5) \\
&=P\left(Z\ge \frac{20.5-41(0.55)}{\sqrt{41(0.55)(1-0.55)}}\right)
\approx P(Z\ge -0.64).
\end{aligned}
$$

With the continuity correction, the normal table gives $P(Z\ge-0.64)=1-0.2611=0.7389$. The exact binomial probability is approximately $0.740812$.

The notes record $0.7881$ for the approximation without a continuity correction. This corresponds to placing the normal threshold at $20$. Placing it at $21$ instead gives $P(Z\ge (21-22.55)/\sqrt{41(0.55)(0.45)})\approx 0.687$.

**)**

The two goals of statistics are description and inference. Descriptive statistics include the sample mean. Tools for inference include point estimates, confidence intervals, and hypothesis tests. The lecture emphasizes point estimates and confidence intervals, with a note that statistics instructors often devote too much time to hypothesis testing.

A statistic is a function of a set of random variables and is itself a random variable. Examples include the sample mean, sample variance, and sample maximum.

$$
\bar X_n=\frac1n(X_1+\cdots+X_n),
\qquad
s_n^2=\frac1{n-1}\sum_{i=1}^n(X_i-\bar X_n)^2,
\qquad
M_n=\max\{X_1,\ldots,X_n\}.
$$

The notes describe inference as the process of figuring something out from the data.

##### Exploratory data analysis

A histogram is a binned representation of the data. Its vertical axis shows density or frequency, its breaks mark the boundaries of the bins, and its local peaks are modes. The bin width acts as a smoothing parameter.

![[Kyle Kabasares - Probability and Statistics - Histogram bins breaks and mode.png|**Fig. 63** The sketch identifies the histogram's density or frequency axis, bins, breaks, and a local maximum.]]

##### Kernel density estimates

A kernel density estimate is a continuous graphical representation of the data. It places a mound of probability density at each data point, which the notes describe as convolution. The two choices are the kernel and the bandwidth, with the bandwidth acting as the smoothing parameter.

**)**

For a dataset of size $n$, the empirical cumulative distribution function is

$$
F_n(x)=\frac{\text{number of data points at most }x}{n}.
$$

For the data $4,3,9,1,7$, the page lists the following evaluations.

| $x$ | $F_5(x)$ |
| ---: | ---: |
| $0$ | $0/5=0$ |
| $1/2$ | $0/5=0$ |
| $1$ | $1/5=0.2$ |
| $3$ | $2/5=0.4$ |
| $4$ | $3/5=0.6$ |
| $7$ | $4/5=0.8$ |
| $9$ | $5/5=1$ |
| $42$ | $5/5=1$ |

The last row is left as a calculation in the handwriting. All five observations are at most $42$.

##### Scatter plots

Scatter plots visualize bivariate, or two-dimensional, data.

##### Numerical summaries of data

The sample mean is $\bar X_n=(X_1+\cdots+X_n)/n$. The capital-letter statistic $\bar X_n$ is a random variable, while $\bar x_n$ is the numerical mean of the observed data. By the law of large numbers, $\bar X_n$ estimates $\mu=E[X_1]$.

The hourly temperature observations in degrees Celsius are

$$
43,\ 43,\ 41,\ 41,\ 41,\ 42,\ 43,\ 58,\ 58,\ 41,\ 41.
$$

The sample mean is $\thermal{\bar x}_{11}\approx\quantity{44.7}{{}^\circ C}$. The median is the middle observation after sorting, or the average of the two middle observations for an even sample size. The median is more robust to outliers than the mean. The notes ask what defines an outlier.

##### Measures of variability

The sample variance and sample standard deviation are

$$
s_n^2=\frac1{n-1}\sum_{i=1}^n(x_i-\bar x_n)^2,
\qquad s_n=\sqrt{s_n^2}.
$$

Other measures of variability, such as the median absolute deviation, are more robust to outliers. The population variance is $\sigma^2=\operatorname{Var}(X)=E[(X-\mu)^2]$, with $\mu=E[X]$. The law of large numbers motivates the approximation $\sigma^2\approx n^{-1}\sum_{i=1}^n(X_i-\bar X_n)^2$.

##### Unbiased sample variance

For an independent and identically distributed sample, the sample variance with denominator $n-1$ is unbiased for $\sigma^2$.

$$
E[s_n^2]=E\left[\frac1{n-1}\sum_{i=1}^n(X_i-\bar X_n)^2\right]=\sigma^2.
$$

![[Kyle Kabasares - Probability and Statistics - Targets illustrating estimator bias.png|**Fig. 64** The first and third targets show estimates centered on the true value with different spreads. The middle target shows estimates shifted away from the true value.]]

When centering at the population mean, dividing by $n$ gives $E[n^{-1}\sum_{i=1}^n(X_i-\mu)^2]=\sigma^2$. When centering at the sample mean, $E[n^{-1}\sum_{i=1}^n(X_i-\bar X_n)^2]$ differs from $\sigma^2$ in general.

##### Degrees of freedom

Degrees of freedom correspond here to linear dimensionality. Three unconstrained numbers have three degrees of freedom. Fixing the mean of $x,y,z$ at $5$ constrains the triple to the plane $x+y+z=15$, leaving two degrees of freedom. The handwritten equation places $1/3$ on the left with $15$ on the right. The fixed mean gives $(x+y+z)/3=5$.

The lecture gives the rule that degrees of freedom equal the number of data points minus the number of estimated parameters in this setting.

##### Five-number summary

The five-number summary comprises the minimum, lower quartile (25th percentile), median, upper quartile (75th percentile), and maximum. The notes point to the `summary` command in R.

The interquartile range is $\operatorname{IQR}=Q_3-Q_1$, the upper quartile minus the lower quartile.

**)**

**1a.** Compute the expected product using the joint probabilities.

$$
\begin{aligned}
E[XY]
&=(0)(-1)\tfrac16+(1)(-1)\tfrac16+(2)(-1)\tfrac16\\
&\quad +(0)(1)(0)+(1)(1)\tfrac12+(2)(1)(0)\\
&=-\tfrac16-\tfrac26+\tfrac12=0.
\end{aligned}
$$

**1b.** Independence would require the joint probability to equal the product of the marginals. Here $P(X=1)P(Y=1)=(2/3)(1/2)=1/3$, whereas $P(X=1,Y=1)=1/2$. Thus $X$ and $Y$ are dependent.

**1c.** Compute the marginal expectations.

$$
E[X]=0\cdot\tfrac16+1\cdot\tfrac23+2\cdot\tfrac16=1,
\qquad E[Y]=(-1)\tfrac12+1\cdot\tfrac12=0.
$$

Hence $\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]=0-(1)(0)=0$. The variables are uncorrelated.

**2.** Find $P(X<15)$ for the count of defective items when $n=100$ and the defect probability is $p=1/5$. The expected number of defects is $np=20$. The page recalls Chebyshev's inequality, $P(\lvert X-E[X]\rvert\ge a)\le\operatorname{Var}(X)/a^2$, and represents the count by $S_{100}=X_1+\cdots+X_{100}$. For a sum $S_n$ of independent identically distributed variables, the mean is $n\mu$ and the variance is $n\sigma^2$.

**3.** A score $X$ has mean $\mu=75$ and variance $\sigma^2=25$. Find a bound for $P(55\le X\le 95)$. Both endpoints are $20$ points from the mean. Chebyshev's inequality gives

$$
P(\lvert X-75\rvert\ge 20)\le \frac{25}{20^2}=\frac1{16}.
$$

Taking the complement gives $P(55<X<95)\ge 15/16$, so the inclusive interval also has probability at least $15/16$. The handwriting simplifies $25/400$ to $1/8$ and keeps the original inequality direction when taking the complement. The fraction and direction above follow from the stated variance and cutoff.

**)**

The topics are joint distributions, covariance, the law of large numbers, and the central limit theorem.

Chebyshev's inequality bounds the chance that $X$ differs from its mean $\mu$ by at least $a$ by the variance divided by $a^2$. To prove it, start from Markov's inequality, $P(U\ge b)\le E[U]/b$ for $U\ge 0$ and $b>0$. Applied to $U=\lvert X-\mu\rvert$ at $b=a$, this gives the bound $E[\lvert X-\mu\rvert]/a$. To obtain Chebyshev's bound, use $U=(X-\mu)^2$ and $b=a^2$. These choices describe the same event.

$$
P(\lvert X-\mu\rvert\ge a)=P((X-\mu)^2\ge a^2)
\le \frac{E[(X-\mu)^2]}{a^2}=\frac{\operatorname{Var}(X)}{a^2}.
$$

The weak law of large numbers states that $\lim_{n\to\infty}P(\lvert\bar X_n-\mu\rvert>\varepsilon)=0$ for every $\varepsilon>0$. As the sample size grows, it becomes less likely that the sample mean differs from the population mean by more than a fixed positive amount.

![[Kyle Kabasares - Probability and Statistics - Population and sample mean convergence.png|**Fig. 65** A sample comes from a population, and its mean converges in probability to the population mean as the sample size grows.]]

For independent observations of common variance $\sigma^2$,

$$
\bar X_n=\frac1n\sum_{i=1}^n X_i,
\qquad
\operatorname{Var}(\bar X_n)
=\frac1{n^2}\sum_{i=1}^n\operatorname{Var}(X_i)
=\frac{n\sigma^2}{n^2}=\frac{\sigma^2}{n}.
$$

Chebyshev's inequality bounds $P(\lvert\bar X_n-\mu\rvert>\varepsilon)$ by $\operatorname{Var}(\bar X_n)/\varepsilon^2=\sigma^2/(n\varepsilon^2)$, which tends to zero.

The preceding bound $\sigma^2/(n\varepsilon^2)$ tends to zero as $n\to\infty$.

**Central limit theorem**

Imagine repeatedly drawing samples from the population and recording a mean for each sample. The sampling distribution of those means is centered at the population mean $\mu$ and becomes approximately normal for large samples.

![[Kyle Kabasares - Probability and Statistics - Repeated samples from a population.png|**Fig. 66** Repeated samples from the same population yield separate sample means.]]

For a uniform population with $E[X]=0.5$, there are many more ways to obtain an average near $0.5$ than near $0.1$ or $0.9$ as the number of observations per sample increases.

![[Kyle Kabasares - Probability and Statistics - Uniform population in the central limit theorem example.png|**Fig. 67** The population distribution is drawn with a flat density and mean $0.5$.]]

![[Kyle Kabasares - Probability and Statistics - Bell shaped distribution of sample means.png|**Fig. 68** The sampling distribution of the mean is drawn as a bell curve centered at $\mu$.]]

##### Review of the mean and variance of an average

For independent and identically distributed variables, the average of the first $n$ is $\bar X_n=(X_1+\cdots+X_n)/n$. If the variables have common mean $\mu$ and variance $\sigma^2$, then

$$
E[\bar X_n]=\frac1n E[X_1+\cdots+X_n]
=\frac1n(\mu+\cdots+\mu)=\mu,
$$

$$
\operatorname{Var}(\bar X_n)
=\frac1{n^2}\operatorname{Var}(X_1+\cdots+X_n)
=\frac1{n^2}(\sigma^2+\cdots+\sigma^2)
=\frac{\sigma^2}{n}.
$$

The variance calculation uses independence and a common variance, and the mean calculation uses a common expectation.

##### Chebyshev's inequality in standard deviations

Let $Y$ have mean $\mu$ and variance $\sigma^2>0$. Set $a=k\sigma$ for $k>0$ in Chebyshev's inequality. Then

$$
P(\lvert Y-\mu\rvert\ge k\sigma)
\le \frac{\operatorname{Var}(Y)}{(k\sigma)^2}=\frac1{k^2}.
$$

Taking the complement yields

$$
P(\lvert Y-\mu\rvert<k\sigma)
=1-P(\lvert Y-\mu\rvert\ge k\sigma)\ge 1-\frac1{k^2}.
$$

As a rough rule, most probability mass lies within a few standard deviations of the expectation.

##### Law of large numbers example

Let $X_i$ be the outcome of the $i$th independent coin toss, coded as $1$ for heads and $0$ for tails. Then $p=P(X_i=1)=E[X_i]$, and $\bar X_n$ is the fraction of heads after $n$ tosses. With $p=1/2$, how large should $n$ be for $P(0.4\le\bar X_n\le0.6)\ge0.7$?

Here $\mu=0.5$ and $\operatorname{Var}(\bar X_n)=p(1-p)/n=1/(4n)$. By Chebyshev's inequality,

$$
\begin{aligned}
P(0.4\le\bar X_n\le0.6)
&=1-P(\lvert\bar X_n-\mu\rvert>0.1)\\
&\ge 1-\frac{\operatorname{Var}(\bar X_n)}{(0.1)^2}
=1-\frac{25}{n}.
\end{aligned}
$$

Require $1-25/n\ge0.7$, giving $n\ge25/0.3=83.\overline{3}$. Thus $84$ tosses suffice by this bound.

##### Worksheet 8

For the Bernoulli sample mean, $E[\bar X_n]=p$ and $\operatorname{Var}(\bar X_n)=p(1-p)/n\le 1/(4n)$ for every $p\in[0,1]$. The maximum occurs at $p=1/2$. Thus, writing $\mu=p$,

$$
P(\lvert\bar X_n-\mu\rvert<a)
=1-P(\lvert\bar X_n-\mu\rvert\ge a)
\ge 1-\frac{\operatorname{Var}(\bar X_n)}{a^2}
\ge 1-\frac1{4na^2}.
$$

**1a.** For error less than $0.2$ with probability at least $0.9$, require $1-6.25/n\ge 0.9$. This gives $n\ge 6.25/0.1=62.5$, so $n\ge 63$ suffices.

**1b.** For error at most $0.1$ with probability at least $0.9$, the same bound gives $1-25/n\ge0.9$. This holds for $n\ge250$.

**1c.** For error at most $0.2$ with probability at least $0.95$, the bound gives $1-6.25/n\ge0.95$. This holds for $n\ge125$.

##### Joint distributions and independence

The joint distribution of two discrete random variables $X$ and $Y$ defined on the same sample space $\Omega$ specifies probabilities for every pair of values. The joint probability mass function $p:\mathbb R^2\to[0,1]$ is $p(a,b)=P(X=a,Y=b)$.

For two independent throws of a fair die, let $S$ be the sum and $M$ the maximum. Then $p(a,b)=P(S=a,M=b)$. For example, $S=7$ and $M=4$ can occur only as the ordered pairs $(3,4)$ and $(4,3)$. Therefore $P(S=7,M=4)=2/36$.

| $S$ | $M=1$ | $M=2$ | $M=3$ | $M=4$ | $M=5$ | $M=6$ | $P(S=a)$ |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 2 | $1/36$ | 0 | 0 | 0 | 0 | 0 | $1/36$ |
| 3 | 0 | $2/36$ | 0 | 0 | 0 | 0 | $2/36$ |
| 4 | 0 | $1/36$ | $2/36$ | 0 | 0 | 0 | $3/36$ |
| 5 | 0 | 0 | $2/36$ | $2/36$ | 0 | 0 | $4/36$ |
| 6 | 0 | 0 | $1/36$ | $2/36$ | $2/36$ | 0 | $5/36$ |
| 7 | 0 | 0 | 0 | $2/36$ | $2/36$ | $2/36$ | $6/36$ |
| 8 | 0 | 0 | 0 | $1/36$ | $2/36$ | $2/36$ | $5/36$ |
| 9 | 0 | 0 | 0 | 0 | $2/36$ | $2/36$ | $4/36$ |
| 10 | 0 | 0 | 0 | 0 | $1/36$ | $2/36$ | $3/36$ |
| 11 | 0 | 0 | 0 | 0 | 0 | $2/36$ | $2/36$ |
| 12 | 0 | 0 | 0 | 0 | 0 | $1/36$ | $1/36$ |
| $P(M=b)$ | $1/36$ | $3/36$ | $5/36$ | $7/36$ | $9/36$ | $11/36$ | 1 |

The right column gives the marginal probabilities for the sum, and the bottom row gives those for the maximum.

For a joint continuous distribution with density $f$, the probability of a rectangle is

$$
P(a_1\le X\le b_1,\ a_2\le Y\le b_2)
=\int_{a_2}^{b_2}\int_{a_1}^{b_1}f(x,y)\,dx\,dy,
$$

where $a_1\le b_1$ and $a_2\le b_2$. Integrating the joint density over all of $\mathbb R^2$ gives $1$. The joint distribution function and its relation to the density are

$$
F(a,b)=\int_{-\infty}^b\int_{-\infty}^a f(x,y)\,dx\,dy,
\qquad
f(x,y)=\frac{\partial^2 F(x,y)}{\partial x\,\partial y}
$$

where the mixed derivative recovers the density at points of continuity.

Suppose $f(x,y)=\frac{2}{75}(2x^2y+xy^2)$ on $0\le x\le 3$, $1\le y\le 2$, and zero elsewhere. Compute the probability of $1<X\le 2$ and $4/3\le Y\le 5/3$.

$$
\begin{aligned}
P\left(1<X\le 2,\ \tfrac43\le Y\le \tfrac53\right)
&=\frac{2}{75}\int_{4/3}^{5/3}\int_1^2(2x^2y+xy^2)\,dx\,dy\\
&=\frac{2}{75}\int_{4/3}^{5/3}
\left[\frac23 x^3y+\frac12x^2y^2\right]_{x=1}^{x=2}dy\\
&=\frac{2}{75}\int_{4/3}^{5/3}\left(\frac{14}{3}y+\frac32 y^2\right)dy\\
&=\frac{2}{75}\left[\frac{14}{6}y^2+\frac12y^3\right]_{4/3}^{5/3}\\
&=\frac{2}{75}\left(\frac{14}{6}+\frac{61}{54}\right)=\frac{187}{2025}.
\end{aligned}
$$

The handwriting boxes $15/6$ after omitting the prefactor $2/75$ and dropping the cube when substituting into the antiderivative. The calculation above retains both.

## Source

Kyle Kabasares, *Probability and Statistics (Math 32, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\thermal{\bar x}_{11}$ | $\unit{{}^\circ C}$ | Mean temperature | Sample mean of eleven hourly temperature readings. |
