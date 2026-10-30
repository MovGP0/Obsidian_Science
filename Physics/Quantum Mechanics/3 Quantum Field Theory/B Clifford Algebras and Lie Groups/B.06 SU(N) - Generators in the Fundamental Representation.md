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
