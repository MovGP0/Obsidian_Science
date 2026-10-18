---
title: "Tests for positive series"
catalogue_ids:
  - "7.2.2"
  - "7.2.2.1"
  - "7.2.2.2"
  - "7.2.2.3"
  - "7.2.2.4"
---

> [!TLDR]
> Comparison, ratio, root, and integral tests prove convergence by different bounds; a boundary value of a test can leave the question undecided.

## Choose a test from the form of the terms

Read [[Infinite sums and convergence]] first. All comparison terms in this lesson are nonnegative. For a signed or complex series, apply these tests to magnitudes to establish absolute convergence. Begin with the term test: if the terms do not approach zero, stop and conclude divergence.

A polynomial fraction often fits comparison. Factorials often fit the ratio test. An entire expression raised to the $n$th power often fits the root test. A decreasing function with an accessible antiderivative often fits the integral test. A test that gives no conclusion does not prove either convergence or divergence.

## Comparison test

If $0\leq a_n\leq b_n$ eventually and $\sum b_n$ converges, then $\sum a_n$ converges. Indeed, its increasing partial sums are bounded by a finite initial correction plus a bound for the sums of $b_n$. Conversely, if $\sum a_n$ diverges, the larger series $\sum b_n$ diverges.

The inequalities must face the useful direction. For $n\geq1$, $1/(n^2+1)\leq1/n^2$. The latter is summable, as proved below, so the former converges. The bound $1/(n^2+1)\leq1/n$ gives no conclusion because the harmonic series diverges.

For eventually positive terms, **limit comparison** is convenient. If $a_n/b_n\to c$ with $0<c<\infty$, then both series have the same convergence behavior. For large enough $n$, the ratio is between $c/2$ and $3c/2$, so ordinary comparison works in both directions.

For instance, with $a_n=(5n+2)/(n^3+7)$ and $b_n=1/n^2$, the quotient is $(5+2/n)/(1+7/n^3)\to5$. Thus $\sum a_n$ converges. A zero or infinite quotient is outside this two-sided version; use a one-sided bound instead.

## D’Alembert’s ratio test

Suppose the terms are nonzero eventually and $L=\lim |a_{n+1}/a_n|$ exists. If $L<1$, the series converges absolutely. Choose $q$ with $L<q<1$; eventually $|a_{n+1}|\leq q|a_n|$, giving a geometric upper bound for the tail. If $L>1$, including $L=+\infty$, the terms fail to tend to zero and the series diverges. If $L=1$, this test is inconclusive.

For $a_n=3^n/n!$, cancellation gives $a_{n+1}/a_n=3/(n+1)\to0$, so convergence follows. For $a_n=n!/3^n$, the ratio is $(n+1)/3\to\infty$, so the series diverges. The factorial $n!$ means $1\cdot2\cdots n$ and $0!=1$.

## Cauchy’s root test

Suppose $L=\lim\sqrt[n]{|a_n|}$ exists. If $L<1$, choose $L<q<1$ and eventually $|a_n|\leq q^n$; comparison proves absolute convergence. If $L>1$, the terms cannot approach zero, so divergence follows. If $L=1$, there is no conclusion. The stronger version uses the limit superior when a limit does not exist, but the limit version covers the examples here.

For $a_n=[(2n+1)/(3n+4)]^n$, the root is $(2n+1)/(3n+4)\to2/3$. Therefore the series converges. For $a_n=1/n^p$ with any fixed positive $p$, the root tends to $1$; comparison or integration is needed.

## Cauchy’s integral test

Before this section, read [[08.01 Definite integrals]], [[08.03 The fundamental theorem]], and [[08.07 Improper integrals]]. Suppose $a_n=f(n)$ and $f$ is positive, continuous, and nonincreasing for $x\geq1$. Rectangles under and above the graph give

$$
\int_1^{N+1}f(x)\,dx\leq\sum_{n=1}^Nf(n)
\leq f(1)+\int_1^Nf(x)\,dx.
$$

Thus the series and improper integral converge together. They need not have equal values. The assumptions may start at a later index; a finite initial part does not affect convergence.

For $f(x)=x^{-p}$ with $p>0$, the antiderivative is $x^{1-p}/(1-p)$ when $p\ne1$ and $\log x$ when $p=1$. It follows that $\sum n^{-p}$ converges exactly when $p>1$. For $p\leq0$, the terms already fail the term test.

## Worked example: a logarithmic boundary case

Determine $\sum_{n=2}^{\infty}1/[n(\log n)^2]$. Both ratio and root tests give $1$. Set $f(x)=1/[x(\log x)^2]$ for $x\geq2$. It is positive and continuous. Its denominator has positive derivative $(\log x)^2+2\log x$, so $f$ decreases. Substitute $u=\log x$, $du=dx/x$:

$$
\int_2^{\infty}\frac{dx}{x(\log x)^2}
=\int_{\log2}^{\infty}\frac{du}{u^2}=\frac1{\log2}<\infty.
$$

The series therefore converges. Replacing the squared logarithm by the first power would give $\int du/u$, which diverges. Small algebraic changes can matter at the boundary.

## Practice

1. Determine the behavior of $\sum_{n=1}^{\infty}(n/(2n+1))^n$.
2. Determine the behavior of $\sum_{n=1}^{\infty}(n+4)/(n^2+1)$.

## Worked answers

1. The $n$th root is $n/(2n+1)\to1/2<1$. The root test proves convergence.
2. Compare with $1/n$. The quotient is $(n^2+4n)/(n^2+1)\to1$, a finite positive number. The harmonic series diverges, so limit comparison proves divergence. The original terms tend to zero, which alone does not decide the sum.
