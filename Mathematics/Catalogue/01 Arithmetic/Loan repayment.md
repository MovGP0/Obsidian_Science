---
title: "Loan repayment"
catalogue_ids:
  - "1.3.3"
  - "1.3.3.1"
  - "1.3.3.2"
  - "1.3.3.3"
---

> [!TLDR]
> A loan payment covers interest and principal; equal principal repayments give decreasing total payments, while annuity payments keep the total payment constant.

## Repayment

The **principal** is the amount borrowed. **Repayment of principal** reduces the amount still owed. Interest pays for the use of the outstanding amount and does not itself reduce that principal. This distinction is explained in the [Consumer Financial Protection Bureau account of amortization](https://www.consumerfinance.gov/ask-cfpb/how-does-paying-down-a-mortgage-work-en-1943/).

Use a fixed rate $i\ge0$ per payment interval and $n\ge1$ equal intervals. The first payment is one full period after the loan starts. Interest is calculated on the opening balance and is paid at each period end. Fees, taxes, insurance, and early repayment charges are excluded. This is an accounting model, not a loan offer. Use the same period for the rate and the payments; rate conversions are explained in [[Compound interest]].

Let $P>0$ be the initial loan and $B_k$ the balance immediately after payment $k$. Initially $B_0=P$. If the total payment is $A_k$, then

$$
I_k=iB_{k-1},\qquad C_k=A_k-I_k,\qquad
B_k=B_{k-1}-C_k=(1+i)B_{k-1}-A_k.
$$

$I_k$ is the period's interest and $C_k$ is its principal repayment. A payment greater than interest reduces the balance; a payment equal to interest leaves it unchanged. A payment smaller than interest increases the balance if unpaid interest is added to the debt. The schedules below are chosen to end at $B_n=0$.

## Equal principal repayments

Repay the same principal amount $C=P/n$ each period. Before payment $k$, exactly $k-1$ principal instalments have been repaid. Therefore

$$
B_{k-1}=P-(k-1)\frac{P}{n},\qquad
A_k=\frac{P}{n}+i\left(P-(k-1)\frac{P}{n}\right).
$$

The balance decreases in equal steps. For $i>0$, total payments decrease by $iP/n$ each period because the interest is applied to a smaller balance.

The opening balances are $P,P-P/n,\ldots,P/n$. Their average is $(P+P/n)/2$. Multiply by $n$ and then by $i$ to obtain the total interest:

$$
I_{\mathrm{total}}=iP\frac{n+1}{2}.
$$

This is a finite sum, not an assumption that the loan balance stays at $P$ throughout.

## Equal annuity payments

An **annuity payment** keeps the total $A$ constant. The principal part changes as the interest part changes. From the balance rule,

$$
B_n=P(1+i)^n-A\frac{(1+i)^n-1}{i}.
$$

The fraction collects the effects of all previous payments. [[Annuities]] derives it by a finite sum. Set $B_n=0$ and solve for the constant payment:

$$
A=P\frac{i}{1-(1+i)^{-n}},\qquad i>0.
$$

With exact unrounded payments, total interest is $nA-P$. The first payment includes interest $iP$. Later interest decreases as the balance decreases, so the principal part increases. “Equal payments” does not mean equal interest or equal principal. [OpenStax, The Basics of Loans](https://openstax.org/books/contemporary-mathematics/pages/6-8-the-basics-of-loans) explains the matching amortization-table columns.

## Worked example: compare two schedules

Borrow €1,200 at $10\%$ per year and finish repayment after three year-end payments.

For equal principal repayment, $C=1200/3=400$:

| Year | Opening balance | Interest | Principal repaid | Total payment | Closing balance |
| --- | --- | --- | --- | --- | --- |
| 1 | €1,200.00 | €120.00 | €400.00 | €520.00 | €800.00 |
| 2 | €800.00 | €80.00 | €400.00 | €480.00 | €400.00 |
| 3 | €400.00 | €40.00 | €400.00 | €440.00 | €0.00 |

Total interest is $120+80+40=240$, also $0.1\times1200\times4/2=240$.

For equal annuity payments, calculate $A=1200(0.1)/(1-1.1^{-3})\approx482.537764$. The first interest amount is €120, so the first principal repayment is about €362.54. The following table displays values rounded to cents; its calculations retain the unrounded payment and balances.

| Year | Interest | Principal repaid | Total payment | Closing balance |
| --- | --- | --- | --- | --- |
| 1 | €120.00 | €362.54 | €482.54 | €837.46 |
| 2 | €83.75 | €398.79 | €482.54 | €438.67 |
| 3 | €43.87 | €438.67 | €482.54 | €0.00 |

Total interest from the unrounded calculation is about €247.61. Equal principal repayment reduces this loan faster at the start, so its interest total is lower under the stated model.

![[arithmetic-finance-repayment-parts.svg|**Fig. A.finance.2** The same loan has equal principal portions with falling total payments, or equal total payments with growing principal portions.]]

In Fig. A.finance.2, each bar combines the interest and principal portions for one year. Both schedules repay €1,200 of principal in total.

## Zero interest and rounding

At $i=0$, both methods give $A=P/n$ and total interest zero. Use this direct result; the annuity fraction would divide zero by zero. For a real payment schedule rounded to cents, recompute interest and balance period by period and adjust the final payment to clear the remaining balance. The displayed rounded table is not a separate instruction to pay its rounded entries without adjustment.

## Practice

1. Repay €900 over three year-end payments with equal principal repayment at $5\%$ yearly interest. Find all payments and total interest.
2. Repay €1,000 with two equal year-end annuity payments at $10\%$ yearly interest. Find the exact-model payment, first remaining balance, and total interest.
3. Divide a zero-interest €600 loan into four equal payments.

> [!example]- Worked answers
> 1. Principal repayment is $900/3=300$. Opening balances are $900,600,300$; interest is $45,30,15$. Payments are €345, €330, and €315. Total interest is €90.
> 2. $A=1000(0.1)/(1-1.1^{-2})\approx576.190476$. First principal repayment is $A-100\approx476.190476$, leaving €523.81 after rounding. Total interest is $2A-1000\approx152.38$.
> 3. Each payment is $600/4=150$. There is no interest and the two schedules coincide.
