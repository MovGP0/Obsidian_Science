---
title: "Lie Algebras"
---

> [!TLDR]
> A Lie algebra describes infinitesimal group transformations through tangent vectors, commutators, and structure constants.

The following definitions introduce the Lie algebra associated with a Lie group and the representation data used later.

## A route from brackets to invariant numbers

Start with [[B.05.01 The Lie Algebra Associated with a Lie Group]] for the tangent-space definition. Then [[B.05.02 Generators and Structure Constants]] expresses the bracket in a basis. Its Jacobi identity is the consistency condition that keeps successive infinitesimal transformations inside the same algebra.

[[B.05.03 Adjoint Representation]] applies that bracket to the algebra itself. [[B.05.04 Killing Form]] and [[B.05.05 Casimir Operators]] then turn the representation matrices into invariant quadratic data. Keep a normalization convention fixed through this route: rescaling a basis changes the numerical structure constants and trace indices.

For a concrete checkpoint, use $T^a=\sigma^a/2$ for $SU(2)$. The bracket has $f^{abc}=\epsilon^{abc}$, the algebra has dimension three, and the fundamental quadratic Casimir is $3/4$. These are dimensionless algebraic numbers. Converting them to physical angular momentum requires a separate dimensional scale. Algebraic constraints can organize charges or field multiplets, but do not determine the physical coupling constants of an action.
