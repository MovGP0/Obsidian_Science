---
title: "Degenerate Fermi gases and the Sommerfeld expansion"
---

> [!TLDR]
> Compute zero-temperature Fermi-gas properties and finite-temperature corrections, including the ultrarelativistic limit.

## Worked lecture material

##### Degenerate Fermi gas at zero temperature

The notes cite Pathria chapter 8 and Feynman page 34. At $\thermal{T}=0$ the occupation is a step at $\energy{E}=\energy{\mu}=\energy{E}_{\mathrm F}$ in the continuum description. One sketch shows paired spin occupations in the filled levels, and the notes stress that the Fermi energy is an energy scale. With spin degeneracy $g=2s+1$, the occupied momentum states fill the ball of radius $\mechanical{p}_{\mathrm F}$.

$$
N=\frac{g\mechanical{V}}{(2\pi\energy{\hbar})^3}
\int d^3\mechanical{\vec p}\,\Theta(\mechanical{p}_{\mathrm F}-|\mechanical{\vec p}|)
=\frac{g\mechanical{V}}{(2\pi\energy{\hbar})^3}\frac{4\pi}{3}\mechanical{p}_{\mathrm F}^3.
$$

The note “Next: $T\ne0$” appears before this integral, but the step function and resulting boxed values use $\thermal{T}=0$. The handwritten volume also has an apparent square where the ball volume requires a cube. Solving for the Fermi momentum and energy gives

$$
\mechanical{p}_{\mathrm F}=\energy{\hbar}\left(\frac{6\pi^2n}{g}\right)^{1/3},
\qquad
\energy{E}_{\mathrm F}
=\frac{\mechanical{p}_{\mathrm F}^2}{2\mechanical{m}}
=\frac{\energy{\hbar}^2}{2\mechanical{m}}\left(\frac{6\pi^2n}{g}\right)^{2/3}.
$$

Integrate the one-particle energy over the same occupied ball.

$$
\langle\energy{E}\rangle
=\frac{g\mechanical{V}}{(2\pi\energy{\hbar})^3}\frac{4\pi}{2\mechanical{m}}
\int_0^{\mechanical{p}_{\mathrm F}}\mechanical{p}^4\,d\mechanical{p}
=\frac35N\energy{E}_{\mathrm F}.
$$

Thus the mean energy per particle is $3\energy{E}_{\mathrm F}/5$. The nonrelativistic relation $\mechanical{P}\mechanical{V}=\tfrac23\langle\energy{E}\rangle$ then yields the Fermi degeneracy pressure,

$$
\mechanical{P}=\frac25n\energy{E}_{\mathrm F}
=\frac25\frac{\energy{\hbar}^2}{2\mechanical{m}}
\left(\frac{6\pi^2}{g}\right)^{2/3}n^{5/3}.
$$

The short handwritten intermediate pressure box omits $\energy{E}_{\mathrm F}$, which is present in the expanded expression. **Exercise.** Repeat the counting and thermodynamic calculation for $\energy{\epsilon}=\mechanical{c}|\mechanical{\vec p}|$ in the ultrarelativistic case.

**Exercise.** Check the nonrelativistic degeneracy-pressure formula for electrons in a neutron star. The notebook says to use the ultrarelativistic expression instead and anticipates a density exponent of $4/3$ in place of $5/3$.

##### Fermi gas at nonzero temperature

The sketch shows the Fermi occupation smoothed around $\energy{\mu}$. For the particle count, use

$$
N=\frac{g\mechanical{V}(2\mechanical{m})^{3/2}}{4\pi^2\energy{\hbar}^3}
\int_0^\infty\frac{\sqrt{\energy{\epsilon}}\,d\energy{\epsilon}}{e^{\thermal{\beta}(\energy{\epsilon}-\energy{\mu})}+1}.
$$

The number and energy integrals have the general form

$$
I=\int_0^\infty\frac{f(\energy{\epsilon})}{e^{\thermal{\beta}(\energy{\epsilon}-\energy{\mu})}+1}\,d\energy{\epsilon},
$$

with $f(\energy{\epsilon})=\sqrt{\energy{\epsilon}}$ or $\energy{\epsilon}^{3/2}$, respectively. The page mentions the polylogarithm. For the low-temperature expansion, set $x=\thermal{\beta}(\energy{\epsilon}-\energy{\mu})$, written $z$ in the notebook. Then $d\energy{\epsilon}=\thermal{k}_{\mathrm B}\thermal{T}\,dx$ and $\energy{\epsilon}=\energy{\mu}+\thermal{k}_{\mathrm B}\thermal{T}x$. Split the integral at $x=0$ and reflect the negative part to positive $x$.

$$
\begin{aligned}
I
&=\thermal{k}_{\mathrm B}\thermal{T}\int_{-\thermal{\beta}\energy{\mu}}^\infty
\frac{f(\energy{\mu}+\thermal{k}_{\mathrm B}\thermal{T}x)}{e^x+1}\,dx\\
&=\thermal{k}_{\mathrm B}\thermal{T}\int_0^{\thermal{\beta}\energy{\mu}}
\frac{f(\energy{\mu}-\thermal{k}_{\mathrm B}\thermal{T}x)}{e^{-x}+1}\,dx
+\thermal{k}_{\mathrm B}\thermal{T}\int_0^\infty
\frac{f(\energy{\mu}+\thermal{k}_{\mathrm B}\thermal{T}x)}{e^x+1}\,dx.
\end{aligned}
$$

The signs in the arguments of $f$ differ on the two sides. The identity used on the next page is $(e^{-x}+1)^{-1}=1-(e^x+1)^{-1}$.

##### Sommerfeld expansion

The sketch overlays the zero-temperature step and the rounded finite-temperature Fermi distribution. For $\energy{\mu}>0$, use the identity from the previous page to split $I$ into three integrals.

$$
\begin{aligned}
I={}&\thermal{k}_{\mathrm B}\thermal{T}\int_0^{\thermal{\beta}\energy{\mu}}
f(\energy{\mu}-\thermal{k}_{\mathrm B}\thermal{T}x)\,dx\\
&-\thermal{k}_{\mathrm B}\thermal{T}\int_0^{\thermal{\beta}\energy{\mu}}
\frac{f(\energy{\mu}-\thermal{k}_{\mathrm B}\thermal{T}x)}{e^x+1}\,dx\\
&+\thermal{k}_{\mathrm B}\thermal{T}\int_0^\infty
\frac{f(\energy{\mu}+\thermal{k}_{\mathrm B}\thermal{T}x)}{e^x+1}\,dx.
\end{aligned}
$$

The first term equals $\int_0^{\energy{\mu}} f(\energy{\epsilon})\,d\energy{\epsilon}$. For $\thermal{\beta}\energy{\mu}\gg1$, the corrections are dominated by $x$ of order one. Expand $f$ about $\energy{\mu}$ and extend the upper limit of the resulting moment integrals to infinity, with exponentially small tail terms of order $e^{-\thermal{\beta}\energy{\mu}}$ up to powers. Even Taylor terms cancel between the two corrections. The resulting expansion is

$$
I=\int_0^{\energy{\mu}}f(\energy{\epsilon})\,d\energy{\epsilon}
+\frac{\pi^2}{6}(\thermal{k}_{\mathrm B}\thermal{T})^2f'(\energy{\mu})
+\frac{7\pi^4}{360}(\thermal{k}_{\mathrm B}\thermal{T})^4f'''(\energy{\mu})
+O((\thermal{k}_{\mathrm B}\thermal{T})^6).
$$

The handwritten quartic term shows two primes. The cubic Taylor term of the difference requires $f'''$. The references listed are Landau page 155 and the integral table in Pathria's appendix.

The notes apply the formula first to particle count, taking $f(\energy{\epsilon})=\sqrt{\energy{\epsilon}}$. Its integral becomes

$$
I=\frac23\energy{\mu}^{3/2}
\left[1+\frac{\pi^2}{8}\left(\frac{\thermal{k}_{\mathrm B}\thermal{T}}{\energy{\mu}}\right)^2+\cdots\right].
$$

Multiply by $g\mechanical{V}(2\mechanical{m})^{3/2}/(4\pi^2\energy{\hbar}^3)$ to recover $N$. The page points next to expansions for energy and pressure.

At fixed $N$ and $\mechanical{V}$, invert the low-temperature particle-count expression. To quadratic order, replace $\energy{\mu}$ in the correction by its leading value $\energy{E}_{\mathrm F}$. With $x=\thermal{k}_{\mathrm B}\thermal{T}/\energy{E}_{\mathrm F}$,

$$
\energy{\mu}=\energy{E}_{\mathrm F}\left[1-\frac{\pi^2}{12}x^2+O(x^4)\right].
$$

The prefactor $\energy{E}_{\mathrm F}=\frac{\energy{\hbar}^2}{2\mechanical{m}}(6\pi^2n/g)^{2/3}$ depends on density. For the energy integral take $f(\energy{\epsilon})=\energy{\epsilon}^{3/2}$.

$$
\begin{aligned}
\langle\energy{E}\rangle
&=\frac{g\mechanical{V}(2\mechanical{m})^{3/2}}{4\pi^2\energy{\hbar}^3}
\int_0^\infty\frac{\energy{\epsilon}^{3/2}\,d\energy{\epsilon}}
{e^{\thermal{\beta}(\energy{\epsilon}-\energy{\mu})}+1}\\
&\approx\frac25\frac{g\mechanical{V}(2\mechanical{m})^{3/2}}{4\pi^2\energy{\hbar}^3}
\energy{\mu}^{5/2}
\left[1+\frac{5\pi^2}{8}\left(\frac{\thermal{k}_{\mathrm B}\thermal{T}}{\energy{\mu}}\right)^2+\cdots\right].
\end{aligned}
$$

Eliminating $\energy{\mu}$ with the fixed-density expansion gives

$$
\langle\energy{E}\rangle=\frac35N\energy{E}_{\mathrm F}
\left[1+\frac{5\pi^2}{12}x^2+O(x^4)\right].
$$

The prefactor is the zero-temperature energy. Using $\energy{\Omega}=-\mechanical{P}\mechanical{V}=-(2/3)\langle\energy{E}\rangle$, the low-temperature degeneracy pressure is

$$
\mechanical{P}=\frac25n\energy{E}_{\mathrm F}
\left[1+\frac{5\pi^2}{12}x^2+O(x^4)\right].
$$

The notebook gives $\thermal{k}_{\mathrm B}\thermal{T}\approx0.024\;\unit{eV}$ at room temperature and asks for the Fermi energy of copper. At fixed $N,\mechanical{V}$, differentiating the energy yields

$$
\thermal{C}_V=N\thermal{k}_{\mathrm B}\left[\frac{\pi^2}{2}x+O(x^3)\right],
$$

so the low-temperature electronic heat capacity is linear in temperature.

Let $x=\thermal{k}_{\mathrm B}\thermal{T}/\energy{E}_{\mathrm F}$ as on the preceding page. The low-temperature Helmholtz free energy and entropy are

$$
\begin{aligned}
\energy{A}&=\frac35N\energy{E}_{\mathrm F}-\frac{\pi^2}{4}N\energy{E}_{\mathrm F}x^2+\cdots,\\
\thermal{S}&=\frac{\langle\energy{E}\rangle-\energy{A}}{\thermal{T}}
=\frac{\pi^2}{2}N\thermal{k}_{\mathrm B}x+\cdots.
\end{aligned}
$$

##### Numerical examples

##### Metals

At room temperature $\thermal{T}\approx300\;\unit{K}$ and $\thermal{k}_{\mathrm B}\thermal{T}\approx0.026\;\unit{eV}$. The notebook describes a Fermi energy of a few electronvolts as typical and gives the following values, with a reference to Pathria page 209.

| Metal | Fermi energy |
| --- | --- |
| Sodium (Na) | $3.24\;\unit{eV}$ |
| Silver (Ag) | $5.49\;\unit{eV}$ |
| Copper (Cu) | $7.00\;\unit{eV}$ |
| Gold (Au) | $5.53\;\unit{eV}$ |
| Iron (Fe) | $11.1\;\unit{eV}$ |
| Aluminum (Al) | $11.7\;\unit{eV}$ |

The gold symbol is overwritten in the handwriting. For copper, $(\thermal{k}_{\mathrm B}\thermal{T}/\energy{E}_{\mathrm F})^2\approx1.38\times10^{-5}$, so the zero-temperature result is a good approximation for quantities with this leading relative correction.

##### White dwarfs

A solar mass corresponds to about $10^{57}$ nucleons. For the example, the notebook takes a temperature of order $10^4\;\unit{K}$ from luminosity and an electron density of order $10^{36}\;\unit{m^{-3}}$. The thermal energy is of order $\unit{eV}$. The exercise estimates $\energy{E}_{\mathrm F}\approx3\times10^5\;\unit{eV}=0.3\;\unit{MeV}$, so the ratio $\thermal{k}_{\mathrm B}\thermal{T}/\energy{E}_{\mathrm F}$ is very small, written as order $10^{-5}$. Sirius B is named as a white dwarf example. A margin comment asks what changes when the electrons cannot be treated as a free Fermi gas.

##### Neutron stars

The notes mention Chandrasekhar and use $e^-+p^+\to n^0$ as shorthand for electron capture. Neutrons are fermions and contribute degeneracy pressure. The page gives $\thermal{k}_{\mathrm B}\thermal{T}\approx1\;\unit{MeV}$, a nuclear-scale number density of order one nucleon per cubic femtometer, and $\energy{E}_{\mathrm F}\sim30$–$100\;\unit{MeV}$. Since $1\;\unit{fm}=10^{-13}\;\unit{cm}$, one nucleon per cubic femtometer corresponds to $10^{39}\;\unit{cm^{-3}}$. The handwritten power in the centimeter-based density differs from this conversion.

The source gives a mass of order $1.2$–$2$ solar masses and a radius of about $10\;\unit{km}$. A separate line appears to give $\thermal{k}_{\mathrm B}\thermal{T}\sim10$–$10{,}000\;\unit{MeV}$ without specifying the conditions, alongside the earlier $1\;\unit{MeV}$ estimate. The notes emphasize that neutrons interact strongly.

##### Nuclei

The notebook again takes $\thermal{k}_{\mathrm B}\thermal{T}\sim1\;\unit{MeV}$ and a nuclear-scale density, with $\energy{E}_{\mathrm F}\sim30\;\unit{MeV}$. It gives a rough range $10^{-2}$ to $10^{-4}$ for $(\thermal{k}_{\mathrm B}\thermal{T}/\energy{E}_{\mathrm F})^2$.

##### Ultrarelativistic degenerate Fermi gas

The nonrelativistic kinetic energy is $\mechanical{p}^2/(2\mechanical{m})$. In the relativistic case,

$$
\energy{\epsilon}(\mechanical{\vec p})
=\sqrt{\mechanical{p}^2\mechanical{c}^2+\mechanical{m}^2\mechanical{c}^4}
\approx\mechanical{c}|\mechanical{\vec p}|
$$

when the rest-energy term is negligible. The phase-space state count is unchanged. At zero temperature, the momentum cutoff is $\energy{E}_{\mathrm F}/\mechanical{c}$, so

$$
N=\frac{g\mechanical{V}}{6\pi^2\energy{\hbar}^3}
\left(\frac{\energy{E}_{\mathrm F}}{\mechanical{c}}\right)^3,\qquad
\energy{E}_{\mathrm F}
=\energy{\hbar}\mechanical{c}\left(\frac{6\pi^2}{g}\right)^{1/3}
\left(\frac{N}{\mechanical{V}}\right)^{1/3}.
$$

The mass drops out. Integrating $\mechanical{c}\mechanical{p}$ over the occupied ball gives $\langle\energy{E}\rangle=\tfrac34N\energy{E}_{\mathrm F}$. The nonrelativistic factor was $3/5$.

## Source

Kyle Kabasares, *Thermodynamics and Statistical Mechanics (Chem 232A - Physics 214A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Inertial mass of a particle. |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by $2\pi$. |
| $N$ | 1 | Particle count | Number of atoms or molecules. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | Relates absolute temperature to a microscopic energy scale. |
| $\thermal{T}$ | $\unit{K}$ | Absolute temperature | Temperature of the system or reservoir. |
| $\thermal{S}$ | $\unit{J\,K^{-1}}$ | Entropy | State function whose change along a reversible path is the integral of reversible heat divided by temperature. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | Particle momentum, which changes sign under time reversal. |
| $\mechanical{V}$ | $\unit{m^3}$ | Volume | Spatial extent of a simple system. |
| $\mechanical{P}$, $\mechanical{P}_{\mathrm{int}}$, $\mechanical{P}_{\mathrm{ext}}$ | $\unit{Pa}$ | Pressure | Force per unit area, including the internal and applied external pressure at the piston. |
| $n$ | $\unit{mol}$ | Amount of substance | Number of moles in the gas. |
| $\thermal{C}_V$ | $\unit{J\,K^{-1}}$ | Heat capacity at constant volume | Temperature derivative of internal energy at fixed volume and composition. |
| $\energy{E}$ | $\unit{J}$ | Energy | Microscopic energy that enters the Boltzmann weight. |
| $\thermal{\beta}$ | $\unit{J^{-1}}$ | Inverse thermal energy | Reciprocal of Boltzmann's constant times the absolute temperature. |
| $\energy{F}$, $\energy{A}$ | $\unit{J}$ | Helmholtz free energy | Canonical thermodynamic potential obtained from the partition function. |
| $n$ | $\unit{m^{-3}}$ | Number density | Particle count per unit volume. |
| $\energy{\mu}$ | $\unit{J}$ per particle | Chemical potential | Intensive energy variable conjugate to particle number. |
| $\Omega$ | 1 | Multiplicity | Number of accessible microstates, including the cumulative count in the ideal-gas calculation. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light | Propagation speed in the photon spectrum formula. |
| $g$ | 1 | Landé factor | Proportionality factor relating angular momentum and magnetic moment. |
| $\energy{\Omega}$ | $\unit{J}$ | Grand potential | Legendre transform of Helmholtz free energy with respect to particle number. |
| $z$ | 1 | Fugacity | Exponential of the chemical potential divided by the thermal energy. |
| $\energy{E}_{\mathrm F}$ | $\unit{J}$ or $\unit{eV}$ | Fermi energy | Zero-temperature energy at the edge of the filled one-particle states. |
| $g$ | 1 | Internal degeneracy | Number of internal states per momentum state. |
| $\mechanical{p}_{\mathrm F}$ | $\unit{kg\,m\,s^{-1}}$ | Fermi momentum | Momentum magnitude at the boundary of the occupied states at zero temperature. |
