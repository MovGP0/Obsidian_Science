---
title: "Dimensions in Natural Units"
---

> [!TLDR]
> With the reduced Planck constant and speed of light set to one, mass dimension is the single independent physical dimension.

With $\energy{\hbar}=\mechanical{c}=1$, mass dimension is the only independent dimension.
Write a quantity of mass dimension $n$ as having units $\unit{GeV^n}$.
The common dimensions are collected below.

**Table A.2** Mass dimensions of physical quantities with $\energy{\hbar}=\mechanical{c}=1$. Here $[M]$ denotes one power of mass.

| Quantity | Mass dimension |
| --- | --- |
| Length and time | $[M]^{-1}$ |
| Mass, energy, and momentum | $[M]^{+1}$ |
| Four-momentum $\mechanical{p}^\mu$ | $[M]^{+1}$ |
| Spacetime coordinate $\mechanical{x}^\mu$ | $[M]^{-1}$ |
| Derivative $\partial_\mu$ | $[M]^{+1}$ |
| Scalar field $\signal{\phi}$ | $[M]^{+1}$ |
| Spinor field $\signal{\psi}$ | $[M]^{+3/2}$ |
| Vector field $\electric{A}^\mu$ | $[M]^{+1}$ |
| Lagrangian density $\energy{\mathcal L}$ | $[M]^{+4}$ |
| Hamiltonian density $\energy{\mathcal H}$ | $[M]^{+4}$ |
| Electric charge $\electric{e}$ in $d=4$ | Dimensionless |

> [!note]
> The listed field dimensions apply to canonically normalized fields in four spacetime dimensions. A derivative is an operator with mass dimension one, rather than a separate physical quantity.

The field entries follow from requiring the action to be dimensionless in natural units. In four dimensions, the coordinate integration has mass dimension minus four, so the Lagrangian density must have dimension four. A scalar kinetic term contains two derivatives and two scalar fields. Its dimension then fixes each scalar field to dimension one. A fermion kinetic term contains one derivative and two spinor fields, which fixes each spinor field to dimension three halves.

This gives a quick interaction check: four scalar factors have dimension four, so a quartic scalar coupling is dimensionless in four dimensions. In $d$ dimensions the same reasoning gives scalar and vector field dimensions $(d-2)/2$ and spinor field dimension $(d-1)/2$. These are canonical dimensions; interactions can produce anomalous scaling dimensions. Use the canonical values for power counting, and do not identify them with all quantum scaling exponents.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale set to one in this convention. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light | The space-time conversion set to one in this convention. |
| $\mechanical{p}^\mu$ | $\unit{GeV}$ | Four-momentum | The relativistic momentum with mass dimension one. |
| $\mechanical{x}^\mu$ | $\unit{GeV^{-1}}$ | Spacetime coordinate | The coordinate with inverse-mass dimension. |
| $\signal{\phi}$ | $\unit{GeV}$ | Scalar field | A canonically normalized scalar in four dimensions. |
| $\signal{\psi}$ | $\unit{GeV^{3/2}}$ | Spinor field | A canonically normalized fermion in four dimensions. |
| $\electric{A}^\mu$ | $\unit{GeV}$ | Vector field | The gauge potential with mass dimension one. |
| $\energy{\mathcal L},\energy{\mathcal H}$ | $\unit{GeV^4}$ | Lagrangian and Hamiltonian densities | The action and energy densities in natural units. |
| $\electric{e}$ | $1$ | Electric charge | The dimensionless electromagnetic coupling in four dimensions. |
