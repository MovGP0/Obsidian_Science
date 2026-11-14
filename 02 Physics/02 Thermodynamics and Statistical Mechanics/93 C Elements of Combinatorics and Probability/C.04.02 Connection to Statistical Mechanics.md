---
title: "Connection to Statistical Mechanics"
source_chapter: "C"
source_section: "C.4.2"
source_page: 486
---

> [!TLDR]
> Gibbs entropy is Boltzmann's constant times Shannon entropy, and constrained maximization selects equilibrium distributions.

The events here are distinguishable microstates of a specified physical system, not arbitrary measurement bins. A level with several microstates must include their degeneracy when probabilities are summed. The ensemble fixes which microstates are allowed and what information is held fixed. The Gibbs formula and its microcanonical and canonical forms are discussed in [Tong's statistical-physics notes, Section 1.3.3](https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S1.html).

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

The microcanonical restriction is a restriction of the sample space itself, usually to a narrow energy shell. A fixed *mean* energy permits individual states of different energies. These constraints answer different physical questions. Entropy maximization is an inference procedure for the chosen information; it is not a dynamical proof that an isolated system relaxes. Identifying its energy multiplier with inverse thermal energy uses the equilibrium thermodynamic interpretation, as for a system in weak contact with a heat bath.

The sums below must converge. In particular, the canonical partition function must be finite. For finite spectra this condition holds at every finite multiplier; for unbounded spectra the allowed multiplier range depends on the spectrum. The usual thermal-bath case here has positive absolute temperature.

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

## Interpreting the weights

The normalization multiplier fixes the total probability; the energy multiplier sets ratios of weights. For two microstates, their probability ratio depends only on their energy difference. At positive temperature, the higher-energy microstate is less probable. Equal-energy microstates have equal weights. As temperature increases without bound in a finite state space, the weights become uniform.

Adding the same constant to all microstate energies multiplies both the numerator and partition function by the same factor, so no probability changes. This checks the choice of energy zero. Also, $\thermal{\beta}\energy{E}_i$ is dimensionless, and the grand-canonical exponent has the same property because chemical potential is energy per particle count. At finite temperature, a measured departure from these weights can indicate that the assumed equilibrium ensemble or the chosen state description is insufficient.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{\mu}$ | $\unit{J}$ | Chemical potential | The parameter conjugate to mean particle count. |
| $\energy{E}_i$ | $\unit{J}$ | Microstate energy | The energy of state i. |
| $\energy{U}$ | $\unit{J}$ | Mean energy | The energy constraint in the canonical ensemble. |
| $\thermal{\beta}$ | $\unit{J^{-1}}$ | Inverse temperature | One divided by the thermal energy. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | The constant that converts temperature to energy. |
| $\thermal{S}_{\mathrm{Gibbs}}$ | $\unit{J\,K^{-1}}$ | Gibbs entropy | The thermodynamic entropy of the statistical state. |
| $\thermal{S}_{\mathrm{Boltzmann}}$ | $\unit{J\,K^{-1}}$ | Boltzmann entropy | The logarithm of the compatible microstate count times Boltzmann's constant. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | The absolute temperature. |
| $N,\ N_i,\ \bar N$ | $1$ | Particle counts | The particle count in a microstate and its constrained ensemble mean. |
| $p_i$ | $1$ | State probability | The probability that the system occupies microstate i. |
| $W$ | $1$ | Accessible microstate count | The number of microstates compatible with the microcanonical constraints. |
| $Z(\thermal{\beta})$ | $1$ | Canonical partition function | The normalization of the canonical Boltzmann distribution. |
