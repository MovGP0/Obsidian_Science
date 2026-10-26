---
title: "Permutations"
source_chapter: "C"
source_section: "C.1.1"
source_page: 481
---

> [!TLDR]
> Factorials count arrangements of distinct objects; dividing by repeated-object factorials removes equivalent arrangements.

The number of permutations of $n$ distinct objects, or the number of ways to arrange them in order, is

$$
P_n=n!=n(n-1)\cdots2\cdot1.
$$

Now suppose there are $n_1$ identical objects of the first kind, $n_2$ of the second, and so on up to $n_k$ of the kth kind, with $\sum_i n_i=n$.

The number of distinct arrangements is the multinomial coefficient:

$$
\binom{n}{n_1,n_2,\ldots,n_k}
=\frac{n!}{n_1!n_2!\cdots n_k!}.
$$
