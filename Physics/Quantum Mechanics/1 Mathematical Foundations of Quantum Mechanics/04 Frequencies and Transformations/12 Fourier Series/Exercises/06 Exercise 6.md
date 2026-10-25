---
title: "Parseval and the Basel and Leibniz sums"
---

> [!TLDR]
> The Parseval relation gives the reciprocal-square sum, and evaluation at the interval midpoint gives the alternating odd reciprocal sum.

**Chapter 12 · Exercise 6 · Intermediate level**

[[12 Fourier Series/08 Exercises|Chapter 12 exercises]]

## Question

Use

$$
x=2\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}n\sin(nx)
\quad\text{for }0<x<\pi.
$$

**(a)** The source asks you to verify

$$
\frac1\pi\int_0^\pi x^2\,dx=\sum_{n=1}^{\infty}\frac4{n^2}
$$

and derive $\sum_{n=1}^{\infty}1/n^2=\pi^2/6$.

> [!note]
> The printed integral prefactor is incorrect. On $[0,\pi]$, the sine-series Parseval relation uses **$2/\pi$**, rather than $1/\pi$. The full-interval form with $1/\pi$ integrates over $[-\pi,\pi]$.

**(b)** Substitute $x=\pi/2$ into the series to derive the Leibniz formula

$$
\frac\pi4=1-\frac13+\frac15-\cdots.
$$

## Worked solution

### (a) Apply the correct Parseval normalization

For a sine series $f(x)=\sum_{n\geq1}b_n\sin(nx)$ on $[0,\pi]$, orthogonality gives

$$
\int_0^\pi\sin(nx)\sin(mx)\,dx=\frac\pi2\delta_{mn}.
$$

**Why does the factor matter?** This basis has squared norm $\pi/2$, so the coefficient sum equals the integral multiplied by $2/\pi$:

$$
\frac2\pi\int_0^\pi|f(x)|^2dx=\sum_{n=1}^{\infty}|b_n|^2.
$$

Here $b_n=2(-1)^{n+1}/n$. Consequently,

$$
\frac2\pi\left[\frac{x^3}{3}\right]_0^\pi
=\frac{2\pi^2}{3}=4\sum_{n=1}^{\infty}\frac1{n^2},
\qquad
\sum_{n=1}^{\infty}\frac1{n^2}=\frac{\pi^2}{6}.
$$

The printed $1/\pi$ on the half interval would give $\pi^2/12$ and is incorrect. On the full symmetric interval, evenness of $x^2$ instead gives the equivalent valid form

$$
\frac1\pi\int_{-\pi}^{\pi}x^2dx=4\sum_{n=1}^{\infty}\frac1{n^2}.
$$

### (b) Evaluate the series at the midpoint

The function is continuous at $x=\pi/2$, so its Fourier series converges to $\pi/2$ there. **Why choose this point?** Even sine harmonics vanish and odd sine harmonics alternate between $1$ and $-1$:

$$
\sin(2k\pi/2)=0,\qquad \sin((2k+1)\pi/2)=(-1)^k.
$$

For odd $n$, the other sign factor $(-1)^{n+1}$ is one. Therefore

$$
\frac\pi2=2\sum_{k=0}^{\infty}\frac{(-1)^k}{2k+1}.
$$

Division by two gives the Leibniz formula. The alternating-series test confirms convergence of this numerical series.

## Answer

**(a)** The correct half-interval prefactor is $2/\pi$, and $\sum_{n\geq1}n^{-2}=\pi^2/6$.

**(b)** $\pi/4=\sum_{k=0}^{\infty}(-1)^k/(2k+1)=1-1/3+1/5-\cdots$.
