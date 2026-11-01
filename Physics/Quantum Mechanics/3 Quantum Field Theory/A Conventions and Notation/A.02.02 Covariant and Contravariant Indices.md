---
title: "Covariant and Contravariant Indices"
---

> [!TLDR]
> Greek indices cover spacetime components and Latin indices cover spatial components. The metric raises and lowers relativistic indices.

Greek indices $\mu,\nu,\rho,\ldots$ run from $0$ to $3$.
Latin indices $i,j,k,\ldots$ run from $1$ to $3$.

Raise and lower indices with the metric:
$$
a_\mu=g_{\mu\nu}a^\nu,
\qquad
a^\mu=g^{\mu\nu}a_\nu.
\tag{A.4}
$$
The **Einstein summation convention** sums over repeated indices when one occurrence is upper and the other is lower.

Index height is part of the component definition. With [[A.02.01 Metric Tensor]], lowering an index leaves the temporal component unchanged and reverses each spatial component. For example, $a^\mu=(a^0,a^1,a^2,a^3)$ gives $a_\mu=(a^0,-a^1,-a^2,-a^3)$. A second lowering/raising operation returns the original components because the two metric matrices are inverses.

In a tensor equation, each free index must occur once on each side at the same height. A repeated, summed index is a dummy label and can be renamed consistently. Thus $a_\mu b^\mu$ is a scalar, whereas $a^\mu b^\mu$ is not an Einstein contraction. A three-vector Euclidean dot product can sum spatial components without a Lorentzian index convention; state that distinction before mixing three- and four-vector notation.
