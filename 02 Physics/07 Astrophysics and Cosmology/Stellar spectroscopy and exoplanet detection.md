---
title: "Stellar spectroscopy and exoplanet detection"
---

> [!TLDR]
> Interpret spectra and line broadening, then compare transit and radial-velocity measurements of exoplanets.

## Worked lecture material

##### Overview of stellar populations with M. Cooper

Stellar properties to measure include luminosity, temperature, mass, size, chemical composition or metallicity, and age. Stellar classification uses the light emitted by the photosphere.

Limb darkening is the effect that makes the edges of a stellar disk appear fainter than its center.

##### Stellar spectra

A stellar spectrum consists of a blackbody-like continuum with absorption lines and sometimes emission lines. The equivalent width is the width in ångströms of a rectangle at the continuum level with the same integrated line deficit or excess.

The $\mathrm{H}\alpha$ line can trace the star formation rate.

$$
\mathrm{SFR}=\frac{\Delta\mechanical{M}_{\star}}{\Delta t}.
$$

##### Common spectral lines

O I denotes a line from neutral oxygen. O II denotes singly ionized oxygen, and O III denotes doubly ionized oxygen.

The hydrogen Balmer series consists of transitions to $n=2$.

| Line | Transition | Wavelength given in the lecture |
| --- | --- | --- |
| $\mathrm{H}\alpha$ | $3\to2$ | $6563$ Å |
| $\mathrm{H}\beta$ | $4\to2$ | $4861$ Å |
| $\mathrm{H}\gamma$ | $5\to2$ | $4341$ Å |
| $\mathrm{H}\delta$ | $6\to2$ | |

Other common features include the sodium D Fraunhofer lines at $5890$ and $5896$ Å and the calcium triplet.

The lecture credits Annie Jump Cannon with the stellar classification system. The stars with the strongest hydrogen lines were assigned type A. Students should be able to classify a stellar spectrum by eye to within one class.

The notes mark a Balmer jump, or break, near $3800$ Å and attribute it to photon absorption by neutral hydrogen in the atmospheres of cooler stars. In a classification such as G2 V, the final Roman numeral gives the luminosity class.

##### Surface gravity

The acceleration of gravity at a star’s surface is

$$
\mechanical{g}=\frac{G\mechanical{M}}{\mechanical{R}^2}.
$$

Surface gravity affects the pressure and density of the outer atmosphere, where spectral lines form. The large radii of giant stars give them lower surface gravity.

##### Line broadening

The notes connect natural line broadening to the energy–time uncertainty relation, $\Delta\energy{E}\,\Delta t\sim h$ as an order-of-magnitude estimate. Doppler broadening comes from thermal motion of the absorbing atoms.

$$
\Delta\signal{\nu}=\signal{\nu}_0\frac{\mechanical{v}_r}{\signal{c}}.
$$

Dwarf stars have higher surface gravity than giants and show broader spectral lines.

##### Stellar metallicity

The mass fractions $X$, $Y$, and $Z$ refer to hydrogen, helium, and all heavier elements, respectively. The notes give the Sun’s atmospheric composition by mass as about 74.5% hydrogen and 23.7% helium, for about 98% combined.

A common metallicity index is $[\mathrm{Fe}/\mathrm{H}]$. A star with $[\mathrm{Fe}/\mathrm{H}]=-2$ has an iron-to-hydrogen ratio that is 1% of the solar ratio.

##### Galaxy spectra

The lecture lists star-forming galaxies, passive galaxies, and post-starburst galaxies. The last group is labeled K+A because the spectrum shows features associated with K and A stars.

##### Exoplanets with P. Robertson

###### Direct detection

An exoplanet can be roughly $10^{-9}$ to $10^{-6}$ as luminous as its host star.

$$
\frac{\energy{L}_{\mathrm{planet}}}{\energy{L}_{\star}}\sim10^{-9}\text{–}10^{-6}.
$$

Angular separations can be only tens of milliarcseconds. Proxima b is given as $\quantity{37}{mas}$. The Keck example uses the Rayleigh criterion $\theta=1.22\signal{\lambda}/\mechanical{D}$. With $\mechanical{D}=\quantity{10}{m}$ and $\signal{\lambda}=\quantity{2}{\mu m}$, the diffraction limit is about $\quantity{50}{mas}$. The separation of Proxima b is below that limit.

The 2018 lecture gives Gemini as a direct-imaging example, with 1–2 hour exposures, contrast around $10^{-6}$, and angular separations of about $0.2$ to $1^{\prime\prime}$.

###### Transits and radial velocities

###### Transit photometry

A transit is an eclipse in which the planet passes between the star and the observer. For a randomly oriented orbit, the geometric transit probability is

$$
P=\frac{(\mechanical{R}_{\mathrm p}+\mechanical{R}_{\star})
[1+e\cos(\pi/2-\omega)]}{\mechanical{a}(1-e^2)}.
$$

For small eccentricity and a planet much smaller than the star, $P\sim\mechanical{R}_\star/\mechanical{a}$.

| Planet and host | Approximate transit probability |
| --- | --- |
| Hot Jupiter around a G dwarf | 10% |
| Earth-like planet in the habitable zone of an M dwarf | 1–5% |
| Earth-like planet in the habitable zone of a G dwarf | 0.5% |

![[Kyle Kabasares - Intro to Astrophysics - Transit depth light curve.png|**Fig. 42** The stellar flux dips as the planet crosses the stellar disk. The depth is the drop from the out-of-transit baseline.]]

![[Kyle Kabasares - Intro to Astrophysics - Planet projected on stellar disk.png|**Fig. 43** A planet blocks part of the projected stellar disk during transit.]]

The transit depth scales as the fraction of the stellar disk blocked by the planet.

$$
\text{transit depth}\propto
\left(\frac{\mechanical{R}_{\mathrm p}}{\mechanical{R}_\star}\right)^2.
$$

| Host | Planet size | Approximate depth |
| --- | --- | --- |
| G dwarf | Jupiter | 1% |
| G dwarf | Neptune | 0.1% |
| M dwarf | Neptune | 1% |
| M dwarf | Earth | 0.1% |
| G dwarf | Earth | 0.01% |

###### Photometry

![[Kyle Kabasares - Intro to Astrophysics - Stellar photometry aperture.png|**Fig. 44** A stellar image and the circular aperture used to measure its counts.]]

The noise in analog-to-digital units (ADU) is

$$
\signal{N}_{\mathrm{ADU}}=
\frac{\sqrt{\signal{\sigma}_{\star}^{2}
+n_{\mathrm{pix}}\left(1+\frac{n_{\mathrm{pix}}}{n_{\mathrm b}}\right)
\left(\signal{\sigma}_{\mathrm S}^{2}+\signal{\sigma}_{\mathrm D}^{2}
+\signal{\sigma}_{\mathrm R}^{2}+\signal{\sigma}_{\mathrm P}^{2}\right)}}{\signal{G}}.
$$

Here $\signal{G}$ is the detector gain. The lecture groups the four variance terms in the inner parentheses as detector effects.

For an ideal detector, photon statistics dominate the noise. For a detected photon count $F$, $\signal{N}\sim\sqrt{F}$. Ground-based observations add systematic errors.

###### Differential photometry

![[Kyle Kabasares - Intro to Astrophysics - Differential photometry reference stars.png|**Fig. 45** The target is measured with an aperture. Other stars in the same field provide a reference flux.]]

Differential photometry uses the ratio $F_{\mathrm{rel}}=F_{\mathrm T}/F_{\mathrm E}$ of target flux to reference flux to reduce the effects of transparency variation. For independent noise in the two measurements,

$$
\frac{\signal{\sigma}_{\mathrm{rel}}}{F_{\mathrm{rel}}}
=\sqrt{\frac{\signal{N}_{\mathrm T}^2}{F_{\mathrm T}^2}
+\frac{\signal{N}_{\mathrm E}^2}{F_{\mathrm E}^2}}.
$$

When the reference contribution is small and target noise is dominated by photon statistics,

$$
\frac{\signal{\sigma}_{\mathrm{rel}}}{F_{\mathrm{rel}}}
\simeq\frac{\signal{N}_{\mathrm T}}{F_{\mathrm T}}\sim\frac{1}{\signal{N}_{\mathrm T}}.
$$

Molecular absorption and differential extinction are additional effects. The lecture notes that about 75% of stars in the Galaxy are M dwarfs.

The lecture gives an error of up to $10^{-3}$ from molecular absorption and differential extinction.

###### Scintillation

![[Kyle Kabasares - Intro to Astrophysics - Atmospheric scintillation.png|**Fig. 46** Two stellar lines of sight pass through different regions of the atmosphere above the observing telescope.]]

The scintillation noise scales with telescope diameter $\mechanical{D}$, airmass $X$, and exposure time $t_{\mathrm{exp}}$ as

$$
\signal{\sigma}_{\mathrm s}\propto\mechanical{D}^{-2/3}X^{1.75}t_{\mathrm{exp}}^{-1/2}.
$$

For a star with $V=7$ and a $\quantity{4}{m}$ telescope, the example gives $\signal{\sigma}_{\mathrm s}=10\signal{\sigma}_{\mathrm{photometric}}$.

![[Kyle Kabasares - Intro to Astrophysics - Three periodic transits.png|**Fig. 47** The first two dips give a candidate period $P$. A third dip at the expected time tests that period.]]

###### Kepler mission baseline

The lecture lists about 200,000 stars, a planned baseline of $3\pm1$ years, and photometric precision of 20 parts per million. That precision gives about a $4\sigma$ detection per transit of an Earth-sized planet in the example.

Planets are common around stars. After Kepler lost two reaction wheels, it continued in the K2 mission.

###### Radial velocity

The nonrelativistic Doppler shift is

$$
\frac{\Delta\signal{\lambda}}{\signal{\lambda}}=\frac{\mechanical{v}}{\signal{c}}.
$$

The stellar radial velocity amplitude due to a planet of mass $\mechanical{m}$ is

$$
\mechanical{K}=\sqrt{\frac{G}{1-e^2}}\,
\frac{\mechanical{m}\sin i}{\sqrt{(\mechanical{M}+\mechanical{m})\mechanical{a}}},
$$

where $\mechanical{M}$ is the stellar mass and $\mechanical{a}$ is the relative orbit’s semimajor axis.

| Planet around a G star | Approximate radial velocity amplitude |
| --- | --- |
| Hot Jupiter | $\quantity{100}{m\cdot s^{-1}}$ |
| Jupiter analog | $\quantity{12}{m\cdot s^{-1}}$ |
| Hot Neptune | $\quantity{5}{m\cdot s^{-1}}$ |
| Earth analog | $\quantity{0.1}{m\cdot s^{-1}}$ |

The amplitudes are roughly 2–5 times larger for an M dwarf in the comparison. The lecture also gives an example of $\quantity{1}{m\cdot s^{-1}}$ for a habitable-zone Earth. The discussion raises an inherent radial velocity stability scale of about $\quantity{1}{km\cdot s^{-1}}$ and emphasizes using many spectral lines to measure smaller shifts.

###### Absorption cell

The first of two techniques is an absorption cell. A gas-filled tube before the spectrograph slit puts a reference pattern of absorption lines into the spectrum.

![[Kyle Kabasares - Intro to Astrophysics - Absorption cell spectrograph.png|**Fig. 48** Starlight passes through a gas absorption cell, a slit, and the spectrograph optics before the spectrum is recorded.]]

###### Instrument profile

The instrument profile (IP) is the spectrograph’s response across detector pixels. Model the measured spectrum by combining the stellar and absorption-cell spectra and convolving with the instrument profile. The lecture emphasizes accounting for all three components.

![[Kyle Kabasares - Intro to Astrophysics - Instrument profile and spectrum convolution.png|**Fig. 49** An instrument profile in detector pixels and a sketch of how convolution changes the recorded absorption-line shapes.]]

The lecture attributes the absorption-cell model to Paul Butler and colleagues (1996).

$$
\signal{I}_{\mathrm{obs}}(\signal{\lambda})
=k\left[\signal{\Gamma}_{\mathrm I_2}(\signal{\lambda})
\signal{I}_{\star}(\signal{\lambda}+\Delta\signal{\lambda})\right]
*\mathrm{IP}.
$$

The model multiplies the iodine transmission by the shifted stellar spectrum and convolves the product with the instrument profile. The coefficient $k$ scales the model.

###### Radial velocity uncertainty

The notes estimate shift uncertainty from the spectral slope relative to the intensity uncertainty at each sample.

$$
\signal{\sigma}_{\mathrm{RV}}
=\frac{1}{\sqrt{\displaystyle\sum
\left(\frac{d\signal{I}/d\signal{\lambda}}{\signal{\sigma}_{I}}\right)^2}}.
$$

> [!note]
> The page labels the result $\signal{\sigma}_{\mathrm{RV}}$. With a wavelength derivative as written, the expression gives a wavelength-shift uncertainty. Conversion to velocity uses the Doppler relation.

Good targets are bright stars with many steep spectral lines.

###### Stabilized spectrograph

The second technique stabilizes the spectrograph and uses a cross-correlation function (CCF) to estimate the velocity shift.

![[Kyle Kabasares - Intro to Astrophysics - Radial velocity cross-correlation.png|**Fig. 50** Cross-correlation as a function of trial velocity shift $\Delta\mechanical{v}$. The peak marks the estimated shift.]]

## Source

Kyle Kabasares, *Intro to Astrophysics (Physics 240A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{L}$ | $\unit{erg\cdot s^{-1}}$ | Luminosity | Total radiant power. |
| $\signal{\nu}$ | $\unit{Hz}$ | Frequency | Frequency of the radiation. |
| $\signal{\lambda}$ | $\unit{cm}$ | Wavelength | Wavelength of the radiation. |
| $\signal{c}$ | $\unit{cm\cdot s^{-1}}$ | Speed of light | Speed of light in vacuum. |
| $h$ | $\unit{erg\cdot s}$ | Planck constant | Relates photon energy to frequency. |
| $k$ | $\unit{erg\cdot K^{-1}}$ | Boltzmann constant | Relates temperature to energy. |
| $\sigma$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot K^{-4}}$ | Stefan–Boltzmann constant | Relates blackbody flux to the fourth power of temperature. |
| $m$ | 1 | Apparent magnitude | Logarithmic measure of observed flux relative to a zero point. |
| $b$ | 1 | Softening constant | Sets the low-flux scale of the inverse hyperbolic sine magnitude. |
| $Z$ | $\unit{rad}$ | Zenith angle | Angle between the line of sight and the local vertical. |
| $A$ | 1 | Extinction | Increase in apparent magnitude caused by attenuation. |
| $n$ | $\unit{cm^{-3}}$ | Grain number density | Number of dust grains per unit volume. |
| $\mechanical{D}$ | $\unit{pc}$ | Distance | Distance to the square in the problem hint. |
| $\theta$ | $\unit{rad}$ | Position angle | Orientation on the sky measured from north toward east. |
| $\theta$ | $\unit{rad}$ | Angular resolution | Minimum angular separation in the Rayleigh criterion. |
| $\mechanical{D}$ | $\unit{m}$ | Aperture diameter | Diameter of the telescope mirror. |
| $\alpha$ | $\unit{h}$ | Right ascension | Celestial coordinate measured eastward along the celestial equator. |
| $\delta$ | $\unit{deg}$ | Declination | Angular distance north or south of the celestial equator. |
| $\mu$ | $\unit{arcsec\cdot yr^{-1}}$ | Proper motion | Angular rate of motion across the sky. |
| $\alpha$ | $\unit{arcsec}$ | Parallax angle | Angular shift due to a one-AU observing baseline. |
| $\lambda$ | $\unit{rad}$ | Convergent-point angle | Angle between the line of sight to the cluster member and the direction of the shared velocity. |
| $i$ | $\unit{deg}$ | Inclination | Angle between the orbital axis and the line of sight. |
| $\mechanical{a}$ | $\unit{cm}$ | Binary separation | Distance between the two stars in a circular orbit. |
| $G$ | $\unit{cm^3\cdot g^{-1}\cdot s^{-2}}$ | Gravitational constant | Constant in Newton’s law of gravitation. |
| $\mechanical{M}$ | $\unit{g}$ | Stellar mass | Mass in the main-sequence scaling relations. |
| $\mechanical{R}$ | $\unit{km}$ | Stellar radius | Radius in the main-sequence scaling relation. |
| — | $\unit{\mathring{A}}$ | Equivalent width | Width of a continuum-level rectangle with the same integrated line deficit or excess. |
| $\mathrm{SFR}$ | $\unit{M_{\odot}\cdot yr^{-1}}$ | Star formation rate | Stellar mass formed per unit time. |
| $\Delta\mechanical{M}_{\star}$ | $\unit{M_{\odot}}$ | Formed stellar mass | Mass of stars formed over the given interval. |
| $\Delta t$ | $\unit{yr}$ | Time interval | Elapsed time over which stars formed. |
| $\mechanical{g}$ | $\unit{cm\cdot s^{-2}}$ | Surface gravity | Gravitational acceleration at the stellar surface. |
| $\Delta\energy{E}$ | $\unit{erg}$ | Energy width | Energy spread associated with a finite lifetime. |
| $\Delta\signal{\nu}$ | $\unit{Hz}$ | Doppler width | Frequency spread associated with thermal motion along the line of sight. |
| $X,\,Y,\,Z$ | 1 | Stellar mass fractions | Fractions of stellar mass in hydrogen, helium, and heavier elements. |
| $[\mathrm{Fe}/\mathrm{H}]$ | 1 | Iron abundance index | Base-ten logarithm of the iron-to-hydrogen ratio relative to the solar value. |
| $P$ | 1 | Geometric transit probability | Probability that a randomly oriented orbit produces a transit. |
| $e$ | 1 | Orbital eccentricity | Deviation of the orbit from a circle. |
| $\omega$ | $\unit{rad}$ | Argument of periastron | Orientation of periastron in the orbital plane. |
| $\signal{N}_{\mathrm{ADU}}$ | $\unit{ADU}$ | Photometric noise | Noise in digitized photometry counts. |
| $\signal{G}$ | $\unit{e^-\cdot ADU^{-1}}$ | Detector gain | Converts digitized counts to electrons. |
| $n_{\mathrm{pix}},\,n_{\mathrm b}$ | 1 | Pixel counts | Number of pixels in the photometry aperture and background sample. |
| $F_{\mathrm T},\,F_{\mathrm E}$ | $\unit{counts}$ | Target and reference flux measurements | Measured counts for the target and reference stars. |
| $F_{\mathrm{rel}},\,\signal{\sigma}_{\mathrm{rel}}$ | 1 | Relative flux and uncertainty | Target-to-reference flux ratio and its propagated uncertainty. |
| $X$ | 1 | Airmass | Relative path length through the atmosphere. |
| $t_{\mathrm{exp}}$ | $\unit{s}$ | Exposure time | Duration of a photometric exposure. |
| $\mechanical{K}$ | $\unit{m\cdot s^{-1}}$ | Radial velocity amplitude | Amplitude of the stellar line-of-sight velocity caused by the planet. |
| $\mechanical{m}$ | $\unit{g}$ | Planet mass | Mass of the orbiting planet. |
| $\signal{\Gamma}_{\mathrm I_2}$ | 1 | Iodine transmission | Fraction of incident light transmitted by the reference cell. |
| $\signal{\sigma}_{I}$ | — | Intensity uncertainty | Measurement uncertainty in the units of the spectrum. |
| $\signal{\sigma}_{\mathrm{RV}}$ | $\unit{m\cdot s^{-1}}$ | Radial velocity uncertainty | Uncertainty of the inferred velocity after conversion from a wavelength shift. |
| $n$ | $\unit{pc^{-3}}$ | Stellar number density | Number of stars per unit volume. |
| $\sigma$ | 1 | Absolute-magnitude dispersion | Standard deviation of the Gaussian magnitude distribution. |
| $A$ | $\unit{km\cdot s^{-1}\cdot kpc^{-1}}$ | First Oort constant | Local rotational shear inferred from the longitude dependence of radial velocities. |
| $\alpha$ | $\unit{rad}$ | Scattering angle | Small change in the direction of the moving star. |
| $t_c,\,t_{\mathrm{cross}}$ | $\unit{yr}$ | Crossing time | Time to traverse the characteristic system radius at the characteristic speed. |
| $\mechanical{M}_{\star}$ | $\unit{M_{\odot}}$ | Locked stellar mass | Mass in long-lived stars and stellar remnants. |
| $p$ | 1 | Metal yield | Newly synthesized metal mass returned to the gas per unit mass locked into stars and remnants. |
