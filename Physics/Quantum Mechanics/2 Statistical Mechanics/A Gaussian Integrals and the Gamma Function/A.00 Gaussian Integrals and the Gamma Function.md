---
title: "Gaussian Integrals and the Gamma Function"
source_chapter: "A"
source_section: "A"
---

> [!TLDR]
> Gaussian integrals and the gamma function provide tools for state counting, partition functions, and probability distributions.

The mathematical tools in this appendix occur throughout statistical mechanics. The ideal-gas partition function, the Maxwell distribution, the density of states, and Stirling's formula all lead to Gaussian integrals or evaluations of the gamma function. The following articles give the main proofs and useful formulas.

## Choose a route

For a thermal integral with a decaying quadratic exponential, start with [[A.01 Fundamental Gaussian Integral]]. Use [[A.02 Moments of the Gaussian Integral]] when powers of a coordinate or momentum multiply the exponential. Use [[A.03 Multidimensional Gaussian Integrals]] when cross terms couple the coordinates: the eigenvalues determine convergence, and the inverse matrix determines correlations.

For a radial integral, first include the radial measure. Then use [[A.04 Gamma Function]] and [[A.07 Volume of a Ball in N Dimensions]]. An integral on a finite interval with powers at both ends instead suggests [[A.06 Beta Function]]. Use [[A.05 Stirling Formula]] only after identifying a large positive argument and the accuracy required.

These are mathematical identities or controlled asymptotic results. They do not establish the statistical model. The applications in [[A.08 Applications in Statistical Mechanics]] separately require a classical gas, a continuum state count, or a harmonic energy model. Before substitution, check the integration domain and convergence; a full-line Gaussian moment and a radial half-line moment have different factors.

- [[A.01 Fundamental Gaussian Integral]]
- [[A.02 Moments of the Gaussian Integral]]
- [[A.03 Multidimensional Gaussian Integrals]]
- [[A.04 Gamma Function]]
- [[A.05 Stirling Formula]]
- [[A.06 Beta Function]]
- [[A.07 Volume of a Ball in N Dimensions]]
- [[A.08 Applications in Statistical Mechanics]]
- [[A.09 Summary of the Main Formulas]]
