---
title: "Information Entropy and Statistical Mechanics"
source_chapter: "C"
source_section: "C.4"
source_page: 486
---

> [!TLDR]
> Information entropy measures uncertainty and connects state probabilities with thermodynamic entropy and equilibrium.

The same uncertainty formula has two different roles. In information theory it is a dimensionless function of a specified discrete probability distribution. In statistical mechanics the events must be physical microstates, and the ensemble must describe the constraints and contact with the surroundings. Multiplication by Boltzmann's constant then gives the Gibbs entropy used here.

Read the Shannon note first for normalization, extrema, and the finite sample space. Read the ensemble note next to see why fixing an allowed set of states differs from fixing only mean energy. Finally, use relative entropy to compare an arbitrary distribution with a specified reference. The reference and its zero-probability events matter; relative entropy is not an ordinary geometric distance.

A useful check is the uniform distribution on the allowed states. Both definitions reduce to the logarithm of their number, with the physical conversion factor only in Gibbs entropy. This agreement is a mathematical identity once the ensemble is specified. It does not establish that a physical system reaches equilibrium or that entropy increases along every trajectory.

The connection is developed through:

- [[C.04.01 Shannon Entropy]]
- [[C.04.02 Connection to Statistical Mechanics]]
- [[C.04.03 Relative Entropy - Kullback–Leibler Divergence]]
