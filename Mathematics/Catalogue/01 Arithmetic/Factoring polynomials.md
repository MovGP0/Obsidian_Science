---
title: "Factoring polynomials"
catalogue_ids:
  - "1.1.6.2"
---

> [!TLDR]
> Factoring writes a polynomial as a product; first remove common factors, then use grouping, identities, or quadratic methods.

## Factors and the coefficient set

Multiplication turns $3(x+2)$ into $3x+6$. **Factorization** reverses this step. It writes an expression as a product of simpler expressions. A factor is one part of that product. Start with [[Polynomials and identities]] if polynomial degree or distribution is new to you.

Which factors are available depends on the permitted coefficients. For example, $x^2-2$ has no linear factors with rational coefficients, but over the real numbers it equals $(x-\sqrt{2})(x+\sqrt{2})$. Over the reals, $x^2+1$ has no linear factors because a real square cannot be $-1$. This lesson states when rational or real factors are intended. A constant factor can be moved between factors, so factorizations need not look identical.

## Remove a common factor first

In $6x^3-9x^2$, both terms contain $3x^2$:

$$
6x^3-9x^2=3x^2(2x-3).
$$

Divide each term by the proposed common factor to find the bracket. Check by multiplying back. For several terms, choose the greatest common integer divisor of the coefficients and the lowest variable exponent shared by all terms. Do not remove $x$ from a constant term. For example, $x$ is not a common factor of $x^2+1$.

Grouping can expose a factor that is a bracket:

$$
\begin{aligned}
ax+ay+bx+by&=a(x+y)+b(x+y)\\
&=(a+b)(x+y).
\end{aligned}
$$

Group terms so that the bracket is exactly the same, including its signs. For example, $x(x-2)-3(x-2)=(x-3)(x-2)$.

## Factor quadratic expressions

For $x^2+bx+c$, seek numbers $r,s$ with $r+s=b$ and $rs=c$. Then distribution shows

$$
x^2+bx+c=(x+r)(x+s).
$$

For $x^2+x-6$, the numbers $3$ and $-2$ have sum $1$ and product $-6$. Thus the factors are $(x+3)(x-2)$. If the leading coefficient is not $1$, you can split the middle term and group.

For example, factor $6x^2+7x-3$. The product of the leading coefficient and constant is $6(-3)=-18$. The numbers $9$ and $-2$ multiply to $-18$ and add to $7$:

$$
\begin{aligned}
6x^2+7x-3&=6x^2+9x-2x-3\\
&=3x(2x+3)-(2x+3)\\
&=(3x-1)(2x+3).
\end{aligned}
$$

Multiplication gives $6x^2+9x-2x-3$, which confirms the result.

## When integer guessing does not work

For $ax^2+bx+c$ with $a\ne0$, multiply the equation $ax^2+bx+c=0$ by $4a$ and complete the square:

$$
(2ax+b)^2=b^2-4ac.
$$

Write $\Delta=b^2-4ac$, called the **discriminant**. If $\Delta\ge0$, the real roots are $r_{1,2}=(-b\pm\sqrt{\Delta})/(2a)$, and

$$
ax^2+bx+c=a(x-r_1)(x-r_2).
$$

If $\Delta=0$, the factor repeats. If $\Delta<0$, there are no real linear factors. For $x^2-2x-1$, $\Delta=8$, so the factors are $(x-1-\sqrt{2})(x-1+\sqrt{2})$. These factors are real but not rational. If $a=0$, the expression is not quadratic; use its actual degree.

## Factors and zeros

If $P(r)=0$, division by $x-r$ gives zero remainder, so $x-r$ is a factor. The division method appears in [[Rational expressions and polynomial division]]. Conversely, a factor $x-r$ makes the polynomial zero at $r$.

For real numbers, a product is zero only if at least one factor is zero. Therefore $(3x-1)(2x+3)=0$ has solutions $x=1/3$ and $x=-3/2$. Do not divide an equation by a factor that might be zero: this can remove a valid solution. Factoring an expression itself introduces no input restriction; canceling a factor in a fraction is a separate operation that does.

## A practical order of work

First remove a common factor. Next look for a difference of squares, a perfect square, or a cube identity. Then try grouping or a quadratic method. After each step, check whether a remaining factor can split again in your chosen coefficient set. Finally multiply the factors to recover the original expression. A proposed factorization that works at only one selected input is not enough.

## Practice

1. Factor $2x^3-8x$ completely into linear factors over the reals.
2. Factor $x^2-6x+9$ and decide whether $x^2+2x+5$ has real linear factors.

> [!example]- Worked answers
> 1. Remove $2x$ to obtain $2x(x^2-4)$. The difference of squares gives $2x(x-2)(x+2)$. Multiplication returns $2x^3-8x$.
> 2. The first expression is $(x-3)^2$, since $-3-3=-6$ and $(-3)(-3)=9$. For the second, $\Delta=2^2-4(1)(5)=-16<0$, so no real linear factors exist. Indeed, $x^2+2x+5=(x+1)^2+4$ is positive for every real $x$.
