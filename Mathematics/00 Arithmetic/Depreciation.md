---
title: "Depreciation"
catalogue_ids:
  - "1.3.5"
---

> [!TLDR]
> Straight-line depreciation subtracts a fixed amount each period; reducing-balance depreciation subtracts a fixed percentage of the remaining value.

## What is being modelled?

A machine, computer, or vehicle can be useful over several years. **Depreciation** in accounting allocates an asset's cost over its useful life. Its **book value** is its recorded cost less the depreciation recorded so far. Book value is not necessarily the price at which the asset could be sold. The [OpenStax explanation of depreciation methods](https://openstax.org/books/principles-financial-accounting/pages/11-3-explain-and-apply-depreciation-methods-to-allocate-capitalized-costs) makes this cost-allocation purpose explicit.

The formulas below are also useful as simple models of decreasing value. They do not specify tax rules or predict actual sale prices. Use equal periods, a fixed method, and stated estimates. Amounts are in euros; fees and taxes are excluded from the examples. The initial cost is assumed to be given. The main prerequisite is percentage multiplication in [[Percentages]].

## Straight-line depreciation

Let $C\ge0$ be the initial recorded cost, $S$ the estimated residual value at the end of use, and $N$ a positive integer number of periods in the useful life. Assume $0\le S\le C$. The amount to allocate is $C-S$. Equal allocation gives a depreciation amount $D$ per period:

$$
D=\frac{C-S}{N},\qquad V_n=C-nD,\qquad 0\le n\le N.
$$

$V_n$ is the book value after $n$ completed periods. At $n=0$, it is $C$; at $n=N$, it is $S$. Every additional period subtracts the same amount. That gives a straight line if the values are plotted against time, hence the method's name.

For example, a €900 item with a €100 residual value after four years has $D=(900-100)/4=200$ per year. Values after years one to four are €700, €500, €300, and €100. Do not extend this formula beyond its stated life and produce an unsupported negative value. If the residual value is held after year four in a model, state that additional convention.

## Reducing-balance depreciation

In the **reducing-balance**, or **declining-balance**, model, each period removes a fraction $d$ of the current value. Use $0\le d\le1$, with $d$ expressed as a decimal. If $D_k$ is depreciation in period $k$,

$$
D_k=dV_{k-1},\qquad V_k=(1-d)V_{k-1},\qquad
V_n=C(1-d)^n\quad(n\ge1),\qquad V_0=C.
$$

The last formula follows by repeated multiplication. State the initial value separately so the case $d=1$ never requires $0^0$. It has the same structure as [[Compound interest]], but the multiplier is smaller than one. At $d=0$ no depreciation occurs. At $d=1$ the entire initial value is removed in the first period; all later values are zero. For $0<d<1$ and $C>0$, values remain positive for every finite number of periods, even though they can become very small.

The percentage is constant, but the monetary depreciation becomes smaller as the base becomes smaller. Never replace $dV_{k-1}$ by $dC$ in this method; that would subtract a constant amount instead.

## Worked example: compare the models

A teaching model assigns a computer an initial value of €1,000. Compare straight-line depreciation with residual value €200 after four years against reducing-balance depreciation at $30\%$ yearly.

For the straight-line model, $D=(1000-200)/4=200$. For the reducing-balance model, $1-d=0.70$.

| End of year | Straight-line value | Reducing-balance value |
| --- | --- | --- |
| 0 | €1,000.00 | €1,000.00 |
| 1 | €800.00 | €700.00 |
| 2 | €600.00 | €490.00 |
| 3 | €400.00 | €343.00 |
| 4 | €200.00 | €240.10 |

To check year two in the reducing-balance model, calculate depreciation $0.30\times700=210$ and remaining value $700-210=490$. The total depreciation after four years is $1000-240.10=759.90$. It is not $4\times300$.

These methods have different assumptions and need not give the same value after four years. In particular, choosing $30\%$ does not force the reducing-balance model to reach the straight-line residual value.

## Residual-value limits and choosing a rate

If a reducing-balance accounting model must never fall below a residual value $S$, cap each period's charge at the remaining amount above $S$:

$$
D_k=\min(dV_{k-1},\,V_{k-1}-S),\qquad V_k=V_{k-1}-D_k.
$$

Here $\min(a,b)$ means the smaller of $a$ and $b$, and the rule assumes $V_{k-1}\ge S$. This cap stops excess depreciation, but does not guarantee that a chosen rate reaches $S$ by a chosen date. An accounting convention may need a final adjustment; state that separately.

For a pure reducing-balance model required to reach $0<S<C$ exactly after $N$ periods, solve $S=C(1-d)^N$:

$$
d=1-\left(\frac{S}{C}\right)^{1/N}.
$$

The positive $N$th root gives the repeated multiplier. For $C=1000$, $S=250$, and $N=2$, the multiplier is $\sqrt{0.25}=0.5$, so $d=50\%$. This is a mathematical fit to those endpoints. Keep extra digits until the final reported amounts; rounding every period can require a final adjustment.

## Practice

1. A €2,400 asset has a residual value of €400 after five years. Find its straight-line annual depreciation and value after three years.
2. An asset starts at €800 and decreases by $25\%$ of the remaining value each year. Find its value and total depreciation after two years.
3. At the start of a period, book value is €120 and the residual-value floor is €100. What depreciation does the capped $30\%$ rule permit?

> [!example]- Worked answers
> 1. $D=(2400-400)/5=400$. After three years, $V_3=2400-3(400)=1200$.
> 2. The multiplier is $0.75$. Values are $800(0.75)=600$ and $600(0.75)=450$. Total depreciation is $800-450=350$.
> 3. The ordinary percentage charge is $0.30(120)=36$, but only $120-100=20$ remains above the floor. Use $\min(36,20)=20$ and finish at €100.
