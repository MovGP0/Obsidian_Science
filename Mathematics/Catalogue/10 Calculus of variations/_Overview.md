---
title: "Calculus of variations — learning guide"
catalogue_ids:
  - "10"
  - "10.1"
---

> [!TLDR]
> Calculus of variations chooses a whole function to make a scalar quantity stationary, small, or large, subject to stated restrictions.

## From choosing a number to choosing a curve

In school algebra, a problem might ask which real number $c$ minimizes $(c-3)^2$. The answer is $c=3$, since a square is nonnegative. A variational problem makes a larger choice: its unknown is an entire function. The output to compare is still one real number.

For example, let $y(x)$ describe a curve on $0\leq x\leq1$. Its squared-slope integral is

$$
J[y]=\int_0^1 y'(x)^2\,dx.
$$

Here $y'$ is the derivative, or slope, and the integral adds the squared slope across the interval. The brackets emphasize that the input is the function $y$, not the individual number $x$. A map from functions to scalars is a **functional**. This integral is not the geometric length of the curve. It assigns a different cost to its slope.

No college course is assumed at entry. If derivatives and integrals are new, first read [[07.03 The derivative]], [[07.04 Differentiation rules]], [[08.01 Definite integrals]], [[08.03 The fundamental theorem]], and [[08.05 Integration by parts]]. Each gives concrete calculations. Then use [[12.02 Partial derivatives]] before deriving the general equation. These are prerequisites to learn, not facts the reader is expected already to know. [[17.01 Functions and functionals]] supplies a shorter first introduction to function-valued inputs.

## State the problem completely

A complete problem specifies the functional, the allowed functions, and the goal. In the example, take continuously differentiable functions with $y(0)=0$ and $y(1)=1$. Continuously differentiable means that the derivative exists and is continuous throughout the interval. This class is written $C^1([0,1])$.

The **admissible set** is

$$
\mathcal A=\{y\in C^1([0,1]): y(0)=0,\ y(1)=1\}.
$$

Ask for the function in $\mathcal A$ with the smallest $J$. The endpoint conditions matter. If they were absent, every constant function would give $J=0$. They also determine which changes of a candidate are allowed. Requiring $y(x)\geq0$ or requiring a fixed integral would further change the problem.

The integrand is the expression inside the integral. For a common problem it is a function $F(x,z,p)$ of three independent slots. After the substitutions $z=y(x)$ and $p=y'(x)$, the functional is $\int_a^b F(x,y(x),y'(x))\,dx$. Keeping the slots separate prevents confusion between partial derivatives of $F$ and the derivative along a curve.

## Worked example: prove the minimum directly

The line $y_*(x)=x$ meets the required endpoints and has $J[y_*]=1$. Every other admissible function has the form $y=x+h$, where $h(0)=h(1)=0$. Expand the square before integrating:

$$
J[x+h]=\int_0^1(1+h')^2\,dx
=1+2\int_0^1h'\,dx+\int_0^1h'^2\,dx.
$$

The fundamental theorem gives $\int_0^1h'\,dx=h(1)-h(0)=0$. Hence

$$
J[x+h]-J[x]=\int_0^1h'^2\,dx\geq0.
$$

Equality forces $h'=0$ everywhere because $h'$ is continuous. Thus $h$ is constant, and its zero endpoint forces $h=0$. The line is the unique **global minimizer**: it wins against every admissible competitor, however far away. This proof is stronger than merely finding a stationary curve.

## Minimum, stationarity, and existence

A local minimum wins only against sufficiently nearby admissible functions. A common measure of nearness for $C^1$ functions is $\|h\|_{C^1}=\max|h|+\max|h'|$. It controls both the change in the function and the change in its slope. A different norm can define a different local question.

A function is **stationary** if its first-order change in the functional vanishes in every permitted two-sided direction. Stationarity is usually a necessary condition for a smooth unconstrained local minimum. It can also occur at a maximum or a saddle. A saddle has nearby competitors with both larger and smaller values. Boundary constraints can allow only one-sided changes, so the usual zero-derivative argument must then be modified.

Even a finite infimum need not be attained. For instance, among $C^1$ functions with $y(0)=0$, $y(1)=1$, the integral $\int_0^1y^2\,dx$ can approach zero by making the rise occur in a progressively narrower region near $1$. It cannot equal zero: a continuous function with zero square integral would vanish everywhere. There is no minimizer in this class. A formal differential equation cannot repair nonexistence.

## Route through the chapter

Start with [[Functionals and stationary curves]] for the first-variation derivation. Then study [[Constraints and free endpoints]] and [[Classical curve problems]]. Extend the method with [[Higher derivatives and coupled curves]] and [[Fields of several variables]]. [[Numerical variational methods]] shows how finitely many coefficients approximate an unknown function. [[Tests with first and second variations]] checks what stationarity proves. Finally, [[Physical action and equations of motion]] applies the method to a physical model. The existing [[Calculus of variations - Overview]] is an alternative compact route through the foundation notes.

## Practice

1. With endpoints $y(0)=2$, $y(1)=5$, find the minimum of $J[y]=\int_0^1y'^2\,dx$ and prove it.
2. Why does $J[y]=\int_0^1y'^2\,dx$ have many minimizers if both endpoint values are free?

### Worked answers

1. Write $y=2+3x+h$, with $h$ zero at both ends. Expanding gives $J[y]=9+6[h]_0^1+\int_0^1h'^2\,dx=9+\int_0^1h'^2\,dx$. The minimum is $9$, attained only by $y=2+3x$.
2. With both values free, every constant $y=c$ has $y'=0$, so $J=0$. Nonnegativity proves that these are minimizers. The endpoint restrictions are part of the mathematical problem; removing both permits all these choices.

<!-- catalogue-complete-lesson-index:start -->
## Complete lesson index

Read the prerequisite route above before the advanced lessons. The source topic links are in [[Planned Topics#10. Calculus of variations|the detailed catalogue]].

- [[Classical curve problems|Classical curve problems]] — 10.2, 10.2.1, 10.2.2.
- [[Functionals and stationary curves|Functionals and stationary curves]] — 10.3, 10.3.1, 10.3.2.
- [[Constraints and free endpoints|Constraints and free endpoints]] — 10.3.3.
- [[Higher derivatives and coupled curves|Higher derivatives and coupled curves]] — 10.3.4, 10.3.5, 10.3.6.
- [[Fields of several variables|Fields of several variables]] — 10.4, 10.4.1, 10.4.2.
- [[Numerical variational methods|Numerical variational methods]] — 10.5.
- [[Tests with first and second variations|Tests with first and second variations]] — 10.6, 10.6.1.
- [[Physical action and equations of motion|Physical action and equations of motion]] — 10.6.2.
<!-- catalogue-complete-lesson-index:end -->
