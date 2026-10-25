---
title: "Orthonormal Bases"
---

> [!TLDR]
> An orthonormal basis expands every vector through its inner-product coefficients, with convergence in norm. Parseval’s identity equates the squared norm with the sum of squared coefficient magnitudes.

> [!definition] Definition 8.3 | Orthonormal basis
> A sequence $\{\phi_n\}_{n=0}^{\infty}$ in $\mathcal H$ is an **orthonormal basis**, or a complete orthonormal system, if:
>
> 1. $\langle\phi_m,\phi_n\rangle=\delta_{mn}$ (**orthonormality**).
> 2. Every $f\in\mathcal H$ has the expansion $f=\sum_{n=0}^{\infty}c_n\phi_n$, where $c_n=\langle\phi_n,f\rangle$ (**completeness**).
>
> The series converges in norm:
>
> $$
> \left\lVert f-\sum_{n=0}^N c_n\phi_n\right\rVert\longrightarrow0
> \qquad\text{as }N\longrightarrow\infty.
> $$

The countable form used here applies to separable Hilbert spaces, including $L^2(\mathbb R)$. The **Parseval identity** is

$$
\boxed{\lVert f\rVert^2=\sum_{n=0}^{\infty}|c_n|^2.}
$$

For a normalized quantum state, $\lVert\psi\rVert=1$, so

$$
\sum_n|c_n|^2=1.
$$

The probabilities add to one.

## Example — Fourier basis in L²([−π, π])

The functions

$$
\phi_n(x)=\frac1{\sqrt{2\pi}}e^{inx},
\qquad n\in\mathbb Z,
$$

form an orthonormal basis of $L^2([-\pi,\pi])$.

**Orthonormality:**

$$
\langle\phi_m,\phi_n\rangle
=\frac1{2\pi}\int_{-\pi}^{\pi}e^{-imx}e^{inx}\,dx
=\frac1{2\pi}\int_{-\pi}^{\pi}e^{i(n-m)x}\,dx.
$$

For $n=m$,

$$
\frac1{2\pi}\int_{-\pi}^{\pi}1\,dx=1.
$$

For $n\ne m$,

$$
\begin{aligned}
\langle\phi_m,\phi_n\rangle
&=\frac1{2\pi}\frac{e^{i(n-m)\pi}-e^{-i(n-m)\pi}}{i(n-m)}\\
&=\frac1{2\pi}\frac{2\sin((n-m)\pi)}{n-m}\\
&=\frac{\sin((n-m)\pi)}{\pi(n-m)}=0.
\end{aligned}
$$

Here $n-m$ is a nonzero integer, and $\sin(k\pi)=0$ for every integer $k$.

**Completeness:** Every $f\in L^2([-\pi,\pi])$ has a Fourier expansion

$$
f(x)=\sum_{n=-\infty}^{+\infty}c_n\phi_n(x),
\qquad
c_n=\langle\phi_n,f\rangle
=\frac1{\sqrt{2\pi}}\int_{-\pi}^{\pi}f(x)e^{-inx}\,dx.
$$

This is the Fourier series, studied in detail in Chapter 12. The equality is in the $L^2$ norm; it does not by itself assert convergence at every point.

## Example — Basis for the particle in a box

The functions

$$
\phi_n(\mechanical{x})
=\sqrt{\frac2{\mechanical{L}}}\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right),
\qquad n=1,2,3,\ldots,
$$

form an orthonormal basis of $L^2([0,\mechanical{L}])$. Their orthonormality was verified in Chapter 2.

Every state in this space has the expansion

$$
\signal{\psi}(\mechanical{x})
=\sum_{n=1}^{\infty}c_n\phi_n(\mechanical{x}),
$$

with coefficients

$$
c_n=\langle\phi_n,\psi\rangle
=\sqrt{\frac2{\mechanical{L}}}\int_0^{\mechanical{L}}
\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)
\signal{\psi}(\mechanical{x})\,d\mechanical{x}.
$$

For a normalized state, $|c_n|^2$ is the probability of finding the system in its $n$th stationary state.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The particle coordinate inside the box. |
| $\mechanical{L}$ | $\unit{m}$ | Box length | The length of the interval that confines the particle. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Wavefunction | The one-dimensional position probability amplitude. |
| $\phi_n$ | $\unit{m^{-1/2}}$ | Stationary-state wavefunction | The normalized sine wavefunction for the box. |
| $c_n$ | $1$ | Probability amplitude | The coefficient of the $n$th stationary state. |
