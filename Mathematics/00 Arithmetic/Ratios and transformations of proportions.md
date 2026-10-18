---
title: "Ratios and transformations of proportions"
catalogue_ids:
  - "1.1.7.4"
---

> [!TLDR]
> A proportion equates two ratios; cross multiplication and related transformations preserve it only when their denominators are nonzero.

## Ratios and proportions

A **ratio** $a:b$ compares two numbers by the quotient $a/b$, provided $b\ne0$. A **proportion** states that two ratios are equal:

$$
\frac{a}{b}=\frac{c}{d},\qquad b\ne0,\ d\ne0.
$$

For example, $2/3=8/12$. Multiplying both entries of a ratio by the same nonzero number preserves the ratio. Adding the same number to both entries generally does not: $2/3\ne3/4$.

This article uses real numbers and expressions. The letters can represent positive counts, but positivity is not required for the algebra. Division restrictions still apply. Review [[Rational expressions and polynomial division]] for domains of algebraic fractions.

## Cross multiplication and its limits

Multiply the proportion by $bd$ to obtain

$$
ad=bc.
$$

Conversely, dividing this equation by nonzero $bd$ returns the proportion. Thus these statements are equivalent when $b,d\ne0$. The crossed-product equation alone can be true when an original denominator is zero, so do not discard the restrictions.

To solve $(x+1)/(x-2)=3/2$, first exclude $x=2$. Cross multiplication gives $2(x+1)=3(x-2)$. Expand to obtain $2x+2=3x-6$, so $x=8$. The input is permitted, and the original ratios are $9/6=3/2$.

For an exceptional example, $(x-1)/(x-1)=2$ excludes $x=1$. Cross multiplication gives $x-1=2(x-1)$ and hence $x=1$. This candidate is excluded, so the original equation has no solution. The zero denominator was not repaired by multiplication.

## Invert, alternate, and combine

Several useful transformations follow from $ad=bc$. Each new denominator introduces its own condition:

| Transformation | Result from $a/b=c/d$ | Additional condition |
| --- | --- | --- |
| Invert both ratios | $b/a=d/c$ | $a\ne0$ and $c\ne0$ |
| Alternate the middle entries | $a/c=b/d$ | $c\ne0$ |
| Add one to both sides | $(a+b)/b=(c+d)/d$ | None beyond $b,d\ne0$ |
| Subtract one from both sides | $(a-b)/b=(c-d)/d$ | None beyond $b,d\ne0$ |
| Divide the preceding two forms | $(a+b)/(a-b)=(c+d)/(c-d)$ | $a\ne b$ and $c\ne d$ |

For example, if $a/b=c/d=3/2$, then $(a+b)/(a-b)=5$. To see this without a memorized rule, put $a=kb$ and $c=kd$ with common ratio $k$. Then

$$
\frac{a+b}{a-b}=\frac{b(k+1)}{b(k-1)}=\frac{k+1}{k-1},\qquad k\ne1.
$$

The same result follows from $c,d$. This derivation explains both the transformation and the exception: if the common ratio is $1$, the new denominator is zero. If the common ratio is zero, inversion fails, although the original proportion can still be valid.

## Add corresponding entries carefully

When $a/b=c/d=k$, we have $a+c=k(b+d)$. Therefore

$$
\frac{a+c}{b+d}=k,\qquad b+d\ne0.
$$

This statement uses equal starting ratios. It is not the general addition rule for fractions. For example, $1/2+1/3=5/6$, not $(1+1)/(2+3)=2/5$. Similarly, subtraction gives $(a-c)/(b-d)=k$ only when $b-d\ne0$.

## Worked example: divide a total in a ratio

Two portions have ratio $3:5$ and total $64$. Let their values be $3k$ and $5k$. The total is $8k=64$, so $k=8$. The portions are $24$ and $40$. Check both conditions: $24+40=64$ and $24/40=3/5$.

The ratio $3:5$ compares the portions with each other. The first portion is $3/(3+5)=3/8$ of the total, not $3/5$ of the total. Distinguish these comparisons before calculating. If a problem gives a ratio of positive amounts, select a positive scale factor; algebraic negative solutions would not fit that context.

Before using a ratio in a word problem, write what each entry represents. A ratio of successful attempts to all attempts differs from a ratio of successful attempts to failed attempts. If there are $3$ successes and $2$ failures, these ratios are $3:5$ and $3:2$, respectively. The same data support both ratios, but the denominators answer different questions.

## Practice

1. Solve $4/(x+1)=6/9$ and check its domain.
2. If $a/b=5/3$ with $b\ne0$, find $(a-b)/(a+b)$. State why the denominator is nonzero.

> [!example]- Worked answers
> 1. Exclude $x=-1$. Cross multiplication gives $36=6(x+1)$, hence $x=5$. Then $4/6=6/9=2/3$, so the solution is valid.
> 2. Put $a=5b/3$. Then $(a-b)/(a+b)=[(2/3)b]/[(8/3)b]=1/4$. Since $b\ne0$, the denominator $(8/3)b$ cannot be zero.
