---
title: "General Properties"
---

> [!TLDR]
> Clifford anticommutation reduces contracted gamma products to lower-rank products. Traces carry the dimension of the chosen spinor representation.

The Clifford relation (B.1) gives the contraction identities in $d$ dimensions:
$$
\gamma^\mu\gamma_\mu=d\,\mathbf1,
\tag{B.9}
$$
$$
\gamma^\mu\gamma^\nu\gamma_\mu
=-(d-2)\gamma^\nu,
\tag{B.10}
$$
$$
\gamma^\mu\gamma^\nu\gamma^\rho\gamma_\mu
=4g^{\nu\rho}\mathbf1+(d-4)\gamma^\nu\gamma^\rho,
\tag{B.11}
$$
$$
\gamma^\mu\gamma^\nu\gamma^\rho\gamma^\sigma\gamma_\mu
=-2\gamma^\sigma\gamma^\rho\gamma^\nu
+(4-d)\gamma^\nu\gamma^\rho\gamma^\sigma.
\tag{B.12}
$$

## Trace identities

Write the spinor-representation dimension as $f(d)=\operatorname{tr}(\mathbf1)$; see Table B.1.
The trace normalization is
$$
\operatorname{tr}(\mathbf1)=f(d),
\tag{B.13}
$$
and in the usual traceless gamma representations,
$$
\operatorname{tr}(\gamma^\mu)=0.
\tag{B.14}
$$
The even-product identities include
$$
\operatorname{tr}(\gamma^\mu\gamma^\nu)=f(d)g^{\mu\nu},
\tag{B.15}
$$
$$
\operatorname{tr}(\gamma^\mu\gamma^\nu\gamma^\rho\gamma^\sigma)
=f(d)\bigl(
g^{\mu\nu}g^{\rho\sigma}
-g^{\mu\rho}g^{\nu\sigma}
+g^{\mu\sigma}g^{\nu\rho}
\bigr).
\tag{B.16}
$$
For even-dimensional Clifford representations, the odd-product rule is
$$
\operatorname{tr}(\text{odd number of }\gamma^\mu)=0.
\tag{B.17}
$$

> [!note] Scope of the source's trace rule
> The source states (B.17) for general $d$. In an irreducible odd-dimensional representation, a product containing all distinct gamma matrices can instead have nonzero trace. The vanishing rule applies in even dimensions, or in a suitable doubled odd-dimensional representation. Equation (B.14) also assumes traceless generators; a one-dimensional irreducible representation is an exception.
