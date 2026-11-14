---
title: "Application: Stirling Formula"
source_chapter: "B"
source_section: "B.3"
source_page: 475
---

> [!TLDR]
> Applying Laplace's method to the gamma integral gives Stirling's formula and its first correction.

Large factorials occur when statistical mechanics counts arrangements of particles. Their logarithms enter entropy, so both the leading exponential and the smaller prefactor matter. Here $n$ is a positive integer and the limit is $n\to\infty$. The gamma integral also permits an extension to positive real $n$.

Start from the gamma-function representation of the factorial:

$$
n!=\Gamma(n+1)
=\int_0^\infty t^ne^{-t}\,dt
=\int_0^\infty e^{n\ln t-t}\,dt.
$$

Set $u=t/n$, so $dt=n\,du$:

$$
n!=n^{n+1}\int_0^\infty e^{n(\ln u-u)}\,du.
$$

This substitution puts the moving maximum at a fixed value of $u$. Its width will be of order $n^{-1/2}$ in $u$, or $\sqrt n$ in the original variable $t$. The relative width in $t$ is therefore small even though its absolute width grows.

For $f(u)=\ln u-u$, the stationary point is

$$
f'(u)=\frac1u-1=0
\quad\Longrightarrow\quad u_0=1,
$$

with $f(1)=-1$ and $f''(1)=-1$. Apply (B.1), with $g=1$ and $N=n$:

$$
\int_0^\infty e^{n(\ln u-u)}\,du
\sim e^{-n}\sqrt{\frac{2\pi}{n}}.
$$

The integration range is unbounded, so the finite-interval theorem needs a tail check. Here $f(u)\to-\infty$ at both ends. For sufficiently large $u$, $\ln u-u\le-u/2$, which bounds the upper tail by a decaying exponential. Near zero, the integrand is at most $u^n$, whose integral up to a fixed small $\varepsilon$ is $\varepsilon^{n+1}/(n+1)$. These tails can be separated from the peak at $u=1$ and are exponentially smaller than its contribution.

Multiplication by $n^{n+1}$ gives

$$
n!\sim\sqrt{2\pi n}\left(\frac ne\right)^n,
$$

Using the first correction derived below, the logarithmic form is

$$
\ln n!=n\ln n-n+\frac12\ln(2\pi n)+O(1/n).
$$

The curvature determines the square-root prefactor. To find the first correction, use $f'''(1)=2$ and $f^{(4)}(1)=-6$ in [[B.01.01 Corrections to the Laplace Approximation]]:

$$
n!=\sqrt{2\pi n}\left(\frac ne\right)^n
\left[1+\frac1{12n}+O(n^{-2})\right].
$$

The corresponding logarithmic expansion begins with $1/(12n)-1/(360n^3)$; it contains no $n^{-2}$ term. This stronger logarithmic statement uses the higher-order expansion, not only the leading Laplace theorem. See [NIST DLMF §5.11(i)](https://dlmf.nist.gov/5.11#i).

## Numerical check

For $n=10$,

$$
\ln10!=\ln3628800\approx15.1044.
$$

Stirling's expression gives

$$
10\ln10-10+\frac12\ln(20\pi)
\approx23.0259-10+2.0702
=15.0961.
$$

The source rounds the relative error to about $0.06\%$. Adding $1/(12n)\approx0.0083$ gives agreement through the remaining $O(1/n^3)$ logarithmic error.

> [!note] Meaning of the benchmark error
> The quoted $0.06\%$ is the relative error in $\ln10!$. The relative error in $10!$ itself is about $0.83\%$: an additive error in a logarithm becomes a multiplicative error after exponentiation. The benchmark above preserves the source's logarithmic comparison.

As a reconstruction check, remove the factor $n$ from $dt=n\,du$: the predicted factorial would then be too small by a factor $n$. This check catches a missing Jacobian that a correct saddle location would not detect. The rescaling is unsuitable at $n=0$, even though the original gamma integral still gives $0!=1$.
