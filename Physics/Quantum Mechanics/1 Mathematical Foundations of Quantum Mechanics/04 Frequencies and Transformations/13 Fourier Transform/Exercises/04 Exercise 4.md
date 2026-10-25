---
title: "A decaying Green function from a Fourier transform"
---

> [!TLDR]
> The Fourier transform gives the unique solution that decays on both sides of a point source.

Chapter 13 · Exercise 4 · Intermediate level

Back to [[13 Fourier Transform/08 Exercises|Chapter 13 exercises]].

## Question

Solve

$$
f''-k_0^2f=-\delta(x)
$$

with the Fourier transform. Use $k_0>0$ and seek the solution that decays at both infinities.

**(a)** Transform both sides and solve algebraically for $\hat f(k)$.

**(b)** Apply the inverse transform to obtain

$$
f(x)=\frac1{2k_0}e^{-k_0|x|}.
$$

The decay condition and positive parameter make explicit the Green-function solution requested by the source.

## Worked solution

### (a) Change the differential equation into an algebraic equation

Use $\hat f(k)=(2\pi)^{-1/2}\int f(x)e^{-ikx}dx$. Distributional differentiation gives $\mathcal F[f'']=-k^2\hat f$, and the delta distribution gives $\mathcal F[\delta]=(2\pi)^{-1/2}$. Thus

$$
-(k^2+k_0^2)\hat f(k)=-\frac1{\sqrt{2\pi}},
\qquad
\hat f(k)=\frac1{\sqrt{2\pi}(k^2+k_0^2)}.
$$

The positive value of $k_0$ keeps the denominator nonzero on the real axis.

### (b) Invert the transform and check the point source

Exercise 1 gives $\mathcal F[e^{-a|x|}]=\sqrt{2/\pi}\,a/(a^2+k^2)$. With $a=k_0$,

$$
\mathcal F\left[\frac{e^{-k_0|x|}}{2k_0}\right]
=\frac1{\sqrt{2\pi}(k^2+k_0^2)}.
$$

Therefore $f(x)=e^{-k_0|x|}/(2k_0)$. To check the delta coefficient, differentiate on each open half-line:

$$
f'(0^+)=-\frac12,\qquad f'(0^-)=\frac12,
\qquad f'(0^+)-f'(0^-)=-1.
$$

The function is continuous, so its second distributional derivative contains no $\delta'$ term. Its derivative has a jump of $-1$, which produces $-\delta(x)$. Away from zero, $f''=k_0^2f$. These two facts verify the entire equation.

For uniqueness, subtract two decaying solutions. Their difference solves the homogeneous equation on the whole line, including zero, and has the form $Ae^{k_0x}+Be^{-k_0x}$. Decay at both ends forces $A=B=0$. No physical units are assigned to these mathematical variables.

## Answer

$$
\boxed{\hat f(k)=\frac1{\sqrt{2\pi}(k^2+k_0^2)},\qquad
f(x)=\frac1{2k_0}e^{-k_0|x|}.}
$$
