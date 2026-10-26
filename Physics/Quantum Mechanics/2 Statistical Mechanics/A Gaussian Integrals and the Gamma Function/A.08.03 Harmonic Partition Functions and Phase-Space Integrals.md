---
title: "Harmonic Partition Functions and Phase-Space Integrals"
source_chapter: "A"
source_section: "A.8.3"
source_page: 470
---

> [!TLDR]
> Independent quadratic degrees of freedom turn classical phase-space integrals into products of Gaussian factors.

For a harmonic oscillator with Hamiltonian

$$
\energy{H}
=\frac{\mechanical{p}^2}{2\mechanical{m}}
+\frac12\mechanical{m}\signal{\omega}^2\mechanical{q}^2,
$$

the classical partition function is

$$
\begin{aligned}
Z
&=\frac1{\signal{h}}\int_{-\infty}^{+\infty}
\int_{-\infty}^{+\infty}
e^{-\thermal{\beta}\energy{H}}\,d\mechanical{p}\,d\mechanical{q}\\
&=\frac1{\signal{h}}
\sqrt{\frac{2\pi\mechanical{m}}{\thermal{\beta}}}
\sqrt{\frac{2\pi}{\thermal{\beta}\mechanical{m}\signal{\omega}^2}}
=\frac{\thermal{k}_{\mathrm B}\thermal{T}}{\signal{\hbar}\signal{\omega}}.
\end{aligned}
$$

The factor $1/\signal{h}$ is the standard normalization of classical phase-space measure. For $N$ independent oscillators of the same frequency, (A.4) gives

$$
Z_N=\left(\frac{\thermal{k}_{\mathrm B}\thermal{T}}
{\signal{\hbar}\signal{\omega}}\right)^N.
$$

## Exercise A.1

Calculate the partition function of $N$ ideal monatomic particles in volume $\mechanical{V}$, and show that

$$
Z_N=\frac{\mechanical{V}^N}{N!}
\left(\frac{2\pi\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T}}
{\signal{h}^2}\right)^{3N/2}.
$$

Use the volume of a $3N$-dimensional ball. Compare this result with direct calculation from a product of Gaussian integrals.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{H}$ | $\unit{J}$ | Hamiltonian | The total energy of the harmonic oscillator. |
| $\mechanical{m}$ | $\unit{kg}$ | Particle mass | The mass of one particle. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum component | One Cartesian component of particle momentum. |
| $\mechanical{q}$ | $\unit{m}$ | Oscillator displacement | The oscillator position relative to equilibrium. |
| $\mechanical{V}$ | $\unit{m^3}$ | Volume | The spatial volume of the gas. |
| $\signal{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by two pi. |
| $\signal{\omega}$ | $\unit{s^{-1}}$ | Angular frequency | The oscillator's natural angular frequency. |
| $\signal{h}$ | $\unit{J\,s}$ | Planck constant | The quantum of action used to count phase-space cells. |
| $\thermal{\beta}$ | $\unit{J^{-1}}$ | Inverse temperature | One divided by the thermal energy. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | The constant that converts temperature to energy. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | The absolute temperature. |
| $N$ | $1$ | Particle count | The number of particles in the system. |
| $Z$ | $1$ | Partition function | The sum or integral of thermal statistical weights. |
