---
title: "Application: Stirling Formula"
source_chapter: "B"
source_section: "B.3"
source_page: 475
---

> [!TLDR]
> Applying Laplace's method to the gamma integral gives Stirling's formula and its first correction.

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

Multiplication by $n^{n+1}$ gives

$$
n!\sim\sqrt{2\pi n}\left(\frac ne\right)^n,
$$

and therefore

$$
\ln n!=n\ln n-n+\frac12\ln(2\pi n)+O(1/n).
$$

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
