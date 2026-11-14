---
title: "Comptonization and the Sunyaev–Zeldovich effect"
---

> [!TLDR]
> Use the mean energy exchange and the Compton parameter to describe thermal spectral distortion and its application to galaxy clusters.

## Worked lecture material

Dividing the two power equations cancels the photon scattering rate. For ultrarelativistic electrons, $(4/3)\gamma^2\gg1$, so the initial photon energy is small compared with the boosted energy.

$$
\begin{aligned}
\langle\energy{E}_\gamma^f-\energy{E}_\gamma^i\rangle
&\simeq\frac{4}{3}\gamma^2\langle\energy{E}_\gamma^i\rangle,\\
\langle\energy{E}_\gamma^f\rangle
&\simeq\frac{4}{3}\gamma^2\langle\energy{E}_\gamma^i\rangle.
\end{aligned}
$$

The factor $4/3$ comes from the angular average for a photon distribution isotropic in the laboratory frame.

##### Comptonization

Comptonization describes the exchange of energy between distributions of photons and electrons when Compton scattering primarily determines the evolution of the photon spectrum. The notes consider a low-density population of hot electrons. Low density keeps the electrons' own emission small relative to the incident photon population, and high temperature allows substantial energy gains per scattering.

For the **Sunyaev–Zeldovich effect**, assume nonrelativistic thermal electrons and low-energy photons, $k_{\mathrm B}\thermal{T}\ll\mechanical{m}_ec^2$ and $h\signal{\nu}_\gamma\ll\mechanical{m}_ec^2$. Problem set 2, problem 3, gives the mean fractional photon energy change from recoil on a stationary electron.

$$
\left\langle\frac{\Delta\energy{E}_\gamma}{\energy{E}_\gamma}\right\rangle
=-\frac{\energy{E}_\gamma}{\mechanical{m}_ec^2}
$$

##### Mean energy exchange with thermal electrons

For an isotropic incident photon field, the mean gain per scattering from electron motion is $(4/3)\gamma^2(\mechanical{v}^2/c^2)\langle\energy{E}_\gamma^i\rangle$. In the nonrelativistic limit the corresponding fractional gain is $(4/3)\mechanical{v}^2/c^2$.

For a Maxwellian electron distribution at temperature $\thermal{T}_e$,

$$
\frac{1}{2}\mechanical{m}_e\langle\mechanical{v}^2\rangle
=\frac{3}{2}k_{\mathrm B}\thermal{T}_e.
$$

The motion contributes $4k_{\mathrm B}\thermal{T}_e/(\mechanical{m}_ec^2)$ to the mean fractional photon energy gain. Combining this with the recoil loss gives

$$
\left\langle\frac{\Delta\energy{E}_\gamma}{\energy{E}_\gamma}\right\rangle
=-\frac{\energy{E}_\gamma}{\mechanical{m}_ec^2}
+\frac{4k_{\mathrm B}\thermal{T}_e}{\mechanical{m}_ec^2}.
$$

The first term transfers energy from photons to electrons. The second transfers energy from electrons to photons and dominates when $k_{\mathrm B}\thermal{T}_e\gg\energy{E}_\gamma$.

Possible makeup lectures were listed for Monday, May 13 and May 20, from 9:00 to 10:20 a.m. in 4135 FRH.

##### Compton y parameter

When $k_{\mathrm B}\thermal{T}_e\gg\energy{E}_\gamma$, the mean fractional change in photon energy per scattering is approximately $4k_{\mathrm B}\thermal{T}_e/(\mechanical{m}_e c^2)$.

The **Compton $y$ parameter** estimates whether photons significantly change their energy as they traverse a hot, low-density electron gas. It is the mean fractional energy change per scattering multiplied by the mean number of scatterings (Rybicki and Lightman, equation 7.32). For scattering optical depth $\energy{\tau}$, the notes quote

$$
\langle N_{\mathrm{scat}}\rangle\sim\max(\energy{\tau}^2,\energy{\tau}),
$$

with $\energy{\tau}^2$ for an optically thick medium and $\energy{\tau}$ for an optically thin one (Rybicki and Lightman, p. 36).

##### Sunyaev–Zeldovich distortion

The hot intracluster medium has Thomson optical depth $\energy{\tau}\ll1$. In the previous convention, the Compton parameter is $4k_{\mathrm B}\thermal{T}_e\energy{\tau}/(\mechanical{m}_ec^2)$. For the thermal Sunyaev–Zeldovich (SZ) effect, the conventional $y_{\mathrm{SZ}}$ omits the factor of four.

The SZ effect is inverse Compton scattering of cosmic microwave background (CMB) photons by hot electrons in a galaxy cluster. The scattering shifts photons toward higher frequencies and distorts the CMB spectrum.

![[Kyle Kabasares - Radiative Transfer - Up-scattered CMB spectrum.png|**Fig. 31** The arrows show CMB photons shifting to higher frequencies in the hot intracluster gas.]]

The fraction scattered is approximately $\energy{\tau}$. With $\mechanical{n}_e$ the electron number density and $\mechanical{\ell}$ the line-of-sight distance,

$$
\energy{\tau}=\mechanical{\sigma}_{\mathrm{T}}\int\mechanical{n}_e\,d\mechanical{\ell},
\qquad
y_{\mathrm{SZ}}=\frac{\mechanical{\sigma}_{\mathrm{T}}}{\mechanical{m}_e c^2}
\int \mechanical{n}_e k_{\mathrm B}\thermal{T}_e\,d\mechanical{\ell}.
$$

The source's second expression omits $\mechanical{\sigma}_{\mathrm{T}}$, which follows from its preceding definition of $\energy{\tau}$ and makes $y_{\mathrm{SZ}}$ dimensionless. In the Rayleigh–Jeans limit, the CMB brightness-temperature change is

$$
\frac{\Delta\thermal{T}_{\mathrm{CMB}}}{\thermal{T}_{\mathrm{CMB}}}=-2y_{\mathrm{SZ}}.
$$

The notes refer to Peebles' physical cosmology text for the derivation.

For a nonuniform electron temperature, the low-frequency SZ temperature shift is proportional to the electron pressure integrated along the line of sight.

$$
\left(\frac{\Delta\thermal{T}}{\thermal{T}}\right)_{\mathrm{CMB}}
=-\frac{2k_{\mathrm B}\mechanical{\sigma}_{\mathrm{T}}}{\mechanical{m}_ec^2}
\int\mechanical{n}_e\thermal{T}_e\,d\mechanical{\ell}.
$$

For a cluster of mass $\mechanical{M}_{\mathrm{tot}}\sim10^{15}\mechanical{M}_\odot$, the notes estimate $\Delta\thermal{T}_{\mathrm{CMB}}\sim\quantity{-1}{mK}$, against a CMB temperature of $\quantity{2.73}{K}$.

Why does the SZ effect cause a temperature decrement? Radio observers infer a **brightness temperature** from the normalization of the Rayleigh–Jeans spectrum at low frequency.

$$
\energy{I}_{\signal{\nu}}\simeq
\frac{2h\signal{\nu}^3}{c^2}\frac{k_{\mathrm B}\thermal{T}}{h\signal{\nu}}
=\left(\frac{2k_{\mathrm B}\thermal{T}}{c^2}\right)\signal{\nu}^2
=C(\thermal{T})\,\signal{\nu}^2.
$$

The coefficient of the quadratic frequency dependence is proportional to the brightness temperature.

![[Kyle Kabasares - Radiative Transfer - Rayleigh–Jeans temperature decrement.png|**Fig. 32** The SZ-distorted Rayleigh–Jeans spectrum has lower intensity at fixed frequency, corresponding to a lower brightness temperature.]]

In the Rayleigh–Jeans limit, the SZ-distorted intensity satisfies $\energy{I}_{\signal{\nu}}^{\mathrm{SZ}}<\energy{I}_{\signal{\nu}}^{\mathrm{true}}$. The smaller normalization of the $\signal{\nu}^2$ spectrum implies $\thermal{T}_{\mathrm{SZ}}<\thermal{T}_{\mathrm{true}}$. At sufficiently high frequencies the inequality in intensity reverses. Historically the measurements emphasized the low-frequency side. Satellites can measure the whole blackbody curve, and ground-based radio measurements remain important.

##### Independent measurement of the Hubble constant

For a cluster of characteristic size $\mechanical{R}$, the magnitude of the fractional SZ temperature shift scales as $\mechanical{n}_e\thermal{T}_e\mechanical{R}$. The X-ray luminosity from thermal bremsstrahlung in the hot intracluster medium scales as

$$
\energy{L}_{\mathrm X}\propto\mechanical{n}_e^2\thermal{T}_e^{1/2}\mechanical{R}^3.
$$

Using the observed angular size $\Theta\simeq\mechanical{R}/\mechanical{D}$ and eliminating the density in favor of the SZ shift gives the flux scaling

$$
\energy{F}_{\mathrm X}\propto\frac{\energy{L}_{\mathrm X}}{\mechanical{D}^2}
\propto
\left(\frac{\Delta\thermal{T}}{\thermal{T}}\right)^2
\frac{\Theta}{\thermal{T}_e^{3/2}\mechanical{D}}.
$$

The measurements therefore determine the cluster distance $\mechanical{D}$. The historical example in the notes gives $H_0=\quantity{77^{+4+10}_{-3-8}}{km\cdot s^{-1}\cdot Mpc^{-1}}$.

##### Cluster halo mass estimator

The number of clusters above mass $\mechanical{m}$, $N(>\mechanical{m})$, is sensitive to cosmology. Define the integrated SZ Compton parameter over the apparent area of a cluster at redshift $z$.

$$
\begin{aligned}
Y_{\mathrm{SZ}} &= \int_{\mathrm{cluster}}y_{\mathrm{SZ}}\,d\Omega
=\frac{1}{\mechanical{d}_A^2(z)}\int y_{\mathrm{SZ}}\,d\mechanical{A}\\
&=\frac{\mechanical{\sigma}_{\mathrm{T}}k_{\mathrm B}}
{\mechanical{d}_A^2(z)\mechanical{m}_ec^2}
\int \mechanical{n}_e\thermal{T}_e\,d\mechanical{V}.
\end{aligned}
$$

The density-weighted mean electron temperature is

$$
\langle\thermal{T}_e\rangle_m
=\frac{\int\mechanical{n}_e\thermal{T}_e\,d\mechanical{V}}
{\int\mechanical{n}_e\,d\mechanical{V}}.
$$

For fixed gas composition the denominator is proportional to the gas mass, so $Y_{\mathrm{SZ}}\propto\mechanical{M}_{\mathrm{gas}}\langle\thermal{T}_e\rangle_m/\mechanical{d}_A^2(z)$. With $f_{\mathrm{gas}}=\mechanical{M}_{\mathrm{gas}}/\mechanical{M}_{\mathrm{tot}}$ and $\langle\thermal{T}_e\rangle_m\propto\mechanical{M}_{\mathrm{tot}}^\alpha$, this gives

$$
Y_{\mathrm{SZ}}\propto
\frac{f_{\mathrm{gas}}\mechanical{M}_{\mathrm{tot}}^{1+\alpha}}{\mechanical{d}_A^2(z)}.
$$

The source's last line writes the exponent as $\alpha$, omitting the extra mass factor in the preceding expression. The distribution of integrated SZ signals probes the distribution of cluster masses. The notes describe SZ selection as nearly independent of redshift.

## Source

Kyle Kabasares, *Radiative Transfer in Astrophysics (Physics 240C, UC Irvine 2019)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{L}$ | $\unit{erg\cdot s^{-1}}$ | Luminosity | Total radiant energy emitted per unit time. |
| $\energy{E}$ | $\unit{erg}$ | Radiant energy | Energy emitted by the source. |
| $\energy{F}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}}$ | Radiative flux | Energy crossing a surface per unit time and area. |
| $\energy{I}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot sr^{-1}\cdot Hz^{-1}}$ | Specific intensity | Radiated power per unit projected area, solid angle, and frequency. |
| $\energy{I}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot sr^{-1}}$ | Frequency-integrated intensity | Specific intensity integrated over frequency. |
| $\mechanical{n}$ | $\unit{cm^{-3}}$ | Number density | Number of absorbers per unit volume. |
| $\alpha$ | $1$ | Fine-structure constant | Dimensionless electromagnetic coupling constant. |
| $\mechanical{\sigma}_{\mathrm{T}}$ | $\unit{cm^2}$ | Thomson cross section | Ratio of total scattered power to incident energy flux. |
| $y$ | $1$ | Compton parameter | Mean fractional energy change per scattering times the mean scattering count, using the convention in this section. |
| $\thermal{T}$ | $\unit{K}$ | Brightness temperature | Temperature inferred from the intensity in the Rayleigh–Jeans limit in this section. |
| $Y_{\mathrm{SZ}}$ | $\unit{sr}$ | Integrated SZ Compton parameter | Line-of-sight Compton parameter integrated over the cluster's apparent solid angle. |
