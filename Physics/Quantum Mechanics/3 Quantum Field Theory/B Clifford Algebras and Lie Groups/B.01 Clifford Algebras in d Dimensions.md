---
title: "Clifford Algebras in d Dimensions"
---

> [!TLDR]
> A Clifford algebra encodes a quadratic form through anticommuting generators and supplies the algebraic basis for gamma matrices and spinor representations.

## Appendix introduction

This appendix collects basic definitions and identities for Clifford algebras, gamma matrices in different dimensions, spinor representations, and continuous Lie groups used in quantum field theory.

Unless another convention is stated, use the mostly-minus Minkowski metric
$$
g^{\mu\nu}=\operatorname{diag}(+1,-1,-1,-1).
$$

## How to use the appendix

The first question is algebraic: which matrices can encode a given metric? Start with [[B.01.01 Definition]] and [[B.01.02 Dimension and Structure]]. The relation fixes the symmetric product; it leaves antisymmetric products to generate rotations and boosts. Read [[B.01.03 Chiral Volume Element]] before using left- and right-chiral spinors.

Next, use [[B.02.03 Representations in Low Dimensions]] to check the abstract statements with matrices. Distinguish the dimension of spacetime, the dimension of the algebra, and the number of components in a spinor. In four dimensions these are $4$, $16$, and $4$ complex components for a Dirac spinor. They answer different questions.

The Lie-group sections then connect local generators to finite symmetries. [[B.08.03 The Universal Cover SL(2, ℂ)]] explains why spinors need a covering group. These are mathematical constraints on possible field transformations. A choice of symmetry and field representation still needs a physical model; the algebra alone does not establish a particle spectrum or an interaction.

The default metric above applies to four-dimensional examples. In other dimensions, specify both the signature and whether the representation is real or complex before using a spinor-counting rule.
