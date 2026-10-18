---
title: "Power-series and Fourier-series tables"
catalogue_ids:
  - "21.5"
  - "21.6"
---

> [!TLDR]
> A series table gives coefficients and a domain of convergence; power series approximate near a point, while Fourier series resolve periodic functions into harmonics.

## Important series expansions

An infinite series is a limit of finite sums. A power series in $x$ has the form $\sum_{n=0}^{\infty}a_nx^n$. Equality to a function requires convergence, not merely a recognizable pattern. Begin with [[09.05 Power series]] and [[09.06 Taylor and Maclaurin expansions]] if the notation is new. In the following table, angles are in radians.

| Function | Expansion about zero | Validity |
| --- | --- | --- |
| $(1-x)^{-1}$ | $\sum_{n=0}^{\infty}x^n$ | $\lvert x\rvert <1$ |
| $e^x$ | $\sum_{n=0}^{\infty}x^n/n!$ | All real $x$ |
| $\sin x$ | $\sum_{n=0}^{\infty}(-1)^nx^{2n+1}/(2n+1)!$ | All real $x$ |
| $\cos x$ | $\sum_{n=0}^{\infty}(-1)^nx^{2n}/(2n)!$ | All real $x$ |
| $\ln(1+x)$ | $\sum_{n=1}^{\infty}(-1)^{n+1}x^n/n$ | $-1<x\le1$ |
| $(1+x)^a$ | $\sum_{n=0}^{\infty}\binom an x^n$ | $\lvert x\rvert <1$ for general real $a$ |

Here $\binom a0=1$ and $\binom an=a(a-1)\cdots(a-n+1)/n!$. For a nonnegative integer $a$, the binomial expansion ends and is valid for all $x$. Do not infer endpoint convergence from the open-interval row.

The geometric row follows from $1+x+\cdots+x^N=(1-x^{N+1})/(1-x)$ and $x^{N+1}\to0$ when $|x|<1$. Integrating it term by term on compact subintervals gives $-\ln(1-x)=\sum_{n\ge1}x^n/n$. This explains why an integral can generate a new table row, but the justification is local convergence within the radius.

## Worked example: use an error bound

To estimate $\ln(1.2)$, use $x=0.2$. Four terms give

$$
0.2-\frac{0.2^2}{2}+\frac{0.2^3}{3}-\frac{0.2^4}{4}
=0.1822666667.
$$

The alternating terms decrease in magnitude. The error is at most the next term, $0.2^5/5=0.000064$. Thus the four-term value is useful to about four decimal places, not to every digit displayed by the calculator. The next term is positive, so the exact value is greater than this partial sum.

## Fourier expansions and normalization

For a function extended with period $2\pi$, use

$$
f(x)\sim\frac{a_0}{2}+\sum_{n=1}^{\infty}(a_n\cos nx+b_n\sin nx),
$$

where $a_n=\pi^{-1}\int_{-\pi}^{\pi}f(x)\cos nx\,dx$ and $b_n=\pi^{-1}\int_{-\pi}^{\pi}f(x)\sin nx\,dx$. The symbol $\sim$ records the coefficient expansion; convergence must still be checked. For a piecewise continuously differentiable periodic function, the series converges at a point to the mean of its left and right limits. At a continuous point, that is the function value. See [[16.06 Convergence]].

| Function on the stated interval, then periodically extended | Fourier expansion |
| --- | --- |
| $f(x)=x$, $-\pi<x<\pi$ | $2\sum_{n\ge1}(-1)^{n+1}\sin(nx)/n$ |
| $f(x)=x^2$, $-\pi\le x\le\pi$ | $\pi^2/3+4\sum_{n\ge1}(-1)^n\cos(nx)/n^2$ |
| $f(x)=1$ for $0<x<\pi$ and $-1$ for $-\pi<x<0$ | $(4/\pi)\sum_{n\ge1,\ n\text{ odd}}\sin(nx)/n$ |

To check the first row, oddness gives $a_n=0$. Integration by parts gives

$$
b_n=\frac2\pi\int_0^\pi x\sin nx\,dx
=\frac2\pi\left[-\frac{x\cos nx}{n}+\frac{\sin nx}{n^2}\right]_0^\pi
=\frac{2(-1)^{n+1}}n.
$$

At $x=\pi$, the periodic sawtooth jumps from $\pi$ to $-\pi$. Its series value is 0. Substitution of $x=\pi$ into every sine term confirms this. The table is consistent because endpoint behavior was stated.

## Common mistakes

Do not use a power series outside its convergence interval. Do not omit $a_0/2$ when a table uses that convention. A Fourier harmonic index $n$ is an integer, not the original input variable. For a period $2L$, replace $nx$ by $n\pi x/L$ and replace coefficient factors $1/\pi$ by $1/L$. A table written for one interval cannot be transferred to another without rescaling.

## Practice

1. Estimate $\cos0.1$ with terms through $x^4$, and bound the error by the next alternating term.
2. Use the sawtooth row at $x=\pi/2$ to find $1-1/3+1/5-1/7+\cdots$.

> [!example]- Worked answers
> 1. The estimate is $1-0.1^2/2+0.1^4/24=0.9950041667$. The next magnitude is $0.1^6/720\approx1.389\times10^{-9}$.
> 2. The sine terms are $1,0,-1,0,1,\ldots$. Thus $\pi/2=2(1-1/3+1/5-\cdots)$, and the sum is $\pi/4$. This point is inside a smooth part of the periodic function, so convergence gives equality.
