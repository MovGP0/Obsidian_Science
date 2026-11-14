---
title: "Spectral lines and Einstein transition coefficients"
---

> [!TLDR]
> Use spontaneous emission, absorption, and stimulated emission to derive spectral-line coefficients and the line source function.

## Worked lecture material

![[Kyle Kabasares - Radiative Transfer - Cygnus A radio lobes.png|**Fig. 78** The notes sketch the radio galaxy between two radio lobes and label a length of order 100–200 kpc.]]

Radio observations imply an equipartition field of order $\quantity{100}{\mu G}$. Approximating each lobe by a sphere of radius $\mechanical{R}=\quantity{30}{kpc}$ gives a magnetic energy of order

$$
\energy{U}_{B,\mathrm{tot}}=\frac{\magnetic{B}^2}{8\pi}
\frac{4\pi\mechanical{R}^3}{3}\sim\quantity{10^{60}}{erg}.
$$

The notes compare the energy of the lobes with more than $10^9$ supernovae and cite Burbidge (1956) for the energetics of radio galaxies. A margin note mentions B²FH (Burbidge, Burbidge, Fowler, and Hoyle), stellar nucleosynthesis, and the triple-alpha reaction.

##### Formation of spectral lines

The semiclassical treatment starts with transition probabilities and the Einstein $A$ and $B$ coefficients (Rybicki and Lightman, section 1.6). Consider a two-level atom with a lower state $L$ and upper state $U$, with populations $N_\ell$ and $N_u$.

##### Spontaneous emission

A downward transition from $u$ to $\ell$ emits one photon with energy $h\signal{\nu}_{u\ell}=\energy{E}_u-\energy{E}_\ell$.

![[Kyle Kabasares - Radiative Transfer - Spontaneous two-level transition.png|**Fig. 79** An electron in the upper state decays to the lower state and emits a photon of energy $h\nu$.]]

The Einstein coefficient $\energy{A}_{u\to\ell}$ is the spontaneous transition probability per unit time. In the two-level case,

$$
\frac{1}{N_u}\frac{dN_u}{dt}=-\energy{A}_{u\to\ell}.
$$

The notes point to the electric-dipole matrix element $|\langle u|\sum_i\vec{\mechanical{r}}_i|\ell\rangle|^2$, with the sum over the electrons. For a general upper level, sum over the accessible lower states, $\energy{A}_u=\sum_{\ell<u}\energy{A}_{u\to\ell}$.

In the optically thin approximation the line luminosity and frequency-integrated volume emissivity are

$$
\frac{d\energy{E}_{\mathrm{rad}}}{dt}
=(\energy{E}_u-\energy{E}_\ell)\energy{A}_{u\to\ell}N_u,
\qquad
\energy{\epsilon}=h\signal{\nu}_{u\ell}\mechanical{n}_u\energy{A}_{u\to\ell}.
$$

Here $\mechanical{n}_u$ is the upper-state number density. The handwritten luminosity line reverses the arrow on $A$, while the population and emissivity equations use the downward transition.

The lecture reviews Einstein coefficients for a two-level atom.

![[Kyle Kabasares - Radiative Transfer - Two-level atom lecture recap.png|**Fig. 80** The level populations are $N_u$ and $N_\ell$, and the downward transition emits the energy difference $h\nu$.]]

The spontaneous emission relations are

$$
\frac{1}{N_u}\frac{dN_u}{dt}=-\energy{A}_{u\to\ell},
\qquad
\energy{A}_u=\sum_{\ell<u}\energy{A}_{u\to\ell},
\qquad
\frac{d\energy{E}_{\mathrm{rad}}}{dt}=N_u\energy{A}_{u\to\ell}h\signal{\nu}_{\ell u}.
$$

The last expression gives the emitted line power in the optically thin limit. The downward transition carries an electron from the upper to the lower state. In an external radiation field, photons can induce the upward transition $\ell\to u$.

##### Photoabsorption

An incident photon with $h\signal{\nu}=\energy{E}_u-\energy{E}_\ell$ can induce a transition from $\ell$ to $u$. The absorption rate is proportional to the supply of incident photons at the transition energy. The notes assume that the photons act independently.

![[Kyle Kabasares - Radiative Transfer - Photoabsorption in a two-level atom.png|**Fig. 81** An incoming photon excites an electron from the lower energy level to the upper one.]]

In terms of the Einstein absorption coefficient $\energy{B}_{\ell\to u}$ and the mean intensity,

$$
\frac{1}{N_\ell}\frac{dN_\ell}{dt}
=-\energy{B}_{\ell\to u}\energy{J}_{\signal{\nu}},
\qquad
\energy{J}_{\signal{\nu}}=\frac{1}{4\pi}\int\energy{I}_{\signal{\nu}}\,d\Omega.
$$

The coefficient $\energy{B}_{\ell\to u}$ is a property of the transition. The angular average $\energy{J}_{\signal{\nu}}$ measures the radiation field that drives it. Statistical equilibrium relates the Einstein coefficients by equating transition rates into and out of a level.

If the only processes were absorption and spontaneous emission, equating their rates would give

$$
N_\ell\energy{B}_{\ell\to u}\energy{J}_{\signal{\nu}}=N_u\energy{A}_{u\to\ell},
\qquad
\frac{\energy{A}_{u\to\ell}}{\energy{B}_{\ell\to u}}
=\frac{N_\ell}{N_u}\energy{J}_{\signal{\nu}}.
$$

Test this tentative equation in thermal equilibrium, where $\energy{J}_{\signal{\nu}}=\energy{B}_{\signal{\nu}}(\thermal{T})$ and $N_\ell/N_u$ is a function of temperature. The right side is temperature dependent, while the Einstein coefficients are intrinsic to the transition. This is why the rate equation needs another term.

##### Stimulated emission

An incident photon can induce a downward transition, producing an additional photon of the same energy as the incident one.

![[Kyle Kabasares - Radiative Transfer - Stimulated two-level transition.png|**Fig. 82** A single incident photon stimulates a downward transition, leaving two outgoing photons with energy $h\nu_{\ell u}=E_u-E_\ell$ each.]]

The stimulated emission probability per unit time is $\energy{B}_{u\to\ell}\energy{J}_{\signal{\nu}}$. Its contribution to the upper level is

$$
\left.\frac{1}{N_u}\frac{dN_u}{dt}\right|_{\mathrm{stim}}
=-\energy{B}_{u\to\ell}\energy{J}_{\signal{\nu}}.
$$

In statistical equilibrium, upward photoabsorptions balance spontaneous and stimulated downward transitions.

$$
N_\ell\energy{B}_{\ell\to u}\energy{J}_{\signal{\nu}}
=N_u\energy{A}_{u\to\ell}+N_u\energy{B}_{u\to\ell}\energy{J}_{\signal{\nu}}.
$$

Solving for the mean intensity gives

$$
\energy{J}_{\signal{\nu}}=
\frac{\energy{A}_{u\to\ell}/\energy{B}_{u\to\ell}}
{\dfrac{N_\ell\energy{B}_{\ell\to u}}{N_u\energy{B}_{u\to\ell}}-1}.
$$

This equation follows from statistical equilibrium and therefore also holds in the more restrictive case of thermal equilibrium.

##### Einstein relations

In thermal equilibrium the relative populations follow Boltzmann factors. With statistical weights $g_\ell$ and $g_u$ and transition energy $h\signal{\nu}=\energy{E}_u-\energy{E}_\ell$,

$$
\frac{N_\ell}{N_u}
=\frac{g_\ell}{g_u}
e^{-(\energy{E}_\ell-\energy{E}_u)/(k_{\mathrm B}\thermal{T})}
=\frac{g_\ell}{g_u}e^{h\signal{\nu}/(k_{\mathrm B}\thermal{T})}.
$$

The intermediate handwritten substitution carries a minus sign in front of $h\nu$. The sign above follows from the energy difference and is the one used in the rate equation on the same page.

In equilibrium $\energy{J}_{\signal{\nu}}=\energy{B}_{\signal{\nu}}(\thermal{T})$. Compare the Planck law with the statistical equilibrium expression:

$$
\frac{2h\signal{\nu}^3/c^2}{e^{h\signal{\nu}/(k_{\mathrm B}\thermal{T})}-1}
=\frac{\energy{A}_{u\to\ell}/\energy{B}_{u\to\ell}}
{\dfrac{g_\ell\energy{B}_{\ell\to u}}{g_u\energy{B}_{u\to\ell}}\,
e^{h\signal{\nu}/(k_{\mathrm B}\thermal{T})}-1}.
$$

Equality for all temperatures gives the **Einstein relations**.

$$
g_\ell\energy{B}_{\ell\to u}=g_u\energy{B}_{u\to\ell},
\qquad
\energy{A}_{u\to\ell}=\frac{2h\signal{\nu}^3}{c^2}\energy{B}_{u\to\ell}.
$$

The coefficients, statistical weights, and level spacing are properties of the atom or ion and are independent of temperature.

The Einstein relations hold even outside thermal equilibrium. A quantum-mechanical derivation uses Fermi's golden rule for the transition from $|\ell\rangle$ to $|u\rangle$,

$$
W_{\ell\to u}=\frac{2\pi}{\hbar}
\left|\langle u|H'|\ell\rangle\right|^2\rho_u(\energy{E}).
$$

Here $H'$ is the time-dependent perturbation of the Hamiltonian and $\rho_u(\energy{E})$ is the density of accessible upper states. The handwritten denominator looks like $h$. The usual golden-rule normalization with $2\pi$ in the numerator uses $\hbar$.

For a Hermitian perturbation the reversed matrix element has the same squared magnitude, $|\langle u|H'|\ell\rangle|^2=|\langle\ell|H'|u\rangle|^2$. The notes identify the resulting ratio of induced transition rates with detailed balance.

$$
\frac{W_{\ell\to u}}{W_{u\to\ell}}
=\frac{\rho_u(\energy{E})}{\rho_\ell(\energy{E})},
\qquad
\frac{\energy{B}_{\ell\to u}}{\energy{B}_{u\to\ell}}=\frac{g_u}{g_\ell}.
$$

The direct and inverse induced rates have a ratio proportional to the ratio of the statistical weights of their final states. The common matrix element cancels.

##### Finite line profile

A transition occupies a finite range of energies or frequencies. Represent it with a **line profile** $\phi(\signal{\nu})$ sharply peaked near the line center $\signal{\nu}_0$, normalized by

$$
\int_0^\infty \phi(\signal{\nu})\,d\signal{\nu}=1.
$$

![[Kyle Kabasares - Radiative Transfer - Normalized spectral line profile.png|**Fig. 83** The line profile is concentrated near the line-center frequency $\nu_0$ and has unit integral.]]

The rate equations retain their form if the mean specific intensity is replaced by its profile-weighted average.

$$
\langle\energy{J}\rangle
=\int_0^\infty\energy{J}_{\signal{\nu}}\phi(\signal{\nu})\,d\signal{\nu}
=\frac{1}{4\pi}\int_{4\pi}d\Omega
\int_0^\infty\energy{I}_{\signal{\nu}}\phi(\signal{\nu})\,d\signal{\nu}.
$$

##### Line emission and photoabsorption coefficients

The line profile depends on local conditions such as temperature and density. The notes assume isotropic spontaneous emission and use the same line profile for spontaneous emission and absorption, citing Rybicki and Lightman, p. 30.

Use $d\energy{I}_{\signal{\nu}}/d\mechanical{s}=-\energy{\alpha}_{\signal{\nu}}\energy{I}_{\signal{\nu}}+\energy{j}_{\signal{\nu}}$. Spontaneous emission gives

$$
\energy{j}_{\signal{\nu}}=\frac{\energy{\epsilon}_{\signal{\nu}}}{4\pi}
=\frac{h\signal{\nu}_{\ell u}}{4\pi}\mechanical{n}_u\energy{A}_{u\to\ell}\phi(\signal{\nu}),
\qquad
\signal{\nu}_{\ell u}=\frac{\energy{E}_u-\energy{E}_\ell}{h}.
$$

Here $\mechanical{n}_u$ is the number of electrons in the upper state per unit volume. The number of photoabsorptions per unit time is $N_\ell\energy{B}_{\ell\to u}\langle\energy{J}\rangle$. In a particular direction, the absorption term is

$$
\left.\frac{d\energy{I}_{\signal{\nu}}}{d\mechanical{s}}\right|_{\mathrm{abs}}
=-\frac{h\signal{\nu}_{\ell u}}{4\pi}\mechanical{n}_\ell
\energy{B}_{\ell\to u}\phi(\signal{\nu})\energy{I}_{\signal{\nu}}
=-\energy{\alpha}_{\signal{\nu}}^{\mathrm{abs}}\energy{I}_{\signal{\nu}}.
$$

##### Stimulated emission as negative absorption

The stimulated emission rate is $N_u\energy{B}_{u\to\ell}\langle\energy{J}\rangle$. Its intensity contribution is

$$
\left.\frac{d\energy{I}_{\signal{\nu}}}{d\mechanical{s}}\right|_{\mathrm{stim}}
=\frac{h\signal{\nu}_{\ell u}}{4\pi}\mechanical{n}_u
\energy{B}_{u\to\ell}\phi(\signal{\nu})\energy{I}_{\signal{\nu}}.
$$

Because the term is proportional to the radiation field, include it as negative absorption. The total absorption coefficient is

$$
\energy{\alpha}_{\signal{\nu}}
=\energy{\alpha}_{\signal{\nu}}^{\mathrm{photoabs}}
-\energy{\alpha}_{\signal{\nu}}^{\mathrm{stim}}
=\frac{h\signal{\nu}_{\ell u}}{4\pi}\phi(\signal{\nu})
\mechanical{n}_\ell\energy{B}_{\ell\to u}
\left(1-\frac{\mechanical{n}_u\energy{B}_{u\to\ell}}{\mechanical{n}_\ell\energy{B}_{\ell\to u}}\right).
$$

The photoabsorption term alone is called the absorption coefficient uncorrected for stimulated emission. The transfer equation for the two-level atom is

$$
\frac{d\energy{I}_{\signal{\nu}}}{d\mechanical{s}}
=-\frac{h\signal{\nu}_{\ell u}}{4\pi}\phi(\signal{\nu})
(\mechanical{n}_\ell\energy{B}_{\ell\to u}-\mechanical{n}_u\energy{B}_{u\to\ell})\energy{I}_{\signal{\nu}}
+\frac{h\signal{\nu}_{\ell u}}{4\pi}\mechanical{n}_u\energy{A}_{u\to\ell}\phi(\signal{\nu}).
$$

##### Thermal line source function

Dividing spontaneous emissivity by net absorption and using the Einstein relation gives

$$
\energy{S}_{\signal{\nu}}
=\frac{\mechanical{n}_u\energy{A}_{u\to\ell}}
{\mechanical{n}_\ell\energy{B}_{\ell\to u}-\mechanical{n}_u\energy{B}_{u\to\ell}}
=\frac{2h\signal{\nu}_{\ell u}^3/c^2}
{\dfrac{\mechanical{n}_\ell\energy{B}_{\ell\to u}}{\mechanical{n}_u\energy{B}_{u\to\ell}}-1}.
$$

Thermal populations give $\mechanical{n}_\ell/\mechanical{n}_u=(g_\ell/g_u)e^{h\signal{\nu}_{\ell u}/(k_{\mathrm B}\thermal{T})}$. This leads to $\energy{S}_{\signal{\nu}}=\energy{B}_{\signal{\nu}_{\ell u}}(\thermal{T})$, approximating $\signal{\nu}\simeq\signal{\nu}_{\ell u}$ across the line. This is the thermal-radiation condition. The resulting emergent intensity also depends on optical depth.

$$
\energy{\alpha}_{\signal{\nu}}
=\frac{h\signal{\nu}_{\ell u}}{4\pi}
\phi(\signal{\nu})\mechanical{n}_\ell\energy{B}_{\ell\to u}
\left[1-e^{-h\signal{\nu}_{\ell u}/(k_{\mathrm B}\thermal{T})}\right].
$$

The handwritten lower-to-upper population ratio reverses the exponent sign, and the boxed absorption coefficient omits $\mechanical{n}_\ell$. The expressions here follow from the Boltzmann and transfer equations above.

## Source

Kyle Kabasares, *Radiative Transfer in Astrophysics (Physics 240C, UC Irvine 2019)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{E}$ | $\unit{erg}$ | Radiant energy | Energy emitted by the source. |
| $\energy{I}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot sr^{-1}\cdot Hz^{-1}}$ | Specific intensity | Radiated power per unit projected area, solid angle, and frequency. |
| $\energy{I}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot sr^{-1}}$ | Frequency-integrated intensity | Specific intensity integrated over frequency. |
| $\energy{j}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot Hz^{-1}\cdot sr^{-1}\cdot cm^{-3}}$ | Emission coefficient | Specific intensity added by spontaneous emission per unit path length. |
| $\mechanical{n}$ | $\unit{cm^{-3}}$ | Number density | Number of absorbers per unit volume. |
| $\energy{\alpha}_{\signal{\nu}}$ | $\unit{cm^{-1}}$ | Absorption coefficient | Fractional loss of specific intensity per unit path length. |
| $\energy{J}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot sr^{-1}\cdot Hz^{-1}}$ | Mean intensity | Specific intensity averaged over all directions. |
| $\alpha$ | $1$ | Fine-structure constant | Dimensionless electromagnetic coupling constant. |
| $\energy{S}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}}$ | Incident energy flux | Electromagnetic energy incident per unit time and area. |
| $\energy{U}$ | $\unit{erg\cdot cm^{-3}}$ | Radiation energy density | Electromagnetic energy per unit volume in Gaussian CGS. |
| $\thermal{T}$ | $\unit{K}$ | Brightness temperature | Temperature inferred from the intensity in the Rayleigh–Jeans limit in this section. |
| $\energy{\epsilon}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-3}\cdot Hz^{-1}}$ | Volume emissivity | Radiated power per unit volume and frequency, integrated over direction. |
| $\energy{S}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot sr^{-1}\cdot Hz^{-1}}$ | Source function | Ratio of the emission coefficient to the absorption coefficient. |
| $\energy{B}_{\signal{\nu}}(\thermal{T})$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot sr^{-1}\cdot Hz^{-1}}$ | Planck function | Specific intensity of equilibrium blackbody radiation. |
| $\energy{A}_{u\to\ell}$ | $\unit{s^{-1}}$ | Einstein spontaneous emission coefficient | Decay probability per unit time from the upper state to the lower state. |
| $\energy{B}_{\ell\to u}$ | $\unit{cm^2\cdot sr\cdot Hz\cdot erg^{-1}}$ | Einstein absorption coefficient | Upward transition rate per unit mean specific intensity. |
| $\energy{B}_{u\to\ell}$ | $\unit{cm^2\cdot sr\cdot Hz\cdot erg^{-1}}$ | Einstein stimulated emission coefficient | Stimulated downward transition rate per unit mean specific intensity. |
| $\phi(\signal{\nu})$ | $\unit{Hz^{-1}}$ | Normalized line profile | Frequency distribution of a line, normalized to unit integral. |
