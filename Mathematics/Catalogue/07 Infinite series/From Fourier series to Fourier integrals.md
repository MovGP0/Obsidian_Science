---
title: "From Fourier series to Fourier integrals"
catalogue_ids:
  - "7.4.4"
---

> [!TLDR]
> Increasing a period makes the Fourier mode spacing smaller; the Fourier transform replaces the discrete sum by an integral with a checked normalization.

## Start with a nonperiodic function

Read [[Fourier coefficients and convergence]], the complex form in [[Symmetry and numerical Fourier coefficients]], and [[08.07 Improper integrals]]. A Fourier series uses a fixed period and integer-indexed modes. A function on the whole real line need not repeat. We then introduce the **Fourier transform** with convention

$$
\widehat f(k)=\int_{-\infty}^{\infty}f(x)e^{-ikx}\,dx.
$$

Assume first that $\int_{-\infty}^{\infty}|f(x)|dx<\infty$, called absolute integrability. Since $|e^{-ikx}|=1$ for real $k$, the defining integral exists absolutely for every $k$. In particular, $|\widehat f(k)|\leq\int|f(x)|dx$. The variable $k$ is simply the real parameter multiplying $x$ in the exponential; this lesson assigns no physical units to either variable.

## Why a series has the shape of a Riemann sum

Restrict $f$ to $[-T/2,T/2]$ and repeat this segment with period $T$. Define

$$
\widehat f_T(k)=\int_{-T/2}^{T/2}f(x)e^{-ikx}dx,
\qquad k_n=\frac{2\pi n}{T},\qquad \Delta k=\frac{2\pi}{T}.
$$

Its complex Fourier coefficient is $c_n=\widehat f_T(k_n)/T$. Therefore its symmetric finite series is exactly

$$
\sum_{n=-N}^{N}c_ne^{ik_nx}
=\frac1{2\pi}\sum_{n=-N}^{N}\widehat f_T(k_n)e^{ik_nx}\Delta k.
$$

As $T$ grows, the mode spacing decreases. The expression on the right has the form of a Riemann sum for an integral over $k$. This explains the factor $1/(2\pi)$ and why a continuous parameter replaces the integer list. It does not prove that every double limit and infinite interchange is valid. A rigorous inversion theorem supplies the conditions.

## Fourier integral and inversion

A useful sufficient version is: if $f$ and $\widehat f$ are both absolutely integrable, the inverse integral defines a continuous representative and

$$
f(x)=\frac1{2\pi}\int_{-\infty}^{\infty}\widehat f(k)e^{ikx}\,dk
$$

at every continuity point of $f$, and almost everywhere in general. “Almost everywhere” allows an exceptional set of zero length in the measure-theoretic sense. For the continuous example below there is no exception. See MIT's [Fourier analysis notes, Chapter 6](https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/dd43d0af438b8b2aa288022b0064c550_MIT18_330S12_Chapter6.pdf) for the transform convention, and [[16.10 The nonperiodic extension]] for the same result in the foundation course.

This theorem is sufficient rather than necessary. Some functions require conditionally convergent inverse integrals or a mean-square formulation. Do not use the absolute-inversion theorem without checking both integrability assumptions. The forward integral has a negative exponent; the inverse has a positive exponent. Other conventions distribute the factor $2\pi$ differently.

## Worked example: exponential decay

Let $f(x)=e^{-|x|}$. Its absolute integral is $2$. Split at zero and substitute $u=-x$ in the negative half:

$$
\widehat f(k)=\int_0^{\infty}e^{-(1+ik)x}dx
+\int_0^{\infty}e^{-(1-ik)x}dx
=\frac1{1+ik}+\frac1{1-ik}=\frac2{1+k^2}.
$$

For either complex denominator, the real part is $1>0$, so the exponential boundary value at infinity is zero. This justifies the antiderivative evaluation. The transform is also absolutely integrable, with integral $2\pi$. The original function is continuous, so inversion holds for every $x$.

At $x=0$, it predicts

$$
1=\frac1{2\pi}\int_{-\infty}^{\infty}\frac2{1+k^2}dk
=\frac1\pi[\arctan k]_{-\infty}^{\infty}=1.
$$

This independent integral checks the normalization. Evenness explains why the imaginary odd part cancels. More generally, for real even $f$, the transform is real and even and can be written $2\int_0^{\infty}f(x)\cos(kx)dx$ whenever the original integral exists absolutely.

## Limitation: a rectangular example

Let $g(x)=1$ for $|x|<a$ and $0$ for $|x|>a$, with $a>0$. It is absolutely integrable. For $k\ne0$, direct integration gives $\widehat g(k)=2\sin(ak)/k$. At $k=0$, the integral is $2a$, equal to the formula's continuous limit. This transform is not absolutely integrable: the $1/|k|$ envelope and recurring nonzero sine intervals give a divergent magnitude integral. Thus the sufficient inversion theorem above does not apply. Recovering midpoint values at its jumps needs another theorem about a specified improper integral limit.

Likewise, a nonzero periodic constant is not absolutely integrable on the real line. Its Fourier series is elementary, but it does not have a transform under this absolute-integral definition. Broader transform theories exist; they must not be silently substituted into the stated definition.

## Practice

1. Compute the transform of $e^{-a|x|}$ for $a>0$ and verify the inverse normalization at zero.
2. If $g(x)=f(x-b)$ for absolutely integrable $f$, derive $\widehat g$ in terms of $\widehat f$.

## Worked answers

1. Splitting the two half-lines gives $1/(a+ik)+1/(a-ik)=2a/(a^2+k^2)$. Its inverse value at zero is $(1/(2\pi))\int2a/(a^2+k^2)dk=1$, using the antiderivative $2\arctan(k/a)$ and its endpoint difference $2\pi$.
2. Substitute $u=x-b$. Then $x=u+b$ and $\widehat g(k)=\int f(u)e^{-ik(u+b)}du=e^{-ikb}\widehat f(k)$. The factor has modulus one, so translation preserves the transform magnitude. This calculation uses an absolutely convergent change of variable.
