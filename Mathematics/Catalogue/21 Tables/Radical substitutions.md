---
title: "Integral tables for radicals and binomial differentials"
catalogue_ids:
  - "21.7.2"
  - "21.7.2.1"
  - "21.7.2.2"
  - "21.7.2.3"
  - "21.7.2.4"
  - "21.7.2.5"
  - "21.7.2.6"
  - "21.7.2.7"
  - "21.7.2.8"
  - "21.7.2.9"
  - "21.7.2.10"
---

> [!TLDR]
> Choose a substitution that simplifies the radical, record its real domain, and include the derivative factor before using an integral table.

## Irrational integrands

Here an **irrational function** means an algebraic expression with roots, such as $\sqrt{x}$; it does not mean that every output is an irrational number. The main method is [[08.04 Substitution]]. If $u=u(x)$, then $du=u'(x)\,dx$. The new integrand must be expressed wholly in $u$, including the differential. A half-converted expression is not a valid substitution.

For real work, the square root is the nonnegative root. Thus $\sqrt{x^2}=|x|$. It equals $x$ only on $x\ge0$. All antiderivatives below apply on open intervals where the integrand is real and finite. Add an arbitrary constant $C$ to each table result.

## Square roots of x with a² ± b²x

For $a,b>0$ and $x>0$, let $u=\sqrt{x}$, so $x=u^2$ and $dx=2u\,du$. Two representative rows become

$$
\int\frac{dx}{\sqrt{x}(a^2+b^2x)}
=\frac{2}{ab}\arctan\frac{b\sqrt{x}}a+C,
$$

$$
\int\frac{dx}{\sqrt{x}(a^2-b^2x)}
=\frac1{ab}\ln\left|\frac{a+b\sqrt{x}}{a-b\sqrt{x}}\right|+C.
$$

The transformed integrands are $2/(a^2\pm b^2u^2)$, the quadratic rows from [[Rational integral tables]]. In the minus case, also exclude $x=a^2/b^2$. If the numerator is $\sqrt{x}$ instead, the transformed numerator is $2u^2$; polynomial division produces a constant term before the quadratic integral.

## Other expressions with √x

The substitution $u=\sqrt{x}$ rationalizes **any rational expression in $x$ and $\sqrt{x}$** because these become $u^2$ and $u$. For example,

$$
\int\frac{dx}{1+\sqrt{x}}
=\int\frac{2u}{1+u}\,du
=2u-2\ln(1+u)+C.
$$

Return to $u=\sqrt{x}$ at the end. This gives $2\sqrt{x}-2\ln(1+\sqrt{x})+C$ on $x>0$. The apparent singular terms in its derivative cancel. Powers $x^{p/q}$ with integer $p,q$ can often be treated by $x=u^q$, with suitable sign restrictions if $q$ is even.

## A single linear radical √(ax + b)

For $a\ne0$, put $u=\sqrt{ax+b}$. Then $x=(u^2-b)/a$ and $dx=2u\,du/a$. This makes rational expressions in $x$ and the one radical rational in $u$. Simple reference rows are

| Integral | Result, plus $C$ |
| --- | --- |
| $\int\sqrt{ax+b}\,dx$ | $2(ax+b)^{3/2}/(3a)$ |
| $\int dx/\sqrt{ax+b}$ | $2\sqrt{ax+b}/a$ |

For example, with $\int x/\sqrt{2x+3}\,dx$, set $u=\sqrt{2x+3}$. Then $x=(u^2-3)/2$ and $dx=u\,du$. The integrand becomes $(u^2-3)/2$, whose integral is $u^3/6-3u/2+C$. Restore the radical. This is a full derivation, not a direct match to a numerator-free row.

## Two linear radicals √(ax + b) and √(cx + d)

Two different radicals need not disappear with a single square-root substitution. A useful route for rational expressions in them is

$$
u=\sqrt{\frac{ax+b}{cx+d}},\qquad
x=\frac{b-du^2}{cu^2-a}.
$$

Use it where both radicands are positive and denominators are nonzero. Although each radical can retain a common square-root factor, their ratio is $u$. Many important integrands then become rational; it is not a universal promise for every expression containing both roots.

A concrete example is $\int dx/\sqrt{(x+1)(x+4)}$ on $x>-1$. Set $u=\sqrt{(x+1)/(x+4)}$. Then $x=(4u^2-1)/(1-u^2)$, $dx=6u\,du/(1-u^2)^2$, and the denominator is $3u/(1-u^2)$. The quotient is $2\,du/(1-u^2)$. The answer is $\ln|(1+u)/(1-u)|+C$. This explicitly checks both radical and differential factors.

## Circle radicals √(a² − x²)

For $a>0$ and $|x|<a$, put $x=a\sin\theta$, $-\pi/2<\theta<\pi/2$. Then the radical is $a\cos\theta$ and $dx=a\cos\theta\,d\theta$. Therefore

$$
\int\frac{dx}{\sqrt{a^2-x^2}}=\arcsin(x/a)+C,
$$

$$
\int\sqrt{a^2-x^2}\,dx
=\frac12\left[x\sqrt{a^2-x^2}+a^2\arcsin(x/a)\right]+C.
$$

The second row follows by integrating $a^2\cos^2\theta$ and using $\cos^2\theta=(1+\cos2\theta)/2$. The branch restriction makes the cosine nonnegative, which justifies removing its absolute value.

## Sum radicals √(x² + a²)

For $a>0$, set $x=a\sinh u$. Recall $\sinh u=(e^u-e^{-u})/2$ and $\cosh u=(e^u+e^{-u})/2$. Then $\cosh^2u-\sinh^2u=1$ and $\cosh u>0$, so the radical is $a\cosh u$. It follows that

$$
\int\frac{dx}{\sqrt{x^2+a^2}}
=\operatorname{arsinh}(x/a)+C
=\ln\frac{x+\sqrt{x^2+a^2}}a+C.
$$

The logarithm argument is positive for all real $x$. Also,

$$
\int\sqrt{x^2+a^2}\,dx
=\frac12\left[x\sqrt{x^2+a^2}+a^2\operatorname{arsinh}(x/a)\right]+C.
$$

These rows are valid on the whole real line. The constant $a$ inside the logarithm changes only the integration constant, but keeps the expression's scaling clear.

## Difference radicals √(x² − a²)

For $a>0$, there are two real intervals, $x>a$ and $x<-a$. A formula valid separately on both is

$$
\int\frac{dx}{\sqrt{x^2-a^2}}
=\ln|x+\sqrt{x^2-a^2}|+C.
$$

On $x>a$, set $x=a\cosh u$ with $u>0$ to derive it. On $x<-a$, differentiation verifies the same displayed logarithm. The related root integral is

$$
\int\sqrt{x^2-a^2}\,dx
=\frac12\left[x\sqrt{x^2-a^2}-a^2\ln|x+\sqrt{x^2-a^2}|\right]+C.
$$

Do not replace the first row by $\operatorname{arcosh}(x/a)$ on the negative interval: that real inverse function requires $x/a\ge1$.

## General quadratic radicals √(ax² + bx + c)

Complete the square:

$$
ax^2+bx+c=a\left(x+\frac b{2a}\right)^2+c-\frac{b^2}{4a},\qquad a\ne0.
$$

After shifting and scaling, this reduces to a circle, sum, or difference radical, depending on signs. For $\sqrt{4x^2+4x+5}$, write $(2x+1)^2+4$ and set $u=2x+1$. The integral of its reciprocal is $\tfrac12\operatorname{arsinh}[(2x+1)/2]+C$. The factor one-half comes from $dx=du/2$. If the completed square has a negative coefficient, identify the finite real interval before choosing a sine substitution.

## Other irrational expressions

Rationalization does not always produce elementary functions. For $\int dx/\sqrt{1-x^4}$ on $|x|<1$, the radical contains four distinct roots over the complex numbers. Its antiderivative is generally expressed with an elliptic integral; see [[Elliptic integral tables]]. A table that names a special function has not failed: it has defined a useful new function by a reproducible integral.

For a simpler mixed expression, $\int dx/(\sqrt[3]x+1)$ is rationalized by $x=u^3$. The result is $3u^2/(u+1)$, and polynomial division gives $3u-3+3/(u+1)$. It integrates to $3u^2/2-3u+3\ln|u+1|+C$. Real cube roots permit negative $x$, but exclude the pole at $x=-1$.

## Binomial differentials and recurrence formulas

A binomial differential is $x^m(a+bx^n)^p\,dx$. Some exponents permit a direct power substitution. For systematic reductions, write $I_{m,p}=\int x^m(a+bx^n)^p\,dx$. Differentiating the product $x^{m+1}(a+bx^n)^p$ gives

$$
I_{m,p}=\frac{x^{m+1}(a+bx^n)^p}{m+1}
-\frac{pbn}{m+1}I_{m+n,p-1},\qquad m\ne-1.
$$

This is an identity on a fixed real branch; it is useful only if the changed indices simplify the task. For a concrete recurrence, let $J_n=\int(1+x^2)^{-n}\,dx$. Differentiation of $x(1+x^2)^{1-n}$ gives

$$
J_n=\frac{x}{2(n-1)(1+x^2)^{n-1}}+\frac{2n-3}{2(n-1)}J_{n-1},\qquad n\ge2,
$$

with $J_1=\arctan x$. Thus $J_2=x/[2(1+x^2)]+\tfrac12\arctan x+C$. A recurrence needs a starting value and a nonzero denominator. The general binomial formula does not apply at $m=-1$; then try $u=x^n$ and handle the resulting $du/u$ directly.

## Practice

1. Integrate $1/[\sqrt{x}(1+x)]$ for $x>0$.
2. Integrate $1/\sqrt{9-x^2}$ and state its real open interval.
3. Use the recurrence to express $J_3$ in terms of rational functions and $\arctan x$.

> [!example]- Worked answers
> 1. Let $u=\sqrt{x}$. The transformed integral is $2\int du/(1+u^2)=2\arctan\sqrt{x}+C$.
> 2. The circle row with $a=3$ gives $\arcsin(x/3)+C$, valid on $-3<x<3$. At the endpoints the integrand is unbounded even though the antiderivative has finite limits.
> 3. Set $n=3$: $J_3=x/[4(1+x^2)^2]+(3/4)J_2$. Substitute $J_2$ to obtain $x/[4(1+x^2)^2]+3x/[8(1+x^2)]+(3/8)\arctan x+C$.
