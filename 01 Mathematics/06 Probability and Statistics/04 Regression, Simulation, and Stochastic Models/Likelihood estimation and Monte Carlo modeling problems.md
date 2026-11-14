---
title: "Likelihood estimation and Monte Carlo modeling problems"
---

> [!TLDR]
> Fit parameters by likelihood, examine estimator bias, and estimate integrals and uncertainty with random sampling.

## Worked lecture material

##### Likelihood for a single height

The goal is to choose the mean $\mu$ and standard deviation $\sigma$ that maximize the likelihood. For $X_i$, the height of person $i$, and its observed value $x_i$, the likelihood contribution is the normal density evaluated at $x_i$.

$$
p(x_i\mid\mu,\sigma)=\frac{e^{-(x_i-\mu)^2/(2\sigma^2)}}{\sqrt{2\pi\sigma^2}}.
$$

The handwritten notation $p(X=x_i)$ refers to this density value. The example records a height of $\quantity{65}{in}$.

##### Traffic at a stop sign

![[Kyle Kabasares - Mathematical Modeling - Discrete car queue at a stop sign.png|**Fig. 40** The sketch places the stop sign at $x=0$, with cars at negative positions and a marked position at $x=1$. The grid spacing is one.]]

The page lists the probabilities that the action takes one, two, or three seconds. The sketch below shows cars moving across the stop line.

![[Kyle Kabasares - Mathematical Modeling - Car motion past the stop line.png|**Fig. 41** Arrows show cars moving right across the vertical line.]]

A crossed-out list mentions the stop sign location, number of cars, car locations, and start time.

A plotting fragment at the top appears to read `plot(x, walker, 'ro')`, followed by an unfinished `axis[` line.

##### Maximum likelihood for the normal distribution

The data come from a random process. Postulate a form for its probability density and estimate the parameters of that density from the data. Let $X_1=x_1,\ldots,X_n=x_n$ be the observations and assume the $X_i$ are independent, each with distribution $\mathcal N(\mu,\sigma^2)$.

![[Kyle Kabasares - Mathematical Modeling - Normal likelihood density with marked spread.png|**Fig. 42** A normal density with its center and a spread marked $\sigma$.]]

The likelihood contribution from observation $i$ alone is

$$
p(x_i\mid\mu,\sigma)=\frac{\exp\bigl[-(x_i-\mu)^2/(2\sigma^2)\bigr]}{\sqrt{2\pi\sigma^2}},
\qquad i=1,\ldots,n.
$$

The page writes out the factors for $x_1$, $x_2$, and $x_n$. The aim is to choose the mean and variance that maximize the likelihood of the observed data.

All observations share the same $\mu$ and $\sigma$. Once the data are collected, the likelihood is a function of those two parameters. By independence,

$$
L(\mu,\sigma)=\prod_{i=1}^n p(x_i\mid\mu,\sigma).
$$

To avoid differentiating a product, define the log-likelihood $\lambda=\log L$. Since the logarithm is strictly increasing, the same values of $\mu$ and $\sigma$ maximize both expressions.

![[Kyle Kabasares - Mathematical Modeling - Increasing logarithm in the likelihood argument.png|**Fig. 43** The increasing logarithm preserves the ordering of likelihood values.]]

The logarithm of the product is

$$
\lambda(\mu,\sigma)=\sum_{i=1}^{n}\log p(x_i\mid\mu,\sigma)
=\sum_{i=1}^n\left[-\frac{(x_i-\mu)^2}{2\sigma^2}-\log\sqrt{2\pi\sigma^2}\right].
$$

The derivative with respect to $\mu$ is

$$
\frac{\partial\lambda}{\partial\mu}=\sum_{i=1}^n\frac{x_i-\mu}{\sigma^2}.
$$

An individual term vanishes at $\mu=x_i$. For the full sample the sum vanishes when n times the mean parameter equals the sum of the observations.

For the variance derivative, write $k=\sigma^2$. For each observation,

$$
\frac{\partial}{\partial k}\left[-\frac{(x_i-\mu)^2}{2k}
-\log\bigl((2\pi k)^{1/2}\bigr)\right]
=\frac{(x_i-\mu)^2}{2k^2}-\frac{1}{2k}.
$$

Here the log term gives $d\log((2\pi k)^{1/2})/dk=\pi/(2\pi k)=1/(2k)$.

For one observation and fixed $\mu$, the variance derivative vanishes when $(x_i-\mu)^2/\sigma^2=1$. For the complete data set, use the sum of the derivatives. The mean equation gives $\widehat{\mu}=n^{-1}\sum_{i=1}^n x_i$. Setting the variance derivative to zero gives

$$
\frac{1}{2(\widehat{\sigma}^2)^2}\sum_{i=1}^n(x_i-\widehat{\mu})^2
=\frac{n}{2\widehat{\sigma}^2},
$$

so the maximum-likelihood variance estimate for a sample with nonzero spread is

$$
\widehat{\sigma}^2=\frac1n\sum_{i=1}^n(x_i-\widehat{\mu})^2.
$$

The source uses the estimated mean in the first sum and writes $\mu$ without the hat in the next line. The estimated mean is used in both equations above.

![[Kyle Kabasares - Mathematical Modeling - Likelihood curve with an interior maximum.png|**Fig. 44** The peak of the likelihood curve locates the estimate $\widehat{\mu}$.]]

![[Kyle Kabasares - Mathematical Modeling - Likelihood curve peaking below the true mean.png|**Fig. 45** A second sketch places the likelihood maximum $\widehat{\mu}$ to the left of the marked value $\mu$.]]

The notes ask whether $\widehat{\mu}$ is biased and what its expectation is. The example at the foot of the page lists this discrete distribution.

| Outcome | Probability |
| --- | --- |
| $1$ | $1/6$ |
| $2$ | $1/6$ |
| $3$ | $1/6$ |
| $100$ | $1/2$ |

The scratch calculation sums the first three contributions to the expectation, $1/6+2/6+3/6=1$.

##### Bias of the mean and variance estimators

If the data come from $\mathcal N(\mu_0,\sigma_0^2)$, the expectation of the estimated mean is

$$
E[\widehat\mu]
=E\left[\frac1n\sum_{i=1}^n X_i\right]
=\frac1n\sum_{i=1}^n E[X_i]
=\frac1n\sum_{i=1}^n\mu_0=\mu_0.
$$

Thus the sample mean is unbiased. The notes next ask whether the maximum-likelihood variance estimate is biased.

$$
\widehat{\sigma}^2=\frac1n\sum_{i=1}^n(X_i-\widehat\mu)^2.
$$

To find $E[\widehat{\sigma}^2]$, insert $\widehat\mu=n^{-1}\sum_{j=1}^n X_j$ and expand the square.

$$
\begin{aligned}
\widehat{\sigma}^2
&=\frac1n\sum_{i=1}^n
\left(X_i-\frac1n\sum_{j=1}^n X_j\right)^2\\
&=\frac1n\sum_{i=1}^n X_i^2
-\frac{2}{n^2}\sum_{i=1}^n\sum_{j=1}^n X_iX_j
+\frac{1}{n^3}\sum_{i=1}^n
\left(\sum_{j=1}^n\sum_{k=1}^n X_jX_k\right)\\
&=\frac1n\sum_{i=1}^n X_i^2
-\frac{2}{n^2}\sum_{i=1}^n\sum_{j=1}^n X_iX_j
+\frac{1}{n^2}\sum_{j=1}^n\sum_{k=1}^n X_jX_k.
\end{aligned}
$$

The last double sum inside parentheses is independent of $i$, so the sum over $i$ contributes a factor of $n$.

The last two double sums on [[#Bias of the mean and variance estimators|the section on Bias of the mean and variance estimators]] combine to give

$$
\widehat{\sigma}^2=\frac1n\sum_{i=1}^n X_i^2-\frac1{n^2}\sum_{i=1}^n\sum_{j=1}^n X_iX_j.
$$

Since $\sigma_0^2=E[(X_i-\mu_0)^2]=E[X_i^2]-\mu_0^2$, the second moment is $E[X_i^2]=\sigma_0^2+\mu_0^2$. For $i\ne j$, independence gives $E[X_iX_j]=E[X_i]E[X_j]=\mu_0^2$. The handwritten line for the expectation of the first sum places the square outside $E$, but the following line uses the second moment.

The double sum has $n$ terms with $i=j$ and $n(n-1)$ terms with $i\ne j$. Therefore

$$
\begin{aligned}
E[\widehat{\sigma}^2]
&=\sigma_0^2+\mu_0^2
-\frac1{n^2}\left[n(\sigma_0^2+\mu_0^2)+n(n-1)\mu_0^2\right]\\
&=\sigma_0^2\left(1-\frac1n\right)
=\sigma_0^2\frac{n-1}{n}.
\end{aligned}
$$

The estimator maximizes the likelihood and has a downward bias. A marginal calculation appears to record $N\ge m$ and a count of unordered pairs, written as $N(n-1)/2$.

##### Monte Carlo integration

The agenda lists Monte Carlo integration as an application of maximum likelihood and a comparison with classical techniques.

A margin note records Bayes' rule, $P(A\mid B)=P(B\mid A)P(A)/P(B)$.

To estimate $A=\int_a^b f(x)\,dx$ for $0\le f(x)\le L$, draw points $(x_i,y_i)$ uniformly in the rectangle $[a,b]\times[0,L]$. Count a point when $y_i<f(x_i)$. If $m$ out of $N$ draws fall below the curve, estimate the area fraction by $A/[L(b-a)]\approx m/N$.

![[Kyle Kabasares - Mathematical Modeling - Monte Carlo points in a bounding rectangle.png|**Fig. 46** A random point lies in the rectangle of height $L$. The shaded region $A$ lies below the curve between $a$ and $b$.]]

Each draw is a Bernoulli trial. The indicator $X_i$ equals $1$ with probability $p$ if the point is inside the target region and $0$ with probability $1-p$ otherwise. Let $M=\sum_{i=1}^N X_i$. Given $M=m$, which value of $p$ maximizes the likelihood?

For one draw, $P(M=1)=p$. For two draws, $P(M=1)=2p(1-p)$. In general,

$$
P(M=m\mid N,p)=\binom{N}{m}p^m(1-p)^{N-m},
\qquad
\binom{N}{m}=\frac{N!}{m!(N-m)!}.
$$

To find an interior maximum, differentiate with respect to $p$ and set the derivative to zero.

$$
\frac{d}{dp}P(M=m\mid N,p)
=\binom{N}{m}\left[m p^{m-1}(1-p)^{N-m}
-(N-m)p^m(1-p)^{N-m-1}\right].
$$

For $0<m<N$, factor the derivative of the binomial likelihood at an interior maximum $\widehat p$.

$$
0=\binom{N}{m}\widehat p^{\,m-1}(1-\widehat p)^{N-m-1}
\bigl[m(1-\widehat p)-(N-m)\widehat p\bigr].
$$

The bracket is $m-N\widehat p$, so $\widehat p=m/N$. This also gives the endpoint maximum if $m=0$ or $m=N$.

The true probability $p_0$ equals the area $A$ divided by the area of the sampling domain. The estimator $\widehat p=M/N$ is unbiased since $E[M]=Np_0$.

##### Expected squared error

The squared error is $(\widehat p-p_0)^2$. Here the count $M$ is random and $N$ and $p_0$ are fixed. Its expectation is

$$
\begin{aligned}
E[(\widehat p-p_0)^2]
&=E\left[\left(\frac MN-p_0\right)^2\right]
=\frac{1}{N^2}E[(M-Np_0)^2]\\
&=\frac{1}{N^2}\bigl[E[M^2]-2Np_0 E[M]+N^2p_0^2\bigr].
\end{aligned}
$$

With $M=\sum_{i=1}^N X_i$, expand the expected squared error and separate equal and unequal indices.

$$
\begin{aligned}
E[(\widehat p-p_0)^2]
&=\frac1{N^2}\left[
E\left[\left(\sum_{i=1}^N X_i\right)^2\right]
-2Np_0\sum_{i=1}^N E[X_i]+N^2p_0^2\right]\\
&=\frac1{N^2}\left[
\sum_{i=1}^N E[X_i^2]
+\sum_{i=1}^N\sum_{\substack{j=1\\j\ne i}}^N E[X_iX_j]-N^2p_0^2\right].
\end{aligned}
$$

A Bernoulli variable has $E[X_i^2]=1\cdot p_0+0\cdot(1-p_0)=p_0$. For $i\ne j$, independence gives $E[X_iX_j]=p_0^2$. Therefore

$$
E[(\widehat p-p_0)^2]
=\frac{Np_0+N(N-1)p_0^2-N^2p_0^2}{N^2}
=\frac{p_0-p_0^2}{N}.
$$

The root mean square error is $\sqrt{p_0-p_0^2}/\sqrt N$.

##### Trapezoidal rule

![[Kyle Kabasares - Mathematical Modeling - Trapezoidal partition under a curve.png|**Fig. 47** The vertical divisions mark subintervals for estimating the integral by the trapezoidal rule.]]

The agenda compares Monte Carlo integration with the trapezoidal rule, lists maximum likelihood for rankings, and introduces Lagrange multipliers. The Monte Carlo setup has $N$ draws with $m$ points inside the target region $A$.

![[Kyle Kabasares - Mathematical Modeling - Target region inside a Monte Carlo sampling box.png|**Fig. 48** The shaded target region $A$ is inside the sampling box.]]

For a target area $A$ inside a square of side $L$, use $m/N$ to estimate $A/L^2$. The mean square error has the form $K/N$ and the root mean square error scales as $N^{-1/2}$. The handwritten expectation omits the square, which is required by the calculation on [[#Trapezoidal rule|the section on Trapezoidal rule]].

For a unit disk inside a square of side $2$, the area fraction is $\pi/4$, so $\pi\approx 4m/N$.

![[Kyle Kabasares - Mathematical Modeling - Unit disk in a square for estimating pi.png|**Fig. 49** A unit disk fits inside a square of side two. The sketch also marks vertical strips over the upper semicircle.]]

##### Comparison with trapezoidal integration

In one dimension, the trapezoidal error for a sufficiently smooth integrand is of order $(\Delta x)^2$. With $N$ proportional to $(\Delta x)^{-1}$, this gives an error of order $N^{-2}$, compared with $N^{-1/2}$ for the Monte Carlo estimate.

![[Kyle Kabasares - Mathematical Modeling - Grid for two-dimensional trapezoidal integration.png|**Fig. 50** A two-dimensional grid with spacing $\Delta x$ illustrates the number of cells used in the quadrature.]]

In two dimensions, $N$ is proportional to $(\Delta x)^{-2}$, so the trapezoidal error scales as $N^{-1}$. In $d$ dimensions, $N$ is proportional to $(\Delta x)^{-d}$ and $\Delta x$ scales as $N^{-1/d}$. The handwritten intermediate line repeats the two-dimensional exponent. The final comparison gives the trapezoidal error $N^{-2/d}$ and the Monte Carlo error $N^{-1/2}$. The Monte Carlo rate is faster when $d>4$.

##### Ranking teams

Assign each of the $n$ teams a rating $p_i$. A simple rating is the number of wins of team $i$ divided by the total number of games it played. The proposed model relates a team's rating to the probability that it wins a particular matchup. Consider team $i$ with rating $p_i$ playing team $j$ with rating $p_j$.

##### Pairwise team ratings

Assume there are no draws. If team $i$ has rating $p_i$ and team $j$ has rating $p_j$, then for $p_i+p_j>0$,

$$
P(i\text{ wins against }j)=\frac{p_i}{p_i+p_j},
\qquad
P(j\text{ wins against }i)=\frac{p_j}{p_i+p_j}.
$$

The ratings satisfy $0\le p_i\le1$ and $\sum_{i=1}^n p_i=1$. If $p_i>p_j$, team $i$ is rated higher and has the higher win probability in their matchup.

Start with two teams, so $p_1+p_2=1$. Suppose team 1 wins $w_1$ games and team 2 wins $w_2$, with independent game outcomes. The likelihood for the observed outcomes is

$$
f(p_1,p_2)
=\left(\frac{p_1}{p_1+p_2}\right)^{w_1}
\left(\frac{p_2}{p_1+p_2}\right)^{w_2}.
$$

If the data are treated as win totals without their order, the probability also has a binomial coefficient independent of the ratings. The estimation problem is to maximize $f(p_1,p_2)$ subject to $p_1+p_2=1$.

##### Lagrange multipliers

The general problem is to maximize $f(\vec x)$ subject to $g(\vec x)=0$. As an example, $g(x,y)=x^2+y^2-1$ defines the unit circle as the feasible set.

![[Kyle Kabasares - Mathematical Modeling - Unit circle as an equality constraint.png|**Fig. 51** The unit circle is the zero level set of $g(x,y)=x^2+y^2-1$.]]

## Source

Kyle Kabasares, *Mathematical Modeling (Math 150, UC Merced 2017)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $M$ | 1 | Carrying capacity | Population that the modeled resources can sustain at equilibrium. |
| $K$ | 1 | Koala population | Number of koalas in the competition model. |
| $y_i$ | 1 | Age-group population | Number of individuals in the indicated age band. |
| $\lambda$ | $\unit{s^{-1}}$ | Lyapunov exponent | Exponential rate of growth or decay of a perturbation in time. |
| $x$, $y$ | $\unit{oz}$ | Ingredient amounts | Onion soup and chicken stock per serving, respectively. |
| $s$ | $\unit{g}$ | Protein surplus | Protein above the minimum required per serving. |
