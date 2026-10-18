---
title: "Finite-rank kernels and successive approximation"
catalogue_ids:
  - "11.2"
  - "11.2.1"
  - "11.2.2"
---

> [!TLDR]
> Finite-rank kernels reduce a second-kind equation to a linear system; successive approximation gives a series when repeated corrections become small.

## Fredholm equations of the second kind

Read [[Kernels and classification]] first. We study

$$
u(x)=f(x)+\lambda\int_a^bK(x,t)u(t)\,dt=f(x)+\lambda(Tu)(x).
$$

Assume $f$ and $K$ are continuous on a finite interval and its square. Two methods are useful. A finite-rank kernel gives finitely many unknown numbers. Iteration builds successively better functions. Both need a solvability check; neither permits division by zero or the sum of a divergent series.

## Degenerate kernels

A **degenerate**, or **finite-rank**, kernel has the form

$$
K(x,t)=\sum_{j=1}^r a_j(x)b_j(t).
$$

The word does not mean that the equation is defective. It means that its integral output lies in the span of finitely many functions $a_j$. Define moments $c_i=\int_a^b b_i(t)u(t)\,dt$ and data $d_i=\int_a^b b_i(t)f(t)\,dt$. Then

$$
u=f+\lambda\sum_j a_jc_j,
\qquad
c_i=d_i+\lambda\sum_j A_{ij}c_j,
\qquad
A_{ij}=\int_a^b b_i(t)a_j(t)\,dt.
$$

Thus solve $(I-\lambda A)c=d$ using [[10.04 Linear systems]]. The symbol $I$ is the identity matrix. Once the moments are known, the displayed expression reconstructs $u$. This reduction is exact. It does not sample the integral or assume that $u$ is a polynomial.

### Worked example

On $[0,1]$, solve $u(x)=1+\tfrac12x\int_0^1tu(t)\,dt$. There is one moment $c=\int_0^1tu(t)\,dt$. Since $a_1(x)=x$ and $b_1(t)=t$, the one-entry matrix is $A=1/3$ and $d=1/2$. Hence

$$
\left(1-\frac16\right)c=\frac12,
\qquad c=\frac35,
\qquad u(x)=1+\frac3{10}x.
$$

Direct integration gives $\int_0^1t(1+3t/10)\,dt=1/2+1/10=3/5$. This checks the reconstructed function, not just the auxiliary equation.

If instead $\lambda=3$, the moment equation becomes $0c=1/2$, so no solution exists. For that same parameter but data $f(x)=1-3x/2$, the data moment is zero. Every value of $c$ then gives a solution $u=f+3cx$. This is the finite-dimensional origin of the Fredholm alternative.

## Successive approximation and Neumann series

Start with $u_0=f$ and set $u_{n+1}=f+\lambda Tu_n$. The first two corrections are

$$
u_1=f+\lambda Tf,
\qquad u_2=f+\lambda Tf+\lambda^2T^2f.
$$

Here $T^2f=T(Tf)$, not the square of $Tf$. By induction, $u_n=\sum_{j=0}^n\lambda^jT^jf$, with $T^0f=f$. Its infinite version is the **Neumann series**. It is the geometric series for an operator rather than a number.

To control convergence, define the maximum norm $\|v\|_\infty=\max_{a\leq x\leq b}|v(x)|$. This measures the largest absolute value of a continuous function. If $|K(x,t)|\leq M$ and $L=b-a$, then

$$
\|Tv\|_\infty\leq ML\|v\|_\infty.
$$

This follows by taking the absolute value inside the integral and bounding every factor. If $q=|\lambda|ML<1$, repeated use gives $\|\lambda^jT^jf\|_\infty\leq q^j\|f\|_\infty$. The ordinary geometric series converges. Therefore the function series converges uniformly, and

$$
\|u-u_n\|_\infty\leq\frac{q^{n+1}}{1-q}\|f\|_\infty.
$$

Uniform convergence permits integration term by term here. Substituting the series proves that its sum solves the equation. If $u$ and $v$ both solve it, their difference satisfies $\|u-v\|_\infty\leq q\|u-v\|_\infty$; since $q<1$, they are equal. This proves uniqueness under the stated sufficient condition.

## Resolvent kernel

Repeated integrals can be recorded by $K_1=K$ and

$$
K_{m+1}(x,t)=\int_a^bK(x,s)K_m(s,t)\,ds.
$$

In the convergence region the **resolvent kernel** is $R(x,t;\lambda)=\sum_{m=1}^{\infty}\lambda^{m-1}K_m(x,t)$. Then $u=f+\lambda\int_a^bR(x,t;\lambda)f(t)\,dt$. This convention keeps the leading $\lambda$ outside $R$. Other books include it inside; compare definitions before comparing formulas.

For $K(x,t)=xt$, $K_m=xt/3^{m-1}$ by one integration. Thus $R=xt/(1-\lambda/3)$ for $|\lambda|<3$. The finite-rank calculation extends this formula to every $\lambda\ne3$, even where the Neumann series diverges. A sufficient norm bound is not a list of all solvable parameter values. The general determinant construction is in [[Fredholm determinants and alternatives]].

## Practice

1. Solve $u(x)=x+2\int_0^1u(t)\,dt$ by a moment.
2. Suppose $M=2$, $L=1$, $|\lambda|=1/4$, and $\|f\|_\infty=3$. Bound the error after $u_4$.

## Worked answers

1. Set $c=\int_0^1u$. Then $c=1/2+2c$, so $c=-1/2$ and $u=x-1$. Its integral is $-1/2$. The naive Neumann iteration has a factor $2$ on constant functions and generally diverges, although the exact solution exists.
2. Here $q=1/2$, so $\|u-u_4\|_\infty\leq 3(1/2)^5/(1-1/2)=3/16$. This is a guaranteed upper bound, not an assertion that the error equals $3/16$.
