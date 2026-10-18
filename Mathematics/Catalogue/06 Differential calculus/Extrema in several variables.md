---
title: "Extrema in several variables"
catalogue_ids:
  - "6.2.5"
  - "6.2.5.1"
  - "6.2.5.2"
  - "6.2.5.3"
  - "6.2.5.4"
  - "6.2.5.5"
  - "6.2.5.6"
---

> [!TLDR]
> Stationary points are candidates; Hessian signs classify regular interior points, while constraints and boundaries require their own checks.

## Optimization with several adjustable inputs

Read [[Partial changes and total differentials]] and [[Higher differentials and local approximation]] first. A function $f(x,y)$ can be viewed as a height above an input plane. Optimization asks for the highest or lowest allowed height. The allowed set can be an open region, a closed region with a boundary, or a constraint curve. This set is part of the problem.

## Relative extrema and their geometry

A **relative**, or local, minimum at $\mathbf a$ means $f(\mathbf x)\ge f(\mathbf a)$ for all allowed points sufficiently close to $\mathbf a$. A local maximum reverses the inequality. A global extremum compares every allowed point. At a strict local minimum, the surface rises above the base value in every sufficiently small nonzero allowed displacement. A saddle has both higher and lower values arbitrarily close.

For a differentiable function at an interior extremum of an open domain, every coordinate slice has an ordinary extremum. Its derivative must be zero, so all first partial derivatives vanish. Write these equations as $\nabla f=0$, where $\nabla f=(f_{x_1},\ldots,f_{x_n})$ is the gradient in Cartesian coordinates. This necessary condition does not guarantee an extremum.

## The two-variable Hessian test

Suppose $f$ is $C^2$ near a stationary point. Calculate

$$
\Delta=f_{xx}f_{yy}-f_{xy}^2.
$$

If $\Delta>0$ and $f_{xx}>0$, there is a strict local minimum. If $\Delta>0$ and $f_{xx}<0$, there is a strict local maximum. If $\Delta<0$, there is a saddle. If $\Delta=0$, the test is inconclusive. Evaluate all derivatives at the stationary point.

The reason comes from the quadratic Taylor term $\tfrac12(Ah^2+2Bhk+Ck^2)$. When $A\ne0$, completing the square gives

$$
Ah^2+2Bhk+Ck^2
=A\left(h+\frac BA k\right)^2+\frac{AC-B^2}{A}k^2.
$$

If both coefficients are positive, every nonzero displacement gives a positive quadratic change. If both are negative, the change is negative. Opposite signs give both signs. If $A=0$ and $\Delta<0$, then $B\ne0$; taking small ratios of $h$ and $k$ makes the mixed term take either sign, so the form is again indefinite. The smaller Taylor remainder cannot reverse a definite quadratic sign sufficiently near the point. The assumptions and test are discussed in [MIT, session 30: second derivative test](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/resources/mit18_02sc_mnotes_sd/).

For example, $f=(x-1)^2+2(y+2)^2$ has one stationary point, $(1,-2)$. Its Hessian has diagonal entries $2,4$ and zero off-diagonal entries, so $\Delta=8>0$. It is a strict local minimum; the sum of squares also proves it is global. By contrast, $x^2-y^2$ has a saddle at zero. For $x^4+y^4$, the zero Hessian makes this test inconclusive, but nonnegativity proves a strict minimum.

## More than two variables

For $n$ inputs, use the Hessian quadratic form $Q(\mathbf h)=\mathbf h^{\mathsf T}H_f\mathbf h$. It is **positive definite** if $Q(\mathbf h)>0$ for every nonzero vector, and negative definite if always negative. At a $C^2$ stationary point, these conditions give a strict minimum and maximum, respectively. An indefinite form takes both signs and proves a saddle. A merely nonnegative form can leave higher-order terms decisive.

For a concrete three-variable example, $f=x^2+2y^2+3z^2$ has Hessian form $2h^2+4k^2+6\ell^2>0$ for every nonzero displacement, proving a strict minimum at zero. No eigenvalue method is needed for this diagonal example. For a general symmetric matrix, positive definiteness is equivalent to positivity of all its leading principal determinants: the determinants of its upper-left $1\times1,2\times2,\ldots,n\times n$ blocks. [[12.06 Gradients and extrema]] supplies the conceptual extension.

Boundary points and nondifferentiable points need separate analysis. Continuity on a closed bounded allowed set ensures that global extrema are attained. Classifying interior stationary points alone does not compare them with the boundary.

## Approximation as a least-squares problem

Optimization can select a simple approximation to data values. For points $(t_i,s_i)$, fit a line $at+b$ by minimizing the sum of squared residuals

$$
S(a,b)=\sum_i(at_i+b-s_i)^2.
$$

Differentiate with respect to the unknown coefficients and set both derivatives to zero:

$$
a\sum_i t_i^2+b\sum_i t_i=\sum_i t_i s_i,
\qquad
a\sum_i t_i+Nb=\sum_i s_i.
$$

These are the **normal equations**, where $N$ is the number of points. With at least two distinct inputs, the Hessian form $2\sum_i(t_i h+k)^2$ is positive for every nonzero pair $(h,k)$, so there is one global least-squares minimum. If all inputs coincide, slope and intercept are not separately determined.

Fit $(0,1),(1,2),(2,2)$. The sums are $N=3$, $\sum t_i=3$, $\sum t_i^2=5$, $\sum s_i=5$, and $\sum t_i s_i=6$. Thus $5a+3b=6$ and $3a+3b=5$, giving $a=1/2$, $b=7/6$. The residuals are $1/6,-1/3,1/6$, with squared sum $1/6$. The line need not pass through every point; it minimizes this specified error measure.

## Extrema subject to constraints

For a smooth constraint $g(\mathbf x)=c$ with $\nabla g\ne0$, allowed tangent vectors $\mathbf v$ satisfy $\nabla g\cdot\mathbf v=0$. At a constrained extremum, $\nabla f\cdot\mathbf v=0$ for every such direction. Hence the gradients are parallel:

$$
\nabla f=\lambda\nabla g,\qquad g=c.
$$

The scalar $\lambda$ is a Lagrange multiplier. These are candidate equations, not a classification. For several regular equality constraints, add a multiplier times each constraint gradient and require those gradients to be independent. Singular constraints, inequalities, endpoints, and corners need separate checks. See [MIT, Lagrange multipliers and constrained differentials](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/pages/2.-partial-derivatives/part-c-lagrange-multipliers-and-constrained-differentials/) for the tangent-direction argument.

For $f=x+y$ on $x^2+y^2=1$, the equations give $1=2\lambda x$ and $1=2\lambda y$. Thus $x=y$ and the two candidates are $(\pm1/\sqrt2,\pm1/\sqrt2)$ with matching signs. Their values are $\pm\sqrt2$. Continuity on the compact circle ensures extrema exist, and comparison gives global minimum and maximum. The unconstrained gradient of $f$ is never zero, so the unconstrained stationary test cannot replace this constrained calculation.

## Practice

1. Classify the stationary point of $f=x^2+2xy+3y^2-4x-8y$ and decide whether its minimum is global.
2. Minimize $x^2+y^2$ subject to $x+y=4$. Is there a constrained maximum?

## Worked answers

1. Solving $2x+2y-4=0$ and $2x+6y-8=0$ gives $(1,1)$. The Hessian has $\Delta=12-4=8>0$ and $f_{xx}=2>0$, so there is a strict local minimum. With $h=x-1$, $k=y-1$, the function is $-6+(h+k)^2+2k^2$, proving the minimum $-6$ is global and unique.
2. The constraint gradient $(1,1)$ is nonzero. The multiplier equations give $2x=\lambda=2y$, hence $x=y=2$ and value $8$. Substitution $y=4-x$ gives $2(x-2)^2+8$, proving a global constrained minimum. It grows without bound along the line, so there is no maximum.
