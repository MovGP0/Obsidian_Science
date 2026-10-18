---
title: "Algebraic expressions and their types"
catalogue_ids:
  - "1.1.5"
  - "1.1.5.1"
  - "1.1.5.2"
---

> [!TLDR]
> An algebraic expression combines numbers and variables with arithmetic operations and roots; its structure determines its type and allowed inputs.

## Definitions

An **expression** is a mathematical calculation written with numbers, variables, and operations. For example, $3x^2-2x+5$ is an expression. A **variable** is a symbol whose value can change. A **constant** has a fixed value in the calculation. A **coefficient** is a number that multiplies a variable part: the coefficient of $x^2$ here is $3$.

An **equation** states that two expressions are equal, such as $3x+2=11$. An expression alone does not assert an equality and has no solution set. You can evaluate it, simplify it, or use it as one side of an equation. Solving an equation means finding the allowed variable values that make the statement true.

At this level, an **algebraic expression** is formed from numbers and variables by a finite number of additions, subtractions, multiplications, divisions, and root operations. Integer and rational powers fit these operations. Expressions such as $\log x$, $\sin x$, and $2^x$ are useful mathematical expressions, but are not algebraic expressions under this definition. A polynomial may still have an irrational fixed coefficient, such as $\sqrt2 x+1$; it is the variable's role that determines the classification.

## Terms, factors, and evaluation

Separate terms at addition or subtraction signs outside brackets. Thus $3x^2-2x+5$ has the terms $3x^2$, $-2x$, and $5$. Include a minus sign in the following term. A **factor** is part of a product. In $3x(x+2)$, the factors are $3$, $x$, and $(x+2)$. The plus sign inside the bracket does not split the whole expression into two outer terms.

To evaluate, replace every occurrence of a variable by its value. Use brackets for a negative replacement. For $E(x)=3x^2-2x+5$ at $x=-2$,

$$
E(-2)=3(-2)^2-2(-2)+5=12+4+5=21.
$$

The notation $E(x)$ names the expression's value as a function of $x$. It is not multiplication of $E$ by $x$. See [[03.01 Function definitions]] for functions after the present lesson.

## Classification of algebraic expressions

A **polynomial** in one variable is a finite sum of terms $a_kx^k$, where each $a_k$ is a constant and each exponent $k$ is a nonnegative integer. Examples include $5$, $x$, and $2x^3-x+7$. A nonzero term of this form is a **monomial**. After like terms are collected, a polynomial with two nonzero terms is a **binomial**, and one with three is a **trinomial**. These names count terms, not powers.

The **degree** of a nonzero polynomial in one variable is the largest exponent with a nonzero coefficient. Thus $2x^3-x+7$ has degree $3$, while a nonzero constant has degree $0$. The zero polynomial has no degree in this article's convention. For several variables, the degree of a monomial is the sum of its variable exponents: $4x^2y^3$ has total degree $5$.

A **rational expression** is a quotient of polynomials with a denominator that is not the zero polynomial. Examples are $(x+1)/(x-2)$ and $1/x=x^{-1}$. Every polynomial is rational because it can be written over denominator $1$. Some elementary books reserve “fractional rational expression” for a quotient that has a variable in its denominator. State which convention is used when this matters.

An **irrational algebraic expression**, in the elementary classification, has a variable under a root that cannot be removed by the stated domain rules. Examples are $\sqrt{x+1}$ and $\sqrt[3]x$. The word “irrational” here describes the expression's structure. It does not mean that every numerical value is irrational: $\sqrt{x+1}=2$ at $x=3$.

| Expression | Classification | Real input restriction |
| --- | --- | --- |
| $4x^2-3x+1$ | Polynomial; trinomial; degree $2$ | None |
| $7x^2y$ | Monomial; total degree $3$ | None |
| $(x+1)/(x-2)$ | Rational expression | $x\ne2$ |
| $\sqrt{x+1}$ | Irrational algebraic expression | $x\ge-1$ |
| $2^x$ | Exponential, not algebraic in $x$ | None |

## Domains and equivalent forms

The **domain** is the set of permitted variable values. In real arithmetic, a denominator must be nonzero, an even root needs a nonnegative radicand, and an even root in a denominator needs a strictly positive radicand. The polynomial examples above permit all real inputs. The expression $1/\sqrt{x-1}$ requires $x>1$.

Classification can depend on simplification and domain. For example, $\sqrt{x^2}=|x|$ is not simply $x$ over all real inputs. Also, $(x^2-1)/(x-1)$ equals $x+1$ only for $x\ne1$. The shorter polynomial formula does not restore the excluded value of the original expression.

## Worked example: collect, classify, and evaluate

Consider $A(x)=2x^2+3x-5x^2+7-x$. First collect like terms, which have identical variable powers: $2x^2-5x^2=-3x^2$ and $3x-x=2x$. Therefore $A(x)=-3x^2+2x+7$. It is a degree-two polynomial and a trinomial. Its domain is all real numbers. At $x=-1$, its value is $-3(1)-2+7=2$.

For $B(x)=(x^2-4)/(x-2)$, first exclude $x=2$. Factor the numerator: $x^2-4=(x-2)(x+2)$. For allowed inputs, cancel the nonzero factor to obtain $B(x)=x+2$. The original is rational and agrees with a polynomial on its restricted domain. The procedures continue in [[02.02 Equivalent expressions]] and [[02.03 Rational expressions]].

## Practice

1. Collect and classify $3x^3-2x+4-x^3+2x$. State its degree and evaluate at $x=-2$.
2. Classify $\sqrt{2x+6}$ and $(x+3)/(x^2-9)$, and state their real domains.

## Worked answers

1. Like terms give $2x^3+4$. It is a binomial polynomial of degree $3$. Substitution gives $2(-2)^3+4=-16+4=-12$.
2. The first is an irrational algebraic expression. Its radicand requires $2x+6\ge0$, so $x\ge-3$. The second is rational. Since $x^2-9=(x-3)(x+3)$, it excludes $x=3$ and $x=-3$. Cancellation to $1/(x-3)$ does not remove the original exclusion at $-3$.
