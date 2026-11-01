---
title: "Laplace Approximation"
source_chapter: "B"
source_section: "B.1"
source_page: 473
---

> [!TLDR]
> Laplace's approximation replaces an integral near a single sharp maximum by a Gaussian integral.

An integral can be dominated by a narrow region even when its integrand is difficult to integrate exactly. Laplace's method uses the height and curvature of that region. The parameter $N$ is positive and tends to infinity; $f$ and $g$ do not depend on $N$ here, and $Nf$ must be dimensionless.

**Theorem B.1: Laplace's method.** Let $[a,b]$ be a finite interval and let $f:[a,b]\to\mathbb R$ be twice continuously differentiable. Assume that it has one absolute maximum at an interior point $x_0\in(a,b)$, with $f''(x_0)<0$. As $N\to\infty$,

$$
\int_a^b g(x)e^{Nf(x)}\,dx
\sim g(x_0)e^{Nf(x_0)}
\sqrt{\frac{2\pi}{N\lvert f''(x_0)\rvert}},
\tag{B.1}
$$

provided $g$ is absolutely integrable on $[a,b]$, continuous at $x_0$, and $g(x_0)\ne0$. The symbol $\sim$ means that the ratio of the two sides tends to one.

> [!note] Scope of the theorem
> Absolute integrability of $g$ on the full interval is a sufficient global condition in addition to its local continuity. Local continuity alone does not exclude a divergent integral elsewhere. The finite-interval statement above also avoids an unstated condition at infinity; an unbounded interval needs separate control of its tails.

## Proof

At the maximum, $f'(x_0)=0$. Expand near $x_0$:

$$
f(x)=f(x_0)+\frac12f''(x_0)(x-x_0)^2
+o((x-x_0)^2).
$$

Continuity gives $g(x)=g(x_0)+o(1)$.

> [!note] Source clarification
> The source writes the remainders as $O((x-x_0)^3)$ for $f$ and $O(x-x_0)$ for $g$. Those stronger bounds require more regularity than the theorem states. The remainders above follow from its stated assumptions and are sufficient for the leading approximation.

To see why a local expansion controls the full integral, choose a fixed small neighbourhood of $x_0$. On its complement, continuity and the unique maximum give $f(x)\le f(x_0)-\eta$ for some $\eta>0$. The absolute integral on this complement is at most $e^{N[f(x_0)-\eta]}\int_a^b|g(x)|\,dx$. This is exponentially smaller than the peak contribution.

Inside the neighbourhood, put $y=\sqrt{N|f''(x_0)|}(x-x_0)$. At fixed $y$, the remainder in the exponent tends to zero and $g(x)$ tends to $g(x_0)$. Also, $f''(x_0)<0$ gives a local Gaussian bound, so a fixed large range of $y$ captures the contribution with an arbitrarily small tail. This justifies integrating the local limit. The characteristic width is

$$
\delta x\sim\frac1{\sqrt{N|f''(x_0)|}}.
$$

Replace the slowly varying prefactor by $g(x_0)$ and extend the local Gaussian to the real line:

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

## Checks and boundaries

For $f(x)=-x^2/2$ and $g=1$ on $[-1,1]$, the prediction is $\sqrt{2\pi/N}$. Rescaling $y=\sqrt N x$ gives this result directly as the integration bounds tend to $\pm\infty$. The peak height stays equal to one while its area decreases: the width factor is essential.

For comparison, $\int_0^1e^{-Nx}\,dx=(1-e^{-N})/N$ has its maximum at an endpoint and scales as $N^{-1}$. The function $f(x)=-x^4$ has an interior maximum with zero curvature and gives a width of order $N^{-1/4}$. Neither case satisfies Theorem B.1. If $g(x_0)=0$, expand $g$ further instead of using a zero leading expression as a relative approximation.
