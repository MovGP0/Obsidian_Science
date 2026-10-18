---
title: "Vector analysis and field theory learning guide"
catalogue_ids:
  - "13"
---

> [!TLDR]
> Learn to describe fields, calculate their local derivatives, integrate them over oriented regions, and solve basic source and boundary problems.

## A route from school mathematics

This chapter explains fields as functions on a region of space. Begin with coordinates, functions, vectors, and ordinary differentiation and integration. No prior knowledge of physics, tensor calculus, differential forms, or university analysis is required at entry. The later lessons state their additional prerequisites and build each method from a concrete example.

If differentiation is new, use [[07.03 The derivative]], [[07.04 Differentiation rules]], and [[07.08 Linear approximation]]. For integration, use [[08.01 Definite integrals]] and [[08.03 The fundamental theorem]]. For vectors, use [[05.03 Components and bases]], [[05.05 Dot products]], and [[Cross product]]. Before field derivatives, read [[12.02 Partial derivatives]]. A partial derivative simply differentiates one input while keeping the others fixed.

Do not begin with a table of nabla formulas. First distinguish three kinds of objects. A parameterized curve takes one number and returns a point. A scalar field takes a point and returns a number. A vector field takes a point and returns a vector. Their derivatives and integrals answer different questions, so the input and output type is a useful check on every calculation.

## Study sequence

1. [[Vector functions and curves]] introduces parameterization, tangent vectors, componentwise derivatives, product rules, and Taylor approximation.
2. [[Scalar and vector fields]] explains domains, level sets, field lines, and coordinate changes.
3. [[Directional derivatives and gradients]] builds rates of change, the scalar gradient, the vector Jacobian, and volume derivatives.
4. [[Divergence and local expansion]] measures local outward balance, including central fields and singularity warnings.
5. [[Curl and local circulation]] measures oriented local circulation and explains when a potential exists.
6. [[Nabla identities and curvilinear coordinates]] connects the operators, derives geometric scale factors, and checks Cartesian, cylindrical, and spherical formulas.
7. [[Line integrals and scalar potentials]] integrates along paths, constructs potentials, and introduces mechanical work as a separate physical application.
8. [[Surface integrals and oriented flux]] constructs area vectors and calculates flux through parameterized surfaces.
9. [[Integral theorems and boundary identities]] states Gauss, Stokes, and Green formulas with their hypotheses and orientations.
10. [[Source and vortex reconstruction]] separates source and circulation data, including boundary and decay conditions.
11. [[Point sources and superposition]] adds discrete or continuous sources and compares Coulomb and Newtonian fields.
12. [[Laplace and Poisson boundary problems]] combines derivatives, sources, and boundary data to determine a field.

The existing [[Vector calculus - Overview]] provides a shorter foundation route. [[Differential forms - Overview]] gives an optional later language that unifies the integral theorems. It is not a prerequisite for the calculations here.

## What the main operators tell you

For a scalar field $f$, its gradient is a vector pointing toward greatest local increase. For a vector field $\mathbf F$, divergence is a scalar describing outward excess, and curl is a vector describing oriented circulation. The full derivative of a vector field is a matrix; divergence and curl do not retain all its information. The scalar Laplacian adds second Cartesian derivatives and governs the simplest potential equations.

A local derivative only uses nearby points. A line or surface integral uses an entire path or surface. An integral theorem connects these two views, but only when its smoothness and domain hypotheses hold. This is why every lesson states the allowed region before using a formula.

## Worked orientation example

Take $f=x^2+y^2$ and $\mathbf F=(-y,x)$ in the plane. The scalar field's level curves are circles. Its gradient is $(2x,2y)$, perpendicular to those circles. The vector field is tangent to them, since $(2x,2y)\cdot(-y,x)=0$. Its divergence is $\partial_x(-y)+\partial_y(x)=0$, while its planar curl is $\partial_x(x)-\partial_y(-y)=2$.

On the unit circle, parameterize $\mathbf r(t)=(\cos t,\sin t)$ for $0\le t\le2\pi$. The field equals the tangent $\mathbf r'$, and its circulation is $\int_0^{2\pi}1dt=2\pi$. The same value is curl two times disk area $\pi$. This one example connects field lines, gradients, divergence, curl, line integrals, and Green's theorem.

## A reliable calculation routine

Write the domain and identify excluded points. State whether components use a fixed Cartesian basis or position-dependent unit vectors. For derivatives, identify the input and output type. For integrals, specify path direction or surface normal before substituting. Check whether a theorem requires the filled region to lie within the field's domain. For a differential equation, include boundary data before claiming a unique solution.

Check a complicated result using a simpler representation. For instance, $x^2+y^2+z^2=r^2$ has Laplacian six in both Cartesian and spherical coordinates. A disagreement usually signals a missing geometric factor or a mismatched angle convention. A denominator that vanishes at a coordinate pole does not by itself prove a singular field: return to the Cartesian formula.

## Practice and worked answers

1. Can a vector field have zero divergence but nonzero curl? Give an example and explain the difference. **Answer:** $(-y,x,0)$ has divergence zero and curl $(0,0,2)$. It has no local outward excess but does have local circulation.
2. Does $\nabla\cdot\mathbf F=0$ determine $\mathbf F$ uniquely? **Answer:** no. Both a zero field and every constant vector field satisfy the equation. Curl, domain, and boundary information are additional data; even divergence and curl together need appropriate boundary conditions.

<!-- catalogue-complete-lesson-index:start -->
## Complete lesson index

Read the prerequisite route above before the advanced lessons. The source topic links are in [[Planned Topics#13. Vector analysis and field theory|the detailed catalogue]].

- [[Scalar and vector fields|Scalar and vector fields]] — 13.1, 13.1.2, 13.1.2.1, 13.1.2.2, 13.1.2.3, 13.1.2.4, 13.1.3, 13.1.3.1, 13.1.3.2, 13.1.3.3, 13.1.3.4, 13.1.3.5.
- [[Vector functions and curves|Vector functions and curves]] — 13.1.1, 13.1.1.1, 13.1.1.2, 13.1.1.3, 13.1.1.4.
- [[Nabla identities and curvilinear coordinates|Nabla identities and curvilinear coordinates]] — 13.2, 13.2.6, 13.2.6.1, 13.2.6.2, 13.2.6.3, 13.2.6.4, 13.2.6.5, 13.2.7, 13.2.7.1, 13.2.7.2, 13.2.7.3.
- [[Directional derivatives and gradients|Directional derivatives and gradients]] — 13.2.1, 13.2.1.1, 13.2.1.2, 13.2.1.3, 13.2.2, 13.2.2.1, 13.2.2.2, 13.2.2.3, 13.2.2.4, 13.2.2.5, 13.2.2.6, 13.2.3.
- [[Divergence and local expansion|Divergence and local expansion]] — 13.2.4, 13.2.4.1, 13.2.4.2, 13.2.4.3, 13.2.4.4.
- [[Curl and local circulation|Curl and local circulation]] — 13.2.5, 13.2.5.1, 13.2.5.2, 13.2.5.3, 13.2.5.4.
- [[Line integrals and scalar potentials|Line integrals and scalar potentials]] — 13.3, 13.3.1, 13.3.1.1, 13.3.1.2, 13.3.1.3, 13.3.1.4, 13.3.1.5, 13.3.1.6.
- [[Surface integrals and oriented flux|Surface integrals and oriented flux]] — 13.3.2, 13.3.2.1, 13.3.2.2, 13.3.2.3, 13.3.2.4.
- [[Integral theorems and boundary identities|Integral theorems and boundary identities]] — 13.3.3, 13.3.3.1, 13.3.3.2, 13.3.3.3.
- [[Source and vortex reconstruction|Source and vortex reconstruction]] — 13.4, 13.4.1, 13.4.2.
- [[Point sources and superposition|Point sources and superposition]] — 13.4.3, 13.4.3.1, 13.4.3.2, 13.4.4, 13.4.4.1, 13.4.4.2, 13.4.4.3.
- [[Laplace and Poisson boundary problems|Laplace and Poisson boundary problems]] — 13.5, 13.5.1, 13.5.2.
<!-- catalogue-complete-lesson-index:end -->
