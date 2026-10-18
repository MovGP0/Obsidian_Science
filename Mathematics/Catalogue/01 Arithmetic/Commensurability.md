---
title: "Commensurability"
catalogue_ids:
  - "1.1.1.5"
---

> [!TLDR]
> Two positive lengths are commensurable exactly when their ratio is rational: both can then be counted in whole multiples of one common length.

## A common measure

Suppose two line segments have positive lengths $a$ and $b$. They are **commensurable** if some positive length $d$ measures both a whole number of times:

$$
a=md,\qquad b=nd,
\qquad m,n\text{ positive integers}.
$$

The length $d$ is a **common measure**. It need not be the largest possible common measure. If $d$ works, then $d/2$ also works, with twice as many parts in each segment. Lengths that have no such $d$ are **incommensurable**.

This is an exact mathematical definition. A diagram can suggest a common measure, but line thickness and measurement error cannot establish that it is exact. We use abstract geometric lengths here; no particular measurement unit is required.

## Why the ratio is the test

If a common measure exists, divide the two equations:

$$
\frac ab=\frac{md}{nd}=\frac mn.
$$

The ratio is rational. Conversely, suppose $a/b=m/n$ for positive integers $m,n$. Multiplying gives $na=mb$. Set $d=b/n$. Then $b=nd$, and $a=(m/n)b=md$. Thus $d$ is a positive common measure.

We have proved both directions of the equivalence

$$
a\text{ and }b\text{ are commensurable}
\quad\Longleftrightarrow\quad \frac ab\in\mathbb Q.
$$

The double arrow means “if and only if.” A test of only one direction would not establish the full equivalence. The number set $\mathbb Q$ and rational ratios are explained in [[Number sets and the real line]].

The definition depends on the ratio, not on whether each length is rational when written in a selected unit. For example, $a=\sqrt2$ and $b=3\sqrt2$ are commensurable: take $d=\sqrt2$, $m=1$, and $n=3$. Both numerical lengths are irrational, but $a/b=1/3$ is rational.

## Worked example: construct a common measure

Let $a=15/4$ and $b=9/2$ in the same arbitrary length unit.

1. Form the ratio and simplify:

$$
\frac ab=\frac{15/4}{9/2}
=\frac{15}{4}\frac29=\frac56.
$$

2. The ratio is rational, so the segments are commensurable.
3. Choose $d=b/6=(9/2)/6=3/4$.
4. Check both segments: $5d=15/4=a$ and $6d=18/4=9/2=b$.

The fraction $5/6$ is in lowest terms. In this case $d$ is the largest common measure. To see why, let another common measure be $e$, with $a=Me$ and $b=Ne$. Then $M/N=5/6$, so $6M=5N$. Because $5$ and $6$ share no factor greater than $1$, $M=5k$ and $N=6k$ for a positive integer $k$. Hence $e=d/k\le d$.

For positive integer lengths, this largest measure is the greatest common divisor. Repeated subtraction finds it; repeated division speeds up that subtraction. For example, $18=1\cdot12+6$ and $12=2\cdot6$ show that the largest common measure of $18$ and $12$ is $6$. The quotient sequence is also the basis of [[Continued fractions]].

## An incommensurable pair

Take a square with side $a>0$ and diagonal $b$. The Pythagorean theorem gives $b^2=a^2+a^2=2a^2$. Because lengths are positive, $b/a=\sqrt2$. The ratio is irrational, so the side and diagonal are incommensurable. There is no positive segment that fits both an exact whole number of times. The irrationality argument appears in [[Proof by contradiction]].

This does not prevent good approximations. Replacing $\sqrt2$ by $99/70$ gives a rational ratio that is close to the true one. It describes an approximate pair, not an exact common measure for the square's side and diagonal.

## Conditions and common mistakes

Always express both lengths in the same unit before calculating their ratio. Rescaling both by the same positive factor leaves the ratio unchanged, so it does not change commensurability. The definition here requires positive lengths. A zero denominator would make the ratio test meaningless, so do not extend the formula to $b=0$ without a separate convention.

Do not confuse “the same length” with “commensurable.” Two unequal segments can share a common measure. Also, an irrational numerical label alone does not prove incommensurability; compare the two lengths.

## Practice

1. Find a common measure for $a=14/3$ and $b=10/3$. How many times does it fit each length?
2. Decide whether $a=\sqrt3$, $b=2\sqrt3$ are commensurable. Then decide for $a=1$, $b=\sqrt3$, using the fact that $\sqrt3$ is irrational.

> [!example]- Worked answers
> 1. The ratio is $(14/3)/(10/3)=7/5$. Choose $d=b/5=2/3$. Then $a=7d$ and $b=5d$. Both counts are positive integers, so this is a common measure.
>
> 2. The first ratio is $a/b=1/2$, so choose $d=\sqrt3$. It fits the two lengths once and twice. In the second pair, $b/a=\sqrt3$ is irrational. If a common measure existed, this ratio would be rational. Thus the second pair is incommensurable.
