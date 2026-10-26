---
title: "Combinations"
source_chapter: "C"
source_section: "C.1.2"
source_page: 482
---

> [!TLDR]
> Binomial coefficients count unordered selections and satisfy Pascal's relation and the binomial theorem.

The number of ways to choose $k$ objects from $n$, without regard to order, is the binomial coefficient:

$$
\binom nk=\frac{n!}{k!(n-k)!},
\qquad0\le k\le n.
$$

It counts the subsets with $k$ elements of a set with $n$ elements.

The coefficients satisfy Pascal's relation,

$$
\binom nk=\binom{n-1}{k-1}+\binom{n-1}k,
$$

and the binomial theorem,

$$
(x+y)^n=\sum_{k=0}^n\binom nk x^ky^{n-k}.
$$
