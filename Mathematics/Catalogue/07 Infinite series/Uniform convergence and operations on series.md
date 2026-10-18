---
title: "Uniform convergence and operations on series"
catalogue_ids:
  - "7.3"
  - "7.3.1"
  - "7.3.2"
  - "7.3.2.1"
  - "7.3.2.2"
---

> [!TLDR]
> Uniform convergence supplies one tail bound for every input; it preserves continuity and finite-interval integration, while differentiation needs a stronger hypothesis.

## Series of functions and pointwise convergence

A **series of functions** is $\sum_{n=0}^{\infty}u_n(x)$ on a specified set $E$. Its partial sums are functions $S_N(x)=\sum_{n=0}^{N}u_n(x)$. At a fixed $x$, this is an ordinary numerical series. It **converges pointwise** to $f$ on $E$ if $S_N(x)\to f(x)$ at every $x\in E$. The required number of terms may depend on $x$.

Read [[Infinite sums and convergence]] first. Before the operations below, use [[07.03 The derivative]], [[08.01 Definite integrals]], and [[08.03 The fundamental theorem]]. These define a derivative as a local rate of change and an integral as a limit of finite sums. A new limit over $N$ must be justified when it is combined with these operations.

## Uniform convergence

The convergence is **uniform** on $E$ if for every $\varepsilon>0$ there is an $N_0$ such that

$$
N\geq N_0\quad\Longrightarrow\quad
|f(x)-S_N(x)|<\varepsilon\quad\text{for every }x\in E.
$$

Equivalently, the largest possible error, written $\sup_{x\in E}|f(x)-S_N(x)|$, tends to zero. The order of the quantifiers matters: choose one $N_0$ before choosing $x$. Uniform convergence implies pointwise convergence.

Consider the geometric series $\sum_{n=0}^{\infty}x^n=1/(1-x)$ on $[0,1)$. Its remainder after index $N$ is $x^{N+1}/(1-x)$. At each fixed $x<1$ the remainder tends to zero. Yet for every fixed $N$, it is arbitrarily large near $1$, so the convergence is not uniform on $[0,1)$. On $[0,r]$ with fixed $r<1$, it is at most $r^{N+1}/(1-r)\to0$, so convergence is uniform there. The domain is part of the assertion.

## Weierstrass’s M-test

The useful Weierstrass theorem for series is the **M-test**. If $|u_n(x)|\leq M_n$ for every $x\in E$ and $\sum M_n<\infty$, then $\sum u_n$ converges absolutely at each input and uniformly on $E$. Indeed, each tail is bounded by the numerical tail $\sum_{n>N}M_n$, independent of $x$. This is a sufficient test, not a necessary characterization of all uniform convergence.

For $u_n(x)=\sin(nx)/n^2$, use $M_n=1/n^2$. The test works on the whole real line. It does not assert that its differentiated series also converges uniformly: differentiating introduces a factor $n$.

## Continuity and integration

If every $u_n$ is continuous and the series converges uniformly on $E$, its sum is continuous on $E$. To understand the proof near $x_0$, choose a partial sum with a uniformly small tail. Its finite number of terms form a continuous function. The total change splits into two small tails plus a small change in that partial sum.

On a finite interval $[a,b]$, if the terms are Riemann integrable and the series converges uniformly, then

$$
\int_a^b\sum_{n=0}^{\infty}u_n(x)\,dx
=\sum_{n=0}^{\infty}\int_a^b u_n(x)\,dx.
$$

The integral error is at most $(b-a)\sup|f-S_N|$, which tends to zero. This argument does not extend automatically to an infinite interval, because its length is not finite.

## Differentiation needs derivative control

A safe theorem is: let every $u_n$ be continuously differentiable on $[a,b]$, let $\sum u_n(x_0)$ converge at one $x_0\in[a,b]$, and let $\sum u_n'$ converge uniformly there. Then $\sum u_n$ converges uniformly, its sum is differentiable in the interval interior, and $f'=\sum u_n'$. To see the mechanism, integrate the derivative series from $x_0$ to $x$ and add the convergent constant series at $x_0$. Uniform convergence permits that integral limit. The fundamental theorem then gives the derivative. Endpoint derivatives are one-sided.

Uniform convergence of the original series alone does not meet this theorem. The standard interchange results and M-test are treated in Jiří Lebl's [Basic Analysis II, §11.2](https://www.jirka.org/ra/realanal2-draft-v2.0.pdf). The elementary error arguments above explain the specific cases used here.

## Worked example: valid integration on a smaller interval

For $0\leq x\leq1/2$, the geometric series is uniformly convergent. Therefore

$$
\int_0^{1/2}\frac{dx}{1-x}
=\sum_{n=0}^{\infty}\int_0^{1/2}x^n\,dx
=\sum_{n=0}^{\infty}\frac{(1/2)^{n+1}}{n+1}=\log2.
$$

The largest tail of the integrand is at most $2^{-N}$ after index $N$, so the integral error is at most $2^{-N-1}$. This also supplies a numerical estimate for the integrated series. It uses a closed interval inside the convergence region, not the troublesome input $x=1$.

## Practice

1. Prove uniform convergence of $\sum_{n=1}^{\infty}x^n/n^2$ on $[-1,1]$. Can its continuity be concluded?
2. For $\sum_{n=0}^{\infty}x^n$ on $[-r,r]$, with $0<r<1$, justify termwise differentiation.

## Worked answers

1. Since $|x^n/n^2|\leq1/n^2$, the M-test applies. Each term is continuous, so the sum is continuous on this closed interval. This does not automatically permit differentiation at $x=1$.
2. At $x_0=0$ the series equals $1$. Derivative magnitudes satisfy $|nx^{n-1}|\leq nr^{n-1}$. The numerical majorant converges by the ratio test, whose ratio tends to $r<1$. The derivative-series theorem applies, giving $\sum_{n=1}^{\infty}nx^{n-1}=1/(1-x)^2$ on the interval interior.
