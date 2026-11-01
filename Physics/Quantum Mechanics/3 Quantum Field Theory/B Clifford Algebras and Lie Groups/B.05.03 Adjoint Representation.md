---
title: "Adjoint Representation"
---

> [!TLDR]
> The adjoint representation acts on the Lie algebra itself, so its dimension equals the number of generators.

In the standard orthonormal compact-group basis, the adjoint generators are
$$
(T_{\mathrm{adj}}^a)_{bc}=-if^{abc}.
\tag{B.42}
$$
The representation dimension is $\dim\mathfrak g$.

> [!note]
> This index form uses the compact-group convention in which the lowered structure constants are fully antisymmetric. For a general basis, the adjoint action is defined directly by the commutator and its corresponding index placement.

## Why this is a representation

The intrinsic adjoint action is $\operatorname{ad}_X(Y)=[X,Y]$. The Jacobi identity gives
$$
[\operatorname{ad}_X,\operatorname{ad}_Y]Z
=[X,[Y,Z]]-[Y,[X,Z]]
=[[X,Y],Z].
$$
This proves that the maps obey the same bracket as the original algebra. It is the reason (B.42) defines representation matrices rather than merely an array of structure constants.

With the Hermitian convention and full antisymmetry, acting on basis element $T^c$ gives $[T^a,T^c]=if^{acb}T^b=-if^{abc}T^b$, which fixes the row/column order in (B.42). For $SU(2)$, the resulting three-dimensional matrices act as rotations on the three-dimensional coefficient space.

Dimension does not imply faithfulness or irreducibility. For an Abelian algebra every bracket vanishes, so its adjoint action is zero even when the algebra has positive dimension. More generally, central elements lie in its kernel. In gauge theory the adjoint labels organize gauge-boson components; this algebraic statement alone does not fix their masses or physical polarizations.
