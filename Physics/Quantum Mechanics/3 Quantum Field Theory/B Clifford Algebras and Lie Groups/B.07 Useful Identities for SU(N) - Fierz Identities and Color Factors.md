---
title: "Useful Identities for SU(N) — Fierz Identities and Color Factors"
---

> [!TLDR]
> SU(N) completeness identities reduce generator products and invariant-tensor contractions to standard color factors.

The following identities use the fundamental-generator normalization $T_F=1/2$.

## A reduction order that keeps the indices visible

First fix $N\ge2$, the representation on each line, and $\operatorname{Tr}(T^aT^b)=\delta^{ab}/2$. Then use [[B.07.01 Basic Algebraic Identities]] to replace a closed generator product by its Casimir. Use [[B.07.02 Fierz Identities for SU(N)]] when the pair of generators joins different fundamental lines. Use [[B.07.03 Sums over Internal Color States]] only after identifying which indices are summed and which initial indices are averaged.

For example, $\sum_aT^aT^a=C_2(F)\mathbf1$ still leaves a fundamental matrix. Taking its trace gives $C_2(F)N=(N^2-1)/2$. This is the fully summed norm in (B.79), not an additional independent color factor to multiply into the same contraction.

These identities remove internal algebra from a QFT amplitude. Momentum dependence, Lorentz contractions, external-state normalization, and the gauge coupling remain separate. A color reduction therefore checks one part of a scattering calculation; it does not by itself predict a cross section.
