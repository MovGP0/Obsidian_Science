---
title: "Summary"
source_chapter: "C"
source_section: "C.6"
source_page: 490
---

> [!TLDR]
> Counting, entropy, probability distributions, and random walks provide a common framework for statistical mechanics.

Use these results in sequence: define a microstate, assign probabilities, choose the applicable counting law or probability limit, then interpret the macroscopic quantity. A large particle count does not remove the need to state the sample space or independence assumptions.

The following formulas are a compact reference. The multinomial count uses labelled assignments to categories; Shannon entropy uses a normalized discrete distribution; and the diffusion formula assumes a symmetric, unconfined one-dimensional process started at the origin. These conditions are part of the results.

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

## A combined reconstruction check

Place two labelled objects independently in two equal cells. There are four assignments. The occupations with zero, one, or two objects in the first cell have multiplicities one, two, and one. Dividing by four gives their probabilities. Thus the most probable *macrostate* is equal occupation, but its probability is one half, rather than one.

The distribution over all four microscopic assignments has Shannon entropy $\ln4$. The balanced macrostate has multiplicity two. Its Boltzmann entropy concerns that restricted macrostate; it is not the entropy of the distribution over all assignments. Before using either expression, state which of these questions is being answered.

Finally, if the walk is biased, its raw mean-square displacement includes the squared mean drift. The linear diffusive law then applies to the variance about the moving mean. If there are walls, it need not grow indefinitely. These changes show why counting, distribution limits, and transport predictions must retain their model assumptions.

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
