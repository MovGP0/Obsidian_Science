---
title: "Relative Entropy: Kullback–Leibler Divergence"
source_chapter: "C"
source_section: "C.4.3"
source_page: 487
---

> [!TLDR]
> Relative entropy measures the difference between distributions and is nonnegative.

The Kullback–Leibler divergence is important in fluctuation analysis and information theory:

$$
D_{\mathrm{KL}}(p\Vert q)
=\sum_i p_i\ln\frac{p_i}{q_i}\ge0.
$$

It measures how a distribution $p$ differs from a reference distribution $q$. The divergence is zero exactly when $p=q$. If $p_i>0$ where $q_i=0$, the divergence is infinite.

Nonnegativity follows from Jensen's inequality. It has a thermodynamic consequence: for a fixed Hamiltonian and temperature, the free energy of any trial distribution is no lower than the equilibrium free energy. This supports the Gibbs formulation of the second law.
