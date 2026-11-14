---
title: "Astronomical fluxes, magnitudes, and extinction"
---

> [!TLDR]
> Convert fluxes to magnitudes and colors and account for atmospheric transmission, extinction, angular resolution, and seeing.

## Worked lecture material

##### Physics 240A. Galactic Astronomy

Lecture of April 5, 2018.

- Course textbook. *Galaxies in the Universe* by Sparke and Gallagher.
- Recommended reading. *Galactic Astronomy* by Binney and Merrifield, *Galactic Dynamics* by Binney and Tremaine, and *Astrophysics in a Nutshell* by Maoz.

Read extensively. The aim of the course is to build a foundation in astrophysics.

The first homework is due April 17. Sign up for Wikipedia and choose your username carefully.

##### Systems of units

The course uses CGS units.

$$
\begin{aligned}
\mechanical{M}_{\odot} &= \quantity{1.99\times10^{33}}{g},\\
\quantity{1}{AU} &= \quantity{1.5\times10^{13}}{cm},\\
\quantity{1}{ly} &= \quantity{9.46\times10^{17}}{cm},\\
\quantity{1}{pc} &= \quantity{3.26}{ly} = \quantity{3.09\times10^{18}}{cm},\\
\quantity{1}{erg} &= \quantity{10^{-7}}{J}.
\end{aligned}
$$

> [!note]
> The handwritten light-year conversion gives $10^{19}$. The exponent $17$ agrees with the parsec conversion on the next line.

Distinguish luminosity from brightness. The solar luminosity is

$$
\energy{L}_{\odot} = \quantity{3.9\times10^{33}}{erg\cdot s^{-1}}.
$$

One arcminute is $1/60$ of a degree. One arcsecond is $1/60$ of an arcminute. One radian is approximately $\unit{57.3^\circ}$.

$$
\boxed{\quantity{1}{rad}\approx\unit{206{,}265^{\prime\prime}}}
$$

$$
\boxed{4\pi\,\unit{sr}\times\left(\frac{180}{\pi}\right)^2 \approx \quantity{4.1\times10^4}{deg^2}}
$$

##### Wavelengths

$$
\begin{aligned}
\quantity{1}{nm} &= \quantity{10^{-9}}{m},\\
\unit{1\,\mathring{A}} &= \quantity{10^{-10}}{m},\\
\quantity{1}{\mu m} &= \quantity{10^{-6}}{m}.
\end{aligned}
$$

##### Luminosity and flux density

The luminosity per unit frequency is $\energy{L}_{\signal{\nu}}$ in $\unit{erg\cdot s^{-1}\cdot Hz^{-1}}$. The luminosity per unit wavelength is $\energy{L}_{\signal{\lambda}}$ in $\unit{erg\cdot s^{-1}\cdot\mathring{A}^{-1}}$.

For a spherical source at distance $\mechanical{d}$, the received flux and its spectral forms are

$$
\begin{aligned}
\energy{f}&=\frac{\energy{L}}{4\pi\mechanical{d}^2},\\
\energy{f}_{\signal{\nu}}&=\frac{\energy{L}_{\signal{\nu}}}{4\pi\mechanical{d}^2},\\
\energy{f}_{\signal{\lambda}}&=\frac{\energy{L}_{\signal{\lambda}}}{4\pi\mechanical{d}^2}.
\end{aligned}
$$

The last two quantities are called specific flux or flux density. Their units are $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot Hz^{-1}}$ and $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot\mathring{A}^{-1}}$, respectively. One jansky is $\quantity{10^{-26}}{W\cdot m^{-2}\cdot Hz^{-1}}$.

$$
\energy{F}=\int_0^\infty \energy{f}_{\signal{\nu}}\,d\signal{\nu}
=\int_0^\infty \energy{f}_{\signal{\lambda}}\,d\signal{\lambda}.
$$

Frequency limits $(\signal{\nu}_1,\signal{\nu}_2)$ correspond to wavelength limits $(\signal{\lambda}_1,\signal{\lambda}_2)$ in reverse order because $\signal{\lambda}=\signal{c}/\signal{\nu}$.

$$
\int_{\signal{\nu}_1}^{\signal{\nu}_2}\energy{f}_{\signal{\nu}}\,d\signal{\nu}
=-\int_{\signal{\lambda}_1}^{\signal{\lambda}_2}\energy{f}_{\signal{\lambda}}\,d\signal{\lambda}.
$$

Taking $\signal{\nu}_2\to\signal{\nu}_1$ gives $\energy{f}_{\signal{\nu}}\,d\signal{\nu}=-\energy{f}_{\signal{\lambda}}\,d\signal{\lambda}$. The conversion uses the absolute value of the derivative.

$$
\energy{f}_{\signal{\nu}}
=\left|\frac{d\signal{\lambda}}{d\signal{\nu}}\right|\energy{f}_{\signal{\lambda}},
\qquad
\left|\frac{d\signal{\lambda}}{d\signal{\nu}}\right|=\frac{\signal{c}}{\signal{\nu}^2}.
$$

> [!note]
> The handwritten conversion repeats the wavelength subscript on both sides. The differential relation on the preceding line gives the frequency subscript on the left.

![[Kyle Kabasares - Intro to Astrophysics - Spectral flux density axes.png|**Fig. 1** The frequency plot marks a band under a decreasing spectral flux density. The wavelength plot shows the corresponding axes.]]

##### Planck spectra

$$
\begin{aligned}
\energy{B}_{\signal{\nu}}(\thermal{T})
&=\frac{2h\signal{\nu}^3}{\signal{c}^2}
\frac{1}{\exp(h\signal{\nu}/(k\thermal{T}))-1},\\
\energy{B}_{\signal{\lambda}}(\thermal{T})
&=\frac{2h\signal{c}^2}{\signal{\lambda}^5}
\frac{1}{\exp(h\signal{\nu}/(k\thermal{T}))-1},
\qquad \signal{\nu}=\frac{\signal{c}}{\signal{\lambda}}.
\end{aligned}
$$

##### Stefan–Boltzmann law

The flux from a blackbody emitter is $\energy{f}=\sigma\thermal{T}^4$.

$$
\sigma=\frac{2\pi^5k^4}{15\signal{c}^2h^3}
\approx\quantity{5.7\times10^{-5}}{erg\cdot s^{-1}\cdot cm^{-2}\cdot K^{-4}}.
$$

For a spherical emitter of radius $\mechanical{r}$,

$$
\energy{L}=4\pi\mechanical{r}^2\energy{f}
=4\pi\mechanical{r}^2\sigma\thermal{T}^4,
\qquad
\thermal{T}_{\mathrm{eff}}=\left(\frac{\energy{L}}{4\pi\mechanical{r}^2\sigma}\right)^{1/4}.
$$

##### Wien’s displacement law

$$
\signal{\lambda}_{\max}\thermal{T}\approx\quantity{2.9}{mm\cdot K}.
$$

##### The magnitude system

The magnitude system uses a logarithmic scale, like the Richter scale. Let $m_1$ and $m_2$ be the magnitudes of two stars with fluxes $\energy{f}_1$ and $\energy{f}_2$. A brighter star has a smaller magnitude.

$$
\boxed{m_1-m_2=-2.5\log_{10}\left(\frac{\energy{f}_1}{\energy{f}_2}\right)}
$$

A difference of $n$ magnitudes gives a brighter-to-fainter flux ratio of $100^{n/5}$.

| Magnitude difference | Flux ratio |
| --- | --- |
| 1 | $100^{1/5}\approx 2.512$ |
| 2 | $6.31$ |
| 3 | $15.85$ |
| 4 | $39.81$ |
| 5 | $100$ |

A first-magnitude star and an eighteenth-magnitude star differ by 17 magnitudes. Three intervals of five magnitudes and one of two magnitudes give a flux ratio of about $100\times100\times100\times6.31$.

> [!note]
> The source calls $100^{1/5}$ transcendental. It is algebraic because its fifth power is $100$.

##### Photometric bands

![[Kyle Kabasares - Intro to Astrophysics - Photometric passband.png|**Fig. 2** A passband transmission curve and a dashed source spectrum as functions of wavelength.]]

A band measurement usually covers a range of wavelengths. For a transmission curve $\signal{T}(\signal{\lambda})$, the transmission-weighted mean flux density is

$$
\energy{F}_{\mathrm{band}}=
\frac{\int \signal{T}(\signal{\lambda})\energy{f}_{\signal{\lambda}}\,d\signal{\lambda}}
{\int\signal{T}(\signal{\lambda})\,d\signal{\lambda}}.
$$

A CCD counts photons. The photon flux density at a given frequency is proportional to $\energy{f}_{\signal{\nu}}/(h\signal{\nu})$.

The bands are $U$, $B$, $V$, $R$, and $I$. The handwritten correction swaps $B$ and $V$ into this order. In the $B$ band,

$$
m_{1,B}-m_{2,B}
=-2.5\log_{10}\left(\frac{\energy{F}_{1,B}}{\energy{F}_{2,B}}\right).
$$

Vega defines the zero point of the magnitude system used here, with $m=0$ in all bands.

##### Vega and AB magnitude zero points

The notes give $m_V(\mathrm{Vega})=+0.04$. The $B$-band magnitude of a star on the Vega scale is

$$
\begin{aligned}
m_B(\mathrm{star})
&=-2.5\log_{10}\left(\frac{\energy{F}_B(\mathrm{star})}{\energy{F}_B(\mathrm{Vega})}\right)\\
&=-2.5\log_{10}\bigl(\energy{F}_B(\mathrm{star})\bigr)+\mathrm{ZP}_B.
\end{aligned}
$$

Using a measured count rate, $m=-2.5\log_{10}(\text{count rate})+\mathrm{ZP}$. The lecture cites Landolt (1992) for photometric standards. Vega is an A0 V star with $\thermal{T}_{\mathrm{eff}}\sim\quantity{10^4}{K}$.

The AB magnitude system is attributed to Oke and Gunn (1983). For the numerical value of $\energy{f}_{\signal{\nu}}$ in $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot Hz^{-1}}$,

$$
m_{\mathrm{AB}}=-2.5\log_{10}\energy{f}_{\signal{\nu}}-48.60.
$$

> [!note]
> The source writes $+48.60$. The AB reference flux is about $\quantity{3631}{Jy}$, or $\quantity{3.631\times10^{-20}}{erg\cdot s^{-1}\cdot cm^{-2}\cdot Hz^{-1}}$, which gives the negative offset.

The Vega and AB magnitudes approximately agree in the $V$ band, near $\quantity{550}{nm}$. Specify the magnitude system when reporting magnitudes, especially in a paper.

The page is marked “Birthday lecture!”

Week 2 reading includes sections 1.3 and 2.1 of Sparke and Gallagher, chapter 2 of Binney and Merrifield, and additional papers by Bohlin (2014) and Bessell (2005).

##### Photometric systems

| System or survey | Filters | Note |
| --- | --- | --- |
| Johnson | $UBV$ | The Johnson $RI$ bands are seldom used. |
| Cousins | $RI$ | Used with the Johnson $UBV$ bands. |
| Johnson–Cousins | $UBVRI$ | |
| Thuan–Gunn | $ugriz$ | |
| SDSS | $u'g'r'i'z'$ | |
| LSST | $ugrizy$ | The $y$ band is marked at $\quantity{1.035}{\mu m}$. |
| 2MASS | $JHK$ | The survey covered the whole sky. |

The magnitude formula is $m=-2.5\log_{10}(\energy{f})+\mathrm{ZP}$. The page ends with an example measurement of $3\pm5$ counts.

##### Inverse hyperbolic sine magnitude

$$
m=-\frac{2.5}{\ln 10}
\left[\operatorname{asinh}\left(\frac{\energy{f}/\energy{f}_0}{2b}\right)+\ln b\right].
$$

Here $\energy{f}_0$ is the zero-magnitude reference flux and $b$ is the softening constant.

##### Airmass

![[Kyle Kabasares - Intro to Astrophysics - Zenith and inclined atmospheric paths.png|**Fig. 3** The atmospheric path $\mechanical{a}_0$ to a star at the zenith and path $\mechanical{a}$ to a star at zenith angle $Z$.]]

In the plane-parallel approximation, the airmass is the slant path divided by the vertical path.

$$
\text{airmass}=\frac{\mechanical{a}}{\mechanical{a}_0}=\sec Z.
$$

##### Color index

The color index $(B-V)=m_B-m_V$ is the apparent magnitude in the $B$ filter minus the apparent magnitude in the $V$ filter.

The filter name alone can denote apparent magnitude. For example, $m_B=B$ and $B=15\,\mathrm{mag}$. In a color such as $V-I$ or $H-K$, the shorter-wavelength filter comes first. Vega has color zero for all filter pairs in the idealized Vega system used here.

Landolt’s telescope defines the standard $UBVRI$ measurements. The filters on another telescope are denoted $U'B'V'R'I'$.

![[Kyle Kabasares - Intro to Astrophysics - Standard and instrumental V passbands.png|**Fig. 4** Standard $V$ and instrumental $V'$ filter bandpasses. Their transmission curves differ in shape and peak wavelength.]]

The transformation to the standard $V$ magnitude uses the instrumental magnitude and color.

$$
V=\alpha_V V'+\beta_V(B'-V')+\gamma_V.
$$

Photometric measurements should be consistent across systems. Synthetic photometry is important for this comparison.

##### Absolute magnitude

Absolute magnitude is the apparent magnitude a star would have at a distance of $\quantity{10}{pc}$. From the inverse-square flux law,

$$
\begin{aligned}
\energy{f}&=\frac{\energy{L}}{4\pi\mechanical{d}^2},\\
\energy{f}_{10}&=\frac{\energy{L}}{4\pi(\quantity{10}{pc})^2},\\
\frac{\energy{f}_{10}}{\energy{f}}
&=\left(\frac{\mechanical{d}}{\quantity{10}{pc}}\right)^2.
\end{aligned}
$$

Therefore,

$$
m_{10}-m=-2.5\log_{10}\left[\left(\frac{\mechanical{d}}{\quantity{10}{pc}}\right)^2\right].
$$

Writing the absolute magnitude as $M$, the previous result becomes

$$
M-m=-2.5\log_{10}\left[\left(\frac{\mechanical{d}}{\unit{pc}}\right)^2\right]+2.5\log_{10}(10^2).
$$

The distance modulus is

$$
\boxed{m-M=5\log_{10}\left(\frac{\mechanical{d}}{\unit{pc}}\right)-5}.
$$

With extinction $A$, the right-hand side gains an additive $+A$. For reference, the Sun has $M_V=+4.83$.

##### Bolometric magnitude

Bolometric magnitude uses luminosity integrated over all wavelengths. Apply the bolometric correction $C_{\mathrm{bol}}$ to the absolute magnitude in a specific band, here $V$.

$$
\boxed{M_{\mathrm{bol}}=M_V+C_{\mathrm{bol}}}
$$

The term comes from bolometers.

![[Kyle Kabasares - Intro to Astrophysics - Bolometric luminosity and a single band.png|**Fig. 5** Spectral luminosity across all wavelengths. The shaded interval shows the contribution of one band.]]

##### Extinction

Dust absorbs and scatters light along the line of sight.

![[Kyle Kabasares - Intro to Astrophysics - Dust grain in the line of sight.png|**Fig. 6** A dust grain lies on the light path between a star and the observer.]]

Let $n$ be the grain number density, $\sigma(\signal{\lambda})$ the absorption or scattering cross section per grain, and $\energy{N}_i$ the incident photon rate.

![[Kyle Kabasares - Intro to Astrophysics - Photon beam and thin dust slab.png|**Fig. 7** A beam with incident rate $\energy{N}_i$ enters a dust slab of thickness $d\mechanical{x}$.]]

The fractional change in photon rate across a layer of thickness $d\mechanical{x}$ is

$$
\frac{d\energy{N}}{\energy{N}}=-n\sigma\,d\mechanical{x}.
$$

For constant $n$ and $\sigma$,

$$
\int_{\energy{N}_i}^{\energy{N}(\mechanical{x})}\frac{d\energy{N}}{\energy{N}}
=-\int_0^{\mechanical{x}}n\sigma\,d\mechanical{x}'=-n\sigma\mechanical{x}.
$$

$$
\boxed{\energy{N}(\mechanical{x})=\energy{N}_i e^{-n\sigma\mechanical{x}}=\energy{N}_i e^{-\tau}}
$$

The transmitted photon rate tracks the beam intensity.

##### Optical depth and color excess

For a uniform dust layer the optical depth is $\tau=n\sigma\mechanical{x}$. For a varying density along the line of sight,

$$
\tau(\signal{\lambda})=\int n(\mechanical{x})\sigma(\signal{\lambda})\,d\mechanical{x}.
$$

Scattering contributes to extinction and reddening. Let $\energy{F}_1$ be the flux that would be observed without dust and $\energy{F}_2$ the flux actually observed. At wavelength $\signal{\lambda}$,

$$
\begin{aligned}
A_{\signal{\lambda}}
&=m_2-m_1=-2.5\log_{10}\left(\frac{\energy{F}_2}{\energy{F}_1}\right)
=-2.5\log_{10}(e^{-\tau}),\\
\boxed{A_{\signal{\lambda}}=2.5\tau\log_{10}(e)\approx1.086\tau}.
\end{aligned}
$$

The optical depth varies with wavelength, so the observed color can differ from the intrinsic color.

$$
\begin{aligned}
E(B-V)&=(B-V)_{\mathrm{observed}}-(B-V)_{\mathrm{intrinsic}}\\
&=(B_{\mathrm{obs}}-B_{\mathrm{int}})-(V_{\mathrm{obs}}-V_{\mathrm{int}}).
\end{aligned}
$$

The ratio of total to selective extinction is

$$
R_V=\frac{A_V}{E(B-V)}.
$$

For the Milky Way, the lecture gives the approximate relations

$$
A_V\simeq 3.1E(B-V),\qquad A_B\simeq 4.0E(B-V).
$$

![[Kyle Kabasares - Intro to Astrophysics - Milky Way extinction curve.png|**Fig. 8** Extinction as a function of wavelength. The curve marks the feature at $2175$ Å and the $B$ and $V$ bands.]]

##### Surface brightness

Surface brightness is the flux per unit angular area.

![[Kyle Kabasares - Intro to Astrophysics - Galaxy and square arcsecond.png|**Fig. 9** A sketch of an extended source beside a reference square one arcsecond on each side.]]

![[Kyle Kabasares - Intro to Astrophysics - Radial surface brightness profile.png|**Fig. 10** Surface brightness as a function of radius. The profile falls from a broad central peak.]]

A common unit of surface brightness is magnitudes per square arcsecond. Consider a uniform square that measures two arcseconds on each side and has a total apparent magnitude of 15.

![[Kyle Kabasares - Intro to Astrophysics - Magnitude of a square arcsecond.png|**Fig. 11** A square with total flux $\energy{f}_{\mathrm{tot}}$ contains four equal squares. The shaded square has flux $\energy{f}$ and magnitude $m_1$.]]

One square arcsecond contains one-fourth of the total flux, so

$$
m_1-m_{\mathrm{tot}}
=-2.5\log_{10}\left(\frac{\energy{f}}{\energy{f}_{\mathrm{tot}}}\right)
=-2.5\log_{10}\left(\frac14\right)\approx1.5.
$$

The surface brightness is $\quantity{16.5}{mag\cdot arcsec^{-2}}$. In Euclidean space, surface brightness is independent of distance.

##### Differential atmospheric refraction

The atmosphere refracts light by different amounts at different wavelengths. This shifts the apparent position of a star.

![[Kyle Kabasares - Intro to Astrophysics - Differential atmospheric refraction.png|**Fig. 12** A vertical light path and an inclined path through the atmosphere. Colored extensions show different apparent positions for the same star.]]

Different wavelengths refract at different angles. The notes suggest reading about spectrographs.

##### Hint for problem 4

Consider a square one parsec on each side at distance $\mechanical{D}$.

![[Kyle Kabasares - Intro to Astrophysics - One parsec square.png|**Fig. 13** A square of side length one parsec at distance $\mechanical{D}$.]]

##### Parallactic angle

![[Kyle Kabasares - Intro to Astrophysics - Spectrograph entrance slit.png|**Fig. 14** Entrance slit of the spectrograph.]]

![[Kyle Kabasares - Intro to Astrophysics - Position angle on the sky.png|**Fig. 15** A sky image with north up and east left. Position angle $\theta$ is measured from north toward east.]]

The image projects the great circle of the sky onto a two-dimensional grid. The notes suggest reviewing spherical trigonometry.

##### Sources of night-sky brightness

- City lights.
- Scattered moonlight, especially at blue wavelengths.
- Thermal emission in the infrared.
- Emission lines.
- Zodiacal light from dust.

The lecture gives these representative surface brightness values.

| Band | Condition | Sky surface brightness |
| --- | --- | --- |
| $B$ | No moon | $\quantity{22.7}{mag\cdot arcsec^{-2}}$ |
| $B$ | Full moon | $\quantity{19.4}{mag\cdot arcsec^{-2}}$ |
| $K$ at $\quantity{2.2}{\mu m}$ | Ground | $\quantity{12.5}{mag\cdot arcsec^{-2}}$ |
| $K$ at $\quantity{2.2}{\mu m}$ | Space | $\quantity{21.3}{mag\cdot arcsec^{-2}}$ |

##### Angular resolution

The Rayleigh criterion for a circular aperture is

$$
\theta=1.22\frac{\signal{\lambda}}{\mechanical{D}},
$$

where $\mechanical{D}$ is the mirror diameter.

Express $\signal{\lambda}$ and $\mechanical{D}$ in the same units to obtain $\theta$ in radians.

##### Point spread functions and seeing

A point spread function describes the two-dimensional image of a point source. Diffraction produces the rings and spikes in the example.

![[Kyle Kabasares - Intro to Astrophysics - Point spread function rings and spikes.png|**Fig. 16** A point spread function with concentric rings and intersecting diffraction spikes.]]

The Hubble Space Telescope illustrates how the struts supporting the secondary mirror create diffraction features.

![[Kyle Kabasares - Intro to Astrophysics - Hubble optical path and struts.png|**Fig. 17** Light reflects from the primary and secondary mirrors to the camera. Struts support the secondary mirror.]]

![[Kyle Kabasares - Intro to Astrophysics - Atmospheric seeing and wavefront distortion.png|**Fig. 18** Plane wavefronts enter the atmosphere and emerge distorted by atmospheric seeing.]]

Low turbulence above a mountaintop telescope improves observing conditions. Adaptive optics compensates for atmospheric distortion.

## Source

Kyle Kabasares, *Intro to Astrophysics (Physics 240A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{M}_{\odot}$ | $\unit{\mathrm{g}}$ | Solar mass | Mass of the Sun. |
| — | $\unit{\mathrm{cm}}$ | Distance | Length measured in astronomical units, light-years, or parsecs. |
| — | $\unit{\mathrm{erg}}$ | Energy | Quantity measured in ergs in CGS. |
| $\energy{L}_{\odot}$ | $\unit{\mathrm{erg}\cdot\mathrm{s}^{-1}}$ | Solar luminosity | Radiant power of the Sun. |
| — | $\unit{\mathrm{m}}$ | Wavelength | Length measured in nanometers, ångströms, or micrometers. |
| $\energy{L}$ | $\unit{erg\cdot s^{-1}}$ | Luminosity | Total radiant power. |
| $\energy{L}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot Hz^{-1}}$ | Luminosity per unit frequency | Radiant power in a frequency interval divided by its width. |
| $\energy{L}_{\signal{\lambda}}$ | $\unit{erg\cdot s^{-1}\cdot\mathring{A}^{-1}}$ | Luminosity per unit wavelength | Radiant power in a wavelength interval divided by its width. |
| $\mechanical{d}$ | $\unit{cm}$ | Distance to the source | Distance from the observer to the spherical source. |
| $\energy{f},\,\energy{F}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}}$ | Radiant flux | Radiant power per unit area. |
| $\energy{f}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot Hz^{-1}}$ | Flux density per unit frequency | Radiant flux per unit frequency interval. |
| $\energy{f}_{\signal{\lambda}}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot\mathring{A}^{-1}}$ | Flux density per unit wavelength | Radiant flux per unit wavelength interval. |
| $\signal{\nu}$ | $\unit{Hz}$ | Frequency | Frequency of the radiation. |
| $\signal{\lambda}$ | $\unit{cm}$ | Wavelength | Wavelength of the radiation. |
| $\signal{c}$ | $\unit{cm\cdot s^{-1}}$ | Speed of light | Speed of light in vacuum. |
| $\energy{B}_{\signal{\nu}}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot sr^{-1}\cdot Hz^{-1}}$ | Spectral radiance per unit frequency | Planck spectrum in frequency units. |
| $\energy{B}_{\signal{\lambda}}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot sr^{-1}\cdot cm^{-1}}$ | Spectral radiance per unit wavelength | Planck spectrum in wavelength units when wavelength is in centimeters. |
| $\thermal{T},\,\thermal{T}_{\mathrm{eff}}$ | $\unit{K}$ | Temperature | Blackbody temperature or the effective temperature from a measured luminosity and radius. |
| $h$ | $\unit{erg\cdot s}$ | Planck constant | Relates photon energy to frequency. |
| $k$ | $\unit{erg\cdot K^{-1}}$ | Boltzmann constant | Relates temperature to energy. |
| $\sigma$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot K^{-4}}$ | Stefan–Boltzmann constant | Relates blackbody flux to the fourth power of temperature. |
| $\mechanical{r}$ | $\unit{cm}$ | Emitter radius | Radius of the spherical emitter. |
| $\signal{\lambda}_{\max}$ | $\unit{mm}$ | Peak wavelength | Wavelength of maximum blackbody radiance per unit wavelength. |
| $m$ | 1 | Apparent magnitude | Logarithmic measure of observed flux relative to a zero point. |
| $\signal{T}(\signal{\lambda})$ | 1 | Filter transmission | Fraction of incident light transmitted at each wavelength. |
| $\energy{F}_{\mathrm{band}}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot\mathring{A}^{-1}}$ | Band-averaged flux density | Flux density weighted by the filter transmission. |
| $\mathrm{ZP}$ | 1 | Magnitude zero point | Additive calibration constant for a specified filter and flux or count-rate unit. |
| $\energy{f}_0$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}}$ | Reference flux | Flux scale for zero magnitude. |
| $b$ | 1 | Softening constant | Sets the low-flux scale of the inverse hyperbolic sine magnitude. |
| $Z$ | $\unit{rad}$ | Zenith angle | Angle between the line of sight and the local vertical. |
| — | 1 | Airmass | Slant atmospheric path length relative to the zenith path length. |
| $B-V$ | 1 | Color index | Difference between the apparent magnitudes in the $B$ and $V$ filters. |
| $B,\,V,\,B',\,V'$ | 1 | Filter magnitudes | Standard or instrumental apparent magnitudes in the $B$ and $V$ bands. |
| $\alpha_V,\,\beta_V,\,\gamma_V$ | 1 | Photometric transformation coefficients | Scale, color coefficient, and offset for conversion to the standard $V$ magnitude. |
| $\energy{f}_{10}$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}}$ | Flux at 10 parsecs | Flux the source would give at the reference distance. |
| $m_{10}$ | 1 | Absolute magnitude | Apparent magnitude at the reference distance of ten parsecs. |
| $M,\,M_V$ | 1 | Absolute magnitude | Absolute magnitude, or its value specifically in the $V$ band. |
| $m-M$ | 1 | Distance modulus | Difference between apparent and absolute magnitude. |
| $A$ | 1 | Extinction | Increase in apparent magnitude caused by attenuation. |
| $M_{\mathrm{bol}}$ | 1 | Absolute bolometric magnitude | Absolute magnitude based on total luminosity. |
| $C_{\mathrm{bol}}$ | 1 | Bolometric correction | Offset from the absolute magnitude in one band to the absolute bolometric magnitude. |
| $n$ | $\unit{cm^{-3}}$ | Grain number density | Number of dust grains per unit volume. |
| $\sigma(\signal{\lambda})$ | $\unit{cm^2}$ | Extinction cross section | Effective area for a grain to absorb or scatter light at a given wavelength. |
| $\energy{N},\,\energy{N}_i$ | $\unit{s^{-1}}$ | Photon rate | Transmitted and incident photons per second. |
| $\mechanical{x}$ | $\unit{cm}$ | Path length | Distance traveled through the dust. |
| $\tau$ | 1 | Optical depth | Attenuation exponent along the path. |
| $E(B-V)$ | 1 | Color excess | Observed $B-V$ color minus its intrinsic value. |
| $R_V$ | 1 | Ratio of total to selective extinction | $V$-band extinction divided by the $B-V$ color excess. |
| — | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot sr^{-1}}$ | Surface brightness | Observed flux per unit angular area. |
| $\mechanical{r}$ | — | Profile radius | Radial coordinate in the surface brightness sketch. |
| — | $\unit{mag\cdot arcsec^{-2}}$ | Surface brightness in magnitudes | Magnitude corresponding to the flux in one square arcsecond. |
| $\mechanical{D}$ | $\unit{pc}$ | Distance | Distance to the square in the problem hint. |
| $\theta$ | $\unit{rad}$ | Position angle | Orientation on the sky measured from north toward east. |
| $\mu_B,\,\mu_K$ | $\unit{mag\cdot arcsec^{-2}}$ | Night-sky surface brightness | Sky brightness in the $B$ or $K$ band. |
| $\theta$ | $\unit{rad}$ | Angular resolution | Minimum angular separation in the Rayleigh criterion. |
| $\mechanical{D}$ | $\unit{m}$ | Aperture diameter | Diameter of the telescope mirror. |
| $\alpha$ | $\unit{h}$ | Right ascension | Celestial coordinate measured eastward along the celestial equator. |
| $\mu$ | $\unit{arcsec\cdot yr^{-1}}$ | Proper motion | Angular rate of motion across the sky. |
| $\signal{\nu}_0,\,\signal{\nu}_{\mathrm{obs}}$ | $\unit{Hz}$ | Rest and observed frequencies | Frequency in the source rest frame and frequency measured by the observer. |
| $\signal{\lambda}_0,\,\signal{\lambda}_{\mathrm{obs}},\,\Delta\signal{\lambda}$ | $\unit{cm}$ | Rest wavelength, observed wavelength, and shift | Wavelengths in the rest and observer frames and the difference between them. |
| $\alpha$ | $\unit{arcsec}$ | Parallax angle | Angular shift due to a one-AU observing baseline. |
| $\lambda$ | $\unit{rad}$ | Convergent-point angle | Angle between the line of sight to the cluster member and the direction of the shared velocity. |
| $i$ | $\unit{deg}$ | Inclination | Angle between the orbital axis and the line of sight. |
| $\mechanical{a}$ | $\unit{cm}$ | Binary separation | Distance between the two stars in a circular orbit. |
| $\signal{T}$ | $\unit{s}$ | Orbital period | Time for one orbit. |
| $\mechanical{M}$ | $\unit{g}$ | Stellar mass | Mass in the main-sequence scaling relations. |
| $t_1,\ldots,t_8$ | $\unit{s}$ | Eclipse contact times | Ingress and egress landmarks in the binary light curve. |
| $\energy{L}_{\mathrm{planet}},\,\energy{L}_{\star}$ | $\unit{erg\cdot s^{-1}}$ | Planet and stellar luminosities | Radiant powers compared in the direct-detection example. |
| $e$ | 1 | Orbital eccentricity | Deviation of the orbit from a circle. |
| $\signal{\sigma}_{\star},\,\signal{\sigma}_{\mathrm S},\,\signal{\sigma}_{\mathrm D},\,\signal{\sigma}_{\mathrm R},\,\signal{\sigma}_{\mathrm P}$ | $\unit{e^-}$ | Photometric noise components | Source noise and per-pixel terms in the aperture noise formula. |
| $\signal{N},\,\signal{N}_{\mathrm T},\,\signal{N}_{\mathrm E}$ | $\unit{counts}$ | Count noise | Noise in the detected counts, including target and reference contributions. |
| $\signal{\sigma}_{\mathrm s},\,\signal{\sigma}_{\mathrm{photometric}}$ | — | Scintillation and photometric noise | Noise contributions compared in the exposure example. |
| $\signal{I}_{\mathrm{obs}},\,\signal{I}_{\star}$ | — | Observed and stellar spectra | Recorded intensity and model stellar intensity as functions of wavelength. |
| $n$ | $\unit{pc^{-3}}$ | Stellar number density | Number of stars per unit volume. |
| $\energy{S}$ | $\unit{Jy}$ | Radio flux density | Flux density on the horizontal axis of the radio source count sketch. |
| $\sigma$ | 1 | Absolute-magnitude dispersion | Standard deviation of the Gaussian magnitude distribution. |
| $t_0$ | $\unit{yr}$ | Star formation decay time | E-folding time of the exponential star formation history. |
| $A$ | $\unit{km\cdot s^{-1}\cdot kpc^{-1}}$ | First Oort constant | Local rotational shear inferred from the longitude dependence of radial velocities. |
| $B$ | $\unit{km\cdot s^{-1}\cdot kpc^{-1}}$ | Second Oort constant | Offset in the nearby tangential velocity per unit distance. |
| $\alpha$ | $\unit{rad}$ | Scattering angle | Small change in the direction of the moving star. |
