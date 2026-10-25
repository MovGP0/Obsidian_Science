---
title: "Fourier series of the periodic sign function"
---

> [!TLDR]
> The periodic sign function contains only odd sine harmonics and approaches zero at each jump.

**Chapter 12 · Exercise 2 · Basic level**

[[12 Fourier Series/08 Exercises|Chapter 12 exercises]]

## Question

Find the Fourier series of

$$
f(x)=\begin{cases}1,&0<x<\pi,\\-1,&-\pi<x<0.\end{cases}
$$

What does the series approach at $x=0$ and $x=\pi$? Compare it with the sign-function example.

## Worked solution

**Why use odd symmetry?** Since $f(-x)=-f(x)$, every cosine coefficient, including the mean, is zero. The sine coefficient is

$$
\begin{aligned}
b_n&=\frac2\pi\int_0^\pi\sin(nx)\,dx
=\frac2{n\pi}[1-\cos(n\pi)]\\
&=\begin{cases}4/(n\pi),&n\text{ odd},\\0,&n\text{ even}.\end{cases}
\end{aligned}
$$

Insert these coefficients into the real Fourier series:

$$
f(x)\sim\frac4\pi\left(\sin x+\frac{\sin3x}{3}+\frac{\sin5x}{5}+\cdots\right).
$$

At a continuity point the series gives the function value. At a jump it gives the mean of the two one-sided limits. At zero these limits are $-1$ and $1$, so the sum is zero. The periodic extension has left limit $1$ and right limit $-1$ at $\pi$, so its sum is also zero there. Each sine term is itself zero at both points, which gives a direct check.

This is exactly the sign-function example on $(-\pi,\pi)$. Periodic continuation adds jumps at all integer multiples of $\pi$. An assigned value at a jump does not change any Fourier coefficient.

## Answer

$$
f(x)\sim\frac4\pi\sum_{k=0}^{\infty}\frac{\sin((2k+1)x)}{2k+1}.
$$

The sum is $f(x)$ at continuity points and zero at $x=0$ and $x=\pi$. It is the periodic sign-function series.
