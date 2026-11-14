---
title: "Celestial coordinates, astrometry, and stellar binaries"
---

> [!TLDR]
> Use astronomical coordinate systems, parallax, proper motion, and binary orbits to infer distances, velocities, and masses.

## Worked lecture material

Adaptive optics compensates for blurring in real time.

##### Coordinate systems

Earth rotates eastward. The local meridian passes through the zenith and crosses the horizon at north and south.

![[Kyle Kabasares - Intro to Astrophysics - Local meridian and horizon.png|**Fig. 19** The horizon and meridian on the local sky, with east, west, and the zenith marked.]]

The hour angle indicates how far east or west an object is from the meridian, expressed in hours.

![[Kyle Kabasares - Intro to Astrophysics - Celestial poles and stellar paths.png|**Fig. 20** The celestial sphere with its north and south poles, the equator, and the apparent tracks of stars.]]

Stellar tracks appear different at the equator. Irvine lies at about $33^\circ40^\prime$ north. From there, the celestial equator crosses the sky at an angle to the horizon.

![[Kyle Kabasares - Intro to Astrophysics - Tilted stellar tracks at Irvine.png|**Fig. 21** The local horizon and apparent stellar tracks on the celestial sphere. The red line marks the tilted north–south axis.]]

##### Celestial coordinates

Right ascension and declination are abbreviated RA and dec, or $(\alpha,\delta)$. The north celestial pole is at $\delta=+90^\circ$ and the south celestial pole is at $\delta=-90^\circ$.

![[Kyle Kabasares - Intro to Astrophysics - Declination at the poles and equator.png|**Fig. 22** Declination is $0^\circ$ at the celestial equator, $+90^\circ$ at the north pole, and $-90^\circ$ at the south pole.]]

##### Right ascension

Right ascension is analogous to terrestrial longitude. It is written in hours, minutes, and seconds, with 60 minutes in an hour and 60 seconds in a minute. An example is $22\mathord{:}56\mathord{:}31.57$.

> [!note]
> The source says “latitude” here. Declination corresponds to latitude, and right ascension corresponds to longitude.

![[Kyle Kabasares - Intro to Astrophysics - Right ascension grid.png|**Fig. 23** Lines of constant right ascension converge at the celestial poles. The equatorial labels wrap from 23 hours to 0 hours.]]

The arc length along a circle of constant declination depends on $\delta$. One hour of RA spans $15^\circ\cos\delta$ along that circle, and one second of RA spans $15^{\prime\prime}\cos\delta$.

##### The Sun’s motion across the sky

The daily or diurnal motion of the Sun across the sky is due to Earth’s rotation.

##### The celestial equator and ecliptic

The Sun’s apparent annual path on the celestial sphere is a great circle called the ecliptic. The tilt of Earth’s rotation axis makes the ecliptic about $23.5^\circ$ from the celestial equator.

![[Kyle Kabasares - Intro to Astrophysics - Ecliptic and equinoxes.png|**Fig. 24** The ecliptic crosses the celestial equator at the equinoxes, at right ascensions of 0 and 12 hours. The solstices are at 6 and 18 hours.]]

##### Mean solar day

The lecture compares the mean solar day with the sidereal period. After 24 hours, Earth has moved along its orbit and the noon orientation is different relative to distant space.

![[Kyle Kabasares - Intro to Astrophysics - Mean solar day geometry.png|**Fig. 25** Two positions of Earth one mean solar day apart. The lines toward the Sun show how the noon direction changes.]]

##### Local sidereal time

Local sidereal time (LST) is the right ascension currently crossing the local meridian. A mean solar day is 3 minutes 56 seconds longer than a sidereal day. The lecture emphasizes remembering this difference.

##### Precession of the equinoxes

![[Kyle Kabasares - Intro to Astrophysics - Precession of the north celestial pole.png|**Fig. 26** As Earth’s axis precesses, the north celestial pole traces a circle on the sky that passes near Polaris, Thuban, and Vega.]]

##### Annual motion of the Sun

Over a year, the Sun traces a complete circle on the celestial sphere along the ecliptic. The margin lists B1950 and J2000 as reference epochs and marks J2000 as the standard for the lecture.

##### Galactic coordinates

Galactic coordinates are longitude $\ell$ and latitude $b$.

![[Kyle Kabasares - Intro to Astrophysics - Galactic longitude and latitude.png|**Fig. 27** Galactic longitude $\ell$ is measured from the direction to the Galactic center (GC). Galactic latitude $b$ is measured above the Galactic plane. The observer is at distance $\mechanical{R}_0$ from the center.]]

Galactocentric cylindrical coordinates are $(\mechanical{R},\mechanical{z},\phi)$.

![[Kyle Kabasares - Intro to Astrophysics - Galactocentric cylindrical coordinates.png|**Fig. 28** The coordinates of a star are its projected distance $\mechanical{R}$ from the Galactic center, its height $\mechanical{z}$ above the plane, and the azimuth $\phi$.]]

##### Celestial reference frames

The source lists B1950 and FK5 together and gives a precision of about $0.03^{\prime\prime}$. It lists about 200 quasars for the International Celestial Reference System (ICRS) and also mentions SIMBAD.

> [!note]
> B1950 is conventionally associated with FK4, and J2000 with FK5.

##### Measuring stellar velocities

The radial component $\mechanical{v}_r$ is measured from the Doppler shift. The transverse component $\mechanical{v}_t$ is associated with proper motion.

![[Kyle Kabasares - Intro to Astrophysics - Radial and transverse stellar velocities.png|**Fig. 29** A star’s velocity $\mechanical{\mathbf{v}}$ has a component along the line of sight and a component perpendicular to it.]]

##### Proper motion

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

##### Redshift

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

##### Stellar classification

Read about stellar classification in the OpenStax astronomy textbook. The course goal is to explain stellar structure and classification.

Look at stellar spectra and find a Wikipedia article to contribute to.

##### Trigonometric parallax

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

The semimajor axis of the annual parallax ellipse is the parallax angle. The lecture gives about $\quantity{200}{pc}$ as a practical parallax range in the context of this example.

![[Kyle Kabasares - Intro to Astrophysics - Local parallax reach in the Milky Way.png|**Fig. 33** The local region within parallax reach is small on the scale of the Galaxy. The diagram marks $\quantity{8.5}{kpc}$ from the Sun to the Galactic center.]]

##### Astrometric catalogs

| Catalog | Coverage stated in the lecture | Precision stated in the lecture |
| --- | --- | --- |
| Hipparcos | About 100,000 stars to $V=7.3\,\unit{mag}$. The notes list a $\quantity{29}{cm}$ telescope and the dates 1985–1993. | Positions about $\quantity{1\text{–}3}{mas}$ and proper motions about $\quantity{1\text{–}2}{mas\cdot yr^{-1}}$. |
| Tycho | About 2.5 million stars. | Lower precision than Hipparcos. |
| U.S. Naval Observatory CCD catalog | About 48 million stars. | Positions about $\quantity{20\text{–}70}{mas}$ and proper motions about $\quantity{1\text{–}7}{mas\cdot yr^{-1}}$. |
| Gaia | About $10^9$ stars. | |

The lecture asks students to read about the Gaia spacecraft.

##### Moving cluster method

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

##### Secular and statistical parallax

![[Kyle Kabasares - Intro to Astrophysics - Secular parallax and solar motion.png|**Fig. 36** The diagram marks a solar motion of about $\quantity{4}{AU\cdot yr^{-1}}$ and shows apparent proper motions against background stars.]]

##### Masses of stars and binaries

An inclination of $i=0^\circ$ is face-on. An inclination of $i=90^\circ$ is edge-on.

![[Kyle Kabasares - Intro to Astrophysics - Orbital inclination.png|**Fig. 37** A disk inclined by $i$ from the plane of the sky as viewed along the dashed line of sight.]]

##### Circular orbits

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

##### Visual and spectroscopic binaries

- A visual binary is a pair whose two components can be resolved. These binaries typically have large orbital separations.
- A spectroscopic binary is a spatially unresolved pair whose spectrum reveals its binary nature.

Spectroscopic binaries are double-lined when lines from both stars are visible and single-lined when lines from only one star are visible. In an eclipsing binary, the orbital inclination is close to $90^\circ$.

##### Using binaries to calculate masses

Measure the angular orbital radii $\theta_1$ and $\theta_2$. The inclination can in principle be determined. For angular radii corrected for projection,

$$
\mechanical{r}_1=\theta_1\mechanical{d},\qquad
\mechanical{r}_2=\theta_2\mechanical{d}.
$$

If the distance is known, these radii give the mass ratio and the separation $\mechanical{a}$. The orbital period then gives the individual masses. At fixed measured angles and period, $\mechanical{M}_1$ and $\mechanical{M}_2$ scale as $\mechanical{a}^3\propto\mechanical{d}^3$.

##### Spectroscopic binaries

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

![[Kyle Kabasares - Intro to Astrophysics - Primary and secondary eclipse light curve.png|**Fig. 40** Normalized luminosity versus time for an eclipsing binary. The secondary eclipse spans contacts $t_1$ through $t_4$, and the deeper primary eclipse spans $t_5$ through $t_8$.]]

Mass transfer can complicate the analysis of binaries.

##### Main-sequence stars

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

##### Color and filter fluxes

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
> The source’s last line gives Vega’s $V$-band flux in the denominator. The $B$-band comparison uses Vega’s $B$-band flux, as on [[Astronomical fluxes, magnitudes, and extinction#Vega and AB magnitude zero points|the section on Vega and AB magnitude zero points]].

## Source

Kyle Kabasares, *Intro to Astrophysics (Physics 240A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{M}_{\odot}$ | $\unit{\mathrm{g}}$ | Solar mass | Mass of the Sun. |
| $\energy{L}_{\odot}$ | $\unit{\mathrm{erg}\cdot\mathrm{s}^{-1}}$ | Solar luminosity | Radiant power of the Sun. |
| $\energy{L}$ | $\unit{erg\cdot s^{-1}}$ | Luminosity | Total radiant power. |
| $\mechanical{d}$ | $\unit{cm}$ | Distance to the source | Distance from the observer to the spherical source. |
| $\signal{\nu}$ | $\unit{Hz}$ | Frequency | Frequency of the radiation. |
| $\signal{\lambda}$ | $\unit{cm}$ | Wavelength | Wavelength of the radiation. |
| $\signal{c}$ | $\unit{cm\cdot s^{-1}}$ | Speed of light | Speed of light in vacuum. |
| $k$ | $\unit{erg\cdot K^{-1}}$ | Boltzmann constant | Relates temperature to energy. |
| $\mechanical{r}$ | $\unit{cm}$ | Emitter radius | Radius of the spherical emitter. |
| $m$ | 1 | Apparent magnitude | Logarithmic measure of observed flux relative to a zero point. |
| $b$ | 1 | Softening constant | Sets the low-flux scale of the inverse hyperbolic sine magnitude. |
| $B-V$ | 1 | Color index | Difference between the apparent magnitudes in the $B$ and $V$ filters. |
| $A$ | 1 | Extinction | Increase in apparent magnitude caused by attenuation. |
| $\mechanical{r}$ | — | Profile radius | Radial coordinate in the surface brightness sketch. |
| $\theta$ | $\unit{rad}$ | Position angle | Orientation on the sky measured from north toward east. |
| $\theta$ | $\unit{rad}$ | Angular resolution | Minimum angular separation in the Rayleigh criterion. |
| — | $\unit{h}$ | Hour angle | Angular distance of a celestial object from the local meridian, expressed in hours. |
| $\alpha$ | $\unit{h}$ | Right ascension | Celestial coordinate measured eastward along the celestial equator. |
| $\delta$ | $\unit{deg}$ | Declination | Angular distance north or south of the celestial equator. |
| $\mathrm{LST}$ | $\unit{h}$ | Local sidereal time | Right ascension on the local meridian. |
| $\mechanical{R}_0$ | $\unit{kpc}$ | Solar Galactocentric distance | Distance from the Sun to the Galactic center. |
| $\phi$ | $\unit{rad}$ | Galactocentric azimuth | Azimuthal angle around the Galactic axis. |
| $\mechanical{\mathbf{v}}$ | $\unit{km\cdot s^{-1}}$ | Stellar velocity | Velocity of the star relative to the observer. |
| $\mu$ | $\unit{arcsec\cdot yr^{-1}}$ | Proper motion | Angular rate of motion across the sky. |
| $\alpha$ | $\unit{arcsec}$ | Parallax angle | Angular shift due to a one-AU observing baseline. |
| $\lambda$ | $\unit{rad}$ | Convergent-point angle | Angle between the line of sight to the cluster member and the direction of the shared velocity. |
| $i$ | $\unit{deg}$ | Inclination | Angle between the orbital axis and the line of sight. |
| $\mechanical{a}$ | $\unit{cm}$ | Binary separation | Distance between the two stars in a circular orbit. |
| $\signal{T}$ | $\unit{s}$ | Orbital period | Time for one orbit. |
| $\mechanical{\omega}$ | $\unit{rad\cdot s^{-1}}$ | Orbital angular speed | Rate of change of orbital phase. |
| $G$ | $\unit{cm^3\cdot g^{-1}\cdot s^{-2}}$ | Gravitational constant | Constant in Newton’s law of gravitation. |
| $\theta_1,\,\theta_2$ | $\unit{rad}$ | Angular orbital radii | Angular sizes of the two stars’ orbits about the common center of mass. |
| $\mechanical{M}$ | $\unit{g}$ | Stellar mass | Mass in the main-sequence scaling relations. |
| $\mechanical{R}$ | $\unit{km}$ | Stellar radius | Radius in the main-sequence scaling relation. |
| $\omega$ | $\unit{rad}$ | Argument of periastron | Orientation of periastron in the orbital plane. |
| $A$ | $\unit{km\cdot s^{-1}\cdot kpc^{-1}}$ | First Oort constant | Local rotational shear inferred from the longitude dependence of radial velocities. |
| $B$ | $\unit{km\cdot s^{-1}\cdot kpc^{-1}}$ | Second Oort constant | Offset in the nearby tangential velocity per unit distance. |
| $\alpha$ | $\unit{rad}$ | Scattering angle | Small change in the direction of the moving star. |
