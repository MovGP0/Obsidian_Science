---
title: "A quadratic Fourier series and the fourth-power sum"
---

> [!TLDR]
> The Fourier coefficients of a quadratic function give the sum of the reciprocal fourth powers through the Parseval relation.

**Chapter 12 · Exercise 4 · Intermediate level**

[[12 Fourier Series/08 Exercises|Chapter 12 exercises]]

## Question

Find the Fourier series of $f(x)=x^2-\pi^2/3$ on $[-\pi,\pi]$. The subtraction removes the mean, so $a_0=0$.

Use Parseval’s relation to find $\sum_{n=1}^{\infty}1/n^4$.

## Worked solution

The function is even, so $b_n=0$. Direct integration confirms that the mean is zero:

$$
a_0=\frac2\pi\int_0^\pi\left(x^2-\frac{\pi^2}{3}\right)dx
=\frac2\pi\left(\frac{\pi^3}{3}-\frac{\pi^3}{3}\right)=0.
$$

The constant subtraction has zero overlap with every nonconstant cosine. Therefore

$$
a_n=\frac2\pi\int_0^\pi x^2\cos(nx)\,dx.
$$

**Why integrate by parts twice?** Each differentiation lowers the polynomial degree. The sine endpoint terms then vanish:

$$
\begin{aligned}
\int_0^\pi x^2\cos(nx)\,dx
&=\left[\frac{x^2\sin(nx)}n\right]_0^\pi-\frac2n\int_0^\pi x\sin(nx)\,dx,\\
\int_0^\pi x\sin(nx)\,dx
&=\left[-\frac{x\cos(nx)}n+\frac{\sin(nx)}{n^2}\right]_0^\pi
=-\frac{\pi(-1)^n}{n}.
\end{aligned}
$$

Thus $a_n=4(-1)^n/n^2$. Use the real-series Parseval convention with scaled integral norm:

$$
\frac1\pi\int_{-\pi}^{\pi}|f(x)|^2dx=\frac{a_0^2}{2}+\sum_{n=1}^{\infty}(a_n^2+b_n^2).
$$

**Why use Parseval?** Squaring the $n^{-2}$ coefficient gives the requested $n^{-4}$ sum. Calculate the integral explicitly:

$$
\begin{aligned}
\frac2\pi\int_0^\pi\left(x^2-\frac{\pi^2}{3}\right)^2dx
&=\frac2\pi\left[\frac{x^5}{5}-\frac{2\pi^2x^3}{9}+\frac{\pi^4x}{9}\right]_0^\pi\\
&=2\pi^4\left(\frac15-\frac29+\frac19\right)=\frac{8\pi^4}{45}.
\end{aligned}
$$

Equating this to $16\sum_{n\geq1}n^{-4}$ gives the result below. The $n^{-2}$ coefficients also imply uniform convergence of the Fourier series of $f$.

## Answer

$$
x^2-\frac{\pi^2}{3}=4\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}\cos(nx),
\qquad \sum_{n=1}^{\infty}\frac1{n^4}=\frac{\pi^4}{90}.
$$
