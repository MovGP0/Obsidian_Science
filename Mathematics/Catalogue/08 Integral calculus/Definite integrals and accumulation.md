---
title: "Definite integrals and accumulation"
catalogue_ids:
  - "8.2.1"
  - "8.2.1.1"
  - "8.2.1.2"
  - "8.2.1.3"
  - "8.2.1.4"
---

> [!TLDR]
> A definite integral is a limit of weighted sums; continuity supplies existence and the fundamental theorem supplies an efficient calculation.

## Definition and existence

Read [[07.01 Limits]] and [[Antiderivatives and integration rules]]. Divide $[a,b]$, with $a<b$, into intervals $[x_{i-1},x_i]$ and choose a sample point $\xi_i$ in each. A **Riemann sum** is

$$
\sum_{i=1}^n f(\xi_i)(x_i-x_{i-1}).
$$

If these sums approach the same finite number as the largest interval width tends to zero, independently of sample choices and partitions, that number is $\int_a^b f(x)\,dx$. For $f\ge0$ it is area under the graph. Negative values make negative contributions, so a general integral is signed accumulation, not always total area.

A continuous function on a closed bounded interval is Riemann integrable. A bounded function with finitely many jump discontinuities is also integrable. Boundedness alone is insufficient: the function equal to $1$ at rational points and $0$ at irrational points has sums with incompatible limits, because every interval contains both types of points. Unbounded integrands require the improper or Lebesgue definitions in [[Improper Stieltjes and Lebesgue integrals]].

## Basic properties

Linearity follows from linearity of each finite sum. Adjacent intervals can be joined: $\int_a^b f+\int_b^c f=\int_a^c f$. Define $\int_a^a f=0$ and $\int_b^a f=-\int_a^b f$. These conventions make additivity hold for any ordering of the limits.

If $m\le f(x)\le M$ on $[a,b]$, then $m(b-a)\le\int_a^b f\le M(b-a)$. Also $|\int f|\le\int|f|$. These inequalities give useful checks. For continuous $f$, its average $\overline f=(b-a)^{-1}\int_a^b f$ equals $f(c)$ for at least one $c\in[a,b]$. This mean-value conclusion follows because the average lies between the minimum and maximum and continuity fills intermediate values.

![[catalogue-ch08-signed-area.svg|**Fig. C.08.1** Positive and negative triangular contributions cancel, while their absolute areas add.]]

The graph in Fig. C.08.1 is $f(x)=x$ on $[-1,1]$. The definite integral is zero, while the total enclosed area is $\int_{-1}^1|x|\,dx=1$. Cancellation explains the difference.

## Limits and the fundamental theorem

If $f$ is continuous, $A(x)=\int_a^x f(t)\,dt$ satisfies $A'(x)=f(x)$. A short argument compares $[A(x+h)-A(x)]/h$ with the values of $f$ near $x$; continuity forces their average toward $f(x)$. If $F'=f$ on $[a,b]$, then

$$
\int_a^b f(x)\,dx=F(b)-F(a).
$$

For moving limits $\alpha(s),\beta(s)$, the chain rule gives $d[\int_{\alpha(s)}^{\beta(s)}f(t)\,dt]/ds=f(\beta(s))\beta'(s)-f(\alpha(s))\alpha'(s)$, provided $f$ is continuous and the limit functions are differentiable. This is a theorem about limits of integration, not a reason to differentiate the dummy variable $t$ as though it were $s$.

Symmetry simplifies limits too. An odd integrable function has zero integral over $[-a,a]$; an even one has twice the integral over $[0,a]$. If a continuous function has period $T>0$, its integral over $[c,c+T]$ is independent of $c$. Differentiate this integral with respect to $c$ to get $f(c+T)-f(c)=0$.

## Calculation by substitution and parts

If $u=g(x)$ in a definite integral, change the limits to $g(a),g(b)$. For $\int_0^1 2x\cos(x^2)\,dx$, the new limits are $0,1$, so the answer is $\int_0^1\cos u\,du=\sin1$. When a substitution reverses the bounds, retain their order; this includes the sign automatically.

Definite integration by parts reads $\int_a^b uv'=[uv]_a^b-\int_a^b u'v$. For example, $\int_0^1 xe^x\,dx=[xe^x]_0^1-\int_0^1e^x\,dx=e-(e-1)=1$. The boundary term is essential.

Do not exchange a limiting sequence and an integral merely because each term is integrable. The functions $f_n(x)=n$ on $(0,1/n)$ and $0$ elsewhere tend to zero at every fixed $x\in[0,1]$, but every integral is $1$. Uniform convergence or a suitable integrable dominating bound supplies extra control. [[Parameter integrals and series]] gives usable versions.

## A limit of elementary sums

The integral definition can compute $\int_0^1x^2\,dx$ directly. Use $n$ equal pieces and right endpoints $i/n$. The sum is

$$
S_n=\frac1{n^3}\sum_{i=1}^n i^2
=\frac{n(n+1)(2n+1)}{6n^3}.
$$

Dividing the numerator and denominator by $n^3$ gives $S_n=(1+1/n)(2+1/n)/6$, whose limit is $1/3$. Because $x^2$ is continuous, existence is already guaranteed, and this particular partition sequence finds its value. The antiderivative method gives the same answer, $[x^3/3]_0^1=1/3$. These are two routes to one number: the sum definition explains what is being measured, and the fundamental theorem makes the calculation shorter. A convergent sum for only one arbitrary partition sequence, without an existence argument, does not by itself prove Riemann integrability.

## Practice

1. Evaluate $\int_{-2}^{2}(x^3+x^2)\,dx$.
2. Differentiate $H(s)=\int_{s^2}^{s^3}\sqrt{1+t^2}\,dt$.

## Worked answers

1. The odd term contributes zero. The even term gives $2\int_0^2x^2\,dx=2(8/3)=16/3$. It is positive, as the surviving integrand requires.
2. The formula gives $H'(s)=3s^2\sqrt{1+s^6}-2s\sqrt{1+s^4}$. Each endpoint contributes its own chain-rule factor. The integrand is continuous for every real $t$, so there is no domain restriction on $s$.
