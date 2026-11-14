---
title: "Poisson Distribution"
source_chapter: "C"
source_section: "C.3.2"
source_page: 484
---

> [!TLDR]
> The Poisson distribution describes independent rare events and has equal mean and variance.

A detector count or cell population has no useful fixed upper cutoff when there are very many possible contributors, each with a very small chance to contribute. The limit below keeps that mean finite. It is taken at fixed nonnegative integer $k$ and fixed $\lambda\ge0$, rather than at fixed success probability.

The binomial distribution tends to the Poisson distribution when $N\to\infty$ and $p\to0$ at fixed $\lambda=Np$:

$$
P_P(k;\lambda)=\frac{\lambda^k}{k!}e^{-\lambda},
\qquad k=0,1,2,\ldots.
$$

Substitute $p=\lambda/N$ into the binomial law. At fixed $k$, the factor $\binom Nk(\lambda/N)^k$ tends to $\lambda^k/k!$, while $(1-\lambda/N)^{N-k}$ tends to $e^{-\lambda}$. The exponential series then shows that the probabilities sum to one.

Its mean and variance are equal:

$$
\langle k\rangle=\langle(\Delta k)^2\rangle=\lambda.
$$

The distribution describes independent rare events, such as radioactive decays, queue arrivals, and particle-count fluctuations in a dilute gas.

> [!note] Remark C.1
> The particle count in a small cell of an ideal grand-canonical gas is Poisson distributed with $\lambda=\bar n$, the mean particle count in the cell. For a dilute interacting gas this can be an approximation.

The ideal-gas remark above uses classical Maxwell–Boltzmann statistics. An ideal quantum gas in the degenerate regime does not generally have Poisson cell counts. An explicit counterexample is the free Fermi gas studied by [Astrakharchik, Combescot, and Pitaevskii, Section VI](https://arxiv.org/pdf/0707.0458#page=6).

Shift the summation index in the first moment to obtain $\langle k\rangle=\lambda$. A second shift gives $\langle k(k-1)\rangle=\lambda^2$. Since $k^2=k(k-1)+k$, the variance is also $\lambda$. In particular, the empty-count probability is $e^{-\lambda}$; for zero mean the distribution is concentrated at zero.

The physical examples need the same independence and rare-event assumptions. A finite collection of unstable nuclei has a binomial decay count over a fixed observation window; its Poisson approximation requires a small decay probability per nucleus. A cell in a classical ideal gas with a fixed total particle number likewise has a binomial count. Its reservoir limit gives the Poisson law. Quantum degeneracy, interactions, detector dead time, or clustering can change the variance and the empty-count probability.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\lambda,\ \bar n$ | $1$ | Mean count | The expected number of events or particles in the observation region. |
| $k$ | $1$ | Event or particle count | The number of events, or particles in a small gas cell. |
| $P_P(k;\lambda)$ | $1$ | Poisson probability | The probability of exactly k events. |
