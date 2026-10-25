---
title: "Fourier coefficients of the absolute cosine"
---

> [!TLDR]
> Even symmetry removes the sine terms, and the shorter period removes the odd cosine harmonics.

**Chapter 12 · Exercise 1 · Basic level**

[[12 Fourier Series/08 Exercises|Chapter 12 exercises]]

## Question

Calculate the Fourier coefficients of $f(x)=|\cos x|$ on $[-\pi,\pi]$.

**Hint:** The function is even, so only cosine coefficients can be nonzero. Use the product formula for cosines.

## Worked solution

Use the real-series convention

$$
f(x)=\frac{a_0}{2}+\sum_{n=1}^{\infty}[a_n\cos(nx)+b_n\sin(nx)],\qquad
a_n=\frac1\pi\int_{-\pi}^{\pi}f(x)\cos(nx)\,dx.
$$

**Why use symmetry first?** The product of an even function and a sine is odd. Its integral over a symmetric interval is zero, so $b_n=0$. Also, $|\cos(x+\pi)|=|\cos x|$. Translation through $\pi$ multiplies the $n$th harmonic by $(-1)^n$, so all odd $a_n$ vanish.

The mean coefficient is

$$
a_0=\frac4\pi\int_0^{\pi/2}\cos x\,dx=\frac4\pi.
$$

For $n=2k$, reflection about $\pi/2$ gives

$$
a_{2k}=\frac4\pi\int_0^{\pi/2}\cos x\cos(2kx)\,dx.
$$

**Why use the product formula?** It replaces the product by two terms that can be integrated directly:

$$
\begin{aligned}
\int_0^{\pi/2}\cos x\cos(2kx)\,dx
&=\frac12\left[\frac{\sin((2k-1)x)}{2k-1}+\frac{\sin((2k+1)x)}{2k+1}\right]_0^{\pi/2}\\
&=\frac12\left[\frac{(-1)^{k+1}}{2k-1}+\frac{(-1)^k}{2k+1}\right]
=\frac{(-1)^{k+1}}{4k^2-1}.
\end{aligned}
$$

The coefficients decrease as $k^{-2}$. Thus the series is absolutely and uniformly convergent, and it represents this continuous periodic function at every point.

## Answer

$$
b_n=0,\qquad a_0=\frac4\pi,\qquad a_{2k}=\frac4\pi\frac{(-1)^{k+1}}{4k^2-1},\qquad a_{2k-1}=0,
$$

$$
|\cos x|=\frac2\pi+\frac4\pi\sum_{k=1}^{\infty}\frac{(-1)^{k+1}}{4k^2-1}\cos(2kx).
$$
