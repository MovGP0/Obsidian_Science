---
title: "Feasible directions and projected gradients"
catalogue_ids:
  - "18.2.7"
  - "18.2.7.1"
  - "18.2.7.2"
  - "18.2.7.3"
---

> [!TLDR]
> Constrained descent must improve the objective while respecting the feasible set, either through an allowed direction or a projection.

## Problem statement and assumptions

Read [[Nonlinear optimality and convexity]] and [[Direct search and unconstrained descent]]. We minimize a differentiable objective $f(x)$ subject to $g_i(x)\leq0$. A descent direction $d$ satisfies $\nabla f(x)^{\mathsf T}d<0$. This predicts a reduction for sufficiently small positive steps, but says nothing by itself about feasibility.

At an active linear inequality $a_i^{\mathsf T}x\leq b_i$, a feasible straight direction satisfies $a_i^{\mathsf T}d\leq0$. For an inactive row, a small step remains allowed until its slack is used. For smooth curved constraints, $\nabla g_i(x)^{\mathsf T}d<0$ at every active row is a useful strict inward condition. A zero directional derivative is not enough: at the origin the constraint $y\geq x^2$ allows tangent direction $(1,0)$ to first order, but $(t,0)$ is infeasible for every nonzero $t$.

For a convex objective on a convex feasible set, first-order certificates can prove global optimality. For nonconvex problems, these methods generally seek stationary or locally optimal choices. Always distinguish the model assumptions from the numerical stopping rule.

## Method of feasible directions

Start from a feasible point. Choose a direction that improves $f$ and stays in the set for a sufficiently small step. For linear constraints, impose the active-row directional inequalities and a size bound such as $-1\leq d_j\leq1$. Minimize $\nabla f(x)^{\mathsf T}d$ over that small direction problem. If the best value is negative, line search along that direction while checking all constraints.

For a compact convex feasible set $C$, an alternative is to choose $v\in C$ minimizing $\nabla f(x)^{\mathsf T}v$ and set $d=v-x$. Every step $x+\alpha d$, $0\leq\alpha\leq1$, remains feasible by convexity. This conditional-gradient construction makes feasibility automatic, although the small linear subproblem may itself require a solver.

## Worked feasible-direction calculation

Minimize $f(x,y)=(x-2)^2+(y-1)^2$ on the triangle

$$
C=\{(x,y):x\geq0,\ y\geq0,\ x+y\leq2\}.
$$

At $(1,1)$, the gradient is $(-2,0)$. The unrestricted negative gradient $(2,0)$ would leave the triangle. The direction $d=(1,-1)$ satisfies the active condition $d_x+d_y=0$ and gives derivative $-2<0$. Along it,

$$
f(1+t,1-t)=(t-1)^2+t^2=2t^2-2t+1.
$$

Feasibility holds for $0\leq t\leq1$. The derivative $4t-2$ vanishes at $t=1/2$, giving $(3/2,1/2)$ and value $1/2$. At that point $\nabla f=(-1,-1)$, and for any feasible $(u,v)$,

$$
\nabla f^{\mathsf T}((u,v)-(3/2,1/2))=2-u-v\geq0.
$$

Convexity therefore certifies the global solution. The gradient is nonzero because the minimizer lies on a boundary.

![[catalogue-ch18-projected-step.svg|**Fig. C.ch18.2** An unconstrained descent step leaves the triangle. Projection returns it to the boundary, and a feasible direction moves along that boundary.]]

The blue segment in Fig. C.ch18.2 points along an allowed edge. The orange outside proposal is useful only as an intermediate calculation; it is not a feasible iterate to report.

## Projected gradient method

For a nonempty closed convex set $C$, the **Euclidean projection** $P_C(z)$ is the unique point in $C$ closest to $z$. Projected gradient computes

$$
x_{k+1}=P_C(x_k-\alpha\nabla f(x_k)).
$$

The projection can be easy for a box: replace each coordinate by $\min(u_i,\max(l_i,z_i))$. Projection onto a general set is a separate optimization problem. On a nonconvex set, projections can be multiple-valued, so the formula requires a selection rule and different convergence analysis.

For the triangle example, from $(1,1)$ with $\alpha=1/2$, the outside proposal is $(2,1)$. The nearest point on the line $x+y=2$ subtracts the same amount $1/2$ from each coordinate, giving $(3/2,1/2)$. Both coordinates are nonnegative, so this line projection is also the triangle projection. In another example, the line projection could have a negative coordinate and require a vertex instead.

## Why a projected step can decrease the objective

Let $p=P_C(x-\alpha g)$, $g=\nabla f(x)$, and assume $x\in C$. The projection inequality gives $g^{\mathsf T}(p-x)\leq-\|p-x\|^2/\alpha$. If the gradient is Lipschitz with constant $L$ on a convex region containing the step, then

$$
f(p)\leq f(x)-\left(\frac1\alpha-\frac L2\right)\|p-x\|^2.
$$

Thus $0<\alpha<2/L$ guarantees decrease for a nonzero step. The condition $x=P_C(x-\alpha\nabla f(x))$ is equivalent to the first-order variational inequality on a closed convex set. With convex $f$, it certifies a global minimum. A small projected step is often a better boundary stopping measure than a small raw gradient.

## Practice

1. Minimize $(x-3)^2$ on $[0,1]$. From $x=0$, take a projected gradient step with $\alpha=1/2$.
2. At $(0,0)$ for $y\geq x^2$, explain why the direction $(1,1)$ is safer than $(1,0)$ for sufficiently small positive steps.

## Worked answers

1. The derivative is $-6$, so the outside proposal is three. Projecting to $[0,1]$ gives $x=1$, the global constrained minimum. Its derivative is $-4$, which need not be zero at a boundary optimum.
2. The first direction gives $(t,t)$, and $t\geq t^2$ holds for $0\leq t\leq1$. The second gives $(t,0)$, violating $0\geq t^2$ whenever $t\ne0$. First-order tangency alone does not establish feasibility.
