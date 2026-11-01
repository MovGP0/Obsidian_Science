---
title: "Propagators"
---

> [!TLDR]
> Propagators carry line momentum and the Feynman pole prescription. In Rξ gauge, massive vector and unphysical scalar denominators depend on the gauge parameter.

In the following formulas, $\mechanical{p}$ is the momentum carried by the line.
The infinitesimal $\varepsilon>0$ specifies the Feynman prescription, written as $+i\varepsilon$ in the denominator.

A propagator is the inverse of the free quadratic field operator with Feynman boundary conditions. It joins two vertices and sums over the internal field indices. Its pole identifies a free mass shell, but an integration momentum on an internal line is generally off shell. Do not replace an external spinor or polarization vector by a propagator.

Choose [[C.02.01 Bosonic Propagators]] for physical scalars and vectors, [[C.02.04 Fermionic Propagators]] for spinor lines, and the separate [[C.02.02 Faddeev–Popov Ghost Propagators|ghost]] and [[C.02.03 Goldstone Boson Propagators|Goldstone]] rules when the gauge-fixed calculation requires them. The last two describe internal auxiliary fields, not additional physical final states.

The infinitesimal prescription selects how to pass the poles in an energy integral. It is not a measured decay width. These free propagators have no finite-width resummation; a resonance calculation needs a consistent treatment beyond merely changing one denominator. As a first check, a scalar or vector propagator has inverse-energy-squared units, while the spinor numerator makes a fermion propagator have inverse-energy units.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{p}$ | $\unit{GeV}$ | Line four-momentum | The momentum argument of a propagator. |
