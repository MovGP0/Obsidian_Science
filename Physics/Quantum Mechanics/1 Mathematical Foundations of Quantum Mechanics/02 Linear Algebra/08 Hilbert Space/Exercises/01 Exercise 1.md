---
title: "Square integrability on finite and infinite domains"
---

> [!TLDR]
> A function belongs to L² when the integral of its squared magnitude is finite on its stated domain.

Chapter 8 — Hilbert Space · Exercise 1 · Basic level

Back to [[08 Hilbert Space/09 Exercises|Chapter 8 exercises]].

## Question

Determine which functions belong to the $L^2$ space on the stated domain:

**(a)** $f(x)=x^{-1/3}$ on $[0,1]$.

**(b)** $g(x)=x^{-2/3}$ on $[0,1]$.

**(c)** $h(x)=(1+x^2)^{-1}$ on $\mathbb R$.

**(d)** $k(x)=e^{-x}\sin x$ on $[0,\infty)$.

**(e)** $\ell(x)=e^{ikx}$ on the finite interval $[-L,L]$.

> [!note]
> The source introduction names only $L^2(\mathbb R)$ and $L^2([0,1])$, but parts (d) and (e) specify other domains. Use each part’s stated domain, with real $k$ and finite $L>0$ in part (e).

## Worked solution

Use the definition

$$
f\in L^2(D)\quad\Longleftrightarrow\quad\int_D|f(x)|^2\,dx<\infty.
$$

The test uses the squared magnitude, not the function itself. At a singular endpoint, first integrate with a positive cutoff and then take its limit. A value assigned at one point does not change an L² equivalence class.

### (a) The power x⁻¹ᐟ³

$$
\begin{aligned}
\int_0^1|x^{-1/3}|^2\,dx
&=\lim_{\varepsilon\downarrow0}\int_\varepsilon^1x^{-2/3}\,dx\\
&=\lim_{\varepsilon\downarrow0}[3x^{1/3}]_\varepsilon^1
=\lim_{\varepsilon\downarrow0}3(1-\varepsilon^{1/3})=3.
\end{aligned}
$$

The integral is finite. Thus $f\in L^2([0,1])$, although it is unbounded near zero.

### (b) The power x⁻²ᐟ³

$$
\begin{aligned}
\int_0^1|x^{-2/3}|^2\,dx
&=\lim_{\varepsilon\downarrow0}\int_\varepsilon^1x^{-4/3}\,dx\\
&=\lim_{\varepsilon\downarrow0}[-3x^{-1/3}]_\varepsilon^1
=\lim_{\varepsilon\downarrow0}3(\varepsilon^{-1/3}-1)=+\infty.
\end{aligned}
$$

Thus $g\notin L^2([0,1])$. In general, the integral of $x^{-p}$ near zero is finite exactly when $p<1$; here the squared function has $p=4/3$.

### (c) The reciprocal quadratic

An antiderivative follows from the substitution $x=\tan u$, or by differentiation:

$$
\int\frac{dx}{(1+x^2)^2}
=\frac{x}{2(1+x^2)}+\frac12\arctan x.
$$

Therefore,

$$
\begin{aligned}
\int_{-\infty}^{\infty}|h(x)|^2\,dx
&=\left[\frac{x}{2(1+x^2)}+\frac12\arctan x\right]_{-\infty}^{\infty}\\
&=0+\frac12\left(\frac\pi2-\left(-\frac\pi2\right)\right)=\frac\pi2.
\end{aligned}
$$

Thus $h\in L^2(\mathbb R)$.

### (d) The damped sine

The bound $0\leq\sin^2x\leq1$ already gives a finite comparison integral, $\int_0^\infty e^{-2x}\,dx=1/2$. To calculate the exact norm, use $\sin^2x=(1-\cos2x)/2$:

$$
\begin{aligned}
\int_0^\infty e^{-2x}\sin^2x\,dx
&=\frac12\int_0^\infty e^{-2x}\,dx
-\frac12\int_0^\infty e^{-2x}\cos2x\,dx,\\
\int_0^\infty e^{-2x}\cos2x\,dx
&=\left[\frac{e^{-2x}(-\cos2x+\sin2x)}4\right]_0^\infty=\frac14.
\end{aligned}
$$

Hence the squared norm is $1/4-1/8=1/8$, and $k\in L^2([0,\infty))$.

### (e) The complex exponential

For real $k$, complex conjugation changes the sign in the exponential:

$$
|e^{ikx}|^2=e^{-ikx}e^{ikx}=1,
\qquad
\int_{-L}^L|e^{ikx}|^2\,dx=\int_{-L}^L1\,dx=2L<\infty.
$$

Thus $\ell\in L^2([-L,L])$ for finite $L>0$. The same function would fail the L² test on the full real line because its squared magnitude does not decay. Here $x$, $k$, and $L$ are mathematical variables and parameters, with no physical units assigned.

## Answer

Parts **(a), (c), (d), and (e)** belong to L² on their stated domains. Part **(b)** does not. Their squared norms are respectively $3$, divergent, $\pi/2$, $1/8$, and $2L$.
