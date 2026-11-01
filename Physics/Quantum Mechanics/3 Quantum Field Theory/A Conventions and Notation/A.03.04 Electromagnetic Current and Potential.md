---
title: "Electromagnetic Current and Potential"
---

> [!TLDR]
> The electromagnetic potential and current are four-vectors. The antisymmetric field tensor contains the electric and magnetic fields.

The electromagnetic potential and current are
$$
\electric{A}^\mu=(\electric{\phi},\electric{\mathbf A}),
\qquad
\electric{j}^\mu=(\electric{\rho},\electric{\mathbf j}).
\tag{A.9}
$$
The electromagnetic field-strength tensor is
$$
\electric{F}^{\mu\nu}
=\partial^\mu\electric{A}^\nu-\partial^\nu\electric{A}^\mu,
$$
with components
$$
\electric{F}^{0i}=-\electric{E}^i,
\qquad
\electric{F}^{ij}=-\epsilon^{ijk}\magnetic{B}_k.
$$

Here the scalar potential is the time component in natural units. The spatial vector potential is grouped with the electromagnetic potential; the magnetic field itself uses the magnetic quantity group. The spatial Levi-Civita symbol has $\epsilon^{123}=+1$, and its spatial labels in the magnetic-field formula use Euclidean three-vector components.

To check the electric sign, expand the definition with $\partial^i=-\partial_i$: it gives $\electric{F}^{0i}=\partial_t\electric{A}^i+\partial_i\electric{\phi}$, the negative of the usual electric field. Antisymmetry then gives $\electric{F}^{i0}=+\electric{E}^i$. The continuity equation $\partial_\mu\electric{j}^\mu=0$ becomes the time derivative of the charge density plus the divergence of the spatial current. It expresses local charge conservation; it is an additional physical statement, not a consequence of merely defining a four-current.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\electric{A}^\mu,\electric{\phi},\electric{\mathbf A}$ | $\unit{GeV}$ | Electromagnetic potential | The four-potential and its scalar and vector components. |
| $\electric{j}^\mu,\electric{\rho},\electric{\mathbf j}$ | $\unit{GeV^3}$ | Electromagnetic current density | The charge density and spatial current in the four-current. |
| $\electric{F}^{\mu\nu}$ | $\unit{GeV^2}$ | Electromagnetic field tensor | The antisymmetric derivative of the potential. |
| $\electric{E}^i$ | $\unit{GeV^2}$ | Electric field | The electric components of the field tensor. |
| $\magnetic{B}_k$ | $\unit{GeV^2}$ | Magnetic field | The magnetic components represented with the Levi-Civita symbol. |
