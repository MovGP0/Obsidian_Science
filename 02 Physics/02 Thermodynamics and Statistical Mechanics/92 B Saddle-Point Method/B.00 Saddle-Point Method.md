---
title: "Saddle-Point Method"
source_chapter: "B"
source_section: "B"
---

> [!TLDR]
> The saddle-point method approximates sharply concentrated integrals and connects microscopic state counting with thermodynamics.

Many problems in statistical mechanics require integrals of the form $\int e^{Nf(x)}\,dx$ as $N\to\infty$. The saddle-point, or Laplace, method gives systematic asymptotic expansions and controlled corrections. It is used in Stirling's formula, the equivalence of thermodynamic ensembles, and perturbative calculations in field theory and statistical physics.

The key question is which part of the integration range contributes most. Near an isolated maximum, a small decrease in $f$ becomes a large decrease in $e^{Nf}$. The height of the peak gives the leading exponential, while its curvature sets the width and the Gaussian prefactor. Thus, evaluating the integrand only at its maximum misses part of the answer.

Start with [[B.01 Laplace Approximation]] for the real, interior, nondegenerate maximum. Then use [[B.03 Application - Stirling Formula]] as a complete calculation and [[B.01.01 Corrections to the Laplace Approximation]] to understand the first error term. [[B.02 Saddle-Point Method in the Complex Plane]] adds contour deformation and its phase. The two ensemble applications show why a Gaussian width can be large in absolute particle count but small relative to the mean.

Before using any formula, check whether the dominant point is inside the integration range, whether its curvature is nonzero, and whether another peak contributes at the same order. A boundary maximum, a flat maximum, or competing peaks requires a different local calculation or a sum of contributions. [[B.06 Generalizations and Advanced Applications]] extends this test to several variables and fluctuation modes.

- [[B.01 Laplace Approximation]]
- [[B.01.01 Corrections to the Laplace Approximation]]
- [[B.02 Saddle-Point Method in the Complex Plane]]
- [[B.03 Application - Stirling Formula]]
- [[B.04 Application - Ensemble Equivalence]]
- [[B.05 Worked Example - Ideal-Gas Partition Function]]
- [[B.06 Generalizations and Advanced Applications]]
