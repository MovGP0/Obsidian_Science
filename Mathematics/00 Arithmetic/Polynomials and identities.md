---
title: "Polynomials and identities"
catalogue_ids:
  - "1.1.6"
  - "1.1.6.1"
  - "1.1.6.3"
---

> [!TLDR]
> A polynomial combines constant coefficients and non-negative whole-number powers of a variable; identities give equal forms for every permitted value.

## What a polynomial represents

An **expression** is a mathematical phrase, such as $3x+2$. It has a value after you choose $x$. An **equation**, such as $3x+2=8$, states that two values are equal. An equation can be true for only some choices of $x$.

A polynomial in one variable has the form

$$
P(x)=a_nx^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0.
$$

Here $n$ is a non-negative integer, and the coefficients $a_0,\ldots,a_n$ are constants. This lesson uses real coefficients and real inputs. There are only finitely many terms. For example, $4x^3-2x+7$ is a polynomial. The expressions $1/x$, $\sqrt{x}$, and $2^x$ are not polynomials in $x$: their variable occurs in a denominator, under a root, or in an exponent. An irrational constant is allowed: $\sqrt{2}x^2+1$ is a polynomial.

The **degree** is the largest exponent whose coefficient is nonzero. Thus $4x^3-2x+7$ has degree $3$ and leading coefficient $4$. A nonzero constant has degree $0$. The zero polynomial has no degree in our convention. Missing powers have coefficient zero. A polynomial has a value for every real $x$; it has no denominator or square-root restriction.

## Representation as a polynomial

To put an expression in standard polynomial form, remove brackets with the distributive law and collect **like terms**. Like terms have the same variable power. For example, $3x^2$ and $-5x^2$ combine to $-2x^2$, but $3x^2$ and $3x$ do not combine.

Consider

$$
(2x-3)(x+4)-x(x-1).
$$

First distribute each factor:

$$
2x^2+8x-3x-12-(x^2-x).
$$

The minus sign applies to the entire final bracket. Collect terms to obtain

$$
2x^2+5x-12-x^2+x=x^2+6x-12.
$$

The result has degree $2$. As a quick check, at $x=2$ the original expression gives $(1)(6)-2(1)=4$. The collected form gives $4+12-12=4$. One successful check can detect some errors, but it does not prove an identity for every input. The distribution steps provide that proof.

## Special formulas

An **identity** holds for every permitted input. Distributing the brackets gives

$$
\begin{aligned}
(a+b)^2&=a^2+2ab+b^2,\\
(a-b)^2&=a^2-2ab+b^2,\\
(a+b)(a-b)&=a^2-b^2.
\end{aligned}
$$

The first identity has a middle term because $(a+b)(a+b)$ contains both $ab$ and $ba$. In the third identity these two terms have opposite signs and cancel. For positive lengths, Fig. A.expressions.1 gives an area explanation of the first identity. The algebraic proof also works when $a$ or $b$ is negative or zero.

![[arithmetic-expressions-square-area.svg|**Fig. A.expressions.1** A square of side a + b splits into areas a², ab, ab, and b².]]

The corresponding cube identities are

$$
\begin{aligned}
(a+b)^3&=a^3+3a^2b+3ab^2+b^3,\\
(a-b)^3&=a^3-3a^2b+3ab^2-b^3,\\
a^3+b^3&=(a+b)(a^2-ab+b^2),\\
a^3-b^3&=(a-b)(a^2+ab+b^2).
\end{aligned}
$$

You can verify each formula by distribution. For example, multiply $(a+b)^2$ by $(a+b)$ to obtain the first cube formula. These identities let you expand brackets or recognize factors. More general powers are taught in [[The binomial theorem]].

## Use an identity carefully

To expand $(3x-2)^2$, set $a=3x$ and $b=2$:

$$
(3x-2)^2=(3x)^2-2(3x)(2)+2^2=9x^2-12x+4.
$$

The answer is not $9x^2+4$. Squaring a sum or difference is different from squaring its terms separately. Also, $(3x)^2=9x^2$, not $3x^2$. If the highest powers cancel during collection, determine the degree from the final result, not the starting brackets.

## Several variables

Polynomials can also use several variables. For example, $2x^2y-3xy+4$ is a polynomial in $x,y$. The degree of a term is the sum of its variable exponents, so $2x^2y$ has total degree $3$. Like terms must have every variable exponent equal. Thus $2xy+3xy=5xy$, but $2x^2y+3xy^2$ cannot be collected into one term. The same distributive law still applies.

## Practice

1. Write $(x+2)(x-2)+3x^2$ in standard form. Give its degree and leading coefficient.
2. Expand $(2y+3)^2$ and factor $8y^3-27$ with the special formulas.

> [!example]- Worked answers
> 1. The difference-of-squares identity gives $x^2-4+3x^2=4x^2-4$. Its degree is $2$ and its leading coefficient is $4$.
> 2. With $a=2y$ and $b=3$, the square is $4y^2+12y+9$. The cube difference is $(2y)^3-3^3=(2y-3)(4y^2+6y+9)$. Both results hold for every real $y$.
