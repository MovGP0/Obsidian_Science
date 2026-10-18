---
title: "Extrema and inflection points"
catalogue_ids:
  - "6.1.5"
  - "6.1.5.1"
  - "6.1.5.2"
  - "6.1.5.3"
  - "6.1.5.4"
  - "6.1.5.5"
---

> [!TLDR]
> Find candidate points first, then classify them and compare all eligible values, including endpoints and nondifferentiable points.

## Questions about a graph

An extremum is a maximum or minimum. An inflection point instead marks a change in concavity. These are different features. This lesson uses the tools in [[Elementary derivative methods]] and the hypotheses in [[Mean value theorems and monotonicity]]. Here an inflection means that a continuous graph changes from concave up to concave down, or conversely, at the point.

## Local and global extrema

A point $a$ is a **local minimum** relative to the domain if some neighborhood of $a$ has $f(x)\ge f(a)$ for all allowed inputs in that neighborhood. A **global minimum** compares all inputs in the domain. Reverse the inequality for a maximum. An extremum is strict if equality is excluded at other sufficiently close points. A local comparison need not decide the global question.

For example, $f(x)=x^3-3x$ has a local maximum at $-1$ and a local minimum at $1$, but no global extrema on the real line. Its values grow without bound positively in one direction and negatively in the other. A supremum is a least upper bound and need not be attained; on $(0,1)$, $f(x)=x$ has supremum $1$ but no maximum.

## Necessary conditions and candidate points

At a differentiable interior extremum, Fermat's theorem requires $f'(a)=0$. Such an interior point is stationary. Candidate lists for global optimization must also include interior points where the derivative does not exist and all included endpoints. The function must itself be defined at a candidate. A hole in a graph is not an attained extremum.

For $|x|$, zero is a minimum with no derivative. For $x^3$, zero is stationary without being an extremum. For $x$ on $[0,1]$, both extrema are endpoints with no zero interior derivative. These examples show why solving $f'=0$ is only one step.

## Classify explicit stationary points

If the derivative changes from negative to positive through $a$, the function decreases then increases and has a local minimum. A positive-to-negative change gives a maximum. No sign change means this test gives no extremum. Use intervals where differentiability holds and apply monotonicity on each side.

If $f$ is twice continuously differentiable near a stationary point, $f''(a)>0$ gives a strict local minimum and $f''(a)<0$ gives a strict local maximum. Taylor's quadratic term explains the test. If $f''(a)=0$, the test is inconclusive: $x^4$, $-x^4$, and $x^3$ have different behavior at zero despite the same zero first and second derivatives.

An inflection requires a change in concavity. A concave-up function has its graph below or on each chord joining two points, and a concave-down function has the reversed relation. On an interval where $f''>0$, the slopes increase and the graph is concave up; where $f''<0$, it is concave down. For a $C^2$ function, a sign change of $f''$ across a point proves inflection. Solving $f''=0$ alone does not suffice. For $x^4$, $f''=12x^2$ stays nonnegative, so there is no inflection at zero. For $x^3$, $f''=6x$ changes sign, so zero is an inflection.

## Find global extrema on a domain

A continuous function on a closed bounded interval attains a global maximum and minimum. When there are finitely many candidates, calculate endpoint values, stationary-point values, and values at nondifferentiable interior points, then compare. On open or unbounded domains, examine boundary limits and unbounded behavior separately. An existence theorem is not automatic there.

For a worked example, let $f(x)=x^3-3x$ on $[-2,3]$. Its derivative is $3(x^2-1)$, so the interior candidates are $-1$ and $1$. The values are

$$
f(-2)=-2,\quad f(-1)=2,\quad f(1)=-2,\quad f(3)=18.
$$

The global minimum is $-2$, attained at two inputs, and the global maximum is $18$, attained at $3$. The local maximum at $-1$ is not the global maximum. The second derivative $6x$ also shows an inflection at $(0,0)$, where the first derivative is $-3$ rather than zero.

## Implicitly defined curves

Suppose a curve is given by $F(x,y)=0$, with continuous first partial derivatives and $F_y\ne0$ at a point. Locally it defines a differentiable function $y(x)$. Differentiation along the curve gives $F_x+F_y y'=0$, so $y'=-F_x/F_y$. Partial derivative means differentiate in one argument while holding the other fixed; [[Partial changes and total differentials]] develops it fully.

For a stationary extremum of this local graph over $x$, solve $F=0$ and $F_x=0$, with $F_y\ne0$. If $F$ is $C^2$, another differentiation gives

$$
y''=-\frac{F_{xx}+2F_{xy}y'+F_{yy}(y')^2}{F_y}.
$$

For $F=x^2+y^2-4$, the upper branch has candidate $(0,2)$. There $y'=0$ and $y''=-2/4=-1/2$, so it is a local maximum. At $(\pm2,0)$, $F_y=0$ and this formula fails. Those points are endpoints of either semicircle graph and require separate comparison. See [[07.07 Implicit and inverse differentiation]] for another introduction.

## Practice

1. Find global extrema of $f(x)=x^4-2x^2$ on $[-2,2]$ and locate its inflection points.
2. Find the stationary extrema of the upper ellipse branch $x^2+4y^2=4$.

## Worked answers

1. The derivative is $4x(x^2-1)$, giving $x=-1,0,1$. Candidate values are $8,-1,0,-1,8$ at $-2,-1,0,1,2$. Global minima $-1$ occur at $\pm1$; global maxima $8$ occur at the endpoints. Since $f''=12x^2-4$ changes sign at $x=\pm1/\sqrt3$, these are inflection inputs, with output $-5/9$.
2. Here $F_y=8y>0$ on the positive branch away from its endpoints, and $y'=-x/(4y)$. The stationary point is $(0,1)$. There $y''=-F_{xx}/F_y=-2/8=-1/4$, proving a local maximum. The endpoint values $y=0$ at $x=\pm2$ are the branch's global minima if the closed upper half of the ellipse is included.
