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

- [[18.01 Dual spaces|Dual spaces]]: linear functionals, covectors, dual bases, and the natural pairing of a covector with a vector.
- [[18.02 Tensor products|Tensor products]]: construct multilinear objects from vectors and covectors and distinguish them from ordinary scalar products.
- [[18.03 Tensor type|Tensor type]]: explain covariant and contravariant slots, rank, and the dimensions of component arrays.
- [[18.04 Components|Components]]: evaluate on basis elements and reconstruct the abstract object from a component expansion.
- [[18.05 Transformation laws|Transformation laws]]: derive the rules for vectors, covectors, and general tensors using basis changes and coordinate Jacobians.
- [[18.06 Index notation|Index notation]]: free and dummy indices, Einstein summation, legal contractions, and index-renaming rules.
- [[18.07 Tensor operations|Tensor operations]]: addition, products, contraction, permutation of slots, symmetrization, and antisymmetrization.
- [[18.08 Forms and metrics|Forms and metrics]]: treat a bilinear form as a covariant tensor and explain how a nondegenerate metric identifies vectors with covectors.
- [[18.09 Coordinate checks|Coordinate checks]]: show why an arbitrary array or an ordinary derivative of tensor components need not obey a tensor transformation law.

## Learning outcomes

After studying this topic, you should be able to:

- Derive the opposite component transformations of a vector and a covector from an invariant pairing.
- Transform a rank-two tensor and verify a scalar contraction in two bases.
- Check an indexed equation for matching free indices and valid dummy-index use.
