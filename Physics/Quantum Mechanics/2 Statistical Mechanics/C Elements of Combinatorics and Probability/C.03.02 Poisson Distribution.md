---
title: "Poisson Distribution"
source_chapter: "C"
source_section: "C.3.2"
source_page: 484
---

> [!TLDR]
> The Poisson distribution describes independent rare events and has equal mean and variance.

The binomial distribution tends to the Poisson distribution when $N\to\infty$ and $p\to0$ at fixed $\lambda=Np$:

$$
P_P(k;\lambda)=\frac{\lambda^k}{k!}e^{-\lambda},
\qquad k=0,1,2,\ldots.
$$

Its mean and variance are equal:

$$
\langle k\rangle=\langle(\Delta k)^2\rangle=\lambda.
$$

The distribution describes independent rare events, such as radioactive decays, queue arrivals, and particle-count fluctuations in a dilute gas.

> [!note] Remark C.1
> The particle count in a small cell of an ideal grand-canonical gas is Poisson distributed with $\lambda=\bar n$, the mean particle count in the cell. For a dilute interacting gas this can be an approximation.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\lambda,\ \bar n$ | $1$ | Mean count | The expected number of events or particles in the observation region. |
| $k$ | $1$ | Event or particle count | The number of events, or particles in a small gas cell. |
| $P_P(k;\lambda)$ | $1$ | Poisson probability | The probability of exactly k events. |
