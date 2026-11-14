---
title: "Thermal bremsstrahlung and cluster hydrostatic equilibrium"
---

> [!TLDR]
> Use free–free emission and hydrostatic balance to connect X-ray spectra with plasma conditions and cluster masses.

## Worked lecture material

##### Continuum emission from thermal bremsstrahlung

**Thermal bremsstrahlung**, or **free–free emission**, is radiation from a free electron accelerated in the Coulomb field of an ion (Rybicki and Lightman, chapter 5). The discussion assumes the nonrelativistic limit, with $h\signal{\nu}\ll\mechanical{m}_ec^2$.

![[Kyle Kabasares - Radiative Transfer - Free–free encounter.png|**Fig. 33** An electron initially moving at speed $v_0$ passes a much heavier ion with impact parameter $b$.]]

Neglecting the recoil of the heavy ion, conservation of energy gives

$$
\frac{1}{2}\mechanical{m}_e\mechanical{v}_0^2
=h\signal{\nu}+\frac{1}{2}\mechanical{m}_e\mechanical{v}^2,
$$

where $\mechanical{v}_0$ and $\mechanical{v}$ are the initial and final electron speeds. Larmor's formula gives $\energy{L}=d\energy{E}/dt=2\electric{e}^2\mechanical{a}^2/(3c^3)$.

In the **impulse approximation**, take the trajectory to be straight and the interaction to be appreciable over $\Delta t\simeq\mechanical{b}/\mechanical{v}_0$. At closest approach, $\mechanical{m}_e\mechanical{a}=-Z\electric{e}^2/\mechanical{b}^2$ with the outward direction taken as positive. Therefore

$$
\frac{d\energy{E}}{dt}\simeq
\frac{2Z^2\electric{e}^6}{3\mechanical{m}_e^2c^3\mechanical{b}^4},
\qquad
\Delta\energy{E}(\mechanical{b})\simeq
\frac{2Z^2\electric{e}^6}{3\mechanical{m}_e^2c^3}
\frac{1}{\mechanical{v}_0\mechanical{b}^3}.
$$

In the impulse approximation, $d\energy{E}/dt\simeq\Delta\energy{E}(\mechanical{b})/\Delta t=\Delta\energy{E}(\mechanical{b})/(\mechanical{b}/\mechanical{v}_0)$.

##### Free–free emission from a plasma

Let $\mechanical{n}_e$ and $\mechanical{n}_i$ be the electron and ion number densities. The incident electron number flux is $\mechanical{n}_e\mechanical{v}_0$. In time $dt$, $\mechanical{n}_e\mechanical{v}_0\,dt$ electrons arrive per unit area. The energy radiated per unit area by encounters at impact parameter $\mechanical{b}$ is obtained by multiplying this fluence by the radiated energy per encounter, $\Delta\energy{E}(\mechanical{b})$.

There are $\mechanical{n}_i\,d\mechanical{V}$ ion targets in volume $d\mechanical{V}$. For each one, impact parameters between $\mechanical{b}$ and $\mechanical{b}+d\mechanical{b}$ occupy an annulus of area $2\pi\mechanical{b}\,d\mechanical{b}$.

![[Kyle Kabasares - Radiative Transfer - Impact parameter annulus.png|**Fig. 34** The annulus represents the cross-sectional area for encounters in the indicated impact-parameter interval.]]

The emitted energy is

$$
d\energy{E}
=(\mechanical{n}_i\,d\mechanical{V})
(2\pi\mechanical{b}\,d\mechanical{b})
(\mechanical{n}_e\mechanical{v}_0\,dt)
\Delta\energy{E}(\mechanical{b}).
$$

The lecture reviews the energy radiated per encounter, $\Delta\energy{E}(\mechanical{b})=2Z^2\electric{e}^6/(3\mechanical{m}_e^2c^3\mechanical{v}_0\mechanical{b}^3)$, and the emitted energy from a volume of plasma.

In the impulse approximation, $\Delta t\simeq\mechanical{b}/\mechanical{v}_0$. Use the instantaneous angular rate at closest approach as the characteristic emission frequency.

$$
2\pi\signal{\nu}\simeq\frac{1}{\Delta t}
=\frac{\mechanical{v}_0}{\mechanical{b}},
\qquad
|d\signal{\nu}|=\frac{\mechanical{v}_0}{2\pi\mechanical{b}^2}|d\mechanical{b}|.
$$

![[Kyle Kabasares - Radiative Transfer - Angular rate at closest approach.png|**Fig. 35** The electron moves along the straight trajectory. At closest approach the line to the ion rotates at rate $v_0/b$.]]

Substitute the magnitude $|d\mechanical{b}|=(2\pi\mechanical{b}^2/\mechanical{v}_0)|d\signal{\nu}|$ into the annulus factor of the emitted-energy expression.

$$
d\energy{E}=(\mechanical{n}_i\,d\mechanical{V})
\left(2\pi\mechanical{b}\,\frac{2\pi\mechanical{b}^2}{\mechanical{v}_0}\,d\signal{\nu}\right)
(\mechanical{n}_e\mechanical{v}_0\,dt)
\frac{2Z^2\electric{e}^6}{3\mechanical{m}_e^2c^3\mechanical{v}_0\mechanical{b}^3}.
$$

The powers of $\mechanical{b}$ cancel. Define the frequency-specific **volume emissivity** by $\energy{\epsilon}_{\signal{\nu}}=d\energy{E}/(dt\,d\mechanical{V}\,d\signal{\nu})$.

For electrons all incident at speed $\mechanical{v}_0$, the free–free volume emissivity is

$$
\energy{\epsilon}_{\signal{\nu}}
=\mechanical{n}_e\mechanical{n}_i
\frac{8\pi^2Z^2\electric{e}^6}{3\mechanical{m}_e^2c^3\mechanical{v}_0}.
$$

The Maxwellian speed distribution at temperature $\thermal{T}$ is

$$
P(\mechanical{v})\,d\mechanical{v}
=\left(\frac{\mechanical{m}_e}{2\pi k_{\mathrm B}\thermal{T}}\right)^{3/2}
4\pi\mechanical{v}^2
\exp\left(-\frac{\mechanical{m}_e\mechanical{v}^2}{2k_{\mathrm B}\thermal{T}}\right)
d\mechanical{v}.
$$

To average the emissivity, integrate $P(\mechanical{v}_0)/\mechanical{v}_0$ from $\mechanical{v}_{\min}$ to infinity. Energy conservation requires $\mechanical{m}_e\mechanical{v}_0^2/2\ge h\signal{\nu}$, so $\mechanical{v}_{\min}=\sqrt{2h\signal{\nu}/\mechanical{m}_e}$. Set $u=\mechanical{m}_e\mechanical{v}_0^2/(2k_{\mathrm B}\thermal{T})$ and $du=\mechanical{m}_e\mechanical{v}_0\,d\mechanical{v}_0/(k_{\mathrm B}\thermal{T})$ to obtain

$$
\langle\energy{\epsilon}_{\signal{\nu}}\rangle_{\mathrm{MVD}}
=\mechanical{n}_e\mechanical{n}_i
\frac{32\pi^3Z^2\electric{e}^6}{3\mechanical{m}_e^2c^3}
\left(\frac{\mechanical{m}_e}{2\pi k_{\mathrm B}\thermal{T}}\right)^{3/2}
\frac{k_{\mathrm B}\thermal{T}}{\mechanical{m}_e}
\exp\left(-\frac{h\signal{\nu}}{k_{\mathrm B}\thermal{T}}\right).
$$

This is close to the quantum-mechanical result.

##### Free–free cooling function and Gaunt factor

Rearrange the impulse-approximation emissivity as

$$
\langle\energy{\epsilon}_{\signal{\nu}}\rangle_{\mathrm{MVD}}
=\mechanical{n}_e\mechanical{n}_i
\frac{32\pi Z^2\electric{e}^6}{3\mechanical{m}_ec^3}
\left(\frac{2\pi}{3k_{\mathrm B}\mechanical{m}_e}\right)^{1/2}
\frac{\exp[-h\signal{\nu}/(k_{\mathrm B}\thermal{T})]}{\sqrt{\thermal{T}}}
\left(\frac{3\pi}{2\sqrt{3}}\right).
$$

The quantum-mechanical result replaces the final factor by the velocity-averaged free–free **Gaunt factor** $\bar{g}_{\mathrm{ff}}$, which is of order unity. Define the spectral cooling function by $\langle\energy{\epsilon}_{\signal{\nu}}\rangle_{\mathrm{MVD}}=\mechanical{n}_e\mechanical{n}_i\energy{\Lambda}_{\signal{\nu}}^{\mathrm{ff}}(\thermal{T})$. Its CGS numerical form, with $\thermal{T}$ in kelvin, is

$$
\energy{\Lambda}_{\signal{\nu}}^{\mathrm{ff}}(\thermal{T})
=6.8\times10^{-38}Z^2\thermal{T}^{-1/2}
\exp\left(-\frac{h\signal{\nu}}{k_{\mathrm B}\thermal{T}}\right)
\bar{g}_{\mathrm{ff}}
\quad[\unit{erg\cdot cm^3\cdot s^{-1}\cdot Hz^{-1}}].
$$

See Rybicki and Lightman, equation 5.14b. The expression is for a plasma with electrons and one ion species of charge $Z\electric{e}$, with $Z=1$ for pure hydrogen. For an ion species $i$ in a mixture, write its density as $\mechanical{n}_i=\mechanical{n}_{\mathrm H}(\mechanical{n}_i/\mechanical{n}_{\mathrm H})$.

For isotropic emission the per-steradian emission coefficient is $\energy{j}_{\signal{\nu}}^{\mathrm{ff}}=\energy{\epsilon}_{\signal{\nu}}^{\mathrm{ff}}/(4\pi)$. The handwritten line places the thermally averaged emissivity beneath the numerator as an annotation.

The frequency-integrated free–free emissivity is $\energy{\epsilon}_{\mathrm{ff}}=\int\energy{\epsilon}_{\signal{\nu}}^{\mathrm{ff}}\,d\signal{\nu}$. The bolometric scaling is $\energy{\epsilon}_{\mathrm{ff}}\propto\mechanical{n}_e\mechanical{n}_i\sqrt{\thermal{T}}$ (Rybicki and Lightman, equation 5.15b), as used in the SZ discussion.

##### Thermal bremsstrahlung in galaxy clusters

An illustrative cluster mass budget is approximately $75\%$ dark matter, $20\%$ hot intracluster medium (ICM), and $5\%$ galaxies and stars. The ICM temperature is roughly $\quantity{10^7}{K}$ to $\quantity{10^8}{K}$, corresponding to $k_{\mathrm B}\thermal{T}\sim\quantity{1–10}{keV}$. Its thermal bremsstrahlung is predominantly in the X-ray band, with wavelengths of order $\quantity{1–10}{\mathring{A}}$.

The hot ICM is nearly fully ionized. For Coulomb interactions, the electron mean free path is approximately

$$
\mechanical{\ell}_e\simeq\quantity{23}{kpc}
\left(\frac{\thermal{T}}{\quantity{10^8}{K}}\right)^2
\left(\frac{\mechanical{n}_e}{\quantity{10^{-3}}{cm^{-3}}}\right)^{-1}.
$$

This is comparable to the radius of a galaxy. Faraday rotation measured at radio wavelengths gives typical magnetic fields of order $\magnetic{B}\sim\quantity{1}{\mu G}$.

The gyroradius of a particle of mass $\mechanical{m}$ and charge magnitude $Z\electric{e}$ in the hot ICM is estimated as

$$
\mechanical{r}_g\simeq
\frac{\quantity{3.1\times10^8}{cm}}{Z}
\left(\frac{\thermal{T}}{\quantity{10^8}{K}}\right)^{1/2}
\left(\frac{\mechanical{m}}{\mechanical{m}_e}\right)^{1/2}
\left(\frac{\magnetic{B}}{\quantity{1}{\mu G}}\right)^{-1}.
$$

This is small compared with cluster scales. The notes discuss a fluid description with an isotropic velocity-dispersion tensor and mention research on the heat-flux-driven buoyancy instability (HBI) and the magnetothermal instability (MTI).

Could the hot ICM have multiple temperatures at one radius? Electron–electron collisions establish equilibrium on a timescale

$$
t_{\mathrm{eq}}(e,e)\simeq\quantity{3.3\times10^5}{yr}
\left(\frac{\thermal{T}}{\quantity{10^8}{K}}\right)^{3/2}
\left(\frac{\mechanical{n}_e}{\quantity{10^{-3}}{cm^{-3}}}\right)^{-1}.
$$

For electron–proton collisions the notes estimate $t_{\mathrm{eq}}(e,p)\simeq1870\,t_{\mathrm{eq}}(e,e)$ and quote a timescale of order $\quantity{10^9}{yr}$. They refer to Lyman Spitzer's *Physics of Fully Ionized Gases* and use a Maxwellian velocity distribution with a single local kinetic temperature.

The electron thermal pressure is

$$
\mechanical{P}_{\mathrm{thermal}}=\mechanical{n}_e k_{\mathrm B}\thermal{T}
\simeq\quantity{10^{-11}}{dyn\cdot cm^{-2}}
\left(\frac{\mechanical{n}_e}{\quantity{10^{-3}}{cm^{-3}}}\right)
\left(\frac{\thermal{T}}{\quantity{10^8}{K}}\right).
$$

The Gaussian CGS magnetic pressure is

$$
\mechanical{P}_{\mathrm{mag}}=\frac{\magnetic{B}^2}{8\pi}
\simeq\quantity{4\times10^{-14}}{dyn\cdot cm^{-2}}
\left(\frac{\magnetic{B}}{\quantity{1}{\mu G}}\right)^2.
$$

At the fiducial ICM parameters it is much smaller than the thermal pressure. The lecture treats the hot ICM as a monatomic ideal gas.

The lecture reviews the short mean free path relative to the cluster size, short electron–electron collision time, and weak magnetic pressure as reasons for the simple gas model. The sound crossing time over a distance $\mechanical{D}$ is

$$
t_s=\frac{\mechanical{D}}{\mechanical{c}_s}
\simeq\quantity{6.6\times10^8}{yr}
\left(\frac{\thermal{T}}{\quantity{10^8}{K}}\right)^{-1/2}
\left(\frac{\mechanical{D}}{\unit{Mpc}}\right).
$$

The ICM can relax if it has experienced no major merger over about a gigayear. The lecture also recalls $\langle\energy{\epsilon}_{\signal{\nu}}\rangle=\mechanical{n}_e\mechanical{n}_i\energy{\Lambda}_{\signal{\nu}}(\thermal{T})$, where $\energy{\Lambda}_{\signal{\nu}}\propto\thermal{T}^{-1/2}e^{-h\signal{\nu}/(k_{\mathrm B}\thermal{T})}$ in the free–free approximation.

##### Hydrostatic equilibrium

Consider a fluid element of pressure $\mechanical{P}$ and density $\mechanical{\rho}$ occupying a small box of volume $d\mechanical{V}=dx\,dy\,dz$. Assume that pressure and gravity are the only forces on the element.

![[Kyle Kabasares - Radiative Transfer - Pressure on a fluid element.png|**Fig. 36** The pressures on the two faces normal to $x$ act in opposite directions.]]

Since pressure is force per area, the net $x$ component from the two faces is

$$
(\vec{\mechanical{F}}_P)_x
=\bigl[\mechanical{P}(x,y,z)-\mechanical{P}(x+dx,y,z)\bigr]\,dy\,dz
=-\frac{\partial\mechanical{P}}{\partial x}\,d\mechanical{V}
$$

to first order. Applying the same argument in the other two directions gives

$$
(\vec{\mechanical{F}}_P)_y=-\frac{\partial\mechanical{P}}{\partial y}\,d\mechanical{V},
\qquad
(\vec{\mechanical{F}}_P)_z=-\frac{\partial\mechanical{P}}{\partial z}\,d\mechanical{V}.
$$

Combining the pressure forces gives

$$
\vec{\mechanical{F}}_P
=-\left(\frac{\partial\mechanical{P}}{\partial x}\hat{i}
+\frac{\partial\mechanical{P}}{\partial y}\hat{j}
+\frac{\partial\mechanical{P}}{\partial z}\hat{k}\right)d\mechanical{V}
=-\nabla\mechanical{P}\,d\mechanical{V}.
$$

The fluid element has mass $d\mechanical{m}=\mechanical{\rho}\,d\mechanical{V}$. With $\energy{U}_g$ its gravitational potential energy and $\mechanical{\Phi}$ the gravitational potential per unit mass, its gravitational force is

$$
\vec{\mechanical{F}}_g=-\nabla\energy{U}_g=-d\mechanical{m}\,\nabla\mechanical{\Phi}.
$$

The local equilibrium condition is $\vec{\mechanical{F}}_P+\vec{\mechanical{F}}_g=0$, so the pressure force balances gravity:

$$
\nabla\mechanical{P}=-\mechanical{\rho}\nabla\mechanical{\Phi}.
$$

In spherical symmetry, this becomes

$$
\frac{d\mechanical{P}_{\mathrm{gas}}}{d\mechanical{r}}
=-\mechanical{\rho}_{\mathrm{gas}}\frac{G\mechanical{M}(<\mechanical{r})}{\mechanical{r}^2},
$$

where $\mechanical{M}(<\mechanical{r})$ is the cumulative mass of all components within radius $\mechanical{r}$.

The ideal-gas pressure is

$$
\mechanical{P}_{\mathrm{gas}}=\mechanical{n}_{\mathrm{gas}} k_{\mathrm B}\thermal{T}
=\frac{\mechanical{\rho}_{\mathrm{gas}}}{\mu\mechanical{m}_a}k_{\mathrm B}\thermal{T},
$$

where $\mu$ is the mean molecular weight in units of the atomic mass unit $\mechanical{m}_a$. For fully ionized gas of solar abundance, the notes take $\mu=0.615$.

X-ray observations can in principle measure the gas density and temperature profiles. Substituting these profiles into hydrostatic equilibrium yields the enclosed mass $\mechanical{M}(<\mechanical{r})$.

![[Kyle Kabasares - Radiative Transfer - Virgo cluster X-ray image.png|**Fig. 37** ROSAT PSPC X-ray image of the Virgo cluster. The slide credits Böhringer et al. (1994), Nature 368, p. 828.]]
![[Kyle Kabasares - Radiative Transfer - Two-keV bremsstrahlung spectrum.png|**Fig. 38** A thermal bremsstrahlung spectrum with a knee at an energy of order $k_{\mathrm B}T=2\,\mathrm{keV}$ and an exponential falloff at higher energy. The slide cites Niel Brandt's Astronomy 485 course.]]

##### Thermal spectra and cluster X-ray observations

Thermal bremsstrahlung and blackbody radiation can both have the Planck function as the source function. Their observed spectra differ because the emerging intensity also depends on optical depth.

![[Kyle Kabasares - Radiative Transfer - Bremsstrahlung and blackbody spectra.png|**Fig. 39** A thermal bremsstrahlung spectrum and a blackbody spectrum at the same temperature scale. The slide cites Niel Brandt's Astronomy 485 course.]]
![[Kyle Kabasares - Radiative Transfer - Spectrum of a solar-abundance plasma.png|**Fig. 40** Emission lines on the continuum of a solar-abundance plasma at $k_{\mathrm B}T=0.4\,\mathrm{keV}$, or about $4.6\times10^6\,\mathrm{K}$. The handwritten annotation notes a density much lower than that of the solar corona. The slide cites Niel Brandt's Astronomy 485 course.]]
![[Kyle Kabasares - Radiative Transfer - Chandra spectrum of NGC 6482.png|**Fig. 41** Chandra spectrum of NGC 6482 at projected radii of 6–10 kpc, with the particle background labeled. Photoelectric absorption and the detector bandpass cutoff suppress the low-energy counts.]]

![[Kyle Kabasares - Radiative Transfer - Suzaku spectrum of NGC 6482.png|**Fig. 42** Suzaku spectrum of NGC 6482 at projected radii of 25–75 kpc. The handwritten annotation notes Suzaku's lower spatial resolution.]]
![[Kyle Kabasares - Radiative Transfer - Chandra and Suzaku radial profiles.png|**Fig. 43** NGC 6482 radial X-ray surface brightness and temperature profiles from Chandra and Suzaku. Both panels mark $r_{2500}$.]]
![[Kyle Kabasares - Radiative Transfer - NGC 6482 enclosed mass components.png|**Fig. 44** Enclosed mass in the fossil group NGC 6482 in the fiducial model. The total includes an NFW dark matter halo, stars with a constant K-band mass-to-light ratio, and gas.]]

![[Kyle Kabasares - Radiative Transfer - RXJ 1159+5531 radial profiles.png|**Fig. 45** Radial X-ray profiles of the fossil cluster RXJ 1159+5531. The right panel shows the gas temperature in keV.]]
![[Kyle Kabasares - Radiative Transfer - Chandra images of Perseus.png|**Fig. 46** Cavities and ripples in Chandra images of Perseus illustrate active galactic nucleus feedback. The slide asks how gas motions affect the hydrostatic equilibrium assumption. The notes describe Perseus as the brightest cluster in the X-ray sky.]]
![[Kyle Kabasares - Radiative Transfer - Hitomi observations of Perseus.png|**Fig. 47** Hitomi observing fields superimposed on an image of Perseus. The scale bar is one arcminute, or 21 kpc. The slide cites the Hitomi Collaboration (2018), PASJ 70, 9.]]

![[Kyle Kabasares - Radiative Transfer - Hitomi microcalorimeter spectra.png|**Fig. 48** High-resolution Fe He-alpha spectra from Hitomi illustrate how Doppler widths and shifts can be measured.]]
![[Kyle Kabasares - Radiative Transfer - Perseus gas velocity and dispersion.png|**Fig. 49** Maps of bulk velocity and velocity dispersion in Perseus. The slide estimates nonthermal pressure support below 10 percent.]]

The slide estimates the ratio of gas kinetic energy to thermal energy from the velocity dispersion $\mechanical{\sigma}_v$ and bulk speed $\mechanical{v}_{\mathrm{bulk}}$.

$$
\frac{\energy{\epsilon}_{\mathrm{kin}}}{\energy{\epsilon}_{\mathrm{therm}}}
=\frac{\mu\mechanical{m}_a(3\mechanical{\sigma}_v^2+\mechanical{v}_{\mathrm{bulk}}^2)}
{3k_{\mathrm B}\thermal{T}}
\sim0.02\text{–}0.07.
$$

The notes remark on the loss of the satellites and its impact on graduate students. Gravitating mass and dark matter profiles inferred with Chandra and XMM generally agree with $\Lambda\mathrm{CDM}$ predictions, approximately following an NFW profile, with questions remaining at small radii. The notes identify the accuracy of the hydrostatic equilibrium approximation as a limitation and begin discussing turbulent line broadening and Doppler shifts.

## Source

Kyle Kabasares, *Radiative Transfer in Astrophysics (Physics 240C, UC Irvine 2019)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{L}$ | $\unit{erg\cdot s^{-1}}$ | Luminosity | Total radiant energy emitted per unit time. |
| $\energy{E}$ | $\unit{erg}$ | Radiant energy | Energy emitted by the source. |
| $t$ | $\unit{s}$ | Time | Elapsed time used to define the emission rate. |
| $\energy{j}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot Hz^{-1}\cdot sr^{-1}\cdot cm^{-3}}$ | Emission coefficient | Specific intensity added by spontaneous emission per unit path length. |
| $\mechanical{n}$ | $\unit{cm^{-3}}$ | Number density | Number of absorbers per unit volume. |
| $\energy{U}$ | $\unit{erg\cdot cm^{-3}}$ | Radiation energy density | Electromagnetic energy per unit volume in Gaussian CGS. |
| $y$ | $1$ | Compton parameter | Mean fractional energy change per scattering times the mean scattering count, using the convention in this section. |
| $\thermal{T}$ | $\unit{K}$ | Brightness temperature | Temperature inferred from the intensity in the Rayleigh–Jeans limit in this section. |
| $\energy{\epsilon}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-3}\cdot Hz^{-1}}$ | Volume emissivity | Radiated power per unit volume and frequency, integrated over direction. |
| $\energy{\Lambda}_{\signal{\nu}}^{\mathrm{ff}}$ | $\unit{erg\cdot cm^3\cdot s^{-1}\cdot Hz^{-1}}$ | Free–free spectral cooling function | Thermally averaged volume emissivity divided by the electron and ion densities. |
| $b$ | $\unit{cm\,s^{-1}}$ | Doppler parameter | Thermal speed scale for the line profile. |
