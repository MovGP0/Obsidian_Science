---
title: "Percentages"
catalogue_ids:
  - "1.3"
  - "1.3.1"
---

> [!TLDR]
> A percentage expresses a ratio per hundred; use the correct reference amount to calculate parts, changes, and original values.

## Financial mathematics

Financial mathematics describes how accounting amounts change. It uses ratios, repeated multiplication, and payment schedules. The basic question is often: “Which amount is the percentage applied to?” The answer determines the calculation.

This learning sequence starts with percentages. Continue with [[Compound interest]], then [[Annuities]] and [[Loan repayment]]. [[Depreciation]] compares two models of decreasing value. All examples are mathematical models. Amounts use euros, but the same arithmetic works with another currency. Fees, taxes, and changes in purchasing power are excluded unless an example states otherwise.

## Percentage calculations

**Percent** means “per hundred.” Thus $25\%=25/100=0.25=1/4$. Divide a percentage number by $100$ before multiplying with it. The number $p=0.25$ is the decimal rate; $25$ is the percentage number. The definition and the base–part relationship are also given in [OpenStax, Understanding Percent](https://openstax.org/books/contemporary-mathematics/pages/6-1-understanding-percent).

Let $B$ be the **base**, or reference amount, and $A$ the part being compared with that base. Then

$$
A=pB,\qquad p=\frac{A}{B},\qquad B=\frac{A}{p}.
$$

The second formula requires $B\ne0$; the third requires $p\ne0$. In part-of-a-whole questions, usually $B>0$ and $0\le p\le1$. A ratio can exceed $100\%$: a new amount of $150$ compared with an old amount of $100$ is $150\%$ of the old amount.

For example, $18\%$ of $250$ is $0.18\times250=45$. Conversely, $45$ is $45/250=0.18=18\%$ of $250$. If $45$ is $18\%$ of an unknown amount, that amount is $45/0.18=250$.

## Increase, decrease, and reverse calculation

An increase at decimal rate $r$ adds $rB$ to $B$. A decrease subtracts it:

$$
N=B(1+r)\quad\text{or}\quad N=B(1-r).
$$

Here $N$ is the new amount. For a nonnegative price after a discount, use $0\le r\le1$. If the new amount and the rate are known, divide by the complete multiplier:

$$
B=\frac{N}{1+r}\quad\text{or}\quad B=\frac{N}{1-r}.
$$

A $100\%$ discount has multiplier zero. It leaves no information from which to recover the original price. For a change from a positive old amount $B$ to $N$, the signed relative change is $(N-B)/B$. A negative answer means a decrease.

## Worked example: two successive changes

A course costs €240. Its price increases by $15\%$, then a student receives a $20\%$ discount on the increased price.

1. Convert the rates: $0.15$ and $0.20$.
2. Increase the price: $240\times1.15=276$.
3. Apply the discount to the new base: $276\times0.80=220.80$.
4. Compare with the starting price: $(220.80-240)/240=-0.08$.

The final price is €220.80, an overall decrease of $8\%$. Subtracting $20-15$ would give the wrong result because the two percentages use different bases. The combined multiplier is $1.15\times0.80=0.92$.

To recover the first price from the final price, divide by that multiplier: $220.80/0.92=240$. A $20\%$ increase followed by a $20\%$ decrease similarly gives $1.2\times0.8=0.96$, a $4\%$ decrease.

## Percentage points and sensible rounding

If a rate changes from $4\%$ to $5\%$, it increases by **one percentage point**. Its relative increase is $(5-4)/4=25\%$. These statements answer different questions. State which comparison you mean.

Keep extra digits during calculations and round a final monetary answer to cents. If a rule requires rounding at every transaction, apply that rule at each step instead; the final answer can differ slightly. Do not add currency amounts expressed in different currencies without a stated conversion rate.

## Practice

1. A price after a $12\%$ discount is €66. Find the original price and the discount amount.
2. An account rate falls from $6\%$ to $4.5\%$. Give the decrease in percentage points and as a percentage of the old rate.
3. A quantity rises by $10\%$ in each of two periods. Is its total increase $20\%$?

> [!example]- Worked answers
> 1. The multiplier is $1-0.12=0.88$. The original price is $66/0.88=75$. The discount is $75-66=9$, which is $0.12\times75$.
> 2. The decrease is $6-4.5=1.5$ percentage points. Relative to the old rate it is $1.5/6=0.25=25\%$.
> 3. Multiply the two factors: $1.10^2=1.21$. The total increase is $21\%$. The second increase applies to the already increased quantity.
