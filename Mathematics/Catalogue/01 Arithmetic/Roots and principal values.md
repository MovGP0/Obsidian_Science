---
title: "Roots and principal values"
catalogue_ids:
  - "1.1.4.2"
---

> [!TLDR]
> A root reverses an integer power; an even root symbol selects the nonnegative real value and requires a nonnegative argument.

## What a root asks

The equation $3^2=9$ says that the square of $3$ is $9$. Reversing this question gives the square root $\sqrt9=3$. The symbol $\sqrt{\phantom a}$ is a **radical sign**. The number or expression under it is the **radicand**. The small integer in $\sqrt[n]{a}$ is the **index** of the root. When it is absent, the index is $2$.

For a positive integer $n$, an $n$th root of $a$ is a number $r$ for which $r^n=a$. Index $1$ gives $\sqrt[1]{a}=a$ and is seldom written. The important cases start at $n=2$. Review [[Powers and exponent rules]] if integer powers are not familiar.

## Even roots and principal values

For a real number $r$, an even power $r^{2k}$ is nonnegative. Thus an even root of a negative number has no real value. For $a\ge0$, the notation $\sqrt[2k]{a}$ selects the unique **nonnegative** root, called the principal root.

There is a difference between an expression and an equation. The expression $\sqrt{25}$ has the single value $5$. The equation $x^2=25$ has two solutions, $x=5$ and $x=-5$, since both squares equal $25$. Write $x=\pm5$ for those two solutions. Do not write $\sqrt{25}=\pm5$. For $x^2=0$, the only solution is $x=0$.

The **absolute value** $|x|$ is the distance of $x$ from zero, so it is $x$ when $x\ge0$ and $-x$ when $x<0$. It follows that

$$
\sqrt{x^2}=|x|.
$$

For example, $\sqrt{(-7)^2}=7$, not $-7$. More generally, $\sqrt[2k]{x^{2k}}=|x|$. These formulas preserve the required nonnegative output.

## Odd roots

Odd powers preserve the sign of a real number. Each real $a$ has exactly one real odd root. For example, $\sqrt[3]{-27}=-3$ because $(-3)^3=-27$. Consequently, $\sqrt[3]{x^3}=x$ for every real $x$. There is no absolute value in this odd-root identity.

If a question asks for all complex roots, there can be further answers. This article uses only real roots. Complex roots are treated later in [[06.07 Roots]]; that note assumes complex-number background and is not a prerequisite here.

## Simplify roots with valid rules

For $a,b\ge0$, multiplication of principal square roots gives

$$
\sqrt{ab}=\sqrt a\sqrt b.
$$

To see why, the right side is nonnegative, and its square is $ab$. It therefore is the principal root on the left. Also, $\sqrt{a/b}=\sqrt a/\sqrt b$ when $a\ge0$ and $b>0$. The positive denominator restriction avoids division by zero.

Extract a square factor to simplify a root. Since $72=36\times2$,

$$
\sqrt{72}=\sqrt{36}\sqrt2=6\sqrt2.
$$

Like radical terms can be added: $6\sqrt2+3\sqrt2=9\sqrt2$. The radicands must match after simplification. In general, $\sqrt{a+b}\ne\sqrt a+\sqrt b$. For example, $\sqrt{9+16}=5$, whereas $3+4=7$. Also, do not use the product rule on two negative radicands in real arithmetic.

For odd roots, the corresponding product rule works for all real radicands, and the quotient rule requires a nonzero denominator. For example, $\sqrt[3]{-16}=\sqrt[3]{-8\times2}=-2\sqrt[3]2$.

## Worked example: simplify and check a domain

Simplify $\sqrt{50}+\sqrt8-\sqrt{18}$. First extract square factors:

$$
\sqrt{50}=5\sqrt2,\qquad \sqrt8=2\sqrt2,
\qquad \sqrt{18}=3\sqrt2.
$$

Now collect the common radical: $(5+2-3)\sqrt2=4\sqrt2$. The exact answer is $4\sqrt2$. A decimal value, about $5.657$, is an approximation.

Next consider $F(x)=\sqrt{x-2}/\sqrt{5-x}$. The numerator requires $x-2\ge0$, so $x\ge2$. The denominator must be defined and nonzero, so $5-x>0$, or $x<5$. The **domain**, which is the set of allowed inputs, is therefore $2\le x<5$. At $x=2$, the value is zero. At $x=5$, the denominator is zero and the expression is undefined.

For solving equations, squaring can introduce an answer that fails the original sign requirement. Always check candidates in the original equation. The method is developed in [[02.08 Checking solutions]].

## Practice

1. Simplify $\sqrt{48}-\sqrt{12}$ and $\sqrt{9t^2}$ for real $t$.
2. Calculate $\sqrt[3]{-125}$ and solve $u^4=16$ over the real numbers. State the real domain of $\sqrt{3-x}$.

## Worked answers

1. Extract squares: $\sqrt{48}=4\sqrt3$ and $\sqrt{12}=2\sqrt3$. The difference is $2\sqrt3$. Also, $\sqrt{9t^2}=3|t|$, since the principal root cannot be negative.
2. The cube root is $-5$. The fourth-power equation has the two real solutions $u=2$ and $u=-2$, both verified by raising to the fourth power. The root expression requires $3-x\ge0$, so its domain is $x\le3$.
