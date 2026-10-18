---
title: "Bernoulli and binomial inequalities"
catalogue_ids:
  - "1.4.2.6"
  - "1.4.2.7"
---

> [!TLDR]
> Bernoulli bounds an integer power by a linear expression; the binomial inequality bounds a product by a sum of squares.

## Bernoulli's inequality

For a real number $u\ge-1$ and an integer $n\ge1$,

$$
(1+u)^n\ge1+nu.
$$

The base $1+u$ is nonnegative. The right-hand side is often easier to calculate than the power. Equality holds if $u=0$ or $n=1$. For $n>1$ and $u\ne0$, the comparison is strict, including the endpoint $u=-1$.

For a positive increment $u$, repeated multiplication produces at least the increase $nu$. For a negative increment between $-1$ and $0$, the right-hand side may be negative while the left-hand side stays nonnegative. The statement is still correct, although the lower bound can then be unhelpful. A bound need not be a close approximation.

For instance, $1.02^{10}\ge1+10(0.02)=1.2$. This guarantees a lower bound; it does not state that the power equals $1.2$. For $u=-0.1,n=3$, Bernoulli gives $0.9^3\ge0.7$. Direct calculation gives $0.729$, which confirms the bound.

## Why the bound holds

The argument uses **mathematical induction**, which proves a statement for every positive integer by a starting case and a repeatable step. At $n=1$, both sides equal $1+u$.

Assume the claim holds for $n=k$. Multiply it by $1+u\ge0$; this preserves a non-strict inequality. Then

$$
(1+u)^{k+1}\ge(1+ku)(1+u)
=1+(k+1)u+ku^2\ge1+(k+1)u.
$$

This proves the next case. Starting with $1$ therefore proves $2$, then $3$, and so on. If $n\ge2$ and $u\ne0$, the step from $k=1$ gives a positive added term $u^2$. For $u>-1$ later multiplication preserves strictness. At $u=-1$, direct substitution gives $0>1-n$ for $n>1$.

Do not use this proof for $u<-1$ because multiplication by $1+u$ would reverse the comparison. For a noninteger exponent, other versions exist, but they need separate conditions. This article uses only the integer form just proved.

## Binomial inequality

The word **binomial** means an expression with two terms. Here the catalogue follows the [Handbook of Mathematics, §1.4.2.8](https://djvu.online/file/GdI2fptBUdLpJ), which calls the following product bound the binomial inequality:

$$
|ab|\le\frac{a^2+b^2}{2}\qquad(a,b\in\mathbb R).
$$

It is distinct from the binomial theorem for expanding $(a+b)^n$. To derive the bound, expand a square:

$$
(|a|-|b|)^2=a^2+b^2-2|ab|\ge0.
$$

Move the last term to the other side and divide by positive $2$. Equality holds exactly when $|a|=|b|$, which permits both $a=b$ and $a=-b$. There are no positivity restrictions on $a,b$ themselves because the absolute values and squares handle their signs.

The same result gives $-\tfrac12(a^2+b^2)\le ab\le\tfrac12(a^2+b^2)$. It also bounds a square of a sum:

$$
(a+b)^2=a^2+2ab+b^2\le2(a^2+b^2).
$$

Unlike the product bound, equality in this final inequality requires $a=b$. Negative $ab$ makes the sum smaller and cannot give the positive extreme unless both are zero.

## Worked example: a bound with an adjustable factor

Suppose you want to control $|xy|$ while allowing a different weight on each square. For any $t>0$, substitute $a=\sqrt t\,x$ and $b=y/\sqrt t$ into the binomial inequality. The product is still $xy$, so

$$
|xy|\le\frac{t x^2+y^2/t}{2}.
$$

For $x=2,y=6,t=3$, the right side is $(12+12)/2=12$, exactly $|xy|$. The equality condition $\sqrt t|x|=|y|/\sqrt t$ explains why this weight is exact. The restriction $t>0$ ensures that the square roots are real and the divisor is nonzero.

## Practice

1. Use Bernoulli to bound $0.98^5$ from below, then compare with $0.98^2$ calculated exactly.
2. Prove $3|xy|\le(9x^2+y^2)/2$, and state its equality condition.

## Worked answers

1. With $u=-0.02,n=5$, the lower bound is $1-0.10=0.90$. For the separate case $n=2$, Bernoulli gives $0.98^2\ge0.96$, and exact multiplication gives $0.9604$. Neither bound is an equality because $u\ne0,n>1$.
2. Apply the binomial inequality to $a=3x,b=y$. Its left side is $3|xy|$ and its right side is $(9x^2+y^2)/2$. Equality holds when $3|x|=|y|$.
