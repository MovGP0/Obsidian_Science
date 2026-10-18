---
title: "Rational integral tables and partial fractions"
catalogue_ids:
  - "21.7"
  - "21.7.1"
  - "21.7.1.1"
  - "21.7.1.2"
  - "21.7.1.3"
  - "21.7.1.4"
  - "21.7.1.5"
  - "21.7.1.6"
  - "21.7.1.7"
---

> [!TLDR]
> Reduce a rational integrand by polynomial division and partial fractions, then check each table result by differentiation on an interval without poles.

## Indefinite integrals

An indefinite integral $\int f(x)\,dx$ means the family of antiderivatives $F(x)+C$ with $F'(x)=f(x)$. The constant can differ on disconnected intervals. A formula containing $\ln|x-a|$ therefore applies separately on either side of $a$, not through a pole. Start with [[08.02 Antiderivatives]] and [[Partial fractions]]. In this lesson, all parameters are real and $C$ is an arbitrary constant.

## Rational functions and a reliable procedure

A rational function is a polynomial divided by another polynomial. If the numerator degree is at least the denominator degree, divide first. Then factor the denominator and decompose the proper fraction. Linear factors give logarithms and reciprocal powers. Irreducible quadratics give logarithms and arctangents, sometimes with higher-power recurrences.

For example, $(x^2+1)/(x+1)=x-1+2/(x+1)$. Integration gives $x^2/2-x+2\ln|x+1|+C$. Factoring only the denominator before division can hide this polynomial contribution.

## Linear expressions X = ax + b

Assume $a\ne0$. Put $X=ax+b$, so $dx=dX/a$. The useful table is

| Integrand | Antiderivative | Condition |
| --- | --- | --- |
| $(ax+b)^p$ | $(ax+b)^{p+1}/[a(p+1)]$ | $p\ne-1$; real powers need an appropriate domain |
| $1/(ax+b)$ | $\ln\lvert ax+b\rvert /a$ | $ax+b\ne0$ |
| $x/(ax+b)$ | $x/a-(b/a^2)\ln\lvert ax+b\rvert $ | $ax+b\ne0$ |

The last row follows from $x=(X-b)/a$ or from division. These formulas are also building blocks for denominators with several linear factors. If $a=0$, the expression is constant and must be treated separately.

## Quadratic expressions X = ax² + bx + c

Assume $a\ne0$, and write $Q=ax^2+bx+c$. If the numerator is $mx+n$, split it into a multiple of $Q'$ and a remainder:

$$
mx+n=\frac{m}{2a}(2ax+b)+\left(n-\frac{mb}{2a}\right).
$$

The first part integrates to $(m/2a)\ln|Q|$. For the second part, set $D=4ac-b^2$ and use

$$
\int\frac{dx}{Q}=
\begin{cases}
\dfrac{2}{\sqrt D}\arctan\dfrac{2ax+b}{\sqrt D}+C,&D>0,\\[4pt]
-\dfrac{2}{2ax+b}+C,&D=0,\\[4pt]
\dfrac{1}{\sqrt{-D}}\ln\left|\dfrac{2ax+b-\sqrt{-D}}{2ax+b+\sqrt{-D}}\right|+C,&D<0.
\end{cases}
$$

Complete the square to derive the first two cases. In the third case, the quadratic has two real roots and splits into two logarithms. The sign of the discriminant determines the method; a memorized arctangent formula does not cover all quadratics.

## Expressions X = a² ± x²

For $a>0$, the basic rows are

| Integral | Result, plus $C$ |
| --- | --- |
| $\int dx/(a^2+x^2)$ | $a^{-1}\arctan(x/a)$ |
| $\int dx/(a^2-x^2)$ | $(2a)^{-1}\ln\lvert (a+x)/(a-x)\rvert $ |
| $\int x\,dx/(a^2\pm x^2)$ | $\pm\tfrac12\ln\lvert a^2\pm x^2\rvert $ |

In the last row the upper and lower signs are paired. Thus the minus denominator gives $-\tfrac12\ln|a^2-x^2|$. Exclude poles at $x=\pm a$ where applicable. Derive the second row from $1/(a^2-x^2)=[1/(a-x)+1/(a+x)]/(2a)$. The minus sign from integrating $1/(a-x)$ is essential.

## Expressions X = a³ ± x³

For $a>0$, the cubic factors are

$$
x^3+a^3=(x+a)(x^2-ax+a^2),\qquad
x^3-a^3=(x-a)(x^2+ax+a^2).
$$

The quadratic factors have no real zeros. A complete representative row, obtained by partial fractions, is

$$
\int\frac{dx}{x^3+a^3}
=\frac{\ln|x+a|}{3a^2}
-\frac{\ln(x^2-ax+a^2)}{6a^2}
+\frac{1}{\sqrt3a^2}\arctan\frac{2x-a}{\sqrt3a}+C.
$$

For $1/(a^3-x^3)$, set $x=-u$ in this row: an antiderivative is $-F(-x)$, where $F'$ equals $1/(x^3+a^3)$. This substitution transfers the formula with its sign correctly. To handle a numerator $x$ or $x^2$, determine new partial-fraction coefficients; the denominator pattern alone does not set the numerator.

## Expressions X = a⁴ + x⁴

Scale with $u=x/a$, so $dx/(a^4+x^4)=a^{-3}du/(1+u^4)$. Over the real numbers,

$$
1+u^4=(u^2+\sqrt2u+1)(u^2-\sqrt2u+1),
$$

$$
\frac1{1+u^4}
=\frac{u/(2\sqrt2)+1/2}{u^2+\sqrt2u+1}
+\frac{-u/(2\sqrt2)+1/2}{u^2-\sqrt2u+1}.
$$

This identity is a more useful table entry than a long arctangent expression: each fraction is a quadratic case already explained above. Both quadratics are positive. For example, the first numerator is $1/(4\sqrt2)$ times its denominator derivative plus $1/4$. Integrate the derivative part as a logarithm and the remainder after completing the square. Keeping the two arctangents separate avoids artificial jumps caused by combining them with an addition formula.

## Expressions X = a⁴ − x⁴

Again take $a>0$. With $u=x/a$,

$$
\frac1{1-u^4}=\frac12\left(\frac1{1-u^2}+\frac1{1+u^2}\right).
$$

The two quadratic rows therefore give

$$
\int\frac{dx}{a^4-x^4}
=\frac1{4a^3}\ln\left|\frac{a+x}{a-x}\right|
+\frac1{2a^3}\arctan\frac xa+C.
$$

Exclude $x=\pm a$. This result is finite on each remaining interval but cannot define a proper integral across either pole.

## Partial-fraction cases and worked example

| Denominator factor | Terms to include |
| --- | --- |
| $(x-r)$ | $A/(x-r)$ |
| $(x-r)^m$ | $A_1/(x-r)+\cdots+A_m/(x-r)^m$ |
| Irreducible $x^2+px+q$ | $(Bx+D)/(x^2+px+q)$ |
| Repeated irreducible quadratic | A linear numerator over every power up to its multiplicity |

The coefficients are unknown numbers, not functions. Multiply the decomposition by the common denominator and compare coefficients. For a simple linear factor, substitution at its root gives one coefficient quickly. Repeated factors still need all lower powers.

For $\int(3x+5)/(x^2+3x+2)\,dx$, factor the denominator as $(x+1)(x+2)$ and set

$$
\frac{3x+5}{(x+1)(x+2)}=\frac A{x+1}+\frac B{x+2}.
$$

Then $3x+5=A(x+2)+B(x+1)$. Substitution at $x=-1$ gives $A=2$; at $x=-2$ gives $B=1$. The answer is $2\ln|x+1|+\ln|x+2|+C$. Differentiating and recombining gives $(2x+4+x+1)/[(x+1)(x+2)]$, which is the original integrand. The working intervals exclude $-2$ and $-1$.

## Practice

1. Integrate $x/(x^2+4)$ and $1/(x^2+4)$, and explain their different forms.
2. Integrate $1/(1-x^4)$ on $(-1,1)$.
3. Decompose $1/[x(x+1)^2]$ and integrate it.

> [!example]- Worked answers
> 1. With $u=x^2+4$, the first answer is $\tfrac12\ln(x^2+4)+C$. The second is $\tfrac12\arctan(x/2)+C$. Only the first numerator matches a multiple of the denominator derivative.
> 2. Set $a=1$ in the quartic-minus row: $\tfrac14\ln[(1+x)/(1-x)]+\tfrac12\arctan x+C$. The ratio is positive on this interval.
> 3. The decomposition is $1/x-1/(x+1)-1/(x+1)^2$. Integrating gives $\ln|x|-\ln|x+1|+1/(x+1)+C$. Differentiation restores the three terms, including the negative squared reciprocal.
