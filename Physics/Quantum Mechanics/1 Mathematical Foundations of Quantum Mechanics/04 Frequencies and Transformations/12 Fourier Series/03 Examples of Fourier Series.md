---
title: "Examples of Fourier Series"
---

> [!TLDR]
> Parity and integration by parts give the Fourier series of the sign function, x, and x². Evaluating these series or applying Parseval’s identity yields familiar infinite sums.

## Example — The sign function

On $[-\pi,\pi]$, let $f(x)=\operatorname{sgn}(x)$, with value $+1$ for $x>0$ and $-1$ for $x<0$.

The function is odd, so $a_n=0$. Its sine coefficients are

$$
\begin{aligned}
b_n
&=\frac1\pi\int_{-\pi}^{\pi}\operatorname{sgn}(x)\sin(nx)\,dx\\
&=\frac2\pi\int_0^\pi\sin(nx)\,dx
=\frac2\pi\frac{1-\cos(n\pi)}n.
\end{aligned}
$$

Since $\cos(n\pi)=(-1)^n$,

$$
b_n=\frac{2(1-(-1)^n)}{n\pi}
=\begin{cases}0,&n\text{ even},\\\dfrac4{n\pi},&n\text{ odd}.
\end{cases}
$$

Thus, away from the jumps of the periodic extension,

$$
\operatorname{sgn}(x)
=\frac4\pi\left(\sin x+\frac{\sin3x}3+\frac{\sin5x}5+\cdots\right)
=\frac4\pi\sum_{k=0}^{\infty}\frac{\sin((2k+1)x)}{2k+1}.
$$

**Partial verification at $x=\pi/2$:**

$$
\frac4\pi\left(1-\frac13+\frac15-\frac17+\cdots\right)
=\frac4\pi\cdot\frac\pi4=1=\operatorname{sgn}(\pi/2).
$$

This uses the Leibniz formula $1-\tfrac13+\tfrac15-\cdots=\pi/4$.

## Example — The function f(x) = x

On $[-\pi,\pi]$, $f(x)=x$ is odd, so $a_n=0$. Integration by parts gives

$$
b_n=\frac1\pi\int_{-\pi}^{\pi}x\sin(nx)\,dx
=\frac2\pi\int_0^\pi x\sin(nx)\,dx.
$$

Set $u=x$ and $dv=\sin(nx)\,dx$:

$$
\begin{aligned}
\int_0^\pi x\sin(nx)\,dx
&=\left[-\frac{x\cos(nx)}n\right]_0^\pi
+\int_0^\pi\frac{\cos(nx)}n\,dx\\
&=-\frac{\pi\cos(n\pi)}n+\frac{\sin(n\pi)}{n^2}
=\frac{(-1)^{n+1}\pi}n.
\end{aligned}
$$

Therefore,

$$
b_n=\frac2\pi\frac{(-1)^{n+1}\pi}n
=\frac{2(-1)^{n+1}}n,
$$

and

$$
x=2\left(\sin x-\frac{\sin2x}2+\frac{\sin3x}3-\cdots\right)
=2\sum_{n=1}^{\infty}\frac{(-1)^{n+1}\sin(nx)}n,
\qquad-\pi<x<\pi.
$$

At the periodically identified endpoints, the series converges to zero, the mean of the one-sided limits, rather than to the assigned endpoint value of $x$.

**Apply Parseval:**

$$
\frac1\pi\int_{-\pi}^{\pi}x^2\,dx
=\sum_{n=1}^{\infty}\frac4{n^2}
\quad\Longrightarrow\quad
\frac{2\pi^2}3=4\sum_{n=1}^{\infty}\frac1{n^2}.
$$

Hence

$$
\boxed{\sum_{n=1}^{\infty}\frac1{n^2}=\frac{\pi^2}6.}
$$

This is Euler’s result for the Basel problem, dated 1734 in the source, obtained here as a consequence of the Fourier calculation.

## Example — The function f(x) = x²

The function is even, so $b_n=0$. Its constant coefficient is

$$
a_0=\frac1\pi\int_{-\pi}^{\pi}x^2\,dx=\frac{2\pi^2}3.
$$

For $n\ge1$,

$$
a_n=\frac1\pi\int_{-\pi}^{\pi}x^2\cos(nx)\,dx
=\frac2\pi\int_0^\pi x^2\cos(nx)\,dx.
$$

The first integration by parts gives

$$
\begin{aligned}
\int_0^\pi x^2\cos(nx)\,dx
&=\left[\frac{x^2\sin(nx)}n\right]_0^\pi
-\frac2n\int_0^\pi x\sin(nx)\,dx\\
&=0-\frac2n\frac{(-1)^{n+1}\pi}n
=\frac{2(-1)^n\pi}{n^2}.
\end{aligned}
$$

The remaining integral is the integration-by-parts result from the preceding example. Therefore,

$$
a_n=\frac2\pi\frac{2(-1)^n\pi}{n^2}
=\frac{4(-1)^n}{n^2},
$$

and

$$
x^2=\frac{\pi^2}3+4\sum_{n=1}^{\infty}\frac{(-1)^n\cos(nx)}{n^2}.
$$

**Check at $x=\pi$:**

$$
\pi^2=\frac{\pi^2}3+4\sum_{n=1}^{\infty}\frac1{n^2}
=\frac{\pi^2}3+4\frac{\pi^2}6=\pi^2.
$$

**Check at $x=0$:**

$$
0=\frac{\pi^2}3+4\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}
\quad\Longrightarrow\quad
\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}=-\frac{\pi^2}{12}.
$$
