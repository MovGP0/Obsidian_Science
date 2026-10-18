---
title: "Tours and sequencing"
catalogue_ids:
  - "18.1.4.4"
  - "18.1.4.5"
---

> [!TLDR]
> Tours and sequencing optimize discrete arrangements, so their linear models must prevent invalid fractional or disconnected choices.

## Why discrete arrangements need extra care

Read [[Transport assignment and allocation]]. A binary variable takes only values zero and one. Linear objectives and linear restrictions with binary variables form an **integer linear program**, not an ordinary continuous LP. Removing the binary condition gives a **relaxation**. Its optimum is a bound, but it need not describe an allowed arrangement.

The traveling salesperson problem chooses one closed tour through all vertices of a finite graph. Sequencing chooses an order of jobs and often their start times. Both can have linear formulations, which explains their placement among special linear models, but their discrete restrictions create a harder search problem.

## Traveling salesperson problem

Let $c_{ij}$ be the cost of taking an edge from vertex $i$ to $j$. Set $x_{ij}=1$ if that directed edge is used. Forbid self edges, then minimize $\sum_{i\ne j}c_{ij}x_{ij}$ subject to exactly one outgoing and one incoming edge at each vertex:

$$
\sum_{j\ne i}x_{ij}=1,\qquad
\sum_{i\ne j}x_{ij}=1,\qquad x_{ij}\in\{0,1\}.
$$

These restrictions alone give an assignment, possibly several separate cycles. To force one tour, add **subtour elimination**: for each nonempty proper subset $S$ of vertices,

$$
\sum_{i\in S,\ j\notin S}x_{ij}\geq1.
$$

Every subset must have an edge leaving it. With the degree restrictions and integer variables, separate cycles would violate one of these inequalities. There are many subsets, so practical algorithms can start with fewer restrictions and add a cut when an invalid subtour appears.

## Worked four-vertex tour

Consider an undirected complete graph with costs $AB=1$, $BC=2$, $CD=1$, $DA=2$, $AC=5$, and $BD=5$. Fix the starting vertex $A$ and identify a tour with its reversal. Three distinct tours remain:

| Tour | Cost |
| --- | --- |
| $A\to B\to C\to D\to A$ | $1+2+1+2=6$ |
| $A\to B\to D\to C\to A$ | $1+5+1+5=12$ |
| $A\to C\to B\to D\to A$ | $5+2+5+2=14$ |

The first tour is optimal because the list is exhaustive. In a directed assignment relaxation, the two cycles $A\to B\to A$ and $C\to D\to C$ cost only four, but they do not form a tour. The cut for $S=\{A,B\}$ excludes them. This small example shows why an apparently excellent bound can be infeasible for the original question.

## Sequencing problem

A sequencing objective must be stated. **Makespan** is the time at which all jobs finish. The **sum of completion times** adds every job's finish time. An order that is best for one objective need not be best for another. Precedence restrictions, such as “job A must finish before B starts,” further restrict the allowed orders.

For a single processor, jobs available at zero, positive durations $p_i$, and no precedence restrictions, every non-idling order has the same makespan $\sum_i p_i$. To minimize the sum of completion times, use **shortest processing time first**. For adjacent jobs $i,j$ after an elapsed amount $T$, their completion-time sum is $2T+2p_i+p_j$. Swapping them gives $2T+2p_j+p_i$. The first order is no worse exactly when $p_i\leq p_j$. Repeatedly remove inversions to prove the sorting rule.

## Worked sequencing example and formulation

Let durations be $p_A=3$, $p_B=1$, $p_C=2$. The order $B,C,A$ has completion times $1,3,6$, whose sum is $10$. The order $A,C,B$ has completion times $3,5,6$, whose sum is $14$. Both have makespan $6$.

A general pairwise model uses start variables $s_i\geq0$ and binary $y_{ij}$, where one means $i$ precedes $j$. For a known valid upper bound $M$ on completion times, impose

$$
s_j\geq s_i+p_i-M(1-y_{ij}),\qquad
s_i\geq s_j+p_j-My_{ij}.
$$

One inequality enforces the selected order; the other becomes inactive. An unjustified small $M$ can exclude feasible schedules, while a huge $M$ weakens numerical bounds. For our unrestricted example, $M=6$ is valid. Additional release dates or setup times require reconsidering this bound and the sorting theorem.

## Practice

1. In the tour example, why does choosing every vertex's cheapest outgoing edge not solve the problem?
2. Sequence three jobs of durations $4,2,1$ to minimize the sum of completion times under the assumptions above.

## Worked answers

1. Cheap local edges can form separate cycles or send several incoming edges to one vertex. The globally required single tour couples all decisions. The two cheap two-cycles already show the failure.
2. Use order $1,2,4$. Completion times are $1,3,7$, sum $11$. The adjacent-exchange proof guarantees that no other order is better; ties would allow multiple optimal orders.
