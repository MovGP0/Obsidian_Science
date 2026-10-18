---
title: "Random variables and joint distributions"
catalogue_ids:
  - "16.2.2"
  - "16.2.2.1"
  - "16.2.2.2"
  - "16.2.2.3"
  - "16.2.2.4"
---

> [!TLDR]
> A random variable assigns a number to each outcome; its distribution describes those numbers and their probabilities.

## From outcomes to numbers

A random variable $X$ is a numerical function on a sample space. Toss two coins and let $X$ count the heads. The four outcomes TT, TH, HT, and HH give values $0,1,1,2$. Under independent fair tosses, the probability mass function is $p_X(0)=1/4$, $p_X(1)=1/2$, and $p_X(2)=1/4$. The variable is the rule; an observed value such as $x=1$ is a result of applying that rule to an outcome.

For a discrete variable, probabilities are sums of masses. For a variable with density $f_X$, probabilities are areas: $P(a<X\le b)=\int_a^b f_X(x)\,dx$. A density is nonnegative and has total area one. Its height can exceed one, and $f_X(x)$ is not the probability of the single point $x$. See [NIST's definition of a probability distribution](https://www.itl.nist.gov/div898/handbook/eda/section3/eda361.htm).

The cumulative distribution function, or CDF, works for both cases:

$$
F_X(x)=P(X\le x).
$$

It never decreases, is right-continuous, and tends to zero and one at the two ends of the real line. The interval formula $P(a<X\le b)=F_X(b)-F_X(a)$ includes the right endpoint and excludes the left endpoint. For a discrete variable, changing endpoint inclusion can change the answer. For a variable with a density, each single point has probability zero.

## Expected value and dispersion

The expectation is the probability-weighted mean. For finite support,

$$
\mu=E[X]=\sum_x xp_X(x),\qquad
\operatorname{Var}(X)=E[(X-\mu)^2].
$$

For a density, replace sums by integrals when the relevant integrals exist. The variance measures squared spread; its nonnegative square root is the standard deviation $\sigma$. Expanding the square gives $\operatorname{Var}(X)=E[X^2]-\mu^2$. “Dispersion” can refer broadly to spread; in the catalogue's formulas it is represented here by variance.

For the two-coin count, $E[X]=0/4+1/2+2/4=1$ and $E[X^2]=0+1/2+4/4=3/2$. Therefore the variance is $1/2$. Expectation need not be a possible observation: a single fair die has mean $3.5$.

Linearity gives $E[aX+bY]=aE[X]+bE[Y]$ when expectations exist. Independence is not required. Variances obey

$$
\operatorname{Var}(aX+bY)=a^2\operatorname{Var}(X)+b^2\operatorname{Var}(Y)+2ab\operatorname{Cov}(X,Y),
$$

where $\operatorname{Cov}(X,Y)=E[(X-E[X])(Y-E[Y])]$. Independent variables with finite variances have zero covariance. The reverse implication is false in general.

## Chebyshev's inequality

For any variable with finite variance and any $a>0$,

$$
P(|X-\mu|\ge a)\le\frac{\sigma^2}{a^2}.
$$

To see the reason, the nonnegative quantity $(X-\mu)^2$ is at least $a^2$ on this event. Its full expectation must be at least $a^2$ times the event probability. Divide by $a^2$ to obtain the bound. No normal-distribution assumption is needed. For $a=2\sigma>0$, the bound is $1/4$. It is often conservative; it does not assert that exactly a quarter of observations fall that far away.

## Worked CDF calculation

For the two-coin count, the CDF is zero below zero, $1/4$ from zero up to but not including one, $3/4$ from one up to but not including two, and one from two onwards. Thus $P(0<X\le1)=F_X(1)-F_X(0)=3/4-1/4=1/2$. If zero were included, the answer would be $3/4$. Each jump height equals the probability at that point. For a variable with a density there are no jumps caused by point masses; its CDF instead accumulates area continuously.

## Multidimensional random variables

A random vector $(X,Y)$ records two numerical rules on the same experiment. Its joint mass $p(x,y)$ specifies the probability of each pair. Sum a joint table along one coordinate to obtain a marginal distribution. If $p_X(x)>0$, a conditional mass is $p(y\mid x)=p(x,y)/p_X(x)$. Independence requires $p(x,y)=p_X(x)p_Y(y)$ for all pairs. For variables with a joint density, use integrals and the corresponding density factorization.

For two fair independent die results $X,Y$, the joint table has 36 equal cells. The event $X+Y=7$ contains six cells. Its probability is $1/6$, even though the possible sums $2,3,\ldots,12$ are not equally likely. A joint model prevents this common counting error.

## Worked example: dependence with zero covariance

Let $X$ be equally likely to be $-1,0,1$, and put $Y=X^2$. Then $E[X]=0$, $E[Y]=2/3$, and $E[XY]=E[X^3]=0$. Thus the covariance is zero. Yet $Y=0$ forces $X=0$, so the variables are dependent. Their joint distribution has only three possible pairs: $(-1,1),(0,0),(1,1)$. Zero covariance rules out linear association in this example, not all association.

## Practice

1. For $P(X=0)=1/4$ and $P(X=2)=3/4$, find the mean, variance, and $F_X(1)$.
2. A variable has mean ten and variance four. Bound $P(|X-10|\ge6)$ without selecting a distribution.

> [!example]- Worked answers
> 1. $E[X]=3/2$ and $E[X^2]=3$. The variance is $3-(3/2)^2=3/4$. Only zero lies at or below one, so $F_X(1)=1/4$.
> 2. Chebyshev gives $4/6^2=1/9$. This is an upper bound, not a numerical estimate of the actual tail probability.
