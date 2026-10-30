---
title: "Completeness Relations"
---

> [!TLDR]
> Summing over the two spin states replaces particle and antiparticle spinor outer products with slashed-momentum matrices.

Summing over spin states gives
$$
\sum_{s=1,2}
u^{(s)}(\mechanical{\mathbf p})\bar u^{(s)}(\mechanical{\mathbf p})
=\not{\mechanical{p}}+\mechanical{m},
\tag{A.54}
$$
$$
\sum_{s=1,2}
v^{(s)}(\mechanical{\mathbf p})\bar v^{(s)}(\mechanical{\mathbf p})
=\not{\mechanical{p}}-\mechanical{m}.
\tag{A.55}
$$
These matrices occur in scattering amplitudes when final spins are summed or initial spins are averaged.
The source calls them positive- and negative-energy projectors.

> [!note]
> The displayed expressions are covariantly normalized spin-sum matrices. They require normalization factors to become idempotent projection operators.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{p},\mechanical{\mathbf p}$ | $\unit{GeV}$ | On-shell momentum | The four-momentum and spatial spinor momentum. |
| $\mechanical{m}$ | $\unit{GeV}$ | Fermion mass | The mass term in the spin sums. |
