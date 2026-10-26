---
title: "Worked Example: Ideal-Gas Partition Function"
source_chapter: "B"
source_section: "B.5"
source_page: 477
---

> [!TLDR]
> The ideal-gas grand partition function is an exponential whose particle-number saddle gives the ideal-gas equation of state.

**Example B.1.** Calculate the grand partition function of a classical monatomic ideal gas and derive its equation of state by the saddle-point method.

## Canonical partition function

$$
Z_N
=\frac{\mechanical{V}^N}{N!}
\left(
\frac{2\pi\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T}}
{\signal{h}^2}
\right)^{3N/2}
\equiv\frac{\xi^N}{N!}.
$$

The one-particle factor is

$$
\xi=\mechanical{V}\signal{\lambda}_{\mathrm{th}}^{-3},
\qquad
\signal{\lambda}_{\mathrm{th}}
=\frac{\signal{h}}
{\sqrt{2\pi\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T}}}.
$$

## Exact grand partition function

With fugacity $z=e^{\thermal{\beta}\energy{\mu}}$,

$$
\mathcal Z(z)
=\sum_{N=0}^\infty\frac{(z\xi)^N}{N!}
=e^{z\xi},
\qquad
\ln\mathcal Z=z\xi.
$$

## Particle-number saddle

The saddle method illustrates the approximation without using the exact sum. The exponent is

$$
\thermal{\beta}\energy{\mu}N+\ln Z_N
=\thermal{\beta}\energy{\mu}N+N\ln\xi-\ln N!.
$$

Using the leading Stirling derivative, set its derivative to zero:

$$
\thermal{\beta}\energy{\mu}+\ln\xi-\ln\bar N=0
\quad\Longrightarrow\quad
\bar N=\xi e^{\thermal{\beta}\energy{\mu}}=z\xi.
$$

The leading saddle equals the exact mean particle count.

## Thermodynamic properties

The grand potential is

$$
\energy{\Omega}
=-\thermal{k}_{\mathrm B}\thermal{T}\ln\mathcal Z
=-\thermal{k}_{\mathrm B}\thermal{T}z\xi
=-\thermal{k}_{\mathrm B}\thermal{T}\bar N.
$$

At fixed temperature and chemical potential,

$$
\mechanical{P}
=-\frac{\partial\energy{\Omega}}{\partial\mechanical{V}}
=\frac{\bar N\thermal{k}_{\mathrm B}\thermal{T}}{\mechanical{V}}
\quad\Longrightarrow\quad
\mechanical{P}\mechanical{V}
=\bar N\thermal{k}_{\mathrm B}\thermal{T}.
$$

Likewise,

$$
\bar N=-\frac{\partial\energy{\Omega}}{\partial\energy{\mu}}
=z\xi=\frac{\mechanical{P}\mechanical{V}}
{\thermal{k}_{\mathrm B}\thermal{T}}.
$$

The canonical energy derivative at fixed $N$, evaluated at $N=\bar N$, gives

$$
\energy{U}
=-\left.\frac{\partial\ln Z_N}{\partial\thermal{\beta}}\right|_{N=\bar N}
=\frac32\bar N\thermal{k}_{\mathrm B}\thermal{T}.
$$

## Fluctuations and the saddle

The sum is concentrated around $\bar N=z\xi$, with root-mean-square width

$$
\sqrt{\langle(\Delta N)^2\rangle}=\sqrt{\bar N}.
$$

Thus the relative width is $1/\sqrt{\bar N}$ and vanishes in the thermodynamic limit.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\Delta N$ | $1$ | Particle-number fluctuation | The deviation of particle count from its mean. |
| $\energy{\mu}$ | $\unit{J}$ | Chemical potential | The energy conjugate to particle number. |
| $\energy{\Omega}$ | $\unit{J}$ | Grand potential | Minus thermal energy times the logarithm of the grand partition function. |
| $\energy{U}$ | $\unit{J}$ | Internal energy | The mean total translational energy. |
| $\mathcal Z$ | $1$ | Grand partition function | The statistical sum over particle numbers. |
| $\mechanical{m}$ | $\unit{kg}$ | Particle mass | The mass of one particle. |
| $\mechanical{P}$ | $\unit{Pa}$ | Pressure | The ideal-gas pressure. |
| $\mechanical{V}$ | $\unit{m^3}$ | Volume | The spatial volume of the gas. |
| $\signal{\lambda}_{\mathrm{th}}$ | $\unit{m}$ | Thermal wavelength | The thermal de Broglie wavelength. |
| $\signal{h}$ | $\unit{J\,s}$ | Planck constant | The quantum of action used to count phase-space cells. |
| $\thermal{\beta}$ | $\unit{J^{-1}}$ | Inverse temperature | One divided by the thermal energy. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | The constant that converts temperature to energy. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | The absolute temperature. |
| $\xi$ | $1$ | One-particle partition factor | The volume divided by the cube of the thermal wavelength. |
| $N$ | $1$ | Particle count | The number of particles in the system. |
| $Z$ | $1$ | Partition function | The sum or integral of thermal statistical weights. |
| $z$ | $1$ | Fugacity | The exponential of chemical potential divided by thermal energy. |
