---
title: "Radical substitutions and binomial integrals"
catalogue_ids:
  - "8.1.4"
  - "8.1.4.1"
  - "8.1.4.2"
---

> [!TLDR]
> A useful radical substitution makes both the integrand and its differential rational on a specified real branch.

## Domains before substitutions

An **irrational algebraic integrand** contains roots or noninteger powers. Read [[Roots and principal values]] and [[Antiderivatives and integration rules]]. We use the nonnegative square root. Therefore $\sqrt{x^2}=|x|$, not $x$ on the entire real line. Every substitution below is used on an interval where the required roots and inverse are defined.

For a rational expression involving $x^{1/n}$, try $x=t^n$. More generally, choose a common multiple $N$ of denominators in rational exponents and use $x=t^N$ on $x>0,t>0$. All powers become integer powers, and $dx=Nt^{N-1}\,dt$. This produces a rational function of $t$ when the original expression is rational in those fractional powers.

For example,

$$
\int\frac{dx}{1+\sqrt{x}}
=\int\frac{2t}{1+t}\,dt
=2t-2\ln(1+t)+C
=2\sqrt{x}-2\ln(1+\sqrt{x})+C.
$$

We used $t=\sqrt{x}$ for $x>0$. The original integrand is also defined at zero; the resulting definite integrals can include zero by continuity, although the inverse derivative of $\sqrt{x}$ needs care there.

## A linear radical and a quadratic radical

For $\sqrt{ax+b}$ with $a\ne0$, use $t=\sqrt{ax+b}$. Then $x=(t^2-b)/a$ and $dx=2t\,dt/a$. A rational expression in $x$ and this root becomes rational in $t$.

For $\sqrt{a^2-x^2}$, $a>0$, use $x=a\sin t$ with $-\pi/2<t<\pi/2$. On this interval, $\cos t>0$ and the root is $a\cos t$. For $\sqrt{x^2+a^2}$, use $x=a\sinh t$, giving $a\cosh t$. For $\sqrt{x^2-a^2}$ on $x>a$, use $x=a\cosh t$ with $t>0$. These choices remove the root but do not always create a rational function immediately; elementary identities then finish the calculation.

As a worked quadratic example, let $x=2\sin t$ in $\int\sqrt{4-x^2}\,dx$. The integral becomes $4\int\cos^2t\,dt=2t+\sin2t+C$. Since $\sin2t=x\sqrt{4-x^2}/2$, the answer is

$$
2\arcsin(x/2)+\frac{x}{2}\sqrt{4-x^2}+C,
\qquad -2<x<2.
$$

For genuine rationalization of a quadratic radical, an **Euler substitution** can help. For $\sqrt{x^2+1}$, put $t=\sqrt{x^2+1}-x>0$. Squaring gives $x=(1-t^2)/(2t)$ and $\sqrt{x^2+1}=(1+t^2)/(2t)$. Both are rational in $t$, as is $dx/dt$. Other Euler cases use a real root or a positive constant term; do not apply a memorized substitution without checking that the selected real branch exists.

The Euler substitution also gives an explicit worked integral. For $\int\sqrt{x^2+1}\,dx$, use $t=\sqrt{x^2+1}-x$. The inverse derivative is $dx/dt=-(1+t^2)/(2t^2)$. Therefore

$$
\int\sqrt{x^2+1}\,dx
=-\frac14\int(t^{-3}+2t^{-1}+t)\,dt
=\frac1{8t^2}-\frac12\ln t-\frac{t^2}{8}+C.
$$

Since $t>0$, no absolute value is needed in this logarithm. Multiplying $t$ by $\sqrt{x^2+1}+x$ gives $1$, so $-\ln t=\ln(x+\sqrt{x^2+1})$. Also $t^{-2}-t^2=4x\sqrt{x^2+1}$. Thus the same answer is $[x\sqrt{x^2+1}+\ln(x+\sqrt{x^2+1})]/2+C$. The transformed rational integral has several terms, but none retains a radical in its integration variable. This is the precise benefit of rationalization.

## Binomial integrands

A binomial differential has form $x^m(a+bx^n)^p\,dx$, with rational $m,n,p$, $ab\ne0$, and $n\ne0$. On a consistent branch, **Chebyshev's theorem** states that an elementary antiderivative exists exactly when at least one of

$$
p,\qquad q=\frac{m+1}{n},\qquad p+q
$$

is an integer. The necessity proof requires more theory than this introductory lesson. The classification originates in [Chebyshev's 1853 paper](https://www.numdam.org/item/JMPA_1853_1_18__87_0.pdf).

The useful substitutions can be understood directly. Put $z=x^n$, so the differential becomes $z^{q-1}(a+bz)^p\,dz/n$. If $p$ is an integer, remove denominators of exponents with a power substitution. If $q$ is an integer and $p=r/s$, put $t=(a+bz)^{1/s}$: both $z$ and the transformed differential become rational in $t$. If $p+q$ is an integer, instead put $t=(b+a/z)^{1/s}$. This last choice combines the powers of $z$ into an integer power. These are local substitutions; signs and root branches still matter.

For $\int x\sqrt{1+x^2}\,dx$, $m=1,n=2,p=1/2$, and $q=1$. Directly set $u=1+x^2$, $du=2x\,dx$, obtaining $(1+x^2)^{3/2}/3+C$. In contrast, $\int\sqrt{1+x^3}\,dx$ has $p=1/2,q=1/3,p+q=5/6$; no test value is an integer, so the nondegenerate binomial has no elementary antiderivative.

## Practice

1. Integrate $1/[\sqrt{x}(1+\sqrt{x})]$ on $x>0$.
2. Integrate $x^2(1+x^3)^{1/3}$ on $x>0$ and check Chebyshev's test.

## Worked answers

1. Put $x=t^2$, $t>0$. The integrand times $dx$ becomes $2\,dt/(1+t)$, so the answer is $2\ln(1+\sqrt{x})+C$.
2. Here $m=2,n=3,p=1/3$, so $q=1$. Put $u=1+x^3$, giving $du=3x^2\,dx$. The integral is $u^{4/3}/4+C=(1+x^3)^{4/3}/4+C$. Its derivative is $x^2(1+x^3)^{1/3}$.
