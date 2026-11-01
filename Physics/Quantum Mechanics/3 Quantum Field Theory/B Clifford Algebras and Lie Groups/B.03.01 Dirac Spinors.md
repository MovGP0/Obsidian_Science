---
title: "Dirac Spinors"
---

> [!TLDR]
> A Dirac spinor belongs to a Clifford-module representation. In four dimensions it has four complex components, and its Dirac adjoint forms a Lorentz scalar bilinear.

A **Dirac spinor** is an element of the vector space on which the Clifford-algebra representation acts.
In $d=4$, it has four complex components $\signal{\psi}_\alpha$, $\alpha=1,2,3,4$.

The Dirac adjoint is
$$
\bar{\signal{\psi}}\equiv\signal{\psi}^\dagger\gamma^0,
\tag{B.30}
$$
so that $\bar{\signal{\psi}}\signal{\psi}$ is a real, or Hermitian, Lorentz scalar.

## Why the ordinary adjoint is insufficient

For the connected Lorentz spin group, write the spinor transformation as $\signal{\psi}'=S\signal{\psi}$ at the corresponding spacetime point. With the usual mostly-minus gamma adjoints, $S^\dagger\gamma^0S=\gamma^0$. Thus $\bar{\signal{\psi}}'=\bar{\signal{\psi}}S^{-1}$, and the two matrices cancel in $\bar{\signal{\psi}}'\signal{\psi}'$. This proves the scalar property. In contrast, $S^\dagger S$ need not equal the identity for a boost, so $\signal{\psi}^\dagger\signal{\psi}$ is not a Lorentz scalar.

In the Dirac basis, the scalar is the squared norm of the upper two components minus that of the lower two for commuting numerical spinors. It is real but need not be positive. For quantum fields, “Hermitian” is the appropriate operator statement and uses the usual adjoint reversal of factor order.

The module definition imposes no Dirac equation. It therefore gives an off-shell component count, not a count of independent on-shell particle states. No field normalization or physical mass dimension follows from this definition alone.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi},\bar{\signal{\psi}}$ | — | Dirac spinor and adjoint | The spinor and its row adjoint; this representation definition does not fix their physical normalization. |
