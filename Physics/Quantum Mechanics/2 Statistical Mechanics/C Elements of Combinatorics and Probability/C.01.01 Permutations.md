---
title: "Permutations"
source_chapter: "C"
source_section: "C.1.1"
source_page: 481
---

> [!TLDR]
> Factorials count arrangements of distinct objects; dividing by repeated-object factorials removes equivalent arrangements.

Suppose an ordered row has $n$ positions, where $n$ is a nonnegative integer. Each distinct object is used exactly once. There are $n$ choices for the first position, $n-1$ for the next, and so on. Multiplication applies because every partial row has the stated number of continuations. The convention $0!=1$ counts the one empty row.

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

To obtain this quotient, first give temporary labels to identical objects. Every visible arrangement is then counted $n_1!n_2!\cdots n_k!$ times, because labels can be permuted within each kind without changing the row. Divide by that same number for every row. For example, AAB, ABA, and BAA are the three arrangements of two A objects and one B object.

This division removes label redundancy; it does not express an interaction or a probability law. For a classical model of labelled particles placed in cells, the same arithmetic counts which labels occupy each cell. For bosons or fermions, decide which occupation states are allowed before applying a count.
