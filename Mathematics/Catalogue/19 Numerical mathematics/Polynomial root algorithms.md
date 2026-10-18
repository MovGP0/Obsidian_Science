---
title: "Polynomial root algorithms"
catalogue_ids:
  - "19.1.2"
  - "19.1.2.1"
  - "19.1.2.2"
  - "19.1.2.3"
---

> [!TLDR]
> Horner evaluation, root bounds, and safeguarded iterations turn a polynomial equation into a controlled computation.

## Start from a polynomial

Use [[Polynomials and identities]] and [[Polynomial roots and higher degrees]] for the algebra. A polynomial of degree $n$ has the form $p(x)=a_nx^n+\cdots+a_1x+a_0$, where $a_n\ne0$. Numerical root finding calculates approximate zeros when exact factorization is unavailable or inconvenient. It must address three separate tasks: evaluate $p$ accurately, locate candidate roots, and improve and check each candidate.

A real degree-$n$ polynomial has $n$ complex roots counted with multiplicity. It need not have $n$ real roots. Complex roots of a real polynomial come in conjugate pairs. A real-only search therefore cannot find every root of $x^2+1$.

## Horner's scheme

Nested multiplication gives

$$
p(x)=\bigl(\cdots((a_nx+a_{n-1})x+a_{n-2})x+\cdots\bigr)x+a_0.
$$

Set $b_n=a_n$ and, for $k=n-1,n-2,\ldots,0$, compute $b_k=a_k+xb_{k+1}$. Then $b_0=p(x)$. This takes $n$ multiplications and $n$ additions, rather than computing each power separately. It also gives synthetic division:

$$
p(t)=(t-x)(b_nt^{n-1}+b_{n-1}t^{n-2}+\cdots+b_1)+b_0.
$$

The variable $t$ here distinguishes the polynomial argument from the fixed evaluation point $x$. Differentiate this identity at $t=x$ to see that evaluating the quotient at $x$ gives $p'(x)$. A second Horner pass can therefore supply Newton's denominator without writing all derivative powers.

For $p(t)=t^3-2t-2$ at $x=2$, use coefficients $(1,0,-2,-2)$. The Horner row is $(1,2,2,2)$. Thus $p(2)=2$, and the quotient is $t^2+2t+2$. Its value at $2$ is $10=p'(2)$. Newton gives $2-2/10=1.8$.

## Locate roots before iterating

Every complex root obeys the Cauchy bound

$$
|z|\le1+\max_{0\le k<n}|a_k/a_n|.
$$

To see why, call the maximum $M$. If $|z|>1+M$, the geometric-series bound makes $\sum_{k<n}|a_k/a_n||z|^k<|z|^n$. The leading term then cannot be cancelled by all lower terms, so $p(z)\ne0$. A bound is a search region, not a list of roots.

For our cubic, all roots have modulus at most $3$. Values $p(1)=-3$ and $p(2)=2$ bracket a real root. Its derivative $3x^2-2$ is positive on $[1,2]$, so exactly one root lies there. On a general interval, subdivide at real roots of $p'$: between consecutive stationary points the polynomial is monotone. Check the stationary points themselves, because an even-multiplicity root touches zero without changing sign. Sampling sign changes alone misses the double root of $(x-1)^2$.

## Worked numerical refinement and deflation

From $x_1=1.8$, $p(x_1)=0.232$ and $p'(x_1)=7.72$, hence $x_2\approx1.769948187$. A further Newton step gives about $1.769292663$. Check on the original polynomial and preserve a real bracket if a certificate is needed. [[Scalar root finding]] gives the conditions for convergence and residual-to-error bounds.

Once a root $r$ is known, synthetic division removes the factor $t-r$. This is **deflation**. With an approximate root, the remainder is not exactly zero and the quotient coefficients contain error. Repeated deflation can amplify this error. After finding all candidates, refine each against the original polynomial, not only the deflated one. For complex roots, use complex arithmetic or remove a conjugate pair together as a real quadratic factor.

Root conditioning belongs to the polynomial problem. Perturbing $a_j$ by a small $\delta a_j$ moves a simple root approximately by

$$
\delta r\approx-\frac{r^j\delta a_j}{p'(r)}.
$$

This follows by linearizing $p(r+\delta r)+\delta a_j(r+\delta r)^j=0$. A small $p'(r)$ makes the root sensitive. At a repeated root the formula fails; even tiny coefficient changes can split the root. More decimal arithmetic cannot restore information that was absent from the input coefficients.

## Practice

1. Evaluate $2x^3-3x^2+4x-5$ at $x=2$ with Horner's scheme and state the synthetic quotient.
2. Explain why scanning only sign changes misses some roots of $(x-2)^2(x+1)$, and locate all its real roots.

> [!example]- Worked answers
> 1. Start with $2$, then calculate $2(2)-3=1$, $2(1)+4=6$, and $2(6)-5=7$. The quotient on division by $t-2$ is $2t^2+t+6$ and the remainder is $7$.
> 2. The root $2$ has even multiplicity, so the polynomial has the same sign on both nearby sides. The roots are $-1$ once and $2$ twice. Evaluating a stationary-point candidate can detect the touching root.

## Further reading

[NIST DLMF, polynomial zeros and conditioning](https://dlmf.nist.gov/3.8#iv) covers deflation and the need to check roots on the original polynomial. The evaluation and location arguments above are derived directly for this lesson.
