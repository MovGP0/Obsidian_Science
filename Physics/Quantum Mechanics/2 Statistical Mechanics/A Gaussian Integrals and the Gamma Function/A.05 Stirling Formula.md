---
title: "Stirling Formula"
source_chapter: "A"
source_section: "A.5"
source_page: 465
---

> [!TLDR]
> Stirling's formula gives a large-factorial approximation whose logarithm is useful in entropy calculations.

Stirling's formula gives an asymptotic approximation to $\ln n!$ for $n\gg1$. It is central to entropy calculations.

**Theorem A.2: Stirling's formula.** As $n\to\infty$,

$$
\ln n!
=n\ln n-n+\frac12\ln(2\pi n)+O(1/n).
$$

Equivalently,

$$
n!\sim\sqrt{2\pi n}\left(\frac ne\right)^n.
$$

## Derivation by the saddle-point method

Start from

$$
n!=\Gamma(n+1)=\int_0^\infty t^ne^{-t}\,dt.
$$

Write the integrand as $e^{n\ln t-t}$ and set $t=nu$:

$$
n!
=n^{n+1}\int_0^\infty u^ne^{-nu}\,du
=n^{n+1}\int_0^\infty e^{n(\ln u-u)}\,du.
$$

The function $f(u)=\ln u-u$ has its maximum at $u^*=1$, with $f(1)=-1$ and $f''(1)=-1$. Expand to second order:

$$
f(u)\approx-1-\frac12(u-1)^2.
$$

For large $n$, the narrow peak permits extension of the integration interval:

$$
\begin{aligned}
n!
&\approx n^{n+1}e^{-n}
\int_{-\infty}^{+\infty}e^{-n(u-1)^2/2}\,du\\
&=n^{n+1}e^{-n}\sqrt{\frac{2\pi}{n}}
=\sqrt{2\pi n}\left(\frac ne\right)^n.
\end{aligned}
$$

Taking the logarithm gives $n\ln n-n+\frac12\ln(2\pi n)$.

> [!note] Remark A.2
> Statistical mechanics often uses only the leading approximation $\ln n!\approx n\ln n-n$. The term $\frac12\ln(2\pi n)$ has a vanishing contribution per particle, since $n^{-1}\ln n!\sim\ln n-1$. It remains relevant when calculating corrections.

The full asymptotic Stirling series is

$$
\ln\Gamma(z+1)
=z\ln z-z+\frac12\ln(2\pi z)
+\frac1{12z}-\frac1{360z^3}+\cdots,
\qquad z\to\infty.
$$

See [[B.03 Application - Stirling Formula]] for the saddle-point correction.
