---
title: "Power series and Taylor approximations"
catalogue_ids:
  - "7.3.3"
  - "7.3.3.1"
  - "7.3.3.2"
  - "7.3.3.3"
  - "7.3.4"
---

> [!TLDR]
> Power series converge inside a radius and require separate endpoint tests; a Taylor polynomial approximates its function only as far as its remainder bound permits.

## Definition and radius of convergence

A **power series** about the centre $c$ has the form $\sum_{n=0}^{\infty}a_n(x-c)^n$. Its coefficients $a_n$ are fixed. For a given input $x$, it is a numerical series. Read [[Tests for positive series]] and [[Uniform convergence and operations on series]] first; derivatives used later are defined in [[07.03 The derivative]] and [[07.06 Higher derivatives]].

There is a **radius of convergence** $R$, possibly zero or infinite, such that the series converges absolutely for $|x-c|<R$ and diverges for $|x-c|>R$. On any smaller closed interval $|x-c|\leq r<R$, it converges uniformly. At the boundary $|x-c|=R$, test each input separately. If $R=0$, the centre still gives the single finite value $a_0$.

When the coefficient ratio limit $L=\lim|a_{n+1}/a_n|$ exists and is positive and finite, the ratio test gives $R=1/L$. If this method fails, the general formula is $R=1/\limsup\sqrt[n]{|a_n|}$, with $1/0=\infty$ and $1/\infty=0$. A limit superior is the largest subsequential limiting size, including infinite size. It accounts for coefficients that vanish or oscillate.

## Worked example: both endpoints matter

For $\sum_{n=1}^{\infty}(x-2)^n/(n3^n)$, the ratio of magnitudes tends to $|x-2|/3$. Thus $R=3$ and the interior interval is $-1<x<5$. At $x=-1$ the series becomes $\sum(-1)^n/n$, which converges conditionally. At $x=5$ it becomes the divergent harmonic series. The convergence interval is therefore $[-1,5)$.

![[catalogue-ch07-power-interval.svg|**Fig. C.ch07.2** The same radius gives two different endpoint decisions. The series converges absolutely inside the interval, conditionally at −1, and diverges at 5.]]

The centre and radius in Fig. C.ch07.2 describe the interior. They cannot decide which endpoint circles to fill.

## Calculations with power series

Inside a common convergence interval, add series coefficient by coefficient. Multiply by the Cauchy product, justified by absolute convergence. To divide, the divisor must be nonzero near the centre; solve the resulting product coefficient equations. For example, the reciprocal of $1+x$ is $1-x+x^2-\cdots$ for $|x|<1$. Multiplying it by $1+x$ makes every positive-degree coefficient cancel.

Power series can be differentiated and integrated term by term inside the radius, with the same radius:

$$
\frac{d}{dx}\sum_{n=0}^{\infty}a_n(x-c)^n
=\sum_{n=1}^{\infty}na_n(x-c)^{n-1},
$$

$$
\int_c^x\sum_{n=0}^{\infty}a_n(t-c)^n\,dt
=\sum_{n=0}^{\infty}\frac{a_n}{n+1}(x-c)^{n+1}.
$$

The theorems apply on smaller closed intervals; they do not automatically include the endpoints. Starting from $1/(1+x)=\sum_{n=0}^{\infty}(-x)^n$, integration from $0$ to $x$ gives $\log(1+x)=\sum_{n=1}^{\infty}(-1)^{n+1}x^n/n$ for $|x|<1$.

For the endpoint $x=1$, use a finite identity rather than assume uniform convergence up to it. The remainder after $N$ terms is $(-1)^N\int_0^1 t^N/(1+t)\,dt$, whose magnitude is at most $1/(N+1)$. Hence the alternating harmonic series equals $\log2$.

## Taylor and Maclaurin series

The **Taylor polynomial** of degree $N$ at $c$ is

$$
T_N(x)=\sum_{n=0}^{N}\frac{f^{(n)}(c)}{n!}(x-c)^n.
$$

Here $f^{(n)}$ is the $n$th derivative, with $f^{(0)}=f$. If $f$ has $N+1$ continuous derivatives between $c$ and $x$, Taylor's theorem gives

$$
f(x)=T_N(x)+\frac{f^{(N+1)}(\xi)}{(N+1)!}(x-c)^{N+1}
$$

for some intermediate $\xi$. If that derivative has magnitude at most $M$, the error is at most $M|x-c|^{N+1}/(N+1)!$. A **Maclaurin** expansion has $c=0$.

A Taylor series equals $f$ only where the remainders tend to zero. For $e^x$, derivatives remain $e^x$; on $[-A,A]$ they are bounded by $e^A$. Factorial growth forces the remainder to zero, proving $e^x=\sum x^n/n!$ for every real $x$. The same reasoning gives the familiar sine and cosine expansions from their cycling derivatives.

Infinitely many derivatives alone do not prove equality. The function with $f(0)=0$ and $f(x)=e^{-1/x^2}$ for $x\ne0$ has all derivatives zero at the origin but is positive elsewhere. [[09.08 Asymptotic notation]] proves this example and explains why finite approximations can remain valid.

## Approximation formulas with stated errors

For small $h$, useful formulas are $e^h\approx1+h+h^2/2$, $\sin h\approx h-h^3/6$, and $\log(1+h)\approx h-h^2/2$. The word “small” needs a quantitative bound in a calculation. For $|h|\leq1/2$, the exponential error through degree two is at most $e^{1/2}|h|^3/6$. For $0\leq h\leq1$, the alternating logarithm series gives an error at most $h^3/3$ through degree two. The logarithm formula also requires $h>-1$ for a real value.

For example, approximate $\log(1.1)$ with three terms:

$$
0.1-\frac{0.1^2}{2}+\frac{0.1^3}{3}
=\frac{143}{1500}=0.095333\ldots.
$$

The next term is negative with magnitude $0.1^4/4=1/40000$. Thus the exact value lies between $143/1500-1/40000$ and $143/1500$. This gives a certified approximation, including its direction of error.

## Practice

1. Find the radius and endpoint behavior of $\sum_{n=1}^{\infty}x^n/n^2$.
2. Approximate $\sin(1/5)$ by $h-h^3/6$ and bound its absolute error.

## Worked answers

1. The ratio limit for the terms is $|x|$, so $R=1$. At $x=1$ the magnitude series is $\sum1/n^2$, which converges. At $x=-1$ the same magnitude series applies. Both endpoints converge absolutely, giving interval $[-1,1]$.
2. The value is $1/5-1/750=149/750$. The fourth Taylor coefficient is zero, so regard this as the degree-four Taylor polynomial. The fifth derivative has magnitude at most $1$, giving error at most $(1/5)^5/120=1/375000<0.000002667$.
