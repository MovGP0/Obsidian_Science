---
title: "Random Walk and Diffusion"
source_chapter: "C"
source_section: "C.5"
source_page: 488
---

> [!TLDR]
> Random walks connect independent steps with diffusion, polymer size, and thermal response.

How can motion with no preferred direction still spread a cloud of particles? In a random-walk model, the mean step can vanish while its variance is positive. Independent step variances add, so the typical displacement grows even though the mean position does not move.

Follow the one-dimensional note to separate drift from spreading and to keep lattice probabilities distinct from a continuous density. Then take the continuum limit in the diffusion note. Its Gaussian solution is for free space; walls or absorbing surfaces require different boundary conditions. The polymer note uses a walk in configuration space to count chain conformations, rather than to describe the time history of a chain end. The final note connects equilibrium positional fluctuations with the response to a small force.

The main modelling choice is the step law and its correlations. Independent finite-variance steps lead to ordinary diffusion on long scales. Persistent directions, broad step distributions, or confinement can invalidate that simple limit. A straight-line mean-square-displacement plot is a proposed check of the model; no experimental data are supplied in this appendix.

The random walk is a basic stochastic process with many uses in statistical mechanics: gas diffusion, Brownian motion, polymers, and spin networks.

- [[C.05.01 Random Walk in One Dimension]]
- [[C.05.02 Diffusion Equation]]
- [[C.05.03 Random Walk in d Dimensions and Polymers]]
- [[C.05.04 Fluctuation–Dissipation Theorem]]
