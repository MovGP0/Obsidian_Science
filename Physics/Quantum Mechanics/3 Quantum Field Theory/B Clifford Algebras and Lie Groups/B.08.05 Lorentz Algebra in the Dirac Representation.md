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

## Separating component rotation from the field argument

In (B.97), the exponential acts on four spinor components, while $\Lambda^{-1}\mechanical{x}$ specifies which old spacetime point supplies the transformed field value. Both parts are needed for a field transformation. The inverse argument makes two successive transformations compose in the same order as the representation matrices.

In the Weyl basis, the commutator (B.96) is block diagonal, with blocks (B.94) and (B.95). This proves the displayed direct sum. Individual gamma matrices are off diagonal and connect the two blocks; a Dirac field's reducibility under Lorentz transformations does not make its gamma matrices block diagonal.

For a rotation in the $12$ plane, summing both antisymmetric index orders cancels the $1/2$ in the exponent. With rotation parameter $\theta$, each chiral block is $\exp(-i\theta\sigma_3/2)$. At $\theta=2\pi$ this is $-\mathbf1_2$ and at $4\pi$ it is $+\mathbf1_2$. This checks the double cover and the exponent normalization. The transformation law alone imposes neither a Dirac equation nor a mass-shell condition. The field units below additionally assume a canonical four-dimensional kinetic term in natural units.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi}$ | $\unit{GeV^{3/2}}$ | Dirac field | The spacetime-dependent spinor field under a Lorentz transformation. |
| $\mechanical{x}$ | $\unit{GeV^{-1}}$ | Spacetime coordinate | The point transformed by the inverse Lorentz matrix in the field argument. |
