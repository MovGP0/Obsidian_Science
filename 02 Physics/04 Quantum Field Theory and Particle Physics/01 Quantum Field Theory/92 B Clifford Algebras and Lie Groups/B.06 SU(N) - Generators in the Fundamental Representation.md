---
title: "SU(N) — Generators in the Fundamental Representation"
---

> [!TLDR]
> Fundamental SU(N) generators are Hermitian traceless matrices. Their trace normalization fixes completeness and the symmetric and antisymmetric invariant tensors.

The generators of $SU(N)$ in the fundamental representation $\mathbf N$ are Hermitian, traceless $N\times N$ matrices, normalized by
$$
\operatorname{Tr}(T^aT^b)=T_F\delta^{ab},
\qquad
T_F=\frac12.
\tag{B.48}
$$

## Completeness and color identities

$$
\sum_{a=1}^{N^2-1}(T^a)_{ij}(T^a)_{kl}
=T_F\left(
\delta_{il}\delta_{kj}-\frac1N\delta_{ij}\delta_{kl}
\right),
\tag{B.49}
$$
$$
\operatorname{Tr}(T^aT^bT^c)
=\frac14\bigl(d^{abc}+if^{abc}\bigr).
\tag{B.50}
$$
The invariant tensors are
$$
d^{abc}=2\operatorname{Tr}\!\left(T^a\{T^b,T^c\}\right),
$$
which is fully symmetric, and
$$
f^{abc}=-2i\operatorname{Tr}\!\left([T^a,T^b]T^c\right),
$$
which is fully antisymmetric.

The standard $SU(N)$ invariant values are
$$
\begin{aligned}
C_2(F)&=\frac{N^2-1}{2N},
&&\text{fundamental},\\
C_2(A)&=N,
&&\text{adjoint},\\
T(F)&=\frac12,
&&\text{fundamental},\\
T(A)&=N,
&&\text{adjoint}.
\end{aligned}
\tag{B.51}
$$

## Completeness is a projection onto traceless matrices

Take an integer $N\ge2$. For any complex $N\times N$ matrix $M$, the identity and the $N^2-1$ generators give the expansion
$$
M=\frac{\operatorname{Tr}M}{N}\mathbf1
+2\sum_a T^a\operatorname{Tr}(T^aM).
$$
The coefficient two follows from $T_F=1/2$. Equating matrix entries gives (B.49). The subtraction term removes the identity component, so it is essential for $SU(N)$ rather than $U(N)$.

Setting the two middle indices equal and summing in (B.49) gives $\sum_aT^aT^a=(N^2-1)\mathbf1/(2N)$. This proves the fundamental Casimir in (B.51). Splitting $T^aT^b$ into commutator and anticommutator then gives the three-generator trace in (B.50); its imaginary part has the sign set by (B.39).

For $N=2$, Pauli anticommutators leave no traceless symmetric part, so $d^{abc}=0$. For $N=3$, the fundamental Casimir becomes $4/3$. These are representation and normalization checks, not values of a gauge coupling. Other representations require their own trace index and do not satisfy this same two-index completeness formula.
