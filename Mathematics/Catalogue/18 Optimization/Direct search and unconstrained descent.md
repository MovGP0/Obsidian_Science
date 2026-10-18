---
title: "Direct search and unconstrained descent"
catalogue_ids:
  - "18.2.4"
  - "18.2.4.1"
  - "18.2.4.2"
  - "18.2.5"
  - "18.2.5.1"
  - "18.2.5.2"
  - "18.2.5.3"
  - "18.2.5.4"
---

> [!TLDR]
> Numerical minimization combines a direction with a step search; gradients, curvature, and previous steps provide different directions.

## Prerequisites and one-dimensional search

Read [[07.03 The derivative]], [[10.04 Linear systems]], and [[Nonlinear optimality and convexity]]. All methods here minimize a real-valued function. A stopping test is a numerical decision, not an exact global certificate unless extra structure supplies one.

For a continuous **unimodal** function on $[a,b]$, values first decrease and then increase around a minimum, with no competing valleys. Golden-section search maintains an interval containing a minimizer. Put $r=(\sqrt5-1)/2\approx0.618$, $u=b-r(b-a)$, and $v=a+r(b-a)$. If $f(u)<f(v)$, retain $[a,v]$; if the reverse holds, retain $[u,b]$. Reuse one interior point to reduce evaluations. Equal values allow a safe central reduction under unimodality.

For $f(t)=(t-2)^2$ on $[0,5]$, $u\approx1.910$ and $v\approx3.090$. Values are approximately $0.008$ and $1.188$, so retain $[0,3.090]$. The true minimum remains inside. Without unimodality, discarding part of the interval can discard the global minimum.

## Search in n-dimensional Euclidean space

Euclidean space $\mathbb R^n$ contains real coordinate lists, with length $\|x\|=\sqrt{\sum_i x_i^2}$. A multidimensional step has the form $x_{k+1}=x_k+\alpha_kp_k$. The direction $p_k$ and positive step $\alpha_k$ have separate roles. A line search minimizes or sufficiently reduces $\phi(\alpha)=f(x_k+\alpha p_k)$.

Without derivatives, a coordinate or pattern search compares points such as $x\pm\delta e_i$, where $e_i$ changes only coordinate $i$. Accept an improving point; shrink $\delta$ when none is found. For $f(x,y)=(x-1)^2+(y+2)^2$, from $(0,0)$ with $\delta=1$, the move $(0,-1)$ reduces five to two, then $(1,-1)$ reduces two to one, and $(1,-2)$ reaches zero. Coordinate failure at one fixed step length is not a proof of optimality. Nonsmooth and nonconvex objectives need particular care.

## Steepest descent

For differentiable $f$, the direction $p=-\nabla f$ gives the greatest first-order decrease among Euclidean unit directions after normalization. The directional derivative is $-\|\nabla f\|^2<0$ when the gradient is nonzero. A sufficiently small positive step decreases $f$, but a large one can overshoot.

Take $f(x,y)=\tfrac12(x^2+2y^2)-(x+y)$, whose gradient is $(x-1,2y-1)$. At zero, $p=(1,1)$. Along this line $f(\alpha,\alpha)=\tfrac32\alpha^2-2\alpha$, minimized at $\alpha=2/3$. Thus the first iterate is $(2/3,2/3)$ and its gradient is $(-1/3,1/3)$. It is not yet the minimizer $(1,1/2)$.

A practical line search can halve an initial step until the Armijo condition $f(x+\alpha p)\leq f(x)+\eta\alpha\nabla f(x)^{\mathsf T}p$ holds, with $0<\eta<1$. Smoothness and bounded level sets support convergence to stationary behavior; global optimality still needs convexity or other proof.

## Newton's method

Newton minimizes a local quadratic approximation. Solve $H_f(x)p=-\nabla f(x)$, then select a step. For the quadratic above, $H=\operatorname{diag}(1,2)$, so from zero $p=(1,1/2)$ reaches the minimizer in one full step. This exactness holds for a positive-definite quadratic in exact arithmetic. A general Hessian can be singular or indefinite; an indefinite Newton direction can increase the objective. Damping or a positive-definite modification can be needed.

## Conjugate gradient method

For $f(x)=\tfrac12x^{\mathsf T}Qx-b^{\mathsf T}x$ with symmetric positive-definite $Q$, conjugate gradient chooses directions satisfying $p_i^{\mathsf T}Qp_j=0$ for $i\ne j$. Define residual $r=b-Qx$ and start $p=r$. Then repeat

$$
\alpha=\frac{r^{\mathsf T}r}{p^{\mathsf T}Qp},\quad
x^+=x+\alpha p,\quad r^+=r-\alpha Qp,\quad
\beta=\frac{(r^+)^{\mathsf T}r^+}{r^{\mathsf T}r},\quad p^+=r^++\beta p.
$$

For $Q=\operatorname{diag}(1,2)$, $b=(1,1)$, $x=0$, the first step above gives $r^+=(1/3,-1/3)$ and $\beta=1/9$. Thus $p^+=(4/9,-2/9)$, and the next step has $\alpha=3/4$, yielding $x=(1,1/2)$. At most $n$ steps suffice in exact arithmetic; round-off changes this statement. Nonlinear conjugate-gradient variants need line-search safeguards and do not inherit finite termination.

## Davidon–Fletcher–Powell method

DFP estimates the inverse Hessian instead of computing it directly. Start with a symmetric positive-definite matrix $H_k$ and direction $p_k=-H_k\nabla f(x_k)$. After a line search, put $s=x_{k+1}-x_k$ and $y=\nabla f(x_{k+1})-\nabla f(x_k)$. Update

$$
H_{k+1}=H_k+\frac{ss^{\mathsf T}}{s^{\mathsf T}y}
-\frac{H_kyy^{\mathsf T}H_k}{y^{\mathsf T}H_ky}.
$$

The equation $H_{k+1}y=s$ fits the observed curvature. Positive curvature $s^{\mathsf T}y>0$ preserves positive definiteness in exact arithmetic. Skip or safeguard an update with zero or unreliable denominators. In one dimension, $f(x)=x^2$, $H_0=1$, $x_0=1$, and an exact step gives $x_1=0$. Then $s=-1,y=-2$, so $H_1=1+1/2-1=1/2$, the true inverse Hessian. See the [authors' quasi-Newton appendix](https://mdobook.github.io/html/appendix-quasinewton/) for the secant interpretation.

## Practice

1. For $f(x)=(x-3)^2$, start at zero and take a gradient step of length $1/2$. What happens with length $2$?
2. For $Q=\operatorname{diag}(2,4)$ and $b=(2,4)$, find the full Newton step from zero for the quadratic model.

## Worked answers

1. The derivative at zero is $-6$. The first step gives $x=0-(1/2)(-6)=3$, the minimum. Length two gives $x=12$, increasing the objective from $9$ to $81$.
2. Solve $Qp=b$. This gives $p=(1,1)$ and objective $-3$. Positive definiteness makes this the unique global minimizer; merely solving a Newton equation for a nonconvex function would not give that guarantee.
