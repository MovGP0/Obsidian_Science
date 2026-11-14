---
title: "Multinomial Coefficients in Statistical Mechanics"
source_chapter: "C"
source_section: "C.1.3"
source_page: 482
---

> [!TLDR]
> Multinomial state counting gives Boltzmann entropy and leads to the Shannon form in the large-particle-number limit.

Which assignments count as different microstates? Here the particles, or occupied sites, carry labels, and each label is assigned to one level. Exchanging two labels between levels gives another assignment. The occupations are nonnegative integers with $\sum_i n_i=N$. Each level in this count is a single category; any internal degeneracy needs its own counting factor.

For $N$ particles distributed over $k$ energy levels, with $n_i$ particles in level $i$, the multinomial count is

$$
W(\{n_i\})=\frac{N!}{\prod_{i=1}^k n_i!}.
$$

The macrostate entropy is $\thermal{S}=\thermal{k}_{\mathrm B}\ln W$. In the limit $N\to\infty$ at fixed fractions $p_i=n_i/N$, Stirling's formula gives

$$
\frac{\thermal{S}}{\thermal{k}_{\mathrm B}N}
=-\sum_{i=1}^kp_i\ln p_i.
$$

This is the Shannon form of information entropy; see [[C.04 Information Entropy and Statistical Mechanics]].

## Why the entropy limit has this form

At fixed finite $k$, apply the leading logarithmic Stirling formula to $\ln N!-\sum_i\ln n_i!$. The terms linear in the populations cancel because their sum is $N$. Substitute $n_i=Np_i$; the terms proportional to $N\ln N$ cancel for the same reason. Division by $N$ leaves the displayed Shannon expression. The equality there is a limiting result, rather than an exact finite-$N$ identity. An empty category contributes zero, using $0\ln0=0$; do not apply Stirling's formula to $0!$.

For two labels divided equally between two categories, the exact count is two, whereas the leading entropy per particle tends to $\ln2$ only as the populations become large. Putting all labels in one category instead gives $W=1$ and zero macrostate entropy at every size. These checks test both the counting and the limit.

The same multinomial factor counts configurations of two-state sites. It does not by itself count Bose or Fermi many-particle states, and it does not assign physical probabilities without statistical weights.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | The constant that converts temperature to energy. |
| $\thermal{S}$ | $\unit{J\,K^{-1}}$ | Entropy | The thermodynamic entropy of the system. |
| $N$ | $1$ | Particle count | The number of particles in the system. |
| $n_i$ | $1$ | Level population | The number of particles in energy level i. |
| $p_i$ | $1$ | Occupation fraction | The fraction of particles occupying level i. |
| $W(\{n_i\})$ | $1$ | Microstate count | The multiplicity of the specified occupation macrostate. |
