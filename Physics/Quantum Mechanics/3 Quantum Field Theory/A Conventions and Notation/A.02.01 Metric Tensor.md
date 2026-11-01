---
title: "Metric Tensor"
---

> [!TLDR]
> The mostly-minus metric gives the time component a positive sign and the three spatial components negative signs.

Use the **mostly-minus** signature, also called the West Coast convention and sometimes the Bjorken–Drell signature:
$$
g^{\mu\nu}=g_{\mu\nu}
=\operatorname{diag}(+1,-1,-1,-1).
\tag{A.2}
$$
For two four-vectors $a^\mu$ and $b^\mu$, the scalar product is
$$
a\cdot b=g_{\mu\nu}a^\mu b^\nu
=a^0b^0-\mathbf a\cdot\mathbf b.
\tag{A.3}
$$
The squared four-vector norm is
$$
a^2=(a^0)^2-\lvert\mathbf a\rvert^2.
$$

These component matrices refer to inertial Cartesian coordinates in flat spacetime. Their numerical equality follows because the displayed diagonal matrix is its own inverse. In other coordinate systems the upper and lower component matrices need not be equal.

The scalar product is invariant under Lorentz transformations even though its temporal and spatial terms separately change. The three-vector dot product on the right of (A.3) is Euclidean; the metric supplies its minus sign. As a component check, $a^\mu=(1,1,0,0)$ has zero norm without being the zero vector. This is why the Lorentzian norm is not a positive-definite length. A nonzero vector is timelike, null, or spacelike according as its square is positive, zero, or negative. This classification is the basis of the mass-shell check in [[A.03.02 Four-Momentum]].
