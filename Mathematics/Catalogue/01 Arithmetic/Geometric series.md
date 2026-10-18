---
title: "Geometric series"
catalogue_ids:
  - "1.2.3"
---

> [!TLDR]
> A finite geometric series adds terms with a constant multiplier; subtract a shifted copy to obtain its sum.

## A constant multiplier

A **geometric sequence** starts with a number $a$ and multiplies by the same number $r$ at each step. The number $r$ is the **common ratio**. Its first $n$ terms are

$$
a,\quad ar,\quad ar^2,\quad\ldots,\quad ar^{n-1},
$$

where $n$ is a positive integer. The first term has no multiplication by $r$; each further term adds one factor. For $a=3$ and $r=2$, the list is $3,6,12,24,\ldots$. The geometric series is the sum of this list. Compare the constant difference in [[Arithmetic series]].

If consecutive terms are nonzero, divide a term by its predecessor to find $r$. For $12,6,3$, the ratio is $6/12=3/6=1/2$. If $a=0$, every term is zero and the list does not determine a unique ratio. The definition by repeated multiplication still works when $r=0$: the list is $a,0,0,\ldots$. There is no need to assign a value to $0^0$ to define that first term.

## Derive the finite sum

Let $S_n=a+ar+\cdots+ar^{n-1}$. Multiply the whole sum by $r$:

$$
rS_n=ar+ar^2+\cdots+ar^{n-1}+ar^n.
$$

Subtract this line from the original. Every middle term cancels:

$$
S_n-rS_n=a-ar^n.
$$

If $r\ne1$, divide by $1-r$ to obtain

$$
\boxed{S_n=a\frac{1-r^n}{1-r}}.
$$

The equivalent formula $a(r^n-1)/(r-1)$ changes the signs in both numerator and denominator. Do not change only one sign. If $r=1$, division would be by zero; the direct sum instead gives $S_n=na$.

The finite formula works for any real $r\ne1$, including ratios greater than $1$ and negative ratios. A negative ratio makes successive nonzero terms alternate in sign. The condition $|r|<1$ belongs to a later question about infinite sums; it is not required here.

![[arithmetic-series_means-finite-halves.svg|**Fig. A.series_means.2** Four geometric terms fill 15/16 of a unit bar and leave a visible remainder of 1/16.]]

The bar in Fig. A.series_means.2 adds $1/2+1/4+1/8+1/16$. Each piece is half the preceding piece. The remaining $1/16$ is not part of this four-term sum. The formula gives $(1/2)(1-(1/2)^4)/(1-1/2)=15/16$, in agreement with the partition.

## Worked example: repeated doubling

A puzzle awards $5$ points on the first round and doubles that award each round. Find the combined award over six rounds.

1. Set $a=5$, $r=2$, and $n=6$.
2. The six awards are $5,10,20,40,80,160$. The last is $5\cdot2^5$, not $5\cdot2^6$.
3. Use the sum formula: $S_6=5(2^6-1)/(2-1)=5(63)=315$.
4. Direct addition gives $15+60+240=315$ after pairing adjacent terms, which checks the result.

This assumes the stated rule continues through every round. A cap or a fixed extra award would change the model.

## Index and sign checks

To add terms from $ar^p$ through $ar^q$, with integers $0\le p\le q$, use first term $ar^p$ and term count $q-p+1$. For example, $2^3+2^4+2^5$ has three terms and equals $8(2^3-1)/(2-1)=56$. It is not a five-term sum starting at $1$.

For ratio $-1$, a sum with an even number of terms cancels to zero; with an odd number it equals $a$. For ratio $0$, every nonempty sum equals $a$. These direct checks help detect a wrong exponent. For infinite sums and the reason shrinking terms require further care, see [[09.02 Infinite series]] after this finite lesson.

## Practice

1. Calculate the first five terms of $81+27+9+\cdots$ and their sum.
2. Calculate $4-8+16-32+64$. Then find the sum of five terms with first term $4$ and ratio $1$.

## Worked answers

1. The ratio is $1/3$, so the terms are $81,27,9,3,1$. Their sum is $81(1-(1/3)^5)/(1-1/3)=121$. Addition also gives $108+12+1=121$.
2. The ratio is $-2$ and there are five terms. Thus $S_5=4(1-(-2)^5)/(1-(-2))=4(33)/3=44$. Directly, $4-8+16-32+64=44$. For ratio $1$, use the separate case: $S_5=5\cdot4=20$.
