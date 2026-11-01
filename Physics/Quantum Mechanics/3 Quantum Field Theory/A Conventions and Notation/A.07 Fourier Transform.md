---
title: "Fourier Transform"
---

> [!TLDR]
> The Fourier convention uses a positive exponential in the forward transform and a negative exponential with a momentum-space normalization in the inverse.

Use the following Fourier-transform convention and its associated delta-function and integration-measure definitions.

Use [[A.07.01 Conventions in d Dimensions]] to fix the exponential sign and the placement of normalization factors before transforming a field equation. [[A.07.02 Dirac Delta Function]] checks the inverse transform by reconstructing the original function. These normalization choices affect momentum-space delta functions and vertex factors together.

For an on-shell final particle, replace the unrestricted four-momentum integral with [[A.07.03 Invariant Single-Particle Measure]]. This is a mass-shell restriction, not an alternative Fourier convention. A propagator instead integrates off-shell four-momenta and retains the Feynman pole prescription. Separating these two uses of momentum integration prevents an on-shell condition from being inserted into a loop denominator.
