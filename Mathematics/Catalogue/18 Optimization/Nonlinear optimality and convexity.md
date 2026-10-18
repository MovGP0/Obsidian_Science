---
title: "Nonlinear optimality and convexity"
catalogue_ids:
  - "18.2"
  - "18.2.1"
  - "18.2.1.1"
  - "18.2.1.2"
  - "18.2.1.3"
  - "18.2.2"
  - "18.2.2.1"
---

> [!TLDR]
> Nonlinear optimality conditions describe candidate solutions; convexity turns suitable first-order conditions into global certificates.

## Problem statement and prerequisite route

Read [[07.03 The derivative]], [[12.02 Partial derivatives]], and [[12.06 Gradients and extrema]]. A vector $x\in\mathbb R^n$ is an ordered list of $n$ real choices. A gradient $\nabla f$ collects first partial derivatives, and a Hessian $H_f$ is the matrix of second partial derivatives. This lesson explains what these objects test.

A general nonlinear program minimizes $f(x)$ subject to inequalities $g_i(x)\leq0$ and equalities $h_j(x)=0$. At least one expression is nonlinear. The feasible set contains choices obeying all restrictions. A **global minimum** beats every feasible choice; a **local minimum** beats only sufficiently nearby feasible choices. A problem can have several local minima, an empty feasible set, or no attained minimum.

## Interior optimality conditions

At an interior local minimum of a differentiable function, movement in either coordinate direction cannot give first-order improvement, so $\nabla f(x)=0$. Such a point is **stationary**. Stationarity alone is insufficient: $f(x)=x^3$ has derivative zero at zero but no minimum there.

For a twice continuously differentiable function, a positive-definite Hessian at a stationary point proves a strict local minimum. Positive definite means $v^{\mathsf T}H_fv>0$ for every nonzero direction $v$. The Taylor quadratic is then positive for all small nonzero changes. A positive-semidefinite Hessian is necessary at an interior local minimum, but is not sufficient: $-x^4$ has second derivative zero at zero and a maximum there.

## Convex optimization

A set $C$ is convex when it contains the segment between any two of its points. A function is convex on a convex domain when

$$
f((1-t)x+ty)\leq(1-t)f(x)+tf(y),\qquad 0\leq t\leq1.
$$

Its graph lies below each chord. For example, $f(x)=x^2$ is convex because the right side minus the left side is $t(1-t)(x-y)^2\geq0$. Convexity concerns the entire specified domain, not merely a neighborhood of one point.

For differentiable convex $f$,

$$
f(y)\geq f(x)+\nabla f(x)^{\mathsf T}(y-x).
$$

This supporting-plane inequality makes a zero gradient a global certificate on an open convex domain. More generally, over a convex set $C$, the condition $\nabla f(x)^{\mathsf T}(y-x)\geq0$ for every $y\in C$ certifies global optimality. Every local minimum of a convex problem is global. Strict convexity gives at most one minimizer, but does not by itself guarantee existence.

## Constrained optimality and KKT conditions

Define the **Lagrangian**

$$
L(x,\lambda,\nu)=f(x)+\sum_i\lambda_i g_i(x)+\sum_j\nu_jh_j(x).
$$

The multipliers $\lambda_i$ must be nonnegative; equality multipliers $\nu_j$ can have either sign. The Karush–Kuhn–Tucker, or KKT, conditions are primal feasibility, $\lambda\geq0$, stationarity $\nabla_xL=0$, and **complementarity** $\lambda_i g_i(x)=0$ for each inequality.

For differentiable problems these are necessary at a local minimum under a suitable constraint qualification. A concrete sufficient qualification is linear independence of the equality gradients and active inequality gradients. An inequality is active when it equals zero. Without qualification, necessity can fail: minimize $x$ subject to $x^2\leq0$. Only $x=0$ is feasible, but stationarity would require $1+\lambda(0)=0$, which is impossible.

For convex differentiable objectives and inequalities, with affine equalities, any KKT point is globally optimal. Necessity additionally follows under Slater's condition: a point in the relative interior of the common convex domain satisfies all inequalities strictly and the affine equalities exactly. These hypotheses and the distinction between necessity and sufficiency are essential. See [Boyd and Vandenberghe, chapter 5](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf).

## Worked constrained certificate

Minimize $f(x)=(x-2)^2$ with $x\leq1$. Write $g=x-1$. The unconstrained minimum $2$ is infeasible. At $x=1$, stationarity gives $2(1-2)+\lambda=0$, hence $\lambda=2$. Feasibility, nonnegative multiplier, and complementarity all hold. Convexity proves global optimality, with value $1$.

There is also a direct check: every $x\leq1$ has $2-x\geq1$, so $(x-2)^2\geq1$. The multiplier condition summarizes this supporting-boundary geometry.

## Duality in optimization

The dual function is $q(\lambda,\nu)=\inf_x L(x,\lambda,\nu)$, with the infimum over the specified domain. At a feasible point and with $\lambda\geq0$, $L\leq f$, so $q$ is a lower bound on every feasible objective. Maximizing that bound is the dual problem. Weak duality holds even without convexity; equality of best bounds needs additional hypotheses.

For the worked example, minimizing $L=(x-2)^2+\lambda(x-1)$ over real $x$ gives $x=2-\lambda/2$ and $q(\lambda)=\lambda-\lambda^2/4$. Its maximum for $\lambda\geq0$ occurs at $2$ and equals $1$. The primal and dual values match. In a nonconvex problem, they can differ; a stationary Lagrangian point alone need not evaluate the infimum defining $q$.

## Practice

1. Classify the stationary point of $x^4$ and of $-x^2$. Which objective is convex on $\mathbb R$?
2. Minimize $(x+1)^2$ subject to $x\geq0$ and give KKT multipliers using a $g\leq0$ convention.

## Worked answers

1. Both are stationary at zero. The first is a global minimum because $x^4\geq0$ and is convex since $f''=12x^2\geq0$. The second has a strict maximum at zero and is concave, not convex.
2. Use $g=-x$. At $x=0$, stationarity is $2(x+1)-\lambda=0$, so $\lambda=2$. All KKT conditions hold and convexity gives the unique global minimum, of value $1$.
