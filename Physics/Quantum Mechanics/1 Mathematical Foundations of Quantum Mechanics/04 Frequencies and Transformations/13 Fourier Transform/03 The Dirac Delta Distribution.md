---
title: "The Dirac Delta Distribution"
---

> [!TLDR]
> The Dirac delta is a distribution that evaluates a test function at a point. Its Fourier identities and Gaussian limit are distributional, rather than ordinary convergent function integrals.

> [!definition] Definition 13.2 | Dirac delta distribution
> The delta distribution at $a$ is characterized by
>
> $$
> \int_{-\infty}^{+\infty}\delta(x-a)f(x)\,dx=f(a)
> $$
>
> for suitable test functions. Evaluation also makes sense for functions continuous at $a$ when the integral is interpreted as integration against the point measure.

The delta is not an ordinary function. It is a functional on test functions. A concentrated Gaussian sequence approaches it in the distributional sense:

$$
\delta(x)=\lim_{\sigma\to0^+}\frac1{\sigma\sqrt{2\pi}}
e^{-x^2/(2\sigma^2)}.
$$

Useful identities are

$$
\delta(-x)=\delta(x)\qquad\text{(evenness)}.
\tag{13.1}
$$

$$
\delta(ax)=\frac1{|a|}\delta(x),\qquad a\in\mathbb R\setminus\{0\}.
\tag{13.2}
$$

$$
x\delta(x)=0.
\tag{13.3}
$$

$$
\delta(x^2-a^2)=\frac1{2|a|}\left[\delta(x-a)+\delta(x+a)\right],
\qquad a\in\mathbb R\setminus\{0\}.
\tag{13.4}
$$

The nonzero condition in (13.4) is necessary: the usual simple-root rule does not apply to the double root at $a=0$.

Up to the factor $\sqrt{2\pi}$, the delta is the Fourier transform of a constant:

$$
\mathcal F[1](k)=\sqrt{2\pi}\,\delta(k).
$$

Equivalently,

$$
\delta(x)=\frac1{2\pi}\int_{-\infty}^{+\infty}e^{ikx}\,dk,
\qquad
\mathcal F[\delta(x-a)](k)=\frac{e^{-ika}}{\sqrt{2\pi}}.
$$

These identities are distributional. The exponential integral is not an ordinary convergent improper integral.
