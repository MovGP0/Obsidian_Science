---
title: "Tests with first and second variations"
catalogue_ids:
  - "10.6"
  - "10.6.1"
---

> [!TLDR]
> First variation tests stationarity; second variation measures quadratic change, but a minimum requires control of all allowed perturbations.

## Taylor expansion in a function direction

For the prerequisites and the admissible class, start with [[10 Calculus of variations/_Overview]]. Given one allowed direction $\eta$, turn the problem back into ordinary calculus by setting $j(\varepsilon)=J[y+\varepsilon\eta]$. Define

$$
\delta J[y;\eta]=j'(0),\qquad
\delta^2J[y;\eta]=j''(0).
$$

This convention does not include a factor of $1/2$ in the second variation. The Taylor expansion is

$$
J[y+\varepsilon\eta]
=J[y]+\varepsilon\delta J[y;\eta]
+\frac{\varepsilon^2}{2}\delta^2J[y;\eta]+o(\varepsilon^2).
$$

The remainder notation means that for this fixed direction its ratio to $\varepsilon^2$ tends to zero. It does not automatically provide a bound uniform over all possible directions.

For $J[y]=\int_a^bF(x,y,y')dx$, with $F$ having continuous second derivatives near the candidate and varied curves, the chain rule gives

$$
\delta^2J[y;\eta]
=\int_a^b\left(F_{zz}\eta^2+2F_{zp}\eta\eta'+F_{pp}\eta'^2\right)dx.
$$

The slots $z,p$ mean function value and slope. Derivatives of $F$ are evaluated along the candidate. A smooth two-sided local minimum must have $\delta J=0$ and $\delta^2J\geq0$ for every allowed direction. One negative direction disproves a minimum. Directions of both signs establish a saddle. A zero second variation may require higher-order terms.

## Worked example: a stationary saddle

On $[0,1]$ with zero endpoints, take

$$
J[y]=\int_0^1\left(y'^2-2\pi^2y^2\right)dx.
$$

The zero curve is stationary because the first variation contains factors $y$ or $y'$. Test $\eta_n(x)=\sin(n\pi x)$ for positive integer $n$. The integrals of its squared sine and squared cosine are both $1/2$. Hence

$$
J[\varepsilon\eta_n]
=\frac{\varepsilon^2\pi^2}{2}(n^2-2),
\qquad
\delta^2J[0;\eta_n]=\pi^2(n^2-2).
$$

For $n=1$ this is negative; for $n=2$ it is positive. Both families approach zero with their slopes as $\varepsilon\to0$. Thus zero is a saddle even in the $C^1$ norm, which controls both function and slope. It satisfies the Euler–Lagrange equation but fails the minimum test. Testing a single positive direction would have missed the descending direction.

## Legendre's condition and its limitation

A classical scalar weak local minimizer must satisfy $F_{pp}\geq0$ along its interior, under the usual smoothness assumptions. Weak local means nearby in function and first derivative. This **Legendre condition** follows from localized variations whose slope contribution dominates their value contribution on short intervals. It is a pointwise necessary condition, not a sufficient condition. In the worked saddle example, $F_{pp}=2>0$ everywhere, yet the long sine direction still decreases the functional.

The second variation can be written in a useful form for fixed-zero endpoint $\eta$. Put $P=F_{pp}$ and $Q=F_{zz}-dF_{zp}/dx$. Integrate the mixed term as $\int F_{zp}(\eta^2)'dx$. The boundary term vanishes, giving

$$
\delta^2J=\int_a^b(P\eta'^2+Q\eta^2)dx.
$$

This expression connects to an auxiliary differential equation, called the **Jacobi equation**, $-(Pv')'+Qv=0$. A second point is conjugate to $a$ if a nonzero solution $v$ vanishes at both points. Such solutions detect directions where the quadratic form can lose positivity. The exact sufficiency theorems require stronger hypotheses and endpoint information; this lesson does not replace them by the rule “$P>0$ implies a minimum.” [Cristoferi, Chapters 5 and 8](https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf) develops these necessary and sufficient conditions.

For $\int(y'^2-cy^2)dx$, $P=2$, $Q=-2c$ and the Jacobi equation is $v''+cv=0$. If $c>0$, a solution vanishing at $a=0$ is $v=\sin(\sqrt c\,x)$. Its first positive zero is $\pi/\sqrt c$. This illustrates why the interval length matters even though $F_{pp}$ stays positive.

## A usable sufficient estimate

For an introductory proof, an exact square identity is often more useful than a general theorem. On $[0,1]$, if $h(0)=0$, the fundamental theorem and Cauchy–Schwarz give

$$
h(x)^2=\left(\int_0^xh'\,dt\right)^2
\leq x\int_0^xh'^2dt
\leq x\int_0^1h'^2dt.
$$

Integrating in $x$ yields $\int_0^1h^2dx\leq\tfrac12\int_0^1h'^2dx$. Therefore, for $0\leq c<2$,

$$
\int_0^1(h'^2-ch^2)dx
\geq(1-c/2)\int_0^1h'^2dx>0
$$

for nonzero $h$ with both endpoints zero. The zero function is then a strict global minimizer of this quadratic functional. The bound is sufficient and not sharp. Its failure at $c=2$ says only that this estimate no longer proves the result.

For nonlinear functionals, a general local minimum proof needs a positive lower bound for the second variation in a specified norm and a compatible small remainder bound. Positivity separately in every fixed direction can fail to provide uniform control in infinitely many directions. With constraints, test only feasible changes and include the constraint's curvature through the appropriate augmented functional. With free endpoints, retain the boundary contributions as well.

## Practice

1. Classify zero for $J[y]=\int_0^1(y'^2+y^2)dx$ with zero endpoints.
2. Find the second variation at zero of $H[y]=(\int_0^1y^2dx)^2$. Does its vanishing settle minimality?

### Worked answers

1. The first variation at zero is zero and the second is $2\int(\eta'^2+\eta^2)dx>0$ for nonzero $\eta$. Directly, $J[y]\geq0$ and equality requires $y=0$. Thus zero is the unique global minimum; no remainder estimate is needed because the expression is exactly quadratic.
2. $H[\varepsilon\eta]=\varepsilon^4(\int\eta^2dx)^2$, so both the first and second variations vanish at zero. Nevertheless, $H[y]>0$ for every nonzero continuous $y$. Zero is a strict global minimum, decided by the fourth-order term rather than the second variation.
