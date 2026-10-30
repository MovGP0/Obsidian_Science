---
title: "Killing Form"
---

> [!TLDR]
> The Killing form tests semisimplicity. In compact-group calculations, a positive structure-constant contraction is often used with a sign convention that differs from the intrinsic real Killing form.

The source writes
$$
K_{ab}=f^{acd}f^{bcd}.
\tag{B.43}
$$
In an orthonormal compact-group basis, this is the positive structure-constant contraction.
For a compact simple algebra, the generators can be rescaled so that this positive form is $K_{ab}=\delta_{ab}$.

The intrinsic Killing form is nondegenerate if and only if the Lie algebra is semisimple, by Cartan's criterion.

> [!note] Killing-form sign convention
> The source calls (B.43) the Killing form. On the compact real algebra, the intrinsic form $\kappa(X,Y)=\operatorname{Tr}(\operatorname{ad}_X\operatorname{ad}_Y)$ is negative definite for a simple algebra. In an anti-Hermitian real basis, it is the negative of the positive contraction in (B.43). The distinction is the same as in the non-Abelian gauge-theory chapter.

## Dynkin index

For a representation $r$, define the Dynkin index $T(r)$ through
$$
\operatorname{Tr}_r(T^aT^b)=T(r)\delta^{ab}.
\tag{B.44}
$$
Its value depends on the normalization of the generators.

For the fundamental representation of $SU(N)$, the standard normalization is
$$
T(F)=\frac12.
$$
For the adjoint representation,
$$
T(A)=C_2(A).
$$
The adjoint trace is related, up to normalization and the basis sign convention, to the Killing form.
