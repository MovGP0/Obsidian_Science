---
title: "Transport assignment and allocation"
catalogue_ids:
  - "18.1.4"
  - "18.1.4.1"
  - "18.1.4.2"
  - "18.1.4.3"
---

> [!TLDR]
> Structured linear models allocate amounts or assign discrete pairs while preserving supplies and requirements.

## Special linear optimization problems

Read [[Linear models and graphical solutions]] first. A general LP solver can solve many allocation problems, but the pattern of restrictions can give simpler methods and stronger conclusions. Transportation moves divisible amounts between indexed sources and destinations. Assignment chooses one pair per row and column. Allocation distributes a limited allowance among activities.

The labels *transportation* and *allocation* describe mathematical models here. The numbers can be abstract tokens and scores. The variable domain is part of the model: a fractional amount is suitable for a divisible token pool, but a single indivisible task requires an integer decision.

## Transportation problem

Let $s_i$ be the available amount at source $i$, $d_j$ the required amount at destination $j$, and $c_{ij}$ the cost per allocated unit. Choose $x_{ij}\geq0$ and minimize

$$
\sum_{i,j}c_{ij}x_{ij},\qquad
\sum_jx_{ij}=s_i,\qquad \sum_ix_{ij}=d_j.
$$

The equality model requires $\sum_i s_i=\sum_jd_j$. If the totals differ, either model unused supply explicitly or add a dummy destination with a stated disposal cost. A zero-cost dummy row or column is justified only if the omitted activity really has zero cost.

### Worked transportation example

Take supplies $(3,2)$, demands $(2,3)$, and costs

$$
C=\begin{pmatrix}1&4\\3&2\end{pmatrix}.
$$

Put $t=x_{11}$. The row and column sums force $x_{12}=3-t$, $x_{21}=2-t$, and $x_{22}=t$. Nonnegativity gives $0\leq t\leq2$. The total cost is

$$
t+4(3-t)+3(2-t)+2t=18-4t.
$$

It decreases as $t$ increases. Therefore choose $t=2$, giving $X=\begin{pmatrix}2&1\\0&2\end{pmatrix}$ and cost $10$. This reduction proves global optimality, including all fractional choices.

For larger tables, a transportation simplex pivot changes amounts around a closed alternating row-column cycle. Adding $\theta$ to alternating cells and subtracting it from the others preserves all sums. Stop increasing $\theta$ when a subtracted cell reaches zero. The cost changes by $\theta$ times the alternating sum of cell costs.

## Assignment problem

For $n$ rows and $n$ columns, set $x_{ij}=1$ when row $i$ is paired with column $j$, otherwise zero. Require each row and column sum to equal one, and minimize $\sum c_{ij}x_{ij}$. In this special model, relaxing $x_{ij}$ to $x_{ij}\geq0$ still admits an integral optimal vertex. This integrality property is not true for arbitrary linear models with integer-looking data.

For $C=\begin{pmatrix}4&1\\2&3\end{pmatrix}$, the two possible assignments have costs $4+3=7$ and $1+2=3$. Choose the cross pairing. One step of the **Hungarian method** illustrates why row reduction is valid: subtract each row's smallest entry, obtaining $\begin{pmatrix}3&0\\0&1\end{pmatrix}$. Every full assignment loses the same constant $1+2=3$, so the ranking is unchanged. The two independent zeros supply an assignment of reduced cost zero and original cost three.

If independent zeros do not cover every row, cover all zeros with a minimum number of rows and columns. Subtract the smallest uncovered entry from uncovered cells and add it at doubly covered cells; singly covered cells stay unchanged. Repeat until a complete zero assignment exists. The associated row and column adjustments provide a dual certificate. The full correctness proof uses matching theory, beyond the elementary two-by-two example.

## Allocation problem

A continuous allocation model chooses $x_j\geq0$ with $\sum_jx_j\leq B$, bounds $x_j\leq u_j$, and scores $v_jx_j$. If every unit consumes exactly one allowance unit, assign to the largest positive $v_j$ first, up to its bound. An exchange of a small amount from a lower-score activity to a higher-score activity improves the objective, which proves this rule for the stated model.

For allowance $5$, caps $(2,4)$, and scores $(5,3)$, assign $(2,3)$ for score $19$. If consumption coefficients differ, compare score per consumed unit in this single-resource divisible model. With multiple resources, the simple sorting argument can fail. With indivisible objects, even sorting by value-to-size can fail; see [[Purchasing and knapsack policies]].

## Practice

1. In the transportation example, change only $c_{12}$ from $4$ to $1$. Find the new best value of $t$.
2. Allocate allowance $4$ to divisible activities with scores $(7,4)$ and caps $(1,5)$. Prove the result with an exchange argument.

## Worked answers

1. The cost becomes $t+(3-t)+3(2-t)+2t=9-t$. It still decreases, so $t=2$ remains optimal, with cost $7$.
2. Assign $(1,3)$ and obtain $19$. Any feasible choice with $x_1<1$ and $x_2>0$ can transfer an amount $\delta>0$ from the second activity to the first, gaining $(7-4)\delta$. Unused allowance should also be used while a positive-score activity has room.
