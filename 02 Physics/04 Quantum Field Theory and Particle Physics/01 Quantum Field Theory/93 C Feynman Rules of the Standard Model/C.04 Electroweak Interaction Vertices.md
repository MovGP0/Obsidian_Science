---
title: "Electroweak Interaction Vertices"
---

> [!TLDR]
> Electroweak vertices use chiral projectors, the weak mixing angle, and the Higgs vacuum scale to relate gauge and mass couplings.

The charged current selects the left-chiral weak doublet, while the neutral current also couples to right-chiral charged fermions through hypercharge. Chiral projectors select field components. For massless on-shell states, chirality determines helicity with different particle and antiparticle assignments. Massive states do not have that identification. Thus a massive external fermion must be treated with its full spinor even when its vertex contains a chiral projector.

Use the standard chiral projectors
$$
P_L=\frac{1-\gamma^5}{2},
\qquad
P_R=\frac{1+\gamma^5}{2}.
$$
The electroweak coupling definitions are
$$
\signal{g}=\frac{\electric{e}}{\sin\signal{\theta}_W},
\qquad
\signal{g}'=\frac{\electric{e}}{\cos\signal{\theta}_W}.
$$
At tree level,
$$
\cos\signal{\theta}_W=\frac{\mechanical{m}_W}{\mechanical{m}_Z},
\qquad
\signal{v}=\frac{2\mechanical{m}_W}{\signal{g}}.
$$
Here $\signal{v}$ is the Higgs-doublet vacuum scale.

> [!note]
> The mass relation is the tree-level relation. Precision input values require consistent renormalization conventions and radiative corrections.

Read [[C.04.01 Charged Currents (W–Fermion–Fermion Vertex)]] and [[C.04.02 Neutral Current (Z–Fermion–Fermion Vertex)]] for fermion currents, then [[C.04.04 Triple Gauge Vertices (TGC)]] and [[C.04.05 Quartic Gauge Vertices (QGC)]] for gauge self-interactions. The Higgs vertices in this section use the same broken-vacuum mass and coupling definitions.

The projector relations $P_L^2=P_L$, $P_R^2=P_R$, and $P_LP_R=0$ check that the chiral pieces neither overlap nor count a component twice. The two gauge couplings and mixing angle are dimensionless; the vacuum scale has one energy dimension, as required by the W mass relation. These are tree-level parameter relations, not independent precision constraints to impose on mixed renormalization schemes.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{g},\signal{g}'$ | $1$ | Electroweak gauge couplings | The weak and hypercharge interaction coefficients. |
| $\electric{e}$ | $1$ | Electromagnetic coupling | The charge used to relate the electroweak couplings. |
| $\signal{\theta}_W$ | $1$ | Weak mixing angle | The angle relating the weak, hypercharge, and electromagnetic interactions. |
| $\mechanical{m}_W,\mechanical{m}_Z$ | $\unit{GeV}$ | Weak-boson masses | The masses in the tree-level mixing relation. |
| $\signal{v}$ | $\unit{GeV}$ | Higgs vacuum scale | The vacuum magnitude that determines the gauge-boson masses. |
