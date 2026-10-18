---
title: "Rational expressions and polynomial division"
catalogue_ids:
  - "1.1.7"
  - "1.1.7.1"
  - "1.1.7.2"
---

> [!TLDR]
> A rational expression is a quotient of polynomials; cancel common factors with domain restrictions, and use division to separate its polynomial part.

## Rational expressions and their domains

A **rational expression** has the form $P(x)/Q(x)$, where $P,Q$ are polynomials and $Q$ is not the zero polynomial. Its real **domain** is the set of real inputs for which $Q(x)\ne0$. For example, $(x+1)/(x-2)$ is defined for every real $x$ except $2$. A polynomial is also a rational expression: use denominator $1$.

Start from [[Polynomials and identities]] for polynomial notation. The word rational describes the quotient form; it does not say that every output is a rational number. At an irrational input, a rational expression can have an irrational value.

## Reduction to simplest form

Factor the numerator and denominator, then cancel factors that occur in both. Cancellation uses $AB/(AC)=B/C$ when $A\ne0$ and $C\ne0$. It does not permit cancellation of terms in a sum. For example, $(x+2)/(x+3)$ does not reduce to $2/3$.

Consider

$$
R(x)=\frac{x^2-1}{x-1}.
$$

The original denominator excludes $x=1$. Factoring gives

$$
R(x)=\frac{(x-1)(x+1)}{x-1}=x+1,\qquad x\ne1.
$$

The simpler formula has the same values on the original domain. It does not make the original expression defined at $x=1$. As functions with their natural domains, the original fraction and the unrestricted polynomial $x+1$ differ at that input.

![[arithmetic-expressions-cancelled-hole.svg|**Fig. A.expressions.2** The fraction (x² − 1)/(x − 1) follows y = x + 1 but excludes the point (1, 2).]]

In Fig. A.expressions.2 the open circle marks this missing point. To define a new function there, you would have to add a separate rule. It is not part of algebraic cancellation.

## Worked example: simplify with two exclusions

Simplify

$$
\frac{x^2-4}{x^2-x-2}.
$$

Factor both polynomials:

$$
x^2-4=(x-2)(x+2),\qquad x^2-x-2=(x-2)(x+1).
$$

The original exclusions are $x\ne2,-1$. Cancel the common factor $x-2$ to obtain

$$
\frac{x+2}{x+1},\qquad x\ne2,-1.
$$

At $x=0$, both formulas give $2$. At $x=2$, the simplified formula alone would give $4/3$, but the original fraction is undefined. Keep both exclusions in the answer. The systematic common-factor method appears in [[Greatest common divisors of polynomials]].

## Determination of the polynomial part

Polynomial division works like whole-number division. For $Q\ne0$, it produces polynomials $S,R$ such that

$$
P=QS+R,
$$

where $R=0$ or $\deg R<\deg Q$. Therefore, at inputs with $Q(x)\ne0$,

$$
\frac{P}{Q}=S+\frac{R}{Q}.
$$

The quotient $S$ is the **polynomial part**. The remaining fraction is **proper** when its nonzero numerator has smaller degree than its denominator. If $\deg P<\deg Q$, the polynomial part is zero. If $Q$ is a nonzero constant, the whole quotient is polynomial and the remainder is zero.

Divide $2x^3+3x^2-x+5$ by $x+2$:

1. Divide $2x^3$ by $x$ to obtain $2x^2$. Subtract $(x+2)2x^2$ to leave $-x^2-x+5$.
2. Divide $-x^2$ by $x$ to obtain $-x$. Subtract $(x+2)(-x)$ to leave $x+5$.
3. Divide $x$ by $x$ to obtain $1$. Subtract $x+2$ to leave $3$.

Thus

$$
\frac{2x^3+3x^2-x+5}{x+2}=2x^2-x+1+\frac{3}{x+2},\qquad x\ne-2.
$$

Check by multiplying $(x+2)(2x^2-x+1)+3$. The result is the original numerator. Arrange terms in descending powers and insert zero coefficients for missing powers to avoid column errors. Always subtract the full product, including its signs.

To add rational expressions, use a common denominator before collecting numerators. For example, $1/(x-1)+2/(x+1)=[(x+1)+2(x-1)]/[(x-1)(x+1)]=(3x-1)/(x^2-1)$, with $x\ne1,-1$. To divide by a rational expression, multiply by its reciprocal, but also exclude inputs at which that divisor is zero. These restrictions are in addition to all denominator exclusions in the original expressions.

## Practice

1. Reduce $(x^2+3x)/(x^2-9)$ to simplest form and state all original exclusions.
2. Find the polynomial part and remainder of $(x^2+1)/(x-1)$.

> [!example]- Worked answers
> 1. Factor to obtain $x(x+3)/[(x-3)(x+3)]$. The reduced expression is $x/(x-3)$ with $x\ne3,-3$. The exclusion $-3$ remains after cancellation.
> 2. Divide: $x^2+1=(x-1)(x+1)+2$. Thus the result is $x+1+2/(x-1)$ for $x\ne1$. The polynomial part is $x+1$, and the remainder is $2$.
