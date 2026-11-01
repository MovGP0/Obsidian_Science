---
title: "Natural Units"
---

> [!TLDR]
> Natural units set the reduced Planck constant and the speed of light to one, so physical dimensions can be expressed as powers of one energy unit.

## Appendix introduction

This appendix collects the conventions used in the text. They apply unless another convention is stated.

## Natural-unit convention

Throughout the text, use natural units defined by
$$
\energy{\hbar}=\mechanical{c}=1.
\tag{A.1}
$$
For finite-temperature field theory, Boltzmann's constant is also sometimes set to $\thermal{k}_B=1$.
With these choices, physical quantities can be expressed as powers of a single unit. This unit can be chosen as energy, or equivalently mass or momentum.

Setting these constants to one is a choice of units. It does not remove the physical distinction between a length and a time, or between a mass and an energy. Restore the constants before reporting an SI result. In particular, convert a mass to an energy with the square of the speed of light; convert an inverse energy to a length with the product of the reduced Planck constant and the speed of light.

Use [[A.01.02 Dimensions in Natural Units]] to check powers of energy before using [[A.01.01 Fundamental Conversion Factors]] for numerical conversion. A useful check is that a propagation phase has no physical dimension: a momentum component times a coordinate component has mass dimension zero. Temperature has energy units only when the Boltzmann-constant convention is also imposed.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale set numerically to one in natural units. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light | The conversion between space and time units. |
| $\thermal{k}_B$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | The energy-to-temperature conversion, also set to one when stated. |
