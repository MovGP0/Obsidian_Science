---
title: "The Lie Algebra Associated with a Lie Group"
---

> [!TLDR]
> The Lie algebra of a Lie group is its tangent space at the identity, equipped with a Lie bracket. Exponentiating an algebra element gives a one-parameter subgroup.

The Lie algebra
$$
\mathfrak g=\operatorname{Lie}(G)
$$
is the tangent space at the identity,
$$
\mathfrak g=T_eG,
$$
equipped with the **Lie commutator**, or **Lie bracket**,
$$
[\cdot,\cdot]:\mathfrak g\times\mathfrak g\longrightarrow\mathfrak g.
\tag{B.37}
$$
Each $X\in\mathfrak g$ generates a curve in the group through the exponential map:
$$
g(t)=\exp(tX)\in G.
\tag{B.38}
$$

## How the tangent space obtains a bracket

For a matrix Lie group, a tangent vector is the derivative at $t=0$ of a smooth curve through the identity. Left translation moves it to a left-invariant vector field on the group. The commutator of two such vector fields is again left invariant and defines the bracket at the identity. In the matrix realization this is $[X,Y]=XY-YX$.

The group commutator makes its meaning visible:
$$
e^{tX}e^{sY}e^{-tX}e^{-sY}
=\mathbf1+ts[X,Y]+O(t^2s,ts^2).
$$
Thus the bracket measures the leading failure of small transformations to commute. The exponential in (B.38) is the unique one-parameter subgroup with initial tangent $X$; it is not an arbitrary parametrized curve.

For $U(n)$, the tangent matrices are anti-Hermitian. Physicists often write $X=-iT$ with $T$ Hermitian, explaining the extra $i$ in the next note. The exponential is a local coordinate map near the identity, but a general Lie group need not have every element equal to a single exponential. In particular, no exponential from the tangent algebra reaches a different connected component.
