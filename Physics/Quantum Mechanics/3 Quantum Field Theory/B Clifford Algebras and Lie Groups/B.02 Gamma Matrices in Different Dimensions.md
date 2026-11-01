---
title: "Gamma Matrices in Different Dimensions"
---

> [!TLDR]
> Gamma-matrix contractions follow from the Clifford relation, while trace normalizations depend on the spinor representation and spacetime dimension.

The following identities relate gamma-matrix products and traces in general dimension and in four dimensions.

## Choose the identity before the representation

Use [[B.02.01 General Properties]] for contractions that follow from the Clifford relation in integer dimension $d$. Use [[B.02.02 Identities in Four Dimensions]] when a four-dimensional chirality matrix or Levi-Civita tensor enters. Use [[B.02.03 Representations in Low Dimensions]] for an explicit matrix check and for the source's spinor table.

A contraction and a trace are different operations. The contraction $\gamma^\mu\gamma_\mu=d\mathbf1$ knows the vector-space dimension; taking its trace gives $d\operatorname{tr}\mathbf1$, which also knows the size of the chosen matrices. Doubling a representation doubles every trace but leaves the matrix contraction identity unchanged. This gives a quick check on factors that enter spin sums in QFT.

These notes concern finite-dimensional representations in integer spacetime dimension. Continuing a trace calculation to noninteger dimension requires an additional regularization prescription. In particular, the four-dimensional definition of $\gamma^5$ cannot simply be combined with every formal $d$-dimensional trace rule without stating that prescription.
