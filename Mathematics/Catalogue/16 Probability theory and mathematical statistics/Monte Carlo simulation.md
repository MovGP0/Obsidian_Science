---
title: "Monte Carlo simulation"
catalogue_ids:
  - "16.3.5"
  - "16.3.5.1"
  - "16.3.5.2"
  - "16.3.5.3"
  - "16.3.5.4"
  - "16.3.5.5"
---

> [!TLDR]
> Monte Carlo methods estimate probabilities and averages by repeated simulation under an explicit model.

## Simulation as a mathematical experiment

A simulation generates outcomes from a specified model, applies a calculation to each outcome, and summarizes the results. Monte Carlo methods use random sampling in that process. Their output can approximate a probability, expectation, integral, or distribution of a complicated statistic. They do not validate the model simply by producing many numbers.

Start with [[Events and conditional probability]], [[Random variables and joint distributions]], and [[Samples and descriptive statistics]]. The key identity is that the mean of independent model outputs estimates their model expectation. If $Y_1,\ldots,Y_N$ are iid with finite variance, the estimate $\bar Y$ has standard deviation $\sigma_Y/\sqrt N$. Estimate this standard error with $s_Y/\sqrt N$. It measures Monte Carlo sampling variation; it does not include an incorrect input model.

## Random numbers

A uniform variable $U$ on $[0,1]$ has constant density one. It gives a convenient starting point. To simulate a Bernoulli success with probability $p$, record one if $U<p$ and zero otherwise. To simulate a fair die, use $1+\lfloor6U\rfloor$ with a generator that returns $0\le U<1$. The floor symbol means the greatest integer at or below its input. A general continuous CDF $F$ can be sampled by its inverse, $X=F^{-1}(U)$, when this inverse is defined; a generalized inverse handles non-strict CDFs.

Most software uses pseudorandom generators: deterministic algorithms with an internal state. A seed initializes the state and supports reproduction. A repeatable sequence can still be suitable for statistical simulation, but poor generators, repeated seeds in parallel jobs, and unintended dependence can invalidate an experiment. Record the generator, software version, seed, sample size, and transformation. Do not treat decimal digits from an arbitrary deterministic list as independent uniforms without justification.

For example, an exponential CDF is $F(x)=1-e^{-rx}$ for $x\ge0$. Solve $u=1-e^{-rx}$ to get $x=-\ln(1-u)/r$. This transformation produces the desired distribution from an ideal uniform variable. An implementation must handle endpoints safely and use the rate/scale convention consistently.

## Example of a Monte Carlo simulation

Estimate the probability that two independent fair dice have a sum of at least ten. In each trial generate two independent die values, sum them, and record a success indicator. Repeat for $N$ trials. If $M$ trials succeed, the estimate is $\hat p=M/N$.

The exact probability provides an independent check: sums ten, eleven, and twelve have respectively three, two, and one ordered pairs, so $p=6/36=1/6$. Suppose a run of $N=600$ trials yields $M=102$. Then $\hat p=0.17$. Its plug-in Monte Carlo standard error is

$$
\sqrt{\frac{\hat p(1-\hat p)}N}=\sqrt{\frac{0.17(0.83)}{600}}\approx0.01534.
$$

A rough large-sample 95% interval for the simulation estimate is $0.17\pm1.96(0.01534)$, approximately $[0.140,0.200]$. Its sampling coverage relies on independent trials and an adequate normal approximation. Near zero or one, or for small counts, use an appropriate binomial interval instead. The hypothetical count 102 illustrates the arithmetic; it is not presented as a recorded software run.

## Applications in numerical mathematics

For a uniform $U$ on $[a,b]$,

$$
\int_a^b g(x)\,dx=(b-a)E[g(U)].
$$

This follows because the uniform density is $1/(b-a)$. Sample independent uniforms $U_i$ and estimate the integral by $(b-a)\sum_i g(U_i)/N$. Its estimated standard error is $(b-a)s_g/\sqrt N$, assuming finite variance. [MIT's Monte Carlo integration notes](https://ocw.mit.edu/courses/2-086-numerical-computation-for-mechanical-engineers-fall-2014/30d8b5da0c8e6ad44987b3563bc32dab_MIT2_086F14_Monte_Carlo.pdf) derive the same estimator.

For $g(x)=x^2$ on $[0,1]$, the target is $1/3$. A small illustrative sample $0.1,0.4,0.6,0.9$ gives squared values $0.01,0.16,0.36,0.81$ and estimate $1.34/4=0.335$. This fortunate closeness is not a guarantee. The exact output variance is $E[U^4]-E[U^2]^2=1/5-1/9=4/45$. At $N=1000$, the true Monte Carlo standard error is $\sqrt{4/(45000)}\approx0.009428$.

## Further applications and limitations

For an event region $A$ inside a unit square, sample uniform points $(U,V)$ and average the indicator of membership in $A$ to estimate its area. In more dimensions the same idea estimates a volume. Other applications include checking a test's false-rejection rate under a known null model, estimating a statistic's sampling distribution, and propagating uncertainty through a nonlinear calculation.

A bootstrap resamples observed data to approximate a sampling distribution; it adds assumptions about how the empirical sample represents the population. Markov chain Monte Carlo creates dependent draws and needs dependence-aware error calculations. Neither method inherits the iid standard-error formula automatically. Ordinary Monte Carlo standard errors decrease as $N^{-1/2}$ when the variance is finite: reducing standard error by ten generally needs one hundred times as many independent trials. Rare-event estimates can require much larger effort than their simple output suggests.

## Practice

1. A simulation estimates a probability as $0.25$ from 400 independent trials. Estimate its standard error.
2. A Monte Carlo integral has estimated standard error $0.02$ using 2500 independent trials. Approximately how many trials give $0.01$ under the same variance?

> [!example]- Worked answers
> 1. The estimate is $\sqrt{0.25(0.75)/400}\approx0.02165$. It quantifies simulation variation under the model, not model validity.
> 2. Halving the standard error requires four times as many trials, or 10000. The variance must remain comparable for this scaling estimate.
