---
title: "Sine expansion of a constant function"
---

> [!TLDR]
> A constant function has only odd sine coefficients; Parseval’s identity then gives the sum of the odd reciprocal squares.

Chapter 8 — Hilbert Space · Exercise 4 · Intermediate level

Back to [[08 Hilbert Space/09 Exercises|Chapter 8 exercises]].

## Question

Expand $f(x)=1$ on $[0,L]$ in the basis

$$
\left\{\phi_n(x)=\sqrt{\frac2L}\sin\left(\frac{n\pi x}{L}\right)\right\}_{n=1}^{\infty}.
$$

**(a)** Calculate the coefficients $c_n$ for $n=1,2,3,4$.

**(b)** Which coefficients are zero? Explain this through symmetry.

**(c)** Use Parseval’s identity to derive

$$
\sum_{k=0}^{\infty}\frac1{(2k+1)^2}=\frac{\pi^2}{8}.
$$

## Worked solution

### (a) Calculate the coefficients

Project the constant function onto each orthonormal sine function:

$$
\begin{aligned}
c_n
&=\langle\phi_n,f\rangle
=\sqrt{\frac2L}\int_0^L\sin\left(\frac{n\pi x}{L}\right)\,dx\\
&=\sqrt{\frac2L}\left[-\frac{L}{n\pi}\cos\left(\frac{n\pi x}{L}\right)\right]_0^L\\
&=\frac{\sqrt{2L}}{n\pi}\bigl(1-(-1)^n\bigr).
\end{aligned}
$$

The endpoint factor is two for odd $n$ and zero for even $n$. Therefore,

$$
c_1=\frac{2\sqrt{2L}}\pi,\qquad
c_2=0,\qquad
c_3=\frac{2\sqrt{2L}}{3\pi},\qquad
c_4=0.
$$

Substitution into the expansion gives

$$
1=\sum_{k=0}^{\infty}\frac{2\sqrt{2L}}{(2k+1)\pi}\phi_{2k+1}(x)
=\frac4\pi\sum_{k=0}^{\infty}\frac{\sin((2k+1)\pi x/L)}{2k+1}.
$$

The equality holds in L² and pointwise for $0<x<L$. Every partial sum is zero at the endpoints, so the displayed series is zero there. Changing values at two points does not change the L² element.

### (b) Explain the zero coefficients by symmetry

Reflection about the midpoint changes the sine function as follows:

$$
\begin{aligned}
\phi_n(L-x)
&=\sqrt{\frac2L}\sin\left(n\pi-\frac{n\pi x}{L}\right)
=(-1)^{n+1}\phi_n(x).
\end{aligned}
$$

The constant satisfies $f(L-x)=f(x)$. For even $n$, the sine changes sign under this reflection, so the contributions at $x$ and $L-x$ cancel. More explicitly, substitution $u=L-x$ in the coefficient integral gives $c_n=(-1)^{n+1}c_n$; for even $n$, this requires $c_n=-c_n$, hence $c_n=0$. For odd $n$, both functions are symmetric about the midpoint and this cancellation does not occur.

### (c) Apply Parseval’s identity

First calculate the norm of the constant function:

$$
\lVert f\rVert^2=\int_0^L|1|^2\,dx=L.
$$

Only odd indices contribute to the coefficient sum:

$$
\begin{aligned}
L
&=\sum_{n=1}^{\infty}|c_n|^2
=\sum_{k=0}^{\infty}\left|\frac{2\sqrt{2L}}{(2k+1)\pi}\right|^2\\
&=\frac{8L}{\pi^2}\sum_{k=0}^{\infty}\frac1{(2k+1)^2}.
\end{aligned}
$$

Divide by the positive factor $8L/\pi^2$ to get the required sum. The coefficients here expand an unnormalized mathematical function, so their squared magnitudes are not quantum probabilities.

## Answer

**(a)** $c_1=2\sqrt{2L}/\pi$, $c_2=0$, $c_3=2\sqrt{2L}/(3\pi)$, and $c_4=0$.

**(b)** All even coefficients vanish because their sine functions are antisymmetric about $L/2$, whereas the constant is symmetric.

**(c)** Parseval’s identity gives $\sum_{k=0}^{\infty}(2k+1)^{-2}=\pi^2/8$.
