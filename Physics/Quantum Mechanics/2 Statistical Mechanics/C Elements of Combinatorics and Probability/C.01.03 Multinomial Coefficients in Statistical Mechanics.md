---
title: "Multinomial Coefficients in Statistical Mechanics"
source_chapter: "C"
source_section: "C.1.3"
source_page: 482
---

> [!TLDR]
> Multinomial state counting gives Boltzmann entropy and leads to the Shannon form in the large-particle-number limit.

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

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | The constant that converts temperature to energy. |
| $\thermal{S}$ | $\unit{J\,K^{-1}}$ | Entropy | The thermodynamic entropy of the system. |
| $N$ | $1$ | Particle count | The number of particles in the system. |
| $n_i$ | $1$ | Level population | The number of particles in energy level i. |
| $p_i$ | $1$ | Occupation fraction | The fraction of particles occupying level i. |
| $W(\{n_i\})$ | $1$ | Microstate count | The multiplicity of the specified occupation macrostate. |
