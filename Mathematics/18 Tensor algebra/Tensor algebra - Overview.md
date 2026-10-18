---
title: "Tensor algebra — overview"
document_type: "Mathematics topic overview"
---

> [!TLDR]
> Construct tensors as multilinear objects and calculate their components, transformations, symmetries, and contractions.

## Scope

Tensor algebra separates an abstract object from an array of components in selected bases. It explains why upper and lower indices transform differently and which pairings produce basis-independent results.

## Starting knowledge

Use vector spaces, bases, and linear maps from [[Linear algebra - Overview]], pairings from [[Bilinear and quadratic forms - Overview]], and Jacobians from [[Multivariable calculus - Overview]].

## Topics to cover

- Dual spaces: linear functionals, covectors, dual bases, and the natural pairing of a covector with a vector.
- Tensor products: construct multilinear objects from vectors and covectors and distinguish them from ordinary scalar products.
- Tensor type: explain covariant and contravariant slots, rank, and the dimensions of component arrays.
- Components: evaluate on basis elements and reconstruct the abstract object from a component expansion.
- Transformation laws: derive the rules for vectors, covectors, and general tensors using basis changes and coordinate Jacobians.
- Index notation: free and dummy indices, Einstein summation, legal contractions, and index-renaming rules.
- Tensor operations: addition, products, contraction, permutation of slots, symmetrization, and antisymmetrization.
- Forms and metrics: treat a bilinear form as a covariant tensor and explain how a nondegenerate metric identifies vectors with covectors.
- Coordinate checks: show why an arbitrary array or an ordinary derivative of tensor components need not obey a tensor transformation law.

## Learning outcomes

After studying this topic, you should be able to:

- Derive the opposite component transformations of a vector and a covector from an invariant pairing.
- Transform a rank-two tensor and verify a scalar contraction in two bases.
- Check an indexed equation for matching free indices and valid dummy-index use.
