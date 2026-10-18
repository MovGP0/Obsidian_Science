---
title: "Comparing means of two positive numbers"
catalogue_ids:
  - "1.2.5.5"
---

> [!TLDR]
> For two positive numbers, the harmonic, geometric, arithmetic, and quadratic means satisfy H ≤ G ≤ A ≤ Q, with equality throughout only when the numbers are equal.

## Definitions and restrictions

Let $a>0$ and $b>0$. Define their four means by

$$
H=\frac{2ab}{a+b},\qquad
G=\sqrt{ab},\qquad
A=\frac{a+b}{2},\qquad
Q=\sqrt{\frac{a^2+b^2}{2}}.
$$

The harmonic expression follows from $2/(1/a+1/b)$ by putting the denominator over a common denominator $ab$. [[Arithmetic geometric harmonic and quadratic means]] explains which question each mean answers. This lesson proves their order using squares and positive multiplication. It requires no calculus.

Positivity is essential for this statement. It ensures all four means are positive, all denominators are nonzero, and squaring preserves their order. For arbitrary negative inputs, $G$ may be undefined as a real number and these comparisons do not hold in this form. For rules about signs in inequalities, see [[02.04 Equations and inequalities]].

## Prove the geometric–arithmetic comparison

The square of any real number is nonnegative. Apply that fact to $\sqrt a-\sqrt b$:

$$
(\sqrt a-\sqrt b)^2=a+b-2\sqrt{ab}\ge0.
$$

Move the final term to the right and divide by positive $2$:

$$
\sqrt{ab}\le\frac{a+b}2,
\qquad G\le A.
$$

Equality holds precisely when the squared expression is zero, so $\sqrt a=\sqrt b$, or $a=b$. For example, the rectangle with sides $2$ and $8$ has area $16$. A square with the same perimeter has side $5$ and area $25$. The inequality $ab\le((a+b)/2)^2$ describes this comparison. Thus, among positive rectangles with a fixed perimeter, the square has the greatest area.

## Prove the harmonic–geometric comparison

The product of $H$ and $A$ has a simple form:

$$
HA=\frac{2ab}{a+b}\frac{a+b}2=ab=G^2.
$$

Hence $H=G^2/A$. Since $0<G\le A$, division gives $G/A\le1$. Multiply by positive $G$ to get

$$
H=G\frac GA\le G.
$$

Equality again requires $a=b$. The identity $HA=G^2$ is special to the unweighted two-number case. It is not a general identity for longer lists.

## Prove the arithmetic–quadratic comparison

Calculate the difference of squares:

$$
Q^2-A^2
=\frac{a^2+b^2}{2}-\frac{(a+b)^2}{4}
=\frac{a^2-2ab+b^2}{4}
=\frac{(a-b)^2}{4}\ge0.
$$

Both $Q$ and $A$ are positive, so $Q^2\ge A^2$ implies $Q\ge A$. Equality requires $a-b=0$. Combining the three comparisons gives

$$
\boxed{H\le G\le A\le Q}.
$$

When $a=b$, every mean equals that common value. When $a\ne b$, every displayed comparison is strict. In particular, a large gap between the two numbers makes $Q^2-A^2$ larger.

## Worked example: compare without premature rounding

For $a=3$ and $b=12$:

1. $H=2(3)(12)/(3+12)=72/15=24/5$.
2. $G=\sqrt{36}=6$.
3. $A=15/2$.
4. $Q=\sqrt{(9+144)/2}=\sqrt{153/2}$.

Thus $4.8<6<7.5<\sqrt{76.5}\approx8.746$. The exact check for the last inequality is $Q^2-A^2=76.5-56.25=20.25=(12-3)^2/4$. Keeping exact fractions or roots prevents rounding from hiding a small difference.

## Use the comparison carefully

The largest mean is not always the most suitable estimate. RMS is largest for a positive pair, but a question about equal-sized tasks at two rates still needs the harmonic mean. Ordering gives bounds and checks; the preserved total or product selects the model.

The comparison also gives an elementary bound without calculating roots. If $a+b=20$, then $G\le A=10$, so $ab\le100$. Equality occurs at $a=b=10$. If instead $ab=36$, then $a+b\ge12$. These conclusions assume positive $a,b$; state the domain before using them.

## Practice

1. Find all four means of $5$ and $5$. Which steps in the proof become equalities?
2. Positive numbers have sum $18$. Find the largest possible product and the values that attain it. Then compare the four means for the pair $2,18$.

## Worked answers

1. $H=50/10=5$, $G=\sqrt{25}=5$, $A=10/2=5$, and $Q=\sqrt{50/2}=5$. Both squared differences $(\sqrt a-\sqrt b)^2$ and $(a-b)^2$ are zero, so every comparison is an equality.
2. Since $G\le A=9$, the product is at most $9^2=81$, attained at $a=b=9$. For $2,18$, $H=72/20=18/5=3.6$, $G=6$, $A=10$, and $Q=\sqrt{(4+324)/2}=\sqrt{164}=2\sqrt{41}\approx12.806$. The sum here is $20$, so this pair is a separate comparison example and does not belong to the fixed-sum-$18$ optimization.
