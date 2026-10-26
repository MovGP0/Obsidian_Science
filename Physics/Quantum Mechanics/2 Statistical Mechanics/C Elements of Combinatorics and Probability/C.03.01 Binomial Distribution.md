---
title: "Binomial Distribution"
source_chapter: "C"
source_section: "C.3.1"
source_page: 484
---

> [!TLDR]
> The binomial distribution counts successes in independent trials and describes populations of noninteracting spins.

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

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $k$ | $1$ | Success count | The number of successes or spins in the selected orientation. |
| $N$ | $1$ | Trial or spin count | The number of independent trials, or spins in the paramagnetic example. |
| $p$ | $1$ | Success probability | The probability of the selected outcome in each independent trial. |
| $P_B(k;N,p)$ | $1$ | Binomial probability | The probability of exactly k successes. |
