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

The leading multiplicative form is

$$
n!\sim\sqrt{2\pi n}\left(\frac ne\right)^n.
$$

Here $n$ is a positive integer, and the asymptotic limit holds as $n$ grows. The symbol $\sim$ means that the ratio of the two factorial expressions tends to one. It does not mean equality for finite $n$. For entropy, the logarithm is usually the useful quantity because independent state counts multiply while their logarithms add.

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

The curvature term shows that the important values satisfy $|u-1|$ of order $n^{-1/2}$. Set $s=\sqrt n(u-1)$: the lower endpoint $u=0$ becomes $s=-\sqrt n$, far from the peak at $s=0$. This explains both the width factor and the extension of the interval. Terms beyond the quadratic control the correction. This argument gives the leading saddle-point approximation; it is not an error-bound proof of the stated $O(1/n)$ remainder.

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

For example, at $n=1$ the leading factorial approximation is $\sqrt{2\pi}/e$, not $1$; the large-argument condition matters. A useful check is to compare successive approximations with an exact small factorial before using the formula for a finite-size correction.

The full asymptotic Stirling series is

$$
\ln\Gamma(z+1)
=z\ln z-z+\frac12\ln(2\pi z)
+\frac1{12z}-\frac1{360z^3}+\cdots,
\qquad z\to\infty.
$$

For this article, read the last expansion along the positive real axis. It is an asymptotic series: retain a finite number of terms for the required large-argument accuracy, rather than assume convergence after adding arbitrarily many terms. The expansion and remainder bounds are given in [NIST DLMF §5.11](https://dlmf.nist.gov/5.11). The first omitted logarithmic term after $\tfrac12\ln(2\pi n)$ is $1/(12n)$, consistent with the theorem's $O(1/n)$ remainder.

See [[B.03 Application - Stirling Formula]] for the saddle-point correction.
