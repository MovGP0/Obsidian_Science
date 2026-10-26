---
title: "Summary"
source_chapter: "C"
source_section: "C.6"
source_page: 490
---

> [!TLDR]
> Counting, entropy, probability distributions, and random walks provide a common framework for statistical mechanics.

- For $N$ objects distributed among $k$ cells with occupations $\{n_i\}$, the number of compatible microstates is

$$
W=\frac{N!}{\prod_i n_i!}.
$$

- Stirling's formula, $\ln n!\approx n\ln n-n$, makes these counts manageable in the thermodynamic limit.
- Binomial, Poisson, and Gaussian distributions are connected. The Poisson law is the rare-event limit of the binomial law. For sufficiently large means and variances, both have Gaussian central limits.
- Shannon entropy,

$$
H=-\sum_i p_i\ln p_i,
$$

measures uncertainty. Multiplication by $\thermal{k}_{\mathrm B}$ gives Gibbs entropy.

- A random walk is a microscopic model of diffusion. Its displacement variance grows linearly with time:

$$
\langle\mechanical{x}^2\rangle=2D\mechanical{t}.
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{t}$ | $\unit{s}$ | Time | The duration of diffusive motion. |
| $\mechanical{x}$ | $\unit{m}$ | Displacement | The one-dimensional random-walk displacement. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | The constant that converts temperature to energy. |
| $D$ | $\unit{m^2\,s^{-1}}$ | Diffusion coefficient | The coefficient in the displacement-variance growth law. |
| $N$ | $1$ | Particle count | The number of particles in the system. |
| $n_i$ | $1$ | Cell occupation | The number of objects in cell i. |
| $p_i$ | $1$ | State probability | The probability of state i. |
| $W$ | $1$ | Microstate count | The multiplicity of the occupation macrostate. |
