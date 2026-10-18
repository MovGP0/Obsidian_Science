---
title: "Differential calculus: learning route"
catalogue_ids:
  - "6"
---

> [!TLDR]
> Differential calculus describes local change and uses that information to approximate functions and find extreme values.

## What this chapter explains

An algebraic formula tells you the output for a chosen input. Differential calculus asks how much that output changes when the input changes a little. Its central object is the derivative. For a curve, this is a tangent slope. For a function of several variables, it is a linear rule that converts a small input displacement into an approximate output change.

The word *local* means near a selected point. A derivative at one point does not describe an entire graph. In particular, a zero derivative does not guarantee a highest or lowest value. This chapter develops the extra conditions needed for those conclusions.

## Entry knowledge and preparation

You need school algebra: expand brackets, factor simple polynomials, work with fractions, solve linear and quadratic equations, and read coordinate graphs. Review [[03.01 Function definitions]] for inputs and domains, [[03.02 Graphs]] for coordinates and slopes, and [[03.07 Composition and inverse functions]] for nested formulas. The foundation [[07.01 Limits]] defines what it means for outputs to approach a number. Read [[07.02 Continuity]] next: continuity means that nearby eligible inputs have nearby outputs.

You can start before you know trigonometric or logarithmic differentiation. The first lesson uses only a square. Read [[03.04 Exponential and logarithmic functions]] and [[03.05 Trigonometric functions]] when those functions appear. Trigonometric derivative formulas use radians.

## A route through the methods

Start with [[Tangents and the derivative]]. It derives the derivative from slopes between two points and separates an exact change from its linear approximation. Continue with [[Elementary derivative methods]] to differentiate sums, products, quotients, and compositions. These rules reduce large expressions to small operations.

Then read [[Repeated differentiation]]. A second derivative describes how the first derivative changes. The lesson also explains curves given by a parameter or an inverse relation. [[Mean value theorems and monotonicity]] turns local slope information into conclusions on an interval. [[Taylor polynomials with error control]] constructs higher-order approximations and controls their errors.

Use [[Extrema and inflection points]] to combine these tools. It separates interior stationary points, corners, endpoints, and changes in concavity. None of these categories should be silently omitted from a search for global extrema.

For several inputs, continue with [[Partial changes and total differentials]]. A partial derivative changes one input at a time; the total differential handles all inputs together. [[Higher differentials and local approximation]] adds mixed derivatives and a quadratic approximation. [[Composite functions and coordinate changes]] explains the transformation under new variables. Finally, [[Extrema in several variables]] introduces the Hessian test, least squares, and regular constraints.

## Worked example: predict before exact calculation

At $x=3$, the function $f(x)=x^2$ has value $9$. For a small change $h$, school algebra gives

$$
f(3+h)-f(3)=(3+h)^2-9=6h+h^2.
$$

The term $6h$ is linear in $h$. The remaining term becomes small relative to $h$, because $h^2/|h|=|h|\to0$. Thus the local linear rule is $h\mapsto6h$, and the derivative is $6$. At $h=0.02$, the predicted change is $0.12$ and the exact change is $0.1204$. The difference $0.0004$ is precisely $h^2$. Calculus makes this approximation systematic.

## How to use a worked answer

First identify the domain and the type of question. A formula can require a nonzero denominator or a positive logarithm argument. Choose the rule and show the intermediate expression before simplifying. Finally check the conclusion: an approximation needs an error statement, an extremum needs classification, and a coordinate formula needs a valid coordinate region. A numerical check is useful but does not replace a proof for all inputs.

## Practice

1. Expand $(2+h)^3-8$ and identify its linear part.
2. Why does the minimum of $f(x)=x$ on $[0,1]$ not require a zero derivative?

## Worked answers

1. Expansion gives $12h+6h^2+h^3$. The linear part is $12h$. After division by $|h|$, the absolute remainder is at most $6|h|+h^2$, which tends to zero. The derivative at $2$ is therefore $12$.
2. The minimum is at the endpoint $0$. The allowed input changes there are one-sided. The interior stationary-point theorem does not apply. The derivative is $1$ at every interior point, consistent with an increasing function and an endpoint minimum.

<!-- catalogue-complete-lesson-index:start -->
## Complete lesson index

Read the prerequisite route above before the advanced lessons. The source topic links are in [[Planned Topics#6. Differential calculus|the detailed catalogue]].

- [[Tangents and the derivative|Tangents and the derivative]] — 6.1, 6.1.1.
- [[Elementary derivative methods|Elementary derivative methods]] — 6.1.2, 6.1.2.1, 6.1.2.2.
- [[Repeated differentiation|Repeated differentiation]] — 6.1.3, 6.1.3.1, 6.1.3.2, 6.1.3.3, 6.1.3.4, 6.1.3.5.
- [[Mean value theorems and monotonicity|Mean value theorems and monotonicity]] — 6.1.4, 6.1.4.1, 6.1.4.2, 6.1.4.3, 6.1.4.4, 6.1.4.6.
- [[Taylor polynomials with error control|Taylor polynomials with error control]] — 6.1.4.5.
- [[Extrema and inflection points|Extrema and inflection points]] — 6.1.5, 6.1.5.1, 6.1.5.2, 6.1.5.3, 6.1.5.4, 6.1.5.5.
- [[Partial changes and total differentials|Partial changes and total differentials]] — 6.2, 6.2.1, 6.2.1.1, 6.2.1.2, 6.2.1.3, 6.2.1.4, 6.2.1.5, 6.2.2.1.
- [[Higher differentials and local approximation|Higher differentials and local approximation]] — 6.2.2, 6.2.2.2, 6.2.2.3.
- [[Composite functions and coordinate changes|Composite functions and coordinate changes]] — 6.2.3, 6.2.3.1, 6.2.3.2, 6.2.4, 6.2.4.1, 6.2.4.2.
- [[Extrema in several variables|Extrema in several variables]] — 6.2.5, 6.2.5.1, 6.2.5.2, 6.2.5.3, 6.2.5.4, 6.2.5.5, 6.2.5.6.
<!-- catalogue-complete-lesson-index:end -->
