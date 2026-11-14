---
title: "Notation Comparison"
---

> [!TLDR]
> Mathematics and physics texts can use different conventions for the same objects. Check the definitions of inner products, adjoints, transforms, and indices before combining formulas from different sources.

This appendix collects the main notation differences used in mathematics and physics books. The conventions can describe equivalent structures, but their formulas must be used consistently.

## Topics

- [[01 The Inner Product|The inner product]]
- [[02 The Adjoint of an Operator|The adjoint of an operator]]
- [[03 The Fourier Transform|The Fourier transform]]
- [[04 Index Conventions|Index conventions]]
- [[05 Dirac Notation versus Function Notation|Dirac notation versus function notation]]
- [[06 Recurring Symbols|Recurring symbols]]

The [[00 Formula Collection|formula collection]] uses the physics conventions of this book.

## A route for translating a formula

Start with [[01 The Inner Product|the inner-product convention]]: it determines which argument is conjugated and which order gives an expansion coefficient. Then check [[02 The Adjoint of an Operator|the adjoint]] and [[04 Index Conventions|the index order]] before translating a matrix expression. A dagger becomes a conjugate transpose only in orthonormal coordinates.

For a wavefunction calculation, use [[05 Dirac Notation versus Function Notation|the position-representation dictionary]] first. It distinguishes a state from its components and a normalizable vector from a generalized position ket. Next use [[03 The Fourier Transform|the transform table]] to check the sign, integration variable, and normalization. A continuous label requires an integration measure; it is not just a renamed matrix index.

As a quick test, translate the squared norm of a vector into the target notation. It must remain real and nonnegative. Then translate one expansion coefficient or one derivative. The norm check detects many normalization errors, but it cannot detect every phase or conjugation error. For example, conjugating every coefficient preserves its magnitude but can change the state. Use [[06 Recurring Symbols|the symbol dictionary]] to check what each object means before making such a replacement.
