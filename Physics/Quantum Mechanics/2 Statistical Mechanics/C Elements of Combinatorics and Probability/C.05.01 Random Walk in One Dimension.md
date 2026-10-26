---
title: "Random Walk in One Dimension"
source_chapter: "C"
source_section: "C.5.1"
source_page: 488
---

> [!TLDR]
> Independent fixed-length steps give a displacement whose variance grows linearly with the number of steps.

At each step, a point moves by $+\mechanical{\ell}$ with probability $p$, or by $-\mechanical{\ell}$ with probability $q=1-p$. After $N$ steps,

$$
n_-=N-n_+,
\qquad
\mechanical{x}=(n_+-n_-)\mechanical{\ell}
=(2n_+-N)\mechanical{\ell}.
$$

The probability of a given right-step count is binomial:

$$
P(n_+;N,p)=\binom N{n_+}p^{n_+}q^{N-n_+}.
$$

For large $N$ with fixed $0<p<1$, the central limit theorem gives the displacement density

$$
P(\mechanical{x},N)\approx
\frac1{\sqrt{2\pi N\,4pq\mechanical{\ell}^2}}
\exp\left[
-\frac{[\mechanical{x}-N(2p-1)\mechanical{\ell}]^2}
{2N\,4pq\mechanical{\ell}^2}
\right].
$$

> [!note] Continuous and lattice probabilities
> The source changes from a binomial probability to this continuous density. At a fixed step count, reachable lattice positions are separated by $2\mechanical{\ell}$. A lattice point probability is therefore approximated by $2\mechanical{\ell}$ times the displayed density.

For the symmetric walk, $p=q=1/2$,

$$
\langle\mechanical{x}\rangle=0,
\qquad
\langle\mechanical{x}^2\rangle=N\mechanical{\ell}^2.
$$

The standard deviation grows as $\sqrt N$, which is characteristic of diffusion.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\ell}$ | $\unit{m}$ | Step length | The distance moved in one step. |
| $\mechanical{x}$ | $\unit{m}$ | Displacement | The walker's position relative to its starting point. |
| $N,\ n_+,\ n_-$ | $1$ | Step counts | The total step count and the rightward and leftward counts. |
| $P(\mechanical{x},N)$ | $\unit{m^{-1}}$ | Displacement probability density | The continuous Gaussian approximation to the lattice distribution. |
