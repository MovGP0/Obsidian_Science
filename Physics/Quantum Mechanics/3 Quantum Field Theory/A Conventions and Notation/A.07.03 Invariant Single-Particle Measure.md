---
title: "Invariant Single-Particle Measure"
---

> [!TLDR]
> The invariant one-particle measure integrates over the positive-energy mass shell.

The Lorentz-covariant measure for one-particle phase-space integration is
$$
\int\frac{d^3\mechanical{\mathbf p}}{(2\pi)^3\,2\energy{E}_{\mathbf p}}
=\int\frac{d^4\mechanical{p}}{(2\pi)^4}
\,(2\pi)\delta(\mechanical{p}^2-\mechanical{m}^2)\theta(\mechanical{p}^0).
\tag{A.67}
$$

The right side is shorthand for integration of a test function on the positive-energy shell. For fixed spatial momentum, the delta function has roots at plus and minus the on-shell energy. Its derivative at either root has magnitude twice that energy. The step function removes the negative root, leaving exactly the denominator on the left and reducing the normalization by one factor of $2\pi$.

This measure is invariant under proper orthochronous Lorentz transformations, which preserve the chosen positive-energy shell. It has mass dimension two in four spacetime dimensions: three powers from spatial momentum integration and minus one from the energy denominator. It does not constrain the total momentum of several particles; a separate conservation delta function is needed for multiparticle phase space. For zero mass the same reduction holds away from the zero-momentum endpoint; the full integrand determines whether that endpoint has an infrared singularity.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{p},\mechanical{\mathbf p}$ | $\unit{GeV}$ | Four-momentum and three-momentum | The on-shell particle momentum and its spatial components. |
| $\energy{E}_{\mathbf p}$ | $\unit{GeV}$ | Positive on-shell energy | The energy in the three-momentum measure. |
| $\mechanical{m}$ | $\unit{GeV}$ | Particle mass | The mass that defines the shell selected by the delta function. |
