---
title: "Random Walk in One Dimension"
source_chapter: "C"
source_section: "C.5.1"
source_page: 488
---

> [!TLDR]
> Independent fixed-length steps give a displacement whose variance grows linearly with the number of steps.

Take the origin as the starting point and choose rightward displacement as positive. The steps are independent and have the same probabilities at every site and step. There are no walls. For a fixed nonnegative integer $N$, the allowed positions run from $-N\mechanical{\ell}$ to $N\mechanical{\ell}$ in intervals of $2\mechanical{\ell}$. This parity restriction is part of the exact sample space.

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

A single step has mean $(p-q)\mechanical{\ell}$ and second moment $\mechanical{\ell}^2$, so its variance is $4pq\mechanical{\ell}^2$. Independence makes the mean displacement $N(p-q)\mechanical{\ell}$ and its variance $4Npq\mechanical{\ell}^2$. Bias produces a moving centre; it does not remove random spreading unless one step direction is certain.

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

For one symmetric step there is no probability at the origin, despite the zero mean. After two steps the probabilities at $-2\mechanical{\ell}$, zero, and $2\mechanical{\ell}$ are $1/4,1/2,1/4$. They normalize to one and give the exact second moment $2\mechanical{\ell}^2$.

The Gaussian density smooths over this parity structure and has small tails outside the finite reachable range. Use it near the centre when both directional counts are large, rather than as an exact law for every endpoint. At $p=0$ or $p=1$, the motion is deterministic and the displayed Gaussian has zero width, so use the exact walk instead. A physical diffusion test must separate variance about the moving mean from the raw second moment when drift is present.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\ell}$ | $\unit{m}$ | Step length | The distance moved in one step. |
| $\mechanical{x}$ | $\unit{m}$ | Displacement | The walker's position relative to its starting point. |
| $N,\ n_+,\ n_-$ | $1$ | Step counts | The total step count and the rightward and leftward counts. |
| $P(\mechanical{x},N)$ | $\unit{m^{-1}}$ | Displacement probability density | The continuous Gaussian approximation to the lattice distribution. |
| $p,\ q$ | $1$ | Step probabilities | The probabilities for rightward and leftward jumps. |
| $P(n_+;N,p)$ | $1$ | Lattice probability | The probability of a specified count of rightward jumps. |
