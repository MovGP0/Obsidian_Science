---
title: "Antisymmetric Spin Tensor"
---

> [!TLDR]
> The antisymmetric spin matrix is defined by the commutator of two gamma matrices.

The antisymmetric spin tensor is
$$
\sigma^{\mu\nu}\equiv\frac{i}{2}[\gamma^\mu,\gamma^\nu]
=\frac{i}{2}(\gamma^\mu\gamma^\nu-\gamma^\nu\gamma^\mu).
\tag{A.23}
$$

The commutator selects the antisymmetric part of a gamma product: $\sigma^{\nu\mu}=-\sigma^{\mu\nu}$ and $\sigma^{\mu\mu}=0$ with no sum. Together with the Clifford anticommutator it gives the useful decomposition
$$
\gamma^\mu\gamma^\nu=g^{\mu\nu}\mathbf1_4-i\sigma^{\mu\nu}.
$$
The minus sign follows by dividing the definition (A.23) by $i$.

These matrices enter the spinor representation of Lorentz transformations. They have no physical unit, despite the name “spin tensor”; a physical angular-momentum operator can include normalization and reduced-Planck-constant factors. For distinct indices the anticommutator vanishes, so $\sigma^{\mu\nu}=i\gamma^\mu\gamma^\nu$. This is a fast check of signs before a boost or rotation calculation.
