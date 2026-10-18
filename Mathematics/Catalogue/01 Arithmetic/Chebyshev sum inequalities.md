---
title: "Chebyshev sum inequalities"
catalogue_ids:
  - "1.4.2.9"
  - "1.4.2.10"
---

> [!TLDR]
> Similarly ordered lists have a mean product at least as large as the product of their means; opposite order reverses this bound.

## Order and corresponding products

Consider two finite real lists $a_1,\ldots,a_n$ and $b_1,\ldots,b_n$, with the same positive integer length $n$. A list is **nondecreasing** if each entry is at least the preceding entry. It is **nonincreasing** if each entry is at most the preceding entry. Equal entries are allowed.

The lists are **similarly ordered** when both are nondecreasing or both are nonincreasing. They are **oppositely ordered** when one is nondecreasing and the other is nonincreasing. These conditions concern the paired positions, not just the values present in each list. Rearranging one list changes which numbers are multiplied together.

The notation $\sum_i$ means to add over $i=1,\ldots,n$. For similarly ordered lists, **Chebyshev's sum inequality** is

$$
\left(\frac{\sum_i a_i}{n}\right)
\left(\frac{\sum_i b_i}{n}\right)
\le\frac{\sum_i a_i b_i}{n}.
$$

For oppositely ordered lists, reverse $\le$ to $\ge$. The product of two means and the mean of paired products are different operations. Chebyshev compares them after the order conditions have been checked. This theorem concerns finite sums. Chebyshev's probability inequality is a different result and is not used here.

## Why order gives the bound

Expansion gives the identity

$$
n\sum_i a_i b_i-\left(\sum_i a_i\right)\left(\sum_i b_i\right)
=\sum_{i<j}(a_i-a_j)(b_i-b_j).
$$

On the right, take each pair of positions once. For similarly ordered lists, each pair of differences has matching signs, so each product is nonnegative. Divide the identity by positive $n^2$ to obtain the inequality. For opposite order, every product is nonpositive, which reverses the conclusion. This proof also shows that negative list entries are allowed; positivity is not needed in this finite-sum form.

Equality occurs when $(a_i-a_j)(b_i-b_j)=0$ for every pair of positions. For ordered lists this means at least one list is constant. To see why, if both lists are nonconstant, their first and last entries have nonzero differences, so their product is nonzero. For $n=1$, both lists are constant and equality always holds.

## Worked example: same and opposite order

Take $a=(1,2,3)$ and $b=(2,4,6)$. Both increase. Their means are $2$ and $4$, so the product of their means is $8$. Their mean paired product is

$$
\frac{1(2)+2(4)+3(6)}{3}=\frac{28}{3}\approx9.333.
$$

The predicted $8\le28/3$ holds. Now reverse only $b$ to $(6,4,2)$. Its mean stays $4$, but the paired-product mean becomes $(6+8+6)/3=20/3$. The lists now have opposite order, and the theorem gives $8\ge20/3$. Sorting is part of the hypothesis, not a cosmetic step.

## Generalized Chebyshev inequality with power means

The catalogue uses the power-mean version named in [Handbook of Mathematics, §1.4.2.11](https://djvu.online/file/GdI2fptBUdLpJ). Let all entries be positive and let $k>0$. Define

$$
M_k(a)=\left(\frac1n\sum_i a_i^k\right)^{1/k}.
$$

For similarly ordered lists,

$$
M_k(a)M_k(b)\le M_k(ab),\qquad
M_k(ab)=\left(\frac1n\sum_i(a_i b_i)^k\right)^{1/k}.
$$

Opposite order reverses the inequality. To derive it, apply the ordinary sum inequality to the lists $a_i^k$ and $b_i^k$. A positive power preserves their order. Next take the positive power $1/k$ of both nonnegative sides. Its positive sign preserves the comparison. This derivation states an explicit valid domain; do not substitute $k=0$ or negative $k$ into it.

At $k=1$ this is the original mean inequality. At $k=2$ it compares quadratic means. For the similarly ordered two-entry lists $a=(1,2)$ and $b=(2,4)$,

$$
M_2(a)M_2(b)=\sqrt{5/2}\sqrt{10}=5,
\qquad M_2(ab)=\sqrt{(4+64)/2}=\sqrt{34}>5.
$$

There is no claim that $M_k(ab)$ is the product of the two means; the theorem supplies a bound between them. Other texts use “generalized Chebyshev” for other results, so state the formula when using this name.

## Practice

1. For $a=(1,3)$ and $b=(5,2)$, compare the product of means with the mean paired product.
2. Use $a=(1,3)$ and $b=(2,2)$ to check both ordinary Chebyshev and its $k=2$ form.

## Worked answers

1. The lists have opposite order. The product of means is $2\cdot3.5=7$, while the mean paired product is $(5+6)/2=5.5$. Thus $7\ge5.5$.
2. The product of means is $2\cdot2=4$, and the paired-product mean is $(2+6)/2=4$. For $k=2$, the left side is $\sqrt5\cdot2=2\sqrt5$, and the right side is $\sqrt{(4+36)/2}=\sqrt{20}=2\sqrt5$. Both are equalities because $b$ is constant.
