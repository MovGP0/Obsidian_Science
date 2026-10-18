---
title: "Hölder and Minkowski inequalities"
catalogue_ids:
  - "1.4.2.11"
  - "1.4.2.12"
---

> [!TLDR]
> Hölder bounds paired products with different powers; Minkowski extends the triangle inequality to lengths calculated from those powers.

## A power-based size for a finite list

Let $x=(x_1,\ldots,x_n)$ be a finite real list, with $n\ge1$. For a real exponent $p\ge1$, define

$$
\|x\|_p=\left(\sum_{i=1}^n|x_i|^p\right)^{1/p}.
$$

The double bars denote a size of the whole list, not the absolute value of an individual entry. For $p=1$, add the absolute values. For $p=2$, square the entries, add, and take the nonnegative square root. Thus $\|(3,-4)\|_1=7$ and $\|(3,-4)\|_2=5$. This definition uses only powers and finite sums; no vector-space background is required.

## Hölder's inequality

Choose $p>1$ and define $q=p/(p-1)$. Then $q>1$ and $1/p+1/q=1$. These are **conjugate exponents**. For two real lists of equal length,

$$
\sum_i|x_i y_i|\le\|x\|_p\|y\|_q.
$$

This is **Hölder's inequality**. At $p=q=2$, it is the absolute-product form of [[Cauchy-Schwarz inequality]]. The condition on $p,q$ is essential; they cannot be chosen independently. At the separate endpoint $p=1$, use $\sum_i|x_i y_i|\le(\sum_i|x_i|)\max_i|y_i|$, rather than divide by $p-1=0$.

Here is the mechanism behind the bound. A basic product estimate, called **Young's inequality**, is

$$
uv\le\frac{u^p}{p}+\frac{v^q}{q}\qquad(u,v\ge0).
$$

It is the weighted arithmetic–geometric mean inequality applied to $u^p,v^q$ with weights $1/p,1/q$. Weighted AM–GM follows for rational weights by repeating the inputs in the ordinary finite-list AM–GM theorem. The real-weight case is its continuous extension: real powers and the two sides change continuously with the weight. This explains the ingredient without requiring calculus.

If $X=\|x\|_p$ and $Y=\|y\|_q$ are positive, apply Young to $u=|x_i|/X$ and $v=|y_i|/Y$. Their power sums are each $1$, so summing gives

$$
\sum_i\frac{|x_i y_i|}{XY}\le\frac1p+\frac1q=1.
$$

Multiply by $XY$. If $X=0$ or $Y=0$, one whole list is zero and the theorem holds directly. For nonzero lists, equality holds when $|x_i|^p/X^p=|y_i|^q/Y^q$ at every position.

## Worked example with unequal exponents

Take $p=3$, so $q=3/2$. Use $x=(1,2)$ and $y=(1,4)$.

1. The product sum is $1(1)+2(4)=9$.
2. $\|x\|_3=(1+8)^{1/3}=9^{1/3}$.
3. $\|y\|_{3/2}=(1+8)^{2/3}=9^{2/3}$.
4. The bound is $9^{1/3}9^{2/3}=9$.

Equality holds because the lists of powers are both $(1,8)$. Equality does not require the original lists to be proportional when the exponents differ.

## Minkowski's inequality

Add two lists position by position: $x+y=(x_1+y_1,\ldots,x_n+y_n)$. For every $p\ge1$, **Minkowski's inequality** states

$$
\|x+y\|_p\le\|x\|_p+\|y\|_p.
$$

For $p=1$, this follows by adding $|x_i+y_i|\le|x_i|+|y_i|$. For $p>1$, put $S=\|x+y\|_p$. Use the scalar triangle inequality and then Hölder on each sum:

$$
S^p\le\sum_i|x_i||x_i+y_i|^{p-1}
+\sum_i|y_i||x_i+y_i|^{p-1}
\le(\|x\|_p+\|y\|_p)S^{p-1}.
$$

The last factor follows because $(p-1)q=p$. If $S>0$, divide by $S^{p-1}$; if $S=0$, the result is immediate. For example, $x=(3,0),y=(0,4),p=2$ gives $5\le3+4$. For $p>1$, equality holds if one list is zero, or if one list is a positive multiple of the other at every position. For $p=1$, it holds when $x_i y_i\ge0$ at every position. The restriction $p\ge1$ matters: at $p=1/2$, $x=(1,0),y=(0,1)$ would give $4\le2$, which is false.

## Practice

1. Find the conjugate exponent to $p=4$. Check Hölder for $x=(1,0)$ and $y=(2,3)$.
2. Check Minkowski for $x=(1,-1),y=(2,2)$ at $p=1$ and $p=2$.

## Worked answers

1. $q=4/3$. The product sum is $2$, and the right side is $1\cdot(2^{4/3}+3^{4/3})^{3/4}\ge2$, since its inner sum is at least $2^{4/3}$. The inequality is strict because the normalized power lists do not agree.
2. $x+y=(3,1)$. At $p=1$, the sizes give $4\le2+4=6$. At $p=2$, they give $\sqrt{10}\le\sqrt2+\sqrt8=3\sqrt2$. Squaring the nonnegative sides confirms $10\le18$.
