---
title: "Discrete and continuous probability distributions"
---

> [!TLDR]
> Compute distribution functions, probabilities, and quantiles for common discrete and continuous models.

## Worked lecture material

In the radio example, partition both the numerator and the denominator by factory. The calculation assumes that the two defects are independent once the factory is fixed.

$$
\begin{aligned}
P(D_2\mid D_1)
&=\frac{P(D_1\cap D_2)}{P(D_1)}\\
&=\frac{P(D_1\cap D_2\mid A)P(A)+P(D_1\cap D_2\mid B)P(B)}
{P(D_1\mid A)P(A)+P(D_1\mid B)P(B)}\\
&=\frac{(0.05)^2(1/2)+(0.01)^2(1/2)}{0.05(1/2)+0.01(1/2)}
\simeq0.0433.
\end{aligned}
$$

##### Discrete random variables

A random variable can record just the aspect of the outcome that is of interest. In Settlers of Catan, the sum $S$ of two dice determines the number rolled.

![[Kyle Kabasares - Probability and Statistics - Settlers of Catan numbered hexagons.png|**Fig. 15** A sketch of numbered hexagonal tiles.]]

| Die 2 \ Die 1 | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| 5 | 6 | 7 | 8 | 9 | 10 | 11 |
| 6 | 7 | 8 | 9 | 10 | 11 | 12 |

Count occurrences among the 36 equally likely ordered pairs. The page gives $P(S=2)=1/36$, $P(S=3)=2/36$, $P(S=4)=3/36$, $P(S=7)=6/36$, $P(S=11)=2/36$, and $P(S=12)=1/36$. The probability mass function (PMF) is $p_S(a)=P(S=a)$.

In “Max Catan,” take $M$ to be the larger of the two rolls.

| Die 2 \ Die 1 | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | 1 | 2 | 3 | 4 | 5 | 6 |
| 2 | 2 | 2 | 3 | 4 | 5 | 6 |
| 3 | 3 | 3 | 3 | 4 | 5 | 6 |
| 4 | 4 | 4 | 4 | 4 | 5 | 6 |
| 5 | 5 | 5 | 5 | 5 | 5 | 6 |
| 6 | 6 | 6 | 6 | 6 | 6 | 6 |

##### Cumulative distribution functions

The cumulative distribution function (CDF) of $X$ is $F_X(a)=P(X\leq a)$. For the maximum $M$ of two fair dice, $F_M(0)=0$, $F_M(1)=1/36$, $F_M(2)=4/36$, $F_M(3)=9/36$, and $F_M(6)=36/36=1$.

##### Five common discrete random variables

**1. Discrete uniform.** A discrete uniform random variable on $\{1,2,\ldots,N\}$ has PMF $p_X(k)=P(X=k)=1/N$ on those integers and zero elsewhere. Examples include a fair die with $N=6$, roulette, and lotteries.

**2. Bernoulli.** Write $X\sim\operatorname{Ber}(p)$ if $P(X=1)=p$ and $P(X=0)=1-p$. This models a coin that can be biased, with $p$ the probability of heads, or any experiment with two outcomes. One run of the experiment is a Bernoulli trial.

**3. Binomial.** The sum of $n$ independent $\operatorname{Ber}(p)$ random variables has a binomial distribution, written $X\sim\operatorname{Bin}(n,p)$.

For $X\sim\operatorname{Bin}(n,p)$, choose the $k$ positions that contain successes. Each arrangement has $k$ success factors and $n-k$ failure factors.

$$
P(X=k)=\binom nk p^k(1-p)^{n-k},
\qquad k=0,1,\ldots,n.
$$

For $n=3$ and $p=1/4$, the example gives

| $k$ | $P(X=k)$ | Approximate value |
| ---: | --- | ---: |
| 0 | $(3/4)^3$ | 0.42 |
| 1 | $3(1/4)(3/4)^2$ | 0.42 |
| 2 | $3(1/4)^2(3/4)$ | 0.14 |
| 3 | $(1/4)^3$ | 0.0156 |

The R expression is `dbinom(k, size = n, prob = p)`. For example, use `dbinom(1, size = 3, prob = 1/4)`.

##### Geometric distribution

**4. Geometric.** The trial number of the first success is $X\sim\operatorname{Geo}(p)$ with $P(X=k)=p(1-p)^{k-1}$ for $k=1,2,\ldots$. The page writes `dgeom(k, prob = p)` for this probability. With the trial-count convention used here, use `dgeom(k - 1, prob = p)` because the R argument counts the preceding failures.

The event $X>n$ means the first $n$ trials failed, so $P(X>n)=(1-p)^n$. The same result follows by summing the tail.

$$
\sum_{k=n+1}^{\infty}p(1-p)^{k-1}
=p(1-p)^n\bigl[1+(1-p)+(1-p)^2+\cdots\bigr]=(1-p)^n.
$$

![[Kyle Kabasares - Probability and Statistics - Nested events for geometric memorylessness.png|**Fig. 16** For nonnegative $n$ and $k$, the event $X>n+k$ is contained in $X>k$.]]

For $0<p<1$, this containment gives

$$
P(X>n+k\mid X>k)
=\frac{P(X>n+k)}{P(X>k)}
=\frac{(1-p)^{n+k}}{(1-p)^k}
=(1-p)^n=P(X>n).
$$

This is the **memoryless property**, which characterizes the geometric distribution on the positive integers.

##### Poisson distribution

**5. Poisson.** Write $X\sim\operatorname{Pois}(\mu)$ when

$$
P(X=k)=\frac{\mu^k e^{-\mu}}{k!},
\qquad k=0,1,2,\ldots.
$$

This distribution is the limit of a binomial distribution as $n\to\infty$ with $np=\mu$ held fixed. The notes refer to the lecture slides for the derivation. When $X$ counts events during a fixed interval, $\mu$ is the average number in that interval.

For an average of five complaints per month, the probabilities of zero, one, and two complaints are $e^{-5}$, $5e^{-5}$, and $5^2e^{-5}/2$, respectively. The page also lists the probabilities for three through seven complaints. The following values use the formula above and round to three decimal places.

| Complaints $k$ | $P(X=k)$ |
| ---: | ---: |
| 0 | 0.007 |
| 1 | 0.034 |
| 2 | 0.084 |
| 3 | 0.140 |
| 4 | 0.175 |
| 5 | 0.175 |
| 6 | 0.146 |
| 7 | 0.104 |

The handwritten R expression is `dpois(k, lambda = mu)`. The second probability line repeats $X=0$ in the handwriting, but its factorial and power both specify $X=1$.

##### Continuous random variables

The lecture starts with an image-smoothing model. Let $x_{ij}$ denote a candidate image and $y_{ij}$ the observed image. A cost function combines a data fidelity term and a weighted roughness term $R(x)$.

$$
f(x)=\sum_{i,j}(x_{ij}-y_{ij})^2+\lambda R(x).
$$

The notes say that the constant $\lambda$ can be chosen based on observations of smooth images. A probability density for the candidate image has the form $g(x)\propto e^{-f(x)}$. In the continuous models considered here, a probability density function describes the distribution.

##### Probability density and cumulative distribution

For a continuous random variable with probability density function (PDF) $f$, the probability of an interval is

$$
P(a\leq X\leq b)=\int_a^b f(x)\,dx.
$$

A single point has probability $P(X=a)=\int_a^a f(x)\,dx=0$. Thus including or excluding the interval endpoints gives the same probability.

![[Kyle Kabasares - Probability and Statistics - Interval probability as area under a density.png|**Fig. 17** The shaded area from $a$ to $b$ is the probability of the interval.]]

The cumulative distribution function is $F(x)=P(X\leq x)=\int_{-\infty}^x f(t)\,dt$. At points where the density is continuous, differentiation recovers $f(x)=F'(x)$.

![[Kyle Kabasares - Probability and Statistics - CDF and accumulated density area.png|**Fig. 18** The CDF on the left records the area under the density to the left of the cutoff on the right.]]

##### Continuous uniform distribution

For a uniform variable on $[a,b]$, the density is constant at $1/(b-a)$ on the interval and zero elsewhere. The rectangle has area one.

![[Kyle Kabasares - Probability and Statistics - Rectangular density for a uniform variable.png|**Fig. 19** The uniform density is a rectangle over $[a,b]$.]]

For $a\leq x\leq b$, integrating the constant density from $a$ to $x$ gives $(x-a)/(b-a)$. The full CDF is

$$
F(x)=
\begin{cases}
0,&x<a,\\
(x-a)/(b-a),&a\leq x\leq b,\\
1,&x>b.
\end{cases}
$$

The notes mention using the continuous uniform distribution as an approximation to the discrete uniform distribution.

In the Dungeons & Dragons example, approximate a roll of a fair 30-sided die by $X\sim U(0,30)$. Then $P(X\leq20)=20/30=2/3$. At this integer cutoff, the discrete model gives the same ratio.

![[Kyle Kabasares - Probability and Statistics - Continuous uniform approximation for a thirty sided die.png|**Fig. 20** The uniform area up to 20 occupies two-thirds of the interval from 0 to 30.]]

##### Exponential distribution

For $X\sim\operatorname{Exp}(\lambda)$, with $\lambda>0$, the density is proportional to $e^{-\lambda x}$ for $x\geq0$ and zero for $x<0$. Choose the constant $C$ by requiring total area one.

![[Kyle Kabasares - Probability and Statistics - Area under an exponential density.png|**Fig. 21** The exponential density decreases from its value at the origin.]]

$$
1=C\int_0^\infty e^{-\lambda x}\,dx
=C\left[-\frac{e^{-\lambda x}}{\lambda}\right]_0^\infty
=\frac C\lambda.
$$

Thus $C=\lambda$, and $f(x)=\lambda e^{-\lambda x}$ for $x\geq0$.

In a lifetime example, $X$ is the life of a computer measured in years, with $X\sim\operatorname{Exp}(1/2)$. To find the probability it lasts more than three years, start with

$$
P(X>3)=1-P(X\leq3)=1-\int_0^3 \frac12 e^{-x/2}\,dx.
$$

![[Kyle Kabasares - Probability and Statistics - Exponential lifetime tail past three years.png|**Fig. 22** The shaded tail represents lifetimes greater than three years.]]

For the computer lifetime, the integral gives $P(X>3)=1+(e^{-3/2}-1)=e^{-3/2}\simeq0.22$.

An exponential distribution models waiting times at a constant event rate. The notes give a rate of 5% per year as an example. Like the geometric distribution, it is memoryless.

$$
P(X>s+t\mid X>s)=P(X>t),
\qquad s,t\geq0.
$$

##### Pareto distribution

For the Pareto or power-law distribution $X\sim\operatorname{Par}(\alpha)$, the density is proportional to $x^{-\alpha-1}$ for $x\geq1$ and vanishes for $x<1$.

![[Kyle Kabasares - Probability and Statistics - Pareto density sketch.png|**Fig. 23** The Pareto density decreases along its positive tail.]]

With $\alpha>0$, normalization gives

$$
1=C\int_1^\infty x^{-\alpha-1}\,dx
=C\left[-\frac{x^{-\alpha}}{\alpha}\right]_1^\infty=\frac{C}{\alpha}.
$$

Thus $f(x)=\alpha/x^{\alpha+1}$ for $x\geq1$.

##### Normal distribution

The normal or Gaussian density is proportional to $\exp[-(x-\mu)^2/(2\sigma^2)]$. Here $\mu$ is the mean and $\sigma$ is the standard deviation. The next calculation finds the normalization constant.

##### Normalizing the Gaussian density

Set $w=(x-\mu)/\sigma$, with $\sigma>0$, so $dx=\sigma\,dw$. The integral of the unnormalized density is $\sigma I$, where $I=\int_{-\infty}^{\infty}e^{-w^2/2}\,dw$. Square $I$ and use a different integration variable for each factor.

$$
\begin{aligned}
I^2
&=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}
e^{-(x^2+y^2)/2}\,dx\,dy\\
&=\int_0^{2\pi}\int_0^\infty e^{-r^2/2}r\,dr\,d\theta\\
&=\int_0^{2\pi}\int_0^\infty e^{-u}\,du\,d\theta=2\pi.
\end{aligned}
$$

In the last step, use $u=r^2/2$, so $du=r\,dr$. The integral $I$ is positive, hence $I=\sqrt{2\pi}$. The unnormalized density integrates to $\sigma\sqrt{2\pi}$.

For $X\sim N(\mu,\sigma^2)$, the normalized density and cumulative distribution function are

$$
f(x)=\frac{1}{\sigma\sqrt{2\pi}}\exp\!\left[-\frac12\left(\frac{x-\mu}{\sigma}\right)^2\right],
\qquad
F(x)=\int_{-\infty}^x f(t)\,dt.
$$

![[Kyle Kabasares - Probability and Statistics - Gaussian density centered at the mean.png|**Fig. 24** Gaussian density centered at $x=\mu$.]]

The Gaussian CDF has no elementary antiderivative expression. The handwriting says “analytically integrable,” but the suggested methods are numerical evaluation in R and lookup in Table B.1 on CROPS, which gives right-tail probabilities for $N(0,1)$.

##### Example with IQ scores

Model IQ scores by $X\sim N(100,15^2)$ and find $P(X\leq125)$. The R calculation `pnorm(125, mean = 100, sd = 15)` gives approximately $0.95$. For the table method, standardize to $Z=(X-100)/15$.

$$
P(X\leq125)=P\left(Z\leq\frac{125-100}{15}\right)
=P(Z\leq5/3)\simeq1-P(Z>1.67)=1-0.0475=0.9525.
$$

##### Laplace distribution

Write $X\sim\operatorname{Lap}(\mu,\beta)$ if $f(x)\propto e^{-\lvert x-\mu\rvert/\beta}$, where $\beta>0$.

![[Kyle Kabasares - Probability and Statistics - Laplace density with a pointed peak.png|**Fig. 25** The Laplace density has a pointed peak at its location parameter.]]

Normalize the Laplace density by shifting to $w=x-\mu$ and using symmetry.

$$
\int_{-\infty}^{\infty} e^{-\lvert x-\mu\rvert/\beta}\,dx
=2\int_0^\infty e^{-w/\beta}\,dw
=2[-\beta e^{-w/\beta}]_0^\infty=2\beta.
$$

Thus $f(x)=e^{-\lvert x-\mu\rvert/\beta}/(2\beta)$.

![[Kyle Kabasares - Probability and Statistics - Laplace and standard normal density comparison.png|**Fig. 26** The Laplace sketch has a cusp, while the standard normal curve has a smooth peak.]]

##### Quantiles

For a continuous distribution with strictly increasing CDF at the cutoff, the quantile at probability $p$ is the value with cumulative area $p$. In percent notation this is the $(100p)$th percentile.

![[Kyle Kabasares - Probability and Statistics - Shaded probability up to a quantile.png|**Fig. 27** The cutoff has cumulative probability $p$.]]

![[Kyle Kabasares - Probability and Statistics - Area up to the seventy fifth percentile.png|**Fig. 28** A cumulative area of $0.75$ defines the 75th percentile.]]

The median is the 50th percentile. For an exponential density with rate $\lambda$, its median $m$ satisfies

$$
\int_0^m\lambda e^{-\lambda x}\,dx=[-e^{-\lambda x}]_0^m
=1-e^{-\lambda m}=\frac12.
$$

![[Kyle Kabasares - Probability and Statistics - Median splits the exponential density.png|**Fig. 29** The exponential density has area one-half on each side of its median.]]

The exponential median satisfies $e^{-\lambda m}=1/2$. Taking logarithms gives

$$
-\lambda m=\ln(1/2),
\qquad
m=-\frac{\ln(1/2)}{\lambda}=\frac{\ln 2}{\lambda}.
$$

## Source

Kyle Kabasares, *Probability and Statistics (Math 32, UC Merced 2015)*.
