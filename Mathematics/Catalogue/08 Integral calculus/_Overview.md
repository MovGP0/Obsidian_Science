---
title: "Integral calculus: a learning route"
catalogue_ids:
  - "8"
  - "8.1"
  - "8.2"
  - "8.3"
  - "8.4"
  - "8.5"
---

> [!TLDR]
> Integration adds small contributions; the integration element specifies whether those contributions follow an interval, curve, region, or surface.

## Start with a sum

Suppose a rectangle has width 3 and height 2. Its area is $3\cdot2=6$. If height changes across the rectangle, divide the width into small intervals, use one height on each interval, and add the resulting thin areas. An integral is the limit of such sums when the pieces become small. The integrand describes the value on a piece; the integration element describes the piece's size or direction.

This chapter starts from secondary-school algebra and develops that idea. Advanced topics do not require previous knowledge of measure theory or differential geometry. Their lessons introduce the objects first, state usable conditions, and give concrete calculations. Some deep existence or classification proofs are identified as further study.

Begin with [[02.02 Equivalent expressions]], [[07.01 Limits]], and [[07.03 The derivative]]. Then read [[08.01 Definite integrals]] and [[08.03 The fundamental theorem]]. These foundation notes explain the limit and derivative language used throughout this collection.

## Indefinite integration

An indefinite integral asks for all functions whose derivative is the given function. For example, the derivative of $x^2+C$ is $2x$, so $\int2x\,dx=x^2+C$. The constant matters because differentiation loses constant information. Read [[Antiderivatives and integration rules]], then the lessons on rational, radical, trigonometric, and transcendental integrands. They form a method-selection toolkit rather than a promise that every integral has an elementary formula.

## Definite integration

A definite integral is a number or a parameter-dependent value. Its limits specify the interval. The fundamental theorem often computes it from an antiderivative, but the integral exists independently of whether that antiderivative has a familiar name. Read [[Definite integrals and accumulation]], [[Integral applications]], and [[Improper Stieltjes and Lebesgue integrals]]. Continue with [[Parameter integrals and series]] when comfortable with limits.

## Line integration

Read [[05.03 Components and bases]] and [[05.05 Dot products]] before [[Scalar and directed line integrals]]. A curve requires a parameter, such as $(x,y)=(t,t^2)$. A scalar integral adds values per unit length. A directed integral adds components along an oriented path. Those are different operations. [[Potentials and path independence]] explains when endpoints determine the directed integral and why a hole in the domain can invalidate a local derivative test.

## Multiple integration

For functions of two or three variables, begin with [[12.01 Functions of several variables]] and [[12.02 Partial derivatives]]. [[Double and triple integrals]] explains how to describe a region by nested bounds, change integration order, and use the correct Jacobian when changing coordinates. A double integral over a flat region is not automatically a surface-area integral in three-dimensional space.

## Surface integration

Read [[13.05 Parameterized curves and surfaces]] and [[05.05 Dot products]]. [[Scalar and oriented surface integrals]] introduces the cross product where it is needed, then distinguishes area from oriented flux. The direction of a normal affects flux but does not affect area. The lesson also explains the catalogue's older terms “first kind,” “second kind,” and “general type.”

## A method and a check

For every problem, identify the object, domain, integrand, and element before calculation. Check discontinuities and orientation. After a substitution, change all bounds and include every scale factor. Finally, check an antiderivative by differentiation or check a definite value against a sign, size, symmetry, or independent calculation.

For example, $0\le x^2\le1$ on $[0,1]$ implies $0\le\int_0^1x^2\,dx\le1$. The computed answer $1/3$ passes this check. An answer of $3$ does not, even before any detailed algebra is inspected.

## Practice

1. Which integral gives the area of the unit square: $\iint_D1\,dA$ or $\int_C1\,ds$, where $C$ is its boundary?
2. Does reversing a path change $\int_C f\,ds$? Does it change $\int_C P\,dx+Q\,dy$?

## Worked answers

1. The double integral over the square $D$ gives its area, $1$. The line integral over its boundary gives its perimeter, $4$. Their integration elements measure different objects.
2. A scalar length integral stays the same because length is nonnegative. A directed line integral changes sign because each coordinate displacement changes direction. A path traced twice counts twice in either case.

<!-- catalogue-complete-lesson-index:start -->
## Complete lesson index

Read the prerequisite route above before the advanced lessons. The source topic links are in [[Planned Topics#8. Integral calculus|the detailed catalogue]].

- [[Antiderivatives and integration rules|Antiderivatives and integration rules]] — 8.1.1, 8.1.1.1, 8.1.1.2, 8.1.2.
- [[Rational integrands and partial fractions|Rational integrands and partial fractions]] — 8.1.3, 8.1.3.1, 8.1.3.2, 8.1.3.3.
- [[Radical substitutions and binomial integrals|Radical substitutions and binomial integrals]] — 8.1.4, 8.1.4.1, 8.1.4.2.
- [[Elliptic integrals|Elliptic integrals]] — 8.1.4.3.
- [[Trigonometric integration|Trigonometric integration]] — 8.1.5, 8.1.5.1, 8.1.5.2.
- [[Exponential hyperbolic and nonelementary integrals|Exponential, hyperbolic, and nonelementary integrals]] — 8.1.6, 8.1.6.1, 8.1.6.2, 8.1.6.3, 8.1.6.4.
- [[Definite integrals and accumulation|Definite integrals and accumulation]] — 8.2.1, 8.2.1.1, 8.2.1.2, 8.2.1.3, 8.2.1.4.
- [[Integral applications|Integral applications]] — 8.2.2, 8.2.2.1, 8.2.2.2, 8.2.2.3.
- [[Improper Stieltjes and Lebesgue integrals|Improper, Stieltjes, and Lebesgue integrals]] — 8.2.3, 8.2.3.1, 8.2.3.2, 8.2.3.3.
- [[Parameter integrals and series|Parameter integrals and series]] — 8.2.4, 8.2.4.1, 8.2.4.2, 8.2.4.3, 8.2.5.
- [[Scalar and directed line integrals|Scalar and directed line integrals]] — 8.3.1, 8.3.1.1, 8.3.1.2, 8.3.1.3, 8.3.1.4, 8.3.2, 8.3.2.1, 8.3.2.2, 8.3.2.3, 8.3.3, 8.3.3.1, 8.3.3.2, 8.3.3.3.
- [[Potentials and path independence|Potentials and path independence]] — 8.3.4, 8.3.4.1, 8.3.4.2, 8.3.4.3, 8.3.4.4, 8.3.4.5.
- [[Double and triple integrals|Double and triple integrals]] — 8.4.1, 8.4.1.1, 8.4.1.2, 8.4.1.3, 8.4.2, 8.4.2.1, 8.4.2.2, 8.4.2.3.
- [[Scalar and oriented surface integrals|Scalar and oriented surface integrals]] — 8.5.1, 8.5.1.1, 8.5.1.2, 8.5.1.3, 8.5.2, 8.5.2.1, 8.5.2.2, 8.5.3, 8.5.3.1, 8.5.3.2.
<!-- catalogue-complete-lesson-index:end -->
