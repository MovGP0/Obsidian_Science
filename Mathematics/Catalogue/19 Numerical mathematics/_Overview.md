---
title: "Numerical mathematics learning guide"
catalogue_ids:
  - "19"
---

> [!TLDR]
> Numerical mathematics turns exact mathematical problems into finite algorithms with explicit error checks and conditions for convergence.

## A route from school algebra to numerical methods

Start with [[Number sets and the real line]], [[Polynomials and identities]], and [[03.01 Function definitions]]. These provide the algebra needed for root iterations and interpolation. Before matrix algorithms, read [[10.03 Matrices]] and [[10.04 Linear systems]]. Before numerical calculus, read [[07.03 The derivative]], [[07.08 Linear approximation]], and [[08.01 Definite integrals]]. The lessons introduce their algorithms with small examples before stating broader conditions.

The main aim is not to replace reasoning by a calculator. It is to connect an algorithm to the exact problem it approximates, identify its assumptions, and check the result at a useful scale. A printed decimal is an output, not a proof of its accuracy.

## Four questions to ask

1. **What is the exact problem?** State the equation, interval or domain, data, and requested tolerance. A differential equation without boundary or initial data is usually not a complete numerical task.
2. **Is the problem well-conditioned?** Ask how much its answer changes when the data change. This is independent of the chosen algorithm.
3. **Is the algorithm stable and convergent under these conditions?** Stability controls amplification of perturbations. Convergence concerns approach to the desired answer as the appropriate discretization or iteration limit is taken.
4. **What evidence checks this particular result?** Use brackets, residuals, error bounds, mesh refinement, or independent formulations. Each check has a scope; a small discrete residual does not establish small continuum error.

For example, suppose $x^2=2$ is to be solved to absolute error $10^{-3}$. A root bracket $[1.414,1.415]$ is certified by opposite signs of $x^2-2$ at its endpoints. Its midpoint has error at most $0.0005$. Newton's method can quickly suggest the same digits, but the bracket supplies a direct error bound. This is the distinction between fast progress and a certificate.

## Suggested learning order

Begin with [[Floating-point arithmetic and error]] to understand why exact algebraic identities can behave differently in finite arithmetic. Then use [[Scalar root finding]] and [[Polynomial root algorithms]]. Continue to [[Direct linear system methods]] and [[Iterative system methods]], because many later algorithms reduce their work to linear systems.

For integration, study [[Quadrature from interpolation]] before [[Gaussian and Romberg quadrature]]. For differential equations, follow [[Initial value algorithms]], [[Boundary value algorithms]], and [[Partial differential equation algorithms]]. Each new stage adds data or stability requirements rather than merely adding more variables.

For function approximation, read [[Polynomial interpolation algorithms]], [[Least-squares algorithms]], and [[Minimax approximation]] to distinguish three objectives: exact sample fit, small squared error, and small worst error. [[Trigonometric interpolation and FFT]] uses periodic samples. [[Cubic spline algorithms]], [[Bicubic spline algorithms]], and [[Bezier curves and surfaces]] introduce piecewise approximation and geometric control.

## A small error budget

Suppose a computed integral differs from the exact mathematical integral for four reasons: uncertain input, discretization, an incompletely solved coefficient system, and roundoff. The triangle inequality bounds the total error by the sum of bounds for these parts, when such bounds are available. Spending all effort on the coefficient-system residual can be wasteful if the coarse grid error dominates. Conversely, refining a grid beyond available arithmetic precision can fail to improve the answer.

This suggests a practical sequence: choose a sensible mathematical model, calculate with a moderate discretization, verify the algebraic solve, refine and compare at shared points, and examine whether the observed changes match the expected order. An expected order is a theorem with hypotheses, not a universal numerical law. Nonsmoothness, stiffness, rank deficiency, and poor scaling can change the result.

## Practice

1. A quadrature error is bounded by $0.003$ and its arithmetic error by $0.0002$. What total bound follows without assuming cancellation?
2. A linear solve has a tiny residual. What additional concern prevents you from immediately claiming an equally tiny solution error?

> [!example]- Worked answers
> 1. The triangle inequality gives $0.003+0.0002=0.0032$. Actual cancellation may occur, but it cannot be relied on for a guaranteed bound.
> 2. The matrix may be ill-conditioned. A small residual measures satisfaction of nearby equations; converting it to a solution-error estimate needs sensitivity information, such as a condition number or a bound on the inverse operator.

<!-- catalogue-complete-lesson-index:start -->
## Complete lesson index

Read the prerequisite route above before the advanced lessons. The source topic links are in [[Planned Topics#19. Numerical mathematics|the detailed catalogue]].

- [[Scalar root finding|Scalar root finding]] — 19.1, 19.1.1, 19.1.1.1, 19.1.1.2, 19.1.1.3.
- [[Polynomial root algorithms|Polynomial root algorithms]] — 19.1.2, 19.1.2.1, 19.1.2.2, 19.1.2.3.
- [[Direct linear system methods|Direct linear system methods]] — 19.2, 19.2.1, 19.2.1.1, 19.2.1.2, 19.2.1.3.
- [[Iterative system methods|Iterative system methods]] — 19.2.1.4, 19.2.2, 19.2.2.1, 19.2.2.2, 19.2.2.3.
- [[Quadrature from interpolation|Quadrature from interpolation]] — 19.3, 19.3.1, 19.3.2, 19.3.2.1, 19.3.2.2, 19.3.2.3, 19.3.2.4.
- [[Gaussian and Romberg quadrature|Gaussian and Romberg quadrature]] — 19.3.3, 19.3.3.1, 19.3.3.2, 19.3.4, 19.3.4.1, 19.3.4.2.
- [[Initial value algorithms|Initial value algorithms]] — 19.4, 19.4.1, 19.4.1.1, 19.4.1.2, 19.4.1.3, 19.4.1.4, 19.4.1.5.
- [[Boundary value algorithms|Boundary value algorithms]] — 19.4.2, 19.4.2.1, 19.4.2.2, 19.4.2.3.
- [[Partial differential equation algorithms|Partial differential equation algorithms]] — 19.5, 19.5.1, 19.5.2, 19.5.3.
- [[Polynomial interpolation algorithms|Polynomial interpolation algorithms]] — 19.6, 19.6.1, 19.6.1.1, 19.6.1.2, 19.6.1.3.
- [[Least-squares algorithms|Least-squares algorithms]] — 19.6.2, 19.6.2.1, 19.6.2.2, 19.6.2.3, 19.6.2.4.
- [[Minimax approximation|Minimax approximation]] — 19.6.3, 19.6.3.1, 19.6.3.2, 19.6.3.3, 19.6.3.4.
- [[Trigonometric interpolation and FFT|Trigonometric interpolation and FFT]] — 19.6.4, 19.6.4.1, 19.6.4.2.
- [[Cubic spline algorithms|Cubic spline algorithms]] — 19.7, 19.7.1, 19.7.1.1, 19.7.1.2.
- [[Bicubic spline algorithms|Bicubic spline algorithms]] — 19.7.2, 19.7.2.1, 19.7.2.2, 19.7.2.3.
- [[Bezier curves and surfaces|Bézier curves and surfaces]] — 19.7.3, 19.7.3.1, 19.7.3.2.
- [[Floating-point arithmetic and error|Floating-point arithmetic and error]] — 19.8, 19.8.1, 19.8.1.1, 19.8.1.2, 19.8.2, 19.8.2.1, 19.8.2.2, 19.8.2.3.
<!-- catalogue-complete-lesson-index:end -->
