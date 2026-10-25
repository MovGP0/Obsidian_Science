---
title: "Transforms of exponential and modulated Gaussian functions"
---

> [!TLDR]
> Split an absolute-value exponential at zero, differentiate a Gaussian transform, and shift its spectrum.

Chapter 13 · Exercise 1 · Basic level

Back to [[13 Fourier Transform/08 Exercises|Chapter 13 exercises]].

## Question

Calculate these Fourier transforms:

**(a)** $f(x)=e^{-a|x|}$ with $a>0$.

**(b)** $g(x)=xe^{-x^2/2}$.

**Hint:** Use the derivative property.

**(c)** $h(x)=e^{-x^2/2}\cos(k_0x)$.

**Hint:** Write the cosine using Euler’s formula.

## Worked solution

Use the symmetric convention

$$
\hat f(k)=\frac1{\sqrt{2\pi}}\int_{\mathbb R}f(x)e^{-ikx}\,dx,
\qquad f(x)=\frac1{\sqrt{2\pi}}\int_{\mathbb R}\hat f(k)e^{ikx}\,dk.
$$

Here the functions are mathematical examples. Their coordinates and parameters have no assigned physical units.

### (a) Split the integral at the cusp

The absolute value has a different expression on each side of zero. Thus

$$
\begin{aligned}
\hat f(k)&=\frac1{\sqrt{2\pi}}\left[\int_{-\infty}^0e^{(a-ik)x}\,dx+\int_0^\infty e^{-(a+ik)x}\,dx\right]\\
&=\frac1{\sqrt{2\pi}}\left(\frac1{a-ik}+\frac1{a+ik}\right)
=\sqrt{\frac2\pi}\frac{a}{a^2+k^2}.
\end{aligned}
$$

The condition $a>0$ makes both integrals converge. The result is real and even, as expected for a real even input.

### (b) Use multiplication and differentiation

Let $u(x)=e^{-x^2/2}$. The normalized Gaussian integral gives $\hat u(k)=e^{-k^2/2}$. Differentiate under the integral:

$$
\frac{d\hat u}{dk}=\frac1{\sqrt{2\pi}}\int(-ix)u(x)e^{-ikx}\,dx=-i\hat g(k).
$$

Therefore

$$
\hat g(k)=i\frac{d\hat u}{dk}=-ik e^{-k^2/2}.
$$

This sign also follows from $u'=-xu$ and $\mathcal F[u']=ik\hat u$.

### (c) Resolve the cosine into two modulations

Euler's formula gives

$$
h(x)=\frac12u(x)e^{ik_0x}+\frac12u(x)e^{-ik_0x}.
$$

Each exponential shifts the spectral argument because $e^{ik_0x}e^{-ikx}=e^{-i(k-k_0)x}$. Hence

$$
\hat h(k)=\frac12\left[e^{-(k-k_0)^2/2}+e^{-(k+k_0)^2/2}\right].
$$

## Answer

The three transforms are $\sqrt{2/\pi}\,a/(a^2+k^2)$, $-ik e^{-k^2/2}$, and the half-sum of the two Gaussians centered at $\pm k_0$.
