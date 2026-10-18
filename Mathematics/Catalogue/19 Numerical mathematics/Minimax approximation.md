---
title: "Minimax approximation"
catalogue_ids:
  - "19.6.3"
  - "19.6.3.1"
  - "19.6.3.2"
  - "19.6.3.3"
  - "19.6.3.4"
---

> [!TLDR]
> A minimax approximation makes the largest absolute error as small as possible; alternating extreme errors can certify the optimum.

## The uniform-error problem

[[Least-squares algorithms]] minimizes average squared error. **Chebyshev approximation**, also called uniform or minimax approximation, instead minimizes the largest error. For a continuous real $f$ on a closed interval $[a,b]$, seek a polynomial $p$ of degree at most $n$ minimizing

$$
E=\|f-p\|_\infty=\max_{a\le x\le b}|f(x)-p(x)|.
$$

The interval must have positive length. A best polynomial exists and is unique for this problem. The maximum exists because the error is continuous on a closed bounded interval. This objective directly limits the worst discrepancy; it need not minimize the sum of squares or pass through any chosen sample.

## Alternation theorem

For continuous real $f$, a degree-at-most-$n$ polynomial $p$ is best if and only if there are at least $n+2$ ordered points $x_0<\cdots<x_{n+1}$ in the interval where

$$
f(x_i)-p(x_i)=\sigma(-1)^i E,\qquad \sigma\in\{1,-1\}.
$$

When $E=0$, the function is already such a polynomial and the approximation is exact. For $E>0$, the extreme errors must alternate in sign at equal magnitude. Why is alternation sufficient? Any polynomial with a strictly smaller maximum error would need to lie above $p$ at each positive extreme and below it at each negative extreme. The difference would then change sign at least $n+1$ times and have at least $n+1$ roots. Its degree is at most $n$, which is impossible. The converse and existence require a longer argument and are stated here without proof.

Approximate $f(x)=x^2$ on $[-1,1]$ by a line. Take $p(x)=1/2$. Its error is $+1/2$ at $-1$, $-1/2$ at $0$, and $+1/2$ at $1$. Between those points the error stays within that band. Three alternating points meet the $n+2=3$ requirement for $n=1$, so this constant is the best line too. The least-squares constant from [[Least-squares algorithms]] was $1/3$; different criteria produce different answers.

## Chebyshev polynomials

Define $T_k(\cos\theta)=\cos(k\theta)$ on $[-1,1]$. The identity $\cos((k+1)\theta)+\cos((k-1)\theta)=2\cos\theta\cos(k\theta)$ gives

$$
T_0=1,\quad T_1=x,\quad T_{k+1}=2xT_k-T_{k-1}.
$$

Thus $T_2=2x^2-1$, $T_3=4x^3-3x$. For $k\ge1$, $T_k$ has $k$ zeros at $\cos((2j-1)\pi/(2k))$, $j=1,\ldots,k$, and $k+1$ alternating extrema at $\cos(j\pi/k)$. Its absolute value is at most $1$ on the interval. The scaled polynomial $2^{1-k}T_k$ is monic, meaning its leading coefficient is $1$, and has the smallest possible maximum magnitude among monic degree-$k$ polynomials. The same sign-change argument proves this extremal property. It explains the usefulness of Chebyshev nodes and bases.

## Remez exchange algorithm

Choose $n+2$ increasing trial points. Solve the linear equations

$$
p(x_i)+(-1)^i E=f(x_i)
$$

for the $n+1$ polynomial coefficients and signed level $E$. Then locate the actual largest positive and negative errors over the full interval, update the reference points while preserving alternating signs, and solve again. Stop when the candidate extremes agree in magnitude to the requested tolerance and no larger error has been missed. The search for extrema is a central part of the algorithm; a coarse grid alone can miss a peak. [Pachón and Trefethen's Remez paper](https://people.maths.ox.ac.uk/trefethen/remez_new2.pdf) explains the exchange rule and practical representations.

For a hand-sized Remez example, approximate $x^2$ by a constant, so $n=0$. Start with reference points $-1,1/2$. The equations $c+E=1$ and $c-E=1/4$ give $c=5/8$, $E=3/8$. The true negative extreme at $0$ has magnitude $5/8$, so the trial points missed the worst error. Exchange $1/2$ for $0$. Now $c+E=1$ and $c-E=0$ give $c=E=1/2$. The full error band and alternation certify this answer. Arbitrary point updates need not converge; use a justified exchange procedure.

## Discrete minimax as optimization

For a finite set of samples, minimize $E$ subject to

$$
-E\le y_i-\sum_jc_j\phi_j(x_i)\le E,\qquad E\ge0.
$$

These are linear inequalities in coefficients and $E$, so the problem is a linear program. For samples $(0,0),(1,1),(2,4)$ and a constant fit, the range is $[0,4]$. Its midpoint $c=2$ gives maximum error $2$, and no constant can have smaller error because it must lie within $E$ of both endpoints. Discrete optimality only controls those sample points; it does not certify an unsampled continuous interval.

## Practice

1. Find the best constant for $f(x)=x$ on $[2,5]$.
2. Use the recurrence to calculate $T_4$ and give its maximum absolute value on $[-1,1]$.

> [!example]- Worked answers
> 1. The endpoint errors are balanced by $c=(2+5)/2=7/2$, giving $E=3/2$. Every constant must be within $E$ of both $2$ and $5$, so $2E\ge3$. The candidate attains this lower bound.
> 2. $T_4=2x(4x^3-3x)-(2x^2-1)=8x^4-8x^2+1$. Since $T_4(\cos\theta)=\cos4\theta$, its maximum absolute value is $1$.
