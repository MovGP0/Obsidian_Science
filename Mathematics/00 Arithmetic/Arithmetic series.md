---
title: "Arithmetic series"
catalogue_ids:
  - "1.2.2"
---

> [!TLDR]
> An arithmetic series adds terms with a constant difference; pair the first and last terms to find its sum.

## A constant difference

An **arithmetic sequence** has the same difference between each term and the next. If the first term is $a$ and the common difference is $d$, its terms are

$$
a,\quad a+d,\quad a+2d,\quad\ldots,\quad a+(n-1)d.
$$

Here $n$ is a positive integer and $a,d$ are real numbers. There are $n-1$ steps from the first term to the $n$th term. Therefore the last term is $\ell=a+(n-1)d$. The difference can be positive, zero, or negative. For example, $12,9,6,3$ has $d=-3$.

An **arithmetic series** is the sum of these terms. If sigma notation is new, start with [[Finite sums and series]]. The question is how to calculate the total without adding a long list one term at a time.

## Derive the sum by pairing

Write the sum forwards and backwards:

$$
\begin{aligned}
S_n&=a+(a+d)+\cdots+\ell,\\
S_n&=\ell+(\ell-d)+\cdots+a.
\end{aligned}
$$

Add these two rows by columns. Every column has sum $a+\ell$: the increase in one row cancels the decrease in the other. There are $n$ columns. Thus

$$
2S_n=n(a+\ell),
\qquad
\boxed{S_n=\frac{n(a+\ell)}2
=\frac n2\bigl(2a+(n-1)d\bigr)}.
$$

This argument works for odd $n$ too. It pairs two copies of the sum, so no unpaired middle term remains. When $n=1$, the formula gives $S_1=a$. When $d=0$, all terms are $a$ and it gives $S_n=na$.

![[arithmetic-series_means-paired-staircase.svg|**Fig. A.series_means.1** Two staircases for 1 + 2 + 3 + 4 + 5 form a rectangle with five columns of height six.]]

In Fig. A.series_means.1, each column contains six squares: one blue contribution and one orange contribution. The rectangle contains $5\times6=30$ squares. One staircase is half the rectangle, so $1+2+3+4+5=15$. The picture uses positive whole numbers; the algebra also proves the formula for negative and fractional terms.

## Worked example: rows of seats

A small hall has $12$ rows. The first row has $18$ seats. Each next row has two more seats. Find the total.

1. Identify $a=18$, $d=2$, and $n=12$.
2. Find the last row: $\ell=18+(12-1)2=40$.
3. Pair the end values: $a+\ell=18+40=58$.
4. Multiply by half the number of rows: $S_{12}=12(58)/2=348$.
5. Check the scale: the average of the first and last counts is $29$, and $12\times29=348$.

The first row is already present. Using $18+12(2)$ for the last row would count one extra increase.

## Find the number of terms

Suppose the first and last terms and the nonzero difference are known. Rearrange $\ell=a+(n-1)d$:

$$
n=\frac{\ell-a}{d}+1.
$$

The result must be a positive integer if both endpoints belong to the proposed sequence. For $4,7,10,\ldots,28$, it gives $n=(28-4)/3+1=9$, so the sum is $9(4+28)/2=144$. The endpoint $29$ would give a noninteger $n$ and is not a term of this sequence. If $d=0$, this division is unavailable; the endpoints do not determine how many equal terms occur.

## Common mistakes

The formula needs equally spaced **values**, not merely equally spaced positions. The list $1,2,4,8$ is not arithmetic. A decreasing sequence still uses the same sum formula. Negative terms can cancel positive terms, so its total need not lie between the first and last term. The quantity $(a+\ell)/2$ is the mean of the terms, not their total.

## Practice

1. Calculate $25+22+19+\cdots+1$.
2. Find the sum of the first $20$ positive odd integers. Explain why their last term is $39$.

## Worked answers

1. Here $a=25$, $d=-3$, and $\ell=1$. The term count is $(1-25)/(-3)+1=9$. Thus the sum is $9(25+1)/2=117$.
2. The odd integers start at $1$ with difference $2$. After $19$ steps, the last term is $1+19(2)=39$. The sum is $20(1+39)/2=400$. [[Special finite series]] explains why the first $n$ odd integers always sum to $n^2$.
