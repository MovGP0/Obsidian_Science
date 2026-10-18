---
title: "Purchasing and knapsack policies"
catalogue_ids:
  - "18.3.2"
  - "18.3.2.1"
  - "18.3.2.2"
  - "18.3.6"
  - "18.3.6.1"
  - "18.3.6.2"
---

> [!TLDR]
> Inventory purchasing and zero-one knapsack become finite decision tables when the state records stock or remaining capacity.

## Examples of discrete decision models

Read [[Dynamic decisions and Bellman equations]] first. We now construct complete state models and solve their value tables. Costs, demands, weights, and scores are abstract numbers. Every assumption must be visible: changing an ordering fee, allowing fractional objects, or allowing shortages changes the problem.

Purchasing has stages indexed by requirement periods and a state equal to current stock. Zero-one knapsack has stages indexed by items and a state equal to remaining capacity. In both, a small table can compare many decision sequences without listing each sequence separately.

## Purchasing problem

At the start of period $k$, stock is an integer $s\geq0$. Choose a nonnegative integer purchase $q$, then meet known demand $d_k$. Ending stock is $s'=s+q-d_k$, which must be nonnegative and within storage capacity. Charge a fixed ordering fee $K$ if $q>0$, a per-unit price $p_kq$, and holding cost $h_ks'$. The indicator $\mathbf1_{q>0}$ equals one for a positive purchase and zero otherwise.

For a finite horizon, the Bellman recurrence is

$$
V_k(s)=\min_q\{K\mathbf1_{q>0}+p_kq+h_k(s+q-d_k)
+V_{k+1}(s+q-d_k)\},
$$

with the minimum only over permitted purchases. Terminal values encode leftover stock: for mandatory zero final stock, use $V_{N+1}(0)=0$ and $V_{N+1}(s)=+\infty$ for $s>0$. A salvage value would give different terminal data. A capacity or a proven purchase bound keeps the action list finite.

## Optimal purchasing policy: worked two-period table

Let demands be $d_1=d_2=1$, initial stock zero, order fee $K=2$, prices $p_1=p_2=1$, holding cost one per unit after period one, and required zero final stock. Permit enough stock to hold one unit between periods. Buying more than the total remaining demand cannot lead to a feasible terminal state and can be excluded.

In period two, starting stock zero requires purchase one, costing $2+1=3$. Starting stock one requires no purchase, costing zero. Thus $V_2(0)=3$ and $V_2(1)=0$.

At period one with stock zero, there are two feasible choices that can complete the model:

| Purchase $q$ | End stock | Immediate cost | Future cost | Total |
| --- | --- | --- | --- | --- |
| 1 | 0 | $2+1=3$ | 3 | 6 |
| 2 | 1 | $2+2+1=5$ | 0 | 5 |

The minimum is five. Record policy $\pi_1(0)=2$, $\pi_2(1)=0$, and $\pi_2(0)=1$. The first two decisions describe the route from the stated initial condition; the last records what to do from another possible state. The ordering fee makes early purchase worthwhile despite holding cost.

If the holding cost rises from one to three, buying both costs seven, so buying one in each period costs only six and becomes optimal. The decision depends on total cost, not simply on the smallest unit price. Unknown future demand would require a stochastic state model and expectations; this deterministic table does not cover that case automatically.

## Zero-one knapsack problem

There are $n$ objects with positive integer weights $w_i$, values $v_i$, and integer capacity $W\geq0$. Each object may be chosen at most once. Let $F_i(c)$ be the largest value using the first $i$ objects with capacity at most $c$. Initialize $F_0(c)=0$. Then

$$
F_i(c)=
\begin{cases}
F_{i-1}(c),&c<w_i,\\
\max\{F_{i-1}(c),\ v_i+F_{i-1}(c-w_i)\},&c\geq w_i.
\end{cases}
$$

The two cases skip or take object $i$. Both use row $i-1$, so an object cannot be reused. This recurrence is a maximization form of Bellman's equation. Using row $i$ in the take branch would solve an unbounded-reuse model instead.

## Knapsack: worked value table and recovery

Take weights $(2,3,4)$, values $(3,4,5)$, and $W=5$:

| Objects available | $c=0$ | $c=1$ | $c=2$ | $c=3$ | $c=4$ | $c=5$ |
| --- | --- | --- | --- | --- | --- | --- |
| none | 0 | 0 | 0 | 0 | 0 | 0 |
| object 1 | 0 | 0 | 3 | 3 | 3 | 3 |
| objects 1–2 | 0 | 0 | 3 | 4 | 4 | 7 |
| objects 1–3 | 0 | 0 | 3 | 4 | 5 | 7 |

For instance, $F_2(5)=\max(F_1(5),4+F_1(2))=\max(3,7)=7$. At the final entry, taking object three gives $5+F_2(1)=5$, so skip it. Row two at capacity five takes object two, leaving capacity two. Row one then takes object one. The optimal subset is $\{1,2\}$, total weight five and value seven.

There are $O(nW)$ table entries, each with constant arithmetic work. This is **pseudopolynomial** complexity: $W$ itself can be much larger than the number of digits needed to write it. A very large capacity can make the table impractical. Integer weights also matter; arbitrary real weights do not give this exact integer-capacity table without reformulation.

Sorting by value per weight is correct for divisible fractional knapsack, but can fail here. With weights $(3,2,2)$, values $(5,3,3)$, and capacity four, the highest ratio selects weight three and value five, leaving unusable capacity one. Selecting the two weight-two objects instead gives value six.

## Practice

1. In the purchasing example, set the ordering fee to zero while keeping holding cost one. What is the optimal policy?
2. Use weights $(1,3)$, values $(2,5)$, and capacity three. What is the zero-one optimum, and what would unlimited reuse give?

## Worked answers

1. Buy one each period. The cost is two, with no holding. Buying both in period one costs three because of the extra holding cost. With no fee benefit, early purchase is worse under the stated equal prices.
2. Zero-one choices are none, the first, or the second; both together exceed capacity. The optimum is value five from the second object. Unlimited reuse permits three copies of the first object and value six. This difference checks why the take branch must use the previous row.
