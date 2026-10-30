---
title: "Lorentz Algebra in the Dirac Representation"
---

> [!TLDR]
> Dirac spinors combine left and right Weyl representations. Gamma-matrix commutators generate their Lorentz transformations.

A Dirac spinor transforms in
$$
(\tfrac12,0)\oplus(0,\tfrac12).
$$
The generators are
$$
S^{\mu\nu}=\frac{i}{4}[\gamma^\mu,\gamma^\nu].
\tag{B.96}
$$
The field transformation is
$$
\signal{\psi}(\mechanical{x})
\longrightarrow
\exp\!\left(-\frac{i}{2}\omega_{\mu\nu}S^{\mu\nu}\right)
\signal{\psi}(\Lambda^{-1}\mechanical{x}),
\tag{B.97}
$$
for the Lorentz transformation
$$
\Lambda^\mu{}_\nu
=\left[
\exp\!\left(-\frac{i}{2}\omega_{\rho\sigma}M^{\rho\sigma}\right)
\right]^\mu{}_\nu.
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi}$ | $\unit{GeV^{3/2}}$ | Dirac field | The spacetime-dependent spinor field under a Lorentz transformation. |
| $\mechanical{x}$ | $\unit{GeV^{-1}}$ | Spacetime coordinate | The point transformed by the inverse Lorentz matrix in the field argument. |
