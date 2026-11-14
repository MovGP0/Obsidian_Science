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

The right sides assume the on-shell condition and the normalization in [[A.05.04 Spinor Normalization]]. They are outer products, hence matrices rather than scalar inner products. Summing a final spin chain with these matrices is what makes the trace formulas useful; averaging an initial spin additionally requires the statistical weight of that initial state.

For nonzero mass, the slash plus mass divided by twice the mass is an idempotent projector onto the particle solution subspace. For the antiparticle subspace, use mass minus slash divided by twice the mass; dividing the displayed antiparticle spin sum by positive twice the mass alone gives the wrong sign for a projector. Check each by squaring and using the mass-shell relation. These mass-denominator projectors do not extend to zero mass, although the spin-sum relations have a massless limit.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{p},\mechanical{\mathbf p}$ | $\unit{GeV}$ | On-shell momentum | The four-momentum and spatial spinor momentum. |
| $\mechanical{m}$ | $\unit{GeV}$ | Fermion mass | The mass term in the spin sums. |
