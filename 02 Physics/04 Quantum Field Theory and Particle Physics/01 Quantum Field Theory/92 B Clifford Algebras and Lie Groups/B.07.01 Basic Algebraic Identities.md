---
title: "Basic Algebraic Identities"
---

> [!TLDR]
> Basic SU(N) contractions express products of generators and structure constants in terms of the fundamental and adjoint Casimirs.

Starting from the completeness relation (B.49), the basic color identities are
$$
T^a_{ij}T^a_{jk}
=C_2(F)\delta_{ik}
=\frac{N^2-1}{2N}\delta_{ik},
\tag{B.68}
$$
$$
\operatorname{Tr}(T^aT^b)
=T_F\delta^{ab}
=\frac12\delta^{ab},
\tag{B.69}
$$
$$
f^{acd}f^{bcd}
=C_2(A)\delta^{ab}
=N\delta^{ab},
\tag{B.70}
$$
$$
d^{acd}d^{bcd}
=\frac{N^2-4}{N}\delta^{ab},
\tag{B.71}
$$
$$
T^aT^bT^a
=\left(C_2(F)-\frac{C_2(A)}2\right)T^b
=-\frac1{2N}T^b,
\tag{B.72}
$$
$$
f^{abc}\operatorname{Tr}(T^cT^dT^e)
=\frac14f^{abc}\bigl(d^{cde}+if^{cde}\bigr).
\tag{B.73}
$$
Repeated color and fundamental indices are summed.

## Derive the generator sandwich from completeness

With $N\ge2$ and the fundamental normalization, insert an arbitrary $N\times N$ matrix $M$ between the two generators in (B.49). Contract its entries to obtain
$$
\sum_aT^aMT^a
=\frac12\operatorname{Tr}(M)\mathbf1-\frac1{2N}M.
$$
For $M=\mathbf1$ this gives (B.68). For $M=T^b$, tracelessness removes the first term and proves (B.72). This route explains why the sandwich is negative although the quadratic Casimir is positive: the inserted traceless matrix is not the identity.

For $N=2$, use $T^a=\sigma^a/2$. The sandwich gives $-T^b/4$, consistent with the summed Pauli identity (B.57). At the same value of $N$, (B.71) vanishes, as it must because the symmetric tensor $d^{abc}$ is zero for $SU(2)$. At $N=3$, the sandwich coefficient is $-1/6$.

Keep the summation labels distinct when applying these identities. For example, the three-generator trace in (B.73) has a contracted $c$ and free labels $a,b,d,e$; it is not a scalar color sum until those labels are also contracted.
