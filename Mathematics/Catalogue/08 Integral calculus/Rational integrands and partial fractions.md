---
title: "Rational integrands and partial fractions"
catalogue_ids:
  - "8.1.3"
  - "8.1.3.1"
  - "8.1.3.2"
  - "8.1.3.3"
---

> [!TLDR]
> Polynomial division and partial fractions reduce every real rational integrand to powers, logarithms, and inverse tangents.

## Polynomial and rational integrands

Start with [[Antiderivatives and integration rules]] and [[Partial fractions]]. A polynomial is a finite sum of nonnegative integer powers of $x$. Integrate it term by term: $\int(3x^2+2x-5)\,dx=x^3+x^2-5x+C$. A rational function is a quotient $P(x)/Q(x)$ of polynomials, with $Q(x)\ne0$. Its antiderivative must be considered on intervals which avoid the denominator's real zeros.

When the numerator degree is at least the denominator degree, perform polynomial division first. For example,

$$
\frac{x^3+1}{x^2+1}=x+\frac{1-x}{x^2+1}.
$$

The remaining fraction is **proper**: its numerator has smaller degree than its denominator. Factoring its denominator over the real numbers leaves linear factors and quadratic factors with no real roots. This real factorization is the basis of the method; it need not have rational coefficients.

## Four factor cases

The “four cases” in the catalogue describe four denominator patterns. A denominator can contain several patterns at once.

| Factor in the denominator | Required partial-fraction terms |
| --- | --- |
| Distinct linear factor $x-a$ | $A/(x-a)$ |
| Repeated linear factor $(x-a)^m$ | $A_1/(x-a)+\cdots+A_m/(x-a)^m$ |
| Distinct irreducible quadratic $q(x)$ | $(Ax+B)/q(x)$ |
| Repeated irreducible quadratic $q(x)^m$ | $(A_1x+B_1)/q(x)+\cdots+(A_mx+B_m)/q(x)^m$ |

Include every power up to the multiplicity, even if some coefficients later become zero. A linear numerator is needed over a quadratic. Replace that numerator by a multiple of $q'$ plus a constant. The derivative part integrates to a logarithm. Complete the square in $q$ to integrate the constant part.

For example, $q=x^2+2x+5=(x+1)^2+4$. Since $3x+1=\tfrac32(2x+2)-2$,

$$
\int\frac{3x+1}{q}\,dx
=\frac32\ln q-\arctan\frac{x+1}{2}+C.
$$

Here $q>0$ for all real $x$, so its logarithm needs no absolute value. For a denominator with real zeros, retain absolute values where needed.

## Repeated quadratic factors

Completing the square and scaling reduces a repeated positive quadratic to $J_m=\int du/(u^2+a^2)^m$, where $a>0$. For $m\ge2$, differentiation of $u/(u^2+a^2)^{m-1}$ yields the reduction

$$
J_m=\frac{u}{2a^2(m-1)(u^2+a^2)^{m-1}}
+\frac{2m-3}{2a^2(m-1)}J_{m-1}.
$$

It ends at $J_1=\arctan(u/a)/a$. For $a=1,m=2$, this gives $J_2=u/[2(1+u^2)]+\arctan u/2$. This explains why the fourth case still has an elementary answer rather than requiring a new special function.

## Worked example: solve the coefficients

Integrate $(x+3)/[(x-1)(x+1)^2]$. Set

$$
\frac{x+3}{(x-1)(x+1)^2}
=\frac A{x-1}+\frac B{x+1}+\frac C{(x+1)^2}.
$$

After multiplication, $x+3=A(x+1)^2+B(x-1)(x+1)+C(x-1)$. Put $x=1$ to get $A=1$, and $x=-1$ to get $C=-1$. The $x^2$ coefficient gives $B=-1$. Thus

$$
\int\frac{x+3}{(x-1)(x+1)^2}\,dx
=\ln|x-1|-\ln|x+1|+\frac1{x+1}+C_0.
$$

The domain has three intervals separated by $-1,1$. Differentiating the answer gives $1/(x-1)-1/(x+1)-1/(x+1)^2$, which combines to the original fraction. Use a different name $C_0$ for the final integration constant so it is not confused with the decomposition coefficient.

## A denominator with both kinds of factor

Consider $1/[x(x^2+1)]$. A complete real decomposition has the shape $A/x+(Bx+C)/(x^2+1)$. Multiplication gives $1=A(x^2+1)+(Bx+C)x$. The constant coefficient gives $A=1$, the linear coefficient gives $C=0$, and the quadratic coefficient gives $B=-1$. Hence

$$
\int\frac{dx}{x(x^2+1)}=\ln|x|-\frac12\ln(x^2+1)+C_0.
$$

The two logarithms arise for different reasons. The first is the simple real pole at zero. The second comes from the derivative $2x$ of a quadratic which is always positive. The decomposition is valid for $x\ne0$, and the answer has independent constants on the two intervals separated by zero. No inverse tangent appears because the constant numerator over the quadratic happened to vanish. A factor pattern determines the allowed terms; it does not require every allowed term to have a nonzero coefficient.

## A practical check

Solve coefficients by substituted roots when convenient, then compare all polynomial coefficients to catch an error. For repeated factors, one root value does not determine every coefficient. Polynomial long division, missing lower powers, and an incorrect numerator degree are the main failure points. Do not use endpoint subtraction across a pole merely because a logarithmic antiderivative exists on either side.

## Practice

1. Integrate $(x^2+2)/(x^2+1)$.
2. Integrate $1/[x(x+1)]$ and state all exclusions.

## Worked answers

1. Divide: $(x^2+2)/(x^2+1)=1+1/(x^2+1)$. Thus the answer is $x+\arctan x+C$, valid on the whole real line.
2. The identity is $1/[x(x+1)]=1/x-1/(x+1)$. Integrate to obtain $\ln|x|-\ln|x+1|+C$. The excluded values are $0,-1$, so use a separate constant on each connected interval if the full domain is considered.
