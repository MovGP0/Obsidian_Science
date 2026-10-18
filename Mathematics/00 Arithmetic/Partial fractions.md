---
title: "Partial fractions"
catalogue_ids:
  - "1.1.7.3"
---

> [!TLDR]
> Partial fractions write a proper rational expression as a sum of simpler fractions determined by the denominator's factors.

## Reverse the addition of fractions

Adding $1/(x-1)$ and $2/(x+2)$ gives a single denominator $(x-1)(x+2)$. **Partial fraction decomposition** reverses this operation. It replaces one rational expression with a sum whose denominators are powers of simpler polynomial factors. It can reveal the separate contributions of those factors and make later calculations easier.

Use [[Rational expressions and polynomial division]] first. Cancel any shared factors while keeping the original domain. If the fraction is not proper, first separate its polynomial part by division. Decompose only the proper remainder. This lesson uses real coefficients and real inputs. Every displayed decomposition holds away from the original denominator zeros.

## Distinct linear factors

For two different factors $x-a$ and $x-b$, try constants $A,B$:

$$
\frac{N(x)}{(x-a)(x-b)}=\frac{A}{x-a}+\frac{B}{x-b}.
$$

The numerator $N$ must have degree below $2$. Multiply by the common denominator to get a polynomial identity:

$$
N(x)=A(x-b)+B(x-a).
$$

This identity can be evaluated even at $x=a$ or $x=b$, because it no longer contains denominators. Doing so does not define the original fraction at its excluded inputs.

For example, decompose $(3x+5)/[(x+1)(x+2)]$. Set

$$
3x+5=A(x+2)+B(x+1).
$$

At $x=-1$, this gives $2=A$. At $x=-2$, it gives $-1=-B$, so $B=1$. Therefore

$$
\frac{3x+5}{(x+1)(x+2)}=\frac{2}{x+1}+\frac{1}{x+2},\qquad x\ne-1,-2.
$$

Adding the right-hand fractions gives numerator $2(x+2)+(x+1)=3x+5$, which checks the result.

## Repeated linear factors

If $(x-a)^m$ occurs, include one fraction for each power from $1$ to $m$. For example,

$$
\frac{2x+1}{(x-1)^2}=\frac{A}{x-1}+\frac{B}{(x-1)^2}.
$$

After multiplication, $2x+1=A(x-1)+B$. The $x$ coefficient gives $A=2$, and the constant terms give $1=-2+B$, so $B=3$. Omitting the first-power term would make it impossible to match the $x$ term.

For a denominator $(x-1)^2(x+2)$, use three terms: $A/(x-1)$, $B/(x-1)^2$, and $C/(x+2)$. Some coefficients can be zero, but keep the full form until you determine them.

## Quadratic factors that do not split over the reals

A real quadratic $q(x)=ax^2+bx+c$, with $a\ne0$, is **irreducible over the reals** if it cannot be factored into real linear factors. This occurs when $b^2-4ac<0$. The numerator above this factor must be a general linear expression $Bx+C$, not just a constant.

Decompose

$$
\frac{x^2+2}{(x-1)(x^2+1)}=\frac{A}{x-1}+\frac{Bx+C}{x^2+1}.
$$

Multiplication gives

$$
x^2+2=A(x^2+1)+(Bx+C)(x-1).
$$

Expand and compare the coefficients of equal powers:

$$
A+B=1,\qquad C-B=0,\qquad A-C=2.
$$

From $C=B$ and $A=2+B$, the first equation gives $2+2B=1$. Hence $B=C=-1/2$ and $A=3/2$. The decomposition is

$$
\frac{3}{2(x-1)}-\frac{x+1}{2(x^2+1)},\qquad x\ne1.
$$

The factor $x^2+1$ has no real zeros and adds no real exclusions. For a repeated irreducible quadratic $q^m$, include $(B_jx+C_j)/q^j$ for every $j=1,\ldots,m$. For example, denominator $(x^2+1)^2$ needs $(Ax+B)/(x^2+1)+(Cx+D)/(x^2+1)^2$. This follows the same “all powers, numerator degree below factor degree” rule.

For a short repeated-quadratic example, start with

$$
\frac{x^2+2}{(x^2+1)^2}
=\frac{Ax+B}{x^2+1}+\frac{Cx+D}{(x^2+1)^2}.
$$

Multiplication gives $x^2+2=(Ax+B)(x^2+1)+Cx+D$. Comparing the cubic, quadratic, linear, and constant coefficients gives $A=0$, $B=1$, $C=0$, and $D=1$. Hence the result is $1/(x^2+1)+1/(x^2+1)^2$, valid for every real $x$. Both denominator powers were needed.

## A reliable working sequence

Reduce, divide if needed, factor the denominator, choose the complete fraction form, multiply through, then solve for the coefficients. Substitution is efficient at linear-factor zeros. Comparing polynomial coefficients works when substitution does not isolate a term. Finally add the fractions again and retain the original exclusions. A few numerical spot checks alone do not prove the decomposition.

## Practice

1. Decompose $1/[x(x+1)]$.
2. Decompose $(x+3)/(x+1)^2$.
3. Decompose $1/[x(x^2+1)]$.

> [!example]- Worked answers
> 1. Write $1=A(x+1)+Bx$. At $x=0$, $A=1$; the $x$ coefficient gives $B=-1$. Thus $1/x-1/(x+1)$, with $x\ne0,-1$.
> 2. Write $x+3=A(x+1)+B$. Comparing gives $A=1$ and $B=2$. Thus $1/(x+1)+2/(x+1)^2$, with $x\ne-1$.
> 3. Write $1=A(x^2+1)+(Bx+C)x$. The constant term gives $A=1$, the $x$ term gives $C=0$, and the $x^2$ term gives $B=-1$. Thus $1/x-x/(x^2+1)$, with $x\ne0$.
