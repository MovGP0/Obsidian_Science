---
title: "Discrete probability models"
catalogue_ids:
  - "16.2.3"
  - "16.2.3.1"
  - "16.2.3.2"
  - "16.2.3.3"
---

> [!TLDR]
> Binomial, hypergeometric, and Poisson models describe different counting experiments with explicit assumptions.

## Choose a model from the experiment

Before choosing a distribution, describe the trials. Are there a fixed number of attempts? Is the success probability constant? Does selecting an object remove it from a finite collection? Are we counting arrivals in a continuous interval? These questions separate three important distributions. The phrase “count data” alone does not select one.

This lesson uses [[Counting arrangements and selections]] and [[Random variables and joint distributions]]. A factorial is a product such as $4!=24$, and $\binom nk$ counts unordered sets of $k$ distinct objects from $n$.

## Binomial distribution

A Bernoulli trial has values one for success and zero for failure, with success probability $p$. Suppose $n$ trials are mutually independent and all have the same $p$. The total success count $X$ is binomial:

$$
P(X=k)=\binom nkp^k(1-p)^{n-k},\quad k=0,1,\ldots,n.
$$

Any particular sequence with $k$ successes has probability $p^k(1-p)^{n-k}$. There are $\binom nk$ such sequences, which proves the formula. The binomial theorem confirms that their sum is $(p+1-p)^n=1$.

Writing $X=I_1+\cdots+I_n$ as a sum of success indicators gives $E[X]=np$. Each indicator has variance $p(1-p)$. Independence removes the covariance terms, so $\operatorname{Var}(X)=np(1-p)$. If probabilities differ between independent trials, the total is generally not binomial. Dependence can also change the variance. See [NIST's binomial reference](https://www.itl.nist.gov/div898/handbook/eda/section3/eda366i.htm).

## Hypergeometric distribution

A finite population contains $N$ objects, of which $K$ are marked successes. Select $n$ different objects uniformly without replacement. If $X$ counts marked objects, then

$$
P(X=k)=\frac{\binom Kk\binom{N-K}{n-k}}{\binom Nn}.
$$

The denominator counts all equally likely subsets. The numerator selects $k$ marked objects and $n-k$ unmarked objects. Only integers satisfying $\max(0,n-(N-K))\le k\le\min(n,K)$ are possible. Impossible selections have probability zero.

For $N>1$, the mean and variance are

$$
E[X]=n\frac KN,\qquad
\operatorname{Var}(X)=n\frac KN\left(1-\frac KN\right)\frac{N-n}{N-1}.
$$

The last factor is the finite-population correction. Sampling without replacement reduces spread compared with independent sampling from the same proportion. When $n=N$, the entire population is selected and the variance is zero. When $N=1$, calculate directly instead of using the variance expression with a zero denominator. The [official R hypergeometric documentation](https://stat.ethz.ch/R-manual/R-devel/library/stats/html/Hypergeometric.html) supplies the same finite-population model with a different parameter naming convention.

## Poisson distribution

A Poisson variable counts events with parameter $\lambda>0$:

$$
P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!},\quad k=0,1,2,\ldots.
$$

Its mean and variance both equal $\lambda$. Unlike a binomial count, it has no fixed finite maximum. In a homogeneous Poisson process, $\lambda$ is the rate multiplied by the interval length. Such a process assumes independent counts in disjoint intervals and a constant rate. [[Large numbers and stochastic processes]] develops these assumptions. A mean count by itself does not prove that a Poisson model is suitable. Clustering or changing rates can create a different variance pattern. See [NIST's Poisson reference](https://www.itl.nist.gov/div898/handbook/eda/section3/eda366j.htm).

A binomial count can be approximated by Poisson when $n$ is large, $p$ is small, and $np$ is moderate. The limiting statement is precise: if $p_n\to0$ and $np_n\to\lambda$, binomial probabilities at each fixed $k$ tend to the Poisson formula. The approximation is not a rule that every rare event is automatically Poisson.

## Check model boundaries

At $p=0$ or $p=1$, a binomial variable is constant: the count is respectively zero or $n$. Interpret its probability formula through this experiment rather than attempting to evaluate an ambiguous $0^0$ term. In a hypergeometric model, sampling the entire population also gives a constant count. The corresponding variance formulas confirm these cases.

A Poisson count is never negative. Its probability sum is one because the exponential series gives $\sum_{k\ge0}\lambda^k/k!=e^\lambda$, which cancels the factor $e^{-\lambda}$. Its unbounded support can be inappropriate when a known small stock places a firm maximum on the count. A distribution is a model of a stated experiment, not a label selected only by matching a mean.

## Worked comparison

There are ten cards, four marked. In three draws with replacement, the marked count is binomial with $n=3,p=0.4$. Exactly two marks has probability $3(0.4)^2(0.6)=0.288$. Without replacement, it is hypergeometric and the probability is

$$
\frac{\binom42\binom61}{\binom{10}3}=\frac{36}{120}=0.3.
$$

Both means equal $1.2$, but their variances differ: $0.72$ with replacement and $0.72(7/9)=0.56$ without it. A separate arrival model with Poisson mean $1.2$ would give exactly two events with probability $e^{-1.2}1.2^2/2\approx0.2169$. It answers another experiment.

## Practice

1. Five independent trials have success probability $1/2$. Find the probability of at least one success.
2. A Poisson variable has mean two. Find $P(X=0)$ and $P(X\ge2)$.

> [!example]- Worked answers
> 1. Use the complement: $1-P(X=0)=1-(1/2)^5=31/32$. This avoids summing five separate terms.
> 2. $P(X=0)=e^{-2}\approx0.1353$. Subtract zero and one from the total: $P(X\ge2)=1-e^{-2}-2e^{-2}=1-3e^{-2}\approx0.5940$.
