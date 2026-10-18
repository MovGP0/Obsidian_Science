---
title: "Taylor polynomials with error control"
catalogue_ids:
  - "6.1.4.5"
---

> [!TLDR]
> A Taylor polynomial matches derivatives at one point; a remainder estimate controls the approximation away from that point.

## Match local information with a polynomial

Read [[Repeated differentiation]] and [[Mean value theorems and monotonicity]] first. A tangent line matches a function's value and first derivative at a base point $a$. A quadratic can also match its second derivative. A polynomial of degree at most $n$ can match all derivatives through order $n$ there.

Write the polynomial in powers of displacement: $P_n(x)=c_0+c_1(x-a)+\cdots+c_n(x-a)^n$. At $a$, the $k$th derivative of $(x-a)^k$ equals $k!$. Higher powers still contain a factor $(x-a)$ and vanish. Lower powers have derivative zero at order $k$. Therefore the matching condition forces $c_k=f^{(k)}(a)/k!$:

$$
P_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k.
$$

This is the **Taylor polynomial** at $a$. When $a=0$, it is also called the Maclaurin polynomial. The factorial denominators undo the repeated differentiation of powers.

## Taylor theorem with a remainder

A useful sufficient hypothesis is that $f$ has continuous derivatives through order $n+1$ on an open interval containing the segment from $a$ to $x$. Taylor's theorem gives

$$
f(x)=P_n(x)+R_n(x),\qquad
R_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}
$$

for some $\xi$ strictly between $a$ and $x$, if $x\ne a$. This is the Lagrange form of the remainder. The error has the form of the next term, but evaluated at an intermediate point. The theorem does not identify that point. If $|f^{(n+1)}(t)|\le M$ throughout the segment, then

$$
|f(x)-P_n(x)|\le\frac{M}{(n+1)!}|x-a|^{n+1}.
$$

These formulas and their hypotheses are developed in [UBC CLP-1, Taylor polynomials](https://personal.math.ubc.ca/~CLP/CLP1/clp_1_dc/sec_DIFFTaylor.html). A proof applies Rolle's theorem repeatedly after subtracting the Taylor polynomial and a suitable multiple of $(t-a)^{n+1}$. The full repeated-Rolle proof can follow the theorem's use; the error bound must still accompany a numerical claim.

## Worked example with a guaranteed tolerance

Estimate $\ln(1.1)$ using the cubic polynomial for $f(x)=\ln(1+x)$ at $a=0$. Its first three derivatives at zero are $1,-1,2$. Thus

$$
P_3(x)=x-\frac{x^2}{2}+\frac{x^3}{3},\qquad
P_3(0.1)=0.095333333\ldots.
$$

The fourth derivative is $-6/(1+x)^4$. On $0\le t\le0.1$, its absolute value is at most $6$, so

$$
|R_3(0.1)|\le\frac6{24}(0.1)^4=0.000025.
$$

Moreover, the fourth derivative is negative and $x^4>0$, so the error is negative. The exact logarithm is below the polynomial by at most $0.000025$. This is more informative than merely writing an approximation symbol. The domain $x>-1$ contains the whole segment, so the theorem applies.

## Finite approximation and infinite series

A Taylor polynomial is finite and does not require an infinite series. If polynomials of increasing degree are used to define a Taylor series, equality with the original function requires $R_n(x)\to0$ as $n\to\infty$. Derivatives of every order alone do not guarantee this. Read [[09.06 Taylor and Maclaurin expansions]] for the series question. Keep the finite-degree error problem separate from convergence.

Near $a$, the order of the first nonzero Taylor term can also explain a stationary point. For $x^4$ at zero, the first and second derivatives vanish, but the first nonzero term is positive on both sides. This proves a strict minimum directly. Odd powers such as $x^3$ change sign and cannot give an interior extremum at zero.

## Choose an order deliberately

Select a base point where the function and its derivatives are easy to evaluate. Express the target input as $a+h$. Compute successive derivative values, build the polynomial, and find a bound on the next derivative over the full segment. Increase the degree if that bound exceeds the desired tolerance. A bound at the base point alone is insufficient: the unknown $\xi$ can be elsewhere on the segment.

## Practice

1. Approximate $\sqrt{1.04}$ with a quadratic at zero for $f(x)=\sqrt{1+x}$. Give an error bound on $[0,0.04]$.
2. Approximate $\sin(0.2)$ by its cubic Maclaurin polynomial and give a valid remainder bound without an infinite series.

## Worked answers

1. The polynomial is $1+x/2-x^2/8$, so the estimate is $1.0198$. The third derivative is $3/[8(1+x)^{5/2}]$, bounded by $3/8$ on the segment. Therefore $|R_2|\le(3/8)(0.04)^3/6=0.000004$. The error is positive, so the estimate is slightly low.
2. The polynomial is $x-x^3/6$, giving $0.198666666\ldots$. Taylor's degree-three bound uses the fourth derivative $\sin x$, whose absolute value is at most $1$. It gives $|R_3|\le0.2^4/24\approx0.000066667$. A sharper bound is possible, but this follows directly from the stated theorem and is valid.
