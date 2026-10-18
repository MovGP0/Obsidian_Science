---
title: "Dynamic decisions and Bellman equations"
catalogue_ids:
  - "18.3"
  - "18.3.1"
  - "18.3.1.1"
  - "18.3.1.2"
  - "18.3.3"
  - "18.3.3.1"
  - "18.3.3.2"
  - "18.3.4"
  - "18.3.5"
  - "18.3.5.1"
  - "18.3.5.2"
---

> [!TLDR]
> Bellman recursion compares the immediate cost plus the best remaining cost at the next state, then records the minimizing decisions.

## Discrete dynamic decision models

This lesson needs school algebra, finite sums, and tables. A **stage** is one decision position in a finite sequence, not necessarily a physical time. A **state** records the information required to determine future allowed decisions and costs. An **action** is a permitted choice at that state. A transition specifies the next state.

For stages $k=0,\ldots,N-1$, write $s_k$ for the state, $a_k\in A_k(s_k)$ for an allowed action, and

$$
s_{k+1}=T_k(s_k,a_k).
$$

This lesson assumes finite state and action sets, deterministic transitions, and a finite number of stages. Under these assumptions, all nonempty sets of candidate costs have an attained minimum. Continuous-state and infinite-horizon problems need additional existence and convergence hypotheses.

## n-stage decision processes and total cost

Let $c_k(s,a)$ be the immediate cost and $g(s_N)$ a terminal cost. For a permitted sequence, define

$$
J=\sum_{k=0}^{N-1}c_k(s_k,a_k)+g(s_N).
$$

We minimize $J$ from a specified initial state. A **policy** gives an action $\pi_k(s)$ at each relevant stage and state. This is more information than one optimized sequence: the policy also says what to do if a different state is reached.

The state must contain all relevant history. If a later cost depends on whether an item was previously selected, remaining allowance alone may not be a sufficient state; include that selection information or its effect. This is the **Markov** or sufficient-state property in this deterministic setting.

## Properties of the cost function

Additivity separates immediate and remaining cost. Costs can be negative in a finite acyclic stage model; finiteness of the horizon prevents endless accumulation around a cycle. In an infinite-horizon model, negative cycles or undiscounted costs can make the value undefined or unbounded. None of those conclusions should be imported into the present finite table without checking the model.

Use value $+\infty$ to mark a state from which no permitted completion exists. If some terminal states are forbidden, assign $g=+\infty$ there. This convention prevents an infeasible branch from winning merely because it has a low partial cost. A maximization problem instead commonly uses $-\infty$ for impossible states.

## Formulation of Bellman functional equations

Define $V_k(s)$ as the smallest remaining cost starting in state $s$ at stage $k$. Then

$$
V_N(s)=g(s),\qquad
V_k(s)=\min_{a\in A_k(s)}\{c_k(s,a)+V_{k+1}(T_k(s,a))\}.
$$

These are called functional equations because the unknown is a value function on states. For finite states, they are simply a finite system of table calculations. They are evaluated **backward**, beginning with the known terminal values. They are not solved by assuming that the cheapest immediate action is best.

## Bellman's principle of optimality

After the first action of an optimal policy, the remaining decisions must be optimal for the resulting state. If a cheaper permitted suffix existed, replacing the old suffix would reduce the full additive cost while leaving the prefix unchanged. That contradicts optimality. The replacement argument requires that the state contain all information that determines suffix feasibility and cost.

This argument proves the recursion by backward induction: the terminal values are correct; if the next-stage values are correct, comparing all first actions plus those values gives the correct current value. The principle does not assert that a part of any arbitrary good solution is optimal, or that a locally cheapest action is optimal. See [Bertsekas's finite-horizon lectures](https://ocw.mit.edu/courses/6-231-dynamic-programming-and-stochastic-control-fall-2015/pages/lecture-notes/) for the broader formulation.

## Worked backward calculation

At stage zero there is state $S$. An action reaches $A$ at cost two or $B$ at cost one. At stage one, $A$ can reach terminal $T$ at cost two; $B$ can reach $T$ at cost five. Set $V_2(T)=0$. Then $V_1(A)=2$ and $V_1(B)=5$. Thus

$$
V_0(S)=\min\{2+2,\ 1+5\}=4.
$$

The optimal route is $S\to A\to T$. The cheapest first edge would choose $B$, costing six overall. This is the simplest reason to store future values rather than use a greedy rule.

![[catalogue-ch18-bellman-stages.svg|**Fig. C.ch18.3** Backward values compare full remaining costs. The first edge of cost 2 leads to total cost 4, beating the first edge of cost 1.]]

## Minimum costs and the optimal policy

Alongside each value, store at least one minimizing action:

$$
\pi_k(s)\in\operatorname*{arg\,min}_{a\in A_k(s)}
\{c_k(s,a)+V_{k+1}(T_k(s,a))\}.
$$

The notation $\arg\min$ returns a choice, while $\min$ returns its value. Ties give several optimal policies; a fixed tie rule makes output reproducible. After backward calculation, follow the recorded policy **forward** from the initial state. For the example, record “choose A” at S and “choose T” at A. Keeping only the value four is insufficient to reconstruct the route unless one recomputes the comparisons.

Dynamic programming saves work when many histories reach the same state, because their remaining problems share one table entry. If the state must store almost the whole history, the table can still be enormous. This is the state-space growth limitation, not a failure of the recurrence.

## Practice

1. Change the edge $B\to T$ to cost two in the example. Recompute values and the optimal policy.
2. Suppose a coupon can reduce one future action cost, but the state records only the current vertex. What information is missing?

## Worked answers

1. Now $V_1(A)=2$ and $V_1(B)=2$. The two initial totals are four and three, so choose B and obtain minimum three.
2. The state must also record whether the coupon is still available. Two histories at the same vertex with different coupon status have different future possibilities, so combining their values in one table entry can produce a wrong answer.
