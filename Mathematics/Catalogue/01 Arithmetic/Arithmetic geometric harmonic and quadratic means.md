---
title: "Arithmetic geometric harmonic and quadratic means"
catalogue_ids:
  - "1.2.5"
  - "1.2.5.1"
  - "1.2.5.2"
  - "1.2.5.3"
  - "1.2.5.4"
---

> [!TLDR]
> A mean replaces several values by one value that preserves a chosen total, product, reciprocal total, or square total.

## Choose what must stay equal

A **mean** is a representative number calculated from a list. There is more than one useful mean because different questions preserve different quantities. This article uses a positive integer $n$ for the number of entries and $x_1,\ldots,x_n$ for their values. Sigma notation is introduced in [[Finite sums and series]].

The main question is not “Which formula is called average?” Ask instead: “If I replace every entry by one common value, what must remain the same?” For equal contributions, the following table gives four answers.

| Mean | What equal replacement preserves | Domain used here |
| --- | --- | --- |
| Arithmetic | Sum of the entries | All real entries |
| Geometric | Product of the entries | Positive entries |
| Harmonic | Sum of the reciprocals | Positive entries |
| Quadratic | Sum of the squares | All real entries |

An entry repeated twice counts twice. Unequal contributions need weights, explained below. The means do not remove an unsuitable data model or correct bad measurements.

## Arithmetic mean

The **arithmetic mean** $A$ preserves the sum. Replacing all $n$ entries by $A$ gives $nA=x_1+\cdots+x_n$, so

$$
A=\frac{x_1+\cdots+x_n}{n}.
$$

For the three scores $4,7,10$, their total is $21$, so $A=21/3=7$. Three copies of $7$ keep the same total. Negative and zero values are allowed. For example, $-2,0,8$ have mean $2$. The arithmetic mean lies between the smallest and largest entry, because dividing their total by the entry count cannot put it outside those bounds.

Use this mean for totals distributed equally across items: total points per attempt, for example. Do not average two group averages equally when the groups have different sizes. If two entries have mean $5$ and eight entries have mean $10$, the combined mean is $(2\cdot5+8\cdot10)/(2+8)=9$, not $7.5$.

## Geometric mean

The **geometric mean** $G$ preserves a product. For positive entries, choose the positive root of $G^n=x_1x_2\cdots x_n$:

$$
G=\sqrt[n]{x_1x_2\cdots x_n}.
$$

The symbol $\sqrt[n]{y}$ means the nonnegative number whose $n$th power is $y\ge0$. For $4$ and $9$, $G=\sqrt{36}=6$. A square of side $6$ has the same area as a rectangle with sides $4$ and $9$, when these are treated as numerical lengths in a common unit.

Use $G$ for successive multiplicative factors with equal importance. If one factor is $1.20$ and the next is $0.80$, their product is $0.96$. The constant factor that gives the same two-step change is $G=\sqrt{0.96}\approx0.9798$. It corresponds to about a $2.02\%$ decrease per step, not zero change. Convert percentages to factors before using this mean.

For nonnegative entries, a geometric mean can also be defined; any zero makes it zero. We use strictly positive entries for the common comparison with the harmonic mean. Arbitrary negative entries do not give the same uniform real-root definition and order rules.

## Harmonic mean

The **harmonic mean** $H$ preserves the sum of reciprocals. A reciprocal of nonzero $x$ is $1/x$. Solve $n/H=1/x_1+\cdots+1/x_n$:

$$
H=\frac{n}{1/x_1+\cdots+1/x_n}.
$$

Use positive entries here. A zero has no reciprocal, and negative values can make the denominator zero or remove the usual interpretation. The harmonic mean is the reciprocal of the arithmetic mean of the reciprocals.

For an abstract production task, one processor handles two equal-sized batches in sequence, first at $6$ and then at $12$ items per work interval. If each batch has $60$ items, the required interval counts are $60/6=10$ and $60/12=5$. The total rate for the two batches is $120/15=8$ items per interval. This is $H=2/(1/6+1/12)=8$. Equal batch sizes make reciprocal rates relevant. If the processor instead uses each rate for an equal interval count, use the arithmetic mean of the two rates.

## Quadratic mean

The **quadratic mean**, or **root mean square (RMS)**, preserves the square total. Choose a nonnegative $Q$ so that $nQ^2=x_1^2+\cdots+x_n^2$:

$$
Q=\sqrt{\frac{x_1^2+\cdots+x_n^2}{n}}.
$$

The order of operations is square, average, then take the square root. For $-3$ and $3$, the arithmetic mean is zero, but $Q=\sqrt{(9+9)/2}=3$. RMS records magnitude without cancellation between signs. Use it when squared values are the relevant contributions. It is not a replacement for the signed arithmetic mean when the sign carries the information of interest.

## Worked example: four answers for one pair

Find all four means of $4$ and $16$.

1. Keep the sum: $A=(4+16)/2=10$.
2. Keep the product: $G=\sqrt{4\cdot16}=8$.
3. Keep the reciprocal sum: $H=2/(1/4+1/16)=2/(5/16)=32/5=6.4$.
4. Keep the square sum: $Q=\sqrt{(4^2+16^2)/2}=\sqrt{136}\approx11.662$.

For example, two copies of $8$ keep the product $64$, but their sum is only $16$. There is no conflict: each mean answers a different replacement question. [[Comparing means of two positive numbers]] proves $H\le G\le A\le Q$ for a positive pair.

## Unequal contributions

Positive rational weights $w_i$ specify contributions; put $W=w_1+\cdots+w_n$. The weighted arithmetic and quadratic means are $\sum w_ix_i/W$ and $\sqrt{\sum w_ix_i^2/W}$. The weighted harmonic mean is $W/(\sum w_i/x_i)$ for positive entries. For rational weights, repeating entries in the stated proportions explains these formulas directly. The corresponding geometric mean is $(\prod x_i^{w_i})^{1/W}$ for positive entries. Here $\prod$ means multiply the indicated factors, and fractional powers express the same proportional repetition. Equal weights recover the four formulas above.

## Practice

1. Find all four means of $2$ and $8$ exactly. Keep square roots in the answers if needed.
2. Two equal-sized batches are processed in sequence at rates $4$ and $12$. Find the combined rate. Then find the arithmetic mean of the four signed entries $-2,-2,2,2$ and their RMS.

## Worked answers

1. $A=5$, $G=\sqrt{16}=4$, $H=2/(1/2+1/8)=16/5=3.2$, and $Q=\sqrt{(4+64)/2}=\sqrt{34}$. Each comes from its own preserved quantity.
2. Equal batches require $H=2/(1/4+1/12)=2/(1/3)=6$. For example, batches of $12$ require $3+1=4$ intervals and give total rate $24/4=6$. The signed list sums to zero, so $A=0$. All four squares are $4$, so RMS is $\sqrt{16/4}=2$.
