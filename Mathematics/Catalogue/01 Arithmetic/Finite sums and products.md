---
title: "Finite sums and products"
catalogue_ids:
  - "1.1.3"
  - "1.1.3.1"
  - "1.1.3.2"
---

> [!TLDR]
> A finite sum adds a specified list of terms, while a finite product multiplies its factors; an index states exactly which entries to use.

## Sums and products

Addition and multiplication combine numbers in different ways. In $4+7+2=13$, the numbers being added are **terms**, and the result is a **sum**. In $4\times7\times2=56$, the numbers being multiplied are **factors**, and the result is a **product**. A factor can itself contain a sum: in $3(2+5)$, the two factors are $3$ and $(2+5)$.

This article uses finite lists of real numbers. Real numbers include fractions, negative numbers, and numbers such as $\sqrt2$. The rules in [[02.01 Arithmetic rules]] explain the order of operations. A finite list has a last entry. An infinite sum requires a separate meaning and is outside this lesson.

## Sums

A subscript labels an entry. For example, $a_1=4$, $a_2=7$, and $a_3=2$ form a list. The subscript is not a multiplier: $a_3$ means the third entry, not $3a$.

The capital Greek letter sigma, $\sum$, is an instruction to add:

$$
\sum_{k=1}^{3}a_k=a_1+a_2+a_3=4+7+2=13.
$$

Here $k$ is the **index**. The lower bound says to start at $k=1$, and the upper bound says to stop at $k=3$, including both ends. Increase the index by one at each step. A formula can supply the terms:

$$
\sum_{k=2}^{5}(2k-1)=3+5+7+9=24.
$$

There are $5-2+1=4$ terms. More generally, integer bounds $m\le n$ give $n-m+1$ terms. The index has a local role: replacing $k$ by $j$ throughout the same sum changes nothing. It does not mean that a free variable outside the sum can also change.

Addition is associative and commutative, so regrouping and reordering a finite sum do not change its value. The distributive law gives

$$
\sum_{k=m}^{n}(a_k+b_k)
=\sum_{k=m}^{n}a_k+\sum_{k=m}^{n}b_k,
\qquad
\sum_{k=m}^{n}ca_k=c\sum_{k=m}^{n}a_k.
$$

The second rule requires that $c$ does not depend on $k$. A constant repeated $n-m+1$ times gives $\sum_{k=m}^{n}c=(n-m+1)c$.

For the first $n$ positive integers, write the sum once forwards and once backwards. Each pair totals $n+1$, and there are $n$ pairs. Therefore twice the original sum is $n(n+1)$:

$$
1+2+\cdots+n=\frac{n(n+1)}2.
$$

## Products

The capital Greek letter pi, $\prod$, is an instruction to multiply:

$$
\prod_{k=1}^{3}a_k=a_1a_2a_3=4\times7\times2=56.
$$

The bounds work as they do for a sum. For example, $\prod_{k=2}^{4}(k+1)=3\times4\times5=60$. A zero factor makes the whole product zero. An even number of negative factors gives a positive product, and an odd number gives a negative product, provided that no factor is zero.

![[arithmetic-operations-finite-notation.svg|**Fig. A.operations.1** The same three entries give 13 when added and 56 when multiplied. The lower and upper bounds select the entries.]]

The two rows in Fig. A.operations.1 use the same index range. Changing the operation changes the result. Repeating a constant factor gives $\prod_{k=1}^{n}c=c^n$, where $n$ is a positive integer. This connects products with [[Powers and exponent rules]]. Also, $1\times2\times\cdots\times n$ is written $n!$, read “$n$ factorial”. Thus $4!=24$.

Products can be regrouped, but multiplication does not distribute into a sum in the same way as addition:

$$
\prod_{k=1}^{2}(a_k+b_k)
=(a_1+b_1)(a_2+b_2).
$$

Expansion gives four terms, not just $a_1a_2+b_1b_2$.

## Empty ranges and a worked example

When a range contains no entries, the **empty sum** is defined as $0$ and the **empty product** as $1$. These conventions preserve the effect of adding or removing an empty part of a list. In particular, $0!=1$. State this convention when a formula can have an empty range.

Calculate $\sum_{k=1}^{4}(3k-2)$ and $\prod_{k=1}^{4}(3k-2)$. First substitute each allowed index: the entries are $1,4,7,10$. Next add: $1+4+7+10=22$. For the product, multiply in steps: $1\times4=4$, $4\times7=28$, and $28\times10=280$. Writing the entries first makes the two instructions easy to check.

## Practice

1. Expand and calculate $\sum_{j=0}^{3}(j^2+1)$ and $\prod_{j=0}^{3}(j^2+1)$.
2. Find $\sum_{k=1}^{10}2k$ and $\prod_{k=1}^{5}2$ without listing every entry.

## Worked answers

1. The entries are $1,2,5,10$. Their sum is $1+2+5+10=18$, and their product is $1\times2\times5\times10=100$. The lower bound includes zero, so there are four entries.
2. Factor the constant $2$ out of the sum: $2(1+\cdots+10)=2(10\times11/2)=110$. The product contains five factors of $2$, so it equals $2^5=32$.
