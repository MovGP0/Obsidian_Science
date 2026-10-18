---
title: "Asymptotic expansions"
catalogue_ids:
  - "7.3.5"
  - "7.3.5.1"
  - "7.3.5.2"
---

> [!TLDR]
> An asymptotic expansion controls every fixed finite truncation in a stated limit; it can be useful even when its infinite series diverges.

## Asymptotic equality and error notation

Read [[Power series and Taylor approximations]] and [[09.08 Asymptotic notation]]. To compare two nonzero functions in a limit, write $f(x)\sim g(x)$ if $f(x)/g(x)\to1$. For example, $(x+2)/x\to1$ as $x\to\infty$, so $x+2\sim x$. The absolute difference is still $2$. Asymptotic equality is a statement about relative size, not exact equality or a vanishing absolute error.

The notation $r(x)=O(x^{-m})$ as $x\to\infty$ means that $|r(x)|\leq Cx^{-m}$ beyond some threshold, for fixed constants $C$ and threshold. The notation $r(x)=o(x^{-m})$ means $x^m r(x)\to0$. Each statement must include its limiting direction. For example, $x^{-2}=o(x^{-1})$ at positive infinity but not as $x\to0^+$.

## Definition of an asymptotic power series

An inverse-power expansion

$$
f(x)\sim a_0+\frac{a_1}{x}+\frac{a_2}{x^2}+\cdots
\quad(x\to+\infty)
$$

means that for every fixed $N\geq0$,

$$
f(x)-\sum_{n=0}^Na_nx^{-n}=O(x^{-N-1}).
$$

Here the constants in the bound may depend on $N$, but not on $x$ after a threshold. This is the inverse-power form of a Poincaré asymptotic expansion; see [NIST DLMF §2.1](https://dlmf.nist.gov/2.1). At a finite limit point, replace $x^{-1}$ by a small displacement such as $h\to0$.

The order of the limits is essential. Fix $N$ and then let $x$ grow. The definition says nothing about taking $N\to\infty$ at a fixed $x$. A convergent power series is one possible asymptotic expansion near its centre, but convergence is not part of this definition.

## An accessible convergent example

The finite geometric identity gives, for $x>0$,

$$
\frac{x}{x+1}=\frac1{1+1/x}
=\sum_{n=0}^{N}(-1)^nx^{-n}
+\frac{(-1)^{N+1}x^{-N-1}}{1+1/x}.
$$

The final denominator is at least $1$, so the remainder is at most $x^{-N-1}$. This proves the asymptotic expansion at positive infinity for every fixed $N$. In this example the infinite geometric series also converges when $x>1$, but the asymptotic proof used only a finite identity.

## Worked example: a divergent expansion with a rigorous bound

Use [[08.05 Integration by parts]] and [[08.07 Improper integrals]] for this section. Define, for $x>0$,

$$
F(x)=\int_0^{\infty}\frac{e^{-t}}{1+t/x}\,dt.
$$

The integrand is positive and at most $e^{-t}$, so the integral exists. Apply the finite geometric identity to $1/(1+t/x)$, then integrate the finite sum. Repeated integration by parts gives $\int_0^{\infty}e^{-t}t^n\,dt=n!$: the initial integral is $1$, each integration multiplies by $n$, and the boundary terms vanish. Consequently

$$
F(x)=\sum_{n=0}^{N}(-1)^n\frac{n!}{x^n}+R_N(x),
$$

$$
R_N(x)=\frac{(-1)^{N+1}}{x^{N+1}}
\int_0^{\infty}\frac{e^{-t}t^{N+1}}{1+t/x}\,dt,
\qquad
|R_N(x)|\leq\frac{(N+1)!}{x^{N+1}}.
$$

This proves an asymptotic expansion to every order. Yet for any fixed finite $x>0$, successive term magnitudes have ratio $(n+1)/x$. They eventually increase and fail to tend to zero. The infinite series diverges at every such $x$.

At $x=20$, truncation through $n=3$ gives $1-1/20+2/400-6/8000=0.95425$. The remainder is positive and at most $24/20^4=0.00015$. Therefore $0.95425<F(20)<0.95440$. This is a useful certified value from a divergent expansion. The geometric identity inside the integral was finite; no unjustified infinite interchange was used.

## When to stop and what not to infer

In the factorial example the terms decrease while $(n+1)/x<1$ and then increase. Terms near the smallest magnitude often give a good stopping point; the proven remainder bound decides which accuracy is guaranteed. Adding terms indefinitely is harmful at fixed $x$.

An asymptotic expansion does not uniquely identify the function. For instance, $e^{-x}$ is smaller than every inverse power as $x\to+\infty$, so adding it to a function leaves all inverse-power coefficients unchanged. Nor can one differentiate an error estimate freely: $r(x)=\sin(x^3)/x$ tends to zero, but $r'(x)=3x\cos(x^3)-\sin(x^3)/x^2$ is unbounded. Extra regularity and error control are necessary for differentiation.

## Practice

1. Find a quadratic approximation to $(1+h)^{-1}$ as $h\to0$ and a bound for $|h|\leq1/2$.
2. For the integral-defined $F$, bound the error at $x=10$ after terms through $n=2$. State its sign.

## Worked answers

1. The finite identity is $(1+h)^{-1}=1-h+h^2-h^3/(1+h)$. Since $|1+h|\geq1/2$, the error has magnitude at most $2|h|^3$. Thus $1-h+h^2+O(h^3)$ is valid as $h\to0$.
2. The approximation is $1-1/10+2/100=0.92$. The remainder is negative and has magnitude at most $3!/10^3=0.006$. Hence $0.914\leq F(10)\leq0.92$. This bound follows from a finite identity even though the infinite factorial series diverges.
