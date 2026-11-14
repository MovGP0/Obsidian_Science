---
title: "Binomial Distribution"
source_chapter: "C"
source_section: "C.3.1"
source_page: 484
---

> [!TLDR]
> The binomial distribution counts successes in independent trials and describes populations of noninteracting spins.

To count a population in a selected state, assume a fixed integer $N\ge0$, the same $0\le p\le1$ for every trial, and no correlations between trials. A specified sequence with $k$ successes has probability $p^k(1-p)^{N-k}$. There are $\binom Nk$ such sequences. Summing their equal weights gives the law below, with integer support $0\le k\le N$ and zero probability outside it.

Consider $N$ independent trials, each with success probability $p$ and failure probability $1-p$. The probability of exactly $k$ successes is

$$
P_B(k;N,p)=\binom Nk p^k(1-p)^{N-k}.
$$

The mean and variance are

$$
\langle k\rangle=Np,
\qquad
\langle(\Delta k)^2\rangle=Np(1-p).
$$

For example, this distribution describes the populations of spins $\pm1$ in a noninteracting paramagnet.

## Moment and model checks

Write the success count as a sum of indicators, each equal to one for success and zero for failure. Each indicator has mean $p$ and variance $p(1-p)$. Independence makes all cross covariances zero, so means and variances add to give the stated results. The binomial theorem gives normalization: the sum of all sequence weights is $(p+1-p)^N=1$.

For $N=2$ and $p=1/2$, the probabilities at $k=0,1,2$ are $1/4,1/2,1/4$. At $p=0$ or $p=1$, only one count is possible and the variance vanishes; evaluate these limits directly instead of relying on an ambiguous $0^0$ expression.

For the paramagnet, this model applies when the ensemble makes different sites independent and gives each site the same orientation probability. Noninteracting spins at a fixed total energy can still have correlated occupations because of that global constraint. Thus noninteraction alone is not sufficient to justify a binomial population law.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $k$ | $1$ | Success count | The number of successes or spins in the selected orientation. |
| $N$ | $1$ | Trial or spin count | The number of independent trials, or spins in the paramagnetic example. |
| $p$ | $1$ | Success probability | The probability of the selected outcome in each independent trial. |
| $P_B(k;N,p)$ | $1$ | Binomial probability | The probability of exactly k successes. |
