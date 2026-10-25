---
title: "From Discrete to Continuous"
---

> [!TLDR]
> Taking the interval length to infinity turns a Fourier-series sum into the inverse Fourier integral. This chapter uses the symmetric normalization, with 1/√(2π) in both transform directions.

On $[-L,L]$, the allowed Fourier wavenumbers are $k_n=n\pi/L$, with spacing $\Delta k=\pi/L$. The coefficients are

$$
c_n=\frac1{2L}\int_{-L}^L f(x)e^{-ik_nx}\,dx.
$$

In the continuum limit, $2Lc_n$ approaches $\sqrt{2\pi}\,\hat f(k_n)$ in the formal Riemann-sum construction. Since $\Delta k/(2\pi)=1/(2L)$,

$$
f(x)=\sum_n c_ne^{ik_nx}
=\sum_n(2Lc_n)e^{ik_nx}\frac{\Delta k}{2\pi}.
$$

As $L\to\infty$, $\Delta k\to0$, and the sum becomes

$$
f(x)=\int_{-\infty}^{+\infty}\sqrt{2\pi}\,\hat f(k)e^{ikx}\frac{dk}{2\pi}
=\frac1{\sqrt{2\pi}}\int_{-\infty}^{+\infty}\hat f(k)e^{ikx}\,dk.
$$

> [!definition] Definition 13.1 | Fourier transform
> In the symmetric convention, the Fourier transform is
>
> $$
> \boxed{\hat f(k)=\mathcal F[f](k)
> =\frac1{\sqrt{2\pi}}\int_{-\infty}^{+\infty}f(x)e^{-ikx}\,dx.}
> $$
>
> The inverse transform is
>
> $$
> f(x)=\mathcal F^{-1}[\hat f](x)
> =\frac1{\sqrt{2\pi}}\int_{-\infty}^{+\infty}\hat f(k)e^{ikx}\,dk.
> $$

The forward and inverse transforms have the same normalization and opposite exponential signs. This is one convention. Other texts place $1/(2\pi)$ in the inverse transform or absorb factors into the frequency variable. Always check the convention.

> [!note]
> The source states the integral formulas for $f\in L^2(\mathbb R)$. For a general square-integrable function, the ordinary integral need not converge absolutely. Start with a suitable dense class, such as Schwartz functions, and extend the transform by norm continuity to $L^2$. In that setting, inversion and norm preservation hold in the $L^2$ sense. The Riemann-sum argument above is a formal derivation, not a proof for every $L^2$ function.
