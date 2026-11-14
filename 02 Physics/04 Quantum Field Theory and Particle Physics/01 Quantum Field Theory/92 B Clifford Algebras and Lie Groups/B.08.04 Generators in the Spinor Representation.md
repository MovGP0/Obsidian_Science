---
title: "Generators in the Spinor Representation"
---

> [!TLDR]
> Two-component Lorentz generators are antisymmetrized products of sigma and conjugate sigma matrices, with a separate form for each Weyl chirality.

In the left-chiral $(\tfrac12,0)$ representation, the Lorentz generators are, in matrix notation,
$$
\sigma^{\mu\nu}
=\frac{i}{4}
\left(\sigma^\mu\bar\sigma^\nu-\sigma^\nu\bar\sigma^\mu\right).
\tag{B.94}
$$
In the right-chiral $(0,\tfrac12)$ representation,
$$
\bar\sigma^{\mu\nu}
=\frac{i}{4}
\left(\bar\sigma^\mu\sigma^\nu-\bar\sigma^\nu\sigma^\mu\right).
\tag{B.95}
$$
The first matrices act on undotted spinor indices; the second act on dotted indices.

## Explicit rotation and boost blocks

Use $\sigma^0=\bar\sigma^0=\mathbf1$ and $\bar\sigma^i=-\sigma^i$. For a cyclic spatial pair, (B.94)–(B.95) give
$$
\sigma^{ij}=\bar\sigma^{ij}=\frac12\epsilon^{ijk}\sigma^k,
\qquad
\sigma^{0i}=-\frac{i}{2}\sigma^i,
\qquad
\bar\sigma^{0i}=+\frac{i}{2}\sigma^i.
$$
Thus rotations act with the same matrices on the two chiral spaces, whereas boosts have opposite signs. Inserting $J_i=\sigma_i/2$ and $K_i=\mp i\sigma_i/2$ gives $[K_i,K_j]=-i\epsilon_{ijk}J_k$, an immediate check on the Lorentz-algebra sign.

These boost generators are not Hermitian in the ordinary positive Euclidean inner product on two complex components. Their exponentials are therefore not generally unitary. This is compatible with Lorentz covariance of fields; it does not assert nonunitary time evolution of physical states. A change of chirality or a different transformation convention must change the whole set of formulas together, including the signs in the exponent and the field argument.
