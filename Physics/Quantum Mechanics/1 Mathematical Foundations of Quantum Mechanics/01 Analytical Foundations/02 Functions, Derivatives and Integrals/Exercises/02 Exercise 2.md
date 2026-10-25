---
title: "Exponential, Gaussian, and trigonometric integrals"
---

> [!TLDR]
> Integration by parts, the Gaussian integral, and symmetry evaluate these four integrals.

Chapter 2: Functions, Derivatives and Integrals · Exercise 2 · Basic level.

Back to [[02 Functions, Derivatives and Integrals/08 Exercises#Exercise 2|Chapter 2 exercise index]].

## Question

Calculate the following integrals.

**(a)**

$$
\int_0^\infty x\mathrm{e}^{-x}\,\mathrm{d}x.
$$

**(b)**

$$
\int_{-\infty}^{+\infty}\mathrm{e}^{-2x^2}\,\mathrm{d}x.
$$

**(c)**

$$
\int_0^{\mechanical{L}}\sin^2\left(\frac{\pi\mechanical{x}}{\mechanical{L}}\right)\mathrm{d}\mechanical{x}.
$$

**(d)** Without calculation:

$$
\int_{-\infty}^{+\infty}x\mathrm{e}^{-x^2}\,\mathrm{d}x.
$$

Use $\mechanical{L}>0$ in (c). The variables in (a), (b), and (d) are dimensionless.

## Worked solution

### (a) Use integration by parts

Choose $u=x$ and $\mathrm{d}v=\mathrm{e}^{-x}\mathrm{d}x$. This choice reduces the polynomial degree:

$$
\begin{aligned}
\int_0^\infty x\mathrm{e}^{-x}\,\mathrm{d}x
&=\left[-x\mathrm{e}^{-x}\right]_0^\infty
+\int_0^\infty\mathrm{e}^{-x}\,\mathrm{d}x\\
&=0+\left[-\mathrm{e}^{-x}\right]_0^\infty=1.
\end{aligned}
$$

The boundary term vanishes because exponential decay is faster than linear growth.

### (b) Derive and scale the Gaussian integral

First let $I=\int_{-\infty}^{\infty}\mathrm{e}^{-u^2}\,\mathrm{d}u$. The integrand is positive, so $I>0$. Square the integral and use polar coordinates in the plane:

$$
\begin{aligned}
I^2
&=\int_{\mathbb R^2}\mathrm{e}^{-(u^2+v^2)}\,\mathrm{d}u\,\mathrm{d}v\\
&=\int_0^{2\pi}\mathrm{d}\theta\int_0^\infty\mathrm{e}^{-r^2}r\,\mathrm{d}r\\
&=2\pi\left[-\frac12\mathrm{e}^{-r^2}\right]_0^\infty=\pi.
\end{aligned}
$$

The Jacobian contributes $r$. Thus $I=\sqrt\pi$. Now set $u=\sqrt2x$, so $\mathrm{d}x=\mathrm{d}u/\sqrt2$:

$$
\int_{-\infty}^{\infty}\mathrm{e}^{-2x^2}\,\mathrm{d}x
=\frac1{\sqrt2}\int_{-\infty}^{\infty}\mathrm{e}^{-u^2}\,\mathrm{d}u
=\sqrt{\frac\pi2}.
$$

### (c) Replace the squared sine

Use $\sin^2u=(1-\cos 2u)/2$ to obtain a direct antiderivative:

$$
\begin{aligned}
\int_0^{\mechanical{L}}\sin^2\left(\frac{\pi\mechanical{x}}{\mechanical{L}}\right)\mathrm{d}\mechanical{x}
&=\left[\frac{\mechanical{x}}2
-\frac{\mechanical{L}}{4\pi}\sin\left(\frac{2\pi\mechanical{x}}{\mechanical{L}}\right)\right]_0^{\mechanical{L}}\\
&=\frac{\mechanical{L}}2.
\end{aligned}
$$

The sine term is zero at both endpoints.

### (d) Use odd symmetry

The Gaussian factor is even, while the factor $x$ is odd. Their product is therefore odd:

$$
(-x)\mathrm{e}^{-(-x)^2}=-x\mathrm{e}^{-x^2}.
$$

The integral exists because the Gaussian decay makes both tails absolutely integrable. On the symmetric whole line, the negative and positive contributions cancel. Thus, without evaluating an antiderivative,

$$
\int_{-\infty}^{\infty}x\mathrm{e}^{-x^2}\,\mathrm{d}x=0.
$$

> [!note] Transcription repair
> The original exercise image shows the integrand $x\mathrm{e}^{-x^2}$ in part (d). The factor $x$ and the exponent $-x^2$ are restored here from that image. The solution key gives the same odd integral and the result zero.

## Answer

**(a)** $1$.

**(b)** $\sqrt{\pi/2}$.

**(c)** $\mechanical{L}/2$.

**(d)** $0$, because the integrand is odd and integrable.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate in part (c). |
| $\mechanical{L}$ | $\unit{m}$ | Interval length | The positive upper endpoint in part (c). |
