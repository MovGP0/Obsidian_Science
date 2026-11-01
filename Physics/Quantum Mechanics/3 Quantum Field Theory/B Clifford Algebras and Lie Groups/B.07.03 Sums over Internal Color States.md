---
title: "Sums over Internal Color States"
---

> [!TLDR]
> Summing internal fundamental and adjoint color indices gives standard SU(N) multiplicity factors in squared amplitudes.

Typical color sums in QCD cross-section calculations are
$$
\sum_{a,i,j}\lvert T^a_{ij}\rvert^2
=T_F(N^2-1)=\frac{N^2-1}{2},
\tag{B.79}
$$
$$
\sum_{a,c,d}f^{acd}f^{acd}
=C_2(A)(N^2-1)=N(N^2-1).
\tag{B.80}
$$
The sums explicitly include all repeated color indices.

A fundamental-color average gives
$$
\frac1N\operatorname{Tr}(T^aT^b)=\frac{\delta^{ab}}{2N}.
\tag{B.81}
$$
For $SU(3)$, $N=3$:
$$
C_2(F)=\frac43,
\qquad
C_2(A)=3,
\qquad
T_F=\frac12,
\qquad
N^2-1=8.
$$

## Sums, traces, and averages

Hermiticity gives $(T^a_{ij})^*=T^a_{ji}$, so the first sum is $\sum_a\operatorname{Tr}(T^aT^a)$. There are $N^2-1$ adjoint labels, each contributing $1/2$. Likewise, tracing $f^{acd}f^{bcd}=N\delta^{ab}$ over $a=b$ proves (B.80). These derivations specify exactly which states are included.

For $SU(3)$, (B.79) gives $4$ and (B.80) gives $24$. Equation (B.81), with fixed $a,b$, instead gives $\delta^{ab}/6$. These numbers differ because they count different sets of indices; they are not alternative values for a single contraction.

An unpolarized, color-incoherent initial ensemble requires averaging over each incoming parton's allowed color states. A fundamental incoming line supplies a factor $1/N$; an adjoint incoming line supplies $1/(N^2-1)$. Final unobserved colors are summed. If an initial color state is specified or coherent, replace this uniform average by its actual density matrix. Spin averages and phase-space factors remain separate from these color sums.
