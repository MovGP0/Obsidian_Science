---
title: "Intro to Astrophysics (Physics 240A, UC Irvine 2018)"
---

> [!TLDR]
> These galactic astronomy lectures cover photometry, astrometry, stars, and exoplanets. They derive tools for studying the Milky Way’s structure, stellar dynamics, and chemical evolution.

Source notes by Kyle Kabasares. [[Intro to Astrophysics (Physics 240A, UC Irvine 2018).pdf|Original PDF]].

Transcribed PDF pages 1–119 of 119.

### PDF page 1

#### Physics 240A. Galactic Astronomy

Lecture of April 5, 2018.

- Course textbook. *Galaxies in the Universe* by Sparke and Gallagher.
- Recommended reading. *Galactic Astronomy* by Binney and Merrifield, *Galactic Dynamics* by Binney and Tremaine, and *Astrophysics in a Nutshell* by Maoz.

Read extensively. The aim of the course is to build a foundation in astrophysics.

The first homework is due April 17. Sign up for Wikipedia and choose your username carefully.

#### Systems of units

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

#### Wavelengths

$$
\begin{aligned}
\quantity{1}{nm} &= \quantity{10^{-9}}{m},\\
\unit{1\,\mathring{A}} &= \quantity{10^{-10}}{m},\\
\quantity{1}{\mu m} &= \quantity{10^{-6}}{m}.
\end{aligned}
$$

### PDF page 2

#### Luminosity and flux density

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

#### Planck spectra

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

#### Stefan–Boltzmann law

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

### PDF page 3

#### Wien’s displacement law

$$
\signal{\lambda}_{\max}\thermal{T}\approx\quantity{2.9}{mm\cdot K}.
$$

#### The magnitude system

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

#### Photometric bands

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

### PDF page 4

#### Vega and AB magnitude zero points

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

### PDF page 5

#### Lecture of April 10, 2018

The page is marked “Birthday lecture!”

Week 2 reading includes sections 1.3 and 2.1 of Sparke and Gallagher, chapter 2 of Binney and Merrifield, and additional papers by Bohlin (2014) and Bessell (2005).

#### Photometric systems

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

### PDF page 6

#### Inverse hyperbolic sine magnitude

$$
m=-\frac{2.5}{\ln 10}
\left[\operatorname{asinh}\left(\frac{\energy{f}/\energy{f}_0}{2b}\right)+\ln b\right].
$$

Here $\energy{f}_0$ is the zero-magnitude reference flux and $b$ is the softening constant.

#### Airmass

![[Kyle Kabasares - Intro to Astrophysics - Zenith and inclined atmospheric paths.png|**Fig. 3** The atmospheric path $\mechanical{a}_0$ to a star at the zenith and path $\mechanical{a}$ to a star at zenith angle $Z$.]]

In the plane-parallel approximation, the airmass is the slant path divided by the vertical path.

$$
\text{airmass}=\frac{\mechanical{a}}{\mechanical{a}_0}=\sec Z.
$$

#### Color index

The color index $(B-V)=m_B-m_V$ is the apparent magnitude in the $B$ filter minus the apparent magnitude in the $V$ filter.

### PDF page 7

The filter name alone can denote apparent magnitude. For example, $m_B=B$ and $B=15\,\mathrm{mag}$. In a color such as $V-I$ or $H-K$, the shorter-wavelength filter comes first. Vega has color zero for all filter pairs in the idealized Vega system used here.

Landolt’s telescope defines the standard $UBVRI$ measurements. The filters on another telescope are denoted $U'B'V'R'I'$.

![[Kyle Kabasares - Intro to Astrophysics - Standard and instrumental V passbands.png|**Fig. 4** Standard $V$ and instrumental $V'$ filter bandpasses. Their transmission curves differ in shape and peak wavelength.]]

The transformation to the standard $V$ magnitude uses the instrumental magnitude and color.

$$
V=\alpha_V V'+\beta_V(B'-V')+\gamma_V.
$$

### PDF page 8

Photometric measurements should be consistent across systems. Synthetic photometry is important for this comparison.

#### Absolute magnitude

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

### PDF page 9

Writing the absolute magnitude as $M$, the previous result becomes

$$
M-m=-2.5\log_{10}\left[\left(\frac{\mechanical{d}}{\unit{pc}}\right)^2\right]+2.5\log_{10}(10^2).
$$

The distance modulus is

$$
\boxed{m-M=5\log_{10}\left(\frac{\mechanical{d}}{\unit{pc}}\right)-5}.
$$

With extinction $A$, the right-hand side gains an additive $+A$. For reference, the Sun has $M_V=+4.83$.

#### Bolometric magnitude

Bolometric magnitude uses luminosity integrated over all wavelengths. Apply the bolometric correction $C_{\mathrm{bol}}$ to the absolute magnitude in a specific band, here $V$.

$$
\boxed{M_{\mathrm{bol}}=M_V+C_{\mathrm{bol}}}
$$

The term comes from bolometers.

![[Kyle Kabasares - Intro to Astrophysics - Bolometric luminosity and a single band.png|**Fig. 5** Spectral luminosity across all wavelengths. The shaded interval shows the contribution of one band.]]

### PDF page 10

#### Extinction

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

### PDF page 11

#### Optical depth and color excess

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

### PDF page 12

For the Milky Way, the lecture gives the approximate relations

$$
A_V\simeq 3.1E(B-V),\qquad A_B\simeq 4.0E(B-V).
$$

![[Kyle Kabasares - Intro to Astrophysics - Milky Way extinction curve.png|**Fig. 8** Extinction as a function of wavelength. The curve marks the feature at $2175$ Å and the $B$ and $V$ bands.]]

#### Surface brightness

Surface brightness is the flux per unit angular area.

![[Kyle Kabasares - Intro to Astrophysics - Galaxy and square arcsecond.png|**Fig. 9** A sketch of an extended source beside a reference square one arcsecond on each side.]]

![[Kyle Kabasares - Intro to Astrophysics - Radial surface brightness profile.png|**Fig. 10** Surface brightness as a function of radius. The profile falls from a broad central peak.]]

### PDF page 13

A common unit of surface brightness is magnitudes per square arcsecond. Consider a uniform square that measures two arcseconds on each side and has a total apparent magnitude of 15.

![[Kyle Kabasares - Intro to Astrophysics - Magnitude of a square arcsecond.png|**Fig. 11** A square with total flux $\energy{f}_{\mathrm{tot}}$ contains four equal squares. The shaded square has flux $\energy{f}$ and magnitude $m_1$.]]

One square arcsecond contains one-fourth of the total flux, so

$$
m_1-m_{\mathrm{tot}}
=-2.5\log_{10}\left(\frac{\energy{f}}{\energy{f}_{\mathrm{tot}}}\right)
=-2.5\log_{10}\left(\frac14\right)\approx1.5.
$$

The surface brightness is $\quantity{16.5}{mag\cdot arcsec^{-2}}$. In Euclidean space, surface brightness is independent of distance.

#### Differential atmospheric refraction

The atmosphere refracts light by different amounts at different wavelengths. This shifts the apparent position of a star.

![[Kyle Kabasares - Intro to Astrophysics - Differential atmospheric refraction.png|**Fig. 12** A vertical light path and an inclined path through the atmosphere. Colored extensions show different apparent positions for the same star.]]

### PDF page 14

Different wavelengths refract at different angles. The notes suggest reading about spectrographs.

#### Hint for problem 4

Consider a square one parsec on each side at distance $\mechanical{D}$.

![[Kyle Kabasares - Intro to Astrophysics - One parsec square.png|**Fig. 13** A square of side length one parsec at distance $\mechanical{D}$.]]

#### Lecture of April 12, 2018. Parallactic angle

![[Kyle Kabasares - Intro to Astrophysics - Spectrograph entrance slit.png|**Fig. 14** Entrance slit of the spectrograph.]]

![[Kyle Kabasares - Intro to Astrophysics - Position angle on the sky.png|**Fig. 15** A sky image with north up and east left. Position angle $\theta$ is measured from north toward east.]]

The image projects the great circle of the sky onto a two-dimensional grid. The notes suggest reviewing spherical trigonometry.

### PDF page 15

#### Sources of night-sky brightness

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

#### Angular resolution

The Rayleigh criterion for a circular aperture is

$$
\theta=1.22\frac{\signal{\lambda}}{\mechanical{D}},
$$

where $\mechanical{D}$ is the mirror diameter.

### PDF page 16

Express $\signal{\lambda}$ and $\mechanical{D}$ in the same units to obtain $\theta$ in radians.

#### Point spread functions and seeing

A point spread function describes the two-dimensional image of a point source. Diffraction produces the rings and spikes in the example.

![[Kyle Kabasares - Intro to Astrophysics - Point spread function rings and spikes.png|**Fig. 16** A point spread function with concentric rings and intersecting diffraction spikes.]]

The Hubble Space Telescope illustrates how the struts supporting the secondary mirror create diffraction features.

![[Kyle Kabasares - Intro to Astrophysics - Hubble optical path and struts.png|**Fig. 17** Light reflects from the primary and secondary mirrors to the camera. Struts support the secondary mirror.]]

![[Kyle Kabasares - Intro to Astrophysics - Atmospheric seeing and wavefront distortion.png|**Fig. 18** Plane wavefronts enter the atmosphere and emerge distorted by atmospheric seeing.]]

Low turbulence above a mountaintop telescope improves observing conditions. Adaptive optics compensates for atmospheric distortion.

### PDF page 17

Adaptive optics compensates for blurring in real time.

#### Coordinate systems

Earth rotates eastward. The local meridian passes through the zenith and crosses the horizon at north and south.

![[Kyle Kabasares - Intro to Astrophysics - Local meridian and horizon.png|**Fig. 19** The horizon and meridian on the local sky, with east, west, and the zenith marked.]]

The hour angle indicates how far east or west an object is from the meridian, expressed in hours.

![[Kyle Kabasares - Intro to Astrophysics - Celestial poles and stellar paths.png|**Fig. 20** The celestial sphere with its north and south poles, the equator, and the apparent tracks of stars.]]

### PDF page 18

Stellar tracks appear different at the equator. Irvine lies at about $33^\circ40^\prime$ north. From there, the celestial equator crosses the sky at an angle to the horizon.

![[Kyle Kabasares - Intro to Astrophysics - Tilted stellar tracks at Irvine.png|**Fig. 21** The local horizon and apparent stellar tracks on the celestial sphere. The red line marks the tilted north–south axis.]]

#### Celestial coordinates

Right ascension and declination are abbreviated RA and dec, or $(\alpha,\delta)$. The north celestial pole is at $\delta=+90^\circ$ and the south celestial pole is at $\delta=-90^\circ$.

### PDF page 19

![[Kyle Kabasares - Intro to Astrophysics - Declination at the poles and equator.png|**Fig. 22** Declination is $0^\circ$ at the celestial equator, $+90^\circ$ at the north pole, and $-90^\circ$ at the south pole.]]

#### Right ascension

Right ascension is analogous to terrestrial longitude. It is written in hours, minutes, and seconds, with 60 minutes in an hour and 60 seconds in a minute. An example is $22\mathord{:}56\mathord{:}31.57$.

> [!note]
> The source says “latitude” here. Declination corresponds to latitude, and right ascension corresponds to longitude.

![[Kyle Kabasares - Intro to Astrophysics - Right ascension grid.png|**Fig. 23** Lines of constant right ascension converge at the celestial poles. The equatorial labels wrap from 23 hours to 0 hours.]]

The arc length along a circle of constant declination depends on $\delta$. One hour of RA spans $15^\circ\cos\delta$ along that circle, and one second of RA spans $15^{\prime\prime}\cos\delta$.

#### The Sun’s motion across the sky

The daily or diurnal motion of the Sun across the sky is due to Earth’s rotation.

### PDF page 20

#### The celestial equator and ecliptic

The Sun’s apparent annual path on the celestial sphere is a great circle called the ecliptic. The tilt of Earth’s rotation axis makes the ecliptic about $23.5^\circ$ from the celestial equator.

![[Kyle Kabasares - Intro to Astrophysics - Ecliptic and equinoxes.png|**Fig. 24** The ecliptic crosses the celestial equator at the equinoxes, at right ascensions of 0 and 12 hours. The solstices are at 6 and 18 hours.]]

#### Mean solar day

The lecture compares the mean solar day with the sidereal period. After 24 hours, Earth has moved along its orbit and the noon orientation is different relative to distant space.

![[Kyle Kabasares - Intro to Astrophysics - Mean solar day geometry.png|**Fig. 25** Two positions of Earth one mean solar day apart. The lines toward the Sun show how the noon direction changes. The sketch continues across two PDF pages.]]

### PDF page 21

#### Local sidereal time

Local sidereal time (LST) is the right ascension currently crossing the local meridian. A mean solar day is 3 minutes 56 seconds longer than a sidereal day. The lecture emphasizes remembering this difference.

#### Precession of the equinoxes

![[Kyle Kabasares - Intro to Astrophysics - Precession of the north celestial pole.png|**Fig. 26** As Earth’s axis precesses, the north celestial pole traces a circle on the sky that passes near Polaris, Thuban, and Vega.]]

### PDF page 22

#### Annual motion of the Sun

Over a year, the Sun traces a complete circle on the celestial sphere along the ecliptic. The margin lists B1950 and J2000 as reference epochs and marks J2000 as the standard for the lecture.

#### Galactic coordinates

Galactic coordinates are longitude $\ell$ and latitude $b$.

![[Kyle Kabasares - Intro to Astrophysics - Galactic longitude and latitude.png|**Fig. 27** Galactic longitude $\ell$ is measured from the direction to the Galactic center (GC). Galactic latitude $b$ is measured above the Galactic plane. The observer is at distance $\mechanical{R}_0$ from the center.]]

Galactocentric cylindrical coordinates are $(\mechanical{R},\mechanical{z},\phi)$.

### PDF page 23

![[Kyle Kabasares - Intro to Astrophysics - Galactocentric cylindrical coordinates.png|**Fig. 28** The coordinates of a star are its projected distance $\mechanical{R}$ from the Galactic center, its height $\mechanical{z}$ above the plane, and the azimuth $\phi$.]]

#### Celestial reference frames

The source lists B1950 and FK5 together and gives a precision of about $0.03^{\prime\prime}$. It lists about 200 quasars for the International Celestial Reference System (ICRS) and also mentions SIMBAD.

> [!note]
> B1950 is conventionally associated with FK4, and J2000 with FK5.

#### Measuring stellar velocities

The radial component $\mechanical{v}_r$ is measured from the Doppler shift. The transverse component $\mechanical{v}_t$ is associated with proper motion.

![[Kyle Kabasares - Intro to Astrophysics - Radial and transverse stellar velocities.png|**Fig. 29** A star’s velocity $\mechanical{\mathbf{v}}$ has a component along the line of sight and a component perpendicular to it.]]

### PDF page 24

#### Proper motion

Proper motion $\mu$ is the angular rate of a star’s transverse motion. For a star at distance $\mechanical{d}$, the small-angle relation is

$$
\mu=\frac{\mechanical{v}_t}{\mechanical{d}}.
$$

![[Kyle Kabasares - Intro to Astrophysics - Proper motion against background stars.png|**Fig. 30** Successive positions of a moving star relative to background stars.]]

The homework asks for the practical conversion. For the numerical values in the indicated units,

$$
\mu\,[\unit{arcsec\cdot yr^{-1}}]
=\frac{\mechanical{v}_t\,[\unit{km\cdot s^{-1}}]}{4.74\,\mechanical{d}\,[\unit{pc}]}.
$$

> [!note]
> The handwritten unit says milliarcseconds per year. The factor $4.74$ with distance in parsecs gives arcseconds per year. Multiply the result by $1000$ for milliarcseconds per year.

#### Redshift

For radial motion, with $\mechanical{v}_r$ positive for recession,

$$
\signal{\nu}_{\mathrm{obs}}=(1-\beta)\gamma\signal{\nu}_0,
\qquad
\beta=\frac{\mechanical{v}_r}{\signal{c}},
\qquad
\gamma=\frac{1}{\sqrt{1-\beta^2}}.
$$

Here $\signal{\nu}_0$ is the rest frequency. In the nonrelativistic limit,

$$
\frac{\Delta\signal{\lambda}}{\signal{\lambda}_0}\approx\frac{\mechanical{v}_r}{\signal{c}},
\qquad
\Delta\signal{\lambda}=\signal{\lambda}_{\mathrm{obs}}-\signal{\lambda}_0.
$$

#### Lecture marked April 10, 2018. Stellar classification

Read about stellar classification in the OpenStax astronomy textbook. The course goal is to explain stellar structure and classification.

### PDF page 25

Look at stellar spectra and find a Wikipedia article to contribute to.

#### Trigonometric parallax

![[Kyle Kabasares - Intro to Astrophysics - Annual stellar parallax geometry.png|**Fig. 31** Observations from opposite sides of Earth’s orbit, in June and December, shift the apparent position of a nearby star against the distant background. The parallax angle $\alpha$ is half the full displacement in this geometry.]]

With a baseline of one astronomical unit from the Sun,

$$
\tan\alpha=\frac{\quantity{1}{AU}}{\mechanical{d}}\approx\alpha\quad\text{in radians}.
$$

One parsec is about $\quantity{206{,}265}{AU}$. The numerical parallax in arcseconds is the reciprocal of the distance in parsecs.

$$
\boxed{\frac{\alpha}{\unit{arcsec}}=\frac{1}{\mechanical{d}/\unit{pc}}}
$$

Accurate parallaxes are difficult to measure. The observed stellar track combines annual parallax and proper motion.

![[Kyle Kabasares - Intro to Astrophysics - Combined parallax and proper motion track.png|**Fig. 32** Periodic shifts from parallax superimposed on a drift due to proper motion.]]

### PDF page 26

The semimajor axis of the annual parallax ellipse is the parallax angle. The lecture gives about $\quantity{200}{pc}$ as a practical parallax range in the context of this example.

![[Kyle Kabasares - Intro to Astrophysics - Local parallax reach in the Milky Way.png|**Fig. 33** The local region within parallax reach is small on the scale of the Galaxy. The diagram marks $\quantity{8.5}{kpc}$ from the Sun to the Galactic center.]]

#### Astrometric catalogs

| Catalog | Coverage stated in the lecture | Precision stated in the lecture |
| --- | --- | --- |
| Hipparcos | About 100,000 stars to $V=7.3\,\unit{mag}$. The notes list a $\quantity{29}{cm}$ telescope and the dates 1985–1993. | Positions about $\quantity{1\text{–}3}{mas}$ and proper motions about $\quantity{1\text{–}2}{mas\cdot yr^{-1}}$. |
| Tycho | About 2.5 million stars. | Lower precision than Hipparcos. |
| U.S. Naval Observatory CCD catalog | About 48 million stars. | Positions about $\quantity{20\text{–}70}{mas}$ and proper motions about $\quantity{1\text{–}7}{mas\cdot yr^{-1}}$. |
| Gaia | About $10^9$ stars. | |

The lecture asks students to read about the Gaia spacecraft.

### PDF page 27

#### Moving cluster method

The lecture refers to Binney and Merrifield. The apparent motions of cluster members point toward a common convergent point because the stars share a space velocity.

![[Kyle Kabasares - Intro to Astrophysics - Moving cluster convergent point.png|**Fig. 34** The projected motions of stars in a cluster converge at a point on the sky.]]

![[Kyle Kabasares - Intro to Astrophysics - Moving cluster velocity components.png|**Fig. 35** The direction to a cluster star and the shared velocity direction make an angle $\lambda$. The radial and transverse components are $\mechanical{v}_r$ and $\mechanical{v}_t$.]]

$$
\tan\lambda=\frac{\mechanical{v}_t}{\mechanical{v}_r},
\qquad
\mechanical{v}_t=\mechanical{v}_r\tan\lambda.
$$

Combining this with the proper-motion conversion gives the distance from the numerical values in the indicated units.

$$
\mechanical{d}\,[\unit{pc}]
=\frac{\mechanical{v}_r\,[\unit{km\cdot s^{-1}}]\tan\lambda}
{4.74\,\mu\,[\unit{arcsec\cdot yr^{-1}}]}.
$$

> [!note]
> The handwritten intermediate equation labels distance in kiloparsecs. With that unit the denominator uses $4740$ in place of $4.74$.

The lecture gives $\mechanical{d}\simeq\quantity{46}{pc}$ for the Hyades cluster.

#### Secular and statistical parallax

![[Kyle Kabasares - Intro to Astrophysics - Secular parallax and solar motion.png|**Fig. 36** The diagram marks a solar motion of about $\quantity{4}{AU\cdot yr^{-1}}$ and shows apparent proper motions against background stars.]]

### PDF page 28

#### Masses of stars and binaries

An inclination of $i=0^\circ$ is face-on. An inclination of $i=90^\circ$ is edge-on.

![[Kyle Kabasares - Intro to Astrophysics - Orbital inclination.png|**Fig. 37** A disk inclined by $i$ from the plane of the sky as viewed along the dashed line of sight.]]

#### Circular orbits

For two stars in circular orbits about their common center of mass,

$$
\mechanical{M}_1\mechanical{r}_1=\mechanical{M}_2\mechanical{r}_2,\qquad
\mechanical{a}=\mechanical{r}_1+\mechanical{r}_2.
$$

![[Kyle Kabasares - Intro to Astrophysics - Circular binary orbits.png|**Fig. 38** The stars are on opposite sides of the common center of mass and travel in circles of radii $\mechanical{r}_1$ and $\mechanical{r}_2$.]]

For orbital period $\signal{T}$,

$$
\mechanical{v}_1=\frac{2\pi\mechanical{r}_1}{\signal{T}},\qquad
\mechanical{v}_2=\frac{2\pi\mechanical{r}_2}{\signal{T}},\qquad
\mechanical{\omega}=\frac{2\pi}{\signal{T}}.
$$

Write the equation of motion for each star.

### PDF page 29

The circular orbit equations give

$$
\boxed{\mechanical{\omega}^2=\frac{G(\mechanical{M}_1+\mechanical{M}_2)}{\mechanical{a}^3}},
\qquad
\signal{T}^2=\frac{4\pi^2\mechanical{a}^3}{G(\mechanical{M}_1+\mechanical{M}_2)}.
$$

The period law applies to planetary orbits and more general Keplerian orbits with $\mechanical{a}$ equal to the semimajor axis of the relative orbit. With $\signal{T}$ in years, $\mechanical{a}$ in astronomical units, and masses in solar masses, the numerical form is

$$
\signal{T}^2=\frac{\mechanical{a}^3}{\mechanical{M}_1+\mechanical{M}_2}.
$$

The orbital speed ratio $\mechanical{v}_1/\mechanical{v}_2=\mechanical{r}_1/\mechanical{r}_2$ gives the mass ratio through the center-of-mass equation. The mass sum and ratio give the two masses.

#### Visual and spectroscopic binaries

- A visual binary is a pair whose two components can be resolved. These binaries typically have large orbital separations.
- A spectroscopic binary is a spatially unresolved pair whose spectrum reveals its binary nature.

### PDF page 30

Spectroscopic binaries are double-lined when lines from both stars are visible and single-lined when lines from only one star are visible. In an eclipsing binary, the orbital inclination is close to $90^\circ$.

#### Using binaries to calculate masses

Measure the angular orbital radii $\theta_1$ and $\theta_2$. The inclination can in principle be determined. For angular radii corrected for projection,

$$
\mechanical{r}_1=\theta_1\mechanical{d},\qquad
\mechanical{r}_2=\theta_2\mechanical{d}.
$$

If the distance is known, these radii give the mass ratio and the separation $\mechanical{a}$. The orbital period then gives the individual masses. At fixed measured angles and period, $\mechanical{M}_1$ and $\mechanical{M}_2$ scale as $\mechanical{a}^3\propto\mechanical{d}^3$.

### PDF page 31

#### Spectroscopic binaries

![[Kyle Kabasares - Intro to Astrophysics - Spectroscopic binary radial velocity curves.png|**Fig. 39** The radial velocities of two stars vary in opposite phase. The amplitudes about the common baseline are $k_1$ and $k_2$.]]

In Maoz’s notation, $\mechanical{k}_1=\mechanical{v}_1\sin i$ and $\mechanical{k}_2=\mechanical{v}_2\sin i$ are the radial velocity amplitudes. Their ratio gives the inverse mass ratio.

$$
\frac{\mechanical{k}_1}{\mechanical{k}_2}=\frac{\mechanical{M}_2}{\mechanical{M}_1}.
$$

Use the period law and the circular orbital speeds.

$$
\begin{aligned}
\left(\frac{2\pi}{\signal{T}}\right)^2(\mechanical{r}_1+\mechanical{r}_2)^3
&=G(\mechanical{M}_1+\mechanical{M}_2),\\
\left(\frac{2\pi\mechanical{r}_1}{\signal{T}}+\frac{2\pi\mechanical{r}_2}{\signal{T}}\right)^3
&=\frac{2\pi G(\mechanical{M}_1+\mechanical{M}_2)}{\signal{T}}\\
&=(\mechanical{v}_1+\mechanical{v}_2)^3
=\frac{(\mechanical{k}_1+\mechanical{k}_2)^3}{\sin^3 i}.
\end{aligned}
$$

$$
\boxed{(\mechanical{M}_1+\mechanical{M}_2)\sin^3 i
=\frac{\signal{T}(\mechanical{k}_1+\mechanical{k}_2)^3}{2\pi G}}
$$

Together with the mass ratio, this gives $\mechanical{M}_1\sin^3 i$ and $\mechanical{M}_2\sin^3 i$ even when the inclination is unknown.

### PDF page 32

![[Kyle Kabasares - Intro to Astrophysics - Primary and secondary eclipse light curve.png|**Fig. 40** Normalized luminosity versus time for an eclipsing binary. The secondary eclipse spans contacts $t_1$ through $t_4$, and the deeper primary eclipse spans $t_5$ through $t_8$.]]

Mass transfer can complicate the analysis of binaries.

#### Main-sequence stars

The mass–luminosity relation has the approximate form $\energy{L}\propto\mechanical{M}^{\alpha}$. The notes give Maoz’s exponents as $\alpha\sim3$ above one solar mass and $\alpha\sim5$ below it.

The notes give the following values from Sparke and Gallagher. For $\mechanical{M}_{\odot}\le\mechanical{M}\le10\mechanical{M}_{\odot}$, $\alpha\sim3.9$. Above ten solar masses,

$$
\energy{L}\sim50\energy{L}_{\odot}
\left(\frac{\mechanical{M}}{\mechanical{M}_{\odot}}\right)^{2.2}.
$$

The approximate mass–radius relation is

$$
\mechanical{R}\sim\mechanical{R}_{\odot}
\left(\frac{\mechanical{M}}{\mechanical{M}_{\odot}}\right)^{0.7}.
$$

The solar radius is $\mechanical{R}_{\odot}\simeq\quantity{700{,}000}{km}\sim109\mechanical{R}_{\mathrm{Earth}}$.

### PDF page 33

#### Problem 11. Color and filter fluxes

![[Kyle Kabasares - Intro to Astrophysics - Vega spectrum and B and V bands.png|**Fig. 41** Vega’s spectrum and the $B$ and $V$ passbands, plotted against wavelength.]]

In the Vega system the $B-V$ color is

$$
\begin{aligned}
B-V&=m_B-m_V\\
&=-2.5\log_{10}\left(\frac{\energy{F}_B}{\energy{F}_V}\right)
+2.5\log_{10}\left(\frac{\energy{F}_B(\mathrm{Vega})}{\energy{F}_V(\mathrm{Vega})}\right).
\end{aligned}
$$

The last term is the color zero point. The lecture refers to the Wien tail and the Rayleigh–Jeans tail of the spectrum.

$$
m_B(\mathrm{star})-m_B(\mathrm{Vega})
=-2.5\log_{10}\left(\frac{\energy{F}_B(\mathrm{star})}{\energy{F}_B(\mathrm{Vega})}\right).
$$

> [!note]
> The source’s last line gives Vega’s $V$-band flux in the denominator. The $B$-band comparison uses Vega’s $B$-band flux, as on PDF page 4.

### PDF page 34

#### Lecture of April 24, 2018. Overview of stellar populations with M. Cooper

Stellar properties to measure include luminosity, temperature, mass, size, chemical composition or metallicity, and age. Stellar classification uses the light emitted by the photosphere.

Limb darkening is the effect that makes the edges of a stellar disk appear fainter than its center.

#### Stellar spectra

A stellar spectrum consists of a blackbody-like continuum with absorption lines and sometimes emission lines. The equivalent width is the width in ångströms of a rectangle at the continuum level with the same integrated line deficit or excess.

The $\mathrm{H}\alpha$ line can trace the star formation rate.

$$
\mathrm{SFR}=\frac{\Delta\mechanical{M}_{\star}}{\Delta t}.
$$

### PDF page 35

#### Common spectral lines

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

### PDF page 36

The notes mark a Balmer jump, or break, near $3800$ Å and attribute it to photon absorption by neutral hydrogen in the atmospheres of cooler stars. In a classification such as G2 V, the final Roman numeral gives the luminosity class.

#### Surface gravity

The acceleration of gravity at a star’s surface is

$$
\mechanical{g}=\frac{G\mechanical{M}}{\mechanical{R}^2}.
$$

Surface gravity affects the pressure and density of the outer atmosphere, where spectral lines form. The large radii of giant stars give them lower surface gravity.

#### Line broadening

The notes connect natural line broadening to the energy–time uncertainty relation, $\Delta\energy{E}\,\Delta t\sim h$ as an order-of-magnitude estimate. Doppler broadening comes from thermal motion of the absorbing atoms.

$$
\Delta\signal{\nu}=\signal{\nu}_0\frac{\mechanical{v}_r}{\signal{c}}.
$$

### PDF page 37

Dwarf stars have higher surface gravity than giants and show broader spectral lines.

#### Stellar metallicity

The mass fractions $X$, $Y$, and $Z$ refer to hydrogen, helium, and all heavier elements, respectively. The notes give the Sun’s atmospheric composition by mass as about 74.5% hydrogen and 23.7% helium, for about 98% combined.

A common metallicity index is $[\mathrm{Fe}/\mathrm{H}]$. A star with $[\mathrm{Fe}/\mathrm{H}]=-2$ has an iron-to-hydrogen ratio that is 1% of the solar ratio.

#### Galaxy spectra

The lecture lists star-forming galaxies, passive galaxies, and post-starburst galaxies. The last group is labeled K+A because the spectrum shows features associated with K and A stars.

### PDF page 38

#### Lecture of April 26, 2018. Exoplanets with P. Robertson

##### Direct detection

An exoplanet can be roughly $10^{-9}$ to $10^{-6}$ as luminous as its host star.

$$
\frac{\energy{L}_{\mathrm{planet}}}{\energy{L}_{\star}}\sim10^{-9}\text{–}10^{-6}.
$$

Angular separations can be only tens of milliarcseconds. Proxima b is given as $\quantity{37}{mas}$. The Keck example uses the Rayleigh criterion $\theta=1.22\signal{\lambda}/\mechanical{D}$. With $\mechanical{D}=\quantity{10}{m}$ and $\signal{\lambda}=\quantity{2}{\mu m}$, the diffraction limit is about $\quantity{50}{mas}$. The separation of Proxima b is below that limit.

The 2018 lecture gives Gemini as a direct-imaging example, with 1–2 hour exposures, contrast around $10^{-6}$, and angular separations of about $0.2$ to $1^{\prime\prime}$.

##### Transits and radial velocities

### PDF page 39

##### Transit photometry

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

### PDF page 40

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

##### Photometry

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

### PDF page 41

For an ideal detector, photon statistics dominate the noise. For a detected photon count $F$, $\signal{N}\sim\sqrt{F}$. Ground-based observations add systematic errors.

##### Differential photometry

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

### PDF page 42

The lecture gives an error of up to $10^{-3}$ from molecular absorption and differential extinction.

##### Scintillation

![[Kyle Kabasares - Intro to Astrophysics - Atmospheric scintillation.png|**Fig. 46** Two stellar lines of sight pass through different regions of the atmosphere above the observing telescope.]]

The scintillation noise scales with telescope diameter $\mechanical{D}$, airmass $X$, and exposure time $t_{\mathrm{exp}}$ as

$$
\signal{\sigma}_{\mathrm s}\propto\mechanical{D}^{-2/3}X^{1.75}t_{\mathrm{exp}}^{-1/2}.
$$

For a star with $V=7$ and a $\quantity{4}{m}$ telescope, the example gives $\signal{\sigma}_{\mathrm s}=10\signal{\sigma}_{\mathrm{photometric}}$.

### PDF page 43

![[Kyle Kabasares - Intro to Astrophysics - Three periodic transits.png|**Fig. 47** The first two dips give a candidate period $P$. A third dip at the expected time tests that period.]]

##### Kepler mission baseline

The lecture lists about 200,000 stars, a planned baseline of $3\pm1$ years, and photometric precision of 20 parts per million. That precision gives about a $4\sigma$ detection per transit of an Earth-sized planet in the example.

Planets are common around stars. After Kepler lost two reaction wheels, it continued in the K2 mission.

##### Radial velocity

The nonrelativistic Doppler shift is

$$
\frac{\Delta\signal{\lambda}}{\signal{\lambda}}=\frac{\mechanical{v}}{\signal{c}}.
$$

### PDF page 44

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

##### Absorption cell

The first of two techniques is an absorption cell. A gas-filled tube before the spectrograph slit puts a reference pattern of absorption lines into the spectrum.

![[Kyle Kabasares - Intro to Astrophysics - Absorption cell spectrograph.png|**Fig. 48** Starlight passes through a gas absorption cell, a slit, and the spectrograph optics before the spectrum is recorded.]]

### PDF page 45

##### Instrument profile

The instrument profile (IP) is the spectrograph’s response across detector pixels. Model the measured spectrum by combining the stellar and absorption-cell spectra and convolving with the instrument profile. The lecture emphasizes accounting for all three components.

![[Kyle Kabasares - Intro to Astrophysics - Instrument profile and spectrum convolution.png|**Fig. 49** An instrument profile in detector pixels and a sketch of how convolution changes the recorded absorption-line shapes.]]

### PDF page 46

The lecture attributes the absorption-cell model to Paul Butler and colleagues (1996).

$$
\signal{I}_{\mathrm{obs}}(\signal{\lambda})
=k\left[\signal{\Gamma}_{\mathrm I_2}(\signal{\lambda})
\signal{I}_{\star}(\signal{\lambda}+\Delta\signal{\lambda})\right]
*\mathrm{IP}.
$$

The model multiplies the iodine transmission by the shifted stellar spectrum and convolves the product with the instrument profile. The coefficient $k$ scales the model.

##### Radial velocity uncertainty

The notes estimate shift uncertainty from the spectral slope relative to the intensity uncertainty at each sample.

$$
\signal{\sigma}_{\mathrm{RV}}
=\frac{1}{\sqrt{\displaystyle\sum
\left(\frac{d\signal{I}/d\signal{\lambda}}{\signal{\sigma}_{I}}\right)^2}}.
$$

> [!note]
> The page labels the result $\signal{\sigma}_{\mathrm{RV}}$. With a wavelength derivative as written, the expression gives a wavelength-shift uncertainty. Conversion to velocity uses the Doppler relation.

Good targets are bright stars with many steep spectral lines.

##### Stabilized spectrograph

The second technique stabilizes the spectrograph and uses a cross-correlation function (CCF) to estimate the velocity shift.

![[Kyle Kabasares - Intro to Astrophysics - Radial velocity cross-correlation.png|**Fig. 50** Cross-correlation as a function of trial velocity shift $\Delta\mechanical{v}$. The peak marks the estimated shift.]]

### PDF page 47

#### Lecture of May 1, 2018. Stellar evolution

Give a 15-minute overview of the paper that explains its goal, methods, and implications. The stellar evolution reading is in Binney and Merrifield and the OpenStax astronomy book.

- A star’s position on the main sequence depends on its mass. Metallicity also shifts the main sequence.
- Stars go through a series of evolutionary stages. Nuclear reactions occur in the core during the main-sequence phase. The notes list the core, radiative zone, and convective zone.
- Stars form from molecular clouds. A dense core becomes self-gravitating and attracts more material.
- The zero-age main sequence is the stage when sustained nuclear burning begins in the core.
- The notes also flag pre-main-sequence evolutionary tracks and the burning of lithium and deuterium in the core.

### PDF page 48

Stars with initial masses below $8\mechanical{M}_{\odot}$ follow similar evolutionary paths.

#### Proton–proton chain

The proton–proton chain dominates energy production in main-sequence stars below about $1.2\mechanical{M}_{\odot}$. The first two reactions are

$$
\begin{aligned}
p+p&\longrightarrow\mathrm D+e^++\nu_e,\\
\mathrm D+p&\longrightarrow{}^{3}\mathrm{He}+\gamma.
\end{aligned}
$$

One branch ends with

$$
{}^{3}\mathrm{He}+{}^{3}\mathrm{He}
\longrightarrow{}^{4}\mathrm{He}+p+p.
$$

Another branch proceeds through beryllium and lithium.

$$
\begin{aligned}
{}^{3}\mathrm{He}+{}^{4}\mathrm{He}&\longrightarrow{}^{7}\mathrm{Be}+\gamma,\\
{}^{7}\mathrm{Be}+e^-&\longrightarrow{}^{7}\mathrm{Li}+\nu_e,\\
{}^{7}\mathrm{Li}+p&\longrightarrow{}^{4}\mathrm{He}+{}^{4}\mathrm{He}.
\end{aligned}
$$

> [!note]
> The source writes $\gamma$ for the beryllium electron-capture product. Electron capture emits an electron neutrino.

The notes give about $\quantity{25.7}{MeV}$ per helium-4 nucleus produced and mention photons, protons, and neutrinos in the reactions.

#### CNO cycle

The CNO cycle dominates over the proton–proton chain at core temperatures above about $\quantity{17\times10^6}{K}$, corresponding here to main-sequence stars above about $1.2\mechanical{M}_{\odot}$.

### PDF page 49

#### Main-sequence lifetime

A star’s main-sequence lifetime scales as the amount of fuel divided by the rate at which it burns. Available fuel scales with stellar mass, and the burn rate scales with luminosity. The notes use $\energy{L}\propto\mechanical{M}^{3.5}$ as an average scaling over the main sequence.

The Sun’s main-sequence lifetime is about $\quantity{10}{Gyr}$. Stars below about $0.8\mechanical{M}_{\odot}$ have main-sequence lifetimes longer than the current age of the universe.

#### Post-main-sequence evolution

When the star exhausts hydrogen in its core, the core contracts. In the low-mass case described here, electron degeneracy pressure supports the core. Hydrogen burns rapidly in a surrounding shell. The star’s envelope expands into a red giant with a deep convective envelope surrounding the core.

### PDF page 50

The star leaves the main sequence and enters the subgiant phase.

#### After the red giant branch

At a core temperature of about $\quantity{10^8}{K}$, helium begins to fuse in the core. In the low-mass case this begins with a helium flash. The source says about half the helium in the core is burned quickly. The star moves down to the horizontal branch on the luminosity–temperature diagram.

![[Kyle Kabasares - Intro to Astrophysics - Horizontal branch evolutionary track.png|**Fig. 51** A luminosity–temperature diagram with the main sequence in black and the giant and horizontal branch path in red.]]

#### Helium burning

The reactions shown in the lecture are

$$
\begin{aligned}
{}^{4}\mathrm{He}+{}^{4}\mathrm{He}&\longrightarrow{}^{8}\mathrm{Be}
&&\text{(highly unstable)},\\
{}^{4}\mathrm{He}+{}^{8}\mathrm{Be}&\longrightarrow{}^{12}\mathrm C,\\
{}^{12}\mathrm C+{}^{4}\mathrm{He}&\longrightarrow{}^{16}\mathrm O.
\end{aligned}
$$

#### Final stages of a one-solar-mass star

When the core runs out of helium, the star moves back toward the upper giant region of the diagram. It enters the asymptotic giant branch (AGB).

### PDF page 51

An asymptotic giant branch star has a degenerate carbon–oxygen core. It ejects its envelope to form a planetary nebula. The notes give this phase a duration of about $\quantity{10^5}{yr}$. The remnant becomes a white dwarf and gradually radiates away its energy.

The sequence summarized in the notes is main sequence, red giant, helium fusion, and then giant again.

#### White dwarfs

Electron degeneracy pressure supports a white dwarf against gravity. It gradually cools and fades, moving downward along the white-dwarf cooling track in the Hertzsprung–Russell diagram.

### PDF page 52

A typical white dwarf has a mass of about $0.6\mechanical{M}_{\odot}$, a radius of about $\quantity{10^4}{km}$, and a density on the order of one metric ton per cubic centimeter.

White-dwarf spectral classification uses atmospheric absorption lines.

- DA white dwarfs have strong hydrogen Balmer absorption lines.
- DB white dwarfs have helium-rich atmospheres with strong He I lines.
- Other classes include carbon-rich and metal-rich types.

#### Brown dwarfs

Brown dwarfs form like low-mass stars. Their core temperatures stay below the level needed to sustain the proton–proton chain. The lecture gives a threshold near $0.08\mechanical{M}_{\odot}$.

#### Higher-mass stars

The table begins with about 7 million years of hydrogen burning and 0.5 million years of helium burning. It continues on the next PDF page.

### PDF page 53

The higher-mass star table continues with progressively shorter burning stages.

| Burning stage | Timescale |
| --- | --- |
| Carbon | 600 years |
| Neon | 1 year |
| Oxygen | 6 months |
| Silicon | 1 day |

#### Late evolution of very massive stars

Luminous blue variables are unstable, very high-mass supergiants that undergo occasional large outbursts. The notes give initial masses of about $30$–$100\mechanical{M}_{\odot}$ and describe their spectra as typically B type.

Wolf–Rayet stars are a late stage of massive stars, above about $20\mechanical{M}_{\odot}$ in the notes. The lecture flags P Cygni line profiles.

The notes refer to the binding-energy curve for atomic nuclei and sketch neutron capture starting from iron-56 as a route to heavier nuclei such as uranium-235.

#### Core collapse

The iron core loses pressure support and implodes.

### PDF page 54

During core collapse, at $\thermal{T}>\quantity{5\times10^9}{K}$ in the lecture estimate, photons can dissociate iron nuclei into protons and neutrons. At high density, electron capture produces neutrons and electron neutrinos.

$$
p+e^-\longrightarrow n+\nu_e.
$$

In the neutron-star outcome described here, neutron degeneracy pressure halts the collapse. Infalling matter rebounds from the core and launches an outward shock. In a successful explosion, the outer layers are ejected in a supernova.

Neutrinos were detected from SN 1987A. The Crab pulsar has a period of about $\quantity{33}{ms}$.

#### X-ray binaries

An X-ray binary is a mass-transfer binary containing a black hole or neutron star and a stellar companion on the main sequence or giant branch. The lecture estimates a maximum neutron-star mass of about $2$–$3\mechanical{M}_{\odot}$.

### PDF page 55

#### Evolutionary synthesis

Evolutionary synthesis models how stellar populations change with time. Calculate stellar evolution models over a range of initial masses and examine the Hertzsprung–Russell diagram of the full coeval population at successive ages. Combine stellar structure models with model atmospheres to place the stars on the diagram. The synthesis model can then predict how the population’s color changes with time.

#### Instability strip and variable stars

The instability strip of the Hertzsprung–Russell diagram contains pulsating stars. The lecture attributes the pulsations to cyclic ionization from $\mathrm{He}^{+}$ to $\mathrm{He}^{2+}$ and recombination to $\mathrm{He}^{+}$ in a layer inside the star. This transition has a large effective heat capacity.

RR Lyrae stars are horizontal-branch stars in the instability strip.

### PDF page 56

Other variable-star classes in the lecture include classical Cepheids (supergiants in the instability strip), W Virginis stars (low-mass, metal-poor stars that have evolved past the horizontal branch), Mira variables (luminous AGB stars), and $\delta$ Scuti stars (main-sequence stars in the instability strip).

#### Cepheids and RR Lyrae stars

Classical Cepheids are supergiants in the instability strip with initial masses above about $3\mechanical{M}_{\odot}$. Henrietta Leavitt discovered their period–luminosity relation.

RR Lyrae stars are distance indicators within the Local Group. The lecture gives masses near $0.8\mechanical{M}_{\odot}$, periods near $\quantity{0.5}{day}$, and $M_V\sim0.6\,\unit{mag}$ with some dependence on metallicity.

#### Supernova classification

The notes attribute the original classification to Fritz Zwicky. Type I spectra lack hydrogen lines. Type Ia has a strong characteristic silicon feature. Types Ib and Ic were distinguished later, in the 1980s and 1990s. Type II spectra show hydrogen lines. The notes also list historical Types III–IV.

### PDF page 57

#### Supernova progenitors

Type Ia supernovae are white-dwarf explosions. In the single-degenerate scenario described here, a white dwarf gains mass from a companion until it exceeds the Chandrasekhar limit. The double-degenerate scenario involves a binary with two white dwarfs.

Type II supernovae result from core collapse in a massive star that still has its hydrogen envelope.

#### Historical background and the luminosity function

The lecture refers to chapter 2 of Sparke and Gallagher and to the treatment of Malmquist bias in Binney and Merrifield.

The luminosity function describes the distribution of luminosities. In terms of absolute magnitude $M$, the product $\Phi(M,\mechanical{\mathbf{x}})\,dM\,d^3\mechanical{\mathbf{x}}$ gives the number of stars in volume $d^3\mechanical{\mathbf{x}}$ with absolute magnitude between $M$ and $M+dM$. The volume element is measured in cubic parsecs.

![[Kyle Kabasares - Intro to Astrophysics - Luminosity temperature curve.png|**Fig. 52** A luminosity–temperature curve with two positions marked.]]

### PDF page 58

#### The mass-to-light ratio

In the Gaia era, the lecture notes that a luminosity function can be converted to a mass function. The mass-to-light ratio is $\Upsilon=\mechanical{\mathcal{M}}/\energy{L}$. In the $V$ band and in solar units,

$$
\Upsilon_V=\frac{\mechanical{\mathcal{M}}/\mechanical{M}_{\odot}}
{\energy{L}_V/\energy{L}_{V,\odot}}.
$$

A galaxy’s total mass-to-light ratio can include its dark matter halo and enclosed stellar mass.

#### Star counts

As a historical thought experiment, count stars as an astronomer would have done a century before the lecture.

![[Kyle Kabasares - Intro to Astrophysics - Star counts in a sky field.png|**Fig. 53** Stars counted inside a selected patch of sky.]]

The function $A(m)$ counts stars per unit solid angle in an interval of apparent magnitude.

### PDF page 59

The differential count $A(m)\,dm$ covers apparent magnitudes from $m$ to $m+dm$. The cumulative count brighter than $m$, per unit solid angle and above the adopted lower limit, is

$$
N(m)=\int_{-2}^{m}A(m')\,dm',
\qquad A(m)=\frac{dN(m)}{dm}.
$$

Assume the Galaxy extends without limit, the stellar number density is uniform, and all stars have the same absolute magnitude $M$. The distance modulus gives

$$
m-M=5\log_{10}\left(\frac{\mechanical{d}}{\unit{pc}}\right)-5,
\qquad
\frac{\mechanical{d}}{\unit{pc}}=10^{0.2(m-M)+1}.
$$

![[Kyle Kabasares - Intro to Astrophysics - Star counts in a cone.png|**Fig. 54** A line-of-sight cone of solid angle $\Omega$ containing stars of uniform number density $n$.]]

In that cone the number of stars out to distance $\mechanical{r}$ is

$$
N(\mechanical{r})=n\int_0^{\mechanical{r}}\Omega\,r'^2\,dr'
=\frac{n\Omega\mechanical{r}^3}{3}.
$$

Under these assumptions, there is a one-to-one correspondence between distance and apparent magnitude.

### PDF page 60

Substitute the magnitude–distance relation into the count in a cone of fixed solid angle. With the distances in parsecs and the density in stars per cubic parsec,

$$
N_{\Omega}(m)=\frac{n\Omega}{3}\left[10^{0.2(m-M)+1}\right]^3.
$$

Thus $N_{\Omega}(m)\propto10^{0.6m}$ and $\log_{10}N_{\Omega}(m)=0.6m+\mathrm{const}$. Here $N_{\Omega}$ is the count over the cone, while the previous page also uses $N$ for the count per unit solid angle.

![[Kyle Kabasares - Intro to Astrophysics - Uniform magnitude counts.png|**Fig. 55** The logarithm of the cumulative star count increases linearly with limiting magnitude with a slope of $0.6$.]]

For two populations with different absolute magnitudes, write $N_1=C_1\,10^{0.6m}$ and $N_2=C_2\,10^{0.6m}$. Their sum is $N_1+N_2=C_3\,10^{0.6m}$ with $C_3=C_1+C_2$. The log count still has slope $0.6$.

![[Kyle Kabasares - Intro to Astrophysics - Radio source counts.png|**Fig. 56** The log of the cumulative source count declines with log flux density. The lecture describes this representation as common in radio astronomy.]]

### PDF page 61

#### The star count equation

Assume the luminosity function is separable into an absolute-magnitude distribution and a spatial factor.

$$
\Phi(M,\mechanical{\mathbf{x}})=\Phi(M)\nu(\mechanical{\mathbf{x}}).
$$

For a small volume element at distance $\mechanical{s}$ in solid angle $\Omega$, $dV=\Omega\mechanical{s}^2\,d\mechanical{s}$. With extinction $a(\mechanical{s})$,

$$
m-M=5\log_{10}\left(\frac{\mechanical{s}}{\unit{pc}}\right)-5+a(\mechanical{s}),
$$

so $M=m+5-5\log_{10}(\mechanical{s}/\unit{pc})-a(\mechanical{s})$. The contribution of that volume to the count per magnitude is

$$
dA_{\Omega}(m)=\Phi\left[m+5-5\log_{10}\left(\frac{\mechanical{s}}{\unit{pc}}\right)
-a(\mechanical{s})\right]\nu(\mechanical{s})\,\Omega\mechanical{s}^2\,d\mechanical{s}.
$$

Integrating over all distances gives the star count equation.

$$
A_{\Omega}(m)=\Omega\int_0^\infty\Phi(M)\nu(\mechanical{s})\mechanical{s}^2\,d\mechanical{s}.
$$

Here $M$ inside the integral varies with distance at fixed apparent magnitude. The observations give $A_{\Omega}(m)$, while $\Phi(M)$ is generally unknown. Inverting the equation to find $\nu(\mechanical{s})$ is difficult and requires information about extinction. The subscript $\Omega$ denotes the count in the chosen solid angle.

### PDF page 62

#### Malmquist bias

A class of stars has a range of intrinsic luminosities, so its luminosity function has a finite spread. For example, estimating the mean absolute magnitude $M_0$ of A0 V stars from a magnitude-limited survey is difficult because the brighter members are visible over a larger volume.

At a given apparent magnitude $m$, the mean absolute magnitude in the sample is

$$
\langle M\rangle_m
=\frac{\displaystyle\int_0^\infty M\,\Phi(M)\mechanical{s}^2\nu(\mechanical{s})\,d\mechanical{s}}
{\displaystyle\int_0^\infty \Phi(M)\mechanical{s}^2\nu(\mechanical{s})\,d\mechanical{s}}.
$$

Differentiating the count with respect to $m$ gives

$$
\frac{dA_{\Omega}}{dm}
=\Omega\int_0^\infty\frac{d\Phi}{dM}\mechanical{s}^2\nu(\mechanical{s})\,d\mechanical{s}.
$$

### PDF page 63

At fixed distance $\mechanical{s}$, the distance modulus gives $(dM/dm)_{\mechanical{s}}=1$. Dividing the derivative by the original count gives a weighted mean.

$$
\begin{aligned}
\frac{1}{A_{\Omega}}\frac{dA_{\Omega}}{dm}
&=\frac{\displaystyle\int (d\Phi/dM)\mechanical{s}^2\nu(\mechanical{s})\,d\mechanical{s}}
{\displaystyle\int \Phi(M)\mechanical{s}^2\nu(\mechanical{s})\,d\mechanical{s}}\\
&=\frac{\displaystyle\int
\left(\frac{1}{\Phi}\frac{d\Phi}{dM}\right)\Phi(M)
\mechanical{s}^2\nu(\mechanical{s})\,d\mechanical{s}}
{\displaystyle\int \Phi(M)\mechanical{s}^2\nu(\mechanical{s})\,d\mechanical{s}}
=\left\langle\frac{1}{\Phi}\frac{d\Phi}{dM}\right\rangle_m.
\end{aligned}
$$

Assume a Gaussian absolute-magnitude distribution with mean $M_0$ and standard deviation $\sigma$.

$$
\Phi(M)=\frac{1}{\sqrt{2\pi\sigma^2}}\exp\left[-\frac{(M-M_0)^2}{2\sigma^2}\right].
$$

Its derivative is $d\Phi/dM=-\Phi(M)(M-M_0)/\sigma^2$. Therefore,

$$
-\left\langle\frac{M-M_0}{\sigma^2}\right\rangle_m
=\frac{1}{A_{\Omega}}\frac{dA_{\Omega}}{dm}
=\frac{d\ln A_{\Omega}}{dm}.
$$

### PDF page 64

The Malmquist bias relation is

$$
\boxed{\langle M\rangle_m-M_0
=-\sigma^2\frac{d\ln A_{\Omega}}{dm}}.
$$

The count $A_{\Omega}$ generally increases with apparent magnitude $m$. The negative offset then means the sample is intrinsically brighter on average than the underlying class of stars. The lecture emphasizes checking how survey selection affects the population represented by the sample.

#### Lecture of May 3, 2018. Present-day and initial luminosity functions

$\Phi(M)\,dM$ is the present-day luminosity function in an absolute-magnitude interval. The initial luminosity function $\Psi(M)\,dM$ counts stars that ever formed with absolute magnitudes between $M$ and $M+dM$.

For a population formed in a single burst and observed at age $\tau_{\mathrm{gal}}$, the present-day main-sequence luminosity function vanishes for stars with $\tau_{\mathrm{MS}}<\tau_{\mathrm{gal}}$. For stars with $\tau_{\mathrm{MS}}>\tau_{\mathrm{gal}}$, $\Phi_{\mathrm{MS}}=\Psi_{\mathrm{MS}}$.

### PDF page 65

#### Constant star formation rate

Star formation rate is measured in solar masses per year. Consider a galaxy that has formed stars at a constant rate for $\tau_{\mathrm{gal}}=\quantity{10}{Gyr}$.

For stars with $\tau_{\mathrm{MS}}>\tau_{\mathrm{gal}}$, the initial and present-day main-sequence luminosity functions are equal. For shorter-lived stars,

$$
\Psi_{\mathrm{MS}}(M)=\Phi_{\mathrm{MS}}(M)
\frac{\tau_{\mathrm{gal}}}{\tau_{\mathrm{MS}}}.
$$

![[Kyle Kabasares - Intro to Astrophysics - Constant star formation timeline.png|**Fig. 57** A ten-billion-year star formation timeline with the first four-fifths bracketed.]]

#### Disk stars in the Milky Way

![[Kyle Kabasares - Intro to Astrophysics - Initial and present disk luminosity functions.png|**Fig. 58** Initial and present-day luminosity functions for Milky Way disk stars. They agree for faint, long-lived stars and differ at brighter magnitudes. The Sun is marked near the point where the curves separate.]]

### PDF page 66

Survey all stars in a representative sample to estimate the present-day luminosity function $\Phi(M)$.

#### Hertzsprung–Russell diagram of a star cluster

![[Kyle Kabasares - Intro to Astrophysics - Star cluster main sequence turnoffs.png|**Fig. 59** Luminosity in the $V$ band versus $B-V$. The tracks leave the zero-age main sequence at different turnoff points.]]

Globular clusters contain older stars.

#### Initial mass function

The initial mass function (IMF) describes the mass distribution of stars at formation. In the notation of the lecture, $\xi(\mechanical{M})\,d\mechanical{M}$ counts the stars formed per unit volume with masses between $\mechanical{M}$ and $\mechanical{M}+d\mechanical{M}$.

The lecture gives the Salpeter (1955) form

$$
\xi(\mechanical{M})\propto\left(\frac{\mechanical{M}}{\mechanical{M}_{\odot}}\right)^{-2.35},
$$

over an illustrative range of $0.2$–$100\mechanical{M}_{\odot}$.

![[Kyle Kabasares - Intro to Astrophysics - Salpeter initial mass function sketch.png|**Fig. 60** The initial mass function decreases with stellar mass.]]

### PDF page 67

#### Kroupa initial mass function

Kroupa (2001) gives a broken power law, $\xi(\mechanical{M})\propto(\mechanical{M}/\mechanical{M}_{\odot})^{-\alpha}$.

| Stellar mass in solar masses | $\alpha$ |
| --- | --- |
| Below 0.08 | 0.3 |
| 0.08–0.5 | 1.3 |
| Above 0.5 | 2.3 |

The notes mention an IMF discussion paper on the course site, Grateful.

For the Salpeter form, write $\xi(\mechanical{M})=\xi_0(\mechanical{M}/\mechanical{M}_{\odot})^{-2.35}$. The normalization $\xi_0$ is related to the total number of stars. The number and mass integrated over the adopted mass range are

$$
\begin{aligned}
N_{\mathrm{tot}}&=\int_{\mechanical{M}_{\mathrm{low}}}^{\mechanical{M}_{\mathrm{high}}}
\xi(\mechanical{M})\,d\mechanical{M},\\
\mechanical{M}_{\mathrm{tot}}&=\int_{\mechanical{M}_{\mathrm{low}}}^{\mechanical{M}_{\mathrm{high}}}
\mechanical{M}\xi(\mechanical{M})\,d\mechanical{M}.
\end{aligned}
$$

These integrals give totals per unit volume if the IMF is expressed per unit volume. For core-collapse supernova progenitors, the notes give a lower limit of $8\mechanical{M}_{\odot}$ and leave the upper limit unspecified.

![[Kyle Kabasares - Intro to Astrophysics - Exponential star formation history.png|**Fig. 61** An example star formation history that declines as $\exp(-t/t_0)$.]]

### PDF page 68

The lecture estimates a Milky Way star formation rate of about $3\mechanical{M}_{\odot}$ per year. The IMF specifies how that mass is distributed among newly formed stars.

#### Lecture of May 8, 2018. Spiral galaxies

A spiral galaxy has a disk of stars and gas and a central bulge or spheroid. Its halo includes dark matter, gas, and stars.

#### Baade’s stellar populations

- Population I consists of relatively metal-rich disk stars with rotation-dominated kinematics. The stars span a wide range of ages, including young stars.
- Population II consists mainly of old, metal-poor halo stars with dispersion-dominated kinematics. It includes globular clusters.
- Population III refers to the hypothetical first generation of stars, which formed from primordial gas at zero metallicity.

Bulge stars typically have high metallicity in the lecture’s description.

### PDF page 69

#### Components of the Milky Way

- The dark matter halo contains about $10^{12}\mechanical{M}_{\odot}$ within $\mechanical{r}=\quantity{200}{kpc}$.
- Orderly rotation dominates the stellar disk kinematics. The Galaxy has thin and thick disk components and a central bar. The disk stellar mass is about $3\times10^{10}\mechanical{M}_{\odot}$.
- The bulge is a concentration of stars in the inner kiloparsec.

The lecture uses Galactic coordinates $(\ell,b)$, cylindrical coordinates $(\mechanical{R},\theta,\mechanical{z})$ for Galactic structure, and a local coordinate system for stellar kinematics.

#### Velocity dispersion

For the distribution of stellar velocities along one direction,

$$
\mechanical{\sigma}^2
=\left\langle\left(\mechanical{v}-\langle\mechanical{v}\rangle\right)^2\right\rangle
=\frac{1}{N}\sum_i\left(\mechanical{v}_i-\langle\mechanical{v}\rangle\right)^2.
$$

> [!note]
> The notes subtract $\langle\mechanical{v}^2\rangle$ from $\mechanical{v}^2$ inside the average, which gives zero. Velocity dispersion uses deviations from the mean velocity.

#### The Milky Way thin disk

The thin disk has exponential density profiles in both radius and height.

$$
n(\mechanical{R},\mechanical{z},S)
=n_0(0,0,S)\exp\left[-\frac{\mechanical{R}}{\mechanical{h}_R(S)}\right]
\exp\left[-\frac{|\mechanical{z}|}{\mechanical{h}_z(S)}\right].
$$

### PDF page 70

The radial scale length $\mechanical{h}_R$ and vertical scale height $\mechanical{h}_z$ describe stars of type $S$. The lecture gives a radial scale length of about $\quantity{4}{kpc}$ and notes that the scale height depends on stellar type. At the Sun’s location, $\mechanical{r}\sim\quantity{8}{kpc}$, the thin disk rotates at about $\quantity{200\text{–}220}{km\cdot s^{-1}}$.

#### The thick disk

The thick disk has a scale height of about $\quantity{1}{kpc}$ and a vertical velocity dispersion $\mechanical{\sigma}_z$ of about $\quantity{30}{km\cdot s^{-1}}$. It contains about 5% of the total disk stellar mass and dominates at heights above about $\quantity{1\text{–}2}{kpc}$ from the midplane.

#### The Gould Belt

The Gould Belt is a ring containing numerous O and B stars and molecular clouds. The notes suggest reviewing the tables in Sparke and Gallagher.

Asymmetric drift refers to stellar populations lagging behind the local standard of rest.

### PDF page 71

#### Milky Way stellar halo

The stellar halo is an old population. The notes associate it largely with debris from disrupted globular clusters and dwarf galaxies and place most globular clusters in the halo population. The notes put most of the stellar halo within $\quantity{30}{kpc}$ of the Galactic center.

The relative abundance of elements $a$ and $b$ is defined by their number ratio relative to the solar number ratio.

$$
[a/b]=\log_{10}\left(\frac{N_a/N_b}{(N_a/N_b)_{\odot}}\right).
$$

#### The bulge and bar

The bulge luminosity is about one-third of the disk luminosity.

#### Globular clusters

Globular clusters contain about $10^4$–$10^6$ stars. The lecture lists the core radius, half-light radius, and tidal radius as measures of their sizes. It gives about 150 known globular clusters in the Milky Way and notes that metal-rich and metal-poor clusters have different radial distributions.

### PDF page 72

#### Lecture of May 10, 2018. Star clusters

The notes list the open clusters M103 and NGC 346.

##### Open clusters

Open clusters contain a few hundred to a few thousand stars. Their core radius is the radius at which the surface brightness falls to half its central value. This radius is typically a few parsecs. Their internal velocity dispersion is typically $\mechanical{\sigma}\sim\quantity{1}{km\cdot s^{-1}}$.

The lecture refers to Table 2.2 in Sparke and Gallagher. Use Hertzsprung–Russell diagrams and isochrones to estimate cluster ages. The notes also flag the Hertzsprung gap.

##### Globular clusters

The lecture gives about 150 globular clusters for the Milky Way and calls this a typical number for a spiral galaxy. Globular clusters can be classified by their radii. Their typical metallicity is $[\mathrm{Fe}/\mathrm{H}]\sim-2$ to $-1$. At $-2$, the iron-to-hydrogen ratio is 1% of the solar value.

### PDF page 73

For typical globular-cluster properties, see Table 2.3. The lecture compares metal-rich and metal-poor globular clusters and discusses fitting isochrones to them. The example uses the Hubble passbands F475W and F814W, labeled approximately $B$ and $I$. The lecture emphasizes surface brightness profiles and refers to Sparke and Gallagher for mass segregation and dynamical friction.

#### The Milky Way at multiple wavelengths

Atomic hydrogen emits at $\signal{\lambda}=\quantity{21}{cm}$. The emission alone gives no direct distance to an individual parcel of gas.

#### Spherically symmetric potential

The circular velocity for a spherical mass distribution is

$$
\mechanical{v}_c(\mechanical{R})
=\sqrt{\frac{G\mechanical{M}(\mechanical{R})}{\mechanical{R}}},
$$

where $\mechanical{M}(\mechanical{R})$ is the mass enclosed within radius $\mechanical{R}$. The orbital angular speed is $\mechanical{\omega}=\mechanical{v}_{\mathrm{tang}}/\mechanical{R}$.

### PDF page 74

If the mass is concentrated at $\mechanical{R}=0$, the circular speed follows Keplerian rotation, $\mechanical{v}=\sqrt{G\mechanical{M}/\mechanical{R}}$. For solid-body rotation, $\mechanical{v}/\mechanical{R}$ is constant, so $\mechanical{v}\propto\mechanical{R}$ and $\mechanical{M}(\mechanical{R})=\mechanical{v}^2\mechanical{R}/G\propto\mechanical{R}^3$.

#### Galaxy rotation curve

![[Kyle Kabasares - Intro to Astrophysics - Flat galaxy rotation curve.png|**Fig. 62** The rotation curve rises in the inner galaxy and flattens near $\quantity{200}{km\cdot s^{-1}}$. The dashed curve shows a declining comparison.]]

In the spherical approximation, a flat rotation curve implies $\mechanical{M}(\mechanical{R})\propto\mechanical{R}$ at large radii.

#### Rotation kinematics of the Milky Way disk

![[Kyle Kabasares - Intro to Astrophysics - Galactic rotation projection geometry.png|**Fig. 63** The Sun, a gas parcel, and the Galactic center form a triangle. The parcel’s circular velocity is projected onto the line of sight.]]

For Galactic longitude $\ell$, the line-of-sight velocity relative to the Sun’s circular motion is

$$
\mechanical{v}_r=\mechanical{v}\cos\alpha-\mechanical{v}_0\sin\ell,
\qquad
\frac{\sin\ell}{\mechanical{R}}=\frac{\sin\beta}{\mechanical{R}_0}
=\frac{\sin(\alpha+90^\circ)}{\mechanical{R}_0}
=\frac{\cos\alpha}{\mechanical{R}_0}.
$$

The second velocity is $\mechanical{v}_0$, the solar circular speed indicated in the diagram.

### PDF page 75

The projection relation gives $\cos\alpha=(\mechanical{R}_0/\mechanical{R})\sin\ell$. Substitution yields

$$
\begin{aligned}
\mechanical{v}_r
&=\mechanical{v}\frac{\mechanical{R}_0}{\mechanical{R}}\sin\ell
-\mechanical{v}_0\sin\ell\\
&=\mechanical{R}_0\sin\ell\left(\frac{\mechanical{v}}{\mechanical{R}}-\frac{\mechanical{v}_0}{\mechanical{R}_0}\right)\\
&=\mechanical{R}_0\sin\ell(\mechanical{\omega}-\mechanical{\omega}_0).
\end{aligned}
$$

![[Kyle Kabasares - Intro to Astrophysics - Signs of Galactic radial velocities.png|**Fig. 64** The sign of radial velocity depends on Galactic longitude and on whether the gas lies inside or outside the solar circle.]]

![[Kyle Kabasares - Intro to Astrophysics - Solar radius on the rotation curve.png|**Fig. 65** The schematic Galactic rotation curve is approximately flat near the solar radius, marked at $\quantity{8.3}{kpc}$.]]

### PDF page 76

The atomic hydrogen line at $\quantity{21}{cm}$ is useful for measuring gas velocities through Doppler shifts.

#### Position–velocity diagram

![[Kyle Kabasares - Intro to Astrophysics - Atomic gas position velocity diagram.png|**Fig. 66** Schematic radial velocity versus Galactic longitude for the outer gas, with positive and negative extrema of about $\quantity{100}{km\cdot s^{-1}}$.]]

> [!note]
> The intermediate longitude on the right is written as $180^\circ$. The symmetric axis from $+180^\circ$ to $-180^\circ$ suggests $-90^\circ$ at that tick.

The $\mathrm{CO}(1\!-\!0)$ spectral line can also map the Milky Way. The notes ask how gas density depends on radius and associate local density enhancements with spiral structure. A position–velocity diagram made with molecular gas is lumpier than one made with atomic gas.

### PDF page 77

#### Lecture of May 15, 2018. Local Galactic rotation

Start from $\mechanical{v}_r=\mechanical{R}_0\sin\ell(\mechanical{\omega}-\mechanical{\omega}_0)$ and consider a nearby object, $\mechanical{d}\ll\mechanical{R}_0$.

![[Kyle Kabasares - Intro to Astrophysics - Nearby Galactic rotation geometry.png|**Fig. 67** Near the Sun, the radial displacement from the solar circle is approximately the projection of the line-of-sight distance toward the Galactic center.]]

To first order, $\mechanical{R}\simeq\mechanical{R}_0-\mechanical{d}\cos\ell$, and

$$
\mechanical{\omega}-\mechanical{\omega}_0
\simeq(\mechanical{R}-\mechanical{R}_0)
\left.\frac{d\mechanical{\omega}}{d\mechanical{R}}\right|_{\mechanical{R}_0}.
$$

Thus

$$
\mechanical{v}_r\simeq
\mechanical{R}_0\sin\ell(\mechanical{R}-\mechanical{R}_0)
\left.\frac{d\mechanical{\omega}}{d\mechanical{R}}\right|_{\mechanical{R}_0}.
$$

Using $\sin(2\ell)=2\sin\ell\cos\ell$ and $\cos\ell\simeq(\mechanical{R}_0-\mechanical{R})/\mechanical{d}$ gives

$$
\boxed{\mechanical{v}_r\simeq
-\mechanical{d}\sin(2\ell)\frac{\mechanical{R}_0}{2}
\left.\frac{d\mechanical{\omega}}{d\mechanical{R}}\right|_{\mechanical{R}_0}
=\mechanical{d}A\sin(2\ell)}.
$$

The first Oort constant is

$$
A=-\frac{\mechanical{R}_0}{2}\left.\frac{d\mechanical{\omega}}{d\mechanical{R}}\right|_{\mechanical{R}_0}.
$$

### PDF page 78

The derivative $(d\mechanical{\omega}/d\mechanical{R})_{\mechanical{R}_0}$ measures shear in Galactic rotation. To measure $A$, plot the radial velocity per unit distance against Galactic longitude.

![[Kyle Kabasares - Intro to Astrophysics - Measuring the first Oort constant.png|**Fig. 68** The ratio $\mechanical{v}_r/\mechanical{d}$ varies as $\sin(2\ell)$ with amplitude $A$.]]

The lecture gives $A\simeq\quantity{15}{km\cdot s^{-1}\cdot kpc^{-1}}$. In the notation of Sparke and Gallagher, $(\mechanical{v}/\mechanical{R})'=d\mechanical{\omega}/d\mechanical{R}$.

The second Oort constant comes from the tangential velocity. For $\mechanical{d}\ll\mechanical{R}_0$ the lecture starts with

$$
\mechanical{v}_t\simeq\mechanical{v}\sin\alpha-\mechanical{v}_0\cos\ell.
$$

### PDF page 79

The tangential velocity to first order in distance is

$$
\mechanical{v}_t\simeq\mechanical{d}\,[A\cos(2\ell)+B].
$$

The second Oort constant is

$$
B=-\left[\mechanical{\omega}_0+\frac{\mechanical{R}_0}{2}
\left.\frac{d\mechanical{\omega}}{d\mechanical{R}}\right|_{\mechanical{R}_0}\right]
=-\mechanical{\omega}_0+A.
$$

Thus the angular speed of the Sun around the Galactic center is $\boxed{\mechanical{\omega}_0=A-B}$. The lecture gives $B\simeq\quantity{-12}{km\cdot s^{-1}\cdot kpc^{-1}}$ and notes that the Oort constants occur throughout Galactic disk dynamics.

![[Kyle Kabasares - Intro to Astrophysics - Tangential velocities and the second Oort constant.png|**Fig. 69** Tangential velocity per unit distance versus Galactic longitude. The cosine variation has a constant offset $B$.]]

The solar circular speed follows from $\mechanical{\omega}_0=\mechanical{v}_0/\mechanical{R}_0$.

### PDF page 80

#### The tangent-point method

![[Kyle Kabasares - Intro to Astrophysics - Schematic Milky Way rotation curve.png|**Fig. 70** Circular speed rises at small Galactocentric radii and is approximately constant at large radii.]]

For gas in a circular orbit, the line-of-sight velocity is $\mechanical{v}_r=\mechanical{v}\cos\alpha-\mechanical{v}_0\sin\ell$. At the tangent point, the line of sight is tangent to the circular orbit and the circular velocity lies along the line of sight. This geometry makes it possible to use terminal velocities to infer the inner rotation curve.

![[Kyle Kabasares - Intro to Astrophysics - Tangent point geometry.png|**Fig. 71** The Galactocentric radius to the tangent point meets the line of sight at a right angle. The circular velocity at that point is parallel to the line of sight.]]

![[Kyle Kabasares - Intro to Astrophysics - Tangent point in longitude plot.png|**Fig. 72** The tangent point is marked on a schematic longitude plot.]]

#### Stellar dynamics

Stellar dynamics studies many-particle systems under gravity. In this treatment, stars act as point particles.

### PDF page 81

The distances between stars are usually much larger than their radii. Stellar dynamics estimates interaction and collision rates and can model the effect of a black hole on stellar evolution. Examples include binary hardening and hypervelocity stars.

| System | Approximate number of stars |
| --- | --- |
| Open cluster | $100$–$1000$ |
| Globular cluster | $10^5$–$10^6$ |
| Large galaxy | $10^{11}$ |

The methods resemble treatments in statistical mechanics and plasma physics, including the idea of a relaxation time. Sparke and Gallagher provide an introduction. The lecture points to Binney and Tremaine for a more extensive treatment. The starting point is the gravitational potential.

### PDF page 82

#### Gravitational potential

For a particle of mass $\mechanical{m}$ at displacement $\mechanical{\mathbf r}$ from mass $\mechanical{M}$,

$$
\frac{d(\mechanical{m}\mechanical{\mathbf v})}{dt}
=-\frac{G\mechanical{M}\mechanical{m}}{\mechanical{r}^3}\mechanical{\mathbf r}.
$$

For many particles the equation of motion for particle $\alpha$ is

$$
\frac{d(\mechanical{m}_{\alpha}\mechanical{\mathbf v}_{\alpha})}{dt}
=-\sum_{\beta\ne\alpha}\frac{G\mechanical{m}_{\alpha}\mechanical{m}_{\beta}}
{|\mechanical{\mathbf x}_{\alpha}-\mechanical{\mathbf x}_{\beta}|^3}
(\mechanical{\mathbf x}_{\alpha}-\mechanical{\mathbf x}_{\beta}).
$$

At a position away from the point masses, the gravitational potential and force on a test particle are

$$
\energy{\Phi}(\mechanical{\mathbf x})
=-\sum_{\alpha}\frac{G\mechanical{m}_{\alpha}}{|\mechanical{\mathbf x}-\mechanical{\mathbf x}_{\alpha}|},
\qquad
\frac{d(\mechanical{m}\mechanical{\mathbf v})}{dt}
=-\mechanical{m}\nabla\energy{\Phi}(\mechanical{\mathbf x}).
$$

> [!note]
> The handwritten discrete potential omits its minus sign. The force equation and the continuous potential on this page give the sign convention used here.

For a continuous mass distribution,

$$
\energy{\Phi}(\mechanical{\mathbf x})
=-\int\frac{G\mechanical{\rho}(\mechanical{\mathbf x}')}{|\mechanical{\mathbf x}-\mechanical{\mathbf x}'|}
\,d^3\mechanical{\mathbf x}'.
$$

Poisson’s equation is $\nabla^2\energy{\Phi}=4\pi G\mechanical{\rho}$. A test particle inside a uniform spherical shell feels zero net gravitational force from the shell.

![[Kyle Kabasares - Intro to Astrophysics - Uniform spherical shell.png|**Fig. 73** A uniform spherical shell with interior and exterior points marked.]]

### PDF page 83

For a spherically symmetric potential, the circular speed is $\mechanical{v}_{\mathrm{circ}}=\sqrt{G\mechanical{M}(\mechanical{R})/\mechanical{R}}$, where $\mechanical{M}(\mechanical{R})$ is the enclosed mass. Sparke and Gallagher use $\mechanical{\mathbf F}=-\nabla\energy{\Phi}$ for force per unit mass. The force on a particle of mass $\mechanical{m}$ is $-\mechanical{m}\nabla\energy{\Phi}$.

#### Potential–density pairs

##### Plummer potential

$$
\energy{\Phi}_{\mathrm p}(\mechanical{r})
=-\frac{G\mechanical{M}}{\sqrt{\mechanical{r}^2+\mechanical{a}_{\mathrm p}^2}}.
$$

The parameter $\mechanical{a}_{\mathrm p}$ is constant, and $\mechanical{M}$ is the total mass of the system. The Plummer model is a useful approximation for star clusters. Its core radius $\mechanical{r}_c$, where the projected surface density falls to half its central value, is about $0.64\mechanical{a}_{\mathrm p}$.

##### Isothermal sphere

The logarithmic potential is proportional to $\ln(\mechanical{r}/\mechanical{r}_0)$.

### PDF page 84

##### Navarro–Frenk–White halo

The Navarro–Frenk–White density profile is

$$
\mechanical{\rho}(\mechanical{r})
=\frac{\mechanical{\rho}_{\mathrm{NFW}}}{(\mechanical{r}/\mechanical{a}_{\mathrm N})
(1+\mechanical{r}/\mechanical{a}_{\mathrm N})^2}.
$$

#### A particle in a static potential

Dot the equation of motion with $\mechanical{\mathbf v}$.

$$
\mechanical{\mathbf v}\cdot\frac{d(\mechanical{m}\mechanical{\mathbf v})}{dt}
=-\mechanical{m}\nabla\energy{\Phi}(\mechanical{\mathbf x})\cdot\mechanical{\mathbf v}.
$$

Along the path, the chain rule gives

$$
\frac{d\energy{\Phi}}{dt}
=\mechanical{\mathbf v}\cdot\nabla\energy{\Phi}
=\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}\frac{d\mechanical{x}}{dt}
+\frac{\partial\energy{\Phi}}{\partial\mechanical{y}}\frac{d\mechanical{y}}{dt}
+\frac{\partial\energy{\Phi}}{\partial\mechanical{z}}\frac{d\mechanical{z}}{dt}.
$$

Thus

$$
\mechanical{m}\mechanical{\mathbf v}\cdot\frac{d\mechanical{\mathbf v}}{dt}
+\mechanical{m}\frac{d\energy{\Phi}}{dt}
=\frac{\mechanical{m}}{2}\frac{d(\mechanical{v}^2)}{dt}
+\mechanical{m}\frac{d\energy{\Phi}}{dt}=0.
$$

For a potential that tends to zero at infinity, the orbit is bound if the total energy $\energy{E}=\energy{E}_{\mathrm k}+\energy{E}_{\mathrm p}<0$. Escape is possible when $\energy{E}>0$, or $\mechanical{m}\mechanical{v}^2/2>-\mechanical{m}\energy{\Phi}$. The escape speed and angular momentum are

$$
\mechanical{v}_{\mathrm{escape}}(\mechanical{\mathbf x})
=\sqrt{-2\energy{\Phi}(\mechanical{\mathbf x})},
\qquad
\mechanical{\mathbf L}=\mechanical{\mathbf x}\times\mechanical{m}\mechanical{\mathbf v}.
$$

### PDF page 85

Differentiate the angular momentum using the product rule.

$$
\begin{aligned}
\frac{d\mechanical{\mathbf L}}{dt}
&=\frac{d\mechanical{\mathbf x}}{dt}\times\mechanical{m}\mechanical{\mathbf v}
+\mechanical{\mathbf x}\times\mechanical{m}\frac{d\mechanical{\mathbf v}}{dt}\\
&=-\mechanical{\mathbf x}\times\mechanical{m}\nabla\energy{\Phi}(\mechanical{\mathbf x}).
\end{aligned}
$$

The first term vanishes because $d\mechanical{\mathbf x}/dt=\mechanical{\mathbf v}$. The remaining term is torque. In a spherically symmetric potential the gradient is radial, so the torque vanishes and angular momentum is constant.

> [!note]
> The handwritten torque equation omits the minus sign from the gravitational force law.

#### Deriving the scalar virial theorem

Consider a self-gravitating system. Dot the equation of motion for each particle with its position and sum over particles.

$$
\sum_\alpha \mechanical{\mathbf x}_\alpha\cdot
\frac{d(\mechanical{m}_\alpha\mechanical{\mathbf v}_\alpha)}{dt}
=\sum_\alpha\mechanical{\mathbf x}_\alpha\cdot\left[
-\sum_{\beta\ne\alpha}\frac{G\mechanical{m}_\alpha\mechanical{m}_\beta
(\mechanical{\mathbf x}_\alpha-\mechanical{\mathbf x}_\beta)}
{|\mechanical{\mathbf x}_\alpha-\mechanical{\mathbf x}_\beta|^3}
+\mechanical{\mathbf F}_{\mathrm{ext},\alpha}\right].
$$

The contribution from the first term before the sum is symmetrized changes when $\alpha$ and $\beta$ are exchanged.

> [!note]
> The source omits the cube on the force denominator here. The many-particle force law on PDF page 82 supplies it.

In one dimension,

$$
\frac{d^2(\mechanical{m}\mechanical{x}^2)}{dt^2}
=\mechanical{m}\frac{d}{dt}\left(2\mechanical{x}\frac{d\mechanical{x}}{dt}\right)
=2\mechanical{m}\left(\frac{d\mechanical{x}}{dt}\right)^2
+2\mechanical{m}\mechanical{x}\frac{d^2\mechanical{x}}{dt^2}
=2\mechanical{m}\mechanical{v}^2+2\mechanical{m}\mechanical{x}\frac{d\mechanical{v}}{dt}.
$$

The next step generalizes this identity to three dimensions.

### PDF page 86

In one dimension, rearranging gives

$$
\mechanical{m}\mechanical{x}\frac{d\mechanical{v}}{dt}
=\frac12\frac{d^2(\mechanical{m}\mechanical{x}^2)}{dt^2}
-\mechanical{m}\mechanical{v}^2.
$$

In three dimensions,

$$
\begin{aligned}
\sum_\alpha\frac{d(\mechanical{m}_\alpha\mechanical{\mathbf v}_\alpha)}{dt}
\cdot\mechanical{\mathbf x}_\alpha
&=\frac12\frac{d^2}{dt^2}
\sum_\alpha\mechanical{m}_\alpha|\mechanical{\mathbf x}_\alpha|^2
-\sum_\alpha\mechanical{m}_\alpha|\mechanical{\mathbf v}_\alpha|^2\\
&=\frac12\frac{d^2\mechanical{I}}{dt^2}-2\energy{K}.
\end{aligned}
$$

Here $\mechanical{I}$ is the scalar moment of inertia and $\energy{K}$ is the total kinetic energy.

Exchange $\alpha$ and $\beta$ in the internal gravitational term, then average the two versions. The dot products in the numerator combine as

$$
\begin{aligned}
&(\mechanical{\mathbf x}_\alpha-\mechanical{\mathbf x}_\beta)\cdot\mechanical{\mathbf x}_\alpha
+(\mechanical{\mathbf x}_\beta-\mechanical{\mathbf x}_\alpha)\cdot\mechanical{\mathbf x}_\beta\\
&=|\mechanical{\mathbf x}_\alpha|^2+|\mechanical{\mathbf x}_\beta|^2
-2\mechanical{\mathbf x}_\alpha\cdot\mechanical{\mathbf x}_\beta
=|\mechanical{\mathbf x}_\alpha-\mechanical{\mathbf x}_\beta|^2.
\end{aligned}
$$

This cancels two of the three distance factors in the denominator. The result is the total gravitational potential energy,

$$
\energy{U}=-\frac12\sum_{\alpha\ne\beta}
\frac{G\mechanical{m}_\alpha\mechanical{m}_\beta}
{|\mechanical{\mathbf x}_\alpha-\mechanical{\mathbf x}_\beta|}.
$$

### PDF page 87

The factor of $1/2$ in $\energy{U}$ accounts for counting each pair twice. Combining the terms gives

$$
\frac12\frac{d^2\mechanical{I}}{dt^2}-2\energy{K}
=\energy{U}+\sum_\alpha\mechanical{\mathbf F}_{\mathrm{ext},\alpha}\cdot\mechanical{\mathbf x}_\alpha.
$$

For an isolated system the external term vanishes. Average over a time interval $\tau$.

$$
\frac{1}{2\tau}\int_0^\tau\frac{d^2\mechanical{I}}{dt^2}\,dt
-\frac{2}{\tau}\int_0^\tau\energy{K}\,dt
=\frac{1}{\tau}\int_0^\tau\energy{U}\,dt.
$$

The first term is $[\dot{\mechanical{I}}(\tau)-\dot{\mechanical{I}}(0)]/(2\tau)$. For a bounded system it vanishes in the long-time limit. The scalar virial theorem is

$$
\boxed{2\langle\energy{K}\rangle+\langle\energy{U}\rangle=0}.
$$

For $N$ equal-mass stars of mass $\mechanical{m}$ in the cluster rest frame, the mean velocity vanishes. With $\mechanical{\sigma}^2=\langle\mechanical{v}^2\rangle=N^{-1}\sum_\alpha\mechanical{v}_\alpha^2$ for the three-dimensional velocity variance,

$$
2\energy{K}=\mechanical{m}\sum_\alpha\mechanical{v}_\alpha^2
=\mechanical{m}N\mechanical{\sigma}^2=\mechanical{M}\mechanical{\sigma}^2.
$$

> [!note]
> The handwritten substitution drops the factor of two on kinetic energy and includes an extra $N$ in the variance equality. The sums on the page give the factors used above.

### PDF page 88

Approximate the potential energy using a typical separation $\mechanical{R}$ between stars. With $\mechanical{M}=N\mechanical{m}$,

$$
\energy{U}\sim-\frac{G(N\mechanical{m})^2}{2\mechanical{R}},
\qquad
\mechanical{M}\mechanical{\sigma}^2\simeq\frac{G\mechanical{M}^2}{2\mechanical{R}},
\qquad
\boxed{\mechanical{\sigma}^2\sim\frac{G\mechanical{M}}{2\mechanical{R}}}.
$$

In practice use an observable core radius $\mechanical{r}_c$ and a line-of-sight velocity dispersion $\mechanical{\sigma}_r$. For isotropic velocities,

$$
\mechanical{\sigma}^2
=\mechanical{\sigma}_x^2+\mechanical{\sigma}_y^2+\mechanical{\sigma}_z^2
=3\mechanical{\sigma}_r^2,\qquad
\energy{K}=\frac32\mechanical{M}\mechanical{\sigma}_r^2.
$$

Write $\energy{U}=-G\mechanical{M}^2/(2\eta\mechanical{r}_c)$, with a structural parameter $\eta=2.6$ for the Plummer model. The virial theorem gives

$$
3\mechanical{M}\mechanical{\sigma}_r^2=\frac{G\mechanical{M}^2}{2\eta\mechanical{r}_c},
\qquad
\boxed{\mechanical{M}=\frac{6\eta\mechanical{\sigma}_r^2\mechanical{r}_c}{G}}.
$$

### PDF page 89

#### Galactic units

The lecture emphasizes a convenient unit system for Galactic dynamics. Use one solar mass for mass, one parsec for distance, and $\quantity{1}{km\cdot s^{-1}}$ for velocity. One kilometer per second is approximately one parsec per million years, within about 2%. The exact time unit for this choice is about $\quantity{0.978}{Myr}$.

The numerical value of the gravitational constant in these units is $G\simeq1/233\simeq4.3\times10^{-3}$, with units $\unit{pc\cdot(km\cdot s^{-1})^2\cdot M_{\odot}^{-1}}$.

#### Plummer sphere example

For $\mechanical{\sigma}_r=\quantity{10}{km\cdot s^{-1}}$ and $\mechanical{r}_c=\quantity{1}{pc}$,

$$
\mechanical{M}=\frac{15.6\mechanical{\sigma}_r^2\mechanical{r}_c}{G}
\simeq15.6\times10^2\times1\times233\,\mechanical{M}_{\odot}
\simeq360{,}000\,\mechanical{M}_{\odot}.
$$

### PDF page 90

For a galaxy cluster, the lecture gives $\mechanical{\sigma}_r\sim\quantity{1000}{km\cdot s^{-1}}$ and $\mechanical{r}_c\sim\quantity{0.5}{Mpc}$.

#### Lecture of May 22, 2018. Encounters and relaxation

Treat stellar encounters as gravitational scattering. A strong encounter significantly changes the trajectories when the change in potential energy is at least comparable to the initial kinetic energy. For two equal masses $\mechanical{m}$, the notes estimate the closest-approach scale by

$$
\frac{G\mechanical{m}^2}{\mechanical{r}_s}=\frac12\mechanical{m}\mechanical{v}^2,
\qquad
\mechanical{r}_s=\frac{2G\mechanical{m}}{\mechanical{v}^2}.
$$

This is the strong-encounter radius. For one solar mass and $\mechanical{v}\sim\quantity{30}{km\cdot s^{-1}}$ in the Galaxy, $\mechanical{r}_s\sim\quantity{2}{AU}$. The lecture uses the survival of the Solar System to argue against a past stellar encounter of this strength.

### PDF page 91

#### Frequency of strong encounters

![[Kyle Kabasares - Intro to Astrophysics - Strong encounter tube.png|**Fig. 74** In time $t_s$, a moving star sweeps a tube of radius $\mechanical{r}_s$ and length $\mechanical{v}t_s$.]]

For stellar number density $n$, the volume that contains one star on average is $1/n$. Equate this to the swept volume.

$$
\pi\mechanical{r}_s^2\mechanical{v}t_s=\frac1n,\qquad
t_s=\frac{1}{n\pi\mechanical{r}_s^2\mechanical{v}}
=\frac{\mechanical{v}^3}{4\pi G^2\mechanical{m}^2n}.
$$

Taking $n=\quantity{10^{-1}}{pc^{-3}}$, one solar mass, and $\mechanical{v}\sim\quantity{30}{km\cdot s^{-1}}$ gives $t_s\sim\quantity{10^9}{Myr}=\quantity{10^{15}}{yr}$, much longer than the age of the universe.

> [!note]
> The handwritten numerical substitution appears to show $300^3$ and $233^2$ in the numerator, with an additional gravitational-constant factor in the denominator. Using the speed on PDF page 90 and the Galactic-unit value of $G$ on PDF page 89 gives the stated timescale.

For comparison, the Earth’s orbital speed is $\mechanical{v}_{\mathrm{Earth}}=\sqrt{G\mechanical{M}_{\odot}/\mechanical{r}}$. With $\mechanical{r}=\quantity{1}{AU}\simeq (1/206{,}265)\,\unit{pc}$, this gives about $\quantity{30}{km\cdot s^{-1}}$.

### PDF page 92

#### Weak encounters

![[Kyle Kabasares - Intro to Astrophysics - Weak encounter geometry.png|**Fig. 75** A moving star of mass $\mechanical{M}$ passes a star of mass $\mechanical{m}$ with impact parameter $\mechanical{b}$. It acquires a small transverse velocity.]]

In the straight-line approximation, $\mechanical{r}(t)=\sqrt{\mechanical{b}^2+\mechanical{v}^2t^2}$. The transverse force is

$$
\mechanical{F}_{\perp}
=\frac{G\mechanical{M}\mechanical{m}}{\mechanical{r}^2}\cos\theta
=\frac{G\mechanical{M}\mechanical{m}\mechanical{b}}
{(\mechanical{b}^2+\mechanical{v}^2t^2)^{3/2}}
=\mechanical{M}\frac{d\mechanical{v}_{\perp}}{dt}.
$$

Integrating over the full encounter,

$$
\mechanical{v}_{\perp}=\frac{1}{\mechanical{M}}\int_{-\infty}^{\infty}\mechanical{F}_{\perp}\,dt
=G\mechanical{m}\mechanical{b}\int_{-\infty}^{\infty}
\frac{dt}{(\mechanical{b}^2+\mechanical{v}^2t^2)^{3/2}}
=\frac{2G\mechanical{m}}{\mechanical{b}\mechanical{v}}.
$$

> [!note]
> The source draws $t=0$ at closest approach. The stated factor of two uses the complete encounter, including the incoming and outgoing halves.

For a small deflection, $\alpha\simeq\mechanical{v}_{\perp}/\mechanical{v}=2G\mechanical{m}/(\mechanical{b}\mechanical{v}^2)$. When $\alpha\ll1$ in radians, $\mechanical{v}_\perp\ll\mechanical{v}$.

### PDF page 93

The weak-scattering condition is $2G\mechanical{m}/(\mechanical{b}\mechanical{v}^2)\ll1$, or $\mechanical{b}\gg2G\mechanical{m}/\mechanical{v}^2$. Over many encounters the transverse velocity follows a random walk, $\langle\mechanical{v}_{\perp}^2\rangle\propto t$.

![[Kyle Kabasares - Intro to Astrophysics - Weak encounter annular tube.png|**Fig. 76** Encounters between impact parameters $\mechanical{b}$ and $\mechanical{b}+d\mechanical{b}$ lie in an annular tube swept out by the moving star.]]

The annular tube has volume $\mechanical{v}t\,2\pi\mechanical{b}\,d\mechanical{b}$ and contains $2\pi n\mechanical{v}t\,\mechanical{b}\,d\mechanical{b}$ stars on average. Sum the squared kicks over impact parameters.

$$
\begin{aligned}
\langle\mechanical{v}_{\perp}^2(t)\rangle
&=\int_{\mechanical{b}_{\min}}^{\mechanical{b}_{\max}}
\left(\frac{2G\mechanical{m}}{\mechanical{b}\mechanical{v}}\right)^2
2\pi n\mechanical{v}t\,\mechanical{b}\,d\mechanical{b}\\
&=\frac{8\pi G^2\mechanical{m}^2nt}{\mechanical{v}}
\ln\left(\frac{\mechanical{b}_{\max}}{\mechanical{b}_{\min}}\right).
\end{aligned}
$$

The second line retains the density $n$ from the integrand. The source drops it in that line and restores it in the relaxation-time equation.

The relaxation time is the time at which $\langle\mechanical{v}_{\perp}^2\rangle^{1/2}=\mechanical{v}$. At $t=t_{\mathrm{relax}}$,

$$
\mechanical{v}^2
=\frac{8\pi G^2\mechanical{m}^2n t_{\mathrm{relax}}}{\mechanical{v}}
\ln\left(\frac{\mechanical{b}_{\max}}{\mechanical{b}_{\min}}\right).
$$

### PDF page 94

Solving for the relaxation time gives

$$
\boxed{t_r=\frac{\mechanical{v}^3}{8\pi G^2\mechanical{m}^2n\ln\Lambda}},
\qquad \Lambda=\frac{\mechanical{b}_{\max}}{\mechanical{b}_{\min}}.
$$

The lecture uses the strong-encounter radius for $\mechanical{b}_{\min}$ and the system size $\mechanical{R}$ for $\mechanical{b}_{\max}$. Compared with the time $t_s$ for a strong encounter,

$$
t_r=\frac{t_s}{2\ln\Lambda}.
$$

For a globular cluster example with $\mechanical{r}_s\sim\quantity{2}{AU}$ and $\mechanical{R}=\quantity{1}{pc}$, the notes estimate $\ln\Lambda$ from $\ln[1/(2\times10^{-5})]=\ln(5\times10^4)$. Relaxation is too slow to change the Galactic disk significantly in the solar neighborhood.

For an idealized spherical system with $N$ stars of mass $\mechanical{m}$,

$$
\energy{K}=\tfrac12 N\mechanical{m}\mechanical{v}^2,\qquad
\energy{U}\sim-\frac{G(N\mechanical{m})^2}{\mechanical{R}}.
$$

### PDF page 95

For a virialized sphere, $\mechanical{R}\sim G\mechanical{M}/\mechanical{v}^2$. With $\mechanical{r}_s=2G\mechanical{m}/\mechanical{v}^2$ and $\mechanical{M}=N\mechanical{m}$,

$$
\Lambda=\frac{\mechanical{R}}{\mechanical{r}_s}\sim\frac N2,\qquad
t_c=t_{\mathrm{cross}}=\frac{\mechanical{R}}{\mechanical{v}}.
$$

Using $n=N/(4\pi\mechanical{R}^3/3)$, the ratio becomes

$$
\frac{t_r}{t_c}
=\frac{\mechanical{v}^3}{8\pi G^2\mechanical{m}^2n\ln(N/2)}
\frac{\mechanical{v}}{\mechanical{R}}
\sim\frac{N}{6\ln(N/2)}.
$$

The source gives the following rounded examples.

| Object | $N$ | $t_r/t_c$ | Speed | Radius | Crossing time | Relaxation time |
| --- | --- | --- | --- | --- | --- | --- |
| Open cluster | $10^3$ | 26 | $\quantity{1}{km\cdot s^{-1}}$ | $\quantity{1}{pc}$ | $\quantity{1}{Myr}$ | $\quantity{26}{Myr}$ |
| Globular cluster | $10^6$ | $10^4$ | $\quantity{5}{km\cdot s^{-1}}$ | $\quantity{1}{pc}$ | $\quantity{0.2}{Myr}$ | $\quantity{2}{Gyr}$ |
| Elliptical galaxy | $10^{11}$ | $10^9$ | $\quantity{200}{km\cdot s^{-1}}$ | $\quantity{10}{kpc}$ | $\quantity{50}{Myr}$ | $\quantity{5\times10^{16}}{yr}$ |

### PDF page 96

#### Lecture of May 24, 2018. Dynamical relaxation

The lecture uses a Boltzmann factor $f(\energy{E})\propto e^{-\energy{E}/(k\thermal{T})}$, with $\energy{E}=\tfrac12\mechanical{m}\mechanical{v}^2+\mechanical{m}\energy{\Phi}(\mechanical{\mathbf x})$. At fixed position the speed distribution has the form

$$
f(\mechanical{v})\propto\mechanical{v}^2e^{-\mechanical{m}\mechanical{v}^2/(2k\thermal{T})}.
$$

![[Kyle Kabasares - Intro to Astrophysics - Speed distribution and escape tail.png|**Fig. 77** The high-speed tail beyond the escape speed is shaded. Stars in that tail can escape the cluster.]]

The mean kinetic energy needed to escape is

$$
\left\langle\tfrac12\mechanical{m}\mechanical{v}_{\mathrm{esc}}^2\right\rangle
=-\frac1N\sum_\alpha\mechanical{m}_\alpha\energy{\Phi}(\mechanical{\mathbf x}_\alpha).
$$

The mean potential energy per star is $\langle\energy{U}\rangle=(2N)^{-1}\sum_\alpha\mechanical{m}_\alpha\energy{\Phi}(\mechanical{\mathbf x}_\alpha)$ because each pair is counted twice. Thus the mean escape kinetic energy is $-2\langle\energy{U}\rangle$. For a virialized system, $2\langle\energy{K}\rangle=-\langle\energy{U}\rangle$ per star, so

$$
\left\langle\tfrac12\mechanical{m}\mechanical{v}_{\mathrm{esc}}^2\right\rangle
=4\langle\energy{K}\rangle,\qquad
\langle\energy{K}\rangle=\tfrac32 k\thermal{T}.
$$

### PDF page 97

The mean escape kinetic energy is $6k\thermal{T}$, giving

$$
\langle\mechanical{v}_{\mathrm{esc}}^2\rangle^{1/2}
=\sqrt{\frac{12k\thermal{T}}{\mechanical{m}}}.
$$

The fraction of stars above this speed in the model is

$$
\frac{\displaystyle\int_{\sqrt{12k\thermal{T}/\mechanical{m}}}^{\infty}
e^{-\mechanical{m}\mechanical{v}^2/(2k\thermal{T})}\mechanical{v}^2\,d\mechanical{v}}
{\displaystyle\int_{0}^{\infty}
e^{-\mechanical{m}\mechanical{v}^2/(2k\thermal{T})}\mechanical{v}^2\,d\mechanical{v}}
\simeq0.0074\simeq\frac{1}{136}.
$$

A gravitationally bound system has an effective negative specific heat. Removing positive energy raises its temperature after it returns to equilibrium. Mass segregation is observed in both globular and open clusters.

#### Stellar orbits in the Milky Way disk

The lecture asks why $\mechanical{\sigma}_x>\mechanical{\sigma}_y$ in local coordinates $(\mechanical{x},\mechanical{y},\mechanical{z})$.

##### Epicycle model

Stars undergo a small perturbation about a guiding circular orbit.

![[Kyle Kabasares - Intro to Astrophysics - Epicycle on a circular orbit.png|**Fig. 78** The small epicycle is drawn around a guiding point that moves on a larger circular orbit.]]

### PDF page 98

Use cylindrical coordinates $(\mechanical{R},\mechanical{z},\phi)$ and an axisymmetric potential $\energy{\Phi}(\mechanical{R},\mechanical{z})$. The angular momentum per unit mass about the symmetry axis, $\mechanical{L}_z=\mechanical{R}^2\dot\phi$, is constant.

![[Kyle Kabasares - Intro to Astrophysics - Effective potential and guiding radius.png|**Fig. 79** The effective radial potential has a minimum at the guiding radius $\mechanical{R}_g$. The gravitational potential is shown separately.]]

For planar motion, the Lagrangian and its radial equation are

$$
\mathcal L=\energy{T}-\energy{U}
=\tfrac12\mechanical{m}(\dot{\mechanical{R}}^2+\mechanical{R}^2\dot\phi^2)-\mechanical{m}\energy{\Phi},
\qquad
\frac{d}{dt}\frac{\partial\mathcal L}{\partial\dot{\mechanical{R}}}
-\frac{\partial\mathcal L}{\partial\mechanical{R}}=0.
$$

Define

$$
\energy{\Phi}_{\mathrm{eff}}=\energy{\Phi}+\frac{\mechanical{L}_z^2}{2\mechanical{R}^2},
\qquad
\ddot{\mechanical{R}}=-\frac{\partial\energy{\Phi}_{\mathrm{eff}}}{\partial\mechanical{R}}.
$$

The handwritten definition has a superscript $2$ on $\Phi_{\mathrm{eff}}$. The radial equation uses the effective potential itself. Multiply by $\dot{\mechanical{R}}$ and integrate in time to get

$$
\int\dot{\mechanical{R}}\ddot{\mechanical{R}}\,dt
=-\int\frac{d\mechanical{R}}{dt}\frac{d\energy{\Phi}_{\mathrm{eff}}}{d\mechanical{R}}\,dt,
\qquad
\tfrac12\dot{\mechanical{R}}^2+\energy{\Phi}_{\mathrm{eff}}=\mathrm{constant}.
$$

Define $\mechanical{\Omega}$ as the angular speed of a circular orbit at $\mechanical{R}=\mechanical{R}_g$.

### PDF page 99

The actual angular speed of the star is $\dot\phi$. Let $\mechanical{R}(t)=\mechanical{R}_g+\mechanical{x}(t)$. Expand the radial force near the guiding radius.

$$
\frac{\partial\energy{\Phi}_{\mathrm{eff}}}{\partial\mechanical{R}}
\simeq\left.\frac{\partial^2\energy{\Phi}_{\mathrm{eff}}}{\partial\mechanical{R}^2}\right|_{\mechanical{R}_g}
(\mechanical{R}-\mechanical{R}_g),\qquad
\ddot{\mechanical{x}}=-\mechanical{\kappa}^2\mechanical{x}.
$$

The epicyclic angular frequency $\mechanical{\kappa}$ follows from

$$
\mechanical{\kappa}^2
=\left.\left[
\frac{\partial}{\partial\mechanical{R}}\left(\frac{\partial\energy{\Phi}}{\partial\mechanical{R}}\right)
+\frac{\partial^2}{\partial\mechanical{R}^2}\left(\frac{\mechanical{L}_z^2}{2\mechanical{R}^2}\right)
\right]\right|_{\mechanical{R}_g}.
$$

For circular orbits, $\dot{\mechanical{R}}=\ddot{\mechanical{R}}=0$ and $\partial\energy{\Phi}/\partial\mechanical{R}=\mechanical{R}\mechanical{\Omega}^2$. The handwritten intermediate line gives $\mechanical{R}^2\mechanical{\Omega}$, which is the specific angular momentum. Using the circular-orbit force and $\mechanical{L}_z=\mechanical{R}_g^2\mechanical{\Omega}$ gives, at the guiding radius,

$$
\begin{aligned}
\mechanical{\kappa}^2(\mechanical{R})
&=\frac{\partial(\mechanical{R}\mechanical{\Omega}^2)}{\partial\mechanical{R}}
+3\mechanical{\Omega}^2\\
&=4\mechanical{\Omega}^2+2\mechanical{\Omega}\mechanical{R}
\frac{\partial\mechanical{\Omega}}{\partial\mechanical{R}}.
\end{aligned}
$$

### PDF page 100

Factor the expression for the epicyclic frequency.

$$
\mechanical{\kappa}^2
=4\mechanical{\Omega}\left(\mechanical{\Omega}+
\frac{\mechanical{R}}2\frac{\partial\mechanical{\Omega}}{\partial\mechanical{R}}\right)
=\boxed{-4B\mechanical{\Omega}}.
$$

The epicycle is retrograde relative to the guiding orbit. Conservation of angular momentum gives

$$
\dot\phi
=\frac{\mechanical{L}_z}{\mechanical{R}^2}
=\frac{\mechanical{\Omega}(\mechanical{R}_g)}{(1+\mechanical{x}/\mechanical{R}_g)^2}
\simeq\mechanical{\Omega}(\mechanical{R}_g)\left(1-\frac{2\mechanical{x}}{\mechanical{R}_g}\right).
$$

The radial oscillation is $\boxed{\mechanical{x}=\mechanical{X}\cos(\mechanical{\kappa}t+\psi)}$. Substitute it into the angular speed and integrate.

$$
\begin{aligned}
\dot\phi
&\simeq\mechanical{\Omega}(\mechanical{R}_g)
-\frac{2\mechanical{\Omega}(\mechanical{R}_g)\mechanical{X}}{\mechanical{R}_g}
\cos(\mechanical{\kappa}t+\psi),\\
\phi(t)&\simeq\phi_0+\mechanical{\Omega}(\mechanical{R}_g)t
-\frac{2\mechanical{\Omega}(\mechanical{R}_g)\mechanical{X}}{\mechanical{R}_g\mechanical{\kappa}}
\sin(\mechanical{\kappa}t+\psi).
\end{aligned}
$$

Here $\phi_0$ is the integration constant. The handwritten line labels it $\phi(0)$, which requires subtracting $\sin\psi$ from the sine term for a general initial phase. The lecture gives $2\pi/\mechanical{\kappa}\simeq\quantity{170}{Myr}$ at the solar radius $\mechanical{R}_0$.

### PDF page 101

#### Lecture of May 29, 2018. Epicycle geometry

![[Kyle Kabasares - Intro to Astrophysics - Radial and tangential epicycle axes.png|**Fig. 80** The epicycle in local coordinates, with $\mechanical{x}$ directed radially outward from the Galactic center and $\mechanical{y}$ along the guiding orbit.]]

The lecture recalls $\mechanical{\kappa}^2=-4B\mechanical{\Omega}$, where $\mechanical{\Omega}$ is the angular speed of a circular orbit. The radial perturbation is $\mechanical{x}(t)=\mechanical{X}\cos(\mechanical{\kappa}t+\psi)$, with amplitude $\mechanical{X}$. The star’s actual angular speed is

$$
\dot\phi=\mechanical{\Omega}(\mechanical{R}_g)
-\frac{2\mechanical{\Omega}(\mechanical{R}_g)}{\mechanical{R}_g}
\mechanical{X}\cos(\mechanical{\kappa}t+\psi),
$$

to first order. Integrating gives

$$
\phi(t)=\phi_0+\mechanical{\Omega}(\mechanical{R}_g)t
-\frac{2\mechanical{\Omega}(\mechanical{R}_g)}{\mechanical{R}_g\mechanical{\kappa}}
\mechanical{X}\sin(\mechanical{\kappa}t+\psi).
$$

Multiply the oscillating part of $\phi$ by $\mechanical{R}_g$ to obtain the tangential displacement $\mechanical{y}$. The ellipse has semiaxes $\mechanical{X}$ and $2\mechanical{\Omega}\mechanical{X}/\mechanical{\kappa}$.

### PDF page 102

Near the Sun, $\mechanical{\kappa}>\mechanical{\Omega}$ and $2\mechanical{\Omega}/\mechanical{\kappa}>1$, so the epicycle is longer in $\mechanical{y}$ than in $\mechanical{x}$. The epicyclic period is about $\quantity{170}{Myr}$, and the guiding circular period is about $\quantity{220}{Myr}$.

Consider a star with guiding radius $\mechanical{R}_g>\mechanical{R}_0$, observed at the solar radius. Its tangential speed relative to the local standard of rest is

$$
\begin{aligned}
\mechanical{v}_y
&=\mechanical{R}_0\dot\phi-\mechanical{R}_0\mechanical{\Omega}(\mechanical{R}_0)\\
&=\mechanical{R}_0\left[\mechanical{\Omega}(\mechanical{R}_g)
-\frac{2\mechanical{x}\mechanical{\Omega}(\mechanical{R}_g)}{\mechanical{R}_g}
-\mechanical{\Omega}(\mechanical{R}_0)\right]\\
&\simeq\mechanical{R}_0\left.\frac{d\mechanical{\Omega}}{d\mechanical{R}}\right|_{\mechanical{R}_0}
(\mechanical{R}_g-\mechanical{R}_0)
-\frac{2\mechanical{x}\mechanical{R}_0\mechanical{\Omega}(\mechanical{R}_g)}{\mechanical{R}_g}.
\end{aligned}
$$

At the crossing, $\mechanical{x}=\mechanical{R}_0-\mechanical{R}_g$, so $\mechanical{R}_0/\mechanical{R}_g=1+O(\mechanical{x}/\mechanical{R}_g)$.

### PDF page 103

Keeping first-order terms gives

$$
\begin{aligned}
\mechanical{v}_y&\simeq-\mechanical{R}_0\mechanical{x}
\left.\frac{d\mechanical{\Omega}}{d\mechanical{R}}\right|_{\mechanical{R}_0}
-2\mechanical{x}\mechanical{\Omega}(\mechanical{R}_0)\\
&=-2\mechanical{x}\left[\mechanical{\Omega}(\mechanical{R}_0)
+\frac{\mechanical{R}_0}{2}\left.\frac{d\mechanical{\Omega}}{d\mechanical{R}}\right|_{\mechanical{R}_0}\right]\\
&=2B\mechanical{x}=-\frac{\mechanical{\kappa}^2}{2\mechanical{\Omega}}\mechanical{x}.
\end{aligned}
$$

The radial and tangential oscillations are coupled. The notes give

$$
\langle\mechanical{v}_y^2\rangle=
\left(\frac{\mechanical{\kappa}^2}{2\mechanical{\Omega}}\right)^2
\langle\mechanical{x}^2\rangle.
$$

The displacement from the guiding center is typically unknown. From the radial oscillation, $\mechanical{v}_x=-\mechanical{X}\mechanical{\kappa}\sin(\mechanical{\kappa}t+\psi)$. Averaging the squared velocities over phase gives

$$
\langle\mechanical{v}_y^2\rangle=\frac{\mechanical{\kappa}^2}{4\mechanical{\Omega}^2}
\langle\mechanical{v}_x^2\rangle,\qquad
\mechanical{\sigma}_y^2=\frac{\mechanical{\kappa}^2}{4\mechanical{\Omega}^2}\mechanical{\sigma}_x^2.
$$

> [!note]
> The source’s last intermediate lines have a sign on the $B$ term inconsistent with $B$ on PDF page 79, omit the minus sign from differentiating the radial cosine, and repeat the $x$ component on both sides of the squared-velocity relation. The final dispersion ratio agrees with the phase average above.

### PDF page 104

Velocity dispersions describe the spread of random velocities. In terms of the Oort constants,

$$
\mechanical{\sigma}_y^2=\frac{-B}{A-B}\mechanical{\sigma}_x^2.
$$

The lecture refers to the Sparke and Gallagher homework for this result.

#### Asymmetric drift

The collisionless Boltzmann equation and the Jeans equation can be used to derive asymmetric drift. For a rotation-dominated system, $\mechanical{M}\sim\mechanical{R}\mechanical{v}_{\mathrm{circ}}^2/G$. For a dispersion-dominated system, $\mechanical{M}\sim\mechanical{R}\mechanical{\sigma}^2/G$. The notes illustrate the combined scaling as

$$
\mechanical{M}\sim\frac{\mechanical{R}\langle\mechanical{v}_{\mathrm{rot}}\rangle^2}{G}
+\frac{\mechanical{R}\mechanical{\sigma}^2}{G}.
$$

For the Milky Way disk, the lecture gives $\mechanical{v}_{\mathrm{rot}}\sim\quantity{220}{km\cdot s^{-1}}$ and $\mechanical{\sigma}\sim\quantity{20\text{–}30}{km\cdot s^{-1}}$.

### PDF page 105

![[Kyle Kabasares - Intro to Astrophysics - Rotation curve with an inner peak.png|**Fig. 81** A schematic disk rotation curve rises to an inner peak and then levels off.]]

#### Resonances

![[Kyle Kabasares - Intro to Astrophysics - Bar and spiral pattern.png|**Fig. 82** A central bar and surrounding curved structure in a galactic disk.]]

Let $\mechanical{\Omega}_{\mathrm b}$ be the bar pattern speed and $\mechanical{\Omega}(\mechanical{R})$ the circular orbital speed in angular units. A star receives periodic perturbations as the bar passes. For azimuthal harmonic $m$, a Lindblad resonance occurs when

$$
m(\mechanical{\Omega}-\mechanical{\Omega}_{\mathrm b})=\pm\mechanical{\kappa}.
$$

At the inner Lindblad resonance, $\mechanical{\Omega}-\mechanical{\Omega}_{\mathrm b}=\mechanical{\kappa}/m$.

### PDF page 106

At the outer Lindblad resonance, $\mechanical{\Omega}-\mechanical{\Omega}_{\mathrm b}=-\mechanical{\kappa}/m$. At corotation, $\mechanical{\Omega}=\mechanical{\Omega}_{\mathrm b}$.

#### Collisionless Boltzmann equation

Treat stars as flowing through phase space with three position and three velocity coordinates. The distribution function is

$$
f=f(\mechanical{x},\mechanical{y},\mechanical{z},
\mechanical{v}_x,\mechanical{v}_y,\mechanical{v}_z,t)
=f(\mechanical{\mathbf x},\mechanical{\mathbf v},t).
$$

Integrate over velocities to get the stellar number density.

$$
n(\mechanical{\mathbf x},t)
=\iiint f(\mechanical{\mathbf x},\mechanical{\mathbf v},t)
\,d\mechanical{v}_x\,d\mechanical{v}_y\,d\mechanical{v}_z.
$$

The mean velocity is

$$
\langle\mechanical{\mathbf v}\rangle(\mechanical{\mathbf x},t)
=\frac{\int f(\mechanical{\mathbf x},\mechanical{\mathbf v},t)\mechanical{\mathbf v}\,
d^3\mechanical{\mathbf v}}{n(\mechanical{\mathbf x},t)},
\qquad n\langle\mechanical{\mathbf v}\rangle=\iiint f\mechanical{\mathbf v}\,d^3\mechanical{\mathbf v}.
$$

### PDF page 107

The derivation assumes a time-independent potential and conserves the number of stars. Strong encounters are negligible. The stars respond to the large-scale potential $\energy{\Phi}$, so the system is collisionless.

#### Lecture of May 31, 2018. Phase-space flow

Consider a phase-space volume element

$$
d\mathcal V=d\mechanical{x}\,d\mechanical{y}\,d\mechanical{z}\,
d\mechanical{v}_x\,d\mechanical{v}_y\,d\mechanical{v}_z.
$$

![[Kyle Kabasares - Intro to Astrophysics - Phase space flow through opposite faces.png|**Fig. 83** Inflow through the face at $\mechanical{x}$ and outflow through the face at $\mechanical{x}+d\mechanical{x}$.]]

At the $\mechanical{x}$ face, the inflow rate is the face area times the flow speed times the phase-space density. It is $f\mechanical{v}_x\,d\mechanical{y}\,d\mechanical{z}\,d\mechanical{v}_x\,d\mechanical{v}_y\,d\mechanical{v}_z$. On the opposite face,

$$
(f\mechanical{v}_x)|_{\mechanical{x}+d\mechanical{x}}
\simeq f\mechanical{v}_x+\frac{\partial(f\mechanical{v}_x)}{\partial\mechanical{x}}\,d\mechanical{x}.
$$

The net inflow through the two $\mechanical{x}$ faces is $-\partial(f\mechanical{v}_x)/\partial\mechanical{x}$ times $d\mathcal V$.

### PDF page 108

The velocity coordinate $\mechanical{v}_x$ is independent of the spatial coordinate $\mechanical{x}$ in phase space, so the net flow through the $\mechanical{x}$ faces is

$$
-\frac{\partial(f\mechanical{v}_x)}{\partial\mechanical{x}}\,d\mathcal V
=-\mechanical{v}_x\frac{\partial f}{\partial\mechanical{x}}\,d\mathcal V.
$$

Now use the faces at $\mechanical{v}_x$ and $\mechanical{v}_x+d\mechanical{v}_x$. The flow speed in the velocity coordinate is $d\mechanical{v}_x/dt=-\partial\energy{\Phi}/\partial\mechanical{x}$. Multiplying by the face area and phase-space density gives the inflow rate

$$
f\frac{d\mechanical{v}_x}{dt}\,
d\mechanical{x}\,d\mechanical{y}\,d\mechanical{z}\,d\mechanical{v}_y\,d\mechanical{v}_z.
$$

At the opposite face the corresponding factor is

$$
\left[f\frac{d\mechanical{v}_x}{dt}\right]_{\mechanical{v}_x+d\mechanical{v}_x}
\simeq
-f\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}
-\frac{\partial}{\partial\mechanical{v}_x}
\left(f\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}\right)d\mechanical{v}_x.
$$

Subtract the two face flows to get the net inflow.

### PDF page 109

Because the potential depends on position, the net flow through the $\mechanical{v}_x$ faces is

$$
\frac{\partial}{\partial\mechanical{v}_x}
\left(f\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}\right)d\mathcal V
=\frac{\partial f}{\partial\mechanical{v}_x}
\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}\,d\mathcal V.
$$

The rate of change inside the phase-space volume is the sum of the net flows through all opposite pairs of faces. The two pairs for $\mechanical{x}$ and $\mechanical{v}_x$ give

$$
\frac{\partial f}{\partial t}\,d\mathcal V
=\left[-\mechanical{v}_x\frac{\partial f}{\partial\mechanical{x}}
+\frac{\partial f}{\partial\mechanical{v}_x}
\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}\right]d\mathcal V
$$

when the other components are suppressed. The source’s next line repeats $\partial f/\partial t$ in the first term on the right. The preceding line gives the spatial derivative used here.

Adding all directions gives the collisionless Boltzmann equation, a continuity equation in phase space.

$$
\boxed{\frac{\partial f}{\partial t}+\mechanical{\mathbf v}\cdot\nabla_{\mathbf x} f
-\nabla_{\mathbf x}\energy{\Phi}\cdot\nabla_{\mathbf v} f=0}.
$$

![[Kyle Kabasares - Intro to Astrophysics - Stellar trajectory through phase space.png|**Fig. 84** A star follows a trajectory through successive phase-space volume elements.]]

### PDF page 110

Along an allowed stellar trajectory, the chain rule gives the total derivative

$$
\frac{Df}{Dt}
=\frac{\partial f}{\partial t}
+\mechanical{\mathbf v}\cdot\nabla_{\mathbf x}f
-\nabla_{\mathbf x}\energy{\Phi}\cdot\nabla_{\mathbf v}f
=0.
$$

For the $\mechanical{x}$ and $\mechanical{v}_x$ pair, the two chain-rule terms are $(\partial f/\partial\mechanical{x})(d\mechanical{x}/dt)$ and $(\partial f/\partial\mechanical{v}_x)(d\mechanical{v}_x/dt)$. The other pairs work the same way. The phase-space density is constant along the path.

![[Kyle Kabasares - Intro to Astrophysics - Star orbit in cluster outskirts.png|**Fig. 85** A stellar orbit extends into the outskirts of a globular cluster.]]

For a one-dimensional example, integrate the collisionless Boltzmann equation over $\mechanical{v}_x$.

$$
\int\frac{\partial f}{\partial t}\,d\mechanical{v}_x
+\int\mechanical{v}_x\frac{\partial f}{\partial\mechanical{x}}\,d\mechanical{v}_x
-\int\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}
\frac{\partial f}{\partial\mechanical{v}_x}\,d\mechanical{v}_x=0.
$$

### PDF page 111

#### Velocity moments of the collisionless Boltzmann equation

In the one-dimensional notation, $n=\int_{-\infty}^{\infty} f\,d\mechanical{v}$ and $\langle\mechanical{v}\rangle=(\int f\mechanical{v}\,d\mechanical{v})/n$. Integration over velocity gives

$$
\frac{\partial n}{\partial t}+\frac{\partial(n\langle\mechanical{v}\rangle)}{\partial\mechanical{x}}
-\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}
\left[f\right]_{-\infty}^{\infty}=0.
$$

The boundary term vanishes because $f\to0$ at large speeds. The physical-space continuity equation is

$$
\boxed{\frac{\partial n}{\partial t}
+\frac{\partial(n\langle\mechanical{v}\rangle)}{\partial\mechanical{x}}=0}.
$$

For the next moment, multiply the collisionless Boltzmann equation by $\mechanical{v}$ and integrate.

$$
\int\mechanical{v}\frac{\partial f}{\partial t}\,d\mechanical{v}
+\int\mechanical{v}^2\frac{\partial f}{\partial\mechanical{x}}\,d\mechanical{v}
-\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}
\int\mechanical{v}\frac{\partial f}{\partial\mechanical{v}}\,d\mechanical{v}=0.
$$

The first two integrals are $\partial(n\langle\mechanical{v}\rangle)/\partial t$ and $\partial(n\langle\mechanical{v}^2\rangle)/\partial\mechanical{x}$. The last integral can be evaluated by integration by parts.

### PDF page 112

Assume $f\mechanical{v}\to0$ at both limits. Integration by parts gives

$$
\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}
\int_{-\infty}^{\infty}\mechanical{v}\frac{\partial f}{\partial\mechanical{v}}\,d\mechanical{v}
=\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}
\left([f\mechanical{v}]_{-\infty}^{\infty}-\int_{-\infty}^{\infty}f\,d\mechanical{v}\right)
=-n\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}.
$$

The moment equation is

$$
\frac{\partial(n\langle\mechanical{v}\rangle)}{\partial t}
+\frac{\partial(n\langle\mechanical{v}^2\rangle)}{\partial\mechanical{x}}
+n\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}=0.
$$

Substitute $\langle\mechanical{v}^2\rangle=\mechanical{\sigma}^2+\langle\mechanical{v}\rangle^2$ and apply the product rule. The terms $\langle\mechanical{v}\rangle\,\partial n/\partial t$ and $\langle\mechanical{v}\rangle\,\partial(n\langle\mechanical{v}\rangle)/\partial\mechanical{x}$ cancel by the continuity equation. Divide by $n$ to obtain the Jeans equation.

$$
\boxed{\frac{\partial\langle\mechanical{v}\rangle}{\partial t}
+\langle\mechanical{v}\rangle\frac{\partial\langle\mechanical{v}\rangle}{\partial\mechanical{x}}
=-\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}
-\frac{1}{n}\frac{\partial(n\mechanical{\sigma}^2)}{\partial\mechanical{x}}}.
$$

The Jeans equation is used to model stellar systems.

### PDF page 113

#### Mass density in the Galactic disk

![[Kyle Kabasares - Intro to Astrophysics - Solar location in the Galactic disk.png|**Fig. 86** A side view of the Milky Way disk and bulge with Earth’s location marked. The calculation uses stellar motion perpendicular to the disk.]]

For vertical equilibrium the Jeans equation gives

$$
\frac{\partial(n(\mechanical{z})\mechanical{\sigma}_z^2)}{\partial\mechanical{z}}
=-n(\mechanical{z})\frac{\partial\energy{\Phi}}{\partial\mechanical{z}}.
$$

Connect the potential to the total mass density with Poisson’s equation in cylindrical symmetry.

$$
4\pi G\mechanical{\rho}
=\frac{\partial^2\energy{\Phi}}{\partial\mechanical{z}^2}
+\frac1{\mechanical{R}}\frac{\partial}{\partial\mechanical{R}}
\left(\mechanical{R}\frac{\partial\energy{\Phi}}{\partial\mechanical{R}}\right),
\qquad
\frac{\partial\energy{\Phi}}{\partial\mechanical{R}}=\frac{\mechanical{v}_c^2}{\mechanical{R}}.
$$

For a nearly flat rotation curve, the radial derivative of $\mechanical{v}_c^2$ is nearly zero. Thus

$$
4\pi G\mechanical{\rho}(\mechanical{z})
\simeq-\frac{\partial}{\partial\mechanical{z}}
\left[\frac1n\frac{\partial(n(\mechanical{z})\mechanical{\sigma}_z^2)}{\partial\mechanical{z}}\right].
$$

Integrate over height to find the surface mass density $\mechanical{\Sigma}(<\mechanical{z})=\int_{-\mechanical{z}}^{+\mechanical{z}}\mechanical{\rho}(\mechanical{z}')\,d\mechanical{z}'$.

### PDF page 114

With symmetry about the disk midplane, the integrated result is

$$
\begin{aligned}
4\pi G\mechanical{\Sigma}(<\mechanical{z})
&=-2\int_{0}^{\mechanical{z}}\frac{\partial}{\partial\mechanical{z}'}
\left[\frac{1}{n}\frac{\partial(n\mechanical{\sigma}_z^2)}{\partial\mechanical{z}'}\right]d\mechanical{z}',\\
2\pi G\mechanical{\Sigma}(<\mechanical{z})
&=-\frac{1}{n(\mechanical{z})}
\frac{\partial[n(\mechanical{z})\mechanical{\sigma}_z^2]}{\partial\mechanical{z}}.
\end{aligned}
$$

The first line carries the minus sign from the density equation on the previous page. The source’s first line omits it, and its second line restores it. Before Gaia, observers used K dwarfs as tracers because their spectra and other properties could be identified.

The notes give the following estimates within $\mechanical{z}=\pm\quantity{1}{kpc}$.

| Component | Surface mass density in solar masses per square parsec |
| --- | --- |
| Total | About 70 |
| Disk stars and gas | About 40–50 |
| Halo stars, as labeled in the notes | About 10 |

#### Lecture of June 5, 2018. Chemical evolution

Walter Baade separated stars into the relatively metal-rich Population I of the disk and bulge and the metal-poor Population II of the halo. The notes recall Fritz Zwicky’s supernova classifications and the use of Type Ia supernovae as standard candles.

### PDF page 115

The lecture describes Type II core-collapse supernova spectra as fairly standard.

#### Origin of the elements

The primordial hydrogen and helium mass fractions are $X=0.76$ and $Y=0.24$. The solar metallicity is about $Z_\odot=0.02$ by mass. The notes append an extra $Z$ to the numerical value.

Alpha elements can form by successive addition of alpha particles. Binding energy per nucleon peaks in the iron group. Fission of heavy nuclei releases energy. Gluon exchange mediates the strong interaction. The notes mention cosmic-ray spallation in connection with lithium.

In the rapid neutron-capture process (r-process), nuclei capture multiple neutrons before beta decay. In the slow neutron-capture process (s-process), beta decay can occur between captures. The lecture lists core-collapse supernovae and neutron-star mergers as neutron-rich environments and describes neutron-star mergers as the main r-process site. Bismuth is listed at the upper end of the s-process.

The oxygen abundance relative to iron is

$$
[\mathrm O/\mathrm{Fe}]
=\log_{10}\left[
\frac{N_{\mathrm O,\star}/N_{\mathrm O,\odot}}
{N_{\mathrm{Fe},\star}/N_{\mathrm{Fe},\odot}}
\right].
$$

### PDF page 116

Heavy-element abundances rise with time. Different abundance ratios probe the timescales of enrichment. The lecture also notes radial metallicity gradients and very metal-poor halo stars.

#### Closed-box model

The model assumes the following.

1. Gas stays within the box.
2. Metals are produced in fixed relative proportions, represented by one type of supernova and one kind of metal.
3. The gas is always fully mixed.
4. The model has two kinds of stars. Short-lived stars explode immediately, and long-lived stars have lifetimes longer than the age of the galaxy.

Let $\mechanical{M}_{\mathrm g}(t)$ be the gas mass. Let $\mechanical{M}_\star(t)$ be the mass in long-lived stars and remnants, including neutron stars, black holes, and white dwarfs. The mass of heavy elements in the gas is $\mechanical{M}_{\mathrm h}(t)$. The gas-phase metallicity is

$$
Z(t)=\frac{\mechanical{M}_{\mathrm h}(t)}{\mechanical{M}_{\mathrm g}(t)}.
$$

### PDF page 117

#### A star formation event in the closed box

Let $\Delta\mechanical{M}_\star$ be the mass in long-lived stars and remnants produced by a burst. If the yield is $p$, then $p\,\Delta\mechanical{M}_\star$ of newly formed metals enters the gas. The burst locks up $Z\,\Delta\mechanical{M}_\star$ of metals already in the gas, so

$$
\Delta\mechanical{M}_{\mathrm h}=(p-Z)\Delta\mechanical{M}_\star.
$$

In differential form, the change in gas-phase metallicity is

$$
\begin{aligned}
dZ
&=d\left(\frac{\mechanical{M}_{\mathrm h}}{\mechanical{M}_{\mathrm g}}\right)
=\frac{d\mechanical{M}_{\mathrm h}-Z\,d\mechanical{M}_{\mathrm g}}{\mechanical{M}_{\mathrm g}}\\
&=\frac{p\,d\mechanical{M}_\star-Z(d\mechanical{M}_\star+d\mechanical{M}_{\mathrm g})}
{\mechanical{M}_{\mathrm g}}
=-p\,\frac{d\mechanical{M}_{\mathrm g}}{\mechanical{M}_{\mathrm g}}.
\end{aligned}
$$

In the closed box, $d\mechanical{M}_\star+d\mechanical{M}_{\mathrm g}=0$. Integrating gives

$$
Z-Z_0=-p\ln\left[\frac{\mechanical{M}_{\mathrm g}(t)}{\mechanical{M}_{\mathrm g}(0)}\right].
$$

The mass locked in stars and remnants is $\mechanical{M}_\star(t)=\mechanical{M}_{\mathrm g}(0)-\mechanical{M}_{\mathrm g}(t)$. This stellar mass formed at metallicities at or below the current gas metallicity $Z(t)$.

### PDF page 118

Solving for the gas mass gives

$$
\mechanical{M}_{\mathrm g}(t)=\mechanical{M}_{\mathrm g}(0)
\exp\left[-\frac{Z-Z_0}{p}\right].
$$

The stellar mass formed below metallicity $Z$ and its differential distribution are

$$
\mechanical{M}_\star(<Z)=\mechanical{M}_{\mathrm g}(0)
\left[1-\exp\left(-\frac{Z-Z_0}{p}\right)\right],\qquad
\frac{d\mechanical{M}_\star(<Z)}{dZ}
\propto\exp\left[-\frac{Z-Z_0}{p}\right].
$$

> [!note]
> The handwritten exponent places the minus sign on $Z$ alone. The previous page’s logarithmic relation requires $-(Z-Z_0)/p$. The initial gas mass is the first term in the cumulative stellar mass.

Dwarf spheroidal galaxies can have multiple generations of star formation.

#### The G-dwarf problem

The historical question is what fraction of stars in the Galactic disk have metallicities below one-quarter of a reference stellar metallicity. The notes write $\mechanical{M}_\star(<Z_\star/4)/\mechanical{M}_\star(<Z)$ and give $0.02$ for the solar reference metallicity. For initially metal-free gas,

$$
Z=p\ln\left[\frac{\mechanical{M}_{\mathrm g}(0)}{\mechanical{M}_{\mathrm g}(t)}\right],
$$

with the initial mass above the remaining gas mass in the ratio.

### PDF page 119

For the Milky Way disk example, use $Z_\odot=0.02$ and an initial-to-remaining gas surface-density ratio of $50/13$. The inferred yield is

$$
0.02\simeq p\ln(50/13),\qquad p\simeq0.74Z_\odot.
$$

The closed-box fraction below one-quarter solar metallicity is

$$
\frac{\mechanical{M}_\star(<Z_\odot/4)}
{\mechanical{M}_\star(<Z_\odot)}
=\frac{1-\exp[-Z_\odot/(4p)]}{1-\exp[-Z_\odot/p]}
\simeq0.4.
$$

The lecture gives an observed fraction under 1%. The discrepancy shows that the closed-box approximation predicts far too many low-metallicity stars for the Milky Way disk.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{M}_{\odot}$ | $\unit{\mathrm{g}}$ | Solar mass | Mass of the Sun. |
| — | $\unit{\mathrm{cm}}$ | Distance | Length measured in astronomical units, light-years, or parsecs. |
| — | $\unit{\mathrm{erg}}$ | Energy | Quantity measured in ergs in CGS. |
| $\energy{L}_{\odot}$ | $\unit{\mathrm{erg}\cdot\mathrm{s}^{-1}}$ | Solar luminosity | Radiant power of the Sun. |
| — | $\unit{\mathrm{rad}}$ | Plane angle | Angle measured in degrees, arcminutes, arcseconds, or radians. |
| — | $\unit{\mathrm{sr}}$ | Solid angle | Angular extent measured in steradians or square degrees. |
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
| — | $\unit{s^{-1}}$ | Count rate | Detector counts per second. |
| $\energy{f}_0$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}}$ | Reference flux | Flux scale for zero magnitude. |
| $b$ | 1 | Softening constant | Sets the low-flux scale of the inverse hyperbolic sine magnitude. |
| $\mechanical{a},\,\mechanical{a}_0$ | $\unit{cm}$ | Atmospheric path lengths | Slant and vertical distances through the atmosphere. |
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
| — | $\unit{h}$ | Hour angle | Angular distance of a celestial object from the local meridian, expressed in hours. |
| $\alpha$ | $\unit{h}$ | Right ascension | Celestial coordinate measured eastward along the celestial equator. |
| $\delta$ | $\unit{deg}$ | Declination | Angular distance north or south of the celestial equator. |
| $\mathrm{LST}$ | $\unit{h}$ | Local sidereal time | Right ascension on the local meridian. |
| $\ell,\,b$ | $\unit{deg}$ | Galactic longitude and latitude | Angles that specify a direction in the Galactic coordinate system. |
| $\mechanical{R}_0$ | $\unit{kpc}$ | Solar Galactocentric distance | Distance from the Sun to the Galactic center. |
| $\mechanical{R},\,\mechanical{z}$ | $\unit{kpc}$ | Galactocentric radius and height | Cylindrical radius from the Galactic axis and height from the Galactic plane. |
| $\phi$ | $\unit{rad}$ | Galactocentric azimuth | Azimuthal angle around the Galactic axis. |
| $\mechanical{\mathbf{v}}$ | $\unit{km\cdot s^{-1}}$ | Stellar velocity | Velocity of the star relative to the observer. |
| $\mechanical{v}_r,\,\mechanical{v}_t$ | $\unit{km\cdot s^{-1}}$ | Radial and transverse velocity | Components parallel and perpendicular to the line of sight. |
| $\mu$ | $\unit{arcsec\cdot yr^{-1}}$ | Proper motion | Angular rate of motion across the sky. |
| $\signal{\nu}_0,\,\signal{\nu}_{\mathrm{obs}}$ | $\unit{Hz}$ | Rest and observed frequencies | Frequency in the source rest frame and frequency measured by the observer. |
| $\beta,\,\gamma$ | 1 | Speed ratio and Lorentz factor | Radial speed in units of light speed and its associated relativistic factor. |
| $\signal{\lambda}_0,\,\signal{\lambda}_{\mathrm{obs}},\,\Delta\signal{\lambda}$ | $\unit{cm}$ | Rest wavelength, observed wavelength, and shift | Wavelengths in the rest and observer frames and the difference between them. |
| $\alpha$ | $\unit{arcsec}$ | Parallax angle | Angular shift due to a one-AU observing baseline. |
| $\lambda$ | $\unit{rad}$ | Convergent-point angle | Angle between the line of sight to the cluster member and the direction of the shared velocity. |
| $i$ | $\unit{deg}$ | Inclination | Angle between the orbital axis and the line of sight. |
| $\mechanical{M}_1,\,\mechanical{M}_2$ | $\unit{g}$ | Stellar masses | Masses of the binary components. |
| $\mechanical{r}_1,\,\mechanical{r}_2$ | $\unit{cm}$ | Orbital radii | Distances of the stars from their common center of mass. |
| $\mechanical{a}$ | $\unit{cm}$ | Binary separation | Distance between the two stars in a circular orbit. |
| $\mechanical{v}_1,\,\mechanical{v}_2$ | $\unit{cm\cdot s^{-1}}$ | Orbital speeds | Speeds of the stars about their center of mass. |
| $\signal{T}$ | $\unit{s}$ | Orbital period | Time for one orbit. |
| $\mechanical{\omega}$ | $\unit{rad\cdot s^{-1}}$ | Orbital angular speed | Rate of change of orbital phase. |
| $G$ | $\unit{cm^3\cdot g^{-1}\cdot s^{-2}}$ | Gravitational constant | Constant in Newton’s law of gravitation. |
| $\theta_1,\,\theta_2$ | $\unit{rad}$ | Angular orbital radii | Angular sizes of the two stars’ orbits about the common center of mass. |
| $\mechanical{k}_1,\,\mechanical{k}_2$ | $\unit{km\cdot s^{-1}}$ | Radial velocity amplitudes | Peak projected orbital speeds of the two components. |
| $\mechanical{M}$ | $\unit{g}$ | Stellar mass | Mass in the main-sequence scaling relations. |
| $\mechanical{R}$ | $\unit{km}$ | Stellar radius | Radius in the main-sequence scaling relation. |
| $\mechanical{R}_{\odot},\,\mechanical{R}_{\mathrm{Earth}}$ | $\unit{km}$ | Solar and terrestrial radii | Reference radii of the Sun and Earth. |
| $t_1,\ldots,t_8$ | $\unit{s}$ | Eclipse contact times | Ingress and egress landmarks in the binary light curve. |
| — | $\unit{\mathring{A}}$ | Equivalent width | Width of a continuum-level rectangle with the same integrated line deficit or excess. |
| $\mathrm{SFR}$ | $\unit{M_{\odot}\cdot yr^{-1}}$ | Star formation rate | Stellar mass formed per unit time. |
| $\Delta\mechanical{M}_{\star}$ | $\unit{M_{\odot}}$ | Formed stellar mass | Mass of stars formed over the given interval. |
| $\Delta t$ | $\unit{yr}$ | Time interval | Elapsed time over which stars formed. |
| $\mechanical{g}$ | $\unit{cm\cdot s^{-2}}$ | Surface gravity | Gravitational acceleration at the stellar surface. |
| $\Delta\energy{E}$ | $\unit{erg}$ | Energy width | Energy spread associated with a finite lifetime. |
| $\Delta\signal{\nu}$ | $\unit{Hz}$ | Doppler width | Frequency spread associated with thermal motion along the line of sight. |
| $X,\,Y,\,Z$ | 1 | Stellar mass fractions | Fractions of stellar mass in hydrogen, helium, and heavier elements. |
| $[\mathrm{Fe}/\mathrm{H}]$ | 1 | Iron abundance index | Base-ten logarithm of the iron-to-hydrogen ratio relative to the solar value. |
| $\energy{L}_{\mathrm{planet}},\,\energy{L}_{\star}$ | $\unit{erg\cdot s^{-1}}$ | Planet and stellar luminosities | Radiant powers compared in the direct-detection example. |
| $P$ | 1 | Geometric transit probability | Probability that a randomly oriented orbit produces a transit. |
| $\mechanical{R}_{\mathrm p},\,\mechanical{R}_{\star}$ | $\unit{cm}$ | Planet and stellar radii | Radii that set the projected transit geometry. |
| $e$ | 1 | Orbital eccentricity | Deviation of the orbit from a circle. |
| $\omega$ | $\unit{rad}$ | Argument of periastron | Orientation of periastron in the orbital plane. |
| $\signal{N}_{\mathrm{ADU}}$ | $\unit{ADU}$ | Photometric noise | Noise in digitized photometry counts. |
| $\signal{G}$ | $\unit{e^-\cdot ADU^{-1}}$ | Detector gain | Converts digitized counts to electrons. |
| $n_{\mathrm{pix}},\,n_{\mathrm b}$ | 1 | Pixel counts | Number of pixels in the photometry aperture and background sample. |
| $\signal{\sigma}_{\star},\,\signal{\sigma}_{\mathrm S},\,\signal{\sigma}_{\mathrm D},\,\signal{\sigma}_{\mathrm R},\,\signal{\sigma}_{\mathrm P}$ | $\unit{e^-}$ | Photometric noise components | Source noise and per-pixel terms in the aperture noise formula. |
| $F_{\mathrm T},\,F_{\mathrm E}$ | $\unit{counts}$ | Target and reference flux measurements | Measured counts for the target and reference stars. |
| $F_{\mathrm{rel}},\,\signal{\sigma}_{\mathrm{rel}}$ | 1 | Relative flux and uncertainty | Target-to-reference flux ratio and its propagated uncertainty. |
| $\signal{N},\,\signal{N}_{\mathrm T},\,\signal{N}_{\mathrm E}$ | $\unit{counts}$ | Count noise | Noise in the detected counts, including target and reference contributions. |
| $X$ | 1 | Airmass | Relative path length through the atmosphere. |
| $t_{\mathrm{exp}}$ | $\unit{s}$ | Exposure time | Duration of a photometric exposure. |
| $\signal{\sigma}_{\mathrm s},\,\signal{\sigma}_{\mathrm{photometric}}$ | — | Scintillation and photometric noise | Noise contributions compared in the exposure example. |
| $\mechanical{K}$ | $\unit{m\cdot s^{-1}}$ | Radial velocity amplitude | Amplitude of the stellar line-of-sight velocity caused by the planet. |
| $\mechanical{m}$ | $\unit{g}$ | Planet mass | Mass of the orbiting planet. |
| $\signal{I}_{\mathrm{obs}},\,\signal{I}_{\star}$ | — | Observed and stellar spectra | Recorded intensity and model stellar intensity as functions of wavelength. |
| $\signal{\Gamma}_{\mathrm I_2}$ | 1 | Iodine transmission | Fraction of incident light transmitted by the reference cell. |
| $\signal{\sigma}_{I}$ | — | Intensity uncertainty | Measurement uncertainty in the units of the spectrum. |
| $\signal{\sigma}_{\mathrm{RV}}$ | $\unit{m\cdot s^{-1}}$ | Radial velocity uncertainty | Uncertainty of the inferred velocity after conversion from a wavelength shift. |
| — | $\unit{Gyr}$ | Main-sequence lifetime | Time spent burning hydrogen in the stellar core. |
| — | $\unit{g\cdot cm^{-3}}$ | White-dwarf density | Mass per unit volume of the compact remnant. |
| $\Phi(M,\mechanical{\mathbf{x}})$ | $\unit{pc^{-3}\cdot mag^{-1}}$ | Stellar luminosity function | Number of stars per unit volume and absolute magnitude. |
| $\mechanical{\mathbf{x}}$ | $\unit{pc}$ | Spatial position | Position at which the luminosity function is evaluated. |
| $\Upsilon,\,\Upsilon_V$ | $\unit{M_{\odot}/L_{\odot}}$ | Mass-to-light ratio | Mass per unit luminosity, with a $V$-band form normalized to solar values. |
| $A(m)$ | $\unit{sr^{-1}\cdot mag^{-1}}$ | Apparent-magnitude count distribution | Number of stars per unit solid angle and apparent magnitude. |
| $N(m)$ | $\unit{sr^{-1}}$ | Cumulative magnitude count | Number of stars per unit solid angle above the brightness limit. |
| $N(\mechanical{r})$ | 1 | Cumulative distance count | Number of stars within the distance limit in the selected cone. |
| $n$ | $\unit{pc^{-3}}$ | Stellar number density | Number of stars per unit volume. |
| $\Omega$ | $\unit{sr}$ | Solid angle | Angular area of the selected sky cone. |
| $\energy{S}$ | $\unit{Jy}$ | Radio flux density | Flux density on the horizontal axis of the radio source count sketch. |
| $\Phi(M)$ | — | Magnitude distribution factor | Magnitude-dependent part of the separable luminosity function. Its units depend on the normalization of the spatial factor. |
| $\nu(\mechanical{\mathbf{x}}),\,\nu(\mechanical{s})$ | — | Spatial distribution factor | Position-dependent part of the separable luminosity function. |
| $\mechanical{s}$ | $\unit{pc}$ | Line-of-sight distance | Distance from the observer to the volume element. |
| $a(\mechanical{s})$ | 1 | Extinction along the line of sight | Magnitude increase due to attenuation out to distance $\mechanical{s}$. |
| $A_{\Omega}(m)$ | $\unit{mag^{-1}}$ | Star count in the field | Number of stars per unit apparent magnitude in solid angle $\Omega$. |
| $M_0,\,\langle M\rangle_m$ | 1 | Mean absolute magnitudes | Intrinsic mean for the class and mean for stars selected at apparent magnitude $m$. |
| $\sigma$ | 1 | Absolute-magnitude dispersion | Standard deviation of the Gaussian magnitude distribution. |
| $\Psi(M)$ | $\unit{mag^{-1}}$ | Initial luminosity function | Number formed per unit absolute magnitude. |
| $\tau_{\mathrm{gal}}$ | $\unit{yr}$ | Population age | Time elapsed since the single burst of star formation. |
| $\tau_{\mathrm{MS}}$ | $\unit{yr}$ | Main-sequence lifetime | Time before a star leaves the main sequence. |
| $\xi(\mechanical{M})$ | $\unit{pc^{-3}\cdot M_{\odot}^{-1}}$ | Initial mass function | Number of stars formed per unit volume and mass interval. |
| $\xi_0$ | $\unit{pc^{-3}\cdot M_{\odot}^{-1}}$ | IMF normalization | Amplitude of the Salpeter mass distribution. |
| $t_0$ | $\unit{yr}$ | Star formation decay time | E-folding time of the exponential star formation history. |
| $\mechanical{\sigma}$ | $\unit{km\cdot s^{-1}}$ | Velocity dispersion | Standard deviation of velocities along the chosen direction. |
| $n(\mechanical{R},\mechanical{z},S),\,n_0$ | $\unit{pc^{-3}}$ | Disk stellar number density | Density of the stellar class $S$ at the given position and its central normalization. |
| $\mechanical{h}_R(S),\,\mechanical{h}_z(S)$ | $\unit{kpc}$ | Radial and vertical scale lengths | E-folding distances of the disk density profile. |
| $\mechanical{\sigma}_z$ | $\unit{km\cdot s^{-1}}$ | Vertical velocity dispersion | Spread of stellar velocities perpendicular to the disk. |
| $[a/b]$ | 1 | Relative elemental abundance | Logarithm of the number ratio of elements $a$ and $b$ relative to the solar ratio. |
| — | $\unit{pc}$ | Core radius | Radius at which a cluster’s surface brightness is half the central value. |
| $\mechanical{v}_c,\,\mechanical{v}_{\mathrm{tang}}$ | $\unit{km\cdot s^{-1}}$ | Circular and tangential velocities | Orbital speeds along the direction of rotation. |
| $\mechanical{M}(\mechanical{R})$ | $\unit{M_{\odot}}$ | Enclosed mass | Mass inside radius $\mechanical{R}$. |
| $\mechanical{v}_0$ | $\unit{km\cdot s^{-1}}$ | Solar circular speed | Circular rotation speed at the Sun’s Galactocentric radius. |
| $\mechanical{\omega}_0$ | $\unit{rad\cdot s^{-1}}$ | Solar orbital angular speed | Angular speed of circular rotation at the Sun’s location. |
| $A$ | $\unit{km\cdot s^{-1}\cdot kpc^{-1}}$ | First Oort constant | Local rotational shear inferred from the longitude dependence of radial velocities. |
| $B$ | $\unit{km\cdot s^{-1}\cdot kpc^{-1}}$ | Second Oort constant | Offset in the nearby tangential velocity per unit distance. |
| $\energy{\Phi}$ | $\unit{erg\cdot g^{-1}}$ | Gravitational potential | Potential energy per unit test mass. |
| $\mechanical{\rho}$ | $\unit{g\cdot cm^{-3}}$ | Mass density | Mass per unit volume in the continuous gravitational model. |
| $\mechanical{a}_{\mathrm p}$ | $\unit{pc}$ | Plummer scale radius | Length parameter of the Plummer potential. |
| $\mechanical{r}_c$ | $\unit{pc}$ | Plummer core radius | Projected radius at half the central surface density. |
| $\mechanical{r}_0$ | $\unit{pc}$ | Potential reference radius | Radius at which the logarithmic potential is set to zero. |
| $\mechanical{\rho}_{\mathrm{NFW}}$ | $\unit{g\cdot cm^{-3}}$ | Halo density scale | Normalization of the Navarro–Frenk–White profile. |
| $\mechanical{a}_{\mathrm N}$ | $\unit{kpc}$ | Halo scale radius | Radius parameter of the Navarro–Frenk–White profile. |
| $\energy{E},\,\energy{E}_{\mathrm k},\,\energy{E}_{\mathrm p}$ | $\unit{erg}$ | Total, kinetic, and potential energies | Energies of the particle in the static gravitational potential. |
| $\mechanical{v}_{\mathrm{escape}}$ | $\unit{cm\cdot s^{-1}}$ | Escape speed | Speed that gives zero total energy when the potential vanishes at infinity. |
| $\mechanical{\mathbf L}$ | $\unit{g\cdot cm^2\cdot s^{-1}}$ | Angular momentum | Cross product of position and momentum. |
| $\mechanical{\mathbf F}_{\mathrm{ext},\alpha}$ | $\unit{dyn}$ | External force | Force on particle $\alpha$ from outside the self-gravitating system. |
| $\mechanical{I}$ | $\unit{g\cdot cm^2}$ | Scalar moment of inertia | Sum of particle masses times squared distances from the origin. |
| $\energy{K},\,\energy{U}$ | $\unit{erg}$ | System kinetic and potential energies | Total kinetic energy and gravitational pair potential energy. |
| $\mechanical{\sigma}_r$ | $\unit{km\cdot s^{-1}}$ | Line-of-sight velocity dispersion | One measured component of the cluster velocity dispersion. |
| $\eta$ | 1 | Cluster structure parameter | Relates the core radius to the gravitational potential energy in the virial estimate. |
| $\mechanical{r}_s$ | $\unit{AU}$ | Strong-encounter radius | Separation where the gravitational interaction energy is comparable to the initial kinetic energy. |
| $t_s$ | $\unit{yr}$ | Time between strong encounters | Time for the moving star to sweep a volume containing one stellar encounter on average. |
| $\mechanical{b}$ | $\unit{pc}$ | Impact parameter | Closest distance along the unperturbed straight-line path. |
| $\mechanical{v}_\perp$ | $\unit{km\cdot s^{-1}}$ | Transverse velocity change | Velocity acquired perpendicular to the incoming path. |
| $\mechanical{F}_{\perp}$ | $\unit{dyn}$ | Transverse gravitational force | Force component perpendicular to the incoming path. |
| $\alpha$ | $\unit{rad}$ | Scattering angle | Small change in the direction of the moving star. |
| $t_{\mathrm{relax}}$ | $\unit{yr}$ | Relaxation time | Time for accumulated weak encounters to change the velocity by order its initial magnitude. |
| $\Lambda$ | 1 | Impact-parameter ratio | Largest divided by smallest impact parameter in the weak-encounter estimate. |
| $t_c,\,t_{\mathrm{cross}}$ | $\unit{yr}$ | Crossing time | Time to traverse the characteristic system radius at the characteristic speed. |
| $\mechanical{L}_z$ | $\unit{cm^2\cdot s^{-1}}$ | Specific angular momentum | Conserved angular momentum about the symmetry axis per unit mass. |
| $\energy{\Phi}_{\mathrm{eff}}$ | $\unit{erg\cdot g^{-1}}$ | Effective potential | Gravitational potential plus the centrifugal term. |
| $\mechanical{R}_g$ | $\unit{kpc}$ | Guiding radius | Radius of the circular orbit at the minimum of the effective potential. |
| $\mechanical{\Omega}$ | $\unit{rad\cdot s^{-1}}$ | Circular angular speed | Angular speed of the guiding orbit. |
| $\mechanical{\kappa}$ | $\unit{rad\cdot s^{-1}}$ | Epicyclic angular frequency | Frequency of small radial oscillations about the guiding orbit. |
| $\mechanical{X}$ | $\unit{pc}$ | Epicycle amplitude | Maximum radial displacement from the guiding orbit. |
| $\psi$ | $\unit{rad}$ | Epicycle phase | Initial phase of the radial oscillation. |
| $\mechanical{v}_x,\,\mechanical{v}_y$ | $\unit{km\cdot s^{-1}}$ | Local velocity components | Radial and tangential components relative to the local standard of rest. |
| $\mechanical{\sigma}_x,\,\mechanical{\sigma}_y$ | $\unit{km\cdot s^{-1}}$ | In-plane velocity dispersions | Spreads of the radial and tangential components. |
| $\mechanical{v}_{\mathrm{rot}}$ | $\unit{km\cdot s^{-1}}$ | Rotation speed | Ordered azimuthal motion contributing to the dynamical mass estimate. |
| $\mechanical{\Omega}_{\mathrm b}$ | $\unit{rad\cdot s^{-1}}$ | Bar pattern speed | Angular speed of the rotating Galactic bar. |
| $f(\mechanical{\mathbf x},\mechanical{\mathbf v},t)$ | $\unit{pc^{-3}\cdot(km\cdot s^{-1})^{-3}}$ | Stellar phase-space distribution | Number of stars per unit spatial and velocity volume. |
| $\langle\mechanical{\mathbf v}\rangle$ | $\unit{km\cdot s^{-1}}$ | Mean stellar velocity | First velocity moment divided by the local number density. |
| $\mechanical{\Sigma}(<\mechanical{z})$ | $\unit{M_{\odot}\cdot pc^{-2}}$ | Surface mass density | Mass per unit area between the two stated heights about the disk midplane. |
| $Z_\odot$ | 1 | Solar metallicity | Solar mass fraction in elements heavier than helium. |
| $[\mathrm O/\mathrm{Fe}]$ | 1 | Oxygen-to-iron abundance index | Base-ten logarithm of the oxygen-to-iron number ratio relative to the Sun. |
| $\mechanical{M}_{\mathrm g},\,\mechanical{M}_{\mathrm h}$ | $\unit{M_{\odot}}$ | Gas mass and gas-phase heavy-element mass | Total gas mass and the mass of metals contained in that gas. |
| $\mechanical{M}_{\star}$ | $\unit{M_{\odot}}$ | Locked stellar mass | Mass in long-lived stars and stellar remnants. |
| $Z(t)$ | 1 | Gas-phase metallicity | Mass fraction of metals in the gas. |
| $p$ | 1 | Metal yield | Newly synthesized metal mass returned to the gas per unit mass locked into stars and remnants. |
| $Z_0$ | 1 | Initial gas metallicity | Metal mass fraction of the gas at the start of the closed-box model. |
