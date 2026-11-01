---
title: "Three-Gluon Vertex"
---

> [!TLDR]
> The three-gluon vertex combines an antisymmetric color structure constant with the Yang–Mills momentum tensor.

This interaction is a consequence of the commutator term in the gluon field strength. A gluon carries color and can therefore interact with other gluons. The momentum dependence comes from the derivative in the gauge kinetic term. There is no corresponding tree-level three-photon interaction in an Abelian gauge kinetic term.

Take all momenta incoming:
$$
g_\mu^a(\mechanical{p}),\qquad
g_\nu^b(\mechanical{q}),\qquad
g_\rho^c(\mechanical{r}),
\qquad
\mechanical{p}+\mechanical{q}+\mechanical{r}=0.
$$
Then
$$
ggg:\qquad
+\signal{g}_sf^{abc}
\left[
g^{\mu\nu}(\mechanical{p}-\mechanical{q})^\rho
+g^{\nu\rho}(\mechanical{q}-\mechanical{r})^\mu
+g^{\rho\mu}(\mechanical{r}-\mechanical{p})^\nu
\right].
\tag{C.34}
$$

When two complete gluon labels are exchanged, the color structure constant and the bracketed momentum tensor each change sign. Their product is symmetric, as required for identical boson legs. A permutation must move the momentum and Lorentz index together with the color label. This is a stronger check than exchanging the color labels alone.

The rule has one energy dimension because it is linear in momentum. It vanishes when the strong coupling is zero or when the relevant structure constant is zero; it also vanishes when all three momenta are zero. These checks concern the vertex, not a complete on-shell three-gluon scattering rate. Real massless external momenta and momentum conservation impose additional kinematic restrictions. For gluon scattering, combine this vertex with the four-gluon contact rule and all exchange channels before checking gauge consistency.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{g}_s$ | $1$ | Strong gauge coupling | The coefficient of the three-gluon interaction. |
| $\mechanical{p},\mechanical{q},\mechanical{r}$ | $\unit{GeV}$ | Incoming gluon momenta | The three four-momenta constrained by conservation. |
