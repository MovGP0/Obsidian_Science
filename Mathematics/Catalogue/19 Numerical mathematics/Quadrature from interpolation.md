---
title: "Quadrature from interpolation"
catalogue_ids:
  - "19.3"
  - "19.3.1"
  - "19.3.2"
  - "19.3.2.1"
  - "19.3.2.2"
  - "19.3.2.3"
  - "19.3.2.4"
---

> [!TLDR]
> Quadrature approximates an integral by weighted samples; interpolation explains the weights and smoothness controls the error.

## From an integral to a finite sum

Read [[08.01 Definite integrals]] and [[07.06 Higher derivatives]]. A definite integral $I=\int_a^b f(x)\,dx$ measures signed area. A **quadrature rule** replaces it by $Q=\sum_i w_i f(x_i)$, where $x_i$ are nodes and $w_i$ are weights. The weights carry interval length. A rule is exact to degree $d$ if it integrates every polynomial of degree at most $d$ exactly. That statement concerns polynomials, not every curved function.

An **interpolatory rule** first fits a polynomial through chosen samples and then integrates that polynomial exactly. For fixed distinct nodes, the Lagrange basis $\ell_i$ equals $1$ at node $i$ and $0$ at the others. Thus $p(x)=\sum_i f(x_i)\ell_i(x)$ and $w_i=\int_a^b\ell_i(x)\,dx$. This construction explains why constants must be correct: $\sum_iw_i=b-a$.

## Rectangle and trapezoidal rules

Put $h=b-a$ and $m=(a+b)/2$. A left rectangle gives $h f(a)$, a right rectangle gives $h f(b)$, and the midpoint rectangle gives $h f(m)$. The midpoint rule uses one sample but is exact for linear functions because the odd displacement about the midpoint cancels under integration. The left rectangle is generally only exact for constants.

Integrating the line through $(a,f(a))$ and $(b,f(b))$ gives the trapezoidal rule

$$
T=\frac h2[f(a)+f(b)].
$$

For a partition into $N$ equal subintervals, now let $h=(b-a)/N$. Adding local trapezoids gives

$$
T_N=h\left[\frac{f(a)+f(b)}2+\sum_{i=1}^{N-1}f(a+ih)\right].
$$

Interior samples occur in two adjacent trapezoids and therefore have full weight. If $f$ has a continuous second derivative bounded in absolute value by $M_2$, then $|I-T_N|\le (b-a)h^2M_2/12$. The composite midpoint bound is $(b-a)h^2M_2/24$. These are error bounds with explicit smoothness assumptions.

## Simpson and Hermite trapezoidal rules

Integrate the quadratic through the endpoints and midpoint to obtain

$$
S=\frac h6[f(a)+4f(m)+f(b)].
$$

Symmetry makes it exact for cubics too. If $f\in C^4[a,b]$, then $I-S=-h^5f^{(4)}(\xi)/2880$ for some interior $\xi$. Composite Simpson requires an even number $N$ of equal subintervals; its weights are $1,4,2,4,\ldots,2,4,1$, multiplied by $h/3$. Its error magnitude is at most $(b-a)h^4M_4/180$ when $|f^{(4)}|\le M_4$.

If endpoint derivatives are also available, cubic Hermite interpolation supplies the **Hermite trapezoidal rule**, also called the corrected trapezoidal rule:

$$
H=\frac h2[f(a)+f(b)]+\frac{h^2}{12}[f'(a)-f'(b)].
$$

This uses both values and slopes. It is not Gauss–Hermite quadrature, which uses a special weight on an infinite interval. The cubic interpolant matches four conditions, so the rule is exact through degree $3$. For $f\in C^4[a,b]$, $I-H=h^5 f^{(4)}(\xi)/720$. On equal panels the derivative corrections telescope to an endpoint term, yielding $T_N+h^2[f'(a)-f'(b)]/12$.

## Worked comparison

For $f(x)=x^2$ on $[0,1]$, the exact integral is $1/3$. The left rectangle gives $0$, the midpoint gives $1/4$, and the trapezoid gives $1/2$. Simpson gives $[0+4(1/4)+1]/6=1/3$. The Hermite rule gives $1/2+(0-2)/12=1/3$. The exactness follows from polynomial degree, not luck.

![[catalogue-ch19-quadrature.svg|**Fig. C.ch19.2** Midpoint rectangles and trapezoids approximate the same signed area with different local shapes.]]

Fig. C.ch19.2 explains why a convex quadratic lies below its endpoint chords. This gives the direction of the trapezoidal error. Refining from one to two panels for $x^2$ gives $T_2=(1/2)[0/2+1/4+1/2]=3/8$, which is closer to $1/3$.

## Safe use

Smoothness matters. A singularity, jump, narrow peak, or highly oscillatory function can defeat an error estimate based on bounded derivatives. Split at known difficulties, use a change of variable where justified, or use an adaptive method that compares local estimates. A small difference between two rules is evidence, not an unconditional certificate. Roundoff and noisy samples eventually limit improvement from smaller panels.

## Practice

1. Apply one Simpson panel to $x^3$ on $[0,2]$.
2. Bound the composite trapezoidal error for $x^2$ on $[0,1]$ with $N=10$.

> [!example]- Worked answers
> 1. With midpoint $1$, $S=(2/6)[0+4(1)+8]=4$. Direct integration gives $2^4/4=4$, as cubic exactness predicts.
> 2. Here $M_2=2$ and $h=0.1$. The bound is $1(0.1)^2(2)/12=1/600\approx0.0016667$. For this quadratic the error attains that magnitude, with the trapezoidal value above the true integral.

## Further reading

[NIST DLMF, elementary quadrature rules](https://dlmf.nist.gov/3.5#i) lists standard normalizations and smoothness-based error terms. The Hermite correction follows directly by integrating a cubic that matches both endpoint values and slopes.
