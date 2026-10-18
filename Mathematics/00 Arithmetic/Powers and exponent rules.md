---
title: "Powers and exponent rules"
catalogue_ids:
  - "1.1.4"
  - "1.1.4.1"
---

> [!TLDR]
> Powers describe repeated multiplication; their exponent rules extend to zero, negative, and fractional exponents only with the correct restrictions.

## Powers, roots, and logarithms

The equation $2^3=8$ connects three numbers. A power calculates the result from the base $2$ and exponent $3$. A root can recover the positive base: $\sqrt[3]{8}=2$. A logarithm can recover the exponent: $\log_2 8=3$. These operations answer different questions about the same relationship.

Start here with powers. Continue with [[Roots and principal values]] and [[Logarithms and their bases]] for the two inverse questions. All calculations in this article use real numbers unless stated otherwise.

## Positive integer exponents

For a positive integer $n$, the **power** $a^n$ is a product of $n$ copies of the **base** $a$. The number $n$ is the **exponent**. Thus $5^3=5\times5\times5=125$, and $a^1=a$. An exponent is not an ordinary multiplier: $5^3\ne5\times3$.

The expression $a^2$ is read “$a$ squared”, and $a^3$ is read “$a$ cubed”. A negative base needs brackets. Since multiplication acts after the power, $-3^2=-(3^2)=-9$, whereas $(-3)^2=(-3)(-3)=9$. An even positive exponent makes a negative base positive; an odd positive exponent keeps it negative.

## Derive the exponent rules

For positive integers $m,n$, multiplying $a^m$ by $a^n$ joins two lists of factors. There are $m+n$ factors in all. Raising $a^m$ to the power $n$ creates $n$ groups of $m$ factors. This gives

$$
a^ma^n=a^{m+n},\qquad (a^m)^n=a^{mn}.
$$

For example, $2^3\times2^4=2^7=128$ and $(2^3)^4=2^{12}=4096$. The first rule needs the same base. In $2^3\times3^4$, the bases and exponents both differ, so neither rule combines the powers into a single power in that way.

In $(ab)^n$, reorder the finite product to group the copies of $a$ and $b$. Thus $(ab)^n=a^nb^n$. Similarly, $(a/b)^n=a^n/b^n$ when $b\ne0$. These rules concern products and quotients. They do not give $(a+b)^n=a^n+b^n$. For example, $(2+3)^2=25$, but $2^2+3^2=13$.

## Zero and negative exponents

For $a\ne0$, cancellation gives $a^m/a^m=1$. To preserve the exponent subtraction rule, define $a^0=1$. More generally,

$$
\frac{a^m}{a^n}=a^{m-n},\qquad
a^{-n}=\frac1{a^n}\quad(a\ne0).
$$

For example, $3^{-2}=1/9$. A negative exponent changes to a reciprocal; it does not make the result negative. With these definitions, the exponent laws hold for integer exponents whenever every expression is defined. A zero base is allowed for positive integer exponents, giving $0^n=0$. A negative power of zero would divide by zero and is undefined. This article leaves $0^0$ undefined.

## Fractional and real exponents

For $a>0$, an integer $m$, and a positive integer $n$, define

$$
a^{m/n}=(\sqrt[n]{a})^m.
$$

For example, $27^{2/3}=(\sqrt[3]{27})^2=3^2=9$. The root is taken before the integer power in this definition. Equivalent fractions give the same value for a positive base, and the exponent laws continue to hold.

For $a=0$, positive rational powers can be defined as zero, but zero and negative exponents remain separate cases. For a negative base, reduce a rational exponent to lowest terms first. A real value exists under this convention if its denominator is odd: $(-8)^{1/3}=-2$, but $(-8)^{1/2}$ has no real value. Exponent laws can fail if applied without their positive-base conditions: $((-1)^2)^{1/2}=1$ differs from $(-1)^{2(1/2)}=-1$.

For a positive base, powers also have real exponents such as $2^{\sqrt2}$. They can be approximated with nearby rational exponents. A precise construction belongs to later analysis. A calculator gives $2^{\sqrt2}\approx2.6651$. Keep a positive base when using the general real-exponent laws.

## Worked example

Simplify $(2^5\times2^{-3})/2^{-1}$. First add the numerator exponents: $2^{5+(-3)}=2^2$. Then subtract the denominator exponent: $2^{2-(-1)}=2^3=8$. As an independent check, the original values give $(32\times1/8)/(1/2)=4/(1/2)=8$.

For $(16/81)^{-3/4}$, first take the fourth root: $(16/81)^{1/4}=2/3$. Then apply exponent $-3$: $(2/3)^{-3}=(3/2)^3=27/8$. All bases are positive, so both steps are valid.

## Practice

1. Calculate $-2^4$, $(-2)^4$, $(-2)^3$, and $2^{-4}$.
2. Simplify $x^3x^{-5}$ and $(x^2)^3/x^4$ for $x\ne0$. Calculate $64^{2/3}$.

## Worked answers

1. The values are $-16$, $16$, $-8$, and $1/16$. Brackets determine whether the minus sign belongs to the base; the negative exponent gives a reciprocal.
2. Add exponents in the first expression to obtain $x^{-2}=1/x^2$. Multiply exponents in the second numerator, then subtract: $x^{6-4}=x^2$. The original restrictions $x\ne0$ remain. Finally, $\sqrt[3]{64}=4$, so $64^{2/3}=4^2=16$.
