---
title: "Revised simplex and linear duality"
catalogue_ids:
  - "18.1.3.4"
  - "18.1.3.5"
---

> [!TLDR]
> Revised simplex solves smaller basis systems, and LP duality supplies matching bounds on the optimal value.

## Prerequisites and matrix notation

Read [[Bases and simplex tableaux]], [[10.03 Matrices]], and [[10.05 Inverses]]. The full tableau repeatedly transforms every constraint coefficient. **Revised simplex** computes only the information needed for the next basis change. In numerical software, one solves linear systems using a factorization of the basis rather than repeatedly forming an explicit inverse.

Consider standard-form maximization $\max c^{\mathsf T}x$, $Ax=b$, $x\geq0$. A feasible basis matrix $B$ gives $x_B=B^{-1}b$. Write $c_B$ for the objective coefficients of basic variables. Define a vector $\pi$ by the system $B^{\mathsf T}\pi=c_B$.

## Revised simplex steps

For a nonbasic column $a_j$, its **reduced cost** is

$$
\bar c_j=c_j-a_j^{\mathsf T}\pi.
$$

Why subtract the second term? Increasing $x_j$ by $t$ forces the current basic variables to change to $x_B-tB^{-1}a_j$. The objective change is $t(c_j-c_B^{\mathsf T}B^{-1}a_j)=t\bar c_j$. Thus a positive reduced cost improves our maximization problem.

Solve $Bd=a_j$. If some $d_i>0$, the largest feasible step is $\min_{d_i>0}(x_B)_i/d_i$. Replace the limiting basis column by $a_j$, update the factorization, and repeat. If all reduced costs are nonpositive, the current basis is optimal. If an improving column has $d\leq0$, it gives an unbounded improving ray.

## Worked basis calculation

For the two-constraint example $x+y+s_1=4$, $x+s_2=2$, take the intermediate basis $(s_1,x)$. Its columns and objective coefficients are

$$
B=\begin{pmatrix}1&1\\0&1\end{pmatrix},\qquad
x_B=\begin{pmatrix}2\\2\end{pmatrix},\qquad
c_B=\begin{pmatrix}0\\3\end{pmatrix}.
$$

The equations $B^{\mathsf T}\pi=c_B$ give $\pi=(0,3)$. For $y$, $a_y=(1,0)^{\mathsf T}$ and $c_y=2$, so $\bar c_y=2$. Solving $Bd=a_y$ gives $d=(1,0)$. The ratio test gives step $2$: $s_1$ leaves and $y$ enters. The new objective is $6+2(2)=10$, exactly as in the full tableau.

## Duality in linear optimization

For the inequality form

$$
\max\{c^{\mathsf T}x:Ax\leq b,\ x\geq0\},
$$

the **dual** is

$$
\min\{b^{\mathsf T}u:A^{\mathsf T}u\geq c,\ u\geq0\}.
$$

Every primal feasible $x$ and dual feasible $u$ obey

$$
c^{\mathsf T}x\leq u^{\mathsf T}Ax\leq u^{\mathsf T}b.
$$

This elementary inequality is **weak duality**. Matching values certify that both choices are optimal. For finite-dimensional LPs, if the primal is feasible and has a finite optimal value, the dual has an optimizer with the same value. This is **strong duality**. If one side is unbounded in its improving direction, the other is infeasible; infeasibility on one side alone does not imply unboundedness on the other.

## Matching certificate and complementary slackness

In our example, $A=\begin{pmatrix}1&1\\1&0\end{pmatrix}$, $b=(4,2)$, and $c=(3,2)$. The dual inequalities are $u_1+u_2\geq3$, $u_1\geq2$, and $u\geq0$. Choose $u=(2,1)$. Its value is $4(2)+2(1)=10$, matching $x=y=2$.

The difference between feasible dual and primal values is a sum of nonnegative terms:

$$
b^{\mathsf T}u-c^{\mathsf T}x
=\sum_i u_i(b-Ax)_i+\sum_j x_j(A^{\mathsf T}u-c)_j.
$$

At equality, every product vanishes. These **complementary slackness** conditions mean a positive dual multiplier requires a tight corresponding primal constraint, and a positive primal variable requires a tight corresponding dual constraint. A tight constraint does not force a positive multiplier.

In the standard equality form $Ax=b$, the dual multiplier $\pi$ is unrestricted in sign, with $A^{\mathsf T}\pi\geq c$. Confusing this with $u\geq0$ for $Ax\leq b$ is a frequent sign error. At an optimal revised-simplex basis, the reduced-cost tests are precisely the corresponding dual inequalities.

## Interpreting a dual multiplier

In the worked example, multiplier $u_1=2$ gives the local change in optimal value when the first allowance changes. Replace $x+y\leq4$ by $x+y\leq4+\varepsilon$, while keeping $x\leq2$. As long as $\varepsilon\geq-2$, the candidate $(2,2+\varepsilon)$ remains feasible and the same dual vector gives bound $2(4+\varepsilon)+2=10+2\varepsilon$. The candidate reaches that bound, so this is the exact value throughout that range.

For a larger decrease, the second coordinate would become negative. The old basis is no longer feasible, so extending that sensitivity formula is unjustified. For example, with $\varepsilon=-3$, the new constraint is $x+y\leq1$; the optimum is $(1,0)$ with value three, rather than the old formula's four. The old dual vector still gives a valid upper bound of four, but it is no longer the best bound. This distinction explains why multipliers describe sensitivity only while the relevant solution structure remains valid.

## Practice

1. Maximize $5x$ with $2x\leq6$, $x\geq0$. Construct a dual certificate.
2. If primal and dual feasible values are $9.98$ and $10.03$, what certified conclusion follows?

## Worked answers

1. The primal choice $x=3$ gives $15$. The dual is $\min6u$ with $2u\geq5$ and $u\geq0$. Choosing $u=5/2$ gives $15$, proving optimality.
2. The optimum lies in $[9.98,10.03]$. The primal choice is at most $0.05$ below optimum. Equality has not been proved; numerical residuals must also confirm both feasibility claims.
