---
title: "Linear models and graphical solutions"
catalogue_ids:
  - "18.1"
  - "18.1.1"
  - "18.1.1.1"
  - "18.1.1.2"
---

> [!TLDR]
> A linear program optimizes a linear expression over the intersection of linear constraints.

## Choices, objectives, and linear forms

Start with [[Linear and quadratic equations]] and [[Solving linear and quadratic inequalities]]. This lesson needs only substitution and a coordinate grid. A **linear program**, or LP, chooses real numbers to maximize or minimize an expression such as $3x+2y$, subject to restrictions such as $x+y\leq4$. Products such as $xy$ and squares such as $x^2$ are not linear in the unknowns. A fixed constant coefficient, such as $3x$, is allowed.

The term *program* means a mathematical decision plan. It does not require computer code. Collecting variables in a column $u=(u_1,\ldots,u_n)^{\mathsf T}$ gives the compact objective $c^{\mathsf T}u=\sum_j c_ju_j$. The superscript $\mathsf T$ means transpose. An array of constraint coefficients is a matrix $A$, so $Au\leq b$ means one inequality per row.

## Forms of linear optimization

An LP can contain $\leq$, $\geq$, or equality constraints. Variables can be nonnegative or unrestricted. Maximizing $f$ is equivalent to minimizing $-f$: the same choice solves both, but the reported values have opposite signs. Multiplying a constraint by $-1$ reverses its inequality. Thus $x-y\geq2$ becomes $-x+y\leq-2$.

Do not discard sign restrictions when changing forms. Replacing an unrestricted variable $x$ by $x^+-x^-$ with $x^+,x^-\geq0$ preserves every real value of $x$. Replacing it by one nonnegative variable does not. The systematic equality conversion appears in [[Bases and simplex tableaux]].

## Geometric representation

In two variables, an equality $ax+by=d$ describes a line. The inequality $ax+by\leq d$ selects one side, including the line. Test a point off the line to determine which side. The intersection of all selected sides is the feasible region, a convex polygon, an unbounded region, a segment, a point, or the empty set.

Convex means that the segment between any two feasible points stays feasible. To check this directly, if $Au\leq b$ and $Av\leq b$, then for $0\leq t\leq1$,

$$
A((1-t)u+tv)=(1-t)Au+tAv\leq b.
$$

The objective has straight parallel level lines. Moving a level line in the improving direction until it last touches the feasible set gives a graphical solution.

## Worked graphical solution

Maximize $z=3x+2y$ subject to

$$
x+y\leq4,\qquad x\leq2,\qquad x,y\geq0.
$$

The vertices are $(0,0),(2,0),(2,2),(0,4)$. Evaluate the objective at each:

| Vertex | Objective value |
| --- | --- |
| $(0,0)$ | $0$ |
| $(2,0)$ | $6$ |
| $(2,2)$ | $10$ |
| $(0,4)$ | $8$ |

Thus $(2,2)$ is the best vertex. We can also prove global optimality without relying on a drawing:

$$
3x+2y=2(x+y)+x\leq2(4)+2=10.
$$

The feasible choice $(2,2)$ reaches that bound. This proves that it is globally optimal. Equality requires both $x+y=4$ and $x=2$, so the optimum is unique.

![[catalogue-ch18-linear-region.svg|**Fig. C.ch18.1** The feasible polygon lies below x + y = 4 and to the left of x = 2. The objective reaches 10 at their intersection.]]

The orange objective line in Fig. C.ch18.1 supports the polygon at the optimum. It intersects the extended constraint lines outside the permitted region too; those points do not enter the comparison.

## Why vertices suffice here

For a bounded polygon, every point is a convex combination of vertices. A linear objective takes the same convex combination of their values, so it cannot exceed the largest vertex value. If an entire edge has the same largest value, every point on that edge is optimal. The phrase “the optimum is a vertex” should therefore mean that at least one optimal vertex exists in this setting, not that every optimum must be a vertex.

For a general unbounded polyhedron, first check existence and boundedness. The unconstrained problem $\max x$ has no optimum. The strip $0\leq x\leq1$ with $y$ unrestricted has optimal points for $\max x$ but no vertices. Standard nonnegative equality form gives a more suitable basis theorem.

## Practice

1. Replace the objective in the worked example by $x+y$. Find all optimizers.
2. Maximize $x+y$ subject to $x-y\leq1$ and $x,y\geq0$. Is there a finite optimum?

## Worked answers

1. The constraint gives $x+y\leq4$. Every point $(x,4-x)$ with $0\leq x\leq2$ is feasible and reaches $4$. The whole upper slanted edge is optimal.
2. The points $(t,t)$ satisfy $x-y=0\leq1$ for every $t\geq0$. Their values are $2t$, with no upper bound. A plot that stops at a finite frame can hide this unboundedness.
