---
title: "Cauchy–Schwarz inequality"
catalogue_ids:
  - "1.4.2.8"
---

> [!TLDR]
> Cauchy–Schwarz bounds a sum of pairwise products by the square roots of two sums of squares.

## Lists and sums

Let $a_1,\ldots,a_n$ and $b_1,\ldots,b_n$ be two lists of real numbers of the same finite length $n\ge1$. The index $i$ labels positions. The notation $\sum_{i=1}^n a_i b_i$ means $a_1b_1+\cdots+a_nb_n$: multiply corresponding entries, then add. It is not the product of the two separate sums.

The **Cauchy–Schwarz inequality** states

$$
\left|\sum_{i=1}^n a_i b_i\right|
\le\sqrt{\sum_{i=1}^n a_i^2}\sqrt{\sum_{i=1}^n b_i^2}.
$$

All square roots here are nonnegative. Both lists may include negative entries and zeros. A stronger-looking but equally valid useful version is

$$
\sum_{i=1}^n|a_i b_i|
\le\sqrt{\sum_{i=1}^n a_i^2}\sqrt{\sum_{i=1}^n b_i^2}.
$$

To obtain this version, apply the first one to the nonnegative lists $|a_i|$ and $|b_i|$. The triangle inequality then bounds the absolute value of the signed sum by this sum of absolute products.

## Derivation from squares

For two entries, expansion gives

$$
(a_1^2+a_2^2)(b_1^2+b_2^2)-(a_1b_1+a_2b_2)^2
=(a_1b_2-a_2b_1)^2\ge0.
$$

The same pattern works for any finite $n$:

$$
\left(\sum_i a_i^2\right)\left(\sum_i b_i^2\right)
-\left(\sum_i a_i b_i\right)^2
=\sum_{i<j}(a_i b_j-a_j b_i)^2\ge0.
$$

The notation $i<j$ means that each pair of different positions is used once. Expand a term on the right to see its two square products and its cross term. Taken over all pairs, these match the expansion on the left. Each square is nonnegative, so the entire difference is nonnegative. Take nonnegative square roots to obtain Cauchy–Schwarz. No assumption about the signs of the original entries was needed.

Equality holds when all these squares vanish. If either list is all zero, equality is automatic. Otherwise equality holds exactly when the lists are **proportional**: there is one real number $t$ with $a_i=t b_i$ at every position, after choosing the nonzero list as the reference. This formulation handles zeros safely. Ratios such as $a_i/b_i$ are unsuitable if some $b_i$ is zero.

For the version with $\sum|a_i b_i|$, equality instead requires proportional absolute-value lists. Their signs need not agree. Keep these two equality conditions separate.

## Worked example: signed entries

Take $a=(1,2,-2)$ and $b=(3,0,4)$.

1. The paired-product sum is $1(3)+2(0)+(-2)(4)=-5$.
2. Its absolute value is $5$.
3. The square sums are $1+4+4=9$ and $9+0+16=25$.
4. Their square-root product is $3\cdot5=15$.

Thus $5\le15$. The sum of the absolute products is $3+0+8=11$, which also lies below $15$. The lists are not proportional, so neither comparison is an equality.

## A bound without individual values

If $x,y,z$ are real and $x^2+y^2+z^2=12$, apply Cauchy–Schwarz to $(x,y,z)$ and $(1,1,1)$:

$$
|x+y+z|\le\sqrt{12}\sqrt3=6.
$$

Therefore $-6\le x+y+z\le6$. The upper endpoint is reached at $(2,2,2)$, and the lower endpoint at $(-2,-2,-2)$. These examples also verify the equality condition. More generally, using a list of $n$ ones proves that the absolute arithmetic mean is at most the quadratic mean, as in [[Inequalities between means]].

A frequent mistake is to omit the outer square or absolute value in the theorem and then square an inequality with an unknown sign. Use the nonnegative form above so that taking roots is valid. Another mistake is to add square roots term by term: $\sqrt{a_1^2+a_2^2}$ generally differs from $|a_1|+|a_2|$.

## Practice

1. Find an upper bound on $|2x-3y|$ when $x^2+y^2=5$. Give a pair that reaches it.
2. Check Cauchy–Schwarz for $a=(2,-4)$ and $b=(-1,2)$, including equality.

## Worked answers

1. Use lists $(2,-3)$ and $(x,y)$. The bound is $\sqrt{13}\sqrt5=\sqrt{65}$. Set $(x,y)=\sqrt{5/13}(2,-3)$. Its square sum is $5$, and its paired sum is $13\sqrt{5/13}=\sqrt{65}$.
2. The paired sum is $-2-8=-10$. The root product is $\sqrt{20}\sqrt5=10$. Equality holds because $a=-2b$.
