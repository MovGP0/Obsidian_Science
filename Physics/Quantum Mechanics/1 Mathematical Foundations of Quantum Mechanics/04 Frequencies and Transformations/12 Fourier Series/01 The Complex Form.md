---
title: "The Complex Form"
---

> [!TLDR]
> The complex Fourier series uses exponentials with integer harmonics. Its coefficients differ by a normalization factor from the coefficients of a normalized Hilbert-space basis.

> [!definition] Definition 12.1 | Fourier series
> A sufficiently regular function $f:[-L,L]\to\mathbb C$, extended periodically with period $2L$, has the Fourier expansion
>
> $$
> f(x)=\sum_{n=-\infty}^{+\infty}c_n e^{in\pi x/L}.
> $$
>
> Its **Fourier coefficients** are
>
> $$
> c_n=\frac1{2L}\int_{-L}^L f(x)e^{-in\pi x/L}\,dx.
> $$

The functions

$$
\phi_n(x)=\frac1{\sqrt{2L}}e^{in\pi x/L},
\qquad n\in\mathbb Z,
$$

form an orthonormal basis of $L^2([-L,L])$. The Fourier coefficients satisfy

$$
c_n=\frac1{\sqrt{2L}}\langle\phi_n,f\rangle.
$$

Thus the Fourier series is a basis expansion, with the chosen normalization included. If $d_n=\langle\phi_n,f\rangle$, then

$$
d_n=\sqrt{2L}\,c_n,
\qquad f=\sum_n d_n\phi_n.
$$

For every $f\in L^2([-L,L])$, this expansion converges in norm. The pointwise statement requires the conditions discussed in [[04 Convergence and the Gibbs Phenomenon]].
