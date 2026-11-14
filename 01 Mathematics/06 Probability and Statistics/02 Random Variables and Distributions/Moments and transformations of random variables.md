---
title: "Moments and transformations of random variables"
---

> [!TLDR]
> Compute expectations and variances, transform distributions, and use generating functions or cumulative probabilities when useful.

## Worked lecture material

##### Expectation and variance

A drill bit lasts 2, 3, or 4 hours with probabilities $0.1$, $0.7$, and $0.2$, respectively. The average lifetime is the probability-weighted sum.

$$
\sum_{k=2}^{4} kP(X=k)=2(0.1)+3(0.7)+4(0.2)=3.1.
$$

Thus the expected lifetime is $\quantity{3.1}{h}$.

For a discrete random variable with possible values $x_i$, define its expectation by $E[X]=\sum_i x_i P(X=x_i)$. For a continuous random variable with density $f$, the corresponding expression is $E[X]=\int_{-\infty}^\infty xf(x)\,dx$, when the expectation exists. The expectation is also called the mean. It is the balance point of the probability distribution.

![[Kyle Kabasares - Probability and Statistics - Mean as a balance point for drill bit lifetimes.png|**Fig. 30** The mean at 3.1 hours is the balance point of the three probability masses.]]

##### Mean of a discrete uniform variable

If $X$ is uniform on the integers $1,\ldots,N$, then $P(X=k)=1/N$ for each possible $k$. The mean is

$$
E[X]=\frac1N(1+2+\cdots+N).
$$

To find the sum $S=1+2+\cdots+N$, write the terms in forward and reverse order and add term by term. Each of the $N$ pairs sums to $N+1$, so $2S=N(N+1)$. Therefore $E[X]=(N+1)/2$. For a fair die, $E[X]=(6+1)/2=3.5$.

##### Beginning the expectation of a sum

Let $X$ and $Y$ be independent discrete uniform variables, for example the results of two fair dice. The general joint-distribution expression is

$$
E[X+Y]=\sum_i\sum_j(x_i+y_j)P(X=x_i,Y=y_j).
$$

For the independent example, factor the joint probabilities and collect the terms involving $X$ outside the inner sum.

$$
E[X+Y]=\sum_iP(X=x_i)\sum_j(x_i+y_j)P(Y=y_j).
$$

In the independent example, distribute the sum over $x_i+y_j$. The two marginal probability sums are each one.

$$
\begin{aligned}
E[X+Y]
&=\left(\sum_i x_iP(X=x_i)\right)\left(\sum_j P(Y=y_j)\right)
+\left(\sum_iP(X=x_i)\right)\left(\sum_j y_jP(Y=y_j)\right)\\
&=E[X]+E[Y].
\end{aligned}
$$

##### Mean of a Pareto variable

For $X\sim\operatorname{Par}(\alpha)$, the density on $[1,\infty)$ is $\alpha x^{-\alpha-1}$. Thus

$$
E[X]=\int_1^\infty x\alpha x^{-\alpha-1}\,dx
=\alpha\int_1^\infty x^{-\alpha}\,dx
=\frac{\alpha}{\alpha-1}
$$

when $\alpha>1$. For $0<\alpha\leq1$, the integral diverges. The handwritten threshold is $\alpha>2$, but the power $x^{1-\alpha}$ in its own antiderivative tends to zero whenever $\alpha>1$.

##### Mean of an exponential variable

For $X\sim\operatorname{Exp}(\lambda)$, apply integration by parts to the expectation integral.

$$
E[X]=\int_0^\infty x\lambda e^{-\lambda x}\,dx
=[-xe^{-\lambda x}]_0^\infty+\int_0^\infty e^{-\lambda x}\,dx=\frac1\lambda.
$$

The boundary term vanishes at both limits.

##### Shannon entropy

For a discrete random variable with PMF $p_X$, the Shannon entropy is the expectation of the information associated with the observed outcome.

$$
H[X]=E[-\ln p_X(X)]
=-\sum_i P(X=x_i)\ln P(X=x_i).
$$

The notes motivate the information function $h$ by requiring it to be nonnegative and additive on independent outcomes. If $X$ and $Y$ are independent, then $P(X=x,Y=y)=P(X=x)P(Y=y)$. The information of the joint outcome should equal the sum of the individual information values.

$$
h(\{X=x\}\cap\{Y=y\})=h(\{X=x\})+h(\{Y=y\}).
$$

The logarithm converts a product to a sum. The page ends by asking whether the logarithm of the probability itself satisfies the requirements.

The input to the information function is a probability $p$ in $(0,1]$. Use $h(p)=-\ln p$, which is nonnegative and decreases to zero at $p=1$. Shannon entropy is the mean information $E[h(p_X(X))]$.

![[Kyle Kabasares - Probability and Statistics - Negative logarithm as information.png|**Fig. 31** The information $-\ln p$ decreases as the outcome probability increases.]]

For $X\sim\operatorname{Ber}(p)$, the two possible outcomes give

$$
H[X]=-(1-p)\ln(1-p)-p\ln p.
$$

The entropy is greatest at $p=1/2$, where the outcome is most uncertain. The notes refer to an upcoming worksheet showing that the uniform distribution maximizes entropy among distributions on a fixed finite set.

![[Kyle Kabasares - Probability and Statistics - Bernoulli entropy peaks at one half.png|**Fig. 32** The entropy of a Bernoulli outcome has a maximum at $p=1/2$.]]

##### Linearity of expectation

For real constants $r,s$, $E[rX+s]=rE[X]+s$ when the mean exists. In the continuous case,

$$
\begin{aligned}
E[rX+s]
&=\int_{-\infty}^{\infty}(rx+s)f(x)\,dx\\
&=r\int_{-\infty}^{\infty}xf(x)\,dx
+s\int_{-\infty}^{\infty}f(x)\,dx=rE[X]+s.
\end{aligned}
$$

The discrete proof uses a sum in place of the integral.

##### Change of temperature units

Let $\thermal{F}$ and $\thermal{C}$ be the same temperature measured in degrees Fahrenheit and degrees Celsius. The conversion is $\thermal{F}=(9/5)\thermal{C}+32$. By linearity,

$$
E[\thermal{F}]=E\!\left[\frac95\thermal{C}+32\right]=\frac95 E[\thermal{C}]+32.
$$

One can convert the mean directly.

##### Variance and standard deviation

The **variance** is the mean squared deviation from the mean. If $\mu=E[X]$, then $\operatorname{Var}(X)=E[(X-\mu)^2]$ when it exists. The standard deviation is $\sqrt{\operatorname{Var}(X)}$ and measures the spread of the values. The notes compare variance to a moment of inertia.

##### Two games with the same mean return

Each game costs 450 dollars to play.

- Game 1 returns 450 dollars or 550 dollars, with probability $1/2$ each.
- Game 2 returns nothing or 1,000 dollars, with probability $1/2$ each.

Let $Y_1$ and $Y_2$ be the respective gross returns in dollars. The expectations are $E[Y_1]=(450+550)/2=500$ and $E[Y_2]=(0+1000)/2=500$. Game 2 has more variable outcomes.

The variances of the two gross returns, in squared dollars, are

$$
\begin{aligned}
\operatorname{Var}(Y_1)
&=\tfrac12(450-500)^2+\tfrac12(550-500)^2=50^2=2500,\\
\operatorname{Var}(Y_2)
&=\tfrac12(0-500)^2+\tfrac12(1000-500)^2=500^2=250000.
\end{aligned}
$$

The standard deviation $\operatorname{sd}(X)=\sqrt{\operatorname{Var}(X)}$ has the same units as $X$. The two standard deviations are 50 dollars and 500 dollars.

##### Variance from the first and second moments

For a variable with finite second moment, write $\mu=E[X]$. The first moment is $E[X]$, and the second moment is $E[X^2]$. For the continuous case, expand the square in the variance integral.

$$
\begin{aligned}
\operatorname{Var}(X)
&=\int_{-\infty}^\infty(x-\mu)^2f(x)\,dx\\
&=\int_{-\infty}^\infty x^2f(x)\,dx
-2\mu\int_{-\infty}^\infty xf(x)\,dx
+\mu^2\int_{-\infty}^\infty f(x)\,dx\\
&=E[X^2]-2\mu^2+\mu^2=E[X^2]-(E[X])^2.
\end{aligned}
$$

##### Mean and variance of a Poisson variable

For $X\sim\operatorname{Pois}(\mu)$, cancel the factor $k$ against $k!$ in the expectation.

$$
E[X]=\sum_{k=1}^{\infty} k\frac{\mu^k e^{-\mu}}{k!}
=\mu\sum_{k=1}^{\infty}\frac{\mu^{k-1}e^{-\mu}}{(k-1)!}
=\mu.
$$

For the variance, first calculate the second factorial moment.

$$
E[X(X-1)]=\sum_{k=2}^{\infty}k(k-1)\frac{\mu^k e^{-\mu}}{k!}
=\mu^2\sum_{k=2}^{\infty}\frac{\mu^{k-2}e^{-\mu}}{(k-2)!}
=\mu^2.
$$

The shifted sums each equal one. Therefore $\operatorname{Var}(X)=E[X(X-1)]+E[X]-(E[X])^2=\mu^2+\mu-\mu^2=\mu$. The Poisson mean and variance are both $\mu$.

##### Moment-generating functions

The moment-generating function (MGF) of $X$ is the exponential transform $\phi_X(t)=E[e^{tX}]$.

$$
\phi_X(t)=
\begin{cases}
\displaystyle\sum_k e^{tk}P(X=k),&X\text{ is discrete with values }k,\\
\displaystyle\int_{-\infty}^{\infty}e^{tx}f(x)\,dx,&X\text{ has density }f.
\end{cases}
$$

The notes also call this a Laplace transform. An MGF finite on an open interval containing zero determines the distribution, so it can help identify the distribution of a sum.

![[Kyle Kabasares - Probability and Statistics - Exponential density in the MGF example.png|**Fig. 33** The unit-rate exponential density used to calculate the MGF.]]

For $X\sim\operatorname{Exp}(1)$, the density is $e^{-x}$ for $x\geq0$ and zero elsewhere. Therefore

$$
\phi_X(t)=\int_0^\infty e^{tx}e^{-x}\,dx
=\left[\frac{e^{x(t-1)}}{t-1}\right]_0^\infty
=\frac{1}{1-t},
\qquad t<1.
$$

##### Moments from derivatives of the MGF

When the MGF is finite near zero, differentiate the exponential inside the expectation.

$$
\phi_X'(t)=E[Xe^{tX}],\qquad
\phi_X''(t)=E[X^2e^{tX}].
$$

At $t=0$, these derivatives give the first and second moments $E[X]$ and $E[X^2]$. For the unit-rate exponential example, $\phi_X(t)=1/(1-t)$, so

$$
E[X]=\phi_X'(0)=\left.\frac{1}{(1-t)^2}\right|_{t=0}=1,
\qquad
E[X^2]=\phi_X''(0)=\left.\frac{2}{(1-t)^3}\right|_{t=0}=2.
$$

Subtract the square of the first moment to obtain $\operatorname{Var}(X)=2-1^2=1$.

##### Common random variables and their uses

##### Discrete uniform

There are $N$ equally likely outcomes, $P(X=1)=\cdots=P(X=N)=1/N$, and $E[X]=(N+1)/2$.

![[Kyle Kabasares - Probability and Statistics - Equal masses of a discrete uniform distribution.png|**Fig. 34** The horizontal sketch represents equal masses at the supported integers.]]

##### Bernoulli

There are two outcomes. A success is coded as 1 and occurs with probability $p$. A failure is coded as 0 and occurs with probability $1-p$. The mean is $p$. The model describes a single trial, such as flipping a possibly biased coin.

##### Binomial

The parameters are the number of trials $n$ and the success probability $p$ in each trial. For independent Bernoulli trials, the number of successes $X$ has mean $np$ and probability $P(X=k)=\binom nk p^k(1-p)^{n-k}$ for $k=0,\ldots,n$. Counting heads in $n$ independent flips is an example.

##### Geometric

Repeat independent Bernoulli trials until the first success. For trial number $k\geq1$, $P(X=k)=(1-p)^{k-1}p$, with $p=P(X=1)$ and $E[X]=1/p$. The geometric distribution has the memoryless property $P(X>n+k\mid X>k)=P(X>n)$.

The notes use a hypothetical model in which a couple has the same probability $p$ of conceiving in each independent month. If they have tried for six months, the chance of waiting more than three additional months is $P(X>9\mid X>6)=P(X>3)$. The chance of conceiving within those next three months is its complement.

##### Poisson

For $X\sim\operatorname{Pois}(\mu)$, $P(X=k)=\mu^k e^{-\mu}/k!$ for $k=0,1,\ldots$ and $E[X]=\operatorname{Var}(X)=\mu$. The parameter is the mean number of events per interval. The binomial limit removes the finite upper bound on the possible count. One example is the monthly count of auto accidents in Merced.

![[Kyle Kabasares - Probability and Statistics - Poisson counts of monthly auto accidents.png|**Fig. 35** A sketch of probabilities for discrete event counts.]]

A discrete variable has a PMF $p(a)=P(X=a)$ and a CDF $F(a)=P(X\leq a)$. The notes contrast this with the ordinary continuous density obtained by differentiating an absolutely continuous CDF. The first “pdf” on the handwritten page is read as “pmf” from its formula.

##### Review of continuous random variables

##### Exponential

The density is $f(x)=\lambda e^{-\lambda x}$ for $x\geq0$ and zero otherwise, with $\lambda>0$. The parameter can represent a constant failure rate, and $E[X]=1/\lambda$. Examples include time to failure for an electronic product and time until a radioactive decay. The memoryless property is $P(X>n+k\mid X>k)=P(X>n)$.

##### Pareto

The density is $f(x)=\alpha/x^{\alpha+1}$ for $x\geq1$. Its mean is $\alpha/(\alpha-1)$ for $\alpha>1$. The notes mention modeling earthquake magnitudes and salaries above a threshold.

![[Kyle Kabasares - Probability and Statistics - Pareto density in distribution review.png|**Fig. 36** The support of the Pareto model begins at 1.]]

![[Kyle Kabasares - Probability and Statistics - First Pareto balance point sketch.png|**Fig. 37** One handwritten sketch marks the expected value close to the lower end.]]

![[Kyle Kabasares - Probability and Statistics - Second Pareto balance point sketch.png|**Fig. 38** A second sketch marks the expected value farther along the tail.]]

The mean formula shows that the mean increases as $\alpha$ decreases toward 1. The “$\alpha$ small” label appears beside the near-end balance point in the handwriting.

##### Laplace

The parameters are location $\mu$ and scale $\beta$. The density is $f(x)=e^{-\lvert x-\mu\rvert/\beta}/(2\beta)$. One application mentioned is digital image processing.

![[Kyle Kabasares - Probability and Statistics - Laplace density in distribution review.png|**Fig. 39** A symmetric density with a cusp at the center.]]

##### Continuous uniform

The density has height $1/(b-a)$ between $a$ and $b$, and its mean is $(a+b)/2$. The notes again mention its use as an approximation to a discrete uniform distribution.

![[Kyle Kabasares - Probability and Statistics - Continuous uniform density and height.png|**Fig. 40** Uniform density between its two endpoints.]]

##### Gaussian or normal

The density is $f(x)=e^{-(x-\mu)^2/(2\sigma^2)}/(\sigma\sqrt{2\pi})$, with $\mu=E[X]$ and $\sigma=\operatorname{sd}(X)=\sqrt{\operatorname{Var}(X)}$. The normal distribution can approximate sums of random variables, including binomial counts. The review also gives an exact closure example: if $X_1,X_2$ are independent and both have distribution $\operatorname{Pois}(\mu)$, then $X_1+X_2\sim\operatorname{Pois}(2\mu)$.

![[Kyle Kabasares - Probability and Statistics - Normal curve in distribution review.png|**Fig. 41** Normal density centered at $\mu$.]]

##### Distribution of the maximum

Let $X_1,\ldots,X_n$ be independent and identically distributed (i.i.d.) with common CDF $F(x)=P(X_i\leq x)$. The maximum is at most $x$ exactly when every variable is at most $x$. Independence gives

$$
F_{\max}(x)
=P(X_1\leq x,\ldots,X_n\leq x)
=\prod_{i=1}^n P(X_i\leq x)
=[F(x)]^n.
$$

For independent $U(0,1)$ variables, integrate the density of one variable to obtain its CDF.

![[Kyle Kabasares - Probability and Statistics - Unit uniform density and CDF.png|**Fig. 42** The unit uniform density is constant from 0 to 1. Its CDF rises linearly across that interval.]]

$$
F(x)=\int_{-\infty}^x f(t)\,dt=
\begin{cases}
0,&x<0,\\
x,&0\leq x\leq1,\\
1,&x>1.
\end{cases}
$$

For $n$ independent unit uniform variables, $F_{\max}(x)=[F(x)]^n$ is zero for $x<0$, equals $x^n$ for $0\leq x\leq1$, and is one for $x>1$.

![[Kyle Kabasares - Probability and Statistics - CDF of the maximum of unit uniform variables.png|**Fig. 43** The middle branch of the CDF is $x^n$.]]

The notes record sample maxima in inches for groups of three different sizes.

| Group size $n$ | Recorded maxima in inches |
| ---: | --- |
| 1 | 64, 71, 68, 67, 69, 66, 72 |
| 2 | 68, 67, 69, 68 |
| 3 | 68, 67 |

Differentiating the CDF gives $f_{\max}(x)=nx^{n-1}$ on the unit interval and zero elsewhere.

![[Kyle Kabasares - Probability and Statistics - Density of the maximum of unit uniform variables.png|**Fig. 44** The interior density approaches $n$ at the right endpoint.]]

##### Distribution of the minimum

Let $X_1,\ldots,X_n$ be i.i.d. with CDF $F$. The minimum exceeds $x$ when every variable exceeds $x$. Use a strict inequality in the complement so the formula also applies to discrete variables.

$$
F_{\min}(x)=P(\min_i X_i\leq x)
=1-P(X_1>x,\ldots,X_n>x)
=1-[1-F(x)]^n.
$$

For i.i.d. $U(0,1)$ variables, this is zero for $x<0$, equals $1-(1-x)^n$ for $0\leq x\leq1$, and is one for $x>1$.

For the minimum of independent $U(0,1)$ variables, differentiating the CDF gives density $f_{\min}(x)=n(1-x)^{n-1}$ on the unit interval and zero elsewhere.

![[Kyle Kabasares - Probability and Statistics - Density of the minimum of unit uniform variables.png|**Fig. 45** The minimum density starts at height $n$ and decreases for $n>1$.]]

##### Jensen's inequality

If $g(x)=rx+s$ with real $r,s$, then $E[g(X)]=g(E[X])$. For a nonlinear function these two expressions can differ.

A semiconductor firm targets 240 chips per day but makes 40, 60, and 80 on three consecutive days. The average of the daily factors needed to reach the target is $\tfrac13(240/40+240/60+240/80)=13/3\simeq4.3$. The factor needed to scale the average production to the target is $240/[(40+60+80)/3]=4$.

Let $X$ be the fraction of target production, equally likely to be $40/240$, $60/240$, or $80/240$. The two quantities are $E[1/X]$ and $1/E[X]$.

For a convex function $g$ and a random variable for which the relevant expectations exist, Jensen's inequality gives

$$
g(E[X])\leq E[g(X)].
$$

![[Kyle Kabasares - Probability and Statistics - Convex curve and the expectation balance point.png|**Fig. 46** The balance point of observations on the curve lies on or above the curve at the mean input.]]

For example, $g(x)=e^{-x}$ is convex because $g''(x)=e^{-x}>0$.

![[Kyle Kabasares - Probability and Statistics - Decreasing convex exponential sketch.png|**Fig. 47** The exponential $e^{-x}$ is decreasing and convex.]]

For the convex exponential example, Jensen's inequality gives $e^{-E[X]}\leq E[e^{-X}]$. The negative sign follows the function $g(x)=e^{-x}$ on [[#Jensen's inequality|the section on Jensen's inequality]].

##### Transforming a discrete random variable

Let $Y=g(X)$. In the motivating example, an airline has 150 seats and offers 200 tickets. Model the number of tickets sold, $X$, as uniform on $\{1,\ldots,200\}$, with mass $1/200$ at each integer. Let $Y$ be the number of passengers turned away.

$$
g(x)=\max\{x-150,0\},
\qquad g(152)=2.
$$

![[Kyle Kabasares - Probability and Statistics - Mapping ticket sales to denied boarding counts.png|**Fig. 48** Sales of 1 through 150 tickets all map to zero. Each larger count maps to its excess above 150.]]

The probability of turning away nobody is $P(Y=0)=P(X\leq150)=150/200=3/4$. For $y=1,\ldots,50$, $P(Y=y)=P(X=150+y)=1/200$. In particular, the events for $Y=1$, $Y=2$, and $Y=50$ are exactly $X=151$, $X=152$, and $X=200$. The handwritten inequalities for $Y=1$ and $Y=2$ are read as equalities from the mapping and the masses. The value $Y=51$ is impossible.

In the airplane example, let $Z$ be the number of people who board. Then $Z=\min(X,150)$. The page gives $P(Z=1)=P(X=1)=1/200$, $P(Z=2)=P(X=2)=1/200$, and $P(Z=150)=P(X\geq150)=51/200$.

**1. Bernoulli mean and variance.** The PMF is $p$ at 1, $1-p$ at 0, and zero elsewhere. Then

$$
E[X]=1\cdot p+0\cdot(1-p)=p,\qquad
E[X^2]=1^2p+0^2(1-p)=p,
$$

so $\operatorname{Var}(X)=p-p^2=p(1-p)$.

**2(a). Continuous uniform moments.** Let $X\sim U(\alpha,\beta)$, with density $1/(\beta-\alpha)$ on its support. Integrate over that interval.

$$
\begin{aligned}
E[X]
&=\frac{1}{\beta-\alpha}\int_\alpha^\beta x\,dx
=\frac{\beta^2-\alpha^2}{2(\beta-\alpha)}
=\frac{\alpha+\beta}{2},\\
E[X^2]
&=\frac{1}{\beta-\alpha}\int_\alpha^\beta x^2\,dx
=\frac{1}{\beta-\alpha}\left[\frac{x^3}{3}\right]_\alpha^\beta.
\end{aligned}
$$

For $X\sim U(\alpha,\beta)$, factor the difference of cubes to obtain the second moment, then subtract the square of the mean.

$$
\begin{aligned}
E[X^2]
&=\frac{\beta^3-\alpha^3}{3(\beta-\alpha)}
=\frac{\beta^2+\alpha\beta+\alpha^2}{3},\\
\operatorname{Var}(X)
&=\frac{\beta^2+\alpha\beta+\alpha^2}{3}
-\frac{(\alpha+\beta)^2}{4}
=\frac{(\beta-\alpha)^2}{12}.
\end{aligned}
$$

The handwritten work replaces $\beta^2+\alpha\beta+\alpha^2$ with $(\alpha+\beta)^2$. Retaining the correct cross term gives a variance that depends on the width of the interval.

**3. Exponential MGF.** For $X\sim\operatorname{Exp}(\lambda)$, use the positive half-line support.

$$
\phi_X(t)=\lambda\int_0^\infty e^{x(t-\lambda)}\,dx
=\left[\frac{\lambda e^{x(t-\lambda)}}{t-\lambda}\right]_0^\infty
=\frac{\lambda}{\lambda-t},
\qquad t<\lambda.
$$

##### Transforming continuous random variables

To find the distribution of $Y=g(X)$, first write its CDF as $F_Y(y)=P(Y\leq y)=P(g(X)\leq y)$. For the increasing invertible case in the notes, this is $F_X(g^{-1}(y))$ on the range of $g$. Then differentiate to obtain $f_Y(y)=dF_Y(y)/dy$ where the density applies.

The example compares two methods of catching speeders. In the first, an officer measures a car's speed at a point and allows speeds up to a threshold.

![[Kyle Kabasares - Probability and Statistics - Spot measurement of car speed.png|**Fig. 49** A vehicle passes a roadside speed measurement point.]]

In the second, time the car between checkpoints A and B. If it covers the segment in less than a specified time, the driver receives a ticket.

![[Kyle Kabasares - Probability and Statistics - Timing a car between checkpoints.png|**Fig. 50** Two points define a segment over which the car's travel time is measured.]]

The notes say the spot measurement in method 1 results in more tickets and refer to Swenson's slides for the comparison.

##### Reciprocal of a Cauchy variable

Let $X$ have the standard Cauchy density $f_X(x)=1/[\pi(1+x^2)]$. Find the distribution of $Y=1/X$.

![[Kyle Kabasares - Probability and Statistics - Cauchy and Gaussian density comparison.png|**Fig. 51** The sketch compares a Cauchy density with a Gaussian density.]]

Integrating the Cauchy density gives

$$
F_X(x)=\frac{1}{\pi}\left[\arctan t\right]_{-\infty}^{x}
=\frac12+\frac{1}{\pi}\arctan x.
$$

The handwritten calculation uses $1-F_X(1/y)$ for the CDF of $Y$. This applies for $y<0$. For $y>0$ the event also includes every negative value of $X$. Since $P(X<0)=1/2$,

$$
F_Y(y)=
\begin{cases}
1-F_X(1/y),&y<0,\\
1/2,&y=0,\\
1/2+1-F_X(1/y),&y>0.
\end{cases}
$$

Differentiating either nonzero branch gives the density in the handwritten result.

$$
f_Y(y)=\frac{1}{\pi[1+(1/y)^2]}\frac{1}{y^2}
=\frac{1}{\pi(1+y^2)}.
$$

The density extends to $y=0$ by continuity. The reciprocal is also standard Cauchy.

##### Logarithm of a uniform variable

Let $X\sim U(0,1)$ and $Y=-\ln X$. Find the distribution of $Y$ using the uniform CDF.

![[Kyle Kabasares - Probability and Statistics - Unit uniform CDF for logarithmic transformation.png|**Fig. 52** The CDF of $X$ equals $x$ between 0 and 1.]]

For $Y=-\ln X$ with $X\sim U(0,1)$, taking the negative reverses the inequality.

$$
F_Y(y)=P(-\ln X\leq y)=P(X\geq e^{-y})=1-F_X(e^{-y}).
$$

The cutoff $e^{-y}$ lies in $(0,1]$ for $y\geq0$, so $F_Y(y)=1-e^{-y}$ there and zero for $y<0$. Differentiating gives $f_Y(y)=e^{-y}$ on the nonnegative half-line. Thus $Y\sim\operatorname{Exp}(1)$.

![[Kyle Kabasares - Probability and Statistics - Exponential density from a logarithm.png|**Fig. 53** The negative logarithm of a unit uniform variable has a unit-rate exponential density.]]

##### Exponential to Pareto transformation

Let $X\sim\operatorname{Exp}(\lambda)$ and $Y=e^X$. The exponential CDF is $F_X(x)=1-e^{-\lambda x}$ for $x\geq0$ and zero otherwise.

![[Kyle Kabasares - Probability and Statistics - Exponential CDF before exponentiation.png|**Fig. 54** The exponential CDF increases toward 1.]]

For $y\geq1$,

$$
F_Y(y)=P(e^X\leq y)=P(X\leq\ln y)=F_X(\ln y)
=1-e^{-\lambda\ln y}=1-y^{-\lambda}.
$$

The CDF is zero below 1, and $Y\sim\operatorname{Par}(\lambda)$. The last line of the handwritten calculation uses a different symbol for the cutoff. The logarithm condition just above it gives $y\geq1$.

## Source

Kyle Kabasares, *Probability and Statistics (Math 32, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\thermal{F}$ | $\unit{{}^\circ F}$ | Fahrenheit temperature | Temperature expressed in degrees Fahrenheit in the conversion example. |
| $\thermal{C}$ | $\unit{{}^\circ C}$ | Celsius temperature | Temperature expressed in degrees Celsius in the conversion example. |
