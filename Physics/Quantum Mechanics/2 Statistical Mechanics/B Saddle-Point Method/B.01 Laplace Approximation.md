---
title: "Laplace Approximation"
source_chapter: "B"
source_section: "B.1"
source_page: 473
---

> [!TLDR]
> Laplace's approximation replaces an integral near a single sharp maximum by a Gaussian integral.

**Theorem B.1: Laplace's method.** Let $f:[a,b]\to\mathbb R$ be twice continuously differentiable. Assume that it has one absolute maximum at an interior point $x_0\in(a,b)$, with $f''(x_0)<0$. As $N\to\infty$,

$$
\int_a^b g(x)e^{Nf(x)}\,dx
\sim g(x_0)e^{Nf(x_0)}
\sqrt{\frac{2\pi}{N\lvert f''(x_0)\rvert}},
\tag{B.1}
$$

provided $g$ is continuous at $x_0$ and $g(x_0)\ne0$.

## Proof

At the maximum, $f'(x_0)=0$. Expand near $x_0$:

$$
f(x)=f(x_0)+\frac12f''(x_0)(x-x_0)^2
+o((x-x_0)^2).
$$

Continuity gives $g(x)=g(x_0)+o(1)$.

> [!note] Source clarification
> The source writes the remainders as $O((x-x_0)^3)$ for $f$ and $O(x-x_0)$ for $g$. Those stronger bounds require more regularity than the theorem states. The remainders above follow from its stated assumptions and are sufficient for the leading approximation.

For large $N$, the exponential is concentrated near $x_0$ over a width $\delta x\sim N^{-1/2}$. Replace the slowly varying prefactor by $g(x_0)$ and extend the local Gaussian to the real line:

$$
\begin{aligned}
\int_a^b g(x)e^{Nf(x)}\,dx
&\approx g(x_0)e^{Nf(x_0)}
\int_{-\infty}^{+\infty}
e^{-\frac12N\lvert f''(x_0)\rvert(x-x_0)^2}\,dx\\
&=g(x_0)e^{Nf(x_0)}
\sqrt{\frac{2\pi}{N\lvert f''(x_0)\rvert}}.
\end{aligned}
$$

This proves the leading asymptotic result.

> [!note] Error from extending the interval
> The source describes the extension error as exponentially small. This refers to the Gaussian tails outside a fixed neighbourhood of the interior maximum. It does not describe all errors from truncating the local expansion; those can have algebraic order in $1/N$.
