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

## Reconstructing a contraction

All lowered gamma indices use the inverse of the same nondegenerate metric as (B.1). To prove (B.10), move the leftmost generator past $\gamma^\nu$ before contracting:
$$
\gamma^\mu\gamma^\nu\gamma_\mu
=2g^{\mu\nu}\gamma_\mu-\gamma^\nu\gamma^\mu\gamma_\mu
=(2-d)\gamma^\nu.
$$
This method also proves (B.11) and (B.12): each interchange produces a metric term and a shorter product. It is safer than commuting gamma matrices as if they were scalars.

For the trace rules, cyclicity and the anticommutator give twice the two-gamma trace equal to $2g^{\mu\nu}\operatorname{tr}\mathbf1$. In even dimension, conjugation by the invertible chirality element changes the sign of an odd product and preserves its trace. The trace must therefore vanish. This proof identifies the hypothesis behind (B.17).

The odd-dimensional boundary is concrete: the three Euclidean Pauli matrices obey the Clifford relation but $\operatorname{tr}(\sigma_1\sigma_2\sigma_3)=2i$. Thus a rule about an odd number of factors cannot be transferred to every dimension.
