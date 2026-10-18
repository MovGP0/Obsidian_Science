---
title: "Parameter integrals and series"
catalogue_ids:
  - "8.2.4"
  - "8.2.4.1"
  - "8.2.4.2"
  - "8.2.4.3"
  - "8.2.5"
---

> [!TLDR]
> A parameter integral defines a function; continuity, domination, or uniform convergence permits selected operations to pass through the integral.

## A function defined by integration

Read [[Definite integrals and accumulation]] and [[Improper Stieltjes and Lebesgue integrals]]. In $I(a)=\int_0^1 e^{ax}\,dx$, $x$ is the integration variable and $a$ is a **parameter**. The result is a function of $a$. The same letter must not silently serve both roles. For $a\ne0$, direct integration gives $I(a)=(e^a-1)/a$, while $I(0)=1$ from the defining integral. The apparent singularity in the formula is removable.

## Differentiate under the integral sign

On a finite rectangle $x\in[c,d]$, $a\in[\alpha,\beta]$, a simple sufficient condition is that $f(x,a)$ and its partial derivative $\partial f/\partial a$ are continuous. Then

$$
\frac{d}{da}\int_c^d f(x,a)\,dx
=\int_c^d\frac{\partial f}{\partial a}(x,a)\,dx.
$$

The derivative is partial because $x$ is held fixed. For infinite intervals or singular integrands, use a stronger control statement: on a parameter neighborhood, let $f(\cdot,a)$ be integrable, let the parameter derivative exist, and bound its absolute value by a single integrable function $g(x)$. With the usual measurability assumptions, dominated convergence then justifies differentiation. A bound that depends without control on the parameter is insufficient. [Keith Conrad's notes](https://kconrad.math.uconn.edu/blurbs/analysis/diffunderint.pdf) explain these hypotheses and the proof.

For the example above, $I'(a)=\int_0^1 xe^{ax}\,dx$. Differentiating the explicit expression for $a\ne0$ gives $[(a-1)e^a+1]/a^2$. At $a=0$, the defining derivative formula gives $I'(0)=\int_0^1x\,dx=1/2$. Do not substitute zero into the expression with $a^2$ in its denominator.

For moving differentiable bounds $c(a),d(a)$, add their endpoint terms:

$$
I'(a)=\int_{c(a)}^{d(a)}f_a(x,a)\,dx
+f(d(a),a)d'(a)-f(c(a),a)c'(a).
$$

Continuity of $f,f_a$ in a neighborhood of the relevant finite region is a convenient sufficient condition. Forgetting an endpoint term is a common error.

## Integrate under the integral sign

For continuous $f$ on a finite rectangle, integrating $I(a)$ over a parameter interval gives

$$
\int_\alpha^\beta\left(\int_c^d f(x,a)\,dx\right)da
=\int_c^d\left(\int_\alpha^\beta f(x,a)\,da\right)dx.
$$

This is a case of Fubini's theorem. More generally, absolute integrability permits the exchange, and for nonnegative measurable functions Tonelli's theorem permits it even with infinite values. Conditional improper integrals need separate justification.

For a worked use, define $J(a)=\int_0^1(1+ax)^{-1}\,dx$ for $a\ge0$. Then

$$
\int_0^1J(a)\,da=\int_0^1\frac{\ln(1+x)}x\,dx.
$$

The inner integral in $a$ is $\ln(1+x)/x$, with continuous value $1$ at zero. Both orders are justified by continuity of the original two-variable integrand. This exchange does not magically make every resulting integral elementary; it gives a new, valid representation.

## Series integration and special functions

If a series of continuous functions converges uniformly on $[c,d]$, integrate its partial sums and pass to the limit. Uniform convergence means the maximum absolute tail tends to zero. Indeed, an error at most $\varepsilon$ everywhere gives an integral error at most $(d-c)\varepsilon$. Pointwise convergence alone does not supply this estimate.

On $0\le x\le r<1$, the geometric series is uniformly convergent. Integrating $1/(1-x)=\sum_{n=0}^\infty x^n$ gives $-\ln(1-r)=\sum_{n=0}^\infty r^{n+1}/(n+1)$. This argument does not include $r=1$: the original integral and resulting harmonic series diverge.

The exponential series converges uniformly on every finite real interval. Thus

$$
\int_0^x e^{-t^2}\,dt
=\sum_{n=0}^\infty\frac{(-1)^n x^{2n+1}}{n!(2n+1)}.
$$

For $x=1$, terms through $n=4$ give $1-1/3+1/10-1/42+1/216\approx0.74749$. The terms decrease in magnitude there, so the alternating-series error is at most $1/(120\cdot11)\approx0.000758$. This provides both a computable approximation and an explicit bound for a nonelementary integral. It also supplies a series for $\operatorname{erf}$ after multiplying by $2/\sqrt\pi$; see [[Exponential hyperbolic and nonelementary integrals]].

## An improper parameter example with a usable bound

For $a>0$, let $L(a)=\int_0^\infty e^{-ax}\,dx=1/a$. To differentiate near a fixed $a_0>0$, restrict $a$ to $[a_0/2,3a_0/2]$. Then $|\partial e^{-ax}/\partial a|=xe^{-ax}\le xe^{-a_0x/2}$. The latter has finite integral $4/a_0^2$, as one integration by parts shows. It is independent of the variable parameter in that neighborhood, so it supplies domination. Consequently $L'(a)=-\int_0^\infty xe^{-ax}\,dx=-1/a^2$.

At $a=0$, the original integral already diverges. No conclusion from the positive-parameter formula extends there automatically. This example shows why a parameter's allowed interval is part of the theorem, not merely a note added after calculation.

## Practice

1. Let $K(a)=\int_0^1\cos(ax)\,dx$. Find $K'(0)$ directly under the integral sign.
2. Approximate $\int_0^{1/2}e^{-t^2}\,dt$ through $n=2$ in the displayed series and bound the error.

## Worked answers

1. Continuity gives $K'(a)=-\int_0^1x\sin(ax)\,dx$. At zero, the integrand vanishes, so $K'(0)=0$. This avoids differentiating $\sin a/a$ at its removable point.
2. The sum is $1/2-(1/2)^3/3+(1/2)^5/10=1/2-1/24+1/320=443/960\approx0.4614583$. The next term has magnitude $(1/2)^7/42=1/5376\approx0.0001861$. The true value is below this truncation and differs by no more than that amount.
