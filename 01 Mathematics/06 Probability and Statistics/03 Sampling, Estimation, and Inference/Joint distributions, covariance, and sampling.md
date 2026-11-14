---
title: "Joint distributions, covariance, and sampling"
---

> [!TLDR]
> Find marginal and joint probabilities, quantify dependence, and use the variance of a sample mean.

## Worked lecture material

##### Joint distributions and independence

For discrete random variables $X$ and $Y$, their joint probability mass function is

$$
p(x,y)=P(X=x,Y=y)=P(\{X=x\}\cap\{Y=y\}).
$$

The Math 32 survey example cross-tabulates two scores from 1 to 5. One of the statements is “Lecture examples help my learning.” The table gives the joint counts for the 60 respondents, with marginal counts at the edges.

| $Y$ \ $X$ | 1 | 2 | 3 | 4 | 5 | Total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| 2 | 0 | 0 | 1 | 0 | 0 | 1 |
| 3 | 0 | 1 | 2 | 1 | 1 | 5 |
| 4 | 2 | 2 | 4 | 3 | 2 | 13 |
| 5 | 0 | 5 | 6 | 17 | 13 | 41 |
| Total | 2 | 8 | 13 | 21 | 16 | 60 |

Divide each count by 60 to get the probability for a student selected uniformly from the respondents. For example, $p(4,5)=17/60$, $p_X(4)=21/60$, and $p_Y(5)=41/60$. The probabilities sum to one. In general, sum over the other variable to get a marginal PMF.

$$
p_X(x)=\sum_y p(x,y),\qquad p_Y(y)=\sum_x p(x,y).
$$

##### Joint continuous distributions

A joint density $f(x,y)$ is nonnegative and integrates to one over the plane. The joint cumulative distribution function is

$$
F(x,y)=P(X\leq x,Y\leq y)
=\int_{-\infty}^x\int_{-\infty}^y f(a,b)\,db\,da.
$$

**Joint distributions and independence ·**

The survey compares whether lecture examples or discussions help students learn. The marginal distributions on [[#Joint distributions and independence|the section on Joint distributions and independence]] give

$$
E[X]=\sum_{k=1}^5 kP(X=k)\simeq3.68,\qquad
E[Y]=\sum_{k=1}^5 kP(Y=k)\simeq4.57.
$$

##### Covariance

To study $\operatorname{Var}(X+Y)$, first write the mean of the sum using the joint PMF. For the discrete values $j,k$,

$$
\begin{aligned}
E[X+Y]
&=\sum_j\sum_k (j+k)P(X=j,Y=k)\\
&=\sum_j j\sum_k P(X=j,Y=k)+\sum_k k\sum_j P(X=j,Y=k)\\
&=\sum_j jP(X=j)+\sum_k kP(Y=k)=E[X]+E[Y].
\end{aligned}
$$

This derivation uses the marginal sums and applies even when $X$ and $Y$ are dependent. Recall $\operatorname{Var}(Z)=E[(Z-E[Z])^2]=E[Z^2]-(E[Z])^2$. For the sum, linearity gives

$$
\operatorname{Var}(X+Y)=E\bigl[((X-E[X])+(Y-E[Y]))^2\bigr].
$$

Expanding the squared sum gives

$$
\begin{aligned}
\operatorname{Var}(X+Y)
&=E[(X-E[X])^2]+E[(Y-E[Y])^2]+2E[(X-E[X])(Y-E[Y])] \\
&=\operatorname{Var}(X)+\operatorname{Var}(Y)+2\operatorname{Cov}(X,Y),
\end{aligned}
$$

where $\operatorname{Cov}(X,Y)=E[(X-E[X])(Y-E[Y])]$.

Positive covariance describes a tendency for deviations from the means to have the same sign. With negative covariance, the deviations tend to have opposite signs.

![[Kyle Kabasares - Probability and Statistics - Positive and negative covariance.png|**Fig. 55** Positive and negative covariance sketched around the point $(E[X],E[Y])$.]]

Covariance is symmetric, $\operatorname{Cov}(X,Y)=\operatorname{Cov}(Y,X)$, and its magnitude can change with a change of units, for example when replacing $X$ with $rX+s$. We therefore often work with the correlation coefficient

$$
\rho(X,Y)=\frac{\operatorname{Cov}(X,Y)}{\operatorname{sd}(X)\operatorname{sd}(Y)},
\qquad -1\le \rho(X,Y)\le 1.
$$

The notes distinguish association from causation. In the counterfactual description, $X$ causes $Y$ if $Y$ would not have happened without $X$. Randomization in an experiment can support a causal interpretation of an observed association.

An alternate expression for covariance is

$$
\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y].
$$

**Joint continuous distributions**

If $X$ and $Y$ have a joint probability density function $f(x,y)$, then $f(x,y)\ge 0$ and

$$
\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}f(x,y)\,dx\,dy=1.
$$

The joint distribution function is

$$
F(x,y)=\int_{-\infty}^{x}\int_{-\infty}^{y}f(a,b)\,db\,da
=P(X\le x,Y\le y).
$$

The marginal densities are

$$
f_X(x)=\int_{-\infty}^{\infty} f(x,y)\,dy,
\qquad
f_Y(y)=\int_{-\infty}^{\infty} f(x,y)\,dx.
$$

For a made-up example with simple integrals, take

$$
f(x,y)=\begin{cases}
x+y & 0\le x\le 1,\ 0\le y\le 1,\\
0 & \text{elsewhere}.
\end{cases}
$$

For $0\le x\le 1$,

$$
f_X(x)=\int_0^1(x+y)\,dy
=\left[xy+\frac{y^2}{2}\right]_0^1=x+\frac12.
$$

Similarly, $f_Y(y)=y+\tfrac12$ for $0\le y\le 1$. Each marginal density is zero outside $[0,1]$.

![[Kyle Kabasares - Probability and Statistics - Linear marginal density.png|**Fig. 56** The marginal density rises from $1/2$ at $0$ to $3/2$ at $1$.]]

To compute $\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]$, start with

$$
\begin{aligned}
E[XY]
&=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}xyf(x,y)\,dx\,dy \\
&=\int_0^1\int_0^1 xy(x+y)\,dx\,dy
=\int_0^1\int_0^1(x^2y+xy^2)\,dx\,dy \\
&=\int_0^1\left[\frac{x^3y}{3}+\frac{x^2y^2}{2}\right]_{x=0}^{x=1}dy
=\int_0^1\left(\frac y3+\frac{y^2}{2}\right)dy.
\end{aligned}
$$

##### )

Consider the joint density proportional to $e^{-\sqrt{x^2+y^2}/\tau}$, where $\tau>0$ is a parameter. To find the normalization constant, switch to polar coordinates and then substitute $w=r/\tau$, so that $r=\tau w$ and $dr=\tau\,dw$.

$$
\begin{aligned}
\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}
e^{-\sqrt{x^2+y^2}/\tau}\,dx\,dy
&=\int_0^{2\pi}\int_0^\infty e^{-r/\tau}r\,dr\,d\theta \\
&=2\pi\tau^2\int_0^\infty w e^{-w}\,dw \\
&=2\pi\tau^2.
\end{aligned}
$$

For the last integral, use integration by parts with $u=w$, $du=dw$, $dv=e^{-w}\,dw$, and $v=-e^{-w}$.

Integration by parts, $\int u\,dv=uv-\int v\,du$, completes the normalization calculation.

$$
\begin{aligned}
2\pi\tau^2\int_0^\infty we^{-w}\,dw
&=2\pi\tau^2\left(\left[-we^{-w}\right]_0^\infty
-\int_0^\infty -e^{-w}\,dw\right) \\
&=2\pi\tau^2(0-(-1))=2\pi\tau^2.
\end{aligned}
$$

Thus the joint density is

$$
f(x,y)=\frac{1}{2\pi\tau^2}e^{-\sqrt{x^2+y^2}/\tau}.
$$

##### Gaussian model

The Gaussian normalization integral separates as

$$
\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}
e^{-x^2/(2\sigma^2)}e^{-y^2/(2\sigma^2)}\,dx\,dy
=\left(\int_{-\infty}^{\infty} e^{-x^2/(2\sigma^2)}\,dx\right)
 \left(\int_{-\infty}^{\infty} e^{-y^2/(2\sigma^2)}\,dy\right).
$$

The joint density factors into the marginal densities.

$$
f(x,y)=
\underbrace{\frac{e^{-x^2/(2\sigma^2)}}{\sqrt{2\pi}\sigma}}_{f_X(x)}
\underbrace{\frac{e^{-y^2/(2\sigma^2)}}{\sqrt{2\pi}\sigma}}_{f_Y(y)}.
$$

Here $X$ and $Y$ are independent. The square root in the earlier model prevents this factorization. In that model $X$ and $Y$ are dependent and $\operatorname{Cov}(X,Y)=0$.

##### Power-law and exponential relationships

A power-law relationship becomes linear when plotting $\ln(y)$ against $\ln(x)$.

$$
y=\alpha x^\beta
\quad\Longrightarrow\quad
\ln(y)=\ln(\alpha x^\beta)=\ln(\alpha)+\beta\ln(x).
$$

For an exponential relationship, plotting $\ln(y)$ against $x$ gives a straight line.

$$
y=\alpha e^{\beta x}
\quad\Longrightarrow\quad
\ln(y)=\ln(\alpha e^{\beta x})=\ln(\alpha)+\beta x.
$$

##### Independence

For continuous random variables with joint density $f$, independence means the joint density factors as $f(x,y)=f_X(x)f_Y(y)$. For discrete random variables, independence means

$$
P(X=x,Y=y)=P(X=x)P(Y=y)
$$

for every $x$ and $y$. For example, if $X\sim\operatorname{Ber}(1/3)$ and $Y\sim\operatorname{Ber}(1/4)$ are independent, their joint probabilities are the products of the individual Bernoulli probabilities.

The notes return to the survey data.

| Response | $X=1$ | $X=2$ | $X=3$ | $X=4$ | $X=5$ | Total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| $Y=1$ | 0 | 0 | 0 | 0 | 0 | 0 |
| $Y=2$ | 0 | 0 | $1/60$ | 0 | 0 | $1/60$ |
| $Y=3$ | 0 | $1/60$ | $2/60$ | $1/60$ | $1/60$ | $5/60$ |
| $Y=4$ | $2/60$ | $2/60$ | $4/60$ | $3/60$ | $2/60$ | $13/60$ |
| $Y=5$ | 0 | $5/60$ | $6/60$ | $17/60$ | $13/60$ | $41/60$ |
| Total | $2/60$ | $8/60$ | $13/60$ | $21/60$ | $16/60$ | 1 |

If $X$ and $Y$ are dependent, information about $X$ helps predict $Y$, and vice versa.

##### Law of large numbers and central limit theorem

In the sampling model used here, the population is usually treated as effectively infinite.

##### Sample size and confidence intervals

How large is a large enough sample? The notes address this by approximating the population standard deviation $\sigma$ with the sample standard deviation $s$.

| Statistic | Population | Sample |
| --- | --- | --- |
| Mean | $\mu$ | $\bar x$ |
| Standard deviation | $\sigma$ | $s$ |

What is a confidence interval for $\mu$? For example, suppose $(2.5,3.0)$ is a $95\%$ confidence interval for $\mu$. Over repeated samples, $95\%$ of the intervals produced by the procedure will contain $\mu$. The notes introduce two common methods for constructing such intervals.

##### Preliminary results for the sample mean

Suppose $X_1,\ldots,X_n$ are independent and identically distributed with $E[X_i]=\mu$ and $\operatorname{sd}(X_i)=\sqrt{\operatorname{Var}(X_i)}=\sigma$. Define $\bar X_n=(X_1+\cdots+X_n)/n$. By linearity of expectation,

$$
E[\bar X_n]=\frac1n\bigl(E[X_1]+\cdots+E[X_n]\bigr)
=\frac1n(\mu+\cdots+\mu)=\mu.
$$

By independence,

$$
\begin{aligned}
\operatorname{Var}(\bar X_n)
&=\frac{1}{n^2}\operatorname{Var}(X_1+\cdots+X_n) \\
&=\frac{1}{n^2}\bigl(\operatorname{Var}(X_1)+\cdots+\operatorname{Var}(X_n)\bigr)\\
&=\frac{n\sigma^2}{n^2}=\frac{\sigma^2}{n}.
\end{aligned}
$$

Thus $E[\bar X_n]=\mu$ and $\operatorname{sd}(\bar X_n)=\sigma/\sqrt n$.

##### Binomial distribution

There are $n$ independent trials with identical success probability. Each trial has two outcomes, success with probability $p$ and failure with probability $q=1-p$. The probability of exactly $x$ successes is

$$
P(X=x)=\binom{n}{x}p^xq^{n-x},
\qquad
\binom{n}{x}=\frac{n!}{(n-x)!\,x!}.
$$

Suppose a multiple-choice test has 10 questions and five choices for each question. With independent random guessing, $p=1/5$ and $q=4/5$. The probability of getting exactly four questions right is

$$
P(X=4)=\binom{10}{4}\left(\frac15\right)^4
\left(\frac45\right)^6\approx 0.08808,
$$

or about $9\%$.

**)**

**1a.** Let $X\sim\operatorname{Exp}(1)$, so $f_X(x)=e^{-x}$ and $F_X(x)=1-e^{-x}$ for $x\ge 0$. For $Y=X/2$ and $y\ge 0$,

$$
F_Y(y)=P(Y\le y)=P(X/2\le y)=P(X\le 2y)=1-e^{-2y}.
$$

Thus $Y\sim\operatorname{Exp}(2)$.

**1b.** Let $X\sim\operatorname{Exp}(\lambda)$ with density $\lambda e^{-\lambda x}$ for $x\ge 0$. For $Y=\lambda X$ and $y\ge 0$,

$$
F_Y(y)=P(\lambda X\le y)
=P\left(X\le \frac y\lambda\right)
=1-e^{-\lambda(y/\lambda)}=1-e^{-y}.
$$

Thus $Y\sim\operatorname{Exp}(1)$. Both transformed CDFs are zero for $y<0$.

**2.** Let $X\sim\operatorname{Exp}(1)$ and $W=X^{1/\alpha}/\lambda$, with $\alpha,\lambda>0$. For $w\ge 0$,

$$
\begin{aligned}
F_W(w)&=P(W\le w)=P(X^{1/\alpha}\le \lambda w)\\
&=P(X\le (\lambda w)^\alpha)=1-e^{-(\lambda w)^\alpha}.
\end{aligned}
$$

**4.** Let $X\sim\operatorname{Par}(\alpha)$ with density $\alpha/x^{\alpha+1}$ for $x\ge 1$. The corrected Pareto CDF written in the margin is $F_X(x)=1-x^{-\alpha}$ for $x\ge 1$. Using this CDF for $Y=\ln(X)$ gives

$$
F_Y(y)=P(\ln(X)\le y)=P(X\le e^y)=1-e^{-\alpha y}
\qquad (y\ge 0).
$$

The CDF is zero for $y<0$, so $Y\sim\operatorname{Exp}(\alpha)$.

##### Poisson distribution

Under a Poisson model with an expected $\lambda$ occurrences in the specified interval, the probability of exactly $x$ occurrences is

$$
f(x;\lambda)=\frac{\lambda^x e^{-\lambda}}{x!}.
$$

A fast-food restaurant expects two customers every three minutes on average. The mean count in nine minutes is $\lambda=6$. The probability of four or fewer customers arriving in nine minutes is

$$
P(X\le 4)=\sum_{x=0}^4 P(X=x)
=\frac{6^0e^{-6}}{0!}+\frac{6^1e^{-6}}{1!}+\frac{6^2e^{-6}}{2!}
+\frac{6^3e^{-6}}{3!}+\frac{6^4e^{-6}}{4!}
\approx 0.2851.
$$

##### Expected value

If the outcomes $x_1,\ldots,x_n$ have probabilities $p_1,\ldots,p_n$, then

$$
E[X]=x_1p_1+x_2p_2+\cdots+x_np_n.
$$

Consider a spinner game that costs one dollar to play.

| Prize (dollars) | 0 | 2 | 1 | 10 |
| --- | ---: | ---: | ---: | ---: |
| Probability | $1/2$ | $1/4$ | $1/8$ | $1/8$ |

![[Kyle Kabasares - Probability and Statistics - Expected payoff spinner.png|**Fig. 57** The spinner's sectors encode the probabilities of the four prizes.]]

Subtract the entry fee from the expected prize to get the expected net winnings.

$$
E[X]=-1+0\left(\frac12\right)+1\left(\frac18\right)
+2\left(\frac14\right)+10\left(\frac18\right)
=\frac{-8+1+4+10}{8}=\frac78.
$$

The average net winnings are 0.875 dollars per game.

##### Continuous random variables and probability density functions

A continuous random variable can take values across an interval. For a variable $X$ with probability density $f$, the interval probability is $P(a\le X\le b)=\int_a^b f(x)\,dx$. The density satisfies $f(x)\ge 0$ everywhere and $\int_{-\infty}^{\infty} f(x)\,dx=1$.

For example, let the call-center waiting time $T$ be exponential with mean $\quantity{6}{min}$. With $t$ measured in minutes,

$$
f_T(t)=\begin{cases}
0 & t<0,\\
\frac16 e^{-t/6} & t\ge 0.
\end{cases}
$$

The probability that the call is answered in the first two minutes is

$$
P(0\le T\le 2)=\int_0^2\frac16 e^{-t/6}\,dt
=\left[-e^{-t/6}\right]_0^2=1-e^{-1/3}.
$$

The probability of waiting at least two minutes in the call-center example is

$$
P(T\ge 2)=\int_2^\infty \frac16 e^{-t/6}\,dt
=1-\int_0^2\frac16 e^{-t/6}\,dt=e^{-1/3}\approx 71.65\%.
$$

##### The exponential distribution

The exponential distribution models a continuous waiting time until an event. In this model, conditional on the event not having occurred yet, the probability of occurrence in a short interval is approximately proportional to the length of that interval.

The density with rate parameter $\lambda$ is

$$
f(x;\lambda)=\begin{cases}
\lambda e^{-\lambda x} & x\ge 0,\\
0 & x<0.
\end{cases}
$$

The expected duration is $\mu=1/\lambda$, so $\lambda=1/\mu$. If the expected duration is $\quantity{5}{min}$, for example, then the rate is $\quantity{0.2}{min^{-1}}$.

The cumulative distribution function gives the probability of a lifetime at most $x$.

$$
F(x;\lambda)=P(X\le x)=\begin{cases}
1-e^{-\lambda x} & x\ge 0,\\
0 & x<0.
\end{cases}
$$

For $\lambda=0.3$ and $x=10$, the exponential CDF gives $P(X\le 10)=1-e^{-(0.3)(10)}=1-e^{-3}$. The mean and variance are

$$
E[X]=\frac1\lambda=\mu,
\qquad
\operatorname{Var}(X)=\frac1{\lambda^2}=\mu^2=(E[X])^2.
$$

##### Phone-booth example

A phone call lasts an exponentially distributed number of minutes, with rate $\lambda=1/10$ per minute. Someone starts a call just before you arrive. Find the probabilities of waiting less than five minutes, more than five minutes, and between five and ten minutes. Also find the expected waiting time and its variance.

##### A

The probability of a wait under five minutes is $P(X\le 5)=1-e^{-5/10}\approx 0.3935$.

##### B

The question asks about five minutes, while the handwritten calculation uses ten. The survival formula gives both values.

$$
P(X>5)=e^{-5/10}\approx 0.6065,
\qquad
P(X\ge 10)=1-P(X\le 10)=e^{-10/10}=\frac1e\approx 0.3679.
$$

##### C

The event of being inside the interval is the complement of being below or above it. The two outside events are disjoint.

$$
P(5<X<10)=1-[P(X\le 5)+P(X\ge 10)]
=e^{-1/2}-e^{-1}\approx 0.2387.
$$

The notes report $0.2388$ after rounding the two outside probabilities before subtracting. The mean wait is $\quantity{10}{min}$ and the variance is $\quantity{100}{min^2}$.

The phone-booth interval probability can also be found directly by integrating the density.

$$
P(5<X<10)=\int_5^{10}\frac1{10}e^{-x/10}\,dx
=\left[-e^{-x/10}\right]_5^{10}
=-e^{-1}+e^{-1/2}\approx 0.2387.
$$

##### Discrete and continuous random variables

The notes use two examples. A fire department with a weight requirement of 150 to 250 pounds can model a firefighter's weight as continuous across that interval. The number of heads in $n$ coin flips is discrete, taking only integer values from $0$ to $n$.

For an independent and identically distributed sample, recall

$$
\bar X_n=\frac1n(X_1+X_2+\cdots+X_n),
\qquad E[\bar X_n]=E[X_i]=\mu,
$$

$$
\operatorname{Var}(\bar X_n)=\frac{\sigma^2}{n},
\qquad
\operatorname{sd}(\bar X_n)=\frac{\sigma}{\sqrt n}.
$$

The histogram of sample means becomes more bell-shaped as $n$ grows. Can we compute a confidence interval for $\mu$ without resampling? The notes list Chebyshev's inequality, which gives conservative confidence intervals, and the central limit theorem, which gives large-sample confidence intervals. They give $n\ge 30$ as a rule of thumb.

To cut the standard deviation of the mean in half, choose a new sample size $n^*$ such that

$$
\frac{\operatorname{sd}(\bar X_{n^*})}{\operatorname{sd}(\bar X_n)}
=\frac{\sigma/\sqrt{n^*}}{\sigma/\sqrt n}=\frac12.
$$

Squaring gives $n/n^*=1/4$, so $n^*=4n$.

## Source

Kyle Kabasares, *Probability and Statistics (Math 32, UC Merced 2015)*.
