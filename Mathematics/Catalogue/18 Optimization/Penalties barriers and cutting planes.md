---
title: "Penalties barriers and cutting planes"
catalogue_ids:
  - "18.2.8"
  - "18.2.8.1"
  - "18.2.8.2"
  - "18.2.9"
---

> [!TLDR]
> Penalties discourage constraint error, barriers prevent boundary contact, and cutting planes refine bounds by linear inequalities.

## From constraints to a sequence of easier problems

Read [[Nonlinear optimality and convexity]] and [[Direct search and unconstrained descent]]. A constrained problem can be difficult even when evaluating its objective is easy. Penalty and barrier methods replace it by parameterized problems. Cutting-plane methods build linear approximations. Each method needs a check of the original constraints before a result is accepted.

The word *easier* is relative. A subproblem can still need a numerical solver. Large penalty coefficients and very small barrier parameters can make the curvature poorly scaled. A sequence of approximate subproblem answers is not automatically a convergent algorithm; accuracy and parameter updates must be coordinated.

## Penalty methods

For $g_i(x)\leq0$ and $h_j(x)=0$, a quadratic exterior penalty is

$$
F_\rho(x)=f(x)+\rho\sum_i\max(0,g_i(x))^2+\rho\sum_jh_j(x)^2,
\qquad \rho>0.
$$

Feasible points pay no added cost. Infeasible points pay for their violation. Increasing $\rho$ makes violation more expensive, but finite $\rho$ need not give an exactly feasible minimizer. Under suitable existence and boundedness assumptions, exact global minimizers of these subproblems have feasible accumulation points that solve the constrained problem as $\rho\to\infty$. Without such hypotheses, that statement is too broad.

### Worked exterior penalty

Minimize $(x-2)^2$ subject to $x\leq1$. For $x>1$, the penalized objective is $(x-2)^2+\rho(x-1)^2$. Its derivative vanishes when

$$
x_\rho=\frac{2+\rho}{1+\rho}=1+\frac1{1+\rho}.
$$

For every finite $\rho$, this point violates the constraint. The violation is $1/(1+\rho)$, tending to zero. For $x\leq1$, the best value is one at the boundary, while the exterior stationary point has penalized value $\rho/(1+\rho)<1$, so it is indeed the global penalized minimizer.

An absolute penalty $f(x)+\rho\max(0,x-1)$ behaves differently. For $\rho\geq2$ in this example, the constrained optimum $x=1$ is already a penalized global optimum. Such **exact penalties** can be nonsmooth. Their exactness requires a sufficiently large coefficient related to multipliers, not merely any positive coefficient.

## Barrier methods

A logarithmic barrier for inequalities uses

$$
B_\mu(x)=f(x)-\mu\sum_i\log(-g_i(x)),\qquad \mu>0,
$$

only on the strict interior $g_i(x)<0$. The logarithm diverges at the boundary, so every finite-parameter iterate stays inside if the subproblem and line search respect the domain. Equality constraints must be retained or eliminated separately. A problem with no strict interior cannot use this simple formula without reformulation.

For the same example, $B_\mu=(x-2)^2-\mu\log(1-x)$ on $x<1$. Write $\delta=1-x>0$. Stationarity gives

$$
2(\delta+1)=\frac\mu\delta,\qquad
\delta=\frac{\sqrt{1+2\mu}-1}{2}.
$$

Thus the barrier minimizer is $x_\mu=1-\delta$, approaching one from below as $\mu\downarrow0$. The original optimum is on the boundary, which no finite logarithmic barrier minimizer reaches. Convexity and a strictly positive second derivative establish uniqueness for each parameter in this example.

## Cutting-plane method

For differentiable convex $f$, the tangent expression at $x_k$ is a global lower bound:

$$
f(x)\geq f(x_k)+\nabla f(x_k)^{\mathsf T}(x-x_k).
$$

Introduce an objective-bound variable $t$ and require $t$ to exceed each collected affine lower bound. Minimize $t$ over the original simple domain. The resulting LP gives a **lower bound** on the true minimum. Evaluate $f$ at a feasible candidate for an **upper bound**, add its supporting cut, and repeat. Stop when the gap meets the chosen tolerance. A bounded initial search region can be necessary to keep the first linear master problem bounded.

### Worked cuts on a parabola

Minimize $x^2$ for $-1\leq x\leq2$. At $x=-1$, the tangent is $-2x-1$; at $x=2$, it is $4x-4$. Their intersection occurs at $x=1/2$ with $t=-2$. This is a valid lower bound even though $x^2$ is never negative. Evaluating the candidate gives upper bound $1/4$. Add the tangent at $1/2$, namely $x-1/4$. The lower model improves. Its next minimum is $-1/2$ at $x=-1/4$, where the first and newest cuts meet; evaluating there gives $1/16$. A negative model value is a bound, not an infeasible objective value to report as the original answer.

For convex constraints $g(x)\leq0$, a tangent cut $g(x_k)+\nabla g(x_k)^{\mathsf T}(x-x_k)\leq0$ is necessary for feasibility because the tangent underestimates $g$. It can remove an infeasible test point without removing any feasible point. It does not by itself guarantee that a surviving point satisfies the curved constraint. Cutting planes for integer programs use different validity arguments; convex tangents are not a substitute for all integer cuts.

## Practice

1. In the quadratic penalty example, what coefficient guarantees violation at most $0.01$ for the exact penalized minimizer?
2. For $f(x)=(x-1)^2$, find the tangent lower bound at $x=0$ and check it at $x=2$.

## Worked answers

1. Require $1/(1+\rho)\leq0.01$, hence $\rho\geq99$. This bounds feasibility error for this exact subproblem solution; it does not give exact feasibility.
2. Since $f(0)=1$ and $f'(0)=-2$, the cut is $1-2x$. At two it equals $-3$, below the true value one. The difference is $x^2\geq0$ for all real $x$, proving the global lower-bound property here.
