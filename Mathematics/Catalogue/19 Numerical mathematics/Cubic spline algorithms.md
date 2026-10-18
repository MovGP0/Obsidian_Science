---
title: "Cubic spline algorithms"
catalogue_ids:
  - "19.7"
  - "19.7.1"
  - "19.7.1.1"
  - "19.7.1.2"
---

> [!TLDR]
> A cubic spline joins low-degree pieces smoothly; interpolation passes through data, while fitting balances residuals and smoothness.

## Why use pieces?

[[Polynomial interpolation algorithms]] fits one polynomial through all nodes. Its degree grows with the sample count, and unwanted oscillations can become large. A **spline** uses separate low-degree polynomials on intervals between knots. A cubic spline has degree at most $3$ on each interval and continuous first and second derivatives at each interior knot. Thus the value, slope, and curvature measure join without jumps, although third derivatives can jump.

Let $x_0<\cdots<x_n$ and values $y_i$ be given. An interpolating spline satisfies $s(x_i)=y_i$. There are four coefficients per interval. Values and interior derivative matching leave two additional conditions needed at the ends. Common choices are **natural**, $s''(x_0)=s''(x_n)=0$, and **clamped**, specified endpoint slopes. Periodic conditions match the values and derivatives at the ends. They describe different problems. “Natural” does not mean that it always matches the unknown function best.

## Solve for the knot second derivatives

Write $h_i=x_{i+1}-x_i$ and $M_i=s''(x_i)$. Since the second derivative of a cubic is linear, its values $M_i,M_{i+1}$ determine it on an interval. Integrating twice and fitting the endpoint values gives

$$
\begin{aligned}
s_i(x)={}&\frac{M_i(x_{i+1}-x)^3}{6h_i}
+\frac{M_{i+1}(x-x_i)^3}{6h_i}\\
&+\left(y_i-\frac{M_ih_i^2}{6}\right)\frac{x_{i+1}-x}{h_i}
+\left(y_{i+1}-\frac{M_{i+1}h_i^2}{6}\right)\frac{x-x_i}{h_i}.
\end{aligned}
$$

At either endpoint this returns the required $y_i$. Taking two derivatives returns the required linear second derivative. Matching first derivatives at each interior knot gives the tridiagonal system

$$
h_{i-1}M_{i-1}+2(h_{i-1}+h_i)M_i+h_iM_{i+1}
=6\left[\frac{y_{i+1}-y_i}{h_i}-\frac{y_i-y_{i-1}}{h_{i-1}}\right].
$$

For a natural spline add $M_0=M_n=0$. Solve the resulting system once, then evaluate the appropriate cubic for any query. The tridiagonal structure keeps construction work proportional to the number of knots.

## Worked natural spline

Use points $(0,0),(1,1),(2,0)$. Here $h_0=h_1=1$, $M_0=M_2=0$, and the interior equation is $4M_1=6(-1-1)=-12$. Thus $M_1=-3$. Substitution gives

$$
s(x)=\begin{cases}
\frac32x-\frac12x^3,&0\le x\le1,\\
\frac32(2-x)-\frac12(2-x)^3,&1\le x\le2.
\end{cases}
$$

Both pieces give $1$ at the middle knot. Their first derivatives there are both $0$, and their second derivatives both equal $-3$. At $x=1/2$, $s=3/4-1/16=11/16$. The straight line joining the first two samples would give $1/2$, so smoothness changes values between samples.

![[catalogue-ch19-spline-and-control.svg|**Fig. C.ch19.4** An interpolating spline meets sample points, while a Bézier curve is guided by control points that it need not meet.]]

The left panel of Fig. C.ch19.4 shows the worked spline. The right panel anticipates [[Bezier curves and surfaces]] and distinguishes sample interpolation from control-point design. Neither representation automatically preserves monotonicity, positivity, or convexity for arbitrary data.

## Fitting and smoothing splines

When values contain noise, exact interpolation can preserve noise too. A fitting spline uses a chosen basis $B_j$, often locally supported B-splines, and solves

$$
\min_c\sum_i w_i\left(y_i-\sum_jc_jB_j(x_i)\right)^2,
\qquad w_i>0.
$$

This is a linear least-squares problem with design matrix $B_j(x_i)$. There can be fewer basis coefficients than samples. Fixed knots and full column rank give a unique unpenalized fit. A **smoothing spline** adds a roughness penalty:

$$
\min_s\left\{\sum_i w_i[y_i-s(x_i)]^2+\lambda\int[s''(x)]^2dx\right\},\qquad\lambda>0.
$$

Larger $\lambda$ discourages curvature; it does not mean smaller sample residuals. In the classical one-dimensional setting with distinct sample inputs, the minimizer is a natural cubic spline with knots among the sample inputs. This is a theorem, not an assumption that every spline-fitting program uses this exact objective.

For a simple fitting example, approximate values $(0,1,0)$ at inputs $(0,1,2)$ by a constant, a degree-zero special case of spline fitting. Minimize $c^2+(1-c)^2+c^2$. Differentiation gives $6c-2=0$, so $c=1/3$. A cubic smoothing spline has more freedom; as the roughness penalty becomes dominant it tends towards a least-squares straight line, which for these symmetric data is also $1/3$.

## Accuracy and boundary choices

For sufficiently smooth target functions and appropriate endpoint data, cubic interpolation splines have fourth-order value accuracy under suitable mesh regularity. A natural spline whose zero endpoint curvature conflicts with the target can have reduced boundary accuracy; do not assert a uniform fourth-order result without the boundary hypotheses. Extrapolation beyond the knots follows an end polynomial and can grow rapidly. [SciPy's cubic-spline documentation](https://docs.scipy.org/doc/scipy/reference/generated/scipy.interpolate.CubicSpline.html) explicitly separates construction boundary conditions from extrapolation policy.

## Practice

1. For natural spline data $(0,0),(1,2),(2,0)$, find $M_1$ and the value at $1/2$.
2. Why do two data points not determine a unique cubic without additional conditions?

> [!example]- Worked answers
> 1. Doubling all data doubles the spline and its second derivatives. Thus $M_1=-6$ and $s(1/2)=2(11/16)=11/8$. The same values follow from the tridiagonal equation.
> 2. A cubic has four coefficients, but two endpoint values give only two equations. Two slope or curvature conditions, or another specified endpoint policy, are needed to select one cubic.
