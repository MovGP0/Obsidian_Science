---
title: "Synchrotron populations, self-absorption, and equipartition"
---

> [!TLDR]
> Combine emission from an electron distribution and examine its spectrum, polarization, absorption, and inferred field strength.

## Worked lecture material

##### Synchrotron emission from an electron population

The spectrum of a single particle peaks near the critical frequency. The notes mention that high-energy cosmic-ray protons and electrons incident on Earth have power-law particle spectra. They then motivate the inverse problem for synchrotron radiation: given a power-law radiation spectrum $P(\signal{\omega})\propto\signal{\omega}^{-s}$, what electron energy distribution could produce it? Rybicki and Lightman, section 6.3, gives another derivation.

Let $\energy{\epsilon}(\signal{\omega})=\int\energy{j}(\signal{\omega})\,d\Omega$ be the synchrotron power per unit volume and angular-frequency interval. The notes write

$$
\energy{\epsilon}(\signal{\omega})\,d\signal{\omega}
=\left(-\frac{d\energy{E}}{dt}\right)\mechanical{n}(\energy{E})\,d\energy{E}.
$$

Here $\mechanical{n}(\energy{E})\,d\energy{E}$ counts the electrons per unit volume between energies $\energy{E}$ and $\energy{E}+d\energy{E}$. The factor $-d\energy{E}/dt$ is the single-electron synchrotron luminosity, equal to the rate of loss of electron energy. The frequency–energy correspondence in this approximation is developed on the following page.

The lecture repeats $\energy{\epsilon}(\signal{\omega})\,d\signal{\omega}=(-d\energy{E}/dt)\mechanical{n}(\energy{E})\,d\energy{E}$. The factor $\mechanical{n}(\energy{E})\,d\energy{E}$ counts electrons per unit volume in the specified energy interval, and $\energy{L}_{\mathrm{sync}}$ is the power radiated by a single electron of energy $\energy{E}$.

##### Review of homework problem 3

The recession speed is $\mechanical{v}_r=\quantity{6000}{km\cdot s^{-1}}$. Writing $H_0=\quantity{100h}{km\cdot s^{-1}\cdot Mpc^{-1}}$, the Hubble-law distance is

$$
\mechanical{D}=\frac{\mechanical{v}_r}{H_0}=\quantity{60h^{-1}}{Mpc}.
$$

![[Kyle Kabasares - Radiative Transfer - Homework source sketch.png|**Fig. 70** Sketch of the source used in the homework review.]]
![[Kyle Kabasares - Radiative Transfer - Homework X-ray continuum.png|**Fig. 71** The free–free X-ray luminosity scales as $n_en_i$ and turns down at high photon energy through the exponential thermal factor.]]

The bolometric free–free volume emissivity is $1.4\times10^{-27}\thermal{T}^{1/2}\mechanical{n}_e\mechanical{n}_i Z^2\bar{g}$ in CGS with temperature in kelvin and densities in $\unit{cm^{-3}}$. The emissivity unit is $\unit{erg\cdot s^{-1}\cdot cm^{-3}}$. Integrating over the volume gives luminosity. The homework results listed are

$$
\begin{aligned}
\mechanical{n}_e&=\quantity{2\times10^{-3}h^{1/2}}{cm^{-3}},\\
\mechanical{M}_{\mathrm{gas}}&=3\times10^{13}h^{-5/2}\mechanical{M}_\odot,\\
\energy{E}_{\mathrm{th}}&=\quantity{1.5\times10^{63}h^{-5/2}}{erg},\\
t_{\mathrm{cool}}&=\quantity{4.7\times10^{10}h^{-1/2}}{yr}.
\end{aligned}
$$

The hydrostatic equation $d\mechanical{P}/d\mechanical{r}=-\mechanical{\rho}_{\mathrm{gas}}G\mechanical{M}(<\mechanical{r})/\mechanical{r}^2$ with the ideal-gas pressure gives

$$
\mechanical{M}_{\mathrm{tot}}(<\mechanical{r})
=-\frac{k_{\mathrm B}\thermal{T}\mechanical{r}}{G\mu\mechanical{m}_a}
\left(\frac{d\ln\mechanical{\rho}_{\mathrm{gas}}}{d\ln\mechanical{r}}
+\frac{d\ln\thermal{T}}{d\ln\mechanical{r}}\right).
$$

The handwritten scaling has ordinary radial derivatives in the bracket and only one power of radius outside. The equivalent expression uses logarithmic radial derivatives as above. At fixed angular radius, $\mechanical{M}_{\mathrm{tot}}\propto h^{-1}$, so the gas fraction $f_{\mathrm{gas}}=\mechanical{M}_{\mathrm{gas}}/\mechanical{M}_{\mathrm{tot}}\simeq f_{\mathrm{baryon}}$ scales as $h^{-3/2}$.

Flux falls as inverse distance squared. Surface brightness is distance-independent in Euclidean geometry and dims cosmologically by $(1+z)^{-4}$ for bolometric radiation.

##### Synchrotron emission

![[Kyle Kabasares - Radiative Transfer - Synchrotron spectrum lecture recap.png|**Fig. 72** The lecture returns to the single-particle spectrum and its low- and high-frequency asymptotes.]]
![[Kyle Kabasares - Radiative Transfer - Circular orbit beaming recap.png|**Fig. 73** The observer samples a small part of the orbit as the beam of angular radius $\theta\sim1/\gamma$ sweeps past.]]

The notes recall $\Delta\signal{\omega}\,\Delta t_{\mathrm{pulse}}\gtrsim1$ and the estimate $\Delta t_{\mathrm{pulse}}\sim1/(\gamma^2\signal{\omega}_B)\sim1/(\gamma^3\signal{\omega}_B^{\mathrm{rel}})$ up to numerical factors for a perpendicular orbit. The last line of the sketch shows these timescales beneath the bandwidth inequality.

##### Power-law electron energy distribution

To estimate the origin of a power-law synchrotron spectrum, approximate each electron's emission as concentrated near $\signal{\omega}\simeq\signal{\omega}_c$. At fixed pitch angle, $\signal{\omega}_c=(3/2)\gamma^2\signal{\omega}_B\sin\alpha$, where $\signal{\omega}_B=\electric{e}\magnetic{B}/(\mechanical{m}_ec)$ is independent of electron energy. Thus

$$
\gamma\propto\left(\frac{\signal{\omega}}{\magnetic{B}}\right)^{1/2},\qquad
\energy{E}=\gamma\mechanical{m}_ec^2\propto
\left(\frac{\signal{\omega}}{\magnetic{B}}\right)^{1/2},\qquad
d\energy{E}\propto\frac{d\signal{\omega}}{\sqrt{\signal{\omega}\magnetic{B}}}.
$$

For $\mechanical{v}\simeq c$, the radiated power $\energy{L}_{\mathrm{sync}}=(4/3)\gamma^2(\mechanical{v}/c)^2\mechanical{\sigma}_{\mathrm{T}}c\energy{U}_B$ scales as $\gamma^2\magnetic{B}^2\propto\signal{\omega}\magnetic{B}$. Assume the electron energy distribution is a power law over $\energy{E}_1\le\energy{E}\le\energy{E}_2$,

$$
\mechanical{n}(\energy{E})\,d\energy{E}=C\energy{E}^{-p}\,d\energy{E}.
$$

In the characteristic-frequency approximation, $\energy{E}^{-p}\propto(\signal{\omega}/\magnetic{B})^{-p/2}$. Combining the electron power, the energy distribution, and $d\energy{E}/d\signal{\omega}$ gives

$$
\energy{\epsilon}(\signal{\omega})
\propto(\signal{\omega}\magnetic{B})
\left(\frac{\signal{\omega}}{\magnetic{B}}\right)^{-p/2}
(\signal{\omega}\magnetic{B})^{-1/2}
=\signal{\omega}^{-(p-1)/2}\magnetic{B}^{(p+1)/2}.
$$

Here the single-electron luminosity is positive, $\energy{L}_{\mathrm{sync}}=-d\energy{E}/dt$, where $\energy{E}$ denotes the electron's remaining energy. The observed spectral index $s$ in $\energy{\epsilon}(\signal{\omega})\propto\signal{\omega}^{-s}$ therefore gives the electron energy index $p$ through $s=(p-1)/2$.

The emitted spectrum is the superposition of the individual electron spectra. In this approximation, the electron energy distribution determines the shape of the ensemble power law.

![[Kyle Kabasares - Radiative Transfer - Superposition of synchrotron spectra.png|**Fig. 74** Single-particle spectra peak at different photon energies. Their superposition gives the broader power-law spectrum.]]

The spectral slope relation also follows from integrating the full single-electron spectrum. The factor of two between the particle and radiation slope scalings arises from the $\gamma^2$ dependence of the characteristic radiation frequency, which comes from the pulse duration.

##### Synchrotron polarization

Synchrotron radiation is highly polarized (Rybicki and Lightman, section 6.5). In the cyclotron case, a field transverse to the line of sight gives linear polarization, while viewing along the field gives circular polarization. The handedness depends on which side of the orbit is viewed.

Relativistic beaming sweeps emission into the forward direction, including photons emitted transverse to the boost in the electron rest frame. For the circular orbit shown, the forward direction is perpendicular to the magnetic field. The oppositely handed circular components can cancel when combined, leaving linear polarization.

![[Kyle Kabasares - Radiative Transfer - Cyclotron and synchrotron polarization.png|**Fig. 75** The slide compares the un-beamed cyclotron pattern and the forward-beamed synchrotron pattern. It credits Melia (2009), Fig. 5.10.]]

In the symmetric case described in the notes, photon directions parallel and antiparallel to the field in the electron frame contribute opposite circular polarizations. Equal right- and left-circular components cancel, leaving net linear polarization.

The **degree of polarization** $\Pi$ is the polarized intensity divided by the total intensity. For a power-law electron energy distribution $\mechanical{n}(\energy{E})\propto\energy{E}^{-p}$, the fractional linear polarization for an ordered field is

$$
\Pi=\frac{p+1}{p+7/3}.
$$

See Rybicki and Lightman, problem 6.5a. The example takes $p=2.5$, typical of Galactic cosmic rays in the notes, giving $\Pi\simeq72\%$.

To compare synchrotron and bremsstrahlung in the Galaxy at radio frequencies, use $p=2.5$ to estimate $\energy{\epsilon}(\signal{\omega})\propto\signal{\omega}^{-0.8}$ for synchrotron emission, rounding the spectral index $0.75$.

For optically thin thermal bremsstrahlung with $\hbar\signal{\omega}\ll k_{\mathrm B}\thermal{T}$, the spectral emissivity is approximately a constant times $1-\energy{E}_\gamma/(k_{\mathrm B}\thermal{T})$. Synchrotron dominates at low radio frequencies, with the notes giving wavelengths of order $\quantity{50}{cm}$ in the Galaxy. Polarized emission distinguishes the synchrotron component in this comparison.

##### Synchrotron self-absorption

Relativistic electrons moving in a constant magnetic field can absorb synchrotron photons. For $\mechanical{n}(\energy{E})\propto\energy{E}^{-p}$, the absorption coefficient scales as

$$
\energy{\alpha}_{\signal{\nu}}\propto\signal{\nu}^{-(p+4)/2}
$$

(Rybicki and Lightman, equation 6.53). Combining it with $\energy{j}_{\signal{\nu}}\propto\signal{\nu}^{-(p-1)/2}$ gives the source function

$$
\energy{S}_{\signal{\nu}}
=\frac{\energy{j}_{\signal{\nu}}}{\energy{\alpha}_{\signal{\nu}}}
\propto\frac{\signal{\nu}^{-(p-1)/2}}{\signal{\nu}^{-(p+4)/2}}
=\signal{\nu}^{5/2}.
$$

At large optical depth $\energy{I}_{\signal{\nu}}\to\energy{S}_{\signal{\nu}}$. The page ends with a note about discussion of finals.

![[Kyle Kabasares - Radiative Transfer - Synchrotron self-absorption turnover.png|**Fig. 76** The spectrum rises as $\nu^{5/2}$ on the optically thick side and falls as $\nu^{-(p-1)/2}$ on the optically thin side.]]

For power-law electron populations, the optically thick slope $5/2$ is independent of the electron index $p$. The optically thin slope is approximately $-0.8$ for the example $p\simeq2.5$. The notes identify this turnover at radio to millimeter wavelengths in active galactic nuclei (AGN).

##### Estimating magnetic fields via equipartition

Consider a population of electrons with a power-law energy distribution, $\mechanical{n}(\energy{E})\propto\energy{E}^{-p}$. The estimate starts with the total energy in the electrons.

The total energy in the electron population is

$$
\energy{U}_e=\mechanical{V}\int_{\energy{E}_{\min}}^{\energy{E}_{\max}}
\energy{E}\,\mechanical{n}(\energy{E})\,d\energy{E},
$$

where $\mechanical{V}$ is the occupied volume and the integration limits cover the range over which the power law applies. For a fixed observing band, the characteristic-frequency relation gives $\energy{E}\propto\sqrt{\signal{\omega}/\magnetic{B}}$. Changing integration variables with $d\energy{E}\propto d\signal{\omega}/\sqrt{\signal{\omega}\magnetic{B}}$ gives

$$
\energy{U}_e\propto\mechanical{V}
\int_{\signal{\omega}_{\min}}^{\signal{\omega}_{\max}}
\left(\frac{\signal{\omega}}{\magnetic{B}}\right)^{(1-p)/2}
\frac{d\signal{\omega}}{\sqrt{\signal{\omega}\magnetic{B}}}
\propto\mechanical{V}\magnetic{B}^{(p-2)/2}.
$$

The proportionality holds at fixed electron-distribution normalization. The exponent $-p$ is implicit in the handwritten integrand and is needed to obtain its final scaling. From the preceding synchrotron emissivity, $\energy{\epsilon}(\signal{\omega})\propto\signal{\omega}^{-(p-1)/2}\magnetic{B}^{(p+1)/2}$, the luminosity integrated over the observed band is

$$
\energy{L}_{\mathrm{sync}}^{\mathrm{tot}}
=\mechanical{V}\int_{\signal{\omega}_{\min}}^{\signal{\omega}_{\max}}
\energy{\epsilon}(\signal{\omega})\,d\signal{\omega}.
$$

At the same fixed normalization, $\mechanical{V}\propto\energy{L}_{\mathrm{sync}}^{\mathrm{tot}}\magnetic{B}^{-(p+1)/2}$.

Substitute the luminosity relation to eliminate the electron normalization. For fixed observing-band limits,

$$
\energy{U}_e=C_{12}\energy{L}_{\mathrm{sync}}^{\mathrm{tot}}\magnetic{B}^{-3/2},
$$

where the band constant $C_{12}$ depends on $\signal{\omega}_{\min}$, $\signal{\omega}_{\max}$, $p$, and fundamental constants.

Problem set 5 was due June 4, 2019. The handwritten question says “photons,” while the example and the subsequent notation refer to cosmic-ray protons. The notes give $\energy{U}_p\simeq100\energy{U}_e$ for Galactic cosmic rays and $\energy{U}_p\sim\energy{U}_e$ in the Crab Nebula. Write $\energy{U}_p=k\energy{U}_e$. The notes cite arXiv:1702.07523 and give a range $\energy{U}_p\simeq(8\text{–}125)\energy{U}_e$.

For a field filling the whole volume, the sum of particle and field energies is

$$
\energy{U}_{\mathrm{tot}}=\energy{U}_e+\energy{U}_p+\energy{U}_{B,\mathrm{tot}}
=(1+k)C_{12}\energy{L}_{\mathrm{sync}}^{\mathrm{tot}}\magnetic{B}^{-3/2}
+\frac{\magnetic{B}^2}{8\pi}\mechanical{V}.
$$

The handwritten substitution drops $C_{12}$ and groups the field term inside the particle factor. The expression shown follows from the stated sum.

![[Kyle Kabasares - Radiative Transfer - Minimum energy magnetic field.png|**Fig. 77** At fixed synchrotron luminosity the particle energy decreases with increasing field, and the magnetic energy increases. Their sum has a minimum at $B_{\mathrm{eq}}$.]]

The equipartition estimate assumes that the source tends toward the field strength that minimizes the total energy. Set the derivative at fixed source volume and synchrotron luminosity to zero.

$$
0=\left.\frac{d\energy{U}_{\mathrm{tot}}}{d\magnetic{B}}\right|_{\magnetic{B}_{\mathrm{eq}}}
=-\frac{3}{2}(1+k)C_{12}\energy{L}_{\mathrm{sync}}^{\mathrm{tot}}\magnetic{B}_{\mathrm{eq}}^{-5/2}
+\frac{\magnetic{B}_{\mathrm{eq}}\mechanical{V}}{4\pi}.
$$

This gives

$$
\magnetic{B}_{\mathrm{eq}}
=\left[\frac{6\pi}{\mechanical{V}}(1+k)C_{12}\energy{L}_{\mathrm{sync}}^{\mathrm{tot}}\right]^{2/7}.
$$

At that field strength,

$$
\energy{U}_{B,\mathrm{tot}}=\frac{3}{4}(1+k)\energy{U}_e,
\qquad
\energy{U}_{\mathrm{tot}}=\frac{7}{4}(1+k)\energy{U}_e
=\frac{7}{3}\energy{U}_{B,\mathrm{tot}}.
$$

The magnetic field and the particles have nearly equal energies, giving the name **equipartition**.

##### Limits and examples of the equipartition estimate

The notes treat equipartition as an assumption and suggest that turbulent plasma motions might tangle the magnetic field and bring the two energies toward equality. They mention simulations in support of this idea. The proton-to-electron energy ratio $k$ and the volume filling factor are uncertain. If the emitting field fills only a fraction $f\le1$, replace $\mechanical{V}$ by $f\mechanical{V}$.

Historical field estimates for clusters with radio halos or relics, labeled 2004 in the notes:

| Cluster | Equipartition | Faraday rotation |
| --- | ---: | ---: |
| Coma | $\quantity{\sim0.5}{\mu G}$ | $\quantity{\sim0.2}{\mu G}$ |
| A366 | $\quantity{\sim2}{\mu G}$ | $\quantity{\sim3\text{–}5}{\mu G}$ |

The Coma values are annotated as smaller than the central field.

> [!note]
> The Coma value of about $\quantity{0.2}{\mu G}$ in the Faraday rotation column matches the inverse-Compton (hard X-ray) estimate. Faraday rotation measurements of Coma give several microgauss, about $\quantity{5}{\mu G}$ in the center (Bonafede et al. 2010). The cluster name “A366” is reproduced as written and is not verified against the source. The notes next introduce Cygnus A, a double-lobed radio source in a galaxy cluster.

## Source

Kyle Kabasares, *Radiative Transfer in Astrophysics (Physics 240C, UC Irvine 2019)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\omega}$ | $\unit{rad\cdot s^{-1}}$ | Angular frequency | Angular frequency of the synchrotron radiation. |
| $s$ | 1 | Spectral index | Exponent in $\energy{\epsilon}(\signal{\omega})\propto\signal{\omega}^{-s}$. |
| $\energy{\epsilon}(\signal{\omega})$ | $\unit{erg\cdot s^{-1}\cdot cm^{-3}\cdot (rad\cdot s^{-1})^{-1}}$ | Synchrotron emissivity | Synchrotron power per unit volume and angular-frequency interval. |
| $\energy{j}(\signal{\omega})$ | $\unit{erg\cdot s^{-1}\cdot cm^{-3}\cdot sr^{-1}\cdot (rad\cdot s^{-1})^{-1}}$ | Emission coefficient | Synchrotron power per unit volume, solid angle, and angular-frequency interval. |
| $\energy{E}$ | $\unit{erg}$ | Electron energy | Energy of one electron, $\gamma\mechanical{m}_ec^2$. |
| $\mechanical{n}(\energy{E})$ | $\unit{cm^{-3}\cdot erg^{-1}}$ | Electron energy distribution | Number of electrons per unit volume and energy interval. |
| $C$ | $\unit{cm^{-3}\cdot erg^{p-1}}$ | Distribution normalization | Normalization of the power-law electron energy distribution. |
| $p$ | 1 | Electron energy index | Exponent of the power-law electron energy distribution. |
| $\energy{L}_{\mathrm{sync}}$ | $\unit{erg\cdot s^{-1}}$ | Single-electron synchrotron power | Power radiated by one electron of energy $\energy{E}$. |
| $\mechanical{v}_r$ | $\unit{km\cdot s^{-1}}$ | Recession speed | Recession speed of the homework source. |
| $H_0$, $h$ | $\unit{km\cdot s^{-1}\cdot Mpc^{-1}}$, $1$ | Hubble constant | Hubble constant and its dimensionless form. |
| $\mechanical{D}$ | $\unit{Mpc}$ | Distance | Hubble-law distance of the homework source. |
| $\thermal{T}$ | $\unit{K}$ | Gas temperature | Temperature of the hot cluster gas. |
| $\mechanical{n}_e$, $\mechanical{n}_i$ | $\unit{cm^{-3}}$ | Electron and ion number densities | Numbers of electrons and ions per unit volume in the hot gas. |
| $Z$ | 1 | Ion charge number | Charge number of the ions in the free–free emissivity. |
| $\bar{g}$ | 1 | Gaunt factor | Frequency-averaged Gaunt factor of the free–free emission. |
| $\mechanical{M}_{\mathrm{gas}}$, $\mechanical{M}_{\mathrm{tot}}$ | $\unit{g}$ | Gas mass and total mass | Mass of the hot gas and total mass within radius $\mechanical{r}$. |
| $\mechanical{M}_\odot$ | $\unit{g}$ | Solar mass | Mass of the Sun. |
| $\energy{E}_{\mathrm{th}}$ | $\unit{erg}$ | Thermal energy | Thermal energy of the hot gas. |
| $t_{\mathrm{cool}}$ | $\unit{yr}$ | Cooling time | Time for the gas to radiate its thermal energy. |
| $\mechanical{P}$ | $\unit{dyn\cdot cm^{-2}}$ | Gas pressure | Pressure of the hot gas. |
| $\mechanical{r}$ | $\unit{cm}$ | Radius | Distance from the cluster center. |
| $\mechanical{\rho}_{\mathrm{gas}}$ | $\unit{g\cdot cm^{-3}}$ | Gas density | Mass density of the hot gas. |
| $G$ | $\unit{cm^3\cdot g^{-1}\cdot s^{-2}}$ | Gravitational constant | Constant in Newton’s law of gravitation. |
| $k_{\mathrm B}$ | $\unit{erg\cdot K^{-1}}$ | Boltzmann constant | Relates temperature to energy. |
| $\mu$ | 1 | Mean molecular weight | Mean particle mass in atomic mass units. |
| $\mechanical{m}_a$ | $\unit{g}$ | Atomic mass unit | Mass unit for the mean particle mass. |
| $f_{\mathrm{gas}}$, $f_{\mathrm{baryon}}$ | 1 | Gas and baryon fractions | Ratio of gas mass, or baryon mass, to total mass. |
| $z$ | 1 | Redshift | Cosmological redshift of the source. |
| $\gamma$ | 1 | Lorentz factor | Lorentz factor of the electron. |
| $\theta$ | $\unit{rad}$ | Beam angular radius | Angular radius of the relativistic emission cone. |
| $\Delta t_{\mathrm{pulse}}$ | $\unit{s}$ | Pulse duration | Duration of the pulse that the observer receives. |
| $\signal{\omega}_B$ | $\unit{rad\cdot s^{-1}}$ | Angular cyclotron frequency | Angular rate of nonrelativistic gyration in a magnetic field. |
| $\signal{\omega}_c$ | $\unit{rad\cdot s^{-1}}$ | Critical synchrotron angular frequency | Characteristic frequency scale above which the single-electron spectrum decays rapidly. |
| $\alpha$ | $\unit{rad}$ | Pitch angle | Angle between the electron velocity and the magnetic field. |
| $\electric{e}$ | $\unit{statC}$ | Elementary charge | Charge of the electron. |
| $\magnetic{B}$ | $\unit{G}$ | Magnetic field | Magnetic field strength in the emitting region. |
| $\mechanical{m}_e$ | $\unit{g}$ | Electron mass | Mass of the electron. |
| $c$ | $\unit{cm\cdot s^{-1}}$ | Speed of light | Speed of light in vacuum. |
| $\mechanical{v}$ | $\unit{cm\cdot s^{-1}}$ | Electron speed | Speed of the electron. |
| $\mechanical{\sigma}_{\mathrm{T}}$ | $\unit{cm^2}$ | Thomson cross section | Ratio of total scattered power to incident energy flux. |
| $\energy{U}_B$ | $\unit{erg\cdot cm^{-3}}$ | Magnetic energy density | Magnetic field energy per unit volume. |
| $\energy{E}_1$, $\energy{E}_2$, $\energy{E}_{\min}$, $\energy{E}_{\max}$ | $\unit{erg}$ | Energy limits | Lower and upper limits of the power-law electron energy distribution. |
| $\Pi$ | $1$ | Degree of polarization | Polarized intensity divided by total intensity. |
| $\energy{E}_\gamma$ | $\unit{erg}$ | Photon energy | Energy of the emitted photon, $\hbar\signal{\omega}$. |
| $\energy{\alpha}_{\signal{\nu}}$ | $\unit{cm^{-1}}$ | Absorption coefficient | Fractional loss of specific intensity per unit path length. |
| $\signal{\nu}$ | $\unit{Hz}$ | Frequency | Frequency of the radiation. |
| $\energy{j}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot Hz^{-1}\cdot sr^{-1}\cdot cm^{-3}}$ | Emission coefficient per frequency | Synchrotron power per unit volume, solid angle, and frequency. |
| $\energy{S}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot sr^{-1}\cdot Hz^{-1}}$ | Source function | Ratio of the emission coefficient to the absorption coefficient. |
| $\energy{I}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot sr^{-1}\cdot Hz^{-1}}$ | Specific intensity | Radiated power per unit projected area, solid angle, and frequency. |
| $\energy{U}_e$, $\energy{U}_p$ | $\unit{erg}$ | Particle energies | Total energy in the relativistic electrons and in the cosmic-ray protons. |
| $\mechanical{V}$ | $\unit{cm^3}$ | Volume | Volume occupied by the emitting electrons and the field. |
| $\energy{L}_{\mathrm{sync}}^{\mathrm{tot}}$ | $\unit{erg\cdot s^{-1}}$ | Total synchrotron luminosity | Synchrotron luminosity integrated over the observed band. |
| $C_{12}$ | — | Band constant | Constant that relates $\energy{U}_e$ to $\energy{L}_{\mathrm{sync}}^{\mathrm{tot}}\magnetic{B}^{-3/2}$. It depends on the band limits and $p$. |
| $k$ | 1 | Proton-to-electron energy ratio | Ratio $\energy{U}_p/\energy{U}_e$. |
| $\energy{U}_{B,\mathrm{tot}}$, $\energy{U}_{\mathrm{tot}}$ | $\unit{erg}$ | Magnetic and total energy | Total magnetic energy in the volume, and the sum of particle and field energies. |
| $\magnetic{B}_{\mathrm{eq}}$ | $\unit{G}$ | Equipartition magnetic field | Field strength minimizing the total particle and magnetic energy at fixed synchrotron luminosity. |
| $f$ | 1 | Volume filling factor | Fraction of the volume that the emitting field fills. |
