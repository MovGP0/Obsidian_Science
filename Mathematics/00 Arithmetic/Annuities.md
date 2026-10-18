---
title: "Annuities"
catalogue_ids:
  - "1.3.4"
  - "1.3.4.1"
  - "1.3.4.2"
  - "1.3.4.3"
---

> [!TLDR]
> An annuity is a sequence of regular payments; payment timing determines how long each payment earns interest and how balances are calculated.

## Annuity

An **annuity** is a sequence of payments at equal time intervals. The word does not require yearly payments: the interval can be a month, a quarter, or a year. Here the payment amount is constant. Distinguish the payment sequence from an insurance product that can also be called an annuity.

First read [[Compound interest]] for the growth factor $1+i$ and present value. Let $R\ge0$ be each payment, $n$ a positive integer number of payments, and $i\ge0$ the fixed decimal rate **per payment interval**. Assume interest is added once per interval, immediately before an end-of-period payment. No fees, taxes, or other transactions occur. Convert an annual rate to the appropriate period rate before using these formulas.

## Constant ordinary annuity

An **ordinary annuity** has payments at the ends of the periods: at times $1,2,\ldots,n$. Time $0$ is now. The balance is evaluated immediately after payment $n$. The last payment has earned no interest; the first has earned interest for $n-1$ periods. [OpenStax, Methods of Savings](https://openstax.org/books/contemporary-mathematics/pages/6-6-methods-of-savings) uses this timing convention.

![[arithmetic-finance-annuity-timing.svg|**Fig. A.finance.1** Three end-of-year deposits of €100 earn interest for two, one, and zero years before the final balance is measured.]]

In Fig. A.finance.1, the value at time $3$ is the sum $100(1.1)^2+100(1.1)+100$. The different growth times are the reason we cannot multiply all three payments by $(1.1)^3$.

In general the future value $F_n$ from an initially empty account is

$$
F_n=R\left[1+(1+i)+(1+i)^2+\cdots+(1+i)^{n-1}\right].
$$

The dots mean continue the same pattern of whole-number powers. To simplify the bracket, call it $S$ and put $q=1+i$. Multiply by $q$ and subtract the original expression: $qS-S=q^n-1$. All intermediate powers cancel. For $i>0$ this gives

$$
F_n=R\frac{(1+i)^n-1}{i}.
$$

At $i=0$, do not divide by zero. Add the payments directly: $F_n=nR$.

## Present value of the payment sequence

The **present value** $V_0$ is a single amount at time $0$ equivalent, at the stated rate, to the complete payment sequence. Bring the future value back by $n$ periods:

$$
V_0=\frac{F_n}{(1+i)^n}
=R\frac{1-(1+i)^{-n}}{i},\qquad i>0.
$$

A negative power means a reciprocal: $(1+i)^{-n}=1/(1+i)^n$. At zero interest, $V_0=nR$. The ordinary-annuity present-value formula is also listed in the educational text [Financial Math, Deferred Annuities, Formula 2.4](https://ecampusontario.pressbooks.pub/finmath1175/chapter/2-7-deferred-annuities/).

The same present value can finance $n$ withdrawals of $R$ at the ends of the periods, leaving zero after the last withdrawal. This is the link to [[Loan repayment]]: an initial loan can equal the present value of its future repayments.

## Account balance after n annuity payments

Let an account already contain $B_0$ at time $0$. Interest increases the current balance by factor $1+i$; a deposit then adds $R$. This gives the step rule

$$
B_k=(1+i)B_{k-1}+R.
$$

The initial amount and later deposits can be tracked separately and then added:

$$
B_n=B_0(1+i)^n+R\frac{(1+i)^n-1}{i}.
$$

For withdrawals of $R$, replace the plus by minus, for as long as the account can fund them. At $i=0$, the two rules become $B_n=B_0+nR$ and $B_n=B_0-nR$. A negative calculated balance in the withdrawal model means the assumed schedule needs borrowing; it is not a funded savings account.

## Worked example: deposits and an initial balance

Deposit €100 at each year end for three years at $10\%$ yearly interest. With an empty starting account, the balances are

$$
B_1=100,\qquad B_2=100(1.1)+100=210,\qquad
B_3=210(1.1)+100=331.
$$

The formula confirms $F_3=100(1.1^3-1)/0.1=331$. Of this, €300 is deposited and €31 is interest. The payment sequence has present value $331/1.1^3\approx248.69$.

If €500 is already in the account, it grows independently to $500(1.1)^3=665.50$. Add the same €331 from deposits to obtain €996.50. Keep full precision internally; the displayed present value is rounded to cents.

## Beginning-of-period payments

An **annuity due** moves each payment one interval earlier, to times $0,1,\ldots,n-1$. At the same evaluation time $n$, each deposit earns one extra period of interest. Multiply the ordinary future value by $1+i$. Its present value at time $0$ is also $(1+i)V_0$, because each future payment has one fewer discount period. Always state the evaluation time; immediately after the last deposit is a different time in these two schedules.

## Practice

1. Deposit €50 at each month end for two months at $1\%$ monthly interest. Find the final balance and its present value.
2. Start with €400 and withdraw €100 at each year end for three years at $5\%$ yearly interest. Find the balance after the third withdrawal.
3. Deposit €80 at each month end for six months at zero interest. What changes if deposits occur at month beginnings?

> [!example]- Worked answers
> 1. $F_2=50(1.01)+50=100.50$. Present value is $100.50/1.01^2\approx98.52$. The second deposit earns no interest before the balance is measured.
> 2. Apply the step rule: $400(1.05)-100=320$; $320(1.05)-100=236$; $236(1.05)-100=147.80$. The formula gives the same €147.80.
> 3. The balance is $6\times80=480$. At zero interest, moving the deposits earlier does not change the balance at the end of month six.
