---
title: "Special finite series"
catalogue_ids:
  - "1.2.4"
---

> [!TLDR]
> Sums of integers, odd numbers, squares, and cubes follow algebraic patterns; telescoping sums cancel adjacent contributions.

## What makes a useful pattern?

A finite sum can be correct even when it has no short formula. For certain patterns, however, algebra reduces many additions to a few operations. This article derives four common formulas and one cancellation method. In all formulas below, $n$ is a positive integer. The notation is explained in [[Finite sums and series]].

## Integers and odd numbers

Pairing the first and last terms, as in [[Arithmetic series]], gives

$$
T_n=1+2+\cdots+n=\frac{n(n+1)}2.
$$

The first $n$ positive odd integers are $2k-1$ for $k=1,\ldots,n$. Their last term is $2n-1$, so the same pairing gives

$$
1+3+\cdots+(2n-1)=\frac{n(1+2n-1)}2=n^2.
$$

There is also a square picture behind this rule. Increase a square with side $n-1$ to one with side $n$. The added border has $n^2-(n-1)^2=2n-1$ unit squares. Starting with one square and adding each odd border therefore builds $n^2$ squares. The number of terms is $n$; it is not the last odd number.

## Sum of squares

Write $Q_n=1^2+2^2+\cdots+n^2$. We can derive its formula from differences of cubes. Expansion gives

$$
(k+1)^3-k^3=3k^2+3k+1.
$$

Add this identity for $k=1,\ldots,n$. The left side cancels internally: $(2^3-1^3)+(3^3-2^3)+\cdots+((n+1)^3-n^3)=(n+1)^3-1$. The right side is $3Q_n+3T_n+n$. Hence

$$
\begin{aligned}
3Q_n&=(n+1)^3-1-\frac{3n(n+1)}2-n\\
&=n^3+\frac32n^2+\frac12n,
\end{aligned}
$$

and division by $3$ gives

$$
\boxed{Q_n=\frac{n(n+1)(2n+1)}6}.
$$

The terms are squares of individual integers. This is not the square of $1+2+\cdots+n$. For example, $1^2+2^2=5$, but $(1+2)^2=9$ because the latter includes cross terms.

## Sum of cubes

Let $T_k=k(k+1)/2$ and set $T_0=0$. Calculate

$$
T_k^2-T_{k-1}^2
=\frac{k^2\bigl((k+1)^2-(k-1)^2\bigr)}4
=\frac{k^2(4k)}4=k^3.
$$

Add from $k=1$ through $n$. All intermediate squared triangular numbers cancel. The result is

$$
\boxed{1^3+2^3+\cdots+n^3
=T_n^2=\left(\frac{n(n+1)}2\right)^2}.
$$

This identity is particular to the sum of cubes. It does not say that cubing a sum equals summing the cubes. At $n=3$, the cube sum is $1+8+27=36$, while $(1+2+3)^3=216$.

## Telescoping sums

A **telescoping sum** is a sum that becomes shorter when consecutive terms cancel. It has the pattern

$$
\sum_{k=1}^{n}(b_k-b_{k+1})=b_1-b_{n+1}.
$$

Expand a few terms to see why: $(b_1-b_2)+(b_2-b_3)+\cdots+(b_n-b_{n+1})$. Only the first positive term and the final negative term remain. The square and cube derivations above also use this type of cancellation, with the subtraction in the opposite direction.

Some expressions need a rewrite before cancellation is visible. For positive integers $k$,

$$
\frac1{k(k+1)}=\frac1k-\frac1{k+1},
$$

because the right side has numerator $(k+1)-k=1$ over denominator $k(k+1)$. Therefore $\sum_{k=1}^{n}1/[k(k+1)]=1-1/(n+1)$. The final fraction must remain in a finite sum.

## Worked example: combine known sums

Find $\sum_{k=1}^{5}(2k^2-3k+1)$.

1. Separate it into $2Q_5-3T_5+5$. The constant $1$ occurs five times.
2. Calculate $Q_5=5(6)(11)/6=55$ and $T_5=5(6)/2=15$.
3. Substitute: $2(55)-3(15)+5=110-45+5=70$.
4. Check by expansion: the terms are $0,3,10,21,36$, which total $70$.

A shorter range can be obtained by subtraction. For example, $4^2+5^2+6^2=Q_6-Q_3=91-14=77$. Subtract through $3$, not through $4$, because the fourth term is wanted.

## Practice

1. Find the sum of the first eight positive odd numbers, the first eight positive integers, and their cubes.
2. Find $\sum_{k=2}^{6}1/[k(k+1)]$. Also calculate $3^2+4^2+5^2+6^2$.

## Worked answers

1. The odd sum is $8^2=64$. The integer sum is $T_8=8(9)/2=36$. The cube sum is $T_8^2=36^2=1296$. The last odd term is $15$; the last cubed integer is $8$.
2. Rewrite the fractions as $(1/2-1/3)+\cdots+(1/6-1/7)$. The answer is $1/2-1/7=5/14$. For the squares, subtract the unwanted first two: $Q_6-Q_2=91-5=86$. Direct addition gives $9+16+25+36=86$.
