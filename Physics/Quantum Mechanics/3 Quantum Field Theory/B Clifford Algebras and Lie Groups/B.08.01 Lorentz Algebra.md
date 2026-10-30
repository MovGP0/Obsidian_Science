---
title: "Lorentz Algebra"
---

> [!TLDR]
> Three rotations and three boosts generate the Lorentz algebra. Boost commutators have the opposite sign to rotation commutators.

The Lorentz algebra $\mathfrak{so}(1,3)$ has six generators: three rotations $J^i$ and three boosts $K^i$.
They satisfy
$$
[J^i,J^j]=i\epsilon^{ijk}J^k,
\tag{B.82}
$$
$$
[J^i,K^j]=i\epsilon^{ijk}K^k,
\tag{B.83}
$$
$$
[K^i,K^j]=-i\epsilon^{ijk}J^k.
\tag{B.84}
$$

The covariant generators obey $M^{\mu\nu}=-M^{\nu\mu}$ and
$$
[M^{\mu\nu},M^{\rho\sigma}]
=i\bigl(
g^{\nu\rho}M^{\mu\sigma}
-g^{\mu\rho}M^{\nu\sigma}
-g^{\nu\sigma}M^{\mu\rho}
+g^{\mu\sigma}M^{\nu\rho}
\bigr).
\tag{B.85}
$$
The correspondence is
$$
J^i=\frac12\epsilon^{ijk}M^{jk},
\qquad
K^i=M^{0i}.
$$

> [!note] Correction to the source
> The source gives the opposite overall sign in (B.85). With the mostly-minus metric and the displayed definitions of $J^i$ and $K^i$, that sign contradicts (B.82)–(B.84). The sign here is consistent with those relations; for example, $[M^{12},M^{23}]=iM^{31}$.
