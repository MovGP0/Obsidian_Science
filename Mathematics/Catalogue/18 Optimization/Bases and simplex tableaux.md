---
title: "Bases and simplex tableaux"
catalogue_ids:
  - "18.1.2"
  - "18.1.2.1"
  - "18.1.2.2"
  - "18.1.3"
  - "18.1.3.1"
  - "18.1.3.2"
  - "18.1.3.3"
---

> [!TLDR]
> Simplex changes a feasible basis by a pivot that improves the objective while preserving nonnegative variables.

## Standard form and slack variables

Read [[Linear models and graphical solutions]] and [[10.04 Linear systems]]. We use the standard form $\max c^{\mathsf T}x$ subject to $Ax=b$, $x\geq0$. Some texts use minimization as their standard form; the sign convention must always be stated.

For an inequality $a^{\mathsf T}x\leq b$, add a nonnegative **slack** $s$: $a^{\mathsf T}x+s=b$. Its value measures the unused allowance. For $a^{\mathsf T}x\geq b$, subtract a nonnegative surplus instead. Split unrestricted variables into differences of nonnegative variables. These operations preserve the original feasible choices after auxiliary variables are removed.

## Vertex and basis

Assume $A$ has $m$ independent rows. Select $m$ linearly independent columns; their square matrix is a **basis matrix** $B$. Set the other variables to zero and solve $Bx_B=b$. The result is a **basic solution**. It is a basic feasible solution when $x_B\geq0$.

A vertex cannot be written as a strict average of two distinct feasible points. In this standard form, vertices and basic feasible solutions describe the same feasible points. A basis is a set of columns, whereas a vertex is a point. Several bases can describe the same vertex when some basic variables are zero. This is **degeneracy**. It can cause zero-length pivots and cycling under careless pivot rules.

## Initial simplex tableau

Use $\max z=3x+2y$ with $x+y\leq4$, $x\leq2$, and $x,y\geq0$. Add slacks $s_1,s_2$. The initial tableau represents equations, including $z-3x-2y=0$:

| Basic row | $x$ | $y$ | $s_1$ | $s_2$ | Right side |
| --- | --- | --- | --- | --- | --- |
| $s_1$ | 1 | 1 | 1 | 0 | 4 |
| $s_2$ | 1 | 0 | 0 | 1 | 2 |
| $z$ | −3 | −2 | 0 | 0 | 0 |

The slack columns form an identity matrix, so setting $x=y=0$ gives the feasible basis $(s_1,s_2)=(4,2)$. In this convention, a negative objective-row coefficient indicates a possible improvement by increasing that nonbasic variable.

## Transition to a new tableau

Let $x$ enter. Increasing $x$ by $t$ gives $s_1=4-t$ and $s_2=2-t$. Nonnegativity requires $t\leq4$ and $t\leq2$. The **minimum-ratio test** selects $t=2$; $s_2$ leaves. Only positive entries in the entering column give upper bounds in this test.

Use the pivot entry in the $s_2$ row to clear the other entries in the $x$ column. The row operations are $R_1\leftarrow R_1-R_2$ and $R_z\leftarrow R_z+3R_2$:

| Basic row | $x$ | $y$ | $s_1$ | $s_2$ | Right side |
| --- | --- | --- | --- | --- | --- |
| $s_1$ | 0 | 1 | 1 | −1 | 2 |
| $x$ | 1 | 0 | 0 | 1 | 2 |
| $z$ | 0 | −2 | 0 | 3 | 6 |

Now let $y$ enter. The first row gives the only bound, $y\leq2$; $s_1$ leaves. Add twice the first row to the objective row:

| Basic row | $x$ | $y$ | $s_1$ | $s_2$ | Right side |
| --- | --- | --- | --- | --- | --- |
| $y$ | 0 | 1 | 1 | −1 | 2 |
| $x$ | 1 | 0 | 0 | 1 | 2 |
| $z$ | 0 | 0 | 2 | 1 | 10 |

The last row says $z=10-2s_1-s_2$. Since slacks are nonnegative, $z\leq10$. With nonbasic slacks zero, the solution is $(x,y)=(2,2)$. The tableau itself supplies a certificate.

## When slacks do not supply an initial basis

For $x\geq2$, the equation $x-s=2$ gives the infeasible starting value $s=-2$ if $x=0$. Introduce an **artificial variable** $a\geq0$ and write $x-s+a=2$. In phase I minimize $a$; $x=2,s=a=0$ gives phase-I minimum zero. Remove artificial variables before optimizing the original objective.

For several rows, minimize the sum of artificial variables. A strictly positive phase-I optimum proves infeasibility. A zero-valued basic artificial variable must be pivoted out, or its redundant row removed, before phase II. Merely deleting its column can destroy the basis.

## Stopping and exceptional cases

If an improving entering column has no positive entry in a feasible tableau, the objective is unbounded in that direction. If ratios tie, choose a consistent anti-cycling rule, such as Bland's smallest-index rule. A practical implementation also needs numerical tolerances; an almost-zero pivot can magnify error. Simplex is a finite exact-arithmetic algorithm with an anti-cycling rule, but it does not have a polynomial worst-case pivot bound in general.

## Practice

1. For $\max 2x+y$ subject to $x+y\leq3$, $x\leq1$, $x,y\geq0$, give the first entering variable, leaving slack, and optimum.
2. Can a basic feasible solution contain a zero basic variable? Explain the consequence.

## Worked answers

1. With the most-negative coefficient rule, $x$ enters. Ratios are $3$ and $1$, so the slack of $x\leq1$ leaves. Next $y$ increases to $2$. The value is $4$, and $2x+y=(x+y)+x\leq3+1=4$ proves optimality.
2. Yes. This is degeneracy. For example, the basis may contain a variable fixed at zero by the other equations. A pivot can then change the basis without changing the point or objective, so anti-cycling rules matter.
