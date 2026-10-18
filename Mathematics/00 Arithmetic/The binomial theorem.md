---
title: "The binomial theorem"
catalogue_ids:
  - "1.1.6.4"
---

> [!TLDR]
> The binomial theorem expands a non-negative integer power of a sum using coefficients that count choices from its factors.

## From squares to higher powers

A **binomial** is a sum of two terms, such as $a+b$. The special identities in [[Polynomials and identities]] cover squares and cubes. The binomial theorem supplies the same method for any non-negative integer exponent $n$. It applies to ordinary real numbers and commuting algebraic expressions. The word commuting means that changing factor order does not change a product, as in $ab=ba$.

To expand $(a+b)^3$, choose $a$ or $b$ from each of its three brackets. Choosing $b$ once gives $baa$, $aba$, or $aab$. All three products equal $a^2b$, so their sum is $3a^2b$. Choosing $b$ twice gives three copies of $ab^2$. Choosing no $b$ gives $a^3$, and choosing three gives $b^3$.

## Count the choices

For a non-negative integer $m$, the **factorial** is $m!=m(m-1)\cdots1$ when $m\ge1$. Set $0!=1$. The number of ways to select $k$ distinct positions from $n$, without regard to order, is

$$
\binom{n}{k}=\frac{n!}{k!(n-k)!},\qquad 0\le k\le n.
$$

The numerator counts ordered selections when divided by $(n-k)!$. Each unordered selection occurs $k!$ times in that count, which explains the second division. The symbol is read “n choose k.” For example, $\binom{4}{2}=4!/(2!2!)=6$.

The **binomial theorem** is

$$
(a+b)^n=\sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^k.
$$

The summation sign means “add the listed expression for $k=0,1,\ldots,n$.” In every term the two exponents add to $n$. The first exponent decreases as the second increases. At $n=0$, the theorem says that the empty product is $1$. In this polynomial formula, exponent-zero factors are interpreted as $1$, including at zero inputs; this convention does not assign a general value to every occurrence of $0^0$ in other contexts.

## Pascal's triangle

The coefficient rows for $n=0,1,2,3,4$ are

$$
\begin{array}{c|ccccc}
n=0&1\\
n=1&1&1\\
n=2&1&2&1\\
n=3&1&3&3&1\\
n=4&1&4&6&4&1
\end{array}
$$

Each row starts and ends with $1$. An interior entry is the sum of the two entries above it. To see why, multiply an existing expansion by $(a+b)$. A term with $k$ factors of $b$ comes from either a previous term with $k$ such factors multiplied by $a$, or a previous term with $k-1$ such factors multiplied by $b$. Thus

$$
\binom{n+1}{k}=\binom{n}{k}+\binom{n}{k-1}.
$$

This gives a practical way to construct coefficients without large factorials.

## Worked example: a difference with coefficients

Expand $(2x-3)^4$. Treat the difference as $a+b$ with $a=2x$ and $b=-3$. The coefficient row is $1,4,6,4,1$:

$$
\begin{aligned}
(2x-3)^4={}&(2x)^4+4(2x)^3(-3)\\
&+6(2x)^2(-3)^2+4(2x)(-3)^3+(-3)^4\\
={}&16x^4-96x^3+216x^2-216x+81.
\end{aligned}
$$

The negative sign belongs inside the power of $b$. This makes successive signs alternate. At $x=0$, both sides give $81$. At $x=1$, the expansion gives $16-96+216-216+81=1$, as does $(2-3)^4$.

If you need only one coefficient, do not expand every term. In $(x+2)^5$, the $x^3$ term requires $5-k=3$, so $k=2$. Its coefficient is $\binom{5}{2}2^2=10(4)=40$.

## Limits and common mistakes

This finite formula assumes $n$ is a non-negative integer. Negative or fractional powers require different methods and sometimes an infinite expansion with restrictions on the input. Do not use this finite rule unchanged in those cases. Also, $(a+b)^n$ generally differs from $a^n+b^n$: the mixed terms matter.

A useful coefficient check comes from setting $a=b=1$. The sum of all coefficients in row $n$ must be $2^n$. For row $4$, $1+4+6+4+1=16=2^4$. This check does not prove that every coefficient is in the correct position, but it can detect a missing or incorrect entry before you use the row in a longer expansion.

## Practice

1. Expand $(x+1)^5$ using the next row of Pascal's triangle.
2. Find the coefficient of $x^2$ in $(3x-1)^4$ without finding the whole expansion.

> [!example]- Worked answers
> 1. Adding adjacent entries of $1,4,6,4,1$ gives $1,5,10,10,5,1$. Therefore $(x+1)^5=x^5+5x^4+10x^3+10x^2+5x+1$.
> 2. The term containing $x^2$ uses two choices of $3x$ and two choices of $-1$. Its coefficient is $\binom{4}{2}3^2(-1)^2=6(9)=54$. Thus the term is $54x^2$.
