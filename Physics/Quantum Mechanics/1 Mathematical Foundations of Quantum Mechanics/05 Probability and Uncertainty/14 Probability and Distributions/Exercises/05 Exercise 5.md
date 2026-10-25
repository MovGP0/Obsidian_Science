---
title: "Position uncertainty in a stationary box state"
---

> [!TLDR]
> The position variance of a box eigenstate approaches the variance of a uniform classical distribution as the state number increases.

Chapter 14 · Exercise 5 · Intermediate level

Back to [[14 Probability and Distributions/08 Exercises|Chapter 14 exercises]] · [[14 Probability and Distributions/00 Probability and Distributions|Chapter 14 overview]].

## Question

For the particle in the box $[0,\mechanical{L}]$, in its $n$th stationary state:

**(a)** Calculate $\langle\hat x\rangle_n$ and $\langle\hat x^2\rangle_n$.

**(b)** Calculate $\mechanical{\Delta x}_n$ and show that

$$
\mechanical{\Delta x}_n\longrightarrow\frac{\mechanical{L}}{\sqrt{12}}
\qquad\text{as }n\to\infty.
$$

This is the standard deviation of a classical uniform distribution on $[0,\mechanical{L}]$, illustrating the correspondence principle. The box eigenfunctions are given in [[12 Fourier Series/06 Common Errors|Chapter 12]].

## Worked solution

### (a) First and second position moments

For an infinite box, use the normalized stationary wavefunction

$$
\signal{\psi}_n(\mechanical{x})
=\sqrt{\frac2{\mechanical{L}}}\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right),
\qquad 0\leq\mechanical{x}\leq\mechanical{L},\quad n=1,2,\ldots,
$$

and zero outside the box. The identity $2\sin^2u=1-\cos2u$ gives

$$
|\signal{\psi}_n(\mechanical{x})|^2
=\frac1{\mechanical{L}}\left[1-\cos\left(\frac{2n\pi\mechanical{x}}{\mechanical{L}}\right)\right].
$$

The density is symmetric about the center, which already implies a mean of $\mechanical{L}/2$. To verify it directly, use $q=2n\pi$ as a dimensionless integration helper and $u=\mechanical{x}/\mechanical{L}$:

$$
\langle\hat x\rangle_n
=\mechanical{L}\int_0^1u[1-\cos(qu)]\,du.
$$

An antiderivative for the oscillating term is

$$
\int u\cos(qu)\,du=\frac{u\sin(qu)}q+\frac{\cos(qu)}{q^2}.
$$

Since $\sin q=0$ and $\cos q=1$, its definite integral is zero. Thus

$$
\langle\hat x\rangle_n=\mechanical{L}\left[\frac{u^2}2\right]_0^1
=\frac{\mechanical{L}}2.
$$

For the second moment,

$$
\langle\hat x^2\rangle_n
=\mechanical{L}^2\left[\int_0^1u^2\,du-\int_0^1u^2\cos(qu)\,du\right].
$$

Integrate the second integral by parts twice:

$$
\begin{aligned}
\int_0^1u^2\cos(qu)\,du
&=\left[\frac{u^2\sin(qu)}q\right]_0^1
-\frac2q\int_0^1u\sin(qu)\,du,\\
\int_0^1u\sin(qu)\,du
&=\left[-\frac{u\cos(qu)}q+\frac{\sin(qu)}{q^2}\right]_0^1
=-\frac1q.
\end{aligned}
$$

The first boundary term is zero. Therefore the oscillating integral is $2/q^2=1/(2n^2\pi^2)$, and

$$
\langle\hat x^2\rangle_n
=\mechanical{L}^2\left(\frac13-\frac1{2n^2\pi^2}\right).
$$

### (b) Uncertainty and the classical limit

Subtract the square of the mean:

$$
\begin{aligned}
(\mechanical{\Delta x}_n)^2
&=\mechanical{L}^2\left(\frac13-\frac1{2n^2\pi^2}\right)
-\frac{\mechanical{L}^2}4\\
&=\mechanical{L}^2\left(\frac1{12}-\frac1{2n^2\pi^2}\right).
\end{aligned}
$$

The bracket is positive for all allowed $n\geq1$. Take the nonnegative square root and then the limit:

$$
\mechanical{\Delta x}_n
=\mechanical{L}\sqrt{\frac1{12}-\frac1{2n^2\pi^2}}
\longrightarrow\frac{\mechanical{L}}{\sqrt{12}}.
$$

For a classical uniform density $1/\mechanical{L}$ on the same interval,

$$
\langle x\rangle_{\mathrm{cl}}=\frac1{\mechanical{L}}\int_0^{\mechanical{L}}\mechanical{x}\,d\mechanical{x}
=\frac{\mechanical{L}}2,
\qquad
\langle x^2\rangle_{\mathrm{cl}}=\frac1{\mechanical{L}}\int_0^{\mechanical{L}}\mechanical{x}^2\,d\mechanical{x}
=\frac{\mechanical{L}^2}3.
$$

Its variance is $\mechanical{L}^2/12$, so the limits agree. The quantum density still oscillates as $n$ increases; agreement here concerns the integrated moments, not pointwise convergence of the density.

## Answer

$$
\boxed{\langle\hat x\rangle_n=\frac{\mechanical{L}}2,\quad
\langle\hat x^2\rangle_n=\frac{\mechanical{L}^2}3-\frac{\mechanical{L}^2}{2n^2\pi^2}.}
$$

$$
\boxed{\mechanical{\Delta x}_n=\mechanical{L}\sqrt{\frac1{12}-\frac1{2n^2\pi^2}}
\longrightarrow\frac{\mechanical{L}}{\sqrt{12}}.}
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$, $\langle\hat x\rangle_n$, $\langle x\rangle_{\mathrm{cl}}$ | $\unit{m}$ | Position and its means | The coordinate and the quantum and classical means. |
| $\mechanical{L}$ | $\unit{m}$ | Box length | The size of the allowed position interval. |
| $\signal{\psi}_n$ | $\unit{m^{-1/2}}$ | Box eigenfunction | The normalized position wavefunction in state n. |
| $\lvert\signal{\psi}_n\rvert^2$ | $\unit{m^{-1}}$ | Position probability density | The probability per unit length in state n. |
| $\langle\hat x^2\rangle_n$, $\langle x^2\rangle_{\mathrm{cl}}$, $(\mechanical{\Delta x}_n)^2$ | $\unit{m^2}$ | Second position moments and variance | The quantum and classical second moments and the quantum variance. |
| $\mechanical{\Delta x}_n$ | $\unit{m}$ | Position uncertainty | The standard deviation in state n. |
