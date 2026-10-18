---
title: "Quadratic programs and complementarity methods"
catalogue_ids:
  - "18.2.2.2"
  - "18.2.3"
  - "18.2.3.1"
  - "18.2.3.2"
---

> [!TLDR]
> A convex quadratic program has linear stationarity equations and nonnegative complementary pairs that specialized methods can solve.

## Quadratic optimization

Read [[Nonlinear optimality and convexity]], [[10.03 Matrices]], and [[10.04 Linear systems]]. A **quadratic program**, or QP, minimizes

$$
f(x)=\tfrac12x^{\mathsf T}Qx+c^{\mathsf T}x
$$

under linear constraints. We take $Q$ symmetric, since replacing it by $(Q+Q^{\mathsf T})/2$ leaves the scalar quadratic unchanged. Then $\nabla f=Qx+c$ and $H_f=Q$. If $Q$ is positive semidefinite, the objective is convex. If it is positive definite, it is strictly convex and grows without bound as $\|x\|$ grows. A nonempty closed feasible set then has a unique minimizer. Without these conditions, a QP can have local nonglobal minima or an unbounded objective.

For example, minimize $\tfrac12(x^2+y^2)$ subject to $x+y\geq2$. Write the active restriction as $2-x-y\leq0$. Stationarity gives $x=y=\lambda$. Complementarity gives $x+y=2$ because $\lambda=0$ would make the constraint infeasible. Thus $x=y=1$, $\lambda=1$, and the minimum is one. Completing squares on the line gives an independent check.

## Wolfe's method: complementary simplex pivots

Here **Wolfe's method** means the quadratic-programming simplex method, not the Frank–Wolfe conditional-gradient algorithm. The original construction uses simplex operations to solve the linear KKT equations while respecting complementary variable pairs. Its convex quadratic assumption matters; see [Wolfe's original paper](https://pages.cs.wisc.edu/~brecht/cs838docs/wolfe-qp.pdf).

For equality form $Ax=b$, $x\geq0$, introduce $v\geq0$ for the nonnegativity restrictions. The equations are

$$
Ax=b,\qquad Qx+c+A^{\mathsf T}\nu-v=0,\qquad x_jv_j=0.
$$

The first two relations are linear. The last says that $x_j$ and $v_j$ cannot both be positive. A simplex scheme adds artificial variables to establish a starting basis, then pivots with an extra eligibility rule to preserve complementarity. Complementary positive variables must not be allowed together merely because an ordinary LP pivot would improve an auxiliary objective. Artificial variables must reach zero before a QP answer is accepted.

### Small complementary pivot example

Minimize $\tfrac12x^2-2x$ subject to $x\geq0$. Stationarity is $x-v=2$, with $x,v\geq0$ and $xv=0$. Introduce $a\geq0$ and start from $x-v+a=2$ with basis $a=2$. Minimize the artificial value: the row gives $a=2-x+v$. Let $x$ enter and $a$ leave at $x=2$. Then $a=0$, $v=0$, complementarity holds, and the original objective is $-2$.

If the objective were $\tfrac12x^2+2x$, stationarity would give $v-x=2$. The allowed complementary solution would instead be $v=2,x=0$. These one-row pivots illustrate the variable-pair logic; large degenerate systems require a full complementary pivot implementation, not arbitrary case guessing.

## Hildreth–d'Esopo method

This method cyclically optimizes individual dual multipliers of a strictly convex QP with linear inequalities. We derive its update so the signs are checkable. Let $Q$ be positive definite, let $Ax\geq b$, and put $x_0=-Q^{-1}c$. For $\lambda\geq0$ use

$$
L=f(x)+\lambda^{\mathsf T}(b-Ax),\qquad
x=x_0+Q^{-1}A^{\mathsf T}\lambda.
$$

Substituting this stationary minimizer gives a concave dual quadratic. Set $G=AQ^{-1}A^{\mathsf T}$ and $d=b-Ax_0$. Apart from a constant, the dual is $d^{\mathsf T}\lambda-\tfrac12\lambda^{\mathsf T}G\lambda$. Holding all but coordinate $i$ fixed, maximize that parabola on $\lambda_i\geq0$:

$$
\lambda_i^{\mathrm{new}}=
\max\left(0,\lambda_i+\frac{d_i-(G\lambda)_i}{G_{ii}}\right).
$$

Use the latest updated coordinates in each sweep. After a change $\Delta\lambda_i$, update $x$ by $Q^{-1}a_i\Delta\lambda_i$, where $a_i$ is the transpose of row $i$. A nonzero row gives $G_{ii}>0$. A zero row must be removed if redundant or identified as infeasible, rather than divided by zero. The named coordinate method is also described in [Bricker's QP lecture](https://user.engineering.uiowa.edu/~dbricker/Stacks_pdf2/QP_H%26E.pdf).

### Worked dual-coordinate update

For the first example, $Q=I$, $c=0$, $A=(1,1)$, $b=2$. Thus $x_0=(0,0)$, $G=(2)$, and $d=2$. Starting at $\lambda=0$, the update gives $\lambda=\max(0,2/2)=1$. Recover $x=(1,1)$, already feasible and complementary. Its primal value and dual bound both equal one.

With several inequalities, intermediate primal iterates need not satisfy every row. The method is a dual coordinate ascent, not repeated clipping of primal coordinates. Under the stated positive-definite and feasible linear-constraint setting, cyclic coordinate optimization can recover the QP solution; monitor primal residuals, dual residuals, complementarity, and the primal-dual gap rather than only changes in $x$. Semidefinite $Q$ requires a different treatment because $Q^{-1}$ may not exist.

## Practice

1. Minimize $\tfrac12x^2$ subject to $x\geq3$ with one Hildreth update from zero.
2. For $\min\tfrac12x^2+3x$, $x\geq0$, solve the complementary stationarity equations.

## Worked answers

1. Here $Q=1$, $A=1$, $b=3$, $x_0=0$, $G=1$, and $d=3$. The multiplier becomes $3$ and $x=3$, with value $9/2$. The active constraint and multiplier certify the solution.
2. Stationarity is $x+3-v=0$. The choice $x=0,v=3$ is nonnegative and complementary. The alternative $v=0$ would give $x=-3$, which is infeasible. Thus the minimum is zero at the boundary.
