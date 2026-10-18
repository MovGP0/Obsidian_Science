---
title: "Compound interest"
catalogue_ids:
  - "1.3.2"
---

> [!TLDR]
> Compound interest multiplies the current balance by the same growth factor each period, so earlier interest can earn further interest.

## Start with a period and a rate

An **interest period** is the interval after which interest is added to a balance. Let $P\ge0$ be the starting amount, called the **principal**, and $i\ge0$ the decimal interest rate per period. A monthly rate of $1\%$ means $i=0.01$ for one month. The rate and the period count must refer to the same interval. Review percentage multipliers in [[Percentages]] if needed.

**Compound interest** means that interest remains in the account and becomes part of the amount used for the next interest calculation. The [Consumer Financial Protection Bureau explanation](https://www.consumerfinance.gov/ask-cfpb/how-does-compound-interest-work-en-1683/) uses this same distinction between the principal and interest already earned.

Assume a fixed rate, equal periods, no further deposits or withdrawals, and interest added at each period end. Taxes and fees are excluded. These conditions specify a mathematical model, rather than a prediction about a particular account.

## Derive the balance formula

After one period the interest is $Pi$, so the balance is $P+Pi=P(1+i)$. Repeat the same operation on the new balance:

$$
B_0=P,\qquad B_1=P(1+i),\qquad B_2=P(1+i)^2.
$$

The subscript gives the number of completed periods. Each additional period contributes one more factor of $1+i$. After a nonnegative integer number $n$ of periods,

$$
B_n=P(1+i)^n,\qquad I_n=B_n-P.
$$

$I_n$ is the total interest earned. At $i=0$, the formula gives $B_n=P$. For comparison, **simple interest** at a rate of $i$ per period always uses the original principal: its balance after $n$ periods is $P(1+ni)$. The two models agree for one period, but generally disagree for several periods.

## Worked example: follow the balance

Start with €800 at $5\%$ per year, compounded annually, for three years.

| End of year | Opening balance | Interest at $5\%$ | Closing balance |
| --- | --- | --- | --- |
| 1 | €800.00 | €40.00 | €840.00 |
| 2 | €840.00 | €42.00 | €882.00 |
| 3 | €882.00 | €44.10 | €926.10 |

The formula gives the same result: $800(1.05)^3=926.10$. The total interest is $926.10-800=126.10$. Simple interest would give $800(1+3\times0.05)=920$. The €6.10 difference comes from interest earned on previous interest.

The growth is constant as a percentage, but the interest amount is not constant. This explains why adding the first year's €40 three times does not reproduce the compound calculation.

## Annual rates and shorter periods

A **nominal annual rate convertible monthly** of $j$ specifies a monthly rate $i=j/12$. With $m$ periods per year and $t$ whole years, the corresponding model is

$$
B=P\left(1+\frac{j}{m}\right)^{mt}.
$$

Use this division only when the annual rate has that stated nominal convention. An **effective annual rate** $r$ describes the complete growth over one year. To find an equivalent monthly rate, solve $(1+i)^{12}=1+r$, giving $i=(1+r)^{1/12}-1$. The root is the positive number whose twelfth power is $1+r$.

For example, $12\%$ nominal annual interest compounded monthly has $i=1\%$ monthly and effective annual growth $(1.01)^{12}-1\approx12.6825\%$. A $12\%$ effective annual rate instead has equivalent monthly growth of about $0.9489\%$. The conversion formulas and annual-yield distinction are covered in [OpenStax, Compound Interest](https://openstax.org/books/contemporary-mathematics/pages/6-4-compound-interest).

## Reverse the calculation

The **present value** is the amount needed now to produce a stated future amount $F$ in this model. Divide by the growth factor:

$$
P=\frac{F}{(1+i)^n}.
$$

For example, €1,102.50 due after two years has present value $1102.50/1.05^2=1000$ at $5\%$ yearly. This does not mean the future amount is smaller; it compares amounts at different times under a stated rate.

Keep full calculator precision and round only the final amount to cents here. Actual period-by-period rounding requires a balance table. The formulas also work algebraically for $-1<i<0$, describing decrease; negative rates are outside the basic interest examples in this lesson.

## Practice

1. Find the balance and total interest on €1,500 after four years at $2\%$ per year, compounded annually.
2. An account uses $6\%$ nominal annual interest compounded monthly. Find the monthly rate and the balance of €2,000 after one year.
3. What present amount gives €605 after two years at $10\%$ per year? What is the answer at zero interest?

> [!example]- Worked answers
> 1. $1500(1.02)^4=1623.64824$, so the balance is €1,623.65 and interest is €123.65 after final rounding.
> 2. $i=0.06/12=0.005$. There are $12$ periods. The balance is $2000(1.005)^{12}\approx2123.36$, or €2,123.36.
> 3. $P=605/1.1^2=500$. At $i=0$, there is no growth, so the starting amount must be €605.
