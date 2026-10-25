---
title: "Parseval’s identity for a sine basis state"
---

> [!TLDR]
> The first sine basis function has one nonzero expansion coefficient, so its coefficient norm and function norm both equal one.

Chapter 8 — Hilbert Space · Exercise 2 · Basic level

Back to [[08 Hilbert Space/09 Exercises|Chapter 8 exercises]].

## Question

Verify Parseval’s identity for the functions

$$
\phi_n(x)=\sqrt{\frac2L}\sin\left(\frac{n\pi x}{L}\right)
\quad\text{on }[0,L].
$$

For $f(x)=\sqrt{2/L}\sin(\pi x/L)=\phi_1(x)$, calculate $c_n=\langle\phi_n,f\rangle$ and verify

$$
\sum_n|c_n|^2=\lVert f\rVert^2=1.
$$

## Worked solution

The coefficient is the inner product with the $n$th basis function. The basis functions are real, so conjugation does not change the integral:

$$
c_n=\frac2L\int_0^L\sin\left(\frac{n\pi x}{L}\right)\sin\left(\frac{\pi x}{L}\right)\,dx.
$$

For $n=1$, use $\sin^2u=(1-\cos2u)/2$:

$$
\begin{aligned}
c_1
&=\frac2L\left[\frac x2-\frac{L}{4\pi}\sin\left(\frac{2\pi x}{L}\right)\right]_0^L\\
&=\frac2L\frac L2=1.
\end{aligned}
$$

For an integer $n>1$, apply $2\sin a\sin b=\cos(a-b)-\cos(a+b)$:

$$
\begin{aligned}
c_n
&=\frac1L\int_0^L\left[\cos\left(\frac{(n-1)\pi x}{L}\right)-\cos\left(\frac{(n+1)\pi x}{L}\right)\right]dx\\
&=\left[\frac{\sin((n-1)\pi x/L)}{(n-1)\pi}
-\frac{\sin((n+1)\pi x/L)}{(n+1)\pi}\right]_0^L=0.
\end{aligned}
$$

Each endpoint sine is zero because its argument is an integer multiple of $\pi$. The case $n=1$ was calculated separately to avoid division by zero.

The same squared-sine integral gives

$$
\lVert f\rVert^2=\frac2L\int_0^L\sin^2\left(\frac{\pi x}{L}\right)\,dx=1.
$$

Since only $c_1$ is nonzero,

$$
\sum_{n=1}^{\infty}|c_n|^2=|c_1|^2+0+0+\cdots=1=\lVert f\rVert^2.
$$

This verifies Parseval’s identity directly. The function already equals one basis vector, so no other basis component is needed. The interval and functions in this question are mathematical objects; no physical units are assigned.

## Answer

$c_n=\delta_{n1}$. Both the coefficient sum $\sum_{n=1}^\infty|c_n|^2$ and the squared function norm equal $1$.
