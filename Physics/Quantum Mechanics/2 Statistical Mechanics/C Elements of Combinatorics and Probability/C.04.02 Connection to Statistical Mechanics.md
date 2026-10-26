---
title: "Connection to Statistical Mechanics"
source_chapter: "C"
source_section: "C.4.2"
source_page: 486
---

> [!TLDR]
> Gibbs entropy is Boltzmann's constant times Shannon entropy, and constrained maximization selects equilibrium distributions.

Thermodynamic Boltzmann–Gibbs entropy is closely related to Shannon entropy. For state probabilities $\{p_i\}$, Gibbs entropy is

$$
\thermal{S}_{\mathrm{Gibbs}}
=-\thermal{k}_{\mathrm B}\sum_i p_i\ln p_i.
$$

In the microcanonical ensemble, all $W$ compatible microstates have equal probability, $p_i=1/W$. Hence

$$
\thermal{S}_{\mathrm{Gibbs}}
=\thermal{k}_{\mathrm B}\ln W
=\thermal{S}_{\mathrm{Boltzmann}}.
$$

## Maximum-entropy principle

Jaynes's principle (1957) selects the equilibrium distribution by maximizing Shannon entropy under macroscopic constraints.

- Normalization alone, over the allowed microcanonical states, gives the uniform microcanonical distribution.
- Add the mean-energy constraint $\sum_i p_i\energy{E}_i=\energy{U}$ to obtain the canonical distribution, $p_i\propto e^{-\thermal{\beta}\energy{E}_i}$, with $\thermal{\beta}=1/(\thermal{k}_{\mathrm B}\thermal{T})$.
- Also constrain $\sum_i p_iN_i=\bar N$ to obtain the grand-canonical distribution,

$$
p_i\propto
e^{-\thermal{\beta}(\energy{E}_i-\energy{\mu}N_i)}.
$$

## Example C.2: Deriving the canonical distribution

Maximize $-\sum_i p_i\ln p_i$ with normalization and fixed mean energy. The Lagrange functional is

$$
\mathcal L
=-\sum_i p_i\ln p_i
-\lambda\left(\sum_i p_i-1\right)
-\thermal{\beta}\left(\sum_i p_i\energy{E}_i-\energy{U}\right).
$$

Differentiation with respect to $p_i$ gives

$$
-\ln p_i-1-\lambda-\thermal{\beta}\energy{E}_i=0,
$$

so

$$
p_i=e^{-(1+\lambda)}e^{-\thermal{\beta}\energy{E}_i}.
$$

Normalization requires

$$
e^{1+\lambda}
=\sum_i e^{-\thermal{\beta}\energy{E}_i}
=Z(\thermal{\beta}).
$$

Thus

$$
p_i=\frac{e^{-\thermal{\beta}\energy{E}_i}}{Z},
$$

the Boltzmann distribution.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{\mu}$ | $\unit{J}$ | Chemical potential | The parameter conjugate to mean particle count. |
| $\energy{E}_i$ | $\unit{J}$ | Microstate energy | The energy of state i. |
| $\energy{U}$ | $\unit{J}$ | Mean energy | The energy constraint in the canonical ensemble. |
| $\thermal{\beta}$ | $\unit{J^{-1}}$ | Inverse temperature | One divided by the thermal energy. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | The constant that converts temperature to energy. |
| $\thermal{S}_{\mathrm{Gibbs}}$ | $\unit{J\,K^{-1}}$ | Gibbs entropy | The thermodynamic entropy of the statistical state. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | The absolute temperature. |
| $N$ | $1$ | Particle count | The number of particles in the system. |
| $p_i$ | $1$ | State probability | The probability that the system occupies microstate i. |
| $W$ | $1$ | Accessible microstate count | The number of microstates compatible with the microcanonical constraints. |
| $Z(\thermal{\beta})$ | $1$ | Canonical partition function | The normalization of the canonical Boltzmann distribution. |
