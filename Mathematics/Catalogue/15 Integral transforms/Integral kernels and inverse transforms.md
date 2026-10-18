---
title: "Integral kernels and inverse transforms"
catalogue_ids:
  - "15.1"
  - "15.1.1"
  - "15.1.2"
  - "15.1.3"
  - "15.1.4"
  - "15.1.5"
  - "15.1.6"
---

> [!TLDR]
> An integral transform combines a function with a kernel; the kernel and allowed function class determine what can be recovered.

## General definition of integral transforms

An integral is a weighted sum in the limit of small intervals; see [[08.01 Definite integrals]]. An **integral transform** is a rule of the form

$$
F(s)=T[f](s)=\int_D K(s,t)f(t)\,dt.
$$

The input $f$ is the original function. The fixed function $K$ is the **kernel**, and $D$ is the integration domain. For each selected $s$, integrate over $t$. The results, as $s$ varies, form the output function $F$. The letter $s$ need not be real: in the Laplace transform it is complex. The notation $T[f]$ means that $T$ acts on a whole function.

The definition is incomplete unless the integral exists in a stated sense. A simple sufficient condition is absolute convergence: $\int_D|K(s,t)f(t)|\,dt<\infty$. When $D$ is unbounded, this is an improper integral or its more general integration counterpart. It can exist for some $s$ and fail for others. That set of allowed parameters is part of the transform data.

## Special integral transforms

Different kernels ask different questions. The one-sided Laplace kernel is $e^{-st}$ on $[0,\infty)$. It compares $f$ with exponential weights. The Fourier kernel is $e^{-ikt}$ on $\mathbb R$ and compares $f$ with oscillations. A cosine transform uses $\cos(kt)$ on $[0,\infty)$; its even extension explains why it is useful for reflection-symmetric problems. A sine transform uses $\sin(kt)$ and is related to odd extension.

For positive inputs, the Mellin kernel $t^{s-1}$ gives $M[f](s)=\int_0^\infty f(t)t^{s-1}\,dt$. With $f(t)=e^{-t}$ this defines $\Gamma(s)$ for $\operatorname{Re}s>0$. The power weight is useful for scaling: substituting $u=at$ gives $M[f(at)](s)=a^{-s}M[f](s)$ for $a>0$, wherever the integral converges. This example shows why kernel choice matters; this chapter develops Laplace and Fourier methods in greater detail.

## Linearity of integral transforms

If the same kernel and domain are used and the required integrals exist, then

$$
T[af+bg]=aT[f]+bT[g].
$$

Here $a,b$ are fixed real or complex numbers. Pull them through the integral and split the sum to prove the formula. Linearity does not mean $T[fg]=T[f]T[g]$. For instance, on $[0,1]$ with kernel $1$, $T[t]^2=(1/2)^2=1/4$, whereas $T[t^2]=1/3$.

## Inverse transforms

An inverse rule recovers $f$ from all the required values of $F$. Not every integral rule has an inverse. The constant kernel $K(s,t)=1$ on $[0,1]$ always returns the same scalar integral for every $s$. Both $f(t)=1$ and $g(t)=2t$ give $F(s)=1$. It loses their difference.

By contrast, a suitable Fourier or Laplace transform determines its input up to changes on sets of measure zero. For piecewise continuous functions, changing a value at one isolated point does not change an integral. At a jump, an inversion formula can return the average of the two one-sided limits. This is not a failure to recover the function in the integral sense. It is a reminder that point values need a convention.

## Functions of several variables

For a function of two real variables, define

$$
\widehat f(k,\ell)=\int_{\mathbb R}\int_{\mathbb R}
f(x,y)e^{-i(kx+\ell y)}\,dx\,dy.
$$

If the absolute value is integrable, the order of integration can be interchanged. For a separable input $f(x,y)=g(x)h(y)$, this gives $\widehat f(k,\ell)=\widehat g(k)\widehat h(\ell)$. Each variable contributes its own inverse factor $1/(2\pi)$, so two-dimensional inversion uses $1/(2\pi)^2$. Without absolute convergence, changing the integration order requires a separate justification.

## Worked example and applications

Take the Laplace kernel and $f(t)=3+2t$ for $t\geq0$. For $\operatorname{Re}s>0$,

$$
T[f](s)=3\int_0^\infty e^{-st}\,dt+2\int_0^\infty te^{-st}\,dt
=\frac3s+\frac2{s^2}.
$$

The first integral follows from the exponential antiderivative. Integrating the second by parts leaves $1/s$ times the first. Exponential decay makes the boundary term vanish. From the two known pairs, the inverse returns $3+2t$.

The practical gain appears when derivatives or shifted values have simple transform rules. A differential equation can become an algebraic equation. An integral involving $f(t-u)g(u)$ can become a product. A local transform can separate a coarse average from a sharp change. None of these gains removes the need to check convergence or the original problem's initial and boundary values.

## Practice

1. For $T[f](s)=\int_0^1e^{-st}f(t)\,dt$, find $T[1](s)$, including $s=0$.
2. If $g(x)=e^{-|x|}$ has Fourier transform $2/(1+k^2)$, find the two-dimensional transform of $g(x)g(y)$.

> [!example]- Worked answers
> 1. For $s\ne0$, integrate to obtain $(1-e^{-s})/s$. At $s=0$, the integral is $1$; the quotient has the same limit. A denominator zero in this representation is a removable singularity.
> 2. Absolute integrability permits separation. The result is $4/[(1+k^2)(1+\ell^2)]$. Two independent transform variables are needed.

## Reference

[NIST DLMF, Integral transforms](https://dlmf.nist.gov/1.14) gives definitions and inversion hypotheses. Its Fourier convention differs from the one fixed in this chapter, so normalization factors must be converted.
