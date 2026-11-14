---
title: "Combinations"
source_chapter: "C"
source_section: "C.1.2"
source_page: 482
---

> [!TLDR]
> Binomial coefficients count unordered selections and satisfy Pascal's relation and the binomial theorem.

Take a set of $n$ distinct objects and select $k$ of them without replacement, with $n$ and $k$ integers. Start with ordered selections: the first choice has $n$ possibilities, the next has $n-1$, until $k$ objects have been selected. Each unordered subset appears $k!$ times in this list, so division removes the order information.

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

For Pascal's relation, distinguish one of the $n$ objects. A selected subset either contains it, leaving $k-1$ choices from the other $n-1$, or excludes it, leaving $k$ choices. These two cases are disjoint. At the endpoints, use $\binom n0=\binom nn=1$ and take coefficients outside the allowed range as zero.

The binomial theorem uses the same selection: in a product of $n$ factors $(x+y)$, choose the $k$ factors that contribute $x$. The remaining factors contribute $y$. With $n=3$, the coefficients are $1,3,3,1$; setting $x=y=1$ gives eight subsets in total.

For a two-state collection with labelled sites, $\binom nk$ counts the configurations with $k$ sites in the first state. It becomes a probability only after the statistical weights are assigned. Sampling with replacement is a different sample space and does not use this subset count.
