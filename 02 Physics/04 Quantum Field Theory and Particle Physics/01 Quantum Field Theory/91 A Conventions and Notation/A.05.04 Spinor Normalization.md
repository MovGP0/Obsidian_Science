---
title: "Spinor Normalization"
---

> [!TLDR]
> Covariant spinor normalization gives opposite signs for particle and antiparticle Dirac bilinears, with zero mixed bilinears.

Use covariant relativistic normalization:
$$
\bar u^{(r)}(\mechanical{\mathbf p})u^{(s)}(\mechanical{\mathbf p})
=+2\mechanical{m}\,\delta^{rs},
\tag{A.51}
$$
$$
\bar v^{(r)}(\mechanical{\mathbf p})v^{(s)}(\mechanical{\mathbf p})
=-2\mechanical{m}\,\delta^{rs},
\tag{A.52}
$$
$$
\bar u^{(r)}(\mechanical{\mathbf p})v^{(s)}(\mechanical{\mathbf p})=0,
\qquad
\bar v^{(r)}(\mechanical{\mathbf p})u^{(s)}(\mechanical{\mathbf p})=0.
\tag{A.53}
$$
The energy normalization is also used:
$$
u^{(r)\dagger}u^{(s)}=2\energy{E}_{\mathbf p}\,\delta^{rs}.
$$

These are same-momentum bilinears with a common orthonormal spin basis. They do not assert orthogonality of spinors at arbitrary unequal momenta. The negative sign in (A.52) is due to the Dirac adjoint's indefinite scalar form; it is not a negative Hilbert-space probability. In the rest frame, the lower-component antiparticle subspace has exactly this sign.

The ordinary Hermitian norm is positive and uses the mode energy, while the covariant scalar norm uses the mass. In the massless limit the scalar norms vanish even for nonzero spinors, so they cannot alone fix the normalization. Retain the energy normalization and define the massless spinors by a consistent limit or helicity basis. The scale chosen here fixes the factors in [[A.05.05 Completeness Relations]].

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\mathbf p}$ | $\unit{GeV}$ | Spinor momentum | The common spatial momentum in the bilinears. |
| $\mechanical{m}$ | $\unit{GeV}$ | Fermion mass | The normalization scale in the covariant bilinears. |
| $\energy{E}_{\mathbf p}$ | $\unit{GeV}$ | On-shell energy | The normalization scale for the Hermitian spinor product. |
